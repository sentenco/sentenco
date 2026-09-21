import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { GROUPS, LEVELS, SAMPLE_ITEMS, levelStatus, normalizeItems } from "./letterBoardData";

// Letter Board: the play page. A one-to-one game for a teacher and a student.
// The teacher picks a difficulty (which sets the number of tiles), the board
// hides a letter on every tile, and a tile flips to reveal coins, double
// coins, a bomb or a bonus before its question opens as a card over the board.
// Choice questions are checked automatically; open questions are marked
// Correct / Not quite by the teacher.

const NAVY = ["#1B2A4A", "#0B1326"];
const CORAL = ["#F2593A", "#B5391D"];
const OPTION_LETTERS = ["A", "B", "C"];

const TYPES = {
  c: { name: "Coins", hd: "#1B2A4A", bg: "#FFFFFF", fg: "#1B2A4A", bd: "#F2593A", dk: "#B5391D", ic: "#F2593A", icon: "coin", rule: (v) => `+${v.c} if correct` },
  d: { name: "Double coins", hd: "#2E4372", bg: "#FFE2D8", fg: "#1B2A4A", bd: "#F2593A", dk: "#B5391D", ic: "#F2593A", icon: null, rule: (v) => `+${v.c * 2} if correct` },
  x: { name: "Bomb", hd: "#0B1326", bg: "#0B1326", fg: "#FBF4F1", bd: "#F2593A", dk: "#000000", ic: "#FF7A5C", icon: "bomb", rule: (v) => `+${v.x} if correct, lose ${v.x} if wrong` },
  b: { name: "Bonus", hd: "#B5391D", bg: "#F2593A", fg: "#FFFFFF", bd: "#B5391D", dk: "#8E2A14", ic: "#FFFFFF", icon: "star", rule: (v) => `+${v.b} if correct` },
};

const VALUE_OPTIONS = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

function amountFor(type, cfg) {
  return type === "d" ? cfg.c * 2 : cfg[type];
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeGame(n, mix) {
  const nb = Math.max(1, Math.round(n * 0.2));
  const nd = Math.max(1, Math.round(n * 0.1));
  const ns = Math.max(1, Math.round(n * 0.15));
  const types = [];
  for (let i = 0; i < nb; i++) types.push("x");
  for (let i = 0; i < nd; i++) types.push("d");
  for (let i = 0; i < ns; i++) types.push("b");
  while (types.length < n) types.push("c");
  const idx = Array.from({ length: n }, (_, i) => i);
  return {
    types: shuffle(types),
    // Which item hides behind each letter. Shuffled so a letter never gives away difficulty.
    pool: shuffle(idx),
    ord: mix ? shuffle(idx) : idx,
    done: Array(n).fill(null),
    coins: 0,
  };
}

// ---- sound (small synthesized effects, no files) ------------------------------
let audioCtx = null;
let soundMuted = false;
function ac() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
  } catch (e) {
    return null;
  }
  return audioCtx;
}
function tone(f, t0, d, type, vol, f2) {
  const a = ac();
  if (!a || soundMuted) return;
  try {
    const o = a.createOscillator();
    const g = a.createGain();
    const T = a.currentTime + t0;
    o.type = type || "sine";
    o.frequency.setValueAtTime(f, T);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, T + d);
    g.gain.setValueAtTime(0.0001, T);
    g.gain.exponentialRampToValueAtTime(vol || 0.15, T + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, T + d);
    o.connect(g);
    g.connect(a.destination);
    o.start(T);
    o.stop(T + d + 0.03);
  } catch (e) { /* sound is optional */ }
}
function noise(d, vol) {
  const a = ac();
  if (!a || soundMuted) return;
  try {
    const n = Math.floor(a.sampleRate * d);
    const b = a.createBuffer(1, n, a.sampleRate);
    const c = b.getChannelData(0);
    for (let i = 0; i < n; i++) c[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const s = a.createBufferSource();
    s.buffer = b;
    const f = a.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.value = 700;
    const g = a.createGain();
    g.gain.value = vol;
    s.connect(f);
    f.connect(g);
    g.connect(a.destination);
    s.start();
  } catch (e) { /* sound is optional */ }
}
const sfx = {
  pick: () => tone(520, 0, 0.07, "square", 0.05),
  roll: () => { for (let i = 0; i < 15; i++) tone(260 + i * 32, i * 0.062, 0.05, "square", 0.04 + i * 0.003); },
  reveal: (t) => {
    if (t === "c") { tone(880, 0, 0.12, "triangle", 0.14); tone(1320, 0.1, 0.25, "triangle", 0.14); }
    else if (t === "d") { tone(660, 0, 0.1, "triangle", 0.14); tone(880, 0.09, 0.1, "triangle", 0.14); tone(1320, 0.18, 0.3, "triangle", 0.14); }
    else if (t === "b") { tone(784, 0, 0.1, "triangle", 0.13); tone(988, 0.08, 0.1, "triangle", 0.13); tone(1175, 0.16, 0.1, "triangle", 0.13); tone(1568, 0.24, 0.35, "triangle", 0.13); }
    else { tone(110, 0, 0.4, "sawtooth", 0.1); tone(82, 0.32, 0.6, "sawtooth", 0.1); }
  },
  good: (big) => {
    tone(660, 0, 0.1, "triangle", 0.15); tone(880, 0.09, 0.1, "triangle", 0.15); tone(1320, 0.18, 0.3, "triangle", 0.15);
    if (big) { tone(1047, 0.3, 0.15, "triangle", 0.13); tone(1568, 0.42, 0.4, "triangle", 0.13); }
  },
  boom: () => { noise(0.6, 0.5); tone(140, 0, 0.55, "sine", 0.3, 38); },
  oops: () => tone(260, 0, 0.25, "triangle", 0.12, 170),
  win: () => {
    [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.13, 0.2, "triangle", 0.14));
    tone(1047, 0.55, 0.7, "triangle", 0.14);
    tone(784, 0.55, 0.7, "triangle", 0.1);
  },
};

