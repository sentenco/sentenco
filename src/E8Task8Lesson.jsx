import React, { useContext } from "react";
import { ScoreCtx, useStore, LETTERS, Strategy, E8Player } from "./e8Kit.jsx";

// E8 Task 8: "gapped text" (three sentences are missing from a text; choose which of four sentences goes in each gap,
// one sentence is extra). Four texts, three gaps each, one gap per slide: the text shows gaps you have already solved,
// and sentences you have already used leave the list. Every text, sentence, the answer key and the "why" texts are
// written by Sentenco in the style of the task; none of them come from the exam paper.

// paras: arrays of strings and gap numbers (1, 2, 3). bank: four sentences (A to D). keys[g-1] = index in bank for gap g.
const SETS = [
  {
    name: "Phone box", genre: "Article", title: "A LIBRARY IN A PHONE BOX",
    paras: [
      ["In the village of Elmbury, an old red phone box has a new life. For years nobody used it, and it stood empty next to the bus stop.", 1, "Now the box is full of books that anyone can borrow for free."],
      ["The students painted the inside yellow and put up some shelves.", 2, "Every book has a small note inside with a name and a message. Some people leave their own books, too."],
      ["The idea has been so successful that other villages want one.", 3, "“It shows that a small idea can bring people together,” says Maya, one of the students."],
    ],
    bank: [
      "They asked neighbours to give them books they no longer needed.",
      "The students sold the books to raise money for the school.",
      "The students are now helping two nearby villages to build phone-box libraries of their own.",
      "Then, last spring, a group of students decided to turn it into a tiny library.",
    ],
    keys: [3, 0, 2],
    whys: [
      "Before: nobody used the box for years. After: “Now the box is full of books.” We need the moment things changed, and “Then, last spring… turn it into a tiny library” explains it. It also names the students, who are “The students” in the next paragraph.",
      "Before: they painted the box and put up shelves. After: “Every book has a small note…”. “Every book” needs books to be mentioned first, so the missing sentence says where the books came from.",
      "Before: other villages want one. After: “It shows that a small idea can bring people together.” The idea spreads, so the students now help other villages. The extra sentence (B) has the right topic but says the books were sold, and the text says they are free to borrow.",
    ],
    notes: [
      "First text, so go slowly. Have her read the whole article with the gaps before she looks at the sentences. Ask: what is the article about? Then which gap is the easiest to place?",
      "Ask her to read the sentence after the gap aloud. “Every book” needs books to have been mentioned. Which sentence brings in the books?",
      "Two sentences are left: one fits, one is the extra. Ask why the extra one is tempting (books, students) and what it says that clashes with “for free”.",
    ],
  },
  {
    name: "New school", genre: "Story", title: "MY FIRST DAY AT A NEW SCHOOL",
    paras: [
      ["I was really nervous when I walked into my new school last Monday. Everything looked huge, and I couldn’t find my classroom.", 1, "I felt a little better as soon as she smiled at me."],
      ["In the first lesson, we had to introduce ourselves to the class. My hands were shaking, and my voice was very quiet.", 2, "After that, the teacher asked me some easy questions about my hobbies."],
      ["At lunch, Zoe invited me to sit with her friends.", 3, "By the end of the day, I had already agreed to join the school football team."],
    ],
    bank: [
      "I had to wear a school uniform, which I hated.",
      "They were all very friendly, and we talked about music and sport all through the meal.",
      "Luckily, a girl called Zoe noticed me and showed me the way.",
      "I only managed to say my name and the city I came from.",
    ],
    keys: [2, 3, 1],
    whys: [
      "After the gap: “I felt a little better as soon as she smiled at me.” “She” needs a girl to be named first. Only the sentence about Zoe does that, and it also solves the problem before it: the writer could not find the classroom. Zoe appears again in the last paragraph.",
      "Before: they had to introduce themselves, and the writer’s voice was quiet. After: “After that, the teacher asked me some easy questions.” “After that” needs something to happen first: a very short introduction.",
      "Before: Zoe invited me to sit with her friends. After: “By the end of the day…”. “They” in the missing sentence means Zoe’s friends. The extra sentence (A), about the school uniform, has the right topic but does not connect the two sides of any gap.",
    ],
    notes: [
      "Clue to point out: the word “she”. Ask her who “she” is, then which sentence names a girl. Also: Zoe is used again in paragraph three without an introduction.",
      "The time clue is “After that”. Ask: what happened first, before the teacher’s questions?",
      "Last gap of the text. Ask: who are “they”? Then ask why the uniform sentence is the extra one.",
    ],
  },
  {
    name: "School garden", genre: "Article", title: "THE SCHOOL THAT GREW ITS OWN LUNCH",
    paras: [
      ["At Brightfield School, students do more than study: they also grow vegetables. Three years ago, the school had only a small empty field behind the sports hall.", 1, "They planted potatoes, carrots and tomatoes in the first year."],
      ["The vegetables are used in the school canteen.", 2, "Students say the soup tastes much better now, and there is less waste."],
      ["Not everything went well at the beginning. The first tomatoes were eaten by birds.", 3, "Today, the garden is so successful that the school sells extra vegetables to local families."],
    ],
    bank: [
      "However, the students built a net to protect the plants, and the problem was solved.",
      "A teacher, Mr Clark, asked the students to help him turn it into a garden.",
      "Students at another school in the city grow flowers instead.",
      "Instead of buying everything from shops, the cooks now use fresh food from the garden.",
    ],
    keys: [1, 3, 0],
    whys: [
      "Before: an empty field. After: “They planted potatoes, carrots and tomatoes.” “They” needs people to be named first, and the field needs someone to turn it into a garden: a teacher and his students.",
      "Before: the vegetables are used in the canteen. After: “Students say the soup tastes much better now.” The missing sentence explains what changed in the canteen: fresh food instead of shop food.",
      "Before: the first tomatoes were eaten by birds. After: “Today, the garden is so successful…”. “However” shows the change from a problem to a solution. The extra sentence (C) is about another school, so it does not connect anything in this text.",
    ],
    notes: [
      "Ask her to find the word that needs an owner: “They”. Who planted the vegetables? The missing sentence must name them.",
      "Clue: the canteen and the soup. Which sentence is about the cooks and what they use?",
      "Connector clue: “However”. It shows a problem being fixed. Ask her what the problem was.",
    ],
  },
  {
    name: "Skateboard", genre: "Story", title: "HOW I LEARNED TO SKATEBOARD",
    paras: [
      ["When I was twelve, I bought my first skateboard, but I was terrible at it.", 1, "After only a week, I nearly gave up."],
      ["Then my older brother, Pete, offered to help.", 2, "He showed me how to keep my balance and how to fall safely. Slowly, I began to improve."],
      ["Last month, I entered my first local competition.", 3, "I didn’t win, but I was proud of myself, and I’m already planning to enter next year."],
    ],
    bank: [
      "I fell off almost every time I tried to stand on it.",
      "I was so nervous that my knees were shaking, but I managed to finish all my tricks.",
      "Every afternoon, he took me to the empty car park near our house.",
      "Skateboards became popular in the 1970s in California.",
    ],
    keys: [0, 2, 1],
    whys: [
      "After the gap: “After only a week, I nearly gave up.” Something must explain why he wanted to give up: he kept falling off.",
      "After the gap: “He showed me how to keep my balance…”. “He” is Pete, and “Every afternoon, he took me to the empty car park” tells us when and where the lessons happened.",
      "Before: entering a competition. After: “I didn’t win, but I was proud of myself.” The missing sentence describes the competition itself. The extra sentence (D) is general history: right topic, but it links nothing in the story.",
    ],
    notes: [
      "Ask: why did he nearly give up? The missing sentence is the reason.",
      "Clue: “He”. Ask who “he” is, and which sentence has a “he” taking the writer somewhere.",
      "Last gap of the lesson. After she answers, ask her to say why the fourth sentence was the extra one.",
    ],
  },
];

