import { useState } from "react";

const LESSON = {
  title: "All / Whole",
  formula: "all + (the/my/etc.) + noun  ·  (the/my/etc.) + whole + singular noun",
  leadIn: "Think of a day you worked non-stop, start to finish. Describe it using all day, then again using the whole day.",
  importance: [
    "All and whole express the exact same idea but sit on opposite sides of the article or possessive — a purely positional rule, so it's fast to master once the pattern clicks.",
    "\"All the day\" is a mistake almost every learner makes at some point, since the usual all + determiner + noun logic feels natural but is backwards for this specific pair.",
    "Choosing between the two also changes the rhythm and emphasis of a sentence, so it's a small style tool as well as a correctness rule.",
  ],
  teach: [
    {
      name: "All: Comes Before the Determiner",
      definition: "All sits before an article, possessive, or demonstrative (or before a plural noun with no determiner at all), and works with both countable and uncountable nouns.",
      examples: ["All the students passed.", "All my life, I've lived here.", "All day, she worked without a break."],
    },
    {
      name: "Whole: Comes After the Determiner",
      definition: "Whole always needs a determiner right before it, and sits after it, closer to the noun. It's only used with singular countable nouns.",
      examples: ["The whole class passed.", "My whole life, I've lived here.", "The whole day, she worked without a break."],
    },
  ],
  compareLeftLabel: "All: before the determiner",
  compareRightLabel: "Whole: after the determiner",
  compareNote: "Both can mean the same thing, but they sit on opposite sides of the article or possessive: all the day is wrong; it's either all day or the whole day.",
  comparePairs: [
    { left: "All the cake is gone.", right: "The whole cake is gone." },
    { left: "All my family came.", right: "My whole family came." },
  ],
  guided: [
    { prompt: "___ (All/Whole) the students passed the test.", answer: "All" },
    { prompt: "___ (All/Whole) my life, I've wanted to travel.", answer: "All" },
    { prompt: "He was nervous ___ (all/whole) day.", answer: "all" },
    { prompt: "The ___ (all/whole) class passed the test.", answer: "whole" },
    { prompt: "My ___ (all/whole) life, I've wanted to travel.", answer: "whole" },
    { prompt: "She ate the ___ (all/whole) pizza by herself!", answer: "whole" },
  ],
  practice: [
    "Write one sentence using all before a determiner.",
    "Write one sentence using whole after a determiner, describing the same idea.",
    "Try saying 'all the day' out loud. Why does it sound wrong?",
  ],
  wrapup: "All comes before the determiner (all the day, all my life). Whole comes after it (the whole day, my whole life) and only works with singular countable nouns.",
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
    <div className="awl-slide awl-slide--cover">
      <span className="awl-kind-badge">Lesson Time!</span>
      <h2 className="awl-cover-title">{lesson.title}</h2>
      <span className="awl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="awl-slide">
      <span className="awl-eyebrow">Warm-up</span>
      <div className="awl-bubble awl-bubble--solo">
        <p className="awl-bubble-text awl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="awl-slide awl-slide--part">
      <h3 className="awl-h">Why This Matters</h3>
      <div className="awl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="awl-importance-item">
            <span className="awl-importance-num">{i + 1}</span>
            <p className="awl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="awl-slide">
      <h3 className="awl-h">{concept.name}</h3>
      <p className="awl-definition">{concept.definition}</p>
      <div className="awl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="awl-bubble">
            <p className="awl-bubble-text">{ex}</p>
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
    <div className="awl-slide">
      <span className="awl-eyebrow">Think About It</span>
      <h3 className="awl-h">{left} <span className="awl-vs">vs</span> {right}</h3>
      <p className="awl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="awl-slide">
      <h3 className="awl-h">{lesson.compareLeftLabel} <span className="awl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="awl-compare-note">{lesson.compareNote}</p>
      <div className="awl-compare-grid">
        <div className="awl-panel">
          <span className="awl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="awl-compare-line">{pair.left}</p>)}
        </div>
        <div className="awl-panel awl-panel--right">
          <span className="awl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="awl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="awl-quiz-item">
      <p className="awl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="awl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="awl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="awl-slide awl-slide--part">
      <h3 className="awl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="awl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="awl-slide awl-slide--part">
      <h3 className="awl-h">Speaking &amp; writing practice</h3>
      <ul className="awl-list awl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="awl-slide">
      <h3 className="awl-h">Wrap-up</h3>
      <p className="awl-definition">{lesson.wrapup}</p>
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

export default function AllWholeLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="awl-shell">
      <style>{CSS}</style>
      <div className="awl-stage">
        <div className="awl-deck">
          <div className="awl-deck-header">
            <span className="awl-brand"><img src="/logo-sentenco.png" alt="" className="awl-brand-logo" />entenco</span>
            <span className="awl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="awl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="awl-nav-row">
            <button type="button" className="awl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="awl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`awl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="awl-nav-btn awl-nav-btn--primary"
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

.awl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #E9F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.awl-shell * { box-sizing: border-box; }

.awl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #CDE7E8;
  flex-shrink: 0;
}
.awl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.awl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.awl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #7FB8BD;
  white-space: nowrap;
  flex-shrink: 0;
}

.awl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.awl-deck {
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

.awl-deck-body {
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

.awl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.awl-slide--cover { gap: 14px; }
.awl-slide--part { justify-content: flex-start; }

.awl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #0E7C86;
}

.awl-kind-badge {
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
.awl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 64px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #0E7C86;
}

.awl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #0A5B62;
  background: #E9F5F5;
  border: 2.5px solid #0E7C86;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.awl-h {
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
.awl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.awl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #103F42;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.awl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #0E7C86;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.awl-bubble--solo { max-width: 720px; }
.awl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.awl-bubble-text--big { font-size: 24px; font-style: italic; }

.awl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.awl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #7FB8BD;
  margin: 0;
  max-width: 620px;
}
.awl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.awl-panel { background: #E9F5F5; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.awl-panel--right { border-color: #0E7C86; }
.awl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #0A5B62;
  margin-bottom: 8px;
}
.awl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.awl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #103F42;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.awl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.awl-speaking-list li { margin-bottom: 8px; }

.awl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.awl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #E9F5F5;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.awl-importance-num {
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
.awl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.awl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.awl-quiz-item {
  background: #E9F5F5;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.awl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.awl-reveal-btn {
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
.awl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.awl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.awl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #CDE7E8; flex-shrink: 0; }
.awl-nav-btn {
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
.awl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.awl-nav-btn--primary { background: #FFC300; }
.awl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.awl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.awl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.awl-nav-dot.is-active { background: #0E7C86; }
`;
