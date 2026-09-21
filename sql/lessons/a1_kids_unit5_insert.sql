-- A1 Kids Unit 5: Classroom Things (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Classroom Objects
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  'Classroom Objects',
  'A1',
  'kids',
  5,
  1,
  'Name classroom objects. [Combination, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'Classroom Objects' -- A friendly farm or park scene with a few simple, recognizable animals (dog, cat, bird) together."
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
  "display": "✏️",
  "questions": [
    "Do you have a pencil?",
    "What is in your bag?"
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
      "word": "Pencil",
      "bg": "#FAECE7",
      "image_note": "A single yellow pencil, simple and bold."
    },
    {
      "word": "Book",
      "bg": "#E1F5EE",
      "image_note": "A single colorful storybook, closed, simple illustration."
    },
    {
      "word": "Bag",
      "bg": "#EEEDFE",
      "image_note": "A colorful school backpack, simple and bold."
    },
    {
      "word": "Desk",
      "bg": "#FAEEDA",
      "image_note": "A simple child's school desk with a chair."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "What is this?",
    "Do you have a pencil?"
  ],
  "student": [
    "This is a pencil.",
    "Yes, I have a pencil."
  ],
  "note": "Point to something in your classroom or bag!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a [pencil]."
    },
    {
      "speaker": "B",
      "text": "This is a [book]."
    },
    {
      "speaker": "A",
      "text": "This is my [bag]."
    }
  ],
  "blanks": [
    "pencil",
    "book",
    "bag"
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a pencil."
    },
    {
      "speaker": "B",
      "text": "This is a book."
    },
    {
      "speaker": "A",
      "text": "This is my bag."
    },
    {
      "speaker": "B",
      "text": "This is my desk!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is a pencil. This is a book. This is my bag.",
  "questions": [
    "What is the first object?",
    "What is the second object?",
    "Whose bag is it?"
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is a ___.",
    "This is my ___.",
    "I have a ___."
  ]
}$json$::jsonb,
  true
),
(
  '9319ffd3-3c41-4a65-adc8-a69c46c3a643',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 classroom objects",
    "Say 'This is a ___'",
    "Point to something in my bag"
  ],
  "challenge": "Show me what's in your bag!"
}$json$::jsonb,
  true
);

-- Lesson 2: This Is My Pencil
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  'This Is My Pencil',
  'A1',
  'kids',
  5,
  2,
  'Combine possession with classroom objects. [Combination, Lesson 2: controlled practice, picture-supported frames]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'This Is My Pencil' -- A friendly farm or park scene with a few simple, recognizable animals (dog, cat, bird) together."
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
  "display": "📏",
  "questions": [
    "Is this your pencil?",
    "Do you have an eraser?"
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
      "word": "My",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Your",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Eraser",
      "bg": "#EEEDFE",
      "image_note": "A single pink or white eraser, simple and bold."
    },
    {
      "word": "Ruler",
      "bg": "#FAEEDA",
      "image_note": "A single wooden or plastic ruler with visible markings."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "Is this your pencil?",
    "Is this your eraser?"
  ],
  "student": [
    "Yes, this is my pencil.",
    "This is my eraser."
  ],
  "note": "Use the word bank: my, your, eraser, ruler.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is [my] pencil."
    },
    {
      "speaker": "B",
      "text": "Is this [your] eraser?"
    },
    {
      "speaker": "A",
      "text": "Yes, and this is my [ruler]."
    }
  ],
  "blanks": [
    "my",
    "your",
    "ruler"
  ]
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is this your pencil?"
    },
    {
      "speaker": "B",
      "text": "Yes, this is my pencil. Is this your eraser?"
    },
    {
      "speaker": "A",
      "text": "Yes, and this is my ruler."
    },
    {
      "speaker": "B",
      "text": "Nice!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
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
  "text": "This is my pencil. This is my eraser. This is my ruler too.",
  "questions": [
    "Whose pencil is it?",
    "What else does the writer have?",
    "How many objects are named?"
  ]
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "This is my ___ too.",
    "I have my ___."
  ]
}$json$::jsonb,
  true
),
(
  '4e42f5ed-cd3d-48b7-a30d-0f01ea986183',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'This is my ___'",
    "Ask 'Is this your ___?'",
    "Name eraser and ruler"
  ],
  "challenge": "Show me three things that are yours!"
}$json$::jsonb,
  true
);

