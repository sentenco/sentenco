-- A2 Teens Unit 11: Future Plans and Goals (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Next Week
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b59a4774-b652-4ed0-9819-aa647bc7671f',
  'Next Week',
  'A2',
  'teens',
  11,
  1,
  'Plan next week and say what you''re giving up for it. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b59a4774-b652-4ed0-9819-aa647bc7671f',
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
  'b59a4774-b652-4ed0-9819-aa647bc7671f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "What will you focus on next week, and what will you give up for it?",
    "What is most important for you next week?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'b59a4774-b652-4ed0-9819-aa647bc7671f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Focus on",
      "bg": "#FAECE7"
    },
    {
      "word": "Less time for",
      "bg": "#E1F5EE"
    },
    {
      "word": "Most important",
      "bg": "#EEEDFE"
    },
    {
      "word": "Give up",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b59a4774-b652-4ed0-9819-aa647bc7671f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What will you focus on next week?",
    "What will you give up for it?"
  ],
  "student": [
    "I'm going to focus on exams next week.",
    "That means less time for friends."
  ],
  "note": "Say what you'll focus on, and what you'll give up for it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b59a4774-b652-4ed0-9819-aa647bc7671f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm going to [focus on] exams."
    },
    {
      "speaker": "B",
      "text": "That means [less time for] friends."
    },
    {
      "speaker": "A",
      "text": "Sleep is the [most important] thing."
    }
  ],
  "blanks": [
    "focus on",
    "less time for",
    "most important"
  ]
}$json$::jsonb,
  true
),
(
  'b59a4774-b652-4ed0-9819-aa647bc7671f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What will you focus on next week?"
    },
    {
      "speaker": "B",
      "text": "I'm going to focus on exams. That means less time for friends and gaming."
    },
    {
      "speaker": "A",
      "text": "What's most important to you, even during a busy week?"
    },
    {
      "speaker": "B",
      "text": "Sleep. I'm not giving that up, even for exams."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Say what you'll focus on and what you'll give up."
}$json$::jsonb,
  true
),
(
  'b59a4774-b652-4ed0-9819-aa647bc7671f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Next week is going to be busy for me, with three exams and a family event. I'm going to focus on exam study first, and that means less time for friends this week. I won't play games until the exams are over. But one thing I'm not giving up is sleep, because last time I skipped sleep to study more, and I actually remembered less, not more. I could try to do everything, but I already know how that ends. Choosing what to focus on isn't about doing everything. It's about deciding early what matters most.",
  "questions": [
    "What is the writer going to focus on next week?",
    "What will the writer give up for it?",
    "What will the writer not give up, and why?"
  ]
}$json$::jsonb,
  true
),
(
  'b59a4774-b652-4ed0-9819-aa647bc7671f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "What will you focus on next week? What will you give up for it?",
    "What's most important to you, even during a busy week?",
    "Explain what 'focusing on' something really means to you."
  ]
}$json$::jsonb,
  true
),
(
  'b59a4774-b652-4ed0-9819-aa647bc7671f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say what I'll focus on next week",
    "Say what I'll give up for it",
    "Explain what's most important, and why"
  ],
  "challenge": "Tell me your plan for next week, what you'll give up, and what's most important to you."
}$json$::jsonb,
  true
);

