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
    banner: "/curriculum/a1-banner.png",
    description: "Letters, phonics, and the first words and phrases to say hello, count, and talk about everyday life.",
  },
  A2: {
    code: "A2",
    name: "Soar",
    tag: "Next step",
    accent: "navy",
    banner: "/curriculum/a2-banner.png",
    description: "Longer sentences, more tenses, and the independence to handle everyday situations with confidence.",
  },
};

const AUDIENCES = [
  { id: "kids", label: "Kids", age: "6–12", dot: "#F2A21E", kicker: "Kids track · Ages 6 to 12", levels: KIDS_LEVELS },
  { id: "teens", label: "Teens", age: "13–17", dot: "#6C5CE7", kicker: "Teens track · Ages 13 to 17", levels: TEENS_LEVELS },
  { id: "adults", label: "Adults", age: "18+", dot: "#C4902F", kicker: "Adults track · Ages 18+", levels: ADULTS_LEVELS },
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
        <div className={`co-banner co-banner--${audience}`}>
          <div className="co-banner-in">
            <span className="co-hero-kicker">{current.kicker}</span>
            <h1 className="co-title">Curriculum</h1>
            <p className="co-banner-stats">2 levels · 24 units · 144 lessons</p>
            <div className="co-audience-toggle">
              {AUDIENCES.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  className={`co-audience-btn ${audience === a.id ? "is-active" : ""}`}
                  style={{ "--dot": a.dot }}
                  onClick={() => selectAudience(a.id)}
                >
                  {a.label} <span className="co-audience-age">{a.age}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="co-levels-grid">
          {levels.map((lv) => (
            <div
              key={lv.code}
              className={`co-row co-row--${lv.accent}`}
              style={{ "--img": lv.banner ? `url(${lv.banner})` : "none" }}
              onClick={() => openLevel(lv.code)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLevel(lv.code)}
            >
              <div className="co-row-ring"><span>{lv.code}</span><small>{lv.tag.split(" ")[0]}</small></div>
              <div className="co-row-text">
                <div className="co-row-head">
                  <span className="co-row-name">{lv.name}</span>
                  <span className="co-level-tag">{lv.tag}</span>
                </div>
                <p className="co-row-desc">{lv.description}</p>
                <div className="co-row-meta"><b>12</b> units · <b>72</b> lessons</div>
              </div>
              <div className="co-row-go" aria-hidden="true">&rarr;</div>
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

.co-audience-toggle { display: inline-flex; gap: 2px; padding: 4px; border-radius: 999px; margin: 16px 0 0; background: rgba(255,255,255,0.55); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 8px 24px rgba(27,42,74,0.14); }
.co-audience-btn {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #6B6E96;
  background: transparent; border: none; border-radius: 999px; padding: 8px 20px; cursor: pointer;
  transition: all 0.2s ease;
}
.co-audience-btn .co-audience-age { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; opacity: 0.65; }
.co-audience-btn.is-active { background: #fff; color: #1B2A4A; box-shadow: 0 2px 8px rgba(27,42,74,0.18); }
.co-audience-btn.is-active::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--dot, #1B2A4A); }
.co-audience-btn:focus-visible { outline: 3px solid #1B2A4A; outline-offset: 2px; }

.co-banner {
  position: relative; margin-bottom: 32px; aspect-ratio: 2172 / 724; container-type: inline-size; border-radius: 20px; overflow: hidden;
  background-color: #FFE6DD; background-size: cover, cover; background-position: center, center; background-repeat: no-repeat;
  background-image: url(/curriculum/curriculum-banner-kids.png), linear-gradient(135deg, #FFE6DD 0%, #FFF1D2 100%);
}
.co-banner--teens { background-color: #E7E3FF; background-image: url(/curriculum/curriculum-banner-teens.png), linear-gradient(135deg, #E7E3FF 0%, #FFE6DD 100%); }
.co-banner--adults { background-color: #E7EAF3; background-image: url(/curriculum/curriculum-banner-adults.png), linear-gradient(135deg, #E7EAF3 0%, #F1EDE0 100%); }
.co-banner-in { position: absolute; inset: 0; padding: 1.5cqw 4cqw; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.1cqw; text-align: center; }
.co-hero-kicker {
  font-family: 'Source Serif 4', serif; font-weight: 700; font-size: clamp(8.5px, 1.2cqw, 10.5px);
  letter-spacing: 0.22em; text-transform: uppercase; color: #E0502F; white-space: nowrap;
}
.co-banner--teens .co-hero-kicker, .co-banner--adults .co-hero-kicker { color: #1B2A4A; }
.co-title {
  font-family: 'Playfair Display', serif; font-weight: 900; font-size: clamp(26px, 5cqw, 44px);
  letter-spacing: 0.01em; text-transform: uppercase; color: #1B2A4A; margin: 0; line-height: 1;
}
.co-banner-stats { margin: 0; font-size: clamp(11px, 1.5cqw, 13.5px); font-weight: 700; color: #4A5578; }
@media (max-width: 560px) {
  .co-banner { aspect-ratio: auto; }
  .co-banner-in { position: static; padding: 26px 16px 22px; gap: 10px; }
}

.co-levels-grid { display: flex; flex-direction: column; gap: 16px; }

.co-row {
  position: relative; display: grid; grid-template-columns: auto 1fr auto; gap: 22px; align-items: center;
  padding: 22px 24px; border-radius: 20px; border: 1px solid #EDE6F4; background: #fff; overflow: hidden; cursor: pointer; outline: none;
  box-shadow: 0 4px 16px rgba(27,42,74,0.06); transition: box-shadow 0.2s ease, border-color 0.2s ease;
  --acc: #FF6B4A;
}
.co-row--navy { --acc: #1B2A4A; }
.co-row::after {
  content: ""; position: absolute; right: 0; top: 0; bottom: 0; width: 52%; background-image: var(--img); background-size: cover; background-position: right center;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 75%); mask-image: linear-gradient(90deg, transparent, #000 75%); opacity: 0.9; transition: opacity 0.3s ease, width 0.3s ease;
}
.co-row:hover, .co-row:focus-visible { box-shadow: 0 16px 34px rgba(27,42,74,0.14); border-color: var(--acc); }
.co-row:hover::after, .co-row:focus-visible::after { opacity: 1; width: 56%; }
.co-row > * { position: relative; z-index: 1; }
.co-row-ring {
  width: 86px; height: 86px; border-radius: 50%; border: 3px solid var(--acc); color: var(--acc); background: #fff;
  display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1;
}
.co-row-ring span { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 30px; }
.co-row-ring small { font-size: 8px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; margin-top: 3px; opacity: 0.8; }
.co-row-text { max-width: 360px; }
.co-row-head { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.co-row-name { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 22px; color: #1B2A4A; }
.co-level-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px; color: #E0502F; background: #FFE6DD; }
.co-row--navy .co-level-tag { color: #1B2A4A; background: #E7EAF3; }
.co-row-desc { font-size: 13px; font-weight: 500; color: #6B6E96; line-height: 1.55; margin: 0; }
.co-row-meta { margin-top: 10px; font-size: 12px; font-weight: 700; color: #6B6E96; }
.co-row-meta b { color: #1B2A4A; font-family: 'Source Serif 4', serif; font-size: 14px; }
.co-row-go { width: 46px; height: 46px; border-radius: 50%; background: #1B2A4A; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 19px; transition: background 0.2s ease, transform 0.2s ease; }
.co-row:hover .co-row-go, .co-row:focus-visible .co-row-go { background: var(--acc); transform: translateX(3px); }
@media (max-width: 700px) {
  .co-row { grid-template-columns: auto 1fr; gap: 14px; padding: 18px 16px; }
  .co-row::after { width: 100%; opacity: 0.25; -webkit-mask-image: none; mask-image: none; }
  .co-row:hover::after { width: 100%; opacity: 0.35; }
  .co-row-ring { width: 64px; height: 64px; } .co-row-ring span { font-size: 22px; }
  .co-row-go { display: none; }
}
`;
