-- A1 Kids Unit 7: My Toys (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Toys
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  'Toys',
  'A1',
  'kids',
  7,
  1,
  'Name common toys. [Combination, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'Toys' -- A cheerful kitchen or table scene with a spread of simple, colorful foods -- fruit, bread, milk."
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
  "display": "⚽",
  "questions": [
    "Do you have a ball?",
    "What toys do you have?"
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
      "word": "Ball",
      "bg": "#FAECE7",
      "image_note": "A single bouncy ball, simple bold colors, maybe mid-bounce."
    },
    {
      "word": "Doll",
      "bg": "#E1F5EE",
      "image_note": "A single simple toy doll, friendly and colorful."
    },
    {
      "word": "Car",
      "bg": "#EEEDFE",
      "image_note": "A single colorful toy car, simple rounded shape."
    },
    {
      "word": "Blocks",
      "bg": "#FAEEDA",
      "image_note": "A small stack of colorful building blocks."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "What toy is this?",
    "Do you have a ball?"
  ],
  "student": [
    "This is a ball.",
    "Yes, I have a ball."
  ],
  "note": "Point to a toy picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a [ball]."
    },
    {
      "speaker": "B",
      "text": "This is a [doll]."
    },
    {
      "speaker": "A",
      "text": "This is a toy [car]."
    }
  ],
  "blanks": [
    "ball",
    "doll",
    "car"
  ]
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a ball."
    },
    {
      "speaker": "B",
      "text": "This is a doll."
    },
    {
      "speaker": "A",
      "text": "This is a toy car."
    },
    {
      "speaker": "B",
      "text": "These are my blocks!"
    }
  ],
  "note": "Teacher says the toy first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is a ball. This is a doll. This is a toy car.",
  "questions": [
    "What is the first toy?",
    "What is the second toy?",
    "Name all three toys."
  ]
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is a ___.",
    "I have a ___.",
    "My favorite toy is ___."
  ]
}$json$::jsonb,
  true
),
(
  'e26c6ce6-5e95-4686-83dd-e9d2fbeef6af',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 toys",
    "Say 'This is a ___'",
    "Point to a toy"
  ],
  "challenge": "Show me your favorite toy!"
}$json$::jsonb,
  true
);

-- Lesson 2: My Favorite Toy
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  'My Favorite Toy',
  'A1',
  'kids',
  7,
  2,
  'Describe a favorite toy. [Combination, Lesson 2: controlled practice]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'My Favorite Toy' -- A cheerful kitchen or table scene with a spread of simple, colorful foods -- fruit, bread, milk."
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
  "display": "🧸",
  "questions": [
    "What is your favorite toy?",
    "Do you play with blocks?"
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
      "word": "Favorite",
      "bg": "#FAECE7",
      "image_note": "A single object with a small star or heart on it, marking it as special."
    },
    {
      "word": "Play with",
      "bg": "#E1F5EE",
      "image_note": "A child playing happily with a toy on the floor."
    },
    {
      "word": "Fun",
      "bg": "#EEEDFE",
      "image_note": "A child laughing and playing, arms up in excitement."
    },
    {
      "word": "Toy",
      "bg": "#FAEEDA",
      "image_note": "A pile of a few simple, colorful toys (ball, blocks, car)."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "What is your favorite toy?",
    "Do you play with it?"
  ],
  "student": [
    "My favorite toy is a ball.",
    "Yes, I play with it every day."
  ],
  "note": "Use the word bank: favorite, play with, fun, toy.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [favorite] toy is a car."
    },
    {
      "speaker": "B",
      "text": "I [play with] my doll."
    },
    {
      "speaker": "A",
      "text": "Toys are [fun]!"
    }
  ],
  "blanks": [
    "favorite",
    "play with",
    "fun"
  ]
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite toy is a car."
    },
    {
      "speaker": "B",
      "text": "I play with my doll every day."
    },
    {
      "speaker": "A",
      "text": "Toys are fun!"
    },
    {
      "speaker": "B",
      "text": "I love my toys too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
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
  "text": "My favorite toy is a car. I play with it every day. Toys are fun!",
  "questions": [
    "What is the favorite toy?",
    "How often does the writer play with it?",
    "Are toys fun?"
  ]
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite toy is ___.",
    "I play with it ___.",
    "Toys are ___."
  ]
}$json$::jsonb,
  true
),
(
  '1297f89c-7946-4dbd-947d-d57ff3c6ac90',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my favorite toy",
    "Say 'I play with ___'",
    "Say toys are fun"
  ],
  "challenge": "Tell me your favorite toy and how often you play with it!"
}$json$::jsonb,
  true
);

