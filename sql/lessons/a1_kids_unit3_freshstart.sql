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