// ---- small pieces ---------------------------------------------------------------
const ICON_PATHS = {
  coin: (<><circle cx="12" cy="12" r="9" /><path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1" /><path d="M12 7v10" /></>),
  star: (<path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1L12 2.003l3.093 6.252 6.9 1-5 4.867 1.179 6.873z" />),
  bomb: (<><circle cx="10.5" cy="14.5" r="6.5" fill="currentColor" /><path d="M15 9.5l2-2c.8-.8 1.8-1.2 3-1" /><path d="M20.5 2.5v2M22 4h-3M18.6 2.6l1 1" /></>),
  sparkles: (<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />),
  volume: (<><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5a.8.8 0 0 1 1.5.5v14a.8.8 0 0 1-1.5.5L6 15" /></>),
  volumeOff: (<><path d="M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5a.8.8 0 0 1 1.5.5v14a.8.8 0 0 1-1.5.5L6 15" /><path d="M16 9l5 6M21 9l-5 6" /></>),
  settings: (<><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></>),
  check: (<path d="M5 12l5 5L20 7" />),
  x: (<path d="M18 6L6 18M6 6l12 12" />),
  chat: (<path d="M3 20l1.3-3.9A9 8 0 1 1 7.7 19L3 20" />),
  list: (<path d="M9 6h11M9 12h11M9 18h11M5 6h.01M5 12h.01M5 18h.01" />),
};

function Icon({ name, size = 18, color, fill = false, className, style }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      color={color}
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

function Buddy({ mood = "", size }) {
  return (
    <svg className={`lb-buddy ${mood}`} style={size ? { width: size, height: size } : undefined} viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="20" fill="#F2593A" stroke="#B5391D" strokeWidth="2.5" />
      <circle cx="22" cy="22" r="14" fill="none" stroke="#FBF4F1" strokeOpacity=".7" strokeWidth="1.4" strokeDasharray="2 3" />
      <circle className="so" cx="22" cy="22" r="19" fill="#0B1326" opacity=".6" />
      <circle className="e" cx="16" cy="18" r="2.5" fill="#FBF4F1" />
      <circle className="e" cx="28" cy="18" r="2.5" fill="#FBF4F1" />
      <path className="m1" d="M14 26 Q22 33 30 26" fill="none" stroke="#FBF4F1" strokeWidth="2.4" strokeLinecap="round" />
      <path className="m2" d="M13 25 Q22 39 31 25 Z" fill="#FBF4F1" />
      <path className="m3" d="M15 32 Q22 25 29 32" fill="none" stroke="#FBF4F1" strokeWidth="2.4" strokeLinecap="round" />
      <g className="stars">
        <circle cx="22" cy="-6" r="2.6" fill="#FF7A5C" />
        <circle cx="48" cy="26" r="2.6" fill="#FF7A5C" />
        <circle cx="-4" cy="26" r="2.6" fill="#FF7A5C" />
      </g>
    </svg>
  );
}

function useCountUp(target) {
  const [shown, setShown] = useState(target);
  const shownRef = useRef(target);
  useEffect(() => {
    const from = shownRef.current;
    if (from === target) return undefined;
    let raf;
    let t0 = null;
    const step = (ts) => {
      if (t0 === null) t0 = ts;
      const p = Math.min(1, (ts - t0) / 650);
      const cur = Math.round(from + (target - from) * p);
      shownRef.current = cur;
      setShown(cur);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return shown;
}

function TopBar({ coins, pulse, mood, tilesLeft, muted, onMute, onSetup, full }) {
  const shown = useCountUp(coins);
  return (
    <div className="lb-tbar">
      <div className="lb-tl">
        <span className="lb-brand">sent<b>e</b>nco</span>
        <div className={`lb-cw ${pulse}`}>
          <Buddy mood={mood} />
          <b>{shown}</b>
        </div>
      </div>
      {full && (
        <div className="lb-tr">
          <span className="lb-left">{tilesLeft} tiles left</span>
          <button type="button" className="lb-ib" onClick={onMute} aria-label={muted ? "Turn sound on" : "Turn sound off"}>
            <Icon name={muted ? "volumeOff" : "volume"} />
          </button>
          <button type="button" className="lb-ib" onClick={onSetup} aria-label="Back to setup">
            <Icon name="settings" />
          </button>
        </div>
      )}
    </div>
  );
}

function Face({ type, cfg }) {
  const T = TYPES[type];
  const v = amountFor(type, cfg);
  return (
    <span className="lb-b" style={{ background: T.bg, color: T.fg, borderColor: T.bd, borderBottomColor: T.dk }}>
      {T.icon ? <Icon name={T.icon} size={32} color={T.ic} fill={type === "b"} /> : <span className="lb-x">{"×"}2</span>}
      {type === "x" && <Icon name="sparkles" size={18} className="lb-spk" />}
      <span className="lb-v">{type === "x" ? `±${v}` : `+${v}`}</span>
    </span>
  );
}

// ---- the game --------------------------------------------------------------------
function Play({ items, cfg, level, onSetup, onAgain }) {
  const n = level.n;
  // Easy always keeps the alphabet in order (A to I); the other levels can mix the letters.
  const [g, setG] = useState(() => makeGame(n, cfg.mix && level.key !== 1));
  const [view, setView] = useState("board"); // board | q | result
  const [cur, setCur] = useState(-1);
  const [phase, setPhase] = useState("idle"); // idle | wob | flip
  const [picked, setPicked] = useState(-1);
  const [res, setRes] = useState(false);
  const [delta, setDelta] = useState(0);
  const [showKey, setShowKey] = useState(false);
  const [mood, setMood] = useState("");
  const [pulse, setPulse] = useState("");
  const [shake, setShake] = useState(false);
  const [muted, setMuted] = useState(soundMuted);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const later = (fn, ms) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  const tilesLeft = g.done.filter((d) => d === null).length;
  const busy = phase !== "idle";

  const pick = (i) => {
    if (busy) return;
    ac();
    setCur(i);
    setPicked(-1);
    setShowKey(false);
    setPhase("wob");
    sfx.pick();
    sfx.roll();
    later(() => { setPhase("flip"); sfx.reveal(g.types[i]); }, 950);
    later(() => { setPhase("idle"); setMood(""); setView("q"); }, 2650);
  };

  const finish = (ok, chosen) => {
    const type = g.types[cur];
    const gain = ok ? amountFor(type, cfg) : type === "x" ? -Math.min(cfg.x, g.coins) : 0;
    const done = g.done.slice();
    done[cur] = { ok, g: gain };
    setG({ ...g, done, coins: Math.max(0, g.coins + gain) });
    setPicked(chosen);
    setRes(ok);
    setDelta(gain);
    setMood(ok ? "happy" : type === "x" ? "soot" : "");
    setPulse(gain > 0 ? "up" : gain < 0 ? "down" : "");
    later(() => setPulse(""), 700);
    if (ok) sfx.good(type === "x" || type === "b");
    else if (type === "x") { sfx.boom(); setShake(true); later(() => setShake(false), 550); }
    else sfx.oops();
  };

  const item = cur >= 0 ? items[g.pool[cur]] : null;

  const back = () => {
    setMood("");
    if (tilesLeft === 0) { setView("result"); sfx.win(); }
    else setView("board");
  };

  const toggleMute = () => {
    soundMuted = !soundMuted;
    setMuted(soundMuted);
  };

  if (view === "result") {
    const total = g.done.filter(Boolean).length;
    const ok = g.done.filter((d) => d && d.ok).length;
    let bombs = 0;
    let safe = 0;
    g.types.forEach((t, i) => { if (t === "x" && g.done[i]) { bombs++; if (g.done[i].ok) safe++; } });
    const frac = total ? ok / total : 0;
    const stars = frac >= 0.9 ? 3 : frac >= 0.6 ? 2 : 1;
    return (
      <div className="lb-app">
        <TopBar coins={g.coins} pulse="" mood="" tilesLeft={0} muted={muted} full={false} />
        <div className="lb-res">
          <div className="lb-card2">
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}><Buddy mood="happy" size={64} /></div>
            <div className="lb-eb">Game complete</div>
            <div className="lb-n">{g.coins}</div>
            <div className="lb-unit">coins</div>
            <div className="lb-stars">
              {[0, 1, 2].map((s) => <Icon key={s} name="star" size={42} fill color={s < stars ? "#F2593A" : "#E8D3C9"} />)}
            </div>
            <p className="lb-great">Great job!</p>
            <p className="lb-sub2">{ok} of {total} answers correct{bombs ? `. You beat ${safe} of ${bombs} bombs.` : "."}</p>
            <div className="lb-actions">
              <button type="button" className="lb-go" onClick={onAgain}>Play again</button>
              <button type="button" className="lb-ghost" onClick={onSetup}>Change setup</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const cols = n === 9 ? 3 : 5;
  const gap = 10;
  const tileW = `calc((100% - ${gap * (cols - 1)}px) / ${cols} - 0.5px)`;
  const tileH = n === 9 ? 124 : n === 15 ? 104 : 92;

  return (
    <div className={`lb-app ${shake ? "lb-shake" : ""}`}>
      <TopBar coins={g.coins} pulse={pulse} mood={mood} tilesLeft={tilesLeft} muted={muted} onMute={toggleMute} onSetup={onSetup} full />
      <div className="lb-stage">
        <svg className="lb-wave" viewBox="0 0 680 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60 Q90 10 190 50 T390 50 T590 40 L680 30 L680 120 L0 120 Z" fill="#FFE2D8" />
          <path d="M0 90 Q120 55 240 82 T470 80 T680 70 L680 120 L0 120 Z" fill="#FFCDBE" />
        </svg>
        <div className="lb-grid" style={{ maxWidth: n === 9 ? 480 : "100%" }}>
          {g.ord.map((i, p) => {
            const ch = String.fromCharCode(65 + i);
            const d = g.done[i];
            const style = { width: tileW, height: tileH };
            if (d) {
              return (
                <div key={i} className="lb-c lb-done" style={style}>
                  <div className="lb-dn">
                    <span className="lb-lt">{ch}</span>
                    <span className={`lb-gv ${d.g > 0 ? "ok" : d.g < 0 ? "bad" : ""}`}>{d.g > 0 ? `+${d.g}` : d.g < 0 ? d.g : "0"}</span>
                  </div>
                </div>
              );
            }
            const chk = (Math.floor(p / cols) + (p % cols)) % 2;
            const col = chk ? CORAL : NAVY;
            const cls = `lb-c${busy ? " lb-locked" : ""}${cur === i && phase === "wob" ? " lb-wob" : ""}${cur === i && phase === "flip" ? " lb-flip" : ""}`;
            return (
              <button key={i} type="button" className={cls} style={style} onClick={() => pick(i)} aria-label={`Letter ${ch}`}>
                <span className="lb-in">
                  <span className="lb-f" style={{ background: col[0], borderBottomColor: col[1] }}>{ch}</span>
                  <Face type={g.types[i]} cfg={cfg} />
                </span>
              </button>
            );
          })}
        </div>

        {view === "q" && item && (
          <QuestionCard
            letter={String.fromCharCode(65 + cur)}
            type={g.types[cur]}
            cfg={cfg}
            item={item}
            picked={picked}
            res={res}
            delta={delta}
            showKey={showKey}
            onKey={() => setShowKey((v) => !v)}
            onChoose={(k) => picked < 0 && finish(k === item.correct, k)}
            onMark={(ok) => picked < 0 && finish(ok, ok ? 1 : 0)}
            onBack={back}
            last={tilesLeft === 0}
          />
        )}
      </div>
    </div>
  );
}

function QuestionCard({ letter, type, cfg, item, picked, res, delta, showKey, onKey, onChoose, onMark, onBack, last }) {
  const T = TYPES[type];
  const isChoice = item.kind === "choice";
  const marked = picked >= 0;
  const cls = res ? "ok" : delta < 0 ? "bad" : "zero";
  const msg = res ? (type === "x" ? "Defused! Nice one!" : "Correct!") : type === "x" ? "BOOM! Not this time" : "Not this time";
  let sub;
  if (res) sub = "Great answer.";
  else if (isChoice) sub = `The answer is ${OPTION_LETTERS[item.correct]}: ${item.options[item.correct]}`;
  else sub = item.sample ? `A good answer: ${item.sample}` : "Nice try. Let's look at it together.";
  const big = delta > 0 ? `+${delta} coins` : delta < 0 ? `${delta} coins` : "0 coins";
  return (
    <div className="lb-ov">
      <div className="lb-card">
        <div className="lb-qh" style={{ background: T.hd }}>
          <div className="lb-lt2">{letter}</div>
          {T.icon
            ? <Icon name={T.icon} size={28} color={type === "b" ? "#fff" : "#FF7A5C"} fill={type === "b"} />
            : <span className="lb-x2">{"×"}2</span>}
          <div>
            <div className="lb-nm">{T.name}</div>
            <div className="lb-rl">{T.rule(cfg)}</div>
          </div>
        </div>
        <div className="lb-qb">
          <span className="lb-tag"><Icon name={isChoice ? "list" : "chat"} size={14} />{isChoice ? "Choose one answer" : "Answer out loud or in the chat"}</span>
          <p className="lb-q">{item.q}</p>
          {isChoice ? (
            <div className="lb-opts">
              {item.options.map((o, k) => {
                let c = "lb-o";
                if (marked) c += k === item.correct ? " right" : k === picked ? " wrong" : " dim";
                return (
                  <button key={k} type="button" className={c} disabled={marked} onClick={() => onChoose(k)}>
                    <span className="lb-ol">{OPTION_LETTERS[k]}</span>{o}
                  </button>
                );
              })}
            </div>
          ) : !marked ? (
            <div className="lb-tp">
              <div className="lb-th">Teacher decides</div>
              <div className="lb-tbt">
                <button type="button" className="lb-mk yes" onClick={() => onMark(true)}><Icon name="check" size={22} />Correct</button>
                <button type="button" className="lb-mk no" onClick={() => onMark(false)}><Icon name="x" size={22} />Not quite</button>
              </div>
              {item.sample ? (
                <>
                  <button type="button" className="lb-lnk" onClick={onKey}>{showKey ? "Hide sample answer" : "Show sample answer"}</button>
                  {showKey && <div className="lb-key">{item.sample}</div>}
                </>
              ) : null}
            </div>
          ) : null}
          {marked && (
            <>
              <div className={`lb-fb ${cls}`}>
                <div><div className="lb-msg">{msg}</div><div className="lb-fsub">{sub}</div></div>
                <div className="lb-big">{big}</div>
                {res && Array.from({ length: 7 }, (_, z) => (
                  <Icon key={z} name="coin" size={22} className="lb-cf" style={{ left: `${52 + z * 6}%`, animationDelay: `${z * 70}ms` }} />
                ))}
              </div>
              <div className="lb-end"><button type="button" className="lb-go" onClick={onBack}>{last ? "See results" : "Back to board"}</button></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ---- setup (teacher) ---------------------------------------------------------------
const CFG_KEY = "sentenco-letter-board-cfg";
const DEFAULT_CFG = { lvl: 3, mix: true, c: 10, b: 30, x: 30 };

function loadCfg() {
  try {
    const raw = JSON.parse(localStorage.getItem(CFG_KEY) || "null");
    if (raw && typeof raw === "object") return { ...DEFAULT_CFG, ...raw };
  } catch (e) { /* fall through */ }
  return DEFAULT_CFG;
}

function Setup({ title, items, cfg, setCfg, onStart }) {
  const status = useMemo(() => levelStatus(items), [items]);
  const ready = (k) => status.missing[k] === 0;
  const anyReady = ready(1);
  // If the saved level isn't playable for this set, fall back to the highest playable one.
  const effective = ready(cfg.lvl) ? cfg.lvl : ready(3) ? 3 : ready(2) ? 2 : ready(1) ? 1 : 0;

  const update = (patch) => {
    const next = { ...cfg, ...patch };
    setCfg(next);
    try { localStorage.setItem(CFG_KEY, JSON.stringify(next)); } catch (e) { /* optional */ }
  };

  return (
    <div className="lb-app lb-setup">
      <div className="lb-tbar">
        <span className="lb-brand">sent<b>e</b>nco</span>
        <span className="lb-left">Teacher only</span>
      </div>
      <div className="lb-sb">
        <p className="lb-eyebrow">Letter board</p>
        <h1 className="lb-sti">{title}</h1>

        <div className="lb-sec">
          <h3>Difficulty</h3>
          <div className="lb-lv">
            {LEVELS.map((L) => {
              const ok = ready(L.key);
              return (
                <button
                  key={L.key}
                  type="button"
                  className={`lb-lvc${effective === L.key ? " sel" : ""}`}
                  disabled={!ok}
                  onClick={() => update({ lvl: L.key })}
                >
                  <div className="lb-a">{L.name}</div>
                  <div className="lb-n">{L.n}</div>
                  <div className="lb-u">tiles</div>
                  <div className="lb-s">{ok ? L.sub : `${status.missing[L.key]} more ${status.missing[L.key] === 1 ? "item" : "items"} needed`}</div>
                </button>
              );
            })}
          </div>
          <p className="lb-note">Pick a level and the board fills with that many items. Easy keeps the alphabet in order (A to I). On the other levels the letters can be mixed, and a letter never gives away how hard the item is.</p>
        </div>

        <div className="lb-sec">
          <h3>Coin values</h3>
          <div className="lb-row">
            {[["c", "Coins"], ["b", "Bonus"], ["x", "Bomb"]].map(([k, label]) => (
              <label key={k}>{label}
                <select value={cfg[k]} onChange={(e) => update({ [k]: Number(e.target.value) })}>
                  {VALUE_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </label>
            ))}
            <label>Letters
              <select
                value={effective === 1 || !cfg.mix ? "order" : "mixed"}
                disabled={effective === 1}
                onChange={(e) => update({ mix: e.target.value === "mixed" })}
              >
                <option value="mixed">Mixed on the board</option>
                <option value="order">In order (A, B, C...)</option>
              </select>
            </label>
          </div>
          <p className="lb-note">Double coins pays twice the Coins value. A bomb wins or loses its full value.{effective === 1 ? " Easy always keeps the letters in order, A to I." : ""}</p>
        </div>

        <div className="lb-sec">
          <h3>The 20 items</h3>
          <div className="lb-cnt">
            {GROUPS.map((gr) => (
              <span key={gr.key} className={`lb-dfc ${gr.key}`}>{status.counts[gr.key]} of {gr.to - gr.from} {gr.label.toLowerCase()} ready</span>
            ))}
          </div>
          {!anyReady && <p className="lb-note">Fill in all 9 easy items in the editor to start playing this set.</p>}
        </div>

        <div className="lb-end">
          <button type="button" className="lb-go" disabled={!anyReady} onClick={() => { ac(); sfx.pick(); onStart(effective); }}>Start game</button>
        </div>
      </div>
    </div>
  );
}

// ---- page ---------------------------------------------------------------------------
export default function LetterBoardPlay() {
  const { id } = useParams();
  const { user, loading } = useAuth();
  const [set, setSet] = useState(null);
  const [err, setErr] = useState("");
  const [cfg, setCfg] = useState(loadCfg);
  const [session, setSession] = useState(null); // { level, key } while a game is on

  useEffect(() => {
    document.title = "sentenco";
    if (id === "sample") {
      setSet({ title: "Sample set", items: SAMPLE_ITEMS });
      return;
    }
    if (loading) return;
    if (!user) {
      setErr("Log in to play your own sets.");
      return;
    }
    supabase
      .from("letter_board_sets")
      .select("id, title, items")
      .eq("id", id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error || !data) setErr("We couldn't find this set.");
        else setSet({ title: data.title, items: normalizeItems(data.items) });
      });
  }, [id, user, loading]);

  const start = (lvl) => {
    const level = LEVELS.find((L) => L.key === lvl);
    if (level) setSession({ level, key: Date.now() });
  };

  return (
    <div className="lb-page">
      <style>{CSS}</style>
      {err ? (
        <div className="lb-app lb-msgbox"><p>{err}</p></div>
      ) : !set ? (
        <div className="lb-app lb-msgbox"><p>Loading...</p></div>
      ) : session ? (
        <Play
          key={session.key}
          items={set.items}
          cfg={cfg}
          level={session.level}
          onSetup={() => setSession(null)}
          onAgain={() => setSession({ level: session.level, key: Date.now() })}
        />
      ) : (
        <Setup title={set.title} items={set.items} cfg={cfg} setCfg={setCfg} onStart={start} />
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
.lb-page { min-height: 100vh; background: #FBF4F1; display: flex; justify-content: center; align-items: flex-start; padding: 14px; box-sizing: border-box; font-family: 'Inter', sans-serif; color: #1B2A4A; }
.lb-page *, .lb-page *::before, .lb-page *::after { box-sizing: border-box; }
.lb-page button { font-family: inherit; }
.lb-app { width: 100%; max-width: 820px; border-radius: 20px; overflow: hidden; background: #FBF4F1; border: 1px solid #EBD8CE; position: relative; }
.lb-app.lb-shake { animation: lb-shake .5s; }
.lb-msgbox { padding: 40px; text-align: center; font-size: 16px; }
.lb-tbar { display: flex; align-items: center; justify-content: space-between; gap: 10px; background: #1B2A4A; padding: 9px 14px; }
.lb-brand { font-family: 'Fraunces', Georgia, serif; font-size: 20px; font-weight: 600; color: #FBF4F1; letter-spacing: .01em; }
.lb-brand b { color: #F2593A; font-weight: 600; }
.lb-tl { display: flex; align-items: center; gap: 14px; }
.lb-tr { display: flex; align-items: center; gap: 8px; }
.lb-cw { display: flex; align-items: center; gap: 8px; background: #FBF4F1; color: #1B2A4A; border-radius: 999px; padding: 3px 18px 3px 4px; }
.lb-cw b { font-family: 'Fraunces', Georgia, serif; font-size: 26px; font-weight: 600; min-width: 46px; font-variant-numeric: tabular-nums; }
.lb-cw.up { animation: lb-pop .5s; }
.lb-cw.down { animation: lb-shake .45s; }
.lb-buddy { width: 40px; height: 40px; flex: none; overflow: visible; }
.lb-buddy .m2, .lb-buddy .m3, .lb-buddy .so, .lb-buddy .stars { display: none; }
.lb-buddy.happy .m1, .lb-buddy.sad .m1, .lb-buddy.soot .m1 { display: none; }
.lb-buddy.happy .m2 { display: block; }
.lb-buddy.sad .m3, .lb-buddy.soot .m3 { display: block; }
.lb-buddy.soot .so, .lb-buddy.soot .stars { display: block; }
.lb-buddy.soot .e { fill: #fff; }
.lb-buddy.soot .m3 { stroke: #fff; }
.lb-buddy .stars { transform-origin: 22px 22px; animation: lb-spin 1.1s linear infinite; }
.lb-buddy.happy { animation: lb-hop .6s; }
.lb-buddy.sad, .lb-buddy.soot { animation: lb-shake .45s; }
.lb-left { font-size: 13px; color: #FBF4F1; opacity: .8; margin-right: 4px; }
.lb-ib { width: 34px; height: 34px; border-radius: 10px; border: 1px solid rgba(251,244,241,.28); background: transparent; color: #FBF4F1; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; }
.lb-ib:hover { background: rgba(251,244,241,.12); }
.lb-stage { position: relative; min-height: 600px; padding: 24px 20px 28px; overflow: hidden; }
.lb-wave { position: absolute; left: 0; right: 0; bottom: 0; width: 100%; height: 120px; pointer-events: none; }
.lb-grid { position: relative; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin: 0 auto; }
.lb-c { display: block; position: relative; perspective: 700px; border: none; background: none; padding: 0; margin: 0; cursor: pointer; }
.lb-in { display: block; position: absolute; inset: 0; transition: transform .55s; transform-style: preserve-3d; }
.lb-c.lb-flip .lb-in { transform: rotateY(180deg); }
.lb-c.lb-wob .lb-in { animation: lb-wob .95s ease-in; }
.lb-c:hover:not(.lb-locked) .lb-in { transform: translateY(-4px); }
.lb-c.lb-flip:hover .lb-in { transform: rotateY(180deg); }
.lb-f, .lb-b { position: absolute; inset: 0; border-radius: 14px; display: flex; flex-direction: column; align-items: center; justify-content: center; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-bottom-width: 6px; border-bottom-style: solid; }
.lb-f { font-family: 'Fraunces', Georgia, serif; color: #FBF4F1; font-size: 42px; font-weight: 600; }
.lb-b { transform: rotateY(180deg); border-width: 2px; border-style: solid; border-bottom-width: 6px; gap: 2px; }
.lb-b .lb-spk { position: absolute; top: 6px; right: 10px; color: #FF7A5C; animation: lb-flick .25s infinite alternate; }
.lb-b .lb-x { font-family: 'Fraunces', Georgia, serif; font-size: 34px; font-weight: 600; line-height: 1; }
.lb-b .lb-v { font-size: 15px; font-weight: 700; }
.lb-c.lb-done { cursor: default; }
.lb-dn { position: absolute; inset: 0; border-radius: 14px; background: rgba(255,255,255,.55); border: 1.5px dashed #E3BFB2; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #A86F5F; gap: 1px; }
.lb-lt { font-size: 14px; }
.lb-gv { font-size: 15px; font-weight: 700; }
.lb-gv.ok { color: #3B6D11; }
.lb-gv.bad { color: #A32D2D; }
.lb-ov { position: absolute; inset: 0; background: rgba(27,42,74,.62); display: flex; align-items: center; justify-content: center; padding: 14px; z-index: 5; }
.lb-card { width: 100%; max-width: 600px; max-height: 100%; overflow: auto; background: #fff; border-radius: 20px; border-bottom: 6px solid #F2593A; }
.lb-qh { display: flex; align-items: center; gap: 12px; padding: 12px 18px; color: #FBF4F1; }
.lb-lt2 { width: 46px; height: 46px; border-radius: 12px; background: #F2593A; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', Georgia, serif; font-size: 26px; font-weight: 600; flex: none; color: #FBF4F1; }
.lb-x2 { font-family: 'Fraunces', Georgia, serif; font-size: 28px; font-weight: 600; color: #FF9A7E; }
.lb-nm { font-size: 18px; font-weight: 700; line-height: 1.2; }
.lb-rl { font-size: 13px; opacity: .85; margin-top: 1px; }
.lb-qb { padding: 6px 22px 22px; }
.lb-tag { display: inline-flex; align-items: center; gap: 6px; margin-top: 12px; font-size: 12px; font-weight: 600; color: #7A2410; background: #FFE2D8; border-radius: 999px; padding: 4px 12px; }
.lb-q { font-family: 'Fraunces', Georgia, serif; font-size: 28px; font-weight: 500; line-height: 1.3; margin: 10px 0 16px; color: #1B2A4A; }
.lb-opts { display: grid; gap: 9px; }
.lb-o { display: flex; align-items: center; gap: 12px; text-align: left; width: 100%; min-height: 56px; padding: 8px 14px; font-size: 18px; font-weight: 500; border-radius: 14px; border: 2px solid #EBD8CE; background: #FBF4F1; color: #1B2A4A; cursor: pointer; }
.lb-o:hover:not(:disabled) { border-color: #1B2A4A; }
.lb-ol { width: 30px; height: 30px; border-radius: 50%; background: #1B2A4A; color: #FBF4F1; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; flex: none; }
.lb-o.right { background: #DDEFC4; border-color: #3B6D11; color: #173404; }
.lb-o.wrong { background: #F9D1D1; border-color: #A32D2D; color: #501313; animation: lb-shake .45s; }
.lb-o.dim { opacity: .5; }
.lb-tp { border: 1.5px dashed #CDB9AE; border-radius: 14px; padding: 12px 14px; background: #FBF4F1; }
.lb-th { font-size: 12px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; color: #7A5A4E; margin-bottom: 10px; }
.lb-tbt { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.lb-mk { display: flex; align-items: center; justify-content: center; gap: 8px; height: 52px; border: none; border-bottom: 4px solid; border-radius: 14px; font-size: 17px; font-weight: 700; color: #fff; cursor: pointer; }
.lb-mk:active { transform: translateY(2px); border-bottom-width: 2px; }
.lb-mk.yes { background: #3DAA4A; border-bottom-color: #2A7D34; }
.lb-mk.no { background: #E5534B; border-bottom-color: #B23A33; }
.lb-lnk { margin-top: 10px; background: none; border: none; padding: 0; font-size: 13px; color: #7A5A4E; text-decoration: underline; cursor: pointer; }
.lb-key { margin-top: 8px; font-size: 15px; background: #FFF1C2; color: #5C3B00; border-radius: 8px; padding: 8px 12px; }
.lb-fb { margin-top: 14px; border-radius: 14px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; position: relative; overflow: hidden; }
.lb-fb.ok { background: #E6F4D2; color: #173404; }
.lb-fb.bad { background: #FBE0E0; color: #501313; }
.lb-fb.zero { background: #F4ECE6; color: #1B2A4A; }
.lb-big { font-family: 'Fraunces', Georgia, serif; font-size: 30px; font-weight: 600; animation: lb-pop .5s; }
.lb-msg { font-size: 19px; font-weight: 700; }
.lb-fsub { font-size: 14px; margin-top: 2px; }
.lb-cf { position: absolute; bottom: 8px; color: #F2593A; animation: lb-rise 1.1s ease-out forwards; opacity: 0; }
.lb-end { display: flex; justify-content: flex-end; margin-top: 12px; }
.lb-go { background: #F2593A; color: #fff; border: none; border-bottom: 4px solid #B5391D; border-radius: 14px; height: 50px; padding: 0 28px; font-size: 17px; font-weight: 700; cursor: pointer; }
.lb-go:hover:not(:disabled) { background: #E44C2D; }
.lb-go:active:not(:disabled) { transform: translateY(2px); border-bottom-width: 2px; }
.lb-go:disabled { background: #D9C9C1; border-bottom-color: #BBA79D; cursor: not-allowed; }
.lb-ghost { background: none; border: 2px solid #EBD8CE; color: #1B2A4A; border-radius: 14px; height: 50px; padding: 0 22px; font-size: 16px; font-weight: 600; cursor: pointer; }
.lb-ghost:hover { border-color: #1B2A4A; }
.lb-actions { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
.lb-res { padding: 34px 20px 44px; min-height: 540px; }
.lb-card2 { background: #fff; border-bottom: 6px solid #F2593A; border-radius: 22px; max-width: 460px; margin: 0 auto; padding: 26px 24px 28px; text-align: center; }
.lb-eb { font-size: 13px; font-weight: 600; color: #7A5A4E; letter-spacing: .06em; text-transform: uppercase; }
.lb-card2 .lb-n { font-family: 'Fraunces', Georgia, serif; font-size: 84px; font-weight: 600; color: #1B2A4A; line-height: 1.05; margin: 6px 0 0; font-variant-numeric: tabular-nums; }
.lb-unit { font-size: 17px; color: #7A5A4E; }
.lb-stars { display: flex; justify-content: center; gap: 8px; margin: 10px 0; }
.lb-great { font-family: 'Fraunces', Georgia, serif; font-size: 28px; font-weight: 600; margin: 0 0 4px; }
.lb-sub2 { font-size: 14px; color: #7A5A4E; margin: 0 0 20px; }
.lb-sb { padding: 26px 28px 30px; }
.lb-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #F2593A; margin: 0; }
.lb-sti { font-family: 'Fraunces', Georgia, serif; font-size: 32px; font-weight: 600; margin: 4px 0 18px; color: #1B2A4A; }
.lb-sec { background: #fff; border-radius: 16px; padding: 14px 16px 16px; margin-bottom: 12px; }
.lb-sec h3 { font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #7A5A4E; margin: 0 0 10px; }
.lb-row { display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: center; font-size: 14px; }
.lb-row label { display: flex; align-items: center; gap: 8px; font-weight: 500; }
.lb-row select { height: 36px; font-size: 14px; border: 1px solid #DCC9BF; border-radius: 8px; padding: 0 8px; background: #FBF4F1; color: #1B2A4A; }
.lb-note { font-size: 13px; color: #7A5A4E; margin: 10px 0 0; line-height: 1.5; }
.lb-lv { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.lb-lvc { border: 2px solid #EBD8CE; background: #FBF4F1; border-radius: 14px; padding: 12px 10px; text-align: center; cursor: pointer; color: #1B2A4A; }
.lb-lvc:hover:not(:disabled) { border-color: #1B2A4A; }
.lb-lvc.sel { border-color: #F2593A; background: #FFE2D8; }
.lb-lvc:disabled { opacity: .5; cursor: not-allowed; }
.lb-lvc .lb-a { font-size: 15px; font-weight: 700; }
.lb-lvc .lb-n { font-family: 'Fraunces', Georgia, serif; font-size: 40px; font-weight: 600; line-height: 1.1; margin: 2px 0 0; }
.lb-lvc .lb-u { font-size: 12px; color: #7A5A4E; }
.lb-lvc .lb-s { font-size: 12px; color: #7A5A4E; margin-top: 6px; line-height: 1.35; }
.lb-cnt { display: flex; flex-wrap: wrap; gap: 8px; }
.lb-dfc { font-size: 12px; font-weight: 600; border-radius: 999px; padding: 4px 11px; }
.lb-dfc.easy { background: #FFE2D8; color: #7A2410; }
.lb-dfc.avg { background: #F2593A; color: #fff; }
.lb-dfc.hard { background: #1B2A4A; color: #FBF4F1; }
@keyframes lb-pop { 0% { transform: scale(1); } 40% { transform: scale(1.15); } 100% { transform: scale(1); } }
@keyframes lb-hop { 0%, 100% { transform: translateY(0); } 40% { transform: translateY(-10px); } }
@keyframes lb-shake { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-7px); } 40% { transform: translateX(7px); } 60% { transform: translateX(-5px); } 80% { transform: translateX(5px); } }
@keyframes lb-rise { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-48px); opacity: 0; } }
@keyframes lb-spin { to { transform: rotate(360deg); } }
@keyframes lb-flick { from { opacity: .4; transform: scale(.8); } to { opacity: 1; transform: scale(1.2); } }
@keyframes lb-wob { 0% { transform: rotate(0) scale(1); } 12% { transform: rotate(-3deg) scale(1.02); } 24% { transform: rotate(3deg) scale(1.03); } 36% { transform: rotate(-5deg) scale(1.04); } 48% { transform: rotate(5deg) scale(1.05); } 60% { transform: rotate(-7deg) scale(1.06); } 72% { transform: rotate(7deg) scale(1.07); } 84% { transform: rotate(-9deg) scale(1.08); } 100% { transform: rotate(9deg) scale(1.09); } }
@media (prefers-reduced-motion: reduce) {
  .lb-in, .lb-cw, .lb-buddy, .lb-buddy .stars, .lb-big, .lb-o.wrong, .lb-cf, .lb-app.lb-shake, .lb-b .lb-spk { animation: none; transition: none; }
}
@media (max-width: 640px) {
  .lb-lv { grid-template-columns: 1fr; }
  .lb-q { font-size: 23px; }
}
`;
