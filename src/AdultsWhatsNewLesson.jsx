import React, { useEffect, useState } from "react";

export default function AdultsWhatsNewLesson() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const styleId = "awn-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".awn-wrap");
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
    <div className="awn-wrap">
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
  { stage: "Warm-Up", time: "~3 min", note: "Get the student thinking about what's different in their week right now." },
  { stage: "Read It First", time: "~5 min", note: "Show a real text-message exchange before any grammar explanation." },
  { stage: "Notice the Language", time: "~5 min", note: "Pull the present continuous examples out of the text and name the pattern." },
  { stage: "Practice", time: "~5 min", note: "Controlled practice forming present continuous." },
  { stage: "Make It Yours", time: "~5 min", note: "Student writes their own short update." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides() {
  return [
    // 1: Title
    {
      stage: "Unit 1 · Lesson 1",
      body: (
        <div className="title-content">
          <div className="title-eyebrow">A2 &middot; Bloom</div>
          <h1 className="title-h">What&apos;s New?</h1>
          <p className="title-p">Talk about what you&apos;re doing these days, using the present continuous.</p>
        </div>
      ),
    },
    // 2: Warm-Up
    {
      stage: "Warm-Up",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Think About This Week</h2>
          <p className="slide-p">Before we look at the language</p>
          <div className="prompt-card">
            <p className="prompt-line">What&apos;s different about your week right now, compared to a normal week?</p>
          </div>
        </div>
      ),
    },
    // 3: Read It First
    {
      stage: "Read It First",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Catching Up</h2>
          <p className="slide-p">Read the messages first</p>
          <div className="thread-col">
            <div className="msg-row"><span className="msg-name">Lena</span><p className="msg-bubble">Hey! Haven&apos;t talked in a while. What&apos;s new?</p></div>
            <div className="msg-row msg-me"><span className="msg-name">Sam</span><p className="msg-bubble">Hi! Not much really. I&apos;m actually working from home this week, so that&apos;s different.</p></div>
            <div className="msg-row"><span className="msg-name">Lena</span><p className="msg-bubble">Nice. How&apos;s the new apartment?</p></div>
            <div className="msg-row msg-me"><span className="msg-name">Sam</span><p className="msg-bubble">Good! I&apos;m still unpacking boxes, but it&apos;s coming together.</p></div>
          </div>
        </div>
      ),
    },
    // 4: Notice the Language
    {
      stage: "Notice the Language",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">What Do You Notice?</h2>
          <p className="slide-p">Look at the underlined pattern in the messages</p>
          <div className="notice-list">
            <div className="notice-row"><span className="notice-ex">I&apos;m working from home this week.</span><span className="notice-tag">happening now / this period</span></div>
            <div className="notice-row"><span className="notice-ex">I&apos;m still unpacking boxes.</span><span className="notice-tag">happening now / this period</span></div>
          </div>
          <p className="grammar-note">am / is / are + verb-ing, used for something happening now, not a permanent routine.</p>
        </div>
      ),
    },
    // 5: Practice
    {
      stage: "Practice",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Complete the Update</h2>
          <p className="slide-p">Use the verb given, present continuous</p>
          <div className="practice-list">
            <div className="practice-row"><span>1. I</span><span className="p-blank"></span><span>a great book this week. (read)</span></div>
            <div className="practice-row"><span>2. She</span><span className="p-blank"></span><span>for a new job right now. (look)</span></div>
            <div className="practice-row"><span>3. We</span><span className="p-blank"></span><span>a new gym this month. (try)</span></div>
          </div>
        </div>
      ),
    },
    // 6: Make It Yours
    {
      stage: "Make It Yours",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Give Your Own Update</h2>
          <p className="slide-p">Write one or two sentences about what's going on for you right now</p>
          <div className="frame-card">
            <p className="frame-line">Right now, I&apos;m <span className="blank blank--wide"></span>.</p>
          </div>
        </div>
      ),
    },
    // 7: Wrap-Up
    {
      stage: "Wrap-Up",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Lesson Complete</h2>
          <p className="slide-p">You can now give a short update about what's going on in your life right now. Next: comparing what's usual with what's happening today.</p>
        </div>
      ),
    },
  ];
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --coral: #FF6B4A; --coral-deep: #C4482E; --coral-light: #FFE6DD;
  --navy: #1B2A4A; --navy-soft: #5A6B92; --navy-light: #E4E9F5;
  --ink: #23283A; --ink-soft: #6B7186;
}

.awn-wrap {
  min-height: 100vh; width: 100%; background: #F3EEE6; color: var(--ink);
  font-family: 'Inter', sans-serif; padding: 1cm; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center;
}
.awn-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 22px; box-shadow: 0 20px 44px rgba(27,42,74,0.20);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/adults-a2-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/adults-a2-shared/slide-bg.jpg'); background-position: center; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 28px; height: 28px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.14); color: var(--navy); }

