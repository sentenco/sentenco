import { useState } from "react";

const LESSON = {
  title: "Compound Nouns",
  formula: "word + word = ONE new noun, with its own meaning",
  leadIn: "\"Butter\" + \"fly\" = butterfly. Not buttery flying — a completely different thing: an insect. What happened to the meaning?",
  importance: [
    "Compound nouns are one of the fastest ways English builds new vocabulary — once you understand the pattern, you can recognize thousands of words you've never seen before.",
    "The spelling pattern (one word, hyphenated, or two words) isn't predictable from the sound alone, so knowing it's a real system — not random chaos — makes it far less intimidating.",
    "Mixing up a compound noun with its two separate words can genuinely change the meaning, which matters for both reading comprehension and clear writing.",
  ],
  teach: [
    {
      name: "What Is a Compound Noun?",
      definition: "A compound noun is two or more words joined together to create one new noun — with a meaning that's often different from the individual words alone.",
      examples: ["toothbrush", "mother-in-law", "high school", "sunrise"],
    },
    {
      name: "Three Spelling Patterns",
      definition: "Compound nouns are written three ways: closed (one word), hyphenated (joined with a dash), or open (two separate words). There's no single rule — you learn each one as you meet it.",
      examples: ["closed: toothbrush", "hyphenated: mother-in-law", "open: high school"],
    },
  ],
  compareLeftLabel: "Two separate words (literal meaning)",
  compareRightLabel: "Compound noun (new meaning)",
  compareNote: "Same two words, completely different meaning — once they fuse into a compound noun, they stop describing each other and start naming one new thing.",
  comparePairs: [
    { left: "a green house (a house painted green)", right: "a greenhouse (a glass building for growing plants)" },
    { left: "a black board (a board that is black)", right: "a blackboard (a writing surface used in class)" },
    { left: "a hot dog bun (bread that is hot)", right: "a hot dog (a sausage sandwich)" },
  ],
  guided: [
    { prompt: "Is \"toothbrush\" closed, hyphenated, or open?", answer: "Closed (one word)" },
    { prompt: "Is \"high school\" closed, hyphenated, or open?", answer: "Open (two words)" },
    { prompt: "Is \"mother-in-law\" closed, hyphenated, or open?", answer: "Hyphenated" },
    { prompt: "What does \"butterfly\" mean, compared to \"butter\" and \"fly\" separately?", answer: "An insect — unrelated to butter or flying literally." },
    { prompt: "Combine \"sun\" + \"rise\" into a compound noun. What does it mean?", answer: "Sunrise — when the sun comes up in the morning." },
    { prompt: "\"A green house\" vs \"a greenhouse\" — which one do plants grow in?", answer: "A greenhouse" },
  ],
  practice: [
    "List 5 compound nouns you use regularly (toothbrush, classroom, weekend, etc.) and note whether each is closed, hyphenated, or open.",
    "Pick one compound noun and explain how its meaning differs from its two separate words.",
    "Write 2 sentences: one using two separate words literally, and one using the matching compound noun with its real meaning.",
  ],
  wrapup: "A compound noun joins two or more words into one new noun with its own meaning — spelled closed, hyphenated, or open, with no single rule to predict which.",
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
    <div className="cmn-slide cmn-slide--cover">
      <span className="cmn-kind-badge">Lesson Time!</span>
      <h2 className="cmn-cover-title">{lesson.title}</h2>
      <span className="cmn-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="cmn-slide">
      <span className="cmn-eyebrow">Warm-up</span>
      <div className="cmn-bubble cmn-bubble--solo">
        <p className="cmn-bubble-text cmn-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="cmn-slide cmn-slide--part">
      <h3 className="cmn-h">Why It Matters</h3>
      <div className="cmn-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="cmn-importance-item">
            <span className="cmn-importance-num">{i + 1}</span>
            <p className="cmn-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="cmn-slide">
      <h3 className="cmn-h">{concept.name}</h3>
      <p className="cmn-definition">{concept.definition}</p>
      <div className="cmn-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="cmn-bubble">
            <p className="cmn-bubble-text">{ex}</p>
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
    <div className="cmn-slide">
      <span className="cmn-eyebrow">Think About It</span>
      <h3 className="cmn-h">{left} <span className="cmn-vs">vs</span> {right}</h3>
      <p className="cmn-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="cmn-slide">
      <h3 className="cmn-h">{lesson.compareLeftLabel} <span className="cmn-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="cmn-compare-note">{lesson.compareNote}</p>
      <div className="cmn-compare-grid">
        <div className="cmn-panel">
          <span className="cmn-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="cmn-compare-line">{pair.left}</p>)}
        </div>
        <div className="cmn-panel cmn-panel--right">
          <span className="cmn-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="cmn-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="cmn-quiz-item">
      <p className="cmn-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="cmn-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="cmn-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="cmn-slide cmn-slide--part">
      <h3 className="cmn-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="cmn-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="cmn-slide cmn-slide--part">
      <h3 className="cmn-h">Speaking &amp; writing practice</h3>
      <ul className="cmn-list cmn-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="cmn-slide">
      <h3 className="cmn-h">Wrap-up</h3>
      <p className="cmn-definition">{lesson.wrapup}</p>
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

export default function CompoundNounsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="cmn-shell">
      <style>{CSS}</style>
      <div className="cmn-stage">
        <div className="cmn-deck">
          <div className="cmn-deck-header">
            <span className="cmn-brand"><img src="/logo-sentenco.png" alt="" className="cmn-brand-logo" />entenco</span>
            <span className="cmn-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="cmn-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="cmn-nav-row">
            <button type="button" className="cmn-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="cmn-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`cmn-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="cmn-nav-btn cmn-nav-btn--primary"
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

.cmn-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FBEDF2;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.cmn-shell * { box-sizing: border-box; }

.cmn-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #F6D6E3;
  flex-shrink: 0;
}
.cmn-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.cmn-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.cmn-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #E8A3C0;
  white-space: nowrap;
  flex-shrink: 0;
}

.cmn-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.cmn-deck {
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

.cmn-deck-body {
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

.cmn-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.cmn-slide--cover { gap: 14px; }
.cmn-slide--part { justify-content: flex-start; }

.cmn-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #C94C7B;
}

.cmn-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #C94C7B;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.cmn-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #C94C7B;
}

.cmn-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #8F2F54;
  background: #FBEDF2;
  border: 2.5px solid #C94C7B;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.cmn-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #C94C7B;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.cmn-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.cmn-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #4A1A2E;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.cmn-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #C94C7B;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.cmn-bubble--solo { max-width: 720px; }
.cmn-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.cmn-bubble-text--big { font-size: 24px; font-style: italic; }

.cmn-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.cmn-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #E8A3C0;
  margin: 0;
  max-width: 620px;
}
.cmn-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.cmn-panel { background: #FBEDF2; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.cmn-panel--right { border-color: #C94C7B; }
.cmn-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #8F2F54;
  margin-bottom: 8px;
}
.cmn-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.cmn-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #4A1A2E;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.cmn-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.cmn-speaking-list li { margin-bottom: 8px; }

.cmn-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.cmn-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #FBEDF2;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.cmn-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #C94C7B;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.cmn-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.cmn-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.cmn-quiz-item {
  background: #FBEDF2;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cmn-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.cmn-reveal-btn {
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
.cmn-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.cmn-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.cmn-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #F6D6E3; flex-shrink: 0; }
.cmn-nav-btn {
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
.cmn-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.cmn-nav-btn--primary { background: #FFC300; }
.cmn-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.cmn-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.cmn-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.cmn-nav-dot.is-active { background: #C94C7B; }
`;
