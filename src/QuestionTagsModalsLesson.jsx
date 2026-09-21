import { useState } from "react";

const LESSON = {
  title: "Question Tags with Modals & Rare Auxiliaries",
  formula: "basic tag review  ·  true modal + flipped modal tag  ·  have to / used to + do-support tag",
  leadIn: "Finish this out loud: “You're a student here, ___?” What tag word did you reach for?",
  importance: [
    "They're everywhere in real conversation — used constantly to check, confirm, or soften what someone just said, more than a full yes/no question would.",
    "Forming them correctly proves you actually control the auxiliary (be/do/have/modals), not just memorized whole sentences.",
    "Intonation carries real meaning: a rising tag genuinely asks, a falling tag just assumes agreement.",
  ],
  teach: [
    {
      name: "Quick Review: The Basic Pattern",
      definition: "A question tag repeats the sentence's own auxiliary — be, do, or have — and flips the polarity: a positive statement gets a negative tag, a negative statement gets a positive one.",
      examples: ["You're a student here, aren't you?", "She doesn't like coffee, does she?", "They've already left, haven't they?"],
    },
    {
      name: "Modal Verb Tags",
      definition: "Now for the harder case. Modals like must, might, could, should, will, and would follow that same rule: flip the polarity and repeat the modal itself.",
      examples: ["You must be tired, mustn't you?", "She should call him, shouldn't she?", "They will help, won't they?"],
    },
    {
      name: "Have To, Used To & Ought To: The Rare Auxiliaries",
      definition: "Have to and used to look like modals, but they're not true auxiliaries — they act like regular verbs, so their tags borrow do/does/did instead of repeating themselves. Ought to is the one exception that keeps its own form.",
      examples: ["She has to leave, doesn't she?", "You used to live here, didn't you?", "We ought to go, oughtn't we?"],
    },
  ],
  compareLeftLabel: "True modal: tags with itself",
  compareRightLabel: "Have to / Used to: tags with do/does/did",
  compareNote: "A true modal repeats itself in the tag. Have to and used to look like modals but act like regular verbs, so their tags borrow do-support instead.",
  comparePairs: [
    { left: "You must be exhausted, mustn't you?", right: "You have to leave early, don't you?" },
    { left: "She could help us, couldn't she?", right: "She used to dance, didn't she?" },
  ],
  guided: [
    { prompt: "You're new here, ___ you?", answer: "aren't" },
    { prompt: "He doesn't like tea, ___ he?", answer: "does" },
    { prompt: "They've already left, ___ they?", answer: "haven't" },
    { prompt: "You must be hungry, ___ you?", answer: "mustn't" },
    { prompt: "She should apologize, ___ she?", answer: "shouldn't" },
    { prompt: "They will be there, ___ they?", answer: "won't" },
    { prompt: "He has to work late, ___ he?", answer: "doesn't" },
    { prompt: "You used to play piano, ___ you?", answer: "didn't" },
    { prompt: "We ought to call her, ___ we?", answer: "oughtn't / shouldn't" },
  ],
  practice: [
    "Write one question tag using a simple positive statement with be, do, or have.",
    "Write one question tag using a true modal like must, could, or should.",
    "Write one question tag using have to, remembering to borrow do/does.",
    "Write one question tag using used to.",
  ],
  wrapup: "A question tag repeats the sentence's own auxiliary and flips the polarity. True modals repeat themselves in the tag. Have to and used to act like regular verbs, so their tags borrow do/does/did instead.",
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
    <div className="qtml-slide qtml-slide--cover">
      <span className="qtml-kind-badge">Lesson Time!</span>
      <h2 className="qtml-cover-title">{lesson.title}</h2>
      <span className="qtml-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="qtml-slide">
      <span className="qtml-eyebrow">Warm-up</span>
      <div className="qtml-bubble qtml-bubble--solo">
        <p className="qtml-bubble-text qtml-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="qtml-slide qtml-slide--part">
      <h3 className="qtml-h">Why Question Tags Matter</h3>
      <div className="qtml-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="qtml-importance-item">
            <span className="qtml-importance-num">{i + 1}</span>
            <p className="qtml-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="qtml-slide">
      <h3 className="qtml-h">{concept.name}</h3>
      <p className="qtml-definition">{concept.definition}</p>
      <div className="qtml-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="qtml-bubble">
            <p className="qtml-bubble-text">{ex}</p>
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
    <div className="qtml-slide">
      <span className="qtml-eyebrow">Think About It</span>
      <h3 className="qtml-h">{left} <span className="qtml-vs">vs</span> {right}</h3>
      <p className="qtml-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="qtml-slide">
      <h3 className="qtml-h">{lesson.compareLeftLabel} <span className="qtml-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="qtml-compare-note">{lesson.compareNote}</p>
      <div className="qtml-compare-grid">
        <div className="qtml-panel">
          <span className="qtml-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="qtml-compare-line">{pair.left}</p>)}
        </div>
        <div className="qtml-panel qtml-panel--right">
          <span className="qtml-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="qtml-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="qtml-quiz-item">
      <p className="qtml-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="qtml-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="qtml-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="qtml-slide qtml-slide--part">
      <h3 className="qtml-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="qtml-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="qtml-slide qtml-slide--part">
      <h3 className="qtml-h">Speaking &amp; writing practice</h3>
      <ul className="qtml-list qtml-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="qtml-slide">
      <h3 className="qtml-h">Wrap-up</h3>
      <p className="qtml-definition">{lesson.wrapup}</p>
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

export default function QuestionTagsModalsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="qtml-shell">
      <style>{CSS}</style>

      <div className="qtml-stage">
        <div className="qtml-deck">
          <div className="qtml-deck-header">
            <span className="qtml-brand"><img src="/logo-sentenco.png" alt="" className="qtml-brand-logo" />entenco</span>
            <span className="qtml-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="qtml-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="qtml-nav-row">
            <button type="button" className="qtml-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="qtml-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`qtml-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="qtml-nav-btn qtml-nav-btn--primary"
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

.qtml-shell {
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
.qtml-shell * { box-sizing: border-box; }

.qtml-deck-header {
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
.qtml-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.qtml-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.qtml-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #3E7CB8;
  white-space: nowrap;
  flex-shrink: 0;
}

.qtml-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.qtml-deck {
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

.qtml-deck-body {
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

.qtml-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.qtml-slide--cover { gap: 14px; }
.qtml-slide--part { justify-content: flex-start; }

.qtml-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #3E7CB8;
}

.qtml-kind-badge {
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
.qtml-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 44px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.15;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #3E7CB8;
}

.qtml-formula-chip {
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

.qtml-h {
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
.qtml-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.qtml-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1D3550;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.qtml-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #3E7CB8;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.qtml-bubble--solo { max-width: 720px; }
.qtml-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.qtml-bubble-text--big { font-size: 24px; font-style: italic; }

.qtml-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.qtml-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #8FB2D2;
  margin: 0;
  max-width: 620px;
}
.qtml-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.qtml-panel { background: #EAF2FA; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.qtml-panel--right { border-color: #3E7CB8; }
.qtml-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #275C8C;
  margin-bottom: 8px;
}
.qtml-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.qtml-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1D3550;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.qtml-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.qtml-speaking-list li { margin-bottom: 8px; }

.qtml-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.qtml-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #EAF2FA;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.qtml-importance-num {
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
.qtml-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.qtml-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.qtml-quiz-item {
  background: #EAF2FA;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.qtml-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.qtml-reveal-btn {
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
.qtml-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.qtml-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.qtml-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #D0E2F2; flex-shrink: 0; }
.qtml-nav-btn {
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
.qtml-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.qtml-nav-btn--primary { background: #FFC300; }
.qtml-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.qtml-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.qtml-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.qtml-nav-dot.is-active { background: #3E7CB8; }
`;
