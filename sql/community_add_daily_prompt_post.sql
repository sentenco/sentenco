-- Lets the "Prompt of the day" be a real post authored by "Sentenco"
-- (system account, no auth user) instead of a separate banner, so
-- teachers can like/comment on it like any other post. Run once in the
-- Supabase SQL editor, after sql/community_rename_other_to_resource.sql.

alter table community_posts alter column author_id drop not null;
alter table community_posts alter column author_email drop not null;

alter table community_posts add column if not exists prompt_date date;

-- At most one prompt post per calendar day.
create unique index if not exists community_posts_one_prompt_per_day
  on community_posts (prompt_date) where post_type = 'prompt';

-- Anyone can insert the daily prompt post as long as it has no author
-- (author_id is null) -- this is the one exception to "author_id = auth.uid()".
drop policy if exists "community_posts_insert" on community_posts;
create policy "community_posts_insert" on community_posts for insert
  with check (author_id = auth.uid() or (author_id is null and post_type = 'prompt'));
