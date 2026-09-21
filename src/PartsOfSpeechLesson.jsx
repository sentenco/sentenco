import { useState } from "react";
import { useParams } from "react-router-dom";
import { getLessonByCode } from "./posTracks";
import { POS_COLORS, PosMark } from "./posVisuals";

function buildLessonSlides(lesson) {
  const slides = ["cover", "warmup"];
  if (lesson.concepts.length > 1) slides.push("predict", "compare");
  lesson.concepts.forEach((c, i) => {
    slides.push(`concept${i}`);
    if (c.mistake) slides.push(`mistake${i}`);
  });
  const guidedChunks = Math.ceil(lesson.guided.length / 3);
  for (let i = 0; i < guidedChunks; i++) slides.push(`guided${i}`);
  slides.push("independent", "wrapup");
  return slides;
}

function buildAssessmentSlides(lesson) {
  return ["cover", ...lesson.sections.map((s) => `part${s.part}`), "score"];
}

// Turns "The boy **runs** fast." into the sentence with the target word
// stamped in a little highlighter-marker sticker instead of plain text.
function ExampleLine({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className="posl-bubble-text">
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="posl-target">{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

function CoverSlide({ topic, lesson }) {
  return (
    <div className="posl-slide posl-slide--cover">
      <span className="posl-kind-badge">{lesson.kind === "Lesson" ? "Lesson!" : "Quiz Time!"}</span>
      <h2 className="posl-cover-title">{lesson.title}</h2>
      <p className="posl-cover-sub">Topic {topic.number} of 6</p>
      <p className="posl-cover-line">{lesson.kind === "Lesson" ? lesson.objective : lesson.testGoal}</p>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="posl-slide">
      <h3 className="posl-h">Warm-up!</h3>
      <div className="posl-bubble posl-bubble--solo">
        <p className="posl-bubble-text posl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ConceptSlide({ lesson, index }) {
  const concept = lesson.concepts[index];
  const accent = POS_COLORS[concept.color] || POS_COLORS.noun;
  return (
    <div className="posl-slide posl-concept" style={{ "--pos-accent": accent }}>
      <div className="posl-tag">
        <PosMark posKey={concept.color} />
        <span className="posl-tag-name">{concept.name}</span>
      </div>
      <p className="posl-definition">{concept.definition}</p>
      <div className="posl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="posl-bubble">
            <ExampleLine text={ex} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MistakeSlide({ lesson, index }) {
  const concept = lesson.concepts[index];
  const mistake = concept.mistake;
  const accent = POS_COLORS[concept.color] || POS_COLORS.noun;
  return (
    <div className="posl-slide posl-mistake" style={{ "--pos-accent": accent }}>
      <div className="posl-tag posl-tag--small">
        <PosMark posKey={concept.color} />
        <span className="posl-tag-name">{concept.name} watch-out</span>
      </div>
      <div className="posl-sfx posl-sfx--oops">Oops!</div>
      <p className="posl-mistake-wrong">{mistake.wrong}</p>
      <div className="posl-sfx posl-sfx--yes">Yes!</div>
      <p className="posl-mistake-right">{mistake.correct}</p>
      <p className="posl-mistake-note">{mistake.note}</p>
    </div>
  );
}

function PredictSlide({ lesson }) {
  const left = lesson.compareLeftLabel.split(" — ")[0].trim();
  const right = lesson.compareRightLabel.split(" — ")[0].trim();
  return (
    <div className="posl-slide">
      <span className="posl-eyebrow">Think About It</span>
      <h3 className="posl-h">{left} <span className="posl-vs">vs</span> {right}</h3>
      <p className="posl-compare-note">What's the difference? Take a guess before we explain.</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="posl-slide">
      <h3 className="posl-h">{lesson.compareLeftLabel} <span className="posl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="posl-compare-note">{lesson.compareNote}</p>
      <div className="posl-compare-grid">
        <div className="posl-panel">
          <span className="posl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="posl-compare-line">{pair.left}</p>)}
        </div>
        <div className="posl-panel posl-panel--right">
          <span className="posl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="posl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="posl-quiz-item">
      <p className="posl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="posl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="posl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="posl-slide posl-slide--part">
      <h3 className="posl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="posl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function IndependentSlide({ lesson }) {
  return (
    <div className="posl-slide posl-slide--part">
      <h3 className="posl-h">Independent practice</h3>
      <ul className="posl-list posl-speaking-list">
        {lesson.independent.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ topic, lesson }) {
  return (
    <div className="posl-slide">
      <h3 className="posl-h">Wrap-up!</h3>
      <div className="posl-bubble posl-bubble--solo">
        <p className="posl-bubble-text posl-bubble-text--big">{lesson.wrapup}</p>
      </div>
      <p className="posl-recap-line">Next: put it to the test in <strong>{topic.lessonB.code} · {topic.lessonB.title} (Assessment)</strong>.</p>
    </div>
  );
}

function McItem({ item, index }) {
  const [picked, setPicked] = useState(null);
  return (
    <div className="posl-quiz-item">
      <p className="posl-quiz-q">{index + 1}. {item.q}</p>
      <div className="posl-quiz-options">
        {item.options.map((opt, i) => {
          const answered = picked !== null;
          const isCorrect = i === item.correct;
          const isPicked = i === picked;
          const cls = answered && isCorrect ? "is-correct" : answered && isPicked ? "is-wrong" : "";
          return (
            <button
              key={i}
              type="button"
              className={`posl-quiz-opt ${cls}`}
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

function RevealItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="posl-quiz-item">
      <p className="posl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="posl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="posl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function ErrorFixItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="posl-quiz-item">
      <p className="posl-quiz-q posl-quiz-q--error">{item.wrong}</p>
      {shown ? (
        <p className="posl-reveal-correct">{item.correct}</p>
      ) : (
        <button type="button" className="posl-reveal-btn" onClick={() => setShown(true)}>Show correction</button>
      )}
    </div>
  );
}

function PartSlide({ lesson, partKey }) {
  const section = lesson.sections.find((s) => s.part === partKey);
  if (!section) return null;
  const items = section.items || [];

  return (
    <div className="posl-slide posl-slide--part">
      <span className="posl-part-badge">Part {section.part} · {section.label}</span>
      <p className="posl-part-desc">{section.desc}</p>

      {section.type === "mc" ? (
        <div className="posl-quiz-list">
          {items.map((item, i) => <McItem key={i} item={item} index={i} />)}
        </div>
      ) : section.type === "reveal" ? (
        <div className="posl-quiz-list">
          {items.map((item, i) => <RevealItem key={i} item={item} />)}
        </div>
      ) : section.type === "error" ? (
        <div className="posl-quiz-list">
          {items.map((item, i) => <ErrorFixItem key={i} item={item} />)}
        </div>
      ) : (
        <ul className="posl-list posl-speaking-list">
          {items.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      )}
    </div>
  );
}

function ScoreSlide({ topic, lesson }) {
  return (
    <div className="posl-slide">
      <h3 className="posl-h">Score and feedback</h3>
      <p className="posl-recap-line">{lesson.testGoal}</p>
      <p className="posl-recap-line">
        Go back over any part that was shaky before moving on
        {topic.number < 6 ? <> to <strong>Topic {topic.number + 1}</strong>.</> : <>. That's all 8 parts of speech -- nice work.</>}
      </p>
    </div>
  );
}

function stageLabel(slideType) {
  if (slideType === "cover") return "Cover";
  if (slideType === "warmup") return "Warm-up";
  if (slideType.startsWith("concept")) return "Teach";
  if (slideType.startsWith("mistake")) return "Watch Out";
  if (slideType === "predict") return "Think About It";
  if (slideType === "compare") return "Compare";
  if (slideType.startsWith("guided")) return "Guided Practice";
  if (slideType === "independent") return "Independent Practice";
  if (slideType === "wrapup") return "Wrap-up";
  if (slideType.startsWith("part")) return `Part ${slideType.replace("part", "")}`;
  if (slideType === "score") return "Score";
  return "";
}

function renderSlide(slideType, topic, lesson) {
  if (slideType === "cover") return <CoverSlide topic={topic} lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType.startsWith("concept")) return <ConceptSlide lesson={lesson} index={Number(slideType.replace("concept", ""))} />;
  if (slideType.startsWith("mistake")) return <MistakeSlide lesson={lesson} index={Number(slideType.replace("mistake", ""))} />;
  if (slideType === "predict") return <PredictSlide lesson={lesson} />;
  if (slideType === "compare") return <CompareSlide lesson={lesson} />;
  if (slideType.startsWith("guided")) return <GuidedSlide lesson={lesson} index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "independent") return <IndependentSlide lesson={lesson} />;
  if (slideType === "wrapup") return <WrapupSlide topic={topic} lesson={lesson} />;
  if (slideType.startsWith("part")) return <PartSlide lesson={lesson} partKey={slideType.replace("part", "")} />;
  if (slideType === "score") return <ScoreSlide topic={topic} lesson={lesson} />;
  return null;
}

export default function PartsOfSpeechLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const found = getLessonByCode(code);

  if (!found) {
    return (
      <div className="posl-shell">
        <style>{CSS}</style>
        <div className="posl-stage">
          <p className="posl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const { topic, lesson } = found;
  const slideTypes = lesson.kind === "Lesson" ? buildLessonSlides(lesson) : buildAssessmentSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="posl-shell">
      <style>{CSS}</style>
      <div className="posl-stage">
        <div className="posl-deck">
          <div className="posl-deck-header">
            <span className="posl-brand"><img src="/logo-sentenco.png" alt="" className="posl-brand-logo" />entenco</span>
            <span className="posl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="posl-deck-body" key={slideIdx}>
            {renderSlide(slideType, topic, lesson)}
          </div>
          <div className="posl-nav-row">
            <button type="button" className="posl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="posl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`posl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="posl-nav-btn posl-nav-btn--primary"
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

.posl-shell {
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
.posl-shell * { box-sizing: border-box; }

.posl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.posl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.posl-stage {
  flex: 1;
  width: 100%;
  max-width: 1080px;
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.posl-missing {
  font-family: 'Comic Neue', cursive, sans-serif;
  color: #6B5B3D;
  text-align: center;
  margin-top: 60px;
}

.posl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 4px solid #1A1A1A;
  border-radius: 18px;
  padding: 22px 52px;
  box-shadow: 9px 9px 0 #1A1A1A;
  min-height: 0;
  overflow: hidden;
}

.posl-deck-header {
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
.posl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6B5B3D;
  white-space: nowrap;
  flex-shrink: 0;
}

.posl-deck-body {
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

.posl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.posl-slide--cover { gap: 12px; }
.posl-slide--part { justify-content: flex-start; }

.posl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #ED1C24;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 20px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.posl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 64px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1;
  letter-spacing: 0.5px;
  text-shadow: 3px 3px 0 #FFC300;
}
.posl-cover-sub {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #8A7B5C;
  margin: 0;
}
.posl-cover-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #3A3226;
  line-height: 1.5;
  margin: 6px 0 0;
  max-width: 620px;
}

.posl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 36px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #ED1C24;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.posl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.posl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3A3226;
  line-height: 1.5;
  margin: 0;
  max-width: 680px;
}

/* ---- speech bubbles: the literal "parts of SPEECH" device ---- */
.posl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid var(--pos-accent, #1A1A1A);
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: flex-start;
  margin-left: 22px;
}
.posl-bubble::before {
  content: "";
  position: absolute;
  left: -14px;
  bottom: 10px;
  width: 16px;
  height: 16px;
  background: #FFFFFF;
  border-left: 3px solid var(--pos-accent, #1A1A1A);
  border-bottom: 3px solid var(--pos-accent, #1A1A1A);
  transform: rotate(45deg);
  border-radius: 0 0 0 3px;
}
.posl-bubble--solo { align-self: center; margin-left: 0; max-width: 720px; }
.posl-bubble--solo::before { left: 50%; bottom: -14px; transform: rotate(-45deg) translateX(-50%); border-left: none; border-right: 3px solid var(--pos-accent, #1A1A1A); }
.posl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
  text-align: left;
}
.posl-bubble-text--big { font-size: 24px; text-align: center; }
.posl-target {
  display: inline-block;
  background: var(--pos-accent, #FFC300);
  color: #FFFFFF;
  padding: 1px 8px;
  border-radius: 5px;
  transform: rotate(-2deg);
  margin: 0 1px;
}

.posl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 600px; align-items: center; }

/* ---- concept tag ---- */
.posl-tag { display: flex; align-items: center; gap: 10px; background: var(--pos-accent); border: 3px solid #1A1A1A; border-radius: 999px; padding: 6px 20px 6px 8px; transform: rotate(-2deg); }
.posl-tag--small { transform: rotate(-1.5deg); padding: 5px 16px 5px 6px; }
.posl-badge { width: 30px; height: 30px; flex-shrink: 0; border-radius: 50%; background: rgba(0,0,0,0.18); border: 2px solid #fff; display: flex; align-items: center; justify-content: center; }
.posl-tag--small .posl-badge { width: 22px; height: 22px; }
.posl-badge svg { width: 20px; height: 20px; }
.posl-tag--small .posl-badge svg { width: 14px; height: 14px; }
.posl-tag-name {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 26px;
  color: #FFFFFF;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.posl-tag--small .posl-tag-name { font-size: 18px; }

/* ---- mistake slide: comic SFX call-outs ---- */
.posl-mistake { gap: 10px; }
.posl-sfx {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 0.5px;
  padding: 2px 22px 6px;
  border: 3px solid #1A1A1A;
  border-radius: 10px;
  color: #fff;
}
.posl-sfx--oops { background: #ED1C24; transform: rotate(-3deg); }
.posl-sfx--yes { background: #2EC4B6; transform: rotate(2deg); }
.posl-mistake-wrong {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #8A736C;
  text-decoration: line-through;
  text-decoration-color: #ED1C24;
  text-decoration-thickness: 3px;
  margin: 0;
}
.posl-mistake-right {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1A1A1A;
  margin: 0;
}
.posl-mistake-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #8A7B5C;
  margin: 4px 0 0;
  max-width: 520px;
}

.posl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #6B5B3D;
  margin: 0;
  max-width: 620px;
}
.posl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.posl-panel { background: #FFF6E9; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.posl-panel--right { border-color: var(--pos-accent, #1A1A1A); }
.posl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
  color: #6B5B3D;
  margin-bottom: 8px;
}
.posl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.posl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A3226;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.posl-speaking-list { max-width: 680px; font-size: 17px; text-align: left; }
.posl-speaking-list li { margin-bottom: 9px; }

.posl-recap-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #3A3226;
  line-height: 1.5;
  margin: 0;
  max-width: 680px;
}

.posl-part-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.4px;
  color: #FFFFFF;
  background: #8338EC;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 18px 5px;
  transform: rotate(-2deg);
}
.posl-part-desc {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #6B5B3D;
  margin: 0;
}

.posl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 820px;
  text-align: left;
}
.posl-quiz-item {
  background: #FFF6E9;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.posl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}
.posl-quiz-q--error { color: #ED1C24; text-decoration: line-through; }

.posl-quiz-options { display: flex; flex-wrap: wrap; gap: 8px; }
.posl-quiz-opt {
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
.posl-quiz-opt:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.posl-quiz-opt:disabled { cursor: default; }
.posl-quiz-opt.is-correct { background: #2EC4B6; color: #fff; }
.posl-quiz-opt.is-wrong { background: #ED1C24; color: #fff; }

.posl-reveal-btn {
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
.posl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.posl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.posl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 3px dashed #E4D5B0; flex-shrink: 0; }
.posl-nav-btn {
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
.posl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.posl-nav-btn--primary { background: #FFC300; }
.posl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.posl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 320px; }
.posl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.posl-nav-dot.is-active { background: #FFC300; }
`;
