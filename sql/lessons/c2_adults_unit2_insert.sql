-- Sentenco C2 Adults -- Unit 2: Advanced Mediation and Synthesis
-- Mode order: Model -> Output -> Performance
-- Content sourced from docs/curriculum/c2-adults.md and
-- c2-adults-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '14d1d75a-40ae-4726-8bd7-fe21dcb8b795',
  'What''s Safe to Cut',
  'C2',
  'adults',
  2,
  1,
  'Map purpose, audience, and viewpoint across 2–3 dense, high-stakes texts, deciding what must be preserved and what can be simplified for non-expert decision-makers.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '02515f27-7e3e-4239-b417-828ae3cb0915',
  'Honest About Uncertainty',
  'C2',
  'adults',
  2,
  2,
  'Give short, neutral-to-lightly-advisory turns explaining a complex issue to a non-expert audience, signaling key implications and uncertainty without bias.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3f55c467-8da5-4f87-b151-0c13094c9619',
  'Why This Order?',
  'C2',
  'adults',
  2,
  3,
  'Trace how a model mediator in a cross-functional crisis review structures information, balances perspectives, and sequences options to keep dialogue constructive under real pressure.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'df2fd2ec-6866-4e6b-ad6e-810d785996aa',
  'Known, Contested, Unknown',
  'C2',
  'adults',
  2,
  4,
  'Integrate multiple complex sources into a clear briefing for a specific audience, flagging what is known, unknown, and contested.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '052c0041-5ab6-4ba4-a843-fabc746548b5',
  'Whose Risk Is It?',
  'C2',
  'adults',
  2,
  5,
  'Set out competing proposals, associated risks, stakeholder positions, and a balanced recommendation suitable for formal circulation.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'aadf83de-6402-4627-9e1c-0b6d1b95f956',
  'Two Audiences, Two Openings',
  'C2',
  'adults',
  2,
  6,
  'Convert a neutral spoken explanation into two written versions for different audiences (technical vs. executive), showing controlled register shifts and choice of what to foreground.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '453df873-ff09-46b3-be7c-d2e02625a964',
  'Bridging the Gap Live',
  'C2',
  'adults',
  2,
  7,
  'Mediate live between parties who cannot understand each other directly (technical vs. non-technical, or cross-lingual stakeholders) under strict time limits, ensuring both feel accurately represented.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ba63c92a-ee10-41d0-9c27-1261602a7381',
  'Mediating to a Close',
  'C2',
  'adults',
  2,
  8,
  'Act as mediator in a simulated decision meeting, managing turn-taking, clarifying misunderstandings, and guiding parties toward a decision or a clearly articulated set of remaining disagreements.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '43bb2b5c-7a5a-46cf-b851-ca5dddeb5148',
  'Persuasive and Neutral',
  'C2',
  'adults',
  2,
  9,
  'Give a short spoken recommendation acknowledging all sides, then immediately reformulate to improve perceived neutrality, clarity of trade-offs, and persuasiveness for a mixed audience.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '14d1d75a-40ae-4726-8bd7-fe21dcb8b795',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you dense technical or policy sources. Map each source's purpose and audience out loud — then say explicitly what can be safely simplified without distorting it."
}$json$::jsonb,
  true
),
(
  '14d1d75a-40ae-4726-8bd7-fe21dcb8b795',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Map purpose, audience, and viewpoint across 2–3 dense, high-stakes texts, deciding what must be preserved and what can be simplified for non-expert decision-makers.",
  "listenFor": "Whether the response still stays flat completeness, or whether it's begun to show judged compression.",
  "likelyResponses": [
    "An accurate summary of each source's content that treats all details as equally essential, producing a briefing too long and undifferentiated to actually be useful."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "judged, audience-specific compression"
    },
    {
      "dimension": "Discourse Control",
      "note": "purpose/audience mapping"
    }
  ]
}$json$::jsonb,
  true
),
(
  '14d1d75a-40ae-4726-8bd7-fe21dcb8b795',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Flat completeness → judged compression: \"The methodology section matters for the analyst audience but can be cut entirely for the board — the board only needs the headline finding and its confidence level.\"",
  "interventionPrompts": [
    "Not everything here matters equally — what can this specific audience safely lose?",
    "What's the one thing that must survive simplification, no matter what?",
    "Justify the cut, not just the keep."
  ]
}$json$::jsonb,
  true
),
(
  '14d1d75a-40ae-4726-8bd7-fe21dcb8b795',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner produce two different compressions of the same source for two different named audiences.",
  "recovery": "If everything seems equally important, ask \"what would the board actually do differently if they knew this detail?\" — if nothing, it can go."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '02515f27-7e3e-4239-b417-828ae3cb0915',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "In 30-45 seconds, explain a complex issue to a non-expert. Name one real implication — and one area of genuine uncertainty. Don't sound more certain than you actually are."
}$json$::jsonb,
  true
),
(
  '02515f27-7e3e-4239-b417-828ae3cb0915',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Give short, neutral-to-lightly-advisory turns explaining a complex issue to a non-expert audience, signaling key implications and uncertainty without bias.",
  "listenFor": "Whether the response still stays false certainty, or whether it's begun to show honest calibration.",
  "likelyResponses": [
    "A clear, accurate, neutral explanation that never mentions uncertainty at all — sounds authoritative but overstates the actual state of knowledge."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "honest calibration of certainty"
    },
    {
      "dimension": "Precision",
      "note": "implication-stating without overclaiming"
    }
  ]
}$json$::jsonb,
  true
),
(
  '02515f27-7e3e-4239-b417-828ae3cb0915',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "False certainty → honest calibration: add \"...though it's worth being clear that this estimate could shift significantly if X changes.\"",
  "interventionPrompts": [
    "You sounded certain about something that isn't certain — where's the hedge that belongs here?",
    "Name one thing that could make this wrong.",
    "Say the implication and the uncertainty in the same breath, not one without the other."
  ]
}$json$::jsonb,
  true
),
(
  '02515f27-7e3e-4239-b417-828ae3cb0915',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Push to a topic with genuinely higher uncertainty and see if the calibration instinct holds.",
  "recovery": "Ask directly: \"on a scale of very sure to not sure at all, where are you — and does your explanation actually sound like that?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3f55c467-8da5-4f87-b151-0c13094c9619',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a model crisis-review mediation. Trace the sequencing logic — why is this option presented before that one? The order isn't random."
}$json$::jsonb,
  true
),
(
  '3f55c467-8da5-4f87-b151-0c13094c9619',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Trace how a model mediator in a cross-functional crisis review structures information, balances perspectives, and sequences options to keep dialogue constructive under real pressure.",
  "listenFor": "Whether the response still stays neutral listing assumption, or whether it's begun to show sequencing as strategy.",
  "likelyResponses": [
    "The mediator lists three options and lets people choose."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "sequencing as persuasive strategy"
    },
    {
      "dimension": "Interaction Control",
      "note": "de-escalation through structure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '3f55c467-8da5-4f87-b151-0c13094c9619',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Neutral-listing assumption → sequencing-as-strategy: \"They present the least controversial option first to build agreement momentum before introducing the harder trade-off — the order isn't random.\"",
  "interventionPrompts": [
    "Is that ordering random, or deliberate? What would change if it were reversed?",
    "Why present the easy option first here specifically?",
    "Try sequencing three options yourself, in the order most likely to build agreement."
  ]
}$json$::jsonb,
  true
),
(
  '3f55c467-8da5-4f87-b151-0c13094c9619',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners reorder the options and predict how the dynamic in the room would change.",
  "recovery": "Ask \"what if the hardest option came first instead — what would go wrong?\" to make the sequencing logic concrete."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'df2fd2ec-6866-4e6b-ad6e-810d785996aa',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a briefing (150-180 words) that explicitly signals what's known, what's contested, and what's simply unknown — don't present everything as equally certain."
}$json$::jsonb,
  true
),
(
  'df2fd2ec-6866-4e6b-ad6e-810d785996aa',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Integrate multiple complex sources into a clear briefing for a specific audience, flagging what is known, unknown, and contested.",
  "listenFor": "Whether the response still stays false settledness, or whether it's begun to show explicit epistemic status.",
  "likelyResponses": [
    "A briefing that presents everything as equally settled fact, with no signal of what's actually contested or uncertain among the sources."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "epistemic status per claim"
    },
    {
      "dimension": "Register Control",
      "note": "formal briefing register for mixed-certainty content"
    }
  ]
}$json$::jsonb,
  true
),
(
  'df2fd2ec-6866-4e6b-ad6e-810d785996aa',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "False settledness → explicit epistemic status: add phrases like \"this is well-established,\" \"this remains disputed among the sources,\" \"this is simply unknown at this stage\" attached to specific claims.",
  "interventionPrompts": [
    "Which of these claims would experts actually disagree on? Flag it.",
    "You've written this as if it's all equally certain — it isn't. Fix that.",
    "Is there anything here that's genuinely unknown, not just unstated?"
  ]
}$json$::jsonb,
  true
),
(
  'df2fd2ec-6866-4e6b-ad6e-810d785996aa',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a fourth source that resolves one of the contested points, and have the learner update the briefing accordingly.",
  "recovery": "Provide a three-column frame (known / contested / unknown) to sort claims into before drafting prose."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '052c0041-5ab6-4ba4-a843-fabc746548b5',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a formal options-and-risk summary (150-180 words) that names specific stakeholder positions and risks per option — not a generic pros/cons list."
}$json$::jsonb,
  true
),
(
  '052c0041-5ab6-4ba4-a843-fabc746548b5',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Set out competing proposals, associated risks, stakeholder positions, and a balanced recommendation suitable for formal circulation.",
  "listenFor": "Whether the response still stays generic pros/cons, or whether it's begun to show stakeholder attributed risk.",
  "likelyResponses": [
    "A generic pros/cons list per option that never attributes a position to a specific stakeholder group, making it hard for a reader to anticipate resistance."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "stakeholder-attributed risk"
    },
    {
      "dimension": "Discourse Control",
      "note": "formal circulation register and structure"
    }
  ]
}$json$::jsonb,
  true
),
(
  '052c0041-5ab6-4ba4-a843-fabc746548b5',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Generic pros/cons → stakeholder-attributed risk: \"Legal flags regulatory exposure with Option B specifically; Operations supports Option A but flags a resourcing risk if adopted before Q3.\"",
  "interventionPrompts": [
    "Whose risk is this? Attribute it to a specific stakeholder.",
    "A generic 'risk: cost' tells the reader nothing about who will push back — be specific.",
    "Does your recommendation address the strongest stakeholder objection, or ignore it?"
  ]
}$json$::jsonb,
  true
),
(
  '052c0041-5ab6-4ba4-a843-fabc746548b5',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a stakeholder whose position conflicts with the recommended option, and require the summary to address that tension directly.",
  "recovery": "Provide a stakeholder list and have the learner assign at least one risk or position to each before drafting the summary prose."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'aadf83de-6402-4627-9e1c-0b6d1b95f956',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write two short versions (60-80 words each) of the same core explanation — one for a technical team, one for an executive summary. Change what leads in each, not just the vocabulary."
}$json$::jsonb,
  true
),
(
  'aadf83de-6402-4627-9e1c-0b6d1b95f956',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Convert a neutral spoken explanation into two written versions for different audiences (technical vs. executive), showing controlled register shifts and choice of what to foreground.",
  "listenFor": "Whether the response still stays vocabulary only adaptation, or whether it's begun to show foregrounding adaptation.",
  "likelyResponses": [
    "Two versions that differ mainly in vocabulary difficulty (simpler words for executives) rather than in what information is foregrounded."
  ],
  "scorecardFocus": [
    {
      "dimension": "Register Control",
      "note": "foregrounding, not just lexical simplification"
    },
    {
      "dimension": "Discourse Control",
      "note": "audience-specific structuring"
    }
  ]
}$json$::jsonb,
  true
),
(
  'aadf83de-6402-4627-9e1c-0b6d1b95f956',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Vocabulary-only adaptation → foregrounding adaptation: the technical version leads with mechanism/method; the executive version leads with impact/decision-relevance — genuinely different openings, not just simpler synonyms.",
  "interventionPrompts": [
    "These two versions say the same thing in different words — what should actually lead in each one?",
    "What does the executive care about first? Start there.",
    "What does the technical reader need that the executive version can skip entirely?"
  ]
}$json$::jsonb,
  true
),
(
  'aadf83de-6402-4627-9e1c-0b6d1b95f956',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third version for an external regulator audience with yet another foregrounding priority.",
  "recovery": "Ask \"what's the first sentence each audience actually needs to hear?\" for each version separately before drafting the rest."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '453df873-ff09-46b3-be7c-d2e02625a964',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Mediate live, under time pressure, between two parties who can't understand each other directly. Bridge the gap in real time — and check you've represented both sides accurately before moving on."
}$json$::jsonb,
  true
),
(
  '453df873-ff09-46b3-be7c-d2e02625a964',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Mediate live between parties who cannot understand each other directly (technical vs. non-technical, or cross-lingual stakeholders) under strict time limits, ensuring both feel accurately represented.",
  "listenFor": "Whether both parties, when checked afterward, feel accurately represented — the real test of mediation quality, not just fluency of the mediator's speech.",
  "likelyResponses": [
    "Fluent, confident mediation that subtly favors whichever side's language the mediator finds easier to process, unintentionally underrepresenting the other side."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "real-time balance under time pressure"
    },
    {
      "dimension": "Pragmatics",
      "note": "both-sides face-saving"
    }
  ]
}$json$::jsonb,
  true
),
(
  '453df873-ff09-46b3-be7c-d2e02625a964',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Unconscious favoring → deliberate balance-checking: build in an explicit checking move (\"Let me make sure I've got both sides right...\") before moving the conversation forward.",
  "interventionPrompts": [
    "Check with both sides — did you actually represent them evenly?",
    "You spent more time on one side's view just now — was that deliberate?",
    "Build in a checking phrase before you move on."
  ]
}$json$::jsonb,
  true
),
(
  '453df873-ff09-46b3-be7c-d2e02625a964',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a third party with a partially overlapping but distinct position mid-mediation.",
  "recovery": "If time pressure causes one side to be shortchanged, allow an explicit pause: \"hold on, let me go back to your point\" as a legitimate recovery move, not a fluency failure."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ba63c92a-ee10-41d0-9c27-1261602a7381',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Mediate a simulated multi-party decision meeting. Manage the turns, and close with either a real decision or an honest statement of what's still unresolved."
}$json$::jsonb,
  true
),
(
  'ba63c92a-ee10-41d0-9c27-1261602a7381',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Act as mediator in a simulated decision meeting, managing turn-taking, clarifying misunderstandings, and guiding parties toward a decision or a clearly articulated set of remaining disagreements.",
  "listenFor": "Whether an unresolved meeting is closed honestly (\"we haven't agreed on X, here's what's needed next\") versus papered over with a vague, false sense of resolution.",
  "likelyResponses": [
    "A meeting summary at the close that implies agreement was reached when it actually wasn't, avoiding the discomfort of naming the real state."
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "honest closing structure"
    },
    {
      "dimension": "Interaction Control",
      "note": "managing turns without forcing false consensus"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ba63c92a-ee10-41d0-9c27-1261602a7381',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "False resolution → honest non-resolution: \"We haven't reached agreement on the budget question — here's specifically what each side needs before we can move forward.\"",
  "interventionPrompts": [
    "Did you actually agree, or are you just ending the meeting? Be honest about which.",
    "If this isn't resolved, say precisely what's needed to resolve it.",
    "A false 'we're all set' is worse than an honest 'we're not there yet.'"
  ]
}$json$::jsonb,
  true
),
(
  'ba63c92a-ee10-41d0-9c27-1261602a7381',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a party who explicitly refuses the false-resolution framing mid-meeting, forcing an honest reset.",
  "recovery": "If closing honestly feels uncomfortable, supply the frame \"we haven't agreed on ___ yet — what we need next is ___\" directly."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '43bb2b5c-7a5a-46cf-b851-ca5dddeb5148',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Give a short recommendation (45-60 seconds) after mediating, aimed at a mixed audience with different stakes. Then reformulate it to be more persuasive without losing your neutrality."
}$json$::jsonb,
  true
),
(
  '43bb2b5c-7a5a-46cf-b851-ca5dddeb5148',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Give a short spoken recommendation acknowledging all sides, then immediately reformulate to improve perceived neutrality, clarity of trade-offs, and persuasiveness for a mixed audience.",
  "listenFor": "Whether the response still stays safe neutral but flat, or whether it's begun to show balanced and persuasive.",
  "likelyResponses": [
    "A recommendation that's fair and accurate but reads as safely neutral to the point of being unpersuasive — hedges so evenly that no one is moved to act."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "persuasive neutrality, not just flat balance"
    },
    {
      "dimension": "Naturalness",
      "note": "confident delivery of a genuinely balanced view"
    }
  ]
}$json$::jsonb,
  true
),
(
  '43bb2b5c-7a5a-46cf-b851-ca5dddeb5148',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Safe-neutral-but-flat → balanced-and-persuasive: keep the fairness but add a clear point of view on why this specific trade-off is the right one to accept, without abandoning acknowledgment of the cost.",
  "interventionPrompts": [
    "This is fair, but it's not persuasive — where's your actual view on which trade-off is worth it?",
    "Balance doesn't mean refusing to have a position — reformulate with one.",
    "Say it again so a skeptic on either side would still find it credible."
  ]
}$json$::jsonb,
  true
),
(
  '43bb2b5c-7a5a-46cf-b851-ca5dddeb5148',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Deliver the same recommendation to a stakeholder group that will be most resistant to it, and adjust only emphasis, not content.",
  "recovery": "If persuasiveness is hard to add without losing neutrality, ask \"what would you say if you had to defend this recommendation to the side that loses the most?\" — that answer usually supplies the missing conviction."
}$json$::jsonb,
  true
);
