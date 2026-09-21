import { useState } from "react";
import { useParams } from "react-router-dom";
import { getLessonByCode } from "./vtTracks";
import VTTimeline from "./VTTimeline";

// Comic-book theme, matching the Parts of Speech course. One accent per
// time-unit (Present/Past/Future) instead of per-tense, since 12 distinct
// colors would be more noise than signal here -- the 3-unit grouping is
// already the course's own natural structure (tense.groupTitle).
function unitAccent(tense) {
  if (tense.number <= 4) return "#2A9D8F"; // Present -- fresh/now
  if (tense.number <= 8) return "#E76F51"; // Past -- warm/faded
  return "#5E60CE"; // Future -- forward-looking
}

function buildDiscussionSlides(lesson) {
  const slides = ["cover", "warmup", "definition", "timeline"];
  lesson.usages.forEach((_, i) => slides.push(`usage${i}`));
  slides.push("form", "signals", "ccq", "recap");
  return slides;
}
const TEST_SLIDES = ["cover", "partA", "partB", "partC", "partD", "partE", "score"];

function CoverSlide({ tense, lesson }) {
  return (
    <div className="vtl-slide vtl-slide--cover">
      <span className="vtl-kind-badge">{lesson.kind === "Discussion" ? "Let's Talk!" : "Quiz Time!"}</span>
      <h2 className="vtl-cover-title">{lesson.title}</h2>
      <p className="vtl-cover-sub">Tense {tense.number} of 12 · {tense.groupTitle}</p>
      {lesson.kind !== "Discussion" && <p className="vtl-cover-line">{lesson.testGoal}</p>}
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="vtl-slide">
      <span className="vtl-eyebrow">Warm-up</span>
      <div className="vtl-bubble vtl-bubble--solo">
        <p className="vtl-bubble-text vtl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function DefinitionSlide({ lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Definition</h3>
      <p className="vtl-definition">{lesson.definition}</p>
    </div>
  );
}

function TimelineSlide({ tense, lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Timeline</h3>
      <div className="vtl-timeline-wrap"><VTTimeline variant={tense.timelineVariant} /></div>
      <p className="vtl-timeline-note">{lesson.timelineNote}</p>
    </div>
  );
}

