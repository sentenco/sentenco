-- A2 Teens Unit 9: Health and Fitness (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Healthy Habits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c2b102e4-5b43-4d46-a595-c58075b4bace',
  'Healthy Habits',
  'A2',
  'teens',
  9,
  1,
  'Compare two health habits and explain which helped more. [Bridge tier: combined past+comparative+because, less scaffolding, compare with reasons]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c2b102e4-5b43-4d46-a595-c58075b4bace',
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
  'c2b102e4-5b43-4d46-a595-c58075b4bace',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🥗",
  "questions": [
    "What habit helped you more this year, sleep or exercise?",
    "Did you give up on a habit, or keep doing it?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'c2b102e4-5b43-4d46-a595-c58075b4bace',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Made a difference",
      "bg": "#FAECE7"
    },
    {
      "word": "More than",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kept doing it",
      "bg": "#EEEDFE"
    },
    {
      "word": "Gave up",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c2b102e4-5b43-4d46-a595-c58075b4bace',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Which habit helped you more, and why?",
    "Did you keep doing it or give up?"
  ],
  "student": [
    "Sleeping more helped me more than exercise did.",
    "I kept doing it because it was easy."
  ],
  "note": "Compare two habits. Say which one helped more and why.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c2b102e4-5b43-4d46-a595-c58075b4bace',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Sleeping more helped me [more than] exercise did."
    },
    {
      "speaker": "B",
      "text": "It really [made a difference]."
    },
    {
      "speaker": "A",
      "text": "I [kept doing it] every night."
    }
  ],
  "blanks": [
    "more than",
    "made a difference",
    "kept doing it"
  ]
}$json$::jsonb,
  true
),
(
  'c2b102e4-5b43-4d46-a595-c58075b4bace',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which habit helped you more this year?"
    },
    {
      "speaker": "B",
      "text": "Sleeping more helped me more than eating differently. I felt better right away."
    },
    {
      "speaker": "A",
      "text": "I tried a new diet, but I gave up after two weeks because it was too hard."
    },
    {
      "speaker": "B",
      "text": "Sleep is easier to keep doing."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Compare two habits and say why one worked better."
}$json$::jsonb,
  true
),
(
  'c2b102e4-5b43-4d46-a595-c58075b4bace',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last year, I tried two new habits. First, I tried eating less sugar. It was hard, and it didn't help my energy much. Then, I tried sleeping one extra hour every night. This habit helped me more than the diet did, because I felt better almost right away. I also tried a hard gym plan for a month, but I gave up because I was too tired after school. A simple daily walk was easier, so I kept doing that instead. Now I know that small habits I can keep are better than big habits I give up on.",
  "questions": [
    "Which habit helped less, the diet or the sleep?",
    "Why did the writer give up on the gym plan?",
    "What did the writer learn about small and big habits?"
  ]
}$json$::jsonb,
  true
),
(
  'c2b102e4-5b43-4d46-a595-c58075b4bace',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Compare two habits you tried. Which one helped more, and why?",
    "Did you keep doing a habit, or give up? Why?",
    "What did you learn about easy habits and hard habits?"
  ]
}$json$::jsonb,
  true
),
(
  'c2b102e4-5b43-4d46-a595-c58075b4bace',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare two habits with 'more than'",
    "Say why I kept or gave up a habit",
    "Use past + comparative + because together"
  ],
  "challenge": "Compare two habits you tried and tell me which one really helped, and why."
}$json$::jsonb,
  true
);

