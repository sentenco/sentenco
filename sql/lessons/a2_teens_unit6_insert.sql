-- A2 Teens Unit 6: Food and Going Out (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Where Shall We Eat?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9d357b59-1d73-4dd3-997d-d26ba135ee7b',
  'Where Shall We Eat?',
  'A2',
  'teens',
  6,
  1,
  'Compare restaurant choices with reasons. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9d357b59-1d73-4dd3-997d-d26ba135ee7b',
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
  '9d357b59-1d73-4dd3-997d-d26ba135ee7b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍜",
  "questions": [
    "Is the place near you cheaper than downtown?",
    "Do you pick a place because of reviews?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '9d357b59-1d73-4dd3-997d-d26ba135ee7b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Craving",
      "bg": "#FAECE7"
    },
    {
      "word": "Cheaper than",
      "bg": "#E1F5EE"
    },
    {
      "word": "Closer than",
      "bg": "#EEEDFE"
    },
    {
      "word": "Better reviews",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9d357b59-1d73-4dd3-997d-d26ba135ee7b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is this place cheaper than that one?",
    "Why do you want to go there?"
  ],
  "student": [
    "Yes, it's cheaper and closer.",
    "I want to go because it has better reviews."
  ],
  "note": "Partial prompt: ___ is ___ than ___ because ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9d357b59-1d73-4dd3-997d-d26ba135ee7b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This café is [cheaper than] the one downtown."
    },
    {
      "speaker": "B",
      "text": "It's also [closer than] my house."
    },
    {
      "speaker": "A",
      "text": "It has [better reviews] too."
    }
  ],
  "blanks": [
    "cheaper than",
    "closer than",
    "better reviews"
  ]
}$json$::jsonb,
  true
),
(
  '9d357b59-1d73-4dd3-997d-d26ba135ee7b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Shall we eat at the new noodle place?"
    },
    {
      "speaker": "B",
      "text": "Sure, it's cheaper than the usual place because it's smaller."
    },
    {
      "speaker": "A",
      "text": "And it's closer than downtown, plus it has better reviews online."
    },
    {
      "speaker": "B",
      "text": "Sounds like a good choice, let's go."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Justify the choice with at least two reasons."
}$json$::jsonb,
  true
),
(
  '9d357b59-1d73-4dd3-997d-d26ba135ee7b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My friends and I wanted to eat out, so we compared two places. The noodle shop is cheaper than the burger place because the portions cost less. It's also closer than downtown, only a five-minute walk. Online, it has better reviews than the burger place too, with more people mentioning fresh ingredients. Because of these reasons, we decided the noodle shop was the better choice for tonight.",
  "questions": [
    "Why is the noodle shop cheaper?",
    "Why is it more convenient?",
    "What did the reviews say?"
  ]
}$json$::jsonb,
  true
),
(
  '9d357b59-1d73-4dd3-997d-d26ba135ee7b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is cheaper/closer than ___ because ___.",
    "It has better reviews than ___ because ___.",
    "We chose ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '9d357b59-1d73-4dd3-997d-d26ba135ee7b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare restaurant choices",
    "Use comparatives with 'because'",
    "Justify a decision with two or more reasons"
  ],
  "challenge": "Compare two places to eat and explain your choice with reasons!"
}$json$::jsonb,
  true
);

