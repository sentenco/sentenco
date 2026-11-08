-- Makes the new Unseen lessons "Unseen Case #154" to "#174" show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-154'),
  ('unseen-reading-part-155'),
  ('unseen-reading-part-156'),
  ('unseen-reading-part-157'),
  ('unseen-reading-part-158'),
  ('unseen-reading-part-159'),
  ('unseen-reading-part-160'),
  ('unseen-reading-part-161'),
  ('unseen-reading-part-162'),
  ('unseen-reading-part-163'),
  ('unseen-reading-part-164'),
  ('unseen-reading-part-165'),
  ('unseen-reading-part-166'),
  ('unseen-reading-part-167'),
  ('unseen-reading-part-168'),
  ('unseen-reading-part-169'),
  ('unseen-reading-part-170'),
  ('unseen-reading-part-171'),
  ('unseen-reading-part-172'),
  ('unseen-reading-part-173'),
  ('unseen-reading-part-174')
) as s(slug)
on conflict (slug) do nothing;
