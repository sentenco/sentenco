import { useState } from "react";
import { useParams } from "react-router-dom";
import LESSONS, { getLessonByCode } from "./pvTracks";

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
    <div className="pvl-slide pvl-slide--cover">
      <span className="pvl-kind-badge">Lesson Time!</span>
      <h2 className="pvl-cover-title">{lesson.title}</h2>
      <p className="pvl-cover-sub">Lesson {lesson.number} of {LESSONS.length}</p>
      <span className="pvl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="pvl-slide">
      <span className="pvl-eyebrow">Warm-up</span>
      <div className="pvl-bubble pvl-bubble--solo">
        <p className="pvl-bubble-text pvl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="pvl-slide">
      <h3 className="pvl-h">{concept.name}</h3>
      <p className="pvl-definition">{concept.definition}</p>
      <div className="pvl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="pvl-bubble">
            <p className="pvl-bubble-text">{ex}</p>
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
    <div className="pvl-slide">
      <span className="pvl-eyebrow">Think About It</span>
      <h3 className="pvl-h">{left} <span className="pvl-vs">vs</span> {right}</h3>
      <p className="pvl-compare-note">What's the difference? Take a guess before we explain.</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="pvl-slide">
      <h3 className="pvl-h">{lesson.compareLeftLabel} <span className="pvl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="pvl-compare-note">{lesson.compareNote}</p>
      <div className="pvl-compare-grid">
        <div className="pvl-panel">
          <span className="pvl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="pvl-compare-line">{pair.left}</p>)}
        </div>
        <div className="pvl-panel pvl-panel--right">
          <span className="pvl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="pvl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="pvl-quiz-item">
      <p className="pvl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="pvl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="pvl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="pvl-slide pvl-slide--part">
      <h3 className="pvl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="pvl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="pvl-slide pvl-slide--part">
      <h3 className="pvl-h">Speaking &amp; writing practice</h3>
      <ul className="pvl-list pvl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="pvl-slide">
      <h3 className="pvl-h">Wrap-up</h3>
      <p className="pvl-definition">{lesson.wrapup}</p>
      {lesson.nextHint && <p className="pvl-recap-line">Next: <strong>{lesson.nextHint}</strong></p>}
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

export default function PassiveVoiceLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLessonByCode(code);

  if (!lesson) {
    return (
      <div className="pvl-shell">
        <style>{CSS}</style>
        <div className="pvl-stage">
          <p className="pvl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="pvl-shell">
      <style>{CSS}</style>
      <div className="pvl-stage">
        <div className="pvl-deck">
          <div className="pvl-deck-header">
            <span className="pvl-brand"><img src="/logo-sentivo.png" alt="" className="pvl-brand-logo" />entenco</span>
            <span className="pvl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="pvl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="pvl-nav-row">
            <button type="button" className="pvl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="pvl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`pvl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="pvl-nav-btn pvl-nav-btn--primary"
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

.pvl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F4F0FB;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.pvl-shell * { box-sizing: border-box; }

.pvl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.pvl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.pvl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.pvl-missing {
  font-family: 'Comic Neue', cursive, sans-serif;
  color: #5A4A8C;
  text-align: center;
  margin-top: 60px;
}

.pvl-deck {
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

.pvl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 1px solid #E1D8F5;
  flex-shrink: 0;
}
.pvl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #5A4A8C;
  white-space: nowrap;
  flex-shrink: 0;
}

.pvl-deck-body {
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

.pvl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.pvl-slide--cover { gap: 14px; }
.pvl-slide--part { justify-content: flex-start; }

.pvl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #6247AA;
}

.pvl-kind-badge {
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
.pvl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 60px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #6247AA;
}
.pvl-cover-sub {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #8A79BE;
  margin: 0;
}

.pvl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #6247AA;
  background: #F4F0FB;
  border: 2.5px solid #6247AA;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.pvl-h {
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
.pvl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.pvl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #2E2542;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.pvl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #6247AA;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.pvl-bubble--solo { max-width: 720px; }
.pvl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.pvl-bubble-text--big { font-size: 24px; font-style: italic; }

.pvl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.pvl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #8A79BE;
  margin: 0;
  max-width: 620px;
}
.pvl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.pvl-panel { background: #F4F0FB; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.pvl-panel--right { border-color: #6247AA; }
.pvl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #5A4A8C;
  margin-bottom: 8px;
}
.pvl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.pvl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2E2542;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.pvl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.pvl-speaking-list li { margin-bottom: 8px; }

.pvl-recap-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #2E2542;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.pvl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.pvl-quiz-item {
  background: #F4F0FB;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pvl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.pvl-reveal-btn {
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
.pvl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.pvl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.pvl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #E1D8F5; flex-shrink: 0; }
.pvl-nav-btn {
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
.pvl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.pvl-nav-btn--primary { background: #FFC300; }
.pvl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.pvl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.pvl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.pvl-nav-dot.is-active { background: #6247AA; }
`;
