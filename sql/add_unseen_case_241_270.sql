-- Makes the Unseen Reading for Kids lessons Parts 241 to 270 show up for the owner when they are not on a Pro plan (Pro and Pro+ open them anyway).
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-241'),
  ('unseen-reading-part-242'),
  ('unseen-reading-part-243'),
  ('unseen-reading-part-244'),
  ('unseen-reading-part-245'),
  ('unseen-reading-part-246'),
  ('unseen-reading-part-247'),
  ('unseen-reading-part-248'),
  ('unseen-reading-part-249'),
  ('unseen-reading-part-250'),
  ('unseen-reading-part-251'),
  ('unseen-reading-part-252'),
  ('unseen-reading-part-253'),
  ('unseen-reading-part-254'),
  ('unseen-reading-part-255'),
  ('unseen-reading-part-256'),
  ('unseen-reading-part-257'),
  ('unseen-reading-part-258'),
  ('unseen-reading-part-259'),
  ('unseen-reading-part-260'),
  ('unseen-reading-part-261'),
  ('unseen-reading-part-262'),
  ('unseen-reading-part-263'),
  ('unseen-reading-part-264'),
  ('unseen-reading-part-265'),
  ('unseen-reading-part-266'),
  ('unseen-reading-part-267'),
  ('unseen-reading-part-268'),
  ('unseen-reading-part-269'),
  ('unseen-reading-part-270')
) as s(slug)
on conflict (slug) do nothing;
