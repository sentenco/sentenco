-- A2 Teens Unit 1: Identity and Personal Style (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Style, My Choice
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '10c87193-820b-433e-80f2-060616e4a55e',
  'My Style, My Choice',
  'A2',
  'teens',
  1,
  1,
  'Describe personal style using simple present. [Foundation tier: 1 grammar target, heavy scaffolding]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '10c87193-820b-433e-80f2-060616e4a55e',
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
  '10c87193-820b-433e-80f2-060616e4a55e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👟",
  "questions": [
    "What are you wearing today?",
    "Is your style casual?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '10c87193-820b-433e-80f2-060616e4a55e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Casual",
      "bg": "#FAECE7"
    },
    {
      "word": "Sporty",
      "bg": "#E1F5EE"
    },
    {
      "word": "Neat",
      "bg": "#EEEDFE"
    },
    {
      "word": "Colorful",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '10c87193-820b-433e-80f2-060616e4a55e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your style?",
    "Do you wear casual clothes?"
  ],
  "student": [
    "My style is casual.",
    "Yes, I wear casual clothes."
  ],
  "note": "Use the sentence frame: My style is ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '10c87193-820b-433e-80f2-060616e4a55e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My style is [casual]."
    },
    {
      "speaker": "B",
      "text": "I wear [sporty] clothes."
    },
    {
      "speaker": "A",
      "text": "My clothes are [colorful]."
    }
  ],
  "blanks": [
    "casual",
    "sporty",
    "colorful"
  ]
}$json$::jsonb,
  true
),
(
  '10c87193-820b-433e-80f2-060616e4a55e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your style?"
    },
    {
      "speaker": "B",
      "text": "My style is casual. I wear jeans and T-shirts."
    },
    {
      "speaker": "A",
      "text": "My style is neat. I like simple clothes."
    },
    {
      "speaker": "B",
      "text": "Nice!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use the frame: My style is ___. I wear ___."
}$json$::jsonb,
  true
),
(
  '10c87193-820b-433e-80f2-060616e4a55e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi, I'm Jess. My style is casual. I wear jeans and T-shirts. I like colorful clothes.",
  "questions": [
    "What is Jess's style?",
    "What does Jess wear?",
    "Does Jess like colorful clothes?"
  ]
}$json$::jsonb,
  true
),
(
  '10c87193-820b-433e-80f2-060616e4a55e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My style is ___.",
    "I wear ___.",
    "I like ___ clothes."
  ]
}$json$::jsonb,
  true
),
(
  '10c87193-820b-433e-80f2-060616e4a55e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'My style is ___'",
    "Name 4 style words",
    "Describe what I wear"
  ],
  "challenge": "Describe your style using the frame: My style is ___. I wear ___."
}$json$::jsonb,
  true
);

-- Lesson 2: People I Look Up To
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '425aebc2-90d0-4da8-87e0-8a0bbc62693b',
  'People I Look Up To',
  'A2',
  'teens',
  1,
  2,
  'Describe a person using simple present. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '425aebc2-90d0-4da8-87e0-8a0bbc62693b',
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
  '425aebc2-90d0-4da8-87e0-8a0bbc62693b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⭐",
  "questions": [
    "Who do you look up to?",
    "Is that person kind?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '425aebc2-90d0-4da8-87e0-8a0bbc62693b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hardworking",
      "bg": "#FAECE7"
    },
    {
      "word": "Kind",
      "bg": "#E1F5EE"
    },
    {
      "word": "Funny",
      "bg": "#EEEDFE"
    },
    {
      "word": "Friendly",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '425aebc2-90d0-4da8-87e0-8a0bbc62693b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who do you admire?",
    "What is that person like?"
  ],
  "student": [
    "I admire my sister.",
    "She is kind and hardworking."
  ],
  "note": "Use the frame: I admire ___. He/She is ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '425aebc2-90d0-4da8-87e0-8a0bbc62693b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I admire my coach. She is [hardworking]."
    },
    {
      "speaker": "B",
      "text": "My brother is [kind]."
    },
    {
      "speaker": "A",
      "text": "My friend is [funny]."
    }
  ],
  "blanks": [
    "hardworking",
    "kind",
    "funny"
  ]
}$json$::jsonb,
  true
),
(
  '425aebc2-90d0-4da8-87e0-8a0bbc62693b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Who do you admire?"
    },
    {
      "speaker": "B",
      "text": "I admire my brother. He is kind and friendly."
    },
    {
      "speaker": "A",
      "text": "I admire my coach. She is hardworking."
    },
    {
      "speaker": "B",
      "text": "Nice!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use the frame: I admire ___. He/She is ___."
}$json$::jsonb,
  true
),
(
  '425aebc2-90d0-4da8-87e0-8a0bbc62693b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I admire my sister. She is hardworking and kind. She helps me every day. I admire her a lot.",
  "questions": [
    "Who does the writer admire?",
    "Is the sister kind or unkind?",
    "What does the sister do?"
  ]
}$json$::jsonb,
  true
),
(
  '425aebc2-90d0-4da8-87e0-8a0bbc62693b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I admire ___.",
    "He/She is ___.",
    "He/She helps me by ___."
  ]
}$json$::jsonb,
  true
),
(
  '425aebc2-90d0-4da8-87e0-8a0bbc62693b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I admire ___'",
    "Name 4 personality words",
    "Describe someone I admire"
  ],
  "challenge": "Describe someone you admire using: I admire ___. He/She is ___."
}$json$::jsonb,
  true
);

