import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import KIDS_LESSONS from "./sparkTracks";
import TEENS_LESSONS from "./sparkTeensTracks";
import ADULTS_LESSONS from "./sparkAdultsTracks";

const ICON_PROPS = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

function QuestIcon({ title }) {
  if (title === "Picture Quest") {
    return (
      <svg {...ICON_PROPS}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 15l-5-4-4 3-3-2-6 5" />
      </svg>
    );
  }
  if (title === "Story Quest") {
    return (
      <svg {...ICON_PROPS}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13z" />
        <path d="M8 8h8M8 12h5" />
      </svg>
    );
  }
  if (title === "Action Quest") {
    return (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v6l-3 7M12 13l3 7M8 10l-3 3M16 10l3 3" />
      </svg>
    );
  }
  if (title === "Football") {
    return (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7l3.5 2.5-1.3 4H9.8l-1.3-4z" />
      </svg>
    );
  }
  if (title === "School") {
    return (
      <svg {...ICON_PROPS}>
        <path d="M2 9l10-5 10 5-10 5z" />
        <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      </svg>
    );
  }
  if (title === "Personality Types") {
    return (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h9" />
      </svg>
    );
  }
  if (title === "Travel & Adventure") {
    return (
      <svg {...ICON_PROPS}>
        <path d="M3 12l18-8-8 18-2-8-8-2z" />
      </svg>
    );
  }
  if (title === "Food & Restaurants") {
    return (
      <svg {...ICON_PROPS}>
        <path d="M6 3v7a2 2 0 0 0 2 2v9M6 3v9M9 3v7" />
        <path d="M16 3c-1.5 0-2 2-2 4.5S15 12 16 12v9" />
      </svg>
    );
  }
  return (
    <svg {...ICON_PROPS}>
      <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" /><path d="M14.5 15.5c2.5 0 4.5 1.8 4.5 4.5" />
    </svg>
  );
}

// SPARK trial lessons open as a standalone popup player, matching the
// FORGE/ASCEND/SHIFT chrome-less window.open pattern.
function openLesson(path) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1080, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    path,
    "sentencoSparkPlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

function openGuide(path) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(640, screenW - 40);
  const h = Math.min(840, screenH - 40);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    path,
    "sentencoSparkGuide",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

const AUDIENCES = {
  kids: {
    label: "Kids",
    lessons: KIDS_LESSONS,
    blurb: "Three 20-minute trial classes for kids, playful and picture-first, built to get a new student talking in the first two minutes.",
    lessonPath: (id) => `/library/spark/${id}`,
    guidePath: (id) => `/library/spark/${id}/guide`,
  },
  teens: {
    label: "Teens",
    lessons: TEENS_LESSONS,
    blurb: "Three 20-minute trial classes for teens, conversation-game mini-lessons about football, school, and friends that turn a short answer into real speaking practice.",
    lessonPath: (id) => `/library/spark/teens/${id}`,
    guidePath: (id) => `/library/spark/teens/${id}/guide`,
  },
  adults: {
    label: "Adults",
    lessons: ADULTS_LESSONS,
    blurb: "Three independent 20-minute trial classes for adults, each with its own topic and its own signature gimmick, so a learner never sees the same lesson twice.",
    lessonPath: (id) => `/library/spark/adults/${id}`,
    guidePath: (id) => `/library/spark/adults/${id}/guide`,
  },
};

