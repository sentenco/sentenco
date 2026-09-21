import { useState } from "react";

const LESSON = {
  title: "Conjunctions",
  formula: "FANBOYS join equals  ·  because/although/since join a dependent clause",
  leadIn: "Combine these two ideas into one sentence: 'It was raining.' + 'We went for a walk.'",
  importance: [
    "Conjunctions are the glue holding real sentences together — without them, writing and speech collapse into short, disconnected fragments.",
    "The conjunction you pick signals the actual logical relationship (reason, contrast, result, condition), so choosing the wrong one confuses a reader even when every word is spelled right.",
    "Whether a clause needs a comma often comes down to which type of conjunction you used — a real, testable punctuation skill this lesson sets up.",
  ],
  fanboys: [
    { letter: "F", word: "For", usage: "Gives a reason, in a formal, almost literary way.", examples: ["She left early, for she had a flight to catch.", "He stayed quiet, for he had nothing to add."] },
    { letter: "A", word: "And", usage: "Adds one idea to another.", examples: ["I bought bread, and I bought milk.", "She sings, and she dances."] },
    { letter: "N", word: "Nor", usage: "Adds a second negative idea after a negative statement.", examples: ["I don't like coffee, nor do I like tea.", "He didn't call, nor did he text."] },
    { letter: "B", word: "But", usage: "Shows a contrast between two ideas.", examples: ["I wanted to go, but I was too tired.", "She's small, but she's strong."] },
    { letter: "O", word: "Or", usage: "Presents an alternative or a choice.", examples: ["We could stay in, or we could go out.", "You can pay now, or you can pay later."] },
    { letter: "Y", word: "Yet", usage: "Shows a surprising contrast.", examples: ["It's expensive, yet it's worth it.", "He's quiet, yet he's confident."] },
    { letter: "S", word: "So", usage: "Shows a result or consequence.", examples: ["It was raining, so we stayed inside.", "She studied hard, so she passed."] },
  ],
  teach: [
    {
      name: "Subordinating Conjunctions: Adding a Dependent Clause",
      definition: "Because, although, since, while, and unless connect a main idea to a dependent clause that can't stand alone: the dependent clause explains a reason, contrast, time, or condition.",
      examples: ["I stayed home because I was sick.", "Although it was raining, we went for a walk.", "Unless you hurry, you'll miss the bus."],
    },
  ],
  compareLeftLabel: "Coordinating: both sides stand alone",
  compareRightLabel: "Subordinating: one side depends on the other",
  compareNote: "Try splitting the sentence in two. If both halves make complete sense on their own, it's coordinating. If one half sounds incomplete alone, it's subordinating.",
  comparePairs: [
    { left: "I was tired, but I finished the report. (both complete alone)", right: "Although I was tired, I finished the report. (first half incomplete alone)" },
    { left: "She called, and he answered.", right: "She called because she missed him." },
  ],
  guided: [
    { prompt: "I wanted pizza, ___ I ordered pasta instead. (equal, contrasting)", answer: "but" },
    { prompt: "She called, ___ he answered. (equal, adding)", answer: "and" },
    { prompt: "I don't like coffee, ___ do I like tea. (equal, negative addition)", answer: "nor" },
    { prompt: "___ it was late, they kept working. (dependent clause, contrast)", answer: "Although" },
    { prompt: "We'll cancel the picnic ___ it rains. (dependent clause, condition)", answer: "unless / if" },
    { prompt: "I stayed home ___ I was sick. (dependent clause, reason)", answer: "because" },
  ],
  practice: [
    "Write one sentence for each FANBOYS word (that's seven sentences, one per conjunction).",
    "Write one sentence with a subordinating conjunction explaining a reason.",
    "Write one sentence with a subordinating conjunction explaining a contrast.",
  ],
  wrapup: "FANBOYS (for, and, nor, but, or, yet, so) join two equal ideas that could each stand alone. Subordinating conjunctions attach a dependent clause that can't stand alone by itself.",
};

