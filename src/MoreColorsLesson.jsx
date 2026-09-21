import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const IMG = "/curriculum/u3-l2";

const LETTER_COLOR = { V: "#8E6FCE", W: "#2BAFAF", X: "#F2A900" };
const COLOR_HEX = {
  Red: "#E5484D", Blue: "#2E97C7", Yellow: "#F2A900", Green: "#22A67E",
  Orange: "#E8712E", Pink: "#EC6FA6", Purple: "#8B5FBF", Brown: "#8B5A2B",
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

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function MatchGame({ pairs }) {
  const byId = Object.fromEntries(pairs.map((p) => [p.id, p]));
  const [leftOrder] = useState(() => shuffle(pairs.map((p) => p.id)));
  const [rightOrder] = useState(() => shuffle(pairs.map((p) => p.id)));
  const [selected, setSelected] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrong, setWrong] = useState(null);

  function pickLeft(id) {
    if (matched.includes(id) || wrong) return;
    setSelected(id);
  }
  function pickRight(id) {
    if (matched.includes(id) || wrong || selected == null) return;
    if (selected === id) {
      setMatched((m) => [...m, id]);
      setSelected(null);
    } else {
      setWrong({ left: selected, right: id });
      setTimeout(() => { setWrong(null); setSelected(null); }, 500);
    }
  }

  return (
    <div className="match-wrap">
      <div className="match-game">
        <div className="match-col">
          {leftOrder.map((id) => {
            const p = byId[id];
            return (
              <div
                key={id}
                className={`match-tile ${matched.includes(id) ? "is-matched" : ""} ${selected === id ? "is-selected" : ""} ${wrong?.left === id ? "is-wrong" : ""}`}
                style={{ background: p.tileColor }}
                onClick={() => pickLeft(id)}
              >
                {p.tileLabel}
              </div>
            );
          })}
        </div>
        <div className="match-col">
          {rightOrder.map((id) => {
            const p = byId[id];
            return (
              <div
                key={id}
                className={`match-right ${matched.includes(id) ? "is-matched" : ""} ${wrong?.right === id ? "is-wrong" : ""}`}
                onClick={() => pickRight(id)}
              >
                {p.rightNode}
              </div>
            );
          })}
        </div>
      </div>
      {matched.length === pairs.length && <p className="match-done">Great matching!</p>}
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

export default function MoreColorsLesson() {
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
  { stage: "Unit 3 · Lesson 2", time: null, note: null },
  { stage: "Hello & Color Review", time: "~3 min", note: "Greet the student and quickly review red, blue, yellow, green. Show colored objects and ask \"What color?\"" },
  { stage: "Meet More Colors", time: "~3 min", note: "Introduce orange, pink, purple, brown using clear objects and visuals. Model each color, then let the student identify and repeat them." },
  { stage: "Meet V, W, X", time: "~3 min", note: "Show uppercase and lowercase forms of V, W, X. Have the student identify and repeat each letter." },
  { stage: "V is for...", time: "~1.5 min", note: "Say each word slowly: \"V is for van. V is for vase. V is for volcano.\"" },
  { stage: "W is for...", time: "~1.5 min", note: "Say each word slowly: \"W is for watermelon. W is for watch. W is for web.\"" },
  { stage: "X is for...", time: "~1.5 min", note: "Say each word slowly: \"X is for x-ray. X is for xylophone.\"" },
  { stage: "Color & Say", time: "~2.5 min", note: "Mix the old and new colors. Show different colored objects and ask \"What color?\" Include quick recognition of V-X. Fast learner? Add Color & Say 2 and 3, which mix old and new colors in a new order (+3 min)." },
  { stage: "Look & Match", time: "~4 min", note: "The student taps a letter, then taps the picture that starts with it to make the match. Let them try it themselves before helping. Fast learner? Play the two extra Match It! rounds (+3 min). Slower learner: do the first round together, tapping for the student." },
  { stage: "Color Shop!", time: "~2.5 min", note: "Create a pretend online shop with colorful objects. Ask \"What color do you want?\" Student chooses an object/color and says it." },
  { stage: "Color Shop!", time: "~1.5 min", note: "Add V-X letter cards as bonus challenges. Fast learner? Add Shopping Once More! and a bonus W (+2 min)." },
  { stage: "Color & Letter Check", time: "~1.5 min", note: "Flash mixed colors and V-X. Student identifies them quickly. Fast learner? Add Flash Review Again! (+1 min)." },
  { stage: "Color & Letter Check", time: "~1.5 min", note: "Finish with a fun \"What's your favorite color?\" choice and goodbye. Fast learner? Swap roles with Ask the Teacher!: the student asks the question (+1.5 min)." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 3 · Lesson 2",
      time: null,
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">More Colors!</h1></span>
          <p className="slide-p title-p">Today we learn the letters V, W, X and four new colors.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Vv" color={LETTER_COLOR.V} onZoom={onZoom} />
            <LetterTile letters="Ww" color={LETTER_COLOR.W} onZoom={onZoom} />
            <LetterTile letters="Xx" color={LETTER_COLOR.X} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello & Color Review
    {
      stage: "Hello & Color Review",
      part: "A",
      instruction: [["👋", "Say hello."], ["🗣️", "Say each color."]],
      guide: "It's ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Color Review!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Red" hex={COLOR_HEX.Red} size={70} onZoom={onZoom} />
            <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} size={70} onZoom={onZoom} />
            <ColorSwatch name="Yellow" hex={COLOR_HEX.Yellow} size={70} onZoom={onZoom} />
            <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={70} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 3: Meet More Colors
    {
      stage: "Meet More Colors",
      part: "B",
      instruction: [["👀", "Look at each color."], ["🗣️", "Say the color."]],
      guide: "It's ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet More Colors!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Orange" hex={COLOR_HEX.Orange} onZoom={onZoom} />
            <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} onZoom={onZoom} />
            <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} onZoom={onZoom} />
            <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 4: Meet V, W, X
    {
      stage: "Meet V, W, X",
      part: "B",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet V, W, X!</h2></span>
          <div className="row" style={{ marginTop: 10 }}>
            <LetterTile letters="Vv" color={LETTER_COLOR.V} size={92} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Ww" color={LETTER_COLOR.W} size={92} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Xx" color={LETTER_COLOR.X} size={92} fontSize={40} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 5: V is for...
    {
      stage: "V is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "V is for ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">V is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/van.avif`} word="Van" label="van" onZoom={onZoom} />
            <WordCard src={`${IMG}/vase.avif`} word="Vase" label="vase" onZoom={onZoom} />
            <WordCard src={`${IMG}/volcano.jpeg`} word="Volcano" label="volcano" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: W is for...
    {
      stage: "W is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "W is for ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">W is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/watermelon.avif`} word="Watermelon" label="watermelon" onZoom={onZoom} />
            <WordCard src={`${IMG}/watch.avif`} word="Watch" label="watch" onZoom={onZoom} />
            <WordCard src={`${IMG}/web.avif`} word="Web" label="web" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 7: X is for...
    {
      stage: "X is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "X is for ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">X is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/xray.avif`} word="X-ray" label="x-ray" onZoom={onZoom} />
            <WordCard src={`${IMG}/xylophone.avif`} word="Xylophone" label="xylophone" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 8: Color & Say
    {
      stage: "Color & Say",
      part: "C",
      instruction: [["👀", "Look at each color."], ["🗣️", "Say the color."]],
      guide: "It's ___.",
      time: "~2.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Color & Say!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} size={64} onZoom={onZoom} />
            <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={64} onZoom={onZoom} />
            <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} size={64} onZoom={onZoom} />
            <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={64} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Color & Say",
      part: "C",
      title: "Color & Say 2!",
      instruction: [["👀", "Look at each color."], ["🗣️", "Say the color."]],
      guide: "It's ___.",
      body: (
        <div className="word-row">
          <ColorSwatch name="Orange" hex={COLOR_HEX.Orange} size={64} onZoom={onZoom} />
          <ColorSwatch name="Red" hex={COLOR_HEX.Red} size={64} onZoom={onZoom} />
          <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} size={64} onZoom={onZoom} />
          <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} size={64} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Color & Say",
      part: "C",
      title: "Color & Say 3!",
      instruction: [["👀", "Look at each color."], ["🗣️", "Say the color."]],
      guide: "It's ___.",
      body: (
        <div className="word-row">
          <ColorSwatch name="Yellow" hex={COLOR_HEX.Yellow} size={64} onZoom={onZoom} />
          <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} size={64} onZoom={onZoom} />
          <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={64} onZoom={onZoom} />
          <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={64} onZoom={onZoom} />
        </div>
      ),
    },
    // 9: Look & Match
    {
      stage: "Look & Match",
      part: "C",
      instruction: [["👆", "Tap a letter."], ["👆", "Tap the matching picture."]],
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look & Match!</h2></span>
          <MatchGame
            pairs={[
              { id: "v", tileLabel: "V", tileColor: LETTER_COLOR.V, rightNode: <img src={`${IMG}/van.avif`} alt="van" className="match-img" /> },
              { id: "w", tileLabel: "W", tileColor: LETTER_COLOR.W, rightNode: <img src={`${IMG}/watermelon.avif`} alt="watermelon" className="match-img" /> },
            ]}
          />
        </>
      ),
    },
    {
      stage: "Look & Match",
      part: "C",
      title: "Match It! 2",
      instruction: [["👆", "Tap a letter."], ["👆", "Tap the matching picture."]],
      body: (
        <MatchGame key="m2"
            pairs={[
              { id: "v", tileLabel: "V", tileColor: LETTER_COLOR.V, rightNode: <img src={`${IMG}/vase.avif`} alt="vase" className="match-img" /> },
              { id: "x", tileLabel: "X", tileColor: LETTER_COLOR.X, rightNode: <img src={`${IMG}/xylophone.avif`} alt="xylophone" className="match-img" /> },
            ]}
          />
      ),
    },
    {
      stage: "Look & Match",
      part: "C",
      title: "Match It! 3",
      instruction: [["👆", "Tap a letter."], ["👆", "Tap the matching picture."]],
      body: (
        <MatchGame key="m3"
            pairs={[
              { id: "w", tileLabel: "W", tileColor: LETTER_COLOR.W, rightNode: <img src={`${IMG}/watch.avif`} alt="watch" className="match-img" /> },
              { id: "v", tileLabel: "V", tileColor: LETTER_COLOR.V, rightNode: <img src={`${IMG}/volcano.jpeg`} alt="volcano" className="match-img" /> },
            ]}
          />
      ),
    },
    // 10: HIGHLIGHT Color Shop! (choose)
    {
      stage: "Color Shop!",
      part: "D",
      instruction: [["👂", "Listen to the shopkeeper."], ["🗣️", "Say the color you want."]],
      guide: "I want ___.",
      time: "~2.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Color Shop!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Orange" hex={COLOR_HEX.Orange} size={70} onZoom={onZoom} />
            <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={70} onZoom={onZoom} />
            <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} size={70} onZoom={onZoom} />
          </div>
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What color do you want?</div>
            </div>
          </div>
        </>
      ),
    },
    // 11: HIGHLIGHT Color Shop! (bonus letters)
    {
      stage: "Color Shop!",
      part: "D",
      instruction: [["👀", "Look at the letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~1.5 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Bonus Letter!</h2></span>
          <LetterTile letters="X" color={LETTER_COLOR.X} size={74} fontSize={38} onZoom={onZoom} />
        </div>
      ),
    },
    // 11b: HIGHLIGHT Color Shop! Round 2 (choose)
    {
      stage: "Color Shop!",
      part: "D",
      instruction: [["👂", "Listen to the shopkeeper."], ["🗣️", "Say the color you want."]],
      guide: "I want ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Shopping Again!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} size={70} onZoom={onZoom} />
            <ColorSwatch name="Red" hex={COLOR_HEX.Red} size={70} onZoom={onZoom} />
            <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={70} onZoom={onZoom} />
          </div>
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What color do you want this time?</div>
            </div>
          </div>
        </>
      ),
    },
    // 11c: HIGHLIGHT Color Shop! Round 2 (bonus letter)
    {
      stage: "Color Shop!",
      part: "D",
      instruction: [["👀", "Look at the letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~1 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Bonus Letter!</h2></span>
          <LetterTile letters="V" color={LETTER_COLOR.V} size={74} fontSize={38} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Color Shop!",
      part: "D",
      title: "Shopping Once More!",
      instruction: [["👂", "Listen to the shopkeeper."], ["🗣️", "Say the color you want."]],
      guide: "I want ___.",
      body: (
        <>
        <div className="word-row">
          <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={70} onZoom={onZoom} />
          <ColorSwatch name="Yellow" hex={COLOR_HEX.Yellow} size={70} onZoom={onZoom} />
          <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} size={70} onZoom={onZoom} />
        </div>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What color do you want now?</div>
            </div>
          </div>
        </>
      ),
    },
    {
      stage: "Color Shop!",
      part: "D",
      title: "Bonus Letter!",
      instruction: [["👀", "Look at the letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="W" color={LETTER_COLOR.W} size={74} fontSize={32} onZoom={onZoom} />
        </div>
      ),
    },
    // 12: Color & Letter Check
    {
      stage: "Color & Letter Check",
      part: "D",
      instruction: [["👀", "Look at each card."], ["🗣️", "Say the color or the letter."]],
      guide: "It's ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Flash Review!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Orange" hex={COLOR_HEX.Orange} size={54} onZoom={onZoom} />
            <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={54} onZoom={onZoom} />
            <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} size={54} onZoom={onZoom} />
            <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} size={54} onZoom={onZoom} />
          </div>
          <div className="letter-row">
            <LetterTile letters="Vv" color={LETTER_COLOR.V} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Ww" color={LETTER_COLOR.W} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Xx" color={LETTER_COLOR.X} size={54} fontSize={20} onZoom={onZoom} />
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
          <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} size={64} onZoom={onZoom} />
          <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} size={64} onZoom={onZoom} />
          <ColorSwatch name="Orange" hex={COLOR_HEX.Orange} size={64} onZoom={onZoom} />
          <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={64} onZoom={onZoom} />
        </div>
      ),
    },
    // 13: Favorite color
    {
      stage: "Color & Letter Check",
      part: "D",
      instruction: [["👂", "Listen to the question."], ["🗣️", "Answer the teacher."]],
      time: "~1.5 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Your Favorite!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What's your favorite color?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">My favorite color is <span className="fill"></span>.</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      stage: "Color & Letter Check",
      part: "D",
      title: "Ask the Teacher!",
      instruction: [["🗣️", "Ask the teacher."], ["👂", "Listen to the answer."]],
      body: (
          <div className="bubble-col" style={{ maxWidth: 400 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">What's your favorite color?</div>
            </div>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">My favorite color is blue.</div>
            </div>
          </div>
      ),
    },
    // 14: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <WrapUp>Today you learned Vv, Ww, Xx and four new colors.</WrapUp>
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

.slide-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 44px; position: relative; z-index: 1; gap: 16px; }

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
.bubble .fill { display: inline-block; min-width: 64px; border-bottom: 2.5px solid var(--coral-deep); vertical-align: -2px; }

.match-wrap { position: relative; z-index: 1; }
.match-game { display: flex; gap: 70px; justify-content: center; align-items: flex-start; margin-top: 6px; }
.match-col { display: flex; flex-direction: column; gap: 18px; }
.match-tile { width: 74px; height: 74px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 28px; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; }
.match-tile.is-selected { box-shadow: 0 0 0 4px #FFD166, 0 6px 14px rgba(27,42,74,0.15); transform: scale(1.06); }
.match-tile.is-matched { opacity: 0.5; cursor: default; }
.match-tile.is-wrong { animation: matchShake 0.4s ease; }
.match-right { width: 90px; height: 90px; border-radius: 16px; background: #fff; display: flex; align-items: center; justify-content: center; padding: 8px; box-shadow: 0 4px 12px rgba(27,42,74,0.1); cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; border: 3px solid transparent; }
.match-right.is-matched { border-color: #22A67E; opacity: 0.65; cursor: default; }
.match-right.is-wrong { animation: matchShake 0.4s ease; border-color: #E0567A; }
.match-img { width: 100%; height: 100%; object-fit: contain; }
.match-done { margin-top: 14px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 16px; color: #22A67E; }
@keyframes matchShake { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px); } 40% { transform: translateX(6px); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
${wrapUpStyles}
`;
