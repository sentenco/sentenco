-- Follow (one-way) and Connect (two-way, needs accepting) between teachers.
-- Run once in the Supabase SQL editor. Safe to run again.

-- 1. Follows: a follower sees the other teacher's posts in their Homeroom "Following" feed.
create table if not exists follows (
  follower_id uuid not null references auth.users(id) on delete cascade,
  followee_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, followee_id),
  check (follower_id <> followee_id)
);
create index if not exists follows_followee_idx on follows (followee_id);
alter table follows enable row level security;

drop policy if exists "follows_select" on follows;
create policy "follows_select" on follows for select
  using (follower_id = auth.uid() or followee_id = auth.uid());
drop policy if exists "follows_insert" on follows;
create policy "follows_insert" on follows for insert
  with check (follower_id = auth.uid());
drop policy if exists "follows_delete" on follows;
create policy "follows_delete" on follows for delete
  using (follower_id = auth.uid());

-- 2. Connections: a request from one teacher to another, 'accepted' once they say yes.
create table if not exists connections (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references auth.users(id) on delete cascade,
  addressee_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'accepted')),
  created_at timestamptz not null default now(),
  responded_at timestamptz,
  check (requester_id <> addressee_id)
);
create unique index if not exists connections_pair_idx
  on connections (least(requester_id, addressee_id), greatest(requester_id, addressee_id));
create index if not exists connections_addressee_idx on connections (addressee_id, status);
alter table connections enable row level security;

drop policy if exists "connections_select" on connections;
create policy "connections_select" on connections for select
  using (requester_id = auth.uid() or addressee_id = auth.uid());
-- Requests and answers go through the functions below; people can only read their own rows directly.

-- 3. Notifications: three new kinds.
alter table notifications drop constraint if exists notifications_type_check;
alter table notifications add constraint notifications_type_check
  check (type in ('post_reply', 'comment_reply', 'connect_request', 'connect_accepted', 'new_follower'));

-- Helper: who is this person called (for the notification text).
create or replace function _teacher_name(p_id uuid) returns text
language sql stable security definer set search_path = public as $$
  select coalesce(nullif(display_name, ''), 'A teacher') from profiles where id = p_id
$$;

-- 4. Follow / unfollow.
create or replace function follow_user(p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); added int;
begin
  if me is null or p_id is null or me = p_id then return; end if;
  insert into follows (follower_id, followee_id) values (me, p_id) on conflict do nothing;
  get diagnostics added = row_count;
  if added > 0 and not exists (
    select 1 from notifications where recipient_id = p_id and actor_id = me and type = 'new_follower' and read_at is null
  ) then
    insert into notifications (recipient_id, actor_id, actor_name, type) values (p_id, me, _teacher_name(me), 'new_follower');
  end if;
end $$;

create or replace function unfollow_user(p_id uuid) returns void
language sql security definer set search_path = public as $$
  delete from follows where follower_id = auth.uid() and followee_id = p_id
$$;

-- 5. Connect: send a request (or accept theirs if they already asked you). Returns 'pending' or 'connected'.
create or replace function request_connection(p_id uuid) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); existing connections%rowtype;
begin
  if me is null or p_id is null or me = p_id then return 'none'; end if;
  select * into existing from connections
    where least(requester_id, addressee_id) = least(me, p_id) and greatest(requester_id, addressee_id) = greatest(me, p_id);
  if found then
    if existing.status = 'accepted' then return 'connected'; end if;
    if existing.requester_id = p_id then
      perform respond_connection(p_id, true);
      return 'connected';
    end if;
    return 'pending';
  end if;
  insert into connections (requester_id, addressee_id) values (me, p_id);
  insert into notifications (recipient_id, actor_id, actor_name, type) values (p_id, me, _teacher_name(me), 'connect_request');
  return 'pending';
end $$;

-- 6. Answer a request from p_other. Accepting connects you and makes you follow each other.
create or replace function respond_connection(p_other uuid, p_accept boolean) returns void
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); found_id uuid;
begin
  if me is null then return; end if;
  select id into found_id from connections where requester_id = p_other and addressee_id = me and status = 'pending';
  if found_id is null then return; end if;
  if p_accept then
    update connections set status = 'accepted', responded_at = now() where id = found_id;
    insert into follows (follower_id, followee_id) values (me, p_other), (p_other, me) on conflict do nothing;
    insert into notifications (recipient_id, actor_id, actor_name, type) values (p_other, me, _teacher_name(me), 'connect_accepted');
  else
    delete from connections where id = found_id;
  end if;
  update notifications set read_at = coalesce(read_at, now())
    where recipient_id = me and actor_id = p_other and type = 'connect_request';
end $$;

-- 7. Cancel a request you sent, or disconnect (either side can).
create or replace function remove_connection(p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid();
begin
  if me is null then return; end if;
  delete from connections
    where least(requester_id, addressee_id) = least(me, p_id) and greatest(requester_id, addressee_id) = greatest(me, p_id);
  delete from notifications where recipient_id = p_id and actor_id = me and type = 'connect_request';
end $$;

-- 8. The numbers on a profile (anyone can see the totals, not the lists).
create or replace function profile_network_counts(p_id uuid) returns json
language sql stable security definer set search_path = public as $$
  select json_build_object(
    'followers', (select count(*) from follows where followee_id = p_id),
    'following', (select count(*) from follows where follower_id = p_id),
    'connections', (select count(*) from connections where status = 'accepted' and (requester_id = p_id or addressee_id = p_id))
  )
$$;

grant execute on function follow_user(uuid), unfollow_user(uuid), request_connection(uuid),
  respond_connection(uuid, boolean), remove_connection(uuid), profile_network_counts(uuid) to authenticated;
