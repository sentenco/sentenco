import { useState } from "react";

const LESSON = {
  title: "Stress-Shift Word Pairs",
  tagline: "Same spelling. Move the stress, and the meaning changes.",
  pairs: [
    { word: "record", syllables: ["re", "cord"], noun: { def: "A piece of music or information stored for later use.", example: "She bought her favorite record at the store." }, verb: { def: "To store sound, video, or data so it can be used later.", example: "Please record today's lesson for the absent students." } },
    { word: "present", syllables: ["pre", "sent"], noun: { def: "A gift, or the current moment in time.", example: "He gave her a present for her birthday." }, verb: { def: "To give, show, or introduce something formally.", example: "She will present her project to the class." } },
    { word: "object", syllables: ["ob", "ject"], noun: { def: "A thing that can be seen or touched.", example: "There's a strange object on the table." }, verb: { def: "To express disagreement or opposition.", example: "I object to the new office rules." } },
    { word: "produce", syllables: ["pro", "duce"], noun: { def: "Fresh fruits and vegetables.", example: "The market sells fresh produce every morning." }, verb: { def: "To make or grow something.", example: "Factories produce thousands of cars each year." } },
    { word: "contract", syllables: ["con", "tract"], noun: { def: "A written legal agreement.", example: "Both companies signed the contract." }, verb: { def: "To become smaller, or to catch an illness.", example: "Muscles contract when you lift something heavy." } },
    { word: "progress", syllables: ["pro", "gress"], noun: { def: "Forward movement or improvement.", example: "We're making great progress on the project." }, verb: { def: "To move forward or improve.", example: "The talks progress slowly but surely." } },
    { word: "conflict", syllables: ["con", "flict"], noun: { def: "A serious disagreement or fight.", example: "The conflict between the two countries lasted years." }, verb: { def: "To be in disagreement or clash.", example: "Their opinions conflict on almost every issue." } },
    { word: "permit", syllables: ["per", "mit"], noun: { def: "An official document giving permission.", example: "You need a permit to park here." }, verb: { def: "To allow something officially.", example: "The rules do not permit smoking indoors." } },
    { word: "suspect", syllables: ["sus", "pect"], noun: { def: "A person thought to have committed a crime.", example: "Police questioned the suspect for hours." }, verb: { def: "To believe something is true without proof.", example: "I suspect she already knows the surprise." } },
    { word: "export", syllables: ["ex", "port"], noun: { def: "A product sold to another country.", example: "Coffee is one of the country's biggest exports." }, verb: { def: "To send goods to another country to be sold.", example: "The company exports furniture worldwide." } },
  ],
  guided: [
    { prompt: "She wants to ___ her final project to the board next week.", answer: "present: stress the 2nd syllable (pre-SENT), verb" },
    { prompt: "This factory can ___ over 500 cars a day.", answer: "produce: stress the 2nd syllable (pro-DUCE), verb" },
    { prompt: "He kept the concert ticket as a ___ of that amazing night.", answer: "record: stress the 1st syllable (RE-cord), noun" },
    { prompt: "I ___ that the meeting will be cancelled.", answer: "suspect: stress the 2nd syllable (sus-PECT), verb" },
    { prompt: "You'll need a valid ___ to enter the building.", answer: "permit: stress the 1st syllable (PER-mit), noun" },
  ],
};

function StressWord({ syllables, stress }) {
  return (
    <span className="ssl-stressword">
      {syllables.map((syl, i) => (
        <span key={i}>
          {i > 0 && <span className="ssl-dot">·</span>}
          <span className={i === stress ? "ssl-stressed" : "ssl-unstressed"}>{syl}</span>
        </span>
      ))}
    </span>
  );
}

const STAGES = [
  { key: "cover", label: "Cover" },
  { key: "predict", label: "Predict" },
  { key: "pair", label: "Pair" },
  { key: "guided", label: "Guided Practice" },
  { key: "wrapup", label: "Wrap-up" },
];

