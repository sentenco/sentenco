-- A2 Teens Unit 8: Travel and Holidays (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Travel Plans
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f5f4dd16-a90c-49ae-bc12-03ecd8649cdf',
  'Travel Plans',
  'A2',
  'teens',
  8,
  1,
  'Compare travel plans and destinations with reasons. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f5f4dd16-a90c-49ae-bc12-03ecd8649cdf',
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
  'f5f4dd16-a90c-49ae-bc12-03ecd8649cdf',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "✈️",
  "questions": [
    "Is your next trip cheaper or more expensive than your last one?",
    "Is it farther than your last destination?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'f5f4dd16-a90c-49ae-bc12-03ecd8649cdf',
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
      "word": "Cheaper than",
      "bg": "#E1F5EE"
    },
    {
      "word": "Farther than",
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
  'f5f4dd16-a90c-49ae-bc12-03ecd8649cdf',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is this trip cheaper than your last one?",
    "Why did you choose this destination?"
  ],
  "student": [
    "Yes, it's cheaper than last year's trip.",
    "I chose it because it's closer."
  ],
  "note": "Partial prompt: This trip is ___ than my last one because ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f5f4dd16-a90c-49ae-bc12-03ecd8649cdf',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This trip is [cheaper than] last year's."
    },
    {
      "speaker": "B",
      "text": "It's also [farther than] my last destination."
    },
    {
      "speaker": "A",
      "text": "I chose it [because] of the beaches."
    }
  ],
  "blanks": [
    "cheaper than",
    "farther than",
    "because"
  ]
}$json$::jsonb,
  true
),
(
  'f5f4dd16-a90c-49ae-bc12-03ecd8649cdf',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How does this trip compare to your last one?"
    },
    {
      "speaker": "B",
      "text": "It's cheaper than last year's trip, because we're staying with family."
    },
    {
      "speaker": "A",
      "text": "It's farther than my last destination, but I chose it because of the beaches."
    },
    {
      "speaker": "B",
      "text": "Sounds like an exciting choice!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Compare this trip to a past one, with a reason."
}$json$::jsonb,
  true
),
(
  'f5f4dd16-a90c-49ae-bc12-03ecd8649cdf',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This year, I'm planning a trip that's quite different from last year's. It's cheaper than my last trip, because we're staying with relatives instead of a hotel. It's also farther than where I went before, almost twice the distance, but I chose this destination because of the famous beaches and the lower cost of food. Compared to last year, I expect this trip to feel more relaxing, because we won't need to plan every detail ourselves.",
  "questions": [
    "Why is this trip cheaper than last year's?",
    "How does the distance compare to last year?",
    "Why did the writer choose this destination?"
  ]
}$json$::jsonb,
  true
),
(
  'f5f4dd16-a90c-49ae-bc12-03ecd8649cdf',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This trip is cheaper/more expensive than my last one because ___.",
    "It's farther/closer than ___.",
    "I chose it because ___."
  ]
}$json$::jsonb,
  true
),
(
  'f5f4dd16-a90c-49ae-bc12-03ecd8649cdf',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare a new trip to a past one",
    "Use comparatives with a reason",
    "Explain a travel choice"
  ],
  "challenge": "Tell me about a trip you're planning, compared to a past one!"
}$json$::jsonb,
  true
);

