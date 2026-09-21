import { useState } from "react";

const LESSON = {
  title: "Linking Words",
  formula: "however/nevertheless (contrast)  ·  therefore/as a result (consequence): new sentence, comma after",
  leadIn: "Finish this sentence with a linking word: 'It was raining heavily. ___, we decided to go for a walk anyway.'",
  importance: [
    "Linking words are how formal writing signals logic across sentence boundaries — essays, reports, and emails lean on them far more than casual speech does.",
    "Getting the punctuation right (a period or semicolon before, a comma after) is often what separates a fluent sentence from a run-on or comma splice.",
    "Confusing a linking word with a conjunction — using however like but — is one of the most common intermediate mistakes, and exactly what this lesson heads off.",
  ],
  teach: [
    {
      name: "Contrast: However, Nevertheless",
      definition: "Unlike but, these linking words usually start their own sentence (after a period or semicolon) and are followed by a comma.",
      examples: ["It was raining. However, we went for a walk.", "She was exhausted; nevertheless, she finished the race.", "He's very shy. On the other hand, his sister is quite outgoing."],
    },
    {
      name: "Result: Therefore, As a Result",
      definition: "These linking words show a consequence, also starting a new sentence or following a semicolon, followed by a comma.",
      examples: ["He didn't study. Therefore, he failed the test.", "The bridge was closed; as a result, traffic was terrible.", "She worked hard all year. Consequently, she got a promotion."],
    },
  ],
  compareLeftLabel: "Linking word: between sentences",
  compareRightLabel: "Conjunction: within one sentence",
  compareNote: "A conjunction like but joins two clauses directly into one sentence. A linking word like however connects two separate sentences (or clauses after a semicolon), and needs its own comma.",
  comparePairs: [
    { left: "It was raining, but we went for a walk. (one sentence)", right: "It was raining. However, we went for a walk. (two sentences)" },
    { left: "He didn't study, so he failed.", right: "He didn't study. Therefore, he failed." },
  ],
  guided: [
    { prompt: "She was tired. ___, she kept working. (contrast)", answer: "However / Nevertheless" },
    { prompt: "He's very talented. ___, he never practices. (contrast)", answer: "However / Nevertheless" },
    { prompt: "I don't like the plan. ___, I'll go along with it. (contrast)", answer: "Nevertheless / However" },
    { prompt: "The store was closed. ___, we went home empty-handed. (result)", answer: "Therefore / As a result / Consequently" },
    { prompt: "He forgot his wallet; ___, he couldn't pay for lunch. (result, after a semicolon)", answer: "therefore / as a result" },
    { prompt: "The flight was delayed. ___, we missed our connection. (result)", answer: "As a result / Consequently" },
  ],
  practice: [
    "Write two sentences connected by however or nevertheless, with correct punctuation.",
    "Write two sentences connected by therefore or as a result, with correct punctuation.",
    "Compare one of your sentences with a similar one using a coordinating conjunction instead. What's different?",
  ],
  wrapup: "Linking words like however and therefore connect ideas across separate sentences (or after a semicolon), always followed by a comma. Conjunctions, by contrast, join clauses within one sentence.",
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
    <div className="lwl-slide lwl-slide--cover">
      <span className="lwl-kind-badge">Lesson Time!</span>
      <h2 className="lwl-cover-title">{lesson.title}</h2>
      <span className="lwl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="lwl-slide">
      <span className="lwl-eyebrow">Warm-up</span>
      <div className="lwl-bubble lwl-bubble--solo">
        <p className="lwl-bubble-text lwl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="lwl-slide lwl-slide--part">
      <h3 className="lwl-h">Why Linking Words Matter</h3>
      <div className="lwl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="lwl-importance-item">
            <span className="lwl-importance-num">{i + 1}</span>
            <p className="lwl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="lwl-slide">
      <h3 className="lwl-h">{concept.name}</h3>
      <p className="lwl-definition">{concept.definition}</p>
      <div className="lwl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="lwl-bubble">
            <p className="lwl-bubble-text">{ex}</p>
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
    <div className="lwl-slide">
      <span className="lwl-eyebrow">Think About It</span>
      <h3 className="lwl-h">{left} <span className="lwl-vs">vs</span> {right}</h3>
      <p className="lwl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="lwl-slide">
      <h3 className="lwl-h">{lesson.compareLeftLabel} <span className="lwl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="lwl-compare-note">{lesson.compareNote}</p>
      <div className="lwl-compare-grid">
        <div className="lwl-panel">
          <span className="lwl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="lwl-compare-line">{pair.left}</p>)}
        </div>
        <div className="lwl-panel lwl-panel--right">
          <span className="lwl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="lwl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="lwl-quiz-item">
      <p className="lwl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="lwl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="lwl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="lwl-slide lwl-slide--part">
      <h3 className="lwl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="lwl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="lwl-slide lwl-slide--part">
      <h3 className="lwl-h">Speaking &amp; writing practice</h3>
      <ul className="lwl-list lwl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="lwl-slide">
      <h3 className="lwl-h">Wrap-up</h3>
      <p className="lwl-definition">{lesson.wrapup}</p>
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

function stageLabel(slideType) {
  if (slideType.startsWith("teach")) return "Teach";
  if (slideType.startsWith("guided")) return "Guided Practice";
  switch (slideType) {
    case "cover": return "Cover";
    case "warmup": return "Warm-up";
    case "importance": return "Why It Matters";
    case "predict": return "Think About It";
    case "compare": return "Compare";
    case "practice": return "Practice";
    case "wrapup": return "Wrap-up";
    default: return "";
  }
}

export default function LinkingWordsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="lwl-shell">
      <style>{CSS}</style>

      <div className="lwl-stage">
        <div className="lwl-deck">
          <div className="lwl-deck-header">
            <span className="lwl-brand"><img src="/logo-sentenco.png" alt="" className="lwl-brand-logo" />entenco</span>
            <span className="lwl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="lwl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="lwl-nav-row">
            <button type="button" className="lwl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="lwl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`lwl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="lwl-nav-btn lwl-nav-btn--primary"
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

.lwl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #EAF7F7;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.lwl-shell * { box-sizing: border-box; }

.lwl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #CFEFEF;
  flex-shrink: 0;
}
.lwl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.lwl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.lwl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4C9AA1;
  white-space: nowrap;
  flex-shrink: 0;
}

.lwl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.lwl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 4px solid #1A1A1A;
  border-radius: 18px;
  padding: 20px 56px;
  box-shadow: 9px 9px 0 #1A1A1A;
  min-height: 0;
  overflow: hidden;
}

.lwl-deck-body {
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

.lwl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.lwl-slide--cover { gap: 14px; }
.lwl-slide--part { justify-content: flex-start; }

.lwl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #0E7C86;
}

.lwl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #0E7C86;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.lwl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #0E7C86;
}

.lwl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #0E7C86;
  background: #EAF7F7;
  border: 2.5px solid #0E7C86;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.lwl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #0E7C86;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.lwl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.lwl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1B3A3D;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.lwl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #0E7C86;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.lwl-bubble--solo { max-width: 720px; }
.lwl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.lwl-bubble-text--big { font-size: 24px; font-style: italic; }

.lwl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.lwl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #4C9AA1;
  margin: 0;
  max-width: 620px;
}
.lwl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.lwl-panel { background: #EAF7F7; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.lwl-panel--right { border-color: #0E7C86; }
.lwl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #0E5C63;
  margin-bottom: 8px;
}
.lwl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.lwl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1B3A3D;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.lwl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.lwl-speaking-list li { margin-bottom: 8px; }

.lwl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.lwl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #EAF7F7;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.lwl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #0E7C86;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.lwl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.lwl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.lwl-quiz-item {
  background: #EAF7F7;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.lwl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.lwl-reveal-btn {
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
.lwl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.lwl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.lwl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #CFEFEF; flex-shrink: 0; }
.lwl-nav-btn {
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
.lwl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.lwl-nav-btn--primary { background: #FFC300; }
.lwl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.lwl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.lwl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.lwl-nav-dot.is-active { background: #0E7C86; }
`;