-- Lesson 2: Ordering Food
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '555ab16a-cfc7-486e-a44c-af16464e788a',
  'Ordering Food',
  'A2',
  'teens',
  6,
  2,
  'Order food and compare menu options with reasons. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '555ab16a-cfc7-486e-a44c-af16464e788a',
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
  '555ab16a-cfc7-486e-a44c-af16464e788a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍽️",
  "questions": [
    "Do you prefer something spicier or milder?",
    "Do you choose the healthier option?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '555ab16a-cfc7-486e-a44c-af16464e788a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Spicier than",
      "bg": "#FAECE7"
    },
    {
      "word": "Healthier option",
      "bg": "#E1F5EE"
    },
    {
      "word": "Recommend",
      "bg": "#EEEDFE"
    },
    {
      "word": "Instead of",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '555ab16a-cfc7-486e-a44c-af16464e788a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Would you like something spicier?",
    "Why do you recommend that dish?"
  ],
  "student": [
    "Yes, spicier than usual, please.",
    "I recommend it because it's healthier."
  ],
  "note": "Partial prompt: I'll have ___ instead of ___ because ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '555ab16a-cfc7-486e-a44c-af16464e788a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This dish is [spicier than] the other one."
    },
    {
      "speaker": "B",
      "text": "I'll choose the [healthier option]."
    },
    {
      "speaker": "A",
      "text": "I'll have soup [instead of] fries."
    }
  ],
  "blanks": [
    "spicier than",
    "healthier option",
    "instead of"
  ]
}$json$::jsonb,
  true
),
(
  '555ab16a-cfc7-486e-a44c-af16464e788a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you recommend from the menu?"
    },
    {
      "speaker": "B",
      "text": "The grilled chicken is healthier than the fried one, and it's spicier too if you like that."
    },
    {
      "speaker": "A",
      "text": "I'll have the soup instead of fries, because it's lighter."
    },
    {
      "speaker": "B",
      "text": "Good choice."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Recommend and explain why."
}$json$::jsonb,
  true
),
(
  '555ab16a-cfc7-486e-a44c-af16464e788a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "At the café, the waiter asked what we wanted. My friend chose the grilled chicken instead of the fried version, because it's healthier and less oily. I asked if the curry was spicier than the soup, and the waiter said yes, so I ordered the curry because I like spicy food. We both agreed the healthier option didn't mean less tasty, it was actually better than we expected.",
  "questions": [
    "What did the friend choose instead of fried chicken, and why?",
    "Was the curry spicier or milder than the soup?",
    "What did they agree about healthy food?"
  ]
}$json$::jsonb,
  true
),
(
  '555ab16a-cfc7-486e-a44c-af16464e788a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'll have ___ instead of ___ because ___.",
    "___ is spicier/healthier than ___.",
    "We agreed that ___."
  ]
}$json$::jsonb,
  true
),
(
  '555ab16a-cfc7-486e-a44c-af16464e788a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Order food with a comparative reason",
    "Use 'instead of' to make a choice",
    "Recommend a healthier or spicier option"
  ],
  "challenge": "Order a meal from me and explain your choice using comparatives!"
}$json$::jsonb,
  true
);

