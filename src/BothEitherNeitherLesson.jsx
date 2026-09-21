import { useState } from "react";

const LESSON = {
  title: "Both / Either / Neither",
  formula: "both + plural verb  ·  either/neither + singular verb  ·  either...or / neither...nor agrees with the nearer subject",
  leadIn: "Think of two restaurants you like equally. Say one sentence using both, and one using either.",
  importance: [
    "These are the go-to words for comparing exactly two things, so they show up constantly in everyday choices and agreements (\"either works for me\").",
    "It's genuinely counterintuitive that either and neither, which refer to two things, take a SINGULAR verb — this has to be learned directly, because logic alone points the wrong way.",
    "Once either/neither pair up with or/nor, the agreement flips to match the nearer subject — the same pattern shows up in other grammar points, so mastering it here transfers directly.",
  ],
  teach: [
    {
      name: "Both, Either, Neither: Agreement",
      definition: "Both always takes a plural verb. Either and neither, even though they refer to two things, are grammatically singular and take a singular verb on their own.",
      examples: ["Both restaurants are excellent.", "Either option is fine with me.", "Neither answer is correct."],
    },
    {
      name: "Either...Or / Neither...Nor: Correlative Pairs",
      definition: "These pairs link two choices together: either...or presents a positive choice, neither...nor presents a double negative. The verb agrees with the closer subject.",
      examples: ["Either Tom or his sister is coming.", "Neither the teacher nor the students were ready.", "You can either call or text me."],
    },
  ],
  compareLeftLabel: "Both: always plural",
  compareRightLabel: "Either / Neither: singular alone",
  compareNote: "Both covers two things together, so the verb is plural. Either and neither pick just one of the two (or neither), so the verb stays singular, unless they're part of a pair, where the verb agrees with the nearer subject.",
  comparePairs: [
    { left: "Both of my parents are teachers.", right: "Either of my parents is available to help." },
    { left: "Both answers are correct.", right: "Neither answer is correct." },
  ],
  guided: [
    { prompt: "Both of my sisters ___ (be) doctors.", answer: "are" },
    { prompt: "Either answer ___ (be) acceptable.", answer: "is" },
    { prompt: "Neither option ___ (be) perfect.", answer: "is" },
    { prompt: "Either Tom or his sisters ___ (be) coming to the party. (agrees with the nearer subject)", answer: "are" },
    { prompt: "Neither the manager nor the staff ___ (be) available today. (agrees with the nearer subject)", answer: "is" },
    { prompt: "You can ___ (either/neither) call or text me, whichever is easier.", answer: "either" },
  ],
  practice: [
    "Write one sentence using both with a plural verb.",
    "Write one sentence using either or neither alone, with a singular verb.",
    "Write one sentence using either...or or neither...nor, checking which subject is closer to the verb.",
  ],
  wrapup: "Both always takes a plural verb. Either and neither are singular alone, but in an either...or / neither...nor pair, the verb agrees with whichever subject is closer.",
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
    <div className="benl-slide benl-slide--cover">
      <span className="benl-kind-badge">Lesson Time!</span>
      <h2 className="benl-cover-title">{lesson.title}</h2>
      <span className="benl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="benl-slide">
      <span className="benl-eyebrow">Warm-up</span>
      <div className="benl-bubble benl-bubble--solo">
        <p className="benl-bubble-text benl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="benl-slide benl-slide--part">
      <h3 className="benl-h">Why This Matters</h3>
      <div className="benl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="benl-importance-item">
            <span className="benl-importance-num">{i + 1}</span>
            <p className="benl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="benl-slide">
      <h3 className="benl-h">{concept.name}</h3>
      <p className="benl-definition">{concept.definition}</p>
      <div className="benl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="benl-bubble">
            <p className="benl-bubble-text">{ex}</p>
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
    <div className="benl-slide">
      <span className="benl-eyebrow">Think About It</span>
      <h3 className="benl-h">{left} <span className="benl-vs">vs</span> {right}</h3>
      <p className="benl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="benl-slide">
      <h3 className="benl-h">{lesson.compareLeftLabel} <span className="benl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="benl-compare-note">{lesson.compareNote}</p>
      <div className="benl-compare-grid">
        <div className="benl-panel">
          <span className="benl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="benl-compare-line">{pair.left}</p>)}
        </div>
        <div className="benl-panel benl-panel--right">
          <span className="benl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="benl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="benl-quiz-item">
      <p className="benl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="benl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="benl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="benl-slide benl-slide--part">
      <h3 className="benl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="benl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="benl-slide benl-slide--part">
      <h3 className="benl-h">Speaking &amp; writing practice</h3>
      <ul className="benl-list benl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="benl-slide">
      <h3 className="benl-h">Wrap-up</h3>
      <p className="benl-definition">{lesson.wrapup}</p>
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

export default function BothEitherNeitherLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="benl-shell">
      <style>{CSS}</style>
      <div className="benl-stage">
        <div className="benl-deck">
          <div className="benl-deck-header">
            <span className="benl-brand"><img src="/logo-sentenco.png" alt="" className="benl-brand-logo" />entenco</span>
            <span className="benl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="benl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="benl-nav-row">
            <button type="button" className="benl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="benl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`benl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="benl-nav-btn benl-nav-btn--primary"
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

.benl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F5EFE8;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.benl-shell * { box-sizing: border-box; }

.benl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #E4D8C7;
  flex-shrink: 0;
}
.benl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.benl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.benl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #A98F6E;
  white-space: nowrap;
  flex-shrink: 0;
}

.benl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.benl-deck {
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

.benl-deck-body {
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

.benl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.benl-slide--cover { gap: 14px; }
.benl-slide--part { justify-content: flex-start; }

.benl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #8A6748;
}

.benl-kind-badge {
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
.benl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 58px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #8A6748;
}

.benl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #5C452F;
  background: #F5EFE8;
  border: 2.5px solid #8A6748;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.benl-h {
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
.benl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.benl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #2E2214;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.benl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #8A6748;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.benl-bubble--solo { max-width: 720px; }
.benl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.benl-bubble-text--big { font-size: 24px; font-style: italic; }

.benl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.benl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #A98F6E;
  margin: 0;
  max-width: 620px;
}
.benl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.benl-panel { background: #F5EFE8; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.benl-panel--right { border-color: #8A6748; }
.benl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #5C452F;
  margin-bottom: 8px;
}
.benl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.benl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2E2214;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.benl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.benl-speaking-list li { margin-bottom: 8px; }

.benl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.benl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #F5EFE8;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.benl-importance-num {
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
.benl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.benl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.benl-quiz-item {
  background: #F5EFE8;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.benl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.benl-reveal-btn {
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
.benl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.benl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.benl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #E4D8C7; flex-shrink: 0; }
.benl-nav-btn {
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
.benl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.benl-nav-btn--primary { background: #FFC300; }
.benl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.benl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.benl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.benl-nav-dot.is-active { background: #8A6748; }
`;
