-- Custom Lessons are private to the teacher they belong to. A lesson can be
-- opened by: its owner, the site owner, or any signed-in teacher who can see
-- a Homeroom post that its owner attached the lesson to. Deleting that post
-- ends the sharing. Run once in the Supabase SQL editor (safe to re-run).
--
-- Deny by default: a lesson with no row in custom_lesson_owners cannot be
-- opened by anyone but the site owner.

-- ------------------------------------------------------------------
-- 1. Tables
-- ------------------------------------------------------------------
create table if not exists public.custom_lesson_owners (
  slug text primary key,
  owner_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
alter table public.custom_lesson_owners enable row level security;   -- no policies: RPC access only
revoke all on public.custom_lesson_owners from anon, authenticated;

create table if not exists public.custom_lesson_shares (
  slug text not null references public.custom_lesson_owners(slug) on delete cascade,
  post_id uuid not null references public.community_posts(id) on delete cascade,
  shared_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (slug, post_id)
);
alter table public.custom_lesson_shares enable row level security;
revoke all on public.custom_lesson_shares from anon, authenticated;

-- A Homeroom post can carry one custom lesson.
alter table public.community_posts add column if not exists lesson_slug text;

-- ------------------------------------------------------------------
-- 2. Everything that exists today belongs to the site owner
-- ------------------------------------------------------------------
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('real-estate-vocabulary'), ('be-verbs-and-will'), ('present-simple-vs-progressive'),
  ('verb-tense-identification'), ('e8-reading-and-reactions'), ('e8-task-5-reactions'),
  ('e8-task-6-dialogues'), ('e8-task-7-short-texts'), ('e8-task-8-missing-sentences'),
  ('e8-task-9-match-the-text'), ('e8-task-10-find-the-facts'), ('e8-task-11-the-right-word')
) as s(slug)
on conflict (slug) do nothing;

-- ------------------------------------------------------------------
-- 3. Can the caller open this lesson?
-- ------------------------------------------------------------------
create or replace function public.can_open_custom_lesson(p_slug text)
returns boolean
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  my_company uuid;
begin
  if uid is null then
    return false;
  end if;
  if public.is_site_admin() then
    return true;
  end if;
  if exists (select 1 from custom_lesson_owners where slug = p_slug and owner_id = uid) then
    return true;
  end if;
  select company_id into my_company from profiles where id = uid;
  return exists (
    select 1
    from custom_lesson_shares s
    join community_posts p on p.id = s.post_id
    where s.slug = p_slug
      and p.status = 'approved'
      and (p.company_id is null or p.company_id = my_company)
  );
end;
$$;
grant execute on function public.can_open_custom_lesson(text) to authenticated;

-- The lessons the caller can see in their gallery: { slug, relation: 'mine' | 'shared' }
create or replace function public.my_custom_lessons()
returns table (slug text, relation text, owner_name text)
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  my_company uuid;
begin
  if uid is null then
    return;
  end if;
  select company_id into my_company from profiles where id = uid;

  return query
    select o.slug, 'mine'::text, null::text
    from custom_lesson_owners o
    where o.owner_id = uid or public.is_site_admin();

  return query
    select distinct on (s.slug) s.slug, 'shared'::text,
           (select coalesce(pr.display_name, 'a teacher') from profiles pr where pr.id = s.shared_by)
    from custom_lesson_shares s
    join community_posts p on p.id = s.post_id
    join custom_lesson_owners o on o.slug = s.slug
    where p.status = 'approved'
      and (p.company_id is null or p.company_id = my_company)
      and o.owner_id is distinct from uid
      and not public.is_site_admin()
    order by s.slug, s.created_at desc;
end;
$$;
grant execute on function public.my_custom_lessons() to authenticated;

-- ------------------------------------------------------------------
-- 4. Attach a lesson you own to a post you wrote
-- ------------------------------------------------------------------
create or replace function public.share_custom_lesson(p_slug text, p_post uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_signed_in'; end if;
  if not (public.is_site_admin()
          or exists (select 1 from custom_lesson_owners where slug = p_slug and owner_id = uid)) then
    raise exception 'not_your_lesson';
  end if;
  if not exists (select 1 from community_posts where id = p_post and author_id = uid) then
    raise exception 'not_your_post';
  end if;
  insert into custom_lesson_shares (slug, post_id, shared_by)
  values (p_slug, p_post, uid)
  on conflict do nothing;
end;
$$;
grant execute on function public.share_custom_lesson(text, uuid) to authenticated;

-- Stop sharing a lesson everywhere (the owner's posts stay, the lesson goes private again).
create or replace function public.stop_sharing_custom_lesson(p_slug text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_signed_in'; end if;
  if not (public.is_site_admin()
          or exists (select 1 from custom_lesson_owners where slug = p_slug and owner_id = uid)) then
    raise exception 'not_your_lesson';
  end if;
  delete from custom_lesson_shares where slug = p_slug;
end;
$$;
grant execute on function public.stop_sharing_custom_lesson(text) to authenticated;

-- ------------------------------------------------------------------
-- 5. Owner-only: give a lesson to a teacher, and see who owns what
-- ------------------------------------------------------------------
create or replace function public.admin_assign_custom_lesson(p_slug text, p_email text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid;
begin
  if not public.is_site_admin() then raise exception 'forbidden'; end if;
  select id into uid from auth.users where lower(email) = lower(trim(p_email));
  if uid is null then raise exception 'no_such_user'; end if;
  insert into custom_lesson_owners (slug, owner_id) values (p_slug, uid)
  on conflict (slug) do update set owner_id = excluded.owner_id;
end;
$$;
grant execute on function public.admin_assign_custom_lesson(text, text) to authenticated;

create or replace function public.admin_list_custom_lesson_owners()
returns table (slug text, owner_email text, shared_in int)
language sql
stable
security definer
set search_path = public
as $$
  select o.slug,
         (select email from auth.users where id = o.owner_id),
         (select count(*)::int from custom_lesson_shares s where s.slug = o.slug)
  from custom_lesson_owners o
  where public.is_site_admin()
  order by o.slug;
$$;
grant execute on function public.admin_list_custom_lesson_owners() to authenticated;
