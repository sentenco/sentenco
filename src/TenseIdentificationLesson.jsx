import React, { useEffect, useState } from "react";

const NAVY = "#1B2A4A";
const CORAL = "#FF6B4A";
const CORAL_DEEP = "#E0502F";

// 24 sentences, two per tense, across all 12 English tenses -- shuffled so
// the same tense never appears in consecutive questions (order no longer
// matches the original Present -> Past -> Future grouping on purpose).
const QUIZ_ITEMS = [
  { sentence: "I had been studying for three hours before I took a break.", options: ["Past Perfect", "Past Perfect Continuous", "Present Perfect Continuous", "Past Continuous"], correct: 1 },
  { sentence: "They are watching a movie right now.", options: ["Present Simple", "Present Continuous", "Present Perfect Continuous", "Past Continuous"], correct: 1 },
  { sentence: "She will have finished the book by the end of the week.", options: ["Future Perfect", "Future Simple", "Present Perfect", "Future Perfect Continuous"], correct: 0 },
  { sentence: "I visited my grandmother last weekend.", options: ["Present Perfect", "Past Continuous", "Past Simple", "Past Perfect"], correct: 2 },
  { sentence: "She will help us with the project.", options: ["Future Continuous", "Future Simple", "Present Continuous", "Future Perfect"], correct: 1 },
  { sentence: "We have finished our homework.", options: ["Present Perfect", "Past Simple", "Present Perfect Continuous", "Past Perfect"], correct: 0 },
  { sentence: "He was driving home at 9 p.m. last night.", options: ["Past Continuous", "Past Simple", "Past Perfect", "Future Continuous"], correct: 0 },
  { sentence: "By December, he will have been working here for five years.", options: ["Future Perfect", "Future Perfect Continuous", "Present Perfect Continuous", "Past Perfect Continuous"], correct: 1 },
  { sentence: "Maria works at a hospital every Monday.", options: ["Present Simple", "Present Continuous", "Past Simple", "Future Simple"], correct: 0 },
  { sentence: "At 8 p.m. tonight, they will be having dinner.", options: ["Future Continuous", "Future Simple", "Future Perfect", "Present Continuous"], correct: 0 },
  { sentence: "He has been working since early this morning.", options: ["Present Perfect", "Present Perfect Continuous", "Past Continuous", "Present Continuous"], correct: 1 },
  { sentence: "The movie had already started when we arrived.", options: ["Past Simple", "Past Perfect", "Present Perfect", "Past Perfect Continuous"], correct: 1 },
  { sentence: "I am studying for my English test.", options: ["Present Continuous", "Present Perfect", "Present Simple", "Future Continuous"], correct: 0 },
  { sentence: "By next Friday, we will have completed the project.", options: ["Future Simple", "Future Perfect", "Future Perfect Continuous", "Present Perfect"], correct: 1 },
  { sentence: "She bought a new phone yesterday.", options: ["Past Simple", "Present Perfect", "Past Continuous", "Future Simple"], correct: 0 },
  { sentence: "They had been living there for ten years before they moved.", options: ["Past Perfect Continuous", "Past Perfect", "Present Perfect Continuous", "Past Simple"], correct: 0 },
  { sentence: "They have been waiting for the bus for 30 minutes.", options: ["Present Perfect Continuous", "Present Perfect", "Past Perfect Continuous", "Present Continuous"], correct: 0 },
  { sentence: "My brother plays basketball after school.", options: ["Present Continuous", "Present Simple", "Present Perfect", "Past Simple"], correct: 1 },
  { sentence: "This time tomorrow, I will be flying to Japan.", options: ["Future Simple", "Future Continuous", "Present Continuous", "Future Perfect Continuous"], correct: 1 },
  { sentence: "She had finished her work before her boss came.", options: ["Past Perfect", "Past Simple", "Present Perfect", "Future Perfect"], correct: 0 },
  { sentence: "She has visited London three times.", options: ["Past Simple", "Present Perfect", "Present Perfect Continuous", "Past Perfect"], correct: 1 },
  { sentence: "Next month, they will have been studying English for two years.", options: ["Future Perfect Continuous", "Future Perfect", "Present Perfect Continuous", "Future Continuous"], correct: 0 },
  { sentence: "We were having dinner when he called.", options: ["Past Simple", "Past Continuous", "Past Perfect Continuous", "Present Continuous"], correct: 1 },
  { sentence: "I will call you tomorrow.", options: ["Future Simple", "Future Continuous", "Present Simple", "Future Perfect"], correct: 0 },
];

