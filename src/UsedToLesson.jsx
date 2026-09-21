import { useState } from "react";

const LESSON = {
  title: "Used To / Be Used To / Get Used To",
  formula: "used to + verb (past habit)  ·  be used to + -ing (familiar)  ·  get used to + -ing (adjusting)",
  leadIn: "Name one thing you used to do as a kid that you don't do anymore.",
  importance: [
    "\"Used to\" is one of the first past-habit structures learners meet, but it's also one of the most confused with \"be used to\" — mixing them up produces a sentence that's grammatically fine but means something completely different.",
    "Native speakers use \"get used to\" constantly when talking about moving, new jobs, or any life change — a real everyday structure, not a textbook rarity.",
    "The -ing rule (be/get used to always takes -ing, used to never does) is a quick, reliable test you can apply on the spot instead of memorizing sentence by sentence.",
  ],
  teach: [
    {
      name: "Used To: A Past Habit",
      definition: "Used to plus the base verb describes something that regularly happened in the past but doesn't happen now.",
      examples: ["I used to play soccer every weekend.", "She used to live in Paris.", "We used to walk to school."],
    },
    {
      name: "Be/Get Used To: Familiarity, Not the Past",
      definition: "Be used to plus -ing shows something feels normal or familiar now; get used to plus -ing shows the process of becoming familiar with it.",
      examples: ["I'm used to waking up early now.", "It took months, but she got used to the new job.", "He's still getting used to driving on the left."],
    },
  ],
  compareLeftLabel: "Used to: a past habit",
  compareRightLabel: "Be/Get used to: familiarity now",
  compareNote: "Used to always points to the past and never takes -ing. Be/get used to are about the present, and always take the -ing form.",
  comparePairs: [
    { left: "I used to hate coffee. (a past habit, now changed)", right: "I'm used to drinking coffee every morning. (a current habit that feels normal)" },
    { left: "She used to struggle with math.", right: "She got used to the new curriculum quickly." },
  ],
  guided: [
    { prompt: "I ___ (used to / am used to) smoke, but I quit five years ago. (past habit)", answer: "used to" },
    { prompt: "We ___ (used to) live in a small apartment before we moved. (past habit)", answer: "used to" },
    { prompt: "He ___ (used to) walk to school every day as a kid. (past habit)", answer: "used to" },
    { prompt: "After a few weeks, he ___ (get) used to the noise. (process of adjusting)", answer: "got" },
    { prompt: "She's ___ working night shifts now. It doesn't bother her. (familiar)", answer: "used to" },
    { prompt: "It took a while, but I finally ___ used to the cold weather. (process of adjusting)", answer: "got" },
  ],
  practice: [
    "Write one sentence about a past habit, using used to.",
    "Write one sentence about something that feels normal to you now, using be used to.",
    "Write one sentence about something you're still adjusting to, using get used to.",
  ],
  wrapup: "Used to describes a past habit and never takes -ing. Be used to describes current familiarity, and get used to describes the process of becoming familiar: both take -ing.",
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
    <div className="ustl-slide ustl-slide--cover">
      <span className="ustl-kind-badge">Lesson Time!</span>
      <h2 className="ustl-cover-title">{lesson.title}</h2>
      <span className="ustl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="ustl-slide">
      <span className="ustl-eyebrow">Warm-up</span>
      <div className="ustl-bubble ustl-bubble--solo">
        <p className="ustl-bubble-text ustl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="ustl-slide ustl-slide--part">
      <h3 className="ustl-h">Why This Matters</h3>
      <div className="ustl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="ustl-importance-item">
            <span className="ustl-importance-num">{i + 1}</span>
            <p className="ustl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="ustl-slide">
      <h3 className="ustl-h">{concept.name}</h3>
      <p className="ustl-definition">{concept.definition}</p>
      <div className="ustl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="ustl-bubble">
            <p className="ustl-bubble-text">{ex}</p>
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
    <div className="ustl-slide">
      <span className="ustl-eyebrow">Think About It</span>
      <h3 className="ustl-h">{left} <span className="ustl-vs">vs</span> {right}</h3>
      <p className="ustl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="ustl-slide">
      <h3 className="ustl-h">{lesson.compareLeftLabel} <span className="ustl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="ustl-compare-note">{lesson.compareNote}</p>
      <div className="ustl-compare-grid">
        <div className="ustl-panel">
          <span className="ustl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="ustl-compare-line">{pair.left}</p>)}
        </div>
        <div className="ustl-panel ustl-panel--right">
          <span className="ustl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="ustl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="ustl-quiz-item">
      <p className="ustl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="ustl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="ustl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="ustl-slide ustl-slide--part">
      <h3 className="ustl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="ustl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="ustl-slide ustl-slide--part">
      <h3 className="ustl-h">Speaking &amp; writing practice</h3>
      <ul className="ustl-list ustl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="ustl-slide">
      <h3 className="ustl-h">Wrap-up</h3>
      <p className="ustl-definition">{lesson.wrapup}</p>
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

export default function UsedToLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="ustl-shell">
      <style>{CSS}</style>

      <div className="ustl-stage">
        <div className="ustl-deck">
          <div className="ustl-deck-header">
            <span className="ustl-brand"><img src="/logo-sentenco.png" alt="" className="ustl-brand-logo" />entenco</span>
            <span className="ustl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="ustl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="ustl-nav-row">
            <button type="button" className="ustl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="ustl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`ustl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="ustl-nav-btn ustl-nav-btn--primary"
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

.ustl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FDF0F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.ustl-shell * { box-sizing: border-box; }

.ustl-deck-header {
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
.ustl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.ustl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.ustl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #C2255C;
  white-space: nowrap;
  flex-shrink: 0;
}

.ustl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.ustl-deck {
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

.ustl-deck-body {
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

.ustl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.ustl-slide--cover { gap: 14px; }
.ustl-slide--part { justify-content: flex-start; }

.ustl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #C2255C;
}

.ustl-kind-badge {
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
.ustl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 40px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #C2255C;
}

.ustl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #8A1A41;
  background: #FDF0F5;
  border: 2.5px solid #C2255C;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.ustl-h {
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
.ustl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.ustl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3A1128;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.ustl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #C2255C;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.ustl-bubble--solo { max-width: 720px; }
.ustl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.ustl-bubble-text--big { font-size: 24px; font-style: italic; }

.ustl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.ustl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #B36886;
  margin: 0;
  max-width: 620px;
}
.ustl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.ustl-panel { background: #FDF0F5; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.ustl-panel--right { border-color: #C2255C; }
.ustl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #8A1A41;
  margin-bottom: 8px;
}
.ustl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.ustl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A1128;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.ustl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.ustl-speaking-list li { margin-bottom: 8px; }

.ustl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.ustl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FDF0F5;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.ustl-importance-num {
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
.ustl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.ustl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.ustl-quiz-item {
  background: #FDF0F5;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ustl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.ustl-reveal-btn {
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
.ustl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.ustl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.ustl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #F5D3E0; flex-shrink: 0; }
.ustl-nav-btn {
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
.ustl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.ustl-nav-btn--primary { background: #FFC300; }
.ustl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.ustl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.ustl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.ustl-nav-dot.is-active { background: #C2255C; }
`;
