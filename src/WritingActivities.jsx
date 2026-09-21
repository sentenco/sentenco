import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PROOFREADING_SETS from "./proofreadingData";
import STORY_MAKING_SETS from "./storyMakingData";
import MESSAGE_REPLY_SETS from "./messageReplyData";
import REGISTER_REWRITE_SETS from "./registerRewriteData";

export const ACTIVITY_TYPES = [
  {
    key: "proofreading",
    title: "Proofreading",
    icon: "✅",
    blurb: "Find and fix the mistakes in the paragraph.",
    hue: "gold",
    sets: PROOFREADING_SETS,
  },
  {
    key: "storyMaking",
    title: "Story Making",
    icon: "📖",
    blurb: "Look at the picture, use the words, and write a 5-sentence story.",
    hue: "sky",
    sets: STORY_MAKING_SETS,
  },
  {
    key: "messageReply",
    title: "Message Reply",
    icon: "💬",
    blurb: "Read the message, write a real reply, then compare with a sample.",
    hue: "coral",
    sets: MESSAGE_REPLY_SETS,
  },
  {
    key: "registerRewrite",
    title: "Register Rewrite",
    icon: "🔁",
    blurb: "Rewrite a message formally or casually.",
    hue: "mint",
    sets: REGISTER_REWRITE_SETS,
  },
];

const LEVEL_GROUPS = ["A1-A2", "B1-B2", "C1-C2"];

// "A1-A2" -> "a1a2", used for the wa-cat-level--a1a2/b1b2/c1c2 tint classes.
function levelSlug(cefrGroup) {
  return cefrGroup.replace(/-/g, "").toLowerCase();
}

// Activity types with a Teacher's Guide -- their topic cards show a
// separate "Guide" button next to "Start" instead of the whole card
// being one click-through button.
const HAS_GUIDE = ["proofreading", "storyMaking", "registerRewrite"];

function ProofreadingBanner() {
  return (
    <svg className="wa-banner" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="120" fill="#FFF3D9" />
      <rect x="36" y="18" width="150" height="84" rx="10" fill="#FFFFFF" />
      <rect x="52" y="36" width="118" height="8" rx="4" fill="#FCE0A0" />
      <line x1="52" y1="40" x2="170" y2="40" stroke="#E85A3D" strokeWidth="2.5" />
      <rect x="52" y="54" width="90" height="8" rx="4" fill="#FCE0A0" />
      <line x1="52" y1="58" x2="142" y2="58" stroke="#E85A3D" strokeWidth="2.5" />
      <rect x="52" y="76" width="110" height="8" rx="4" fill="#D9EFD9" />
      <path d="M56 80 l8 8 l16 -16" fill="none" stroke="#4CAF7A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(215,26) rotate(28)">
        <rect x="0" y="0" width="14" height="70" rx="4" fill="#E8A83D" />
        <path d="M0 0 L14 0 L7 -16 Z" fill="#A9720A" />
      </g>
      <circle cx="270" cy="86" r="20" fill="#FCE9BE" opacity="0.7" />
    </svg>
  );
}

function StoryMakingBanner() {
  return (
    <svg className="wa-banner" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="120" fill="#E1F3F3" />
      <rect x="36" y="20" width="110" height="80" rx="10" fill="#FFFFFF" />
      <rect x="46" y="30" width="90" height="60" rx="6" fill="#DCEEDD" />
      <circle cx="112" cy="46" r="9" fill="#FFC857" />
      <path d="M46 90 Q70 66 96 86 T136 90 Z" fill="#7FBF8C" />
      <rect x="164" y="34" width="118" height="8" rx="4" fill="#B8DCE8" />
      <rect x="164" y="52" width="98" height="8" rx="4" fill="#B8DCE8" />
      <rect x="164" y="70" width="108" height="8" rx="4" fill="#B8DCE8" />
      <rect x="164" y="88" width="66" height="8" rx="4" fill="#B8DCE8" />
      <g transform="translate(255,90) rotate(-20)">
        <rect x="0" y="0" width="12" height="46" rx="3" fill="#3E9DBF" />
        <path d="M0 0 L12 0 L6 -12 Z" fill="#2A6E85" />
      </g>
    </svg>
  );
}

