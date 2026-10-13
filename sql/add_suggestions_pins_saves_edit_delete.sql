-- Teachers you may know, pinned post, saved posts, edit your own post, delete your account.
-- Run once in the Supabase SQL editor (after add_follow_and_connect.sql and add_report_and_block.sql). Safe to run again.

-- 1. Pinned post: one of your own posts, shown first on your profile.
alter table profiles add column if not exists pinned_post_id uuid references community_posts(id) on delete set null;

-- 2. Saved posts: private to you.
create table if not exists saved_posts (
  user_id uuid not null references auth.users(id) on delete cascade,
  post_id uuid not null references community_posts(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, post_id)
);
alter table saved_posts enable row level security;
drop policy if exists "saved_posts_select" on saved_posts;
create policy "saved_posts_select" on saved_posts for select using (user_id = auth.uid());
drop policy if exists "saved_posts_insert" on saved_posts;
create policy "saved_posts_insert" on saved_posts for insert with check (user_id = auth.uid());
drop policy if exists "saved_posts_delete" on saved_posts;
create policy "saved_posts_delete" on saved_posts for delete using (user_id = auth.uid());

-- 3. Edit your own post: only the text can change.
alter table community_posts add column if not exists edited_at timestamptz;
drop policy if exists "community_posts_update_own" on community_posts;
create policy "community_posts_update_own" on community_posts for update
  using (author_id = auth.uid()) with check (author_id = auth.uid());

create or replace function _restrict_post_edit() returns trigger
language plpgsql as $$
begin
  if coalesce(auth.jwt() ->> 'email', '') = 'caldrin1999@gmail.com' then return new; end if;
  new.author_id := old.author_id;
  new.author_email := old.author_email;
  new.author_name := old.author_name;
  new.post_type := old.post_type;
  new.company_id := old.company_id;
  new.created_at := old.created_at;
  new.status := old.status;
  new.image_url := old.image_url;
  new.file_url := old.file_url;
  new.file_name := old.file_name;
  if new.content is distinct from old.content then new.edited_at := now(); else new.edited_at := old.edited_at; end if;
  return new;
end $$;
drop trigger if exists community_posts_restrict_edit on community_posts;
create trigger community_posts_restrict_edit before update on community_posts for each row execute function _restrict_post_edit();

-- 4. Teachers you may know. Scores shared age groups, shared expertise, same school and mutual connections.
create or replace function suggested_teachers(p_limit int default 8) returns table (
  id uuid, display_name text, avatar_url text, years_teaching int, teaches_ages text[],
  shared_ages text[], shared_expertise text[], mutual_count int, same_school boolean, follows_me boolean, score int
) language sql stable security definer set search_path = public as $$
  with me as (select p.id, p.company_id, coalesce(p.teaches_ages, '{}') as ages, coalesce(p.expertise, '{}') as expertise from profiles p where p.id = auth.uid()),
  my_conns as (
    select case when c.requester_id = auth.uid() then c.addressee_id else c.requester_id end as other
    from connections c where c.status = 'accepted' and auth.uid() in (c.requester_id, c.addressee_id)
  ),
  cand as (
    select p.id, p.display_name, p.avatar_url, p.years_teaching, coalesce(p.teaches_ages, '{}') as teaches_ages,
      array(select unnest(coalesce(p.teaches_ages, '{}')) intersect select unnest(me.ages)) as shared_ages,
      array(select unnest(coalesce(p.expertise, '{}')) intersect select unnest(me.expertise)) as shared_expertise,
      (select count(*)::int from connections c2
        where c2.status = 'accepted' and p.id in (c2.requester_id, c2.addressee_id)
          and (case when c2.requester_id = p.id then c2.addressee_id else c2.requester_id end) in (select other from my_conns)) as mutual_count,
      (me.company_id is not null and p.company_id = me.company_id) as same_school,
      exists (select 1 from follows f where f.follower_id = p.id and f.followee_id = auth.uid()) as follows_me
    from profiles p, me
    where p.id <> auth.uid()
      and nullif(trim(coalesce(p.display_name, '')), '') is not null
      and not exists (select 1 from blocks b where (b.blocker_id = auth.uid() and b.blocked_id = p.id) or (b.blocker_id = p.id and b.blocked_id = auth.uid()))
      and not exists (select 1 from follows f where f.follower_id = auth.uid() and f.followee_id = p.id)
      and not exists (select 1 from connections c3 where c3.requester_id in (auth.uid(), p.id) and c3.addressee_id in (auth.uid(), p.id))
  )
  select cand.id, cand.display_name, cand.avatar_url, cand.years_teaching, cand.teaches_ages,
         cand.shared_ages, cand.shared_expertise, cand.mutual_count, cand.same_school, cand.follows_me,
         (coalesce(array_length(cand.shared_ages, 1), 0) * 3 + coalesce(array_length(cand.shared_expertise, 1), 0) * 2
          + cand.mutual_count * 3 + (case when cand.same_school then 4 else 0 end) + (case when cand.follows_me then 2 else 0 end)) as score
  from cand
  order by score desc, md5(cand.id::text || current_date::text)
  limit greatest(1, least(coalesce(p_limit, 8), 30))
$$;
grant execute on function suggested_teachers(int) to authenticated;

-- 5. Delete your account and your data. Reports about you and by you are kept (without your name attached).
alter table reports drop constraint if exists reports_reporter_id_fkey;
alter table reports alter column reporter_id drop not null;
alter table reports add constraint reports_reporter_id_fkey foreign key (reporter_id) references auth.users(id) on delete set null;

create or replace function delete_my_account() returns void
language plpgsql security definer set search_path = public, auth as $$
declare me uuid := auth.uid();
begin
  if me is null then raise exception 'not signed in'; end if;
  if (select email from auth.users where id = me) = 'caldrin1999@gmail.com' then raise exception 'owner'; end if;
  delete from auth.users where id = me;
end $$;
grant execute on function delete_my_account() to authenticated;
