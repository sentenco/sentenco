import React, { useEffect, useRef, useState } from "react";

// Reusable teacher-clicked games for Ignite (A1) and Ablaze (A2) Teens. Text-based (no
// picture dependency, unlike the Kids games) since Teens content is dialogue/vocab driven.
// Each game keeps its own state inside the slide, so moving to another slide resets it.
//   wheel      { items: [{label}], question? }         spin; lands on each item once before repeating
//   mystery    { clues: [str,...], answer, question? } reveal clues one at a time, guess before the last
//   speed      { items: [str,...], seconds }            beat the clock, cycle through prompts
//   thisorthat { pairs: [[a,b],...] }                   forced choice, then justify
//   orderup    { items: [str,...] }                     items already in correct order; shuffled for display
//   factorcap  { statements: [{text, isTrue, explain}] } judge true/false, reveal + explain

const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

const WHEEL_COLORS = ["#FF6B4A", "#1B2A4A", "#2F9E7A", "#8B6BD1", "#F2A900", "#E0502F"];

let measureCtx = null;
function textWidthAt16(label) {
  if (!measureCtx) measureCtx = document.createElement("canvas").getContext("2d");
  measureCtx.font = "800 16px 'Baloo 2', sans-serif";
  return measureCtx.measureText(label).width;
}
function wedgeFont(label, availChord) {
  const w16 = textWidthAt16(label) || label.length * 8.6;
  const fit = (availChord * 0.92 * 16) / w16;
  return Math.max(9, Math.min(16, fit));
}
const textRadiusFor = (n) => (n <= 4 ? 54 : n <= 6 ? 64 : 72);

export function WheelBlock({ heading, items = [], question, size = 176 }) {
  const n = items.length;
  const seg = 360 / n;
  const R = 98;
  const textR = textRadiusFor(n);
  const availChord = 2 * textR * Math.sin((seg / 2) * (Math.PI / 180));
  const [rot, setRot] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const pool = useRef([]);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  function spin() {
    if (spinning) return;
    if (pool.current.length === 0) pool.current = shuffle([...Array(n).keys()]);
    const idx = pool.current.pop();
    const target = 360 - (idx * seg + seg / 2);
    const cur = ((rot % 360) + 360) % 360;
    const delta = ((target - cur) + 360) % 360 + 360 * 4;
    setResult(null);
    setSpinning(true);
    setRot(rot + delta);
    timer.current = setTimeout(() => { setSpinning(false); setResult(idx); }, 2600);
  }

  const pt = (deg, r) => [100 + r * Math.sin((deg * Math.PI) / 180), 100 - r * Math.cos((deg * Math.PI) / 180)];
  const got = result !== null ? items[result] : null;
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="tg-wheel-row">
        <div className="tg-wheel-wrap" style={{ width: size, height: size }}>
          <svg className="tg-wheel-marker" viewBox="0 0 34 39" aria-hidden="true">
            <path d="M17 39 2.5 12.7A15.3 15.3 0 1 1 31.5 12.7Z" fill="var(--coral-deep, #E0502F)" stroke="#fff" strokeWidth="2.6" />
            <circle cx="17" cy="14.3" r="5.5" fill="#fff" />
          </svg>
          <svg viewBox="0 0 200 200" className="tg-wheel" style={{ transform: `rotate(${rot}deg)`, transition: spinning ? "transform 2.5s cubic-bezier(.12,.6,.12,1)" : "none" }}>
            <circle cx="100" cy="100" r="99.5" fill="none" stroke="#fff" strokeWidth="1" />
            {items.map((it, i) => {
              const [x0, y0] = pt(i * seg, R);
              const [x1, y1] = pt((i + 1) * seg, R);
              const [tx, ty] = pt(i * seg + seg / 2, textR);
              return (
                <g key={i}>
                  <path d={`M100 100 L${x0} ${y0} A${R} ${R} 0 0 1 ${x1} ${y1} Z`} fill={WHEEL_COLORS[i % WHEEL_COLORS.length]} stroke="#fff" strokeWidth="3.5" />
                  <text x={tx} y={ty} transform={`rotate(${i * seg + seg / 2} ${tx} ${ty})`} textAnchor="middle" dominantBaseline="middle" className="tg-wheel-text" style={{ fontSize: wedgeFont(it.label, availChord) }}>{it.label}</text>
                </g>
              );
            })}
            <circle cx="100" cy="100" r="17" fill="#fff" />
            <circle cx="100" cy="100" r="17" fill="none" stroke="var(--navy, #1B2A4A)" strokeWidth="3" />
            <circle cx="100" cy="100" r="7" fill="var(--coral, #FF6B4A)" />
          </svg>
        </div>
        <div className="tg-panel">
          {got ? (
            <div className="tg-result-word">{got.label}</div>
          ) : (
            <div className="tg-prompt">{spinning ? "Spinning..." : (question || "Spin for a topic")}</div>
          )}
          <button type="button" className="tg-btn tg-btn--lg" onClick={spin} disabled={spinning}>{result === null && !spinning ? "Spin!" : "Spin again"}</button>
        </div>
      </div>
    </div>
  );
}

