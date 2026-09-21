-- A1 Kids: Full 12-unit curriculum (60 lessons), combined for one-shot Supabase run.
-- Run delete_all_a1.sql FIRST, then this file.
-- Title + vocabulary slides carry image_note fields describing what picture belongs
-- in each placeholder (rendered by ImagePlaceholder.jsx when image_url is empty).
-- Units 1-3's activity slides use the new mechanics rotation (match/choice/blank/
-- sort/order/mixed) per docs/curriculum/a1-kids-activity-mechanics-rotation.md;
-- Units 4-12 still use the original blank-only mechanic pending the same treatment.

-- A1 Kids Unit 1: Hello, My Name, Age, Family, and Likes (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation.
-- Fresh INSERT version (for use after delete_all_a1.sql) -- same content that
-- fix_kids_unit1_2_structure.sql (now removed) applied as an UPDATE against the live rows.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Hello & My Name
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  'Hello & My Name',
  'A1',
  'kids',
  1,
  1,
  'Say hello, introduce yourself, and ask "What''s your name?" [Foundation, L1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Hello & My Name' -- A warm, welcoming scene of a diverse group of children at the start of a school day -- waving hello, smiling, everyday classroom or playground setting."
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👋",
  "questions": [
    "What do you say when you meet someone?",
    "What do you say when you leave?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hello",
      "bg": "#FAECE7",
      "image_note": "A child waving hello with a big smile, warm and welcoming."
    },
    {
      "word": "Hi",
      "bg": "#E1F5EE",
      "image_note": "A child waving hi cheerfully, close-up, friendly expression."
    },
    {
      "word": "Goodbye",
      "bg": "#EEEDFE",
      "image_note": "A child waving goodbye while walking away, warm sunset colors."
    },
    {
      "word": "My name is",
      "bg": "#FAEEDA",
      "image_note": "A child pointing to themselves with a nametag or speech bubble."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Hello! What is your name?",
    "Goodbye!"
  ],
  "student": [
    "Hi! My name is ___.",
    "Goodbye!"
  ],
  "note": "Point to yourself and say your name!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Activity",
  "title": "Match the Greetings",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "👋",
      "word": "Hello"
    },
    {
      "emoji": "🙋",
      "word": "Hi"
    },
    {
      "emoji": "🚶",
      "word": "Goodbye"
    },
    {
      "emoji": "🏷️",
      "word": "My name is"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello! My name is Leo."
    },
    {
      "speaker": "B",
      "text": "Hi! My name is Ana."
    },
    {
      "speaker": "A",
      "text": "Nice to meet you!"
    },
    {
      "speaker": "B",
      "text": "Goodbye!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hello! My name is Leo. Hi! My name is Ana. Goodbye!",
  "questions": [
    "What is the boy's name?",
    "What is the girl's name?",
    "What do they say at the end?"
  ]
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Hello! My name is ___.",
    "Hi!",
    "Goodbye!"
  ]
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'Hello' and 'Goodbye'",
    "Say 'My name is ___'",
    "Greet a friend"
  ],
  "challenge": "Say hello and tell me your name!"
}$json$::jsonb,
  true
);

-- Lesson 2: My Age
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  'My Age',
  'A1',
  'kids',
  1,
  2,
  'Count numbers and share your age. [Foundation, L2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Age' -- A warm, welcoming scene of a diverse group of children at the start of a school day -- waving hello, smiling, everyday classroom or playground setting."
}$json$::jsonb,
  true
),
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎂",
  "questions": [
    "How old are you?",
    "Can you count to five?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "One",
      "bg": "#FAECE7",
      "image_note": "A single large numeral '1' with one matching object beside it (e.g. one apple)."
    },
    {
      "word": "How old",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Years old",
      "bg": "#EEEDFE",
      "image_note": "A birthday cake with candles, or a child holding up fingers to show their age."
    },
    {
      "word": "I am",
      "bg": "#FAEEDA",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How old are you?",
    "Can you count?"
  ],
  "student": [
    "I am seven years old.",
    "One, two, three!"
  ],
  "note": "Use the word bank: one, how old, years old, I am.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which question asks about age?",
  "options": [
    {
      "text": "How old are you?",
      "emoji": "🎂"
    },
    {
      "text": "What do you like?",
      "emoji": "⭐"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How old are you?"
    },
    {
      "speaker": "B",
      "text": "I am seven years old. How old are you?"
    },
    {
      "speaker": "A",
      "text": "I am eight years old."
    },
    {
      "speaker": "B",
      "text": "Let's count together!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How old are you? I am seven years old. I can count: one, two, three, four, five!",
  "questions": [
    "How old is the child?",
    "What can the child count?",
    "What is the highest number said?"
  ]
}$json$::jsonb,
  true
),
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am ___ years old.",
    "I can count to ___.",
    "How old are you?"
  ]
}$json$::jsonb,
  true
),
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my age",
    "Ask 'How old are you?'",
    "Count to five"
  ],
  "challenge": "Tell me your age and count to five!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8c6534e4-39c0-468e-946e-b578347a7461',
  'My Family',
  'A1',
  'kids',
  1,
  3,
  'Learn family words and talk about who is in your family. [Foundation, L3: freer practice, TPR game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Family' -- A warm, welcoming scene of a diverse group of children at the start of a school day -- waving hello, smiling, everyday classroom or playground setting."
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Who is in your family?",
    "Do you have a sister or brother?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mom",
      "bg": "#FAECE7",
      "image_note": "A warm, smiling mother figure, simple and friendly illustration style."
    },
    {
      "word": "Dad",
      "bg": "#E1F5EE",
      "image_note": "A warm, smiling father figure, simple and friendly illustration style."
    },
    {
      "word": "Sister",
      "bg": "#EEEDFE",
      "image_note": "A young girl smiling, simple and friendly illustration style."
    },
    {
      "word": "Brother",
      "bg": "#FAEEDA",
      "image_note": "A young boy smiling, simple and friendly illustration style."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your mom?"
  ],
  "student": [
    "This is my mom.",
    "Yes, this is my dad!"
  ],
  "note": "Point to a family photo and name each person!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [mom]."
    },
    {
      "speaker": "B",
      "text": "This is my [dad]."
    },
    {
      "speaker": "A",
      "text": "I have one [sister]."
    }
  ],
  "blanks": [
    "mom",
    "dad",
    "sister"
  ]
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my mom."
    },
    {
      "speaker": "B",
      "text": "This is my dad."
    },
    {
      "speaker": "A",
      "text": "I have one sister."
    },
    {
      "speaker": "B",
      "text": "I have one brother! Point to your family!"
    }
  ],
  "note": "Point-and-name game: point to each family member and say who they are!"
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my family. This is my mom. This is my dad. I have one sister and one brother.",
  "questions": [
    "Who is in the family?",
    "How many sisters?",
    "How many brothers?"
  ]
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "I have ___ sister(s).",
    "I have ___ brother(s)."
  ]
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 family members",
    "Say 'This is my ___'",
    "Point to my family"
  ],
  "challenge": "Point to your family and name everyone!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Likes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  'My Likes',
  'A1',
  'kids',
  1,
  4,
  'Say what you like and don''t like, and answer "Do you like...?" [Foundation, L4: production, show-and-tell]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Likes' -- A warm, welcoming scene of a diverse group of children at the start of a school day -- waving hello, smiling, everyday classroom or playground setting."
}$json$::jsonb,
  true
),
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⭐",
  "questions": [
    "What do you like?",
    "What don't you like?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Like",
      "bg": "#FAECE7",
      "image_note": "Simple, bright, kid-friendly illustration of 'Like' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Don't like",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Love",
      "bg": "#EEEDFE",
      "image_note": "A simple heart shape, or a family member giving a warm hug."
    },
    {
      "word": "Favorite",
      "bg": "#FAEEDA",
      "image_note": "A single object with a small star or heart on it, marking it as special."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like pizza?",
    "What is your favorite thing?"
  ],
  "student": [
    "Yes, I like pizza!",
    "My favorite is cats."
  ],
  "note": "Show-and-tell: tell me your favorites!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Activity",
  "title": "Like or Don't Like?",
  "subtitle": "Drag each one to how you feel.",
  "instruction": "Drag each thing to how you feel about it!",
  "buckets": [
    {
      "label": "I Like",
      "emoji": "😊"
    },
    {
      "label": "I Don't Like",
      "emoji": "😕"
    }
  ],
  "items": [
    {
      "text": "Pizza",
      "emoji": "🍕",
      "bucket": 0
    },
    {
      "text": "Cats",
      "emoji": "🐱",
      "bucket": 0
    },
    {
      "text": "Spiders",
      "emoji": "🕷️",
      "bucket": 1
    },
    {
      "text": "Homework",
      "emoji": "📚",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like pizza. I love cats."
    },
    {
      "speaker": "B",
      "text": "I don't like spiders. I like dogs."
    },
    {
      "speaker": "A",
      "text": "My favorite food is pizza!"
    },
    {
      "speaker": "B",
      "text": "Show me your favorite thing!"
    }
  ],
  "note": "Show-and-tell: show me a favorite toy or picture and tell me why you like it!"
}$json$::jsonb,
  true
),
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like pizza. I like cats. I don't like spiders. My favorite is cats!",
  "questions": [
    "What does the writer like?",
    "What doesn't the writer like?",
    "What is the favorite?"
  ]
}$json$::jsonb,
  true
),
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___.",
    "I don't like ___.",
    "My favorite is ___."
  ]
}$json$::jsonb,
  true
),
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like ___'",
    "Say 'I don't like ___'",
    "Show-and-tell my favorite thing"
  ],
  "challenge": "Tell me three things you like and one thing you don't like!"
}$json$::jsonb,
  true
);

-- Lesson 5: All About Me
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  'All About Me',
  'A1',
  'kids',
  1,
  5,
  'Unit Review — show what you can say about hello, your name, age, family, and likes. [Foundation, L5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'All About Me' -- A warm, welcoming scene of a diverse group of children at the start of a school day -- waving hello, smiling, everyday classroom or playground setting."
}$json$::jsonb,
  true
),
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌟",
  "questions": [
    "What is your name?",
    "How old are you?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Name",
      "bg": "#FAECE7",
      "image_note": "A nametag or name card with a friendly child pointing at it."
    },
    {
      "word": "Age",
      "bg": "#E1F5EE",
      "image_note": "A birthday cake with candles, celebratory and bright."
    },
    {
      "word": "Family",
      "bg": "#EEEDFE",
      "image_note": "A family of four holding hands together, warm and happy."
    },
    {
      "word": "Like",
      "bg": "#FAEEDA",
      "image_note": "Simple, bright, kid-friendly illustration of 'Like' -- one clear subject, no text in the image, no background clutter."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your name?",
    "Tell me about your family."
  ],
  "student": [
    "My name is ___.",
    "This is my family."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "mixed",
  "tag": "Unit Review",
  "title": "Mix It Up!",
  "subtitle": "Try one of each.",
  "parts": [
    {
      "mode": "match",
      "instruction": "Match each word.",
      "pairs": [
        {
          "emoji": "🏷️",
          "word": "Name"
        },
        {
          "emoji": "🎂",
          "word": "Age"
        },
        {
          "emoji": "👨‍👩‍👧‍👦",
          "word": "Family"
        },
        {
          "emoji": "⭐",
          "word": "Like"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one means 'family'?",
      "options": [
        {
          "text": "Family",
          "emoji": "👨‍👩‍👧‍👦"
        },
        {
          "text": "Pizza",
          "emoji": "🍕"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "My [name] is Mia."
        },
        {
          "speaker": "B",
          "text": "This is my [family]."
        },
        {
          "speaker": "A",
          "text": "I [like] cats!"
        }
      ],
      "blanks": [
        "name",
        "family",
        "like"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Drag each thing to how you feel.",
      "buckets": [
        {
          "label": "I Like",
          "emoji": "😊"
        },
        {
          "label": "I Don't Like",
          "emoji": "😕"
        }
      ],
      "items": [
        {
          "text": "Cats",
          "emoji": "🐱",
          "bucket": 0
        },
        {
          "text": "Pizza",
          "emoji": "🍕",
          "bucket": 0
        },
        {
          "text": "Spiders",
          "emoji": "🕷️",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello! My name is Mia. I am seven years old."
    },
    {
      "speaker": "B",
      "text": "This is my family: mom, dad, and one sister."
    },
    {
      "speaker": "A",
      "text": "I like cats. Goodbye!"
    },
    {
      "speaker": "B",
      "text": "Goodbye! Nice to meet you!"
    }
  ],
  "note": "Mini show-and-tell: introduce yourself with everything from this unit!"
}$json$::jsonb,
  true
),
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi! My name is Mia. I am seven years old. I have a mom, a dad, and a sister. I like cats.",
  "questions": [
    "What is the girl's name?",
    "How old is she?",
    "What does she like?"
  ]
}$json$::jsonb,
  true
),
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My name is ___.",
    "I am ___ years old.",
    "I like ___."
  ]
}$json$::jsonb,
  true
),
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say hello and my name",
    "Say my age",
    "Talk about my family and likes"
  ],
  "challenge": "Tell me all about you: name, age, family, and something you like!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 2: My Day (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation.
-- Fresh INSERT version (for use after delete_all_a1.sql) -- same content that
-- fix_kids_unit1_2_structure.sql (now removed) applied as an UPDATE against the live rows.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Morning
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  'My Morning',
  'A1',
  'kids',
  2,
  1,
  'Talk about your morning routine: wake up, brush your teeth, get dressed, and eat breakfast. [Foundation, L1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Morning' -- A cheerful family scene at home -- parents and children together in a cozy living room, warm morning light."
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏰",
  "questions": [
    "What time do you wake up?",
    "What do you eat for breakfast?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Wake up",
      "bg": "#FAECE7",
      "image_note": "A child stretching in bed as sunlight comes through the window."
    },
    {
      "word": "Brush my teeth",
      "bg": "#E1F5EE",
      "image_note": "A child brushing their teeth at the bathroom sink, smiling."
    },
    {
      "word": "Get dressed",
      "bg": "#EEEDFE",
      "image_note": "A child putting on a shirt, clothes laid out on the bed."
    },
    {
      "word": "Eat breakfast",
      "bg": "#FAEEDA",
      "image_note": "A child eating cereal or toast at the breakfast table."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first in the morning?",
    "What do you eat for breakfast?"
  ],
  "student": [
    "First, I wake up.",
    "I eat bread and milk."
  ],
  "note": "Act out each morning action, then say it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one do you do FIRST in the morning?",
  "options": [
    {
      "text": "Wake up",
      "emoji": "⏰"
    },
    {
      "text": "Eat breakfast",
      "emoji": "🥣"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I wake up."
    },
    {
      "speaker": "B",
      "text": "I brush my teeth."
    },
    {
      "speaker": "A",
      "text": "I get dressed."
    },
    {
      "speaker": "B",
      "text": "I eat breakfast!"
    }
  ],
  "note": "Teacher says the action first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My morning. I wake up. I brush my teeth. I get dressed. I eat breakfast.",
  "questions": [
    "What does the child do first?",
    "What does the child do after brushing teeth?",
    "What is the last thing?"
  ]
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I wake up.",
    "I brush my teeth and ___.",
    "I eat ___ for breakfast."
  ]
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 morning actions",
    "Sequence my morning",
    "Say what I eat for breakfast"
  ],
  "challenge": "Tell me your whole morning in order!"
}$json$::jsonb,
  true
);

