import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SPARK_KIDS_LIST as KIDS_LESSONS } from "./sparkKidsData";
import { SPARK_TEENS_LIST as TEENS_LESSONS } from "./sparkTeensData";
import { SPARK_ADULTS_LIST as ADULTS_LESSONS } from "./sparkAdultsData";

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

const AUDIENCES = {
  kids: { label: "Kids", lessons: KIDS_LESSONS, art: "/curriculum/spark-kids-shared/title-bg.jpg", lessonPath: (id) => `/library/spark/${id}` },
  teens: { label: "Teens", lessons: TEENS_LESSONS, art: "/curriculum/spark-teens-shared/title-bg.jpg", lessonPath: (id) => `/library/spark/teens/${id}` },
  adults: { label: "Adults", lessons: ADULTS_LESSONS, art: "/curriculum/spark-adults-shared/title-bg.jpg", lessonPath: (id) => `/library/spark/adults/${id}` },
};

const LEVELS = [
  { key: "Beginner", stars: "★", note: "First words and simple sentences" },
  { key: "Intermediate", stars: "★★", note: "Longer answers and everyday talk" },
  { key: "Advanced", stars: "★★★", note: "Stories, opinions and reasons" },
];

function Seal() {
  return <div className="spkh-seal"><i>SPARKS</i><b>CLASS</b></div>;
}

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
      <div className="spkh-stage">
        <div className="spkh-banner">
          <h1 className="spkh-title">Sparks Class</h1>
          <p className="spkh-sub">New here? A Sparks Class is a short 20-minute lesson you can take on its own. We start with a quick chat to get to know you and hear why you want to learn English, then jump into something fun. Pick your age group and a level that feels right, and let's go!</p>
          <div className="spkh-aud" role="tablist" aria-label="Audience">
            {Object.entries(AUDIENCES).map(([key, a]) => (
              <button key={key} type="button" role="tab" aria-selected={audience === key} className={`spkh-aud-btn is-${key} ${audience === key ? "is-on" : ""}`} onClick={() => selectAudience(key)}>
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {LEVELS.map((lv) => (
          <div className="spkh-row" key={lv.key}>
            <div className="spkh-lvl">
              <div className="spkh-lvl-stars">{lv.stars}</div>
              <h3>{lv.key}</h3>
              <p>{lv.note}</p>
            </div>
            {config.lessons.filter((l) => l.level === lv.key).map((lesson) => (
              <div className="spkh-poster" key={lesson.id}>
                <div className="spkh-art" style={{ backgroundImage: `url(${config.art})` }}>
                  <Seal />
                  <h3><span className="spkh-hl">{lesson.title}</span></h3>
                </div>
                <div className="spkh-body">
                  <p>{lesson.coreAim}</p>
                  <div className="spkh-foot">
                    <span className="spkh-chip">5 + 15 min</span>
                    <button type="button" className="spkh-go" onClick={() => openLesson(config.lessonPath(lesson.id))}>Start &rarr;</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&display=swap');

.spkh-shell { min-height: 100%; width: 100%; flex-shrink: 0; background: #FFFCF6; color: #1B2A4A; font-family: 'Quicksand', sans-serif; }
.spkh-shell * { box-sizing: border-box; }
.spkh-stage { max-width: 1040px; margin: 0 auto; padding: 34px 34px 70px; }

.spkh-banner { position: relative; margin-bottom: 28px; padding: 34px 40px 30px; min-height: 268px; border-radius: 22px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; overflow: hidden;
  background-color: #FFE6DD; background-image: url(/curriculum/spark-banner.png), linear-gradient(135deg, #FFE6DD 0%, #FFF1D2 100%); background-size: cover, cover; background-position: center, center; background-repeat: no-repeat; }
.spkh-title { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 44px; line-height: 1; margin: 0; color: #1B2A4A; }
.spkh-sub { color: #3F4A6E; font-weight: 600; font-size: clamp(12.5px, 1.45vw, 14.5px); line-height: 1.55; margin: 0; max-width: min(520px, 56%); }

.spkh-aud { display: inline-flex; background: #fff; border: 1px solid #EDE6F4; border-radius: 999px; padding: 4px; gap: 4px; box-shadow: 0 6px 16px rgba(27,42,74,0.12); }
.spkh-aud-btn { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 14px; border: 0; background: transparent; border-radius: 999px; padding: 7px 22px; cursor: pointer; color: #6B6E96; }
.spkh-aud-btn.is-on.is-kids { background: #F2B300; color: #1B2A4A; }
.spkh-aud-btn.is-on.is-teens { background: #6C5CE7; color: #fff; }
.spkh-aud-btn.is-on.is-adults { background: #C4902F; color: #fff; }
.spkh-aud-btn:focus-visible, .spkh-go:focus-visible { outline: 3px solid #1B2A4A; outline-offset: 2px; }

.spkh-row { display: grid; grid-template-columns: 140px 1fr 1fr; gap: 18px; align-items: stretch; margin-bottom: 20px; }
.spkh-lvl { border-radius: 18px; background: #1B2A4A; color: #fff; padding: 16px 14px; display: flex; flex-direction: column; justify-content: center; text-align: center; }
.spkh-lvl-stars { color: #FFD84D; font-size: 20px; letter-spacing: 3px; }
.spkh-lvl h3 { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 20px; margin: 4px 0 0; }
.spkh-lvl p { margin: 6px 0 0; font-size: 12px; opacity: 0.8; font-weight: 600; line-height: 1.35; }

.spkh-poster { background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 8px 22px rgba(27,42,74,0.12); border: 1px solid #EDE6F4; display: flex; flex-direction: column; }
.spkh-art { position: relative; height: 150px; display: flex; align-items: center; justify-content: flex-end; padding: 0 16px; background-size: cover; background-position: left center; }
.spkh-art h3 { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 26px; line-height: 1.12; width: 56%; text-align: left; margin: 0; color: #1B2A4A; }
.spkh-hl { background: linear-gradient(transparent 55%, #FFD66B 55%, #FFD66B 92%, transparent 92%); -webkit-box-decoration-break: clone; box-decoration-break: clone; }
.spkh-seal { position: absolute; left: 12px; bottom: 12px; width: 62px; height: 62px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #1B2A4A; line-height: 1; background: linear-gradient(145deg, #FFD84D, #F2A900); clip-path: polygon(50% 0, 58% 8%, 69% 4%, 74% 14%, 85% 15%, 86% 26%, 96% 31%, 92% 42%, 100% 50%, 92% 58%, 96% 69%, 86% 74%, 85% 85%, 74% 86%, 69% 96%, 58% 92%, 50% 100%, 42% 92%, 31% 96%, 26% 86%, 15% 85%, 14% 74%, 4% 69%, 8% 58%, 0 50%, 8% 42%, 4% 31%, 14% 26%, 15% 15%, 26% 14%, 31% 4%, 42% 8%); }
.spkh-seal i { font-style: normal; font-size: 7px; letter-spacing: 0.14em; }
.spkh-seal b { font-size: 14px; }
.spkh-body { padding: 12px 16px 14px; display: flex; flex-direction: column; flex: 1; }
.spkh-body p { margin: 0 0 10px; font-size: 13px; color: #6B6E96; font-weight: 600; line-height: 1.4; }
.spkh-foot { margin-top: auto; display: flex; justify-content: space-between; align-items: center; }
.spkh-chip { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.06em; padding: 3px 10px; border-radius: 999px; background: #FFE6DD; color: #E0502F; }
.spkh-go { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 13px; border: 0; border-radius: 999px; background: #FF6B4A; color: #fff; padding: 8px 18px; cursor: pointer; box-shadow: 0 3px 0 rgba(150,40,15,0.3); }

@media (max-width: 700px) {
  .spkh-banner { background-image: linear-gradient(rgba(255,244,236,0.9), rgba(255,244,236,0.9)), url(/curriculum/spark-banner.png); }
  .spkh-sub { max-width: 100%; }
}
@media (max-width: 860px) {
  .spkh-row { grid-template-columns: 1fr 1fr; }
  .spkh-lvl { grid-column: 1 / -1; flex-direction: row; gap: 12px; justify-content: flex-start; align-items: center; text-align: left; padding: 10px 16px; }
  .spkh-lvl p { margin: 0; }
}
@media (max-width: 560px) {
  .spkh-stage { padding: 24px 16px 60px; }
  .spkh-banner { padding: 26px 18px 24px; }
  .spkh-title { font-size: 34px; }
  .spkh-row { grid-template-columns: 1fr; }
}
`;
