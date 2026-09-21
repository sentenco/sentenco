import React, { useEffect, useRef, useState } from "react";
import { SoarPic } from "./SoarPic.jsx";

// Teacher-driven games for A2 Soar (v2 shell). The teacher clicks; the child looks, listens, says or types.
// Every game keeps its state inside the slide, so moving to another slide starts it fresh.
// Data shapes (in soarA2Data.js):
//   peek     { item, reveal?, question? }          picture hidden behind 4 clouds; the teacher pops them one by one
//   spin     { items: [{label, src?}] }            a wheel; lands on each item once before repeating
//   missing  { items: [{label, src}] }             look, one goes away, which one?
//   sprint   { items, seconds, labels? }           beat the clock: as many sentences as possible
//   dice     { dice: [{ name, items }] }           roll a picture from each die, make a sentence

const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

function Cloud() {
  return (
    <svg viewBox="0 0 100 80" className="cloud-svg" aria-hidden="true">
      <g fill="#fff">
        <circle cx="30" cy="48" r="20" />
        <circle cx="54" cy="34" r="26" />
        <circle cx="76" cy="47" r="21" />
        <rect x="20" y="46" width="66" height="22" rx="11" />
      </g>
    </svg>
  );
}

export function PeekBlock({ heading, item, size = 176, reveal, question }) {
  const [open, setOpen] = useState([false, false, false, false]);
  const left = open.filter((o) => !o).length;
  const pop = (i) => setOpen((a) => a.map((v, k) => (k === i ? true : v)));
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="game-row">
        <div className="peek" style={{ width: size, height: size }}>
          <SoarPic src={item.src} label={item.label} size={size} />
          <div className="peek-grid">
            {open.map((o, i) => (
              <button key={i} type="button" className={`peek-cloud ${o ? "is-open" : ""}`} onClick={() => pop(i)} aria-label="Pop this cloud"><Cloud /></button>
            ))}
          </div>
        </div>
        <div className="game-side">
          {question && <div className="game-bubble">{question}</div>}
          {left > 0
            ? <button type="button" className="game-btn game-btn--ghost" onClick={() => setOpen([true, true, true, true])}>Show it all</button>
            : reveal && <div className="game-answer">{reveal}</div>}
          <div className="game-note">{left > 0 ? `${left} cloud${left === 1 ? "" : "s"} left` : "All clear!"}</div>
        </div>
      </div>
    </div>
  );
}

const WHEEL = ["#FF6B4A", "#2E97C7", "#22A67E", "#F2A900", "#8E6FCE", "#E0567A", "#0F9E90", "#5A6B92"];

export function SpinBlock({ heading, items = [], size = 196, question }) {
  const n = items.length;
  const seg = 360 / n;
  const R = 100;
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
    timer.current = setTimeout(() => { setSpinning(false); setResult(idx); }, 2700);
  }

  const pt = (deg, r) => [100 + r * Math.sin((deg * Math.PI) / 180), 100 - r * Math.cos((deg * Math.PI) / 180)];
  const got = result !== null ? items[result] : null;
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="game-row">
        <div className="wheel-wrap" style={{ width: size, height: size }}>
          <div className="wheel-pointer" />
          <svg viewBox="0 0 200 200" className="wheel" style={{ transform: `rotate(${rot}deg)`, transition: spinning ? "transform 2.6s cubic-bezier(.12,.6,.12,1)" : "none" }}>
            {items.map((it, i) => {
              const [x0, y0] = pt(i * seg, R);
              const [x1, y1] = pt((i + 1) * seg, R);
              const [tx, ty] = pt(i * seg + seg / 2, 62);
              return (
                <g key={i}>
                  <path d={`M100 100 L${x0} ${y0} A${R} ${R} 0 0 1 ${x1} ${y1} Z`} fill={WHEEL[i % WHEEL.length]} stroke="#fff" strokeWidth="3" />
                  <text x={tx} y={ty} transform={`rotate(${i * seg + seg / 2} ${tx} ${ty})`} textAnchor="middle" dominantBaseline="middle" className="wheel-text">{it.label}</text>
                </g>
              );
            })}
            <circle cx="100" cy="100" r="13" fill="#fff" stroke="#1B2A4A" strokeWidth="3" />
          </svg>
        </div>
        <div className="game-side">
          {got ? (
            <div className="spin-result">
              {got.src && <SoarPic src={got.src} label={got.label} size={104} />}
              <div className="spin-word">{got.label}</div>
            </div>
          ) : <div className="game-bubble">{spinning ? "Round and round..." : (question || "Spin the wheel!")}</div>}
          <button type="button" className="game-btn" onClick={spin} disabled={spinning}>{result === null && !spinning ? "Spin!" : "Spin again"}</button>
        </div>
      </div>
    </div>
  );
}

