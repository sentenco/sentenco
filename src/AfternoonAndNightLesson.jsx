import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const TIME_COLOR = { Morning: "#F2A900", Afternoon: "#FF6B4A", Night: "#5A6B92" };

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

function WordCard({ src, word, label, size, onZoom }) {
  return (
    <div className="wc">
      <Pic src={src} label={label} size={size} onZoom={onZoom} />
      <div className="word">{word}</div>
    </div>
  );
}

function TimeTag({ label, onZoom }) {
  const color = TIME_COLOR[label];
  const big = <div className="time-zoom" style={{ background: color }}>{label}</div>;
  return (
    <div className="time-tag" style={{ background: color }} onClick={() => onZoom(big)}>
      {label}
    </div>
  );
}

const PARTS = {
  A: { color: "#F2A900" },
  B: { color: "#2E97C7" },
  C: { color: "#22A67E" },
  D: { color: "#E0567A" },
};

const VERB_COLOR = {
  look: "#2E97C7", watch: "#2E97C7",
  say: "#E0502F", answer: "#E0502F", tell: "#E0502F", introduce: "#E0502F", give: "#E0502F",
  listen: "#8E6FCE",
  remember: "#22A67E", guess: "#22A67E",
  tap: "#D98A00", pick: "#D98A00", make: "#D98A00", put: "#D98A00", wave: "#D98A00", do: "#D98A00",
  point: "#D98A00", show: "#D98A00", match: "#D98A00", find: "#2E97C7", build: "#D98A00", blend: "#D98A00",
  count: "#22A67E", ask: "#E0502F", repeat: "#E0502F",
  read: "#D6478C",
};

function InstructionStep({ icon, text }) {
  const m = text.match(/^([A-Za-z]+)([\s\S]*)$/);
  const verb = m ? m[1] : "";
  let rest = m ? m[2] : text;
  const color = VERB_COLOR[verb.toLowerCase()];
  if (color) rest = /^[.!]\s*$/.test(rest) ? "" : rest.replace(/^:/, "");
  return (
    <span className="instr-step">
      <span className="instr-icon">{icon}</span>
      <span className="instr-text">
        {color ? <b className="instr-tag" style={{ background: color }}>{verb}</b> : null}
        {color ? rest : text}
      </span>
    </span>
  );
}

function CoverBadges({ stage }) {
  const m = stage.match(/Unit (\d+)(?: · | )(?:Lesson (\d+)|Test)/);
  if (!m) return null;
  const unit = m[1];
  const lesson = m[2] || "6";
  return (
    <>
      <div className="cover-ribbon"><span className="cr-label">LESSON</span><span className="cr-num">{lesson}</span></div>
      <div className={`unit-medal ${unit.length > 1 ? "is-long" : ""}`}><span className="um-label">UNIT</span><span className="um-num">{unit}</span></div>
    </>
  );
}

