-- A custom lesson another teacher shares on a Homeroom post no longer lands in
-- everyone's Custom Lessons list. It appears there only for teachers who saved
-- (bookmarked) that post. Un-saving the post removes it from their list.
-- Opening the lesson from the post itself still works for anyone who can see the post.
-- Run once in the Supabase SQL editor (after custom_lessons_ownership_and_sharing.sql and
-- add_suggestions_pins_saves_edit_delete.sql). Safe to re-run.

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
    join saved_posts sp on sp.post_id = s.post_id and sp.user_id = uid
    where p.status = 'approved'
      and (p.company_id is null or p.company_id = my_company)
      and o.owner_id is distinct from uid
      and not public.is_site_admin()
    order by s.slug, s.created_at desc;
end;
$$;
grant execute on function public.my_custom_lessons() to authenticated;
