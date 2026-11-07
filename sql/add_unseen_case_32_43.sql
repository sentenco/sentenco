-- Makes the new Unseen lessons "Unseen Case #32" to "#43" show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-32'),
  ('unseen-reading-part-33'),
  ('unseen-reading-part-34'),
  ('unseen-reading-part-35'),
  ('unseen-reading-part-36'),
  ('unseen-reading-part-37'),
  ('unseen-reading-part-38'),
  ('unseen-reading-part-39'),
  ('unseen-reading-part-40'),
  ('unseen-reading-part-41'),
  ('unseen-reading-part-42'),
  ('unseen-reading-part-43')
) as s(slug)
on conflict (slug) do nothing;
