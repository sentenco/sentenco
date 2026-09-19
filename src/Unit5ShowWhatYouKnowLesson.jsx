import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

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

export default function Unit5ShowWhatYouKnowLesson() {
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
  { stage: "Unit 5 · Lesson 5", time: null, note: null },
  { stage: "Hello & Free Start", time: "~3 min", note: "Greet the student naturally. Have a short, relaxed exchange without showing or reviewing the target answers first." },
  { stage: "What Do You See?", time: "~4 min", note: "Show an unfamiliar family picture. Let the student identify any family members they recognize. Do not guide them in order. Fast learner? Add What Do You See? 3 and 4 (+2 min)." },
  { stage: "My Family, My Way", time: "~4 min", note: "Show four family-member pictures in a mixed arrangement. Say \"Tell me about them.\" Let the student choose who to introduce first. Fast learner? Add Tell Me About Them! 2 (+1 min)." },
  { stage: "Family Detective", time: "~4 min", note: "Give the student a new family scene. Ask open prompts. Provide support only when necessary. Fast learner? Add Detective Again! (+1 min)." },
  { stage: "Build My Family!", time: "~3 min", note: "Student creates their own pretend family picture by choosing characters and placing them in a scene." },
  { stage: "Build My Family!", time: "~3 min", note: "They introduce each chosen character using whatever language they remember. Fast learner? Add Add One More! 2 (+1 min)." },
  { stage: "My Family Story", time: "~4 min", note: "Remove the visual sentence prompts. Say \"Tell me about your family.\" Celebrate their effort and finish with goodbye. Fast learner? Do My Family Story Again!, with no photo to help (+2 min)." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 5 · Lesson 5",
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Show What You Know!</h1></span>
          <p className="slide-p title-p">Free practice: mom, dad, sister, brother, and "This is my..."</p>
        </div>
      ),
    },
    // 2: Hello & Free Start
    {
      stage: "Hello & Free Start",
      part: "A",
      instruction: [["👋", "Say hello."], ["🗣️", "Tell me about your family."]],
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Hello!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 400 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hi! Tell me about your family.</div>
            </div>
          </div>
        </div>
      ),
    },
    // 3: What Do You See?
    {
      stage: "What Do You See?",
      part: "B",
      instruction: [["👀", "Look at the pictures."], ["🗣️", "Say who you see."]],
      guide: "I see my ___.",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">What Do You See?</h2></span>
          <div className="word-row">
            <Pic src="/curriculum/u5-family/mom.jpg" label="mom" size={150} onZoom={onZoom} />
            <Pic src="/curriculum/u5-family/brother.jpg" label="brother" size={150} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 3b: What Do You See? continued
    {
      stage: "What Do You See?",
      part: "B",
      instruction: [["👀", "Look at the pictures."], ["🗣️", "Say who you see."]],
      guide: "I see my ___.",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">What Else?</h2></span>
          <div className="word-row">
            <Pic src="/curriculum/u5-family/dad.jpg" label="dad" size={150} onZoom={onZoom} />
            <Pic src="/curriculum/u5-family/sister.jpg" label="sister" size={150} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    {
      stage: "What Do You See?",
      part: "B",
      title: "What Do You See? 3",
      instruction: [["👀", "Look at the pictures."], ["🗣️", "Say who you see."]],
      guide: "I see my ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u5-family/sister.jpg" label="sister" size={150} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/mom.jpg" label="mom" size={150} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "What Do You See?",
      part: "B",
      title: "What Do You See? 4",
      instruction: [["👀", "Look at the pictures."], ["🗣️", "Say who you see."]],
      guide: "I see my ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u5-family/brother.jpg" label="brother" size={150} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/dad.jpg" label="dad" size={150} onZoom={onZoom} />
        </div>
      ),
    },
    // 4: My Family, My Way
    {
      stage: "My Family, My Way",
      part: "B",
      instruction: [["👆", "Pick a picture."], ["🗣️", "Tell me about them."]],
      guide: "This is my ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Tell Me About Them!</h2></span>
          <div className="word-row">
            <Pic src="/curriculum/u5-family/mom.jpg" label="mom" size={100} onZoom={onZoom} />
            <Pic src="/curriculum/u5-family/dad.jpg" label="dad" size={100} onZoom={onZoom} />
            <Pic src="/curriculum/u5-family/sister.jpg" label="sister" size={100} onZoom={onZoom} />
            <Pic src="/curriculum/u5-family/brother.jpg" label="brother" size={100} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "My Family, My Way",
      part: "B",
      title: "Tell Me About Them! 2",
      instruction: [["👆", "Pick a picture."], ["🗣️", "Tell me about them."]],
      guide: "This is my ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u5-family/brother.jpg" label="brother" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/sister.jpg" label="sister" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/dad.jpg" label="dad" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/mom.jpg" label="mom" size={100} onZoom={onZoom} />
        </div>
      ),
    },
    // 5: Family Detective
    {
      stage: "Family Detective",
      part: "C",
      instruction: [["🔍", "Find someone in the photo."], ["🗣️", "Introduce them."]],
      guide: "This is my ___.",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Family Detective!</h2></span>
          <Pic src="/curriculum/u5-family/family-scene.jpg" label="unknown family scene" size={200} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Family Detective",
      part: "C",
      title: "Detective Again!",
      instruction: [["🔍", "Find someone else."], ["🗣️", "Introduce them."]],
      guide: "This is my ___.",
      body: (
        <div className="center-col">
        <Pic src="/curriculum/u5-family/family-scene.jpg" label="family photo" size={200} onZoom={onZoom} />
        </div>
      ),
    },
    // 6: HIGHLIGHT Build My Family! (round 1)
    {
      stage: "Build My Family!",
      part: "C",
      instruction: [["👆", "Pick a family member."], ["🗣️", "Introduce them."]],
      guide: "This is my ___.",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">🏠 Build My Family!</h2></span>
        <div className="word-row">
          <Pic src="/curriculum/u5-family/mom.jpg" label="mom" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/dad.jpg" label="dad" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/sister.jpg" label="sister" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/brother.jpg" label="brother" size={100} onZoom={onZoom} />
        </div>
        </div>
      ),
    },
    // 7: HIGHLIGHT Build My Family! (round 2)
    {
      stage: "Build My Family!",
      part: "C",
      instruction: [["👆", "Pick one more family member."], ["🗣️", "Introduce them."]],
      guide: "This is my ___.",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Add One More!</h2></span>
        <div className="word-row">
          <Pic src="/curriculum/u5-family/brother.jpg" label="brother" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/sister.jpg" label="sister" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/mom.jpg" label="mom" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/dad.jpg" label="dad" size={100} onZoom={onZoom} />
        </div>
        </div>
      ),
    },
    {
      stage: "Build My Family!",
      part: "C",
      title: "Add One More! 2",
      instruction: [["👆", "Pick one more family member."], ["🗣️", "Introduce them."]],
      guide: "This is my ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u5-family/sister.jpg" label="sister" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/dad.jpg" label="dad" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/brother.jpg" label="brother" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/mom.jpg" label="mom" size={100} onZoom={onZoom} />
        </div>
      ),
    },
    // 8: My Family Story
    {
      stage: "My Family Story",
      part: "D",
      instruction: [["🗣️", "Tell me about your family."], ["🤔", "Say as much as you can!"]],
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">My Family Story!</h2></span>
        <Pic src="/curriculum/u5-family/family-scene.jpg" label="family photo" size={200} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "My Family Story",
      part: "D",
      title: "My Family Story Again!",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Tell me about your family."]],
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u5-family/dad.jpg" label="dad" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/brother.jpg" label="brother" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/mom.jpg" label="mom" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u5-family/sister.jpg" label="sister" size={100} onZoom={onZoom} />
        </div>
      ),
    },
    // 9: Great Job
    {
      stage: "Wrap-Up",
      body: (
        <WrapUp>You talked all about your family on your own!</WrapUp>
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
  padding: 0 36px 34px; display: flex; align-items: center; justify-content: space-between;
}
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.nav-btn.is-off, .nav-btn:disabled { opacity: 0.32; box-shadow: 0 1px 2px rgba(27,42,74,0.1) inset; cursor: default; }
.progress-track { display: flex; align-items: center; gap: 7px; }
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
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 44px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 36px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 17px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.title-content { width: 100%; padding-left: 230px; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
.title-h { text-align: left; font-size: 38px; }
.title-p { text-align: left; max-width: 300px; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.word-row { display: flex; gap: 18px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 26px; background: #fff; box-shadow: 0 0 0 5px #fff, 0 8px 18px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 10px; font-weight: 700; text-align: center; padding: 0 8px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 17px; color: var(--navy); }

.bubble-col { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; overflow: hidden; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: #fff; border-radius: 18px; padding: 13px 18px; font-weight: 700; font-size: 16px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
.bubble.left { border-radius: 18px 18px 18px 4px; }
.bubble.right { border-radius: 18px 18px 4px 18px; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
${wrapUpStyles}
`;
