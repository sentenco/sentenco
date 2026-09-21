import { useState } from "react";

const LESSON = {
  title: "Eponyms",
  tagline: "Words born from real people's names.",
  items: [
    { word: "sandwich",
      correct: "John Montagu, the Earl of Sandwich, who ate meat between bread while gambling",
      wrong: ["A baker named Sandwich who invented sliced bread", "A town called Sandwich famous for its markets"],
      story: "In the 1760s, the Earl of Sandwich reportedly asked for meat served between slices of bread so he wouldn't have to leave the gambling table to eat. The snack was named after him.",
      example: "She grabbed a chicken sandwich for lunch." },
    { word: "boycott",
      correct: "Charles Boycott, a land agent shunned by his Irish neighbors",
      wrong: ["A French word meaning “to refuse”", "A protest leader named Boycott who organized strikes"],
      story: "In 1880, Irish tenants refused to work for or deal with land agent Charles Boycott over unfair rent practices. His name became the word for that kind of organized refusal.",
      example: "Customers began to boycott the store after the scandal." },
    { word: "cardigan",
      correct: "The Earl of Cardigan, who wore the knitted jacket during battle",
      wrong: ["A Scottish town famous for wool", "A tailor named Cardigan who designed the first sweater"],
      story: "The Earl of Cardigan led the Charge of the Light Brigade wearing a knitted wool waistcoat. The garment style was named after him and is still called a cardigan today.",
      example: "He wore a gray cardigan over his shirt." },
    { word: "silhouette",
      correct: "Étienne de Silhouette, a finance minister known for being cheap",
      wrong: ["A famous French portrait painter", "The word for “shadow” in old French"],
      story: "Étienne de Silhouette was a French finance minister known for his stinginess. Cheap black-outline portraits, popular at the time, were mockingly named “à la Silhouette” after him.",
      example: "You could see her silhouette against the window." },
    { word: "nicotine",
      correct: "Jean Nicot, who introduced tobacco to the French court",
      wrong: ["A chemist who discovered the tobacco plant", "A Latin word meaning “smoke”"],
      story: "Jean Nicot was a French diplomat who sent tobacco seeds to the French court in the 1560s, praising their medicinal value. The plant's addictive compound was later named after him.",
      example: "Nicotine is the addictive substance found in cigarettes." },
    { word: "mentor",
      correct: "Mentor, the wise advisor character in Homer's Odyssey",
      wrong: ["A famous Greek teacher of philosophy", "The Latin word for “guide”"],
      story: "In Homer's Odyssey, Mentor was the trusted friend who guided and advised Odysseus's son. The name became the general word for a wise, trusted advisor.",
      example: "Her mentor helped her plan her career path." },
    { word: "guillotine",
      correct: "Joseph-Ignace Guillotin, who proposed a more humane execution method",
      wrong: ["The engineer who built the first execution device", "A French word meaning “blade”"],
      story: "Dr. Joseph-Ignace Guillotin proposed the device during the French Revolution as a quicker, more humane method of execution than existing ones. It was later named after him.",
      example: "The guillotine became a symbol of the French Revolution." },
    { word: "saxophone",
      correct: "Adolphe Sax, the instrument maker who invented it",
      wrong: ["A jazz musician who made it famous", "The Greek word for “brass horn”"],
      story: "Belgian instrument maker Adolphe Sax patented the instrument in 1846, combining features of woodwind and brass instruments. It was named after him.",
      example: "He plays the saxophone in a jazz band." },
    { word: "leotard",
      correct: "Jules Léotard, the acrobat who popularized the garment",
      wrong: ["A ballet company that designed the uniform", "The French word for “tight clothing”"],
      story: "Jules Léotard was a French acrobat who designed and wore a one-piece garment that let him move freely on the trapeze. The clothing was later named after him.",
      example: "The gymnast wore a bright red leotard." },
    { word: "diesel",
      correct: "Rudolf Diesel, the engineer who invented the engine",
      wrong: ["A German word meaning “fuel”", "A company that first sold the fuel"],
      story: "German engineer Rudolf Diesel patented a new type of combustion engine in 1893, designed to be more efficient than the steam engine. Both the engine and fuel now carry his name.",
      example: "The truck runs on diesel, not regular gasoline." },
  ],
  guided: [
    { prompt: "This word for a knitted sweater comes from a British Earl.", answer: "cardigan" },
    { prompt: "This device for executions is named after the doctor who proposed it.", answer: "guillotine" },
    { prompt: "This word for a wise advisor comes from a character in Greek mythology.", answer: "mentor" },
    { prompt: "This chemical in tobacco is named after the French diplomat who brought it to France.", answer: "nicotine" },
    { prompt: "This musical instrument is named after its Belgian inventor.", answer: "saxophone" },
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
  return <span className="epl-stage-label">{stage.label}</span>;
}

function CoverSlide() {
  return (
    <div className="epl-slide epl-slide--cover">
      <span className="epl-kind-badge">Vocabulary Lesson</span>
      <h1 className="epl-cover-title">{LESSON.title}</h1>
      <p className="epl-tagline">{LESSON.tagline}</p>
    </div>
  );
}

function PredictSlide({ index }) {
  const item = LESSON.items[index];
  const [picked, setPicked] = useState(null);
  const [options] = useState(() => shuffled([item.correct, ...item.wrong]));

  return (
    <div className="epl-slide">
      <h2 className="epl-h">Guess the Origin</h2>
      <p className="epl-word">{item.word}</p>
      <div className="epl-options">
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
              className={`epl-option ${state}`}
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
    <div className="epl-slide">
      <h2 className="epl-h">Word {index + 1} of {LESSON.items.length}</h2>
      <div className="epl-card">
        <p className="epl-card-word">{item.word}</p>
        <p className="epl-story">{item.story}</p>
        <p className="epl-example">“{item.example}”</p>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="epl-quiz-item">
      <p className="epl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="epl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="epl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ index }) {
  const chunk = LESSON.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(LESSON.guided.length / 3);
  return (
    <div className="epl-slide epl-slide--part">
      <h2 className="epl-h">Guided Practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h2>
      <div className="epl-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function WrapupSlide() {
  return (
    <div className="epl-slide">
      <span className="epl-wrap-icon">🏷️</span>
      <h2 className="epl-h">Lesson Complete</h2>
      <h1 className="epl-cover-title epl-cover-title--small">10 Names Behind the Words!</h1>
      <p className="epl-tagline">You traced 10 everyday words back to the real people they're named after. Language remembers people in strange ways.</p>
      <button type="button" className="epl-nav-btn epl-nav-btn--primary" onClick={() => window.close()}>Close ✕</button>
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

export default function EponymsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const slideTypes = buildSlides();
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="epl-shell">
      <style>{CSS}</style>

      <div className="epl-stage">
        <div className="epl-deck">
          <div className="epl-deck-header">
            <span className="epl-brand"><img src="/logo-sentenco.png" alt="" className="epl-brand-logo" />entenco</span>
            <StageLabel slideType={slideType} />
          </div>
          <div className="epl-deck-body" key={slideIdx}>
            {renderSlide(slideType)}
          </div>
          <div className="epl-nav-row">
            <button type="button" className="epl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="epl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`epl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="epl-nav-btn epl-nav-btn--primary"
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

.epl-shell {
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
.epl-shell * { box-sizing: border-box; }

.epl-brand { display: flex; align-items: center; flex-shrink: 0; font-family: 'Grandstander', cursive; font-weight: 700; font-size: 18px; color: #123B40; }
.epl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }

.epl-stage-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4F8B90;
  white-space: nowrap;
  flex-shrink: 0;
}

.epl-stage { flex: 1; width: 100%; max-width: 1120px; padding: 16px 24px 20px; display: flex; flex-direction: column; min-height: 0; }

.epl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 20px 0 rgba(14,110,124,0.08);
  min-height: 0;
  overflow: hidden;
}

.epl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #D6F1EC;
  flex-shrink: 0;
}

.epl-deck-body {
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

.epl-slide { display: flex; flex-direction: column; align-items: center; gap: 18px; width: 100%; }
.epl-slide--cover { gap: 14px; }
.epl-slide--part { justify-content: flex-start; }

.epl-kind-badge {
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
.epl-cover-title {
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
.epl-cover-title--small { font-size: clamp(24px, 3.4vw, 32px); margin-top: 0; }
.epl-tagline { font-size: 15px; font-weight: 700; color: #4F8B90; max-width: 480px; margin: 0; }

.epl-h {
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

.epl-word {
  font-family: 'Grandstander', cursive;
  font-weight: 800;
  font-size: clamp(40px, 6.4vw, 58px);
  color: #123B40;
  text-transform: capitalize;
  margin: 0;
}

.epl-options { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 560px; }
.epl-option {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: clamp(14px, 2vw, 15.5px);
  color: #123B40;
  background: rgba(14,110,124,0.10);
  border: 3px solid transparent;
  border-radius: 16px;
  padding: 14px 20px;
  cursor: pointer;
  line-height: 1.4;
  text-align: left;
}
.epl-option:hover:not(:disabled) { transform: translateY(-2px); }
.epl-option:disabled { cursor: default; }
.epl-option.is-correct { background: #E4F8EC; border-color: #4CBE7F; color: #1F7A47; }
.epl-option.is-incorrect { background: #FDEAEA; border-color: #E5645A; color: #B3392F; }

.epl-card { background: #EAF8F6; border-radius: 20px; padding: 24px 28px; max-width: 560px; display: flex; flex-direction: column; gap: 10px; }
.epl-card-word { font-family: 'Grandstander', cursive; font-weight: 800; font-size: 28px; color: #123B40; margin: 0; text-transform: capitalize; }
.epl-story { font-size: 13.5px; font-weight: 700; color: #123B40; margin: 0; line-height: 1.6; text-align: left; }
.epl-example { font-size: 13px; font-weight: 600; font-style: italic; color: #4F8B90; margin: 0; line-height: 1.5; }

.epl-quiz-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 760px; text-align: left; }
.epl-quiz-item { background: #EAF8F6; border-radius: 16px; padding: 14px 18px; display: flex; flex-direction: column; gap: 10px; }
.epl-quiz-q { font-size: 15px; font-weight: 700; color: #123B40; margin: 0; }

.epl-reveal-btn {
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
.epl-reveal-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.epl-reveal-correct { font-size: 14px; font-weight: 700; color: #1C8A68; margin: 0; text-transform: capitalize; }

.epl-wrap-icon { font-size: 40px; }

.epl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 48px 24px; margin-top: auto; border-top: 2px solid #EAF8F6; flex-shrink: 0; }
.epl-nav-btn {
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
.epl-nav-btn--primary { color: #FFFFFF; background: #FF6F59; border: none; box-shadow: 0 4px 0 #D14E3B; }
.epl-nav-btn--primary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #D14E3B; }
.epl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.epl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.epl-nav-dot { width: 7px; height: 7px; border-radius: 50%; background: #BFE6E1; }
.epl-nav-dot.is-active { background: #0E6E7C; }
`;
