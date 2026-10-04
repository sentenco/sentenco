-- Letter Board: a teacher's saved sets of 20 questions (9 easy, 6 average,
-- 5 difficult). Run once in the Supabase SQL editor.
--
-- items is a jsonb array of 20 objects:
--   { "kind": "choice" | "open", "q": text, "options": [a, b, c],
--     "correct": 0-2, "sample": text,
--       "task": "" | "story" | "grammar" | "picture" | "retell", "image": data-URL or "" }
-- story is an optional jsonb object for story-based sets:
--   { "title": text, "text": text, "image": data-URL or "" }

create table if not exists letter_board_sets (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  items jsonb not null default '[]'::jsonb,
  story jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Safe to run again: adds the story column to a table that was created before story sets existed.
alter table letter_board_sets add column if not exists story jsonb;

create index if not exists letter_board_sets_owner_idx on letter_board_sets (owner_id, updated_at desc);

alter table letter_board_sets enable row level security;

drop policy if exists "letter_board_sets_select" on letter_board_sets;
create policy "letter_board_sets_select" on letter_board_sets for select
  using (owner_id = auth.uid());

drop policy if exists "letter_board_sets_insert" on letter_board_sets;
create policy "letter_board_sets_insert" on letter_board_sets for insert
  with check (owner_id = auth.uid());

drop policy if exists "letter_board_sets_update" on letter_board_sets;
create policy "letter_board_sets_update" on letter_board_sets for update
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

drop policy if exists "letter_board_sets_delete" on letter_board_sets;
create policy "letter_board_sets_delete" on letter_board_sets for delete
  using (owner_id = auth.uid());
