import { useMemo, useState } from "react";

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Ocean Dive accent per game hue -- Synonyms (coral) and Antonyms (teal)
// share this one engine, so the accent is a prop, not a fixed class.
const HUES = {
  coral: { accent: "#E85A3D", accentDark: "#B8391F", tint: "rgba(232,90,61,0.10)", border: "#FFD9CC" },
  teal: { accent: "#0E6E7C", accentDark: "#0A4F59", tint: "rgba(14,110,124,0.10)", border: "#BFE6E1" },
};

// Generic one-on-one "pick the matching word" quiz engine. Data-driven --
// pass a title, instruction line, and a data set shaped like
// [{ word, choices: [4], correct }]. Used for Synonyms, Antonyms, and any
// future word-choice game under Vocabulary.
export default function WordChoiceGame({ title, instruction, data, hue = "coral" }) {
  const c = HUES[hue] || HUES.coral;
  const [phase, setPhase] = useState("start"); // "start" | "playing" | "done"
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [runOrder, setRunOrder] = useState(data);

  const n = runOrder.length;
  const q = runOrder[index];
  const choiceOrder = useMemo(() => (q ? shuffled(q.choices) : []), [q]);

  function start() {
    setRunOrder(shuffled(data));
    setIndex(0);
    setScore(0);
    setSelected(null);
    setPhase("playing");
  }

  function pick(choice) {
    if (selected) return;
    setSelected(choice);
    if (choice === q.correct) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= n) {
      setPhase("done");
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  return (
    <div className="syn-shell" style={{ "--acc": c.accent, "--acc-dark": c.accentDark, "--acc-tint": c.tint, "--acc-border": c.border }}>
      <style>{CSS}</style>

      {phase === "start" && (
        <div className="syn-card syn-start">
          <span className="syn-eyebrow">Sentenco · Vocabulary</span>
          <h1 className="syn-title">{title}</h1>
          <p className="syn-blurb">{instruction} 10 questions, one at a time.</p>
          <button type="button" className="syn-btn syn-btn--primary" onClick={start}>Start ▶</button>
        </div>
      )}

      {phase === "playing" && q && (
        <div className="syn-card syn-play">
          <div className="syn-bar">
            <span className="syn-progress">Question {index + 1} of {n}</span>
            <span className="syn-score">Score {score}</span>
          </div>

          <p className="syn-instruction">{instruction}</p>
          <h2 className="syn-word">{q.word}</h2>

          <div className="syn-choices">
            {choiceOrder.map((choice) => {
              const isSelected = selected === choice;
              const isCorrectChoice = choice === q.correct;
              let state = "";
              if (selected) {
                if (isCorrectChoice) state = "is-correct";
                else if (isSelected) state = "is-incorrect";
              }
              return (
                <button
                  key={choice}
                  type="button"
                  className={`syn-choice ${state}`}
                  onClick={() => pick(choice)}
                  disabled={!!selected}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="syn-footer">
              <span className={`syn-feedback ${selected === q.correct ? "is-correct" : "is-incorrect"}`}>
                {selected === q.correct ? "Correct! 🎉" : `Not quite — the answer is "${q.correct}".`}
              </span>
              <button type="button" className="syn-btn syn-btn--primary" onClick={next}>
                {index + 1 >= n ? "See score →" : "Next →"}
              </button>
            </div>
          )}
        </div>
      )}

      {phase === "done" && (
        <div className="syn-card syn-done">
          <span className="syn-eyebrow">Sentenco · Vocabulary</span>
          <div className="syn-done-emoji">{score === n ? "🏆" : score >= n * 0.7 ? "🎉" : score >= n * 0.4 ? "👍" : "💪"}</div>
          <h1 className="syn-title">{score} / {n}</h1>
          <p className="syn-blurb">
            {score === n ? "Perfect score!" : score >= n * 0.7 ? "Great job!" : score >= n * 0.4 ? "Nice work — keep practicing." : "Good try — play again to improve."}
          </p>
          <button type="button" className="syn-btn syn-btn--primary" onClick={start}>Play Again ↻</button>
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@600;700;800&family=Mulish:wght@500;600;700;800&display=swap');

.syn-shell {
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
.syn-shell * { box-sizing: border-box; }

.syn-card {
  width: 100%;
  max-width: 560px;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 20px 0 rgba(14,110,124,0.1);
  padding: clamp(32px, 6vw, 52px);
  text-align: center;
}

.syn-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--acc, #0E6E7C);
  background: var(--acc-tint, rgba(14,110,124,0.10));
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 20px;
}

.syn-title { font-family: 'Grandstander', cursive; font-weight: 700; font-size: clamp(28px, 4.4vw, 40px); line-height: 1.3; color: #123B40; margin: 0 0 16px; }
.syn-blurb { font-size: 14.5px; line-height: 1.7; color: #4F8B90; font-weight: 600; max-width: 400px; margin: 0 auto 32px; }

.syn-btn {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 14px;
  padding: 13px 28px;
  cursor: pointer;
}
.syn-btn--primary {
  color: #FFFFFF;
  background: var(--acc, #E85A3D);
  box-shadow: 0 6px 0 var(--acc-dark, #B8391F);
}
.syn-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 var(--acc-dark, #B8391F); }

.syn-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 26px; }
.syn-progress { font-size: 11.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #6B9EA1; }
.syn-score { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 13px; color: var(--acc, #0E6E7C); background: var(--acc-tint, rgba(14,110,124,0.10)); padding: 5px 12px; border-radius: 999px; }

.syn-instruction { font-size: 12.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #8FB9BC; margin: 0 0 12px; }
.syn-word { font-family: 'Grandstander', cursive; font-weight: 700; font-size: clamp(32px, 5.6vw, 48px); line-height: 1.25; color: #123B40; margin: 0 0 32px; text-transform: capitalize; }

.syn-choices { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.syn-choice {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  color: #123B40;
  text-transform: capitalize;
  background: var(--acc-tint, rgba(14,110,124,0.10));
  border: 2px solid var(--acc-border, #BFE6E1);
  border-radius: 14px;
  padding: 20px 16px;
  cursor: pointer;
  transition: transform 0.1s ease, background 0.15s ease, border-color 0.15s ease;
}
.syn-choice:hover:not(:disabled) { transform: translateY(-2px); }
.syn-choice:disabled { cursor: default; }
.syn-choice.is-correct { background: #E4F8EC; border-color: #4CBE7F; color: #1F7A47; }
.syn-choice.is-incorrect { background: #FDEAEA; border-color: #E5645A; color: #B3392F; }

.syn-footer { margin-top: 30px; display: flex; flex-direction: column; align-items: center; gap: 18px; }
.syn-feedback { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 15px; line-height: 1.5; }
.syn-feedback.is-correct { color: #1F7A47; }
.syn-feedback.is-incorrect { color: #B3392F; }

.syn-done-emoji { font-size: 48px; margin-bottom: 10px; }

@media (max-width: 480px) {
  .syn-choices { grid-template-columns: 1fr; }
}
`;
