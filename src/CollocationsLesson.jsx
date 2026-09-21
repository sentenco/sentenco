import { useState } from "react";

const VERBS = ["make", "do", "take", "have"];

const LESSON = {
  title: "Collocations",
  tagline: "Words that just go together: pick the right partner verb.",
  items: [
    { noun: "a decision", correct: "make",
      note: "English pairs “make” with things you create or produce, like a decision, a plan, or a choice.",
      example: "She made a decision to move abroad." },
    { noun: "homework", correct: "do",
      note: "English pairs “do” with tasks or activities you complete, like homework, chores, or exercise.",
      example: "I always do my homework right after school." },
    { noun: "a break", correct: "take",
      note: "English pairs “take” with a pause or a short rest.",
      example: "Let's take a break before the next meeting." },
    { noun: "an argument", correct: "have",
      note: "English pairs “have” with an experience or event you go through, like an argument or a conversation.",
      example: "They had an argument about money last night." },
    { noun: "an effort", correct: "make",
      note: "English pairs “make” with things you produce through action, like an effort or an attempt.",
      example: "He made an effort to arrive on time." },
    { noun: "a photo", correct: "take",
      note: "English pairs “take” with capturing an image.",
      example: "Can you take a photo of us here?" },
    { noun: "the dishes", correct: "do",
      note: "English pairs “do” with household chores, like the dishes, the laundry, or the cleaning.",
      example: "It's your turn to do the dishes tonight." },
    { noun: "a mistake", correct: "make",
      note: "English pairs “make” with an error you produce.",
      example: "Everyone makes a mistake sometimes." },
    { noun: "responsibility", correct: "take",
      note: "English pairs “take” with accepting ownership of something.",
      example: "She took responsibility for the delay." },
    { noun: "an opinion", correct: "have",
      note: "English pairs “have” with something you hold or possess, like an opinion or an idea.",
      example: "Everyone has an opinion about the new policy." },
  ],
  guided: [
    { prompt: "She wants to ___ a good impression at the interview.", answer: "make" },
    { prompt: "Can you ___ me a favor?", answer: "do" },
    { prompt: "They decided to ___ a trip to Japan.", answer: "take" },
    { prompt: "He needs to ___ patience with his little brother.", answer: "have" },
    { prompt: "I always ___ my best in exams.", answer: "do" },
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
  return <span className="cll-stage-label">{stage.label}</span>;
}

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function CoverSlide() {
  return (
    <div className="cll-slide cll-slide--cover">
      <span className="cll-kind-badge">Vocabulary Lesson</span>
      <h1 className="cll-cover-title">{LESSON.title}</h1>
      <p className="cll-tagline">{LESSON.tagline}</p>
    </div>
  );
}

function PredictSlide({ index }) {
  const item = LESSON.items[index];
  const [picked, setPicked] = useState(null);
  const [options] = useState(() => shuffled(VERBS));

  return (
    <div className="cll-slide">
      <h2 className="cll-h">Pick the Right Verb</h2>
      <p className="cll-phrase">___ {item.noun}</p>
      <div className="cll-options">
        {options.map((verb) => {
          let state = "";
          if (picked) {
            if (verb === item.correct) state = "is-correct";
            else if (verb === picked) state = "is-incorrect";
          }
          return (
            <button
              key={verb}
              type="button"
              className={`cll-option ${state}`}
              disabled={!!picked}
              onClick={() => setPicked(verb)}
            >
              {verb}
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
    <div className="cll-slide">
      <h2 className="cll-h">Pair {index + 1} of {LESSON.items.length}</h2>
      <div className="cll-card">
        <p className="cll-card-phrase">{item.correct} {item.noun}</p>
        <p className="cll-def">{item.note}</p>
        <p className="cll-example">“{item.example}”</p>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="cll-quiz-item">
      <p className="cll-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="cll-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="cll-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ index }) {
  const chunk = LESSON.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(LESSON.guided.length / 3);
  return (
    <div className="cll-slide cll-slide--part">
      <h2 className="cll-h">Guided Practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h2>
      <div className="cll-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function WrapupSlide() {
  return (
    <div className="cll-slide">
      <span className="cll-wrap-icon">🤝</span>
      <h2 className="cll-h">Lesson Complete</h2>
      <h1 className="cll-cover-title cll-cover-title--small">10 Collocations Locked In!</h1>
      <p className="cll-tagline">You matched 10 nouns to their natural verb partner. Not a grammar rule, just how native speakers actually say it.</p>
      <button type="button" className="cll-nav-btn cll-nav-btn--primary" onClick={() => window.close()}>Close ✕</button>
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

export default function CollocationsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const slideTypes = buildSlides();
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="cll-shell">
      <style>{CSS}</style>

      <div className="cll-stage">
        <div className="cll-deck">
          <div className="cll-deck-header">
            <span className="cll-brand"><img src="/logo-sentenco.png" alt="" className="cll-brand-logo" />entenco</span>
            <StageLabel slideType={slideType} />
          </div>
          <div className="cll-deck-body" key={slideIdx}>
            {renderSlide(slideType)}
          </div>
          <div className="cll-nav-row">
            <button type="button" className="cll-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="cll-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`cll-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="cll-nav-btn cll-nav-btn--primary"
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

.cll-shell {
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
.cll-shell * { box-sizing: border-box; }

.cll-brand { display: flex; align-items: center; flex-shrink: 0; font-family: 'Grandstander', cursive; font-weight: 700; font-size: 18px; color: #123B40; }
.cll-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.cll-stage-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4F8B90;
  white-space: nowrap;
  flex-shrink: 0;
}

.cll-stage { flex: 1; width: 100%; max-width: 1120px; padding: 16px 24px 20px; display: flex; flex-direction: column; min-height: 0; }

.cll-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 20px 0 rgba(14,110,124,0.08);
  min-height: 0;
  overflow: hidden;
}

.cll-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #D6F1EC;
  flex-shrink: 0;
}

.cll-deck-body {
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

.cll-slide { display: flex; flex-direction: column; align-items: center; gap: 18px; width: 100%; }
.cll-slide--cover { gap: 14px; }
.cll-slide--part { justify-content: flex-start; }

.cll-kind-badge {
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
.cll-cover-title {
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
.cll-cover-title--small { font-size: clamp(26px, 3.6vw, 34px); margin-top: 0; }
.cll-tagline { font-size: 15px; font-weight: 700; color: #4F8B90; max-width: 480px; margin: 0; }

.cll-h {
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

.cll-phrase {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(32px, 5.2vw, 46px);
  color: #123B40;
  margin: 0;
}

.cll-options { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; max-width: 560px; }
.cll-option {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(22px, 3.6vw, 28px);
  color: #123B40;
  background: rgba(14,110,124,0.10);
  border: 3px solid transparent;
  border-radius: 999px;
  padding: 14px 30px;
  cursor: pointer;
  text-transform: capitalize;
}
.cll-option:hover:not(:disabled) { transform: translateY(-2px); }
.cll-option:disabled { cursor: default; }
.cll-option.is-correct { background: #E4F8EC; border-color: #4CBE7F; color: #1F7A47; }
.cll-option.is-incorrect { background: #FDEAEA; border-color: #E5645A; color: #B3392F; }

.cll-card { background: #EAF8F6; border-radius: 20px; padding: 24px 28px; max-width: 480px; display: flex; flex-direction: column; gap: 8px; }
.cll-card-phrase { font-family: 'Grandstander', cursive; font-weight: 800; font-size: 26px; color: #1C8A68; margin: 0; }
.cll-card-phrase::first-letter { text-transform: capitalize; }
.cll-def { font-size: 13.5px; font-weight: 700; color: #123B40; margin: 4px 0 0; line-height: 1.5; }
.cll-example { font-size: 13px; font-weight: 600; font-style: italic; color: #4F8B90; margin: 0; line-height: 1.5; }

.cll-quiz-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 760px; text-align: left; }
.cll-quiz-item { background: #EAF8F6; border-radius: 16px; padding: 14px 18px; display: flex; flex-direction: column; gap: 10px; }
.cll-quiz-q { font-size: 15px; font-weight: 700; color: #123B40; margin: 0; }

.cll-reveal-btn {
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
.cll-reveal-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.cll-reveal-correct { font-size: 14px; font-weight: 700; color: #1C8A68; margin: 0; }

.cll-wrap-icon { font-size: 40px; }

.cll-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 48px 24px; margin-top: auto; border-top: 2px solid #EAF8F6; flex-shrink: 0; }
.cll-nav-btn {
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
.cll-nav-btn--primary { color: #FFFFFF; background: #FF6F59; border: none; box-shadow: 0 4px 0 #D14E3B; }
.cll-nav-btn--primary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.cll-nav-btn:disabled { opacity: 0.35; cursor: default; }
.cll-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.cll-nav-dot { width: 7px; height: 7px; border-radius: 50%; background: #BFE6E1; }
.cll-nav-dot.is-active { background: #0E6E7C; }
`;
