-- A2 Teens Unit 12: Projects, Events, and Final Showcase (5 lessons) — TIERED (Bridge)
-- Regenerated per the Sentenco Intra-Level Progression Framework.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Planning a Class Project
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6c30636e-a127-4646-98d9-0fa67fe083c6',
  'Planning a Class Project',
  'A2',
  'teens',
  12,
  1,
  'Plan a group project based on a past group-work problem. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6c30636e-a127-4646-98d9-0fa67fe083c6',
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
  '6c30636e-a127-4646-98d9-0fa67fe083c6',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🗂️",
  "questions": [
    "How would you divide a group project fairly, based on a time it wasn't?",
    "Which part usually goes slowly?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '6c30636e-a127-4646-98d9-0fa67fe083c6',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Divide fairly",
      "bg": "#FAECE7"
    },
    {
      "word": "Not the same as equal",
      "bg": "#E1F5EE"
    },
    {
      "word": "Slow part",
      "bg": "#EEEDFE"
    },
    {
      "word": "Everyone agrees",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6c30636e-a127-4646-98d9-0fa67fe083c6',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How would you divide the work fairly?",
    "Which part do you think will be slow?"
  ],
  "student": [
    "I'd divide it by skill, not just equal parts.",
    "I think the writing part will be slow, like last time."
  ],
  "note": "Use a past group-work problem to plan this project.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6c30636e-a127-4646-98d9-0fa67fe083c6',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "We need to [divide fairly], [not the same as equal]."
    },
    {
      "speaker": "B",
      "text": "The [slow part] will be writing again."
    },
    {
      "speaker": "A",
      "text": "First, [everyone agrees] on the plan."
    }
  ],
  "blanks": [
    "divide fairly",
    "slow part",
    "everyone agrees"
  ]
}$json$::jsonb,
  true
),
(
  '6c30636e-a127-4646-98d9-0fa67fe083c6',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How should we divide this project fairly, based on what went wrong last time?"
    },
    {
      "speaker": "B",
      "text": "Last time we split it equally, and it failed, because equal isn't the same as fair. This time let's divide it by skill."
    },
    {
      "speaker": "A",
      "text": "I think the writing part will be slow again, unless everyone agrees on a deadline now."
    },
    {
      "speaker": "B",
      "text": "Good idea, let's agree on that first."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use a past group-project problem to plan this one."
}$json$::jsonb,
  true
),
(
  '6c30636e-a127-4646-98d9-0fa67fe083c6',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Our last group project didn't go well, and I don't want to repeat the same mistake. Last time, we divided the work equally: everyone got the same number of tasks. But equal wasn't the same as fair, because two people finished in an hour, while another person struggled for a week on something that wasn't their strong point. This time, I want to divide the work by skill instead, even if that means some people do more small tasks than others. I also think the writing part will be slow again, because that's where we got stuck last time. So this time, everyone should agree on a deadline for writing before we even start.",
  "questions": [
    "Why didn't dividing the project equally work last time?",
    "Which part does the writer think will be slow, and why?",
    "What does the writer want everyone to agree on first?"
  ]
}$json$::jsonb,
  true
),
(
  '6c30636e-a127-4646-98d9-0fa67fe083c6',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Describe a group project that didn't go well. What went wrong?",
    "Plan a fairer way to divide a similar project now.",
    "What should the group agree on before starting, based on last time?"
  ]
}$json$::jsonb,
  true
),
(
  '6c30636e-a127-4646-98d9-0fa67fe083c6',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Plan a project based on a specific past problem",
    "Explain 'equal' is not always the same as 'fair'",
    "Say what the group should agree on first"
  ],
  "challenge": "Plan a group project, using something that went wrong in a past one."
}$json$::jsonb,
  true
);

