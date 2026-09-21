import React, { useEffect, useState } from "react";

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

function StyleTile({ label, active }) {
  return <span className={`style-tile ${active ? "is-active" : ""}`}>{label}</span>;
}

export default function TeensMyStyleLesson() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const styleId = "tms-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".tms-wrap");
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
    <div className="tms-wrap">
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
            <div className="pennant">
              <span className="pennant-text">{s.stage}</span>
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
    </div>
  );
}

export const LESSON_GUIDE = [
  { stage: "Unit 1 · Lesson 1", time: null, note: null },
  { stage: "Style Words", time: "~5 min", note: "Introduce descriptive style adjectives: casual, sporty, classic, edgy, comfortable." },
  { stage: "Describe It", time: "~6 min", note: "Model a full sentence describing personal style using the new adjectives." },
  { stage: "A Few Styles", time: "~6 min", note: "Show 3 short style descriptions from different people so the pattern feels natural." },
  { stage: "Your Turn", time: "~6 min", note: "Student describes their own style in a couple of connected sentences." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides() {
  return [
    // 1: Title
    {
      stage: "Unit 1 · Lesson 1",
      body: (
        <div className="title-content">
          <div className="title-eyebrow">A2 &middot; Ablaze</div>
          <h1 className="title-h">My Style</h1>
          <p className="title-p">Learn the words to describe your own personal style.</p>
        </div>
      ),
    },
    // 2: Style vocabulary
    {
      stage: "Style Words",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">What's Your Style?</h2>
          <p className="slide-p">Words people use to describe how they dress</p>
          <div className="style-row">
            <StyleTile label="Casual" active />
            <StyleTile label="Sporty" active />
            <StyleTile label="Classic" active />
            <StyleTile label="Edgy" active />
            <StyleTile label="Comfortable" active />
          </div>
        </div>
      ),
    },
    // 3: Describe it - model sentence
    {
      stage: "Describe It",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Putting It Into Words</h2>
          <p className="slide-p">Notice the full sentence</p>
          <div className="msg-card">
            <div className="msg-sentence">My style is pretty <span className="hl">casual</span>. I usually wear comfortable clothes.</div>
          </div>
        </div>
      ),
    },
    // 4: A few examples
    {
      stage: "A Few Styles",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Everyone's a Little Different</h2>
          <p className="slide-p">Same pattern, different style</p>
          <div className="mini-log">
            <div className="mini-row"><span className="mini-a">My style is sporty. I like sneakers and hoodies.</span></div>
            <div className="mini-row"><span className="mini-a">I'd say my style is classic. I like simple, clean outfits.</span></div>
            <div className="mini-row"><span className="mini-a">My style is a bit edgy. I like darker colors and boots.</span></div>
          </div>
        </div>
      ),
    },
    // 5: Your turn
    {
      stage: "Your Turn",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Describe Your Style</h2>
          <p className="slide-p">Say it out loud, in your own words</p>
          <div className="frame-card">
            <div className="frame-line">My style is <span className="blank blank--wide"></span>. I usually wear <span className="blank blank--wide"></span>.</div>
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
          <p className="slide-p">You can now describe your own style. Next up: comparing your style to a friend's.</p>
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

.tms-wrap {
  min-height: 100vh; width: 100%; background: #F5EFE7; color: var(--ink);
  font-family: 'Quicksand', sans-serif; padding: 1cm; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center;
}
.tms-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 30px; box-shadow: 0 24px 50px rgba(27,42,74,0.22);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/teens-a2-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/teens-a2-shared/slide-bg.jpg'); background-position: center; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.15); color: var(--navy); }

.slide-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 22px 0; position: relative; z-index: 2; }
.brand-bubble { display: flex; align-items: center; gap: 6px; background: #fff; border-radius: 999px; padding: 5px 14px 5px 6px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.brand-logo { width: 22px; height: 22px; border-radius: 50%; }
.brand-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 14px; color: var(--navy); }
.pennant { background: #fff; border-radius: 999px; padding: 6px 16px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.pennant-text { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; color: var(--navy); }

.slide-body { flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px 30px; position: relative; z-index: 2; }

.title-content { padding: 40px 40px 40px 340px; width: 100%; }
.title-eyebrow { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--coral-deep); margin-bottom: 8px; }
.title-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 36px; color: var(--navy); margin: 0 0 12px; line-height: 1.05; }
.title-p { font-family: 'Quicksand', sans-serif; font-size: 14.5px; font-weight: 600; color: var(--ink-soft); max-width: 320px; line-height: 1.55; }

.stage-col { width: 100%; text-align: center; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; color: var(--navy); margin: 0 0 6px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 13px; color: var(--ink-soft); font-weight: 600; margin: 0 0 18px; }

.style-row { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; max-width: 480px; margin: 0 auto; }
.style-tile { display: inline-block; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 14px; color: var(--coral-deep); background: rgba(255,255,255,0.94); border: 1.5px solid var(--coral-light); padding: 9px 18px; border-radius: 999px; box-shadow: 0 4px 0 rgba(27,42,74,0.06); }

.msg-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 16px 22px; max-width: 400px; margin: 0 auto; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.msg-sentence { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14.5px; color: var(--ink); text-align: center; line-height: 1.55; }
.hl { background: var(--coral-light); color: var(--coral-deep); padding: 1px 6px; border-radius: 6px; }

.mini-log { display: flex; flex-direction: column; gap: 8px; max-width: 420px; margin: 0 auto; background: rgba(255,255,255,0.94); border-radius: 14px; padding: 14px 18px; box-shadow: 0 6px 0 rgba(27,42,74,0.06); text-align: left; }
.mini-row { padding: 8px 0; border-bottom: 1px dashed var(--navy-light); }
.mini-row:last-child { border-bottom: none; }
.mini-a { font-size: 13px; font-weight: 700; color: var(--navy); }

.frame-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 20px 24px; max-width: 400px; margin: 0 auto; box-shadow: 0 6px 0 rgba(27,42,74,0.06); }
.frame-line { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; color: var(--ink); line-height: 1.7; }
.blank { display: inline-block; min-width: 46px; border-bottom: 2px solid var(--coral-deep); }
.blank--wide { min-width: 90px; }

.slide-footer { display: flex; align-items: center; justify-content: space-between; padding: 0 22px 20px; position: relative; z-index: 2; }
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.is-off { opacity: 0.4; cursor: default; box-shadow: none; }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.progress-track { display: flex; align-items: center; gap: 6px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }
`;
