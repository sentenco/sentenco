import { useState } from "react";

const LESSON = {
  title: "Confusable Pairs",
  tagline: "Two words, one mix-up. Learn which one actually fits.",
  pairs: [
    { sentence: "Loud music can really ___ your focus.", correct: "affect",
      wordA: { word: "affect", pos: "verb", rule: "To influence or change something.", example: "Loud noise can affect your concentration." },
      wordB: { word: "effect", pos: "noun", rule: "The result of something happening.", example: "The medicine had an immediate effect." } },
    { sentence: "I ___ your apology.", correct: "accept",
      wordA: { word: "accept", pos: "verb", rule: "To agree to receive or believe something.", example: "She accepted the job offer." },
      wordB: { word: "except", pos: "preposition", rule: "Not including; leaving out.", example: "Everyone came except him." } },
    { sentence: "The doctor will ___ you on the best treatment.", correct: "advise",
      wordA: { word: "advice", pos: "noun", rule: "A suggestion about what someone should do.", example: "Can you give me some advice?" },
      wordB: { word: "advise", pos: "verb", rule: "To offer a suggestion to someone.", example: "I advise you to rest before the exam." } },
    { sentence: "Be careful not to ___ your passport.", correct: "lose",
      wordA: { word: "loose", pos: "adjective", rule: "Not tight; not firmly fixed.", example: "This shirt is a bit loose on me." },
      wordB: { word: "lose", pos: "verb", rule: "To no longer have something, or to fail to win.", example: "Don't lose your keys again." } },
    { sentence: "He runs faster ___ me.", correct: "than",
      wordA: { word: "then", pos: "adverb", rule: "At that time, or next in a sequence.", example: "We had dinner, then we watched a movie." },
      wordB: { word: "than", pos: "conjunction", rule: "Used to compare two things.", example: "She's taller than her brother." } },
    { sentence: "Please ___ the documents on my desk.", correct: "lay",
      wordA: { word: "lay", pos: "verb, transitive", rule: "To put something down carefully. Takes an object.", example: "Lay the baby in the crib." },
      wordB: { word: "lie", pos: "verb, intransitive", rule: "To rest in a flat position. No object.", example: "I need to lie down for a while." } },
    { sentence: "Could I ___ your car this weekend?", correct: "borrow",
      wordA: { word: "borrow", pos: "verb", rule: "To take something temporarily, planning to return it.", example: "Can I borrow your umbrella?" },
      wordB: { word: "lend", pos: "verb", rule: "To give something temporarily, expecting it back.", example: "I can lend you my umbrella." } },
    { sentence: "Please ___ this file to the manager's office.", correct: "take",
      wordA: { word: "bring", pos: "verb", rule: "To carry something toward the speaker or current place.", example: "Bring your ID to the exam." },
      wordB: { word: "take", pos: "verb", rule: "To carry something away from the speaker or current place.", example: "Take this letter to the post office." } },
    { sentence: "Please ___ your hand if you have a question.", correct: "raise",
      wordA: { word: "rise", pos: "verb, intransitive", rule: "To go up by itself. No object.", example: "Prices rise every year." },
      wordB: { word: "raise", pos: "verb, transitive", rule: "To lift or increase something. Takes an object.", example: "Please raise your hand." } },
    { sentence: "Can you ___ me to buy milk?", correct: "remind",
      wordA: { word: "remember", pos: "verb", rule: "To recall something in your own mind.", example: "I remember his name." },
      wordB: { word: "remind", pos: "verb", rule: "To make someone else recall something.", example: "Please remind me to call him later." } },
  ],
  guided: [
    { prompt: "The new policy will ___ everyone in the department. (affect / effect)", answer: "affect" },
    { prompt: "Nobody objected ___ one person. (accept / except)", answer: "except" },
    { prompt: "She gave me great ___ about starting a business. (advice / advise)", answer: "advice" },
    { prompt: "We arrived at the airport, ___ took a taxi to the hotel. (then / than)", answer: "then" },
    { prompt: "He asked to ___ some money from his brother. (borrow / lend)", answer: "borrow" },
  ],
};

const STAGES = [
  { key: "cover", label: "Cover" },
  { key: "predict", label: "Predict" },
  { key: "explain", label: "Explain" },
  { key: "guided", label: "Guided Practice" },
  { key: "wrapup", label: "Wrap-up" },
];

function stageKey(slideType) {
  if (slideType.startsWith("predict")) return "predict";
  if (slideType.startsWith("explain")) return "explain";
  if (slideType.startsWith("guided")) return "guided";
  return slideType;
}

function StageLabel({ slideType }) {
  const stage = STAGES.find((s) => s.key === stageKey(slideType));
  return <span className="cpl-stage-label">{stage.label}</span>;
}

function CoverSlide() {
  return (
    <div className="cpl-slide cpl-slide--cover">
      <span className="cpl-kind-badge">Vocabulary Lesson</span>
      <h1 className="cpl-cover-title">{LESSON.title}</h1>
      <p className="cpl-tagline">{LESSON.tagline}</p>
    </div>
  );
}

