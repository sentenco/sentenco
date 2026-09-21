import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// ASCEND new mechanic player ("Push"). Renders lessons shaped like
// ascendDay1.js: { prompts: [{question, answer, pushes, skills}], recall: [...] }.
// Push directions and skill criteria are teacher-only (see AscendPushGuide.jsx) --
// the student screen only ever shows the question and the ask to level it up.

const GROWTH_LABELS = ["Seed", "Sprout", "Budding", "Bloom"];

function growthStage(water) {
  return Math.min(3, Math.floor(water / 2));
}

function PlantSvg({ stage }) {
  const petalAngles = [0, 60, 120, 180, 240, 300];
  const pollenAngles = [0, 72, 144, 216, 288];
  return (
    <svg className={`asp-plant-svg asp-stage-${stage}`} viewBox="0 0 120 140">
      <defs>
        <linearGradient id="aspPotGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A85F35" />
          <stop offset="55%" stopColor="#C4744A" />
          <stop offset="100%" stopColor="#DB8F5E" />
        </linearGradient>
        <linearGradient id="aspStemGrad" x1="60" y1="34" x2="60" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4FB472" />
          <stop offset="100%" stopColor="#2C7A46" />
        </linearGradient>
        <linearGradient id="aspLeafGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4FB472" />
          <stop offset="100%" stopColor="#2C7A46" />
        </linearGradient>
        <linearGradient id="aspBudGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E08A42" />
          <stop offset="100%" stopColor="#C9701F" />
        </linearGradient>
        <radialGradient id="aspPetalGrad" cx="60" cy="28" r="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9701F" />
          <stop offset="55%" stopColor="#F2994A" />
          <stop offset="100%" stopColor="#FFC98A" />
        </radialGradient>
        <radialGradient id="aspCenterGrad" cx="57" cy="25" r="9" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E08A42" />
          <stop offset="100%" stopColor="#A85B16" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="131" rx="38" ry="5" fill="#10646B" opacity="0.10" />
      <path d="M27 100 L33 127 Q60 132 87 127 L93 100 Z" fill="url(#aspPotGrad)" />
      <ellipse cx="60" cy="127" rx="27" ry="4.5" fill="#A0592F" opacity="0.55" />
      <ellipse cx="60" cy="100" rx="36" ry="7.5" fill="#E39E6C" />
      <ellipse cx="60" cy="100" rx="36" ry="7.5" fill="none" stroke="#A85F35" strokeWidth="1.2" opacity="0.4" />
      <ellipse cx="60" cy="99.5" rx="29" ry="5" fill="#5A3D2B" />
      <g className="asp-sway-group">
        <circle className="asp-seed-dot" cx="60" cy="97" r="5" fill="#C9701F" />
        <line className="asp-stem" x1="60" y1="100" x2="60" y2="34" stroke="url(#aspStemGrad)" strokeWidth="5.5" strokeLinecap="round" />
        <path className="asp-leaf asp-leaf-1" d="M60 90 C46 86 42 70 46 66 C58 66 60 82 60 90Z" fill="url(#aspLeafGrad)" />
        <path className="asp-leaf asp-leaf-2" d="M60 82 C74 78 78 64 74 60 C64 61 60 74 60 82Z" fill="url(#aspLeafGrad)" />
        <path className="asp-leaf asp-leaf-3" d="M60 60 C48 57 45 44 48 41 C58 42 60 54 60 60Z" fill="url(#aspLeafGrad)" />
        <circle className="asp-bud" cx="60" cy="28" r="11" fill="url(#aspBudGrad)" />
        {petalAngles.map((a, i) => {
          const rad = (a * Math.PI) / 180;
          const x = 60 + 11 * Math.cos(rad);
          const y = 28 + 11 * Math.sin(rad);
          return (
            <circle
              key={a}
              className="asp-petal"
              cx={x.toFixed(1)}
              cy={y.toFixed(1)}
              r="8.5"
              fill="url(#aspPetalGrad)"
              stroke="#A85B16"
              strokeWidth="0.6"
              strokeOpacity="0.35"
              style={{ transformOrigin: `${x.toFixed(1)}px ${y.toFixed(1)}px`, transitionDelay: `${0.05 + i * 0.07}s` }}
            />
          );
        })}
        <g className="asp-flower-center">
          <circle cx="60" cy="28" r="7" fill="url(#aspCenterGrad)" />
          {pollenAngles.map((a) => {
            const rad = (a * Math.PI) / 180;
            const x = 60 + 3.4 * Math.cos(rad);
            const y = 28 + 3.4 * Math.sin(rad);
            return <circle key={a} cx={x.toFixed(1)} cy={y.toFixed(1)} r="0.9" fill="#FFE7C2" />;
          })}
        </g>
      </g>
    </svg>
  );
}