export default function AfternoonAndNightLesson() {
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

  useEffect(() => {
    if (i !== 0) return;
    const fit = () => {
      const h = document.querySelector(".slide .title-h");
      const box = document.querySelector(".slide .title-content");
      if (!h || !box) return;
      const avail = box.getBoundingClientRect().width - (parseFloat(getComputedStyle(box).paddingLeft) || 0);
      h.style.whiteSpace = "nowrap";
      let size = 50;
      h.style.fontSize = size + "px";
      while (h.getBoundingClientRect().width > avail && size > 26) {
        size -= 1;
        h.style.fontSize = size + "px";
      }
    };
    fit();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  }, [i]);

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
              <span className="brand-word">entenco</span>
            </div>
            <div className="stage-chip">
              {s.part && <span className="part-badge" style={{ background: PARTS[s.part].color }}>Part {s.part}</span>}
              <span className="stage-name">{s.stage}</span>
              {s.part && s.part === lastPart && <span className="last-tag">Last part!</span>}
            </div>
          </div>

          <div className={`slide-body ${s.instruction ? "has-instruction" : ""}`}>
            {s.instruction && (
              <div className="slide-instruction">
                {s.instruction.map(([icon, text]) => (
                  <InstructionStep key={text} icon={icon} text={text} />
                ))}
              </div>
            )}
            {i === 0 && <CoverBadges stage={s.stage} />}
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
  { stage: "Unit 12 · Lesson 2", time: null, note: null },
  { stage: "Morning Review", time: "~3 min", note: "Quickly review 3-4 morning routines using pictures and actions." },
  { stage: "Afternoon Time", time: "~4 min", note: "Introduce go home, play, eat dinner. Practice through pictures and actions. Fast learner? Add Afternoon Time! 2 in a new order (+1 min)." },
  { stage: "Night Time", time: "~3 min", note: "Introduce take a bath, go to bed, sleep. Fast learner? Add Night Time! 2 in a new order (+1 min)." },
  { stage: "Day or Night?", time: "~3 min", note: "Show routine pictures. Student decides: \"Morning!\" \"Afternoon!\" \"Night!\" Then says the action. Fast learner? Add Day or Night? 3, 4 and 5 (+3 min)." },
  { stage: "Day or Night Detective", time: "~4 min", note: "Give clues about a routine: \"It is dark.\" \"I am in my bed.\" Student identifies the routine." },
  { stage: "Day or Night Detective", time: "~3 min", note: "Switch to visual clues and let the student explain their choice. Fast learner? Add Day or Night Detective 3 and 4 (+2 min)." },
  { stage: "Mix & Match", time: "~4 min", note: "Mix morning, afternoon, and night pictures. Student sorts them into the correct part of the day. Fast learner? Add Mix & Match! 2 (+1 min)." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 12 · Lesson 2",
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Afternoon and Night!</h1></span>
          <p className="slide-p title-p">Today we learn the rest of the day!</p>
        </div>
      ),
    },
    // 2: Morning Review
    {
      stage: "Morning Review",
      part: "A",
      title: "Morning Review",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the morning action."]],
      guide: "I ___.",
      body: (
        <div className="word-row">
          <WordCard src="/curriculum/u12-routines/wake-up.jpg" word="Wake Up" label="wake up" onZoom={onZoom} />
          <WordCard src="/curriculum/u12-routines/eat.jpg" word="Eat" label="eat" onZoom={onZoom} />
        </div>
      ),
    },
    // 3: Afternoon Time
    {
      stage: "Afternoon Time",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the action."]],
      guide: "I ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Afternoon Time!</h2></span>
          <div className="word-row">
            <WordCard src="/curriculum/u12-routines/go-home.jpg" word="Go Home" label="go home" onZoom={onZoom} />
            <WordCard src="/curriculum/u12-routines/play.jpg" word="Play" label="play" onZoom={onZoom} />
            <WordCard src="/curriculum/u12-routines/eat-dinner.jpg" word="Eat Dinner" label="eat dinner" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Afternoon Time",
      part: "B",
      title: "Afternoon Time! 2",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the action."]],
      guide: "I ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u12-routines/eat-dinner.jpg" label="eat dinner" size={110} onZoom={onZoom} />
          <Pic src="/curriculum/u12-routines/go-home.jpg" label="go home" size={110} onZoom={onZoom} />
          <Pic src="/curriculum/u12-routines/play.jpg" label="play" size={110} onZoom={onZoom} />
        </div>
      ),
    },
    // 4: Night Time
    {
      stage: "Night Time",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the action."]],
      guide: "I ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Night Time!</h2></span>
          <div className="word-row">
            <WordCard src="/curriculum/u12-routines/take-a-bath.jpg" word="Take a Bath" label="take a bath" onZoom={onZoom} />
            <WordCard src="/curriculum/u12-routines/go-to-bed.jpg" word="Go to Bed" label="go to bed" onZoom={onZoom} />
            <WordCard src="/curriculum/u12-routines/sleep.jpg" word="Sleep" label="sleep" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Night Time",
      part: "B",
      title: "Night Time! 2",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the action."]],
      guide: "I ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u12-routines/sleep.jpg" label="sleep" size={110} onZoom={onZoom} />
          <Pic src="/curriculum/u12-routines/take-a-bath.jpg" label="take a bath" size={110} onZoom={onZoom} />
          <Pic src="/curriculum/u12-routines/go-to-bed.jpg" label="go to bed" size={110} onZoom={onZoom} />
        </div>
      ),
    },
    // 5: Day or Night? (round 1)
    {
      stage: "Day or Night?",
      part: "C",
      title: "Day or Night?",
      instruction: [["👀", "Look at the picture."], ["🗣️", "Say the time and the action."]],
      guide: "I ___.",
      body: (
        <div className="center-col">
          <WordCard src="/curriculum/u12-routines/sleep.jpg" word="Sleep" label="sleep" onZoom={onZoom} />
          <TimeTag label="Night" onZoom={onZoom} />
        </div>
      ),
    },
    // 5b: Day or Night? (round 2)
    {
      stage: "Day or Night?",
      part: "C",
      title: "Day or Night? 2",
      instruction: [["👀", "Look at the picture."], ["🗣️", "Say the time and the action."]],
      guide: "I ___.",
      body: (
        <div className="center-col">
          <WordCard src="/curriculum/u12-routines/play.jpg" word="Play" label="play" onZoom={onZoom} />
          <TimeTag label="Afternoon" onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Day or Night?",
      part: "C",
      title: "Day or Night? 3",
      instruction: [["👀", "Look at the picture."], ["🗣️", "Say the time and the action."]],
      guide: "I ___.",
      body: (
        <>
        <Pic src="/curriculum/u12-routines/go-home.jpg" label="go home" size={110} onZoom={onZoom} />
        <TimeTag label="Afternoon" onZoom={onZoom} />
        </>
      ),
    },
    {
      stage: "Day or Night?",
      part: "C",
      title: "Day or Night? 4",
      instruction: [["👀", "Look at the picture."], ["🗣️", "Say the time and the action."]],
      guide: "I ___.",
      body: (
        <>
        <Pic src="/curriculum/u12-routines/take-a-bath.jpg" label="take a bath" size={110} onZoom={onZoom} />
        <TimeTag label="Night" onZoom={onZoom} />
        </>
      ),
    },
    {
      stage: "Day or Night?",
      part: "C",
      title: "Day or Night? 5",
      instruction: [["👀", "Look at the picture."], ["🗣️", "Say the time and the action."]],
      guide: "I ___.",
      body: (
        <>
        <Pic src="/curriculum/u12-routines/wake-up.jpg" label="wake up" size={110} onZoom={onZoom} />
        <TimeTag label="Morning" onZoom={onZoom} />
        </>
      ),
    },
    // 6: HIGHLIGHT Day or Night Detective (round 1)
    {
      stage: "Day or Night Detective",
      part: "D",
      instruction: [["👂", "Listen to the clue."], ["🗣️", "Guess the action."]],
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Day or Night Detective!</h2></span>
          <div className="word-row">
          <Pic src="/curriculum/u12-routines/take-a-bath.jpg" label="take a bath" size={80} onZoom={onZoom} />
          <Pic src="/curriculum/u12-routines/go-to-bed.jpg" label="go to bed" size={80} onZoom={onZoom} />
          <Pic src="/curriculum/u12-routines/sleep.jpg" label="sleep" size={80} onZoom={onZoom} />
        </div>
        <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">It is dark. I am in my bed.</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Sleep!</div>
            </div>
          </div>
        </div>
      ),
    },
    // 7: HIGHLIGHT Day or Night Detective (round 2, visual clue)
    {
      stage: "Day or Night Detective",
      part: "D",
      title: "Day or Night Detective 2",
      instruction: [["👀", "Look at the picture."], ["🗣️", "Say the time of day."]],
      body: (
        <div className="center-col">
          <WordCard src="/curriculum/u12-routines/eat-dinner.jpg" word="Eat Dinner" label="eat dinner" onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Morning, afternoon, or night?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Afternoon!</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      stage: "Day or Night Detective",
      part: "D",
      title: "Day or Night Detective 3",
      instruction: [["👂", "Listen to the clue."], ["🗣️", "Guess the action."]],
      body: (
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I am in the water. I am clean.</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Take a bath!</div>
            </div>
          </div>
      ),
    },
    {
      stage: "Day or Night Detective",
      part: "D",
      title: "Day or Night Detective 4",
      instruction: [["👀", "Look at the picture."], ["🗣️", "Say the time of day."]],
      body: (
        <>
        <Pic src="/curriculum/u12-routines/go-home.jpg" label="go home" size={110} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Morning, afternoon, or night?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Afternoon!</div>
            </div>
          </div>
        </>
      ),
    },
    // 8: Mix & Match
    {
      stage: "Mix & Match",
      part: "D",
      instruction: [["👆", "Match each picture to its time."], ["🗣️", "Say the action."]],
      guide: "I ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Mix & Match!</h2></span>
          <div className="word-row">
          <WordCard src="/curriculum/u12-routines/go-to-bed.jpg" word="Go To Bed" label="go to bed" size={90} onZoom={onZoom} />
          <WordCard src="/curriculum/u12-routines/wake-up.jpg" word="Wake Up" label="wake up" size={90} onZoom={onZoom} />
          <WordCard src="/curriculum/u12-routines/go-home.jpg" word="Go Home" label="go home" size={90} onZoom={onZoom} />
        </div>
        <div className="word-row">
          <TimeTag label="Morning" onZoom={onZoom} />
          <TimeTag label="Afternoon" onZoom={onZoom} />
          <TimeTag label="Night" onZoom={onZoom} />
        </div>
        </>
      ),
    },
    {
      stage: "Mix & Match",
      part: "D",
      title: "Mix & Match! 2",
      instruction: [["👆", "Match each picture to its time."], ["🗣️", "Say the action."]],
      guide: "I ___.",
      body: (
        <>
        <div className="word-row">
          <WordCard src="/curriculum/u12-routines/sleep.jpg" word="Sleep" label="sleep" size={90} onZoom={onZoom} />
          <WordCard src="/curriculum/u12-routines/eat.jpg" word="Eat" label="eat" size={90} onZoom={onZoom} />
          <WordCard src="/curriculum/u12-routines/play.jpg" word="Play" label="play" size={90} onZoom={onZoom} />
        </div>
        <div className="word-row">
          <TimeTag label="Afternoon" onZoom={onZoom} />
          <TimeTag label="Night" onZoom={onZoom} />
          <TimeTag label="Morning" onZoom={onZoom} />
        </div>
        </>
      ),
    },
    // 9: Wrap-up
    {
      stage: "Wrap-Up",
      body: (
        <WrapUp>You know morning, afternoon, and night!</WrapUp>
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

.slide-body { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px 40px; position: relative; z-index: 1; gap: 12px; }

.slide-footer {
  flex-shrink: 0; position: relative; z-index: 2;
  padding: 0 36px 34px; display: flex; align-items: center; justify-content: space-between;
}
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.nav-btn.is-off, .nav-btn:disabled { opacity: 0.32; box-shadow: 0 1px 2px rgba(27,42,74,0.1) inset; cursor: default; }
.progress-track { display: flex; align-items: center; flex-wrap: nowrap; gap: 5px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.last-tag { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 10.5px; color: #fff; background: var(--coral); border-radius: 999px; padding: 2px 8px; letter-spacing: 0.02em; }
.slide-guide { display: inline-flex; align-items: center; gap: 10px; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 18px; color: var(--coral-deep); background: var(--coral-light); border: 2.5px dashed var(--coral); border-radius: 16px; padding: 6px 18px; position: relative; z-index: 1; }
.guide-label { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #fff; background: var(--coral); border-radius: 999px; padding: 2px 9px; }
.guide-blank { display: inline-block; width: 64px; border-bottom: 3px solid var(--coral-deep); margin: 0 4px; vertical-align: -3px; }
.big-question { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 72px; line-height: 1; color: var(--coral); background: #fff; width: 110px; height: 110px; border-radius: 28px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(27,42,74,0.14); }
.bin-hint { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 28px; color: #C9C2DD; min-height: 46px; display: flex; align-items: center; }
.dot.part-start { margin-left: 8px; }
.slide-body.has-instruction { padding-top: 98px; }
.slide-instruction { position: absolute; top: 44px; left: 50%; transform: translateX(-50%); width: max-content; max-width: 672px; display: flex; align-items: center; justify-content: center; gap: 18px; flex-wrap: wrap; font-family: 'Baloo 2', sans-serif; font-weight: 600; font-size: 18px; color: #fff; background: linear-gradient(180deg, #26386A, #1B2A4A); border-radius: 999px; padding: 7px 24px; box-shadow: 0 6px 0 rgba(10,18,40,0.35), 0 12px 20px rgba(27,42,74,0.2); z-index: 2; text-align: center; }
.slide-instruction .instr-tag { box-shadow: 0 0 0 2px rgba(255,255,255,0.85); }
.instr-step { display: inline-flex; align-items: center; gap: 8px; }
.instr-icon { font-size: 24px; line-height: 1; }
.instr-text { display: inline-flex; align-items: center; gap: 8px; }
.instr-tag { font-weight: 800; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; padding: 3px 11px; border-radius: 999px; }
.part-badge { height: 22px; padding: 0 10px; border-radius: 999px; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 11.5px; letter-spacing: 0.03em; white-space: nowrap; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }

.title-highlight { position: relative; display: inline-block; }
.title-highlight::before { content: ""; position: absolute; left: -12px; right: -12px; top: 34%; bottom: 18%; background: #FFD066; opacity: 0.85; transform: rotate(-1.4deg); border-radius: 4px; z-index: 0; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 40px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 28px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 16px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.title-content { width: 100%; padding-left: 230px; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
.title-h { text-align: left; font-size: 50px; }
.cover-ribbon { align-self: flex-start; margin-left: 230px; display: flex; align-items: center; gap: 12px; height: 54px; background: linear-gradient(180deg, #26386A, #1B2A4A); color: #fff; border-radius: 999px; padding: 0 6px 0 22px; box-shadow: 0 6px 0 rgba(10,18,40,0.3), 0 10px 18px rgba(27,42,74,0.2); position: relative; z-index: 2; }
.cover-ribbon .cr-label { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 16px; letter-spacing: 0.18em; }
.cover-ribbon .cr-num { width: 44px; height: 44px; border-radius: 50%; background: #FF6B4A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 30px; line-height: 1; }
.unit-medal { position: absolute; left: 40px; bottom: 26px; width: 128px; height: 128px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #FF8A6B, #E0502F); border: 8px solid #FFD066; box-shadow: 0 12px 24px rgba(27,42,74,0.28); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; transform: rotate(-6deg); z-index: 3; }
.unit-medal .um-label { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 14px; letter-spacing: 0.22em; margin-bottom: -8px; padding-left: 0.22em; }
.unit-medal .um-num { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 76px; line-height: 1; text-shadow: 0 4px 0 rgba(160,45,18,0.35); }
.unit-medal.is-long .um-num { font-size: 58px; }
.title-p { text-align: left; max-width: 300px; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 10px; }

.word-row { display: flex; gap: 12px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; align-items: center; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 22px; background: #fff; box-shadow: 0 0 0 4px #fff, 0 8px 18px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 9px; font-weight: 700; text-align: center; padding: 0 5px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13.5px; color: var(--navy); text-align: center; }

.time-tag { cursor: zoom-in; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 18px; color: #fff; padding: 12px 24px; border-radius: 16px; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.time-tag:hover { transform: scale(1.05); }
.time-zoom { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 40px; color: #fff; padding: 30px 56px; border-radius: 30px; }

.bubble-col { display: flex; flex-direction: column; gap: 8px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 9px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 10.5px; color: #fff; overflow: hidden; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: #fff; border-radius: 15px; padding: 9px 13px; font-weight: 700; font-size: 13.5px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
.bubble.left { border-radius: 15px 15px 15px 4px; }
.bubble.right { border-radius: 15px 15px 4px 15px; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
${wrapUpStyles}
`;
