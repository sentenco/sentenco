-- A2 Teens Unit 7: Town Life and Getting Around (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Places Teens Go
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fba12093-ccc1-45ac-9de0-9324d0e86dfb',
  'Places Teens Go',
  'A2',
  'teens',
  7,
  1,
  'Describe places using past experience and connectors. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fba12093-ccc1-45ac-9de0-9324d0e86dfb',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'fba12093-ccc1-45ac-9de0-9324d0e86dfb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏬",
  "questions": [
    "Where did you go last weekend, and why?",
    "Did you enjoy it but wish it was different?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'fba12093-ccc1-45ac-9de0-9324d0e86dfb',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Went to",
      "bg": "#FAECE7"
    },
    {
      "word": "And",
      "bg": "#E1F5EE"
    },
    {
      "word": "But",
      "bg": "#EEEDFE"
    },
    {
      "word": "Because",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'fba12093-ccc1-45ac-9de0-9324d0e86dfb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where did you go, and why did you choose it?",
    "Did you enjoy it, but wish something was different?"
  ],
  "student": [
    "I went to the mall because it was raining.",
    "I liked it, but it was crowded."
  ],
  "note": "Partial prompt: I went to ___ and ___, but ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fba12093-ccc1-45ac-9de0-9324d0e86dfb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [went to] the skate park [and] met friends there."
    },
    {
      "speaker": "B",
      "text": "I liked it, [but] it was very hot."
    },
    {
      "speaker": "A",
      "text": "I went [because] my friend invited me."
    }
  ],
  "blanks": [
    "went to",
    "and",
    "but"
  ]
}$json$::jsonb,
  true
),
(
  'fba12093-ccc1-45ac-9de0-9324d0e86dfb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where did you go with friends recently, and why?"
    },
    {
      "speaker": "B",
      "text": "I went to the café and studied there because it's quiet."
    },
    {
      "speaker": "A",
      "text": "I went to the arcade too, but it was too noisy for studying."
    },
    {
      "speaker": "B",
      "text": "That makes sense!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Connect two ideas with and/but/because."
}$json$::jsonb,
  true
),
(
  'fba12093-ccc1-45ac-9de0-9324d0e86dfb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last Saturday, four friends went to different places in town. Sam went to the skate park and practiced tricks all afternoon, because the weather was perfect. Mia went to the café and studied for two hours, but she left early because it got too crowded. Leo went to the arcade with his cousin and won a small prize, and Ana went shopping because she needed new shoes for a school event. Everyone chose a different place, but they all met up for dinner afterward.",
  "questions": [
    "Why did Sam go to the skate park?",
    "Why did Mia leave the café early?",
    "What did everyone do afterward?"
  ]
}$json$::jsonb,
  true
),
(
  'fba12093-ccc1-45ac-9de0-9324d0e86dfb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Last weekend, I went to ___ and ___, because ___.",
    "I liked it, but ___.",
    "Afterward, I ___."
  ]
}$json$::jsonb,
  true
),
(
  'fba12093-ccc1-45ac-9de0-9324d0e86dfb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a past outing with connectors",
    "Use 'and', 'but', 'because' to connect ideas",
    "Explain why I chose a place"
  ],
  "challenge": "Tell me where you went recently and why, connecting your ideas!"
}$json$::jsonb,
  true
);

