-- Sentenco A1 Kids — Unit 1, Lesson 5: All About Me
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8b43e886-94e1-426d-93f3-abab9d758544',
  'All About Me',
  'A1',
  'kids',
  1,
  5,
  'Review name, age, family, and likes from Unit 1 — and talk all about you.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  1,
  'title',
  'All About Me',
  null,
  $json$
  {
    "badge": "A1 · Beginner · Kids"
  }
  $json$::jsonb,
  true
),

-- 2. Warm-up
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  2,
  'warmup',
  'Let''s Remember!',
  null,
  $json$
  {
    "title": "Let's Remember!",
    "questions": ["My name is ___.", "I am ___ years old.", "I have a ___.", "I like ___."]
  }
  $json$::jsonb,
  true
),

-- 3. Vocabulary
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  3,
  'vocabulary',
  'Key Words',
  null,
  $json$
  {
    "words": [
      { "word": "Name", "bg": "#FAECE7" },
      { "word": "Age", "bg": "#E1F5EE" },
      { "word": "Family", "bg": "#EEEDFE" },
      { "word": "Like", "bg": "#FAEEDA" }
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Phrases (sentence practice models)
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  4,
  'phrases',
  'Sentence Practice',
  null,
  $json$
  {
    "teacher": ["My name is Sofia.", "I have one sister."],
    "student": ["I am 10 years old.", "I like cats."],
    "note": "Practice saying these sentences about yourself!"
  }
  $json$::jsonb,
  true
),

-- 5. Activity (fill in the blank, unit recap)
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  5,
  'activity',
  'Fill in the Blanks',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "What's your [name]?" },
      { "speaker": "B", "text": "My name is Mia. How [old] are you?" },
      { "speaker": "A", "text": "I'm 10. Do you have a big [family]?" },
      { "speaker": "B", "text": "Yes! And I [like] cats!" }
    ],
    "blanks": ["name", "old", "family", "like"]
  }
  $json$::jsonb,
  true
),

-- 6. Speaking (speaking game, switch roles)
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  6,
  'speaking',
  'Tell Me About You',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "What is your name?" },
      { "speaker": "B", "text": "My name is ___." },
      { "speaker": "A", "text": "How old are you?" },
      { "speaker": "B", "text": "I am ___ years old." },
      { "speaker": "A", "text": "Who is in your family?" },
      { "speaker": "B", "text": "I have a ___." },
      { "speaker": "A", "text": "What do you like?" },
      { "speaker": "B", "text": "I like ___." }
    ],
    "note": "Switch! Now the student asks the questions and the teacher answers."
  }
  $json$::jsonb,
  true
),

-- 7. Reading
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  7,
  'reading',
  'Meet Mia!',
  'Read about Mia, then answer the questions below.',
  $json$
  {
    "title": "Meet Mia!",
    "subtitle": "Read about Mia, then answer the questions below.",
    "text": "Hi! My name is Mia. I am 7 years old. I have a mom, a dad, and a sister. I like cats.",
    "questions": ["What is her name?", "How old is she?", "Who is in her family?", "What does she like?"]
  }
  $json$::jsonb,
  true
),

-- 8. Writing
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  8,
  'writing',
  'Write About You',
  null,
  $json$
  {
    "prompts": ["My name is ___.", "I am ___ years old.", "I have a ___.", "I like ___."]
  }
  $json$::jsonb,
  true
),

-- 9. Review
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  9,
  'review',
  'Today I Can...',
  null,
  $json$
  {
    "checklist": [
      "Say my name",
      "Say my age",
      "Talk about my family",
      "Say what I like"
    ],
    "challenge": "Tell your teacher everything about you — your name, age, family, and likes!"
  }
  $json$::jsonb,
  true
);
