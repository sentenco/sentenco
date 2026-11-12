import { useEffect, useState } from "react";
import JustTalkLevelTabs from "./JustTalkLevelTabs.jsx";
import { openBoardWindow } from "./justTalkWindow.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { STAGES, NAMES } from "./justTalkData";
import { TLP_STYLES } from "./trackLevelStyles";
import { BOARDS } from "./justTalkBoards";

// Just Talk A1-A2: the owner's private speaking course. Only the site owner's
// account can open these pages. Every lesson and check-in opens as a Just Talk Board
// (JustTalkBoard.jsx); the old teacher scripts were removed on 2026-11-13.

const OWNER_EMAIL = "caldrin1999@gmail.com";
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

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

/* ---------- Room (hub): same layout as the curriculum level pages ---------- */

const TOPIC_NUM = Object.fromEntries(STAGES.flatMap((st) => st.topics.map((t) => t.name)).map((name, i) => [name, i + 1]));
// Just Talk lesson rows: name on line 1, question + pattern on line 2, so half-width windows stay tidy.
const JT_LESSON_CSS = `
.jt-lmain { flex-direction: column; align-items: flex-start; gap: 2px; }
.jt-lmain .tlp-toc-lesson-title { white-space: normal; }
.jt-lmain .tlp-toc-lesson-focus { line-height: 1.45; }
.jt-lq { font-family: 'Source Serif 4', serif; font-style: italic; color: #8A85A0; margin-right: 8px; }
`;
const STAGE_COLORS = { A1: { color: "#FF6B4A", light: "#FFE6DD" }, A2: { color: "#1B2A4A", light: "#E7EAF3" } };
const chevron = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>;
const arrow = <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;

// The Just Talk Board opens in half the screen (justTalkWindow.js).
function openBoard(path) { openBoardWindow(`${path}/board`); }

