import React, { useEffect, useState } from "react";
import { LESSON_GUIDE, styles as lessonStyles } from "./TenseIdentificationLesson";

export default function TenseIdentificationGuide() {
  const [i, setI] = useState(0);
  const total = LESSON_GUIDE.length;
  const g = LESSON_GUIDE[i];

  useEffect(() => {
    const styleId = "tidg-styles";
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
    <div className="tid-wrap">
      <div className="tid-single">
        <div className="tid-slide">
          <button className="tid-close" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <div className="tid-header">
            <div className="tid-brand">
              <span className="tid-brand-badge">
                <img className="tid-brand-logo" src="/logo-sentivo.png" alt="" />
              </span>
              <span>entivo</span>
            </div>
            <div className="tid-stage-chip">
              <span className="tid-stage-name">{g.stage}</span>
              {g.time && <span className="tid-stage-time">{g.time}</span>}
            </div>
          </div>
          <div className="tid-body">
            <div className="tidg-num">Teacher Guide &middot; Slide {i + 1}</div>
            {g.note === null ? (
              <p className="tidg-note tidg-empty">No notes needed here, just talk with the student.</p>
            ) : (
              <p className="tidg-note">{g.note}</p>
            )}
          </div>
          <div className="tid-footer">
            <button className={`tid-nav ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="tid-progress">
              {Array.from({ length: total }).map((_, idx) => (
                <span key={idx} className={`tid-dot ${idx === i ? "on" : ""}`} />
              ))}
            </div>
            <button className="tid-nav next" onClick={() => (i === total - 1 ? exit() : go(1))}>
              {i === total - 1 ? "Close Guide" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const guideStyles = `
.tidg-num { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: #8892AC; margin-bottom: 6px; }
.tidg-note { font-size: 16px; font-weight: 600; color: #1B2A4A; line-height: 1.7; max-width: 520px; text-align: center; margin: 0; }
.tidg-empty { color: #8892AC; }
`;
