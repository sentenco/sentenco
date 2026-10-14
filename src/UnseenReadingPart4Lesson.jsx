import React from "react";
import { UnseenPlayer, UCover, UPlan, UText, UQuestion, UEnd } from "./unseenKit.jsx";

// Unseen Reading, Part 4 (Module E): two informative texts the student has never seen, four questions each.
// The article has its own page, every question has its own page, and checking shows the right answer and why.
// Everything here is written by Sentenco. Level: B1+ to low B2.

const TITLE = "Unseen Reading: Part 4";

const TEXTS = {
  A: {
    label: "Text 1",
    kind: "Article",
    title: "How Weather Warnings Work",
    text:
      "Weather services collect data from satellites, radar and thousands of ground stations, and feed it into computer models that predict the weather several days ahead. Forecasters compare several models, because no single model is always right. When dangerous weather, such as a flood, a storm or a heat wave, becomes likely, many services issue warnings in stages. An early alert means that danger is possible, so people should stay informed and prepare. A final warning means that the danger is expected or already happening, and people should act at once.\n\nWarnings work best when they are specific. A message that names the area, the time and the expected effects makes it easier to decide what to do, which is why many services now send alerts directly to mobile phones.",
  },
  B: {
    label: "Text 2",
    kind: "Article",
    title: "Why We Forget",
    text:
      "Forgetting is not always a failure of memory. In the 1880s, the psychologist Hermann Ebbinghaus tested his own memory with lists of meaningless words and found that a large part of what he had learned was lost within a day, unless he reviewed it. This pattern became known as the forgetting curve. Some researchers argue that forgetting is useful, because it helps the brain filter out information that seems unimportant.\n\nFortunately, forgetting can be slowed down. Reviewing material at increasing intervals, for example after one day, then a week, then a month, helps the brain treat it as important. Sleep also plays a role: studies suggest that memories are strengthened during sleep, so studying late into the night is often less effective than studying earlier and sleeping well.",
  },
};

const ITEMS = [
  {
    text: "A", kind: "Detail",
    prompt: "Why do forecasters compare several computer models?",
    options: [
      "No single model is always right.",
      "Each model only covers one country.",
      "Satellites cannot provide enough data.",
    ],
    correct: 0,
    explain: "The text says “no single model is always right”, so forecasters compare several. Nothing says models cover one country or that data is missing.",
    evidence: "Forecasters compare several models, because no single model is always right.",
    note: "“Because” introduces the reason. Ask her to find it before she reads the options, then check the other two against the text.",
  },
  {
    text: "A", kind: "Reference",
    prompt: "In the last sentence, “which” refers to…",
    options: [
      "the mobile phones.",
      "the area named in the message.",
      "the fact that a specific message makes it easier to decide what to do.",
    ],
    correct: 2,
    explain: "“Which” refers to the whole idea before it: a specific message makes it easier to decide what to do. That is the reason many services send alerts to phones.",
    evidence: "makes it easier to decide what to do, which is why many services now send alerts directly to mobile phones",
    note: "Here “which” points back to a whole idea, not to one noun. Ask her to say the idea in her own words, then to read “which is why…” after it.",
  },
  {
    text: "A", kind: "Not stated",
    prompt: "Which of these is NOT mentioned in the text?",
    options: [
      "Warnings can be issued in stages.",
      "Alerts can be sent straight to mobile phones.",
      "Warnings are only sent to people in big cities.",
    ],
    correct: 2,
    explain: "The text never says warnings go only to big cities. The other two are both stated.",
    evidence: ["many services issue warnings in stages", "many services now send alerts directly to mobile phones"],
    note: "A NOT question: have her find two options in the text. The one left over is the answer.",
  },
  {
    text: "A", kind: "Inference",
    prompt: "What does the text suggest about a message that only says “Bad weather tomorrow”?",
    options: [
      "It would be sent as a final warning.",
      "It would be less useful than a message naming the area and the time.",
      "It would be more accurate than a detailed message.",
    ],
    correct: 1,
    explain: "Warnings “work best when they are specific”, so a vague message is less useful. The text does not link vague messages to final warnings.",
    evidence: "Warnings work best when they are specific.",
    note: "Inference: the text never mentions this exact message. Ask her what the text says about specific warnings and turn it around.",
  },
  {
    text: "B", kind: "Detail",
    prompt: "What did Ebbinghaus find when he tested his own memory?",
    options: [
      "He forgot everything immediately.",
      "A large part of what he learned was lost within a day, unless he reviewed it.",
      "He remembered most of the lists after a week.",
    ],
    correct: 1,
    explain: "That is what the text says. “Everything” and “most after a week” both go beyond it.",
    evidence: "a large part of what he had learned was lost within a day, unless he reviewed it",
    note: "Watch for words that are too strong (“everything”). Ask her what “a large part” means compared with “all”.",
  },
  {
    text: "B", kind: "Reason",
    prompt: "Why do some researchers think forgetting can be useful?",
    options: [
      "It helps the brain filter out information that seems unimportant.",
      "It makes new learning faster.",
      "It protects memories while we sleep.",
    ],
    correct: 0,
    explain: "The text says forgetting “helps the brain filter out information that seems unimportant”. The other two ideas are not in the text.",
    evidence: "Some researchers argue that forgetting is useful, because it helps the brain filter out information that seems unimportant.",
    note: "The reason comes after “because”. The third option borrows “sleep” from the second paragraph, which is a different idea.",
  },
  {
    text: "B", kind: "Word in context",
    prompt: "In the text, “intervals” means…",
    options: [
      "tests that last a long time.",
      "small mistakes in memory.",
      "periods of time between reviews.",
    ],
    correct: 2,
    explain: "“Increasing intervals” means longer and longer gaps between reviews: after one day, then a week, then a month.",
    evidence: "Reviewing material at increasing intervals, for example after one day, then a week, then a month",
    note: "Word in context: the example after “for example” explains the word. Ask her what is getting longer: one day, a week, a month.",
  },
  {
    text: "B", kind: "Main idea",
    prompt: "What is the main point of the second paragraph?",
    options: [
      "Forgetting can be slowed by reviewing at intervals and sleeping well.",
      "Sleep matters more than reviewing.",
      "Studying should only be done at night.",
    ],
    correct: 0,
    explain: "The paragraph gives two ways to slow forgetting: reviewing over time and good sleep. It does not say sleep matters more, and it says late-night studying is less effective.",
    evidence: ["Fortunately, forgetting can be slowed down.", "studying earlier and sleeping well"],
    note: "Main idea of a paragraph: it covers both ideas (review and sleep). Ask which options only mention one idea or say the opposite.",
  },
];

const ids = (t) => ITEMS.map((it, i) => ({ it, id: `u4-${i + 1}` })).filter((x) => x.it.text === t).map((x) => x.id);

function questionSlide(it, idx) {
  const t = TEXTS[it.text];
  const inText = ITEMS.filter((x) => x.text === it.text);
  const n = inText.indexOf(it) + 1;
  return {
    stage: `${t.label} · Question ${n} of ${inText.length}`,
    note: it.note,
    body: (
      <UQuestion
        id={`u4-${idx + 1}`}
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
        ids={ITEMS.map((_, i) => `u4-${i + 1}`)}
        parts={[
          { label: "Text 1", title: TEXTS.A.title, ids: ids("A") },
          { label: "Text 2", title: TEXTS.B.title, ids: ids("B") },
        ]}
      />
    ),
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

export default function UnseenReadingPart4Lesson() {
  return <UnseenPlayer slides={SLIDES} />;
}
