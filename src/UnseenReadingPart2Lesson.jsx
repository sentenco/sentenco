import React from "react";
import { UnseenPlayer, UCover, UPlan, UText, UQuestion, UEnd } from "./unseenKit.jsx";

// Unseen Reading, Part 2 (Module E): two informative texts the student has never seen, four questions each.
// The article has its own page, every question has its own page, and checking shows the right answer and why.
// Everything here is written by Sentenco. Level: B1+ to low B2.

const TITLE = "Unseen Reading: Part 2";

const TEXTS = {
  A: {
    label: "Text 1",
    kind: "Article",
    title: "Why Cities Are Hotter",
    text:
      "Cities are usually several degrees warmer than the countryside around them, an effect known as the urban heat island. The main cause is building materials. Dark roads and roofs absorb sunlight during the day and release the heat slowly after sunset, so city centres can stay hot long into the night. Fewer trees make matters worse, because plants cool the air by releasing water vapour. Tall buildings also block the wind that might otherwise carry the heat away.\n\nOn a summer evening, a city centre can be as much as five degrees Celsius hotter than the villages nearby. To reduce the problem, some cities paint roofs white, plant trees along streets and create small parks.",
  },
  B: {
    label: "Text 2",
    kind: "Article",
    title: "How GPS Works",
    text:
      "A GPS receiver, such as the one in a phone, never sends a signal to the satellites. It only listens. About thirty satellites orbit the Earth, and each one continuously broadcasts its position and the exact time. The receiver measures how long each signal took to arrive. Because radio signals travel at the speed of light, even a tiny delay can be turned into a distance.\n\nOne satellite is not enough, since it only shows that the receiver is somewhere on a huge sphere. With signals from three satellites, the receiver can work out its position. In practice, a fourth is used to correct small errors in the receiver’s own clock, which is far less accurate than the clocks on the satellites. Because the signals are weak, GPS often works poorly inside buildings.",
  },
};

const ITEMS = [
  {
    text: "A", kind: "Detail",
    prompt: "According to the text, why can city centres stay hot after sunset?",
    options: [
      "Trees give out heat after dark.",
      "Dark roads and roofs release heat they absorbed earlier.",
      "City centres get more sunlight than villages.",
    ],
    correct: 1,
    explain: "Dark surfaces “release the heat slowly after sunset”. Nothing says trees give out heat, or that cities get more sun.",
    evidence: "Dark roads and roofs absorb sunlight during the day and release the heat slowly after sunset",
    note: "Detail question: ask her to find “after sunset” before looking at the options. Then check the other two against the text.",
  },
  {
    text: "A", kind: "Purpose",
    prompt: "Why does the writer mention water vapour?",
    options: [
      "To show why cities have more rain.",
      "To describe what dark roofs give off.",
      "To explain how plants help to cool the air.",
    ],
    correct: 2,
    explain: "Plants cool the air “by releasing water vapour”, so fewer trees means less cooling.",
    evidence: "plants cool the air by releasing water vapour",
    note: "Purpose questions ask why a detail is there. Ask: what does the word “because” introduce?",
  },
  {
    text: "A", kind: "Not stated",
    prompt: "Which of these is NOT mentioned as a cause of the urban heat island?",
    options: [
      "Heavy traffic.",
      "Dark roads and roofs.",
      "Tall buildings that block the wind.",
    ],
    correct: 0,
    explain: "The text never mentions traffic. The other two are both named as causes.",
    evidence: ["Dark roads and roofs", "Fewer trees make matters worse", "Tall buildings also block the wind"],
    note: "A NOT question: she has to find two options in the text, and the one left over is the answer. Have her point to each.",
  },
  {
    text: "A", kind: "Main idea",
    prompt: "What is the main idea of the text?",
    options: [
      "Cities get hotter than nearby areas for several reasons, and there are ways to reduce it.",
      "Trees are the only way to cool a city.",
      "Summer evenings are hotter than summer days.",
    ],
    correct: 0,
    explain: "The text gives several causes, then some solutions. Trees are only one of the solutions listed.",
    evidence: ["Cities are usually several degrees warmer than the countryside around them", "some cities paint roofs white, plant trees along streets and create small parks"],
    note: "Main idea: it covers the whole text. Ask which options are only a small part (trees) or a detail not even stated (evenings vs days).",
  },
  {
    text: "B", kind: "Detail",
    prompt: "What does a GPS receiver do with the satellites’ signals?",
    options: [
      "It sends a reply so the satellite can locate it.",
      "It compares them with signals from a phone mast.",
      "It measures how long each one took to arrive.",
    ],
    correct: 2,
    explain: "The receiver “never sends a signal” and only measures arrival time. Phone masts are not mentioned.",
    evidence: "The receiver measures how long each signal took to arrive.",
    note: "The first option is the opposite of the first sentence. Ask her to find the word “never”.",
  },
  {
    text: "B", kind: "Reason",
    prompt: "Why is one satellite not enough?",
    options: [
      "It only shows that the receiver is somewhere on a huge sphere.",
      "Its signal is too weak to measure.",
      "Its clock is less accurate than the receiver’s.",
    ],
    correct: 0,
    explain: "That is exactly what the text says. Weak signals are about buildings, and the satellites’ clocks are the more accurate ones.",
    evidence: "One satellite is not enough, since it only shows that the receiver is somewhere on a huge sphere.",
    note: "“Since” introduces the reason. The other options borrow ideas from later in the text.",
  },
  {
    text: "B", kind: "Reference",
    prompt: "In the second paragraph, “which” refers to…",
    options: [
      "the fourth satellite.",
      "the receiver’s own clock.",
      "the position on the ground.",
    ],
    correct: 1,
    explain: "“…errors in the receiver’s own clock, which is far less accurate…” The clock is what is less accurate.",
    evidence: "errors in the receiver’s own clock, which",
    note: "Reference: “which” points back to the nearest noun before it. Ask her to read the sentence and drop in each option.",
  },
  {
    text: "B", kind: "Inference",
    prompt: "What does the text suggest about the clocks on satellites?",
    options: [
      "They are cheaper than clocks in receivers.",
      "They are checked by phone companies.",
      "They are more precise than clocks in receivers.",
    ],
    correct: 2,
    explain: "The receiver’s clock is “far less accurate than the clocks on the satellites”, so the satellites’ clocks are more precise.",
    evidence: "which is far less accurate than the clocks on the satellites",
    note: "Inference: the text does not say “more precise”, but it says the receiver’s clock is far less accurate. Ask her to turn the comparison around.",
  },
];

const ids = (t) => ITEMS.map((it, i) => ({ it, id: `u2-${i + 1}` })).filter((x) => x.it.text === t).map((x) => x.id);

function questionSlide(it, idx) {
  const t = TEXTS[it.text];
  const inText = ITEMS.filter((x) => x.text === it.text);
  const n = inText.indexOf(it) + 1;
  return {
    stage: `${t.label} · Question ${n} of ${inText.length}`,
    note: it.note,
    body: (
      <UQuestion
        id={`u2-${idx + 1}`}
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
        ids={ITEMS.map((_, i) => `u2-${i + 1}`)}
        parts={[
          { label: "Text 1", title: TEXTS.A.title, ids: ids("A") },
          { label: "Text 2", title: TEXTS.B.title, ids: ids("B") },
        ]}
      />
    ),
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

export default function UnseenReadingPart2Lesson() {
  return <UnseenPlayer slides={SLIDES} />;
}
