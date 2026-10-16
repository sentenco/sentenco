import React from "react";
import { UnseenPlayer, UCover } from "./unseenKit.jsx";
import { KIT_STYLES, TestMcq, TestPick, TestSpell, TestResults, TestMistakes } from "./linoyKit.jsx";

// Lesson 4 of Linoy's exam prep (teen, high B1): the review test. No Kickoff and no teaching.
// 25 questions in 5 sections (Definitions, Synonyms, Spelling, Stative verbs, Present simple vs progressive).
// The words are new: none of them were used in the Kickoffs of lessons 1 to 3.
// No feedback while she answers. At the end: score by section, then the mistakes with the right answers.
// The only voice is the spelling words, as in lesson 3.

const TITLE = "Review Test";
const norm = (t) => (t || "").trim().toLowerCase();

const SECTIONS = [
  {
    key: "def", label: "Definitions",
    items: [
      { id: "d1", kind: "mcq", pos: "verb", text: "to have or include something as a part", options: ["obtain", "contain", "maintain"], correct: 1 },
      { id: "d2", kind: "mcq", pos: "verb", text: "to not have enough of something", options: ["lack", "lift", "lend"], correct: 0 },
      { id: "d3", kind: "mcq", pos: "adjective", text: "feeling sure about yourself and what you can do", options: ["anxious", "curious", "confident"], correct: 2 },
      { id: "d4", kind: "mcq", pos: "noun", text: "something you do often, without thinking about it", options: ["habit", "hobby", "habitat"], correct: 0 },
      { id: "d5", kind: "mcq", pos: "adverb", text: "in a way that is easy for everyone to see or understand", options: ["occasionally", "obviously", "eventually"], correct: 1 },
    ],
  },
  {
    key: "syn", label: "Synonyms",
    items: [
      { id: "y1", kind: "mcq", pos: "closest in meaning to", word: true, text: "hardly ever", options: ["rarely", "usually", "often"], correct: 0 },
      { id: "y2", kind: "mcq", pos: "closest in meaning to", word: true, text: "enormous", options: ["tiny", "ordinary", "huge"], correct: 2 },
      { id: "y3", kind: "mcq", pos: "closest in meaning to", word: true, text: "frightened", options: ["bored", "scared", "annoyed"], correct: 1 },
      { id: "y4", kind: "mcq", pos: "closest in meaning to", word: true, text: "annoyed", options: ["irritated", "pleased", "relaxed"], correct: 0 },
      { id: "y5", kind: "mcq", pos: "closest in meaning to", word: true, text: "purchase", options: ["borrow", "sell", "buy"], correct: 2 },
    ],
  },
  {
    key: "spell", label: "Spelling",
    items: [
      { id: "w1", kind: "spell", group: "sp1", n: 1, word: "swimming", sentence: "They are swimming in the lake." },
      { id: "w2", kind: "spell", group: "sp1", n: 2, word: "watches", sentence: "She watches videos every night." },
      { id: "w3", kind: "spell", group: "sp1", n: 3, word: "deciding", sentence: "We are deciding where to eat." },
      { id: "w4", kind: "spell", group: "sp2", n: 4, word: "carries", sentence: "He carries a heavy bag." },
      { id: "w5", kind: "spell", group: "sp2", n: 5, word: "tidying", sentence: "She is tidying her room." },
    ],
  },
  {
    key: "state", label: "Stative verbs",
    items: [
      { id: "st1", kind: "pick", n: 1, before: "These shoes", after: "to my sister.", options: ["belong", "are belonging"], correct: 0 },
      { id: "st2", kind: "pick", n: 2, before: "He", after: "to be tired today.", options: ["is seeming", "seems"], correct: 1 },
      { id: "st3", kind: "pick", n: 3, before: "I", after: "a dog.", options: ["have", "am having"], correct: 0 },
      { id: "st4", kind: "pick", n: 4, before: "Right now, she", after: "lunch with her friends.", options: ["has", "is having"], correct: 1 },
      { id: "st5", kind: "pick", n: 5, before: "I", after: "about my trip right now.", options: ["think", "am thinking"], correct: 1 },
    ],
  },
  {
    key: "tense", label: "Present tenses",
    items: [
      { id: "pt1", kind: "pick", n: 1, before: "Look! The cat", after: "on my bed.", options: ["sleeps", "is sleeping"], correct: 1 },
      { id: "pt2", kind: "pick", n: 2, before: "My sister", after: "chess every Friday.", options: ["is playing", "plays"], correct: 1 },
      { id: "pt3", kind: "pick", n: 3, before: "We", after: "TV at the moment.", options: ["don’t watch", "aren’t watching"], correct: 1 },
      { id: "pt4", kind: "pick", n: 4, before: "He usually", after: "up at seven.", options: ["gets", "is getting"], correct: 0 },
      { id: "pt5", kind: "pick", n: 5, before: "", after: "your brother like pizza?", options: ["Is", "Does"], correct: 1 },
    ],
  },
];

