-- Sentenco A1 Kids — Unit 2, Lesson 4: My Afternoon
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  'My Afternoon',
  'A1',
  'kids',
  2,
  4,
  'Talk about your afternoon routine: eat lunch, do homework, play, watch TV.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  1,
  'title',
  'My Afternoon',
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
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  2,
  'warmup',
  'Look! My Afternoon',
  null,
  $json$
  {
    "title": "Look! My Afternoon",
    "display": "🌞",
    "questions": ["Lunch", "Homework", "Play", "TV"]
  }
  $json$::jsonb,
  true
),

-- 3. Vocabulary
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  3,
  'vocabulary',
  'Today''s Words',
  null,
  $json$
  {
    "words": [
      { "word": "Lunch", "bg": "#FAECE7" },
      { "word": "Homework", "bg": "#E1F5EE" },
      { "word": "Play", "bg": "#EEEDFE" },
      { "word": "TV", "bg": "#FAEEDA" }
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Phrases (sentence model — teacher says, student repeats)
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  4,
  'phrases',
  'My Afternoon',
  null,
  $json$
  {
    "teacher": ["I eat lunch.", "I do homework.", "I play.", "I watch TV."],
    "student": ["I eat lunch.", "I do homework.", "I play.", "I watch TV."],
    "note": "Repeat each sentence after your teacher!"
  }
  $json$::jsonb,
  true
),

-- 5. Activity (fill in the blank — order the routine)
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  5,
  'activity',
  'Order the Routine',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "First, I eat [lunch]." },
      { "speaker": "A", "text": "Then, I do [homework]." },
      { "speaker": "A", "text": "Next, I [play]." },
      { "speaker": "A", "text": "Last, I watch [TV]." }
    ],
    "blanks": ["lunch", "homework", "play", "TV"]
  }
  $json$::jsonb,
  true
),

-- 6. Speaking (guided practice, choose and say)
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
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
    "note": "Choose 2 or 3 afternoon actions and say them in order!"
  }
  $json$::jsonb,
  true
),

-- 7. Reading
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  7,
  'reading',
  'My Afternoon',
  'Read the text, then answer the questions below.',
  $json$
  {
    "title": "My Afternoon",
    "subtitle": "Read the text, then answer the questions below.",
    "text": "My afternoon. I eat lunch. I do homework. I play. I watch TV.",
    "questions": ["What do you do first?", "What do you do after homework?", "What do you watch?"]
  }
  $json$::jsonb,
  true
),

-- 8. Writing
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  8,
  'writing',
  'Write Your Afternoon',
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
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  9,
  'review',
  'Look What You Can Do!',
  null,
  $json$
  {
    "checklist": [
      "I can say afternoon words.",
      "I can say afternoon actions.",
      "I can put them in order."
    ],
    "challenge": "Tell your teacher your whole afternoon routine — from lunch to watching TV!"
  }
  $json$::jsonb,
  true
);
