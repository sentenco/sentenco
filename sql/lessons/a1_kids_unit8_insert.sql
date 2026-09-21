-- A1 Kids Unit 8: Food I Like (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Food
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  'Food',
  'A1',
  'kids',
  8,
  1,
  'Name common foods. [Combination, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'Food' -- A child pointing to parts of their own face and body, playful and simple, mirror or close-up framing."
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
  "display": "🍎",
  "questions": [
    "Do you eat apples?",
    "Do you drink milk?"
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
      "word": "Apple",
      "bg": "#FAECE7",
      "image_note": "A single red apple, simple and bold, maybe with a leaf."
    },
    {
      "word": "Bread",
      "bg": "#E1F5EE",
      "image_note": "A simple loaf of bread or a slice of bread, warm brown tones."
    },
    {
      "word": "Milk",
      "bg": "#EEEDFE",
      "image_note": "A glass of milk, simple and bold, maybe with a milk carton."
    },
    {
      "word": "Rice",
      "bg": "#FAEEDA",
      "image_note": "A simple bowl of white rice, steam lines for warmth."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "What food is this?",
    "Do you eat apples?"
  ],
  "student": [
    "This is an apple.",
    "Yes, I eat apples."
  ],
  "note": "Point to a food picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is an [apple]."
    },
    {
      "speaker": "B",
      "text": "This is [bread]."
    },
    {
      "speaker": "A",
      "text": "This is [milk]."
    }
  ],
  "blanks": [
    "apple",
    "bread",
    "milk"
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is an apple."
    },
    {
      "speaker": "B",
      "text": "This is bread."
    },
    {
      "speaker": "A",
      "text": "This is milk."
    },
    {
      "speaker": "B",
      "text": "This is rice!"
    }
  ],
  "note": "Teacher says the food first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is an apple. This is bread. This is milk.",
  "questions": [
    "What is the first food?",
    "What is the second food?",
    "Name all three foods."
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is ___.",
    "I eat ___.",
    "I drink ___."
  ]
}$json$::jsonb,
  true
),
(
  'eb13ccdf-4647-4417-b635-eceb33696e8b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 foods",
    "Say 'This is ___'",
    "Point to a food"
  ],
  "challenge": "Point to a food and name it!"
}$json$::jsonb,
  true
);

-- Lesson 2: Fruits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  'Fruits',
  'A1',
  'kids',
  8,
  2,
  'Name fruits and combine with ''and''. [Combination, Lesson 2: controlled practice]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'Fruits' -- A child pointing to parts of their own face and body, playful and simple, mirror or close-up framing."
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
  "display": "🍌",
  "questions": [
    "Do you like bananas?",
    "Do you eat grapes?"
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
      "word": "Banana",
      "bg": "#FAECE7",
      "image_note": "A single yellow banana, simple and bold, slightly curved."
    },
    {
      "word": "Orange",
      "bg": "#E1F5EE",
      "image_note": "A single orange fruit, simple and bold, round shape."
    },
    {
      "word": "Grapes",
      "bg": "#EEEDFE",
      "image_note": "A small bunch of purple or green grapes, simple and bold."
    },
    {
      "word": "And",
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
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like bananas?",
    "Do you eat oranges?"
  ],
  "student": [
    "Yes, I like bananas.",
    "Yes, I eat oranges."
  ],
  "note": "Use the word bank: banana, orange, grapes, and.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat a [banana] [and] an [orange]."
    },
    {
      "speaker": "B",
      "text": "I eat [grapes] too."
    },
    {
      "speaker": "A",
      "text": "Fruit is good for me!"
    }
  ],
  "blanks": [
    "banana",
    "and",
    "grapes"
  ]
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat a banana and an orange."
    },
    {
      "speaker": "B",
      "text": "I eat grapes too!"
    },
    {
      "speaker": "A",
      "text": "Fruit is good for me."
    },
    {
      "speaker": "B",
      "text": "I love fruit!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
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
  "text": "I eat a banana and an orange. I eat grapes too. Fruit is good for me!",
  "questions": [
    "What two fruits does the writer eat first?",
    "What fruit does the writer eat too?",
    "Is fruit good?"
  ]
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat a ___ and a/an ___.",
    "I eat ___ too.",
    "Fruit is ___ for me."
  ]
}$json$::jsonb,
  true
),
(
  '6ef0f1c2-62b9-4502-8763-fcd9807fcdf3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 3 fruits",
    "Use 'and' to join two fruits",
    "Say fruit is good"
  ],
  "challenge": "Name two fruits together using 'and'!"
}$json$::jsonb,
  true
);

