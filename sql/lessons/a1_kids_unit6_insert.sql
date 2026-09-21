-- A1 Kids Unit 6: Animals (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Animals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  'Animals',
  'A1',
  'kids',
  6,
  1,
  'Name common animals. [Combination, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Animals' -- A child's playroom scene with a scattered mix of simple, colorful toys -- balls, blocks, a toy car."
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐶",
  "questions": [
    "Do you have a pet?",
    "Do you like dogs?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dog",
      "bg": "#FAECE7",
      "image_note": "A friendly cartoon dog, simple rounded shape, wagging tail."
    },
    {
      "word": "Cat",
      "bg": "#E1F5EE",
      "image_note": "A friendly cartoon cat, simple rounded shape, sitting."
    },
    {
      "word": "Bird",
      "bg": "#EEEDFE",
      "image_note": "A small colorful cartoon bird, simple rounded shape."
    },
    {
      "word": "Fish",
      "bg": "#FAEEDA",
      "image_note": "A simple colorful cartoon fish, swimming."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What animal is this?",
    "Do you like dogs?"
  ],
  "student": [
    "This is a dog.",
    "Yes, I like dogs!"
  ],
  "note": "Point to an animal picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a [dog]."
    },
    {
      "speaker": "B",
      "text": "This is a [cat]."
    },
    {
      "speaker": "A",
      "text": "This is a [bird]."
    }
  ],
  "blanks": [
    "dog",
    "cat",
    "bird"
  ]
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is a dog."
    },
    {
      "speaker": "B",
      "text": "This is a cat."
    },
    {
      "speaker": "A",
      "text": "This is a bird."
    },
    {
      "speaker": "B",
      "text": "This is a fish!"
    }
  ],
  "note": "Teacher says the animal first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is a dog. This is a cat. This is a bird.",
  "questions": [
    "What is the first animal?",
    "What is the second animal?",
    "Name all three animals."
  ]
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is a ___.",
    "I see a ___.",
    "My favorite animal is ___."
  ]
}$json$::jsonb,
  true
),
(
  'f47bc376-262a-4819-891f-9432fc9e3f66',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 animals",
    "Say 'This is a ___'",
    "Point to an animal"
  ],
  "challenge": "Point to an animal picture and name it!"
}$json$::jsonb,
  true
);

-- Lesson 2: Farm Animals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  'Farm Animals',
  'A1',
  'kids',
  6,
  2,
  'Name farm animals and combine with ''and''. [Combination, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Farm Animals' -- A child's playroom scene with a scattered mix of simple, colorful toys -- balls, blocks, a toy car."
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐄",
  "questions": [
    "Have you seen a cow?",
    "Do you like horses?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Cow",
      "bg": "#FAECE7",
      "image_note": "A friendly cartoon cow, simple rounded shape, black and white spots."
    },
    {
      "word": "Horse",
      "bg": "#E1F5EE",
      "image_note": "A friendly cartoon horse, simple rounded shape."
    },
    {
      "word": "Sheep",
      "bg": "#EEEDFE",
      "image_note": "A friendly cartoon sheep, fluffy white wool, simple shape."
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
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Have you seen a cow?",
    "Do you like horses?"
  ],
  "student": [
    "Yes, I have seen a cow.",
    "Yes, I like horses."
  ],
  "note": "Use the word bank: cow, horse, sheep, and.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I see a [cow] [and] a [horse]."
    },
    {
      "speaker": "B",
      "text": "I see a [sheep] too."
    },
    {
      "speaker": "A",
      "text": "Farm animals are fun!"
    }
  ],
  "blanks": [
    "cow",
    "and",
    "sheep"
  ]
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I see a cow and a horse."
    },
    {
      "speaker": "B",
      "text": "I see a sheep too!"
    },
    {
      "speaker": "A",
      "text": "Farm animals are fun."
    },
    {
      "speaker": "B",
      "text": "I love farm animals!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I see a cow and a horse. I see a sheep too. Farm animals are fun!",
  "questions": [
    "What two animals does the writer see first?",
    "What animal does the writer see too?",
    "Are farm animals fun?"
  ]
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I see a ___ and a ___.",
    "I see a ___ too.",
    "Farm animals are ___."
  ]
}$json$::jsonb,
  true
),
(
  'd3045560-ac5a-444b-a3c9-b40f20632af7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 3 farm animals",
    "Use 'and' to join two animals",
    "Say if farm animals are fun"
  ],
  "challenge": "Name two farm animals together using 'and'!"
}$json$::jsonb,
  true
);