function PredictSlide({ index }) {
  const p = LESSON.pairs[index];
  const [picked, setPicked] = useState(null);
  const [prefix, suffix] = p.sentence.split("___");
  const options = [p.wordA.word, p.wordB.word];

  return (
    <div className="cpl-slide">
      <h2 className="cpl-h">Pick the Right Word</h2>
      <p className="cpl-sentence">
        {prefix}
        <span className={`cpl-blank ${picked ? (picked === p.correct ? "is-correct" : "is-incorrect") : ""}`}>
          {picked || "____"}
        </span>
        {suffix}
      </p>
      <div className="cpl-choices">
        {options.map((word) => {
          let state = "";
          if (picked) {
            if (word === p.correct) state = "is-correct";
            else if (word === picked) state = "is-incorrect";
          }
          return (
            <button
              key={word}
              type="button"
              className={`cpl-choice ${state}`}
              disabled={!!picked}
              onClick={() => setPicked(word)}
            >
              {word}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ExplainSlide({ index }) {
  const p = LESSON.pairs[index];
  return (
    <div className="cpl-slide">
      <h2 className="cpl-h">Pair {index + 1} of {LESSON.pairs.length}</h2>
      <div className="cpl-panel-grid">
        {[p.wordA, p.wordB].map((w, i) => (
          <div key={i} className={`cpl-panel ${i === 0 ? "cpl-panel--a" : "cpl-panel--b"}`}>
            <span className="cpl-panel-tag">{w.pos}</span>
            <p className="cpl-panel-word">{w.word}</p>
            <p className="cpl-def">{w.rule}</p>
            <p className="cpl-example">“{w.example}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="cpl-quiz-item">
      <p className="cpl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="cpl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="cpl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ index }) {
  const chunk = LESSON.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(LESSON.guided.length / 3);
  return (
    <div className="cpl-slide cpl-slide--part">
      <h2 className="cpl-h">Guided Practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h2>
      <div className="cpl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function WrapupSlide() {
  return (
    <div className="cpl-slide">
      <span className="cpl-wrap-icon">⚖️</span>
      <h2 className="cpl-h">Lesson Complete</h2>
      <h1 className="cpl-cover-title cpl-cover-title--small">10 Pairs Untangled!</h1>
      <p className="cpl-tagline">You picked the right word in context 10 times and saw exactly why each pair splits the way it does. Same neighborhood, different job.</p>
      <button type="button" className="cpl-nav-btn cpl-nav-btn--primary" onClick={() => window.close()}>Close ✕</button>
    </div>
  );
}

function buildSlides() {
  const slides = ["cover"];
  LESSON.pairs.forEach((_, i) => slides.push(`predict${i}`, `explain${i}`));
  const guidedChunks = Math.ceil(LESSON.guided.length / 3);
  for (let i = 0; i < guidedChunks; i++) slides.push(`guided${i}`);
  slides.push("wrapup");
  return slides;
}

function renderSlide(slideType) {
  if (slideType === "cover") return <CoverSlide />;
  if (slideType.startsWith("predict")) return <PredictSlide index={Number(slideType.replace("predict", ""))} />;
  if (slideType.startsWith("explain")) return <ExplainSlide index={Number(slideType.replace("explain", ""))} />;
  if (slideType.startsWith("guided")) return <GuidedSlide index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "wrapup") return <WrapupSlide />;
  return null;
}

export default function ConfusablePairsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const slideTypes = buildSlides();
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="cpl-shell">
      <style>{CSS}</style>

      <div className="cpl-stage">
        <div className="cpl-deck">
          <div className="cpl-deck-header">
            <span className="cpl-brand"><img src="/logo-sentenco.png" alt="" className="cpl-brand-logo" />entenco</span>
            <StageLabel slideType={slideType} />
          </div>
          <div className="cpl-deck-body" key={slideIdx}>
            {renderSlide(slideType)}
          </div>
          <div className="cpl-nav-row">
            <button type="button" className="cpl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="cpl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`cpl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="cpl-nav-btn cpl-nav-btn--primary"
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
@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@600;700;800&family=Mulish:wght@500;600;700;800&display=swap');

.cpl-shell {
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #EAF8F6 0%, #D6F1EC 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Mulish', sans-serif;
}
.cpl-shell * { box-sizing: border-box; }

.cpl-brand { display: flex; align-items: center; flex-shrink: 0; font-family: 'Grandstander', cursive; font-weight: 700; font-size: 18px; color: #123B40; }
.cpl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.cpl-stage-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4F8B90;
  white-space: nowrap;
  flex-shrink: 0;
}

.cpl-stage { flex: 1; width: 100%; max-width: 1120px; padding: 16px 24px 20px; display: flex; flex-direction: column; min-height: 0; }

.cpl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 20px 0 rgba(14,110,124,0.08);
  min-height: 0;
  overflow: hidden;
}

.cpl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #D6F1EC;
  flex-shrink: 0;
}

.cpl-deck-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 0;
  overflow-y: auto;
  gap: 20px;
  padding: 24px 48px 8px;
}

.cpl-slide { display: flex; flex-direction: column; align-items: center; gap: 18px; width: 100%; }
.cpl-slide--cover { gap: 14px; }
.cpl-slide--part { justify-content: flex-start; }

.cpl-kind-badge {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0E6E7C;
  background: rgba(14,110,124,0.10);
  border-radius: 999px;
  padding: 6px 18px;
}
.cpl-cover-title {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(36px, 5vw, 46px);
  color: #FFFFFF;
  margin: 4px 0 0;
  line-height: 1.3;
  background: #0E6E7C;
  border-radius: 24px;
  padding: 12px 34px;
  box-shadow: 0 8px 0 #0A4F59;
  display: inline-block;
}
.cpl-cover-title--small { font-size: clamp(26px, 3.6vw, 34px); margin-top: 0; }
.cpl-tagline { font-size: 15px; font-weight: 700; color: #4F8B90; max-width: 480px; margin: 0; }

.cpl-h {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
  margin: 0;
  display: inline-block;
  background: #0E6E7C;
  border-radius: 999px;
  padding: 8px 24px;
  box-shadow: 0 5px 0 #0A4F59;
}

.cpl-sentence { font-size: clamp(17px, 2.4vw, 21px); font-weight: 700; color: #123B40; max-width: 620px; line-height: 1.6; margin: 0; }
.cpl-blank {
  display: inline-block;
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: 1.15em;
  color: #B8391F;
  background: rgba(232,90,61,0.14);
  border-radius: 10px;
  padding: 2px 12px;
  margin: 0 2px;
}
.cpl-blank.is-correct { color: #1F7A47; background: #E4F8EC; }
.cpl-blank.is-incorrect { color: #B3392F; background: #FDEAEA; }

.cpl-choices { display: flex; gap: 18px; justify-content: center; flex-wrap: wrap; }
.cpl-choice {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(24px, 4vw, 32px);
  color: #123B40;
  background: rgba(14,110,124,0.10);
  border: 3px solid transparent;
  border-radius: 999px;
  padding: 14px 30px;
  cursor: pointer;
  text-transform: capitalize;
}
.cpl-choice:hover:not(:disabled) { transform: translateY(-2px); }
.cpl-choice:disabled { cursor: default; }
.cpl-choice.is-correct { background: #E4F8EC; border-color: #4CBE7F; color: #1F7A47; }
.cpl-choice.is-incorrect { background: #FDEAEA; border-color: #E5645A; color: #B3392F; }

.cpl-panel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; width: 100%; max-width: 700px; }
.cpl-panel { border-radius: 18px; padding: 18px 16px; text-align: left; display: flex; flex-direction: column; gap: 6px; }
.cpl-panel--a { background: #EAF8F6; }
.cpl-panel--b { background: #FFEDE7; }
.cpl-panel-tag {
  align-self: flex-start;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4F8B90;
  background: rgba(255,255,255,0.6);
  border-radius: 999px;
  padding: 3px 10px;
}
.cpl-panel-word { font-family: 'Grandstander', cursive; font-weight: 800; font-size: 22px; color: #123B40; margin: 4px 0 0; text-transform: capitalize; }
.cpl-def { font-size: 13px; font-weight: 700; color: #123B40; margin: 2px 0 0; line-height: 1.4; }
.cpl-example { font-size: 12.5px; font-weight: 600; font-style: italic; color: #4F8B90; margin: 0; line-height: 1.4; }

.cpl-quiz-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 760px; text-align: left; }
.cpl-quiz-item { background: #EAF8F6; border-radius: 16px; padding: 14px 18px; display: flex; flex-direction: column; gap: 10px; }
.cpl-quiz-q { font-size: 15px; font-weight: 700; color: #123B40; margin: 0; }

.cpl-reveal-btn {
  align-self: flex-start;
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 12.5px;
  color: #FFFFFF;
  background: #FF6F59;
  border: none;
  border-radius: 999px;
  padding: 7px 16px;
  cursor: pointer;
  box-shadow: 0 4px 0 #D14E3B;
}
.cpl-reveal-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.cpl-reveal-correct { font-size: 14px; font-weight: 700; color: #1C8A68; margin: 0; text-transform: capitalize; }

.cpl-wrap-icon { font-size: 40px; }

.cpl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 48px 24px; margin-top: auto; border-top: 2px solid #EAF8F6; flex-shrink: 0; }
.cpl-nav-btn {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 14px;
  color: #0E6E7C;
  background: #FFFFFF;
  border: 1px solid #BFE6E1;
  border-radius: 999px;
  padding: 10px 22px;
  cursor: pointer;
}
.cpl-nav-btn--primary { color: #FFFFFF; background: #FF6F59; border: none; box-shadow: 0 4px 0 #D14E3B; }
.cpl-nav-btn--primary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.cpl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.cpl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.cpl-nav-dot { width: 7px; height: 7px; border-radius: 50%; background: #BFE6E1; }
.cpl-nav-dot.is-active { background: #0E6E7C; }

@media (max-width: 640px) {
  .cpl-panel-grid { grid-template-columns: 1fr; }
}
`;
