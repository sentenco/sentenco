import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LETTER_BOARD_SETS } from "./letterBoardSets";
import { hasStory, openLetterBoard } from "./letterBoardData";

// Letter Board page (inside the Library nav chrome): pick a topic tab, then how hard, what the tiles
// are worth, and the letter order, and start. Topics are built in; teachers can ask for new ones
// through Custom Lessons.

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
  { key: 3, name: "All levels", n: 20, bar: [9, 6, 5], sub: "9 easy, 6 average, 5 difficult" },
];

function loadCfg() {
  try {
    const raw = JSON.parse(localStorage.getItem(CFG_KEY) || "null");
    if (raw && typeof raw === "object") return { ...DEFAULT_CFG, ...raw };
  } catch (e) { /* fall through */ }
  return DEFAULT_CFG;
}

function presetOf(cfg) {
  return PRESETS.find((p) => p.c === cfg.c && p.b === cfg.b && p.x === cfg.x) || null;
}

function PlusIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
}

export default function LetterBoardHub() {
  const navigate = useNavigate();
  const [cfg, setCfg] = useState(loadCfg);
  const [topic, setTopic] = useState(0);
  const set = LETTER_BOARD_SETS[topic] || LETTER_BOARD_SETS[0];
  const story = hasStory(set.story);
  const level = LEVELS.find((l) => l.key === cfg.lvl) || LEVELS[2];
  const preset = presetOf(cfg);

  const update = (patch) => {
    const next = { ...cfg, ...patch };
    setCfg(next);
    try { localStorage.setItem(CFG_KEY, JSON.stringify(next)); } catch (e) { /* optional */ }
  };

  const letterTiles = useMemo(() => (
    <>
      {"LETTER".split("").map((c, i) => <span key={`l${i}`} className="lbh2-tl is-navy">{c}</span>)}
      <span className="lbh2-tl is-gap" />
      {"BOARD".split("").map((c, i) => <span key={`b${i}`} className="lbh2-tl is-coral">{c}</span>)}
    </>
  ), []);

  return (
    <div className="lbh2-shell">
      <style>{CSS}</style>
      <div className="lbh2-page">
        <div className="lbh2-title">
          <h1 className="lbh2-tiles" aria-label="Letter Board">{letterTiles}</h1>
          <p>Pick a topic, choose how hard, and play.</p>
        </div>

        <div className="lbh2-tabs" role="tablist" aria-label="Topics">
          {LETTER_BOARD_SETS.map((s, i) => (
            <button type="button" role="tab" aria-selected={topic === i} key={s.id} className={`lbh2-tab${topic === i ? " is-on" : ""}`} onClick={() => setTopic(i)}>
              <span className="lbh2-dot">{s.title[0].toUpperCase()}</span>
              {s.title}
              {s.story && <small>Story</small>}
            </button>
          ))}
          <button type="button" className="lbh2-tab lbh2-request" onClick={() => navigate("/library?cat=Customized%20Lessons&clForm=1&clNote=" + encodeURIComponent("I would like this as a Letter Board topic (20 questions)."))}>
            <span className="lbh2-dot"><PlusIcon /></span>
            Request a topic
          </button>
        </div>

        <div className="lbh2-card">
          <div className="lbh2-ph">
            <div>
              <h2>{set.title}</h2>
              <p>{set.blurb}</p>
            </div>
            <span className={`lbh2-pill${story ? " is-story" : ""}`}>{story ? "Story + 20 questions" : "20 questions"}</span>
          </div>

          <section className="lbh2-step">
            <h3><i>1</i>How hard?</h3>
            <div className="lbh2-levels">
              {LEVELS.map((l) => (
                <button type="button" key={l.key} className={`lbh2-lv${cfg.lvl === l.key ? " is-on" : ""}`} aria-pressed={cfg.lvl === l.key} onClick={() => update({ lvl: l.key })}>
                  <div className="lbh2-n">{l.n}<small>tiles</small></div>
                  <b>{l.name}</b>
                  <div className="lbh2-bar">
                    <i className="e" style={{ flex: l.bar[0] }} />
                    {l.bar[1] > 0 && <i className="a" style={{ flex: l.bar[1] }} />}
                    {l.bar[2] > 0 && <i className="h" style={{ flex: l.bar[2] }} />}
                  </div>
                  <small className="lbh2-d">{l.sub}</small>
                </button>
              ))}
            </div>
          </section>

          <section className="lbh2-step">
            <h3><i>2</i>What are the tiles worth?</h3>
            <div className="lbh2-presets" role="group" aria-label="Reward size">
              {PRESETS.map((p) => (
                <button type="button" key={p.key} className={preset && preset.key === p.key ? "is-on" : ""} aria-pressed={!!preset && preset.key === p.key} onClick={() => update({ c: p.c, b: p.b, x: p.x })}>{p.name}</button>
              ))}
            </div>
            <div className="lbh2-rewards">
              <div className="lbh2-rw is-c"><span className="lbh2-ic">+</span><b>+{cfg.c}</b><span>Coins</span><small>Right answer</small></div>
              <div className="lbh2-rw is-d"><span className="lbh2-ic">2x</span><b>+{cfg.c * 2}</b><span>Double</span><small>Right answer</small></div>
              <div className="lbh2-rw is-b"><span className="lbh2-ic">&#9733;</span><b>+{cfg.b}</b><span>Bonus</span><small>Right answer</small></div>
              <div className="lbh2-rw is-x"><span className="lbh2-ic">!</span><b>&plusmn;{cfg.x}</b><span>Bomb</span><small>Win or lose</small></div>
            </div>
          </section>

          <section className="lbh2-step">
            <h3><i>3</i>Letters</h3>
            <div className="lbh2-seg" role="group" aria-label="Letter order">
              <button type="button" className={!cfg.mix || cfg.lvl === 1 ? "is-on" : ""} onClick={() => update({ mix: false })}>In order</button>
              <button type="button" className={cfg.mix && cfg.lvl !== 1 ? "is-on" : ""} disabled={cfg.lvl === 1} onClick={() => update({ mix: true })}>Mixed</button>
            </div>
          </section>

          <div className="lbh2-start">
            <p><b>{set.title}</b> &middot; {level.n} tiles{story ? " · story first" : ""}</p>
            <button type="button" className="lbh2-go" onClick={() => openLetterBoard(set.id, cfg.lvl)}>{story ? "Read the story" : "Start game"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Fraunces:opsz,wght@9..144,800&family=Quicksand:wght@500;600;700&display=swap');
.lbh2-shell { --ink: #2B2A4A; --muted: #8B84A3; --coral: #FF6B4A; --coral-deep: #E0502F; --coral-pale: #FDECE5; --navy: #1B2A4A; --gold: #D9A62E; --hair: rgba(43,42,74,0.1);
  min-height: 100%; background: #F1F3F8; color: var(--ink); font-family: 'Quicksand', sans-serif; }
.lbh2-shell * { box-sizing: border-box; }
.lbh2-page { max-width: 980px; margin: 0 auto; padding: 24px 24px 100px; }
.lbh2-title { display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; margin-bottom: 18px; }
.lbh2-title p { margin: 0; font-size: 14.5px; font-weight: 600; color: var(--muted); }
.lbh2-tiles { display: flex; gap: 5px; flex-wrap: wrap; margin: 0; }
.lbh2-tl { width: 36px; height: 36px; border-radius: 9px; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', Georgia, serif; font-weight: 800; font-size: 21px; color: #fff; box-shadow: 0 3px 0 rgba(0,0,0,0.22); }
.lbh2-tl.is-navy { background: var(--navy); } .lbh2-tl.is-coral { background: var(--coral); } .lbh2-tl.is-gap { background: none; box-shadow: none; width: 10px; }
.lbh2-tabs { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; padding: 2px 2px 14px; }
.lbh2-tabs::-webkit-scrollbar { display: none; }
.lbh2-tab { flex-shrink: 0; border: none; background: #fff; border-radius: 999px; padding: 10px 18px 10px 12px; font-family: inherit; font-size: 14px; font-weight: 700; color: var(--muted); box-shadow: 0 0 0 1px var(--hair); display: flex; align-items: center; gap: 9px; cursor: pointer; transition: background 0.15s; }
.lbh2-tab:hover { color: var(--ink); }
.lbh2-tab.is-on { background: var(--navy); color: #fff; box-shadow: 0 6px 14px -8px rgba(27,42,74,0.7); }
.lbh2-dot { width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', Georgia, serif; font-weight: 800; font-size: 13px; color: #fff; background: var(--coral); }
.lbh2-dot svg { width: 13px; height: 13px; }
.lbh2-tab.is-on .lbh2-dot { background: #fff; color: var(--navy); }
.lbh2-tab small { font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; background: #FFF4D6; color: #7A5C0C; border-radius: 999px; padding: 2px 7px; }
.lbh2-tab.is-on small { background: rgba(255,255,255,0.2); color: #fff; }
.lbh2-request { background: none; color: var(--coral-deep); box-shadow: inset 0 0 0 1.5px #F5C7B8; margin-left: auto; }
.lbh2-request:hover { background: var(--coral-pale); color: var(--coral-deep); }
.lbh2-request .lbh2-dot { background: var(--coral-pale); color: var(--coral-deep); }
.lbh2-tab:focus-visible, .lbh2-lv:focus-visible, .lbh2-presets button:focus-visible, .lbh2-seg button:focus-visible, .lbh2-go:focus-visible { outline: 3px solid var(--navy); outline-offset: 2px; }
.lbh2-card { background: #fff; border-radius: 28px; padding: 24px 26px 26px; box-shadow: 0 1px 2px rgba(27,42,74,0.05), 0 18px 36px -26px rgba(27,42,74,0.35); }
.lbh2-ph { display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; flex-wrap: wrap; margin-bottom: 4px; }
.lbh2-ph h2 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 28px; margin: 0; }
.lbh2-ph p { margin: 4px 0 0; font-size: 14px; font-weight: 600; color: var(--muted); max-width: 52ch; line-height: 1.5; }
.lbh2-pill { align-self: flex-start; font-size: 12px; font-weight: 700; border-radius: 999px; padding: 5px 12px; background: #F1F3F8; white-space: nowrap; }
.lbh2-pill.is-story { background: #FFF4D6; color: #7A5C0C; }
.lbh2-step { margin-top: 22px; }
.lbh2-step h3 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 16px; margin: 0 0 10px; display: flex; align-items: center; gap: 9px; }
.lbh2-step h3 i { width: 24px; height: 24px; border-radius: 50%; background: var(--navy); color: #fff; font-style: normal; font-size: 13px; display: flex; align-items: center; justify-content: center; }
.lbh2-levels { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.lbh2-lv { border: none; background: #F7F8FC; border-radius: 22px; padding: 16px 16px 14px; text-align: left; font-family: inherit; color: inherit; cursor: pointer; box-shadow: inset 0 0 0 2px transparent; transition: box-shadow 0.15s, background 0.15s, transform 0.1s; }
.lbh2-lv:hover { transform: translateY(-1px); }
.lbh2-lv.is-on { background: var(--coral-pale); box-shadow: inset 0 0 0 2.5px var(--coral); }
.lbh2-n { font-family: 'Fredoka', sans-serif; font-size: 34px; font-weight: 600; line-height: 1; }
.lbh2-n small { font-family: 'Quicksand', sans-serif; font-size: 14px; color: var(--muted); font-weight: 600; margin-left: 4px; }
.lbh2-lv b { display: block; font-size: 15px; margin: 6px 0 8px; }
.lbh2-bar { display: flex; height: 8px; border-radius: 999px; overflow: hidden; gap: 2px; background: #E7EAF2; }
.lbh2-bar i { display: block; height: 100%; }
.lbh2-bar .e { background: #7BC79A; } .lbh2-bar .a { background: var(--gold); } .lbh2-bar .h { background: var(--navy); }
.lbh2-d { display: block; margin-top: 7px; font-size: 12px; font-weight: 600; color: var(--muted); }
.lbh2-presets, .lbh2-seg { display: inline-flex; gap: 4px; background: #F1F3F8; border-radius: 999px; padding: 4px; }
.lbh2-presets { margin-bottom: 12px; }
.lbh2-presets button, .lbh2-seg button { border: none; background: none; border-radius: 999px; padding: 7px 16px; font-family: inherit; font-size: 13px; font-weight: 700; color: var(--muted); cursor: pointer; }
.lbh2-presets button.is-on, .lbh2-seg button.is-on { background: #fff; color: var(--ink); box-shadow: 0 1px 4px rgba(27,42,74,0.14); }
.lbh2-seg button:disabled { opacity: 0.45; cursor: default; }
.lbh2-rewards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.lbh2-rw { border-radius: 20px; padding: 12px 12px 10px; text-align: center; background: #F7F8FC; }
.lbh2-ic { width: 38px; height: 38px; border-radius: 12px; margin: 0 auto 6px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 15px; }
.lbh2-rw.is-c .lbh2-ic { background: var(--coral); } .lbh2-rw.is-d .lbh2-ic { background: #F2593A; box-shadow: inset 0 0 0 3px #FFD1C4; } .lbh2-rw.is-b .lbh2-ic { background: var(--gold); } .lbh2-rw.is-x .lbh2-ic { background: var(--navy); }
.lbh2-rw b { display: block; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 22px; line-height: 1.1; }
.lbh2-rw > span:not(.lbh2-ic) { display: block; font-size: 12.5px; font-weight: 700; color: var(--muted); }
.lbh2-rw small { display: block; font-size: 11.5px; font-weight: 600; color: var(--muted); margin-top: 3px; }
.lbh2-start { display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; margin-top: 26px; padding-top: 18px; border-top: 1px solid var(--hair); }
.lbh2-start p { margin: 0; font-size: 13.5px; font-weight: 600; color: var(--muted); }
.lbh2-start p b { color: var(--ink); }
.lbh2-go { border: none; border-radius: 999px; padding: 13px 28px; font-family: inherit; font-size: 15px; font-weight: 700; background: var(--coral); color: #fff; cursor: pointer; box-shadow: 0 5px 0 #C9432A, 0 14px 22px -12px rgba(255,107,74,0.8); }
.lbh2-go:active { transform: translateY(2px); box-shadow: 0 3px 0 #C9432A; }
@media (max-width: 820px) {
  .lbh2-page { padding: 14px 12px 80px; }
  .lbh2-card { padding: 18px 16px 20px; }
  .lbh2-levels { grid-template-columns: 1fr; }
  .lbh2-rewards { grid-template-columns: repeat(2, 1fr); }
  .lbh2-tl { width: 30px; height: 30px; font-size: 17px; }
}
@media (prefers-reduced-motion: reduce) { .lbh2-lv, .lbh2-tab { transition: none; } }
`;
