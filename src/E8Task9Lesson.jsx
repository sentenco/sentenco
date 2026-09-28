import React, { useContext } from "react";
import { ScoreCtx, useStore, Marked, Strategy, E8Player } from "./e8Kit.jsx";

// E8 Task 9: "matching" (three short texts, four questions; choose the text that answers each question, one text is
// used twice). Four sets of three texts, four questions each, one question per slide with all three texts on screen.
// Every text, question, the answer key and the "why" texts are written by Sentenco in the style of the task; none of
// them come from the exam paper.

// ans = the letter of the text that answers the question; evidence sits inside that text.
const SETS = [
  {
    name: "Weekend activities",
    texts: [
      { id: "A", text: "Join our sunset kayak trip on Lake Miren this Saturday! No experience is needed, because a guide will teach you the basics in the first half hour. The trip lasts three hours and costs £25, including the kayak and a life jacket. You must be at least fourteen years old. Bring warm clothes and a bottle of water, and meet us at the boat house at 6 p.m." },
      { id: "B", text: "Do you enjoy cooking? Our Friday Cooking Club is looking for new members! Every week you learn to make a different dish, and at the end everyone eats together. The club is free, but you have to bring your own apron. It meets in the school kitchen from 4 to 6 p.m. For details, email Mrs Adams." },
      { id: "C", text: "Can you escape in 60 minutes? Try our new escape room, The Lost Treasure, which opened last week in the town centre. Teams of four to six players work together to solve puzzles indoors. Tickets are £12 per person, and it is open every day from 10 a.m. to 10 p.m. Book online, because places fill up quickly." },
    ],
    qs: [
      { q: "Which activity is free?", ans: "B", evidence: "The club is free", trap: "Text A includes the kayak and life jacket in the price, but it still costs £25. Text C has a price too (£12).", note: "First set, so go slowly. Ask her to underline the key word in the question (free) and then scan all three texts for money words." },
      { q: "Which activity has a minimum age?", ans: "A", evidence: "at least fourteen years old", trap: "Text B says “new members” and text C says “teams”, but neither gives an age.", note: "Key idea: age. Ask her to look for numbers, then check what each number is about." },
      { q: "Which activity has only just started?", ans: "C", evidence: "opened last week", trap: "Text B is “looking for new members”, but the club already exists. Only text C is new.", note: "The words “only just started” are not in the text. Ask which text has a word that means the same (opened last week)." },
      { q: "Which activity lasts about three hours?", ans: "A", evidence: "The trip lasts three hours", trap: "Text B lasts two hours (4 to 6 p.m.) and text C lasts one hour. Text A is also the answer to question 2: in this task one text is always used twice.", note: "Text A appears twice in this set. Point out that this is normal in the exam: one text answers two questions." },
    ],
  },
  {
    name: "Places to visit",
    texts: [
      { id: "A", text: "Discover the secrets of the universe at our interactive Space Centre! Try on a real astronaut’s helmet, walk through a model of a space station and watch a 3D film about Mars. The centre is open Tuesday to Sunday and is closed on Mondays. Students pay half price if they show a school card. Allow at least two hours for your visit." },
      { id: "B", text: "Have you ever heard a lion roar in the dark? Join our night walk on the last Friday of every month. A ranger takes small groups around the zoo after closing time, and you can see animals that sleep during the day. Tickets must be booked in advance, and children under ten must come with an adult. Wear comfortable shoes." },
      { id: "C", text: "Every Sunday morning, the square in front of the church turns into a food market. Local farmers sell fresh fruit, cheese and bread, and there are stalls with dishes from all around the world. Entrance is free, and many stalls let you taste before you buy. The market is outdoors, so check the weather before you go. Come early: the best stalls sell out by noon." },
    ],
    qs: [
      { q: "Where can you go in without paying?", ans: "C", evidence: "Entrance is free", trap: "Text A gives a discount, not free entry. Text B needs a ticket.", note: "Ask her: is a discount the same as free? Which text says nothing costs anything to enter?" },
      { q: "Which place offers a lower price for students?", ans: "A", evidence: "Students pay half price if they show a school card", trap: "Text C is free for everybody, which is not a student discount.", note: "“Lower price” is the question’s way of saying “half price”. Find the text that says it with different words." },
      { q: "Which visit takes place after dark?", ans: "B", evidence: "night walk", trap: "Text A is a daytime visit with opening days, and text C is on Sunday morning.", note: "The text never says “after dark”, but it says night walk and “after closing time”. Ask her to find both." },
      { q: "Which place do you have to book before you go?", ans: "B", evidence: "Tickets must be booked in advance", trap: "Text A only says how long to allow, and text C says to come early, not to book. Text B is also the answer to question 3.", note: "Text B is used twice in this set. Ask her to notice that the same text can answer two very different questions." },
    ],
  },
  {
    name: "School clubs",
    texts: [
      { id: "A", text: "Love technology? Come and build your own robot! We meet on Tuesdays after school in Room 5. Beginners are welcome, and all materials are provided. Next month, our best team will take part in a national competition in the capital, so we are looking for students who enjoy solving problems." },
      { id: "B", text: "Would you like to act on stage? This term, the Drama Club is preparing a play called The Missing Diamond. We need actors, but we also need students who can help with costumes and lights. Rehearsals are on Thursdays and Fridays. The play will be shown to parents on 14 December, and tickets are sold at the school office." },
      { id: "C", text: "Run with us every morning before school! We meet at 7.30 a.m. at the school gate and run for thirty minutes in the park. You don’t need special shoes, but you should wear a jacket when it’s cold. It’s a friendly group, and nobody is left behind. Once a term, we organise a fun run for the whole school." },
    ],
    qs: [
      { q: "Which club may take its members to a competition?", ans: "A", evidence: "take part in a national competition", trap: "Text C has a fun run, but it is for the school, not a competition against other teams.", note: "Ask her which text talks about going somewhere else to compete. A fun run at school is a different idea." },
      { q: "Which club needs helpers behind the scenes?", ans: "B", evidence: "help with costumes and lights", trap: "Text A looks for problem-solvers, not helpers for a show.", note: "“Behind the scenes” is the question’s idea. Ask what jobs in a play are not acting." },
      { q: "Which club meets before lessons?", ans: "C", evidence: "every morning before school", trap: "Text A meets after school, and text B gives days but no time. Only text C is before school.", note: "Ask her to find the times in each text. Only one is in the morning." },
      { q: "Which club will perform for parents?", ans: "B", evidence: "shown to parents on 14 December", trap: "Text C invites the whole school to a fun run, but nobody performs. Text B is also the answer to question 2.", note: "Text B is used twice again. Ask her which words in the question (perform, parents) match the text." },
    ],
  },
  {
    name: "Holiday helpers",
    texts: [
      { id: "A", text: "Do you love dogs? Our small pet care service needs two students to walk dogs after school and at weekends. You will be paid £5 for every walk, and you can choose your own hours. You must live near Park Road and be at least fifteen. If you are interested, send us a short message about yourself." },
      { id: "B", text: "Help us clean our beautiful beach! On the first Saturday of June, volunteers of all ages will meet at 9 a.m. on the north beach. We provide gloves and bags, and there will be free sandwiches and juice for everyone at noon. There is no need to register, just come. Please wear old clothes that can get dirty." },
      { id: "C", text: "Do you enjoy working with children? Sunny Days Camp is looking for teenage helpers for two weeks in July. You will help organise games, arts and crafts and swimming lessons. The job is unpaid, but you will get a certificate and a reference letter for future employers. Helpers must attend a short training day in June. Apply online before 20 May." },
    ],
    qs: [
      { q: "Which activity pays you?", ans: "A", evidence: "You will be paid £5 for every walk", trap: "Text B has free food, and text C says the job is unpaid.", note: "Last set. Let her work faster: read the question, scan for money words, decide." },
      { q: "Which activity gives you a document that can help you find work later?", ans: "C", evidence: "a certificate and a reference letter", trap: "Text A has a minimum age and text B is for volunteers, but neither gives you a document.", note: "The text says “certificate” and “reference letter”. The question says “document”. Ask her what a document could be." },
      { q: "Which activity doesn’t need any registration?", ans: "B", evidence: "There is no need to register", trap: "Text A wants a message about yourself and text C asks you to apply online.", note: "Ask: which texts ask you to send something first? The one that does not is the answer." },
      { q: "Which activity has a training day before it starts?", ans: "C", evidence: "Helpers must attend a short training day in June", trap: "No other text mentions training. Text C is also the answer to question 2.", note: "Text C is used twice. Last question of the lesson: ask her how many times she has now seen a text used twice." },
    ],
  },
];

