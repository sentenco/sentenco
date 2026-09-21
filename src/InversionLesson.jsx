import { useState } from "react";

const LESSON = {
  title: "Inversion",
  formula: "negative word + auxiliary + subject (emphasis)  ·  had/were/should + subject (formal conditional, no if)",
  leadIn: "Rewrite this sentence for more dramatic effect: 'I have never seen such a mess.'",
  importance: [
    "Inversion is a signature marker of formal and literary register — using it well instantly raises how sophisticated your writing sounds, at the level examiners and readers actually notice.",
    "It shows up constantly in essays, speeches, and news writing, so recognizing it while reading is just as valuable as producing it yourself.",
    "The if-less formal conditional (Had I known..., Should you need...) is genuinely common in professional emails and reports, not just literature — a practical register shift, not a party trick.",
  ],
  teach: [
    {
      name: "Negative Adverbial Inversion",
      definition: "Starting a sentence with never, rarely, seldom, or not only flips the normal subject-verb order, creating emphasis in formal or literary English.",
      examples: ["Never have I seen such a mess.", "Rarely do we get a day off.", "Not only did she win, she broke the record."],
    },
    {
      name: "Formal Conditionals Without If",
      definition: "In formal English, if can be dropped from a conditional clause by inverting had, were, or should with the subject instead.",
      examples: ["Had I known, I would have come earlier.", "Were I in your position, I'd resign.", "Should you need help, just call me."],
    },
  ],
  compareLeftLabel: "Negative emphasis",
  compareRightLabel: "Formal conditional (no if)",
  compareNote: "Both invert the normal word order, but for different reasons: one adds dramatic emphasis, the other is just a more formal way to say if.",
  comparePairs: [
    { left: "Never have I felt so proud.", right: "Had I known, I wouldn't have come." },
    { left: "Rarely does he complain.", right: "Should you have questions, ask me." },
  ],
  guided: [
    { prompt: "___ have I tasted such delicious food. (negative emphasis)", answer: "Never" },
    { prompt: "Not only ___ she finish first, she set a new record. (inversion)", answer: "did" },
    { prompt: "Rarely ___ we see such dedication. (negative emphasis)", answer: "do" },
    { prompt: "___ I known about the meeting, I would have prepared. (formal conditional, no if)", answer: "Had" },
    { prompt: "___ you need anything, just call me. (formal conditional, no if)", answer: "Should" },
    { prompt: "___ I in your shoes, I'd apologize. (formal conditional, no if)", answer: "Were" },
  ],
  practice: [
    "Rewrite a normal sentence using never at the front, with inversion.",
    "Rewrite an if-conditional sentence using had, were, or should instead of if.",
    "Write one sentence using not only... for emphasis.",
  ],
  wrapup: "Negative adverbials like never and not only invert word order for emphasis. Had, were, and should can replace if in formal conditionals, using the same inverted structure.",
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
    <div className="ivl-slide ivl-slide--cover">
      <span className="ivl-kind-badge">Lesson Time!</span>
      <h2 className="ivl-cover-title">{lesson.title}</h2>
      <span className="ivl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="ivl-slide">
      <span className="ivl-eyebrow">Warm-up</span>
      <div className="ivl-bubble ivl-bubble--solo">
        <p className="ivl-bubble-text ivl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="ivl-slide ivl-slide--part">
      <h3 className="ivl-h">Why Inversion Matters</h3>
      <div className="ivl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="ivl-importance-item">
            <span className="ivl-importance-num">{i + 1}</span>
            <p className="ivl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="ivl-slide">
      <h3 className="ivl-h">{concept.name}</h3>
      <p className="ivl-definition">{concept.definition}</p>
      <div className="ivl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="ivl-bubble">
            <p className="ivl-bubble-text">{ex}</p>
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
    <div className="ivl-slide">
      <span className="ivl-eyebrow">Think About It</span>
      <h3 className="ivl-h">{left} <span className="ivl-vs">vs</span> {right}</h3>
      <p className="ivl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="ivl-slide">
      <h3 className="ivl-h">{lesson.compareLeftLabel} <span className="ivl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="ivl-compare-note">{lesson.compareNote}</p>
      <div className="ivl-compare-grid">
        <div className="ivl-panel">
          <span className="ivl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="ivl-compare-line">{pair.left}</p>)}
        </div>
        <div className="ivl-panel ivl-panel--right">
          <span className="ivl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="ivl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="ivl-quiz-item">
      <p className="ivl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="ivl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="ivl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="ivl-slide ivl-slide--part">
      <h3 className="ivl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="ivl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="ivl-slide ivl-slide--part">
      <h3 className="ivl-h">Speaking &amp; writing practice</h3>
      <ul className="ivl-list ivl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="ivl-slide">
      <h3 className="ivl-h">Wrap-up</h3>
      <p className="ivl-definition">{lesson.wrapup}</p>
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

export default function InversionLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="ivl-shell">
      <style>{CSS}</style>
      <div className="ivl-stage">
        <div className="ivl-deck">
          <div className="ivl-deck-header">
            <span className="ivl-brand"><img src="/logo-sentenco.png" alt="" className="ivl-brand-logo" />entenco</span>
            <span className="ivl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="ivl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="ivl-nav-row">
            <button type="button" className="ivl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="ivl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`ivl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="ivl-nav-btn ivl-nav-btn--primary"
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

.ivl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FDF0E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.ivl-shell * { box-sizing: border-box; }

.ivl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #F6DCC7;
  flex-shrink: 0;
}
.ivl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.ivl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.ivl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #C97C7C;
  white-space: nowrap;
  flex-shrink: 0;
}

.ivl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.ivl-deck {
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

.ivl-deck-body {
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

.ivl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.ivl-slide--cover { gap: 14px; }
.ivl-slide--part { justify-content: flex-start; }

.ivl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #E1592A;
}

.ivl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #E1592A;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.ivl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 56px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #E1592A;
}

.ivl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #E1592A;
  background: #FDF0E9;
  border: 2.5px solid #E1592A;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.ivl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #E1592A;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.ivl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.ivl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3D2416;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.ivl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #E1592A;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.ivl-bubble--solo { max-width: 720px; }
.ivl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.ivl-bubble-text--big { font-size: 24px; font-style: italic; }

.ivl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.ivl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #C97C7C;
  margin: 0;
  max-width: 620px;
}
.ivl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.ivl-panel { background: #FDF0E9; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.ivl-panel--right { border-color: #E1592A; }
.ivl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #9A4118;
  margin-bottom: 8px;
}
.ivl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.ivl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3D2416;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.ivl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.ivl-speaking-list li { margin-bottom: 8px; }

.ivl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.ivl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FDF0E9;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.ivl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #E1592A;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.ivl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.ivl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.ivl-quiz-item {
  background: #FDF0E9;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ivl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.ivl-reveal-btn {
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
.ivl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.ivl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.ivl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #F6DCC7; flex-shrink: 0; }
.ivl-nav-btn {
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
.ivl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.ivl-nav-btn--primary { background: #FFC300; }
.ivl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.ivl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.ivl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.ivl-nav-dot.is-active { background: #E1592A; }
`;
