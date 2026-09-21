import { useState } from "react";

const LEVEL_TIER = { "A1-A2": "a1a2", "B1-B2": "b1b2", "C1-C2": "c1c2" };

// Register Rewrite: each round of a topic is its own standalone,
// fixed-size activity -- opened directly to one original/hints/rewrite,
// no Back/Next carousel between rounds (that navigation now lives one
// level up, as the numbered chips on the topic card). Own logo baked
// into the card, no outer PlayerChrome. Hints are hidden by default --
// the student can reveal them if they want help. The sample answer
// lives in RegisterRewriteGuide.jsx for the teacher, not shown here.
export default function RegisterRewriteActivity({ item, roundIndex = 0 }) {
  const rounds = item.rounds || [{ original: item.original, helpfulPhrases: item.helpfulPhrases }];
  const round = rounds[roundIndex] || rounds[0];
  const toFormal = item.direction === "toFormal";
  const tier = LEVEL_TIER[item.cefrGroup] || "a1a2";

  const [draft, setDraft] = useState("");
  const [hintsShown, setHintsShown] = useState(false);

  const wordCount = draft.trim() ? draft.trim().split(/\s+/).length : 0;

  function exit() {
    window.close();
  }

  return (
    <div className="rr2-wrap">
      <style>{CSS}</style>
      <div className="rr2-blob rr2-blob--a" />
      <div className="rr2-blob rr2-blob--b" />

      <div className="rr2-frame">
        <span className="rr2-paper-back" />
        <span className="rr2-tape" />

        <div className="rr2-card">
          <div className="rr2-bar">
            <span className="rr2-brand">
              <img src="/logo-sentenco.png" alt="" className="rr2-logo" />
              <span className="rr2-brand-word">entenco</span>
              <span className="rr2-brand-sep">·</span>
              <span className="rr2-brand-type">Register Rewrite</span>
            </span>
            <div className="rr2-bar-right">
              <span className={`rr2-level rr2-level--${tier}`}>{item.cefrGroup}</span>
              <button type="button" className="rr2-back" onClick={exit} aria-label="Close">←</button>
            </div>
          </div>

          <div className="rr2-body">
            <div className="rr2-title-row">
              <h1 className="rr2-title">{item.title}</h1>
              <div className="rr2-direction-track" data-formal={toFormal}>
                <span className="rr2-direction-tag rr2-direction-tag--from">{toFormal ? "Casual" : "Formal"}</span>
                <span className="rr2-direction-arrow">→</span>
                <span className="rr2-direction-tag rr2-direction-tag--to">{toFormal ? "Formal" : "Casual"}</span>
              </div>
            </div>

            <div className="rr2-original">
              <span className="rr2-pin" aria-hidden="true">📎</span>
              <span className="rr2-label">Original</span>
              <p className="rr2-original-text">{round.original}</p>
            </div>

            <div className="rr2-hints-row">
              <button type="button" className="rr2-hints-toggle" onClick={() => setHintsShown((v) => !v)}>
                {hintsShown ? "💡 Hide hints" : "💡 Show hints"}
              </button>
            </div>
            {hintsShown && (
              <div className="rr2-phrases">
                {round.helpfulPhrases.map((p) => (
                  <span className="rr2-chip" key={p}>{p}</span>
                ))}
              </div>
            )}

            <textarea
              className="rr2-textarea"
              placeholder="Write your rewrite here…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
          </div>

          <div className="rr2-footer">
            <span className="rr2-wordcount">{wordCount === 1 ? "1 word" : `${wordCount} words`}</span>
            <button type="button" className="rr2-done" onClick={exit}>Done ✓</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.rr2-wrap {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1cm;
  box-sizing: border-box;
  font-family: 'Karla', sans-serif;
  background: #FFF8EF;
  background-image: radial-gradient(circle at 1px 1px, rgba(169,131,111,0.12) 1px, transparent 0);
  background-size: 22px 22px;
  overflow: hidden;
}
.rr2-wrap * { box-sizing: border-box; }

.rr2-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.rr2-blob--a { width: 220px; height: 220px; top: -70px; left: -60px; background: rgba(111,207,151,0.14); }
.rr2-blob--b { width: 200px; height: 200px; bottom: -70px; right: -50px; background: rgba(255,138,117,0.12); }

.rr2-frame { position: relative; z-index: 1; width: 580px; height: 480px; flex-shrink: 0; }

.rr2-paper-back {
  position: absolute; inset: 0;
  background: #F3F9F4;
  border-radius: 22px;
  transform: rotate(1.6deg) translate(7px, 9px);
  box-shadow: 0 14px 30px rgba(47,122,80,0.12);
  z-index: 0;
}

.rr2-tape {
  position: absolute; top: -13px; left: 50%; transform: translateX(-50%) rotate(-3deg);
  width: 70px; height: 24px; z-index: 4;
  background: repeating-linear-gradient(45deg, #6FCF97, #6FCF97 6px, #A3E4BC 6px, #A3E4BC 12px);
  box-shadow: 0 3px 6px rgba(47,122,80,0.20);
}

.rr2-card {
  position: relative; z-index: 1;
  background: linear-gradient(180deg, #FFFFFF 0%, #FCFEFC 100%);
  border-radius: 20px;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.9),
    0 1px 2px rgba(47,122,80,0.10),
    0 10px 18px rgba(47,122,80,0.12),
    0 30px 54px rgba(47,122,80,0.18);
  transform: rotate(-0.6deg);
  width: 100%; height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.rr2-bar { flex: 0 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 20px 24px 0; }
.rr2-brand {
  display: flex; align-items: center; gap: 2px;
  background: rgba(76,175,122,0.14);
  border-radius: 999px;
  padding: 5px 13px 5px 5px;
}
.rr2-logo { width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; }
.rr2-brand-word { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 14px; color: #2F7A50; margin-left: 4px; }
.rr2-brand-sep { color: #2F7A50; opacity: 0.4; margin: 0 7px; font-weight: 700; }
.rr2-brand-type { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 13.5px; letter-spacing: 0.02em; color: #2F7A50; }

.rr2-bar-right { display: flex; align-items: center; gap: 8px; }
.rr2-level { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.02em; border-radius: 999px; padding: 5px 11px; }
.rr2-level--a1a2 { color: #2F7A50; background: rgba(76,175,122,0.16); }
.rr2-level--b1b2 { color: #2A6E85; background: #E1F1F6; }
.rr2-level--c1c2 { color: #B8391F; background: #FFE4DC; }
.rr2-back {
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 15px; color: #A9836F;
  background: none; border: none; cursor: pointer; padding: 6px 8px; border-radius: 999px; line-height: 1;
}
.rr2-back:hover { background: #F5EEE4; }

.rr2-body { flex: 1; min-height: 0; overflow-y: auto; padding: 14px 24px 0; display: flex; flex-direction: column; gap: 14px; }

.rr2-title-row { text-align: center; }
.rr2-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 30px; color: #4A3F3A; margin: 0 0 8px; line-height: 1.05; }

.rr2-direction-track { display: flex; align-items: center; justify-content: center; gap: 8px; }
.rr2-direction-tag {
  font-family: 'Karla', sans-serif; font-size: 11px; font-weight: 800;
  letter-spacing: 0.04em; text-transform: uppercase; border-radius: 999px; padding: 5px 12px;
}
.rr2-direction-tag--from { color: #A9836F; background: #F5EEE4; }
.rr2-direction-arrow { color: #D9C7B5; font-size: 12px; }
.rr2-direction-track[data-formal="true"] .rr2-direction-tag--to { color: #2F7A50; background: #DFF3E7; }
.rr2-direction-track[data-formal="false"] .rr2-direction-tag--to { color: #2A6E85; background: #E1F1F6; }

.rr2-original {
  position: relative;
  background: #FFFDF8; border: 1px solid #F5D9CC; border-radius: 3px 12px 12px 12px;
  padding: 16px 16px 14px 18px;
  transform: rotate(-0.8deg);
  box-shadow:
    inset 0 1px 3px rgba(169,131,111,0.08),
    0 6px 14px rgba(169,131,111,0.14),
    0 1px 0 rgba(255,255,255,0.6);
}
.rr2-original::before {
  content: ""; position: absolute; top: 10px; bottom: 10px; left: 0; width: 3px;
  border-radius: 3px; background: linear-gradient(180deg, #F0B79A, #F5D9CC);
}
.rr2-pin {
  position: absolute; top: -13px; left: 12px; font-size: 20px; line-height: 1;
  transform: rotate(-18deg); filter: drop-shadow(0 2px 2px rgba(74,63,58,0.25));
}
.rr2-label { display: block; font-size: 10.5px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #A9836F; margin-bottom: 6px; }
.rr2-original-text { font-family: 'Karla', sans-serif; font-weight: 600; font-size: 14px; color: #4A3F3A; line-height: 1.5; margin: 0; }

.rr2-hints-row { display: flex; justify-content: center; }
.rr2-hints-toggle {
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 11.5px;
  color: #2F7A50; background: rgba(76,175,122,0.14); border: none; border-radius: 999px;
  padding: 6px 14px; cursor: pointer;
}
.rr2-phrases { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; }
.rr2-chip {
  font-family: 'Karla', sans-serif; font-weight: 700; font-size: 11.5px;
  color: #2F7A50; background: #DFF3E7; border-radius: 999px; padding: 6px 12px;
}

.rr2-textarea {
  width: 100%; min-height: 100px;
  border: 1px solid #C3EEDD; border-radius: 14px; padding: 13px 14px 12px;
  font-family: 'Karla', sans-serif; font-size: 13.5px; color: #4A3F3A; line-height: 24px;
  resize: none;
  background:
    repeating-linear-gradient(to bottom, transparent 0, transparent 23px, rgba(47,122,80,0.10) 24px),
    #F2FBF6;
  box-shadow: inset 0 2px 4px rgba(47,122,80,0.06);
  transition: box-shadow 0.15s ease, border-color 0.15s ease;
}
.rr2-textarea:focus { outline: none; border-color: #4CAF7A; box-shadow: inset 0 2px 4px rgba(47,122,80,0.06), 0 0 0 3px rgba(111,207,151,0.22); }

.rr2-footer { flex: 0 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 12px 24px 22px; }
.rr2-wordcount { font-family: 'Karla', sans-serif; font-weight: 700; font-size: 11.5px; color: #A9836F; letter-spacing: 0.02em; }

.rr2-done {
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 13px;
  border: none; border-radius: 14px; padding: 11px 22px; cursor: pointer;
  color: #FFFFFF;
  background: linear-gradient(135deg, #6FCF97 0%, #2F7A50 100%);
  box-shadow: 0 4px 0 #1F5A3A;
}
.rr2-done:active { transform: translateY(3px); box-shadow: 0 1px 0 #1F5A3A; }
`;
