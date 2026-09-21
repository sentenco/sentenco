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
