import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SOAR_A2_LESSONS } from "./soarA2Data";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";
import { SoarPic } from "./SoarPic.jsx";
import { PeekBlock, SpinBlock, MissingBlock, SprintBlock, DiceBlock, TownBlock, DirsBlock, RouteBlock, ShopBlock, gameStyles } from "./SoarGames.jsx";

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

function EmojiTile({ emoji, label, active }) {
  return (
    <div className={`emoji-tile ${active ? "is-active" : ""}`}>
      <span className="emoji-tile-glyph">{emoji}</span>
      <span className="emoji-tile-label">{label}</span>
    </div>
  );
}


// ---------- v2 shell (same rules as A1 Kids, adapted for 1-on-1 online lessons) ----------
// A lesson opts in with `v2: true` in soarA2Data.js. The teacher clicks every slide, the child speaks
// (or types in the chat), so instructions only use Look / Listen / Say / Read / Type / Ask / Retell.
const PARTS = {
  A: { color: "#F2A900" },
  B: { color: "#2E97C7" },
  C: { color: "#22A67E" },
  D: { color: "#E0567A" },
};

const VERB_COLOR = {
  look: "#2E97C7", watch: "#2E97C7", find: "#2E97C7",
  say: "#E0502F", answer: "#E0502F", tell: "#E0502F", retell: "#E0502F", ask: "#E0502F", repeat: "#E0502F",
  listen: "#8E6FCE",
  type: "#0F9E90", write: "#0F9E90",
  read: "#D6478C",
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

function StripBlock({ heading, subheading, items = [], active = null, numbered = true, labels = true, question, sentence, frame, size }) {
  const n = items.length;
  const px = size || (n >= 5 ? 96 : n === 4 ? 112 : 128);
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="strip">
        {items.map((it, i) => (
          <div key={i} className={`strip-item ${active !== null && i === active ? "is-active" : ""} ${active !== null && i !== active ? "is-dim" : ""}`}>
            {numbered && <span className="strip-num">{i + 1}</span>}
            <SoarPic src={it.src} label={it.label} size={px} count={it.count} />
            {(labels || it.time) && <span className="strip-label">{it.time ? (labels ? `${it.label}, ${it.time}` : it.time) : it.label}</span>}
          </div>
        ))}
      </div>
      {question && (
        <div className="dlg-col dlg-col--strip">
          <div className="dlg-row"><div className="dlg-avatar">T</div><div className="dlg-bubble">{renderHighlighted(question)}</div></div>
        </div>
      )}
      {sentence && <div className="msg-card msg-card--wide"><div className="msg-sentence">{renderHighlighted(sentence)}</div></div>}
      {frame && <div className="msg-card msg-card--wide"><div className="msg-sentence msg-sentence--frame">{frame.map((l, i) => <div key={i}>{renderBlanks(l)}</div>)}</div></div>}
    </div>
  );
}

function ScoreBlock({ heading, rows = [], total }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="score-table">
        {rows.map(([label, max]) => <div key={label} className="score-row"><span>{label}</span><span>{max}</span></div>)}
        <div className="score-row total"><span>Total</span><span>{total}</span></div>
      </div>
    </div>
  );
}

function WrapUpBlock({ title = "You've Landed!", see = "See you next lesson!", recap, chips }) {
  return <WrapUp title={title} see={see} chips={chips}>{recap}</WrapUp>;
}

// The UNIT medal on the cover can be moved by hand (press M on a cover, or open the lesson with ?adjust=1):
// drag it, arrow keys nudge, + / - resize, [ ] tilt. The values are kept in this browser only.
const MEDAL_DEFAULT = { left: 58, top: 76, size: 128, rot: -6 };
const MEDAL_KEY = "soarMedal";
function loadMedal() {
  try {
    const v = JSON.parse(localStorage.getItem(MEDAL_KEY));
    return v ? { ...MEDAL_DEFAULT, ...v } : MEDAL_DEFAULT;
  } catch (e) {
    return MEDAL_DEFAULT;
  }
}

