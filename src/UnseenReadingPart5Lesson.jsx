import { useContext, useState } from "react";
import { UnseenPlayer, UCover, UPlan, UText, UQuestion, UEnd } from "./unseenKit.jsx";
import { ScoreCtx, useStore, NAVY, GREEN, RED, CORAL_DEEP } from "./e8Kit.jsx";

// Unseen Reading, Part 5 (Module E), for Doriel: two informative texts the student has never seen, four questions each,
// then five words from that text to match with their definitions. Level: B1+ to low B2.
// The article has its own page, every question has its own page, and checking shows the right answer and why.
// Everything here is written by Sentenco.

const TITLE = "Unseen Reading: Part 5";

const TEXTS = {
  A: {
    label: "Text 1",
    kind: "Article",
    title: "How Noise-Cancelling Headphones Work",
    text:
      "Noise-cancelling headphones do not simply block sound. Tiny microphones on the outside of the headphones detect the ambient noise around you, such as the hum of an aircraft engine or a train. A small processor then creates a new sound wave that is the exact opposite of the noise. When the two waves meet, they cancel each other out, and you hear much less of the original sound.\n\nThis technique, called active noise cancelling, works best with steady, low sounds. It is far less effective against sudden or high noises, such as a voice or a dog barking, because they change too quickly for the processor to follow. For that reason, many headphones also use soft ear cushions that block some of those sounds physically. Some experts warn that people who cannot hear traffic may be at risk, so many models include a mode that lets outside sound in.",
  },
  B: {
    label: "Text 2",
    kind: "Article",
    title: "The Rise of Vertical Farming",
    text:
      "In a vertical farm, crops are grown in layers stacked on top of each other, usually indoors, instead of in a single field. Plants grow in trays with their roots in water or a thin layer of nutrients, and LED lights replace the sun. Because the environment is controlled, a vertical farm can produce food all year round and uses up to 90 percent less water than a traditional farm.\n\nHowever, vertical farming is not a perfect solution. The lights and climate control use a large amount of electricity, which makes the food more expensive to produce. For this reason, most vertical farms currently grow leafy greens and herbs, which are light and quick to grow, rather than staple crops such as wheat or rice. Supporters believe that costs will fall as technology improves, but critics are not convinced.",
  },
};

const ITEMS = [
  {
    text: "A", kind: "Detail",
    prompt: "What do the microphones on the outside of the headphones do?",
    options: [
      "They detect the ambient noise around the listener.",
      "They record the music that is playing.",
      "They connect the headphones to the aircraft.",
    ],
    correct: 0,
    explain: "The microphones “detect the ambient noise around you”. Nothing says they record music or connect to an aircraft.",
    evidence: "Tiny microphones on the outside of the headphones detect the ambient noise around you",
  },
  {
    text: "A", kind: "Reference",
    prompt: "In the first paragraph, “they” in “they cancel each other out” refers to…",
    options: [
      "the microphones.",
      "the two sound waves.",
      "the engine and the train.",
    ],
    correct: 1,
    explain: "“When the two waves meet, they cancel each other out.” “They” is the two waves: the noise and the new sound the processor creates.",
    evidence: "When the two waves meet, they cancel each other out",
  },
  {
    text: "A", kind: "Not stated",
    prompt: "Which of these is NOT mentioned in the text?",
    options: [
      "Some headphones have a mode that lets outside sound in.",
      "Active noise cancelling works best with steady, low sounds.",
      "Noise-cancelling headphones make music sound clearer.",
    ],
    correct: 2,
    explain: "The text never says the headphones make music clearer. The other two are both stated.",
    evidence: ["many models include a mode that lets outside sound in", "works best with steady, low sounds"],
  },
  {
    text: "A", kind: "Inference",
    prompt: "What does the text suggest about the sound of a dog barking?",
    options: [
      "The headphones would remove it completely.",
      "The headphones would make it louder.",
      "The headphones would reduce it less well than the hum of an engine.",
    ],
    correct: 2,
    explain: "Noise cancelling is “far less effective against sudden or high noises, such as a voice or a dog barking”, so a barking dog is reduced less well than a steady hum.",
    evidence: "It is far less effective against sudden or high noises, such as a voice or a dog barking",
  },
  {
    text: "B", kind: "Reason",
    prompt: "Why can a vertical farm produce food all year round?",
    options: [
      "Because it is built close to the sun.",
      "Because the environment inside is controlled.",
      "Because it uses more water than a traditional farm.",
    ],
    correct: 1,
    explain: "“Because the environment is controlled”, food can be produced all year round. The farm uses less water, not more, and LED lights replace the sun.",
    evidence: "Because the environment is controlled, a vertical farm can produce food all year round",
  },
  {
    text: "B", kind: "Text structure",
    prompt: "How does the second paragraph relate to the first?",
    options: [
      "It repeats the same advantages in different words.",
      "It describes the history of vertical farming.",
      "It moves from the advantages to the problems.",
    ],
    correct: 2,
    explain: "“However” signals a change. The first paragraph gives the advantages; the second explains the problems, such as the cost of electricity.",
    evidence: "However, vertical farming is not a perfect solution.",
  },
  {
    text: "B", kind: "Word in context",
    prompt: "In the text, “staple crops” are…",
    options: [
      "basic foods that many people eat regularly.",
      "crops that are grown in small trays.",
      "crops that need a lot of light.",
    ],
    correct: 0,
    explain: "The examples “wheat or rice” show what staple crops are: basic foods eaten by many people. The text says the farms grow light, quick crops instead.",
    evidence: "staple crops such as wheat or rice",
  },
  {
    text: "B", kind: "Main idea",
    prompt: "What is the main idea of the text?",
    options: [
      "Vertical farms have replaced traditional farms.",
      "Vertical farming has real benefits, but its high electricity cost limits what it can grow.",
      "Vertical farming is cheaper than traditional farming.",
    ],
    correct: 1,
    explain: "The text gives the benefits (food all year, less water) and then the limit: electricity makes it expensive, so only light crops are grown. It does not say farms have been replaced or that it is cheaper.",
    evidence: ["vertical farming is not a perfect solution", "use a large amount of electricity"],
  },
];

