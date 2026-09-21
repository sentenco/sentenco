import { useState } from "react";

const LESSON = {
  title: "Would Rather / Had Better",
  formula: "would rather + base verb (preference)  ·  had better + base verb (urgent advice)",
  leadIn: "Would you rather stay in tonight, or go out? And what's something you'd better not forget to do today?",
  importance: [
    "These are two of the most common ways to give an opinion or a warning in casual speech — something you'll reach for daily, not a rare structure.",
    "The tone really matters: using had better for a mild preference sounds unexpectedly bossy or alarming, while would rather for a real warning sounds too soft.",
    "Both take the bare base verb with no \"to,\" which trips up learners used to other opinion or advice verbs (want to, need to) that do take an infinitive.",
  ],
  teach: [
    {
      name: "Would Rather: Preference",
      definition: "Would rather + base verb states a preference between options, with no real urgency. Swap in would rather not for the negative.",
      examples: ["I'd rather stay home tonight.", "She would rather walk than drive.", "I'd rather not talk about it."],
    },
    {
      name: "Had Better: Urgent Advice or Warning",
      definition: "Had better + base verb gives urgent advice or a warning, implying something bad will happen if it's ignored. It's stronger than should.",
      examples: ["You'd better hurry, the train leaves soon.", "We'd better call a doctor.", "You'd better not be late."],
    },
  ],
  compareLeftLabel: "Would rather: a calm preference",
  compareRightLabel: "Had better: an urgent warning",
  compareNote: "Both look similar (a contracted 'd + base verb), but would rather just states what you prefer, while had better warns of a real consequence if you don't act.",
  comparePairs: [
    { left: "I'd rather have tea than coffee.", right: "You'd better drink some water, you look dehydrated." },
    { left: "She'd rather stay in tonight.", right: "She'd better finish that report tonight." },
  ],
  guided: [
    { prompt: "I'd ___ (rather/better) have pizza than sushi tonight. (preference)", answer: "rather" },
    { prompt: "I'd rather ___ (not go) to the party. (negative preference)", answer: "not go" },
    { prompt: "She would rather ___ (walk) than take the bus.", answer: "walk" },
    { prompt: "You'd ___ (rather/better) leave now, or you'll miss the bus. (urgent warning)", answer: "better" },
    { prompt: "We'd better ___ (not be) late for the interview. (negative warning)", answer: "not be" },
    { prompt: "You'd better ___ (call) him back, he sounded upset. (urgent)", answer: "call" },
  ],
  practice: [
    "Write one sentence with would rather about something you prefer over something else.",
    "Write one sentence with had better giving urgent advice to a friend.",
    "Write one negative sentence using would rather not.",
  ],
  wrapup: "Would rather states a calm preference; had better warns of a real consequence if the advice is ignored. Both are followed directly by the base verb.",
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
    <div className="wrhl-slide wrhl-slide--cover">
      <span className="wrhl-kind-badge">Lesson Time!</span>
      <h2 className="wrhl-cover-title">{lesson.title}</h2>
      <span className="wrhl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="wrhl-slide">
      <span className="wrhl-eyebrow">Warm-up</span>
      <div className="wrhl-bubble wrhl-bubble--solo">
        <p className="wrhl-bubble-text wrhl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="wrhl-slide wrhl-slide--part">
      <h3 className="wrhl-h">Why This Matters</h3>
      <div className="wrhl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="wrhl-importance-item">
            <span className="wrhl-importance-num">{i + 1}</span>
            <p className="wrhl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="wrhl-slide">
      <h3 className="wrhl-h">{concept.name}</h3>
      <p className="wrhl-definition">{concept.definition}</p>
      <div className="wrhl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="wrhl-bubble">
            <p className="wrhl-bubble-text">{ex}</p>
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
    <div className="wrhl-slide">
      <span className="wrhl-eyebrow">Think About It</span>
      <h3 className="wrhl-h">{left} <span className="wrhl-vs">vs</span> {right}</h3>
      <p className="wrhl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="wrhl-slide">
      <h3 className="wrhl-h">{lesson.compareLeftLabel} <span className="wrhl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="wrhl-compare-note">{lesson.compareNote}</p>
      <div className="wrhl-compare-grid">
        <div className="wrhl-panel">
          <span className="wrhl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="wrhl-compare-line">{pair.left}</p>)}
        </div>
        <div className="wrhl-panel wrhl-panel--right">
          <span className="wrhl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="wrhl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="wrhl-quiz-item">
      <p className="wrhl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="wrhl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="wrhl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="wrhl-slide wrhl-slide--part">
      <h3 className="wrhl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="wrhl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="wrhl-slide wrhl-slide--part">
      <h3 className="wrhl-h">Speaking &amp; writing practice</h3>
      <ul className="wrhl-list wrhl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="wrhl-slide">
      <h3 className="wrhl-h">Wrap-up</h3>
      <p className="wrhl-definition">{lesson.wrapup}</p>
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

export default function WouldRatherHadBetterLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="wrhl-shell">
      <style>{CSS}</style>

      <div className="wrhl-stage">
        <div className="wrhl-deck">
          <div className="wrhl-deck-header">
            <span className="wrhl-brand"><img src="/logo-sentenco.png" alt="" className="wrhl-brand-logo" />entenco</span>
            <span className="wrhl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="wrhl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="wrhl-nav-row">
            <button type="button" className="wrhl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="wrhl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`wrhl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="wrhl-nav-btn wrhl-nav-btn--primary"
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

.wrhl-shell {
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
.wrhl-shell * { box-sizing: border-box; }

.wrhl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #F3E3C0;
  flex-shrink: 0;
}
.wrhl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.wrhl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.wrhl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #E3A73C;
  white-space: nowrap;
  flex-shrink: 0;
}

.wrhl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.wrhl-deck {
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

.wrhl-deck-body {
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

.wrhl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.wrhl-slide--cover { gap: 14px; }
.wrhl-slide--part { justify-content: flex-start; }

.wrhl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #E3A73C;
}

.wrhl-kind-badge {
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
.wrhl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 56px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #E3A73C;
}

.wrhl-formula-chip {
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

.wrhl-h {
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
.wrhl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.wrhl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3D2E11;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.wrhl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #E3A73C;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.wrhl-bubble--solo { max-width: 720px; }
.wrhl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.wrhl-bubble-text--big { font-size: 24px; font-style: italic; }

.wrhl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.wrhl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #C9A15E;
  margin: 0;
  max-width: 620px;
}
.wrhl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.wrhl-panel { background: #FCF5E6; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.wrhl-panel--right { border-color: #E3A73C; }
.wrhl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #96631C;
  margin-bottom: 8px;
}
.wrhl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.wrhl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3D2E11;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.wrhl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.wrhl-speaking-list li { margin-bottom: 8px; }

.wrhl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.wrhl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FCF5E6;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.wrhl-importance-num {
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
.wrhl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.wrhl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.wrhl-quiz-item {
  background: #FCF5E6;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.wrhl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.wrhl-reveal-btn {
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
.wrhl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.wrhl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.wrhl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #F3E3C0; flex-shrink: 0; }
.wrhl-nav-btn {
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
.wrhl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.wrhl-nav-btn--primary { background: #FFC300; }
.wrhl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.wrhl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.wrhl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.wrhl-nav-dot.is-active { background: #E3A73C; }
`;
