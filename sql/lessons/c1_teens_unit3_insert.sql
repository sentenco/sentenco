-- Sentenco C1 Teens -- Unit 3: Presentations, School Talks, and Discussions
-- Mode order: Output -> Performance -> Model
-- Content sourced from docs/curriculum/c1-teens.md and
-- c1-teens-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f410638c-3037-49fe-9321-c7aec5a43cfc',
  'Planning Your Talk',
  'C1',
  'teens',
  3,
  1,
  'Plan and rehearse a short, structured school-talk presentation, moving from script to notes rather than reading aloud.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e380e30d-446b-4f15-86ff-ec16e1fc8343',
  'Anticipating the Questions',
  'C1',
  'teens',
  3,
  2,
  'Design an "explain this for our class" talk based on a text/video, deciding what to include, how to sequence it, and where to anticipate likely questions.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e84ec028-2318-431f-9685-822f3f0efd11',
  'Co-Planning the Pitch',
  'C1',
  'teens',
  3,
  3,
  'Co-plan a joint presentation, negotiating roles and sub-topics, producing an outline with explicit time for questions or discussion.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7574663b-e7f5-49c0-b8ee-2d34f53e7181',
  'Delivering and Fielding Questions',
  'C1',
  'teens',
  3,
  4,
  'Deliver short talks and immediately field unscripted questions, staying calm, clarifying, admitting uncertainty, and extending answers without repeating prepared lines.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '310a2f35-0466-424b-853a-25694f34c2c8',
  'Converging on a Recommendation',
  'C1',
  'teens',
  3,
  5,
  'After related mini-talks, hold a guided discussion deciding which ideas to prioritise in a shared class recommendation, practising turn-taking and responding to others'' points live.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '65835fa3-1891-42b6-a86d-c1ce7fb0da16',
  'Q&A Focus',
  'C1',
  'teens',
  3,
  6,
  'Run a "Q&A focus" session where questioners ask probing but respectful questions and presenters practise listening fully, restating questions, and answering specifically, including admitting not knowing.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0f5b1a36-153b-40ae-8d3b-70610107863c',
  'How a Strong Presentation Works',
  'C1',
  'teens',
  3,
  7,
  'Analyse model teen presentations for structure, formality, pacing, and how opinions are expressed clearly without sounding aggressive or flat.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f04c6603-d33b-4af6-9cf6-b5b819cef4ee',
  'Strategies for Answering Well',
  'C1',
  'teens',
  3,
  8,
  'Study model Q&A sequences after a presentation, identifying clarifying questions, limit admission, linking answers back to main points, and composure under unexpected/critical questions.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4463f5c9-ce7c-428b-a049-61a02f452562',
  'Same Content, Different Audience',
  'C1',
  'teens',
  3,
  9,
  'Study how a strong presenter adapts content and explanation for different audiences, connecting presentation skills to earlier mediation/explanation work.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f410638c-3037-49fe-9321-c7aec5a43cfc',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Plan and rehearse a short talk on a personal interest, project, or social issue — with a clear intro, signposting, and conclusion. Work from notes, not a full script."
}$json$::jsonb,
  true
),
(
  'f410638c-3037-49fe-9321-c7aec5a43cfc',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Plan and rehearse a short, structured school-talk presentation, moving from script to notes rather than reading aloud.",
  "listenFor": "Whether delivery still sounds read-aloud (flat, word-for-word) versus genuinely spoken-from-notes (natural pacing, occasional self-correction).",
  "likelyResponses": [
    "A well-organised talk that's clearly memorised or read, with flat intonation and no natural variation — accurate content, B2-level delivery mode."
  ],
  "scorecardFocus": [
    {
      "dimension": "Naturalness",
      "note": "spoken delivery mode"
    },
    {
      "dimension": "Discourse Control",
      "note": "signposting"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f410638c-3037-49fe-9321-c7aec5a43cfc',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Read-aloud delivery → notes-based delivery: reduce the notes to bullet points only (no full sentences) and require the learner to speak the content freshly each time.",
  "interventionPrompts": [
    "This sounds memorised — try it again from just three words per point.",
    "Look up more — you're reading instead of talking to us.",
    "It's okay to pause and think — that's more natural than a perfect script."
  ]
}$json$::jsonb,
  true
),
(
  'f410638c-3037-49fe-9321-c7aec5a43cfc',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Deliver the same talk a second time with the notes taken away entirely.",
  "recovery": "If notes-based delivery causes the talk to fall apart, allow a hybrid: full sentences for the opening and closing only, bullets for the middle."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e380e30d-446b-4f15-86ff-ec16e1fc8343',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Design a short 'explain this for our class' talk based on a text or video. Decide what to include and where classmates are likely to have questions."
}$json$::jsonb,
  true
),
(
  'e380e30d-446b-4f15-86ff-ec16e1fc8343',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Design an \"explain this for our class\" talk based on a text/video, deciding what to include, how to sequence it, and where to anticipate likely questions.",
  "listenFor": "Whether the response still stays generic close, or whether it's begun to show specific anticipation.",
  "likelyResponses": [
    "A well-sequenced outline with a generic \"questions?\" note at the end, not actual anticipated questions."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "sequencing and anticipation"
    },
    {
      "dimension": "Precision",
      "note": ""
    }
  ]
}$json$::jsonb,
  true
),
(
  'e380e30d-446b-4f15-86ff-ec16e1fc8343',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Generic close → specific anticipation: name one specific likely classmate question and prepare a brief answer for it in advance.",
  "interventionPrompts": [
    "What will someone actually ask you about this? Guess a real question.",
    "Have you prepared an answer, or just left space for questions?",
    "Where in your talk would you naturally invite that question?"
  ]
}$json$::jsonb,
  true
),
(
  'e380e30d-446b-4f15-86ff-ec16e1fc8343',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a second anticipated question from a different angle (a sceptical classmate vs. a confused one).",
  "recovery": "Ask \"what part of this might confuse someone in this class specifically?\" as a direct route to a real anticipated question."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e84ec028-2318-431f-9685-822f3f0efd11',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "With your group, co-plan a joint presentation. Divide roles and build a shared outline with a real Q&A slot built in."
}$json$::jsonb,
  true
),
(
  'e84ec028-2318-431f-9685-822f3f0efd11',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Co-plan a joint presentation, negotiating roles and sub-topics, producing an outline with explicit time for questions or discussion.",
  "listenFor": "Whether role division is negotiated explicitly (with reasons) or just defaults to whoever spoke first; whether the Q&A slot is genuinely planned for or an afterthought.",
  "likelyResponses": [
    "Roles get assigned quickly without discussion (\"you do this part, I'll do that part\") with no reasoning and no real Q&A planning."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "negotiated, reasoned planning"
    },
    {
      "dimension": "Interaction Control",
      "note": ""
    }
  ]
}$json$::jsonb,
  true
),
(
  'e84ec028-2318-431f-9685-822f3f0efd11',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Quick, unreasoned assignment → negotiated, reasoned roles: \"I'll take the intro since I'm more comfortable opening, and you take the data part since you found those sources — that also means you should field questions about them.\"",
  "interventionPrompts": [
    "Why did you get that part specifically? Is there a reason, or just chance?",
    "Where does the question time go in your outline — is it planned or just assumed?",
    "Who's answering questions about which part?"
  ]
}$json$::jsonb,
  true
),
(
  'e84ec028-2318-431f-9685-822f3f0efd11',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Introduce a late change (one group member is absent on presentation day) requiring role renegotiation.",
  "recovery": "If negotiation stalls, have each member state one thing they're good at or interested in before assigning roles."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7574663b-e7f5-49c0-b8ee-2d34f53e7181',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Deliver your planned talk. Then field 2-3 unscripted questions from your classmates or teacher — stay calm and specific, don't just repeat your prepared lines."
}$json$::jsonb,
  true
),
(
  '7574663b-e7f5-49c0-b8ee-2d34f53e7181',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Deliver short talks and immediately field unscripted questions, staying calm, clarifying, admitting uncertainty, and extending answers without repeating prepared lines.",
  "listenFor": "Whether answers to unscripted questions are genuine responses or just a repeated fragment of the prepared talk; whether \"I don't know\" is handled gracefully or avoided awkwardly.",
  "likelyResponses": [
    "A question the talk didn't cover gets answered by repeating a related sentence from the talk, rather than actually engaging the new question."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "genuine Q&A engagement"
    },
    {
      "dimension": "Pragmatics",
      "note": "graceful uncertainty admission"
    }
  ]
}$json$::jsonb,
  true
),
(
  '7574663b-e7f5-49c0-b8ee-2d34f53e7181',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Repeated-fragment answer → genuine engagement: if the answer isn't known, say so directly and offer what related thing is known instead, rather than deflecting with an unrelated repeated line.",
  "interventionPrompts": [
    "That question wasn't in your talk — try answering it directly, even if it's short.",
    "It's fine to say 'I'm not sure, but I think...' — try that instead of repeating your last point.",
    "Extend that answer with one more sentence."
  ]
}$json$::jsonb,
  true
),
(
  '7574663b-e7f5-49c0-b8ee-2d34f53e7181',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have a peer ask a deliberately unexpected question to test composure.",
  "recovery": "If a learner freezes on an unexpected question, allow an explicit \"that's a good question, give me a second\" as a legitimate recovery move."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '310a2f35-0466-424b-853a-25694f34c2c8',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "After hearing several related mini-talks, join the discussion and help the group converge on one shared, prioritized recommendation."
}$json$::jsonb,
  true
),
(
  '310a2f35-0466-424b-853a-25694f34c2c8',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "After related mini-talks, hold a guided discussion deciding which ideas to prioritise in a shared class recommendation, practising turn-taking and responding to others' points live.",
  "listenFor": "Whether learners respond to what the previous speaker actually said (building on or challenging it) or just deliver their own pre-formed point regardless of what came before.",
  "likelyResponses": [
    "Each learner states their own preferred idea in turn without referencing anyone else's point — parallel monologues rather than a real discussion."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "building on others' turns"
    },
    {
      "dimension": "Discourse Control",
      "note": "converging toward a shared priority"
    }
  ]
}$json$::jsonb,
  true
),
(
  '310a2f35-0466-424b-853a-25694f34c2c8',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Parallel monologues → responsive discussion: \"Building on what [name] said, I think we should prioritise X because it also solves the problem [previous speaker] raised.\"",
  "interventionPrompts": [
    "Did you respond to what [name] just said, or just say your own idea?",
    "Reference someone else's point before adding yours.",
    "Are we actually converging on something, or still just listing ideas?"
  ]
}$json$::jsonb,
  true
),
(
  '310a2f35-0466-424b-853a-25694f34c2c8',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Set a hard time limit for reaching the final priority list to force real convergence.",
  "recovery": "If the discussion stays parallel, explicitly require each speaker to reference the previous speaker's point before adding a new one."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '65835fa3-1891-42b6-a86d-c1ce7fb0da16',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Take a turn as presenter or questioner. Questioners: ask something probing but respectful. Presenters: restate the question before answering it."
}$json$::jsonb,
  true
),
(
  '65835fa3-1891-42b6-a86d-c1ce7fb0da16',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Run a \"Q&A focus\" session where questioners ask probing but respectful questions and presenters practise listening fully, restating questions, and answering specifically, including admitting not knowing.",
  "listenFor": "Whether presenters restate the question before answering (a control move that also buys thinking time) or jump straight to a possibly-mismatched answer.",
  "likelyResponses": [
    "Answers a slightly different question than the one actually asked, because they didn't pause to check what was really being asked."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "restate-then-answer discipline"
    },
    {
      "dimension": "Pragmatics",
      "note": "graceful \"I don't know\" handling"
    }
  ]
}$json$::jsonb,
  true
),
(
  '65835fa3-1891-42b6-a86d-c1ce7fb0da16',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Mismatched answer → restate-then-answer: \"So you're asking whether this would work for younger students too — I think...\"",
  "interventionPrompts": [
    "Restate the question in your own words before answering — did you actually understand it?",
    "(To questioners) \"Ask something that pushes a little further, not just a yes/no.\"",
    "That answer didn't quite match the question — try again."
  ]
}$json$::jsonb,
  true
),
(
  '65835fa3-1891-42b6-a86d-c1ce7fb0da16',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have questioners ask a follow-up to a follow-up, requiring sustained engagement on one thread.",
  "recovery": "If restating feels awkward, model the frame \"so you're asking...\" explicitly before asking learners to try it themselves."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0f5b1a36-153b-40ae-8d3b-70610107863c',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you a model teen presentation. Identify the specific structural and tonal choices that make it work."
}$json$::jsonb,
  true
),
(
  '0f5b1a36-153b-40ae-8d3b-70610107863c',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyse model teen presentations for structure, formality, pacing, and how opinions are expressed clearly without sounding aggressive or flat.",
  "listenFor": "Whether learners notice the specific balance point between \"too flat\" and \"too aggressive\" when opinions are expressed, not just that the presenter \"sounds good.\"",
  "likelyResponses": [
    "The presenter sounds confident."
  ],
  "scorecardFocus": [
    {
      "dimension": "Naturalness",
      "note": "confident-without-aggressive register"
    },
    {
      "dimension": "Pragmatics",
      "note": ""
    }
  ]
}$json$::jsonb,
  true
),
(
  '0f5b1a36-153b-40ae-8d3b-70610107863c',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague confidence-noticing → balance-point analysis: \"They state their opinion clearly — 'I really think...' — but soften the edges with 'though I get why some people disagree,' which keeps it from sounding aggressive.\"",
  "interventionPrompts": [
    "How do they sound confident without sounding pushy? Find the exact phrase.",
    "What would make this sound too aggressive if it were said differently?",
    "What would make it sound too flat instead?"
  ]
}$json$::jsonb,
  true
),
(
  '0f5b1a36-153b-40ae-8d3b-70610107863c',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners construct a deliberately \"too aggressive\" and \"too flat\" version of one line, then find the balanced middle themselves.",
  "recovery": "Point to a specific phrase and ask only \"does this sound too soft, too strong, or about right?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f04c6603-d33b-4af6-9cf6-b5b819cef4ee',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you a model Q&A. Identify the specific strategies the presenter uses — and connect them to what you practiced in Lesson 6."
}$json$::jsonb,
  true
),
(
  'f04c6603-d33b-4af6-9cf6-b5b819cef4ee',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Study model Q&A sequences after a presentation, identifying clarifying questions, limit admission, linking answers back to main points, and composure under unexpected/critical questions.",
  "listenFor": "Whether the response still stays non specific praise, or whether it's begun to show strategy naming.",
  "likelyResponses": [
    "The presenter answers the questions well."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "linking answers to main points"
    },
    {
      "dimension": "Pragmatics",
      "note": "graceful limit admission"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f04c6603-d33b-4af6-9cf6-b5b819cef4ee',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Non-specific praise → strategy-naming: \"They link this answer back to their main point by saying 'which is exactly why...' — that ties a random-seeming question back to the core argument.\"",
  "interventionPrompts": [
    "What specific strategy are they using in this answer?",
    "Find the moment they admit a limit — how do they phrase it without sounding unprepared?",
    "Could you use that same linking phrase in your own Q&A?"
  ]
}$json$::jsonb,
  true
),
(
  'f04c6603-d33b-4af6-9cf6-b5b819cef4ee',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners apply one identified strategy to a recorded answer from their own Lesson 6 session.",
  "recovery": "If strategy-naming stalls, point directly to the linking phrase and ask only \"what is this doing here?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4463f5c9-ce7c-428b-a049-61a02f452562',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you one presenter addressing different audiences — younger students, classmates, teachers — with similar content. Map what changes in detail, examples, and tone."
}$json$::jsonb,
  true
),
(
  '4463f5c9-ce7c-428b-a049-61a02f452562',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Study how a strong presenter adapts content and explanation for different audiences, connecting presentation skills to earlier mediation/explanation work.",
  "listenFor": "Whether the response still stays unspecific noticing, or whether it's begun to show specific mapping.",
  "likelyResponses": [
    "They talk differently to little kids than to teachers."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "audience-specific adaptation"
    },
    {
      "dimension": "Precision",
      "note": ""
    }
  ]
}$json$::jsonb,
  true
),
(
  '4463f5c9-ce7c-428b-a049-61a02f452562',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Unspecific noticing → specific mapping: \"For younger students they use a concrete example with a picture-like description; for teachers they use the technical term directly without explaining it.\"",
  "interventionPrompts": [
    "What specifically changes — the words, the examples, or both?",
    "How does this connect to the mediation work from Unit 2 — is this the same skill?",
    "Adapt one of your own explanations for a younger audience right now."
  ]
}$json$::jsonb,
  true
),
(
  '4463f5c9-ce7c-428b-a049-61a02f452562',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners adapt the same content for a third, new audience (e.g. parents) not shown in the model.",
  "recovery": "If specific mapping doesn't emerge, isolate one example and ask \"how would this exact example change for a 7-year-old versus a teacher?\""
}$json$::jsonb,
  true
);
