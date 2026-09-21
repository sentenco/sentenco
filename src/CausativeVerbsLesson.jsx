import { useState } from "react";

const LESSON = {
  title: "Causative Verbs",
  formula: "have/get + object + past participle (someone else does it)  ·  make/let + person + base verb (force/permission)",
  leadIn: "Name one thing you had done for you recently, like a haircut or a repair.",
  importance: [
    "Native speakers use have/get something done constantly for everyday services — haircuts, repairs, deliveries — without it, a learner is stuck saying \"I cut my hair\" when they mean they paid someone else to.",
    "Mixing up make, let, and have changes who's actually in control of the action — a real difference in meaning, not just a grammar technicality.",
    "The verb after the object changes shape depending on which causative you use (past participle vs. base form), so this pattern only becomes reliable with real practice.",
  ],
  teach: [
    {
      name: "Have/Get Something Done: Someone Else Does It",
      definition: "Have or get plus an object plus the past participle shows that someone else performed the action for you, not you yourself.",
      examples: ["I had my hair cut yesterday.", "She got her car repaired.", "We're having the house painted."],
    },
    {
      name: "Make/Let Someone Do Something: Force or Permission",
      definition: "Make plus a person plus the base verb means forcing someone to act; let plus a person plus the base verb means allowing them to.",
      examples: ["My mom made me clean my room.", "The teacher let us leave early.", "He made his brother apologize."],
    },
  ],
  compareLeftLabel: "Make: forced",
  compareRightLabel: "Let: allowed",
  compareNote: "Make pushes someone into an action they might not have chosen. Let simply removes an obstacle and allows the action to happen.",
  comparePairs: [
    { left: "The coach made them run extra laps.", right: "The coach let them skip practice." },
    { left: "She made him wait outside.", right: "She let him wait inside." },
  ],
  guided: [
    { prompt: "I had my phone ___ (repair) at the shop yesterday.", answer: "repaired" },
    { prompt: "She got her wedding dress ___ (alter) before the big day.", answer: "altered" },
    { prompt: "We're having our roof ___ (fix) next week.", answer: "fixed" },
    { prompt: "My parents ___ me stay out late for the party. (permission)", answer: "let" },
    { prompt: "The manager ___ everyone stay late to finish the project. (force)", answer: "made" },
    { prompt: "He ___ his little sister borrow his bike. (permission)", answer: "let" },
  ],
  practice: [
    "Write one sentence about something you had done for you, using have or get + past participle.",
    "Write one sentence using make, showing someone was forced to do something.",
    "Write one sentence using let, showing someone was given permission.",
  ],
  wrapup: "Have/get + object + past participle shows someone else did the action for you. Make forces an action; let permits it.",
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
    <div className="cvl-slide cvl-slide--cover">
      <span className="cvl-kind-badge">Lesson Time!</span>
      <h2 className="cvl-cover-title">{lesson.title}</h2>
      <span className="cvl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="cvl-slide">
      <span className="cvl-eyebrow">Warm-up</span>
      <div className="cvl-bubble cvl-bubble--solo">
        <p className="cvl-bubble-text cvl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="cvl-slide cvl-slide--part">
      <h3 className="cvl-h">Why Causative Verbs Matter</h3>
      <div className="cvl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="cvl-importance-item">
            <span className="cvl-importance-num">{i + 1}</span>
            <p className="cvl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="cvl-slide">
      <h3 className="cvl-h">{concept.name}</h3>
      <p className="cvl-definition">{concept.definition}</p>
      <div className="cvl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="cvl-bubble">
            <p className="cvl-bubble-text">{ex}</p>
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
    <div className="cvl-slide">
      <span className="cvl-eyebrow">Think About It</span>
      <h3 className="cvl-h">{left} <span className="cvl-vs">vs</span> {right}</h3>
      <p className="cvl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="cvl-slide">
      <h3 className="cvl-h">{lesson.compareLeftLabel} <span className="cvl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="cvl-compare-note">{lesson.compareNote}</p>
      <div className="cvl-compare-grid">
        <div className="cvl-panel">
          <span className="cvl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="cvl-compare-line">{pair.left}</p>)}
        </div>
        <div className="cvl-panel cvl-panel--right">
          <span className="cvl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="cvl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="cvl-quiz-item">
      <p className="cvl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="cvl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="cvl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="cvl-slide cvl-slide--part">
      <h3 className="cvl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="cvl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="cvl-slide cvl-slide--part">
      <h3 className="cvl-h">Speaking &amp; writing practice</h3>
      <ul className="cvl-list cvl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="cvl-slide">
      <h3 className="cvl-h">Wrap-up</h3>
      <p className="cvl-definition">{lesson.wrapup}</p>
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

export default function CausativeVerbsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="cvl-shell">
      <style>{CSS}</style>
      <div className="cvl-stage">
        <div className="cvl-deck">
          <div className="cvl-deck-header">
            <span className="cvl-brand"><img src="/logo-sentenco.png" alt="" className="cvl-brand-logo" />entenco</span>
            <span className="cvl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="cvl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="cvl-nav-row">
            <button type="button" className="cvl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="cvl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`cvl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="cvl-nav-btn cvl-nav-btn--primary"
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

.cvl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FBF3E4;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.cvl-shell * { box-sizing: border-box; }

.cvl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #F3E1BE;
  flex-shrink: 0;
}
.cvl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.cvl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.cvl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #B7924E;
  white-space: nowrap;
  flex-shrink: 0;
}

.cvl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.cvl-deck {
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

.cvl-deck-body {
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

.cvl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.cvl-slide--cover { gap: 14px; }
.cvl-slide--part { justify-content: flex-start; }

.cvl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #E3A73C;
}

.cvl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #E3A73C;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.cvl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 46px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #E3A73C;
}

.cvl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #96631C;
  background: #FBF3E4;
  border: 2.5px solid #E3A73C;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.cvl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #E3A73C;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.cvl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.cvl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3D2E10;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.cvl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #E3A73C;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.cvl-bubble--solo { max-width: 720px; }
.cvl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.cvl-bubble-text--big { font-size: 24px; font-style: italic; }

.cvl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.cvl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #B7924E;
  margin: 0;
  max-width: 620px;
}
.cvl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.cvl-panel { background: #FBF3E4; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.cvl-panel--right { border-color: #E3A73C; }
.cvl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #96631C;
  margin-bottom: 8px;
}
.cvl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.cvl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3D2E10;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.cvl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.cvl-speaking-list li { margin-bottom: 8px; }

.cvl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.cvl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FBF3E4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.cvl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #E3A73C;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.cvl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.cvl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.cvl-quiz-item {
  background: #FBF3E4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cvl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.cvl-reveal-btn {
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
.cvl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.cvl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.cvl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #F3E1BE; flex-shrink: 0; }
.cvl-nav-btn {
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
.cvl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.cvl-nav-btn--primary { background: #FFC300; }
.cvl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.cvl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.cvl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.cvl-nav-dot.is-active { background: #E3A73C; }
`;
