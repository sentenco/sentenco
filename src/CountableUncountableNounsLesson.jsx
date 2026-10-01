import { useState } from "react";

const LESSON = {
  title: "Countable and Uncountable Nouns",
  formula: "countable = has a plural, takes a/an or a number · uncountable = no plural, takes some/much",
  leadIn: "Compare these two: \"one apple, two apples\" and \"water\" — can you say \"one water, two waters\"? Why not?",
  importance: [
    "This single distinction controls which words you can use before a noun: a/an, many, few, and numbers only work with countable nouns; much, little, and \"some\" lean toward uncountable ones.",
    "Getting it wrong produces some of the most noticeable non-native errors in English — \"an information\" or \"many furnitures\" both stand out immediately to a native speaker.",
    "This is foundational: almost every other noun rule you'll learn — articles, quantifiers, subject-verb agreement — depends on knowing whether a noun is countable first.",
  ],
  teach: [
    {
      name: "Countable Nouns: Nouns You Can Count",
      definition: "A countable noun has both a singular and a plural form. It can follow a/an in the singular, and a number or \"many/few\" in the plural.",
      examples: ["one apple, two apples", "a dog, three dogs", "a book, many books"],
    },
    {
      name: "Uncountable Nouns: Nouns You Can't Count",
      definition: "An uncountable noun has no plural form and never follows a/an. Instead, it pairs with words like some, much, a little, or a lot of.",
      examples: ["water", "information", "advice", "furniture"],
    },
  ],
  compareLeftLabel: "Countable Noun",
  compareRightLabel: "Uncountable Noun",
  compareNote: "The grammar around each noun changes completely depending on which type it is — same sentence position, different supporting words.",
  comparePairs: [
    { left: "I have a question.", right: "I need some information." },
    { left: "She bought three chairs.", right: "She bought some furniture." },
    { left: "How many books do you have?", right: "How much water do you need?" },
  ],
  guided: [
    { prompt: "\"I have an ___.\" (apple) — countable or uncountable?", answer: "Countable" },
    { prompt: "\"Can you give me some ___?\" (advice) — countable or uncountable?", answer: "Uncountable" },
    { prompt: "Fix the error: \"I have many furnitures in my room.\"", answer: "I have a lot of furniture in my room." },
    { prompt: "Fix the error: \"She gave me an advice.\"", answer: "She gave me some advice. / a piece of advice." },
    { prompt: "\"How ___ apples do you want?\" (many/much)", answer: "many" },
    { prompt: "\"How ___ time do we have?\" (many/much)", answer: "much" },
  ],
  practice: [
    "List 3 countable nouns and 3 uncountable nouns from your kitchen.",
    "Write two questions: one using \"How many...?\" and one using \"How much...?\"",
    "Take an uncountable noun like \"information\" and write a sentence that correctly avoids saying \"an information\" or \"informations.\"",
  ],
  wrapup: "Countable nouns can be counted one by one and take a/an or numbers. Uncountable nouns have no plural and pair with some, much, or a little.",
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
    <div className="ctu-slide ctu-slide--cover">
      <span className="ctu-kind-badge">Lesson Time!</span>
      <h2 className="ctu-cover-title">{lesson.title}</h2>
      <span className="ctu-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="ctu-slide">
      <span className="ctu-eyebrow">Warm-up</span>
      <div className="ctu-bubble ctu-bubble--solo">
        <p className="ctu-bubble-text ctu-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="ctu-slide ctu-slide--part">
      <h3 className="ctu-h">Why It Matters</h3>
      <div className="ctu-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="ctu-importance-item">
            <span className="ctu-importance-num">{i + 1}</span>
            <p className="ctu-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="ctu-slide">
      <h3 className="ctu-h">{concept.name}</h3>
      <p className="ctu-definition">{concept.definition}</p>
      <div className="ctu-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="ctu-bubble">
            <p className="ctu-bubble-text">{ex}</p>
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
    <div className="ctu-slide">
      <span className="ctu-eyebrow">Think About It</span>
      <h3 className="ctu-h">{left} <span className="ctu-vs">vs</span> {right}</h3>
      <p className="ctu-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="ctu-slide">
      <h3 className="ctu-h">{lesson.compareLeftLabel} <span className="ctu-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="ctu-compare-note">{lesson.compareNote}</p>
      <div className="ctu-compare-grid">
        <div className="ctu-panel">
          <span className="ctu-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="ctu-compare-line">{pair.left}</p>)}
        </div>
        <div className="ctu-panel ctu-panel--right">
          <span className="ctu-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="ctu-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="ctu-quiz-item">
      <p className="ctu-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="ctu-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="ctu-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="ctu-slide ctu-slide--part">
      <h3 className="ctu-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="ctu-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="ctu-slide ctu-slide--part">
      <h3 className="ctu-h">Speaking &amp; writing practice</h3>
      <ul className="ctu-list ctu-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="ctu-slide">
      <h3 className="ctu-h">Wrap-up</h3>
      <p className="ctu-definition">{lesson.wrapup}</p>
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

export default function CountableUncountableNounsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="ctu-shell">
      <style>{CSS}</style>
      <div className="ctu-stage">
        <div className="ctu-deck">
          <div className="ctu-deck-header">
            <span className="ctu-brand"><img src="/logo-sentenco.png" alt="" className="ctu-brand-logo" />entenco</span>
            <span className="ctu-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="ctu-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="ctu-nav-row">
            <button type="button" className="ctu-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="ctu-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`ctu-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="ctu-nav-btn ctu-nav-btn--primary"
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

.ctu-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FDF1E4;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.ctu-shell * { box-sizing: border-box; }

.ctu-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #F7DFC0;
  flex-shrink: 0;
}
.ctu-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.ctu-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.ctu-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #E8B583;
  white-space: nowrap;
  flex-shrink: 0;
}

.ctu-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.ctu-deck {
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

.ctu-deck-body {
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

.ctu-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.ctu-slide--cover { gap: 14px; }
.ctu-slide--part { justify-content: flex-start; }

.ctu-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #D97B29;
}

.ctu-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #D97B29;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.ctu-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #D97B29;
}

.ctu-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #9A5415;
  background: #FDF1E4;
  border: 2.5px solid #D97B29;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.ctu-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #D97B29;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.ctu-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.ctu-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #4A2C0F;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.ctu-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #D97B29;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.ctu-bubble--solo { max-width: 720px; }
.ctu-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.ctu-bubble-text--big { font-size: 24px; font-style: italic; }

.ctu-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.ctu-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #E8B583;
  margin: 0;
  max-width: 620px;
}
.ctu-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.ctu-panel { background: #FDF1E4; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.ctu-panel--right { border-color: #D97B29; }
.ctu-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #9A5415;
  margin-bottom: 8px;
}
.ctu-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.ctu-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #4A2C0F;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.ctu-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.ctu-speaking-list li { margin-bottom: 8px; }

.ctu-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.ctu-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FDF1E4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.ctu-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #D97B29;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.ctu-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.ctu-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.ctu-quiz-item {
  background: #FDF1E4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ctu-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.ctu-reveal-btn {
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
.ctu-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.ctu-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.ctu-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #F7DFC0; flex-shrink: 0; }
.ctu-nav-btn {
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
.ctu-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.ctu-nav-btn--primary { background: #FFC300; }
.ctu-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.ctu-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.ctu-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.ctu-nav-dot.is-active { background: #D97B29; }
`;
