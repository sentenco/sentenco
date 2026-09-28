import React, { useContext } from "react";
import { ScoreCtx, Choice, Strategy, E8Player } from "./e8Kit.jsx";

// E8 Task 7: "short texts" (read a notice, advert, email, message or diary entry, then answer one multiple-choice question).
// 14 texts, one per slide, in four blocks by question type. Every text, question, option, the answer key and the "why"
// texts are written by Sentenco in the style of the task; none of them come from the exam paper.
// All in English, one item per slide, correct option not always in the same place.

// evidence = the sentence in the text that decides the answer (highlighted after the student answers).
const ITEMS = [
  // ---- Block A: what does the text say? (detail) ------------------------------------------------
  {
    block: "A",
    title: "PHOTO CLUB",
    text: "Do you love taking pictures? Join our photo club! We meet every Wednesday after lessons in Room 12. You don’t need an expensive camera, because a phone is fine. Every month we choose a theme, and the best pictures are shown in the school corridor. The first meeting is free. After that, you pay two pounds for materials.",
    evidence: "the best pictures are shown in the school corridor",
    prompt: "At the photo club, students…",
    options: [
      { text: "must buy a special camera.", why: "The text says the opposite: a phone is fine." },
      { text: "can show their pictures at school.", why: "The best pictures are shown in the school corridor." },
      { text: "meet before their lessons.", why: "They meet after lessons, not before." },
    ],
    correct: 1,
    trap: "Camera and lessons are both in the text, but used in a different way. Check the exact words: a phone is fine; after, not before.",
    note: "First text, so go slowly. Have her read the question first, then find the sentence about showing pictures. Then ask about the other two options: what does the text really say about cameras and lessons?",
  },
  {
    block: "A",
    title: "LAKESIDE POOL · SUMMER TIMES",
    text: "The pool is open from 7 a.m. to 9 p.m. on weekdays and from 9 a.m. to 6 p.m. at weekends. Children under ten must swim with an adult. Lockers cost one pound, but you get the coin back when you return the key. Please do not run near the water. Towels can be rented at the reception desk.",
    evidence: "you get the coin back when you return the key",
    prompt: "At the pool, you can…",
    options: [
      { text: "get your money back for a locker.", why: "The coin comes back when you return the key." },
      { text: "borrow a towel for free.", why: "Towels can be rented, so you have to pay." },
      { text: "swim alone at any age.", why: "Children under ten must swim with an adult." },
    ],
    correct: 0,
    trap: "Rented is not free. Small words like under and must change the meaning, so read them carefully.",
    note: "The wrong options each twist a real detail. Ask: does “rented” mean free? Who must swim with an adult?",
  },
  {
    block: "A",
    title: "From: Ella · To: Ben · Subject: Saturday",
    text: "Hi Ben,\nI’m sorry, but I can’t come to the match on Saturday. My grandma is visiting and my parents want me to stay at home. I really wanted to see the game, especially because Tom is playing! Could you send me a text when it’s over? I hope we win.\nElla",
    evidence: "My grandma is visiting and my parents want me to stay at home.",
    prompt: "Ella can’t go to the match because…",
    options: [
      { text: "she is ill.", why: "Nothing in the email says she is ill." },
      { text: "Tom asked her to stay.", why: "Tom is only mentioned because she wanted to watch him play." },
      { text: "she has to be with her family.", why: "Her grandma is visiting and her parents want her at home." },
    ],
    correct: 2,
    trap: "Tom is in the text, but as a reason to go, not to stay. Look for the reason right after “I can’t come”.",
    note: "Have her find the sentence that gives the reason. Then ask why Tom cannot be the answer.",
  },
  {
    block: "A",
    title: "Monday, 3rd March",
    text: "Today was the school trip to the science centre. We arrived at nine, but the first show was already full, so we saw the space exhibition first. It was much better than I expected, especially the room where you can feel what it is like to walk on the Moon! After lunch we finally saw the show about electricity. The bus back was late, so I got home after six.",
    evidence: "we saw the space exhibition first",
    prompt: "On the trip, the students…",
    options: [
      { text: "missed the show about electricity.", why: "They saw it after lunch." },
      { text: "visited the space exhibition before the electricity show.", why: "The first show was full, so they saw the space exhibition first." },
      { text: "were home before six o’clock.", why: "The bus was late and the writer got home after six." },
    ],
    correct: 1,
    trap: "Order words (first, after lunch, finally) tell you what came before what. Do not choose an option just because its words appear.",
    note: "Ask her to underline the order words: first, after lunch, finally. What came first?",
  },
  // ---- Block B: who wrote it, who is it for? ----------------------------------------------------
  {
    block: "B",
    title: "LOST",
    text: "A black backpack with a blue key ring, left on the number 14 bus on Friday afternoon. Inside there are a maths book, a pencil case and a water bottle. If you have found it, please bring it to the school office. There is a small reward.",
    evidence: "If you have found it, please bring it to the school office.",
    prompt: "The person who wrote this notice…",
    options: [
      { text: "wants to sell a backpack.", why: "Nobody is selling anything. The reward is for the person who returns it." },
      { text: "has found a backpack.", why: "The writer is looking for the backpack: “If you have found it…”." },
      { text: "has lost a backpack.", why: "The heading says LOST, and the writer asks people to bring it back." },
    ],
    correct: 2,
    trap: "Found is in the text, but it is what the reader might have done, not the writer.",
    note: "Ask: who is “you”? The finder. So who is the writer? The owner.",
  },
  {
    block: "B",
    title: "STUDENT DISCOUNT",
    text: "Are you between 13 and 18? Show your school card at the box office and get a ticket to any film for half the price. Not valid on Friday evenings. Popcorn is not included.",
    evidence: "get a ticket to any film for half the price",
    prompt: "This advert is for…",
    options: [
      { text: "students who want cheaper cinema tickets.", why: "It offers half-price film tickets to people aged 13 to 18 with a school card." },
      { text: "parents who need a babysitter.", why: "There is no mention of babysitting or parents." },
      { text: "people who want to work at a cinema.", why: "The box office is where you buy tickets. It is not a job offer." },
    ],
    correct: 0,
    trap: "Cinema words can make every option look possible. Ask who gets the offer and what they get.",
    note: "Ask her to find the person the advert speaks to (“Are you between 13 and 18?”) before she looks at the options.",
  },
  {
    block: "B",
    title: "Text message from Dad",
    text: "Hi love, my train is delayed, so I’ll be home at eight, not six. There’s pizza in the fridge, just put it in the oven for fifteen minutes. Don’t wait for me to eat! Please feed the cat too. See you later, Dad",
    evidence: "Don’t wait for me to eat!",
    prompt: "Dad wants his child to…",
    options: [
      { text: "meet him at the station.", why: "The train is only the reason he is late." },
      { text: "have dinner without him.", why: "“Don’t wait for me to eat!” means: eat first." },
      { text: "order a pizza.", why: "The pizza is already in the fridge." },
    ],
    correct: 1,
    trap: "Train and pizza are in the text, but they are not the request. Find what Dad asks the reader to do.",
    note: "There are two requests (eat, feed the cat). Only one is in the options. Ask her to find it.",
  },
  {
    block: "B",
    title: "SCHOOL WEBSITE · NEWS",
    text: "Year 8 parents, please return the signed permission form by Friday 12 May. Students without a form cannot join the trip to the castle. The cost is £15 and can be paid online. Students should bring a packed lunch.",
    evidence: "Year 8 parents, please return the signed permission form",
    prompt: "This announcement is for…",
    options: [
      { text: "parents of Year 8 students.", why: "It begins “Year 8 parents” and asks them to sign a form." },
      { text: "students who want to go to the castle alone.", why: "It is about a school trip, and parents must sign." },
      { text: "teachers who plan the trip.", why: "Teachers are not addressed. Parents are." },
    ],
    correct: 0,
    trap: "Students are mentioned, but the text speaks to parents. Look at the first words: who is being addressed?",
    note: "Ask: who does the first sentence speak to? Then who is only talked about?",
  },
  // ---- Block C: why was it written? (purpose) ---------------------------------------------------
  {
    block: "C",
    title: "From: Lily · To: Anna · Subject: Next Saturday",
    text: "Hi Anna,\nIt’s my birthday next Saturday and I’m having a party at the bowling alley at four o’clock. Nearly everyone from our class is coming. Can you let me know by Wednesday if you can come? I’d love to see you there!\nLily",
    evidence: "I’m having a party at the bowling alley at four o’clock",
    prompt: "Lily is writing…",
    options: [
      { text: "to ask what Anna wants for her birthday.", why: "It is Lily’s birthday, not Anna’s." },
      { text: "to invite Anna to an event.", why: "She gives the day, place and time of her party and asks Anna to come." },
      { text: "to tell Anna about a bowling competition.", why: "Bowling is only the place of the party." },
    ],
    correct: 1,
    trap: "The question “Can you let me know…?” is only part of the invitation. Ask what the whole email is for.",
    note: "Purpose questions: ask what Lily wants Anna to DO. Then check whose birthday it is.",
  },
  {
    block: "C",
    title: "To: Customer Service · Subject: Headphones",
    text: "Dear Sir or Madam,\nI bought a pair of headphones from your website on 2 June, but the left side stopped working after only four days. I have tried charging them and using a different phone, but nothing helps. I would like to return them and get my money back.\nYours faithfully,\nMartin Ross",
    evidence: "I would like to return them and get my money back.",
    prompt: "Martin is writing…",
    options: [
      { text: "to ask how to charge his headphones.", why: "He has already tried charging them." },
      { text: "to recommend the website to a friend.", why: "He is unhappy with the product. There is no recommendation." },
      { text: "to ask for a refund.", why: "He says it clearly: “I would like to return them and get my money back.”" },
    ],
    correct: 2,
    trap: "Charging and website are in the text, but they are details. The purpose is often in an “I would like…” sentence.",
    note: "Ask her to find the sentence that starts with “I would like”. That is nearly always the purpose in a formal email.",
  },
  {
    block: "C",
    title: "Note to parents",
    text: "Dear parents,\nNext week’s swimming lesson is cancelled because the pool is closed for repairs. Please do not send swimming bags on Thursday. The lesson will take place on 20 October instead, at the same time.\nThank you for your understanding.\nMs Green",
    evidence: "Next week’s swimming lesson is cancelled",
    prompt: "Ms Green is writing…",
    options: [
      { text: "to tell parents about a change.", why: "The lesson is cancelled and moved to a new date." },
      { text: "to ask parents to pay for repairs.", why: "Repairs are only the reason the pool is closed." },
      { text: "to invite parents to a swimming lesson.", why: "It is a lesson for the students. Parents are not invited." },
    ],
    correct: 0,
    trap: "Words like repairs and lesson appear in wrong options. Ask: what changed, and what should the reader do?",
    note: "Ask: what should the parents do on Thursday? That shows the note is about a change.",
  },
  // ---- Block D: what is it about? (gist) --------------------------------------------------------
  {
    block: "D",
    title: "Friday, 8th November",
    text: "I thought this week would be boring, but it wasn’t. On Monday our new neighbour, Jake, moved in, and by Wednesday we were playing football together in the park. Yesterday he taught me how to play chess. Now I’m looking forward to the weekend because he’s going to show me his favourite skate park!",
    evidence: "our new neighbour, Jake, moved in",
    prompt: "This diary entry is about…",
    options: [
      { text: "a football match at school.", why: "Football is only one thing they did together." },
      { text: "making a new friend.", why: "The whole entry follows Jake from moving in to the weekend plans." },
      { text: "learning to skate.", why: "The skate park is a plan for the weekend, not the main topic." },
    ],
    correct: 1,
    trap: "The main topic covers the whole text. Football, chess and skating are details; together they tell the story of a new friendship.",
    note: "Gist questions: ask her to say the whole text in one short sentence before she looks at the options.",
  },
  {
    block: "D",
    title: "TOMORROW’S WEATHER",
    text: "Tomorrow will start with heavy rain in the north, but by the afternoon the sun will come out across most of the country. The temperature will reach 18 degrees in the south, which is warm for March. On Sunday, expect wind and some clouds, so it’s a good idea to plan indoor activities.",
    evidence: "Tomorrow will start with heavy rain in the north",
    prompt: "This text is mostly about…",
    options: [
      { text: "a weather forecast.", why: "It describes rain, sun, temperature and wind for the next days." },
      { text: "a holiday in the south.", why: "The south is mentioned only for its temperature." },
      { text: "plans for Sunday.", why: "Sunday is one line at the end, advice based on the weather." },
    ],
    correct: 0,
    trap: "One sentence can hold a tempting word (south, Sunday, plan). Ask what the whole text does: it tells us about the weather.",
    note: "Quick item. The point is to look at the whole text, not the last sentence.",
  },
  {
    block: "D",
    title: "My summer",
    text: "Last summer I volunteered at an animal shelter for two weeks. At first I was scared of the big dogs, but soon I learned how to walk them and give them their food. The best moment was when a little dog called Buddy found a new family. I cried, but they were happy tears. Next year I want to do it again.",
    evidence: "I volunteered at an animal shelter for two weeks",
    prompt: "The writer is talking about…",
    options: [
      { text: "the day she got a pet.", why: "Buddy found a new family. He did not become her pet." },
      { text: "a job she wants to have.", why: "She volunteered for two weeks. A job is not mentioned." },
      { text: "an experience of helping animals.", why: "She describes two weeks at a shelter and how she felt about it." },
    ],
    correct: 2,
    trap: "Buddy and next year are details. Ask what the writer did, and how she feels about it.",
    note: "Last item. Ask her to say in one sentence what the whole text is, then find it in the options.",
  },
];

