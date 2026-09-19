import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const IMG = "/curriculum/u8-l1";
const BLEND_COLOR = "#22A67E";

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

function BlendRow({ parts, result, color = BLEND_COLOR, onZoom }) {
  return (
    <div className="blend-row">
      {parts.map((p, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <span className="blend-plus">+</span>}
          <LetterTile letters={p} color={color} size={58} fontSize={22} onZoom={onZoom} />
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

export default function ILikeItLesson() {
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
  { stage: "Unit 8 · Lesson 2", time: null, note: null },
  { stage: "Hello & Food Review", time: "~3 min", note: "Quickly revisit food from Lesson 1 using pictures. Ask \"What is it?\"" },
  { stage: "I Like It!", time: "~4 min", note: "Introduce \"I like...\" with familiar food. Model: \"I like pizza.\" Student chooses foods and says \"I like ___.\" Fast learner? Add I Like It! 3 (rice) (+1 min)." },
  { stage: "Like It!", time: "~3 min", note: "Show different foods. Student responds \"I like ___.\" Mix familiar and slightly less familiar pictures. Fast learner? Add Do You Like It? 3 and 4 (+2 min)." },
  { stage: "Meet the -op Family", time: "~4 min", note: "Introduce op, hop, mop, pop. Blend: h-o-p -> hop. Fast learner? Add Blend It! 2 (top, cop, hop). The last two hide the answer (+2 min)." },
  { stage: "Food or Word?", time: "~4 min", note: "Mix food pictures and -op words. Student identifies each and blends the word-family words. Fast learner? Add Food or Word? 2 (+1 min)." },
  { stage: "My Food Vote", time: "~2 min", note: "Show 4 foods. Student chooses \"I like pizza!\"" },
  { stage: "My Food Vote", time: "~2 min", note: "Conduct a simple vote: \"Pizza or rice?\" Student makes choices, using \"I like...\" repeatedly but meaningfully. Fast learner? Add My Food Vote! 4 and 5 (+2 min)." },
  { stage: "Like & Blend Challenge", time: "~3 min", note: "Alternate between \"I like ___.\" and an -op word to blend/read. Fast learner? Add Final Challenge! 2 (+1 min)." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 8 · Lesson 2",
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">I Like It!</h1></span>
          <p className="slide-p title-p">Today we say "I like..." and learn the letters "op"!</p>
        </div>
      ),
    },
    // 2: Hello & Food Review
    {
      stage: "Hello & Food Review",
      part: "A",
      instruction: [["👋", "Say hello."], ["🗣️", "Say what it is."]],
      guide: "It's ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">What Is It?</h2></span>
          <div className="word-row">
            <Pic src={`${IMG}/apple.jpg`} label="apple" size={120} onZoom={onZoom} />
            <Pic src={`${IMG}/banana.jpg`} label="banana" size={120} onZoom={onZoom} />
            <Pic src={`${IMG}/egg.jpg`} label="egg" size={120} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 3: I Like It! (model 1)
    {
      stage: "I Like It!",
      part: "B",
      title: "I Like It!",
      instruction: [["👂", "Listen."], ["🗣️", "Repeat: I like pizza."]],
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/pizza.avif`} label="pizza" size={170} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I like pizza!</div>
            </div>
          </div>
        </div>
      ),
    },
    // 3b: I Like It! (model 2)
    {
      stage: "I Like It!",
      part: "B",
      title: "I Like It! 2",
      instruction: [["👂", "Listen."], ["🗣️", "Repeat: I like apples."]],
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/apple.jpg`} label="apple" size={170} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I like apples!</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      stage: "I Like It!",
      part: "B",
      title: "I Like It! 3",
      instruction: [["👂", "Listen."], ["🗣️", "Repeat: I like rice."]],
      body: (
        <>
          <Pic src="/curriculum/u8-l1/rice.jpg" label="rice" size={170} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I like rice!</div>
            </div>
          </div>
        </>
      ),
    },
    // 4: Like It! practice (round 1)
    {
      stage: "Like It!",
      part: "B",
      instruction: [["👀", "Look at the food."], ["🗣️", "Say what you like."]],
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Do You Like It?</h2></span>
          <Pic src={`${IMG}/banana.jpg`} label="banana" size={150} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I like bananas!</div>
            </div>
          </div>
        </div>
      ),
    },
    // 4b: Like It! practice (round 2)
    {
      stage: "Like It!",
      part: "B",
      title: "Do You Like It? 2",
      instruction: [["👀", "Look at the food."], ["🗣️", "Say what you like."]],
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/egg.jpg`} label="egg" size={150} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I like eggs!</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      stage: "Like It!",
      part: "B",
      title: "Do You Like It? 3",
      instruction: [["👀", "Look at the food."], ["🗣️", "Say what you like."]],
      body: (
        <>
          <Pic src="/curriculum/u8-l1/pizza.avif" label="pizza" size={170} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I like pizza!</div>
            </div>
          </div>
        </>
      ),
    },
    {
      stage: "Like It!",
      part: "B",
      title: "Do You Like It? 4",
      instruction: [["👀", "Look at the food."], ["🗣️", "Say what you like."]],
      body: (
        <>
          <Pic src="/curriculum/u8-l1/apple.jpg" label="apple" size={170} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I like apples!</div>
            </div>
          </div>
        </>
      ),
    },
    // 5: Meet the -op Family
    {
      stage: "Meet the -op Family",
      part: "C",
      instruction: [["👀", "Look at the letters."], ["🗣️", "Say the sounds."]],
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Meet "-op"!</h2></span>
          <div className="row">
            <LetterTile letters="O" color={BLEND_COLOR} onZoom={onZoom} />
            <LetterTile letters="P" color={BLEND_COLOR} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 6: -op blending
    {
      stage: "Meet the -op Family",
      part: "C",
      title: "Blend It!",
      instruction: [["🗣️", "Say the sounds."], ["📖", "Read the word."]],
      body: (
        <div className="center-col" style={{ gap: 14 }}>
          <BlendRow parts={["H", "OP"]} result="hop" onZoom={onZoom} />
          <BlendRow parts={["M", "OP"]} result="mop" onZoom={onZoom} />
          <BlendRow parts={["P", "OP"]} result="pop" onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Meet the -op Family",
      part: "C",
      title: "Blend It! 2",
      instruction: [["🗣️", "Say the sounds."], ["📖", "Read the word."]],
      body: (
        <div className="center-col" style={{ gap: 14 }}>
          <BlendRow parts={["T","OP"]} result="top" onZoom={onZoom} />
          <BlendRow parts={["C","OP"]} result="?" onZoom={onZoom} />
          <BlendRow parts={["H","OP"]} result="?" onZoom={onZoom} />
        </div>
      ),
    },
    // 7: Food or Word?
    {
      stage: "Food or Word?",
      part: "C",
      instruction: [["🗣️", "Say the food."], ["📖", "Read the word."]],
      guide: "It's ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Food or Word?</h2></span>
          <div className="word-row">
            <Pic src={`${IMG}/pizza.avif`} label="pizza" size={100} onZoom={onZoom} />
            <LetterTile letters="HOP" color={BLEND_COLOR} size={100} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="POP" color={BLEND_COLOR} size={100} fontSize={20} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Food or Word?",
      part: "C",
      title: "Food or Word? 2",
      instruction: [["🗣️", "Say the food."], ["📖", "Read the word."]],
      guide: "It's ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u8-l1/rice.jpg" label="rice" size={100} onZoom={onZoom} />
          <LetterTile letters="MOP" color={BLEND_COLOR} size={100} fontSize={24} onZoom={onZoom} />
          <Pic src="/curriculum/u8-l1/egg.jpg" label="egg" size={100} onZoom={onZoom} />
          <LetterTile letters="TOP" color={BLEND_COLOR} size={100} fontSize={24} onZoom={onZoom} />
        </div>
      ),
    },
    // 8: HIGHLIGHT My Food Vote (round 1)
    {
      stage: "My Food Vote",
      part: "D",
      instruction: [["👂", "Listen to the question."], ["🗣️", "Say what you like."]],
      guide: "I like ___.",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">🗳️ My Food Vote!</h2></span>
          <div className="word-row">
            <Pic src={`${IMG}/pizza.avif`} label="pizza" size={110} onZoom={onZoom} />
            <Pic src="/curriculum/u8-l1/rice.jpg" label="rice" size={110} onZoom={onZoom} />
          </div>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Pizza or rice?</div>
            </div>
          </div>
        </div>
      ),
    },
    // 8b: HIGHLIGHT My Food Vote (round 2)
    {
      stage: "My Food Vote",
      part: "D",
      title: "My Food Vote! 2",
      instruction: [["👂", "Listen to the question."], ["🗣️", "Say what you like."]],
      guide: "I like ___.",
      body: (
        <div className="center-col">
          <div className="word-row">
            <Pic src={`${IMG}/egg.jpg`} label="egg" size={110} onZoom={onZoom} />
            <Pic src={`${IMG}/banana.jpg`} label="banana" size={110} onZoom={onZoom} />
          </div>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Egg or banana?</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      stage: "My Food Vote",
      part: "D",
      title: "My Food Vote! 4",
      instruction: [["👂", "Listen to the question."], ["🗣️", "Say what you like."]],
      guide: "I like ___.",
      body: (
        <>
        <div className="word-row">
          <Pic src="/curriculum/u8-l1/pizza.avif" label="pizza" size={110} onZoom={onZoom} />
          <Pic src="/curriculum/u8-l1/apple.jpg" label="apple" size={110} onZoom={onZoom} />
        </div>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Pizza or apple?</div>
            </div>
          </div>
        </>
      ),
    },
    // 9: HIGHLIGHT My Food Vote (round 3)
    {
      stage: "My Food Vote",
      part: "D",
      title: "My Food Vote! 3",
      instruction: [["👀", "Look at the food."], ["🗣️", "Say what you like."]],
      body: (
        <div className="center-col">
          <div className="word-row">
            <Pic src={`${IMG}/apple.jpg`} label="apple" size={110} onZoom={onZoom} />
            <Pic src={`${IMG}/banana.jpg`} label="banana" size={110} onZoom={onZoom} />
          </div>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I like apples!</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      stage: "My Food Vote",
      part: "D",
      title: "My Food Vote! 5",
      instruction: [["👂", "Listen to the question."], ["🗣️", "Say what you like."]],
      guide: "I like ___.",
      body: (
        <>
        <div className="word-row">
          <Pic src="/curriculum/u8-l1/rice.jpg" label="rice" size={110} onZoom={onZoom} />
          <Pic src="/curriculum/u8-l1/egg.jpg" label="egg" size={110} onZoom={onZoom} />
        </div>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Rice or egg?</div>
            </div>
          </div>
        </>
      ),
    },
    // 10: Like & Blend Challenge
    {
      stage: "Like & Blend Challenge",
      part: "D",
      instruction: [["🗣️", "Say the food."], ["📖", "Read the word."]],
      guide: "It's ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Final Challenge!</h2></span>
          <div className="word-row">
            <Pic src={`${IMG}/egg.jpg`} label="egg" size={90} onZoom={onZoom} />
            <LetterTile letters="MOP" color={BLEND_COLOR} size={90} fontSize={20} onZoom={onZoom} />
            <Pic src={`${IMG}/banana.jpg`} label="banana" size={90} onZoom={onZoom} />
            <LetterTile letters="POP" color={BLEND_COLOR} size={90} fontSize={20} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Like & Blend Challenge",
      part: "D",
      title: "Final Challenge! 2",
      instruction: [["🗣️", "Say the food."], ["📖", "Read the word."]],
      guide: "It's ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u8-l1/pizza.avif" label="pizza" size={90} onZoom={onZoom} />
          <LetterTile letters="TOP" color={BLEND_COLOR} size={90} fontSize={22} onZoom={onZoom} />
          <Pic src="/curriculum/u8-l1/rice.jpg" label="rice" size={90} onZoom={onZoom} />
          <LetterTile letters="HOP" color={BLEND_COLOR} size={90} fontSize={22} onZoom={onZoom} />
        </div>
      ),
    },
    // 11: Wrap-up
    {
      stage: "Wrap-Up",
      body: (
        <WrapUp>You can say "I like..." and blend -op words!</WrapUp>
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
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 42px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 32px; }
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
.row { display: flex; gap: 20px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.word-row { display: flex; gap: 16px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; align-items: center; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 24px; background: #fff; box-shadow: 0 0 0 5px #fff, 0 8px 18px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 9.5px; font-weight: 700; text-align: center; padding: 0 6px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 16px; color: var(--navy); }

.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }
.blend-row { display: flex; align-items: center; gap: 10px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.blend-plus { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 26px; color: var(--ink-soft); }
.blend-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 32px; color: var(--navy); background: #fff; padding: 9px 22px; border-radius: 16px; box-shadow: 0 6px 14px rgba(27,42,74,0.12); text-transform: lowercase; }

.bubble-col { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; overflow: hidden; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: #fff; border-radius: 18px; padding: 12px 16px; font-weight: 700; font-size: 15px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
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
