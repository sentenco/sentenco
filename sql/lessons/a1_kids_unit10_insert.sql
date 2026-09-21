-- A1 Kids Unit 10: Weather Today (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Weather Words
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  'Weather Words',
  'A1',
  'kids',
  10,
  1,
  'Name weather words. [Bridge, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Weather Words' -- A cutaway view of a cozy house showing a few rooms at once -- kitchen, bedroom, living room."
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "☀️",
  "questions": [
    "Is it sunny today?",
    "Do you like rainy days?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Sunny",
      "bg": "#FAECE7",
      "image_note": "A bright yellow sun with rays, clear blue sky, no clouds."
    },
    {
      "word": "Rainy",
      "bg": "#E1F5EE",
      "image_note": "Grey clouds with simple raindrops falling, maybe a puddle."
    },
    {
      "word": "Cloudy",
      "bg": "#EEEDFE",
      "image_note": "Soft grey and white clouds filling the sky, sun barely peeking through."
    },
    {
      "word": "Windy",
      "bg": "#FAEEDA",
      "image_note": "Trees bending and leaves blowing sideways, motion lines for wind."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is the weather?",
    "Is it sunny?"
  ],
  "student": [
    "It is sunny.",
    "Yes, it is sunny."
  ],
  "note": "Point to the sky or a weather picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Today is [sunny]."
    },
    {
      "speaker": "B",
      "text": "Today is [rainy]."
    },
    {
      "speaker": "A",
      "text": "Today is [cloudy]."
    }
  ],
  "blanks": [
    "sunny",
    "rainy",
    "cloudy"
  ]
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Today is sunny."
    },
    {
      "speaker": "B",
      "text": "Today is rainy."
    },
    {
      "speaker": "A",
      "text": "Today is cloudy."
    },
    {
      "speaker": "B",
      "text": "Today is windy!"
    }
  ],
  "note": "Teacher says the weather first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today is sunny. Today is rainy. Today is cloudy.",
  "questions": [
    "What is the first weather word?",
    "What is the second weather word?",
    "Name all three weather words."
  ]
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today is ___.",
    "I like ___ days.",
    "It is ___ today."
  ]
}$json$::jsonb,
  true
),
(
  'd1e596f4-f445-48cf-ae0d-9af8f68b186d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 weather words",
    "Say 'Today is ___'",
    "Look at the sky and describe it"
  ],
  "challenge": "Tell me what the weather is like today!"
}$json$::jsonb,
  true
);

-- Lesson 2: Sunny or Rainy
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  'Sunny or Rainy',
  'A1',
  'kids',
  10,
  2,
  'Ask and answer about weather. [Bridge, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Sunny or Rainy' -- A cutaway view of a cozy house showing a few rooms at once -- kitchen, bedroom, living room."
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌦️",
  "questions": [
    "Is it hot today?",
    "Is it sunny or rainy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Is it",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Yes",
      "bg": "#E1F5EE",
      "image_note": "A simple green checkmark or a child nodding happily."
    },
    {
      "word": "No",
      "bg": "#EEEDFE",
      "image_note": "A simple red X or a child shaking their head gently."
    },
    {
      "word": "Hot",
      "bg": "#FAEEDA",
      "image_note": "A bright sun with wavy heat lines, a child fanning themselves."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is it sunny today?",
    "Is it hot?"
  ],
  "student": [
    "Yes, it is sunny.",
    "No, it is not hot."
  ],
  "note": "Use the word bank: is it, yes, no, hot.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Is it] sunny today?"
    },
    {
      "speaker": "B",
      "text": "[Yes], it is sunny."
    },
    {
      "speaker": "A",
      "text": "Is it [hot]?"
    }
  ],
  "blanks": [
    "is it",
    "yes",
    "hot"
  ]
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is it sunny today?"
    },
    {
      "speaker": "B",
      "text": "Yes, it is sunny! Is it hot?"
    },
    {
      "speaker": "A",
      "text": "No, it is not hot. It is warm."
    },
    {
      "speaker": "B",
      "text": "I like sunny days!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Is it sunny today? Yes, it is sunny. Is it hot? No, it is warm.",
  "questions": [
    "Is it sunny?",
    "Is it hot?",
    "What is it instead of hot?"
  ]
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Is it ___ today?",
    "Yes, it is ___.",
    "No, it is ___."
  ]
}$json$::jsonb,
  true
),
(
  '4c52bedc-2b09-4628-9912-c5aa7b749ec6',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Is it ___?'",
    "Answer 'Yes' and 'No'",
    "Say 'hot' and 'warm'"
  ],
  "challenge": "Ask me if it's sunny or rainy today!"
}$json$::jsonb,
  true
);

