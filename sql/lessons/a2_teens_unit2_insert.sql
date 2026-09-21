-- A2 Teens Unit 2: Friends and Social Life (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Good Friends
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '379dac47-44e5-4d7a-96b1-d8f3e20aa419',
  'Good Friends',
  'A2',
  'teens',
  2,
  1,
  'Describe friend qualities using simple present. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '379dac47-44e5-4d7a-96b1-d8f3e20aa419',
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
  '379dac47-44e5-4d7a-96b1-d8f3e20aa419',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤝",
  "questions": [
    "Is your friend trustworthy?",
    "What makes a good friend?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '379dac47-44e5-4d7a-96b1-d8f3e20aa419',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Trustworthy",
      "bg": "#FAECE7"
    },
    {
      "word": "Supportive",
      "bg": "#E1F5EE"
    },
    {
      "word": "Loyal",
      "bg": "#EEEDFE"
    },
    {
      "word": "Kind",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '379dac47-44e5-4d7a-96b1-d8f3e20aa419',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What makes a good friend?",
    "Is your friend loyal?"
  ],
  "student": [
    "A good friend is trustworthy.",
    "Yes, my friend is loyal."
  ],
  "note": "Use the frame: A good friend is ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '379dac47-44e5-4d7a-96b1-d8f3e20aa419',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "A good friend is [trustworthy]."
    },
    {
      "speaker": "B",
      "text": "My friend is [supportive]."
    },
    {
      "speaker": "A",
      "text": "She is [loyal]."
    }
  ],
  "blanks": [
    "trustworthy",
    "supportive",
    "loyal"
  ]
}$json$::jsonb,
  true
),
(
  '379dac47-44e5-4d7a-96b1-d8f3e20aa419',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What makes a good friend?"
    },
    {
      "speaker": "B",
      "text": "A good friend is trustworthy and kind."
    },
    {
      "speaker": "A",
      "text": "My best friend is loyal and supportive."
    },
    {
      "speaker": "B",
      "text": "That's a real friend!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use: A good friend is ___."
}$json$::jsonb,
  true
),
(
  '379dac47-44e5-4d7a-96b1-d8f3e20aa419',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "A good friend is trustworthy. A good friend is kind. My best friend is loyal. She never tells my secrets.",
  "questions": [
    "What is the first quality mentioned?",
    "Is the friend loyal?",
    "What does the friend never do?"
  ]
}$json$::jsonb,
  true
),
(
  '379dac47-44e5-4d7a-96b1-d8f3e20aa419',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "A good friend is ___.",
    "My best friend is ___.",
    "My friend never ___."
  ]
}$json$::jsonb,
  true
),
(
  '379dac47-44e5-4d7a-96b1-d8f3e20aa419',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'A good friend is ___'",
    "Name 4 friend qualities",
    "Describe my best friend"
  ],
  "challenge": "Describe your best friend using: A good friend is ___."
}$json$::jsonb,
  true
);

-- Lesson 2: What We Can Do Together
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b16f84fe-6beb-4d21-8e38-fd95c01b6672',
  'What We Can Do Together',
  'A2',
  'teens',
  2,
  2,
  'Describe shared activities using can. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b16f84fe-6beb-4d21-8e38-fd95c01b6672',
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
  'b16f84fe-6beb-4d21-8e38-fd95c01b6672',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎮",
  "questions": [
    "What can you do with a friend?",
    "Can you help each other?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'b16f84fe-6beb-4d21-8e38-fd95c01b6672',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Can play",
      "bg": "#FAECE7"
    },
    {
      "word": "Can talk",
      "bg": "#E1F5EE"
    },
    {
      "word": "Can help",
      "bg": "#EEEDFE"
    },
    {
      "word": "Can share",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b16f84fe-6beb-4d21-8e38-fd95c01b6672',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What can you do together?",
    "Can you help each other?"
  ],
  "student": [
    "We can play games together.",
    "Yes, we can help each other."
  ],
  "note": "Use the frame: We can ___ together.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b16f84fe-6beb-4d21-8e38-fd95c01b6672',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "We [can play] games together."
    },
    {
      "speaker": "B",
      "text": "We [can talk] every day."
    },
    {
      "speaker": "A",
      "text": "We [can help] each other."
    }
  ],
  "blanks": [
    "can play",
    "can talk",
    "can help"
  ]
}$json$::jsonb,
  true
),
(
  'b16f84fe-6beb-4d21-8e38-fd95c01b6672',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What can you and your friend do together?"
    },
    {
      "speaker": "B",
      "text": "We can play games and talk every day."
    },
    {
      "speaker": "A",
      "text": "We can help each other with homework."
    },
    {
      "speaker": "B",
      "text": "That's great teamwork!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use: We can ___ together."
}$json$::jsonb,
  true
),
(
  'b16f84fe-6beb-4d21-8e38-fd95c01b6672',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My friend and I can play games together. We can talk every day. We can help each other with homework.",
  "questions": [
    "What can they do together?",
    "How often can they talk?",
    "What can they help with?"
  ]
}$json$::jsonb,
  true
),
(
  'b16f84fe-6beb-4d21-8e38-fd95c01b6672',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My friend and I can ___.",
    "We can ___ every day.",
    "We can help each other with ___."
  ]
}$json$::jsonb,
  true
),
(
  'b16f84fe-6beb-4d21-8e38-fd95c01b6672',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'We can ___ together'",
    "Name 4 shared activities",
    "Describe what I can do with a friend"
  ],
  "challenge": "Tell me what you and your friend can do together!"
}$json$::jsonb,
  true
);

