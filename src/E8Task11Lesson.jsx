import React, { useContext } from "react";
import { ScoreCtx, useStore, Strategy, E8Player } from "./e8Kit.jsx";

// E8 Task 11: "vocabulary cloze" (a short text with three gaps and a box of six words: three fit, three are extra).
// Four texts, three gaps each, one gap per slide. Words already used leave the list, and solved gaps fill into the text.
// Every text, word box, the answer key and the "why" texts are written by Sentenco in the style of the task; none of
// them come from the exam paper. Each wrong word was chosen to test one thing: word class, or a confusable pair.

const LETTERS6 = ["A", "B", "C", "D", "E", "F"];

// paras: strings and gap numbers. bank: six words. keys[g-1] = index in bank for gap g.
const SETS = [
  {
    name: "Camping trip", genre: "Blog", title: "MY FIRST CAMPING TRIP",
    para: ["Last weekend I went camping with my cousins for the first time. The journey was so long that we were", 1, "when we arrived, and we went to bed at eight o’clock. The next evening, we", 2, "a fire and cooked sausages on it. In the night, I heard a strange", 3, "outside the tent, but it was only a hedgehog!"],
    bank: ["borrowed", "tired", "funny", "noise", "busy", "made"],
    keys: [1, 5, 3],
    whys: [
      "“So long that…” and “went to bed at eight” tell us they were tired. Busy does not fit a group who go to bed as soon as they arrive.",
      "The set phrase is make a fire. Borrowed a fire makes no sense.",
      "After “a strange” we need a noun, something you can hear: noise. Funny is an adjective, and there is no noun after it. The extra words were borrowed, funny and busy.",
    ],
    notes: [
      "First text, so go slowly. Have her read the whole text and say what it is about. Then ask: what kind of word is missing here, and what is the clue after the gap?",
      "Set phrase to point out: make a fire. Ask her which other verb she knows with fire.",
      "The word after “strange” must be a noun. Ask her which words in the box are nouns.",
    ],
  },
  {
    name: "Surprise party", genre: "Story", title: "A SURPRISE FOR MY SISTER",
    para: ["On Saturday, my friends and I organised a surprise party for my sister’s sixteenth birthday. We", 1, "the living room with balloons and put her favourite music on. When she came home, she was so", 2, "that she couldn’t speak. Everybody shouted “Happy birthday!”, and we gave her a", 3, ": a beautiful silver necklace."],
    bank: ["decorated", "ticket", "surprised", "invited", "present", "bored"],
    keys: [0, 2, 4],
    whys: [
      "You decorate a room with balloons. You cannot invite a room, so invited is wrong.",
      "A surprise party and “she couldn’t speak”: surprised. Bored does not fit a party she did not expect.",
      "A silver necklace given on a birthday is a present. A ticket is not what they gave her. The extra words were ticket, invited and bored.",
    ],
    notes: [
      "Ask her: what do you do to a room with balloons? Then check the other verb in the box (invited): who or what can you invite?",
      "Clue: “surprise party” and “couldn’t speak”. Ask which feeling matches both.",
      "The colon (:) introduces what the thing is. Ask what the necklace is on a birthday.",
    ],
  },
  {
    name: "Busy week", genre: "Message", title: "A BUSY WEEK",
    para: ["Next week is going to be very busy for me. On Monday, I have to", 1, "a presentation about pandas in front of the class. On Wednesday, I’m going to", 2, "some money from my sister, because I want to buy a birthday present for our mum. And on Friday, our team plays the final, and I hope we", 3, "!"],
    bank: ["give", "say", "lend", "borrow", "beat", "win"],
    keys: [0, 3, 5],
    whys: [
      "You give a presentation. We do not say “say a presentation”.",
      "Borrow means take something for a short time, and you borrow FROM someone. Lend is the opposite: you give it to someone.",
      "“I hope we win!” has no object after it. Beat needs one (we beat them). The extra words were say, lend and beat.",
    ],
    notes: [
      "Ask her which verb goes with presentation. Say, tell and give: which one sounds right?",
      "Confusable pair: borrow and lend. The clue is the word “from”. Ask her who has the money at the start.",
      "Confusable pair again: win and beat. Ask: can you say “I hope we beat!” and stop there?",
    ],
  },
  {
    name: "Cooking", genre: "Blog", title: "COOKING WITH GRANDMA",
    para: ["Every Sunday, I visit my grandma and we cook together. She is a wonderful", 1, ", and she has taught me how to make her famous apple pie. First, we", 2, "the apples with a small knife and cut them into small pieces. The pie takes forty minutes to", 3, "in the oven, and the smell fills the whole house."],
    bank: ["grow", "cook", "freeze", "peel", "cooker", "bake"],
    keys: [1, 3, 5],
    whys: [
      "“She is a wonderful…” needs a person: a cook. A cooker is the machine in the kitchen, not a person.",
      "You peel apples with a knife before you cut them. Bake, grow and freeze do not go with “with a small knife”.",
      "Bake means cook in the oven. You cannot freeze anything “in the oven”. The extra words were grow, freeze and cooker.",
    ],
    notes: [
      "Last text. Confusable pair: cook and cooker. Ask her: is grandma a person or a machine?",
      "Ask her what she does to an apple before she cuts it.",
      "The words “in the oven” are the clue. Ask which verb belongs to an oven.",
    ],
  },
];

