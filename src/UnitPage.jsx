import React, { useEffect } from "react";
import { UNITS } from "./kidsCurriculumData";

const UNIT_COLOR = { A1: { accent: "#FF6B4A", light: "#FFE6DD" }, A2: { accent: "#1B2A4A", light: "#FFE6DD" } };

// Which lessons have a real player built -- add a unit's entry here (and
// build its route in main.jsx) as each one actually ships, same pattern as
// LevelPage.jsx's READY_UNITS. Everything else stays disabled/"Coming soon".
const READY_LESSONS = { A1: { 1: [1, 2, 3, 4, 5, 6], 2: [1, 2, 3, 4, 5, 6], 3: [1, 2, 3, 4, 5, 6], 4: [1, 2, 3, 4, 5, 6], 5: [1, 2, 3, 4, 5, 6], 6: [1, 2, 3, 4, 5, 6], 7: [1, 2, 3, 4, 5, 6], 8: [1, 2, 3, 4, 5, 6], 9: [1, 2, 3, 4, 5, 6], 10: [1, 2, 3, 4, 5, 6], 11: [1, 2, 3, 4, 5, 6], 12: [1, 2, 3, 4, 5, 6] }, A2: { 1: [1, 2, 3, 4, 5], 2: [1, 2, 3, 4, 5, 6], 3: [1, 2, 3, 4, 5, 6], 4: [1, 2, 3, 4, 5, 6], 5: [1, 2, 3, 4, 5, 6], 6: [1, 2, 3, 4, 5, 6], 7: [1, 2, 3, 4, 5, 6], 8: [1, 2, 3, 4, 5, 6], 9: [1, 2, 3, 4, 5, 6], 10: [1, 2, 3, 4, 5, 6], 11: [1, 2, 3, 4, 5, 6], 12: [1, 2, 3, 4, 5, 6] } };

