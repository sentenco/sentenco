-- Sentenco C2 Adults -- Unit 3: Executive Writing and Concise Professional Communication
-- Mode order: Output -> Performance -> Model
-- Content sourced from docs/curriculum/c2-adults.md and
-- c2-adults-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '26f281be-cc03-48f3-91eb-a331686ee8a8',
  'The One-Minute Summary',
  'C2',
  'adults',
  3,
  1,
  'Produce a short executive summary of a complex situation for senior leadership, ruthlessly selecting what matters and clearly signaling priorities.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ac40144b-d18f-4a91-8bc1-d1608832c03b',
  'Writing for a Skeptic',
  'C2',
  'adults',
  3,
  2,
  'Lay out 2–3 realistic courses of action, evaluate briefly, and recommend one, assuming a busy, skeptical reader.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e86149ad-5356-4d29-94c3-bdfe3da05e40',
  'Fifty to Seventy Words',
  'C2',
  'adults',
  3,
  3,
  'Convert a spoken stance into a single concise paragraph or short email capturing position, key reasons, and implied next steps without padding.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '29df693a-2110-49a2-a65c-e258681c9a9c',
  'Defending Under a Shifting Priority',
  'C2',
  'adults',
  3,
  4,
  'Orally defend a written recommendation to a senior audience who has only skimmed it, then reformulate to better mirror what that audience cares about (risk, cost, optics, timing).',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f33ce863-3fd6-4311-a600-23d1113aa9f4',
  'Ten Seconds Per Answer',
  'C2',
  'adults',
  3,
  5,
  'Handle pointed questions about a compressed written recommendation concisely and non-defensively.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '801b3810-19aa-4fed-9fad-4383122c71c3',
  'Reconciling Under Economy',
  'C2',
  'adults',
  3,
  6,
  'Reconcile conflicting written recommendations live while keeping references to the documents clear and economical.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ad4c35e7-f043-44fc-be2b-243f1e0a10d8',
  'The Rule Behind the Cuts',
  'C2',
  'adults',
  3,
  7,
  'Analyze exemplary executive-level texts for structure, density, stance, and deliberate omission, at a higher density bar than C1''s equivalent lesson.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '72be18b8-2b2d-4728-a3f4-dd82758a4b1c',
  'A Finer Distinction',
  'C2',
  'adults',
  3,
  8,
  'Compare strong examples of concise professional communication and brief a peer on density, tone, and prioritization differences, at a finer level of distinction than C1''s comparable lesson.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '13a01de1-35e8-4d83-9e9b-e72b93aff885',
  'Why the Room Diverged',
  'C2',
  'adults',
  3,
  9,
  'Map how concise writing sets the frame for a meeting, what gets picked up or ignored, and how written follow-up captures the decision for future readers — the unit''s closing synthesis.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '26f281be-cc03-48f3-91eb-a331686ee8a8',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write an executive summary (100-130 words) of a multi-project status or risk landscape — for a reader who will spend under a minute on it. Signal what needs their attention first."
}$json$::jsonb,
  true
),
(
  '26f281be-cc03-48f3-91eb-a331686ee8a8',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Produce a short executive summary of a complex situation for senior leadership, ruthlessly selecting what matters and clearly signaling priorities.",
  "listenFor": "Whether the response still stays even weighting, or whether it's begun to show signaled priority.",
  "likelyResponses": [
    "A summary that's well-written and accurate but treats all three or four items as equally important, giving the reader no signal of where attention should actually go."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "explicit priority signaling"
    },
    {
      "dimension": "Discourse Control",
      "note": "lead-with-what-matters structure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '26f281be-cc03-48f3-91eb-a331686ee8a8',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Even-weighting → signaled priority: open with the single item that most needs the reader's attention, explicitly flagged (\"the one item requiring your decision this week is...\").",
  "interventionPrompts": [
    "If the reader only reads your first sentence, what should they know?",
    "You've given equal weight to everything — what actually needs their attention most?",
    "Where's the explicit priority signal? Add it."
  ]
}$json$::jsonb,
  true
),
(
  '26f281be-cc03-48f3-91eb-a331686ee8a8',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Change which item is most urgent midway through drafting and have the learner restructure the opening accordingly.",
  "recovery": "Ask \"if you could only tell them one thing, what would it be?\" and build the summary's opening from that answer."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ac40144b-d18f-4a91-8bc1-d1608832c03b',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a compressed options note (120-150 words) for a reader who's actively looking for gaps. Pre-empt their most likely objection in the note itself."
}$json$::jsonb,
  true
),
(
  'ac40144b-d18f-4a91-8bc1-d1608832c03b',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Lay out 2–3 realistic courses of action, evaluate briefly, and recommend one, assuming a busy, skeptical reader.",
  "listenFor": "Whether the response still stays strengths only case, or whether it's begun to show skeptic anticipating case.",
  "likelyResponses": [
    "A well-reasoned note that presents the recommended option's strengths thoroughly but doesn't anticipate the skeptical reader's most likely objection."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "skeptic-anticipation"
    },
    {
      "dimension": "Register Control",
      "note": "economy suited to a busy, critical reader"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ac40144b-d18f-4a91-8bc1-d1608832c03b',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Strengths-only case → skeptic-anticipating case: add a single sentence naming the most likely objection a skeptical reader would raise and answering it pre-emptively.",
  "interventionPrompts": [
    "A skeptical reader will look for the weak point immediately — where is it, and did you address it?",
    "What's the first question this specific reader will ask? Answer it in the note.",
    "Cut anything that doesn't serve the recommendation or address the objection."
  ]
}$json$::jsonb,
  true
),
(
  'ac40144b-d18f-4a91-8bc1-d1608832c03b',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner write a version for a reader already inclined to favor a different option, and compare framing choices.",
  "recovery": "Ask \"if your toughest colleague read only this, what would they push back on?\" to surface the missing objection."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e86149ad-5356-4d29-94c3-bdfe3da05e40',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a single paragraph or email (50-70 words): position, reason, next step. No padding — this needs to be tighter than what you'd write for a C1 reader."
}$json$::jsonb,
  true
),
(
  'e86149ad-5356-4d29-94c3-bdfe3da05e40',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Convert a spoken stance into a single concise paragraph or short email capturing position, key reasons, and implied next steps without padding.",
  "listenFor": "Whether the response still stays correct but long, or whether it's begun to show correct and compressed.",
  "likelyResponses": [
    "A clean, correct email that's still 100+ words when 50 would do — grammatically excellent but not yet economical."
  ],
  "scorecardFocus": [
    {
      "dimension": "Register Control",
      "note": "executive brevity"
    },
    {
      "dimension": "Discourse Control",
      "note": "position/reason/next-step density"
    }
  ]
}$json$::jsonb,
  true
),
(
  'e86149ad-5356-4d29-94c3-bdfe3da05e40',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Correct-but-long → correct-and-compressed: identify and cut every sentence that restates rather than adds, without losing position, reason, or next step.",
  "interventionPrompts": [
    "This is correct, but it's not concise — cut a third of it without losing meaning.",
    "Which sentence here is just restating an earlier one? Cut it.",
    "Read the compressed version back — did anything essential disappear?"
  ]
}$json$::jsonb,
  true
),
(
  'e86149ad-5356-4d29-94c3-bdfe3da05e40',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Compress the same message to 30 words as a further stress test of economy.",
  "recovery": "If cutting removes essential content, have the learner restore only the removed sentence, then find a different one to cut instead."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '29df693a-2110-49a2-a65c-e258681c9a9c',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "In 45 seconds, defend your Lesson 2 recommendation to a listener who names one priority — risk, cost, optics, or timing. When they change their stated priority, restructure your defense around it, live."
}$json$::jsonb,
  true
),
(
  '29df693a-2110-49a2-a65c-e258681c9a9c',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Orally defend a written recommendation to a senior audience who has only skimmed it, then reformulate to better mirror what that audience cares about (risk, cost, optics, timing).",
  "listenFor": "Whether the response still stays static defense, or whether it's begun to show priority responsive defense.",
  "likelyResponses": [
    "A confident, accurate spoken defense that covers the recommendation well but doesn't noticeably shift emphasis when the listener's stated priority changes."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "real-time audience-priority tracking"
    },
    {
      "dimension": "Naturalness",
      "note": "fluent restructuring under a shifted constraint"
    }
  ]
}$json$::jsonb,
  true
),
(
  '29df693a-2110-49a2-a65c-e258681c9a9c',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Static defense → priority-responsive defense: when told \"I care about timing, not cost,\" restructure the same defense to lead with timing implications specifically, not just mention them in passing.",
  "interventionPrompts": [
    "I just told you I care about timing — your answer still led with cost. Fix that.",
    "Reorder this defense around what I actually said mattered to me.",
    "Same facts, different lead — go."
  ]
}$json$::jsonb,
  true
),
(
  '29df693a-2110-49a2-a65c-e258681c9a9c',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Switch the stated priority twice in quick succession to test responsiveness under compounding pressure.",
  "recovery": "If restructuring is hard live, allow a 3-second pause explicitly (\"let me reframe that\") before the reformulated answer."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f33ce863-3fd6-4311-a600-23d1113aa9f4',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Answer rapid-fire pointed questions about your recommendation. Each answer: 10 seconds, no more."
}$json$::jsonb,
  true
),
(
  'f33ce863-3fd6-4311-a600-23d1113aa9f4',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Handle pointed questions about a compressed written recommendation concisely and non-defensively.",
  "listenFor": "Whether the response still stays adequate but not tight, or whether it's begun to show maximally economical.",
  "likelyResponses": [
    "Solid 15-second answers that are clear and non-defensive but still slightly longer than the true C2 economy bar requires."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "maximal concision"
    },
    {
      "dimension": "Pragmatics",
      "note": "non-defensive tone under tighter constraint"
    }
  ]
}$json$::jsonb,
  true
),
(
  'f33ce863-3fd6-4311-a600-23d1113aa9f4',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Adequate-but-not-tight → maximally economical: compress the same true content into 10 seconds by cutting connective tissue, not substance.",
  "interventionPrompts": [
    "That was good at 15 seconds — now do it in 10, same content.",
    "What's the one clause you can cut without losing the answer?",
    "Lead with the answer, not the setup."
  ]
}$json$::jsonb,
  true
),
(
  'f33ce863-3fd6-4311-a600-23d1113aa9f4',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Drop the cap to 7 seconds for the final question as a stress test.",
  "recovery": "If 10 seconds feels impossible, allow the learner to draft the 15-second version first, then physically strike words until it fits."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '801b3810-19aa-4fed-9fad-4383122c71c3',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "You and a partner have conflicting compressed recommendations. Negotiate a reconciled position — cite specific points from each note economically, not at length."
}$json$::jsonb,
  true
),
(
  '801b3810-19aa-4fed-9fad-4383122c71c3',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Reconcile conflicting written recommendations live while keeping references to the documents clear and economical.",
  "listenFor": "Whether the response still stays verbose citation, or whether it's begun to show economical citation.",
  "likelyResponses": [
    "Accurate references to the other's note that take a full sentence to set up each time (\"if you look at the part of your note where you talk about...\")."
  ],
  "scorecardFocus": [
    {
      "dimension": "Register Control",
      "note": "spoken economy matching written economy"
    },
    {
      "dimension": "Discourse Control",
      "note": "efficient citation"
    }
  ]
}$json$::jsonb,
  true
),
(
  '801b3810-19aa-4fed-9fad-4383122c71c3',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Verbose citation → economical citation: \"Your second point — the phasing option — doesn't conflict with my timeline concern if we sequence it differently.\"",
  "interventionPrompts": [
    "You just spent a sentence introducing the reference — can you cite it in three words instead?",
    "Match the economy of the negotiation to the economy of your written note.",
    "Say the reconciled position in one sentence."
  ]
}$json$::jsonb,
  true
),
(
  '801b3810-19aa-4fed-9fad-4383122c71c3',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third conflicting note requiring a three-way reconciliation within the same time constraint.",
  "recovery": "If citations stay verbose, have the learner practice naming each note's core point in exactly three words before the negotiation begins."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ad4c35e7-f043-44fc-be2b-243f1e0a10d8',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a dense, high-caliber executive text. Don't just find one omission — find the underlying rule governing everything the writer chose to include."
}$json$::jsonb,
  true
),
(
  'ad4c35e7-f043-44fc-be2b-243f1e0a10d8',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyze exemplary executive-level texts for structure, density, stance, and deliberate omission, at a higher density bar than C1's equivalent lesson.",
  "listenFor": "Whether the response still stays single instance noticing, or whether it's begun to show principle extraction.",
  "likelyResponses": [
    "Correctly identifies a specific omission and why it works, matching the C1 bar exactly, but doesn't generalize to a reusable principle for their own writing."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "principle-level abstraction from examples"
    },
    {
      "dimension": "Discourse Control",
      "note": "applying a generalized economy principle"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ad4c35e7-f043-44fc-be2b-243f1e0a10d8',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Single-instance noticing → principle extraction: \"The underlying rule seems to be: include only what changes the reader's next action — everything else, however true, gets cut.\"",
  "interventionPrompts": [
    "You found one good cut — what's the general rule behind all the cuts in this text?",
    "State that rule so you could apply it to a different document.",
    "Now cut your own recent writing using that exact rule."
  ]
}$json$::jsonb,
  true
),
(
  'ad4c35e7-f043-44fc-be2b-243f1e0a10d8',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Apply the extracted principle to a piece of the learner's own earlier, less economical writing.",
  "recovery": "If principle-extraction is too abstract, supply a candidate principle and ask them to test it against three examples from the text."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '72be18b8-2b2d-4728-a3f4-dd82758a4b1c',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you two or three excellent short texts. Compare them on something finer than formal versus informal — what does each one assume the reader already knows?"
}$json$::jsonb,
  true
),
(
  '72be18b8-2b2d-4728-a3f4-dd82758a4b1c',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Compare strong examples of concise professional communication and brief a peer on density, tone, and prioritization differences, at a finer level of distinction than C1's comparable lesson.",
  "listenFor": "Whether the response still stays surface level distinction, or whether it's begun to show subtler distinction.",
  "likelyResponses": [
    "An accurate comparison on formality and structure — the C1-level distinctions already covered — without finding a subtler difference."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "fine-grained comparative analysis"
    },
    {
      "dimension": "Discourse Control",
      "note": "assumption-about-audience analysis"
    }
  ]
}$json$::jsonb,
  true
),
(
  '72be18b8-2b2d-4728-a3f4-dd82758a4b1c',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Surface-level distinction → subtler distinction: \"Both are formal and well-structured, but this one assumes the reader already knows the background, while the other explains it — that's a judgment call about audience, not just a style choice.\"",
  "interventionPrompts": [
    "You've found the obvious difference — what's a subtler one?",
    "What does each text assume its reader already knows?",
    "Which assumption is riskier, and why?"
  ]
}$json$::jsonb,
  true
),
(
  '72be18b8-2b2d-4728-a3f4-dd82758a4b1c',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third text that makes a wrong assumption about its audience, as a contrast case.",
  "recovery": "If finer distinctions don't surface, ask \"what would a reader need to already know to follow this text?\" for each text separately."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '13a01de1-35e8-4d83-9e9b-e72b93aff885',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you a written packet plus a meeting transcript. Trace not just what changed between them, but why the meeting departed from the packet's framing."
}$json$::jsonb,
  true
),
(
  '13a01de1-35e8-4d83-9e9b-e72b93aff885',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Map how concise writing sets the frame for a meeting, what gets picked up or ignored, and how written follow-up captures the decision for future readers — the unit's closing synthesis.",
  "listenFor": "Whether the response still stays divergence spotting, or whether it's begun to show divergence explaining.",
  "likelyResponses": [
    "Accurately identifies that the meeting diverged from the packet's framing (matching the C1 bar) but doesn't explain the likely cause of the divergence."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "causal/diagnostic analysis of divergence"
    },
    {
      "dimension": "Discourse Control",
      "note": "feeding analysis back into future writing practice"
    }
  ]
}$json$::jsonb,
  true
),
(
  '13a01de1-35e8-4d83-9e9b-e72b93aff885',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Divergence-spotting → divergence-explaining: \"The packet led with cost because that's what the writer could quantify confidently — but the room cared more about timeline risk, which the packet under-weighted precisely because it's harder to put a number on.\"",
  "interventionPrompts": [
    "You found where it diverged — now, why did it diverge? What does that tell you about the packet's blind spot?",
    "Is there a pattern to what gets under-weighted in writing versus what matters live?",
    "How would you write the next packet differently, knowing this?"
  ]
}$json$::jsonb,
  true
),
(
  '13a01de1-35e8-4d83-9e9b-e72b93aff885',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners draft the improved next packet, explicitly correcting for the identified blind spot.",
  "recovery": "If causal explanation is hard, ask \"what's easy to write down and what isn't?\" as a route into the underlying pattern."
}$json$::jsonb,
  true
);