// ---- one gap per slide ------------------------------------------------------------------------------------
function GapSlide({ set, si, g }) {
  const { report } = useContext(ScoreCtx);
  const id = `t8-${si + 1}-${g}`;
  const [picked, setPicked] = useStore("g-" + id, null);
  const answered = picked !== null;
  const key = set.keys[g - 1];
  const usedBefore = set.keys.slice(0, g - 1);
  const options = [0, 1, 2, 3].filter((i) => !usedBefore.includes(i));
  const ok = picked === key;
  function pick(i) {
    if (answered) return;
    setPicked(i);
    report(id, i === key);
  }
  const Slot = ({ n }) => {
    if (n < g) return <span className="e8-filled">{set.bank[set.keys[n - 1]]} </span>;
    if (n === g) {
      if (!answered) return <span className="e8-gap is-active"><span className="e8-gap-n">8.{n}</span><span className="e8-gap-empty">_____</span></span>;
      return <span className={`e8-gap ${ok ? "is-correct" : "is-wrong"}`}><span className="e8-gap-n">8.{n}</span><span className="e8-gap-fill">{LETTERS[picked]}</span></span>;
    }
    return <span className="e8-gap is-later"><span className="e8-gap-n">8.{n}</span></span>;
  };
  return (
    <div className="e8-split">
      <div className="e8-passage e8-passage--article">
        <div className="e8-passage-title">{set.title}</div>
        {set.paras.map((segs, pi) => (
          <p key={pi}>
            {segs.map((s, si2) => (typeof s === "number" ? <React.Fragment key={si2}><Slot n={s} />{" "}</React.Fragment> : <React.Fragment key={si2}>{s}{" "}</React.Fragment>))}
          </p>
        ))}
      </div>
      <div className="e8-side">
        <p className="e8-prompt">Which sentence fits gap 8.{g}?</p>
        <div className="e8-options">
          {options.map((i) => {
            if (answered && i !== key && i !== picked) return null;
            const cls = answered && i === key ? "is-correct" : answered && i === picked ? "is-wrong" : "";
            return (
              <button key={i} type="button" className={`e8-opt ${cls}`} onClick={() => pick(i)} disabled={answered}>
                <span className="e8-opt-letter">{LETTERS[i]}</span>
                <span>{set.bank[i]}</span>
              </button>
            );
          })}
        </div>
        {answered && (
          <div className={`e8-why ${ok ? "is-ok" : "is-bad"}`}>
            <p><b>{ok ? "Correct." : `Not ${LETTERS[picked]}.`} The answer is {LETTERS[key]}.</b> {set.whys[g - 1]}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ---- extra slide pieces -----------------------------------------------------------------------------------
function ClueCards() {
  const cards = [
    ["Who is “they”, “he”, “it”?", "If the sentence after the gap starts with a pronoun, the missing sentence must name who or what it is."],
    ["Time and order", "Then, after that, later, now, last month. Check what happened first."],
    ["Contrast and result", "But, however, so, because. They show a problem, a change, or a reason."],
    ["Repeated words", "The same word or name on both sides of the gap (books, Zoe, the idea) shows what the gap is about."],
  ];
  return (
    <div className="e8-8wrap">
      <span className="e8-eyebrow">Exam strategy 2</span>
      <h2 className="e8-h2">Four clues around a gap</h2>
      <div className="e8-8cards">
        {cards.map(([k, v]) => (
          <div key={k} className="e8-8card"><b>{k}</b><span>{v}</span></div>
        ))}
      </div>
    </div>
  );
}

function ScoreBySet() {
  const { results } = useContext(ScoreCtx);
  const rows = SETS.map((s, si) => {
    const ids = [1, 2, 3].map((g) => `t8-${si + 1}-${g}`);
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
  ["Same topic", "The extra sentence talks about the same topic as the text, but it does not connect what comes before and after any gap."],
  ["Pronoun with no owner", "If the sentence after the gap starts with he, she, they or it, the missing sentence must say who or what that is."],
  ["Wrong time order", "Then, after that, now, last month: put the events in the order they happened before you choose."],
  ["Repeats, not adds", "A sentence that only repeats what is already said does not fit. The gap needs new information that links both sides."],
  ["Clashes with the text", "Read the whole text. A sentence that says something different (books sold, but they are free) is not the answer."],
];

function Traps() {
  return (
    <div className="e8-traps">
      <h2 className="e8-h2">Five traps in Task 8</h2>
      {TRAPS.map(([k, v]) => (
        <div key={k} className="e8-trap-row" style={{ gridTemplateColumns: "190px 1fr" }}><b>{k}</b><span>{v}</span></div>
      ))}
    </div>
  );
}

function TakeHome() {
  return (
    <div className="e8-takehome">
      <span className="e8-eyebrow">Take-home · make your own Task 8</span>
      <h2 className="e8-h2">Cut a text for a friend</h2>
      <p className="e8-p">Write a text of five or six sentences. Take out three of them and write them on a list. Add one extra sentence on the same topic that does not fit anywhere.</p>
      <ul className="e8-th-list">
        <li>A story about a day when something went wrong.</li>
        <li>A short article about a club or a sport at your school.</li>
        <li>A message telling a friend about a trip.</li>
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
    body: <GapSlide set={set} si={si} g={g} />,
    _first: si === 2 && g === 1,
  }))
);

const SLIDES = [
  {
    stage: "E8 Task 8", time: null,
    note: "Alice is preparing for the E8, the Polish eighth-grade English exam. Task 8 is worth 3 points: a text with three sentences taken out, and four sentences to choose from (one is extra). Today is 25 minutes on this one task type: four short texts, three gaps each, one gap at a time. Every text and the answer key are ours, written in the style of the task.",
    body: (
      <div className="e8-cover">
        <span className="e8-eyebrow">Sentenco · Custom Lesson · E8 Task 8</span>
        <h1 className="e8-h1">Missing Sentences</h1>
        <p className="e8-cover-p">Four short texts with three gaps each. Put the sentences back where they belong, and spot the one that is extra.</p>
        <span className="e8-source">Format based on the E8 English exam, Task 8 (CKE, Poland). All texts and the answer key are by Sentenco.</span>
      </div>
    ),
  },
  {
    stage: "Today’s Plan", time: "~0.5 min",
    note: "Read the plan in half a minute. The rule of the whole lesson: look at the sentence BEFORE and the sentence AFTER the gap, and find the clue words.",
    body: (
      <div className="e8-plan">
        <h2 className="e8-h2">Goal: use the clues around the gap</h2>
        <p className="e8-p">The missing sentence must connect the sentence before it and the sentence after it. Clue words show you how.</p>
        <div className="e8-plan-list">
          {[
            ["Strategy", "Read the whole text first. Four clues around a gap", "2.5 min"],
            ["Text 1", "A library in a phone box", "5 min"],
            ["Text 2", "My first day at a new school", "5 min"],
            ["Text 3", "The school that grew its own lunch", "5 min"],
            ["Text 4", "How I learned to skateboard", "5 min"],
            ["Wrap-up", "Score and five traps", "2 min"],
          ].map(([k, d, t]) => (
            <div key={k} className="e8-plan-item"><b>{k}</b><span>{d}</span><small>{t}</small></div>
          ))}
        </div>
      </div>
    ),
  },
  {
    stage: "Strategy · Read It All First", time: "~1 min",
    note: "Have Alice read the three steps aloud, then start. On every text, let her read the whole passage silently before she looks at the sentences.",
    body: (
      <Strategy
        n={1}
        title="Read the whole text first"
        steps={[
          "Read the whole text with the gaps, and say what it is about in one sentence.",
          "For each gap, read the sentence before it and the sentence after it. Look for clue words.",
          "One sentence is extra. It has the right topic but does not fit any gap. In this lesson, the sentences you have already used leave the list.",
        ]}
      />
    ),
  },
  {
    stage: "Strategy · Four Clues", time: "~1.5 min",
    note: "Read the four cards aloud together. She does not need to memorise them: she will see each clue in the texts. Ask which one she notices first when she reads.",
    body: <ClueCards />,
  },
  ...gapSlides.flatMap((s) => {
    const { _first, ...slide } = s;
    if (!_first) return [slide];
    return [
      {
        stage: "Halfway · Clue Check", time: "~0.5 min",
        note: "Half a minute. Ask her which clue helped her most in texts 1 and 2. Six gaps done, six to go.",
        body: (
          <div className="e8-strategy">
            <span className="e8-eyebrow">Halfway</span>
            <h2 className="e8-h2">Three checks for every gap</h2>
            <ol className="e8-steps">
              <li><span className="e8-step-n">1</span><span><b>Before and after.</b> Did I read both sentences around the gap?</span></li>
              <li><span className="e8-step-n">2</span><span><b>Clue word.</b> Pronoun, time word or connector: which one decides it?</span></li>
              <li><span className="e8-step-n">3</span><span><b>New information.</b> Does my sentence add something, or only repeat?</span></li>
            </ol>
          </div>
        ),
      },
      slide,
    ];
  }),
  {
    stage: "Your Score", time: "~0.5 min",
    note: "Read the total, then only talk about the text where she lost points. Which clue did she miss?",
    body: <ScoreBySet />,
  },
  {
    stage: "Five Traps", time: "~1 min",
    note: "Read them one by one. Ask her which one caught her today.",
    body: <Traps />,
  },
  {
    stage: "Take-Home", time: null,
    note: "Homework: she cuts a text of her own. Next lesson, use one of hers as the warm-up quiz.",
    body: <TakeHome />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: s.time, note: s.note }));

const extraStyles = `
.e8-passage p + p { margin-top: 8px; }
.e8-8wrap { display: flex; flex-direction: column; align-items: center; gap: 6px; width: 100%; max-width: 860px; }
.e8-8cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; margin-top: 6px; }
.e8-8card { display: flex; flex-direction: column; gap: 4px; background: rgba(255,255,255,0.88); border: 1px solid #EBDFD0; border-radius: 14px; padding: 12px 18px; }
.e8-8card b { font-weight: 800; font-size: 14px; letter-spacing: 0.03em; color: #E0502F; }
.e8-8card span { font-size: 15px; font-weight: 700; line-height: 1.5; color: #1B2A4A; }
`;

export default function E8Task8Lesson() {
  return <E8Player slides={SLIDES} extraStyles={extraStyles} />;
}
