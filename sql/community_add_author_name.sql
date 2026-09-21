-- Store the teacher's chosen display name (set on the Today dashboard,
-- localStorage "sentenco_teacher_name") on each post/comment, so the
-- Community feed can show it instead of a name derived from the email
-- address. Run once in the Supabase SQL editor.

alter table community_posts add column if not exists author_name text;
alter table community_comments add column if not exists author_name text;