// Five words from each text. `defs` is the order the definitions are shown in (each number is a word's position),
// so the matching is never in the same order as the words.
const MATCHES = {
  A: {
    pairs: [
      { w: "detect", d: "to notice or discover that something is there" },
      { w: "ambient", d: "existing in the area around you" },
      { w: "steady", d: "staying the same, without sudden changes" },
      { w: "effective", d: "producing the result that you want" },
      { w: "mode", d: "one of the ways that a device can work" },
    ],
    defs: [4, 1, 3, 0, 2],
  },
  B: {
    pairs: [
      { w: "stacked", d: "placed one on top of another" },
      { w: "nutrients", d: "substances that plants and animals need in order to grow" },
      { w: "staple", d: "basic and eaten regularly by many people" },
      { w: "critics", d: "people who say what they think is wrong with something" },
      { w: "convinced", d: "completely sure that something is true" },
    ],
    defs: [3, 0, 4, 2, 1],
  },
};

const MATCH_STYLES = `
.um { display: flex; flex-direction: column; align-items: center; gap: 14px; width: 100%; max-width: 900px; }
.um-eyebrow { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; }
.um-grid { display: grid; grid-template-columns: 250px 1fr; gap: 12px 24px; width: 100%; align-items: stretch; }
.um-col { display: flex; flex-direction: column; gap: 10px; }
.um-btn { min-height: 62px; font-family: 'Quicksand', sans-serif; font-weight: 700; color: ${NAVY}; background: rgba(255,255,255,0.94); border: 2px solid #DCE2F0; border-radius: 16px; padding: 8px 18px; cursor: pointer; text-align: left; }
.um-btn:disabled { cursor: default; }
.um-btn:not(:disabled):hover { border-color: #9AA6C4; }
.um-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 28px; text-align: center; }
.um-def { font-size: 19px; line-height: 1.3; }
.um-btn.is-sel { border-color: ${NAVY}; box-shadow: 0 0 0 3px rgba(27,42,74,0.14); }
.um-btn.is-done { background: ${GREEN}; border-color: ${GREEN}; color: #fff; }
.um-btn.is-flash { background: ${RED}; border-color: ${RED}; color: #fff; }
.um-foot { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 16px; color: ${NAVY}; }
`;

