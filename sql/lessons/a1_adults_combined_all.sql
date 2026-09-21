-- A1 Adults: Full 12-unit curriculum (60 lessons), combined for one-shot Supabase run.
-- Run delete_all_a1.sql FIRST, then this file.

-- A1 Adults Unit 1: Hello and Introductions (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentenco Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Hello and Introductions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'dc6d960a-cbc6-4468-8398-9c9cf7c57ccd',
  'Hello and Introductions',
  'A1',
  'adults',
  1,
  1,
  'Greet and introduce yourself. [Foundation, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'dc6d960a-cbc6-4468-8398-9c9cf7c57ccd',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'dc6d960a-cbc6-4468-8398-9c9cf7c57ccd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👋",
  "questions": [
    "How do you greet someone new?",
    "Where are you from?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'dc6d960a-cbc6-4468-8398-9c9cf7c57ccd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hello",
      "bg": "#FAECE7"
    },
    {
      "word": "My name is",
      "bg": "#E1F5EE"
    },
    {
      "word": "Nice to meet you",
      "bg": "#EEEDFE"
    },
    {
      "word": "I am from",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'dc6d960a-cbc6-4468-8398-9c9cf7c57ccd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Hello, what is your name?",
    "Where are you from?"
  ],
  "student": [
    "Hello, my name is ___.",
    "I am from ___."
  ],
  "note": "Read the model greeting, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'dc6d960a-cbc6-4468-8398-9c9cf7c57ccd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Hello]! My name is Maria."
    },
    {
      "speaker": "B",
      "text": "[Nice to meet you]!"
    },
    {
      "speaker": "A",
      "text": "[I am from] Spain."
    }
  ],
  "blanks": [
    "hello",
    "nice to meet you",
    "i am from"
  ]
}$json$::jsonb,
  true
),
(
  'dc6d960a-cbc6-4468-8398-9c9cf7c57ccd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello! My name is Maria."
    },
    {
      "speaker": "B",
      "text": "Nice to meet you, Maria. My name is Tom."
    },
    {
      "speaker": "A",
      "text": "Nice to meet you too! I am from Spain."
    },
    {
      "speaker": "B",
      "text": "I am from England."
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'dc6d960a-cbc6-4468-8398-9c9cf7c57ccd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hello! My name is Maria. Nice to meet you. I am from Spain.",
  "questions": [
    "What is the name?",
    "What does she say when they meet?",
    "Where is she from?"
  ]
}$json$::jsonb,
  true
),
(
  'dc6d960a-cbc6-4468-8398-9c9cf7c57ccd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Hello! My name is ___.",
    "Nice to meet you.",
    "I am from ___."
  ]
}$json$::jsonb,
  true
),
(
  'dc6d960a-cbc6-4468-8398-9c9cf7c57ccd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'Hello, my name is ___'",
    "Say 'Nice to meet you'",
    "Say where I am from"
  ],
  "challenge": "Introduce yourself to me!"
}$json$::jsonb,
  true
);

-- Lesson 2: Personal Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6d1b74a6-f863-4a6b-b73d-52b92592825e',
  'Personal Questions',
  'A1',
  'adults',
  1,
  2,
  'Ask and answer simple personal questions. [Foundation, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6d1b74a6-f863-4a6b-b73d-52b92592825e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '6d1b74a6-f863-4a6b-b73d-52b92592825e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "What is your job?",
    "Are you married?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '6d1b74a6-f863-4a6b-b73d-52b92592825e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What is your",
      "bg": "#FAECE7"
    },
    {
      "word": "How old are you",
      "bg": "#E1F5EE"
    },
    {
      "word": "Job",
      "bg": "#EEEDFE"
    },
    {
      "word": "Married",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6d1b74a6-f863-4a6b-b73d-52b92592825e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your job?",
    "Are you married?"
  ],
  "student": [
    "I am a teacher.",
    "Yes, I am married."
  ],
  "note": "Use the word bank: What is your, How old are you, job, married.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6d1b74a6-f863-4a6b-b73d-52b92592825e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What is your] job?"
    },
    {
      "speaker": "B",
      "text": "I am a teacher. [How old are you]?"
    },
    {
      "speaker": "A",
      "text": "I am [married]."
    }
  ],
  "blanks": [
    "what is your",
    "how old are you",
    "married"
  ]
}$json$::jsonb,
  true
),
(
  '6d1b74a6-f863-4a6b-b73d-52b92592825e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your job?"
    },
    {
      "speaker": "B",
      "text": "I am a nurse. How old are you?"
    },
    {
      "speaker": "A",
      "text": "I am 30 years old. Are you married?"
    },
    {
      "speaker": "B",
      "text": "Yes, I am married."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6d1b74a6-f863-4a6b-b73d-52b92592825e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What is your job? I am a nurse. How old are you? I am 30 years old. I am married.",
  "questions": [
    "What is the job?",
    "How old is the person?",
    "Is the person married?"
  ]
}$json$::jsonb,
  true
),
(
  '6d1b74a6-f863-4a6b-b73d-52b92592825e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My job is ___.",
    "I am ___ years old.",
    "I am married / not married."
  ]
}$json$::jsonb,
  true
),
(
  '6d1b74a6-f863-4a6b-b73d-52b92592825e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What is your job?'",
    "Ask 'How old are you?'",
    "Answer both questions"
  ],
  "challenge": "Ask me about my job, age, and family, then answer mine!"
}$json$::jsonb,
  true
);

-- Lesson 3: Spelling and Numbers
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '793c4c68-4a20-4c61-bdf6-10faa59bb670',
  'Spelling and Numbers',
  'A1',
  'adults',
  1,
  3,
  'Spell your name and use numbers for a phone number. [Foundation, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '793c4c68-4a20-4c61-bdf6-10faa59bb670',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '793c4c68-4a20-4c61-bdf6-10faa59bb670',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔤",
  "questions": [
    "Can you spell your name?",
    "What is your phone number?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '793c4c68-4a20-4c61-bdf6-10faa59bb670',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Spell",
      "bg": "#FAECE7"
    },
    {
      "word": "Phone number",
      "bg": "#E1F5EE"
    },
    {
      "word": "Letter",
      "bg": "#EEEDFE"
    },
    {
      "word": "Repeat",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '793c4c68-4a20-4c61-bdf6-10faa59bb670',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you spell your name?",
    "What is your phone number?"
  ],
  "student": [
    "M-A-R-I-A. Maria.",
    "My number is 555-1234."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '793c4c68-4a20-4c61-bdf6-10faa59bb670',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Spell] your name, please."
    },
    {
      "speaker": "B",
      "text": "What is your [phone number]?"
    },
    {
      "speaker": "A",
      "text": "Can you [repeat] that?"
    }
  ],
  "blanks": [
    "spell",
    "phone number",
    "repeat"
  ]
}$json$::jsonb,
  true
),
(
  '793c4c68-4a20-4c61-bdf6-10faa59bb670',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you spell your name?"
    },
    {
      "speaker": "B",
      "text": "M-A-R-I-A. What is your phone number?"
    },
    {
      "speaker": "A",
      "text": "555-1234. Can you repeat your name?"
    },
    {
      "speaker": "B",
      "text": "Your turn to ask me something!"
    }
  ],
  "note": "Student asks first this time. Teacher answers, then asks back."
}$json$::jsonb,
  true
),
(
  '793c4c68-4a20-4c61-bdf6-10faa59bb670',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How do you spell your name? M-A-R-I-A. What is your phone number? 555-1234.",
  "questions": [
    "How is the name spelled?",
    "What is the phone number?",
    "Why do people ask to spell a name?"
  ]
}$json$::jsonb,
  true
),
(
  '793c4c68-4a20-4c61-bdf6-10faa59bb670',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My name is spelled: ___.",
    "My phone number is ___.",
    "Can you repeat that?"
  ]
}$json$::jsonb,
  true
),
(
  '793c4c68-4a20-4c61-bdf6-10faa59bb670',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Spell my name out loud",
    "Say a phone number",
    "Ask someone to repeat"
  ],
  "challenge": "Spell your name and tell me a phone number!"
}$json$::jsonb,
  true
);

-- Lesson 4: A First Meeting
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '78002563-028d-4852-86cf-9d3b83e3fa0d',
  'A First Meeting',
  'A1',
  'adults',
  1,
  4,
  'Combine greetings, questions, and spelling into a first meeting. [Foundation, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '78002563-028d-4852-86cf-9d3b83e3fa0d',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '78002563-028d-4852-86cf-9d3b83e3fa0d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤝",
  "questions": [
    "Have you met someone new at work recently?",
    "What do you say when you welcome someone?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '78002563-028d-4852-86cf-9d3b83e3fa0d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Pleased to",
      "bg": "#FAECE7"
    },
    {
      "word": "Let me introduce",
      "bg": "#E1F5EE"
    },
    {
      "word": "Colleague",
      "bg": "#EEEDFE"
    },
    {
      "word": "Welcome",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '78002563-028d-4852-86cf-9d3b83e3fa0d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Let me introduce myself.",
    "Welcome to the team!"
  ],
  "student": [
    "Pleased to meet you.",
    "Thank you, I am happy to be here."
  ],
  "note": "Put it all together: greeting, name, job, and a polite closing.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '78002563-028d-4852-86cf-9d3b83e3fa0d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Let me introduce] myself. I'm Maria."
    },
    {
      "speaker": "B",
      "text": "[Pleased to] meet you. I'm your [colleague], Tom."
    },
    {
      "speaker": "A",
      "text": "[Welcome] to the office!"
    }
  ],
  "blanks": [
    "let me introduce",
    "pleased to",
    "colleague"
  ]
}$json$::jsonb,
  true
),
(
  '78002563-028d-4852-86cf-9d3b83e3fa0d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello, let me introduce myself. I'm Maria, M-A-R-I-A."
    },
    {
      "speaker": "B",
      "text": "Pleased to meet you, Maria. I'm Tom, your colleague."
    },
    {
      "speaker": "A",
      "text": "Nice to meet you, Tom. I am from Spain."
    },
    {
      "speaker": "B",
      "text": "Welcome to the team!"
    }
  ],
  "note": "Mini role-play: pretend you're meeting a new colleague for the first time."
}$json$::jsonb,
  true
),
(
  '78002563-028d-4852-86cf-9d3b83e3fa0d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hello, let me introduce myself. I'm Maria, M-A-R-I-A. I am from Spain. Pleased to meet you.",
  "questions": [
    "What is the woman's name, spelled?",
    "Where is she from?",
    "What does she say at the end?"
  ]
}$json$::jsonb,
  true
),
(
  '78002563-028d-4852-86cf-9d3b83e3fa0d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Let me introduce myself. I'm ___.",
    "I am from ___.",
    "Pleased to meet you."
  ]
}$json$::jsonb,
  true
),
(
  '78002563-028d-4852-86cf-9d3b83e3fa0d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Introduce myself with name, spelling, and origin",
    "Greet a new colleague",
    "Use everything from this unit together"
  ],
  "challenge": "Meet me for the first time at a new job! Introduce yourself."
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c2b941c6-d22c-45f5-ab7c-0086b69dead5',
  'Unit Review',
  'A1',
  'adults',
  1,
  5,
  'Review greetings, personal questions, and spelling. [Foundation, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c2b941c6-d22c-45f5-ab7c-0086b69dead5',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'c2b941c6-d22c-45f5-ab7c-0086b69dead5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👋",
  "questions": [
    "What is your name?",
    "What is your job?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'c2b941c6-d22c-45f5-ab7c-0086b69dead5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hello",
      "bg": "#FAECE7"
    },
    {
      "word": "My name is",
      "bg": "#E1F5EE"
    },
    {
      "word": "Job",
      "bg": "#EEEDFE"
    },
    {
      "word": "Spell",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c2b941c6-d22c-45f5-ab7c-0086b69dead5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your name?",
    "What is your job?"
  ],
  "student": [
    "My name is ___.",
    "My job is ___."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c2b941c6-d22c-45f5-ab7c-0086b69dead5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Hello]! My [name is] Maria."
    },
    {
      "speaker": "B",
      "text": "What is your [job]?"
    },
    {
      "speaker": "A",
      "text": "I can [spell] my name: M-A-R-I-A."
    }
  ],
  "blanks": [
    "hello",
    "name is",
    "spell"
  ]
}$json$::jsonb,
  true
),
(
  'c2b941c6-d22c-45f5-ab7c-0086b69dead5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello! What is your name?"
    },
    {
      "speaker": "B",
      "text": "My name is Tom, T-O-M. What is your job?"
    },
    {
      "speaker": "A",
      "text": "I am a nurse. Nice to meet you!"
    },
    {
      "speaker": "B",
      "text": "Nice to meet you too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c2b941c6-d22c-45f5-ab7c-0086b69dead5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hello! My name is Tom, T-O-M. I am a nurse. Nice to meet you!",
  "questions": [
    "What is the man's name?",
    "What is his job?",
    "What does he say at the end?"
  ]
}$json$::jsonb,
  true
),
(
  'c2b941c6-d22c-45f5-ab7c-0086b69dead5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Hello! My name is ___.",
    "I am a ___.",
    "Nice to meet you."
  ]
}$json$::jsonb,
  true
),
(
  'c2b941c6-d22c-45f5-ab7c-0086b69dead5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Greet someone new",
    "Say and spell my name",
    "Say my job"
  ],
  "challenge": "Introduce yourself to me: hello, name, spelling, and job!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 2: My Family (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  'My Family',
  'A1',
  'adults',
  2,
  1,
  'Name immediate family members. [Foundation, L1, format F: heaviest scaffold, full word bank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Do you have a husband or wife?",
    "Do you have children?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Husband",
      "bg": "#FAECE7"
    },
    {
      "word": "Wife",
      "bg": "#E1F5EE"
    },
    {
      "word": "Son",
      "bg": "#EEEDFE"
    },
    {
      "word": "Daughter",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your husband?"
  ],
  "student": [
    "This is my husband.",
    "Yes, this is my wife."
  ],
  "note": "Read the model text, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [husband]."
    },
    {
      "speaker": "B",
      "text": "This is my [wife]."
    },
    {
      "speaker": "A",
      "text": "I have one [son]."
    }
  ],
  "blanks": [
    "husband",
    "wife",
    "son"
  ]
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my husband."
    },
    {
      "speaker": "B",
      "text": "This is my wife."
    },
    {
      "speaker": "A",
      "text": "I have one son."
    },
    {
      "speaker": "B",
      "text": "I have one daughter!"
    }
  ],
  "note": "Fill in the blanks with the word bank, then read the whole introduction together."
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my husband. This is my wife. I have one son and one daughter.",
  "questions": [
    "Who is in the family?",
    "How many sons?",
    "How many daughters?"
  ]
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "I have ___ son(s).",
    "I have ___ daughter(s)."
  ]
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 family members",
    "Say 'This is my ___'",
    "Talk about my family"
  ],
  "challenge": "Tell me who is in your family!"
}$json$::jsonb,
  true
);