-- Lesson 2: Project Timeline
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cbb1f29f-b957-41bd-a879-f08c6e2e9cfb',
  'Project Timeline',
  'A2',
  'teens',
  12,
  2,
  'Build a realistic timeline based on a past mistake. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cbb1f29f-b957-41bd-a879-f08c6e2e9cfb',
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
  'cbb1f29f-b957-41bd-a879-f08c6e2e9cfb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🕐",
  "questions": [
    "Did a past project take longer than you planned?",
    "Would you add extra time this time?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'cbb1f29f-b957-41bd-a879-f08c6e2e9cfb',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Took longer than",
      "bg": "#FAECE7"
    },
    {
      "word": "Extra time",
      "bg": "#E1F5EE"
    },
    {
      "word": "Realistic",
      "bg": "#EEEDFE"
    },
    {
      "word": "Step by step",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cbb1f29f-b957-41bd-a879-f08c6e2e9cfb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Did the last project take longer than planned?",
    "Would you add extra time this time?"
  ],
  "student": [
    "Yes, it took much longer than planned.",
    "This time, I'd add extra time for each step."
  ],
  "note": "Explain the timeline using a past mistake as the reason.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cbb1f29f-b957-41bd-a879-f08c6e2e9cfb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The last project [took longer than] we planned."
    },
    {
      "speaker": "B",
      "text": "This time, let's add [extra time]."
    },
    {
      "speaker": "A",
      "text": "We need a [realistic] plan."
    }
  ],
  "blanks": [
    "took longer than",
    "extra time",
    "realistic"
  ]
}$json$::jsonb,
  true
),
(
  'cbb1f29f-b957-41bd-a879-f08c6e2e9cfb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Did the last project take longer than planned?"
    },
    {
      "speaker": "B",
      "text": "Much longer. We thought a week was enough, but it took almost two weeks."
    },
    {
      "speaker": "A",
      "text": "This time, let's add extra time to each step, step by step, so one delay doesn't ruin everything."
    },
    {
      "speaker": "B",
      "text": "That's a more realistic plan than last time."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use a past mistake to explain why you're adding extra time."
}$json$::jsonb,
  true
),
(
  'cbb1f29f-b957-41bd-a879-f08c6e2e9cfb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "When we planned our last big project, we thought one week for research would be enough. It actually took ten days, and the writing part, which we thought would take two days, took five, because we didn't plan time for changes after feedback. This time, I want our plan to be realistic, not hopeful. That means adding extra time to each step, not just at the end. It might feel less exciting to plan for delays before they happen, but last time taught me that every project takes longer than planned, never shorter. I'd rather finish a realistic plan than fail an exciting one.",
  "questions": [
    "Which two steps took longer than planned last time?",
    "Why does the writer want to add extra time to every step, not just the end?",
    "Why does the writer prefer a realistic plan over an exciting one?"
  ]
}$json$::jsonb,
  true
),
(
  'cbb1f29f-b957-41bd-a879-f08c6e2e9cfb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Describe a time something took longer than you planned.",
    "Plan a realistic timeline with extra time, and explain why.",
    "Explain why a realistic plan can be better than an exciting one."
  ]
}$json$::jsonb,
  true
),
(
  'cbb1f29f-b957-41bd-a879-f08c6e2e9cfb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Explain a timeline using a past mistake",
    "Say why extra time helps",
    "Compare a realistic plan to an exciting one"
  ],
  "challenge": "Build a project timeline with extra time, using a past mistake as your reason."
}$json$::jsonb,
  true
);

-- Lesson 3: What Went Well?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a9659d47-d7a2-4d3f-96c0-d6d9e8ff6a0e',
  'What Went Well?',
  'A2',
  'teens',
  12,
  3,
  'Reflect on a project: what went well, what didn''t, and the real reason why. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a9659d47-d7a2-4d3f-96c0-d6d9e8ff6a0e',
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
  'a9659d47-d7a2-4d3f-96c0-d6d9e8ff6a0e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔍",
  "questions": [
    "Looking back at a project, what part mattered more than you thought?",
    "What was the real reason for a problem?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'a9659d47-d7a2-4d3f-96c0-d6d9e8ff6a0e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Looking back",
      "bg": "#FAECE7"
    },
    {
      "word": "The real reason",
      "bg": "#E1F5EE"
    },
    {
      "word": "Seemed like",
      "bg": "#EEEDFE"
    },
    {
      "word": "Learned for next time",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a9659d47-d7a2-4d3f-96c0-d6d9e8ff6a0e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What mattered more than you thought, looking back?",
    "What was the real reason for the problem?"
  ],
  "student": [
    "Looking back, planning mattered more than I thought.",
    "The real reason was bad communication, not lack of effort."
  ],
  "note": "Go beyond 'it went well or badly'. Find the real reason.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a9659d47-d7a2-4d3f-96c0-d6d9e8ff6a0e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Looking back], planning mattered most."
    },
    {
      "speaker": "B",
      "text": "[The real reason] was bad communication."
    },
    {
      "speaker": "A",
      "text": "I [learned for next time]."
    }
  ],
  "blanks": [
    "looking back",
    "the real reason",
    "learned for next time"
  ]
}$json$::jsonb,
  true
),
(
  'a9659d47-d7a2-4d3f-96c0-d6d9e8ff6a0e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Looking back at the project, what mattered more than you thought?"
    },
    {
      "speaker": "B",
      "text": "The planning stage. We rushed it to start the 'real work' sooner, but looking back, it was the most important part."
    },
    {
      "speaker": "A",
      "text": "What was the real reason for your biggest problem?"
    },
    {
      "speaker": "B",
      "text": "It seemed like people were lazy, but the real reason was bad communication. We learned that for next time."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Go beyond the surface and find the real reason."
}$json$::jsonb,
  true
),
(
  'a9659d47-d7a2-4d3f-96c0-d6d9e8ff6a0e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Thinking about this project properly means going deeper than just saying what went well and what didn't. Looking back, the planning stage mattered more than we thought at the time. We treated it as a small step before the 'real work,' but it actually decided everything else. When I think about our biggest problem, a missed deadline, it seemed like people weren't trying hard enough. But the real reason wasn't lack of effort. It was bad communication about who was doing what. Two people thought someone else was doing the same task, and one task got missed completely. What I learned for next time is simple: never assume everyone knows who's responsible for what. Say it out loud, every time.",
  "questions": [
    "Why did planning matter more than expected, looking back?",
    "What seemed like the reason for the missed deadline, and what was the real reason?",
    "What did the writer learn for next time?"
  ]
}$json$::jsonb,
  true
),
(
  'a9659d47-d7a2-4d3f-96c0-d6d9e8ff6a0e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Looking back at a project, what mattered more than you thought at the time?",
    "Find the real reason behind a problem, not just what it seemed like.",
    "What did you learn for next time?"
  ]
}$json$::jsonb,
  true
),
(
  'a9659d47-d7a2-4d3f-96c0-d6d9e8ff6a0e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Go beyond the surface to find the real reason",
    "Compare what seemed true to what was actually true",
    "Say what I learned for next time"
  ],
  "challenge": "Reflect on a past project: what mattered more than expected, what was the real reason for a problem, and what did you learn for next time?"
}$json$::jsonb,
  true
);

