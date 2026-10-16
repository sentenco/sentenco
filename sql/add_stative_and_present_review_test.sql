-- Makes the new custom lesson "Review Test: Stative and Present Tenses" (Linoy, lesson 4) show up in the owner's Custom Lessons gallery.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select 'stative-and-present-review-test', (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
on conflict (slug) do nothing;