-- Lesson 2: Talking About Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  'Talking About Family',
  'A1',
  'adults',
  2,
  2,
  'Describe family members with simple adjectives. [Foundation, L2, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👵",
  "questions": [
    "Are your parents kind?",
    "Are your parents retired?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Parents",
      "bg": "#FAECE7"
    },
    {
      "word": "Kind",
      "bg": "#E1F5EE"
    },
    {
      "word": "Hardworking",
      "bg": "#EEEDFE"
    },
    {
      "word": "Retired",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are your parents kind?",
    "Is your father retired?"
  ],
  "student": [
    "Yes, my parents are kind.",
    "Yes, my father is retired."
  ],
  "note": "Use the word bank: parents, kind, hardworking, retired.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [parents] are kind."
    },
    {
      "speaker": "B",
      "text": "My father is [hardworking]."
    },
    {
      "speaker": "A",
      "text": "My mother is [retired]."
    }
  ],
  "blanks": [
    "parents",
    "hardworking",
    "retired"
  ]
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My parents are kind. My father is hardworking."
    },
    {
      "speaker": "B",
      "text": "My mother is retired now."
    },
    {
      "speaker": "A",
      "text": "That's nice. My parents are retired too."
    },
    {
      "speaker": "B",
      "text": "Now tell me about your own parents using these lines!"
    }
  ],
  "note": "Short role-play: introduce your parents to a new colleague using the lines above."
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My parents are kind. My father is hardworking. My mother is retired. My family is nice.",
  "questions": [
    "Are the parents kind or unkind?",
    "Is the father hardworking?",
    "Is the mother working or retired?"
  ]
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My parents are ___.",
    "My father is ___.",
    "My mother is ___."
  ]
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'kind' and 'hardworking'",
    "Describe a family member",
    "Say 'My ___ is ___'"
  ],
  "challenge": "Describe one person in your family!"
}$json$::jsonb,
  true
);

-- Lesson 3: Describing People
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  'Describing People',
  'A1',
  'adults',
  2,
  3,
  'Describe family with simple physical descriptions. [Foundation, L3, format M: read and identify, then match]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📏",
  "questions": [
    "Is your son tall or short?",
    "Are your parents young or old?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Tall",
      "bg": "#FAECE7"
    },
    {
      "word": "Short",
      "bg": "#E1F5EE"
    },
    {
      "word": "Young",
      "bg": "#EEEDFE"
    },
    {
      "word": "Old",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your son tall?",
    "Are your parents old?"
  ],
  "student": [
    "Yes, my son is tall.",
    "My parents are not old, they are young."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My son is [tall]."
    },
    {
      "speaker": "B",
      "text": "My daughter is [short]."
    },
    {
      "speaker": "A",
      "text": "My wife is [young]."
    }
  ],
  "blanks": [
    "tall",
    "short",
    "young"
  ]
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My son is tall."
    },
    {
      "speaker": "B",
      "text": "My son is tall too!"
    },
    {
      "speaker": "A",
      "text": "My daughter is short."
    },
    {
      "speaker": "B",
      "text": "My daughter is short too!"
    }
  ],
  "note": "Read the model line, find the describing word, then say a matching sentence about your own family."
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My son is tall. My daughter is short. My wife is young. My family is nice.",
  "questions": [
    "Is the son tall or short?",
    "Is the daughter tall or short?",
    "Is the wife young or old?"
  ]
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My son/daughter is ___.",
    "My husband/wife is ___.",
    "My family is ___."
  ]
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'tall', 'short', 'young', 'old'",
    "Describe a family member's appearance",
    "Ask about someone's family"
  ],
  "challenge": "Describe one family member's appearance to me!"
}$json$::jsonb,
  true
);

-- Lesson 4: Family Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  'Family Questions',
  'A1',
  'adults',
  2,
  4,
  'Combine family vocabulary into a short description. [Foundation, L4, format E: choose-the-better-response + independent production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❤️",
  "questions": [
    "Who do you live with?",
    "Are you close to your family?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Live with",
      "bg": "#FAECE7"
    },
    {
      "word": "Together",
      "bg": "#E1F5EE"
    },
    {
      "word": "Close",
      "bg": "#EEEDFE"
    },
    {
      "word": "Love",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who do you live with?",
    "Are you close to your family?"
  ],
  "student": [
    "I live with my husband and children.",
    "Yes, we are close."
  ],
  "note": "Put it all together: family members + description.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [live with] my wife and two children."
    },
    {
      "speaker": "B",
      "text": "We are [together] every weekend."
    },
    {
      "speaker": "A",
      "text": "I [love] my family."
    }
  ],
  "blanks": [
    "live with",
    "together",
    "love"
  ]
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I live with my family' or 'I live in my family'?"
    },
    {
      "speaker": "B",
      "text": "'I live with my family' is correct."
    },
    {
      "speaker": "A",
      "text": "Good. Now tell me: who do you live with, and are you close to them?"
    },
    {
      "speaker": "B",
      "text": "I live with my husband and children. We are close."
    }
  ],
  "note": "Choose the correct sentence first, then answer fully in your own words about your own family."
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I live with my husband and one son. My parents are retired. We are close, and I love my family.",
  "questions": [
    "Who does the writer live with?",
    "Are the parents working or retired?",
    "Is the family close?"
  ]
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I live with ___.",
    "My family is ___.",
    "I love my family because ___."
  ]
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe who I live with",
    "Describe my family",
    "Say I am close to my family"
  ],
  "challenge": "Tell me all about your family!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  'Unit Review',
  'A1',
  'adults',
  2,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Who is in your family?",
    "Who do you live with?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Family",
      "bg": "#FAECE7"
    },
    {
      "word": "Husband",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kind",
      "bg": "#EEEDFE"
    },
    {
      "word": "Live with",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Who do you live with?"
  ],
  "student": [
    "This is my husband.",
    "I live with my family."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [family]."
    },
    {
      "speaker": "B",
      "text": "This is my [husband]. He is [kind]."
    },
    {
      "speaker": "A",
      "text": "I [live with] my family."
    }
  ],
  "blanks": [
    "family",
    "husband",
    "live with"
  ]
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your family."
    },
    {
      "speaker": "B",
      "text": "This is my wife. She is kind. I live with my family."
    },
    {
      "speaker": "A",
      "text": "I have one daughter and one son too."
    },
    {
      "speaker": "B",
      "text": "Nice family!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my family. My wife is kind. I live with my family. I love my family.",
  "questions": [
    "Who is kind?",
    "Who does the writer live with?",
    "Does the writer love the family?"
  ]
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my family.",
    "My ___ is ___.",
    "I live with ___."
  ]
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name family members",
    "Describe a family member",
    "Say who I live with"
  ],
  "challenge": "Tell me all about your family!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 3: Home and Everyday Objects (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Rooms at Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
  'Rooms at Home',
  'A1',
  'adults',
  3,
  1,
  'Name rooms at home. [Foundation, L1, format E: choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "How many rooms does your home have?",
    "Where is your kitchen?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Kitchen",
      "bg": "#FAECE7"
    },
    {
      "word": "Bedroom",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bathroom",
      "bg": "#EEEDFE"
    },
    {
      "word": "Living room",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What room is this?",
    "Where is your kitchen?"
  ],
  "student": [
    "This is the kitchen.",
    "My kitchen is here."
  ],
  "note": "Read the model text, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
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
      "text": "This is the [bedroom]."
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
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'This is the kitchen' or 'This is a kitchen of my house'?"
    },
    {
      "speaker": "B",
      "text": "'This is the kitchen' is correct and more natural."
    },
    {
      "speaker": "A",
      "text": "Good. What room is this?"
    },
    {
      "speaker": "B",
      "text": "This is the living room."
    }
  ],
  "note": "Choose the more natural sentence first, then name each room shown."
}$json$::jsonb,
  true
),
(
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is the kitchen. This is the bedroom. This is the bathroom.",
  "questions": [
    "What is the first room?",
    "What is the second room?",
    "Name all three rooms."
  ]
}$json$::jsonb,
  true
),
(
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is the ___.",
    "My home has a ___.",
    "I have one ___."
  ]
}$json$::jsonb,
  true
),
(
  '13edc025-d41e-4462-887a-dfc5f774ae9a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 rooms",
    "Say 'This is the ___'",
    "Talk about my home"
  ],
  "challenge": "Tell me the rooms in your home!"
}$json$::jsonb,
  true
);

-- Lesson 2: Things at Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  'Things at Home',
  'A1',
  'adults',
  3,
  2,
  'Name everyday objects with ''there is/are''. [Foundation, L2, format M: read and identify]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛋️",
  "questions": [
    "Is there a sofa in your living room?",
    "How many chairs are there?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "There is",
      "bg": "#FAECE7"
    },
    {
      "word": "There are",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sofa",
      "bg": "#EEEDFE"
    },
    {
      "word": "Table",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is in your living room?",
    "Is there a table?"
  ],
  "student": [
    "There is a sofa.",
    "Yes, there is a table."
  ],
  "note": "Use the word bank: there is, there are, sofa, table.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[There is] a [sofa]."
    },
    {
      "speaker": "B",
      "text": "[There are] two chairs."
    },
    {
      "speaker": "A",
      "text": "There is a [table] too."
    }
  ],
  "blanks": [
    "there is",
    "there are",
    "table"
  ]
}$json$::jsonb,
  true
),
(
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "There is a sofa in my living room."
    },
    {
      "speaker": "B",
      "text": "There are two chairs."
    },
    {
      "speaker": "A",
      "text": "There is a table too."
    },
    {
      "speaker": "B",
      "text": "Nice room!"
    }
  ],
  "note": "Read the model line, then say the same pattern about your own living room."
}$json$::jsonb,
  true
),
(
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "There is a sofa in my living room. There are two chairs. There is a table too.",
  "questions": [
    "What is in the living room?",
    "How many chairs?",
    "Is there a table?"
  ]
}$json$::jsonb,
  true
),
(
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "There is a ___ in my ___.",
    "There are ___.",
    "There is a ___ too."
  ]
}$json$::jsonb,
  true
),
(
  'f5bc4e6b-a2fa-4095-9d1e-aafecaae8240',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'there is' and 'there are'",
    "Name sofa, chair, table",
    "Describe my living room"
  ],
  "challenge": "Tell me what's in your living room!"
}$json$::jsonb,
  true
);

-- Lesson 3: Where Things Are
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
  'Where Things Are',
  'A1',
  'adults',
  3,
  3,
  'Ask and answer where things are. [Foundation, L3, format R: freer, less-scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
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
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Where is",
      "bg": "#FAECE7"
    },
    {
      "word": "In",
      "bg": "#E1F5EE"
    },
    {
      "word": "On",
      "bg": "#EEEDFE"
    },
    {
      "word": "Next to",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is your sofa?",
    "What is on the table?"
  ],
  "student": [
    "My sofa is in the living room.",
    "A lamp is on the table."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Where is] your bed?"
    },
    {
      "speaker": "B",
      "text": "It is [in] my bedroom."
    },
    {
      "speaker": "A",
      "text": "A lamp is [on] my table."
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
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Welcome! Let me show you around my home."
    },
    {
      "speaker": "B",
      "text": "Where is the kitchen?"
    },
    {
      "speaker": "A",
      "text": "It's next to the living room. The bathroom is upstairs."
    },
    {
      "speaker": "B",
      "text": "Now show me around your own home!"
    }
  ],
  "note": "Freer role-play: after practicing, give your own short 'tour' of your home in your own words."
}$json$::jsonb,
  true
),
(
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Where is my bed? It is in my bedroom. Where is the lamp? It is next to my bed.",
  "questions": [
    "Where is the bed?",
    "Where is the lamp?",
    "What word means 'beside'?"
  ]
}$json$::jsonb,
  true
),
(
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My ___ is in the ___.",
    "The ___ is next to my ___.",
    "Where is the ___?"
  ]
}$json$::jsonb,
  true
),
(
  '812f2207-71eb-44bc-926b-68f4dfe150f2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Where is ___?'",
    "Use 'in' and 'next to'",
    "Describe where things are at home"
  ],
  "challenge": "Ask me where something is in your home!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Home
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  'My Home',
  'A1',
  'adults',
  3,
  4,
  'Combine rooms, objects, and location into a home description. [Foundation, L4, format F: open fill-in, minimal scaffolding]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏡",
  "questions": [
    "Do you live in an apartment or a house?",
    "Is your home comfortable?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Apartment",
      "bg": "#FAECE7"
    },
    {
      "word": "House",
      "bg": "#E1F5EE"
    },
    {
      "word": "Comfortable",
      "bg": "#EEEDFE"
    },
    {
      "word": "Show",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you live in an apartment or a house?",
    "Is it comfortable?"
  ],
  "student": [
    "I live in an apartment.",
    "Yes, it is comfortable."
  ],
  "note": "Put it all together: rooms + objects + location.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I live in a(n) [apartment]."
    },
    {
      "speaker": "B",
      "text": "I live in a [house]."
    },
    {
      "speaker": "A",
      "text": "My home is [comfortable]."
    }
  ],
  "blanks": [
    "apartment",
    "house",
    "comfortable"
  ]
}$json$::jsonb,
  true
),
(
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you live in an apartment or a house, and is it comfortable?"
    },
    {
      "speaker": "B",
      "text": "I live in a(n) ___. It is ___."
    },
    {
      "speaker": "A",
      "text": "What is your favorite room, and why?"
    },
    {
      "speaker": "B",
      "text": "My favorite room is ___, because ___."
    }
  ],
  "note": "Fill in your own answers -- no word bank this time. Say your full answers out loud."
}$json$::jsonb,
  true
),
(
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I live in an apartment. There is a kitchen, a bedroom, and a living room. There is a sofa next to the window. My home is comfortable.",
  "questions": [
    "Does the writer live in an apartment or house?",
    "What rooms are there?",
    "Is the home comfortable?"
  ]
}$json$::jsonb,
  true
),
(
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I live in a(n) ___.",
    "There is a ___ and a ___.",
    "My home is ___."
  ]
}$json$::jsonb,
  true
),
(
  '0388505f-b7e3-49f9-a0b0-a953180a4cbd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my home type",
    "Name rooms and objects",
    "Say if my home is comfortable"
  ],
  "challenge": "Tell me all about your home!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
  'Unit Review',
  'A1',
  'adults',
  3,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "What rooms are in your home?",
    "Is your home comfortable?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Home",
      "bg": "#FAECE7"
    },
    {
      "word": "There is",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kitchen",
      "bg": "#EEEDFE"
    },
    {
      "word": "Comfortable",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is in your home?",
    "Is it comfortable?"
  ],
  "student": [
    "There is a kitchen and a bedroom.",
    "Yes, it is comfortable."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [home] has three rooms."
    },
    {
      "speaker": "B",
      "text": "[There is] a sofa in the living room."
    },
    {
      "speaker": "A",
      "text": "My [kitchen] is next to the living room."
    }
  ],
  "blanks": [
    "home",
    "there is",
    "kitchen"
  ]
}$json$::jsonb,
  true
),
(
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your home."
    },
    {
      "speaker": "B",
      "text": "My home has a kitchen and a bedroom. There is a sofa in the living room."
    },
    {
      "speaker": "A",
      "text": "My home is comfortable."
    },
    {
      "speaker": "B",
      "text": "Nice home!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My home has a kitchen and a bedroom. There is a sofa in the living room. My home is comfortable.",
  "questions": [
    "What rooms are named?",
    "What is in the living room?",
    "Is the home comfortable?"
  ]
}$json$::jsonb,
  true
),
(
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My home has ___.",
    "There is a ___ in the ___.",
    "My home is ___."
  ]
}$json$::jsonb,
  true
),
(
  'b7c9bc2d-3cda-4968-ae2e-cd317e9cddc9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name rooms and objects",
    "Say where things are",
    "Describe my home"
  ],
  "challenge": "Tell me all about your home!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 4: Daily Routine (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  'My Day',
  'A1',
  'adults',
  4,
  1,
  'Name daily routine actions. [Foundation, L1, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏰",
  "questions": [
    "What time do you wake up?",
    "What time do you sleep?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Wake up",
      "bg": "#FAECE7"
    },
    {
      "word": "Get dressed",
      "bg": "#E1F5EE"
    },
    {
      "word": "Go to work",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sleep",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What time do you wake up?",
    "What do you do next?"
  ],
  "student": [
    "I wake up at 7am.",
    "I get dressed."
  ],
  "note": "Read the model text, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [wake up] at 7am."
    },
    {
      "speaker": "B",
      "text": "I [get dressed]."
    },
    {
      "speaker": "A",
      "text": "I [go to work]."
    }
  ],
  "blanks": [
    "wake up",
    "get dressed",
    "go to work"
  ]
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I wake up at 7am."
    },
    {
      "speaker": "B",
      "text": "I get dressed."
    },
    {
      "speaker": "A",
      "text": "I go to work at 8am."
    },
    {
      "speaker": "B",
      "text": "Now describe your own morning using these lines!"
    }
  ],
  "note": "Short role-play: use the exact lines above to describe a morning, then describe your own."
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I wake up at 7am. I get dressed. I go to work at 8am. I sleep at 10pm.",
  "questions": [
    "What time does the writer wake up?",
    "What time does work start?",
    "What time does the writer sleep?"
  ]
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I wake up at ___.",
    "I get dressed and ___.",
    "I sleep at ___."
  ]
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 daily actions",
    "Say wake up and sleep times",
    "Talk about my morning"
  ],
  "challenge": "Tell me your daily routine!"
}$json$::jsonb,
  true
);

