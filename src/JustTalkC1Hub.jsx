import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { TLP_STYLES } from "./trackLevelStyles";
import JustTalkLevelTabs from "./JustTalkLevelTabs.jsx";
import { openBoardWindow } from "./justTalkWindow.js";
import { C1_STAGES, C1_BLOCKS, C1_FORMATS, c1Slug } from "./justTalkC1Data";
import { C1_S1 } from "./justTalkC1S1";

// Just Talk C1-C2: the owner's private speaking course for advanced students.
// Lesson pattern: Impromptu speech (wheel) > power language (trick, sound, phrases) > main task (6 formats)
// > hot seat > wrap-up. Modules without content show "Coming soon".

const OWNER_EMAIL = "caldrin1999@gmail.com";
const PLUM = "#5B3F8C";
const CONTENT = { ...C1_S1 };
const COLORS = { C1: { color: "#5B3F8C", light: "#EEE8F6" }, C2: { color: "#3E2A63", light: "#ECE6F5" } };
const chevron = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>;
const arrow = <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
const openBoard = (key) => openBoardWindow(`/library/just-talk-c1/${key}/board`);
const START = C1_STAGES.reduce((acc, st, i) => [...acc, (acc[i] || 0) + (i ? C1_STAGES[i - 1].modules.length : 0)], [0]).slice(1);
const blockOf = (n) => C1_BLOCKS.findIndex((b) => n >= b.mods[0] && n <= b.mods[1]);

const CSS = `
.tlp-toc.jt-toc { margin-bottom: 22px; }
.jt-lmain { flex-direction: column; align-items: flex-start; gap: 2px; }
.jt-lmain .tlp-toc-lesson-title { white-space: normal; }
.jt-lmain .tlp-toc-lesson-focus { line-height: 1.45; white-space: normal; }
.jt-fmt { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .04em; color: ${PLUM}; background: #EEE8F6; border-radius: 6px; padding: 2px 7px; margin-left: 8px; vertical-align: middle; }
.jt-block { font-size: 12.5px; color: #6E6480; padding: 10px 18px 0; }
.jt-block b { color: ${PLUM}; }
.jt-cp { color: #B07D12; font-weight: 700; }
.jt-c1-empty { background: #fff; border: 2px dashed #D9CFEA; border-radius: 20px; padding: 40px 24px; text-align: center; display: grid; justify-items: center; gap: 8px; margin-bottom: 26px; }
.jt-c1-empty .ic { width: 52px; height: 52px; border-radius: 50%; background: #EEE8F6; color: ${PLUM}; display: grid; place-items: center; }
.jt-c1-empty h2 { margin: 6px 0 0; font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 22px; color: #1B2A4A; }
.jt-c1-empty p { margin: 0; max-width: 46ch; font-size: 13.5px; font-weight: 500; color: #6B6E96; line-height: 1.55; }
`;

