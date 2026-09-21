-- Sentenco C2 Adults -- Unit 5: Strategic Diplomacy, Tone, and Stance Management
-- Mode order: Model -> Output -> Performance
-- Content sourced from docs/curriculum/c2-adults.md and
-- c2-adults-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4811ccc8-0bba-4725-964e-e3b57aca535b',
  'What the Text Never Says',
  'C2',
  'adults',
  5,
  1,
  'Analyze high-stakes "delicate" texts (crisis statements, difficult internal emails, diplomatic notes) for audience, purpose, implied stance, and what is left unsaid.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '30d90730-cf9b-4eea-b904-40b1afee7ffe',
  'Naming the Actual Device',
  'C2',
  'adults',
  5,
  2,
  'Give short analytical turns explaining how a message manages tone and stance without quoting it verbatim, naming specific linguistic choices that make it diplomatic.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cf2089f7-8a9e-46c9-9a91-0aaa41e7538c',
  'A Boundary, Diplomatically Delivered',
  'C2',
  'adults',
  5,
  3,
  'Map how speakers in a diplomatic disagreement rephrase, hedge, and reframe to keep dialogue open while signaling boundaries.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '26ebfcaa-10bd-4299-8a67-c9b073aef1cb',
  'Same Facts, Different Tone',
  'C2',
  'adults',
  5,
  4,
  'Rewrite a problematic or overly direct message for a specific audience, preserving facts while changing tone, stance, and emphasis to reduce damage and improve alignment.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '774abcb4-8dda-4619-b83d-a32cc269b7cf',
  'Two Audiences, One Commitment',
  'C2',
  'adults',
  5,
  5,
  'Produce two versions of the same core message for different audiences, showing controlled shifts in directness, formality, and stance while keeping core commitments consistent.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '33325ff7-ec5f-4317-96b2-1872aed42b0e',
  'Templates for Hard Moments',
  'C2',
  'adults',
  5,
  6,
  'Convert spoken diplomatic responses into reusable written templates capturing hedges, qualifiers, and framing moves that soften impact without obscuring the message.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9cf046fd-7931-4da8-b13c-c86b0ae281a9',
  'From Blunt to Calibrated',
  'C2',
  'adults',
  5,
  7,
  'Respond in real time to sensitive prompts and immediately reformulate to adjust strength, tact, and stance, moving from "too blunt/too vague" to strategically calibrated.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '16535a96-f341-4a5d-a6a9-fc8e49d3e8fc',
  'Avoiding Escalation',
  'C2',
  'adults',
  5,
  8,
  'Handle sustained, emotionally charged challenge where relationships or reputation are at stake, keeping dialogue constructive and protecting face on all sides without escalation.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '51410f2c-101d-4efd-895c-4bbc3471251c',
  'Closing Without Resolving',
  'C2',
  'adults',
  5,
  9,
  'Work through a diplomatic negotiation where full agreement may not be possible, articulating partial agreement, "agreeing to disagree," or next steps in language that preserves working relationships and future options — the track''s closing synthesis lesson.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4811ccc8-0bba-4725-964e-e3b57aca535b',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share genuinely delicate model texts. Find something the text deliberately never says at all — and explain why that silence is doing real work."
}$json$::jsonb,
  true
),
(
  '4811ccc8-0bba-4725-964e-e3b57aca535b',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyze high-stakes \"delicate\" texts (crisis statements, difficult internal emails, diplomatic notes) for audience, purpose, implied stance, and what is left unsaid.",
  "listenFor": "Whether the response still stays softening device noticing, or whether it's begun to show strategic silence noticing.",
  "likelyResponses": [
    "Identifies hedges and softening language accurately (matching C1) but doesn't notice a significant silence — a fact or admission the text carefully avoids stating."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "strategic omission analysis"
    },
    {
      "dimension": "Advanced Range",
      "note": "identifying implication through absence"
    }
  ]
}$json$::jsonb,
  true
),
(
  '4811ccc8-0bba-4725-964e-e3b57aca535b',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Softening-device noticing → strategic-silence noticing: \"Notice this statement never actually says who is responsible — that omission is deliberate, not an oversight.\"",
  "interventionPrompts": [
    "What does this text carefully avoid saying? Find the silence, not just the hedges.",
    "Why would leaving that unsaid protect the relationship or the organisation?",
    "Is that silence honest or evasive? Where's the line?"
  ]
}$json$::jsonb,
  true
),
(
  '4811ccc8-0bba-4725-964e-e3b57aca535b',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners draft the sentence the text deliberately avoided, and discuss what would be lost or gained by including it.",
  "recovery": "If the silence is hard to spot, ask directly: \"who or what would you expect this text to name, that it doesn't?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '30d90730-cf9b-4eea-b904-40b1afee7ffe',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "In 30 seconds, name the specific linguistic device — not just 'it's diplomatic' — that produces a message's tone. Point to the exact word or structure."
}$json$::jsonb,
  true
),
(
  '30d90730-cf9b-4eea-b904-40b1afee7ffe',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Give short analytical turns explaining how a message manages tone and stance without quoting it verbatim, naming specific linguistic choices that make it diplomatic.",
  "listenFor": "Whether the response still stays impression level, or whether it's begun to show device level.",
  "likelyResponses": [
    "It sounds diplomatic because it's careful and doesn't blame anyone."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "passive voice, nominalisation, and other stance-obscuring devices, named precisely"
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
  '30d90730-cf9b-4eea-b904-40b1afee7ffe',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Impression-level → device-level: \"It uses passive voice specifically to avoid naming who caused the problem — 'mistakes were made' rather than 'we made a mistake.'\"",
  "interventionPrompts": [
    "Name the actual grammatical or lexical choice doing that work.",
    "Could you get the same diplomatic effect with active voice? Why or why not?",
    "Use that exact device in your own 20-second version."
  ]
}$json$::jsonb,
  true
),
(
  '30d90730-cf9b-4eea-b904-40b1afee7ffe',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners find a case where passive voice is used evasively in a way that reads as dishonest rather than diplomatic, and articulate the difference.",
  "recovery": "Supply a short list of stance-obscuring devices (passive voice, nominalisation, modal hedging) to check the text against."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cf2089f7-8a9e-46c9-9a91-0aaa41e7538c',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a model diplomatic disagreement. Map where a real boundary is being signaled — dressed up politely — without closing off the relationship."
}$json$::jsonb,
  true
),
(
  'cf2089f7-8a9e-46c9-9a91-0aaa41e7538c',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Map how speakers in a diplomatic disagreement rephrase, hedge, and reframe to keep dialogue open while signaling boundaries.",
  "listenFor": "Whether the response still stays softening noticing, or whether it's begun to show boundary under softening noticing.",
  "likelyResponses": [
    "Identifies hedging and softening (matching C1) but doesn't find the specific moment a genuine boundary is being drawn underneath the diplomatic surface."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "distinguishing genuine flexibility from diplomatically-delivered firmness"
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
  'cf2089f7-8a9e-46c9-9a91-0aaa41e7538c',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Softening-noticing → boundary-under-softening noticing: \"Underneath the polite phrasing, this is actually a firm 'no' — the diplomacy is in how it's delivered, not whether a boundary exists.\"",
  "interventionPrompts": [
    "Is there an actual boundary here, dressed up diplomatically? Find it.",
    "How would you know the difference between genuine flexibility and a soft 'no'?",
    "Say the same boundary yourself, diplomatically."
  ]
}$json$::jsonb,
  true
),
(
  'cf2089f7-8a9e-46c9-9a91-0aaa41e7538c',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners construct a diplomatically-delivered boundary of their own on a sensitive topic and test it on a partner.",
  "recovery": "Ask directly: \"if you strip away the polite phrasing, what is this person actually refusing to do?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '26ebfcaa-10bd-4299-8a67-c9b073aef1cb',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Rewrite a message so its tone, stance, and emphasis change — while every underlying fact and commitment stays exactly the same. Check your rewrite against the original, fact by fact."
}$json$::jsonb,
  true
),
(
  '26ebfcaa-10bd-4299-8a67-c9b073aef1cb',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Rewrite a problematic or overly direct message for a specific audience, preserving facts while changing tone, stance, and emphasis to reduce damage and improve alignment.",
  "listenFor": "Whether the response still stays softened but lossy, or whether it's begun to show softened and lossless.",
  "likelyResponses": [
    "A tactful rewrite (matching the C1 bar) that inadvertently drops or blurs one of the original facts in the process of softening it."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "zero fact-loss under tonal redesign"
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
  '26ebfcaa-10bd-4299-8a67-c9b073aef1cb',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Softened-but-lossy → softened-and-lossless: check every fact/commitment in the original against the rewrite, restoring anything that got blurred while keeping the improved tone.",
  "interventionPrompts": [
    "Check this against the original, fact by fact — did anything get lost in translation?",
    "Softening the tone shouldn't soften the actual commitment — find where it did.",
    "Fix it without losing the tact you just added."
  ]
}$json$::jsonb,
  true
),
(
  '26ebfcaa-10bd-4299-8a67-c9b073aef1cb',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have a peer read only the rewrite and try to reconstruct the original facts, checking for gaps.",
  "recovery": "Have the learner list every fact/commitment from the original as bullet points, then check the rewrite against that list directly."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '774abcb4-8dda-4619-b83d-a32cc269b7cf',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write two versions of the same message — for internal staff and for external partners. Cross-check both against each other: do they commit to exactly the same thing?"
}$json$::jsonb,
  true
),
(
  '774abcb4-8dda-4619-b83d-a32cc269b7cf',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Produce two versions of the same core message for different audiences, showing controlled shifts in directness, formality, and stance while keeping core commitments consistent.",
  "listenFor": "Whether the response still stays undetected inconsistency, or whether it's begun to show verified consistency.",
  "likelyResponses": [
    "Two well-differentiated versions (matching C1) that, on close comparison, actually commit to slightly different things — an inconsistency invisible unless checked directly."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "cross-version commitment consistency"
    },
    {
      "dimension": "Register Control",
      "note": "differentiated but aligned messaging"
    }
  ]
}$json$::jsonb,
  true
),
(
  '774abcb4-8dda-4619-b83d-a32cc269b7cf',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Undetected inconsistency → verified consistency: explicitly cross-check every commitment in version A against version B before finalizing, flagging and fixing any drift.",
  "interventionPrompts": [
    "Put these two versions side by side — do they commit to exactly the same thing?",
    "Where did the commitment shift, even slightly, between versions?",
    "Fix the drift without losing the tonal difference that's supposed to be there."
  ]
}$json$::jsonb,
  true
),
(
  '774abcb4-8dda-4619-b83d-a32cc269b7cf',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third audience version and repeat the consistency check across all three.",
  "recovery": "Have the learner list core commitments once, then draft both versions from that single shared list to prevent drift from the start."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '33325ff7-ec5f-4317-96b2-1872aed42b0e',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write 3-4 reusable diplomatic phrase templates — for saying no, delivering bad news, or questioning a decision tactfully. Annotate what makes each one work."
}$json$::jsonb,
  true
),
(
  '33325ff7-ec5f-4317-96b2-1872aed42b0e',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Convert spoken diplomatic responses into reusable written templates capturing hedges, qualifiers, and framing moves that soften impact without obscuring the message.",
  "listenFor": "Whether the response still stays one off phrasing, or whether it's begun to show reusable template.",
  "likelyResponses": [
    "Effective one-off diplomatic phrasings (matching C1) that aren't abstracted into a reusable pattern — each works for its specific case but doesn't generalize."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "pattern abstraction"
    },
    {
      "dimension": "Discourse Control",
      "note": "documenting reusable structures"
    }
  ]
}$json$::jsonb,
  true
),
(
  '33325ff7-ec5f-4317-96b2-1872aed42b0e',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "One-off phrasing → reusable template: \"The pattern here is: acknowledge + specific reason + alternative offered. That structure works for almost any tactful refusal, not just this one.\"",
  "interventionPrompts": [
    "This works for this case — what's the reusable structure underneath it?",
    "Could you swap in a completely different topic and have the pattern still work? Try it.",
    "Annotate the template: what's each part doing?"
  ]
}$json$::jsonb,
  true
),
(
  '33325ff7-ec5f-4317-96b2-1872aed42b0e',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner apply one of their own templates live to a new, unseen scenario.",
  "recovery": "If abstraction is hard, ask \"if this exact situation happened again with a different topic, what would stay the same?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9cf046fd-7931-4da8-b13c-c86b0ae281a9',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Respond live to a sensitive prompt — disagreeing with a senior person, or pushback from a partner. Then reformulate, moving deliberately from blunt-or-vague toward calibrated."
}$json$::jsonb,
  true
),
(
  '9cf046fd-7931-4da8-b13c-c86b0ae281a9',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Respond in real time to sensitive prompts and immediately reformulate to adjust strength, tact, and stance, moving from \"too blunt/too vague\" to strategically calibrated.",
  "listenFor": "Whether the response still stays overcorrection, or whether it's begun to show calibration.",
  "likelyResponses": [
    "A first response that's clearly too blunt or too vague, and a reformulation that overcorrects to the other extreme rather than landing in the calibrated middle."
  ],
  "scorecardFocus": [
    {
      "dimension": "Naturalness",
      "note": "landing in a genuinely calibrated register, not just avoiding one extreme"
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
  '9cf046fd-7931-4da8-b13c-c86b0ae281a9',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Overcorrection → calibration: if the reformulation swings from blunt to vague (or vice versa), push for a third pass that finds the actual calibrated middle — clear but not harsh, tactful but not evasive.",
  "interventionPrompts": [
    "You went from too blunt to too vague — that's not calibration, that's overcorrection. Try again.",
    "Say it clearly enough that there's no ambiguity, but gently enough that the relationship survives.",
    "What would 'just right' sound like here?"
  ]
}$json$::jsonb,
  true
),
(
  '9cf046fd-7931-4da8-b13c-c86b0ae281a9',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Chain a third reformulation on a harder, more personal prompt.",
  "recovery": "If calibration proves elusive, have the learner state the blunt version and the vague version side by side, then locate what a version literally in between would sound like."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '16535a96-f341-4a5d-a6a9-fc8e49d3e8fc',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Hold a sustained, emotionally loaded challenge — being blamed for a problem, or pressured into a risky public stance. Avoid escalation across every round, not just the first."
}$json$::jsonb,
  true
),
(
  '16535a96-f341-4a5d-a6a9-fc8e49d3e8fc',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Handle sustained, emotionally charged challenge where relationships or reputation are at stake, keeping dialogue constructive and protecting face on all sides without escalation.",
  "listenFor": "Whether the response still stays late round escalation, or whether it's begun to show sustained composure.",
  "likelyResponses": [
    "Composed handling of the first one or two rounds (matching C1) that shows signs of defensive escalation by the third or fourth round under sustained emotional pressure."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "sustained multi-round face-saving"
    },
    {
      "dimension": "Interaction Control",
      "note": "resisting escalation drift"
    }
  ]
}$json$::jsonb,
  true
),
(
  '16535a96-f341-4a5d-a6a9-fc8e49d3e8fc',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Late-round escalation → sustained composure: identify the exact moment tone started to shift defensive, and practice returning to the same calibrated opening stance rather than matching rising intensity.",
  "interventionPrompts": [
    "Your tone shifted there — you started matching their intensity instead of staying calibrated.",
    "Go back to how you opened this. Can you say the same thing again, at round four, with that same composure?",
    "Protecting your own face doesn't require attacking theirs — find a way to do both."
  ]
}$json$::jsonb,
  true
),
(
  '16535a96-f341-4a5d-a6a9-fc8e49d3e8fc',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Extend to six rounds, with increasing emotional intensity each time.",
  "recovery": "Give the learner a single anchor phrase to physically return to whenever escalation starts (\"I want to work through this with you, not against you\")."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '51410f2c-101d-4efd-895c-4bbc3471251c',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Work through a negotiation genuinely designed to have no full resolution. Close it constructively — without forcing a false agreement."
}$json$::jsonb,
  true
),
(
  '51410f2c-101d-4efd-895c-4bbc3471251c',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Work through a diplomatic negotiation where full agreement may not be possible, articulating partial agreement, \"agreeing to disagree,\" or next steps in language that preserves working relationships and future options — the track's closing synthesis lesson.",
  "listenFor": "Whether the response still stays awkward non closure, or whether it's begun to show graceful non resolution.",
  "likelyResponses": [
    "Recognizes the negotiation can't fully resolve (a real C1-level maturity) but closes awkwardly, either forcing a strained agreement or leaving things visibly unresolved without next steps."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "graceful non-resolution structure"
    },
    {
      "dimension": "Pragmatics",
      "note": "preserving the relationship despite unresolved disagreement"
    }
  ]
}$json$::jsonb,
  true
),
(
  '51410f2c-101d-4efd-895c-4bbc3471251c',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Awkward non-closure → graceful non-resolution: \"We're not going to align on this today, and that's alright — here's what we can agree to in the meantime, and here's when we'll revisit it.\"",
  "interventionPrompts": [
    "You don't need to force agreement — but you do need a graceful way to close without one. Try that.",
    "What can you agree on, even if the main issue stays open?",
    "Name a specific time or trigger to revisit this."
  ]
}$json$::jsonb,
  true
),
(
  '51410f2c-101d-4efd-895c-4bbc3471251c',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Revisit the same scenario a \"month later\" with a new piece of information, and have the learner reopen the conversation using the agreed revisit trigger.",
  "recovery": "If closure feels forced either way, supply the frame \"we don't need to agree on everything today — let's agree on ___ for now, and revisit ___ when ___\" to structure the close."
}$json$::jsonb,
  true
);
