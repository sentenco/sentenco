-- A2 Teens Unit 4: Free Time and Hobbies (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: What I Do for Fun
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '36939875-99f3-4694-aa6f-222c94818e7c',
  'What I Do for Fun',
  'A2',
  'teens',
  4,
  1,
  'Describe hobbies using simple present. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '36939875-99f3-4694-aa6f-222c94818e7c',
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
  '36939875-99f3-4694-aa6f-222c94818e7c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎮",
  "questions": [
    "What do you do for fun?",
    "Do you like gaming?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '36939875-99f3-4694-aa6f-222c94818e7c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Gaming",
      "bg": "#FAECE7"
    },
    {
      "word": "Photography",
      "bg": "#E1F5EE"
    },
    {
      "word": "Skateboarding",
      "bg": "#EEEDFE"
    },
    {
      "word": "Drawing",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '36939875-99f3-4694-aa6f-222c94818e7c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do for fun?",
    "Do you enjoy it?"
  ],
  "student": [
    "I like gaming.",
    "Yes, I really enjoy it."
  ],
  "note": "Use the frame: I like ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '36939875-99f3-4694-aa6f-222c94818e7c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like [gaming] after school."
    },
    {
      "speaker": "B",
      "text": "I enjoy [photography]."
    },
    {
      "speaker": "A",
      "text": "I love [skateboarding]."
    }
  ],
  "blanks": [
    "gaming",
    "photography",
    "skateboarding"
  ]
}$json$::jsonb,
  true
),
(
  '36939875-99f3-4694-aa6f-222c94818e7c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do for fun?"
    },
    {
      "speaker": "B",
      "text": "I love photography. I take pictures of nature."
    },
    {
      "speaker": "A",
      "text": "I like gaming and drawing."
    },
    {
      "speaker": "B",
      "text": "That sounds fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use: I like ___."
}$json$::jsonb,
  true
),
(
  '36939875-99f3-4694-aa6f-222c94818e7c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Sam loves gaming with his friends. Mia enjoys photography. Leo likes skateboarding. Ana likes drawing.",
  "questions": [
    "What does Sam love?",
    "What does Mia enjoy?",
    "What does Ana like?"
  ]
}$json$::jsonb,
  true
),
(
  '36939875-99f3-4694-aa6f-222c94818e7c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___ in my free time.",
    "I enjoy it because ___.",
    "My favorite hobby is ___."
  ]
}$json$::jsonb,
  true
),
(
  '36939875-99f3-4694-aa6f-222c94818e7c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name free time activities",
    "Say 'I like ___'",
    "Talk about my favorite hobby"
  ],
  "challenge": "Tell me about your favorite hobby!"
}$json$::jsonb,
  true
);

-- Lesson 2: My Hobby Last Week
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '95b6b6e6-2000-46f7-aaec-18a94ef261b4',
  'My Hobby Last Week',
  'A2',
  'teens',
  4,
  2,
  'Describe a past hobby activity using simple past (regular verbs only). [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '95b6b6e6-2000-46f7-aaec-18a94ef261b4',
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
  '95b6b6e6-2000-46f7-aaec-18a94ef261b4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "What did you do last week?",
    "Did you play a game?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '95b6b6e6-2000-46f7-aaec-18a94ef261b4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Played",
      "bg": "#FAECE7"
    },
    {
      "word": "Watched",
      "bg": "#E1F5EE"
    },
    {
      "word": "Visited",
      "bg": "#EEEDFE"
    },
    {
      "word": "Walked",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '95b6b6e6-2000-46f7-aaec-18a94ef261b4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you do last week?",
    "Did you play games?"
  ],
  "student": [
    "I played games.",
    "Yes, I watched a movie too."
  ],
  "note": "Use the frame: Last week, I ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '95b6b6e6-2000-46f7-aaec-18a94ef261b4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Last week, I [played] games."
    },
    {
      "speaker": "B",
      "text": "I [watched] a movie."
    },
    {
      "speaker": "A",
      "text": "I [walked] in the park."
    }
  ],
  "blanks": [
    "played",
    "watched",
    "walked"
  ]
}$json$::jsonb,
  true
),
(
  '95b6b6e6-2000-46f7-aaec-18a94ef261b4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What did you do last week?"
    },
    {
      "speaker": "B",
      "text": "I played games and watched a movie."
    },
    {
      "speaker": "A",
      "text": "I walked in the park with my dog."
    },
    {
      "speaker": "B",
      "text": "That sounds relaxing!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use: Last week, I ___."
}$json$::jsonb,
  true
),
(
  '95b6b6e6-2000-46f7-aaec-18a94ef261b4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last week, Leo played games with his friends. He watched a movie too. He walked in the park on Sunday.",
  "questions": [
    "What did Leo play?",
    "What did Leo watch?",
    "Where did Leo walk?"
  ]
}$json$::jsonb,
  true
),
(
  '95b6b6e6-2000-46f7-aaec-18a94ef261b4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Last week, I played ___.",
    "I watched ___.",
    "I walked in ___."
  ]
}$json$::jsonb,
  true
),
(
  '95b6b6e6-2000-46f7-aaec-18a94ef261b4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: played, watched, visited, walked",
    "Say what I did last week",
    "Use the frame 'Last week, I ___'"
  ],
  "challenge": "Tell me three things you did last week!"
}$json$::jsonb,
  true
);

