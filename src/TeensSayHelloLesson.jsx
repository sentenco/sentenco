import React, { useEffect, useState } from "react";
import { CoverBadges } from "./TeensCoverBadges.jsx";

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

function Chip({ label, active }) {
  return <span className={`greet-chip ${active ? "is-active" : ""}`}>{label}</span>;
}

export default function TeensSayHelloLesson() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const styleId = "tsh-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".tsh-wrap");
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

  function exit() {
    window.close();
  }

  const slides = buildSlides();
  const total = slides.length;
  const s = slides[i];

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }

  return (
    <div className="tsh-wrap">
      <div className="deck-single">
        <div className={`slide ${i === 0 ? "slide--title" : "slide--regular"}`}>
          <button className="close-btn" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div className="slide-header">
            <div className="brand-bubble">
              <img className="brand-logo" src="/logo-sentenco.png" alt="" />
              <span className="brand-word">entenco</span>
            </div>
            {i !== 0 && (
              <div className="pennant">
                <span className="pennant-text">{s.stage}</span>
              </div>
            )}
          </div>

          <div className="slide-body">
            {i === 0 && <CoverBadges stage={s.stage} />}
            {s.body}
          </div>

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
    </div>
  );
}

export const LESSON_GUIDE = [
  { stage: "Unit 1 · Lesson 1", time: null, note: null },
  { stage: "Greetings", time: "~4 min", note: "Introduce the range from casual (Hey, Hi) to more neutral (Hello) greetings." },
  { stage: "Introduce Yourself", time: "~6 min", note: "Model the self-introduction pattern with a short dialogue exchange." },
  { stage: "Meet a Few People", time: "~6 min", note: "Show 3 varied intro exchanges with different names so the pattern feels natural, not memorized." },
  { stage: "Your Turn", time: "~6 min", note: "Student introduces themselves in their own words using the pattern." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides() {
  return [
    // 1: Title
    {
      stage: "Unit 1 · Lesson 1",
      body: (
        <div className="title-content">
          <h1 className="title-h">Say Hello</h1>
          <p className="title-p">Learn how to greet people and introduce yourself by name.</p>
        </div>
      ),
    },
    // 2: Greetings range
    {
      stage: "Greetings",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">How Do You Say Hi?</h2>
          <p className="slide-p">Different greetings for different moments</p>
          <div className="greet-row">
            <div className="greet-card">
              <Chip label="Hey" active />
              <p className="greet-note">Casual, for friends and people your age</p>
            </div>
            <div className="greet-card">
              <Chip label="Hi" active />
              <p className="greet-note">Friendly and easy, works almost anywhere</p>
            </div>
            <div className="greet-card">
              <Chip label="Hello" active />
              <p className="greet-note">A bit more neutral, for meeting someone new</p>
            </div>
          </div>
        </div>
      ),
    },
    // 3: Introduce yourself pattern
    {
      stage: "Introduce Yourself",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Nice to Meet You</h2>
          <p className="slide-p">Notice the pattern</p>
          <div className="bubble-col">
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hey, I don't think we've met. What's your name?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Hi, I'm <span className="fill"></span>. Nice to meet you!</div>
            </div>
          </div>
        </div>
      ),
    },
    // 4: A few more examples
    {
      stage: "Meet a Few People",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Same Pattern, Different People</h2>
          <p className="slide-p">The greeting changes, the pattern doesn't</p>
          <div className="mini-log">
            <div className="mini-row"><span className="mini-q">Hey, what's your name?</span><span className="mini-a">Hi, I'm Jordan.</span></div>
            <div className="mini-row"><span className="mini-q">Hi there, I'm new here.</span><span className="mini-a">Hey, I'm Priya. Welcome!</span></div>
            <div className="mini-row"><span className="mini-q">Hello, nice to meet you.</span><span className="mini-a">Hello, I'm Marcus. You too.</span></div>
          </div>
        </div>
      ),
    },
    // 5: Your turn
    {
      stage: "Your Turn",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Introduce Yourself</h2>
          <p className="slide-p">Say it out loud, in your own words</p>
          <div className="frame-card">
            <div className="frame-line">Hi, I'm <span className="blank blank--wide"></span>.</div>
          </div>
        </div>
      ),
    },
    // 6: Wrap-up
    {
      stage: "Wrap-Up",
      body: (
        <div className="stage-col">
          <StarIcon size={40} fill="var(--coral)" />
          <h2 className="slide-h">Nice Work!</h2>
          <p className="slide-p">You can now greet someone and introduce yourself by name. Next up: talking about where you're from.</p>
        </div>
      ),
    },
  ];
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&family=Fredoka:wght@600;700&display=swap');

:root {
  --coral: #FF6B4A; --coral-deep: #E0502F; --coral-light: #FFE6DD;
  --navy: #1B2A4A; --navy-soft: #5A6B92; --navy-light: #E4E9F5; --sun: #F2A900;
  --ink: #2B2438; --ink-soft: #736A87;
}

