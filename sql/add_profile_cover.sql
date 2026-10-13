-- Cover photo on a teacher's profile page. Run once in the Supabase SQL editor.
-- A teacher can already update their own profile row, so no policy change is needed.
alter table public.profiles add column if not exists cover_url text;