-- Lesson 2: Dreams and Goals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9905ca00-dcf3-410f-91a4-90c2e33c12f4',
  'Dreams and Goals',
  'A2',
  'teens',
  11,
  2,
  'Compare a past goal to a current one, honestly. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9905ca00-dcf3-410f-91a4-90c2e33c12f4',
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
  '9905ca00-dcf3-410f-91a4-90c2e33c12f4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌟",
  "questions": [
    "What did you used to want that you don't want anymore?",
    "Is your goal really yours, or did someone else want it for you?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '9905ca00-dcf3-410f-91a4-90c2e33c12f4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Used to want",
      "bg": "#FAECE7"
    },
    {
      "word": "Not anymore",
      "bg": "#E1F5EE"
    },
    {
      "word": "Really mine",
      "bg": "#EEEDFE"
    },
    {
      "word": "My parents wanted",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9905ca00-dcf3-410f-91a4-90c2e33c12f4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you used to want?",
    "Is your goal really yours?"
  ],
  "student": [
    "I used to want to be a doctor, not anymore.",
    "This goal is really mine now."
  ],
  "note": "Compare a past goal to a current one, and be honest about whose goal it was.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9905ca00-dcf3-410f-91a4-90c2e33c12f4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [used to want] to be a doctor."
    },
    {
      "speaker": "B",
      "text": "[Not anymore], I changed my mind."
    },
    {
      "speaker": "A",
      "text": "This new goal is [really mine]."
    }
  ],
  "blanks": [
    "used to want",
    "not anymore",
    "really mine"
  ]
}$json$::jsonb,
  true
),
(
  '9905ca00-dcf3-410f-91a4-90c2e33c12f4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What did you used to want that changed?"
    },
    {
      "speaker": "B",
      "text": "I used to want to be a doctor, mostly because my parents wanted that. Not anymore."
    },
    {
      "speaker": "A",
      "text": "What happened?"
    },
    {
      "speaker": "B",
      "text": "I volunteered at a hospital and didn't enjoy it. Now I know this new goal is really mine."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Be honest about whose goal it really was."
}$json$::jsonb,
  true
),
(
  '9905ca00-dcf3-410f-91a4-90c2e33c12f4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "For most of my childhood, I used to want to become a doctor. Looking back, I think my parents wanted that more than I did. That changed last year, when I volunteered at a clinic. I expected to feel excited, but I felt bored during the most important parts. So I let the goal change. I started paying attention to what I really enjoyed, which was building things, not helping sick people. Now my goal is to study engineering. It's less impressive to explain to my family, but it feels really mine, in a way the old goal never did.",
  "questions": [
    "What did the writer used to want, and whose goal was it really?",
    "What happened at the clinic?",
    "How does the writer's new goal feel different from the old one?"
  ]
}$json$::jsonb,
  true
),
(
  '9905ca00-dcf3-410f-91a4-90c2e33c12f4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "What did you used to want that changed? What caused the change?",
    "Is your current goal really yours, or someone else's? Be honest.",
    "How does your goal now feel different from before?"
  ]
}$json$::jsonb,
  true
),
(
  '9905ca00-dcf3-410f-91a4-90c2e33c12f4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare a past goal to a current goal",
    "Say honestly whose goal it was",
    "Use 'used to want' and 'not anymore'"
  ],
  "challenge": "Tell me about a goal that changed for you, and be honest about whose goal it really was."
}$json$::jsonb,
  true
);

-- Lesson 3: Then and Now
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0bb1acf2-6aaf-432f-a9df-ad3973706130',
  'Then and Now',
  'A2',
  'teens',
  11,
  3,
  'Compare small changes to a bigger change in yourself. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0bb1acf2-6aaf-432f-a9df-ad3973706130',
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
  '0bb1acf2-6aaf-432f-a9df-ad3973706130',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔄",
  "questions": [
    "What's different about you on the outside since you were younger?",
    "What's still the same deep down?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '0bb1acf2-6aaf-432f-a9df-ad3973706130',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "On the outside",
      "bg": "#FAECE7"
    },
    {
      "word": "Deep down",
      "bg": "#E1F5EE"
    },
    {
      "word": "Still the same",
      "bg": "#EEEDFE"
    },
    {
      "word": "Really changed",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0bb1acf2-6aaf-432f-a9df-ad3973706130',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's different on the outside?",
    "What's still the same deep down?"
  ],
  "student": [
    "On the outside, my hobbies are different.",
    "Deep down, I still care about the same things."
  ],
  "note": "Say what looks different, and what's still the same underneath.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0bb1acf2-6aaf-432f-a9df-ad3973706130',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[On the outside], I've changed a lot."
    },
    {
      "speaker": "B",
      "text": "[Deep down], I'm [still the same]."
    },
    {
      "speaker": "A",
      "text": "One thing has [really changed]."
    }
  ],
  "blanks": [
    "on the outside",
    "deep down",
    "still the same"
  ]
}$json$::jsonb,
  true
),
(
  '0bb1acf2-6aaf-432f-a9df-ad3973706130',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's different about you since you were younger?"
    },
    {
      "speaker": "B",
      "text": "On the outside, my hobbies are different. But deep down, I still care about the same things."
    },
    {
      "speaker": "A",
      "text": "I think I've really changed in one way: how I handle problems now."
    },
    {
      "speaker": "B",
      "text": "That's a bigger change than new hobbies."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Say what looks different, and what's really the same or really different."
}$json$::jsonb,
  true
),
(
  '0bb1acf2-6aaf-432f-a9df-ad3973706130',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "When I compare who I was to who I am now, it's easy to list small things: I used to like cartoons, now I like documentaries. I used to be loud in class, now I'm quieter. But on the outside, these are just small changes. Deep down, I still care about the same things I did years ago: being fair, being curious, and making people laugh, even if I show it differently now. One thing has really changed, though: how I handle problems. I used to react loudly and right away. Now I pause first, which I couldn't do before. That small pause is the biggest change in me, even though nobody can see it.",
  "questions": [
    "What small things does the writer list?",
    "What has stayed the same deep down?",
    "What is the one thing that has really changed?"
  ]
}$json$::jsonb,
  true
),
(
  '0bb1acf2-6aaf-432f-a9df-ad3973706130',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "List some small changes in you. What's stayed the same deep down?",
    "Describe one thing about you that has really changed.",
    "Explain the difference between looking different and really being different."
  ]
}$json$::jsonb,
  true
),
(
  '0bb1acf2-6aaf-432f-a9df-ad3973706130',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "List small changes and something that stayed the same",
    "Identify one thing that really changed",
    "Use 'on the outside' and 'deep down'"
  ],
  "challenge": "Tell me what's changed on the outside, what's the same deep down, and what's really changed."
}$json$::jsonb,
  true
);

