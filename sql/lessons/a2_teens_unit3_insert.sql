-- A2 Teens Unit 3: School and Study Skills (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: School Subjects
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6fec1ec1-c141-4519-ae55-b1ca060a2a9d',
  'School Subjects',
  'A2',
  'teens',
  3,
  1,
  'Talk about subjects using frequency adverbs. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6fec1ec1-c141-4519-ae55-b1ca060a2a9d',
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
  '6fec1ec1-c141-4519-ae55-b1ca060a2a9d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📘",
  "questions": [
    "What subject do you usually enjoy?",
    "Do you always do homework?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '6fec1ec1-c141-4519-ae55-b1ca060a2a9d',
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
      "word": "Never",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6fec1ec1-c141-4519-ae55-b1ca060a2a9d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you usually like math?",
    "Do you always do homework?"
  ],
  "student": [
    "I usually like science.",
    "I always do my homework."
  ],
  "note": "Use the frame: I usually/always/sometimes/never ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6fec1ec1-c141-4519-ae55-b1ca060a2a9d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [usually] like science."
    },
    {
      "speaker": "B",
      "text": "I [always] do my homework."
    },
    {
      "speaker": "A",
      "text": "I [never] miss class."
    }
  ],
  "blanks": [
    "usually",
    "always",
    "never"
  ]
}$json$::jsonb,
  true
),
(
  '6fec1ec1-c141-4519-ae55-b1ca060a2a9d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you usually like your subjects?"
    },
    {
      "speaker": "B",
      "text": "I usually like art. I always do my homework."
    },
    {
      "speaker": "A",
      "text": "I sometimes find math hard, but I never give up."
    },
    {
      "speaker": "B",
      "text": "Good attitude!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use: I usually/always/sometimes/never ___."
}$json$::jsonb,
  true
),
(
  '6fec1ec1-c141-4519-ae55-b1ca060a2a9d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I usually like science class. I always do my homework. I sometimes find math hard. I never miss school.",
  "questions": [
    "What subject does the writer usually like?",
    "Does the writer always do homework?",
    "Does the writer ever miss school?"
  ]
}$json$::jsonb,
  true
),
(
  '6fec1ec1-c141-4519-ae55-b1ca060a2a9d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I usually ___.",
    "I always ___.",
    "I never ___."
  ]
}$json$::jsonb,
  true
),
(
  '6fec1ec1-c141-4519-ae55-b1ca060a2a9d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I usually ___'",
    "Name 4 frequency words",
    "Talk about my school habits"
  ],
  "challenge": "Tell me your school habits using usually/always/sometimes/never!"
}$json$::jsonb,
  true
);

-- Lesson 2: My Study Habits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e4f0569a-1dcc-4527-9a81-7b0dde950e5a',
  'My Study Habits',
  'A2',
  'teens',
  3,
  2,
  'Describe study habits using frequency adverbs. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e4f0569a-1dcc-4527-9a81-7b0dde950e5a',
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
  'e4f0569a-1dcc-4527-9a81-7b0dde950e5a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📓",
  "questions": [
    "When do you usually study?",
    "Do you always take a break?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'e4f0569a-1dcc-4527-9a81-7b0dde950e5a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Study",
      "bg": "#FAECE7"
    },
    {
      "word": "Review",
      "bg": "#E1F5EE"
    },
    {
      "word": "Focus",
      "bg": "#EEEDFE"
    },
    {
      "word": "Break",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e4f0569a-1dcc-4527-9a81-7b0dde950e5a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "When do you usually study?",
    "Do you take breaks?"
  ],
  "student": [
    "I usually study after school.",
    "I sometimes take a break."
  ],
  "note": "Use the frame: I usually ___ after ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e4f0569a-1dcc-4527-9a81-7b0dde950e5a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [usually] study after school."
    },
    {
      "speaker": "B",
      "text": "I [sometimes] review my notes."
    },
    {
      "speaker": "A",
      "text": "I [always] take a short break."
    }
  ],
  "blanks": [
    "usually",
    "sometimes",
    "always"
  ]
}$json$::jsonb,
  true
),
(
  'e4f0569a-1dcc-4527-9a81-7b0dde950e5a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "When do you usually study?"
    },
    {
      "speaker": "B",
      "text": "I usually study after dinner. I always take a short break first."
    },
    {
      "speaker": "A",
      "text": "I sometimes review my notes before bed."
    },
    {
      "speaker": "B",
      "text": "That's a good habit."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use frequency adverbs from the vocabulary."
}$json$::jsonb,
  true
),
(
  'e4f0569a-1dcc-4527-9a81-7b0dde950e5a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I usually study after school. I always take a short break first. I sometimes review my notes before bed. I never study very late.",
  "questions": [
    "When does the writer usually study?",
    "Does the writer always take a break?",
    "Does the writer study late?"
  ]
}$json$::jsonb,
  true
),
(
  'e4f0569a-1dcc-4527-9a81-7b0dde950e5a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I usually study ___.",
    "I always ___ before I study.",
    "I sometimes ___."
  ]
}$json$::jsonb,
  true
),
(
  'e4f0569a-1dcc-4527-9a81-7b0dde950e5a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I usually study ___'",
    "Describe my study routine",
    "Use frequency adverbs"
  ],
  "challenge": "Tell me your study habits!"
}$json$::jsonb,
  true
);