// ---- one question per slide -------------------------------------------------------------------------------
function MatchSlide({ set, si, qi }) {
  const { report } = useContext(ScoreCtx);
  const q = set.qs[qi];
  const id = `t9-${si + 1}-${qi + 1}`;
  const [picked, setPicked] = useStore("m-" + id, null);
  const answered = picked !== null;
  const ok = picked === q.ans;
  function choose(tid) {
    if (answered) return;
    setPicked(tid);
    report(id, tid === q.ans);
  }
  return (
    <div className="e8-match1">
      <p className="e8-bigq"><span className="e8-qid">9.{qi + 1}</span>{q.q}</p>
      <div className="e8-texts">
        {set.texts.map((t) => {
          const cls = answered && t.id === q.ans ? "is-correct" : answered && t.id === picked ? "is-wrong" : "";
          return (
            <div key={t.id} className={`e8-textcard ${cls}`}>
              <div className="e8-textcard-head">
                <span className="e8-textcard-id">Text {t.id}</span>
                {!answered && <button type="button" className="e8-pick" onClick={() => choose(t.id)}>Choose</button>}
                {answered && t.id === q.ans && <span className="e8-tag is-ok">Answer</span>}
                {answered && t.id === picked && !ok && <span className="e8-tag is-bad">Your pick</span>}
              </div>
              <p><Marked text={t.text} evidence={q.evidence} on={answered && t.id === q.ans} /></p>
            </div>
          );
        })}
      </div>
      {answered && (
        <div className={`e8-why ${ok ? "is-ok" : "is-bad"}`}>
          <p><b>{ok ? "Correct." : `Not Text ${picked}.`} The answer is Text {q.ans}.</b> Evidence: <mark className="e8-mark">{q.evidence}</mark>. <span className="e8-trap"><b>The trap:</b> {q.trap}</span></p>
        </div>
      )}
    </div>
  );
}

