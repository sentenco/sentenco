import React, { useEffect, useState } from "react";

const NAVY = "#1B2A4A";
const CORAL = "#FF6B4A";
const CORAL_DEEP = "#E0502F";
const GOLD = "#B8860B";
const GOLD_LIGHT = "#F5EBD3";

const RULE_GROUPS = [
  {
    key: "beadj", label: "Be + Adjective", formula: "Subject + am / is / are + adjective",
    accent: NAVY, accentLight: "#E4E9F5",
    examples: [
      { text: "I am hungry." },
      { text: "She is smart." },
      { text: "The weather is cold." },
      { text: "We are ready." },
    ],
    practice: [
      { blank: "I ___ tired.", answer: "am" },
      { blank: "The movie ___ boring.", answer: "is" },
      { blank: "They ___ excited.", answer: "are" },
      { blank: "My phone ___ old.", answer: "is" },
    ],
  },
  {
    key: "being", label: "Be + V-ing", formula: "Subject + am / is / are + verb-ing",
    accent: CORAL, accentLight: "#FFE6DD",
    examples: [
      { text: "I am eating breakfast." },
      { text: "She is reading a book." },
      { text: "We are watching a movie." },
      { text: "They are playing soccer." },
    ],
    practice: [
      { blank: "He ___ dinner. (cook)", answer: "is cooking" },
      { blank: "I ___ English. (study)", answer: "am studying" },
      { blank: "The kids ___ now. (sleep)", answer: "are sleeping" },
      { blank: "You ___ a letter. (write)", answer: "are writing" },
    ],
  },
  {
    key: "will", label: "Will + V1", formula: "Subject + will + base verb",
    accent: GOLD, accentLight: GOLD_LIGHT,
    examples: [
      { text: "I will call you tomorrow." },
      { text: "She will visit her grandmother." },
      { text: "We will finish soon." },
      { text: "They will arrive at noon." },
    ],
    practice: [
      { blank: "I ___ you later. (help)", answer: "will help" },
      { blank: "She ___ a new job. (start)", answer: "will start" },
      { blank: "We ___ next year. (travel)", answer: "will travel" },
      { blank: "He ___ the food. (bring)", answer: "will bring" },
    ],
  },
];

const QUIZ_ITEMS = [
  { q: "I ___ very happy today.", options: ["am", "is", "are", "will"], correct: 0 },
  { q: "The soup ___ too hot to eat.", options: ["am", "is", "are", "will"], correct: 1 },
  { q: "My parents ___ proud of me.", options: ["am", "is", "are", "be"], correct: 2 },
  { q: "She ___ a letter right now.", options: ["write", "writes", "is writing", "will write"], correct: 2 },
  { q: "We ___ dinner at the moment.", options: ["cook", "are cooking", "will cook", "cooks"], correct: 1 },
  { q: "I ___ my homework right now.", options: ["am doing", "do", "will do", "does"], correct: 0 },
  { q: "He ___ the report tomorrow.", options: ["finish", "finishes", "is finishing", "will finish"], correct: 3 },
  { q: "They ___ us next weekend.", options: ["will visit", "visits", "are visiting", "visit"], correct: 0 },
  { q: "I promise I ___ you later.", options: ["call", "will call", "am calling", "calls"], correct: 1 },
  { q: "Which sentence uses will + v1 correctly?", options: ["She will goes home.", "She will go home.", "She will going home.", "She is will go home."], correct: 1 },
];

