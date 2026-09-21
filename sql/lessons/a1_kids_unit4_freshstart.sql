-- A1 Kids Unit 4: fresh start on new topics (matches sentenco_a1_kids_lesson_titles_units_1_to_12.md)
-- Title/Warm-up/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Update-in-place: Kids A1 is already live in Supabase; reuses the existing lesson UUIDs.
begin;

-- Lesson 1: My Classroom and Teacher
update lessons set
  title = 'My Classroom and Teacher',
  topic = 'Name your classroom and your teacher.',
  slide_count = 9
where id = 'c7e53235-a359-48da-82f9-ae4380ca518e';

delete from lesson_slides where lesson_id = 'c7e53235-a359-48da-82f9-ae4380ca518e';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Classroom and Teacher' -- a bright classroom with a friendly teacher and children at their desks."
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏫",
  "questions": [
    "Do you see a classroom?",
    "Do you see a teacher?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Classroom"
    },
    {
      "word": "Teacher"
    },
    {
      "word": "Desk"
    },
    {
      "word": "Chair"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "Who is your teacher?"
  ],
  "student": [
    "My teacher is Miss Ana."
  ],
  "title": "Practice the Conversation",
  "image_note": "A friendly teacher waving hello to the class."
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Classroom",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "🏫",
      "word": "Classroom"
    },
    {
      "emoji": "👩‍🏫",
      "word": "Teacher"
    },
    {
      "emoji": "🪑",
      "word": "Chair"
    }
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "image_note": "A child meeting their teacher on the first day of school.",
  "lines": [
    {
      "speaker": "A",
      "text": "Hello! I'm your teacher."
    },
    {
      "speaker": "B",
      "text": "Hello, teacher!"
    },
    {
      "speaker": "A",
      "text": "Sit at your desk."
    }
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Who is your teacher?"
    },
    {
      "speaker": "B",
      "text": "My teacher is Mr. Lee."
    },
    {
      "speaker": "A",
      "text": "He is nice!"
    }
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'classroom' and 'teacher'",
    "Say 'desk' and 'chair'",
    "Say my teacher's name"
  ],
  "challenge": "Tell me about your classroom and teacher!"
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🏫",
  "headline": "You did it!",
  "goal": "You can talk about your classroom and teacher!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 2: Things on My Desk
update lessons set
  title = 'Things on My Desk',
  topic = 'Name the things on your desk.',
  slide_count = 9
where id = 'c66b374c-073b-4618-b34b-66da50d7ead3';

delete from lesson_slides where lesson_id = 'c66b374c-073b-4618-b34b-66da50d7ead3';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Things on My Desk' -- a school desk with a pencil, book, eraser, and ruler laid out, bright and tidy."
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✏️",
  "questions": [
    "Do you see a pencil?",
    "Do you see a book?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Pencil"
    },
    {
      "word": "Book"
    },
    {
      "word": "Eraser"
    },
    {
      "word": "Ruler"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "What's on your desk?"
  ],
  "student": [
    "I have a pencil and a book."
  ],
  "title": "Practice the Conversation",
  "image_note": "A tidy school desk with a pencil and a book on top."
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one do you write with?",
  "options": [
    {
      "text": "Pencil",
      "emoji": "✏️"
    },
    {
      "text": "Book",
      "emoji": "📖"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
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
    "What's on your desk?",
    "Do you have a pencil?",
    "What color is your book?"
  ]
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "On my desk, I have a pencil, a book, and an eraser.",
  "questions": [
    "What's on the desk?",
    "How many things are there?",
    "Is there a ruler?"
  ]
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'pencil' and 'book'",
    "Say 'eraser' and 'ruler'",
    "Say 'I have a ___'"
  ],
  "challenge": "Tell me what's on your desk!"
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "✏️",
  "headline": "You did it!",
  "goal": "You can name things on your desk!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 3: My School Bag
update lessons set
  title = 'My School Bag',
  topic = 'Talk about your school bag.',
  slide_count = 9
where id = '5546d8a9-9d92-476c-b548-8ed23c96bcab';

delete from lesson_slides where lesson_id = '5546d8a9-9d92-476c-b548-8ed23c96bcab';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My School Bag' -- a colorful school backpack with books peeking out, bright and cheerful."
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎒",
  "questions": [
    "Do you see a bag?",
    "Is it big or small?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bag"
    },
    {
      "word": "Pack"
    },
    {
      "word": "Carry"
    },
    {
      "word": "Open"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "What's in your bag?"
  ],
  "student": [
    "I have books in my bag."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child opening their school bag to show their books."
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [pack] my bag."
    },
    {
      "speaker": "B",
      "text": "I [carry] my bag to school."
    },
    {
      "speaker": "A",
      "text": "I [open] my bag."
    }
  ],
  "blanks": [
    "pack",
    "carry",
    "open"
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me what's in your school bag!",
  "starters": [
    "I have...",
    "My bag has..."
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  7,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's in your bag?"
    },
    {
      "speaker": "B",
      "text": "I have a book and a pencil."
    },
    {
      "speaker": "A",
      "text": "Let's go to school!"
    }
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'bag' and 'pack'",
    "Say 'carry' and 'open'",
    "Say what's in my bag"
  ],
  "challenge": "Tell me three things in your school bag!"
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🎒",
  "headline": "You did it!",
  "goal": "You can talk about your school bag!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 4: Rules in My Classroom