-- Lesson 2: Go to School
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  'Go to School',
  'A1',
  'kids',
  2,
  2,
  'Talk about your school morning: get your bag, put on your shoes, take the bus, go to school. [Foundation, L2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Go to School' -- A cheerful family scene at home -- parents and children together in a cozy living room, warm morning light."
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎒",
  "questions": [
    "Do you take the bus to school?",
    "What is in your school bag?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "School bag",
      "bg": "#FAECE7",
      "image_note": "A colorful backpack, packed and ready by the door."
    },
    {
      "word": "Shoes",
      "bg": "#E1F5EE",
      "image_note": "A pair of bright, simple children's shoes side by side."
    },
    {
      "word": "Bus",
      "bg": "#EEEDFE",
      "image_note": "A cheerful yellow school bus, simple and rounded shapes."
    },
    {
      "word": "School",
      "bg": "#FAEEDA",
      "image_note": "A cheerful, simple school building with a flag or bell on top."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you take to school?",
    "Do you take the bus?"
  ],
  "student": [
    "I take my school bag.",
    "Yes, I take the bus."
  ],
  "note": "Use the word bank: school bag, shoes, bus, school.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Activity",
  "title": "Match to School",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "🎒",
      "word": "School bag"
    },
    {
      "emoji": "👟",
      "word": "Shoes"
    },
    {
      "emoji": "🚌",
      "word": "Bus"
    },
    {
      "emoji": "🏫",
      "word": "School"
    }
  ]
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I get my school bag. I put on my shoes."
    },
    {
      "speaker": "B",
      "text": "I take the bus to school. Do you take the bus?"
    },
    {
      "speaker": "A",
      "text": "Yes! I go to school every day."
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I get my school bag. I put on my shoes. I take the bus. I go to school.",
  "questions": [
    "What does the child get first?",
    "What does the child put on?",
    "How does the child go to school?"
  ]
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I get my ___.",
    "I put on my ___.",
    "I take the ___ to school."
  ]
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 school-morning words",
    "Sequence getting ready for school",
    "Say how I go to school"
  ],
  "challenge": "Tell me how you get ready and go to school!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Afternoon
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  'My Afternoon',
  'A1',
  'kids',
  2,
  3,
  'Talk about your afternoon routine: eat lunch, do homework, play, watch TV. [Foundation, L3: freer practice, TPR game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Afternoon' -- A cheerful family scene at home -- parents and children together in a cozy living room, warm morning light."
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏡",
  "questions": [
    "What do you do after school?",
    "Do you watch TV in the afternoon?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Lunch",
      "bg": "#FAECE7",
      "image_note": "A lunchbox open showing a sandwich, fruit, and a juice box."
    },
    {
      "word": "Homework",
      "bg": "#E1F5EE",
      "image_note": "A child at a desk writing in a notebook with a pencil."
    },
    {
      "word": "Play",
      "bg": "#EEEDFE",
      "image_note": "A child playing happily with toys on the floor."
    },
    {
      "word": "TV",
      "bg": "#FAEEDA",
      "image_note": "A simple rounded television showing a bright cartoon scene."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do after school?",
    "Do you play or watch TV?"
  ],
  "student": [
    "I eat lunch and do homework.",
    "I play and watch TV."
  ],
  "note": "Act out an afternoon action, and I'll guess it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat [lunch]."
    },
    {
      "speaker": "B",
      "text": "I do my [homework]."
    },
    {
      "speaker": "A",
      "text": "I [play] and watch [TV]."
    }
  ],
  "blanks": [
    "lunch",
    "homework",
    "tv"
  ]
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do after school?"
    },
    {
      "speaker": "B",
      "text": "I eat lunch. Then I do my homework."
    },
    {
      "speaker": "A",
      "text": "After that, I play and watch TV."
    },
    {
      "speaker": "B",
      "text": "Act out one thing you do!"
    }
  ],
  "note": "Act-it-out game: act out an afternoon action, teacher guesses the word!"
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My afternoon. I eat lunch. I do homework. I play. I watch TV.",
  "questions": [
    "What does the child eat?",
    "What does the child do after lunch?",
    "What two things happen at the end?"
  ]
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat ___ for lunch.",
    "I do my ___.",
    "I play and watch ___."
  ]
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 afternoon activities",
    "Sequence my afternoon",
    "Act out an afternoon action"
  ],
  "challenge": "Tell me your afternoon and act one part out!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Evening
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '04001f40-834d-4c0a-9433-09b67a445259',
  'My Evening',
  'A1',
  'kids',
  2,
  4,
  'Talk about your evening routine: eat dinner, take a bath, put on pajamas, go to bed. [Foundation, L4: production, show-and-tell]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Evening' -- A cheerful family scene at home -- parents and children together in a cozy living room, warm morning light."
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌙",
  "questions": [
    "What do you do before bed?",
    "Do you take a bath at night?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dinner",
      "bg": "#FAECE7",
      "image_note": "A family sitting together at a dinner table with plates of food."
    },
    {
      "word": "Bath",
      "bg": "#E1F5EE",
      "image_note": "A child in a bathtub with bubbles, rubber duck nearby."
    },
    {
      "word": "Pajamas",
      "bg": "#EEEDFE",
      "image_note": "A child in cozy pajamas, ready for bed, yawning."
    },
    {
      "word": "Bed",
      "bg": "#FAEEDA",
      "image_note": "Simple, bright, kid-friendly illustration of 'Bed' -- one clear subject, no text in the image, no background clutter."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do in the evening?",
    "What time do you go to bed?"
  ],
  "student": [
    "I eat dinner and take a bath.",
    "I go to bed at 8pm."
  ],
  "note": "Show-and-tell: show me your evening routine in order!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "order",
  "tag": "Activity",
  "title": "My Evening",
  "subtitle": "Put the steps in order.",
  "instruction": "Put your evening in order!",
  "items": [
    {
      "text": "Dinner",
      "emoji": "🍽️"
    },
    {
      "text": "Bath",
      "emoji": "🛁"
    },
    {
      "text": "Pajamas",
      "emoji": "🧸"
    },
    {
      "text": "Bed",
      "emoji": "🛏️"
    }
  ]
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat dinner. Then I take a bath."
    },
    {
      "speaker": "B",
      "text": "I put on my pajamas. Then I go to bed."
    },
    {
      "speaker": "A",
      "text": "What time do you go to bed?"
    },
    {
      "speaker": "B",
      "text": "I go to bed at 8pm. Show me your evening!"
    }
  ],
  "note": "Show-and-tell: act out your whole evening routine in order!"
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My evening. I eat dinner. I take a bath. I put on pajamas. I go to bed.",
  "questions": [
    "What does the child eat?",
    "What does the child do after dinner?",
    "What is the last thing before bed?"
  ]
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat ___ for dinner.",
    "I take a ___.",
    "I put on my ___ and go to bed."
  ]
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 evening actions",
    "Sequence my evening",
    "Show-and-tell my bedtime routine"
  ],
  "challenge": "Show me your evening routine, from dinner to bed!"
}$json$::jsonb,
  true
);

-- Lesson 5: All About My Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  'All About My Day',
  'A1',
  'kids',
  2,
  5,
  'Unit Review — talk about your whole day, from morning to night. [Foundation, L5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'All About My Day' -- A cheerful family scene at home -- parents and children together in a cozy living room, warm morning light."
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌞",
  "questions": [
    "What do you do in the morning?",
    "What do you do at night?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Morning",
      "bg": "#FAECE7",
      "image_note": "The sun rising over a house, soft yellow and pink sky."
    },
    {
      "word": "School",
      "bg": "#E1F5EE",
      "image_note": "A cheerful, simple school building with a flag or bell on top."
    },
    {
      "word": "Afternoon",
      "bg": "#EEEDFE",
      "image_note": "A bright midday sun with a child playing outside."
    },
    {
      "word": "Evening",
      "bg": "#FAEEDA",
      "image_note": "A house with warm lit windows under a dusky purple sky."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first in your day?",
    "What do you do last?"
  ],
  "student": [
    "First, I wake up.",
    "Finally, I go to bed."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "mixed",
  "tag": "Unit Review",
  "title": "Mix It Up!",
  "subtitle": "Try one of each.",
  "parts": [
    {
      "mode": "choice",
      "instruction": "What do you do FIRST?",
      "options": [
        {
          "text": "Wake up",
          "emoji": "🌅"
        },
        {
          "text": "Go to bed",
          "emoji": "🛏️"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "match",
      "instruction": "Match each part of the day.",
      "pairs": [
        {
          "emoji": "🌅",
          "word": "Morning"
        },
        {
          "emoji": "🏫",
          "word": "School"
        },
        {
          "emoji": "☀️",
          "word": "Afternoon"
        },
        {
          "emoji": "🌙",
          "word": "Evening"
        }
      ]
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "In the [morning], I wake up and eat breakfast."
        },
        {
          "speaker": "B",
          "text": "I go to [school] and eat lunch."
        },
        {
          "speaker": "A",
          "text": "In the [evening], I go to bed."
        }
      ],
      "blanks": [
        "morning",
        "school",
        "evening"
      ]
    },
    {
      "mode": "order",
      "instruction": "Put your whole day in order!",
      "items": [
        {
          "text": "Wake up",
          "emoji": "⏰"
        },
        {
          "text": "Go to school",
          "emoji": "🎒"
        },
        {
          "text": "Eat lunch",
          "emoji": "🍱"
        },
        {
          "text": "Go to bed",
          "emoji": "🛏️"
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "In the morning, I wake up and eat breakfast."
    },
    {
      "speaker": "B",
      "text": "I go to school and eat lunch. Then I play."
    },
    {
      "speaker": "A",
      "text": "In the evening, I eat dinner and go to bed."
    },
    {
      "speaker": "B",
      "text": "Tell me your whole day!"
    }
  ],
  "note": "Mixed review: put your whole day in order, from morning to night!"
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My day. I wake up. I go to school. I eat lunch. I do homework. I eat dinner. I go to bed.",
  "questions": [
    "What does the child do first?",
    "What happens at school?",
    "What is the last thing at night?"
  ]
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "In the morning, I ___.",
    "At school, I ___.",
    "At night, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Sequence my whole day",
    "Name morning, school, afternoon, evening actions",
    "Tell my day in order"
  ],
  "challenge": "Tell me your whole day, from wake-up to bedtime!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 3: My Family (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Family Vocabulary
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  'Family Vocabulary',
  'A1',
  'kids',
  3,
  1,
  'Name immediate family members. [Foundation, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Family Vocabulary' -- A bright classroom scene, colorful numbers and shapes on the wall, children counting together."
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Who is in your family?",
    "Do you have a sister or brother?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mom",
      "bg": "#FAECE7",
      "image_note": "A warm, smiling mother figure, simple and friendly illustration style."
    },
    {
      "word": "Dad",
      "bg": "#E1F5EE",
      "image_note": "A warm, smiling father figure, simple and friendly illustration style."
    },
    {
      "word": "Sister",
      "bg": "#EEEDFE",
      "image_note": "A young girl smiling, simple and friendly illustration style."
    },
    {
      "word": "Brother",
      "bg": "#FAEEDA",
      "image_note": "A young boy smiling, simple and friendly illustration style."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your mom?"
  ],
  "student": [
    "This is my mom.",
    "Yes, this is my dad!"
  ],
  "note": "Point to a family photo!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Activity",
  "title": "Match the Family",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "👩",
      "word": "Mom"
    },
    {
      "emoji": "👨",
      "word": "Dad"
    },
    {
      "emoji": "👧",
      "word": "Sister"
    },
    {
      "emoji": "👦",
      "word": "Brother"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my mom."
    },
    {
      "speaker": "B",
      "text": "This is my dad."
    },
    {
      "speaker": "A",
      "text": "I have one sister."
    },
    {
      "speaker": "B",
      "text": "I have one brother!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my mom. This is my dad. I have one sister.",
  "questions": [
    "Who is this?",
    "Who is that?",
    "Does the writer have a sister?"
  ]
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my mom.",
    "This is my dad.",
    "I have one ___."
  ]
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 family members",
    "Say 'This is my ___'",
    "Point to my family"
  ],
  "challenge": "Point to a family photo and name everyone!"
}$json$::jsonb,
  true
);

-- Lesson 2: This Is My...
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  'This Is My...',
  'A1',
  'kids',
  3,
  2,
  'Introduce family with ''This is my ___''. [Foundation, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'This Is My...' -- A bright classroom scene, colorful numbers and shapes on the wall, children counting together."
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👵",
  "questions": [
    "Do you have a grandma?",
    "Do you have a baby brother or sister?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Grandma",
      "bg": "#FAECE7",
      "image_note": "A warm, smiling grandmother figure with glasses, gentle and cozy."
    },
    {
      "word": "Grandpa",
      "bg": "#E1F5EE",
      "image_note": "A warm, smiling grandfather figure, gentle and cozy."
    },
    {
      "word": "Baby",
      "bg": "#EEEDFE",
      "image_note": "A cute smiling baby, simple rounded illustration style."
    },
    {
      "word": "Family",
      "bg": "#FAEEDA",
      "image_note": "A family of four holding hands together, warm and happy."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your grandma?"
  ],
  "student": [
    "This is my grandma.",
    "Yes, this is my grandpa!"
  ],
  "note": "Use a real family photo if you have one!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "order",
  "tag": "Activity",
  "title": "Introduce Your Family",
  "subtitle": "Put the steps in order.",
  "instruction": "Put the introduction in order!",
  "items": [
    {
      "text": "Show a photo",
      "emoji": "📷"
    },
    {
      "text": "This is my grandma",
      "emoji": "👵"
    },
    {
      "text": "This is my grandpa",
      "emoji": "👴"
    },
    {
      "text": "This is my baby sister",
      "emoji": "👶"
    }
  ]
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my grandma."
    },
    {
      "speaker": "B",
      "text": "This is my grandpa."
    },
    {
      "speaker": "A",
      "text": "This is my baby sister."
    },
    {
      "speaker": "B",
      "text": "This is my whole family!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my grandma. This is my grandpa. This is my baby sister.",
  "questions": [
    "Who is the writer's grandma?",
    "Who is the grandpa?",
    "Who is the baby?"
  ]
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my grandma.",
    "This is my grandpa.",
    "This is my baby ___."
  ]
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'This is my ___'",
    "Name grandma and grandpa",
    "Talk about a baby in the family"
  ],
  "challenge": "Point to a family photo and say three sentences!"
}$json$::jsonb,
  true
);

-- Lesson 3: Big or Small Family?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b83e96e8-49bb-46db-a7fe-3d64b7e8f3fe',
  'Big or Small Family?',
  'A1',
  'kids',
  3,
  3,
  'Describe family size. [Foundation, Lesson 3: freer practice, TPR game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b83e96e8-49bb-46db-a7fe-3d64b7e8f3fe',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Big or Small Family?' -- A bright classroom scene, colorful numbers and shapes on the wall, children counting together."
}$json$::jsonb,
  true
),
(
  'b83e96e8-49bb-46db-a7fe-3d64b7e8f3fe',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📏",
  "questions": [
    "Is your family big or small?",
    "How many people are in your family?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'b83e96e8-49bb-46db-a7fe-3d64b7e8f3fe',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Big",
      "bg": "#FAECE7",
      "image_note": "A large object next to a small one, clearly showing the size difference."
    },
    {
      "word": "Small",
      "bg": "#E1F5EE",
      "image_note": "A small object next to a large one, clearly showing the size difference."
    },
    {
      "word": "Many",
      "bg": "#EEEDFE",
      "image_note": "A group of several family members standing together, cheerful."
    },
    {
      "word": "Family",
      "bg": "#FAEEDA",
      "image_note": "A family of four holding hands together, warm and happy."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b83e96e8-49bb-46db-a7fe-3d64b7e8f3fe',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your family big or small?",
    "How many people?"
  ],
  "student": [
    "My family is big.",
    "My family is small."
  ],
  "note": "Show big and small with your hands, then say it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b83e96e8-49bb-46db-a7fe-3d64b7e8f3fe',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which family is BIG?",
  "options": [
    {
      "text": "Big Family",
      "emoji": "👨‍👩‍👧‍👦👵👴"
    },
    {
      "text": "Small Family",
      "emoji": "👩‍👦"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  'b83e96e8-49bb-46db-a7fe-3d64b7e8f3fe',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your family big or small?"
    },
    {
      "speaker": "B",
      "text": "My family is big!"
    },
    {
      "speaker": "A",
      "text": "How many people?"
    },
    {
      "speaker": "B",
      "text": "Six people!"
    }
  ],
  "note": "Show 'big' with big arms and 'small' with small hands. Then say the word!"
}$json$::jsonb,
  true
),
(
  'b83e96e8-49bb-46db-a7fe-3d64b7e8f3fe',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My family is big. I have a mom, a dad, and two sisters. Six people!",
  "questions": [
    "Is the family big or small?",
    "How many people?",
    "Who is in the family?"
  ]
}$json$::jsonb,
  true
),
(
  'b83e96e8-49bb-46db-a7fe-3d64b7e8f3fe',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My family is ___.",
    "I have ___ people.",
    "My family is big/small."
  ]
}$json$::jsonb,
  true
),
(
  'b83e96e8-49bb-46db-a7fe-3d64b7e8f3fe',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'big' and 'small'",
    "Count my family members",
    "Show big and small with my hands"
  ],
  "challenge": "Show me if your family is big or small with your hands!"
}$json$::jsonb,
  true
);