-- Lesson 2: Time in My Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  'Time in My Day',
  'A1',
  'adults',
  4,
  2,
  'Use frequency words with routine actions. [Foundation, L2, format E: choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍳",
  "questions": [
    "Do you always eat breakfast?",
    "Do you sometimes work late?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Usually",
      "bg": "#FAECE7"
    },
    {
      "word": "Always",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sometimes",
      "bg": "#EEEDFE"
    },
    {
      "word": "Breakfast",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you always eat breakfast?",
    "Do you sometimes work late?"
  ],
  "student": [
    "Yes, I always eat breakfast.",
    "I sometimes work late."
  ],
  "note": "Use the word bank: usually, always, sometimes, breakfast.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [usually] eat [breakfast] at 7am."
    },
    {
      "speaker": "B",
      "text": "I [always] wake up early."
    },
    {
      "speaker": "A",
      "text": "I [sometimes] work late."
    }
  ],
  "blanks": [
    "usually",
    "always",
    "sometimes"
  ]
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I always wake up early' or 'I wake always up early'?"
    },
    {
      "speaker": "B",
      "text": "'I always wake up early' is correct."
    },
    {
      "speaker": "A",
      "text": "Good. Do you usually eat breakfast?"
    },
    {
      "speaker": "B",
      "text": "Yes, I usually eat breakfast at 7am."
    }
  ],
  "note": "Choose the correct sentence first, then answer about your own routine."
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I usually eat breakfast at 7am. I always wake up early. Sometimes I work late.",
  "questions": [
    "When does the writer usually eat breakfast?",
    "Does the writer always wake up early?",
    "When does the writer sometimes work late?"
  ]
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I usually ___.",
    "I always ___.",
    "Sometimes I ___."
  ]
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'usually', 'always', 'sometimes'",
    "Talk about breakfast time",
    "Talk about my work schedule"
  ],
  "challenge": "Tell me your usual routine, and something you sometimes do differently!"
}$json$::jsonb,
  true
);

-- Lesson 3: A Typical Morning
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  'A Typical Morning',
  'A1',
  'adults',
  4,
  3,
  'Sequence a morning routine. [Foundation, L3, format F: guided fill-in]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌅",
  "questions": [
    "What do you do first in the morning?",
    "What do you do last?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
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
      "word": "Then",
      "bg": "#E1F5EE"
    },
    {
      "word": "After that",
      "bg": "#EEEDFE"
    },
    {
      "word": "Finally",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first?",
    "What do you do after that?"
  ],
  "student": [
    "First, I wake up.",
    "Then, I get dressed."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[First], I wake up."
    },
    {
      "speaker": "B",
      "text": "[Then], I eat breakfast."
    },
    {
      "speaker": "A",
      "text": "[Finally], I go to work."
    }
  ],
  "blanks": [
    "first",
    "then",
    "finally"
  ]
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do first in the morning?"
    },
    {
      "speaker": "B",
      "text": "First, I wake up. Then, I eat breakfast."
    },
    {
      "speaker": "A",
      "text": "After that, I get dressed. Finally, I go to work."
    },
    {
      "speaker": "B",
      "text": "Your turn to describe your own morning in order!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "First, I wake up. Then, I eat breakfast. After that, I get dressed. Finally, I go to work.",
  "questions": [
    "What does the writer do first?",
    "What does the writer do after breakfast?",
    "What is the last step?"
  ]
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, I ___.",
    "Then, I ___.",
    "Finally, I ___."
  ]
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'first, then, after that, finally'",
    "Sequence my morning",
    "Ask about someone's morning"
  ],
  "challenge": "Tell me your morning routine in order!"
}$json$::jsonb,
  true
);

-- Lesson 4: Routine Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  'Routine Questions',
  'A1',
  'adults',
  4,
  4,
  'Combine routine and frequency into a full-day description. [Foundation, L4, format M: independent production, teacher matches back]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😴",
  "questions": [
    "Is your day busy or relaxed?",
    "Do you have free time?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Busy",
      "bg": "#FAECE7"
    },
    {
      "word": "Free time",
      "bg": "#E1F5EE"
    },
    {
      "word": "Relax",
      "bg": "#EEEDFE"
    },
    {
      "word": "Every day",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your day busy?",
    "Do you have free time?"
  ],
  "student": [
    "Yes, my day is busy.",
    "I have free time at night."
  ],
  "note": "Put it all together: routine + sequence + frequency.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [busy] every day."
    },
    {
      "speaker": "B",
      "text": "I have [free time] at night."
    },
    {
      "speaker": "A",
      "text": "I [relax] before I sleep."
    }
  ],
  "blanks": [
    "busy",
    "free time",
    "relax"
  ]
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Describe your day, in your own words -- busy or with free time?"
    },
    {
      "speaker": "B",
      "text": "I am busy every day. I have free time at night, so I relax before I sleep."
    },
    {
      "speaker": "A",
      "text": "I'll say it back: you're busy every day, and you relax at night."
    },
    {
      "speaker": "B",
      "text": "Yes, exactly!"
    }
  ],
  "note": "You speak first, fully in your own words. Teacher matches your sentence back to check it."
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "First, I wake up at 7am. I usually eat breakfast. Then, I go to work. I am busy every day. I have free time at night, so I relax before I sleep.",
  "questions": [
    "What time does the writer wake up?",
    "Is the day busy or relaxed?",
    "What does the writer do at night?"
  ]
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, I ___.",
    "I am busy/free ___.",
    "I relax by ___."
  ]
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Sequence my whole day",
    "Say if I'm busy or have free time",
    "Say how I relax"
  ],
  "challenge": "Tell me all about your daily routine, from morning to night!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  'Unit Review',
  'A1',
  'adults',
  4,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏰",
  "questions": [
    "What is your morning routine?",
    "Is your day busy?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Routine",
      "bg": "#FAECE7"
    },
    {
      "word": "First",
      "bg": "#E1F5EE"
    },
    {
      "word": "Usually",
      "bg": "#EEEDFE"
    },
    {
      "word": "Busy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your routine?",
    "Is your day busy?"
  ],
  "student": [
    "First, I wake up, then I eat breakfast.",
    "Yes, my day is busy."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [routine] starts at 7am."
    },
    {
      "speaker": "B",
      "text": "[First], I wake up."
    },
    {
      "speaker": "A",
      "text": "I [usually] eat breakfast."
    }
  ],
  "blanks": [
    "routine",
    "first",
    "usually"
  ]
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your daily routine."
    },
    {
      "speaker": "B",
      "text": "First, I wake up. I usually eat breakfast, then go to work."
    },
    {
      "speaker": "A",
      "text": "I am busy every day, so I relax at night."
    },
    {
      "speaker": "B",
      "text": "Sounds like a good routine!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "First, I wake up. I usually eat breakfast. Then, I go to work. I am busy every day, so I relax at night.",
  "questions": [
    "What is the first step?",
    "What does the writer usually do?",
    "Why does the writer relax at night?"
  ]
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, I ___.",
    "I usually ___.",
    "At night, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Sequence my routine",
    "Use frequency words",
    "Talk about my whole day"
  ],
  "challenge": "Tell me all about your daily routine!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 5: Work and Jobs (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Jobs
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '31b427c3-cbe7-4bfd-a00b-28787b0939f4',
  'Jobs',
  'A1',
  'adults',
  5,
  1,
  'Unchanged by the rotation rework -- L1 format M, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '31b427c3-cbe7-4bfd-a00b-28787b0939f4',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '31b427c3-cbe7-4bfd-a00b-28787b0939f4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💼",
  "questions": [
    "What is your job?",
    "Do you know a doctor?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '31b427c3-cbe7-4bfd-a00b-28787b0939f4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Teacher",
      "bg": "#FAECE7"
    },
    {
      "word": "Doctor",
      "bg": "#E1F5EE"
    },
    {
      "word": "Engineer",
      "bg": "#EEEDFE"
    },
    {
      "word": "Driver",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '31b427c3-cbe7-4bfd-a00b-28787b0939f4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your job?",
    "Are you a teacher?"
  ],
  "student": [
    "I am a teacher.",
    "No, I am an engineer."
  ],
  "note": "Read the model text, then find the job words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '31b427c3-cbe7-4bfd-a00b-28787b0939f4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am a [teacher]."
    },
    {
      "speaker": "B",
      "text": "I am a [doctor]."
    },
    {
      "speaker": "A",
      "text": "My brother is an [engineer]."
    }
  ],
  "blanks": [
    "teacher",
    "doctor",
    "engineer"
  ]
}$json$::jsonb,
  true
),
(
  '31b427c3-cbe7-4bfd-a00b-28787b0939f4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am a teacher."
    },
    {
      "speaker": "B",
      "text": "I am a doctor."
    },
    {
      "speaker": "A",
      "text": "My brother is an engineer."
    },
    {
      "speaker": "B",
      "text": "My sister is a driver!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '31b427c3-cbe7-4bfd-a00b-28787b0939f4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am a teacher. My husband is a doctor. My brother is an engineer.",
  "questions": [
    "What is the writer's job?",
    "What is the husband's job?",
    "What is the brother's job?"
  ]
}$json$::jsonb,
  true
),
(
  '31b427c3-cbe7-4bfd-a00b-28787b0939f4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am a ___.",
    "My husband/wife is a ___.",
    "My brother/sister is a ___."
  ]
}$json$::jsonb,
  true
),
(
  '31b427c3-cbe7-4bfd-a00b-28787b0939f4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 jobs",
    "Say 'I am a ___'",
    "Talk about family jobs"
  ],
  "challenge": "Tell me your job and one family member's job!"
}$json$::jsonb,
  true
);

-- Lesson 2: Workplaces
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e03841dc-3c3b-4dee-b763-4dc93e25f8e7',
  'Workplaces',
  'A1',
  'adults',
  5,
  2,
  'Name workplaces and combine job + place. [Combination, L2, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e03841dc-3c3b-4dee-b763-4dc93e25f8e7',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'e03841dc-3c3b-4dee-b763-4dc93e25f8e7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏢",
  "questions": [
    "Do you work in an office?",
    "Do you work at a school?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'e03841dc-3c3b-4dee-b763-4dc93e25f8e7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Office",
      "bg": "#FAECE7"
    },
    {
      "word": "Hospital",
      "bg": "#E1F5EE"
    },
    {
      "word": "School",
      "bg": "#EEEDFE"
    },
    {
      "word": "Factory",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e03841dc-3c3b-4dee-b763-4dc93e25f8e7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you work?",
    "Do you work in an office?"
  ],
  "student": [
    "I work in an office.",
    "Yes, I work in an office."
  ],
  "note": "Use the word bank: office, hospital, school, factory.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e03841dc-3c3b-4dee-b763-4dc93e25f8e7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I work in an [office]."
    },
    {
      "speaker": "B",
      "text": "I work in a [hospital]."
    },
    {
      "speaker": "A",
      "text": "My sister works at a [school]."
    }
  ],
  "blanks": [
    "office",
    "hospital",
    "school"
  ]
}$json$::jsonb,
  true
),
(
  'e03841dc-3c3b-4dee-b763-4dc93e25f8e7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where do you work?"
    },
    {
      "speaker": "B",
      "text": "I work in a hospital. Where do you work?"
    },
    {
      "speaker": "A",
      "text": "I work in an office. My brother works at a factory."
    },
    {
      "speaker": "B",
      "text": "Now tell me where you work, using these lines!"
    }
  ],
  "note": "Short role-play: use the exact lines above to talk about workplaces, then use your own."
}$json$::jsonb,
  true
),
(
  'e03841dc-3c3b-4dee-b763-4dc93e25f8e7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I work in an office. My husband works in a hospital. My sister works at a school.",
  "questions": [
    "Where does the writer work?",
    "Where does the husband work?",
    "Where does the sister work?"
  ]
}$json$::jsonb,
  true
),
(
  'e03841dc-3c3b-4dee-b763-4dc93e25f8e7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I work in a(n) ___.",
    "My husband/wife works in a(n) ___.",
    "My ___ works at a ___."
  ]
}$json$::jsonb,
  true
),
(
  'e03841dc-3c3b-4dee-b763-4dc93e25f8e7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 workplaces",
    "Say 'I work in a(n) ___'",
    "Talk about family workplaces"
  ],
  "challenge": "Tell me where you work and where a family member works!"
}$json$::jsonb,
  true
);

-- Lesson 3: Daily Work Tasks
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3130fe26-f589-4e3b-a282-b98ef8b0ec9e',
  'Daily Work Tasks',
  'A1',
  'adults',
  5,
  3,
  'Describe simple work tasks with a reason. [Combination, L3, format F: guided fill-in]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3130fe26-f589-4e3b-a282-b98ef8b0ec9e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '3130fe26-f589-4e3b-a282-b98ef8b0ec9e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📋",
  "questions": [
    "What do you do at work?",
    "Do you help people at your job?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '3130fe26-f589-4e3b-a282-b98ef8b0ec9e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Answer calls",
      "bg": "#FAECE7"
    },
    {
      "word": "Write reports",
      "bg": "#E1F5EE"
    },
    {
      "word": "Help people",
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
  '3130fe26-f589-4e3b-a282-b98ef8b0ec9e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do at work?",
    "Do you like your tasks?"
  ],
  "student": [
    "I answer calls and write reports.",
    "I like it because it is interesting."
  ],
  "note": "One sentence has a mistake. Find it and fix it before you continue.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3130fe26-f589-4e3b-a282-b98ef8b0ec9e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [answer calls] at work."
    },
    {
      "speaker": "B",
      "text": "I [write reports] every day."
    },
    {
      "speaker": "A",
      "text": "I like my job [because] I help people."
    }
  ],
  "blanks": [
    "answer calls",
    "write reports",
    "because"
  ]
}$json$::jsonb,
  true
),
(
  '3130fe26-f589-4e3b-a282-b98ef8b0ec9e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do at work?"
    },
    {
      "speaker": "B",
      "text": "I answer calls and help people. I like it because it is interesting."
    },
    {
      "speaker": "A",
      "text": "I write reports every day. Fill in your own task now!"
    },
    {
      "speaker": "B",
      "text": "I ___ at work. I like it because ___."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '3130fe26-f589-4e3b-a282-b98ef8b0ec9e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I answer calls at work. I help people every day. I like my job because it is interesting.",
  "questions": [
    "What does the writer do at work?",
    "Who does the writer help?",
    "Why does the writer like the job?"
  ]
}$json$::jsonb,
  true
),
(
  '3130fe26-f589-4e3b-a282-b98ef8b0ec9e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I ___ at work.",
    "I ___ every day.",
    "I like my job because ___."
  ]
}$json$::jsonb,
  true
),
(
  '3130fe26-f589-4e3b-a282-b98ef8b0ec9e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a work task",
    "Use 'because' with one clause",
    "Say why I like my job"
  ],
  "challenge": "Tell me one thing you do at work, and why you like it!"
}$json$::jsonb,
  true
);

