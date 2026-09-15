import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TEENS_LEVELS } from "./teensCurriculumData";
import { ADULTS_LEVELS } from "./adultsCurriculumData";

const KIDS_LEVELS = {
  A1: {
    code: "A1",
    name: "Discover",
    tag: "Start here",
    accent: "coral",
    description: "Letters, phonics, and the first words and phrases to say hello, count, and talk about everyday life.",
  },
  A2: {
    code: "A2",
    name: "Soar",
    tag: "Next step",
    accent: "navy",
    description: "Longer sentences, more tenses, and the independence to handle everyday situations with confidence.",
  },
};

const AUDIENCES = [
  { id: "kids", label: "Kids", age: "6–12", kicker: "Kids track · Ages 6 to 12", levels: KIDS_LEVELS },
  { id: "teens", label: "Teens", age: "13–17", kicker: "Teens track · Ages 13 to 17", levels: TEENS_LEVELS },
  { id: "adults", label: "Adults", age: "18+", kicker: "Adults track · Ages 18+", levels: ADULTS_LEVELS },
];

export default function CurriculumOverview({ onSelectLevel }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [audience, setAudience] = useState(() => {
    const fromUrl = searchParams.get("curAud");
    return AUDIENCES.some((a) => a.id === fromUrl) ? fromUrl : "kids";
  });
  const navigate = useNavigate();

  function selectAudience(id) {
    setAudience(id);
    const next = new URLSearchParams(searchParams);
    next.set("curAud", id);
    setSearchParams(next, { replace: true });
  }

  useEffect(() => {
    const styleId = "co-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  const current = AUDIENCES.find((a) => a.id === audience) || AUDIENCES[0];
  const levels = [current.levels.A1, current.levels.A2];

  function openLevel(code) {
    if (audience === "kids") {
      onSelectLevel && onSelectLevel(code);
    } else {
      navigate(`/library/curriculum/${audience}/${code}`);
    }
  }

  return (
    <div className="co-wrap">
      <div className="co-blob co-blob--a" />
      <div className="co-blob co-blob--b" />

      <div className="co-stage">
        <div className={`co-hero-band ${audience !== "kids" ? "co-hero-band--navy" : ""}`}>
          <div className="co-hero-kicker-row">
            <span className="co-hero-rule" />
            <span className={`co-hero-kicker ${audience !== "kids" ? "co-hero-kicker--navy" : ""}`}>{current.kicker}</span>
            <span className="co-hero-rule" />
          </div>
          <h1 className="co-title">Curriculum</h1>

          <div className="co-stat-row">
            <div className="co-stat"><div className="co-stat-num co-stat-num--coral">2</div><div className="co-stat-label">Levels</div></div>
            <div className="co-stat"><div className="co-stat-num co-stat-num--navy">24</div><div className="co-stat-label">Units</div></div>
            <div className="co-stat"><div className="co-stat-num co-stat-num--coral">144</div><div className="co-stat-label">Lessons</div></div>
          </div>

          <div className="co-audience-toggle">
            {AUDIENCES.map((a) => (
              <button
                key={a.id}
                type="button"
                className={`co-audience-btn ${audience === a.id ? "is-active" : ""}`}
                onClick={() => selectAudience(a.id)}
              >
                {a.label} <span className="co-audience-age">{a.age}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="co-levels-grid">
          {levels.map((lv) => (
            <div
              key={lv.code}
              className={`co-level-card co-level-card--${lv.accent}`}
              onClick={() => openLevel(lv.code)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLevel(lv.code)}
            >
              <span className="co-level-watermark">{lv.code}</span>
              <div className="co-level-top">
                <div className="co-level-code">{lv.code}</div>
                <span className="co-level-tag">{lv.tag}</span>
              </div>
              <div className="co-level-name">{lv.name}</div>
              <p className="co-level-desc">{lv.description}</p>
              <div className="co-level-foot">
                <span className="co-level-units"><b>12</b> units</span>
                <span className="co-level-cta">View curriculum &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800;900&family=Source+Serif+4:wght@500;600;700&family=Inter:wght@500;600;700;800&display=swap');

.co-wrap {
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #FFFCF6;
  color: #1B2A4A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.co-wrap * { box-sizing: border-box; }

.co-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.co-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,107,74,0.08); }
.co-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(27,42,74,0.06); }

.co-stage { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; padding: 26px 40px 70px; }

.co-audience-toggle { display: inline-flex; background: #fff; border-radius: 999px; padding: 4px; gap: 4px; margin: 16px 0 0; }
.co-audience-btn {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #6B6E96;
  background: transparent; border: none; border-radius: 999px; padding: 8px 18px; cursor: pointer;
  transition: all 0.15s ease;
}
.co-audience-btn .co-audience-age { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; opacity: 0.65; }
.co-audience-btn.is-active { background: #1B2A4A; color: #fff; }

.co-hero-band {
  background: #FFE6DD;
  border-radius: 16px;
  padding: 22px 32px 20px;
  text-align: center;
  margin-bottom: 32px;
  height: 270px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.co-hero-band--navy { background: #E7EAF3; }
.co-hero-kicker-row { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 4px; }
.co-hero-rule { flex: 0 1 48px; height: 1px; background: rgba(27,42,74,0.22); }
.co-hero-kicker {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #E0502F;
}
.co-hero-kicker--navy { color: #1B2A4A; }
.co-title {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(28px, 4vw, 38px);
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #1B2A4A;
  margin: 4px 0 14px;
  line-height: 1;
}

.co-stat-row { display: flex; justify-content: center; gap: 10px; }
.co-stat { text-align: center; background: #fff; border-radius: 10px; padding: 8px 20px; }
.co-stat-num { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 22px; }
.co-stat-num--coral { color: #FF6B4A; }
.co-stat-num--navy { color: #1B2A4A; }
.co-stat-label { font-size: 10px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #6B6E96; margin-top: 2px; }

.co-levels-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
@media (max-width: 700px) { .co-levels-grid { grid-template-columns: 1fr; } }

.co-level-card {
  background: #fff;
  border: 1px solid #EDE6F4;
  border-radius: 18px;
  padding: 32px 30px 26px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(27,42,74,0.06);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  outline: none;
}
.co-level-card:hover, .co-level-card:focus-visible { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(27,42,74,0.13); }
.co-level-card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; z-index: 2; }
.co-level-card::after { content: ""; position: absolute; top: -70px; right: -70px; width: 200px; height: 200px; border-radius: 50%; pointer-events: none; z-index: 0; }
.co-level-card--coral::before { background: linear-gradient(90deg, #FF6B4A, #FF9273); }
.co-level-card--coral::after { background: radial-gradient(circle, rgba(255,107,74,0.09), rgba(255,107,74,0) 70%); }
.co-level-card--coral:hover { border-color: #FF6B4A; }
.co-level-card--navy::before { background: linear-gradient(90deg, #1B2A4A, #3C5285); }
.co-level-card--navy::after { background: radial-gradient(circle, rgba(27,42,74,0.08), rgba(27,42,74,0) 70%); }
.co-level-card--navy:hover { border-color: #1B2A4A; }

.co-level-watermark {
  position: absolute; top: -20px; right: -4px;
  font-family: 'Playfair Display', serif; font-weight: 900; font-size: 120px; line-height: 1;
  letter-spacing: -0.03em; pointer-events: none; z-index: 0;
}
.co-level-card--coral .co-level-watermark { color: rgba(255,107,74,0.07); }
.co-level-card--navy .co-level-watermark { color: rgba(27,42,74,0.06); }

.co-level-top { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; position: relative; z-index: 1; }
.co-level-code { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 34px; }
.co-level-card--coral .co-level-code { color: #FF6B4A; }
.co-level-card--navy .co-level-code { color: #1B2A4A; }
.co-level-tag { font-size: 10.5px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; color: #E0502F; background: #FFE6DD; }
.co-level-card--navy .co-level-tag { color: #1B2A4A; background: #E7EAF3; }

.co-level-name { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 18px; margin-bottom: 12px; position: relative; z-index: 1; }
.co-level-desc { font-size: 13.5px; font-weight: 500; color: #6B6E96; line-height: 1.65; margin: 0 0 22px; position: relative; z-index: 1; }

.co-level-foot { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #EDE6F4; padding-top: 16px; margin-top: auto; position: relative; z-index: 1; }
.co-level-units { font-size: 12px; font-weight: 700; color: #6B6E96; }
.co-level-units b { color: #1B2A4A; font-family: 'Source Serif 4', serif; font-size: 14px; }
.co-level-cta { font-size: 12.5px; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; }
.co-level-card--coral .co-level-cta { color: #FF6B4A; }
.co-level-card--navy .co-level-cta { color: #1B2A4A; }
`;
