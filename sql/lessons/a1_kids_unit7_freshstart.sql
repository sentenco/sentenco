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
