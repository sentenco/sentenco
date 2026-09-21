import { useState } from "react";

const LESSON = {
  title: "Even Though / Even If / Even So",
  formula: "even though + fact  ·  even if + uncertain condition  ·  Even so, ... (linking two sentences)",
  leadIn: "Think of a time you did something even though it was hard. Now imagine a situation where you'd do something even if it were hard.",
  importance: [
    "Even though vs. even if is a real fact-versus-hypothetical distinction, so mixing them up doesn't just sound off — it can claim something happened when you meant it might happen.",
    "These three near-identical words show up constantly in arguing, persuading, and explaining decisions — high-frequency territory for expressing nuance.",
    "Even so is easy to accidentally use like a conjunction inside one sentence, so recognizing it as a standalone linking word prevents a real punctuation mistake.",
  ],
  teach: [
    {
      name: "Even Though vs Even If: A Fact or a Hypothetical?",
      definition: "Even though introduces a fact that's already true, adding surprise to the contrast. Even if introduces a hypothetical condition that may or may not happen.",
      examples: ["Even though it was raining, we went for a walk. (it really was raining)", "Even if it rains, we'll go for a walk. (we don't know yet)", "Even though she's busy, she always answers my calls."],
    },
    {
      name: "Even So: A Linking Word, Not a Conjunction",
      definition: "Even so means 'despite that' or 'nevertheless': it links two separate sentences, standing on its own at the start of the second one, unlike even though and even if.",
      examples: ["It was raining hard. Even so, we went for a walk.", "The test was difficult. Even so, most students passed.", "He was exhausted. Even so, he kept working."],
    },
  ],
  compareLeftLabel: "Even Though / Even If: join one sentence",
  compareRightLabel: "Even So: starts a new sentence",
  compareNote: "Even though and even if attach a dependent clause to the main clause in a single sentence. Even so does a similar job but as a standalone linking word connecting two full sentences.",
  comparePairs: [
    { left: "Even though it was expensive, she bought it.", right: "It was expensive. Even so, she bought it." },
    { left: "Even if he apologizes, I won't forgive him yet.", right: "He apologized. Even so, I'm still upset." },
  ],
  guided: [
    { prompt: "___ (Even though/Even if) it was raining, we still went outside. (it really happened)", answer: "Even though" },
    { prompt: "___ (Even though/Even if) she's only 10, she plays chess like a pro. (fact)", answer: "Even though" },
    { prompt: "___ (Even though/Even if) it rains tomorrow, we'll still go. (uncertain)", answer: "Even if" },
    { prompt: "___ (Even though/Even if) you apologize, it might not be enough. (uncertain)", answer: "Even if" },
    { prompt: "The movie was long. ___, I enjoyed every minute.", answer: "Even so" },
    { prompt: "He studied all night. ___, he still failed the exam.", answer: "Even so" },
  ],
  practice: [
    "Write one sentence with even though, describing a true fact.",
    "Write one sentence with even if, describing an uncertain future condition.",
    "Write two short sentences connected with even so.",
  ],
  wrapup: "Even though introduces a fact; even if introduces something uncertain. Both attach to one sentence. Even so does a similar job but stands alone, linking two separate sentences.",
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
    <div className="etil-slide etil-slide--cover">
      <span className="etil-kind-badge">Lesson Time!</span>
      <h2 className="etil-cover-title">{lesson.title}</h2>
      <span className="etil-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="etil-slide">
      <span className="etil-eyebrow">Warm-up</span>
      <div className="etil-bubble etil-bubble--solo">
        <p className="etil-bubble-text etil-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="etil-slide etil-slide--part">
      <h3 className="etil-h">Why This Matters</h3>
      <div className="etil-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="etil-importance-item">
            <span className="etil-importance-num">{i + 1}</span>
            <p className="etil-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="etil-slide">
      <h3 className="etil-h">{concept.name}</h3>
      <p className="etil-definition">{concept.definition}</p>
      <div className="etil-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="etil-bubble">
            <p className="etil-bubble-text">{ex}</p>
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
    <div className="etil-slide">
      <span className="etil-eyebrow">Think About It</span>
      <h3 className="etil-h">{left} <span className="etil-vs">vs</span> {right}</h3>
      <p className="etil-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="etil-slide">
      <h3 className="etil-h">{lesson.compareLeftLabel} <span className="etil-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="etil-compare-note">{lesson.compareNote}</p>
      <div className="etil-compare-grid">
        <div className="etil-panel">
          <span className="etil-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="etil-compare-line">{pair.left}</p>)}
        </div>
        <div className="etil-panel etil-panel--right">
          <span className="etil-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="etil-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="etil-quiz-item">
      <p className="etil-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="etil-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="etil-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="etil-slide etil-slide--part">
      <h3 className="etil-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="etil-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="etil-slide etil-slide--part">
      <h3 className="etil-h">Speaking &amp; writing practice</h3>
      <ul className="etil-list etil-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="etil-slide">
      <h3 className="etil-h">Wrap-up</h3>
      <p className="etil-definition">{lesson.wrapup}</p>
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

export default function EvenThoughIfSoLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="etil-shell">
      <style>{CSS}</style>
      <div className="etil-stage">
        <div className="etil-deck">
          <div className="etil-deck-header">
            <span className="etil-brand"><img src="/logo-sentivo.png" alt="" className="etil-brand-logo" />entenco</span>
            <span className="etil-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="etil-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="etil-nav-row">
            <button type="button" className="etil-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="etil-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`etil-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="etil-nav-btn etil-nav-btn--primary"
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

.etil-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FEF1EA;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.etil-shell * { box-sizing: border-box; }

.etil-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #F7D8C4;
  flex-shrink: 0;
}
.etil-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.etil-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.etil-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #CB9276;
  white-space: nowrap;
  flex-shrink: 0;
}

.etil-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.etil-deck {
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

.etil-deck-body {
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

.etil-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.etil-slide--cover { gap: 14px; }
.etil-slide--part { justify-content: flex-start; }

.etil-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #E1592A;
}

.etil-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #E1592A;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.etil-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #E1592A;
}

.etil-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #A73E1B;
  background: #FEF1EA;
  border: 2.5px solid #E1592A;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.etil-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #E1592A;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.etil-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.etil-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3A2314;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.etil-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #E1592A;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.etil-bubble--solo { max-width: 720px; }
.etil-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.etil-bubble-text--big { font-size: 24px; font-style: italic; }

.etil-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.etil-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #CB9276;
  margin: 0;
  max-width: 620px;
}
.etil-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.etil-panel { background: #FEF1EA; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.etil-panel--right { border-color: #E1592A; }
.etil-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #A73E1B;
  margin-bottom: 8px;
}
.etil-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.etil-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A2314;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.etil-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.etil-speaking-list li { margin-bottom: 8px; }

.etil-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.etil-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FEF1EA;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.etil-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #E1592A;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.etil-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.etil-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.etil-quiz-item {
  background: #FEF1EA;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.etil-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.etil-reveal-btn {
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
.etil-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.etil-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.etil-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #F7D8C4; flex-shrink: 0; }
.etil-nav-btn {
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
.etil-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.etil-nav-btn--primary { background: #FFC300; }
.etil-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.etil-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.etil-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.etil-nav-dot.is-active { background: #E1592A; }
`;