-- Lesson 4: My Final Showcase Post
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd7bce18e-99f9-48f8-b54a-4fa056eeb8ca',
  'My Final Showcase Post',
  'A2',
  'teens',
  12,
  4,
  'Write a final post about your progress this level, with real evidence. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd7bce18e-99f9-48f8-b54a-4fa056eeb8ca',
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
  'd7bce18e-99f9-48f8-b54a-4fa056eeb8ca',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏆",
  "questions": [
    "What's your strongest proof that you've improved this level?",
    "What will you keep using after this level?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'd7bce18e-99f9-48f8-b54a-4fa056eeb8ca',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Proof",
      "bg": "#FAECE7"
    },
    {
      "word": "Compared to before",
      "bg": "#E1F5EE"
    },
    {
      "word": "The biggest change",
      "bg": "#EEEDFE"
    },
    {
      "word": "Keep using",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd7bce18e-99f9-48f8-b54a-4fa056eeb8ca',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What's your strongest proof of improvement?",
    "What will you keep using?"
  ],
  "student": [
    "My proof is that I can explain reasons now, not just facts.",
    "I'll keep using the habit of thinking 'why' before I write."
  ],
  "note": "Write your own showcase post using real evidence from this level, not a general statement.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd7bce18e-99f9-48f8-b54a-4fa056eeb8ca',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [proof] is my writing from Unit 1 [compared to before]."
    },
    {
      "speaker": "B",
      "text": "[The biggest change] is how I explain reasons now."
    },
    {
      "speaker": "A",
      "text": "I'll [keep using] this habit."
    }
  ],
  "blanks": [
    "proof",
    "compared to before",
    "keep using"
  ]
}$json$::jsonb,
  true
),
(
  'd7bce18e-99f9-48f8-b54a-4fa056eeb8ca',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's your strongest proof that you've improved this level?"
    },
    {
      "speaker": "B",
      "text": "My writing now explains reasons, not just facts, compared to before. I couldn't do that at the start."
    },
    {
      "speaker": "A",
      "text": "For me, comparing my Unit 1 writing to my Unit 12 writing, my sentences connect ideas now instead of just listing them."
    },
    {
      "speaker": "B",
      "text": "That's real, clear progress."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Use specific proof from earlier in the level, not a vague claim."
}$json$::jsonb,
  true
),
(
  'd7bce18e-99f9-48f8-b54a-4fa056eeb8ca',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This post is about my progress this whole level, and I want it to be based on real proof, not just a feeling that I've 'improved'. Compared to how I wrote in Unit 1, my sentences described things: this is my style, this is my hobby. They didn't explain why. By Units 9 to 12, I was writing about reasons, choices, and things I used to believe that changed, which I couldn't do convincingly before. The clearest proof isn't a grade. It's that I can now explain an opinion instead of just stating one, and I can connect one idea to another instead of just listing them. The biggest thing I want to keep using isn't a grammar rule at all. It's the habit of asking 'why' and 'compared to what' before I write anything down.",
  "questions": [
    "How did the writer's Unit 1 writing differ from Unit 9-12 writing?",
    "What does the writer say is the clearest proof of improvement?",
    "What does the writer want to keep using, and why is it more than a grammar rule?"
  ]
}$json$::jsonb,
  true
),
(
  'd7bce18e-99f9-48f8-b54a-4fa056eeb8ca',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Compare your earliest writing this level to your most recent writing. Give real proof.",
    "What's the clearest proof that you've improved, not just a feeling?",
    "What habit, not just a grammar rule, do you want to keep using?"
  ]
}$json$::jsonb,
  true
),
(
  'd7bce18e-99f9-48f8-b54a-4fa056eeb8ca',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a progress post with real proof, not a vague claim",
    "Compare early-level work to late-level work",
    "Name a habit, not just a grammar rule, to keep using"
  ],
  "challenge": "Write your own final showcase post, using real proof from this level to show your progress."
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '57f7a457-b7fb-4826-88fb-eaed32ff415b',
  'Unit Review',
  'A2',
  'teens',
  12,
  5,
  'Connect project planning, timelines, reflection, and the final showcase across the level. [Bridge tier]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '57f7a457-b7fb-4826-88fb-eaed32ff415b',
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
  '57f7a457-b7fb-4826-88fb-eaed32ff415b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎉",
  "questions": [
    "What's the one skill that connects everything you've learned this level?",
    "What proof would you show someone?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '57f7a457-b7fb-4826-88fb-eaed32ff415b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Connects to",
      "bg": "#FAECE7"
    },
    {
      "word": "Proof",
      "bg": "#E1F5EE"
    },
    {
      "word": "The real reason",
      "bg": "#EEEDFE"
    },
    {
      "word": "Keep using",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '57f7a457-b7fb-4826-88fb-eaed32ff415b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What skill connects everything this level?",
    "What proof would show it?"
  ],
  "student": [
    "The skill is explaining reasons, and my later writing proves it.",
    "I'd show my final showcase post as proof."
  ],
  "note": "Connect this unit's lessons to earlier units in the level, not just to each other.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '57f7a457-b7fb-4826-88fb-eaed32ff415b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This project taught me to find [the real reason]."
    },
    {
      "speaker": "B",
      "text": "My [proof] of growth is in my later writing."
    },
    {
      "speaker": "A",
      "text": "I'll [keep using] that habit."
    }
  ],
  "blanks": [
    "the real reason",
    "proof",
    "keep using"
  ]
}$json$::jsonb,
  true
),
(
  '57f7a457-b7fb-4826-88fb-eaed32ff415b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's the one skill that connects everything you've learned this level?"
    },
    {
      "speaker": "B",
      "text": "Finding the real reason behind a problem. It's in this project, but also in Unit 9's bad-day lesson and Unit 11's goal lesson."
    },
    {
      "speaker": "A",
      "text": "I'd say it's using real proof instead of just opinions. My final showcase post is the clearest proof of that."
    },
    {
      "speaker": "B",
      "text": "It's nice to see it all connect like that."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B. Connect this unit's lessons to earlier units in the level, not just to each other."
}$json$::jsonb,
  true
),
(
  '57f7a457-b7fb-4826-88fb-eaed32ff415b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Finishing this project and this level at the same time makes it easy to see how they connect. Planning the class project fairly, based on what failed last time, used the same idea as finding the real reason behind a problem, in the reflection lesson. That idea goes back even further, to Unit 9, where I first learned to compare a bad day to what it taught me, not just describe it. Building a realistic timeline echoed Unit 11's lesson about basing a plan on real experience, not hope. And this final showcase post pulls all of that together into one piece of proof: a comparison between who I was at Unit 1 and who I am now, that I can actually explain with real reasons, not just claim. If I had to name the one skill that ties this whole level together, it would be this: asking why something happened, and what it's proof of, before deciding what to do next.",
  "questions": [
    "How does planning the class project connect to the reflection lesson?",
    "How does the timeline lesson connect to Unit 11?",
    "What single skill does the writer say ties the entire level together?"
  ]
}$json$::jsonb,
  true
),
(
  '57f7a457-b7fb-4826-88fb-eaed32ff415b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Connect this unit's lessons to at least one earlier unit in the level.",
    "Name the one skill or habit that ties the whole level together for you, with proof.",
    "What are you most sure you'll keep using after this level ends?"
  ]
}$json$::jsonb,
  true
),
(
  '57f7a457-b7fb-4826-88fb-eaed32ff415b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Connect this unit's lessons to earlier units in the level",
    "Name one skill that ties the level together, with proof",
    "Say what will really carry forward"
  ],
  "challenge": "Connect this unit to at least one earlier unit in the level, and tell me the one skill you're most sure you'll keep using."
}$json$::jsonb,
  true
);
