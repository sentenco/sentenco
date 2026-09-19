import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const NUMBER_COLOR = {
  1: "#FF6B4A", 2: "#F2A900", 3: "#2E97C7", 4: "#22A67E", 5: "#8E6FCE",
  6: "#E0567A", 7: "#2BAFAF", 8: "#C77D2E", 9: "#D6478C", 10: "#4FA8D8",
};
const LETTER_COLOR = {
  J: "#E0567A", K: "#2E97C7", L: "#22A67E", M: "#8E6FCE", N: "#2BAFAF",
  O: "#F2A900", P: "#C77D2E", Q: "#D6478C", R: "#4FA8D8",
};

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
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

export default function Unit2LetsReviewLesson() {
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
  { stage: "Unit 2 · Lesson 4", time: null, note: null },
  { stage: "Hello & Number Warm-Up", time: "~3 min", note: "Greet the student and count 1 to 10 together. Show random numbers and have the student say them. Fast learner? Add Count Back! (+1 min)." },
  { stage: "Number Review", time: "~3 min", note: "Show groups of objects from 1-10. Student counts and answers \"How many?\" Include a few quick out-of-order challenges. Fast learner? Add Count Again! with the strawberries (+1.5 min)." },
  { stage: "Letter Review: J-R", time: "~3 min", note: "Show J-R in mixed order. Student names the letters and matches uppercase to lowercase. Fast learner? Add Name Them Again! with the letters in a new order (+2 min)." },
  { stage: "Letter & Picture Match", time: "~5 min", note: "The student taps a letter, then taps the picture that starts with it: J -> juice, M -> moon, P -> pizza, R -> rabbit. Let them try it themselves before helping. Three rounds cover every letter: J M P, then K N R, then L O Q. Slower learner: do the first round together, tapping for the student. Fast learner? Play all three (+4 min)." },
  { stage: "Look, Count & Say", time: "~4 min", note: "Show busy pictures with groups of objects. Ask \"How many apples?\", \"How many stars?\" Student counts and answers." },
  { stage: "Number & Letter Adventure", time: "~1.3 min", note: "Stop 1: identify a letter." },
  { stage: "Number & Letter Adventure", time: "~1.3 min", note: "Stop 2: count a group of objects." },
  { stage: "Number & Letter Adventure", time: "~1.3 min", note: "Stop 3: answer or ask \"How many?\" Correct answers move the student to the next stage. Fast learner? Continue with Adventure Stops 5, 6 and 7 (letter K, 10 strawberries, then a letter and a number) (+4 min)." },
  { stage: "Final Challenge", time: "~4 min", note: "Give the student a rapid mixed challenge: identify numbers, identify J-R, count a group, and ask/answer \"How many?\" Celebrate their progress. Fast learner? Do Final Challenge 2 as well (+2 min)." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 2 · Lesson 4",
      time: null,
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Let's Review!</h1></span>
          <p className="slide-p title-p">Today we bring it all together: numbers 1 to 10 and the letters J to R.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="5" color={NUMBER_COLOR[5]} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="Jj" color={LETTER_COLOR.J} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="Rr" color={LETTER_COLOR.R} size={56} fontSize={22} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello & Number Warm-Up
    {
      stage: "Hello & Number Warm-Up",
      part: "A",
      instruction: [["👋", "Say hello."], ["🗣️", "Count to ten."]],
      time: "~3 min",
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
    {
      stage: "Hello & Number Warm-Up",
      part: "A",
      title: "Count Back!",
      instruction: [["👀", "Look at the numbers."], ["🗣️", "Count back from ten."]],
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="10" color={NUMBER_COLOR[10]} size={46} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="9" color={NUMBER_COLOR[9]} size={46} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="8" color={NUMBER_COLOR[8]} size={46} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="7" color={NUMBER_COLOR[7]} size={46} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="6" color={NUMBER_COLOR[6]} size={46} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="5" color={NUMBER_COLOR[5]} size={46} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="4" color={NUMBER_COLOR[4]} size={46} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="3" color={NUMBER_COLOR[3]} size={46} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="2" color={NUMBER_COLOR[2]} size={46} fontSize={18} onZoom={onZoom} />
          <LetterTile letters="1" color={NUMBER_COLOR[1]} size={46} fontSize={18} onZoom={onZoom} />
        </div>
      ),
    },
    // 3: Number Review
    {
      stage: "Number Review",
      part: "A",
      instruction: [["👂", "Listen to the question."], ["🗣️", "Count and answer."]],
      guide: "There are ___ grapes.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Many?</h2></span>
          <CountGroup n={7} icon="🍇" size={44} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many grapes?</div>
            </div>
          </div>
        </>
      ),
    },
    {
      stage: "Number Review",
      part: "A",
      title: "Count Again!",
      instruction: [["👂", "Listen to the question."], ["🗣️", "Count and answer."]],
      guide: "There are ___ strawberries.",
      body: (
        <>
        <CountGroup n={9} icon="🍓" size={40} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many strawberries?</div>
            </div>
          </div>
        </>
      ),
    },
    // 4: Letter Review J-R (mixed)
    {
      stage: "Letter Review: J-R",
      part: "B",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Name the Letters!</h2></span>
          <div className="letter-row">
            <LetterTile letters="Nn" color={LETTER_COLOR.N} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Jj" color={LETTER_COLOR.J} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Qq" color={LETTER_COLOR.Q} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Ll" color={LETTER_COLOR.L} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Pp" color={LETTER_COLOR.P} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Mm" color={LETTER_COLOR.M} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Rr" color={LETTER_COLOR.R} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Kk" color={LETTER_COLOR.K} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Oo" color={LETTER_COLOR.O} size={50} fontSize={19} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Letter Review: J-R",
      part: "B",
      title: "Name Them Again!",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="Rr" color={LETTER_COLOR.R} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Kk" color={LETTER_COLOR.K} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Oo" color={LETTER_COLOR.O} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Pp" color={LETTER_COLOR.P} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Jj" color={LETTER_COLOR.J} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Qq" color={LETTER_COLOR.Q} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Mm" color={LETTER_COLOR.M} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Nn" color={LETTER_COLOR.N} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Ll" color={LETTER_COLOR.L} size={50} fontSize={19} onZoom={onZoom} />
        </div>
      ),
    },
    // 5: Letter & Picture Match
    {
      stage: "Letter & Picture Match",
      part: "C",
      instruction: [["👆", "Tap a letter."], ["👆", "Tap the matching picture."]],
      time: "~5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Match It!</h2></span>
          <MatchGame
            pairs={[
              { id: "j", tileLabel: "J", tileColor: LETTER_COLOR.J, rightNode: <img src="/curriculum/u2-l1/juice.avif" alt="juice" className="match-img" /> },
              { id: "m", tileLabel: "M", tileColor: LETTER_COLOR.M, rightNode: <img src="/curriculum/u2-l2/moon.jpeg" alt="moon" className="match-img" /> },
              { id: "p", tileLabel: "P", tileColor: LETTER_COLOR.P, rightNode: <img src="/curriculum/u2-l3/pizza.avif" alt="pizza" className="match-img" /> },
            ]}
          />
        </>
      ),
    },
    {
      stage: "Letter & Picture Match",
      part: "C",
      title: "Match It! 2",
      instruction: [["👆", "Tap a letter."], ["👆", "Tap the matching picture."]],
      body: (
        <MatchGame key="m2"
            pairs={[
              { id: "k", tileLabel: "K", tileColor: LETTER_COLOR.K, rightNode: <img src="/curriculum/u2-l1/kite.jpg" alt="kite" className="match-img" /> },
              { id: "n", tileLabel: "N", tileColor: LETTER_COLOR.N, rightNode: <img src="/curriculum/u2-l2/nose.jpg" alt="nose" className="match-img" /> },
              { id: "r", tileLabel: "R", tileColor: LETTER_COLOR.R, rightNode: <img src="/curriculum/u2-l3/rabbit.avif" alt="rabbit" className="match-img" /> },
            ]}
          />
      ),
    },
    {
      stage: "Letter & Picture Match",
      part: "C",
      title: "Match It! 3",
      instruction: [["👆", "Tap a letter."], ["👆", "Tap the matching picture."]],
      body: (
        <MatchGame key="m3"
            pairs={[
              { id: "l", tileLabel: "L", tileColor: LETTER_COLOR.L, rightNode: <img src="/curriculum/u2-l1/lion.avif" alt="lion" className="match-img" /> },
              { id: "o", tileLabel: "O", tileColor: LETTER_COLOR.O, rightNode: <img src="/curriculum/u2-l2/owl.jpeg" alt="owl" className="match-img" /> },
              { id: "q", tileLabel: "Q", tileColor: LETTER_COLOR.Q, rightNode: <img src="/curriculum/u2-l3/queen.jpg" alt="queen" className="match-img" /> },
            ]}
          />
      ),
    },
    // 6: Look, Count & Say
    {
      stage: "Look, Count & Say",
      part: "C",
      instruction: [["👀", "Look at the pictures."], ["🗣️", "Count each group."]],
      guide: "There are ___ apples and ___ stars.",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look, Count & Say!</h2></span>
          <CountGroup n={4} icon="🍎" size={44} onZoom={onZoom} />
          <CountGroup n={9} icon="🌟" size={34} onZoom={onZoom} />
        </>
      ),
    },
    // 7: HIGHLIGHT Adventure Stop 1 (letter)
    {
      stage: "Number & Letter Adventure",
      part: "D",
      instruction: [["👀", "Look at the letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~1.3 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Adventure Stop 1!</h2></span>
          <LetterTile letters="Q" color={LETTER_COLOR.Q} size={74} fontSize={38} onZoom={onZoom} />
        </div>
      ),
    },
    // 8: HIGHLIGHT Adventure Stop 2 (count)
    {
      stage: "Number & Letter Adventure",
      part: "D",
      instruction: [["👀", "Look at the cookies."], ["🗣️", "Count and say the number."]],
      guide: "There are ___ cookies.",
      time: "~1.3 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Adventure Stop 2!</h2></span>
          <CountGroup n={6} icon="🍪" size={42} onZoom={onZoom} />
        </div>
      ),
    },
    // 9: HIGHLIGHT Adventure Stop 3 (ask/answer)
    {
      stage: "Number & Letter Adventure",
      part: "D",
      instruction: [["👀", "Look at the fish."], ["🗣️", "Ask the teacher."]],
      time: "~1.3 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Adventure Stop 3!</h2></span>
          <CountGroup n={8} icon="🐟" size={40} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">How many?</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      stage: "Number & Letter Adventure",
      part: "D",
      title: "Adventure Stop 5!",
      instruction: [["👀", "Look at the letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      body: (
        <LetterTile letters="K" color={LETTER_COLOR.K} size={74} fontSize={32} onZoom={onZoom} />
      ),
    },
    {
      stage: "Number & Letter Adventure",
      part: "D",
      title: "Adventure Stop 6!",
      instruction: [["👀", "Look at the strawberries."], ["🗣️", "Count and say the number."]],
      guide: "There are ___ strawberries.",
      body: (
        <CountGroup n={10} icon="🍓" size={36} onZoom={onZoom} />
      ),
    },
    // 9b: HIGHLIGHT Adventure Stop 4 (mixed)
    {
      stage: "Number & Letter Adventure",
      part: "D",
      instruction: [["👀", "Look at the cards."], ["🗣️", "Say the letter and the number."]],
      guide: "It's the letter ___ and the number ___.",
      time: "~1 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Adventure Stop 4!</h2></span>
          <div className="letter-row">
            <LetterTile letters="Mm" color={LETTER_COLOR.M} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="6" color={NUMBER_COLOR[6]} size={54} fontSize={22} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    {
      stage: "Number & Letter Adventure",
      part: "D",
      title: "Adventure Stop 7!",
      instruction: [["👀", "Look at the cards."], ["🗣️", "Say the letter and the number."]],
      guide: "It's the letter ___ and the number ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="Rr" color={LETTER_COLOR.R} size={54} fontSize={20} onZoom={onZoom} />
          <LetterTile letters="8" color={NUMBER_COLOR[8]} size={54} fontSize={20} onZoom={onZoom} />
        </div>
      ),
    },
    // 10: Final Challenge
    {
      stage: "Final Challenge",
      part: "D",
      instruction: [["👀", "Look at everything."], ["🗣️", "Say each card. Count the balloons."]],
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Final Challenge!</h2></span>
          <div className="letter-row">
            <LetterTile letters="9" color={NUMBER_COLOR[9]} size={50} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Ll" color={LETTER_COLOR.L} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="3" color={NUMBER_COLOR[3]} size={50} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Oo" color={LETTER_COLOR.O} size={50} fontSize={19} onZoom={onZoom} />
          </div>
          <CountGroup n={5} icon="🎈" size={36} onZoom={onZoom} />
        </>
      ),
    },
    {
      stage: "Final Challenge",
      part: "D",
      title: "Final Challenge 2!",
      instruction: [["👀", "Look at everything."], ["🗣️", "Say each card. Count the stars."]],
      body: (
        <>
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="5" color={NUMBER_COLOR[5]} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Kk" color={LETTER_COLOR.K} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="8" color={NUMBER_COLOR[8]} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Pp" color={LETTER_COLOR.P} size={50} fontSize={19} onZoom={onZoom} />
        </div>
        <CountGroup n={7} icon="⭐" size={38} onZoom={onZoom} />
        </>
      ),
    },
    // 11: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <WrapUp>You know 1 to 10 and Jj to Rr, and you can ask and answer "How many?"</WrapUp>
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

