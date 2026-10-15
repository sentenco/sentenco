import { useState } from "react";

const LESSON = {
  "title": "Rise / Raise, Sit / Set, Fall / Fell",
  "formula": "rise · sit · fall = no object  ·  raise · set · fell = an object",
  "leadIn": "Describe your morning. What time does the sun rise? Where do you sit, and what do you set on the table?",
  "importance": [
    "Three common pairs follow one test, so learning the test fixes all of them at once.",
    "Some past tense forms overlap with another verb: fell is the past of fall, and set stays set in every tense. Those are the forms learners get wrong.",
    "These verbs appear in everyday phrases like sit down, set the table, and raise your hand, so you will use them every day."
  ],
  "teach": [
    {
      "name": "The Test: Does Something Receive the Action?",
      "definition": "Each pair has one verb that never takes an object (rise, sit, fall) and one that always does (raise, set, fell). Ask if something receives the action. If it does, use the object verb.",
      "examples": [
        "The sun rises. (nothing receives it)",
        "She raises her hand. (her hand receives it)",
        "I sit on the chair, and I set the cup on the table."
      ]
    },
    {
      "name": "Rise / Raise",
      "definition": "Rise means to go up by itself: rise, rose, risen. Raise means to lift something up: raise, raised, raised.",
      "examples": [
        "The sun rises at six every morning.",
        "Please raise your hand if you know the answer.",
        "Prices have risen again this month."
      ]
    },
    {
      "name": "Sit / Set",
      "definition": "Sit means to take a seat or be seated: sit, sat, sat. Set means to put something in a place: set, set, set. It never changes form.",
      "examples": [
        "Please sit down and open your books.",
        "She set the cup on the table.",
        "We sat in the front row, and the teacher set a task on each desk."
      ]
    },
    {
      "name": "Fall / Fell",
      "definition": "Fall means to drop down by itself: fall, fell, fallen. Fell, to cut down a tree, is rare and takes an object: fell, felled, felled. The trap is that fell is also the past of fall.",
      "examples": [
        "Leaves fall in autumn.",
        "He fell off his bike yesterday.",
        "The workers felled the old oak tree."
      ]
    }
  ],
  "compareLeftLabel": "Rise, sit, fall: no object",
  "compareRightLabel": "Raise, set, fell: an object",
  "compareNote": "The same test works for every pair. If something receives the action, use the second verb.",
  "comparePairs": [
    {
      "left": "The sun rises early.",
      "right": "They raise the flag early."
    },
    {
      "left": "The baby sits on the chair.",
      "right": "Mom sets the baby on the chair."
    },
    {
      "left": "The tree fell in the storm.",
      "right": "The workers felled the tree after the storm."
    }
  ],
  "guided": [
    {
      "prompt": "The sun ___ (rises/raises) at six.",
      "answer": "rises"
    },
    {
      "prompt": "Please ___ (rise/raise) your hand if you agree.",
      "answer": "raise"
    },
    {
      "prompt": "Prices have ___ (risen/raised) twice this year.",
      "answer": "risen"
    },
    {
      "prompt": "Please ___ (sit/set) down and open your books.",
      "answer": "sit"
    },
    {
      "prompt": "She ___ (sat/set) the cup on the table.",
      "answer": "set"
    },
    {
      "prompt": "We ___ (sat/set) in the front row yesterday.",
      "answer": "sat"
    },
    {
      "prompt": "Leaves ___ (fall/fell) in autumn.",
      "answer": "fall"
    },
    {
      "prompt": "He ___ (fell/felled) off his bike and hurt his knee.",
      "answer": "fell"
    },
    {
      "prompt": "The workers ___ (fell/felled) the old oak tree.",
      "answer": "felled"
    }
  ],
  "practice": [
    "Say one sentence with rise and one with raise about your morning.",
    "Make two sentences: one with sit down and one with set something down. Check each with the object test.",
    "Tell a partner about something that fell. Then say what you did next."
  ],
  "wrapup": "Rise, sit and fall never take an object. Raise, set and fell always do. Check what receives the action: rose is the past of rise but raised is the past of raise, sat is the past of sit but set stays set, and fell is the past of fall while felled is the tree-cutting verb."
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
    <div className="rrss-slide rrss-slide--cover">
      <span className="rrss-kind-badge">Lesson Time!</span>
      <h2 className="rrss-cover-title">{lesson.title}</h2>
      <span className="rrss-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="rrss-slide">
      <span className="rrss-eyebrow">Warm-up</span>
      <div className="rrss-bubble rrss-bubble--solo">
        <p className="rrss-bubble-text rrss-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="rrss-slide rrss-slide--part">
      <h3 className="rrss-h">Why This Matters</h3>
      <div className="rrss-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="rrss-importance-item">
            <span className="rrss-importance-num">{i + 1}</span>
            <p className="rrss-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="rrss-slide">
      <h3 className="rrss-h">{concept.name}</h3>
      <p className="rrss-definition">{concept.definition}</p>
      <div className="rrss-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="rrss-bubble">
            <p className="rrss-bubble-text">{ex}</p>
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
    <div className="rrss-slide">
      <span className="rrss-eyebrow">Think About It</span>
      <h3 className="rrss-h">{left} <span className="rrss-vs">vs</span> {right}</h3>
      <p className="rrss-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="rrss-slide">
      <h3 className="rrss-h">{lesson.compareLeftLabel} <span className="rrss-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="rrss-compare-note">{lesson.compareNote}</p>
      <div className="rrss-compare-grid">
        <div className="rrss-panel">
          <span className="rrss-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="rrss-compare-line">{pair.left}</p>)}
        </div>
        <div className="rrss-panel rrss-panel--right">
          <span className="rrss-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="rrss-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="rrss-quiz-item">
      <p className="rrss-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="rrss-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="rrss-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="rrss-slide rrss-slide--part">
      <h3 className="rrss-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="rrss-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="rrss-slide rrss-slide--part">
      <h3 className="rrss-h">Speaking &amp; writing practice</h3>
      <ul className="rrss-list rrss-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="rrss-slide">
      <h3 className="rrss-h">Wrap-up</h3>
      <p className="rrss-definition">{lesson.wrapup}</p>
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

export default function RiseRaiseSitSetLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="rrss-shell">
      <style>{CSS}</style>
      <div className="rrss-stage">
        <div className="rrss-deck">
          <div className="rrss-deck-header">
            <span className="rrss-brand"><img src="/logo-sentenco.png" alt="" className="rrss-brand-logo" />entenco</span>
            <span className="rrss-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="rrss-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="rrss-nav-row">
            <button type="button" className="rrss-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="rrss-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`rrss-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="rrss-nav-btn rrss-nav-btn--primary"
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

.rrss-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FDF3E6;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.rrss-shell * { box-sizing: border-box; }

.rrss-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #F5DDBB;
  flex-shrink: 0;
}
.rrss-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.rrss-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.rrss-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #C9A06A;
  white-space: nowrap;
  flex-shrink: 0;
}

.rrss-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.rrss-deck {
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

.rrss-deck-body {
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

.rrss-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.rrss-slide--cover { gap: 14px; }
.rrss-slide--part { justify-content: flex-start; }

.rrss-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #D9822B;
}

.rrss-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #D9822B;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.rrss-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 44px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #D9822B;
}

.rrss-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #9A5A12;
  background: #FDF3E6;
  border: 2.5px solid #D9822B;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.rrss-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #D9822B;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.rrss-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.rrss-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3F2A0E;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.rrss-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #D9822B;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.rrss-bubble--solo { max-width: 720px; }
.rrss-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.rrss-bubble-text--big { font-size: 24px; font-style: italic; }

.rrss-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.rrss-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #C9A06A;
  margin: 0;
  max-width: 620px;
}
.rrss-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.rrss-panel { background: #FDF3E6; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.rrss-panel--right { border-color: #D9822B; }
.rrss-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #9A5A12;
  margin-bottom: 8px;
}
.rrss-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.rrss-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3F2A0E;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.rrss-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.rrss-speaking-list li { margin-bottom: 8px; }

.rrss-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.rrss-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FDF3E6;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.rrss-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #D9822B;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.rrss-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.rrss-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.rrss-quiz-item {
  background: #FDF3E6;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.rrss-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.rrss-reveal-btn {
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
.rrss-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.rrss-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.rrss-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #F5DDBB; flex-shrink: 0; }
.rrss-nav-btn {
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
.rrss-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.rrss-nav-btn--primary { background: #FFC300; }
.rrss-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.rrss-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.rrss-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.rrss-nav-dot.is-active { background: #D9822B; }
`;
