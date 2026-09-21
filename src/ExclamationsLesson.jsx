import { useState } from "react";

const LESSON = {
  title: "Exclamations",
  formula: "What (a/an) + adjective + noun!  ·  How + adjective/adverb!",
  leadIn: "Look outside or around the room. React to something you see, starting with 'What a...!' or 'How...!'",
  importance: [
    "Exclamations are how you express genuine reaction and emotion in the moment — without them, every strong feeling gets flattened into a plain statement.",
    "What and How sound almost interchangeable to a learner at first, but mixing them up (\"How a beautiful day!\") is an instantly noticeable, easily-avoidable mistake.",
    "This is a quick, high-payoff pattern: two short formulas cover almost every spoken exclamation you'll ever need.",
  ],
  teach: [
    {
      name: "What: Before a Noun",
      definition: "What starts an exclamation about a noun, with a or an before a singular countable noun.",
      examples: ["What a beautiful day!", "What an amazing goal!", "What nonsense!"],
    },
    {
      name: "How: Before an Adjective or Adverb",
      definition: "How starts an exclamation about a quality or an action, with no noun involved.",
      examples: ["How beautiful!", "How strange!", "How quickly she runs!"],
    },
  ],
  compareLeftLabel: "What: needs a noun",
  compareRightLabel: "How: no noun needed",
  compareNote: "If you're reacting to a thing, use what plus a/an plus the noun. If you're reacting to a quality or an action alone, use how.",
  comparePairs: [
    { left: "What a lovely garden!", right: "How lovely!" },
    { left: "What a mess!", right: "How messy!" },
  ],
  guided: [
    { prompt: "___ a fantastic performance! (reacting to a thing)", answer: "What" },
    { prompt: "___ terrible weather! (reacting to a thing)", answer: "What" },
    { prompt: "___ a surprise! (reacting to a thing)", answer: "What" },
    { prompt: "___ exciting! (reacting to a quality, no noun)", answer: "How" },
    { prompt: "___ strange! (reacting to a quality, no noun)", answer: "How" },
    { prompt: "___ quickly he finished! (reacting to an action)", answer: "How" },
  ],
  practice: [
    "Write one exclamation using what + a/an + adjective + noun.",
    "Write one exclamation using how + adjective.",
    "React to something happening around you right now, out loud, using one of these patterns.",
  ],
  wrapup: "What starts an exclamation about a noun (with a/an for singular countable nouns). How starts one about a quality or action, with no noun.",
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
    <div className="excl-slide excl-slide--cover">
      <span className="excl-kind-badge">Lesson Time!</span>
      <h2 className="excl-cover-title">{lesson.title}</h2>
      <span className="excl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="excl-slide">
      <span className="excl-eyebrow">Warm-up</span>
      <div className="excl-bubble excl-bubble--solo">
        <p className="excl-bubble-text excl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="excl-slide excl-slide--part">
      <h3 className="excl-h">Why Exclamations Matter</h3>
      <div className="excl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="excl-importance-item">
            <span className="excl-importance-num">{i + 1}</span>
            <p className="excl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="excl-slide">
      <h3 className="excl-h">{concept.name}</h3>
      <p className="excl-definition">{concept.definition}</p>
      <div className="excl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="excl-bubble">
            <p className="excl-bubble-text">{ex}</p>
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
    <div className="excl-slide">
      <span className="excl-eyebrow">Think About It</span>
      <h3 className="excl-h">{left} <span className="excl-vs">vs</span> {right}</h3>
      <p className="excl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="excl-slide">
      <h3 className="excl-h">{lesson.compareLeftLabel} <span className="excl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="excl-compare-note">{lesson.compareNote}</p>
      <div className="excl-compare-grid">
        <div className="excl-panel">
          <span className="excl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="excl-compare-line">{pair.left}</p>)}
        </div>
        <div className="excl-panel excl-panel--right">
          <span className="excl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="excl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="excl-quiz-item">
      <p className="excl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="excl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="excl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="excl-slide excl-slide--part">
      <h3 className="excl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="excl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="excl-slide excl-slide--part">
      <h3 className="excl-h">Speaking &amp; writing practice</h3>
      <ul className="excl-list excl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="excl-slide">
      <h3 className="excl-h">Wrap-up</h3>
      <p className="excl-definition">{lesson.wrapup}</p>
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

export default function ExclamationsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="excl-shell">
      <style>{CSS}</style>
      <div className="excl-stage">
        <div className="excl-deck">
          <div className="excl-deck-header">
            <span className="excl-brand"><img src="/logo-sentivo.png" alt="" className="excl-brand-logo" />entenco</span>
            <span className="excl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="excl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="excl-nav-row">
            <button type="button" className="excl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="excl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`excl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="excl-nav-btn excl-nav-btn--primary"
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

.excl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #EEF2F8;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.excl-shell * { box-sizing: border-box; }

.excl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #D6E0EE;
  flex-shrink: 0;
}
.excl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.excl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.excl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #7188AC;
  white-space: nowrap;
  flex-shrink: 0;
}

.excl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.excl-deck {
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

.excl-deck-body {
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

.excl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.excl-slide--cover { gap: 14px; }
.excl-slide--part { justify-content: flex-start; }

.excl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #2C4870;
}

.excl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #2C4870;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.excl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 56px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #2C4870;
}

.excl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #2C4870;
  background: #EEF2F8;
  border: 2.5px solid #2C4870;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.excl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #2C4870;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.excl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.excl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1E2E45;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.excl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #2C4870;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.excl-bubble--solo { max-width: 720px; }
.excl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.excl-bubble-text--big { font-size: 24px; font-style: italic; }

.excl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.excl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #7188AC;
  margin: 0;
  max-width: 620px;
}
.excl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.excl-panel { background: #EEF2F8; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.excl-panel--right { border-color: #2C4870; }
.excl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #2C4870;
  margin-bottom: 8px;
}
.excl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.excl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1E2E45;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.excl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.excl-speaking-list li { margin-bottom: 8px; }

.excl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.excl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #EEF2F8;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.excl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #2C4870;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.excl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.excl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.excl-quiz-item {
  background: #EEF2F8;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.excl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.excl-reveal-btn {
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
.excl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.excl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.excl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #D6E0EE; flex-shrink: 0; }
.excl-nav-btn {
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
.excl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.excl-nav-btn--primary { background: #FFC300; }
.excl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.excl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.excl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.excl-nav-dot.is-active { background: #2C4870; }
`;