-- Lesson 4: I Love My Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '44bae7e2-1050-469a-8240-de513bc6ec88',
  'I Love My Family',
  'A1',
  'kids',
  3,
  4,
  'Show and tell about family. [Foundation, Lesson 4: production, show-and-tell]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '44bae7e2-1050-469a-8240-de513bc6ec88',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'I Love My Family' -- A bright classroom scene, colorful numbers and shapes on the wall, children counting together."
}$json$::jsonb,
  true
),
(
  '44bae7e2-1050-469a-8240-de513bc6ec88',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❤️",
  "questions": [
    "What do you like to do with your family?",
    "Do you hug your family?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '44bae7e2-1050-469a-8240-de513bc6ec88',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Play",
      "bg": "#FAECE7",
      "image_note": "A child playing happily with toys on the floor."
    },
    {
      "word": "Hug",
      "bg": "#E1F5EE",
      "image_note": "Two family members hugging warmly, arms wrapped around each other."
    },
    {
      "word": "Love",
      "bg": "#EEEDFE",
      "image_note": "A simple heart shape, or a family member giving a warm hug."
    },
    {
      "word": "Together",
      "bg": "#FAEEDA",
      "image_note": "A family doing an activity together, like playing a board game."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '44bae7e2-1050-469a-8240-de513bc6ec88',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you like to do with your family?",
    "Do you play with your family?"
  ],
  "student": [
    "I like to play with my mom.",
    "Yes, I play with my brother!"
  ],
  "note": "Think of one fun thing you do with your family!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '44bae7e2-1050-469a-8240-de513bc6ec88',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Activity",
  "title": "Family or School?",
  "subtitle": "Drag each word to the right group.",
  "instruction": "Drag each word to the right group!",
  "buckets": [
    {
      "label": "Family",
      "emoji": "❤️"
    },
    {
      "label": "School",
      "emoji": "🏫"
    }
  ],
  "items": [
    {
      "text": "Hug",
      "emoji": "🤗",
      "bucket": 0
    },
    {
      "text": "Homework",
      "emoji": "📚",
      "bucket": 1
    },
    {
      "text": "Bus",
      "emoji": "🚌",
      "bucket": 1
    },
    {
      "text": "Love",
      "emoji": "💕",
      "bucket": 0
    }
  ]
}$json$::jsonb,
  true
),
(
  '44bae7e2-1050-469a-8240-de513bc6ec88',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my family. This is my mom and dad."
    },
    {
      "speaker": "B",
      "text": "This is my sister. My family is big."
    },
    {
      "speaker": "A",
      "text": "I play with my family. I love my family!"
    },
    {
      "speaker": "B",
      "text": "I love my family too!"
    }
  ],
  "note": "Show-and-tell: point to your family photo and tell me all about them!"
}$json$::jsonb,
  true
),
(
  '44bae7e2-1050-469a-8240-de513bc6ec88',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I love my family! I play with my dad. I hug my mom. My family is big.",
  "questions": [
    "Who does the writer play with?",
    "Who does the writer hug?",
    "Is the family big or small?"
  ]
}$json$::jsonb,
  true
),
(
  '44bae7e2-1050-469a-8240-de513bc6ec88',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I love my family.",
    "I play with ___.",
    "My family is ___."
  ]
}$json$::jsonb,
  true
),
(
  '44bae7e2-1050-469a-8240-de513bc6ec88',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I love my family'",
    "Talk about family activities",
    "Show-and-tell my family"
  ],
  "challenge": "Tell me all about your family, and show me a photo if you have one!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  'Unit Review',
  'A1',
  'kids',
  3,
  5,
  'Review family vocabulary. [Foundation, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A bright classroom scene, colorful numbers and shapes on the wall, children counting together."
}$json$::jsonb,
  true
),
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Who is in your family?",
    "Is your family big or small?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mom",
      "bg": "#FAECE7",
      "image_note": "A warm, smiling mother figure, simple and friendly illustration style."
    },
    {
      "word": "Dad",
      "bg": "#E1F5EE",
      "image_note": "A warm, smiling father figure, simple and friendly illustration style."
    },
    {
      "word": "Grandma",
      "bg": "#EEEDFE",
      "image_note": "A warm, smiling grandmother figure with glasses, gentle and cozy."
    },
    {
      "word": "Grandpa",
      "bg": "#FAEEDA",
      "image_note": "A warm, smiling grandfather figure, gentle and cozy."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is your family big or small?"
  ],
  "student": [
    "This is my mom.",
    "My family is big!"
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "mixed",
  "tag": "Unit Review",
  "title": "Mix It Up!",
  "subtitle": "Try one of each.",
  "parts": [
    {
      "mode": "match",
      "instruction": "Match each family member.",
      "pairs": [
        {
          "emoji": "👩",
          "word": "Mom"
        },
        {
          "emoji": "👨",
          "word": "Dad"
        },
        {
          "emoji": "👵",
          "word": "Grandma"
        },
        {
          "emoji": "👴",
          "word": "Grandpa"
        }
      ]
    },
    {
      "mode": "order",
      "instruction": "Put the introduction in order!",
      "items": [
        {
          "text": "Say hello",
          "emoji": "👋"
        },
        {
          "text": "Show a photo",
          "emoji": "📷"
        },
        {
          "text": "Name each person",
          "emoji": "🗣️"
        },
        {
          "text": "Say I love my family",
          "emoji": "❤️"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one is a grandparent?",
      "options": [
        {
          "text": "Grandma",
          "emoji": "👵"
        },
        {
          "text": "Sister",
          "emoji": "👧"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "sort",
      "instruction": "Drag each word to the right group!",
      "buckets": [
        {
          "label": "Family",
          "emoji": "❤️"
        },
        {
          "label": "School",
          "emoji": "🏫"
        }
      ],
      "items": [
        {
          "text": "Hug",
          "emoji": "🤗",
          "bucket": 0
        },
        {
          "text": "Bus",
          "emoji": "🚌",
          "bucket": 1
        },
        {
          "text": "Love",
          "emoji": "💕",
          "bucket": 0
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my family."
    },
    {
      "speaker": "B",
      "text": "Is your family big or small?"
    },
    {
      "speaker": "A",
      "text": "My family is big! I have two sisters."
    },
    {
      "speaker": "B",
      "text": "I love my family."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My family is big. I have a mom, a dad, a sister, and a brother. I love my family!",
  "questions": [
    "Is the family big or small?",
    "Who is in the family?",
    "Does the writer love the family?"
  ]
}$json$::jsonb,
  true
),
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My family has ___ people.",
    "This is my ___.",
    "I love my family."
  ]
}$json$::jsonb,
  true
),
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name my family members",
    "Say 'This is my ___'",
    "Describe my family size"
  ],
  "challenge": "Tell me all about your family right now!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 4: Colors and Numbers (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Colors
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  'Colors',
  'A1',
  'kids',
  4,
  1,
  'Name basic colors. [Foundation, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Colors' -- A tidy, colorful classroom corner showing school supplies -- desks, books, pencils, backpacks."
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌈",
  "questions": [
    "What is your favorite color?",
    "Do you see red?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Red",
      "bg": "#FAECE7",
      "image_note": "A simple red shape (e.g. a red apple or red ball), bold solid color."
    },
    {
      "word": "Blue",
      "bg": "#E1F5EE",
      "image_note": "A simple blue shape (e.g. a blue ball or blue sky), bold solid color."
    },
    {
      "word": "Yellow",
      "bg": "#EEEDFE",
      "image_note": "A simple yellow shape (e.g. a yellow sun or banana), bold solid color."
    },
    {
      "word": "Green",
      "bg": "#FAEEDA",
      "image_note": "A simple green shape (e.g. a green leaf or green apple), bold solid color."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What color is this?",
    "Do you like red?"
  ],
  "student": [
    "This is red.",
    "Yes, I like red!"
  ],
  "note": "Point to something red, blue, yellow, or green!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is [red]."
    },
    {
      "speaker": "B",
      "text": "This is [blue]."
    },
    {
      "speaker": "A",
      "text": "This is [yellow]."
    }
  ],
  "blanks": [
    "red",
    "blue",
    "yellow"
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is red."
    },
    {
      "speaker": "B",
      "text": "This is blue."
    },
    {
      "speaker": "A",
      "text": "This is yellow."
    },
    {
      "speaker": "B",
      "text": "This is green!"
    }
  ],
  "note": "Teacher says the color first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is red. This is blue. This is yellow. This is green.",
  "questions": [
    "What color is first?",
    "What color is next?",
    "Name all four colors."
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is ___.",
    "My favorite color is ___.",
    "I see ___."
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 colors",
    "Say 'This is ___'",
    "Point to a color"
  ],
  "challenge": "Point to something and say its color!"
}$json$::jsonb,
  true
);

-- Lesson 2: Numbers
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  'Numbers',
  'A1',
  'kids',
  4,
  2,
  'Count 1-10. [Foundation, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Numbers' -- A tidy, colorful classroom corner showing school supplies -- desks, books, pencils, backpacks."
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔢",
  "questions": [
    "Can you count to four?",
    "How many fingers do you have?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "One",
      "bg": "#FAECE7",
      "image_note": "A single large numeral '1' with one matching object beside it (e.g. one apple)."
    },
    {
      "word": "Two",
      "bg": "#E1F5EE",
      "image_note": "A large numeral '2' with two matching objects beside it."
    },
    {
      "word": "Three",
      "bg": "#EEEDFE",
      "image_note": "A large numeral '3' with three matching objects beside it."
    },
    {
      "word": "Four",
      "bg": "#FAEEDA",
      "image_note": "A large numeral '4' with four matching objects beside it."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How many is this?",
    "Can you count?"
  ],
  "student": [
    "This is one.",
    "One, two, three, four!"
  ],
  "note": "Count on your fingers!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is [one]."
    },
    {
      "speaker": "B",
      "text": "This is [two]."
    },
    {
      "speaker": "A",
      "text": "This is [three]."
    }
  ],
  "blanks": [
    "one",
    "two",
    "three"
  ]
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "One."
    },
    {
      "speaker": "B",
      "text": "Two."
    },
    {
      "speaker": "A",
      "text": "Three."
    },
    {
      "speaker": "B",
      "text": "Four!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "One, two, three, four. I can count to four!",
  "questions": [
    "What number is first?",
    "What number is last?",
    "Can the writer count to four?"
  ]
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "One, two, ___.",
    "I can count to ___.",
    "This is number ___."
  ]
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Count 1 to 4",
    "Say numbers out loud",
    "Count my fingers"
  ],
  "challenge": "Count to four with me!"
}$json$::jsonb,
  true
);

-- Lesson 3: Count and Match
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  'Count and Match',
  'A1',
  'kids',
  4,
  3,
  'Match numbers to colors and objects. [Foundation, Lesson 3: freer practice, TPR game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Count and Match' -- A tidy, colorful classroom corner showing school supplies -- desks, books, pencils, backpacks."
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🖐️",
  "questions": [
    "How many red things do you see?",
    "Can you count to five?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Five",
      "bg": "#FAECE7",
      "image_note": "A large numeral '5' with five matching objects beside it."
    },
    {
      "word": "How many",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Match",
      "bg": "#EEEDFE",
      "image_note": "Two identical simple shapes or numbers connected by a line, puzzle-piece feel."
    },
    {
      "word": "Count",
      "bg": "#FAEEDA",
      "image_note": "A row of simple objects (like blocks or stars) lined up to be counted."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How many red things?",
    "Can you count them?"
  ],
  "student": [
    "I see five red things.",
    "One, two, three, four, five!"
  ],
  "note": "Point and count out loud!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[How many] red things?"
    },
    {
      "speaker": "B",
      "text": "I [count] them: one, two, three."
    },
    {
      "speaker": "A",
      "text": "[Five] blue things!"
    }
  ],
  "blanks": [
    "how many",
    "count",
    "five"
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How many red things do you see?"
    },
    {
      "speaker": "B",
      "text": "One, two, three! Three red things."
    },
    {
      "speaker": "A",
      "text": "How many blue things?"
    },
    {
      "speaker": "B",
      "text": "Five blue things! Your turn to count!"
    }
  ],
  "note": "Point around the room and count things by color together!"
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I see three red things. I see five blue things. I like to count and match colors.",
  "questions": [
    "How many red things?",
    "How many blue things?",
    "What does the writer like to do?"
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I see ___ red things.",
    "I see ___ blue things.",
    "I like to count and ___."
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Count to five",
    "Match numbers to colors",
    "Ask 'How many?'"
  ],
  "challenge": "Count five things of your favorite color!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Favorite Number
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  'My Favorite Number',
  'A1',
  'kids',
  4,
  4,
  'Show and tell a favorite number and color. [Foundation, Lesson 4: production, show-and-tell]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Favorite Number' -- A tidy, colorful classroom corner showing school supplies -- desks, books, pencils, backpacks."
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⭐",
  "questions": [
    "What is your favorite number?",
    "What is your favorite color?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Favorite",
      "bg": "#FAECE7",
      "image_note": "A single object with a small star or heart on it, marking it as special."
    },
    {
      "word": "Because",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Like",
      "bg": "#EEEDFE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Like' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Number",
      "bg": "#FAEEDA",
      "image_note": "A friendly numeral character, simple and colorful."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite number?",
    "What is your favorite color?"
  ],
  "student": [
    "My favorite number is three.",
    "My favorite color is blue."
  ],
  "note": "Think of your favorite number and color!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [favorite] number is three."
    },
    {
      "speaker": "B",
      "text": "I [like] the color blue."
    },
    {
      "speaker": "A",
      "text": "My favorite [number] is five!"
    }
  ],
  "blanks": [
    "favorite",
    "like",
    "number"
  ]
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite number is three. My favorite color is blue."
    },
    {
      "speaker": "B",
      "text": "My favorite number is five. My favorite color is red."
    },
    {
      "speaker": "A",
      "text": "I like blue and three together!"
    },
    {
      "speaker": "B",
      "text": "I like red and five!"
    }
  ],
  "note": "Show-and-tell: draw your favorite number and color, then tell me about it!"
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite number is three. My favorite color is blue. I like blue and three!",
  "questions": [
    "What is the favorite number?",
    "What is the favorite color?",
    "Does the writer like them together?"
  ]
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite number is ___.",
    "My favorite color is ___.",
    "I like ___."
  ]
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my favorite number",
    "Say my favorite color",
    "Show-and-tell my favorites"
  ],
  "challenge": "Tell me your favorite number and color!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  'Unit Review',
  'A1',
  'kids',
  4,
  5,
  'Review colors and numbers. [Foundation, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A tidy, colorful classroom corner showing school supplies -- desks, books, pencils, backpacks."
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌈",
  "questions": [
    "What color do you see?",
    "Can you count to four?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Red",
      "bg": "#FAECE7",
      "image_note": "A simple red shape (e.g. a red apple or red ball), bold solid color."
    },
    {
      "word": "Blue",
      "bg": "#E1F5EE",
      "image_note": "A simple blue shape (e.g. a blue ball or blue sky), bold solid color."
    },
    {
      "word": "One",
      "bg": "#EEEDFE",
      "image_note": "A single large numeral '1' with one matching object beside it (e.g. one apple)."
    },
    {
      "word": "Two",
      "bg": "#FAEEDA",
      "image_note": "A large numeral '2' with two matching objects beside it."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What color is this?",
    "How many is this?"
  ],
  "student": [
    "This is red.",
    "This is two."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is [red]."
    },
    {
      "speaker": "B",
      "text": "This is number [one]."
    },
    {
      "speaker": "A",
      "text": "I [like] blue and three."
    }
  ],
  "blanks": [
    "red",
    "one",
    "like"
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is red. This is number one."
    },
    {
      "speaker": "B",
      "text": "This is blue. This is number two."
    },
    {
      "speaker": "A",
      "text": "I like blue and three together!"
    },
    {
      "speaker": "B",
      "text": "I like red and one!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is red. This is number one. My favorite color is blue. My favorite number is three.",
  "questions": [
    "What color is shown first?",
    "What is the favorite color?",
    "What is the favorite number?"
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is ___.",
    "My favorite color is ___.",
    "My favorite number is ___."
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name colors",
    "Count 1 to 5",
    "Say my favorite color and number"
  ],
  "challenge": "Tell me your favorite color and number!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 5: Classroom Things (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Classroom Objects
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  'Classroom Objects',
  'A1',
  'kids',
  5,
  1,
  'Name classroom objects. [Combination, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Classroom Objects' -- A friendly farm or park scene with a few simple, recognizable animals (dog, cat, bird) together."
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✏️",
  "questions": [
    "Do you have a pencil?",
    "What is in your bag?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Pencil",
      "bg": "#FAECE7",
      "image_note": "A single yellow pencil, simple and bold."
    },
    {
      "word": "Book",
      "bg": "#E1F5EE",
      "image_note": "A single colorful storybook, closed, simple illustration."
    },
    {
      "word": "Bag",
      "bg": "#EEEDFE",
      "image_note": "A colorful school backpack, simple and bold."
    },
    {
      "word": "Desk",
      "bg": "#FAEEDA",
      "image_note": "A simple child's school desk with a chair."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Do you have a pencil?"
  ],
  "student": [
    "This is a pencil.",
    "Yes, I have a pencil."
  ],
  "note": "Point to something in your classroom or bag!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a [pencil]."
    },
    {
      "speaker": "B",
      "text": "This is a [book]."
    },
    {
      "speaker": "A",
      "text": "This is my [bag]."
    }
  ],
  "blanks": [
    "pencil",
    "book",
    "bag"
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a pencil."
    },
    {
      "speaker": "B",
      "text": "This is a book."
    },
    {
      "speaker": "A",
      "text": "This is my bag."
    },
    {
      "speaker": "B",
      "text": "This is my desk!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is a pencil. This is a book. This is my bag.",
  "questions": [
    "What is the first object?",
    "What is the second object?",
    "Whose bag is it?"
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is a ___.",
    "This is my ___.",
    "I have a ___."
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 classroom objects",
    "Say 'This is a ___'",
    "Point to something in my bag"
  ],
  "challenge": "Show me what's in your bag!"
}$json$::jsonb,
  true
);

