import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const IMG1 = "/curriculum/u1-l1";
const IMG2 = "/curriculum/u1-l2";
const IMG3 = "/curriculum/u1-l3";
const IMG4 = "/curriculum/u1-l4";

const LETTER_COLOR = {
  A: "#F2A900", B: "#2E97C7", C: "#22A67E",
  D: "#E0567A", E: "#8E6FCE", F: "#2BAFAF",
  G: "#C77D2E", H: "#D6478C", I: "#4FA8D8",
};
const EMOTION_COLOR = { Happy: "#F2A900", Sad: "#4A90C2", Tired: "#9B7FD4" };
const EMOTION_IMG = { Happy: `${IMG2}/happy.png`, Sad: `${IMG2}/sad.png`, Tired: `${IMG2}/tired.png` };
const MYSTERY_COLOR = { D: "#E0567A", O: "#D9A441", G: "#C77D2E" };

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

function BlankTile({ size = 74 }) {
  return <div className="blank-tile" style={{ width: size, height: size }} />;
}

function TapLetterTile({ letter, color, size = 90, fontSize = 36 }) {
  const [shown, setShown] = useState(false);
  if (shown) {
    return (
      <div
        className="letter-tile tap-tile"
        style={{ background: color, width: size, height: size, fontSize }}
        onClick={() => setShown(false)}
      >
        {letter}
      </div>
    );
  }
  return (
    <div
      className="blank-tile tap-tile"
      style={{ width: size, height: size, fontSize: Math.round(fontSize * 0.55) }}
      onClick={() => setShown(true)}
    >
      ?
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

function EmotionCard({ name, onZoom }) {
  const color = EMOTION_COLOR[name];
  const big = <div className="emo-tile zoom-emo-tile" style={{ borderColor: color }}><img src={EMOTION_IMG[name]} alt={name} /></div>;
  return (
    <div className="wc">
      <div className="emo-tile" style={{ borderColor: color }} onClick={() => onZoom(big)}>
        <img src={EMOTION_IMG[name]} alt={name} />
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

export default function LetsReviewLesson() {
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
  { stage: "Unit 1 · Lesson 4", time: null, note: null },
  { stage: "Hello & Review", time: "~3 min", note: "Greet the student and ask their name. Quickly review A, B, and C with the letter tiles." },
  { stage: "How Are You?", time: "~3 min", note: "Show the 3 feeling cards. Ask 'How are you?' and let the student choose one and answer. Add a small gesture for each feeling." },
  { stage: "Nice to Meet You!", time: "~3 min", note: "Practice the mini-dialogue together, then switch roles: let the student pretend to be the teacher and greet you first." },
  { stage: "Letter Review: A-I", time: "~4 min", note: "Show A-I in mixed order and let the student name each one. Then point to an uppercase and lowercase pair and ask if they match." },
  { stage: "What Letter?", time: "~4 min", note: "Show each picture and ask what letter it starts with, not just the word itself. Fast learner? Add What Letter? Again! (six new pictures, +2 min)." },
  { stage: "Mystery Picture!", time: "~2 min", note: "Show the dog picture. Let the student tap each tile to reveal D, O, and G, saying the letter and sounding out the word as each one appears." },
  { stage: "Mystery Picture!", time: "~1.5 min", note: "One more round with the bag picture -- same tap-to-reveal for B, A, and G. Extra rounds for fast learners (+4 min): Mystery Picture 3 (cat) and 4 (hen), same tap-to-reveal." },
  { stage: "My A-I Challenge", time: "~1.5 min", note: "One more quick pass through all 9 letters, in mixed order. Fast learner? Add Backwards! (I to A, +1 min)." },
  { stage: "My A-I Challenge", time: "~1.5 min", note: "Finish with the full exchange together: greeting, feeling, and 'Nice to meet you!'" },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 1 · Lesson 4",
      time: null,
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Let's Review!</h1></span>
          <p className="slide-p title-p">Today we bring it all together: greetings, feelings, and the letters A to I.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Aa" color={LETTER_COLOR.A} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="Dd" color={LETTER_COLOR.D} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="Gg" color={LETTER_COLOR.G} size={56} fontSize={22} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello & Review
    {
      stage: "Hello & Review",
      part: "A",
      instruction: [["👋", "Say hello."], ["🗣️", "Answer with your name."]],
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Hello!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420, marginBottom: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hello! What's your name?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">My name is <span className="fill"></span>.</div>
            </div>
          </div>
          <div className="letter-row">
            <LetterTile letters="Aa" color={LETTER_COLOR.A} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="Bb" color={LETTER_COLOR.B} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="Cc" color={LETTER_COLOR.C} size={56} fontSize={22} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 3: How Are You?
    {
      stage: "How Are You?",
      part: "A",
      instruction: [["👀", "Look at each face."], ["🗣️", "Say how you feel."]],
      guide: "I am ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Are You?</h2></span>
          <div className="word-row">
            <EmotionCard name="Happy" onZoom={onZoom} />
            <EmotionCard name="Sad" onZoom={onZoom} />
            <EmotionCard name="Tired" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 4: Nice to Meet You!
    {
      stage: "Nice to Meet You!",
      part: "A",
      instruction: [["🗣️", "Introduce yourself."], ["🤝", "Say: Nice to meet you!"]],
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Nice to Meet You!</h2></span>
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
    // 5: Letter Review A-I (mixed order)
    {
      stage: "Letter Review: A-I",
      part: "B",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Name the Letters!</h2></span>
          <div className="letter-row">
            <LetterTile letters="Ee" color={LETTER_COLOR.E} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Aa" color={LETTER_COLOR.A} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Hh" color={LETTER_COLOR.H} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Cc" color={LETTER_COLOR.C} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Gg" color={LETTER_COLOR.G} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Ii" color={LETTER_COLOR.I} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Dd" color={LETTER_COLOR.D} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Ff" color={LETTER_COLOR.F} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Bb" color={LETTER_COLOR.B} size={54} fontSize={20} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: Letter Review A-I (uppercase/lowercase match)
    {
      stage: "Letter Review: A-I",
      part: "B",
      instruction: [["🤔", "Do the letters match?"], ["🗣️", "Say yes or no."]],
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Do They Match?</h2></span>
          <div className="row" style={{ gap: 40 }}>
            <div className="match-pair">
              <LetterTile letters="F" color={LETTER_COLOR.F} size={70} fontSize={30} onZoom={onZoom} />
              <span className="match-plus">+</span>
              <LetterTile letters="f" color={LETTER_COLOR.F} size={70} fontSize={30} onZoom={onZoom} />
            </div>
            <div className="match-pair">
              <LetterTile letters="H" color={LETTER_COLOR.H} size={70} fontSize={30} onZoom={onZoom} />
              <span className="match-plus">+</span>
              <LetterTile letters="h" color={LETTER_COLOR.H} size={70} fontSize={30} onZoom={onZoom} />
            </div>
          </div>
          <p className="slide-p" style={{ marginTop: 6 }}>Big letter, small letter, same sound.</p>
        </>
      ),
    },
    // 7: What Letter?
    {
      stage: "What Letter?",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the letter and the word."]],
      guide: "___ is for ___.",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">What Letter?</h2></span>
          <div className="look-groups">
            <div className="look-row">
              <Pic src={`${IMG1}/apple.jpg`} label="apple" size={70} onZoom={onZoom} />
              <Pic src={`${IMG2}/dog.jpg`} label="dog" size={70} onZoom={onZoom} />
              <Pic src={`${IMG2}/fish.avif`} label="fish" size={70} onZoom={onZoom} />
            </div>
            <div className="look-row">
              <Pic src={`${IMG3}/goat.avif`} label="goat" size={70} onZoom={onZoom} />
              <Pic src={`${IMG1}/ball.jpg`} label="ball" size={70} onZoom={onZoom} />
              <Pic src={`${IMG2}/egg.jpg`} label="egg" size={70} onZoom={onZoom} />
            </div>
          </div>
        </>
      ),
    },
    {
      stage: "What Letter?",
      part: "B",
      title: "What Letter? Again!",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the letter and the word."]],
      guide: "___ is for ___.",
      body: (
        <div className="word-row" style={{ gap: 14 }}>
          <Pic src={`${IMG1}/cat.jpg`} label="cat" size={90} onZoom={onZoom} />
          <Pic src={`${IMG3}/house.jpeg`} label="house" size={90} onZoom={onZoom} />
          <Pic src={`${IMG2}/duck.png`} label="duck" size={90} onZoom={onZoom} />
          <Pic src={`${IMG1}/ball.jpg`} label="ball" size={90} onZoom={onZoom} />
          <Pic src={`${IMG3}/gift.jpg`} label="gift" size={90} onZoom={onZoom} />
          <Pic src={`${IMG2}/frog.jpg`} label="frog" size={90} onZoom={onZoom} />
        </div>
      ),
    },
    // 8: Mystery Picture Round 1 (tap to reveal)
    {
      stage: "Mystery Picture!",
      part: "C",
      instruction: [["🤫", "Tap each tile."], ["🗣️", "Say the letters and the word."]],
      guide: "It's a ___.",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Mystery Picture!</h2></span>
          <Pic src={`${IMG2}/dog.jpg`} label="dog" size={72} onZoom={onZoom} />
          <div className="row" style={{ marginTop: 14 }}>
            <TapLetterTile letter="D" color={MYSTERY_COLOR.D} size={54} fontSize={22} />
            <TapLetterTile letter="O" color={MYSTERY_COLOR.O} size={54} fontSize={22} />
            <TapLetterTile letter="G" color={MYSTERY_COLOR.G} size={54} fontSize={22} />
          </div>
        </>
      ),
    },
    // 10: Mystery Picture reveal
    {
      stage: "Mystery Picture!",
      part: "C",
      instruction: [["🎉", "You found it!"], ["🗣️", "Say the sentence."]],
      guide: "It's a ___.",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">It's a Dog!</h2></span>
          <div className="row" style={{ marginBottom: 10 }}>
            <LetterTile letters="D" color={MYSTERY_COLOR.D} size={44} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="O" color={MYSTERY_COLOR.O} size={44} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="G" color={MYSTERY_COLOR.G} size={44} fontSize={18} onZoom={onZoom} />
          </div>
          <Pic src={`${IMG2}/dog.jpg`} label="dog" size={100} onZoom={onZoom} />
        </>
      ),
    },
    // 10b: Mystery Picture Round 2 (tap to reveal)
    {
      stage: "Mystery Picture!",
      part: "C",
      instruction: [["🤫", "Tap each tile."], ["🗣️", "Say the letters and the word."]],
      guide: "It's a ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">One More Mystery!</h2></span>
          <Pic src={`${IMG4}/bag.avif`} label="bag" size={72} onZoom={onZoom} />
          <div className="row" style={{ marginTop: 14 }}>
            <TapLetterTile letter="B" color={LETTER_COLOR.B} size={54} fontSize={22} />
            <TapLetterTile letter="A" color={LETTER_COLOR.A} size={54} fontSize={22} />
            <TapLetterTile letter="G" color={LETTER_COLOR.G} size={54} fontSize={22} />
          </div>
        </>
      ),
    },
    // 10c: Mystery Picture Round 2 reveal
    {
      stage: "Mystery Picture!",
      part: "C",
      instruction: [["🎉", "You found it!"], ["🗣️", "Say the sentence."]],
      guide: "It's a ___.",
      time: "~1.3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">It's a Bag!</h2></span>
          <div className="row" style={{ marginBottom: 10 }}>
            <LetterTile letters="B" color={LETTER_COLOR.B} size={44} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="A" color={LETTER_COLOR.A} size={44} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="G" color={LETTER_COLOR.G} size={44} fontSize={18} onZoom={onZoom} />
          </div>
          <Pic src={`${IMG4}/bag.avif`} label="bag" size={100} onZoom={onZoom} />
        </>
      ),
    },
    {
      stage: "Mystery Picture!",
      part: "C",
      title: "Mystery Picture 3!",
      instruction: [["🤫", "Tap each tile."], ["🗣️", "Say the letters and the word."]],
      guide: "It's a ___.",
      body: (
        <div className="center-col">
          <Pic src={`${IMG1}/cat.jpg`} label="cat" size={72} onZoom={onZoom} />
          <div className="row" style={{ marginTop: 6 }}>
            <TapLetterTile letter="C" color="#22A67E" size={54} fontSize={22} />
            <TapLetterTile letter="A" color="#F2A900" size={54} fontSize={22} />
            <TapLetterTile letter="T" color="#4A6FA5" size={54} fontSize={22} />
          </div>
        </div>
      ),
    },
    {
      stage: "Mystery Picture!",
      part: "C",
      title: "It's a Cat!",
      instruction: [["🎉", "You found it!"], ["🗣️", "Say the sentence."]],
      guide: "It's a ___.",
      body: (
        <div className="center-col">
          <div className="row">
            <LetterTile letters="C" color="#22A67E" size={44} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="A" color="#F2A900" size={44} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="T" color="#4A6FA5" size={44} fontSize={18} onZoom={onZoom} />
          </div>
          <Pic src={`${IMG1}/cat.jpg`} label="cat" size={100} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Mystery Picture!",
      part: "C",
      title: "Mystery Picture 4!",
      instruction: [["🤫", "Tap each tile."], ["🗣️", "Say the letters and the word."]],
      guide: "It's a ___.",
      body: (
        <div className="center-col">
          <Pic src={`${IMG3}/hen.jpg`} label="hen" size={72} onZoom={onZoom} />
          <div className="row" style={{ marginTop: 6 }}>
            <TapLetterTile letter="H" color="#D6478C" size={54} fontSize={22} />
            <TapLetterTile letter="E" color="#8E6FCE" size={54} fontSize={22} />
            <TapLetterTile letter="N" color="#DB2777" size={54} fontSize={22} />
          </div>
        </div>
      ),
    },
    {
      stage: "Mystery Picture!",
      part: "C",
      title: "It's a Hen!",
      instruction: [["🎉", "You found it!"], ["🗣️", "Say the sentence."]],
      guide: "It's a ___.",
      body: (
        <div className="center-col">
          <div className="row">
            <LetterTile letters="H" color="#D6478C" size={44} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="E" color="#8E6FCE" size={44} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="N" color="#DB2777" size={44} fontSize={18} onZoom={onZoom} />
          </div>
          <Pic src={`${IMG3}/hen.jpg`} label="hen" size={100} onZoom={onZoom} />
        </div>
      ),
    },
    // 11: My A-I Challenge (letters)
    {
      stage: "My A-I Challenge",
      part: "D",
      instruction: [["🏁", "Say all the letters."], ["⚡", "Mixed order. Go fast!"]],
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">My A-I Challenge!</h2></span>
          <div className="letter-row">
            <LetterTile letters="Aa" color={LETTER_COLOR.A} size={48} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Bb" color={LETTER_COLOR.B} size={48} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Cc" color={LETTER_COLOR.C} size={48} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Dd" color={LETTER_COLOR.D} size={48} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Ee" color={LETTER_COLOR.E} size={48} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Ff" color={LETTER_COLOR.F} size={48} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Gg" color={LETTER_COLOR.G} size={48} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Hh" color={LETTER_COLOR.H} size={48} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="Ii" color={LETTER_COLOR.I} size={48} fontSize={18} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "My A-I Challenge",
      part: "D",
      title: "Backwards!",
      instruction: [["🔄", "Now say the letters backwards!"], ["🗣️", "Start with I."]],
      body: (
        <div className="letter-row">
          <LetterTile letters="Ii" color={LETTER_COLOR.I} size={48} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="Hh" color={LETTER_COLOR.H} size={48} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="Gg" color={LETTER_COLOR.G} size={48} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="Ff" color={LETTER_COLOR.F} size={48} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="Ee" color={LETTER_COLOR.E} size={48} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="Dd" color={LETTER_COLOR.D} size={48} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="Cc" color={LETTER_COLOR.C} size={48} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="Bb" color={LETTER_COLOR.B} size={48} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="Aa" color={LETTER_COLOR.A} size={48} fontSize={18} onZoom={onZoom} />
        </div>
      ),
    },
    // 12: My A-I Challenge (full exchange)
    {
      stage: "My A-I Challenge",
      part: "D",
      instruction: [["👂", "Listen."], ["🗣️", "Say the whole conversation."]],
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Put It Together!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 460 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hi! I'm <span className="fill"></span>. How are you?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I am <span className="fill"></span>. Nice to meet you!</div>
            </div>
          </div>
        </>
      ),
    },
    // 13: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <WrapUp>You know Aa to Ii, and you can say hello, share your feelings, and meet someone new.</WrapUp>
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
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 48px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
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

.center-col { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.letter-row { display: flex; gap: 14px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.blank-tile { border-radius: 16px; background: repeating-linear-gradient(45deg, #D9D2F3, #D9D2F3 6px, #E8E3F8 6px, #E8E3F8 12px); border: 3px dashed #B8AEDD; }
.tap-tile { cursor: pointer; transition: transform 0.15s ease; }
.tap-tile:hover { transform: scale(1.05); }
.blank-tile.tap-tile { display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #B8AEDD; }

.match-pair { display: flex; align-items: center; gap: 10px; }
.match-plus { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; color: var(--ink-soft); }

.word-row { display: flex; gap: 22px; position: relative; z-index: 1; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 28px; background: #fff; box-shadow: 0 0 0 6px #fff, 0 10px 22px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 10px; font-weight: 700; text-align: center; padding: 0 8px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 19px; color: var(--navy); }

.emo-tile {
  width: 100px; height: 100px; border-radius: 26px; flex-shrink: 0; cursor: zoom-in;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
  background: #fff; border: 3px solid; box-shadow: 0 0 0 6px #fff, 0 10px 22px rgba(27,42,74,0.16);
  transition: transform 0.15s ease;
}
.emo-tile img { width: 100%; height: 100%; object-fit: cover; display: block; }
.emo-tile:hover { transform: scale(1.04); }
.zoom-emo-tile { width: 260px; height: 260px; border-radius: 46px; border-width: 5px; }

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

.look-groups { display: flex; flex-direction: column; gap: 16px; position: relative; z-index: 1; }
.look-row { display: flex; align-items: center; justify-content: center; gap: 20px; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
${wrapUpStyles}
`;
