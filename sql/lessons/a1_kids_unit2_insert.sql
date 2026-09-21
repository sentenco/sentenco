-- A1 Kids Unit 2: My Day (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation.
-- Fresh INSERT version (for use after delete_all_a1.sql) -- same content that
-- fix_kids_unit1_2_structure.sql (now removed) applied as an UPDATE against the live rows.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Morning
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  'My Morning',
  'A1',
  'kids',
  2,
  1,
  'Talk about your morning routine: wake up, brush your teeth, get dressed, and eat breakfast. [Foundation, L1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Morning' -- A cheerful family scene at home -- parents and children together in a cozy living room, warm morning light."
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏰",
  "questions": [
    "What time do you wake up?",
    "What do you eat for breakfast?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Wake up",
      "bg": "#FAECE7",
      "image_note": "A child stretching in bed as sunlight comes through the window."
    },
    {
      "word": "Brush my teeth",
      "bg": "#E1F5EE",
      "image_note": "A child brushing their teeth at the bathroom sink, smiling."
    },
    {
      "word": "Get dressed",
      "bg": "#EEEDFE",
      "image_note": "A child putting on a shirt, clothes laid out on the bed."
    },
    {
      "word": "Eat breakfast",
      "bg": "#FAEEDA",
      "image_note": "A child eating cereal or toast at the breakfast table."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first in the morning?",
    "What do you eat for breakfast?"
  ],
  "student": [
    "First, I wake up.",
    "I eat bread and milk."
  ],
  "note": "Act out each morning action, then say it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one do you do FIRST in the morning?",
  "options": [
    {
      "text": "Wake up",
      "emoji": "⏰"
    },
    {
      "text": "Eat breakfast",
      "emoji": "🥣"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I wake up."
    },
    {
      "speaker": "B",
      "text": "I brush my teeth."
    },
    {
      "speaker": "A",
      "text": "I get dressed."
    },
    {
      "speaker": "B",
      "text": "I eat breakfast!"
    }
  ],
  "note": "Teacher says the action first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My morning. I wake up. I brush my teeth. I get dressed. I eat breakfast.",
  "questions": [
    "What does the child do first?",
    "What does the child do after brushing teeth?",
    "What is the last thing?"
  ]
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I wake up.",
    "I brush my teeth and ___.",
    "I eat ___ for breakfast."
  ]
}$json$::jsonb,
  true
),
(
  '77ec3eaf-90e3-41cf-900e-65d754b5dc3b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 morning actions",
    "Sequence my morning",
    "Say what I eat for breakfast"
  ],
  "challenge": "Tell me your whole morning in order!"
}$json$::jsonb,
  true
);