-- Lesson 4: My Plan Post
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7d418b95-fdc3-489d-9fe4-43b26872e23d',
  'My Plan Post',
  'A2',
  'teens',
  11,
  4,
  'Write a future-plan post based on past evidence. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7d418b95-fdc3-489d-9fe4-43b26872e23d',
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
  '7d418b95-fdc3-489d-9fe4-43b26872e23d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚀",
  "questions": [
    "Is your plan based on what happened before, or is it a fresh start with no reason behind it?",
    "Who will help you check on your plan?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '7d418b95-fdc3-489d-9fe4-43b26872e23d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Based on what happened",
      "bg": "#FAECE7"
    },
    {
      "word": "Small and steady",
      "bg": "#E1F5EE"
    },
    {
      "word": "Check with a friend",
      "bg": "#EEEDFE"
    },
    {
      "word": "Try again",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7d418b95-fdc3-489d-9fe4-43b26872e23d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your plan based on what happened before?",
    "Who will help you check on it?"
  ],
  "student": [
    "My plan is based on what worked and didn't work last year.",
    "A friend will help me check on it."
  ],
  "note": "Write your own plan using the checklist below, not a fixed sentence frame.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7d418b95-fdc3-489d-9fe4-43b26872e23d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My plan is [based on what happened] last year."
    },
    {
      "speaker": "B",
      "text": "It's [small and steady] this time."
    },
    {
      "speaker": "A",
      "text": "I'll [check with a friend] every month."
    }
  ],
  "blanks": [
    "based on what happened",
    "small and steady",
    "check with a friend"
  ]
}$json$::jsonb,
  true
),
(
  '7d418b95-fdc3-489d-9fe4-43b26872e23d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your plan based on what happened before, or a fresh start with no reason?"
    },
    {
      "speaker": "B",
      "text": "It's based on what happened. Big plans failed for me before, so this one is small and steady."
    },
    {
      "speaker": "A",
      "text": "Who will help you check on it?"
    },
    {
      "speaker": "B",
      "text": "A friend will check with me every month, because I always give up alone."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Explain a plan using specific past evidence, not just hope."
}$json$::jsonb,
  true
),
(
  '7d418b95-fdc3-489d-9fe4-43b26872e23d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This year's plan is different from my old plans, because it's based on what actually happened before, not just what I hoped would happen. In the past, I used to make big goals in January and give up by February, because they didn't fit my real schedule. This time, my goal is small and steady: twenty minutes of English practice a day, not an hour I know I won't keep. I'm going to check with a friend every month, because I gave up alone last time, but a group project I did around the same time actually finished. If this plan works, it won't be because I tried harder than before. It will be because I built it on evidence, not just hope.",
  "questions": [
    "Why is this year's plan different from past plans?",
    "Why did the writer choose a friend to check in with?",
    "What does the writer say about trying harder versus building on evidence?"
  ]
}$json$::jsonb,
  true
),
(
  '7d418b95-fdc3-489d-9fe4-43b26872e23d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Write your own plan based on something that happened to you before.",
    "Who will help you check on your plan? Why them?",
    "Explain why this plan is different from one you gave up on."
  ]
}$json$::jsonb,
  true
),
(
  '7d418b95-fdc3-489d-9fe4-43b26872e23d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Base a plan on specific past experience",
    "Explain who will help me check on it, and why",
    "Explain how this plan is different from a past failure"
  ],
  "challenge": "Write your own plan post, based on something real that happened to you before."
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6c51fe9f-4ad4-462d-b94c-039f0e0cf577',
  'Unit Review',
  'A2',
  'teens',
  11,
  5,
  'Connect next-week plans, goal changes, then-and-now, and a plan post. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6c51fe9f-4ad4-462d-b94c-039f0e0cf577',
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
  '6c51fe9f-4ad4-462d-b94c-039f0e0cf577',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎯",
  "questions": [
    "What's the biggest thing you've realized about how you plan?",
    "Has that changed anything for you?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '6c51fe9f-4ad4-462d-b94c-039f0e0cf577',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Based on",
      "bg": "#FAECE7"
    },
    {
      "word": "Changed",
      "bg": "#E1F5EE"
    },
    {
      "word": "Really",
      "bg": "#EEEDFE"
    },
    {
      "word": "Check on",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6c51fe9f-4ad4-462d-b94c-039f0e0cf577',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's the biggest realization about how you plan?",
    "Has it changed anything?"
  ],
  "student": [
    "My best plans are based on past mistakes, not hope.",
    "It's changed how I set goals now."
  ],
  "note": "Connect at least two lessons from this unit together.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6c51fe9f-4ad4-462d-b94c-039f0e0cf577',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My plans are [based on] real experience now."
    },
    {
      "speaker": "B",
      "text": "My goals have [changed] a lot this year."
    },
    {
      "speaker": "A",
      "text": "That change feels [really] different."
    }
  ],
  "blanks": [
    "based on",
    "changed",
    "really"
  ]
}$json$::jsonb,
  true
),
(
  '6c51fe9f-4ad4-462d-b94c-039f0e0cf577',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's the biggest thing you've realized about how you plan?"
    },
    {
      "speaker": "B",
      "text": "Deciding what to give up, like in the first lesson, connects to writing a real plan in the last one. It's the same skill."
    },
    {
      "speaker": "A",
      "text": "For me, realizing a goal wasn't really mine changed how I wrote my final plan."
    },
    {
      "speaker": "B",
      "text": "It's strange how being honest ends up being the real skill here."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Connect at least two lessons from the unit."
}$json$::jsonb,
  true
),
(
  '6c51fe9f-4ad4-462d-b94c-039f0e0cf577',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Across this unit, the lessons connect more than they seem to at first. Deciding what to give up for next week, in the first lesson, turned out to be the same skill I needed later, when I built my final plan on real experience instead of hope. Realizing that some of my goals used to belong to other people, not really to me, changed how I judged the plan I finally wrote. And comparing what's changed on the outside to what's stayed the same deep down helped me notice that my planning has changed too, not just my goals. I used to plan by wishing. Now I plan by checking what already happened to me. If this unit taught me one thing, it's this: good planning isn't really about the future. It's about being honest about the past first.",
  "questions": [
    "How does deciding what to give up connect to the final plan?",
    "How did realizing a goal wasn't really the writer's own change the final plan?",
    "What one idea connects the whole unit?"
  ]
}$json$::jsonb,
  true
),
(
  '6c51fe9f-4ad4-462d-b94c-039f0e0cf577',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Connect two lessons from this unit. How do they relate to how you plan?",
    "Has your planning changed, not just your goals? How?",
    "Sum up, in one sentence, what good planning really needs."
  ]
}$json$::jsonb,
  true
),
(
  '6c51fe9f-4ad4-462d-b94c-039f0e0cf577',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Connect two or more lessons from the unit",
    "Say how my planning process has changed",
    "Sum up the unit's main idea"
  ],
  "challenge": "Connect two ideas from this unit and tell me what good planning really needs, in your own words."
}$json$::jsonb,
  true
);