// ---- extra slide pieces -----------------------------------------------------------------------------------
function SameIdeaCards() {
  const cards = [
    ["free", "Entrance is free · no need to pay"],
    ["a lower price for students", "Students pay half price"],
    ["only after dark", "night walk · after closing time"],
    ["has to be booked", "Tickets must be booked in advance"],
  ];
  return (
    <div className="e9-wrap">
      <span className="e8-eyebrow">Exam strategy 2</span>
      <h2 className="e8-h2">Same idea, different words</h2>
      <p className="e8-p">The question almost never uses the words of the text. Look for the same idea.</p>
      <div className="e9-pairs">
        {cards.map(([q, t]) => (
          <div key={q} className="e9-pair"><span className="e9-q">{q}</span><span className="e9-arrow">→</span><span className="e9-t">{t}</span></div>
        ))}
      </div>
    </div>
  );
}

function ScoreBySet() {
  const { results } = useContext(ScoreCtx);
  const rows = SETS.map((s, si) => {
    const ids = [1, 2, 3, 4].map((q) => `t9-${si + 1}-${q}`);
    const got = ids.filter((id) => results[id] === true).length;
    const tried = ids.filter((id) => id in results).length;
    return { name: s.name, n: si + 1, got, tried, max: 4 };
  });
  const total = rows.reduce((a, r) => a + r.got, 0);
  const max = rows.reduce((a, r) => a + r.max, 0);
  return (
    <div className="e8-score">
      <div className="e8-score-total"><span>{total}</span><small>out of {max}</small></div>
      <div className="e8-score-tiles" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {rows.map((r) => (
          <div key={r.n} className={`e8-score-tile ${r.tried === r.max && r.got === r.max ? "is-full" : ""}`}>
            <small>Set {r.n}</small>
            <b>{r.tried === 0 ? "–" : `${r.got}/${r.max}`}</b>
            <span>{r.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TRAPS = [
  ["Same word, other meaning", "Money can be a price, a prize, a payment or free food. Check what the money is for before you choose."],
  ["Almost right", "A text can match one part of the question (age) but not the whole (age and price). Check every part."],
  ["Looking for the same words", "The question and the text use different words for the same idea (half price = lower price). Look for the idea."],
  ["Forgetting the reuse", "One text always answers two questions. If no text fits, look again at the ones you have already used."],
  ["Reading too fast", "Not, only, must, every, after: one small word can turn a right text into a wrong one."],
];

function Traps() {
  return (
    <div className="e8-traps">
      <h2 className="e8-h2">Five traps in Task 9</h2>
      {TRAPS.map(([k, v]) => (
        <div key={k} className="e8-trap-row" style={{ gridTemplateColumns: "190px 1fr" }}><b>{k}</b><span>{v}</span></div>
      ))}
    </div>
  );
}

function TakeHome() {
  return (
    <div className="e8-takehome">
      <span className="e8-eyebrow">Take-home · make your own Task 9</span>
      <h2 className="e8-h2">Three texts, four questions</h2>
      <p className="e8-p">Write three short texts (about 40 words each) about three places or events in your town. Then write four questions. One text must answer two of them.</p>
      <ul className="e8-th-list">
        <li>Three places to eat, three shops, or three sports clubs.</li>
        <li>Use different words in the questions from the words in the texts.</li>
        <li>Write the answers on the back, with the sentence that proves each one.</li>
      </ul>
      <p className="e8-p">Next lesson, we will solve them as a quiz.</p>
    </div>
  );
}

// ---- slides -----------------------------------------------------------------------------------------------
const questionSlides = SETS.flatMap((set, si) =>
  set.qs.map((q, qi) => ({
    stage: `Set ${si + 1} · ${set.name} · Question ${qi + 1} of 4`,
    time: qi === 0 ? "~2 min" : "~1 min",
    note: q.note,
    body: <MatchSlide set={set} si={si} qi={qi} />,
    _first: si === 2 && qi === 0,
  }))
);

const SLIDES = [
  {
    stage: "E8 Task 9", time: null,
    note: "Alice is preparing for the E8, the Polish eighth-grade English exam. Task 9 is worth 4 points: three short texts and four questions, and each question matches one text. One text is used twice. Today is 25 minutes on this one task type: four sets of three texts, one question at a time. Every text and the answer key are ours, written in the style of the task.",
    body: (
      <div className="e8-cover">
        <span className="e8-eyebrow">Sentenco · Custom Lesson · E8 Task 9</span>
        <h1 className="e8-h1">Match the Text</h1>
        <p className="e8-cover-p">Four sets of three short texts. For each question, choose the text that answers it, and see how the wrong ones trick you.</p>
        <span className="e8-source">Format based on the E8 English exam, Task 9 (CKE, Poland). All texts and the answer key are by Sentenco.</span>
      </div>
    ),
  },
  {
    stage: "Today’s Plan", time: "~0.5 min",
    note: "Read the plan in half a minute. The rule of the whole lesson: find the key idea in the question first, then look for the same idea in the texts.",
    body: (
      <div className="e8-plan">
        <h2 className="e8-h2">Goal: match ideas, not words</h2>
        <p className="e8-p">The question and the text almost never use the same words. Find the key idea, then find where each text says it.</p>
        <div className="e8-plan-list">
          {[
            ["Strategy", "Key idea first. Same idea, different words", "2.5 min"],
            ["Set 1", "Weekend activities", "5 min"],
            ["Set 2", "Places to visit", "5 min"],
            ["Set 3", "School clubs", "5 min"],
            ["Set 4", "Holiday helpers", "5 min"],
            ["Wrap-up", "Score and five traps", "2 min"],
          ].map(([k, d, t]) => (
            <div key={k} className="e8-plan-item"><b>{k}</b><span>{d}</span><small>{t}</small></div>
          ))}
        </div>
      </div>
    ),
  },
  {
    stage: "Strategy · Key Idea First", time: "~1 min",
    note: "Have Alice read the three steps aloud, then start. Repeat “key idea first” whenever she starts reading all three texts before the question.",
    body: (
      <Strategy
        n={1}
        title="Find the key idea first"
        steps={[
          "Read the question and underline the key idea: free, minimum age, before school, needs booking…",
          "Scan each text for that idea. Do not read every word again; look for numbers, days and small words like only, must, every.",
          "If two texts seem to fit, check the rest of the question. Remember: one text answers two questions.",
        ]}
      />
    ),
  },
  {
    stage: "Strategy · Same Idea", time: "~1.5 min",
    note: "Read the four pairs aloud. Ask her to make one more pair of her own, for example “cheaper than usual” = discount.",
    body: <SameIdeaCards />,
  },
  ...questionSlides.flatMap((s) => {
    const { _first, ...slide } = s;
    if (!_first) return [slide];
    return [
      {
        stage: "Halfway · Check", time: "~0.5 min",
        note: "Half a minute. Ask her which trap has caught her so far. Eight questions done, eight to go.",
        body: (
          <div className="e8-strategy">
            <span className="e8-eyebrow">Halfway</span>
            <h2 className="e8-h2">Three checks for every question</h2>
            <ol className="e8-steps">
              <li><span className="e8-step-n">1</span><span><b>Key idea.</b> Did I underline it in the question?</span></li>
              <li><span className="e8-step-n">2</span><span><b>Whole question.</b> Does the text match every part, not only one?</span></li>
              <li><span className="e8-step-n">3</span><span><b>Reuse.</b> If nothing fits, have I looked at the texts I already used?</span></li>
            </ol>
          </div>
        ),
      },
      slide,
    ];
  }),
  {
    stage: "Your Score", time: "~0.5 min",
    note: "Read the total, then only talk about the set where she lost points. Which trap was it?",
    body: <ScoreBySet />,
  },
  {
    stage: "Five Traps", time: "~1 min",
    note: "Read them one by one. Ask her which one caught her today.",
    body: <Traps />,
  },
  {
    stage: "Take-Home", time: null,
    note: "Homework: she writes her own set of three texts and four questions. Next lesson, use it as the warm-up quiz.",
    body: <TakeHome />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: s.time, note: s.note }));

const extraStyles = `
.e9-wrap { display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; max-width: 780px; }
.e9-pairs { display: flex; flex-direction: column; gap: 9px; width: 100%; margin-top: 4px; }
.e9-pair { display: grid; grid-template-columns: 1fr 34px 1.2fr; align-items: center; gap: 8px; background: rgba(255,255,255,0.88); border: 1px solid #EBDFD0; border-radius: 14px; padding: 11px 20px; }
.e9-q { font-weight: 800; font-size: 16px; color: #E0502F; text-align: right; }
.e9-arrow { text-align: center; font-weight: 800; color: #9AA6C4; }
.e9-t { font-family: 'Fraunces', serif; font-weight: 600; font-size: 17px; color: #1B2A4A; }
`;

export default function E8Task9Lesson() {
  return <E8Player slides={SLIDES} extraStyles={extraStyles} />;
}