-- Lesson 2: This Is My Pencil
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  'This Is My Pencil',
  'A1',
  'kids',
  5,
  2,
  'Combine possession with classroom objects. [Combination, Lesson 2: controlled practice, picture-supported frames]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'This Is My Pencil' -- A friendly farm or park scene with a few simple, recognizable animals (dog, cat, bird) together."
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📏",
  "questions": [
    "Is this your pencil?",
    "Do you have an eraser?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "My",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Your",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Eraser",
      "bg": "#EEEDFE",
      "image_note": "A single pink or white eraser, simple and bold."
    },
    {
      "word": "Ruler",
      "bg": "#FAEEDA",
      "image_note": "A single wooden or plastic ruler with visible markings."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is this your pencil?",
    "Is this your eraser?"
  ],
  "student": [
    "Yes, this is my pencil.",
    "This is my eraser."
  ],
  "note": "Use the word bank: my, your, eraser, ruler.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is [my] pencil."
    },
    {
      "speaker": "B",
      "text": "Is this [your] eraser?"
    },
    {
      "speaker": "A",
      "text": "Yes, and this is my [ruler]."
    }
  ],
  "blanks": [
    "my",
    "your",
    "ruler"
  ]
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is this your pencil?"
    },
    {
      "speaker": "B",
      "text": "Yes, this is my pencil. Is this your eraser?"
    },
    {
      "speaker": "A",
      "text": "Yes, and this is my ruler."
    },
    {
      "speaker": "B",
      "text": "Nice!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my pencil. This is my eraser. This is my ruler too.",
  "questions": [
    "Whose pencil is it?",
    "What else does the writer have?",
    "How many objects are named?"
  ]
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "This is my ___ too.",
    "I have my ___."
  ]
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'This is my ___'",
    "Ask 'Is this your ___?'",
    "Name eraser and ruler"
  ],
  "challenge": "Show me three things that are yours!"
}$json$::jsonb,
  true
);

-- Lesson 3: What's in the Classroom?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  'What''s in the Classroom?',
  'A1',
  'kids',
  5,
  3,
  'Ask and find classroom objects. [Combination, Lesson 3: freer practice, TPR find-it game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'What's in the Classroom?' -- A friendly farm or park scene with a few simple, recognizable animals (dog, cat, bird) together."
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🪑",
  "questions": [
    "Where is your chair?",
    "Where is the board?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Where is",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Chair",
      "bg": "#E1F5EE",
      "image_note": "A simple child's chair, single object, bold outline."
    },
    {
      "word": "Table",
      "bg": "#EEEDFE",
      "image_note": "A simple wooden table, single object, bold outline."
    },
    {
      "word": "Board",
      "bg": "#FAEEDA",
      "image_note": "A classroom whiteboard or chalkboard with simple marks on it."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is your chair?",
    "Where is the board?"
  ],
  "student": [
    "My chair is here.",
    "The board is there."
  ],
  "note": "Point and find things in the room!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Where is] your chair?"
    },
    {
      "speaker": "B",
      "text": "My [chair] is here."
    },
    {
      "speaker": "A",
      "text": "The [table] is there."
    }
  ],
  "blanks": [
    "where is",
    "chair",
    "table"
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where is your chair?"
    },
    {
      "speaker": "B",
      "text": "My chair is here! Where is the board?"
    },
    {
      "speaker": "A",
      "text": "The board is there. Where is the table?"
    },
    {
      "speaker": "B",
      "text": "Your turn to find something!"
    }
  ],
  "note": "Point-and-find game: ask where something is, then point to find it!"
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Where is my chair? My chair is here. Where is the board? The board is there.",
  "questions": [
    "Where is the chair?",
    "Where is the board?",
    "What game are they playing?"
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My chair is ___.",
    "The board is ___.",
    "Where is the ___?"
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Where is ___?'",
    "Say 'here' and 'there'",
    "Find classroom objects"
  ],
  "challenge": "Ask me where something is in the room!"
}$json$::jsonb,
  true
);

-- Lesson 4: In My Bag
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  'In My Bag',
  'A1',
  'kids',
  5,
  4,
  'Show and tell what''s in your bag. [Combination, Lesson 4: production, show-and-tell]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'In My Bag' -- A friendly farm or park scene with a few simple, recognizable animals (dog, cat, bird) together."
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎒",
  "questions": [
    "What do you have in your bag?",
    "Can you show me?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "And",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Have",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Show",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Bag",
      "bg": "#FAEEDA",
      "image_note": "A colorful school backpack, simple and bold."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you have in your bag?",
    "Can you show me?"
  ],
  "student": [
    "I have a pencil and a book.",
    "Yes, look!"
  ],
  "note": "Open your bag and show me what's inside!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [have] a pencil [and] a book."
    },
    {
      "speaker": "B",
      "text": "Let me [show] you my bag."
    },
    {
      "speaker": "A",
      "text": "I have an eraser too."
    }
  ],
  "blanks": [
    "have",
    "and",
    "show"
  ]
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is in your bag?"
    },
    {
      "speaker": "B",
      "text": "I have a pencil and a book. I have an eraser too."
    },
    {
      "speaker": "A",
      "text": "Show me! I have a ruler and a pencil."
    },
    {
      "speaker": "B",
      "text": "Nice bag!"
    }
  ],
  "note": "Show-and-tell: open your bag and tell me what's inside!"
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a pencil and a book in my bag. I have an eraser too. My bag is full!",
  "questions": [
    "What is in the bag?",
    "What else is in the bag?",
    "Is the bag full or empty?"
  ]
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___ and a ___.",
    "I have a ___ too.",
    "My bag is ___."
  ]
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say what's in my bag using 'and'",
    "Show-and-tell my bag",
    "Name 3+ classroom objects"
  ],
  "challenge": "Show me what's in your bag and tell me each thing!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  'Unit Review',
  'A1',
  'kids',
  5,
  5,
  'Review classroom objects and location. [Combination, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A friendly farm or park scene with a few simple, recognizable animals (dog, cat, bird) together."
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎒",
  "questions": [
    "What is in your bag?",
    "Where is your pencil?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Pencil",
      "bg": "#FAECE7",
      "image_note": "A single yellow pencil, simple and bold."
    },
    {
      "word": "My",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Where is",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Bag",
      "bg": "#FAEEDA",
      "image_note": "A colorful school backpack, simple and bold."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Where is your pencil?"
  ],
  "student": [
    "This is my pencil.",
    "My pencil is here."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [pencil]."
    },
    {
      "speaker": "B",
      "text": "[Where is] your book?"
    },
    {
      "speaker": "A",
      "text": "It is in my [bag]."
    }
  ],
  "blanks": [
    "pencil",
    "where is",
    "bag"
  ]
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my pencil and my book."
    },
    {
      "speaker": "B",
      "text": "Where is your eraser?"
    },
    {
      "speaker": "A",
      "text": "It is in my bag."
    },
    {
      "speaker": "B",
      "text": "Show me your bag!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my pencil and my book. My eraser is in my bag. I have many classroom things!",
  "questions": [
    "What things are named?",
    "Where is the eraser?",
    "Does the writer have many things?"
  ]
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "My ___ is in my bag.",
    "I have ___."
  ]
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name classroom objects",
    "Say where things are",
    "Show-and-tell my classroom things"
  ],
  "challenge": "Show me everything in your bag!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 6: Animals (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Animals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  'Animals',
  'A1',
  'kids',
  6,
  1,
  'Name common animals. [Combination, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Animals' -- A child's playroom scene with a scattered mix of simple, colorful toys -- balls, blocks, a toy car."
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐶",
  "questions": [
    "Do you have a pet?",
    "Do you like dogs?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dog",
      "bg": "#FAECE7",
      "image_note": "A friendly cartoon dog, simple rounded shape, wagging tail."
    },
    {
      "word": "Cat",
      "bg": "#E1F5EE",
      "image_note": "A friendly cartoon cat, simple rounded shape, sitting."
    },
    {
      "word": "Bird",
      "bg": "#EEEDFE",
      "image_note": "A small colorful cartoon bird, simple rounded shape."
    },
    {
      "word": "Fish",
      "bg": "#FAEEDA",
      "image_note": "A simple colorful cartoon fish, swimming."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What animal is this?",
    "Do you like dogs?"
  ],
  "student": [
    "This is a dog.",
    "Yes, I like dogs!"
  ],
  "note": "Point to an animal picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a [dog]."
    },
    {
      "speaker": "B",
      "text": "This is a [cat]."
    },
    {
      "speaker": "A",
      "text": "This is a [bird]."
    }
  ],
  "blanks": [
    "dog",
    "cat",
    "bird"
  ]
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a dog."
    },
    {
      "speaker": "B",
      "text": "This is a cat."
    },
    {
      "speaker": "A",
      "text": "This is a bird."
    },
    {
      "speaker": "B",
      "text": "This is a fish!"
    }
  ],
  "note": "Teacher says the animal first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is a dog. This is a cat. This is a bird.",
  "questions": [
    "What is the first animal?",
    "What is the second animal?",
    "Name all three animals."
  ]
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is a ___.",
    "I see a ___.",
    "My favorite animal is ___."
  ]
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 animals",
    "Say 'This is a ___'",
    "Point to an animal"
  ],
  "challenge": "Point to an animal picture and name it!"
}$json$::jsonb,
  true
);

-- Lesson 2: Farm Animals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  'Farm Animals',
  'A1',
  'kids',
  6,
  2,
  'Name farm animals and combine with ''and''. [Combination, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Farm Animals' -- A child's playroom scene with a scattered mix of simple, colorful toys -- balls, blocks, a toy car."
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐄",
  "questions": [
    "Have you seen a cow?",
    "Do you like horses?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Cow",
      "bg": "#FAECE7",
      "image_note": "A friendly cartoon cow, simple rounded shape, black and white spots."
    },
    {
      "word": "Horse",
      "bg": "#E1F5EE",
      "image_note": "A friendly cartoon horse, simple rounded shape."
    },
    {
      "word": "Sheep",
      "bg": "#EEEDFE",
      "image_note": "A friendly cartoon sheep, fluffy white wool, simple shape."
    },
    {
      "word": "And",
      "bg": "#FAEEDA",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Have you seen a cow?",
    "Do you like horses?"
  ],
  "student": [
    "Yes, I have seen a cow.",
    "Yes, I like horses."
  ],
  "note": "Use the word bank: cow, horse, sheep, and.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I see a [cow] [and] a [horse]."
    },
    {
      "speaker": "B",
      "text": "I see a [sheep] too."
    },
    {
      "speaker": "A",
      "text": "Farm animals are fun!"
    }
  ],
  "blanks": [
    "cow",
    "and",
    "sheep"
  ]
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I see a cow and a horse."
    },
    {
      "speaker": "B",
      "text": "I see a sheep too!"
    },
    {
      "speaker": "A",
      "text": "Farm animals are fun."
    },
    {
      "speaker": "B",
      "text": "I love farm animals!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I see a cow and a horse. I see a sheep too. Farm animals are fun!",
  "questions": [
    "What two animals does the writer see first?",
    "What animal does the writer see too?",
    "Are farm animals fun?"
  ]
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I see a ___ and a ___.",
    "I see a ___ too.",
    "Farm animals are ___."
  ]
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 3 farm animals",
    "Use 'and' to join two animals",
    "Say if farm animals are fun"
  ],
  "challenge": "Name two farm animals together using 'and'!"
}$json$::jsonb,
  true
);

-- Lesson 3: Pets
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  'Pets',
  'A1',
  'kids',
  6,
  3,
  'Say pet preferences with ''I like/I don''t like''. [Combination, Lesson 3: freer practice, TPR animal sounds]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Pets' -- A child's playroom scene with a scattered mix of simple, colorful toys -- balls, blocks, a toy car."
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐱",
  "questions": [
    "Do you have a pet?",
    "What pet do you like?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Pet",
      "bg": "#FAECE7",
      "image_note": "A child hugging a small pet, like a dog or cat, affectionately."
    },
    {
      "word": "I like",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "I don't like",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Cute",
      "bg": "#FAEEDA",
      "image_note": "An adorable small toy or animal with big round eyes."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like cats?",
    "What pet do you want?"
  ],
  "student": [
    "I like cats, they are cute.",
    "I want a dog."
  ],
  "note": "Make an animal sound, then say if you like it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I like] cats. They are [cute]."
    },
    {
      "speaker": "B",
      "text": "[I don't like] big dogs."
    },
    {
      "speaker": "A",
      "text": "I like small [pet]s."
    }
  ],
  "blanks": [
    "i like",
    "i don't like",
    "cute"
  ]
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you like cats?"
    },
    {
      "speaker": "B",
      "text": "I like cats, they are cute! I don't like big dogs."
    },
    {
      "speaker": "A",
      "text": "I like small pets too."
    },
    {
      "speaker": "B",
      "text": "Make a cat sound! Meow!"
    }
  ],
  "note": "Animal sound game: make the animal sound, then say if you like that pet!"
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like cats. They are cute. I don't like big dogs. I like small pets.",
  "questions": [
    "What does the writer like?",
    "What doesn't the writer like?",
    "What size pets does the writer like?"
  ]
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___. They are ___.",
    "I don't like ___.",
    "I like ___ pets."
  ]
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like' and 'I don't like'",
    "Say 'cute'",
    "Make an animal sound"
  ],
  "challenge": "Tell me a pet you like and a pet you don't like!"
}$json$::jsonb,
  true
);