export function MysteryBlock({ heading, clues = [], answer, question }) {
  const [shown, setShown] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const total = clues.length;
  function next() {
    if (shown < total) setShown(shown + 1);
    else setRevealed(true);
  }
  function again() { setShown(0); setRevealed(false); }
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {question && <p className="slide-p">{question}</p>}
      <div className="tg-clue-grid">
        {clues.map((c, i) => (
          <div key={i} className={`tg-clue-tile ${i < shown ? "is-open" : ""}`}>
            <span className="tg-clue-num">{i + 1}</span>
            {i < shown ? <span className="tg-clue-text">{c}</span> : <span className="tg-clue-q">?</span>}
          </div>
        ))}
      </div>
      {revealed ? (
        <>
          <div className="tg-answer-chip">{answer}</div>
          <button type="button" className="tg-btn" onClick={again}>Play again</button>
        </>
      ) : (
        <button type="button" className="tg-btn tg-btn--lg" onClick={next}>{shown < total ? "Reveal a clue" : "Show the answer"}</button>
      )}
    </div>
  );
}

const fmt = (s) => `0:${String(s).padStart(2, "0")}`;

export function SpeedBlock({ heading, items = [], seconds = 45 }) {
  const [status, setStatus] = useState("ready");
  const [left, setLeft] = useState(seconds);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (status !== "running") return undefined;
    const t = setInterval(() => setLeft((l) => l - 1), 1000);
    return () => clearInterval(t);
  }, [status]);
  useEffect(() => { if (status === "running" && left <= 0) setStatus("done"); }, [left, status]);

  const it = items[idx % items.length];
  function start() { setStatus("running"); setLeft(seconds); setIdx(0); setScore(0); }
  function got() { setScore((s) => s + 1); setIdx((i) => i + 1); }
  function again() { setStatus("ready"); }

  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {status === "ready" && (
        <>
          <p className="slide-p">Beat the clock -- how many can you get through?</p>
          <button type="button" className="tg-btn tg-btn--lg" onClick={start}>Start ({fmt(seconds)})</button>
        </>
      )}
      {status === "running" && (
        <>
          <div className="tg-timer">{fmt(Math.max(left, 0))}</div>
          <div className="tg-speed-word">{it}</div>
          <button type="button" className="tg-btn tg-btn--lg" onClick={got}>Got it -- Next</button>
        </>
      )}
      {status === "done" && (
        <>
          <div className="tg-score">{score} in {fmt(seconds)}</div>
          <button type="button" className="tg-btn" onClick={again}>Play again</button>
        </>
      )}
    </div>
  );
}