-- Lesson 2: Fitness Choices
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2be81a2b-f86a-4491-bff1-81cd11e39f9c',
  'Fitness Choices',
  'A2',
  'teens',
  9,
  2,
  'Recommend a fitness plan and give reasons. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2be81a2b-f86a-4491-bff1-81cd11e39f9c',
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
  '2be81a2b-f86a-4491-bff1-81cd11e39f9c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏋️",
  "questions": [
    "Is a small plan easier to keep than a big plan?",
    "Did a simple plan last longer for you?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '2be81a2b-f86a-4491-bff1-81cd11e39f9c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Easier to keep",
      "bg": "#FAECE7"
    },
    {
      "word": "Harder to keep",
      "bg": "#E1F5EE"
    },
    {
      "word": "Worked better",
      "bg": "#EEEDFE"
    },
    {
      "word": "Lasted longer",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2be81a2b-f86a-4491-bff1-81cd11e39f9c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Which plan is easier to keep?",
    "Which plan worked better for you?"
  ],
  "student": [
    "A small plan is easier to keep than a big one.",
    "The simple plan worked better for me."
  ],
  "note": "Recommend one plan over another, and say why.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2be81a2b-f86a-4491-bff1-81cd11e39f9c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "A small plan is [easier to keep] than a big one."
    },
    {
      "speaker": "B",
      "text": "My last plan was [harder to keep]."
    },
    {
      "speaker": "A",
      "text": "The simple plan [worked better]."
    }
  ],
  "blanks": [
    "easier to keep",
    "harder to keep",
    "worked better"
  ]
}$json$::jsonb,
  true
),
(
  '2be81a2b-f86a-4491-bff1-81cd11e39f9c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Would you recommend a big plan or a small plan?"
    },
    {
      "speaker": "B",
      "text": "I'd recommend a small plan. My big plan was harder to keep, and I stopped after two weeks."
    },
    {
      "speaker": "A",
      "text": "My small plan lasted longer because it was easy to fit into my day."
    },
    {
      "speaker": "B",
      "text": "Small but steady really does work better."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Recommend a plan and explain why it's better than the other one."
}$json$::jsonb,
  true
),
(
  '2be81a2b-f86a-4491-bff1-81cd11e39f9c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last year, I made a big fitness plan. It was harder to keep than I thought, and I stopped after two weeks because it took too much time. This year, I made a smaller plan: twenty minutes, three times a week. This small plan was easier to keep than the big one, and it lasted much longer. My friend also tried a big plan, and she gave up too, for the same reason. Now I would recommend a small, easy plan instead of a big, hard one. It's not about doing more. It's about doing something you can keep doing.",
  "questions": [
    "Why did the big plan fail?",
    "How is the small plan different from the big plan?",
    "What does the writer recommend now?"
  ]
}$json$::jsonb,
  true
),
(
  '2be81a2b-f86a-4491-bff1-81cd11e39f9c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Compare a big fitness plan and a small one. Which is easier to keep?",
    "Recommend a fitness plan to a friend. Give a reason.",
    "Why is a plan you can keep better than a plan you give up on?"
  ]
}$json$::jsonb,
  true
),
(
  '2be81a2b-f86a-4491-bff1-81cd11e39f9c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare a big plan and a small plan",
    "Recommend a plan with a reason",
    "Explain why 'easy to keep' matters more than 'big'"
  ],
  "challenge": "Recommend a fitness plan to a friend, and explain why it's better than a harder one."
}$json$::jsonb,
  true
);

