import { useState } from "react";

// Flat, rounded-shape illustrations used until a real generated picture is
// wired in via round.image. "bonus" is a neutral placeholder shared by every
// round-2 slot that doesn't have bespoke art yet.
function StoryScene({ name }) {
  const scenes = {
    park: (
      <>
        <rect width="320" height="200" rx="20" fill="#DCEEDD" />
        <circle cx="270" cy="42" r="24" fill="#FFC857" />
        <path d="M0 150 Q80 120 160 148 T320 140 V200 H0 Z" fill="#A9D8AC" />
        <path d="M70 150 C70 110 110 110 110 150 Z" fill="#4C9A5D" />
        <rect x="86" y="150" width="8" height="26" fill="#8A6748" />
        <path d="M220 150 C220 100 270 100 270 150 Z" fill="#3E8A50" />
        <rect x="240" y="150" width="8" height="26" fill="#8A6748" />
        <rect x="150" y="158" width="46" height="10" rx="4" fill="#8A6748" />
        <circle cx="150" cy="158" r="6" fill="#8A6748" />
        <circle cx="196" cy="158" r="6" fill="#8A6748" />
        <circle cx="168" cy="132" r="10" fill="#FF6B4A" />
      </>
    ),
    lostPuppy: (
      <>
        <rect width="320" height="200" rx="20" fill="#EAE6F5" />
        <path d="M0 160 H320 V200 H0 Z" fill="#C9C2E6" />
        <rect x="20" y="60" width="70" height="100" rx="6" fill="#F3EEE6" />
        <rect x="230" y="40" width="70" height="120" rx="6" fill="#F3EEE6" />
        <ellipse cx="150" cy="168" rx="26" ry="8" fill="#B3AAD6" opacity="0.5" />
        <ellipse cx="150" cy="150" rx="20" ry="14" fill="#D9A066" />
        <circle cx="132" cy="140" r="12" fill="#D9A066" />
        <path d="M124 130 q-6 -14 4 -14 q6 8 4 16 Z" fill="#D9A066" />
        <path d="M140 130 q6 -14 -4 -14 q-6 8 -4 16 Z" fill="#D9A066" />
        <circle cx="128" cy="140" r="1.6" fill="#2B2A4A" />
        <circle cx="136" cy="140" r="1.6" fill="#2B2A4A" />
        <ellipse cx="200" cy="150" rx="10" ry="26" fill="#7C5CFC" />
        <circle cx="200" cy="118" r="12" fill="#F2C6A0" />
      </>
    ),
    party: (
      <>
        <rect width="320" height="200" rx="20" fill="#FDEDE6" />
        <rect x="0" y="150" width="320" height="50" fill="#F6D8C8" />
        <circle cx="60" cy="55" r="16" fill="#FF6B4A" />
        <rect x="59" y="71" width="2" height="30" fill="#C77" />
        <circle cx="110" cy="40" r="16" fill="#7C5CFC" />
        <rect x="109" y="56" width="2" height="34" fill="#C77" />
        <circle cx="250" cy="50" r="16" fill="#16BFAE" />
        <rect x="249" y="66" width="2" height="30" fill="#C77" />
        <circle cx="205" cy="35" r="16" fill="#FFB648" />
        <rect x="204" y="51" width="2" height="34" fill="#C77" />
        <path d="M120 150 L200 150 L190 100 L130 100 Z" fill="#FFFFFF" stroke="#F2A365" strokeWidth="3" />
        <circle cx="140" cy="118" r="4" fill="#FF6B4A" />
        <circle cx="160" cy="112" r="4" fill="#7C5CFC" />
        <circle cx="180" cy="120" r="4" fill="#16BFAE" />
        <rect x="150" y="150" width="20" height="18" fill="#E08A4F" />
        <path d="M150 150 l10 -14 l10 14 Z" fill="#FFD37A" />
      </>
    ),
    rain: (
      <>
        <rect width="320" height="200" rx="20" fill="#DDE8EF" />
        <rect x="0" y="160" width="320" height="40" fill="#B9CDDA" />
        <ellipse cx="150" cy="175" rx="26" ry="8" fill="#8FA9BB" />
        <g stroke="#9BB6C6" strokeWidth="3" strokeLinecap="round">
          <line x1="40" y1="20" x2="30" y2="50" />
          <line x1="90" y1="10" x2="80" y2="45" />
          <line x1="230" y1="20" x2="220" y2="55" />
          <line x1="270" y1="40" x2="262" y2="70" />
        </g>
        <path d="M110 90 Q130 65 160 78 Q175 60 200 78 Q225 70 225 95 Q225 108 205 108 L125 108 Q108 108 110 90 Z" fill="#F3EEE6" />
        <path d="M150 110 Q160 130 150 148" stroke="#7C5CFC" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M60 120 L110 100 L130 175 L58 190 Z" fill="#FF6B4A" />
        <circle cx="95" cy="95" r="5" fill="#8A6748" />
      </>
    ),
    neighbor: (
      <>
        <rect width="320" height="200" rx="20" fill="#EAF1E9" />
        <rect x="0" y="160" width="320" height="40" fill="#CFE0CC" />
        <rect x="30" y="90" width="90" height="70" rx="4" fill="#F3EEE6" />
        <path d="M25 90 L75 55 L125 90 Z" fill="#C5692A" />
        <rect x="65" y="120" width="20" height="40" fill="#8A6748" />
        <rect x="180" y="70" width="110" height="70" rx="8" fill="#FFB648" />
        <rect x="188" y="80" width="30" height="24" rx="3" fill="#FFFFFF" opacity="0.7" />
        <circle cx="260" cy="118" r="14" fill="#F3EEE6" />
        <rect x="180" y="140" width="110" height="10" fill="#2B2A4A" opacity="0.15" />
        <rect x="130" y="150" width="18" height="14" rx="2" fill="#8A6748" />
        <rect x="152" y="150" width="18" height="14" rx="2" fill="#8A6748" />
      </>
    ),
    market: (
      <>
        <rect width="320" height="200" rx="20" fill="#FBF0DC" />
        <rect x="0" y="165" width="320" height="35" fill="#E9D4A6" />
        <path d="M40 70 H280 L260 40 H60 Z" fill="#FF6B4A" />
        <rect x="40" y="70" width="240" height="10" fill="#C5692A" />
        <rect x="55" y="100" width="210" height="60" rx="4" fill="#F3EEE6" />
        <circle cx="90" cy="120" r="10" fill="#E5484D" />
        <circle cx="115" cy="122" r="10" fill="#E5484D" />
        <circle cx="150" cy="118" r="9" fill="#4C9A5D" />
        <circle cx="170" cy="122" r="9" fill="#4C9A5D" />
        <path d="M200 112 h26 l-4 22 h-18 Z" fill="#FFB648" />
        <path d="M235 110 h20 l-3 24 h-14 Z" fill="#FF8A4C" />
      </>
    ),
    interview: (
      <>
        <rect width="320" height="200" rx="20" fill="#E9EAF5" />
        <rect x="0" y="160" width="320" height="40" fill="#CBCEE8" />
        <rect x="90" y="120" width="140" height="12" rx="6" fill="#8A84A3" />
        <rect x="90" y="132" width="140" height="40" rx="4" fill="#F3EEE6" />
        <circle cx="120" cy="90" r="18" fill="#F2C6A0" />
        <rect x="102" y="108" width="36" height="30" rx="6" fill="#2B2A4A" />
        <circle cx="210" cy="90" r="18" fill="#D9A066" />
        <rect x="192" y="108" width="36" height="30" rx="6" fill="#7C5CFC" />
        <rect x="150" y="150" width="20" height="8" rx="4" fill="#FFB648" />
      </>
    ),
    airport: (
      <>
        <rect width="320" height="200" rx="20" fill="#E4EEF6" />
        <rect x="0" y="165" width="320" height="35" fill="#C7DAE8" />
        <path d="M40 110 L180 90 L260 60 L280 68 L210 100 L260 112 L240 122 L190 112 L110 132 Z" fill="#7C5CFC" />
        <circle cx="255" cy="100" r="3" fill="#FFFFFF" />
        <rect x="60" y="150" width="24" height="30" rx="4" fill="#FF6B4A" />
        <rect x="90" y="145" width="24" height="35" rx="4" fill="#16BFAE" />
        <circle cx="72" cy="184" r="4" fill="#2B2A4A" />
        <circle cx="102" cy="184" r="4" fill="#2B2A4A" />
        <circle cx="200" cy="45" r="16" fill="#FFFFFF" opacity="0.7" />
        <circle cx="230" cy="55" r="10" fill="#FFFFFF" opacity="0.7" />
      </>
    ),
    bonus: (
      <>
        <rect width="320" height="200" rx="20" fill="#F3EEE6" />
        <rect x="60" y="52" width="200" height="130" rx="12" fill="#FFFFFF" stroke="#E0D6C4" strokeWidth="3" />
        <circle cx="106" cy="94" r="14" fill="#FFD37A" />
        <path d="M76 156 L130 108 L166 140 L200 104 L244 156 Z" fill="#C7DAB0" />
        <path d="M60 182 h200" stroke="#E0D6C4" strokeWidth="3" strokeDasharray="1 8" strokeLinecap="round" />
      </>
    ),
  };

  return (
    <svg className="sm2-scene" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      {scenes[name] || <rect width="320" height="200" rx="20" fill="#EDE7F6" />}
    </svg>
  );
}