function buildSlides(lesson) {
  const slides = ["cover", "warmup"];
  if (lesson.importance) slides.push("importance");
  lesson.fanboys.forEach((_, i) => slides.push(`fanboys${i}`));
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
    <div className="cjl-slide cjl-slide--cover">
      <span className="cjl-kind-badge">Lesson Time!</span>
      <h2 className="cjl-cover-title">{lesson.title}</h2>
      <span className="cjl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="cjl-slide">
      <span className="cjl-eyebrow">Warm-up</span>
      <div className="cjl-bubble cjl-bubble--solo">
        <p className="cjl-bubble-text cjl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="cjl-slide cjl-slide--part">
      <h3 className="cjl-h">Why Conjunctions Matter</h3>
      <div className="cjl-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="cjl-importance-item">
            <span className="cjl-importance-num">{i + 1}</span>
            <p className="cjl-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FanboysSlide({ lesson, index }) {
  const f = lesson.fanboys[index];
  return (
    <div className="cjl-slide">
      <span className="cjl-fanboys-eyebrow">FANBOYS {index + 1} of {lesson.fanboys.length}</span>
      <div className="cjl-fanboys-sticker">
        <span className="cjl-fanboys-sticker-letter">{f.letter}</span>
        <h3 className="cjl-fanboys-sticker-word">{f.word}</h3>
      </div>
      <p className="cjl-definition">{f.usage}</p>
      <div className="cjl-example-list">
        {f.examples.map((ex, i) => (
          <div key={i} className="cjl-bubble">
            <p className="cjl-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="cjl-slide">
      <h3 className="cjl-h">{concept.name}</h3>
      <p className="cjl-definition">{concept.definition}</p>
      <div className="cjl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="cjl-bubble">
            <p className="cjl-bubble-text">{ex}</p>
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
    <div className="cjl-slide">
      <span className="cjl-eyebrow">Think About It</span>
      <h3 className="cjl-h">{left} <span className="cjl-vs">vs</span> {right}</h3>
      <p className="cjl-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="cjl-slide">
      <h3 className="cjl-h">{lesson.compareLeftLabel} <span className="cjl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="cjl-compare-note">{lesson.compareNote}</p>
      <div className="cjl-compare-grid">
        <div className="cjl-panel">
          <span className="cjl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="cjl-compare-line">{pair.left}</p>)}
        </div>
        <div className="cjl-panel cjl-panel--right">
          <span className="cjl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="cjl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="cjl-quiz-item">
      <p className="cjl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="cjl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="cjl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="cjl-slide cjl-slide--part">
      <h3 className="cjl-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="cjl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="cjl-slide cjl-slide--part">
      <h3 className="cjl-h">Speaking &amp; writing practice</h3>
      <ul className="cjl-list cjl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="cjl-slide">
      <h3 className="cjl-h">Wrap-up</h3>
      <p className="cjl-definition">{lesson.wrapup}</p>
    </div>
  );
}

function renderSlide(slideType, lesson) {
  if (slideType === "cover") return <CoverSlide lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType === "importance") return <ImportanceSlide lesson={lesson} />;
  if (slideType.startsWith("fanboys")) return <FanboysSlide lesson={lesson} index={Number(slideType.replace("fanboys", ""))} />;
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
  if (slideType.startsWith("fanboys")) return "Fanboys";
  if (slideType.startsWith("teach")) return "Teach";
  if (slideType.startsWith("guided")) return "Guided Practice";
  return STAGE_LABELS[slideType] || "";
}

export default function ConjunctionsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="cjl-shell">
      <style>{CSS}</style>
      <div className="cjl-stage">
        <div className="cjl-deck">
          <div className="cjl-deck-header">
            <span className="cjl-brand"><img src="/logo-sentivo.png" alt="" className="cjl-brand-logo" />entenco</span>
            <span className="cjl-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="cjl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="cjl-nav-row">
            <button type="button" className="cjl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="cjl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`cjl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="cjl-nav-btn cjl-nav-btn--primary"
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

.cjl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F1F8EE;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.cjl-shell * { box-sizing: border-box; }

.cjl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #D9EED4;
  flex-shrink: 0;
}
.cjl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.cjl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.cjl-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6FA97D;
  white-space: nowrap;
  flex-shrink: 0;
}

.cjl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.cjl-deck {
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

.cjl-deck-body {
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

.cjl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.cjl-slide--cover { gap: 14px; }
.cjl-slide--part { justify-content: flex-start; }

.cjl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #4C9A5D;
}

.cjl-kind-badge {
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
.cjl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 46px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #4C9A5D;
}

.cjl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #4C9A5D;
  background: #F1F8EE;
  border: 2.5px solid #4C9A5D;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.cjl-h {
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
.cjl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.cjl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1E3A24;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.cjl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #4C9A5D;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.cjl-bubble--solo { max-width: 720px; }
.cjl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.cjl-bubble-text--big { font-size: 24px; font-style: italic; }

.cjl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.cjl-fanboys-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #4C9A5D;
}
.cjl-fanboys-sticker {
  display: flex;
  align-items: center;
  gap: 14px;
  transform: rotate(-2deg);
}
.cjl-fanboys-sticker-letter {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 34px;
  color: #FFFFFF;
  background: #4C9A5D;
  border: 3px solid #1A1A1A;
  border-radius: 50%;
  width: 68px;
  height: 68px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 5px 5px 0 #1A1A1A;
}
.cjl-fanboys-sticker-word {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  letter-spacing: 0.5px;
  color: #1A1A1A;
  margin: 0;
  text-shadow: 3px 3px 0 #4C9A5D;
}

.cjl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #6FA97D;
  margin: 0;
  max-width: 620px;
}
.cjl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.cjl-panel { background: #F1F8EE; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.cjl-panel--right { border-color: #4C9A5D; }
.cjl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #2E6E3D;
  margin-bottom: 8px;
}
.cjl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.cjl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1E3A24;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.cjl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.cjl-speaking-list li { margin-bottom: 8px; }

.cjl-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.cjl-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #F1F8EE;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.cjl-importance-num {
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
.cjl-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.cjl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.cjl-quiz-item {
  background: #F1F8EE;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cjl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.cjl-reveal-btn {
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
.cjl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.cjl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.cjl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #D9EED4; flex-shrink: 0; }
.cjl-nav-btn {
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
.cjl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.cjl-nav-btn--primary { background: #FFC300; }
.cjl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.cjl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.cjl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.cjl-nav-dot.is-active { background: #4C9A5D; }
`;
