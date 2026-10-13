import React, { useContext } from "react";
import { ScoreCtx, Choice, Strategy, E8Player } from "./e8Kit.jsx";

// Unseen Reading, Module 8: read a short text the student has never seen, then answer questions about it.
// Two original texts (an article and a diary), four questions each, one question per slide with the text beside it.
// Everything here is written by Sentenco. Level: A2 to low B1.

const TEXTS = {
  A: {
    title: "The Library Van",
    text:
      "Every Tuesday and Friday, a small blue van stops in the main square of Little Brook, a village with no library. The van carries more than 2,000 books, and anyone can borrow up to four at a time.\n\nThe driver, Mrs Hall, used to be a teacher. “Many children here don’t have books at home,” she says. “So I bring the books to them.” Last year the van also started a story hour for little children at 4 p.m. At first only five children came, but now there are often thirty.\n\nThe village council wants to buy a second van, because people in the next village are asking for one too. But a new van costs a lot of money.",
  },
  B: {
    title: "Climbing Diary",
    text:
      "Monday. I was scared today. My brother Leo takes me to the climbing wall after school, and I had never climbed before. The wall was much higher than I expected! The instructor, Sara, gave me special shoes and showed me how to hold the rope. I only got halfway up before my arms hurt, so I came down and had a hot chocolate. Leo laughed, but he told me that his first time was worse.\n\nFriday. I climbed every day this week, and today I reached the top! I felt so proud that I took a photo. Next Saturday, Leo and I will try a harder wall.",
  },
};

