// DERIVE, School Life Track, Lesson 6: "Study"
// One word family drilled across the whole lesson. 8 gap-fill sentences,
// 2 per form (4 forms x 2 = 8), each form the correct answer exactly twice.

export default {
  id: "derive-school-6",
  code: "L6",
  title: "Word Family: Study",
  root: "study",
  family: ["study", "studying", "studied", "student"],
  sentences: [
    { text: "You should ___ a little every night, not just before exams.", answer: "study" },
    { text: "Every ___ needs a quiet place to work.", answer: "student" },
    { text: "She ___ for three hours before the test.", answer: "studied" },
    { text: "He's ___ for his chemistry final right now.", answer: "studying" },
    { text: "It's hard to ___ with the TV on.", answer: "study" },
    { text: "The new ___ transferred in from another school.", answer: "student" },
    { text: "They ___ together at the library last night.", answer: "studied" },
    { text: "We're ___ the same chapter this week.", answer: "studying" },
  ],
  // For each sentence, above, at the same index: a short, self-contained
  // note for a first-time teacher to read or paraphrase when they ask the
  // student to justify their answer, right before marking it correct.
  teacherGuide: [
    { note: "The word before the blank is the modal 'should'. After a modal, the verb stays in its plain form." },
    { note: "The blank comes right after 'Every'. After a word like that, the next word is a noun." },
    { note: "There's no helper verb here. The sentence goes straight into the action, so this is the simple past." },
    { note: "'He's' means 'He is'. After is/am/is/are, the verb takes the -ing form because it's happening right now." },
    { note: "The word right before the blank is 'to'. After 'to', the verb stays in its plain form, no -ing and no -ed." },
    { note: "'The new' is an article plus a describing word, so the blank needs to be a noun next." },
    { note: "There's no helper verb here. The sentence goes straight into the action, so this is the simple past." },
    { note: "'We're' means 'We are'. After are/am/is/are, the verb takes the -ing form because it's happening right now." },
  ],
};
