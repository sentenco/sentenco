-- ============================================================
-- A1 Kids: Units 1-12 combined fresh-start SQL
-- Update-in-place against live Supabase rows (60 lessons total).
-- Generated from sentenco_a1_kids_lesson_titles_units_1_to_12.md
-- Each unit below is its own begin/commit transaction block,
-- so this whole file is safe to paste and run in one go.
-- ============================================================

-- ─────────────────────────────────────────────
-- UNIT 1
-- ─────────────────────────────────────────────
-- A1 Kids Unit 1: fresh start on new topics (About Me and My World)
-- Source: sentenco_a1_kids_lesson_titles_units_1_to_12.md + sentenco_curriculum_master_for_claude.md
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase, and these topics fully replace
-- Unit 1's old lessons (Hello & My Name/My Age/My Family/My Likes/All About Me).
begin;

-- Lesson 1: My Name and Hello
update lessons set
  title = 'My Name and Hello',
  topic = 'Say hello and goodbye, and introduce your name.',
  slide_count = 9
where id = '9aa46d70-41a5-4721-a1be-4311c01c1366';

delete from lesson_slides where lesson_id = '9aa46d70-41a5-4721-a1be-4311c01c1366';

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
  "image_note": "Hero image for 'My Name and Hello' -- a diverse group of children waving hello at the start of a school day, bright and friendly, no text."
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
    "Do you see children?",
    "Are they happy?"
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
      "word": "Hello"
    },
    {
      "word": "Hi"
    },
    {
      "word": "Goodbye"
    },
    {
      "word": "My name is"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Hello! What is your name?"
  ],
  "student": [
    "Hi! My name is ___."
  ],
  "title": "Practice the Conversation",
  "image_note": "Two children meeting and waving hello outdoors, warm and friendly."
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
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
    }
  ]
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "Two children meeting at a park, one waving hello.",
  "lines": [
    {
      "speaker": "A",
      "text": "Hello! I'm Leo."
    },
    {
      "speaker": "B",
      "text": "Hi! My name is Ana."
    },
    {
      "speaker": "A",
      "text": "Nice to meet you!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  7,
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
      "text": "Goodbye!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  8,
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
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "👋",
  "headline": "You did it!",
  "goal": "You can say hello and tell me your name!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Where I Am From
update lessons set
  title = 'Where I Am From',
  topic = 'Say what country you are from and where you live.',
  slide_count = 9
where id = '094f23bd-27d9-47ea-9f87-bbce1276dc4d';

delete from lesson_slides where lesson_id = '094f23bd-27d9-47ea-9f87-bbce1276dc4d';

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
  "image_note": "Hero image for 'Where I Am From' -- a simple, colorful world map or globe with children pointing at it, bright and friendly."
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
  "display": "🌍",
  "questions": [
    "Do you see a map?",
    "Is it colorful?"
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
      "word": "From"
    },
    {
      "word": "Country"
    },
    {
      "word": "Live"
    },
    {
      "word": "I'm from"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Where are you from?"
  ],
  "student": [
    "I'm from ___."
  ],
  "title": "Practice the Conversation",
  "image_note": "A simple world map with a few countries in bright colors, no text."
}$json$::jsonb,
  true
),
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which question asks about your country?",
  "options": [
    {
      "text": "Where are you from?",
      "emoji": "🌍"
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
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "Where are you from?",
    "What country do you live in?",
    "Do you like your country?"
  ]
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
  "text": "Hi! I am Mia. I am from Spain. I live in Madrid.",
  "questions": [
    "What is the girl's name?",
    "What country is she from?",
    "What city does she live in?"
  ]
}$json$::jsonb,
  true
),
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say where I'm from",
    "Say what country I live in",
    "Ask a friend where they're from"
  ],
  "challenge": "Tell me where you are from!"
}$json$::jsonb,
  true
),
(
  '094f23bd-27d9-47ea-9f87-bbce1276dc4d',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌍",
  "headline": "You did it!",
  "goal": "You can say where you are from!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Age and Birthday
update lessons set
  title = 'My Age and Birthday',
  topic = 'Say your age and talk about your birthday.',
  slide_count = 9
where id = '8c6534e4-39c0-468e-946e-b578347a7461';

delete from lesson_slides where lesson_id = '8c6534e4-39c0-468e-946e-b578347a7461';

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
  "image_note": "Hero image for 'My Age and Birthday' -- a birthday party scene with a cake, balloons, and children celebrating."
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
  "display": "🎂",
  "questions": [
    "Do you see a cake?",
    "How many candles?"
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
      "word": "How old"
    },
    {
      "word": "Years old"
    },
    {
      "word": "Birthday"
    },
    {
      "word": "Age"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "How old are you?"
  ],
  "student": [
    "I am ___ years old."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child blowing out candles on a birthday cake."
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [seven] years old."
    },
    {
      "speaker": "B",
      "text": "My [birthday] is in May."
    },
    {
      "speaker": "A",
      "text": "How [old] are you?"
    }
  ],
  "blanks": [
    "seven",
    "birthday",
    "old"
  ]
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me your age and when your birthday is!",
  "starters": [
    "I am...",
    "My birthday is..."
  ]
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  7,
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
      "text": "I am seven years old."
    },
    {
      "speaker": "A",
      "text": "When is your birthday?"
    }
  ]
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my age",
    "Say my birthday month",
    "Ask 'How old are you?'"
  ],
  "challenge": "Tell me your age and your birthday!"
}$json$::jsonb,
  true
),
(
  '8c6534e4-39c0-468e-946e-b578347a7461',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🎂",
  "headline": "You did it!",
  "goal": "You can say your age and birthday!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Things I Like
update lessons set
  title = 'Things I Like',
  topic = 'Say what you like and don''t like.',
  slide_count = 9
where id = '7e465b8c-6e38-41ee-a345-f780dd5984dc';

delete from lesson_slides where lesson_id = '7e465b8c-6e38-41ee-a345-f780dd5984dc';

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
  "image_note": "Hero image for 'Things I Like' -- a child surrounded by a few favorite things (a toy, a pet, a food), bright and cheerful."
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
    "Do you see a toy?",
    "Do you like it?"
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
      "word": "Like"
    },
    {
      "word": "Don't like"
    },
    {
      "word": "Love"
    },
    {
      "word": "Favorite"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Do you like pizza?"
  ],
  "student": [
    "Yes, I like pizza!"
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily eating pizza or holding a favorite toy."
}$json$::jsonb,
  true
),
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Like or Don't Like?",
  "subtitle": "Drag each one to how you feel.",
  "instruction": "Drag each thing to how you feel about it!",
  "subjective": true,
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
      "text": "Broccoli",
      "emoji": "🥦",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which do you like better?",
  "options": [
    {
      "text": "Pizza",
      "emoji": "🍕"
    },
    {
      "text": "Ice Cream",
      "emoji": "🍦"
    }
  ]
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
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like ___'",
    "Say 'I don't like ___'",
    "Share my favorite thing"
  ],
  "challenge": "Tell me three things you like!"
}$json$::jsonb,
  true
),
(
  '7e465b8c-6e38-41ee-a345-f780dd5984dc',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "⭐",
  "headline": "You did it!",
  "goal": "You can say what you like and don't like!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- introduce yourself: name, country, age, and something you like.',
  slide_count = 9
where id = '06ef2c10-06c5-471b-b4f3-64177b46fac2';

delete from lesson_slides where lesson_id = '06ef2c10-06c5-471b-b4f3-64177b46fac2';

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
  "image_note": "Hero image for 'Unit Review' -- a happy group of children celebrating with stars and confetti, bright and festive."
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
    "Do you see stars?",
    "Are they happy?"
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
      "word": "Hello"
    },
    {
      "word": "From"
    },
    {
      "word": "Age"
    },
    {
      "word": "Like"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me about yourself!"
  ],
  "student": [
    "My name is ___. I'm from ___."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child confidently introducing themselves to the class."
}$json$::jsonb,
  true
),
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  5,
  'practice',
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
      "instruction": "Match each greeting.",
      "pairs": [
        {
          "emoji": "👋",
          "word": "Hello"
        },
        {
          "emoji": "🚶",
          "word": "Goodbye"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which question asks about your country?",
      "options": [
        {
          "text": "Where are you from?",
          "emoji": "🌍"
        },
        {
          "text": "What do you like?",
          "emoji": "⭐"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "I am [seven] years old."
        },
        {
          "speaker": "B",
          "text": "My [birthday] is in May."
        }
      ],
      "blanks": [
        "seven",
        "birthday"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Drag each thing to how you feel.",
      "subjective": true,
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
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me everything about you: name, country, age, and something you like!",
  "starters": [
    "My name is...",
    "I'm from...",
    "I am ... years old",
    "I like..."
  ]
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
  "text": "Hi! My name is Mia. I am from Spain. I am seven years old. I like cats.",
  "questions": [
    "What is her name?",
    "Where is she from?",
    "What does she like?"
  ]
}$json$::jsonb,
  true
),
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my name and hello",
    "Say where I'm from",
    "Say my age and something I like"
  ],
  "challenge": "Introduce yourself: name, country, age, and something you like!"
}$json$::jsonb,
  true
),
(
  '06ef2c10-06c5-471b-b4f3-64177b46fac2',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can introduce yourself in English!",
  "closing": "See you in Unit 2!"
}$json$::jsonb,
  true
);

commit;

-- ─────────────────────────────────────────────
-- UNIT 2
-- ─────────────────────────────────────────────
-- A1 Kids Unit 2: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: People in My Family
update lessons set
  title = 'People in My Family',
  topic = 'Name the people in your family.',
  slide_count = 9
where id = '77ec3eaf-90e3-41cf-900e-65d754b5dc3b';

delete from lesson_slides where lesson_id = '77ec3eaf-90e3-41cf-900e-65d754b5dc3b';

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
  "image_note": "Hero image for 'People in My Family' -- a warm family portrait with parents and children smiling together, bright and friendly."
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
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Do you see a family?",
    "How many people?"
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
      "word": "Mom"
    },
    {
      "word": "Dad"
    },
    {
      "word": "Sister"
    },
    {
      "word": "Brother"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Who is this?"
  ],
  "student": [
    "This is my mom."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child pointing to a family photo, pointing at their mom."
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
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
    }
  ]
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "A child showing a family photo to a friend.",
  "lines": [
    {
      "speaker": "A",
      "text": "Who is this?"
    },
    {
      "speaker": "B",
      "text": "This is my mom!"
    },
    {
      "speaker": "A",
      "text": "She's nice!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Who is this?"
    },
    {
      "speaker": "B",
      "text": "This is my dad."
    },
    {
      "speaker": "A",
      "text": "Nice to meet him!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'Mom' and 'Dad'",
    "Say 'Sister' and 'Brother'",
    "Say 'This is my ___'"
  ],
  "challenge": "Tell me about your family!"
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "👨‍👩‍👧‍👦",
  "headline": "You did it!",
  "goal": "You can name your family members!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: What My Family Looks Like
update lessons set
  title = 'What My Family Looks Like',
  topic = 'Describe what your family looks like.',
  slide_count = 9
where id = '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5';

delete from lesson_slides where lesson_id = '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5';

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
  "image_note": "Hero image for 'What My Family Looks Like' -- a cheerful family group with different hair styles, bright and diverse."
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
  "display": "👀",
  "questions": [
    "Do you see hair?",
    "Is it long or short?"
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
      "word": "Tall"
    },
    {
      "word": "Short"
    },
    {
      "word": "Long hair"
    },
    {
      "word": "Short hair"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What does your mom look like?"
  ],
  "student": [
    "She has long hair."
  ],
  "title": "Practice the Conversation",
  "image_note": "A mom with long hair, smiling warmly."
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which word describes hair?",
  "options": [
    {
      "text": "Long hair",
      "emoji": "💇"
    },
    {
      "text": "Happy",
      "emoji": "😊"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "What does your mom look like?",
    "What does your dad look like?",
    "Are you tall or short?"
  ]
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
  "text": "My mom has long hair. My dad is tall. I am short.",
  "questions": [
    "Who has long hair?",
    "Who is tall?",
    "Who is short?"
  ]
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'tall' and 'short'",
    "Say 'long hair' and 'short hair'",
    "Describe my family"
  ],
  "challenge": "Describe what your family looks like!"
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "👀",
  "headline": "You did it!",
  "goal": "You can describe your family!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: What My Family Does Together
update lessons set
  title = 'What My Family Does Together',
  topic = 'Talk about things your family does together.',
  slide_count = 9
where id = '4eb03fb6-b102-4aae-b72f-8c2e24934aba';

delete from lesson_slides where lesson_id = '4eb03fb6-b102-4aae-b72f-8c2e24934aba';

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
  "image_note": "Hero image for 'What My Family Does Together' -- a family cooking together in a cozy kitchen, warm and happy."
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
  "display": "🍽️",
  "questions": [
    "Do you see a family?",
    "Are they happy?"
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
      "word": "Cook"
    },
    {
      "word": "Play"
    },
    {
      "word": "Eat"
    },
    {
      "word": "Watch TV"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you do together?"
  ],
  "student": [
    "We cook dinner."
  ],
  "title": "Practice the Conversation",
  "image_note": "A family cooking dinner together in the kitchen."
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "We [cook] dinner together."
    },
    {
      "speaker": "B",
      "text": "We [play] games."
    },
    {
      "speaker": "A",
      "text": "We [watch] TV."
    }
  ],
  "blanks": [
    "cook",
    "play",
    "watch"
  ]
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me what your family does together!",
  "starters": [
    "We cook...",
    "We play..."
  ]
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do together?"
    },
    {
      "speaker": "B",
      "text": "We cook dinner."
    },
    {
      "speaker": "A",
      "text": "That's fun!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'cook' and 'play'",
    "Say 'eat' and 'watch TV'",
    "Say 'We ___ together'"
  ],
  "challenge": "Tell me one thing your family does together!"
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🍽️",
  "headline": "You did it!",
  "goal": "You can talk about family time!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Talking About My Family