-- Lesson 3: A Bad Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'acf867a3-5a6d-48e1-bb46-7a3d883e6b17',
  'A Bad Day',
  'A2',
  'teens',
  9,
  3,
  'Tell a story about a health problem and what it taught you. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'acf867a3-5a6d-48e1-bb46-7a3d883e6b17',
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
  'acf867a3-5a6d-48e1-bb46-7a3d883e6b17',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😩",
  "questions": [
    "Did you ever get sick and realize something because of it?",
    "Did you change something after?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'acf867a3-5a6d-48e1-bb46-7a3d883e6b17',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Got sick",
      "bg": "#FAECE7"
    },
    {
      "word": "Realized",
      "bg": "#E1F5EE"
    },
    {
      "word": "Changed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Since then",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'acf867a3-5a6d-48e1-bb46-7a3d883e6b17',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What happened, and what did you realize?",
    "What did you change after that?"
  ],
  "student": [
    "I got sick and realized I wasn't sleeping enough.",
    "Since then, I go to bed earlier."
  ],
  "note": "Tell the story: what happened, what you realized, what you changed.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'acf867a3-5a6d-48e1-bb46-7a3d883e6b17',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [got sick] before my exam."
    },
    {
      "speaker": "B",
      "text": "I [realized] I wasn't sleeping enough."
    },
    {
      "speaker": "A",
      "text": "[Since then], I go to bed earlier."
    }
  ],
  "blanks": [
    "got sick",
    "realized",
    "since then"
  ]
}$json$::jsonb,
  true
),
(
  'acf867a3-5a6d-48e1-bb46-7a3d883e6b17',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about a time you got sick and learned something."
    },
    {
      "speaker": "B",
      "text": "I got sick before my exams last year. I realized I wasn't sleeping enough for weeks."
    },
    {
      "speaker": "A",
      "text": "What did you change after that?"
    },
    {
      "speaker": "B",
      "text": "Since then, I go to bed earlier, even during busy weeks."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Sequence the story: what happened, then what changed."
}$json$::jsonb,
  true
),
(
  'acf867a3-5a6d-48e1-bb46-7a3d883e6b17',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two weeks before my exams, I got sick. At first, I thought it was bad luck. But then I realized something: I hadn't slept enough for weeks, and I hadn't eaten proper meals either. It took a whole week to get better, which was worse than if I had just rested from the start. After I felt better, I changed my evening routine. Since then, I always eat a proper dinner, even during busy weeks. I still work hard before exams, but now I don't skip sleep to do it. Getting sick that time taught me more than any easy week ever did.",
  "questions": [
    "What did the writer realize about the weeks before getting sick?",
    "How long did it take to feel better?",
    "What did the writer change afterward?"
  ]
}$json$::jsonb,
  true
),
(
  'acf867a3-5a6d-48e1-bb46-7a3d883e6b17',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Tell a story: you got sick or had a bad day, and you realized something.",
    "What did you change since then?",
    "What did that experience teach you?"
  ]
}$json$::jsonb,
  true
),
(
  'acf867a3-5a6d-48e1-bb46-7a3d883e6b17',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Tell a health story in order",
    "Say what I realized",
    "Say what changed since then"
  ],
  "challenge": "Tell me about a bad day that taught you something, and what changed since then."
}$json$::jsonb,
  true
);

