import React, { useEffect, useState } from "react";
import { TEENS_LEVELS, TEENS_UNITS } from "./teensCurriculumData";
import { ADULTS_LEVELS, ADULTS_UNITS } from "./adultsCurriculumData";
import AudienceSwitchTabs from "./AudienceSwitchTabs";
import { TLP_STYLES as styles } from "./trackLevelStyles";

const TRACKS = {
  teens: {
    levels: TEENS_LEVELS, units: TEENS_UNITS, label: "Teens", age: "Ages 13 to 17",
    statTitle: "Built for teens", statSub: "Topics and pace matched to teenage learners",
  },
  adults: {
    levels: ADULTS_LEVELS, units: ADULTS_UNITS, label: "Adults", age: "Ages 18+",
    statTitle: "Real adult content", statSub: "Practical and task-based, not childish",
  },
};

const ACCENT_COLORS = {
  coral: { color: "#FF6B4A", light: "#FFE6DD" },
  navy: { color: "#1B2A4A", light: "#E7EAF3" },
};

// Which lessons have a real player built -- add an entry here (and build
// its route in main.jsx) as each one actually ships. Everything else stays
// disabled/"Coming soon", same pattern as Kids' LevelPage.jsx.
export const READY_LESSONS = {
  teens: { A1: { 1: [1, 2, 3, 4, 5], 2: [1, 2, 3, 4, 5], 3: [1, 2, 3, 4, 5], 4: [1, 2, 3, 4, 5], 5: [1, 2, 3, 4, 5], 6: [1, 2, 3, 4, 5], 7: [1, 2, 3, 4, 5], 8: [1, 2, 3, 4, 5], 9: [1, 2, 3, 4, 5], 10: [1, 2, 3, 4, 5], 11: [1, 2, 3, 4, 5], 12: [1, 2, 3, 4, 5] }, A2: { 1: [1, 2, 3, 4, 5], 2: [1, 2, 3, 4, 5], 3: [1, 2, 3, 4, 5], 4: [1, 2, 3, 4, 5], 5: [1, 2, 3, 4, 5], 6: [1, 2, 3, 4, 5], 7: [1, 2, 3, 4, 5], 8: [1, 2, 3, 4, 5], 9: [1, 2, 3, 4, 5], 10: [1, 2, 3, 4, 5], 11: [1, 2, 3, 4, 5], 12: [1, 2, 3, 4, 5] } },
  adults: { A1: { 1: [1, 2, 3, 4, 5], 2: [1, 2, 3, 4, 5], 3: [1, 2, 3, 4, 5], 4: [1, 2, 3, 4, 5], 5: [1, 2, 3, 4, 5], 6: [1, 2, 3, 4, 5], 7: [1, 2, 3, 4, 5], 8: [1, 2, 3, 4, 5], 9: [1, 2, 3, 4, 5], 10: [1, 2, 3, 4, 5], 11: [1, 2, 3, 4, 5], 12: [1, 2, 3, 4, 5] }, A2: { 1: [1, 2, 3, 4, 5], 2: [1, 2, 3, 4, 5], 3: [1, 2, 3, 4, 5], 4: [1, 2, 3, 4, 5], 5: [1, 2, 3, 4, 5], 6: [1, 2, 3, 4, 5], 7: [1, 2, 3, 4, 5], 8: [1, 2, 3, 4, 5], 9: [1, 2, 3, 4, 5], 10: [1, 2, 3, 4, 5], 11: [1, 2, 3, 4, 5], 12: [1, 2, 3, 4, 5] } },
};

