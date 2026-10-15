import { useState } from "react";

const LESSON = {
  "title": "Lie / Lay",
  "formula": "lie (down) = no object  ·  lay (something) = needs an object",
  "leadIn": "Tell me what you did last Sunday afternoon. Did you lie down on the sofa, or lay something down? Use both words if you can.",
  "importance": [
    "Lie and lay are two different verbs with two different jobs, and mixing them up is one of the most common mistakes in English, even among native speakers.",
    "The trap is the past tense: lay is the past of lie, and it is also the base form of a different verb. One word, two meanings.",
    "Once you know one test, does something receive the action, you can fix almost every sentence."
  ],
  "teach": [
    {
      "name": "Lie: To Rest, No Object",
      "definition": "Lie means to rest or be in a flat position. Nothing receives the action, so it never takes an object. Its forms are lie, lay, lain, lying.",
      "examples": [
        "I lie down when I am tired.",
        "She lay on the sofa all afternoon.",
        "The keys have lain on that table since Monday."
      ]
    },
    {
      "name": "Lay: To Put Something Down",
      "definition": "Lay means to put something somewhere. It always needs an object: you lay something. Its forms are lay, laid, laid, laying.",
      "examples": [
        "Please lay the book on the table.",
        "He laid the baby in the crib.",
        "They have laid the new carpet in the hall."
      ]
    },
    {
      "name": "The Trap: Lay Is Also the Past of Lie",
      "definition": "The past tense of lie looks exactly like the base form of lay. Use the object test: if something receives the action, it is laid. If nothing does, it is lay, from lie.",
      "examples": [
        "I lay on the beach all day. (no object: past of lie)",
        "I laid my towel on the sand. (object: my towel)",
        "She lay down and laid her phone beside her."
      ]
    },
    {
      "name": "Lie: Not Telling the Truth",
      "definition": "This lie has nothing to do with lying down. It is a regular verb: lie, lied, lied, lying.",
      "examples": [
        "He lied about his age.",
        "Never lie to your teacher.",
        "She has never lied to her friends."
      ]
    }
  ],
  "compareLeftLabel": "Lie: no object",
  "compareRightLabel": "Lay: needs an object",
  "compareNote": "Ask what receives the action. If nothing receives it, use lie. If something receives it, use lay.",
  "comparePairs": [
    {
      "left": "I lie down after lunch.",
      "right": "I lay my bag down after lunch."
    },
    {
      "left": "The cat is lying on the sofa.",
      "right": "She is laying the plates on the table."
    },
    {
      "left": "He lay awake all night.",
      "right": "He laid the letter on the desk."
    }
  ],
  "guided": [
    {
      "prompt": "I am tired, so I want to ___ (lie/lay) down.",
      "answer": "lie"
    },
    {
      "prompt": "She is ___ (lying/laying) on the grass right now.",
      "answer": "lying"
    },
    {
      "prompt": "Yesterday afternoon, he ___ (lay/laid) on the sofa and watched TV.",
      "answer": "lay"
    },
    {
      "prompt": "Please ___ (lie/lay) your phone on the desk.",
      "answer": "lay"
    },
    {
      "prompt": "He is ___ (lying/laying) the baby in the crib.",
      "answer": "laying"
    },
    {
      "prompt": "They ___ (lay/laid) the new carpet last week.",
      "answer": "laid"
    },
    {
      "prompt": "I ___ (lay/laid) in bed for an hour this morning.",
      "answer": "lay"
    },
    {
      "prompt": "I ___ (lay/laid) my keys on the table and forgot them.",
      "answer": "laid"
    },
    {
      "prompt": "The dog has ___ (lain/laid) by the door all day.",
      "answer": "lain"
    },
    {
      "prompt": "He ___ (lied/lay) about where he was last night.",
      "answer": "lied"
    },
    {
      "prompt": "Never ___ (lie/lay) to your teacher.",
      "answer": "lie"
    },
    {
      "prompt": "She has never ___ (lied/lain) to her friends.",
      "answer": "lied"
    }
  ],
  "practice": [
    "Describe how you lie down when you are tired. Then say what you lay down first, such as your bag or your phone.",
    "Write two sentences in the past: one with the past of lie and one with the past of lay. Check each one with the object test.",
    "Write one true sentence with lied and one with laid."
  ],
  "wrapup": "Lie (lie, lay, lain) rests and takes no object. Lay (lay, laid, laid) puts something down and always needs an object. Lay is the past of lie, so always check for an object. Lie as in not telling the truth is regular: lie, lied, lied."
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
    <div className="lll-slide lll-slide--cover">
      <span className="lll-kind-badge">Lesson Time!</span>
      <h2 className="lll-cover-title">{lesson.title}</h2>
      <span className="lll-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="lll-slide">
      <span className="lll-eyebrow">Warm-up</span>
      <div className="lll-bubble lll-bubble--solo">
        <p className="lll-bubble-text lll-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="lll-slide lll-slide--part">
      <h3 className="lll-h">Why This Matters</h3>
      <div className="lll-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="lll-importance-item">
            <span className="lll-importance-num">{i + 1}</span>
            <p className="lll-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="lll-slide">
      <h3 className="lll-h">{concept.name}</h3>
      <p className="lll-definition">{concept.definition}</p>
      <div className="lll-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="lll-bubble">
            <p className="lll-bubble-text">{ex}</p>
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
    <div className="lll-slide">
      <span className="lll-eyebrow">Think About It</span>
      <h3 className="lll-h">{left} <span className="lll-vs">vs</span> {right}</h3>
      <p className="lll-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="lll-slide">
      <h3 className="lll-h">{lesson.compareLeftLabel} <span className="lll-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="lll-compare-note">{lesson.compareNote}</p>
      <div className="lll-compare-grid">
        <div className="lll-panel">
          <span className="lll-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="lll-compare-line">{pair.left}</p>)}
        </div>
        <div className="lll-panel lll-panel--right">
          <span className="lll-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="lll-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="lll-quiz-item">
      <p className="lll-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="lll-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="lll-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="lll-slide lll-slide--part">
      <h3 className="lll-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="lll-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="lll-slide lll-slide--part">
      <h3 className="lll-h">Speaking &amp; writing practice</h3>
      <ul className="lll-list lll-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="lll-slide">
      <h3 className="lll-h">Wrap-up</h3>
      <p className="lll-definition">{lesson.wrapup}</p>
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

export default function LieLayLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="lll-shell">
      <style>{CSS}</style>
      <div className="lll-stage">
        <div className="lll-deck">
          <div className="lll-deck-header">
            <span className="lll-brand"><img src="/logo-sentenco.png" alt="" className="lll-brand-logo" />entenco</span>
            <span className="lll-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="lll-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="lll-nav-row">
            <button type="button" className="lll-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="lll-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`lll-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="lll-nav-btn lll-nav-btn--primary"
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

.lll-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #EEF0FD;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.lll-shell * { box-sizing: border-box; }

.lll-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #D3D8F7;
  flex-shrink: 0;
}
.lll-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.lll-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.lll-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8E99DC;
  white-space: nowrap;
  flex-shrink: 0;
}

.lll-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.lll-deck {
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

.lll-deck-body {
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

.lll-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.lll-slide--cover { gap: 14px; }
.lll-slide--part { justify-content: flex-start; }

.lll-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #4C5FD5;
}

.lll-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #4C5FD5;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.lll-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 64px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #4C5FD5;
}

.lll-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #36448F;
  background: #EEF0FD;
  border: 2.5px solid #4C5FD5;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.lll-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #4C5FD5;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.lll-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.lll-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1B2252;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.lll-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #4C5FD5;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.lll-bubble--solo { max-width: 720px; }
.lll-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.lll-bubble-text--big { font-size: 24px; font-style: italic; }

.lll-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.lll-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #8E99DC;
  margin: 0;
  max-width: 620px;
}
.lll-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.lll-panel { background: #EEF0FD; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.lll-panel--right { border-color: #4C5FD5; }
.lll-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #36448F;
  margin-bottom: 8px;
}
.lll-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.lll-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1B2252;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.lll-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.lll-speaking-list li { margin-bottom: 8px; }

.lll-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.lll-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #EEF0FD;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.lll-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #4C5FD5;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.lll-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.lll-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.lll-quiz-item {
  background: #EEF0FD;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.lll-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.lll-reveal-btn {
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
.lll-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.lll-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.lll-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #D3D8F7; flex-shrink: 0; }
.lll-nav-btn {
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
.lll-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.lll-nav-btn--primary { background: #FFC300; }
.lll-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.lll-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.lll-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.lll-nav-dot.is-active { background: #4C5FD5; }
`;
