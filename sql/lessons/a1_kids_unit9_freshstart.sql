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