function CoverBadges({ lesson, unit, medal = MEDAL_DEFAULT, adjust = false, onDrag }) {
  const k = medal.size / 128;
  function down(e) {
    if (!adjust) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.dataset.sx = e.clientX;
    e.currentTarget.dataset.sy = e.clientY;
    e.currentTarget.dataset.ox = medal.left;
    e.currentTarget.dataset.oy = medal.top;
  }
  function move(e) {
    if (!adjust || e.currentTarget.dataset.sx === undefined || !e.currentTarget.hasPointerCapture(e.pointerId)) return;
    const d = e.currentTarget.dataset;
    onDrag({ left: Math.round(+d.ox + e.clientX - +d.sx), top: Math.round(+d.oy + e.clientY - +d.sy) });
  }
  return (
    <>
      <div className="cover-ribbon"><span className="cr-label">LESSON</span><span className="cr-num">{lesson}</span></div>
      <div
        className={`unit-medal ${String(unit).length > 1 ? "is-long" : ""} ${adjust ? "is-adjusting" : ""}`}
        style={{ left: medal.left, top: medal.top, width: medal.size, height: medal.size, transform: `rotate(${medal.rot}deg)`, "--k": k }}
        onPointerDown={down}
        onPointerMove={move}
      >
        <span className="um-label">UNIT</span><span className="um-num">{unit}</span>
      </div>
    </>
  );
}

// ---------- generic slide-block renderers ----------
// Each lesson's content is authored as data (see soarA2Data.js), not JSX.
// A block's `type` picks which of these renders it.

function TitleBlock({ eyebrow, title, subtitle, lesson }) {
  return (
    <div className="title-content">
      {!lesson && <div className="title-eyebrow">{eyebrow}</div>}
      {lesson ? <span className="title-highlight"><h1 className="title-h">{title}</h1></span> : <h1 className="title-h">{title}</h1>}
      <p className="title-p">{subtitle}</p>
    </div>
  );
}

function PairsBlock({ heading, subheading, knownLabel = "You know", known = [], newLabel = "Now let's learn", items = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="pair-row">
        <div className="pair-col">
          <div className="pair-label">{knownLabel}</div>
          {known.map((t, i) => <EmojiTile key={i} {...t} />)}
        </div>
        <div className="pair-arrow">→</div>
        <div className="pair-col">
          <div className="pair-label">{newLabel}</div>
          {items.map((t, i) => <EmojiTile key={i} {...t} active />)}
        </div>
      </div>
    </div>
  );
}

function ChipsBlock({ heading, subheading, items = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="chip-row">
        {items.map((t, i) => <span key={i} className="chip">{t}</span>)}
      </div>
    </div>
  );
}

function MessageBlock({ heading, subheading, lines = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      {lines.map((line, i) => (
        <div key={i} className={`msg-card ${i > 0 ? "msg-card--sub" : ""}`}>
          <div className="msg-sentence">{renderHighlighted(line)}</div>
        </div>
      ))}
    </div>
  );
}

// Renders a string, wrapping any *word* segments in a highlight span.
function renderHighlighted(text) {
  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, i) => (i % 2 === 1 ? <span key={i} className="hl">{part}</span> : part));
}

