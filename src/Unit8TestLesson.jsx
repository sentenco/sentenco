import React, { useEffect, useState } from "react";

const IMG = "/curriculum/u8-l1";
const BLEND_COLOR = "#8E6FCE";
const OP_COLOR = "#22A67E";

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

function PhotoIcon({ size = 42 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5-4 4-3-3-6 6" />
    </svg>
  );
}

function Pic({ src, label, size = 116, onZoom }) {
  const big = (
    <div className="zoom-pic">
      {src ? <img src={src} alt={label} /> : (
        <div className="zoom-ph">
          <PhotoIcon size={44} />
          <span>{label}</span>
        </div>
      )}
    </div>
  );
  return (
    <div className="pic" style={{ width: size, height: size }} onClick={() => onZoom(big)}>
      {src ? <img src={src} alt={label} draggable={false} /> : (
        <div className="pic-ph">
          <PhotoIcon size={typeof size === "number" ? Math.round(size * 0.22) : 26} />
          <span>{label}</span>
        </div>
      )}
    </div>
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

export default function Unit8TestLesson() {
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
              <span className="stage-name">{s.stage}</span>
            </div>
          </div>

          <div className="slide-body">{s.body}</div>

          <div className="slide-footer">
            <button className={`nav-btn ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="progress-track">
              {Array.from({ length: total }).map((_, idx) => (
                <span key={idx} className={`dot ${idx === i ? "on" : ""}`} />
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
  { stage: "Unit 8 Test", time: null, note: null },
  { stage: "1. Food Vocabulary Check", time: "~3 min", note: "Show mixed food pictures. Student names each food independently." },
  { stage: "2. My Food Choices", time: "~3 min", note: "Show several foods one at a time. Student responds using \"I like...\" or \"I don't like...\"" },
  { stage: "3. Like or Don't Like?", time: "~4 min", note: "Student sorts a mixed set of food pictures into LIKE / DON'T LIKE and explains each choice." },
  { stage: "4. Word Family Check", time: "~4 min", note: "Show mixed words: pin, fin, win, hop, mop, pop. Student reads/blends and identifies -in or -op." },
  { stage: "5. Food Talk", time: "~4 min", note: "Show an unfamiliar food scene. Ask open questions, avoid giving sentence models unless necessary." },
  { stage: "HIGHLIGHT: My Little Restaurant", time: "~3 min", note: "Student runs a tiny restaurant. Teacher orders food, asks about choices, student responds." },
  { stage: "HIGHLIGHT: My Little Restaurant", time: "~2 min", note: "Reverse roles: student asks the teacher about food." },
  { stage: "6. Final Challenge", time: "~2 min", note: "Show a completely new food picture/menu. Student independently identifies foods and expresses likes/dislikes." },
  { stage: "My Unit 8 Score!", time: null, note: "Scoring guide: Food Vocabulary /5, Likes & Dislikes /4, Word Families /6, Communication /5. Total /20." },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 8 Test",
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Unit 8 Test</h1></span>
          <p className="slide-p title-p">Let's see everything you learned about food!</p>
        </div>
      ),
    },
    // 2: Food Vocabulary Check
    {
      stage: "1. Food Vocabulary Check",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">What Is It?</h2></span>
          <div className="word-row">
            <Pic src={`${IMG}/apple.jpg`} label="apple" size={68} onZoom={onZoom} />
            <Pic src={`${IMG}/banana.jpg`} label="banana" size={68} onZoom={onZoom} />
            <Pic src={`${IMG}/pizza.avif`} label="pizza" size={68} onZoom={onZoom} />
            <Pic src="/curriculum/u8-l1/rice.jpg" label="rice" size={68} onZoom={onZoom} />
            <Pic src={`${IMG}/egg.jpg`} label="egg" size={68} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 3: My Food Choices (round 1)
    {
      stage: "2. My Food Choices",
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/pizza.avif`} label="pizza" size={100} onZoom={onZoom} />
          <p className="slide-p">Do you like it?</p>
        </div>
      ),
    },
    // 3b: My Food Choices (round 2)
    {
      stage: "2. My Food Choices",
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/egg.jpg`} label="egg" size={100} onZoom={onZoom} />
          <p className="slide-p">Do you like it?</p>
        </div>
      ),
    },
    // 4: Like or Don't Like?
    {
      stage: "3. Like or Don't Like?",
      body: (
        <>
          <div className="word-row">
            <Pic src={`${IMG}/apple.jpg`} label="apple" size={64} onZoom={onZoom} />
            <Pic src={`${IMG}/banana.jpg`} label="banana" size={64} onZoom={onZoom} />
            <Pic src={`${IMG}/pizza.avif`} label="pizza" size={64} onZoom={onZoom} />
            <Pic src={`${IMG}/egg.jpg`} label="egg" size={64} onZoom={onZoom} />
          </div>
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Sort the foods. Which ones do you like?</div>
            </div>
          </div>
        </>
      ),
    },
    // 5: Word Family Check
    {
      stage: "4. Word Family Check",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">-in or -op?</h2></span>
          <div className="word-row">
            <LetterTile letters="PIN" color={BLEND_COLOR} size={62} fontSize={17} onZoom={onZoom} />
            <LetterTile letters="HOP" color={OP_COLOR} size={62} fontSize={17} onZoom={onZoom} />
            <LetterTile letters="FIN" color={BLEND_COLOR} size={62} fontSize={17} onZoom={onZoom} />
            <LetterTile letters="MOP" color={OP_COLOR} size={62} fontSize={17} onZoom={onZoom} />
            <LetterTile letters="WIN" color={BLEND_COLOR} size={62} fontSize={17} onZoom={onZoom} />
            <LetterTile letters="POP" color={OP_COLOR} size={62} fontSize={17} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: Food Talk
    {
      stage: "5. Food Talk",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Tell Me About the Food!</h2></span>
          <Pic src="/curriculum/u8-scenes/breakfast.jpg" label="new food scene" size={180} onZoom={onZoom} />
        </div>
      ),
    },
    // 7: HIGHLIGHT My Little Restaurant (round 1)
    {
      stage: "HIGHLIGHT: My Little Restaurant",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">🍴 My Little Restaurant!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I would like pizza, please.</div>
            </div>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Do you have any apples?</div>
            </div>
          </div>
        </div>
      ),
    },
    // 8: HIGHLIGHT My Little Restaurant (round 2, switch)
    {
      stage: "HIGHLIGHT: My Little Restaurant",
      body: (
        <div className="center-col">
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Do you like rice?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Do you like eggs?</div>
            </div>
          </div>
        </div>
      ),
    },
    // 9: Final Challenge
    {
      stage: "6. Final Challenge",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Final Challenge!</h2></span>
          <Pic src="/curriculum/u8-scenes/lunch-plate.jpg" label="new food picture" size={180} onZoom={onZoom} />
        </div>
      ),
    },
    // 10: My Unit 8 Score!
    {
      stage: "My Unit 8 Score!",
      body: (
        <div className="center-col">
          <StarIcon size={48} fill="var(--sun)" />
          <h2 className="slide-h sub">My Unit 8 Score!</h2>
          <div className="score-table">
            <div className="score-row"><span>Food Vocabulary</span><span>/ 5</span></div>
            <div className="score-row"><span>Likes & Dislikes</span><span>/ 4</span></div>
            <div className="score-row"><span>Word Families</span><span>/ 6</span></div>
            <div className="score-row"><span>Communication</span><span>/ 5</span></div>
            <div className="score-row total"><span>Total</span><span>/ 20</span></div>
          </div>
          <p className="slide-p">Great work finishing Unit 8! See you in the next unit!</p>
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

.slide-body { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 22px 44px; position: relative; z-index: 1; gap: 16px; }

.slide-footer {
  flex-shrink: 0; position: relative; z-index: 2;
  padding: 0 26px 20px; display: flex; align-items: center; justify-content: space-between;
}
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.nav-btn.is-off, .nav-btn:disabled { opacity: 0.32; box-shadow: 0 1px 2px rgba(27,42,74,0.1) inset; cursor: default; }
.progress-track { display: flex; align-items: center; gap: 7px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }

.title-highlight { position: relative; display: inline-block; }
.title-highlight::before { content: ""; position: absolute; left: -12px; right: -12px; top: 34%; bottom: 18%; background: #FFD066; opacity: 0.85; transform: rotate(-1.4deg); border-radius: 4px; z-index: 0; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 42px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 32px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 16px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.title-content { width: 100%; padding-left: 230px; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
.title-h { text-align: left; font-size: 38px; }
.title-p { text-align: left; max-width: 300px; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 14px; }

.word-row { display: flex; gap: 16px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; align-items: center; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 24px; background: #fff; box-shadow: 0 0 0 5px #fff, 0 8px 18px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 9.5px; font-weight: 700; text-align: center; padding: 0 6px; }

.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.bubble-col { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; overflow: hidden; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: #fff; border-radius: 18px; padding: 12px 16px; font-weight: 700; font-size: 15px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
.bubble.left { border-radius: 18px 18px 18px 4px; }
.bubble.right { border-radius: 18px 18px 4px 18px; }

.score-table { display: flex; flex-direction: column; gap: 6px; width: 100%; max-width: 380px; background: #fff; border-radius: 18px; padding: 16px 22px; box-shadow: 0 8px 18px rgba(27,42,74,0.1); position: relative; z-index: 1; }
.score-row { display: flex; justify-content: space-between; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15px; color: var(--ink); padding: 5px 0; }
.score-row.total { border-top: 2px dashed var(--coral-light); margin-top: 4px; padding-top: 10px; color: var(--coral-deep); font-size: 17px; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
`;
