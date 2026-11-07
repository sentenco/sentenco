-- Makes the new Unseen lessons "Unseen Case #72" to "#83" show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-72'),
  ('unseen-reading-part-73'),
  ('unseen-reading-part-74'),
  ('unseen-reading-part-75'),
  ('unseen-reading-part-76'),
  ('unseen-reading-part-77'),
  ('unseen-reading-part-78'),
  ('unseen-reading-part-79'),
  ('unseen-reading-part-80'),
  ('unseen-reading-part-81'),
  ('unseen-reading-part-82'),
  ('unseen-reading-part-83')
) as s(slug)
on conflict (slug) do nothing;
