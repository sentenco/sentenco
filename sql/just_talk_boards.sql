-- Just Talk Board: one saved board per (teacher, student, lesson).
-- Only the owner uses Just Talk today, but rows are scoped to whoever is signed in, so it stays private.
-- Run once in the Supabase SQL editor. Safe to run again.

create table if not exists public.just_talk_boards (
  owner_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  student text not null,
  lesson_key text not null,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (owner_id, student, lesson_key)
);

alter table public.just_talk_boards enable row level security;

drop policy if exists "just_talk_boards own rows" on public.just_talk_boards;
create policy "just_talk_boards own rows" on public.just_talk_boards
  for all
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

create index if not exists just_talk_boards_student_idx on public.just_talk_boards (owner_id, student);