.slide-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 22px 0; position: relative; z-index: 2; }
.brand-bubble { display: flex; align-items: center; gap: 6px; background: #fff; border-radius: 999px; padding: 5px 14px 5px 6px; box-shadow: 0 2px 8px rgba(27,42,74,0.14); }
.brand-logo { width: 22px; height: 22px; border-radius: 50%; }
.brand-word { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 13.5px; color: var(--navy); }
.pennant { background: #fff; border-radius: 999px; padding: 6px 16px; box-shadow: 0 2px 8px rgba(27,42,74,0.14); }
.pennant-text { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 0.02em; color: var(--navy); }

.slide-body { flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px 30px; position: relative; z-index: 2; }

.title-content { padding: 40px 40px 40px 320px; width: 100%; }
.title-eyebrow { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--coral-deep); margin-bottom: 10px; }
.title-h { font-family: 'Fraunces', serif; font-weight: 600; font-size: 38px; color: var(--navy); margin: 0 0 12px; line-height: 1.05; }
.title-p { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: var(--ink-soft); max-width: 320px; line-height: 1.55; }

.stage-col { width: 100%; text-align: center; }
.slide-h { font-family: 'Fraunces', serif; font-weight: 600; font-size: 25px; color: var(--navy); margin: 0 0 6px; }
.slide-p { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--ink-soft); font-weight: 500; margin: 0 0 18px; }

.prompt-card { background: rgba(255,255,255,0.95); border-radius: 14px; padding: 20px 26px; max-width: 380px; margin: 0 auto; box-shadow: 0 2px 10px rgba(27,42,74,0.08); }
.prompt-line { font-family: 'Fraunces', serif; font-weight: 500; font-style: italic; font-size: 16px; color: var(--navy); margin: 0; line-height: 1.4; }

.thread-col { display: flex; flex-direction: column; gap: 8px; max-width: 440px; margin: 0 auto; text-align: left; background: rgba(255,255,255,0.95); border-radius: 14px; padding: 14px 20px; box-shadow: 0 2px 10px rgba(27,42,74,0.08); max-height: 220px; overflow-y: auto; }
.msg-row { padding: 5px 0; border-bottom: 1px dashed var(--navy-light); }
.msg-row:last-child { border-bottom: none; }
.msg-name { font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--navy-soft); }
.msg-bubble { margin: 2px 0 0; font-size: 13.5px; font-weight: 500; color: var(--ink); }
.msg-me .msg-bubble { color: var(--navy); font-weight: 600; }

.notice-list { display: flex; flex-direction: column; gap: 8px; max-width: 440px; margin: 0 auto 12px; }
.notice-row { display: flex; flex-direction: column; gap: 3px; text-align: left; background: rgba(255,255,255,0.95); border-radius: 12px; padding: 10px 16px; box-shadow: 0 2px 10px rgba(27,42,74,0.08); }
.notice-ex { font-size: 13.5px; font-weight: 600; color: var(--navy); }
.notice-tag { font-size: 10.5px; font-weight: 600; letter-spacing: 0.03em; text-transform: uppercase; color: var(--coral-deep); }
.grammar-note { font-size: 12.5px; color: var(--ink-soft); font-weight: 500; margin: 0; max-width: 400px; margin-left: auto; margin-right: auto; }

.practice-list { display: flex; flex-direction: column; gap: 10px; max-width: 380px; margin: 0 auto; }
.practice-row { display: flex; align-items: center; gap: 8px; justify-content: center; font-size: 13.5px; font-weight: 600; color: var(--ink); background: rgba(255,255,255,0.95); border-radius: 12px; padding: 10px 16px; box-shadow: 0 2px 10px rgba(27,42,74,0.08); }
.p-blank { display: inline-block; width: 44px; border-bottom: 2px solid var(--coral-deep); height: 14px; }

.frame-card { background: rgba(255,255,255,0.95); border-radius: 14px; padding: 20px 24px; max-width: 360px; margin: 0 auto; box-shadow: 0 2px 10px rgba(27,42,74,0.08); }
.frame-line { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 15px; color: var(--ink); margin: 0; }
.blank { display: inline-block; min-width: 46px; border-bottom: 2px solid var(--coral-deep); }
.blank--wide { min-width: 130px; }

.slide-footer { display: flex; align-items: center; justify-content: space-between; padding: 0 22px 20px; position: relative; z-index: 2; }
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 13px; padding: 11px 20px; border-radius: 12px; border: none; cursor: pointer; background: #fff; color: var(--navy); box-shadow: 0 2px 8px rgba(27,42,74,0.12); }
.nav-btn.is-off { opacity: 0.4; cursor: default; box-shadow: none; }
.nav-btn.next { background: var(--coral); color: #fff; box-shadow: 0 4px 14px rgba(196,72,46,0.35); }
.progress-track { display: flex; align-items: center; gap: 6px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.dot.on { width: 20px; border-radius: 5px; background: var(--coral); }
`;
