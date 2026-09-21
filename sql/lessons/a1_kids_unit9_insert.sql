-- A1 Kids Unit 9: My Body (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Body Parts
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  'Body Parts',
  'A1',
  'kids',
  9,
  1,
  'Name body parts. [Bridge, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Body Parts' -- A split-sky scene showing different weather -- sun on one side, rain clouds on the other."
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙋",
  "questions": [
    "Can you touch your head?",
    "Where are your eyes?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Head",
      "bg": "#FAECE7",
      "image_note": "A simple cartoon child's head and face, front-facing."
    },
    {
      "word": "Hand",
      "bg": "#E1F5EE",
      "image_note": "A single open hand, simple and bold outline."
    },
    {
      "word": "Foot",
      "bg": "#EEEDFE",
      "image_note": "A single bare foot, simple and bold outline."
    },
    {
      "word": "Eyes",
      "bg": "#FAEEDA",
      "image_note": "A pair of large friendly cartoon eyes, simple and bold."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Can you touch your head?"
  ],
  "student": [
    "This is my head.",
    "Yes, I can touch my head!"
  ],
  "note": "Point to a body part!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [head]."
    },
    {
      "speaker": "B",
      "text": "This is my [hand]."
    },
    {
      "speaker": "A",
      "text": "This is my [foot]."
    }
  ],
  "blanks": [
    "head",
    "hand",
    "foot"
  ]
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my head."
    },
    {
      "speaker": "B",
      "text": "This is my hand."
    },
    {
      "speaker": "A",
      "text": "This is my foot."
    },
    {
      "speaker": "B",
      "text": "These are my eyes!"
    }
  ],
  "note": "Teacher says the body part first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my head. This is my hand. This is my foot.",
  "questions": [
    "What is the first body part?",
    "What is the second body part?",
    "Name all three body parts."
  ]
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "These are my ___.",
    "I have two ___."
  ]
}$json$::jsonb,
  true
),
(
  'd8c7ee8b-aaa1-4a7e-a54d-c35c73a6bde1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 body parts",
    "Say 'This is my ___'",
    "Point to a body part"
  ],
  "challenge": "Point to your head, hand, and foot!"
}$json$::jsonb,
  true
);

-- Lesson 2: Touch Your…
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  'Touch Your…',
  'A1',
  'kids',
  9,
  2,
  'Follow simple TPR commands. [Bridge, Lesson 2: controlled practice, TPR]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Touch Your…' -- A split-sky scene showing different weather -- sun on one side, rain clouds on the other."
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👃",
  "questions": [
    "Can you touch your nose?",
    "Where is your ear?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Touch",
      "bg": "#FAECE7",
      "image_note": "A child's hand reaching out to touch an object, gentle gesture."
    },
    {
      "word": "Nose",
      "bg": "#E1F5EE",
      "image_note": "A single simple cartoon nose, bold outline."
    },
    {
      "word": "Ear",
      "bg": "#EEEDFE",
      "image_note": "A single simple cartoon ear, bold outline."
    },
    {
      "word": "Knee",
      "bg": "#FAEEDA",
      "image_note": "A child pointing to their bent knee, simple illustration."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Touch your nose!",
    "Touch your ear!"
  ],
  "student": [
    "I touch my nose.",
    "I touch my ear."
  ],
  "note": "Use the word bank: touch, nose, ear, knee.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Touch] your [nose]."
    },
    {
      "speaker": "B",
      "text": "Touch your [ear]."
    },
    {
      "speaker": "A",
      "text": "Touch your knee!"
    }
  ],
  "blanks": [
    "touch",
    "nose",
    "ear"
  ]
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Touch your nose!"
    },
    {
      "speaker": "B",
      "text": "I touch my nose. Touch your ear!"
    },
    {
      "speaker": "A",
      "text": "I touch my ear. Touch your knee!"
    },
    {
      "speaker": "B",
      "text": "I touch my knee!"
    }
  ],
  "note": "TPR game: say the command, then both of you touch that body part!"
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Touch your nose. Touch your ear. Touch your knee. Good job!",
  "questions": [
    "What do you touch first?",
    "What do you touch second?",
    "What do you touch third?"
  ]
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Touch your ___.",
    "I touch my ___.",
    "Touch your ___ and ___."
  ]
}$json$::jsonb,
  true
),
(
  'cb31604a-47f4-4abd-ab75-24892e046ef8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Follow 'Touch your ___' commands",
    "Say nose, ear, knee",
    "Play the touch game"
  ],
  "challenge": "Give me a 'touch your ___' command!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Face
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a85aa8c7-2132-4899-843c-075b53375ada',
  'My Face',
  'A1',
  'kids',
  9,
  3,
  'Describe the face with ''and''. [Bridge, Lesson 3: freer practice, TPR game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Face' -- A split-sky scene showing different weather -- sun on one side, rain clouds on the other."
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😊",
  "questions": [
    "Is your mouth big or small?",
    "Do you have short or long hair?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mouth",
      "bg": "#FAECE7",
      "image_note": "A single simple smiling cartoon mouth, bold outline."
    },
    {
      "word": "Hair",
      "bg": "#E1F5EE",
      "image_note": "A simple cartoon child's head with clearly visible, colorful hair."
    },
    {
      "word": "Big",
      "bg": "#EEEDFE",
      "image_note": "A large object next to a small one, clearly showing the size difference."
    },
    {
      "word": "Small",
      "bg": "#FAEEDA",
      "image_note": "A small object next to a large one, clearly showing the size difference."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your mouth big?",
    "Do you have long hair?"
  ],
  "student": [
    "My mouth is small.",
    "I have long hair."
  ],
  "note": "Point to your face and describe it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [mouth]."
    },
    {
      "speaker": "B",
      "text": "This is my [hair]."
    },
    {
      "speaker": "A",
      "text": "I have [big] eyes and a small mouth."
    }
  ],
  "blanks": [
    "mouth",
    "hair",
    "big"
  ]
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my mouth and my hair."
    },
    {
      "speaker": "B",
      "text": "I have big eyes and short hair."
    },
    {
      "speaker": "A",
      "text": "I have small eyes and long hair."
    },
    {
      "speaker": "B",
      "text": "Let's draw our faces!"
    }
  ],
  "note": "Face game: point to a face part and describe it big/small!"
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my face. I have big eyes and a small mouth. I have long hair.",
  "questions": [
    "Are the eyes big or small?",
    "Is the mouth big or small?",
    "Is the hair long or short?"
  ]
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have ___ eyes.",
    "I have a ___ mouth.",
    "I have ___ hair."
  ]
}$json$::jsonb,
  true
),
(
  'a85aa8c7-2132-4899-843c-075b53375ada',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'mouth' and 'hair'",
    "Describe eyes and mouth size",
    "Draw and describe my face"
  ],
  "challenge": "Describe your face to me: eyes, mouth, and hair!"
}$json$::jsonb,
  true
);