update lessons set
  title = 'Talking About My Family',
  topic = 'Share how you feel about your family.',
  slide_count = 9
where id = '04001f40-834d-4c0a-9433-09b67a445259';

delete from lesson_slides where lesson_id = '04001f40-834d-4c0a-9433-09b67a445259';

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
  "image_note": "Hero image for 'Talking About My Family' -- a child hugging their family, everyone smiling, bright and cheerful."
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
  "display": "❤️",
  "questions": [
    "Do you see a family?",
    "Are they happy?"
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
      "word": "Love"
    },
    {
      "word": "Big family"
    },
    {
      "word": "Small family"
    },
    {
      "word": "Happy"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me about your family."
  ],
  "student": [
    "I love my family."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child hugging their family, everyone smiling."
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Big or Small?",
  "subtitle": "Drag each one to how you see it.",
  "instruction": "Is it a big family or a small family?",
  "subjective": true,
  "buckets": [
    {
      "label": "Big Family",
      "emoji": "👨‍👩‍👧‍👦"
    },
    {
      "label": "Small Family",
      "emoji": "👨‍👩‍👦"
    }
  ],
  "items": [
    {
      "text": "Grandma & Grandpa",
      "emoji": "👵",
      "bucket": 0
    },
    {
      "text": "Just me & Mom",
      "emoji": "👩",
      "bucket": 1
    },
    {
      "text": "3 sisters",
      "emoji": "👧",
      "bucket": 0
    },
    {
      "text": "Me & Dad",
      "emoji": "👨",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Is your family big or small?",
  "options": [
    {
      "text": "Big Family",
      "emoji": "👨‍👩‍👧‍👦"
    },
    {
      "text": "Small Family",
      "emoji": "👨‍👩‍👦"
    }
  ]
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
  "text": "I love my family. I have a mom, a dad, and a sister. We are happy together!",
  "questions": [
    "Who is in the family?",
    "Are they happy?",
    "How many people?"
  ]
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I love my family'",
    "Say 'big family' or 'small family'",
    "Talk about my family"
  ],
  "challenge": "Tell me three things about your family!"
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "❤️",
  "headline": "You did it!",
  "goal": "You can talk about how you feel about your family!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- introduce your family: names, looks, and what you do together.',
  slide_count = 9
where id = '157f6f1d-a370-4763-b6bf-60de3fd5c35b';

delete from lesson_slides where lesson_id = '157f6f1d-a370-4763-b6bf-60de3fd5c35b';

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
  "image_note": "Hero image for 'Unit Review' -- a big happy family group photo, festive and warm."
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
  "display": "🌟",
  "questions": [
    "Do you see a family?",
    "Are they smiling?"
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
      "word": "Mom"
    },
    {
      "word": "Family"
    },
    {
      "word": "Love"
    },
    {
      "word": "Happy"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me about your family."
  ],
  "student": [
    "This is my family. I love them."
  ],
  "title": "Practice the Conversation",
  "image_note": "A big happy family gathered together, laughing."
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  5,
  'practice',
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
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which word describes hair?",
      "options": [
        {
          "text": "Long hair",
          "emoji": "💇"
        },
        {
          "text": "Happy",
          "emoji": "😊"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "We [cook] dinner together."
        },
        {
          "speaker": "B",
          "text": "We [play] games."
        }
      ],
      "blanks": [
        "cook",
        "play"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Is it a big family or a small family?",
      "subjective": true,
      "buckets": [
        {
          "label": "Big Family",
          "emoji": "👨‍👩‍👧‍👦"
        },
        {
          "label": "Small Family",
          "emoji": "👨‍👩‍👦"
        }
      ],
      "items": [
        {
          "text": "Grandma & Grandpa",
          "emoji": "👵",
          "bucket": 0
        },
        {
          "text": "Just me & Mom",
          "emoji": "👩",
          "bucket": 1
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
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about your family!",
  "starters": [
    "This is my...",
    "We like to...",
    "I love..."
  ]
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
  "text": "This is my family. I have a mom and a dad. We cook dinner together. I love my family!",
  "questions": [
    "Who is in the family?",
    "What do they do together?",
    "Does the child love their family?"
  ]
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name my family members",
    "Describe my family",
    "Say what we do together"
  ],
  "challenge": "Introduce your family: names, what they look like, and what you do together!"
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about your family!",
  "closing": "See you in Unit 3!"
}$json$::jsonb,
  true
);

commit;

-- ─────────────────────────────────────────────
-- UNIT 3
-- ─────────────────────────────────────────────
-- A1 Kids Unit 3: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: My House or Flat
update lessons set
  title = 'My House or Flat',
  topic = 'Say if you live in a house or a flat.',
  slide_count = 9
where id = 'ff86688d-73e3-4cd8-9480-0fcb3c575a89';

delete from lesson_slides where lesson_id = 'ff86688d-73e3-4cd8-9480-0fcb3c575a89';

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
  "image_note": "Hero image for 'My House or Flat' -- a colorful row of houses and apartment buildings, bright and friendly."
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
  "display": "🏠",
  "questions": [
    "Do you see a house?",
    "Is it big or small?"
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
      "word": "House"
    },
    {
      "word": "Flat"
    },
    {
      "word": "Door"
    },
    {
      "word": "Window"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Where do you live?"
  ],
  "student": [
    "I live in a house."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child standing in front of their front door, waving."
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Home",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "🏠",
      "word": "House"
    },
    {
      "emoji": "🏢",
      "word": "Flat"
    },
    {
      "emoji": "🚪",
      "word": "Door"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "Two children standing at a front door, one visiting the other.",
  "lines": [
    {
      "speaker": "A",
      "text": "Where do you live?"
    },
    {
      "speaker": "B",
      "text": "I live in a flat."
    },
    {
      "speaker": "A",
      "text": "Can I visit?"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where do you live?"
    },
    {
      "speaker": "B",
      "text": "I live in a house."
    },
    {
      "speaker": "A",
      "text": "It has a big window!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'house' and 'flat'",
    "Say 'door' and 'window'",
    "Say 'I live in a ___'"
  ],
  "challenge": "Tell me where you live!"
}$json$::jsonb,
  true
),
(
  'ff86688d-73e3-4cd8-9480-0fcb3c575a89',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🏠",
  "headline": "You did it!",
  "goal": "You can say where you live!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Rooms in My Home
update lessons set
  title = 'Rooms in My Home',
  topic = 'Name the rooms in your home.',
  slide_count = 9
where id = '6cce3fed-c684-41df-bc14-e2d39567fc23';

delete from lesson_slides where lesson_id = '6cce3fed-c684-41df-bc14-e2d39567fc23';

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
  "image_note": "Hero image for 'Rooms in My Home' -- a simple cutaway house showing a kitchen, bedroom, and living room, bright and colorful."
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
  "display": "🚪",
  "questions": [
    "Do you see a room?",
    "What color is it?"
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
      "word": "Kitchen"
    },
    {
      "word": "Bedroom"
    },
    {
      "word": "Bathroom"
    },
    {
      "word": "Living room"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Where do you sleep?"
  ],
  "student": [
    "I sleep in my bedroom."
  ],
  "title": "Practice the Conversation",
  "image_note": "A cozy bedroom with a bed and a lamp."
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which room do you cook in?",
  "options": [
    {
      "text": "Kitchen",
      "emoji": "🍳"
    },
    {
      "text": "Bedroom",
      "emoji": "🛏️"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "What's in your kitchen?",
    "Where do you sleep?",
    "What's your favorite room?"
  ]
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
  "text": "My house has a kitchen, a bedroom, and a bathroom. I sleep in my bedroom.",
  "questions": [
    "What rooms does the house have?",
    "Where does the child sleep?",
    "How many rooms are there?"
  ]
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 rooms",
    "Say 'I sleep in my bedroom'",
    "Say my favorite room"
  ],
  "challenge": "Tell me about the rooms in your home!"
}$json$::jsonb,
  true
),
(
  '6cce3fed-c684-41df-bc14-e2d39567fc23',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🚪",
  "headline": "You did it!",
  "goal": "You can name the rooms in your home!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: Things in My Room
update lessons set
  title = 'Things in My Room',
  topic = 'Name things in your bedroom.',
  slide_count = 9
where id = '41de2716-cfcb-40c2-9241-534e7e991c74';

delete from lesson_slides where lesson_id = '41de2716-cfcb-40c2-9241-534e7e991c74';

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
  "image_note": "Hero image for 'Things in My Room' -- a colorful kids' bedroom with a bed, a toy box, and a lamp, bright and cheerful."
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
  "display": "🛏️",
  "questions": [
    "Do you see a bed?",
    "Do you see toys?"
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
      "word": "Bed"
    },
    {
      "word": "Toy box"
    },
    {
      "word": "Lamp"
    },
    {
      "word": "Shelf"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What's in your room?"
  ],
  "student": [
    "I have a bed and a lamp."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child's bedroom with a bed, a lamp, and a shelf of toys."
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [bed] in my room."
    },
    {
      "speaker": "B",
      "text": "I have a [lamp] too."
    },
    {
      "speaker": "A",
      "text": "My toys are in the [box]."
    }
  ],
  "blanks": [
    "bed",
    "lamp",
    "box"
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me what's in your room!",
  "starters": [
    "I have...",
    "My room has..."
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's in your room?"
    },
    {
      "speaker": "B",
      "text": "I have a bed and a shelf."
    },
    {
      "speaker": "A",
      "text": "Nice!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'bed' and 'lamp'",
    "Say 'toy box' and 'shelf'",
    "Say 'I have a ___'"
  ],
  "challenge": "Tell me three things in your room!"
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🛏️",
  "headline": "You did it!",
  "goal": "You can name things in your room!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: What I Do at Home
update lessons set
  title = 'What I Do at Home',
  topic = 'Say what you like to do at home.',
  slide_count = 9
where id = '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e';

delete from lesson_slides where lesson_id = '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e';

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
  "image_note": "Hero image for 'What I Do at Home' -- a child reading a book and playing with toys on the floor, cozy and cheerful."
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
  "display": "📖",
  "questions": [
    "Do you see a child?",
    "What are they doing?"
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
      "word": "Sleep"
    },
    {
      "word": "Play"
    },
    {
      "word": "Read"
    },
    {
      "word": "Relax"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you do at home?"
  ],
  "student": [
    "I like to play."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child playing with toys happily on the floor."
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Like or Don't Like?",
  "subtitle": "Drag each one to how you feel.",
  "instruction": "Drag each thing to how you feel about it!",
  "subjective": true,
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
      "text": "Playing",
      "emoji": "🎮",
      "bucket": 0
    },
    {
      "text": "Reading",
      "emoji": "📖",
      "bucket": 0
    },
    {
      "text": "Chores",
      "emoji": "🧺",
      "bucket": 1
    },
    {
      "text": "Cleaning",
      "emoji": "🧹",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which do you like more?",
  "options": [
    {
      "text": "Reading",
      "emoji": "📖"
    },
    {
      "text": "Playing",
      "emoji": "🎮"
    }
  ]
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
  "text": "At home, I like to play and read. I don't like chores.",
  "questions": [
    "What does the child like?",
    "What don't they like?",
    "Where are they?"
  ]
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'sleep' and 'play'",
    "Say 'read' and 'relax'",
    "Say what I like to do at home"
  ],
  "challenge": "Tell me what you like to do at home!"
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "📖",
  "headline": "You did it!",
  "goal": "You can say what you do at home!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about your home: where you live, the rooms, and what''s in your room.',
  slide_count = 9
where id = '696174c9-92a0-4432-ba23-00e3f5771fb2';

delete from lesson_slides where lesson_id = '696174c9-92a0-4432-ba23-00e3f5771fb2';

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
  "image_note": "Hero image for 'Unit Review' -- a cutaway house full of happy children playing in different rooms, festive."
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
  "display": "🌟",
  "questions": [
    "Do you see a house?",
    "Do you see rooms?"
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
      "word": "House"
    },
    {
      "word": "Bedroom"
    },
    {
      "word": "Bed"
    },
    {
      "word": "Play"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me about your home."
  ],
  "student": [
    "I live in a house. I have a bed in my room."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child giving a tour of their home, pointing at different rooms."
}$json$::jsonb,
  true
),
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  5,
  'practice',
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
      "instruction": "Match each home word.",
      "pairs": [
        {
          "emoji": "🏠",
          "word": "House"
        },
        {
          "emoji": "🚪",
          "word": "Door"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which room do you cook in?",
      "options": [
        {
          "text": "Kitchen",
          "emoji": "🍳"
        },
        {
          "text": "Bedroom",
          "emoji": "🛏️"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "I have a [bed] in my room."
        },
        {
          "speaker": "B",
          "text": "I have a [lamp] too."
        }
      ],
      "blanks": [
        "bed",
        "lamp"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Drag each thing to how you feel.",
      "subjective": true,
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
          "text": "Playing",
          "emoji": "🎮",
          "bucket": 0
        },
        {
          "text": "Chores",
          "emoji": "🧺",
          "bucket": 1
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
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about your home!",
  "starters": [
    "I live in...",
    "My room has...",
    "I like to..."
  ]
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
  "text": "I live in a house. My room has a bed and a lamp. I like to play and read.",
  "questions": [
    "Where does the child live?",
    "What's in their room?",
    "What do they like to do?"
  ]
}$json$::jsonb,
  true
),
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say where I live",
    "Name the rooms in my home",
    "Say what's in my room"
  ],
  "challenge": "Give me a tour of your home!"
}$json$::jsonb,
  true
),
(
  '696174c9-92a0-4432-ba23-00e3f5771fb2',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about your home!",
  "closing": "See you in Unit 4!"
}$json$::jsonb,
  true
);

commit;

-- ─────────────────────────────────────────────
-- UNIT 4
-- ─────────────────────────────────────────────
-- A1 Kids Unit 4: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: My Classroom and Teacher
update lessons set
  title = 'My Classroom and Teacher',
  topic = 'Name your classroom and your teacher.',
  slide_count = 9