-- Lesson 4: Animal Actions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  'Animal Actions',
  'A1',
  'kids',
  6,
  4,
  'Combine animals with actions. [Combination, Lesson 4: production, TPR show-and-tell]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Animal Actions' -- A child's playroom scene with a scattered mix of simple, colorful toys -- balls, blocks, a toy car."
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐦",
  "questions": [
    "Can a fish swim?",
    "Can a bird fly?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Jump",
      "bg": "#FAECE7",
      "image_note": "A child jumping in mid-air, arms and legs spread, motion lines."
    },
    {
      "word": "Run",
      "bg": "#E1F5EE",
      "image_note": "A child running happily, mid-stride, motion lines."
    },
    {
      "word": "Swim",
      "bg": "#EEEDFE",
      "image_note": "A child swimming in a pool, simple splashy water lines."
    },
    {
      "word": "Fly",
      "bg": "#FAEEDA",
      "image_note": "A bird flying through a blue sky with simple clouds."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Can a fish swim?",
    "Can a bird fly?"
  ],
  "student": [
    "Yes, a fish can swim.",
    "Yes, a bird can fly."
  ],
  "note": "Act out the animal action, then say it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "A frog can [jump]."
    },
    {
      "speaker": "B",
      "text": "A dog can [run]."
    },
    {
      "speaker": "A",
      "text": "A fish can [swim]."
    }
  ],
  "blanks": [
    "jump",
    "run",
    "swim"
  ]
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "A frog can jump. A dog can run."
    },
    {
      "speaker": "B",
      "text": "A fish can swim. A bird can fly!"
    },
    {
      "speaker": "A",
      "text": "Let's act like a frog! Jump!"
    },
    {
      "speaker": "B",
      "text": "Let's act like a bird! Fly!"
    }
  ],
  "note": "Show-and-tell with actions: act out each animal while you say what it can do!"
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "A frog can jump. A dog can run. A fish can swim. A bird can fly.",
  "questions": [
    "What can a frog do?",
    "What can a fish do?",
    "What can a bird do?"
  ]
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "A ___ can jump.",
    "A ___ can swim.",
    "A ___ can fly."
  ]
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 4 animal actions",
    "Act out an animal",
    "Say 'A ___ can ___'"
  ],
  "challenge": "Act out an animal and tell me what it can do!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  'Unit Review',
  'A1',
  'kids',
  6,
  5,
  'Review animals, pets, and actions. [Combination, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A child's playroom scene with a scattered mix of simple, colorful toys -- balls, blocks, a toy car."
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐶",
  "questions": [
    "What animal do you like?",
    "Can you act like an animal?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dog",
      "bg": "#FAECE7",
      "image_note": "A friendly cartoon dog, simple rounded shape, wagging tail."
    },
    {
      "word": "Like",
      "bg": "#E1F5EE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Like' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Cute",
      "bg": "#EEEDFE",
      "image_note": "An adorable small toy or animal with big round eyes."
    },
    {
      "word": "Jump",
      "bg": "#FAEEDA",
      "image_note": "A child jumping in mid-air, arms and legs spread, motion lines."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What animal do you like?",
    "What can it do?"
  ],
  "student": [
    "I like dogs.",
    "A dog can run."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [like] dogs. They are [cute]."
    },
    {
      "speaker": "B",
      "text": "A dog can [jump]."
    },
    {
      "speaker": "A",
      "text": "I see a [dog] and a cat."
    }
  ],
  "blanks": [
    "like",
    "cute",
    "jump"
  ]
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like dogs. They are cute and they can jump."
    },
    {
      "speaker": "B",
      "text": "I like cats. They are cute too."
    },
    {
      "speaker": "A",
      "text": "I see a dog and a cat!"
    },
    {
      "speaker": "B",
      "text": "Let's act like animals!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like dogs. They are cute. A dog can run and jump. I see a dog and a cat.",
  "questions": [
    "What animal does the writer like?",
    "What can a dog do?",
    "What two animals does the writer see?"
  ]
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___. They are ___.",
    "A ___ can ___.",
    "I see a ___ and a ___."
  ]
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name animals",
    "Say a pet preference",
    "Say what an animal can do"
  ],
  "challenge": "Tell me your favorite animal and what it can do!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 7: My Toys (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Toys
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  'Toys',
  'A1',
  'kids',
  7,
  1,
  'Name common toys. [Combination, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Toys' -- A cheerful kitchen or table scene with a spread of simple, colorful foods -- fruit, bread, milk."
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⚽",
  "questions": [
    "Do you have a ball?",
    "What toys do you have?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Ball",
      "bg": "#FAECE7",
      "image_note": "A single bouncy ball, simple bold colors, maybe mid-bounce."
    },
    {
      "word": "Doll",
      "bg": "#E1F5EE",
      "image_note": "A single simple toy doll, friendly and colorful."
    },
    {
      "word": "Car",
      "bg": "#EEEDFE",
      "image_note": "A single colorful toy car, simple rounded shape."
    },
    {
      "word": "Blocks",
      "bg": "#FAEEDA",
      "image_note": "A small stack of colorful building blocks."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What toy is this?",
    "Do you have a ball?"
  ],
  "student": [
    "This is a ball.",
    "Yes, I have a ball."
  ],
  "note": "Point to a toy picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a [ball]."
    },
    {
      "speaker": "B",
      "text": "This is a [doll]."
    },
    {
      "speaker": "A",
      "text": "This is a toy [car]."
    }
  ],
  "blanks": [
    "ball",
    "doll",
    "car"
  ]
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a ball."
    },
    {
      "speaker": "B",
      "text": "This is a doll."
    },
    {
      "speaker": "A",
      "text": "This is a toy car."
    },
    {
      "speaker": "B",
      "text": "These are my blocks!"
    }
  ],
  "note": "Teacher says the toy first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is a ball. This is a doll. This is a toy car.",
  "questions": [
    "What is the first toy?",
    "What is the second toy?",
    "Name all three toys."
  ]
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is a ___.",
    "I have a ___.",
    "My favorite toy is ___."
  ]
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 toys",
    "Say 'This is a ___'",
    "Point to a toy"
  ],
  "challenge": "Show me your favorite toy!"
}$json$::jsonb,
  true
);

-- Lesson 2: My Favorite Toy
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  'My Favorite Toy',
  'A1',
  'kids',
  7,
  2,
  'Describe a favorite toy. [Combination, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Favorite Toy' -- A cheerful kitchen or table scene with a spread of simple, colorful foods -- fruit, bread, milk."
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧸",
  "questions": [
    "What is your favorite toy?",
    "Do you play with blocks?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Favorite",
      "bg": "#FAECE7",
      "image_note": "A single object with a small star or heart on it, marking it as special."
    },
    {
      "word": "Play with",
      "bg": "#E1F5EE",
      "image_note": "A child playing happily with a toy on the floor."
    },
    {
      "word": "Fun",
      "bg": "#EEEDFE",
      "image_note": "A child laughing and playing, arms up in excitement."
    },
    {
      "word": "Toy",
      "bg": "#FAEEDA",
      "image_note": "A pile of a few simple, colorful toys (ball, blocks, car)."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite toy?",
    "Do you play with it?"
  ],
  "student": [
    "My favorite toy is a ball.",
    "Yes, I play with it every day."
  ],
  "note": "Use the word bank: favorite, play with, fun, toy.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [favorite] toy is a car."
    },
    {
      "speaker": "B",
      "text": "I [play with] my doll."
    },
    {
      "speaker": "A",
      "text": "Toys are [fun]!"
    }
  ],
  "blanks": [
    "favorite",
    "play with",
    "fun"
  ]
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite toy is a car."
    },
    {
      "speaker": "B",
      "text": "I play with my doll every day."
    },
    {
      "speaker": "A",
      "text": "Toys are fun!"
    },
    {
      "speaker": "B",
      "text": "I love my toys too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite toy is a car. I play with it every day. Toys are fun!",
  "questions": [
    "What is the favorite toy?",
    "How often does the writer play with it?",
    "Are toys fun?"
  ]
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite toy is ___.",
    "I play with it ___.",
    "Toys are ___."
  ]
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my favorite toy",
    "Say 'I play with ___'",
    "Say toys are fun"
  ],
  "challenge": "Tell me your favorite toy and how often you play with it!"
}$json$::jsonb,
  true
);

-- Lesson 3: Big and Small Toys
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  'Big and Small Toys',
  'A1',
  'kids',
  7,
  3,
  'Describe toy size. [Combination, Lesson 3: freer practice, TPR game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Big and Small Toys' -- A cheerful kitchen or table scene with a spread of simple, colorful foods -- fruit, bread, milk."
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧸",
  "questions": [
    "Is your toy big or small?",
    "Is your toy soft or hard?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Big",
      "bg": "#FAECE7",
      "image_note": "A large object next to a small one, clearly showing the size difference."
    },
    {
      "word": "Small",
      "bg": "#E1F5EE",
      "image_note": "A small object next to a large one, clearly showing the size difference."
    },
    {
      "word": "Soft",
      "bg": "#EEEDFE",
      "image_note": "A plush teddy bear or soft blanket, cozy texture implied."
    },
    {
      "word": "Hard",
      "bg": "#FAEEDA",
      "image_note": "A wooden block or toy car, solid and rigid-looking."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your toy big or small?",
    "Is it soft or hard?"
  ],
  "student": [
    "My toy is big.",
    "It is soft."
  ],
  "note": "Show big and small with your hands!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My teddy bear is [big] and [soft]."
    },
    {
      "speaker": "B",
      "text": "My car is [small] and [hard]."
    },
    {
      "speaker": "A",
      "text": "I like big toys."
    }
  ],
  "blanks": [
    "big",
    "small",
    "soft"
  ]
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your toy big or small?"
    },
    {
      "speaker": "B",
      "text": "My teddy bear is big and soft. Is your toy small?"
    },
    {
      "speaker": "A",
      "text": "Yes, my car is small and hard."
    },
    {
      "speaker": "B",
      "text": "Show me big and small with your hands!"
    }
  ],
  "note": "Show 'big' with big arms and 'small' with small hands, then describe your toy!"
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My teddy bear is big and soft. My car is small and hard. I like both toys!",
  "questions": [
    "Is the teddy bear big or small?",
    "Is the car soft or hard?",
    "Does the writer like both toys?"
  ]
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My ___ is big and ___.",
    "My ___ is small and ___.",
    "I like ___."
  ]
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'big', 'small', 'soft', 'hard'",
    "Describe a toy's size and feel",
    "Show sizes with my hands"
  ],
  "challenge": "Describe one of your toys: is it big or small, soft or hard?"
}$json$::jsonb,
  true
);

-- Lesson 4: Toy Colors
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  'Toy Colors',
  'A1',
  'kids',
  7,
  4,
  'Combine toys, size, and color into a show-and-tell. [Combination, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Toy Colors' -- A cheerful kitchen or table scene with a spread of simple, colorful foods -- fruit, bread, milk."
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What color is your favorite toy?",
    "Can you show me your toys?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Color",
      "bg": "#FAECE7",
      "image_note": "A small rainbow arc or a set of colorful crayons."
    },
    {
      "word": "Have",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "And",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Show",
      "bg": "#FAEEDA",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What color is your toy?",
    "Can you show me?"
  ],
  "student": [
    "My toy is red and big.",
    "Yes, look!"
  ],
  "note": "Put it all together: toy + color + size!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [have] a red ball."
    },
    {
      "speaker": "B",
      "text": "It is big [and] round."
    },
    {
      "speaker": "A",
      "text": "Let me [show] you!"
    }
  ],
  "blanks": [
    "have",
    "and",
    "show"
  ]
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your favorite toy."
    },
    {
      "speaker": "B",
      "text": "I have a red ball. It is big and round. I play with it every day."
    },
    {
      "speaker": "A",
      "text": "I have a small blue car. It is fun!"
    },
    {
      "speaker": "B",
      "text": "Show me your toy!"
    }
  ],
  "note": "Show-and-tell: show me a toy and tell me its color and size!"
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a red ball. It is big and round. I play with it every day. It is fun!",
  "questions": [
    "What color is the ball?",
    "Is the ball big or small?",
    "How often does the writer play with it?"
  ]
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___ ___.",
    "It is ___ and ___.",
    "I play with it ___."
  ]
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a toy's color and size",
    "Say 'I have a ___'",
    "Show-and-tell my favorite toy"
  ],
  "challenge": "Show me your favorite toy and tell me all about it!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  'Unit Review',
  'A1',
  'kids',
  7,
  5,
  'Review toys, size, and color. [Combination, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A cheerful kitchen or table scene with a spread of simple, colorful foods -- fruit, bread, milk."
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧸",
  "questions": [
    "What is your favorite toy?",
    "What color is it?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Toy",
      "bg": "#FAECE7",
      "image_note": "A pile of a few simple, colorful toys (ball, blocks, car)."
    },
    {
      "word": "Favorite",
      "bg": "#E1F5EE",
      "image_note": "A single object with a small star or heart on it, marking it as special."
    },
    {
      "word": "Big",
      "bg": "#EEEDFE",
      "image_note": "A large object next to a small one, clearly showing the size difference."
    },
    {
      "word": "Color",
      "bg": "#FAEEDA",
      "image_note": "A small rainbow arc or a set of colorful crayons."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite toy?",
    "What color is it?"
  ],
  "student": [
    "My favorite toy is a ball.",
    "It is red."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [toy] is a car."
    },
    {
      "speaker": "B",
      "text": "It is [big] and red."
    },
    {
      "speaker": "A",
      "text": "I love the [color]!"
    }
  ],
  "blanks": [
    "toy",
    "big",
    "color"
  ]
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite toy is a car. It is big and blue."
    },
    {
      "speaker": "B",
      "text": "My favorite toy is a doll. It is small and pink."
    },
    {
      "speaker": "A",
      "text": "I play with my toys every day."
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite toy is a car. It is big and blue. I play with it every day. Toys are fun!",
  "questions": [
    "What is the favorite toy?",
    "What color and size is it?",
    "How often does the writer play?"
  ]
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite toy is ___.",
    "It is ___ and ___.",
    "I play with it ___."
  ]
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name toys",
    "Describe a toy's size and color",
    "Show-and-tell my favorite toy"
  ],
  "challenge": "Tell me all about your favorite toy!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 8: Food I Like (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Food
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  'Food',
  'A1',
  'kids',
  8,
  1,
  'Name common foods. [Combination, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Food' -- A child pointing to parts of their own face and body, playful and simple, mirror or close-up framing."
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍎",
  "questions": [
    "Do you eat apples?",
    "Do you drink milk?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Apple",
      "bg": "#FAECE7",
      "image_note": "A single red apple, simple and bold, maybe with a leaf."
    },
    {
      "word": "Bread",
      "bg": "#E1F5EE",
      "image_note": "A simple loaf of bread or a slice of bread, warm brown tones."
    },
    {
      "word": "Milk",
      "bg": "#EEEDFE",
      "image_note": "A glass of milk, simple and bold, maybe with a milk carton."
    },
    {
      "word": "Rice",
      "bg": "#FAEEDA",
      "image_note": "A simple bowl of white rice, steam lines for warmth."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What food is this?",
    "Do you eat apples?"
  ],
  "student": [
    "This is an apple.",
    "Yes, I eat apples."
  ],
  "note": "Point to a food picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is an [apple]."
    },
    {
      "speaker": "B",
      "text": "This is [bread]."
    },
    {
      "speaker": "A",
      "text": "This is [milk]."
    }
  ],
  "blanks": [
    "apple",
    "bread",
    "milk"
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is an apple."
    },
    {
      "speaker": "B",
      "text": "This is bread."
    },
    {
      "speaker": "A",
      "text": "This is milk."
    },
    {
      "speaker": "B",
      "text": "This is rice!"
    }
  ],
  "note": "Teacher says the food first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is an apple. This is bread. This is milk.",
  "questions": [
    "What is the first food?",
    "What is the second food?",
    "Name all three foods."
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is ___.",
    "I eat ___.",
    "I drink ___."
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 foods",
    "Say 'This is ___'",
    "Point to a food"
  ],
  "challenge": "Point to a food and name it!"
}$json$::jsonb,
  true
);

