-- Sentenco C1 Teens -- Unit 4: Register, Tone, and Audience Awareness
-- Mode order: Performance -> Model -> Output
-- Content sourced from docs/curriculum/c1-teens.md and
-- c1-teens-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '15a3ddab-d64a-4ad5-aa71-5cb6098e2b1e',
  'Same Message, Different People',
  'C1',
  'teens',
  4,
  1,
  'Respond in real time to prompts requiring quick tone shifts for the same core message across audiences (friend/teacher/email), while keeping meaning intact.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '96481f1a-c34e-488b-8631-44da6da795b4',
  'Reformulating on the Spot',
  'C1',
  'teens',
  4,
  2,
  'Give an intentionally off-tone response, then immediately reformulate it to fit the specified audience — practising deliberate control over tone shifts.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '58327f61-2242-4cb3-a32e-c0b9fa532afe',
  'Catching the Wrong Tone',
  'C1',
  'teens',
  4,
  3,
  'Recognise when tone clashes with context and negotiate a better way to say the same thing, in a paired "misreading the situation" role-play.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9437f5bb-15e7-4ba9-a019-75eace1cab88',
  'The Features of Register',
  'C1',
  'teens',
  4,
  4,
  'Analyse model dialogues showing tone/register shifts between audiences, identifying specific linguistic markers (contractions, slang, modals, hedging, address forms).',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2b06e521-704a-4102-ac47-2e38326a90a1',
  'What Stays the Same',
  'C1',
  'teens',
  4,
  5,
  'Examine how the same issue is explained to different audiences (younger pupils, parents, classmates), mapping how detail, examples, and attitude signals adapt while the key message stays stable.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5d9b518a-aa18-4424-bde8-fb2e5da85815',
  'Balancing Formality and Directness',
  'C1',
  'teens',
  4,
  6,
  'Study how teens decide to phrase a sensitive message (apology to a teacher, request to a principal, clarification after a misunderstanding), weighing formality, directness, and politeness.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f6dbe3cb-3a1a-4fbe-a67d-8cb98d3b2b31',
  'Rewriting for a New Audience',
  'C1',
  'teens',
  4,
  7,
  'Write/record a short message for one audience, then systematically rewrite it for a different audience, showing controlled tone/register shifts without altering core meaning or commitments.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6eef3eee-10a1-4f87-ba43-e0def6719d21',
  'Your Personal Style Guide',
  'C1',
  'teens',
  4,
  8,
  'Create a personal/class "style guide" of how to talk/write to different audiences about the same topic, including specific phrases and structures for each register.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7a324e2b-5916-4073-8500-5d888f18f205',
  'Writing the Class Guidelines',
  'C1',
  'teens',
  4,
  9,
  'Co-author a set of "tone and audience" guidelines for common teen situations, articulating why certain choices suit each context.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '15a3ddab-d64a-4ad5-aa71-5cb6098e2b1e',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "You'll get the same message to deliver to different people in quick succession — a friend, a teacher, in an email. Keep the meaning the same, but genuinely change how you say it."
}$json$::jsonb,
  true
),
(
  '15a3ddab-d64a-4ad5-aa71-5cb6098e2b1e',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Respond in real time to prompts requiring quick tone shifts for the same core message across audiences (friend/teacher/email), while keeping meaning intact.",
  "listenFor": "Whether the underlying message stays intact across versions (a common failure is that formality changes but so does the actual content/commitment).",
  "likelyResponses": [
    "To a friend: \"This is so unfair, I'm not doing it.\" To a teacher: \"I don't want to do this.\" (formality barely shifts, and the teacher version is arguably less appropriate than intended — still too blunt for the audience.)"
  ],
  "scorecardFocus": [
    {
      "dimension": "Register Control",
      "note": "genuine formality shifts"
    },
    {
      "dimension": "Naturalness",
      "note": ""
    }
  ]
}$json$::jsonb,
  true
),
(
  '15a3ddab-d64a-4ad5-aa71-5cb6098e2b1e',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Minimal formality shift → real register shift: \"I'm finding this assignment quite difficult — could we talk about an extension?\" for the teacher version, keeping the same underlying request.",
  "interventionPrompts": [
    "That still sounds like you're talking to a friend — try again for a teacher.",
    "What's actually different between how you'd say this to each person?",
    "Keep the same request — just change how it's delivered."
  ]
}$json$::jsonb,
  true
),
(
  '15a3ddab-d64a-4ad5-aa71-5cb6098e2b1e',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third audience (a school newsletter) requiring yet another register.",
  "recovery": "If shifts stay minimal, supply one concrete formality marker to add (a modal like \"could,\" dropping a contraction) as a starting point."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '96481f1a-c34e-488b-8631-44da6da795b4',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Give a deliberately blunt, casual, or overly formal response. Then immediately reformulate it to fit the audience you're given — properly, not just with nicer words."
}$json$::jsonb,
  true
),
(
  '96481f1a-c34e-488b-8631-44da6da795b4',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Give an intentionally off-tone response, then immediately reformulate it to fit the specified audience — practising deliberate control over tone shifts.",
  "listenFor": "Whether the response still stays vocabulary only fix, or whether it's begun to show structural fix.",
  "likelyResponses": [
    "The reformulation changes vocabulary (swapping slang for \"proper\" words) but keeps the same blunt sentence structure underneath."
  ],
  "scorecardFocus": [
    {
      "dimension": "Register Control",
      "note": "structural, not just lexical, adaptation"
    },
    {
      "dimension": "Advanced Range",
      "note": ""
    }
  ]
}$json$::jsonb,
  true
),
(
  '96481f1a-c34e-488b-8631-44da6da795b4',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vocabulary-only fix → structural fix: change the sentence structure itself (e.g. from a flat statement to a hedged question), not just individual words.",
  "interventionPrompts": [
    "You changed the words but the sentence still sounds blunt — change the structure too.",
    "Try turning that statement into a question instead.",
    "What's a softer way to build the whole sentence, not just swap words?"
  ]
}$json$::jsonb,
  true
),
(
  '96481f1a-c34e-488b-8631-44da6da795b4',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Reformulate the same original line for a third, different audience.",
  "recovery": "Model one structural transformation explicitly (statement → hedged question) before asking the learner to try independently."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '58327f61-2242-4cb3-a32e-c0b9fa532afe',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Use the wrong tone for a sensitive context on purpose. Your partner will catch the mismatch and help you find a better way to say it."
}$json$::jsonb,
  true
),
(
  '58327f61-2242-4cb3-a32e-c0b9fa532afe',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Recognise when tone clashes with context and negotiate a better way to say the same thing, in a paired \"misreading the situation\" role-play.",
  "listenFor": "Whether the \"helper\" partner can articulate *why* the tone doesn't fit, not just that it \"sounds wrong.\"",
  "likelyResponses": [
    "That doesn't sound right for a teacher."
  ],
  "scorecardFocus": [
    {
      "dimension": "Register Control",
      "note": "diagnosing mismatch, not just sensing it"
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
  '58327f61-2242-4cb3-a32e-c0b9fa532afe',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Instinct-only → explained mismatch: \"That's too casual for asking a teacher for help — the word 'whatever' makes it sound like you don't care, which isn't the message you want to send.\"",
  "interventionPrompts": [
    "Why doesn't that fit? Name the specific word or feature.",
    "What message does that word accidentally send?",
    "Help them find a better way to say the same thing."
  ]
}$json$::jsonb,
  true
),
(
  '58327f61-2242-4cb3-a32e-c0b9fa532afe',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Swap roles so both partners practice both the \"misreading\" and the \"helping\" side.",
  "recovery": "If the mismatch is hard to name, ask directly: \"if a teacher heard this, what would they think you meant?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9437f5bb-15e7-4ba9-a019-75eace1cab88',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you dialogues across formal, neutral, and informal registers. Identify the specific words or features — contractions, slang, modals — that mark each one."
}$json$::jsonb,
  true
),
(
  '9437f5bb-15e7-4ba9-a019-75eace1cab88',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyse model dialogues showing tone/register shifts between audiences, identifying specific linguistic markers (contractions, slang, modals, hedging, address forms).",
  "listenFor": "Whether learners can name the actual feature category (contraction, modal, address form) rather than a general \"it's more formal.\"",
  "likelyResponses": [
    "This one is more polite."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "naming specific register markers"
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
  '9437f5bb-15e7-4ba9-a019-75eace1cab88',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Impression → feature identification: \"It uses 'could you possibly' instead of 'can you' — that's a modal choice, and it also uses the teacher's title instead of their first name.\"",
  "interventionPrompts": [
    "Name the specific feature — is it a modal, an address form, a contraction?",
    "Find one example of each of the four feature types in this text.",
    "Use one of those exact features in your own sentence."
  ]
}$json$::jsonb,
  true
),
(
  '9437f5bb-15e7-4ba9-a019-75eace1cab88',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners build a personal reference list of markers by register, to reuse in Lesson 7's writing task.",
  "recovery": "Supply a feature checklist (contractions, slang, modals, hedging, address forms) to scan the text against."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2b06e521-704a-4102-ac47-2e38326a90a1',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you the same school rule explained to different audiences. Map what stays exactly the same — the actual rule — versus what changes."
}$json$::jsonb,
  true
),
(
  '2b06e521-704a-4102-ac47-2e38326a90a1',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Examine how the same issue is explained to different audiences (younger pupils, parents, classmates), mapping how detail, examples, and attitude signals adapt while the key message stays stable.",
  "listenFor": "Whether the response still stays undifferentiated difference noticing, or whether it's begun to show stable/variable mapping.",
  "likelyResponses": [
    "Notices that the explanations \"sound different\" without separating what's stable (the message) from what's variable (the delivery)."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "stable-message/variable-delivery distinction"
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
  '2b06e521-704a-4102-ac47-2e38326a90a1',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Undifferentiated difference-noticing → stable/variable mapping: \"The actual rule never changes across all three versions — what changes is how much detail is given and what example is used.\"",
  "interventionPrompts": [
    "What stays exactly the same across all three versions?",
    "What changes — and does the core message ever actually change, or just the delivery?",
    "Could you explain the same rule a fourth way, for a different audience?"
  ]
}$json$::jsonb,
  true
),
(
  '2b06e521-704a-4102-ac47-2e38326a90a1',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners write a fourth version for an audience not shown in the model (e.g. a substitute teacher).",
  "recovery": "If the distinction is unclear, ask directly: \"is the actual rule different in any of these, or just how it's explained?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5d9b518a-aa18-4424-bde8-fb2e5da85815',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you teens negotiating the exact phrasing of a sensitive message. Identify the trade-off they're managing between formality, directness, and politeness."
}$json$::jsonb,
  true
),
(
  '5d9b518a-aa18-4424-bde8-fb2e5da85815',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Study how teens decide to phrase a sensitive message (apology to a teacher, request to a principal, clarification after a misunderstanding), weighing formality, directness, and politeness.",
  "listenFor": "Whether the response still stays single dimension noticing, or whether it's begun to show trade off identification.",
  "likelyResponses": [
    "They try to make it sound polite."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "balancing competing register demands"
    },
    {
      "dimension": "Discourse Control",
      "note": ""
    }
  ]
}$json$::jsonb,
  true
),
(
  '5d9b518a-aa18-4424-bde8-fb2e5da85815',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Single-dimension noticing → trade-off identification: \"They want to be direct so the principal understands the actual issue quickly, but they also need enough politeness that it doesn't sound like a complaint — that's the tension they're managing.\"",
  "interventionPrompts": [
    "What are they trying to balance — name both sides of the trade-off.",
    "Could they be more direct without losing politeness? Where's that line?",
    "Try phrasing the same message yourself, balancing both."
  ]
}$json$::jsonb,
  true
),
(
  '5d9b518a-aa18-4424-bde8-fb2e5da85815',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Change the scenario to one requiring more directness than politeness (an urgent safety issue) and compare how the balance shifts.",
  "recovery": "If the trade-off isn't visible, ask \"what would happen if they were only direct, with no politeness at all?\" to surface the need for balance."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f6dbe3cb-3a1a-4fbe-a67d-8cb98d3b2b31',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a short message for one audience — a text to a friend. Then rewrite it for a different audience — a teacher or a forum — keeping the actual commitment unchanged."
}$json$::jsonb,
  true
),
(
  'f6dbe3cb-3a1a-4fbe-a67d-8cb98d3b2b31',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Write/record a short message for one audience, then systematically rewrite it for a different audience, showing controlled tone/register shifts without altering core meaning or commitments.",
  "listenFor": "Whether the response still stays drifted commitment, or whether it's begun to show preserved commitment.",
  "likelyResponses": [
    "The rewritten version changes tone but also accidentally changes the actual request or commitment slightly."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "preserved core meaning across register shifts"
    },
    {
      "dimension": "Register Control",
      "note": ""
    }
  ]
}$json$::jsonb,
  true
),
(
  'f6dbe3cb-3a1a-4fbe-a67d-8cb98d3b2b31',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Drifted commitment → preserved commitment: check both versions against each other for the exact same underlying ask before finalizing.",
  "interventionPrompts": [
    "Are you asking for the exact same thing in both versions? Check.",
    "The tone changed correctly — but did the actual message change too? It shouldn't have.",
    "Fix the drift without losing the tone difference."
  ]
}$json$::jsonb,
  true
),
(
  'f6dbe3cb-3a1a-4fbe-a67d-8cb98d3b2b31',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third audience version and check consistency across all three.",
  "recovery": "Have the learner state the core ask in one plain sentence first, then build both register versions from that fixed core."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6eef3eee-10a1-4f87-ba43-e0def6719d21',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Build a short style guide for yourself: example phrases for talking to a friend, a teacher, a principal, and online strangers about the same topic."
}$json$::jsonb,
  true
),
(
  '6eef3eee-10a1-4f87-ba43-e0def6719d21',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Create a personal/class \"style guide\" of how to talk/write to different audiences about the same topic, including specific phrases and structures for each register.",
  "listenFor": "Whether the response still stays general advice, or whether it's begun to show concrete reusable phrases.",
  "likelyResponses": [
    "A style guide with accurate general advice (\"be more formal with teachers\") but no concrete, reusable phrases attached to each entry."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "concrete register-specific phrases"
    },
    {
      "dimension": "Discourse Control",
      "note": "organised reference structure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '6eef3eee-10a1-4f87-ba43-e0def6719d21',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "General advice → concrete reusable phrases: attach an actual sentence starter to each audience entry (\"For a teacher: 'I was wondering if...'\").",
  "interventionPrompts": [
    "General advice isn't enough — give an actual phrase you could reuse.",
    "Would this phrase actually work in a real message? Test it.",
    "Add one phrase per audience, minimum."
  ]
}$json$::jsonb,
  true
),
(
  '6eef3eee-10a1-4f87-ba43-e0def6719d21',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners test one phrase from their guide in a real mini-scenario.",
  "recovery": "Supply one example phrase for the first audience entry as a model, then have the learner generate the rest by analogy."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7a324e2b-5916-4073-8500-5d888f18f205',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "With your group, write a short set of guidelines (100-150 words) for common situations — disagreeing with a friend, emailing a teacher, posting online — with a reason for each one."
}$json$::jsonb,
  true
),
(
  '7a324e2b-5916-4073-8500-5d888f18f205',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Co-author a set of \"tone and audience\" guidelines for common teen situations, articulating why certain choices suit each context.",
  "listenFor": "Whether the response still stays bare rule, or whether it's begun to show reasoned guideline.",
  "likelyResponses": [
    "A set of rules stated as commands (\"be polite to teachers\") without the reasoning behind why that choice matters in that context."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "reasoned guideline structure"
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
  '7a324e2b-5916-4073-8500-5d888f18f205',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Bare rule → reasoned guideline: \"Be more formal with teachers because the relationship is less equal and misunderstandings are harder to fix quickly in that context.\"",
  "interventionPrompts": [
    "Why that rule, specifically, for that situation? Say the reason.",
    "Would this reasoning apply to a different situation too, or is it specific to this one?",
    "Make sure every guideline has a 'because.'"
  ]
}$json$::jsonb,
  true
),
(
  '7a324e2b-5916-4073-8500-5d888f18f205',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the group defend one guideline against a classmate who disagrees with it.",
  "recovery": "If reasoning is missing, ask \"what would go wrong if you ignored this guideline?\" as a route to the underlying reason."
}$json$::jsonb,
  true
);