function openLessonPopup(path) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(780, screenW - 40);
  const h = Math.min(620, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));
  window.open(
    path,
    "sentencoTrackLesson",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function TrackLevelPage({ audience, level, onBack }) {
  const track = TRACKS[audience] || TRACKS.teens;
  const data = track.levels[level] || track.levels.A1;
  const units = track.units[level] || track.units.A1;
  const colors = ACCENT_COLORS[data.accent] || ACCENT_COLORS.coral;
  const [openUnit, setOpenUnit] = useState(null);
  const [certNoteVisible, setCertNoteVisible] = useState(false);

  useEffect(() => {
    const styleId = "tlp-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  return (
    <div className="tlp-wrap">
      <div className="tlp-blob tlp-blob--a" />
      <div className="tlp-blob tlp-blob--b" />

      <div className="tlp-stage">
        <button type="button" className="tlp-breadcrumb" onClick={onBack}>
          Curriculum <span className="tlp-crumb-sep">&rsaquo;</span> {track.label} <span className="tlp-crumb-sep">&rsaquo;</span> <span style={{ color: colors.color }}>{level} &middot; {data.name}</span>
        </button>

        <div
          className="tlp-banner-hero"
          style={data.banner ? { backgroundImage: `url(${data.banner})` } : { background: colors.light }}
        >
          <div className="tlp-cefr-tag" style={{ color: colors.color }}>{track.label} &middot; CEFR {level}</div>
          <div className="tlp-banner-title">
            <span className="tlp-level-code" style={{ color: colors.color }}>{level}</span>
            <span className="tlp-level-name">{data.name}</span>
          </div>
          <p className="tlp-description">{data.description}</p>

          <AudienceSwitchTabs active={audience} level={level} variant="banner" />
        </div>

        <div className="tlp-stats-strip">
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7c-1.6-1.1-4.2-1.6-6.5-1.2v12.5c2.3-.4 4.9.1 6.5 1.2m0-12.5c1.6-1.1 4.2-1.6 6.5-1.2v12.5c-2.3-.4-4.9.1-6.5 1.2M12 7v11"/></svg>
            </div>
            <div>
              <div className="tlp-stat-title">12 Units</div>
              <div className="tlp-stat-sub">Each with 5 lessons plus a summative test</div>
            </div>
          </div>
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--coral">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.7" fill="currentColor"/></svg>
            </div>
            <div>
              <div className="tlp-stat-title">Practical skills</div>
              <div className="tlp-stat-sub">Focus on real-life communication</div>
            </div>
          </div>
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--lav">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5s1.5 2 3.5 2 3.5-2 3.5-2"/><circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none"/></svg>
            </div>
            <div>
              <div className="tlp-stat-title">{track.statTitle}</div>
              <div className="tlp-stat-sub">{track.statSub}</div>
            </div>
          </div>
        </div>

        <div className="tlp-toc">
          <div className="tlp-toc-header" style={{ background: colors.color }}>
            <div className="tlp-toc-eyebrow-row">
              <span className="tlp-toc-eyebrow-rule" />
              <span className="tlp-toc-eyebrow">{track.label} &middot; {level} {data.name}</span>
            </div>
            <h2 className="tlp-toc-title">Table of Contents</h2>
            <p className="tlp-toc-sub">{units.length} units &middot; {units.reduce((sum, u) => sum + u.lessons.length, 0)} lessons</p>
          </div>

          <ul className="tlp-toc-list">
            {units.map((u) => {
              const isOpen = openUnit === u.num;
              const readyForUnit = ((READY_LESSONS[audience] || {})[level] || {})[u.num] || [];
              const teachingLessons = u.lessons.filter((l) => !l.isTest);
              const unitReady = teachingLessons.length > 0 && teachingLessons.every((l) => readyForUnit.includes(l.num));
              return (
                <li key={u.num} className={`tlp-toc-item ${isOpen ? "is-open" : ""}`}>
                  <div className="tlp-toc-row" onClick={() => setOpenUnit(isOpen ? null : u.num)}>
                    <span className="tlp-toc-unit-label" style={{ color: colors.color, background: colors.light }}>
                      Unit {String(u.num).padStart(2, "0")}
                    </span>
                    <div className="tlp-toc-main">
                      <div className="tlp-toc-title-row">
                        <span className="tlp-toc-item-title">{u.title}</span>
                        <span className="tlp-toc-leader" />
                        {!unitReady && <span className="tlp-toc-page-tag">Coming soon</span>}
                      </div>
                      <div className="tlp-toc-focus">{u.focus} &middot; {u.anchor}</div>
                    </div>
                    <span className="tlp-toc-chevron" style={isOpen ? { background: colors.color, color: "#fff" } : {}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </div>

                  <div className="tlp-toc-panel">
                    <div className="tlp-toc-panel-inner">
                      {u.lessons.map((l) => {
                        const lessonReady = (((READY_LESSONS[audience] || {})[level] || {})[u.num] || []).includes(l.num);
                        const lessonPath = `/library/curriculum/${audience}/${level}/unit/${u.num}/lesson/${l.num}`;
                        return (
                          <div key={l.num} className={`tlp-toc-lesson-row ${l.isTest ? "is-test" : ""} ${lessonReady ? "is-ready" : ""}`}>
                            <span className="tlp-toc-lesson-bullet">{l.isTest ? "T" : l.num}</span>
                            <div className="tlp-toc-lesson-main">
                              <span className="tlp-toc-lesson-title">{l.title}</span>
                              <span className="tlp-toc-lesson-focus">{l.focus}</span>
                            </div>
                            {lessonReady ? (
                              <button type="button" className="tlp-toc-lesson-open" onClick={() => openLessonPopup(lessonPath)}>
                                Open
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                              </button>
                            ) : (
                              <span className="tlp-toc-lesson-tag">{l.isTest ? "Test" : "Lesson"}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {(level === "A1" || level === "A2") && (
          <div className="tlp-cert-cta" style={{ borderColor: colors.light }}>
            <div className="tlp-cert-cta-icon" style={{ background: colors.light }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={colors.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 21l5-2.5 5 2.5-1.5-8.5"/></svg>
            </div>
            <div className="tlp-cert-cta-main">
              <span className="tlp-cert-cta-eyebrow" style={{ color: colors.color }}>All {units.length} units complete</span>
              <div className="tlp-cert-cta-title">Ready to certify a student who finished {level}?</div>
              <div className="tlp-cert-cta-sub">Generate a printable Certificate of Completion for {data.name} ({level}) &mdash; add their name, and yours, in a moment.</div>
              {certNoteVisible && (
                <div className="tlp-cert-cta-note">The certificate design is still being finished &mdash; check back soon.</div>
              )}
            </div>
            <button type="button" className="tlp-cert-cta-btn" style={{ background: colors.color }} onClick={() => setCertNoteVisible(true)}>
              Download certificate
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14"/></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
