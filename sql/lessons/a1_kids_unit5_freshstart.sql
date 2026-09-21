-- A1 Kids Unit 5: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: Morning Routine
update lessons set
  title = 'Morning Routine',
  topic = 'Talk about what you do in the morning.',
  slide_count = 9
where id = '9319ffd3-3c41-4a65-adc8-a69c46c3a643';

delete from lesson_slides where lesson_id = '9319ffd3-3c41-4a65-adc8-a69c46c3a643';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Morning Routine' -- a cheerful child waking up and stretching in bed with sunlight through the window."
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏰",
  "questions": [
    "Do you see a clock?",
    "Is it morning?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Wake up"
    },
    {
      "word": "Brush teeth"
    },
    {
      "word": "Get dressed"
    },
    {
      "word": "Eat breakfast"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "What do you do in the morning?"
  ],
  "student": [
    "I wake up and brush my teeth."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child brushing their teeth in front of a mirror, smiling."
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Morning",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "⏰",
      "word": "Wake up"
    },
    {
      "emoji": "🪥",
      "word": "Brush teeth"
    },
    {
      "emoji": "👕",
      "word": "Get dressed"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "A child getting dressed in the morning, picking out clothes.",
  "lines": [
    {
      "speaker": "A",
      "text": "Wake up! It's morning."
    },
    {
      "speaker": "B",
      "text": "I'm brushing my teeth."
    },
    {
      "speaker": "A",
      "text": "Now get dressed!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do in the morning?"
    },
    {
      "speaker": "B",
      "text": "I wake up and eat breakfast."
    },
    {
      "speaker": "A",
      "text": "Me too!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'wake up' and 'brush teeth'",
    "Say 'get dressed' and 'eat breakfast'",
    "Say my morning routine"
  ],
  "challenge": "Tell me what you do in the morning!"
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "⏰",
  "headline": "You did it!",
  "goal": "You can talk about your morning!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: At School in the Day
update lessons set
  title = 'At School in the Day',
  topic = 'Talk about what you do at school.',
  slide_count = 9
where id = '4e42f5ed-cd3d-48b7-a30d-0f01ea986183';

delete from lesson_slides where lesson_id = '4e42f5ed-cd3d-48b7-a30d-0f01ea986183';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'At School in the Day' -- children learning, writing, and drawing in a bright classroom."
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✏️",
  "questions": [
    "Do you see children?",
    "Are they learning?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Learn"
    },
    {
      "word": "Write"
    },
    {
      "word": "Draw"
    },
    {
      "word": "Lunch"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "What do you do at school?"
  ],
  "student": [
    "I learn and write."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child writing happily at their desk."
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one do you do with a pencil?",
  "options": [
    {
      "text": "Write",
      "emoji": "✏️"
    },
    {
      "text": "Lunch",
      "emoji": "🍱"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
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
    "What do you learn at school?",
    "Do you like lunch?",
    "What do you draw?"
  ]
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "At school, I learn and write. I draw pictures. I like lunch!",
  "questions": [
    "What does the child do at school?",
    "Do they like lunch?",
    "What do they draw?"
  ]
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'learn' and 'write'",
    "Say 'draw' and 'lunch'",
    "Say what I do at school"
  ],
  "challenge": "Tell me what you do at school!"
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "✏️",
  "headline": "You did it!",
  "goal": "You can talk about your school day!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: After School Time
update lessons set
  title = 'After School Time',
  topic = 'Talk about what you do after school.',
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
  "image_note": "Hero image for 'After School Time' -- children playing outside with friends after school, sunny and fun."
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
  "display": "🎒",
  "questions": [
    "Do you see children?",
    "Are they playing?"
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
      "word": "Homework"
    },
    {
      "word": "Snack"
    },
    {
      "word": "Friends"
    },
    {
      "word": "Outside"
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
    "What do you do after school?"
  ],
  "student": [
    "I do my homework."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child doing homework at a table with a snack nearby."
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
      "text": "I do my [homework]."
    },
    {
      "speaker": "B",
      "text": "I eat a [snack]."
    },
    {
      "speaker": "A",
      "text": "I play [outside]."
    }
  ],
  "blanks": [
    "homework",
    "snack",
    "outside"
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
  "prompt": "Tell me what you do after school!",
  "starters": [
    "I do...",
    "I play with..."
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
      "text": "What do you do after school?"
    },
    {
      "speaker": "B",
      "text": "I play with my friends."
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
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'homework' and 'snack'",
    "Say 'friends' and 'outside'",
    "Say what I do after school"
  ],
  "challenge": "Tell me one thing you do after school!"
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
  "sticker": "🎒",
  "headline": "You did it!",
  "goal": "You can talk about after school!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Bedtime Routine
update lessons set
  title = 'Bedtime Routine',
  topic = 'Talk about what you do before bed.',
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
  "image_note": "Hero image for 'Bedtime Routine' -- a cozy bedroom with a child in pajamas reading a bedtime story, soft warm light."
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
  "display": "🌙",
  "questions": [
    "Do you see the moon?",
    "Is it night?"
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
      "word": "Bath"
    },
    {
      "word": "Pajamas"
    },
    {
      "word": "Story"
    },
    {
      "word": "Sleep"
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
    "What do you do before bed?"
  ],
  "student": [
    "I take a bath and read a story."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child in pajamas reading a book in bed."
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
      "text": "Bath time",
      "emoji": "🛁",
      "bucket": 0
    },
    {
      "text": "Story time",
      "emoji": "📖",
      "bucket": 0
    },
    {
      "text": "Brushing teeth",
      "emoji": "🪥",
      "bucket": 1
    },
    {
      "text": "Going to sleep",
      "emoji": "😴",
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
      "text": "Story time",
      "emoji": "📖"
    },
    {
      "text": "Bath time",
      "emoji": "🛁"
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
  "text": "Before bed, I take a bath. I put on my pajamas. I read a story. Then I sleep.",
  "questions": [
    "What does the child do first?",
    "What do they wear?",
    "What do they read?"
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
    "Say 'bath' and 'pajamas'",
    "Say 'story' and 'sleep'",
    "Say my bedtime routine"
  ],
  "challenge": "Tell me what you do before bed!"
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
  "sticker": "🌙",
  "headline": "You did it!",
  "goal": "You can talk about bedtime!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about your whole day: morning, school, after school, and bedtime.',
  slide_count = 9
where id = 'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f';

delete from lesson_slides where lesson_id = 'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- a four-panel-style scene showing morning, school, play, and bedtime, festive and bright."
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌟",
  "questions": [
    "Do you see a clock?",
    "Do you see the moon?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Wake up"
    },
    {
      "word": "Learn"
    },
    {
      "word": "Homework"
    },
    {
      "word": "Sleep"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "Tell me about your day."
  ],
  "student": [
    "I wake up, learn, play, and sleep."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily talking about their busy, fun day."
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
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
      "instruction": "Match each morning word.",
      "pairs": [
        {
          "emoji": "⏰",
          "word": "Wake up"
        },
        {
          "emoji": "🪥",
          "word": "Brush teeth"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one do you do with a pencil?",
      "options": [
        {
          "text": "Write",
          "emoji": "✏️"
        },
        {
          "text": "Lunch",
          "emoji": "🍱"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "I do my [homework]."
        },
        {
          "speaker": "B",
          "text": "I eat a [snack]."
        }
      ],
      "blanks": [
        "homework",
        "snack"
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
          "text": "Story time",
          "emoji": "📖",
          "bucket": 0
        },
        {
          "text": "Brushing teeth",
          "emoji": "🪥",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about your day!",
  "starters": [
    "In the morning...",
    "At school...",
    "Before bed..."
  ]
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I wake up and eat breakfast. At school, I learn and write. After school, I play. Before bed, I read a story.",
  "questions": [
    "What does the child do first?",
    "What do they do at school?",
    "What do they do before bed?"
  ]
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about my morning",
    "Talk about my school day",
    "Talk about my bedtime"
  ],
  "challenge": "Tell me about your whole day, from morning to night!"
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about your whole day!",
  "closing": "See you in Unit 6!"
}$json$::jsonb,
  true
);

commit;
