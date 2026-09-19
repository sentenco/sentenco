import React, { createContext, useContext, useEffect, useState } from "react";

const NAVY = "#1B2A4A";
const CORAL = "#FF6B4A";
const CORAL_DEEP = "#E0502F";
const GREEN = "#2EC4B6";
const RED = "#E5484D";

// Source: E8 (Polish eighth-grade exam), English, 13 May 2026 (CKE practice sheet from arkusze.pl).
// Answers below are our own key, worked out from the texts (the sheet has no official key).
// One item per slide, so the student only ever looks at one thing at a time.

const ScoreCtx = createContext({ report: () => {}, results: {}, store: {}, setStore: () => {} });

// Answers and typed text live in the lesson, so going back to a slide shows it as the student left it.
function useStore(id, init) {
  const { store, setStore } = useContext(ScoreCtx);
  const val = id in store ? store[id] : init;
  const set = (v) => setStore((s) => ({ ...s, [id]: typeof v === "function" ? v(id in s ? s[id] : init) : v }));
  return [val, set];
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function Marked({ text, evidence, on }) {
  const evs = (Array.isArray(evidence) ? evidence : evidence ? [evidence] : []).filter((e) => text.includes(e));
  if (!on || evs.length === 0) return <>{text}</>;
  const parts = text.split(new RegExp(`(${evs.map(esc).join("|")})`, "g"));
  return (
    <>
      {parts.map((p, i) => (evs.includes(p) ? <mark key={i} className="e8-mark">{p}</mark> : <React.Fragment key={i}>{p}</React.Fragment>))}
    </>
  );
}

const LETTERS = ["A", "B", "C", "D", "E"];

// One multiple-choice question: optional situation or reading passage, locks on tap, explains the trap.
function Choice({ id, prompt, situation, passage, passageTitle, evidence, options, correct, trap }) {
  const { report } = useContext(ScoreCtx);
  const [picked, setPicked] = useStore("pick-" + id, null);
  const answered = picked !== null;
  function pick(i) {
    if (answered) return;
    setPicked(i);
    report(id, i === correct);
  }
  const ok = picked === correct;
  return (
    <div className="e8-choice">
      {passage && (
        <div className="e8-passage">
          {passageTitle && <div className="e8-passage-title">{passageTitle}</div>}
          <p><Marked text={passage} evidence={evidence} on={answered} /></p>
        </div>
      )}
      {situation && <p className="e8-situation">{situation}</p>}
      {prompt && <p className="e8-prompt">{prompt}</p>}
      <div className="e8-options">
        {options.map((o, i) => {
          if (answered && i !== correct && i !== picked) return null;
          const cls = answered && i === correct ? "is-correct" : answered && i === picked ? "is-wrong" : "";
          return (
            <button key={i} type="button" className={`e8-opt ${cls}`} onClick={() => pick(i)} disabled={answered}>
              <span className="e8-opt-letter">{LETTERS[i]}</span>
              <span>{o.text}</span>
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={`e8-why ${ok ? "is-ok" : "is-bad"}`}>
          {ok ? (
            <p><b>Correct.</b> {options[correct].why}</p>
          ) : (
            <>
              <p><b>Tempting, but no.</b> {options[picked].why}</p>
              <p><b>Answer: {LETTERS[correct]}.</b> {options[correct].why}</p>
            </>
          )}
          {trap && <p className="e8-trap"><b>The trap:</b> {trap}</p>}
        </div>
      )}
    </div>
  );
}

function Strategy({ n, title, steps, example }) {
  return (
    <div className="e8-strategy">
      <span className="e8-eyebrow">Exam strategy {n}</span>
      <h2 className="e8-h2">{title}</h2>
      <ol className="e8-steps">
        {steps.map((s, i) => (
          <li key={i}><span className="e8-step-n">{i + 1}</span><span>{s}</span></li>
        ))}
      </ol>
      {example && <div className="e8-example">{example}</div>}
    </div>
  );
}

// ---- Task 9: one question per slide; read the three texts one at a time, then choose ----------
const T9_TEXTS = [
  { id: "A", text: "It’s that time of the year already. No, not the spring holidays, but something nearly as good: the 10th edition of our week-long school camp! Students of all grades can take part. The school provides transportation and meals. We also offer tents for hire (£10 per person) if you don’t have your own. For more information, please contact your teachers." },
  { id: "B", text: "Do you love making films? If the answer is yes, come and join us on 5th June at the outdoor cinema in Victoria Park for our first ever local community film competition. To take part, you have to prepare a film about your favourite part of town. It cannot be longer than 20 minutes and it should include at least 5 minutes of an interview with a local person. The directors of the best two films will receive £500 each. Sign up now at locals.xyz.com!" },
  { id: "C", text: "Our traditional board games tournament is nearly here again! As usual, you will compete against your schoolmates in games such as Monopoly, Rummikub and Scrabble, to name just a few. For more details ask Mrs Simmons. We are going to have the event in the school hall on Thursday, 7th May, from 1 p.m. to 5 p.m. This year all the winners will get an amazing pack of board games from our sponsor!" },
];
const T9_QS = [
  { id: "9.1", q: "Which event offers money prizes?", correct: "B", evidence: "£500 each", trap: "Text A has money too (£10 for a tent), but that is a price, not a prize. Text C has prizes, but they are board games." },
  { id: "9.2", q: "Which event will take place indoors?", correct: "C", evidence: "in the school hall", trap: "Text B is the film competition, but it is at an outdoor cinema." },
  { id: "9.3", q: "Which event will last longer than a day?", correct: "A", evidence: "week-long", trap: "Text C gives hours (1 p.m. to 5 p.m.), so it is one afternoon." },
  { id: "9.4", q: "Which event has never taken place before?", correct: "B", evidence: "first ever", trap: "Texts A and C sound familiar (“10th edition”, “as usual”, “traditional”), so they have happened before. Text B is also the answer to 9.1: in this task one text is always used twice." },
];

function MatchOne({ q }) {
  const { report } = useContext(ScoreCtx);
  const [st, setSt] = useStore("m-" + q.id, { tab: "A", picked: null });
  const answered = st.picked !== null;
  const shown = answered ? q.correct : st.tab;
  const text = T9_TEXTS.find((t) => t.id === shown).text;
  const ok = st.picked === q.correct;
  function choose() {
    if (answered) return;
    setSt({ tab: st.tab, picked: st.tab });
    report("t9-" + q.id, st.tab === q.correct);
  }
  return (
    <div className="e8-match1">
      <p className="e8-bigq"><span className="e8-qid">{q.id}</span>{q.q}</p>
      <div className="e8-tabs">
        {T9_TEXTS.map((t) => (
          <button key={t.id} type="button" disabled={answered} className={`e8-tab ${shown === t.id ? "is-on" : ""} ${answered && t.id === q.correct ? "is-correct" : ""} ${answered && t.id === st.picked && !ok ? "is-wrong" : ""}`} onClick={() => setSt({ ...st, tab: t.id })}>
            Text {t.id}
          </button>
        ))}
      </div>
      <div className="e8-readcard">
        <p><Marked text={text} evidence={q.evidence} on={answered} /></p>
      </div>
      {!answered ? (
        <button type="button" className="e8-check" onClick={choose}>This text answers the question: choose Text {st.tab}</button>
      ) : (
        <div className={`e8-why ${ok ? "is-ok" : "is-bad"}`}>
          <p><b>{ok ? "Correct." : `Not Text ${st.picked}.`} The answer is Text {q.correct}.</b> Evidence: <mark className="e8-mark">{q.evidence}</mark></p>
          <p className="e8-trap"><b>The trap:</b> {q.trap}</p>
        </div>
      )}
    </div>
  );
}

// ---- Task 8: one gap per slide; sentences already used are taken out of the bank ----------------
const T8_BANK = [
  "He glued them together to create a single large picture.",
  "It was also possible to buy some of his works there.",
  "He asked his friends for their used travel cards.",
  "One day, when sitting on the subway, he started looking at his travel card.",
];
const T8 = [
  { g: 1, key: 3, why: "It comes after “He came up with the idea 20 years ago” and before “Suddenly, he knew what he had to do.” We need the moment the idea came: one day, on the subway, looking at his travel card." },
  { g: 2, key: 0, why: "Before: he cut the cards into pieces. After: “This was his first work of art made from plastic cards.” The missing step is making the picture: he glued the pieces together." },
  { g: 3, key: 1, why: "Before: his pictures were shown in a gallery. After: “Although they weren’t cheap, they sold out.” “They” means works you could buy there. The sentence left over, C, is the extra one: it has the right topic (travel cards) but no gap fits it, because in the story he uses his own old cards." },
];
const T8_PARAS = [
  { gaps: [1, 2], parts: [
    "Thomas McKean from New York is famous for creating art from everyday objects, such as used plastic travel cards. He came up with the idea 20 years ago.",
    "Suddenly, he knew what he had to do. He hurried home, took his scissors and cut some of his old travel cards into pieces.",
    "This was his first work of art made from plastic cards. Since then, he has made more than a thousand of them. The most popular ones are portraits, city views and 3D scenes.",
  ] },
  { gaps: [3], parts: [
    "His pictures were shown in an art gallery in 2022 and many people came to see them.",
    "Although they weren’t cheap, they sold out quickly.",
  ] },
];

function GapOne({ item }) {
  const { report } = useContext(ScoreCtx);
  const [picked, setPicked] = useStore("g-" + item.g, null);
  const answered = picked !== null;
  const usedBefore = T8.filter((x) => x.g < item.g).map((x) => x.key);
  const options = [0, 1, 2, 3].filter((i) => !usedBefore.includes(i));
  const para = T8_PARAS.find((p) => p.gaps.includes(item.g));
  const ok = picked === item.key;
  function pick(i) {
    if (answered) return;
    setPicked(i);
    report("t8-" + item.g, i === item.key);
  }
  const Slot = ({ g }) => {
    const solvedBefore = g < item.g;
    const data = T8.find((x) => x.g === g);
    if (solvedBefore) return <span className="e8-filled">{T8_BANK[data.key]} </span>;
    if (g === item.g) {
      if (!answered) return <span className="e8-gap is-active"><span className="e8-gap-n">8.{g}</span><span className="e8-gap-empty">_____</span></span>;
      return <span className={`e8-gap ${ok ? "is-correct" : "is-wrong"}`}><span className="e8-gap-n">8.{g}</span><span className="e8-gap-fill">{LETTERS[picked]}</span></span>;
    }
    return <span className="e8-gap is-later"><span className="e8-gap-n">8.{g}</span></span>;
  };
  return (
    <div className="e8-gap1">
      <div className="e8-passage e8-passage--article">
        <div className="e8-passage-title">UNUSUAL ARTWORK</div>
        <p>
          {para.parts.map((part, idx) => (
            <React.Fragment key={idx}>
              {part}{" "}
              {idx < para.gaps.length && <><Slot g={para.gaps[idx]} />{" "}</>}
            </React.Fragment>
          ))}
        </p>
      </div>
      <p className="e8-prompt">Which sentence fits gap 8.{item.g}?</p>
      <div className="e8-options">
        {options.map((i) => {
          if (answered && i !== item.key && i !== picked) return null;
          const cls = answered && i === item.key ? "is-correct" : answered && i === picked ? "is-wrong" : "";
          return (
            <button key={i} type="button" className={`e8-opt ${cls}`} onClick={() => pick(i)} disabled={answered}>
              <span className="e8-opt-letter">{LETTERS[i]}</span>
              <span>{T8_BANK[i]}</span>
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={`e8-why ${ok ? "is-ok" : "is-bad"}`}>
          <p><b>{ok ? "Correct." : `Not ${LETTERS[picked]}.`} The answer is {LETTERS[item.key]}.</b> {item.why}</p>
        </div>
      )}
    </div>
  );
}

// ---- Task 13: one word transformation per slide -------------------------------------------------
const T13 = [
  { id: "13.1", before: "When Tom was younger, he dreamt of a career in sport, but now he", words: "(want / be)", after: "a scientist.", answers: ["wants to be"], why: "“now” = present, and “he” needs wants. After want we use to + verb: wants to be." },
  { id: "13.2", before: "Amanda is really", words: "(good / make)", after: "cakes.", answers: ["good at making"], why: "The set phrase is good at + -ing: good at making. The words keep their order; you add “at” and change make to making." },
  { id: "13.3", before: "I first", words: "(meet / he)", after: "when I was on holiday in Italy.", answers: ["met him"], why: "A finished event in the past: met. He is the object here, so it becomes him." },
];
const norm = (s) => s.toLowerCase().replace(/[.,!?]/g, "").replace(/\s+/g, " ").trim();

function WordOne({ item }) {
  const { report } = useContext(ScoreCtx);
  const [st, setSt] = useStore("w-" + item.id, { val: "", checked: false });
  const ok = st.checked && item.answers.includes(norm(st.val));
  function check() {
    if (!st.val.trim() || st.checked) return;
    setSt({ ...st, checked: true });
    report("t13-" + item.id, item.answers.includes(norm(st.val)));
  }
  return (
    <div className="e8-wt">
      <p className="e8-wt-help">Use the words in brackets, in the same order. Add other words if you need to. Maximum three words in the gap.</p>
      <div className="e8-wt-card">
        <span className="e8-qid">{item.id}</span>
        <p className="e8-wt-sentence">
          {item.before} <b className="e8-wt-words">{item.words}</b>
        </p>
        <input
          className={`e8-input ${ok ? "is-correct" : st.checked ? "is-wrong" : ""}`}
          value={st.val}
          disabled={st.checked}
          onChange={(e) => setSt({ ...st, val: e.target.value })}
          onKeyDown={(e) => { if (e.key === "Enter") check(); }}
          placeholder="type your answer"
          autoComplete="off"
          spellCheck="false"
        />
        <p className="e8-wt-sentence">{item.after}</p>
      </div>
      {!st.checked ? (
        <button type="button" className="e8-check" disabled={!st.val.trim()} onClick={check}>Check</button>
      ) : (
        <div className={`e8-why ${ok ? "is-ok" : "is-bad"}`}>
          <p><b>{ok ? "Correct." : `Answer: ${item.answers[0]}.`}</b> {item.why}</p>
        </div>
      )}
    </div>
  );
}

// ---- Score slides -------------------------------------------------------------------------------
const TASKS = [
  { name: "Task 5", label: "Reactions", ids: ["t5-1", "t5-4"], trap: "Listen for direction. Are you asking for help or offering it? Refusing means saying no politely, not agreeing." },
  { name: "Task 7", label: "Short texts", ids: ["t7-2", "t7-3"], trap: "Ask who the text speaks to and why it was written before you read the options." },
  { name: "Task 9", label: "Matching", ids: ["t9-9.1", "t9-9.2", "t9-9.3", "t9-9.4"], trap: "Find the key word first. A text can look right and still be a price, not a prize, or an outdoor cinema, not indoors." },
  { name: "Task 8", label: "Gapped text", ids: ["t8-1", "t8-2", "t8-3"], trap: "Read the sentence before and after the gap. The extra sentence has the right topic and the wrong place." },
  { name: "Task 13", label: "Word transformation", ids: ["t13-13.1", "t13-13.2", "t13-13.3"], trap: "Check the tense clue (now, first…when) and the fixed pattern (want to, good at + -ing)." },
];

function Score() {
  const { results } = useContext(ScoreCtx);
  const rows = TASKS.map((t) => {
    const got = t.ids.filter((id) => results[id] === true).length;
    const tried = t.ids.filter((id) => id in results).length;
    return { ...t, got, tried, max: t.ids.length };
  });
  const total = rows.reduce((a, r) => a + r.got, 0);
  const max = rows.reduce((a, r) => a + r.max, 0);
  return (
    <div className="e8-score">
      <div className="e8-score-total"><span>{total}</span><small>out of {max}</small></div>
      <div className="e8-score-tiles">
        {rows.map((r) => (
          <div key={r.name} className={`e8-score-tile ${r.tried === r.max && r.got === r.max ? "is-full" : ""}`}>
            <small>{r.name}</small>
            <b>{r.tried === 0 ? "–" : `${r.got}/${r.max}`}</b>
            <span>{r.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Traps() {
  return (
    <div className="e8-traps">
      <h2 className="e8-h2">One trap to remember for each task</h2>
      {TASKS.map((t) => (
        <div key={t.name} className="e8-trap-row"><b>{t.name}</b><span>{t.trap}</span></div>
      ))}
    </div>
  );
}

function TakeHome() {
  return (
    <div className="e8-takehome">
      <span className="e8-eyebrow">Take-home · Task 14 · 10 points</span>
      <h2 className="e8-h2">Write an email (50–120 words)</h2>
      <p className="e8-p">You made a photo album as a present for your aunt. Write an email to a friend from England. In your email:</p>
      <ul className="e8-th-list">
        <li>explain why a photo album is a good present for your aunt</li>
        <li>explain who helped you prepare it, and how</li>
        <li>describe one of the photos in the album</li>
      </ul>
      <p className="e8-p">Sign your email XYZ. Cover all three points so a reader who has not seen this task understands everything.</p>
    </div>
  );
}

// ---- Slides -------------------------------------------------------------------------------------
const SLIDES = [
  {
    stage: "E8 Practice", time: null,
    note: "Alice is preparing for the E8 (the Polish eighth-grade English exam), the national exam that decides high-school places. Today is about 25 minutes on the reading and reaction tasks, using the real 13 May 2026 sheet. One item at a time: she should only ever look at one question.",
    body: (
      <div className="e8-cover">
        <span className="e8-eyebrow">Sentivo · Custom Lesson</span>
        <h1 className="e8-h1">E8 Reading &amp; Reactions</h1>
        <p className="e8-cover-p">Real exam tasks, one trap at a time. Today you will not only find the right answer, you will see why the wrong ones look right.</p>
        <span className="e8-source">Source: E8 English exam, 13 May 2026 (CKE, Poland). Answer key by Sentivo.</span>
      </div>
    ),
  },
  {
    stage: "Today’s Plan", time: "~1 min",
    note: "Read the plan aloud in one minute. The goal statement matters most: the exam writes every wrong option to look almost right. Alice’s job today is to catch that.",
    body: (
      <div className="e8-plan">
        <h2 className="e8-h2">Goal: spot the trap</h2>
        <p className="e8-p">In E8 every wrong answer is written to look almost right. Five task types today, and each one has its own trap.</p>
        <div className="e8-plan-list">
          {[
            ["Task 5", "Reactions to a situation", "3 min"],
            ["Task 7", "Short texts: what is it for?", "4 min"],
            ["Task 9", "Match questions to texts", "6 min"],
            ["Task 8", "Put sentences back in the text", "4 min"],
            ["Task 13", "Word transformation", "3 min"],
          ].map(([k, d, t]) => (
            <div key={k} className="e8-plan-item"><b>{k}</b><span>{d}</span><small>{t}</small></div>
          ))}
        </div>
      </div>
    ),
  },
  {
    stage: "Task 5 · Reaction 1", time: "~1.5 min",
    note: "Read the situation aloud. Ask: are you asking for help, or offering it? A sounds nice but it is what the OTHER person would say. C is the request.",
    body: (
      <Choice
        id="t5-1"
        situation="You need help making a tomato salad. How do you ask for help?"
        options={[
          { text: "Do you need any help with the tomatoes?", why: "This offers help. You need help, so you are the one who asks." },
          { text: "Shall we have a tomato salad for lunch?", why: "This suggests a meal. It uses the same words (tomato, salad) but never asks for help." },
          { text: "Could you cut up the tomatoes?", why: "“Could you…?” is a polite request, and it asks for exactly the help you need." },
        ]}
        correct={2}
        trap="A and B copy words from the situation (help, tomatoes, salad). Choose by what you want to DO, not by matching words."
      />
    ),
  },
  {
    stage: "Task 5 · Reaction 2", time: "~1.5 min",
    note: "Refusing politely: “I’m afraid…” is the exam’s favourite refusal. C says yes, A reverses who borrows.",
    body: (
      <Choice
        id="t5-4"
        situation="A friend wants to borrow a textbook that you need. How do you refuse?"
        options={[
          { text: "I’ll borrow it from you tomorrow.", why: "This reverses the roles: you would be the one borrowing." },
          { text: "I’m afraid I’m using it right now.", why: "“I’m afraid…” is a polite way to say no, and gives the reason." },
          { text: "I don’t mind giving it to you.", why: "This says yes. The situation says you need the book, so you refuse." },
        ]}
        correct={1}
        trap="The task says refuse. One option sounds friendly but agrees. Always check yes or no first."
      />
    ),
  },
  {
    stage: "Strategy 1 · Short Texts", time: "~1 min",
    note: "Have Alice read the three steps aloud, then apply them right away on the next slide. Do not explain more than this.",
    body: (
      <Strategy
        n={1}
        title="Read the question first"
        steps={[
          "Look at the question before the text: who is it for, or why was it written?",
          "Read the text once, looking for the writer’s aim (to ask, to explain, to invite).",
          "Choose the option that matches the aim, not one that repeats a word from the text.",
        ]}
      />
    ),
  },
  {
    stage: "Task 7 · Notice", time: "~2 min",
    note: "Highlight “Do you need money…” and “you”. The notice talks TO athletes; A and B talk ABOUT them. If Alice picks A or B, ask: who does “you” mean?",
    body: (
      <Choice
        id="t7-2"
        passageTitle="A FUTURE CHAMPION?"
        passage={"Are you hard-working, talented and passionate about sports?\nDo you dream of being a champion?\nDo you need money for new sports equipment, training sessions or sports camps?\nWe may be able to help you achieve your sporting dreams.\nVisit our website and fill in the application form.\nWe will contact you and give you more details of our support programme."}
        evidence="Do you need money for new sports equipment, training sessions or sports camps?"
        prompt="This notice is for…"
        options={[
          { text: "charity workers who help athletes.", why: "The notice is written by the helpers, not for them. It speaks to “you”, the athlete." },
          { text: "trainers who are looking for talented athletes.", why: "“Talented” appears, but trainers are not asked to apply. Athletes fill in the form." },
          { text: "athletes who need financial help.", why: "It asks “Do you need money for equipment…?” and offers a support programme." },
        ]}
        correct={2}
        trap="Words like talented and help appear in the wrong options too. Find who “you” is."
      />
    ),
  },
  {
    stage: "Task 7 · Email", time: "~2 min",
    note: "The purpose is in the last lines: “So I’m not going to buy anything from them.” Jack is explaining why, not complaining about a bike he has not bought.",
    body: (
      <Choice
        id="t7-3"
        passageTitle="From: jack.wilson@mail.com · To: miaflames@mail.com · Subject: Bikes"
        passage={"Hi Mia!\nThanks for taking the time to find an online shop with second-hand bikes for sale. I’ve looked at their website. I can see a few people have recommended the shop, but there’s no information about what happens if you buy one of their bikes and there’s a problem with it. Do they give you your money back or fix it for you? I guess they probably don’t. So I’m not going to buy anything from them. I think I need to visit a bike shop in town where I can talk face to face with an expert.\nJack"}
        evidence="So I’m not going to buy anything from them."
        prompt="Jack is writing to Mia…"
        options={[
          { text: "to explain his decision.", why: "He says he will not buy from the shop, and gives his reasons." },
          { text: "to complain about his bike.", why: "He has not bought a bike from this shop, so there is nothing to complain about yet." },
          { text: "to recommend a website to her.", why: "Other people recommended the shop. Jack does not recommend it." },
        ]}
        correct={0}
        trap="“Recommended” and “problem” are in the text. They are used for other people and for a possible future problem."
      />
    ),
  },
  {
    stage: "Strategy 2 · Matching", time: "~1 min",
    note: "Task 9 always has one text that answers two questions. Say this out loud before she starts; it changes how she checks her answers.",
    body: (
      <Strategy
        n={2}
        title="Underline the key word"
        steps={[
          "Read the question and find its key word: money prizes, indoors, longer than a day, never before.",
          "Read the texts one by one. Words that look similar (a price, an outdoor cinema) are the trap.",
          "One text answers two questions in this task.",
        ]}
      />
    ),
  },
  ...T9_QS.map((q, idx) => ({
    stage: `Task 9 · Question ${idx + 1} of 4`, time: "~1.5 min",
    note: idx === 0
      ? "Alice reads the three texts one at a time using the Text A / B / C buttons, then chooses. Do not help until she has chosen. The right text opens with the evidence highlighted."
      : idx === 3
      ? "The last question: ask which text she has already used twice. The rule of Task 9 is that one text answers two questions."
      : "Same routine: key word first, then read the texts one by one. Ask her to say the key word aloud before choosing.",
    body: <MatchOne q={q} />,
  })),
  {
    stage: "Strategy 3 · Gapped Text", time: "~1 min",
    note: "This is the hardest task type for A2 students. The trick is looking at both sides of the gap. Time-words (One day, Suddenly, Then) and pronouns (they, them, this) are the glue.",
    body: (
      <Strategy
        n={3}
        title="Look before and after the gap"
        steps={[
          "Read the sentence before the gap and the sentence after it.",
          "Look for glue words: time words (one day, suddenly, then) and pronouns (they, them, this).",
          "One sentence is extra. It has the right topic, but no gap fits it.",
        ]}
      />
    ),
  },
  ...T8.map((item) => ({
    stage: `Task 8 · Gap ${item.g} of 3`, time: "~1.5 min",
    note: item.g === 3
      ? "Only two sentences are left, and one of them is the extra. Ask Alice why C cannot go anywhere before she looks at the explanation."
      : "Ask Alice to say the sentence before and after the gap aloud, then choose. Sentences that are already used are taken out of the list.",
    body: <GapOne item={item} />,
  })),
  {
    stage: "Strategy 4 · Word Transformation", time: "~1 min",
    note: "Accept only exact forms in the next three slides (wants to be, good at making, met him). Spelling counts in the exam.",
    body: (
      <Strategy
        n={4}
        title="Clue first, then pattern"
        steps={[
          "Find the clue in the sentence: a time word (now, first… when) tells you the tense.",
          "Look for a fixed pattern: want to + verb, good at + -ing.",
          "Keep the given words in order, change them, and add at most one or two more.",
        ]}
      />
    ),
  },
  ...T13.map((item, idx) => ({
    stage: `Task 13 · Item ${idx + 1} of 3`, time: "~1 min",
    note: "If the answer is wrong, ask which word she has to change and which she has to add. Spelling matters in the exam.",
    body: <WordOne item={item} />,
  })),
  {
    stage: "Your Score", time: "~1 min",
    note: "Read the score, then only talk about the task where she lost points.",
    body: <Score />,
  },
  {
    stage: "Five Traps", time: "~1 min",
    note: "Read them one by one. Ask her which one caught her today.",
    body: <Traps />,
  },
  {
    stage: "Take-Home", time: null,
    note: "Task 14 needs a teacher to mark it (content 4, coherence 2, range 2, accuracy 2). Give it as homework.",
    body: <TakeHome />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: s.time, note: s.note }));

export default function E8ReadingReactionsLesson() {
  const [i, setI] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [results, setResults] = useState({});
  const [store, setStore] = useState({});
  const total = SLIDES.length;
  const s = SLIDES[i];

  useEffect(() => {
    const styleId = "e8-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }
  function exit() {
    window.close();
  }
  const report = (id, ok) => setResults((r) => (id in r ? r : { ...r, [id]: ok }));

  return (
    <ScoreCtx.Provider value={{ report, results, store, setStore }}>
      <div className="e8-wrap">
        <div className="e8-single">
          <div className="e8-slide">
            <button className="e8-close" onClick={exit} aria-label="Close">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <div className="e8-header">
              <div className="e8-brand">
                <span className="e8-brand-badge"><img className="e8-brand-logo" src="/logo-sentivo.png" alt="" /></span>
                <span>entivo</span>
              </div>
              <div className="e8-header-right">
                <button type="button" className={`e8-tnotes ${showNotes ? "on" : ""}`} onClick={() => setShowNotes((v) => !v)}>Teacher notes</button>
                <div className="e8-stage-chip">
                  <span className="e8-stage-name">{s.stage}</span>
                  {s.time && <span className="e8-stage-time">{s.time}</span>}
                </div>
              </div>
            </div>
            <div className="e8-body" key={i}>{s.body}</div>
            {showNotes && (
              <div className="e8-notes">
                <b>Teacher notes.</b> {s.note}
              </div>
            )}
            <div className="e8-footer">
              <button className={`e8-nav ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
              <div className="e8-progress">
                {Array.from({ length: total }).map((_, idx) => (
                  <span key={idx} className={`e8-dot ${idx === i ? "on" : ""}`} />
                ))}
              </div>
              <button className="e8-nav next" onClick={() => (i === total - 1 ? exit() : go(1))}>
                {i === total - 1 ? "Finish Lesson" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScoreCtx.Provider>
  );
}

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Quicksand:wght@500;600;700&display=swap');

.e8-wrap { min-height: 100vh; width: 100%; background: #EEF1F6; color: ${NAVY}; font-family: 'Quicksand', sans-serif; padding: 16px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; }
.e8-wrap * { box-sizing: border-box; }
.e8-single { flex-shrink: 0; }

.e8-slide {
  position: relative; width: min(740px, calc(100vw - 32px)); height: min(740px, calc(100vh - 32px)); flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  background: #fff; border-radius: 22px; box-shadow: 0 24px 50px rgba(27,42,74,0.18);
}
.e8-close { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.2); color: #fff; }

.e8-header { flex-shrink: 0; background: ${NAVY}; padding: 16px 56px 16px 30px; display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.e8-brand { display: flex; align-items: center; gap: 8px; font-family: 'Fraunces', serif; font-weight: 700; font-size: 17px; color: #fff; }
.e8-brand-badge { display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #fff; flex-shrink: 0; }
.e8-brand-logo { height: 16px; width: auto; display: block; }
.e8-header-right { display: flex; align-items: center; gap: 8px; min-width: 0; }
.e8-tnotes { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10.5px; color: rgba(255,255,255,0.85); background: transparent; border: 1px solid rgba(255,255,255,0.35); border-radius: 999px; padding: 5px 11px; cursor: pointer; white-space: nowrap; }
.e8-tnotes.on { background: #fff; color: ${NAVY}; }
.e8-stage-chip { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.14); padding: 6px 14px; border-radius: 999px; min-width: 0; }
.e8-stage-name { font-weight: 700; font-size: 11.5px; color: #fff; letter-spacing: 0.02em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.e8-stage-time { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.14); padding: 3px 8px; border-radius: 999px; white-space: nowrap; }

.e8-body { flex: 1; overflow-y: auto; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding: 26px 44px 22px; gap: 14px; }
.e8-body > * { margin-top: auto; margin-bottom: auto; }

.e8-notes { flex-shrink: 0; background: #FFF6E5; border-top: 2px solid #F2A900; padding: 10px 26px; font-size: 12.5px; font-weight: 600; color: #6B5310; line-height: 1.5; max-height: 110px; overflow-y: auto; }

.e8-footer { flex-shrink: 0; background: #F5F6FA; border-top: 1px solid #E4E9F5; padding: 14px 26px; display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.e8-nav { display: inline-flex; align-items: center; gap: 7px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; padding: 10px 20px; border-radius: 12px; border: 1px solid #DCE2F0; cursor: pointer; background: #fff; color: ${NAVY}; white-space: nowrap; }
.e8-nav.next { background: ${CORAL}; border-color: ${CORAL}; color: #fff; }
.e8-nav.is-off, .e8-nav:disabled { opacity: 0.35; cursor: default; }
.e8-progress { display: flex; align-items: center; gap: 4px; flex-wrap: nowrap; justify-content: center; }
.e8-dot { width: 6px; height: 6px; border-radius: 50%; background: #D6DCEA; flex-shrink: 0; }
.e8-dot.on { width: 16px; border-radius: 4px; background: ${CORAL}; }

.e8-eyebrow { font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; }
.e8-h1 { font-family: 'Fraunces', serif; font-weight: 700; font-size: 36px; color: ${NAVY}; margin: 6px 0 0; text-align: center; }
.e8-h2 { font-family: 'Fraunces', serif; font-weight: 700; font-size: 27px; color: ${NAVY}; margin: 2px 0 8px; text-align: center; }
.e8-p { font-size: 15.5px; font-weight: 600; color: #4A5878; line-height: 1.65; margin: 0; text-align: center; max-width: 540px; }
.e8-cover { display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; }
.e8-cover-p { font-size: 16px; font-weight: 600; color: #5A6B92; max-width: 500px; line-height: 1.65; margin: 0; }
.e8-source { font-size: 11px; font-weight: 700; color: #8892AC; margin-top: 10px; max-width: 460px; }

.e8-plan { display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; max-width: 560px; }
.e8-plan-list { display: flex; flex-direction: column; gap: 8px; width: 100%; margin-top: 10px; }
.e8-plan-item { display: grid; grid-template-columns: 78px 1fr 56px; align-items: center; gap: 12px; background: #F5F6FA; border: 1px solid #E4E9F5; border-radius: 12px; padding: 12px 16px; font-size: 14.5px; font-weight: 600; color: #4A5878; }
.e8-plan-item b { color: ${NAVY}; font-weight: 800; }
.e8-plan-item small { font-weight: 800; font-size: 12px; color: ${CORAL_DEEP}; text-align: right; }

.e8-strategy { display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; max-width: 560px; }
.e8-steps { list-style: none; margin: 8px 0 0; padding: 0; display: flex; flex-direction: column; gap: 12px; width: 100%; }
.e8-steps li { display: flex; gap: 14px; align-items: flex-start; font-size: 16px; font-weight: 600; line-height: 1.55; color: ${NAVY}; background: #F5F6FA; border-radius: 14px; padding: 16px 18px; }
.e8-step-n { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: ${CORAL}; color: #fff; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: center; }
.e8-example { font-size: 13.5px; font-weight: 700; color: #8A5A00; background: #FFF6E5; border: 1px dashed #F2A900; border-radius: 12px; padding: 12px 16px; width: 100%; line-height: 1.5; }

.e8-choice, .e8-gap1, .e8-match1, .e8-wt { width: 100%; max-width: 620px; display: flex; flex-direction: column; gap: 14px; }
.e8-passage { background: #F8F9FC; border: 1px solid #E4E9F5; border-radius: 14px; padding: 16px 20px; }
.e8-passage p { margin: 0; font-size: 14px; font-weight: 600; line-height: 1.7; color: #33415E; white-space: pre-line; }
.e8-passage-title { font-family: 'Fraunces', serif; font-weight: 700; font-size: 14px; letter-spacing: 0.02em; color: ${NAVY}; margin-bottom: 6px; }
.e8-situation { margin: 0; font-family: 'Fraunces', serif; font-weight: 600; font-size: 22px; line-height: 1.5; color: ${NAVY}; text-align: center; padding: 0 8px 6px; }
.e8-prompt { margin: 0; font-weight: 800; font-size: 15px; color: ${NAVY}; }
.e8-options { display: flex; flex-direction: column; gap: 10px; }
.e8-opt { display: flex; align-items: flex-start; gap: 12px; text-align: left; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14.5px; line-height: 1.45; color: ${NAVY}; background: #FAFBFD; border: 1.5px solid #DCE2F0; border-radius: 14px; padding: 12px 16px; cursor: pointer; }
.e8-opt:disabled { cursor: default; }
.e8-opt-letter { flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #E4E9F5; color: ${NAVY}; font-weight: 800; font-size: 12px; display: flex; align-items: center; justify-content: center; }
.e8-opt.is-correct { background: ${GREEN}; border-color: ${GREEN}; color: #fff; }
.e8-opt.is-wrong { background: ${RED}; border-color: ${RED}; color: #fff; }
.e8-opt.is-correct .e8-opt-letter, .e8-opt.is-wrong .e8-opt-letter { background: rgba(255,255,255,0.28); color: #fff; }
.e8-why { border-radius: 14px; padding: 12px 16px; font-size: 13.5px; font-weight: 600; line-height: 1.55; color: ${NAVY}; }
.e8-why p { margin: 0 0 5px; }
.e8-why p:last-child { margin-bottom: 0; }
.e8-why.is-ok { background: #E6F8F5; border: 1px solid #A8E6DF; }
.e8-why.is-bad { background: #FDECEC; border: 1px solid #F5B8BA; }
.e8-trap { color: #8A5A00; }
.e8-mark { background: #FFE58A; color: inherit; border-radius: 3px; padding: 0 2px; }

.e8-bigq { margin: 0; display: flex; align-items: baseline; gap: 10px; font-family: 'Fraunces', serif; font-weight: 600; font-size: 21px; line-height: 1.4; color: ${NAVY}; }
.e8-qid { flex-shrink: 0; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 13px; color: ${CORAL_DEEP}; }
.e8-tabs { display: flex; gap: 8px; }
.e8-tab { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 13px; color: ${NAVY}; background: #F5F6FA; border: 1.5px solid #DCE2F0; border-radius: 999px; padding: 8px 18px; cursor: pointer; }
.e8-tab.is-on { background: ${NAVY}; border-color: ${NAVY}; color: #fff; }
.e8-tab:disabled { cursor: default; }
.e8-tab.is-correct { background: ${GREEN}; border-color: ${GREEN}; color: #fff; }
.e8-tab.is-wrong { background: ${RED}; border-color: ${RED}; color: #fff; }
.e8-readcard { background: #F8F9FC; border: 1px solid #E4E9F5; border-radius: 14px; padding: 16px 20px; }
.e8-readcard p { margin: 0; font-size: 14.5px; font-weight: 600; line-height: 1.7; color: #33415E; }

.e8-check { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 14px; background: ${NAVY}; color: #fff; border: none; border-radius: 12px; padding: 12px 24px; cursor: pointer; align-self: center; }
.e8-check:disabled { opacity: 0.35; cursor: default; }

.e8-gap { display: inline-flex; align-items: center; gap: 5px; vertical-align: baseline; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 12.5px; color: ${NAVY}; background: #fff; border: 1.5px dashed #9AA6C4; border-radius: 8px; padding: 1px 8px; margin: 0 2px; }
.e8-gap.is-active { border-color: ${CORAL}; background: #FFF1EC; }
.e8-gap.is-later { border-color: #C9D0E0; color: #9AA6C4; }
.e8-gap.is-correct { background: ${GREEN}; border: 1.5px solid ${GREEN}; color: #fff; }
.e8-gap.is-wrong { background: ${RED}; border: 1.5px solid ${RED}; color: #fff; }
.e8-gap-n { font-size: 10.5px; opacity: 0.75; }
.e8-gap-empty { letter-spacing: 1px; color: #9AA6C4; }
.e8-filled { background: #E6F8F5; border-radius: 4px; padding: 0 3px; }

.e8-wt-help { margin: 0; font-size: 13px; font-weight: 700; color: #5A6B92; text-align: center; }
.e8-wt-card { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; background: #F8F9FC; border: 1px solid #E4E9F5; border-radius: 16px; padding: 22px 26px; }
.e8-wt-sentence { margin: 0; font-family: 'Fraunces', serif; font-weight: 600; font-size: 21px; line-height: 1.55; color: ${NAVY}; }
.e8-wt-words { color: ${CORAL_DEEP}; font-family: 'Quicksand', sans-serif; font-size: 18px; }
.e8-input { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 18px; color: ${NAVY}; border: 0; border-bottom: 3px solid #9AA6C4; background: #fff; border-radius: 8px 8px 0 0; padding: 8px 12px; width: 100%; max-width: 360px; outline: none; }
.e8-input:focus { border-bottom-color: ${CORAL}; }
.e8-input.is-correct { background: #E6F8F5; border-bottom-color: ${GREEN}; }
.e8-input.is-wrong { background: #FDECEC; border-bottom-color: ${RED}; }

.e8-score { width: 100%; max-width: 560px; display: flex; flex-direction: column; align-items: center; gap: 22px; }
.e8-score-total { display: flex; align-items: baseline; gap: 10px; background: ${NAVY}; color: #fff; border-radius: 22px; padding: 14px 36px; }
.e8-score-total span { font-family: 'Fraunces', serif; font-weight: 700; font-size: 64px; line-height: 1; }
.e8-score-total small { font-size: 16px; font-weight: 700; opacity: 0.75; }
.e8-score-tiles { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; width: 100%; }
.e8-score-tile { display: flex; flex-direction: column; align-items: center; gap: 4px; background: #F8F9FC; border: 1px solid #E4E9F5; border-radius: 14px; padding: 14px 6px; text-align: center; }
.e8-score-tile.is-full { background: #E6F8F5; border-color: #A8E6DF; }
.e8-score-tile small { font-size: 11.5px; font-weight: 800; color: ${CORAL_DEEP}; }
.e8-score-tile b { font-family: 'Fraunces', serif; font-size: 24px; color: ${NAVY}; }
.e8-score-tile span { font-size: 11px; font-weight: 700; color: #5A6B92; line-height: 1.3; }

.e8-traps { width: 100%; max-width: 600px; display: flex; flex-direction: column; gap: 10px; }
.e8-trap-row { display: grid; grid-template-columns: 74px 1fr; gap: 12px; align-items: start; background: #F8F9FC; border: 1px solid #E4E9F5; border-radius: 12px; padding: 12px 16px; font-size: 13.5px; font-weight: 600; line-height: 1.5; color: #4A5878; }
.e8-trap-row b { color: ${CORAL_DEEP}; font-weight: 800; }

.e8-takehome { display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; max-width: 560px; }
.e8-th-list { margin: 0; padding: 14px 20px 14px 38px; width: 100%; background: #FFF6E5; border: 1px dashed #F2A900; border-radius: 14px; font-size: 15.5px; font-weight: 700; line-height: 1.8; color: #6B5310; }

@media (max-width: 640px) {
  .e8-header { padding: 12px 50px 12px 16px; }
  .e8-body { padding: 16px 18px; }
  .e8-footer { padding: 10px 14px; }
  .e8-h1 { font-size: 26px; }
  .e8-score-tiles { grid-template-columns: repeat(2, 1fr); }
  .e8-plan-item { grid-template-columns: 64px 1fr 48px; }
}
`;
