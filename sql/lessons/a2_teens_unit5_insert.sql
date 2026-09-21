-- A2 Teens Unit 5: Media and Technology (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Screen Time
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a75f5bc6-ebbc-4745-8ab2-a2458e3e4e25',
  'My Screen Time',
  'A2',
  'teens',
  5,
  1,
  'Compare screen time habits using simple past + comparatives. [Combination tier: 2 combined targets, partial scaffolding]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a75f5bc6-ebbc-4745-8ab2-a2458e3e4e25',
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
  'a75f5bc6-ebbc-4745-8ab2-a2458e3e4e25',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📱",
  "questions": [
    "Did you use your phone more or less than yesterday?",
    "How much screen time did you have last week?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'a75f5bc6-ebbc-4745-8ab2-a2458e3e4e25',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Scrolled",
      "bg": "#FAECE7"
    },
    {
      "word": "Notifications",
      "bg": "#E1F5EE"
    },
    {
      "word": "More time",
      "bg": "#EEEDFE"
    },
    {
      "word": "Less time",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a75f5bc6-ebbc-4745-8ab2-a2458e3e4e25',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Did you spend more time online this week?",
    "Was it more or less than last week?"
  ],
  "student": [
    "I spent more time than last week.",
    "I scrolled less than usual."
  ],
  "note": "Partial prompt: This week I spent ___ time than last week because ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a75f5bc6-ebbc-4745-8ab2-a2458e3e4e25',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [scrolled] more than last week."
    },
    {
      "speaker": "B",
      "text": "I checked [notifications] less than before."
    },
    {
      "speaker": "A",
      "text": "I spent [more time] gaming."
    }
  ],
  "blanks": [
    "scrolled",
    "notifications",
    "more time"
  ]
}$json$::jsonb,
  true
),
(
  'a75f5bc6-ebbc-4745-8ab2-a2458e3e4e25',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Did you spend more or less time online this week?"
    },
    {
      "speaker": "B",
      "text": "I scrolled more than last week because I was bored during the break."
    },
    {
      "speaker": "A",
      "text": "I spent less time than usual because I had more homework."
    },
    {
      "speaker": "B",
      "text": "That makes sense."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Compare this week to last week."
}$json$::jsonb,
  true
),
(
  'a75f5bc6-ebbc-4745-8ab2-a2458e3e4e25',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last week, I spent less time on my phone than usual because I was busy with exams. This week was different. I scrolled more than last week and checked notifications constantly. I spent more time gaming than studying, which was worse for my focus. Next week, I want to spend less time online than this week.",
  "questions": [
    "Was last week's screen time more or less than usual, and why?",
    "What changed this week?",
    "What does the writer want to do next week?"
  ]
}$json$::jsonb,
  true
),
(
  'a75f5bc6-ebbc-4745-8ab2-a2458e3e4e25',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This week, I spent ___ time online than last week because ___.",
    "I scrolled ___ than usual.",
    "Next week, I want to spend ___ time than this week."
  ]
}$json$::jsonb,
  true
),
(
  'a75f5bc6-ebbc-4745-8ab2-a2458e3e4e25',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare screen time between two weeks",
    "Use 'more/less time than'",
    "Give a reason with because"
  ],
  "challenge": "Compare your screen time this week to last week, and explain why!"
}$json$::jsonb,
  true
);