update lessons set
  title = 'Rules in My Classroom',
  topic = 'Talk about classroom rules.',
  slide_count = 9
where id = 'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12';

delete from lesson_slides where lesson_id = 'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Rules in My Classroom' -- children sitting quietly and raising their hands in a classroom, orderly and bright."
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙋",
  "questions": [
    "Do you see children?",
    "Are they quiet?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Listen"
    },
    {
      "word": "Quiet"
    },
    {
      "word": "Raise hand"
    },
    {
      "word": "Share"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "What are the classroom rules?"
  ],
  "student": [
    "We listen to the teacher."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child raising their hand quietly in class."
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Do This or Not?",
  "subtitle": "Drag each one to the right place.",
  "instruction": "Which is a classroom rule?",
  "buckets": [
    {
      "label": "Do This",
      "emoji": "✅"
    },
    {
      "label": "Don't Do This",
      "emoji": "🚫"
    }
  ],
  "items": [
    {
      "text": "Listen",
      "emoji": "👂",
      "bucket": 0
    },
    {
      "text": "Raise hand",
      "emoji": "🙋",
      "bucket": 0
    },
    {
      "text": "Shout",
      "emoji": "📢",
      "bucket": 1
    },
    {
      "text": "Run",
      "emoji": "🏃",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which is a good classroom rule?",
  "options": [
    {
      "text": "Listen",
      "emoji": "👂"
    },
    {
      "text": "Shout",
      "emoji": "📢"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "In my classroom, we listen and raise our hands. We don't shout.",
  "questions": [
    "What do they do?",
    "What don't they do?",
    "Is it a quiet classroom?"
  ]
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'listen' and 'quiet'",
    "Say 'raise hand' and 'share'",
    "Say a classroom rule"
  ],
  "challenge": "Tell me one classroom rule!"
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🙋",
  "headline": "You did it!",
  "goal": "You can talk about classroom rules!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
update lessons set
  title = 'Unit Review',
  topic = 'Unit Review -- talk about your classroom, teacher, desk, bag, and classroom rules.',
  slide_count = 9
where id = '1ef356b7-5118-4428-b1e2-8809975cbce9';

delete from lesson_slides where lesson_id = '1ef356b7-5118-4428-b1e2-8809975cbce9';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- a happy classroom scene with children, a teacher, desks, and bags, festive and bright."
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌟",
  "questions": [
    "Do you see a classroom?",
    "Are the children happy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Teacher"
    },
    {
      "word": "Desk"
    },
    {
      "word": "Bag"
    },
    {
      "word": "Listen"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a word to make it BIG!"
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "teacher": [
    "Tell me about your classroom."
  ],
  "student": [
    "My teacher is nice. I listen and I have a bag."
  ],
  "title": "Practice the Conversation",
  "image_note": "A child happily describing their classroom to a friend."
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
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
      "instruction": "Match each classroom word.",
      "pairs": [
        {
          "emoji": "🏫",
          "word": "Classroom"
        },
        {
          "emoji": "🪑",
          "word": "Chair"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one do you write with?",
      "options": [
        {
          "text": "Pencil",
          "emoji": "✏️"
        },
        {
          "text": "Book",
          "emoji": "📖"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "I [pack] my bag."
        },
        {
          "speaker": "B",
          "text": "I [carry] my bag to school."
        }
      ],
      "blanks": [
        "pack",
        "carry"
      ]
    },
    {
      "mode": "sort",
      "instruction": "Which is a classroom rule?",
      "buckets": [
        {
          "label": "Do This",
          "emoji": "✅"
        },
        {
          "label": "Don't Do This",
          "emoji": "🚫"
        }
      ],
      "items": [
        {
          "text": "Listen",
          "emoji": "👂",
          "bucket": 0
        },
        {
          "text": "Shout",
          "emoji": "📢",
          "bucket": 1
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me all about your classroom!",
  "starters": [
    "My teacher is...",
    "I have...",
    "We listen..."
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My classroom has a teacher and desks. I have a pencil and a bag. We listen and raise our hands.",
  "questions": [
    "What does the classroom have?",
    "What does the child have?",
    "What do they do in class?"
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  8,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about my teacher and classroom",
    "Name things on my desk and in my bag",
    "Say a classroom rule"
  ],
  "challenge": "Tell me about your classroom, your teacher, your desk, and your bag!"
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌟",
  "headline": "Great job!",
  "goal": "You can talk about your classroom!",
  "closing": "See you in Unit 5!"
}$json$::jsonb,
  true
);

commit;
