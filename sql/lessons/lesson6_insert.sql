-- Sentenco A1 Kids — Unit 2, Lesson 1: My Morning
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8f1e3614-3189-40bf-b009-da064d03b833',
  'My Morning',
  'A1',
  'kids',
  2,
  1,
  'Talk about your morning routine: wake up, brush your teeth, get dressed, go to school.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  1,
  'title',
  'My Morning',
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
  '8f1e3614-3189-40bf-b009-da064d03b833',
  2,
  'warmup',
  'Look! My Morning',
  null,
  $json$
  {
    "title": "Look! My Morning",
    "display": "☀️",
    "questions": ["Wake up", "Brush my teeth", "Get dressed", "Go to school"]
  }
  $json$::jsonb,
  true
),

-- 3. Vocabulary
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  3,
  'vocabulary',
  'Today''s Words',
  null,
  $json$
  {
    "words": [
      { "word": "Wake Up", "bg": "#FAECE7" },
      { "word": "Brush My Teeth", "bg": "#E1F5EE" },
      { "word": "Get Dressed", "bg": "#EEEDFE" },
      { "word": "Go To School", "bg": "#FAEEDA" }
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Phrases (sentence model — teacher says, student repeats)
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  4,
  'phrases',
  'My Morning',
  null,
  $json$
  {
    "teacher": ["I wake up.", "I brush my teeth.", "I get dressed.", "I go to school."],
    "student": ["I wake up.", "I brush my teeth.", "I get dressed.", "I go to school."],
    "note": "Repeat each sentence after your teacher!"
  }
  $json$::jsonb,
  true
),

-- 5. Activity (fill in the blank — put the morning in order)
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  5,
  'activity',
  'Put It in Order',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "First, I [wake up]." },
      { "speaker": "A", "text": "Then, I [brush my teeth]." },
      { "speaker": "A", "text": "Next, I [get dressed]." },
      { "speaker": "A", "text": "Last, I [go to school]." }
    ],
    "blanks": ["wake up", "brush my teeth", "get dressed", "go to school"]
  }
  $json$::jsonb,
  true
),

-- 6. Speaking (guided practice, choose and say)
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
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
    "note": "Choose 2 or 3 morning actions and say them in order!"
  }
  $json$::jsonb,
  true
),

-- 7. Reading
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  7,
  'reading',
  'My Morning',
  'Read the text, then answer the questions below.',
  $json$
  {
    "title": "My Morning",
    "subtitle": "Read the text, then answer the questions below.",
    "text": "My morning. I wake up. I brush my teeth. I get dressed. I go to school.",
    "questions": ["What do you do first?", "What do you do after you wake up?", "Where do you go?"]
  }
  $json$::jsonb,
  true
),

-- 8. Writing
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  8,
  'writing',
  'Write Your Morning',
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
  '8f1e3614-3189-40bf-b009-da064d03b833',
  9,
  'review',
  'Look What You Can Do!',
  null,
  $json$
  {
    "checklist": [
      "I can say morning actions.",
      "I can put them in order.",
      "I can say a short morning routine."
    ],
    "challenge": "Tell your teacher your whole morning routine — from waking up to going to school!"
  }
  $json$::jsonb,
  true
);
