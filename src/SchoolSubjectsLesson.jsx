import React, { useEffect, useState } from "react";

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

function EmojiTile({ emoji, label, active }) {
  return (
    <div className={`emoji-tile ${active ? "is-active" : ""}`}>
      <span className="emoji-tile-glyph">{emoji}</span>
      <span className="emoji-tile-label">{label}</span>
    </div>
  );
}

export default function SchoolSubjectsLesson() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const styleId = "sv-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".sv-wrap");
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
    <div className="sv-wrap">
      <div className="deck-single">
        <div className={`slide ${i === 0 ? "slide--title" : "slide--regular"}`}>
          <button className="close-btn" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div className="slide-header">
            <div className="brand-bubble">
              <img className="brand-logo" src="/logo-sentivo.png" alt="" />
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
  { stage: "Getting Ready", time: "~3 min", note: "Recycle A1 classroom words (pencil, book) and link them to new school subject icons." },
  { stage: "Taking Off", time: "~5 min", note: "Introduce subject vocabulary with simple opinions: I like art because it is fun." },
  { stage: "Spot It From the Sky", time: "~7 min", note: "Read 4 short sentences about Ben's Monday and match each to a subject." },
  { stage: "Flight Log", time: "~6 min", note: "Student says 3 sentences about their own timetable using the prompt strip." },
  { stage: "Postcard Message", time: "~2 min", note: "Student completes: My favorite subject is ___ because ___." },
  { stage: "Landing", time: "~2 min", note: "Close with a mini digital timetable card and one caption sentence." },
];

function buildSlides() {
  return [
    // 1: Title / cover
    {
      stage: "A2 · Soar",
      body: (
        <div className="title-content">
          <div className="title-eyebrow">Unit 1 &middot; Lesson 1</div>
          <h1 className="title-h">School Subjects</h1>
          <p className="title-p">Say which school subjects you have, and give a simple opinion about them.</p>
        </div>
      ),
    },
    // 2: Getting Ready (Warm-up / recycle)
    {
      stage: "Getting Ready",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Ready to Fly?</h2>
          <p className="slide-p">You know these already. Let's find their new friends!</p>
          <div className="pair-row">
            <div className="pair-col">
              <div className="pair-label">You know</div>
              <EmojiTile emoji="✏️" label="pencil" />
              <EmojiTile emoji="📖" label="book" />
            </div>
            <div className="pair-arrow">→</div>
            <div className="pair-col">
              <div className="pair-label">Now let's learn</div>
              <EmojiTile emoji="🎨" label="art" active />
              <EmojiTile emoji="🔢" label="math" active />
            </div>
          </div>
        </div>
      ),
    },
    // 3: Taking Off (Language in context)
    {
      stage: "Taking Off",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">My Timetable</h2>
          <p className="slide-p">Notice how we give a reason</p>
          <div className="msg-card">
            <div className="msg-sentence">I like art <span className="hl">because</span> it is fun.</div>
          </div>
          <div className="msg-card msg-card--sub">
            <div className="msg-sentence">I don't like math <span className="hl">because</span> it is hard.</div>
          </div>
        </div>
      ),
    },
    // 4: Spot It From the Sky (Short text task)
    {
      stage: "Spot It From the Sky",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Ben's Monday</h2>
          <p className="slide-p">Read the note. Which subject is each line about?</p>
          <div className="spot-wrap">
            <div className="spot-note">
              <div className="spot-line"><b>1.</b> First, Ben has art class.</div>
              <div className="spot-line"><b>2.</b> Then he has math.</div>
              <div className="spot-line"><b>3.</b> After that, science.</div>
              <div className="spot-line"><b>4.</b> Finally, music!</div>
            </div>
            <div className="spot-col">
              <div className="spot-chip">🎨</div>
              <div className="spot-chip">🔢</div>
              <div className="spot-chip">🔬</div>
              <div className="spot-chip">🎵</div>
            </div>
          </div>
        </div>
      ),
    },
    // 5: Flight Log (Guided speaking/writing)
    {
      stage: "Flight Log",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">My Flight Log</h2>
          <p className="slide-p">Say 3 sentences about your own timetable</p>
          <div className="log-frame">
            <div className="log-row"><span className="log-num">1</span><span className="log-line">First, I have <span className="blank" /></span></div>
            <div className="log-row"><span className="log-num">2</span><span className="log-line">Then I have <span className="blank" /></span></div>
            <div className="log-row"><span className="log-num">3</span><span className="log-line">I like it <span className="blank" /> it is <span className="blank" /></span></div>
          </div>
        </div>
      ),
    },
    // 6: Postcard Message (Personalized task)
    {
      stage: "Postcard Message",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Send a Postcard</h2>
          <p className="slide-p">Finish the sentence about you</p>
          <div className="frame-card">
            <div className="frame-line">My favorite subject is <span className="blank blank--wide" /> because it is <span className="blank blank--wide" />.</div>
          </div>
        </div>
      ),
    },
    // 7: Landing (Review / mini-project)
    {
      stage: "Landing",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">My Timetable Card</h2>
          <p className="slide-p">You've landed! Here's your souvenir.</p>
          <div className="landing-card">
            <div className="stamp-mark"><StarIcon size={24} fill="#fff" /></div>
            <div className="landing-title">My Monday</div>
            <div className="landing-cap">"I like art because it is fun."</div>
          </div>
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

.sv-wrap {
  min-height: 100vh; width: 100%; background: #E9EEF7; color: var(--ink);
  font-family: 'Quicksand', sans-serif; padding: 1cm; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center;
}
.sv-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 30px; box-shadow: 0 24px 50px rgba(27,42,74,0.22);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/a2-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/a2-shared/slide-bg.jpg'); background-position: top right; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.15); color: var(--navy); }

.slide-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 22px 0; position: relative; z-index: 2; }
.brand-bubble { display: flex; align-items: center; gap: 6px; background: #fff; border-radius: 999px; padding: 5px 14px 5px 6px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.brand-logo { width: 22px; height: 22px; border-radius: 50%; }
.brand-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 14px; color: var(--navy); }
.pennant { background: #fff; border-radius: 999px; padding: 6px 16px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.pennant-text { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; color: var(--navy); }

.slide-body { flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px 30px; position: relative; z-index: 2; }

.title-content { padding: 40px 40px 40px 250px; width: 100%; }
.title-eyebrow { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--coral-deep); margin-bottom: 8px; }
.title-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 36px; color: var(--navy); margin: 0 0 12px; line-height: 1.05; }
.title-p { font-family: 'Quicksand', sans-serif; font-size: 14.5px; font-weight: 600; color: var(--ink-soft); max-width: 320px; line-height: 1.55; }

