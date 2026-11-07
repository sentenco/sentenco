-- Makes the new Unseen lessons "Unseen Case #96" to "#107" show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-96'),
  ('unseen-reading-part-97'),
  ('unseen-reading-part-98'),
  ('unseen-reading-part-99'),
  ('unseen-reading-part-100'),
  ('unseen-reading-part-101'),
  ('unseen-reading-part-102'),
  ('unseen-reading-part-103'),
  ('unseen-reading-part-104'),
  ('unseen-reading-part-105'),
  ('unseen-reading-part-106'),
  ('unseen-reading-part-107')
) as s(slug)
on conflict (slug) do nothing;
