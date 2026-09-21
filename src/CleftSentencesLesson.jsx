import { useState } from "react";

const LESSON = {
  title: "Cleft Sentences",
  formula: "It + be + emphasized element + who/that... (it-cleft)  ·  What + clause + be + emphasized element (wh-cleft)",
  leadIn: "Say the same fact two different ways: “My sister cooked dinner.” Now make “my sister” the most important word in the sentence.",
  importance: [
    "This is a genuine tool for controlling emphasis without relying on stress or punctuation alone — it makes your meaning unmistakable in writing, where tone of voice isn't available.",
    "Advanced writing and speech use cleft sentences constantly for persuasion and clarity (\"It's the price that worries me\"), so recognizing them also boosts reading comprehension.",
    "Both structures share one purpose but opposite construction, so once the underlying logic clicks, you gain two flexible ways to restructure any sentence for impact.",
  ],
  teach: [
    {
      name: "It-Clefts: Spotlight with \"It was...\"",
      definition: "It + be + the emphasized element + who/that + the rest of the sentence. This structure exists purely to put the spotlight on one specific word or phrase.",
      examples: ["It was Sarah who called.", "It was yesterday that we met.", "It's the price that worries me."],
    },
    {
      name: "Wh-Clefts: Spotlight with \"What...\"",
      definition: "What + clause + be + the emphasized element. This version builds the spotlight from the other end: starting with what, then revealing the important part at the end.",
      examples: ["What I need is sleep.", "What surprised us was his reaction.", "What she wants is a new job."],
    },
  ],
  compareLeftLabel: "It-cleft: spotlights with \"It was...\"",
  compareRightLabel: "Wh-cleft: spotlights with \"What...\"",
  compareNote: "Both structures exist purely to emphasize one piece of information: they just build the spotlight from opposite ends of the sentence.",
  comparePairs: [
    { left: "It was the manager who called the meeting.", right: "What the manager did was call the meeting." },
    { left: "It was money that motivated him.", right: "What motivated him was money." },
  ],
  guided: [
    { prompt: "___ Sarah who called this morning. (it-cleft)", answer: "It was" },
    { prompt: "It was the price ___ (who/that) worried me most. (it-cleft)", answer: "that" },
    { prompt: "It ___ (was/is) my brother who fixed the car. (it-cleft, past)", answer: "was" },
    { prompt: "___ I need is a good night's sleep. (wh-cleft)", answer: "What" },
    { prompt: "What surprised everyone ___ (was/is) his apology. (wh-cleft, past)", answer: "was" },
    { prompt: "___ she wants is a new job, not more money. (wh-cleft)", answer: "What" },
  ],
  practice: [
    "Write one it-cleft sentence emphasizing who did something.",
    "Write one wh-cleft sentence emphasizing what someone wants or needs.",
    "Take a plain sentence and rewrite it twice: once as an it-cleft, once as a wh-cleft.",
  ],
  wrapup: "It-clefts and wh-clefts both exist to shine a spotlight on one specific piece of information: it-clefts start with 'It was...', wh-clefts start with 'What...'.",
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
    <div className="cflt-slide cflt-slide--cover">
      <span className="cflt-kind-badge">Lesson Time!</span>
      <h2 className="cflt-cover-title">{lesson.title}</h2>
      <span className="cflt-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="cflt-slide">
      <span className="cflt-eyebrow">Warm-up</span>
      <div className="cflt-bubble cflt-bubble--solo">
        <p className="cflt-bubble-text cflt-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="cflt-slide cflt-slide--part">
      <h3 className="cflt-h">Why Cleft Sentences Matter</h3>
      <div className="cflt-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="cflt-importance-item">
            <span className="cflt-importance-num">{i + 1}</span>
            <p className="cflt-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="cflt-slide">
      <h3 className="cflt-h">{concept.name}</h3>
      <p className="cflt-definition">{concept.definition}</p>
      <div className="cflt-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="cflt-bubble">
            <p className="cflt-bubble-text">{ex}</p>
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
    <div className="cflt-slide">
      <span className="cflt-eyebrow">Think About It</span>
      <h3 className="cflt-h">{left} <span className="cflt-vs">vs</span> {right}</h3>
      <p className="cflt-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="cflt-slide">
      <h3 className="cflt-h">{lesson.compareLeftLabel} <span className="cflt-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="cflt-compare-note">{lesson.compareNote}</p>
      <div className="cflt-compare-grid">
        <div className="cflt-panel">
          <span className="cflt-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="cflt-compare-line">{pair.left}</p>)}
        </div>
        <div className="cflt-panel cflt-panel--right">
          <span className="cflt-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="cflt-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="cflt-quiz-item">
      <p className="cflt-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="cflt-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="cflt-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="cflt-slide cflt-slide--part">
      <h3 className="cflt-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="cflt-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="cflt-slide cflt-slide--part">
      <h3 className="cflt-h">Speaking &amp; writing practice</h3>
      <ul className="cflt-list cflt-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="cflt-slide">
      <h3 className="cflt-h">Wrap-up</h3>
      <p className="cflt-definition">{lesson.wrapup}</p>
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

export default function CleftSentencesLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="cflt-shell">
      <style>{CSS}</style>
      <div className="cflt-stage">
        <div className="cflt-deck">
          <div className="cflt-deck-header">
            <span className="cflt-brand"><img src="/logo-sentenco.png" alt="" className="cflt-brand-logo" />entenco</span>
            <span className="cflt-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="cflt-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="cflt-nav-row">
            <button type="button" className="cflt-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="cflt-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`cflt-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="cflt-nav-btn cflt-nav-btn--primary"
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

.cflt-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #EFF7F0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.cflt-shell * { box-sizing: border-box; }

.cflt-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #D6E8D9;
  flex-shrink: 0;
}
.cflt-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.cflt-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.cflt-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8FBB98;
  white-space: nowrap;
  flex-shrink: 0;
}

.cflt-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.cflt-deck {
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

.cflt-deck-body {
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

.cflt-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.cflt-slide--cover { gap: 14px; }
.cflt-slide--part { justify-content: flex-start; }

.cflt-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #4C9A5D;
}

.cflt-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #4C9A5D;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.cflt-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #4C9A5D;
}

.cflt-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2E6E3D;
  background: #EFF7F0;
  border: 2.5px solid #4C9A5D;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.cflt-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #4C9A5D;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.cflt-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.cflt-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1F3A26;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.cflt-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #4C9A5D;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.cflt-bubble--solo { max-width: 720px; }
.cflt-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.cflt-bubble-text--big { font-size: 24px; font-style: italic; }

.cflt-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.cflt-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #8FBB98;
  margin: 0;
  max-width: 620px;
}
.cflt-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.cflt-panel { background: #EFF7F0; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.cflt-panel--right { border-color: #4C9A5D; }
.cflt-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #2E6E3D;
  margin-bottom: 8px;
}
.cflt-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.cflt-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F3A26;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.cflt-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.cflt-speaking-list li { margin-bottom: 8px; }

.cflt-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.cflt-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #EFF7F0;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.cflt-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #4C9A5D;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.cflt-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.cflt-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.cflt-quiz-item {
  background: #EFF7F0;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cflt-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.cflt-reveal-btn {
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
.cflt-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.cflt-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.cflt-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #D6E8D9; flex-shrink: 0; }
.cflt-nav-btn {
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
.cflt-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.cflt-nav-btn--primary { background: #FFC300; }
.cflt-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.cflt-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.cflt-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.cflt-nav-dot.is-active { background: #4C9A5D; }
`;