-- Lesson 3: Making Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5a59987a-c1b3-4f87-a943-dbc3661ad021',
  'Making Plans',
  'A2',
  'teens',
  2,
  3,
  'Ask and answer about plans using can. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5a59987a-c1b3-4f87-a943-dbc3661ad021',
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
  '5a59987a-c1b3-4f87-a943-dbc3661ad021',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📲",
  "questions": [
    "Are you free this weekend?",
    "Can you meet up?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '5a59987a-c1b3-4f87-a943-dbc3661ad021',
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
      "word": "Meet up",
      "bg": "#E1F5EE"
    },
    {
      "word": "Can you",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sure",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5a59987a-c1b3-4f87-a943-dbc3661ad021',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Can you meet up on Saturday?",
    "Are you free?"
  ],
  "student": [
    "Yes, I can meet up.",
    "I am free on Saturday."
  ],
  "note": "Use the frame: Can you ___? Yes, I can ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5a59987a-c1b3-4f87-a943-dbc3661ad021',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Can you] meet up on Saturday?"
    },
    {
      "speaker": "B",
      "text": "Yes, I am [free]."
    },
    {
      "speaker": "A",
      "text": "[Sure], let's meet at the mall."
    }
  ],
  "blanks": [
    "can you",
    "free",
    "sure"
  ]
}$json$::jsonb,
  true
),
(
  '5a59987a-c1b3-4f87-a943-dbc3661ad021',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Can you meet up this weekend?"
    },
    {
      "speaker": "B",
      "text": "Yes, I am free on Saturday."
    },
    {
      "speaker": "A",
      "text": "Sure, let's meet at the mall at 2pm."
    },
    {
      "speaker": "B",
      "text": "Sounds good!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use: Can you ___? Yes, I can ___."
}$json$::jsonb,
  true
),
(
  '5a59987a-c1b3-4f87-a943-dbc3661ad021',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Message: Can you meet up on Saturday? Yes, I am free! Sure, let's meet at the mall at 2pm. See you then!",
  "questions": [
    "Is the person free on Saturday?",
    "Where will they meet?",
    "What time will they meet?"
  ]
}$json$::jsonb,
  true
),
(
  '5a59987a-c1b3-4f87-a943-dbc3661ad021',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Can you meet up on ___?",
    "Yes, I am free ___.",
    "Let's meet at ___."
  ]
}$json$::jsonb,
  true
),
(
  '5a59987a-c1b3-4f87-a943-dbc3661ad021',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'Can you meet up?'",
    "Say when I'm free",
    "Suggest a place to meet"
  ],
  "challenge": "Make a plan to meet up with me this weekend!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Friend Profile
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fa9bc484-cc13-47ba-9941-e7cef202d1e5',
  'A Friend Profile',
  'A2',
  'teens',
  2,
  4,
  'Write a short friend profile using simple present + can. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fa9bc484-cc13-47ba-9941-e7cef202d1e5',
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
  'fa9bc484-cc13-47ba-9941-e7cef202d1e5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👭",
  "questions": [
    "Who is your best friend?",
    "What can you always do together?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'fa9bc484-cc13-47ba-9941-e7cef202d1e5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Best friend",
      "bg": "#FAECE7"
    },
    {
      "word": "Since",
      "bg": "#E1F5EE"
    },
    {
      "word": "Together",
      "bg": "#EEEDFE"
    },
    {
      "word": "Always",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'fa9bc484-cc13-47ba-9941-e7cef202d1e5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is your best friend?",
    "What can you do together?"
  ],
  "student": [
    "My best friend is Mia.",
    "We can play and talk together."
  ],
  "note": "Use the frame: My best friend is ___. We can ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fa9bc484-cc13-47ba-9941-e7cef202d1e5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [best friend] is Mia."
    },
    {
      "speaker": "B",
      "text": "We are friends [since] school started."
    },
    {
      "speaker": "A",
      "text": "We [always] have fun."
    }
  ],
  "blanks": [
    "best friend",
    "since",
    "always"
  ]
}$json$::jsonb,
  true
),
(
  'fa9bc484-cc13-47ba-9941-e7cef202d1e5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your best friend."
    },
    {
      "speaker": "B",
      "text": "My best friend is Leo. We can talk and play games together."
    },
    {
      "speaker": "A",
      "text": "We are friends since primary school. We always have fun."
    },
    {
      "speaker": "B",
      "text": "That's a great friendship!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use the frames from Lessons 1-3."
}$json$::jsonb,
  true
),
(
  'fa9bc484-cc13-47ba-9941-e7cef202d1e5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My best friend is Mia. She is kind and loyal. We can talk and play together. We are friends since school started.",
  "questions": [
    "Who is the writer's best friend?",
    "What is Mia like?",
    "What can they do together?"
  ]
}$json$::jsonb,
  true
),
(
  'fa9bc484-cc13-47ba-9941-e7cef202d1e5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My best friend is ___.",
    "He/She is ___.",
    "We can ___ together."
  ]
}$json$::jsonb,
  true
),
(
  'fa9bc484-cc13-47ba-9941-e7cef202d1e5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short friend profile",
    "Use 'My best friend is ___'",
    "Use 'We can ___ together'"
  ],
  "challenge": "Read me your friend profile using the frames you practiced!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'bd723eca-c32c-40ab-8b72-80efb3665821',
  'Unit Review',
  'A2',
  'teens',
  2,
  5,
  'Review friend qualities and plans using simple present + can. [Foundation tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'bd723eca-c32c-40ab-8b72-80efb3665821',
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
  'bd723eca-c32c-40ab-8b72-80efb3665821',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👫",
  "questions": [
    "What makes a good friend?",
    "What can you do together?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'bd723eca-c32c-40ab-8b72-80efb3665821',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Friend",
      "bg": "#FAECE7"
    },
    {
      "word": "Can",
      "bg": "#E1F5EE"
    },
    {
      "word": "Plan",
      "bg": "#EEEDFE"
    },
    {
      "word": "Together",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'bd723eca-c32c-40ab-8b72-80efb3665821',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What makes a good friend?",
    "What can you do together?"
  ],
  "student": [
    "A good friend is loyal.",
    "We can play together."
  ],
  "note": "Use the frames you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'bd723eca-c32c-40ab-8b72-80efb3665821',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "A good [friend] is loyal."
    },
    {
      "speaker": "B",
      "text": "We [can] play together."
    },
    {
      "speaker": "A",
      "text": "Let's make a [plan] for Saturday."
    }
  ],
  "blanks": [
    "friend",
    "can",
    "plan"
  ]
}$json$::jsonb,
  true
),
(
  'bd723eca-c32c-40ab-8b72-80efb3665821',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your best friend and your plans."
    },
    {
      "speaker": "B",
      "text": "My best friend is loyal and kind. We can play games together."
    },
    {
      "speaker": "A",
      "text": "Can you meet up on Saturday?"
    },
    {
      "speaker": "B",
      "text": "Yes, I am free. Let's meet at the park."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'bd723eca-c32c-40ab-8b72-80efb3665821',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My best friend is loyal and kind. We can talk and play together every day. Can you meet up on Saturday? Yes, I am free. Let's meet at the park at 2pm.",
  "questions": [
    "What is the friend like?",
    "What can they do together?",
    "Where will they meet on Saturday?"
  ]
}$json$::jsonb,
  true
),
(
  'bd723eca-c32c-40ab-8b72-80efb3665821',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "A good friend is ___.",
    "We can ___ together.",
    "Can you meet up on ___?"
  ]
}$json$::jsonb,
  true
),
(
  'bd723eca-c32c-40ab-8b72-80efb3665821',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a good friend",
    "Say what we can do together",
    "Make a plan to meet up"
  ],
  "challenge": "Tell me all about your friendships and plans!"
}$json$::jsonb,
  true
);
