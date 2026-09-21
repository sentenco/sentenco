-- Sentenco A1 Kids — Unit 2, Lesson 3: Go to School
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  'Go to School',
  'A1',
  'kids',
  2,
  3,
  'Talk about your school morning: get your bag, put on your shoes, take the bus, go to school.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  1,
  'title',
  'Go to School',
  null,
  $json$
  {
    "badge": "A1 · Beginner · Kids"
  }
  $json$::jsonb,
  true
),

-- 2. Warm-up (picture-hook lead-in: point and say, before teaching)
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  2,
  'warmup',
  'Look! Go to School',
  null,
  $json$
  {
    "title": "Look! Go to School",
    "display": "🎒",
    "questions": ["School bag", "Shoes", "Bus", "School"]
  }
  $json$::jsonb,
  true
),

-- 3. Vocabulary
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  3,
  'vocabulary',
  'Today''s Words',
  null,
  $json$
  {
    "words": [
      { "word": "School Bag", "bg": "#FAECE7" },
      { "word": "Shoes", "bg": "#E1F5EE" },
      { "word": "Bus", "bg": "#EEEDFE" },
      { "word": "School", "bg": "#FAEEDA" }
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Phrases (sentence model — teacher says, student repeats)
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  4,
  'phrases',
  'My School Morning',
  null,
  $json$
  {
    "teacher": ["I get my school bag.", "I put on my shoes.", "I take the bus.", "I go to school."],
    "student": ["I get my school bag.", "I put on my shoes.", "I take the bus.", "I go to school."],
    "note": "Repeat each sentence after your teacher!"
  }
  $json$::jsonb,
  true
),

-- 5. Activity (fill in the blank — order the routine)
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  5,
  'activity',
  'Order the Routine',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "First, I get my [school bag]." },
      { "speaker": "A", "text": "Then, I put on my [shoes]." },
      { "speaker": "A", "text": "Next, I take the [bus]." },
      { "speaker": "A", "text": "Last, I go to [school]." }
    ],
    "blanks": ["school bag", "shoes", "bus", "school"]
  }
  $json$::jsonb,
  true
),

-- 6. Speaking (guided practice, choose and say)
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  6,
  'speaking',
  'Choose and Say',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "What do you do first?" },
      { "speaker": "B", "text": "First, I ___." },
      { "speaker": "A", "text": "What do you do next?" },
      { "speaker": "B", "text": "Then I ___." }
    ],
    "note": "Choose 2 or 3 school morning actions and say them in order!"
  }
  $json$::jsonb,
  true
),

-- 7. Reading
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  7,
  'reading',
  'My School Morning',
  'Read the text, then answer the questions below.',
  $json$
  {
    "title": "My School Morning",
    "subtitle": "Read the text, then answer the questions below.",
    "text": "My school morning. I get my school bag. I put on my shoes. I take the bus. I go to school.",
    "questions": ["What do you do first?", "How do you go to school?", "Where do you go?"]
  }
  $json$::jsonb,
  true
),

-- 8. Writing
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  8,
  'writing',
  'Write Your School Morning',
  null,
  $json$
  {
    "prompts": ["First, I ___.", "Then, I ___.", "Next, I ___.", "Last, I ___."]
  }
  $json$::jsonb,
  true
),

-- 9. Review
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  9,
  'review',
  'Look What You Can Do!',
  null,
  $json$
  {
    "checklist": [
      "I can name school words.",
      "I can say school morning actions.",
      "I can put them in order."
    ],
    "challenge": "Tell your teacher your whole school morning — from getting your bag to going to school!"
  }
  $json$::jsonb,
  true
);
