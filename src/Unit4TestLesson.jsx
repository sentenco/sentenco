import React, { useEffect, useState } from "react";

const IMG1 = "/curriculum/u4-l1";
const IMG2 = "/curriculum/u4-l2";

const EMOTION_COLOR = { Happy: "#F2A900", Sad: "#4A90C2", Angry: "#E5484D", Tired: "#9B7FD4" };
const EMOTION_EMOJI = { Happy: "😊", Sad: "😢", Angry: "😠", Tired: "😴" };

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

function EmotionTile({ name, size = 100, onZoom }) {
  const color = EMOTION_COLOR[name];
  const emoji = EMOTION_EMOJI[name];
  const big = <div className="emo-tile zoom-emo-tile" style={{ background: color }}><span style={{ fontSize: 120 }}>{emoji}</span></div>;
  return (
    <div className="wc">
      <div className="emo-tile" style={{ background: color, width: size, height: size, fontSize: Math.round(size * 0.5) }} onClick={() => onZoom(big)}>
        {emoji}
      </div>
      <div className="word">{name}</div>
    </div>
  );
}

const PARTS = {
  A: { color: "#F2A900" },
  B: { color: "#2E97C7" },
  C: { color: "#22A67E" },
  D: { color: "#E0567A" },
};

export default function Unit4TestLesson() {
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
  { stage: "Unit 4 · Test", time: null, note: null },
  { stage: "Test Welcome", time: "~2 min", note: "Tell the student: \"Today is our Unit 4 Challenge!\" Explain there will be several small challenges. Do not review or teach before starting." },
  { stage: "Part 1: About Me", time: "~4 min", note: "Ask \"What's your name?\" and \"How old are you?\" Student answers independently using \"I am...\"" },
  { stage: "Part 2: Feelings Check", time: "~4 min", note: "Show different emotion faces. Student identifies the feeling and produces \"I am happy/sad/angry/tired.\"" },
  { stage: "Part 3: Word Check", time: "~4 min", note: "Show pictures of a cat, dog, and pen in random order. Student identifies each word without a model. Include \"Cat or dog?\"-style questions." },
  { stage: "Part 4: Tell Me About You", time: "~4 min", note: "Show a simple character/profile card containing an age and feeling. Ask the student to describe it, then ask \"What about you?\"" },
  { stage: "Part 5: All About Me Challenge", time: "~4 min", note: "Conduct a short, natural role-play. Student answers questions about name, age, and feelings, then identifies one or more pictures." },
  { stage: "Finish & Celebrate", time: "~3 min", note: "Give a final 3-item challenge covering \"I am...\", a feeling, and a vocabulary word. Record the results and finish positively." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 4 · Test",
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Unit 4 Challenge!</h1></span>
          <p className="slide-p title-p">Let's see everything you know: "I am...", age, feelings, and cat, dog, pen.</p>
        </div>
      ),
    },
    // 2: Test Welcome
    {
      stage: "Test Welcome",
      body: (
        <div className="center-col">
          <StarIcon size={44} fill="var(--sun)" />
          <span className="title-highlight"><h2 className="slide-h sub">You've Got This!</h2></span>
          <p className="slide-p">Today is our Unit 4 Challenge. Just do your best. There's no wrong way to try!</p>
        </div>
      ),
    },
    // 3: Part 1: About Me
    {
      stage: "Part 1: About Me",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">About Me!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What's your name? How old are you?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I am <span className="fill"></span>. I am <span className="fill"></span>.</div>
            </div>
          </div>
        </>
      ),
    },
    // 4: Part 2: Feelings Check
    {
      stage: "Part 2: Feelings Check",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Do You Feel?</h2></span>
          <div className="word-row">
            <EmotionTile name="Happy" size={70} onZoom={onZoom} />
            <EmotionTile name="Sad" size={70} onZoom={onZoom} />
            <EmotionTile name="Angry" size={70} onZoom={onZoom} />
            <EmotionTile name="Tired" size={70} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 5: Part 3: Word Check
    {
      stage: "Part 3: Word Check",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">What Is It?</h2></span>
          <div className="word-row">
            <Pic src={`${IMG2}/dog.jpg`} label="dog" size={90} onZoom={onZoom} />
            <Pic src="/curriculum/u4-l3/pen.png" label="pen" size={90} onZoom={onZoom} />
            <Pic src={`${IMG1}/cat.jpg`} label="cat" size={90} onZoom={onZoom} />
          </div>
          <p className="slide-p">Cat or dog?</p>
        </>
      ),
    },
    // 6: Part 4: Tell Me About You
    {
      stage: "Part 4: Tell Me About You",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Tell Me About You!</h2></span>
          <div className="word-row">
            <EmotionTile name="Happy" onZoom={onZoom} />
          </div>
          <p className="slide-p">This character is happy. What about you?</p>
        </>
      ),
    },
    // 7: Part 5: All About Me Challenge
    {
      stage: "Part 5: All About Me Challenge",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">All About Me Challenge!</h2></span>
          <p className="slide-p">Answer questions about your name, age, and feelings. Then identify a picture!</p>
        </div>
      ),
    },
    // 8: My Unit 4 Score!
    {
      stage: "Finish & Celebrate",
      body: (
        <div className="center-col">
          <div className="score-stars">
            <StarIcon size={40} fill="var(--sun)" />
            <StarIcon size={40} fill="var(--sun)" />
            <StarIcon size={40} fill="var(--sun)" />
          </div>
          <span className="title-highlight"><h2 className="slide-h sub">My Unit 4 Score!</h2></span>
          <div className="word-row">
            <Pic src={`${IMG1}/cat.jpg`} label="cat" size={54} onZoom={onZoom} />
            <Pic src={`${IMG2}/dog.jpg`} label="dog" size={54} onZoom={onZoom} />
            <Pic src="/curriculum/u4-l3/pen.png" label="pen" size={54} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 9: Great Job
    {
      stage: "Wrap-Up",
      body: (
        <div className="center-col">
          <StarIcon size={48} fill="var(--sun)" />
          <h2 className="slide-h sub">You Did It!</h2>
          <p className="slide-p">Unit 4 complete! You can say "I am...", share your age and feelings, and know cat, dog, and pen. On to Unit 5!</p>
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

.word-row { display: flex; gap: 18px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 26px; background: #fff; box-shadow: 0 0 0 5px #fff, 0 8px 18px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 10px; font-weight: 700; text-align: center; padding: 0 8px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 17px; color: var(--navy); }

.emo-tile {
  border-radius: 26px; flex-shrink: 0; cursor: zoom-in;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
  box-shadow: 0 0 0 5px #fff, 0 8px 18px rgba(27,42,74,0.16);
  transition: transform 0.15s ease;
}
.emo-tile:hover { transform: scale(1.04); }
.zoom-emo-tile { width: 240px; height: 240px; border-radius: 46px; display: flex; align-items: center; justify-content: center; }

.bubble-col { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; overflow: hidden; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: #fff; border-radius: 18px; padding: 12px 16px; font-weight: 700; font-size: 15px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
.bubble.left { border-radius: 18px 18px 18px 4px; }
.bubble.right { border-radius: 18px 18px 4px 18px; }
.bubble .fill { display: inline-block; min-width: 56px; border-bottom: 2.5px solid var(--coral-deep); vertical-align: -2px; }

.score-stars { display: flex; gap: 8px; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
`;
