-- Sentenco C1 Teens -- Unit 6: Identity, Social Issues, and Self-Expression
-- Mode order: Output -> Performance -> Model
-- Content sourced from docs/curriculum/c1-teens.md and
-- c1-teens-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '719ea97a-cd69-4a71-94d9-626cd80ba570',
  'Online Self, Offline Self',
  'C1',
  'teens',
  6,
  1,
  'Draft and deliver a structured piece on an identity-adjacent topic with clear stance, supporting reasons, and controlled expression of feelings — without requiring personal disclosure.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2a9c9e97-2eca-4733-95fd-9cf719a6bedc',
  'Explaining a Social Issue',
  'C1',
  'teens',
  6,
  2,
  'Explain a social issue or identity topic to peers who care but are less informed, selecting and sequencing information accessibly without oversimplifying.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f1b0753d-dc6b-40e1-95e5-7a28bac79423',
  'The Same Story, Three Ways',
  'C1',
  'teens',
  6,
  3,
  'Reformulate a personal reflection for different audiences (friend/teacher/anonymous blog), adjusting openness, detail, and tone while keeping the core message intact — explicitly teaching "adjusting openness" as its own skill.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '46700b06-905b-49a8-b27b-85e80bea7fbd',
  'Opinions Under Respectful Challenge',
  'C1',
  'teens',
  6,
  4,
  'Share nuanced opinions on social issues and respond to respectful classmate challenge, practising hedging, acknowledging other experiences, and maintaining constructive tone.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9fe63b8b-e977-4ca9-88e3-4e113fb7c1c4',
  'Writing Real Class Principles',
  'C1',
  'teens',
  6,
  5,
  'Agree on simple, practical commitments related to identity and social issues in the class context, balancing different perspectives into shared, concrete statements.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '55fa824c-4d80-48b0-a956-fc7072a669d9',
  'Seeing It From Another Side',
  'C1',
  'teens',
  6,
  6,
  'Explain how an identity-related situation might feel from more than one point of view, practising empathy and social awareness with non-intrusive, option-friendly language.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b992f3f0-6f0e-4b41-ac2a-a1d8b955e238',
  'Signaling Mixed Feelings',
  'C1',
  'teens',
  6,
  7,
  'Analyse model responses where older teens express complex feelings and attitudes with clarity and precision, noticing nuanced opinion phrases and signalled uncertainty rather than simple "for/ against" answers.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0c4305e3-e05d-42e0-ae59-4730d1eba61c',
  'Genuine Without Oversharing',
  'C1',
  'teens',
  6,
  8,
  'Study strong youth-audience explanations of social/identity issues, identifying how detail is balanced with personal voice while avoiding intrusive or over-personal storytelling.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6f017c33-599d-47dc-bbe6-e35a65acc959',
  'What Changes, What Stays',
  'C1',
  'teens',
  6,
  9,
  'Examine pairs of texts/clips expressing the same experience in different registers or openness levels (private journal vs. public post vs. classroom speech), mapping what changes and what''s preserved — the track''s closing lesson.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '719ea97a-cd69-4a71-94d9-626cd80ba570',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write or say a structured piece (100-130 words or 60-90 seconds) on a topic like 'online identity vs offline self' or 'belonging in different groups.' You can use a hypothetical example instead of a personal one if you'd rather."
}$json$::jsonb,
  true
),
(
  '719ea97a-cd69-4a71-94d9-626cd80ba570',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Draft and deliver a structured piece on an identity-adjacent topic with clear stance, supporting reasons, and controlled expression of feelings — without requiring personal disclosure.",
  "listenFor": "Whether the response still stays flat feeling statement, or whether it's begun to show nuanced expression.",
  "likelyResponses": [
    "A piece with a clear stance but flat, single-layer feeling expression (\"I feel happy when I belong\") without nuance or qualification."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "nuanced feeling/attitude expression, per C1 descriptors"
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
  '719ea97a-cd69-4a71-94d9-626cd80ba570',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Flat feeling-statement → nuanced expression: \"It's not just about feeling happy — it's more that belonging somewhere makes it easier to actually be yourself, if that makes sense.\"",
  "interventionPrompts": [
    "Can you add a layer to that feeling — what's underneath 'happy'?",
    "You can use a hypothetical example instead of a personal one if you'd rather — either works.",
    "Add one qualification — is it always true, or does it depend?"
  ]
}$json$::jsonb,
  true
),
(
  '719ea97a-cd69-4a71-94d9-626cd80ba570',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Ask for a brief acknowledgment of a different perspective on the same topic.",
  "recovery": "If personal disclosure feels uncomfortable, explicitly redirect to a hypothetical framing (\"imagine someone who feels this way...\") before continuing."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2a9c9e97-2eca-4733-95fd-9cf719a6bedc',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Explain a social issue — stereotypes in media, inclusion, online privacy — for classmates who care but don't know much about it yet (100-130 words). Keep it accurate, not oversimplified."
}$json$::jsonb,
  true
),
(
  '2a9c9e97-2eca-4733-95fd-9cf719a6bedc',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Explain a social issue or identity topic to peers who care but are less informed, selecting and sequencing information accessibly without oversimplifying.",
  "listenFor": "Whether the response still stays miscalibrated complexity, or whether it's begun to show accessible but accurate.",
  "likelyResponses": [
    "An explanation that oversimplifies to the point of losing accuracy, or one so detailed it loses the less-informed audience — the balance point is genuinely hard to hit."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "accuracy under simplification"
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
  '2a9c9e97-2eca-4733-95fd-9cf719a6bedc',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Miscalibrated complexity → accessible-but-accurate: keep the core distinction intact (don't flatten a real nuance) while cutting jargon and providing one concrete example to anchor it.",
  "interventionPrompts": [
    "Is that still accurate, or did simplifying lose something important?",
    "Would a peer who hasn't thought about this understand that sentence?",
    "Add one concrete example to anchor the idea."
  ]
}$json$::jsonb,
  true
),
(
  '2a9c9e97-2eca-4733-95fd-9cf719a6bedc',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have a classmate who's \"less informed\" ask a genuine follow-up question to test whether the explanation actually worked.",
  "recovery": "If calibration is hard, ask \"would your younger sibling understand this?\" and \"is anything important missing now?\" as two opposing checks."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f1b0753d-dc6b-40e1-95e5-7a28bac79423',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Take a personal-or-hypothetical reflection — a time you felt included or excluded — and reformulate it for three different audiences: a friend, a teacher, an anonymous blog. Adjust how much you share each time."
}$json$::jsonb,
  true
),
(
  'f1b0753d-dc6b-40e1-95e5-7a28bac79423',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Reformulate a personal reflection for different audiences (friend/teacher/anonymous blog), adjusting openness, detail, and tone while keeping the core message intact — explicitly teaching \"adjusting openness\" as its own skill.",
  "listenFor": "Whether the response still stays uniform openness, or whether it's begun to show calibrated openness.",
  "likelyResponses": [
    "The three versions differ in politeness but not really in openness — the learner shares the same level of detail regardless of audience."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "calibrated self-disclosure"
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
  'f1b0753d-dc6b-40e1-95e5-7a28bac79423',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Uniform openness → calibrated openness: the friend version can include more detail/emotion; the teacher version stays more general; the anonymous-blog version can be candid but less identifiable.",
  "interventionPrompts": [
    "These three sound similarly open — what would you actually share more or less of with each audience?",
    "You're always in control of how much detail to include — where would you pull back here?",
    "What changes about identifiability in the anonymous version specifically?"
  ]
}$json$::jsonb,
  true
),
(
  'f1b0753d-dc6b-40e1-95e5-7a28bac79423',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a fourth audience (a close family member) and have the learner calibrate that version too.",
  "recovery": "If a learner is uncomfortable with any version, explicitly confirm they can substitute a hypothetical \"a friend of mine\" framing at any point without penalty."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '46700b06-905b-49a8-b27b-85e80bea7fbd',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Share your opinion on a social issue — school rules, online behavior, identity labels. When classmates respectfully challenge you, acknowledge their experience without abandoning your view."
}$json$::jsonb,
  true
),
(
  '46700b06-905b-49a8-b27b-85e80bea7fbd',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Share nuanced opinions on social issues and respond to respectful classmate challenge, practising hedging, acknowledging other experiences, and maintaining constructive tone.",
  "listenFor": "Whether challenge is handled by acknowledging the other experience genuinely, or by dismissing it to protect the original opinion.",
  "likelyResponses": [
    "I hear you, but I still think I'm right."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "genuine acknowledgment of differing experience"
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
  '46700b06-905b-49a8-b27b-85e80bea7fbd',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Token acknowledgment → genuine engagement: \"That's a really different experience from mine — I think what I said applies more to situations like X, maybe not to what you're describing.\"",
  "interventionPrompts": [
    "Does your opinion apply to everyone's experience, or mostly to some situations? Say which.",
    "Acknowledge what's specifically different about their experience, not just that they disagree.",
    "Keep this constructive — you can disagree and still validate their experience."
  ]
}$json$::jsonb,
  true
),
(
  '46700b06-905b-49a8-b27b-85e80bea7fbd',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have a third classmate add a third, different perspective to the discussion.",
  "recovery": "If tone gets defensive, pause and ask \"what's one thing true about their experience, even if your overall view is different?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9fe63b8b-e977-4ca9-88e3-4e113fb7c1c4',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "With your group, agree on concrete class principles — for including people in group work, or for talking about differences respectfully. Make them specific enough to actually follow."
}$json$::jsonb,
  true
),
(
  '9fe63b8b-e977-4ca9-88e3-4e113fb7c1c4',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Agree on simple, practical commitments related to identity and social issues in the class context, balancing different perspectives into shared, concrete statements.",
  "listenFor": "Whether the response still stays vague principle, or whether it's begun to show concrete commitment.",
  "likelyResponses": [
    "Vague, feel-good principles (\"be nice to everyone\") that aren't concrete enough to actually guide behaviour."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "concrete, actionable commitments"
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
  '9fe63b8b-e977-4ca9-88e3-4e113fb7c1c4',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague principle → concrete commitment: \"If someone's left out of a group decision, whoever notices first says something — that's specific enough to actually follow.\"",
  "interventionPrompts": [
    "'Be nice' isn't concrete — what would you actually do differently because of this principle?",
    "Could someone follow this rule tomorrow without asking what it means?",
    "Make it specific enough to check whether it happened or not."
  ]
}$json$::jsonb,
  true
),
(
  '9fe63b8b-e977-4ca9-88e3-4e113fb7c1c4',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the group test their principle against a specific hypothetical scenario to check it actually works.",
  "recovery": "If commitments stay vague, ask \"what would someone literally do or say, in a specific moment, because of this rule?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '55fa824c-4d80-48b0-a956-fc7072a669d9',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "In 60-90 seconds, explain how a hypothetical identity-related situation might feel from more than one point of view — a new student joining the class, or someone being stereotyped. Keep it in the third person throughout."
}$json$::jsonb,
  true
),
(
  '55fa824c-4d80-48b0-a956-fc7072a669d9',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "TEACHER-HANDLING NOTE: this lesson's framing examples include \"a friend coming out\" alongside \"a new student joining the class\" and \"someone being stereotyped.\" This is a legitimately sensitive topic even presented hypothetically and in the third person. Before running this lesson: (1) confirm with school policy/guidance on LGBTQ+ topics in the classroom, since norms vary by school and context; (2) if used, keep it strictly hypothetical/third-person as designed -- never ask a student to confirm or share their own identity; (3) have a neutral alternative ready (e.g. \"someone moving to a new country\" or \"someone with a disability joining the class\") to substitute if needed; (4) briefly preview the ground rules (empathy practice, not personal disclosure, no one is required to share real experiences) before starting. -- Explain how an identity-related situation might feel from more than one point of view, practising empathy and social awareness with non-intrusive, option-friendly language.",
  "listenFor": "Whether the response still stays single perspective sympathy, or whether it's begun to show multi perspective empathy.",
  "likelyResponses": [
    "A one-sided empathy statement (\"that must feel hard\") without actually developing multiple points of view or adding social-awareness nuance."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "multi-perspective empathy"
    },
    {
      "dimension": "Advanced Range",
      "note": "nuanced attitude expression"
    }
  ]
}$json$::jsonb,
  true
),
(
  '55fa824c-4d80-48b0-a956-fc7072a669d9',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Single-perspective sympathy → multi-perspective empathy: develop at least two distinct points of view genuinely (not just \"the person\" and \"everyone else\" as one undifferentiated group).",
  "interventionPrompts": [
    "You've covered one perspective — what's a second, different one?",
    "Keep this in the third person/hypothetical, as planned.",
    "What might someone watching from the outside not realise about this situation?"
  ]
}$json$::jsonb,
  true
),
(
  '55fa824c-4d80-48b0-a956-fc7072a669d9',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third perspective (e.g. a teacher or parent's view) to further develop the exercise.",
  "recovery": "If a learner drifts into personal disclosure unprompted, gently redirect: \"let's keep this about the hypothetical situation\" without shutting down their engagement."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b992f3f0-6f0e-4b41-ac2a-a1d8b955e238',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you model responses on identity or social topics. Find the specific phrases that signal nuance or mixed feelings, not just a simple yes-or-no opinion."
}$json$::jsonb,
  true
),
(
  'b992f3f0-6f0e-4b41-ac2a-a1d8b955e238',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyse model responses where older teens express complex feelings and attitudes with clarity and precision, noticing nuanced opinion phrases and signalled uncertainty rather than simple \"for/ against\" answers.",
  "listenFor": "Whether the response still stays vague noticing, or whether it's begun to show phrase identification.",
  "likelyResponses": [
    "They don't just say yes or no."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "mixed-feeling and uncertainty phrases"
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
  'b992f3f0-6f0e-4b41-ac2a-a1d8b955e238',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague noticing → phrase identification: \"They say 'it's complicated because...' and 'part of me thinks X, but part of me also...' — those exact phrases are what signal mixed feelings rather than a simple stance.\"",
  "interventionPrompts": [
    "Find the exact phrase that signals mixed feelings.",
    "Could you use that same phrase for your own mixed opinion on something?",
    "What would a simple 'for/against' version of this sound like, by contrast?"
  ]
}$json$::jsonb,
  true
),
(
  'b992f3f0-6f0e-4b41-ac2a-a1d8b955e238',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners build a short personal list of \"mixed feelings\" phrases to reuse in future speaking tasks.",
  "recovery": "Supply 2–3 example phrases (\"part of me... but part of me...\", \"it's complicated because...\") if identification stalls."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0c4305e3-e05d-42e0-ae59-4730d1eba61c',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you articles or talks for a youth audience. Find where the writer holds back from over-sharing while still sounding genuine."
}$json$::jsonb,
  true
),
(
  '0c4305e3-e05d-42e0-ae59-4730d1eba61c',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Study strong youth-audience explanations of social/identity issues, identifying how detail is balanced with personal voice while avoiding intrusive or over-personal storytelling.",
  "listenFor": "Whether the response still stays presence noticing, or whether it's begun to show boundary noticing.",
  "likelyResponses": [
    "They share some of their own experience."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "avoiding over-personal storytelling as explicit skill"
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
  '0c4305e3-e05d-42e0-ae59-4730d1eba61c',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Presence-noticing → boundary-noticing: \"They mention they've felt excluded before, but they don't go into the specific story — that restraint is deliberate, it keeps the focus on the issue, not on drama.\"",
  "interventionPrompts": [
    "Where do they hold back from sharing more? Why might that be deliberate?",
    "Does holding back make it feel less genuine, or is it still effective? Why?",
    "This connects to what Unit 6's earlier lessons practised — can you name the connection?"
  ]
}$json$::jsonb,
  true
),
(
  '0c4305e3-e05d-42e0-ae59-4730d1eba61c',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Compare to a version (if available) that over-shares, and evaluate why the restrained version works better for this audience.",
  "recovery": "Point to a specific restrained moment and ask only \"why not go further here?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6f017c33-599d-47dc-bbe6-e35a65acc959',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you the same experience told at different levels of openness — a private journal, a public post, a classroom speech. Map exactly what changes and what stays the same."
}$json$::jsonb,
  true
),
(
  '6f017c33-599d-47dc-bbe6-e35a65acc959',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Examine pairs of texts/clips expressing the same experience in different registers or openness levels (private journal vs. public post vs. classroom speech), mapping what changes and what's preserved — the track's closing lesson.",
  "listenFor": "Whether the response still stays global impression, or whether it's begun to show specific mapping.",
  "likelyResponses": [
    "The private one is more personal and the public one is less personal."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "openness/detail calibration, tracked precisely"
    },
    {
      "dimension": "Advanced Range",
      "note": "register variation across the same content"
    }
  ]
}$json$::jsonb,
  true
),
(
  '6f017c33-599d-47dc-bbe6-e35a65acc959',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Global impression → specific mapping: \"The specific detail about who was involved disappears in the public version, but the core feeling and the lesson learned stay exactly the same across both.\"",
  "interventionPrompts": [
    "What specific detail disappears between versions? What stays exactly the same?",
    "Is the core meaning ever lost, or just the level of detail?",
    "This closes out the whole unit — how does this connect to the openness-adjustment skill from Lesson 3?"
  ]
}$json$::jsonb,
  true
),
(
  '6f017c33-599d-47dc-bbe6-e35a65acc959',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners produce their own three-version set (private/ public/classroom) of a hypothetical experience as a capstone task.",
  "recovery": "If mapping stays global, isolate one specific detail and track it across all versions before attempting the full comparison."
}$json$::jsonb,
  true
);