// Match each word with its definition: tap a word, then tap a definition. A wrong tap flashes red.
// The first tap for each word decides its point on the end page.
function UMatch({ id, label, pairs, defs }) {
  const { report } = useContext(ScoreCtx);
  const [done, setDone] = useStore("mt-" + id + "-done", {});
  const [sel, setSel] = useStore("mt-" + id + "-sel", null);
  const [flash, setFlash] = useState(null);
  const count = pairs.filter((_, i) => done[i]).length;

  function pickDef(di) {
    if (sel === null || done[di]) return;
    if (di === sel) {
      setDone((d) => ({ ...d, [di]: true }));
      report(`${id}-${di + 1}`, true);
      setSel(null);
    } else {
      report(`${id}-${sel + 1}`, false);
      setFlash(di);
      setTimeout(() => setFlash(null), 600);
    }
  }

  return (
    <div className="um">
      <span className="um-eyebrow">{label}</span>
      <div className="um-grid">
        <div className="um-col">
          {pairs.map((p, i) => (
            <button
              key={p.w}
              type="button"
              className={`um-btn um-word ${done[i] ? "is-done" : sel === i ? "is-sel" : ""}`}
              disabled={!!done[i]}
              onClick={() => setSel(sel === i ? null : i)}
            >
              {p.w}
            </button>
          ))}
        </div>
        <div className="um-col">
          {defs.map((di) => (
            <button
              key={di}
              type="button"
              className={`um-btn um-def ${done[di] ? "is-done" : flash === di ? "is-flash" : ""}`}
              disabled={!!done[di]}
              onClick={() => pickDef(di)}
            >
              {pairs[di].d}
            </button>
          ))}
        </div>
      </div>
      <div className="um-foot">{count} of {pairs.length} matched</div>
    </div>
  );
}

const itemId = (idx) => `u5-${idx + 1}`;
const mids = (key) => MATCHES[key].pairs.map((_, i) => `m${key}-${i + 1}`);
const qids = (t) => ITEMS.map((it, i) => ({ it, id: itemId(i) })).filter((x) => x.it.text === t).map((x) => x.id);

function questionSlide(it, idx) {
  const t = TEXTS[it.text];
  const inText = ITEMS.filter((x) => x.text === it.text);
  const n = inText.indexOf(it) + 1;
  return {
    stage: `${t.label} · Question ${n} of ${inText.length}`,
    note: "Question first, then the evidence in the text.",
    body: (
      <UQuestion
        id={itemId(idx)}
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

const matchSlide = (key) => ({
  stage: `${TEXTS[key].label} · Match the words`,
  note: "Five words from the text. Tap a word, then its definition. A wrong tap turns red and she tries again; her first tap decides the point.",
  body: <UMatch id={`m${key}`} label={`Words from ${TEXTS[key].label}`} pairs={MATCHES[key].pairs} defs={MATCHES[key].defs} />,
});

const questionsFor = (t) => ITEMS.map((it, idx) => ({ it, idx })).filter((x) => x.it.text === t).map((x) => questionSlide(x.it, x.idx));

const SLIDES = [
  {
    stage: "Unseen Reading", title: true,
    note: "A reading lesson on informative texts the student has never seen. Two texts, four questions each, then five words to match with their definitions.",
    body: <UCover title={TITLE} module="DORIEL" />,
  },
  {
    stage: "Today’s Plan",
    note: "Read the plan in half a minute. The habit for the lesson: question first, then evidence.",
    body: (
      <UPlan
        goal="Goal: answer from the text, not from guessing"
        text="With a text you have never seen, the answer is always in the words. Your job is to find them."
        items={[
          ["Text 1", `${TEXTS.A.title}: 4 questions, 5 words`, "11 min"],
          ["Text 2", `${TEXTS.B.title}: 4 questions, 5 words`, "11 min"],
          ["Wrap-up", "Your score", "1 min"],
        ]}
      />
    ),
  },
  textSlide("A"),
  ...questionsFor("A"),
  matchSlide("A"),
  textSlide("B"),
  ...questionsFor("B"),
  matchSlide("B"),
  {
    stage: "The End",
    note: "Read the total. If one part went worse, ask which question type or which words caught her out.",
    body: (
      <UEnd
        title={TITLE}
        ids={[...qids("A"), ...mids("A"), ...qids("B"), ...mids("B")]}
        parts={[
          { label: "Text 1", title: TEXTS.A.title, ids: [...qids("A"), ...mids("A")] },
          { label: "Text 2", title: TEXTS.B.title, ids: [...qids("B"), ...mids("B")] },
        ]}
      />
    ),
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

export default function UnseenReadingPart5Lesson() {
  return <UnseenPlayer slides={SLIDES} extraStyles={MATCH_STYLES} />;
}
