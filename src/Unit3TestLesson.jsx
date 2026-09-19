import React, { useEffect, useState } from "react";

const LETTER_COLOR = {
  S: "#E0567A", T: "#2E97C7", U: "#22A67E", V: "#8E6FCE",
  W: "#2BAFAF", X: "#F2A900", Y: "#C77D2E", Z: "#D6478C",
};
const COLOR_HEX = {
  Red: "#E5484D", Blue: "#2E97C7", Yellow: "#F2A900", Green: "#22A67E",
  Orange: "#E8712E", Pink: "#EC6FA6", Purple: "#8B5FBF", Brown: "#8B5A2B",
};
const BLEND_COLOR = "#2E97C7";

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

function LetterTile({ letters, color, size = 74, fontSize = 28, onZoom }) {
  const big = <div className="letter-tile zoom-letter-tile" style={{ background: color }}><span>{letters}</span></div>;
  return (
    <div className="letter-tile" style={{ background: color, width: size, height: size, fontSize }} onClick={() => onZoom(big)}>
      {letters}
    </div>
  );
}

function ColorSwatch({ name, hex, size = 90, onZoom }) {
  const big = <div className="swatch zoom-swatch" style={{ background: hex }} />;
  return (
    <div className="wc">
      <div className="swatch" style={{ background: hex, width: size, height: size }} onClick={() => onZoom(big)} />
      <div className="word">{name}</div>
    </div>
  );
}

function BlendRow({ parts, result, color = BLEND_COLOR, onZoom }) {
  return (
    <div className="blend-row">
      {parts.map((p, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <span className="blend-plus">+</span>}
          <LetterTile letters={p} color={color} size={58} fontSize={22} onZoom={onZoom} />
        </React.Fragment>
      ))}
      <span className="blend-plus">=</span>
      <div className="blend-word">{result}</div>
    </div>
  );
}

const PARTS = {
  A: { color: "#F2A900" },
  B: { color: "#2E97C7" },
  C: { color: "#22A67E" },
  D: { color: "#E0567A" },
};

export default function Unit3TestLesson() {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    const styleId = "hal-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".hal-wrap");
    const slide = document.querySelector(".slide");
    if (!wrap || !slide) return;
    const pad = parseFloat(getComputedStyle(wrap).paddingLeft) || 0;
    const targetW = Math.ceil(slide.offsetWidth + pad * 2);
    const targetH = Math.ceil(slide.offsetHeight + pad * 2);
    const chromeW = window.outerWidth - window.innerWidth;
    const chromeH = window.outerHeight - window.innerHeight;
    const screenW = window.screen.availWidth || 1600;
    const screenH = window.screen.availHeight || 900;
    const outerW = Math.min(targetW + chromeW, screenW);
    const outerH = Math.min(targetH + chromeH, screenH);
    window.resizeTo(outerW, outerH);
    const left = Math.max(0, Math.floor((screenW - outerW) / 2));
    const top = Math.max(0, Math.floor((screenH - outerH) / 2));
    window.moveTo(left, top);
  }, []);

  useEffect(() => {
    if (zoom) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [zoom]);

  function exit() {
    window.close();
  }

  const slides = buildSlides({ onZoom: setZoom });
  const total = slides.length;
  const lastPart = [...slides].reverse().find((x) => x.part)?.part;
  const s = slides[i];

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }

  return (
    <div className="hal-wrap">
      <div className="deck-single">
        <div className={`slide ${i === 0 ? "slide--title" : "slide--regular"}`}>
          <button className="close-btn" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div className="slide-header">
            <div className="brand-bubble">
              <img className="brand-logo" src="/logo-sentivo.png" alt="" />
              <span className="brand-word">entivo</span>
            </div>
            <div className="stage-chip">
              {s.part && <span className="part-badge" style={{ background: PARTS[s.part].color }}>{s.part}</span>}
              <span className="stage-name">{s.stage}</span>
              {s.part && s.part === lastPart && <span className="last-tag">Last part!</span>}
            </div>
          </div>

          <div className={`slide-body ${s.instruction ? "has-instruction" : ""}`}>
            {s.instruction && (
              <div className="slide-instruction">
                {s.instruction.map(([icon, text]) => (
                  <span key={text} className="instr-step"><span className="instr-icon">{icon}</span>{text}</span>
                ))}
              </div>
            )}
            {s.title && <span className="title-highlight"><h2 className="slide-h sub">{s.title}</h2></span>}
            {s.body}
            {s.guide && (
              <div className="slide-guide">
                <span className="guide-label">Say</span>
                <span className="guide-text">
                  {s.guide.split("___").map((part, k, arr) => (
                    <React.Fragment key={k}>{part}{k < arr.length - 1 && <span className="guide-blank" />}</React.Fragment>
                  ))}
                </span>
              </div>
            )}
          </div>

          <div className="slide-footer">
            <button className={`nav-btn ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="progress-track">
              {Array.from({ length: total }).map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === i ? "on" : ""} ${slides[idx].part && slides[idx].part !== slides[idx - 1]?.part ? "part-start" : ""}`}
                  style={slides[idx].part && idx === i ? { background: PARTS[slides[idx].part].color } : undefined}
                />
              ))}
            </div>
            <button className="nav-btn next" onClick={() => (i === total - 1 ? exit() : go(1))}>
              {i === total - 1 ? "Finish Lesson" : "Next →"}
            </button>
          </div>
        </div>
      </div>

      {zoom && (
        <div className="zoom-overlay open" onClick={() => setZoom(null)}>
          <div className="zoom-overlay-inner" onClick={(e) => e.stopPropagation()}>
            <button className="zoom-close" onClick={() => setZoom(null)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            {zoom}
          </div>
        </div>
      )}
    </div>
  );
}

