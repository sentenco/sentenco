import { useState } from "react";

const LESSON = {
  title: "Common and Proper Nouns",
  formula: "common noun = a general name, lowercase · proper noun = one specific name, Capitalized",
  leadIn: "Compare these two: \"I live in a city.\" and \"I live in Manila.\" One names any city. The other names one exact place.",
  importance: [
    "Capitalization isn't random — it's a signal. Every time you capitalize a word mid-sentence, you're telling the reader \"this is one specific, unique thing,\" not a category.",
    "Mixing them up is one of the most common beginner writing errors: lowercase \"manila\" or capitalized \"the City\" both read as mistakes in English, even if the meaning is clear.",
    "Proper nouns are also how you'll handle names, brands, titles, and places correctly in every piece of writing you do from here on — resumes, emails, essays, everything.",
  ],
  teach: [
    {
      name: "Common Nouns: General Names",
      definition: "A common noun names any member of a general group — a type of person, place, thing, or idea. It does not point to one specific one, so it stays lowercase (unless it starts a sentence).",
      examples: ["a city", "my teacher", "the book", "a country"],
    },
    {
      name: "Proper Nouns: Specific Names",
      definition: "A proper noun names one particular, unique person, place, or thing — and only that one. Proper nouns are always capitalized, no matter where they appear in the sentence.",
      examples: ["Manila", "Mr. Santos", "The Great Gatsby", "the Philippines"],
    },
  ],
  compareLeftLabel: "Common Noun",
  compareRightLabel: "Proper Noun",
  compareNote: "Same sentence shape, same meaning — the only difference is whether you're naming a general category or one exact thing.",
  comparePairs: [
    { left: "I live in a city.", right: "I live in Manila." },
    { left: "My teacher is strict.", right: "Mr. Santos is strict." },
    { left: "She read a book last night.", right: "She read The Great Gatsby last night." },
  ],
  guided: [
    { prompt: "\"I met a friend at the mall.\" — is \"friend\" common or proper?", answer: "Common" },
    { prompt: "\"I met Sarah at the mall.\" — is \"Sarah\" common or proper?", answer: "Proper" },
    { prompt: "Fix the capitalization: \"we visited paris last summer.\"", answer: "We visited Paris last summer." },
    { prompt: "Fix the capitalization: \"my favorite subject is math, taught by mrs. reyes.\"", answer: "My favorite subject is math, taught by Mrs. Reyes." },
    { prompt: "\"a river flows through the valley.\" — is \"river\" common or proper?", answer: "Common" },
    { prompt: "\"the nile flows through egypt.\" — which two words should be capitalized?", answer: "Nile, Egypt" },
  ],
  practice: [
    "Write one sentence with a common noun, then rewrite it replacing that noun with a matching proper noun.",
    "List 3 proper nouns from your own life: a person, a place, and a brand or title.",
    "Find a paragraph you've written before and check: did you capitalize every proper noun correctly?",
  ],
  wrapup: "Common nouns name a type — stay lowercase. Proper nouns name one specific thing — always capitalized, anywhere in the sentence.",
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
    <div className="cpn-slide cpn-slide--cover">
      <span className="cpn-kind-badge">Lesson Time!</span>
      <h2 className="cpn-cover-title">{lesson.title}</h2>
      <span className="cpn-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="cpn-slide">
      <span className="cpn-eyebrow">Warm-up</span>
      <div className="cpn-bubble cpn-bubble--solo">
        <p className="cpn-bubble-text cpn-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="cpn-slide cpn-slide--part">
      <h3 className="cpn-h">Why It Matters</h3>
      <div className="cpn-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="cpn-importance-item">
            <span className="cpn-importance-num">{i + 1}</span>
            <p className="cpn-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="cpn-slide">
      <h3 className="cpn-h">{concept.name}</h3>
      <p className="cpn-definition">{concept.definition}</p>
      <div className="cpn-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="cpn-bubble">
            <p className="cpn-bubble-text">{ex}</p>
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
    <div className="cpn-slide">
      <span className="cpn-eyebrow">Think About It</span>
      <h3 className="cpn-h">{left} <span className="cpn-vs">vs</span> {right}</h3>
      <p className="cpn-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="cpn-slide">
      <h3 className="cpn-h">{lesson.compareLeftLabel} <span className="cpn-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="cpn-compare-note">{lesson.compareNote}</p>
      <div className="cpn-compare-grid">
        <div className="cpn-panel">
          <span className="cpn-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="cpn-compare-line">{pair.left}</p>)}
        </div>
        <div className="cpn-panel cpn-panel--right">
          <span className="cpn-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="cpn-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="cpn-quiz-item">
      <p className="cpn-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="cpn-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="cpn-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="cpn-slide cpn-slide--part">
      <h3 className="cpn-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="cpn-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="cpn-slide cpn-slide--part">
      <h3 className="cpn-h">Speaking &amp; writing practice</h3>
      <ul className="cpn-list cpn-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="cpn-slide">
      <h3 className="cpn-h">Wrap-up</h3>
      <p className="cpn-definition">{lesson.wrapup}</p>
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

export default function CommonProperNounsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="cpn-shell">
      <style>{CSS}</style>
      <div className="cpn-stage">
        <div className="cpn-deck">
          <div className="cpn-deck-header">
            <span className="cpn-brand"><img src="/logo-sentenco.png" alt="" className="cpn-brand-logo" />entenco</span>
            <span className="cpn-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="cpn-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="cpn-nav-row">
            <button type="button" className="cpn-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="cpn-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`cpn-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="cpn-nav-btn cpn-nav-btn--primary"
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

.cpn-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #EAF4FC;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.cpn-shell * { box-sizing: border-box; }

.cpn-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #CFE6F6;
  flex-shrink: 0;
}
.cpn-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.cpn-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.cpn-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8FC0E6;
  white-space: nowrap;
  flex-shrink: 0;
}

.cpn-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.cpn-deck {
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

.cpn-deck-body {
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

.cpn-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.cpn-slide--cover { gap: 14px; }
.cpn-slide--part { justify-content: flex-start; }

.cpn-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #2E86C9;
}

.cpn-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #2E86C9;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.cpn-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #2E86C9;
}

.cpn-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1D5F91;
  background: #EAF4FC;
  border: 2.5px solid #2E86C9;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.cpn-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #2E86C9;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.cpn-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.cpn-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #15344A;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.cpn-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #2E86C9;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.cpn-bubble--solo { max-width: 720px; }
.cpn-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.cpn-bubble-text--big { font-size: 24px; font-style: italic; }

.cpn-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.cpn-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #8FC0E6;
  margin: 0;
  max-width: 620px;
}
.cpn-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.cpn-panel { background: #EAF4FC; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.cpn-panel--right { border-color: #2E86C9; }
.cpn-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #1D5F91;
  margin-bottom: 8px;
}
.cpn-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.cpn-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #15344A;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.cpn-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.cpn-speaking-list li { margin-bottom: 8px; }

.cpn-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.cpn-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #EAF4FC;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.cpn-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #2E86C9;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.cpn-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.cpn-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.cpn-quiz-item {
  background: #EAF4FC;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cpn-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.cpn-reveal-btn {
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
.cpn-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.cpn-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.cpn-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #CFE6F6; flex-shrink: 0; }
.cpn-nav-btn {
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
.cpn-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.cpn-nav-btn--primary { background: #FFC300; }
.cpn-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.cpn-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.cpn-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.cpn-nav-dot.is-active { background: #2E86C9; }
`;