-- Lesson 2: Fruits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  'Fruits',
  'A1',
  'kids',
  8,
  2,
  'Name fruits and combine with ''and''. [Combination, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Fruits' -- A child pointing to parts of their own face and body, playful and simple, mirror or close-up framing."
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍌",
  "questions": [
    "Do you like bananas?",
    "Do you eat grapes?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Banana",
      "bg": "#FAECE7",
      "image_note": "A single yellow banana, simple and bold, slightly curved."
    },
    {
      "word": "Orange",
      "bg": "#E1F5EE",
      "image_note": "A single orange fruit, simple and bold, round shape."
    },
    {
      "word": "Grapes",
      "bg": "#EEEDFE",
      "image_note": "A small bunch of purple or green grapes, simple and bold."
    },
    {
      "word": "And",
      "bg": "#FAEEDA",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like bananas?",
    "Do you eat oranges?"
  ],
  "student": [
    "Yes, I like bananas.",
    "Yes, I eat oranges."
  ],
  "note": "Use the word bank: banana, orange, grapes, and.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat a [banana] [and] an [orange]."
    },
    {
      "speaker": "B",
      "text": "I eat [grapes] too."
    },
    {
      "speaker": "A",
      "text": "Fruit is good for me!"
    }
  ],
  "blanks": [
    "banana",
    "and",
    "grapes"
  ]
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat a banana and an orange."
    },
    {
      "speaker": "B",
      "text": "I eat grapes too!"
    },
    {
      "speaker": "A",
      "text": "Fruit is good for me."
    },
    {
      "speaker": "B",
      "text": "I love fruit!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I eat a banana and an orange. I eat grapes too. Fruit is good for me!",
  "questions": [
    "What two fruits does the writer eat first?",
    "What fruit does the writer eat too?",
    "Is fruit good?"
  ]
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat a ___ and a/an ___.",
    "I eat ___ too.",
    "Fruit is ___ for me."
  ]
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 3 fruits",
    "Use 'and' to join two fruits",
    "Say fruit is good"
  ],
  "challenge": "Name two fruits together using 'and'!"
}$json$::jsonb,
  true
);

-- Lesson 3: I Like / I Don't Like
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  'I Like / I Don''t Like',
  'A1',
  'kids',
  8,
  3,
  'Say food likes and dislikes. [Combination, Lesson 3: freer practice, TPR thumbs up/down]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'I Like / I Don't Like' -- A child pointing to parts of their own face and body, playful and simple, mirror or close-up framing."
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🥕",
  "questions": [
    "Do you like carrots?",
    "Is pizza yummy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I like",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "I don't like",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Yummy",
      "bg": "#EEEDFE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Yummy' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Yucky",
      "bg": "#FAEEDA",
      "image_note": "A child making a scrunched-up, unhappy face at a plate of food."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like carrots?",
    "Is it yummy or yucky?"
  ],
  "student": [
    "I like carrots, they are yummy.",
    "I don't like it, it's yucky."
  ],
  "note": "Thumbs up for yummy, thumbs down for yucky!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I like] pizza. It is [yummy]."
    },
    {
      "speaker": "B",
      "text": "[I don't like] fish."
    },
    {
      "speaker": "A",
      "text": "That's [yucky] for me."
    }
  ],
  "blanks": [
    "i like",
    "i don't like",
    "yummy"
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you like pizza?"
    },
    {
      "speaker": "B",
      "text": "I like pizza, it's yummy! I don't like fish, it's yucky for me."
    },
    {
      "speaker": "A",
      "text": "I like carrots too."
    },
    {
      "speaker": "B",
      "text": "Thumbs up or thumbs down for carrots?"
    }
  ],
  "note": "Thumbs up/thumbs down game: I say a food, you show thumbs up or down and say why!"
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like pizza. It is yummy. I don't like fish. It is yucky for me.",
  "questions": [
    "What does the writer like?",
    "What doesn't the writer like?",
    "Is fish yummy or yucky for the writer?"
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___. It is yummy.",
    "I don't like ___.",
    "It is yucky for me."
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like' and 'I don't like'",
    "Say 'yummy' and 'yucky'",
    "Show thumbs up or down for a food"
  ],
  "challenge": "Tell me a food you like and a food you don't like!"
}$json$::jsonb,
  true
);

-- Lesson 4: Healthy Food
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7609619a-462c-4485-99d3-5e33724e18ad',
  'Healthy Food',
  'A1',
  'kids',
  8,
  4,
  'Combine food vocabulary into a healthy-eating talk. [Combination, Lesson 4: production, show-and-tell]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Healthy Food' -- A child pointing to parts of their own face and body, playful and simple, mirror or close-up framing."
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🥗",
  "questions": [
    "What healthy food do you eat?",
    "What do you drink every day?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Healthy",
      "bg": "#FAECE7",
      "image_note": "A colorful plate with fruits and vegetables, bright and appetizing."
    },
    {
      "word": "Good for me",
      "bg": "#E1F5EE",
      "image_note": "A child eating a fruit or vegetable happily, a small heart or star nearby."
    },
    {
      "word": "Eat",
      "bg": "#EEEDFE",
      "image_note": "A child eating happily at the table, fork or spoon in hand."
    },
    {
      "word": "Drink",
      "bg": "#FAEEDA",
      "image_note": "A child drinking from a cup, simple and cheerful."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What healthy food do you eat?",
    "What do you drink?"
  ],
  "student": [
    "I eat apples, they are healthy.",
    "I drink milk every day."
  ],
  "note": "Put it all together: food + drink + healthy opinion.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [eat] apples. They are [healthy]."
    },
    {
      "speaker": "B",
      "text": "I [drink] milk."
    },
    {
      "speaker": "A",
      "text": "It is [good for me]."
    }
  ],
  "blanks": [
    "eat",
    "healthy",
    "good for me"
  ]
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What healthy food do you eat?"
    },
    {
      "speaker": "B",
      "text": "I eat apples and bananas. They are healthy."
    },
    {
      "speaker": "A",
      "text": "I drink milk every day. It is good for me."
    },
    {
      "speaker": "B",
      "text": "I like healthy food too!"
    }
  ],
  "note": "Show-and-tell: tell me your healthy foods for today!"
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I eat apples and bananas. They are healthy. I drink milk every day. It is good for me.",
  "questions": [
    "What healthy foods does the writer eat?",
    "What does the writer drink?",
    "Is milk good for the writer?"
  ]
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat ___ and ___.",
    "They are healthy.",
    "I drink ___ every day."
  ]
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name healthy foods",
    "Say 'good for me'",
    "Talk about healthy eating"
  ],
  "challenge": "Tell me your healthy foods and drinks!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  'Unit Review',
  'A1',
  'kids',
  8,
  5,
  'Review food, fruit, and likes/dislikes. [Combination, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A child pointing to parts of their own face and body, playful and simple, mirror or close-up framing."
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍎",
  "questions": [
    "What food do you like?",
    "Is it healthy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Food",
      "bg": "#FAECE7",
      "image_note": "A simple plate with a mix of fruit, bread, and vegetables."
    },
    {
      "word": "Like",
      "bg": "#E1F5EE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Like' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Yummy",
      "bg": "#EEEDFE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Yummy' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Healthy",
      "bg": "#FAEEDA",
      "image_note": "A colorful plate with fruits and vegetables, bright and appetizing."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What food do you like?",
    "Is it healthy?"
  ],
  "student": [
    "I like apples.",
    "Yes, they are healthy."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [like] apples and bananas."
    },
    {
      "speaker": "B",
      "text": "They are [yummy] and [healthy]."
    },
    {
      "speaker": "A",
      "text": "I eat healthy [food]."
    }
  ],
  "blanks": [
    "like",
    "yummy",
    "food"
  ]
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like apples and bananas. They are yummy and healthy."
    },
    {
      "speaker": "B",
      "text": "I like carrots. I don't like fish."
    },
    {
      "speaker": "A",
      "text": "I drink milk every day."
    },
    {
      "speaker": "B",
      "text": "Healthy food is good for us!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like apples and bananas. They are yummy and healthy. I drink milk every day. Healthy food is good for me!",
  "questions": [
    "What foods does the writer like?",
    "Are they yummy or yucky?",
    "Is healthy food good?"
  ]
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___ and ___.",
    "They are ___.",
    "Healthy food is ___ for me."
  ]
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name foods",
    "Say likes and dislikes",
    "Talk about healthy food"
  ],
  "challenge": "Tell me all about your favorite foods!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 9: My Body (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Body Parts
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  'Body Parts',
  'A1',
  'kids',
  9,
  1,
  'Name body parts. [Bridge, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Body Parts' -- A split-sky scene showing different weather -- sun on one side, rain clouds on the other."
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙋",
  "questions": [
    "Can you touch your head?",
    "Where are your eyes?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Head",
      "bg": "#FAECE7",
      "image_note": "A simple cartoon child's head and face, front-facing."
    },
    {
      "word": "Hand",
      "bg": "#E1F5EE",
      "image_note": "A single open hand, simple and bold outline."
    },
    {
      "word": "Foot",
      "bg": "#EEEDFE",
      "image_note": "A single bare foot, simple and bold outline."
    },
    {
      "word": "Eyes",
      "bg": "#FAEEDA",
      "image_note": "A pair of large friendly cartoon eyes, simple and bold."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Can you touch your head?"
  ],
  "student": [
    "This is my head.",
    "Yes, I can touch my head!"
  ],
  "note": "Point to a body part!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [head]."
    },
    {
      "speaker": "B",
      "text": "This is my [hand]."
    },
    {
      "speaker": "A",
      "text": "This is my [foot]."
    }
  ],
  "blanks": [
    "head",
    "hand",
    "foot"
  ]
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my head."
    },
    {
      "speaker": "B",
      "text": "This is my hand."
    },
    {
      "speaker": "A",
      "text": "This is my foot."
    },
    {
      "speaker": "B",
      "text": "These are my eyes!"
    }
  ],
  "note": "Teacher says the body part first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my head. This is my hand. This is my foot.",
  "questions": [
    "What is the first body part?",
    "What is the second body part?",
    "Name all three body parts."
  ]
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "These are my ___.",
    "I have two ___."
  ]
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 body parts",
    "Say 'This is my ___'",
    "Point to a body part"
  ],
  "challenge": "Point to your head, hand, and foot!"
}$json$::jsonb,
  true
);

-- Lesson 2: Touch Your…
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  'Touch Your…',
  'A1',
  'kids',
  9,
  2,
  'Follow simple TPR commands. [Bridge, Lesson 2: controlled practice, TPR]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Touch Your…' -- A split-sky scene showing different weather -- sun on one side, rain clouds on the other."
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👃",
  "questions": [
    "Can you touch your nose?",
    "Where is your ear?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Touch",
      "bg": "#FAECE7",
      "image_note": "A child's hand reaching out to touch an object, gentle gesture."
    },
    {
      "word": "Nose",
      "bg": "#E1F5EE",
      "image_note": "A single simple cartoon nose, bold outline."
    },
    {
      "word": "Ear",
      "bg": "#EEEDFE",
      "image_note": "A single simple cartoon ear, bold outline."
    },
    {
      "word": "Knee",
      "bg": "#FAEEDA",
      "image_note": "A child pointing to their bent knee, simple illustration."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Touch your nose!",
    "Touch your ear!"
  ],
  "student": [
    "I touch my nose.",
    "I touch my ear."
  ],
  "note": "Use the word bank: touch, nose, ear, knee.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Touch] your [nose]."
    },
    {
      "speaker": "B",
      "text": "Touch your [ear]."
    },
    {
      "speaker": "A",
      "text": "Touch your knee!"
    }
  ],
  "blanks": [
    "touch",
    "nose",
    "ear"
  ]
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Touch your nose!"
    },
    {
      "speaker": "B",
      "text": "I touch my nose. Touch your ear!"
    },
    {
      "speaker": "A",
      "text": "I touch my ear. Touch your knee!"
    },
    {
      "speaker": "B",
      "text": "I touch my knee!"
    }
  ],
  "note": "TPR game: say the command, then both of you touch that body part!"
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Touch your nose. Touch your ear. Touch your knee. Good job!",
  "questions": [
    "What do you touch first?",
    "What do you touch second?",
    "What do you touch third?"
  ]
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Touch your ___.",
    "I touch my ___.",
    "Touch your ___ and ___."
  ]
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Follow 'Touch your ___' commands",
    "Say nose, ear, knee",
    "Play the touch game"
  ],
  "challenge": "Give me a 'touch your ___' command!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Face
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a85aa8c7-2132-4899-843c-075b53375ada',
  'My Face',
  'A1',
  'kids',
  9,
  3,
  'Describe the face with ''and''. [Bridge, Lesson 3: freer practice, TPR game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Face' -- A split-sky scene showing different weather -- sun on one side, rain clouds on the other."
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😊",
  "questions": [
    "Is your mouth big or small?",
    "Do you have short or long hair?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mouth",
      "bg": "#FAECE7",
      "image_note": "A single simple smiling cartoon mouth, bold outline."
    },
    {
      "word": "Hair",
      "bg": "#E1F5EE",
      "image_note": "A simple cartoon child's head with clearly visible, colorful hair."
    },
    {
      "word": "Big",
      "bg": "#EEEDFE",
      "image_note": "A large object next to a small one, clearly showing the size difference."
    },
    {
      "word": "Small",
      "bg": "#FAEEDA",
      "image_note": "A small object next to a large one, clearly showing the size difference."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your mouth big?",
    "Do you have long hair?"
  ],
  "student": [
    "My mouth is small.",
    "I have long hair."
  ],
  "note": "Point to your face and describe it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [mouth]."
    },
    {
      "speaker": "B",
      "text": "This is my [hair]."
    },
    {
      "speaker": "A",
      "text": "I have [big] eyes and a small mouth."
    }
  ],
  "blanks": [
    "mouth",
    "hair",
    "big"
  ]
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my mouth and my hair."
    },
    {
      "speaker": "B",
      "text": "I have big eyes and short hair."
    },
    {
      "speaker": "A",
      "text": "I have small eyes and long hair."
    },
    {
      "speaker": "B",
      "text": "Let's draw our faces!"
    }
  ],
  "note": "Face game: point to a face part and describe it big/small!"
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my face. I have big eyes and a small mouth. I have long hair.",
  "questions": [
    "Are the eyes big or small?",
    "Is the mouth big or small?",
    "Is the hair long or short?"
  ]
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have ___ eyes.",
    "I have a ___ mouth.",
    "I have ___ hair."
  ]
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'mouth' and 'hair'",
    "Describe eyes and mouth size",
    "Draw and describe my face"
  ],
  "challenge": "Describe your face to me: eyes, mouth, and hair!"
}$json$::jsonb,
  true
);