-- Lesson 2: Good or Bad Habit?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cc014df8-46a1-4cd8-aa71-6aa4dd2f5808',
  'Good or Bad Habit?',
  'A2',
  'teens',
  5,
  2,
  'Compare tech habits and justify opinions. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cc014df8-46a1-4cd8-aa71-6aa4dd2f5808',
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
  'cc014df8-46a1-4cd8-aa71-6aa4dd2f5808',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⚖️",
  "questions": [
    "Is social media more helpful or more distracting for you?",
    "Was your old phone habit healthier than now?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'cc014df8-46a1-4cd8-aa71-6aa4dd2f5808',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Distracting",
      "bg": "#FAECE7"
    },
    {
      "word": "Helpful",
      "bg": "#E1F5EE"
    },
    {
      "word": "More addictive",
      "bg": "#EEEDFE"
    },
    {
      "word": "Healthier",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cc014df8-46a1-4cd8-aa71-6aa4dd2f5808',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is social media more helpful or more distracting?",
    "Was it healthier before?"
  ],
  "student": [
    "It's more distracting than helpful for me.",
    "My old habits were healthier than now."
  ],
  "note": "Partial prompt: ___ is more ___ than ___ because ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cc014df8-46a1-4cd8-aa71-6aa4dd2f5808',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Social media is [more addictive] than useful for me."
    },
    {
      "speaker": "B",
      "text": "Learning apps are more [helpful] than games."
    },
    {
      "speaker": "A",
      "text": "My old routine was [healthier]."
    }
  ],
  "blanks": [
    "more addictive",
    "helpful",
    "healthier"
  ]
}$json$::jsonb,
  true
),
(
  'cc014df8-46a1-4cd8-aa71-6aa4dd2f5808',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you think social media is more helpful or more distracting?"
    },
    {
      "speaker": "B",
      "text": "For me, it's more distracting than helpful because I lose focus easily."
    },
    {
      "speaker": "A",
      "text": "I think my habits were healthier last year than now, because I read more books."
    },
    {
      "speaker": "B",
      "text": "I feel the same way about gaming."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Give reasons, not just opinions."
}$json$::jsonb,
  true
),
(
  'cc014df8-46a1-4cd8-aa71-6aa4dd2f5808',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Technology has two sides. For some teens, apps are more helpful than distracting because they support learning and staying in touch with friends. For others, social media is more addictive than useful, pulling attention away from homework and sleep. Last year, many teens said their habits were healthier than this year, with less scrolling and more outdoor time. The difference usually comes down to how much control a person has over their own screen time.",
  "questions": [
    "What is one way technology is helpful?",
    "What is one way it can be distracting?",
    "How did habits compare between last year and this year?"
  ]
}$json$::jsonb,
  true
),
(
  'cc014df8-46a1-4cd8-aa71-6aa4dd2f5808',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "For me, ___ is more helpful/distracting than ___ because ___.",
    "My habits were healthier/less healthy last year than now because ___.",
    "I think the difference comes from ___."
  ]
}$json$::jsonb,
  true
),
(
  'cc014df8-46a1-4cd8-aa71-6aa4dd2f5808',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare helpful and distracting tech habits",
    "Use comparatives with 'because'",
    "Justify an opinion about technology"
  ],
  "challenge": "Tell me if technology is more helpful or more distracting for you, and why!"
}$json$::jsonb,
  true
);