-- Lesson 4: Talking About Work
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b1ef4791-f32a-4a8d-be9c-7ce1cb325242',
  'Talking About Work',
  'A1',
  'adults',
  5,
  4,
  'Combine job, workplace, tasks, and opinion into a short talk. [Combination, L4, format E: choose-the-better-response + independent production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b1ef4791-f32a-4a8d-be9c-7ce1cb325242',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'b1ef4791-f32a-4a8d-be9c-7ce1cb325242',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤝",
  "questions": [
    "Do you enjoy your job?",
    "Do you work with a team?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'b1ef4791-f32a-4a8d-be9c-7ce1cb325242',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Colleague",
      "bg": "#FAECE7"
    },
    {
      "word": "Difficult",
      "bg": "#E1F5EE"
    },
    {
      "word": "Enjoy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Team",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b1ef4791-f32a-4a8d-be9c-7ce1cb325242',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you enjoy your job?",
    "Is it difficult?"
  ],
  "student": [
    "Yes, I enjoy my job.",
    "It is difficult sometimes."
  ],
  "note": "Put it all together: job + place + task + opinion.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b1ef4791-f32a-4a8d-be9c-7ce1cb325242',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [colleague] and I work together."
    },
    {
      "speaker": "B",
      "text": "The work is [difficult] sometimes."
    },
    {
      "speaker": "A",
      "text": "I [enjoy] my [team]."
    }
  ],
  "blanks": [
    "colleague",
    "difficult",
    "enjoy"
  ]
}$json$::jsonb,
  true
),
(
  'b1ef4791-f32a-4a8d-be9c-7ce1cb325242',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I enjoy my team' or 'I enjoy of my team'?"
    },
    {
      "speaker": "B",
      "text": "'I enjoy my team' is correct. No 'of' after enjoy."
    },
    {
      "speaker": "A",
      "text": "Good. Now tell me about your own job and colleagues, in your own words."
    },
    {
      "speaker": "B",
      "text": "I work with my colleagues. It is difficult sometimes, but I enjoy my team."
    }
  ],
  "note": "Choose the correct sentence first, then answer fully in your own words about your own job."
}$json$::jsonb,
  true
),
(
  'b1ef4791-f32a-4a8d-be9c-7ce1cb325242',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am a nurse. I work in a hospital with my colleagues. It is difficult sometimes, but I enjoy my team.",
  "questions": [
    "What is the job?",
    "Where does the writer work?",
    "Does the writer enjoy the team?"
  ]
}$json$::jsonb,
  true
),
(
  'b1ef4791-f32a-4a8d-be9c-7ce1cb325242',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am a ___.",
    "I work with ___.",
    "I enjoy ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'b1ef4791-f32a-4a8d-be9c-7ce1cb325242',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my job and workplace",
    "Describe a task and an opinion",
    "Talk about my colleagues"
  ],
  "challenge": "Tell me all about your job!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ee892200-05c3-4d55-933b-4f974f72397a',
  'Unit Review',
  'A1',
  'adults',
  5,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ee892200-05c3-4d55-933b-4f974f72397a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'ee892200-05c3-4d55-933b-4f974f72397a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💼",
  "questions": [
    "What is your job?",
    "Do you enjoy it?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'ee892200-05c3-4d55-933b-4f974f72397a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Job",
      "bg": "#FAECE7"
    },
    {
      "word": "Work in",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "Enjoy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ee892200-05c3-4d55-933b-4f974f72397a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your job?",
    "Do you enjoy it?"
  ],
  "student": [
    "I am a teacher.",
    "Yes, I enjoy it."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ee892200-05c3-4d55-933b-4f974f72397a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [job] is teacher."
    },
    {
      "speaker": "B",
      "text": "I [work in] a school."
    },
    {
      "speaker": "A",
      "text": "I enjoy it [because] I help people."
    }
  ],
  "blanks": [
    "job",
    "work in",
    "because"
  ]
}$json$::jsonb,
  true
),
(
  'ee892200-05c3-4d55-933b-4f974f72397a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your job."
    },
    {
      "speaker": "B",
      "text": "My job is teacher. I work in a school. I enjoy it because I help people."
    },
    {
      "speaker": "A",
      "text": "My colleagues are nice too."
    },
    {
      "speaker": "B",
      "text": "Sounds like a great job!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ee892200-05c3-4d55-933b-4f974f72397a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My job is teacher. I work in a school. I enjoy it because I help people. My colleagues are nice.",
  "questions": [
    "What is the job?",
    "Where does the writer work?",
    "Why does the writer enjoy it?"
  ]
}$json$::jsonb,
  true
),
(
  'ee892200-05c3-4d55-933b-4f974f72397a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My job is ___.",
    "I work in a ___.",
    "I enjoy it because ___."
  ]
}$json$::jsonb,
  true
),
(
  'ee892200-05c3-4d55-933b-4f974f72397a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about my job and workplace",
    "Describe a work task",
    "Give a reason with 'because'"
  ],
  "challenge": "Tell me all about your job or a job you'd like!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 6: Shopping and Money (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: In the Shop
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  'In the Shop',
  'A1',
  'adults',
  6,
  1,
  'Name shops and shopping vocabulary. [Combination, L1, format F: heaviest scaffold, full word bank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛒",
  "questions": [
    "Do you go to the supermarket every week?",
    "Do you like the bakery?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Supermarket",
      "bg": "#FAECE7"
    },
    {
      "word": "Bakery",
      "bg": "#E1F5EE"
    },
    {
      "word": "Shop assistant",
      "bg": "#EEEDFE"
    },
    {
      "word": "Customer",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you shop?",
    "Do you go to the bakery?"
  ],
  "student": [
    "I shop at the supermarket.",
    "Yes, I go to the bakery."
  ],
  "note": "Read the model text, then find the shop words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I shop at the [supermarket]."
    },
    {
      "speaker": "B",
      "text": "I buy bread at the [bakery]."
    },
    {
      "speaker": "A",
      "text": "The [shop assistant] is helpful."
    }
  ],
  "blanks": [
    "supermarket",
    "bakery",
    "shop assistant"
  ]
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I shop at the supermarket every week."
    },
    {
      "speaker": "B",
      "text": "I go to the bakery for bread."
    },
    {
      "speaker": "A",
      "text": "The shop assistant is helpful."
    },
    {
      "speaker": "B",
      "text": "I am a customer there too!"
    }
  ],
  "note": "Fill in the blanks with the word bank, then read the whole passage together."
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I shop at the supermarket every week. I go to the bakery for bread. The shop assistant is helpful.",
  "questions": [
    "Where does the writer shop every week?",
    "What does the writer buy at the bakery?",
    "Is the shop assistant helpful?"
  ]
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I shop at the ___.",
    "I buy ___ at the ___.",
    "The shop assistant is ___."
  ]
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 shopping words",
    "Say 'I shop at the ___'",
    "Talk about a shop I go to"
  ],
  "challenge": "Tell me about a shop you go to!"
}$json$::jsonb,
  true
);

-- Lesson 2: Prices and Money
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  'Prices and Money',
  'A1',
  'adults',
  6,
  2,
  'Ask and answer about prices. [Combination, L2, format E: choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💰",
  "questions": [
    "How much does bread cost?",
    "Is fruit expensive?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "How much",
      "bg": "#FAECE7"
    },
    {
      "word": "Price",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cheap",
      "bg": "#EEEDFE"
    },
    {
      "word": "Expensive",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much is this?",
    "Is it expensive?"
  ],
  "student": [
    "It is five dollars.",
    "No, it is cheap."
  ],
  "note": "Use the word bank: how much, price, cheap, expensive.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[How much] is this bread?"
    },
    {
      "speaker": "B",
      "text": "The [price] is two dollars."
    },
    {
      "speaker": "A",
      "text": "That is [cheap]!"
    }
  ],
  "blanks": [
    "how much",
    "price",
    "cheap"
  ]
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'How much is this?' or 'How many is this?'?"
    },
    {
      "speaker": "B",
      "text": "'How much is this?' is correct for price."
    },
    {
      "speaker": "A",
      "text": "Good. Is that cheap or expensive to you?"
    },
    {
      "speaker": "B",
      "text": "That's cheap for me."
    }
  ],
  "note": "Choose the correct question first, then answer about prices you know."
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How much is this bread? The price is two dollars. That is cheap. The shoes are fifty dollars. That is expensive.",
  "questions": [
    "How much is the bread?",
    "Is the bread cheap or expensive?",
    "How much are the shoes?"
  ]
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The price of ___ is ___.",
    "It is cheap/expensive.",
    "How much is the ___?"
  ]
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'How much is it?'",
    "Answer with a price",
    "Say 'cheap' and 'expensive'"
  ],
  "challenge": "Ask me the price of three things!"
}$json$::jsonb,
  true
);

-- Lesson 3: Shopping Requests
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '25586155-90df-404b-8110-d45b396d633a',
  'Shopping Requests',
  'A1',
  'adults',
  6,
  3,
  'Unchanged by the rotation rework -- L3 format R, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '25586155-90df-404b-8110-d45b396d633a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧾",
  "questions": [
    "How do you ask for something politely in a shop?",
    "What do you say when you finish shopping?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I'd like",
      "bg": "#FAECE7"
    },
    {
      "word": "Please",
      "bg": "#E1F5EE"
    },
    {
      "word": "Anything else",
      "bg": "#EEEDFE"
    },
    {
      "word": "That's all",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What would you like?",
    "Anything else?"
  ],
  "student": [
    "I'd like some bread, please.",
    "No, that's all, thank you."
  ],
  "note": "Two answers are given. Choose the more polite one.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I'd like] some bread, [please]."
    },
    {
      "speaker": "B",
      "text": "[Anything else]?"
    },
    {
      "speaker": "A",
      "text": "No, [that's all]."
    }
  ],
  "blanks": [
    "i'd like",
    "anything else",
    "that's all"
  ]
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Good morning! What would you like?"
    },
    {
      "speaker": "B",
      "text": "I'd like some bread and milk, please."
    },
    {
      "speaker": "A",
      "text": "Anything else?"
    },
    {
      "speaker": "B",
      "text": "No, that's all, thank you."
    }
  ],
  "note": "Mini role-play: shop assistant and customer at a bakery."
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Good morning! I'd like some bread and milk, please. Anything else? No, that's all, thank you.",
  "questions": [
    "What does the customer want?",
    "What does the shop assistant ask?",
    "What does the customer say at the end?"
  ]
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like ___, please.",
    "Anything else?",
    "No, that's all, thank you."
  ]
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask politely with 'I'd like'",
    "Answer 'Anything else?'",
    "Close a request with 'that's all'"
  ],
  "challenge": "Order something from me at a pretend shop!"
}$json$::jsonb,
  true
);

-- Lesson 4: Quantities
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  'Quantities',
  'A1',
  'adults',
  6,
  4,
  'Combine requests with quantities. [Combination, L4, format M: independent production, teacher matches back]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍇",
  "questions": [
    "How much fruit do you buy?",
    "Do you buy a bottle of milk?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "A kilo of",
      "bg": "#FAECE7"
    },
    {
      "word": "A bottle of",
      "bg": "#E1F5EE"
    },
    {
      "word": "A few",
      "bg": "#EEEDFE"
    },
    {
      "word": "Enough",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much would you like?",
    "Is that enough?"
  ],
  "student": [
    "I'd like a kilo of apples.",
    "Yes, that's enough."
  ],
  "note": "Put it all together: request + quantity + politeness.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like [a kilo of] apples."
    },
    {
      "speaker": "B",
      "text": "And [a bottle of] milk."
    },
    {
      "speaker": "A",
      "text": "Just [a few] eggs too."
    }
  ],
  "blanks": [
    "a kilo of",
    "a bottle of",
    "a few"
  ]
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me your shopping list, in your own words."
    },
    {
      "speaker": "B",
      "text": "I'd like a kilo of ___, a bottle of ___, and a few ___."
    },
    {
      "speaker": "A",
      "text": "I'll say it back: you'd like a kilo of ___, a bottle of ___, and a few ___."
    },
    {
      "speaker": "B",
      "text": "Yes, that's enough, thank you!"
    }
  ],
  "note": "You speak first, fully in your own words. Teacher matches your list back to check it."
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'd like a kilo of apples and a bottle of milk. I'd like a few eggs too. That's enough, thank you.",
  "questions": [
    "What does the customer want?",
    "How much milk?",
    "Is that enough?"
  ]
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like a kilo of ___.",
    "I'd like a bottle of ___.",
    "That's enough, thank you."
  ]
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use quantities: kilo, bottle, a few",
    "Make a shopping request with quantity",
    "Close a request politely"
  ],
  "challenge": "Order groceries from me with quantities!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  'Unit Review',
  'A1',
  'adults',
  6,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛍️",
  "questions": [
    "Where do you shop?",
    "What would you like to buy?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Shop",
      "bg": "#FAECE7"
    },
    {
      "word": "Price",
      "bg": "#E1F5EE"
    },
    {
      "word": "I'd like",
      "bg": "#EEEDFE"
    },
    {
      "word": "Enough",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you shop?",
    "What would you like?"
  ],
  "student": [
    "I shop at the supermarket.",
    "I'd like some bread, please."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [shop] at the supermarket."
    },
    {
      "speaker": "B",
      "text": "The [price] is cheap."
    },
    {
      "speaker": "A",
      "text": "[I'd like] a kilo of apples."
    }
  ],
  "blanks": [
    "shop",
    "price",
    "i'd like"
  ]
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your shopping."
    },
    {
      "speaker": "B",
      "text": "I shop at the supermarket. The prices are cheap there."
    },
    {
      "speaker": "A",
      "text": "I'd like a kilo of apples and a bottle of milk, please."
    },
    {
      "speaker": "B",
      "text": "Anything else?"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I shop at the supermarket. The prices are cheap there. I'd like a kilo of apples and a bottle of milk.",
  "questions": [
    "Where does the writer shop?",
    "Are the prices cheap or expensive?",
    "What does the writer want to buy?"
  ]
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I shop at ___.",
    "The prices are ___.",
    "I'd like ___."
  ]
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name shops and prices",
    "Ask 'How much?'",
    "Make a polite shopping request"
  ],
  "challenge": "Tell me all about your shopping!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 7: Food and Drinks (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Food and Drinks
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a3a1564b-1039-4ead-aff1-de752284af66',
  'Food and Drinks',
  'A1',
  'adults',
  7,
  1,
  'Name common foods and drinks. [Combination, L1, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "☕",
  "questions": [
    "Do you drink coffee or tea?",
    "Do you eat cheese?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Coffee",
      "bg": "#FAECE7"
    },
    {
      "word": "Tea",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bread",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cheese",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you drink coffee?",
    "Do you eat cheese?"
  ],
  "student": [
    "Yes, I drink coffee.",
    "Yes, I eat cheese."
  ],
  "note": "Read the model text, then find the food words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I drink [coffee] every morning."
    },
    {
      "speaker": "B",
      "text": "I drink [tea] instead."
    },
    {
      "speaker": "A",
      "text": "I eat [bread] and [cheese]."
    }
  ],
  "blanks": [
    "coffee",
    "tea",
    "cheese"
  ]
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I drink coffee every morning."
    },
    {
      "speaker": "B",
      "text": "I drink tea instead."
    },
    {
      "speaker": "A",
      "text": "I eat bread and cheese for breakfast."
    },
    {
      "speaker": "B",
      "text": "Now tell me your own breakfast, using these lines!"
    }
  ],
  "note": "Short role-play: use the exact lines above to talk about breakfast, then use your own."
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I drink coffee every morning. I eat bread and cheese for breakfast.",
  "questions": [
    "What does the writer drink?",
    "When does the writer drink coffee?",
    "What does the writer eat for breakfast?"
  ]
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I drink ___.",
    "I eat ___.",
    "For breakfast, I have ___."
  ]
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 foods or drinks",
    "Say 'I drink/eat ___'",
    "Talk about my breakfast"
  ],
  "challenge": "Tell me what you eat and drink for breakfast!"
}$json$::jsonb,
  true
);

