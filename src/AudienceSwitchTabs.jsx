import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AUDIENCES = [
  { id: "kids", label: "Kids", age: "6–12", dot: "#F2A21E", path: (lvl) => `/library/curriculum/${lvl}` },
  { id: "teens", label: "Teens", age: "13–17", dot: "#6C5CE7", path: (lvl) => `/library/curriculum/teens/${lvl}` },
  { id: "adults", label: "Adults", age: "18+", dot: "#C4902F", path: (lvl) => `/library/curriculum/adults/${lvl}` },
];

export default function AudienceSwitchTabs({ active, level = "A1", variant = "row" }) {
  const navigate = useNavigate();

  useEffect(() => {
    const styleId = "ast-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  return (
    <div className={`ast-row ${variant === "banner" ? "ast-row--banner" : ""}`}>
      <div className="ast-toggle">
        {AUDIENCES.map((a) => (
          <button
            key={a.id}
            type="button"
            className={`ast-pill ${active === a.id ? "is-active" : ""}`}
            style={{ "--dot": a.dot }}
            onClick={() => active !== a.id && navigate(a.path(level))}
          >
            {a.label} <span className="ast-age">{a.age}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = `
.ast-row { display: flex; justify-content: center; margin-bottom: 22px; }
.ast-row--banner { margin-bottom: 0; margin-top: 4px; }
.ast-toggle { display: inline-flex; gap: 2px; padding: 4px; border-radius: 999px; background: rgba(255,255,255,0.55); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 8px 24px rgba(27,42,74,0.14); }
.ast-pill {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #6B6E96;
  background: transparent; border: none; border-radius: 999px; padding: 8px 20px; cursor: pointer;
  transition: all 0.2s ease;
}
.ast-pill .ast-age { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; opacity: 0.65; }
.ast-pill.is-active { background: #fff; color: #1B2A4A; box-shadow: 0 2px 8px rgba(27,42,74,0.18); cursor: default; }
.ast-pill.is-active::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--dot, #1B2A4A); }
.ast-pill:not(.is-active):hover { color: #1B2A4A; }
.ast-pill:focus-visible { outline: 3px solid #1B2A4A; outline-offset: 2px; }
`;
