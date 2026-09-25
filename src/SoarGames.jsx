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
                  <text x={tx} y={ty} transform={`rotate(${i * seg + seg / 2} ${tx} ${ty})`} textAnchor="middle" dominantBaseline="middle" className="wheel-text" style={{ fontSize: (it.wheel || it.label).length > 9 ? 11 : 13.5 }}>{it.wheel || it.label}</text>
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
  // One shuffled draw-pile per die, so the die the roll SETTLES on shows every item once before
  // repeating (same rule as the wheel). Reset automatically when the slide is left, since this
  // component then unmounts. The flicker during rolling is plain random, only the final face uses the pile.
  const pools = useRef(dice.map(() => []));
  useEffect(() => () => clearInterval(timer.current), []);
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
      <div className="strip">
        {dice.map((d, i) => {
          const it = vals ? d.items[vals[i]] : null;
          return (
            <div key={i} className={`strip-item dice-item ${rolling ? "is-rolling" : ""}`}>
              <span className="dice-name">{d.name}</span>
              {it ? (it.src ? <SoarPic key={it.src} src={it.src} label={it.label} size={size} /> : <div className="sp-tile word-tile" style={{ width: size, height: size }}>{it.label}</div>) : <div className="sp-tile missing-q" style={{ width: size, height: size }}>?</div>}
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


const hl = (text) => String(text).split(/(\*[^*]+\*)/g).map((part, i) => (/^\*[^*]+\*$/.test(part) ? <span key={i} className="hl">{part.slice(1, -1)}</span> : part));

// A small town seen from above. `rows` is a list of rows of places (null = empty), the road runs along the bottom.
// A place in the top row is BEHIND the place under it; a place beside another is NEXT TO it.
export function TownBlock({ heading, rows = [], size = 84, question, sentence }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="game-row">
        <div className="town">
          {rows.map((row, r) => (
            <div className="town-row" key={r}>
              {row.map((it, c) => it
                ? (
                  <div key={c} className="strip-item">
                    <SoarPic src={it.src} label={it.label} size={size} />
                    <span className="strip-label">{it.label}</span>
                  </div>
                )
                : <div key={c} className="town-empty" style={{ width: size }} />)}
            </div>
          ))}
          <div className="town-road"><span>Main Street</span></div>
        </div>
        {(question || sentence) && (
          <div className="game-side">
            {question && <div className="game-bubble">{question}</div>}
            {sentence && <div className="game-bubble game-bubble--sentence">{hl(sentence)}</div>}
          </div>
        )}
      </div>
    </div>
  );
}

const ARROW = { fill: "none", stroke: "#E0502F", strokeWidth: 12, strokeLinecap: "round", strokeLinejoin: "round" };
function DirSvg({ kind }) {
  return (
    <svg viewBox="0 0 100 100" className="dir-svg" aria-hidden="true">
      {kind === "straight" && <g {...ARROW}><path d="M50 86 V24" /><path d="M28 46 L50 22 L72 46" /></g>}
      {kind === "left" && <g {...ARROW}><path d="M68 88 V56 Q68 36 48 36 H24" /><path d="M42 16 L22 36 L42 56" /></g>}
      {kind === "right" && <g {...ARROW}><path d="M32 88 V56 Q32 36 52 36 H76" /><path d="M58 16 L78 36 L58 56" /></g>}
      {kind === "stop" && (
        <g>
          <polygon points="30,8 70,8 92,30 92,70 70,92 30,92 8,70 8,30" fill="#E0502F" stroke="#fff" strokeWidth="5" />
          <text x="50" y="59" textAnchor="middle" fontFamily="Baloo 2, sans-serif" fontWeight="800" fontSize="25" fill="#fff">STOP</text>
        </g>
      )}
    </svg>
  );
}

// Direction words as big arrow cards. `labels: false` hides the words so the child says them.
export function DirsBlock({ heading, items = [], size = 104, labels = true, question }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="strip">
        {items.map((it, i) => (
          <div key={i} className="strip-item">
            <div className="sp-tile dir-tile" style={{ width: size, height: size }}><DirSvg kind={it.kind} /></div>
            <span className="strip-label">{labels ? it.word : " "}</span>
          </div>
        ))}
      </div>
      {question && <div className="game-bubble">{question}</div>}
    </div>
  );
}

const STEP = { n: [0, -1], e: [1, 0], s: [0, 1], w: [-1, 0] };
const TURN_L = { n: "w", w: "s", s: "e", e: "n" };
const TURN_R = { n: "e", e: "s", s: "w", w: "n" };
const HEADING = { n: 0, e: 90, s: 180, w: 270 };

// Be the GPS: the child says the directions, the teacher clicks them, and the little car drives.
// grid characters: '#' road, '@' start (also road), '.' grass, a letter = a building from `places`.
export function RouteBlock({ heading, grid = [], places = {}, goal, question, dir = "e", cell = 54 }) {
  const rows = grid.length;
  const cols = grid[0].length;
  const start = (() => { let p = [0, 0]; grid.forEach((row, r) => [...row].forEach((ch, c) => { if (ch === "@") p = [c, r]; })); return p; })();
  const [pos, setPos] = useState(start);
  const [head, setHead] = useState(dir);
  const [msg, setMsg] = useState(null);
  const [bump, setBump] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const at = (c, r) => (r >= 0 && r < rows && c >= 0 && c < cols ? grid[r][c] : null);
  const isRoad = (c, r) => at(c, r) === "#" || at(c, r) === "@";
  const done = !!(msg && msg.ok);

  function straight() {
    if (done) return;
    const [dx, dy] = STEP[head];
    if (isRoad(pos[0] + dx, pos[1] + dy)) { setPos([pos[0] + dx, pos[1] + dy]); setMsg(null); }
    else { setBump(true); clearTimeout(timer.current); timer.current = setTimeout(() => setBump(false), 380); }
  }
  const turn = (map) => { if (!done) { setHead(map[head]); setMsg(null); } };
  function stop() {
    if (done) return;
    const hit = Object.entries(STEP).find(([, [dx, dy]]) => at(pos[0] + dx, pos[1] + dy) === goal);
    if (!hit) { setMsg({ ok: false, text: "Not here yet. Keep going!" }); return; }
    const side = hit[0] === head ? "in front" : hit[0] === TURN_L[head] ? "on the left" : hit[0] === TURN_R[head] ? "on the right" : "behind you";
    setMsg({ ok: true, text: `Yes! The ${places[goal].label} is ${side}.` });
  }
  function restart() { setPos(start); setHead(dir); setMsg(null); }

  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="game-row">
        <div className="route" style={{ width: cols * cell, height: rows * cell }}>
          {grid.map((row, r) => [...row].map((ch, c) => {
            const road = ch === "#" || ch === "@";
            const b = places[ch];
            return (
              <div key={`${r}-${c}`} className={`route-cell ${road ? "is-road" : ""}`} style={{ left: c * cell, top: r * cell, width: cell, height: cell }}>
                {b && (
                  <div className="route-bld">
                    <SoarPic src={b.src} label={b.label} size={cell - 14} />
                    <span className="route-tag">{b.label}</span>
                  </div>
                )}
              </div>
            );
          }))}
          <div className={`route-car ${bump ? "is-bump" : ""}`} style={{ left: pos[0] * cell + (cell - 30) / 2, top: pos[1] * cell + (cell - 30) / 2 }}>
            <svg viewBox="0 0 30 30" style={{ transform: `rotate(${HEADING[head]}deg)` }} aria-hidden="true"><polygon points="15,5 24,23 15,18 6,23" fill="#fff" /></svg>
          </div>
        </div>
        <div className="game-side route-side">
          {question && <div className="game-bubble">{question}</div>}
          <div className="route-btns">
            <button type="button" className="game-btn game-btn--sm" onClick={straight}>Go straight</button>
            <button type="button" className="game-btn game-btn--sm" onClick={stop}>Stop!</button>
            <button type="button" className="game-btn game-btn--sm game-btn--ghost" onClick={() => turn(TURN_L)}>Turn left</button>
            <button type="button" className="game-btn game-btn--sm game-btn--ghost" onClick={() => turn(TURN_R)}>Turn right</button>
          </div>
          {msg
            ? <div className={msg.ok ? "game-answer game-answer--sm" : "game-note game-note--big"}>{msg.text}</div>
            : <div className="game-note">The car is waiting.</div>}
          {(msg || pos[0] !== start[0] || pos[1] !== start[1] || head !== dir) && <button type="button" className="game-link" onClick={restart}>Start again</button>}
        </div>
      </div>
    </div>
  );
}

// Shop shelf: every thing has a price tag. The teacher clicks things into the basket, the total adds up,
// and with a `budget` it says whether there is enough money.
export function ShopBlock({ heading, items = [], budget, size = 80, question }) {
  const [picked, setPicked] = useState([]);
  const total = picked.reduce((sum, i) => sum + items[i].price, 0);
  const toggle = (i) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  const enough = budget !== undefined && picked.length > 0 ? total <= budget : null;
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="shop">
        {items.map((it, i) => (
          <button key={i} type="button" className={`shop-item ${picked.includes(i) ? "is-picked" : ""}`} onClick={() => toggle(i)} aria-label={`${it.label}, ${it.price} pesos`}>
            <SoarPic src={it.src} label={it.label} size={size} count={it.count} zoom="icon" />
            <span className="price-tag">{it.price} pesos</span>
          </button>
        ))}
      </div>
      <div className="game-inline">
        {question && <div className="game-bubble">{question}</div>}
        <div className="shop-basket">
          <span className="shop-count">Basket: {picked.length}</span>
          <span className="shop-total">Total: {total} pesos</span>
          {budget !== undefined && <span className="shop-wallet">You have {budget} pesos</span>}
        </div>
        {enough !== null && <div className={enough ? "game-answer game-answer--sm" : "game-answer game-answer--sm is-no"}>{enough ? "Enough money!" : "Not enough money!"}</div>}
        {picked.length > 0 && <button type="button" className="game-link" onClick={() => setPicked([])}>Empty the basket</button>}
      </div>
    </div>
  );
}

