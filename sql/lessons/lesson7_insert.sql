-- Sentenco A1 Kids — Unit 2, Lesson 2: Breakfast Time
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd0da7f91-4718-4603-a746-74fd94579e99',
  'Breakfast Time',
  'A1',
  'kids',
  2,
  2,
  'Name breakfast foods and say what you eat and drink.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  'd0da7f91-4718-4603-a746-74fd94579e99',
  1,
  'title',
  'Breakfast Time',
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
  'd0da7f91-4718-4603-a746-74fd94579e99',
  2,
  'warmup',
  'Look! Breakfast Time',
  null,
  $json$
  {
    "title": "Look! Breakfast Time",
    "display": "🍳",
    "questions": ["Bread", "Milk", "Egg", "Cereal"]
  }
  $json$::jsonb,
  true
),

-- 3. Vocabulary
(
  'd0da7f91-4718-4603-a746-74fd94579e99',
  3,
  'vocabulary',
  'Today''s Words',
  null,
  $json$
  {
    "words": [
      { "word": "Bread", "bg": "#FAECE7" },
      { "word": "Milk", "bg": "#E1F5EE" },
      { "word": "Egg", "bg": "#EEEDFE" },
      { "word": "Cereal", "bg": "#FAEEDA" }
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Phrases (sentence model — teacher says, student repeats)
(
  'd0da7f91-4718-4603-a746-74fd94579e99',
  4,
  'phrases',
  'My Breakfast',
  null,
  $json$
  {
    "teacher": ["I eat bread.", "I drink milk.", "I eat egg.", "I eat cereal."],
    "student": ["I eat bread.", "I drink milk.", "I eat egg.", "I eat cereal."],
    "note": "Repeat each sentence after your teacher!"
  }
  $json$::jsonb,
  true
),

-- 5. Activity (fill in the blank — match food to sentence)
(
  'd0da7f91-4718-4603-a746-74fd94579e99',
  5,
  'activity',
  'Fill in the Blanks',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "I eat [bread]." },
      { "speaker": "A", "text": "I drink [milk]." },
      { "speaker": "A", "text": "I eat [egg]." },
      { "speaker": "A", "text": "I eat [cereal]." }
    ],
    "blanks": ["bread", "milk", "egg", "cereal"]
  }
  $json$::jsonb,
  true
),

-- 6. Speaking (guided practice, choose and say)
(
  'd0da7f91-4718-4603-a746-74fd94579e99',
  6,
  'speaking',
  'Choose Your Breakfast',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "What do you eat?" },
      { "speaker": "B", "text": "I eat ___." },
      { "speaker": "A", "text": "What do you drink?" },
      { "speaker": "B", "text": "I drink ___." }
    ],
    "note": "Choose 2 breakfast foods and say them!"
  }
  $json$::jsonb,
  true
),

-- 7. Reading
(
  'd0da7f91-4718-4603-a746-74fd94579e99',
  7,
  'reading',
  'My Breakfast',
  'Read the text, then answer the questions below.',
  $json$
  {
    "title": "My Breakfast",
    "subtitle": "Read the text, then answer the questions below.",
    "text": "My breakfast. I eat bread. I drink milk. I eat cereal.",
    "questions": ["What does the student eat?", "What does the student drink?"]
  }
  $json$::jsonb,
  true
),

-- 8. Writing
(
  'd0da7f91-4718-4603-a746-74fd94579e99',
  8,
  'writing',
  'Write About Your Breakfast',
  null,
  $json$
  {
    "prompts": ["I eat ___.", "I drink ___."]
  }
  $json$::jsonb,
  true
),

-- 9. Review
(
  'd0da7f91-4718-4603-a746-74fd94579e99',
  9,
  'review',
  'Look What You Can Do!',
  null,
  $json$
  {
    "checklist": [
      "I can name breakfast foods.",
      "I can say what I eat.",
      "I can say what I drink."
    ],
    "challenge": "Tell your teacher three things about your breakfast — what you eat and what you drink!"
  }
  $json$::jsonb,
  true
);
