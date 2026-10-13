-- Profile chips: a teacher's age, the age groups they teach, and their areas of expertise.
-- Shown on the profile page as "28 years old · 7 years teaching" plus colored chips.
-- Run once in the Supabase SQL editor (safe to re-run). A teacher can already update their own profile row.
alter table public.profiles add column if not exists age smallint;
alter table public.profiles add column if not exists teaches_ages text[] not null default '{}';
alter table public.profiles add column if not exists expertise text[] not null default '{}';

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'profiles_age_range') then
    alter table public.profiles add constraint profiles_age_range check (age is null or (age between 18 and 99));
  end if;
end $$;