export function JustTalkHub() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  useEffect(() => {
    const id = "tlp-styles";
    document.getElementById(id)?.remove();
    const tag = document.createElement("style");
    tag.id = id;
    tag.textContent = TLP_STYLES;
    document.head.appendChild(tag);
  }, []);

  const topicCount = STAGES.reduce((n, st) => n + st.topics.length, 0);
  const classCount = STAGES.reduce((n, st) => n + st.topics.reduce((m, t) => m + t.classes.length, 0), 0);

  return (
    <Gate>
      <div className="tlp-wrap">
        <style>{JT_HUB_CSS}</style>
        <div className="tlp-blob tlp-blob--a" />
        <div className="tlp-blob tlp-blob--b" />
        <div className="tlp-stage">
          <button type="button" className="tlp-breadcrumb" onClick={() => navigate("/library/curriculum")}>
            Curriculum <span className="tlp-crumb-sep">&rsaquo;</span> Just Talk <span className="tlp-crumb-sep">&rsaquo;</span> <span style={{ color: "#FF6B4A" }}>A1-A2 &middot; Speaking</span>
          </button>

          <div className="tlp-banner-hero" style={{ background: "#FFE6DD url(/curriculum/just-talk-a1-banner.png) right center / cover no-repeat" }}>
            <div className="tlp-cefr-tag" style={{ color: "#FF6B4A" }}>Speaking &middot; CEFR A1-A2 &middot; Only you can see this</div>
            <div className="tlp-banner-title">
              <span className="tlp-level-code" style={{ color: "#FF6B4A" }}>A1-A2</span>
              <span className="tlp-level-name">Just Talk</span>
            </div>
            <p className="tlp-description">For students who just want to talk: from their first English sentence to the end of A2, one 25-minute class at a time.</p>
            <JustTalkLevelTabs active="a1" />
          </div>

          <div className="tlp-stats-strip">
            <div className="tlp-stat-item">
              <div className="tlp-stat-icon tlp-stat-icon--blue"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7c-1.6-1.1-4.2-1.6-6.5-1.2v12.5c2.3-.4 4.9.1 6.5 1.2m0-12.5c1.6-1.1 4.2-1.6 6.5-1.2v12.5c-2.3-.4-4.9.1-6.5 1.2M12 7v11" /></svg></div>
              <div><div className="tlp-stat-title">{topicCount} Modules</div><div className="tlp-stat-sub">{classCount} lessons in 5 stages, plus a check-in after each stage</div></div>
            </div>
            <div className="tlp-stat-item">
              <div className="tlp-stat-icon tlp-stat-icon--coral"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.7" fill="currentColor" /></svg></div>
              <div><div className="tlp-stat-title">Speaking first</div><div className="tlp-stat-sub">25 minutes, the student talks most of the time</div></div>
            </div>
            <div className="tlp-stat-item">
              <div className="tlp-stat-icon tlp-stat-icon--lav"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 14.5s1.5 2 3.5 2 3.5-2 3.5-2" /><circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none" /><circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none" /></svg></div>
              <div><div className="tlp-stat-title">A board for every lesson</div><div className="tlp-stat-sub">Words, questions, sentence guides and an activity, one step at a time</div></div>
            </div>
          </div>

          {STAGES.map((st) => {
            const colors = STAGE_COLORS[st.lv] || STAGE_COLORS.A1;
            const check = !!BOARDS[`check-${st.n}`];
            const nClasses = st.topics.reduce((m, t) => m + t.classes.length, 0);
            return (
              <div key={st.n} className="tlp-toc jt-toc">
                <div className="tlp-toc-header" style={{ background: colors.color }}>
                  <div className="tlp-toc-eyebrow-row"><span className="tlp-toc-eyebrow-rule" /><span className="tlp-toc-eyebrow">Stage {st.n} &middot; {st.lv} &middot; {st.focus}</span></div>
                  <h2 className="tlp-toc-title">{st.name}</h2>
                  <p className="tlp-toc-sub">{st.topics.length} modules &middot; {nClasses} lessons &middot; 1 check-in</p>
                </div>
                <ul className="tlp-toc-list">
                  {st.topics.map((t) => {
                    const key = `t-${t.name}`;
                    const isOpen = open === key;
                    const ready = t.classes.some((c, i) => BOARDS[`${slug(t.name)}-${i + 1}`]);
                    return (
                      <li key={t.name} className={`tlp-toc-item ${isOpen ? "is-open" : ""}`}>
                        <div className="tlp-toc-row" onClick={() => setOpen(isOpen ? null : key)}>
                          <span className="tlp-toc-unit-label" style={{ color: colors.color, background: colors.light }}>Module {String(TOPIC_NUM[t.name]).padStart(2, "0")}</span>
                          <div className="tlp-toc-main">
                            <div className="tlp-toc-title-row">
                              <span className="tlp-toc-item-title">{t.name}</span>
                              <span className="tlp-toc-leader" />
                              {!ready && <span className="tlp-toc-page-tag">Coming soon</span>}
                            </div>
                            <div className="tlp-toc-focus">{t.classes.map((c, i) => NAMES[t.name]?.[i] || c[0]).join(" · ")}</div>
                          </div>
                          <span className="tlp-toc-chevron" style={isOpen ? { background: colors.color, color: "#fff" } : {}}>{chevron}</span>
                        </div>
                        <div className="tlp-toc-panel">
                          <div className="tlp-toc-panel-inner">
                            {t.classes.map(([title, pattern, task], i) => (
                              <div key={title} className={`tlp-toc-lesson-row ${ready ? "is-ready" : ""}`}>
                                <span className="tlp-toc-lesson-bullet">{i + 1}</span>
                                <div className="tlp-toc-lesson-main jt-lmain">
                                  <span className="tlp-toc-lesson-title">{NAMES[t.name]?.[i] || title}</span>
                                  <span className="tlp-toc-lesson-focus" title={task}><i className="jt-lq">&ldquo;{title}&rdquo;</i>{pattern}</span>
                                </div>
                                {BOARDS[`${slug(t.name)}-${i + 1}`]
                                  ? <button type="button" className="tlp-toc-lesson-open" onClick={() => openBoard(`/library/just-talk/${slug(t.name)}/${i + 1}`)}>Open board {arrow}</button>
                                  : <span className="tlp-toc-lesson-tag">Lesson</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  <li className={`tlp-toc-item ${open === `c-${st.n}` ? "is-open" : ""}`}>
                    <div className="tlp-toc-row" onClick={() => setOpen(open === `c-${st.n}` ? null : `c-${st.n}`)}>
                      <span className="tlp-toc-unit-label" style={{ color: colors.color, background: colors.light }}>Check-in</span>
                      <div className="tlp-toc-main">
                        <div className="tlp-toc-title-row"><span className="tlp-toc-item-title">Stage {st.n} check-in</span><span className="tlp-toc-leader" /></div>
                        <div className="tlp-toc-focus">Review the stage on one board</div>
                      </div>
                      <span className="tlp-toc-chevron" style={open === `c-${st.n}` ? { background: colors.color, color: "#fff" } : {}}>{chevron}</span>
                    </div>
                    <div className="tlp-toc-panel">
                      <div className="tlp-toc-panel-inner">
                        <div className={`tlp-toc-lesson-row is-test ${check ? "is-ready" : ""}`}>
                          <span className="tlp-toc-lesson-bullet">T</span>
                          <div className="tlp-toc-lesson-main jt-lmain">
                            <span className="tlp-toc-lesson-title">Stage {st.n} check-in</span>
                            <span className="tlp-toc-lesson-focus">Review the stage: words, questions and a longer talk</span>
                          </div>
                          {check
                            ? <button type="button" className="tlp-toc-lesson-open" onClick={() => openBoard(`/library/just-talk/stage-${st.n}/check-in`)}>Open board {arrow}</button>
                            : <span className="tlp-toc-lesson-tag">Review</span>}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Gate>
  );
}

const JT_HUB_CSS = `.tlp-toc.jt-toc { margin-bottom: 22px; }` + JT_LESSON_CSS;

export default JustTalkHub;

const CSS = `
.jt-shell { min-height: 100vh; background: #FBFAF7; color: #2B2A4A; font-family: system-ui, sans-serif; }
.jt-denied { padding: 60px 24px; text-align: center; color: #6F6A88; }
`;
