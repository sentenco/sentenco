import React, { useEffect, useState } from "react";
import { ObjImg, objectPicStyles } from "./ObjectPics.jsx";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const IMG1 = "/curriculum/u4-l1";
const IMG2 = "/curriculum/u4-l2";

const NUMBER_COLOR = {
  1: "#FF6B4A", 2: "#F2A900", 3: "#2E97C7", 4: "#22A67E", 5: "#8E6FCE",
  6: "#E0567A", 7: "#2BAFAF", 8: "#C77D2E", 9: "#D6478C", 10: "#4FA8D8",
};

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

function LetterTile({ letters, color, size = 74, fontSize = 28, onZoom }) {
  const big = <div className="letter-tile zoom-letter-tile" style={{ background: color }}><span>{letters}</span></div>;
  return (
    <div className="letter-tile" style={{ background: color, width: size, height: size, fontSize }} onClick={() => onZoom(big)}>
      {letters}
    </div>
  );
}

function CountGroup({ n, icon, size = 40, onZoom }) {
  const items = Array.from({ length: n });
  const big = (
    <div className="count-zoom">
      {items.map((_, idx) => <span key={idx} className="count-emoji"><ObjImg name={icon} size={Math.round(size * 1.9)} /></span>)}
    </div>
  );
  return (
    <div className="count-group" onClick={() => onZoom(big)}>
      {items.map((_, idx) => <span key={idx} className="count-emoji"><ObjImg name={icon} size={Math.round(size * 1.05)} /></span>)}
    </div>
  );
}

