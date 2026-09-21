-- Sentenco A1 Kids — Unit 1 title updates
-- Run this in the Supabase SQL editor.

update lessons
set title = 'Hello & My Name'
where id = '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8';

update lesson_slides
set title = 'Hello & My Name'
where lesson_id = '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8'
  and slide_number = 1;

update lessons
set title = 'My Age'
where id = '72ccde1c-4da0-4aaf-95d6-2aec97565c8b';

update lesson_slides
set title = 'My Age'
where lesson_id = '72ccde1c-4da0-4aaf-95d6-2aec97565c8b'
  and slide_number = 1;
