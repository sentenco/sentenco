import React from "react";
import { UnseenPlayer, UCover, UPlan, UText, UQuestion, UEnd } from "./unseenKit.jsx";

// Unseen Reading, Part 3 (Module E): two informative texts the student has never seen, four questions each.
// The article has its own page, every question has its own page, and checking shows the right answer and why.
// Everything here is written by Sentenco. Level: B1+ to low B2.

const TITLE = "Unseen Reading: Part 3";

const TEXTS = {
  A: {
    label: "Text 1",
    kind: "Article",
    title: "How a Vaccine Trains the Body",
    text:
      "Most vaccines contain a harmless piece or a weakened form of a germ, so they cannot make a healthy person ill. When the body meets this sample, special white blood cells produce antibodies, proteins that attach to the germ and mark it for destruction. Some of these cells then become memory cells, which can stay in the body for years.\n\nIf the real germ arrives later, the memory cells recognise it at once and the body produces antibodies much faster than the first time. This is why some vaccines need booster doses: protection can fade over time, and a booster renews it.",
  },
  B: {
    label: "Text 2",
    kind: "Article",
    title: "Microplastics",
    text:
      "Microplastics are tiny pieces of plastic, smaller than five millimetres. Some are made that small, such as the beads once added to face scrubs. Most, however, come from larger items, such as bottles and fishing nets, that slowly break into fragments in sunlight and waves. Washing synthetic clothes also releases thousands of fibres into the waste water.\n\nScientists have found microplastics in oceans, in drinking water and even in human blood. What this means for health is still unclear. Some laboratory studies suggest possible harm, but researchers say more long-term evidence is needed before firm conclusions can be drawn. In the meantime, several countries have banned microbeads in cosmetics.",
  },
};

