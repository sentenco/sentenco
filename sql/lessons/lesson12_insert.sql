-- Sentenco A1 Kids — Unit 1, Lesson 6: What Can You Say? (Unit 1 assessment)
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '43ece396-6750-4f38-9a74-e46cd80553f1',
  'What Can You Say?',
  'A1',
  'kids',
  1,
  6,
  'Unit 1 assessment — show what you can say about hello, your name, your country, and your age.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  '43ece396-6750-4f38-9a74-e46cd80553f1',
  1,
  'title',
  'What Can You Say?',
  null,
  $json$
  {
    "badge": "A1 · Beginner · Kids"
  }
  $json$::jsonb,
  true
),

-- 2. Warm-up (picture review / retrieval, not new teaching)
(
  '43ece396-6750-4f38-9a74-e46cd80553f1',
  2,
  'warmup',
  'What Can You Remember?',
  null,
  $json$
  {
    "title": "What Can You Remember?",
    "questions": ["Hello!", "My name is ___.", "I am from ___.", "I am ___ years old."]
  }
  $json$::jsonb,
  true
),

-- 3. Vocabulary (recognition check, no new words)
(
  '43ece396-6750-4f38-9a74-e46cd80553f1',
  3,
  'vocabulary',
  'Say the Words',
  null,
  $json$
  {
    "words": [
      { "word": "Hello", "bg": "#FAECE7" },
      { "word": "Name", "bg": "#E1F5EE" },
      { "word": "Country", "bg": "#EEEDFE" },
      { "word": "Age", "bg": "#FAEEDA" }
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Phrases (read and repeat, all previously taught)
(
  '43ece396-6750-4f38-9a74-e46cd80553f1',
  4,
  'phrases',
  'Read and Point',
  null,
  $json$
  {
    "teacher": ["Hello!", "My name is Mia.", "I am from Calumpit.", "I am 10 years old."],
    "student": ["Hello!", "My name is Mia.", "I am from Calumpit.", "I am 10 years old."],
    "note": "Read and repeat — this is everything you learned in Unit 1!"
  }
  $json$::jsonb,
  true
),

-- 5. Activity (fill in the blank — match the word)
(
  '43ece396-6750-4f38-9a74-e46cd80553f1',
  5,
  'activity',
  'Match the Word',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "[Hello]!" },
      { "speaker": "A", "text": "My name is [Mia]." },
      { "speaker": "A", "text": "I am from [Calumpit]." },
      { "speaker": "A", "text": "I am [10] years old." }
    ],
    "blanks": ["Hello", "Mia", "Calumpit", "10"]
  }
  $json$::jsonb,
  true
),

-- 6. Speaking (short speaking check, choose 2 and say)
(
  '43ece396-6750-4f38-9a74-e46cd80553f1',
  6,
  'speaking',
  'Short Speaking Check',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "Tell me 2 things about you." },
      { "speaker": "B", "text": "Hello! My name is ___." },
      { "speaker": "A", "text": "What else can you say?" },
      { "speaker": "B", "text": "I am from ___. I am ___ years old." }
    ],
    "note": "Choose 2 things and say them on your own!"
  }
  $json$::jsonb,
  true
),

-- 7. Reading (comprehension check, no new language)
(
  '43ece396-6750-4f38-9a74-e46cd80553f1',
  7,
  'reading',
  'Meet Mia Again!',
  'Read the text, then answer the questions below.',
  $json$
  {
    "title": "Meet Mia Again!",
    "subtitle": "Read the text, then answer the questions below.",
    "text": "Hi! My name is Mia. I am from Calumpit. I am 10 years old.",
    "questions": ["What is her name?", "Where is she from?", "How old is she?"]
  }
  $json$::jsonb,
  true
),

-- 8. Writing (personalized check, same 4 lines)
(
  '43ece396-6750-4f38-9a74-e46cd80553f1',
  8,
  'writing',
  'Write About You',
  null,
  $json$
  {
    "prompts": ["Hello!", "My name is ___.", "I am from ___.", "I am ___ years old."]
  }
  $json$::jsonb,
  true
),

-- 9. Review
(
  '43ece396-6750-4f38-9a74-e46cd80553f1',
  9,
  'review',
  'I Can...',
  null,
  $json$
  {
    "checklist": [
      "I can say hello.",
      "I can say my name.",
      "I can say where I am from.",
      "I can say my age."
    ],
    "challenge": "Show your teacher everything you learned in Unit 1 — say hello, your name, where you're from, and your age!"
  }
  $json$::jsonb,
  true
);
