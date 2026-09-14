-- Spin the Wheel: saved topic/word lists so a teacher can reuse a list
-- (student names, vocab words, discussion topics, etc.) instead of
-- retyping it every time. Run once in the Supabase SQL editor.

create table if not exists wheel_lists (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade not null,
  name text not null,
  content text not null,
  created_at timestamptz not null default now()
);

create index if not exists wheel_lists_owner_idx on wheel_lists (owner_id, created_at desc);

alter table wheel_lists enable row level security;

drop policy if exists "wheel_lists_select" on wheel_lists;
create policy "wheel_lists_select" on wheel_lists for select
  using (owner_id = auth.uid());

drop policy if exists "wheel_lists_insert" on wheel_lists;
create policy "wheel_lists_insert" on wheel_lists for insert
  with check (owner_id = auth.uid());

drop policy if exists "wheel_lists_delete" on wheel_lists;
create policy "wheel_lists_delete" on wheel_lists for delete
  using (owner_id = auth.uid());
