import { useState } from "react";
import { useParams } from "react-router-dom";
import LESSONS, { getLessonByCode } from "./mdTracks";

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
    <div className="mdl-slide mdl-slide--cover">
      <span className="mdl-kind-badge">Lesson Time!</span>
      <h2 className="mdl-cover-title">{lesson.title}</h2>
      <p className="mdl-cover-sub">Lesson {lesson.number} of {LESSONS.length}</p>
      <div className="mdl-legend">
        {lesson.modals.map((m) => (
          <span key={m} className="mdl-legend-chip">{m}</span>
        ))}
      </div>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="mdl-slide">
      <span className="mdl-eyebrow">Warm-up</span>
      <div className="mdl-bubble mdl-bubble--solo">
        <p className="mdl-bubble-text mdl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="mdl-slide">
      <h3 className="mdl-h">{concept.name}</h3>
      <p className="mdl-definition">{concept.definition}</p>
      <div className="mdl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="mdl-bubble">
            <p className="mdl-bubble-text">{ex}</p>
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
    <div className="mdl-slide">
      <span className="mdl-eyebrow">Think About It</span>
      <h3 className="mdl-h">{left} <span className="mdl-vs">vs</span> {right}</h3>
      <p className="mdl-compare-note">What's the difference? Take a guess before we explain.</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="mdl-slide">
      <h3 className="mdl-h">{lesson.compareLeftLabel} <span className="mdl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="mdl-compare-note">{lesson.compareNote}</p>
      <div className="mdl-compare-grid">
        <div className="mdl-panel">
          <span className="mdl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="mdl-compare-line">{pair.left}</p>)}
        </div>
        <div className="mdl-panel mdl-panel--right">
          <span className="mdl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="mdl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="mdl-quiz-item">
      <p className="mdl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="mdl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="mdl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="mdl-slide mdl-slide--part">
      <h3 className="mdl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="mdl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="mdl-slide mdl-slide--part">
      <h3 className="mdl-h">Speaking &amp; writing practice</h3>
      <ul className="mdl-list mdl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="mdl-slide">
      <h3 className="mdl-h">Wrap-up</h3>
      <p className="mdl-definition">{lesson.wrapup}</p>
      {lesson.nextHint && <p className="mdl-recap-line">Next: <strong>{lesson.nextHint}</strong></p>}
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

export default function ModalsLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLessonByCode(code);

  if (!lesson) {
    return (
      <div className="mdl-shell">
        <style>{CSS}</style>
        <div className="mdl-stage">
          <p className="mdl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="mdl-shell">
      <style>{CSS}</style>
      <div className="mdl-stage">
        <div className="mdl-deck">
          <div className="mdl-deck-header">
            <span className="mdl-brand"><img src="/logo-sentivo.png" alt="" className="mdl-brand-logo" />entenco</span>
            <span className="mdl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="mdl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="mdl-nav-row">
            <button type="button" className="mdl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="mdl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`mdl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="mdl-nav-btn mdl-nav-btn--primary"
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

.mdl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F2FBEF;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.mdl-shell * { box-sizing: border-box; }

.mdl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.mdl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.mdl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.mdl-missing {
  font-family: 'Comic Neue', cursive, sans-serif;
  color: #3F6B3D;
  text-align: center;
  margin-top: 60px;
}

.mdl-deck {
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

.mdl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 1px solid #D9EED4;
  flex-shrink: 0;
}
.mdl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #3F6B3D;
  white-space: nowrap;
  flex-shrink: 0;
}

.mdl-deck-body {
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

.mdl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.mdl-slide--cover { gap: 14px; }
.mdl-slide--part { justify-content: flex-start; }

.mdl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #2F9E44;
}

.mdl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #2F9E44;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.mdl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 64px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #2F9E44;
}
.mdl-cover-sub {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #5B8A57;
  margin: 0;
}

.mdl-legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 4px; max-width: 640px; }
.mdl-legend-chip {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 17px;
  letter-spacing: 0.3px;
  color: #2F9E44;
  background: #F2FBEF;
  border: 2.5px solid #2F9E44;
  border-radius: 999px;
  padding: 6px 16px 8px;
}

.mdl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #2F9E44;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.mdl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.mdl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #2C3A2A;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.mdl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #2F9E44;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.mdl-bubble--solo { max-width: 720px; }
.mdl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.mdl-bubble-text--big { font-size: 24px; font-style: italic; }

.mdl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.mdl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #5B8A57;
  margin: 0;
  max-width: 620px;
}
.mdl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.mdl-panel { background: #F2FBEF; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.mdl-panel--right { border-color: #2F9E44; }
.mdl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #3F6B3D;
  margin-bottom: 8px;
}
.mdl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.mdl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2C3A2A;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.mdl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.mdl-speaking-list li { margin-bottom: 8px; }

.mdl-recap-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #2C3A2A;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.mdl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.mdl-quiz-item {
  background: #F2FBEF;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.mdl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.mdl-reveal-btn {
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
.mdl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.mdl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.mdl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #D9EED4; flex-shrink: 0; }
.mdl-nav-btn {
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
.mdl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.mdl-nav-btn--primary { background: #FFC300; }
.mdl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.mdl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.mdl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.mdl-nav-dot.is-active { background: #2F9E44; }
`;
