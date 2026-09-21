import React, { useEffect, useState } from "react";

function WordCard({ word, gloss }) {
  return (
    <div className="word-card">
      <span className="word-term">{word}</span>
      <span className="word-gloss">{gloss}</span>
    </div>
  );
}

export default function AdultsHelloImLesson() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const styleId = "ahi-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".ahi-wrap");
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
    <div className="ahi-wrap">
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
  { stage: "New Words", time: "~3 min", note: "Introduce name, from, and country." },
  { stage: "Let's Talk", time: "~5 min", note: "Model subject pronouns + to be, and the pattern I'm from + country." },
  { stage: "In Context", time: "~5 min", note: "Show the pattern in a realistic introduction between two adults." },
  { stage: "Practice", time: "~5 min", note: "Controlled practice filling in am/is/are." },
  { stage: "Your Turn", time: "~5 min", note: "Student introduces themselves with their own name and country." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides() {
  return [
    // 1: Title
    {
      stage: "Unit 1 · Lesson 1",
      body: (
        <div className="title-content">
          <div className="title-eyebrow">A1 &middot; Sprout</div>
          <h1 className="title-h">Hello, I&apos;m&hellip;</h1>
          <p className="title-p">Introduce yourself: your name and where you&apos;re from.</p>
        </div>
      ),
    },
    // 2: New Words
    {
      stage: "New Words",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">A Few Words First</h2>
          <p className="slide-p">You&apos;ll need these to introduce yourself</p>
          <div className="word-grid">
            <WordCard word="name" gloss="What people call you" />
            <WordCard word="from" gloss="Where you were born or live" />
            <WordCard word="country" gloss="Canada, Kenya, Vietnam, Poland..." />
          </div>
        </div>
      ),
    },
    // 3: Let's Talk (grammar)
    {
      stage: "Let's Talk",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">I Am, You Are, She Is</h2>
          <p className="slide-p">Subject pronoun + the verb "to be"</p>
          <div className="grammar-table">
            <div className="gt-row"><span className="gt-pro">I</span><span className="gt-verb">am</span><span className="gt-ex">I&apos;m Daniel.</span></div>
            <div className="gt-row"><span className="gt-pro">You</span><span className="gt-verb">are</span><span className="gt-ex">You&apos;re from Brazil.</span></div>
            <div className="gt-row"><span className="gt-pro">He / She</span><span className="gt-verb">is</span><span className="gt-ex">She&apos;s from Morocco.</span></div>
          </div>
          <p className="grammar-note">Pattern: I&apos;m from + country.</p>
        </div>
      ),
    },
    // 4: In Context
    {
      stage: "In Context",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Meeting Someone New</h2>
          <p className="slide-p">Notice the pattern</p>
          <div className="dialogue-col">
            <div className="d-row">
              <span className="d-name">Daniel</span>
              <p className="d-line">Hi, I don&apos;t think we&apos;ve met. I&apos;m Daniel.</p>
            </div>
            <div className="d-row d-me">
              <span className="d-name">Fatima</span>
              <p className="d-line">Hi Daniel, I&apos;m Fatima. Nice to meet you.</p>
            </div>
            <div className="d-row">
              <span className="d-name">Daniel</span>
              <p className="d-line">Where are you from, Fatima?</p>
            </div>
            <div className="d-row d-me">
              <span className="d-name">Fatima</span>
              <p className="d-line">I&apos;m from Morocco. And you?</p>
            </div>
            <div className="d-row">
              <span className="d-name">Daniel</span>
              <p className="d-line">I&apos;m from Brazil.</p>
            </div>
          </div>
        </div>
      ),
    },
    // 5: Practice
    {
      stage: "Practice",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Fill in Am, Is, or Are</h2>
          <p className="slide-p">Use the dialogue above if you need a reminder</p>
          <div className="practice-list">
            <div className="practice-row"><span>1. I</span><span className="p-blank"></span><span>Daniel.</span></div>
            <div className="practice-row"><span>2. She</span><span className="p-blank"></span><span>from Brazil.</span></div>
            <div className="practice-row"><span>3. They</span><span className="p-blank"></span><span>from Canada.</span></div>
          </div>
        </div>
      ),
    },
    // 6: Your Turn
    {
      stage: "Your Turn",
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Introduce Yourself</h2>
          <p className="slide-p">Say it out loud, in your own words</p>
          <div className="frame-card">
            <p className="frame-line">Hi, I&apos;m <span className="blank blank--med"></span>.</p>
            <p className="frame-line">I&apos;m from <span className="blank blank--med"></span>.</p>
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
          <p className="slide-p">You can now introduce yourself with your name and where you&apos;re from. Next: talking about your job.</p>
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

.ahi-wrap {
  min-height: 100vh; width: 100%; background: #F3EEE6; color: var(--ink);
  font-family: 'Inter', sans-serif; padding: 1cm; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center;
}
.ahi-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 22px; box-shadow: 0 20px 44px rgba(27,42,74,0.20);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/adults-a1-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/adults-a1-shared/slide-bg.jpg'); background-position: center; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 28px; height: 28px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.14); color: var(--navy); }

.slide-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 22px 0; position: relative; z-index: 2; }
.brand-bubble { display: flex; align-items: center; gap: 6px; background: #fff; border-radius: 999px; padding: 5px 14px 5px 6px; box-shadow: 0 2px 8px rgba(27,42,74,0.14); }
.brand-logo { width: 22px; height: 22px; border-radius: 50%; }
.brand-word { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 13.5px; color: var(--navy); }
.pennant { background: #fff; border-radius: 999px; padding: 6px 16px; box-shadow: 0 2px 8px rgba(27,42,74,0.14); }
.pennant-text { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 0.02em; color: var(--navy); }

.slide-body { flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px 30px; position: relative; z-index: 2; }

.title-content { padding: 40px 40px 40px 250px; width: 100%; }
.title-eyebrow { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--coral-deep); margin-bottom: 10px; }
.title-h { font-family: 'Fraunces', serif; font-weight: 600; font-size: 38px; color: var(--navy); margin: 0 0 12px; line-height: 1.05; }
.title-p { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: var(--ink-soft); max-width: 320px; line-height: 1.55; }

.stage-col { width: 100%; text-align: center; }
.slide-h { font-family: 'Fraunces', serif; font-weight: 600; font-size: 25px; color: var(--navy); margin: 0 0 6px; }
.slide-p { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--ink-soft); font-weight: 500; margin: 0 0 18px; }