-- Lesson 2: Last Holiday
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6f6f589e-284f-46bb-a339-096ce064d41b',
  'Last Holiday',
  'A2',
  'teens',
  8,
  2,
  'Tell a past holiday story comparing it to expectations. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6f6f589e-284f-46bb-a339-096ce064d41b',
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
  '6f6f589e-284f-46bb-a339-096ce064d41b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧳",
  "questions": [
    "Was your last holiday better or worse than you expected?",
    "Did you discover something you didn't expect?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '6f6f589e-284f-46bb-a339-096ce064d41b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Flew",
      "bg": "#FAECE7"
    },
    {
      "word": "Better than expected",
      "bg": "#E1F5EE"
    },
    {
      "word": "Explored",
      "bg": "#EEEDFE"
    },
    {
      "word": "Discovered",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6f6f589e-284f-46bb-a339-096ce064d41b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Was your last holiday better than you expected?",
    "What did you discover?"
  ],
  "student": [
    "It was much better than expected.",
    "I discovered a hidden beach."
  ],
  "note": "Partial prompt: My last holiday was ___ than I expected because ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6f6f589e-284f-46bb-a339-096ce064d41b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [flew] to the coast last summer."
    },
    {
      "speaker": "B",
      "text": "It was [better than expected]."
    },
    {
      "speaker": "A",
      "text": "I [discovered] a quiet beach."
    }
  ],
  "blanks": [
    "flew",
    "better than expected",
    "discovered"
  ]
}$json$::jsonb,
  true
),
(
  '6f6f589e-284f-46bb-a339-096ce064d41b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Was your last holiday better or worse than you expected?"
    },
    {
      "speaker": "B",
      "text": "It was better than expected because the weather was perfect the whole week."
    },
    {
      "speaker": "A",
      "text": "I flew somewhere new and discovered a hidden beach that wasn't in any guidebook."
    },
    {
      "speaker": "B",
      "text": "That sounds like an amazing surprise!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Compare the trip to expectations, with a reason."
}$json$::jsonb,
  true
),
(
  '6f6f589e-284f-46bb-a339-096ce064d41b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last summer, I flew to a coastal town I had never visited before. Honestly, I expected it to be crowded and touristy, but it turned out to be much quieter than I imagined. I explored the old streets on the first day, and then I discovered a hidden beach that wasn't mentioned in any guidebook, which was better than anything I had planned. Compared to my last trip, this holiday felt more relaxing, because I had fewer plans and more time to simply enjoy the moment.",
  "questions": [
    "What did the writer expect the town to be like?",
    "What did the writer discover?",
    "How did this holiday compare to the last one?"
  ]
}$json$::jsonb,
  true
),
(
  '6f6f589e-284f-46bb-a339-096ce064d41b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I expected ___ to be ___, but it was ___.",
    "I discovered ___.",
    "Compared to my last trip, this one felt ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '6f6f589e-284f-46bb-a339-096ce064d41b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Tell a holiday story comparing it to expectations",
    "Use 'better/worse than expected'",
    "Compare two different trips"
  ],
  "challenge": "Tell me about a holiday that was different from what you expected!"
}$json$::jsonb,
  true
);

