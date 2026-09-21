-- A1 Kids Unit 8: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: Toys in My Room
update lessons set
  title = 'Toys in My Room',
  topic = 'Name the toys in your room.',
  slide_count = 9
where id = 'eb13ccdf-4647-4417-b635-eceb33696e8b';

delete from lesson_slides where lesson_id = 'eb13ccdf-4647-4417-b635-eceb33696e8b';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Toys in My Room' -- a colorful pile of toys including a ball, doll, blocks, and a toy car."
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧸",
  "questions": [
    "Do you see toys?",
    "Are they colorful?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Ball"
    },
    {
      "word": "Doll"
    },
    {
      "word": "Blocks"
    },
    {
      "word": "Car"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "What toys do you have?"
  ],
  "student": [
    "I have a ball and blocks."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child playing with blocks and a toy car on the floor."
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Toys",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "⚽",
      "word": "Ball"
    },
    {
      "emoji": "🪆",
      "word": "Doll"
    },
    {
      "emoji": "🧱",
      "word": "Blocks"
    }
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "A child sharing their toys with a friend.",
  "lines": [
    {
      "speaker": "A",
      "text": "Can I play with your ball?"
    },
    {
      "speaker": "B",
      "text": "Yes! Here you go."
    },
    {
      "speaker": "A",
      "text": "Thank you!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What toys do you have?"
    },
    {
      "speaker": "B",
      "text": "I have a car and blocks."
    },
    {
      "speaker": "A",
      "text": "Let's play!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'ball' and 'doll'",
    "Say 'blocks' and 'car'",
    "Say what toys I have"
  ],
  "challenge": "Tell me your favorite toy!"
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🧸",
  "headline": "You did it!",
  "goal": "You can name your toys!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Games I Play at Home
update lessons set
  title = 'Games I Play at Home',
  topic = 'Talk about games you play at home.',
  slide_count = 9
where id = '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3';

delete from lesson_slides where lesson_id = '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Games I Play at Home' -- a child playing a puzzle and a board game at a table, cozy and fun."
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧩",
  "questions": [
    "Do you see a game?",
    "Is it fun?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Puzzle"
    },
    {
      "word": "Cards"
    },
    {
      "word": "Video game"
    },
    {
      "word": "Board game"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "What games do you play at home?"
  ],
  "student": [
    "I play puzzles and board games."
  ],
  "title": "Practice the Conversation",
  "image_note": "A family playing a board game together at home."
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one has pieces that fit together?",
  "options": [
    {
      "text": "Puzzle",
      "emoji": "🧩"
    },
    {
      "text": "Cards",
      "emoji": "🃏"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
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
    "What games do you play at home?",
    "Do you like puzzles?",
    "Do you play video games?"
  ]
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "At home, I play puzzles and board games. I like cards too!",
  "questions": [
    "What games does the child play?",
    "Do they like cards?",
    "Where do they play?"
  ]
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'puzzle' and 'cards'",
    "Say 'video game' and 'board game'",
    "Say what games I play"
  ],
  "challenge": "Tell me what games you play at home!"
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🧩",
  "headline": "You did it!",
  "goal": "You can talk about home games!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: Games I Play at School
update lessons set
  title = 'Games I Play at School',
  topic = 'Talk about games you play at school.',
  slide_count = 9
where id = 'a98e85f0-872b-4767-976c-4a3ba9179342';

delete from lesson_slides where lesson_id = 'a98e85f0-872b-4767-976c-4a3ba9179342';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Games I Play at School' -- children playing tag and jump rope on a school playground, active and fun."
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏃",
  "questions": [
    "Do you see children?",
    "Are they running?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Tag"
    },
    {
      "word": "Hide and seek"
    },
    {
      "word": "Jump rope"
    },
    {
      "word": "Race"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "What do you play at school?"
  ],
  "student": [
    "I play tag with my friends."
  ],
  "title": "Practice the Conversation",
  "image_note": "Children playing tag together on the playground, laughing."
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "Let's play [tag]!"
    },
    {
      "speaker": "B",
      "text": "I like [jump rope] too."
    },
    {
      "speaker": "A",
      "text": "Let's have a [race]!"
    }
  ],
  "blanks": [
    "tag",
    "jump rope",
    "race"
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me what games you play at school!",
  "starters": [
    "I play...",
    "I like..."
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you play at school?"
    },
    {
      "speaker": "B",
      "text": "I play hide and seek."
    },
    {
      "speaker": "A",
      "text": "Let's play together!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'tag' and 'hide and seek'",
    "Say 'jump rope' and 'race'",
    "Say what I play at school"
  ],
  "challenge": "Tell me one game you play at school!"
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🏃",
  "headline": "You did it!",
  "goal": "You can talk about school games!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Fun Activities with Friends
update lessons set
  title = 'Fun Activities with Friends',
  topic = 'Say what fun activities you like to do with friends.',
  slide_count = 9
where id = '7609619a-462c-4485-99d3-5e33724e18ad';

delete from lesson_slides where lesson_id = '7609619a-462c-4485-99d3-5e33724e18ad';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Fun Activities with Friends' -- a group of children laughing and playing together in a park, joyful and bright."
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎉",
  "questions": [
    "Do you see friends?",
    "Are they happy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Fun"
    },
    {
      "word": "Friend"
    },
    {
      "word": "Play"
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
  '7609619a-462c-4485-99d3-5e33724e18ad',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "What do you like to do with friends?"
  ],
  "student": [
    "I like to play together."
  ],
  "title": "Practice the Conversation",
  "image_note": "A group of friends playing a game together, all smiling."
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Like or Don't Like?",
  "subtitle": "Drag each one to how you feel.",
  "instruction": "Drag each activity to how you feel about it!",
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
      "text": "Playing tag",
      "emoji": "🏃",
      "bucket": 0
    },
    {
      "text": "Board games",
      "emoji": "🎲",
      "bucket": 0
    },
    {
      "text": "Sharing toys",
      "emoji": "🧸",
      "bucket": 1
    },
    {
      "text": "Waiting my turn",
      "emoji": "⏳",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which is more fun with friends?",
  "options": [
    {
      "text": "Playing tag",
      "emoji": "🏃"
    },
    {
      "text": "Board games",
      "emoji": "🎲"
    }
  ]
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like to play with my friends. We play tag and board games together. It is fun!",
  "questions": [
    "Who does the child play with?",
    "What do they play?",
    "Is it fun?"
  ]
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'fun' and 'friend'",
    "Say 'play' and 'together'",
    "Say what I like to do with friends"
  ],
  "challenge": "Tell me one fun thing you do with your friends!"
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🎉",
  "headline": "You did it!",
  "goal": "You can talk about fun with friends!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about toys, home games, school games, and fun with friends.',
  slide_count = 9
