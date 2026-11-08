-- Makes the new Unseen lessons "Unseen Case #140" to "#153" show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-140'),
  ('unseen-reading-part-141'),
  ('unseen-reading-part-142'),
  ('unseen-reading-part-143'),
  ('unseen-reading-part-144'),
  ('unseen-reading-part-145'),
  ('unseen-reading-part-146'),
  ('unseen-reading-part-147'),
  ('unseen-reading-part-148'),
  ('unseen-reading-part-149'),
  ('unseen-reading-part-150'),
  ('unseen-reading-part-151'),
  ('unseen-reading-part-152'),
  ('unseen-reading-part-153')
) as s(slug)
on conflict (slug) do nothing;
