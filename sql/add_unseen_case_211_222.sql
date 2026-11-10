-- Makes the Unseen Reading for Kids lessons "Unseen Case #211" to "#222" show up for the owner (Reading > Unseen Reading > Kids).
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-211'),
  ('unseen-reading-part-212'),
  ('unseen-reading-part-213'),
  ('unseen-reading-part-214'),
  ('unseen-reading-part-215'),
  ('unseen-reading-part-216'),
  ('unseen-reading-part-217'),
  ('unseen-reading-part-218'),
  ('unseen-reading-part-219'),
  ('unseen-reading-part-220'),
  ('unseen-reading-part-221'),
  ('unseen-reading-part-222')
) as s(slug)
on conflict (slug) do nothing;