-- Lesson 2: Directions and Meeting Points
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b608dcfa-f22d-4d63-8d1d-5036dc2d6c26',
  'Directions and Meeting Points',
  'A2',
  'teens',
  7,
  2,
  'Give directions with sequencing and connectors. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b608dcfa-f22d-4d63-8d1d-5036dc2d6c26',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'b608dcfa-f22d-4d63-8d1d-5036dc2d6c26',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧭",
  "questions": [
    "Did you get lost on the way somewhere, but find it eventually?",
    "Where did you turn to find the place?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'b608dcfa-f22d-4d63-8d1d-5036dc2d6c26',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Turned",
      "bg": "#FAECE7"
    },
    {
      "word": "Walked past",
      "bg": "#E1F5EE"
    },
    {
      "word": "And then",
      "bg": "#EEEDFE"
    },
    {
      "word": "But",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b608dcfa-f22d-4d63-8d1d-5036dc2d6c26',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How did you find the place?",
    "Did anything go wrong on the way?"
  ],
  "student": [
    "I turned left and then found it.",
    "I got lost, but a stranger helped me."
  ],
  "note": "Partial prompt: I turned ___ and then ___, but ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b608dcfa-f22d-4d63-8d1d-5036dc2d6c26',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [turned] left at the mall."
    },
    {
      "speaker": "B",
      "text": "I [walked past] the café [and then] found the shop."
    },
    {
      "speaker": "A",
      "text": "I got lost, [but] I asked for help."
    }
  ],
  "blanks": [
    "turned",
    "walked past",
    "and then"
  ]
}$json$::jsonb,
  true
),
(
  'b608dcfa-f22d-4d63-8d1d-5036dc2d6c26',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How did you find the new café?"
    },
    {
      "speaker": "B",
      "text": "I turned left at the mall and then walked past the school, but I still couldn't find it."
    },
    {
      "speaker": "A",
      "text": "What happened next?"
    },
    {
      "speaker": "B",
      "text": "I asked someone for directions, and then I finally found it near the park."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Sequence the journey and note any problem."
}$json$::jsonb,
  true
),
(
  'b608dcfa-f22d-4d63-8d1d-5036dc2d6c26',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Yesterday, I tried to find a new bookshop for the first time. I turned left at the mall and then walked past the school, but the shop wasn't where I expected. I got a little lost, so I asked a shopkeeper for directions, and then I found it two streets further, next to the park. It took longer than I planned, but I finally arrived and it was worth the walk because the shop had exactly the book I wanted.",
  "questions": [
    "What did the writer do first?",
    "What problem happened?",
    "How did the writer solve it?"
  ]
}$json$::jsonb,
  true
),
(
  'b608dcfa-f22d-4d63-8d1d-5036dc2d6c26',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I turned ___ and then ___, but ___.",
    "I got lost, so I ___.",
    "I finally found it because ___."
  ]
}$json$::jsonb,
  true
),
(
  'b608dcfa-f22d-4d63-8d1d-5036dc2d6c26',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Sequence a journey with connectors",
    "Describe a problem finding a place",
    "Explain how the problem was solved"
  ],
  "challenge": "Tell me about a time you found (or got lost finding) a new place!"
}$json$::jsonb,
  true
);