const grade = (it, store) => {
  if (it.kind === "spell") return norm((store["tsp-" + it.group] || {})[it.n]) === it.word;
  return store["pick-" + it.id] === it.correct;
};

const describe = (it, store) => {
  if (it.kind === "spell") {
    return { q: it.sentence.replace(it.word, "______"), mine: (store["tsp-" + it.group] || {})[it.n], answer: it.word };
  }
  const mine = store["pick-" + it.id];
  const mineText = mine === null || mine === undefined ? "" : it.options[mine];
  if (it.kind === "pick") return { q: `${it.before} ______ ${it.after}`.trim(), mine: mineText, answer: it.options[it.correct] };
  return { q: `${it.pos}: ${it.text}`, mine: mineText, answer: it.options[it.correct] };
};

const section = (key) => SECTIONS.find((s) => s.key === key);

const mcqSlides = (key, minutes) =>
  section(key).items.map((it, i, arr) => ({
    stage: `${section(key).label} · Question ${i + 1} of ${arr.length}`,
    note: `About ${minutes}. Answer: ${it.options[it.correct]}. No hints and no talking about answers until the end.`,
    body: <TestMcq id={it.id} pos={it.pos} text={it.text} options={it.options} word={it.word} />,
  }));

const pickSlides = (key) => {
  const items = section(key).items;
  const groups = [items.slice(0, 3), items.slice(3)];
  return groups.map((g) => ({
    stage: `${section(key).label} · Questions ${g[0].n} to ${g[g.length - 1].n}`,
    note: `About 2 minutes. Answers: ${g.map((it) => `${it.n} ${it.options[it.correct]}`).join(", ")}. No hints and no talking about answers until the end.`,
    body: <TestPick items={g.map((it) => ({ id: it.id, n: it.n, before: it.before, after: it.after, options: it.options }))} />,
  }));
};

const spellSlides = () => {
  const items = section("spell").items;
  return [items.filter((it) => it.group === "sp1"), items.filter((it) => it.group === "sp2")].map((g) => ({
    stage: `Spelling · Words ${g[0].n} to ${g[g.length - 1].n}`,
    note: `About 2 minutes. Press Play: the voice says the word, the word in a sentence, then the word again. She types it. Nothing is marked until the end. If the voice sounds poor, say the words yourself: ${g.map((it) => `${it.n} ${it.word}: ${it.sentence}`).join(" ")}`,
    body: <TestSpell group={g[0].group} items={g.map((it) => ({ n: it.n, word: it.word, sentence: it.sentence }))} />,
  }));
};

const SLIDES = [
  {
    stage: "Exam preparation", title: true,
    note: "About half a minute. Lesson 4 of 4. 25 questions in 5 sections: definitions, synonyms, spelling, stative verbs and present tenses. No hints, no rules and no talking about answers until the end. The words are new, so this shows what she can do, not what she remembers from the Kickoffs. The Teacher guide on each slide has the answers.",
    body: <UCover title={TITLE} module="LESSON 4" />,
  },
  ...mcqSlides("def", "1 minute"),
  ...mcqSlides("syn", "1 minute"),
  ...spellSlides(),
  ...pickSlides("state"),
  ...pickSlides("tense"),
  {
    stage: "Your score",
    note: "About 1.5 minutes. Read the total, then the score for each section. The weakest section shows what to teach next. Press Next to see the mistakes with the right answers.",
    body: <TestResults title={TITLE} sections={SECTIONS} grade={grade} />,
  },
  {
    stage: "Check the mistakes",
    note: "About 3 minutes. Go through each mistake with her: her answer is in red, the right answer in green. Ask her to say why before you explain. Finish Lesson closes the window.",
    body: <TestMistakes sections={SECTIONS} grade={grade} describe={describe} />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

export default function ReviewTestLesson() {
  return <UnseenPlayer slides={SLIDES} extraStyles={KIT_STYLES} teacherNotes />;
}