export function MissingBlock({ heading, items = [], size = 100 }) {
  const [phase, setPhase] = useState(0);
  const [gone, setGone] = useState(0);
  const order = useRef([]);
  function next() {
    if (phase === 0) {
      if (order.current.length === 0) order.current = shuffle([...Array(items.length).keys()]);
      setGone(order.current.pop());
      setPhase(1);
    } else if (phase === 1) setPhase(2);
    else setPhase(0);
  }
  const say = ["Look and remember.", "Which one is missing?", "That's the one!"][phase];
  const btn = ["Hide one!", "Show the answer", "Play again"][phase];
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="strip">
        {items.map((it, i) => {
          const hidden = phase === 1 && i === gone;
          return (
            <div key={i} className={`strip-item ${phase === 2 && i === gone ? "is-active" : ""}`}>
              {hidden
                ? <div className="sp-tile missing-q" style={{ width: size, height: size }}>?</div>
                : <SoarPic src={it.src} label={it.label} size={size} />}
              <span className="strip-label">{hidden ? " " : it.label}</span>
            </div>
          );
        })}
      </div>
      <div className="game-inline">
        <div className="game-note game-note--big">{say}</div>
        <button type="button" className="game-btn" onClick={next}>{btn}</button>
      </div>
    </div>
  );
}

const fmt = (s) => `0:${String(s).padStart(2, "0")}`;

export function SprintBlock({ heading, items = [], seconds = 45, labels = true, size = 96 }) {
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
  const start = () => { setLeft(seconds); setIdx(0); setScore(0); setStatus("running"); };
  const good = () => { setScore((s) => s + 1); setIdx((k) => k + 1); };
  const skip = () => setIdx((k) => k + 1);
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {status === "done" ? (
        <div className="sprint-done">
          <div className="sprint-big">{score}</div>
          <div className="game-note game-note--big">{score === 1 ? "sentence in" : "sentences in"} {seconds} seconds!</div>
        </div>
      ) : (
        <div className="strip">
          <div className="strip-item">
            {status === "running"
              ? <SoarPic src={it.src} label={it.label} size={size} />
              : <div className="sp-tile missing-q" style={{ width: size, height: size }}>?</div>}
            <span className="strip-label">{status === "running" && labels ? it.label : " "}</span>
          </div>
        </div>
      )}
      <div className="sprint-bar"><div className="sprint-fill" style={{ width: `${(Math.max(left, 0) / seconds) * 100}%` }} /><span>{fmt(Math.max(left, 0))}</span></div>
      <div className="game-inline">
        {status === "ready" && <button type="button" className="game-btn" onClick={start}>Start!</button>}
        {status === "running" && <>
          <button type="button" className="game-btn" onClick={good}>Good sentence ({score})</button>
          <button type="button" className="game-btn game-btn--ghost" onClick={skip}>Skip</button>
        </>}
        {status === "done" && <button type="button" className="game-btn" onClick={start}>Try again</button>}
      </div>
    </div>
  );
}

export function DiceBlock({ heading, dice = [], size = 104 }) {
  const [vals, setVals] = useState(null);
  const [rolling, setRolling] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearInterval(timer.current), []);
  const pick = () => dice.map((d) => Math.floor(Math.random() * d.items.length));
  function roll() {
    if (rolling) return;
    setRolling(true);
    let n = 0;
    timer.current = setInterval(() => {
      n += 1;
      setVals(pick());
      if (n >= 9) { clearInterval(timer.current); setRolling(false); }
    }, 110);
  }
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="strip">
        {dice.map((d, i) => {
          const it = vals ? d.items[vals[i]] : null;
          return (
            <div key={i} className={`strip-item dice-item ${rolling ? "is-rolling" : ""}`}>
              <span className="dice-name">{d.name}</span>
              {it ? <SoarPic src={it.src} label={it.label} size={size} /> : <div className="sp-tile missing-q" style={{ width: size, height: size }}>?</div>}
              <span className="strip-label">{it && !rolling ? it.label : " "}</span>
            </div>
          );
        })}
      </div>
      <div className="game-inline">
        <button type="button" className="game-btn" onClick={roll} disabled={rolling}>{vals ? "Roll again" : "Roll!"}</button>
      </div>
    </div>
  );
}

