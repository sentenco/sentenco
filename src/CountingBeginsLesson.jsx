import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const IMG = "/curriculum/u2-l1";

const NUMBER_COLOR = { 1: "#FF6B4A", 2: "#F2A900", 3: "#2E97C7", 4: "#22A67E", 5: "#8E6FCE" };
const LETTER_COLOR = { J: "#E0567A", K: "#2E97C7", L: "#22A67E" };
const REVIEW_COLOR = {
  A: "#F2A900", B: "#2E97C7", C: "#22A67E", D: "#E0567A", E: "#8E6FCE",
  F: "#2BAFAF", G: "#C77D2E", H: "#D6478C", I: "#4FA8D8",
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

export default function CountingBeginsLesson() {
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
  { stage: "Unit 2 · Lesson 1", time: null, note: null },
  { stage: "Hello & Unit 1 Review", time: "~3 min", note: "Greet the student naturally, then flash a few mixed A-I letter cards quickly. Keep this short, the focus is moving to numbers." },
  { stage: "Meet 1-5", time: "~3 min", note: "Count 1 to 5 using your fingers and simple objects. Count slowly first, then invite the student to count along." },
  { stage: "Meet J, K, L", time: "~3 min", note: "Show uppercase and lowercase forms of J, K, L. Have the student identify and repeat each letter." },
  { stage: "J is for...", time: "~1.5 min", note: "Say each word slowly: \"J is for juice. J is for jam. J is for jellyfish.\"" },
  { stage: "K is for...", time: "~1.5 min", note: "Say each word slowly: \"K is for kite. K is for king. K is for koala.\"" },
  { stage: "L is for...", time: "~1.5 min", note: "Say each word slowly: \"L is for lion. L is for leaf. L is for lamp.\"" },
  { stage: "Count & Say", time: "~2.5 min", note: "Show a group of apples. Student counts aloud: \"One! Two! Three!\" Mix the quantity so it isn't memorized." },
  { stage: "Count & Say", time: "~2.5 min", note: "Repeat with a different quantity of stars so the student connects the number, word, and quantity. Fast learner? Add the Count It! slides (balloons, bananas) (+3 min)." },
  { stage: "Look & Match", time: "~4 min", note: "The student taps a number, then taps the group with that many to make the match. Let them try it themselves before helping. Fast learner? Play the two extra Match It! rounds (+3 min). Slower learner: do the first round together, tapping for the student." },
  { stage: "How Many?", time: "~2 min", note: "Show a group of kites for a few seconds, then hide it. Ask \"How many?\", let the student remember and answer, then ask what letter kite starts with (K)." },
  { stage: "How Many?", time: "~2 min", note: "Repeat with a group of leaves. Ask \"How many?\", then what letter leaf starts with (L). Fast learner? Add the juice-box round with the letter J (+2 min)." },
  { stage: "Count & Say Goodbye", time: "~1.5 min", note: "Count 1 to 5 together one final time. Fast learner? Count backwards from 5 too (+1 min)." },
  { stage: "Count & Say Goodbye", time: "~1.5 min", note: "Flash J, K, L for a quick identification check, then finish with the familiar goodbye routine. Fast learner? Use Flash Review Again! and Number or Letter? (+2 min)." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 2 · Lesson 1",
      time: null,
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Counting Begins!</h1></span>
          <p className="slide-p title-p">Today we count 1 to 5 and learn the letters J, K, and L.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="1" color={NUMBER_COLOR[1]} size={62} fontSize={26} onZoom={onZoom} />
            <LetterTile letters="2" color={NUMBER_COLOR[2]} size={62} fontSize={26} onZoom={onZoom} />
            <LetterTile letters="3" color={NUMBER_COLOR[3]} size={62} fontSize={26} onZoom={onZoom} />
            <LetterTile letters="4" color={NUMBER_COLOR[4]} size={62} fontSize={26} onZoom={onZoom} />
            <LetterTile letters="5" color={NUMBER_COLOR[5]} size={62} fontSize={26} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello & Unit 1 Review
    {
      stage: "Hello & Unit 1 Review",
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
              <div className="bubble left">Hello! Do you remember your letters?</div>
            </div>
          </div>
          <div className="letter-row">
            <LetterTile letters="Bb" color={REVIEW_COLOR.B} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Ee" color={REVIEW_COLOR.E} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Gg" color={REVIEW_COLOR.G} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Ii" color={REVIEW_COLOR.I} size={54} fontSize={20} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 3: Meet 1-5
    {
      stage: "Meet 1-5",
      part: "B",
      instruction: [["👀", "Look at each number."], ["🗣️", "Say the number."]],
      guide: "It's the number ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet 1, 2, 3, 4, 5!</h2></span>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="1" color={NUMBER_COLOR[1]} size={80} fontSize={34} onZoom={onZoom} />
            <LetterTile letters="2" color={NUMBER_COLOR[2]} size={80} fontSize={34} onZoom={onZoom} />
            <LetterTile letters="3" color={NUMBER_COLOR[3]} size={80} fontSize={34} onZoom={onZoom} />
            <LetterTile letters="4" color={NUMBER_COLOR[4]} size={80} fontSize={34} onZoom={onZoom} />
            <LetterTile letters="5" color={NUMBER_COLOR[5]} size={80} fontSize={34} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 4: Meet J, K, L
    {
      stage: "Meet J, K, L",
      part: "B",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet J, K, L!</h2></span>
          <div className="row" style={{ marginTop: 10 }}>
            <LetterTile letters="Jj" color={LETTER_COLOR.J} size={92} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Kk" color={LETTER_COLOR.K} size={92} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Ll" color={LETTER_COLOR.L} size={92} fontSize={40} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 5: J is for...
    {
      stage: "J is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "J is for ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">J is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/juice.avif`} word="Juice" label="juice" onZoom={onZoom} />
            <WordCard src={`${IMG}/jam.avif`} word="Jam" label="jam" onZoom={onZoom} />
            <WordCard src={`${IMG}/jellyfish.jpg`} word="Jellyfish" label="jellyfish" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: K is for...
    {
      stage: "K is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "K is for ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">K is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/kite.jpg`} word="Kite" label="kite" onZoom={onZoom} />
            <WordCard src={`${IMG}/king.jpg`} word="King" label="king" onZoom={onZoom} />
            <WordCard src={`${IMG}/koala.avif`} word="Koala" label="koala" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 7: L is for...
    {
      stage: "L is for...",
      part: "B",
      instruction: [["👀", "Look at each picture."], ["🗣️", "Say the word."]],
      guide: "L is for ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">L is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/lion.avif`} word="Lion" label="lion" onZoom={onZoom} />
            <WordCard src={`${IMG}/leaf.avif`} word="Leaf" label="leaf" onZoom={onZoom} />
            <WordCard src={`${IMG}/lamp.avif`} word="Lamp" label="lamp" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 8: Count & Say (apples)
    {
      stage: "Count & Say",
      part: "C",
      instruction: [["👀", "Look at the apples."], ["🗣️", "Count and say the number."]],
      guide: "There are ___ apples.",
      time: "~2.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Count & Say!</h2></span>
          <CountGroup n={3} icon="🍎" size={54} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">One, two, three! How many apples?</div>
            </div>
          </div>
        </>
      ),
    },
    // 9: Count & Say (stars)
    {
      stage: "Count & Say",
      part: "C",
      instruction: [["👀", "Look at the stars."], ["🗣️", "Count and say the number."]],
      guide: "There are ___ stars.",
      time: "~2.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Count Again!</h2></span>
          <CountGroup n={5} icon="⭐" size={50} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many stars this time?</div>
            </div>
          </div>
        </>
      ),
    },
    {
      stage: "Count & Say",
      part: "C",
      title: "Count It! 1",
      instruction: [["👀", "Look at the balloons."], ["🗣️", "Count and say the number."]],
      guide: "There are ___ balloons.",
      body: (
        <CountGroup n={4} icon="🎈" size={54} onZoom={onZoom} />
      ),
    },
    {
      stage: "Count & Say",
      part: "C",
      title: "Count It! 2",
      instruction: [["👀", "Look at the bananas."], ["🗣️", "Count and say the number."]],
      guide: "There are ___ bananas.",
      body: (
        <CountGroup n={2} icon="🍌" size={64} onZoom={onZoom} />
      ),
    },
    // 10: Look & Match
    {
      stage: "Look & Match",
      part: "C",
      instruction: [["👆", "Tap a number."], ["👆", "Tap the same amount."]],
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look & Match!</h2></span>
          <MatchGame
            pairs={[
              { id: "n4", tileLabel: "4", tileColor: NUMBER_COLOR[4], rightNode: <span className="match-emojis">🎈🎈🎈🎈</span> },
              { id: "n3", tileLabel: "3", tileColor: NUMBER_COLOR[3], rightNode: <span className="match-emojis">🧃🧃🧃</span> },
            ]}
          />
        </>
      ),
    },
    {
      stage: "Look & Match",
      part: "C",
      title: "Match It! 2",
      instruction: [["👆", "Tap a number."], ["👆", "Tap the same amount."]],
      body: (
        <MatchGame key="m2"
            pairs={[
              { id: "n1", tileLabel: "1", tileColor: NUMBER_COLOR[1], rightNode: <span className="match-emojis">🍌</span> },
              { id: "n4", tileLabel: "4", tileColor: NUMBER_COLOR[4], rightNode: <span className="match-emojis">🐟🐟🐟🐟</span> },
            ]}
          />
      ),
    },
    {
      stage: "Look & Match",
      part: "C",
      title: "Match It! 3",
      instruction: [["👆", "Tap a number."], ["👆", "Tap the same amount."]],
      body: (
        <MatchGame key="m3"
            pairs={[
              { id: "n2", tileLabel: "2", tileColor: NUMBER_COLOR[2], rightNode: <span className="match-emojis">🐶🐶</span> },
              { id: "n5", tileLabel: "5", tileColor: NUMBER_COLOR[5], rightNode: <span className="match-emojis">⭐⭐⭐⭐⭐</span> },
            ]}
          />
      ),
    },
    // 11: HIGHLIGHT How Many? (peek)
    {
      stage: "How Many?",
      part: "D",
      instruction: [["👀", "Look at the kites."], ["🤔", "Remember how many!"]],
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look Carefully!</h2></span>
          <CountGroup n={4} icon="🪁" size={54} onZoom={onZoom} />
        </>
      ),
    },
    // 12: HIGHLIGHT How Many? (recall) + letter challenge
    {
      stage: "How Many?",
      part: "D",
      instruction: [["🤔", "Remember!"], ["🗣️", "Say the number and the letter."]],
      guide: "There were ___. It's the letter ___.",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Many?</h2></span>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many kites were there?</div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            <LetterTile letters="K" color={LETTER_COLOR.K} size={62} fontSize={28} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 12b: HIGHLIGHT How Many? Round 2 (peek)
    {
      stage: "How Many?",
      part: "D",
      instruction: [["👀", "Look at the leaves."], ["🤔", "Remember how many!"]],
      time: "~1 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look Again!</h2></span>
          <CountGroup n={5} icon="🍃" size={50} onZoom={onZoom} />
        </>
      ),
    },
    // 12c: HIGHLIGHT How Many? Round 2 (recall) + letter challenge
    {
      stage: "How Many?",
      part: "D",
      instruction: [["🤔", "Remember!"], ["🗣️", "Say the number and the letter."]],
      guide: "There were ___. It's the letter ___.",
      time: "~1 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Many This Time?</h2></span>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many leaves were there?</div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            <LetterTile letters="L" color={LETTER_COLOR.L} size={62} fontSize={28} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "How Many?",
      part: "D",
      title: "One More Time!",
      instruction: [["👀", "Look at the juice."], ["🤔", "Remember how many!"]],
      body: (
        <CountGroup n={3} icon="🧃" size={54} onZoom={onZoom} />
      ),
    },
    {
      stage: "How Many?",
      part: "D",
      title: "How Many Was It?",
      instruction: [["🤔", "Remember!"], ["🗣️", "Say the number and the letter."]],
      guide: "There were ___. It's the letter ___.",
      body: (
        <>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many juice boxes were there?</div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            <LetterTile letters="J" color={LETTER_COLOR.J} size={62} fontSize={26} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 13: Count & Say Goodbye (1-5)
    {
      stage: "Count & Say Goodbye",
      part: "D",
      instruction: [["👀", "Look at each number."], ["🗣️", "Count to five."]],
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Count to 5!</h2></span>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="1" color={NUMBER_COLOR[1]} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="2" color={NUMBER_COLOR[2]} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="3" color={NUMBER_COLOR[3]} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="4" color={NUMBER_COLOR[4]} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="5" color={NUMBER_COLOR[5]} size={56} fontSize={22} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Count & Say Goodbye",
      part: "D",
      title: "Count Back!",
      instruction: [["👀", "Look at the numbers."], ["🗣️", "Count back from five."]],
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="5" color={NUMBER_COLOR[5]} size={56} fontSize={22} onZoom={onZoom} />
          <LetterTile letters="4" color={NUMBER_COLOR[4]} size={56} fontSize={22} onZoom={onZoom} />
          <LetterTile letters="3" color={NUMBER_COLOR[3]} size={56} fontSize={22} onZoom={onZoom} />
          <LetterTile letters="2" color={NUMBER_COLOR[2]} size={56} fontSize={22} onZoom={onZoom} />
          <LetterTile letters="1" color={NUMBER_COLOR[1]} size={56} fontSize={22} onZoom={onZoom} />
        </div>
      ),
    },
    // 14: J-K-L flash review
    {
      stage: "Count & Say Goodbye",
      part: "D",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Flash Review!</h2></span>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Jj" color={LETTER_COLOR.J} onZoom={onZoom} />
            <LetterTile letters="Kk" color={LETTER_COLOR.K} onZoom={onZoom} />
            <LetterTile letters="Ll" color={LETTER_COLOR.L} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Count & Say Goodbye",
      part: "D",
      title: "Flash Review Again!",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="Ll" color={LETTER_COLOR.L} size={74} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="Jj" color={LETTER_COLOR.J} size={74} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="Kk" color={LETTER_COLOR.K} size={74} fontSize={28} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Count & Say Goodbye",
      part: "D",
      title: "Number or Letter?",
      instruction: [["👀", "Look at each card."], ["🗣️", "Say the number or the letter."]],
      guide: "It's ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="3" color={NUMBER_COLOR[3]} size={62} fontSize={24} onZoom={onZoom} />
          <LetterTile letters="K" color={LETTER_COLOR.K} size={62} fontSize={24} onZoom={onZoom} />
          <LetterTile letters="5" color={NUMBER_COLOR[5]} size={62} fontSize={24} onZoom={onZoom} />
          <LetterTile letters="L" color={LETTER_COLOR.L} size={62} fontSize={24} onZoom={onZoom} />
          <LetterTile letters="1" color={NUMBER_COLOR[1]} size={62} fontSize={24} onZoom={onZoom} />
        </div>
      ),
    },
    // 15: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <WrapUp>Today you counted 1 to 5 and learned Jj, Kk, and Ll.</WrapUp>
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
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 48px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 38px; }
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
.match-game { display: flex; gap: 70px; justify-content: center; align-items: flex-start; margin-top: 6px; }
.match-col { display: flex; flex-direction: column; gap: 18px; }
.match-tile { width: 74px; height: 74px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 28px; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; }
.match-tile.is-selected { box-shadow: 0 0 0 4px #FFD166, 0 6px 14px rgba(27,42,74,0.15); transform: scale(1.06); }
.match-tile.is-matched { opacity: 0.5; cursor: default; }
.match-tile.is-wrong { animation: matchShake 0.4s ease; }
.match-right { width: 130px; min-height: 74px; border-radius: 16px; background: #fff; display: flex; align-items: center; justify-content: center; padding: 8px; box-shadow: 0 4px 12px rgba(27,42,74,0.1); cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; border: 3px solid transparent; }
.match-right.is-matched { border-color: #22A67E; opacity: 0.65; cursor: default; }
.match-right.is-wrong { animation: matchShake 0.4s ease; border-color: #E0567A; }
.match-emojis { font-size: 22px; letter-spacing: 2px; }
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