.stage-col { width: 100%; text-align: center; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 26px; color: var(--navy); margin: 0 0 6px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 13px; color: var(--ink-soft); font-weight: 600; margin: 0 0 20px; }

.msg-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 16px 22px; max-width: 400px; margin: 0 auto 10px; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.msg-card--sub { opacity: 0.85; }
.msg-sentence { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15px; color: var(--ink); text-align: center; line-height: 1.5; }
.hl { background: var(--coral-light); color: var(--coral-deep); padding: 1px 6px; border-radius: 6px; }

.pair-row { display: flex; align-items: center; justify-content: center; gap: 18px; }
.pair-col { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.pair-label { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; color: var(--navy-soft); margin-bottom: 2px; }
.pair-arrow { font-size: 22px; color: var(--navy-soft); }
.emoji-tile { background: rgba(255,255,255,0.9); border-radius: 14px; padding: 10px 16px; display: flex; align-items: center; gap: 8px; min-width: 110px; box-shadow: 0 3px 0 rgba(27,42,74,0.06); }
.emoji-tile.is-active { background: #fff; border: 2px solid var(--coral); }
.emoji-tile-glyph { font-size: 22px; }
.emoji-tile-label { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; color: var(--navy); }

.spot-wrap { display: flex; gap: 16px; justify-content: center; max-width: 460px; margin: 0 auto; }
.spot-note { flex: 1; background: rgba(255,255,255,0.94); border-radius: 14px; padding: 14px 18px; box-shadow: 0 6px 0 rgba(27,42,74,0.08); text-align: left; }
.spot-line { font-family: 'Quicksand', sans-serif; font-size: 12.5px; font-weight: 600; color: var(--ink); line-height: 1.7; padding: 3px 0; border-bottom: 1px dashed var(--navy-light); }
.spot-line:last-child { border-bottom: none; }
.spot-col { display: flex; flex-direction: column; gap: 8px; justify-content: center; }
.spot-chip { width: 44px; height: 40px; border-radius: 10px; background: #fff; box-shadow: 0 3px 0 rgba(27,42,74,0.08); display: flex; align-items: center; justify-content: center; font-size: 18px; }

.log-frame { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 18px 24px; max-width: 420px; margin: 0 auto; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.log-row { display: flex; align-items: baseline; gap: 10px; padding: 8px 0; border-bottom: 1px dashed var(--navy-light); text-align: left; }
.log-row:last-child { border-bottom: none; }
.log-num { flex-shrink: 0; width: 20px; height: 20px; border-radius: 50%; background: var(--navy-light); color: var(--navy); font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; display: flex; align-items: center; justify-content: center; }
.log-line { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px; color: var(--ink); }

.frame-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 20px 24px; max-width: 400px; margin: 0 auto; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.frame-line { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14.5px; color: var(--ink); line-height: 1.7; }

.blank { display: inline-block; min-width: 46px; border-bottom: 2px solid var(--coral-deep); }
.blank--wide { min-width: 80px; }

.landing-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 20px; max-width: 240px; margin: 0 auto; text-align: center; box-shadow: 0 8px 0 rgba(27,42,74,0.08); border: 2px dashed var(--sun); }
.stamp-mark { width: 52px; height: 52px; border-radius: 50%; background: var(--sun); display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; box-shadow: 0 0 0 4px #fff, 0 0 0 6px var(--sun); }
.landing-title { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 14px; color: var(--navy); margin-bottom: 4px; }
.landing-cap { font-family: 'Quicksand', sans-serif; font-size: 12px; color: var(--ink-soft); font-weight: 600; }

.slide-footer { display: flex; align-items: center; justify-content: space-between; padding: 0 22px 20px; position: relative; z-index: 2; }
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.is-off { opacity: 0.4; cursor: default; box-shadow: none; }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.progress-track { display: flex; align-items: center; gap: 6px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); transition: all 0.2s ease; }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }
`;
