-- A1 Kids Unit 11: My House (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Rooms of the House
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '767489e9-523b-4a6a-929e-df71f887ea40',
  'Rooms of the House',
  'A1',
  'kids',
  11,
  1,
  'Name rooms of the house. [Bridge, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Rooms of the House' -- A row of a few children's faces showing different simple feelings -- happy, sad, excited."
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "Do you have a kitchen?",
    "Where is your bedroom?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Kitchen",
      "bg": "#FAECE7",
      "image_note": "A simple, colorful kitchen scene with a stove, sink, and table."
    },
    {
      "word": "Bedroom",
      "bg": "#E1F5EE",
      "image_note": "A simple, cozy bedroom scene with a bed and a window."
    },
    {
      "word": "Bathroom",
      "bg": "#EEEDFE",
      "image_note": "A simple bathroom scene with a sink, tub, and mirror."
    },
    {
      "word": "Living room",
      "bg": "#FAEEDA",
      "image_note": "A simple living room scene with a sofa, TV, and a rug."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What room is this?",
    "Where is your bedroom?"
  ],
  "student": [
    "This is the kitchen.",
    "My bedroom is here."
  ],
  "note": "Point to a room picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is the [kitchen]."
    },
    {
      "speaker": "B",
      "text": "This is my [bedroom]."
    },
    {
      "speaker": "A",
      "text": "This is the [bathroom]."
    }
  ],
  "blanks": [
    "kitchen",
    "bedroom",
    "bathroom"
  ]
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is the kitchen."
    },
    {
      "speaker": "B",
      "text": "This is my bedroom."
    },
    {
      "speaker": "A",
      "text": "This is the bathroom."
    },
    {
      "speaker": "B",
      "text": "This is the living room!"
    }
  ],
  "note": "Teacher says the room first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is the kitchen. This is my bedroom. This is the bathroom.",
  "questions": [
    "What is the first room?",
    "Whose bedroom is it?",
    "What is the third room?"
  ]
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is the ___.",
    "This is my ___.",
    "My house has a ___."
  ]
}$json$::jsonb,
  true
),
(
  '767489e9-523b-4a6a-929e-df71f887ea40',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 rooms",
    "Say 'This is the ___'",
    "Point to a room"
  ],
  "challenge": "Tell me the rooms in your house!"
}$json$::jsonb,
  true
);

-- Lesson 2: Furniture in the House
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  'Furniture in the House',
  'A1',
  'kids',
  11,
  2,
  'Combine rooms and furniture with ''there is''. [Bridge, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Furniture in the House' -- A row of a few children's faces showing different simple feelings -- happy, sad, excited."
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛋️",
  "questions": [
    "Is there a sofa in your living room?",
    "Is there a bed in your bedroom?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "There is",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Sofa",
      "bg": "#E1F5EE",
      "image_note": "A single comfy sofa with a few pillows, simple and bold."
    },
    {
      "word": "Bed",
      "bg": "#EEEDFE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Bed' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Table",
      "bg": "#FAEEDA",
      "image_note": "A simple wooden table, single object, bold outline."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is in your living room?",
    "What is in your bedroom?"
  ],
  "student": [
    "There is a sofa.",
    "There is a bed."
  ],
  "note": "Use the word bank: there is, sofa, bed, table.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[There is] a [sofa] in the living room."
    },
    {
      "speaker": "B",
      "text": "There is a [bed] in my bedroom."
    },
    {
      "speaker": "A",
      "text": "There is a table in the kitchen."
    }
  ],
  "blanks": [
    "there is",
    "sofa",
    "bed"
  ]
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is in your living room?"
    },
    {
      "speaker": "B",
      "text": "There is a sofa. What is in your bedroom?"
    },
    {
      "speaker": "A",
      "text": "There is a bed and a table."
    },
    {
      "speaker": "B",
      "text": "Nice room!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "There is a sofa in the living room. There is a bed in my bedroom. There is a table in the kitchen.",
  "questions": [
    "What is in the living room?",
    "What is in the bedroom?",
    "What is in the kitchen?"
  ]
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "There is a ___ in the ___.",
    "There is a ___ in my ___.",
    "There is a ___ too."
  ]
}$json$::jsonb,
  true
),
(
  '34e3247f-aafd-44f2-9fc8-4af5943db419',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'there is' with furniture",
    "Name sofa, bed, table",
    "Say what's in each room"
  ],
  "challenge": "Tell me what's in one room of your house!"
}$json$::jsonb,
  true
);

