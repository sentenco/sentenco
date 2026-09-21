import { useState } from "react";

const LESSON = {
  title: "Tricky Uncountables",
  tagline: "No plural, no \"a/an\": these nouns break the rule you'd expect.",
  items: [
    { word: "information", correct: "a piece of information", wrong: ["an information", "many informations"],
      note: "Information has no plural. Use “a piece of information” for one item, or “some information” for an amount.",
      example: "Can you give me a piece of information about the schedule?" },
    { word: "advice", correct: "a piece of advice", wrong: ["an advice", "many advices"],
      note: "Advice has no plural. Use “a piece of advice” for one item, or “some advice” for an amount.",
      example: "She gave me a piece of useful advice." },
    { word: "furniture", correct: "a piece of furniture", wrong: ["a furniture", "many furnitures"],
      note: "Furniture has no plural. Use “a piece of furniture” for one item.",
      example: "That chair is a beautiful piece of furniture." },
    { word: "luggage", correct: "a piece of luggage", wrong: ["a luggage", "many luggages"],
      note: "Luggage has no plural. Use “a piece of luggage” for one bag.",
      example: "I only brought one piece of luggage." },
    { word: "news", correct: "a piece of news", wrong: ["a new", "many news"],
      note: "News always takes a singular verb, even though it ends in -s. Use “a piece of news” for one item.",
      example: "I heard an interesting piece of news today." },
    { word: "equipment", correct: "a piece of equipment", wrong: ["an equipment", "many equipments"],
      note: "Equipment has no plural. Use “a piece of equipment” for one item.",
      example: "The camera is an expensive piece of equipment." },
    { word: "homework", correct: "a piece of homework", wrong: ["a homework", "many homeworks"],
      note: "Homework has no plural. Use “a piece of homework” or “an assignment” for one task.",
      example: "We got a difficult piece of homework today." },
    { word: "bread", correct: "a loaf of bread", wrong: ["a bread", "many breads"],
      note: "Bread has no plural. Use “a loaf of bread” or “a slice of bread” depending on the amount.",
      example: "She bought a fresh loaf of bread." },
    { word: "money", correct: "a lot of money", wrong: ["many moneys", "a money"],
      note: "Money has no plural and no partitive word. Use “a lot of” or “some” to describe an amount.",
      example: "He doesn't have a lot of money right now." },
    { word: "traffic", correct: "a lot of traffic", wrong: ["many traffics", "a traffic"],
      note: "Traffic has no plural and no partitive word. Use “a lot of” or “some” to describe an amount.",
      example: "There was a lot of traffic on the way home." },
  ],
  guided: [
    { prompt: "Can you give me a ___ of advice?", answer: "piece" },
    { prompt: "The news ___ surprising. (is / are)", answer: "is" },
    { prompt: "We don't have ___ furniture in the new apartment yet. (much / many)", answer: "much" },
    { prompt: "She packed only one ___ of luggage.", answer: "piece" },
    { prompt: "There isn't ___ traffic this morning. (much / many)", answer: "much" },
  ],
};

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
  return <span className="tul-stage-label">{stage.label}</span>;
}

function CoverSlide() {
  return (
    <div className="tul-slide tul-slide--cover">
      <span className="tul-kind-badge">Vocabulary Lesson</span>
      <h1 className="tul-cover-title">{LESSON.title}</h1>
      <p className="tul-tagline">{LESSON.tagline}</p>
    </div>
  );
}