function QuizItem({ item, index }) {
  const [picked, setPicked] = useState(null);
  const answered = picked !== null;
  return (
    <div className="tid-quiz-item">
      <p className="tid-quiz-sentence">&ldquo;{item.sentence}&rdquo;</p>
      <p className="tid-quiz-prompt">Which tense is this?</p>
      <div className="tid-quiz-options">
        {item.options.map((opt, idx) => {
          const isCorrect = idx === item.correct;
          const isPicked = idx === picked;
          const cls = answered && isCorrect ? "is-correct" : answered && isPicked ? "is-wrong" : "";
          return (
            <button
              key={opt}
              type="button"
              className={`tid-quiz-opt ${cls}`}
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

export default function TenseIdentificationLesson() {
  const [i, setI] = useState(0);
  const total = SLIDES.length;
  const s = SLIDES[i];

  useEffect(() => {
    const styleId = "tid-styles";
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
    <div className="tid-wrap">
      <div className="tid-single">
        <div className="tid-slide">
          <button className="tid-close" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <div className="tid-header">
            <div className="tid-brand">
              <span className="tid-brand-badge">
                <img className="tid-brand-logo" src="/logo-sentivo.png" alt="" />
              </span>
              <span>entivo</span>
            </div>
            <div className="tid-stage-chip">
              <span className="tid-stage-name">{s.stage}</span>
              {s.time && <span className="tid-stage-time">{s.time}</span>}
            </div>
          </div>
          <div className="tid-body">{s.body}</div>
          <div className="tid-footer">
            <button className={`tid-nav ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="tid-progress">
              {Array.from({ length: total }).map((_, idx) => (
                <span key={idx} className={`tid-dot ${idx === i ? "on" : ""}`} />
              ))}
            </div>
            <button className="tid-nav next" onClick={() => (i === total - 1 ? exit() : go(1))}>
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
  { stage: "Verb Tense Quiz", time: "~15 min", note: "24 sentences across all 12 English tenses, two per tense, moving from Present through Past to Future and building up from Simple to Perfect Continuous within each. Let the student answer independently -- each choice locks immediately and shows right or wrong, so you don't need to grade it yourself. Step in only if they miss both sentences in the same tense pair, and briefly review that tense's form before moving on." },
  { stage: "Wrap-Up", time: null, note: null },
];

const SLIDES = [
  {
    stage: "Customized Lesson", time: null,
    body: (
      <div className="tid-cover">
        <span className="tid-eyebrow">Sentivo &middot; Customized Lesson</span>
        <h1 className="tid-h1">Verb Tense Identification</h1>
        <p className="tid-cover-p">24 real sentences, all 12 English tenses. Read each one and choose the tense it's written in.</p>
      </div>
    ),
  },
  ...QUIZ_ITEMS.map((item, idx) => ({
    stage: `Tense Quiz (${idx + 1}/${QUIZ_ITEMS.length})`, time: idx === 0 ? "~15 min" : null,
    body: <QuizItem key={item.sentence} item={item} index={idx} />,
  })),
  {
    stage: "Wrap-Up", time: null,
    body: (
      <div className="tid-cover">
        <h2 className="tid-h1" style={{ fontSize: 34 }}>Great Job!</h2>
        <p className="tid-cover-p">You worked through all 12 English tenses today. Keep noticing them in what you read and hear, that's how they start to feel automatic.</p>
      </div>
    ),
  },
];

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Quicksand:wght@500;600;700&display=swap');

.tid-wrap { min-height: 100vh; width: 100%; background: #EEF1F6; color: ${NAVY}; font-family: 'Quicksand', sans-serif; padding: 16px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; }
.tid-wrap * { box-sizing: border-box; }
.tid-single { flex-shrink: 0; }

.tid-slide {
  position: relative; width: min(740px, calc(100vw - 32px)); height: min(580px, calc(100vh - 32px)); flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 24px 50px rgba(27,42,74,0.18);
}
.tid-close { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.2); color: #fff; }

.tid-header { flex-shrink: 0; background: ${NAVY}; padding: 20px 30px; display: flex; align-items: center; justify-content: space-between; }
.tid-brand { display: flex; align-items: center; gap: 8px; font-family: 'Fraunces', serif; font-weight: 700; font-size: 17px; color: #fff; }
.tid-brand-badge { display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #fff; flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.18); }
.tid-brand-logo { height: 16px; width: auto; display: block; }
.tid-stage-chip { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.14); padding: 7px 15px; border-radius: 999px; }
.tid-stage-name { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11.5px; color: #fff; letter-spacing: 0.02em; }
.tid-stage-time { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.14); padding: 3px 8px; border-radius: 999px; }

.tid-body { flex: 1; overflow-y: auto; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 26px 42px; gap: 14px; }

.tid-footer { flex-shrink: 0; background: #F5F6FA; border-top: 1px solid #E4E9F5; padding: 16px 26px; display: flex; align-items: center; justify-content: space-between; }
.tid-nav { display: inline-flex; align-items: center; gap: 7px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; padding: 11px 20px; border-radius: 12px; border: 1px solid #DCE2F0; cursor: pointer; background: #fff; color: ${NAVY}; }
.tid-nav.next { background: ${CORAL}; border-color: ${CORAL}; color: #fff; }
.tid-nav.is-off, .tid-nav:disabled { opacity: 0.35; cursor: default; }
.tid-progress { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; max-width: 320px; justify-content: center; }
.tid-dot { width: 6px; height: 6px; border-radius: 50%; background: #D6DCEA; }
.tid-dot.on { width: 16px; border-radius: 4px; background: ${CORAL}; }

.tid-eyebrow { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; }
.tid-h1 { font-family: 'Fraunces', serif; font-weight: 700; font-size: 32px; color: ${NAVY}; margin: 8px 0 0; text-align: center; }
.tid-cover { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }
.tid-cover-p { font-size: 14.5px; font-weight: 600; color: #5A6B92; max-width: 480px; line-height: 1.6; margin: 0; }

.tid-quiz-item { width: 100%; max-width: 560px; display: flex; flex-direction: column; align-items: center; gap: 6px; }
.tid-quiz-sentence { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; color: ${NAVY}; text-align: center; line-height: 1.5; margin: 0 0 2px; }
.tid-quiz-prompt { font-size: 12px; font-weight: 700; color: #8892AC; text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 12px; }
.tid-quiz-options { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
.tid-quiz-opt {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: ${NAVY};
  background: #FAFBFD; border: 1.5px solid #DCE2F0; border-radius: 999px; padding: 10px 18px; cursor: pointer;
}
.tid-quiz-opt:disabled { cursor: default; }
.tid-quiz-opt.is-correct { background: #2EC4B6; border-color: #2EC4B6; color: #fff; }
.tid-quiz-opt.is-wrong { background: #ED1C24; border-color: #ED1C24; color: #fff; }

@media (max-width: 640px) {
  .tid-header { padding: 14px 18px; }
  .tid-body { padding: 18px 20px; gap: 10px; }
  .tid-footer { padding: 12px 16px; }
  .tid-h1 { font-size: 24px; }
  .tid-quiz-sentence { font-size: 16px; }
}
`;