-- Lesson 2: Likes and Dislikes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  'Likes and Dislikes',
  'A1',
  'adults',
  7,
  2,
  'Say food likes and dislikes with a reason. [Combination, L2, format M: read and identify, then match]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😋",
  "questions": [
    "Do you like coffee?",
    "Why do you like it?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I like",
      "bg": "#FAECE7"
    },
    {
      "word": "I don't like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "Delicious",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like coffee?",
    "Why do you like it?"
  ],
  "student": [
    "Yes, I like coffee.",
    "I like it because it's delicious."
  ],
  "note": "Use the word bank: I like, I don't like, because, delicious.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I like] coffee [because] it's [delicious]."
    },
    {
      "speaker": "B",
      "text": "[I don't like] tea."
    },
    {
      "speaker": "A",
      "text": "I like cheese too."
    }
  ],
  "blanks": [
    "i like",
    "because",
    "i don't like"
  ]
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like coffee because it's delicious."
    },
    {
      "speaker": "B",
      "text": "I like coffee too, because it's delicious!"
    },
    {
      "speaker": "A",
      "text": "I don't like tea."
    },
    {
      "speaker": "B",
      "text": "I don't like tea either."
    }
  ],
  "note": "Read the model line, then say a matching sentence about your own taste."
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like coffee because it's delicious. I don't like tea. I like cheese too.",
  "questions": [
    "Why does the writer like coffee?",
    "What doesn't the writer like?",
    "What else does the writer like?"
  ]
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___ because ___.",
    "I don't like ___.",
    "I also like ___."
  ]
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like ___ because ___'",
    "Say 'I don't like ___'",
    "Give a one-clause reason"
  ],
  "challenge": "Tell me a food you like and a food you don't like, with a reason!"
}$json$::jsonb,
  true
);

-- Lesson 3: Meals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  'Meals',
  'A1',
  'adults',
  7,
  3,
  'Unchanged by the rotation rework -- L3 format E, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍽️",
  "questions": [
    "What do you usually eat for lunch?",
    "What do you eat for dinner?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Breakfast",
      "bg": "#FAECE7"
    },
    {
      "word": "Lunch",
      "bg": "#E1F5EE"
    },
    {
      "word": "Dinner",
      "bg": "#EEEDFE"
    },
    {
      "word": "Usually",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you eat for breakfast?",
    "What do you eat for dinner?"
  ],
  "student": [
    "I usually eat eggs for breakfast.",
    "I eat rice for dinner."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "For [breakfast], I eat eggs."
    },
    {
      "speaker": "B",
      "text": "For [lunch], I eat a sandwich."
    },
    {
      "speaker": "A",
      "text": "I [usually] eat rice for dinner."
    }
  ],
  "blanks": [
    "breakfast",
    "lunch",
    "usually"
  ]
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you eat for breakfast?"
    },
    {
      "speaker": "B",
      "text": "I usually eat eggs for breakfast. What do you eat for lunch?"
    },
    {
      "speaker": "A",
      "text": "I eat a sandwich for lunch. I eat rice for dinner."
    },
    {
      "speaker": "B",
      "text": "Your turn to ask me something!"
    }
  ],
  "note": "Student asks first this time. Teacher answers, then asks back."
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "For breakfast, I eat eggs. For lunch, I eat a sandwich. For dinner, I usually eat rice.",
  "questions": [
    "What does the writer eat for breakfast?",
    "What does the writer eat for lunch?",
    "What does the writer usually eat for dinner?"
  ]
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "For breakfast, I eat ___.",
    "For lunch, I eat ___.",
    "For dinner, I usually eat ___."
  ]
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name breakfast, lunch, dinner foods",
    "Say 'For ___, I eat ___'",
    "Ask about mealtimes"
  ],
  "challenge": "Tell me what you eat for breakfast, lunch, and dinner!"
}$json$::jsonb,
  true
);

-- Lesson 4: Ordering in a Café
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  'Ordering in a Café',
  'A1',
  'adults',
  7,
  4,
  'Combine food vocabulary into an ordering conversation. [Combination, L4, format F: open fill-in, minimal scaffolding]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧾",
  "questions": [
    "What would you order at a café?",
    "Do you eat here or take food to go?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Can I have",
      "bg": "#FAECE7"
    },
    {
      "word": "To go",
      "bg": "#E1F5EE"
    },
    {
      "word": "Here or to go",
      "bg": "#EEEDFE"
    },
    {
      "word": "Anything else",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What can I get you?",
    "Here or to go?"
  ],
  "student": [
    "Can I have a coffee, please?",
    "Here, please."
  ],
  "note": "Put it all together: order + place + politeness.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Can I have] a coffee, please?"
    },
    {
      "speaker": "B",
      "text": "[Here or to go]?"
    },
    {
      "speaker": "A",
      "text": "[To go], please."
    }
  ],
  "blanks": [
    "can i have",
    "here or to go",
    "to go"
  ]
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What would you order, and here or to go?"
    },
    {
      "speaker": "B",
      "text": "Can I have a ___, please? ___, please."
    },
    {
      "speaker": "A",
      "text": "Anything else?"
    },
    {
      "speaker": "B",
      "text": "___."
    }
  ],
  "note": "Fill in your own order -- no word bank this time. Say your full order out loud."
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Can I have a coffee and some bread, please? Here or to go? To go, please.",
  "questions": [
    "What did the customer order?",
    "What did the barista ask?",
    "Did the customer want it here or to go?"
  ]
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Can I have ___, please?",
    "Here or to go?",
    "___, please."
  ]
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Order politely with 'Can I have'",
    "Answer 'here or to go'",
    "Complete a café order"
  ],
  "challenge": "Order something from me at a pretend café!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  'Unit Review',
  'A1',
  'adults',
  7,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "☕",
  "questions": [
    "What is your favorite food?",
    "What do you eat for breakfast?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Food",
      "bg": "#FAECE7"
    },
    {
      "word": "Like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Breakfast",
      "bg": "#EEEDFE"
    },
    {
      "word": "Can I have",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite food?",
    "What do you eat for breakfast?"
  ],
  "student": [
    "My favorite food is cheese.",
    "I eat eggs for breakfast."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [food] is coffee and bread."
    },
    {
      "speaker": "B",
      "text": "I [like] cheese because it's tasty."
    },
    {
      "speaker": "A",
      "text": "[Can I have] a coffee, please?"
    }
  ],
  "blanks": [
    "food",
    "like",
    "can i have"
  ]
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your favorite food and drink."
    },
    {
      "speaker": "B",
      "text": "My favorite food is cheese. I like coffee because it's delicious."
    },
    {
      "speaker": "A",
      "text": "I eat eggs for breakfast every day."
    },
    {
      "speaker": "B",
      "text": "Can I have a coffee, please?"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite food is cheese. I like coffee because it's delicious. I eat eggs for breakfast every day.",
  "questions": [
    "What is the favorite food?",
    "Why does the writer like coffee?",
    "What does the writer eat for breakfast?"
  ]
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite food is ___.",
    "I like ___ because ___.",
    "For breakfast, I eat ___."
  ]
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about favorite food and drink",
    "Give a reason",
    "Order food politely"
  ],
  "challenge": "Tell me all about your favorite food and drinks!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 8: Technology and Communication (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Devices
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ccb795bc-f397-408b-91cb-ca9f5ff20f44',
  'Devices',
  'A1',
  'adults',
  8,
  1,
  'Name common devices. [Combination, L1, format E: choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ccb795bc-f397-408b-91cb-ca9f5ff20f44',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'ccb795bc-f397-408b-91cb-ca9f5ff20f44',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "Do you have a phone?",
    "Do you use a laptop for work?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'ccb795bc-f397-408b-91cb-ca9f5ff20f44',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Phone",
      "bg": "#FAECE7"
    },
    {
      "word": "Computer",
      "bg": "#E1F5EE"
    },
    {
      "word": "Laptop",
      "bg": "#EEEDFE"
    },
    {
      "word": "Tablet",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ccb795bc-f397-408b-91cb-ca9f5ff20f44',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you have a phone?",
    "Do you use a laptop?"
  ],
  "student": [
    "Yes, I have a phone.",
    "Yes, I use a laptop for work."
  ],
  "note": "Read the model text, then find the device words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ccb795bc-f397-408b-91cb-ca9f5ff20f44',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [phone]."
    },
    {
      "speaker": "B",
      "text": "I use a [computer] at work."
    },
    {
      "speaker": "A",
      "text": "I have a [laptop] too."
    }
  ],
  "blanks": [
    "phone",
    "computer",
    "laptop"
  ]
}$json$::jsonb,
  true
),
(
  'ccb795bc-f397-408b-91cb-ca9f5ff20f44',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I have a phone' or 'I have phone'?"
    },
    {
      "speaker": "B",
      "text": "'I have a phone' is correct."
    },
    {
      "speaker": "A",
      "text": "Good. What device do you use at work?"
    },
    {
      "speaker": "B",
      "text": "I use a computer at work."
    }
  ],
  "note": "Choose the correct sentence first, then answer about the devices you use."
}$json$::jsonb,
  true
),
(
  'ccb795bc-f397-408b-91cb-ca9f5ff20f44',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a phone. I use a computer at work. I have a laptop at home too.",
  "questions": [
    "What does the writer have?",
    "What does the writer use at work?",
    "What is at home?"
  ]
}$json$::jsonb,
  true
),
(
  'ccb795bc-f397-408b-91cb-ca9f5ff20f44',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___.",
    "I use a ___ at work.",
    "I have a ___ at home."
  ]
}$json$::jsonb,
  true
),
(
  'ccb795bc-f397-408b-91cb-ca9f5ff20f44',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 devices",
    "Say 'I have a ___'",
    "Talk about my devices"
  ],
  "challenge": "Tell me about the devices you use!"
}$json$::jsonb,
  true
);

-- Lesson 2: Communication Habits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '62ed9817-1764-4eb7-8eef-fa507e0a0352',
  'Communication Habits',
  'A1',
  'adults',
  8,
  2,
  'Unchanged by the rotation rework -- L2 format F, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '62ed9817-1764-4eb7-8eef-fa507e0a0352',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '62ed9817-1764-4eb7-8eef-fa507e0a0352',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📞",
  "questions": [
    "Do you call your family every day?",
    "Do you usually text or call?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '62ed9817-1764-4eb7-8eef-fa507e0a0352',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Every day",
      "bg": "#FAECE7"
    },
    {
      "word": "Usually",
      "bg": "#E1F5EE"
    },
    {
      "word": "Call",
      "bg": "#EEEDFE"
    },
    {
      "word": "Text",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '62ed9817-1764-4eb7-8eef-fa507e0a0352',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you call your family every day?",
    "Do you usually text?"
  ],
  "student": [
    "Yes, I call every day.",
    "I usually text."
  ],
  "note": "Use the word bank: every day, usually, call, text.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '62ed9817-1764-4eb7-8eef-fa507e0a0352',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [call] my mother [every day]."
    },
    {
      "speaker": "B",
      "text": "I [usually] text my colleagues."
    },
    {
      "speaker": "A",
      "text": "I call my husband every day too."
    }
  ],
  "blanks": [
    "call",
    "every day",
    "usually"
  ]
}$json$::jsonb,
  true
),
(
  '62ed9817-1764-4eb7-8eef-fa507e0a0352',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you call your family every day?"
    },
    {
      "speaker": "B",
      "text": "Yes, I call my mother every day. I usually text my friends."
    },
    {
      "speaker": "A",
      "text": "I usually text my colleagues too."
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
  '62ed9817-1764-4eb7-8eef-fa507e0a0352',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I call my mother every day. I usually text my friends. I text my colleagues at work too.",
  "questions": [
    "Who does the writer call every day?",
    "Who does the writer usually text?",
    "What about colleagues?"
  ]
}$json$::jsonb,
  true
),
(
  '62ed9817-1764-4eb7-8eef-fa507e0a0352',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I call ___ every day.",
    "I usually text ___.",
    "I text ___ at work."
  ]
}$json$::jsonb,
  true
),
(
  '62ed9817-1764-4eb7-8eef-fa507e0a0352',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'every day' and 'usually'",
    "Say 'call' and 'text'",
    "Talk about my communication habits"
  ],
  "challenge": "Tell me your communication habits!"
}$json$::jsonb,
  true
);

