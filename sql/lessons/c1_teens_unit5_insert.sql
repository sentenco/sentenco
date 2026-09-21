-- Sentenco C1 Teens -- Unit 5: Peer Negotiation and Problem-Solving
-- Mode order: Model -> Output -> Performance
-- Content sourced from docs/curriculum/c1-teens.md and
-- c1-teens-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '454611c9-5851-4e2f-9c2e-325817086d0e',
  'What''s the Real Interest?',
  'C1',
  'teens',
  5,
  1,
  'Analyse model peer negotiations with conflicting preferences or constraints, identifying how interests, options, and trade-offs are articulated before a joint decision.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9fa83f56-241f-4cc1-96cf-f51d11df3363',
  'A Challenge That Helps',
  'C1',
  'teens',
  5,
  2,
  'Study model dialogues where a proposal is challenged and the proposer responds by clarifying interests and adjusting the offer — using challenge to improve solutions, not shut negotiation down.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '47755ac0-fda2-499e-89bc-093585148806',
  'Turning Blame Into a Need',
  'C1',
  'teens',
  5,
  3,
  'Study how a third peer helps resolve disagreement by summarising concerns neutrally, reframing accusatory statements, and guiding toward shared criteria — C1-level mediation in negotiation contexts.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'da49c37e-e460-4b3a-9916-b3c1ca8d31e2',
  'Writing the Agreement',
  'C1',
  'teens',
  5,
  4,
  'Design a concrete written agreement for a realistic teen scenario, documenting each person''s needs, options considered, and the final compromise.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5898db35-7fbc-43b4-8271-1ade88994a86',
  'Explaining What Happened, Fairly',
  'C1',
  'teens',
  5,
  5,
  'Write/record a neutral explanation of a peer conflict and its resolution for someone who wasn''t there, reconstructing the process without taking sides.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '62fe99eb-04d8-4eef-9d78-ddcf398a77e3',
  'Explaining What You Decided',
  'C1',
  'teens',
  5,
  6,
  'Produce a concise, structured explanation of "what we decided and why" after group problem-solving, integrating issues, chosen solution, and key reasons.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '81fc0fcf-36c8-46c5-a704-57f8bcdc8eaa',
  'Negotiating Live',
  'C1',
  'teens',
  5,
  7,
  'Engage in live peer negotiations with explicit roles for proposing, challenging, adjusting, and checking agreement, reaching specific realistic compromises under constraints.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7f2e17f3-bb69-42b7-8266-ac6b3ce4a7e6',
  'Mediating a Real Conflict',
  'C1',
  'teens',
  5,
  8,
  'Mediate live between two peers with conflicting positions, practising active listening, paraphrasing, reframing hostile language, and suggesting compromises under emotional pressure.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f7108198-7e99-47a0-9936-cabb95c42815',
  'Holding Firm, Then Adjusting',
  'C1',
  'teens',
  5,
  9,
  'State a firm position in a negotiation, then reformulate immediately after a counter-proposal or new information, adjusting demands while maintaining a collaborative tone.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '454611c9-5851-4e2f-9c2e-325817086d0e',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you a model peer negotiation — planning group work, or curfew conditions. Identify the real interest behind each stated position, not just what was asked for."
}$json$::jsonb,
  true
),
(
  '454611c9-5851-4e2f-9c2e-325817086d0e',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyse model peer negotiations with conflicting preferences or constraints, identifying how interests, options, and trade-offs are articulated before a joint decision.",
  "listenFor": "Whether learners distinguish a stated position (\"I want to leave later\") from the underlying interest (\"I don't want to miss the end of the event\") — a classic and useful negotiation distinction.",
  "likelyResponses": [
    "They both want different things and then agree."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "position vs. interest distinction"
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
  '454611c9-5851-4e2f-9c2e-325817086d0e',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Position-only noticing → interest-identification: \"The real interest under 'later curfew' is not missing the ending — once that interest is named, a different solution (a ride arranged in advance) satisfies it without changing the curfew at all.\"",
  "interventionPrompts": [
    "What's the actual interest underneath that position — not what they asked for, but what they actually need?",
    "Could a different solution satisfy that same interest?",
    "Try naming your own interest instead of just your position, in your own life."
  ]
}$json$::jsonb,
  true
),
(
  '454611c9-5851-4e2f-9c2e-325817086d0e',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners find a second, real negotiation example and identify the interest underneath the stated position.",
  "recovery": "Ask directly: \"why do they actually want that, underneath the request itself?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9fa83f56-241f-4cc1-96cf-f51d11df3363',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you a challenge-and-adjustment exchange. Find how the challenge actually improved the proposal, instead of just shutting it down."
}$json$::jsonb,
  true
),
(
  '9fa83f56-241f-4cc1-96cf-f51d11df3363',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Study model dialogues where a proposal is challenged and the proposer responds by clarifying interests and adjusting the offer — using challenge to improve solutions, not shut negotiation down.",
  "listenFor": "Whether the response still stays outcome only noticing, or whether it's begun to show improvement tracking.",
  "likelyResponses": [
    "They challenge it and then the person changes their mind."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "challenge as improvement, not just objection"
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
  '9fa83f56-241f-4cc1-96cf-f51d11df3363',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Outcome-only noticing → improvement-tracking: \"The challenge points out the schedule doesn't work for one person — the adjusted proposal doesn't abandon the plan, it just shifts the timing, which is a genuine improvement, not a defeat.\"",
  "interventionPrompts": [
    "Did the challenge shut the idea down, or actually improve it? What changed?",
    "Could you challenge a proposal in a way that helps rather than just objects?",
    "Try issuing a challenge like that yourself, on a new proposal."
  ]
}$json$::jsonb,
  true
),
(
  '9fa83f56-241f-4cc1-96cf-f51d11df3363',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners construct a \"pure objection\" version of the same challenge and compare it to the model's \"improving\" version.",
  "recovery": "If the distinction is unclear, ask \"did the original idea survive in some form, or did it disappear entirely?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '47755ac0-fda2-499e-89bc-093585148806',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you a peer mediating a disagreement. Find the exact moment they turn an accusation into a neutral statement."
}$json$::jsonb,
  true
),
(
  '47755ac0-fda2-499e-89bc-093585148806',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Study how a third peer helps resolve disagreement by summarising concerns neutrally, reframing accusatory statements, and guiding toward shared criteria — C1-level mediation in negotiation contexts.",
  "listenFor": "Whether the response still stays effect noticing, or whether it's begun to show technique identification.",
  "likelyResponses": [
    "The mediator calms everyone down."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "reframing blame as need"
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
  '47755ac0-fda2-499e-89bc-093585148806',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Effect-noticing → technique-identification: \"They take 'you never listen to me' and reframe it as 'it sounds like you want to feel more heard in group decisions' — that's turning a blame statement into a need statement.\"",
  "interventionPrompts": [
    "Find the accusatory sentence, and find how the mediator reframes it.",
    "What's the difference between a blame statement and a need statement?",
    "Try reframing an accusatory sentence yourself."
  ]
}$json$::jsonb,
  true
),
(
  '47755ac0-fda2-499e-89bc-093585148806',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Give learners a new accusatory statement and have them practice the reframing move independently.",
  "recovery": "Provide the blame/need frame explicitly (\"you never...\" → \"it sounds like you want...\") as a template to apply."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'da49c37e-e460-4b3a-9916-b3c1ca8d31e2',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Design a written agreement (100-150 words) for a group scenario — splitting project tasks, group-chat rules, or shared club space. Include everyone's needs, the options you considered, and the final compromise."
}$json$::jsonb,
  true
),
(
  'da49c37e-e460-4b3a-9916-b3c1ca8d31e2',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Design a concrete written agreement for a realistic teen scenario, documenting each person's needs, options considered, and the final compromise.",
  "listenFor": "Whether the response still stays outcome only documentation, or whether it's begun to show full process documentation.",
  "likelyResponses": [
    "A written agreement that states the final decision clearly but skips documenting the needs or the options that were considered along the way."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "full process documentation"
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
  'da49c37e-e460-4b3a-9916-b3c1ca8d31e2',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Outcome-only documentation → full-process documentation: add the needs that were named and the options that were weighed, not just the final choice.",
  "interventionPrompts": [
    "You've written the decision — where are the needs that led to it?",
    "What other options did you consider and reject? Name at least one.",
    "A reader should understand the whole process, not just the ending."
  ]
}$json$::jsonb,
  true
),
(
  'da49c37e-e460-4b3a-9916-b3c1ca8d31e2',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the group present their agreement to another group and answer a question about why a rejected option wasn't chosen.",
  "recovery": "Provide a three-part frame (Needs: ___ / Options considered: ___ / Final compromise: ___) if the documentation is outcome-only."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5898db35-7fbc-43b4-8271-1ade88994a86',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a neutral account (100-130 words) of a conflict and how it was resolved, for a teacher or friend who wasn't there. Don't take sides."
}$json$::jsonb,
  true
),
(
  '5898db35-7fbc-43b4-8271-1ade88994a86',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Write/record a neutral explanation of a peer conflict and its resolution for someone who wasn't there, reconstructing the process without taking sides.",
  "listenFor": "Whether the response still stays subtly biased neutral account, or whether it's begun to show genuinely neutral account.",
  "likelyResponses": [
    "An account that's mostly neutral but subtly favours one side in word choice (e.g. \"she finally agreed\" implies one side was being unreasonable)."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "neutral word choice"
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
  '5898db35-7fbc-43b4-8271-1ade88994a86',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Subtly-biased neutral account → genuinely neutral account: replace loaded verbs (\"finally agreed,\" \"refused to listen\") with neutral equivalents (\"agreed after discussion,\" \"raised a concern about\").",
  "interventionPrompts": [
    "That word choice makes one side sound like the problem — find a more neutral word.",
    "Read this back — could either side read this and feel fairly represented?",
    "Fix that one loaded word."
  ]
}$json$::jsonb,
  true
),
(
  '5898db35-7fbc-43b4-8271-1ade88994a86',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have a classmate from a different \"side\" of a real classroom disagreement read the account and confirm it feels fair.",
  "recovery": "If bias keeps slipping in, have the learner write the account once from each side's perspective first, then merge into one neutral version."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '62fe99eb-04d8-4eef-9d78-ddcf398a77e3',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "In 45-60 seconds, give a structured explanation of a group decision — what the issue was, what you decided, and why — for an outside audience."
}$json$::jsonb,
  true
),
(
  '62fe99eb-04d8-4eef-9d78-ddcf398a77e3',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Produce a concise, structured explanation of \"what we decided and why\" after group problem-solving, integrating issues, chosen solution, and key reasons.",
  "listenFor": "Whether the response still stays bare announcement, or whether it's begun to show reasoned explanation.",
  "likelyResponses": [
    "We decided to do X."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "reasoned explanation structure"
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
  '62fe99eb-04d8-4eef-9d78-ddcf398a77e3',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Bare announcement → reasoned explanation: add \"... because it addressed both [need 1] and [need 2], which the other options didn't.\"",
  "interventionPrompts": [
    "You said what you decided — now say why, in one sentence.",
    "What did the other options fail to solve that this one does?",
    "An outside audience needs the reasoning, not just the outcome."
  ]
}$json$::jsonb,
  true
),
(
  '62fe99eb-04d8-4eef-9d78-ddcf398a77e3',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add an unscripted follow-up question (\"why didn't you choose the other option?\") to test the reasoning holds up live.",
  "recovery": "Ask directly \"why this and not something else?\" to draw out the missing reasoning."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '81fc0fcf-36c8-46c5-a704-57f8bcdc8eaa',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Negotiate live with your group over a real disagreement — study time versus free time, or unfair behavior in a group. Rotate through proposing, challenging, adjusting, and confirming."
}$json$::jsonb,
  true
),
(
  '81fc0fcf-36c8-46c5-a704-57f8bcdc8eaa',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Engage in live peer negotiations with explicit roles for proposing, challenging, adjusting, and checking agreement, reaching specific realistic compromises under constraints.",
  "listenFor": "Whether the \"check agreement\" step actually happens explicitly at the end, or whether the negotiation just trails off without confirmation.",
  "likelyResponses": [
    "A negotiation that reaches something close to agreement but ends without either side explicitly confirming it — leaves the outcome ambiguous."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "explicit confirmation"
    },
    {
      "dimension": "Discourse Control",
      "note": "specific, memorable agreements"
    }
  ]
}$json$::jsonb,
  true
),
(
  '81fc0fcf-36c8-46c5-a704-57f8bcdc8eaa',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Ambiguous trailing-off → explicit confirmation: \"So just to check — we're agreeing that...\"",
  "interventionPrompts": [
    "Did you actually confirm this, or did it just trail off?",
    "Say the agreement out loud and have your partner confirm it.",
    "Is this specific enough that you'd both remember it the same way tomorrow?"
  ]
}$json$::jsonb,
  true
),
(
  '81fc0fcf-36c8-46c5-a704-57f8bcdc8eaa',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a time constraint (2 minutes) to force faster, sharper negotiation.",
  "recovery": "If confirmation doesn't happen naturally, prompt directly: \"say what you both just agreed to, right now, out loud.\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7f2e17f3-bb69-42b7-8266-ac6b3ce4a7e6',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Mediate a real conflict between two peers. Practice paraphrasing what each side says before you suggest anything."
}$json$::jsonb,
  true
),
(
  '7f2e17f3-bb69-42b7-8266-ac6b3ce4a7e6',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Mediate live between two peers with conflicting positions, practising active listening, paraphrasing, reframing hostile language, and suggesting compromises under emotional pressure.",
  "listenFor": "Whether the mediator paraphrases accurately (checking understanding) before attempting to reframe or suggest solutions — a common shortcut is jumping straight to solutions without confirming understanding first.",
  "likelyResponses": [
    "The mediator suggests a compromise quickly without first confirming they've understood each side accurately."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "paraphrase-before-solve discipline"
    },
    {
      "dimension": "Pragmatics",
      "note": "reframing under emotional pressure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '7f2e17f3-bb69-42b7-8266-ac6b3ce4a7e6',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Solution-first → understanding-first: \"So what I'm hearing is you're both worried about the same thing, just in different ways — is that right?\" before proposing anything.",
  "interventionPrompts": [
    "Did you check you understood both sides before suggesting a fix?",
    "Paraphrase what each person said before moving to solutions.",
    "Slow down — understanding first, solutions second."
  ]
}$json$::jsonb,
  true
),
(
  '7f2e17f3-bb69-42b7-8266-ac6b3ce4a7e6',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Raise the emotional intensity of the role-played conflict to test whether the discipline holds under more pressure.",
  "recovery": "If mediation jumps straight to solutions, explicitly pause the exercise and require one paraphrase sentence before continuing."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f7108198-7e99-47a0-9936-cabb95c42815',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "State a firm position in a negotiation. When your partner counters or brings new information, reformulate your position live — without abandoning what you actually need."
}$json$::jsonb,
  true
),
(
  'f7108198-7e99-47a0-9936-cabb95c42815',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "State a firm position in a negotiation, then reformulate immediately after a counter-proposal or new information, adjusting demands while maintaining a collaborative tone.",
  "listenFor": "Whether the reformulated position stays collaborative in tone even while substantively adjusting, or whether the tone turns defensive/frustrated at having to move.",
  "likelyResponses": [
    "After a counter-proposal: \"Fine, whatever you want then.\" (a real adjustment, delivered with a tone that undermines the collaboration.)"
  ],
  "scorecardFocus": [
    {
      "dimension": "Naturalness",
      "note": "collaborative tone under pressure to concede"
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
  'f7108198-7e99-47a0-9936-cabb95c42815',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Frustrated concession → collaborative adjustment: \"Okay — given that, I could actually work with a version where...\" (adjusts the demand while keeping a constructive, forward-looking tone.)",
  "interventionPrompts": [
    "You adjusted, but your tone sounded frustrated — try that again, collaborative.",
    "Propose the adjustment yourself, don't just accept theirs passively.",
    "Keep your core interest — what's the smallest change that still works for you?"
  ]
}$json$::jsonb,
  true
),
(
  'f7108198-7e99-47a0-9936-cabb95c42815',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Introduce a second piece of new information requiring a further live adjustment.",
  "recovery": "If tone stays frustrated, have the learner restate their adjusted position starting with \"given that, I could work with...\" as a fixed, collaborative-sounding frame."
}$json$::jsonb,
  true
);