// ---- one gap per slide ------------------------------------------------------------------------------------
function ClozeSlide({ set, si, g }) {
  const { report } = useContext(ScoreCtx);
  const id = `t11-${si + 1}-${g}`;
  const [picked, setPicked] = useStore("g-" + id, null);
  const answered = picked !== null;
  const key = set.keys[g - 1];
  const usedBefore = set.keys.slice(0, g - 1);
  const options = [0, 1, 2, 3, 4, 5].filter((i) => !usedBefore.includes(i));
  const ok = picked === key;
  function pick(i) {
    if (answered) return;
    setPicked(i);
    report(id, i === key);
  }
  const Slot = ({ n }) => {
    if (n < g) return <span className="e8-filled">{set.bank[set.keys[n - 1]]}</span>;
    if (n === g) {
      if (!answered) return <span className="e8-gap is-active"><span className="e8-gap-n">11.{n}</span><span className="e8-gap-empty">_____</span></span>;
      return <span className={`e8-gap ${ok ? "is-correct" : "is-wrong"}`}><span className="e8-gap-n">11.{n}</span><span className="e8-gap-fill">{set.bank[picked]}</span></span>;
    }
    return <span className="e8-gap is-later"><span className="e8-gap-n">11.{n}</span></span>;
  };
  return (
    <div className="e8-split">
      <div className="e8-passage e8-passage--article">
        <div className="e8-passage-title">{set.title}</div>
        <p>
          {set.para.map((s, i) => (typeof s === "number" ? <React.Fragment key={i}><Slot n={s} />{" "}</React.Fragment> : <React.Fragment key={i}>{s}{" "}</React.Fragment>))}
        </p>
      </div>
      <div className="e8-side">
        <p className="e8-prompt">Which word fits gap 11.{g}?</p>
        <div className="e8-options">
          {options.map((i) => {
            if (answered && i !== key && i !== picked) return null;
            const cls = answered && i === key ? "is-correct" : answered && i === picked ? "is-wrong" : "";
            return (
              <button key={i} type="button" className={`e8-opt ${cls}`} onClick={() => pick(i)} disabled={answered}>
                <span className="e8-opt-letter">{LETTERS6[i]}</span>
                <span>{set.bank[i]}</span>
              </button>
            );
          })}
        </div>
        {answered && (
          <div className={`e8-why ${ok ? "is-ok" : "is-bad"}`}>
            <p><b>{ok ? "Correct." : `Not ${set.bank[picked]}.`} The answer is {set.bank[key]}.</b> {set.whys[g - 1]}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ---- extra slide pieces -----------------------------------------------------------------------------------
function PairCards() {
  const cards = [
    ["borrow / lend", "You borrow FROM someone. You lend TO someone."],
    ["make / do", "make a fire, a cake, a mistake · do homework, the shopping"],
    ["say / tell", "say hello · tell someone a story"],
    ["win / beat", "win a game · beat a team (beat needs an object)"],
    ["cook / cooker", "a cook is a person · a cooker is a machine"],
    ["hear / listen", "hear a noise · listen to music"],
  ];
  return (
    <div className="e11-wrap">
      <span className="e8-eyebrow">Exam strategy 2</span>
      <h2 className="e8-h2">Pairs that look alike</h2>
      <div className="e11-cards">
        {cards.map(([k, v]) => (
          <div key={k} className="e11-card"><b>{k}</b><span>{v}</span></div>
        ))}
      </div>
    </div>
  );
}

function ScoreBySet() {
  const { results } = useContext(ScoreCtx);
  const rows = SETS.map((s, si) => {
    const ids = [1, 2, 3].map((g) => `t11-${si + 1}-${g}`);
    const got = ids.filter((id) => results[id] === true).length;
    const tried = ids.filter((id) => id in results).length;
    return { name: s.name, n: si + 1, got, tried, max: 3 };
  });
  const total = rows.reduce((a, r) => a + r.got, 0);
  const max = rows.reduce((a, r) => a + r.max, 0);
  return (
    <div className="e8-score">
      <div className="e8-score-total"><span>{total}</span><small>out of {max}</small></div>
      <div className="e8-score-tiles" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {rows.map((r) => (
          <div key={r.n} className={`e8-score-tile ${r.tried === r.max && r.got === r.max ? "is-full" : ""}`}>
            <small>Text {r.n}</small>
            <b>{r.tried === 0 ? "–" : `${r.got}/${r.max}`}</b>
            <span>{r.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TRAPS = [
  ["Wrong word class", "Before you look at the meaning, decide if the gap needs a noun, a verb or an adjective. Cross out the words of the wrong class."],
  ["Look-alike pairs", "Borrow and lend, win and beat, cook and cooker. One word fits and its partner does not."],
  ["Right meaning, wrong grammar", "A word can mean the right thing and still break the sentence (beat needs an object, borrow needs from)."],
  ["Fits another gap better", "A word that fits gap 1 a little may fit gap 3 perfectly. Read all three gaps before you choose."],
  ["Half a sentence", "Read to the end of the sentence. The words after the gap (from, in the oven, a strange) often decide it."],
];

function Traps() {
  return (
    <div className="e8-traps">
      <h2 className="e8-h2">Five traps in Task 11</h2>
      {TRAPS.map(([k, v]) => (
        <div key={k} className="e8-trap-row" style={{ gridTemplateColumns: "190px 1fr" }}><b>{k}</b><span>{v}</span></div>
      ))}
    </div>
  );
}

function TakeHome() {
  return (
    <div className="e8-takehome">
      <span className="e8-eyebrow">Take-home · make your own Task 11</span>
      <h2 className="e8-h2">A text, three gaps, six words</h2>
      <p className="e8-p">Write a short text of about 50 words. Take out three words and write them in a box, with three extra words that look right but are wrong.</p>
      <ul className="e8-th-list">
        <li>Use one look-alike pair from today (borrow / lend, win / beat, say / tell).</li>
        <li>Make sure each extra word is wrong for a clear reason.</li>
        <li>Write the reason for every wrong word on the back.</li>
      </ul>
      <p className="e8-p">Next lesson, we will solve them as a quiz.</p>
    </div>
  );
}

// ---- slides -----------------------------------------------------------------------------------------------
const gapSlides = SETS.flatMap((set, si) =>
  [1, 2, 3].map((g) => ({
    stage: `Text ${si + 1} · ${set.genre} · Gap ${g} of 3`,
    time: g === 1 ? "~2 min" : "~1.5 min",
    note: set.notes[g - 1],
    body: <ClozeSlide set={set} si={si} g={g} />,
    _first: si === 2 && g === 1,
  }))
);

const SLIDES = [
  {
    stage: "E8 Task 11", time: null,
    note: "Alice is preparing for the E8, the Polish eighth-grade English exam. Task 11 is worth 3 points: a text with three gaps and a box of six words, three of which are extra. Today is 25 minutes on this one task type: four short texts, three gaps each, one gap at a time. Every text and the answer key are ours, written in the style of the task.",
    body: (
      <div className="e8-cover">
        <span className="e8-eyebrow">Sentenco · Custom Lesson · E8 Task 11</span>
        <h1 className="e8-h1">The Right Word</h1>
        <p className="e8-cover-p">Four short texts with three gaps each. Choose the word that fits from a box of six, and see why the look-alikes are wrong.</p>
        <span className="e8-source">Format based on the E8 English exam, Task 11 (CKE, Poland). All texts and the answer key are by Sentenco.</span>
      </div>
    ),
  },
  {
    stage: "Today’s Plan", time: "~0.5 min",
    note: "Read the plan in half a minute. The rule of the whole lesson: decide the word class first, then the meaning, then check the words after the gap.",
    body: (
      <div className="e8-plan">
        <h2 className="e8-h2">Goal: class first, then meaning</h2>
        <p className="e8-p">In Task 11 the extra words look right. Knowing what kind of word the gap needs removes half of them at once.</p>
        <div className="e8-plan-list">
          {[
            ["Strategy", "Word class first. Pairs that look alike", "2.5 min"],
            ["Text 1", "My first camping trip", "5 min"],
            ["Text 2", "A surprise for my sister", "5 min"],
            ["Text 3", "A busy week", "5 min"],
            ["Text 4", "Cooking with grandma", "5 min"],
            ["Wrap-up", "Score and five traps", "2 min"],
          ].map(([k, d, t]) => (
            <div key={k} className="e8-plan-item"><b>{k}</b><span>{d}</span><small>{t}</small></div>
          ))}
        </div>
      </div>
    ),
  },
  {
    stage: "Strategy · Word Class First", time: "~1 min",
    note: "Have Alice read the three steps aloud, then start. On every gap, ask her to name the word class out loud before she picks a word.",
    body: (
      <Strategy
        n={1}
        title="Decide the word class first"
        steps={[
          "Read the whole sentence and say what kind of word is missing: a noun, a verb or an adjective. The words before and after the gap tell you.",
          "Cross out every word in the box of the wrong class. Then choose by meaning between the ones that are left.",
          "Read the sentence again with your word in it. Words like from, to, a and -ing after the gap often decide the answer.",
        ]}
      />
    ),
  },
  {
    stage: "Strategy · Look-Alike Pairs", time: "~1.5 min",
    note: "Read the six pairs aloud. She does not need to memorise them: each one comes up in a text. Ask her which pair she has mixed up before.",
    body: <PairCards />,
  },
  ...gapSlides.flatMap((s) => {
    const { _first, ...slide } = s;
    if (!_first) return [slide];
    return [
      {
        stage: "Halfway · Check", time: "~0.5 min",
        note: "Half a minute. Ask her which check she forgets most, then keep going. Six gaps done, six to go.",
        body: (
          <div className="e8-strategy">
            <span className="e8-eyebrow">Halfway</span>
            <h2 className="e8-h2">Three checks for every gap</h2>
            <ol className="e8-steps">
              <li><span className="e8-step-n">1</span><span><b>Word class.</b> Noun, verb or adjective?</span></li>
              <li><span className="e8-step-n">2</span><span><b>Meaning.</b> Which of the words left makes sense in the whole text?</span></li>
              <li><span className="e8-step-n">3</span><span><b>Grammar.</b> Does it work with the words right after the gap?</span></li>
            </ol>
          </div>
        ),
      },
      slide,
    ];
  }),
  {
    stage: "Your Score", time: "~0.5 min",
    note: "Read the total, then only talk about the text where she lost points. Which trap was it?",
    body: <ScoreBySet />,
  },
  {
    stage: "Five Traps", time: "~1 min",
    note: "Read them one by one. Ask her which one caught her today.",
    body: <Traps />,
  },
  {
    stage: "Take-Home", time: null,
    note: "Homework: she writes her own cloze text with a box of six words. Next lesson, use one of hers as the warm-up.",
    body: <TakeHome />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: s.time, note: s.note }));

const extraStyles = `
.e11-wrap { display: flex; flex-direction: column; align-items: center; gap: 6px; width: 100%; max-width: 860px; }
.e11-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; margin-top: 6px; }
.e11-card { display: flex; flex-direction: column; gap: 3px; background: rgba(255,255,255,0.88); border: 1px solid #EBDFD0; border-radius: 14px; padding: 10px 18px; }
.e11-card b { font-weight: 800; font-size: 15px; color: #E0502F; }
.e11-card span { font-size: 14.5px; font-weight: 700; line-height: 1.45; color: #1B2A4A; }
`;

export default function E8Task11Lesson() {
  return <E8Player slides={SLIDES} extraStyles={extraStyles} />;
}
