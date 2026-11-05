-- Makes the new custom lessons "Unseen Reading: Part 18" to "Part 29" (Biology) show up in the owner's Custom Lessons gallery.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-18'),
  ('unseen-reading-part-19'),
  ('unseen-reading-part-20'),
  ('unseen-reading-part-21'),
  ('unseen-reading-part-22'),
  ('unseen-reading-part-23'),
  ('unseen-reading-part-24'),
  ('unseen-reading-part-25'),
  ('unseen-reading-part-26'),
  ('unseen-reading-part-27'),
  ('unseen-reading-part-28'),
  ('unseen-reading-part-29')
) as s(slug)
on conflict (slug) do nothing;