-- Lesson 3: Following My Schedule
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8a567f4c-b925-46c0-bca8-3e1413ee6c95',
  'Following My Schedule',
  'A2',
  'teens',
  3,
  3,
  'Talk about routines using frequency adverbs. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8a567f4c-b925-46c0-bca8-3e1413ee6c95',
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
  '8a567f4c-b925-46c0-bca8-3e1413ee6c95',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🕐",
  "questions": [
    "Do you always follow your schedule?",
    "Are you usually on time?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '8a567f4c-b925-46c0-bca8-3e1413ee6c95',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Schedule",
      "bg": "#FAECE7"
    },
    {
      "word": "On time",
      "bg": "#E1F5EE"
    },
    {
      "word": "Late",
      "bg": "#EEEDFE"
    },
    {
      "word": "Routine",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8a567f4c-b925-46c0-bca8-3e1413ee6c95',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are you usually on time?",
    "Do you follow a routine?"
  ],
  "student": [
    "I am usually on time.",
    "I always follow my routine."
  ],
  "note": "Use the frame: I am usually/always ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8a567f4c-b925-46c0-bca8-3e1413ee6c95',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [usually] on time for class."
    },
    {
      "speaker": "B",
      "text": "I [always] follow my schedule."
    },
    {
      "speaker": "A",
      "text": "I am [sometimes] late."
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
  '8a567f4c-b925-46c0-bca8-3e1413ee6c95',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Are you usually on time for class?"
    },
    {
      "speaker": "B",
      "text": "Yes, I am usually on time. I always follow my schedule."
    },
    {
      "speaker": "A",
      "text": "I am sometimes late, but never on test days."
    },
    {
      "speaker": "B",
      "text": "Good planning!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use frequency adverbs."
}$json$::jsonb,
  true
),
(
  '8a567f4c-b925-46c0-bca8-3e1413ee6c95',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I am usually on time for class. I always follow my schedule. I am sometimes late on Mondays. I am never late on test days.",
  "questions": [
    "Is the writer usually on time?",
    "When is the writer sometimes late?",
    "Is the writer ever late on test days?"
  ]
}$json$::jsonb,
  true
),
(
  '8a567f4c-b925-46c0-bca8-3e1413ee6c95',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am usually ___.",
    "I always ___.",
    "I am sometimes ___."
  ]
}$json$::jsonb,
  true
),
(
  '8a567f4c-b925-46c0-bca8-3e1413ee6c95',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my schedule habits",
    "Use 'usually' and 'always'",
    "Talk about being on time"
  ],
  "challenge": "Tell me about your daily schedule and routine!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Study Plan
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f2ce835d-f72d-4025-8c9a-282661787dc4',
  'A Study Plan',
  'A2',
  'teens',
  3,
  4,
  'Write a short study plan using frequency adverbs. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f2ce835d-f72d-4025-8c9a-282661787dc4',
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
  'f2ce835d-f72d-4025-8c9a-282661787dc4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📋",
  "questions": [
    "Do you have a study plan?",
    "What is your study goal?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'f2ce835d-f72d-4025-8c9a-282661787dc4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Plan",
      "bg": "#FAECE7"
    },
    {
      "word": "Goal",
      "bg": "#E1F5EE"
    },
    {
      "word": "Every day",
      "bg": "#EEEDFE"
    },
    {
      "word": "Improve",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f2ce835d-f72d-4025-8c9a-282661787dc4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your study plan?",
    "What is your goal?"
  ],
  "student": [
    "I usually study every day.",
    "My goal is to improve in math."
  ],
  "note": "Use the frame: My study plan: I usually ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f2ce835d-f72d-4025-8c9a-282661787dc4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My study [plan]: I usually study after school."
    },
    {
      "speaker": "B",
      "text": "My [goal] is to improve in English."
    },
    {
      "speaker": "A",
      "text": "I study [every day]."
    }
  ],
  "blanks": [
    "plan",
    "goal",
    "every day"
  ]
}$json$::jsonb,
  true
),
(
  'f2ce835d-f72d-4025-8c9a-282661787dc4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your study plan?"
    },
    {
      "speaker": "B",
      "text": "I usually study every day after dinner. My goal is to improve in science."
    },
    {
      "speaker": "A",
      "text": "I always review my notes before bed."
    },
    {
      "speaker": "B",
      "text": "That's a solid plan!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use the frames from Lessons 1-3."
}$json$::jsonb,
  true
),
(
  'f2ce835d-f72d-4025-8c9a-282661787dc4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My study plan: I usually study every day after school. I always review my notes before bed. My goal is to improve in math.",
  "questions": [
    "When does the writer usually study?",
    "What does the writer always do before bed?",
    "What is the writer's goal?"
  ]
}$json$::jsonb,
  true
),
(
  'f2ce835d-f72d-4025-8c9a-282661787dc4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My study plan: I usually ___.",
    "I always ___.",
    "My goal is to ___."
  ]
}$json$::jsonb,
  true
),
(
  'f2ce835d-f72d-4025-8c9a-282661787dc4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short study plan",
    "Use frequency adverbs",
    "State a study goal"
  ],
  "challenge": "Read me your study plan!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '77f1dc10-144e-46ea-b557-465bb7273f62',
  'Unit Review',
  'A2',
  'teens',
  3,
  5,
  'Review school habits and frequency adverbs. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '77f1dc10-144e-46ea-b557-465bb7273f62',
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
  '77f1dc10-144e-46ea-b557-465bb7273f62',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎓",
  "questions": [
    "What subject do you usually like?",
    "What is your study goal?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '77f1dc10-144e-46ea-b557-465bb7273f62',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Subject",
      "bg": "#FAECE7"
    },
    {
      "word": "Usually",
      "bg": "#E1F5EE"
    },
    {
      "word": "Study",
      "bg": "#EEEDFE"
    },
    {
      "word": "Goal",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '77f1dc10-144e-46ea-b557-465bb7273f62',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you usually study?",
    "What is your goal?"
  ],
  "student": [
    "I usually study math.",
    "My goal is to improve."
  ],
  "note": "Use the frames you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '77f1dc10-144e-46ea-b557-465bb7273f62',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [subject] is science."
    },
    {
      "speaker": "B",
      "text": "I [usually] study after school."
    },
    {
      "speaker": "A",
      "text": "My [goal] is to improve."
    }
  ],
  "blanks": [
    "subject",
    "usually",
    "goal"
  ]
}$json$::jsonb,
  true
),
(
  '77f1dc10-144e-46ea-b557-465bb7273f62',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your school habits."
    },
    {
      "speaker": "B",
      "text": "My favorite subject is science. I usually study after school."
    },
    {
      "speaker": "A",
      "text": "I always review my notes. My goal is to improve in English."
    },
    {
      "speaker": "B",
      "text": "Great study habits!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '77f1dc10-144e-46ea-b557-465bb7273f62',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite subject is science. I usually study after school and I always review my notes before bed. I am sometimes late for class, but never on test days. My goal is to improve in math.",
  "questions": [
    "What is the writer's favorite subject?",
    "When does the writer usually study?",
    "What is the writer's goal?"
  ]
}$json$::jsonb,
  true
),
(
  '77f1dc10-144e-46ea-b557-465bb7273f62',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite subject is ___.",
    "I usually ___.",
    "My goal is to ___."
  ]
}$json$::jsonb,
  true
),
(
  '77f1dc10-144e-46ea-b557-465bb7273f62',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about school subjects",
    "Describe study habits",
    "Use frequency adverbs",
    "State a goal"
  ],
  "challenge": "Tell me all about your school life and study habits!"
}$json$::jsonb,
  true
);
