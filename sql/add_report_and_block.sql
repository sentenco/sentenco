-- Report and Block between teachers.
-- Run once in the Supabase SQL editor (after add_follow_and_connect.sql). Safe to run again.

-- 1. Blocks. Blocking hides each teacher from the other, ends follows and connections,
--    and stops messages, follows and connection requests in both directions.
create table if not exists blocks (
  blocker_id uuid not null references auth.users(id) on delete cascade,
  blocked_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  check (blocker_id <> blocked_id)
);
create index if not exists blocks_blocked_idx on blocks (blocked_id);
alter table blocks enable row level security;

-- You can see only the blocks you made (the other teacher is never told).
drop policy if exists "blocks_select" on blocks;
create policy "blocks_select" on blocks for select using (blocker_id = auth.uid());
drop policy if exists "blocks_delete" on blocks;
create policy "blocks_delete" on blocks for delete using (blocker_id = auth.uid());
-- Blocking goes through block_user() below.

-- Everyone I should not see and who should not see me (both directions), as a list of ids.
create or replace function blocked_ids() returns uuid[]
language sql stable security definer set search_path = public as $$
  select coalesce(array_agg(distinct x), '{}'::uuid[]) from (
    select blocked_id as x from blocks where blocker_id = auth.uid()
    union
    select blocker_id as x from blocks where blocked_id = auth.uid()
  ) t
$$;

create or replace function is_blocked_between(a uuid, b uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from blocks where (blocker_id = a and blocked_id = b) or (blocker_id = b and blocked_id = a))
$$;

create or replace function block_user(p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid();
begin
  if me is null or p_id is null or me = p_id then return; end if;
  insert into blocks (blocker_id, blocked_id) values (me, p_id) on conflict do nothing;
  delete from follows where (follower_id = me and followee_id = p_id) or (follower_id = p_id and followee_id = me);
  delete from connections
    where least(requester_id, addressee_id) = least(me, p_id) and greatest(requester_id, addressee_id) = greatest(me, p_id);
  delete from notifications
    where type in ('connect_request', 'connect_accepted', 'new_follower')
      and ((recipient_id = me and actor_id = p_id) or (recipient_id = p_id and actor_id = me));
end $$;

create or replace function unblock_user(p_id uuid) returns void
language sql security definer set search_path = public as $$
  delete from blocks where blocker_id = auth.uid() and blocked_id = p_id
$$;

-- 2. Follow and Connect refuse blocked pairs.
create or replace function follow_user(p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); added int;
begin
  if me is null or p_id is null or me = p_id then return; end if;
  if is_blocked_between(me, p_id) then raise exception 'blocked'; end if;
  insert into follows (follower_id, followee_id) values (me, p_id) on conflict do nothing;
  get diagnostics added = row_count;
  if added > 0 and not exists (
    select 1 from notifications where recipient_id = p_id and actor_id = me and type = 'new_follower' and read_at is null
  ) then
    insert into notifications (recipient_id, actor_id, actor_name, type) values (p_id, me, _teacher_name(me), 'new_follower');
  end if;
end $$;

create or replace function request_connection(p_id uuid) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); existing connections%rowtype;
begin
  if me is null or p_id is null or me = p_id then return 'none'; end if;
  if is_blocked_between(me, p_id) then raise exception 'blocked'; end if;
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

-- 3. One-to-one chats: no messages between a blocked pair (group chats are not affected).
create or replace function _block_direct_messages() returns trigger
language plpgsql security definer set search_path = public as $$
declare c conversations%rowtype; other uuid;
begin
  select * into c from conversations where id = new.conversation_id;
  if c.id is null or coalesce(c.is_group, false) then return new; end if;
  other := case when c.user_a_id = new.sender_id then c.user_b_id else c.user_a_id end;
  if other is not null and is_blocked_between(new.sender_id, other) then
    raise exception 'blocked';
  end if;
  return new;
end $$;
drop trigger if exists messages_block_check on messages;
create trigger messages_block_check before insert on messages for each row execute function _block_direct_messages();

-- 4. Reports. Only the owner can read them (through the functions below).
create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references auth.users(id) on delete cascade,
  target_type text not null check (target_type in ('post', 'comment', 'profile')),
  target_id uuid not null,
  target_user_id uuid references auth.users(id) on delete set null,
  reason text not null check (reason in ('spam', 'harassment', 'inappropriate', 'impersonation', 'other')),
  details text,
  snapshot text,
  status text not null default 'open' check (status in ('open', 'reviewed', 'dismissed')),
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);
create unique index if not exists reports_one_open_per_reporter
  on reports (reporter_id, target_type, target_id) where status = 'open';
create index if not exists reports_status_idx on reports (status, created_at desc);
alter table reports enable row level security;
-- No policies on purpose: nobody reads or writes this table directly.

create or replace function report_content(p_type text, p_target uuid, p_reason text, p_details text default null) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); tu uuid; snap text;
begin
  if me is null then raise exception 'not signed in'; end if;
  if p_type = 'post' then
    select author_id, content into tu, snap from community_posts where id = p_target;
  elsif p_type = 'comment' then
    select author_id, content into tu, snap from community_comments where id = p_target;
  elsif p_type = 'profile' then
    select id, _teacher_name(id) into tu, snap from profiles where id = p_target;
  else
    raise exception 'unknown target';
  end if;
  if tu is null then raise exception 'not found'; end if;
  if tu = me then raise exception 'own content'; end if;
  insert into reports (reporter_id, target_type, target_id, target_user_id, reason, details, snapshot)
  values (me, p_type, p_target, tu, p_reason, nullif(left(coalesce(p_details, ''), 500), ''), left(snap, 1000))
  on conflict do nothing;
  return 'ok';
end $$;

create or replace function admin_list_reports() returns table (
  id uuid, target_type text, target_id uuid, target_user_id uuid, target_name text, reporter_name text,
  reason text, details text, snapshot text, status text, created_at timestamptz
) language sql stable security definer set search_path = public as $$
  select r.id, r.target_type, r.target_id, r.target_user_id, _teacher_name(r.target_user_id), _teacher_name(r.reporter_id),
         r.reason, r.details, r.snapshot, r.status, r.created_at
  from reports r
  where (select email from auth.users where id = auth.uid()) = 'caldrin1999@gmail.com'
  order by (r.status = 'open') desc, r.created_at desc
  limit 300
$$;

create or replace function admin_resolve_report(p_id uuid, p_status text, p_delete boolean default false) returns void
language plpgsql security definer set search_path = public as $$
declare r reports%rowtype;
begin
  if (select email from auth.users where id = auth.uid()) is distinct from 'caldrin1999@gmail.com' then return; end if;
  if p_status not in ('reviewed', 'dismissed') then return; end if;
  select * into r from reports where id = p_id;
  if r.id is null then return; end if;
  if p_delete then
    if r.target_type = 'post' then delete from community_posts where id = r.target_id;
    elsif r.target_type = 'comment' then delete from community_comments where id = r.target_id;
    end if;
  end if;
  update reports set status = p_status, resolved_at = now() where id = p_id;
end $$;

grant execute on function blocked_ids(), is_blocked_between(uuid, uuid), block_user(uuid), unblock_user(uuid),
  follow_user(uuid), request_connection(uuid), report_content(text, uuid, text, text),
  admin_list_reports(), admin_resolve_report(uuid, text, boolean) to authenticated;