-- Lesson 4: Body Actions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  'Body Actions',
  'A1',
  'kids',
  9,
  4,
  'Combine body parts and actions into a show-and-tell. [Bridge, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Body Actions' -- A split-sky scene showing different weather -- sun on one side, rain clouds on the other."
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👏",
  "questions": [
    "Can you clap your hands?",
    "Can you wave?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Clap",
      "bg": "#FAECE7",
      "image_note": "A child clapping both hands together, motion lines, happy face."
    },
    {
      "word": "Wave",
      "bg": "#E1F5EE",
      "image_note": "A child waving one hand up high, cheerful expression."
    },
    {
      "word": "Wiggle",
      "bg": "#EEEDFE",
      "image_note": "A child wiggling their fingers or toes, playful motion lines."
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
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Can you clap your hands?",
    "Can you wave?"
  ],
  "student": [
    "I clap my hands.",
    "I wave my hand."
  ],
  "note": "Put it all together: body part + action!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [clap] my hands."
    },
    {
      "speaker": "B",
      "text": "I [wave] my hand."
    },
    {
      "speaker": "A",
      "text": "I [wiggle] my fingers."
    }
  ],
  "blanks": [
    "clap",
    "wave",
    "wiggle"
  ]
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I clap my hands and wave."
    },
    {
      "speaker": "B",
      "text": "I wiggle my fingers and touch my nose."
    },
    {
      "speaker": "A",
      "text": "Show me what you can do!"
    },
    {
      "speaker": "B",
      "text": "I can clap, wave, and wiggle!"
    }
  ],
  "note": "Show-and-tell: show me three body actions in a row!"
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I clap my hands. I wave my hand. I wiggle my fingers. My body can do many things!",
  "questions": [
    "What does the writer clap?",
    "What does the writer wave?",
    "What can the body do?"
  ]
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I clap my ___.",
    "I wave my ___.",
    "My body can ___."
  ]
}$json$::jsonb,
  true
),
(
  'ff3e2ee9-3042-4dbe-9251-983dacd552ef',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say and do 3 body actions",
    "Combine body part + action",
    "Show-and-tell what my body can do"
  ],
  "challenge": "Show me three things your body can do!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c4f9daf6-d594-408b-8320-93779a89262a',
  'Unit Review',
  'A1',
  'kids',
  9,
  5,
  'Review body parts and actions. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A split-sky scene showing different weather -- sun on one side, rain clouds on the other."
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙋",
  "questions": [
    "Can you touch your head?",
    "Can you clap your hands?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Head",
      "bg": "#FAECE7",
      "image_note": "A simple cartoon child's head and face, front-facing."
    },
    {
      "word": "Touch",
      "bg": "#E1F5EE",
      "image_note": "A child's hand reaching out to touch an object, gentle gesture."
    },
    {
      "word": "Hair",
      "bg": "#EEEDFE",
      "image_note": "A simple cartoon child's head with clearly visible, colorful hair."
    },
    {
      "word": "Clap",
      "bg": "#FAEEDA",
      "image_note": "A child clapping both hands together, motion lines, happy face."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Touch your head!",
    "Can you clap?"
  ],
  "student": [
    "I touch my head.",
    "I clap my hands!"
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [head]."
    },
    {
      "speaker": "B",
      "text": "[Touch] your nose!"
    },
    {
      "speaker": "A",
      "text": "I [clap] my hands."
    }
  ],
  "blanks": [
    "head",
    "touch",
    "clap"
  ]
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my head. Touch your nose!"
    },
    {
      "speaker": "B",
      "text": "I touch my nose. I have long hair."
    },
    {
      "speaker": "A",
      "text": "I clap my hands and wave!"
    },
    {
      "speaker": "B",
      "text": "Let's play the touch game!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my head. I touch my nose. I have long hair. I clap my hands.",
  "questions": [
    "What body part is named first?",
    "What does the writer touch?",
    "What does the writer do with hands?"
  ]
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "I touch my ___.",
    "I clap my ___."
  ]
}$json$::jsonb,
  true
),
(
  'c4f9daf6-d594-408b-8320-93779a89262a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name body parts",
    "Follow touch commands",
    "Show a body action"
  ],
  "challenge": "Show me your body parts and actions!"
}$json$::jsonb,
  true
);
