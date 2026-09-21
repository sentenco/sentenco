-- Sentenco A1 Kids — Unit 2, Lesson 7: My Day Check (Unit 2 assessment)
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5926d50a-2aa7-4c83-995d-c367068deade',
  'My Day Check',
  'A1',
  'kids',
  2,
  7,
  'Unit 2 assessment — show what you can say about morning, afternoon, and evening routines.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  '5926d50a-2aa7-4c83-995d-c367068deade',
  1,
  'title',
  'My Day Check',
  null,
  $json$
  {
    "badge": "A1 · Beginner · Kids"
  }
  $json$::jsonb,
  true
),

-- 2. Warm-up (day review / retrieval, not new teaching)
(
  '5926d50a-2aa7-4c83-995d-c367068deade',
  2,
  'warmup',
  'What Can You Remember?',
  null,
  $json$
  {
    "title": "What Can You Remember?",
    "questions": ["I wake up.", "I eat lunch.", "I go to bed."]
  }
  $json$::jsonb,
  true
),

-- 3. Vocabulary (recognition check, no new words)
(
  '5926d50a-2aa7-4c83-995d-c367068deade',
  3,
  'vocabulary',
  'Name the Words',
  null,
  $json$
  {
    "words": [
      { "word": "Wake Up", "bg": "#FAECE7" },
      { "word": "Lunch", "bg": "#E1F5EE" },
      { "word": "Dinner", "bg": "#EEEDFE" },
      { "word": "Bed", "bg": "#FAEEDA" }
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Phrases (read and repeat, all previously taught)
(
  '5926d50a-2aa7-4c83-995d-c367068deade',
  4,
  'phrases',
  'Say My Day',
  null,
  $json$
  {
    "teacher": ["I wake up.", "I eat lunch.", "I eat dinner.", "I go to bed."],
    "student": ["I wake up.", "I eat lunch.", "I eat dinner.", "I go to bed."],
    "note": "Read and repeat — you know all of these from Unit 2!"
  }
  $json$::jsonb,
  true
),

-- 5. Activity (fill in the blank — put it in order)
(
  '5926d50a-2aa7-4c83-995d-c367068deade',
  5,
  'activity',
  'Put It in Order',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "In the [morning], I wake up." },
      { "speaker": "A", "text": "In the [afternoon], I eat lunch." },
      { "speaker": "A", "text": "In the [evening], I eat dinner and go to bed." }
    ],
    "blanks": ["morning", "afternoon", "evening"]
  }
  $json$::jsonb,
  true
),

-- 6. Speaking (say my day, choose 3 lines)
(
  '5926d50a-2aa7-4c83-995d-c367068deade',
  6,
  'speaking',
  'Say My Day',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "What do you do in the morning?" },
      { "speaker": "B", "text": "I ___." },
      { "speaker": "A", "text": "What do you do in the evening?" },
      { "speaker": "B", "text": "I ___." }
    ],
    "note": "Choose 3 lines you know and say them with your teacher!"
  }
  $json$::jsonb,
  true
),

-- 7. Reading (comprehension check, no new language)
(
  '5926d50a-2aa7-4c83-995d-c367068deade',
  7,
  'reading',
  'My Day',
  'Read the text, then answer the questions below.',
  $json$
  {
    "title": "My Day",
    "subtitle": "Read the text, then answer the questions below.",
    "text": "My day. I wake up. I eat lunch. I eat dinner. I go to bed.",
    "questions": ["What does the student do in the morning?", "What does the student eat in the afternoon?", "What does the student do in the evening?"]
  }
  $json$::jsonb,
  true
),

-- 8. Writing (personalized check, same lines)
(
  '5926d50a-2aa7-4c83-995d-c367068deade',
  8,
  'writing',
  'Write About Your Day',
  null,
  $json$
  {
    "prompts": ["In the morning, I ___.", "In the afternoon, I ___.", "In the evening, I ___."]
  }
  $json$::jsonb,
  true
),

-- 9. Review
(
  '5926d50a-2aa7-4c83-995d-c367068deade',
  9,
  'review',
  'Final Check',
  null,
  $json$
  {
    "checklist": [
      "I can say morning words.",
      "I can say afternoon words.",
      "I can say evening words.",
      "I can talk about my day."
    ],
    "challenge": "Show your teacher your whole day — from morning to night!"
  }
  $json$::jsonb,
  true
);
