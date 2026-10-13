-- Share a custom lesson inside a Convo chat. The lesson shows up as a card in
-- the conversation, and everyone in that conversation can open it for as long
-- as the message exists (deleting the message takes the sharing back).
-- Needs custom_lessons_ownership_and_sharing.sql and the messenger SQL to have
-- been run first. Safe to re-run.

alter table public.messages add column if not exists lesson_slug text;

-- Only the lesson's owner can attach it to a message.
create or replace function public.messages_check_lesson()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.lesson_slug is not null then
    if not exists (select 1 from custom_lesson_owners where slug = new.lesson_slug and owner_id = new.sender_id) then
      raise exception 'not_your_lesson';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists messages_check_lesson on public.messages;
create trigger messages_check_lesson
  before insert on public.messages
  for each row execute function public.messages_check_lesson();

-- Can the caller open this lesson? Owner, site owner, a teacher who can see a
-- Homeroom post it was shared on, or a member of a Convo chat it was shared in.
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
  if exists (
    select 1
    from custom_lesson_shares s
    join community_posts p on p.id = s.post_id
    where s.slug = p_slug
      and p.status = 'approved'
      and (p.company_id is null or p.company_id = my_company)
  ) then
    return true;
  end if;
  return exists (
    select 1
    from messages m
    join custom_lesson_owners o on o.slug = m.lesson_slug and o.owner_id = m.sender_id
    where m.lesson_slug = p_slug
      and m.deleted_at is null
      and (
        exists (select 1 from conversations c where c.id = m.conversation_id and (c.user_a_id = uid or c.user_b_id = uid))
        or exists (select 1 from conversation_participants cp where cp.conversation_id = m.conversation_id and cp.user_id = uid)
      )
  );
end;
$$;
grant execute on function public.can_open_custom_lesson(text) to authenticated;

-- The lessons in the caller's gallery, now including ones shared in their chats.
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

  return query
    select distinct on (m.lesson_slug) m.lesson_slug, 'shared'::text,
           (select coalesce(pr.display_name, 'a teacher') from profiles pr where pr.id = m.sender_id)
    from messages m
    join custom_lesson_owners o on o.slug = m.lesson_slug and o.owner_id = m.sender_id
    where m.lesson_slug is not null
      and m.deleted_at is null
      and o.owner_id is distinct from uid
      and not public.is_site_admin()
      and (
        exists (select 1 from conversations c where c.id = m.conversation_id and (c.user_a_id = uid or c.user_b_id = uid))
        or exists (select 1 from conversation_participants cp where cp.conversation_id = m.conversation_id and cp.user_id = uid)
      )
    order by m.lesson_slug, m.created_at desc;
end;
$$;
grant execute on function public.my_custom_lessons() to authenticated;