-- Lesson 3: I Like / I Don't Like
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  'I Like / I Don''t Like',
  'A1',
  'kids',
  8,
  3,
  'Say food likes and dislikes. [Combination, Lesson 3: freer practice, TPR thumbs up/down]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'I Like / I Don't Like' -- A child pointing to parts of their own face and body, playful and simple, mirror or close-up framing."
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
  "display": "🥕",
  "questions": [
    "Do you like carrots?",
    "Is pizza yummy?"
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
      "word": "I like",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "I don't like",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Yummy",
      "bg": "#EEEDFE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Yummy' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Yucky",
      "bg": "#FAEEDA",
      "image_note": "A child making a scrunched-up, unhappy face at a plate of food."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "Do you like carrots?",
    "Is it yummy or yucky?"
  ],
  "student": [
    "I like carrots, they are yummy.",
    "I don't like it, it's yucky."
  ],
  "note": "Thumbs up for yummy, thumbs down for yucky!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I like] pizza. It is [yummy]."
    },
    {
      "speaker": "B",
      "text": "[I don't like] fish."
    },
    {
      "speaker": "A",
      "text": "That's [yucky] for me."
    }
  ],
  "blanks": [
    "i like",
    "i don't like",
    "yummy"
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you like pizza?"
    },
    {
      "speaker": "B",
      "text": "I like pizza, it's yummy! I don't like fish, it's yucky for me."
    },
    {
      "speaker": "A",
      "text": "I like carrots too."
    },
    {
      "speaker": "B",
      "text": "Thumbs up or thumbs down for carrots?"
    }
  ],
  "note": "Thumbs up/thumbs down game: I say a food, you show thumbs up or down and say why!"
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like pizza. It is yummy. I don't like fish. It is yucky for me.",
  "questions": [
    "What does the writer like?",
    "What doesn't the writer like?",
    "Is fish yummy or yucky for the writer?"
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___. It is yummy.",
    "I don't like ___.",
    "It is yucky for me."
  ]
}$json$::jsonb,
  true
),
(
  'a98e85f0-872b-4767-976c-4a3ba9179342',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like' and 'I don't like'",
    "Say 'yummy' and 'yucky'",
    "Show thumbs up or down for a food"
  ],
  "challenge": "Tell me a food you like and a food you don't like!"
}$json$::jsonb,
  true
);

