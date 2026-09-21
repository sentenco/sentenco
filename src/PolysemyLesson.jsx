import { useState } from "react";

const LESSON = {
  title: "Polysemy",
  tagline: "One word, several related meanings. Same root idea, different context.",
  words: [
    { word: "head", senses: [
      { sentence: "She hurt her head when she fell.", def: "the body part above your neck" },
      { sentence: "He is the head of the marketing department.", def: "the leader of a group" },
      { sentence: "Please sit at the head of the table.", def: "the top or front part of something" },
    ] },
    { word: "hand", senses: [
      { sentence: "She waved her hand to say hello.", def: "the body part at the end of your arm" },
      { sentence: "Can you give me a hand with these boxes?", def: "help with a task" },
      { sentence: "The clock's hour hand pointed to twelve.", def: "the pointer on a clock" },
    ] },
    { word: "foot", senses: [
      { sentence: "He stubbed his foot on the door.", def: "the body part at the bottom of your leg" },
      { sentence: "The village sits at the foot of the mountain.", def: "the bottom or base of something" },
      { sentence: "The room is ten feet wide.", def: "a unit of length (12 inches)" },
    ] },
    { word: "eye", senses: [
      { sentence: "She has bright green eyes.", def: "the body part you see with" },
      { sentence: "The plane flew straight into the eye of the storm.", def: "the calm center of a storm" },
      { sentence: "He struggled to thread the eye of the needle.", def: "a small hole for thread" },
    ] },
    { word: "mouth", senses: [
      { sentence: "Open your mouth and say ah.", def: "the body part used to eat and speak" },
      { sentence: "The boat reached the mouth of the river.", def: "the opening where a river meets the sea" },
      { sentence: "They found the mouth of the cave hidden by vines.", def: "the opening of a cave or container" },
    ] },
    { word: "leg", senses: [
      { sentence: "She broke her leg while skiing.", def: "the body part used for walking" },
      { sentence: "One leg of the table is shorter than the others.", def: "a support underneath furniture" },
      { sentence: "This is the final leg of our trip.", def: "one stage of a longer journey" },
    ] },
    { word: "arm", senses: [
      { sentence: "He raised his arm to ask a question.", def: "the body part from shoulder to hand" },
      { sentence: "She rested her elbow on the arm of the chair.", def: "the side support of a chair" },
      { sentence: "The boat sailed into a quiet arm of the bay.", def: "a narrow strip of sea or water" },
    ] },
    { word: "branch", senses: [
      { sentence: "A bird landed on the branch.", def: "a limb growing from a tree" },
      { sentence: "She works at the downtown branch of the bank.", def: "a local office of a company" },
      { sentence: "Physics is a branch of science.", def: "a specific area of a subject" },
    ] },
    { word: "root", senses: [
      { sentence: "The roots of the tree grew deep underground.", def: "the underground part of a plant" },
      { sentence: "They tried to find the root of the issue.", def: "the real cause of a problem" },
      { sentence: "The word “unhappy” has the root “happy.”", def: "the base form a word comes from" },
    ] },
    { word: "face", senses: [
      { sentence: "He washed his face before bed.", def: "the front of your head" },
      { sentence: "The clock's face was cracked.", def: "the front surface of a clock" },
      { sentence: "She had to face her fears.", def: "to confront something difficult" },
    ] },
  ],
  guided: [
    { prompt: "The company opened a new ___ in Cebu. (branch)", answer: "branch: a local office" },
    { prompt: "He needed to ___ his fear of public speaking. (face)", answer: "face: to confront" },
    { prompt: "The hikers finally reached the ___ of the mountain. (foot)", answer: "foot: the base" },
    { prompt: "Can someone give me a ___ carrying these bags? (hand)", answer: "hand: help" },
    { prompt: "Let's get to the ___ of this misunderstanding. (root)", answer: "root: the cause" },
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

function poolFor(item) {
  return shuffled(item.senses.map((s, senseIndex) => ({ def: s.def, senseIndex })));
}

const STAGES = [
  { key: "cover", label: "Cover" },
  { key: "match", label: "Match" },
  { key: "explain", label: "Explain" },
  { key: "guided", label: "Guided Practice" },
  { key: "wrapup", label: "Wrap-up" },
];

function stageKey(slideType) {
  if (slideType.startsWith("match")) return "match";
  if (slideType.startsWith("explain")) return "explain";
  if (slideType.startsWith("guided")) return "guided";
  return slideType;
}

function StageLabel({ slideType }) {
  const stage = STAGES.find((s) => s.key === stageKey(slideType));
  return <span className="pol-stage-label">{stage.label}</span>;
}

function CoverSlide() {
  return (
    <div className="pol-slide pol-slide--cover">
      <span className="pol-kind-badge">Vocabulary Lesson</span>
      <h1 className="pol-cover-title">{LESSON.title}</h1>
      <p className="pol-tagline">{LESSON.tagline}</p>
    </div>
  );
}

function MatchSlide({ index }) {
  const item = LESSON.words[index];
  const [pool, setPool] = useState(() => poolFor(item));
  const [slots, setSlots] = useState({});
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  function selectChip(chip) {
    if (checked) return;
    setSelected((s) => (s && s.def === chip.def ? null : chip));
  }

  function clickSlot(senseIndex) {
    if (checked) return;
    const existing = slots[senseIndex];
    if (selected) {
      setSlots((s) => ({ ...s, [senseIndex]: selected }));
      setPool((p) => {
        let next = p.filter((x) => x.def !== selected.def);
        if (existing) next = [...next, existing];
        return next;
      });
      setSelected(null);
    } else if (existing) {
      setSlots((s) => {
        const n = { ...s };
        delete n[senseIndex];
        return n;
      });
      setPool((p) => [...p, existing]);
    }
  }

  function reset() {
    setPool(poolFor(item));
    setSlots({});
    setSelected(null);
    setChecked(false);
  }

  const allPlaced = item.senses.every((_, i) => slots[i]);

  return (
    <div className="pol-slide pol-slide--part">
      <h2 className="pol-h">{item.word}</h2>
      <p className="pol-set-label">Word {index + 1} of {LESSON.words.length}</p>
      <p className="pol-instruction">Tap a meaning, then tap the sentence it fits.</p>

      <div className="pol-slots">
        {item.senses.map((s, i) => {
          const placed = slots[i];
          let state = "";
          if (checked && placed) state = placed.senseIndex === i ? "is-correct" : "is-incorrect";
          return (
            <button key={i} type="button" className={`pol-slot ${state}`} onClick={() => clickSlot(i)}>
              <span className="pol-slot-sentence">“{s.sentence}”</span>
              <span className="pol-slot-def">{placed ? placed.def : "(tap to fill)"}</span>
            </button>
          );
        })}
      </div>

      {!allPlaced && (
        <div className="pol-pool">
          {pool.map((chip) => (
            <button
              key={chip.def}
              type="button"
              className={`pol-chip ${selected && selected.def === chip.def ? "is-selected" : ""}`}
              onClick={() => selectChip(chip)}
            >
              {chip.def}
            </button>
          ))}
        </div>
      )}

      {allPlaced && !checked && (
        <button type="button" className="pol-check-btn" onClick={() => setChecked(true)}>Check ✓</button>
      )}

      {checked && (
        <button type="button" className="pol-reset-btn" onClick={reset}>Try Again ↻</button>
      )}
    </div>
  );
}

function ExplainSlide({ index }) {
  const item = LESSON.words[index];
  return (
    <div className="pol-slide">
      <h2 className="pol-h">{item.word}</h2>
      <p className="pol-set-label">Word {index + 1} of {LESSON.words.length}</p>
      <div className="pol-explain-list">
        {item.senses.map((s, i) => (
          <div key={i} className="pol-explain-item">
            <p className="pol-explain-sentence">“{s.sentence}”</p>
            <p className="pol-explain-def">{s.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="pol-quiz-item">
      <p className="pol-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="pol-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="pol-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ index }) {
  const chunk = LESSON.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(LESSON.guided.length / 3);
  return (
    <div className="pol-slide pol-slide--part">
      <h2 className="pol-h">Guided Practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h2>
      <div className="pol-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function WrapupSlide() {
  return (
    <div className="pol-slide">
      <span className="pol-wrap-icon">🧠</span>
      <h2 className="pol-h">Lesson Complete</h2>
      <h1 className="pol-cover-title pol-cover-title--small">10 Words, 30 Meanings!</h1>
      <p className="pol-tagline">You matched 10 words to their 3 related meanings each. One root idea, stretched across body, object, and metaphor.</p>
      <button type="button" className="pol-nav-btn pol-nav-btn--primary" onClick={() => window.close()}>Close ✕</button>
    </div>
  );
}

function buildSlides() {
  const slides = ["cover"];
  LESSON.words.forEach((_, i) => slides.push(`match${i}`, `explain${i}`));
  const guidedChunks = Math.ceil(LESSON.guided.length / 3);
  for (let i = 0; i < guidedChunks; i++) slides.push(`guided${i}`);
  slides.push("wrapup");
  return slides;
}

function renderSlide(slideType) {
  if (slideType === "cover") return <CoverSlide />;
  if (slideType.startsWith("match")) return <MatchSlide index={Number(slideType.replace("match", ""))} />;
  if (slideType.startsWith("explain")) return <ExplainSlide index={Number(slideType.replace("explain", ""))} />;
  if (slideType.startsWith("guided")) return <GuidedSlide index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "wrapup") return <WrapupSlide />;
  return null;
}

export default function PolysemyLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const slideTypes = buildSlides();
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="pol-shell">
      <style>{CSS}</style>

      <div className="pol-stage">
        <div className="pol-deck">
          <div className="pol-deck-header">
            <span className="pol-brand"><img src="/logo-sentenco.png" alt="" className="pol-brand-logo" />entenco</span>
            <StageLabel slideType={slideType} />
          </div>
          <div className="pol-deck-body" key={slideIdx}>
            {renderSlide(slideType)}
          </div>
          <div className="pol-nav-row">
            <button type="button" className="pol-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="pol-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`pol-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="pol-nav-btn pol-nav-btn--primary"
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

.pol-shell {
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
.pol-shell * { box-sizing: border-box; }

.pol-brand { display: flex; align-items: center; flex-shrink: 0; font-family: 'Grandstander', cursive; font-weight: 700; font-size: 18px; color: #123B40; }
.pol-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.pol-stage-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4F8B90;
  white-space: nowrap;
  flex-shrink: 0;
}

.pol-stage { flex: 1; width: 100%; max-width: 1120px; padding: 16px 24px 20px; display: flex; flex-direction: column; min-height: 0; }

.pol-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 20px 0 rgba(14,110,124,0.08);
  min-height: 0;
  overflow: hidden;
}

.pol-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #D6F1EC;
  flex-shrink: 0;
}

.pol-deck-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 0;
  overflow-y: auto;
  gap: 16px;
  padding: 24px 48px 8px;
}

.pol-slide { display: flex; flex-direction: column; align-items: center; gap: 14px; width: 100%; }
.pol-slide--cover { gap: 14px; }
.pol-slide--part { justify-content: flex-start; }

.pol-kind-badge {
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
.pol-cover-title {
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
.pol-cover-title--small { font-size: clamp(24px, 3.4vw, 32px); margin-top: 0; }
.pol-tagline { font-size: 15px; font-weight: 700; color: #4F8B90; max-width: 480px; margin: 0; }

.pol-h {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(34px, 5.4vw, 46px);
  color: #FFFFFF;
  margin: 0;
  display: inline-block;
  background: #0E6E7C;
  border-radius: 999px;
  padding: 8px 32px;
  box-shadow: 0 5px 0 #0A4F59;
  text-transform: capitalize;
}
.pol-set-label { font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #8FB9BC; margin: 0; }
.pol-instruction { font-size: 14px; font-weight: 700; color: #4F8B90; margin: 0; }

.pol-slots { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 640px; }
.pol-slot {
  border: 3px dashed #BFE6E1;
  border-radius: 16px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 12px 16px;
  cursor: pointer;
  text-align: left;
}
.pol-slot-sentence { font-size: 13.5px; font-weight: 700; font-style: italic; color: #123B40; }
.pol-slot-def { font-family: 'Grandstander', cursive; font-weight: 800; font-size: 15px; color: #4F8B90; }
.pol-slot.is-correct { border-style: solid; border-color: #4CBE7F; background: #E4F8EC; }
.pol-slot.is-correct .pol-slot-def { color: #1F7A47; }
.pol-slot.is-incorrect { border-style: solid; border-color: #E5645A; background: #FDEAEA; }
.pol-slot.is-incorrect .pol-slot-def { color: #B3392F; }

.pol-pool { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; max-width: 700px; }
.pol-chip {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: clamp(14px, 2vw, 16px);
  color: #123B40;
  background: rgba(14,110,124,0.12);
  border: 2px solid transparent;
  border-radius: 999px;
  padding: 10px 18px;
  cursor: pointer;
}
.pol-chip.is-selected { border-color: #FF6F59; background: rgba(255,111,89,0.16); }

.pol-check-btn {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 15px;
  color: #FFFFFF;
  background: #FF6F59;
  border: none;
  border-radius: 999px;
  padding: 11px 26px;
  cursor: pointer;
  box-shadow: 0 5px 0 #D14E3B;
}
.pol-check-btn:active { transform: translateY(4px); box-shadow: 0 1px 0 #D14E3B; }

.pol-reset-btn {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 13px;
  color: #0E6E7C;
  background: #FFFFFF;
  border: 1px solid #BFE6E1;
  border-radius: 999px;
  padding: 8px 18px;
  cursor: pointer;
}

.pol-explain-list { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 640px; text-align: left; }
.pol-explain-item { background: #EAF8F6; border-radius: 14px; padding: 12px 18px; }
.pol-explain-sentence { font-size: 13.5px; font-weight: 700; font-style: italic; color: #123B40; margin: 0 0 4px; }
.pol-explain-def { font-family: 'Grandstander', cursive; font-weight: 800; font-size: 15px; color: #1C8A68; margin: 0; }

.pol-quiz-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 760px; text-align: left; }
.pol-quiz-item { background: #EAF8F6; border-radius: 16px; padding: 14px 18px; display: flex; flex-direction: column; gap: 10px; }
.pol-quiz-q { font-size: 15px; font-weight: 700; color: #123B40; margin: 0; }

.pol-reveal-btn {
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
.pol-reveal-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.pol-reveal-correct { font-size: 14px; font-weight: 700; color: #1C8A68; margin: 0; }

.pol-wrap-icon { font-size: 40px; }

.pol-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 48px 24px; margin-top: auto; border-top: 2px solid #EAF8F6; flex-shrink: 0; }
.pol-nav-btn {
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
.pol-nav-btn--primary { color: #FFFFFF; background: #FF6F59; border: none; box-shadow: 0 4px 0 #D14E3B; }
.pol-nav-btn--primary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.pol-nav-btn:disabled { opacity: 0.35; cursor: default; }
.pol-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.pol-nav-dot { width: 7px; height: 7px; border-radius: 50%; background: #BFE6E1; }
.pol-nav-dot.is-active { background: #0E6E7C; }
`;