-- Lesson 3: Pets
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  'Pets',
  'A1',
  'kids',
  6,
  3,
  'Say pet preferences with ''I like/I don''t like''. [Combination, Lesson 3: freer practice, TPR animal sounds]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Pets' -- A child's playroom scene with a scattered mix of simple, colorful toys -- balls, blocks, a toy car."
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐱",
  "questions": [
    "Do you have a pet?",
    "What pet do you like?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Pet",
      "bg": "#FAECE7",
      "image_note": "A child hugging a small pet, like a dog or cat, affectionately."
    },
    {
      "word": "I like",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "I don't like",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Cute",
      "bg": "#FAEEDA",
      "image_note": "An adorable small toy or animal with big round eyes."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like cats?",
    "What pet do you want?"
  ],
  "student": [
    "I like cats, they are cute.",
    "I want a dog."
  ],
  "note": "Make an animal sound, then say if you like it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I like] cats. They are [cute]."
    },
    {
      "speaker": "B",
      "text": "[I don't like] big dogs."
    },
    {
      "speaker": "A",
      "text": "I like small [pet]s."
    }
  ],
  "blanks": [
    "i like",
    "i don't like",
    "cute"
  ]
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you like cats?"
    },
    {
      "speaker": "B",
      "text": "I like cats, they are cute! I don't like big dogs."
    },
    {
      "speaker": "A",
      "text": "I like small pets too."
    },
    {
      "speaker": "B",
      "text": "Make a cat sound! Meow!"
    }
  ],
  "note": "Animal sound game: make the animal sound, then say if you like that pet!"
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like cats. They are cute. I don't like big dogs. I like small pets.",
  "questions": [
    "What does the writer like?",
    "What doesn't the writer like?",
    "What size pets does the writer like?"
  ]
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___. They are ___.",
    "I don't like ___.",
    "I like ___ pets."
  ]
}$json$::jsonb,
  true
),
(
  '39e1541f-0c79-49c2-b9fc-90b27adefe18',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like' and 'I don't like'",
    "Say 'cute'",
    "Make an animal sound"
  ],
  "challenge": "Tell me a pet you like and a pet you don't like!"
}$json$::jsonb,
  true
);

-- Lesson 4: Animal Actions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  'Animal Actions',
  'A1',
  'kids',
  6,
  4,
  'Combine animals with actions. [Combination, Lesson 4: production, TPR show-and-tell]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Animal Actions' -- A child's playroom scene with a scattered mix of simple, colorful toys -- balls, blocks, a toy car."
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐦",
  "questions": [
    "Can a fish swim?",
    "Can a bird fly?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Jump",
      "bg": "#FAECE7",
      "image_note": "A child jumping in mid-air, arms and legs spread, motion lines."
    },
    {
      "word": "Run",
      "bg": "#E1F5EE",
      "image_note": "A child running happily, mid-stride, motion lines."
    },
    {
      "word": "Swim",
      "bg": "#EEEDFE",
      "image_note": "A child swimming in a pool, simple splashy water lines."
    },
    {
      "word": "Fly",
      "bg": "#FAEEDA",
      "image_note": "A bird flying through a blue sky with simple clouds."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Can a fish swim?",
    "Can a bird fly?"
  ],
  "student": [
    "Yes, a fish can swim.",
    "Yes, a bird can fly."
  ],
  "note": "Act out the animal action, then say it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "A frog can [jump]."
    },
    {
      "speaker": "B",
      "text": "A dog can [run]."
    },
    {
      "speaker": "A",
      "text": "A fish can [swim]."
    }
  ],
  "blanks": [
    "jump",
    "run",
    "swim"
  ]
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "A frog can jump. A dog can run."
    },
    {
      "speaker": "B",
      "text": "A fish can swim. A bird can fly!"
    },
    {
      "speaker": "A",
      "text": "Let's act like a frog! Jump!"
    },
    {
      "speaker": "B",
      "text": "Let's act like a bird! Fly!"
    }
  ],
  "note": "Show-and-tell with actions: act out each animal while you say what it can do!"
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "A frog can jump. A dog can run. A fish can swim. A bird can fly.",
  "questions": [
    "What can a frog do?",
    "What can a fish do?",
    "What can a bird do?"
  ]
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "A ___ can jump.",
    "A ___ can swim.",
    "A ___ can fly."
  ]
}$json$::jsonb,
  true
),
(
  'a376f416-b9a4-49da-bc5d-0a3f3ad7a931',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 4 animal actions",
    "Act out an animal",
    "Say 'A ___ can ___'"
  ],
  "challenge": "Act out an animal and tell me what it can do!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  'Unit Review',
  'A1',
  'kids',
  6,
  5,
  'Review animals, pets, and actions. [Combination, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A child's playroom scene with a scattered mix of simple, colorful toys -- balls, blocks, a toy car."
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐶",
  "questions": [
    "What animal do you like?",
    "Can you act like an animal?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dog",
      "bg": "#FAECE7",
      "image_note": "A friendly cartoon dog, simple rounded shape, wagging tail."
    },
    {
      "word": "Like",
      "bg": "#E1F5EE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Like' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Cute",
      "bg": "#EEEDFE",
      "image_note": "An adorable small toy or animal with big round eyes."
    },
    {
      "word": "Jump",
      "bg": "#FAEEDA",
      "image_note": "A child jumping in mid-air, arms and legs spread, motion lines."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What animal do you like?",
    "What can it do?"
  ],
  "student": [
    "I like dogs.",
    "A dog can run."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [like] dogs. They are [cute]."
    },
    {
      "speaker": "B",
      "text": "A dog can [jump]."
    },
    {
      "speaker": "A",
      "text": "I see a [dog] and a cat."
    }
  ],
  "blanks": [
    "like",
    "cute",
    "jump"
  ]
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like dogs. They are cute and they can jump."
    },
    {
      "speaker": "B",
      "text": "I like cats. They are cute too."
    },
    {
      "speaker": "A",
      "text": "I see a dog and a cat!"
    },
    {
      "speaker": "B",
      "text": "Let's act like animals!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like dogs. They are cute. A dog can run and jump. I see a dog and a cat.",
  "questions": [
    "What animal does the writer like?",
    "What can a dog do?",
    "What two animals does the writer see?"
  ]
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___. They are ___.",
    "A ___ can ___.",
    "I see a ___ and a ___."
  ]
}$json$::jsonb,
  true
),
(
  'a2cae378-0ae3-43ac-acc6-7d878cd61998',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name animals",
    "Say a pet preference",
    "Say what an animal can do"
  ],
  "challenge": "Tell me your favorite animal and what it can do!"
}$json$::jsonb,
  true
);