where id = 'bd117b4f-5984-49ad-9fc4-5df329dea81b';

delete from lesson_slides where lesson_id = 'bd117b4f-5984-49ad-9fc4-5df329dea81b';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- a joyful scene of children playing with toys and games together, festive and colorful."
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌟",
  "questions": [
    "Do you see toys?",
    "Are children playing?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Ball"
    },
    {
      "word": "Puzzle"
    },
    {
      "word": "Tag"
    },
    {
      "word": "Friend"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "Tell me what you like to play."
  ],
  "student": [
    "I play with a ball and I play tag with friends."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily describing all their favorite games and toys."
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
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
      "instruction": "Match each toy word.",
      "pairs": [
        {
          "emoji": "⚽",
          "word": "Ball"
        },
        {
          "emoji": "🪆",
          "word": "Doll"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one has pieces that fit together?",
      "options": [
        {
          "text": "Puzzle",
          "emoji": "🧩"
        },
        {
          "text": "Cards",
          "emoji": "🃏"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "Let's play [tag]!"
        },
        {
          "speaker": "B",
          "text": "I like [jump rope] too."
        }
      ],
      "blanks": [
        "tag",
        "jump rope"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Drag each activity to how you feel.",
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
          "text": "Playing tag",
          "emoji": "🏃",
          "bucket": 0
        },
        {
          "text": "Waiting my turn",
          "emoji": "⏳",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about your toys and games!",
  "starters": [
    "I have...",
    "I play...",
    "With my friends, I..."
  ]
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a ball and blocks. At home, I play board games. At school, I play tag. I love playing with my friends!",
  "questions": [
    "What toys does the child have?",
    "What do they play at home?",
    "What do they play at school?"
  ]
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name my toys",
    "Talk about games at home and school",
    "Say what's fun with friends"
  ],
  "challenge": "Tell me about your toys, your games, and your friends!"
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about toys, games, and fun!",
  "closing": "See you in Unit 9!"
}$json$::jsonb,
  true
);

commit;
