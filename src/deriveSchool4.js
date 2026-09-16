// DERIVE, School Life Track, Lesson 4: "Create"
// One word family drilled across the whole lesson. 10 gap-fill sentences,
// 2 per form (5 forms x 2 = 10), each form the correct answer exactly twice.

export default {
  id: "derive-school-4",
  code: "L4",
  title: "Word Family: Create",
  root: "create",
  family: ["create", "creating", "created", "creation", "creative"],
  sentences: [
    { text: "Students will ___ a poster for the science fair.", answer: "create" },
    { text: "She's always been very ___ in art class.", answer: "creative" },
    { text: "The mural was a ___ of the whole class.", answer: "creation" },
    { text: "He ___ a short story for the contest.", answer: "created" },
    { text: "They're ___ a presentation together.", answer: "creating" },
    { text: "Let's ___ a study plan for exams.", answer: "create" },
    { text: "The assignment needs a ___ approach.", answer: "creative" },
    { text: "This app was a student's ___.", answer: "creation" },
    { text: "The group ___ a model of the solar system.", answer: "created" },
    { text: "We're ___ flashcards to study vocabulary.", answer: "creating" },
  ],
  // For each sentence, above, at the same index: which cue (see
  // DERIVE_CUES in DeriveGuide.jsx) tells the student to pick that form,
  // plus a short sentence-specific note for a first-time teacher to read
  // or paraphrase when they ask the student to justify their answer.
  teacherGuide: [
    { cue: "A", note: "After the modal “will”, use the plain base form of the verb — no -ing, no -ed." },
    { cue: "F", note: "“Has always been very ___” is describing a trait she has, not an action — the “has been” here belongs to “be,” not to the blank, so it still calls for the adjective." },
    { cue: "E", note: "The blank comes right after “a”, an article — that's always followed by a noun, the thing being named." },
    { cue: "D", note: "No helper verb before the blank, and “he” goes straight into the action — that's the simple past." },
    { cue: "B", note: "“They're” means “they are.” Is/am/are followed by a verb needs the -ing form — this is happening right now." },
    { cue: "A", note: "“Let's” means “let us” — it works just like “to” or a modal, followed by the plain base form of the verb." },
    { cue: "F", note: "The blank sits right before the noun “approach”, describing what kind of approach it is — that's the adjective form, even with no “be” verb nearby." },
    { cue: "E", note: "“A student's ___” — a possessive right before the blank — signals a noun is coming, the thing the student made." },
    { cue: "D", note: "No helper verb before the blank, and “the group” goes straight into the action — simple past again." },
    { cue: "B", note: "“We're” means “we are.” Am/is/are followed by a verb needs the -ing form — something in progress right now." },
  ],
};