.slide-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 22px 44px; position: relative; z-index: 1; gap: 16px; }

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

.letter-row { display: flex; gap: 12px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 22px; background: #fff; box-shadow: 0 0 0 5px #fff, 0 10px 22px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 9px; font-weight: 700; text-align: center; padding: 0 6px; }

.count-group { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: center; max-width: 420px; cursor: zoom-in; position: relative; z-index: 1; }
.count-emoji { line-height: 1; filter: drop-shadow(0 4px 8px rgba(27,42,74,0.18)); }
.count-zoom { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: center; max-width: 340px; }

.bubble-col { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; overflow: hidden; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: #fff; border-radius: 18px; padding: 12px 16px; font-weight: 700; font-size: 15px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
.bubble.left { border-radius: 18px 18px 18px 4px; }
.bubble.right { border-radius: 18px 18px 4px 18px; }

.match-wrap { position: relative; z-index: 1; }
.match-game { display: flex; gap: 60px; justify-content: center; align-items: flex-start; margin-top: 6px; }
.match-col { display: flex; flex-direction: column; gap: 8px; }
.match-tile { width: 60px; height: 60px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; }
.match-tile.is-selected { box-shadow: 0 0 0 4px #FFD166, 0 6px 14px rgba(27,42,74,0.15); transform: scale(1.06); }
.match-tile.is-matched { opacity: 0.5; cursor: default; }
.match-tile.is-wrong { animation: matchShake 0.4s ease; }
.match-right { width: 72px; height: 72px; border-radius: 16px; background: #fff; display: flex; align-items: center; justify-content: center; padding: 6px; box-shadow: 0 4px 12px rgba(27,42,74,0.1); cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; border: 3px solid transparent; }
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