-- Lesson 3: Eating Out: Better or Worse?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9dc45e45-803b-43db-883a-0c5b5bfb46b2',
  'Eating Out: Better or Worse?',
  'A2',
  'teens',
  6,
  3,
  'Compare eating out and eating at home, past experience. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9dc45e45-803b-43db-883a-0c5b5bfb46b2',
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
  '9dc45e45-803b-43db-883a-0c5b5bfb46b2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏠",
  "questions": [
    "Was your last meal out better than eating at home?",
    "Is eating out more convenient but less healthy?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '9dc45e45-803b-43db-883a-0c5b5bfb46b2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "More convenient",
      "bg": "#FAECE7"
    },
    {
      "word": "Less healthy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Last time",
      "bg": "#EEEDFE"
    },
    {
      "word": "Worth the cost",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9dc45e45-803b-43db-883a-0c5b5bfb46b2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Was eating out better than cooking last time?",
    "Is it worth the cost?"
  ],
  "student": [
    "It was more convenient, but less healthy.",
    "Yes, it was worth the cost."
  ],
  "note": "Partial prompt: Last time, eating out was ___ than cooking because ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9dc45e45-803b-43db-883a-0c5b5bfb46b2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Eating out is [more convenient] than cooking."
    },
    {
      "speaker": "B",
      "text": "But it's usually [less healthy]."
    },
    {
      "speaker": "A",
      "text": "[Last time], it was [worth the cost]."
    }
  ],
  "blanks": [
    "more convenient",
    "less healthy",
    "worth the cost"
  ]
}$json$::jsonb,
  true
),
(
  '9dc45e45-803b-43db-883a-0c5b5bfb46b2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Was eating out last weekend better than cooking at home?"
    },
    {
      "speaker": "B",
      "text": "It was more convenient because I didn't have to clean up, but it was less healthy than my usual meals."
    },
    {
      "speaker": "A",
      "text": "Was it worth the cost?"
    },
    {
      "speaker": "B",
      "text": "Yes, because it saved me time on a busy day."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Weigh both sides before deciding."
}$json$::jsonb,
  true
),
(
  '9dc45e45-803b-43db-883a-0c5b5bfb46b2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last weekend, I ate out instead of cooking at home. It was more convenient than making dinner myself, because I was exhausted after a long week. However, the meal was less healthy than what I usually eat, with more oil and sugar than I expected. Even so, I think it was worth the cost, because the time I saved let me rest properly. Next time, I might choose a healthier restaurant so I don't have to choose between convenience and health.",
  "questions": [
    "Why was eating out more convenient?",
    "Why was the meal less healthy?",
    "Was it worth the cost, and why?"
  ]
}$json$::jsonb,
  true
),
(
  '9dc45e45-803b-43db-883a-0c5b5bfb46b2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Last time, eating out was more convenient than cooking because ___.",
    "But it was less healthy because ___.",
    "It was/wasn't worth the cost because ___."
  ]
}$json$::jsonb,
  true
),
(
  '9dc45e45-803b-43db-883a-0c5b5bfb46b2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare eating out and cooking",
    "Weigh convenience against health",
    "Justify whether something was worth it"
  ],
  "challenge": "Tell me about a time eating out was better or worse than cooking, and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Food Review Post
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ad77bf7e-ac95-4ff0-9501-bfe83c69cf7f',
  'A Food Review Post',
  'A2',
  'teens',
  6,
  4,
  'Write a comparative food review with reasons. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ad77bf7e-ac95-4ff0-9501-bfe83c69cf7f',
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
  'ad77bf7e-ac95-4ff0-9501-bfe83c69cf7f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📝",
  "questions": [
    "Was a meal better than you expected?",
    "Was the portion bigger than usual?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'ad77bf7e-ac95-4ff0-9501-bfe83c69cf7f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Better than expected",
      "bg": "#FAECE7"
    },
    {
      "word": "Overpriced",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bigger portion",
      "bg": "#EEEDFE"
    },
    {
      "word": "Compared to",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ad77bf7e-ac95-4ff0-9501-bfe83c69cf7f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Was the food better than you expected?",
    "Compared to other places, how was it?"
  ],
  "student": [
    "Yes, much better than expected.",
    "Compared to others, it was more expensive."
  ],
  "note": "Partial prompt: Compared to ___, this place was ___ because ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ad77bf7e-ac95-4ff0-9501-bfe83c69cf7f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The food was [better than expected]."
    },
    {
      "speaker": "B",
      "text": "It was a bit [overpriced] though."
    },
    {
      "speaker": "A",
      "text": "The portion was [bigger] than usual."
    }
  ],
  "blanks": [
    "better than expected",
    "overpriced",
    "bigger"
  ]
}$json$::jsonb,
  true
),
(
  'ad77bf7e-ac95-4ff0-9501-bfe83c69cf7f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How was your meal, compared to what you expected?"
    },
    {
      "speaker": "B",
      "text": "It was better than expected, and the portion was bigger than most places."
    },
    {
      "speaker": "A",
      "text": "Was it overpriced compared to similar restaurants?"
    },
    {
      "speaker": "B",
      "text": "A little, but the quality made it worth it."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Compare price, portion, and quality."
}$json$::jsonb,
  true
),
(
  'ad77bf7e-ac95-4ff0-9501-bfe83c69cf7f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My review of the new café: compared to what I expected, the food was much better, especially the pasta. The portion was bigger than most cafés I've tried, which made it feel worth the price. It was a little overpriced compared to similar places nearby, but the quality justified the cost for me. I'd recommend it over the older café down the street, because the atmosphere was also more relaxing.",
  "questions": [
    "How did the food compare to expectations?",
    "How did the portion compare to other cafés?",
    "Why does the writer recommend it over the other café?"
  ]
}$json$::jsonb,
  true
),
(
  'ad77bf7e-ac95-4ff0-9501-bfe83c69cf7f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Compared to what I expected, the food was ___.",
    "The portion was bigger/smaller than ___.",
    "I recommend it over ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'ad77bf7e-ac95-4ff0-9501-bfe83c69cf7f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a comparative food review",
    "Compare price, portion, and quality",
    "Recommend one place over another"
  ],
  "challenge": "Write a comparative review comparing two places you've eaten!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8db46d58-a4d0-4417-9e4d-736035bd52e0',
  'Unit Review',
  'A2',
  'teens',
  6,
  5,
  'Review restaurant comparisons, ordering, and food reviews. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8db46d58-a4d0-4417-9e4d-736035bd52e0',
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
  '8db46d58-a4d0-4417-9e4d-736035bd52e0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍕",
  "questions": [
    "Was your last meal cheaper or more expensive than usual?",
    "Was it worth it?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '8db46d58-a4d0-4417-9e4d-736035bd52e0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Cheaper than",
      "bg": "#FAECE7"
    },
    {
      "word": "Healthier",
      "bg": "#E1F5EE"
    },
    {
      "word": "Worth it",
      "bg": "#EEEDFE"
    },
    {
      "word": "Compared to",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8db46d58-a4d0-4417-9e4d-736035bd52e0',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How did your last meal compare to usual?",
    "Was it worth it?"
  ],
  "student": [
    "It was cheaper but less healthy.",
    "Yes, it was definitely worth it."
  ],
  "note": "Use comparatives with 'because' throughout.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8db46d58-a4d0-4417-9e4d-736035bd52e0',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This place is [cheaper than] the other one."
    },
    {
      "speaker": "B",
      "text": "But it's [less healthy]."
    },
    {
      "speaker": "A",
      "text": "Still, it's [worth it] for the taste."
    }
  ],
  "blanks": [
    "cheaper than",
    "less healthy",
    "worth it"
  ]
}$json$::jsonb,
  true
),
(
  '8db46d58-a4d0-4417-9e4d-736035bd52e0',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Compare your last two meals out."
    },
    {
      "speaker": "B",
      "text": "The noodle place was cheaper than the café, but less healthy, so it depends what I want."
    },
    {
      "speaker": "A",
      "text": "Was the café worth the extra cost?"
    },
    {
      "speaker": "B",
      "text": "Yes, because the portion was bigger and the reviews were better."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8db46d58-a4d0-4417-9e4d-736035bd52e0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I compared my last two meals out. The noodle place was cheaper than the café, but the food was less healthy, with more oil. The café was more expensive, but the portion was bigger and it had better reviews online. In the end, I think the café was worth it because the quality was better than expected, even though it cost more than the noodle place.",
  "questions": [
    "Which place was cheaper?",
    "Which place had a bigger portion and better reviews?",
    "Which place did the writer think was worth it, and why?"
  ]
}$json$::jsonb,
  true
),
(
  '8db46d58-a4d0-4417-9e4d-736035bd52e0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ was cheaper than ___, but ___.",
    "___ had a bigger portion and better reviews than ___.",
    "I think ___ was worth it because ___."
  ]
}$json$::jsonb,
  true
),
(
  '8db46d58-a4d0-4417-9e4d-736035bd52e0',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare restaurant choices with reasons",
    "Order food using comparatives",
    "Write a comparative food review"
  ],
  "challenge": "Tell me all about your favorite and least favorite places to eat, compared to each other!"
}$json$::jsonb,
  true
);
