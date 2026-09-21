import { useState } from "react";

const LESSON = {
  title: "Get-Passive vs Be-Passive",
  formula: "be + past participle (neutral)  ·  get + past participle (casual, dramatic, often sudden)",
  leadIn: "Think of something surprising that happened to you recently, good or bad. How would you tell a close friend about it?",
  importance: [
    "Get-passive is everywhere in real spoken English but almost never taught alongside standard passive voice, leaving a real gap between textbook English and how people actually talk.",
    "Choosing between be and get changes the emotional flavor of a sentence, not just the formality — the wrong one can make a dramatic story sound flat, or a formal report sound oddly casual.",
    "This is a genuine register skill: knowing when to reach for get instead of be is part of sounding natural, not just grammatically correct.",
  ],
  teach: [
    {
      name: "Be-Passive: Neutral, Standard",
      definition: "The regular passive (be + past participle), used in neutral, formal, or written English, with no extra emotional weight attached.",
      examples: ["He was fired.", "The window was broken.", "The report was finished on time."],
    },
    {
      name: "Get-Passive: Casual, Dramatic, Often Sudden",
      definition: "Get + past participle describes the same kind of event but adds informality and a sense that something happened to someone suddenly, often unlucky or surprising.",
      examples: ["He got fired.", "The window got broken.", "She got promoted out of nowhere."],
    },
  ],
  compareLeftLabel: "Be-passive: neutral",
  compareRightLabel: "Get-passive: casual, dramatic",
  compareNote: "Both describe the same event, but get-passive adds emotional weight (surprise, bad luck, or informality) that be-passive doesn't carry.",
  comparePairs: [
    { left: "The car was stolen.", right: "The car got stolen right outside my house!" },
    { left: "He was promoted.", right: "He got promoted, can you believe it?" },
  ],
  guided: [
    { prompt: "The report ___ (be) finished by Friday. (neutral, formal)", answer: "was" },
    { prompt: "The window ___ (be) broken during the storm. (neutral)", answer: "was" },
    { prompt: "The meeting ___ (be) postponed until next week. (neutral)", answer: "was" },
    { prompt: "He ___ (get) fired last week. I still can't believe it! (casual, dramatic)", answer: "got" },
    { prompt: "My phone ___ (get) stolen on the train. (casual, sudden)", answer: "got" },
    { prompt: "She ___ (get) promoted out of nowhere. (casual, surprising)", answer: "got" },
  ],
  practice: [
    "Write one be-passive sentence about a formal or neutral event.",
    "Write one get-passive sentence about something sudden or surprising that happened to you.",
    "Rewrite one of your sentences the other way, swapping be for get or get for be, and notice how the tone changes.",
  ],
  wrapup: "Be-passive is the neutral, standard choice. Get-passive tells the same story with more emotional punch, often something sudden, unlucky, or informal.",
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
    <div className="gpl-slide gpl-slide--cover">
      <span className="gpl-kind-badge">Lesson Time!</span>
      <h2 className="gpl-cover-title">{lesson.title}</h2>
      <span className="gpl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="gpl-slide">
      <span className="gpl-eyebrow">Warm-up</span>
      <div className="gpl-bubble gpl-bubble--solo">
        <p className="gpl-bubble-text gpl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="gpl-slide gpl-slide--part">
      <h3 className="gpl-h">Why This Matters</h3>
      <div className="gpl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="gpl-importance-item">
            <span className="gpl-importance-num">{i + 1}</span>
            <p className="gpl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="gpl-slide">
      <h3 className="gpl-h">{concept.name}</h3>
      <p className="gpl-definition">{concept.definition}</p>
      <div className="gpl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="gpl-bubble">
            <p className="gpl-bubble-text">{ex}</p>
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
    <div className="gpl-slide">
      <span className="gpl-eyebrow">Think About It</span>
      <h3 className="gpl-h">{left} <span className="gpl-vs">vs</span> {right}</h3>
      <p className="gpl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="gpl-slide">
      <h3 className="gpl-h">{lesson.compareLeftLabel} <span className="gpl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="gpl-compare-note">{lesson.compareNote}</p>
      <div className="gpl-compare-grid">
        <div className="gpl-panel">
          <span className="gpl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="gpl-compare-line">{pair.left}</p>)}
        </div>
        <div className="gpl-panel gpl-panel--right">
          <span className="gpl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="gpl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="gpl-quiz-item">
      <p className="gpl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="gpl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="gpl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="gpl-slide gpl-slide--part">
      <h3 className="gpl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="gpl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="gpl-slide gpl-slide--part">
      <h3 className="gpl-h">Speaking &amp; writing practice</h3>
      <ul className="gpl-list gpl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="gpl-slide">
      <h3 className="gpl-h">Wrap-up</h3>
      <p className="gpl-definition">{lesson.wrapup}</p>
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

export default function GetPassiveBePassiveLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="gpl-shell">
      <style>{CSS}</style>
      <div className="gpl-stage">
        <div className="gpl-deck">
          <div className="gpl-deck-header">
            <span className="gpl-brand"><img src="/logo-sentenco.png" alt="" className="gpl-brand-logo" />entenco</span>
            <span className="gpl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="gpl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="gpl-nav-row">
            <button type="button" className="gpl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="gpl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`gpl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="gpl-nav-btn gpl-nav-btn--primary"
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

.gpl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FCF5E6;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.gpl-shell * { box-sizing: border-box; }

.gpl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #F3E3C0;
  flex-shrink: 0;
}
.gpl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.gpl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.gpl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #C9A15E;
  white-space: nowrap;
  flex-shrink: 0;
}

.gpl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.gpl-deck {
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

.gpl-deck-body {
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

.gpl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.gpl-slide--cover { gap: 14px; }
.gpl-slide--part { justify-content: flex-start; }

.gpl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #E3A73C;
}

.gpl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #E3A73C;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.gpl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 46px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #E3A73C;
}

.gpl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #96631C;
  background: #FCF5E6;
  border: 2.5px solid #E3A73C;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.gpl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #E3A73C;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.gpl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.gpl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3D2E11;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.gpl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #E3A73C;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.gpl-bubble--solo { max-width: 720px; }
.gpl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.gpl-bubble-text--big { font-size: 24px; font-style: italic; }

.gpl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.gpl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #C9A15E;
  margin: 0;
  max-width: 620px;
}
.gpl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.gpl-panel { background: #FCF5E6; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.gpl-panel--right { border-color: #E3A73C; }
.gpl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #96631C;
  margin-bottom: 8px;
}
.gpl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.gpl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3D2E11;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.gpl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.gpl-speaking-list li { margin-bottom: 8px; }

.gpl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.gpl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FCF5E6;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.gpl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #E3A73C;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.gpl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.gpl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.gpl-quiz-item {
  background: #FCF5E6;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.gpl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.gpl-reveal-btn {
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
.gpl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.gpl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.gpl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #F3E3C0; flex-shrink: 0; }
.gpl-nav-btn {
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
.gpl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.gpl-nav-btn--primary { background: #FFC300; }
.gpl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.gpl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.gpl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.gpl-nav-dot.is-active { background: #E3A73C; }
`;