-- Lesson 3: Messages and Calls
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cd41d1ca-e914-4c43-8873-440c308b0a92',
  'Messages and Calls',
  'A1',
  'adults',
  8,
  3,
  'Give a simple reason for communication choices. [Combination, L3, format M: read and identify, then match]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cd41d1ca-e914-4c43-8873-440c308b0a92',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'cd41d1ca-e914-4c43-8873-440c308b0a92',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💬",
  "questions": [
    "Do you prefer calls or messages?",
    "Why do you prefer that?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'cd41d1ca-e914-4c43-8873-440c308b0a92',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Because",
      "bg": "#FAECE7"
    },
    {
      "word": "Easy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Quick",
      "bg": "#EEEDFE"
    },
    {
      "word": "Prefer",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cd41d1ca-e914-4c43-8873-440c308b0a92',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you prefer calls or messages?",
    "Why?"
  ],
  "student": [
    "I prefer messages because they are quick.",
    "I prefer calls because they are easy."
  ],
  "note": "Two answers are given. Choose the more natural one.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cd41d1ca-e914-4c43-8873-440c308b0a92',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [prefer] messages [because] they are [quick]."
    },
    {
      "speaker": "B",
      "text": "I prefer calls because they are [easy]."
    },
    {
      "speaker": "A",
      "text": "Messages are faster for me."
    }
  ],
  "blanks": [
    "prefer",
    "because",
    "easy"
  ]
}$json$::jsonb,
  true
),
(
  'cd41d1ca-e914-4c43-8873-440c308b0a92',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I prefer messages because they are quick."
    },
    {
      "speaker": "B",
      "text": "I prefer messages too, because they are quick!"
    },
    {
      "speaker": "A",
      "text": "I prefer calls because they are easy."
    },
    {
      "speaker": "B",
      "text": "I prefer calls too, because they are easy!"
    }
  ],
  "note": "Read the model line, then say a matching sentence about your own preference."
}$json$::jsonb,
  true
),
(
  'cd41d1ca-e914-4c43-8873-440c308b0a92',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I prefer messages because they are quick. My husband prefers calls because they are easy for him.",
  "questions": [
    "What does the writer prefer?",
    "Why does the writer prefer messages?",
    "What does the husband prefer?"
  ]
}$json$::jsonb,
  true
),
(
  'cd41d1ca-e914-4c43-8873-440c308b0a92',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I prefer ___ because ___.",
    "My ___ prefers ___.",
    "It is easy/quick for me."
  ]
}$json$::jsonb,
  true
),
(
  'cd41d1ca-e914-4c43-8873-440c308b0a92',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give a preference with a reason",
    "Use 'because' with one clause",
    "Talk about communication preferences"
  ],
  "challenge": "Tell me if you prefer calls or messages, and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: Tech Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '857f3c4d-e084-4a93-922a-8aca02e5bb71',
  'Tech Questions',
  'A1',
  'adults',
  8,
  4,
  'Unchanged by the rotation rework -- L4 format R, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '857f3c4d-e084-4a93-922a-8aca02e5bb71',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '857f3c4d-e084-4a93-922a-8aca02e5bb71',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏱️",
  "questions": [
    "How much screen time do you have?",
    "Do you take a break from your phone?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '857f3c4d-e084-4a93-922a-8aca02e5bb71',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Screen time",
      "bg": "#FAECE7"
    },
    {
      "word": "Careful",
      "bg": "#E1F5EE"
    },
    {
      "word": "Break",
      "bg": "#EEEDFE"
    },
    {
      "word": "Balance",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '857f3c4d-e084-4a93-922a-8aca02e5bb71',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much screen time do you have?",
    "Do you take a break?"
  ],
  "student": [
    "I have a lot of screen time.",
    "Yes, I take a break at night."
  ],
  "note": "Put it all together: device + habit + reason + opinion.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '857f3c4d-e084-4a93-922a-8aca02e5bb71',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I use my phone for [screen time] every day."
    },
    {
      "speaker": "B",
      "text": "I try to be [careful] with it."
    },
    {
      "speaker": "A",
      "text": "I take a [break] at night."
    }
  ],
  "blanks": [
    "screen time",
    "careful",
    "break"
  ]
}$json$::jsonb,
  true
),
(
  '857f3c4d-e084-4a93-922a-8aca02e5bb71',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your phone habits."
    },
    {
      "speaker": "B",
      "text": "I check my phone every day because I text my colleagues."
    },
    {
      "speaker": "A",
      "text": "I try to have a balance, so I take a break at night."
    },
    {
      "speaker": "B",
      "text": "That's a good habit!"
    }
  ],
  "note": "Mini talk: tell me all about your phone habits in a few sentences."
}$json$::jsonb,
  true
),
(
  '857f3c4d-e084-4a93-922a-8aca02e5bb71',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I check my phone every day because I text my colleagues. I try to have a balance, so I take a break at night.",
  "questions": [
    "Why does the writer check the phone?",
    "What does the writer try to have?",
    "When does the writer take a break?"
  ]
}$json$::jsonb,
  true
),
(
  '857f3c4d-e084-4a93-922a-8aca02e5bb71',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use my phone because ___.",
    "I try to have a balance by ___.",
    "I take a break at ___."
  ]
}$json$::jsonb,
  true
),
(
  '857f3c4d-e084-4a93-922a-8aca02e5bb71',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say why I use my phone",
    "Talk about screen time balance",
    "Say how I take a break"
  ],
  "challenge": "Tell me all about your phone habits and how you balance them!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '288a77b2-8e75-445b-b639-d7088f53c531',
  'Unit Review',
  'A1',
  'adults',
  8,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '288a77b2-8e75-445b-b639-d7088f53c531',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '288a77b2-8e75-445b-b639-d7088f53c531',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "How often do you use your phone?",
    "Do you prefer calls or messages?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '288a77b2-8e75-445b-b639-d7088f53c531',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Phone",
      "bg": "#FAECE7"
    },
    {
      "word": "Every day",
      "bg": "#E1F5EE"
    },
    {
      "word": "Prefer",
      "bg": "#EEEDFE"
    },
    {
      "word": "Balance",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '288a77b2-8e75-445b-b639-d7088f53c531',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How often do you use your phone?",
    "Do you prefer calls or messages?"
  ],
  "student": [
    "I use it every day.",
    "I prefer messages."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '288a77b2-8e75-445b-b639-d7088f53c531',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I use my [phone] [every day]."
    },
    {
      "speaker": "B",
      "text": "I [prefer] messages."
    },
    {
      "speaker": "A",
      "text": "I try to have a [balance]."
    }
  ],
  "blanks": [
    "phone",
    "every day",
    "prefer"
  ]
}$json$::jsonb,
  true
),
(
  '288a77b2-8e75-445b-b639-d7088f53c531',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your phone habits."
    },
    {
      "speaker": "B",
      "text": "I use my phone every day. I prefer messages because they are quick."
    },
    {
      "speaker": "A",
      "text": "I try to have a balance and take a break at night."
    },
    {
      "speaker": "B",
      "text": "Good balance!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '288a77b2-8e75-445b-b639-d7088f53c531',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I use my phone every day. I prefer messages because they are quick. I try to have a balance and take a break at night.",
  "questions": [
    "How often does the writer use the phone?",
    "What does the writer prefer?",
    "How does the writer balance screen time?"
  ]
}$json$::jsonb,
  true
),
(
  '288a77b2-8e75-445b-b639-d7088f53c531',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I use my phone ___.",
    "I prefer ___ because ___.",
    "I balance it by ___."
  ]
}$json$::jsonb,
  true
),
(
  '288a77b2-8e75-445b-b639-d7088f53c531',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about device habits",
    "Give a preference with a reason",
    "Talk about balance"
  ],
  "challenge": "Tell me all about your tech habits!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 9: Travel and Transport (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Transport
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  'Transport',
  'A1',
  'adults',
  9,
  1,
  'Name types of transport. [Bridge, L1, format F: heaviest scaffold, full word bank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚌",
  "questions": [
    "How do you get to work?",
    "Do you take the bus or the train?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bus",
      "bg": "#FAECE7"
    },
    {
      "word": "Train",
      "bg": "#E1F5EE"
    },
    {
      "word": "Taxi",
      "bg": "#EEEDFE"
    },
    {
      "word": "Car",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you get to work?",
    "Do you take the bus?"
  ],
  "student": [
    "I take the bus.",
    "Yes, I take the bus every day."
  ],
  "note": "Read the model text, then find the transport words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I take the [bus] to work."
    },
    {
      "speaker": "B",
      "text": "I take the [train]."
    },
    {
      "speaker": "A",
      "text": "Sometimes I take a [taxi]."
    }
  ],
  "blanks": [
    "bus",
    "train",
    "taxi"
  ]
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I take the bus to work."
    },
    {
      "speaker": "B",
      "text": "I take the train."
    },
    {
      "speaker": "A",
      "text": "Sometimes I take a taxi."
    },
    {
      "speaker": "B",
      "text": "I drive my car!"
    }
  ],
  "note": "Fill in the blanks with the word bank, then read the whole passage together."
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I take the bus to work every day. Sometimes I take a taxi. My husband drives a car.",
  "questions": [
    "How does the writer get to work?",
    "What does the writer sometimes take?",
    "How does the husband travel?"
  ]
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I take the ___ to work.",
    "Sometimes I take a ___.",
    "My ___ drives a ___."
  ]
}$json$::jsonb,
  true
),
(
  'a5e3d654-223f-425b-83fc-623f37cb9bbd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 types of transport",
    "Say 'I take the ___'",
    "Talk about how I get to work"
  ],
  "challenge": "Tell me how you get to work or school!"
}$json$::jsonb,
  true
);

-- Lesson 2: Tickets and Times
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  'Tickets and Times',
  'A1',
  'adults',
  9,
  2,
  'Ask about tickets and times. [Bridge, L2, format M: read and identify, then match]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎫",
  "questions": [
    "Have you bought a train ticket?",
    "Do you know when your bus leaves?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Ticket",
      "bg": "#FAECE7"
    },
    {
      "word": "One-way",
      "bg": "#E1F5EE"
    },
    {
      "word": "Round trip",
      "bg": "#EEEDFE"
    },
    {
      "word": "Departure",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "I'd like a ticket, please.",
    "One-way or round trip?"
  ],
  "student": [
    "A round trip ticket, please.",
    "The departure is at 9am."
  ],
  "note": "Use the word bank: ticket, one-way, round trip, departure.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like a [ticket] to the city."
    },
    {
      "speaker": "B",
      "text": "[One-way] or [round trip]?"
    },
    {
      "speaker": "A",
      "text": "Round trip, please. What time is the [departure]?"
    }
  ],
  "blanks": [
    "ticket",
    "one-way",
    "departure"
  ]
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like a ticket to the city, please."
    },
    {
      "speaker": "B",
      "text": "One-way or round trip?"
    },
    {
      "speaker": "A",
      "text": "Round trip, please. What time is the departure?"
    },
    {
      "speaker": "B",
      "text": "The departure is at 9am."
    }
  ],
  "note": "Read the model exchange, then say a matching one about your own trip."
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'd like a round trip ticket to the city, please. What time is the departure? The departure is at 9am.",
  "questions": [
    "What kind of ticket did the customer buy?",
    "What did the customer ask about?",
    "What time is the departure?"
  ]
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like a ___ ticket.",
    "What time is the ___?",
    "The departure is at ___."
  ]
}$json$::jsonb,
  true
),
(
  '7f7626d8-57d4-43c3-b1d2-fa80baf1820e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask for a ticket",
    "Say 'one-way' and 'round trip'",
    "Ask about departure times"
  ],
  "challenge": "Buy a ticket from me at a pretend station!"
}$json$::jsonb,
  true
);

-- Lesson 3: At the Station
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '03651ebb-17e7-4d58-b66c-b72720246105',
  'At the Station',
  'A1',
  'adults',
  9,
  3,
  'Unchanged by the rotation rework -- L3 format E, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚉",
  "questions": [
    "Is your train usually on time?",
    "Have you missed a train?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Platform",
      "bg": "#FAECE7"
    },
    {
      "word": "Late",
      "bg": "#E1F5EE"
    },
    {
      "word": "On time",
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
  '03651ebb-17e7-4d58-b66c-b72720246105',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Which platform is it?",
    "Is the train on time?"
  ],
  "student": [
    "It's platform 3.",
    "The train is late today."
  ],
  "note": "One sentence has a mistake. Find it and fix it before you continue.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The train is on [platform] 3."
    },
    {
      "speaker": "B",
      "text": "It is usually [on time], [but] today it is [late]."
    },
    {
      "speaker": "A",
      "text": "I need to hurry!"
    }
  ],
  "blanks": [
    "platform",
    "on time",
    "late"
  ]
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which platform is the train?"
    },
    {
      "speaker": "B",
      "text": "It's platform 3. It's usually on time, but today it's late."
    },
    {
      "speaker": "A",
      "text": "I need to hurry, but I have time for a coffee first."
    },
    {
      "speaker": "B",
      "text": "Good luck!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "The train is on platform 3. It is usually on time, but today it is late. I need to hurry.",
  "questions": [
    "What platform is the train on?",
    "Is the train usually on time?",
    "Why does the writer need to hurry?"
  ]
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The train is on platform ___.",
    "It is usually ___, but today it is ___.",
    "I need to ___."
  ]
}$json$::jsonb,
  true
),
(
  '03651ebb-17e7-4d58-b66c-b72720246105',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'platform' and 'on time'",
    "Combine two ideas with 'but'",
    "Talk about being late or on time"
  ],
  "challenge": "Tell me about a time your bus or train was late!"
}$json$::jsonb,
  true
);

-- Lesson 4: Travel Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  'Travel Plans',
  'A1',
  'adults',
  9,
  4,
  'Unchanged by the rotation rework -- L4 format R, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✈️",
  "questions": [
    "Where would you like to travel?",
    "Do you have travel plans?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I'd like to",
      "bg": "#FAECE7"
    },
    {
      "word": "Visit",
      "bg": "#E1F5EE"
    },
    {
      "word": "Next week",
      "bg": "#EEEDFE"
    },
    {
      "word": "Excited",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where would you like to travel?",
    "When would you like to go?"
  ],
  "student": [
    "I'd like to visit my family.",
    "I'd like to go next week."
  ],
  "note": "Put it all together: transport + ticket + simple plan.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I'd like to] visit my family."
    },
    {
      "speaker": "B",
      "text": "I want to go [next week]."
    },
    {
      "speaker": "A",
      "text": "I am [excited]!"
    }
  ],
  "blanks": [
    "i'd like to",
    "next week",
    "excited"
  ]
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your travel plans."
    },
    {
      "speaker": "B",
      "text": "I'd like to visit my family next week. I'll take the train."
    },
    {
      "speaker": "A",
      "text": "I need a round trip ticket. I am excited!"
    },
    {
      "speaker": "B",
      "text": "Have a great trip!"
    }
  ],
  "note": "Mini role-play: buy a ticket for a trip you're planning."
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'd like to visit my family next week. I'll take the train. I need a round trip ticket. I am excited!",
  "questions": [
    "What does the writer want to do?",
    "How will the writer travel?",
    "How does the writer feel?"
  ]
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like to visit ___.",
    "I'll take the ___.",
    "I am excited because ___."
  ]
}$json$::jsonb,
  true
),
(
  '6c8c5589-a6ae-4c5a-ad60-e631f9d129d5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I'd like to' for a plan",
    "Combine transport and plans",
    "Say how I feel about a trip"
  ],
  "challenge": "Tell me about a trip you'd like to take!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  'Unit Review',
  'A1',
  'adults',
  9,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚌",
  "questions": [
    "How do you usually travel?",
    "Do you have travel plans?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bus",
      "bg": "#FAECE7"
    },
    {
      "word": "Ticket",
      "bg": "#E1F5EE"
    },
    {
      "word": "But",
      "bg": "#EEEDFE"
    },
    {
      "word": "I'd like to",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you travel?",
    "Do you have travel plans?"
  ],
  "student": [
    "I take the bus.",
    "I'd like to visit my family."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I take the [bus] to work."
    },
    {
      "speaker": "B",
      "text": "I need a [ticket] for the train."
    },
    {
      "speaker": "A",
      "text": "[I'd like to] visit my family."
    }
  ],
  "blanks": [
    "bus",
    "ticket",
    "i'd like to"
  ]
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about how you travel and your plans."
    },
    {
      "speaker": "B",
      "text": "I take the bus to work. I'd like to visit my family next week by train."
    },
    {
      "speaker": "A",
      "text": "I need a round trip ticket, but the train is sometimes late."
    },
    {
      "speaker": "B",
      "text": "I hope it's on time for you!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I take the bus to work every day. I'd like to visit my family next week by train. I need a round trip ticket.",
  "questions": [
    "How does the writer get to work?",
    "What are the writer's plans?",
    "What ticket does the writer need?"
  ]
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I take the ___ to work.",
    "I'd like to ___.",
    "I need a ___ ticket."
  ]
}$json$::jsonb,
  true
),
(
  'e61bea22-2ea1-49ab-90c6-635afbd69685',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about transport",
    "Ask for a ticket",
    "Talk about a travel plan"
  ],
  "challenge": "Tell me all about how you travel and any plans you have!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 10: Health and Feelings (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: How Are You?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3116b3e8-5e22-4acf-b93c-053edd83fa7f',
  'How Are You?',
  'A1',
  'adults',
  10,
  1,
  'Ask and answer about feelings. [Bridge, L1, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3116b3e8-5e22-4acf-b93c-053edd83fa7f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '3116b3e8-5e22-4acf-b93c-053edd83fa7f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙂",
  "questions": [
    "How are you today?",
    "Are you tired?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '3116b3e8-5e22-4acf-b93c-053edd83fa7f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Tired",
      "bg": "#FAECE7"
    },
    {
      "word": "Well",
      "bg": "#E1F5EE"
    },
    {
      "word": "Not well",
      "bg": "#EEEDFE"
    },
    {
      "word": "Fine",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '3116b3e8-5e22-4acf-b93c-053edd83fa7f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How are you today?",
    "Are you well?"
  ],
  "student": [
    "I am fine, thank you.",
    "I am a little tired."
  ],
  "note": "Read the model text, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3116b3e8-5e22-4acf-b93c-053edd83fa7f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [tired] today."
    },
    {
      "speaker": "B",
      "text": "I am [well], thank you."
    },
    {
      "speaker": "A",
      "text": "I am [fine]."
    }
  ],
  "blanks": [
    "tired",
    "well",
    "fine"
  ]
}$json$::jsonb,
  true
),
(
  '3116b3e8-5e22-4acf-b93c-053edd83fa7f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How are you today?"
    },
    {
      "speaker": "B",
      "text": "I am fine, thank you. How are you?"
    },
    {
      "speaker": "A",
      "text": "I am a little tired."
    },
    {
      "speaker": "B",
      "text": "Now ask a colleague how they are, using these lines!"
    }
  ],
  "note": "Short role-play: use the exact lines above, then greet a real colleague the same way."
}$json$::jsonb,
  true
),
(
  '3116b3e8-5e22-4acf-b93c-053edd83fa7f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How are you today? I am fine, thank you. I am a little tired.",
  "questions": [
    "How does the person feel?",
    "Is the person very tired or a little tired?",
    "What does the person say first?"
  ]
}$json$::jsonb,
  true
),
(
  '3116b3e8-5e22-4acf-b93c-053edd83fa7f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am ___ today.",
    "I am a little ___.",
    "How are you?"
  ]
}$json$::jsonb,
  true
),
(
  '3116b3e8-5e22-4acf-b93c-053edd83fa7f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I am fine' or 'I am tired'",
    "Ask 'How are you?'",
    "Answer politely"
  ],
  "challenge": "Ask me how I am, and answer how you feel!"
}$json$::jsonb,
  true
);

