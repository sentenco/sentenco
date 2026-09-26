import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "./TeensSayHelloLesson.jsx";
import { ABLAZE_A2_LESSONS } from "./ablazeA2Data.js";
import { TEENS_GAME_BLOCKS, teensGameStyles } from "./TeensGames.jsx";
import { CoverBadges, badgeAdjustStyles, useBadgePositions, medalDefault, ribbonDefault } from "./TeensCoverBadges.jsx";

const ABLAZE_BADGE_DEFAULTS = { medal: medalDefault(), ribbon: ribbonDefault({ left: 340 }) };

function renderHighlighted(text) {
  const parts = String(text).split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*") && part.length > 1) {
      return <span key={i} className="hl">{part.slice(1, -1)}</span>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
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

function ChipsBlock({ heading, subheading, items = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="chip-row">
        {items.map((it, i) => <span className="ig-chip" key={i}>{it}</span>)}
      </div>
    </div>
  );
}

function MessageBlock({ heading, subheading, lines = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p slide-p--wrap">{subheading}</p>}
      <div className="msg-lines">
        {lines.map((l, i) => <p className="msg-line" key={i}>{renderHighlighted(l)}</p>)}
      </div>
    </div>
  );
}

function LandingBlock({ heading, caption }) {
  return (
    <div className="stage-col">
      <StarIcon size={40} fill="var(--coral)" />
      <h2 className="slide-h">{heading}</h2>
      <p className="slide-p slide-p--wrap">{caption}</p>
    </div>
  );
}

const BLOCKS = {
  title: TitleBlock,
  chips: ChipsBlock,
  message: MessageBlock,
  landing: LandingBlock,
  ...TEENS_GAME_BLOCKS,
};

function renderSlideBody(slide) {
  const Block = BLOCKS[slide.type];
  return Block ? <Block {...slide} /> : null;
}

export default function AblazeLesson() {
  const { unit, lesson } = useParams();
  const [i, setI] = useState(0);
  const { badges, adjust, dragMedal, dragRibbon } = useBadgePositions("ablazeBadges", ABLAZE_BADGE_DEFAULTS);

  useEffect(() => {
    const styleId = "abz-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles + badgeAdjustStyles;
    document.head.appendChild(tag);
  }, []);

  const key = `${unit}-${lesson}`;
  const data = ABLAZE_A2_LESSONS[key];

  useEffect(() => {
    setI(0);
  }, [key]);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".abz-wrap");
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
      <div className="abz-wrap">
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
    <div className="abz-wrap">
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

          <div className="slide-body">{i === 0 && unit === "1" && lesson === "2" && <CoverBadges stage={s.stage} badges={badges} adjust={adjust} onDragMedal={dragMedal} onDragRibbon={dragRibbon} />}{renderSlideBody(s)}</div>

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
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&family=Fredoka:wght@600;700&display=swap');

:root {
  --coral: #FF6B4A; --coral-deep: #E0502F; --coral-light: #FFE6DD;
  --navy: #1B2A4A; --navy-soft: #5A6B92; --navy-light: #E4E9F5; --sun: #F2A900;
  --ink: #2B2438; --ink-soft: #736A87;
}

.abz-wrap {
  min-height: 100vh; width: 100%; background: #F5EFE7; color: var(--ink);
  font-family: 'Quicksand', sans-serif; padding: 1cm; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center;
}
.abz-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 30px; box-shadow: 0 24px 50px rgba(27,42,74,0.22);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/teens-a2-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/teens-a2-shared/slide-bg.jpg'); background-position: center; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.15); color: var(--navy); }

.slide-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 22px 0; position: relative; z-index: 2; }
.brand-bubble { display: flex; align-items: center; gap: 6px; background: #fff; border-radius: 999px; padding: 5px 14px 5px 6px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.brand-logo { width: 22px; height: 22px; border-radius: 50%; }
.brand-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 14px; color: var(--navy); }
.pennant { background: #fff; border-radius: 999px; padding: 6px 16px; max-width: 340px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.pennant-text { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; color: var(--navy); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; }

.slide-body { flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px 30px; position: relative; z-index: 2; min-height: 0; overflow-y: auto; }

.title-content { padding: 40px 40px 40px 340px; width: 100%; }
.title-eyebrow { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--coral-deep); margin-bottom: 8px; }
.cover-ribbon { position: absolute; top: 20px; left: 340px; display: flex; align-items: center; gap: 10px; height: 44px; background: linear-gradient(180deg, #26386A, #1B2A4A); color: #fff; border-radius: 999px; padding: 0 6px 0 18px; box-shadow: 0 5px 0 rgba(10,18,40,0.3), 0 8px 14px rgba(27,42,74,0.2); z-index: 4; }
.cover-ribbon .cr-label { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 13px; letter-spacing: 0.16em; }
.cover-ribbon .cr-num { width: 34px; height: 34px; border-radius: 50%; background: var(--coral); display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; line-height: 1; }
.unit-medal { position: absolute; left: 34px; top: 56px; width: 104px; height: 104px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #FF8A6B, var(--coral-deep)); border: 7px solid #FFD066; box-shadow: 0 10px 20px rgba(27,42,74,0.28); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; transform: rotate(-6deg); z-index: 4; }
.unit-medal .um-label { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.2em; margin-bottom: -6px; padding-left: 0.2em; }
.unit-medal .um-num { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 60px; line-height: 1; text-shadow: 0 3px 0 rgba(160,45,18,0.35); }
.unit-medal.is-long .um-num { font-size: 46px; }
.title-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 36px; color: var(--navy); margin: 0 0 12px; line-height: 1.05; }
.title-p { font-family: 'Quicksand', sans-serif; font-size: 14.5px; font-weight: 600; color: var(--ink-soft); max-width: 320px; line-height: 1.55; }

.stage-col { width: 100%; text-align: center; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; color: var(--navy); margin: 0 0 6px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 13px; color: var(--ink-soft); font-weight: 600; margin: 0 0 14px; }
.slide-p--wrap { max-width: 420px; margin-left: auto; margin-right: auto; line-height: 1.55; }

.chip-row { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; max-width: 460px; margin: 0 auto; }
.ig-chip { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; color: var(--coral-deep); background: var(--coral-light); padding: 7px 16px; border-radius: 999px; }

.msg-lines { display: flex; flex-direction: column; gap: 8px; max-width: 440px; margin: 0 auto; max-height: 260px; overflow-y: auto; }
.msg-line { background: rgba(255,255,255,0.94); border-radius: 14px; padding: 10px 16px; font-weight: 700; font-size: 13.5px; color: var(--ink); box-shadow: 0 6px 0 rgba(27,42,74,0.06); margin: 0; text-align: left; line-height: 1.4; }
.hl { color: var(--coral-deep); }

.slide-footer { display: flex; align-items: center; justify-content: space-between; padding: 0 22px 20px; position: relative; z-index: 2; }
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.is-off { opacity: 0.4; cursor: default; box-shadow: none; }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.progress-track { display: flex; align-items: center; gap: 6px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }
` + teensGameStyles;
