import { useState } from "react";

const LESSON = {
  title: "Wish & If Only",
  formula: "wish/if only + past simple (present regret)  ·  wish/if only + past perfect (past regret)",
  leadIn: "Name one thing you wish were different about today.",
  importance: [
    "Expressing wishes and regret is core to how people actually talk about their feelings — apologies, small talk, and reflection all lean on this structure.",
    "The tense here is deliberately \"wrong\" for the meaning (past tense for a present feeling) — understanding why keeps you from either avoiding the structure or misapplying normal tense logic to it.",
    "Mixing up wish + past simple and wish + past perfect changes whether you're talking about right now or something already over — a real, testable distinction, not just a style choice.",
  ],
  teach: [
    {
      name: "Wishing About the Present",
      definition: "Wish or if only plus the past simple expresses a desire for something different right now, even though the verb looks past tense.",
      examples: ["I wish I had more time.", "If only I spoke French.", "She wishes she lived closer to her family."],
    },
    {
      name: "Wishing About the Past",
      definition: "Wish or if only plus the past perfect expresses regret about something that already happened and can't be changed.",
      examples: ["I wish I had studied harder.", "If only I hadn't said that.", "He wishes he had taken the job."],
    },
  ],
  compareLeftLabel: "Present wish: past simple",
  compareRightLabel: "Past regret: past perfect",
  compareNote: "The tense tells you which moment the wish is about: one step back for a present wish, two steps back for a regret about the past.",
  comparePairs: [
    { left: "I wish I had a car. (I don't have one now)", right: "I wish I had bought a car. (I didn't buy one back then)" },
    { left: "If only she were here.", right: "If only she had come earlier." },
  ],
  guided: [
    { prompt: "I wish I ___ (know) the answer right now.", answer: "knew" },
    { prompt: "She wishes she ___ (live) somewhere warmer. (present)", answer: "lived" },
    { prompt: "I wish I ___ (have) more free time these days.", answer: "had" },
    { prompt: "If only I ___ (study) harder before the exam. (regret about the past)", answer: "had studied" },
    { prompt: "If only he ___ (apologize) sooner. (regret about the past)", answer: "had apologized" },
    { prompt: "She wishes she ___ (not say) that to her friend. (regret about the past)", answer: "hadn't said" },
  ],
  practice: [
    "Write one sentence wishing something were different right now.",
    "Write one sentence regretting something from your past, using if only.",
    "Compare the two. Which tense did each one use?",
  ],
  wrapup: "Wish/if only + past simple expresses a present wish. Wish/if only + past perfect expresses regret about the past.",
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
    <div className="wil-slide wil-slide--cover">
      <span className="wil-kind-badge">Lesson Time!</span>
      <h2 className="wil-cover-title">{lesson.title}</h2>
      <span className="wil-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="wil-slide">
      <span className="wil-eyebrow">Warm-up</span>
      <div className="wil-bubble wil-bubble--solo">
        <p className="wil-bubble-text wil-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="wil-slide wil-slide--part">
      <h3 className="wil-h">Why Wish &amp; If Only Matter</h3>
      <div className="wil-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="wil-importance-item">
            <span className="wil-importance-num">{i + 1}</span>
            <p className="wil-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="wil-slide">
      <h3 className="wil-h">{concept.name}</h3>
      <p className="wil-definition">{concept.definition}</p>
      <div className="wil-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="wil-bubble">
            <p className="wil-bubble-text">{ex}</p>
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
    <div className="wil-slide">
      <span className="wil-eyebrow">Think About It</span>
      <h3 className="wil-h">{left} <span className="wil-vs">vs</span> {right}</h3>
      <p className="wil-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="wil-slide">
      <h3 className="wil-h">{lesson.compareLeftLabel} <span className="wil-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="wil-compare-note">{lesson.compareNote}</p>
      <div className="wil-compare-grid">
        <div className="wil-panel">
          <span className="wil-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="wil-compare-line">{pair.left}</p>)}
        </div>
        <div className="wil-panel wil-panel--right">
          <span className="wil-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="wil-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="wil-quiz-item">
      <p className="wil-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="wil-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="wil-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="wil-slide wil-slide--part">
      <h3 className="wil-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="wil-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="wil-slide wil-slide--part">
      <h3 className="wil-h">Speaking &amp; writing practice</h3>
      <ul className="wil-list wil-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="wil-slide">
      <h3 className="wil-h">Wrap-up</h3>
      <p className="wil-definition">{lesson.wrapup}</p>
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

export default function WishIfOnlyLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="wil-shell">
      <style>{CSS}</style>

      <div className="wil-stage">
        <div className="wil-deck">
          <div className="wil-deck-header">
            <span className="wil-brand"><img src="/logo-sentenco.png" alt="" className="wil-brand-logo" />entenco</span>
            <span className="wil-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="wil-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="wil-nav-row">
            <button type="button" className="wil-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="wil-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`wil-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="wil-nav-btn wil-nav-btn--primary"
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

.wil-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #ECF3FA;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.wil-shell * { box-sizing: border-box; }

.wil-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #D3E3F1;
  flex-shrink: 0;
}
.wil-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.wil-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.wil-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #3E7CB8;
  white-space: nowrap;
  flex-shrink: 0;
}

.wil-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.wil-deck {
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

.wil-deck-body {
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

.wil-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.wil-slide--cover { gap: 14px; }
.wil-slide--part { justify-content: flex-start; }

.wil-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #3E7CB8;
}

.wil-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #3E7CB8;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.wil-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 48px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #3E7CB8;
}

.wil-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #275C8C;
  background: #ECF3FA;
  border: 2.5px solid #3E7CB8;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.wil-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #3E7CB8;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.wil-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.wil-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #16324D;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.wil-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #3E7CB8;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.wil-bubble--solo { max-width: 720px; }
.wil-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.wil-bubble-text--big { font-size: 24px; font-style: italic; }

.wil-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.wil-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #6C97BD;
  margin: 0;
  max-width: 620px;
}
.wil-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.wil-panel { background: #ECF3FA; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.wil-panel--right { border-color: #3E7CB8; }
.wil-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #275C8C;
  margin-bottom: 8px;
}
.wil-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.wil-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #16324D;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.wil-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.wil-speaking-list li { margin-bottom: 8px; }

.wil-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.wil-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #ECF3FA;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.wil-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #3E7CB8;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.wil-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.wil-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.wil-quiz-item {
  background: #ECF3FA;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.wil-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.wil-reveal-btn {
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
.wil-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.wil-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.wil-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #D3E3F1; flex-shrink: 0; }
.wil-nav-btn {
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
.wil-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.wil-nav-btn--primary { background: #FFC300; }
.wil-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.wil-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.wil-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.wil-nav-dot.is-active { background: #3E7CB8; }
`;