-- Lesson 4: My Health Plan
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f6f8ed76-0904-4c3e-8e94-e7ad92045c0a',
  'My Health Plan',
  'A2',
  'teens',
  9,
  4,
  'Write a health plan with reasons based on past experience. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f6f8ed76-0904-4c3e-8e94-e7ad92045c0a',
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
  'f6f8ed76-0904-4c3e-8e94-e7ad92045c0a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📋",
  "questions": [
    "What is your top priority for staying healthy?",
    "Would you check in on your plan every week or every month?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'f6f8ed76-0904-4c3e-8e94-e7ad92045c0a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Priority",
      "bg": "#FAECE7"
    },
    {
      "word": "Because last time",
      "bg": "#E1F5EE"
    },
    {
      "word": "Small steps",
      "bg": "#EEEDFE"
    },
    {
      "word": "Check in",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f6f8ed76-0904-4c3e-8e94-e7ad92045c0a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your top priority, and why?",
    "How will you check in on your plan?"
  ],
  "student": [
    "My top priority is sleep, because last time I ignored it.",
    "I'll check in once a month, not every day."
  ],
  "note": "Write your own plan using the checklist below, not a fixed sentence frame.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f6f8ed76-0904-4c3e-8e94-e7ad92045c0a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My top [priority] is sleep."
    },
    {
      "speaker": "B",
      "text": "[Because last time], a big plan failed."
    },
    {
      "speaker": "A",
      "text": "I'll take [small steps] this time."
    }
  ],
  "blanks": [
    "priority",
    "because last time",
    "small steps"
  ]
}$json$::jsonb,
  true
),
(
  'f6f8ed76-0904-4c3e-8e94-e7ad92045c0a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is the top priority in your health plan, and why?"
    },
    {
      "speaker": "B",
      "text": "My top priority is sleep, because last time I got sick from not sleeping enough."
    },
    {
      "speaker": "A",
      "text": "I'm taking small steps this time, because a big plan failed for me before."
    },
    {
      "speaker": "B",
      "text": "I'll check in every month, not every day, so I don't give up too fast."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Give a priority and a reason from past experience."
}$json$::jsonb,
  true
),
(
  'f6f8ed76-0904-4c3e-8e94-e7ad92045c0a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my health plan for this year. My top priority is sleep, because last time I ignored it, I got sick before my exams. Second, I want to take small steps, not big ones, because my big plan last year failed after two weeks. So this time, it's just twenty minutes of walking, three times a week. Third, I will check in on my plan once a month, not every day, because checking every day made me stop before. This plan is simple, but that's the point. My small plans always last longer than my big ones.",
  "questions": [
    "What is the writer's top priority, and why?",
    "Why did the writer choose small steps instead of big ones?",
    "Why does the writer check in once a month instead of every day?"
  ]
}$json$::jsonb,
  true
),
(
  'f6f8ed76-0904-4c3e-8e94-e7ad92045c0a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Write your own health plan with a top priority. Give a reason from experience.",
    "Explain why you chose small steps or big steps.",
    "Explain how often you will check in on your plan, and why."
  ]
}$json$::jsonb,
  true
),
(
  'f6f8ed76-0904-4c3e-8e94-e7ad92045c0a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a health plan with a clear priority",
    "Give a reason based on past experience",
    "Explain a check-in plan"
  ],
  "challenge": "Write your own health plan, and explain each choice using something that happened before."
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1d0d30cf-c3c9-468a-9dab-d86fe67409df',
  'Unit Review',
  'A2',
  'teens',
  9,
  5,
  'Connect habits, fitness choices, a bad day, and a health plan. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1d0d30cf-c3c9-468a-9dab-d86fe67409df',
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
  '1d0d30cf-c3c9-468a-9dab-d86fe67409df',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💪",
  "questions": [
    "What is the one health lesson from this unit you want to keep?",
    "How do your lessons connect?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '1d0d30cf-c3c9-468a-9dab-d86fe67409df',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Small steps",
      "bg": "#FAECE7"
    },
    {
      "word": "Made a difference",
      "bg": "#E1F5EE"
    },
    {
      "word": "Realized",
      "bg": "#EEEDFE"
    },
    {
      "word": "Priority",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1d0d30cf-c3c9-468a-9dab-d86fe67409df',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the one lesson you'd keep from this unit?",
    "How do the lessons connect?"
  ],
  "student": [
    "I'd keep the idea that small steps work better.",
    "My bad day is the reason sleep is now my priority."
  ],
  "note": "Connect at least two lessons from this unit together.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1d0d30cf-c3c9-468a-9dab-d86fe67409df',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Small steps] [made a difference] for me."
    },
    {
      "speaker": "B",
      "text": "I [realized] sleep matters most."
    },
    {
      "speaker": "A",
      "text": "Now sleep is my top [priority]."
    }
  ],
  "blanks": [
    "small steps",
    "made a difference",
    "priority"
  ]
}$json$::jsonb,
  true
),
(
  '1d0d30cf-c3c9-468a-9dab-d86fe67409df',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's the one lesson from this unit you'd keep?"
    },
    {
      "speaker": "B",
      "text": "Small steps made a bigger difference for me than big plans. That connects to my fitness lesson and my health plan."
    },
    {
      "speaker": "A",
      "text": "For me, the bad day I talked about is the reason sleep is my top priority now."
    },
    {
      "speaker": "B",
      "text": "It's interesting how one bad week changed everything."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Connect at least two lessons from the unit."
}$json$::jsonb,
  true
),
(
  '1d0d30cf-c3c9-468a-9dab-d86fe67409df',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This unit connects more than it looks. The habits lesson taught me that small changes help more than big ones, and my fitness plan proved it again: a small plan lasted longer than a big one ever did. The bad day I wrote about wasn't a separate story either. Getting sick is the reason sleep became my top priority, and that's why my health plan starts with sleep first. If I compare who I was before this unit to now, the biggest change isn't a new habit. It's how I judge progress: not by how hard something feels, but by how long I can actually keep doing it. That's the one idea I want to keep from this whole unit.",
  "questions": [
    "How does the habits lesson connect to the fitness lesson?",
    "How did the bad day connect to the health plan?",
    "What is the one idea the writer wants to keep?"
  ]
}$json$::jsonb,
  true
),
(
  '1d0d30cf-c3c9-468a-9dab-d86fe67409df',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Connect two lessons from this unit. How do they relate?",
    "How did a past experience shape a later choice?",
    "What's the one idea from this unit you want to keep?"
  ]
}$json$::jsonb,
  true
),
(
  '1d0d30cf-c3c9-468a-9dab-d86fe67409df',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Connect two or more lessons from the unit",
    "Link a past experience to a later choice",
    "Say what I want to keep from the unit"
  ],
  "challenge": "Connect two ideas from this unit and tell me what you'd keep from it."
}$json$::jsonb,
  true
);
