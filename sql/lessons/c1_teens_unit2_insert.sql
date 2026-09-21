-- Sentenco C1 Teens -- Unit 2: Mediation, Source Comparison, and Summaries
-- Mode order: Model -> Output -> Performance
-- Content sourced from docs/curriculum/c1-teens.md and
-- c1-teens-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b50fde27-a8d9-411b-be59-d083aae9f960',
  'What''s Safe to Simplify',
  'C1',
  'teens',
  2,
  1,
  'Analyse how one teen explains a dense text to a friend who''d struggle with it — how key information is selected, simplified, and reorganised without changing meaning.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'da7c6a89-fe93-48ea-bb7d-2ed26e567113',
  'Weak Summary, Strong Summary',
  'C1',
  'teens',
  2,
  2,
  'Identify what makes a strong summary C1-like: clearer main idea, logical order, significant compression, accurate stance/tone representation.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7f4b1c1a-fc0c-482b-9ddc-0cd35580c71e',
  'What Made One More Reliable',
  'C1',
  'teens',
  2,
  3,
  'Map how teens compare two or three sources on the same topic and decide which is most reliable, using explicit criteria (bias, date, author, audience).',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a4d7919d-a3bc-4f71-9914-108dc90c3903',
  'Explaining It for Your Classmates',
  'C1',
  'teens',
  2,
  4,
  'Produce a written/spoken mediation brief explaining a teacher-level or news text in teen-friendly language, highlighting what matters for peers and omitting what doesn''t.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5079ca1f-de33-4486-b07f-68c8828d04a8',
  'Recommending a Source',
  'C1',
  'teens',
  2,
  5,
  'Create a comparison note/slide deck recommending one of two or three sources to a friend, capturing reliability, tone, and usefulness differences clearly.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ce965f21-3e96-44bd-98e1-f1b771f10c0c',
  'Explaining What They Missed',
  'C1',
  'teens',
  2,
  6,
  'Record/deliver a concise, structured explanation of "what X is about and why it matters," reconstructing the main argument spontaneously for an absent classmate.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fd54e868-edb5-486d-9a2a-e1a4783359d0',
  'Explaining Without Showing',
  'C1',
  'teens',
  2,
  7,
  'Explain a text/infographic to a partner who cannot see it, adapting in real time if the partner signals confusion.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd9208166-3239-482d-a979-5b8b0c0ed655',
  'Putting the Pieces Together',
  'C1',
  'teens',
  2,
  8,
  'Reconcile different snippets/perspectives on the same issue into a joint "neutral explanation" for a wider audience, live.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9510ee0f-3e1f-4de2-ab06-dab996d1dbc3',
  'Fixing the Gap',
  'C1',
  'teens',
  2,
  9,
  'Give a short explanation to a peer, then immediately reformulate after a follow-up ("I still don''t get X"), improving structure, examples, and clarity without changing meaning.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b50fde27-a8d9-411b-be59-d083aae9f960',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you a model explanation of a dense text, aimed at a friend who'd struggle with it. Notice exactly what got simplified — and why it was safe to cut."
}$json$::jsonb,
  true
),
(
  'b50fde27-a8d9-411b-be59-d083aae9f960',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyse how one teen explains a dense text to a friend who'd struggle with it — how key information is selected, simplified, and reorganised without changing meaning.",
  "listenFor": "Whether learners notice *what* got cut and *why* it was safe to cut, or just that the explanation is \"shorter and easier.\"",
  "likelyResponses": [
    "They made it simpler and shorter."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "justified simplification"
    },
    {
      "dimension": "Discourse Control",
      "note": "reorganisation for a specific listener"
    }
  ]
}$json$::jsonb,
  true
),
(
  'b50fde27-a8d9-411b-be59-d083aae9f960',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vague simplicity-noticing → specific cut-justifying: \"They skip the technical term entirely and just describe what it does — that's safe to cut because the friend doesn't need the label, just the idea.\"",
  "interventionPrompts": [
    "What got left out? Was that safe to leave out — why?",
    "Find one place where the order changed from the original — why might that help?",
    "Try explaining the same text the same way to a partner."
  ]
}$json$::jsonb,
  true
),
(
  'b50fde27-a8d9-411b-be59-d083aae9f960',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Give a second, harder text and have learners predict what would need to be cut before reading a model explanation.",
  "recovery": "If cuts are hard to justify, ask \"would the friend still understand the main point without this detail?\" for each candidate cut."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'da7c6a89-fe93-48ea-bb7d-2ed26e567113',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you a weak summary and a strong summary of the same source, side by side. Find what makes the strong one actually better."
}$json$::jsonb,
  true
),
(
  'da7c6a89-fe93-48ea-bb7d-2ed26e567113',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Identify what makes a strong summary C1-like: clearer main idea, logical order, significant compression, accurate stance/tone representation.",
  "listenFor": "Whether learners can attribute specific weaknesses to a specific dimension (e.g. \"the weak one misrepresents the tone\" vs. just \"the weak one is worse\").",
  "likelyResponses": [
    "The strong one is just better written."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "accurate tone representation"
    },
    {
      "dimension": "Discourse Control",
      "note": "logical ordering and compression"
    }
  ]
}$json$::jsonb,
  true
),
(
  'da7c6a89-fe93-48ea-bb7d-2ed26e567113',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Non-diagnostic preference → dimension-specific diagnosis: \"The weak one makes the source sound more certain than it actually is — that's a tone problem, not a grammar problem.\"",
  "interventionPrompts": [
    "Which of the four things — main idea, order, compression, tone — is the weak one actually failing at?",
    "Point to the exact sentence where tone gets misrepresented.",
    "Fix just that one problem in the weak summary."
  ]
}$json$::jsonb,
  true
),
(
  'da7c6a89-fe93-48ea-bb7d-2ed26e567113',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners find a summary that's compressed well but misrepresents the main idea, as a harder diagnostic case.",
  "recovery": "Walk through the four dimensions one at a time as a checklist if global comparison feels overwhelming."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7f4b1c1a-fc0c-482b-9ddc-0cd35580c71e',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will show you a discussion comparing two sources. Find the specific reason — bias, date, author, or audience — that decided which one was more reliable."
}$json$::jsonb,
  true
),
(
  '7f4b1c1a-fc0c-482b-9ddc-0cd35580c71e',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Map how teens compare two or three sources on the same topic and decide which is most reliable, using explicit criteria (bias, date, author, audience).",
  "listenFor": "Whether learners can name the deciding criterion specifically, rather than a global \"this one seems more trustworthy.\"",
  "likelyResponses": [
    "This source seems more trustworthy."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "explicit reliability criteria"
    },
    {
      "dimension": "Advanced Range",
      "note": "evaluative vocabulary around source credibility"
    }
  ]
}$json$::jsonb,
  true
),
(
  '7f4b1c1a-fc0c-482b-9ddc-0cd35580c71e',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Unstated criterion → named criterion: \"They chose this one because it's more recent and the other source is from a company that benefits from the conclusion — that's a bias and a date criterion, both named explicitly.\"",
  "interventionPrompts": [
    "Which specific criterion made the difference — bias, date, author, or audience?",
    "Could two sources both seem 'trustworthy' but differ on a specific criterion? Find an example.",
    "State your own reliability judgment using one of these four criteria."
  ]
}$json$::jsonb,
  true
),
(
  '7f4b1c1a-fc0c-482b-9ddc-0cd35580c71e',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a source that's recent but clearly biased, forcing a trade-off between two criteria.",
  "recovery": "Provide the four-criterion checklist directly if judgment stays vague, and have learners tick off which ones apply."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a4d7919d-a3bc-4f71-9914-108dc90c3903',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a brief (100-130 words) explaining a school policy or news text for your classmates. Choose what to include — don't just repeat everything from the original."
}$json$::jsonb,
  true
),
(
  'a4d7919d-a3bc-4f71-9914-108dc90c3903',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Produce a written/spoken mediation brief explaining a teacher-level or news text in teen-friendly language, highlighting what matters for peers and omitting what doesn't.",
  "listenFor": "Whether the response still stays include everything simplified, or whether it's begun to show genuinely selective.",
  "likelyResponses": [
    "A brief that includes everything from the original text in simpler words, rather than genuinely selecting what matters for this specific peer audience."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "audience-specific selection"
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
  'a4d7919d-a3bc-4f71-9914-108dc90c3903',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Include-everything-simplified → genuinely selective: cut a true-but-irrelevant-to-peers detail entirely, keeping only what classmates actually need to know or act on.",
  "interventionPrompts": [
    "Does every classmate need this detail, or could it go?",
    "What's the one thing classmates actually need to know or do because of this?",
    "Cut something. What's safest to lose?"
  ]
}$json$::jsonb,
  true
),
(
  'a4d7919d-a3bc-4f71-9914-108dc90c3903',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner produce a second, even shorter version (half the length) to force further selection.",
  "recovery": "Ask \"if a classmate only read one sentence of this, what should it be?\" and build outward from that answer."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5079ca1f-de33-4486-b07f-68c8828d04a8',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write or slide a comparison note (100-130 words) recommending one of two sources to a friend — with clear reasoning they could follow without reading either source."
}$json$::jsonb,
  true
),
(
  '5079ca1f-de33-4486-b07f-68c8828d04a8',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Create a comparison note/slide deck recommending one of two or three sources to a friend, capturing reliability, tone, and usefulness differences clearly.",
  "listenFor": "Whether the response still stays description only, or whether it's begun to show committed recommendation.",
  "likelyResponses": [
    "A note that describes both sources fairly but never actually recommends one, leaving the friend to decide anyway."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "committed recommendation structure"
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
  '5079ca1f-de33-4486-b07f-68c8828d04a8',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Description-only → committed recommendation: \"I'd go with Source B for this assignment — it's more recent and covers exactly what the task asks for, even though Source A is more detailed overall.\"",
  "interventionPrompts": [
    "You've described both — which one do you actually recommend?",
    "Give one clear reason for your choice a friend could repeat to someone else.",
    "Would your friend know what to do after reading this? Check."
  ]
}$json$::jsonb,
  true
),
(
  '5079ca1f-de33-4486-b07f-68c8828d04a8',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have a classmate read only the note and explain back which source they'd choose and why, to check clarity.",
  "recovery": "Ask directly \"if you had to pick just one, which would it be?\" — that forced choice usually produces the missing recommendation."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ce965f21-3e96-44bd-98e1-f1b771f10c0c',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "In 45-60 seconds, give a structured explanation of a video or article from class, for someone who missed it. Make sure they'd know why it matters, not just what happened."
}$json$::jsonb,
  true
),
(
  'ce965f21-3e96-44bd-98e1-f1b771f10c0c',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Record/deliver a concise, structured explanation of \"what X is about and why it matters,\" reconstructing the main argument spontaneously for an absent classmate.",
  "listenFor": "Whether the response still stays sequential retelling, or whether it's begun to show point plus significance.",
  "likelyResponses": [
    "A mostly-accurate retelling that lists events/points in the order they appeared, without stepping back to say why any of it matters."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "significance-highlighting, not just sequencing"
    },
    {
      "dimension": "Naturalness",
      "note": "spontaneous, non-memorised delivery"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ce965f21-3e96-44bd-98e1-f1b771f10c0c',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Sequential retelling → point-plus-significance: add an explicit \"why it matters\" statement, not just a \"what happened\" sequence.",
  "interventionPrompts": [
    "You've told me what happened — now tell me why it matters.",
    "If your classmate only remembers one thing from your explanation, what should it be?",
    "Reorder this so the important point comes first, not last."
  ]
}$json$::jsonb,
  true
),
(
  'ce965f21-3e96-44bd-98e1-f1b771f10c0c',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner answer one unscripted follow-up question from a classmate who \"missed it.\"",
  "recovery": "If significance is hard to articulate, ask directly: \"why did the teacher choose to show us this, do you think?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fd54e868-edb5-486d-9a2a-e1a4783359d0',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Explain something to your partner without letting them see it. Adapt on the spot if they seem confused — don't just repeat yourself louder."
}$json$::jsonb,
  true
),
(
  'fd54e868-edb5-486d-9a2a-e1a4783359d0',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Explain a text/infographic to a partner who cannot see it, adapting in real time if the partner signals confusion.",
  "listenFor": "Whether the explainer actually adapts when confusion is signalled, or just repeats the same explanation louder/slower.",
  "likelyResponses": [
    "Partner: \"I don't get it.\" Explainer: repeats the exact same sentence again, just slower."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "real-time adaptation to listener confusion"
    },
    {
      "dimension": "Pragmatics",
      "note": "checking understanding"
    }
  ]
}$json$::jsonb,
  true
),
(
  'fd54e868-edb5-486d-9a2a-e1a4783359d0',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Repetition → genuine adaptation: try a different example, a simpler comparison, or break the idea into smaller steps instead of repeating the same phrasing.",
  "interventionPrompts": [
    "Repeating it slower isn't adapting — try a different way to explain it.",
    "Can you compare it to something the listener already knows?",
    "Break it into two smaller steps instead of one big one."
  ]
}$json$::jsonb,
  true
),
(
  'fd54e868-edb5-486d-9a2a-e1a4783359d0',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Swap roles and give the new explainer a harder infographic.",
  "recovery": "If adaptation doesn't come, supply one alternative explanation strategy (an analogy) as a model to try."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd9208166-3239-482d-a979-5b8b0c0ed655',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Your group each has different partial information. Agree on one joint, neutral explanation for the class — in real time, working out what overlaps and what conflicts."
}$json$::jsonb,
  true
),
(
  'd9208166-3239-482d-a979-5b8b0c0ed655',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Reconcile different snippets/perspectives on the same issue into a joint \"neutral explanation\" for a wider audience, live.",
  "listenFor": "Whether contradictions between snippets get explicitly addressed (\"your version says X, mine says Y — which is right, or can both be true?\") or just glossed over.",
  "likelyResponses": [
    "The group produces a \"joint\" explanation that actually only reflects one member's snippet, because the others didn't push their information in."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "ensuring all voices integrated"
    },
    {
      "dimension": "Discourse Control",
      "note": "reconciling contradictory information"
    }
  ]
}$json$::jsonb,
  true
),
(
  'd9208166-3239-482d-a979-5b8b0c0ed655',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "One-voice-dominates → genuinely integrated: explicitly check \"does this include everyone's information?\" before finalizing.",
  "interventionPrompts": [
    "Whose information is missing from this joint version?",
    "You have two different facts here — do they conflict, or can both be true?",
    "Make sure every group member's snippet shows up somewhere."
  ]
}$json$::jsonb,
  true
),
(
  'd9208166-3239-482d-a979-5b8b0c0ed655',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a genuinely contradictory pair of snippets that can't both be true, forcing an explicit resolution.",
  "recovery": "Go around the group and have each member state their one key fact aloud before attempting the joint version."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9510ee0f-3e1f-4de2-ab06-dab996d1dbc3',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Explain something to a partner. When they say 'I still don't get X,' fix exactly that gap — don't just repeat your whole explanation."
}$json$::jsonb,
  true
),
(
  '9510ee0f-3e1f-4de2-ab06-dab996d1dbc3',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Give a short explanation to a peer, then immediately reformulate after a follow-up (\"I still don't get X\"), improving structure, examples, and clarity without changing meaning.",
  "listenFor": "Whether the reformulation targets the *specific* gap named, or just restates the whole explanation again from the start.",
  "likelyResponses": [
    "Partner: \"I still don't get why that matters.\" Learner: repeats the full original explanation again, unchanged."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "targeted, efficient reformulation"
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
  '9510ee0f-3e1f-4de2-ab06-dab996d1dbc3',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Full restart → targeted patch: address only the specific gap named (\"oh — it matters because...\") without re-explaining what the partner already understood.",
  "interventionPrompts": [
    "They understood the first part — you don't need to repeat it. Just fix the gap they named.",
    "What specifically didn't land? Address only that.",
    "Shorter this time — you're patching, not restarting."
  ]
}$json$::jsonb,
  true
),
(
  '9510ee0f-3e1f-4de2-ab06-dab996d1dbc3',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the partner name a second, different gap requiring a second targeted patch.",
  "recovery": "If the learner keeps restarting fully, physically stop them after the first sentence and ask \"is this the part they didn't get, or already the part they did?\""
}$json$::jsonb,
  true
);
