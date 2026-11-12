import { useEffect, useState } from "react";
import JustTalkLevelTabs from "./JustTalkLevelTabs.jsx";
import { openBoardWindow } from "./justTalkWindow.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { TLP_STYLES } from "./trackLevelStyles";
import { B1_STAGES, B1_THEMES, b1Slug } from "./justTalkB1Data";
import { B1_BOARDS } from "./justTalkB1Boards";

// Just Talk B1-B2: the owner's private speaking course for students who can already hold a conversation.
// 5 stages, 33 modules of 3 stand-alone lessons, a check-in after each stage. Each lesson opens as a Board.

const OWNER_EMAIL = "caldrin1999@gmail.com";
const COLORS = { B1: { color: "#2C7A6E", light: "#DDF1EC" }, B2: { color: "#5B3F8C", light: "#ECE5F5" } };
const chevron = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>;
const arrow = <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;

function openBoard(key) { openBoardWindow(`/library/just-talk-b1/${key}/board`); }

const CSS = `
.tlp-toc.jt-toc { margin-bottom: 22px; }
.jt-lmain { flex-direction: column; align-items: flex-start; gap: 2px; }
.jt-lmain .tlp-toc-lesson-title { white-space: normal; }
.jt-lmain .tlp-toc-lesson-focus { line-height: 1.45; white-space: normal; }
.jt-gram { color: #2C7A6E; font-weight: 700; }
.jt-theme { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .04em; color: #6B6880; background: #F1EFF7; border-radius: 6px; padding: 2px 7px; margin-left: 8px; vertical-align: middle; }
`;

