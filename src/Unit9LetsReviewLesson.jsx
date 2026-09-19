import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const IMG = "/curriculum/u9-l1";
const SIZE_COLOR = { Big: "#FF6B4A", Small: "#4FA8D8" };

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

function DescriptorTag({ label, color, onZoom }) {
  const big = <div className="desc-zoom" style={{ background: color }}>{label}</div>;
  return (
    <div className="desc-tag" style={{ background: color }} onClick={() => onZoom(big)}>
      {label}
    </div>
  );
}

function BingoGrid({ items, markedIdx, onZoom }) {
  return (
    <div className="bingo-grid">
      {items.map((it, idx) => {
        const big = (
          <div className="zoom-pic">
            {it.src ? <img src={it.src} alt={it.label} /> : (
              <div className="zoom-ph"><PhotoIcon size={44} /><span>{it.label}</span></div>
            )}
          </div>
        );
        return (
          <div key={idx} className={`bingo-cell ${markedIdx.includes(idx) ? "is-marked" : ""}`} onClick={() => onZoom(big)}>
            {it.src ? <img src={it.src} alt={it.label} /> : <PhotoIcon size={22} />}
            {markedIdx.includes(idx) && <span className="bingo-check">✓</span>}
          </div>
        );
      })}
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

export default function Unit9LetsReviewLesson() {
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
  { stage: "Unit 9 · Lesson 4", time: null, note: null },
  { stage: "Animal Warm-Up", time: "~3 min", note: "Quick animal sounds and movements. Student identifies the animal. Fast learner? Add Warm-Up! 2 (+1 min)." },
  { stage: "Animal Review", time: "~4 min", note: "Mix all animals: cat, dog, bird, fish, lion, elephant, monkey, giraffe. Student names them. Fast learner? Add Name Them All! 2 (+1 min)." },
  { stage: "It's a...", time: "~4 min", note: "Show unfamiliar combinations of animals and ask \"What is it?\" Student responds with \"It's a...\" Fast learner? Add It's a... 4 and 5 (bird, giraffe) (+2 min)." },
  { stage: "Big or Small?", time: "~4 min", note: "Student describes different animals using big/small. Fast learner? Add Big or Small? 3 and 4 (+2 min)." },
  { stage: "Zoo Picture Talk", time: "~3 min", note: "Show a busy zoo scene. Ask \"What do you see?\" and let the student identify as many animals as possible. Fast learner? Add What Do You See? 2 and 3 (two more pictures) (+2 min)." },
  { stage: "Animal Bingo", time: "~2 min", note: "Give a 3x3 grid of animal pictures. Call clues such as \"Find a big animal!\" Student finds and marks it, then says \"It's a cat.\" Fast learner? Add Animal Bingo! 2 and 3 (new clues) (+2 min)." },
  { stage: "Mixed Animal Challenge", time: "~3 min", note: "Show random animals. Student identifies them and describes selected ones: \"It's a big elephant.\" Fast learner? Add Mixed Challenge! 2 and 3 (+2 min)." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  const bingoItems = [
    { src: `${IMG}/cat.jpg`, label: "cat" },
    { src: `${IMG}/dog.jpg`, label: "dog" },
    { src: `${IMG}/fish.avif`, label: "fish" },
    { src: `${IMG}/lion.avif`, label: "lion" },
    { src: `${IMG}/elephant.jpg`, label: "elephant" },
    { src: `${IMG}/monkey.avif`, label: "monkey" },
    { src: `${IMG}/bird.png`, label: "bird" },
    { src: `${IMG}/giraffe.png`, label: "giraffe" },
    { src: `${IMG}/cat.jpg`, label: "cat" },
  ];

  return [
    // 1: Cover
    {
      stage: "Unit 9 · Lesson 4",
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Let's Review!</h1></span>
          <p className="slide-p title-p">Today we bring it all together: animals and big/small!</p>
        </div>
      ),
    },
    // 2: Animal Warm-Up
    {
      stage: "Animal Warm-Up",
      part: "A",
      title: "Warm-Up!",
      instruction: [["👂", "Listen to the sound."], ["🗣️", "Say the animal."]],
      guide: "It's a ___.",
      body: (
        <>
        <Pic src="/curriculum/u9-l1/lion.avif" label="lion" size={130} onZoom={onZoom} />
        <div className="bubble-col" style={{ maxWidth: 420 }}>
          <div className="brow">
            <div className="avatar navy">T</div>
            <div className="bubble left">Roar! What animal?</div>
          </div>
        </div>
        </>
      ),
    },
    {
      stage: "Animal Warm-Up",
      part: "A",
      title: "Warm-Up! 2",
      instruction: [["👂", "Listen to the sound."], ["🗣️", "Say the animal."]],
      guide: "It's a ___.",
      body: (
        <>
        <div className="word-row">
          <Pic src="/curriculum/u9-l1/dog.jpg" label="dog" size={130} onZoom={onZoom} />
        </div>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Woof! What animal?</div>
            </div>
          </div>
        </>
      ),
    },
    // 3: Animal Review
    {
      stage: "Animal Review",
      part: "A",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the animal."]],
      guide: "It's a ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Name Them All!</h2></span>
          <div className="word-row">
            <Pic src={`${IMG}/cat.jpg`} label="cat" size={90} onZoom={onZoom} />
            <Pic src={`${IMG}/dog.jpg`} label="dog" size={90} onZoom={onZoom} />
            <Pic src={`${IMG}/lion.avif`} label="lion" size={90} onZoom={onZoom} />
            <Pic src={`${IMG}/elephant.jpg`} label="elephant" size={90} onZoom={onZoom} />
            <Pic src={`${IMG}/monkey.avif`} label="monkey" size={90} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Animal Review",
      part: "A",
      title: "Name Them All! 2",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the animal."]],
      guide: "It's a ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u9-l1/bird.png" label="bird" size={90} onZoom={onZoom} />
          <Pic src="/curriculum/u9-l1/giraffe.png" label="giraffe" size={90} onZoom={onZoom} />
          <Pic src="/curriculum/u9-l1/fish.avif" label="fish" size={90} onZoom={onZoom} />
          <Pic src="/curriculum/u9-l1/cat.jpg" label="cat" size={90} onZoom={onZoom} />
          <Pic src="/curriculum/u9-l1/dog.jpg" label="dog" size={90} onZoom={onZoom} />
        </div>
      ),
    },
    // 4: It's a... (round 1)
    {
      stage: "It's a...",
      part: "B",
      title: "It's a...",
      instruction: [["👀", "Look at the animal."], ["🗣️", "Say what it is."]],
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/fish.avif`} label="fish" size={130} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">It's a fish!</div>
            </div>
          </div>
        </div>
      ),
    },
    // 4b: It's a... (round 2)
    {
      stage: "It's a...",
      part: "B",
      title: "It's a... 2",
      instruction: [["👀", "Look at the animal."], ["🗣️", "Say what it is."]],
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/lion.avif`} label="lion" size={130} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">It's a lion!</div>
            </div>
          </div>
        </div>
      ),
    },
    // 4c: It's a... (round 3)
    {
      stage: "It's a...",
      part: "B",
      title: "It's a... 3",
      instruction: [["👀", "Look at the animal."], ["🗣️", "Say what it is."]],
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/cat.jpg`} label="cat" size={130} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">It's a cat!</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      stage: "It's a...",
      part: "B",
      title: "It's a... 4",
      instruction: [["👀", "Look at the animal."], ["🗣️", "Say what it is."]],
      body: (
        <>
          <Pic src="/curriculum/u9-l1/bird.png" label="bird" size={130} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">It's a bird!</div>
            </div>
          </div>
        </>
      ),
    },
    {
      stage: "It's a...",
      part: "B",
      title: "It's a... 5",
      instruction: [["👀", "Look at the animal."], ["🗣️", "Say what it is."]],
      body: (
        <>
          <Pic src="/curriculum/u9-l1/giraffe.png" label="giraffe" size={130} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">It's a giraffe!</div>
            </div>
          </div>
        </>
      ),
    },
    // 5: Big or Small? (round 1)
    {
      stage: "Big or Small?",
      part: "B",
      title: "Big or Small?",
      instruction: [["👀", "Look at the animal."], ["🗣️", "Say big or small."]],
      guide: "It's a ___ ___.",
      body: (
        <div className="center-col">
          <div className="word-row">
            <Pic src={`${IMG}/elephant.jpg`} label="elephant" size={100} onZoom={onZoom} />
            <DescriptorTag label="Big" color={SIZE_COLOR.Big} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 5b: Big or Small? (round 2)
    {
      stage: "Big or Small?",
      part: "B",
      title: "Big or Small? 2",
      instruction: [["👀", "Look at the animal."], ["🗣️", "Say big or small."]],
      guide: "It's a ___ ___.",
      body: (
        <div className="center-col">
          <div className="word-row">
            <Pic src={`${IMG}/monkey.avif`} label="monkey" size={100} onZoom={onZoom} />
            <DescriptorTag label="Small" color={SIZE_COLOR.Small} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    {
      stage: "Big or Small?",
      part: "B",
      title: "Big or Small? 3",
      instruction: [["👀", "Look at the animal."], ["🗣️", "Say big or small."]],
      guide: "It's a ___ ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u9-l1/giraffe.png" label="giraffe" size={100} onZoom={onZoom} />
          <DescriptorTag label="Big" color={SIZE_COLOR.Big} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Big or Small?",
      part: "B",
      title: "Big or Small? 4",
      instruction: [["👀", "Look at the animal."], ["🗣️", "Say big or small."]],
      guide: "It's a ___ ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u9-l1/bird.png" label="bird" size={100} onZoom={onZoom} />
          <DescriptorTag label="Small" color={SIZE_COLOR.Small} onZoom={onZoom} />
        </div>
      ),
    },
    // 6: Zoo Picture Talk
    {
      stage: "Zoo Picture Talk",
      part: "C",
      instruction: [["👀", "Look at the picture."], ["🗣️", "Say the animals you see."]],
      guide: "I see a ___.",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">What Do You See?</h2></span>
          <Pic src="/curriculum/u9-scenes/busy-zoo.jpg" label="a busy zoo scene" size={190} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Zoo Picture Talk",
      part: "C",
      title: "What Do You See? 2",
      instruction: [["👀", "Look at the picture."], ["🗣️", "Say the animals you see."]],
      guide: "I see a ___.",
      body: (
        <div className="center-col">
          <Pic src="/curriculum/u9-scenes/pets-garden.jpg" label="pets garden" size={190} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Zoo Picture Talk",
      part: "C",
      title: "What Do You See? 3",
      instruction: [["👀", "Look at the picture."], ["🗣️", "Say the animals you see."]],
      guide: "I see a ___.",
      body: (
        <div className="center-col">
          <Pic src="/curriculum/u9-scenes/zoo-path.jpg" label="zoo path" size={190} onZoom={onZoom} />
        </div>
      ),
    },
    // 7: HIGHLIGHT Animal Bingo
    {
      stage: "Animal Bingo",
      part: "C",
      instruction: [["👂", "Listen to the clue."], ["👆", "Find it on the grid."]],
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">🎯 Animal Bingo!</h2></span>
          <BingoGrid items={bingoItems} markedIdx={[0]} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Find the animal that says meow!</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      stage: "Animal Bingo",
      part: "C",
      title: "Animal Bingo! 2",
      instruction: [["👂", "Listen to the clue."], ["👆", "Find it on the grid."]],
      body: (
        <>
        <BingoGrid items={bingoItems} markedIdx={[1]} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 400 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Find the animal that says woof!</div>
            </div>
          </div>
        </>
      ),
    },
    {
      stage: "Animal Bingo",
      part: "C",
      title: "Animal Bingo! 3",
      instruction: [["👂", "Listen to the clue."], ["👆", "Find it on the grid."]],
      body: (
        <>
        <BingoGrid items={bingoItems} markedIdx={[3]} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 400 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Find the big animal!</div>
            </div>
          </div>
        </>
      ),
    },
    // 8: Mixed Animal Challenge
    {
      stage: "Mixed Animal Challenge",
      part: "D",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the animal and its size."]],
      guide: "It's a ___ ___.",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Mixed Challenge!</h2></span>
          <div className="word-row">
            <Pic src={`${IMG}/dog.jpg`} label="dog" size={100} onZoom={onZoom} />
            <Pic src={`${IMG}/elephant.jpg`} label="elephant" size={100} onZoom={onZoom} />
            <Pic src={`${IMG}/monkey.avif`} label="monkey" size={100} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Mixed Animal Challenge",
      part: "D",
      title: "Mixed Challenge! 2",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the animal and its size."]],
      guide: "It's a ___ ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u9-l1/giraffe.png" label="giraffe" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u9-l1/cat.jpg" label="cat" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u9-l1/fish.avif" label="fish" size={100} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Mixed Animal Challenge",
      part: "D",
      title: "Mixed Challenge! 3",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the animal and its size."]],
      guide: "It's a ___ ___.",
      body: (
        <div className="word-row">
          <Pic src="/curriculum/u9-l1/bird.png" label="bird" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u9-l1/lion.avif" label="lion" size={100} onZoom={onZoom} />
          <Pic src="/curriculum/u9-l1/dog.jpg" label="dog" size={100} onZoom={onZoom} />
        </div>
      ),
    },
    // 9: Wrap-up
    {
      stage: "Wrap-Up",
      body: (
        <WrapUp>You know 8 animals and big/small!</WrapUp>
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

.word-row { display: flex; gap: 16px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; align-items: center; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 24px; background: #fff; box-shadow: 0 0 0 5px #fff, 0 8px 18px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 9.5px; font-weight: 700; text-align: center; padding: 0 6px; }

.desc-tag { cursor: zoom-in; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 20px; color: #fff; padding: 14px 28px; border-radius: 18px; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.desc-tag:hover { transform: scale(1.05); }
.desc-zoom { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 40px; color: #fff; padding: 30px 56px; border-radius: 30px; }

.bingo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; position: relative; z-index: 1; }
.bingo-cell { position: relative; width: 52px; height: 52px; border-radius: 14px; background: #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.12); cursor: zoom-in; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.bingo-cell img { width: 100%; height: 100%; object-fit: contain; padding: 4px; }
.bingo-cell.is-marked { box-shadow: 0 0 0 3px var(--coral), 0 6px 14px rgba(27,42,74,0.12); }
.bingo-check { position: absolute; top: 2px; right: 2px; width: 18px; height: 18px; border-radius: 50%; background: var(--coral); color: #fff; font-size: 11px; font-weight: 800; display: flex; align-items: center; justify-content: center; }

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