-- Lesson 3: What I'm Like
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9b840fa9-7328-435a-8629-c937d68c71dd',
  'What I''m Like',
  'A2',
  'teens',
  1,
  3,
  'Describe own personality using simple present. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9b840fa9-7328-435a-8629-c937d68c71dd',
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
  '9b840fa9-7328-435a-8629-c937d68c71dd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙂",
  "questions": [
    "Are you shy or confident?",
    "Are you talkative?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '9b840fa9-7328-435a-8629-c937d68c71dd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Confident",
      "bg": "#FAECE7"
    },
    {
      "word": "Shy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Talkative",
      "bg": "#EEEDFE"
    },
    {
      "word": "Quiet",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9b840fa9-7328-435a-8629-c937d68c71dd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you like?",
    "Are you shy or confident?"
  ],
  "student": [
    "I am confident.",
    "I am a bit shy."
  ],
  "note": "Use the frame: I am ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9b840fa9-7328-435a-8629-c937d68c71dd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [confident] at school."
    },
    {
      "speaker": "B",
      "text": "I am a bit [shy]."
    },
    {
      "speaker": "A",
      "text": "I am [talkative] with friends."
    }
  ],
  "blanks": [
    "confident",
    "shy",
    "talkative"
  ]
}$json$::jsonb,
  true
),
(
  '9b840fa9-7328-435a-8629-c937d68c71dd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are you like?"
    },
    {
      "speaker": "B",
      "text": "I am quiet at school, but talkative with friends."
    },
    {
      "speaker": "A",
      "text": "I am confident and friendly."
    },
    {
      "speaker": "B",
      "text": "Nice to know you!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use the frame: I am ___."
}$json$::jsonb,
  true
),
(
  '9b840fa9-7328-435a-8629-c937d68c71dd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi, I'm Leo. I am quiet at school. I am talkative with my friends. I am also confident in sports.",
  "questions": [
    "Is Leo quiet or loud at school?",
    "Is Leo talkative with friends?",
    "Is Leo confident in sports?"
  ]
}$json$::jsonb,
  true
),
(
  '9b840fa9-7328-435a-8629-c937d68c71dd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am ___ at school.",
    "I am ___ with friends.",
    "I am ___ in sports/hobbies."
  ]
}$json$::jsonb,
  true
),
(
  '9b840fa9-7328-435a-8629-c937d68c71dd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I am ___'",
    "Name 4 personality words",
    "Describe myself"
  ],
  "challenge": "Describe yourself using: I am ___."
}$json$::jsonb,
  true
);

