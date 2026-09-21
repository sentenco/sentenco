import { useState } from "react";

const LESSON = {
  title: "Direct & Indirect Objects",
  formula: "verb + person + thing (no preposition)  ·  verb + thing + to/for + person",
  leadIn: "Say one sentence about something you gave someone recently, two different ways.",
  importance: [
    "This pattern shows up in dozens of everyday verbs — give, tell, show, send, buy, bring — so mastering the order once pays off across a huge chunk of common speech.",
    "Using the wrong order with certain verbs (explain, describe, suggest) produces a sentence a native speaker would flag immediately — this lesson exists specifically to catch that.",
    "Being able to flip between both orders naturally gives you flexibility in sentence stress: which idea you put first changes what sounds most important.",
  ],
  teach: [
    {
      name: "No Preposition: Indirect Object First",
      definition: "With verbs like give, tell, show, and send, the indirect object (usually a person) can sit directly after the verb, before the direct object, with no preposition needed.",
      examples: ["Give me the book.", "She told him the truth.", "I sent her an email."],
    },
    {
      name: "With a Preposition: Direct Object First",
      definition: "The same idea can be said the other way around: direct object first, then to or for plus the indirect object. A few verbs (explain, describe, suggest) only allow this second form.",
      examples: ["Give the book to me.", "She explained the problem to him.", "He bought a gift for his sister."],
    },
  ],
  compareLeftLabel: "No preposition: person first",
  compareRightLabel: "With preposition: thing first",
  compareNote: "Most verbs allow both orders, but a few (explain, describe, suggest, announce) only work with the preposition. You can't say 'explain me the problem.'",
  comparePairs: [
    { left: "Give me the book.", right: "Give the book to me." },
    { left: "She told him the truth.", right: "She told the truth to him." },
  ],
  guided: [
    { prompt: "Give ___ the book. (no preposition)", answer: "me" },
    { prompt: "She told ___ the truth. (no preposition)", answer: "him" },
    { prompt: "I sent ___ an email. (no preposition)", answer: "her" },
    { prompt: "Give the book ___ me. (with preposition)", answer: "to" },
    { prompt: "He bought a gift ___ his sister. (with preposition)", answer: "for" },
    { prompt: "You can't say 'explain me the problem.' You must say 'Explain the problem ___ me.'", answer: "to" },
  ],
  practice: [
    "Write one sentence using the no-preposition order with give or tell.",
    "Rewrite it using the with-preposition order instead.",
    "Write one sentence with explain or suggest (remember, these only take the preposition form).",
  ],
  wrapup: "Many verbs let you drop the preposition and put the person right after the verb, or add to/for and put the thing first. A handful of verbs (explain, describe, suggest) only work with the preposition.",
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
    <div className="diol-slide diol-slide--cover">
      <span className="diol-kind-badge">Lesson Time!</span>
      <h2 className="diol-cover-title">{lesson.title}</h2>
      <span className="diol-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="diol-slide">
      <span className="diol-eyebrow">Warm-up</span>
      <div className="diol-bubble diol-bubble--solo">
        <p className="diol-bubble-text diol-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="diol-slide diol-slide--part">
      <h3 className="diol-h">Why This Matters</h3>
      <div className="diol-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="diol-importance-item">
            <span className="diol-importance-num">{i + 1}</span>
            <p className="diol-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="diol-slide">
      <h3 className="diol-h">{concept.name}</h3>
      <p className="diol-definition">{concept.definition}</p>
      <div className="diol-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="diol-bubble">
            <p className="diol-bubble-text">{ex}</p>
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
    <div className="diol-slide">
      <span className="diol-eyebrow">Think About It</span>
      <h3 className="diol-h">{left} <span className="diol-vs">vs</span> {right}</h3>
      <p className="diol-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="diol-slide">
      <h3 className="diol-h">{lesson.compareLeftLabel} <span className="diol-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="diol-compare-note">{lesson.compareNote}</p>
      <div className="diol-compare-grid">
        <div className="diol-panel">
          <span className="diol-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="diol-compare-line">{pair.left}</p>)}
        </div>
        <div className="diol-panel diol-panel--right">
          <span className="diol-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="diol-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="diol-quiz-item">
      <p className="diol-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="diol-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="diol-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="diol-slide diol-slide--part">
      <h3 className="diol-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="diol-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="diol-slide diol-slide--part">
      <h3 className="diol-h">Speaking &amp; writing practice</h3>
      <ul className="diol-list diol-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="diol-slide">
      <h3 className="diol-h">Wrap-up</h3>
      <p className="diol-definition">{lesson.wrapup}</p>
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

export default function DirectIndirectObjectsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="diol-shell">
      <style>{CSS}</style>

      <div className="diol-stage">
        <div className="diol-deck">
          <div className="diol-deck-header">
            <span className="diol-brand"><img src="/logo-sentenco.png" alt="" className="diol-brand-logo" />entenco</span>
            <span className="diol-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="diol-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="diol-nav-row">
            <button type="button" className="diol-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="diol-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`diol-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="diol-nav-btn diol-nav-btn--primary"
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

.diol-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FBEDED;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.diol-shell * { box-sizing: border-box; }

.diol-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #F0D3D3;
  flex-shrink: 0;
}
.diol-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.diol-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.diol-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #C08A8A;
  white-space: nowrap;
  flex-shrink: 0;
}

.diol-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.diol-deck {
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

.diol-deck-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 0;
  overflow-y: auto;
  gap: 20px;
  padding: 8px 56px;
}

.diol-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.diol-slide--cover { gap: 14px; }
.diol-slide--part { justify-content: flex-start; }

.diol-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #B23A3A;
}

.diol-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #B23A3A;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.diol-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 56px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #B23A3A;
}

.diol-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #832929;
  background: #FBEDED;
  border: 2.5px solid #B23A3A;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.diol-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #B23A3A;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.diol-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.diol-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3A1F1F;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.diol-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #B23A3A;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.diol-bubble--solo { max-width: 720px; }
.diol-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.diol-bubble-text--big { font-size: 24px; font-style: italic; }

.diol-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.diol-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #C08A8A;
  margin: 0;
  max-width: 620px;
}
.diol-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.diol-panel { background: #FBEDED; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.diol-panel--right { border-color: #B23A3A; }
.diol-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #832929;
  margin-bottom: 8px;
}
.diol-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.diol-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A1F1F;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.diol-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.diol-speaking-list li { margin-bottom: 8px; }

.diol-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.diol-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FBEDED;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.diol-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #B23A3A;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.diol-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.diol-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.diol-quiz-item {
  background: #FBEDED;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.diol-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.diol-reveal-btn {
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
.diol-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.diol-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.diol-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #F0D3D3; flex-shrink: 0; }
.diol-nav-btn {
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
.diol-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.diol-nav-btn--primary { background: #FFC300; }
.diol-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.diol-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.diol-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.diol-nav-dot.is-active { background: #B23A3A; }
`;