export default function JustTalkC1Hub() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const { user, loading } = useAuth();
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

  return (
    <div className="tlp-wrap">
      <style>{CSS}</style>
      <div className="tlp-blob tlp-blob--a" />
      <div className="tlp-blob tlp-blob--b" />
      <div className="tlp-stage">
        <button type="button" className="tlp-breadcrumb" onClick={() => navigate("/library/curriculum")}>
          Curriculum <span className="tlp-crumb-sep">&rsaquo;</span> Just Talk <span className="tlp-crumb-sep">&rsaquo;</span> <span style={{ color: PLUM }}>C1-C2 &middot; Speaking</span>
        </button>

        <div className="tlp-banner-hero" style={{ background: "#EEE8F6 url(/curriculum/just-talk-c1-banner.png) right center / cover no-repeat" }}>
          <div className="tlp-cefr-tag" style={{ color: PLUM }}>Speaking &middot; CEFR C1-C2 &middot; Only you can see this</div>
          <div className="tlp-banner-title">
            <span className="tlp-level-code" style={{ color: PLUM }}>C1-C2</span>
            <span className="tlp-level-name">Just Talk</span>
          </div>
          <p className="tlp-description">For advanced students who want to speak with more fluency, precision and persuasion: an impromptu speech, a real debate or dilemma, and a better second take.</p>
          <JustTalkLevelTabs active="c1" />
        </div>

        <div className="tlp-stats-strip">
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--blue"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 3v9l6.4 6.4" /></svg></div>
            <div><div className="tlp-stat-title">Impromptu speech</div><div className="tlp-stat-sub">Every lesson starts with 2-3 minutes on a surprise topic</div></div>
          </div>
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--coral"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
            <div><div className="tlp-stat-title">Six main-task formats</div><div className="tlp-stat-sub">Debate, dilemma, data, solve it, steelman, summarize</div></div>
          </div>
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--lav"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></svg></div>
            <div><div className="tlp-stat-title">Trick, sound, checkpoint</div><div className="tlp-stat-sub">A new speaking trick and sound every 3 modules, then a progress check</div></div>
          </div>
        </div>

        {C1_STAGES.map((st, si) => {
          const colors = COLORS[st.lv] || COLORS.C1;
          const written = st.modules.some((m) => m.lessons.length);
          const checkReady = !!CONTENT[`check-in-${st.n}`];
          return (
            <div key={st.n} className="tlp-toc jt-toc">
              <div className="tlp-toc-header" style={{ background: colors.color }}>
                <div className="tlp-toc-eyebrow-row"><span className="tlp-toc-eyebrow-rule" /><span className="tlp-toc-eyebrow">Stage {st.n} &middot; {st.lv}</span></div>
                <h2 className="tlp-toc-title">{st.name}</h2>
                <p className="tlp-toc-sub">{st.modules.length} modules &middot; {st.modules.length * 3} lessons &middot; 1 check-in{written ? "" : " · coming soon"}</p>
              </div>
              <ul className="tlp-toc-list">
                {st.modules.map((m, mi) => {
                  const modNum = START[si] + mi + 1;
                  const key = `m-${modNum}`;
                  const isOpen = open === key;
                  const ready = m.lessons.some(([title]) => CONTENT[c1Slug(title)]);
                  const bi = blockOf(modNum), bl = C1_BLOCKS[bi];
                  return (
                    <li key={m.name} className={`tlp-toc-item ${isOpen ? "is-open" : ""}`}>
                      <div className="tlp-toc-row" onClick={() => setOpen(isOpen ? null : key)}>
                        <span className="tlp-toc-unit-label" style={{ color: colors.color, background: colors.light }}>Module {String(modNum).padStart(2, "0")}</span>
                        <div className="tlp-toc-main">
                          <div className="tlp-toc-title-row">
                            <span className="tlp-toc-item-title">{m.name}<span className="jt-fmt">{C1_FORMATS[m.f]}</span></span>
                            <span className="tlp-toc-leader" />
                            {!ready && <span className="tlp-toc-page-tag">Coming soon</span>}
                          </div>
                          <div className="tlp-toc-focus">{m.lessons.length ? m.lessons.map(([t]) => t).join(" · ") : `Block ${bi + 1}: ${bl.trick.name}`}</div>
                        </div>
                        <span className="tlp-toc-chevron" style={isOpen ? { background: colors.color, color: "#fff" } : {}}>{chevron}</span>
                      </div>
                      <div className="tlp-toc-panel">
                        <div className="tlp-toc-panel-inner">
                          <div className="jt-block">Block {bi + 1} &middot; <b>Trick:</b> {bl.trick.name} &middot; <b>Sound:</b> {bl.sound.name}</div>
                          {m.lessons.map(([title, prompt], i) => {
                            const k = c1Slug(title);
                            const has = !!CONTENT[k];
                            const cp = modNum === bl.mods[1] && i === 2;
                            return (
                              <div key={k} className={`tlp-toc-lesson-row ${has ? "is-ready" : ""}`}>
                                <span className="tlp-toc-lesson-bullet">{i + 1}</span>
                                <div className="tlp-toc-lesson-main jt-lmain">
                                  <span className="tlp-toc-lesson-title">{title}{cp && <span className="jt-cp"> · Checkpoint</span>}</span>
                                  <span className="tlp-toc-lesson-focus">{prompt}</span>
                                </div>
                                {has
                                  ? <button type="button" className="tlp-toc-lesson-open" style={{ background: colors.color }} onClick={() => openBoard(k)}>Open board {arrow}</button>
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
                      <div className="tlp-toc-focus">3-minute impromptu, a review of the stage's tricks and sounds, a debate and a hot seat</div>
                    </div>
                    <span className="tlp-toc-chevron" style={open === `c-${st.n}` ? { background: colors.color, color: "#fff" } : {}}>{chevron}</span>
                  </div>
                  <div className="tlp-toc-panel">
                    <div className="tlp-toc-panel-inner">
                      <div className={`tlp-toc-lesson-row is-test ${checkReady ? "is-ready" : ""}`}>
                        <span className="tlp-toc-lesson-bullet">T</span>
                        <div className="tlp-toc-lesson-main jt-lmain">
                          <span className="tlp-toc-lesson-title">Stage {st.n} check-in</span>
                          <span className="tlp-toc-lesson-focus">Show what you can do with this stage's tricks</span>
                        </div>
                        {checkReady
                          ? <button type="button" className="tlp-toc-lesson-open" style={{ background: colors.color }} onClick={() => openBoard(`check-in-${st.n}`)}>Open board {arrow}</button>
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