export function ThisOrThatBlock({ heading, pairs = [] }) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const pair = pairs[idx % pairs.length];
  function pick(side) { setPicked(side); }
  function next() { setPicked(null); setIdx((i) => i + 1); }
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="tg-tot-row">
        <button type="button" className={`tg-tot-card ${picked === "a" ? "is-picked" : ""}`} onClick={() => pick("a")} disabled={picked !== null}>{pair[0]}</button>
        <span className="tg-tot-or">or</span>
        <button type="button" className={`tg-tot-card ${picked === "b" ? "is-picked" : ""}`} onClick={() => pick("b")} disabled={picked !== null}>{pair[1]}</button>
      </div>
      {picked && <p className="slide-p tg-tot-followup">Why? Say one sentence.</p>}
      <button type="button" className="tg-btn" onClick={next}>Next pair</button>
    </div>
  );
}

export function OrderUpBlock({ heading, items = [], prompt }) {
  const [display] = useState(() => {
    let s = shuffle(items.map((_, i) => i));
    while (items.length > 1 && s.every((v, i) => v === i)) s = shuffle(items.map((_, i) => i));
    return s;
  });
  const [placed, setPlaced] = useState([]);
  const [wrong, setWrong] = useState(null);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const done = placed.length === items.length;
  function pick(i) {
    if (done || placed.includes(i)) return;
    if (i === placed.length) setPlaced([...placed, i]);
    else { setWrong(i); clearTimeout(timer.current); timer.current = setTimeout(() => setWrong(null), 450); }
  }
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {prompt && <p className="slide-p">{prompt}</p>}
      <div className="tg-order-col">
        {display.map((i) => (
          <button key={i} type="button" className={`tg-order-card ${placed.includes(i) ? "is-placed" : ""} ${wrong === i ? "is-shake" : ""}`} onClick={() => pick(i)}>
            {placed.includes(i) && <span className="tg-order-num">{placed.indexOf(i) + 1}</span>}
            <span className="tg-order-text">{items[i]}</span>
          </button>
        ))}
      </div>
      {done && <div className="tg-answer-chip">In order!</div>}
    </div>
  );
}

export function FactOrCapBlock({ heading, statements = [] }) {
  const [idx, setIdx] = useState(0);
  const [choice, setChoice] = useState(null);
  const s = statements[idx % statements.length];
  function pick(v) { setChoice(v); }
  function next() { setChoice(null); setIdx((i) => i + 1); }
  const correct = choice !== null && choice === s.isTrue;
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="tg-foc-card">{s.text}</div>
      {choice === null ? (
        <div className="tg-foc-row">
          <button type="button" className="tg-btn tg-foc-fact" onClick={() => pick(true)}>Fact</button>
          <button type="button" className="tg-btn tg-foc-cap" onClick={() => pick(false)}>Cap</button>
        </div>
      ) : (
        <>
          <div className={`tg-foc-verdict ${correct ? "is-right" : "is-wrong"}`}>{s.isTrue ? "That's a Fact" : "That's Cap"}</div>
          {s.explain && <p className="slide-p">{s.explain}</p>}
          <button type="button" className="tg-btn" onClick={next}>Next</button>
        </>
      )}
    </div>
  );
}

