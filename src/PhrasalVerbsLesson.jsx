import { useState } from "react";

const LESSON = {
  title: "Phrasal Verbs: Separable vs Inseparable",
  formula: "separable: verb + particle + object OR verb + object + particle  ·  inseparable: verb + particle + object only",
  leadIn: "Think of one thing you need to turn off before bed tonight.",
  importance: [
    "Phrasal verbs are everywhere in real spoken English — native speakers reach for them far more often than the single-word formal equivalent (find out vs. discover, give up vs. abandon).",
    "The meaning is often nothing like the individual words, so guessing from vocabulary alone fails constantly — this is a pattern that has to be learned directly, not inferred.",
    "Separable vs. inseparable decides where the object physically goes in the sentence, and with a pronoun it's not optional — getting it wrong sounds clearly off to a native ear.",
  ],
  teach: [
    {
      name: "What Is a Phrasal Verb?",
      definition: "A phrasal verb combines a verb with one or more particles (small words like up, off, into) to create a meaning that's often completely different from the verb alone.",
      examples: ["give up (quit) vs. give (hand over)", "look after (care for) vs. look (see)", "turn off (stop) vs. turn (rotate)"],
    },
    {
      name: "Separable Phrasal Verbs: The Object Can Move",
      definition: "With separable phrasal verbs, the object can go either after the whole phrase or between the verb and the particle. With pronouns, it must go in the middle.",
      examples: ["Turn off the light. / Turn the light off.", "She picked up her keys. / She picked her keys up.", "Turn it off. (not 'turn off it')"],
    },
    {
      name: "Inseparable Phrasal Verbs: The Object Can't Move",
      definition: "With inseparable phrasal verbs, the object always stays after the whole phrase: it can never go in the middle.",
      examples: ["She looks after her little brother. (not 'looks her little brother after')", "He ran into an old friend.", "I'm looking for my keys."],
    },
  ],
  compareLeftLabel: "Separable: object can move",
  compareRightLabel: "Inseparable: object stays after",
  compareNote: "There's no shortcut to know which is which. It has to be learned phrasal verb by phrasal verb. But the pronoun test always works: try it or him. If that sounds wrong in the middle, the verb is inseparable.",
  comparePairs: [
    { left: "Turn it off. (separable, pronoun must be in the middle)", right: "Look after it. (inseparable, pronoun stays after)" },
    { left: "She picked it up.", right: "He ran into it." },
  ],
  guided: [
    { prompt: "Please turn ___ the TV ___. (separable, can split)", answer: "turn the TV off / turn off the TV" },
    { prompt: "Can you turn ___ off? (pronoun, must be in the middle)", answer: "it" },
    { prompt: "She picked ___ her keys ___ before leaving. (separable, can split)", answer: "picked her keys up / picked up her keys" },
    { prompt: "She looks ___ her grandmother every weekend. (inseparable, can't split)", answer: "after" },
    { prompt: "He ran ___ an old friend at the mall. (inseparable, can't split)", answer: "into" },
    { prompt: "I'm looking ___ my glasses. Have you seen them? (inseparable)", answer: "for" },
  ],
  practice: [
    "Write one sentence with a separable phrasal verb, splitting the verb and particle.",
    "Write one sentence with an inseparable phrasal verb.",
    "Take one of your separable sentences and replace the object with a pronoun. Where does it go?",
  ],
  wrapup: "Separable phrasal verbs let the object move between the verb and particle (and pronouns must go there). Inseparable phrasal verbs always keep the object after the whole phrase.",
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
    <div className="phvl-slide phvl-slide--cover">
      <span className="phvl-kind-badge">Lesson Time!</span>
      <h2 className="phvl-cover-title">{lesson.title}</h2>
      <span className="phvl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="phvl-slide">
      <span className="phvl-eyebrow">Warm-up</span>
      <div className="phvl-bubble phvl-bubble--solo">
        <p className="phvl-bubble-text phvl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="phvl-slide phvl-slide--part">
      <h3 className="phvl-h">Why Phrasal Verbs Matter</h3>
      <div className="phvl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="phvl-importance-item">
            <span className="phvl-importance-num">{i + 1}</span>
            <p className="phvl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="phvl-slide">
      <h3 className="phvl-h">{concept.name}</h3>
      <p className="phvl-definition">{concept.definition}</p>
      <div className="phvl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="phvl-bubble">
            <p className="phvl-bubble-text">{ex}</p>
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
    <div className="phvl-slide">
      <span className="phvl-eyebrow">Think About It</span>
      <h3 className="phvl-h">{left} <span className="phvl-vs">vs</span> {right}</h3>
      <p className="phvl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="phvl-slide">
      <h3 className="phvl-h">{lesson.compareLeftLabel} <span className="phvl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="phvl-compare-note">{lesson.compareNote}</p>
      <div className="phvl-compare-grid">
        <div className="phvl-panel">
          <span className="phvl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="phvl-compare-line">{pair.left}</p>)}
        </div>
        <div className="phvl-panel phvl-panel--right">
          <span className="phvl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="phvl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="phvl-quiz-item">
      <p className="phvl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="phvl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="phvl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="phvl-slide phvl-slide--part">
      <h3 className="phvl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="phvl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="phvl-slide phvl-slide--part">
      <h3 className="phvl-h">Speaking &amp; writing practice</h3>
      <ul className="phvl-list phvl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="phvl-slide">
      <h3 className="phvl-h">Wrap-up</h3>
      <p className="phvl-definition">{lesson.wrapup}</p>
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

export default function PhrasalVerbsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="phvl-shell">
      <style>{CSS}</style>

      <div className="phvl-stage">
        <div className="phvl-deck">
          <div className="phvl-deck-header">
            <span className="phvl-brand"><img src="/logo-sentenco.png" alt="" className="phvl-brand-logo" />entenco</span>
            <span className="phvl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="phvl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="phvl-nav-row">
            <button type="button" className="phvl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="phvl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`phvl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="phvl-nav-btn phvl-nav-btn--primary"
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

.phvl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FBF0F8;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.phvl-shell * { box-sizing: border-box; }

.phvl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #F3D6EC;
  flex-shrink: 0;
}
.phvl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.phvl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.phvl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #A6238C;
  white-space: nowrap;
  flex-shrink: 0;
}

.phvl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.phvl-deck {
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

.phvl-deck-body {
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

.phvl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.phvl-slide--cover { gap: 14px; }
.phvl-slide--part { justify-content: flex-start; }

.phvl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #A6238C;
}

.phvl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #A6238C;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.phvl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 40px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #A6238C;
}

.phvl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #8A1B72;
  background: #FBF0F8;
  border: 2.5px solid #A6238C;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.phvl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #A6238C;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.phvl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.phvl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3A1E33;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.phvl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #A6238C;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.phvl-bubble--solo { max-width: 720px; }
.phvl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.phvl-bubble-text--big { font-size: 24px; font-style: italic; }

.phvl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.phvl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #C568B2;
  margin: 0;
  max-width: 620px;
}
.phvl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.phvl-panel { background: #FBF0F8; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.phvl-panel--right { border-color: #A6238C; }
.phvl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #8A1B72;
  margin-bottom: 8px;
}
.phvl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.phvl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A1E33;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.phvl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.phvl-speaking-list li { margin-bottom: 8px; }

.phvl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.phvl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FBF0F8;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.phvl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #A6238C;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.phvl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.phvl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.phvl-quiz-item {
  background: #FBF0F8;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.phvl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.phvl-reveal-btn {
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
.phvl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.phvl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.phvl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #F3D6EC; flex-shrink: 0; }
.phvl-nav-btn {
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
.phvl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.phvl-nav-btn--primary { background: #FFC300; }
.phvl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.phvl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.phvl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.phvl-nav-dot.is-active { background: #A6238C; }
`;
