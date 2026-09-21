import { useState } from "react";

const LESSON = {
  title: "Near-Synonym Nuance",
  tagline: "Same rough meaning, different degree, tone, or manner. Order matters.",
  sets: [
    { type: "Intensity", hue: "coral", axisLabel: "mild → strong", words: ["big", "huge", "enormous"],
      notes: ["Larger than average: the everyday, neutral word.", "Noticeably larger than “big”: used for real emphasis.", "Extremely large: often used to show surprise."],
      examples: ["We need a big table for the party.", "They live in a huge house.", "The elephant was enormous."] },
    { type: "Intensity", hue: "coral", axisLabel: "mild → strong", words: ["glad", "happy", "thrilled"],
      notes: ["A mild, polite kind of pleased: often about one specific fact.", "The everyday word for feeling good.", "Extremely excited and happy: a strong reaction."],
      examples: ["I'm glad you called.", "She's happy with her new job.", "He was thrilled to win the award."] },
    { type: "Intensity", hue: "coral", axisLabel: "mild → strong", words: ["tired", "drained", "exhausted"],
      notes: ["The normal, everyday word for needing rest.", "Tired in a deeper way, often emotionally too.", "Completely out of energy: the strongest word for tired."],
      examples: ["I'm tired after work.", "The meeting left her feeling drained.", "After the marathon, he was exhausted."] },
    { type: "Manner", hue: "seafoam", axisLabel: "quiet → loud", words: ["whispered", "said", "shouted"],
      notes: ["Spoken very quietly, often so others can't hear.", "The neutral, everyday word for speaking.", "Spoken loudly, often with strong emotion."],
      examples: ["She whispered the secret to me.", "He said hello and sat down.", "The coach shouted instructions across the field."] },
    { type: "Manner", hue: "seafoam", axisLabel: "calm → forceful", words: ["stroll", "walk", "march"],
      notes: ["To walk slowly and casually, with no hurry.", "The neutral, everyday word for moving on foot.", "To walk quickly and purposefully, often in a firm way."],
      examples: ["They strolled along the beach.", "She walks to school every day.", "The soldiers marched through the town."] },
    { type: "Manner", hue: "seafoam", axisLabel: "quiet → loud", words: ["chuckle", "laugh", "guffaw"],
      notes: ["A quiet, gentle laugh, often to yourself.", "The normal, everyday word for laughing.", "A loud, hearty burst of laughter."],
      examples: ["He chuckled at the joke.", "The kids laughed at the clown.", "The whole room guffawed at his story."] },
    { type: "Connotation", hue: "gold", axisLabel: "positive → negative", words: ["slim", "thin", "skinny"],
      notes: ["A flattering, positive way to describe someone thin.", "A neutral, factual word: no strong feeling either way.", "A casual word that can sound negative or critical."],
      examples: ["She has a slim figure.", "He's quite thin for his height.", "The kids teased him for being skinny."] },
    { type: "Connotation", hue: "gold", axisLabel: "positive → negative", words: ["frugal", "cheap", "stingy"],
      notes: ["A positive word: careful and smart with money.", "An informal, slightly negative word: unwilling to spend.", "A strongly negative word: selfish with money."],
      examples: ["She's frugal and always saves for the future.", "He's too cheap to buy a proper gift.", "Everyone thinks their boss is stingy."] },
    { type: "Connotation", hue: "gold", axisLabel: "positive → negative", words: ["smart", "clever", "cunning"],
      notes: ["A plain, positive word for intelligent.", "A positive word that suggests quick, creative thinking.", "A negative word: smart in a sly or deceptive way."],
      examples: ["She's a smart student.", "He found a clever solution to the problem.", "The fox is known for being cunning."] },
  ],
  guided: [
    { prompt: "It wasn't just tired. She was completely ___.", answer: "exhausted" },
    { prompt: "He didn't just laugh, he ___ so loudly the whole room turned.", answer: "guffawed" },
    { prompt: "She's not cheap, she's just ___ with her money. She always plans ahead.", answer: "frugal" },
    { prompt: "The fox tricked the farmer with a ___ plan.", answer: "cunning" },
    { prompt: "He wasn't just walking, he was ___ down the hallway, clearly upset.", answer: "marching" },
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
  { key: "set", label: "Rank the Scale" },
  { key: "explain", label: "Explain" },
  { key: "guided", label: "Guided Practice" },
  { key: "wrapup", label: "Wrap-up" },
];

function stageKey(slideType) {
  if (slideType.startsWith("set")) return "set";
  if (slideType.startsWith("explain")) return "explain";
  if (slideType.startsWith("guided")) return "guided";
  return slideType;
}

function StageLabel({ slideType }) {
  const stage = STAGES.find((s) => s.key === stageKey(slideType));
  return <span className="nsn-stage-label">{stage.label}</span>;
}

function CoverSlide() {
  return (
    <div className="nsn-slide nsn-slide--cover">
      <span className="nsn-kind-badge">Vocabulary Lesson</span>
      <h1 className="nsn-cover-title">{LESSON.title}</h1>
      <p className="nsn-tagline">{LESSON.tagline}</p>
    </div>
  );
}

function poolFor(set) {
  return shuffled(set.words.map((word, correctIndex) => ({ word, correctIndex })));
}

function NuanceSlide({ index }) {
  const set = LESSON.sets[index];
  const [pool, setPool] = useState(() => poolFor(set));
  const [placed, setPlaced] = useState([]);
  const [checked, setChecked] = useState(false);

  function place(item) {
    if (checked || placed.length >= set.words.length) return;
    setPlaced((p) => [...p, item]);
    setPool((p) => p.filter((x) => x.word !== item.word));
  }
  function reset() {
    setPlaced([]);
    setPool(poolFor(set));
    setChecked(false);
  }

  const allPlaced = placed.length === set.words.length;

  return (
    <div className="nsn-slide nsn-slide--part">
      <div className="nsn-header-row">
        <h2 className={`nsn-h nsn-h--${set.hue}`}>{set.type}</h2>
      </div>
      <p className="nsn-set-label">Set {index + 1} of {LESSON.sets.length}</p>
      <p className="nsn-instruction">Tap the words in order: {set.axisLabel}</p>

      <div className="nsn-slots">
        {set.words.map((_, i) => {
          const item = placed[i];
          let state = "";
          if (checked && item) state = item.correctIndex === i ? "is-correct" : "is-incorrect";
          return (
            <div key={i} className={`nsn-slot ${state}`}>
              {item ? item.word : <span className="nsn-slot-num">{i + 1}</span>}
            </div>
          );
        })}
      </div>

      {!allPlaced && (
        <div className="nsn-pool">
          {pool.map((item) => (
            <button key={item.word} type="button" className={`nsn-chip nsn-chip--${set.hue}`} onClick={() => place(item)}>
              {item.word}
            </button>
          ))}
        </div>
      )}

      {allPlaced && !checked && (
        <button type="button" className="nsn-check-btn" onClick={() => setChecked(true)}>Check ✓</button>
      )}

      {checked && (
        <button type="button" className="nsn-reset-btn" onClick={reset}>Try Again ↻</button>
      )}
    </div>
  );
}

function ExplainSlide({ index }) {
  const set = LESSON.sets[index];
  return (
    <div className="nsn-slide">
      <div className="nsn-header-row">
        <h2 className={`nsn-h nsn-h--${set.hue}`}>{set.type}</h2>
      </div>
      <p className="nsn-set-label">Set {index + 1} of {LESSON.sets.length} · {set.axisLabel}</p>
      <div className={`nsn-explain-row nsn-explain-row--${set.words.length}`}>
        {set.words.map((w, i) => (
          <div key={i} className={`nsn-explain-item nsn-explain-item--${set.hue}`}>
            <p className="nsn-explain-word">{w}</p>
            <p className="nsn-explain-note">{set.notes[i]}</p>
            <p className="nsn-explain-example">“{set.examples[i]}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="nsn-quiz-item">
      <p className="nsn-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="nsn-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="nsn-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ index }) {
  const chunk = LESSON.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(LESSON.guided.length / 3);
  return (
    <div className="nsn-slide nsn-slide--part">
      <h2 className="nsn-h">Guided Practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h2>
      <div className="nsn-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function WrapupSlide() {
  return (
    <div className="nsn-slide">
      <span className="nsn-wrap-icon">🎚️</span>
      <h2 className="nsn-h">Lesson Complete</h2>
      <h1 className="nsn-cover-title nsn-cover-title--small">9 Scales Sorted!</h1>
      <p className="nsn-tagline">You ranked 9 near-synonym sets by intensity, manner, and tone. Same rough meaning, different shade: pick the word that actually fits.</p>
      <button type="button" className="nsn-nav-btn nsn-nav-btn--primary" onClick={() => window.close()}>Close ✕</button>
    </div>
  );
}

function buildSlides() {
  const slides = ["cover"];
  LESSON.sets.forEach((_, i) => slides.push(`set${i}`, `explain${i}`));
  const guidedChunks = Math.ceil(LESSON.guided.length / 3);
  for (let i = 0; i < guidedChunks; i++) slides.push(`guided${i}`);
  slides.push("wrapup");
  return slides;
}

function renderSlide(slideType) {
  if (slideType === "cover") return <CoverSlide />;
  if (slideType.startsWith("explain")) return <ExplainSlide index={Number(slideType.replace("explain", ""))} />;
  if (slideType.startsWith("set")) return <NuanceSlide index={Number(slideType.replace("set", ""))} />;
  if (slideType.startsWith("guided")) return <GuidedSlide index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "wrapup") return <WrapupSlide />;
  return null;
}

export default function NearSynonymNuanceLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const slideTypes = buildSlides();
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="nsn-shell">
      <style>{CSS}</style>

      <div className="nsn-stage">
        <div className="nsn-deck">
          <div className="nsn-deck-header">
            <span className="nsn-brand"><img src="/logo-sentenco.png" alt="" className="nsn-brand-logo" />entenco</span>
            <StageLabel slideType={slideType} />
          </div>
          <div className="nsn-deck-body" key={slideIdx}>
            {renderSlide(slideType)}
          </div>
          <div className="nsn-nav-row">
            <button type="button" className="nsn-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="nsn-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`nsn-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="nsn-nav-btn nsn-nav-btn--primary"
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

.nsn-shell {
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
.nsn-shell * { box-sizing: border-box; }

.nsn-brand { display: flex; align-items: center; flex-shrink: 0; font-family: 'Grandstander', cursive; font-weight: 700; font-size: 18px; color: #123B40; }
.nsn-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.nsn-stage-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4F8B90;
  white-space: nowrap;
  flex-shrink: 0;
}

.nsn-stage { flex: 1; width: 100%; max-width: 1120px; padding: 16px 24px 20px; display: flex; flex-direction: column; min-height: 0; }

.nsn-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 20px 0 rgba(14,110,124,0.08);
  min-height: 0;
  overflow: hidden;
}

.nsn-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #D6F1EC;
  flex-shrink: 0;
}

.nsn-deck-body {
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

.nsn-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.nsn-slide--cover { gap: 14px; }
.nsn-slide--part { justify-content: flex-start; }

.nsn-kind-badge {
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
.nsn-cover-title {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(34px, 4.6vw, 44px);
  color: #FFFFFF;
  margin: 4px 0 0;
  line-height: 1.3;
  background: #0E6E7C;
  border-radius: 24px;
  padding: 12px 34px;
  box-shadow: 0 8px 0 #0A4F59;
  display: inline-block;
}
.nsn-cover-title--small { font-size: clamp(26px, 3.6vw, 34px); margin-top: 0; }
.nsn-tagline { font-size: 15px; font-weight: 700; color: #4F8B90; max-width: 480px; margin: 0; }

.nsn-header-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center; }
.nsn-h {
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
.nsn-h--coral { background: #E85A3D; box-shadow: 0 5px 0 #B8391F; }
.nsn-h--seafoam { background: #1C8A68; box-shadow: 0 5px 0 #146B4E; }
.nsn-h--gold { background: #D99A1B; box-shadow: 0 5px 0 #8F6108; }

.nsn-set-label { font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #8FB9BC; margin: 0; }

.nsn-instruction { font-size: 14px; font-weight: 700; color: #4F8B90; margin: 0; }

.nsn-slots { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.nsn-slot {
  min-width: 150px;
  min-height: 76px;
  border: 3px dashed #BFE6E1;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(26px, 4.4vw, 38px);
  color: #123B40;
  padding: 10px 20px;
  text-transform: capitalize;
}
.nsn-slot-num { color: #BFE6E1; font-weight: 800; font-size: 22px; }
.nsn-slot.is-correct { border-style: solid; border-color: #4CBE7F; background: #E4F8EC; color: #1F7A47; }
.nsn-slot.is-incorrect { border-style: solid; border-color: #E5645A; background: #FDEAEA; color: #B3392F; }

.nsn-pool { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.nsn-chip {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(24px, 4vw, 34px);
  border: none;
  border-radius: 999px;
  padding: 14px 28px;
  cursor: pointer;
  text-transform: capitalize;
}
.nsn-chip--coral { color: #8A2E1B; background: rgba(232,90,61,0.16); }
.nsn-chip--seafoam { color: #123B2F; background: rgba(28,138,104,0.16); }
.nsn-chip--gold { color: #6B4E08; background: rgba(255,203,76,0.30); }
.nsn-chip:hover { transform: translateY(-2px); }

.nsn-check-btn {
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
.nsn-check-btn:active { transform: translateY(4px); box-shadow: 0 1px 0 #D14E3B; }

.nsn-reset-btn {
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

.nsn-explain-row { display: grid; gap: 16px; width: 100%; max-width: 820px; margin-top: 4px; }
.nsn-explain-row--2 { grid-template-columns: 1fr 1fr; }
.nsn-explain-row--3 { grid-template-columns: 1fr 1fr 1fr; }
.nsn-explain-item { border-radius: 16px; padding: 16px 16px; text-align: left; display: flex; flex-direction: column; gap: 6px; }
.nsn-explain-item--coral { background: #FFEDE7; }
.nsn-explain-item--seafoam { background: #E3F6EC; }
.nsn-explain-item--gold { background: #FFF3D9; }
.nsn-explain-word { font-family: 'Grandstander', cursive; font-weight: 800; font-size: 18px; color: #123B40; text-transform: capitalize; margin: 0; }
.nsn-explain-note { font-size: 13px; font-weight: 700; color: #123B40; margin: 2px 0 0; }
.nsn-explain-example { font-size: 12.5px; font-weight: 600; font-style: italic; color: #4F8B90; margin: 0; }

@media (max-width: 640px) {
  .nsn-explain-row--2, .nsn-explain-row--3 { grid-template-columns: 1fr; }
}

.nsn-quiz-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 760px; text-align: left; }
.nsn-quiz-item { background: #EAF8F6; border-radius: 16px; padding: 14px 18px; display: flex; flex-direction: column; gap: 10px; }
.nsn-quiz-q { font-size: 15px; font-weight: 700; color: #123B40; margin: 0; }

.nsn-reveal-btn {
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
.nsn-reveal-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.nsn-reveal-correct { font-size: 14px; font-weight: 700; color: #1C8A68; margin: 0; text-transform: capitalize; }

.nsn-wrap-icon { font-size: 40px; }

.nsn-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 48px 24px; margin-top: auto; border-top: 2px solid #EAF8F6; flex-shrink: 0; }
.nsn-nav-btn {
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
.nsn-nav-btn--primary { color: #FFFFFF; background: #FF6F59; border: none; box-shadow: 0 4px 0 #D14E3B; }
.nsn-nav-btn--primary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.nsn-nav-btn:disabled { opacity: 0.35; cursor: default; }
.nsn-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.nsn-nav-dot { width: 7px; height: 7px; border-radius: 50%; background: #BFE6E1; }
.nsn-nav-dot.is-active { background: #0E6E7C; }
`;