-- Lesson 3: Big and Small Toys
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  'Big and Small Toys',
  'A1',
  'kids',
  7,
  3,
  'Describe toy size. [Combination, Lesson 3: freer practice, TPR game]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'Big and Small Toys' -- A cheerful kitchen or table scene with a spread of simple, colorful foods -- fruit, bread, milk."
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
  "display": "🧸",
  "questions": [
    "Is your toy big or small?",
    "Is your toy soft or hard?"
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
      "word": "Big",
      "bg": "#FAECE7",
      "image_note": "A large object next to a small one, clearly showing the size difference."
    },
    {
      "word": "Small",
      "bg": "#E1F5EE",
      "image_note": "A small object next to a large one, clearly showing the size difference."
    },
    {
      "word": "Soft",
      "bg": "#EEEDFE",
      "image_note": "A plush teddy bear or soft blanket, cozy texture implied."
    },
    {
      "word": "Hard",
      "bg": "#FAEEDA",
      "image_note": "A wooden block or toy car, solid and rigid-looking."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "Is your toy big or small?",
    "Is it soft or hard?"
  ],
  "student": [
    "My toy is big.",
    "It is soft."
  ],
  "note": "Show big and small with your hands!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My teddy bear is [big] and [soft]."
    },
    {
      "speaker": "B",
      "text": "My car is [small] and [hard]."
    },
    {
      "speaker": "A",
      "text": "I like big toys."
    }
  ],
  "blanks": [
    "big",
    "small",
    "soft"
  ]
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your toy big or small?"
    },
    {
      "speaker": "B",
      "text": "My teddy bear is big and soft. Is your toy small?"
    },
    {
      "speaker": "A",
      "text": "Yes, my car is small and hard."
    },
    {
      "speaker": "B",
      "text": "Show me big and small with your hands!"
    }
  ],
  "note": "Show 'big' with big arms and 'small' with small hands, then describe your toy!"
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My teddy bear is big and soft. My car is small and hard. I like both toys!",
  "questions": [
    "Is the teddy bear big or small?",
    "Is the car soft or hard?",
    "Does the writer like both toys?"
  ]
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My ___ is big and ___.",
    "My ___ is small and ___.",
    "I like ___."
  ]
}$json$::jsonb,
  true
),
(
  '273e4ae2-6f41-4b96-815f-4ac3241b9d25',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'big', 'small', 'soft', 'hard'",
    "Describe a toy's size and feel",
    "Show sizes with my hands"
  ],
  "challenge": "Describe one of your toys: is it big or small, soft or hard?"
}$json$::jsonb,
  true
);

-- Lesson 4: Toy Colors
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  'Toy Colors',
  'A1',
  'kids',
  7,
  4,
  'Combine toys, size, and color into a show-and-tell. [Combination, Lesson 4: production]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'Toy Colors' -- A cheerful kitchen or table scene with a spread of simple, colorful foods -- fruit, bread, milk."
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
  "display": "🎨",
  "questions": [
    "What color is your favorite toy?",
    "Can you show me your toys?"
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
      "word": "Color",
      "bg": "#FAECE7",
      "image_note": "A small rainbow arc or a set of colorful crayons."
    },
    {
      "word": "Have",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "And",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Show",
      "bg": "#FAEEDA",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "What color is your toy?",
    "Can you show me?"
  ],
  "student": [
    "My toy is red and big.",
    "Yes, look!"
  ],
  "note": "Put it all together: toy + color + size!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [have] a red ball."
    },
    {
      "speaker": "B",
      "text": "It is big [and] round."
    },
    {
      "speaker": "A",
      "text": "Let me [show] you!"
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
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your favorite toy."
    },
    {
      "speaker": "B",
      "text": "I have a red ball. It is big and round. I play with it every day."
    },
    {
      "speaker": "A",
      "text": "I have a small blue car. It is fun!"
    },
    {
      "speaker": "B",
      "text": "Show me your toy!"
    }
  ],
  "note": "Show-and-tell: show me a toy and tell me its color and size!"
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
  "text": "I have a red ball. It is big and round. I play with it every day. It is fun!",
  "questions": [
    "What color is the ball?",
    "Is the ball big or small?",
    "How often does the writer play with it?"
  ]
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___ ___.",
    "It is ___ and ___.",
    "I play with it ___."
  ]
}$json$::jsonb,
  true
),
(
  'fde4fca4-9cb3-4a02-be79-944de6efb90b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a toy's color and size",
    "Say 'I have a ___'",
    "Show-and-tell my favorite toy"
  ],
  "challenge": "Show me your favorite toy and tell me all about it!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  'Unit Review',
  'A1',
  'kids',
  7,
  5,
  'Review toys, size, and color. [Combination, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'Unit Review' -- A cheerful kitchen or table scene with a spread of simple, colorful foods -- fruit, bread, milk."
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
  "display": "🧸",
  "questions": [
    "What is your favorite toy?",
    "What color is it?"
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
      "word": "Toy",
      "bg": "#FAECE7",
      "image_note": "A pile of a few simple, colorful toys (ball, blocks, car)."
    },
    {
      "word": "Favorite",
      "bg": "#E1F5EE",
      "image_note": "A single object with a small star or heart on it, marking it as special."
    },
    {
      "word": "Big",
      "bg": "#EEEDFE",
      "image_note": "A large object next to a small one, clearly showing the size difference."
    },
    {
      "word": "Color",
      "bg": "#FAEEDA",
      "image_note": "A small rainbow arc or a set of colorful crayons."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "What is your favorite toy?",
    "What color is it?"
  ],
  "student": [
    "My favorite toy is a ball.",
    "It is red."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [toy] is a car."
    },
    {
      "speaker": "B",
      "text": "It is [big] and red."
    },
    {
      "speaker": "A",
      "text": "I love the [color]!"
    }
  ],
  "blanks": [
    "toy",
    "big",
    "color"
  ]
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite toy is a car. It is big and blue."
    },
    {
      "speaker": "B",
      "text": "My favorite toy is a doll. It is small and pink."
    },
    {
      "speaker": "A",
      "text": "I play with my toys every day."
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
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
  "text": "My favorite toy is a car. It is big and blue. I play with it every day. Toys are fun!",
  "questions": [
    "What is the favorite toy?",
    "What color and size is it?",
    "How often does the writer play?"
  ]
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite toy is ___.",
    "It is ___ and ___.",
    "I play with it ___."
  ]
}$json$::jsonb,
  true
),
(
  'c76fc9e6-30a9-4f41-978f-d6edb3d79f8e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name toys",
    "Describe a toy's size and color",
    "Show-and-tell my favorite toy"
  ],
  "challenge": "Tell me all about your favorite toy!"
}$json$::jsonb,
  true
);
