-- Makes the new Unseen lessons "Unseen Case #84" to "#95" show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-84'),
  ('unseen-reading-part-85'),
  ('unseen-reading-part-86'),
  ('unseen-reading-part-87'),
  ('unseen-reading-part-88'),
  ('unseen-reading-part-89'),
  ('unseen-reading-part-90'),
  ('unseen-reading-part-91'),
  ('unseen-reading-part-92'),
  ('unseen-reading-part-93'),
  ('unseen-reading-part-94'),
  ('unseen-reading-part-95')
) as s(slug)
on conflict (slug) do nothing;
