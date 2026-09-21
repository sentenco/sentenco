import React, { useContext } from "react";
import { ScoreCtx, Choice, Strategy, E8Player } from "./e8Kit.jsx";

// E8 Task 5: "reactions to situations" (choose the reply that fits the situation).
// 20 items, one per slide: 4 are the real E8 items (5.1 to 5.4, 13 May 2026, CKE Poland) with the Polish situations
// translated into English, and 16 are written by Sentenco in the same style. The answer key and the "why" texts are ours.
// Written all in English, one item per slide, correct option not always in the same place.

// exam: true marks the four real exam items.
const ITEMS = [
  // ---- Block A: asking and offering ------------------------------------------------------------
  {
    exam: "5.1", block: "A",
    situation: "You need help making a tomato salad. How do you ask for help?",
    options: [
      { text: "Do you need any help with the tomatoes?", why: "This offers help. You need help, so you are the one who asks." },
      { text: "Shall we have a tomato salad for lunch?", why: "This suggests a meal. It uses the same words (tomato, salad) but never asks for help." },
      { text: "Could you cut up the tomatoes?", why: "“Could you…?” is a polite request, and it asks for exactly the help you need." },
    ],
    correct: 2,
    trap: "A and B copy words from the situation (help, tomatoes, salad). Choose by what you want to DO, not by matching words.",
    note: "First item, so go slowly. Ask: are you asking for help or offering it? Then which option is a request? Have her say the job (ask for help) before she taps.",
  },
  {
    block: "A",
    situation: "You are in a shop. You want to know the price of a jacket. What do you say?",
    options: [
      { text: "Would you like to buy this jacket?", why: "This is what the shop assistant says to you. You are the customer." },
      { text: "How much is this jacket?", why: "“How much…?” asks for a price, which is exactly what you want to know." },
      { text: "How many jackets do you have?", why: "Same shop, same jackets, but this asks about numbers, not the price." },
    ],
    correct: 1,
    trap: "A and C keep the shop words. Ask who is speaking and what you want to know.",
    note: "Job: ask for information (price). If she picks A, ask: who says “Would you like to buy…?”",
  },
  {
    block: "A",
    situation: "Your friend is carrying a very heavy bag. You want to offer to help. What do you say?",
    options: [
      { text: "Could you carry my bag, please?", why: "This asks your friend to help YOU. The directions are reversed." },
      { text: "Where did you buy that bag?", why: "Same word (bag), but it asks a different question and offers nothing." },
      { text: "Shall I carry your bag for you?", why: "“Shall I…?” offers to do something for the other person." },
    ],
    correct: 2,
    trap: "Offer = you do the job (Shall I…? Would you like me to…?). Request = you ask them to do it (Could you…?).",
    note: "Job: offer help. This is the mirror of item 1. Ask her to say who does the carrying in each option.",
  },
  {
    block: "A",
    situation: "You are lost in a town. You want to find the post office. How do you ask a passer-by?",
    options: [
      { text: "Excuse me, how do I get to the post office?", why: "This asks for directions, the job you need to do." },
      { text: "Excuse me, do you work at the post office?", why: "This asks about the person’s job, not about the way." },
      { text: "Excuse me, I need to send a letter.", why: "It gives your reason but does not ask anything, so nobody has to answer." },
    ],
    correct: 0,
    trap: "Match the question to what you want to know (the way), not to the place name.",
    note: "Job: ask for directions. Ask: which option is a question about the way?",
  },
  {
    block: "A",
    situation: "You want to ask your teacher if you may leave the room for a moment. What do you say?",
    options: [
      { text: "Shall I leave the room for you?", why: "This offers to do something for the teacher. It is not a request for permission." },
      { text: "May I leave the room for a moment?", why: "“May I…?” is the polite way to ask for permission." },
      { text: "Do you want to leave the room?", why: "This asks about the teacher’s wishes, not about yours." },
    ],
    correct: 1,
    trap: "Permission questions start with May I…? / Can I…? / Is it all right if I…? The subject is “I”.",
    note: "Job: ask for permission. Quick check: who wants to leave the room?",
  },
  // ---- Block B: reacting ------------------------------------------------------------------------
  {
    exam: "5.2", block: "B",
    situation: "A friend asks how you liked the school trip. What do you answer?",
    options: [
      { text: "It was better than I expected.", why: "It answers the question about the trip (past) and says you liked it." },
      { text: "Let’s have some fun.", why: "This is a suggestion about the future. The trip is over." },
      { text: "I’ll be fine, thanks.", why: "This answers “How are you?”, not “How did you like the trip?”" },
    ],
    correct: 0,
    trap: "The question is about the PAST and about your opinion. B looks to the future and C answers a different question.",
    note: "The first reaction in Block B: someone asks you something. Ask her to say the question again in her own words before she chooses.",
  },
  {
    block: "B",
    situation: "A friend tells you: “I passed my driving test!” What do you say?",
    options: [
      { text: "Oh no, what a pity!", why: "A real phrase, but for bad news. Passing a test is good news." },
      { text: "How much does a car cost?", why: "It uses the same topic (driving) but reacts to nothing." },
      { text: "Congratulations! Well done!", why: "This is the phrase for good news." },
    ],
    correct: 2,
    trap: "Check first: is the news good or bad? Good news → Congratulations. Bad news → I’m sorry to hear that.",
    note: "Job: react to good news. Ask: is this good news or bad news?",
  },
  {
    block: "B",
    situation: "A friend tells you: “I’ve hurt my ankle and I can’t play in the match.” What do you say?",
    options: [
      { text: "Good luck in the match!", why: "The match is the same topic, but your friend cannot play, so this does not fit." },
      { text: "Oh dear, I’m sorry to hear that.", why: "This shows sympathy for bad news." },
      { text: "Who is playing tomorrow?", why: "It changes the subject and does not react to your friend’s problem." },
    ],
    correct: 1,
    trap: "A tempting option repeats a word from the news (match). Ask what feeling the news deserves.",
    note: "Job: show sympathy. This is the mirror of the previous item.",
  },
  {
    block: "B",
    situation: "Someone says: “Thank you so much for your help.” How do you reply?",
    options: [
      { text: "You’re welcome.", why: "This is the normal answer to thanks." },
      { text: "I’m afraid I can’t help.", why: "This refuses help. But you have already helped." },
      { text: "Thanks, the same to you.", why: "This answers a wish (Happy birthday! Have a nice day!), not thanks." },
    ],
    correct: 0,
    trap: "C is real English, but it belongs to a different situation (wishes). Right words, wrong moment.",
    note: "Job: answer thanks. If she picks C, ask: when do we say “the same to you”?",
  },
  {
    block: "B",
    situation: "You did not hear what your teacher said. How do you ask them to say it again?",
    options: [
      { text: "Sorry, I’ll repeat that for you.", why: "This offers to repeat something, but you did not hear it." },
      { text: "Sorry, I understand, thank you.", why: "This says you understood. You did not." },
      { text: "Sorry, could you repeat that, please?", why: "This is the polite request to say it again." },
    ],
    correct: 2,
    trap: "Two options start with the same “Sorry,” and sound polite. Look at what they actually say.",
    note: "Job: ask someone to repeat. Have her say the request aloud after she has chosen.",
  },
  // ---- Block C: suggesting, disagreeing, refusing ------------------------------------------------
  {
    exam: "5.3", block: "C",
    situation: "You want to sit down on a bus, but you are not sure the seat is free. How do you ask?",
    options: [
      { text: "Should I keep this seat for you?", why: "This offers to keep the seat for someone. You want to sit in it." },
      { text: "Can you look for a free seat?", why: "This asks someone else to search. You only need one answer about this seat." },
      { text: "Is this seat taken?", why: "This is the standard question to check that a seat is free." },
    ],
    correct: 2,
    trap: "A and B use seat and sound polite, but neither asks what you need to know: is it free?",
    note: "Block C starts with a real exam item. Ask: what exactly do you need to find out?",
  },
  {
    block: "C",
    situation: "You want to suggest going to the cinema with a friend this evening. What do you say?",
    options: [
      { text: "Did you go to the cinema yesterday evening?", why: "This asks about the past. You want to suggest a plan for tonight." },
      { text: "Why don’t we go to the cinema this evening?", why: "“Why don’t we…?” is a friendly suggestion." },
      { text: "The cinema is open until ten o’clock.", why: "This gives information. It does not suggest anything." },
    ],
    correct: 1,
    trap: "Same words (cinema, evening), different jobs. A asks about the past, C only gives a fact.",
    note: "Job: suggest. Other suggestion phrases to say together: Let’s… / How about…-ing?",
  },
  {
    block: "C",
    situation: "A friend says: “Football is the best sport in the world!” You do not agree, but you want to be polite. What do you say?",
    options: [
      { text: "Yes, I completely agree with you.", why: "This agrees. You disagree." },
      { text: "Football matches are on Saturdays.", why: "This adds a fact about football and does not give your opinion." },
      { text: "I see what you mean, but I prefer tennis.", why: "This softens the disagreement (I see what you mean, but…) and gives your own view." },
    ],
    correct: 2,
    trap: "Polite disagreement has two parts: acknowledge (I see what you mean) + your own view (but I prefer…).",
    note: "Job: disagree politely. Ask: which option says something different from your friend?",
  },
  {
    block: "C",
    situation: "Your friend offers you another piece of cake, but you are full. How do you refuse politely?",
    options: [
      { text: "No, thank you. I’m full.", why: "This says no politely and gives the reason." },
      { text: "Yes, please. It looks delicious.", why: "This accepts the cake. You want to refuse." },
      { text: "Could I have the recipe, please?", why: "It stays on the topic (cake) but neither accepts nor refuses." },
    ],
    correct: 0,
    trap: "When the task says refuse, one option sounds friendly but says yes. Check yes or no first.",
    note: "Job: refuse an offer politely. Ask her: yes or no?",
  },
  {
    exam: "5.4", block: "C",
    situation: "A friend wants to borrow a textbook that you need. How do you refuse?",
    options: [
      { text: "I’ll borrow it from you tomorrow.", why: "This reverses the roles: you would be the one borrowing." },
      { text: "I’m afraid I’m using it right now.", why: "“I’m afraid…” is a polite way to say no, and gives the reason." },
      { text: "I don’t mind giving it to you.", why: "This says yes. The situation says you need the book, so you refuse." },
    ],
    correct: 1,
    trap: "The task says refuse. One option sounds friendly but agrees. “I’m afraid…” is the exam’s favourite refusal.",
    note: "Last exam item. The same job as the cake, but with a request instead of an offer. Ask her what is different.",
  },
  // ---- Block D: real-life situations ----------------------------------------------------------------
  {
    block: "D",
    situation: "You are late for a meeting. What do you say to apologise?",
    options: [
      { text: "I’m very sorry I’m late.", why: "This is a clear apology." },
      { text: "I’m afraid you are late.", why: "This blames the other person. “I’m afraid…” is used for bad news, not for apologising." },
      { text: "Nice to see you again.", why: "A greeting, but no apology." },
    ],
    correct: 0,
    trap: "“I’m afraid…” appears again here, but this time it blames someone else. Look at who is late.",
    note: "Job: apologise. Speed round from here: about 45 seconds each.",
  },
  {
    block: "D",
    situation: "In a restaurant, your soup is cold. What do you say to the waiter?",
    options: [
      { text: "This soup is delicious, thank you.", why: "It is not: the soup is cold. This says the opposite." },
      { text: "Could I have the bill, please?", why: "It stays in the restaurant, but it does not deal with the cold soup." },
      { text: "Excuse me, my soup is cold. Could you heat it up, please?", why: "It states the problem politely and asks for a solution." },
    ],
    correct: 2,
    trap: "A polite complaint = say the problem + ask for a fix. The other options only share the restaurant setting.",
    note: "Job: complain politely. Ask: what is the problem, and what do you want?",
  },
  {
    block: "D",
    situation: "You call your friend Tom, but his mother answers the phone. What do you say?",
    options: [
      { text: "Hello, this is Tom speaking.", why: "You are not Tom. This is what Tom says." },
      { text: "Hello, Tom isn’t at home.", why: "This gives information that you do not have." },
      { text: "Hello, could I speak to Tom, please?", why: "This is the polite way to ask for someone on the phone." },
    ],
    correct: 2,
    trap: "On the phone, ask who is speaking. “This is Tom speaking” is Tom’s line, not yours.",
    note: "Job: ask for someone on the phone. Ask: who is Tom, and who are you?",
  },
  {
    block: "D",
    situation: "Your friend is about to cross the road, but a car is coming fast. What do you shout?",
    options: [
      { text: "Have a nice trip!", why: "This is a wish for someone going on a journey, not a warning." },
      { text: "Look out! There’s a car coming!", why: "This is a warning, and it says what the danger is." },
      { text: "Is this the right road, please?", why: "This asks for directions. There is no time for that." },
    ],
    correct: 1,
    trap: "In an emergency, use a short warning (Look out! Watch out! Stop!). Long polite questions do not fit.",
    note: "Job: warn someone. Ask her how she would say it in one second.",
  },
  {
    block: "D",
    situation: "You cannot find a pen in your bag. You want to ask your classmate if you can borrow one. What do you say?",
    options: [
      { text: "Could I borrow a pen, please?", why: "You are the one who borrows, so the subject is “I”." },
      { text: "Can I lend you a pen?", why: "This offers a pen to your classmate. You need one." },
      { text: "Do you like this pen?", why: "Same object, but it asks for an opinion, not for the pen." },
    ],
    correct: 0,
    trap: "Borrow = you take it. Lend = you give it. This is the mirror of item 15.",
    note: "Last item. Ask her which two earlier items look like this one (5.4 and the offer to carry the bag).",
  },
];

