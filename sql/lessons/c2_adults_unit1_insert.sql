-- Sentenco C2 Adults -- Unit 1: High-Stakes Argument and Rebuttal
-- Mode order: Performance -> Model -> Output
-- Content sourced from docs/curriculum/c2-adults.md and
-- c2-adults-teacher-guidance.md.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'da35b21e-400e-455b-8e5c-095f5691d88f',
  'A Position, Sharpened',
  'C2',
  'adults',
  1,
  1,
  'Take a position on a genuinely consequential issue under severe time pressure, then refine it for precision, control, and rhetorical impact — not just clarity, which C1 already secured.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9440fbba-cb8c-4c58-be51-dfe3ce618000',
  'Facing an Informed Skeptic',
  'C2',
  'adults',
  1,
  2,
  'Defend a position against sustained, well-informed objection from someone who can cite data or alternative frameworks — requires strategic rebuttal and selective concession, not just holding ground.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ad2225fe-4cbd-4df2-a2d3-a46d51653365',
  'Beyond the Right Answer',
  'C2',
  'adults',
  1,
  3,
  'Work toward a decision where the outcome has real consequences (resource reallocation, project cancellation), balancing persuasive structure with relationship and reputation considerations.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'bd1afc14-8bfd-47da-a9da-bfdb0380fe28',
  'One Advanced Move, Reused',
  'C2',
  'adults',
  1,
  4,
  'Analyze a genuinely high-quality argumentative text (op-ed, boardroom pitch, expert panel clip) for stance, architecture, and nuance beyond what C1 models demonstrated.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '55ccf09d-467b-46e8-8199-555694f22883',
  'Do They Even Disagree?',
  'C2',
  'adults',
  1,
  5,
  'Explain multiple serious sources fairly to a decision-maker, highlighting where arguments align, conflict, or talk past each other — a step beyond C1''s two-source comparison in both source density and precision of the "talk past each other" category.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '398d5039-6a90-4a3b-a04f-3de6905c4be4',
  'Building Toward, Not Announcing',
  'C2',
  'adults',
  1,
  6,
  'Map how speakers in a high-stakes discussion build and sequence arguments, invite counterviews, and steer toward conclusions without shutting down disagreement.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8f390516-3b6c-4d66-8fe1-89c13cfa1710',
  'Naming Your Own Limitation',
  'C2',
  'adults',
  1,
  7,
  'Produce a C2-level written synthesis integrating multiple arguments and evidence, explicitly signaling strengths and limitations, for a senior audience.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '24b29d80-9a02-48eb-9a50-9c0aa37c5f30',
  'Pre-Empting the Real Objection',
  'C2',
  'adults',
  1,
  8,
  'Write a tightly structured, persuasive proposal section for a critical audience, including anticipated counterarguments and pre-emptive rebuttal.',
  20,
  4,
  true
);

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8b41d0ef-8a80-471d-8606-4bb40cd1260a',
  'From Stance to Strategy',
  'C2',
  'adults',
  1,
  9,
  'Convert a spoken stance into a concise strategic briefing or slide outline for a high-stakes meeting, with clear narrative, rhetorical framing, and call to action.',
  20,
  4,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'da35b21e-400e-455b-8e5c-095f5691d88f',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "You have 60-90 seconds and almost no prep time. Take a position on a real policy or organizational decision. Then immediately refine it — not for clarity, you're already clear, but for rhetorical sharpness."
}$json$::jsonb,
  true
),
(
  'da35b21e-400e-455b-8e5c-095f5691d88f',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Take a position on a genuinely consequential issue under severe time pressure, then refine it for precision, control, and rhetorical impact — not just clarity, which C1 already secured.",
  "listenFor": "A stance that is already clear and reasoned (the C1 baseline) but generic in phrasing — reasons that would work in almost any argument, not tailored to this one's actual stakes.",
  "likelyResponses": [
    "I think we should proceed with the merger because it creates growth opportunities and reduces long-term risk."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "rhetorical economy, contrastive framing"
    },
    {
      "dimension": "Naturalness",
      "note": "sounding native-sharp, not textbook-correct"
    }
  ]
}$json$::jsonb,
  true
),
(
  'da35b21e-400e-455b-8e5c-095f5691d88f',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Generic-but-correct → sharpened and specific: \"The real argument for this merger isn't growth in the abstract — it's that we're one product cycle away from losing this window entirely.\" Push toward concrete, situation-specific stakes and away from portable boilerplate.",
  "interventionPrompts": [
    "That argument would work for any merger — what's specific to this one?",
    "Cut the general business language. What's the actual stake, in plain terms?",
    "Say it again as if this were the only sentence anyone would hear."
  ]
}$json$::jsonb,
  true
),
(
  'da35b21e-400e-455b-8e5c-095f5691d88f',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner deliver the same stance to an audience that will lose something from the decision, and adjust framing without softening the substance.",
  "recovery": "If specificity doesn't come, ask \"what's the one number or fact that makes this urgent right now?\" and build the sharpened stance around that answer."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9440fbba-cb8c-4c58-be51-dfe3ce618000',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Defend your position against an informed skeptic who cites real counter-evidence. Concede selectively where they're right — but hold the core of your position."
}$json$::jsonb,
  true
),
(
  '9440fbba-cb8c-4c58-be51-dfe3ce618000',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Defend a position against sustained, well-informed objection from someone who can cite data or alternative frameworks — requires strategic rebuttal and selective concession, not just holding ground.",
  "listenFor": "Whether concessions are strategic (given up because they don't matter to the core claim) or reflexive (given up because the pressure felt uncomfortable); whether cited counter-evidence gets engaged specifically or waved away generally.",
  "likelyResponses": [
    "That's a good point, but I still think my overall position is right."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "engaging specific counter-evidence"
    },
    {
      "dimension": "Pragmatics",
      "note": "strategic, not reflexive, concession"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9440fbba-cb8c-4c58-be51-dfe3ce618000',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "General deflection → specific engagement with selective concession: \"That data point is real, and it does weaken the cost argument specifically — but it doesn't touch the timeline argument, which is where the actual case rests.\"",
  "interventionPrompts": [
    "You didn't engage their specific evidence — do that, by name.",
    "What exactly are you conceding, and what are you explicitly not conceding?",
    "Which part of your argument survives this challenge untouched? Say that part precisely."
  ]
}$json$::jsonb,
  true
),
(
  '9440fbba-cb8c-4c58-be51-dfe3ce618000',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the skeptic cite a second, independent piece of counter-evidence targeting a different part of the argument.",
  "recovery": "If the learner can't isolate what survives a concession, ask directly: \"if that point is true, what part of your case still stands?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ad2225fe-4cbd-4df2-a2d3-a46d51653365',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Performance",
  "task": "Work through a high-stakes decision scenario. Factor in not just the best substantive outcome, but the reputational and relational fallout of how you reach it."
}$json$::jsonb,
  true
),
(
  'ad2225fe-4cbd-4df2-a2d3-a46d51653365',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Work toward a decision where the outcome has real consequences (resource reallocation, project cancellation), balancing persuasive structure with relationship and reputation considerations.",
  "listenFor": "Whether reputational/relational considerations are actually voiced in the negotiation, or only the substantive merits — a strong-C1 pattern is to negotiate the content well while ignoring the politics entirely.",
  "likelyResponses": [
    "A well-argued, substantively sound proposal that never once addresses how the \"losing\" party will be seen by others as a result of the decision."
  ],
  "scorecardFocus": [
    {
      "dimension": "Pragmatics",
      "note": "reputational/relational awareness"
    },
    {
      "dimension": "Interaction Control",
      "note": "negotiating stakes beyond the stated content"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ad2225fe-4cbd-4df2-a2d3-a46d51653365',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Substance-only → substance-plus-standing: \"This is the right call on the merits, and I want to make sure it's framed so that your team's contribution here is visible, not erased.\"",
  "interventionPrompts": [
    "You've made the substantive case — now, how does the other side come out of this looking?",
    "Is there a way to get the same outcome while protecting their standing?",
    "Say the part of this proposal that costs you something, out loud."
  ]
}$json$::jsonb,
  true
),
(
  'ad2225fe-4cbd-4df2-a2d3-a46d51653365',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add an observer role (a third party whose future opinion matters to both negotiators) to raise the reputational stakes further.",
  "recovery": "If reputational framing doesn't surface, ask \"who else is watching this decision, and what will they conclude about each side?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'bd1afc14-8bfd-47da-a9da-bfdb0380fe28',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a C2-caliber argumentative text. Find one nuance move it makes — a calibrated concession, or a conclusion left implied rather than stated — then reuse that exact strategy in your own short turn."
}$json$::jsonb,
  true
),
(
  'bd1afc14-8bfd-47da-a9da-bfdb0380fe28',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Analyze a genuinely high-quality argumentative text (op-ed, boardroom pitch, expert panel clip) for stance, architecture, and nuance beyond what C1 models demonstrated.",
  "listenFor": "Whether learners can name a genuinely advanced move (not just \"good structure,\" which is a C1-level observation already covered) — implication, understatement, strategic ambiguity.",
  "likelyResponses": [
    "The argument is well organized and the speaker sounds confident."
  ],
  "scorecardFocus": [
    {
      "dimension": "Advanced Range",
      "note": "implication, strategic omission"
    },
    {
      "dimension": "Discourse Control",
      "note": "persuasion through structure, not just content"
    }
  ]
}$json$::jsonb,
  true
),
(
  'bd1afc14-8bfd-47da-a9da-bfdb0380fe28',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Structural competence-noticing → nuance-isolating: \"Notice the speaker never states the conclusion directly in the final line — they leave it implied, which makes the audience arrive at it themselves and feel more persuaded by their own reasoning.\"",
  "interventionPrompts": [
    "You've named what's good — now name what's advanced. What couldn't a strong C1 speaker do here?",
    "Where does the speaker deliberately leave something unsaid?",
    "Try leaving your own conclusion implied instead of stated."
  ]
}$json$::jsonb,
  true
),
(
  'bd1afc14-8bfd-47da-a9da-bfdb0380fe28',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Compare two models — one that states its conclusion explicitly, one that leaves it implied — and evaluate which is more effective for a skeptical audience specifically.",
  "recovery": "If nuance-spotting stalls, point to the specific sentence/silence and ask only \"why leave that unsaid?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '55ccf09d-467b-46e8-8199-555694f22883',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will give you two or three dense sources. Brief the room — and specifically call out any sources that don't actually engage each other at all, even though they look like they disagree."
}$json$::jsonb,
  true
),
(
  '55ccf09d-467b-46e8-8199-555694f22883',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Explain multiple serious sources fairly to a decision-maker, highlighting where arguments align, conflict, or talk past each other — a step beyond C1's two-source comparison in both source density and precision of the \"talk past each other\" category.",
  "listenFor": "Whether the learner can distinguish \"disagree\" from \"talk past each other\" — a distinction most C1 output collapses, since both look like disagreement on the surface.",
  "likelyResponses": [
    "These two sources disagree about the best approach."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "align/conflict/talk-past-each-other distinction"
    },
    {
      "dimension": "Discourse Control",
      "note": "structuring a decision-maker briefing"
    }
  ]
}$json$::jsonb,
  true
),
(
  '55ccf09d-467b-46e8-8199-555694f22883',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Coarse disagreement → precise categorization: \"These aren't really disagreeing — Source A is answering 'what's cheapest' and Source B is answering 'what's most durable.' They're talking past each other, not contradicting each other.\"",
  "interventionPrompts": [
    "Are they actually disagreeing, or answering different questions?",
    "What would it take to make these sources genuinely comparable?",
    "Brief the decision-maker on that distinction specifically — it changes what the decision-maker should do next."
  ]
}$json$::jsonb,
  true
),
(
  '55ccf09d-467b-46e8-8199-555694f22883',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Add a source that genuinely conflicts with one of the originals, so all three categories (align, conflict, talk past) are present at once.",
  "recovery": "Ask the diagnostic question directly: \"are they answering the same question?\" — if no, it's likely talking-past, not conflict."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '398d5039-6a90-4a3b-a04f-3de6905c4be4',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Model",
  "task": "Your teacher will share a model executive meeting or panel. Trace how the speaker invites counterviews rather than suppressing them, and how the argument builds toward its conclusion instead of announcing it."
}$json$::jsonb,
  true
),
(
  '398d5039-6a90-4a3b-a04f-3de6905c4be4',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Map how speakers in a high-stakes discussion build and sequence arguments, invite counterviews, and steer toward conclusions without shutting down disagreement.",
  "listenFor": "Whether learners notice the strategic function of *inviting* disagreement (a confidence and legitimacy signal) versus just tolerating it when it arises unprompted.",
  "likelyResponses": [
    "The speaker lets other people talk and doesn't get defensive."
  ],
  "scorecardFocus": [
    {
      "dimension": "Interaction Control",
      "note": "strategic solicitation of disagreement"
    },
    {
      "dimension": "Discourse Control",
      "note": "sequencing toward, not announcing, a conclusion"
    }
  ]
}$json$::jsonb,
  true
),
(
  '398d5039-6a90-4a3b-a04f-3de6905c4be4',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Passive tolerance-noticing → active-invitation noticing: \"They ask 'what am I not seeing here' before anyone challenges them — that's not just openness, it's a deliberate move to control how and when pushback happens.\"",
  "interventionPrompts": [
    "Do they wait for disagreement, or invite it? Find the exact moment.",
    "Why would inviting pushback early be strategically smarter than waiting for it?",
    "Sequence your own argument the same way — invite the counterview before someone else raises it."
  ]
}$json$::jsonb,
  true
),
(
  '398d5039-6a90-4a3b-a04f-3de6905c4be4',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have learners identify a moment where the speaker declines to fully resolve a raised counterview, and evaluate whether that restraint was the right call.",
  "recovery": "Point to the specific line where disagreement is invited and ask only \"what would happen if they hadn't said this?\""
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8f390516-3b6c-4d66-8fe1-89c13cfa1710',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a synthesis (150-180 words) that integrates multiple arguments and evidence — and explicitly names a limitation of your own recommendation, not just its strengths."
}$json$::jsonb,
  true
),
(
  '8f390516-3b6c-4d66-8fe1-89c13cfa1710',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Produce a C2-level written synthesis integrating multiple arguments and evidence, explicitly signaling strengths and limitations, for a senior audience.",
  "listenFor": "Whether the response still stays confidence only, or whether it's begun to show confidence with honest limitation.",
  "likelyResponses": [
    "A well-integrated synthesis that confidently recommends a course of action without acknowledging any weakness in it — persuasive but not fully honest about uncertainty, which a senior reader will notice and discount."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "honest limitation-flagging"
    },
    {
      "dimension": "Register Control",
      "note": "senior-audience credibility register"
    }
  ]
}$json$::jsonb,
  true
),
(
  '8f390516-3b6c-4d66-8fe1-89c13cfa1710',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Confidence-only → confidence-with-honest-limitation: add an explicit sentence naming what the recommendation doesn't solve or where the evidence is weaker than the rest of the case.",
  "interventionPrompts": [
    "What's the weakest part of your own case? Say it, don't hide it.",
    "A senior reader will find the gap anyway — naming it first builds credibility.",
    "Does your limitation actually change the recommendation, or just qualify it? Be precise about which."
  ]
}$json$::jsonb,
  true
),
(
  '8f390516-3b6c-4d66-8fe1-89c13cfa1710',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have the learner write the same synthesis for an audience known to be skeptical of the recommended direction specifically.",
  "recovery": "Ask directly: \"If someone smart disagreed with this, what would they point to?\" — that answer is usually the missing limitation."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '24b29d80-9a02-48eb-9a50-9c0aa37c5f30',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Write a proposal section (150-180 words) that pre-empts the single strongest counterargument a critical reader would raise — before they raise it."
}$json$::jsonb,
  true
),
(
  '24b29d80-9a02-48eb-9a50-9c0aa37c5f30',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Write a tightly structured, persuasive proposal section for a critical audience, including anticipated counterarguments and pre-emptive rebuttal.",
  "listenFor": "Whether the response still stays defends against easy objections, or whether it's begun to show pre empts the real one.",
  "likelyResponses": [
    "A well-argued proposal that is airtight against objections the writer thought of, but silent on the single strongest objection a critical reader would actually raise."
  ],
  "scorecardFocus": [
    {
      "dimension": "Precision",
      "note": "identifying the strongest, not just any, counterargument"
    },
    {
      "dimension": "Discourse Control",
      "note": "pre-emptive rebuttal placement"
    }
  ]
}$json$::jsonb,
  true
),
(
  '24b29d80-9a02-48eb-9a50-9c0aa37c5f30',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Defends-against-easy-objections → pre-empts-the-real-one: identify the single most damaging counterargument specifically and address it head-on, even briefly, rather than a range of minor ones.",
  "interventionPrompts": [
    "You've pre-empted the easy objections — what's the one that actually worries you? Address that one.",
    "If this proposal fails, what will the post-mortem say was the overlooked risk? Answer that now.",
    "One strong pre-emption beats three weak ones — cut to the real one."
  ]
}$json$::jsonb,
  true
),
(
  '24b29d80-9a02-48eb-9a50-9c0aa37c5f30',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Have a peer read the proposal cold and identify the objection the writer missed — compare it to what the writer pre-empted.",
  "recovery": "Ask \"what would the smartest critic in the room say?\" as a direct route to the real counterargument."
}$json$::jsonb,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8b41d0ef-8a80-471d-8606-4bb40cd1260a',
  1,
  'scenario',
  'Your Task',
  null,
  $json${
  "mode": "Output",
  "task": "Convert your Lesson 1 stance into a slide outline or briefing script (5-6 slides' worth) — build a strategic narrative with a clear throughline and an explicit call to action."
}$json$::jsonb,
  true
),
(
  '8b41d0ef-8a80-471d-8606-4bb40cd1260a',
  2,
  'diagnosis',
  'What to Listen For',
  null,
  $json${
  "purpose": "Convert a spoken stance into a concise strategic briefing or slide outline for a high-stakes meeting, with clear narrative, rhetorical framing, and call to action.",
  "listenFor": "Whether the response still stays report structure, or whether it's begun to show strategic narrative.",
  "likelyResponses": [
    "A clear, logically ordered outline that presents information well but reads as a report rather than a strategic narrative — no throughline, no clear \"why decide now.\""
  ],
  "scorecardFocus": [
    {
      "dimension": "Discourse Control",
      "note": "narrative throughline vs. flat sequencing"
    },
    {
      "dimension": "Advanced Range",
      "note": "urgency framing without overstatement"
    }
  ]
}$json$::jsonb,
  true
),
(
  '8b41d0ef-8a80-471d-8606-4bb40cd1260a',
  3,
  'upgrade',
  'From Correct to Controlled',
  null,
  $json${
  "upgradePath": "Report structure → strategic narrative: build an explicit throughline (the tension, why it matters now, what happens if we wait) rather than a flat sequence of informative points.",
  "interventionPrompts": [
    "This reads like a report — where's the tension that makes someone want to act?",
    "Why does this decision need to happen now, specifically, not next quarter?",
    "End on the call to action, not on background information."
  ]
}$json$::jsonb,
  true
),
(
  '8b41d0ef-8a80-471d-8606-4bb40cd1260a',
  4,
  'transfer',
  'Extend or Support',
  null,
  $json${
  "extension": "Compress the same outline to 3 slides, forcing the throughline to become even sharper.",
  "recovery": "If the throughline is missing, ask \"what's the cost of doing nothing?\" — that answer usually supplies the missing urgency."
}$json$::jsonb,
  true
);