where id = 'c7e53235-a359-48da-82f9-ae4380ca518e';

delete from lesson_slides where lesson_id = 'c7e53235-a359-48da-82f9-ae4380ca518e';

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
  "image_note": "Hero image for 'My Classroom and Teacher' -- a bright classroom with a friendly teacher and children at their desks."
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
  "display": "🏫",
  "questions": [
    "Do you see a classroom?",
    "Do you see a teacher?"
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
      "word": "Classroom"
    },
    {
      "word": "Teacher"
    },
    {
      "word": "Desk"
    },
    {
      "word": "Chair"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Who is your teacher?"
  ],
  "student": [
    "My teacher is Miss Ana."
  ],
  "title": "Practice the Conversation",
  "image_note": "A friendly teacher waving hello to the class."
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Classroom",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "🏫",
      "word": "Classroom"
    },
    {
      "emoji": "👩‍🏫",
      "word": "Teacher"
    },
    {
      "emoji": "🪑",
      "word": "Chair"
    }
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "A child meeting their teacher on the first day of school.",
  "lines": [
    {
      "speaker": "A",
      "text": "Hello! I'm your teacher."
    },
    {
      "speaker": "B",
      "text": "Hello, teacher!"
    },
    {
      "speaker": "A",
      "text": "Sit at your desk."
    }
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Who is your teacher?"
    },
    {
      "speaker": "B",
      "text": "My teacher is Mr. Lee."
    },
    {
      "speaker": "A",
      "text": "He is nice!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'classroom' and 'teacher'",
    "Say 'desk' and 'chair'",
    "Say my teacher's name"
  ],
  "challenge": "Tell me about your classroom and teacher!"
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🏫",
  "headline": "You did it!",
  "goal": "You can talk about your classroom and teacher!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Things on My Desk
update lessons set
  title = 'Things on My Desk',
  topic = 'Name the things on your desk.',
  slide_count = 9
where id = 'c66b374c-073b-4618-b34b-66da50d7ead3';

delete from lesson_slides where lesson_id = 'c66b374c-073b-4618-b34b-66da50d7ead3';

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
  "image_note": "Hero image for 'Things on My Desk' -- a school desk with a pencil, book, eraser, and ruler laid out, bright and tidy."
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
  "display": "✏️",
  "questions": [
    "Do you see a pencil?",
    "Do you see a book?"
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
      "word": "Pencil"
    },
    {
      "word": "Book"
    },
    {
      "word": "Eraser"
    },
    {
      "word": "Ruler"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What's on your desk?"
  ],
  "student": [
    "I have a pencil and a book."
  ],
  "title": "Practice the Conversation",
  "image_note": "A tidy school desk with a pencil and a book on top."
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one do you write with?",
  "options": [
    {
      "text": "Pencil",
      "emoji": "✏️"
    },
    {
      "text": "Book",
      "emoji": "📖"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "What's on your desk?",
    "Do you have a pencil?",
    "What color is your book?"
  ]
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
  "text": "On my desk, I have a pencil, a book, and an eraser.",
  "questions": [
    "What's on the desk?",
    "How many things are there?",
    "Is there a ruler?"
  ]
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'pencil' and 'book'",
    "Say 'eraser' and 'ruler'",
    "Say 'I have a ___'"
  ],
  "challenge": "Tell me what's on your desk!"
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "✏️",
  "headline": "You did it!",
  "goal": "You can name things on your desk!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: My School Bag
update lessons set
  title = 'My School Bag',
  topic = 'Talk about your school bag.',
  slide_count = 9
where id = '5546d8a9-9d92-476c-b548-8ed23c96bcab';

