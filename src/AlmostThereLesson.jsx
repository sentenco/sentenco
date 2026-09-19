import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const IMG = "/curriculum/u1-l3";

const LETTER_COLOR = { G: "#C77D2E", H: "#D6478C", I: "#4FA8D8" };
const REVIEW_COLOR = { A: "#F2A900", B: "#2E97C7", C: "#22A67E", D: "#E0567A", E: "#8E6FCE", F: "#2BAFAF" };

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

function WordCard({ src, word, label, onZoom }) {
  return (
    <div className="wc">
      <Pic src={src} label={label} onZoom={onZoom} />
      <div className="word">{word}</div>
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

export default function AlmostThereLesson() {
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
              <span className="stage-name">{s.stage}</span>
            </div>
          </div>

          <div className={`slide-body ${s.instruction ? "has-instruction" : ""}`}>
            {(s.instruction || s.part) && (
              <div className="slide-instruction">
                {s.part && (
                  <span className="part-lead">
                    <span className="part-badge" style={{ background: PARTS[s.part].color }}>Part {s.part}</span>
                    {s.part === lastPart && <span className="last-tag">Last part!</span>}
                  </span>
                )}
                {s.instruction && s.instruction.map(([icon, text]) => (
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
  { stage: "Unit 1 · Lesson 3", time: null, note: null },
  { stage: "Hello & Review", time: "~2 min", note: "Greet the student and ask their name. Quickly review A-F together using the letter tiles." },
  { stage: "Nice to Meet You!", time: "~1.5 min", note: "Model the exchange yourself first: 'Hi! I'm [Teacher].' 'Nice to meet you!' A puppet or character voice makes this more fun." },
  { stage: "Nice to Meet You!", time: "~1.5 min", note: [
    "Say \"Hi! I'm [Teacher].\"",
    "Let the student answer with their own name.",
    "Then say \"Nice to meet you!\" together.",
  ] },
  { stage: "Meet G, H, I", time: "~1.5 min", note: "Point to each letter, say its name, and show the uppercase and lowercase forms together." },
  { stage: "G, H, I Is for...", time: "~1.5 min", note: "Say each word slowly: \"G is for goat. G is for grapes. G is for gift.\"" },
  { stage: "G, H, I Is for...", time: "~1.5 min", note: "Say each word slowly: \"H is for hat. H is for hen. H is for house.\"" },
  { stage: "G, H, I Is for...", time: "~2 min", note: "Say each word slowly: \"I is for ice cream. I is for igloo. I is for insect.\"" },
  { stage: "Look & Say", time: "~4 min", note: "Point to each picture in any order. Let the student name the letter and say the word before you move on. Fast learner? Continue with the three Mixed Up! slides (+3 min)." },
  { stage: "Who Am I?", time: "~1.3 min", note: "Give the clue slowly: \"I start with G. G-g-g...\" Let the student guess out loud before moving on." },
  { stage: "Who Am I?", time: "~1.3 min", note: "Reveal the answer together: \"It's a goat!\"" },
  { stage: "Who Am I?", time: "~1.3 min", note: "Now switch roles. Let the student pick one of the pictures and give you a clue to guess. Extra rounds for fast learners (+4 min): Who Am I? Rounds 3 and 4 (hat and hen). Give the clue slowly and let the student guess out loud." },
  { stage: "Say Goodbye", time: "~1.5 min", note: "Practice the full exchange together: \"Hi! I'm ___.\" \"Nice to meet you!\" \"Goodbye!\"" },
  { stage: "Say Goodbye", time: "~1.5 min", note: "Point to G, H, and I one more time as a final review. Fast learner? Do the two extra What Letter? rounds (+2 min)." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 1 · Lesson 3",
      time: null,
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Almost There!</h1></span>
          <p className="slide-p title-p">Today we say "Nice to meet you!", play Who Am I?, and learn the letters G, H, and I.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Gg" color={LETTER_COLOR.G} onZoom={onZoom} />
            <LetterTile letters="Hh" color={LETTER_COLOR.H} onZoom={onZoom} />
            <LetterTile letters="Ii" color={LETTER_COLOR.I} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello & Review (A-F)
    {
      stage: "Hello & Review",
      part: "A",
      instruction: [["👋", "Say hello."], ["🗣️", "Say the letters."]],
      guide: "It's the letter ___.",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Hello Again!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420, marginBottom: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hello! Do you remember A to F?</div>
            </div>
          </div>
          <div className="letter-row">
            <LetterTile letters="Aa" color={REVIEW_COLOR.A} size={52} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Bb" color={REVIEW_COLOR.B} size={52} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Cc" color={REVIEW_COLOR.C} size={52} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Dd" color={REVIEW_COLOR.D} size={52} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Ee" color={REVIEW_COLOR.E} size={52} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Ff" color={REVIEW_COLOR.F} size={52} fontSize={18} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 3: Nice to Meet You! (intro)
    {
      stage: "Nice to Meet You!",
      part: "A",
      instruction: [["👂", "Listen to the teacher."], ["🤝", "Say: Nice to meet you!"]],
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Nice to Meet You!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hi! I'm your teacher.</div>
            </div>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Nice to meet you!</div>
            </div>
          </div>
        </>
      ),
    },
    // 4: Nice to Meet You! (practice)
    {
      stage: "Nice to Meet You!",
      part: "A",
      instruction: [["🗣️", "Introduce yourself."], ["🤝", "Say: Nice to meet you!"]],
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Your Turn!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hi! I'm <span className="fill"></span>.</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Nice to meet you!</div>
            </div>
          </div>
        </>
      ),
    },
    // 5: Meet G, H, I
    {
      stage: "Meet G, H, I",
      part: "B",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet G, H, I!</h2></span>
          <div className="row" style={{ marginTop: 10 }}>
            <LetterTile letters="Gg" color={LETTER_COLOR.G} size={100} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Hh" color={LETTER_COLOR.H} size={100} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Ii" color={LETTER_COLOR.I} size={100} fontSize={40} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: G is for...
    {
      stage: "G, H, I Is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "I see ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">G is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/goat.avif`} word="Goat" label="goat" onZoom={onZoom} />
            <WordCard src={`${IMG}/grapes.jpg`} word="Grapes" label="grapes" onZoom={onZoom} />
            <WordCard src={`${IMG}/gift.jpg`} word="Gift" label="gift" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 7: H is for...
    {
      stage: "G, H, I Is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "It's a ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">H is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/hat.avif`} word="Hat" label="hat" onZoom={onZoom} />
            <WordCard src={`${IMG}/hen.jpg`} word="Hen" label="hen" onZoom={onZoom} />
            <WordCard src={`${IMG}/house.jpeg`} word="House" label="house" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 8: I is for...
    {
      stage: "G, H, I Is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "It's an ___.",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">I is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/icecream.jpg`} word="Ice Cream" label="ice cream" onZoom={onZoom} />
            <WordCard src={`${IMG}/igloo.jpg`} word="Igloo" label="igloo" onZoom={onZoom} />
            <WordCard src={`${IMG}/insect2.jpg`} word="Insect" label="insect" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 9: Look & Say
    {
      stage: "Look & Say",
      part: "C",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the letter and the word."]],
      guide: "___ is for ___.",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look & Say!</h2></span>
          <div className="look-groups">
            <div className="look-row">
              <span className="look-letter" style={{ background: LETTER_COLOR.G }}>G</span>
              <Pic src={`${IMG}/goat.avif`} label="goat" size={52} onZoom={onZoom} />
              <Pic src={`${IMG}/grapes.jpg`} label="grapes" size={52} onZoom={onZoom} />
              <Pic src={`${IMG}/gift.jpg`} label="gift" size={52} onZoom={onZoom} />
            </div>
            <div className="look-row">
              <span className="look-letter" style={{ background: LETTER_COLOR.H }}>H</span>
              <Pic src={`${IMG}/hat.avif`} label="hat" size={52} onZoom={onZoom} />
              <Pic src={`${IMG}/hen.jpg`} label="hen" size={52} onZoom={onZoom} />
              <Pic src={`${IMG}/house.jpeg`} label="house" size={52} onZoom={onZoom} />
            </div>
            <div className="look-row">
              <span className="look-letter" style={{ background: LETTER_COLOR.I }}>I</span>
              <Pic src={`${IMG}/icecream.jpg`} label="ice cream" size={52} onZoom={onZoom} />
              <Pic src={`${IMG}/igloo.jpg`} label="igloo" size={52} onZoom={onZoom} />
              <Pic src={`${IMG}/insect2.jpg`} label="insect" size={52} onZoom={onZoom} />
            </div>
          </div>
        </>
      ),
    },
    {
      stage: "Look & Say",
      part: "C",
      title: "Mixed Up! 1",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the letter and the word."]],
      guide: "___ is for ___.",
      body: (
        <div className="word-row" style={{ gap: 20 }}>
          <Pic src={`${IMG}/gift.jpg`} label="gift" size={120} onZoom={onZoom} />
          <Pic src={`${IMG}/hen.jpg`} label="hen" size={120} onZoom={onZoom} />
          <Pic src={`${IMG}/igloo.jpg`} label="igloo" size={120} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Look & Say",
      part: "C",
      title: "Mixed Up! 2",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the letter and the word."]],
      guide: "___ is for ___.",
      body: (
        <div className="word-row" style={{ gap: 20 }}>
          <Pic src={`${IMG}/house.jpeg`} label="house" size={120} onZoom={onZoom} />
          <Pic src={`${IMG}/goat.avif`} label="goat" size={120} onZoom={onZoom} />
          <Pic src={`${IMG}/insect2.jpg`} label="insect" size={120} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Look & Say",
      part: "C",
      title: "Mixed Up! 3",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the letter and the word."]],
      guide: "___ is for ___.",
      body: (
        <div className="word-row" style={{ gap: 20 }}>
          <Pic src={`${IMG}/icecream.jpg`} label="ice cream" size={120} onZoom={onZoom} />
          <Pic src={`${IMG}/grapes.jpg`} label="grapes" size={120} onZoom={onZoom} />
          <Pic src={`${IMG}/hat.avif`} label="hat" size={120} onZoom={onZoom} />
        </div>
      ),
    },
    // 10: Who Am I? (clue)
    {
      stage: "Who Am I?",
      part: "C",
      instruction: [["👂", "Listen to the clue."], ["🤔", "Guess who I am."]],
      guide: "It's a ___.",
      time: "~1.3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Who Am I?</h2></span>
          <LetterTile letters="Gg" color={LETTER_COLOR.G} size={90} fontSize={36} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 420, marginTop: 10 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I start with G. G-g-g...</div>
            </div>
          </div>
        </>
      ),
    },
    // 11: Who Am I? (reveal)
    {
      stage: "Who Am I?",
      part: "C",
      instruction: [["🎉", "You found it!"], ["🗣️", "Say the sentence."]],
      guide: "It's a ___.",
      time: "~1.3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">It's a Goat!</h2></span>
          <Pic src={`${IMG}/goat.avif`} label="goat" size={140} onZoom={onZoom} />
        </>
      ),
    },
    // 12: Who Am I? (your turn)
    {
      stage: "Who Am I?",
      part: "C",
      instruction: [["🤫", "Pick one picture secretly."], ["🗣️", "Give the teacher a clue."]],
      guide: "I start with ___.",
      time: "~1.3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Now You Try!</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/hat.avif`} word="Hat" label="hat" onZoom={onZoom} />
            <WordCard src={`${IMG}/hen.jpg`} word="Hen" label="hen" onZoom={onZoom} />
            <WordCard src={`${IMG}/house.jpeg`} word="House" label="house" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 12b: Who Am I? Round 2 (clue)
    {
      stage: "Who Am I?",
      part: "C",
      instruction: [["👂", "Listen to the clue."], ["🤔", "Guess who I am."]],
      guide: "It's an ___.",
      time: "~1 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Who Am I? Again!</h2></span>
          <LetterTile letters="Ii" color={LETTER_COLOR.I} size={90} fontSize={36} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 420, marginTop: 10 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I start with I. I'm cold and round. I-i-i...</div>
            </div>
          </div>
        </>
      ),
    },
    // 12c: Who Am I? Round 2 (reveal)
    {
      stage: "Who Am I?",
      part: "C",
      instruction: [["🎉", "You found it!"], ["🗣️", "Say the sentence."]],
      guide: "It's an ___.",
      time: "~1 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">It's an Igloo!</h2></span>
          <Pic src={`${IMG}/igloo.jpg`} label="igloo" size={140} onZoom={onZoom} />
        </>
      ),
    },
    {
      stage: "Who Am I?",
      part: "C",
      title: "Who Am I? Round 3",
      instruction: [["👂", "Listen to the clue."], ["🤔", "Guess who I am."]],
      guide: "It's a ___.",
      body: (
        <div className="center-col">
          <LetterTile letters="Hh" color={LETTER_COLOR.H} size={90} fontSize={36} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I start with H. You wear me on your head. H-h-h...</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      stage: "Who Am I?",
      part: "C",
      title: "It's a Hat!",
      instruction: [["🎉", "You found it!"], ["🗣️", "Say the sentence."]],
      guide: "It's a ___.",
      body: (
        <Pic src={`${IMG}/hat.avif`} label="hat" size={150} onZoom={onZoom} />
      ),
    },
    {
      stage: "Who Am I?",
      part: "C",
      title: "Who Am I? Round 4",
      instruction: [["👂", "Listen to the clue."], ["🤔", "Guess who I am."]],
      guide: "It's a ___.",
      body: (
        <div className="center-col">
          <LetterTile letters="Hh" color={LETTER_COLOR.H} size={90} fontSize={36} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I start with H. I say cluck, cluck. H-h-h...</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      stage: "Who Am I?",
      part: "C",
      title: "It's a Hen!",
      instruction: [["🎉", "You found it!"], ["🗣️", "Say the sentence."]],
      guide: "It's a ___.",
      body: (
        <Pic src={`${IMG}/hen.jpg`} label="hen" size={150} onZoom={onZoom} />
      ),
    },
    // 13: Say Goodbye (practice)
    {
      stage: "Say Goodbye",
      part: "D",
      instruction: [["👂", "Listen."], ["🗣️", "Say hello, then goodbye."]],
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Say Goodbye!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 460 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hi! I'm <span className="fill"></span>.</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Nice to meet you!</div>
            </div>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Goodbye!</div>
            </div>
          </div>
        </>
      ),
    },
    // 14: Say Goodbye (review)
    {
      stage: "Say Goodbye",
      part: "D",
      instruction: [["🤔", "Remember!"], ["🗣️", "Say each letter."]],
      guide: "It's the letter ___.",
      time: "~1 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Show What You Know!</h2></span>
          <div className="letter-row" style={{ marginTop: 10 }}>
            <LetterTile letters="Gg" color={LETTER_COLOR.G} onZoom={onZoom} />
            <LetterTile letters="Hh" color={LETTER_COLOR.H} onZoom={onZoom} />
            <LetterTile letters="Ii" color={LETTER_COLOR.I} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 14b: Picture Check! (recall without the letter shown)
    {
      stage: "Say Goodbye",
      part: "D",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the letter and the word."]],
      guide: "___ is for ___.",
      time: "~0.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">What Letter?</h2></span>
          <div className="row">
            <Pic src={`${IMG}/grapes.jpg`} label="grapes" size={125} onZoom={onZoom} />
            <Pic src={`${IMG}/hat.avif`} label="hat" size={125} onZoom={onZoom} />
            <Pic src={`${IMG}/insect2.jpg`} label="insect" size={125} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Say Goodbye",
      part: "D",
      title: "What Letter? Again!",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the letter and the word."]],
      guide: "___ is for ___.",
      body: (
        <div className="word-row" style={{ gap: 20 }}>
          <Pic src={`${IMG}/goat.avif`} label="goat" size={125} onZoom={onZoom} />
          <Pic src={`${IMG}/house.jpeg`} label="house" size={125} onZoom={onZoom} />
          <Pic src={`${IMG}/icecream.jpg`} label="ice cream" size={125} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Say Goodbye",
      part: "D",
      title: "One More Time!",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the letter and the word."]],
      guide: "___ is for ___.",
      body: (
        <div className="word-row" style={{ gap: 20 }}>
          <Pic src={`${IMG}/insect2.jpg`} label="insect" size={125} onZoom={onZoom} />
          <Pic src={`${IMG}/gift.jpg`} label="gift" size={125} onZoom={onZoom} />
          <Pic src={`${IMG}/hen.jpg`} label="hen" size={125} onZoom={onZoom} />
        </div>
      ),
    },
    // 15: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <WrapUp>Today you said "Nice to meet you!", played Who Am I?, and learned Gg, Hh, and Ii.</WrapUp>
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
.slide-instruction { position: absolute; top: 61px; left: 81px; right: 30px; display: flex; align-items: center; justify-content: flex-start; gap: 26px; flex-wrap: wrap; font-family: 'Baloo 2', sans-serif; font-weight: 600; font-size: 19px; color: var(--navy); z-index: 2; text-align: left; }
.instr-step { display: inline-flex; align-items: center; gap: 8px; }
.instr-icon { font-size: 24px; line-height: 1; }
.instr-text { display: inline-flex; align-items: center; gap: 8px; }
.instr-tag { font-weight: 800; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; padding: 3px 11px; border-radius: 999px; }
.part-lead { position: absolute; right: 100%; top: 4px; margin-right: 8px; display: flex; flex-direction: column; align-items: flex-start; gap: 4px; }
.part-badge { height: 22px; padding: 0 10px; border-radius: 999px; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 11.5px; letter-spacing: 0.03em; white-space: nowrap; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }

.title-highlight { position: relative; display: inline-block; }
.title-highlight::before { content: ""; position: absolute; left: -12px; right: -12px; top: 34%; bottom: 18%; background: #FFD066; opacity: 0.85; transform: rotate(-1.4deg); border-radius: 4px; z-index: 0; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 48px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 40px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 17px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.title-content { width: 100%; padding-left: 230px; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
.title-h { text-align: left; font-size: 38px; }
.title-p { text-align: left; max-width: 300px; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.letter-row { display: flex; gap: 18px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.word-row { display: flex; gap: 22px; position: relative; z-index: 1; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 28px; background: #fff; box-shadow: 0 0 0 6px #fff, 0 10px 22px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 10px; font-weight: 700; text-align: center; padding: 0 8px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 19px; color: var(--navy); }
.name-tag { font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 999px; }

.bubble-col { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; overflow: hidden; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: #fff; border-radius: 18px; padding: 13px 18px; font-weight: 700; font-size: 16px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
.bubble.left { border-radius: 18px 18px 18px 4px; }
.bubble.right { border-radius: 18px 18px 4px 18px; }
.bubble .fill { display: inline-block; min-width: 64px; border-bottom: 2.5px solid var(--coral-deep); vertical-align: -2px; }

.look-groups { display: flex; flex-direction: column; gap: 18px; position: relative; z-index: 1; }
.look-row { display: flex; align-items: center; gap: 18px; }
.look-letter { width: 50px; height: 50px; border-radius: 16px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; color: #fff; box-shadow: 0 4px 10px rgba(27,42,74,0.15); }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
${wrapUpStyles}
`;