-- Lesson 4: Body Actions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  'Body Actions',
  'A1',
  'kids',
  9,
  4,
  'Combine body parts and actions into a show-and-tell. [Bridge, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Body Actions' -- A split-sky scene showing different weather -- sun on one side, rain clouds on the other."
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👏",
  "questions": [
    "Can you clap your hands?",
    "Can you wave?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Clap",
      "bg": "#FAECE7",
      "image_note": "A child clapping both hands together, motion lines, happy face."
    },
    {
      "word": "Wave",
      "bg": "#E1F5EE",
      "image_note": "A child waving one hand up high, cheerful expression."
    },
    {
      "word": "Wiggle",
      "bg": "#EEEDFE",
      "image_note": "A child wiggling their fingers or toes, playful motion lines."
    },
    {
      "word": "Show",
      "bg": "#FAEEDA",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Can you clap your hands?",
    "Can you wave?"
  ],
  "student": [
    "I clap my hands.",
    "I wave my hand."
  ],
  "note": "Put it all together: body part + action!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [clap] my hands."
    },
    {
      "speaker": "B",
      "text": "I [wave] my hand."
    },
    {
      "speaker": "A",
      "text": "I [wiggle] my fingers."
    }
  ],
  "blanks": [
    "clap",
    "wave",
    "wiggle"
  ]
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I clap my hands and wave."
    },
    {
      "speaker": "B",
      "text": "I wiggle my fingers and touch my nose."
    },
    {
      "speaker": "A",
      "text": "Show me what you can do!"
    },
    {
      "speaker": "B",
      "text": "I can clap, wave, and wiggle!"
    }
  ],
  "note": "Show-and-tell: show me three body actions in a row!"
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I clap my hands. I wave my hand. I wiggle my fingers. My body can do many things!",
  "questions": [
    "What does the writer clap?",
    "What does the writer wave?",
    "What can the body do?"
  ]
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I clap my ___.",
    "I wave my ___.",
    "My body can ___."
  ]
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say and do 3 body actions",
    "Combine body part + action",
    "Show-and-tell what my body can do"
  ],
  "challenge": "Show me three things your body can do!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c4f9daf6-d594-408b-8320-93779a89262a',
  'Unit Review',
  'A1',
  'kids',
  9,
  5,
  'Review body parts and actions. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A split-sky scene showing different weather -- sun on one side, rain clouds on the other."
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙋",
  "questions": [
    "Can you touch your head?",
    "Can you clap your hands?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Head",
      "bg": "#FAECE7",
      "image_note": "A simple cartoon child's head and face, front-facing."
    },
    {
      "word": "Touch",
      "bg": "#E1F5EE",
      "image_note": "A child's hand reaching out to touch an object, gentle gesture."
    },
    {
      "word": "Hair",
      "bg": "#EEEDFE",
      "image_note": "A simple cartoon child's head with clearly visible, colorful hair."
    },
    {
      "word": "Clap",
      "bg": "#FAEEDA",
      "image_note": "A child clapping both hands together, motion lines, happy face."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Touch your head!",
    "Can you clap?"
  ],
  "student": [
    "I touch my head.",
    "I clap my hands!"
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [head]."
    },
    {
      "speaker": "B",
      "text": "[Touch] your nose!"
    },
    {
      "speaker": "A",
      "text": "I [clap] my hands."
    }
  ],
  "blanks": [
    "head",
    "touch",
    "clap"
  ]
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my head. Touch your nose!"
    },
    {
      "speaker": "B",
      "text": "I touch my nose. I have long hair."
    },
    {
      "speaker": "A",
      "text": "I clap my hands and wave!"
    },
    {
      "speaker": "B",
      "text": "Let's play the touch game!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my head. I touch my nose. I have long hair. I clap my hands.",
  "questions": [
    "What body part is named first?",
    "What does the writer touch?",
    "What does the writer do with hands?"
  ]
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "I touch my ___.",
    "I clap my ___."
  ]
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name body parts",
    "Follow touch commands",
    "Show a body action"
  ],
  "challenge": "Show me your body parts and actions!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 10: Weather Today (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Weather Words
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  'Weather Words',
  'A1',
  'kids',
  10,
  1,
  'Name weather words. [Bridge, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Weather Words' -- A cutaway view of a cozy house showing a few rooms at once -- kitchen, bedroom, living room."
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "☀️",
  "questions": [
    "Is it sunny today?",
    "Do you like rainy days?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Sunny",
      "bg": "#FAECE7",
      "image_note": "A bright yellow sun with rays, clear blue sky, no clouds."
    },
    {
      "word": "Rainy",
      "bg": "#E1F5EE",
      "image_note": "Grey clouds with simple raindrops falling, maybe a puddle."
    },
    {
      "word": "Cloudy",
      "bg": "#EEEDFE",
      "image_note": "Soft grey and white clouds filling the sky, sun barely peeking through."
    },
    {
      "word": "Windy",
      "bg": "#FAEEDA",
      "image_note": "Trees bending and leaves blowing sideways, motion lines for wind."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is the weather?",
    "Is it sunny?"
  ],
  "student": [
    "It is sunny.",
    "Yes, it is sunny."
  ],
  "note": "Point to the sky or a weather picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Today is [sunny]."
    },
    {
      "speaker": "B",
      "text": "Today is [rainy]."
    },
    {
      "speaker": "A",
      "text": "Today is [cloudy]."
    }
  ],
  "blanks": [
    "sunny",
    "rainy",
    "cloudy"
  ]
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Today is sunny."
    },
    {
      "speaker": "B",
      "text": "Today is rainy."
    },
    {
      "speaker": "A",
      "text": "Today is cloudy."
    },
    {
      "speaker": "B",
      "text": "Today is windy!"
    }
  ],
  "note": "Teacher says the weather first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today is sunny. Today is rainy. Today is cloudy.",
  "questions": [
    "What is the first weather word?",
    "What is the second weather word?",
    "Name all three weather words."
  ]
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today is ___.",
    "I like ___ days.",
    "It is ___ today."
  ]
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 weather words",
    "Say 'Today is ___'",
    "Look at the sky and describe it"
  ],
  "challenge": "Tell me what the weather is like today!"
}$json$::jsonb,
  true
);

-- Lesson 2: Sunny or Rainy
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  'Sunny or Rainy',
  'A1',
  'kids',
  10,
  2,
  'Ask and answer about weather. [Bridge, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Sunny or Rainy' -- A cutaway view of a cozy house showing a few rooms at once -- kitchen, bedroom, living room."
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌦️",
  "questions": [
    "Is it hot today?",
    "Is it sunny or rainy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Is it",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Yes",
      "bg": "#E1F5EE",
      "image_note": "A simple green checkmark or a child nodding happily."
    },
    {
      "word": "No",
      "bg": "#EEEDFE",
      "image_note": "A simple red X or a child shaking their head gently."
    },
    {
      "word": "Hot",
      "bg": "#FAEEDA",
      "image_note": "A bright sun with wavy heat lines, a child fanning themselves."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is it sunny today?",
    "Is it hot?"
  ],
  "student": [
    "Yes, it is sunny.",
    "No, it is not hot."
  ],
  "note": "Use the word bank: is it, yes, no, hot.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Is it] sunny today?"
    },
    {
      "speaker": "B",
      "text": "[Yes], it is sunny."
    },
    {
      "speaker": "A",
      "text": "Is it [hot]?"
    }
  ],
  "blanks": [
    "is it",
    "yes",
    "hot"
  ]
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is it sunny today?"
    },
    {
      "speaker": "B",
      "text": "Yes, it is sunny! Is it hot?"
    },
    {
      "speaker": "A",
      "text": "No, it is not hot. It is warm."
    },
    {
      "speaker": "B",
      "text": "I like sunny days!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Is it sunny today? Yes, it is sunny. Is it hot? No, it is warm.",
  "questions": [
    "Is it sunny?",
    "Is it hot?",
    "What is it instead of hot?"
  ]
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Is it ___ today?",
    "Yes, it is ___.",
    "No, it is ___."
  ]
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Is it ___?'",
    "Answer 'Yes' and 'No'",
    "Say 'hot' and 'warm'"
  ],
  "challenge": "Ask me if it's sunny or rainy today!"
}$json$::jsonb,
  true
);

-- Lesson 3: What's the Weather Like?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  'What''s the Weather Like?',
  'A1',
  'kids',
  10,
  3,
  'Combine weather and clothes with ''and''. [Bridge, Lesson 3: freer practice, TPR]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'What's the Weather Like?' -- A cutaway view of a cozy house showing a few rooms at once -- kitchen, bedroom, living room."
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧥",
  "questions": [
    "What do you wear when it's cold?",
    "Do you use an umbrella when it rains?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Wear",
      "bg": "#FAECE7",
      "image_note": "A child putting on a jacket or coat, simple illustration."
    },
    {
      "word": "Coat",
      "bg": "#E1F5EE",
      "image_note": "A single warm winter coat, simple and bold, on a hanger."
    },
    {
      "word": "Umbrella",
      "bg": "#EEEDFE",
      "image_note": "A single open umbrella, bright color, simple and bold."
    },
    {
      "word": "And",
      "bg": "#FAEEDA",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you wear when it's cold?",
    "Do you use an umbrella?"
  ],
  "student": [
    "I wear a coat.",
    "Yes, I use an umbrella."
  ],
  "note": "Act out putting on a coat or opening an umbrella!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is cold, [and] I [wear] a [coat]."
    },
    {
      "speaker": "B",
      "text": "It is rainy, and I use an [umbrella]."
    },
    {
      "speaker": "A",
      "text": "It is sunny, and I wear a hat."
    }
  ],
  "blanks": [
    "wear",
    "coat",
    "umbrella"
  ]
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is cold, and I wear a coat."
    },
    {
      "speaker": "B",
      "text": "It is rainy, and I use an umbrella."
    },
    {
      "speaker": "A",
      "text": "It is sunny, and I wear a hat."
    },
    {
      "speaker": "B",
      "text": "Act it out with me!"
    }
  ],
  "note": "Act it out: pretend to put on a coat, open an umbrella, or wear a hat while you say the line!"
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "It is cold, and I wear a coat. It is rainy, and I use an umbrella. It is sunny, and I wear a hat.",
  "questions": [
    "What does the writer wear when it's cold?",
    "What does the writer use when it's rainy?",
    "What does the writer wear when it's sunny?"
  ]
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "It is cold, and I wear ___.",
    "It is rainy, and I use ___.",
    "It is sunny, and I wear ___."
  ]
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Combine weather and clothes with 'and'",
    "Act out weather clothes",
    "Say coat and umbrella"
  ],
  "challenge": "Act out the weather and tell me what you wear!"
}$json$::jsonb,
  true
);

-- Lesson 4: Weather Clothes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  'Weather Clothes',
  'A1',
  'kids',
  10,
  4,
  'Show and tell weather and clothing choices. [Bridge, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Weather Clothes' -- A cutaway view of a cozy house showing a few rooms at once -- kitchen, bedroom, living room."
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌤️",
  "questions": [
    "What do you need to wear today?",
    "Are you ready for the weather?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Today",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Because",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Need",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Ready",
      "bg": "#FAEEDA",
      "image_note": "A child with a backpack, standing by the door, thumbs up."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you wear today?",
    "Why do you wear that?"
  ],
  "student": [
    "I wear a jacket today.",
    "I wear it because it's cold."
  ],
  "note": "Put it all together: weather + clothes + a simple picture reason.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Today] is cold."
    },
    {
      "speaker": "B",
      "text": "I [need] a jacket."
    },
    {
      "speaker": "A",
      "text": "Now I am [ready]!"
    }
  ],
  "blanks": [
    "today",
    "need",
    "ready"
  ]
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Today is cold. I need a jacket."
    },
    {
      "speaker": "B",
      "text": "Today is sunny. I need a hat."
    },
    {
      "speaker": "A",
      "text": "Now I am ready to go outside!"
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Show-and-tell: show me what you'd wear for today's weather!"
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today is cold. I need a jacket. I put it on. Now I am ready to go outside!",
  "questions": [
    "What is the weather today?",
    "What does the writer need?",
    "Is the writer ready to go outside?"
  ]
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today is ___.",
    "I need a ___.",
    "Now I am ready to ___."
  ]
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say today's weather",
    "Say what I need to wear",
    "Show-and-tell my weather outfit"
  ],
  "challenge": "Show me what you'd wear for today's weather!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  'Unit Review',
  'A1',
  'kids',
  10,
  5,
  'Review weather and clothes. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A cutaway view of a cozy house showing a few rooms at once -- kitchen, bedroom, living room."
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌦️",
  "questions": [
    "What's the weather today?",
    "What do you wear?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Weather",
      "bg": "#FAECE7",
      "image_note": "A small scene showing sun, cloud, and rain together, split panel style."
    },
    {
      "word": "Sunny",
      "bg": "#E1F5EE",
      "image_note": "A bright yellow sun with rays, clear blue sky, no clouds."
    },
    {
      "word": "Wear",
      "bg": "#EEEDFE",
      "image_note": "A child putting on a jacket or coat, simple illustration."
    },
    {
      "word": "Ready",
      "bg": "#FAEEDA",
      "image_note": "A child with a backpack, standing by the door, thumbs up."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the weather today?",
    "What do you wear?"
  ],
  "student": [
    "It is sunny today.",
    "I wear a hat."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The [weather] is sunny."
    },
    {
      "speaker": "B",
      "text": "I [wear] a hat."
    },
    {
      "speaker": "A",
      "text": "Now I am [ready]."
    }
  ],
  "blanks": [
    "weather",
    "wear",
    "ready"
  ]
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The weather is sunny today. I wear a hat."
    },
    {
      "speaker": "B",
      "text": "The weather is cold. I wear a coat."
    },
    {
      "speaker": "A",
      "text": "Now I am ready to go outside!"
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "The weather is sunny today. I wear a hat. Now I am ready to go outside!",
  "questions": [
    "What is the weather?",
    "What does the writer wear?",
    "Is the writer ready?"
  ]
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The weather is ___.",
    "I wear a ___.",
    "Now I am ready to ___."
  ]
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe today's weather",
    "Say what I wear",
    "Show I'm ready for the weather"
  ],
  "challenge": "Tell me the weather today and what you're wearing!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 11: My House (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Rooms of the House
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '767489e9-523b-4a6a-929e-df71f887ea40',
  'Rooms of the House',
  'A1',
  'kids',
  11,
  1,
  'Name rooms of the house. [Bridge, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Rooms of the House' -- A row of a few children's faces showing different simple feelings -- happy, sad, excited."
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "Do you have a kitchen?",
    "Where is your bedroom?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Kitchen",
      "bg": "#FAECE7",
      "image_note": "A simple, colorful kitchen scene with a stove, sink, and table."
    },
    {
      "word": "Bedroom",
      "bg": "#E1F5EE",
      "image_note": "A simple, cozy bedroom scene with a bed and a window."
    },
    {
      "word": "Bathroom",
      "bg": "#EEEDFE",
      "image_note": "A simple bathroom scene with a sink, tub, and mirror."
    },
    {
      "word": "Living room",
      "bg": "#FAEEDA",
      "image_note": "A simple living room scene with a sofa, TV, and a rug."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What room is this?",
    "Where is your bedroom?"
  ],
  "student": [
    "This is the kitchen.",
    "My bedroom is here."
  ],
  "note": "Point to a room picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is the [kitchen]."
    },
    {
      "speaker": "B",
      "text": "This is my [bedroom]."
    },
    {
      "speaker": "A",
      "text": "This is the [bathroom]."
    }
  ],
  "blanks": [
    "kitchen",
    "bedroom",
    "bathroom"
  ]
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is the kitchen."
    },
    {
      "speaker": "B",
      "text": "This is my bedroom."
    },
    {
      "speaker": "A",
      "text": "This is the bathroom."
    },
    {
      "speaker": "B",
      "text": "This is the living room!"
    }
  ],
  "note": "Teacher says the room first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is the kitchen. This is my bedroom. This is the bathroom.",
  "questions": [
    "What is the first room?",
    "Whose bedroom is it?",
    "What is the third room?"
  ]
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is the ___.",
    "This is my ___.",
    "My house has a ___."
  ]
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 rooms",
    "Say 'This is the ___'",
    "Point to a room"
  ],
  "challenge": "Tell me the rooms in your house!"
}$json$::jsonb,
  true
);

-- Lesson 2: Furniture in the House
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  'Furniture in the House',
  'A1',
  'kids',
  11,
  2,
  'Combine rooms and furniture with ''there is''. [Bridge, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Furniture in the House' -- A row of a few children's faces showing different simple feelings -- happy, sad, excited."
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛋️",
  "questions": [
    "Is there a sofa in your living room?",
    "Is there a bed in your bedroom?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "There is",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Sofa",
      "bg": "#E1F5EE",
      "image_note": "A single comfy sofa with a few pillows, simple and bold."
    },
    {
      "word": "Bed",
      "bg": "#EEEDFE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Bed' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Table",
      "bg": "#FAEEDA",
      "image_note": "A simple wooden table, single object, bold outline."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is in your living room?",
    "What is in your bedroom?"
  ],
  "student": [
    "There is a sofa.",
    "There is a bed."
  ],
  "note": "Use the word bank: there is, sofa, bed, table.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[There is] a [sofa] in the living room."
    },
    {
      "speaker": "B",
      "text": "There is a [bed] in my bedroom."
    },
    {
      "speaker": "A",
      "text": "There is a table in the kitchen."
    }
  ],
  "blanks": [
    "there is",
    "sofa",
    "bed"
  ]
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is in your living room?"
    },
    {
      "speaker": "B",
      "text": "There is a sofa. What is in your bedroom?"
    },
    {
      "speaker": "A",
      "text": "There is a bed and a table."
    },
    {
      "speaker": "B",
      "text": "Nice room!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "There is a sofa in the living room. There is a bed in my bedroom. There is a table in the kitchen.",
  "questions": [
    "What is in the living room?",
    "What is in the bedroom?",
    "What is in the kitchen?"
  ]
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "There is a ___ in the ___.",
    "There is a ___ in my ___.",
    "There is a ___ too."
  ]
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'there is' with furniture",
    "Name sofa, bed, table",
    "Say what's in each room"
  ],
  "challenge": "Tell me what's in one room of your house!"
}$json$::jsonb,
  true
);

