import React from "react";
import { UnseenPlayer, UCover, UPlan, UText, UQuestion, UEnd } from "./unseenKit.jsx";

// Unseen Reading, Part 1 (Module E): two short texts the student has never seen, four questions each.
// The article has its own page, every question has its own page, and checking shows the right answer and why.
// Everything here is written by Sentenco. Level: A2 to low B1.

const TITLE = "Unseen Reading: Part 1";

const TEXTS = {
  A: {
    label: "Text 1",
    kind: "Article",
    title: "The Library Van",
    text:
      "Every Tuesday and Friday, a small blue van stops in the main square of Little Brook, a village with no library. The van carries more than 2,000 books, and anyone can borrow up to four at a time.\n\nThe driver, Mrs Hall, used to be a teacher. “Many children here don’t have books at home,” she says. “So I bring the books to them.” Last year the van also started a story hour for little children at 4 p.m. At first only five children came, but now there are often thirty.\n\nThe village council wants to buy a second van, because people in the next village are asking for one too. But a new van costs a lot of money.",
  },
  B: {
    label: "Text 2",
    kind: "Diary",
    title: "Climbing Diary",
    text:
      "Monday. I was scared today. My brother Leo takes me to the climbing wall after school, and I had never climbed before. The wall was much higher than I expected! The instructor, Sara, gave me special shoes and showed me how to hold the rope. I only got halfway up before my arms hurt, so I came down and had a hot chocolate. Leo laughed, but he told me that his first time was worse.\n\nFriday. I climbed every day this week, and today I reached the top! I felt so proud that I took a photo. Next Saturday, Leo and I will try a harder wall.",
  },
};

const ITEMS = [
  {
    text: "A", kind: "Detail",
    prompt: "How many books can a person borrow at one time?",
    options: ["Two books.", "Four books.", "Thirty books."],
    correct: 1,
    explain: "The text says anyone can borrow “up to four at a time”. Thirty is the number of children at the story hour, not books.",
    evidence: "anyone can borrow up to four at a time",
    note: "First question: have her find the sentence with “borrow” before she looks at the options. Ask what thirty counts.",
  },
  {
    text: "A", kind: "Detail",
    prompt: "The story hour is for…",
    options: ["teachers.", "the whole village.", "little children."],
    correct: 2,
    explain: "The text says “a story hour for little children at 4 p.m.” Mrs Hall used to be a teacher, but the story hour is not for teachers.",
    evidence: "a story hour for little children at 4 p.m.",
    note: "Ask her: who is Mrs Hall? Why is “teachers” tempting? Then find the exact sentence about the story hour.",
  },
  {
    text: "A", kind: "Reason",
    prompt: "Why does Mrs Hall bring the books to the village?",
    options: ["She wants to sell them.", "Many children have no books at home.", "The council told her to."],
    correct: 1,
    explain: "She says: “Many children here don’t have books at home.” Nothing says the books are sold, and the council only appears later in the text.",
    evidence: "Many children here don’t have books at home",
    note: "Reason questions: look for the speaker’s own explanation. Have her read Mrs Hall’s sentence aloud.",
  },
  {
    text: "A", kind: "Reason",
    prompt: "Why does the council want a second van?",
    options: ["The first van is broken.", "People in another village want one.", "Mrs Hall wants to stop driving."],
    correct: 1,
    explain: "The text says “people in the next village are asking for one too”. It does not say the van is broken or that Mrs Hall wants to stop.",
    evidence: "people in the next village are asking for one too",
    note: "Ask her: where does the text say why? Then check that the other two are only ideas, not facts from the text.",
  },
  {
    text: "B", kind: "Detail",
    prompt: "What did the writer do after climbing halfway on Monday?",
    options: ["She had a drink.", "She reached the top.", "She went home at once."],
    correct: 0,
    explain: "She “came down and had a hot chocolate”. Reaching the top happened on Friday, in a different diary entry.",
    evidence: "I only got halfway up before my arms hurt, so I came down and had a hot chocolate.",
    note: "Ask which day each action happened. Monday and Friday are the two entries.",
  },
  {
    text: "B", kind: "Word in context",
    prompt: "In the diary, “proud” means…",
    options: ["tired after exercise.", "happy about something you did.", "afraid of falling."],
    correct: 1,
    explain: "She reached the top and took a photo to remember it, so “proud” means happy about something she did. She was scared on Monday, but proud on Friday.",
    evidence: "I felt so proud that I took a photo.",
    note: "Word-in-context: do not translate. Ask what happened just before “proud” and how she would feel.",
  },
  {
    text: "B", kind: "Feeling",
    prompt: "How did Leo behave after the writer’s first climb?",
    options: ["He was angry with her.", "He wanted to stop going.", "He was kind and understood."],
    correct: 2,
    explain: "Leo laughed, but then he said his first time was worse, so she would feel better. The words after “but” show he was kind.",
    evidence: "Leo laughed, but he told me that his first time was worse.",
    note: "Ask what “but” does in the sentence. The second half changes the feeling of the first half.",
  },
  {
    text: "B", kind: "Future",
    prompt: "What will the writer do next Saturday?",
    options: ["Take a photo at the top.", "Buy new climbing shoes.", "Try a harder wall."],
    correct: 2,
    explain: "The text says “Next Saturday, Leo and I will try a harder wall.” The photo was taken on Friday, and Sara gave her the shoes.",
    evidence: "Next Saturday, Leo and I will try a harder wall.",
    note: "Have her underline “next” and “will”. Then ask which options are past events.",
  },
];

