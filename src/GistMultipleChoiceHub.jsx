import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const LEVELS = ["A1", "A2", "B1", "B2"];

// Every lesson is authored: false for now -- no audio content exists yet.
// The hub is real; the lessons behind it are still "Coming soon" until
// scripts + audio are produced, matching the honesty of the rest of the
// Listening category grid.
const TRACKS = [
  {
    key: "home",
    level: "A1",
    emoji: "🏡",
    title: "Home & Family",
    desc: "Everyday moments with parents, siblings, and pets.",
    theme: "home",
    lessons: [
      "Weekend Plans",
      "The New Neighbor",
      "Lost at the Mall",
      "Rainy Day Plan",
      "Missing Pet",
    ],
  },
  {
    key: "school",
    level: "A1",
    emoji: "🏫",
    title: "School Life",
    desc: "Classrooms, teachers, and school day mix-ups.",
    theme: "school",
    lessons: [
      "The Science Fair",
      "Field Trip Day",
      "The Group Project",
      "Lost Homework",
      "The Substitute Teacher",
    ],
  },
  {
    key: "friends",
    level: "A2",
    emoji: "🎉",
    title: "Friends & Fun",
    desc: "Plans, parties, and figuring out what friends mean.",
    theme: "friends",
    lessons: [
      "The Surprise Party",
      "Sleepover Plans",
      "The Argument",
      "New Kid in Town",
      "The Group Chat",
    ],
  },
  {
    key: "outabout",
    level: "A2",
    emoji: "🛍️",
    title: "Out & About",
    desc: "Shops, parks, and getting around town.",
    theme: "outabout",
    lessons: [
      "Lost at the Park",
      "The Bus Stop",
      "Buying a Gift",
      "The Farmers Market",
      "Rainy Day Downtown",
    ],
  },
];

