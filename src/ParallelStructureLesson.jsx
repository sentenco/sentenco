import { useState } from "react";

const LESSON = {
  title: "Parallel Structure",
  formula: "match the form: all -ing, all to + verb, or all one word class, never mixed",
  leadIn: "Read this out loud: “I like swimming, running, and to bike.” Does something feel off about the last item?",
  importance: [
    "Broken parallel structure is one of the most common reasons a sentence sounds \"off\" to a native ear, even when the listener can't say exactly why — it disrupts rhythm, not just grammar.",
    "This shows up everywhere writing matters: resumes, essays, presentations, professional emails — anywhere a list or comparison appears, which is almost everywhere.",
    "There's a simple, repeatable fix (match the first item's form), so this is a high-payoff editing skill you can apply to your own writing right away, not just something to recognize.",
  ],
  teach: [
    {
      name: "Parallel Structure in Lists",
      definition: "Items in a list joined by and, or, or commas should all take the same grammatical form: all gerunds, all infinitives, or all the same word class.",
      examples: ["I like swimming, running, and biking. (not 'to bike')", "She is smart, funny, and kind. (all adjectives)", "The plan is to save money, to invest wisely, and to retire early. (all infinitives)"],
    },
    {
      name: "Parallel Structure in Comparisons & Correlative Pairs",
      definition: "The two halves of a comparison or a correlative pair (both...and, either...or, not only...but also) need to match in form too, not just the items in a simple list.",
      examples: ["She likes hiking more than swimming. (not 'more than to swim')", "He not only wrote the report but also gave the presentation.", "Either you call her or you email her."],
    },
  ],
  compareLeftLabel: "Broken parallel structure",
  compareRightLabel: "Fixed: matching forms",
  compareNote: "The fix is almost always the same: find the first item's grammatical form, then make every other item in the list or pair match it exactly.",
  comparePairs: [
    { left: "I like swimming, running, and to bike.", right: "I like swimming, running, and biking." },
    { left: "She is smart, funny, and has kindness.", right: "She is smart, funny, and kind." },
  ],
  guided: [
    { prompt: "I enjoy reading, writing, and ___ (to paint/painting). (match the -ing form)", answer: "painting" },
    { prompt: "She is kind, patient, and ___ (understanding/she understands). (match the adjective form)", answer: "understanding" },
    { prompt: "The coach told us to run faster, jump higher, and ___ (working/to work) harder. (match the infinitive)", answer: "to work" },
    { prompt: "He would rather stay home than ___ (going/go) to the party. (match the base verb)", answer: "go" },
    { prompt: "Not only did he finish first, but he ___ (also broke/also breaking) the record. (match the verb form)", answer: "also broke" },
    { prompt: "Either we fix this now or ___ (we will/fixing it) regret it later. (match the clause form)", answer: "we will" },
  ],
  practice: [
    "Write one sentence with a list of three parallel gerunds (-ing forms).",
    "Write one sentence with a broken parallel structure, then fix it.",
    "Write one sentence using a correlative pair (either...or, not only...but also) with matching forms on both sides.",
  ],
  wrapup: "When items are joined in a list, comparison, or correlative pair, they all need to share the same grammatical form: mixing gerunds, infinitives, and plain verbs in the same list breaks the rhythm and the rule.",
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
    <div className="psl-slide psl-slide--cover">
      <span className="psl-kind-badge">Lesson Time!</span>
      <h2 className="psl-cover-title">{lesson.title}</h2>
      <span className="psl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="psl-slide">
      <span className="psl-eyebrow">Warm-up</span>
      <div className="psl-bubble psl-bubble--solo">
        <p className="psl-bubble-text psl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="psl-slide psl-slide--part">
      <h3 className="psl-h">Why This Matters</h3>
      <div className="psl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="psl-importance-item">
            <span className="psl-importance-num">{i + 1}</span>
            <p className="psl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="psl-slide">
      <h3 className="psl-h">{concept.name}</h3>
      <p className="psl-definition">{concept.definition}</p>
      <div className="psl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="psl-bubble">
            <p className="psl-bubble-text">{ex}</p>
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
    <div className="psl-slide">
      <span className="psl-eyebrow">Think About It</span>
      <h3 className="psl-h">{left} <span className="psl-vs">vs</span> {right}</h3>
      <p className="psl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="psl-slide">
      <h3 className="psl-h">{lesson.compareLeftLabel} <span className="psl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="psl-compare-note">{lesson.compareNote}</p>
      <div className="psl-compare-grid">
        <div className="psl-panel">
          <span className="psl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="psl-compare-line">{pair.left}</p>)}
        </div>
        <div className="psl-panel psl-panel--right">
          <span className="psl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="psl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="psl-quiz-item">
      <p className="psl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="psl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="psl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="psl-slide psl-slide--part">
      <h3 className="psl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="psl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="psl-slide psl-slide--part">
      <h3 className="psl-h">Speaking &amp; writing practice</h3>
      <ul className="psl-list psl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="psl-slide">
      <h3 className="psl-h">Wrap-up</h3>
      <p className="psl-definition">{lesson.wrapup}</p>
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

export default function ParallelStructureLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="psl-shell">
      <style>{CSS}</style>

      <div className="psl-stage">
        <div className="psl-deck">
          <div className="psl-deck-header">
            <span className="psl-brand"><img src="/logo-sentivo.png" alt="" className="psl-brand-logo" />entenco</span>
            <span className="psl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="psl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="psl-nav-row">
            <button type="button" className="psl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="psl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`psl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="psl-nav-btn psl-nav-btn--primary"
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

.psl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F2EEFB;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.psl-shell * { box-sizing: border-box; }

.psl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #DFD5F2;
  flex-shrink: 0;
}
.psl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.psl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.psl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6247AA;
  white-space: nowrap;
  flex-shrink: 0;
}

.psl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.psl-deck {
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

.psl-deck-body {
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

.psl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.psl-slide--cover { gap: 14px; }
.psl-slide--part { justify-content: flex-start; }

.psl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #6247AA;
}

.psl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #6247AA;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.psl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 50px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #6247AA;
}

.psl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #453177;
  background: #F2EEFB;
  border: 2.5px solid #6247AA;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.psl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #6247AA;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.psl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.psl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #2A2140;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.psl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #6247AA;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.psl-bubble--solo { max-width: 720px; }
.psl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.psl-bubble-text--big { font-size: 24px; font-style: italic; }

.psl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.psl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #A796CC;
  margin: 0;
  max-width: 620px;
}
.psl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.psl-panel { background: #F2EEFB; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.psl-panel--right { border-color: #6247AA; }
.psl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #453177;
  margin-bottom: 8px;
}
.psl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.psl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2A2140;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.psl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.psl-speaking-list li { margin-bottom: 8px; }

.psl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.psl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #F2EEFB;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.psl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #6247AA;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.psl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.psl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.psl-quiz-item {
  background: #F2EEFB;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.psl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.psl-reveal-btn {
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
.psl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.psl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.psl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #DFD5F2; flex-shrink: 0; }
.psl-nav-btn {
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
.psl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.psl-nav-btn--primary { background: #FFC300; }
.psl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.psl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.psl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.psl-nav-dot.is-active { background: #6247AA; }
`;
