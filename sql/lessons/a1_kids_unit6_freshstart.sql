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