-- Lesson 3: A Tech Problem
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '11d5e6df-04c2-4da1-8093-048bb8f1046e',
  'A Tech Problem',
  'A2',
  'teens',
  5,
  3,
  'Tell a past tech-problem story with comparison and connectors. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '11d5e6df-04c2-4da1-8093-048bb8f1046e',
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
  '11d5e6df-04c2-4da1-8093-048bb8f1046e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💻",
  "questions": [
    "Have you had a tech problem that was worse than expected?",
    "Did you find a solution that was better than before?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '11d5e6df-04c2-4da1-8093-048bb8f1046e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Crashed",
      "bg": "#FAECE7"
    },
    {
      "word": "Worse than",
      "bg": "#E1F5EE"
    },
    {
      "word": "Backed up",
      "bg": "#EEEDFE"
    },
    {
      "word": "Better than",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '11d5e6df-04c2-4da1-8093-048bb8f1046e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Was the problem worse than you expected?",
    "Was your solution better than before?"
  ],
  "student": [
    "It was worse than I expected.",
    "My new backup system is better than before."
  ],
  "note": "Partial prompt: My problem was ___ than expected, but ___ was better than before.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '11d5e6df-04c2-4da1-8093-048bb8f1046e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My laptop [crashed], and it was [worse than] I thought."
    },
    {
      "speaker": "B",
      "text": "I lost photos, but I [backed up] the rest."
    },
    {
      "speaker": "A",
      "text": "My new system is [better than] the old one."
    }
  ],
  "blanks": [
    "crashed",
    "worse than",
    "better than"
  ]
}$json$::jsonb,
  true
),
(
  '11d5e6df-04c2-4da1-8093-048bb8f1046e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about a tech problem you had."
    },
    {
      "speaker": "B",
      "text": "Last month, my laptop crashed and it was worse than I expected because I lost two projects."
    },
    {
      "speaker": "A",
      "text": "I backed up my files afterward, and now my system is better than before."
    },
    {
      "speaker": "B",
      "text": "That's a smart change."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Sequence the story and compare before/after."
}$json$::jsonb,
  true
),
(
  '11d5e6df-04c2-4da1-8093-048bb8f1046e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last month, my laptop crashed right before I finished an important project. The situation was worse than I expected, because I hadn't saved my work in days. I felt frustrated, but I asked a friend for help and we recovered most of the file. After that, I started backing up my work every week, and my new habit is much better than my old one. Now I feel more relaxed because I know my files are safe.",
  "questions": [
    "What happened to the laptop?",
    "Why was the situation worse than expected?",
    "How is the writer's new habit better than the old one?"
  ]
}$json$::jsonb,
  true
),
(
  '11d5e6df-04c2-4da1-8093-048bb8f1046e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Last month, my ___ crashed/broke, and it was ___ than I expected.",
    "After that, I ___.",
    "Now my habit is better than before because ___."
  ]
}$json$::jsonb,
  true
),
(
  '11d5e6df-04c2-4da1-8093-048bb8f1046e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Tell a tech problem story with sequencing",
    "Use 'worse than' and 'better than'",
    "Compare a past habit to a new one"
  ],
  "challenge": "Tell me about a tech problem, what changed, and why the new way is better!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Short Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '03beae92-e450-4405-8d89-b14ed44d01e4',
  'A Short Review',
  'A2',
  'teens',
  5,
  4,
  'Write a comparative review of an app or show. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '03beae92-e450-4405-8d89-b14ed44d01e4',
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
  '03beae92-e450-4405-8d89-b14ed44d01e4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⭐",
  "questions": [
    "Is your favorite app more useful than others you've tried?",
    "Is a popular show overrated in your opinion?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '03beae92-e450-4405-8d89-b14ed44d01e4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Recommend",
      "bg": "#FAECE7"
    },
    {
      "word": "More useful",
      "bg": "#E1F5EE"
    },
    {
      "word": "Overrated",
      "bg": "#EEEDFE"
    },
    {
      "word": "Worth it",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '03beae92-e450-4405-8d89-b14ed44d01e4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is this app more useful than others?",
    "Is it worth it?"
  ],
  "student": [
    "Yes, it's more useful than most apps.",
    "Yes, it's totally worth it."
  ],
  "note": "Partial prompt: ___ is more ___ than ___ because ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '03beae92-e450-4405-8d89-b14ed44d01e4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This app is [more useful] than the last one I tried."
    },
    {
      "speaker": "B",
      "text": "I think that show is [overrated]."
    },
    {
      "speaker": "A",
      "text": "It's totally [worth it]."
    }
  ],
  "blanks": [
    "more useful",
    "overrated",
    "worth it"
  ]
}$json$::jsonb,
  true
),
(
  '03beae92-e450-4405-8d89-b14ed44d01e4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Would you recommend your favorite app?"
    },
    {
      "speaker": "B",
      "text": "Yes, it's more useful than any app I've tried because it's simple and fast."
    },
    {
      "speaker": "A",
      "text": "I think that new game is a bit overrated, honestly, it's not better than the older version."
    },
    {
      "speaker": "B",
      "text": "Interesting, I'll compare them myself."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Compare with a specific alternative."
}$json$::jsonb,
  true
),
(
  '03beae92-e450-4405-8d89-b14ed44d01e4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My review this week: this language app is more useful than any other app I've tried, because the lessons are short and the design is simple. I compared it to two other popular apps, and both felt more complicated and less fun. Some people say learning apps are overrated compared to real practice, but I disagree, because this one actually helped me remember new words better than before. I recommend it if you want something better than a textbook.",
  "questions": [
    "What is the app being reviewed?",
    "How does it compare to other apps the writer tried?",
    "Why does the writer disagree that learning apps are overrated?"
  ]
}$json$::jsonb,
  true
),
(
  '03beae92-e450-4405-8d89-b14ed44d01e4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is more useful than ___ because ___.",
    "Compared to ___, I think ___ is better because ___.",
    "I recommend it because it's better than ___."
  ]
}$json$::jsonb,
  true
),
(
  '03beae92-e450-4405-8d89-b14ed44d01e4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a comparative review",
    "Use 'more ___ than' with a reason",
    "Compare something to a specific alternative"
  ],
  "challenge": "Write a short comparative review of your favorite app or show!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '45f4444a-3614-4448-b93d-262c41c51350',
  'Unit Review',
  'A2',
  'teens',
  5,
  5,
  'Review screen time, tech opinions, a tech problem, and a comparative review. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '45f4444a-3614-4448-b93d-262c41c51350',
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
  '45f4444a-3614-4448-b93d-262c41c51350',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🖥️",
  "questions": [
    "Was your screen time this month more or less than last month?",
    "Would you recommend your favorite app?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '45f4444a-3614-4448-b93d-262c41c51350',
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
      "word": "More/less than",
      "bg": "#E1F5EE"
    },
    {
      "word": "Worse than",
      "bg": "#EEEDFE"
    },
    {
      "word": "Recommend",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '45f4444a-3614-4448-b93d-262c41c51350',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How does your screen time compare to before?",
    "What would you recommend, and why?"
  ],
  "student": [
    "It's more than before because of the holidays.",
    "I recommend it because it's more useful than others."
  ],
  "note": "Use comparatives and 'because' throughout this review.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '45f4444a-3614-4448-b93d-262c41c51350',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My screen time is [more] than last month."
    },
    {
      "speaker": "B",
      "text": "This app is [more useful] than my old one."
    },
    {
      "speaker": "A",
      "text": "My old laptop crashed, but the new one is [better than] it."
    }
  ],
  "blanks": [
    "more",
    "more useful",
    "better than"
  ]
}$json$::jsonb,
  true
),
(
  '45f4444a-3614-4448-b93d-262c41c51350',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Compare your tech life this month to last month."
    },
    {
      "speaker": "B",
      "text": "My screen time is more than last month because I've been gaming a lot. But I also got a better laptop."
    },
    {
      "speaker": "A",
      "text": "I'd recommend this new app, it's more useful than the last one and less distracting."
    },
    {
      "speaker": "B",
      "text": "I'll compare it to mine!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '45f4444a-3614-4448-b93d-262c41c51350',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This month, my screen time was more than last month because of the school holidays. I scrolled more and gamed more, which was worse for my sleep. But not everything was negative: my old laptop crashed last month, and my new one is much better than the old one. I'd recommend backing up your files, because it's more useful than you think until something goes wrong. Overall, I want next month's screen time to be less than this month's.",
  "questions": [
    "How did this month's screen time compare to last month?",
    "What tech problem happened, and how was it resolved?",
    "What does the writer recommend?"
  ]
}$json$::jsonb,
  true
),
(
  '45f4444a-3614-4448-b93d-262c41c51350',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This month, my screen time was ___ than last month because ___.",
    "My tech problem was ___, but now ___.",
    "I recommend ___ because it's more ___ than ___."
  ]
}$json$::jsonb,
  true
),
(
  '45f4444a-3614-4448-b93d-262c41c51350',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare screen time across time periods",
    "Tell a tech problem story with comparison",
    "Write a comparative recommendation"
  ],
  "challenge": "Tell me all about your tech life this month compared to last month!"
}$json$::jsonb,
  true
);
