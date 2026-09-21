import { useState } from "react";

const LESSON = {
  title: "Whom",
  formula: "who = subject (he/she)  ·  whom = object (him/her), mainly formal writing",
  leadIn: "Quick test: “Who/Whom did you call?” Try answering with “I called ___.” Does “he” or “him” sound right?",
  importance: [
    "Whom is exactly the kind of rule people notice being broken — using it correctly signals careful, educated English, and misusing it (\"whom is calling?\") is even more noticeable than skipping it.",
    "The him/her test gives you a fast, reliable way to check yourself in the moment, instead of needing to recall abstract subject/object grammar terms.",
    "It survives in fixed, unavoidable phrases (\"to whom it may concern,\" formal letters, legal writing), so recognizing it there is genuinely necessary even if you rarely produce it yourself.",
  ],
  teach: [
    {
      name: "Whom as the Object",
      definition: "Whom replaces who when it's the object of a verb or preposition: the person something is done to, not the person doing it.",
      examples: ["Whom did you call?", "To whom should I address this letter?", "The man whom I met was kind."],
    },
    {
      name: "The Practical Rule: When You Can Skip It",
      definition: "In everyday spoken English, who is now widely accepted even in object position. Whom mostly survives in formal writing and fixed phrases like 'to whom it may concern.'",
      examples: ["Who did you call? (everyday, accepted)", "Whom did you call? (formal, correct)", "To whom it may concern, (fixed formal phrase)"],
    },
  ],
  compareLeftLabel: "Who: subject, and everyday object use",
  compareRightLabel: "Whom: formal object use",
  compareNote: "The test: if you can answer the question with him/her (object pronoun), use whom. If you'd answer with he/she (subject pronoun), use who. In casual speech, who covers both anyway.",
  comparePairs: [
    { left: "Who called you? (He called me, subject)", right: "Whom did you call? (I called him, object)" },
    { left: "Who is that? (subject)", right: "To whom does this belong? (object, after preposition)" },
  ],
  guided: [
    { prompt: "___ (Who/Whom) is knocking at the door? (subject)", answer: "Who" },
    { prompt: "___ (Who/Whom) called the meeting? (subject)", answer: "Who" },
    { prompt: "___ (Who/Whom) wants to go first? (subject)", answer: "Who" },
    { prompt: "___ (Who/Whom) did you invite to the party? (object)", answer: "Whom" },
    { prompt: "To ___ (who/whom) should I send this report? (object, after preposition)", answer: "whom" },
    { prompt: "The woman ___ (who/whom) I met yesterday was very kind. (object)", answer: "whom" },
  ],
  practice: [
    "Write one sentence using who as the subject of a question.",
    "Write one sentence using whom as the object, after a verb or preposition.",
    "Try the him/her test on one of your own sentences to check you picked correctly.",
  ],
  wrapup: "Whom is the object form of who: use it when you'd answer with him or her. It's fading from casual speech, but still expected in formal writing.",
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
    <div className="whml-slide whml-slide--cover">
      <span className="whml-kind-badge">Lesson Time!</span>
      <h2 className="whml-cover-title">{lesson.title}</h2>
      <span className="whml-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="whml-slide">
      <span className="whml-eyebrow">Warm-up</span>
      <div className="whml-bubble whml-bubble--solo">
        <p className="whml-bubble-text whml-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="whml-slide whml-slide--part">
      <h3 className="whml-h">Why Whom Matters</h3>
      <div className="whml-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="whml-importance-item">
            <span className="whml-importance-num">{i + 1}</span>
            <p className="whml-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="whml-slide">
      <h3 className="whml-h">{concept.name}</h3>
      <p className="whml-definition">{concept.definition}</p>
      <div className="whml-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="whml-bubble">
            <p className="whml-bubble-text">{ex}</p>
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
    <div className="whml-slide">
      <span className="whml-eyebrow">Think About It</span>
      <h3 className="whml-h">{left} <span className="whml-vs">vs</span> {right}</h3>
      <p className="whml-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="whml-slide">
      <h3 className="whml-h">{lesson.compareLeftLabel} <span className="whml-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="whml-compare-note">{lesson.compareNote}</p>
      <div className="whml-compare-grid">
        <div className="whml-panel">
          <span className="whml-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="whml-compare-line">{pair.left}</p>)}
        </div>
        <div className="whml-panel whml-panel--right">
          <span className="whml-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="whml-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="whml-quiz-item">
      <p className="whml-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="whml-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="whml-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="whml-slide whml-slide--part">
      <h3 className="whml-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="whml-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="whml-slide whml-slide--part">
      <h3 className="whml-h">Speaking &amp; writing practice</h3>
      <ul className="whml-list whml-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="whml-slide">
      <h3 className="whml-h">Wrap-up</h3>
      <p className="whml-definition">{lesson.wrapup}</p>
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

export default function WhomLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="whml-shell">
      <style>{CSS}</style>

      <div className="whml-stage">
        <div className="whml-deck">
          <div className="whml-deck-header">
            <span className="whml-brand"><img src="/logo-sentenco.png" alt="" className="whml-brand-logo" />entenco</span>
            <span className="whml-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="whml-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="whml-nav-row">
            <button type="button" className="whml-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="whml-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`whml-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="whml-nav-btn whml-nav-btn--primary"
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

.whml-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FCEEF2;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.whml-shell * { box-sizing: border-box; }

.whml-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #F5D3E0;
  flex-shrink: 0;
}
.whml-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.whml-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.whml-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #C2255C;
  white-space: nowrap;
  flex-shrink: 0;
}

.whml-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.whml-deck {
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

.whml-deck-body {
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

.whml-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.whml-slide--cover { gap: 14px; }
.whml-slide--part { justify-content: flex-start; }

.whml-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #C2255C;
}

.whml-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #C2255C;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.whml-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 60px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #C2255C;
}

.whml-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #8A1A41;
  background: #FCEEF2;
  border: 2.5px solid #C2255C;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.whml-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #C2255C;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.whml-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.whml-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3A1526;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.whml-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #C2255C;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.whml-bubble--solo { max-width: 720px; }
.whml-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.whml-bubble-text--big { font-size: 24px; font-style: italic; }

.whml-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.whml-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #D188A5;
  margin: 0;
  max-width: 620px;
}
.whml-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.whml-panel { background: #FCEEF2; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.whml-panel--right { border-color: #C2255C; }
.whml-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #8A1A41;
  margin-bottom: 8px;
}
.whml-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.whml-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A1526;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.whml-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.whml-speaking-list li { margin-bottom: 8px; }

.whml-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.whml-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FCEEF2;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.whml-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #C2255C;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.whml-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.whml-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.whml-quiz-item {
  background: #FCEEF2;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.whml-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.whml-reveal-btn {
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
.whml-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.whml-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.whml-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #F5D3E0; flex-shrink: 0; }
.whml-nav-btn {
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
.whml-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.whml-nav-btn--primary { background: #FFC300; }
.whml-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.whml-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.whml-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.whml-nav-dot.is-active { background: #C2255C; }
`;