function buildSlides(lesson) {
  const slides = [{ type: "cover" }];
  lesson.prompts.forEach((p) => slides.push({ type: "prompt", question: p.question, answer: p.answer }));
  lesson.recall.forEach((r) => slides.push({ type: "recall", question: r.question }));
  slides.push({ type: "wrap" });
  return slides;
}

const STAGE_LABELS = { cover: "Cover", prompt: "Prompt", recall: "Remember This?", wrap: "Wrap-up" };

export default function AscendPush({ lesson, track }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideIdx, setSlideIdx] = useState(() => Number(searchParams.get("slide")) || 0);
  const [water, setWater] = useState(0);
  const [note, setNote] = useState("");
  const [wateredSlides, setWateredSlides] = useState(() => new Set());
  const [drafts, setDrafts] = useState({});

  // Mirror the slide position into the URL so a refresh mid-lesson lands
  // back on the same slide instead of the cover.
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (slideIdx > 0) next.set("slide", String(slideIdx));
    else next.delete("slide");
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIdx]);

  const slides = buildSlides(lesson);
  const slide = slides[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slides.length - 1;
  const stage = growthStage(water);
  const alreadyWatered = wateredSlides.has(slideIdx);
  const draftEmpty = !(drafts[slideIdx] || "").trim();

  function setDraft(value) {
    setDrafts((d) => ({ ...d, [slideIdx]: value }));
  }

  function goPrev() {
    if (!isFirst) setSlideIdx((i) => i - 1);
  }
  function goNext() {
    if (!isLast) { setNote(""); setSlideIdx((i) => i + 1); }
  }
  function levelUp(message) {
    if (wateredSlides.has(slideIdx)) return;
    setWater((w) => w + 1);
    setNote(message);
    setWateredSlides((prev) => new Set(prev).add(slideIdx));
  }

  let nextLabel = "Continue →";
  if (slide.type === "prompt") nextLabel = "Next Prompt →";
  if (slide.type === "recall") nextLabel = "Next →";
  if (isLast) nextLabel = "Finish";

  return (
    <div className="asp-shell">
      <style>{CSS}</style>
      <div className="asp-page">
        <div className="asp-deck">
          <div className="asp-deck-header">
            <div className="asp-brand"><img src="/logo-sentivo.png" alt="" className="asp-brand-logo" />entenco</div>
            <div className="asp-header-right">
              <span className={`asp-stage-pill ${slide.type === "recall" ? "is-recall" : ""}`}>{STAGE_LABELS[slide.type]}</span>
              <span className="asp-count-pill">Ascend</span>
            </div>
          </div>

          <div className="asp-garden">
            <PlantSvg stage={stage} />
            <div className="asp-growth-label">{GROWTH_LABELS[stage]}</div>
          </div>

          <div className="asp-deck-body">
            {slide.type === "cover" && (
              <div className="asp-slide">
                <div className="asp-cover-crumb"><b>{lesson.level}</b> &rsaquo; {track?.title}</div>
                <div className="asp-cover-rule" />
                <h2 className="asp-cover-title">{lesson.title}</h2>
              </div>
            )}

            {slide.type === "prompt" && (
              <div className="asp-slide">
                <div className="asp-prompt-ref">Prompt</div>
                <div className="asp-prompt-q">{slide.question}</div>
                <div className="asp-starting-box">
                  <span className="asp-starting-label">Starting point</span>
                  <p className="asp-starting-text">{slide.answer}</p>
                </div>
                <div className="asp-cta-line">Now, level it up!</div>
                <div className="asp-write-row">
                  <input
                    className="asp-write-input"
                    type="text"
                    placeholder="Say it stronger, then type it here…"
                    value={drafts[slideIdx] || ""}
                    onChange={(e) => setDraft(e.target.value)}
                  />
                </div>
                <div className="asp-mark-row">
                  <button type="button" className="asp-mbtn asp-mbtn--level" onClick={() => levelUp("Watered. Move on when ready.")} disabled={alreadyWatered || draftEmpty}>
                    {alreadyWatered ? "Watered ✓" : "Leveled Up ✓"}
                  </button>
                </div>
                <div className="asp-water-note">{note}</div>
              </div>
            )}

            {slide.type === "recall" && (
              <div className="asp-slide">
                <div className="asp-prompt-ref is-recall">Remember This?</div>
                <div className="asp-prompt-q">{slide.question}</div>
                <div className="asp-cta-line is-recall">Answer it again — no help this time.</div>
                <div className="asp-write-row">
                  <input
                    className="asp-write-input"
                    type="text"
                    placeholder="Type your leveled-up answer…"
                    value={drafts[slideIdx] || ""}
                    onChange={(e) => setDraft(e.target.value)}
                  />
                </div>
                <div className="asp-mark-row">
                  <button type="button" className="asp-mbtn asp-mbtn--remembered" onClick={() => levelUp("It stuck. Nice work.")} disabled={alreadyWatered || draftEmpty}>
                    {alreadyWatered ? "Remembered ✓" : "Remembered It ✓"}
                  </button>
                </div>
                <div className="asp-water-note">{note}</div>
              </div>
            )}

            {slide.type === "wrap" && (
              <div className="asp-slide">
                <div className="asp-wrap-title">Great job today!</div>
                <div className="asp-wrap-sub">Thank you for practicing.</div>
                <button type="button" className="asp-close-btn" onClick={() => window.close()}>Close</button>
              </div>
            )}
          </div>

          <div className="asp-deck-footer">
            <button type="button" className="asp-nbtn asp-nbtn--prev" onClick={goPrev} disabled={isFirst}>← Previous</button>
            <button type="button" className="asp-nbtn asp-nbtn--primary" onClick={goNext} disabled={isLast}>{nextLabel}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.asp-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(242,153,74,0.16), transparent 30%),
    radial-gradient(circle at 96% 90%, rgba(242,153,74,0.12), transparent 34%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, 28px 28px, auto;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #10646B;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px;
  box-sizing: border-box;
}
.asp-shell * { box-sizing: border-box; }

.asp-page { width: 420px; height: 610px; flex-shrink: 0; }

.asp-deck {
  position: relative;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 20px 46px rgba(16,100,107,0.16);
  border: 1px solid rgba(242,153,74,0.18);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.asp-deck-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 18px 0; flex-shrink: 0; }
.asp-brand {
  display: inline-flex; align-items: center; gap: 6px;
  font-weight: 800; font-size: 13.5px; color: #10646B;
}
.asp-brand-logo { height: 22px; width: auto; display: block; margin-right: -2px; }
.asp-stage-pill { font-weight: 800; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.04em; color: #C9701F; background: #FBE6D2; border-radius: 999px; padding: 4px 10px; }
.asp-stage-pill.is-recall { color: #10646B; background: #EAFBF8; }
.asp-count-pill { font-weight: 800; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.04em; color: #10646B; background: #EAFBF8; border-radius: 999px; padding: 4px 9px; margin-left: 6px; }
.asp-header-right { display: flex; align-items: center; }

.asp-garden {
  margin: 12px 18px 0;
  border-radius: 20px;
  background: linear-gradient(160deg, #FFF6EA 0%, #FFFDF9 100%);
  border: 1px solid #F3C99A;
  padding: 16px 10px 12px;
  text-align: center;
  flex-shrink: 0;
}
.asp-plant-svg { width: 128px; height: 138px; overflow: visible; }
.asp-sway-group { transform-origin: 60px 100px; animation: aspSway 4.2s ease-in-out infinite; }
@keyframes aspSway { 0%, 100% { transform: rotate(-1.4deg); } 50% { transform: rotate(1.4deg); } }

.asp-seed-dot { opacity: 1; transition: opacity 0.5s ease; }
.asp-stem { stroke-dasharray: 66; stroke-dashoffset: 66; transition: stroke-dashoffset 0.9s cubic-bezier(.25,.8,.3,1); }
.asp-leaf { opacity: 0; transform: scale(0.35); transition: opacity 0.5s ease, transform 0.5s cubic-bezier(.34,1.4,.64,1); }
.asp-leaf-1 { transform-origin: 60px 90px; transition-delay: 0.15s; }
.asp-leaf-2 { transform-origin: 60px 82px; transition-delay: 0.28s; }
.asp-leaf-3 { transform-origin: 60px 60px; transition-delay: 0.1s; }
.asp-bud { opacity: 0; transform: scale(0.3); transform-origin: 60px 28px; transition: opacity 0.4s ease, transform 0.4s cubic-bezier(.34,1.4,.64,1); }
.asp-petal { opacity: 0; transform: scale(0.2); transition: opacity 0.4s ease, transform 0.4s cubic-bezier(.34,1.5,.64,1); }
.asp-flower-center { opacity: 0; transform: scale(0.3); transform-origin: 60px 28px; transition: opacity 0.35s ease 0.4s, transform 0.35s cubic-bezier(.34,1.4,.64,1) 0.4s; }

.asp-plant-svg.asp-stage-1 .asp-seed-dot { opacity: 0; }
.asp-plant-svg.asp-stage-1 .asp-stem, .asp-plant-svg.asp-stage-2 .asp-stem, .asp-plant-svg.asp-stage-3 .asp-stem { stroke-dashoffset: 36; }
.asp-plant-svg.asp-stage-1 .asp-leaf-1, .asp-plant-svg.asp-stage-2 .asp-leaf-1, .asp-plant-svg.asp-stage-3 .asp-leaf-1 { opacity: 1; transform: scale(1); }
.asp-plant-svg.asp-stage-1 .asp-leaf-2, .asp-plant-svg.asp-stage-2 .asp-leaf-2, .asp-plant-svg.asp-stage-3 .asp-leaf-2 { opacity: 1; transform: scale(1); }

.asp-plant-svg.asp-stage-2 .asp-seed-dot, .asp-plant-svg.asp-stage-3 .asp-seed-dot { opacity: 0; }
.asp-plant-svg.asp-stage-2 .asp-stem, .asp-plant-svg.asp-stage-3 .asp-stem { stroke-dashoffset: 9; }
.asp-plant-svg.asp-stage-2 .asp-leaf-3, .asp-plant-svg.asp-stage-3 .asp-leaf-3 { opacity: 1; transform: scale(1); }
.asp-plant-svg.asp-stage-2 .asp-bud { opacity: 1; transform: scale(1); }

.asp-plant-svg.asp-stage-3 .asp-seed-dot { opacity: 0; }
.asp-plant-svg.asp-stage-3 .asp-stem { stroke-dashoffset: 0; }
.asp-plant-svg.asp-stage-3 .asp-bud { opacity: 0; transform: scale(0.5); transition-delay: 0s; }
.asp-plant-svg.asp-stage-3 .asp-petal { opacity: 1; transform: scale(1); }
.asp-plant-svg.asp-stage-3 .asp-flower-center { opacity: 1; transform: scale(1); }

.asp-growth-label { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 15px; color: #C9701F; margin-top: 4px; }

.asp-deck-body { flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; padding: 20px 22px 6px; overflow-y: auto; }
.asp-slide { width: 100%; text-align: center; }

.asp-cover-crumb { font-weight: 700; font-size: 11.5px; color: #4B8B92; margin-bottom: 12px; }
.asp-cover-crumb b { color: #C9701F; }
.asp-cover-rule { width: 40px; height: 3px; background: #F2994A; border-radius: 3px; margin: 0 auto 14px; }
.asp-cover-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 23px; margin: 0; }

.asp-prompt-ref { font-weight: 700; font-size: 11px; color: #4B8B92; margin-bottom: 4px; }
.asp-prompt-ref.is-recall { color: #10646B; }
.asp-prompt-q { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 20px; color: #10646B; margin-bottom: 16px; line-height: 1.3; }

.asp-starting-box {
  background: #FFFDF9; border: 1px solid #F3C99A; border-radius: 12px;
  padding: 10px 14px; margin-bottom: 12px; text-align: left;
}
.asp-starting-label { display: block; font-weight: 800; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #C9701F; margin-bottom: 3px; }
.asp-starting-text { font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; font-size: 13.5px; color: #10646B; margin: 0; line-height: 1.4; }

.asp-cta-line { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 16px; color: #C9701F; margin-bottom: 12px; }
.asp-cta-line.is-recall { color: #10646B; }

.asp-write-row { margin-bottom: 12px; }
.asp-write-input {
  width: 100%; font-family: 'IBM Plex Sans', sans-serif; font-size: 13px; color: #10646B;
  background: #fff; border: 1.5px dashed #F3C99A; border-radius: 12px; padding: 9px 13px; outline: none;
}
.asp-write-input:focus { border-color: #F2994A; border-style: solid; }
.asp-write-input::placeholder { color: #C3B9A6; }

.asp-mark-row { display: flex; gap: 8px; justify-content: center; }
.asp-mbtn { font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 12px; border: none; border-radius: 999px; padding: 9px 20px; cursor: pointer; transition: transform 0.12s ease; }
.asp-mbtn--level { background: linear-gradient(135deg, #F2994A, #C9701F); color: #fff; box-shadow: 0 3px 0 #A85B16; }
.asp-mbtn--level:hover { transform: translateY(-1px); }
.asp-mbtn--remembered { background: linear-gradient(135deg, #3E9B5C, #2C7A46); color: #fff; box-shadow: 0 3px 0 #235E36; }
.asp-mbtn--remembered:hover { transform: translateY(-1px); }
.asp-mbtn:disabled { opacity: 0.5; cursor: default; transform: none; }

.asp-water-note { margin-top: 8px; font-size: 10.5px; font-weight: 700; color: #4B8B92; min-height: 15px; line-height: 1.4; }

.asp-wrap-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 21px; margin: 6px 0 4px; }
.asp-wrap-sub { font-size: 13px; color: #4B8B92; margin-bottom: 16px; }
.asp-close-btn {
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 12.5px; color: #fff;
  background: linear-gradient(135deg, #F2994A, #C9701F); border: none; border-radius: 999px;
  padding: 9px 22px; cursor: pointer; box-shadow: 0 3px 0 #A85B16;
}

.asp-deck-footer { display: flex; align-items: center; justify-content: space-between; padding: 10px 18px 20px; gap: 10px; flex-shrink: 0; }
.asp-nbtn { font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 12.5px; border: none; border-radius: 999px; padding: 10px 18px; cursor: pointer; transition: transform 0.12s ease; }
.asp-nbtn--prev { background: #fff; color: #C9701F; box-shadow: 0 3px 0 #F0DFC7, 0 6px 12px rgba(16,100,107,0.08); }
.asp-nbtn--prev:hover { transform: translateY(-2px); }
.asp-nbtn--primary { background: linear-gradient(135deg, #F2994A, #C9701F); color: #fff; box-shadow: 0 3px 0 #A85B16, 0 6px 14px rgba(201,112,31,0.26); }
.asp-nbtn--primary:hover { transform: translateY(-2px); }
.asp-nbtn:disabled { opacity: 0.35; cursor: default; transform: none; box-shadow: none; }
`;