function DialogueBlock({ heading, subheading, turns = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="dlg-col">
        {turns.map((t, i) => (
          <div key={i} className={`dlg-row ${t.who === "student" ? "dlg-row--me" : ""}`}>
            <div className={`dlg-avatar ${t.who === "student" ? "dlg-avatar--coral" : ""}`}>{t.who === "student" ? "S" : "T"}</div>
            <div className="dlg-bubble">{renderHighlighted(t.text)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpotBlock({ heading, subheading, lines = [], chips = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="spot-wrap">
        <div className="spot-note">
          {lines.map((line, i) => <div key={i} className="spot-line"><b>{i + 1}.</b> {line}</div>)}
        </div>
        {chips.length > 0 && (
          <div className="spot-col">
            {chips.map((c, i) => <div key={i} className="spot-chip">{c}</div>)}
          </div>
        )}
      </div>
    </div>
  );
}

function LogBlock({ heading, subheading, rows = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="log-frame">
        {rows.map((row, i) => (
          <div key={i} className="log-row">
            <span className="log-num">{i + 1}</span>
            <span className="log-line">{renderBlanks(row)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Renders a string, turning any ___ sequence into a blank span.
function renderBlanks(text) {
  const parts = text.split(/(_+)/g);
  return parts.map((part, i) => (/^_+$/.test(part) ? <span key={i} className="blank" /> : part));
}

function PostcardBlock({ heading, subheading, line }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="frame-card">
        <div className="frame-line">{renderBlanks(line)}</div>
      </div>
    </div>
  );
}

function LandingBlock({ heading, subheading, cardTitle, caption }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="landing-card">
        <div className="stamp-mark"><StarIcon size={24} fill="#fff" /></div>
        <div className="landing-title">{cardTitle}</div>
        <div className="landing-cap">{caption}</div>
      </div>
    </div>
  );
}

function TableBlock({ heading, subheading, rows = [], heads = ["Present", "Past"] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="verb-table-wrap">
        <table className="verb-table">
          <thead><tr><th>{heads[0]}</th><th>{heads[1]}</th></tr></thead>
          <tbody>
            {rows.map(([a, b], i) => <tr key={i}><td>{a}</td><td className={b === "?" ? "is-unknown" : ""}>{b}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StepsBlock({ heading, subheading, items = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="steps-frame">
        {items.map((t, i) => (
          <div key={i} className="steps-row"><span className="log-num">{i + 1}</span><span className="log-line">{t}</span></div>
        ))}
      </div>
    </div>
  );
}

const BLOCKS = {
  title: TitleBlock, pairs: PairsBlock, chips: ChipsBlock, message: MessageBlock,
  dialogue: DialogueBlock, spot: SpotBlock, log: LogBlock, postcard: PostcardBlock,
  landing: LandingBlock, table: TableBlock, steps: StepsBlock,
  strip: StripBlock, wrapup: WrapUpBlock, score: ScoreBlock,
  peek: PeekBlock, spin: SpinBlock, missing: MissingBlock, sprint: SprintBlock, dice: DiceBlock, town: TownBlock, dirs: DirsBlock, route: RouteBlock, shop: ShopBlock,
};

function renderSlideBody(slide) {
  const Block = BLOCKS[slide.type];
  if (!Block) return null;
  return <Block {...slide} />;
}

export default function SoarLesson() {
  const { unit, lesson } = useParams();
  const [i, setI] = useState(0);
  const [medal, setMedal] = useState(loadMedal);
  const [adjust, setAdjust] = useState(() => new URLSearchParams(window.location.search).get("adjust") === "1");
  const [copied, setCopied] = useState(false);

  function changeMedal(patch) {
    setMedal((m) => {
      const next = { ...m, ...patch };
      try { localStorage.setItem(MEDAL_KEY, JSON.stringify(next)); } catch (e) { /* not saved */ }
      return next;
    });
  }
  function resetMedal() {
    setMedal(MEDAL_DEFAULT);
    try { localStorage.removeItem(MEDAL_KEY); } catch (e) { /* nothing saved */ }
  }
  function copyMedal() {
    const text = `Unit medal: left ${medal.left}, top ${medal.top}, size ${medal.size}, tilt ${medal.rot}`;
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  useEffect(() => {
    function onKey(e) {
      const onCover = i === 0 && document.querySelector(".slide .unit-medal");
      if (!onCover) return;
      if (e.key === "m" || e.key === "M") { setAdjust((a) => !a); return; }
      if (!adjust) return;
      const step = e.shiftKey ? 10 : 1;
      const map = {
        ArrowLeft: { left: medal.left - step }, ArrowRight: { left: medal.left + step },
        ArrowUp: { top: medal.top - step }, ArrowDown: { top: medal.top + step },
        "+": { size: medal.size + 4 }, "=": { size: medal.size + 4 }, "-": { size: Math.max(60, medal.size - 4) },
        "[": { rot: medal.rot - 1 }, "]": { rot: medal.rot + 1 },
      };
      if (map[e.key]) { e.preventDefault(); changeMedal(map[e.key]); }
      if (e.key === "0") resetMedal();
      if (e.key === "Escape") setAdjust(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, adjust, medal]);

  useEffect(() => {
    const styleId = "sv-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles + gameStyles;
    document.head.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".sv-wrap");
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


  // v2 cover: shrink the title until it sits on one line, like A1 Kids
  useEffect(() => {
    const fit = () => {
      const h = document.querySelector(".slide .title-h");
      const box = document.querySelector(".slide .title-content");
      if (!h || !box || !document.querySelector(".slide.is-v2")) return;
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
  }, [i, unit, lesson]);

  function exit() {
    window.close();
  }

  const key = `${unit}-${lesson}`;
  const data = SOAR_A2_LESSONS[key];

  useEffect(() => { setI(0); }, [key]);

  if (!data) {
    return (
      <div className="sv-wrap">
        <div style={{ background: "#fff", borderRadius: 20, padding: 40, textAlign: "center", fontFamily: "sans-serif" }}>
          <p>This lesson isn't available yet.</p>
        </div>
      </div>
    );
  }

  const slides = data.slides;
  const total = slides.length;
  const s = slides[i];
  const v2 = !!data.v2;
  const isCover = v2 && i === 0 && !!s.lesson;
  const lastPart = v2 ? [...slides].reverse().find((x) => x.part)?.part : null;

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }

  return (
    <div className="sv-wrap">
      <div className="deck-single">
        <div className={`slide ${i === 0 ? "slide--title" : "slide--regular"} ${v2 ? "is-v2" : ""}`}>
          <button className="close-btn" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div className="slide-header">
            <div className="brand-bubble">
              <img className="brand-logo" src="/logo-sentenco.png" alt="" />
              <span className="brand-word">entenco</span>
            </div>
            <div className="pennant">
              {v2 && s.part && <span className="part-badge" style={{ background: PARTS[s.part].color }}>Part {s.part}</span>}
              <span className="pennant-text">{s.stage}</span>
              {v2 && s.part && s.part === lastPart && slides[i + 1]?.part !== s.part && <span className="last-tag">Last part!</span>}
            </div>
          </div>

          <div className={`slide-body ${v2 && s.instruction ? "has-instruction" : ""} ${isCover ? "is-cover" : ""}`}>
            {isCover && <CoverBadges lesson={s.lesson} unit={s.unit} medal={medal} adjust={adjust} onDrag={changeMedal} />}
            {isCover && adjust && (
              <div className="medal-panel">
                <div className="mp-title">Adjust the UNIT medal</div>
                <div className="mp-values">left {medal.left} · top {medal.top} · size {medal.size} · tilt {medal.rot}°</div>
                <div className="mp-hint">Drag · arrows move (Shift ×10) · + / − size · [ ] tilt · 0 reset</div>
                <div className="mp-btns">
                  <button type="button" onClick={copyMedal}>{copied ? "Copied" : "Copy values"}</button>
                  <button type="button" onClick={resetMedal}>Reset</button>
                  <button type="button" onClick={() => setAdjust(false)}>Done</button>
                </div>
              </div>
            )}
            {v2 && s.instruction && (
              <div className="slide-instruction">
                {s.instruction.map(([icon, text]) => <InstructionStep key={text} icon={icon} text={text} />)}
              </div>
            )}
            <React.Fragment key={i}>{renderSlideBody(s)}</React.Fragment>
            {v2 && s.guide && (
              <div className="slide-guide">
                <span className="guide-label" style={s.guideLabel === "Type" ? { background: "#0F9E90" } : undefined}>{s.guideLabel || "Say"}</span>
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
                <span key={idx} className={`dot ${idx === i ? "on" : ""} ${v2 && slides[idx].part && slides[idx].part !== slides[idx - 1]?.part ? "part-start" : ""}`} style={v2 && slides[idx].part && idx === i ? { background: PARTS[slides[idx].part].color } : undefined} />
              ))}
            </div>
            <button className="nav-btn next" onClick={() => (i === total - 1 ? exit() : go(1))}>
              {i === total - 1 ? "Finish Lesson" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&family=Fredoka:wght@600;700&display=swap');

:root {
  --coral: #FF6B4A; --coral-deep: #E0502F; --coral-light: #FFE6DD;
  --navy: #1B2A4A; --navy-soft: #5A6B92; --navy-light: #E4E9F5; --sun: #F2A900;
  --ink: #2B2438; --ink-soft: #736A87;
}

.sv-wrap {
  min-height: 100vh; width: 100%; background: #E9EEF7; color: var(--ink);
  font-family: 'Quicksand', sans-serif; padding: 1cm; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center;
}
.sv-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 30px; box-shadow: 0 24px 50px rgba(27,42,74,0.22);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/a2-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/a2-shared/slide-bg.jpg'); background-position: top right; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.15); color: var(--navy); }

.slide-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 22px 0; position: relative; z-index: 2; }
.brand-bubble { display: flex; align-items: center; gap: 6px; background: #fff; border-radius: 999px; padding: 5px 14px 5px 6px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.brand-logo { width: 22px; height: 22px; border-radius: 50%; }
.brand-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 14px; color: var(--navy); }
.pennant { background: #fff; border-radius: 999px; padding: 6px 16px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); max-width: 260px; }
.pennant-text { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; color: var(--navy); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; }

.slide-body { flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px 30px; position: relative; z-index: 2; overflow-y: auto; }

.title-content { padding: 40px 40px 40px 250px; width: 100%; }
.title-eyebrow { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--coral-deep); margin-bottom: 8px; }
.title-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 36px; color: var(--navy); margin: 0 0 12px; line-height: 1.05; }
.title-p { font-family: 'Quicksand', sans-serif; font-size: 14.5px; font-weight: 600; color: var(--ink-soft); max-width: 320px; line-height: 1.55; }

.stage-col { width: 100%; text-align: center; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; color: var(--navy); margin: 0 0 6px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 13px; color: var(--ink-soft); font-weight: 600; margin: 0 0 16px; }

.msg-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 14px 22px; max-width: 420px; margin: 0 auto 10px; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.msg-card--sub { opacity: 0.85; }
.msg-sentence { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14.5px; color: var(--ink); text-align: center; line-height: 1.5; }
.hl { background: var(--coral-light); color: var(--coral-deep); padding: 1px 6px; border-radius: 6px; }

.chip-row { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; max-width: 440px; margin: 0 auto; }
.chip { background: rgba(255,255,255,0.94); border-radius: 999px; padding: 7px 14px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--navy); box-shadow: 0 3px 0 rgba(27,42,74,0.06); }

.dlg-col { display: flex; flex-direction: column; gap: 8px; max-width: 420px; margin: 0 auto; }
.dlg-row { display: flex; align-items: flex-end; gap: 8px; text-align: left; }
.dlg-row--me { flex-direction: row-reverse; }
.dlg-avatar { width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0; background: var(--navy); color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; display: flex; align-items: center; justify-content: center; }
.dlg-avatar--coral { background: var(--coral); }
.dlg-bubble { background: rgba(255,255,255,0.94); border-radius: 14px; padding: 8px 13px; font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 12.5px; color: var(--ink); max-width: 280px; box-shadow: 0 3px 0 rgba(27,42,74,0.06); }

.pair-row { display: flex; align-items: center; justify-content: center; gap: 18px; }
.pair-col { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.pair-label { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; color: var(--navy-soft); margin-bottom: 2px; }
.pair-arrow { font-size: 22px; color: var(--navy-soft); }
.emoji-tile { background: rgba(255,255,255,0.9); border-radius: 14px; padding: 10px 16px; display: flex; align-items: center; gap: 8px; min-width: 110px; box-shadow: 0 3px 0 rgba(27,42,74,0.06); }
.emoji-tile.is-active { background: #fff; border: 2px solid var(--coral); }
.emoji-tile-glyph { font-size: 22px; }
.emoji-tile-label { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; color: var(--navy); }

.spot-wrap { display: flex; gap: 16px; justify-content: center; max-width: 460px; margin: 0 auto; }
.spot-note { flex: 1; background: rgba(255,255,255,0.94); border-radius: 14px; padding: 14px 18px; box-shadow: 0 6px 0 rgba(27,42,74,0.08); text-align: left; }
.spot-line { font-family: 'Quicksand', sans-serif; font-size: 12.5px; font-weight: 600; color: var(--ink); line-height: 1.7; padding: 3px 0; border-bottom: 1px dashed var(--navy-light); }
.spot-line:last-child { border-bottom: none; }
.spot-col { display: flex; flex-direction: column; gap: 8px; justify-content: center; }
.spot-chip { width: 44px; height: 40px; border-radius: 10px; background: #fff; box-shadow: 0 3px 0 rgba(27,42,74,0.08); display: flex; align-items: center; justify-content: center; font-size: 18px; }

.log-frame, .steps-frame { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 16px 22px; max-width: 440px; margin: 0 auto; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.log-row, .steps-row { display: flex; align-items: baseline; gap: 10px; padding: 7px 0; border-bottom: 1px dashed var(--navy-light); text-align: left; }
.log-row:last-child, .steps-row:last-child { border-bottom: none; }
.log-num { flex-shrink: 0; width: 20px; height: 20px; border-radius: 50%; background: var(--navy-light); color: var(--navy); font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; display: flex; align-items: center; justify-content: center; }
.log-line { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: var(--ink); }

.frame-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 20px 24px; max-width: 420px; margin: 0 auto; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.frame-line { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; color: var(--ink); line-height: 1.7; }

.blank { display: inline-block; min-width: 46px; border-bottom: 2px solid var(--coral-deep); }

.landing-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 20px; max-width: 260px; margin: 0 auto; text-align: center; box-shadow: 0 8px 0 rgba(27,42,74,0.08); border: 2px dashed var(--sun); }
.stamp-mark { width: 52px; height: 52px; border-radius: 50%; background: var(--sun); display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; box-shadow: 0 0 0 4px #fff, 0 0 0 6px var(--sun); }
.landing-title { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 14px; color: var(--navy); margin-bottom: 4px; }
.landing-cap { font-family: 'Quicksand', sans-serif; font-size: 12px; color: var(--ink-soft); font-weight: 600; }

.verb-table-wrap { display: flex; justify-content: center; }
.verb-table { border-collapse: collapse; background: rgba(255,255,255,0.94); border-radius: 12px; overflow: hidden; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.verb-table th, .verb-table td { padding: 8px 22px; font-family: 'Quicksand', sans-serif; font-size: 13px; text-align: center; }
.verb-table th { background: var(--navy-light); color: var(--navy); font-weight: 700; }
.verb-table td { font-weight: 700; color: var(--ink); border-top: 1px dashed var(--navy-light); }
.verb-table td:last-child { color: var(--coral-deep); }

.slide-footer { display: flex; align-items: center; justify-content: space-between; padding: 0 22px 20px; position: relative; z-index: 2; }
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.is-off { opacity: 0.4; cursor: default; box-shadow: none; }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.progress-track { display: flex; align-items: center; gap: 6px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); transition: all 0.2s ease; }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }

/* ---------- v2 shell (opt-in per lesson) ---------- */
.is-v2 .slide-body { flex-direction: column; gap: 14px; padding: 22px 44px; }
.is-v2 .slide-body.has-instruction { padding-top: 98px; }
.is-v2 .slide-instruction { top: 46px; }
.is-v2 .stage-col { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.is-v2 .slide-h { position: relative; display: inline-block; isolation: isolate; font-size: 32px; line-height: 1.05; margin: 0; }
.is-v2 .slide-h::before { content: ""; position: absolute; left: -12px; right: -12px; top: 34%; bottom: 18%; background: #FFD066; opacity: 0.85; transform: rotate(-1.4deg); border-radius: 4px; z-index: -1; }
.is-v2 .slide-p { font-size: 15px; margin: 0; }
.is-v2 .chip { font-size: 17px; padding: 8px 18px; }
.is-v2 .chip-row { max-width: 560px; gap: 10px; }
.is-v2 .msg-sentence { font-size: 17px; }
.is-v2 .msg-card { max-width: 520px; margin: 0 auto; }
.is-v2 .msg-card--wide { max-width: 600px; width: 100%; padding: 10px 20px; }
.is-v2 .msg-sentence--frame { font-size: 17px; line-height: 1.7; }
.is-v2 .dlg-col { max-width: 520px; }
.is-v2 .dlg-bubble { font-size: 17px; max-width: 420px; padding: 10px 16px; }
.is-v2 .dlg-avatar { width: 30px; height: 30px; font-size: 12px; }
.is-v2 .frame-card { max-width: 560px; padding: 18px 26px; }
.is-v2 .frame-line { font-size: 18px; line-height: 1.8; }
.is-v2 .blank { min-width: 60px; }
.is-v2 .pennant { display: flex; align-items: center; gap: 8px; max-width: none; padding: 6px 14px; }

.slide-instruction { position: absolute; top: 44px; left: 50%; transform: translateX(-50%); width: max-content; max-width: 672px; display: flex; align-items: center; justify-content: center; gap: 18px; flex-wrap: wrap; font-family: 'Baloo 2', sans-serif; font-weight: 600; font-size: 18px; color: #fff; background: linear-gradient(180deg, #26386A, #1B2A4A); border-radius: 999px; padding: 7px 24px; box-shadow: 0 6px 0 rgba(10,18,40,0.35), 0 12px 20px rgba(27,42,74,0.2); z-index: 2; text-align: center; }
.slide-instruction .instr-tag { box-shadow: 0 0 0 2px rgba(255,255,255,0.85); }
.instr-step { display: inline-flex; align-items: center; gap: 8px; }
.instr-icon { font-size: 24px; line-height: 1; }
.instr-text { display: inline-flex; align-items: center; gap: 8px; }
.instr-tag { font-weight: 800; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; padding: 3px 11px; border-radius: 999px; }
.part-badge { height: 22px; padding: 0 10px; border-radius: 999px; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 11.5px; letter-spacing: 0.03em; white-space: nowrap; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
.last-tag { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 10.5px; color: #fff; background: var(--coral); border-radius: 999px; padding: 2px 8px; letter-spacing: 0.02em; white-space: nowrap; }
.slide-guide { display: inline-flex; align-items: center; gap: 10px; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 18px; color: var(--coral-deep); background: var(--coral-light); border: 2.5px dashed var(--coral); border-radius: 16px; padding: 6px 18px; position: relative; z-index: 1; }
.guide-label { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #fff; background: var(--coral); border-radius: 999px; padding: 2px 9px; }
.guide-blank { display: inline-block; width: 64px; border-bottom: 3px solid var(--coral-deep); margin: 0 4px; vertical-align: -3px; }
.progress-track { flex-wrap: nowrap; }
.dot.part-start { margin-left: 8px; }

.is-v2 .slide-body.is-cover { padding: 22px 44px; gap: 16px; }
.is-v2 .title-content { display: flex; flex-direction: column; align-items: flex-start; gap: 14px; width: 100%; padding: 0 0 0 230px; text-align: left; }
.is-v2 .title-highlight { position: relative; display: inline-block; }
.is-v2 .title-highlight::before { content: ""; position: absolute; left: -12px; right: -12px; top: 34%; bottom: 18%; background: #FFD066; opacity: 0.85; transform: rotate(-1.4deg); border-radius: 4px; z-index: 0; }
.is-v2 .title-h { position: relative; z-index: 1; font-size: 50px; line-height: 1.05; margin: 0; white-space: nowrap; }
.is-v2 .title-p { font-size: 16px; max-width: 402px; margin: 0; }
.cover-ribbon { align-self: flex-start; margin-left: 230px; display: flex; align-items: center; gap: 12px; height: 54px; background: linear-gradient(180deg, #26386A, #1B2A4A); color: #fff; border-radius: 999px; padding: 0 6px 0 22px; box-shadow: 0 6px 0 rgba(10,18,40,0.3), 0 10px 18px rgba(27,42,74,0.2); position: relative; z-index: 2; }
.cover-ribbon .cr-label { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 16px; letter-spacing: 0.18em; }
.cover-ribbon .cr-num { width: 44px; height: 44px; border-radius: 50%; background: #FF6B4A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 30px; line-height: 1; }
.unit-medal { position: absolute; left: 36px; top: 62px; width: 128px; height: 128px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #FF8A6B, #E0502F); border: calc(8px * var(--k, 1)) solid #FFD066; box-shadow: 0 12px 24px rgba(27,42,74,0.28); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; transform: rotate(-6deg); z-index: 3; }
.unit-medal .um-label { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: calc(14px * var(--k, 1)); letter-spacing: 0.22em; margin-bottom: calc(-8px * var(--k, 1)); padding-left: 0.22em; }
.unit-medal .um-num { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: calc(76px * var(--k, 1)); line-height: 1; text-shadow: 0 4px 0 rgba(160,45,18,0.35); }
.unit-medal.is-long .um-num { font-size: calc(58px * var(--k, 1)); }
.unit-medal.is-adjusting { cursor: grab; outline: 3px dashed #fff; outline-offset: 4px; touch-action: none; user-select: none; }
.unit-medal.is-adjusting:active { cursor: grabbing; }
.medal-panel { position: absolute; top: 6px; right: 26px; z-index: 6; width: 318px; background: rgba(27,42,74,0.94); color: #fff; border-radius: 14px; padding: 7px 12px; text-align: center; box-shadow: 0 10px 24px rgba(0,0,0,0.3); font-family: 'Quicksand', sans-serif; }
.mp-title { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 14px; }
.mp-values { font-weight: 700; font-size: 12.5px; margin-top: 2px; color: #FFD066; }
.mp-hint { font-weight: 600; font-size: 10.5px; opacity: 0.8; margin-top: 2px; white-space: nowrap; }
.mp-btns { display: flex; gap: 8px; justify-content: center; margin-top: 6px; }
.mp-btns button { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; border: none; border-radius: 999px; padding: 5px 14px; cursor: pointer; background: #fff; color: #1B2A4A; }

/* picture strip (a school day in order) */
.strip { display: flex; justify-content: center; gap: 10px; }
.strip-item { position: relative; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 4px 2px 2px; border-radius: 16px; transition: opacity 0.2s; }
.strip-item.is-dim { opacity: 0.4; }
.strip-item.is-active { background: rgba(255,255,255,0.7); box-shadow: 0 0 0 3px var(--coral); }
.strip-num { position: absolute; top: -4px; left: -4px; z-index: 2; width: 24px; height: 24px; border-radius: 50%; background: var(--navy); color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 2px #fff; }
.strip-label { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; color: var(--navy); text-align: center; max-width: 118px; line-height: 1.15; }
.sp-tile { position: relative; background: #fff; border-radius: 16px; box-shadow: 0 4px 0 rgba(27,42,74,0.08); overflow: hidden; display: flex; align-items: center; justify-content: center; }
.sp-tile img { width: 100%; height: 100%; object-fit: contain; display: block; }
.sp-multi { display: flex; width: 100%; height: 100%; align-items: center; justify-content: center; padding: 6px 4px; gap: 0; }
.sp-multi img { flex: 1 1 0; min-width: 0; width: auto; height: auto; max-height: 100%; }
.sp-missing { position: absolute; inset: 6px; border: 2.5px dashed #C9C2DD; border-radius: 12px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 4px; }
.sp-missing span { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #A79FC0; line-height: 1.1; }
.dlg-col--strip { margin: 0 auto; }

.score-table { display: flex; flex-direction: column; gap: 2px; width: 100%; max-width: 380px; background: #fff; border-radius: 18px; padding: 10px 22px; box-shadow: 0 8px 18px rgba(27,42,74,0.1); position: relative; z-index: 1; }
.score-row { display: flex; justify-content: space-between; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15px; color: var(--ink); padding: 3px 0; }
.score-row.total { border-top: 2px dashed var(--coral-light); margin-top: 4px; padding-top: 10px; color: var(--coral-deep); font-size: 18px; }

.is-v2 .verb-table th, .is-v2 .verb-table td { padding: 10px 34px; font-size: 19px; }
.is-v2 .verb-table th { font-size: 14px; letter-spacing: 0.06em; text-transform: uppercase; }
.verb-table td.is-unknown { color: #C9C2DD; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 26px; }
${wrapUpStyles}
`;
