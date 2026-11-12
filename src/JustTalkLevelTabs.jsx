import { useNavigate } from "react-router-dom";

// A1-A2 / B1-B2 / C1-C2 switch inside the Just Talk banner, same look as the Kids / Teens / Adults
// tabs on the curriculum level pages (AudienceSwitchTabs, banner variant).
const LEVELS = [
  { id: "a1", label: "A1-A2", sub: "Beginner", dot: "#FF6B4A", path: "/library/just-talk" },
  { id: "b1", label: "B1-B2", sub: "Intermediate", dot: "#2C7A6E", path: "/library/just-talk-b1" },
  { id: "c1", label: "C1-C2", sub: "Advanced", dot: "#5B3F8C", path: "/library/just-talk-c1" },
];

export default function JustTalkLevelTabs({ active }) {
  const navigate = useNavigate();
  return (
    <div className="jtl-row">
      <style>{CSS}</style>
      <div className="jtl-toggle">
        {LEVELS.map((l) => (
          <button key={l.id} type="button" className={`jtl-pill ${active === l.id ? "is-active" : ""}`} style={{ "--dot": l.dot }} onClick={() => active !== l.id && navigate(l.path)}>
            {l.label} <span className="jtl-sub">{l.sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const CSS = `
.jtl-row { display: flex; justify-content: center; margin-top: 4px; }
.jtl-toggle { display: inline-flex; gap: 2px; padding: 4px; border-radius: 999px; background: rgba(255,255,255,0.55); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 8px 24px rgba(27,42,74,0.14); }
.jtl-pill { display: inline-flex; align-items: center; gap: 7px; font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #6B6E96; background: transparent; border: none; border-radius: 999px; padding: 8px 20px; cursor: pointer; transition: all 0.2s ease; }
.jtl-pill .jtl-sub { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; opacity: 0.65; }
.jtl-pill.is-active { background: #fff; color: #1B2A4A; box-shadow: 0 2px 8px rgba(27,42,74,0.18); cursor: default; }
.jtl-pill.is-active::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--dot, #1B2A4A); }
.jtl-pill:not(.is-active):hover { color: #1B2A4A; }
.jtl-pill:focus-visible { outline: 3px solid #1B2A4A; outline-offset: 2px; }
@media (max-width: 480px) { .jtl-pill { padding: 8px 12px; } }
`;