delete from lesson_slides where lesson_id = '5546d8a9-9d92-476c-b548-8ed23c96bcab';

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
  "image_note": "Hero image for 'My School Bag' -- a colorful school backpack with books peeking out, bright and cheerful."
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
  "display": "🎒",
  "questions": [
    "Do you see a bag?",
    "Is it big or small?"
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
      "word": "Bag"
    },
    {
      "word": "Pack"
    },
    {
      "word": "Carry"
    },
    {
      "word": "Open"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What's in your bag?"
  ],
  "student": [
    "I have books in my bag."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child opening their school bag to show their books."
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [pack] my bag."
    },
    {
      "speaker": "B",
      "text": "I [carry] my bag to school."
    },
    {
      "speaker": "A",
      "text": "I [open] my bag."
    }
  ],
  "blanks": [
    "pack",
    "carry",
    "open"
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me what's in your school bag!",
  "starters": [
    "I have...",
    "My bag has..."
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's in your bag?"
    },
    {
      "speaker": "B",
      "text": "I have a book and a pencil."
    },
    {
      "speaker": "A",
      "text": "Let's go to school!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'bag' and 'pack'",
    "Say 'carry' and 'open'",
    "Say what's in my bag"
  ],
  "challenge": "Tell me three things in your school bag!"
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🎒",
  "headline": "You did it!",
  "goal": "You can talk about your school bag!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Rules in My Classroom
update lessons set
  title = 'Rules in My Classroom',
  topic = 'Talk about classroom rules.',
  slide_count = 9
where id = 'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12';

delete from lesson_slides where lesson_id = 'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12';

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
  "image_note": "Hero image for 'Rules in My Classroom' -- children sitting quietly and raising their hands in a classroom, orderly and bright."
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
  "display": "🙋",
  "questions": [
    "Do you see children?",
    "Are they quiet?"
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
      "word": "Listen"
    },
    {
      "word": "Quiet"
    },
    {
      "word": "Raise hand"
    },
    {
      "word": "Share"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What are the classroom rules?"
  ],
  "student": [
    "We listen to the teacher."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child raising their hand quietly in class."
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Do This or Not?",
  "subtitle": "Drag each one to the right place.",
  "instruction": "Which is a classroom rule?",
  "buckets": [
    {
      "label": "Do This",
      "emoji": "✅"
    },
    {
      "label": "Don't Do This",
      "emoji": "🚫"
    }
  ],
  "items": [
    {
      "text": "Listen",
      "emoji": "👂",
      "bucket": 0
    },
    {
      "text": "Raise hand",
      "emoji": "🙋",
      "bucket": 0
    },
    {
      "text": "Shout",
      "emoji": "📢",
      "bucket": 1
    },
    {
      "text": "Run",
      "emoji": "🏃",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which is a good classroom rule?",
  "options": [
    {
      "text": "Listen",
      "emoji": "👂"
    },
    {
      "text": "Shout",
      "emoji": "📢"
    }
  ]
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
  "text": "In my classroom, we listen and raise our hands. We don't shout.",
  "questions": [
    "What do they do?",
    "What don't they do?",
    "Is it a quiet classroom?"
  ]
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'listen' and 'quiet'",
    "Say 'raise hand' and 'share'",
    "Say a classroom rule"
  ],
  "challenge": "Tell me one classroom rule!"
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🙋",
  "headline": "You did it!",
  "goal": "You can talk about classroom rules!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about your classroom, teacher, desk, bag, and classroom rules.',
  slide_count = 9
where id = '1ef356b7-5118-4428-b1e2-8809975cbce9';

delete from lesson_slides where lesson_id = '1ef356b7-5118-4428-b1e2-8809975cbce9';

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
  "image_note": "Hero image for 'Unit Review' -- a happy classroom scene with children, a teacher, desks, and bags, festive and bright."
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
  "display": "🌟",
  "questions": [
    "Do you see a classroom?",
    "Are the children happy?"
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
      "word": "Teacher"
    },
    {
      "word": "Desk"
    },
    {
      "word": "Bag"
    },
    {
      "word": "Listen"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me about your classroom."
  ],
  "student": [
    "My teacher is nice. I listen and I have a bag."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily describing their classroom to a friend."
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  5,
  'practice',
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
      "instruction": "Match each classroom word.",
      "pairs": [
        {
          "emoji": "🏫",
          "word": "Classroom"
        },
        {
          "emoji": "🪑",
          "word": "Chair"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one do you write with?",
      "options": [
        {
          "text": "Pencil",
          "emoji": "✏️"
        },
        {
          "text": "Book",
          "emoji": "📖"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "I [pack] my bag."
        },
        {
          "speaker": "B",
          "text": "I [carry] my bag to school."
        }
      ],
      "blanks": [
        "pack",
        "carry"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Which is a classroom rule?",
      "buckets": [
        {
          "label": "Do This",
          "emoji": "✅"
        },
        {
          "label": "Don't Do This",
          "emoji": "🚫"
        }
      ],
      "items": [
        {
          "text": "Listen",
          "emoji": "👂",
          "bucket": 0
        },
        {
          "text": "Shout",
          "emoji": "📢",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about your classroom!",
  "starters": [
    "My teacher is...",
    "I have...",
    "We listen..."
  ]
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
  "text": "My classroom has a teacher and desks. I have a pencil and a bag. We listen and raise our hands.",
  "questions": [
    "What does the classroom have?",
    "What does the child have?",
    "What do they do in class?"
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about my teacher and classroom",
    "Name things on my desk and in my bag",
    "Say a classroom rule"
  ],
  "challenge": "Tell me about your classroom, your teacher, your desk, and your bag!"
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about your classroom!",
  "closing": "See you in Unit 5!"
}$json$::jsonb,
  true
);

commit;

-- ─────────────────────────────────────────────
-- UNIT 5
-- ─────────────────────────────────────────────
-- A1 Kids Unit 5: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: Morning Routine
update lessons set
  title = 'Morning Routine',
  topic = 'Talk about what you do in the morning.',
  slide_count = 9
where id = '9319ffd3-3c41-4a65-adc8-a69c46c3a643';

delete from lesson_slides where lesson_id = '9319ffd3-3c41-4a65-adc8-a69c46c3a643';

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
  "image_note": "Hero image for 'Morning Routine' -- a cheerful child waking up and stretching in bed with sunlight through the window."
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
  "display": "⏰",
  "questions": [
    "Do you see a clock?",
    "Is it morning?"
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
      "word": "Wake up"
    },
    {
      "word": "Brush teeth"
    },
    {
      "word": "Get dressed"
    },
    {
      "word": "Eat breakfast"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you do in the morning?"
  ],
  "student": [
    "I wake up and brush my teeth."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child brushing their teeth in front of a mirror, smiling."
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Morning",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "⏰",
      "word": "Wake up"
    },
    {
      "emoji": "🪥",
      "word": "Brush teeth"
    },
    {
      "emoji": "👕",
      "word": "Get dressed"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "A child getting dressed in the morning, picking out clothes.",
  "lines": [
    {
      "speaker": "A",
      "text": "Wake up! It's morning."
    },
    {
      "speaker": "B",
      "text": "I'm brushing my teeth."
    },
    {
      "speaker": "A",
      "text": "Now get dressed!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do in the morning?"
    },
    {
      "speaker": "B",
      "text": "I wake up and eat breakfast."
    },
    {
      "speaker": "A",
      "text": "Me too!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'wake up' and 'brush teeth'",
    "Say 'get dressed' and 'eat breakfast'",
    "Say my morning routine"
  ],
  "challenge": "Tell me what you do in the morning!"
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "⏰",
  "headline": "You did it!",
  "goal": "You can talk about your morning!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: At School in the Day
update lessons set
  title = 'At School in the Day',
  topic = 'Talk about what you do at school.',
  slide_count = 9
where id = '4e42f5ed-cd3d-48b7-a30d-0f01ea986183';

delete from lesson_slides where lesson_id = '4e42f5ed-cd3d-48b7-a30d-0f01ea986183';

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
  "image_note": "Hero image for 'At School in the Day' -- children learning, writing, and drawing in a bright classroom."
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
  "display": "✏️",
  "questions": [
    "Do you see children?",
    "Are they learning?"
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
      "word": "Learn"
    },
    {
      "word": "Write"
    },
    {
      "word": "Draw"
    },
    {
      "word": "Lunch"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you do at school?"
  ],
  "student": [
    "I learn and write."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child writing happily at their desk."
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one do you do with a pencil?",
  "options": [
    {
      "text": "Write",
      "emoji": "✏️"
    },
    {
      "text": "Lunch",
      "emoji": "🍱"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "What do you learn at school?",
    "Do you like lunch?",
    "What do you draw?"
  ]
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
  "text": "At school, I learn and write. I draw pictures. I like lunch!",
  "questions": [
    "What does the child do at school?",
    "Do they like lunch?",
    "What do they draw?"
  ]
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'learn' and 'write'",
    "Say 'draw' and 'lunch'",
    "Say what I do at school"
  ],
  "challenge": "Tell me what you do at school!"
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "✏️",
  "headline": "You did it!",
  "goal": "You can talk about your school day!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: After School Time
update lessons set
  title = 'After School Time',
  topic = 'Talk about what you do after school.',
  slide_count = 9
where id = '41de2716-cfcb-40c2-9241-534e7e991c74';

delete from lesson_slides where lesson_id = '41de2716-cfcb-40c2-9241-534e7e991c74';

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
  "image_note": "Hero image for 'After School Time' -- children playing outside with friends after school, sunny and fun."
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
  "display": "🎒",
  "questions": [
    "Do you see children?",
    "Are they playing?"
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
      "word": "Homework"
    },
    {
      "word": "Snack"
    },
    {
      "word": "Friends"
    },
    {
      "word": "Outside"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you do after school?"
  ],
  "student": [
    "I do my homework."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child doing homework at a table with a snack nearby."
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "I do my [homework]."
    },
    {
      "speaker": "B",
      "text": "I eat a [snack]."
    },
    {
      "speaker": "A",
      "text": "I play [outside]."
    }
  ],
  "blanks": [
    "homework",
    "snack",
    "outside"
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me what you do after school!",
  "starters": [
    "I do...",
    "I play with..."
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  7,
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
      "text": "I play with my friends."
    },
    {
      "speaker": "A",
      "text": "That sounds fun!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'homework' and 'snack'",
    "Say 'friends' and 'outside'",
    "Say what I do after school"
  ],
  "challenge": "Tell me one thing you do after school!"
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🎒",
  "headline": "You did it!",
  "goal": "You can talk about after school!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Bedtime Routine
update lessons set
  title = 'Bedtime Routine',
  topic = 'Talk about what you do before bed.',
  slide_count = 9
where id = '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e';

delete from lesson_slides where lesson_id = '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e';

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
  "image_note": "Hero image for 'Bedtime Routine' -- a cozy bedroom with a child in pajamas reading a bedtime story, soft warm light."
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
  "display": "🌙",
  "questions": [
    "Do you see the moon?",
    "Is it night?"
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
      "word": "Bath"
    },
    {
      "word": "Pajamas"
    },
    {
      "word": "Story"
    },
    {
      "word": "Sleep"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you do before bed?"
  ],
  "student": [
    "I take a bath and read a story."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child in pajamas reading a book in bed."
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Like or Don't Like?",
  "subtitle": "Drag each one to how you feel.",
  "instruction": "Drag each thing to how you feel about it!",
  "subjective": true,
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
      "text": "Bath time",
      "emoji": "🛁",
      "bucket": 0
    },
    {
      "text": "Story time",
      "emoji": "📖",
      "bucket": 0
    },
    {
      "text": "Brushing teeth",
      "emoji": "🪥",
      "bucket": 1
    },
    {
      "text": "Going to sleep",
      "emoji": "😴",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which do you like more?",
  "options": [
    {
      "text": "Story time",
      "emoji": "📖"
    },
    {
      "text": "Bath time",
      "emoji": "🛁"
    }
  ]
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
  "text": "Before bed, I take a bath. I put on my pajamas. I read a story. Then I sleep.",
  "questions": [
    "What does the child do first?",
    "What do they wear?",
    "What do they read?"
  ]
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'bath' and 'pajamas'",
    "Say 'story' and 'sleep'",
    "Say my bedtime routine"
  ],
  "challenge": "Tell me what you do before bed!"
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌙",
  "headline": "You did it!",
  "goal": "You can talk about bedtime!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about your whole day: morning, school, after school, and bedtime.',
  slide_count = 9
where id = 'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f';

delete from lesson_slides where lesson_id = 'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f';

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
  "image_note": "Hero image for 'Unit Review' -- a four-panel-style scene showing morning, school, play, and bedtime, festive and bright."
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
  "display": "🌟",
  "questions": [
    "Do you see a clock?",
    "Do you see the moon?"
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
      "word": "Wake up"
    },
    {
      "word": "Learn"
    },
    {
      "word": "Homework"
    },
    {
      "word": "Sleep"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me about your day."
  ],
  "student": [
    "I wake up, learn, play, and sleep."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily talking about their busy, fun day."
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  5,
  'practice',
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
      "instruction": "Match each morning word.",
      "pairs": [
        {
          "emoji": "⏰",
          "word": "Wake up"
        },
        {
          "emoji": "🪥",
          "word": "Brush teeth"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one do you do with a pencil?",
      "options": [
        {
          "text": "Write",
          "emoji": "✏️"
        },
        {
          "text": "Lunch",
          "emoji": "🍱"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "I do my [homework]."
        },
        {
          "speaker": "B",
          "text": "I eat a [snack]."
        }
      ],
      "blanks": [
        "homework",
        "snack"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Drag each thing to how you feel.",
      "subjective": true,
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
          "text": "Story time",
          "emoji": "📖",
          "bucket": 0
        },
        {
          "text": "Brushing teeth",
          "emoji": "🪥",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about your day!",
  "starters": [
    "In the morning...",
    "At school...",
    "Before bed..."
  ]
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
  "text": "I wake up and eat breakfast. At school, I learn and write. After school, I play. Before bed, I read a story.",
  "questions": [
    "What does the child do first?",
    "What do they do at school?",
    "What do they do before bed?"
  ]
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about my morning",
    "Talk about my school day",
    "Talk about my bedtime"
  ],
  "challenge": "Tell me about your whole day, from morning to night!"
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about your whole day!",
  "closing": "See you in Unit 6!"
}$json$::jsonb,
  true
);

commit;

-- ─────────────────────────────────────────────
-- UNIT 6
-- ─────────────────────────────────────────────
-- A1 Kids Unit 6: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: Breakfast at Home
update lessons set
  title = 'Breakfast at Home',
  topic = 'Talk about what you eat for breakfast.',
  slide_count = 9
where id = 'f47bc376-262a-4819-891f-9432fc9e3f66';

delete from lesson_slides where lesson_id = 'f47bc376-262a-4819-891f-9432fc9e3f66';

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
  "image_note": "Hero image for 'Breakfast at Home' -- a bright breakfast table with eggs, toast, and juice, cheerful morning light."
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
  "display": "🍳",
  "questions": [
    "Do you see food?",
    "Is it breakfast?"
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
      "word": "Eggs"
    },
    {
      "word": "Toast"
    },
    {
      "word": "Milk"
    },
    {
      "word": "Juice"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you eat for breakfast?"
  ],
  "student": [
    "I eat eggs and toast."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child eating breakfast happily at the table."
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Breakfast",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "🍳",
      "word": "Eggs"
    },
    {
      "emoji": "🍞",
      "word": "Toast"
    },
    {
      "emoji": "🥛",
      "word": "Milk"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "A family eating breakfast together at the table.",
  "lines": [
    {
      "speaker": "A",
      "text": "What's for breakfast?"
    },
    {
      "speaker": "B",
      "text": "Eggs and toast!"
    },
    {
      "speaker": "A",
      "text": "Yummy!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you eat for breakfast?"
    },
    {
      "speaker": "B",
      "text": "I drink milk and juice."
    },
    {
      "speaker": "A",
      "text": "I like juice too!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'eggs' and 'toast'",
    "Say 'milk' and 'juice'",
    "Say what I eat for breakfast"
  ],
  "challenge": "Tell me what you eat for breakfast!"
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🍳",
  "headline": "You did it!",
  "goal": "You can talk about breakfast!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Lunch at School
update lessons set
  title = 'Lunch at School',
  topic = 'Talk about what you eat for lunch.',
  slide_count = 9
where id = 'd3045560-ac5a-444b-a3c9-b40f20632af7';

delete from lesson_slides where lesson_id = 'd3045560-ac5a-444b-a3c9-b40f20632af7';

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
  "image_note": "Hero image for 'Lunch at School' -- children eating lunch together in a bright school cafeteria."
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
  "display": "🥪",
  "questions": [
    "Do you see food?",
    "Is it lunch time?"
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
      "word": "Sandwich"
    },
    {
      "word": "Apple"
    },
    {
      "word": "Water"
    },
    {
      "word": "Lunch box"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What's in your lunch box?"
  ],
  "student": [
    "I have a sandwich and an apple."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child opening a colorful lunch box at school."
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one is a fruit?",
  "options": [
    {
      "text": "Apple",
      "emoji": "🍎"
    },
    {
      "text": "Sandwich",
      "emoji": "🥪"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "What's in your lunch box?",
    "Do you like apples?",
    "Do you drink water at lunch?"
  ]
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
  "text": "At school, I eat a sandwich and an apple. I drink water.",
  "questions": [
    "What does the child eat?",
    "What do they drink?",
    "Is the apple a fruit?"
  ]
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'sandwich' and 'apple'",
    "Say 'water' and 'lunch box'",
    "Say what's in my lunch box"
  ],
  "challenge": "Tell me what's in your lunch box!"
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🥪",
  "headline": "You did it!",
  "goal": "You can talk about lunch!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: Dinner with My Family
update lessons set
  title = 'Dinner with My Family',
  topic = 'Talk about dinner with your family.',
  slide_count = 9
where id = '39e1541f-0c79-49c2-b9fc-90b27adefe18';

delete from lesson_slides where lesson_id = '39e1541f-0c79-49c2-b9fc-90b27adefe18';

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
  "image_note": "Hero image for 'Dinner with My Family' -- a family eating dinner together at a table, warm and happy."
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
  "display": "🍚",
  "questions": [
    "Do you see a family?",
    "Are they eating?"
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
      "word": "Rice"
    },
    {
      "word": "Chicken"
    },
    {
      "word": "Vegetables"
    },
    {
      "word": "Fork"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you eat for dinner?"
  ],
  "student": [
    "We eat rice and chicken."
  ],
  "title": "Practice the Conversation",
  "image_note": "A family sharing a dinner of rice, chicken, and vegetables."
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "We eat [rice] for dinner."
    },
    {
      "speaker": "B",
      "text": "We eat [chicken] too."
    },
    {
      "speaker": "A",
      "text": "I use a [fork]."
    }
  ],
  "blanks": [
    "rice",
    "chicken",
    "fork"
  ]
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me what your family eats for dinner!",
  "starters": [
    "We eat...",
    "I use a..."
  ]
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you eat for dinner?"
    },
    {
      "speaker": "B",
      "text": "We eat vegetables and rice."
    },
    {
      "speaker": "A",
      "text": "Sounds healthy!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'rice' and 'chicken'",
    "Say 'vegetables' and 'fork'",
    "Say what my family eats for dinner"
  ],
  "challenge": "Tell me what your family eats for dinner!"
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🍚",
  "headline": "You did it!",
  "goal": "You can talk about dinner!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Snacks and Treats
update lessons set
  title = 'Snacks and Treats',
  topic = 'Say what snacks you like and don''t like.',
  slide_count = 9
where id = 'a376f416-b9a4-49da-bc5d-0a3f3ad7a931';

delete from lesson_slides where lesson_id = 'a376f416-b9a4-49da-bc5d-0a3f3ad7a931';

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
  "image_note": "Hero image for 'Snacks and Treats' -- a colorful spread of cookies, fruit, and chips, bright and fun."
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
  "display": "🍪",
  "questions": [
    "Do you see snacks?",
    "Do you like them?"
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
      "word": "Cookie"
    },
    {
      "word": "Candy"
    },
    {
      "word": "Fruit"
    },
    {
      "word": "Chips"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Do you like cookies?"
  ],
  "student": [
    "Yes, I love cookies!"
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily eating a cookie."
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Like or Don't Like?",
  "subtitle": "Drag each one to how you feel.",
  "instruction": "Drag each snack to how you feel about it!",
  "subjective": true,
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
      "text": "Cookie",
      "emoji": "🍪",
      "bucket": 0
    },
    {
      "text": "Fruit",
      "emoji": "🍎",
      "bucket": 0
    },
    {
      "text": "Candy",
      "emoji": "🍬",
      "bucket": 1
    },
    {
      "text": "Chips",
      "emoji": "🍟",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which snack do you like better?",
  "options": [
    {
      "text": "Cookie",
      "emoji": "🍪"
    },
    {
      "text": "Fruit",
      "emoji": "🍎"
    }
  ]
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
  "text": "I like cookies and fruit. I don't like chips. My favorite is fruit!",
  "questions": [
    "What does the child like?",
    "What don't they like?",
    "What is their favorite?"
  ]
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'cookie' and 'candy'",
    "Say 'fruit' and 'chips'",
    "Say what snacks I like"
  ],
  "challenge": "Tell me three snacks you like!"
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🍪",
  "headline": "You did it!",
  "goal": "You can talk about snacks!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about breakfast, lunch, dinner, and snacks.',
  slide_count = 9
where id = 'a2cae378-0ae3-43ac-acc6-7d878cd61998';

delete from lesson_slides where lesson_id = 'a2cae378-0ae3-43ac-acc6-7d878cd61998';

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
  "image_note": "Hero image for 'Unit Review' -- a colorful table full of breakfast, lunch, dinner, and snack foods, festive and bright."
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
  "display": "🌟",
  "questions": [
    "Do you see food?",
    "Do you like it?"
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
      "word": "Eggs"
    },
    {
      "word": "Sandwich"
    },
    {
      "word": "Rice"
    },
    {
      "word": "Cookie"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me what you eat."
  ],
  "student": [
    "I eat eggs, a sandwich, and rice."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child at a table with breakfast, lunch, and dinner foods, smiling."
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  5,
  'practice',
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
      "instruction": "Match each breakfast word.",
      "pairs": [
        {
          "emoji": "🍳",
          "word": "Eggs"
        },
        {
          "emoji": "🍞",
          "word": "Toast"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one is a fruit?",
      "options": [
        {
          "text": "Apple",
          "emoji": "🍎"
        },
        {
          "text": "Sandwich",
          "emoji": "🥪"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "We eat [rice] for dinner."
        },
        {
          "speaker": "B",
          "text": "We eat [chicken] too."
        }
      ],
      "blanks": [
        "rice",
        "chicken"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Drag each snack to how you feel.",
      "subjective": true,
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
          "text": "Cookie",
          "emoji": "🍪",
          "bucket": 0
        },
        {
          "text": "Chips",
          "emoji": "🍟",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about the food you eat in a day!",
  "starters": [
    "For breakfast...",
    "For lunch...",
    "For dinner..."
  ]
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
  "text": "For breakfast, I eat eggs. For lunch, I eat a sandwich. For dinner, we eat rice and chicken. I like cookies too!",
  "questions": [
    "What does the child eat for breakfast?",
    "What do they eat for dinner?",
    "What snack do they like?"
  ]
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about breakfast",
    "Talk about lunch and dinner",
    "Say what snacks I like"
  ],
  "challenge": "Tell me everything you eat in a day!"
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about food and drinks!",
  "closing": "See you in Unit 7!"
}$json$::jsonb,
  true
);

commit;

-- ─────────────────────────────────────────────
-- UNIT 7
-- ─────────────────────────────────────────────
-- A1 Kids Unit 7: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: Clothes for School
update lessons set
  title = 'Clothes for School',
  topic = 'Name the clothes you wear to school.',
  slide_count = 9
where id = 'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af';

delete from lesson_slides where lesson_id = 'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af';

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
  "image_note": "Hero image for 'Clothes for School' -- a child in a neat school uniform, bright and tidy."
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
  "display": "👕",
  "questions": [
    "Do you see clothes?",
    "Are they for school?"
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
      "word": "Shirt"
    },
    {
      "word": "Pants"
    },
    {
      "word": "Shoes"
    },
    {
      "word": "Socks"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you wear to school?"
  ],
  "student": [
    "I wear a shirt and pants."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child getting dressed for school, putting on shoes."
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Clothes",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "👕",
      "word": "Shirt"
    },
    {
      "emoji": "👖",
      "word": "Pants"
    },
    {
      "emoji": "👟",
      "word": "Shoes"
    }
  ]
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "A child putting on their school clothes in the morning.",
  "lines": [
    {
      "speaker": "A",
      "text": "Time for school! Get dressed."
    },
    {
      "speaker": "B",
      "text": "I'm wearing my shirt and shoes."
    },
    {
      "speaker": "A",
      "text": "Don't forget your socks!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you wear to school?"
    },
    {
      "speaker": "B",
      "text": "I wear shoes and socks."
    },
    {
      "speaker": "A",
      "text": "Nice shoes!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'shirt' and 'pants'",
    "Say 'shoes' and 'socks'",
    "Say what I wear to school"
  ],
  "challenge": "Tell me what you wear to school!"
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "👕",
  "headline": "You did it!",
  "goal": "You can name school clothes!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Clothes for Playing Outside
update lessons set
  title = 'Clothes for Playing Outside',
  topic = 'Name the clothes you wear to play outside.',
  slide_count = 9
where id = '1297f89c-7946-4dbd-947d-d57ff3c6ac90';

delete from lesson_slides where lesson_id = '1297f89c-7946-4dbd-947d-d57ff3c6ac90';

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
  "image_note": "Hero image for 'Clothes for Playing Outside' -- children in jackets and sneakers playing outdoors, sunny and active."
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
  "display": "🧥",
  "questions": [
    "Do you see children?",
    "Are they playing outside?"
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
      "word": "Jacket"
    },
    {
      "word": "Shorts"
    },
    {
      "word": "Sneakers"
    },
    {
      "word": "Hat"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you wear to play outside?"
  ],
  "student": [
    "I wear a jacket and sneakers."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child in a jacket and sneakers ready to play outside."
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one do you wear on your feet?",
  "options": [
    {
      "text": "Sneakers",
      "emoji": "👟"
    },
    {
      "text": "Hat",
      "emoji": "🧢"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "What do you wear to play outside?",
    "Do you wear a hat?",
    "Do you like sneakers?"
  ]
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
  "text": "To play outside, I wear a jacket and sneakers. I wear a hat too.",
  "questions": [
    "What does the child wear?",
    "What's on their feet?",
    "What's on their head?"
  ]
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'jacket' and 'shorts'",
    "Say 'sneakers' and 'hat'",
    "Say what I wear to play"
  ],
  "challenge": "Tell me what you wear to play outside!"
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🧥",
  "headline": "You did it!",
  "goal": "You can name outdoor clothes!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: Clothes for Hot and Cold Days
update lessons set
  title = 'Clothes for Hot and Cold Days',
  topic = 'Say what you wear on hot and cold days.',
  slide_count = 9
where id = '273e4ae2-6f41-4b96-815f-4ac3241b9d25';

delete from lesson_slides where lesson_id = '273e4ae2-6f41-4b96-815f-4ac3241b9d25';

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
  "image_note": "Hero image for 'Clothes for Hot and Cold Days' -- a split scene of a child in summer clothes and a child in a winter coat."
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
  "display": "🥵",
  "questions": [
    "Do you see the sun?",
    "Is it hot?"
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
      "word": "Hot"
    },
    {
      "word": "Cold"
    },
    {
      "word": "Coat"
    },
    {
      "word": "T-shirt"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you wear on a cold day?"
  ],
  "student": [
    "I wear a coat."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child wearing a warm coat on a cold, snowy day."
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is [hot]. I wear a t-shirt."
    },
    {
      "speaker": "B",
      "text": "It is [cold]. I wear a coat."
    },
    {
      "speaker": "A",
      "text": "I like the [t-shirt] best."
    }
  ],
  "blanks": [
    "hot",
    "cold",
    "t-shirt"
  ]
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me what you wear on hot and cold days!",
  "starters": [
    "On a hot day, I wear...",
    "On a cold day, I wear..."
  ]
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you wear on a hot day?"
    },
    {
      "speaker": "B",
      "text": "I wear a t-shirt."
    },
    {
      "speaker": "A",
      "text": "That's cool!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'hot' and 'cold'",
    "Say 'coat' and 't-shirt'",
    "Say what I wear in each weather"
  ],
  "challenge": "Tell me what you wear on a hot day and a cold day!"
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🥵",
  "headline": "You did it!",
  "goal": "You can talk about weather clothes!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Favorite Clothes
update lessons set
  title = 'My Favorite Clothes',
  topic = 'Say what your favorite clothes are.',
  slide_count = 9
where id = 'fde4fca4-9cb3-4a02-be79-944de6efb90b';

delete from lesson_slides where lesson_id = 'fde4fca4-9cb3-4a02-be79-944de6efb90b';

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
  "image_note": "Hero image for 'My Favorite Clothes' -- a child proudly wearing their favorite bright-colored outfit, happy and confident."
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
  "display": "⭐",
  "questions": [
    "Do you see clothes?",
    "Do you like them?"
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
      "word": "Favorite"
    },
    {
      "word": "Color"
    },
    {
      "word": "Wear"
    },
    {
      "word": "Like"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What is your favorite thing to wear?"
  ],
  "student": [
    "My favorite is my blue shirt."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child pointing happily at their favorite blue shirt."
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Like or Don't Like?",
  "subtitle": "Drag each one to how you feel.",
  "instruction": "Drag each piece of clothing to how you feel about it!",
  "subjective": true,
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
      "text": "T-shirt",
      "emoji": "👕",
      "bucket": 0
    },
    {
      "text": "Sneakers",
      "emoji": "👟",
      "bucket": 0
    },
    {
      "text": "Hat",
      "emoji": "🧢",
      "bucket": 1
    },
    {
      "text": "Coat",
      "emoji": "🧥",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which is your favorite?",
  "options": [
    {
      "text": "T-shirt",
      "emoji": "👕"
    },
    {
      "text": "Sneakers",
      "emoji": "👟"
    }
  ]
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
  "text": "My favorite color is blue. I like to wear my blue shirt and my sneakers.",
  "questions": [
    "What is the child's favorite color?",
    "What do they like to wear?",
    "Do they like sneakers?"
  ]
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'favorite' and 'color'",
    "Say 'wear' and 'like'",
    "Say my favorite clothes"
  ],
  "challenge": "Tell me your favorite thing to wear!"
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "⭐",
  "headline": "You did it!",
  "goal": "You can talk about your favorite clothes!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about clothes for school, playing, hot and cold days, and your favorites.',
  slide_count = 9
where id = 'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e';

delete from lesson_slides where lesson_id = 'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e';

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
  "image_note": "Hero image for 'Unit Review' -- a colorful wardrobe rack with school clothes, play clothes, and weather clothes, festive."
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
  "display": "🌟",
  "questions": [
    "Do you see clothes?",
    "Are they colorful?"
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
      "word": "Shirt"
    },
    {
      "word": "Jacket"
    },
    {
      "word": "Cold"
    },
    {
      "word": "Favorite"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me what you wear."
  ],
  "student": [
    "I wear a shirt to school and a jacket outside."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child showing off different outfits for different days."
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  5,
  'practice',
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
      "instruction": "Match each clothing word.",
      "pairs": [
        {
          "emoji": "👕",
          "word": "Shirt"
        },
        {
          "emoji": "👖",
          "word": "Pants"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one do you wear on your feet?",
      "options": [
        {
          "text": "Sneakers",
          "emoji": "👟"
        },
        {
          "text": "Hat",
          "emoji": "🧢"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "It is [hot]. I wear a t-shirt."
        },
        {
          "speaker": "B",
          "text": "It is [cold]. I wear a coat."
        }
      ],
      "blanks": [
        "hot",
        "cold"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Drag each piece of clothing to how you feel.",
      "subjective": true,
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
          "text": "T-shirt",
          "emoji": "👕",
          "bucket": 0
        },
        {
          "text": "Hat",
          "emoji": "🧢",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about the clothes you wear!",
  "starters": [
    "For school, I wear...",
    "To play, I wear...",
    "My favorite is..."
  ]
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
  "text": "For school, I wear a shirt and pants. To play, I wear a jacket and sneakers. My favorite is my blue shirt.",
  "questions": [
    "What does the child wear to school?",
    "What do they wear to play?",
    "What is their favorite?"
  ]
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about school clothes",
    "Talk about outside clothes",
    "Say my favorite clothes"
  ],
  "challenge": "Tell me about your clothes for school, play, and your favorite outfit!"
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about what you wear!",
  "closing": "See you in Unit 8!"
}$json$::jsonb,
  true
);

commit;

-- ─────────────────────────────────────────────
-- UNIT 8
-- ─────────────────────────────────────────────
-- A1 Kids Unit 8: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: Toys in My Room
update lessons set
  title = 'Toys in My Room',
  topic = 'Name the toys in your room.',
  slide_count = 9
where id = 'eb13ccdf-4647-4417-b635-eceb33696e8b';

delete from lesson_slides where lesson_id = 'eb13ccdf-4647-4417-b635-eceb33696e8b';

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
  "image_note": "Hero image for 'Toys in My Room' -- a colorful pile of toys including a ball, doll, blocks, and a toy car."
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
  "display": "🧸",
  "questions": [
    "Do you see toys?",
    "Are they colorful?"
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
      "word": "Ball"
    },
    {
      "word": "Doll"
    },
    {
      "word": "Blocks"
    },
    {
      "word": "Car"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What toys do you have?"
  ],
  "student": [
    "I have a ball and blocks."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child playing with blocks and a toy car on the floor."
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Toys",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "⚽",
      "word": "Ball"
    },
    {
      "emoji": "🪆",
      "word": "Doll"
    },
    {
      "emoji": "🧱",
      "word": "Blocks"
    }
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "A child sharing their toys with a friend.",
  "lines": [
    {
      "speaker": "A",
      "text": "Can I play with your ball?"
    },
    {
      "speaker": "B",
      "text": "Yes! Here you go."
    },
    {
      "speaker": "A",
      "text": "Thank you!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What toys do you have?"
    },
    {
      "speaker": "B",
      "text": "I have a car and blocks."
    },
    {
      "speaker": "A",
      "text": "Let's play!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'ball' and 'doll'",
    "Say 'blocks' and 'car'",
    "Say what toys I have"
  ],
  "challenge": "Tell me your favorite toy!"
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🧸",
  "headline": "You did it!",
  "goal": "You can name your toys!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Games I Play at Home
update lessons set
  title = 'Games I Play at Home',
  topic = 'Talk about games you play at home.',
  slide_count = 9
where id = '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3';

delete from lesson_slides where lesson_id = '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3';

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
  "image_note": "Hero image for 'Games I Play at Home' -- a child playing a puzzle and a board game at a table, cozy and fun."
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
  "display": "🧩",
  "questions": [
    "Do you see a game?",
    "Is it fun?"
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
      "word": "Puzzle"
    },
    {
      "word": "Cards"
    },
    {
      "word": "Video game"
    },
    {
      "word": "Board game"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What games do you play at home?"
  ],
  "student": [
    "I play puzzles and board games."
  ],
  "title": "Practice the Conversation",
  "image_note": "A family playing a board game together at home."
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one has pieces that fit together?",
  "options": [
    {
      "text": "Puzzle",
      "emoji": "🧩"
    },
    {
      "text": "Cards",
      "emoji": "🃏"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "What games do you play at home?",
    "Do you like puzzles?",
    "Do you play video games?"
  ]
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
  "text": "At home, I play puzzles and board games. I like cards too!",
  "questions": [
    "What games does the child play?",
    "Do they like cards?",
    "Where do they play?"
  ]
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'puzzle' and 'cards'",
    "Say 'video game' and 'board game'",
    "Say what games I play"
  ],
  "challenge": "Tell me what games you play at home!"
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🧩",
  "headline": "You did it!",
  "goal": "You can talk about home games!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: Games I Play at School
update lessons set
  title = 'Games I Play at School',
  topic = 'Talk about games you play at school.',
  slide_count = 9
where id = 'a98e85f0-872b-4767-976c-4a3ba9179342';

delete from lesson_slides where lesson_id = 'a98e85f0-872b-4767-976c-4a3ba9179342';

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
  "image_note": "Hero image for 'Games I Play at School' -- children playing tag and jump rope on a school playground, active and fun."
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
  "display": "🏃",
  "questions": [
    "Do you see children?",
    "Are they running?"
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
      "word": "Tag"
    },
    {
      "word": "Hide and seek"
    },
    {
      "word": "Jump rope"
    },
    {
      "word": "Race"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you play at school?"
  ],
  "student": [
    "I play tag with my friends."
  ],
  "title": "Practice the Conversation",
  "image_note": "Children playing tag together on the playground, laughing."
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "Let's play [tag]!"
    },
    {
      "speaker": "B",
      "text": "I like [jump rope] too."
    },
    {
      "speaker": "A",
      "text": "Let's have a [race]!"
    }
  ],
  "blanks": [
    "tag",
    "jump rope",
    "race"
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me what games you play at school!",
  "starters": [
    "I play...",
    "I like..."
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you play at school?"
    },
    {
      "speaker": "B",
      "text": "I play hide and seek."
    },
    {
      "speaker": "A",
      "text": "Let's play together!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'tag' and 'hide and seek'",
    "Say 'jump rope' and 'race'",
    "Say what I play at school"
  ],
  "challenge": "Tell me one game you play at school!"
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🏃",
  "headline": "You did it!",
  "goal": "You can talk about school games!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Fun Activities with Friends
update lessons set
  title = 'Fun Activities with Friends',
  topic = 'Say what fun activities you like to do with friends.',
  slide_count = 9
where id = '7609619a-462c-4485-99d3-5e33724e18ad';

delete from lesson_slides where lesson_id = '7609619a-462c-4485-99d3-5e33724e18ad';

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
  "image_note": "Hero image for 'Fun Activities with Friends' -- a group of children laughing and playing together in a park, joyful and bright."
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
  "display": "🎉",
  "questions": [
    "Do you see friends?",
    "Are they happy?"
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
      "word": "Fun"
    },
    {
      "word": "Friend"
    },
    {
      "word": "Play"
    },
    {
      "word": "Together"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you like to do with friends?"
  ],
  "student": [
    "I like to play together."
  ],
  "title": "Practice the Conversation",
  "image_note": "A group of friends playing a game together, all smiling."
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Like or Don't Like?",
  "subtitle": "Drag each one to how you feel.",
  "instruction": "Drag each activity to how you feel about it!",
  "subjective": true,
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
      "text": "Playing tag",
      "emoji": "🏃",
      "bucket": 0
    },
    {
      "text": "Board games",
      "emoji": "🎲",
      "bucket": 0
    },
    {
      "text": "Sharing toys",
      "emoji": "🧸",
      "bucket": 1
    },
    {
      "text": "Waiting my turn",
      "emoji": "⏳",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which is more fun with friends?",
  "options": [
    {
      "text": "Playing tag",
      "emoji": "🏃"
    },
    {
      "text": "Board games",
      "emoji": "🎲"
    }
  ]
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
  "text": "I like to play with my friends. We play tag and board games together. It is fun!",
  "questions": [
    "Who does the child play with?",
    "What do they play?",
    "Is it fun?"
  ]
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'fun' and 'friend'",
    "Say 'play' and 'together'",
    "Say what I like to do with friends"
  ],
  "challenge": "Tell me one fun thing you do with your friends!"
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🎉",
  "headline": "You did it!",
  "goal": "You can talk about fun with friends!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about toys, home games, school games, and fun with friends.',
  slide_count = 9
where id = 'bd117b4f-5984-49ad-9fc4-5df329dea81b';

delete from lesson_slides where lesson_id = 'bd117b4f-5984-49ad-9fc4-5df329dea81b';

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
  "image_note": "Hero image for 'Unit Review' -- a joyful scene of children playing with toys and games together, festive and colorful."
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
  "display": "🌟",
  "questions": [
    "Do you see toys?",
    "Are children playing?"
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
      "word": "Ball"
    },
    {
      "word": "Puzzle"
    },
    {
      "word": "Tag"
    },
    {
      "word": "Friend"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me what you like to play."
  ],
  "student": [
    "I play with a ball and I play tag with friends."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily describing all their favorite games and toys."
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  5,
  'practice',
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
      "instruction": "Match each toy word.",
      "pairs": [
        {
          "emoji": "⚽",
          "word": "Ball"
        },
        {
          "emoji": "🪆",
          "word": "Doll"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one has pieces that fit together?",
      "options": [
        {
          "text": "Puzzle",
          "emoji": "🧩"
        },
        {
          "text": "Cards",
          "emoji": "🃏"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "Let's play [tag]!"
        },
        {
          "speaker": "B",
          "text": "I like [jump rope] too."
        }
      ],
      "blanks": [
        "tag",
        "jump rope"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Drag each activity to how you feel.",
      "subjective": true,
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
          "text": "Playing tag",
          "emoji": "🏃",
          "bucket": 0
        },
        {
          "text": "Waiting my turn",
          "emoji": "⏳",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about your toys and games!",
  "starters": [
    "I have...",
    "I play...",
    "With my friends, I..."
  ]
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
  "text": "I have a ball and blocks. At home, I play board games. At school, I play tag. I love playing with my friends!",
  "questions": [
    "What toys does the child have?",
    "What do they play at home?",
    "What do they play at school?"
  ]
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name my toys",
    "Talk about games at home and school",
    "Say what's fun with friends"
  ],
  "challenge": "Tell me about your toys, your games, and your friends!"
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about toys, games, and fun!",
  "closing": "See you in Unit 9!"
}$json$::jsonb,
  true
);

commit;

-- ─────────────────────────────────────────────
-- UNIT 9
-- ─────────────────────────────────────────────
-- A1 Kids Unit 9: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: Pets at Home
update lessons set
  title = 'Pets at Home',
  topic = 'Name the pets you have or like.',
  slide_count = 9
where id = 'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1';

delete from lesson_slides where lesson_id = 'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1';

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
  "image_note": "Hero image for 'Pets at Home' -- a happy child playing with a dog and a cat at home, bright and warm."
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
  "display": "🐶",
  "questions": [
    "Do you see an animal?",
    "Is it a pet?"
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
      "word": "Dog"
    },
    {
      "word": "Cat"
    },
    {
      "word": "Fish"
    },
    {
      "word": "Bird"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Do you have a pet?"
  ],
  "student": [
    "Yes, I have a dog."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child hugging their pet dog happily."
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Pets",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "🐶",
      "word": "Dog"
    },
    {
      "emoji": "🐱",
      "word": "Cat"
    },
    {
      "emoji": "🐟",
      "word": "Fish"
    }
  ]
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "A child introducing their pet to a friend.",
  "lines": [
    {
      "speaker": "A",
      "text": "Do you have a pet?"
    },
    {
      "speaker": "B",
      "text": "Yes, I have a cat!"
    },
    {
      "speaker": "A",
      "text": "Can I see her?"
    }
  ]
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you have a pet?"
    },
    {
      "speaker": "B",
      "text": "I have a bird."
    },
    {
      "speaker": "A",
      "text": "That's cool!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'dog' and 'cat'",
    "Say 'fish' and 'bird'",
    "Say what pet I have or like"
  ],
  "challenge": "Tell me about a pet you have or like!"
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🐶",
  "headline": "You did it!",
  "goal": "You can talk about pets!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Animals on the Farm
update lessons set
  title = 'Animals on the Farm',
  topic = 'Name farm animals.',
  slide_count = 9
where id = 'cb31604a-47f4-4abd-ab75-24892e046ef8';

delete from lesson_slides where lesson_id = 'cb31604a-47f4-4abd-ab75-24892e046ef8';

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
  "image_note": "Hero image for 'Animals on the Farm' -- a sunny farm with a cow, pig, horse, and sheep in a green field."
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
  "display": "🐄",
  "questions": [
    "Do you see a farm?",
    "Do you see animals?"
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
      "word": "Cow"
    },
    {
      "word": "Pig"
    },
    {
      "word": "Horse"
    },
    {
      "word": "Sheep"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What animals are on the farm?"
  ],
  "student": [
    "I see a cow and a pig."
  ],
  "title": "Practice the Conversation",
  "image_note": "A cow and a pig standing together in a green farm field."
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which animal do we ride?",
  "options": [
    {
      "text": "Horse",
      "emoji": "🐴"
    },
    {
      "text": "Pig",
      "emoji": "🐷"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "What farm animals do you know?",
    "Do you like cows?",
    "Have you seen a sheep?"
  ]
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
  "text": "On the farm, I see a cow, a pig, and a horse. There are sheep too!",
  "questions": [
    "What animals are on the farm?",
    "Is there a horse?",
    "Are there sheep?"
  ]
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'cow' and 'pig'",
    "Say 'horse' and 'sheep'",
    "Name farm animals"
  ],
  "challenge": "Tell me three farm animals!"
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🐄",
  "headline": "You did it!",
  "goal": "You can name farm animals!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: Animals at the Zoo
update lessons set
  title = 'Animals at the Zoo',
  topic = 'Name animals you see at the zoo.',
  slide_count = 9
where id = 'a85aa8c7-2132-4899-843c-075b53375ada';

delete from lesson_slides where lesson_id = 'a85aa8c7-2132-4899-843c-075b53375ada';

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
  "image_note": "Hero image for 'Animals at the Zoo' -- a lion, an elephant, and a giraffe at a colorful zoo, bright and exciting."
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
  "display": "🦁",
  "questions": [
    "Do you see a zoo?",
    "Do you see animals?"
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
      "word": "Lion"
    },
    {
      "word": "Elephant"
    },
    {
      "word": "Monkey"
    },
    {
      "word": "Giraffe"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you see at the zoo?"
  ],
  "student": [
    "I see a lion and an elephant."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child pointing excitedly at a lion at the zoo."
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "Look, a [lion]!"
    },
    {
      "speaker": "B",
      "text": "I see a [monkey] too!"
    },
    {
      "speaker": "A",
      "text": "The [giraffe] is so tall!"
    }
  ],
  "blanks": [
    "lion",
    "monkey",
    "giraffe"
  ]
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me about the animals at the zoo!",
  "starters": [
    "I see...",
    "My favorite is..."
  ]
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you see at the zoo?"
    },
    {
      "speaker": "B",
      "text": "I see a giraffe."
    },
    {
      "speaker": "A",
      "text": "It's so tall!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'lion' and 'elephant'",
    "Say 'monkey' and 'giraffe'",
    "Name zoo animals"
  ],
  "challenge": "Tell me your favorite zoo animal!"
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🦁",
  "headline": "You did it!",
  "goal": "You can name zoo animals!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: What Animals Can Do
update lessons set
  title = 'What Animals Can Do',
  topic = 'Say what different animals can do.',
  slide_count = 9
where id = 'ff3e2ee9-3042-4dbe-9251-983dacd552ef';

delete from lesson_slides where lesson_id = 'ff3e2ee9-3042-4dbe-9251-983dacd552ef';

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
  "image_note": "Hero image for 'What Animals Can Do' -- a bird flying, a fish swimming, and a dog running, bright and dynamic."
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
  "display": "🐦",
  "questions": [
    "Do you see a bird?",
    "Can it fly?"
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
      "word": "Jump"
    },
    {
      "word": "Swim"
    },
    {
      "word": "Fly"
    },
    {
      "word": "Run"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What can a bird do?"
  ],
  "student": [
    "A bird can fly."
  ],
  "title": "Practice the Conversation",
  "image_note": "A bird flying high in a blue sky."
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Can It Fly?",
  "subtitle": "Drag each animal to the right place.",
  "instruction": "Can this animal fly?",
  "buckets": [
    {
      "label": "Can Fly",
      "emoji": "🕊️"
    },
    {
      "label": "Can't Fly",
      "emoji": "🚫"
    }
  ],
  "items": [
    {
      "text": "Bird",
      "emoji": "🐦",
      "bucket": 0
    },
    {
      "text": "Butterfly",
      "emoji": "🦋",
      "bucket": 0
    },
    {
      "text": "Fish",
      "emoji": "🐟",
      "bucket": 1
    },
    {
      "text": "Dog",
      "emoji": "🐶",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which animal can swim?",
  "options": [
    {
      "text": "Fish",
      "emoji": "🐟"
    },
    {
      "text": "Bird",
      "emoji": "🐦"
    }
  ]
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
  "text": "A bird can fly. A fish can swim. A dog can run and jump.",
  "questions": [
    "What can a bird do?",
    "What can a fish do?",
    "What can a dog do?"
  ]
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'jump' and 'swim'",
    "Say 'fly' and 'run'",
    "Say what animals can do"
  ],
  "challenge": "Tell me what your favorite animal can do!"
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🐦",
  "headline": "You did it!",
  "goal": "You can talk about what animals can do!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about pets, farm animals, zoo animals, and what animals can do.',
  slide_count = 9
where id = 'c4f9daf6-d594-408b-8320-93779a89262a';

delete from lesson_slides where lesson_id = 'c4f9daf6-d594-408b-8320-93779a89262a';

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
  "image_note": "Hero image for 'Unit Review' -- a joyful mix of pets, farm animals, and zoo animals together, festive and colorful."
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
  "display": "🌟",
  "questions": [
    "Do you see animals?",
    "Are there many?"
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
      "word": "Dog"
    },
    {
      "word": "Cow"
    },
    {
      "word": "Lion"
    },
    {
      "word": "Fly"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me about animals."
  ],
  "student": [
    "I have a dog. I saw a lion at the zoo."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily talking about all the animals they know."
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  5,
  'practice',
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
      "instruction": "Match each pet word.",
      "pairs": [
        {
          "emoji": "🐶",
          "word": "Dog"
        },
        {
          "emoji": "🐱",
          "word": "Cat"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which animal do we ride?",
      "options": [
        {
          "text": "Horse",
          "emoji": "🐴"
        },
        {
          "text": "Pig",
          "emoji": "🐷"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "Look, a [lion]!"
        },
        {
          "speaker": "B",
          "text": "I see a [monkey] too!"
        }
      ],
      "blanks": [
        "lion",
        "monkey"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Can this animal fly?",
      "buckets": [
        {
          "label": "Can Fly",
          "emoji": "🕊️"
        },
        {
          "label": "Can't Fly",
          "emoji": "🚫"
        }
      ],
      "items": [
        {
          "text": "Bird",
          "emoji": "🐦",
          "bucket": 0
        },
        {
          "text": "Fish",
          "emoji": "🐟",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about animals you know!",
  "starters": [
    "I have a...",
    "At the zoo, I saw...",
    "A ___ can..."
  ]
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
  "text": "I have a dog at home. On the farm, I saw a cow. At the zoo, I saw a lion. Birds can fly!",
  "questions": [
    "What pet does the child have?",
    "What did they see on the farm?",
    "What did they see at the zoo?"
  ]
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name pets and farm animals",
    "Name zoo animals",
    "Say what animals can do"
  ],
  "challenge": "Tell me about your favorite animals and what they can do!"
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about animals!",
  "closing": "See you in Unit 10!"
}$json$::jsonb,
  true
);

commit;

-- ─────────────────────────────────────────────
-- UNIT 10
-- ─────────────────────────────────────────────
-- A1 Kids Unit 10: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: Weather Today
update lessons set
  title = 'Weather Today',
  topic = 'Say what the weather is like today.',
  slide_count = 9
where id = 'd1e596f4-f445-48cf-ae0d-9af8f68b186d';

delete from lesson_slides where lesson_id = 'd1e596f4-f445-48cf-ae0d-9af8f68b186d';

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
  "image_note": "Hero image for 'Weather Today' -- a bright sky with a sun and a few clouds, cheerful and simple."
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
    "Do you see the sun?",
    "Is it sunny?"
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
      "word": "Sunny"
    },
    {
      "word": "Rainy"
    },
    {
      "word": "Cloudy"
    },
    {
      "word": "Windy"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "How's the weather today?"
  ],
  "student": [
    "It's sunny today."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child looking out the window at a sunny day."
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Weather",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "☀️",
      "word": "Sunny"
    },
    {
      "emoji": "🌧️",
      "word": "Rainy"
    },
    {
      "emoji": "☁️",
      "word": "Cloudy"
    }
  ]
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "Two children looking out the window checking the weather.",
  "lines": [
    {
      "speaker": "A",
      "text": "How's the weather?"
    },
    {
      "speaker": "B",
      "text": "It's rainy today."
    },
    {
      "speaker": "A",
      "text": "Bring an umbrella!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How's the weather today?"
    },
    {
      "speaker": "B",
      "text": "It's windy."
    },
    {
      "speaker": "A",
      "text": "Hold your hat!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'sunny' and 'rainy'",
    "Say 'cloudy' and 'windy'",
    "Say today's weather"
  ],
  "challenge": "Tell me what the weather is like today!"
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "☀️",
  "headline": "You did it!",
  "goal": "You can talk about today's weather!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Weather in Different Places
update lessons set
  title = 'Weather in Different Places',
  topic = 'Talk about weather in different places.',
  slide_count = 9
where id = '4c52bedc-2b09-4628-9912-c5aa7b749ec6';

delete from lesson_slides where lesson_id = '4c52bedc-2b09-4628-9912-c5aa7b749ec6';

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
  "image_note": "Hero image for 'Weather in Different Places' -- a split scene of a snowy mountain and a sunny desert, bright and colorful."
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
  "display": "🌍",
  "questions": [
    "Do you see snow?",
    "Do you see sand?"
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
      "word": "Hot place"
    },
    {
      "word": "Cold place"
    },
    {
      "word": "Snow"
    },
    {
      "word": "Desert"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Is it hot or cold there?"
  ],
  "student": [
    "It's cold, there is snow."
  ],
  "title": "Practice the Conversation",
  "image_note": "A snowy mountain landscape, cold and white."
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Where do you find snow?",
  "options": [
    {
      "text": "Cold place",
      "emoji": "❄️"
    },
    {
      "text": "Desert",
      "emoji": "🏜️"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "Do you live in a hot or cold place?",
    "Have you seen snow?",
    "Have you seen a desert?"
  ]
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
  "text": "Some places are hot, like the desert. Some places are cold, with lots of snow.",
  "questions": [
    "What is the desert like?",
    "What is a cold place like?",
    "Is there snow in the desert?"
  ]
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'hot place' and 'cold place'",
    "Say 'snow' and 'desert'",
    "Talk about different weather places"
  ],
  "challenge": "Tell me about a hot place and a cold place!"
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌍",
  "headline": "You did it!",
  "goal": "You can talk about weather in different places!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: What I Do in Each Season
update lessons set
  title = 'What I Do in Each Season',
  topic = 'Say what you do in each season.',
  slide_count = 9
where id = 'b12a03b8-9579-436d-89a6-10f92bf2f072';

delete from lesson_slides where lesson_id = 'b12a03b8-9579-436d-89a6-10f92bf2f072';

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
  "image_note": "Hero image for 'What I Do in Each Season' -- a four-panel scene of summer, winter, spring, and fall activities, bright and cheerful."
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
  "display": "🍂",
  "questions": [
    "Do you see leaves?",
    "What season is it?"
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
      "word": "Summer"
    },
    {
      "word": "Winter"
    },
    {
      "word": "Spring"
    },
    {
      "word": "Fall"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you do in summer?"
  ],
  "student": [
    "I swim in summer."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child swimming happily in a pool in summer."
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "In [summer], I swim."
    },
    {
      "speaker": "B",
      "text": "In [winter], I play in the snow."
    },
    {
      "speaker": "A",
      "text": "In [spring], flowers grow."
    }
  ],
  "blanks": [
    "summer",
    "winter",
    "spring"
  ]
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me what you do in each season!",
  "starters": [
    "In summer, I...",
    "In winter, I..."
  ]
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do in fall?"
    },
    {
      "speaker": "B",
      "text": "I jump in the leaves!"
    },
    {
      "speaker": "A",
      "text": "That sounds fun!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'summer' and 'winter'",
    "Say 'spring' and 'fall'",
    "Say what I do in each season"
  ],
  "challenge": "Tell me what you do in your favorite season!"
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🍂",
  "headline": "You did it!",
  "goal": "You can talk about the seasons!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Clothes for Different Weather
update lessons set
  title = 'Clothes for Different Weather',
  topic = 'Say what clothes you like for different weather.',
  slide_count = 9
where id = 'f24f4419-828e-41f6-bbcf-9edf960084c7';

delete from lesson_slides where lesson_id = 'f24f4419-828e-41f6-bbcf-9edf960084c7';

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
  "image_note": "Hero image for 'Clothes for Different Weather' -- an umbrella, boots, sunglasses, and a scarf laid out together, colorful."
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
  "display": "☂️",
  "questions": [
    "Do you see an umbrella?",
    "Is it raining?"
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
      "word": "Umbrella"
    },
    {
      "word": "Boots"
    },
    {
      "word": "Sunglasses"
    },
    {
      "word": "Scarf"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you wear when it rains?"
  ],
  "student": [
    "I wear boots and use an umbrella."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child wearing boots and holding an umbrella in the rain."
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Like or Don't Like?",
  "subtitle": "Drag each one to how you feel.",
  "instruction": "Drag each item to how you feel about it!",
  "subjective": true,
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
      "text": "Sunglasses",
      "emoji": "🕶️",
      "bucket": 0
    },
    {
      "text": "Boots",
      "emoji": "👢",
      "bucket": 0
    },
    {
      "text": "Umbrella",
      "emoji": "☂️",
      "bucket": 1
    },
    {
      "text": "Scarf",
      "emoji": "🧣",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which do you like more?",
  "options": [
    {
      "text": "Sunglasses",
      "emoji": "🕶️"
    },
    {
      "text": "Scarf",
      "emoji": "🧣"
    }
  ]
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
  "text": "When it rains, I wear boots and use an umbrella. When it's sunny, I wear sunglasses.",
  "questions": [
    "What does the child wear in the rain?",
    "What do they wear in the sun?",
    "Do they use an umbrella?"
  ]
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'umbrella' and 'boots'",
    "Say 'sunglasses' and 'scarf'",
    "Say weather clothes I like"
  ],
  "challenge": "Tell me what you wear for rainy or sunny weather!"
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "☂️",
  "headline": "You did it!",
  "goal": "You can talk about weather clothes!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about weather, seasons, and weather clothes.',
  slide_count = 9
where id = '8293d8ea-67d2-4f86-92b1-09bab71bdeec';

delete from lesson_slides where lesson_id = '8293d8ea-67d2-4f86-92b1-09bab71bdeec';

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
  "image_note": "Hero image for 'Unit Review' -- a fun scene showing sun, rain, snow, and falling leaves together, festive and bright."
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
  "display": "🌟",
  "questions": [
    "Do you see weather?",
    "Is it sunny or rainy?"
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
      "word": "Sunny"
    },
    {
      "word": "Snow"
    },
    {
      "word": "Summer"
    },
    {
      "word": "Umbrella"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me about the weather."
  ],
  "student": [
    "It's sunny. In summer, I swim."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child cheerfully describing the weather and seasons."
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  5,
  'practice',
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
      "instruction": "Match each weather word.",
      "pairs": [
        {
          "emoji": "☀️",
          "word": "Sunny"
        },
        {
          "emoji": "🌧️",
          "word": "Rainy"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Where do you find snow?",
      "options": [
        {
          "text": "Cold place",
          "emoji": "❄️"
        },
        {
          "text": "Desert",
          "emoji": "🏜️"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "In [summer], I swim."
        },
        {
          "speaker": "B",
          "text": "In [winter], I play in the snow."
        }
      ],
      "blanks": [
        "summer",
        "winter"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Drag each item to how you feel.",
      "subjective": true,
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
          "text": "Sunglasses",
          "emoji": "🕶️",
          "bucket": 0
        },
        {
          "text": "Scarf",
          "emoji": "🧣",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about weather and seasons!",
  "starters": [
    "Today it's...",
    "In summer, I...",
    "I wear..."
  ]
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
  "text": "Today it's sunny. In summer, I swim. In winter, there is snow. I wear boots when it rains.",
  "questions": [
    "What's the weather today?",
    "What does the child do in summer?",
    "What do they wear in the rain?"
  ]
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about today's weather",
    "Talk about the seasons",
    "Say weather clothes I like"
  ],
  "challenge": "Tell me about the weather, the seasons, and what you wear!"
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about weather and seasons!",
  "closing": "See you in Unit 11!"
}$json$::jsonb,
  true
);

commit;

-- ─────────────────────────────────────────────
-- UNIT 11
-- ─────────────────────────────────────────────
-- A1 Kids Unit 11: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: Places in My Town
update lessons set
  title = 'Places in My Town',
  topic = 'Name places in your town.',
  slide_count = 9
where id = '767489e9-523b-4a6a-929e-df71f887ea40';

delete from lesson_slides where lesson_id = '767489e9-523b-4a6a-929e-df71f887ea40';

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
  "image_note": "Hero image for 'Places in My Town' -- a colorful town street with a store, a park, and a library, bright and friendly."
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
  "display": "🏙️",
  "questions": [
    "Do you see a town?",
    "Do you see buildings?"
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
      "word": "Store"
    },
    {
      "word": "Park"
    },
    {
      "word": "Library"
    },
    {
      "word": "Hospital"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What places are in your town?"
  ],
  "student": [
    "There is a park and a store."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child pointing at a park and a store in their town."
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Places",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "🏪",
      "word": "Store"
    },
    {
      "emoji": "🏞️",
      "word": "Park"
    },
    {
      "emoji": "📚",
      "word": "Library"
    }
  ]
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "Two children walking together to the park.",
  "lines": [
    {
      "speaker": "A",
      "text": "Where are we going?"
    },
    {
      "speaker": "B",
      "text": "To the park!"
    },
    {
      "speaker": "A",
      "text": "Yay, let's go!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What places are in your town?"
    },
    {
      "speaker": "B",
      "text": "There is a library."
    },
    {
      "speaker": "A",
      "text": "I love books!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'store' and 'park'",
    "Say 'library' and 'hospital'",
    "Name places in my town"
  ],
  "challenge": "Tell me three places in your town!"
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🏙️",
  "headline": "You did it!",
  "goal": "You can name places in your town!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Going to School and Home
update lessons set
  title = 'Going to School and Home',
  topic = 'Talk about how you go to school and home.',
  slide_count = 9
where id = '34e3247f-aafd-44f2-9fc8-4af5943db419';

delete from lesson_slides where lesson_id = '34e3247f-aafd-44f2-9fc8-4af5943db419';

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
  "image_note": "Hero image for 'Going to School and Home' -- children walking, riding a bike, and taking a bus to school, bright and busy."
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
  "display": "🚌",
  "questions": [
    "Do you see a bus?",
    "Are children going to school?"
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
      "word": "Walk"
    },
    {
      "word": "Bus"
    },
    {
      "word": "Car"
    },
    {
      "word": "Bike"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "How do you go to school?"
  ],
  "student": [
    "I go by bus."
  ],
  "title": "Practice the Conversation",
  "image_note": "A yellow school bus picking up children."
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one has two wheels?",
  "options": [
    {
      "text": "Bike",
      "emoji": "🚲"
    },
    {
      "text": "Bus",
      "emoji": "🚌"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "How do you go to school?",
    "Do you walk home?",
    "Do you have a bike?"
  ]
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
  "text": "I go to school by bus. I walk home. My friend rides a bike.",
  "questions": [
    "How does the child go to school?",
    "How do they go home?",
    "How does their friend travel?"
  ]
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'walk' and 'bus'",
    "Say 'car' and 'bike'",
    "Say how I go to school"
  ],
  "challenge": "Tell me how you go to school!"
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🚌",
  "headline": "You did it!",
  "goal": "You can talk about going to school!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: Going to the Park or Playground
update lessons set
  title = 'Going to the Park or Playground',
  topic = 'Talk about playing at the park.',
  slide_count = 9
where id = '51b0dedb-6e29-4c0a-9379-aec412b7e36b';

delete from lesson_slides where lesson_id = '51b0dedb-6e29-4c0a-9379-aec412b7e36b';

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
  "image_note": "Hero image for 'Going to the Park or Playground' -- children playing on a slide and swings at a colorful playground."
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
  "display": "🛝",
  "questions": [
    "Do you see a playground?",
    "Are children playing?"
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
      "word": "Slide"
    },
    {
      "word": "Swing"
    },
    {
      "word": "Sandbox"
    },
    {
      "word": "Bench"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you play on at the park?"
  ],
  "student": [
    "I play on the slide and swing."
  ],
  "title": "Practice the Conversation",
  "image_note": "A happy child going down a slide at the playground."
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "I go down the [slide]."
    },
    {
      "speaker": "B",
      "text": "I like the [swing]."
    },
    {
      "speaker": "A",
      "text": "Let's dig in the [sandbox]!"
    }
  ],
  "blanks": [
    "slide",
    "swing",
    "sandbox"
  ]
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me what you play on at the park!",
  "starters": [
    "I play on...",
    "I like the..."
  ]
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you play on at the park?"
    },
    {
      "speaker": "B",
      "text": "I play on the swing."
    },
    {
      "speaker": "A",
      "text": "Let's swing together!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'slide' and 'swing'",
    "Say 'sandbox' and 'bench'",
    "Say what I play on"
  ],
  "challenge": "Tell me what you play on at the park!"
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🛝",
  "headline": "You did it!",
  "goal": "You can talk about the playground!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Place I Like to Visit
update lessons set
  title = 'A Place I Like to Visit',
  topic = 'Say what place you like to visit.',
  slide_count = 9
where id = 'eb67730b-ba79-4b4a-9db5-97c3100c48f7';

delete from lesson_slides where lesson_id = 'eb67730b-ba79-4b4a-9db5-97c3100c48f7';

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
  "image_note": "Hero image for 'A Place I Like to Visit' -- a family on a fun outing to a park or beach, joyful and bright."
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
  "display": "🗺️",
  "questions": [
    "Do you see a place?",
    "Do you like it?"
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
      "word": "Visit"
    },
    {
      "word": "Favorite place"
    },
    {
      "word": "Fun"
    },
    {
      "word": "Trip"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What place do you like to visit?"
  ],
  "student": [
    "I like to visit the park."
  ],
  "title": "Practice the Conversation",
  "image_note": "A family enjoying a fun trip to the park together."
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Like or Don't Like?",
  "subtitle": "Drag each one to how you feel.",
  "instruction": "Drag each place to how you feel about it!",
  "subjective": true,
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
      "text": "Park",
      "emoji": "🏞️",
      "bucket": 0
    },
    {
      "text": "Library",
      "emoji": "📚",
      "bucket": 0
    },
    {
      "text": "Hospital",
      "emoji": "🏥",
      "bucket": 1
    },
    {
      "text": "Store",
      "emoji": "🏪",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which place do you like to visit more?",
  "options": [
    {
      "text": "Park",
      "emoji": "🏞️"
    },
    {
      "text": "Library",
      "emoji": "📚"
    }
  ]
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
  "text": "I like to visit the park. It is fun. We go on a trip every weekend.",
  "questions": [
    "What place does the child like?",
    "Is it fun?",
    "When do they go?"
  ]
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'visit' and 'favorite place'",
    "Say 'fun' and 'trip'",
    "Say a place I like to visit"
  ],
  "challenge": "Tell me a place you like to visit!"
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🗺️",
  "headline": "You did it!",
  "goal": "You can talk about places you like!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about places in town, going to school, the playground, and a place you like.',
  slide_count = 9
where id = '4b9c1a1f-dd94-482c-8a9f-8e207946379b';

delete from lesson_slides where lesson_id = '4b9c1a1f-dd94-482c-8a9f-8e207946379b';

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
  "image_note": "Hero image for 'Unit Review' -- a busy, happy town scene with a school, a park, and shops, festive and colorful."
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
  "display": "🌟",
  "questions": [
    "Do you see a town?",
    "Are people out and about?"
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
      "word": "Park"
    },
    {
      "word": "Bus"
    },
    {
      "word": "Slide"
    },
    {
      "word": "Visit"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me about your town."
  ],
  "student": [
    "I go to school by bus. I like to visit the park."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily describing their town and favorite places."
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  5,
  'practice',
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
      "instruction": "Match each place word.",
      "pairs": [
        {
          "emoji": "🏪",
          "word": "Store"
        },
        {
          "emoji": "🏞️",
          "word": "Park"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one has two wheels?",
      "options": [
        {
          "text": "Bike",
          "emoji": "🚲"
        },
        {
          "text": "Bus",
          "emoji": "🚌"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "I go down the [slide]."
        },
        {
          "speaker": "B",
          "text": "I like the [swing]."
        }
      ],
      "blanks": [
        "slide",
        "swing"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Drag each place to how you feel.",
      "subjective": true,
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
          "text": "Park",
          "emoji": "🏞️",
          "bucket": 0
        },
        {
          "text": "Hospital",
          "emoji": "🏥",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about the places you go!",
  "starters": [
    "In my town...",
    "I go to school by...",
    "I like to visit..."
  ]
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
  "text": "In my town, there is a park and a store. I go to school by bus. I like to visit the park with my family.",
  "questions": [
    "What places are in the town?",
    "How does the child go to school?",
    "What place do they like to visit?"
  ]
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name places in my town",
    "Say how I go to school",
    "Say a place I like to visit"
  ],
  "challenge": "Tell me about your town and your favorite place!"
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about places you go!",
  "closing": "See you in Unit 12!"
}$json$::jsonb,
  true
);

commit;

-- ─────────────────────────────────────────────
-- UNIT 12
-- ─────────────────────────────────────────────
-- A1 Kids Unit 12: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: Things I Like to Do
update lessons set
  title = 'Things I Like to Do',
  topic = 'Say the hobbies you like to do.',
  slide_count = 9
where id = '194b7b20-12e0-494c-bcb2-b046863af2ce';

delete from lesson_slides where lesson_id = '194b7b20-12e0-494c-bcb2-b046863af2ce';

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
  "image_note": "Hero image for 'Things I Like to Do' -- a child drawing, singing, and dancing happily, bright and joyful."
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
  "display": "🎨",
  "questions": [
    "Do you see a child?",
    "What are they doing?"
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
      "word": "Draw"
    },
    {
      "word": "Sing"
    },
    {
      "word": "Dance"
    },
    {
      "word": "Build"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What do you like to do?"
  ],
  "student": [
    "I like to draw."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily drawing a colorful picture."
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Hobby",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "🎨",
      "word": "Draw"
    },
    {
      "emoji": "🎤",
      "word": "Sing"
    },
    {
      "emoji": "💃",
      "word": "Dance"
    }
  ]
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "Two children singing and dancing together happily.",
  "lines": [
    {
      "speaker": "A",
      "text": "What do you like to do?"
    },
    {
      "speaker": "B",
      "text": "I like to sing!"
    },
    {
      "speaker": "A",
      "text": "Let's sing together!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you like to do?"
    },
    {
      "speaker": "B",
      "text": "I like to build with blocks."
    },
    {
      "speaker": "A",
      "text": "Let's build together!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'draw' and 'sing'",
    "Say 'dance' and 'build'",
    "Say what I like to do"
  ],
  "challenge": "Tell me what you like to do!"
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🎨",
  "headline": "You did it!",
  "goal": "You can talk about your hobbies!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Playing with Friends
update lessons set
  title = 'Playing with Friends',
  topic = 'Talk about playing with friends.',
  slide_count = 9
where id = '8a0e00c6-09e7-4f97-9bdc-50d869e39522';

delete from lesson_slides where lesson_id = '8a0e00c6-09e7-4f97-9bdc-50d869e39522';

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
  "image_note": "Hero image for 'Playing with Friends' -- a group of children sharing toys and laughing together, joyful and bright."
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
  "display": "🤝",
  "questions": [
    "Do you see friends?",
    "Are they sharing?"
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
      "word": "Share"
    },
    {
      "word": "Take turns"
    },
    {
      "word": "Laugh"
    },
    {
      "word": "Team"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Do you share your toys?"
  ],
  "student": [
    "Yes, I share with my friends."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child sharing a toy with a friend, both smiling."
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which is a good thing to do with friends?",
  "options": [
    {
      "text": "Share",
      "emoji": "🤝"
    },
    {
      "text": "Laugh",
      "emoji": "😂"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "Do you share your toys?",
    "Do you take turns?",
    "Do you laugh with your friends?"
  ]
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
  "text": "I play with my friends. We share toys and take turns. We laugh a lot!",
  "questions": [
    "Who does the child play with?",
    "Do they share?",
    "Do they laugh?"
  ]
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'share' and 'take turns'",
    "Say 'laugh' and 'team'",
    "Say how I play with friends"
  ],
  "challenge": "Tell me how you play nicely with friends!"
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🤝",
  "headline": "You did it!",
  "goal": "You can talk about playing with friends!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Best Friend
update lessons set
  title = 'My Best Friend',
  topic = 'Talk about your best friend.',
  slide_count = 9
where id = 'eb6ffb32-e587-4405-944e-261f803631ce';

delete from lesson_slides where lesson_id = 'eb6ffb32-e587-4405-944e-261f803631ce';

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
  "image_note": "Hero image for 'My Best Friend' -- two children hugging and smiling, best friends together, warm and happy."
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
  "display": "👯",
  "questions": [
    "Do you see two friends?",
    "Are they happy?"
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
      "word": "Best friend"
    },
    {
      "word": "Kind"
    },
    {
      "word": "Fun"
    },
    {
      "word": "Help"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Who is your best friend?"
  ],
  "student": [
    "My best friend is Sam."
  ],
  "title": "Practice the Conversation",
  "image_note": "Two best friends laughing together at the park."
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [best friend] is Sam."
    },
    {
      "speaker": "B",
      "text": "She is very [kind]."
    },
    {
      "speaker": "A",
      "text": "She likes to [help] me."
    }
  ],
  "blanks": [
    "best friend",
    "kind",
    "help"
  ]
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me about your best friend!",
  "starters": [
    "My best friend is...",
    "They are..."
  ]
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Who is your best friend?"
    },
    {
      "speaker": "B",
      "text": "My best friend is Leo."
    },
    {
      "speaker": "A",
      "text": "He sounds fun!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'best friend' and 'kind'",
    "Say 'fun' and 'help'",
    "Say who my best friend is"
  ],
  "challenge": "Tell me about your best friend!"
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "👯",
  "headline": "You did it!",
  "goal": "You can talk about your best friend!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Happy Times with Family and Friends
update lessons set
  title = 'Happy Times with Family and Friends',
  topic = 'Say what makes you happy with family and friends.',
  slide_count = 9
where id = 'e92c1ccc-5c05-427a-9b57-dfaef4833b76';

delete from lesson_slides where lesson_id = 'e92c1ccc-5c05-427a-9b57-dfaef4833b76';

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
  "image_note": "Hero image for 'Happy Times with Family and Friends' -- a birthday party with family and friends celebrating together, festive and joyful."
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
  "display": "🎉",
  "questions": [
    "Do you see a party?",
    "Are people happy?"
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
      "word": "Happy"
    },
    {
      "word": "Celebrate"
    },
    {
      "word": "Party"
    },
    {
      "word": "Together"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "What makes you happy?"
  ],
  "student": [
    "A party with my family makes me happy."
  ],
  "title": "Practice the Conversation",
  "image_note": "A joyful family and friends celebrating a birthday party together."
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Like or Don't Like?",
  "subtitle": "Drag each one to how you feel.",
  "instruction": "Drag each thing to how you feel about it!",
  "subjective": true,
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
      "text": "Birthday party",
      "emoji": "🎂",
      "bucket": 0
    },
    {
      "text": "Playing together",
      "emoji": "🤝",
      "bucket": 0
    },
    {
      "text": "Saying goodbye",
      "emoji": "👋",
      "bucket": 1
    },
    {
      "text": "Being alone",
      "emoji": "😔",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which makes you happier?",
  "options": [
    {
      "text": "Birthday party",
      "emoji": "🎂"
    },
    {
      "text": "Playing together",
      "emoji": "🤝"
    }
  ]
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
  "text": "I am happy with my family and friends. We celebrate birthdays and play together.",
  "questions": [
    "Who makes the child happy?",
    "What do they celebrate?",
    "What do they do together?"
  ]
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'happy' and 'celebrate'",
    "Say 'party' and 'together'",
    "Say what makes me happy"
  ],
  "challenge": "Tell me a happy time with your family or friends!"
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🎉",
  "headline": "You did it!",
  "goal": "You can talk about happy times!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about your hobbies, friends, best friend, and happy times.',
  slide_count = 9
where id = 'dd90036c-6234-468a-ab33-72f717d4d9d5';

delete from lesson_slides where lesson_id = 'dd90036c-6234-468a-ab33-72f717d4d9d5';

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
  "image_note": "Hero image for 'Unit Review' -- a joyful celebration scene with children drawing, playing, and hugging friends, festive."
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
  "display": "🌟",
  "questions": [
    "Do you see children?",
    "Are they happy?"
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
      "word": "Draw"
    },
    {
      "word": "Share"
    },
    {
      "word": "Best friend"
    },
    {
      "word": "Happy"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
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
  "tag": "Highlight",
  "teacher": [
    "Tell me what makes you happy."
  ],
  "student": [
    "I like to draw and play with my best friend."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily talking about their hobbies and best friend."
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  5,
  'practice',
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
      "instruction": "Match each hobby word.",
      "pairs": [
        {
          "emoji": "🎨",
          "word": "Draw"
        },
        {
          "emoji": "🎤",
          "word": "Sing"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which is a good thing to do with friends?",
      "options": [
        {
          "text": "Share",
          "emoji": "🤝"
        },
        {
          "text": "Laugh",
          "emoji": "😂"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "My [best friend] is Sam."
        },
        {
          "speaker": "B",
          "text": "She is very [kind]."
        }
      ],
      "blanks": [
        "best friend",
        "kind"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Drag each thing to how you feel.",
      "subjective": true,
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
          "text": "Birthday party",
          "emoji": "🎂",
          "bucket": 0
        },
        {
          "text": "Being alone",
          "emoji": "😔",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about your hobbies and friends!",
  "starters": [
    "I like to...",
    "My best friend is...",
    "I am happy when..."
  ]
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
  "text": "I like to draw and sing. My best friend is kind and fun. We are happy when we play together.",
  "questions": [
    "What does the child like to do?",
    "What is their best friend like?",
    "When are they happy?"
  ]
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about my hobbies",
    "Talk about my best friend",
    "Say what makes me happy"
  ],
  "challenge": "Tell me about your hobbies, your best friend, and a happy time with them!"
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Amazing work!",
  "goal": "You finished A1 Kids! You can talk about yourself, your family, your world, and your friends!",
  "closing": "Congratulations! See you at the next level!"
}$json$::jsonb,
  true
);

commit;

