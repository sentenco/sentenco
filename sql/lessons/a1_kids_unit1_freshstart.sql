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