.word-grid { display: flex; gap: 12px; justify-content: center; }
.word-card { background: rgba(255,255,255,0.95); border-radius: 12px; padding: 16px 14px; width: 150px; box-shadow: 0 2px 10px rgba(27,42,74,0.08); display: flex; flex-direction: column; gap: 6px; }
.word-term { font-family: 'Fraunces', serif; font-weight: 600; font-size: 17px; color: var(--coral-deep); }
.word-gloss { font-size: 11px; color: var(--ink-soft); font-weight: 500; line-height: 1.4; }

.grammar-table { display: flex; flex-direction: column; gap: 8px; max-width: 420px; margin: 0 auto 12px; background: rgba(255,255,255,0.95); border-radius: 14px; padding: 14px 18px; box-shadow: 0 2px 10px rgba(27,42,74,0.08); }
.gt-row { display: grid; grid-template-columns: 70px 50px 1fr; align-items: center; gap: 10px; text-align: left; padding: 4px 0; }
.gt-pro { font-weight: 700; font-size: 13px; color: var(--navy); }
.gt-verb { font-weight: 700; font-size: 13px; color: var(--coral-deep); }
.gt-ex { font-size: 13px; color: var(--ink); font-weight: 500; }
.grammar-note { font-size: 12.5px; color: var(--ink-soft); font-weight: 600; margin: 0; }

.dialogue-col { display: flex; flex-direction: column; gap: 8px; max-width: 440px; margin: 0 auto; text-align: left; background: rgba(255,255,255,0.95); border-radius: 14px; padding: 14px 20px; box-shadow: 0 2px 10px rgba(27,42,74,0.08); }
.d-row { padding: 5px 0; border-bottom: 1px dashed var(--navy-light); }
.d-row:last-child { border-bottom: none; }
.d-name { font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--navy-soft); }
.d-line { margin: 2px 0 0; font-size: 13.5px; font-weight: 500; color: var(--ink); }
.d-me .d-line { color: var(--navy); font-weight: 600; }

.practice-list { display: flex; flex-direction: column; gap: 10px; max-width: 340px; margin: 0 auto; }
.practice-row { display: flex; align-items: center; gap: 8px; justify-content: center; font-size: 14px; font-weight: 600; color: var(--ink); background: rgba(255,255,255,0.95); border-radius: 12px; padding: 10px 16px; box-shadow: 0 2px 10px rgba(27,42,74,0.08); }
.p-blank { display: inline-block; width: 44px; border-bottom: 2px solid var(--coral-deep); height: 14px; }

.frame-card { background: rgba(255,255,255,0.95); border-radius: 14px; padding: 20px 24px; max-width: 340px; margin: 0 auto; box-shadow: 0 2px 10px rgba(27,42,74,0.08); display: flex; flex-direction: column; gap: 10px; }
.frame-line { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 15px; color: var(--ink); margin: 0; }
.blank { display: inline-block; min-width: 46px; border-bottom: 2px solid var(--coral-deep); }
.blank--med { min-width: 90px; }

.slide-footer { display: flex; align-items: center; justify-content: space-between; padding: 0 22px 20px; position: relative; z-index: 2; }
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 13px; padding: 11px 20px; border-radius: 12px; border: none; cursor: pointer; background: #fff; color: var(--navy); box-shadow: 0 2px 8px rgba(27,42,74,0.12); }
.nav-btn.is-off { opacity: 0.4; cursor: default; box-shadow: none; }
.nav-btn.next { background: var(--coral); color: #fff; box-shadow: 0 4px 14px rgba(196,72,46,0.35); }
.progress-track { display: flex; align-items: center; gap: 6px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.dot.on { width: 20px; border-radius: 5px; background: var(--coral); }
`;
