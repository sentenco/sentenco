import { useState } from "react";

const CATS = ["verb", "noun", "adjective", "adverb"];
const CAT_LABELS = { verb: "Verb", noun: "Noun", adjective: "Adjective", adverb: "Adverb" };

const LESSON = {
  title: "Word Families",
  tagline: "One root, four jobs: verb, noun, adjective, adverb.",
  families: [
    { root: "decide", forms: { verb: "decide", noun: "decision", adjective: "decisive", adverb: "decisively" },
      notes: { verb: "To make a choice.", noun: "The choice you made.", adjective: "Able to decide quickly and confidently.", adverb: "In a decisive way." },
      examples: { verb: "She decided to study abroad.", noun: "It was a difficult decision.", adjective: "A good leader is decisive.", adverb: "He acted decisively during the crisis." } },
    { root: "succeed", forms: { verb: "succeed", noun: "success", adjective: "successful", adverb: "successfully" },
      notes: { verb: "To achieve what you were trying to do.", noun: "The achievement itself.", adjective: "Having achieved success.", adverb: "In a successful way." },
      examples: { verb: "She worked hard and succeeded.", noun: "Their success surprised everyone.", adjective: "He's a successful entrepreneur.", adverb: "They successfully launched the product." } },
    { root: "create", forms: { verb: "create", noun: "creation", adjective: "creative", adverb: "creatively" },
      notes: { verb: "To make something new.", noun: "The thing that was made.", adjective: "Having original ideas.", adverb: "In an original way." },
      examples: { verb: "Artists create beautiful things.", noun: "The painting was his finest creation.", adjective: "She's a very creative writer.", adverb: "He solved the problem creatively." } },
    { root: "differ", forms: { verb: "differ", noun: "difference", adjective: "different", adverb: "differently" },
      notes: { verb: "To be unlike something.", noun: "The way things are unlike each other.", adjective: "Not the same.", adverb: "In a different way." },
      examples: { verb: "Our opinions differ on this topic.", noun: "There's a big difference between the two.", adjective: "They have very different styles.", adverb: "Everyone learns differently." } },
    { root: "please", forms: { verb: "please", noun: "pleasure", adjective: "pleasant", adverb: "pleasantly" },
      notes: { verb: "To make someone happy.", noun: "A feeling of happiness or enjoyment.", adjective: "Nice or enjoyable.", adverb: "In a pleasant way." },
      examples: { verb: "He tried to please his parents.", noun: "Reading gives her great pleasure.", adjective: "It was a pleasant afternoon.", adverb: "She was pleasantly surprised." } },
    { root: "act", forms: { verb: "act", noun: "action", adjective: "active", adverb: "actively" },
      notes: { verb: "To do something, or perform.", noun: "The thing being done.", adjective: "Full of energy and doing things.", adverb: "In an active way." },
      examples: { verb: "You need to act quickly.", noun: "The film was full of action.", adjective: "He leads an active lifestyle.", adverb: "She's actively looking for a new job." } },
    { root: "communicate", forms: { verb: "communicate", noun: "communication", adjective: "communicative", adverb: "communicatively" },
      notes: { verb: "To share information or feelings.", noun: "The act of sharing information.", adjective: "Willing and able to share thoughts easily.", adverb: "In a way that shares ideas well." },
      examples: { verb: "It's important to communicate clearly.", noun: "Good communication prevents misunderstandings.", adjective: "He's naturally communicative and friendly.", adverb: "She writes communicatively, with real clarity." } },
    { root: "imagine", forms: { verb: "imagine", noun: "imagination", adjective: "imaginative", adverb: "imaginatively" },
      notes: { verb: "To form a picture in your mind.", noun: "The ability to form new ideas or pictures.", adjective: "Having original, creative ideas.", adverb: "In a creative, original way." },
      examples: { verb: "Imagine a world without pollution.", noun: "Children have a wonderful imagination.", adjective: "It was an imaginative solution.", adverb: "The room was imaginatively decorated." } },
    { root: "inform", forms: { verb: "inform", noun: "information", adjective: "informative", adverb: "informatively" },
      notes: { verb: "To tell someone facts.", noun: "Facts about something.", adjective: "Giving useful facts.", adverb: "In a way that gives useful facts." },
      examples: { verb: "Please inform us of any changes.", noun: "The website has useful information.", adjective: "It was a very informative lecture.", adverb: "She spoke informatively about the topic." } },
    { root: "educate", forms: { verb: "educate", noun: "education", adjective: "educational", adverb: "educationally" },
      notes: { verb: "To teach someone.", noun: "The process of teaching and learning.", adjective: "Related to teaching, or helpful for learning.", adverb: "In a way related to education." },
      examples: { verb: "Schools educate the next generation.", noun: "Education opens many doors.", adjective: "It's an educational documentary.", adverb: "The program is educationally valuable." } },
  ],
  guided: [
    { prompt: "It was a difficult ___ to make. (decide)", answer: "decision" },
    { prompt: "She's one of the most ___ people I know, always full of new ideas. (create)", answer: "creative" },
    { prompt: "He answered the question very ___, with lots of useful facts. (inform)", answer: "informatively" },
    { prompt: "They ___ launched the product last month. (success)", answer: "successfully" },
    { prompt: "Good ___ is the key to any healthy relationship. (communicate)", answer: "communication" },
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

function poolFor(fam) {
  return shuffled(CATS.map((cat) => ({ word: fam.forms[cat], cat })));
}

const STAGES = [
  { key: "cover", label: "Cover" },
  { key: "family", label: "Sort the Family" },
  { key: "explain", label: "Explain" },
  { key: "guided", label: "Guided Practice" },
  { key: "wrapup", label: "Wrap-up" },
];

function stageKey(slideType) {
  if (slideType.startsWith("family")) return "family";
  if (slideType.startsWith("explain")) return "explain";
  if (slideType.startsWith("guided")) return "guided";
  return slideType;
}

function StageLabel({ slideType }) {
  const stage = STAGES.find((s) => s.key === stageKey(slideType));
  return <span className="wfl-stage-label">{stage.label}</span>;
}

function CoverSlide() {
  return (
    <div className="wfl-slide wfl-slide--cover">
      <span className="wfl-kind-badge">Vocabulary Lesson</span>
      <h1 className="wfl-cover-title">{LESSON.title}</h1>
      <p className="wfl-tagline">{LESSON.tagline}</p>
    </div>
  );
}

function FamilySlide({ index }) {
  const fam = LESSON.families[index];
  const [pool, setPool] = useState(() => poolFor(fam));
  const [slots, setSlots] = useState({});
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  function selectChip(item) {
    if (checked) return;
    setSelected((s) => (s && s.word === item.word ? null : item));
  }

  function clickSlot(cat) {
    if (checked) return;
    const existing = slots[cat];
    if (selected) {
      setSlots((s) => ({ ...s, [cat]: selected }));
      setPool((p) => {
        let next = p.filter((x) => x.word !== selected.word);
        if (existing) next = [...next, existing];
        return next;
      });
      setSelected(null);
    } else if (existing) {
      setSlots((s) => {
        const n = { ...s };
        delete n[cat];
        return n;
      });
      setPool((p) => [...p, existing]);
    }
  }

  function reset() {
    setPool(poolFor(fam));
    setSlots({});
    setSelected(null);
    setChecked(false);
  }

  const allPlaced = CATS.every((cat) => slots[cat]);

  return (
    <div className="wfl-slide wfl-slide--part">
      <div className="wfl-header-row">
        <h2 className="wfl-h">{fam.root}</h2>
      </div>
      <p className="wfl-set-label">Family {index + 1} of {LESSON.families.length}</p>
      <p className="wfl-instruction">Tap a word, then tap the box it belongs in.</p>

      <div className="wfl-grid">
        {CATS.map((cat) => {
          const item = slots[cat];
          let state = "";
          if (checked && item) state = item.cat === cat ? "is-correct" : "is-incorrect";
          return (
            <button
              key={cat}
              type="button"
              className={`wfl-cell ${state} ${item ? "is-filled" : ""}`}
              onClick={() => clickSlot(cat)}
            >
              <span className="wfl-cell-label">{CAT_LABELS[cat]}</span>
              <span className="wfl-cell-word">{item ? item.word : "·"}</span>
            </button>
          );
        })}
      </div>

      {!checked && (
        <div className="wfl-pool">
          {pool.map((item) => (
            <button
              key={item.word}
              type="button"
              className={`wfl-chip ${selected && selected.word === item.word ? "is-selected" : ""}`}
              onClick={() => selectChip(item)}
            >
              {item.word}
            </button>
          ))}
        </div>
      )}

      {allPlaced && !checked && (
        <button type="button" className="wfl-check-btn" onClick={() => setChecked(true)}>Check ✓</button>
      )}

      {checked && (
        <button type="button" className="wfl-reset-btn" onClick={reset}>Try Again ↻</button>
      )}
    </div>
  );
}

function ExplainSlide({ index }) {
  const fam = LESSON.families[index];
  return (
    <div className="wfl-slide">
      <div className="wfl-header-row">
        <h2 className="wfl-h">{fam.root}</h2>
      </div>
      <p className="wfl-set-label">Family {index + 1} of {LESSON.families.length}</p>
      <div className="wfl-explain-grid">
        {CATS.map((cat) => (
          <div key={cat} className="wfl-explain-item">
            <span className="wfl-explain-tag">{CAT_LABELS[cat]}</span>
            <p className="wfl-explain-word">{fam.forms[cat]}</p>
            <p className="wfl-explain-note">{fam.notes[cat]}</p>
            <p className="wfl-explain-example">“{fam.examples[cat]}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="wfl-quiz-item">
      <p className="wfl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="wfl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="wfl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ index }) {
  const chunk = LESSON.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(LESSON.guided.length / 3);
  return (
    <div className="wfl-slide wfl-slide--part">
      <h2 className="wfl-h">Guided Practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h2>
      <div className="wfl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function WrapupSlide() {
  return (
    <div className="wfl-slide">
      <span className="wfl-wrap-icon">🌳</span>
      <h2 className="wfl-h">Lesson Complete</h2>
      <h1 className="wfl-cover-title wfl-cover-title--small">10 Families Grown!</h1>
      <p className="wfl-tagline">You matched 10 roots to their verb, noun, adjective, and adverb forms. One root really does give you four words.</p>
      <button type="button" className="wfl-nav-btn wfl-nav-btn--primary" onClick={() => window.close()}>Close ✕</button>
    </div>
  );
}

function buildSlides() {
  const slides = ["cover"];
  LESSON.families.forEach((_, i) => slides.push(`family${i}`, `explain${i}`));
  const guidedChunks = Math.ceil(LESSON.guided.length / 3);
  for (let i = 0; i < guidedChunks; i++) slides.push(`guided${i}`);
  slides.push("wrapup");
  return slides;
}

function renderSlide(slideType) {
  if (slideType === "cover") return <CoverSlide />;
  if (slideType.startsWith("explain")) return <ExplainSlide index={Number(slideType.replace("explain", ""))} />;
  if (slideType.startsWith("family")) return <FamilySlide index={Number(slideType.replace("family", ""))} />;
  if (slideType.startsWith("guided")) return <GuidedSlide index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "wrapup") return <WrapupSlide />;
  return null;
}

export default function WordFamiliesLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const slideTypes = buildSlides();
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="wfl-shell">
      <style>{CSS}</style>

      <div className="wfl-stage">
        <div className="wfl-deck">
          <div className="wfl-deck-header">
            <span className="wfl-brand"><img src="/logo-sentivo.png" alt="" className="wfl-brand-logo" />entenco</span>
            <StageLabel slideType={slideType} />
          </div>
          <div className="wfl-deck-body" key={slideIdx}>
            {renderSlide(slideType)}
          </div>
          <div className="wfl-nav-row">
            <button type="button" className="wfl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="wfl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`wfl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="wfl-nav-btn wfl-nav-btn--primary"
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

.wfl-shell {
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
.wfl-shell * { box-sizing: border-box; }

.wfl-brand { display: flex; align-items: center; flex-shrink: 0; font-family: 'Grandstander', cursive; font-weight: 700; font-size: 18px; color: #123B40; }
.wfl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.wfl-stage-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4F8B90;
  white-space: nowrap;
  flex-shrink: 0;
}

.wfl-stage { flex: 1; width: 100%; max-width: 1120px; padding: 16px 24px 20px; display: flex; flex-direction: column; min-height: 0; }

.wfl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 20px 0 rgba(14,110,124,0.08);
  min-height: 0;
  overflow: hidden;
}

.wfl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #D6F1EC;
  flex-shrink: 0;
}

.wfl-deck-body {
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

.wfl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.wfl-slide--cover { gap: 14px; }
.wfl-slide--part { justify-content: flex-start; }

.wfl-kind-badge {
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
.wfl-cover-title {
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
.wfl-cover-title--small { font-size: clamp(26px, 3.6vw, 34px); margin-top: 0; }
.wfl-tagline { font-size: 15px; font-weight: 700; color: #4F8B90; max-width: 480px; margin: 0; }

.wfl-header-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center; }
.wfl-h {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: clamp(22px, 3.6vw, 28px);
  color: #FFFFFF;
  margin: 0;
  display: inline-block;
  background: #0E6E7C;
  border-radius: 999px;
  padding: 8px 26px;
  box-shadow: 0 5px 0 #0A4F59;
  text-transform: capitalize;
}
.wfl-set-label { font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #8FB9BC; margin: 0; }
.wfl-instruction { font-size: 14px; font-weight: 700; color: #4F8B90; margin: 0; }

.wfl-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; width: 100%; max-width: 640px; }
.wfl-cell {
  border: 3px dashed #BFE6E1;
  border-radius: 16px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 14px 8px;
  min-height: 84px;
  cursor: pointer;
}
.wfl-cell-label { font-size: 10.5px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #8FB9BC; }
.wfl-cell-word { font-family: 'Grandstander', cursive; font-weight: 800; font-size: clamp(15px, 2.6vw, 20px); color: #123B40; text-transform: capitalize; word-break: break-word; }
.wfl-cell.is-filled { border-style: solid; border-color: #BFE6E1; background: #EAF8F6; }
.wfl-cell.is-correct { border-style: solid; border-color: #4CBE7F; background: #E4F8EC; }
.wfl-cell.is-correct .wfl-cell-word { color: #1F7A47; }
.wfl-cell.is-incorrect { border-style: solid; border-color: #E5645A; background: #FDEAEA; }
.wfl-cell.is-incorrect .wfl-cell-word { color: #B3392F; }

.wfl-pool { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.wfl-chip {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(22px, 3.6vw, 30px);
  color: #123B40;
  background: rgba(14,110,124,0.12);
  border: 3px solid transparent;
  border-radius: 999px;
  padding: 12px 26px;
  cursor: pointer;
  text-transform: capitalize;
}
.wfl-chip.is-selected { border-color: #FF6F59; background: rgba(255,111,89,0.16); }

.wfl-check-btn {
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
.wfl-check-btn:active { transform: translateY(4px); box-shadow: 0 1px 0 #D14E3B; }

.wfl-reset-btn {
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

.wfl-explain-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.wfl-explain-item { background: #EAF8F6; border-radius: 16px; padding: 14px 16px; text-align: left; display: flex; flex-direction: column; gap: 4px; }
.wfl-explain-tag { align-self: flex-start; font-size: 10px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #4F8B90; background: rgba(255,255,255,0.6); border-radius: 999px; padding: 3px 10px; }
.wfl-explain-word { font-family: 'Grandstander', cursive; font-weight: 800; font-size: 19px; color: #123B40; margin: 4px 0 0; text-transform: capitalize; }
.wfl-explain-note { font-size: 12.5px; font-weight: 700; color: #123B40; margin: 0; }
.wfl-explain-example { font-size: 12px; font-weight: 600; font-style: italic; color: #4F8B90; margin: 0; }

.wfl-quiz-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 760px; text-align: left; }
.wfl-quiz-item { background: #EAF8F6; border-radius: 16px; padding: 14px 18px; display: flex; flex-direction: column; gap: 10px; }
.wfl-quiz-q { font-size: 15px; font-weight: 700; color: #123B40; margin: 0; }

.wfl-reveal-btn {
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
.wfl-reveal-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.wfl-reveal-correct { font-size: 14px; font-weight: 700; color: #1C8A68; margin: 0; text-transform: capitalize; }

.wfl-wrap-icon { font-size: 40px; }

.wfl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 48px 24px; margin-top: auto; border-top: 2px solid #EAF8F6; flex-shrink: 0; }
.wfl-nav-btn {
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
.wfl-nav-btn--primary { color: #FFFFFF; background: #FF6F59; border: none; box-shadow: 0 4px 0 #D14E3B; }
.wfl-nav-btn--primary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.wfl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.wfl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.wfl-nav-dot { width: 7px; height: 7px; border-radius: 50%; background: #BFE6E1; }
.wfl-nav-dot.is-active { background: #0E6E7C; }

@media (max-width: 560px) {
  .wfl-grid { grid-template-columns: repeat(2, 1fr); }
  .wfl-explain-grid { grid-template-columns: 1fr; }
}
`;
