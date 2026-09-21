import { useState } from "react";

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const FOLLOW_UPS = [
  "Why is it the odd one out?",
  "What do the other three words have in common?",
  "Make a sentence with one of the other words.",
];

// Odd One Out: tap the 1 word (of 4) that doesn't belong.
// Item shape: { words: [4], odd }
export default function OddOneOutGame({ title, items }) {
  const [phase, setPhase] = useState("start"); // "start" | "playing" | "done"
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);
  const [runOrder, setRunOrder] = useState(items);
  const [followUp, setFollowUp] = useState(null);
  const [options, setOptions] = useState([]);

  const n = runOrder.length;
  const item = runOrder[index];

  function start() {
    const order = shuffled(items);
    setRunOrder(order);
    setIndex(0);
    setScore(0);
    setPicked(null);
    setFollowUp(null);
    setOptions(shuffled(order[0].words));
    setPhase("playing");
  }

  function pick(word) {
    if (picked) return;
    setPicked(word);
    if (word === item.odd) {
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
      const nextIndex = index + 1;
      setIndex(nextIndex);
      setPicked(null);
      setFollowUp(null);
      setOptions(shuffled(runOrder[nextIndex].words));
    }
  }

  return (
    <div className="oo-shell">
      <style>{CSS}</style>

      {phase === "start" && (
        <div className="oo-card oo-start">
          <span className="oo-eyebrow">Sentenco · Vocabulary</span>
          <h1 className="oo-title">{title}</h1>
          <p className="oo-blurb">Tap the word that doesn't belong. {items.length} rounds, one at a time.</p>
          <button type="button" className="oo-btn oo-btn--primary" onClick={start}>Start ▶</button>
        </div>
      )}

      {phase === "playing" && item && (
        <div className="oo-card oo-play">
          <div className="oo-bar">
            <span className="oo-progress">Round {index + 1} of {n}</span>
            <span className="oo-score">Score {score}</span>
          </div>

          <p className="oo-instruction">Which word doesn't belong?</p>

          <div className="oo-tiles">
            {options.map((word) => {
              const isPicked = picked === word;
              const isOdd = word === item.odd;
              let state = "";
              if (picked) {
                if (isOdd) state = "is-correct";
                else if (isPicked) state = "is-incorrect";
              }
              return (
                <button
                  key={word}
                  type="button"
                  className={`oo-tile ${state}`}
                  onClick={() => pick(word)}
                  disabled={!!picked}
                >
                  {word}
                </button>
              );
            })}
          </div>

          {picked && (
            <div className="oo-footer">
              <span className={`oo-feedback ${picked === item.odd ? "is-correct" : "is-incorrect"}`}>
                {picked === item.odd ? "Correct! 🎉" : `Not quite — "${item.odd}" is the odd one out.`}
              </span>
              {item.explanation && <span className="oo-explanation">{item.explanation}</span>}
              {followUp && <span className="oo-followup">💬 {followUp}</span>}
              <button type="button" className="oo-btn oo-btn--primary" onClick={next}>
                {index + 1 >= n ? "See score →" : "Next →"}
              </button>
            </div>
          )}
        </div>
      )}

      {phase === "done" && (
        <div className="oo-card oo-done">
          <span className="oo-eyebrow">Sentenco · Vocabulary</span>
          <div className="oo-done-emoji">{score === n ? "🏆" : score >= n * 0.7 ? "🎉" : score >= n * 0.4 ? "👍" : "💪"}</div>
          <h1 className="oo-title">{score} / {n}</h1>
          <p className="oo-blurb">
            {score === n ? "Perfect score!" : score >= n * 0.7 ? "Great job!" : score >= n * 0.4 ? "Nice work — keep practicing." : "Good try — play again to improve."}
          </p>
          <button type="button" className="oo-btn oo-btn--primary" onClick={start}>Play Again ↻</button>
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@600;700;800&family=Mulish:wght@500;600;700;800&display=swap');

.oo-shell {
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
.oo-shell * { box-sizing: border-box; }

.oo-card {
  width: 100%;
  max-width: 560px;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 20px 0 rgba(154,90,22,0.1);
  padding: clamp(32px, 6vw, 52px);
  text-align: center;
}

.oo-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #A9720A;
  background: rgba(255,203,76,0.24);
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 20px;
}

.oo-title { font-family: 'Grandstander', cursive; font-weight: 700; font-size: clamp(28px, 4.4vw, 40px); line-height: 1.3; color: #123B40; margin: 0 0 16px; }
.oo-blurb { font-size: 14.5px; line-height: 1.7; color: #4F8B90; font-weight: 600; max-width: 400px; margin: 0 auto 32px; }

.oo-btn {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 14px;
  padding: 13px 28px;
  cursor: pointer;
}
.oo-btn--primary {
  color: #FFFFFF;
  background: #E8A81A;
  box-shadow: 0 6px 0 #A9720A;
}
.oo-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #A9720A; }

.oo-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 26px; }
.oo-progress { font-size: 11.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #6B9EA1; }
.oo-score { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 13px; color: #A9720A; background: rgba(255,203,76,0.24); padding: 5px 12px; border-radius: 999px; }

.oo-instruction { font-size: 12.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #8FB9BC; margin: 0 0 24px; }

.oo-tiles { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.oo-tile {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  color: #123B40;
  text-transform: capitalize;
  background: #FFF3D9;
  border: 2px solid #FCE4B0;
  border-radius: 14px;
  padding: 20px 16px;
  cursor: pointer;
  transition: transform 0.1s ease, background 0.15s ease, border-color 0.15s ease;
}
.oo-tile:hover:not(:disabled) { background: #FCE9BE; transform: translateY(-2px); }
.oo-tile:disabled { cursor: default; }
.oo-tile.is-correct { background: #E4F8EC; border-color: #4CBE7F; color: #1F7A47; }
.oo-tile.is-incorrect { background: #FDEAEA; border-color: #E5645A; color: #B3392F; }

.oo-footer { margin-top: 30px; display: flex; flex-direction: column; align-items: center; gap: 16px; }
.oo-feedback { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 15px; line-height: 1.5; }
.oo-feedback.is-correct { color: #1F7A47; }
.oo-feedback.is-incorrect { color: #B3392F; }
.oo-explanation { font-size: 13px; line-height: 1.6; color: #8A6B2E; font-style: italic; max-width: 400px; }
.oo-followup { font-size: 13px; line-height: 1.6; color: #4F8B90; font-weight: 600; background: #EAF8F6; border-radius: 12px; padding: 10px 16px; max-width: 380px; }

.oo-done-emoji { font-size: 48px; margin-bottom: 10px; }

@media (max-width: 480px) {
  .oo-tiles { grid-template-columns: 1fr; }
}
`;