function stageKey(slideType) {
  if (slideType.startsWith("predict")) return "predict";
  if (slideType.startsWith("pair")) return "pair";
  if (slideType.startsWith("guided")) return "guided";
  return slideType;
}

function StageLabel({ slideType }) {
  const stage = STAGES.find((s) => s.key === stageKey(slideType));
  return <span className="ssl-stage-label">{stage.label}</span>;
}

function CoverSlide() {
  return (
    <div className="ssl-slide ssl-slide--cover">
      <span className="ssl-kind-badge">Vocabulary Lesson</span>
      <h1 className="ssl-cover-title">{LESSON.title}</h1>
      <p className="ssl-tagline">{LESSON.tagline}</p>
    </div>
  );
}

function PairSlide({ index }) {
  const p = LESSON.pairs[index];
  return (
    <div className="ssl-slide">
      <h2 className="ssl-h">Pair {index + 1} of {LESSON.pairs.length}</h2>
      <p className="ssl-word-plain">{p.word}</p>
      <div className="ssl-pair-grid">
        <div className="ssl-panel ssl-panel--noun">
          <span className="ssl-panel-tag">noun{p.word === "present" ? " / adj" : ""}</span>
          <StressWord syllables={p.syllables} stress={0} />
          <p className="ssl-def">{p.noun.def}</p>
          <p className="ssl-example">“{p.noun.example}”</p>
        </div>
        <div className="ssl-panel ssl-panel--verb">
          <span className="ssl-panel-tag">verb</span>
          <StressWord syllables={p.syllables} stress={1} />
          <p className="ssl-def">{p.verb.def}</p>
          <p className="ssl-example">“{p.verb.example}”</p>
        </div>
      </div>
    </div>
  );
}

function PredictSlide({ index }) {
  const p = LESSON.pairs[index];
  return (
    <div className="ssl-slide">
      <h2 className="ssl-h">Think About It</h2>
      <p className="ssl-predict-hint">Same spelling. Different meaning. Can you guess why?</p>
      <div className="ssl-predict-row">
        <span className="ssl-predict-word">{p.word}</span>
        <span className="ssl-predict-vs">vs</span>
        <span className="ssl-predict-word">{p.word}</span>
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

function GuidedSlide({ index }) {
  const chunk = LESSON.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(LESSON.guided.length / 3);
  return (
    <div className="ssl-slide ssl-slide--part">
      <h2 className="ssl-h">Guided Practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h2>
      <div className="ssl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function WrapupSlide() {
  return (
    <div className="ssl-slide">
      <span className="ssl-wrap-icon">🌊</span>
      <h2 className="ssl-h">Lesson Complete</h2>
      <h1 className="ssl-cover-title ssl-cover-title--small">10 Words Down!</h1>
      <p className="ssl-tagline">You explored 10 stress-shift pairs and practiced spotting them in context. Stress moves, meaning follows: keep an ear out for it.</p>
      <button type="button" className="ssl-nav-btn ssl-nav-btn--primary" onClick={() => window.close()}>Close ✕</button>
    </div>
  );
}

function buildSlides() {
  const slides = ["cover"];
  LESSON.pairs.forEach((_, i) => slides.push(`predict${i}`, `pair${i}`));
  const guidedChunks = Math.ceil(LESSON.guided.length / 3);
  for (let i = 0; i < guidedChunks; i++) slides.push(`guided${i}`);
  slides.push("wrapup");
  return slides;
}

function renderSlide(slideType) {
  if (slideType === "cover") return <CoverSlide />;
  if (slideType.startsWith("predict")) return <PredictSlide index={Number(slideType.replace("predict", ""))} />;
  if (slideType.startsWith("pair")) return <PairSlide index={Number(slideType.replace("pair", ""))} />;
  if (slideType.startsWith("guided")) return <GuidedSlide index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "wrapup") return <WrapupSlide />;
  return null;
}

export default function StressShiftLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const slideTypes = buildSlides();
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
            <StageLabel slideType={slideType} />
          </div>
          <div className="ssl-deck-body" key={slideIdx}>
            {renderSlide(slideType)}
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
@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@600;700;800&family=Mulish:wght@500;600;700;800&display=swap');

.ssl-shell {
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
.ssl-shell * { box-sizing: border-box; }

.ssl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 18px;
  color: #123B40;
}
.ssl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.ssl-stage-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4F8B90;
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
  border-radius: 26px;
  box-shadow: 0 20px 0 rgba(14,110,124,0.08);
  min-height: 0;
  overflow: hidden;
}

.ssl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #D6F1EC;
  flex-shrink: 0;
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
  gap: 18px;
  padding: 24px 48px 8px;
}

