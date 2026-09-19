import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const IMG = "/curriculum/u2-l3";

const NUMBER_COLOR = {
  1: "#FF6B4A", 2: "#F2A900", 3: "#2E97C7", 4: "#22A67E", 5: "#8E6FCE",
  6: "#E0567A", 7: "#2BAFAF", 8: "#C77D2E", 9: "#D6478C", 10: "#4FA8D8",
};
const LETTER_COLOR = { P: "#C77D2E", Q: "#D6478C", R: "#4FA8D8" };

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

function CountGroup({ n, icon, size = 40, onZoom }) {
  const items = Array.from({ length: n });
  const big = (
    <div className="count-zoom">
      {items.map((_, idx) => <span key={idx} className="count-emoji" style={{ fontSize: size * 1.8 }}>{icon}</span>)}
    </div>
  );
  return (
    <div className="count-group" onClick={() => onZoom(big)}>
      {items.map((_, idx) => <span key={idx} className="count-emoji" style={{ fontSize: size }}>{icon}</span>)}
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
      {matched.length === pairs.length && <p className="match-done">Great matching! 🎉</p>}
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

export default function LettersKeepGoingLesson() {
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
  { stage: "Unit 2 · Lesson 3", time: null, note: null },
  { stage: "Hello & Count Up", time: "~3 min", note: "Greet the student and count 1 to 10 together. Show a few random numbers and have the student identify them." },
  { stage: "How Many?", time: "~3 min", note: "Introduce the question \"How many?\" Show groups of objects and model: \"How many? Five!\" Let the student practice answering." },
  { stage: "Meet P, Q, R", time: "~3 min", note: "Show uppercase and lowercase forms of P, Q, R. Have the student identify and repeat each letter." },
  { stage: "P is for...", time: "~1.5 min", note: "Say each word slowly: \"P is for panda. P is for pizza. P is for pencil.\"" },
  { stage: "Q is for...", time: "~1.5 min", note: "Say each word slowly: \"Q is for queen. Q is for quail. Q is for quilt.\"" },
  { stage: "R is for...", time: "~2 min", note: "Say each word slowly: \"R is for rabbit. R is for rainbow. R is for ring.\"" },
  { stage: "Ask & Count", time: "~2.5 min", note: "Show a group of objects. Teacher asks \"How many?\" and the student counts and answers." },
  { stage: "Ask & Count", time: "~2.5 min", note: "Now reverse roles. Have the student ask \"How many?\" and answer as the teacher." },
  { stage: "Letter & Picture Match", time: "~4 min", note: "The student taps a letter, then taps the picture that starts with it to make the match. Let them try it themselves before helping." },
  { stage: "HIGHLIGHT: How Many Monsters?", time: "~2 min", note: "Show a group of silly monsters. Student asks and answers \"How many?\"" },
  { stage: "HIGHLIGHT: How Many Monsters?", time: "~2 min", note: "Deliberately give a silly wrong answer so the student corrects you: \"No! Six!\"" },
  { stage: "Quick Count & Goodbye", time: "~1.5 min", note: "Quick review of P, Q, R." },
  { stage: "Quick Count & Goodbye", time: "~1.5 min", note: "Count 1 to 10 together and finish with the goodbye routine." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 2 · Lesson 3",
      time: null,
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Letters Keep Going!</h1></span>
          <p className="slide-p title-p">Today we learn P, Q, R and ask "How many?"</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Pp" color={LETTER_COLOR.P} onZoom={onZoom} />
            <LetterTile letters="Qq" color={LETTER_COLOR.Q} onZoom={onZoom} />
            <LetterTile letters="Rr" color={LETTER_COLOR.R} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello & Count Up
    {
      stage: "Hello & Count Up",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Count to 10!</h2></span>
          <div className="letter-row">
            <LetterTile letters="2" color={NUMBER_COLOR[2]} size={48} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="5" color={NUMBER_COLOR[5]} size={48} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="7" color={NUMBER_COLOR[7]} size={48} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="10" color={NUMBER_COLOR[10]} size={48} fontSize={16} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 3: How Many? (intro)
    {
      stage: "How Many?",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Many?</h2></span>
          <CountGroup n={5} icon="🍭" size={48} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many? Five!</div>
            </div>
          </div>
        </>
      ),
    },
    // 4: Meet P, Q, R
    {
      stage: "Meet P, Q, R",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet P, Q, R!</h2></span>
          <div className="row" style={{ marginTop: 10 }}>
            <LetterTile letters="Pp" color={LETTER_COLOR.P} size={100} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Qq" color={LETTER_COLOR.Q} size={100} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Rr" color={LETTER_COLOR.R} size={100} fontSize={40} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 5: P is for...
    {
      stage: "P is for...",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">P is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/panda.jpg`} word="Panda" label="panda" onZoom={onZoom} />
            <WordCard src={`${IMG}/pizza.avif`} word="Pizza" label="pizza" onZoom={onZoom} />
            <WordCard src={`${IMG}/pencil.jpeg`} word="Pencil" label="pencil" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: Q is for...
    {
      stage: "Q is for...",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Q is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/queen.jpg`} word="Queen" label="queen" onZoom={onZoom} />
            <WordCard src={`${IMG}/quail.jpeg`} word="Quail" label="quail" onZoom={onZoom} />
            <WordCard src={`${IMG}/quilt.avif`} word="Quilt" label="quilt" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 7: R is for...
    {
      stage: "R is for...",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">R is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/rabbit.avif`} word="Rabbit" label="rabbit" onZoom={onZoom} />
            <WordCard src={`${IMG}/rainbow.jpg`} word="Rainbow" label="rainbow" onZoom={onZoom} />
            <WordCard src={`${IMG}/ring.avif`} word="Ring" label="ring" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 8: Ask & Count
    {
      stage: "Ask & Count",
      time: "~2.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Ask & Count!</h2></span>
          <CountGroup n={6} icon="🎈" size={44} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many balloons?</div>
            </div>
          </div>
        </>
      ),
    },
    // 9: Ask & Count reversed
    {
      stage: "Ask & Count",
      time: "~2.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Your Turn to Ask!</h2></span>
          <CountGroup n={8} icon="🌟" size={40} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">How many stars?</div>
            </div>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Eight!</div>
            </div>
          </div>
        </>
      ),
    },
    // 10: Letter & Picture Match
    {
      stage: "Letter & Picture Match",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Match It!</h2></span>
          <p className="slide-p" style={{ marginBottom: 4 }}>Tap a letter, then tap the picture that starts with it!</p>
          <MatchGame
            pairs={[
              { id: "p", tileLabel: "P", tileColor: LETTER_COLOR.P, rightNode: <img src={`${IMG}/panda.jpg`} alt="panda" className="match-img" /> },
              { id: "q", tileLabel: "Q", tileColor: LETTER_COLOR.Q, rightNode: <img src={`${IMG}/queen.jpg`} alt="queen" className="match-img" /> },
              { id: "r", tileLabel: "R", tileColor: LETTER_COLOR.R, rightNode: <img src={`${IMG}/rabbit.avif`} alt="rabbit" className="match-img" /> },
            ]}
          />
        </>
      ),
    },
    // 11: HIGHLIGHT How Many Monsters? (peek)
    {
      stage: "HIGHLIGHT: How Many Monsters?",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look Carefully!</h2></span>
          <CountGroup n={6} icon="👹" size={46} onZoom={onZoom} />
          <p className="slide-p" style={{ marginTop: 4 }}>Remember how many you see... then we hide it!</p>
        </>
      ),
    },
    // 12: HIGHLIGHT How Many Monsters? (recall)
    {
      stage: "HIGHLIGHT: How Many Monsters?",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Many Was It?</h2></span>
          <div className="bubble-col" style={{ maxWidth: 400 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many monsters were there?</div>
            </div>
          </div>
          <p className="slide-p" style={{ marginTop: 10 }}>It was six! 👹</p>
        </>
      ),
    },
    // 12b: HIGHLIGHT How Many Monsters? Round 2 (peek)
    {
      stage: "HIGHLIGHT: How Many Monsters?",
      time: "~1 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look Again!</h2></span>
          <CountGroup n={9} icon="👹" size={40} onZoom={onZoom} />
          <p className="slide-p" style={{ marginTop: 4 }}>Remember how many you see... then we hide it!</p>
        </>
      ),
    },
    // 12c: HIGHLIGHT How Many Monsters? Round 2 (recall)
    {
      stage: "HIGHLIGHT: How Many Monsters?",
      time: "~1 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Many This Time?</h2></span>
          <div className="bubble-col" style={{ maxWidth: 400 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many monsters were there?</div>
            </div>
          </div>
          <p className="slide-p" style={{ marginTop: 10 }}>It was nine! 👹</p>
        </>
      ),
    },
    // 13: Quick review P-Q-R
    {
      stage: "Quick Count & Goodbye",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Flash Review!</h2></span>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Pp" color={LETTER_COLOR.P} onZoom={onZoom} />
            <LetterTile letters="Qq" color={LETTER_COLOR.Q} onZoom={onZoom} />
            <LetterTile letters="Rr" color={LETTER_COLOR.R} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 14: Count 1-10 together
    {
      stage: "Quick Count & Goodbye",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Count to 10!</h2></span>
          <div className="letter-row">
            <LetterTile letters="1" color={NUMBER_COLOR[1]} size={46} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="2" color={NUMBER_COLOR[2]} size={46} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="3" color={NUMBER_COLOR[3]} size={46} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="4" color={NUMBER_COLOR[4]} size={46} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="5" color={NUMBER_COLOR[5]} size={46} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="6" color={NUMBER_COLOR[6]} size={46} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="7" color={NUMBER_COLOR[7]} size={46} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="8" color={NUMBER_COLOR[8]} size={46} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="9" color={NUMBER_COLOR[9]} size={46} fontSize={18} onZoom={onZoom} />
            <LetterTile letters="10" color={NUMBER_COLOR[10]} size={46} fontSize={15} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 15: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <WrapUp>Today you learned Pp, Qq, and Rr, and you can ask "How many?"</WrapUp>
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
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 44px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 36px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 17px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.title-content { width: 100%; padding-left: 230px; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
.title-h { text-align: left; font-size: 38px; }
.title-p { text-align: left; max-width: 300px; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.letter-row { display: flex; gap: 14px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
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

.count-group { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: center; max-width: 420px; cursor: zoom-in; position: relative; z-index: 1; }
.count-emoji { line-height: 1; filter: drop-shadow(0 4px 8px rgba(27,42,74,0.18)); }
.count-zoom { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: center; max-width: 340px; }

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
.match-game { display: flex; gap: 60px; justify-content: center; align-items: flex-start; margin-top: 6px; }
.match-col { display: flex; flex-direction: column; gap: 16px; }
.match-tile { width: 64px; height: 64px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; }
.match-tile.is-selected { box-shadow: 0 0 0 4px #FFD166, 0 6px 14px rgba(27,42,74,0.15); transform: scale(1.06); }
.match-tile.is-matched { opacity: 0.5; cursor: default; }
.match-tile.is-wrong { animation: matchShake 0.4s ease; }
.match-right { width: 80px; height: 80px; border-radius: 16px; background: #fff; display: flex; align-items: center; justify-content: center; padding: 6px; box-shadow: 0 4px 12px rgba(27,42,74,0.1); cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; border: 3px solid transparent; }
.match-right.is-matched { border-color: #22A67E; opacity: 0.65; cursor: default; }
.match-right.is-wrong { animation: matchShake 0.4s ease; border-color: #E0567A; }
.match-img { width: 100%; height: 100%; object-fit: contain; }
.match-done { margin-top: 14px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 16px; color: #22A67E; text-align: center; }
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
