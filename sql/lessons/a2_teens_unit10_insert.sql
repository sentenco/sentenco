-- A2 Teens Unit 10: Entertainment and Events (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: What Do You Watch or Listen To?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5c4bafb6-493e-4c1b-9e33-06fbbd6cb563',
  'What Do You Watch or Listen To?',
  'A2',
  'teens',
  10,
  1,
  'Compare taste now and before, and say what changed it. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5c4bafb6-493e-4c1b-9e33-06fbbd6cb563',
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
  '5c4bafb6-493e-4c1b-9e33-06fbbd6cb563',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎧",
  "questions": [
    "What did you used to watch that you don't watch now?",
    "What changed your taste?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '5c4bafb6-493e-4c1b-9e33-06fbbd6cb563',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Used to watch",
      "bg": "#FAECE7"
    },
    {
      "word": "Now I like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Changed my mind",
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
  '5c4bafb6-493e-4c1b-9e33-06fbbd6cb563',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you used to watch?",
    "What changed your mind?"
  ],
  "student": [
    "I used to watch only comedies.",
    "A friend's recommendation changed my mind."
  ],
  "note": "Compare your taste now to before. Say what changed it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5c4bafb6-493e-4c1b-9e33-06fbbd6cb563',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [used to watch] only comedies."
    },
    {
      "speaker": "B",
      "text": "[Now I like] documentaries too."
    },
    {
      "speaker": "A",
      "text": "A friend [changed my mind]."
    }
  ],
  "blanks": [
    "used to watch",
    "now i like",
    "changed my mind"
  ]
}$json$::jsonb,
  true
),
(
  '5c4bafb6-493e-4c1b-9e33-06fbbd6cb563',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How has your taste in shows changed?"
    },
    {
      "speaker": "B",
      "text": "I used to watch only comedies. Now I like documentaries too."
    },
    {
      "speaker": "A",
      "text": "What changed your mind?"
    },
    {
      "speaker": "B",
      "text": "A friend recommended one, and I liked it more than I expected."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Compare taste now to a year ago and explain the change."
}$json$::jsonb,
  true
),
(
  '5c4bafb6-493e-4c1b-9e33-06fbbd6cb563',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "A year ago, I only watched comedies. I thought anything serious would feel like homework after school. Now I like documentaries more than comedies, and that surprised even me. It started when a friend recommended a documentary. I only watched it because I was bored, but I finished the whole series in a week. Since then, my taste has slowly changed. I still watch comedies sometimes, but they are not my first choice anymore. Now I choose shows based on what I will remember later, not just what is easy to watch.",
  "questions": [
    "What did the writer only watch a year ago?",
    "What changed the writer's taste?",
    "How does the writer choose shows now?"
  ]
}$json$::jsonb,
  true
),
(
  '5c4bafb6-493e-4c1b-9e33-06fbbd6cb563',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Compare your taste now to a year ago. What's different?",
    "What changed it? A friend, a recommendation, something else?",
    "How do you choose what to watch now, compared to before?"
  ]
}$json$::jsonb,
  true
),
(
  '5c4bafb6-493e-4c1b-9e33-06fbbd6cb563',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare current taste to past taste",
    "Say what caused the change",
    "Use 'used to' and 'now' together"
  ],
  "challenge": "Compare your taste in shows or music now to a year ago, and tell me what changed it."
}$json$::jsonb,
  true
);

