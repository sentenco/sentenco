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