function openLessonPopup(level, unitNum, lessonNum) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(780, screenW - 40);
  const h = Math.min(620, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));
  const path = `/library/curriculum/${level}/unit/${unitNum}/lesson/${lessonNum}`;

  window.open(
    path,
    "sentencoKidsLesson",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function UnitPage({ level = "A1", unitNum = "1", onBack }) {
  const unit = (UNITS[level] || []).find((u) => u.num === Number(unitNum));
  const color = UNIT_COLOR[level] || UNIT_COLOR.A1;

  useEffect(() => {
    const styleId = "up-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  if (!unit) {
    return (
      <div className="up-wrap">
        <div className="up-stage">
          <p className="up-missing">This unit isn't ready yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="up-wrap">
      <div className="up-blob up-blob--a" />
      <div className="up-blob up-blob--b" />

      <div className="up-stage">
        <button type="button" className="up-breadcrumb" onClick={onBack}>
          Curriculum <span className="up-crumb-sep">&rsaquo;</span> {level} <span className="up-crumb-sep">&rsaquo;</span> <span style={{ color: color.accent }}>Unit {unitNum}</span>
        </button>

        <div className="up-hero" style={{ "--accent": color.accent }}>
          <span className="up-unit-tag" style={{ color: color.accent, background: color.light }}>Unit {unitNum}</span>
          <h1 className="up-title">{unit.title}</h1>
          <p className="up-focus">{unit.focus}</p>
          <span className="up-thread" style={{ color: color.accent }}>{unit.thread}</span>
        </div>

        <div className="up-lessons-hd">
          <h2 className="up-lessons-title">6 lessons</h2>
          <p className="up-lessons-sub">5 teaching lessons plus a summative test.</p>
        </div>

        <div className="up-lessons-grid">
          {unit.lessons.map((l) => {
            const isReady = (READY_LESSONS[level]?.[Number(unitNum)] || []).includes(l.num);
            return (
              <div key={l.num} className={`up-lesson-card ${l.isTest ? "up-lesson-card--test" : ""}`} style={{ "--accent": color.accent }}>
                <span className="up-lesson-watermark">{l.isTest ? "T" : l.num}</span>
                <span className="up-lesson-label">{l.isTest ? "Test" : `Lesson ${l.num}`}</span>
                {!isReady && <span className="up-lesson-soon">Coming soon</span>}
                <h3 className="up-lesson-title">{l.title}</h3>
                <p className="up-lesson-focus">{l.focus}</p>
                <div className="up-lesson-foot">
                  <span className="up-lesson-tag">{l.isTest ? "Summative test" : "Lesson"}</span>
                  {isReady ? (
                    <div className="up-lesson-actions">
                      <button type="button" className="up-lesson-open up-lesson-open--ready" onClick={() => openLessonPopup(level, unitNum, l.num)}>
                        Open
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </button>
                    </div>
                  ) : (
                    <button type="button" className="up-lesson-open" disabled>
                      Open
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=Inter:wght@500;600;700;800&display=swap');

.up-wrap {
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #FFFCF6;
  color: #23264A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.up-wrap * { box-sizing: border-box; }

.up-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.up-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,107,74,0.08); }
.up-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(27,42,74,0.06); }

.up-stage { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; padding: 26px 40px 70px; }
.up-missing { text-align: center; color: #6B6E96; margin-top: 60px; }

.up-breadcrumb { display: block; background: none; border: none; cursor: pointer; padding: 0; font-size: 12px; font-weight: 600; color: #6B6E96; margin-bottom: 26px; text-align: left; }
.up-crumb-sep { color: #C7C4DC; }

.up-hero {
  background: #fff; border: 1px solid #EDE6F4; border-radius: 16px;
  padding: 26px 30px; margin-bottom: 30px; position: relative; overflow: hidden;
}
.up-hero::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 5px; background: var(--accent); }
.up-unit-tag { display: inline-block; font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 4px 12px; border-radius: 6px; margin-bottom: 10px; }
.up-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 28px; color: #1B2A4A; margin: 0 0 8px; }
.up-focus { font-size: 13.5px; font-weight: 500; color: #6B6E96; margin: 0 0 10px; }
.up-thread { font-size: 12px; font-weight: 700; }

.up-lessons-hd { margin-bottom: 20px; }
.up-lessons-title { font-family: 'Source Serif 4', serif; font-size: 22px; font-weight: 600; color: #23264A; margin-bottom: 6px; }
.up-lessons-sub { font-size: 13px; color: #6B6E96; font-weight: 500; }

.up-lessons-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
@media (max-width: 900px) { .up-lessons-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .up-lessons-grid { grid-template-columns: 1fr; } }

.up-lesson-card {
  background: #fff; border-radius: 10px; padding: 16px 18px 14px 20px;
  border: 1px solid #EDE6F4; border-left: 4px solid var(--accent, #FF6B4A);
  box-shadow: 0 3px 10px rgba(27,42,74,0.05);
  display: flex; flex-direction: column;
  position: relative; overflow: hidden;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.up-lesson-card:hover { transform: translateX(2px); box-shadow: 0 8px 18px rgba(27,42,74,0.08); }
.up-lesson-card--test { background: #FFFCF0; border-left-color: #C98A00; }

.up-lesson-watermark {
  position: absolute; top: -14px; right: -6px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 68px;
  color: var(--accent, #FF6B4A); opacity: 0.08; line-height: 1; pointer-events: none;
}

.up-lesson-label { display: block; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent, #FF6B4A); margin-bottom: 8px; }
.up-lesson-soon { position: absolute; top: 14px; right: 14px; font-size: 9px; font-weight: 700; color: #A6A2C0; text-transform: uppercase; letter-spacing: 0.04em; }

.up-lesson-title { font-family: 'Source Serif 4', serif; font-size: 15px; font-weight: 600; color: #23264A; margin: 0 0 5px; position: relative; z-index: 1; }
.up-lesson-focus { font-size: 11.5px; font-weight: 500; color: #6B6E96; line-height: 1.5; margin: 0 0 12px; position: relative; z-index: 1; }

.up-lesson-foot { margin-top: auto; display: flex; align-items: center; justify-content: space-between; gap: 8px; position: relative; z-index: 1; }
.up-lesson-tag { font-size: 9.5px; font-weight: 700; color: #A6A2C0; text-transform: uppercase; letter-spacing: 0.04em; }
.up-lesson-open {
  display: inline-flex; align-items: center; gap: 4px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 11px;
  color: #A6A2C0; background: #F7F5FB; border: 1px solid #EDE6F4;
  border-radius: 999px; padding: 4px 11px; cursor: not-allowed; flex-shrink: 0;
}
.up-lesson-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
.up-lesson-open--ready {
  color: #fff; background: var(--accent, #FF6B4A); border-color: var(--accent, #FF6B4A);
  cursor: pointer;
}
`;