export const LESSON_GUIDE = [
  { stage: "Unit 3 · Test", time: null, note: null },
  { stage: "Test Welcome", time: "~2 min", note: "Tell the student: \"Today is our Unit 3 Challenge!\" Explain there will be several small challenges. No review or teaching before starting." },
  { stage: "Part 1: Letter Check", time: "~4 min", note: "Show S-Z in random order. Student names each letter. Include uppercase/lowercase matching." },
  { stage: "Part 2: Color Check", time: "~4 min", note: "Show objects or color cards using the unit colors. Student identifies the colors independently." },
  { stage: "Part 3: Letter + Color", time: "~4 min", note: "Show colored letters from S-Z. Ask \"What letter?\" and \"What color?\" Student gives both answers independently." },
  { stage: "Part 4: Blend & Say", time: "~4 min", note: "Show simple previously practiced combinations. Student blends the sounds and says the resulting word, e.g. M-A-T -> \"mat.\" Use only patterns taught in the unit." },
  { stage: "Part 5: Mixed Challenge", time: "~4 min", note: "Give a series of mixed tasks: identify a letter, identify a color, find a specific letter/color, and blend a simple word. Keep instructions short, minimal assistance." },
  { stage: "Finish & Celebrate", time: "~3 min", note: "Complete a final 3-item challenge, give positive feedback, and record the student's results. End with \"You did it! Unit 3 is finished!\"" },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 3 · Test",
      time: null,
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Unit 3 Challenge!</h1></span>
          <p className="slide-p title-p">Let's see everything you know: letters S to Z, colors, and blending.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Ss" color={LETTER_COLOR.S} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="Ww" color={LETTER_COLOR.W} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="Zz" color={LETTER_COLOR.Z} size={56} fontSize={22} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Test Welcome
    {
      stage: "Test Welcome",
      time: "~2 min",
      body: (
        <div className="center-col">
          <StarIcon size={44} fill="var(--sun)" />
          <span className="title-highlight"><h2 className="slide-h sub">You've Got This!</h2></span>
          <p className="slide-p">Today is our Unit 3 Challenge. Just do your best. There's no wrong way to try!</p>
        </div>
      ),
    },
    // 3: Part 1: Letter Check
    {
      stage: "Part 1: Letter Check",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Name the Letters!</h2></span>
          <div className="letter-row">
            <LetterTile letters="Vv" color={LETTER_COLOR.V} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Tt" color={LETTER_COLOR.T} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Yy" color={LETTER_COLOR.Y} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Uu" color={LETTER_COLOR.U} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Xx" color={LETTER_COLOR.X} size={50} fontSize={19} onZoom={onZoom} />
          </div>
          <div className="row" style={{ marginTop: 4 }}>
            <div className="match-pair">
              <LetterTile letters="S" color={LETTER_COLOR.S} size={58} fontSize={24} onZoom={onZoom} />
              <span className="match-plus">+</span>
              <LetterTile letters="s" color={LETTER_COLOR.S} size={58} fontSize={24} onZoom={onZoom} />
            </div>
          </div>
        </>
      ),
    },
    // 4: Part 2: Color Check
    {
      stage: "Part 2: Color Check",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Name the Colors!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Red" hex={COLOR_HEX.Red} size={56} onZoom={onZoom} />
            <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} size={56} onZoom={onZoom} />
            <ColorSwatch name="Yellow" hex={COLOR_HEX.Yellow} size={56} onZoom={onZoom} />
            <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={56} onZoom={onZoom} />
          </div>
          <div className="word-row">
            <ColorSwatch name="Orange" hex={COLOR_HEX.Orange} size={56} onZoom={onZoom} />
            <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={56} onZoom={onZoom} />
            <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} size={56} onZoom={onZoom} />
            <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} size={56} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 5: Part 3: Letter + Color
    {
      stage: "Part 3: Letter + Color",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Letter + Color!</h2></span>
          <div className="letter-row">
            <LetterTile letters="T" color={COLOR_HEX.Purple} size={80} fontSize={32} onZoom={onZoom} />
            <LetterTile letters="Y" color={COLOR_HEX.Green} size={80} fontSize={32} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: Part 4: Blend & Say
    {
      stage: "Part 4: Blend & Say",
      time: "~4 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Blend & Say!</h2></span>
          <BlendRow parts={["m", "a", "t"]} result="mat" onZoom={onZoom} />
        </div>
      ),
    },
    // 7: Part 5: Mixed Challenge
    {
      stage: "Part 5: Mixed Challenge",
      time: "~4 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Mixed Challenge!</h2></span>
          <p className="slide-p">Identify a letter. Identify a color. Find a specific letter or color. Blend a simple word.</p>
        </div>
      ),
    },
    // 8: My Unit 3 Score!
    {
      stage: "Finish & Celebrate",
      time: "~3 min",
      body: (
        <div className="center-col">
          <div className="score-stars">
            <StarIcon size={40} fill="var(--sun)" />
            <StarIcon size={40} fill="var(--sun)" />
            <StarIcon size={40} fill="var(--sun)" />
          </div>
          <span className="title-highlight"><h2 className="slide-h sub">My Unit 3 Score!</h2></span>
          <div className="letter-row">
            <LetterTile letters="Ss" color={LETTER_COLOR.S} size={38} fontSize={15} onZoom={onZoom} />
            <LetterTile letters="Tt" color={LETTER_COLOR.T} size={38} fontSize={15} onZoom={onZoom} />
            <LetterTile letters="Uu" color={LETTER_COLOR.U} size={38} fontSize={15} onZoom={onZoom} />
            <LetterTile letters="Vv" color={LETTER_COLOR.V} size={38} fontSize={15} onZoom={onZoom} />
            <LetterTile letters="Ww" color={LETTER_COLOR.W} size={38} fontSize={15} onZoom={onZoom} />
            <LetterTile letters="Xx" color={LETTER_COLOR.X} size={38} fontSize={15} onZoom={onZoom} />
            <LetterTile letters="Yy" color={LETTER_COLOR.Y} size={38} fontSize={15} onZoom={onZoom} />
            <LetterTile letters="Zz" color={LETTER_COLOR.Z} size={38} fontSize={15} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 9: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <div className="center-col">
          <StarIcon size={48} fill="var(--sun)" />
          <h2 className="slide-h sub">You Did It!</h2>
          <p className="slide-p">Unit 3 complete! You know Ss to Zz, eight colors, and you can blend simple words. On to Unit 4!</p>
        </div>
      ),
    },
  ];
}

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&family=Fredoka:wght@600;700&display=swap');