// Who can help? A problem picture and three helpers. The child says who can help, the teacher clicks that helper.
export function HelpBlock({ heading, problem, options = [], answer = 0, said, size = 84, labels = true }) {
  const [chosen, setChosen] = useState(null);
  const ok = chosen === answer;
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="game-row">
        <div className="help-problem">
          <SoarPic src={problem.src} label={problem.label} size={104} />
          <div className="game-bubble">{problem.text}</div>
        </div>
        <div className="help-side">
          <div className="strip">
            {options.map((o, i) => (o.src
              ? (
                <button key={i} type="button" className={`help-opt ${chosen === i ? (i === answer ? "is-right" : "is-wrong") : ""}`} onClick={() => setChosen(i)}>
                  <SoarPic src={o.src} label={o.label} size={size} zoom="icon" />
                  <span className="strip-label">{labels ? o.label : "\u00A0"}</span>
                </button>
              )
              : <button key={i} type="button" className={`help-opt help-word ${chosen === i ? (i === answer ? "is-right" : "is-wrong") : ""}`} onClick={() => setChosen(i)}>{o.label}</button>))}
          </div>
          {chosen !== null && (ok ? <div className="game-answer game-answer--sm">{said}</div> : <div className="game-note game-note--big">Not quite. Try again!</div>)}
        </div>
      </div>
    </div>
  );
}