const BLOCKS = {
  A: { name: "What does it say?", time: "~6 min" },
  B: { name: "Who is it for?", time: "~6 min" },
  C: { name: "Why was it written?", time: "~4.5 min" },
  D: { name: "What is it about?", time: "~4.5 min" },
};

// ---- extra slide pieces -----------------------------------------------------------------------------------
function TypeCards() {
  const cards = [
    ["What does it say?", "A detail. Find the exact words. Watch small words like under, before, only, free."],
    ["Who is it for or from?", "Look at the first words and at “you”. Who is being spoken to, and who is speaking?"],
    ["Why was it written?", "The purpose. Look for I would like…, Can you…?, Please… What should the reader do?"],
    ["What is it about?", "The whole text, not one sentence. Say it in one short sentence first."],
  ];
  return (
    <div className="e7-wrap">
      <span className="e8-eyebrow">Exam strategy 2</span>
      <h2 className="e8-h2">Four kinds of question</h2>
      <div className="e7-cards">
        {cards.map(([k, v]) => (
          <div key={k} className="e7-card"><b>{k}</b><span>{v}</span></div>
        ))}
      </div>
    </div>
  );
}

function ScoreByBlock() {
  const { results } = useContext(ScoreCtx);
  const rows = ["A", "B", "C", "D"].map((b) => {
    const ids = ITEMS.map((it, i) => ({ it, id: `t7-${i + 1}` })).filter((x) => x.it.block === b).map((x) => x.id);
    const got = ids.filter((id) => results[id] === true).length;
    const tried = ids.filter((id) => id in results).length;
    return { b, got, tried, max: ids.length };
  });
  const total = rows.reduce((a, r) => a + r.got, 0);
  const max = rows.reduce((a, r) => a + r.max, 0);
  return (
    <div className="e8-score">
      <div className="e8-score-total"><span>{total}</span><small>out of {max}</small></div>
      <div className="e8-score-tiles" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {rows.map((r) => (
          <div key={r.b} className={`e8-score-tile ${r.tried === r.max && r.got === r.max ? "is-full" : ""}`}>
            <small>Block {r.b}</small>
            <b>{r.tried === 0 ? "–" : `${r.got}/${r.max}`}</b>
            <span>{BLOCKS[r.b].name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TRAPS = [
  ["Same words", "A wrong option often uses words from the text (camera, Tom, south). Match the meaning, not the word."],
  ["Small words", "Under, before, free, only, instead, not: one small word can make an option false."],
  ["Detail, not gist", "For “What is it about?”, one detail is not enough. Ask what the whole text is doing."],
  ["Wrong person", "Who is “you”? Who wrote it? Notices and messages often mix the writer and the reader."],
  ["Reason, not purpose", "A reason (repairs, a late train, Tom) is a detail. The purpose is what the writer wants the reader to know or do."],
];

function Traps() {
  return (
    <div className="e8-traps">
      <h2 className="e8-h2">Five traps in Task 7</h2>
      {TRAPS.map(([k, v]) => (
        <div key={k} className="e8-trap-row" style={{ gridTemplateColumns: "170px 1fr" }}><b>{k}</b><span>{v}</span></div>
      ))}
    </div>
  );
}

function TakeHome() {
  return (
    <div className="e8-takehome">
      <span className="e8-eyebrow">Take-home · make your own Task 7</span>
      <h2 className="e8-h2">Write one short text and a question</h2>
      <p className="e8-p">Write a text of about 40 words, then one question with three options: one correct, and two that use words from your text (use a trap from today).</p>
      <ul className="e8-th-list">
        <li>A notice for the school gym: a new club for students.</li>
        <li>An email inviting a friend to see a film.</li>
        <li>A diary entry about a day with a surprise.</li>
      </ul>
      <p className="e8-p">Next lesson, we will use them as a quiz.</p>
    </div>
  );
}

// ---- slides -----------------------------------------------------------------------------------------------
const SLIDES = [
  {
    stage: "E8 Task 7", time: null,
    note: "Alice is preparing for the E8, the Polish eighth-grade English exam. Task 7 is worth 4 points: four short texts (notice, advert, email, message or diary) and one question each. Today is 25 minutes on this one task type: 14 short texts, one at a time. Every text and the answer key are ours, written in the style of the task.",
    body: (
      <div className="e8-cover">
        <span className="e8-eyebrow">Sentenco · Custom Lesson · E8 Task 7</span>
        <h1 className="e8-h1">Short Texts</h1>
        <p className="e8-cover-p">Fourteen short texts: notices, adverts, emails, messages and diaries. Read the question first, then find the evidence.</p>
        <span className="e8-source">Format based on the E8 English exam, Task 7 (CKE, Poland). All texts and the answer key are by Sentenco.</span>
      </div>
    ),
  },
  {
    stage: "Today’s Plan", time: "~0.5 min",
    note: "Read the plan in half a minute. The rule of the whole lesson: know what kind of question it is BEFORE you read the text.",
    body: (
      <div className="e8-plan">
        <h2 className="e8-h2">Goal: know the question type first</h2>
        <p className="e8-p">In Task 7 the text is short and every wrong option uses words from it. Knowing the question type tells you what to look for.</p>
        <div className="e8-plan-list">
          {[
            ["Strategy", "Read the question first. Four question types", "2.5 min"],
            ["Block A", "What does it say?", "6 min"],
            ["Block B", "Who is it for?", "6 min"],
            ["Block C", "Why was it written?", "4.5 min"],
            ["Block D", "What is it about?", "4.5 min"],
            ["Wrap-up", "Score and five traps", "1.5 min"],
          ].map(([k, d, t]) => (
            <div key={k} className="e8-plan-item"><b>{k}</b><span>{d}</span><small>{t}</small></div>
          ))}
        </div>
      </div>
    ),
  },
  {
    stage: "Strategy · Question First", time: "~1 min",
    note: "Have Alice read the three steps aloud, then start straight away. After each answer, the highlighted sentence shows where the evidence was. Ask her to notice it every time.",
    body: (
      <Strategy
        n={1}
        title="Read the question first"
        steps={[
          "Read the question, not the options. Say what kind of question it is: detail, who, why or what about?",
          "Read the text and find the sentence that answers it. After you answer, the yellow highlight shows you where it was.",
          "Check every option against the exact words. A word can be in the text and the option can still be wrong.",
        ]}
      />
    ),
  },
  {
    stage: "Strategy · Four Question Types", time: "~1.5 min",
    note: "Read the four cards aloud together. She does not need to memorise them; each block of the lesson practises one card. Ask her which type she thinks is hardest.",
    body: <TypeCards />,
  },
  ...ITEMS.flatMap((it, idx) => {
    const n = idx + 1;
    const out = [];
    if (n === 8) {
      out.push({
        stage: "Halfway · Check", time: "~0.5 min",
        note: "Half a minute. Ask her which check she forgets most, then keep going. Seven texts done, seven to go.",
        body: (
          <div className="e8-strategy">
            <span className="e8-eyebrow">Halfway</span>
            <h2 className="e8-h2">Three checks for every text</h2>
            <ol className="e8-steps">
              <li><span className="e8-step-n">1</span><span><b>Question type.</b> Detail, who, why or what about?</span></li>
              <li><span className="e8-step-n">2</span><span><b>Evidence.</b> Can I point to the sentence that answers it?</span></li>
              <li><span className="e8-step-n">3</span><span><b>Small words.</b> Does my option say exactly what the text says, including not, only, before?</span></li>
            </ol>
          </div>
        ),
      });
    }
    out.push({
      stage: `Block ${it.block} · Text ${n} of 14`, time: "~1.5 min",
      note: it.note,
      body: (
        <Choice
          id={`t7-${n}`}
          passageTitle={it.title}
          passage={it.text}
          evidence={it.evidence}
          prompt={it.prompt}
          options={it.options}
          correct={it.correct}
          trap={it.trap}
        />
      ),
    });
    return out;
  }),
  {
    stage: "Your Score", time: "~0.5 min",
    note: "Read the total, then only talk about the block where she lost points. Which question type was it?",
    body: <ScoreByBlock />,
  },
  {
    stage: "Five Traps", time: "~0.5 min",
    note: "Read them one by one. Ask her which one caught her today.",
    body: <Traps />,
  },
  {
    stage: "Take-Home", time: null,
    note: "Homework: she writes her own Task 7 text and question. Next lesson, use two or three of hers as the warm-up quiz.",
    body: <TakeHome />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: s.time, note: s.note }));

const extraStyles = `
.e7-wrap { display: flex; flex-direction: column; align-items: center; gap: 6px; width: 100%; max-width: 860px; }
.e7-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; margin-top: 6px; }
.e7-card { display: flex; flex-direction: column; gap: 4px; background: rgba(255,255,255,0.88); border: 1px solid #EBDFD0; border-radius: 14px; padding: 12px 18px; }
.e7-card b { font-weight: 800; font-size: 14px; letter-spacing: 0.04em; text-transform: uppercase; color: #E0502F; }
.e7-card span { font-size: 15px; font-weight: 700; line-height: 1.5; color: #1B2A4A; }
`;

export default function E8Task7Lesson() {
  return <E8Player slides={SLIDES} extraStyles={extraStyles} />;
}
