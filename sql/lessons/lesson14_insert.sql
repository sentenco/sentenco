-- Sentenco A2 Adults — Unit 1, Lesson 1: My Workday as a Photographer
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f995d018-d365-4871-8e4c-73dbc9e1173c',
  'My Workday as a Photographer',
  'A2',
  'adults',
  1,
  1,
  'Answer real questions about a workday clearly and naturally, using present simple and frequency adverbs for routines and work habits.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  'f995d018-d365-4871-8e4c-73dbc9e1173c',
  1,
  'title',
  'My Workday as a Photographer',
  null,
  $json$
  {
    "badge": "A2 → B1 · Adults",
    "subtitle": "Goal: talk clearly about your workday — what you do, how often, and in what order."
  }
  $json$::jsonb,
  true
),

-- 2. Warm-up
(
  'f995d018-d365-4871-8e4c-73dbc9e1173c',
  2,
  'warmup',
  'Let''s Talk About Work',
  null,
  $json$
  {
    "title": "Let's Talk About Work",
    "questions": [
      "What do you do most days?",
      "What time do you usually start work?",
      "How often do you meet clients?",
      "What do you do after a shoot?"
    ]
  }
  $json$::jsonb,
  true
),

-- 3. Vocabulary (4 core workday verbs, in order)
(
  'f995d018-d365-4871-8e4c-73dbc9e1173c',
  3,
  'vocabulary',
  'Words for Your Workday',
  'Four steps in a photographer''s day.',
  $json$
  {
    "title": "Words for Your Workday",
    "subtitle": "Four steps in a photographer's day.",
    "words": [
      { "word": "Start", "bg": "#EDEAE2" },
      { "word": "Meet", "bg": "#E4E7E0" },
      { "word": "Edit", "bg": "#EFE3D8" },
      { "word": "Send", "bg": "#E1E6EA" }
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Phrases (Model answers to the 3 core questions)
(
  'f995d018-d365-4871-8e4c-73dbc9e1173c',
  4,
  'phrases',
  'Listen First, Then Try',
  null,
  $json$
  {
    "tag": "Model Answers",
    "title": "Listen First, Then Try",
    "teacher": [
      "What time do you usually start work?",
      "How often do you meet clients?",
      "What do you do after a shoot?"
    ],
    "student": [
      "I usually start work at nine in the morning.",
      "I meet clients two or three times a week, usually in the afternoon.",
      "After a shoot, I usually edit the photos and then send them to the client."
    ],
    "note": "Notice: usually / often + present simple for routines."
  }
  $json$::jsonb,
  true
),

-- 5. Activity (Controlled practice, fill in the blank)
(
  'f995d018-d365-4871-8e4c-73dbc9e1173c',
  5,
  'activity',
  'Complete the Interview',
  'Drag each word into the right blank.',
  $json$
  {
    "tag": "Controlled Practice",
    "title": "Complete the Interview",
    "subtitle": "Drag each word into the right blank.",
    "dialogue": [
      { "speaker": "A", "text": "What time do you usually [start] work?" },
      { "speaker": "B", "text": "I usually [start] at nine in the morning." },
      { "speaker": "A", "text": "Do you often [meet] clients?" },
      { "speaker": "B", "text": "Yes, I usually [meet] them on Tuesdays." },
      { "speaker": "A", "text": "What do you do after a shoot?" },
      { "speaker": "B", "text": "I [edit] the photos, then I [send] them to the client." }
    ],
    "blanks": ["start", "start", "meet", "meet", "edit", "send"]
  }
  $json$::jsonb,
  true
),

-- 6. Speaking (Free speaking task, open role play)
(
  'f995d018-d365-4871-8e4c-73dbc9e1173c',
  6,
  'speaking',
  'Tell Me About Your Day',
  'Answer naturally. Focus on being clear, not perfect.',
  $json$
  {
    "tag": "Speaking",
    "title": "Tell Me About Your Day",
    "subtitle": "Answer naturally. Focus on being clear, not perfect.",
    "dialogue": [
      { "speaker": "A", "text": "What do you do most days?" },
      { "speaker": "B", "text": "___" },
      { "speaker": "A", "text": "How often do you meet clients?" },
      { "speaker": "B", "text": "___" },
      { "speaker": "A", "text": "What do you do after a shoot?" },
      { "speaker": "B", "text": "___" }
    ],
    "note": "Now switch roles and ask your teacher the same questions."
  }
  $json$::jsonb,
  true
),

-- 7. Reading (extension text, reinforces present simple + connected discourse)
(
  'f995d018-d365-4871-8e4c-73dbc9e1173c',
  7,
  'reading',
  'A Day in Her Work',
  'Read about Maria, then answer the questions.',
  $json$
  {
    "tag": "Reading",
    "title": "A Day in Her Work",
    "subtitle": "Read about Maria, then answer the questions.",
    "text": "Maria is a freelance photographer. She usually starts work at nine and checks her emails first. She meets clients two or three times a week, often in the afternoon, to plan photo shoots. After a shoot, she edits the photos on her laptop and sends them to the client by email. She doesn't work every weekend, but she often works late before a big event.",
    "questions": [
      "What time does Maria start work?",
      "How often does she meet clients?",
      "What does she do after a shoot?"
    ]
  }
  $json$::jsonb,
  true
),

-- 8. Writing (repurposed as error-correction task, 3 incorrect sentences)
(
  'f995d018-d365-4871-8e4c-73dbc9e1173c',
  8,
  'writing',
  'Fix the Mistake',
  'Each sentence has one tense mistake. Say or write the correct sentence.',
  $json$
  {
    "tag": "Correction",
    "title": "Fix the Mistake",
    "subtitle": "Each sentence has one tense mistake. Say or write the correct sentence.",
    "prompts": [
      "I am usually start work at nine.",
      "She meet clients every week.",
      "He don't send the photos every time."
    ]
  }
  $json$::jsonb,
  true
),

-- 9. Review (Exit check)
(
  'f995d018-d365-4871-8e4c-73dbc9e1173c',
  9,
  'review',
  'Today I Can…',
  null,
  $json$
  {
    "tag": "Exit Check",
    "title": "Today I Can…",
    "subtitle": "Check what you practiced today.",
    "checklist": [
      "Answer \"What do you do most days?\" clearly",
      "Use usually / often with present simple",
      "Describe my workday in a natural order",
      "Fix common present simple mistakes"
    ],
    "challenge": "In 3–4 sentences, tell me about your typical workday — from start to finish."
  }
  $json$::jsonb,
  true
);
