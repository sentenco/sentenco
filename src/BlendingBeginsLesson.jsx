import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const IMG = "/curriculum/u3-l3";

const LETTER_COLOR = { Y: "#C77D2E", Z: "#D6478C" };
const REVIEW_COLOR = { S: "#E0567A", U: "#22A67E", W: "#2BAFAF", X: "#F2A900" };
const BLEND_COLOR = "#2E97C7";

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

function WordCard({ src, word, label, size, onZoom }) {
  return (
    <div className="wc">
      <Pic src={src} label={label} size={size} onZoom={onZoom} />
      <div className="word">{word}</div>
    </div>
  );
}

function BlendRow({ parts, result, color = BLEND_COLOR, onZoom }) {
  return (
    <div className="blend-row">
      {parts.map((p, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <span className="blend-plus">+</span>}
          <LetterTile letters={p} color={color} size={62} fontSize={24} onZoom={onZoom} />
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

export default function BlendingBeginsLesson() {
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
  { stage: "Unit 3 · Lesson 3", time: null, note: null },
  { stage: "Hello & Letter Review", time: "~3 min", note: "Greet the student and quickly review several letters from S-X. Show them in random order." },
  { stage: "Meet Y, Z", time: "~3 min", note: "Introduce Y, y and Z, z. Connect them to simple familiar words: Y -> yo-yo, Z -> zebra." },
  { stage: "What Is Blending?", time: "~3 min", note: "Introduce putting sounds together. Use very simple examples such as m + a -> ma and s + a -> sa. Stretch the sounds, then blend them together. Keep this playful, not formal phonics instruction." },
  { stage: "Sound & Blend", time: "~5 min", note: "Practice short combinations using previously learned letters: m-a, s-a, t-a, p-i, s-i. Model slowly, then let the student blend them. Fast learner? Add Blend Again! (pa, ti) and No Help! (the answers are hidden, you confirm) (+3 min)." },
  { stage: "Blend & Match", time: "~4 min", note: "Show a simple picture and two or three letter/sound choices. Student blends the sounds and matches them to the correct picture when possible." },
  { stage: "Word Builder!", time: "~3 min", note: "Student builds simple words by moving letter cards together on screen, e.g. S + A + T -> SAT. Separate the sounds, then let the student push/blend them together and say the word." },
  { stage: "Word Builder!", time: "~1 min", note: "Try one more word the same way. Fast learner? Add Build Another! (PAT), Build a New One! (TIP) and No Help Word! (MAP, answer hidden) (+3 min)." },
  { stage: "Y-Z & Blend Check", time: "~1.5 min", note: "Quickly review Y, Z. Fast learner? Add Letters Again! with S, W, Y, Z (+1 min)." },
  { stage: "Y-Z & Blend Check", time: "~1.5 min", note: "Give a few simple blending challenges. Celebrate each successful blend and finish with the goodbye routine. Fast learner? Add Last Blend! (PAT, answer hidden) (+1 min)." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 3 · Lesson 3",
      time: null,
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Blending Begins!</h1></span>
          <p className="slide-p title-p">Today we learn Y and Z, and put sounds together for the first time.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Yy" color={LETTER_COLOR.Y} onZoom={onZoom} />
            <LetterTile letters="Zz" color={LETTER_COLOR.Z} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello & Letter Review
    {
      stage: "Hello & Letter Review",
      part: "A",
      instruction: [["👋", "Say hello."], ["🗣️", "Say each letter."]],
      guide: "It's the letter ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Letter Warm-Up!</h2></span>
          <div className="letter-row">
            <LetterTile letters="Ss" color={REVIEW_COLOR.S} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Uu" color={REVIEW_COLOR.U} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Ww" color={REVIEW_COLOR.W} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Xx" color={REVIEW_COLOR.X} size={54} fontSize={20} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 3: Meet Y, Z
    {
      stage: "Meet Y, Z",
      part: "B",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet Y, Z!</h2></span>
          <div className="row" style={{ marginTop: 10 }}>
            <LetterTile letters="Yy" color={LETTER_COLOR.Y} size={92} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Zz" color={LETTER_COLOR.Z} size={92} fontSize={40} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 4: Y is for...
    {
      stage: "Meet Y, Z",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "Y is for ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Y is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/yoyo.jpeg`} word="Yo-yo" label="yo-yo" onZoom={onZoom} />
            <WordCard src={`${IMG}/yak.jpeg`} word="Yak" label="yak" onZoom={onZoom} />
            <WordCard src={`${IMG}/yarn.jpg`} word="Yarn" label="yarn" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 5: Z is for...
    {
      stage: "Meet Y, Z",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "Z is for ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Z is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/zebra.avif`} word="Zebra" label="zebra" onZoom={onZoom} />
            <WordCard src={`${IMG}/zoo.avif`} word="Zoo" label="zoo" onZoom={onZoom} />
            <WordCard src={`${IMG}/zipper.avif`} word="Zipper" label="zipper" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: What Is Blending? (m+a)
    {
      stage: "What Is Blending?",
      part: "B",
      instruction: [["👀", "Look at the letters."], ["🗣️", "Say the sounds. Say the word."]],
      time: "~1.5 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Putting Sounds Together!</h2></span>
          <BlendRow parts={["m", "a"]} result="ma" onZoom={onZoom} />
        </div>
      ),
    },
    // 7: What Is Blending? (s+a)
    {
      stage: "What Is Blending?",
      part: "B",
      instruction: [["👀", "Look at the letters."], ["🗣️", "Say the sounds. Say the word."]],
      time: "~1.5 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">One More Time!</h2></span>
          <BlendRow parts={["s", "a"]} result="sa" onZoom={onZoom} />
        </div>
      ),
    },
    // 8: Sound & Blend (multiple rows)
    {
      stage: "Sound & Blend",
      part: "C",
      instruction: [["👀", "Look at the letters."], ["🗣️", "Say the sounds. Say the word."]],
      time: "~2.5 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Sound & Blend!</h2></span>
          <BlendRow parts={["t", "a"]} result="ta" onZoom={onZoom} />
          <BlendRow parts={["p", "i"]} result="pi" onZoom={onZoom} />
        </div>
      ),
    },
    // 9: Sound & Blend continued
    {
      stage: "Sound & Blend",
      part: "C",
      instruction: [["🤔", "Your turn!"], ["🗣️", "Say the sounds. Say the word."]],
      time: "~2.5 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Your Turn!</h2></span>
          <BlendRow parts={["s", "i"]} result="si" onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Sound & Blend",
      part: "C",
      title: "Blend Again!",
      instruction: [["👀", "Look at the letters."], ["🗣️", "Say the sounds. Say the word."]],
      body: (
        <div className="center-col">
          <BlendRow parts={["p","a"]} result="pa" onZoom={onZoom} />
          <BlendRow parts={["t","i"]} result="ti" onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Sound & Blend",
      part: "C",
      title: "No Help!",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the sounds. Say the word."]],
      body: (
        <div className="center-col">
          <BlendRow parts={["m","i"]} result="?" onZoom={onZoom} />
          <BlendRow parts={["s","a"]} result="?" onZoom={onZoom} />
        </div>
      ),
    },
    // 10: Blend & Match
    {
      stage: "Blend & Match",
      part: "C",
      instruction: [["🗣️", "Blend the sounds."], ["👀", "Match the picture."]],
      time: "~4 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Blend & Match!</h2></span>
          <BlendRow parts={["s", "a", "t"]} result="sat" onZoom={onZoom} />
          <Pic src={`${IMG}/cat-sitting.avif`} label="cat sitting" size={100} onZoom={onZoom} />
        </div>
      ),
    },
    // 11: HIGHLIGHT Word Builder! (SAT)
    {
      stage: "Word Builder!",
      part: "D",
      instruction: [["🧩", "Build the word."], ["🗣️", "Say the sounds. Say the word."]],
      time: "~3 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">🧩 Word Builder!</h2></span>
          <BlendRow parts={["S", "A", "T"]} result="SAT" onZoom={onZoom} />
        </div>
      ),
    },
    // 12: HIGHLIGHT Word Builder! (SIT)
    {
      stage: "Word Builder!",
      part: "D",
      instruction: [["🧩", "Build the word."], ["🗣️", "Say the sounds. Say the word."]],
      time: "~1 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">One More Word!</h2></span>
          <BlendRow parts={["S", "I", "T"]} result="SIT" onZoom={onZoom} />
        </div>
      ),
    },
    // 12b: HIGHLIGHT Word Builder! (MAT)
    {
      stage: "Word Builder!",
      part: "D",
      instruction: [["🧩", "Build the word."], ["🗣️", "Say the sounds. Say the word."]],
      time: "~1 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Build One More!</h2></span>
          <BlendRow parts={["M", "A", "T"]} result="MAT" onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Word Builder!",
      part: "D",
      title: "Build Another!",
      instruction: [["🧩", "Build the word."], ["🗣️", "Say the sounds. Say the word."]],
      body: (
        <div className="center-col">
          <BlendRow parts={["P","A","T"]} result="PAT" onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Word Builder!",
      part: "D",
      title: "Build a New One!",
      instruction: [["🧩", "Build the word."], ["🗣️", "Say the sounds. Say the word."]],
      body: (
        <div className="center-col">
          <BlendRow parts={["T","I","P"]} result="TIP" onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Word Builder!",
      part: "D",
      title: "No Help Word!",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the sounds. Say the word."]],
      body: (
        <div className="center-col">
          <BlendRow parts={["M","A","P"]} result="?" onZoom={onZoom} />
        </div>
      ),
    },
    // 13: Y-Z & Blend Check (letters)
    {
      stage: "Y-Z & Blend Check",
      part: "D",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Flash Review!</h2></span>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Yy" color={LETTER_COLOR.Y} onZoom={onZoom} />
            <LetterTile letters="Zz" color={LETTER_COLOR.Z} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Y-Z & Blend Check",
      part: "D",
      title: "Letters Again!",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="Zz" color={LETTER_COLOR.Z} size={62} fontSize={24} onZoom={onZoom} />
          <LetterTile letters="Ww" color={REVIEW_COLOR.W} size={62} fontSize={24} onZoom={onZoom} />
          <LetterTile letters="Yy" color={LETTER_COLOR.Y} size={62} fontSize={24} onZoom={onZoom} />
          <LetterTile letters="Ss" color={REVIEW_COLOR.S} size={62} fontSize={24} onZoom={onZoom} />
        </div>
      ),
    },
    // 14: Y-Z & Blend Check (blend)
    {
      stage: "Y-Z & Blend Check",
      part: "D",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the sounds. Say the word."]],
      time: "~1.5 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">One Last Blend!</h2></span>
          <BlendRow parts={["m", "a", "t"]} result="mat" onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Y-Z & Blend Check",
      part: "D",
      title: "Last Blend!",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the sounds. Say the word."]],
      body: (
        <div className="center-col">
          <BlendRow parts={["p","a","t"]} result="?" onZoom={onZoom} />
        </div>
      ),
    },
    // 15: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <WrapUp>Today you learned Yy, Zz, and started blending sounds into words!</WrapUp>
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

.slide-body { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 44px; position: relative; z-index: 1; gap: 16px; }

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
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 44px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 34px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 17px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

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

.center-col { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.letter-row { display: flex; gap: 16px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.word-row { display: flex; gap: 22px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 28px; background: #fff; box-shadow: 0 0 0 6px #fff, 0 10px 22px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 10px; font-weight: 700; text-align: center; padding: 0 8px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 19px; color: var(--navy); }

.blend-row { display: flex; align-items: center; gap: 10px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.blend-plus { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 28px; color: var(--ink-soft); }
.blend-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 34px; color: var(--navy); background: #fff; padding: 10px 24px; border-radius: 16px; box-shadow: 0 6px 14px rgba(27,42,74,0.12); text-transform: lowercase; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
${wrapUpStyles}
`;
