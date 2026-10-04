import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { GROUPS, LEVELS, SAMPLE_ITEMS, SAMPLE_STORY, SAMPLE_STORY_ITEMS, hasStory, levelStatus, normalizeItems, normalizeStory, taskTag } from "./letterBoardData";

// Letter Board: the play page. A one-to-one game for a teacher and a student.
// The teacher picks a difficulty (which sets the number of tiles), the board
// hides a letter on every tile, and a tile flips to reveal coins, double
// coins, a bomb or a bonus before its question opens as a card over the board.
// Choice questions are checked automatically; open questions are marked
// Correct / Not quite by the teacher.

const OPTION_LETTERS = ["A", "B", "C"];

const TYPES = {
  c: { name: "Coins", bg: "#FFFFFF", fg: "#1B2A4A", bd: "#F2593A", dk: "#F2593A", ic: "#F2593A", icon: "coin", rule: (v) => `+${v.c} if correct` },
  d: { name: "Double coins", bg: "#FFE2D8", fg: "#1B2A4A", bd: "#F2593A", dk: "#F2593A", ic: "#F2593A", icon: null, rule: (v) => `+${v.c * 2} if correct` },
  x: { name: "Bomb", bg: "#E7ECF7", fg: "#1B2A4A", bd: "#1B2A4A", dk: "#1B2A4A", ic: "#1B2A4A", icon: "bomb", rule: (v) => `+${v.x} if correct, lose ${v.x} if wrong` },
  b: { name: "Bonus", bg: "#FFF4D6", fg: "#1B2A4A", bd: "#D9A62E", dk: "#D9A62E", ic: "#D9A62E", icon: "star", rule: (v) => `+${v.b} if correct` },
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
  book: (<><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" /></>),
  image: (<><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.7" /><path d="M21 16l-5-5-4 4-2-2-7 7" /></>),
  pencil: (<><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>),
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

// Scales the whole player so it fills the window with only a thin margin, however big the screen is.
function useFitScale(ref) {
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const calc = () => {
      const w = el.offsetWidth + 8;
      const h = el.offsetHeight + 8;
      const m = 14;
      const k = Math.min((window.innerWidth - 2 * m) / w, (window.innerHeight - 2 * m) / h);
      const next = Math.max(0.5, Math.min(3, k));
      document.documentElement.style.setProperty("--lb-scale", String(next));
      setScale(next);
    };
    calc();
    window.addEventListener("resize", calc);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(calc) : null;
    if (ro) ro.observe(el);
    return () => { window.removeEventListener("resize", calc); if (ro) ro.disconnect(); document.documentElement.style.removeProperty("--lb-scale"); };
  }, [ref]);
  return scale;
}

function Brand() {
  return <span className="lb-brand"><img src="/logo-sentenco.png" alt="" className="lb-logo" />entenco</span>;
}

// Dollar coin: cream face, coral rim, dashed inner ring and a bold $.
function DollarCoin({ size = 34, mood = "" }) {
  return (
    <span className={`lb-dc ${mood}`} style={{ width: size, height: size }} aria-hidden="true">
      <i style={{ fontSize: Math.round(size * 0.52) }}>$</i>
    </span>
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

function TopBar({ coins, pulse, mood, tilesLeft, muted, onMute, onSetup, onStory, full }) {
  const shown = useCountUp(coins);
  return (
    <div className="lb-tbar">
      <div className="lb-tl">
        <Brand />
        <div className={`lb-cw ${pulse}`}>
          <DollarCoin mood={mood} />
          <b>{shown}</b>
        </div>
      </div>
      {full && (
        <div className="lb-tr">
          <span className="lb-left">{tilesLeft} tiles left</span>
          {onStory && (
            <button type="button" className="lb-ib lb-story-btn" onClick={onStory} aria-label="Read the story again">
              <Icon name="book" /><span>Story</span>
            </button>
          )}
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

const BURST_CLIP = (() => {
  const pts = [];
  for (let i = 0; i < 48; i++) {
    const r = i % 2 ? 38 : 50;
    const ang = (Math.PI * i) / 24 - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(ang)).toFixed(1)}% ${(50 + r * Math.sin(ang)).toFixed(1)}%`);
  }
  return `polygon(${pts.join(",")})`;
})();
const BURST_WORD = { c: "POW!", d: "WOW!", x: "BOOM!", b: "BONUS!" };

function Face({ type, cfg }) {
  const v = amountFor(type, cfg);
  return (
    <span className="lb-b">
      <span className="lb-bst" style={{ background: "#1B2A4A", clipPath: BURST_CLIP }} />
      <span className="lb-bst top" style={{ background: type === "x" ? "#1B2A4A" : "#F2593A", clipPath: BURST_CLIP }}>
        <b>{BURST_WORD[type]}</b>
        <em>{type === "x" ? `\u00B1${v}` : `+${v}`}</em>
      </span>
    </span>
  );
}

// ---- the game --------------------------------------------------------------------
function Play({ items, story, cfg, level, onSetup, onAgain }) {
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
  const [showStory, setShowStory] = useState(false);
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
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}><DollarCoin size={64} mood="happy" /></div>
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
  const gap = 8;
  const tileW = `calc((100% - ${gap * (cols - 1)}px) / ${cols} - 0.5px)`;
  const tileH = n === 9 ? 128 : n === 15 ? 110 : 100;

  return (
    <div className={`lb-app ${shake ? "lb-shake" : ""}`}>
      <TopBar coins={g.coins} pulse={pulse} mood={mood} tilesLeft={tilesLeft} muted={muted} onMute={toggleMute} onSetup={onSetup} onStory={hasStory(story) ? () => setShowStory(true) : null} full />
      <div className="lb-stage">
        <div className="lb-grid" style={{ maxWidth: n === 9 ? 520 : "100%" }}>
          {g.ord.map((i, p) => {
            const ch = String.fromCharCode(65 + i);
            const d = g.done[i];
            const style = { width: tileW, height: tileH };
            if (d) {
              return (
                <div key={i} className="lb-c lb-done" style={style}>
                  <div className="lb-dn">
                    <span className="lb-lt">{ch}</span>
                    <span className={`lb-gv ${d.g > 0 ? "ok" : d.g < 0 ? "bad" : ""}`}>{d.g !== 0 && <i className="lb-mc">$</i>}{d.g > 0 ? `+${d.g}` : d.g < 0 ? d.g : "0"}</span>
                  </div>
                </div>
              );
            }
            const chk = (Math.floor(p / cols) + (p % cols)) % 2;
            const bg = chk ? "#FFFFFF" : "#FFE9E1";
            const cls = `lb-c${busy ? " lb-locked" : ""}${cur === i && phase === "wob" ? " lb-wob" : ""}${cur === i && phase === "flip" ? " lb-flip" : ""}`;
            return (
              <button key={i} type="button" className={cls} style={style} onClick={() => pick(i)} aria-label={`Letter ${ch}`}>
                <span className="lb-in">
                  <span className="lb-f" style={{ background: bg }}>{ch}</span>
                  <Face type={g.types[i]} cfg={cfg} />
                </span>
              </button>
            );
          })}
        </div>

        {showStory && <StoryOverlay story={story} onClose={() => setShowStory(false)} />}

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

// One or two words that tell the student what to do. Derived from the item, never typed by the teacher.
function instructionFor(item) {
  if (item.kind === "choice") return { text: "Pick one", icon: "list" };
  if (item.task === "grammar") return { text: "Fix it", icon: "pencil" };
  if (item.task === "picture") return { text: "Look and say", icon: "image" };
  if (item.task === "retell") return { text: "Retell", icon: "chat" };
  return { text: "Answer", icon: "chat" };
}

// Older items may carry the instruction inside the question ("Fix the sentence: ..."). Split it off so
// the sentence stands alone.
function splitQuestion(item) {
  const q = String(item.q || "").trim();
  const m = q.match(/^([^:"\u201C_]{3,34}):\s*([\s\S]+)$/);
  if (m && m[1].trim().split(/\s+/).length <= 5) {
    const rest = m[2].trim().replace(/^["\u201C\u2018']+/, "").replace(/["\u201D\u2019']+$/, "");
    if (rest) return { text: rest, fix: /fix|correct|mistake/i.test(m[1]) };
  }
  return { text: q, fix: false };
}

function QuestionCard({ letter, type, cfg, item, picked, res, delta, showKey, onKey, onChoose, onMark, onBack, last }) {
  const isChoice = item.kind === "choice";
  const marked = picked >= 0;
  const cls = res ? "ok" : delta < 0 ? "bad" : "zero";
  const msg = res ? (type === "x" ? "Defused!" : "Correct!") : type === "x" ? "BOOM!" : "Not this time";
  let sub = "";
  if (!res) {
    if (isChoice) sub = `The answer is ${OPTION_LETTERS[item.correct]}: ${item.options[item.correct]}`;
    else sub = item.sample ? `A good answer: ${item.sample}` : "";
  }
  const { text, fix } = splitQuestion(item);
  const inst = fix && !isChoice ? { text: "Fix it", icon: "pencil" } : instructionFor(item);
  const v = amountFor(type, cfg);
  const burst = type === "x" ? `\u00B1${v}` : `+${v}`;
  return createPortal(
    <div className="lb-ov">
      <div className="lb-qw">
        <span className="lb-qb1" style={{ clipPath: BURST_CLIP }} />
        <span className="lb-qb2" style={{ clipPath: BURST_CLIP, background: type === "x" ? "#1B2A4A" : "#F2593A" }}>{burst}</span>
        <span className="lb-qinst"><Icon name={inst.icon} size={14} />{inst.text}</span>
        <div className="lb-bub">
          {item.image && <div className="lb-qimg"><img src={item.image} alt="" /></div>}
          <p className="lb-q">{text}</p>
          <span className="lb-tail" /><span className="lb-tail2" />
        </div>
        <div className="lb-sprow">
          <div className="lb-lt2">{letter}</div>
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
            <div className="lb-btns">
              <button type="button" className="lb-mk yes" onClick={() => onMark(true)}><Icon name="check" size={22} />Correct</button>
              <button type="button" className="lb-mk no" onClick={() => onMark(false)}><Icon name="x" size={22} />Not quite</button>
            </div>
          ) : null}
        </div>
        {!isChoice && !marked && item.sample ? (
          <div className="lb-keyrow">
            <button type="button" className="lb-lnk" onClick={onKey}>{showKey ? "Hide sample answer" : "Show sample answer"}</button>
            {showKey && <div className="lb-key">{item.sample}</div>}
          </div>
        ) : null}
        {marked && (
          <>
            <div className={`lb-fb ${cls}`}>
              <div><div className="lb-msg">{msg}</div>{sub && <div className="lb-fsub">{sub}</div>}</div>
              <div className="lb-big"><DollarCoin size={28} />{delta > 0 ? `+${delta}` : delta < 0 ? delta : "0"}</div>
              {res && Array.from({ length: 7 }, (_, z) => (
                <span key={z} className="lb-cf" style={{ left: `${52 + z * 6}%`, animationDelay: `${z * 70}ms` }}><DollarCoin size={20} /></span>
              ))}
            </div>
            <div className="lb-end"><button type="button" className="lb-go" onClick={onBack}>{last ? "See results" : "Back to board"}</button></div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

// ---- the story --------------------------------------------------------------------
function StoryBody({ story }) {
  const paras = String(story.text || "").split(/\n{2,}/).map((t) => t.trim()).filter(Boolean);
  return (
    <>
      {story.image && <div className="lb-simg"><img src={story.image} alt="" /></div>}
      {paras.map((t, i) => <p key={i} className="lb-sp">{t}</p>)}
    </>
  );
}

// Peek at the story while playing (does not change coins or tiles).
function StoryOverlay({ story, onClose }) {
  return createPortal(
    <div className="lb-ov lb-ov-story">
      <div className="lb-card lb-scard">
        <div className="lb-qh">
          <Icon name="book" size={26} color="#F2593A" />
          <div><div className="lb-nm">{story.title || "The story"}</div><div className="lb-rl">Take your time, then go back to the board</div></div>
        </div>
        <div className="lb-qb"><StoryBody story={story} /></div>
        <div className="lb-end lb-end-pad"><button type="button" className="lb-go" onClick={onClose}>Back to the board</button></div>
      </div>
    </div>,
    document.body
  );
}

// Shown before the board opens: the student reads (or hears) the story first.
function StoryRead({ title, story, onStart, onBack }) {
  return (
    <div className="lb-app lb-setup">
      <div className="lb-tbar">
        <Brand />
        <span className="lb-left">Read the story first</span>
      </div>
      <div className="lb-sb">
        <p className="lb-eyebrow">Story time</p>
        <h1 className="lb-sti">{story.title || title}</h1>
        <div className="lb-sec lb-read"><StoryBody story={story} /></div>
        <p className="lb-note">The questions on the board are about this story. You can open it again any time with the Story button.</p>
        <div className="lb-end lb-end-split">
          <button type="button" className="lb-ghost" onClick={onBack}>Back to setup</button>
          <button type="button" className="lb-go" onClick={() => { ac(); sfx.pick(); onStart(); }}>I have read it, open the board</button>
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

function Setup({ title, items, story, cfg, setCfg, onStart }) {
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
        <Brand />
        <span className="lb-left">Teacher only</span>
      </div>
      <div className="lb-sb lb-sbq">
        <h1 className="lb-sti">{title}</h1>
        {hasStory(story) && <p className="lb-note lb-nomt">Story: <b>{story.title || "Untitled story"}</b></p>}

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
                <div className="lb-n">{L.n}</div>
                <div className="lb-a">{L.name}</div>
                {!ok && <div className="lb-s">Needs {status.missing[L.key]} more</div>}
              </button>
            );
          })}
        </div>

        <div className="lb-vals">
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
              <option value="mixed">Mixed</option>
              <option value="order">In order</option>
            </select>
          </label>
        </div>

        {!anyReady && <p className="lb-note">Fill in all 9 easy items in the editor to play this set.</p>}

        <button type="button" className="lb-go lb-start" disabled={!anyReady} onClick={() => { ac(); sfx.pick(); onStart(effective); }}>Start game</button>
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
  const [session, setSession] = useState(null); // { level, key, reading } while a game is on
  const fitRef = useRef(null);
  const scale = useFitScale(fitRef);

  useEffect(() => {
    document.title = "sentenco";
    if (id === "sample") {
      setSet({ title: "Sample set", items: SAMPLE_ITEMS, story: null });
      return;
    }
    if (id === "sample-story") {
      setSet({ title: "The Lost Cat (story sample)", items: SAMPLE_STORY_ITEMS, story: SAMPLE_STORY });
      return;
    }
    if (loading) return;
    if (!user) {
      setErr("Log in to play your own sets.");
      return;
    }
    supabase
      .from("letter_board_sets")
      .select("*")
      .eq("id", id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error || !data) setErr("We couldn't find this set.");
        else setSet({ title: data.title, items: normalizeItems(data.items), story: normalizeStory(data.story) });
      });
  }, [id, user, loading]);

  const start = (lvl) => {
    const level = LEVELS.find((L) => L.key === lvl);
    if (level) setSession({ level, key: Date.now(), reading: hasStory(set && set.story) });
  };

  return (
    <div className="lb-page">
      <style>{CSS}</style>
      <div className="lb-fit" ref={fitRef} style={{ transform: `scale(${scale})` }}>
      {err ? (
        <div className="lb-app lb-msgbox"><p>{err}</p></div>
      ) : !set ? (
        <div className="lb-app lb-msgbox"><p>Loading...</p></div>
      ) : session && session.reading ? (
        <StoryRead
          title={set.title}
          story={set.story}
          onStart={() => setSession({ ...session, reading: false })}
          onBack={() => setSession(null)}
        />
      ) : session ? (
        <Play
          key={session.key}
          items={set.items}
          story={set.story}
          cfg={cfg}
          level={session.level}
          onSetup={() => setSession(null)}
          onAgain={() => setSession({ level: session.level, key: Date.now(), reading: false })}
        />
      ) : (
        <Setup title={set.title} items={set.items} story={set.story} cfg={cfg} setCfg={setCfg} onStart={start} />
      )}
      </div>
    </div>
  );
}

const CSS = `
.lb-sbq { display: flex; flex-direction: column; gap: 16px; min-height: 445px; padding: 10px 10px 12px; }
.lb-sbq .lb-sti { font-size: 34px; margin: 6px 0 0; }
.lb-vals { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; }
.lb-vals label { display: flex; flex-direction: column; gap: 5px; font-size: 13px; font-weight: 700; }
.lb-vals select { height: 42px; width: 100%; font-size: 14px; border: 3px solid #1B2A4A; border-radius: 10px; padding: 0 6px; background: #fff; color: #1B2A4A; font-family: inherit; font-weight: 500; }
.lb-start { width: 100%; margin-top: auto; }
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
.lb-page { min-height: 100vh; background: #FBF4F1; display: flex; justify-content: center; align-items: center; padding: 10px; box-sizing: border-box; font-family: 'Inter', sans-serif; color: #1B2A4A; }
.lb-page *, .lb-page *::before, .lb-page *::after { box-sizing: border-box; }
.lb-page button, .lb-ov button { font-family: inherit; }
.lb-ov { font-family: 'Inter', sans-serif; color: #1B2A4A; }
.lb-ov, .lb-ov *, .lb-ov *::before, .lb-ov *::after { box-sizing: border-box; }
.lb-fit { width: 100%; max-width: 580px; transform-origin: center center; }
.lb-app { width: 100%; border-radius: 12px; overflow: hidden; background: #fff; border: 3px solid #1B2A4A; box-shadow: 4px 4px 0 #1B2A4A; position: relative; }
.lb-app.lb-shake .lb-grid { animation: lb-shake .5s; }
.lb-msgbox { padding: 40px; text-align: center; font-size: 16px; }
.lb-tbar { display: flex; align-items: center; justify-content: space-between; gap: 10px; background: #fff; border-bottom: 3px solid #1B2A4A; padding: 6px 8px; }
.lb-brand { display: inline-flex; align-items: center; font-family: 'Fraunces', Georgia, serif; font-size: 24px; font-weight: 700; color: #1B2A4A; letter-spacing: -.01em; }
.lb-logo { height: 34px; width: auto; display: block; margin-right: -5px; }
.lb-tl { display: flex; align-items: center; gap: 14px; }
.lb-tr { display: flex; align-items: center; gap: 8px; }
.lb-cw { display: flex; align-items: center; gap: 8px; background: #fff; border: 3px solid #1B2A4A; box-shadow: 3px 3px 0 #1B2A4A; color: #1B2A4A; border-radius: 999px; padding: 2px 18px 2px 3px; }
.lb-cw b { font-family: 'Fraunces', Georgia, serif; font-size: 26px; font-weight: 800; min-width: 46px; font-variant-numeric: tabular-nums; line-height: 1.1; }
.lb-dc { border-radius: 50%; background: #FFF3DC; color: #F2593A; border: 3px solid #F2593A; position: relative; display: inline-flex; align-items: center; justify-content: center; flex: none; }
.lb-dc::after { content: ''; position: absolute; inset: 3px; border-radius: 50%; border: 1.5px dashed currentColor; opacity: .7; }
.lb-dc i { font-family: 'Fraunces', Georgia, serif; font-style: normal; font-weight: 800; line-height: 1; }
.lb-dc.happy { animation: lb-hop .6s; }
.lb-dc.sad, .lb-dc.soot { animation: lb-shake .45s; }
.lb-cw.up { animation: lb-pop .5s; }
.lb-cw.down { animation: lb-shake .45s; }
.lb-left { font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: #fff; border: 2px solid #1B2A4A; color: #1B2A4A; padding: 4px 9px; margin-right: 4px; }
.lb-ib { width: 34px; height: 34px; border-radius: 9px; border: 2px solid #1B2A4A; background: #fff; color: #1B2A4A; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; }
.lb-ib:hover { background: #FFE9E1; }
.lb-ib.lb-story-btn { width: auto; padding: 0 12px; gap: 6px; font-size: 13px; font-weight: 600; }
.lb-qimg { margin: 12px 0 0; display: flex; justify-content: center; }
.lb-qimg img { max-width: 100%; max-height: 168px; border-radius: 14px; border: 1.5px solid #EBD8CE; background: #fff; object-fit: contain; }
.lb-ov.lb-ov-story { z-index: 51; }
.lb-ov > .lb-card { margin: auto; zoom: var(--lb-scale, 1); }
.lb-scard { max-width: 640px; }
.lb-simg { display: flex; justify-content: center; margin: 12px 0 4px; }
.lb-simg img { max-width: 100%; max-height: 190px; border-radius: 14px; border: 1.5px solid #EBD8CE; background: #fff; object-fit: contain; }
.lb-sp { font-family: 'Fraunces', Georgia, serif; font-size: 19px; line-height: 1.6; margin: 10px 0; color: #1B2A4A; }
.lb-read { padding: 8px 20px 14px; }
.lb-storysec { background: #E4E9F5; }
.lb-nomt { margin-top: 0; }
.lb-end-pad { padding: 0 22px 20px; }
.lb-end-split { justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.lb-stage { position: relative; padding: 4px 3px 8px; background-color: #FFF6EC; background-image: radial-gradient(#E9D9C4 2px, transparent 2.2px); background-size: 12px 12px; }
.lb-grid { position: relative; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin: 0 auto; }
.lb-c { display: block; position: relative; perspective: 700px; border: none; background: none; padding: 0; margin: 0; cursor: pointer; }
.lb-in { display: block; position: absolute; inset: 0; transition: transform .55s; transform-style: preserve-3d; }
.lb-c.lb-flip .lb-in { transform: rotateY(180deg); }
.lb-c.lb-wob .lb-in { animation: lb-wob .95s ease-in; }
.lb-c:hover:not(.lb-locked) .lb-in { transform: translateY(-4px); }
.lb-c.lb-flip:hover .lb-in { transform: rotateY(180deg); }
.lb-f, .lb-b { position: absolute; inset: 0; border-radius: 9px; display: flex; flex-direction: column; align-items: center; justify-content: center; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.lb-f { font-family: 'Fraunces', Georgia, serif; color: #1B2A4A; font-size: 42px; font-weight: 800; border: 3px solid #1B2A4A; box-shadow: 0 4px 0 #1B2A4A; }
.lb-b { transform: rotateY(180deg); }
.lb-bst { position: absolute; inset: -10px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; line-height: 1; }
.lb-bst.top { inset: -5px; }
.lb-bst b { font-family: 'Fraunces', Georgia, serif; font-size: 13px; font-weight: 800; letter-spacing: .04em; }
.lb-bst em { font-family: 'Fraunces', Georgia, serif; font-style: normal; font-size: 21px; font-weight: 800; margin-top: 2px; }
.lb-c.lb-done { cursor: default; }
.lb-dn { position: absolute; inset: 0; border-radius: 9px; background: #fff; border: 2px dashed #8EA0C8; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #6B7A99; gap: 2px; }
.lb-lt { font-size: 14px; }
.lb-gv { font-size: 15px; font-weight: 800; display: inline-flex; align-items: center; gap: 4px; color: #6B7A99; }
.lb-mc { width: 16px; height: 16px; border-radius: 50%; border: 2px solid #1B2A4A; display: inline-flex; align-items: center; justify-content: center; font-style: normal; font-size: 9px; color: #1B2A4A; }
.lb-gv.ok { color: #1B2A4A; }
.lb-gv.bad { color: #C23B1B; }
.lb-ov { position: fixed; inset: 0; background-color: #FADFD3; background-image: radial-gradient(#F4C0AD 2.2px, transparent 2.4px); background-size: 14px 14px; display: flex; padding: 14px; z-index: 50; overflow-y: auto; }
.lb-card { width: 100%; max-width: 600px; max-height: 100%; overflow: auto; background: #fff; border-radius: 16px; border: 3px solid #1B2A4A; box-shadow: 6px 6px 0 #1B2A4A; }
.lb-qh { display: flex; align-items: center; gap: 12px; padding: 12px 18px; background: #FFF6EC; border-bottom: 3px solid #1B2A4A; color: #1B2A4A; }
.lb-lt2 { width: 46px; height: 46px; border-radius: 50%; background: #fff; border: 3px solid #1B2A4A; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', Georgia, serif; font-size: 26px; font-weight: 800; flex: none; color: #1B2A4A; }
.lb-x2 { font-family: 'Fraunces', Georgia, serif; font-size: 28px; font-weight: 600; color: #F2593A; }
.lb-nm { font-size: 18px; font-weight: 700; line-height: 1.2; }
.lb-rl { font-size: 13px; opacity: .85; margin-top: 1px; }
.lb-qb { padding: 6px 22px 22px; }
.lb-q { font-family: 'Fraunces', Georgia, serif; font-size: 30px; font-weight: 800; line-height: 1.2; margin: 0; color: #1B2A4A; }
.lb-qw { position: relative; width: 100%; max-width: 560px; margin: auto; padding-top: 34px; zoom: var(--lb-scale, 1); }
.lb-qb1, .lb-qb2 { position: absolute; right: -14px; top: 6px; width: 88px; height: 88px; z-index: 3; }
.lb-qb1 { background: #1B2A4A; }
.lb-qb2 { right: -10px; top: 10px; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; color: #fff; font-family: 'Fraunces', Georgia, serif; font-weight: 800; font-size: 22px; }
.lb-qinst { position: absolute; left: 18px; top: 18px; z-index: 3; display: inline-flex; align-items: center; gap: 6px; background: #fff; border: 3px solid #1B2A4A; font-size: 12px; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; padding: 4px 11px; color: #1B2A4A; }
.lb-bub { position: relative; background: #fff; border: 3px solid #1B2A4A; border-radius: 22px; box-shadow: 5px 5px 0 #1B2A4A; padding: 34px 58px 24px 24px; }
.lb-tail { position: absolute; left: 34px; bottom: -24px; border-left: 4px solid transparent; border-right: 26px solid transparent; border-top: 24px solid #1B2A4A; }
.lb-tail2 { position: absolute; left: 37px; bottom: -17px; border-left: 2px solid transparent; border-right: 20px solid transparent; border-top: 19px solid #fff; }
.lb-sprow { display: flex; align-items: flex-start; gap: 14px; margin-top: 34px; }
.lb-sprow .lb-lt2 { margin-top: 2px; }
.lb-btns { display: flex; gap: 12px; flex: 1; min-width: 0; }
.lb-keyrow { margin-top: 12px; text-align: center; }
.lb-opts { display: grid; gap: 9px; flex: 1; min-width: 0; }
.lb-o { display: flex; align-items: center; gap: 12px; text-align: left; width: 100%; min-height: 56px; padding: 8px 14px; font-size: 18px; font-weight: 500; border-radius: 12px; border: 3px solid #1B2A4A; background: #fff; color: #1B2A4A; cursor: pointer; }
.lb-o:hover:not(:disabled) { background: #FFE9E1; }
.lb-ol { width: 30px; height: 30px; border-radius: 50%; background: #1B2A4A; color: #FBF4F1; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; flex: none; }
.lb-o.right { background: #1B2A4A; color: #fff; }
.lb-o.right .lb-ol { background: #fff; color: #1B2A4A; }
.lb-o.wrong { background: #F2593A; color: #fff; animation: lb-shake .45s; }
.lb-o.wrong .lb-ol { background: #fff; color: #F2593A; }
.lb-o.dim { opacity: .45; }
.lb-mk { flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; height: 52px; border: 3px solid #1B2A4A; border-radius: 12px; box-shadow: 0 4px 0 #1B2A4A; font-size: 17px; font-weight: 800; cursor: pointer; }
.lb-mk:active { transform: translateY(3px); box-shadow: 0 1px 0 #1B2A4A; }
.lb-mk.yes { background: #fff; color: #1B2A4A; }
.lb-mk.no { background: #F2593A; color: #fff; }
.lb-lnk { background: none; border: none; padding: 0; font-size: 13px; color: #6B6A7A; text-decoration: underline; cursor: pointer; }
.lb-key { margin-top: 8px; font-size: 15px; background: #FFF6EC; border: 2px dashed #8EA0C8; color: #1B2A4A; padding: 8px 12px; text-align: left; }
.lb-fb { margin-top: 22px; border: 3px solid #1B2A4A; border-radius: 14px; box-shadow: 4px 4px 0 #1B2A4A; background: #fff; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; position: relative; overflow: hidden; color: #1B2A4A; }
.lb-fb.ok { background: #FFE9E1; }
.lb-fb.bad { background: #fff; }
.lb-fb.zero { background: #fff; }
.lb-big { display: inline-flex; align-items: center; gap: 8px; font-family: 'Fraunces', Georgia, serif; font-size: 30px; font-weight: 800; animation: lb-pop .5s; }
.lb-msg { font-size: 19px; font-weight: 700; }
.lb-fsub { font-size: 14px; margin-top: 2px; }
.lb-cf { position: absolute; bottom: 8px; animation: lb-rise 1.1s ease-out forwards; opacity: 0; }
.lb-end { display: flex; justify-content: flex-end; margin-top: 14px; }
.lb-go { background: #F2593A; color: #fff; border: 3px solid #1B2A4A; box-shadow: 0 4px 0 #1B2A4A; border-radius: 12px; height: 50px; padding: 0 28px; font-size: 17px; font-weight: 800; cursor: pointer; }
.lb-go:hover:not(:disabled) { background: #E44C2D; }
.lb-go:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 #1B2A4A; }
.lb-go:disabled { background: #D9C9C1; box-shadow: 0 4px 0 #8A7A72; cursor: not-allowed; }
.lb-ghost { background: none; border: 2px solid #EBD8CE; color: #1B2A4A; border-radius: 14px; height: 50px; padding: 0 22px; font-size: 16px; font-weight: 600; cursor: pointer; }
.lb-ghost:hover { border-color: #1B2A4A; }
.lb-actions { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
.lb-res { padding: 34px 20px 44px; min-height: 540px; }
.lb-card2 { background: #fff; border: 3px solid #1B2A4A; box-shadow: 6px 6px 0 #1B2A4A; border-radius: 16px; max-width: 460px; margin: 0 auto; padding: 26px 24px 28px; text-align: center; }
.lb-eb { font-size: 13px; font-weight: 600; color: #7A5A4E; letter-spacing: .06em; text-transform: uppercase; }
.lb-card2 .lb-n { font-family: 'Fraunces', Georgia, serif; font-size: 84px; font-weight: 600; color: #1B2A4A; line-height: 1.05; margin: 6px 0 0; font-variant-numeric: tabular-nums; }
.lb-unit { font-size: 17px; color: #7A5A4E; }
.lb-stars { display: flex; justify-content: center; gap: 8px; margin: 10px 0; }
.lb-great { font-family: 'Fraunces', Georgia, serif; font-size: 28px; font-weight: 600; margin: 0 0 4px; }
.lb-sub2 { font-size: 14px; color: #7A5A4E; margin: 0 0 20px; }
.lb-sb { padding: 8px 6px 10px; }
.lb-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #F2593A; margin: 0; }
.lb-sti { font-family: 'Fraunces', Georgia, serif; font-size: 32px; font-weight: 600; margin: 4px 0 18px; color: #1B2A4A; }
.lb-sec { background: #fff; border-radius: 16px; padding: 4px 0 8px; margin-bottom: 2px; }
.lb-sec h3 { font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #7A5A4E; margin: 0 0 10px; }
.lb-row { display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: center; font-size: 14px; }
.lb-row label { display: flex; align-items: center; gap: 8px; font-weight: 500; }
.lb-row select { height: 36px; font-size: 14px; border: 1px solid #DCC9BF; border-radius: 8px; padding: 0 8px; background: #FBF4F1; color: #1B2A4A; }
.lb-note { font-size: 13px; color: #7A5A4E; margin: 10px 0 0; line-height: 1.5; }
.lb-lv { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin: 6px 0 6px; }
.lb-lvc { border: 3px solid #1B2A4A; background: #fff; border-radius: 12px; box-shadow: 0 4px 0 #1B2A4A; padding: 26px 6px 20px; text-align: center; cursor: pointer; color: #1B2A4A; }
.lb-lvc:hover:not(:disabled) { background: #FFF1EC; }
.lb-lvc.sel { background: #FFE9E1; border-color: #F2593A; box-shadow: 0 4px 0 #F2593A; }
.lb-lvc:disabled { opacity: .5; cursor: not-allowed; }
.lb-lvc .lb-a { font-size: 14px; font-weight: 700; margin-top: 8px; }
.lb-lvc .lb-n { font-family: 'Fraunces', Georgia, serif; font-size: 60px; font-weight: 800; line-height: 1; }
.lb-lvc .lb-u { font-size: 12px; color: #7A5A4E; }
.lb-lvc .lb-s { font-size: 11px; color: #6B7A99; margin-top: 4px; }
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
  .lb-in, .lb-cw, .lb-dc, .lb-big, .lb-o.wrong, .lb-cf, .lb-app.lb-shake .lb-grid { animation: none; transition: none; }
}
@media (max-width: 640px) {
  .lb-lv { gap: 6px; }
  .lb-q { font-size: 23px; }
}
`;