export default function SparkHub() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [audience, setAudience] = useState(() => {
    const fromUrl = searchParams.get("sparkAud");
    return Object.keys(AUDIENCES).includes(fromUrl) ? fromUrl : "kids";
  });
  const config = AUDIENCES[audience];

  function selectAudience(key) {
    setAudience(key);
    const next = new URLSearchParams(searchParams);
    next.set("sparkAud", key);
    setSearchParams(next, { replace: true });
  }

  return (
    <div className="spkh-shell">
      <style>{CSS}</style>
      <div className="spkh-blob spkh-blob--a" />
      <div className="spkh-blob spkh-blob--b" />

      <div className="spkh-stage">
        <div className="spkh-hero-band">
          <div className="spkh-hero-kicker-row">
            <span className="spkh-hero-rule" />
            <span className="spkh-hero-kicker">Trial classes, kids, teens &amp; adults</span>
            <span className="spkh-hero-rule" />
          </div>
          <h1 className="spkh-title">Spark</h1>
          <p className="spkh-hero-blurb">{config.blurb}</p>

          <div className="spkh-audience-toggle">
            {Object.entries(AUDIENCES).map(([key, a]) => (
              <button
                key={key}
                type="button"
                className={`spkh-audience-btn ${audience === key ? "is-active" : ""}`}
                onClick={() => selectAudience(key)}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <div className="spkh-lessons-grid">
          {config.lessons.map((lesson) => (
            <div key={lesson.id} className="spkh-lesson-card">
              <div className="spkh-lesson-top">
                <span className="spkh-lesson-badge">{lesson.code}</span>
                <span className="spkh-lesson-length">{lesson.length}</span>
              </div>
              <div className="spkh-lesson-icon"><QuestIcon title={lesson.title} /></div>
              <h3 className="spkh-lesson-title">{lesson.title}</h3>
              <p className="spkh-lesson-desc">{lesson.coreAim}</p>
              <div className="spkh-lesson-foot">
                <button type="button" className="spkh-lesson-guidebtn" onClick={() => openGuide(config.guidePath(lesson.id))}>
                  Guide
                </button>
                <button type="button" className="spkh-lesson-startbtn" onClick={() => openLesson(config.lessonPath(lesson.id))}>
                  Start &rarr;
                </button>
              </div>
            </div>
          ))}

          <div className="spkh-lesson-card spkh-lesson-card--ghost">
            <div className="spkh-lesson-icon spkh-lesson-icon--ghost">+</div>
            <h3 className="spkh-lesson-title spkh-lesson-title--ghost">More quests coming</h3>
            <p className="spkh-lesson-desc">New trial lesson themes get added here as they're built.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800;900&family=Source+Serif+4:wght@500;600;700&family=Inter:wght@500;600;700;800&display=swap');

.spkh-shell {
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #FFFCF6;
  color: #1B2A4A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.spkh-shell * { box-sizing: border-box; }

.spkh-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.spkh-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,107,74,0.08); }
.spkh-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(27,42,74,0.06); }

.spkh-stage { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; padding: 30px 40px 70px; }

.spkh-hero-band {
  background: #FFE6DD;
  border-radius: 16px;
  padding: 22px 32px 24px;
  text-align: center;
  margin-bottom: 32px;
}
.spkh-hero-kicker-row { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 4px; }
.spkh-hero-rule { flex: 0 1 48px; height: 1px; background: rgba(27,42,74,0.22); }
.spkh-hero-kicker {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #E0502F;
}
.spkh-title {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(28px, 4vw, 38px);
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #1B2A4A;
  margin: 4px 0 12px;
  line-height: 1;
}
.spkh-hero-blurb {
  font-size: 13.5px;
  font-weight: 500;
  color: #6B6E96;
  margin: 0 auto 18px;
  max-width: 560px;
  line-height: 1.6;
}

.spkh-audience-toggle { display: inline-flex; background: #fff; border-radius: 999px; padding: 4px; gap: 4px; }
.spkh-audience-btn {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 13px;
  color: #6B6E96;
  background: transparent;
  border: none;
  border-radius: 999px;
  padding: 7px 20px;
  cursor: pointer;
}
.spkh-audience-btn.is-active { background: #FF6B4A; color: #fff; }

.spkh-lessons-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

.spkh-lesson-card {
  display: flex;
  flex-direction: column;
  gap: 9px;
  background: #FFFFFF;
  border: 1px solid #EDE6F4;
  border-radius: 16px;
  padding: 16px 16px 14px;
  min-height: 230px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(27,42,74,0.06);
}
.spkh-lesson-card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 5px; background: #FF6B4A; }
.spkh-lesson-card--ghost::before { background: transparent; }

.spkh-lesson-top { display: flex; align-items: center; justify-content: space-between; }
.spkh-lesson-badge {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 11.5px;
  color: #E0502F;
  background: #FFE6DD;
  border-radius: 999px;
  padding: 3px 9px;
}
.spkh-lesson-length {
  font-weight: 700;
  font-size: 10.5px;
  color: #6B6E96;
}

.spkh-lesson-icon {
  width: 100%;
  height: 50px;
  background: #FFE6DD;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF6B4A;
}
.spkh-lesson-icon--ghost { color: #D9CFE0; font-family: 'Source Serif 4', serif; font-size: 26px; background: transparent; border: 2px dashed #EDE6F4; }

.spkh-lesson-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 15.5px;
  color: #1B2A4A;
  margin: 0;
}
.spkh-lesson-title--ghost { color: #A6A2C0; }
.spkh-lesson-desc {
  font-weight: 500;
  font-size: 12px;
  color: #6B6E96;
  line-height: 1.4;
  margin: 0;
}

.spkh-lesson-foot {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid #EDE6F4;
  gap: 6px;
}
.spkh-lesson-guidebtn {
  font-weight: 700;
  font-size: 10.5px;
  color: #1B2A4A;
  background: #F3F0FB;
  border: 1px solid #EDE6F4;
  border-radius: 999px;
  padding: 5px 10px;
  white-space: nowrap;
  cursor: pointer;
}
.spkh-lesson-startbtn {
  font-weight: 700;
  font-size: 11px;
  color: #fff;
  background: #FF6B4A;
  border: none;
  border-radius: 999px;
  padding: 5px 11px;
  white-space: nowrap;
  cursor: pointer;
}

@media (max-width: 900px) {
  .spkh-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .spkh-lessons-grid { grid-template-columns: 1fr; }
}
`;
