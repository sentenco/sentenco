import { useState } from "react";
import { useParams } from "react-router-dom";
import LESSONS, { getLessonByCode } from "./spTracks";

// What each letter in a pattern label (SV, SVOC, etc.) stands for, plus a
// distinct color per role so the title-page legend reads at a glance --
// used only on the cover's legend chips, not as a per-lesson theme color
// (the course itself uses one shared chocolate-brown accent, matching the
// "soil" color Grammar Garden already assigns this module).
const ROLE_MEANINGS = {
  S: { word: "Subject", color: "#E0567A" },
  V: { word: "Verb", color: "#E8A33D" },
  O: { word: "Object", color: "#4A90D9" },
  C: { word: "Complement", color: "#9B5DE5" },
  A: { word: "Adverbial", color: "#F26430" },
};
const ROLE_ORDER = ["S", "V", "O", "C", "A"];

// Pulls the unique set of S/V/O/C/A letters actually used in this
// lesson's pattern label(s), e.g. "SVA · SVOA" -> [S, V, A, O], in a
// stable display order regardless of how the patterns themselves order
// their letters.
function lettersInPattern(patternLabel) {
  const set = new Set();
  for (const ch of patternLabel) {
    if (ROLE_MEANINGS[ch]) set.add(ch);
  }
  return ROLE_ORDER.filter((l) => set.has(l));
}

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
  const letters = lettersInPattern(lesson.patternLabel);
  return (
    <div className="spl-slide spl-slide--cover">
      <span className="spl-kind-badge">Lesson Time!</span>
      <h2 className="spl-cover-title">{lesson.patternLabel}</h2>
      <p className="spl-cover-sub">{lesson.title} · Lesson {lesson.number} of {LESSONS.length}</p>
      <div className="spl-legend">
        {letters.map((l) => (
          <span key={l} className="spl-legend-chip" style={{ "--role-color": ROLE_MEANINGS[l].color }}>
            <strong>{l}</strong> = {ROLE_MEANINGS[l].word}
          </span>
        ))}
      </div>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="spl-slide">
      <span className="spl-eyebrow">Warm-up</span>
      <div className="spl-bubble spl-bubble--solo">
        <p className="spl-bubble-text spl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="spl-slide">
      <h3 className="spl-h">{concept.name}</h3>
      <p className="spl-definition">{concept.definition}</p>
      <div className="spl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="spl-bubble">
            <p className="spl-bubble-text">{ex}</p>
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
    <div className="spl-slide">
      <span className="spl-eyebrow">Think About It</span>
      <h3 className="spl-h">{left} <span className="spl-vs">vs</span> {right}</h3>
      <p className="spl-compare-note">What's the difference? Take a guess before we explain.</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="spl-slide">
      <h3 className="spl-h">{lesson.compareLeftLabel} <span className="spl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="spl-compare-note">{lesson.compareNote}</p>
      <div className="spl-compare-grid">
        <div className="spl-panel">
          <span className="spl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="spl-compare-line">{pair.left}</p>)}
        </div>
        <div className="spl-panel spl-panel--right">
          <span className="spl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="spl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="spl-quiz-item">
      <p className="spl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="spl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="spl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="spl-slide spl-slide--part">
      <h3 className="spl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="spl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="spl-slide spl-slide--part">
      <h3 className="spl-h">Sentence-building practice</h3>
      <ul className="spl-list spl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="spl-slide">
      <h3 className="spl-h">Wrap-up</h3>
      <p className="spl-definition">{lesson.wrapup}</p>
      {lesson.nextHint && <p className="spl-recap-line">Next: <strong>{lesson.nextHint}</strong></p>}
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

export default function SentencePatternsLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLessonByCode(code);

  if (!lesson) {
    return (
      <div className="spl-shell">
        <style>{CSS}</style>
        <div className="spl-stage">
          <p className="spl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="spl-shell">
      <style>{CSS}</style>
      <div className="spl-stage">
        <div className="spl-deck">
          <div className="spl-deck-header">
            <span className="spl-brand"><img src="/logo-sentenco.png" alt="" className="spl-brand-logo" />entenco</span>
            <span className="spl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="spl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="spl-nav-row">
            <button type="button" className="spl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="spl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`spl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="spl-nav-btn spl-nav-btn--primary"
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

.spl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FFF6E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.spl-shell * { box-sizing: border-box; }

.spl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.spl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.spl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.spl-missing {
  font-family: 'Comic Neue', cursive, sans-serif;
  color: #6B5B3D;
  text-align: center;
  margin-top: 60px;
}

.spl-deck {
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

.spl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 1px solid #E4D5B0;
  flex-shrink: 0;
}
.spl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6B5B3D;
  white-space: nowrap;
  flex-shrink: 0;
}

.spl-deck-body {
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

.spl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.spl-slide--cover { gap: 14px; }
.spl-slide--part { justify-content: flex-start; }

.spl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #8B5E34;
}

.spl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #8B5E34;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.spl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 64px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #8B5E34;
}
.spl-cover-sub {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #8A7B5C;
  margin: 0;
}

.spl-legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 4px; max-width: 640px; }
.spl-legend-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1A1A1A;
  background: #FFF6E9;
  border: 2.5px solid var(--role-color);
  border-radius: 999px;
  padding: 6px 14px;
}
.spl-legend-chip strong { color: var(--role-color); font-family: 'Bangers', cursive; font-weight: 400; font-size: 16px; letter-spacing: 0.3px; }

.spl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #8B5E34;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.spl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.spl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3A3226;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.spl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #8B5E34;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.spl-bubble--solo { max-width: 720px; }
.spl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.spl-bubble-text--big { font-size: 24px; font-style: italic; }

.spl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.spl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #6B5B3D;
  margin: 0;
  max-width: 620px;
}
.spl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.spl-panel { background: #FFF6E9; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.spl-panel--right { border-color: #8B5E34; }
.spl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #6B5B3D;
  margin-bottom: 8px;
}
.spl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.spl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A3226;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.spl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.spl-speaking-list li { margin-bottom: 8px; }

.spl-recap-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #3A3226;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.spl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.spl-quiz-item {
  background: #FFF6E9;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.spl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.spl-reveal-btn {
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
.spl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.spl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.spl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #E4D5B0; flex-shrink: 0; }
.spl-nav-btn {
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
.spl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.spl-nav-btn--primary { background: #FFC300; }
.spl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.spl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.spl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.spl-nav-dot.is-active { background: #8B5E34; }
`;