:root {
  --coral: #FF6B4A; --coral-deep: #E0502F; --coral-light: #FFE6DD;
  --sun: #F2A900; --navy: #1B2A4A; --navy-soft: #5A6B92; --navy-light: #E4E9F5;
  --ink: #2B2438; --ink-soft: #736A87;
}

.hal-wrap { min-height: 100vh; width: 100%; background: #EDE7F6; color: var(--ink); font-family: 'Quicksand', sans-serif; padding: 1cm; box-sizing: border-box; display: flex; align-items: center; justify-content: center; }
.hal-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 24px 50px rgba(27,42,74,0.22);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/a1-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/a1-shared/slide-bg-v3.jpg'); background-position: center; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.15); color: var(--navy); }

.slide-header {
  flex-shrink: 0; position: relative; z-index: 2;
  padding: 20px 26px 0; display: flex; align-items: center; justify-content: space-between;
}

.brand-bubble { position: relative; z-index: 1; display: flex; align-items: center; gap: 0; background: #fff; border-radius: 999px; padding: 6px 16px 6px 8px; box-shadow: 0 3px 8px rgba(0,0,0,0.2); }
.brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.brand-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--navy); }

.stage-chip { position: relative; z-index: 1; display: flex; align-items: center; gap: 8px; background: #fff; padding: 7px 16px; border-radius: 999px; box-shadow: 0 3px 8px rgba(27,42,74,0.15); }
.stage-name { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: var(--navy); letter-spacing: 0.02em; }

.slide-body { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 22px 44px; position: relative; z-index: 1; gap: 14px; }

.slide-footer {
  flex-shrink: 0; position: relative; z-index: 2;
  padding: 0 26px 20px; display: flex; align-items: center; justify-content: space-between;
}
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.nav-btn.is-off, .nav-btn:disabled { opacity: 0.32; box-shadow: 0 1px 2px rgba(27,42,74,0.1) inset; cursor: default; }
.progress-track { display: flex; align-items: center; gap: 7px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.part-badge { width: 22px; height: 22px; border-radius: 50%; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 12px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
.last-tag { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 10.5px; color: #fff; background: var(--coral); border-radius: 999px; padding: 2px 8px; letter-spacing: 0.02em; }
.slide-body.has-instruction { padding-top: 74px; }
.slide-instruction { position: absolute; top: 30px; left: 26px; max-width: 640px; display: flex; align-items: center; justify-content: flex-start; gap: 16px; flex-wrap: wrap; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 16px; color: var(--navy); background: #fff; border-radius: 999px; padding: 8px 20px; box-shadow: 0 4px 12px rgba(27,42,74,0.12); z-index: 2; text-align: left; }
.instr-step { display: inline-flex; align-items: center; gap: 7px; }
.instr-icon { font-size: 20px; line-height: 1; }
.slide-guide { display: inline-flex; align-items: center; gap: 10px; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 18px; color: var(--coral-deep); background: var(--coral-light); border: 2.5px dashed var(--coral); border-radius: 16px; padding: 6px 18px; position: relative; z-index: 1; }
.guide-label { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #fff; background: var(--coral); border-radius: 999px; padding: 2px 9px; }
.guide-blank { display: inline-block; width: 64px; border-bottom: 3px solid var(--coral-deep); margin: 0 4px; vertical-align: -3px; }
.big-question { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 72px; line-height: 1; color: var(--coral); background: #fff; width: 110px; height: 110px; border-radius: 28px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(27,42,74,0.14); }
.bin-hint { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 28px; color: #C9C2DD; min-height: 46px; display: flex; align-items: center; }
.dot.part-start { margin-left: 8px; }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }

.title-highlight { position: relative; display: inline-block; }
.title-highlight::before { content: ""; position: absolute; left: -12px; right: -12px; top: 34%; bottom: 18%; background: #FFD066; opacity: 0.85; transform: rotate(-1.4deg); border-radius: 4px; z-index: 0; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 46px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 36px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 16px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.title-content { width: 100%; padding-left: 230px; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
.title-h { text-align: left; font-size: 38px; }
.title-p { text-align: left; max-width: 300px; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 14px; }
.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.letter-row { display: flex; gap: 14px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.match-pair { display: flex; align-items: center; gap: 10px; }
.match-plus { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; color: var(--ink-soft); }

.word-row { display: flex; gap: 16px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 17px; color: var(--navy); }

.swatch { border-radius: 20px; cursor: zoom-in; box-shadow: 0 0 0 5px #fff, 0 8px 18px rgba(27,42,74,0.16); transition: transform 0.15s ease; flex-shrink: 0; }
.swatch:hover { transform: scale(1.04); }
.zoom-swatch { width: 260px; height: 260px; border-radius: 46px; }

.blend-row { display: flex; align-items: center; gap: 10px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.blend-plus { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 28px; color: var(--ink-soft); }
.blend-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 34px; color: var(--navy); background: #fff; padding: 10px 24px; border-radius: 16px; box-shadow: 0 6px 14px rgba(27,42,74,0.12); text-transform: lowercase; }

.score-stars { display: flex; gap: 8px; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
`;