-- Lesson 3: Busy or Quiet?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cd8d76ca-ad27-4c79-a8a2-f59cce67d845',
  'Busy or Quiet?',
  'A2',
  'teens',
  7,
  3,
  'Compare places in town with reasons. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cd8d76ca-ad27-4c79-a8a2-f59cce67d845',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'cd8d76ca-ad27-4c79-a8a2-f59cce67d845',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚶‍♀️",
  "questions": [
    "Was the mall more crowded than usual last weekend?",
    "Do you prefer livelier or calmer places?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'cd8d76ca-ad27-4c79-a8a2-f59cce67d845',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Crowded",
      "bg": "#FAECE7"
    },
    {
      "word": "More peaceful",
      "bg": "#E1F5EE"
    },
    {
      "word": "Livelier",
      "bg": "#EEEDFE"
    },
    {
      "word": "Calmer",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cd8d76ca-ad27-4c79-a8a2-f59cce67d845',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Was it more crowded than usual?",
    "Do you prefer it livelier or calmer?"
  ],
  "student": [
    "Yes, it was much more crowded.",
    "I prefer it calmer."
  ],
  "note": "Partial prompt: ___ was more ___ than usual because ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cd8d76ca-ad27-4c79-a8a2-f59cce67d845',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The mall was [more crowded] than usual."
    },
    {
      "speaker": "B",
      "text": "The park felt [more peaceful]."
    },
    {
      "speaker": "A",
      "text": "I prefer places that are [calmer]."
    }
  ],
  "blanks": [
    "more crowded",
    "more peaceful",
    "calmer"
  ]
}$json$::jsonb,
  true
),
(
  'cd8d76ca-ad27-4c79-a8a2-f59cce67d845',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Was the mall more crowded than usual last weekend?"
    },
    {
      "speaker": "B",
      "text": "Yes, it was much more crowded than usual because of the sale."
    },
    {
      "speaker": "A",
      "text": "I preferred the park, it was calmer and more peaceful."
    },
    {
      "speaker": "B",
      "text": "I like livelier places, honestly."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Explain your preference with a reason."
}$json$::jsonb,
  true
),
(
  'cd8d76ca-ad27-4c79-a8a2-f59cce67d845',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last weekend, the mall was more crowded than usual because there was a big sale. My friend and I couldn't move easily, and it was louder than we expected. Because of that, we decided to leave and go to the park instead. The park was much calmer and more peaceful, with fewer people and more space to relax. I think I prefer quieter places, but my friend said the mall was livelier and more exciting for her.",
  "questions": [
    "Why was the mall more crowded than usual?",
    "Where did they go instead, and why?",
    "Do the two friends prefer the same type of place?"
  ]
}$json$::jsonb,
  true
),
(
  'cd8d76ca-ad27-4c79-a8a2-f59cce67d845',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ was more crowded than usual because ___.",
    "We decided to ___ instead.",
    "I prefer ___ places because ___."
  ]
}$json$::jsonb,
  true
),
(
  'cd8d76ca-ad27-4c79-a8a2-f59cce67d845',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare busy and quiet places",
    "Give a reason for a place being busy",
    "Explain a personal preference"
  ],
  "challenge": "Compare a busy place and a quiet place, and tell me which you prefer and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Day Out Plan
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '13f51509-4399-41e0-8f8a-18f9c95e63bb',
  'A Day Out Plan',
  'A2',
  'teens',
  7,
  4,
  'Plan a day out with sequencing and connectors. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '13f51509-4399-41e0-8f8a-18f9c95e63bb',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '13f51509-4399-41e0-8f8a-18f9c95e63bb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🗓️",
  "questions": [
    "What would your ideal day out look like, and why?",
    "What would you do first and why?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '13f51509-4399-41e0-8f8a-18f9c95e63bb',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "First",
      "bg": "#FAECE7"
    },
    {
      "word": "After that",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "Wrap up",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '13f51509-4399-41e0-8f8a-18f9c95e63bb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's your plan for the day, and why?",
    "What would you do first?"
  ],
  "student": [
    "First, we'll go to the arcade because it opens early.",
    "After that, we'll eat because we'll be hungry."
  ],
  "note": "Partial prompt: First, ___ because ___. After that, ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '13f51509-4399-41e0-8f8a-18f9c95e63bb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[First], we'll go to the skate park because it's quiet in the morning."
    },
    {
      "speaker": "B",
      "text": "[After that], we'll get food because we'll be hungry."
    },
    {
      "speaker": "A",
      "text": "We'll [wrap up] at the café."
    }
  ],
  "blanks": [
    "first",
    "after that",
    "wrap up"
  ]
}$json$::jsonb,
  true
),
(
  '13f51509-4399-41e0-8f8a-18f9c95e63bb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your plan for the perfect day out, and why that order?"
    },
    {
      "speaker": "B",
      "text": "First, we'll go to the skate park, because it's quiet in the morning. After that, we'll get lunch because we'll be hungry by noon."
    },
    {
      "speaker": "A",
      "text": "Then we'll wrap up at the café, because it's a relaxing way to end the day."
    },
    {
      "speaker": "B",
      "text": "That's a well-planned day!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Justify each step of the plan."
}$json$::jsonb,
  true
),
(
  '13f51509-4399-41e0-8f8a-18f9c95e63bb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Here is my plan for a perfect day out. First, we'll meet at the skate park at 10am, because it's quiet before noon and we can practice without crowds. After that, we'll get lunch at the new café nearby, because everyone said the food is great and it's close by. Then, we'll go shopping at the mall, but only for an hour, because we don't want to spend too much money. Finally, we'll wrap up the day watching a movie, because it's a relaxing way to end a busy day.",
  "questions": [
    "Why does the plan start at the skate park?",
    "Why do they choose that café?",
    "Why do they limit shopping to an hour?"
  ]
}$json$::jsonb,
  true
),
(
  '13f51509-4399-41e0-8f8a-18f9c95e63bb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, we'll ___ because ___.",
    "After that, we'll ___ because ___.",
    "Finally, we'll ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '13f51509-4399-41e0-8f8a-18f9c95e63bb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Plan a day out with reasons for each step",
    "Use sequencing words with 'because'",
    "Justify choices in a plan"
  ],
  "challenge": "Tell me your plan for a perfect day out, and explain why you chose each part!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '80ed8a69-0050-4b1d-9567-25757ed55de5',
  'Unit Review',
  'A2',
  'teens',
  7,
  5,
  'Review town places, directions, comparisons, and a reasoned day plan. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '80ed8a69-0050-4b1d-9567-25757ed55de5',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '80ed8a69-0050-4b1d-9567-25757ed55de5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏙️",
  "questions": [
    "Where did you go recently, and why?",
    "Was it more or less crowded than expected?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '80ed8a69-0050-4b1d-9567-25757ed55de5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Went to",
      "bg": "#FAECE7"
    },
    {
      "word": "More crowded",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "First",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '80ed8a69-0050-4b1d-9567-25757ed55de5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where did you go, and why?",
    "Was it busier or calmer than expected?"
  ],
  "student": [
    "I went to the café because it's quiet.",
    "It was calmer than I expected."
  ],
  "note": "Use connectors and comparatives throughout.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '80ed8a69-0050-4b1d-9567-25757ed55de5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [went to] the mall [because] of the sale."
    },
    {
      "speaker": "B",
      "text": "It was [more crowded] than usual."
    },
    {
      "speaker": "A",
      "text": "[First], we shopped, and then we ate."
    }
  ],
  "blanks": [
    "went to",
    "more crowded",
    "first"
  ]
}$json$::jsonb,
  true
),
(
  '80ed8a69-0050-4b1d-9567-25757ed55de5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about a recent outing and how you'd plan the next one."
    },
    {
      "speaker": "B",
      "text": "I went to the mall because of a sale, but it was more crowded than I expected."
    },
    {
      "speaker": "A",
      "text": "Next time, first I'll go somewhere calmer, and then I'll decide based on how I feel."
    },
    {
      "speaker": "B",
      "text": "That sounds like a better plan."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '80ed8a69-0050-4b1d-9567-25757ed55de5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last weekend, I went to the mall because of a big sale, but it was more crowded than I expected, so I left early and went to the park instead, which was much calmer. Next time, I want to plan better: first, I'll check how busy a place usually is, and then I'll decide whether to go in the morning or afternoon. Because of this experience, I now prefer quieter places for relaxing and livelier places only when I'm ready for crowds.",
  "questions": [
    "Why did the writer leave the mall early?",
    "What will the writer do differently next time?",
    "What preference did the writer discover?"
  ]
}$json$::jsonb,
  true
),
(
  '80ed8a69-0050-4b1d-9567-25757ed55de5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I went to ___ because ___, but ___.",
    "Next time, first I'll ___, and then ___.",
    "I prefer ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '80ed8a69-0050-4b1d-9567-25757ed55de5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a past outing with reasons",
    "Give directions with connectors",
    "Compare busy and quiet places",
    "Plan a day out with justification"
  ],
  "challenge": "Tell me all about your town, your outings, and how you'd plan a perfect day!"
}$json$::jsonb,
  true
);