.ssl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.ssl-slide--cover { gap: 14px; }
.ssl-slide--part { justify-content: flex-start; }

.ssl-kind-badge {
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
.ssl-cover-title {
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
.ssl-cover-title--small { font-size: clamp(28px, 3.8vw, 36px); margin-top: 0; }
.ssl-tagline { font-size: 15px; font-weight: 700; color: #4F8B90; max-width: 480px; margin: 0; }

.ssl-h {
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

.ssl-word-plain { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 15px; color: #8FB9BC; letter-spacing: 0.08em; text-transform: uppercase; margin: 0; }

.ssl-predict-hint { font-size: 14px; font-weight: 700; color: #4F8B90; margin: 0; }
.ssl-predict-row { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 18px; }
.ssl-predict-word {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(44px, 7.5vw, 68px);
  line-height: 1;
  color: #123B40;
  background: rgba(14,110,124,0.12);
  border-radius: 22px;
  padding: 6px 30px;
}
.ssl-predict-vs {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 18px;
  color: #FFFFFF;
  background: #FF6F59;
  border-radius: 999px;
  padding: 6px 16px;
}

.ssl-pair-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; width: 100%; max-width: 780px; }
.ssl-panel {
  background: #EAF8F6;
  border-radius: 18px;
  padding: 20px 18px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ssl-panel--verb { background: #FFEDE7; }
.ssl-panel-tag {
  align-self: flex-start;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0E6E7C;
  background: rgba(14,110,124,0.12);
  border-radius: 999px;
  padding: 3px 10px;
}
.ssl-panel--verb .ssl-panel-tag { color: #E85A3D; background: rgba(232,90,61,0.14); }

.ssl-stressword { font-family: 'Grandstander', cursive; font-size: 24px; line-height: 1.2; }
.ssl-stressed { font-weight: 800; color: #123B40; }
.ssl-panel--verb .ssl-stressed { color: #B8391F; }
.ssl-unstressed { font-weight: 600; color: #8FB9BC; font-size: 0.8em; }
.ssl-dot { color: #8FB9BC; margin: 0 1px; }

.ssl-def { font-size: 13.5px; font-weight: 700; color: #123B40; margin: 4px 0 0; line-height: 1.45; }
.ssl-example { font-size: 13px; font-weight: 600; font-style: italic; color: #4F8B90; margin: 0; line-height: 1.45; }

.ssl-quiz-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 760px; text-align: left; }
.ssl-quiz-item {
  background: #EAF8F6;
  border-radius: 16px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ssl-quiz-q { font-size: 15px; font-weight: 700; color: #123B40; margin: 0; }

.ssl-reveal-btn {
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
.ssl-reveal-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.ssl-reveal-correct { font-size: 14px; font-weight: 700; color: #1C8A68; margin: 0; }

.ssl-wrap-icon { font-size: 40px; }

.ssl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 48px 24px; margin-top: auto; border-top: 2px solid #EAF8F6; flex-shrink: 0; }
.ssl-nav-btn {
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
.ssl-nav-btn--primary { color: #FFFFFF; background: #FF6F59; border: none; box-shadow: 0 4px 0 #D14E3B; }
.ssl-nav-btn--primary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.ssl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.ssl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.ssl-nav-dot { width: 7px; height: 7px; border-radius: 50%; background: #BFE6E1; }
.ssl-nav-dot.is-active { background: #0E6E7C; }

@media (max-width: 640px) {
  .ssl-pair-grid { grid-template-columns: 1fr; }
}
`;