const ITEMS = [
  {
    text: "A", kind: "Detail",
    prompt: "According to the text, why can most vaccines not make a healthy person ill?",
    options: [
      "They are made from the antibodies of another person.",
      "They destroy the germ before it enters the body.",
      "They contain only a harmless piece or a weakened form of a germ.",
    ],
    correct: 2,
    explain: "The text says most vaccines contain “a harmless piece or a weakened form of a germ”. Nothing says they use other people’s antibodies or destroy the germ outside the body.",
    evidence: "Most vaccines contain a harmless piece or a weakened form of a germ, so they cannot make a healthy person ill.",
    note: "Detail question: ask her to find “cannot make a healthy person ill” first, then read what comes just before it.",
  },
  {
    text: "A", kind: "Reference",
    prompt: "In the first paragraph, “this sample” refers to…",
    options: [
      "the harmless piece or weakened form of the germ.",
      "the real germ that arrives later.",
      "the white blood cells.",
    ],
    correct: 0,
    explain: "“This sample” points back to the piece or weakened germ in the first sentence. The real germ only appears in the second paragraph.",
    evidence: ["When the body meets this sample", "Most vaccines contain a harmless piece or a weakened form of a germ"],
    note: "Reference: “this” points back. Ask her to drop each option into the sentence and say which one the body can meet at the time of the vaccine.",
  },
  {
    text: "A", kind: "Reason",
    prompt: "Why do some vaccines need booster doses?",
    options: [
      "The first dose is always too weak.",
      "Protection can fade over time.",
      "Memory cells disappear after one month.",
    ],
    correct: 1,
    explain: "The text says “protection can fade over time, and a booster renews it”. Nothing says the first dose is weak, and memory cells can stay in the body for years.",
    evidence: "protection can fade over time, and a booster renews it",
    note: "“This is why” introduces the reason. Ask what “this” points back to, and why one month cannot be right (the text says years).",
  },
  {
    text: "A", kind: "Inference",
    prompt: "What can we conclude about a vaccinated person who meets the real germ?",
    options: [
      "They will never become ill from that germ.",
      "They will need a new vaccine for every meeting with the germ.",
      "Their body is likely to respond faster than an unvaccinated person’s.",
    ],
    correct: 2,
    explain: "The memory cells make the body react “much faster than the first time”. The text does not promise the person will never be ill.",
    evidence: "the memory cells recognise it at once and the body produces antibodies much faster than the first time",
    note: "Inference: the text says “faster”, not “never ill”. Ask her which options go further than the text does.",
  },
  {
    text: "B", kind: "Detail",
    prompt: "According to the text, where do most microplastics come from?",
    options: [
      "Larger plastic items that slowly break into pieces.",
      "Beads that were added to face scrubs.",
      "Synthetic clothes washed in machines.",
    ],
    correct: 0,
    explain: "The text says “Most, however, come from larger items” such as bottles and fishing nets. Beads and clothes fibres are real sources, but they are not described as the main one.",
    evidence: "Most, however, come from larger items, such as bottles and fishing nets, that slowly break into fragments in sunlight and waves.",
    note: "Watch the word “most”. Two options are sources the text mentions, but only one is called the main source.",
  },
  {
    text: "B", kind: "Certainty",
    prompt: "What does the text say about the effects of microplastics on health?",
    options: [
      "They have been proved to be harmless.",
      "They have been proved to cause serious illness.",
      "They are still not clear.",
    ],
    correct: 2,
    explain: "The text says what this means for health is “still unclear”, and that more long-term evidence is needed.",
    evidence: ["What this means for health is still unclear.", "more long-term evidence is needed"],
    note: "Certainty: look for words such as “unclear”, “suggest” and “possible”. Two options claim a proof the text never gives.",
  },
  {
    text: "B", kind: "Word in context",
    prompt: "In the text, “firm” in “firm conclusions” means…",
    options: [
      "hard to the touch.",
      "certain and reliable.",
      "strict and severe.",
    ],
    correct: 1,
    explain: "“Firm conclusions” are conclusions you can be sure of, which is why the researchers want more evidence first.",
    evidence: "before firm conclusions can be drawn",
    note: "Word in context: do not translate. Ask what the researchers want before they can say something for sure.",
  },
  {
    text: "B", kind: "Not stated",
    prompt: "Which of these is NOT mentioned in the text?",
    options: [
      "Most microplastics are removed by water treatment plants.",
      "Microplastics have been found in human blood.",
      "Several countries have banned microbeads in cosmetics.",
    ],
    correct: 0,
    explain: "Water treatment is never mentioned. The other two are both stated in the second paragraph.",
    evidence: ["even in human blood", "several countries have banned microbeads in cosmetics"],
    note: "A NOT question: have her find two options in the text. The one left over is the answer.",
  },
];

const ids = (t) => ITEMS.map((it, i) => ({ it, id: `u3-${i + 1}` })).filter((x) => x.it.text === t).map((x) => x.id);

function questionSlide(it, idx) {
  const t = TEXTS[it.text];
  const inText = ITEMS.filter((x) => x.text === it.text);
  const n = inText.indexOf(it) + 1;
  return {
    stage: `${t.label} · Question ${n} of ${inText.length}`,
    note: it.note,
    body: (
      <UQuestion
        id={`u3-${idx + 1}`}
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
    note: "A reading lesson on informative texts the student has never seen. Two texts, four questions each, one page per question.",
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
          ["Text 1", `${TEXTS.A.title}, 4 questions`, "9 min"],
          ["Text 2", `${TEXTS.B.title}, 4 questions`, "9 min"],
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
        ids={ITEMS.map((_, i) => `u3-${i + 1}`)}
        parts={[
          { label: "Text 1", title: TEXTS.A.title, ids: ids("A") },
          { label: "Text 2", title: TEXTS.B.title, ids: ids("B") },
        ]}
      />
    ),
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

export default function UnseenReadingPart3Lesson() {
  return <UnseenPlayer slides={SLIDES} />;
}
