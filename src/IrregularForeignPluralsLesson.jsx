import { useState } from "react";

const LESSON = {
  title: "Irregular & Foreign Plurals",
  formula: "cactus → cacti · criterion → criteria (foreign pattern)  ·  child → children · mouse → mice (true irregular)",
  leadIn: "Do you know the plural of cactus? What about criterion? Take a guess before we explain.",
  importance: [
    "These words (cacti, criteria, children, people, mice) are genuinely common in everyday, academic, and professional writing, so getting them wrong stands out even in otherwise strong English.",
    "This is one of the cases where memorization really is the honest answer — knowing that upfront saves you from hunting for a rule that doesn't exist.",
    "Recognizing the Latin/Greek pattern unlocks a whole family of related words at once (criterion/criteria, phenomenon/phenomena, and more), so a few examples pay off far beyond just these.",
  ],
  teach: [
    {
      name: "Latin & Greek Plurals",
      definition: "Many English words borrowed from Latin or Greek keep their original plural pattern instead of just adding -s: once you know the pattern, it applies to a whole family of words.",
      examples: ["cactus → cacti", "criterion → criteria", "phenomenon → phenomena"],
    },
    {
      name: "True Irregulars",
      definition: "A small set of very common nouns change form completely, with no pattern connecting them to any other word: they simply have to be memorized one by one.",
      examples: ["child → children", "mouse → mice", "person → people"],
    },
  ],
  compareLeftLabel: "Foreign-pattern plurals",
  compareRightLabel: "True irregulars",
  compareNote: "Foreign-pattern plurals follow a predictable rule once you know the source language. True irregulars just have to be memorized: there's no pattern to fall back on.",
  comparePairs: [
    { left: "One cactus, two cacti.", right: "One child, two children." },
    { left: "One phenomenon, two phenomena.", right: "One mouse, two mice." },
  ],
  guided: [
    { prompt: "There are two ___ (cactus/cacti) in my garden.", answer: "cacti" },
    { prompt: "We need clear ___ (criterion/criteria) for judging the contest.", answer: "criteria" },
    { prompt: "Scientists studied several unusual ___ (phenomenon/phenomena).", answer: "phenomena" },
    { prompt: "The ___ (child/children) were playing outside.", answer: "children" },
    { prompt: "I saw two ___ (mouse/mice) in the kitchen!", answer: "mice" },
    { prompt: "Many ___ (person/people) attended the concert.", answer: "people" },
  ],
  practice: [
    "Write one sentence using a Latin/Greek-pattern plural, like cacti or criteria.",
    "Write one sentence using a true irregular plural, like children or mice.",
    "Look up one more foreign-pattern plural you didn't know, and write a sentence with it.",
  ],
  wrapup: "Some plurals follow a foreign-language pattern (cactus/cacti, criterion/criteria). Others are true irregulars with no pattern at all. Both groups just have to be learned by heart.",
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
    <div className="ifpl-slide ifpl-slide--cover">
      <span className="ifpl-kind-badge">Lesson Time!</span>
      <h2 className="ifpl-cover-title">{lesson.title}</h2>
      <span className="ifpl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="ifpl-slide">
      <span className="ifpl-eyebrow">Warm-up</span>
      <div className="ifpl-bubble ifpl-bubble--solo">
        <p className="ifpl-bubble-text ifpl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="ifpl-slide ifpl-slide--part">
      <h3 className="ifpl-h">Why This Matters</h3>
      <div className="ifpl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="ifpl-importance-item">
            <span className="ifpl-importance-num">{i + 1}</span>
            <p className="ifpl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="ifpl-slide">
      <h3 className="ifpl-h">{concept.name}</h3>
      <p className="ifpl-definition">{concept.definition}</p>
      <div className="ifpl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="ifpl-bubble">
            <p className="ifpl-bubble-text">{ex}</p>
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
    <div className="ifpl-slide">
      <span className="ifpl-eyebrow">Think About It</span>
      <h3 className="ifpl-h">{left} <span className="ifpl-vs">vs</span> {right}</h3>
      <p className="ifpl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="ifpl-slide">
      <h3 className="ifpl-h">{lesson.compareLeftLabel} <span className="ifpl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="ifpl-compare-note">{lesson.compareNote}</p>
      <div className="ifpl-compare-grid">
        <div className="ifpl-panel">
          <span className="ifpl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="ifpl-compare-line">{pair.left}</p>)}
        </div>
        <div className="ifpl-panel ifpl-panel--right">
          <span className="ifpl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="ifpl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="ifpl-quiz-item">
      <p className="ifpl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="ifpl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="ifpl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="ifpl-slide ifpl-slide--part">
      <h3 className="ifpl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="ifpl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="ifpl-slide ifpl-slide--part">
      <h3 className="ifpl-h">Speaking &amp; writing practice</h3>
      <ul className="ifpl-list ifpl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="ifpl-slide">
      <h3 className="ifpl-h">Wrap-up</h3>
      <p className="ifpl-definition">{lesson.wrapup}</p>
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

export default function IrregularForeignPluralsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="ifpl-shell">
      <style>{CSS}</style>
      <div className="ifpl-stage">
        <div className="ifpl-deck">
          <div className="ifpl-deck-header">
            <span className="ifpl-brand"><img src="/logo-sentivo.png" alt="" className="ifpl-brand-logo" />entenco</span>
            <span className="ifpl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="ifpl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="ifpl-nav-row">
            <button type="button" className="ifpl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="ifpl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`ifpl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="ifpl-nav-btn ifpl-nav-btn--primary"
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

.ifpl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F5EFE8;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.ifpl-shell * { box-sizing: border-box; }

.ifpl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #E4D8C7;
  flex-shrink: 0;
}
.ifpl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.ifpl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.ifpl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #A98F6E;
  white-space: nowrap;
  flex-shrink: 0;
}

.ifpl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.ifpl-deck {
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

.ifpl-deck-body {
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

.ifpl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.ifpl-slide--cover { gap: 14px; }
.ifpl-slide--part { justify-content: flex-start; }

.ifpl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #8A6748;
}

.ifpl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #8A6748;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.ifpl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 57px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #8A6748;
}

.ifpl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #5C452F;
  background: #F5EFE8;
  border: 2.5px solid #8A6748;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.ifpl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #8A6748;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.ifpl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.ifpl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #2E2214;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.ifpl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #8A6748;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.ifpl-bubble--solo { max-width: 720px; }
.ifpl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.ifpl-bubble-text--big { font-size: 24px; font-style: italic; }

.ifpl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.ifpl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #A98F6E;
  margin: 0;
  max-width: 620px;
}
.ifpl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.ifpl-panel { background: #F5EFE8; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.ifpl-panel--right { border-color: #8A6748; }
.ifpl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #5C452F;
  margin-bottom: 8px;
}
.ifpl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.ifpl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2E2214;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.ifpl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.ifpl-speaking-list li { margin-bottom: 8px; }

.ifpl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.ifpl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #F5EFE8;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.ifpl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #8A6748;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.ifpl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.ifpl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.ifpl-quiz-item {
  background: #F5EFE8;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ifpl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.ifpl-reveal-btn {
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
.ifpl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.ifpl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.ifpl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #E4D8C7; flex-shrink: 0; }
.ifpl-nav-btn {
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
.ifpl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.ifpl-nav-btn--primary { background: #FFC300; }
.ifpl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.ifpl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.ifpl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.ifpl-nav-dot.is-active { background: #8A6748; }
`;
