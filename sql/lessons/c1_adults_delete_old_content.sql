-- Sentenco C1 Adults -- Delete old pilot content before rebuild
-- The Adults C1 lesson design changed completely (universal topics,
-- advanced wording, 5-6 slide student flow, single-sheet teacher guide).
-- This removes the only Adults C1 content actually live in Supabase --
-- the original pilot lesson (Unit 1, Lesson 1, "Taking a Quick Position")
-- -- so the rebuild starts clean. Run this whole script in the Supabase
-- SQL editor before running any new C1 Adults insert script.

delete from lesson_slides where lesson_id = '021032cc-8591-454e-9fa9-6e7f7ebca354';
delete from lessons where id = '021032cc-8591-454e-9fa9-6e7f7ebca354';

-- Sanity check -- should return 0 rows for both:
-- select * from lessons where level = 'C1' and age_track = 'adults';
-- select * from lesson_slides where lesson_id = '021032cc-8591-454e-9fa9-6e7f7ebca354';
