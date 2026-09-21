-- Sentenco C2 Adults -- Unit 4: High-Impact Presentation, Briefing, and Q&A
-- Mode order: Performance -> Model -> Output
-- Content sourced from docs/curriculum/c2-adults.md and
-- c2-adults-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '79024932-9c89-497f-b283-ac0e6e09bdc9',
  'Board-Visible, 45 Seconds',
  'C2',
  'adults',
  4,
  1,
  'Deliver a very short "stand-up" briefing on a high-stakes topic and immediately reformulate to sharpen narrative, audience framing, and call to action.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f14a77e5-4c17-4544-943a-81c454f09f60',
  'Hostile Q&A',
  'C2',
  'adults',
  4,
  2,
  'Handle unscripted, potentially hostile Q&A from powerful stakeholders with concision and composure, at higher stakes than C1''s equivalent lesson.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e74f3c56-9e3a-4085-b036-94d3f6ea87d3',
  'Triaging the Pushback',
  'C2',
  'adults',
  4,
  3,
  'Present options and lead a decision-focused discussion that stays structured even as participants question assumptions and risks, at C2''s higher-stakes bar.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'eebfb0b2-1511-4019-a884-fe9ccaf49566',
  'Strategy Inside the Q&A',
  'C2',
  'adults',
  4,
  4,
  'Analyze a genuinely high-stakes real-world presentation (investor pitch, CEO town hall, crisis briefing) for storyline, signposting, and Q&A strategy at C2 density.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '675eedd2-8fc4-4e5f-acee-3f49f1dfe7d8',
  'Which Approach Fits Here?',
  'C2',
  'adults',
  4,
  5,
  'Compare high-stakes presentation examples addressing similar issues and brief a peer on tone, structure, and question-handling differences.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b2bae36d-3186-4177-9e01-23ab4f0e6add',
  'What the Answer Signals',
  'C2',
  'adults',
  4,
  6,
  'Study a board/steering-committee meeting to map how the presenter frames the decision, invites questions, and responds strategically to pushback, at C2''s finer level of strategic reading.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6412a81d-2a36-49a9-b258-519bac4aa401',
  'What Would the Answer Signal?',
  'C2',
  'adults',
  4,
  7,
  'Produce a written scaffold for a high-stakes presentation with anticipated questions genuinely prepared for, at C2''s higher precision bar than C1''s equivalent lesson.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '07eedd7e-ae13-4c20-92e1-56563fab1dea',
  'Building In the Fallback',
  'C2',
  'adults',
  4,
  8,
  'Design a slide sequence with explicit Q&A/contingency slots, at C2''s bar of integrated rather than tacked-on engagement points.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '81dd65b1-60ac-4504-beeb-b25c7b84f4d2',
  'Flagging What Wasn''t Answered',
  'C2',
  'adults',
  4,
  9,
  'Write a concise follow-up capturing questions raised, decisions made, and next steps, at C2''s higher precision bar for owner and timing specificity.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '79024932-9c89-497f-b283-ac0e6e09bdc9',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Give a 45-second stand-up briefing on a board-visible topic. Then reformulate it — this time for narrative and a clear call to action, not just clarity."
}$json$::jsonb,
  true
),
(
  '79024932-9c89-497f-b283-ac0e6e09bdc9',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Deliver a very short \"stand-up\" briefing on a high-stakes topic and immediately reformulate to sharpen narrative, audience framing, and call to action.",
  "listenFor": "Whether the response still stays informative but flat, or whether it's begun to show narrative with ask.",
  "likelyResponses": [
    "A clear, well-organized briefing that informs thoroughly but has no discernible narrative arc or explicit ask — information delivery without a persuasive throughline."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "narrative arc, explicit ask"
    },
    {
      "dimension": "Naturalness",
      "note": "persuasive delivery under time pressure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '79024932-9c89-497f-b283-ac0e6e09bdc9',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Informative-but-flat → narrative-with-ask: restructure around tension and resolution (\"here's the risk, here's what changes it, here's what I need from you\") rather than a flat list of facts.",
  "interventionPrompts": [
    "This informs me but doesn't move me to do anything — what's the ask?",
    "Where's the tension? Lead with what's actually at stake.",
    "End on the ask, not on background."
  ]
}$json$::jsonb,
  true
),
(
  '79024932-9c89-497f-b283-ac0e6e09bdc9',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Compress to 25 seconds, forcing the narrative to become even tighter.",
  "recovery": "Ask \"what do you need from the listener?\" directly, then build the briefing backward from that answer."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f14a77e5-4c17-4544-943a-81c454f09f60',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Face hostile, high-stakes Q&A from external partners or senior leadership after a brief presentation. Stay composed and hold your answers to the same length even as the questions get sharper."
}$json$::jsonb,
  true
),
(
  'f14a77e5-4c17-4544-943a-81c454f09f60',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Handle unscripted, potentially hostile Q&A from powerful stakeholders with concision and composure, at higher stakes than C1's equivalent lesson.",
  "listenFor": "Whether the response still stays slight over explaining under hostility, or whether it's begun to show maintained economy under hostility.",
  "likelyResponses": [
    "Composed, non-defensive answers that are accurate but slightly over-explain under real hostility — a natural regression under pressure even for strong C1 speakers."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "maintaining economy under escalating hostility"
    },
    {
      "dimension": "Pragmatics",
      "note": "composure without concession-creep"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f14a77e5-4c17-4544-943a-81c454f09f60',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Slight over-explaining under hostility → maintained economy under hostility: hold the same 10–15 second answer discipline even as the questions get sharper and more personal.",
  "interventionPrompts": [
    "That question was more hostile and your answer got longer — the opposite of what should happen.",
    "Same discipline, higher stakes — answer again, shorter.",
    "You don't owe a longer answer just because the question was harder."
  ]
}$json$::jsonb,
  true
),
(
  'f14a77e5-4c17-4544-943a-81c454f09f60',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the questioner interrupt mid-answer to raise difficulty further.",
  "recovery": "If composure slips under hostility, allow an explicit reset phrase (\"let me answer that directly\") before continuing."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e74f3c56-9e3a-4085-b036-94d3f6ea87d3',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Present and then facilitate a high-stakes decision discussion with multiple skeptical questioners. Triage which objections actually threaten your recommendation and which are distractions."
}$json$::jsonb,
  true
),
(
  'e74f3c56-9e3a-4085-b036-94d3f6ea87d3',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Present options and lead a decision-focused discussion that stays structured even as participants question assumptions and risks, at C2's higher-stakes bar.",
  "listenFor": "Whether the response still stays even handling of all objections, or whether it's begun to show triaged handling.",
  "likelyResponses": [
    "Effective steering that keeps discussion on track (matching the C1 bar) but treats all raised assumptions as equally worth addressing, rather than triaging which ones actually threaten the decision."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "triaging objections by real stakes"
    },
    {
      "dimension": "Discourse Control",
      "note": "efficient decision-focused facilitation"
    }
  ]
}$json$::jsonb,
  true
),
(
  'e74f3c56-9e3a-4085-b036-94d3f6ea87d3',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Even-handling of all objections → triaged handling: \"That assumption doesn't actually change the recommendation even if you're right — let's set it aside and focus on the one that does.\"",
  "interventionPrompts": [
    "Does that objection actually threaten the decision, or is it a distraction? Triage it.",
    "Which raised concern, if true, would actually change your recommendation?",
    "Spend your limited time on that one, not on all of them equally."
  ]
}$json$::jsonb,
  true
),
(
  'e74f3c56-9e3a-4085-b036-94d3f6ea87d3',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a low-stakes but emotionally loud objection to test whether triage holds under social pressure to address it anyway.",
  "recovery": "If triage doesn't happen, ask directly: \"if this objection is true, does your recommendation change?\" for each raised concern."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'eebfb0b2-1511-4019-a884-fe9ccaf49566',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a high-caliber model presentation. Find a strategic choice in how the Q&A itself was structured or anticipated — not just the presentation content — then reuse it."
}$json$::jsonb,
  true
),
(
  'eebfb0b2-1511-4019-a884-fe9ccaf49566',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyze a genuinely high-stakes real-world presentation (investor pitch, CEO town hall, crisis briefing) for storyline, signposting, and Q&A strategy at C2 density.",
  "listenFor": "Whether the response still stays presentation only analysis, or whether it's begun to show Q&A strategy analysis.",
  "likelyResponses": [
    "Solid analysis of the presentation's structure and signposting (matching C1) without examining how the presenter shaped the anticipated Q&A in advance."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "pre-emptive Q&A strategy"
    },
    {
      "dimension": "Discourse Control",
      "note": "integrating anticipated challenge into the main narrative"
    }
  ]
}$json$::jsonb,
  true
),
(
  'eebfb0b2-1511-4019-a884-fe9ccaf49566',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Presentation-only analysis → Q&A-strategy analysis: \"Notice the presenter addresses the obvious hard question inside the main talk itself, before Q&A even opens — that takes the sting out of it happening live.\"",
  "interventionPrompts": [
    "You've analyzed the talk — now, how did they handle the Q&A they knew was coming?",
    "Where do they pre-empt the hardest question inside the talk itself?",
    "Try that same move in your own briefing."
  ]
}$json$::jsonb,
  true
),
(
  'eebfb0b2-1511-4019-a884-fe9ccaf49566',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Compare a presentation that pre-empts hard questions with one that doesn't, and evaluate the difference in perceived control.",
  "recovery": "Point directly to the moment of pre-emption and ask only \"why put this here, before Q&A, instead of waiting?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '675eedd2-8fc4-4e5f-acee-3f49f1dfe7d8',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you two or three presentations on similar high-stakes announcements. Brief the room on the differences — and recommend which approach fits an upcoming scenario you're given."
}$json$::jsonb,
  true
),
(
  '675eedd2-8fc4-4e5f-acee-3f49f1dfe7d8',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Compare high-stakes presentation examples addressing similar issues and brief a peer on tone, structure, and question-handling differences.",
  "listenFor": "Whether the response still stays comparison only, or whether it's begun to show comparison applied.",
  "likelyResponses": [
    "A solid structural/tonal comparison (matching C1) that doesn't connect the comparison to a specific upcoming decision the listener actually faces."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "applied synthesis, not just comparison"
    },
    {
      "dimension": "Pragmatics",
      "note": "audience-specific recommendation"
    }
  ]
}$json$::jsonb,
  true
),
(
  '675eedd2-8fc4-4e5f-acee-3f49f1dfe7d8',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Comparison-only → comparison-applied: \"Given that your audience next week is more skeptical than either of these, I'd borrow this one's pre-emptive Q&A handling but tone down its confidence level.\"",
  "interventionPrompts": [
    "You've compared them well — now, which elements would you actually borrow for the presentation coming up?",
    "What does this specific upcoming audience need that neither model quite has?",
    "Give me a synthesis recommendation, not just a comparison."
  ]
}$json$::jsonb,
  true
),
(
  '675eedd2-8fc4-4e5f-acee-3f49f1dfe7d8',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner sketch a hybrid approach combining elements of both models.",
  "recovery": "If synthesis doesn't emerge, ask \"if you had to steal one thing from each, what would you take?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b2bae36d-3186-4177-9e01-23ab4f0e6add',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a model board-level meeting. Find a moment where the presenter's response to pushback shapes the room's view of their judgment — not just answers the question."
}$json$::jsonb,
  true
),
(
  'b2bae36d-3186-4177-9e01-23ab4f0e6add',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Study a board/steering-committee meeting to map how the presenter frames the decision, invites questions, and responds strategically to pushback, at C2's finer level of strategic reading.",
  "listenFor": "Whether the response still stays content of answer noticing, or whether it's begun to show signal of judgment noticing.",
  "likelyResponses": [
    "Accurately describes how a question was answered (matching C1) without evaluating what that answer signaled about the presenter's judgment or credibility beyond its content."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "credibility signaling through honest answers"
    },
    {
      "dimension": "Interaction Control",
      "note": "strategic use of admitted uncertainty"
    }
  ]
}$json$::jsonb,
  true
),
(
  'b2bae36d-3186-4177-9e01-23ab4f0e6add',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Content-of-answer noticing → signal-of-judgment noticing: \"By admitting the uncertainty here rather than overclaiming, the presenter actually gains credibility — the room trusts the rest of the pitch more because of this one honest admission.\"",
  "interventionPrompts": [
    "What did that answer say about the presenter's judgment, beyond just answering the question?",
    "Would overclaiming here have helped or hurt them? Why?",
    "Find a moment where honesty about a limitation actually strengthened their position."
  ]
}$json$::jsonb,
  true
),
(
  'b2bae36d-3186-4177-9e01-23ab4f0e6add',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners identify a counter-example — a moment where overclaiming would have been the stronger move — to sharpen the judgment.",
  "recovery": "If the credibility-signal isn't obvious, ask \"would you trust this presenter more or less after that answer, and why?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6412a81d-2a36-49a9-b258-519bac4aa401',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a briefing note or outline where each anticipated question comes with a strategic read: what would a good answer signal, and what would a risky one signal, even if both are technically true?"
}$json$::jsonb,
  true
),
(
  '6412a81d-2a36-49a9-b258-519bac4aa401',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Produce a written scaffold for a high-stakes presentation with anticipated questions genuinely prepared for, at C2's higher precision bar than C1's equivalent lesson.",
  "listenFor": "Whether the response still stays prepared answer only, or whether it's begun to show answer plus signal awareness.",
  "likelyResponses": [
    "Specific anticipated questions with prepared answers (matching the C1 bar), but without any note on what a risky answer might inadvertently signal."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "signal-awareness beyond content accuracy"
    },
    {
      "dimension": "Precision",
      "note": "specific anticipated Q&A preparation"
    }
  ]
}$json$::jsonb,
  true
),
(
  '6412a81d-2a36-49a9-b258-519bac4aa401',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Prepared-answer-only → answer-plus-signal-awareness: \"If asked why we didn't consider X, resist the urge to over-justify — over-justifying here would signal we're less confident than we actually are.\"",
  "interventionPrompts": [
    "You've got a good answer — what would a bad version of that answer accidentally signal?",
    "Is there a way to answer this that undermines your own credibility even if the content is correct?",
    "Note that risk explicitly in your outline."
  ]
}$json$::jsonb,
  true
),
(
  '6412a81d-2a36-49a9-b258-519bac4aa401',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a question where the honest answer is genuinely unflattering, and prepare a response that stays honest without being self-undermining.",
  "recovery": "If signal-awareness doesn't surface, ask \"what would sound insecure here, even if it were technically true?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '07eedd7e-ae13-4c20-92e1-56563fab1dea',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a slide sequence or script with a mid-sequence checkpoint — and a real fallback for if the room rejects your recommendation outright."
}$json$::jsonb,
  true
),
(
  '07eedd7e-ae13-4c20-92e1-56563fab1dea',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Design a slide sequence with explicit Q&A/contingency slots, at C2's bar of integrated rather than tacked-on engagement points.",
  "listenFor": "Whether the response still stays agreement assuming, or whether it's begun to show rejection prepared.",
  "likelyResponses": [
    "A sequence with a reasonably placed checkpoint (matching C1) but no real contingency plan if the room rejects the recommendation outright — the sequence assumes agreement."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "contingency-inclusive sequencing"
    },
    {
      "dimension": "Interaction Control",
      "note": "planned recovery from outright rejection"
    }
  ]
}$json$::jsonb,
  true
),
(
  '07eedd7e-ae13-4c20-92e1-56563fab1dea',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Agreement-assuming → rejection-prepared: add an explicit \"if the room doesn't agree, here's the fallback ask\" slide or script beat.",
  "interventionPrompts": [
    "What happens if they say no to the main recommendation? You have no plan for that.",
    "Build a fallback ask into the sequence, not just the primary one.",
    "Where does that fallback slide go — before or after the main ask?"
  ]
}$json$::jsonb,
  true
),
(
  '07eedd7e-ae13-4c20-92e1-56563fab1dea',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a second fallback for a partial-rejection scenario (they like half the proposal).",
  "recovery": "If a fallback doesn't come easily, ask \"what's the smallest version of this ask that's still worth pursuing?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '81dd65b1-60ac-4504-beeb-b25c7b84f4d2',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a follow-up email (100-130 words) where every action item has a named owner and a date — and any question you didn't fully answer live is explicitly flagged, not dropped."
}$json$::jsonb,
  true
),
(
  '81dd65b1-60ac-4504-beeb-b25c7b84f4d2',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Write a concise follow-up capturing questions raised, decisions made, and next steps, at C2's higher precision bar for owner and timing specificity.",
  "listenFor": "Whether the response still stays silent dropping, or whether it's begun to show explicit flagging.",
  "likelyResponses": [
    "Owned, dated action items (matching the C1 bar) but silently drops the one question that wasn't fully answered live, rather than flagging it."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "complete, honest action-item tracking"
    },
    {
      "dimension": "Register Control",
      "note": "professional follow-up economy"
    }
  ]
}$json$::jsonb,
  true
),
(
  '81dd65b1-60ac-4504-beeb-b25c7b84f4d2',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Silent dropping → explicit flagging: add \"We'll circle back on [X] by [date], since that requires input we didn't have in the room.\"",
  "interventionPrompts": [
    "There was a question you didn't fully answer live — where does it appear in this follow-up? It should.",
    "Dropping it silently looks like you forgot, not that it's unresolved on purpose. Flag it.",
    "Does every open item here have both an owner and a date?"
  ]
}$json$::jsonb,
  true
),
(
  '81dd65b1-60ac-4504-beeb-b25c7b84f4d2',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a second unresolved item from a different part of the meeting and require the same explicit-flagging treatment.",
  "recovery": "Have the learner list every question raised in the meeting first, then check each one against the draft follow-up for coverage."
}$json$::jsonb,
  true
);
