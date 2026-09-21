import { useMemo, useState } from "react";

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const FOLLOW_UPS = [
  "Make a sentence with this word.",
  "Name one more word in this category.",
  "Why does it belong there?",
];

// Word Sort: tap the word into the correct of 2 category boxes.
// Pack shape: { title, categoryA, categoryB, items: [{ word, category }] }
export default function WordSortGame({ title, categoryA, categoryB, items }) {
  const [phase, setPhase] = useState("start"); // "start" | "playing" | "done"
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);
  const [runOrder, setRunOrder] = useState(items);
  const [followUp, setFollowUp] = useState(null);

  const n = runOrder.length;
  const item = runOrder[index];

  function start() {
    setRunOrder(shuffled(items));
    setIndex(0);
    setScore(0);
    setPicked(null);
    setFollowUp(null);
    setPhase("playing");
  }

  function pick(category) {
    if (picked) return;
    setPicked(category);
    const isCorrect = category === item.category;
    if (isCorrect) {
      setScore((s) => s + 1);
      setFollowUp(FOLLOW_UPS[Math.floor(Math.random() * FOLLOW_UPS.length)]);
    } else {
      setFollowUp(null);
    }
  }

  function next() {
    if (index + 1 >= n) {
      setPhase("done");
    } else {
      setIndex((i) => i + 1);
      setPicked(null);
      setFollowUp(null);
    }
  }

  return (
    <div className="ws-shell">
      <style>{CSS}</style>

      {phase === "start" && (
        <div className="ws-card ws-start">
          <span className="ws-eyebrow">Sentenco · Vocabulary</span>
          <h1 className="ws-title">{title}</h1>
          <p className="ws-blurb">Sort each word into the right category. 10 words, one at a time.</p>
          <button type="button" className="ws-btn ws-btn--primary" onClick={start}>Start ▶</button>
        </div>
      )}

      {phase === "playing" && item && (
        <div className="ws-card ws-play">
          <div className="ws-bar">
            <span className="ws-progress">Word {index + 1} of {n}</span>
            <span className="ws-score">Score {score}</span>
          </div>

          <h2 className="ws-word">{item.word}</h2>

          <div className="ws-boxes">
            {[categoryA, categoryB].map((cat) => {
              const isPicked = picked === cat;
              const isCorrectBox = cat === item.category;
              let state = "";
              if (picked) {
                if (isCorrectBox) state = "is-correct";
                else if (isPicked) state = "is-incorrect";
              }
              return (
                <button
                  key={cat}
                  type="button"
                  className={`ws-box ${state}`}
                  onClick={() => pick(cat)}
                  disabled={!!picked}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {picked && (
            <div className="ws-footer">
              <span className={`ws-feedback ${picked === item.category ? "is-correct" : "is-incorrect"}`}>
                {picked === item.category ? "Correct! 🎉" : `Not quite — "${item.word}" belongs in ${item.category}.`}
              </span>
              {followUp && <span className="ws-followup">💬 {followUp}</span>}
              <button type="button" className="ws-btn ws-btn--primary" onClick={next}>
                {index + 1 >= n ? "See score →" : "Next →"}
              </button>
            </div>
          )}
        </div>
      )}

      {phase === "done" && (
        <div className="ws-card ws-done">
          <span className="ws-eyebrow">Sentenco · Vocabulary</span>
          <div className="ws-done-emoji">{score === n ? "🏆" : score >= n * 0.7 ? "🎉" : score >= n * 0.4 ? "👍" : "💪"}</div>
          <h1 className="ws-title">{score} / {n}</h1>
          <p className="ws-blurb">
            {score === n ? "Perfect score!" : score >= n * 0.7 ? "Great job!" : score >= n * 0.4 ? "Nice work — keep practicing." : "Good try — play again to improve."}
          </p>
          <button type="button" className="ws-btn ws-btn--primary" onClick={start}>Play Again ↻</button>
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@600;700;800&family=Mulish:wght@500;600;700;800&display=swap');

.ws-shell {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 3vw, 32px);
  font-family: 'Mulish', sans-serif;
  background: linear-gradient(180deg, #EAF8F6 0%, #D6F1EC 100%);
}
.ws-shell * { box-sizing: border-box; }

.ws-card {
  width: 100%;
  max-width: 560px;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 20px 0 rgba(20,107,78,0.1);
  padding: clamp(32px, 6vw, 52px);
  text-align: center;
}

.ws-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #1C8A68;
  background: rgba(28,138,104,0.12);
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 20px;
}

.ws-title { font-family: 'Grandstander', cursive; font-weight: 700; font-size: clamp(28px, 4.4vw, 40px); line-height: 1.3; color: #123B40; margin: 0 0 16px; }
.ws-blurb { font-size: 14.5px; line-height: 1.7; color: #4F8B90; font-weight: 600; max-width: 400px; margin: 0 auto 32px; }

.ws-btn {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 14px;
  padding: 13px 28px;
  cursor: pointer;
}
.ws-btn--primary {
  color: #FFFFFF;
  background: #1C8A68;
  box-shadow: 0 6px 0 #146B4E;
}
.ws-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #146B4E; }

.ws-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 26px; }
.ws-progress { font-size: 11.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #6B9EA1; }
.ws-score { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 13px; color: #1C8A68; background: rgba(28,138,104,0.12); padding: 5px 12px; border-radius: 999px; }

.ws-word { font-family: 'Grandstander', cursive; font-weight: 700; font-size: clamp(32px, 5.6vw, 48px); line-height: 1.25; color: #123B40; margin: 0 0 32px; text-transform: capitalize; }

.ws-boxes { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.ws-box {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 19px;
  line-height: 1.4;
  color: #123B40;
  background: #E3F6EC;
  border: 2px dashed #7FD9B6;
  border-radius: 16px;
  padding: 32px 16px;
  cursor: pointer;
  transition: transform 0.1s ease, background 0.15s ease, border-color 0.15s ease;
}
.ws-box:hover:not(:disabled) { background: #D3F0E0; transform: translateY(-2px); }
.ws-box:disabled { cursor: default; }
.ws-box.is-correct { background: #E4F8EC; border-color: #4CBE7F; border-style: solid; color: #1F7A47; }
.ws-box.is-incorrect { background: #FDEAEA; border-color: #E5645A; border-style: solid; color: #B3392F; }

.ws-footer { margin-top: 30px; display: flex; flex-direction: column; align-items: center; gap: 16px; }
.ws-feedback { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 15px; line-height: 1.5; }
.ws-feedback.is-correct { color: #1F7A47; }
.ws-feedback.is-incorrect { color: #B3392F; }
.ws-followup { font-size: 13px; line-height: 1.6; color: #4F8B90; font-weight: 600; background: #FFF3D9; border-radius: 12px; padding: 10px 16px; max-width: 380px; }

.ws-done-emoji { font-size: 48px; margin-bottom: 10px; }

@media (max-width: 480px) {
  .ws-boxes { grid-template-columns: 1fr; }
}
`;