-- Lesson 4: My Profile Post
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7fe6c659-1f01-4c2d-ba38-57376348206a',
  'My Profile Post',
  'A2',
  'teens',
  1,
  4,
  'Write a short profile using simple present. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7fe6c659-1f01-4c2d-ba38-57376348206a',
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
  '7fe6c659-1f01-4c2d-ba38-57376348206a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "What are your interests?",
    "What is your hobby?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '7fe6c659-1f01-4c2d-ba38-57376348206a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Interests",
      "bg": "#FAECE7"
    },
    {
      "word": "Hobby",
      "bg": "#E1F5EE"
    },
    {
      "word": "Personality",
      "bg": "#EEEDFE"
    },
    {
      "word": "Style",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7fe6c659-1f01-4c2d-ba38-57376348206a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are your interests?",
    "What is your style?"
  ],
  "student": [
    "My interests are music and sports.",
    "My style is casual."
  ],
  "note": "Use the frame: My interests are ___. My style is ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7fe6c659-1f01-4c2d-ba38-57376348206a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [interests] are music and gaming."
    },
    {
      "speaker": "B",
      "text": "My [hobby] is drawing."
    },
    {
      "speaker": "A",
      "text": "My [style] is casual."
    }
  ],
  "blanks": [
    "interests",
    "hobby",
    "style"
  ]
}$json$::jsonb,
  true
),
(
  '7fe6c659-1f01-4c2d-ba38-57376348206a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are your interests?"
    },
    {
      "speaker": "B",
      "text": "My interests are music and photography. My style is casual."
    },
    {
      "speaker": "A",
      "text": "My hobby is gaming. I am friendly and funny."
    },
    {
      "speaker": "B",
      "text": "Sounds like a great profile!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use the frames from Lessons 1-3."
}$json$::jsonb,
  true
),
(
  '7fe6c659-1f01-4c2d-ba38-57376348206a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi, I'm Ana! My interests are music and drawing. My style is colorful. I am friendly.",
  "questions": [
    "What are Ana's interests?",
    "What is Ana's style?",
    "Is Ana friendly?"
  ]
}$json$::jsonb,
  true
),
(
  '7fe6c659-1f01-4c2d-ba38-57376348206a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My interests are ___.",
    "My style is ___.",
    "I am ___."
  ]
}$json$::jsonb,
  true
),
(
  '7fe6c659-1f01-4c2d-ba38-57376348206a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short profile",
    "Use 'My interests are ___'",
    "Use 'My style is ___' and 'I am ___'"
  ],
  "challenge": "Read me your profile post using the frames you practiced!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '58107b29-9612-48c9-b05e-b96070882f19',
  'Unit Review',
  'A2',
  'teens',
  1,
  5,
  'Review identity and style descriptions using simple present. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '58107b29-9612-48c9-b05e-b96070882f19',
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
  '58107b29-9612-48c9-b05e-b96070882f19',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🪞",
  "questions": [
    "What is your style?",
    "Who do you admire?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '58107b29-9612-48c9-b05e-b96070882f19',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Style",
      "bg": "#FAECE7"
    },
    {
      "word": "Admire",
      "bg": "#E1F5EE"
    },
    {
      "word": "Personality",
      "bg": "#EEEDFE"
    },
    {
      "word": "Interests",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '58107b29-9612-48c9-b05e-b96070882f19',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your style?",
    "Who do you admire?"
  ],
  "student": [
    "My style is casual.",
    "I admire my sister."
  ],
  "note": "Use the frames you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '58107b29-9612-48c9-b05e-b96070882f19',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [style] is casual."
    },
    {
      "speaker": "B",
      "text": "I [admire] my coach."
    },
    {
      "speaker": "A",
      "text": "My [personality] is friendly."
    }
  ],
  "blanks": [
    "style",
    "admire",
    "personality"
  ]
}$json$::jsonb,
  true
),
(
  '58107b29-9612-48c9-b05e-b96070882f19',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your style and personality."
    },
    {
      "speaker": "B",
      "text": "My style is casual. I am friendly and confident."
    },
    {
      "speaker": "A",
      "text": "I admire my brother. He is kind and hardworking."
    },
    {
      "speaker": "B",
      "text": "Nice to know you!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '58107b29-9612-48c9-b05e-b96070882f19',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi, I'm Leo. My style is casual. I am friendly and confident. I admire my dad. He is kind and hardworking.",
  "questions": [
    "What is Leo's style?",
    "What is Leo like?",
    "Who does Leo admire?"
  ]
}$json$::jsonb,
  true
),
(
  '58107b29-9612-48c9-b05e-b96070882f19',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My style is ___.",
    "I am ___.",
    "I admire ___ because he/she is ___."
  ]
}$json$::jsonb,
  true
),
(
  '58107b29-9612-48c9-b05e-b96070882f19',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my style",
    "Describe my personality",
    "Describe someone I admire"
  ],
  "challenge": "Tell me your style, your personality, and who you admire!"
}$json$::jsonb,
  true
);
