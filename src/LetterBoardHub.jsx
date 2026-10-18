import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { HUB_SETS } from "./letterBoardSets";
import { hasStory, openLetterBoard } from "./letterBoardData";

// Letter Board page (inside the Library nav chrome): a fiesta hub. A picture of parols and banderitas sits at the top of
// the page (public/curriculum/letter-board/hub-bg.jpg), then the title tiles, then one ticket per topic. Picking a ticket opens a ticket-shaped setup (how hard, what the tiles are worth,
// the letter order) with a tear-off stub that sums up the game and holds the start button.
// Topics are built in; teachers ask for new ones through Custom Lessons.

const CFG_KEY = "sentenco-letter-board-cfg";
const DEFAULT_CFG = { lvl: 3, mix: true, c: 10, b: 30, x: 30 };
const PRESETS = [
  { key: "small", name: "Small", c: 5, b: 15, x: 15 },
  { key: "standard", name: "Standard", c: 10, b: 30, x: 30 },
  { key: "big", name: "Big", c: 20, b: 60, x: 60 },
];
const LEVELS = [
  { key: 1, name: "Easy", n: 9, bar: [9, 0, 0], sub: "9 easy" },
  { key: 2, name: "Easy and average", n: 15, bar: [9, 6, 0], sub: "9 easy, 6 average" },
  { key: 3, name: "All levels", n: 20, bar: [9, 6, 5], sub: "9 easy, 6 average, 5 hard" },
];
const TITLE_WORDS = "LETTER BOARD".split(" ");

function loadCfg() {
  try {
    const raw = JSON.parse(localStorage.getItem(CFG_KEY) || "null");
    if (raw && typeof raw === "object") return { ...DEFAULT_CFG, ...raw };
  } catch { /* fall through */ }
  return DEFAULT_CFG;
}

function presetOf(cfg) {
  return PRESETS.find((p) => p.c === cfg.c && p.b === cfg.b && p.x === cfg.x) || null;
}

const pad2 = (n) => (n < 10 ? "0" : "") + n;

// Layout adjuster. Open the hub with ?tune=1 to move the title with sliders; the numbers can be copied and sent
// back to become the new defaults. Each layout (full screen and phone) keeps its own set.
const TUNE_KEY = "sentenco-letter-board-tune";
const TUNE_DEFAULTS = {
  wide: { top: 10.5, size: 1, rowgap: 0.2, under: 16, after: 22, minh: 23.5 },
  half: { top: 14.5, size: 1, rowgap: 0.2, under: 16, after: 22, minh: 0 },
  phone: { top: 33, size: 1, rowgap: 0.2, under: 16, after: 22, minh: 0 },
};
const TUNE_MODES = {
  wide: "Full screen (761 px and wider)",
  half: "Half screen (601 to 760 px wide)",
  phone: "Phone (600 px and narrower)",
};
const TUNE_FIELDS = [
  { key: "top", label: "Title distance from the top", hint: "Percent of the page width", min: 0, max: 40, step: 0.5 },
  { key: "size", label: "Tile size", hint: "1 is the current size", min: 0.5, max: 1.8, step: 0.05 },
  { key: "rowgap", label: "Space between LETTER and BOARD", hint: "Fraction of a tile", min: 0, max: 0.8, step: 0.02 },
  { key: "under", label: "Space under the title", hint: "Pixels", min: 0, max: 80, step: 1 },
  { key: "after", label: "Space under the description", hint: "Pixels", min: 0, max: 160, step: 2 },
  { key: "minh", label: "Where the tickets start at the earliest", hint: "Percent of the page width", min: 0, max: 45, step: 0.5 },
];

function loadTune() {
  try {
    const raw = JSON.parse(localStorage.getItem(TUNE_KEY) || "null");
    if (raw && typeof raw === "object") return { wide: { ...TUNE_DEFAULTS.wide, ...raw.wide }, half: { ...TUNE_DEFAULTS.half, ...raw.half }, phone: { ...TUNE_DEFAULTS.phone, ...raw.phone } };
  } catch { /* fall through */ }
  return { wide: { ...TUNE_DEFAULTS.wide }, half: { ...TUNE_DEFAULTS.half }, phone: { ...TUNE_DEFAULTS.phone } };
}

