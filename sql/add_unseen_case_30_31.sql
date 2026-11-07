-- Makes the two new Unseen lessons "Unseen Case #30" and "#31" show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-30'),
  ('unseen-reading-part-31')
) as s(slug)
on conflict (slug) do nothing;
