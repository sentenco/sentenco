-- Makes the new Unseen lessons "Unseen Case #44" to "#55" (Space and Astronomy, MMA and Combat Sports) show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-44'),
  ('unseen-reading-part-45'),
  ('unseen-reading-part-46'),
  ('unseen-reading-part-47'),
  ('unseen-reading-part-48'),
  ('unseen-reading-part-49'),
  ('unseen-reading-part-50'),
  ('unseen-reading-part-51'),
  ('unseen-reading-part-52'),
  ('unseen-reading-part-53'),
  ('unseen-reading-part-54'),
  ('unseen-reading-part-55')
) as s(slug)
on conflict (slug) do nothing;