// Text-only dice roll -- ported from A2 Kids' DiceBlock, dropped the
// picture-tile mode since Teens content is text, not illustrated.
// One die rolls one word/phrase; two or more dice combine into a prompt
// (e.g. a person die + an adjective die -> "describe your [person] who is
// [adjective]"). Draw-pile per die so nothing repeats until every face
// has shown once, same rule as the wheel.
export function DiceBlock({ heading, dice = [] }) {
  const [vals, setVals] = useState(null);
  const [rolling, setRolling] = useState(false);
  const timer = useRef(null);
  const pools = useRef(dice.map(() => []));
  useEffect(() => () => clearTimeout(timer.current), []);
  const pickRandom = () => dice.map((d) => Math.floor(Math.random() * d.items.length));
  const pickFinal = () => dice.map((d, i) => {
    if (pools.current[i].length === 0) pools.current[i] = shuffle([...Array(d.items.length).keys()]);
    return pools.current[i].pop();
  });
  function roll() {
    if (rolling) return;
    setRolling(true);
    let n = 0;
    timer.current = setInterval(() => {
      n += 1;
      if (n >= 9) { clearInterval(timer.current); setVals(pickFinal()); setRolling(false); }
      else setVals(pickRandom());
    }, 110);
  }
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="tg-dice-row">
        {dice.map((d, i) => {
          const label = vals ? d.items[vals[i]] : null;
          return (
            <div key={i} className="tg-dice-col">
              <span className="tg-dice-name">{d.name}</span>
              <div className={`tg-dice-face ${rolling ? "is-rolling" : ""}`}>{label || "?"}</div>
            </div>
          );
        })}
      </div>
      <button type="button" className="tg-btn" onClick={roll} disabled={rolling}>{vals ? "Roll again" : "Roll!"}</button>
    </div>
  );
}

export const TEENS_GAME_BLOCKS = {
  wheel: WheelBlock,
  mystery: MysteryBlock,
  speed: SpeedBlock,
  thisorthat: ThisOrThatBlock,
  orderup: OrderUpBlock,
  factorcap: FactOrCapBlock,
  dice: DiceBlock,
};

