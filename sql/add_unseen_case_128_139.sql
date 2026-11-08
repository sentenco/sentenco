-- Makes the new Unseen lessons "Unseen Case #128" to "#139" show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-128'),
  ('unseen-reading-part-129'),
  ('unseen-reading-part-130'),
  ('unseen-reading-part-131'),
  ('unseen-reading-part-132'),
  ('unseen-reading-part-133'),
  ('unseen-reading-part-134'),
  ('unseen-reading-part-135'),
  ('unseen-reading-part-136'),
  ('unseen-reading-part-137'),
  ('unseen-reading-part-138'),
  ('unseen-reading-part-139')
) as s(slug)
on conflict (slug) do nothing;
