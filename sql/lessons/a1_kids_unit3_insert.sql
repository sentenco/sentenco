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