// Tense badge comes from the first part of item.focus (e.g. "Simple
// past" out of "Simple past, sequencing"). The Post-it's connectors
// come straight from item.connectors -- every topic has a real,
// level-appropriate list now (see storyMakingData.js), not just the
// ones whose old focus string happened to spell them out in parens.
function getTense(focus) {
  return focus.split(",")[0].trim();
}

export default function StoryMakingActivity({ item }) {
  const round = item;
  const [draft, setDraft] = useState("");
  const [checked, setChecked] = useState(false);
  const tense = getTense(item.focus);
  const connectors = item.connectors;

  function restart() {
    setDraft("");
    setChecked(false);
  }

  function check() {
    setChecked(true);
  }

  return (
    <div className="sm2-shell">
      <style>{CSS}</style>
      <div className="sm2-blob sm2-blob--a" />
      <div className="sm2-blob sm2-blob--b" />

      <div className="sm2-frame">
        <span className="sm2-paper-back" />
        <span className="sm2-tape" />

        <div className="sm2-card">
          <div className="sm2-pic-pane">
            {round.image ? (
              <img className="sm2-scene" src={round.image} alt="" />
            ) : (
              <StoryScene name={round.scene} />
            )}
            <svg className="sm2-pic-corner" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0 H40 V40 Z" fill="#FFFFFF" fillOpacity="0.85" />
              <path d="M0 0 H40 V40 Z" fill="none" stroke="#E0D6C4" strokeWidth="1" />
            </svg>
          </div>

          <div className="sm2-content-pane">
            <div className="sm2-brand-row">
              <span className="sm2-brand-pill">
                <img className="sm2-brand-logo" src="/logo-sentenco.png" alt="" />
                <span className="sm2-brand-word">entenco</span>
                <span className="sm2-brand-sep">·</span>
                <span className="sm2-brand-type">Story Making</span>
              </span>
              {connectors && (
                <div className="sm2-postit">
                  <span className="sm2-postit-label">Connectors</span>
                  <span className="sm2-postit-chain">{connectors.join("\n")}</span>
                </div>
              )}
            </div>

            <h1 className="sm2-title">{round.title || item.title}</h1>

            <div className="sm2-meta-row">
              <span className="sm2-tense-badge">🕓 {tense}</span>
            </div>

            <p className="sm2-prompt">{round.prompt}</p>

            <div className="sm2-words">
              {round.words.map((w) => (
                <span className="sm2-word" key={w}>{w}</span>
              ))}
            </div>

            {checked ? (
              <div className="sm2-story-final">
                <span className="sm2-story-label">✓ Your Story</span>
                <p className="sm2-story-text">{draft}</p>
              </div>
            ) : (
              <textarea
                className="sm2-textarea"
                placeholder="Write your 5-sentence story here…"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
            )}

            <div className="sm2-nav-row">
              <button type="button" className="sm2-btn" onClick={restart}>Restart ↻</button>
              <button type="button" className="sm2-btn sm2-btn--primary" onClick={check} disabled={checked || !draft.trim()}>Check ✓</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.sm2-shell {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1cm;
  box-sizing: border-box;
  font-family: 'Karla', sans-serif;
  background: linear-gradient(160deg, #FFF8EF 0%, #FFF1E6 100%);
  overflow: hidden;
}
.sm2-shell * { box-sizing: border-box; }

.sm2-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.sm2-blob--a { width: 220px; height: 220px; top: -60px; left: 0; background: rgba(62,157,191,0.12); }
.sm2-blob--b { width: 200px; height: 200px; bottom: -60px; right: 4%; background: rgba(111,207,151,0.10); }

.sm2-frame { position: relative; z-index: 1; width: 900px; max-width: 100%; height: 560px; }

.sm2-paper-back {
  position: absolute; inset: 0;
  background: #FBEFDD;
  border-radius: 24px;
  transform: rotate(1.6deg) translate(8px, 10px);
  box-shadow: 0 16px 34px rgba(42,110,133,0.14);
  z-index: 0;
}

.sm2-tape {
  position: absolute; top: -14px; left: 46%; transform: translateX(-50%) rotate(-3deg);
  width: 74px; height: 25px; z-index: 4;
  background: repeating-linear-gradient(45deg, #3E9DBF, #3E9DBF 6px, #C7E6EE 6px, #C7E6EE 12px);
  box-shadow: 0 3px 6px rgba(42,110,133,0.20);
}

.sm2-card {
  position: relative; z-index: 1;
  width: 100%; height: 100%;
  background: #FFFFFF;
  border-radius: 22px;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  overflow: hidden;
  box-shadow:
    0 1px 2px rgba(42,110,133,0.10),
    0 12px 22px rgba(42,110,133,0.14),
    0 30px 55px rgba(42,110,133,0.18);
  transform: rotate(-0.7deg);
}

.sm2-pic-pane { position: relative; background: #F3EEE6; }
.sm2-scene { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
.sm2-pic-corner { position: absolute; top: 0; right: 0; width: 34px; height: 34px; filter: drop-shadow(-1px 1px 2px rgba(43,42,74,0.12)); }

.sm2-content-pane { position: relative; padding: 22px 28px 20px; display: flex; flex-direction: column; min-width: 0; height: 100%; }

.sm2-brand-row { display: flex; align-items: center; margin-bottom: 12px; padding-right: 130px; }
.sm2-brand-pill {
  display: inline-flex; align-items: center; gap: 0;
  background: #E1F1F6;
  border-radius: 999px;
  padding: 5px 14px 5px 5px;
}
.sm2-brand-logo { width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; }
.sm2-brand-word { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 13.5px; color: #2A6E85; margin-left: 4px; }
.sm2-brand-sep { color: #2A6E85; opacity: 0.4; margin: 0 7px; font-weight: 700; }
.sm2-brand-type { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 13.5px; letter-spacing: 0.02em; color: #2A6E85; }

.sm2-postit {
  position: absolute; top: 16px; right: 20px; z-index: 2;
  width: 118px; min-height: 84px;
  background: #FFE29E;
  padding: 8px 9px 10px;
  transform: rotate(4deg);
  box-shadow: 0 6px 14px rgba(169,114,10,0.20);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center;
}
.sm2-postit::after {
  content: ""; position: absolute; right: 0; bottom: 0;
  width: 0; height: 0;
  border-style: solid;
  border-width: 0 0 13px 13px;
  border-color: transparent transparent rgba(169,114,10,0.18) transparent;
}
.sm2-postit-label { display: block; font-family: 'Karla', sans-serif; font-weight: 800; font-size: 8px; letter-spacing: 0.08em; text-transform: uppercase; color: #8A5A00; margin-bottom: 5px; }
.sm2-postit-chain { display: block; font-family: 'Karla', sans-serif; font-weight: 700; font-size: 10.5px; color: #5C3D00; line-height: 1.45; white-space: pre-line; }

.sm2-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 32px; color: #4A3F3A; margin: 0 0 8px; line-height: 1.05; }

.sm2-meta-row { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; flex-wrap: wrap; }
.sm2-tense-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.03em;
  color: #2A6E85; background: #E1F1F6;
  border: 1px solid #C7E6EE;
  border-radius: 999px; padding: 5px 11px;
}

.sm2-prompt { font-size: 12.5px; font-weight: 500; color: #A9836F; line-height: 1.5; margin: 0 0 10px; }

.sm2-words { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 14px; }
.sm2-word {
  font-family: 'Karla', sans-serif; font-weight: 700; font-size: 12px;
  color: #2A6E85; background: #FFFFFF;
  border: 1.5px solid #C7E6EE; border-radius: 8px;
  padding: 6px 10px; box-shadow: 0 2px 0 #C7E6EE;
}
.sm2-word:nth-child(3n+1) { transform: rotate(-2.5deg); }
.sm2-word:nth-child(3n+2) { transform: rotate(2deg); }
.sm2-word:nth-child(3n+3) { transform: rotate(-1deg); }

.sm2-textarea {
  width: 100%;
  flex: 1;
  min-height: 130px;
  border: 1px solid #C7E6EE;
  border-radius: 14px;
  padding: 14px 15px;
  font-family: 'Karla', sans-serif;
  font-size: 13.5px;
  color: #4A3F3A;
  line-height: 26px;
  resize: none;
  background: #FFFDF8 repeating-linear-gradient(to bottom, transparent 0, transparent 25px, #E1F1F6 26px);
  background-position: 0 3px;
}
.sm2-textarea:focus { outline: none; border-color: #3E9DBF; }

.sm2-story-final {
  width: 100%;
  flex: 1;
  min-height: 130px;
  border: 1px solid #A8DFC0;
  border-radius: 14px;
  padding: 14px 15px;
  overflow-y: auto;
  background: #F3FBF6 repeating-linear-gradient(to bottom, transparent 0, transparent 25px, #DCF3E4 26px);
  background-position: 0 3px;
}
.sm2-story-label {
  display: inline-block; font-family: 'Karla', sans-serif; font-weight: 800; font-size: 10px;
  letter-spacing: 0.06em; text-transform: uppercase; color: #1F9D6E;
  background: #DCF3E4; border-radius: 999px; padding: 3px 9px; margin-bottom: 8px;
}
.sm2-story-text { font-family: 'Karla', sans-serif; font-size: 13.5px; color: #2B4A38; line-height: 26px; margin: 0; white-space: pre-wrap; }

.sm2-nav-row { display: flex; align-items: center; gap: 10px; margin-top: 14px; flex: 0 0 auto; }
.sm2-btn {
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 13px;
  border: none; border-radius: 14px; padding: 11px 20px; cursor: pointer;
  background: #FBEDE3; color: #A9836F;
}
.sm2-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #3E9DBF 0%, #2A6E85 100%);
  box-shadow: 0 4px 0 #1D4E5F;
  margin-left: auto;
}
.sm2-btn--primary:disabled { opacity: 0.45; cursor: default; box-shadow: none; }
.sm2-btn--primary:active { transform: translateY(3px); box-shadow: 0 1px 0 #1D4E5F; }
`;