const BLOCKS = {
  A: { name: "Asking and offering", time: "~5 min" },
  B: { name: "Reacting", time: "~5 min" },
  C: { name: "Suggesting and refusing", time: "~5 min" },
  D: { name: "Real-life situations", time: "~5 min" },
};

// ---- extra slide pieces ---------------------------------------------------------------------------------
function PhraseBank({ title, cards }) {
  return (
    <div className="e5-bank-wrap">
      <span className="e8-eyebrow">Phrase bank</span>
      <h2 className="e8-h2">{title}</h2>
      <div className="e5-bank">
        {cards.map((c) => (
          <div key={c.job} className="e5-card">
            <b>{c.job}</b>
            <ul>{c.phrases.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreByBlock() {
  const { results } = useContext(ScoreCtx);
  const rows = ["A", "B", "C", "D"].map((b) => {
    const ids = ITEMS.map((it, i) => ({ it, id: `t5-${i + 1}` })).filter((x) => x.it.block === b).map((x) => x.id);
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
  ["Same words", "A wrong option often repeats words from the situation (tomatoes, jacket, seat). Choose by what you want to DO."],
  ["Wrong direction", "Ask or offer? Borrow or lend? Look at who does the job in each option."],
  ["Wrong feeling", "Good news: Congratulations! Bad news: I’m sorry to hear that. Check the news first."],
  ["Yes for no", "When you must refuse, one option sounds friendly but agrees. Check yes or no first."],
  ["Right words, wrong moment", "Some phrases are real English but belong to another situation (Thanks, the same to you)."],
];

function Traps() {
  return (
    <div className="e8-traps">
      <h2 className="e8-h2">Five traps in Task 5</h2>
      {TRAPS.map(([k, v]) => (
        <div key={k} className="e8-trap-row" style={{ gridTemplateColumns: "150px 1fr" }}><b>{k}</b><span>{v}</span></div>
      ))}
    </div>
  );
}

function TakeHome() {
  return (
    <div className="e8-takehome">
      <span className="e8-eyebrow">Take-home · make your own Task 5</span>
      <h2 className="e8-h2">Write the three answers</h2>
      <p className="e8-p">For each situation, write three reactions in your notebook: one correct, and two that look almost right (use a trap from today).</p>
      <ul className="e8-th-list">
        <li>You want to invite a friend to your birthday party.</li>
        <li>You want to ask a neighbour to turn the music down.</li>
        <li>A shop assistant says the T-shirt you like is sold out. You want to ask about another colour.</li>
      </ul>
      <p className="e8-p">Next lesson, we will use them as a quiz.</p>
    </div>
  );
}

// ---- slides -----------------------------------------------------------------------------------------------
const SLIDES = [
  {
    stage: "E8 Task 5", time: null,
    note: "Alice is preparing for the E8, the Polish eighth-grade English exam. Task 5 is worth 4 points. Today is 25 minutes on this one task type: 20 situations, one at a time. Items 1, 6, 11 and 15 are real exam items (5.1 to 5.4); the other sixteen are written in the same style.",
    body: (
      <div className="e8-cover">
        <span className="e8-eyebrow">Sentenco · Custom Lesson · E8 Task 5</span>
        <h1 className="e8-h1">Reactions to Situations</h1>
        <p className="e8-cover-p">Twenty situations. For each one, choose the reply that does the right job. You will also see why the wrong ones look right.</p>
        <span className="e8-source">Items 1, 6, 11 and 15 are from the E8 English exam, 13 May 2026 (CKE, Poland). The other 16 and the answer key are by Sentenco.</span>
      </div>
    ),
  },
  {
    stage: "Today’s Plan", time: "~0.5 min",
    note: "Read the plan in half a minute. The rule of the whole lesson: choose by the JOB of the sentence, not by the words.",
    body: (
      <div className="e8-plan">
        <h2 className="e8-h2">Goal: name the job first</h2>
        <p className="e8-p">In Task 5 every wrong answer uses words from the situation. Only one answer does the right job.</p>
        <div className="e8-plan-list">
          {[
            ["Strategy", "Name the job. Two phrase banks", "3 min"],
            ["Block A", "Asking and offering", "5 min"],
            ["Block B", "Reacting", "5 min"],
            ["Block C", "Suggesting and refusing", "5 min"],
            ["Block D", "Real-life situations", "5 min"],
            ["Wrap-up", "Score and five traps", "2 min"],
          ].map(([k, d, t]) => (
            <div key={k} className="e8-plan-item"><b>{k}</b><span>{d}</span><small>{t}</small></div>
          ))}
        </div>
      </div>
    ),
  },
  {
    stage: "Strategy · Name the Job", time: "~1 min",
    note: "Have Alice read the three steps aloud, then start straight away. Do not explain more. Use the word “job” all lesson: ask, offer, refuse, thank…",
    body: (
      <Strategy
        n={1}
        title="Name the job first"
        steps={[
          "Read the situation and say what you want to DO: ask, offer, refuse, thank, apologise, suggest…",
          "Cross out any option that does a different job, even if it uses the same words as the situation.",
          "Check who is speaking, and yes or no: do you ask or offer? Do you accept or refuse?",
        ]}
      />
    ),
  },
  {
    stage: "Phrase Bank 1", time: "~1 min",
    note: "Read the cards aloud together. Do not memorise them; she will see the same phrases in the options. Ask her to point to the phrase for offering.",
    body: (
      <PhraseBank
        title="Asking and offering"
        cards={[
          { job: "Ask for help", phrases: ["Could you…?", "Can you…, please?"] },
          { job: "Offer help", phrases: ["Shall I…?", "Would you like me to…?"] },
          { job: "Ask for permission", phrases: ["May I…?", "Can I…?", "Is it all right if I…?"] },
          { job: "Ask for information", phrases: ["How much is…?", "How do I get to…?", "Is this seat taken?"] },
        ]}
      />
    ),
  },
  {
    stage: "Phrase Bank 2", time: "~1 min",
    note: "Same routine. The last card matters: “I’m afraid…” is the exam’s favourite polite refusal.",
    body: (
      <PhraseBank
        title="Reacting and refusing"
        cards={[
          { job: "Good news", phrases: ["Congratulations!", "Well done!"] },
          { job: "Bad news", phrases: ["Oh dear, I’m sorry to hear that."] },
          { job: "Suggest", phrases: ["Why don’t we…?", "Let’s…", "How about…?"] },
          { job: "Refuse politely", phrases: ["I’m afraid…", "No, thank you. I’m full."] },
        ]}
      />
    ),
  },
  ...ITEMS.flatMap((it, idx) => {
    const n = idx + 1;
    const out = [];
    if (n === 11) {
      out.push({
        stage: "Halfway · Trap Check", time: "~0.5 min",
        note: "Half a minute. Ask her which trap has caught her so far, then keep going. She has seen ten situations; ten to go.",
        body: (
          <div className="e8-strategy">
            <span className="e8-eyebrow">Halfway</span>
            <h2 className="e8-h2">Three traps so far</h2>
            <ol className="e8-steps">
              <li><span className="e8-step-n">1</span><span><b>Same words.</b> The wrong option repeats a word from the situation.</span></li>
              <li><span className="e8-step-n">2</span><span><b>Wrong direction.</b> Ask or offer? Borrow or lend?</span></li>
              <li><span className="e8-step-n">3</span><span><b>Wrong feeling.</b> Good news and bad news need different phrases.</span></li>
            </ol>
          </div>
        ),
      });
    }
    out.push({
      stage: `Block ${it.block} · Reaction ${n} of 20${it.exam ? ` · exam ${it.exam}` : ""}`, time: n >= 16 ? "~45 sec" : "~1 min",
      note: it.note,
      body: <Choice id={`t5-${n}`} situation={it.situation} options={it.options} correct={it.correct} trap={it.trap} />,
    });
    return out;
  }),
  {
    stage: "Your Score", time: "~0.5 min",
    note: "Read the total, then only talk about the block where she lost points. Which trap was it?",
    body: <ScoreByBlock />,
  },
  {
    stage: "Five Traps", time: "~0.5 min",
    note: "Read them one by one. Ask her which one caught her today.",
    body: <Traps />,
  },
  {
    stage: "Take-Home", time: null,
    note: "Homework: she writes her own Task 5 items. Next lesson, use two or three of hers as the warm-up quiz.",
    body: <TakeHome />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: s.time, note: s.note }));

const extraStyles = `
.e5-bank-wrap { display: flex; flex-direction: column; align-items: center; gap: 6px; width: 100%; max-width: 820px; }
.e5-bank { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; margin-top: 4px; }
.e5-card { background: rgba(255,255,255,0.88); border: 1px solid #EBDFD0; border-radius: 14px; padding: 11px 18px; }
.e5-card b { display: block; font-weight: 800; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: #E0502F; margin-bottom: 4px; }
.e5-card ul { margin: 0; padding-left: 18px; }
.e5-card li { font-size: 16px; font-weight: 700; line-height: 1.55; color: #1B2A4A; }
`;

export default function E8Task5Lesson() {
  return <E8Player slides={SLIDES} extraStyles={extraStyles} />;
}
