import { useState } from "react";

const LESSON = {
  title: "Word Order",
  formula: "OSASCOMP: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose",
  leadIn: "Describe an object near you using three adjectives. Don't worry about the order yet, just try it.",
  importance: [
    "Stacking adjectives in the wrong order is one of the most reliable \"non-native\" tells in English — even advanced learners with strong vocabulary slip on this.",
    "Native speakers follow this sequence automatically without ever learning the rule — knowing it consciously is a genuine shortcut to sounding fluent faster.",
    "Most real sentences only stack two or three adjectives at once, so this isn't about memorizing all eight slots — it's about knowing which of a few comes first, something you'll use in almost every descriptive sentence.",
  ],
  osascomp: [
    { letter: "O", word: "Opinion", usage: "What you think or feel about something. It always comes first, before any factual description.", examples: ["a beautiful painting", "an ugly building"] },
    { letter: "S", word: "Size", usage: "How big or small something is.", examples: ["a small dog", "a huge house"] },
    { letter: "A", word: "Age", usage: "How old or new something is.", examples: ["an old car", "a young puppy"] },
    { letter: "S", word: "Shape", usage: "The form or shape of something.", examples: ["a round table", "a square box"] },
    { letter: "C", word: "Color", usage: "The color of something.", examples: ["a red apple", "a blue sky"] },
    { letter: "O", word: "Origin", usage: "Where something comes from.", examples: ["a French cheese", "an Italian car"] },
    { letter: "M", word: "Material", usage: "What something is made of.", examples: ["a wooden chair", "a leather jacket"] },
    { letter: "P", word: "Purpose", usage: "What something is used for. It sits right next to the noun, almost like part of it.", examples: ["a sleeping bag", "running shoes"] },
  ],
  compareLeftLabel: "Correct: OSASCOMP order",
  compareRightLabel: "Incorrect: random order",
  compareNote: "Native speakers follow this sequence instinctively: a sentence with adjectives out of order sounds noticeably wrong, even if every word is correct.",
  comparePairs: [
    { left: "a beautiful small old Italian leather handbag", right: "an Italian leather old small beautiful handbag" },
    { left: "a lovely round red French plate", right: "a French red round lovely plate" },
  ],
  guided: [
    { prompt: "Put in order: 'Italian / old / red' + car.", answer: "old red Italian car (age → color → origin)" },
    { prompt: "Put in order: 'wooden / small / round' + table.", answer: "small round wooden table (size → shape → material)" },
    { prompt: "Put in order: 'ugly / plastic / big' + toy.", answer: "ugly big plastic toy (opinion → size → material)" },
    { prompt: "Put in order: 'French / delicious / round' + cheese.", answer: "delicious round French cheese (opinion → shape → origin)" },
    { prompt: "Put in order: 'silver / beautiful / old' + necklace.", answer: "beautiful old silver necklace (opinion → age → material)" },
    { prompt: "Put in order: 'sleeping / small / blue' + bag.", answer: "small blue sleeping bag (size → color → purpose)" },
  ],
  practice: [
    "Describe an object using at least 3 adjectives in the correct OSASCOMP order.",
    "Write one sentence with 4 stacked adjectives, checking your order against OSASCOMP.",
    "Scramble one of your own sentences, then fix it back to the right order.",
  ],
  wrapup: "OSASCOMP (Opinion, Size, Age, Shape, Color, Origin, Material, Purpose) is the order adjectives stack in before a noun. Most sentences won't use all eight, but combining two or more always follows this sequence.",
};

