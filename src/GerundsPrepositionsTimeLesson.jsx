import { useState } from "react";

const LESSON = {
  title: "Gerunds vs Infinitives After Prepositions of Time",
  formula: "before/after/since + gerund (preposition)  ·  to + base verb (infinitive of purpose)",
  leadIn: "What's one thing you do before leaving the house every morning?",
  importance: [
    "The single word \"to\" playing two completely different roles (preposition vs. infinitive marker) is one of the sneakiest ambiguities in English — knowing which one you're looking at prevents a whole category of verb-form mistakes.",
    "Every pattern here (before, after, since + gerund) is extremely common in describing routines and sequences — everyday sentences, not rare structures.",
    "Getting this wrong (\"before to eat,\" \"to studying\") is a very visible error that instantly flags a sentence as non-native, so fixing it is a high-value win.",
  ],
  teach: [
    {
      name: "Preposition of Time + Gerund",
      definition: "Before, after, since, and other prepositions of time are followed by the -ing form, because a preposition is always followed by a noun or gerund: never a base verb.",
      examples: ["Wash your hands before eating.", "She felt relieved after finishing the exam.", "I haven't seen him since graduating."],
    },
    {
      name: "To + Infinitive of Purpose: A Different 'To'",
      definition: "When to means 'in order to' and explains why, it's the infinitive marker, not a preposition, so it takes the base verb, not -ing.",
      examples: ["She woke up early to catch the sunrise.", "He studies every night to improve his grades.", "I called to ask a question."],
    },
  ],
  compareLeftLabel: "Before / After / Since: preposition + gerund",
  compareRightLabel: "To: infinitive of purpose + base verb",
  compareNote: "Both can explain the order of events or the reason for an action, but only real prepositions of time take the gerund. To meaning 'in order to' is a different animal, the infinitive marker, and needs the base verb.",
  comparePairs: [
    { left: "Before leaving, she locked the door.", right: "She locked the door to keep it safe." },
    { left: "After finishing the exam, he relaxed.", right: "He studied hard to finish the exam early." },
  ],
  guided: [
    { prompt: "Wash your hands before ___ (eat).", answer: "eating" },
    { prompt: "She felt better after ___ (rest) all day.", answer: "resting" },
    { prompt: "I haven't called him since ___ (move) away.", answer: "moving" },
    { prompt: "He called ___ (ask) about the schedule. (purpose)", answer: "to ask" },
    { prompt: "She saves money ___ (travel) more. (purpose)", answer: "to travel" },
    { prompt: "They left early ___ (avoid) the traffic. (purpose)", answer: "to avoid" },
  ],
  practice: [
    "Write one sentence using before, after, or since plus a gerund.",
    "Write one sentence using to plus a base verb to explain a purpose.",
    "Explain out loud why 'to' isn't always a preposition.",
  ],
  wrapup: "Real prepositions of time (before, after, since) take the gerund. To meaning 'in order to' is the infinitive marker, not a preposition, so it takes the base verb instead.",
};

function buildSlides(lesson) {
  const slides = ["cover", "warmup"];
  if (lesson.importance) slides.push("importance");
  lesson.teach.forEach((_, i) => slides.push(`teach${i}`));
  if (lesson.comparePairs) slides.push("predict", "compare");
  if (lesson.guided) {
    const guidedChunks = Math.ceil(lesson.guided.length / 3);
    for (let i = 0; i < guidedChunks; i++) slides.push(`guided${i}`);
  }
  slides.push("practice", "wrapup");
  return slides;
}

