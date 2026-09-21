import { useState } from "react";

const LESSON = {
  title: "Portmanteau Words",
  tagline: "Two words blend into one: new sound, new meaning.",
  items: [
    { word: "brunch",
      correct: "breakfast + lunch",
      wrong: ["breakfast + snack", "morning + lunch"],
      story: "A meal that combines breakfast and lunch, usually eaten late morning on weekends.",
      example: "We're going to brunch on Sunday." },
    { word: "smog",
      correct: "smoke + fog",
      wrong: ["smoke + gas", "storm + fog"],
      story: "A mix of smoke and fog that creates thick, polluted air over a city.",
      example: "The smog made it hard to see the skyline." },
    { word: "motel",
      correct: "motor + hotel",
      wrong: ["motor + inn", "mobile + hotel"],
      story: "A hotel designed for travelers arriving by car, usually with parking right outside each room.",
      example: "They stopped at a roadside motel for the night." },
    { word: "spork",
      correct: "spoon + fork",
      wrong: ["spoon + knife", "scoop + fork"],
      story: "A utensil that combines the bowl of a spoon with the prongs of a fork.",
      example: "The fast food combo came with a plastic spork." },
    { word: "chillax",
      correct: "chill + relax",
      wrong: ["chill + calm", "cheer + relax"],
      story: "An informal word meaning to relax and calm down, often used casually among friends.",
      example: "Just chillax, everything's going to be fine." },
    { word: "webinar",
      correct: "web + seminar",
      wrong: ["web + lecture", "wireless + seminar"],
      story: "A seminar or presentation held online over the internet instead of in person.",
      example: "She hosted a webinar on digital marketing." },
    { word: "glamping",
      correct: "glamorous + camping",
      wrong: ["glamorous + hiking", "glossy + camping"],
      story: "Camping with comfortable, glamorous accommodations instead of a basic tent.",
      example: "They tried glamping in a luxury tent with real beds." },
    { word: "frenemy",
      correct: "friend + enemy",
      wrong: ["friend + rival", "familiar + enemy"],
      story: "Someone who acts friendly but is also a rival or not fully trusted.",
      example: "They're frenemies: friendly in public, competitive in private." },
    { word: "staycation",
      correct: "stay + vacation",
      wrong: ["stay + holiday", "static + vacation"],
      story: "A vacation spent at home or nearby instead of traveling somewhere far away.",
      example: "We had a relaxing staycation this summer." },
    { word: "podcast",
      correct: "iPod + broadcast",
      wrong: ["podium + broadcast", "pod + telecast"],
      story: "An audio show made available online for people to download or stream, originally linked to the iPod.",
      example: "I listen to a true crime podcast every week." },
  ],
  guided: [
    { prompt: "A meal eaten late morning that combines breakfast and lunch.", answer: "brunch" },
    { prompt: "A vacation spent at home instead of traveling.", answer: "staycation" },
    { prompt: "A utensil that's part spoon, part fork.", answer: "spork" },
    { prompt: "An online seminar.", answer: "webinar" },
    { prompt: "Someone who's a friend and a rival at the same time.", answer: "frenemy" },
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
  return <span className="ptl-stage-label">{stage.label}</span>;
}

function CoverSlide() {
  return (
    <div className="ptl-slide ptl-slide--cover">
      <span className="ptl-kind-badge">Vocabulary Lesson</span>
      <h1 className="ptl-cover-title">{LESSON.title}</h1>
      <p className="ptl-tagline">{LESSON.tagline}</p>
    </div>
  );
}

function PredictSlide({ index }) {
  const item = LESSON.items[index];
  const [picked, setPicked] = useState(null);
  const [options] = useState(() => shuffled([item.correct, ...item.wrong]));

  return (
    <div className="ptl-slide">
      <h2 className="ptl-h">Guess the Blend</h2>
      <p className="ptl-word">{item.word}</p>
      <div className="ptl-options">
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
              className={`ptl-option ${state}`}
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
    <div className="ptl-slide">
      <h2 className="ptl-h">Word {index + 1} of {LESSON.items.length}</h2>
      <div className="ptl-card">
        <p className="ptl-card-word">{item.word}</p>
        <p className="ptl-card-blend">{item.correct}</p>
        <p className="ptl-story">{item.story}</p>
        <p className="ptl-example">“{item.example}”</p>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="ptl-quiz-item">
      <p className="ptl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="ptl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="ptl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ index }) {
  const chunk = LESSON.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(LESSON.guided.length / 3);
  return (
    <div className="ptl-slide ptl-slide--part">
      <h2 className="ptl-h">Guided Practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h2>
      <div className="ptl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function WrapupSlide() {
  return (
    <div className="ptl-slide">
      <span className="ptl-wrap-icon">🧩</span>
      <h2 className="ptl-h">Lesson Complete</h2>
      <h1 className="ptl-cover-title ptl-cover-title--small">10 Blends Cracked!</h1>
      <p className="ptl-tagline">You matched 10 blended words to the two words hiding inside them. English loves smashing words together.</p>
      <button type="button" className="ptl-nav-btn ptl-nav-btn--primary" onClick={() => window.close()}>Close ✕</button>
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

export default function PortmanteauLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const slideTypes = buildSlides();
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="ptl-shell">
      <style>{CSS}</style>

      <div className="ptl-stage">
        <div className="ptl-deck">
          <div className="ptl-deck-header">
            <span className="ptl-brand"><img src="/logo-sentivo.png" alt="" className="ptl-brand-logo" />entenco</span>
            <StageLabel slideType={slideType} />
          </div>
          <div className="ptl-deck-body" key={slideIdx}>
            {renderSlide(slideType)}
          </div>
          <div className="ptl-nav-row">
            <button type="button" className="ptl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="ptl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`ptl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="ptl-nav-btn ptl-nav-btn--primary"
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

.ptl-shell {
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
.ptl-shell * { box-sizing: border-box; }

.ptl-brand { display: flex; align-items: center; flex-shrink: 0; font-family: 'Grandstander', cursive; font-weight: 700; font-size: 18px; color: #123B40; }
.ptl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.ptl-stage-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4F8B90;
  white-space: nowrap;
  flex-shrink: 0;
}

.ptl-stage { flex: 1; width: 100%; max-width: 1120px; padding: 16px 24px 20px; display: flex; flex-direction: column; min-height: 0; }

.ptl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 20px 0 rgba(14,110,124,0.08);
  min-height: 0;
  overflow: hidden;
}

.ptl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #D6F1EC;
  flex-shrink: 0;
}

.ptl-deck-body {
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

.ptl-slide { display: flex; flex-direction: column; align-items: center; gap: 18px; width: 100%; }
.ptl-slide--cover { gap: 14px; }
.ptl-slide--part { justify-content: flex-start; }

.ptl-kind-badge {
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
.ptl-cover-title {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(32px, 4.6vw, 42px);
  color: #FFFFFF;
  margin: 4px 0 0;
  line-height: 1.3;
  background: #0E6E7C;
  border-radius: 24px;
  padding: 12px 34px;
  box-shadow: 0 8px 0 #0A4F59;
  display: inline-block;
}
.ptl-cover-title--small { font-size: clamp(24px, 3.4vw, 32px); margin-top: 0; }
.ptl-tagline { font-size: 15px; font-weight: 700; color: #4F8B90; max-width: 480px; margin: 0; }

.ptl-h {
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

.ptl-word {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(40px, 6.4vw, 58px);
  color: #123B40;
  text-transform: capitalize;
  margin: 0;
}

.ptl-options { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 480px; }
.ptl-option {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: clamp(17px, 2.6vw, 20px);
  color: #123B40;
  background: rgba(14,110,124,0.10);
  border: 3px solid transparent;
  border-radius: 16px;
  padding: 14px 20px;
  cursor: pointer;
  text-transform: lowercase;
}
.ptl-option:hover:not(:disabled) { transform: translateY(-2px); }
.ptl-option:disabled { cursor: default; }
.ptl-option.is-correct { background: #E4F8EC; border-color: #4CBE7F; color: #1F7A47; }
.ptl-option.is-incorrect { background: #FDEAEA; border-color: #E5645A; color: #B3392F; }

.ptl-card { background: #EAF8F6; border-radius: 20px; padding: 24px 28px; max-width: 520px; display: flex; flex-direction: column; gap: 8px; }
.ptl-card-word { font-family: 'Grandstander', cursive; font-weight: 800; font-size: 28px; color: #123B40; margin: 0; text-transform: capitalize; }
.ptl-card-blend { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 15px; color: #1C8A68; margin: 0; }
.ptl-story { font-size: 13.5px; font-weight: 700; color: #123B40; margin: 4px 0 0; line-height: 1.55; text-align: left; }
.ptl-example { font-size: 13px; font-weight: 600; font-style: italic; color: #4F8B90; margin: 0; line-height: 1.5; }

.ptl-quiz-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 760px; text-align: left; }
.ptl-quiz-item { background: #EAF8F6; border-radius: 16px; padding: 14px 18px; display: flex; flex-direction: column; gap: 10px; }
.ptl-quiz-q { font-size: 15px; font-weight: 700; color: #123B40; margin: 0; }

.ptl-reveal-btn {
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
.ptl-reveal-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.ptl-reveal-correct { font-size: 14px; font-weight: 700; color: #1C8A68; margin: 0; }

.ptl-wrap-icon { font-size: 40px; }

.ptl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 48px 24px; margin-top: auto; border-top: 2px solid #EAF8F6; flex-shrink: 0; }
.ptl-nav-btn {
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
.ptl-nav-btn--primary { color: #FFFFFF; background: #FF6F59; border: none; box-shadow: 0 4px 0 #D14E3B; }
.ptl-nav-btn--primary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.ptl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.ptl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.ptl-nav-dot { width: 7px; height: 7px; border-radius: 50%; background: #BFE6E1; }
.ptl-nav-dot.is-active { background: #0E6E7C; }
`;