-- Lesson 2: Go to School
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  'Go to School',
  'A1',
  'kids',
  2,
  2,
  'Talk about your school morning: get your bag, put on your shoes, take the bus, go to school. [Foundation, L2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Go to School' -- A cheerful family scene at home -- parents and children together in a cozy living room, warm morning light."
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎒",
  "questions": [
    "Do you take the bus to school?",
    "What is in your school bag?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "School bag",
      "bg": "#FAECE7",
      "image_note": "A colorful backpack, packed and ready by the door."
    },
    {
      "word": "Shoes",
      "bg": "#E1F5EE",
      "image_note": "A pair of bright, simple children's shoes side by side."
    },
    {
      "word": "Bus",
      "bg": "#EEEDFE",
      "image_note": "A cheerful yellow school bus, simple and rounded shapes."
    },
    {
      "word": "School",
      "bg": "#FAEEDA",
      "image_note": "A cheerful, simple school building with a flag or bell on top."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you take to school?",
    "Do you take the bus?"
  ],
  "student": [
    "I take my school bag.",
    "Yes, I take the bus."
  ],
  "note": "Use the word bank: school bag, shoes, bus, school.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Activity",
  "title": "Match to School",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "🎒",
      "word": "School bag"
    },
    {
      "emoji": "👟",
      "word": "Shoes"
    },
    {
      "emoji": "🚌",
      "word": "Bus"
    },
    {
      "emoji": "🏫",
      "word": "School"
    }
  ]
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I get my school bag. I put on my shoes."
    },
    {
      "speaker": "B",
      "text": "I take the bus to school. Do you take the bus?"
    },
    {
      "speaker": "A",
      "text": "Yes! I go to school every day."
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
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I get my school bag. I put on my shoes. I take the bus. I go to school.",
  "questions": [
    "What does the child get first?",
    "What does the child put on?",
    "How does the child go to school?"
  ]
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I get my ___.",
    "I put on my ___.",
    "I take the ___ to school."
  ]
}$json$::jsonb,
  true
),
(
  '0dd7e9b2-188d-48a8-bc7c-dc789e2287c5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 school-morning words",
    "Sequence getting ready for school",
    "Say how I go to school"
  ],
  "challenge": "Tell me how you get ready and go to school!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Afternoon
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  'My Afternoon',
  'A1',
  'kids',
  2,
  3,
  'Talk about your afternoon routine: eat lunch, do homework, play, watch TV. [Foundation, L3: freer practice, TPR game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Afternoon' -- A cheerful family scene at home -- parents and children together in a cozy living room, warm morning light."
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏡",
  "questions": [
    "What do you do after school?",
    "Do you watch TV in the afternoon?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Lunch",
      "bg": "#FAECE7",
      "image_note": "A lunchbox open showing a sandwich, fruit, and a juice box."
    },
    {
      "word": "Homework",
      "bg": "#E1F5EE",
      "image_note": "A child at a desk writing in a notebook with a pencil."
    },
    {
      "word": "Play",
      "bg": "#EEEDFE",
      "image_note": "A child playing happily with toys on the floor."
    },
    {
      "word": "TV",
      "bg": "#FAEEDA",
      "image_note": "A simple rounded television showing a bright cartoon scene."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do after school?",
    "Do you play or watch TV?"
  ],
  "student": [
    "I eat lunch and do homework.",
    "I play and watch TV."
  ],
  "note": "Act out an afternoon action, and I'll guess it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "blank",
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat [lunch]."
    },
    {
      "speaker": "B",
      "text": "I do my [homework]."
    },
    {
      "speaker": "A",
      "text": "I [play] and watch [TV]."
    }
  ],
  "blanks": [
    "lunch",
    "homework",
    "tv"
  ]
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  6,
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
      "text": "I eat lunch. Then I do my homework."
    },
    {
      "speaker": "A",
      "text": "After that, I play and watch TV."
    },
    {
      "speaker": "B",
      "text": "Act out one thing you do!"
    }
  ],
  "note": "Act-it-out game: act out an afternoon action, teacher guesses the word!"
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My afternoon. I eat lunch. I do homework. I play. I watch TV.",
  "questions": [
    "What does the child eat?",
    "What does the child do after lunch?",
    "What two things happen at the end?"
  ]
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat ___ for lunch.",
    "I do my ___.",
    "I play and watch ___."
  ]
}$json$::jsonb,
  true
),
(
  '4eb03fb6-b102-4aae-b72f-8c2e24934aba',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 afternoon activities",
    "Sequence my afternoon",
    "Act out an afternoon action"
  ],
  "challenge": "Tell me your afternoon and act one part out!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Evening
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '04001f40-834d-4c0a-9433-09b67a445259',
  'My Evening',
  'A1',
  'kids',
  2,
  4,
  'Talk about your evening routine: eat dinner, take a bath, put on pajamas, go to bed. [Foundation, L4: production, show-and-tell]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Evening' -- A cheerful family scene at home -- parents and children together in a cozy living room, warm morning light."
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌙",
  "questions": [
    "What do you do before bed?",
    "Do you take a bath at night?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dinner",
      "bg": "#FAECE7",
      "image_note": "A family sitting together at a dinner table with plates of food."
    },
    {
      "word": "Bath",
      "bg": "#E1F5EE",
      "image_note": "A child in a bathtub with bubbles, rubber duck nearby."
    },
    {
      "word": "Pajamas",
      "bg": "#EEEDFE",
      "image_note": "A child in cozy pajamas, ready for bed, yawning."
    },
    {
      "word": "Bed",
      "bg": "#FAEEDA",
      "image_note": "Simple, bright, kid-friendly illustration of 'Bed' -- one clear subject, no text in the image, no background clutter."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do in the evening?",
    "What time do you go to bed?"
  ],
  "student": [
    "I eat dinner and take a bath.",
    "I go to bed at 8pm."
  ],
  "note": "Show-and-tell: show me your evening routine in order!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "order",
  "tag": "Activity",
  "title": "My Evening",
  "subtitle": "Put the steps in order.",
  "instruction": "Put your evening in order!",
  "items": [
    {
      "text": "Dinner",
      "emoji": "🍽️"
    },
    {
      "text": "Bath",
      "emoji": "🛁"
    },
    {
      "text": "Pajamas",
      "emoji": "🧸"
    },
    {
      "text": "Bed",
      "emoji": "🛏️"
    }
  ]
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat dinner. Then I take a bath."
    },
    {
      "speaker": "B",
      "text": "I put on my pajamas. Then I go to bed."
    },
    {
      "speaker": "A",
      "text": "What time do you go to bed?"
    },
    {
      "speaker": "B",
      "text": "I go to bed at 8pm. Show me your evening!"
    }
  ],
  "note": "Show-and-tell: act out your whole evening routine in order!"
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My evening. I eat dinner. I take a bath. I put on pajamas. I go to bed.",
  "questions": [
    "What does the child eat?",
    "What does the child do after dinner?",
    "What is the last thing before bed?"
  ]
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat ___ for dinner.",
    "I take a ___.",
    "I put on my ___ and go to bed."
  ]
}$json$::jsonb,
  true
),
(
  '04001f40-834d-4c0a-9433-09b67a445259',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 evening actions",
    "Sequence my evening",
    "Show-and-tell my bedtime routine"
  ],
  "challenge": "Show me your evening routine, from dinner to bed!"
}$json$::jsonb,
  true
);

