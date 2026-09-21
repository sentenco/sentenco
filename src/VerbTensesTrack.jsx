import { getGroups } from "./vtTracks";
import VTTimeline from "./VTTimeline";

// Same per-unit accent as VerbTensesLesson.jsx (Present/Past/Future,
// teal/terracotta/indigo) -- kept in sync by index since getGroups()
// always returns the 3 units in that fixed order.
const UNIT_ACCENTS = ["#2A9D8F", "#E76F51", "#5E60CE"];

// Verb Tenses lessons open as a standalone popup player, matching the
// FORGE/ASCEND chrome-less window.open pattern -- an independent window,
// not embedded in the Library's tab/page flow.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/verb-tenses/${code}`,
    "sentencoVerbTenses",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function VerbTensesTrack() {
  const groups = getGroups();

  return (
    <div className="vt-shell">
      <style>{CSS}</style>
      <div className="vt-stage">
        <div className="vt-hero">
          <h1 className="vt-hero-title">Verb Tenses</h1>
          <p className="vt-hero-blurb">
            The 12 basic English tenses, one pair of lessons each: a Discussion lesson to build the meaning, form, and
            timeline, then a Test lesson to check it sticks.
          </p>
        </div>

        {groups.map((group, gi) => {
          const accent = UNIT_ACCENTS[gi] || UNIT_ACCENTS[0];
          return (
            <div key={group.title} className="vt-group" style={{ "--unit-accent": accent }}>
              <h2 className="vt-group-title">{group.title}</h2>
              <div className="vt-tenses-grid">
                {group.tenses.map((tense) => (
                  <div key={tense.number} className="vt-tense-card">
                    <div className="vt-tense-top">
                      <span className="vt-tense-num">Tense {tense.number}</span>
                      <div className="vt-tense-mini-timeline"><VTTimeline variant={tense.timelineVariant} /></div>
                    </div>
                    <h3 className="vt-tense-name">{tense.tenseName}</h3>
                    <div className="vt-tense-foot">
                      <button type="button" className="vt-lesson-btn vt-lesson-btn--a" onClick={() => openLesson(tense.lessonA.code)}>
                        {tense.lessonA.code} · Discussion
                      </button>
                      <button type="button" className="vt-lesson-btn vt-lesson-btn--b" onClick={() => openLesson(tense.lessonB.code)}>
                        {tense.lessonB.code} · Test
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.vt-shell {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FFF6E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.vt-shell * { box-sizing: border-box; }

.vt-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 36px 24px 60px;
}

.vt-hero { margin-bottom: 34px; }
.vt-hero-title {
  text-align: center;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  letter-spacing: 0.4px;
  color: #1A1A1A;
  margin: 0 0 10px;
  line-height: 1;
  text-shadow: 3px 3px 0 #E76F51;
}
.vt-hero-blurb {
  text-align: center;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A3226;
  margin: 0 auto;
  max-width: 620px;
  line-height: 1.55;
}

.vt-group { margin-bottom: 38px; }
.vt-group-title {
  display: inline-block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.4px;
  color: #FFFFFF;
  background: var(--unit-accent);
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 20px 6px;
  margin: 0 0 16px;
  transform: rotate(-1deg);
}

.vt-tenses-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.vt-tense-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #FFFFFF;
  border: 3px solid #1A1A1A;
  border-radius: 16px;
  padding: 12px 12px 12px;
  box-shadow: 5px 5px 0 #1A1A1A;
  transition: transform 0.16s cubic-bezier(.34,1.56,.64,1), box-shadow 0.16s ease;
}
.vt-tense-card:hover { transform: translate(-2px, -3px); box-shadow: 7px 8px 0 #1A1A1A; }

.vt-tense-top { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
.vt-tense-num {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #FFFFFF;
  background: var(--unit-accent);
  border: 1.5px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
}
.vt-tense-mini-timeline { width: 100%; max-width: 90px; }
.vt-tense-mini-timeline .vt-timeline-svg { width: 100%; height: auto; display: block; }

.vt-tense-name {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 17px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.2;
}

.vt-tense-foot { display: flex; flex-direction: column; gap: 6px; margin-top: auto; padding-top: 8px; border-top: 2px dashed #EFE7D3; }
.vt-lesson-btn {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  border: 2px solid #1A1A1A;
  border-radius: 8px;
  padding: 7px 10px;
  cursor: pointer;
  text-align: center;
  box-shadow: 2.5px 2.5px 0 #1A1A1A;
}
.vt-lesson-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(2.5px, 2.5px); }
.vt-lesson-btn--a { color: #1A1A1A; background: #FFFFFF; }
.vt-lesson-btn--b { color: #FFFFFF; background: var(--unit-accent); }

@media (max-width: 900px) {
  .vt-tenses-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .vt-tenses-grid { grid-template-columns: 1fr; }
}
`;
