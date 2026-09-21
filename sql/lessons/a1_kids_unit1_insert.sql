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