function Cake({ age, onZoom }) {
  const big = (
    <div className="cake-zoom">
      <ObjImg name="cake" size={150} />
      <div className="count-zoom">
        {Array.from({ length: age }).map((_, idx) => <span key={idx} className="count-emoji"><ObjImg name="candle" size={80} /></span>)}
      </div>
    </div>
  );
  return (
    <div className="wc" onClick={() => onZoom(big)} style={{ cursor: "zoom-in" }}>
      <ObjImg name="cake" size={58} />
      <div className="count-group" style={{ maxWidth: 330, gap: 4 }}>
        {Array.from({ length: age }).map((_, idx) => <span key={idx} className="count-emoji"><ObjImg name="candle" size={30} /></span>)}
      </div>
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

export default function HowOldAreYouLesson() {
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
  { stage: "Unit 4 · Lesson 2", time: null, note: null },
  { stage: "Hello & Review", time: "~3 min", note: "Greet the student and briefly review \"I am...\" from Lesson 1. Ask \"What's your name?\" and encourage a full answer." },
  { stage: "How Old Are You?", time: "~3 min", note: "Introduce \"How old are you?\" using a birthday cake and number visuals. Model: \"How old are you?\" -> \"I am seven.\"" },
  { stage: "My Age Number", time: "~3 min", note: "Review numbers 1-10 and connect them to age. Show random numbers and have the student say them using \"I am...\" Fast learner? Add My Age Number 2! (+1 min)." },
  { stage: "Meet Dog", time: "~5 min", note: "Introduce dog with a clear picture. Student identifies and says the word. Contrast briefly with cat from Lesson 1." },
  { stage: "Birthday Talk", time: "~2 min", note: "Show birthday cakes with different numbers of candles. Ask \"How old are you?\" Student answers." },
  { stage: "Birthday Talk", time: "~2 min", note: "Show a character and ask \"How old is he/she?\" using a number prompt. Fast learner? Add Birthday Talk 3! and How Old Is She? (+2 min)." },
  { stage: "Birthday Party!", time: "~2 min", note: "Create a pretend birthday party on screen. Student chooses a cake/character and tells the teacher their age. Fast learner? Add Party Cake! with ten candles (+1 min)." },
  { stage: "Birthday Party!", time: "~2 min", note: "Add the cat and dog as fun party guests for a second round." },
  { stage: "My Age & Goodbye", time: "~1.5 min", note: "Do a final mini exchange: \"What's your name?\" / \"How old are you?\" Fast learner? Add Put It Together Again! with no answers shown (+1 min)." },
  { stage: "My Age & Goodbye", time: "~1.5 min", note: "Quickly review cat/dog, then say goodbye." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 4 · Lesson 2",
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">How Old Are You?</h1></span>
          <p className="slide-p title-p">Today we ask "How old are you?" and meet a new word: dog!</p>
          <WordCard src={`${IMG2}/dog.jpg`} word="Dog" label="dog" onZoom={onZoom} />
        </div>
      ),
    },
    // 2: Hello & Review
    {
      stage: "Hello & Review",
      part: "A",
      instruction: [["👋", "Say hello."], ["🗣️", "Tell your name."]],
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Hello Again!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What's your name?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I am <span className="fill"></span>.</div>
            </div>
          </div>
        </>
      ),
    },
    // 3: How Old Are You? (intro)
    {
      stage: "How Old Are You?",
      part: "B",
      instruction: [["👀", "Look at the cake."], ["🗣️", "Say: I am seven!"]],
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Old Are You?</h2></span>
          <Cake age={7} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How old are you? I am seven!</div>
            </div>
          </div>
        </>
      ),
    },
    // 4: How Old Are You? (practice)
    {
      stage: "How Old Are You?",
      part: "B",
      instruction: [["👂", "Listen to the question."], ["🗣️", "Say how old you are."]],
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Your Turn!</h2></span>
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="4" color={NUMBER_COLOR[4]} size={50} fontSize={20} onZoom={onZoom} />
          <LetterTile letters="5" color={NUMBER_COLOR[5]} size={50} fontSize={20} onZoom={onZoom} />
          <LetterTile letters="6" color={NUMBER_COLOR[6]} size={50} fontSize={20} onZoom={onZoom} />
          <LetterTile letters="7" color={NUMBER_COLOR[7]} size={50} fontSize={20} onZoom={onZoom} />
          <LetterTile letters="8" color={NUMBER_COLOR[8]} size={50} fontSize={20} onZoom={onZoom} />
          <LetterTile letters="9" color={NUMBER_COLOR[9]} size={50} fontSize={20} onZoom={onZoom} />
        </div>
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How old are you?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I am <span className="fill"></span>.</div>
            </div>
          </div>
        </>
      ),
    },
    // 5: My Age Number
    {
      stage: "My Age Number",
      part: "B",
      instruction: [["👀", "Look at each number."], ["🗣️", "Say the number."]],
      guide: "I am ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">My Age Number!</h2></span>
          <div className="letter-row">
            <LetterTile letters="1" color={NUMBER_COLOR[1]} size={74} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="4" color={NUMBER_COLOR[4]} size={74} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="6" color={NUMBER_COLOR[6]} size={74} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="9" color={NUMBER_COLOR[9]} size={74} fontSize={20} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "My Age Number",
      part: "B",
      title: "My Age Number 2!",
      instruction: [["👀", "Look at each number."], ["🗣️", "Say the number."]],
      guide: "I am ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="2" color={NUMBER_COLOR[2]} size={74} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="3" color={NUMBER_COLOR[3]} size={74} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="7" color={NUMBER_COLOR[7]} size={74} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="10" color={NUMBER_COLOR[10]} size={74} fontSize={28} onZoom={onZoom} />
        </div>
      ),
    },
    // 6: My Age Number (practice)
    {
      stage: "My Age Number",
      part: "B",
      instruction: [["👀", "Look at the numbers."], ["🗣️", "Say how old you are."]],
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Say It With Me!</h2></span>
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="5" color={NUMBER_COLOR[5]} size={50} fontSize={20} onZoom={onZoom} />
          <LetterTile letters="6" color={NUMBER_COLOR[6]} size={50} fontSize={20} onZoom={onZoom} />
          <LetterTile letters="7" color={NUMBER_COLOR[7]} size={50} fontSize={20} onZoom={onZoom} />
          <LetterTile letters="8" color={NUMBER_COLOR[8]} size={50} fontSize={20} onZoom={onZoom} />
          <LetterTile letters="9" color={NUMBER_COLOR[9]} size={50} fontSize={20} onZoom={onZoom} />
          <LetterTile letters="10" color={NUMBER_COLOR[10]} size={50} fontSize={20} onZoom={onZoom} />
        </div>
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I am <span className="fill"></span> years old.</div>
            </div>
          </div>
        </>
      ),
    },
    // 7: Meet Dog
    {
      stage: "Meet Dog",
      part: "B",
      instruction: [["👀", "Look at the picture."], ["🗣️", "Say the word."]],
      guide: "It's a ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet Dog!</h2></span>
          <div className="wc">
          <Pic src={`${IMG2}/dog.jpg`} label="dog" size={154} onZoom={onZoom} />
          <div className="word">Dog</div>
        </div>
        </>
      ),
    },
    // 8: Cat vs Dog
    {
      stage: "Meet Dog",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "It's a ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Cat or Dog?</h2></span>
        <div className="word-row" style={{ gap: 30 }}>
          <div className="wc">
          <Pic src={`${IMG1}/cat.jpg`} label="cat" size={150} onZoom={onZoom} />
          <div className="word">Cat</div>
          </div>
          <div className="wc">
          <Pic src={`${IMG2}/dog.jpg`} label="dog" size={150} onZoom={onZoom} />
          <div className="word">Dog</div>
          </div>
        </div>
        </>
      ),
    },
    // 9: Birthday Talk (round 1)
    {
      stage: "Birthday Talk",
      part: "C",
      instruction: [["👀", "Look at the cake."], ["🗣️", "Answer the question."]],
      guide: "I am ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Birthday Talk!</h2></span>
          <Cake age={5} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How old are you?</div>
            </div>
          </div>
        </>
      ),
    },
    // 10: Birthday Talk (round 2, character age)
    {
      stage: "Birthday Talk",
      part: "C",
      instruction: [["👀", "Look at the cake."], ["🗣️", "Answer the question."]],
      guide: "He is ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Old Is He?</h2></span>
          <Cake age={8} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How old is he?</div>
            </div>
          </div>
        </>
      ),
    },
    {
      stage: "Birthday Talk",
      part: "C",
      title: "Birthday Talk 3!",
      instruction: [["👀", "Look at the cake."], ["🗣️", "Answer the question."]],
      guide: "I am ___.",
      body: (
        <>
        <Cake age={9} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How old are you?</div>
            </div>
          </div>
        </>
      ),
    },
    {
      stage: "Birthday Talk",
      part: "C",
      title: "How Old Is She?",
      instruction: [["👀", "Look at the cake."], ["🗣️", "Answer the question."]],
      guide: "She is ___.",
      body: (
        <>
        <Cake age={4} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How old is she?</div>
            </div>
          </div>
        </>
      ),
    },
    // 11: HIGHLIGHT Birthday Party! (round 1)
    {
      stage: "Birthday Party!",
      part: "D",
      instruction: [["👀", "Look at the cake."], ["🗣️", "Tell the teacher your age."]],
      guide: "I am ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Birthday Party!</h2></span>
          <Cake age={6} onZoom={onZoom} />
        </>
      ),
    },
    {
      stage: "Birthday Party!",
      part: "D",
      title: "Party Cake!",
      instruction: [["👀", "Look at the cake."], ["🗣️", "Tell the teacher your age."]],
      guide: "I am ___.",
      body: (
        <Cake age={10} onZoom={onZoom} />
      ),
    },
    // 12: HIGHLIGHT Birthday Party! (round 2, party guests)
    {
      stage: "Birthday Party!",
      part: "D",
      instruction: [["👀", "Look at the party guests."], ["🗣️", "Say who came to the party."]],
      guide: "___ and ___ came to the party.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Party Guests!</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG1}/cat.jpg`} word="Cat" label="cat" onZoom={onZoom} />
            <WordCard src={`${IMG2}/dog.jpg`} word="Dog" label="dog" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 13: My Age & Goodbye (exchange)
    {
      stage: "My Age & Goodbye",
      part: "D",
      instruction: [["👂", "Listen to the questions."], ["🗣️", "Answer both."]],
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Put It Together!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 460 }}>
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
    {
      stage: "My Age & Goodbye",
      part: "D",
      title: "Put It Together Again!",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Answer both questions."]],
      body: (
          <div className="bubble-col" style={{ maxWidth: 460 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What's your name? How old are you?</div>
            </div>
          </div>
      ),
    },
    // 14: Cat/dog quick review
    {
      stage: "My Age & Goodbye",
      part: "D",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the word."]],
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Quick Review!</h2></span>
          <div className="word-row">
            <Pic src={`${IMG1}/cat.jpg`} label="cat" size={150} onZoom={onZoom} />
            <Pic src={`${IMG2}/dog.jpg`} label="dog" size={150} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 15: Great Job
    {
      stage: "Wrap-Up",
      body: (
        <WrapUp>Today you asked "How old are you?" and met the word dog.</WrapUp>
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

.slide-body { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 22px 44px; position: relative; z-index: 1; gap: 14px; }

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
.slide-h.sub { font-size: 36px; }
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

.center-col { display: flex; flex-direction: column; align-items: center; gap: 14px; }
.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.letter-row { display: flex; gap: 14px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.word-row { display: flex; gap: 22px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 28px; background: #fff; box-shadow: 0 0 0 6px #fff, 0 10px 22px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 10px; font-weight: 700; text-align: center; padding: 0 8px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 19px; color: var(--navy); }

.count-group { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: center; max-width: 420px; cursor: zoom-in; position: relative; z-index: 1; }
.count-emoji { line-height: 1; filter: drop-shadow(0 4px 8px rgba(27,42,74,0.18)); }
.count-zoom { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; max-width: 340px; }
.cake-zoom { display: flex; flex-direction: column; align-items: center; gap: 16px; }

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

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
${wrapUpStyles}
${objectPicStyles}
`;