-- Lesson 2: Event Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fda2c389-2c83-4f12-86c2-507c71775656',
  'Event Plans',
  'A2',
  'teens',
  10,
  2,
  'Plan a future event and compare it to a past one. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fda2c389-2c83-4f12-86c2-507c71775656',
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
  'fda2c389-2c83-4f12-86c2-507c71775656',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎤",
  "questions": [
    "What event are you going to next, and how does it compare to last time?",
    "What are you expecting, based on last time?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'fda2c389-2c83-4f12-86c2-507c71775656',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Going to",
      "bg": "#FAECE7"
    },
    {
      "word": "Bigger than",
      "bg": "#E1F5EE"
    },
    {
      "word": "Based on",
      "bg": "#EEEDFE"
    },
    {
      "word": "Last time",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'fda2c389-2c83-4f12-86c2-507c71775656',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you going to next?",
    "How does it compare to last time?"
  ],
  "student": [
    "I'm going to a concert next month.",
    "I expect it to be bigger than last time."
  ],
  "note": "Use a past event to say what you expect from the next one.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fda2c389-2c83-4f12-86c2-507c71775656',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm [going to] a concert next month."
    },
    {
      "speaker": "B",
      "text": "I expect it to be [bigger than] last time."
    },
    {
      "speaker": "A",
      "text": "[Based on] last time, it will be great."
    }
  ],
  "blanks": [
    "going to",
    "bigger than",
    "based on"
  ]
}$json$::jsonb,
  true
),
(
  'fda2c389-2c83-4f12-86c2-507c71775656',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What event are you going to next?"
    },
    {
      "speaker": "B",
      "text": "I'm going to a concert next month. Based on last time, I think it will be amazing."
    },
    {
      "speaker": "A",
      "text": "Why do you think that?"
    },
    {
      "speaker": "B",
      "text": "Last time was better than I expected, so I'm expecting even more this time."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use a past event to explain what you expect next time."
}$json$::jsonb,
  true
),
(
  'fda2c389-2c83-4f12-86c2-507c71775656',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'm going to my second concert next month. Last time, I didn't expect much, because I had never been to one before. It was better than I expected, with a great crowd and amazing music. This time, I'm going to the same place, but a different singer. Based on last time, I think this show will be bigger, because more people are talking about it online. I don't know for sure until I'm there, but last time taught me something: don't expect too little, or you might miss something great.",
  "questions": [
    "Why didn't the writer expect much last time?",
    "Why does the writer think this show will be bigger?",
    "What did last time teach the writer?"
  ]
}$json$::jsonb,
  true
),
(
  'fda2c389-2c83-4f12-86c2-507c71775656',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "What event are you going to next? Compare it to a past event.",
    "What do you expect, based on what happened last time?",
    "What did a past event teach you about expectations?"
  ]
}$json$::jsonb,
  true
),
(
  'fda2c389-2c83-4f12-86c2-507c71775656',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'going to' for a future event",
    "Compare it to a past event",
    "Explain an expectation with 'based on'"
  ],
  "challenge": "Tell me about an event you're going to, and what you expect based on a past one."
}$json$::jsonb,
  true
);

-- Lesson 3: Better Than…
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '122fec4e-6156-41c4-b541-6c240718eded',
  'Better Than…',
  'A2',
  'teens',
  10,
  3,
  'Compare something popular now to how it feels later. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '122fec4e-6156-41c4-b541-6c240718eded',
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
  '122fec4e-6156-41c4-b541-6c240718eded',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎬",
  "questions": [
    "Is there something everyone loved that you don't like as much now?",
    "Is there something old that is still good?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '122fec4e-6156-41c4-b541-6c240718eded',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Everyone loved it",
      "bg": "#FAECE7"
    },
    {
      "word": "Looking back",
      "bg": "#E1F5EE"
    },
    {
      "word": "Still good",
      "bg": "#EEEDFE"
    },
    {
      "word": "Not as good",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '122fec4e-6156-41c4-b541-6c240718eded',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Looking back, do you still like it?",
    "Is it still as good as before?"
  ],
  "student": [
    "Looking back, I don't like it as much.",
    "It's still as good as I remember."
  ],
  "note": "Give your honest opinion, looking back, and say why.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '122fec4e-6156-41c4-b541-6c240718eded',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Everyone loved it], but I don't now."
    },
    {
      "speaker": "B",
      "text": "[Looking back], the story wasn't great."
    },
    {
      "speaker": "A",
      "text": "This old show is [still good]."
    }
  ],
  "blanks": [
    "everyone loved it",
    "looking back",
    "still good"
  ]
}$json$::jsonb,
  true
),
(
  '122fec4e-6156-41c4-b541-6c240718eded',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Everyone loved that movie last year. Do you still like it?"
    },
    {
      "speaker": "B",
      "text": "Looking back, not really. The story wasn't as good as I remembered."
    },
    {
      "speaker": "A",
      "text": "What about something old that's still good for you?"
    },
    {
      "speaker": "B",
      "text": "A cartoon I watched as a kid is still good. I watched it again and it was better than I expected."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Compare a past opinion to your opinion now."
}$json$::jsonb,
  true
),
(
  '122fec4e-6156-41c4-b541-6c240718eded',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last year, everyone in my class loved a certain movie, and I loved it too. But I watched it again recently, and looking back, I don't think it was as good as everyone said. The story had some problems I didn't notice the first time. On the other hand, a cartoon I watched as a kid was still good when I watched it again. The jokes were smarter than I remembered. Comparing these two, I learned something: something can feel amazing because everyone loves it at the time, but that doesn't always last.",
  "questions": [
    "What did the writer think of the popular movie, looking back?",
    "What did the writer think of the childhood cartoon?",
    "What did the writer learn from comparing them?"
  ]
}$json$::jsonb,
  true
),
(
  '122fec4e-6156-41c4-b541-6c240718eded',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Compare something popular now to how you feel about it later.",
    "Is there something old that's still good? Why?",
    "What did comparing these two things teach you?"
  ]
}$json$::jsonb,
  true
),
(
  '122fec4e-6156-41c4-b541-6c240718eded',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare a past opinion to a current one",
    "Say if something is still good or not as good",
    "Explain what I learned"
  ],
  "challenge": "Tell me about something popular you don't like as much now, and something old that's still good."
}$json$::jsonb,
  true
);

