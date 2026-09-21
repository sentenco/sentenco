-- Sentenco C1 Teens -- Unit 1: Argument, Debate, and Respectful Disagreement
-- Mode order: Performance -> Model -> Output
-- Content sourced from docs/curriculum/c1-teens.md and
-- c1-teens-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'da7cdff3-7e6e-4d55-b7fb-9b163d4d4ab4',
  'A Big Question, Developed',
  'C1',
  'teens',
  1,
  1,
  'Get learners producing a sustained, developed C1 turn on a "big question" that matters to teens — not a one-sentence opinion, which is the B2 ceiling this lesson pushes past.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cd47910a-60cf-4c11-a10d-934d4fd8b89a',
  'Defending Your Position',
  'C1',
  'teens',
  1,
  2,
  'Practice calm, respectful defence under classmate challenge — the emphasis is explicitly on clarification and respectful disagreement, not "winning" an argument.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4b1b212e-6eaf-4ad3-ac42-cd1db2a09988',
  'Reaching a Group Decision',
  'C1',
  'teens',
  1,
  3,
  'Reach a group decision on a real school/youth issue, requiring learners to weigh trade-offs, make concessions, and justify a final group stance.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7efbea05-cc0a-40bd-ad3d-b246d7f91752',
  'What Makes an Answer Strong?',
  'C1',
  'teens',
  1,
  4,
  'Identify what makes a model response sound C1 — clear argument line, developed reasoning, controlled hedging, spontaneous but organised delivery — as a direct contrast to Lesson 1''s B2-ceiling patterns.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9a15f6f1-6312-4d16-8208-9334728ffa75',
  'Upgrading a Blunt Statement',
  'C1',
  'teens',
  1,
  5,
  'Study how a weak/blunt response is reformulated into a stronger one — nuance added, overclaiming softened, precision improved — moving past B2''s "I think X because Y" pattern.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4ff2410f-b7eb-4860-a934-05f995e25e97',
  'Disagreeing Without Attacking',
  'C1',
  'teens',
  1,
  6,
  'Notice how speakers in a model exchange disagree firmly but respectfully — turn-taking, acknowledgement, evidence use, and language that depersonalises conflict.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '83e821c4-3f9b-4b40-b748-82844d619c24',
  'Revising After Pushback',
  'C1',
  'teens',
  1,
  7,
  'Plan and deliver a developed stance, then revise it after feedback or new counter-arguments — showing whether learners can strengthen structure and responsiveness rather than just repeat the same opinion.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'daa94663-29f4-4d3b-a1b0-bf89e5d355d7',
  'Writing the Group Position',
  'C1',
  'teens',
  1,
  8,
  'Produce a written or slide-based group position on a contested issue, capturing the reasoning behind the decision and acknowledging counter-arguments.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e9328286-7e7a-429e-843c-705103a88b39',
  'Summary First, Opinion After',
  'C1',
  'teens',
  1,
  9,
  'Reconstruct contrasting teen viewpoints on a current issue fairly for peers who didn''t follow the discussion, before stating a personal stance — the unit''s closing synthesis.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'da7cdff3-7e6e-4d55-b7fb-9b163d4d4ab4',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "You have 60-90 seconds. Give a developed answer to this: should schools limit phone use? Don't just state an opinion — build it with real reasons."
}$json$::jsonb,
  true
),
(
  'da7cdff3-7e6e-4d55-b7fb-9b163d4d4ab4',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Get learners producing a sustained, developed C1 turn on a \"big question\" that matters to teens — not a one-sentence opinion, which is the B2 ceiling this lesson pushes past.",
  "listenFor": "Whether the response develops beyond a single stated opinion — does it add a second layer of reasoning, an example, or a qualification, or does it stop after one sentence and pad the rest with repetition?",
  "likelyResponses": [
    "I think schools shouldn't ban phones because we need them, and also it's not fair."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "developed reasoning, not just stated opinion"
    },
    {
      "dimension": "Naturalness",
      "note": "sustained spontaneous delivery"
    }
  ]
}$json$::jsonb,
  true
),
(
  'da7cdff3-7e6e-4d55-b7fb-9b163d4d4ab4',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Thin reasons → developed reasoning: push one of the two reasons further with a concrete example or a \"because\" chain: \"we need them — for example, to message parents about after-school changes, which happens more than people think.\"",
  "interventionPrompts": [
    "Pick one of your reasons and go one level deeper — why does that matter?",
    "Give me a real example, not just the general claim.",
    "You stopped after one sentence per reason — say more."
  ]
}$json$::jsonb,
  true
),
(
  'da7cdff3-7e6e-4d55-b7fb-9b163d4d4ab4',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Ask for a brief counter-consideration they'd still acknowledge even while holding their position.",
  "recovery": "If the turn stalls after one sentence, ask a direct follow-up (\"what's an example of that?\") to draw out the missing development rather than letting silence sit."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cd47910a-60cf-4c11-a10d-934d4fd8b89a',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Defend your position from last lesson. Your classmates will ask skeptical — not hostile — follow-up questions. Stay calm and specific."
}$json$::jsonb,
  true
),
(
  'cd47910a-60cf-4c11-a10d-934d4fd8b89a',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Practice calm, respectful defence under classmate challenge — the emphasis is explicitly on clarification and respectful disagreement, not \"winning\" an argument.",
  "listenFor": "Whether the defender stays calm and specific, or gets defensive/repetitive; whether classmates' challenges stay genuinely sceptical-but-respectful rather than tipping into mockery (a real risk in a teen classroom that needs active monitoring).",
  "likelyResponses": [
    "No, that's not true, I already said why I think this."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "acknowledgement before disagreement"
    },
    {
      "dimension": "Interaction Control",
      "note": "staying composed under classmate challenge"
    }
  ]
}$json$::jsonb,
  true
),
(
  'cd47910a-60cf-4c11-a10d-934d4fd8b89a',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Repetition-under-pressure → engaged response: \"That's a fair point — I hadn't thought about that part. I still think my overall point stands because...\"",
  "interventionPrompts": [
    "You repeated your point — can you respond to what they actually asked?",
    "Try starting with 'that's a fair point, but...' before you disagree.",
    "(To challengers) \"Keep it curious, not personal — ask a real question.\""
  ]
}$json$::jsonb,
  true
),
(
  'cd47910a-60cf-4c11-a10d-934d4fd8b89a',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Rotate the defender role so a second student practices the same skill on a new topic.",
  "recovery": "If a defender goes silent or flustered, let them \"phone a friend\" — ask a classmate for a supporting reason before continuing alone."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4b1b212e-6eaf-4ad3-ac42-cd1db2a09988',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "In your group, you have a time limit to agree on a decision — fair class rules, budget for a student event, or AI-use guidelines for assignments. Weigh trade-offs and make real concessions."
}$json$::jsonb,
  true
),
(
  '4b1b212e-6eaf-4ad3-ac42-cd1db2a09988',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Reach a group decision on a real school/youth issue, requiring learners to weigh trade-offs, make concessions, and justify a final group stance.",
  "listenFor": "Whether trade-offs are actually named (\"we're giving up X to get Y\") or whether the group just picks whichever option the loudest member wanted; whether the final stance is justified with reasons, not just announced.",
  "likelyResponses": [
    "Okay, let's just do what [classmate] said."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "justified group decisions"
    },
    {
      "dimension": "Interaction Control",
      "note": "ensuring genuine, not deferential, agreement"
    }
  ]
}$json$::jsonb,
  true
),
(
  '4b1b212e-6eaf-4ad3-ac42-cd1db2a09988',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Deference-based agreement → reasoned compromise: \"I'll go with that if we also make sure [smaller group] gets a say in timing — that way it's not just one person's idea.\"",
  "interventionPrompts": [
    "Why that option specifically — what's the reason, not just 'it's fine'?",
    "What is your group giving up by choosing this?",
    "Make sure everyone in the group agrees out loud, not just nods."
  ]
}$json$::jsonb,
  true
),
(
  '4b1b212e-6eaf-4ad3-ac42-cd1db2a09988',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a late constraint (the budget just got cut in half) requiring the group to renegotiate quickly.",
  "recovery": "If one voice dominates, assign each member an explicit \"give one reason\" turn before the group can finalize its decision."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7efbea05-cc0a-40bd-ad3d-b246d7f91752',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a strong model response to a question like the ones from Lesson 1. Name what makes it sound more advanced than a typical answer — not just 'it sounds better.'"
}$json$::jsonb,
  true
),
(
  '7efbea05-cc0a-40bd-ad3d-b246d7f91752',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Identify what makes a model response sound C1 — clear argument line, developed reasoning, controlled hedging, spontaneous but organised delivery — as a direct contrast to Lesson 1's B2-ceiling patterns.",
  "listenFor": "Whether learners can point to *specific* features (a hedge, a developed example, an organisational move) rather than a vague \"it sounds better.\"",
  "likelyResponses": [
    "It sounds more confident and organised."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "noticing hedging and organisational devices"
    },
    {
      "dimension": "Discourse Control",
      "note": "developed argument structure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '7efbea05-cc0a-40bd-ad3d-b246d7f91752',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague impression → specific feature-naming: \"They use 'to some extent' instead of just saying yes or no — that hedge makes it sound more thoughtful, not less confident.\"",
  "interventionPrompts": [
    "What specific word or phrase makes it sound more developed?",
    "Compare this to your own Lesson 1 turn — what's actually different?",
    "Find one hedge and explain what it's doing."
  ]
}$json$::jsonb,
  true
),
(
  '7efbea05-cc0a-40bd-ad3d-b246d7f91752',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners rewrite one sentence of their own Lesson 1 turn using a feature they just identified.",
  "recovery": "If feature-spotting is hard, point to one specific sentence and ask only \"what does this word add that a simpler word wouldn't?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9a15f6f1-6312-4d16-8208-9334728ffa75',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you a blunt statement and its upgraded version. Notice exactly what changed — then upgrade a new blunt example yourself."
}$json$::jsonb,
  true
),
(
  '9a15f6f1-6312-4d16-8208-9334728ffa75',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Study how a weak/blunt response is reformulated into a stronger one — nuance added, overclaiming softened, precision improved — moving past B2's \"I think X because Y\" pattern.",
  "listenFor": "Whether learners can identify *what type* of change was made (added nuance vs. softened a claim vs. improved precision) rather than just noticing \"it's better now.\"",
  "likelyResponses": [
    "The second one sounds nicer."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "softened overclaiming"
    },
    {
      "dimension": "Advanced Range",
      "note": "layered, flexible argument beyond \"I think X because Y\""
    }
  ]
}$json$::jsonb,
  true
),
(
  '9a15f6f1-6312-4d16-8208-9334728ffa75',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Undifferentiated \"nicer\" → categorised improvement: \"This part softens an overclaim — 'always' became 'often' — and this part adds a layer of nuance by admitting it depends on the situation.\"",
  "interventionPrompts": [
    "Is this change about softening a claim, or adding a new idea? Which one?",
    "Find a word that got softened — what was it before?",
    "Now do the same type of change to your own sentence."
  ]
}$json$::jsonb,
  true
),
(
  '9a15f6f1-6312-4d16-8208-9334728ffa75',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Give a second blunt example that needs a different type of upgrade (nuance rather than softening) to test the distinction.",
  "recovery": "Provide the specific before/after word pair if the change type isn't obvious, and ask only \"why is the after-word better here?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4ff2410f-b7eb-4860-a934-05f995e25e97',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a model disagreement. Find the specific language that keeps it from turning personal — what do the speakers say instead of attacking each other?"
}$json$::jsonb,
  true
),
(
  '4ff2410f-b7eb-4860-a934-05f995e25e97',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Notice how speakers in a model exchange disagree firmly but respectfully — turn-taking, acknowledgement, evidence use, and language that depersonalises conflict.",
  "listenFor": "Whether learners notice depersonalising language specifically (e.g. \"that argument has a gap\" vs. \"you're wrong\") rather than just noting that the exchange \"stays calm.\"",
  "likelyResponses": [
    "They don't get angry."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "depersonalising disagreement"
    },
    {
      "dimension": "Interaction Control",
      "note": "respectful turn-taking under disagreement"
    }
  ]
}$json$::jsonb,
  true
),
(
  '4ff2410f-b7eb-4860-a934-05f995e25e97',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Tone-noticing → depersonalising-language noticing: \"They say 'that point doesn't hold up' instead of 'you're wrong' — it attacks the argument, not the person.\"",
  "interventionPrompts": [
    "Find a moment where they could have said 'you're wrong' but didn't — what did they say instead?",
    "What's the difference between attacking an argument and attacking a person?",
    "Try rephrasing one of your own past disagreements using that same move."
  ]
}$json$::jsonb,
  true
),
(
  '4ff2410f-b7eb-4860-a934-05f995e25e97',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners rewrite a personalised version of one exchange line and compare the difference in how it lands.",
  "recovery": "If depersonalising language is hard to spot, give a direct contrast pair (\"you're wrong\" vs. \"that argument doesn't hold up\") and ask which one is in the model."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '83e821c4-3f9b-4b40-b748-82844d619c24',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Record or deliver a developed stance (60-90 seconds) on a teen issue. Then, after hearing a real counter-argument, revise it — don't just repeat yourself."
}$json$::jsonb,
  true
),
(
  '83e821c4-3f9b-4b40-b748-82844d619c24',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Plan and deliver a developed stance, then revise it after feedback or new counter-arguments — showing whether learners can strengthen structure and responsiveness rather than just repeat the same opinion.",
  "listenFor": "Whether the revision actually engages the new counter-argument, or just repeats the original stance with minor wording changes.",
  "likelyResponses": [
    "After hearing a counter-argument: \"Yeah, but I still think I'm right.\" (acknowledges the counter-argument exists without actually engaging its content.)"
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "responsive revision"
    },
    {
      "dimension": "Pragmatics",
      "note": "engaging counter-arguments rather than dismissing them"
    }
  ]
}$json$::jsonb,
  true
),
(
  '83e821c4-3f9b-4b40-b748-82844d619c24',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Dismissal → engagement: \"That's true for some cases, but I think for most students it still holds because...\" — engage the specific content of the counter-argument before restating the position.",
  "interventionPrompts": [
    "You heard a real counter-argument — what part of it is actually true?",
    "Don't just say 'but I still think I'm right' — respond to what they said specifically.",
    "What changed in your argument after hearing that, even slightly?"
  ]
}$json$::jsonb,
  true
),
(
  '83e821c4-3f9b-4b40-b748-82844d619c24',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Introduce a second, different counter-argument and require a further revision.",
  "recovery": "If engagement doesn't happen, ask directly: \"what's one thing in what they said that's actually fair?\" before asking for the revision."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'daa94663-29f4-4d3b-a1b0-bf89e5d355d7',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write or slide out your group's position (100-150 words) on a contested school issue — a media policy or a proposed change. Include at least one counter-argument you've actually thought about, not just mentioned."
}$json$::jsonb,
  true
),
(
  'daa94663-29f4-4d3b-a1b0-bf89e5d355d7',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Produce a written or slide-based group position on a contested issue, capturing the reasoning behind the decision and acknowledging counter-arguments.",
  "listenFor": "Whether the counter-argument acknowledgment is genuine (a real, specific objection) or token (\"some people might disagree\").",
  "likelyResponses": [
    "Some people might not agree with this, but we think it's the best choice."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "specific counter-argument acknowledgment"
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
  'daa94663-29f4-4d3b-a1b0-bf89e5d355d7',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Token acknowledgment → specific counter-argument: \"Some students might worry this makes things stricter for everyone because of a few people's actions — we considered that, and think the trade-off is worth it because...\"",
  "interventionPrompts": [
    "What's the *specific* objection someone might raise? Not 'some people' — the actual concern.",
    "Does your text respond to that concern, or just mention it exists?",
    "Say the position, the reasoning, and the counter-argument in that order."
  ]
}$json$::jsonb,
  true
),
(
  'daa94663-29f4-4d3b-a1b0-bf89e5d355d7',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the group present the position to another group and handle a live follow-up question.",
  "recovery": "If the counter-argument stays vague, ask the group \"who in this class would actually disagree with you, and why?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e9328286-7e7a-429e-843c-705103a88b39',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write or say a neutral summary (100-130 words) of two contrasting viewpoints on a current issue — then, in a clearly separate section, give your own stance."
}$json$::jsonb,
  true
),
(
  'e9328286-7e7a-429e-843c-705103a88b39',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Reconstruct contrasting teen viewpoints on a current issue fairly for peers who didn't follow the discussion, before stating a personal stance — the unit's closing synthesis.",
  "listenFor": "Whether the summary stays genuinely neutral before the stance appears, or whether personal opinion leaks into the \"neutral\" summary part.",
  "likelyResponses": [
    "A summary that already sounds like it's building toward the writer's own opinion before the \"my view\" section even starts."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "neutral framing before stance"
    },
    {
      "dimension": "Discourse Control",
      "note": "clean summary/opinion separation"
    }
  ]
}$json$::jsonb,
  true
),
(
  'e9328286-7e7a-429e-843c-705103a88b39',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Leaking stance → clean separation: keep the summary free of loaded words (\"obviously,\" \"clearly\") and move all personal framing to an explicitly marked final section.",
  "interventionPrompts": [
    "This word choice already shows your opinion — is that supposed to be the neutral part?",
    "Save your view for the final section — keep the summary clean.",
    "Read your summary alone — could a reader guess your opinion from it? They shouldn't be able to yet."
  ]
}$json$::jsonb,
  true
),
(
  'e9328286-7e7a-429e-843c-705103a88b39',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have a classmate read only the summary and try to guess which side the writer will land on — if they can, it wasn't neutral enough.",
  "recovery": "If neutrality keeps slipping, have the learner draft the summary first without being allowed to write their own stance at all, adding it only in a second pass."
}$json$::jsonb,
  true
);
