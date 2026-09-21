-- A1 Kids Unit 12: My Feelings (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Feelings Vocabulary
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  'Feelings Vocabulary',
  'A1',
  'kids',
  12,
  1,
  'Name feelings. [Bridge, Lesson 1: notice/receptive, matching faces]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Feelings Vocabulary' -- A festive, celebratory classroom scene -- children showing off what they've learned, trophy or stars."
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😊",
  "questions": [
    "Are you happy today?",
    "Do you feel tired?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Happy",
      "bg": "#FAECE7",
      "image_note": "A child with a big smile, arms raised, sparkles around them."
    },
    {
      "word": "Sad",
      "bg": "#E1F5EE",
      "image_note": "A child with a downturned mouth and drooping shoulders, a small raincloud above."
    },
    {
      "word": "Angry",
      "bg": "#EEEDFE",
      "image_note": "A child with furrowed eyebrows and crossed arms, small steam lines."
    },
    {
      "word": "Tired",
      "bg": "#FAEEDA",
      "image_note": "A child yawning with heavy eyelids, maybe rubbing their eyes."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you feel?",
    "Are you happy?"
  ],
  "student": [
    "I feel happy.",
    "Yes, I am happy."
  ],
  "note": "Make a happy face, then a sad face!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I feel [happy]."
    },
    {
      "speaker": "B",
      "text": "I feel [sad]."
    },
    {
      "speaker": "A",
      "text": "I feel [tired]."
    }
  ],
  "blanks": [
    "happy",
    "sad",
    "tired"
  ]
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I feel happy."
    },
    {
      "speaker": "B",
      "text": "I feel sad."
    },
    {
      "speaker": "A",
      "text": "I feel tired."
    },
    {
      "speaker": "B",
      "text": "I feel angry!"
    }
  ],
  "note": "Teacher says the feeling and makes the face. Student copies!"
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I feel happy. I feel sad. I feel tired.",
  "questions": [
    "What is the first feeling?",
    "What is the second feeling?",
    "Name all three feelings."
  ]
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I feel ___.",
    "Today I feel ___.",
    "Sometimes I feel ___."
  ]
}$json$::jsonb,
  true
),
(
  '194b7b20-12e0-494c-bcb2-b046863af2ce',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 feelings",
    "Say 'I feel ___'",
    "Make a feeling face"
  ],
  "challenge": "Show me a feeling face and tell me the word!"
}$json$::jsonb,
  true
);

-- Lesson 2: I Feel...
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  'I Feel...',
  'A1',
  'kids',
  12,
  2,
  'Say how you feel with a picture reason. [Bridge, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'I Feel...' -- A festive, celebratory classroom scene -- children showing off what they've learned, trophy or stars."
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤩",
  "questions": [
    "Are you excited today?",
    "What makes you scared?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Excited",
      "bg": "#FAECE7",
      "image_note": "A child jumping with arms up, big open-mouthed smile, sparkles."
    },
    {
      "word": "Scared",
      "bg": "#E1F5EE",
      "image_note": "A child with wide eyes and hands near their face, startled expression."
    },
    {
      "word": "Because",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Today",
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
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you feel today?",
    "Are you excited?"
  ],
  "student": [
    "I feel excited today.",
    "Yes, I am excited!"
  ],
  "note": "Use the word bank: excited, scared, because, today.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Today] I feel [excited]."
    },
    {
      "speaker": "B",
      "text": "I feel a little [scared]."
    },
    {
      "speaker": "A",
      "text": "I feel happy [because] it's my birthday."
    }
  ],
  "blanks": [
    "today",
    "excited",
    "scared"
  ]
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you feel today?"
    },
    {
      "speaker": "B",
      "text": "Today I feel excited! How do you feel?"
    },
    {
      "speaker": "A",
      "text": "I feel happy because it's sunny."
    },
    {
      "speaker": "B",
      "text": "That makes me happy too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today I feel excited. I feel happy because it's sunny. Sometimes I feel a little scared too.",
  "questions": [
    "How does the writer feel today?",
    "Why is the writer happy?",
    "What feeling does the writer sometimes have?"
  ]
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today I feel ___.",
    "I feel happy because ___.",
    "Sometimes I feel ___."
  ]
}$json$::jsonb,
  true
),
(
  '8a0e00c6-09e7-4f97-9bdc-50d869e39522',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'excited' and 'scared'",
    "Say a feeling for today",
    "Give a simple reason for a feeling"
  ],
  "challenge": "Tell me how you feel today, and why!"
}$json$::jsonb,
  true
);

