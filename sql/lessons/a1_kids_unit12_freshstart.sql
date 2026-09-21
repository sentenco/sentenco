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
