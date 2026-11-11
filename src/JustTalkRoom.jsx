import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { STAGES, SCRIPTS, CARDS } from "./justTalkData";

// Just Talk A1-A2: the owner's private speaking course. Only the site owner's
// account can open these pages; they are not linked anywhere else. Speaking
// classes don't rely on slides, so the main view is a teacher console (script,
// timer, notes). A small "Student card" popup shows the words, starters and task
// card when it helps to share something.

const OWNER_EMAIL = "caldrin1999@gmail.com";
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const LAB = { say: "You", student: "Student", do: "Do", watch: "Watch", stuck: "Stuck", fast: "Fast" };

// Flat list of every built class, in path order, for prev/next.
function builtClasses() {
  const list = [];
  for (const st of STAGES) {
    for (const t of st.topics) {
      const sc = SCRIPTS[t.name];
      if (!sc) continue;
      sc.forEach((c, i) => list.push({ stage: st.n, topic: t.name, n: i + 1, key: `${t.name}|${c.title}`, script: c, path: `/library/just-talk/${slug(t.name)}/${i + 1}` }));
    }
    const chk = SCRIPTS[`check-${st.n}`];
    if (chk) list.push({ stage: st.n, topic: `Stage ${st.n} check-in`, n: 1, key: `check-${st.n}`, script: chk[0], path: `/library/just-talk/stage-${st.n}/check-in` });
  }
  return list;
}
const CLASSES = builtClasses();
const findClass = (topicSlug, n) => CLASSES.find((c) => c.path === `/library/just-talk/${topicSlug}/${n}`);
const toSec = (t) => { const [m, s] = t.split(":").map(Number); return m * 60 + s; };
const mmss = (sec) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

function useOwner() {
  const { user, loading } = useAuth();
  return { loading, ok: user?.email?.toLowerCase() === OWNER_EMAIL };
}

function Gate({ children }) {
  const { loading, ok } = useOwner();
  if (loading) return null;
  if (!ok) return <div className="jt-shell"><style>{CSS}</style><p className="jt-denied">Not available.</p></div>;
  return children;
}

function openCard(cls) {
  const w = Math.min(980, (window.screen.availWidth || 1200) - 40);
  const h = Math.min(640, (window.screen.availHeight || 800) - 80);
  window.open(`${cls.path}/card`, "justTalkCard", `width=${w},height=${h},left=40,top=40,toolbar=no,location=no,menubar=no,status=no,resizable=yes`);
}

/* ---------- Room (hub) ---------- */

