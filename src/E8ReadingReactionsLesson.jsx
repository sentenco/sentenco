import React, { useContext, useState } from "react";
import { ScoreCtx, useStore, Marked, LETTERS, Choice, Strategy, E8Player } from "./e8Kit.jsx";

// Source: E8 (Polish eighth-grade exam), English, 13 May 2026 (CKE practice sheet from arkusze.pl).
// Answers below are our own key, worked out from the texts (the sheet has no official key).
// One item per slide, so the student only ever looks at one thing at a time.
// (The shared pieces now live in e8Kit.jsx; per-task lessons are being built one by one.)

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
  const [picked, setPicked] = useStore("m-" + q.id, null);
  const answered = picked !== null;
  const ok = picked === q.correct;
  function choose(id) {
    if (answered) return;
    setPicked(id);
    report("t9-" + q.id, id === q.correct);
  }
  return (
    <div className="e8-match1">
      <p className="e8-bigq"><span className="e8-qid">{q.id}</span>{q.q}</p>
      <div className="e8-texts">
        {T9_TEXTS.map((t) => {
          const cls = answered && t.id === q.correct ? "is-correct" : answered && t.id === picked ? "is-wrong" : "";
          return (
            <div key={t.id} className={`e8-textcard ${cls}`}>
              <div className="e8-textcard-head">
                <span className="e8-textcard-id">Text {t.id}</span>
                {!answered && <button type="button" className="e8-pick" onClick={() => choose(t.id)}>Choose</button>}
                {answered && t.id === q.correct && <span className="e8-tag is-ok">Answer</span>}
                {answered && t.id === picked && !ok && <span className="e8-tag is-bad">Your pick</span>}
              </div>
              <p><Marked text={t.text} evidence={q.evidence} on={answered && t.id === q.correct} /></p>
            </div>
          );
        })}
      </div>
      {answered && (
        <div className={`e8-why ${ok ? "is-ok" : "is-bad"}`}>
          <p><b>{ok ? "Correct." : `Not Text ${picked}.`} The answer is Text {q.correct}.</b> Evidence: <mark className="e8-mark">{q.evidence}</mark>. <span className="e8-trap"><b>The trap:</b> {q.trap}</span></p>
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
    <div className="e8-split">
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
      <div className="e8-side">
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
        <span className="e8-eyebrow">Sentenco · Custom Lesson</span>
        <h1 className="e8-h1">E8 Reading &amp; Reactions</h1>
        <p className="e8-cover-p">Real exam tasks, one trap at a time. Today you will not only find the right answer, you will see why the wrong ones look right.</p>
        <span className="e8-source">Source: E8 English exam, 13 May 2026 (CKE, Poland). Answer key by Sentenco.</span>
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
  return <E8Player slides={SLIDES} />;
}
