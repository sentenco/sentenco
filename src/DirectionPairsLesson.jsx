import { useState } from "react";

const LESSON = {
  "title": "Bring / Take, Come / Go, Borrow / Lend",
  "formula": "toward the speaker: bring · come · borrow  ·  away: take · go · lend",
  "leadIn": "Imagine you are inviting a friend to your house. What should they bring? What will you lend them? When will they come, and when will they go home?",
  "importance": [
    "These three pairs all depend on one question: is it coming toward the speaker, or going away? Answer that and you pick the right verb.",
    "Learners often say lend when they mean borrow, or go to my party when they mean come to my party, and it can change the meaning of a request.",
    "Borrow and lend are about who gives and who receives, so mixing them up can ask for the opposite of what you mean."
  ],
  "teach": [
    {
      "name": "Bring and Take: Toward or Away",
      "definition": "Bring means to carry something toward the place where the speaker or listener is. Take means to carry something away from that place.",
      "examples": [
        "Please bring your book to my desk.",
        "Take this umbrella with you when you leave.",
        "I will bring the cake to your party, and you can take the leftovers home."
      ]
    },
    {
      "name": "Come and Go: Toward or Away",
      "definition": "Come means to move toward the place where the speaker or listener is. Go means to move away, or to a different place.",
      "examples": [
        "Come here, please.",
        "I go to school at seven.",
        "Can you come to my house? I will go to yours next week."
      ]
    },
    {
      "name": "Borrow and Lend: Who Gives, Who Receives",
      "definition": "Borrow means you receive something and give it back later: borrow it from someone. Lend means you give it for a while: lend it to someone. The past of lend is lent.",
      "examples": [
        "Can I borrow your pen?",
        "She lent me her bike for the weekend.",
        "I borrowed some money from my brother, and he lent me more."
      ]
    }
  ],
  "compareLeftLabel": "Toward the speaker: bring, come, borrow",
  "compareRightLabel": "Away from the speaker: take, go, lend",
  "compareNote": "Ask one question for all three pairs. Does it move toward the speaker, or away? Bring, come and borrow are toward. Take, go and lend are away.",
  "comparePairs": [
    {
      "left": "Please bring me a glass of water.",
      "right": "Please take this glass to the kitchen."
    },
    {
      "left": "Come to my house after school.",
      "right": "I go to your house after school."
    },
    {
      "left": "Can I borrow your charger?",
      "right": "Can you lend me your charger?"
    }
  ],
  "guided": [
    {
      "prompt": "Please ___ (bring/take) me the red pen. I am at my desk.",
      "answer": "bring"
    },
    {
      "prompt": "Do not forget to ___ (bring/take) your umbrella when you leave the house.",
      "answer": "take"
    },
    {
      "prompt": "Can you ___ (bring/take) your laptop to my house tomorrow?",
      "answer": "bring"
    },
    {
      "prompt": "Can you ___ (come/go) to my party? It is at my house.",
      "answer": "come"
    },
    {
      "prompt": "I ___ (come/go) to the gym every morning.",
      "answer": "go"
    },
    {
      "prompt": "I will ___ (come/go) to your office at noon, when you are there.",
      "answer": "come"
    },
    {
      "prompt": "May I ___ (borrow/lend) your dictionary?",
      "answer": "borrow"
    },
    {
      "prompt": "She ___ (borrowed/lent) me her notes last week.",
      "answer": "lent"
    },
    {
      "prompt": "I ___ (borrowed/lent) a book from the library.",
      "answer": "borrowed"
    }
  ],
  "practice": [
    "Ask a classmate for something using borrow. Then answer with lend.",
    "Say two sentences about a party at your house: one with come and one with bring.",
    "Say what you take to school every day, and what you bring home."
  ],
  "wrapup": "Bring, come and borrow move toward the speaker. Take, go and lend move away. Borrow means you receive: borrow from someone. Lend means you give: lend to someone, and the past is lent."
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
    <div className="dpl-slide dpl-slide--cover">
      <span className="dpl-kind-badge">Lesson Time!</span>
      <h2 className="dpl-cover-title">{lesson.title}</h2>
      <span className="dpl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="dpl-slide">
      <span className="dpl-eyebrow">Warm-up</span>
      <div className="dpl-bubble dpl-bubble--solo">
        <p className="dpl-bubble-text dpl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="dpl-slide dpl-slide--part">
      <h3 className="dpl-h">Why This Matters</h3>
      <div className="dpl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="dpl-importance-item">
            <span className="dpl-importance-num">{i + 1}</span>
            <p className="dpl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="dpl-slide">
      <h3 className="dpl-h">{concept.name}</h3>
      <p className="dpl-definition">{concept.definition}</p>
      <div className="dpl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="dpl-bubble">
            <p className="dpl-bubble-text">{ex}</p>
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
    <div className="dpl-slide">
      <span className="dpl-eyebrow">Think About It</span>
      <h3 className="dpl-h">{left} <span className="dpl-vs">vs</span> {right}</h3>
      <p className="dpl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="dpl-slide">
      <h3 className="dpl-h">{lesson.compareLeftLabel} <span className="dpl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="dpl-compare-note">{lesson.compareNote}</p>
      <div className="dpl-compare-grid">
        <div className="dpl-panel">
          <span className="dpl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="dpl-compare-line">{pair.left}</p>)}
        </div>
        <div className="dpl-panel dpl-panel--right">
          <span className="dpl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="dpl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="dpl-quiz-item">
      <p className="dpl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="dpl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="dpl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="dpl-slide dpl-slide--part">
      <h3 className="dpl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="dpl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="dpl-slide dpl-slide--part">
      <h3 className="dpl-h">Speaking &amp; writing practice</h3>
      <ul className="dpl-list dpl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="dpl-slide">
      <h3 className="dpl-h">Wrap-up</h3>
      <p className="dpl-definition">{lesson.wrapup}</p>
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

export default function DirectionPairsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="dpl-shell">
      <style>{CSS}</style>
      <div className="dpl-stage">
        <div className="dpl-deck">
          <div className="dpl-deck-header">
            <span className="dpl-brand"><img src="/logo-sentenco.png" alt="" className="dpl-brand-logo" />entenco</span>
            <span className="dpl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="dpl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="dpl-nav-row">
            <button type="button" className="dpl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="dpl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`dpl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="dpl-nav-btn dpl-nav-btn--primary"
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

.dpl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FCEDF4;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.dpl-shell * { box-sizing: border-box; }

.dpl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #F4CBE0;
  flex-shrink: 0;
}
.dpl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.dpl-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.dpl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #CF8FB0;
  white-space: nowrap;
  flex-shrink: 0;
}

.dpl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.dpl-deck {
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

.dpl-deck-body {
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

.dpl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.dpl-slide--cover { gap: 14px; }
.dpl-slide--part { justify-content: flex-start; }

.dpl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #C2377E;
}

.dpl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #C2377E;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.dpl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 44px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #C2377E;
}

.dpl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #8F2560;
  background: #FCEDF4;
  border: 2.5px solid #C2377E;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.dpl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #C2377E;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.dpl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.dpl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #4A1634;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.dpl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #C2377E;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.dpl-bubble--solo { max-width: 720px; }
.dpl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.dpl-bubble-text--big { font-size: 24px; font-style: italic; }

.dpl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.dpl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #CF8FB0;
  margin: 0;
  max-width: 620px;
}
.dpl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.dpl-panel { background: #FCEDF4; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.dpl-panel--right { border-color: #C2377E; }
.dpl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #8F2560;
  margin-bottom: 8px;
}
.dpl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.dpl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #4A1634;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.dpl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.dpl-speaking-list li { margin-bottom: 8px; }

.dpl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.dpl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FCEDF4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.dpl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #C2377E;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.dpl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.dpl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.dpl-quiz-item {
  background: #FCEDF4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.dpl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.dpl-reveal-btn {
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
.dpl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.dpl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.dpl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #F4CBE0; flex-shrink: 0; }
.dpl-nav-btn {
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
.dpl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.dpl-nav-btn--primary { background: #FFC300; }
.dpl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.dpl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.dpl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.dpl-nav-dot.is-active { background: #C2377E; }
`;