const ids = (t) => ITEMS.map((it, i) => ({ it, id: `u1-${i + 1}` })).filter((x) => x.it.text === t).map((x) => x.id);

function questionSlide(it, idx) {
  const t = TEXTS[it.text];
  const inText = ITEMS.filter((x) => x.text === it.text);
  const n = inText.indexOf(it) + 1;
  return {
    stage: `${t.label} · Question ${n} of ${inText.length}`,
    note: it.note,
    body: (
      <UQuestion
        id={`u1-${idx + 1}`}
        n={n}
        total={inText.length}
        kind={it.kind}
        prompt={it.prompt}
        options={it.options}
        correct={it.correct}
        explain={it.explain}
        textTitle={t.title}
        text={t.text}
        evidence={it.evidence}
      />
    ),
  };
}

const textSlide = (key) => ({
  stage: `${TEXTS[key].label} · ${TEXTS[key].kind}`,
  note: "Give her time to read the whole text once, without stopping. The questions come on the next pages, and she can reopen the text with the “See text” button.",
  body: <UText eyebrow={`${TEXTS[key].label} · ${TEXTS[key].kind}`} title={TEXTS[key].title} text={TEXTS[key].text} />,
});

const SLIDES = [
  {
    stage: "Unseen Reading", title: true,
    note: "A short reading lesson on texts the student has never seen. Two texts, four questions each, one page per question. Keep it relaxed: the aim is a habit, not a score.",
    body: <UCover title={TITLE} module="MODULE E" />,
  },
  {
    stage: "Today’s Plan",
    note: "Read the plan in half a minute. The habit for the lesson: question first, then evidence.",
    body: (
      <UPlan
        goal="Goal: answer from the text, not from guessing"
        text="With a text you have never seen, the answer is always in the words. Your job is to find them."
        items={[
          ["Text 1", `${TEXTS.A.title}, 4 questions`, "8 min"],
          ["Text 2", `${TEXTS.B.title}, 4 questions`, "8 min"],
          ["Wrap-up", "Your score", "1 min"],
        ]}
      />
    ),
  },
  textSlide("A"),
  ...ITEMS.map((it, idx) => ({ it, idx })).filter((x) => x.it.text === "A").map((x) => questionSlide(x.it, x.idx)),
  textSlide("B"),
  ...ITEMS.map((it, idx) => ({ it, idx })).filter((x) => x.it.text === "B").map((x) => questionSlide(x.it, x.idx)),
  {
    stage: "The End",
    note: "Read the total. If one text went worse, ask which question type caught her out.",
    body: (
      <UEnd
        title={TITLE}
        ids={ITEMS.map((_, i) => `u1-${i + 1}`)}
        parts={[
          { label: "Text 1", title: TEXTS.A.title, ids: ids("A") },
          { label: "Text 2", title: TEXTS.B.title, ids: ids("B") },
        ]}
      />
    ),
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

export default function UnseenReadingPart1Lesson() {
  return <UnseenPlayer slides={SLIDES} />;
}
