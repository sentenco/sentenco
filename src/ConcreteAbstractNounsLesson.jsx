import { useState } from "react";

const LESSON = {
  title: "Concrete and Abstract Nouns",
  formula: "concrete = you can sense it (see, touch, hear) · abstract = you can only feel or know it",
  leadIn: "Compare these two nouns: \"table\" and \"happiness.\" Can you touch one of them? Can you touch the other?",
  importance: [
    "Abstract nouns (ideas, feelings, qualities) are everywhere in everyday conversation — talking about how you feel, what you believe, or what you want all leans on abstract nouns.",
    "Higher-level writing and speaking depend heavily on abstract nouns: freedom, opportunity, confidence, honesty — these carry the ideas behind an argument or a personal story.",
    "Recognizing the difference also helps with articles and countability later on, since many abstract nouns (like \"honesty\" or \"advice\") behave like uncountable nouns.",
  ],
  teach: [
    {
      name: "Concrete Nouns: Things You Can Sense",
      definition: "A concrete noun names something you can physically experience — see it, touch it, hear it, smell it, or taste it. If you can point at it, it's concrete.",
      examples: ["table", "music", "coffee", "rain"],
    },
    {
      name: "Abstract Nouns: Things You Can't Touch",
      definition: "An abstract noun names an idea, quality, feeling, or state — something real, but something you can only think about or feel, never physically touch.",
      examples: ["happiness", "freedom", "honesty", "courage"],
    },
  ],
  compareLeftLabel: "Concrete Noun",
  compareRightLabel: "Abstract Noun",
  compareNote: "Both are real nouns doing real grammatical work — the difference is purely whether the thing they name exists physically or only as an idea.",
  comparePairs: [
    { left: "She held the trophy tightly.", right: "She felt pride in that moment." },
    { left: "He locked the door.", right: "He values his freedom." },
    { left: "I smelled the fresh bread.", right: "I appreciated her honesty." },
  ],
  guided: [
    { prompt: "\"The dog barked at the mailman.\" — is \"dog\" concrete or abstract?", answer: "Concrete" },
    { prompt: "\"Her kindness surprised everyone.\" — is \"kindness\" concrete or abstract?", answer: "Abstract" },
    { prompt: "Is \"music\" concrete or abstract?", answer: "Concrete (you can hear it)" },
    { prompt: "Is \"justice\" concrete or abstract?", answer: "Abstract" },
    { prompt: "\"I need more ___ to finish this project.\" Fill in an abstract noun.", answer: "e.g., time, patience, confidence" },
    { prompt: "\"Please pass me the ___.\" Fill in a concrete noun.", answer: "e.g., salt, book, phone" },
  ],
  practice: [
    "List 3 concrete nouns and 3 abstract nouns from your own bedroom or workspace — concrete for objects, abstract for how it makes you feel.",
    "Write one sentence using a concrete noun as the subject, and one sentence using an abstract noun as the subject.",
    "Take an abstract noun like \"success\" and describe it using only concrete nouns and sensory details.",
  ],
  wrapup: "Concrete nouns name things you can sense with your body. Abstract nouns name ideas, feelings, and qualities you can only know in your mind.",
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
    <div className="can-slide can-slide--cover">
      <span className="can-kind-badge">Lesson Time!</span>
      <h2 className="can-cover-title">{lesson.title}</h2>
      <span className="can-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="can-slide">
      <span className="can-eyebrow">Warm-up</span>
      <div className="can-bubble can-bubble--solo">
        <p className="can-bubble-text can-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="can-slide can-slide--part">
      <h3 className="can-h">Why It Matters</h3>
      <div className="can-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="can-importance-item">
            <span className="can-importance-num">{i + 1}</span>
            <p className="can-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="can-slide">
      <h3 className="can-h">{concept.name}</h3>
      <p className="can-definition">{concept.definition}</p>
      <div className="can-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="can-bubble">
            <p className="can-bubble-text">{ex}</p>
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
    <div className="can-slide">
      <span className="can-eyebrow">Think About It</span>
      <h3 className="can-h">{left} <span className="can-vs">vs</span> {right}</h3>
      <p className="can-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="can-slide">
      <h3 className="can-h">{lesson.compareLeftLabel} <span className="can-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="can-compare-note">{lesson.compareNote}</p>
      <div className="can-compare-grid">
        <div className="can-panel">
          <span className="can-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="can-compare-line">{pair.left}</p>)}
        </div>
        <div className="can-panel can-panel--right">
          <span className="can-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="can-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="can-quiz-item">
      <p className="can-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="can-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="can-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="can-slide can-slide--part">
      <h3 className="can-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="can-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="can-slide can-slide--part">
      <h3 className="can-h">Speaking &amp; writing practice</h3>
      <ul className="can-list can-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="can-slide">
      <h3 className="can-h">Wrap-up</h3>
      <p className="can-definition">{lesson.wrapup}</p>
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

export default function ConcreteAbstractNounsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="can-shell">
      <style>{CSS}</style>
      <div className="can-stage">
        <div className="can-deck">
          <div className="can-deck-header">
            <span className="can-brand"><img src="/logo-sentenco.png" alt="" className="can-brand-logo" />entenco</span>
            <span className="can-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="can-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="can-nav-row">
            <button type="button" className="can-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="can-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`can-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="can-nav-btn can-nav-btn--primary"
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

.can-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F1EDFB;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.can-shell * { box-sizing: border-box; }

.can-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #E0D8F7;
  flex-shrink: 0;
}
.can-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.can-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.can-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #B6A6E8;
  white-space: nowrap;
  flex-shrink: 0;
}

.can-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.can-deck {
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

.can-deck-body {
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

.can-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.can-slide--cover { gap: 14px; }
.can-slide--part { justify-content: flex-start; }

.can-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #7B5FC9;
}

.can-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #7B5FC9;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.can-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #7B5FC9;
}

.can-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #52399A;
  background: #F1EDFB;
  border: 2.5px solid #7B5FC9;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.can-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #7B5FC9;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.can-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.can-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #332356;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.can-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #7B5FC9;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.can-bubble--solo { max-width: 720px; }
.can-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.can-bubble-text--big { font-size: 24px; font-style: italic; }

.can-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.can-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #B6A6E8;
  margin: 0;
  max-width: 620px;
}
.can-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.can-panel { background: #F1EDFB; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.can-panel--right { border-color: #7B5FC9; }
.can-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #52399A;
  margin-bottom: 8px;
}
.can-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.can-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #332356;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.can-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.can-speaking-list li { margin-bottom: 8px; }

.can-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.can-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #F1EDFB;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.can-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #7B5FC9;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.can-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.can-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.can-quiz-item {
  background: #F1EDFB;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.can-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.can-reveal-btn {
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
.can-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.can-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.can-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #E0D8F7; flex-shrink: 0; }
.can-nav-btn {
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
.can-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.can-nav-btn--primary { background: #FFC300; }
.can-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.can-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.can-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.can-nav-dot.is-active { background: #7B5FC9; }
`;
