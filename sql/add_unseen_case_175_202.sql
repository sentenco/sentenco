-- Makes the new Unseen lessons "Unseen Case #175" to "#202" show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-175'),
  ('unseen-reading-part-176'),
  ('unseen-reading-part-177'),
  ('unseen-reading-part-178'),
  ('unseen-reading-part-179'),
  ('unseen-reading-part-180'),
  ('unseen-reading-part-181'),
  ('unseen-reading-part-182'),
  ('unseen-reading-part-183'),
  ('unseen-reading-part-184'),
  ('unseen-reading-part-185'),
  ('unseen-reading-part-186'),
  ('unseen-reading-part-187'),
  ('unseen-reading-part-188'),
  ('unseen-reading-part-189'),
  ('unseen-reading-part-190'),
  ('unseen-reading-part-191'),
  ('unseen-reading-part-192'),
  ('unseen-reading-part-193'),
  ('unseen-reading-part-194'),
  ('unseen-reading-part-195'),
  ('unseen-reading-part-196'),
  ('unseen-reading-part-197'),
  ('unseen-reading-part-198'),
  ('unseen-reading-part-199'),
  ('unseen-reading-part-200'),
  ('unseen-reading-part-201'),
  ('unseen-reading-part-202')
) as s(slug)
on conflict (slug) do nothing;