-- Lesson 3: What's in the Classroom?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  'What''s in the Classroom?',
  'A1',
  'kids',
  5,
  3,
  'Ask and find classroom objects. [Combination, Lesson 3: freer practice, TPR find-it game]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'What's in the Classroom?' -- A friendly farm or park scene with a few simple, recognizable animals (dog, cat, bird) together."
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
  "display": "🪑",
  "questions": [
    "Where is your chair?",
    "Where is the board?"
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
      "word": "Where is",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Chair",
      "bg": "#E1F5EE",
      "image_note": "A simple child's chair, single object, bold outline."
    },
    {
      "word": "Table",
      "bg": "#EEEDFE",
      "image_note": "A simple wooden table, single object, bold outline."
    },
    {
      "word": "Board",
      "bg": "#FAEEDA",
      "image_note": "A classroom whiteboard or chalkboard with simple marks on it."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "Where is your chair?",
    "Where is the board?"
  ],
  "student": [
    "My chair is here.",
    "The board is there."
  ],
  "note": "Point and find things in the room!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Where is] your chair?"
    },
    {
      "speaker": "B",
      "text": "My [chair] is here."
    },
    {
      "speaker": "A",
      "text": "The [table] is there."
    }
  ],
  "blanks": [
    "where is",
    "chair",
    "table"
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where is your chair?"
    },
    {
      "speaker": "B",
      "text": "My chair is here! Where is the board?"
    },
    {
      "speaker": "A",
      "text": "The board is there. Where is the table?"
    },
    {
      "speaker": "B",
      "text": "Your turn to find something!"
    }
  ],
  "note": "Point-and-find game: ask where something is, then point to find it!"
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Where is my chair? My chair is here. Where is the board? The board is there.",
  "questions": [
    "Where is the chair?",
    "Where is the board?",
    "What game are they playing?"
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My chair is ___.",
    "The board is ___.",
    "Where is the ___?"
  ]
}$json$::jsonb,
  true
),
(
  '41de2716-cfcb-40c2-9241-534e7e991c74',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Where is ___?'",
    "Say 'here' and 'there'",
    "Find classroom objects"
  ],
  "challenge": "Ask me where something is in the room!"
}$json$::jsonb,
  true
);

-- Lesson 4: In My Bag
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  'In My Bag',
  'A1',
  'kids',
  5,
  4,
  'Show and tell what''s in your bag. [Combination, Lesson 4: production, show-and-tell]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'In My Bag' -- A friendly farm or park scene with a few simple, recognizable animals (dog, cat, bird) together."
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
  "display": "🎒",
  "questions": [
    "What do you have in your bag?",
    "Can you show me?"
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
      "word": "And",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Have",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Show",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Bag",
      "bg": "#FAEEDA",
      "image_note": "A colorful school backpack, simple and bold."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "What do you have in your bag?",
    "Can you show me?"
  ],
  "student": [
    "I have a pencil and a book.",
    "Yes, look!"
  ],
  "note": "Open your bag and show me what's inside!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [have] a pencil [and] a book."
    },
    {
      "speaker": "B",
      "text": "Let me [show] you my bag."
    },
    {
      "speaker": "A",
      "text": "I have an eraser too."
    }
  ],
  "blanks": [
    "have",
    "and",
    "show"
  ]
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is in your bag?"
    },
    {
      "speaker": "B",
      "text": "I have a pencil and a book. I have an eraser too."
    },
    {
      "speaker": "A",
      "text": "Show me! I have a ruler and a pencil."
    },
    {
      "speaker": "B",
      "text": "Nice bag!"
    }
  ],
  "note": "Show-and-tell: open your bag and tell me what's inside!"
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
  "text": "I have a pencil and a book in my bag. I have an eraser too. My bag is full!",
  "questions": [
    "What is in the bag?",
    "What else is in the bag?",
    "Is the bag full or empty?"
  ]
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___ and a ___.",
    "I have a ___ too.",
    "My bag is ___."
  ]
}$json$::jsonb,
  true
),
(
  '65cea5d9-22c9-4ff8-9bc9-7be2f2191a6e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say what's in my bag using 'and'",
    "Show-and-tell my bag",
    "Name 3+ classroom objects"
  ],
  "challenge": "Show me what's in your bag and tell me each thing!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  'Unit Review',
  'A1',
  'kids',
  5,
  5,
  'Review classroom objects and location. [Combination, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'Unit Review' -- A friendly farm or park scene with a few simple, recognizable animals (dog, cat, bird) together."
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
  "display": "🎒",
  "questions": [
    "What is in your bag?",
    "Where is your pencil?"
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
      "word": "Pencil",
      "bg": "#FAECE7",
      "image_note": "A single yellow pencil, simple and bold."
    },
    {
      "word": "My",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Where is",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Bag",
      "bg": "#FAEEDA",
      "image_note": "A colorful school backpack, simple and bold."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "What is this?",
    "Where is your pencil?"
  ],
  "student": [
    "This is my pencil.",
    "My pencil is here."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [pencil]."
    },
    {
      "speaker": "B",
      "text": "[Where is] your book?"
    },
    {
      "speaker": "A",
      "text": "It is in my [bag]."
    }
  ],
  "blanks": [
    "pencil",
    "where is",
    "bag"
  ]
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my pencil and my book."
    },
    {
      "speaker": "B",
      "text": "Where is your eraser?"
    },
    {
      "speaker": "A",
      "text": "It is in my bag."
    },
    {
      "speaker": "B",
      "text": "Show me your bag!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
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
  "text": "This is my pencil and my book. My eraser is in my bag. I have many classroom things!",
  "questions": [
    "What things are named?",
    "Where is the eraser?",
    "Does the writer have many things?"
  ]
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "My ___ is in my bag.",
    "I have ___."
  ]
}$json$::jsonb,
  true
),
(
  'd14fd8d4-8a5f-4519-b8bc-034ac6d0e02f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name classroom objects",
    "Say where things are",
    "Show-and-tell my classroom things"
  ],
  "challenge": "Show me everything in your bag!"
}$json$::jsonb,
  true
);