export default function JustTalkB1Hub() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [open, setOpen] = useState(null);
  useEffect(() => {
    const id = "tlp-styles";
    document.getElementById(id)?.remove();
    const tag = document.createElement("style");
    tag.id = id;
    tag.textContent = TLP_STYLES;
    document.head.appendChild(tag);
  }, []);

  if (loading) return null;
  if (user?.email?.toLowerCase() !== OWNER_EMAIL) return <p style={{ padding: 40, textAlign: "center", color: "#888" }}>Not available.</p>;

  const modCount = B1_STAGES.reduce((n, st) => n + st.modules.length, 0);
  const lessonCount = modCount * 3;
  const built = B1_STAGES.flatMap((st) => st.modules.flatMap((m) => m.lessons)).filter((l) => B1_BOARDS[b1Slug(l.title)]).length;
  const startNum = B1_STAGES.map((st, i) => B1_STAGES.slice(0, i).reduce((n, x) => n + x.modules.length, 0));

  return (
    <div className="tlp-wrap">
      <style>{CSS}</style>
      <div className="tlp-blob tlp-blob--a" />
      <div className="tlp-blob tlp-blob--b" />
      <div className="tlp-stage">
        <button type="button" className="tlp-breadcrumb" onClick={() => navigate("/library/curriculum")}>
          Curriculum <span className="tlp-crumb-sep">&rsaquo;</span> Just Talk <span className="tlp-crumb-sep">&rsaquo;</span> <span style={{ color: "#2C7A6E" }}>B1-B2 &middot; Speaking</span>
        </button>

        <div className="tlp-banner-hero" style={{ background: "#DDF1EC url(/curriculum/just-talk-b1-banner.png) right center / cover no-repeat" }}>
          <div className="tlp-cefr-tag" style={{ color: "#2C7A6E" }}>Speaking &middot; CEFR B1-B2 &middot; Only you can see this</div>
          <div className="tlp-banner-title">
            <span className="tlp-level-code" style={{ color: "#2C7A6E" }}>B1-B2</span>
            <span className="tlp-level-name">Just Talk</span>
          </div>
          <p className="tlp-description">For students who can already hold a conversation: a surprising new topic every lesson, a grammar takeaway, and 25 minutes of real talk.</p>
          <JustTalkLevelTabs active="b1" />
        </div>

        <div className="tlp-stats-strip">
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--blue"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7c-1.6-1.1-4.2-1.6-6.5-1.2v12.5c2.3-.4 4.9.1 6.5 1.2m0-12.5c1.6-1.1 4.2-1.6 6.5-1.2v12.5c-2.3-.4-4.9.1-6.5 1.2M12 7v11" /></svg></div>
            <div><div className="tlp-stat-title">{modCount} Modules</div><div className="tlp-stat-sub">{lessonCount} lessons in 5 stages, plus a check-in after each stage</div></div>
          </div>
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--coral"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.7" fill="currentColor" /></svg></div>
            <div><div className="tlp-stat-title">Stand-alone lessons</div><div className="tlp-stat-sub">Teach any lesson in any order</div></div>
          </div>
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--lav"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5z" /><path d="M8 7h6M8 11h6" /></svg></div>
            <div><div className="tlp-stat-title">{built} boards ready</div><div className="tlp-stat-sub">Facts, words, grammar, discussion and a challenge</div></div>
          </div>
        </div>

        {B1_STAGES.map((st) => {
          const colors = COLORS[st.lv] || COLORS.B1;
          const checkReady = !!B1_BOARDS[`check-in-${st.n}`];
          return (
            <div key={st.n} className="tlp-toc jt-toc">
              <div className="tlp-toc-header" style={{ background: colors.color }}>
                <div className="tlp-toc-eyebrow-row"><span className="tlp-toc-eyebrow-rule" /><span className="tlp-toc-eyebrow">Stage {st.n} &middot; {st.lv}</span></div>
                <h2 className="tlp-toc-title">{st.name}</h2>
                <p className="tlp-toc-sub">{st.modules.length} modules &middot; {st.modules.length * 3} lessons &middot; 1 check-in</p>
              </div>
              <ul className="tlp-toc-list">
                {st.modules.map((m, mi) => {
                  const modNum = startNum[st.n - 1] + mi + 1;
                  const key = `m-${modNum}`;
                  const isOpen = open === key;
                  const ready = m.lessons.some((l) => B1_BOARDS[b1Slug(l.title)]);
                  return (
                    <li key={m.name} className={`tlp-toc-item ${isOpen ? "is-open" : ""}`}>
                      <div className="tlp-toc-row" onClick={() => setOpen(isOpen ? null : key)}>
                        <span className="tlp-toc-unit-label" style={{ color: colors.color, background: colors.light }}>Module {String(modNum).padStart(2, "0")}</span>
                        <div className="tlp-toc-main">
                          <div className="tlp-toc-title-row">
                            <span className="tlp-toc-item-title">{m.name}<span className="jt-theme">{B1_THEMES[m.theme]}</span></span>
                            <span className="tlp-toc-leader" />
                            {!ready && <span className="tlp-toc-page-tag">Coming soon</span>}
                          </div>
                          <div className="tlp-toc-focus">{m.lessons.map((l) => l.title).join(" · ")}</div>
                        </div>
                        <span className="tlp-toc-chevron" style={isOpen ? { background: colors.color, color: "#fff" } : {}}>{chevron}</span>
                      </div>
                      <div className="tlp-toc-panel">
                        <div className="tlp-toc-panel-inner">
                          {m.lessons.map((l, i) => {
                            const k = b1Slug(l.title);
                            const has = !!B1_BOARDS[k];
                            return (
                              <div key={k} className={`tlp-toc-lesson-row ${has ? "is-ready" : ""}`}>
                                <span className="tlp-toc-lesson-bullet">{i + 1}</span>
                                <div className="tlp-toc-lesson-main jt-lmain">
                                  <span className="tlp-toc-lesson-title">{l.title}</span>
                                  <span className="tlp-toc-lesson-focus">{l.hook} <span className="jt-gram">Grammar: {l.grammar}</span></span>
                                </div>
                                {has
                                  ? <button type="button" className="tlp-toc-lesson-open" style={{ background: "#3E5B3A" }} onClick={() => openBoard(k)}>Board {arrow}</button>
                                  : <span className="tlp-toc-lesson-tag">Lesson</span>}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </li>
                  );
                })}
                <li className={`tlp-toc-item ${open === `c-${st.n}` ? "is-open" : ""}`}>
                  <div className="tlp-toc-row" onClick={() => setOpen(open === `c-${st.n}` ? null : `c-${st.n}`)}>
                    <span className="tlp-toc-unit-label" style={{ color: colors.color, background: colors.light }}>Check-in</span>
                    <div className="tlp-toc-main">
                      <div className="tlp-toc-title-row"><span className="tlp-toc-item-title">Stage {st.n} check-in</span><span className="tlp-toc-leader" />{!checkReady && <span className="tlp-toc-page-tag">Coming soon</span>}</div>
                      <div className="tlp-toc-focus">{st.check}</div>
                    </div>
                    <span className="tlp-toc-chevron" style={open === `c-${st.n}` ? { background: colors.color, color: "#fff" } : {}}>{chevron}</span>
                  </div>
                  <div className="tlp-toc-panel">
                    <div className="tlp-toc-panel-inner">
                      <div className={`tlp-toc-lesson-row is-test ${checkReady ? "is-ready" : ""}`}>
                        <span className="tlp-toc-lesson-bullet">T</span>
                        <div className="tlp-toc-lesson-main jt-lmain">
                          <span className="tlp-toc-lesson-title">Stage {st.n} check-in</span>
                          <span className="tlp-toc-lesson-focus">Recap, word quiz, grammar review and a 2-minute talk</span>
                        </div>
                        {checkReady
                          ? <button type="button" className="tlp-toc-lesson-open" style={{ background: "#3E5B3A" }} onClick={() => openBoard(`check-in-${st.n}`)}>Board {arrow}</button>
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
  );
}