function QuizItem({ item, index }) {
  const [picked, setPicked] = useState(null);
  const answered = picked !== null;
  return (
    <div className="gbw-quiz-item">
      <p className="gbw-quiz-q">{index + 1}. {item.q}</p>
      <div className="gbw-quiz-options">
        {item.options.map((opt, idx) => {
          const isCorrect = idx === item.correct;
          const isPicked = idx === picked;
          const cls = answered && isCorrect ? "is-correct" : answered && isPicked ? "is-wrong" : "";
          return (
            <button
              key={opt}
              type="button"
              className={`gbw-quiz-opt ${cls}`}
              onClick={() => setPicked(idx)}
              disabled={answered}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RuleBox({ group }) {
  return (
    <div className="gbw-rulebox" style={{ borderColor: group.accentLight }}>
      <span className="gbw-formula" style={{ background: group.accentLight, color: group.accent }}>{group.formula}</span>
      <div className="gbw-example-grid">
        {group.examples.map((ex) => (
          <div key={ex.text} className="gbw-example-card">{ex.text}</div>
        ))}
      </div>
    </div>
  );
}

function BlankCard({ item, accent }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="gbw-blank-card" onClick={() => setRevealed((r) => !r)}>
      <p className="gbw-blank-sentence">{item.blank}</p>
      {revealed ? (
        <span className="gbw-blank-answer" style={{ background: accent }}>{item.answer}</span>
      ) : (
        <span className="gbw-blank-hint">Tap to reveal</span>
      )}
    </div>
  );
}

export default function BeWillGrammarLesson() {
  const [i, setI] = useState(0);
  const total = SLIDES.length;
  const s = SLIDES[i];

  useEffect(() => {
    const styleId = "gbw-styles";
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

  return (
    <div className="gbw-wrap">
      <div className="gbw-single">
        <div className="gbw-slide">
          <button className="gbw-close" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <div className="gbw-header">
            <div className="gbw-brand">
              <img className="gbw-brand-logo" src="/logo-sentivo.png" alt="" />
              <span>entivo</span>
            </div>
            <div className="gbw-stage-chip">
              <span className="gbw-stage-name">{s.stage}</span>
              {s.time && <span className="gbw-stage-time">{s.time}</span>}
            </div>
          </div>
          <div className="gbw-body">{s.body}</div>
          <div className="gbw-footer">
            <button className={`gbw-nav ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="gbw-progress">
              {Array.from({ length: total }).map((_, idx) => (
                <span key={idx} className={`gbw-dot ${idx === i ? "on" : ""}`} />
              ))}
            </div>
            <button className="gbw-nav next" onClick={() => (i === total - 1 ? exit() : go(1))}>
              {i === total - 1 ? "Finish Lesson" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const LESSON_GUIDE = [
  { stage: "Customized Lesson", time: null, note: null },
  { stage: "Warm-up", time: "~2 min", note: "Ask the student to describe how they feel or what they're doing right now, in whatever English they can manage. This sets up all three patterns without naming them yet." },
  { stage: "Be + Adjective", time: "~3 min", note: "Point out that am/is/are changes with the subject, but the adjective never does. Read each example aloud." },
  { stage: "Practice: Be + Adjective", time: "~2 min", note: "Student says the full sentence out loud before tapping to check." },
  { stage: "Be + V-ing", time: "~3 min", note: "This describes an action happening right now. Point out the -ing ending never changes, only am/is/are does." },
  { stage: "Practice: Be + V-ing", time: "~2 min", note: "The base verb is given in parentheses, student must add -ing and the correct be-verb." },
  { stage: "Will + V1", time: "~3 min", note: "Emphasize that will never changes for any subject, and the verb after it stays in its base (dictionary) form, no -s, no -ing." },
  { stage: "Practice: Will + V1", time: "~2 min", note: "Same drill: base verb given in parentheses, student adds will + that same base verb." },
  { stage: "Now You Try", time: "~3 min", note: "Free production mixing all three patterns. Keep corrections light, the goal is confident use of each pattern, not perfect grammar." },
  { stage: "Quiz: Be-verbs & Will", time: "~5 min", note: "10 multiple-choice questions mixing all three patterns (be + adjective, be + v-ing, will + v1), ending with one error-spotting question. Let the student answer independently; each button locks and shows right/wrong immediately, so you don't need to grade it yourself." },
  { stage: "Wrap-Up", time: null, note: null },
];

const SLIDES = [
  {
    stage: "Customized Lesson", time: null,
    body: (
      <div className="gbw-cover">
        <span className="gbw-eyebrow">Sentivo &middot; Customized Lesson</span>
        <h1 className="gbw-h1">Be-verbs &amp; Will</h1>
        <p className="gbw-cover-p">Three simple patterns: describing with be + adjective, acting now with be + v-ing, and the future with will + v1.</p>
      </div>
    ),
  },
  {
    stage: "Warm-up", time: "~2 min",
    body: (
      <div className="gbw-center">
        <h2 className="gbw-h2">Let's Warm Up</h2>
        <p className="gbw-p">How do you feel right now? What are you doing today?</p>
      </div>
    ),
  },
  {
    stage: "Be + Adjective", time: "~3 min",
    body: (
      <>
        <h2 className="gbw-h2">Be + Adjective</h2>
        <p className="gbw-p-sm">Use this to describe how someone or something is.</p>
        <RuleBox group={RULE_GROUPS[0]} />
      </>
    ),
  },
  {
    stage: "Practice: Be + Adjective", time: "~2 min",
    body: (
      <>
        <h2 className="gbw-h2">Complete the Sentence</h2>
        <p className="gbw-p-sm">Say the sentence out loud, then tap the card to check.</p>
        <div className="gbw-blank-grid">
          {RULE_GROUPS[0].practice.map((item) => <BlankCard key={item.blank} item={item} accent={RULE_GROUPS[0].accent} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Be + V-ing", time: "~3 min",
    body: (
      <>
        <h2 className="gbw-h2">Be + V-ing</h2>
        <p className="gbw-p-sm">Use this for an action happening right now.</p>
        <RuleBox group={RULE_GROUPS[1]} />
      </>
    ),
  },
  {
    stage: "Practice: Be + V-ing", time: "~2 min",
    body: (
      <>
        <h2 className="gbw-h2">Complete the Sentence</h2>
        <p className="gbw-p-sm">Say the sentence out loud, then tap the card to check.</p>
        <div className="gbw-blank-grid">
          {RULE_GROUPS[1].practice.map((item) => <BlankCard key={item.blank} item={item} accent={RULE_GROUPS[1].accent} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Will + V1", time: "~3 min",
    body: (
      <>
        <h2 className="gbw-h2">Will + V1</h2>
        <p className="gbw-p-sm">Use this to talk about the future.</p>
        <RuleBox group={RULE_GROUPS[2]} />
      </>
    ),
  },
  {
    stage: "Practice: Will + V1", time: "~2 min",
    body: (
      <>
        <h2 className="gbw-h2">Complete the Sentence</h2>
        <p className="gbw-p-sm">Say the sentence out loud, then tap the card to check.</p>
        <div className="gbw-blank-grid">
          {RULE_GROUPS[2].practice.map((item) => <BlankCard key={item.blank} item={item} accent={RULE_GROUPS[2].accent} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Now You Try", time: "~3 min",
    body: (
      <div className="gbw-center">
        <h2 className="gbw-h2">Your Turn</h2>
        <ul className="gbw-qlist">
          <li>Describe how you feel right now. Use "I am ___."</li>
          <li>Say what you are doing right now. Use "I am ___-ing."</li>
          <li>Say one thing you will do tomorrow. Use "I will ___."</li>
        </ul>
      </div>
    ),
  },
  {
    stage: "Quiz: Be-verbs & Will", time: "~5 min",
    body: (
      <>
        <h2 className="gbw-h2">Quick Quiz</h2>
        <p className="gbw-p-sm">All three patterns together. Pick the best answer for each.</p>
        <div className="gbw-quiz-list">
          {QUIZ_ITEMS.map((item, idx) => <QuizItem key={item.q} item={item} index={idx} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Wrap-Up", time: null,
    body: (
      <div className="gbw-cover">
        <h2 className="gbw-h1" style={{ fontSize: 34 }}>Great Job!</h2>
        <p className="gbw-cover-p">Today you practiced be + adjective, be + v-ing, and will + v1. Try using all three the next time you speak English.</p>
      </div>
    ),
  },
];

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Quicksand:wght@500;600;700&display=swap');

.gbw-wrap { min-height: 100vh; width: 100%; background: #EEF1F6; color: #1B2A4A; font-family: 'Quicksand', sans-serif; padding: 16px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; }
.gbw-wrap * { box-sizing: border-box; }
.gbw-single { flex-shrink: 0; }

.gbw-slide {
  position: relative; width: min(740px, calc(100vw - 32px)); height: min(580px, calc(100vh - 32px)); flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 24px 50px rgba(27,42,74,0.18);
}
.gbw-close { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.2); color: #fff; }

.gbw-header { flex-shrink: 0; background: ${NAVY}; padding: 20px 30px; display: flex; align-items: center; justify-content: space-between; }
.gbw-brand { display: flex; align-items: center; gap: 0; font-family: 'Fraunces', serif; font-weight: 700; font-size: 17px; color: #fff; }
.gbw-brand-logo { height: 22px; width: auto; margin-right: -2px; }
.gbw-stage-chip { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.14); padding: 7px 15px; border-radius: 999px; }
.gbw-stage-name { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11.5px; color: #fff; letter-spacing: 0.02em; }
.gbw-stage-time { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.14); padding: 3px 8px; border-radius: 999px; }

.gbw-body { flex: 1; overflow-y: auto; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 26px 42px; gap: 14px; }

.gbw-footer { flex-shrink: 0; background: #F5F6FA; border-top: 1px solid #E4E9F5; padding: 16px 26px; display: flex; align-items: center; justify-content: space-between; }
.gbw-nav { display: inline-flex; align-items: center; gap: 7px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; padding: 11px 20px; border-radius: 12px; border: 1px solid #DCE2F0; cursor: pointer; background: #fff; color: ${NAVY}; }
.gbw-nav.next { background: ${CORAL}; border-color: ${CORAL}; color: #fff; }
.gbw-nav.is-off, .gbw-nav:disabled { opacity: 0.35; cursor: default; }
.gbw-progress { display: flex; align-items: center; gap: 6px; }
.gbw-dot { width: 6px; height: 6px; border-radius: 50%; background: #D6DCEA; }
.gbw-dot.on { width: 20px; border-radius: 4px; background: ${CORAL}; }

.gbw-eyebrow { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; }
.gbw-h1 { font-family: 'Fraunces', serif; font-weight: 700; font-size: 34px; color: ${NAVY}; margin: 8px 0 0; text-align: center; }
.gbw-h2 { font-family: 'Fraunces', serif; font-weight: 700; font-size: 26px; color: ${NAVY}; margin: 0 0 4px; text-align: center; }
.gbw-p { font-size: 15px; font-weight: 600; color: #5A6B92; text-align: center; max-width: 480px; line-height: 1.6; }
.gbw-p-sm { font-size: 13px; font-weight: 600; color: #8892AC; text-align: center; margin: -6px 0 4px; }
.gbw-cover { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }
.gbw-cover-p { font-size: 14.5px; font-weight: 600; color: #5A6B92; max-width: 480px; line-height: 1.6; margin: 0; }
.gbw-center { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }

.gbw-rulebox { width: 100%; max-width: 560px; display: flex; flex-direction: column; align-items: center; gap: 14px; border: 1px solid; border-radius: 16px; padding: 18px 20px; }
.gbw-formula { font-family: 'Fraunces', serif; font-weight: 700; font-size: 14.5px; padding: 8px 18px; border-radius: 999px; }
.gbw-example-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; width: 100%; }
.gbw-example-card { background: #FAFBFD; border: 1px solid #E4E9F5; border-radius: 10px; padding: 12px 14px; font-size: 13.5px; font-weight: 600; color: #3A4568; text-align: center; }

.gbw-blank-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; width: 100%; max-width: 560px; }
.gbw-blank-card { background: #FAFBFD; border: 1px dashed #C7D0E5; border-radius: 12px; padding: 14px 16px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; align-items: center; text-align: center; }
.gbw-blank-sentence { font-family: 'Fraunces', serif; font-weight: 600; font-size: 13.5px; color: ${NAVY}; margin: 0; }
.gbw-blank-hint { font-size: 10px; font-weight: 700; color: #A6ADC7; text-transform: uppercase; letter-spacing: 0.04em; }
.gbw-blank-answer { font-size: 12px; font-weight: 700; color: #fff; padding: 4px 12px; border-radius: 999px; }

.gbw-qlist { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; max-width: 460px; }
.gbw-qlist li { font-size: 14px; font-weight: 600; color: #3A4568; background: #FAFBFD; border: 1px solid #E4E9F5; border-radius: 10px; padding: 12px 16px; }

.gbw-quiz-list { display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 560px; }
.gbw-quiz-item { background: #FAFBFD; border: 1px solid #E4E9F5; border-radius: 12px; padding: 14px 16px; }
.gbw-quiz-q { font-family: 'Fraunces', serif; font-weight: 600; font-size: 14px; color: ${NAVY}; margin: 0 0 10px; text-align: left; }
.gbw-quiz-options { display: flex; flex-wrap: wrap; gap: 8px; }
.gbw-quiz-opt {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: ${NAVY};
  background: #fff; border: 1.5px solid #DCE2F0; border-radius: 999px; padding: 8px 14px; cursor: pointer;
}
.gbw-quiz-opt:disabled { cursor: default; }
.gbw-quiz-opt.is-correct { background: #2EC4B6; border-color: #2EC4B6; color: #fff; }
.gbw-quiz-opt.is-wrong { background: #ED1C24; border-color: #ED1C24; color: #fff; }

@media (max-width: 640px) {
  .gbw-header { padding: 14px 18px; }
  .gbw-body { padding: 18px 20px; gap: 10px; }
  .gbw-footer { padding: 12px 16px; }
  .gbw-h1 { font-size: 26px; }
  .gbw-h2 { font-size: 21px; }
  .gbw-example-grid, .gbw-blank-grid { grid-template-columns: 1fr; max-width: 100%; }
}
`;
