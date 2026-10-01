// Parts of Speech -- Topic 1: Nouns and Pronouns

export default {
  number: 1,
  topicName: "Nouns and Pronouns",

  lessonA: {
    code: "1A",
    title: "Nouns and Pronouns",
    kind: "Lesson",
    objective: "Recognize nouns as words that name people, places, things, or ideas, and use pronouns to replace nouns and avoid repetition.",
    leadIn: "Look around you right now — name three things you can see.",
    concepts: [
      {
        name: "Noun",
        color: "noun",
        definition: "Names a person, place, thing, or idea.",
        examples: [
          "Maria is a **teacher**.",
          "We walked through the **park**.",
        ],
        mistake: {
          wrong: "I have many informations.",
          correct: "I have a lot of information.",
          note: "\"Information\" is uncountable — it never takes an -s.",
        },
      },
      {
        name: "Pronoun",
        color: "pronoun",
        definition: "Replaces a noun so you don't have to repeat it.",
        examples: [
          "Maria is a teacher. **She** is kind.",
          "The dog is barking. **It** is hungry.",
        ],
        mistake: {
          wrong: "Maria is a teacher. He is kind.",
          correct: "Maria is a teacher. She is kind.",
          note: "Match the pronoun to the noun's gender.",
        },
      },
    ],
    compareLeftLabel: "Repeated Noun",
    compareRightLabel: "Pronoun",
    compareNote: "Say the noun once, then switch to a pronoun so the sentence doesn't sound repetitive.",
    comparePairs: [
      { left: "Maria is a teacher. Maria is kind.", right: "Maria is a teacher. She is kind." },
      { left: "The dog is barking. The dog is hungry.", right: "The dog is barking. It is hungry." },
    ],
    guided: [
      { prompt: "Maria is a teacher. ___ is kind.", answer: "She" },
      { prompt: "The dog is barking. ___ is hungry.", answer: "It" },
      { prompt: "Ben and Ana are friends. ___ play after school.", answer: "They" },
      { prompt: "Tom is my neighbor. ___ is very friendly.", answer: "He" },
      { prompt: "The books are on the table. ___ are new.", answer: "They" },
      { prompt: "Sara likes pizza. ___ eats it every Friday.", answer: "She" },
    ],
    independent: [
      "Underline the noun in: “The car is red.”",
      "Circle the pronoun in: “He is my brother.”",
      "Replace the repeated noun: “Sara likes pizza. Sara eats it every Friday.”",
    ],
    wrapup: "Nouns name. Pronouns replace — so match gender and number.",
  },

  lessonB: {
    code: "1B",
    title: "Nouns and Pronouns",
    kind: "Assessment",
    testGoal: "Check that students can identify nouns and pronouns, and replace a repeated noun with the correct pronoun.",
    sections: [
      {
        part: "A", type: "mc", label: "Find the noun", desc: "Choose the noun in each sentence.",
        items: [
          { q: "She reads a book every night.", options: ["She", "reads", "book", "every"], correct: 2 },
          { q: "The children are playing in the park.", options: ["The", "children", "are", "playing"], correct: 1 },
          { q: "He bought a new phone.", options: ["He", "bought", "a", "phone"], correct: 3 },
        ],
      },
      {
        part: "B", type: "mc", label: "Choose the pronoun", desc: "Choose the correct pronoun to replace the underlined noun.",
        items: [
          { q: "Maria is a teacher. ___ is kind.", options: ["He", "She", "It", "They"], correct: 1 },
          { q: "The dog is barking. ___ is hungry.", options: ["He", "She", "It", "They"], correct: 2 },
          { q: "Ben and Ana are friends. ___ play after school.", options: ["He", "She", "It", "They"], correct: 3 },
        ],
      },
      {
        part: "C", type: "reveal", label: "Replace the noun", desc: "Replace the repeated noun with a pronoun.",
        items: [
          { prompt: "Tom is my neighbor. Tom is very friendly.", answer: "Tom is my neighbor. He is very friendly." },
          { prompt: "The books are on the table. The books are new.", answer: "The books are on the table. They are new." },
        ],
      },
      {
        part: "D", type: "error", label: "Fix the pronoun", desc: "Find and fix the pronoun mistake.",
        items: [
          { wrong: "Ben and Ana are friends. He play after school.", correct: "Ben and Ana are friends. They play after school." },
          { wrong: "Maria is a teacher. It is kind.", correct: "Maria is a teacher. She is kind." },
        ],
      },
      {
        part: "E", type: "speaking", label: "Speak it out", desc: "Answer using a noun, then a pronoun.",
        items: [
          "Name one person in your family. What do they do?",
          "Name one place you like. Why do you like it?",
        ],
      },
    ],
  },
};
