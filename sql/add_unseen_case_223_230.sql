-- Makes the Unseen Reading for Kids lessons Parts 223 to 230 ("Unseen Case #222" to "#229") show up for the owner (Reading > Unseen Reading > Kids).
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-223'),
  ('unseen-reading-part-224'),
  ('unseen-reading-part-225'),
  ('unseen-reading-part-226'),
  ('unseen-reading-part-227'),
  ('unseen-reading-part-228'),
  ('unseen-reading-part-229'),
  ('unseen-reading-part-230')
) as s(slug)
on conflict (slug) do nothing;
