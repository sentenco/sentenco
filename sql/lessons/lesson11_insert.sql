-- Sentenco A1 Kids — Unit 2, Lesson 6: All About My Day (Unit 2 review)
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  'All About My Day',
  'A1',
  'kids',
  2,
  6,
  'Review morning, afternoon, and evening routines from Unit 2 — and talk about your whole day.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  1,
  'title',
  'All About My Day',
  null,
  $json$
  {
    "badge": "A1 · Beginner · Kids"
  }
  $json$::jsonb,
  true
),

-- 2. Warm-up (recall one line from each part of the day)
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  2,
  'warmup',
  'Let''s Remember My Day!',
  null,
  $json$
  {
    "title": "Let's Remember My Day!",
    "questions": ["I wake up.", "I go to school.", "I eat lunch.", "I go to bed."]
  }
  $json$::jsonb,
  true
),

-- 3. Vocabulary
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  3,
  'vocabulary',
  'Key Words',
  null,
  $json$
  {
    "words": [
      { "word": "Wake Up", "bg": "#FAECE7" },
      { "word": "Go To School", "bg": "#E1F5EE" },
      { "word": "Lunch", "bg": "#EEEDFE" },
      { "word": "Bed", "bg": "#FAEEDA" }
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Phrases (sentence practice models)
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  4,
  'phrases',
  'Build Sentences',
  null,
  $json$
  {
    "teacher": ["I wake up.", "I go to school.", "I eat lunch.", "I go to bed."],
    "student": ["I wake up.", "I go to school.", "I eat lunch.", "I go to bed."],
    "note": "Repeat each sentence and point to the matching part of the day!"
  }
  $json$::jsonb,
  true
),

-- 5. Activity (fill in the blank, sort the day)
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  5,
  'activity',
  'Sort the Day',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "In the [morning], I wake up and go to school." },
      { "speaker": "A", "text": "In the [afternoon], I eat lunch." },
      { "speaker": "A", "text": "In the [evening], I go to bed." }
    ],
    "blanks": ["morning", "afternoon", "evening"]
  }
  $json$::jsonb,
  true
),

-- 6. Speaking (speaking game, choose 3 and say your day)
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  6,
  'speaking',
  'Choose and Say',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "What do you do in the morning?" },
      { "speaker": "B", "text": "I ___." },
      { "speaker": "A", "text": "What do you do at night?" },
      { "speaker": "B", "text": "I ___." }
    ],
    "note": "Choose 3 words from this unit and say your whole day, morning to night!"
  }
  $json$::jsonb,
  true
),

-- 7. Reading
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  7,
  'reading',
  'My Day',
  'Read the text, then answer the questions below.',
  $json$
  {
    "title": "My Day",
    "subtitle": "Read the text, then answer the questions below.",
    "text": "My day. I wake up. I go to school. I do homework. I go to bed.",
    "questions": ["What do you do in the morning?", "What do you do in the afternoon?", "What do you do in the evening?"]
  }
  $json$::jsonb,
  true
),

-- 8. Writing
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
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
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  9,
  'review',
  'Today I Can...',
  null,
  $json$
  {
    "checklist": [
      "I can say morning words.",
      "I can say afternoon words.",
      "I can say evening words.",
      "I can talk about my day."
    ],
    "challenge": "Tell your teacher your whole day — from waking up in the morning to going to bed at night!"
  }
  $json$::jsonb,
  true
);
