-- Makes the new Unseen lessons "Unseen Case #108" to "#127" show up in the owner's Custom Lessons.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select s.slug, (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
from (values
  ('unseen-reading-part-108'),
  ('unseen-reading-part-109'),
  ('unseen-reading-part-110'),
  ('unseen-reading-part-111'),
  ('unseen-reading-part-112'),
  ('unseen-reading-part-113'),
  ('unseen-reading-part-114'),
  ('unseen-reading-part-115'),
  ('unseen-reading-part-116'),
  ('unseen-reading-part-117'),
  ('unseen-reading-part-118'),
  ('unseen-reading-part-119'),
  ('unseen-reading-part-120'),
  ('unseen-reading-part-121'),
  ('unseen-reading-part-122'),
  ('unseen-reading-part-123'),
  ('unseen-reading-part-124'),
  ('unseen-reading-part-125'),
  ('unseen-reading-part-126'),
  ('unseen-reading-part-127')
) as s(slug)
on conflict (slug) do nothing;
