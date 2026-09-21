-- Sentenco A1 Kids — Unit 1, Lesson 4: My Likes
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  'My Likes',
  'A1',
  'kids',
  1,
  4,
  'Say what you like and don''t like, and answer "Do you like...?"',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  1,
  'title',
  'My Likes',
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
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  2,
  'warmup',
  'Do You Like...?',
  null,
  $json$
  {
    "title": "Do You Like...?",
    "questions": ["Pizza?", "Cats?", "Bananas?", "School?", "Dogs?"]
  }
  $json$::jsonb,
  true
),

-- 3. Vocabulary
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  3,
  'vocabulary',
  'Likes & Dislikes',
  null,
  $json$
  {
    "words": [
      { "word": "Love", "bg": "#FAECE7" },
      { "word": "Like", "bg": "#E1F5EE" },
      { "word": "Don't Like", "bg": "#EEEDFE" },
      { "word": "Hate", "bg": "#FAEEDA" }
    ]
  }
  $json$::jsonb,
  true
),

-- 4. Phrases (simple sentence models)
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  4,
  'phrases',
  'Simple Sentences',
  null,
  $json$
  {
    "teacher": ["I like cats.", "I don't like snakes."],
    "student": ["I like apples.", "I don't like homework."],
    "note": "Practice reading these sentences together!"
  }
  $json$::jsonb,
  true
),

-- 5. Activity (fill in the blank, practice dialogue)
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  5,
  'activity',
  'Fill in the Blanks',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "Do you [like] pizza?" },
      { "speaker": "B", "text": "Yes, I [do]." },
      { "speaker": "A", "text": "Do you like [cats]?" },
      { "speaker": "B", "text": "No, I [don't]." }
    ],
    "blanks": ["like", "do", "cats", "don't"]
  }
  $json$::jsonb,
  true
),

-- 6. Speaking (speaking game, switch roles)
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  6,
  'speaking',
  'Tell Me 2 Things',
  null,
  $json$
  {
    "dialogue": [
      { "speaker": "A", "text": "Do you like dogs or cats?" },
      { "speaker": "B", "text": "I like ___." },
      { "speaker": "A", "text": "What's something you don't like?" },
      { "speaker": "B", "text": "I don't like ___." }
    ],
    "note": "Try it with your own favorite things!"
  }
  $json$::jsonb,
  true
),

-- 7. Reading
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  7,
  'reading',
  'What Do I Like?',
  'Read the text, then answer the questions below.',
  $json$
  {
    "title": "What Do I Like?",
    "subtitle": "Read the text, then answer the questions below.",
    "text": "I like pizza. I like cats. I don't like spiders. I don't like homework.",
    "questions": ["What does the student like?", "What doesn't the student like?"]
  }
  $json$::jsonb,
  true
),

-- 8. Writing
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  8,
  'writing',
  'Write About You',
  null,
  $json$
  {
    "prompts": ["I like ___.", "I don't like ___."]
  }
  $json$::jsonb,
  true
),

-- 9. Review
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  9,
  'review',
  'Today I Can...',
  null,
  $json$
  {
    "checklist": [
      "Say what I like",
      "Say what I don't like",
      "Answer \"Do you like...?\""
    ],
    "challenge": "Tell your teacher 3 things you like and 1 thing you don't like!"
  }
  $json$::jsonb,
  true
);