.tsh-wrap {
  min-height: 100vh; width: 100%; background: #F5EFE7; color: var(--ink);
  font-family: 'Quicksand', sans-serif; padding: 1cm; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center;
}
.tsh-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 30px; box-shadow: 0 24px 50px rgba(27,42,74,0.22);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/teens-a1-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/teens-a1-shared/slide-bg.jpg'); background-position: center; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.15); color: var(--navy); }

.slide-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 22px 0; position: relative; z-index: 2; }
.brand-bubble { display: flex; align-items: center; gap: 6px; background: #fff; border-radius: 999px; padding: 5px 14px 5px 6px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.brand-logo { width: 22px; height: 22px; border-radius: 50%; }
.brand-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 14px; color: var(--navy); }
.pennant { background: #fff; border-radius: 999px; padding: 6px 16px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.pennant-text { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; color: var(--navy); }

.slide-body { flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px 30px; position: relative; z-index: 2; }

.title-content { padding: 40px 40px 40px 250px; width: 100%; }
.cover-ribbon { position: absolute; top: 110px; left: 279px; display: flex; align-items: center; gap: 10px; height: 44px; background: linear-gradient(180deg, #26386A, #1B2A4A); color: #fff; border-radius: 999px; padding: 0 6px 0 18px; box-shadow: 0 5px 0 rgba(10,18,40,0.3), 0 8px 14px rgba(27,42,74,0.2); z-index: 4; }
.cover-ribbon .cr-label { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 13px; letter-spacing: 0.16em; }
.cover-ribbon .cr-num { width: 34px; height: 34px; border-radius: 50%; background: var(--coral); display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; line-height: 1; }
.unit-medal { position: absolute; left: 106px; top: 276px; width: 104px; height: 104px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #FF8A6B, var(--coral-deep)); border: 7px solid #FFD066; box-shadow: 0 10px 20px rgba(27,42,74,0.28); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; transform: rotate(-6deg); z-index: 4; }
.unit-medal .um-label { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.2em; margin-bottom: -6px; padding-left: 0.2em; }
.unit-medal .um-num { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 60px; line-height: 1; text-shadow: 0 3px 0 rgba(160,45,18,0.35); }
.unit-medal.is-long .um-num { font-size: 46px; }
.title-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 36px; color: var(--navy); margin: 0 0 12px; line-height: 1.05; }
.title-p { font-family: 'Quicksand', sans-serif; font-size: 14.5px; font-weight: 600; color: var(--ink-soft); max-width: 320px; line-height: 1.55; }

.stage-col { width: 100%; text-align: center; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; color: var(--navy); margin: 0 0 6px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 13px; color: var(--ink-soft); font-weight: 600; margin: 0 0 18px; }

.greet-row { display: flex; gap: 14px; justify-content: center; }
.greet-card { background: rgba(255,255,255,0.94); border-radius: 14px; padding: 14px; width: 150px; box-shadow: 0 6px 0 rgba(27,42,74,0.06); }
.greet-chip { display: inline-block; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 15px; color: var(--coral-deep); background: var(--coral-light); padding: 6px 16px; border-radius: 999px; margin-bottom: 8px; }
.greet-note { font-size: 11px; color: var(--ink-soft); font-weight: 600; line-height: 1.4; margin: 0; }

.bubble-col { display: flex; flex-direction: column; gap: 12px; max-width: 440px; margin: 0 auto; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 12px 16px; font-weight: 700; font-size: 13.5px; color: var(--ink); box-shadow: 0 6px 0 rgba(27,42,74,0.06); text-align: left; }
.bubble.left { border-radius: 16px 16px 16px 4px; }
.bubble.right { border-radius: 16px 16px 4px 16px; }
.bubble .fill { display: inline-block; min-width: 56px; border-bottom: 2px solid var(--coral-deep); }

.mini-log { display: flex; flex-direction: column; gap: 8px; max-width: 420px; margin: 0 auto; background: rgba(255,255,255,0.94); border-radius: 14px; padding: 14px 18px; box-shadow: 0 6px 0 rgba(27,42,74,0.06); text-align: left; }
.mini-row { display: flex; flex-direction: column; gap: 3px; padding: 6px 0; border-bottom: 1px dashed var(--navy-light); }
.mini-row:last-child { border-bottom: none; }
.mini-q { font-size: 12px; font-weight: 600; color: var(--ink-soft); }
.mini-a { font-size: 13px; font-weight: 700; color: var(--navy); }

.frame-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 20px 24px; max-width: 360px; margin: 0 auto; box-shadow: 0 6px 0 rgba(27,42,74,0.06); }
.frame-line { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15px; color: var(--ink); }
.blank { display: inline-block; min-width: 46px; border-bottom: 2px solid var(--coral-deep); }
.blank--wide { min-width: 100px; }

.slide-footer { display: flex; align-items: center; justify-content: space-between; padding: 0 22px 20px; position: relative; z-index: 2; }
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.is-off { opacity: 0.4; cursor: default; box-shadow: none; }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.progress-track { display: flex; align-items: center; gap: 6px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }
`;
