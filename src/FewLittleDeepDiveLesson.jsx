import { useState } from "react";

const LESSON = {
  title: "A Few / Few / Little / A Little",
  formula: "few/little = almost none  ·  a few/a little = some  ·  quite a few = a lot (idiom)",
  leadIn: "Has your English improved a little, or quite a few levels, since you started? Answer honestly!",
  importance: [
    "The tone shift between few and a few is invisible in writing but changes how a sentence feels completely — negative and limited versus small-but-fine, from just one missing article.",
    "Quite a few genuinely reverses the expected meaning, and it's common enough in real speech that misreading it can flip your understanding of a whole sentence.",
    "These small words carry real emotional weight in everyday conversation (disappointment, reassurance, encouragement), so getting the tone right matters as much as the grammar.",
  ],
  teach: [
    {
      name: "The Core Flip, Revisited",
      definition: "Few and little (no 'a') suggest almost none, often sounding negative. A few and a little suggest a small but real amount, sounding positive or neutral.",
      examples: ["We have few options left. (not many, feels limited)", "We have a few options left. (a small number, feels fine)", "There's little hope. / There's a little hope."],
    },
    {
      name: "Idiomatic Expressions",
      definition: "A handful of fixed phrases built from these words carry their own special meaning beyond the basic countable/uncountable rule.",
      examples: ["Quite a few people showed up. (actually means a lot!)", "Little by little, she improved. (gradually)", "Just a little bit more, please. (a small extra amount)"],
    },
  ],
  compareLeftLabel: "Few / Little: almost none",
  compareRightLabel: "Quite a few: actually a lot",
  compareNote: "Quite a few is the trickiest phrase here: despite starting with 'few,' it means a surprisingly large number, the opposite of what you'd expect.",
  comparePairs: [
    { left: "Few people came. (a disappointing turnout)", right: "Quite a few people came. (more than expected)" },
    { left: "I have little experience with this.", right: "Little by little, I'm gaining experience." },
  ],
  guided: [
    { prompt: "We have ___ (few/a few) time left; we should hurry. (almost none)", answer: "few" },
    { prompt: "I have ___ (few/a few) friends coming over tonight, should be fun. (a small number, positive)", answer: "a few" },
    { prompt: "She has ___ (few/little) patience for excuses. (almost none, uncountable)", answer: "little" },
    { prompt: "___ people actually showed up to the meeting, way more than we expected!", answer: "Quite a few" },
    { prompt: "___ by little, his English is improving.", answer: "Little" },
    { prompt: "Can I have just ___ (a little/little) more time to finish?", answer: "a little" },
  ],
  practice: [
    "Write one sentence using few or little to sound negative or limited.",
    "Write one sentence using quite a few to mean 'a lot,' correctly.",
    "Write one sentence using little by little to describe a gradual change.",
  ],
  wrapup: "Few and little (without 'a') sound negative, almost none. A few and a little sound positive, a small real amount. Quite a few is the exception: it actually means a lot.",
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
    <div className="fll-slide fll-slide--cover">
      <span className="fll-kind-badge">Lesson Time!</span>
      <h2 className="fll-cover-title">{lesson.title}</h2>
      <span className="fll-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="fll-slide">
      <span className="fll-eyebrow">Warm-up</span>
      <div className="fll-bubble fll-bubble--solo">
        <p className="fll-bubble-text fll-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="fll-slide fll-slide--part">
      <h3 className="fll-h">Why This Matters</h3>
      <div className="fll-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="fll-importance-item">
            <span className="fll-importance-num">{i + 1}</span>
            <p className="fll-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="fll-slide">
      <h3 className="fll-h">{concept.name}</h3>
      <p className="fll-definition">{concept.definition}</p>
      <div className="fll-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="fll-bubble">
            <p className="fll-bubble-text">{ex}</p>
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
    <div className="fll-slide">
      <span className="fll-eyebrow">Think About It</span>
      <h3 className="fll-h">{left} <span className="fll-vs">vs</span> {right}</h3>
      <p className="fll-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="fll-slide">
      <h3 className="fll-h">{lesson.compareLeftLabel} <span className="fll-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="fll-compare-note">{lesson.compareNote}</p>
      <div className="fll-compare-grid">
        <div className="fll-panel">
          <span className="fll-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="fll-compare-line">{pair.left}</p>)}
        </div>
        <div className="fll-panel fll-panel--right">
          <span className="fll-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="fll-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="fll-quiz-item">
      <p className="fll-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="fll-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="fll-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="fll-slide fll-slide--part">
      <h3 className="fll-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="fll-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="fll-slide fll-slide--part">
      <h3 className="fll-h">Speaking &amp; writing practice</h3>
      <ul className="fll-list fll-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="fll-slide">
      <h3 className="fll-h">Wrap-up</h3>
      <p className="fll-definition">{lesson.wrapup}</p>
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

export default function FewLittleDeepDiveLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="fll-shell">
      <style>{CSS}</style>
      <div className="fll-stage">
        <div className="fll-deck">
          <div className="fll-deck-header">
            <span className="fll-brand"><img src="/logo-sentenco.png" alt="" className="fll-brand-logo" />entenco</span>
            <span className="fll-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="fll-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="fll-nav-row">
            <button type="button" className="fll-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="fll-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`fll-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="fll-nav-btn fll-nav-btn--primary"
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

.fll-shell {
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
.fll-shell * { box-sizing: border-box; }

.fll-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #F5D3E0;
  flex-shrink: 0;
}
.fll-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.fll-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.fll-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #D188A5;
  white-space: nowrap;
  flex-shrink: 0;
}

.fll-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.fll-deck {
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

.fll-deck-body {
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

.fll-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.fll-slide--cover { gap: 14px; }
.fll-slide--part { justify-content: flex-start; }

.fll-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #C2255C;
}

.fll-kind-badge {
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
.fll-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 54px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #C2255C;
}

.fll-formula-chip {
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

.fll-h {
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
.fll-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.fll-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3A1526;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.fll-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #C2255C;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.fll-bubble--solo { max-width: 720px; }
.fll-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.fll-bubble-text--big { font-size: 24px; font-style: italic; }

.fll-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.fll-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #D188A5;
  margin: 0;
  max-width: 620px;
}
.fll-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.fll-panel { background: #FCEEF2; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.fll-panel--right { border-color: #C2255C; }
.fll-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #8A1A41;
  margin-bottom: 8px;
}
.fll-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.fll-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A1526;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.fll-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.fll-speaking-list li { margin-bottom: 8px; }

.fll-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.fll-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FCEEF2;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.fll-importance-num {
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
.fll-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.fll-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.fll-quiz-item {
  background: #FCEEF2;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fll-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.fll-reveal-btn {
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
.fll-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.fll-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.fll-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #F5D3E0; flex-shrink: 0; }
.fll-nav-btn {
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
.fll-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.fll-nav-btn--primary { background: #FFC300; }
.fll-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.fll-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.fll-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.fll-nav-dot.is-active { background: #C2255C; }
`;