-- Lesson 3: How My Hobby Started
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '355d3e92-e76b-426c-b56d-2e5052c110d3',
  'How My Hobby Started',
  'A2',
  'teens',
  4,
  3,
  'Describe how a hobby started using simple past (regular verbs only). [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '355d3e92-e76b-426c-b56d-2e5052c110d3',
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
  '355d3e92-e76b-426c-b56d-2e5052c110d3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌱",
  "questions": [
    "How did your hobby start?",
    "Did someone teach you?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '355d3e92-e76b-426c-b56d-2e5052c110d3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Started",
      "bg": "#FAECE7"
    },
    {
      "word": "Learned",
      "bg": "#E1F5EE"
    },
    {
      "word": "Tried",
      "bg": "#EEEDFE"
    },
    {
      "word": "Practiced",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '355d3e92-e76b-426c-b56d-2e5052c110d3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How did your hobby start?",
    "Who taught you?"
  ],
  "student": [
    "I started two years ago.",
    "My cousin taught me."
  ],
  "note": "Use the frame: I started ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '355d3e92-e76b-426c-b56d-2e5052c110d3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [started] photography last year."
    },
    {
      "speaker": "B",
      "text": "I [learned] from my dad."
    },
    {
      "speaker": "A",
      "text": "I [practiced] every weekend."
    }
  ],
  "blanks": [
    "started",
    "learned",
    "practiced"
  ]
}$json$::jsonb,
  true
),
(
  '355d3e92-e76b-426c-b56d-2e5052c110d3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How did your hobby start?"
    },
    {
      "speaker": "B",
      "text": "I started skateboarding two years ago. I learned from my cousin."
    },
    {
      "speaker": "A",
      "text": "I tried photography and practiced every weekend."
    },
    {
      "speaker": "B",
      "text": "That's dedication!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use: I started ___."
}$json$::jsonb,
  true
),
(
  '355d3e92-e76b-426c-b56d-2e5052c110d3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I started photography two years ago. I learned from my dad's old camera. I tried it many times. I practiced every weekend.",
  "questions": [
    "When did the writer start photography?",
    "Who did the writer learn from?",
    "When did the writer practice?"
  ]
}$json$::jsonb,
  true
),
(
  '355d3e92-e76b-426c-b56d-2e5052c110d3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I started ___.",
    "I learned from ___.",
    "I practiced ___."
  ]
}$json$::jsonb,
  true
),
(
  '355d3e92-e76b-426c-b56d-2e5052c110d3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: started, learned, tried, practiced",
    "Say how my hobby began",
    "Use the frame 'I started ___'"
  ],
  "challenge": "Tell me how you started your favorite hobby!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Hobby Diary Entry
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e9863689-bb9a-4a62-a83d-4df11d7123f3',
  'A Hobby Diary Entry',
  'A2',
  'teens',
  4,
  4,
  'Write a short past-tense hobby diary entry. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e9863689-bb9a-4a62-a83d-4df11d7123f3',
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
  'e9863689-bb9a-4a62-a83d-4df11d7123f3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📔",
  "questions": [
    "Do you write a diary?",
    "What did you do yesterday?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'e9863689-bb9a-4a62-a83d-4df11d7123f3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Diary",
      "bg": "#FAECE7"
    },
    {
      "word": "Yesterday",
      "bg": "#E1F5EE"
    },
    {
      "word": "Enjoyed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Finished",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e9863689-bb9a-4a62-a83d-4df11d7123f3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you do yesterday?",
    "Did you enjoy it?"
  ],
  "student": [
    "Yesterday, I played games.",
    "Yes, I really enjoyed it."
  ],
  "note": "Use the frame: Yesterday, I ___. I enjoyed it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e9863689-bb9a-4a62-a83d-4df11d7123f3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Yesterday], I played games."
    },
    {
      "speaker": "B",
      "text": "I [enjoyed] it a lot."
    },
    {
      "speaker": "A",
      "text": "I [finished] my drawing."
    }
  ],
  "blanks": [
    "yesterday",
    "enjoyed",
    "finished"
  ]
}$json$::jsonb,
  true
),
(
  'e9863689-bb9a-4a62-a83d-4df11d7123f3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What did you do yesterday?"
    },
    {
      "speaker": "B",
      "text": "Yesterday, I played games and watched a movie. I enjoyed it."
    },
    {
      "speaker": "A",
      "text": "I finished my drawing yesterday."
    },
    {
      "speaker": "B",
      "text": "Nice work!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use the frames from Lessons 1-3."
}$json$::jsonb,
  true
),
(
  'e9863689-bb9a-4a62-a83d-4df11d7123f3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Dear diary, yesterday I played games with my friends. I watched a movie too. I enjoyed it a lot. I finished my drawing at night.",
  "questions": [
    "What did the writer play?",
    "What did the writer watch?",
    "What did the writer finish?"
  ]
}$json$::jsonb,
  true
),
(
  'e9863689-bb9a-4a62-a83d-4df11d7123f3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Yesterday, I ___.",
    "I enjoyed ___.",
    "I finished ___."
  ]
}$json$::jsonb,
  true
),
(
  'e9863689-bb9a-4a62-a83d-4df11d7123f3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short diary entry",
    "Use simple past verbs",
    "Use the frame 'Yesterday, I ___'"
  ],
  "challenge": "Read me your hobby diary entry!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '59ac74d7-9c60-40f7-bc1f-bffc6bc8e9dc',
  'Unit Review',
  'A2',
  'teens',
  4,
  5,
  'Review hobbies and simple past. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '59ac74d7-9c60-40f7-bc1f-bffc6bc8e9dc',
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
  '59ac74d7-9c60-40f7-bc1f-bffc6bc8e9dc',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What is your favorite hobby?",
    "What did you do last week?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '59ac74d7-9c60-40f7-bc1f-bffc6bc8e9dc',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hobby",
      "bg": "#FAECE7"
    },
    {
      "word": "Started",
      "bg": "#E1F5EE"
    },
    {
      "word": "Last week",
      "bg": "#EEEDFE"
    },
    {
      "word": "Enjoyed",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '59ac74d7-9c60-40f7-bc1f-bffc6bc8e9dc',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your hobby?",
    "What did you do last week?"
  ],
  "student": [
    "My hobby is photography.",
    "Last week, I played games."
  ],
  "note": "Use the frames you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '59ac74d7-9c60-40f7-bc1f-bffc6bc8e9dc',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [hobby] is skateboarding."
    },
    {
      "speaker": "B",
      "text": "I [started] it last year."
    },
    {
      "speaker": "A",
      "text": "[Last week], I practiced a lot."
    }
  ],
  "blanks": [
    "hobby",
    "started",
    "last week"
  ]
}$json$::jsonb,
  true
),
(
  '59ac74d7-9c60-40f7-bc1f-bffc6bc8e9dc',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your hobby and last week."
    },
    {
      "speaker": "B",
      "text": "My hobby is photography. I started it two years ago."
    },
    {
      "speaker": "A",
      "text": "Last week, I took many pictures. I enjoyed it."
    },
    {
      "speaker": "B",
      "text": "That's a great hobby!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '59ac74d7-9c60-40f7-bc1f-bffc6bc8e9dc',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My hobby is photography. I started it two years ago with my dad's camera. Last week, I took many pictures at the park. I enjoyed it a lot.",
  "questions": [
    "What is the writer's hobby?",
    "When did it start?",
    "What did the writer do last week?"
  ]
}$json$::jsonb,
  true
),
(
  '59ac74d7-9c60-40f7-bc1f-bffc6bc8e9dc',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My hobby is ___.",
    "I started it ___.",
    "Last week, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '59ac74d7-9c60-40f7-bc1f-bffc6bc8e9dc',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about my hobby",
    "Tell how it started",
    "Say what I did last week"
  ],
  "challenge": "Tell me all about your hobby, from start to now!"
}$json$::jsonb,
  true
);
