-- Makes the new Unseen lessons "Unseen Case #56" to "#71" (Safety and First Aid, Money and Everyday Economics, Thinking and Media, History That Explains Today) show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-56'),
  ('unseen-reading-part-57'),
  ('unseen-reading-part-58'),
  ('unseen-reading-part-59'),
  ('unseen-reading-part-60'),
  ('unseen-reading-part-61'),
  ('unseen-reading-part-62'),
  ('unseen-reading-part-63'),
  ('unseen-reading-part-64'),
  ('unseen-reading-part-65'),
  ('unseen-reading-part-66'),
  ('unseen-reading-part-67'),
  ('unseen-reading-part-68'),
  ('unseen-reading-part-69'),
  ('unseen-reading-part-70'),
  ('unseen-reading-part-71')
) as s(slug)
on conflict (slug) do nothing;
