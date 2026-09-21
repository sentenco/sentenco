import { useState } from "react";

const LESSON = {
  title: "Countable Nouns That Look Uncountable",
  formula: "always-uncountable nouns: no -s, no a/an  ·  rare countable use: a/an or -s allowed, narrower meaning",
  leadIn: "Have you ever said “informations” or “an advice” by accident? What sounded off about it?",
  importance: [
    "These specific nouns (news, advice, furniture, information) are extremely high-frequency, so getting them wrong shows up constantly, not just in rare vocabulary.",
    "This is one of the most persistent errors even at advanced levels, because the words genuinely feel countable — it isn't a beginner gap that fades with time.",
    "Knowing the rare countable exceptions (a coffee, two works) unlocks natural, idiomatic-sounding speech, not just error avoidance.",
  ],
  teach: [
    {
      name: "Feels Countable, Isn't: Always Uncountable",
      definition: "These nouns describe a category or mass, not individual countable units, even though English speakers often want to add an -s out of habit.",
      examples: ["I heard some interesting news. (not 'a news')", "She gave me good advice. (not 'an advice')", "We bought new furniture. (not 'a furniture')"],
    },
    {
      name: "Feels Uncountable, Has a Rare Countable Use",
      definition: "A few normally uncountable nouns can become countable in a specific, narrower sense: usually meaning a type or an individual instance of something.",
      examples: ["This gallery shows several works by Picasso. (individual pieces of art)", "I'll have a coffee, please. (a cup of coffee)", "They published two papers this year. (academic articles)"],
    },
  ],
  compareLeftLabel: "Always uncountable",
  compareRightLabel: "Sometimes countable",
  compareNote: "The trap runs both ways: some nouns you'd expect to count (news, furniture) never take a plural, while a few you'd expect to stay uncountable (coffee, work) can, in a narrower sense.",
  comparePairs: [
    { left: "The news was shocking. (never 'news were')", right: "I'll order two coffees. (individual cups)" },
    { left: "This furniture is old. (never 'furnitures')", right: "She has three published works. (art pieces)" },
  ],
  guided: [
    { prompt: "The ___ (news/newses) was shocking this morning.", answer: "news" },
    { prompt: "I have some ___ (furniture/furnitures) to sell.", answer: "furniture" },
    { prompt: "Can you give me some ___ (advice/advices)?", answer: "advice" },
    { prompt: "The museum owns several ___ (work/works) by local artists.", answer: "works" },
    { prompt: "Could I get two ___ (coffee/coffees), please?", answer: "coffees" },
    { prompt: "She's writing her third academic ___ (paper/papers) this year.", answer: "paper" },
  ],
  practice: [
    "Write one sentence using news, advice, or furniture correctly (remember, no plural).",
    "Write one sentence using work or coffee in its rare countable form.",
    "Explain to a partner why 'informations' is always wrong.",
  ],
  wrapup: "A handful of nouns that feel countable (news, advice, furniture, information) are always uncountable. A few uncountable nouns (work, coffee, paper) can become countable in a narrower sense, like an art piece or a cup.",
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
    <div className="cntl-slide cntl-slide--cover">
      <span className="cntl-kind-badge">Lesson Time!</span>
      <h2 className="cntl-cover-title">{lesson.title}</h2>
      <span className="cntl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="cntl-slide">
      <span className="cntl-eyebrow">Warm-up</span>
      <div className="cntl-bubble cntl-bubble--solo">
        <p className="cntl-bubble-text cntl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="cntl-slide cntl-slide--part">
      <h3 className="cntl-h">Why This Matters</h3>
      <div className="cntl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="cntl-importance-item">
            <span className="cntl-importance-num">{i + 1}</span>
            <p className="cntl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="cntl-slide">
      <h3 className="cntl-h">{concept.name}</h3>
      <p className="cntl-definition">{concept.definition}</p>
      <div className="cntl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="cntl-bubble">
            <p className="cntl-bubble-text">{ex}</p>
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
    <div className="cntl-slide">
      <span className="cntl-eyebrow">Think About It</span>
      <h3 className="cntl-h">{left} <span className="cntl-vs">vs</span> {right}</h3>
      <p className="cntl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="cntl-slide">
      <h3 className="cntl-h">{lesson.compareLeftLabel} <span className="cntl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="cntl-compare-note">{lesson.compareNote}</p>
      <div className="cntl-compare-grid">
        <div className="cntl-panel">
          <span className="cntl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="cntl-compare-line">{pair.left}</p>)}
        </div>
        <div className="cntl-panel cntl-panel--right">
          <span className="cntl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="cntl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="cntl-quiz-item">
      <p className="cntl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="cntl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="cntl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="cntl-slide cntl-slide--part">
      <h3 className="cntl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="cntl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="cntl-slide cntl-slide--part">
      <h3 className="cntl-h">Speaking &amp; writing practice</h3>
      <ul className="cntl-list cntl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="cntl-slide">
      <h3 className="cntl-h">Wrap-up</h3>
      <p className="cntl-definition">{lesson.wrapup}</p>
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

export default function CountableUncountableTrapsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="cntl-shell">
      <style>{CSS}</style>
      <div className="cntl-stage">
        <div className="cntl-deck">
          <div className="cntl-deck-header">
            <span className="cntl-brand"><img src="/logo-sentenco.png" alt="" className="cntl-brand-logo" />entenco</span>
            <span className="cntl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="cntl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="cntl-nav-row">
            <button type="button" className="cntl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="cntl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`cntl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="cntl-nav-btn cntl-nav-btn--primary"
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

.cntl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #EFF7F0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.cntl-shell * { box-sizing: border-box; }

.cntl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #D6E8D9;
  flex-shrink: 0;
}
.cntl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.cntl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.cntl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8FBB98;
  white-space: nowrap;
  flex-shrink: 0;
}

.cntl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.cntl-deck {
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

.cntl-deck-body {
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

.cntl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.cntl-slide--cover { gap: 14px; }
.cntl-slide--part { justify-content: flex-start; }

.cntl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #4C9A5D;
}

.cntl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #4C9A5D;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.cntl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 50px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #4C9A5D;
}

.cntl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2E6E3D;
  background: #EFF7F0;
  border: 2.5px solid #4C9A5D;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.cntl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #4C9A5D;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.cntl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.cntl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1F3A26;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.cntl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #4C9A5D;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.cntl-bubble--solo { max-width: 720px; }
.cntl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.cntl-bubble-text--big { font-size: 24px; font-style: italic; }

.cntl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.cntl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #8FBB98;
  margin: 0;
  max-width: 620px;
}
.cntl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.cntl-panel { background: #EFF7F0; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.cntl-panel--right { border-color: #4C9A5D; }
.cntl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #2E6E3D;
  margin-bottom: 8px;
}
.cntl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.cntl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F3A26;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.cntl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.cntl-speaking-list li { margin-bottom: 8px; }

.cntl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.cntl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #EFF7F0;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.cntl-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #4C9A5D;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.cntl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.cntl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.cntl-quiz-item {
  background: #EFF7F0;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cntl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.cntl-reveal-btn {
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
.cntl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.cntl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.cntl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #D6E8D9; flex-shrink: 0; }
.cntl-nav-btn {
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
.cntl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.cntl-nav-btn--primary { background: #FFC300; }
.cntl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.cntl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.cntl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.cntl-nav-dot.is-active { background: #4C9A5D; }
`;