export function JustTalkHub() {
  const navigate = useNavigate();
  return (
    <Gate>
      <div className="jt-shell">
        <style>{CSS}</style>
        <div className="jt-top">
          <button type="button" className="jt-brand" onClick={() => navigate("/library")}>
            <img src="/logo-sentenco.png" alt="" className="jt-logo" />entenco
          </button>
          <span className="jt-private">Only you can see this</span>
        </div>
        <main className="jt-page">
          <header className="jt-hero">
            <span className="jt-eyebrow">Private speaking course</span>
            <h1>Just Talk <em>A1-A2</em></h1>
            <p>One path from a student's first sentence to the end of A2. Open a class to get its script, a 25-minute timer and a student card you can share when it helps.</p>
          </header>
          {STAGES.map((st) => {
            const built = st.topics.every((t) => SCRIPTS[t.name]);
            return (
              <section key={st.n} className={`jt-stage${built ? "" : " is-off"}`}>
                <div className="jt-stage-head">
                  <span className="jt-snum">{st.n}</span>
                  <div>
                    <h2>{st.name} <small>{st.lv}</small></h2>
                    <p>{st.focus}</p>
                  </div>
                  {!built && <span className="jt-soon">Not built yet</span>}
                </div>
                <div className="jt-topics">
                  {st.topics.map((t) => (
                    <div key={t.name} className="jt-topic">
                      <h3>{t.name}</h3>
                      {t.classes.map(([title, pattern], i) => (
                        built
                          ? <button key={title} type="button" className="jt-row" onClick={() => navigate(`/library/just-talk/${slug(t.name)}/${i + 1}`)}>
                              <span className="jt-n">{i + 1}</span><span className="jt-rt"><b>{title}</b><span>{pattern}</span></span>
                            </button>
                          : <div key={title} className="jt-row is-static"><span className="jt-n">{i + 1}</span><span className="jt-rt"><b>{title}</b><span>{pattern}</span></span></div>
                      ))}
                    </div>
                  ))}
                  {SCRIPTS[`check-${st.n}`] && (
                    <div className="jt-topic">
                      <h3>Check-in</h3>
                      <button type="button" className="jt-row" onClick={() => navigate(`/library/just-talk/stage-${st.n}/check-in`)}>
                        <span className="jt-n">✓</span><span className="jt-rt"><b>Stage {st.n} check-in</b><span>Review and read the student file back</span></span>
                      </button>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </Gate>
  );
}

/* ---------- Class console ---------- */

function CopyBox({ title, text }) {
  const [label, setLabel] = useState("Copy");
  const ref = useRef(null);
  async function copy() {
    try { await navigator.clipboard.writeText(text); setLabel("Copied"); }
    catch {
      const r = document.createRange(); r.selectNodeContents(ref.current);
      const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      setLabel("Selected");
    }
    setTimeout(() => setLabel("Copy"), 1600);
  }
  return (
    <div className="jt-cardbox">
      <div className="jt-cardbox-h"><span>{title}</span><button type="button" onClick={copy}>{label}</button></div>
      <pre ref={ref}>{text}</pre>
    </div>
  );
}

export function JustTalkClass({ check = false }) {
  const navigate = useNavigate();
  const { topic, n, stage } = useParams();
  const cls = check ? CLASSES.find((c) => c.key === `check-${stage?.replace("stage-", "")}`) : findClass(topic, n);
  const idx = cls ? CLASSES.indexOf(cls) : -1;
  const steps = useMemo(() => (cls ? cls.script.steps.map((s) => ({ ...s, a: toSec(s.t), b: toSec(s.end) })) : []), [cls]);

  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [follow, setFollow] = useState(true);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const total = steps.length ? steps[steps.length - 1].b : 1500;
  const current = steps.findIndex((s) => elapsed >= s.a && elapsed < s.b);
  const cur = current === -1 ? (elapsed >= total ? steps.length - 1 : 0) : current;

  useEffect(() => {
    if (follow && running && stepRefs.current[cur]) stepRefs.current[cur].scrollIntoView({ behavior: "smooth", block: "start" });
  }, [cur, follow, running]);

  if (!cls) {
    return <Gate><div className="jt-shell"><style>{CSS}</style><p className="jt-denied">Class not found. <button type="button" className="jt-link" onClick={() => navigate("/library/just-talk")}>Back to Just Talk</button></p></div></Gate>;
  }

  const c = cls.script;
  const prev = CLASSES[idx - 1];
  const next = CLASSES[idx + 1];
  const cards = CARDS[cls.key] || [];
  const jump = (sec) => setElapsed(sec);
  const go = (p) => { setRunning(false); setElapsed(0); navigate(p); window.scrollTo(0, 0); };

  return (
    <Gate>
      <div className="jt-shell">
        <style>{CSS}</style>
        <div className="jt-top">
          <button type="button" className="jt-back" onClick={() => navigate("/library/just-talk")}>← Just Talk</button>
          <span className="jt-crumb">Stage {cls.stage} · {cls.topic}{check ? "" : ` · Class ${cls.n}`}</span>
          <span className="jt-navbtns">
            <button type="button" disabled={!prev} onClick={() => prev && go(prev.path)}>Previous</button>
            <button type="button" disabled={!next} onClick={() => next && go(next.path)}>Next</button>
          </span>
        </div>

        <div className="jt-timer" role="region" aria-label="Class timer">
          <div className="jt-clock">
            <b>{mmss(Math.min(elapsed, 5999))}</b><span>of {mmss(total)}</span>
          </div>
          <div className="jt-tbtns">
            <button type="button" className="jt-primary" onClick={() => setRunning((r) => !r)}>{running ? "Pause" : elapsed ? "Resume" : "Start class"}</button>
            <button type="button" onClick={() => { setRunning(false); setElapsed(0); }}>Reset</button>
            <label className="jt-follow"><input type="checkbox" checked={follow} onChange={(e) => setFollow(e.target.checked)} /> Follow</label>
          </div>
          <div className="jt-segs">
            {steps.map((s, i) => (
              <button key={s.t} type="button" className={`jt-seg${i === cur ? " is-on" : ""}${elapsed >= s.b ? " is-done" : ""}`} style={{ flex: s.b - s.a }} onClick={() => jump(s.a)} title={`Jump to ${s.part}`}>
                <span>{s.t}</span><b>{s.part.startsWith("Speaking task") ? "Speaking task" : s.part}</b>
                {i === cur && <i style={{ width: `${Math.min(100, ((elapsed - s.a) / (s.b - s.a)) * 100)}%` }} />}
              </button>
            ))}
          </div>
          {elapsed >= total && <p className="jt-over">Time's up. Finish the wrap-up and write the student file note.</p>}
        </div>

        <main className="jt-page jt-class">
          <header className="jt-chead">
            <h1>{c.title}</h1>
            <p className="jt-goal">{c.goal}</p>
            <button type="button" className="jt-cardbtn" onClick={() => openCard(cls)}>Student card</button>
          </header>

          <section className="jt-meta">
            <div><span className="jt-k">Pattern</span><div className="jt-frames">{c.pattern.map((p) => <span key={p}>{p}</span>)}</div></div>
            <div><span className="jt-k">Words</span><div className="jt-chips">{c.words.map((w) => <span key={w}>{w}</span>)}</div></div>
            <div><span className="jt-k">Recycle</span><p>{c.recycle}</p></div>
            <div><span className="jt-k">Prepare</span><p>{c.prepare}</p></div>
            {cards.length > 0 && <div className="jt-cards">{cards.map(([t, txt]) => <CopyBox key={t} title={t} text={txt} />)}</div>}
          </section>

          <section className="jt-steps">
            {steps.map((s, i) => (
              <article key={s.t} ref={(el) => { stepRefs.current[i] = el; }} className={`jt-step${i === cur && (running || elapsed > 0) ? " is-on" : ""}`}>
                <button type="button" className="jt-stime" onClick={() => { jump(s.a); }} title="Set the timer to this step">
                  <b>{s.t}</b><span>to {s.end}</span><em>{s.part}</em>
                </button>
                <div className="jt-items">
                  {s.items.map(([k, v], j) => (
                    <div key={j} className={`jt-it jt-${k}`}><span className="jt-lab">{LAB[k]}</span><span className="jt-txt">{v}</span></div>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <section className="jt-foot">
            <span className="jt-k">Common mistakes</span>
            <div className="jt-mist">
              {c.mistakes.map(([w, r, h]) => (
                <div key={w}><s>{w}</s><b>{r}</b><span>{h}</span></div>
              ))}
            </div>
            <div className="jt-file"><span className="jt-k">After class: student file</span><p>{c.file}</p></div>
          </section>

          <div className="jt-endnav">
            {prev ? <button type="button" onClick={() => go(prev.path)}>← {prev.script.title}</button> : <span />}
            {next ? <button type="button" onClick={() => go(next.path)}>{next.script.title} →</button> : <span />}
          </div>
        </main>
      </div>
    </Gate>
  );
}

/* ---------- Student card (popup to share when needed) ---------- */

export function JustTalkCard({ check = false }) {
  const { topic, n, stage } = useParams();
  const cls = check ? CLASSES.find((c) => c.key === `check-${stage?.replace("stage-", "")}`) : findClass(topic, n);
  const [view, setView] = useState(0);
  const views = cls ? [
    { id: "words", label: "Words" },
    { id: "say", label: "Say it" },
    ...(CARDS[cls.key] || []).map(([t], i) => ({ id: `card-${i}`, label: t })),
  ] : [];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setView((v) => Math.min(v + 1, views.length - 1));
      if (e.key === "ArrowLeft") setView((v) => Math.max(v - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [views.length]);

  if (!cls) return <Gate><div className="jt-shell"><style>{CSS}</style><p className="jt-denied">Class not found.</p></div></Gate>;
  const c = cls.script;
  const v = views[view];
  const card = v.id.startsWith("card-") ? (CARDS[cls.key] || [])[Number(v.id.slice(5))] : null;

  return (
    <Gate>
      <div className="jt-scard">
        <style>{CSS}</style>
        <div className="jt-scard-top">
          <b>{c.title}</b>
          <div className="jt-tabs" role="tablist">
            {views.map((x, i) => <button key={x.id} type="button" role="tab" aria-selected={i === view} className={i === view ? "is-on" : ""} onClick={() => setView(i)}>{x.label}</button>)}
          </div>
        </div>
        <div className="jt-scard-body">
          {v.id === "words" && <div className="jt-bigwords">{c.words.map((w) => <span key={w}>{w}</span>)}</div>}
          {v.id === "say" && <div className="jt-bigframes">{c.pattern.map((p) => <span key={p}>{p}</span>)}</div>}
          {card && <pre className="jt-bigcard">{card[1]}</pre>}
        </div>
      </div>
    </Gate>
  );
}

export default JustTalkHub;

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');
.jt-shell { min-height: 100vh; background: #FBFAF7; color: #2B2A4A; font-family: 'Quicksand', sans-serif; font-weight: 500; }
.jt-shell *, .jt-scard * { box-sizing: border-box; }
.jt-shell h1, .jt-shell h2, .jt-shell h3 { font-family: 'Fredoka', sans-serif; color: #1B2A4A; margin: 0; }
.jt-denied { padding: 60px 24px; text-align: center; color: #6F6A88; }
.jt-link { background: none; border: none; color: #E8573A; font: inherit; font-weight: 700; cursor: pointer; text-decoration: underline; }
.jt-top { position: sticky; top: 0; z-index: 5; display: flex; align-items: center; gap: 14px; padding: 12px max(16px, 3vw); background: #fff; border-bottom: 1px solid rgba(43,42,74,0.09); flex-wrap: wrap; }
.jt-brand { display: flex; align-items: center; font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: #2B2A4A; background: none; border: none; cursor: pointer; padding: 0; }
.jt-logo { height: 24px; margin-right: -5px; }
.jt-private { margin-left: auto; font-size: 12px; font-weight: 700; color: #1F6B42; background: #E3F5EA; border-radius: 999px; padding: 4px 12px; }
.jt-back { background: none; border: none; font: 700 14px 'Quicksand', sans-serif; color: #1B2A4A; cursor: pointer; padding: 0; }
.jt-crumb { font-size: 13px; color: #6F6A88; font-weight: 600; }
.jt-navbtns { margin-left: auto; display: flex; gap: 6px; }
.jt-navbtns button, .jt-tbtns button, .jt-endnav button { font: 700 13px 'Quicksand', sans-serif; color: #1B2A4A; background: #E9ECF3; border: none; border-radius: 999px; padding: 7px 14px; cursor: pointer; }
.jt-navbtns button:disabled { opacity: 0.4; cursor: default; }
.jt-page { max-width: 920px; margin: 0 auto; padding: 28px max(16px, 3vw) 80px; display: grid; gap: 22px; }
.jt-hero { display: grid; gap: 8px; }
.jt-eyebrow { font-size: 11.5px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #E8573A; }
.jt-hero h1 { font-size: clamp(32px, 5vw, 44px); }
.jt-hero h1 em { font-style: normal; color: #E8573A; }
.jt-hero p { max-width: 62ch; font-size: 16px; }
.jt-stage { background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 18px; padding: 18px; display: grid; gap: 14px; }
.jt-stage.is-off { opacity: 0.6; }
.jt-stage-head { display: grid; grid-template-columns: auto minmax(0,1fr) auto; gap: 12px; align-items: center; }
.jt-snum { width: 34px; height: 34px; border-radius: 50%; background: #1B2A4A; color: #fff; display: grid; place-items: center; font: 700 15px 'Fredoka', sans-serif; }
.jt-stage-head h2 { font-size: 19px; }
.jt-stage-head h2 small { font-size: 12px; color: #E8573A; margin-left: 6px; }
.jt-stage-head p { margin: 0; font-size: 13px; color: #6F6A88; }
.jt-soon { font-size: 11.5px; font-weight: 700; color: #6F6A88; background: #F1F3F8; border-radius: 999px; padding: 3px 10px; }
.jt-topics { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 12px; }
.jt-topic { display: grid; gap: 6px; align-content: start; }
.jt-topic h3 { font-size: 15px; }
.jt-row { display: grid; grid-template-columns: 24px minmax(0,1fr); gap: 8px; text-align: left; background: #FBFAF7; border: 1px solid rgba(43,42,74,0.08); border-radius: 12px; padding: 8px 10px; cursor: pointer; font: inherit; color: inherit; }
.jt-row:hover { border-color: #E8573A; }
.jt-row.is-static { cursor: default; }
.jt-row.is-static:hover { border-color: rgba(43,42,74,0.08); }
.jt-n { font: 600 14px 'Fredoka', sans-serif; color: #E8573A; }
.jt-rt { display: grid; gap: 1px; min-width: 0; }
.jt-rt b { font-size: 14px; color: #1B2A4A; }
.jt-rt span { font-size: 12.5px; color: #6F6A88; }

.jt-timer { position: sticky; top: 49px; z-index: 4; background: #1B2A4A; color: #fff; padding: 10px max(16px, 3vw); display: grid; grid-template-columns: auto auto minmax(0,1fr); gap: 10px 16px; align-items: center; }
@media (max-width: 760px) { .jt-timer { grid-template-columns: auto minmax(0,1fr); } .jt-segs { grid-column: 1 / -1; } }
.jt-clock b { font: 600 26px 'Fredoka', sans-serif; font-variant-numeric: tabular-nums; }
.jt-clock span { font-size: 12px; opacity: 0.7; margin-left: 6px; }
.jt-tbtns { display: flex; gap: 6px; align-items: center; }
.jt-tbtns .jt-primary { background: #E8573A; color: #fff; }
.jt-follow { font-size: 12px; display: flex; gap: 4px; align-items: center; opacity: 0.85; }
.jt-segs { display: flex; gap: 3px; min-width: 0; }
.jt-seg { position: relative; overflow: hidden; min-width: 0; background: rgba(255,255,255,0.1); border: none; border-radius: 8px; padding: 5px 7px; text-align: left; color: #fff; cursor: pointer; font: inherit; display: grid; }
.jt-seg span { font-size: 10.5px; opacity: 0.7; font-variant-numeric: tabular-nums; }
.jt-seg b { font-size: 11.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; position: relative; }
.jt-seg.is-done { background: rgba(255,255,255,0.22); }
.jt-seg.is-on { background: #E8573A; }
.jt-seg i { position: absolute; left: 0; bottom: 0; height: 3px; background: #FFF1C2; }
.jt-over { grid-column: 1 / -1; margin: 0; font-size: 13px; color: #FFF1C2; font-weight: 700; }

.jt-chead { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 6px 14px; align-items: center; }
.jt-chead h1 { font-size: clamp(28px, 4vw, 38px); }
.jt-goal { grid-column: 1; margin: 0; color: #6F6A88; }
.jt-cardbtn { grid-column: 2; grid-row: 1 / span 2; font: 700 14px 'Quicksand', sans-serif; background: #FFF1C2; color: #1B2A4A; border: 1.5px solid #1B2A4A; border-radius: 999px; padding: 9px 16px; cursor: pointer; }
.jt-meta { background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 16px; padding: 16px 18px; display: grid; gap: 10px; }
.jt-meta > div { display: grid; grid-template-columns: 90px minmax(0,1fr); gap: 10px; align-items: start; }
.jt-meta p { margin: 0; font-size: 14px; }
@media (max-width: 560px) { .jt-meta > div { grid-template-columns: 1fr; gap: 4px; } }
.jt-k { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6F6A88; padding-top: 3px; }
.jt-frames, .jt-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.jt-frames span { background: #F1F3F8; border-radius: 8px; padding: 2px 10px; font-weight: 700; font-size: 14px; color: #1B2A4A; }
.jt-chips span { background: #fff; border: 1px solid rgba(43,42,74,0.12); border-radius: 8px; padding: 2px 9px; font-weight: 600; font-size: 14px; }
.jt-meta .jt-cards { display: grid; grid-template-columns: 1fr; gap: 8px; }
.jt-cardbox { border: 1px dashed rgba(122,82,0,0.35); background: #FFFBEA; border-radius: 10px; padding: 10px 12px; display: grid; gap: 6px; }
.jt-cardbox-h { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.jt-cardbox-h span { font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #7A5200; }
.jt-cardbox-h button { border: none; background: #1B2A4A; color: #fff; font: 700 12px 'Quicksand', sans-serif; border-radius: 999px; padding: 4px 12px; cursor: pointer; }
.jt-cardbox pre { margin: 0; font: 12.5px/1.5 ui-monospace, Menlo, monospace; white-space: pre; overflow-x: auto; }

.jt-steps { display: grid; gap: 10px; }
.jt-step { scroll-margin-top: 190px; background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 16px; padding: 14px 16px; display: grid; grid-template-columns: 110px minmax(0,1fr); gap: 14px; transition: box-shadow .2s, border-color .2s; }
.jt-step.is-on { border-color: #E8573A; box-shadow: 0 0 0 3px rgba(232,87,58,0.15); }
@media (max-width: 600px) { .jt-step { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { .jt-step { transition: none; } }
.jt-stime { display: grid; gap: 1px; align-content: start; text-align: left; background: none; border: none; padding: 0; cursor: pointer; font: inherit; color: inherit; }
.jt-stime b { font: 600 16px 'Fredoka', sans-serif; color: #E8573A; font-variant-numeric: tabular-nums; }
.jt-stime span { font-size: 12px; color: #6F6A88; }
.jt-stime em { font-style: normal; font-size: 13px; font-weight: 700; color: #1B2A4A; margin-top: 4px; line-height: 1.3; }
.jt-items { display: grid; gap: 7px; min-width: 0; }
.jt-it { display: grid; grid-template-columns: 62px minmax(0,1fr); gap: 8px; align-items: baseline; font-size: 14.5px; }
.jt-lab { font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6F6A88; }
.jt-say .jt-txt { background: #fff; border: 1.5px solid #1B2A4A; border-radius: 10px; padding: 4px 10px; justify-self: start; font-weight: 600; }
.jt-student .jt-txt { background: #FFF1C2; border: 1.5px solid #1B2A4A; border-radius: 10px; padding: 4px 10px; justify-self: start; font-weight: 600; }
.jt-watch .jt-lab { color: #E8573A; }
.jt-stuck .jt-lab { color: #1D4E89; }
.jt-fast .jt-lab { color: #1F6B42; }
.jt-watch .jt-txt, .jt-stuck .jt-txt, .jt-fast .jt-txt { font-size: 13.5px; }

.jt-foot { background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 16px; padding: 16px 18px; display: grid; gap: 10px; }
.jt-mist { display: grid; gap: 6px; }
.jt-mist > div { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr) minmax(0,1.4fr); gap: 10px; font-size: 14px; }
@media (max-width: 600px) { .jt-mist > div { grid-template-columns: 1fr; gap: 2px; } }
.jt-mist s { color: #E8573A; }
.jt-mist b { color: #1F6B42; }
.jt-mist span { color: #6F6A88; }
.jt-file { background: #E3F5EA; border-radius: 12px; padding: 10px 12px; display: grid; gap: 2px; }
.jt-file p { margin: 0; color: #1F6B42; font-weight: 600; }
.jt-endnav { display: flex; justify-content: space-between; gap: 10px; }

.jt-scard { min-height: 100vh; background: #FBFAF7; color: #1B2A4A; font-family: 'Quicksand', sans-serif; display: grid; grid-template-rows: auto 1fr; }
.jt-scard-top { display: flex; flex-wrap: wrap; gap: 10px 16px; align-items: center; justify-content: space-between; padding: 12px 20px; background: #fff; border-bottom: 1px solid rgba(43,42,74,0.09); }
.jt-scard-top b { font: 600 18px 'Fredoka', sans-serif; }
.jt-tabs { display: flex; flex-wrap: wrap; gap: 4px; background: #F1F3F8; border-radius: 999px; padding: 3px; }
.jt-tabs button { border: none; background: none; border-radius: 999px; padding: 6px 14px; font: 700 13px 'Quicksand', sans-serif; color: #1B2A4A; cursor: pointer; }
.jt-tabs button.is-on { background: #1B2A4A; color: #fff; }
.jt-scard-body { display: grid; place-items: center; padding: 24px; }
.jt-bigwords { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px 18px; max-width: 900px; }
.jt-bigwords span { font: 600 clamp(28px, 4.5vw, 46px) 'Fredoka', sans-serif; background: #fff; border: 2px solid #1B2A4A; border-radius: 16px; padding: 6px 20px; }
.jt-bigframes { display: grid; gap: 14px; justify-items: center; }
.jt-bigframes span { font: 600 clamp(26px, 4vw, 42px) 'Fredoka', sans-serif; background: #FFF1C2; border: 2px solid #1B2A4A; border-radius: 16px; padding: 8px 24px; }
.jt-bigcard { margin: 0; font: 600 clamp(16px, 2.2vw, 22px)/1.6 'Quicksand', sans-serif; white-space: pre-wrap; background: #fff; border: 2px solid #1B2A4A; border-radius: 16px; padding: 18px 24px; max-width: 900px; }
`;