export const teensGameStyles = `
.tg-wheel-row { display: flex; align-items: center; justify-content: center; gap: 24px; }
.tg-wheel-wrap { position: relative; margin-top: 12px; }
.tg-wheel-marker { position: absolute; top: -12px; left: 50%; width: 27px; height: 31px; margin-left: -13.5px; z-index: 3; filter: drop-shadow(0 2px 3px rgba(27,42,74,0.25)); }
.tg-wheel { width: 100%; height: 100%; display: block; filter: drop-shadow(0 8px 16px rgba(27,42,74,0.18)); }
.tg-wheel-text { font-family: 'Baloo 2', sans-serif; font-weight: 800; fill: #fff; }
.tg-panel { display: flex; flex-direction: column; align-items: center; gap: 12px; background: var(--navy-light, #E4E9F5); border: 2px solid var(--navy, #1B2A4A); border-radius: 18px; padding: 16px 22px; min-width: 170px; }
.tg-prompt { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13.5px; color: var(--ink-soft, #736A87); text-align: center; }
.tg-result-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 19px; color: var(--navy, #1B2A4A); text-align: center; }
.tg-btn { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 10px 20px; border-radius: 14px; border: none; cursor: pointer; background: linear-gradient(180deg, var(--coral, #FF6B4A) 0%, var(--coral-deep, #E0502F) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.35), 0 8px 16px rgba(224,80,47,0.28); }
.tg-btn:disabled { opacity: 0.5; cursor: default; }
.tg-btn--lg { padding: 12px 26px; font-size: 14px; }

.tg-clue-grid { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; max-width: 460px; margin: 0 auto 16px; }
.tg-clue-tile { position: relative; min-width: 96px; max-width: 150px; min-height: 62px; border-radius: 14px; background: var(--navy-light, #E4E9F5); border: 2px solid var(--navy, #1B2A4A); display: flex; align-items: center; justify-content: center; padding: 10px 12px; text-align: center; }
.tg-clue-num { position: absolute; top: 4px; left: 8px; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 10px; color: var(--coral-deep, #E0502F); }
.tg-clue-q { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 20px; color: var(--navy, #1B2A4A); }
.tg-clue-text { font-family: 'Quicksand', 'Inter', sans-serif; font-weight: 600; font-size: 12.5px; color: var(--ink, #2B2438); line-height: 1.3; }
.tg-clue-tile.is-open { background: var(--coral-light, #FFE6DD); border-color: var(--coral-deep, #E0502F); }
.tg-answer-chip { display: inline-block; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 16px; color: #fff; background: var(--navy, #1B2A4A); padding: 8px 20px; border-radius: 999px; margin-bottom: 12px; }

.tg-timer { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 15px; color: var(--coral-deep, #E0502F); margin-bottom: 6px; }
.tg-speed-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; color: var(--navy, #1B2A4A); margin-bottom: 16px; }
.tg-score { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 20px; color: var(--navy, #1B2A4A); margin-bottom: 14px; }

.tg-tot-row { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 10px; }
.tg-tot-card { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 14px; color: var(--ink, #2B2438); background: var(--sun-light, #FFF1D2); border: 2px solid var(--sun, #F2A900); border-radius: 16px; padding: 18px 20px; min-width: 120px; cursor: pointer; }
.tg-tot-card.is-picked { background: var(--coral-light, #FFE6DD); border-color: var(--coral, #FF6B4A); color: var(--coral-deep, #E0502F); }
.tg-tot-card:disabled { cursor: default; }
.tg-tot-or { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: var(--ink-soft, #736A87); text-transform: uppercase; }
.tg-tot-followup { margin-bottom: 10px !important; }

.tg-order-col { display: flex; flex-direction: column; gap: 8px; max-width: 380px; margin: 0 auto 12px; }
.tg-order-card { position: relative; display: flex; align-items: center; gap: 10px; font-family: 'Quicksand', 'Inter', sans-serif; font-weight: 600; font-size: 13.5px; color: var(--ink, #2B2438); background: var(--navy-light, #E4E9F5); border: 2px solid var(--navy-soft, #5A6B92); border-radius: 12px; padding: 10px 16px; text-align: left; cursor: pointer; }
.tg-order-card.is-placed { background: var(--coral-light, #FFE6DD); border-color: var(--coral-deep, #E0502F); }
.tg-order-card.is-shake { animation: tgShake 0.4s; }
.tg-order-num { flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%; background: var(--coral, #FF6B4A); color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 12px; display: flex; align-items: center; justify-content: center; }
@keyframes tgShake { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }

.tg-foc-card { font-family: 'Quicksand', 'Inter', sans-serif; font-weight: 600; font-size: 14.5px; color: var(--navy, #1B2A4A); background: var(--navy-light, #E4E9F5); border: 2px solid var(--navy, #1B2A4A); border-radius: 16px; padding: 18px 24px; max-width: 400px; margin: 0 auto 16px; }
.tg-foc-row { display: flex; gap: 14px; justify-content: center; margin-bottom: 10px; }
.tg-foc-fact { background: linear-gradient(180deg, #2F9E7A 0%, #237A5D 100%); box-shadow: 0 4px 0 rgba(20,90,65,0.35), 0 8px 16px rgba(47,158,122,0.28); }
.tg-foc-cap { background: linear-gradient(180deg, #8B6BD1 0%, #6B4FB0 100%); box-shadow: 0 4px 0 rgba(70,45,120,0.35), 0 8px 16px rgba(139,107,209,0.28); }
.tg-foc-verdict { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 17px; margin-bottom: 6px; }
.tg-foc-verdict.is-right { color: #2F9E7A; }
.tg-foc-verdict.is-wrong { color: var(--coral-deep, #E0502F); }

.tg-dice-row { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 16px; }
.tg-dice-col { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.tg-dice-name { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-soft, #736A87); }
.tg-dice-face { min-width: 96px; min-height: 96px; max-width: 150px; border-radius: 16px; background: var(--navy-light, #E4E9F5); border: 2px solid var(--navy, #1B2A4A); display: flex; align-items: center; justify-content: center; padding: 12px 16px; text-align: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 15px; color: var(--navy, #1B2A4A); }
.tg-dice-face.is-rolling { opacity: 0.55; }
`;