// Story order: the pictures are shuffled. The child tells the story, the teacher clicks the pictures in the order the child says.
// The right picture gets its number; a wrong one shakes.
export function OrderBlock({ heading, items = [], size = 96, labels = false, question }) {
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
      <div className="strip">
        {display.map((i) => (
          <button key={i} type="button" className={`order-card ${placed.includes(i) ? "is-placed" : ""} ${wrong === i ? "is-shake" : ""}`} onClick={() => pick(i)}>
            {placed.includes(i) && <span className="strip-num">{placed.indexOf(i) + 1}</span>}
            <SoarPic src={items[i].src} label={items[i].label} size={size} zoom="icon" />
            {labels && <span className="strip-label">{items[i].label}</span>}
          </button>
        ))}
      </div>
      <div className="game-inline">
        {question && !done && <div className="game-bubble">{question}</div>}
        {done ? <div className="game-answer game-answer--sm">The story is in order!</div> : <div className="game-note">{placed.length === 0 ? "Click the pictures in story order." : `${placed.length} of ${items.length}`}</div>}
        {placed.length > 0 && <button type="button" className="game-link" onClick={() => setPlaced([])}>Start again</button>}
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

.word-tile { background: var(--navy-light); font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 19px; line-height: 1.05; color: var(--navy); text-align: center; padding: 6px; }
.game-bubble--sentence { background: var(--coral-light); color: var(--coral-deep); }
.game-btn--sm { font-size: 14px; padding: 7px 10px; border-radius: 13px; white-space: nowrap; }
.game-answer--sm { font-size: 15px; padding: 6px 12px; }
.game-link { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: var(--navy-soft); background: none; border: none; text-decoration: underline; cursor: pointer; padding: 0; }

.town { background: #DDEFD0; border-radius: 18px 18px 0 0; padding: 10px 16px 0; display: flex; flex-direction: column; gap: 4px; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.town-row { display: flex; justify-content: center; gap: 14px; }
.town-empty { flex-shrink: 0; }
.town-road { margin: 4px -16px 0; height: 24px; background: repeating-linear-gradient(90deg, #fff 0 14px, transparent 14px 28px) center / 100% 3px no-repeat, #AEB8D0; display: flex; align-items: center; justify-content: center; }
.town-road span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase; color: #fff; background: #AEB8D0; padding: 0 10px; }

.dir-tile { background: #fff; }
.dir-svg { width: 86%; height: 86%; }

.route { position: relative; flex-shrink: 0; background: #DDEFD0; border-radius: 14px; overflow: hidden; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.route-cell { position: absolute; display: flex; align-items: center; justify-content: center; }
.route-cell.is-road { background: #AEB8D0; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.35); }
.route-bld { position: relative; display: flex; align-items: center; justify-content: center; }
.route-bld .sp-tile { border-radius: 10px; }
.route-tag { position: absolute; bottom: -3px; left: 50%; transform: translateX(-50%); font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 10px; line-height: 1; color: var(--navy); background: rgba(255,255,255,0.96); border-radius: 999px; padding: 2px 6px; white-space: nowrap; }
.route-car { position: absolute; width: 30px; height: 30px; border-radius: 50%; background: var(--coral); box-shadow: 0 0 0 3px #fff, 0 3px 8px rgba(27,42,74,0.35); transition: left 0.35s ease, top 0.35s ease; z-index: 2; }
.route-car svg { width: 100%; height: 100%; transition: transform 0.28s ease; display: block; }
.route-car.is-bump { animation: carbump 0.36s ease; }
@keyframes carbump { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }
.route-side { min-width: 224px; }
.route-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; }
@media (prefers-reduced-motion: reduce) { .route-car, .route-car svg { transition: none; } .route-car.is-bump { animation: none; } }

.shop { display: flex; justify-content: center; gap: 14px; }
.shop-item { position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 6px 6px 8px; background: rgba(255,255,255,0.75); border: none; border-radius: 16px; cursor: pointer; box-shadow: 0 4px 0 rgba(27,42,74,0.1); transition: transform 0.15s ease, box-shadow 0.15s ease; }
.shop-item:hover { transform: translateY(-2px); }
.shop-item.is-picked { background: #fff; box-shadow: 0 0 0 4px var(--coral), 0 4px 0 rgba(27,42,74,0.1); }
.price-tag { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 14px; line-height: 1; color: #fff; background: var(--coral-deep); border-radius: 8px 8px 8px 2px; padding: 4px 9px; white-space: nowrap; }
.shop-basket { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.94); border-radius: 14px; padding: 6px 14px; box-shadow: 0 3px 0 rgba(27,42,74,0.06); font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 15px; color: var(--navy); }
.shop-total { color: var(--coral-deep); }
.shop-wallet { color: #1B7F5F; }
.game-answer.is-no { background: #FDE8E8; border-color: #D9534F; color: #B5322E; }

.help-problem { display: flex; flex-direction: column; align-items: center; gap: 8px; max-width: 170px; }
.help-side { display: flex; flex-direction: column; align-items: center; gap: 10px; min-height: 150px; justify-content: center; }
.help-opt { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 5px 5px 4px; background: rgba(255,255,255,0.75); border: none; border-radius: 16px; cursor: pointer; box-shadow: 0 4px 0 rgba(27,42,74,0.1); }
.help-opt:hover { background: #fff; }
.help-opt.is-right { background: #fff; box-shadow: 0 0 0 4px #22A67E, 0 4px 0 rgba(27,42,74,0.1); }
.help-opt.is-wrong { opacity: 0.5; box-shadow: 0 0 0 3px #D9534F; }

.order-card { position: relative; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 5px; background: rgba(255,255,255,0.75); border: none; border-radius: 16px; cursor: pointer; box-shadow: 0 4px 0 rgba(27,42,74,0.1); }
.order-card:hover { background: #fff; }
.order-card.is-placed { background: #fff; box-shadow: 0 0 0 4px #22A67E, 0 4px 0 rgba(27,42,74,0.1); }
.order-card.is-shake { animation: carbump 0.4s ease; box-shadow: 0 0 0 3px #D9534F; }

.help-word { min-width: 138px; max-width: 168px; padding: 12px 12px; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 16px; line-height: 1.15; color: var(--navy); text-align: center; align-self: stretch; justify-content: center; }
`;