function PredictSlide({ index }) {
  const item = LESSON.items[index];
  const [picked, setPicked] = useState(null);
  const [options] = useState(() => shuffled([item.correct, ...item.wrong]));

  return (
    <div className="tul-slide">
      <h2 className="tul-h">Pick the Right Usage</h2>
      <p className="tul-word">{item.word}</p>
      <div className="tul-options">
        {options.map((opt) => {
          let state = "";
          if (picked) {
            if (opt === item.correct) state = "is-correct";
            else if (opt === picked) state = "is-incorrect";
          }
          return (
            <button
              key={opt}
              type="button"
              className={`tul-option ${state}`}
              disabled={!!picked}
              onClick={() => setPicked(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ExplainSlide({ index }) {
  const item = LESSON.items[index];
  return (
    <div className="tul-slide">
      <h2 className="tul-h">Word {index + 1} of {LESSON.items.length}</h2>
      <div className="tul-card">
        <p className="tul-card-word">{item.word}</p>
        <p className="tul-card-correct">{item.correct}</p>
        <p className="tul-def">{item.note}</p>
        <p className="tul-example">“{item.example}”</p>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="tul-quiz-item">
      <p className="tul-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="tul-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="tul-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ index }) {
  const chunk = LESSON.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(LESSON.guided.length / 3);
  return (
    <div className="tul-slide tul-slide--part">
      <h2 className="tul-h">Guided Practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h2>
      <div className="tul-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function WrapupSlide() {
  return (
    <div className="tul-slide">
      <span className="tul-wrap-icon">🧺</span>
      <h2 className="tul-h">Lesson Complete</h2>
      <h1 className="tul-cover-title tul-cover-title--small">10 Uncountables Caught!</h1>
      <p className="tul-tagline">You spotted the right usage for 10 nouns that don't take a plural. No -s, no "a/an": just the right partitive.</p>
      <button type="button" className="tul-nav-btn tul-nav-btn--primary" onClick={() => window.close()}>Close ✕</button>
    </div>
  );
}

function buildSlides() {
  const slides = ["cover"];
  LESSON.items.forEach((_, i) => slides.push(`predict${i}`, `explain${i}`));
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

export default function TrickyUncountablesLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const slideTypes = buildSlides();
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="tul-shell">
      <style>{CSS}</style>

      <div className="tul-stage">
        <div className="tul-deck">
          <div className="tul-deck-header">
            <span className="tul-brand"><img src="/logo-sentivo.png" alt="" className="tul-brand-logo" />entenco</span>
            <StageLabel slideType={slideType} />
          </div>
          <div className="tul-deck-body" key={slideIdx}>
            {renderSlide(slideType)}
          </div>
          <div className="tul-nav-row">
            <button type="button" className="tul-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="tul-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`tul-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="tul-nav-btn tul-nav-btn--primary"
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

.tul-shell {
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
.tul-shell * { box-sizing: border-box; }

.tul-brand { display: flex; align-items: center; flex-shrink: 0; font-family: 'Grandstander', cursive; font-weight: 700; font-size: 18px; color: #123B40; }
.tul-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.tul-stage-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4F8B90;
  white-space: nowrap;
  flex-shrink: 0;
}

.tul-stage { flex: 1; width: 100%; max-width: 1120px; padding: 16px 24px 20px; display: flex; flex-direction: column; min-height: 0; }

.tul-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 20px 0 rgba(14,110,124,0.08);
  min-height: 0;
  overflow: hidden;
}

.tul-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #D6F1EC;
  flex-shrink: 0;
}

.tul-deck-body {
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

.tul-slide { display: flex; flex-direction: column; align-items: center; gap: 18px; width: 100%; }
.tul-slide--cover { gap: 14px; }
.tul-slide--part { justify-content: flex-start; }

.tul-kind-badge {
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
.tul-cover-title {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(34px, 4.8vw, 44px);
  color: #FFFFFF;
  margin: 4px 0 0;
  line-height: 1.3;
  background: #0E6E7C;
  border-radius: 24px;
  padding: 12px 34px;
  box-shadow: 0 8px 0 #0A4F59;
  display: inline-block;
}
.tul-cover-title--small { font-size: clamp(26px, 3.6vw, 34px); margin-top: 0; }
.tul-tagline { font-size: 15px; font-weight: 700; color: #4F8B90; max-width: 480px; margin: 0; }

.tul-h {
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

.tul-word {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(40px, 6.4vw, 58px);
  color: #123B40;
  text-transform: capitalize;
  margin: 0;
}

.tul-options { display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 460px; }
.tul-option {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: clamp(17px, 2.6vw, 21px);
  color: #123B40;
  background: rgba(14,110,124,0.10);
  border: 3px solid transparent;
  border-radius: 16px;
  padding: 14px 20px;
  cursor: pointer;
}
.tul-option:hover:not(:disabled) { transform: translateY(-2px); }
.tul-option:disabled { cursor: default; }
.tul-option.is-correct { background: #E4F8EC; border-color: #4CBE7F; color: #1F7A47; }
.tul-option.is-incorrect { background: #FDEAEA; border-color: #E5645A; color: #B3392F; }

.tul-card { background: #EAF8F6; border-radius: 20px; padding: 24px 28px; max-width: 480px; display: flex; flex-direction: column; gap: 8px; }
.tul-card-word { font-family: 'Grandstander', cursive; font-weight: 800; font-size: 26px; color: #123B40; margin: 0; text-transform: capitalize; }
.tul-card-correct { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 16px; color: #1C8A68; margin: 0; }
.tul-def { font-size: 13.5px; font-weight: 700; color: #123B40; margin: 4px 0 0; line-height: 1.5; }
.tul-example { font-size: 13px; font-weight: 600; font-style: italic; color: #4F8B90; margin: 0; line-height: 1.5; }

.tul-quiz-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 760px; text-align: left; }
.tul-quiz-item { background: #EAF8F6; border-radius: 16px; padding: 14px 18px; display: flex; flex-direction: column; gap: 10px; }
.tul-quiz-q { font-size: 15px; font-weight: 700; color: #123B40; margin: 0; }

.tul-reveal-btn {
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
.tul-reveal-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.tul-reveal-correct { font-size: 14px; font-weight: 700; color: #1C8A68; margin: 0; }

.tul-wrap-icon { font-size: 40px; }

.tul-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 48px 24px; margin-top: auto; border-top: 2px solid #EAF8F6; flex-shrink: 0; }
.tul-nav-btn {
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
.tul-nav-btn--primary { color: #FFFFFF; background: #FF6F59; border: none; box-shadow: 0 4px 0 #D14E3B; }
.tul-nav-btn--primary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.tul-nav-btn:disabled { opacity: 0.35; cursor: default; }
.tul-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.tul-nav-dot { width: 7px; height: 7px; border-radius: 50%; background: #BFE6E1; }
.tul-nav-dot.is-active { background: #0E6E7C; }
`;