export const gameStyles = `
.game-row { display: flex; align-items: center; justify-content: center; gap: 26px; }
.game-side { display: flex; flex-direction: column; align-items: center; gap: 10px; min-width: 190px; max-width: 250px; }
.game-inline { display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap; }
.game-btn { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 16px; color: #fff; background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); border: none; border-radius: 16px; padding: 9px 22px; cursor: pointer; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 14px rgba(224,80,47,0.25); }
.game-btn:disabled { opacity: 0.55; cursor: default; }
.game-btn--ghost { color: var(--navy); background: #fff; box-shadow: 0 4px 0 rgba(27,42,74,0.15); }
.game-note { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; color: var(--navy-soft); }
.game-note--big { font-size: 18px; color: var(--navy); }
.game-bubble { background: rgba(255,255,255,0.94); border-radius: 14px; padding: 8px 14px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink); box-shadow: 0 3px 0 rgba(27,42,74,0.06); text-align: center; }
.game-answer { background: var(--coral-light); border: 2.5px dashed var(--coral); border-radius: 14px; padding: 8px 16px; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 20px; color: var(--coral-deep); text-align: center; }

.peek { position: relative; flex-shrink: 0; }
.peek-grid { position: absolute; inset: 0; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; }
.peek-cloud { position: relative; background: #BFD8F2; border: 2px solid #fff; padding: 0; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: opacity 0.35s ease, transform 0.35s ease; }
.peek-cloud .cloud-svg { width: 84%; height: auto; filter: drop-shadow(0 3px 0 rgba(27,42,74,0.14)); }
.peek-cloud.is-open { opacity: 0; transform: scale(1.18) translateY(-14px); pointer-events: none; }
.peek-cloud:hover { background: #A9CBEC; }

.wheel-wrap { position: relative; flex-shrink: 0; margin-top: 12px; }
.wheel { width: 100%; height: 100%; display: block; filter: drop-shadow(0 6px 0 rgba(27,42,74,0.14)); }
.wheel-text { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 13.5px; fill: #fff; }
.wheel-pointer { position: absolute; top: -12px; left: 50%; margin-left: -12px; width: 0; height: 0; border-left: 12px solid transparent; border-right: 12px solid transparent; border-top: 24px solid var(--navy); z-index: 2; filter: drop-shadow(0 2px 0 rgba(255,255,255,0.9)); }
.spin-result { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.spin-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 30px; line-height: 1; color: var(--navy); background: #FFD066; padding: 3px 14px; border-radius: 10px; }

.missing-q { background: var(--coral-light); border: 3px dashed var(--coral); font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 46px; color: var(--coral-deep); }
.sprint-bar { position: relative; width: 320px; height: 22px; background: rgba(255,255,255,0.9); border-radius: 999px; overflow: hidden; box-shadow: inset 0 0 0 2px rgba(27,42,74,0.12); }
.sprint-fill { height: 100%; background: linear-gradient(90deg, #22A67E, #F2A900, var(--coral)); border-radius: 999px; transition: width 1s linear; }
.sprint-bar span { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 13px; color: var(--navy); }
.sprint-done { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.sprint-big { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 82px; line-height: 1; color: var(--coral-deep); text-shadow: 0 4px 0 rgba(160,45,18,0.2); }
.dice-item { gap: 3px; }
.dice-name { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #fff; background: var(--navy); border-radius: 999px; padding: 1px 12px; }
.dice-item.is-rolling .sp-tile { animation: dicewobble 0.22s ease-in-out infinite; }
@keyframes dicewobble { 0% { transform: rotate(-5deg) translateY(0); } 50% { transform: rotate(5deg) translateY(-4px); } 100% { transform: rotate(-5deg) translateY(0); } }
@media (prefers-reduced-motion: reduce) { .dice-item.is-rolling .sp-tile { animation: none; } .peek-cloud, .sprint-fill { transition: none; } }
`;