function MessageReplyBanner() {
  return (
    <svg className="wa-banner" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="120" fill="#FFC3B0" />
      <rect x="30" y="18" width="150" height="40" rx="16" fill="#FFFFFF" />
      <rect x="46" y="32" width="90" height="7" rx="3.5" fill="#F5C4B8" />
      <rect x="46" y="43" width="60" height="7" rx="3.5" fill="#F5C4B8" />
      <rect x="140" y="64" width="150" height="40" rx="16" fill="#E85A3D" />
      <rect x="156" y="78" width="100" height="7" rx="3.5" fill="#FBC5B4" />
      <rect x="156" y="89" width="70" height="7" rx="3.5" fill="#FBC5B4" />
      <circle cx="40" cy="90" r="14" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}

function RegisterRewriteBanner() {
  return (
    <svg className="wa-banner" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="120" fill="#E3F6EC" />
      <rect x="26" y="16" width="110" height="88" rx="10" fill="#FFFFFF" />
      <path d="M42 34 q10 -6 20 0" stroke="#C3EEDD" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M42 50 q22 -8 44 2" stroke="#C3EEDD" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M42 66 q16 -6 32 0" stroke="#C3EEDD" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M42 82 q26 -8 52 2" stroke="#C3EEDD" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="160" cy="60" r="20" fill="#FFFFFF" />
      <path d="M152 60 h16 M160 52 l8 8 l-8 8" fill="none" stroke="#4CAF7A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="184" y="16" width="110" height="88" rx="10" fill="#4CAF7A" />
      <rect x="200" y="34" width="78" height="6" rx="3" fill="#D3F0DE" />
      <rect x="200" y="50" width="78" height="6" rx="3" fill="#D3F0DE" />
      <rect x="200" y="66" width="60" height="6" rx="3" fill="#D3F0DE" />
      <rect x="200" y="82" width="78" height="6" rx="3" fill="#D3F0DE" />
    </svg>
  );
}

const BANNERS = {
  proofreading: ProofreadingBanner,
  storyMaking: StoryMakingBanner,
  messageReply: MessageReplyBanner,
  registerRewrite: RegisterRewriteBanner,
};

// Opens one topic's activity as its own standalone popup window, matching
// the Editorial View / lesson-player pattern elsewhere in the app.
// Story Making's picture panel needs a wider window than Proofreading's
// single card.
function openTopicPlayer(typeKey, topicKey) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(typeKey === "storyMaking" ? 1000 : typeKey === "proofreading" ? 620 : typeKey === "registerRewrite" ? 660 : typeKey === "messageReply" ? 480 : 720, screenW - 40);
  const h = Math.min(typeKey === "proofreading" ? 520 : typeKey === "registerRewrite" ? 560 : typeKey === "messageReply" ? 760 : 700, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/writing/${typeKey}/${topicKey}/player`,
    `sentencoWritingPlayer_${typeKey}`,
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

// Register Rewrite topics carry several rounds, and each one opens as
// its own standalone one-page activity/window (no Back/Next carousel
// between rounds) -- this is what the numbered chips on the topic card
// call instead of openTopicPlayer.
function openTopicRound(typeKey, topicKey, roundIndex) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(660, screenW - 40);
  const h = Math.min(560, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/writing/${typeKey}/${topicKey}/player/${roundIndex}`,
    `sentencoWritingPlayer_${typeKey}`,
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

// Teacher's Guide opens as its own scrollable popup, not sized to the
// fixed player card since it's a document meant to be read, not a slide.
function openTopicGuide(typeKey, topicKey) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(680, screenW - 40);
  const h = Math.min(800, screenH - 60);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/writing/${typeKey}/${topicKey}/guide`,
    `sentencoWritingGuide_${typeKey}`,
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function WritingActivities({ query }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [typeKey, setTypeKey] = useState(() => searchParams.get("wType"));
  const [levelTab, setLevelTab] = useState(() => {
    const fromUrl = searchParams.get("wLevel");
    return LEVEL_GROUPS.includes(fromUrl) ? fromUrl : LEVEL_GROUPS[0];
  });
  const q = query.trim().toLowerCase();

  // Browser back/forward drives navigation instead of an in-page back
  // button. Each drill-down pushes a history entry, and popping it here
  // unwinds the matching piece of state.
  useEffect(() => {
    function onPopState(e) {
      const depth = e.state?.waDepth || 0;
      if (depth < 1) setTypeKey(null);
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Mirror the current drill-down into the URL (wType/wLevel) so a refresh
  // lands back on the same type + CEFR tab instead of the type picker.
  function openType(key) {
    window.history.pushState({ waDepth: 1 }, "");
    setTypeKey(key);
    setLevelTab(LEVEL_GROUPS[0]);
    const next = new URLSearchParams(searchParams);
    next.set("wType", key);
    next.set("wLevel", LEVEL_GROUPS[0]);
    setSearchParams(next, { replace: true });
  }

  function selectLevel(lvl) {
    setLevelTab(lvl);
    const next = new URLSearchParams(searchParams);
    next.set("wLevel", lvl);
    setSearchParams(next, { replace: true });
  }

  const type = ACTIVITY_TYPES.find((t) => t.key === typeKey);
  const topics = type ? type.sets : [];
  const levelTopics = topics.filter((t) => t.cefrGroup === levelTab);

  // Search results: a flat list of matching topics across every activity
  // type and CEFR level, bypassing the normal "pick a type, then a level"
  // drill-down (and taking priority even mid-drill-down) so the header
  // search box works no matter where in Writing you are.
  if (q) {
    const matches = ACTIVITY_TYPES.flatMap((t) =>
      t.sets
        .filter((topic) => topic.title.toLowerCase().includes(q) || topic.focus.toLowerCase().includes(q))
        .map((topic) => ({ topic, type: t }))
    );

    return (
      <div className="wa-panel">
        <style>{CSS}</style>
        <div className="wa-hero">
          <span className="wa-eyebrow">Sentenco · Writing</span>
          <span className="wa-pill">📔 Scrapbook Studio</span>
          <p className="wa-blurb">Results for "{query.trim()}"</p>
        </div>
        <div className="wa-row"></div>
        {matches.length === 0 ? (
          <p className="empty-msg">No Writing activities match "{query.trim()}".</p>
        ) : (
          <div className="wa-cat-grid">
            {matches.map(({ topic, type: t }) =>
              t.key === "registerRewrite" ? (
                <div key={`${t.key}-${topic.key}`} className={`wa-cat-card wa-cat-card--${t.hue} wa-cat-card--static`}>
                  <div className="wa-cat-top">
                    <span className={`wa-cat-level wa-cat-level--${levelSlug(topic.cefrGroup)}`}>{topic.cefrGroup}</span>
                    <span className="wa-cat-tag">Ready</span>
                  </div>
                  <span className="wa-cat-title">{topic.title}</span>
                  <span className="wa-cat-blurb">{topic.focus}</span>
                  <div className="rr-rounds-row">
                    <div className="rr-round-chips">
                      {topic.rounds.map((_, i) => (
                        <button key={i} type="button" className="rr-round-chip" onClick={() => openTopicRound(t.key, topic.key, i)}>{i + 1}</button>
                      ))}
                    </div>
                    <button type="button" className="rr-guide-link" onClick={() => openTopicGuide(t.key, topic.key)}>Guide</button>
                  </div>
                </div>
              ) : HAS_GUIDE.includes(t.key) ? (
                <div key={`${t.key}-${topic.key}`} className={`wa-cat-card wa-cat-card--${t.hue} wa-cat-card--static`}>
                  <div className="wa-cat-top">
                    <span className={`wa-cat-level wa-cat-level--${levelSlug(topic.cefrGroup)}`}>{topic.cefrGroup}</span>
                    <span className="wa-cat-tag">Ready</span>
                  </div>
                  <span className="wa-cat-title">{topic.title}</span>
                  <span className="wa-cat-blurb">{topic.focus}</span>
                  <div className="wa-cat-actions">
                    <button type="button" className="wa-cat-guide" onClick={() => openTopicGuide(t.key, topic.key)}>Guide</button>
                    <button type="button" className="wa-cat-cta wa-cat-cta--btn" onClick={() => openTopicPlayer(t.key, topic.key)}>Start →</button>
                  </div>
                </div>
              ) : (
                <button
                  key={`${t.key}-${topic.key}`}
                  type="button"
                  className={`wa-cat-card wa-cat-card--${t.hue}`}
                  onClick={() => openTopicPlayer(t.key, topic.key)}
                >
                  <div className="wa-cat-top">
                    <span className={`wa-cat-level wa-cat-level--${levelSlug(topic.cefrGroup)}`}>{topic.cefrGroup}</span>
                    <span className="wa-cat-tag">Ready</span>
                  </div>
                  <span className="wa-cat-title">{topic.title}</span>
                  <span className="wa-cat-blurb">{topic.focus}</span>
                  <span className="wa-cat-cta">Start →</span>
                </button>
              )
            )}
          </div>
        )}
      </div>
    );
  }

  if (type) {
    return (
      <div className="wa-panel">
        <style>{CSS}</style>
        <div className="wa-hero">
          <span className="wa-eyebrow">Sentenco · Writing</span>
          <span className={`wa-pill wa-pill--${type.hue}`}>{type.title}</span>
          <p className="wa-blurb">{type.blurb}</p>
        </div>
        <div className="wa-row"></div>
        <div className={`wa-level-tabs wa-level-tabs--${type.hue}`}>
          {LEVEL_GROUPS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              className={`wa-level-tab ${levelTab === lvl ? "is-active" : ""}`}
              onClick={() => selectLevel(lvl)}
            >
              {lvl}
            </button>
          ))}
        </div>
        <div className="wa-cat-grid">
          {levelTopics.map((t) =>
            type.key === "registerRewrite" ? (
              <div key={t.key} className={`wa-cat-card wa-cat-card--${type.hue} wa-cat-card--static`}>
                <div className="wa-cat-top">
                  <span className={`wa-cat-level wa-cat-level--${levelSlug(t.cefrGroup)}`}>{t.cefrGroup}</span>
                  <span className="wa-cat-tag">Ready</span>
                </div>
                <span className="wa-cat-title">{t.title}</span>
                <span className="wa-cat-blurb">{t.focus}</span>
                <div className="rr-rounds-row">
                  <div className="rr-round-chips">
                    {t.rounds.map((_, i) => (
                      <button key={i} type="button" className="rr-round-chip" onClick={() => openTopicRound(typeKey, t.key, i)}>{i + 1}</button>
                    ))}
                  </div>
                  <button type="button" className="rr-guide-link" onClick={() => openTopicGuide(typeKey, t.key)}>Guide</button>
                </div>
              </div>
            ) : HAS_GUIDE.includes(type.key) ? (
              <div key={t.key} className={`wa-cat-card wa-cat-card--${type.hue} wa-cat-card--static`}>
                <div className="wa-cat-top">
                  <span className={`wa-cat-level wa-cat-level--${levelSlug(t.cefrGroup)}`}>{t.cefrGroup}</span>
                  <span className="wa-cat-tag">Ready</span>
                </div>
                <span className="wa-cat-title">{t.title}</span>
                <span className="wa-cat-blurb">{t.focus}</span>
                <div className="wa-cat-actions">
                  <button type="button" className="wa-cat-guide" onClick={() => openTopicGuide(typeKey, t.key)}>Guide</button>
                  <button type="button" className="wa-cat-cta wa-cat-cta--btn" onClick={() => openTopicPlayer(typeKey, t.key)}>Start →</button>
                </div>
              </div>
            ) : (
              <button key={t.key} type="button" className={`wa-cat-card wa-cat-card--${type.hue}`} onClick={() => openTopicPlayer(typeKey, t.key)}>
                <div className="wa-cat-top">
                  <span className={`wa-cat-level wa-cat-level--${levelSlug(t.cefrGroup)}`}>{t.cefrGroup}</span>
                  <span className="wa-cat-tag">Ready</span>
                </div>
                <span className="wa-cat-title">{t.title}</span>
                <span className="wa-cat-blurb">{t.focus}</span>
                <span className="wa-cat-cta">Start →</span>
              </button>
            )
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="wa-panel">
      <style>{CSS}</style>
      <div className="wa-hero">
        <span className="wa-eyebrow">Sentenco · Writing</span>
        <span className="wa-pill">📔 Scrapbook Studio</span>
        <p className="wa-blurb">Each activity below focuses on a specific writing skill, from fixing mistakes to replying to a real message.</p>
      </div>
      <div className="wa-row"></div>
      <div className="wa-block-grid">
        {ACTIVITY_TYPES.map((t) => {
          const Banner = BANNERS[t.key];
          return (
          <button key={t.key} type="button" className={`wa-block wa-block--${t.hue}`} onClick={() => openType(t.key)}>
            <span className="wa-tape"></span>
            <Banner />
            <div className="wa-block-body">
              <h3 className="wa-block-title">{t.title}</h3>
              <p className="wa-block-blurb">{t.blurb}</p>
            </div>
          </button>
          );
        })}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.wa-panel {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  font-family: 'Karla', sans-serif;
  position: relative;
  border-radius: 28px;
  padding: clamp(24px, 3.4vw, 40px) clamp(18px, 3vw, 32px) clamp(30px, 4vw, 44px);
  background: url('/writing-scrapbook-bg.jpg') center top / cover no-repeat, linear-gradient(160deg, #FFF8EF 0%, #FFF1E6 100%);
  overflow: hidden;
}
.wa-panel * { box-sizing: border-box; }

.wa-hero { text-align: center; position: relative; z-index: 1; }
.wa-eyebrow {
  display: block;
  font-family: 'Karla', sans-serif;
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #FF8A75;
  margin-bottom: 10px;
}
.wa-pill {
  display: inline-block;
  font-family: 'Caveat', cursive;
  font-weight: 700;
  font-size: clamp(30px, 3.6vw, 40px);
  color: #EF6F5C;
  background: rgba(255,138,117,0.14);
  border-radius: 999px;
  padding: 6px 26px;
  transform: rotate(-1.5deg);
}
.wa-pill--gold { color: #A9720A; background: rgba(232,168,61,0.20); }
.wa-pill--sky { color: #2A6E85; background: rgba(62,157,191,0.16); }
.wa-pill--coral { color: #B8391F; background: rgba(232,90,61,0.16); }
.wa-pill--mint { color: #2F7A50; background: rgba(76,175,122,0.16); }
.wa-blurb {
  width: fit-content;
  max-width: 520px;
  font-size: 14px;
  font-weight: 600;
  color: #6B5D52;
  margin: 14px auto 0;
  padding: 7px 20px;
  background: rgba(255,248,239,0.5);
  border-radius: 999px;
  line-height: 1.5;
}

.wa-row { position: relative; height: 2px; width: 100%; max-width: 700px; margin: clamp(22px, 2.8vw, 32px) auto; background: #F5D9CC; z-index: 1; }
.wa-row::before, .wa-row::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #FF8A75; }
.wa-row::before { left: 0; }
.wa-row::after { right: 0; }

.wa-block-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px 22px; max-width: 760px; margin: 0 auto; width: 100%; position: relative; z-index: 1; }
.wa-block {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
  background: #FFFFFF;
  border: none;
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
  overflow: visible;
  box-shadow: 0 10px 20px rgba(239,111,92,0.14);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  position: relative;
}
.wa-block:nth-child(1) { transform: rotate(-1deg); }
.wa-block:nth-child(2) { transform: rotate(1deg); }
.wa-block:nth-child(3) { transform: rotate(1deg); }
.wa-block:nth-child(4) { transform: rotate(-1deg); }
.wa-block:hover { transform: translateY(-4px) rotate(0deg); box-shadow: 0 16px 30px rgba(239,111,92,0.2); }
.wa-tape {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%) rotate(-3deg);
  width: 68px; height: 22px; opacity: 0.9; z-index: 2;
}
.wa-block--gold .wa-tape { background: repeating-linear-gradient(45deg, #FFD166, #FFD166 6px, #FFE29E 6px, #FFE29E 12px); }
.wa-block--sky .wa-tape { background: repeating-linear-gradient(45deg, #6EC3E0, #6EC3E0 6px, #A6DCEC 6px, #A6DCEC 12px); }
.wa-block--coral .wa-tape { background: repeating-linear-gradient(45deg, #FF8A75, #FF8A75 6px, #FFB3A3 6px, #FFB3A3 12px); }
.wa-block--mint .wa-tape { background: repeating-linear-gradient(45deg, #6FCF97, #6FCF97 6px, #A3E4BC 6px, #A3E4BC 12px); }
.wa-banner { display: block; width: 100%; height: auto; overflow: hidden; border-radius: 4px 4px 0 0; }
.wa-block-body { padding: 18px 20px 20px; }
.wa-block-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 26px; margin: 0 0 6px; color: #4A3F3A; }
.wa-block-blurb { font-size: 13px; font-weight: 500; color: #A9836F; margin: 0; line-height: 1.5; }

.wa-level-tabs { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; justify-content: center; position: relative; z-index: 1; }
.wa-level-tab {
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #A9836F;
  background: #FFFFFF;
  border: 1px solid #F5D9CC;
  border-radius: 999px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.wa-level-tab:hover { border-color: #EF6F5C; color: #EF6F5C; }
.wa-level-tab.is-active { background: #EF6F5C; border-color: #EF6F5C; color: #FFFFFF; }
.wa-level-tabs--gold .wa-level-tab:hover { border-color: #E8A83D; color: #A9720A; }
.wa-level-tabs--gold .wa-level-tab.is-active { background: #E8A83D; border-color: #E8A83D; color: #4A3400; }
.wa-level-tabs--sky .wa-level-tab:hover { border-color: #3E9DBF; color: #2A6E85; }
.wa-level-tabs--sky .wa-level-tab.is-active { background: #3E9DBF; border-color: #3E9DBF; color: #FFFFFF; }
.wa-level-tabs--coral .wa-level-tab:hover { border-color: #EF6F5C; color: #B8391F; }
.wa-level-tabs--coral .wa-level-tab.is-active { background: #EF6F5C; border-color: #EF6F5C; color: #FFFFFF; }
.wa-level-tabs--mint .wa-level-tab:hover { border-color: #4CAF7A; color: #2F7A50; }
.wa-level-tabs--mint .wa-level-tab.is-active { background: #4CAF7A; border-color: #4CAF7A; color: #FFFFFF; }

.wa-cat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 260px)); gap: 18px; justify-content: center; width: 100%; position: relative; z-index: 1; }
.wa-cat-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: #FFFFFF;
  border: 1px solid var(--wac-border, #F5D9CC);
  border-radius: 14px;
  padding: 18px 18px 16px;
  cursor: pointer;
  box-shadow: 0 8px 18px var(--wac-shadow, rgba(239,111,92,0.10));
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.wa-cat-card:hover { transform: translateY(-3px); box-shadow: 0 14px 26px var(--wac-shadow-hover, rgba(239,111,92,0.18)); border-color: var(--wac-accent, #EF6F5C); }
.wa-cat-card--static { cursor: default; }
.wa-cat-card--static:hover { transform: none; box-shadow: 0 8px 18px var(--wac-shadow, rgba(239,111,92,0.10)); border-color: var(--wac-border, #F5D9CC); }

.wa-cat-actions { margin-top: auto; display: flex; align-items: center; gap: 8px; width: 100%; }
.wa-cat-guide {
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 11.5px;
  color: var(--wac-accent, #EF6F5C); background: var(--wac-icon-bg, rgba(239,111,92,0.10));
  border: none; border-radius: 999px; padding: 7px 14px; cursor: pointer;
}
.wa-cat-guide:hover { filter: brightness(0.95); }
.wa-cat-cta--btn { border: none; cursor: pointer; align-self: auto; margin-top: 0; }

.wa-cat-card--gold  { --wac-accent: #A9720A; --wac-icon-bg: rgba(232,168,61,0.22); --wac-border: #FCE4B0; --wac-shadow: rgba(154,90,22,0.10); --wac-shadow-hover: rgba(154,90,22,0.16); }
.wa-cat-card--sky   { --wac-accent: #2A6E85; --wac-icon-bg: rgba(62,157,191,0.14); --wac-border: #C7E6EE; --wac-shadow: rgba(30,90,120,0.10); --wac-shadow-hover: rgba(30,90,120,0.16); }
.wa-cat-card--coral { --wac-accent: #B8391F; --wac-icon-bg: rgba(255,138,117,0.16); --wac-border: #FFD9CC; --wac-shadow: rgba(200,70,45,0.10); --wac-shadow-hover: rgba(200,70,45,0.16); }
.wa-cat-card--mint  { --wac-accent: #2F7A50; --wac-icon-bg: rgba(76,175,122,0.16); --wac-border: #C3EEDD; --wac-shadow: rgba(20,107,78,0.10); --wac-shadow-hover: rgba(20,107,78,0.16); }

/* Register Rewrite is the only "mint" activity type -- give its card a
   bit more depth (top accent, layered shadow, hover lift) without
   touching the other activity types' shared .wa-cat-card look. */
.wa-cat-card--mint {
  position: relative;
  background: linear-gradient(180deg, #FFFFFF 0%, #FCFEFC 100%);
  box-shadow: 0 1px 1px rgba(20,107,78,0.05), 0 8px 16px rgba(20,107,78,0.07), 0 22px 34px rgba(20,107,78,0.07);
}
.wa-cat-card--mint::before {
  content: ""; position: absolute; inset: 0 0 auto 0; height: 4px;
  border-radius: 14px 14px 0 0;
  background: linear-gradient(90deg, #6FCF97, #2F7A50);
}
.wa-cat-card--mint:hover {
  transform: translateY(-4px);
  box-shadow: 0 1px 1px rgba(20,107,78,0.06), 0 14px 22px rgba(20,107,78,0.11), 0 30px 46px rgba(20,107,78,0.11);
}

/* Proofreading is the only "gold" activity type -- same depth pass. */
.wa-cat-card--gold {
  position: relative;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFCF6 100%);
  box-shadow: 0 1px 1px rgba(154,90,22,0.05), 0 8px 16px rgba(154,90,22,0.07), 0 22px 34px rgba(154,90,22,0.07);
}
.wa-cat-card--gold::before {
  content: ""; position: absolute; inset: 0 0 auto 0; height: 4px;
  border-radius: 14px 14px 0 0;
  background: linear-gradient(90deg, #FFD166, #A9720A);
}
.wa-cat-card--gold:hover {
  transform: translateY(-4px);
  box-shadow: 0 1px 1px rgba(154,90,22,0.06), 0 14px 22px rgba(154,90,22,0.11), 0 30px 46px rgba(154,90,22,0.11);
}

/* Same depth pass for Story Making (sky) and Message Reply (coral). */
.wa-cat-card--sky {
  position: relative;
  background: linear-gradient(180deg, #FFFFFF 0%, #F9FDFE 100%);
  box-shadow: 0 1px 1px rgba(30,90,120,0.05), 0 8px 16px rgba(30,90,120,0.07), 0 22px 34px rgba(30,90,120,0.07);
}
.wa-cat-card--sky::before {
  content: ""; position: absolute; inset: 0 0 auto 0; height: 4px;
  border-radius: 14px 14px 0 0;
  background: linear-gradient(90deg, #6EC3E0, #2A6E85);
}
.wa-cat-card--sky:hover {
  transform: translateY(-4px);
  box-shadow: 0 1px 1px rgba(30,90,120,0.06), 0 14px 22px rgba(30,90,120,0.11), 0 30px 46px rgba(30,90,120,0.11);
}

.wa-cat-card--coral {
  position: relative;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFAF8 100%);
  box-shadow: 0 1px 1px rgba(200,70,45,0.05), 0 8px 16px rgba(200,70,45,0.07), 0 22px 34px rgba(200,70,45,0.07);
}
.wa-cat-card--coral::before {
  content: ""; position: absolute; inset: 0 0 auto 0; height: 4px;
  border-radius: 14px 14px 0 0;
  background: linear-gradient(90deg, #FF8A75, #B8391F);
}
.wa-cat-card--coral:hover {
  transform: translateY(-4px);
  box-shadow: 0 1px 1px rgba(200,70,45,0.06), 0 14px 22px rgba(200,70,45,0.11), 0 30px 46px rgba(200,70,45,0.11);
}

.wa-cat-level {
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.02em;
  border-radius: 999px; padding: 5px 11px;
}
.wa-cat-level--a1a2 { color: #2F7A50; background: rgba(76,175,122,0.16); }
.wa-cat-level--b1b2 { color: #2A6E85; background: #E1F1F6; }
.wa-cat-level--c1c2 { color: #B8391F; background: #FFE4DC; }

.rr-rounds-row {
  margin-top: auto; width: 100%; display: flex; align-items: center; justify-content: space-between;
  gap: 10px; padding-top: 14px; border-top: 1px dashed #C3EEDD;
}
.rr-round-chips { display: flex; gap: 7px; }
.rr-round-chip {
  width: 30px; height: 30px; border-radius: 50%; border: none;
  background: linear-gradient(180deg, #DFF3E7 0%, #CDEEDC 100%);
  color: #2F7A50; font-family: 'Karla', sans-serif; font-weight: 800; font-size: 13px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(47,122,80,0.14);
  transition: transform 0.14s ease, box-shadow 0.14s ease, background 0.14s ease;
}
.rr-round-chip:hover {
  transform: translateY(-2px);
  background: linear-gradient(180deg, #6FCF97 0%, #2F7A50 100%);
  color: #fff;
  box-shadow: 0 5px 10px rgba(31,90,58,0.28);
}
.rr-round-chip:active { transform: translateY(0); }
.rr-guide-link {
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 11.5px;
  color: #A9836F; background: #F5EEE4; border: none; border-radius: 999px;
  padding: 8px 13px; cursor: pointer; white-space: nowrap;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
  transition: background 0.14s ease;
}
.rr-guide-link:hover { background: #EFE2D2; }

.wa-cat-top { display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 12px; }
.wa-cat-tag {
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--wac-accent, #EF6F5C);
  background: var(--wac-icon-bg, rgba(239,111,92,0.10));
  border-radius: 999px;
  padding: 4px 10px;
}
.wa-cat-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 21px; color: #4A3F3A; margin-bottom: 4px; line-height: 1.2; }
.wa-cat-blurb { font-size: 12.5px; font-weight: 500; color: #A9836F; line-height: 1.45; margin-bottom: 18px; }
.wa-cat-cta {
  margin-top: auto;
  align-self: flex-start;
  font-family: 'Karla', sans-serif;
  font-weight: 800;
  font-size: 12px;
  color: #FFFFFF;
  background: var(--wac-accent, #EF6F5C);
  border-radius: 999px;
  padding: 7px 15px;
}

@media (max-width: 560px) {
  .wa-block-grid, .wa-cat-grid { grid-template-columns: 1fr; }
}
`;