// One usage per slide, up to 3 examples each -- never all usages crammed
// onto one screen.
function UsageSlide({ lesson, index }) {
  const usage = lesson.usages[index];
  return (
    <div className="vtl-slide">
      <span className="vtl-usage-count">Usage {index + 1} of {lesson.usages.length}</span>
      <h3 className="vtl-h">{usage.label}</h3>
      <div className="vtl-example-list">
        {usage.examples.map((ex, i) => (
          <div key={i} className="vtl-bubble">
            <p className="vtl-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormSlide({ lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Form</h3>
      <div className="vtl-form-grid">
        <div className="vtl-form-col">
          <span className="vtl-form-label">Affirmative</span>
          {lesson.form.affirmative.map((f, i) => <p key={i} className="vtl-form-line">{f}</p>)}
        </div>
        <div className="vtl-form-col">
          <span className="vtl-form-label">Negative</span>
          {lesson.form.negative.map((f, i) => <p key={i} className="vtl-form-line">{f}</p>)}
        </div>
        <div className="vtl-form-col">
          <span className="vtl-form-label">Interrogative</span>
          {lesson.form.interrogative.map((f, i) => <p key={i} className="vtl-form-line">{f}</p>)}
        </div>
      </div>
    </div>
  );
}

function SignalsSlide({ lesson }) {
  return (
    <div className="vtl-slide">
      <div className="vtl-two-col">
        <div className="vtl-two-col-half">
          <h3 className="vtl-h">Signal words</h3>
          <div className="vtl-chip-row">
            {lesson.signalWords.map((w, i) => <span key={i} className="vtl-chip">{w}</span>)}
          </div>
        </div>
        <div className="vtl-two-col-half">
          <h3 className="vtl-h">Common mistakes</h3>
          <ul className="vtl-list">
            {lesson.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CcqSlide({ lesson }) {
  return (
    <div className="vtl-slide">
      <div className="vtl-two-col">
        <div className="vtl-two-col-half">
          <h3 className="vtl-h">Concept checking questions</h3>
          <ul className="vtl-list">
            {lesson.ccqs.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
        <div className="vtl-two-col-half">
          <h3 className="vtl-h">Quick interactive moments</h3>
          <ul className="vtl-list">
            {lesson.interactive.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function RecapSlide({ tense, lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Quick recap</h3>
      <p className="vtl-definition">{lesson.definition}</p>
      <p className="vtl-recap-line">Next: put it to the test in <strong>{tense.lessonB.code} · {tense.lessonB.title} (Test/Application)</strong>.</p>
    </div>
  );
}

function McItem({ item, index }) {
  const [picked, setPicked] = useState(null);
  return (
    <div className="vtl-quiz-item">
      <p className="vtl-quiz-q">{index + 1}. {item.q}</p>
      <div className="vtl-quiz-options">
        {item.options.map((opt, i) => {
          const answered = picked !== null;
          const isCorrect = i === item.correct;
          const isPicked = i === picked;
          const cls = answered && isCorrect ? "is-correct" : answered && isPicked ? "is-wrong" : "";
          return (
            <button
              key={i}
              type="button"
              className={`vtl-quiz-opt ${cls}`}
              onClick={() => setPicked(i)}
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

function TransformItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="vtl-quiz-item">
      <p className="vtl-quiz-q">{item.base}</p>
      {shown ? (
        <div className="vtl-reveal-block">
          <p><strong>Negative:</strong> {item.negative}</p>
          <p><strong>Question:</strong> {item.question}</p>
        </div>
      ) : (
        <button type="button" className="vtl-reveal-btn" onClick={() => setShown(true)}>Show negative &amp; question</button>
      )}
    </div>
  );
}

function ErrorFixItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="vtl-quiz-item">
      <p className="vtl-quiz-q vtl-quiz-q--error">{item.wrong}</p>
      {shown ? (
        <p className="vtl-reveal-correct">{item.correct}</p>
      ) : (
        <button type="button" className="vtl-reveal-btn" onClick={() => setShown(true)}>Show correction</button>
      )}
    </div>
  );
}

function PartSlide({ lesson, partKey }) {
  const section = lesson.sections.find((s) => s.part === partKey);
  if (!section) return null;
  const items = section.items || [];

  return (
    <div className="vtl-slide vtl-slide--part">
      <span className="vtl-part-badge">Part {section.part} · {section.label}</span>

      {partKey === "A" || partKey === "B" ? (
        <div className="vtl-quiz-list">
          {items.map((item, i) => <McItem key={i} item={item} index={i} />)}
        </div>
      ) : partKey === "C" ? (
        <div className="vtl-quiz-list">
          {items.map((item, i) => <TransformItem key={i} item={item} />)}
        </div>
      ) : partKey === "D" ? (
        <div className="vtl-quiz-list">
          {items.map((item, i) => <ErrorFixItem key={i} item={item} />)}
        </div>
      ) : (
        <ul className="vtl-list vtl-speaking-list">
          {items.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      )}
    </div>
  );
}

function ScoreSlide({ tense, lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Score and feedback</h3>
      <p className="vtl-recap-line">{lesson.testGoal}</p>
      <p className="vtl-recap-line">
        Go back over any part that was shaky before moving on
        {tense.number < 12 ? <> to <strong>Tense {tense.number + 1}</strong>.</> : <>. That's all 12 tenses -- nice work.</>}
      </p>
    </div>
  );
}

function stageLabel(slideType) {
  if (slideType === "cover") return "Cover";
  if (slideType === "warmup") return "Warm-up";
  if (slideType === "definition") return "Definition";
  if (slideType === "timeline") return "Timeline";
  if (slideType.startsWith("usage")) return "Usage";
  if (slideType === "form") return "Form";
  if (slideType === "signals") return "Signal Words";
  if (slideType === "ccq") return "Check Questions";
  if (slideType === "recap") return "Recap";
  if (slideType.startsWith("part")) return `Part ${slideType.replace("part", "")}`;
  if (slideType === "score") return "Score";
  return "";
}

function renderSlide(slideType, tense, lesson) {
  if (slideType === "cover") return <CoverSlide tense={tense} lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType === "definition") return <DefinitionSlide lesson={lesson} />;
  if (slideType === "timeline") return <TimelineSlide tense={tense} lesson={lesson} />;
  if (slideType.startsWith("usage")) return <UsageSlide lesson={lesson} index={Number(slideType.replace("usage", ""))} />;
  if (slideType === "form") return <FormSlide lesson={lesson} />;
  if (slideType === "signals") return <SignalsSlide lesson={lesson} />;
  if (slideType === "ccq") return <CcqSlide lesson={lesson} />;
  if (slideType === "recap") return <RecapSlide tense={tense} lesson={lesson} />;
  if (slideType.startsWith("part")) return <PartSlide lesson={lesson} partKey={slideType.replace("part", "")} />;
  if (slideType === "score") return <ScoreSlide tense={tense} lesson={lesson} />;
  return null;
}

export default function VerbTensesLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const found = getLessonByCode(code);

  if (!found) {
    return (
      <div className="vtl-shell">
        <style>{CSS}</style>
        <div className="vtl-stage">
          <p className="vtl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const { tense, lesson } = found;
  const slideTypes = lesson.kind === "Discussion" ? buildDiscussionSlides(lesson) : TEST_SLIDES;
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;
  const accent = unitAccent(tense);

  return (
    <div className="vtl-shell">
      <style>{CSS}</style>
      <div className="vtl-stage">
        <div className="vtl-deck" style={{ "--unit-accent": accent }}>
          <div className="vtl-deck-header">
            <span className="vtl-brand"><img src="/logo-sentivo.png" alt="" className="vtl-brand-logo" />entenco</span>
            <span className="vtl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="vtl-deck-body" key={slideIdx}>
            {renderSlide(slideType, tense, lesson)}
          </div>
          <div className="vtl-nav-row">
            <button type="button" className="vtl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="vtl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`vtl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="vtl-nav-btn vtl-nav-btn--primary"
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

.vtl-shell {
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
.vtl-shell * { box-sizing: border-box; }

.vtl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.vtl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.vtl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.vtl-missing {
  font-family: 'Comic Neue', cursive, sans-serif;
  color: #6B5B3D;
  text-align: center;
  margin-top: 60px;
}

.vtl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 4px solid #1A1A1A;
  border-radius: 18px;
  padding: 22px 52px;
  box-shadow: 9px 9px 0 #1A1A1A;
  min-height: 0;
}

.vtl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -22px -52px 16px;
  padding: 14px 52px;
  background: #FFFFFF;
  border-bottom: 1px solid #E4D5B0;
  flex-shrink: 0;
}
.vtl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6B5B3D;
  white-space: nowrap;
  flex-shrink: 0;
}

.vtl-deck-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 0;
  overflow-y: auto;
  gap: 18px;
  padding: 8px 0;
}

.vtl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.vtl-slide--cover { gap: 12px; }
.vtl-slide--part { justify-content: flex-start; }

.vtl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: var(--unit-accent, #5E60CE);
}

.vtl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: var(--unit-accent, #5E60CE);
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 20px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.vtl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 58px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1;
  letter-spacing: 0.5px;
  text-shadow: 3px 3px 0 var(--unit-accent, #5E60CE);
}
.vtl-cover-sub {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #8A7B5C;
  margin: 0;
}
.vtl-cover-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #3A3226;
  line-height: 1.5;
  margin: 6px 0 0;
  max-width: 620px;
}

.vtl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 34px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: var(--unit-accent, #5E60CE);
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}

.vtl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: #3A3226;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

/* ---- speech bubbles, shared with the warm-up question and usage examples ---- */
.vtl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid var(--unit-accent, #5E60CE);
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.vtl-bubble--solo { max-width: 720px; }
.vtl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.vtl-bubble-text--big { font-size: 24px; font-style: italic; }

.vtl-usage-count {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--unit-accent, #5E60CE);
}
.vtl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.vtl-timeline-wrap { background: #FFF6E9; border: 3px solid #1A1A1A; border-radius: 14px; padding: 20px; width: 100%; max-width: 620px; }
.vtl-timeline-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #6B5B3D;
  margin: 0;
  max-width: 620px;
}

.vtl-form-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; width: 100%; max-width: 780px; }
.vtl-form-col { background: #FFF6E9; border: 2.5px solid #1A1A1A; border-radius: 12px; padding: 14px 16px; display: flex; flex-direction: column; gap: 8px; text-align: left; }
.vtl-form-label {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.4px;
  color: var(--unit-accent, #5E60CE);
}
.vtl-form-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #1A1A1A;
  margin: 0;
}

.vtl-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 34px; width: 100%; max-width: 860px; text-align: left; }
.vtl-two-col-half { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }
.vtl-two-col-half .vtl-h { font-size: 24px; }

.vtl-chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
.vtl-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1A1A1A;
  background: #FFF6E9;
  border: 2px solid var(--unit-accent, #5E60CE);
  border-radius: 999px;
  padding: 5px 14px;
}

.vtl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A3226;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}

.vtl-recap-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #3A3226;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.vtl-part-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.4px;
  color: #FFFFFF;
  background: var(--unit-accent, #5E60CE);
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 18px 5px;
  transform: rotate(-2deg);
}

.vtl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.vtl-quiz-item {
  background: #FFF6E9;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.vtl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}
.vtl-quiz-q--error { color: #ED1C24; text-decoration: line-through; }

.vtl-quiz-options { display: flex; flex-wrap: wrap; gap: 8px; }
.vtl-quiz-opt {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1A1A1A;
  background: #FFFFFF;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 7px 14px;
  cursor: pointer;
  box-shadow: 3px 3px 0 #1A1A1A;
}
.vtl-quiz-opt:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.vtl-quiz-opt:disabled { cursor: default; }
.vtl-quiz-opt.is-correct { background: #2EC4B6; color: #fff; }
.vtl-quiz-opt.is-wrong { background: #ED1C24; color: #fff; }

.vtl-reveal-btn {
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
.vtl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.vtl-reveal-block { display: flex; flex-direction: column; gap: 4px; }
.vtl-reveal-block p, .vtl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.vtl-speaking-list { max-width: 720px; font-size: 18px; }
.vtl-speaking-list li { margin-bottom: 8px; }

.vtl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 3px dashed #E4D5B0; flex-shrink: 0; }
.vtl-nav-btn {
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
.vtl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.vtl-nav-btn--primary { background: #FFC300; }
.vtl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.vtl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.vtl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.vtl-nav-dot.is-active { background: var(--unit-accent, #5E60CE); }
`;