-- Lesson 4: A Review or Recommendation
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a782d545-5550-487c-89c5-97f00dc27ec3',
  'A Review or Recommendation',
  'A2',
  'teens',
  10,
  4,
  'Write a recommendation that depends on the person. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a782d545-5550-487c-89c5-97f00dc27ec3',
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
  'a782d545-5550-487c-89c5-97f00dc27ec3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📣",
  "questions": [
    "Does your recommendation depend on who's asking?",
    "What's one thing someone should know first?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'a782d545-5550-487c-89c5-97f00dc27ec3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "It depends",
      "bg": "#FAECE7"
    },
    {
      "word": "Worth it",
      "bg": "#E1F5EE"
    },
    {
      "word": "One thing to know",
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
  'a782d545-5550-487c-89c5-97f00dc27ec3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Does it depend on who's asking?",
    "What's one thing to know first?"
  ],
  "student": [
    "It depends: some people will love it, some won't.",
    "One thing to know: it's slow at the start."
  ],
  "note": "Write your own recommendation using the checklist, not a fixed sentence frame.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a782d545-5550-487c-89c5-97f00dc27ec3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My recommendation [it depends] on who's asking."
    },
    {
      "speaker": "B",
      "text": "It's [worth it], with [one thing to know]."
    },
    {
      "speaker": "A",
      "text": "I [recommend] it, but not for everyone."
    }
  ],
  "blanks": [
    "it depends",
    "worth it",
    "recommend"
  ]
}$json$::jsonb,
  true
),
(
  'a782d545-5550-487c-89c5-97f00dc27ec3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Would you recommend that show to everyone?"
    },
    {
      "speaker": "B",
      "text": "It depends. If you like slow stories, it's worth it. If you want fast action, skip it."
    },
    {
      "speaker": "A",
      "text": "What's one thing someone should know first?"
    },
    {
      "speaker": "B",
      "text": "It's slow for the first few episodes, but it gets much better."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Give a recommendation that depends on the person, not a simple yes or no."
}$json$::jsonb,
  true
),
(
  'a782d545-5550-487c-89c5-97f00dc27ec3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "People often ask me if I'd recommend this show, and my honest answer is: it depends. If you want fast, easy entertainment, I would say skip it, because the first three episodes are slow. But if you can be patient, I think it's worth the time, because the story gets much better later. One thing to know: don't start it during a busy week, because it needs more attention than a show you just watch in the background. I used to give simple 'yes' or 'no' recommendations, but now I think that's not very helpful, because what works for one person doesn't always work for another.",
  "questions": [
    "What does the recommendation depend on?",
    "What's the one thing to know before starting?",
    "Why does the writer no longer give simple yes/no recommendations?"
  ]
}$json$::jsonb,
  true
),
(
  'a782d545-5550-487c-89c5-97f00dc27ec3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Write a recommendation that depends on the person. Who is it for?",
    "What's one thing someone should know before they try it?",
    "Why can a simple yes/no recommendation be less helpful?"
  ]
}$json$::jsonb,
  true
),
(
  'a782d545-5550-487c-89c5-97f00dc27ec3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a recommendation that depends on the person",
    "Give one important thing to know first",
    "Explain why 'it depends' can be more honest than yes/no"
  ],
  "challenge": "Give me a recommendation that depends on the person, plus one thing they should know first."
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f05b63c5-e705-43aa-9c63-f8db1e649784',
  'Unit Review',
  'A2',
  'teens',
  10,
  5,
  'Connect taste, event plans, opinions, and a recommendation. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f05b63c5-e705-43aa-9c63-f8db1e649784',
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
  'f05b63c5-e705-43aa-9c63-f8db1e649784',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍿",
  "questions": [
    "How has your judgment about entertainment become more careful?",
    "What opinion did this unit change?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'f05b63c5-e705-43aa-9c63-f8db1e649784',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Changed",
      "bg": "#FAECE7"
    },
    {
      "word": "Based on",
      "bg": "#E1F5EE"
    },
    {
      "word": "Looking back",
      "bg": "#EEEDFE"
    },
    {
      "word": "It depends",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f05b63c5-e705-43aa-9c63-f8db1e649784',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How has your judgment changed?",
    "What opinion did this unit change?"
  ],
  "student": [
    "I judge things less by what's popular now.",
    "This unit changed how I recommend things to friends."
  ],
  "note": "Connect at least two lessons from this unit together.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f05b63c5-e705-43aa-9c63-f8db1e649784',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My taste has [changed] since this unit."
    },
    {
      "speaker": "B",
      "text": "I plan events [based on] the last one now."
    },
    {
      "speaker": "A",
      "text": "[Looking back], my opinions change a lot."
    }
  ],
  "blanks": [
    "changed",
    "based on",
    "looking back"
  ]
}$json$::jsonb,
  true
),
(
  'f05b63c5-e705-43aa-9c63-f8db1e649784',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How has your judgment about entertainment become more careful this unit?"
    },
    {
      "speaker": "B",
      "text": "I used to just say something was good or bad. Now I say 'it depends,' like in the recommendation lesson."
    },
    {
      "speaker": "A",
      "text": "I compare things to my past self more now, like in the taste lesson, before deciding if something is worth it."
    },
    {
      "speaker": "B",
      "text": "It's strange how much more careful this feels now."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Connect at least two lessons from the unit."
}$json$::jsonb,
  true
),
(
  'f05b63c5-e705-43aa-9c63-f8db1e649784',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Looking back at this whole unit, my thinking about entertainment has changed. The taste lesson showed me that my taste changes without me noticing. The same idea came back when I looked at something I loved before and didn't like as much now. My opinions clearly are not fixed. The event lesson taught me to be careful about big expectations, and that connects to the recommendation lesson, where I learned that 'it depends' is often more honest than a simple yes or no. If I had to sum up this whole unit in one idea, it would be this: entertainment opinions feel permanent, but they change more than we think, and knowing that makes recommendations more useful.",
  "questions": [
    "How does the taste lesson connect to the 'still good or not' lesson?",
    "How does the event lesson connect to the recommendation lesson?",
    "What one idea sums up the whole unit?"
  ]
}$json$::jsonb,
  true
),
(
  'f05b63c5-e705-43aa-9c63-f8db1e649784',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Connect two lessons from this unit. How do they relate?",
    "How have your own entertainment opinions changed, even recently?",
    "Sum up the whole unit in one sentence."
  ]
}$json$::jsonb,
  true
),
(
  'f05b63c5-e705-43aa-9c63-f8db1e649784',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Connect two or more lessons from the unit",
    "Say how opinions can change over time",
    "Sum up the unit's main idea"
  ],
  "challenge": "Connect two ideas from this unit and tell me what you'd tell a friend about judging entertainment."
}$json$::jsonb,
  true
);
