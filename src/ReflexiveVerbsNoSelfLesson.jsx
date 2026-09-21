import { useState } from "react";

const LESSON = {
  title: "Reflexive Verbs That Don't Need \"-self\"",
  formula: "concentrate/relax/wake up (no -self)  ·  hurt/introduce/enjoy (needs -self)",
  leadIn: "In your first language, do you say the equivalent of “I wash myself” or just “I wash”? How is English different?",
  importance: [
    "Speakers of many languages translate their own reflexive habits directly into English, producing a very specific, recognizable error pattern (\"concentrate myself,\" \"relax yourself\").",
    "These verbs are extremely common in daily instructions and small talk, so the mistake shows up constantly, not occasionally.",
    "There's genuinely no shortcut rule here — it has to be learned as two lists, which is exactly why deliberate, explicit teaching makes the real difference over just exposure.",
  ],
  teach: [
    {
      name: "English Verbs That Drop the Reflexive",
      definition: "Many languages require a reflexive pronoun for actions someone does to themselves, but English treats these as simple, object-free actions: no myself, yourself, etc. needed.",
      examples: ["I need to concentrate. (not 'concentrate myself')", "Please relax. (not 'relax yourself')", "She woke up late. (not 'woke herself up')"],
    },
    {
      name: "When English Still Needs It",
      definition: "A smaller set of English verbs genuinely do need the reflexive pronoun. Mixing these up with the drop-it group is the real source of the confusion.",
      examples: ["He hurt himself while skiing.", "Introduce yourself to the class.", "They really enjoyed themselves at the party."],
    },
  ],
  compareLeftLabel: "Drops the reflexive",
  compareRightLabel: "Keeps the reflexive",
  compareNote: "There's no shortcut rule: concentrate, relax, wake up, hurry, feel, behave, sit down, and get up all drop it, while hurt, introduce, enjoy, and a few others genuinely need it. Learn them as two separate lists.",
  comparePairs: [
    { left: "I woke up at 7. (no reflexive)", right: "I really enjoyed myself. (needs the reflexive)" },
    { left: "Please relax, everything is fine. (no reflexive)", right: "He hurt himself while skiing. (needs the reflexive)" },
  ],
  guided: [
    { prompt: "I need to ___ (concentrate/concentrate myself) on my homework.", answer: "concentrate" },
    { prompt: "Please ___ (relax/relax yourself), everything is fine.", answer: "relax" },
    { prompt: "He ___ (woke up/woke himself up) at six this morning.", answer: "woke up" },
    { prompt: "She ___ (hurt/hurt herself) while playing basketball. (needs the reflexive)", answer: "hurt herself" },
    { prompt: "Please ___ (introduce/introduce yourself) to the new student. (needs the reflexive)", answer: "introduce yourself" },
    { prompt: "We really ___ (enjoyed/enjoyed ourselves) at the concert. (needs the reflexive)", answer: "enjoyed ourselves" },
  ],
  practice: [
    "Write one sentence using concentrate, relax, or wake up correctly, with no -self word.",
    "Write one sentence using hurt, introduce, or enjoy correctly, with the reflexive pronoun.",
    "Ask a partner to guess whether a verb needs -self or not, and check the answer together.",
  ],
  wrapup: "A group of everyday English verbs (concentrate, relax, wake up, hurry) never take a reflexive pronoun, unlike in many other languages. A smaller group (hurt, introduce, enjoy) genuinely needs it. There's no shortcut, just two lists to learn.",
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
    <div className="rvsl-slide rvsl-slide--cover">
      <span className="rvsl-kind-badge">Lesson Time!</span>
      <h2 className="rvsl-cover-title">{lesson.title}</h2>
      <span className="rvsl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="rvsl-slide">
      <span className="rvsl-eyebrow">Warm-up</span>
      <div className="rvsl-bubble rvsl-bubble--solo">
        <p className="rvsl-bubble-text rvsl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="rvsl-slide rvsl-slide--part">
      <h3 className="rvsl-h">Why This Matters</h3>
      <div className="rvsl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="rvsl-importance-item">
            <span className="rvsl-importance-num">{i + 1}</span>
            <p className="rvsl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="rvsl-slide">
      <h3 className="rvsl-h">{concept.name}</h3>
      <p className="rvsl-definition">{concept.definition}</p>
      <div className="rvsl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="rvsl-bubble">
            <p className="rvsl-bubble-text">{ex}</p>
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
    <div className="rvsl-slide">
      <span className="rvsl-eyebrow">Think About It</span>
      <h3 className="rvsl-h">{left} <span className="rvsl-vs">vs</span> {right}</h3>
      <p className="rvsl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="rvsl-slide">
      <h3 className="rvsl-h">{lesson.compareLeftLabel} <span className="rvsl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="rvsl-compare-note">{lesson.compareNote}</p>
      <div className="rvsl-compare-grid">
        <div className="rvsl-panel">
          <span className="rvsl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="rvsl-compare-line">{pair.left}</p>)}
        </div>
        <div className="rvsl-panel rvsl-panel--right">
          <span className="rvsl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="rvsl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="rvsl-quiz-item">
      <p className="rvsl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="rvsl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="rvsl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="rvsl-slide rvsl-slide--part">
      <h3 className="rvsl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="rvsl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="rvsl-slide rvsl-slide--part">
      <h3 className="rvsl-h">Speaking &amp; writing practice</h3>
      <ul className="rvsl-list rvsl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="rvsl-slide">
      <h3 className="rvsl-h">Wrap-up</h3>
      <p className="rvsl-definition">{lesson.wrapup}</p>
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

export default function ReflexiveVerbsNoSelfLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="rvsl-shell">
      <style>{CSS}</style>

      <div className="rvsl-stage">
        <div className="rvsl-deck">
          <div className="rvsl-deck-header">
            <span className="rvsl-brand"><img src="/logo-sentivo.png" alt="" className="rvsl-brand-logo" />entenco</span>
            <span className="rvsl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="rvsl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="rvsl-nav-row">
            <button type="button" className="rvsl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="rvsl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`rvsl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="rvsl-nav-btn rvsl-nav-btn--primary"
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

.rvsl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F2F8E4;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.rvsl-shell * { box-sizing: border-box; }

.rvsl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #DEEBC7;
  flex-shrink: 0;
}
.rvsl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.rvsl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.rvsl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6B9E1E;
  white-space: nowrap;
  flex-shrink: 0;
}

.rvsl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.rvsl-deck {
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

.rvsl-deck-body {
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

.rvsl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.rvsl-slide--cover { gap: 14px; }
.rvsl-slide--part { justify-content: flex-start; }

.rvsl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #6B9E1E;
}

.rvsl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #6B9E1E;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.rvsl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 46px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.15;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #6B9E1E;
}

.rvsl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4E7414;
  background: #F2F8E4;
  border: 2.5px solid #6B9E1E;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.rvsl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #6B9E1E;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.rvsl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.rvsl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #263A0F;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.rvsl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #6B9E1E;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.rvsl-bubble--solo { max-width: 720px; }
.rvsl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.rvsl-bubble-text--big { font-size: 24px; font-style: italic; }

.rvsl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.rvsl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #A0BE7C;
  margin: 0;
  max-width: 620px;
}
.rvsl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.rvsl-panel { background: #F2F8E4; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.rvsl-panel--right { border-color: #6B9E1E; }
.rvsl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #4E7414;
  margin-bottom: 8px;
}
.rvsl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.rvsl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #263A0F;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.rvsl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.rvsl-speaking-list li { margin-bottom: 8px; }

.rvsl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.rvsl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #F2F8E4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.rvsl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #6B9E1E;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.rvsl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.rvsl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.rvsl-quiz-item {
  background: #F2F8E4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.rvsl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.rvsl-reveal-btn {
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
.rvsl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.rvsl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.rvsl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #DEEBC7; flex-shrink: 0; }
.rvsl-nav-btn {
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
.rvsl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.rvsl-nav-btn--primary { background: #FFC300; }
.rvsl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.rvsl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.rvsl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.rvsl-nav-dot.is-active { background: #6B9E1E; }
`;
