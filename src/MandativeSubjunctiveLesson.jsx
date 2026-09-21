import { useState } from "react";

const LESSON = {
  title: "The Mandative Subjunctive",
  formula: "suggest/recommend/insist + that + subject + base verb (no -s)  ·  it's essential/important that + subject + base verb",
  leadIn: "Say this out loud: “I suggest he ___ early.” Does “arrives” or “arrive” sound right to you?",
  importance: [
    "This structure is a real marker of formal, professional English — legal, business, and diplomatic writing lean on it heavily (\"we recommend that he attend\"), so it matters for reports, proposals, and official emails.",
    "It quietly breaks the normal subject-verb agreement rule, so without knowing it exists, learners either \"correct\" it into the wrong form or use it right by accident without understanding why.",
    "This is one of the last living traces of the subjunctive mood in modern English, so recognizing it also helps with reading older or more formal texts where the pattern shows up more often.",
  ],
  teach: [
    {
      name: "The Base-Form Subjunctive After Suggestion Verbs",
      definition: "After verbs like suggest, recommend, insist, and demand, the following clause uses the bare base form of the verb: no -s for he/she/it, and no change in the past.",
      examples: ["I suggest he arrive early.", "The doctor recommended she rest.", "They insisted he apologize."],
    },
    {
      name: "The Subjunctive After \"It's Essential/Important That...\"",
      definition: "The same base-form pattern shows up after certain adjective-plus-that constructions, not just after verbs: the urgency triggers the same grammar.",
      examples: ["It's essential that she be informed.", "It's important that he attend the meeting.", "It's vital that we act now."],
    },
  ],
  compareLeftLabel: "Normal present tense",
  compareRightLabel: "Subjunctive: no -s, stays base form",
  compareNote: "The subjunctive quietly breaks the usual agreement rule (no -s for he/she/it, and 'be' instead of 'is/are') because the action is being urged or required, not stated as fact.",
  comparePairs: [
    { left: "He arrives early every day. (fact)", right: "I suggest he arrive early tomorrow. (subjunctive)" },
    { left: "She is informed about the plan. (fact)", right: "It's essential that she be informed. (subjunctive)" },
  ],
  guided: [
    { prompt: "I suggest he ___ (arrives/arrive) early tomorrow.", answer: "arrive" },
    { prompt: "The teacher recommended she ___ (studies/study) harder.", answer: "study" },
    { prompt: "They insisted he ___ (apologizes/apologize) immediately.", answer: "apologize" },
    { prompt: "It's essential that she ___ (is/be) informed right away.", answer: "be" },
    { prompt: "It's important that he ___ (attends/attend) the meeting.", answer: "attend" },
    { prompt: "It's vital that we ___ (act/acts) now, not later.", answer: "act" },
  ],
  practice: [
    "Write one sentence using suggest or recommend with the subjunctive.",
    "Write one sentence using 'It's essential/important that...' with the subjunctive.",
    "Say the same sentence out loud two ways (with and without the subjunctive) and notice the -s disappear.",
  ],
  wrapup: "After verbs like suggest, recommend, and insist, and after 'it's essential/important that,' English quietly drops the usual -s and uses the base form of the verb: the mandative subjunctive.",
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
    <div className="mdsl-slide mdsl-slide--cover">
      <span className="mdsl-kind-badge">Lesson Time!</span>
      <h2 className="mdsl-cover-title">{lesson.title}</h2>
      <span className="mdsl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="mdsl-slide">
      <span className="mdsl-eyebrow">Warm-up</span>
      <div className="mdsl-bubble mdsl-bubble--solo">
        <p className="mdsl-bubble-text mdsl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="mdsl-slide mdsl-slide--part">
      <h3 className="mdsl-h">Why This Matters</h3>
      <div className="mdsl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="mdsl-importance-item">
            <span className="mdsl-importance-num">{i + 1}</span>
            <p className="mdsl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="mdsl-slide">
      <h3 className="mdsl-h">{concept.name}</h3>
      <p className="mdsl-definition">{concept.definition}</p>
      <div className="mdsl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="mdsl-bubble">
            <p className="mdsl-bubble-text">{ex}</p>
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
    <div className="mdsl-slide">
      <span className="mdsl-eyebrow">Think About It</span>
      <h3 className="mdsl-h">{left} <span className="mdsl-vs">vs</span> {right}</h3>
      <p className="mdsl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="mdsl-slide">
      <h3 className="mdsl-h">{lesson.compareLeftLabel} <span className="mdsl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="mdsl-compare-note">{lesson.compareNote}</p>
      <div className="mdsl-compare-grid">
        <div className="mdsl-panel">
          <span className="mdsl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="mdsl-compare-line">{pair.left}</p>)}
        </div>
        <div className="mdsl-panel mdsl-panel--right">
          <span className="mdsl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="mdsl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="mdsl-quiz-item">
      <p className="mdsl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="mdsl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="mdsl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="mdsl-slide mdsl-slide--part">
      <h3 className="mdsl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="mdsl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="mdsl-slide mdsl-slide--part">
      <h3 className="mdsl-h">Speaking &amp; writing practice</h3>
      <ul className="mdsl-list mdsl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="mdsl-slide">
      <h3 className="mdsl-h">Wrap-up</h3>
      <p className="mdsl-definition">{lesson.wrapup}</p>
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

export default function MandativeSubjunctiveLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="mdsl-shell">
      <style>{CSS}</style>

      <div className="mdsl-stage">
        <div className="mdsl-deck">
          <div className="mdsl-deck-header">
            <span className="mdsl-brand"><img src="/logo-sentenco.png" alt="" className="mdsl-brand-logo" />entenco</span>
            <span className="mdsl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="mdsl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="mdsl-nav-row">
            <button type="button" className="mdsl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="mdsl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`mdsl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="mdsl-nav-btn mdsl-nav-btn--primary"
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

.mdsl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #EAF2FA;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.mdsl-shell * { box-sizing: border-box; }

.mdsl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #D0E2F2;
  flex-shrink: 0;
}
.mdsl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.mdsl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.mdsl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #3E7CB8;
  white-space: nowrap;
  flex-shrink: 0;
}

.mdsl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.mdsl-deck {
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

.mdsl-deck-body {
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

.mdsl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.mdsl-slide--cover { gap: 14px; }
.mdsl-slide--part { justify-content: flex-start; }

.mdsl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #3E7CB8;
}

.mdsl-kind-badge {
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
.mdsl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 51px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #3E7CB8;
}

.mdsl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #275C8C;
  background: #EAF2FA;
  border: 2.5px solid #3E7CB8;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.mdsl-h {
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
.mdsl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.mdsl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1D3550;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.mdsl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #3E7CB8;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.mdsl-bubble--solo { max-width: 720px; }
.mdsl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.mdsl-bubble-text--big { font-size: 24px; font-style: italic; }

.mdsl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.mdsl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #8FB2D2;
  margin: 0;
  max-width: 620px;
}
.mdsl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.mdsl-panel { background: #EAF2FA; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.mdsl-panel--right { border-color: #3E7CB8; }
.mdsl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #275C8C;
  margin-bottom: 8px;
}
.mdsl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.mdsl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1D3550;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.mdsl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.mdsl-speaking-list li { margin-bottom: 8px; }

.mdsl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.mdsl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #EAF2FA;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.mdsl-importance-num {
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
.mdsl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.mdsl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.mdsl-quiz-item {
  background: #EAF2FA;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.mdsl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.mdsl-reveal-btn {
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
.mdsl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.mdsl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.mdsl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #D0E2F2; flex-shrink: 0; }
.mdsl-nav-btn {
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
.mdsl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.mdsl-nav-btn--primary { background: #FFC300; }
.mdsl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.mdsl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.mdsl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.mdsl-nav-dot.is-active { background: #3E7CB8; }
`;
