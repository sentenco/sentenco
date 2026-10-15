import { useState } from "react";

const LESSON = {
  "title": "Hear / Listen, See / Look / Watch",
  "formula": "hear · see = it happens  ·  listen to · look at · watch = on purpose",
  "leadIn": "Sit still for ten seconds. What can you hear? What can you see? Now choose one thing to listen to or look at, and tell me about it.",
  "importance": [
    "English uses different verbs for noticing something and paying attention to it. Learners who use one verb for both sound unnatural.",
    "Listen and look need a small word after them, listen to and look at, and forgetting it is a very common mistake.",
    "Watch is for things that move or change, like a film or a match, so it is the verb you need for most entertainment."
  ],
  "teach": [
    {
      "name": "Hear and See: It Just Happens",
      "definition": "Hear and see describe what your ears and eyes pick up without trying. They take the object directly, and they are not usually used in the continuous form.",
      "examples": [
        "I hear music from the next room.",
        "She sees a bird outside the window.",
        "Can you hear me?"
      ]
    },
    {
      "name": "Listen and Look: On Purpose",
      "definition": "Listen and look mean you choose to give attention. They need a small word first: listen to, look at.",
      "examples": [
        "Please listen to the teacher.",
        "Look at the board.",
        "I listened carefully, but I did not hear anything."
      ]
    },
    {
      "name": "Watch: Look at Something That Moves",
      "definition": "Watch means to look at something that moves or changes for some time, such as TV, a match, or children playing. It takes the object directly, with no small word.",
      "examples": [
        "We watch a movie every Friday.",
        "She watched the children play in the park.",
        "Watch out for the wet floor."
      ]
    }
  ],
  "compareLeftLabel": "Hear, see: it happens to you",
  "compareRightLabel": "Listen, look, watch: you choose",
  "compareNote": "Hear and see happen without trying. Listen to, look at and watch are on purpose. Only listen and look need a small word after them.",
  "comparePairs": [
    {
      "left": "I heard a noise outside.",
      "right": "I listened to the noise outside."
    },
    {
      "left": "I saw a bird in the tree.",
      "right": "I looked at the bird in the tree."
    },
    {
      "left": "I see the match from my window.",
      "right": "I watch the match on TV."
    }
  ],
  "guided": [
    {
      "prompt": "I can ___ (hear/listen) a strange noise outside.",
      "answer": "hear"
    },
    {
      "prompt": "From my window, I can ___ (see/watch) the mountains.",
      "answer": "see"
    },
    {
      "prompt": "Can you ___ (hear/listen) the music from here?",
      "answer": "hear"
    },
    {
      "prompt": "Please ___ (hear/listen) to the teacher.",
      "answer": "listen"
    },
    {
      "prompt": "___ (See/Look) at this picture!",
      "answer": "Look"
    },
    {
      "prompt": "She looked ___ (to/at) the clock.",
      "answer": "at"
    },
    {
      "prompt": "We ___ (see/watch) a film together every Friday.",
      "answer": "watch"
    },
    {
      "prompt": "He ___ (looked/watched) the children play in the park for an hour.",
      "answer": "watched"
    },
    {
      "prompt": "___ (Watch/See) out! The floor is wet.",
      "answer": "Watch"
    }
  ],
  "practice": [
    "Say what you can hear and see right now without moving.",
    "Say what you listen to and what you watch every week.",
    "Write two sentences, one with look at and one with listen to."
  ],
  "wrapup": "Hear and see happen without trying. Listen to and look at are on purpose and need a small word after them. Watch is a deliberate look at something that moves or changes."
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
    <div className="hlsl-slide hlsl-slide--cover">
      <span className="hlsl-kind-badge">Lesson Time!</span>
      <h2 className="hlsl-cover-title">{lesson.title}</h2>
      <span className="hlsl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="hlsl-slide">
      <span className="hlsl-eyebrow">Warm-up</span>
      <div className="hlsl-bubble hlsl-bubble--solo">
        <p className="hlsl-bubble-text hlsl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="hlsl-slide hlsl-slide--part">
      <h3 className="hlsl-h">Why This Matters</h3>
      <div className="hlsl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="hlsl-importance-item">
            <span className="hlsl-importance-num">{i + 1}</span>
            <p className="hlsl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="hlsl-slide">
      <h3 className="hlsl-h">{concept.name}</h3>
      <p className="hlsl-definition">{concept.definition}</p>
      <div className="hlsl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="hlsl-bubble">
            <p className="hlsl-bubble-text">{ex}</p>
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
    <div className="hlsl-slide">
      <span className="hlsl-eyebrow">Think About It</span>
      <h3 className="hlsl-h">{left} <span className="hlsl-vs">vs</span> {right}</h3>
      <p className="hlsl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="hlsl-slide">
      <h3 className="hlsl-h">{lesson.compareLeftLabel} <span className="hlsl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="hlsl-compare-note">{lesson.compareNote}</p>
      <div className="hlsl-compare-grid">
        <div className="hlsl-panel">
          <span className="hlsl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="hlsl-compare-line">{pair.left}</p>)}
        </div>
        <div className="hlsl-panel hlsl-panel--right">
          <span className="hlsl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="hlsl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="hlsl-quiz-item">
      <p className="hlsl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="hlsl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="hlsl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="hlsl-slide hlsl-slide--part">
      <h3 className="hlsl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="hlsl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="hlsl-slide hlsl-slide--part">
      <h3 className="hlsl-h">Speaking &amp; writing practice</h3>
      <ul className="hlsl-list hlsl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="hlsl-slide">
      <h3 className="hlsl-h">Wrap-up</h3>
      <p className="hlsl-definition">{lesson.wrapup}</p>
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

export default function HearListenSeeLookLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="hlsl-shell">
      <style>{CSS}</style>
      <div className="hlsl-stage">
        <div className="hlsl-deck">
          <div className="hlsl-deck-header">
            <span className="hlsl-brand"><img src="/logo-sentenco.png" alt="" className="hlsl-brand-logo" />entenco</span>
            <span className="hlsl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="hlsl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="hlsl-nav-row">
            <button type="button" className="hlsl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="hlsl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`hlsl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="hlsl-nav-btn hlsl-nav-btn--primary"
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

.hlsl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #E8F6EF;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.hlsl-shell * { box-sizing: border-box; }

.hlsl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #C4E8D6;
  flex-shrink: 0;
}
.hlsl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.hlsl-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.hlsl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #82BFA2;
  white-space: nowrap;
  flex-shrink: 0;
}

.hlsl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.hlsl-deck {
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

.hlsl-deck-body {
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

.hlsl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.hlsl-slide--cover { gap: 14px; }
.hlsl-slide--part { justify-content: flex-start; }

.hlsl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #2E9E6B;
}

.hlsl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #2E9E6B;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.hlsl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 44px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #2E9E6B;
}

.hlsl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1E7149;
  background: #E8F6EF;
  border: 2.5px solid #2E9E6B;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.hlsl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #2E9E6B;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.hlsl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.hlsl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #0F3E2A;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.hlsl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #2E9E6B;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.hlsl-bubble--solo { max-width: 720px; }
.hlsl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.hlsl-bubble-text--big { font-size: 24px; font-style: italic; }

.hlsl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.hlsl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #82BFA2;
  margin: 0;
  max-width: 620px;
}
.hlsl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.hlsl-panel { background: #E8F6EF; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.hlsl-panel--right { border-color: #2E9E6B; }
.hlsl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #1E7149;
  margin-bottom: 8px;
}
.hlsl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.hlsl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #0F3E2A;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.hlsl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.hlsl-speaking-list li { margin-bottom: 8px; }

.hlsl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.hlsl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #E8F6EF;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.hlsl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #2E9E6B;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.hlsl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.hlsl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.hlsl-quiz-item {
  background: #E8F6EF;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.hlsl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.hlsl-reveal-btn {
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
.hlsl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.hlsl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.hlsl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #C4E8D6; flex-shrink: 0; }
.hlsl-nav-btn {
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
.hlsl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.hlsl-nav-btn--primary { background: #FFC300; }
.hlsl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.hlsl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.hlsl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.hlsl-nav-dot.is-active { background: #2E9E6B; }
`;
