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
