import { useState } from "react";
import { useParams } from "react-router-dom";
import LESSONS, { getLessonByCode } from "./cndTracks";

function buildSlides(lesson) {
  const slides = ["cover", "warmup"];
  if (lesson.comparePairs) slides.push("predict", "compare");
  lesson.teach.forEach((_, i) => slides.push(`teach${i}`));
  if (lesson.guided) {
    const guidedChunks = Math.ceil(lesson.guided.length / 3);
    for (let i = 0; i < guidedChunks; i++) slides.push(`guided${i}`);
  }
  slides.push("practice", "wrapup");
  return slides;
}

function CoverSlide({ lesson }) {
  return (
    <div className="cnl-slide cnl-slide--cover">
      <span className="cnl-kind-badge">Lesson Time!</span>
      <h2 className="cnl-cover-title">{lesson.title}</h2>
      <p className="cnl-cover-sub">Lesson {lesson.number} of {LESSONS.length}</p>
      <span className="cnl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="cnl-slide">
      <span className="cnl-eyebrow">Warm-up</span>
      <div className="cnl-bubble cnl-bubble--solo">
        <p className="cnl-bubble-text cnl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="cnl-slide">
      <h3 className="cnl-h">{concept.name}</h3>
      <p className="cnl-definition">{concept.definition}</p>
      <div className="cnl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="cnl-bubble">
            <p className="cnl-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PredictSlide({ lesson }) {
  const left = lesson.compareLeftLabel.split(" — ")[0].trim();
  const right = lesson.compareRightLabel.split(" — ")[0].trim();
  return (
    <div className="cnl-slide">
      <span className="cnl-eyebrow">Think About It</span>
      <h3 className="cnl-h">{left} <span className="cnl-vs">vs</span> {right}</h3>
      <p className="cnl-compare-note">What's the difference? Take a guess before we explain.</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="cnl-slide">
      <h3 className="cnl-h">{lesson.compareLeftLabel} <span className="cnl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="cnl-compare-note">{lesson.compareNote}</p>
      <div className="cnl-compare-grid">
        <div className="cnl-panel">
          <span className="cnl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="cnl-compare-line">{pair.left}</p>)}
        </div>
        <div className="cnl-panel cnl-panel--right">
          <span className="cnl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="cnl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="cnl-quiz-item">
      <p className="cnl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="cnl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="cnl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="cnl-slide cnl-slide--part">
      <h3 className="cnl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="cnl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="cnl-slide cnl-slide--part">
      <h3 className="cnl-h">Speaking &amp; writing practice</h3>
      <ul className="cnl-list cnl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="cnl-slide">
      <h3 className="cnl-h">Wrap-up</h3>
      <p className="cnl-definition">{lesson.wrapup}</p>
      {lesson.nextHint && <p className="cnl-recap-line">Next: <strong>{lesson.nextHint}</strong></p>}
    </div>
  );
}

function stageLabel(slideType) {
  if (slideType === "cover") return "Cover";
  if (slideType === "warmup") return "Warm-up";
  if (slideType === "predict") return "Think About It";
  if (slideType === "compare") return "Compare";
  if (slideType.startsWith("teach")) return "Teach";
  if (slideType.startsWith("guided")) return "Guided Practice";
  if (slideType === "practice") return "Practice";
  if (slideType === "wrapup") return "Wrap-up";
  return "";
}

function renderSlide(slideType, lesson) {
  if (slideType === "cover") return <CoverSlide lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType.startsWith("teach")) return <TeachSlide lesson={lesson} index={Number(slideType.replace("teach", ""))} />;
  if (slideType === "predict") return <PredictSlide lesson={lesson} />;
  if (slideType === "compare") return <CompareSlide lesson={lesson} />;
  if (slideType.startsWith("guided")) return <GuidedSlide lesson={lesson} index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "practice") return <PracticeSlide lesson={lesson} />;
  if (slideType === "wrapup") return <WrapupSlide lesson={lesson} />;
  return null;
}

export default function ConditionalsLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLessonByCode(code);

  if (!lesson) {
    return (
      <div className="cnl-shell">
        <style>{CSS}</style>
        <div className="cnl-stage">
          <p className="cnl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="cnl-shell">
      <style>{CSS}</style>
      <div className="cnl-stage">
        <div className="cnl-deck">
          <div className="cnl-deck-header">
            <span className="cnl-brand"><img src="/logo-sentivo.png" alt="" className="cnl-brand-logo" />entenco</span>
            <span className="cnl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="cnl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="cnl-nav-row">
            <button type="button" className="cnl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="cnl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`cnl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="cnl-nav-btn cnl-nav-btn--primary"
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

.cnl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FDF1F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.cnl-shell * { box-sizing: border-box; }

.cnl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.cnl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.cnl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.cnl-missing {
  font-family: 'Comic Neue', cursive, sans-serif;
  color: #8A3A56;
  text-align: center;
  margin-top: 60px;
}

.cnl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 4px solid #1A1A1A;
  border-radius: 18px;
  padding: 20px 56px;
  box-shadow: 9px 9px 0 #1A1A1A;
  min-height: 0;
}

.cnl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 1px solid #F5D3E0;
  flex-shrink: 0;
}
.cnl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8A3A56;
  white-space: nowrap;
  flex-shrink: 0;
}

.cnl-deck-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 0;
  overflow-y: auto;
  gap: 20px;
  padding: 8px 0;
}

.cnl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.cnl-slide--cover { gap: 14px; }
.cnl-slide--part { justify-content: flex-start; }

.cnl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #C2255C;
}

.cnl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #C2255C;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.cnl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 60px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #C2255C;
}
.cnl-cover-sub {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #B36886;
  margin: 0;
}

.cnl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #C2255C;
  background: #FDF1F5;
  border: 2.5px solid #C2255C;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.cnl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #C2255C;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.cnl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.cnl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3A2530;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.cnl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #C2255C;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.cnl-bubble--solo { max-width: 720px; }
.cnl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.cnl-bubble-text--big { font-size: 24px; font-style: italic; }

.cnl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.cnl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #B36886;
  margin: 0;
  max-width: 620px;
}
.cnl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.cnl-panel { background: #FDF1F5; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.cnl-panel--right { border-color: #C2255C; }
.cnl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #8A3A56;
  margin-bottom: 8px;
}
.cnl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.cnl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A2530;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.cnl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.cnl-speaking-list li { margin-bottom: 8px; }

.cnl-recap-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #3A2530;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.cnl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.cnl-quiz-item {
  background: #FDF1F5;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cnl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.cnl-reveal-btn {
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
.cnl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.cnl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.cnl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #F5D3E0; flex-shrink: 0; }
.cnl-nav-btn {
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
.cnl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.cnl-nav-btn--primary { background: #FFC300; }
.cnl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.cnl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.cnl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.cnl-nav-dot.is-active { background: #C2255C; }
`;
