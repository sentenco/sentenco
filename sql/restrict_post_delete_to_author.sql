-- Only the author can delete their own post or comment.
-- The owner can still remove reported content, but only from the Reports page
-- (it goes through admin_resolve_report, which checks the report first).
-- Run once in the Supabase SQL editor (after add_report_and_block.sql). Safe to run again.

drop policy if exists "community_posts_delete" on community_posts;
create policy "community_posts_delete" on community_posts for delete
  using (author_id = auth.uid());

drop policy if exists "community_comments_delete" on community_comments;
create policy "community_comments_delete" on community_comments for delete
  using (author_id = auth.uid());
