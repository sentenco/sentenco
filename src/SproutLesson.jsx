import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SPROUT_A1_LESSONS } from "./sproutA1Data.js";

function splitBlank(line) {
  return String(line).split("___").map((seg, i, arr) => (
    <React.Fragment key={i}>
      {seg}
      {i < arr.length - 1 && <span className="blank blank--wide" />}
    </React.Fragment>
  ));
}

function TitleBlock({ eyebrow, title, subtitle }) {
  return (
    <div className="title-content">
      <div className="title-eyebrow">{eyebrow}</div>
      <h1 className="title-h">{title}</h1>
      <p className="title-p">{subtitle}</p>
    </div>
  );
}

function WordsBlock({ heading, subheading, items = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="word-grid">
        {items.map((it, i) => (
          <div className="word-card" key={i}>
            <span className="word-term">{it.word}</span>
            <span className="word-gloss">{it.gloss}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrammarBlock({ heading, subheading, rows = [], note }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="grammar-table">
        {rows.map((r, i) => (
          <div className="gt-row" key={i}>
            <span className="gt-pro">{r.subj}</span>
            <span className="gt-verb">{r.verb}</span>
            <span className="gt-ex">{r.example}</span>
          </div>
        ))}
      </div>
      {note && <p className="grammar-note">Pattern: {note}</p>}
    </div>
  );
}

function DialogueBlock({ heading, subheading, turns = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="dialogue-col">
        {turns.map((t, i) => (
          <div className="d-row" key={i}>
            <span className="d-name">{t.name}</span>
            <p className="d-line">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PracticeBlock({ heading, groups = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <div className="practice-groups">
        {groups.map((g, gi) => (
          <div className="practice-group" key={gi}>
            {g.instruction && <p className="practice-instr">{g.instruction}</p>}
            <div className="practice-list">
              {g.items.map((it, i) => (
                <div className="practice-row" key={i}>{splitBlank(it)}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function YourTurnBlock({ heading, notes = [], lines = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {notes[0] && <p className="slide-p">{notes[0]}</p>}
      <div className="frame-card">
        {lines.map((l, i) => (
          <p className="frame-line" key={i}>{splitBlank(l.replace(/^"|"$/g, ""))}</p>
        ))}
      </div>
    </div>
  );
}

function LandingBlock({ heading, caption }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      <p className="slide-p slide-p--wrap">{caption}</p>
    </div>
  );
}

const BLOCKS = {
  title: TitleBlock,
  words: WordsBlock,
  grammar: GrammarBlock,
  dialogue: DialogueBlock,
  practice: PracticeBlock,
  yourturn: YourTurnBlock,
  landing: LandingBlock,
};

function renderSlideBody(slide) {
  const Block = BLOCKS[slide.type];
  return Block ? <Block {...slide} /> : null;
}

export default function SproutLesson() {
  const { unit, lesson } = useParams();
  const [i, setI] = useState(0);

  useEffect(() => {
    const styleId = "spr-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  const key = `${unit}-${lesson}`;
  const data = SPROUT_A1_LESSONS[key];

  useEffect(() => {
    setI(0);
  }, [key]);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".spr-wrap");
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
  }, [i === 0]);

  function exit() {
    window.close();
  }

  if (!data) {
    return (
      <div className="spr-wrap">
        <div className="deck-single">
          <div className="slide slide--regular">
            <div className="slide-body">
              <div className="stage-col">
                <h2 className="slide-h">Coming Soon</h2>
                <p className="slide-p">This lesson isn't available yet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const slides = data.slides;
  const total = slides.length;
  const s = slides[i];

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }

  return (
    <div className="spr-wrap">
      <div className="deck-single">
        <div className={`slide ${i === 0 ? "slide--title" : "slide--regular"}`}>
          <button className="close-btn" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div className="slide-header">
            <div className="brand-bubble">
              <img className="brand-logo" src="/logo-sentenco.png" alt="" />
              <span className="brand-word">entenco</span>
            </div>
            <div className="pennant">
              <span className="pennant-text">{s.stage}</span>
            </div>
          </div>

          <div className="slide-body">{renderSlideBody(s)}</div>

          <div className="slide-footer">
            <button className={`nav-btn ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="progress-track">
              {Array.from({ length: total }).map((_, idx) => (
                <span key={idx} className={`dot ${idx === i ? "on" : ""}`} />
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
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --coral: #FF6B4A; --coral-deep: #C4482E; --coral-light: #FFE6DD;
  --navy: #1B2A4A; --navy-soft: #5A6B92; --navy-light: #E4E9F5;
  --ink: #23283A; --ink-soft: #6B7186;
}

.spr-wrap {
  min-height: 100vh; width: 100%; background: #F3EEE6; color: var(--ink);
  font-family: 'Inter', sans-serif; padding: 1cm; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center;
}
.spr-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 22px; box-shadow: 0 20px 44px rgba(27,42,74,0.20);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/adults-a1-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/adults-a1-shared/slide-bg.jpg'); background-position: center; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 28px; height: 28px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.14); color: var(--navy); }

.slide-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 22px 0; position: relative; z-index: 2; }
.brand-bubble { display: flex; align-items: center; gap: 6px; background: #fff; border-radius: 999px; padding: 5px 14px 5px 6px; box-shadow: 0 2px 8px rgba(27,42,74,0.14); }
.brand-logo { width: 22px; height: 22px; border-radius: 50%; }
.brand-word { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 13.5px; color: var(--navy); }
.pennant { background: #fff; border-radius: 999px; padding: 6px 16px; max-width: 320px; box-shadow: 0 2px 8px rgba(27,42,74,0.14); }
.pennant-text { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 0.02em; color: var(--navy); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; }

.slide-body { flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px 30px; position: relative; z-index: 2; min-height: 0; overflow-y: auto; }

.title-content { padding: 40px 40px 40px 320px; width: 100%; }
.title-eyebrow { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--coral-deep); margin-bottom: 10px; }
.title-h { font-family: 'Fraunces', serif; font-weight: 600; font-size: 36px; color: var(--navy); margin: 0 0 12px; line-height: 1.08; }
.title-p { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: var(--ink-soft); max-width: 320px; line-height: 1.55; }

.stage-col { width: 100%; text-align: center; }
.slide-h { font-family: 'Fraunces', serif; font-weight: 600; font-size: 24px; color: var(--navy); margin: 0 0 6px; }
.slide-p { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--ink-soft); font-weight: 500; margin: 0 0 14px; }
.slide-p--wrap { max-width: 400px; margin-left: auto; margin-right: auto; line-height: 1.55; }

.word-grid { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; max-width: 460px; margin: 0 auto; }
.word-card { background: rgba(255,255,255,0.95); border-radius: 12px; padding: 14px 12px; width: 135px; box-shadow: 0 2px 10px rgba(27,42,74,0.08); display: flex; flex-direction: column; gap: 5px; }
.word-term { font-family: 'Fraunces', serif; font-weight: 600; font-size: 15.5px; color: var(--coral-deep); }
.word-gloss { font-size: 10.5px; color: var(--ink-soft); font-weight: 500; line-height: 1.35; }

.grammar-table { display: flex; flex-direction: column; gap: 4px; max-width: 440px; margin: 0 auto 10px; background: rgba(255,255,255,0.95); border-radius: 14px; padding: 10px 18px; box-shadow: 0 2px 10px rgba(27,42,74,0.08); max-height: 340px; overflow-y: auto; }
.gt-row { display: grid; grid-template-columns: 74px 62px 1fr; align-items: center; gap: 10px; text-align: left; padding: 2px 0; line-height: 1.3; }
.gt-pro { font-weight: 700; font-size: 12.5px; color: var(--navy); }
.gt-verb { font-weight: 700; font-size: 12.5px; color: var(--coral-deep); }
.gt-ex { font-size: 12.5px; color: var(--ink); font-weight: 500; }
.grammar-note { font-size: 12px; color: var(--ink-soft); font-weight: 600; margin: 0; }

.dialogue-col { display: flex; flex-direction: column; gap: 2px; max-width: 440px; margin: 0 auto; text-align: left; background: rgba(255,255,255,0.95); border-radius: 14px; padding: 10px 18px; box-shadow: 0 2px 10px rgba(27,42,74,0.08); max-height: 330px; overflow-y: auto; }
.d-row { padding: 3px 0; border-bottom: 1px dashed var(--navy-light); line-height: 1.25; }
.d-row:last-child { border-bottom: none; }
.d-name { font-size: 9.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--navy-soft); }
.d-line { margin: 1px 0 0; font-size: 12px; font-weight: 500; color: var(--ink); line-height: 1.3; }

.practice-groups { display: flex; flex-direction: column; gap: 8px; max-width: 420px; margin: 0 auto; max-height: 340px; overflow-y: auto; }
.practice-group { display: flex; flex-direction: column; gap: 5px; }
.practice-instr { font-size: 11px; color: var(--ink-soft); font-weight: 600; margin: 0; text-align: left; }
.practice-list { display: flex; flex-direction: column; gap: 5px; }
.practice-row { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: var(--ink); background: rgba(255,255,255,0.95); border-radius: 9px; padding: 6px 13px; box-shadow: 0 2px 8px rgba(27,42,74,0.07); text-align: left; line-height: 1.3; }

.frame-card { background: rgba(255,255,255,0.95); border-radius: 14px; padding: 14px 20px; max-width: 380px; margin: 0 auto; box-shadow: 0 2px 10px rgba(27,42,74,0.08); display: flex; flex-direction: column; gap: 6px; max-height: 340px; overflow-y: auto; }
.frame-line { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 13px; color: var(--ink); margin: 0; text-align: left; line-height: 1.3; }
.blank { display: inline-block; min-width: 46px; border-bottom: 2px solid var(--coral-deep); }
.blank--wide { min-width: 90px; }

.slide-footer { display: flex; align-items: center; justify-content: space-between; padding: 0 22px 20px; position: relative; z-index: 2; }
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 13px; padding: 11px 20px; border-radius: 12px; border: none; cursor: pointer; background: #fff; color: var(--navy); box-shadow: 0 2px 8px rgba(27,42,74,0.12); }
.nav-btn.is-off { opacity: 0.4; cursor: default; box-shadow: none; }
.nav-btn.next { background: var(--coral); color: #fff; box-shadow: 0 4px 14px rgba(196,72,46,0.35); }
.progress-track { display: flex; align-items: center; gap: 6px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.dot.on { width: 20px; border-radius: 5px; background: var(--coral); }
`;