function useMode() {
  const get = () => {
    if (typeof window === "undefined") return "wide";
    if (window.matchMedia("(min-width: 761px)").matches) return "wide";
    return window.matchMedia("(min-width: 601px)").matches ? "half" : "phone";
  };
  const [mode, setMode] = useState(get);
  useEffect(() => {
    const qs = [window.matchMedia("(min-width: 761px)"), window.matchMedia("(min-width: 601px)")];
    const on = () => setMode(get());
    qs.forEach((m) => m.addEventListener("change", on));
    return () => qs.forEach((m) => m.removeEventListener("change", on));
  }, []);
  return mode;
}

function tuneText(t) {
  const line = (name, v) => `${name}: top ${v.top}, tile size ${v.size}, row gap ${v.rowgap}, under title ${v.under}, under description ${v.after}, tickets start ${v.minh}`;
  return ["wide", "half", "phone"].map((m) => line(TUNE_MODES[m], t[m])).join("\n");
}

function Tuner({ tune, mode, onChange, onReset }) {
  const [open, setOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  const v = tune[mode];
  const text = tuneText(tune);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* the text box below can be copied by hand */ }
  };
  return (
    <div className="lbh3-tuner" role="region" aria-label="Layout adjuster">
      <div className="lbh3-tuner-head">
        <b>Adjust the top</b>
        <button type="button" onClick={() => setOpen(!open)}>{open ? "Hide" : "Show"}</button>
      </div>
      {open && (
        <>
          <p className="lbh3-tuner-mode">Now adjusting: <b>{TUNE_MODES[mode]}</b>. Resize the window to adjust the others.</p>
          {TUNE_FIELDS.map((f) => (
            <label key={f.key} className="lbh3-tuner-row">
              <span>{f.label}<small>{f.hint}</small></span>
              <input type="range" min={f.min} max={f.max} step={f.step} value={v[f.key]} onChange={(e) => onChange(mode, f.key, Number(e.target.value))} />
              <output>{v[f.key]}</output>
            </label>
          ))}
          <div className="lbh3-tuner-btns">
            <button type="button" onClick={copy}>{copied ? "Copied" : "Copy numbers"}</button>
            <button type="button" onClick={() => onReset(mode)}>Reset this layout</button>
          </div>
          <textarea readOnly value={text} rows={5} onFocus={(e) => e.target.select()} aria-label="Numbers to send" />
        </>
      )}
    </div>
  );
}

function Tiles() {
  let k = 0;
  return (
    <h1 className="lbh3-tiles" aria-label="Letter Board">
      {TITLE_WORDS.map((w) => (
        <span key={w} className="lbh3-tw">
          {w.split("").map((c) => {
            const i = k++;
            return <span key={i} className={`lbh3-tl k${i % 6}`} style={{ "--i": i }}>{c}</span>;
          })}
        </span>
      ))}
    </h1>
  );
}

function Difficulty({ level }) {
  return (
    <div>
      <div className="lbh3-db">
        <i className="e" style={{ flex: level.bar[0] }} />
        {level.bar[1] > 0 && <i className="a" style={{ flex: level.bar[1] }} />}
        {level.bar[2] > 0 && <i className="h" style={{ flex: level.bar[2] }} />}
      </div>
    </div>
  );
}

function Cover({ set, className = "" }) {
  const img = set.story && set.story.image;
  return (
    <div className={`lbh3-thumb${set.coverFit === "contain" ? " soft" : ""} ${className}`}>
      {img ? <img src={img} alt="" loading="lazy" /> : <span className="lbh3-initial">{set.title[0]}</span>}
    </div>
  );
}

