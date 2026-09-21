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