const ITEMS = [
  {
    text: "A", kind: "Detail",
    evidence: "anyone can borrow up to four at a time",
    prompt: "How many books can a person borrow at one time?",
    options: [
      { text: "Two books.", why: "The number two is not in the text." },
      { text: "Four books.", why: "Up to four at a time." },
      { text: "Thirty books.", why: "Thirty is the number of children at the story hour." },
    ],
    correct: 1,
    trap: "Thirty is in the text, but it counts children, not books. Check what each number is about.",
    note: "First question: have her find the sentence with “borrow” before she looks at the options. Ask what thirty counts.",
  },
  {
    text: "A", kind: "Detail",
    evidence: "a story hour for little children at 4 p.m.",
    prompt: "The story hour is for…",
    options: [
      { text: "teachers.", why: "Mrs Hall used to be a teacher, but the story hour is not for teachers." },
      { text: "the whole village.", why: "It is for little children, not everyone." },
      { text: "little children.", why: "A story hour for little children at 4 p.m." },
    ],
    correct: 2,
    trap: "Teacher is in the text in a different place. A word can appear in the text and still be wrong for this question.",
    note: "Ask her: who is Mrs Hall? Why is “teachers” tempting? Then find the exact sentence about the story hour.",
  },
  {
    text: "A", kind: "Reason",
    evidence: "Many children here don’t have books at home",
    prompt: "Why does Mrs Hall bring the books to the village?",
    options: [
      { text: "She wants to sell them.", why: "Nothing in the text says the books are sold. People borrow them." },
      { text: "Many children have no books at home.", why: "She says: many children here don’t have books at home." },
      { text: "The council told her to.", why: "The council is only mentioned later, about a second van." },
    ],
    correct: 1,
    trap: "A reason is usually after “because” or in what a person says. Look at Mrs Hall’s own words.",
    note: "Reason questions: look for the speaker’s own explanation. Have her read Mrs Hall’s sentence aloud.",
  },
  {
    text: "A", kind: "Reason",
    evidence: "people in the next village are asking for one too",
    prompt: "Why does the council want a second van?",
    options: [
      { text: "The first van is broken.", why: "The text does not say the van is broken." },
      { text: "People in another village want one.", why: "People in the next village are asking for one too." },
      { text: "Mrs Hall wants to stop driving.", why: "Nothing says Mrs Hall wants to stop." },
    ],
    correct: 1,
    trap: "Two options sound sensible but are not in the text. Only choose what the text really says.",
    note: "Ask her: where does the text say why? Then check that the other two are only ideas, not facts from the text.",
  },
  {
    text: "B", kind: "Detail",
    evidence: "I only got halfway up before my arms hurt, so I came down and had a hot chocolate.",
    prompt: "What did the writer do after climbing halfway on Monday?",
    options: [
      { text: "She had a drink.", why: "She came down and had a hot chocolate." },
      { text: "She reached the top.", why: "She reached the top on Friday, not on Monday." },
      { text: "She went home at once.", why: "The text does not say she went home." },
    ],
    correct: 0,
    trap: "Watch the day. Reaching the top happened on Friday. Monday and Friday are two different diary entries.",
    note: "Ask which day each action happened. Monday and Friday are the two entries.",
  },
  {
    text: "B", kind: "Word in context",
    evidence: "I felt so proud that I took a photo.",
    prompt: "In the diary, “proud” means…",
    options: [
      { text: "tired after exercise.", why: "Tired is not what proud means. The writer is pleased about the climb." },
      { text: "happy about something you did.", why: "She reached the top and took a photo to remember it." },
      { text: "afraid of falling.", why: "She was scared on Monday, but proud on Friday." },
    ],
    correct: 1,
    trap: "Use the sentence around the word. She reached the top, then took a photo. That is a happy feeling about something she did.",
    note: "Word-in-context: do not translate. Ask what happened just before “proud” and how she would feel.",
  },
  {
    text: "B", kind: "Feeling",
    evidence: "Leo laughed, but he told me that his first time was worse.",
    prompt: "How did Leo behave after the writer’s first climb?",
    options: [
      { text: "He was angry with her.", why: "He laughed and told her his first time was worse. That is not angry." },
      { text: "He wanted to stop going.", why: "The text does not say that. They go again every day." },
      { text: "He was kind and understood.", why: "He said his first time was worse, so she would feel better." },
    ],
    correct: 2,
    trap: "Leo laughed, but the next words (“but he told me…”) show he was being kind. Read to the end of the sentence.",
    note: "Ask what “but” does in the sentence. The second half changes the feeling of the first half.",
  },
  {
    text: "B", kind: "Future",
    evidence: "Next Saturday, Leo and I will try a harder wall.",
    prompt: "What will the writer do next Saturday?",
    options: [
      { text: "Take a photo at the top.", why: "She took the photo on Friday." },
      { text: "Buy new climbing shoes.", why: "Shoes are in the text only because Sara gave them to her." },
      { text: "Try a harder wall.", why: "Next Saturday, Leo and I will try a harder wall." },
    ],
    correct: 2,
    trap: "Look for the future word: “next Saturday” and “will”. Then match the plan, not the past.",
    note: "Have her underline “next” and “will”. Then ask which options are past events.",
  },
];

function Score() {
  const { results } = useContext(ScoreCtx);
  const ids = ITEMS.map((_, i) => `um8-${i + 1}`);
  const got = ids.filter((id) => results[id] === true).length;
  const part = (t) => {
    const mine = ITEMS.map((it, i) => ({ it, id: `um8-${i + 1}` })).filter((x) => x.it.text === t);
    return { got: mine.filter((x) => results[x.id] === true).length, tried: mine.filter((x) => x.id in results).length, max: mine.length };
  };
  const a = part("A"), b = part("B");
  return (
    <div className="e8-score">
      <div className="e8-score-total"><span>{got}</span><small>out of {ITEMS.length}</small></div>
      <div className="e8-score-tiles" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        <div className={`e8-score-tile ${a.tried === a.max && a.got === a.max ? "is-full" : ""}`}><small>Text 1</small><b>{a.tried === 0 ? "–" : `${a.got}/${a.max}`}</b><span>{TEXTS.A.title}</span></div>
        <div className={`e8-score-tile ${b.tried === b.max && b.got === b.max ? "is-full" : ""}`}><small>Text 2</small><b>{b.tried === 0 ? "–" : `${b.got}/${b.max}`}</b><span>{TEXTS.B.title}</span></div>
      </div>
    </div>
  );
}