-- Lesson 2: Body and Health
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0d566900-ce06-454f-a16c-9a5abe9680f5',
  'Body and Health',
  'A1',
  'adults',
  10,
  2,
  'Unchanged by the rotation rework -- L2 format F, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0d566900-ce06-454f-a16c-9a5abe9680f5',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '0d566900-ce06-454f-a16c-9a5abe9680f5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤒",
  "questions": [
    "Do you have a headache sometimes?",
    "Does your stomach hurt?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '0d566900-ce06-454f-a16c-9a5abe9680f5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Head",
      "bg": "#FAECE7"
    },
    {
      "word": "Stomach",
      "bg": "#E1F5EE"
    },
    {
      "word": "Headache",
      "bg": "#EEEDFE"
    },
    {
      "word": "Hurts",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0d566900-ce06-454f-a16c-9a5abe9680f5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you have a headache?",
    "Does your head hurt?"
  ],
  "student": [
    "Yes, I have a headache.",
    "Yes, my head hurts."
  ],
  "note": "Use the word bank: head, stomach, headache, hurts.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0d566900-ce06-454f-a16c-9a5abe9680f5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [headache]."
    },
    {
      "speaker": "B",
      "text": "My [stomach] hurts."
    },
    {
      "speaker": "A",
      "text": "My [head] hurts too."
    }
  ],
  "blanks": [
    "headache",
    "stomach",
    "head"
  ]
}$json$::jsonb,
  true
),
(
  '0d566900-ce06-454f-a16c-9a5abe9680f5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you have a headache?"
    },
    {
      "speaker": "B",
      "text": "Yes, I have a headache. My stomach hurts too."
    },
    {
      "speaker": "A",
      "text": "I am sorry to hear that."
    },
    {
      "speaker": "B",
      "text": "Thank you."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0d566900-ce06-454f-a16c-9a5abe9680f5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a headache today. My stomach hurts too. I feel unwell.",
  "questions": [
    "What does the writer have?",
    "What else hurts?",
    "How does the writer feel overall?"
  ]
}$json$::jsonb,
  true
),
(
  '0d566900-ce06-454f-a16c-9a5abe9680f5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___.",
    "My ___ hurts.",
    "I feel ___."
  ]
}$json$::jsonb,
  true
),
(
  '0d566900-ce06-454f-a16c-9a5abe9680f5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name head and stomach",
    "Say 'I have a headache'",
    "Say 'My ___ hurts'"
  ],
  "challenge": "Tell me if anything hurts today, real or pretend!"
}$json$::jsonb,
  true
);

-- Lesson 3: Simple Advice
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4d8b5c08-18fb-44c0-98b3-aad27365fc20',
  'Simple Advice',
  'A1',
  'adults',
  10,
  3,
  'Give and receive simple advice with ''because''. [Bridge, L3, format M: read and identify, then match]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4d8b5c08-18fb-44c0-98b3-aad27365fc20',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '4d8b5c08-18fb-44c0-98b3-aad27365fc20',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💊",
  "questions": [
    "What do you do when you have a headache?",
    "Do you rest when you feel unwell?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '4d8b5c08-18fb-44c0-98b3-aad27365fc20',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "You should",
      "bg": "#FAECE7"
    },
    {
      "word": "Rest",
      "bg": "#E1F5EE"
    },
    {
      "word": "Drink water",
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
  '4d8b5c08-18fb-44c0-98b3-aad27365fc20',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What should I do?",
    "Why should I rest?"
  ],
  "student": [
    "You should rest.",
    "Because it helps you feel better."
  ],
  "note": "Two answers are given. Choose the more helpful one.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4d8b5c08-18fb-44c0-98b3-aad27365fc20',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[You should] rest."
    },
    {
      "speaker": "B",
      "text": "You should [drink water] too."
    },
    {
      "speaker": "A",
      "text": "[Because] it helps."
    }
  ],
  "blanks": [
    "you should",
    "drink water",
    "because"
  ]
}$json$::jsonb,
  true
),
(
  '4d8b5c08-18fb-44c0-98b3-aad27365fc20',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "You should rest."
    },
    {
      "speaker": "B",
      "text": "You should rest too, if you're tired!"
    },
    {
      "speaker": "A",
      "text": "You should drink water, because it helps."
    },
    {
      "speaker": "B",
      "text": "You should drink water too, it always helps!"
    }
  ],
  "note": "Read the model advice, then say a matching sentence with your own advice."
}$json$::jsonb,
  true
),
(
  '4d8b5c08-18fb-44c0-98b3-aad27365fc20',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a headache. You should rest. You should drink water too, because it helps you feel better.",
  "questions": [
    "What is the problem?",
    "What is the first piece of advice?",
    "Why should the person drink water?"
  ]
}$json$::jsonb,
  true
),
(
  '4d8b5c08-18fb-44c0-98b3-aad27365fc20',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "You should ___.",
    "You should ___ too, because ___.",
    "That's good advice."
  ]
}$json$::jsonb,
  true
),
(
  '4d8b5c08-18fb-44c0-98b3-aad27365fc20',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give advice with 'You should'",
    "Give a one-clause reason with 'because'",
    "Receive advice politely"
  ],
  "challenge": "Give me advice for a headache or a cold!"
}$json$::jsonb,
  true
);

-- Lesson 4: At the Doctor
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '32e2b405-345c-42ff-9f48-429393ac9abe',
  'At the Doctor',
  'A1',
  'adults',
  10,
  4,
  'Combine symptoms and advice into a doctor''s visit conversation. [Bridge, L4, format E: choose-the-better-response + independent production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '32e2b405-345c-42ff-9f48-429393ac9abe',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '32e2b405-345c-42ff-9f48-429393ac9abe',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🩺",
  "questions": [
    "Have you been to the doctor recently?",
    "What do you say when you make an appointment?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '32e2b405-345c-42ff-9f48-429393ac9abe',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What's wrong",
      "bg": "#FAECE7"
    },
    {
      "word": "Since when",
      "bg": "#E1F5EE"
    },
    {
      "word": "Appointment",
      "bg": "#EEEDFE"
    },
    {
      "word": "Feel better",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '32e2b405-345c-42ff-9f48-429393ac9abe',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's wrong?",
    "Since when?"
  ],
  "student": [
    "I have a headache.",
    "Since yesterday."
  ],
  "note": "Put it all together: symptom + advice + closing.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '32e2b405-345c-42ff-9f48-429393ac9abe',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What's wrong]?"
    },
    {
      "speaker": "B",
      "text": "I have a headache. [Since when]? Since yesterday."
    },
    {
      "speaker": "A",
      "text": "I hope you [feel better] soon."
    }
  ],
  "blanks": [
    "what's wrong",
    "since when",
    "feel better"
  ]
}$json$::jsonb,
  true
),
(
  '32e2b405-345c-42ff-9f48-429393ac9abe',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'Since when?' or 'From when?'"
    },
    {
      "speaker": "B",
      "text": "'Since when do you have it' is correct."
    },
    {
      "speaker": "A",
      "text": "Good. Now tell me: what's wrong with you today, and since when?"
    },
    {
      "speaker": "B",
      "text": "I have a headache since this morning."
    }
  ],
  "note": "Choose the correct question first, then answer fully in your own words about how you feel."
}$json$::jsonb,
  true
),
(
  '32e2b405-345c-42ff-9f48-429393ac9abe',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Good morning. What's wrong? I have a headache since yesterday. You should rest and drink water. I hope you feel better soon.",
  "questions": [
    "What is wrong?",
    "Since when?",
    "What is the advice?"
  ]
}$json$::jsonb,
  true
),
(
  '32e2b405-345c-42ff-9f48-429393ac9abe',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___ since ___.",
    "You should ___.",
    "I hope you feel better."
  ]
}$json$::jsonb,
  true
),
(
  '32e2b405-345c-42ff-9f48-429393ac9abe',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a symptom with 'since'",
    "Give simple advice",
    "Close politely"
  ],
  "challenge": "Role-play a doctor visit with me!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f3ddc710-53fc-40ea-b209-670b0a8c125c',
  'Unit Review',
  'A1',
  'adults',
  10,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f3ddc710-53fc-40ea-b209-670b0a8c125c',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'f3ddc710-53fc-40ea-b209-670b0a8c125c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙂",
  "questions": [
    "How are you today?",
    "What advice do you give for a headache?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'f3ddc710-53fc-40ea-b209-670b0a8c125c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Tired",
      "bg": "#FAECE7"
    },
    {
      "word": "Headache",
      "bg": "#E1F5EE"
    },
    {
      "word": "You should",
      "bg": "#EEEDFE"
    },
    {
      "word": "Feel better",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f3ddc710-53fc-40ea-b209-670b0a8c125c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How are you today?",
    "What should I do for a headache?"
  ],
  "student": [
    "I am a little tired.",
    "You should rest."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f3ddc710-53fc-40ea-b209-670b0a8c125c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [tired] today."
    },
    {
      "speaker": "B",
      "text": "I have a [headache]."
    },
    {
      "speaker": "A",
      "text": "[You should] rest."
    }
  ],
  "blanks": [
    "tired",
    "headache",
    "you should"
  ]
}$json$::jsonb,
  true
),
(
  'f3ddc710-53fc-40ea-b209-670b0a8c125c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How are you today?"
    },
    {
      "speaker": "B",
      "text": "I am tired, and I have a headache."
    },
    {
      "speaker": "A",
      "text": "You should rest and drink water, because it helps."
    },
    {
      "speaker": "B",
      "text": "Thank you, I hope I feel better soon."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f3ddc710-53fc-40ea-b209-670b0a8c125c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am tired today, and I have a headache. You should rest and drink water, because it helps. I hope I feel better soon.",
  "questions": [
    "How does the writer feel?",
    "What is the advice?",
    "Why does the advice help?"
  ]
}$json$::jsonb,
  true
),
(
  'f3ddc710-53fc-40ea-b209-670b0a8c125c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am ___ today.",
    "You should ___, because ___.",
    "I hope I feel better."
  ]
}$json$::jsonb,
  true
),
(
  'f3ddc710-53fc-40ea-b209-670b0a8c125c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about how I feel",
    "Describe a symptom",
    "Give and receive advice"
  ],
  "challenge": "Tell me how you feel today and any advice you'd give!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 11: Places in Town (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Places in Town
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6a35788e-8755-476b-968f-27595e1047fd',
  'Places in Town',
  'A1',
  'adults',
  11,
  1,
  'Unchanged by the rotation rework -- L1 format M, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏦",
  "questions": [
    "Is there a bank near your home?",
    "Do you go to the park?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bank",
      "bg": "#FAECE7"
    },
    {
      "word": "Pharmacy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Post office",
      "bg": "#EEEDFE"
    },
    {
      "word": "Park",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is there a bank near here?",
    "Where is the pharmacy?"
  ],
  "student": [
    "Yes, there is a bank near here.",
    "The pharmacy is close by."
  ],
  "note": "Read the model text, then find the place words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "There is a [bank] near my home."
    },
    {
      "speaker": "B",
      "text": "There is a [pharmacy] too."
    },
    {
      "speaker": "A",
      "text": "I go to the [post office] on Mondays."
    }
  ],
  "blanks": [
    "bank",
    "pharmacy",
    "post office"
  ]
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "There is a bank near my home."
    },
    {
      "speaker": "B",
      "text": "There is a pharmacy too."
    },
    {
      "speaker": "A",
      "text": "I go to the post office on Mondays."
    },
    {
      "speaker": "B",
      "text": "I go to the park every day!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "There is a bank near my home. There is a pharmacy too. I go to the post office on Mondays.",
  "questions": [
    "What is near the writer's home?",
    "What else is nearby?",
    "When does the writer go to the post office?"
  ]
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "There is a ___ near my home.",
    "There is a ___ too.",
    "I go to the ___ on ___."
  ]
}$json$::jsonb,
  true
),
(
  '6a35788e-8755-476b-968f-27595e1047fd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 places in town",
    "Say 'There is a ___ near my home'",
    "Talk about places I visit"
  ],
  "challenge": "Tell me about the places near your home!"
}$json$::jsonb,
  true
);

-- Lesson 2: Where Is It?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7f255938-3992-4299-9962-6f7512df1c5c',
  'Where Is It?',
  'A1',
  'adults',
  11,
  2,
  'Ask and answer where places are. [Bridge, L2, format E: choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📍",
  "questions": [
    "Where is the nearest bank?",
    "Is the pharmacy near your home?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Where is",
      "bg": "#FAECE7"
    },
    {
      "word": "Next to",
      "bg": "#E1F5EE"
    },
    {
      "word": "Between",
      "bg": "#EEEDFE"
    },
    {
      "word": "Near",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where is the bank?",
    "Is it near here?"
  ],
  "student": [
    "The bank is next to the pharmacy.",
    "Yes, it is near here."
  ],
  "note": "Use the word bank: where is, next to, between, near.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Where is] the bank?"
    },
    {
      "speaker": "B",
      "text": "It is [next to] the pharmacy."
    },
    {
      "speaker": "A",
      "text": "The park is [near] my home."
    }
  ],
  "blanks": [
    "where is",
    "next to",
    "near"
  ]
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'next to' or 'near to'?"
    },
    {
      "speaker": "B",
      "text": "'It is next to the pharmacy' is correct."
    },
    {
      "speaker": "A",
      "text": "Good. Where is a place you know, near your home?"
    },
    {
      "speaker": "B",
      "text": "The post office is near my home."
    }
  ],
  "note": "Choose the correct sentence first, then answer about places near your own home."
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "The bank is next to the pharmacy. The post office is between the bank and the park.",
  "questions": [
    "Where is the bank?",
    "Where is the post office?",
    "What is the post office between?"
  ]
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is next to the ___.",
    "The ___ is between ___ and ___.",
    "It is near my home."
  ]
}$json$::jsonb,
  true
),
(
  '7f255938-3992-4299-9962-6f7512df1c5c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Where is ___?'",
    "Use 'next to' and 'between'",
    "Describe locations in town"
  ],
  "challenge": "Tell me where a place is near your home!"
}$json$::jsonb,
  true
);

