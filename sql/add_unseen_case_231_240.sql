-- Makes the Unseen Reading for Kids lessons Parts 231 to 240 show up for the owner (Reading > Unseen Reading > Kids).
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-231'),
  ('unseen-reading-part-232'),
  ('unseen-reading-part-233'),
  ('unseen-reading-part-234'),
  ('unseen-reading-part-235'),
  ('unseen-reading-part-236'),
  ('unseen-reading-part-237'),
  ('unseen-reading-part-238'),
  ('unseen-reading-part-239'),
  ('unseen-reading-part-240')
) as s(slug)
on conflict (slug) do nothing;