function buildSlides(lesson) {
  const slides = ["cover", "warmup"];
  if (lesson.importance) slides.push("importance");
  lesson.osascomp.forEach((_, i) => slides.push(`osascomp${i}`));
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
    <div className="wol-slide wol-slide--cover">
      <span className="wol-kind-badge">Lesson Time!</span>
      <h2 className="wol-cover-title">{lesson.title}</h2>
      <span className="wol-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="wol-slide">
      <span className="wol-eyebrow">Warm-up</span>
      <div className="wol-bubble wol-bubble--solo">
        <p className="wol-bubble-text wol-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="wol-slide wol-slide--part">
      <h3 className="wol-h">Why Word Order Matters</h3>
      <div className="wol-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="wol-importance-item">
            <span className="wol-importance-num">{i + 1}</span>
            <p className="wol-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OsascompSlide({ lesson, index }) {
  const o = lesson.osascomp[index];
  return (
    <div className="wol-slide">
      <span className="wol-osc-eyebrow">OSASCOMP {index + 1} of {lesson.osascomp.length}</span>
      <div className="wol-osc-sticker">
        <span className="wol-osc-sticker-letter">{o.letter}</span>
        <h3 className="wol-osc-sticker-word">{o.word}</h3>
      </div>
      <p className="wol-definition">{o.usage}</p>
      <div className="wol-example-list">
        {o.examples.map((ex, i) => (
          <div key={i} className="wol-bubble">
            <p className="wol-bubble-text">{ex}</p>
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
    <div className="wol-slide">
      <span className="wol-eyebrow">Think About It</span>
      <h3 className="wol-h">{left} <span className="wol-vs">vs</span> {right}</h3>
      <p className="wol-compare-note">You've just seen the pattern. In your own words, why does the order matter?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="wol-slide">
      <h3 className="wol-h">{lesson.compareLeftLabel} <span className="wol-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="wol-compare-note">{lesson.compareNote}</p>
      <div className="wol-compare-grid">
        <div className="wol-panel">
          <span className="wol-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="wol-compare-line">{pair.left}</p>)}
        </div>
        <div className="wol-panel wol-panel--right">
          <span className="wol-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="wol-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="wol-quiz-item">
      <p className="wol-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="wol-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="wol-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="wol-slide wol-slide--part">
      <h3 className="wol-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="wol-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="wol-slide wol-slide--part">
      <h3 className="wol-h">Speaking &amp; writing practice</h3>
      <ul className="wol-list wol-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="wol-slide">
      <h3 className="wol-h">Wrap-up</h3>
      <p className="wol-definition">{lesson.wrapup}</p>
    </div>
  );
}

function renderSlide(slideType, lesson) {
  if (slideType === "cover") return <CoverSlide lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType === "importance") return <ImportanceSlide lesson={lesson} />;
  if (slideType.startsWith("osascomp")) return <OsascompSlide lesson={lesson} index={Number(slideType.replace("osascomp", ""))} />;
  if (slideType === "predict") return <PredictSlide lesson={lesson} />;
  if (slideType === "compare") return <CompareSlide lesson={lesson} />;
  if (slideType.startsWith("guided")) return <GuidedSlide lesson={lesson} index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "practice") return <PracticeSlide lesson={lesson} />;
  if (slideType === "wrapup") return <WrapupSlide lesson={lesson} />;
  return null;
}

function stageLabel(slideType) {
  if (slideType.startsWith("osascomp")) return "Teach";
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

export default function WordOrderLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="wol-shell">
      <style>{CSS}</style>

      <div className="wol-stage">
        <div className="wol-deck">
          <div className="wol-deck-header">
            <span className="wol-brand"><img src="/logo-sentivo.png" alt="" className="wol-brand-logo" />entenco</span>
            <span className="wol-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="wol-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="wol-nav-row">
            <button type="button" className="wol-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="wol-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`wol-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="wol-nav-btn wol-nav-btn--primary"
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

.wol-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F3EDE5;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.wol-shell * { box-sizing: border-box; }

.wol-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #E4D8C7;
  flex-shrink: 0;
}
.wol-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.wol-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.wol-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8A6748;
  white-space: nowrap;
  flex-shrink: 0;
}

.wol-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.wol-deck {
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

.wol-deck-body {
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

.wol-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.wol-slide--cover { gap: 14px; }
.wol-slide--part { justify-content: flex-start; }

.wol-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #8A6748;
}

.wol-kind-badge {
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
.wol-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 48px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #8A6748;
}

.wol-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #5C452F;
  background: #F3EDE5;
  border: 2.5px solid #8A6748;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.wol-h {
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
.wol-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.wol-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #332619;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.wol-osc-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #8A6748;
}
.wol-osc-sticker {
  display: flex;
  align-items: center;
  gap: 14px;
  transform: rotate(-2deg);
}
.wol-osc-sticker-letter {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 34px;
  color: #FFFFFF;
  background: #8A6748;
  border: 3px solid #1A1A1A;
  border-radius: 50%;
  width: 68px;
  height: 68px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 5px 5px 0 #1A1A1A;
}
.wol-osc-sticker-word {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 46px;
  letter-spacing: 0.5px;
  color: #1A1A1A;
  margin: 0;
  text-shadow: 3px 3px 0 #8A6748;
}

.wol-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #8A6748;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.wol-bubble--solo { max-width: 720px; }
.wol-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.wol-bubble-text--big { font-size: 24px; font-style: italic; }

.wol-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.wol-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #A98F6E;
  margin: 0;
  max-width: 620px;
}
.wol-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.wol-panel { background: #F3EDE5; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.wol-panel--right { border-color: #8A6748; }
.wol-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #5C452F;
  margin-bottom: 8px;
}
.wol-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.wol-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #332619;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.wol-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.wol-speaking-list li { margin-bottom: 8px; }

.wol-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.wol-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #F3EDE5;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.wol-importance-num {
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
.wol-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.wol-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.wol-quiz-item {
  background: #F3EDE5;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.wol-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.wol-reveal-btn {
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
.wol-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.wol-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.wol-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #E4D8C7; flex-shrink: 0; }
.wol-nav-btn {
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
.wol-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.wol-nav-btn--primary { background: #FFC300; }
.wol-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.wol-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.wol-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.wol-nav-dot.is-active { background: #8A6748; }
`;