-- Lesson 4: Healthy Food
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7609619a-462c-4485-99d3-5e33724e18ad',
  'Healthy Food',
  'A1',
  'kids',
  8,
  4,
  'Combine food vocabulary into a healthy-eating talk. [Combination, Lesson 4: production, show-and-tell]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'Healthy Food' -- A child pointing to parts of their own face and body, playful and simple, mirror or close-up framing."
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
  "display": "🥗",
  "questions": [
    "What healthy food do you eat?",
    "What do you drink every day?"
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
      "word": "Healthy",
      "bg": "#FAECE7",
      "image_note": "A colorful plate with fruits and vegetables, bright and appetizing."
    },
    {
      "word": "Good for me",
      "bg": "#E1F5EE",
      "image_note": "A child eating a fruit or vegetable happily, a small heart or star nearby."
    },
    {
      "word": "Eat",
      "bg": "#EEEDFE",
      "image_note": "A child eating happily at the table, fork or spoon in hand."
    },
    {
      "word": "Drink",
      "bg": "#FAEEDA",
      "image_note": "A child drinking from a cup, simple and cheerful."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "What healthy food do you eat?",
    "What do you drink?"
  ],
  "student": [
    "I eat apples, they are healthy.",
    "I drink milk every day."
  ],
  "note": "Put it all together: food + drink + healthy opinion.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [eat] apples. They are [healthy]."
    },
    {
      "speaker": "B",
      "text": "I [drink] milk."
    },
    {
      "speaker": "A",
      "text": "It is [good for me]."
    }
  ],
  "blanks": [
    "eat",
    "healthy",
    "good for me"
  ]
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What healthy food do you eat?"
    },
    {
      "speaker": "B",
      "text": "I eat apples and bananas. They are healthy."
    },
    {
      "speaker": "A",
      "text": "I drink milk every day. It is good for me."
    },
    {
      "speaker": "B",
      "text": "I like healthy food too!"
    }
  ],
  "note": "Show-and-tell: tell me your healthy foods for today!"
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
  "text": "I eat apples and bananas. They are healthy. I drink milk every day. It is good for me.",
  "questions": [
    "What healthy foods does the writer eat?",
    "What does the writer drink?",
    "Is milk good for the writer?"
  ]
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat ___ and ___.",
    "They are healthy.",
    "I drink ___ every day."
  ]
}$json$::jsonb,
  true
),
(
  '7609619a-462c-4485-99d3-5e33724e18ad',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name healthy foods",
    "Say 'good for me'",
    "Talk about healthy eating"
  ],
  "challenge": "Tell me your healthy foods and drinks!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  'Unit Review',
  'A1',
  'kids',
  8,
  5,
  'Review food, fruit, and likes/dislikes. [Combination, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

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
  "image_note": "Hero image for 'Unit Review' -- A child pointing to parts of their own face and body, playful and simple, mirror or close-up framing."
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
  "display": "🍎",
  "questions": [
    "What food do you like?",
    "Is it healthy?"
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
      "word": "Food",
      "bg": "#FAECE7",
      "image_note": "A simple plate with a mix of fruit, bread, and vegetables."
    },
    {
      "word": "Like",
      "bg": "#E1F5EE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Like' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Yummy",
      "bg": "#EEEDFE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Yummy' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Healthy",
      "bg": "#FAEEDA",
      "image_note": "A colorful plate with fruits and vegetables, bright and appetizing."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
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
  "teacher": [
    "What food do you like?",
    "Is it healthy?"
  ],
  "student": [
    "I like apples.",
    "Yes, they are healthy."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [like] apples and bananas."
    },
    {
      "speaker": "B",
      "text": "They are [yummy] and [healthy]."
    },
    {
      "speaker": "A",
      "text": "I eat healthy [food]."
    }
  ],
  "blanks": [
    "like",
    "yummy",
    "food"
  ]
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like apples and bananas. They are yummy and healthy."
    },
    {
      "speaker": "B",
      "text": "I like carrots. I don't like fish."
    },
    {
      "speaker": "A",
      "text": "I drink milk every day."
    },
    {
      "speaker": "B",
      "text": "Healthy food is good for us!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
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
  "text": "I like apples and bananas. They are yummy and healthy. I drink milk every day. Healthy food is good for me!",
  "questions": [
    "What foods does the writer like?",
    "Are they yummy or yucky?",
    "Is healthy food good?"
  ]
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___ and ___.",
    "They are ___.",
    "Healthy food is ___ for me."
  ]
}$json$::jsonb,
  true
),
(
  'bd117b4f-5984-49ad-9fc4-5df329dea81b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name foods",
    "Say likes and dislikes",
    "Talk about healthy food"
  ],
  "challenge": "Tell me all about your favorite foods!"
}$json$::jsonb,
  true
);
