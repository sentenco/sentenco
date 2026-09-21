import { useState } from "react";

const LESSON = {
  title: "So / Such",
  formula: "so + adjective (no noun)  ·  such + a/an + adjective + noun",
  leadIn: "Finish this sentence two ways: 'The movie was ___' and 'It was ___ movie.'",
  importance: [
    "So and such are among the most common intensifiers in spoken English — used constantly for emphasis, often more than very or really.",
    "The rule is genuinely simple (is there a noun or not?), but it's easy to blend the two under pressure, which is exactly why deliberate practice here pays off fast.",
    "Getting this wrong is a very visible mistake native speakers notice immediately (\"such boring\" instead of \"so boring\"), so fixing it is a quick, high-value win.",
  ],
  teach: [
    {
      name: "So: Before an Adjective Alone",
      definition: "So goes directly before an adjective (or adverb) with no noun attached, for emphasis.",
      examples: ["The movie was so boring.", "She talks so quickly.", "I'm so tired today."],
    },
    {
      name: "Such: Before a Noun Phrase",
      definition: "Such goes before a/an plus an adjective plus a noun, when there's a noun in the sentence.",
      examples: ["It was such a boring movie.", "She's such a fast talker.", "That's such a great idea."],
    },
  ],
  compareLeftLabel: "So: no noun",
  compareRightLabel: "Such: with a noun",
  compareNote: "If there's a noun in the sentence, use such (with a/an before a singular noun). If there's no noun, just the adjective alone, use so.",
  comparePairs: [
    { left: "The food was so spicy.", right: "It was such spicy food." },
    { left: "He's so annoying.", right: "He's such an annoying person." },
  ],
  guided: [
    { prompt: "The test was ___ difficult! (no noun)", answer: "so" },
    { prompt: "She's ___ kind. (no noun)", answer: "so" },
    { prompt: "This coffee is ___ strong! (no noun)", answer: "so" },
    { prompt: "That was ___ difficult exam! (with a noun)", answer: "such a" },
    { prompt: "That was ___ great movie! (with a noun)", answer: "such a" },
    { prompt: "They're ___ lovely people. (with a plural noun)", answer: "such" },
  ],
  practice: [
    "Write one sentence using so + adjective, with no noun.",
    "Write one sentence using such + a/an + adjective + noun.",
    "Rewrite one of your so sentences by adding a noun and switching to such.",
  ],
  wrapup: "So goes directly before an adjective with no noun. Such goes before a/an plus an adjective plus a noun.",
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
    <div className="ssl-slide ssl-slide--cover">
      <span className="ssl-kind-badge">Lesson Time!</span>
      <h2 className="ssl-cover-title">{lesson.title}</h2>
      <span className="ssl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="ssl-slide">
      <span className="ssl-eyebrow">Warm-up</span>
      <div className="ssl-bubble ssl-bubble--solo">
        <p className="ssl-bubble-text ssl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="ssl-slide ssl-slide--part">
      <h3 className="ssl-h">Why So &amp; Such Matter</h3>
      <div className="ssl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="ssl-importance-item">
            <span className="ssl-importance-num">{i + 1}</span>
            <p className="ssl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="ssl-slide">
      <h3 className="ssl-h">{concept.name}</h3>
      <p className="ssl-definition">{concept.definition}</p>
      <div className="ssl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="ssl-bubble">
            <p className="ssl-bubble-text">{ex}</p>
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
    <div className="ssl-slide">
      <span className="ssl-eyebrow">Think About It</span>
      <h3 className="ssl-h">{left} <span className="ssl-vs">vs</span> {right}</h3>
      <p className="ssl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="ssl-slide">
      <h3 className="ssl-h">{lesson.compareLeftLabel} <span className="ssl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="ssl-compare-note">{lesson.compareNote}</p>
      <div className="ssl-compare-grid">
        <div className="ssl-panel">
          <span className="ssl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="ssl-compare-line">{pair.left}</p>)}
        </div>
        <div className="ssl-panel ssl-panel--right">
          <span className="ssl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="ssl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="ssl-quiz-item">
      <p className="ssl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="ssl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="ssl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="ssl-slide ssl-slide--part">
      <h3 className="ssl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="ssl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="ssl-slide ssl-slide--part">
      <h3 className="ssl-h">Speaking &amp; writing practice</h3>
      <ul className="ssl-list ssl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="ssl-slide">
      <h3 className="ssl-h">Wrap-up</h3>
      <p className="ssl-definition">{lesson.wrapup}</p>
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

export default function SoSuchLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="ssl-shell">
      <style>{CSS}</style>

      <div className="ssl-stage">
        <div className="ssl-deck">
          <div className="ssl-deck-header">
            <span className="ssl-brand"><img src="/logo-sentenco.png" alt="" className="ssl-brand-logo" />entenco</span>
            <span className="ssl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="ssl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="ssl-nav-row">
            <button type="button" className="ssl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="ssl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`ssl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="ssl-nav-btn ssl-nav-btn--primary"
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

.ssl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F5F9E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.ssl-shell * { box-sizing: border-box; }

.ssl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #E4EFCB;
  flex-shrink: 0;
}
.ssl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.ssl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.ssl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6B9E1E;
  white-space: nowrap;
  flex-shrink: 0;
}

.ssl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.ssl-deck {
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

.ssl-deck-body {
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

.ssl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.ssl-slide--cover { gap: 14px; }
.ssl-slide--part { justify-content: flex-start; }

.ssl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #6B9E1E;
}

.ssl-kind-badge {
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
.ssl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 56px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #6B9E1E;
}

.ssl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #4E6B13;
  background: #F5F9E9;
  border: 2.5px solid #6B9E1E;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.ssl-h {
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
.ssl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.ssl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #2A3517;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.ssl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #6B9E1E;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.ssl-bubble--solo { max-width: 720px; }
.ssl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.ssl-bubble-text--big { font-size: 24px; font-style: italic; }

.ssl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.ssl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #8FAE4E;
  margin: 0;
  max-width: 620px;
}
.ssl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.ssl-panel { background: #F5F9E9; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.ssl-panel--right { border-color: #6B9E1E; }
.ssl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #4E6B13;
  margin-bottom: 8px;
}
.ssl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.ssl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2A3517;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.ssl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.ssl-speaking-list li { margin-bottom: 8px; }

.ssl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.ssl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #F5F9E9;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.ssl-importance-num {
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
.ssl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.ssl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.ssl-quiz-item {
  background: #F5F9E9;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ssl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.ssl-reveal-btn {
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
.ssl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.ssl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.ssl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #E4EFCB; flex-shrink: 0; }
.ssl-nav-btn {
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
.ssl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.ssl-nav-btn--primary { background: #FFC300; }
.ssl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.ssl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.ssl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.ssl-nav-dot.is-active { background: #6B9E1E; }
`;