function CoverSlide({ lesson }) {
  return (
    <div className="gipl-slide gipl-slide--cover">
      <span className="gipl-kind-badge">Lesson Time!</span>
      <h2 className="gipl-cover-title">{lesson.title}</h2>
      <span className="gipl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="gipl-slide">
      <span className="gipl-eyebrow">Warm-up</span>
      <div className="gipl-bubble gipl-bubble--solo">
        <p className="gipl-bubble-text gipl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="gipl-slide gipl-slide--part">
      <h3 className="gipl-h">Why This Matters</h3>
      <div className="gipl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="gipl-importance-item">
            <span className="gipl-importance-num">{i + 1}</span>
            <p className="gipl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="gipl-slide">
      <h3 className="gipl-h">{concept.name}</h3>
      <p className="gipl-definition">{concept.definition}</p>
      <div className="gipl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="gipl-bubble">
            <p className="gipl-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PredictSlide({ lesson }) {
  const left = lesson.compareLeftLabel.split(": ")[0].trim();
  const right = lesson.compareRightLabel.split(": ")[0].trim();
  return (
    <div className="gipl-slide">
      <span className="gipl-eyebrow">Think About It</span>
      <h3 className="gipl-h">{left} <span className="gipl-vs">vs</span> {right}</h3>
      <p className="gipl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="gipl-slide">
      <h3 className="gipl-h">{lesson.compareLeftLabel} <span className="gipl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="gipl-compare-note">{lesson.compareNote}</p>
      <div className="gipl-compare-grid">
        <div className="gipl-panel">
          <span className="gipl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="gipl-compare-line">{pair.left}</p>)}
        </div>
        <div className="gipl-panel gipl-panel--right">
          <span className="gipl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="gipl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="gipl-quiz-item">
      <p className="gipl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="gipl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="gipl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="gipl-slide gipl-slide--part">
      <h3 className="gipl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="gipl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="gipl-slide gipl-slide--part">
      <h3 className="gipl-h">Speaking &amp; writing practice</h3>
      <ul className="gipl-list gipl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="gipl-slide">
      <h3 className="gipl-h">Wrap-up</h3>
      <p className="gipl-definition">{lesson.wrapup}</p>
    </div>
  );
}

function renderSlide(slideType, lesson) {
  if (slideType === "cover") return <CoverSlide lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType === "importance") return <ImportanceSlide lesson={lesson} />;
  if (slideType.startsWith("teach")) return <TeachSlide lesson={lesson} index={Number(slideType.replace("teach", ""))} />;
  if (slideType === "predict") return <PredictSlide lesson={lesson} />;
  if (slideType === "compare") return <CompareSlide lesson={lesson} />;
  if (slideType.startsWith("guided")) return <GuidedSlide lesson={lesson} index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "practice") return <PracticeSlide lesson={lesson} />;
  if (slideType === "wrapup") return <WrapupSlide lesson={lesson} />;
  return null;
}

const STAGE_LABELS = {
  cover: "Cover",
  warmup: "Warm-up",
  importance: "Why It Matters",
  predict: "Think About It",
  compare: "Compare",
  practice: "Practice",
  wrapup: "Wrap-up",
};

function stageLabel(slideType) {
  if (slideType.startsWith("teach")) return "Teach";
  if (slideType.startsWith("guided")) return "Guided Practice";
  return STAGE_LABELS[slideType] || "";
}

export default function GerundsPrepositionsTimeLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="gipl-shell">
      <style>{CSS}</style>
      <div className="gipl-stage">
        <div className="gipl-deck">
          <div className="gipl-deck-header">
            <span className="gipl-brand"><img src="/logo-sentenco.png" alt="" className="gipl-brand-logo" />entenco</span>
            <span className="gipl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="gipl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="gipl-nav-row">
            <button type="button" className="gipl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="gipl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`gipl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="gipl-nav-btn gipl-nav-btn--primary"
              onClick={() => setSlideIdx((i) => i + 1)}
              disabled={isLast}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.gipl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F2EEFB;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.gipl-shell * { box-sizing: border-box; }

.gipl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #DFD5F2;
  flex-shrink: 0;
}
.gipl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.gipl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.gipl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #A796CC;
  white-space: nowrap;
  flex-shrink: 0;
}

.gipl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.gipl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 4px solid #1A1A1A;
  border-radius: 18px;
  box-shadow: 9px 9px 0 #1A1A1A;
  min-height: 0;
  overflow: hidden;
}

.gipl-deck-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 0;
  overflow-y: auto;
  gap: 20px;
  padding: 20px 56px;
}

.gipl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.gipl-slide--cover { gap: 14px; }
.gipl-slide--part { justify-content: flex-start; }

.gipl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #6247AA;
}

.gipl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #6247AA;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.gipl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 42px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.15;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #6247AA;
}

.gipl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #453177;
  background: #F2EEFB;
  border: 2.5px solid #6247AA;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.gipl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #6247AA;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.gipl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.gipl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #2A2140;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.gipl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #6247AA;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.gipl-bubble--solo { max-width: 720px; }
.gipl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.gipl-bubble-text--big { font-size: 24px; font-style: italic; }

.gipl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.gipl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #A796CC;
  margin: 0;
  max-width: 620px;
}
.gipl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.gipl-panel { background: #F2EEFB; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.gipl-panel--right { border-color: #6247AA; }
.gipl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #453177;
  margin-bottom: 8px;
}
.gipl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.gipl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2A2140;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.gipl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.gipl-speaking-list li { margin-bottom: 8px; }

.gipl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.gipl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #F2EEFB;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.gipl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #6247AA;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.gipl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.gipl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.gipl-quiz-item {
  background: #F2EEFB;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.gipl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.gipl-reveal-btn {
  align-self: flex-start;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #1A1A1A;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  box-shadow: 3px 3px 0 #1A1A1A;
}
.gipl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.gipl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.gipl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #DFD5F2; flex-shrink: 0; }
.gipl-nav-btn {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1A1A1A;
  background: #FFFFFF;
  border: 2.5px solid #1A1A1A;
  border-radius: 10px;
  padding: 9px 18px;
  cursor: pointer;
  box-shadow: 4px 4px 0 #1A1A1A;
}
.gipl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.gipl-nav-btn--primary { background: #FFC300; }
.gipl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.gipl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.gipl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.gipl-nav-dot.is-active { background: #6247AA; }
`;