-- Lesson 3: Beach or City?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b470bf8e-ed32-4079-b677-f08e49b993b3',
  'Beach or City?',
  'A2',
  'teens',
  8,
  3,
  'Compare and justify a holiday preference. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b470bf8e-ed32-4079-b677-f08e49b993b3',
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
  'b470bf8e-ed32-4079-b677-f08e49b993b3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏙️",
  "questions": [
    "Is the beach more relaxing than the city for you?",
    "Compared to the city, is the beach more or less exciting?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'b470bf8e-ed32-4079-b677-f08e49b993b3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "More relaxing",
      "bg": "#FAECE7"
    },
    {
      "word": "Livelier",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cultural",
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
  'b470bf8e-ed32-4079-b677-f08e49b993b3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Compared to the city, is the beach more relaxing?",
    "Which do you prefer, and why?"
  ],
  "student": [
    "Yes, the beach is more relaxing than the city.",
    "I prefer the city because it's livelier."
  ],
  "note": "Partial prompt: Compared to ___, ___ is more ___ because ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b470bf8e-ed32-4079-b677-f08e49b993b3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The beach is [more relaxing] than the city."
    },
    {
      "speaker": "B",
      "text": "The city is [livelier] and more cultural."
    },
    {
      "speaker": "A",
      "text": "[Compared to] last year, I prefer quieter trips now."
    }
  ],
  "blanks": [
    "more relaxing",
    "livelier",
    "compared to"
  ]
}$json$::jsonb,
  true
),
(
  'b470bf8e-ed32-4079-b677-f08e49b993b3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Compared to the city, is the beach more relaxing for you?"
    },
    {
      "speaker": "B",
      "text": "Yes, definitely, the beach is more relaxing than the city because there's less noise."
    },
    {
      "speaker": "A",
      "text": "I prefer the city because it's livelier and has more culture, compared to a quiet beach town."
    },
    {
      "speaker": "B",
      "text": "We really do have different tastes!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Compare with a specific reason each time."
}$json$::jsonb,
  true
),
(
  'b470bf8e-ed32-4079-b677-f08e49b993b3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My friend and I have different holiday preferences, and comparing them says a lot about us. For me, the beach is more relaxing than the city, because there's less noise and I don't have to plan every hour. Compared to my beach trips, my friend's city trips are livelier and more cultural, with museums and events every day. Last year, we tried a compromise: half the trip at the beach, half in the city, and compared to doing only one, it turned out to be the best of both.",
  "questions": [
    "Why does the writer prefer the beach?",
    "How does the friend's preference compare?",
    "What compromise did they try last year?"
  ]
}$json$::jsonb,
  true
),
(
  'b470bf8e-ed32-4079-b677-f08e49b993b3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Compared to the city/beach, I prefer ___ because ___.",
    "My friend prefers ___ because ___.",
    "Last year, we tried ___, and compared to before, it was ___."
  ]
}$json$::jsonb,
  true
),
(
  'b470bf8e-ed32-4079-b677-f08e49b993b3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare beach and city holidays with reasons",
    "Use 'compared to' as a connector",
    "Describe a compromise between two preferences"
  ],
  "challenge": "Tell me if you prefer the beach or the city, compared to the other, and why!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Travel Message
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '59a6b1bc-684f-4ba7-afda-256c1d526b22',
  'A Travel Message',
  'A2',
  'teens',
  8,
  4,
  'Write a comparative travel message. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '59a6b1bc-684f-4ba7-afda-256c1d526b22',
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
  '59a6b1bc-684f-4ba7-afda-256c1d526b22',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💌",
  "questions": [
    "Is this trip better than you imagined so far?",
    "How is it compared to home?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '59a6b1bc-684f-4ba7-afda-256c1d526b22',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Better than",
      "bg": "#FAECE7"
    },
    {
      "word": "Wish you were here",
      "bg": "#E1F5EE"
    },
    {
      "word": "So far",
      "bg": "#EEEDFE"
    },
    {
      "word": "Compared to home",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '59a6b1bc-684f-4ba7-afda-256c1d526b22',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is the trip better than you expected so far?",
    "How does it compare to home?"
  ],
  "student": [
    "Yes, so far it's better than I imagined.",
    "It's much quieter compared to home."
  ],
  "note": "Partial prompt: So far, this trip is ___ than I expected. Compared to home, it's ___.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '59a6b1bc-684f-4ba7-afda-256c1d526b22',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This trip is [better than] I imagined."
    },
    {
      "speaker": "B",
      "text": "[So far], everything has been amazing."
    },
    {
      "speaker": "A",
      "text": "[Compared to home], it's much quieter."
    }
  ],
  "blanks": [
    "better than",
    "so far",
    "compared to home"
  ]
}$json$::jsonb,
  true
),
(
  '59a6b1bc-684f-4ba7-afda-256c1d526b22',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What would you write to a friend about your trip so far?"
    },
    {
      "speaker": "B",
      "text": "So far, this trip is better than I expected. Compared to home, everything moves slower here."
    },
    {
      "speaker": "A",
      "text": "I'd write about how the food is spicier than what we're used to."
    },
    {
      "speaker": "B",
      "text": "That sounds like a great message!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Compare the trip to expectations and to home."
}$json$::jsonb,
  true
),
(
  '59a6b1bc-684f-4ba7-afda-256c1d526b22',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Message from vacation: Hi! This trip is better than I imagined so far. Compared to home, everything here feels slower and calmer, which I really needed. The food is spicier than what we usually eat, but it's delicious. The view from our room is more beautiful than any photo I saw online. Compared to last year's trip, this one already feels more relaxing. Wish you were here! I'll tell you everything when I'm back.",
  "questions": [
    "How does the trip compare to the writer's expectations?",
    "How does the food compare to home?",
    "How does this trip compare to last year's?"
  ]
}$json$::jsonb,
  true
),
(
  '59a6b1bc-684f-4ba7-afda-256c1d526b22',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "So far, this trip is ___ than I expected.",
    "Compared to home, ___.",
    "Compared to last year's trip, this one is ___."
  ]
}$json$::jsonb,
  true
),
(
  '59a6b1bc-684f-4ba7-afda-256c1d526b22',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a comparative travel message",
    "Compare a trip to expectations and to home",
    "Use 'so far' and 'compared to'"
  ],
  "challenge": "Write a travel message comparing an imaginary trip to home and to a past trip!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e5f2fea9-a458-471b-9138-7e0c4c3825e9',
  'Unit Review',
  'A2',
  'teens',
  8,
  5,
  'Review travel plans, a past holiday, comparisons, and a travel message. [Combination tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e5f2fea9-a458-471b-9138-7e0c4c3825e9',
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
  'e5f2fea9-a458-471b-9138-7e0c4c3825e9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌍",
  "questions": [
    "Was your last trip cheaper or more expensive than planned?",
    "Was it better or worse than expected?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'e5f2fea9-a458-471b-9138-7e0c4c3825e9',
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
      "word": "Better than expected",
      "bg": "#E1F5EE"
    },
    {
      "word": "Compared to",
      "bg": "#EEEDFE"
    },
    {
      "word": "So far",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e5f2fea9-a458-471b-9138-7e0c4c3825e9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How did your trip compare to what you planned?",
    "Was it better or worse than expected?"
  ],
  "student": [
    "It was cheaper than planned.",
    "It was better than expected."
  ],
  "note": "Use comparatives with reasons throughout.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e5f2fea9-a458-471b-9138-7e0c4c3825e9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This trip was [cheaper than] I planned."
    },
    {
      "speaker": "B",
      "text": "It was [better than expected] overall."
    },
    {
      "speaker": "A",
      "text": "[Compared to] last year, I prefer this one."
    }
  ],
  "blanks": [
    "cheaper than",
    "better than expected",
    "compared to"
  ]
}$json$::jsonb,
  true
),
(
  'e5f2fea9-a458-471b-9138-7e0c4c3825e9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your travel plans and how they compared to reality."
    },
    {
      "speaker": "B",
      "text": "This trip was cheaper than I planned, because we stayed with family. It was better than expected overall."
    },
    {
      "speaker": "A",
      "text": "Compared to last year, do you prefer this trip?"
    },
    {
      "speaker": "B",
      "text": "Yes, definitely, because it felt more relaxing and less rushed."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'e5f2fea9-a458-471b-9138-7e0c4c3825e9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This year's trip was cheaper than I planned, because we stayed with relatives instead of a hotel. It turned out better than expected: the beaches were more beautiful than any photo, and the food was spicier and more delicious than back home. Compared to last year's rushed city trip, this one felt more relaxing because we had fewer plans. So far, this is my favorite trip, and I already want to compare it to wherever I go next year.",
  "questions": [
    "Why was this trip cheaper than planned?",
    "How did it compare to expectations?",
    "How did it compare to last year's trip?"
  ]
}$json$::jsonb,
  true
),
(
  'e5f2fea9-a458-471b-9138-7e0c4c3825e9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This trip was cheaper/more expensive than planned because ___.",
    "It was better/worse than expected because ___.",
    "Compared to last year, this trip ___."
  ]
}$json$::jsonb,
  true
),
(
  'e5f2fea9-a458-471b-9138-7e0c4c3825e9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare travel plans to reality",
    "Tell a holiday story with comparisons",
    "Compare holiday types",
    "Write a comparative travel message"
  ],
  "challenge": "Tell me all about your travel dreams, compared to your travel reality!"
}$json$::jsonb,
  true
);
