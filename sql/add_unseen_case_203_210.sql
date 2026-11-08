-- Makes the new Unseen lessons "Unseen Case #203" to "#210" show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-203'),
  ('unseen-reading-part-204'),
  ('unseen-reading-part-205'),
  ('unseen-reading-part-206'),
  ('unseen-reading-part-207'),
  ('unseen-reading-part-208'),
  ('unseen-reading-part-209'),
  ('unseen-reading-part-210')
) as s(slug)
on conflict (slug) do nothing;