-- Lesson 3: Where Is It?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  'Where Is It?',
  'A1',
  'kids',
  11,
  3,
  'Ask and answer where things are. [Bridge, Lesson 3: freer practice, TPR find-it game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Where Is It?' -- A row of a few children's faces showing different simple feelings -- happy, sad, excited."
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📍",
  "questions": [
    "Where is your bed?",
    "What is on your table?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Where is",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "In",
      "bg": "#E1F5EE",
      "image_note": "A simple scene showing one object inside another (e.g. a toy inside a box)."
    },
    {
      "word": "On",
      "bg": "#EEEDFE",
      "image_note": "A simple scene showing one object on top of another (e.g. a cup on a table)."
    },
    {
      "word": "Under",
      "bg": "#FAEEDA",
      "image_note": "A simple scene showing one object under another (e.g. a cat under a chair)."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is the sofa?",
    "What is on the table?"
  ],
  "student": [
    "The sofa is in the living room.",
    "A book is on the table."
  ],
  "note": "Point and find things in your house!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Where is] the sofa?"
    },
    {
      "speaker": "B",
      "text": "It is [in] the living room."
    },
    {
      "speaker": "A",
      "text": "A book is [on] the table."
    }
  ],
  "blanks": [
    "where is",
    "in",
    "on"
  ]
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where is the sofa?"
    },
    {
      "speaker": "B",
      "text": "It is in the living room. Where is your bed?"
    },
    {
      "speaker": "A",
      "text": "It is in my bedroom. A toy is under my bed!"
    },
    {
      "speaker": "B",
      "text": "Your turn to find something!"
    }
  ],
  "note": "Find-it game: ask where something is, then point to find it in your house!"
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Where is the sofa? It is in the living room. Where is my bed? It is in my bedroom. A toy is under my bed.",
  "questions": [
    "Where is the sofa?",
    "Where is the bed?",
    "What is under the bed?"
  ]
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The sofa is in the ___.",
    "My bed is in my ___.",
    "A ___ is under my bed."
  ]
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Where is ___?'",
    "Use 'in', 'on', 'under'",
    "Find things in my house"
  ],
  "challenge": "Ask me where something is in your house!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Favorite Room
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  'My Favorite Room',
  'A1',
  'kids',
  11,
  4,
  'Show and tell about a favorite room. [Bridge, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Favorite Room' -- A row of a few children's faces showing different simple feelings -- happy, sad, excited."
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🖼️",
  "questions": [
    "What is your favorite room?",
    "Why do you like it?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Favorite",
      "bg": "#FAECE7",
      "image_note": "A single object with a small star or heart on it, marking it as special."
    },
    {
      "word": "Because",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Cozy",
      "bg": "#EEEDFE",
      "image_note": "A child curled up on a sofa or bed with a blanket, warm lighting."
    },
    {
      "word": "Show",
      "bg": "#FAEEDA",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite room?",
    "Why do you like it?"
  ],
  "student": [
    "My favorite room is my bedroom.",
    "It is cozy."
  ],
  "note": "Put it all together: room + furniture + a simple picture reason.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [favorite] room is my bedroom."
    },
    {
      "speaker": "B",
      "text": "It is [cozy]."
    },
    {
      "speaker": "A",
      "text": "Let me [show] you."
    }
  ],
  "blanks": [
    "favorite",
    "cozy",
    "show"
  ]
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite room is my bedroom. There is a bed and toys."
    },
    {
      "speaker": "B",
      "text": "It is cozy. My favorite room is the kitchen!"
    },
    {
      "speaker": "A",
      "text": "Show me your favorite room!"
    },
    {
      "speaker": "B",
      "text": "There is a table and yummy food."
    }
  ],
  "note": "Show-and-tell: tell me about your favorite room in your house!"
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite room is my bedroom. There is a bed and my toys. It is cozy. I love my room!",
  "questions": [
    "What is the favorite room?",
    "What is in the room?",
    "How does the writer feel about it?"
  ]
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite room is ___.",
    "There is a ___ and ___.",
    "I love my room because it is ___."
  ]
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my favorite room",
    "Say what's in it",
    "Show-and-tell my favorite room"
  ],
  "challenge": "Show me your favorite room and tell me what's in it!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  'Unit Review',
  'A1',
  'kids',
  11,
  5,
  'Review rooms, furniture, and location. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A row of a few children's faces showing different simple feelings -- happy, sad, excited."
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "What rooms are in your house?",
    "What is your favorite room?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Room",
      "bg": "#FAECE7",
      "image_note": "A simple, cozy room with basic furniture, warm colors."
    },
    {
      "word": "There is",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Favorite",
      "bg": "#EEEDFE",
      "image_note": "A single object with a small star or heart on it, marking it as special."
    },
    {
      "word": "Cozy",
      "bg": "#FAEEDA",
      "image_note": "A child curled up on a sofa or bed with a blanket, warm lighting."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What rooms are in your house?",
    "What is your favorite room?"
  ],
  "student": [
    "There is a kitchen and a bedroom.",
    "My favorite room is my bedroom."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [room]."
    },
    {
      "speaker": "B",
      "text": "[There is] a bed and a table."
    },
    {
      "speaker": "A",
      "text": "It is my [favorite] room."
    }
  ],
  "blanks": [
    "room",
    "there is",
    "favorite"
  ]
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my bedroom. There is a bed and my toys."
    },
    {
      "speaker": "B",
      "text": "This is my favorite room. It is cozy."
    },
    {
      "speaker": "A",
      "text": "Where is your favorite room?"
    },
    {
      "speaker": "B",
      "text": "It is upstairs!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my bedroom. There is a bed and my toys. It is my favorite room. It is cozy!",
  "questions": [
    "What room is this?",
    "What is in the room?",
    "Is it the favorite room?"
  ]
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "There is a ___ and ___.",
    "It is my favorite room because ___."
  ]
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name rooms and furniture",
    "Say where things are",
    "Show-and-tell my favorite room"
  ],
  "challenge": "Tell me all about your house and favorite room!"
}$json$::jsonb,
  true
);

-- A1 Kids Unit 12: My Feelings (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Feelings Vocabulary
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  'Feelings Vocabulary',
  'A1',
  'kids',
  12,
  1,
  'Name feelings. [Bridge, Lesson 1: notice/receptive, matching faces]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Feelings Vocabulary' -- A festive, celebratory classroom scene -- children showing off what they've learned, trophy or stars."
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😊",
  "questions": [
    "Are you happy today?",
    "Do you feel tired?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Happy",
      "bg": "#FAECE7",
      "image_note": "A child with a big smile, arms raised, sparkles around them."
    },
    {
      "word": "Sad",
      "bg": "#E1F5EE",
      "image_note": "A child with a downturned mouth and drooping shoulders, a small raincloud above."
    },
    {
      "word": "Angry",
      "bg": "#EEEDFE",
      "image_note": "A child with furrowed eyebrows and crossed arms, small steam lines."
    },
    {
      "word": "Tired",
      "bg": "#FAEEDA",
      "image_note": "A child yawning with heavy eyelids, maybe rubbing their eyes."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you feel?",
    "Are you happy?"
  ],
  "student": [
    "I feel happy.",
    "Yes, I am happy."
  ],
  "note": "Make a happy face, then a sad face!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I feel [happy]."
    },
    {
      "speaker": "B",
      "text": "I feel [sad]."
    },
    {
      "speaker": "A",
      "text": "I feel [tired]."
    }
  ],
  "blanks": [
    "happy",
    "sad",
    "tired"
  ]
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I feel happy."
    },
    {
      "speaker": "B",
      "text": "I feel sad."
    },
    {
      "speaker": "A",
      "text": "I feel tired."
    },
    {
      "speaker": "B",
      "text": "I feel angry!"
    }
  ],
  "note": "Teacher says the feeling and makes the face. Student copies!"
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I feel happy. I feel sad. I feel tired.",
  "questions": [
    "What is the first feeling?",
    "What is the second feeling?",
    "Name all three feelings."
  ]
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I feel ___.",
    "Today I feel ___.",
    "Sometimes I feel ___."
  ]
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 feelings",
    "Say 'I feel ___'",
    "Make a feeling face"
  ],
  "challenge": "Show me a feeling face and tell me the word!"
}$json$::jsonb,
  true
);

-- Lesson 2: I Feel...
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  'I Feel...',
  'A1',
  'kids',
  12,
  2,
  'Say how you feel with a picture reason. [Bridge, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'I Feel...' -- A festive, celebratory classroom scene -- children showing off what they've learned, trophy or stars."
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤩",
  "questions": [
    "Are you excited today?",
    "What makes you scared?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Excited",
      "bg": "#FAECE7",
      "image_note": "A child jumping with arms up, big open-mouthed smile, sparkles."
    },
    {
      "word": "Scared",
      "bg": "#E1F5EE",
      "image_note": "A child with wide eyes and hands near their face, startled expression."
    },
    {
      "word": "Because",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Today",
      "bg": "#FAEEDA",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you feel today?",
    "Are you excited?"
  ],
  "student": [
    "I feel excited today.",
    "Yes, I am excited!"
  ],
  "note": "Use the word bank: excited, scared, because, today.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Today] I feel [excited]."
    },
    {
      "speaker": "B",
      "text": "I feel a little [scared]."
    },
    {
      "speaker": "A",
      "text": "I feel happy [because] it's my birthday."
    }
  ],
  "blanks": [
    "today",
    "excited",
    "scared"
  ]
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you feel today?"
    },
    {
      "speaker": "B",
      "text": "Today I feel excited! How do you feel?"
    },
    {
      "speaker": "A",
      "text": "I feel happy because it's sunny."
    },
    {
      "speaker": "B",
      "text": "That makes me happy too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today I feel excited. I feel happy because it's sunny. Sometimes I feel a little scared too.",
  "questions": [
    "How does the writer feel today?",
    "Why is the writer happy?",
    "What feeling does the writer sometimes have?"
  ]
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today I feel ___.",
    "I feel happy because ___.",
    "Sometimes I feel ___."
  ]
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'excited' and 'scared'",
    "Say a feeling for today",
    "Give a simple reason for a feeling"
  ],
  "challenge": "Tell me how you feel today, and why!"
}$json$::jsonb,
  true
);

-- Lesson 3: Are You Happy?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'eb6ffb32-e587-4405-944e-261f803631ce',
  'Are You Happy?',
  'A1',
  'kids',
  12,
  3,
  'Ask and answer about feelings. [Bridge, Lesson 3: freer practice, TPR feeling faces game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Are You Happy?' -- A festive, celebratory classroom scene -- children showing off what they've learned, trophy or stars."
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙂",
  "questions": [
    "Are you happy right now?",
    "Are you tired?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Are you",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Yes, I am",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "No, I'm not",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Okay",
      "bg": "#FAEEDA",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are you happy?",
    "Are you tired?"
  ],
  "student": [
    "Yes, I am happy!",
    "No, I'm not tired."
  ],
  "note": "Make the face, then answer the question!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Are you] happy?"
    },
    {
      "speaker": "B",
      "text": "[Yes, I am]! Are you okay?"
    },
    {
      "speaker": "A",
      "text": "[No, I'm not] sad."
    }
  ],
  "blanks": [
    "are you",
    "yes, i am",
    "no, i'm not"
  ]
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Are you happy today?"
    },
    {
      "speaker": "B",
      "text": "Yes, I am happy! Are you okay?"
    },
    {
      "speaker": "A",
      "text": "Yes, I am okay. Are you tired?"
    },
    {
      "speaker": "B",
      "text": "No, I'm not tired! Your turn to ask me!"
    }
  ],
  "note": "Feeling faces game: make a face, ask 'Are you ___?', and answer!"
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Are you happy today? Yes, I am happy! Are you tired? No, I'm not tired. I am okay.",
  "questions": [
    "Is the person happy?",
    "Is the person tired?",
    "How does the person feel overall?"
  ]
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Are you ___?",
    "Yes, I am ___!",
    "No, I'm not ___."
  ]
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Are you ___?'",
    "Answer 'Yes, I am' or 'No, I'm not'",
    "Play the feeling faces game"
  ],
  "challenge": "Ask me how I feel, and I'll ask you!"
}$json$::jsonb,
  true
);

-- Lesson 4: What Makes You Feel...?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  'What Makes You Feel...?',
  'A1',
  'kids',
  12,
  4,
  'Combine feelings and simple reasons into a show-and-tell. [Bridge, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'What Makes You Feel...?' -- A festive, celebratory classroom scene -- children showing off what they've learned, trophy or stars."
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😄",
  "questions": [
    "What makes you happy?",
    "What makes you smile?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Makes me",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Smile",
      "bg": "#E1F5EE",
      "image_note": "A single simple smiling mouth or a child's happy face, close-up."
    },
    {
      "word": "Cry",
      "bg": "#EEEDFE",
      "image_note": "A child with a tear on their cheek, simple and gentle (not distressing)."
    },
    {
      "word": "Feeling",
      "bg": "#FAEEDA",
      "image_note": "A row of four simple faces showing happy, sad, angry, and surprised."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What makes you happy?",
    "What makes you smile?"
  ],
  "student": [
    "My family makes me happy.",
    "My dog makes me smile."
  ],
  "note": "Put it all together: feeling + reason picture.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My family [makes me] happy."
    },
    {
      "speaker": "B",
      "text": "My dog makes me [smile]."
    },
    {
      "speaker": "A",
      "text": "Sad movies make me [cry]."
    }
  ],
  "blanks": [
    "makes me",
    "smile",
    "cry"
  ]
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What makes you happy?"
    },
    {
      "speaker": "B",
      "text": "My family makes me happy. My dog makes me smile."
    },
    {
      "speaker": "A",
      "text": "My friends make me happy too. What makes you feel sad?"
    },
    {
      "speaker": "B",
      "text": "Rainy days make me feel a little sad."
    }
  ],
  "note": "Show-and-tell: tell me one thing that makes you happy and show a happy face!"
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My family makes me happy. My dog makes me smile. My friends make me happy too.",
  "questions": [
    "What makes the writer happy?",
    "What makes the writer smile?",
    "Who else makes the writer happy?"
  ]
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ makes me happy.",
    "___ makes me smile.",
    "___ makes me feel ___."
  ]
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say what makes me happy",
    "Say 'makes me smile'",
    "Show-and-tell my feelings"
  ],
  "challenge": "Tell me what makes you happy, and show me a happy face!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  'Unit Review',
  'A1',
  'kids',
  12,
  5,
  'Review feelings vocabulary and reasons. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A festive, celebratory classroom scene -- children showing off what they've learned, trophy or stars."
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😊",
  "questions": [
    "How do you feel today?",
    "What makes you happy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Feel",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Happy",
      "bg": "#E1F5EE",
      "image_note": "A child with a big smile, arms raised, sparkles around them."
    },
    {
      "word": "Are you",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Makes me",
      "bg": "#FAEEDA",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you feel today?",
    "What makes you happy?"
  ],
  "student": [
    "I feel happy today.",
    "My family makes me happy."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [feel] happy today."
    },
    {
      "speaker": "B",
      "text": "[Are you] excited too?"
    },
    {
      "speaker": "A",
      "text": "Yes! My friends [makes me] happy."
    }
  ],
  "blanks": [
    "feel",
    "are you",
    "makes me"
  ]
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I feel happy today. Are you happy too?"
    },
    {
      "speaker": "B",
      "text": "Yes, I am happy! My family makes me happy."
    },
    {
      "speaker": "A",
      "text": "My dog makes me smile."
    },
    {
      "speaker": "B",
      "text": "That's wonderful!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I feel happy today. My family makes me happy. My dog makes me smile. I feel good!",
  "questions": [
    "How does the writer feel?",
    "What makes the writer happy?",
    "What makes the writer smile?"
  ]
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I feel ___ today.",
    "___ makes me happy.",
    "___ makes me smile."
  ]
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name feelings",
    "Ask and answer 'Are you ___?'",
    "Say what makes me happy"
  ],
  "challenge": "Tell me all about how you feel today!"
}$json$::jsonb,
  true
);

