import React, { useEffect, useState } from "react";
import { LESSON_GUIDE, styles as lessonStyles } from "./RealEstateVocabLesson";

export default function RealEstateVocabGuide() {
  const [i, setI] = useState(0);
  const total = LESSON_GUIDE.length;
  const g = LESSON_GUIDE[i];

  useEffect(() => {
    const styleId = "revg-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = lessonStyles + guideStyles;
    document.head.appendChild(tag);
  }, []);

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }
  function exit() {
    window.close();
  }

  return (
    <div className="rev-wrap">
      <div className="rev-single">
        <div className="rev-slide">
          <button className="rev-close" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <div className="rev-header">
            <div className="rev-brand">
              <span className="rev-brand-badge">
                <img className="rev-brand-logo" src="/logo-sentivo.png" alt="" />
              </span>
              <span>entivo</span>
            </div>
            <div className="rev-stage-chip">
              <span className="rev-stage-name">{g.stage}</span>
              {g.time && <span className="rev-stage-time">{g.time}</span>}
            </div>
          </div>
          <div className="rev-body">
            <div className="revg-num">Teacher Guide &middot; Slide {i + 1}</div>
            {g.note === null ? (
              <p className="revg-note revg-empty">No notes needed here, just talk with the student.</p>
            ) : (
              <p className="revg-note">{g.note}</p>
            )}
          </div>
          <div className="rev-footer">
            <button className={`rev-nav ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="rev-progress">
              {Array.from({ length: total }).map((_, idx) => (
                <span key={idx} className={`rev-dot ${idx === i ? "on" : ""}`} />
              ))}
            </div>
            <button className="rev-nav next" onClick={() => (i === total - 1 ? exit() : go(1))}>
              {i === total - 1 ? "Close Guide" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const guideStyles = `
.revg-num { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: #8892AC; margin-bottom: 6px; }
.revg-note { font-size: 16px; font-weight: 600; color: #1B2A4A; line-height: 1.7; max-width: 520px; text-align: center; margin: 0; }
.revg-empty { color: #8892AC; }
`;