-- Lesson 3: What's the Weather Like?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  'What''s the Weather Like?',
  'A1',
  'kids',
  10,
  3,
  'Combine weather and clothes with ''and''. [Bridge, Lesson 3: freer practice, TPR]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'What's the Weather Like?' -- A cutaway view of a cozy house showing a few rooms at once -- kitchen, bedroom, living room."
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧥",
  "questions": [
    "What do you wear when it's cold?",
    "Do you use an umbrella when it rains?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Wear",
      "bg": "#FAECE7",
      "image_note": "A child putting on a jacket or coat, simple illustration."
    },
    {
      "word": "Coat",
      "bg": "#E1F5EE",
      "image_note": "A single warm winter coat, simple and bold, on a hanger."
    },
    {
      "word": "Umbrella",
      "bg": "#EEEDFE",
      "image_note": "A single open umbrella, bright color, simple and bold."
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
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you wear when it's cold?",
    "Do you use an umbrella?"
  ],
  "student": [
    "I wear a coat.",
    "Yes, I use an umbrella."
  ],
  "note": "Act out putting on a coat or opening an umbrella!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is cold, [and] I [wear] a [coat]."
    },
    {
      "speaker": "B",
      "text": "It is rainy, and I use an [umbrella]."
    },
    {
      "speaker": "A",
      "text": "It is sunny, and I wear a hat."
    }
  ],
  "blanks": [
    "wear",
    "coat",
    "umbrella"
  ]
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is cold, and I wear a coat."
    },
    {
      "speaker": "B",
      "text": "It is rainy, and I use an umbrella."
    },
    {
      "speaker": "A",
      "text": "It is sunny, and I wear a hat."
    },
    {
      "speaker": "B",
      "text": "Act it out with me!"
    }
  ],
  "note": "Act it out: pretend to put on a coat, open an umbrella, or wear a hat while you say the line!"
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "It is cold, and I wear a coat. It is rainy, and I use an umbrella. It is sunny, and I wear a hat.",
  "questions": [
    "What does the writer wear when it's cold?",
    "What does the writer use when it's rainy?",
    "What does the writer wear when it's sunny?"
  ]
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "It is cold, and I wear ___.",
    "It is rainy, and I use ___.",
    "It is sunny, and I wear ___."
  ]
}$json$::jsonb,
  true
),
(
  'b12a03b8-9579-436d-89a6-10f92bf2f072',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Combine weather and clothes with 'and'",
    "Act out weather clothes",
    "Say coat and umbrella"
  ],
  "challenge": "Act out the weather and tell me what you wear!"
}$json$::jsonb,
  true
);

-- Lesson 4: Weather Clothes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  'Weather Clothes',
  'A1',
  'kids',
  10,
  4,
  'Show and tell weather and clothing choices. [Bridge, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Weather Clothes' -- A cutaway view of a cozy house showing a few rooms at once -- kitchen, bedroom, living room."
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌤️",
  "questions": [
    "What do you need to wear today?",
    "Are you ready for the weather?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Today",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Because",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Need",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Ready",
      "bg": "#FAEEDA",
      "image_note": "A child with a backpack, standing by the door, thumbs up."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you wear today?",
    "Why do you wear that?"
  ],
  "student": [
    "I wear a jacket today.",
    "I wear it because it's cold."
  ],
  "note": "Put it all together: weather + clothes + a simple picture reason.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Today] is cold."
    },
    {
      "speaker": "B",
      "text": "I [need] a jacket."
    },
    {
      "speaker": "A",
      "text": "Now I am [ready]!"
    }
  ],
  "blanks": [
    "today",
    "need",
    "ready"
  ]
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Today is cold. I need a jacket."
    },
    {
      "speaker": "B",
      "text": "Today is sunny. I need a hat."
    },
    {
      "speaker": "A",
      "text": "Now I am ready to go outside!"
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Show-and-tell: show me what you'd wear for today's weather!"
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today is cold. I need a jacket. I put it on. Now I am ready to go outside!",
  "questions": [
    "What is the weather today?",
    "What does the writer need?",
    "Is the writer ready to go outside?"
  ]
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today is ___.",
    "I need a ___.",
    "Now I am ready to ___."
  ]
}$json$::jsonb,
  true
),
(
  'f24f4419-828e-41f6-bbcf-9edf960084c7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say today's weather",
    "Say what I need to wear",
    "Show-and-tell my weather outfit"
  ],
  "challenge": "Show me what you'd wear for today's weather!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  'Unit Review',
  'A1',
  'kids',
  10,
  5,
  'Review weather and clothes. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A cutaway view of a cozy house showing a few rooms at once -- kitchen, bedroom, living room."
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌦️",
  "questions": [
    "What's the weather today?",
    "What do you wear?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Weather",
      "bg": "#FAECE7",
      "image_note": "A small scene showing sun, cloud, and rain together, split panel style."
    },
    {
      "word": "Sunny",
      "bg": "#E1F5EE",
      "image_note": "A bright yellow sun with rays, clear blue sky, no clouds."
    },
    {
      "word": "Wear",
      "bg": "#EEEDFE",
      "image_note": "A child putting on a jacket or coat, simple illustration."
    },
    {
      "word": "Ready",
      "bg": "#FAEEDA",
      "image_note": "A child with a backpack, standing by the door, thumbs up."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the weather today?",
    "What do you wear?"
  ],
  "student": [
    "It is sunny today.",
    "I wear a hat."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The [weather] is sunny."
    },
    {
      "speaker": "B",
      "text": "I [wear] a hat."
    },
    {
      "speaker": "A",
      "text": "Now I am [ready]."
    }
  ],
  "blanks": [
    "weather",
    "wear",
    "ready"
  ]
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The weather is sunny today. I wear a hat."
    },
    {
      "speaker": "B",
      "text": "The weather is cold. I wear a coat."
    },
    {
      "speaker": "A",
      "text": "Now I am ready to go outside!"
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
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "The weather is sunny today. I wear a hat. Now I am ready to go outside!",
  "questions": [
    "What is the weather?",
    "What does the writer wear?",
    "Is the writer ready?"
  ]
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The weather is ___.",
    "I wear a ___.",
    "Now I am ready to ___."
  ]
}$json$::jsonb,
  true
),
(
  '8293d8ea-67d2-4f86-92b1-09bab71bdeec',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe today's weather",
    "Say what I wear",
    "Show I'm ready for the weather"
  ],
  "challenge": "Tell me the weather today and what you're wearing!"
}$json$::jsonb,
  true
);