-- Lesson 3: Where Is It?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  'Where Is It?',
  'A1',
  'kids',
  11,
  3,
  'Ask and answer where things are. [Bridge, Lesson 3: freer practice, TPR find-it game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Where Is It?' -- A row of a few children's faces showing different simple feelings -- happy, sad, excited."
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📍",
  "questions": [
    "Where is your bed?",
    "What is on your table?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
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
      "word": "In",
      "bg": "#E1F5EE",
      "image_note": "A simple scene showing one object inside another (e.g. a toy inside a box)."
    },
    {
      "word": "On",
      "bg": "#EEEDFE",
      "image_note": "A simple scene showing one object on top of another (e.g. a cup on a table)."
    },
    {
      "word": "Under",
      "bg": "#FAEEDA",
      "image_note": "A simple scene showing one object under another (e.g. a cat under a chair)."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is the sofa?",
    "What is on the table?"
  ],
  "student": [
    "The sofa is in the living room.",
    "A book is on the table."
  ],
  "note": "Point and find things in your house!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Where is] the sofa?"
    },
    {
      "speaker": "B",
      "text": "It is [in] the living room."
    },
    {
      "speaker": "A",
      "text": "A book is [on] the table."
    }
  ],
  "blanks": [
    "where is",
    "in",
    "on"
  ]
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where is the sofa?"
    },
    {
      "speaker": "B",
      "text": "It is in the living room. Where is your bed?"
    },
    {
      "speaker": "A",
      "text": "It is in my bedroom. A toy is under my bed!"
    },
    {
      "speaker": "B",
      "text": "Your turn to find something!"
    }
  ],
  "note": "Find-it game: ask where something is, then point to find it in your house!"
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Where is the sofa? It is in the living room. Where is my bed? It is in my bedroom. A toy is under my bed.",
  "questions": [
    "Where is the sofa?",
    "Where is the bed?",
    "What is under the bed?"
  ]
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The sofa is in the ___.",
    "My bed is in my ___.",
    "A ___ is under my bed."
  ]
}$json$::jsonb,
  true
),
(
  '51b0dedb-6e29-4c0a-9379-aec412b7e36b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Where is ___?'",
    "Use 'in', 'on', 'under'",
    "Find things in my house"
  ],
  "challenge": "Ask me where something is in your house!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Favorite Room
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  'My Favorite Room',
  'A1',
  'kids',
  11,
  4,
  'Show and tell about a favorite room. [Bridge, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Favorite Room' -- A row of a few children's faces showing different simple feelings -- happy, sad, excited."
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🖼️",
  "questions": [
    "What is your favorite room?",
    "Why do you like it?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
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
      "word": "Because",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Cozy",
      "bg": "#EEEDFE",
      "image_note": "A child curled up on a sofa or bed with a blanket, warm lighting."
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
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite room?",
    "Why do you like it?"
  ],
  "student": [
    "My favorite room is my bedroom.",
    "It is cozy."
  ],
  "note": "Put it all together: room + furniture + a simple picture reason.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [favorite] room is my bedroom."
    },
    {
      "speaker": "B",
      "text": "It is [cozy]."
    },
    {
      "speaker": "A",
      "text": "Let me [show] you."
    }
  ],
  "blanks": [
    "favorite",
    "cozy",
    "show"
  ]
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite room is my bedroom. There is a bed and toys."
    },
    {
      "speaker": "B",
      "text": "It is cozy. My favorite room is the kitchen!"
    },
    {
      "speaker": "A",
      "text": "Show me your favorite room!"
    },
    {
      "speaker": "B",
      "text": "There is a table and yummy food."
    }
  ],
  "note": "Show-and-tell: tell me about your favorite room in your house!"
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite room is my bedroom. There is a bed and my toys. It is cozy. I love my room!",
  "questions": [
    "What is the favorite room?",
    "What is in the room?",
    "How does the writer feel about it?"
  ]
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite room is ___.",
    "There is a ___ and ___.",
    "I love my room because it is ___."
  ]
}$json$::jsonb,
  true
),
(
  'eb67730b-ba79-4b4a-9db5-97c3100c48f7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my favorite room",
    "Say what's in it",
    "Show-and-tell my favorite room"
  ],
  "challenge": "Show me your favorite room and tell me what's in it!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  'Unit Review',
  'A1',
  'kids',
  11,
  5,
  'Review rooms, furniture, and location. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A row of a few children's faces showing different simple feelings -- happy, sad, excited."
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "What rooms are in your house?",
    "What is your favorite room?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Room",
      "bg": "#FAECE7",
      "image_note": "A simple, cozy room with basic furniture, warm colors."
    },
    {
      "word": "There is",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Favorite",
      "bg": "#EEEDFE",
      "image_note": "A single object with a small star or heart on it, marking it as special."
    },
    {
      "word": "Cozy",
      "bg": "#FAEEDA",
      "image_note": "A child curled up on a sofa or bed with a blanket, warm lighting."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What rooms are in your house?",
    "What is your favorite room?"
  ],
  "student": [
    "There is a kitchen and a bedroom.",
    "My favorite room is my bedroom."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [room]."
    },
    {
      "speaker": "B",
      "text": "[There is] a bed and a table."
    },
    {
      "speaker": "A",
      "text": "It is my [favorite] room."
    }
  ],
  "blanks": [
    "room",
    "there is",
    "favorite"
  ]
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my bedroom. There is a bed and my toys."
    },
    {
      "speaker": "B",
      "text": "This is my favorite room. It is cozy."
    },
    {
      "speaker": "A",
      "text": "Where is your favorite room?"
    },
    {
      "speaker": "B",
      "text": "It is upstairs!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my bedroom. There is a bed and my toys. It is my favorite room. It is cozy!",
  "questions": [
    "What room is this?",
    "What is in the room?",
    "Is it the favorite room?"
  ]
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "There is a ___ and ___.",
    "It is my favorite room because ___."
  ]
}$json$::jsonb,
  true
),
(
  '4b9c1a1f-dd94-482c-8a9f-8e207946379b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name rooms and furniture",
    "Say where things are",
    "Show-and-tell my favorite room"
  ],
  "challenge": "Tell me all about your house and favorite room!"
}$json$::jsonb,
  true
);
