import { useState } from "react";

const STEPS = ["intro", "warmup", "fixIt", "wrapup"];
const LABELS = { intro: "Instructions", warmup: "Warm-Up", fixIt: "Fix the Mistakes", wrapup: "Great Job!" };
const LEVEL_TIER = { "A1-A2": "a1a2", "B1-B2": "b1b2", "C1-C2": "c1c2" };

// Proofreading: a fixed-size, self-contained lesson card (matching the
// site-wide lesson-player convention -- own logo baked into the card, no
// outer PlayerChrome). 4 pages: title/instructions, warm-up talk, the
// flawed paragraph with a plain textarea for the student's rewrite, then
// a closing Great Job page. No in-player answer reveal -- the corrected
// version lives in ProofreadingGuide.jsx for the teacher. No close (X)
// button -- the only way out is finishing the last page.
export default function ProofreadingActivity({ item }) {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState("");
  const kind = STEPS[step];
  const tier = LEVEL_TIER[item.cefrGroup] || "a1a2";
  const wordCount = draft.trim() ? draft.trim().split(/\s+/).length : 0;

  function exit() {
    window.close();
  }

  function go(delta) {
    setStep((s) => Math.max(0, Math.min(STEPS.length - 1, s + delta)));
  }

  return (
    <div className="pf-wrap">
      <style>{CSS}</style>
      <div className="pf-blob pf-blob--a" />
      <div className="pf-blob pf-blob--b" />

      <div className="pf-frame">
        <span className="pf-paper-back" />
        <span className="pf-tape" />

        <div className="pf-card">
          <div className="pf-bar">
            <span className="pf-brand">
              <img src="/logo-sentenco.png" alt="" className="pf-logo" />
              <span className="pf-brand-word">entenco</span>
            </span>
            <div className="pf-bar-right">
              <span className={`pf-level pf-level--${tier}`}>{item.cefrGroup}</span>
              <span className="pf-eyebrow">{LABELS[kind]}</span>
            </div>
          </div>

          <div className="pf-body">
            {kind === "intro" && (
              <div className="pf-intro">
                <h1 className="pf-title">{item.title}</h1>
                <span className="pf-focus-tag">{item.focus}</span>
                <p className="pf-instructions">
                  Read the paragraph on the next page. It has some mistakes in it.
                  Find them, then rewrite the whole paragraph correctly in the box.
                </p>
              </div>
            )}

            {kind === "warmup" && (
              <div className="pf-intro">
                <span className="pf-stage-label">Warm-Up</span>
                <p className="pf-text">{item.warmup}</p>
              </div>
            )}

            {kind === "fixIt" && (
              <div className="pf-fixit">
                <p className="pf-hint">Read the text below, then rewrite it correctly in the box.</p>
                <div className="pf-script-wrap">
                  <span className="pf-pin" aria-hidden="true">📎</span>
                  <p className="pf-script pf-script--mistakes">{item.mistakes}</p>
                </div>

                <textarea
                  className="pf-textarea"
                  placeholder="Type the corrected version here…"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                />
                <span className="pf-wordcount">{wordCount === 1 ? "1 word" : `${wordCount} words`}</span>
              </div>
            )}

            {kind === "wrapup" && (
              <div className="pf-intro">
                <span className="pf-star">★</span>
                <h2 className="pf-wrapup-title">Great Job!</h2>
                <p className="pf-text">Thanks for practicing your writing today. See you next time!</p>
              </div>
            )}
          </div>

          <div className="pf-nav">
            <button type="button" className="pf-btn" onClick={() => go(-1)} disabled={step === 0}>← Back</button>
            <div className="pf-dots">
              {STEPS.map((s, i) => (
                <span key={s} className={`pf-dot ${i === step ? "is-active" : i < step ? "is-done" : ""}`} />
              ))}
            </div>
            {step + 1 < STEPS.length ? (
              <button type="button" className="pf-btn pf-btn--primary" onClick={() => go(1)}>Next →</button>
            ) : (
              <button type="button" className="pf-btn pf-btn--primary" onClick={exit}>Finish ✓</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.pf-wrap {
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
.pf-wrap * { box-sizing: border-box; }

.pf-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.pf-blob--a { width: 220px; height: 220px; top: -70px; left: -60px; background: rgba(232,168,61,0.14); }
.pf-blob--b { width: 200px; height: 200px; bottom: -70px; right: -50px; background: rgba(111,207,151,0.12); }

.pf-frame {
  position: relative;
  z-index: 1;
  width: 560px;
  height: 460px;
  flex-shrink: 0;
}

.pf-paper-back {
  position: absolute;
  inset: 0;
  background: #FBEFDD;
  border-radius: 20px;
  transform: rotate(2.2deg) translate(7px, 9px);
  box-shadow: 0 14px 30px rgba(169,114,10,0.12);
  z-index: 0;
}

.pf-tape {
  position: absolute; top: -13px; left: 50%; transform: translateX(-50%) rotate(-3deg);
  width: 70px; height: 24px; opacity: 0.92; z-index: 3;
  background: repeating-linear-gradient(45deg, #FFD166, #FFD166 6px, #FFE29E 6px, #FFE29E 12px);
  box-shadow: 0 3px 6px rgba(169,114,10,0.18);
}

.pf-card {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFCF6 100%);
  border-radius: 20px;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.9),
    0 1px 2px rgba(169,114,10,0.10),
    0 10px 18px rgba(169,114,10,0.12),
    0 30px 54px rgba(169,114,10,0.18);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: rotate(-0.6deg);
}

.pf-bar {
  flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 24px 0;
}
.pf-brand {
  display: flex; align-items: center; gap: 2px;
  background: rgba(232,168,61,0.16);
  border-radius: 999px;
  padding: 5px 13px 5px 5px;
}
.pf-logo { width: 22px; height: 22px; border-radius: 50%; }
.pf-brand-word { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 14px; color: #A9720A; }
.pf-bar-right { display: flex; align-items: center; gap: 8px; }
.pf-level { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.02em; border-radius: 999px; padding: 5px 11px; }
.pf-level--a1a2 { color: #2F7A50; background: rgba(76,175,122,0.16); }
.pf-level--b1b2 { color: #2A6E85; background: #E1F1F6; }
.pf-level--c1c2 { color: #B8391F; background: #FFE4DC; }
.pf-eyebrow {
  font-family: 'Karla', sans-serif; font-size: 11px; font-weight: 800;
  letter-spacing: 0.12em; text-transform: uppercase; color: #A9720A;
  background: rgba(232,168,61,0.16); border-radius: 999px; padding: 6px 14px;
}

.pf-body { flex: 1; min-height: 0; overflow-y: auto; padding: 14px 36px; display: flex; align-items: center; }

.pf-intro { width: 100%; text-align: center; }
.pf-focus-tag {
  display: inline-block; font-size: 11.5px; font-weight: 700; color: #A9720A;
  background: rgba(232,168,61,0.16); border-radius: 999px; padding: 5px 14px; margin-top: 10px; margin-bottom: 14px;
}
.pf-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 36px; color: #4A3F3A; margin: 0; line-height: 1.05; }
.pf-instructions { font-family: 'Karla', sans-serif; font-weight: 600; font-size: 14px; color: #6B5D52; line-height: 1.55; max-width: 400px; margin: 0 auto; }

.pf-stage-label {
  display: block; font-family: 'Caveat', cursive; font-weight: 700; font-size: 30px; color: #4A3F3A; margin-bottom: 14px;
}
.pf-text { font-family: 'Karla', sans-serif; font-weight: 600; font-size: 15.5px; color: #4A3F3A; line-height: 1.6; max-width: 400px; margin: 0 auto; }

.pf-star { display: inline-block; font-size: 34px; color: #E8A83D; margin-bottom: 6px; }
.pf-wrapup-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 34px; color: #4A3F3A; margin: 0 0 10px; }

.pf-fixit { width: 100%; }
.pf-hint { font-size: 12.5px; font-weight: 500; color: #A9836F; line-height: 1.5; margin: 0 0 10px; }
.pf-script-wrap {
  position: relative;
  transform: rotate(-0.8deg);
  margin: 0 0 12px;
  box-shadow:
    inset 0 1px 3px rgba(179,57,47,0.06),
    0 6px 14px rgba(169,131,111,0.14),
    0 1px 0 rgba(255,255,255,0.6);
  border-radius: 3px 14px 14px 14px;
}
.pf-pin {
  position: absolute; top: -13px; left: 12px; font-size: 20px; line-height: 1; z-index: 1;
  transform: rotate(-18deg); filter: drop-shadow(0 2px 2px rgba(74,63,58,0.25));
}
.pf-script { font-family: 'Karla', sans-serif; font-size: 13.5px; line-height: 1.6; border-radius: 3px 14px 14px 14px; padding: 15px 16px 13px; white-space: pre-line; margin: 0; }
.pf-script--mistakes { color: #B3392F; background: #FDEAEA; font-style: italic; }
.pf-wordcount { display: block; margin-top: 8px; font-family: 'Karla', sans-serif; font-weight: 700; font-size: 11.5px; color: #A9836F; letter-spacing: 0.02em; text-align: right; }

.pf-textarea {
  width: 100%;
  min-height: 100px;
  border: 1px solid #FCE4B0;
  border-radius: 14px;
  padding: 15px 16px 12px;
  font-family: 'Karla', sans-serif;
  font-size: 14px;
  color: #4A3F3A;
  line-height: 24px;
  resize: none;
  background:
    repeating-linear-gradient(to bottom, transparent 0, transparent 23px, rgba(169,114,10,0.10) 24px),
    #FFFDF8;
  box-shadow: inset 0 2px 4px rgba(169,114,10,0.06);
  transition: box-shadow 0.15s ease, border-color 0.15s ease;
}
.pf-textarea:focus { outline: none; border-color: #E8A83D; box-shadow: inset 0 2px 4px rgba(169,114,10,0.06), 0 0 0 3px rgba(232,168,61,0.22); }

.pf-nav {
  flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px 22px;
}
.pf-dots { display: flex; align-items: center; gap: 6px; }
.pf-dot { width: 7px; height: 7px; border-radius: 50%; background: #FCE4B0; }
.pf-dot.is-done { background: #E8A83D; }
.pf-dot.is-active { width: 20px; border-radius: 4px; background: #A9720A; }

.pf-btn {
  font-family: 'Karla', sans-serif;
  font-weight: 800;
  font-size: 13px;
  border: none;
  border-radius: 14px;
  padding: 11px 22px;
  cursor: pointer;
  background: #FBEDE3;
  color: #A9836F;
}
.pf-btn:disabled { opacity: 0.4; cursor: default; }
.pf-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #E8A83D 0%, #A9720A 100%);
  box-shadow: 0 4px 0 #7A5209;
}
.pf-btn--primary:active { transform: translateY(3px); box-shadow: 0 1px 0 #7A5209; }
`;