-- Lesson 3: Directions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  'Directions',
  'A1',
  'adults',
  11,
  3,
  'Give simple directions combining actions with ''and''. [Bridge, L3, format R: freer, less-scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧭",
  "questions": [
    "Can you give directions to your home?",
    "Do you turn left or right to get to the shop?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Turn left",
      "bg": "#FAECE7"
    },
    {
      "word": "Turn right",
      "bg": "#E1F5EE"
    },
    {
      "word": "Go straight",
      "bg": "#EEEDFE"
    },
    {
      "word": "And then",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do I get to the bank?",
    "Do I turn left?"
  ],
  "student": [
    "Turn left, and then go straight.",
    "Yes, turn left at the corner."
  ],
  "note": "One sentence has a mistake. Find it and fix it before you continue.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Turn left] at the corner."
    },
    {
      "speaker": "B",
      "text": "[And then] [go straight]."
    },
    {
      "speaker": "A",
      "text": "The bank is on your right."
    }
  ],
  "blanks": [
    "turn left",
    "and then",
    "go straight"
  ]
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do I get to the bank?"
    },
    {
      "speaker": "B",
      "text": "Turn left at the corner, and then go straight."
    },
    {
      "speaker": "A",
      "text": "Thank you!"
    },
    {
      "speaker": "B",
      "text": "Now give me directions to a real place near here!"
    }
  ],
  "note": "Freer role-play: after practicing, give your own directions to a place you actually know."
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Turn left at the corner, and then go straight. The bank is on your right.",
  "questions": [
    "What do you do first?",
    "What do you do next?",
    "Where is the bank?"
  ]
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Turn ___ at the ___.",
    "And then, ___.",
    "The ___ is on your ___."
  ]
}$json$::jsonb,
  true
),
(
  '2b85f218-f7ef-44aa-ad34-bc696a16de25',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give directions with 'turn left/right'",
    "Combine steps with 'and then'",
    "Say where something is (left/right)"
  ],
  "challenge": "Give me directions to a place near your home!"
}$json$::jsonb,
  true
);

-- Lesson 4: Getting Around
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  'Getting Around',
  'A1',
  'adults',
  11,
  4,
  'Combine places, directions, and simple requests. [Bridge, L4, format F: open fill-in, minimal scaffolding]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🗺️",
  "questions": [
    "How do you ask a stranger for directions?",
    "Have you helped a visitor find a place?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Excuse me",
      "bg": "#FAECE7"
    },
    {
      "word": "Could you tell me",
      "bg": "#E1F5EE"
    },
    {
      "word": "Thanks a lot",
      "bg": "#EEEDFE"
    },
    {
      "word": "Visitor",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Excuse me, could you tell me the way to the bank?",
    "Thanks a lot!"
  ],
  "student": [
    "Turn left, and then go straight.",
    "You're welcome!"
  ],
  "note": "Put it all together: polite request + directions + thanks.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Excuse me], [could you tell me] the way to the park?"
    },
    {
      "speaker": "B",
      "text": "Turn right, and then go straight."
    },
    {
      "speaker": "A",
      "text": "[Thanks a lot]!"
    }
  ],
  "blanks": [
    "excuse me",
    "could you tell me",
    "thanks a lot"
  ]
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Ask me for directions to a real place, politely."
    },
    {
      "speaker": "B",
      "text": "Excuse me, could you tell me the way to ___?"
    },
    {
      "speaker": "A",
      "text": "Turn ___, and then ___."
    },
    {
      "speaker": "B",
      "text": "___!"
    }
  ],
  "note": "Fill in your own conversation -- no word bank this time. Say it out loud fully."
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Excuse me, could you tell me the way to the post office? Turn left at the bank, and then go straight. Thanks a lot!",
  "questions": [
    "What does the visitor ask?",
    "What are the directions?",
    "How does the visitor say thank you?"
  ]
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Excuse me, could you tell me the way to ___?",
    "Turn ___, and then ___.",
    "Thanks a lot!"
  ]
}$json$::jsonb,
  true
),
(
  'db8faa3a-93d4-4729-8d58-4263c1dff07e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask for directions politely",
    "Give directions in order",
    "Say thanks and respond"
  ],
  "challenge": "Role-play asking me for directions in your town!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  'Unit Review',
  'A1',
  'adults',
  11,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏙️",
  "questions": [
    "What places are near your home?",
    "Can you give simple directions?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Near",
      "bg": "#FAECE7"
    },
    {
      "word": "Where is",
      "bg": "#E1F5EE"
    },
    {
      "word": "Turn left",
      "bg": "#EEEDFE"
    },
    {
      "word": "Thanks a lot",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is near your home?",
    "Can you give directions to it?"
  ],
  "student": [
    "The bank is near my home.",
    "Turn left, and then go straight."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The bank is [near] my home."
    },
    {
      "speaker": "B",
      "text": "[Where is] the pharmacy?"
    },
    {
      "speaker": "A",
      "text": "[Turn left] and go straight."
    }
  ],
  "blanks": [
    "near",
    "where is",
    "turn left"
  ]
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about places near your home and how to get there."
    },
    {
      "speaker": "B",
      "text": "The bank is near my home. Turn left at the corner, and then go straight."
    },
    {
      "speaker": "A",
      "text": "Where is the pharmacy?"
    },
    {
      "speaker": "B",
      "text": "It's next to the bank. Thanks a lot for asking!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "The bank is near my home. Turn left at the corner, and then go straight. The pharmacy is next to the bank.",
  "questions": [
    "What is near the home?",
    "What are the directions?",
    "Where is the pharmacy?"
  ]
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is near my home.",
    "Turn ___, and then ___.",
    "The ___ is next to the ___."
  ]
}$json$::jsonb,
  true
),
(
  'f325ded0-3a74-4a54-9af6-a8175bdedcf7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name places in town",
    "Give directions in order",
    "Ask and answer politely"
  ],
  "challenge": "Tell me all about the places near your home and how to get there!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 12: Appointments and Future Plans (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Plans and Dates
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  'Plans and Dates',
  'A1',
  'adults',
  12,
  1,
  'Talk about days and simple plans. [Bridge, L1, format E: choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "Are you free on Monday?",
    "Do you have an appointment this week?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Monday",
      "bg": "#FAECE7"
    },
    {
      "word": "Tuesday",
      "bg": "#E1F5EE"
    },
    {
      "word": "Appointment",
      "bg": "#EEEDFE"
    },
    {
      "word": "Free",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are you free on Monday?",
    "Do you have an appointment?"
  ],
  "student": [
    "Yes, I am free on Monday.",
    "Yes, I have an appointment."
  ],
  "note": "Read the model text, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am free on [Monday]."
    },
    {
      "speaker": "B",
      "text": "I have an [appointment] on [Tuesday]."
    },
    {
      "speaker": "A",
      "text": "I am [free] on Wednesday."
    }
  ],
  "blanks": [
    "monday",
    "appointment",
    "free"
  ]
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I am free on Monday' or 'I am free in Monday'?"
    },
    {
      "speaker": "B",
      "text": "'I am free on Monday' is correct."
    },
    {
      "speaker": "A",
      "text": "Good. When are you free this week?"
    },
    {
      "speaker": "B",
      "text": "I am free on Wednesday."
    }
  ],
  "note": "Choose the correct sentence first, then answer about your own week."
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am free on Monday. I have an appointment on Tuesday. I am free on Wednesday too.",
  "questions": [
    "When is the writer free?",
    "When is the appointment?",
    "What other day is the writer free?"
  ]
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am free on ___.",
    "I have an appointment on ___.",
    "I am free on ___ too."
  ]
}$json$::jsonb,
  true
),
(
  'c3b32a1e-61a0-4ae9-916c-f1c87fcc214b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name days of the week",
    "Say 'I am free on ___'",
    "Talk about an appointment"
  ],
  "challenge": "Tell me what day you are free this week!"
}$json$::jsonb,
  true
);

-- Lesson 2: Making Simple Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  'Making Simple Plans',
  'A1',
  'adults',
  12,
  2,
  'Use ''I''d like to'' for simple plans. [Bridge, L2, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤝",
  "questions": [
    "Would you like to meet this week?",
    "What day is convenient for you?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I'd like to",
      "bg": "#FAECE7"
    },
    {
      "word": "Meet",
      "bg": "#E1F5EE"
    },
    {
      "word": "This week",
      "bg": "#EEEDFE"
    },
    {
      "word": "Convenient",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What day is convenient for you?",
    "Would you like to meet this week?"
  ],
  "student": [
    "Monday is convenient for me.",
    "Yes, I'd like to meet this week."
  ],
  "note": "Use the word bank: I'd like to, meet, this week, convenient.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I'd like to] [meet] on Monday."
    },
    {
      "speaker": "B",
      "text": "That is [convenient] for me too."
    },
    {
      "speaker": "A",
      "text": "Let's meet [this week]."
    }
  ],
  "blanks": [
    "i'd like to",
    "meet",
    "convenient"
  ]
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like to meet this week. What day is convenient for you?"
    },
    {
      "speaker": "B",
      "text": "Monday is convenient for me. What time?"
    },
    {
      "speaker": "A",
      "text": "10am, if that's okay."
    },
    {
      "speaker": "B",
      "text": "Now suggest your own meeting time, using these lines!"
    }
  ],
  "note": "Short role-play: use the exact lines above to arrange a meeting, then arrange your own."
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'd like to meet this week. Monday is convenient for me. Let's meet at 10am.",
  "questions": [
    "What does the writer want to do?",
    "What day is convenient?",
    "What time will they meet?"
  ]
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like to meet on ___.",
    "That is convenient for me.",
    "Let's meet at ___."
  ]
}$json$::jsonb,
  true
),
(
  'a288c78a-5b13-4a6e-84a4-f68d1cb3231b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'I'd like to' for a plan",
    "Say a convenient day",
    "Suggest a meeting time"
  ],
  "challenge": "Ask me to meet this week, and suggest a day and time!"
}$json$::jsonb,
  true
);

-- Lesson 3: Invitations and Responses
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  'Invitations and Responses',
  'A1',
  'adults',
  12,
  3,
  'Invite and respond, accepting or declining. [Bridge, L3, format F: guided fill-in]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✉️",
  "questions": [
    "How do you invite someone politely?",
    "How do you politely say no?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Would you like to",
      "bg": "#FAECE7"
    },
    {
      "word": "I'd love to",
      "bg": "#E1F5EE"
    },
    {
      "word": "I'm sorry, I can't",
      "bg": "#EEEDFE"
    },
    {
      "word": "Another time",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Would you like to come to dinner?",
    "Can you make it?"
  ],
  "student": [
    "I'd love to come!",
    "I'm sorry, I can't."
  ],
  "note": "Two answers are given. Choose the more polite one.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Would you like to] come to dinner?"
    },
    {
      "speaker": "B",
      "text": "[I'd love to]! What time?"
    },
    {
      "speaker": "A",
      "text": "[I'm sorry, I can't] make it Friday."
    }
  ],
  "blanks": [
    "would you like to",
    "i'd love to",
    "i'm sorry, i can't"
  ]
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Would you like to come to dinner on Friday?"
    },
    {
      "speaker": "B",
      "text": "I'd love to! What time?"
    },
    {
      "speaker": "A",
      "text": "7pm. Can you make it?"
    },
    {
      "speaker": "B",
      "text": "Fill in your own answer now!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Would you like to come to dinner on Friday? I'd love to! I'm sorry, I can't make Friday. Maybe another time?",
  "questions": [
    "What is the invitation for?",
    "Does the person accept or decline?",
    "What does the person suggest?"
  ]
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Would you like to ___?",
    "I'd love to! / I'm sorry, I can't.",
    "Maybe another time?"
  ]
}$json$::jsonb,
  true
),
(
  '8a1a2211-7c08-47f7-b70a-ca4094038612',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Invite someone politely",
    "Accept an invitation",
    "Decline politely and suggest another time"
  ],
  "challenge": "Invite me to something, and I'll accept or decline!"
}$json$::jsonb,
  true
);

-- Lesson 4: Appointments
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  'Appointments',
  'A1',
  'adults',
  12,
  4,
  'Combine plans, invitations, and appointments into a talk. [Bridge, L4, format M: independent production, teacher matches back]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📞",
  "questions": [
    "Have you booked an appointment recently?",
    "Have you had to reschedule?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Book an appointment",
      "bg": "#FAECE7"
    },
    {
      "word": "Confirm",
      "bg": "#E1F5EE"
    },
    {
      "word": "Reschedule",
      "bg": "#EEEDFE"
    },
    {
      "word": "Look forward to",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "I'd like to book an appointment.",
    "Can you confirm the time?"
  ],
  "student": [
    "Yes, Tuesday at 10am works.",
    "Yes, I confirm."
  ],
  "note": "Put it all together: plan + invitation + appointment.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like to [book an appointment]."
    },
    {
      "speaker": "B",
      "text": "Can you [confirm] Tuesday?"
    },
    {
      "speaker": "A",
      "text": "I [look forward to] it."
    }
  ],
  "blanks": [
    "book an appointment",
    "confirm",
    "look forward to"
  ]
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about an appointment you'd like to book, in your own words."
    },
    {
      "speaker": "B",
      "text": "I'd like to book an appointment for ___. Is ___ convenient?"
    },
    {
      "speaker": "A",
      "text": "I'll say it back: you'd like to book an appointment for ___."
    },
    {
      "speaker": "B",
      "text": "Yes, I confirm. I look forward to it!"
    }
  ],
  "note": "You speak first, fully in your own words. Teacher matches your sentence back to check it."
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'd like to book an appointment for next week. Tuesday at 10am is convenient. I confirm. I look forward to it.",
  "questions": [
    "What does the writer want to book?",
    "What day and time?",
    "How does the writer feel about it?"
  ]
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like to book an appointment for ___.",
    "I confirm ___.",
    "I look forward to ___."
  ]
}$json$::jsonb,
  true
),
(
  'aff5758f-92f1-489f-bac8-caa5bf982bcd',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Book an appointment politely",
    "Confirm a day and time",
    "Say I look forward to something"
  ],
  "challenge": "Book an appointment with me over the phone!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  'Unit Review',
  'A1',
  'adults',
  12,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "When are you free this week?",
    "Do you have any plans?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Free",
      "bg": "#FAECE7"
    },
    {
      "word": "I'd like to",
      "bg": "#E1F5EE"
    },
    {
      "word": "Would you like to",
      "bg": "#EEEDFE"
    },
    {
      "word": "Confirm",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "When are you free?",
    "Do you have plans?"
  ],
  "student": [
    "I am free on Monday.",
    "I'd like to meet this week."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [free] on Monday."
    },
    {
      "speaker": "B",
      "text": "[I'd like to] meet this week."
    },
    {
      "speaker": "A",
      "text": "[Would you like to] come to dinner?"
    }
  ],
  "blanks": [
    "free",
    "i'd like to",
    "would you like to"
  ]
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your plans this week."
    },
    {
      "speaker": "B",
      "text": "I am free on Monday. I'd like to meet for coffee."
    },
    {
      "speaker": "A",
      "text": "Would you like to come to dinner on Friday too?"
    },
    {
      "speaker": "B",
      "text": "I'd love to! I confirm."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am free on Monday. I'd like to meet for coffee. Would you like to come to dinner on Friday? I'd love to! I confirm.",
  "questions": [
    "When is the writer free?",
    "What does the writer want to do?",
    "Does the person accept the dinner invitation?"
  ]
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am free on ___.",
    "I'd like to ___.",
    "Would you like to ___?"
  ]
}$json$::jsonb,
  true
),
(
  'b0a240a2-f46b-483a-82a3-43b9c7a4348b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about being free",
    "Make a simple plan",
    "Invite and respond politely"
  ],
  "challenge": "Tell me your plans for this week, and invite me to something!"
}$json$::jsonb,
  true
);

