// DERIVE, School Life Track, Lesson 7: "Memorize"
// One word family drilled across the whole lesson. 8 gap-fill sentences,
// 2 per form (4 forms x 2 = 8), each form the correct answer exactly twice.

export default {
  id: "derive-school-7",
  code: "L7",
  title: "Word Family: Memorize",
  root: "memorize",
  family: ["memorize", "memorizing", "memorized", "memorization"],
  sentences: [
    { text: "We have to ___ twenty new words this week.", answer: "memorize" },
    { text: "Simple ___ won't help you understand the topic.", answer: "memorization" },
    { text: "She ___ the whole poem for class.", answer: "memorized" },
    { text: "He's ___ the periodic table for the quiz.", answer: "memorizing" },
    { text: "It's easier to ___ facts with flashcards.", answer: "memorize" },
    { text: "The teacher doesn't like pure ___ without understanding.", answer: "memorization" },
    { text: "They ___ their lines for the school play.", answer: "memorized" },
    { text: "I'm still ___ the formulas for tomorrow.", answer: "memorizing" },
  ],
  // For each sentence, above, at the same index: a short, self-contained
  // note for a first-time teacher to read or paraphrase when they ask the
  // student to justify their answer, right before marking it correct.
  teacherGuide: [
    { note: "'Have to' ends in 'to', so the verb after it stays in its plain form, no -ing and no -ed." },
    { note: "The word itself names the idea being talked about here, so it needs the noun form, even with no 'a' or 'the' in front of it." },
    { note: "There's no helper verb here. The sentence goes straight into the action, so this is the simple past." },
    { note: "'He's' means 'He is'. After is/am/is/are, the verb takes the -ing form because it's happening right now." },
    { note: "The word right before the blank is 'to'. After 'to', the verb stays in its plain form, no -ing and no -ed." },
    { note: "The word itself names the idea being talked about here, so it needs the noun form, even with no 'a' or 'the' in front of it." },
    { note: "There's no helper verb here. The sentence goes straight into the action, so this is the simple past." },
    { note: "'I'm' means 'I am'. After am/am/is/are, even with 'still' in between, the verb takes the -ing form because it's happening right now." },
  ],
};
