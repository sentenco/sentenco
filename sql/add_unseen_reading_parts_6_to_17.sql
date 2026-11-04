-- Makes the new custom lessons "Unseen Reading: Part 6" to "Part 17" show up in the owner's Custom Lessons gallery.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-6'),
  ('unseen-reading-part-7'),
  ('unseen-reading-part-8'),
  ('unseen-reading-part-9'),
  ('unseen-reading-part-10'),
  ('unseen-reading-part-11'),
  ('unseen-reading-part-12'),
  ('unseen-reading-part-13'),
  ('unseen-reading-part-14'),
  ('unseen-reading-part-15'),
  ('unseen-reading-part-16'),
  ('unseen-reading-part-17')
) as s(slug)
on conflict (slug) do nothing;