function TakeHome() {
  return (
    <div className="e8-takehome">
      <span className="e8-eyebrow">Take-home · write your own questions</span>
      <h2 className="e8-h2">Read, then ask three questions</h2>
      <p className="e8-p">Find a short text of about 80 words (a message, a notice or a news story). Write three questions: one about a detail, one about a reason, and one about a word.</p>
      <ul className="e8-th-list">
        <li>Give each question three options: one correct, and two that use words from the text.</li>
        <li>Underline the sentence that shows the answer.</li>
      </ul>
      <p className="e8-p">Next lesson, your questions become the warm-up quiz.</p>
    </div>
  );
}

const SLIDES = [
  {
    stage: "Unseen Reading", time: null,
    note: "A short reading lesson on texts the student has never seen. Two texts, four questions each. Keep it relaxed: the aim is a habit, not a score.",
    body: (
      <div className="e8-cover">
        <span className="e8-eyebrow">Sentenco · Custom Lesson · Module 8</span>
        <h1 className="e8-h1">Unseen Reading</h1>
        <p className="e8-cover-p">Two new texts, eight questions. Read the question first, find the sentence that answers it, then check every option.</p>
        <span className="e8-source">All texts, questions and answers are written by Sentenco.</span>
      </div>
    ),
  },
  {
    stage: "Today’s Plan", time: "~0.5 min",
    note: "Read the plan in half a minute. The habit for the lesson: question first, then evidence.",
    body: (
      <div className="e8-plan">
        <h2 className="e8-h2">Goal: answer from the text, not from guessing</h2>
        <p className="e8-p">With a text you have never seen, the answer is always in the words. Your job is to find them.</p>
        <div className="e8-plan-list">
          {[
            ["Strategy", "Question first, then evidence", "1.5 min"],
            ["Text 1", "The Library Van (article)", "8 min"],
            ["Text 2", "Climbing Diary (diary)", "8 min"],
            ["Wrap-up", "Score and take-home", "2 min"],
          ].map(([k, d, t]) => (
            <div key={k} className="e8-plan-item"><b>{k}</b><span>{d}</span><small>{t}</small></div>
          ))}
        </div>
      </div>
    ),
  },
  {
    stage: "Strategy · Question First", time: "~1.5 min",
    note: "Have her read the three steps aloud, then start. After each answer the highlighted sentence shows where the evidence was.",
    body: (
      <Strategy
        n={1}
        title="Read the question first"
        steps={[
          "Read the question before the text. Say what it asks about: a detail, a reason, a word, a feeling, or the future?",
          "Read the text and find the sentence that answers it. After you answer, the yellow highlight shows where it was.",
          "Check every option against the exact words. A word can be in the text and the option can still be wrong.",
        ]}
      />
    ),
  },
  ...ITEMS.map((it, idx) => {
    const n = idx + 1;
    const t = TEXTS[it.text];
    return {
      stage: `${it.text === "A" ? "Text 1" : "Text 2"} · ${it.kind} · ${n} of ${ITEMS.length}`, time: "~2 min",
      note: it.note,
      body: (
        <Choice
          id={`um8-${n}`}
          passageTitle={t.title}
          passage={t.text}
          evidence={it.evidence}
          prompt={it.prompt}
          options={it.options}
          correct={it.correct}
          trap={it.trap}
        />
      ),
    };
  }),
  {
    stage: "Your Score", time: "~0.5 min",
    note: "Read the total. If one text went worse, ask which question type caught her out.",
    body: <Score />,
  },
  {
    stage: "Take-Home", time: null,
    note: "Homework: she writes three questions about a short text. Use two of hers as next lesson's warm-up.",
    body: <TakeHome />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: s.time, note: s.note }));

export default function UnseenReadingLesson() {
  return <E8Player slides={SLIDES} extraStyles="" />;
}
