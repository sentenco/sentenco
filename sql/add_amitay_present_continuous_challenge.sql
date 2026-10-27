-- Makes the new custom lesson "Amitay: Present Continuous Challenge" show up in the owner's Custom Lessons gallery.
-- Run once in the Supabase SQL editor (safe to re-run).
insert into public.custom_lesson_owners (slug, owner_id)
select 'amitay-present-continuous-challenge', (select id from auth.users where lower(email) = 'caldrin1999@gmail.com')
on conflict (slug) do nothing;
