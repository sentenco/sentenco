import { useState } from "react";

const LESSON = {
  title: "Homophones",
  tagline: "They sound exactly the same. The spelling is what tells them apart.",
  items: [
    {
      correct: ["their", "there", "they're"],
      distractors: ["thier", "theyr", "ther"],
      panels: [
        { spelling: "their", tag: "possessive", def: "Belonging to them.", example: "They left their bags at the door." },
        { spelling: "there", tag: "place", def: "In or at that place.", example: "The keys are over there." },
        { spelling: "they're", tag: "= they are", def: "A contraction of “they are.”", example: "They're coming to the party tonight." },
      ],
    },
    {
      correct: ["to", "too", "two"],
      distractors: ["tow", "twoo", "tu"],
      panels: [
        { spelling: "to", tag: "preposition", def: "Toward, or before a verb.", example: "She walked to the store." },
        { spelling: "too", tag: "also / excess", def: "Also, or more than enough.", example: "I want to come too." },
        { spelling: "two", tag: "number", def: "The number 2.", example: "He has two brothers." },
      ],
    },
    {
      correct: ["your", "you're"],
      distractors: ["yur", "youre"],
      panels: [
        { spelling: "your", tag: "possessive", def: "Belonging to you.", example: "Is this your jacket?" },
        { spelling: "you're", tag: "= you are", def: "A contraction of “you are.”", example: "You're going to love this movie." },
      ],
    },
    {
      correct: ["its", "it's"],
      distractors: ["itz", "iits"],
      panels: [
        { spelling: "its", tag: "possessive", def: "Belonging to it.", example: "The dog wagged its tail." },
        { spelling: "it's", tag: "= it is / has", def: "A contraction of “it is” or “it has.”", example: "It's raining outside." },
      ],
    },
    {
      correct: ["whose", "who's"],
      distractors: ["whos", "whoes"],
      panels: [
        { spelling: "whose", tag: "possessive", def: "Belonging to whom.", example: "Whose phone is this?" },
        { spelling: "who's", tag: "= who is / has", def: "A contraction of “who is” or “who has.”", example: "Who's coming to dinner?" },
      ],
    },
    {
      correct: ["bear", "bare"],
      distractors: ["beare", "barr"],
      panels: [
        { spelling: "bear", tag: "animal / verb", def: "The animal, or “to carry or endure.”", example: "I can't bear the noise." },
        { spelling: "bare", tag: "adjective", def: "Uncovered or plain.", example: "He walked on the sand with bare feet." },
      ],
    },
    {
      correct: ["flour", "flower"],
      distractors: ["flor", "flouer"],
      panels: [
        { spelling: "flour", tag: "noun", def: "Ground grain used in baking.", example: "Add two cups of flour to the bowl." },
        { spelling: "flower", tag: "noun", def: "The bloom of a plant.", example: "She picked a flower from the garden." },
      ],
    },
    {
      correct: ["weather", "whether"],
      distractors: ["wethur", "weathar"],
      panels: [
        { spelling: "weather", tag: "noun", def: "The state of the atmosphere.", example: "The weather is perfect for a picnic." },
        { spelling: "whether", tag: "conjunction", def: "Expressing a choice or doubt.", example: "I don't know whether to stay or go." },
      ],
    },
    {
      correct: ["sea", "see"],
      distractors: ["sae", "seee"],
      panels: [
        { spelling: "sea", tag: "noun", def: "A large body of salt water.", example: "They swam in the sea all afternoon." },
        { spelling: "see", tag: "verb", def: "To notice with your eyes.", example: "Can you see the mountains from here?" },
      ],
    },
    {
      correct: ["hear", "here"],
      distractors: ["heer", "haer"],
      panels: [
        { spelling: "hear", tag: "verb", def: "To notice sound.", example: "I can hear music next door." },
        { spelling: "here", tag: "adverb", def: "In this place.", example: "Please put the box here." },
      ],
    },
  ],
  guided: [
    { prompt: "___ going to be late if we don't leave now. (they're / their / there)", answer: "They're" },
    { prompt: "Can you tell me ___ book this is? (whose / who's)", answer: "Whose" },
    { prompt: "I don't know ___ she's coming or not. (weather / whether)", answer: "whether" },
    { prompt: "The cat licked ___ paw. (its / it's)", answer: "its" },
    { prompt: "Put the bags over ___, please. (their / there / they're)", answer: "there" },
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

const PILL_HUES = ["hpl-pill--teal", "hpl-pill--coral", "hpl-pill--seafoam", "hpl-pill--gold"];

const STAGES = [
  { key: "cover", label: "Cover" },
  { key: "predict", label: "Predict" },
  { key: "reveal", label: "Reveal" },
  { key: "guided", label: "Guided Practice" },
  { key: "wrapup", label: "Wrap-up" },
];

function stageKey(slideType) {
  if (slideType.startsWith("predict")) return "predict";
  if (slideType.startsWith("reveal")) return "reveal";
  if (slideType.startsWith("guided")) return "guided";
  return slideType;
}

function StageLabel({ slideType }) {
  const stage = STAGES.find((s) => s.key === stageKey(slideType));
  return <span className="hpl-stage-label">{stage.label}</span>;
}

function CoverSlide() {
  return (
    <div className="hpl-slide hpl-slide--cover">
      <span className="hpl-kind-badge">Vocabulary Lesson</span>
      <h1 className="hpl-cover-title">{LESSON.title}</h1>
      <p className="hpl-tagline">{LESSON.tagline}</p>
    </div>
  );
}

function PredictSlide({ index }) {
  const item = LESSON.items[index];
  const choices = shuffled([...item.correct, ...item.distractors]);
  return (
    <div className="hpl-slide">
      <h2 className="hpl-h">Find the Real Words</h2>
      <p className="hpl-predict-hint">Some of these are spelled wrong. Which ones are real?</p>
      <div className="hpl-predict-row">
        {choices.map((word, i) => (
          <span key={i} className={`hpl-pill ${PILL_HUES[i % PILL_HUES.length]}`}>{word}</span>
        ))}
      </div>
    </div>
  );
}

function RevealSlide({ index }) {
  const item = LESSON.items[index];
  return (
    <div className="hpl-slide">
      <h2 className="hpl-h">Item {index + 1} of {LESSON.items.length}</h2>
      <div className={`hpl-panel-grid hpl-panel-grid--${item.panels.length}`}>
        {item.panels.map((p, i) => (
          <div key={i} className={`hpl-panel ${PILL_HUES[i % PILL_HUES.length]}`}>
            <span className="hpl-panel-tag">{p.tag}</span>
            <p className="hpl-panel-word">{p.spelling}</p>
            <p className="hpl-def">{p.def}</p>
            <p className="hpl-example">“{p.example}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="hpl-quiz-item">
      <p className="hpl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="hpl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="hpl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ index }) {
  const chunk = LESSON.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(LESSON.guided.length / 3);
  return (
    <div className="hpl-slide hpl-slide--part">
      <h2 className="hpl-h">Guided Practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h2>
      <div className="hpl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function WrapupSlide() {
  return (
    <div className="hpl-slide">
      <span className="hpl-wrap-icon">👂</span>
      <h2 className="hpl-h">Lesson Complete</h2>
      <h1 className="hpl-cover-title hpl-cover-title--small">10 Sound-Alikes Sorted!</h1>
      <p className="hpl-tagline">You spotted the real spellings across 10 homophone sets and practiced picking the right one in context. Same sound, different job: check the spelling.</p>
      <button type="button" className="hpl-nav-btn hpl-nav-btn--primary" onClick={() => window.close()}>Close ✕</button>
    </div>
  );
}

function buildSlides() {
  const slides = ["cover"];
  LESSON.items.forEach((_, i) => slides.push(`predict${i}`, `reveal${i}`));
  const guidedChunks = Math.ceil(LESSON.guided.length / 3);
  for (let i = 0; i < guidedChunks; i++) slides.push(`guided${i}`);
  slides.push("wrapup");
  return slides;
}

function renderSlide(slideType) {
  if (slideType === "cover") return <CoverSlide />;
  if (slideType.startsWith("predict")) return <PredictSlide index={Number(slideType.replace("predict", ""))} />;
  if (slideType.startsWith("reveal")) return <RevealSlide index={Number(slideType.replace("reveal", ""))} />;
  if (slideType.startsWith("guided")) return <GuidedSlide index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "wrapup") return <WrapupSlide />;
  return null;
}

export default function HomophonesLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const slideTypes = buildSlides();
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="hpl-shell">
      <style>{CSS}</style>

      <div className="hpl-stage">
        <div className="hpl-deck">
          <div className="hpl-deck-header">
            <span className="hpl-brand"><img src="/logo-sentenco.png" alt="" className="hpl-brand-logo" />entenco</span>
            <StageLabel slideType={slideType} />
          </div>
          <div className="hpl-deck-body" key={slideIdx}>
            {renderSlide(slideType)}
          </div>
          <div className="hpl-nav-row">
            <button type="button" className="hpl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="hpl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`hpl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="hpl-nav-btn hpl-nav-btn--primary"
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

.hpl-shell {
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
.hpl-shell * { box-sizing: border-box; }

.hpl-brand { display: flex; align-items: center; flex-shrink: 0; font-family: 'Grandstander', cursive; font-weight: 700; font-size: 18px; color: #123B40; }
.hpl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.hpl-stage-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4F8B90;
  white-space: nowrap;
  flex-shrink: 0;
}

.hpl-stage { flex: 1; width: 100%; max-width: 1120px; padding: 16px 24px 20px; display: flex; flex-direction: column; min-height: 0; }

.hpl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 20px 0 rgba(14,110,124,0.08);
  min-height: 0;
  overflow: hidden;
}

.hpl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #D6F1EC;
  flex-shrink: 0;
}

.hpl-deck-body {
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

.hpl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.hpl-slide--cover { gap: 14px; }
.hpl-slide--part { justify-content: flex-start; }

.hpl-kind-badge {
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
.hpl-cover-title {
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
.hpl-cover-title--small { font-size: clamp(26px, 3.6vw, 34px); margin-top: 0; }
.hpl-tagline { font-size: 15px; font-weight: 700; color: #4F8B90; max-width: 480px; margin: 0; }

.hpl-h {
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

.hpl-predict-hint { font-size: 14px; font-weight: 700; color: #4F8B90; margin: 0; }
.hpl-predict-row { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 14px; max-width: 700px; }

.hpl-pill {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(24px, 4.4vw, 36px);
  line-height: 1;
  border-radius: 18px;
  padding: 12px 22px;
}
.hpl-pill--teal { color: #123B40; background: rgba(14,110,124,0.14); }
.hpl-pill--coral { color: #8A2E1B; background: rgba(232,90,61,0.16); }
.hpl-pill--seafoam { color: #123B2F; background: rgba(28,138,104,0.16); }
.hpl-pill--gold { color: #6B4E08; background: rgba(255,203,76,0.30); }

.hpl-panel-grid { display: grid; gap: 16px; width: 100%; max-width: 820px; }
.hpl-panel-grid--2 { grid-template-columns: 1fr 1fr; }
.hpl-panel-grid--3 { grid-template-columns: 1fr 1fr 1fr; }

.hpl-panel { border-radius: 18px; padding: 18px 16px; text-align: left; display: flex; flex-direction: column; gap: 6px; }
.hpl-panel.hpl-pill--teal { background: #EAF8F6; }
.hpl-panel.hpl-pill--coral { background: #FFEDE7; }
.hpl-panel.hpl-pill--seafoam { background: #E3F6EC; }
.hpl-panel.hpl-pill--gold { background: #FFF3D9; }

.hpl-panel-tag {
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
.hpl-panel-word { font-family: 'Grandstander', cursive; font-weight: 800; font-size: 22px; color: #123B40; margin: 4px 0 0; }
.hpl-def { font-size: 13px; font-weight: 700; color: #123B40; margin: 2px 0 0; line-height: 1.4; }
.hpl-example { font-size: 12.5px; font-weight: 600; font-style: italic; color: #4F8B90; margin: 0; line-height: 1.4; }

.hpl-quiz-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 760px; text-align: left; }
.hpl-quiz-item { background: #EAF8F6; border-radius: 16px; padding: 14px 18px; display: flex; flex-direction: column; gap: 10px; }
.hpl-quiz-q { font-size: 15px; font-weight: 700; color: #123B40; margin: 0; }

.hpl-reveal-btn {
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
.hpl-reveal-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.hpl-reveal-correct { font-size: 14px; font-weight: 700; color: #1C8A68; margin: 0; }

.hpl-wrap-icon { font-size: 40px; }

.hpl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 48px 24px; margin-top: auto; border-top: 2px solid #EAF8F6; flex-shrink: 0; }
.hpl-nav-btn {
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
.hpl-nav-btn--primary { color: #FFFFFF; background: #FF6F59; border: none; box-shadow: 0 4px 0 #D14E3B; }
.hpl-nav-btn--primary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.hpl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.hpl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.hpl-nav-dot { width: 7px; height: 7px; border-radius: 50%; background: #BFE6E1; }
.hpl-nav-dot.is-active { background: #0E6E7C; }

@media (max-width: 640px) {
  .hpl-panel-grid--2, .hpl-panel-grid--3 { grid-template-columns: 1fr; }
}
`;