-- Lesson 5: All About My Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  'All About My Day',
  'A1',
  'kids',
  2,
  5,
  'Unit Review — talk about your whole day, from morning to night. [Foundation, L5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'All About My Day' -- A cheerful family scene at home -- parents and children together in a cozy living room, warm morning light."
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌞",
  "questions": [
    "What do you do in the morning?",
    "What do you do at night?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Morning",
      "bg": "#FAECE7",
      "image_note": "The sun rising over a house, soft yellow and pink sky."
    },
    {
      "word": "School",
      "bg": "#E1F5EE",
      "image_note": "A cheerful, simple school building with a flag or bell on top."
    },
    {
      "word": "Afternoon",
      "bg": "#EEEDFE",
      "image_note": "A bright midday sun with a child playing outside."
    },
    {
      "word": "Evening",
      "bg": "#FAEEDA",
      "image_note": "A house with warm lit windows under a dusky purple sky."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first in your day?",
    "What do you do last?"
  ],
  "student": [
    "First, I wake up.",
    "Finally, I go to bed."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  5,
  'activity',
  null,
  null,
  $json${
  "mode": "mixed",
  "tag": "Unit Review",
  "title": "Mix It Up!",
  "subtitle": "Try one of each.",
  "parts": [
    {
      "mode": "choice",
      "instruction": "What do you do FIRST?",
      "options": [
        {
          "text": "Wake up",
          "emoji": "🌅"
        },
        {
          "text": "Go to bed",
          "emoji": "🛏️"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "match",
      "instruction": "Match each part of the day.",
      "pairs": [
        {
          "emoji": "🌅",
          "word": "Morning"
        },
        {
          "emoji": "🏫",
          "word": "School"
        },
        {
          "emoji": "☀️",
          "word": "Afternoon"
        },
        {
          "emoji": "🌙",
          "word": "Evening"
        }
      ]
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "In the [morning], I wake up and eat breakfast."
        },
        {
          "speaker": "B",
          "text": "I go to [school] and eat lunch."
        },
        {
          "speaker": "A",
          "text": "In the [evening], I go to bed."
        }
      ],
      "blanks": [
        "morning",
        "school",
        "evening"
      ]
    },
    {
      "mode": "order",
      "instruction": "Put your whole day in order!",
      "items": [
        {
          "text": "Wake up",
          "emoji": "⏰"
        },
        {
          "text": "Go to school",
          "emoji": "🎒"
        },
        {
          "text": "Eat lunch",
          "emoji": "🍱"
        },
        {
          "text": "Go to bed",
          "emoji": "🛏️"
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "In the morning, I wake up and eat breakfast."
    },
    {
      "speaker": "B",
      "text": "I go to school and eat lunch. Then I play."
    },
    {
      "speaker": "A",
      "text": "In the evening, I eat dinner and go to bed."
    },
    {
      "speaker": "B",
      "text": "Tell me your whole day!"
    }
  ],
  "note": "Mixed review: put your whole day in order, from morning to night!"
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My day. I wake up. I go to school. I eat lunch. I do homework. I eat dinner. I go to bed.",
  "questions": [
    "What does the child do first?",
    "What happens at school?",
    "What is the last thing at night?"
  ]
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "In the morning, I ___.",
    "At school, I ___.",
    "At night, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '157f6f1d-a370-4763-b6bf-60de3fd5c35b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Sequence my whole day",
    "Name morning, school, afternoon, evening actions",
    "Tell my day in order"
  ],
  "challenge": "Tell me your whole day, from wake-up to bedtime!"
}$json$::jsonb,
  true
);
