import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const IMG = "/curriculum/u3-l1";

const LETTER_COLOR = { S: "#E0567A", T: "#2E97C7", U: "#22A67E" };
const REVIEW_COLOR = { J: "#E0567A", M: "#8E6FCE", P: "#C77D2E", R: "#4FA8D8" };
const COLOR_HEX = { Red: "#E5484D", Blue: "#2E97C7", Yellow: "#F2A900", Green: "#22A67E" };

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

function ColorSwatch({ name, hex, size = 90, onZoom }) {
  const big = <div className="swatch zoom-swatch" style={{ background: hex }} />;
  return (
    <div className="wc">
      <div className="swatch" style={{ background: hex, width: size, height: size }} onClick={() => onZoom(big)} />
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

export default function ColorfulLettersLesson() {
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
  { stage: "Unit 3 · Lesson 1", time: null, note: null },
  { stage: "Hello & Letter Review", time: "~3 min", note: "Greet the student, then quickly review a few letters from J-R using mixed letter cards. Keep it short." },
  { stage: "Meet the Colors", time: "~3 min", note: "Introduce red, blue, yellow, green using colorful objects/shapes. Model each color, then have the student identify and repeat them." },
  { stage: "Meet S, T, U", time: "~3 min", note: "Show uppercase and lowercase forms of S, T, U. Have the student identify and repeat each letter." },
  { stage: "S is for...", time: "~1.5 min", note: "Say each word slowly: \"S is for sun. S is for star. S is for sock.\"" },
  { stage: "T is for...", time: "~1.5 min", note: "Say each word slowly: \"T is for tiger. T is for tomato. T is for tent.\"" },
  { stage: "U is for...", time: "~1.5 min", note: "Say each word slowly: \"U is for umbrella. U is for unicorn. U is for ukulele.\"" },
  { stage: "Colors & Letters", time: "~2.5 min", note: "Show colored S, T, and U cards. Ask \"What letter?\" and \"What color?\" Student answers both." },
  { stage: "Look & Say", time: "~4 min", note: "Show familiar objects in different colors. Student identifies the letter and the color, e.g. \"Red S.\" \"Blue T.\" Fast learner? Add Look & Say 2 and 3, which use new colour and letter combinations (+3 min)." },
  { stage: "Color Detective", time: "~2 min", note: "Show a colorful group of cards for a moment. Give a clue: \"Find something red!\" Fast learner? Add Detective Again! (yellow) (+1 min)." },
  { stage: "Color Detective", time: "~2 min", note: "Give another clue: \"Find the blue letter!\" Student points to the correct item and says the color or letter. Fast learner? Add Find the Red Letter! and Find the Yellow Letter! (+2 min)." },
  { stage: "Color & Letter Check", time: "~1.5 min", note: "Flash the four colors randomly. Student identifies them. Fast learner? Add Flash Review Again! with the colors in a new order (+1 min)." },
  { stage: "Color & Letter Check", time: "~1.5 min", note: "Flash S, T, U randomly, then finish with the regular goodbye routine. Fast learner? Add Letters Again! (+1 min)." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 3 · Lesson 1",
      time: null,
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Colorful Letters!</h1></span>
          <p className="slide-p title-p">Today we learn the letters S, T, U and our first colors.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Ss" color={LETTER_COLOR.S} onZoom={onZoom} />
            <LetterTile letters="Tt" color={LETTER_COLOR.T} onZoom={onZoom} />
            <LetterTile letters="Uu" color={LETTER_COLOR.U} onZoom={onZoom} />
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
          <span className="title-highlight"><h2 className="slide-h sub">Hello Again!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420, marginBottom: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hello! Let's warm up with some letters.</div>
            </div>
          </div>
          <div className="letter-row">
            <LetterTile letters="Jj" color={REVIEW_COLOR.J} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Mm" color={REVIEW_COLOR.M} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Pp" color={REVIEW_COLOR.P} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Rr" color={REVIEW_COLOR.R} size={54} fontSize={20} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 3: Meet the Colors
    {
      stage: "Meet the Colors",
      part: "B",
      instruction: [["👀", "Look at each color."], ["🗣️", "Say the color."]],
      guide: "It's ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet the Colors!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Red" hex={COLOR_HEX.Red} onZoom={onZoom} />
            <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} onZoom={onZoom} />
            <ColorSwatch name="Yellow" hex={COLOR_HEX.Yellow} onZoom={onZoom} />
            <ColorSwatch name="Green" hex={COLOR_HEX.Green} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 4: Meet S, T, U
    {
      stage: "Meet S, T, U",
      part: "B",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet S, T, U!</h2></span>
          <div className="row" style={{ marginTop: 10 }}>
            <LetterTile letters="Ss" color={LETTER_COLOR.S} size={92} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Tt" color={LETTER_COLOR.T} size={92} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Uu" color={LETTER_COLOR.U} size={92} fontSize={40} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 5: S is for...
    {
      stage: "S is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "S is for ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">S is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/sun.jpg`} word="Sun" label="sun" onZoom={onZoom} />
            <WordCard src={`${IMG}/star.avif`} word="Star" label="star" onZoom={onZoom} />
            <WordCard src={`${IMG}/sock.avif`} word="Sock" label="sock" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: T is for...
    {
      stage: "T is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "T is for ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">T is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/tiger.jpg`} word="Tiger" label="tiger" onZoom={onZoom} />
            <WordCard src={`${IMG}/tomato.jpeg`} word="Tomato" label="tomato" onZoom={onZoom} />
            <WordCard src={`${IMG}/tent.avif`} word="Tent" label="tent" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 7: U is for...
    {
      stage: "U is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "U is for ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">U is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/umbrella.avif`} word="Umbrella" label="umbrella" onZoom={onZoom} />
            <WordCard src={`${IMG}/unicorn.avif`} word="Unicorn" label="unicorn" onZoom={onZoom} />
            <WordCard src={`${IMG}/ukulele.avif`} word="Ukulele" label="ukulele" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 8: Colors & Letters
    {
      stage: "Colors & Letters",
      part: "C",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say the color and the letter."]],
      guide: "It's a ___ ___.",
      time: "~2.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">What Letter? What Color?</h2></span>
          <div className="letter-row">
            <LetterTile letters="S" color={COLOR_HEX.Red} size={80} fontSize={32} onZoom={onZoom} />
            <LetterTile letters="T" color={COLOR_HEX.Blue} size={80} fontSize={32} onZoom={onZoom} />
            <LetterTile letters="U" color={COLOR_HEX.Yellow} size={80} fontSize={32} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 9: Look & Say
    {
      stage: "Look & Say",
      part: "C",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say the color and the letter."]],
      guide: "It's a ___ ___.",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look & Say!</h2></span>
          <div className="letter-row">
            <LetterTile letters="S" color={COLOR_HEX.Green} size={64} fontSize={26} onZoom={onZoom} />
            <LetterTile letters="U" color={COLOR_HEX.Blue} size={64} fontSize={26} onZoom={onZoom} />
            <LetterTile letters="T" color={COLOR_HEX.Red} size={64} fontSize={26} onZoom={onZoom} />
            <LetterTile letters="S" color={COLOR_HEX.Yellow} size={64} fontSize={26} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Look & Say",
      part: "C",
      title: "Look & Say 2!",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say the color and the letter."]],
      guide: "It's a ___ ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="T" color={COLOR_HEX.Yellow} size={64} fontSize={26} onZoom={onZoom} />
          <LetterTile letters="S" color={COLOR_HEX.Blue} size={64} fontSize={26} onZoom={onZoom} />
          <LetterTile letters="U" color={COLOR_HEX.Red} size={64} fontSize={26} onZoom={onZoom} />
          <LetterTile letters="T" color={COLOR_HEX.Green} size={64} fontSize={26} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Look & Say",
      part: "C",
      title: "Look & Say 3!",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say the color and the letter."]],
      guide: "It's a ___ ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="U" color={COLOR_HEX.Green} size={64} fontSize={26} onZoom={onZoom} />
          <LetterTile letters="T" color={COLOR_HEX.Red} size={64} fontSize={26} onZoom={onZoom} />
          <LetterTile letters="S" color={COLOR_HEX.Blue} size={64} fontSize={26} onZoom={onZoom} />
          <LetterTile letters="U" color={COLOR_HEX.Yellow} size={64} fontSize={26} onZoom={onZoom} />
        </div>
      ),
    },
    // 10: HIGHLIGHT Color Detective (peek)
    {
      stage: "Color Detective",
      part: "D",
      instruction: [["🔍", "Find the red one."], ["👆", "Point and say the color."]],
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">🔍 Color Detective!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Green" hex={COLOR_HEX.Green} onZoom={onZoom} />
            <ColorSwatch name="Red" hex={COLOR_HEX.Red} onZoom={onZoom} />
            <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Color Detective",
      part: "D",
      title: "Detective Again!",
      instruction: [["🔍", "Find the yellow one."], ["👆", "Point and say the color."]],
      body: (
        <div className="word-row">
          <ColorSwatch name="Yellow" hex={COLOR_HEX.Yellow} onZoom={onZoom} />
          <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} onZoom={onZoom} />
          <ColorSwatch name="Green" hex={COLOR_HEX.Green} onZoom={onZoom} />
        </div>
      ),
    },
    // 11: HIGHLIGHT Color Detective (letter clue)
    {
      stage: "Color Detective",
      part: "D",
      instruction: [["🔍", "Find the blue letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Find the Blue Letter!</h2></span>
          <div className="letter-row">
            <LetterTile letters="S" color={COLOR_HEX.Yellow} size={70} fontSize={28} onZoom={onZoom} />
            <LetterTile letters="T" color={COLOR_HEX.Blue} size={70} fontSize={28} onZoom={onZoom} />
            <LetterTile letters="U" color={COLOR_HEX.Green} size={70} fontSize={28} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 11b: HIGHLIGHT Color Detective Round 2 (letter clue)
    {
      stage: "Color Detective",
      part: "D",
      instruction: [["🔍", "Find the green letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~1 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Find the Green Letter!</h2></span>
          <div className="letter-row">
            <LetterTile letters="T" color={COLOR_HEX.Red} size={70} fontSize={28} onZoom={onZoom} />
            <LetterTile letters="U" color={COLOR_HEX.Green} size={70} fontSize={28} onZoom={onZoom} />
            <LetterTile letters="S" color={COLOR_HEX.Yellow} size={70} fontSize={28} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Color Detective",
      part: "D",
      title: "Find the Red Letter!",
      instruction: [["🔍", "Find the red letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="U" color={COLOR_HEX.Red} size={70} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="S" color={COLOR_HEX.Blue} size={70} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="T" color={COLOR_HEX.Yellow} size={70} fontSize={28} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Color Detective",
      part: "D",
      title: "Find the Yellow Letter!",
      instruction: [["🔍", "Find the yellow letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="S" color={COLOR_HEX.Green} size={70} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="T" color={COLOR_HEX.Yellow} size={70} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="U" color={COLOR_HEX.Red} size={70} fontSize={28} onZoom={onZoom} />
        </div>
      ),
    },
    // 12: Color & Letter Check (colors)
    {
      stage: "Color & Letter Check",
      part: "D",
      instruction: [["👀", "Look at each color."], ["🗣️", "Say the color."]],
      guide: "It's ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Flash Review!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Red" hex={COLOR_HEX.Red} size={70} onZoom={onZoom} />
            <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} size={70} onZoom={onZoom} />
            <ColorSwatch name="Yellow" hex={COLOR_HEX.Yellow} size={70} onZoom={onZoom} />
            <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={70} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Color & Letter Check",
      part: "D",
      title: "Flash Review Again!",
      instruction: [["👀", "Look at each color."], ["🗣️", "Say the color."]],
      guide: "It's ___.",
      body: (
        <div className="word-row">
          <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={70} onZoom={onZoom} />
          <ColorSwatch name="Yellow" hex={COLOR_HEX.Yellow} size={70} onZoom={onZoom} />
          <ColorSwatch name="Red" hex={COLOR_HEX.Red} size={70} onZoom={onZoom} />
          <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} size={70} onZoom={onZoom} />
        </div>
      ),
    },
    // 13: Color & Letter Check (letters)
    {
      stage: "Color & Letter Check",
      part: "D",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">S, T, U Review!</h2></span>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Ss" color={LETTER_COLOR.S} onZoom={onZoom} />
            <LetterTile letters="Tt" color={LETTER_COLOR.T} onZoom={onZoom} />
            <LetterTile letters="Uu" color={LETTER_COLOR.U} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Color & Letter Check",
      part: "D",
      title: "Letters Again!",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="Uu" color={LETTER_COLOR.U} size={74} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="Ss" color={LETTER_COLOR.S} size={74} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="Tt" color={LETTER_COLOR.T} size={74} fontSize={28} onZoom={onZoom} />
        </div>
      ),
    },
    // 14: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <WrapUp>Today you learned Ss, Tt, Uu and your first four colors.</WrapUp>
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
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 46px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 36px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 17px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.title-content { width: 100%; padding-left: 230px; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
.title-h { text-align: left; font-size: 38px; }
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

.swatch { border-radius: 24px; cursor: zoom-in; box-shadow: 0 0 0 6px #fff, 0 10px 22px rgba(27,42,74,0.16); transition: transform 0.15s ease; flex-shrink: 0; }
.swatch:hover { transform: scale(1.04); }
.zoom-swatch { width: 260px; height: 260px; border-radius: 46px; }

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
