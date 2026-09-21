-- Sentenco A1 Kids — Unit 2, Lesson 5: My Evening
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  'My Evening',
  'A1',
  'kids',
  2,
  5,
  'Talk about your evening routine: eat dinner, take a bath, put on pajamas, go to bed.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  1,
  'title',
  'My Evening',
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
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  2,
  'warmup',
  'Look! My Evening',
  null,
  $json$
  {
    "title": "Look! My Evening",
    "display": "🌙",
    "questions": ["Dinner", "Bath", "Pajamas", "Bed"]
  }
  $json$::jsonb,
  true
),

-- 3. Vocabulary
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  3,
  'vocabulary',
  'Today''s Words',
  null,
  $json$
  {
    "words": [
      { "word": "Dinner", "bg": "#FAECE7" },
      { "word": "Bath", "bg": "#E1F5EE" },
      { "word": "Pajamas", "bg": "#EEEDFE" },
      { "word": "Bed", "bg": "#FAEEDA" }
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Phrases (sentence model — teacher says, student repeats)
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  4,
  'phrases',
  'My Evening',
  null,
  $json$
  {
    "teacher": ["I eat dinner.", "I take a bath.", "I put on pajamas.", "I go to bed."],
    "student": ["I eat dinner.", "I take a bath.", "I put on pajamas.", "I go to bed."],
    "note": "Repeat each sentence after your teacher!"
  }
  $json$::jsonb,
  true
),

-- 5. Activity (fill in the blank — order the routine)
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  5,
  'activity',
  'Order the Routine',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "First, I eat [dinner]." },
      { "speaker": "A", "text": "Then, I take a [bath]." },
      { "speaker": "A", "text": "Next, I put on [pajamas]." },
      { "speaker": "A", "text": "Last, I go to [bed]." }
    ],
    "blanks": ["dinner", "bath", "pajamas", "bed"]
  }
  $json$::jsonb,
  true
),

-- 6. Speaking (guided practice, choose and say)
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
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
    "note": "Choose 2 or 3 evening actions and say them in order!"
  }
  $json$::jsonb,
  true
),

-- 7. Reading
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  7,
  'reading',
  'My Evening',
  'Read the text, then answer the questions below.',
  $json$
  {
    "title": "My Evening",
    "subtitle": "Read the text, then answer the questions below.",
    "text": "My evening. I eat dinner. I take a bath. I put on pajamas. I go to bed.",
    "questions": ["What do you do first?", "What do you do after your bath?", "What do you do last?"]
  }
  $json$::jsonb,
  true
),

-- 8. Writing
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  8,
  'writing',
  'Write Your Evening',
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
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  9,
  'review',
  'Look What You Can Do!',
  null,
  $json$
  {
    "checklist": [
      "I can say evening words.",
      "I can say evening actions.",
      "I can put them in order."
    ],
    "challenge": "Tell your teacher your whole evening routine — from dinner to going to bed!"
  }
  $json$::jsonb,
  true
);