export default function LetterBoardHub() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tuning = searchParams.get("tune") === "1";
  const mode = useMode();
  const [tune, setTune] = useState(loadTune);
  const [cfg, setCfg] = useState(loadCfg);
  const [openId, setOpenId] = useState(null);
  const closeRef = useRef(null);
  const lastFocus = useRef(null);
  const set = HUB_SETS.find((s) => s.id === openId) || null;
  const level = LEVELS.find((l) => l.key === cfg.lvl) || LEVELS[2];
  const preset = presetOf(cfg);
  const all = LEVELS[2];

  const update = (patch) => {
    const next = { ...cfg, ...patch };
    setCfg(next);
    try { localStorage.setItem(CFG_KEY, JSON.stringify(next)); } catch { /* optional */ }
  };

  const changeTune = (mode, key, value) => {
    const next = { ...tune, [mode]: { ...tune[mode], [key]: value } };
    setTune(next);
    try { localStorage.setItem(TUNE_KEY, JSON.stringify(next)); } catch { /* optional */ }
  };
  const resetTune = (mode) => {
    const next = { ...tune, [mode]: { ...TUNE_DEFAULTS[mode] } };
    setTune(next);
    try { localStorage.setItem(TUNE_KEY, JSON.stringify(next)); } catch { /* optional */ }
  };
  const tv = tune[mode];
  const tuneVars = tuning ? { "--ttop": tv.top, "--tsize": tv.size, "--rowgap": tv.rowgap, "--under": tv.under, "--after": tv.after, "--minh": tv.minh } : undefined;

  const openTopic = (id) => {
    lastFocus.current = document.activeElement;
    setOpenId(id);
  };
  const close = () => setOpenId(null);

  useEffect(() => {
    if (!set) {
      if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
      return undefined;
    }
    if (closeRef.current) closeRef.current.focus();
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [set]);

  const story = set ? hasStory(set.story) : false;
  const inOrder = !cfg.mix || cfg.lvl === 1;

  return (
    <div className="lbh3-shell" style={tuneVars}>
      <style>{CSS}</style>
      {tuning && <Tuner tune={tune} mode={mode} onChange={changeTune} onReset={resetTune} />}
      <div className="lbh3-page">
        <div className="lbh3-hero">
          <div className="lbh3-title"><Tiles /></div>
          <p className="lbh3-lead">Flip the hidden tiles, answer the question behind each one and collect coins. Pick a topic to start.</p>
        </div>

        <div className="lbh3-sec">
          <h2>Pick a ticket</h2>
          <span>{HUB_SETS.length} {HUB_SETS.length === 1 ? "topic" : "topics"} ready</span>
        </div>

        <div className="lbh3-grid">
          {HUB_SETS.map((s, i) => {
            const st = hasStory(s.story);
            return (
              <div key={s.id} className="lbh3-tk">
                <button type="button" className="lbh3-card" aria-haspopup="dialog" onClick={() => openTopic(s.id)}>
                  {st && <span className="lbh3-badge">Story</span>}
                  <span className="lbh3-no lbh3-corner">No. {pad2(i + 1)}</span>
                  <Cover set={s} />
                  <span className="lbh3-body">
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                    <span className="lbh3-chips">
                      {st && <span className="lbh3-chip">Story first</span>}
                      <span className="lbh3-chip n">20 questions</span>
                    </span>
                    <span>
                      <Difficulty level={all} />
                      <span className="lbh3-dcap">{all.sub}</span>
                    </span>
                    <span className="lbh3-foot">
                      <span className="lbh3-dcap lbh3-nm">Choose how hard inside</span>
                      <span className="lbh3-tg">Play &rarr;</span>
                    </span>
                  </span>
                </button>
              </div>
            );
          })}
          <div className="lbh3-tk">
            <button
              type="button"
              className="lbh3-card lbh3-req"
              onClick={() => navigate("/library?cat=Customized%20Lessons&clForm=1&clNote=" + encodeURIComponent("I would like this as a Letter Board topic (20 questions)."))}
            >
              <span className="lbh3-pl">+</span>
              <b>Request a topic</b>
              <span>Tell us what your student likes and we build it.</span>
            </button>
          </div>
        </div>
      </div>

      {set && (
        <div className="lbh3-veil" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div className="lbh3-tpop" role="dialog" aria-modal="true" aria-labelledby="lbh3-dlg">
            <div className="lbh3-main">
              <div className="lbh3-head">
                <Cover set={set} className="lbh3-th" />
                <div>
                  <h2 id="lbh3-dlg">{set.title}</h2>
                  <p>{set.blurb}</p>
                </div>
              </div>
              <div className="lbh3-inner">
                <section className="lbh3-step">
                  <h3><i>1</i>How hard?</h3>
                  <div className="lbh3-levels">
                    {LEVELS.map((l) => (
                      <button type="button" key={l.key} className={`lbh3-lv${cfg.lvl === l.key ? " is-on" : ""}`} aria-pressed={cfg.lvl === l.key} onClick={() => update({ lvl: l.key })}>
                        <div className="lbh3-n">{l.n}<small>tiles</small></div>
                        <b>{l.name}</b>
                        <Difficulty level={l} />
                      </button>
                    ))}
                  </div>
                </section>
                <section className="lbh3-step">
                  <h3><i>2</i>What are the tiles worth?</h3>
                  <div className="lbh3-presets" role="group" aria-label="Reward size">
                    {PRESETS.map((p) => (
                      <button type="button" key={p.key} className={preset && preset.key === p.key ? "is-on" : ""} aria-pressed={!!preset && preset.key === p.key} onClick={() => update({ c: p.c, b: p.b, x: p.x })}>{p.name}</button>
                    ))}
                  </div>
                </section>
                <section className="lbh3-step">
                  <h3><i>3</i>Letters</h3>
                  <div className="lbh3-mix" role="group" aria-label="Letter order">
                    <button type="button" className={inOrder ? "is-on" : ""} onClick={() => update({ mix: false })}>In order</button>
                    <button type="button" className={!inOrder ? "is-on" : ""} disabled={cfg.lvl === 1} onClick={() => update({ mix: true })}>Mixed</button>
                  </div>
                </section>
              </div>
            </div>
            <aside className="lbh3-stub">
              <div>
                <span className="lbh3-lab">Your game</span>
                <p className="lbh3-tt">{set.title}</p>
              </div>
              <dl>
                <div><dt>Ticket</dt><dd>No. {pad2(HUB_SETS.indexOf(set) + 1)}</dd></div>
                <div><dt>Tiles</dt><dd>{level.n}</dd></div>
                <div><dt>Worth</dt><dd>{preset ? `${preset.name} (${cfg.c} / ${cfg.b} / ${cfg.x})` : `Custom (${cfg.c} / ${cfg.b} / ${cfg.x})`}</dd></div>
                <div><dt>Letters</dt><dd>{inOrder ? "In order" : "Mixed"}</dd></div>
                <div><dt>Starts with</dt><dd>{story ? "The story" : "The board"}</dd></div>
              </dl>
              <button type="button" className="lbh3-go" onClick={() => openLetterBoard(set.id, cfg.lvl)}>{story ? "Read the story" : "Start game"}</button>
            </aside>
            <button type="button" className="lbh3-x" ref={closeRef} onClick={close} aria-label="Close">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Fraunces:opsz,wght@9..144,800&family=Quicksand:wght@500;600;700&display=swap');
.lbh3-shell { --ink: #2B2A4A; --muted: #7C6F66; --coral: #FF6B4A; --coral-deep: #E0502F; --coral-pale: #FDECE5; --navy: #1B2A4A; --gold: #D9A62E; --hair: rgba(43,42,74,0.1); --tear: #E8C9B4; --y: #FFC93C; --g: #2EC4B6; --b: #3E7CB1; --p: #FF8FAB;
  --w: min(100vw, 1400px); min-height: 100%; background: url('/curriculum/letter-board/hub-bg.jpg') center top / min(100%, 1400px) auto no-repeat, #FCF3DC; color: var(--ink); font-family: 'Quicksand', sans-serif; position: relative; }
.lbh3-shell * { box-sizing: border-box; }
.lbh3-page { max-width: 1040px; margin: 0 auto; padding: 0 24px 100px; }

.lbh3-hero { padding-top: calc(var(--w) * var(--ttop, 33) / 100); min-height: calc(var(--w) * var(--minh, 0) / 100); display: flex; flex-direction: column; justify-content: center; }
.lbh3-title { display: flex; justify-content: center; margin: 0 0 calc(var(--under, 16) * 1px); }
.lbh3-tiles { --t: calc(clamp(40px, 5.6vw, 72px) * var(--tsize, 1)); display: flex; flex-direction: column; align-items: center; gap: calc(var(--t) * var(--rowgap, 0.2)); margin: 0; perspective: 700px; }
.lbh3-tw { display: flex; gap: calc(var(--t) * 0.14); }
.lbh3-tl { width: var(--t); height: var(--t); border-radius: calc(var(--t) * 0.26); display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', Georgia, serif; font-weight: 800; font-size: calc(var(--t) * 0.58); color: #fff; box-shadow: 0 5px 0 rgba(27,42,74,0.25); animation: lbh3-flip 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both; animation-delay: calc(var(--i) * 55ms); transition: transform 0.2s; }
.lbh3-tl:hover { transform: translateY(-4px) rotate(-3deg); }
@keyframes lbh3-flip { from { transform: rotateX(-95deg); opacity: 0; } to { transform: none; opacity: 1; } }
.lbh3-tl.k0 { background: var(--coral); } .lbh3-tl.k1 { background: var(--y); color: var(--navy); } .lbh3-tl.k2 { background: var(--g); }
.lbh3-tl.k3 { background: var(--b); } .lbh3-tl.k4 { background: var(--p); } .lbh3-tl.k5 { background: var(--navy); }
.lbh3-lead { margin: 0 auto calc(var(--after, 22) * 1px); text-align: center; max-width: 54ch; font-size: 16px; font-weight: 600; color: #6B5A4A; line-height: 1.5; }
.lbh3-sec { display: flex; align-items: baseline; justify-content: space-between; margin: 0 2px 14px; }
.lbh3-sec h2 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 19px; margin: 0; }
.lbh3-sec span { font-size: 13px; font-weight: 700; color: #8A6F5A; }

.lbh3-thumb { position: relative; overflow: hidden; background: var(--coral-pale); display: flex; align-items: center; justify-content: center; }
.lbh3-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.lbh3-thumb.soft { background: linear-gradient(160deg, #FFF6EC, #FDDCCD); }
.lbh3-thumb.soft img { object-fit: contain; width: 86%; height: 92%; mix-blend-mode: multiply; }
.lbh3-initial { font-family: 'Fraunces', Georgia, serif; font-weight: 800; font-size: 64px; color: var(--coral-deep); }
.lbh3-chips { display: flex; gap: 6px; flex-wrap: wrap; }
.lbh3-chip { font-size: 11.5px; font-weight: 800; border-radius: 999px; padding: 4px 10px; background: #FFE9A8; color: #6B4E00; white-space: nowrap; }
.lbh3-chip.n { background: #EEF1F8; color: var(--navy); }
.lbh3-db { display: flex; height: 7px; border-radius: 99px; overflow: hidden; gap: 2px; background: #E7EAF2; }
.lbh3-db i { display: block; height: 100%; }
.lbh3-db .e { background: #7BC79A; } .lbh3-db .a { background: var(--gold); } .lbh3-db .h { background: var(--navy); }
.lbh3-dcap { display: block; font-size: 11.5px; font-weight: 700; color: #8A7B70; margin-top: 5px; }
.lbh3-no { font: 800 12px 'Quicksand', sans-serif; letter-spacing: 0.05em; background: var(--navy); color: #fff; border-radius: 999px; padding: 5px 11px; box-shadow: 0 0 0 3px #fff; }
.lbh3-tg { background: var(--coral); color: #fff; border-radius: 999px; font-weight: 800; font-size: 13px; padding: 8px 14px; box-shadow: 0 4px 0 #C9432A; }

.lbh3-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; }
.lbh3-tk { position: relative; display: flex; filter: drop-shadow(0 14px 12px rgba(27,42,74,0.2)); transition: transform 0.18s; }
.lbh3-tk:hover { transform: translateY(-4px) rotate(-0.5deg); }
.lbh3-card { position: relative; display: flex; flex-direction: column; text-align: left; border: 0; padding: 0; background: #fff; overflow: hidden; width: 100%; border-radius: 18px; font-family: inherit; color: inherit; cursor: pointer;
  -webkit-mask: radial-gradient(circle 12px at 0 63%, #0000 97%, #000) left / 51% 100% no-repeat, radial-gradient(circle 12px at 100% 63%, #0000 97%, #000) right / 51% 100% no-repeat;
  mask: radial-gradient(circle 12px at 0 63%, #0000 97%, #000) left / 51% 100% no-repeat, radial-gradient(circle 12px at 100% 63%, #0000 97%, #000) right / 51% 100% no-repeat; }
.lbh3-card::after { content: ''; position: absolute; inset: 0; background: linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.6) 50%, transparent 58%); transform: translateX(-130%); transition: transform 0.7s; pointer-events: none; }
.lbh3-card:hover::after { transform: translateX(130%); }
.lbh3-card:focus-visible, .lbh3-lv:focus-visible, .lbh3-go:focus-visible, .lbh3-x:focus-visible, .lbh3-presets button:focus-visible, .lbh3-mix button:focus-visible { outline: 3px solid var(--navy); outline-offset: 2px; }
.lbh3-card .lbh3-thumb { margin: 12px 12px 0; border-radius: 12px; aspect-ratio: 4 / 3; }
.lbh3-corner { position: absolute; top: 22px; right: 22px; z-index: 2; }
.lbh3-badge { position: absolute; top: 22px; left: 22px; z-index: 2; font: 800 10.5px 'Quicksand', sans-serif; letter-spacing: 0.07em; text-transform: uppercase; background: #FFF4D6; color: #6B4E00; border-radius: 999px; padding: 4px 10px; }
.lbh3-body { padding: 12px 16px 16px; display: flex; flex-direction: column; gap: 7px; flex: 1; border-top: 2.5px dashed var(--tear); margin-top: 12px; }
.lbh3-body h3 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 20px; line-height: 1.15; margin: 0; }
.lbh3-body p { margin: 0; font-size: 13.5px; font-weight: 600; color: var(--muted); line-height: 1.45; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.lbh3-foot { margin-top: auto; padding-top: 6px; display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.lbh3-nm { margin: 0; }
.lbh3-req { background: #FFF9EC; box-shadow: inset 0 0 0 2.5px #F2A58F; align-items: center; justify-content: center; text-align: center; padding: 22px 18px; gap: 8px; min-height: 240px; }
.lbh3-req:hover { background: #FFEFD0; }
.lbh3-pl { width: 46px; height: 46px; border-radius: 50%; background: var(--coral-pale); color: var(--coral-deep); display: flex; align-items: center; justify-content: center; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 28px; }
.lbh3-req b { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 18px; color: var(--coral-deep); }
.lbh3-req > span:last-child { font-size: 13px; font-weight: 600; color: var(--muted); max-width: 24ch; line-height: 1.4; }

.lbh3-veil { position: fixed; inset: 0; background: rgba(27,42,74,0.5); display: flex; align-items: flex-start; justify-content: center; padding: 26px 16px; overflow: auto; z-index: 60; }
.lbh3-tpop { position: relative; width: 100%; max-width: 900px; display: grid; grid-template-columns: minmax(0, 1fr) 240px; background: #fff; border-radius: 26px; margin: auto 0;
  -webkit-mask: radial-gradient(circle 14px at calc(100% - 240px) 0, #0000 97%, #000), radial-gradient(circle 14px at calc(100% - 240px) 100%, #0000 97%, #000); -webkit-mask-composite: source-in;
  mask: radial-gradient(circle 14px at calc(100% - 240px) 0, #0000 97%, #000), radial-gradient(circle 14px at calc(100% - 240px) 100%, #0000 97%, #000); mask-composite: intersect; }
.lbh3-main { min-width: 0; }
.lbh3-head { display: flex; gap: 16px; align-items: center; padding: 16px 18px; background: linear-gradient(160deg, #FFF6EC, #FDDCCD); border-radius: 26px 0 0 0; }
.lbh3-th { width: 104px; aspect-ratio: 4 / 3; border-radius: 14px; flex: none; }
.lbh3-th .lbh3-initial { font-size: 36px; }
.lbh3-head h2 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 24px; margin: 0; }
.lbh3-head p { margin: 2px 0 0; font-size: 13.5px; font-weight: 600; color: var(--muted); }
.lbh3-inner { padding: 2px 22px 24px; }
.lbh3-step { margin-top: 18px; }
.lbh3-step h3 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15.5px; margin: 0 0 9px; display: flex; align-items: center; gap: 9px; }
.lbh3-step h3 i { width: 24px; height: 24px; border-radius: 50%; background: var(--navy); color: #fff; font-style: normal; font-size: 13px; display: flex; align-items: center; justify-content: center; }
.lbh3-levels { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.lbh3-lv { border: 0; background: #F7F8FC; border-radius: 20px; padding: 12px 14px 11px; text-align: left; font-family: inherit; color: inherit; cursor: pointer; box-shadow: inset 0 0 0 2px transparent; }
.lbh3-lv.is-on { background: var(--coral-pale); box-shadow: inset 0 0 0 2.5px var(--coral); }
.lbh3-n { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 28px; line-height: 1; }
.lbh3-n small { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 12.5px; color: var(--muted); margin-left: 4px; }
.lbh3-lv b { display: block; font-size: 13.5px; margin: 4px 0 7px; }
.lbh3-presets, .lbh3-mix { display: inline-flex; gap: 4px; background: #F1F3F8; border-radius: 999px; padding: 4px; }
.lbh3-presets button, .lbh3-mix button { border: 0; background: none; border-radius: 999px; padding: 7px 16px; font-family: inherit; font-size: 13px; font-weight: 700; color: #6B6B8C; cursor: pointer; }
.lbh3-presets button.is-on, .lbh3-mix button.is-on { background: #fff; color: var(--ink); box-shadow: 0 1px 4px rgba(27,42,74,0.14); }
.lbh3-mix button:disabled { opacity: 0.45; cursor: default; }
.lbh3-stub { border-left: 3px dashed var(--tear); background: #FFF9EC; padding: 22px 18px; display: flex; flex-direction: column; gap: 12px; border-radius: 0 26px 26px 0; }
.lbh3-lab { font-size: 10.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #8A7B70; }
.lbh3-tt { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 20px; line-height: 1.15; margin: 0; }
.lbh3-stub dl { margin: 0; display: grid; gap: 9px; }
.lbh3-stub dl div { display: flex; justify-content: space-between; gap: 8px; font-size: 13px; font-weight: 700; border-bottom: 1.5px dotted var(--tear); padding-bottom: 7px; }
.lbh3-stub dt { color: #8A7B70; } .lbh3-stub dd { margin: 0; color: var(--ink); text-align: right; }
.lbh3-go { border: none; border-radius: 999px; padding: 13px 28px; font-family: inherit; font-size: 15px; font-weight: 700; background: var(--coral); color: #fff; cursor: pointer; box-shadow: 0 5px 0 #C9432A, 0 14px 22px -12px rgba(255,107,74,0.8); margin-top: auto; width: 100%; }
.lbh3-go:active { transform: translateY(2px); box-shadow: 0 3px 0 #C9432A; }
.lbh3-x { position: absolute; top: 12px; right: 252px; width: 34px; height: 34px; border-radius: 50%; border: 0; background: #fff; box-shadow: 0 2px 8px rgba(27,42,74,0.2); font-size: 18px; font-weight: 800; color: var(--navy); cursor: pointer; z-index: 2; }

/* Half screen: the title fits between the parols of the portrait picture, so it sits higher. */
@media (min-width: 601px) {
  .lbh3-hero { padding-top: calc(var(--w) * var(--ttop, 14.5) / 100); }
  .lbh3-lead { max-width: min(54ch, calc(var(--w) * 0.56)); }
}
/* Full-screen widths use the landscape picture: parols in the far corners, wide clear middle. */
@media (min-width: 761px) {
  .lbh3-shell { --w: min(100vw, 1800px); background-image: url('/curriculum/letter-board/hub-bg-wide.jpg'); background-size: min(100%, 1800px) auto; background-color: #FDF3DD; }
  .lbh3-hero { padding-top: calc(var(--w) * var(--ttop, 10.5) / 100); min-height: calc(var(--w) * var(--minh, 23.5) / 100); }
  .lbh3-lead { max-width: min(54ch, calc(var(--w) * 0.56)); }
}
@media (max-width: 820px) {
  .lbh3-page { padding: 0 14px 80px; }
}
@media (max-width: 720px) {
  .lbh3-levels { grid-template-columns: 1fr; }
  .lbh3-tpop { grid-template-columns: 1fr; -webkit-mask: none; mask: none; }
  .lbh3-head { border-radius: 26px 26px 0 0; }
  .lbh3-stub { border-left: 0; border-top: 3px dashed var(--tear); border-radius: 0 0 26px 26px; }
  .lbh3-x { right: 12px; }
}
@media (max-width: 600px) {
  .lbh3-tl { box-shadow: 0 3px 0 rgba(27,42,74,0.25); }
}

.lbh3-tuner { position: fixed; right: 14px; bottom: 14px; z-index: 80; width: min(330px, calc(100vw - 28px)); max-height: 78vh; overflow: auto; background: #fff; border-radius: 18px; box-shadow: 0 18px 40px -12px rgba(27,42,74,0.55), 0 0 0 2px var(--navy); padding: 12px 14px 14px; font-size: 13px; }
.lbh3-tuner-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.lbh3-tuner-head b { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 16px; }
.lbh3-tuner button { border: 0; border-radius: 999px; background: var(--navy); color: #fff; font-family: inherit; font-weight: 700; font-size: 12px; padding: 6px 12px; cursor: pointer; }
.lbh3-tuner-mode { margin: 8px 0 6px; color: var(--muted); font-weight: 600; line-height: 1.4; }
.lbh3-tuner-row { display: grid; grid-template-columns: 1fr 52px; gap: 2px 8px; align-items: center; margin: 9px 0 0; font-weight: 700; }
.lbh3-tuner-row span { grid-column: 1 / -1; display: flex; flex-direction: column; }
.lbh3-tuner-row small { font-weight: 600; color: #8A7B70; font-size: 11px; }
.lbh3-tuner-row input { width: 100%; accent-color: var(--coral); }
.lbh3-tuner-row output { text-align: right; font-variant-numeric: tabular-nums; }
.lbh3-tuner-btns { display: flex; gap: 8px; margin: 12px 0 8px; }
.lbh3-tuner-btns button:last-child { background: #EEF1F8; color: var(--navy); }
.lbh3-tuner textarea { width: 100%; font-family: ui-monospace, Menlo, monospace; font-size: 11px; border: 1.5px solid #DCE2F0; border-radius: 10px; padding: 8px; color: var(--ink); resize: none; background: #F7F8FC; }
@media (prefers-reduced-motion: reduce) {
  .lbh3-tl { animation: none; }
  .lbh3-tk, .lbh3-tl, .lbh3-card::after { transition: none; }
}
`;