-- Lesson 3: Are You Happy?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'eb6ffb32-e587-4405-944e-261f803631ce',
  'Are You Happy?',
  'A1',
  'kids',
  12,
  3,
  'Ask and answer about feelings. [Bridge, Lesson 3: freer practice, TPR feeling faces game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Are You Happy?' -- A festive, celebratory classroom scene -- children showing off what they've learned, trophy or stars."
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙂",
  "questions": [
    "Are you happy right now?",
    "Are you tired?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Are you",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Yes, I am",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "No, I'm not",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Okay",
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
  'eb6ffb32-e587-4405-944e-261f803631ce',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are you happy?",
    "Are you tired?"
  ],
  "student": [
    "Yes, I am happy!",
    "No, I'm not tired."
  ],
  "note": "Make the face, then answer the question!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Are you] happy?"
    },
    {
      "speaker": "B",
      "text": "[Yes, I am]! Are you okay?"
    },
    {
      "speaker": "A",
      "text": "[No, I'm not] sad."
    }
  ],
  "blanks": [
    "are you",
    "yes, i am",
    "no, i'm not"
  ]
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Are you happy today?"
    },
    {
      "speaker": "B",
      "text": "Yes, I am happy! Are you okay?"
    },
    {
      "speaker": "A",
      "text": "Yes, I am okay. Are you tired?"
    },
    {
      "speaker": "B",
      "text": "No, I'm not tired! Your turn to ask me!"
    }
  ],
  "note": "Feeling faces game: make a face, ask 'Are you ___?', and answer!"
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Are you happy today? Yes, I am happy! Are you tired? No, I'm not tired. I am okay.",
  "questions": [
    "Is the person happy?",
    "Is the person tired?",
    "How does the person feel overall?"
  ]
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Are you ___?",
    "Yes, I am ___!",
    "No, I'm not ___."
  ]
}$json$::jsonb,
  true
),
(
  'eb6ffb32-e587-4405-944e-261f803631ce',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Are you ___?'",
    "Answer 'Yes, I am' or 'No, I'm not'",
    "Play the feeling faces game"
  ],
  "challenge": "Ask me how I feel, and I'll ask you!"
}$json$::jsonb,
  true
);

-- Lesson 4: What Makes You Feel...?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  'What Makes You Feel...?',
  'A1',
  'kids',
  12,
  4,
  'Combine feelings and simple reasons into a show-and-tell. [Bridge, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'What Makes You Feel...?' -- A festive, celebratory classroom scene -- children showing off what they've learned, trophy or stars."
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😄",
  "questions": [
    "What makes you happy?",
    "What makes you smile?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Makes me",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Smile",
      "bg": "#E1F5EE",
      "image_note": "A single simple smiling mouth or a child's happy face, close-up."
    },
    {
      "word": "Cry",
      "bg": "#EEEDFE",
      "image_note": "A child with a tear on their cheek, simple and gentle (not distressing)."
    },
    {
      "word": "Feeling",
      "bg": "#FAEEDA",
      "image_note": "A row of four simple faces showing happy, sad, angry, and surprised."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What makes you happy?",
    "What makes you smile?"
  ],
  "student": [
    "My family makes me happy.",
    "My dog makes me smile."
  ],
  "note": "Put it all together: feeling + reason picture.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My family [makes me] happy."
    },
    {
      "speaker": "B",
      "text": "My dog makes me [smile]."
    },
    {
      "speaker": "A",
      "text": "Sad movies make me [cry]."
    }
  ],
  "blanks": [
    "makes me",
    "smile",
    "cry"
  ]
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What makes you happy?"
    },
    {
      "speaker": "B",
      "text": "My family makes me happy. My dog makes me smile."
    },
    {
      "speaker": "A",
      "text": "My friends make me happy too. What makes you feel sad?"
    },
    {
      "speaker": "B",
      "text": "Rainy days make me feel a little sad."
    }
  ],
  "note": "Show-and-tell: tell me one thing that makes you happy and show a happy face!"
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My family makes me happy. My dog makes me smile. My friends make me happy too.",
  "questions": [
    "What makes the writer happy?",
    "What makes the writer smile?",
    "Who else makes the writer happy?"
  ]
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ makes me happy.",
    "___ makes me smile.",
    "___ makes me feel ___."
  ]
}$json$::jsonb,
  true
),
(
  'e92c1ccc-5c05-427a-9b57-dfaef4833b76',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say what makes me happy",
    "Say 'makes me smile'",
    "Show-and-tell my feelings"
  ],
  "challenge": "Tell me what makes you happy, and show me a happy face!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  'Unit Review',
  'A1',
  'kids',
  12,
  5,
  'Review feelings vocabulary and reasons. [Bridge, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A festive, celebratory classroom scene -- children showing off what they've learned, trophy or stars."
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😊",
  "questions": [
    "How do you feel today?",
    "What makes you happy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Feel",
      "bg": "#FAECE7",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Happy",
      "bg": "#E1F5EE",
      "image_note": "A child with a big smile, arms raised, sparkles around them."
    },
    {
      "word": "Are you",
      "bg": "#EEEDFE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Makes me",
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
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you feel today?",
    "What makes you happy?"
  ],
  "student": [
    "I feel happy today.",
    "My family makes me happy."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [feel] happy today."
    },
    {
      "speaker": "B",
      "text": "[Are you] excited too?"
    },
    {
      "speaker": "A",
      "text": "Yes! My friends [makes me] happy."
    }
  ],
  "blanks": [
    "feel",
    "are you",
    "makes me"
  ]
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I feel happy today. Are you happy too?"
    },
    {
      "speaker": "B",
      "text": "Yes, I am happy! My family makes me happy."
    },
    {
      "speaker": "A",
      "text": "My dog makes me smile."
    },
    {
      "speaker": "B",
      "text": "That's wonderful!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I feel happy today. My family makes me happy. My dog makes me smile. I feel good!",
  "questions": [
    "How does the writer feel?",
    "What makes the writer happy?",
    "What makes the writer smile?"
  ]
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I feel ___ today.",
    "___ makes me happy.",
    "___ makes me smile."
  ]
}$json$::jsonb,
  true
),
(
  'dd90036c-6234-468a-ab33-72f717d4d9d5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name feelings",
    "Ask and answer 'Are you ___?'",
    "Say what makes me happy"
  ],
  "challenge": "Tell me all about how you feel today!"
}$json$::jsonb,
  true
);