export default function GistMultipleChoiceHub() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [level, setLevel] = useState(() => {
    const fromUrl = searchParams.get("level");
    return LEVELS.includes(fromUrl) ? fromUrl : "A1";
  });
  const [openTrack, setOpenTrack] = useState(null);

  function selectLevel(lvl) {
    setLevel(lvl);
    setOpenTrack(null);
    const next = new URLSearchParams(searchParams);
    next.set("level", lvl);
    setSearchParams(next, { replace: true });
  }

  const tracks = TRACKS.filter((t) => t.level === level);

  return (
    <div className="gmc-page">
      <style>{CSS}</style>
      <div className="gmc-hero">
        <span className="gmc-eyebrow">Sentivo · Listening</span>
        <h1 className="gmc-title">Gist Multiple Choice</h1>
        <p className="gmc-sub">Play one short clip, ask one question, pick the right answer.</p>
      </div>

      <div className="gmc-level-row">
        {LEVELS.map((lvl) => (
          <button
            key={lvl}
            type="button"
            className={`gmc-level-chip ${level === lvl ? "is-active" : ""}`}
            onClick={() => selectLevel(lvl)}
          >
            {lvl}
          </button>
        ))}
      </div>

      {tracks.length === 0 ? (
        <div className="gmc-empty">
          <p className="gmc-empty-title">Nothing here yet</p>
          <p className="gmc-empty-desc">Tracks for this level are still being built. Check back soon.</p>
        </div>
      ) : (
        <div className="gmc-track-list">
          {tracks.map((track) => {
            const isOpen = openTrack === track.key;
            return (
              <div key={track.key} className={`gmc-track gmc-track--${track.theme} ${isOpen ? "is-open is-spanning" : ""}`}>
                <div
                  className="gmc-track-head"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenTrack(isOpen ? null : track.key)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setOpenTrack(isOpen ? null : track.key);
                  }}
                >
                  <div className="gmc-track-emoji-badge">{track.emoji}</div>
                  <div className="gmc-track-main">
                    <div className="gmc-track-title-row">
                      <p className="gmc-track-title">{track.title}</p>
                      <span className="gmc-track-level-tag">{track.level}</span>
                    </div>
                    <p className="gmc-track-desc">{track.desc}</p>
                  </div>
                  <span className="gmc-track-count">0/{track.lessons.length}</span>
                  <span className="gmc-track-chevron">▾</span>
                </div>
                <div className="gmc-track-lessons">
                  {track.lessons.map((lessonTitle, i) => (
                    <div key={lessonTitle} className="gmc-lesson-row is-locked">
                      <span className="gmc-lesson-num">{i + 1}</span>
                      <span className="gmc-lesson-title">{lessonTitle}</span>
                      <span className="gmc-lesson-status">Coming soon</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Quicksand:wght@500;600;700;800&family=IBM+Plex+Mono:wght@500&display=swap');

.gmc-page {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  border-radius: 26px;
  background-color: #FDF6EA;
  background-image: repeating-linear-gradient(90deg, rgba(184,121,31,0.14) 0px, rgba(184,121,31,0.14) 2px, transparent 2px, transparent 34px);
  box-shadow: 0 16px 32px rgba(58,46,31,0.12);
  padding: 28px 24px 48px;
  box-sizing: border-box;
}
.gmc-page * { box-sizing: border-box; }

.gmc-hero { text-align: center; margin-bottom: 6px; }
.gmc-eyebrow { font-family: 'IBM Plex Mono', monospace; font-weight: 500; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #B8791F; display: block; margin-bottom: 8px; }
.gmc-title { font-family: 'Luckiest Guy', cursive; font-weight: 400; letter-spacing: 0.02em; font-size: clamp(28px, 4.6vw, 38px); color: #3A2E1F; margin: 0 0 8px; }
.gmc-sub { font-family: 'Quicksand', sans-serif; font-size: 14px; color: #7A6B54; max-width: 440px; margin: 0 auto; line-height: 1.55; }

.gmc-level-row { display: flex; justify-content: center; gap: 8px; margin: 20px 0 26px; }
.gmc-level-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 800;
  font-size: 12px;
  width: 34px; height: 34px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: #fff;
  color: #A6987F;
  border: none;
  box-shadow: inset 0 0 0 1.5px #EFE6D3;
  cursor: pointer;
}
.gmc-level-chip.is-active { background: #E8A33D; color: #fff; box-shadow: none; }

.gmc-empty { text-align: center; padding: 40px 20px; }
.gmc-empty-title { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 15px; color: #3A2E1F; margin: 0 0 6px; }
.gmc-empty-desc { font-family: 'Quicksand', sans-serif; font-size: 13px; color: #A6987F; margin: 0; }

.gmc-track-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
@media (max-width: 620px) { .gmc-track-list { grid-template-columns: 1fr; } }

.gmc-track { background: var(--tint); border-radius: 20px; overflow: hidden; box-shadow: inset 0 0 0 2px var(--border); align-self: start; }
.gmc-track.is-spanning { grid-column: 1 / -1; }

.gmc-track-head { display: flex; align-items: center; gap: 14px; padding: 16px 18px; cursor: pointer; }
.gmc-track-emoji-badge {
  width: 46px; height: 46px;
  border-radius: 14px;
  background: var(--color);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
  box-shadow: 0 6px 0 var(--shadow-deep);
}
.gmc-track-main { flex: 1; }
.gmc-track-title-row { display: flex; align-items: center; gap: 8px; }
.gmc-track-title { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 15.5px; color: var(--ink); margin: 0; }
.gmc-track-level-tag { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--color); font-weight: 700; }
.gmc-track-desc { font-family: 'Quicksand', sans-serif; font-size: 12px; color: var(--ink-soft); margin: 2px 0 0; }
.gmc-track-count { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 11.5px; color: var(--color); white-space: nowrap; }
.gmc-track-chevron { font-size: 13px; color: var(--color); transition: transform 0.2s ease; flex-shrink: 0; }
.gmc-track.is-open .gmc-track-chevron { transform: rotate(180deg); }

.gmc-track-lessons { max-height: 0; overflow: hidden; transition: max-height 0.25s ease; background: #fff; }
.gmc-track.is-open .gmc-track-lessons { max-height: 400px; }

.gmc-lesson-row { display: flex; align-items: center; gap: 12px; padding: 11px 18px 11px 60px; border-top: 1px solid var(--tint); }
.gmc-lesson-num {
  width: 24px; height: 24px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11px;
  background: #F0EAE0; color: #C9BEA3;
  flex-shrink: 0;
}
.gmc-lesson-title { flex: 1; font-family: 'Quicksand', sans-serif; font-size: 13px; font-weight: 700; color: #B7AB8F; }
.gmc-lesson-status { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10.5px; letter-spacing: 0.03em; text-transform: uppercase; color: #C9BEA3; white-space: nowrap; }

.gmc-track--home { --color: #FF6B4A; --tint: #FFE9E1; --border: #FFD9CC; --shadow-deep: #C94F31; --ink: #4A2A1F; --ink-soft: #8A6B5C; }
.gmc-track--school { --color: #2E7DB0; --tint: #E3F1F9; --border: #C7E3F2; --shadow-deep: #23628A; --ink: #1F3A4A; --ink-soft: #5C7B8F; }
.gmc-track--friends { --color: #A24B87; --tint: #F5E3EF; --border: #EACEE1; --shadow-deep: #7D3868; --ink: #3A2033; --ink-soft: #85607A; }
.gmc-track--outabout { --color: #6B9A2A; --tint: #EAF3DB; --border: #D6E8B8; --shadow-deep: #557A20; --ink: #2E3A1B; --ink-soft: #6B7D52; }
`;
