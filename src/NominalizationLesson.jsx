import { useState } from "react";

const LESSON = {
  title: "Nominalization for Formal Writing",
  formula: "decide → decision · analyze → analysis (verb → noun)  ·  different → difference · aware → awareness (adjective → noun)",
  leadIn: "Compare these two: “We decided quickly.” vs “The decision was quick.” Which one sounds more like a business report?",
  importance: [
    "Nominalization is one of the defining features separating academic and business writing from everyday speech, so it's directly useful for essays, reports, and professional emails.",
    "It shifts a sentence's focus from who did something to the fact or result itself, which is exactly the tone formal writing expects — a genuine stylistic tool, not just a word-form swap.",
    "Recognizing these verb-to-noun and adjective-to-noun pairs (decide/decision, aware/awareness) also builds vocabulary breadth, since one root now unlocks two usable words instead of one.",
  ],
  teach: [
    {
      name: "Turning Verbs into Nouns",
      definition: "Many verbs have a noun form used in formal, academic, or business writing to sound more objective and less personal.",
      examples: ["decide → decision", "analyze → analysis", "arrive → arrival"],
    },
    {
      name: "Turning Adjectives into Nouns",
      definition: "The same shift happens with adjectives, letting formal writing name a quality as a thing instead of just describing it.",
      examples: ["different → difference", "significant → significance", "aware → awareness"],
    },
  ],
  compareLeftLabel: "Verb / adjective: direct, personal",
  compareRightLabel: "Nominalization: formal, objective",
  compareNote: "Nominalizing turns an action or quality into a 'thing' you can discuss: swapping 'we decided' for 'the decision was made' shifts the focus from who did it to the fact itself, which is exactly what formal writing wants.",
  comparePairs: [
    { left: "We decided to expand the business.", right: "The decision to expand the business was made." },
    { left: "The results were significant.", right: "The significance of the results was clear." },
  ],
  guided: [
    { prompt: "Turn into a noun: analyze → ___", answer: "analysis" },
    { prompt: "Turn into a noun: arrive → ___", answer: "arrival" },
    { prompt: "Rewrite formally: 'We decided to expand.' → 'The ___ to expand was made.'", answer: "decision" },
    { prompt: "Turn into a noun: different → ___", answer: "difference" },
    { prompt: "Turn into a noun: aware → ___", answer: "awareness" },
    { prompt: "Rewrite formally: 'The results were significant.' → 'The ___ of the results was clear.'", answer: "significance" },
  ],
  practice: [
    "Write one formal sentence using a nominalized verb, like decision or analysis.",
    "Write one formal sentence using a nominalized adjective, like difference or awareness.",
    "Take one of your own casual sentences and rewrite it formally using nominalization.",
  ],
  wrapup: "Nominalization turns a verb or adjective into a noun (decide into decision, different into difference), letting formal and academic writing name an action or quality as a thing, rather than describing it directly.",
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
    <div className="noml-slide noml-slide--cover">
      <span className="noml-kind-badge">Lesson Time!</span>
      <h2 className="noml-cover-title">{lesson.title}</h2>
      <span className="noml-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="noml-slide">
      <span className="noml-eyebrow">Warm-up</span>
      <div className="noml-bubble noml-bubble--solo">
        <p className="noml-bubble-text noml-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="noml-slide noml-slide--part">
      <h3 className="noml-h">Why This Matters</h3>
      <div className="noml-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="noml-importance-item">
            <span className="noml-importance-num">{i + 1}</span>
            <p className="noml-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="noml-slide">
      <h3 className="noml-h">{concept.name}</h3>
      <p className="noml-definition">{concept.definition}</p>
      <div className="noml-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="noml-bubble">
            <p className="noml-bubble-text">{ex}</p>
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
    <div className="noml-slide">
      <span className="noml-eyebrow">Think About It</span>
      <h3 className="noml-h">{left} <span className="noml-vs">vs</span> {right}</h3>
      <p className="noml-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="noml-slide">
      <h3 className="noml-h">{lesson.compareLeftLabel} <span className="noml-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="noml-compare-note">{lesson.compareNote}</p>
      <div className="noml-compare-grid">
        <div className="noml-panel">
          <span className="noml-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="noml-compare-line">{pair.left}</p>)}
        </div>
        <div className="noml-panel noml-panel--right">
          <span className="noml-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="noml-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="noml-quiz-item">
      <p className="noml-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="noml-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="noml-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="noml-slide noml-slide--part">
      <h3 className="noml-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="noml-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="noml-slide noml-slide--part">
      <h3 className="noml-h">Speaking &amp; writing practice</h3>
      <ul className="noml-list noml-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="noml-slide">
      <h3 className="noml-h">Wrap-up</h3>
      <p className="noml-definition">{lesson.wrapup}</p>
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

export default function NominalizationLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="noml-shell">
      <style>{CSS}</style>

      <div className="noml-stage">
        <div className="noml-deck">
          <div className="noml-deck-header">
            <span className="noml-brand"><img src="/logo-sentivo.png" alt="" className="noml-brand-logo" />entenco</span>
            <span className="noml-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="noml-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="noml-nav-row">
            <button type="button" className="noml-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="noml-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`noml-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="noml-nav-btn noml-nav-btn--primary"
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

.noml-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #E9F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.noml-shell * { box-sizing: border-box; }

.noml-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #CDE7E8;
  flex-shrink: 0;
}
.noml-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.noml-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.noml-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #0E7C86;
  white-space: nowrap;
  flex-shrink: 0;
}

.noml-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.noml-deck {
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

.noml-deck-body {
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

.noml-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.noml-slide--cover { gap: 14px; }
.noml-slide--part { justify-content: flex-start; }

.noml-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #0E7C86;
}

.noml-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #0E7C86;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.noml-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 54px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #0E7C86;
}

.noml-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #0A5B62;
  background: #E9F5F5;
  border: 2.5px solid #0E7C86;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.noml-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #0E7C86;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.noml-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.noml-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #103F42;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.noml-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #0E7C86;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.noml-bubble--solo { max-width: 720px; }
.noml-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.noml-bubble-text--big { font-size: 24px; font-style: italic; }

.noml-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.noml-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #7FB8BD;
  margin: 0;
  max-width: 620px;
}
.noml-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.noml-panel { background: #E9F5F5; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.noml-panel--right { border-color: #0E7C86; }
.noml-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #0A5B62;
  margin-bottom: 8px;
}
.noml-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.noml-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #103F42;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.noml-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.noml-speaking-list li { margin-bottom: 8px; }

.noml-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.noml-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #E9F5F5;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.noml-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #0E7C86;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.noml-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.noml-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.noml-quiz-item {
  background: #E9F5F5;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.noml-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.noml-reveal-btn {
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
.noml-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.noml-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.noml-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #CDE7E8; flex-shrink: 0; }
.noml-nav-btn {
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
.noml-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.noml-nav-btn--primary { background: #FFC300; }
.noml-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.noml-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.noml-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.noml-nav-dot.is-active { background: #0E7C86; }
`;
