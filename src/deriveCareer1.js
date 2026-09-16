// DERIVE, Career & Work Track, Lesson 1: "Decide"
// One word family drilled across the whole lesson. 10 gap-fill sentences,
// 2 per form (5 forms x 2 = 10), each form the correct answer exactly twice.

export default {
  id: "derive-career-1",
  code: "L1",
  title: "Word Family: Decide",
  root: "decide",
  family: ["decide", "deciding", "decided", "decision", "decisive"],
  sentences: [
    { text: "I still need to ___ which offer to take.", answer: "decide" },
    { text: "It was a difficult ___, but I'm glad I made it.", answer: "decision" },
    { text: "She's still ___ between the two job offers.", answer: "deciding" },
    { text: "A good leader needs to be ___ in a crisis.", answer: "decisive" },
    { text: "By the time we left, everything had already been ___.", answer: "decided" },
    { text: "Take your time, you don't have to ___ right now.", answer: "decide" },
    { text: "The final ___ is up to the board.", answer: "decision" },
    { text: "We were ___ on a restaurant when you called.", answer: "deciding" },
    { text: "She's very ___ under pressure, never hesitates.", answer: "decisive" },
    { text: "Have you ___ what you're going to study yet?", answer: "decided" },
  ],
  // For each sentence, above, at the same index: which cue (see
  // DERIVE_CUES in DeriveGuide.jsx) tells the student to pick that form,
  // plus a short sentence-specific note for a first-time teacher to read
  // or paraphrase when they ask the student to justify their answer.
  teacherGuide: [
    { cue: "A", note: "After “to”, use the plain base form of the verb — no -ing, no -ed. “Need to” is always followed by “to + base verb.”" },
    { cue: "E", note: "The blank comes right after “a difficult” — an article plus an adjective. That combination is always followed by a noun, the thing being described." },
    { cue: "B", note: "“She's” here means “she is.” Is/am/are followed by a verb needs the -ing form — this is happening right now (present continuous)." },
    { cue: "F", note: "“Needs to be ___” is describing a quality the leader has, not an action they're doing — that calls for the adjective form." },
    { cue: "C", note: "“Had already been ___” is the passive form: something that WAS DONE, not something the subject did. Same -ed spelling as the simple past, but a different job." },
    { cue: "A", note: "“Have to” works just like “to” alone — it's still followed by the plain base form of the verb." },
    { cue: "E", note: "“The final ___” — an article plus an adjective before the blank — signals a noun is coming, the thing the board makes." },
    { cue: "B", note: "“Were ___” is past continuous — something in progress at that moment — so it needs the -ing form." },
    { cue: "F", note: "“Is very ___” describes what she's like, a trait, not something she's doing — that's the adjective form again." },
    { cue: "C", note: "“Have you ___” is present perfect, asking about something completed — so it takes the -ed/past-participle form." },
  ],
};
