import { useNavigate, useParams } from "react-router-dom";
import { LEGAL_DOCS, LEGAL_UPDATED, TERMS_CONTENT, PRIVACY_CONTENT, REFUND_CONTENT } from "./legalContent";

const DOC_CONTENT = {
  terms: TERMS_CONTENT,
  privacy: PRIVACY_CONTENT,
  refund: REFUND_CONTENT,
};

export default function LegalPage() {
  const navigate = useNavigate();
  const { doc } = useParams();
  const content = DOC_CONTENT[doc] || TERMS_CONTENT;

  return (
    <div className="legal-shell">
      <style>{CSS}</style>
      <header className="legal-topbar">
        <button type="button" className="legal-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentivo.png" alt="" className="legal-brand-logo" />entenco
        </button>
        <h1 className="legal-topbar-title">Legal</h1>
      </header>

      <div className="legal-page">
        <nav className="legal-nav">
          {LEGAL_DOCS.map((d) => (
            <button
              key={d.key}
              type="button"
              className={`legal-nav-tab ${doc === d.key || (!doc && d.key === "terms") ? "is-active" : ""}`}
              onClick={() => navigate(`/library/legal/${d.key}`)}
            >
              {d.label}
            </button>
          ))}
        </nav>

        <article className="legal-doc">
          <h2 className="legal-doc-title">{content.title}</h2>
          <p className="legal-doc-updated">Last updated {LEGAL_UPDATED}</p>
          <p className="legal-doc-intro">{content.intro}</p>
          {content.sections.map((s, i) => (
            <section className="legal-section" key={i}>
              <h3 className="legal-section-heading">{s.heading}</h3>
              {s.body.map((p, j) => (
                <p className="legal-section-body" key={j}>{p}</p>
              ))}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.legal-shell {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --hair: rgba(43,42,74,0.09);
  min-height: 100vh;
  background: #FBFAF7;
  color: var(--ink);
  font-family: 'Quicksand', sans-serif;
}
.legal-shell * { box-sizing: border-box; }

.legal-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card);
}
.legal-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.legal-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.legal-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); letter-spacing: 0.015em; margin: 0; }

.legal-page { max-width: 760px; margin: 0 auto; padding: 40px 24px 80px; display: flex; gap: 32px; }
@media (max-width: 720px) { .legal-page { flex-direction: column; gap: 20px; } }

.legal-nav {
  display: flex; flex-direction: column; gap: 4px; flex-shrink: 0; width: 190px;
  position: sticky; top: 40px; align-self: flex-start;
}
@media (max-width: 720px) { .legal-nav { position: static; width: 100%; flex-direction: row; flex-wrap: wrap; } }
.legal-nav-tab {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: var(--muted);
  background: none; border: none; border-radius: 10px; padding: 9px 12px; text-align: left; cursor: pointer;
}
.legal-nav-tab:hover { background: rgba(43,42,74,0.05); color: var(--ink); }
.legal-nav-tab.is-active { background: var(--coral-pale); color: var(--coral); }

.legal-doc { flex: 1; min-width: 0; }
.legal-doc-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 26px; margin: 0 0 4px; text-wrap: balance; }
.legal-doc-updated { font-size: 12px; color: var(--muted); margin: 0 0 20px; }
.legal-doc-intro { font-size: 14.5px; line-height: 1.7; color: var(--ink); margin: 0 0 28px; }

.legal-section { margin: 0 0 24px; }
.legal-section-heading { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15.5px; margin: 0 0 8px; color: var(--ink); }
.legal-section-body { font-size: 13.5px; line-height: 1.7; color: var(--ink); margin: 0 0 10px; }
.legal-section-body:last-child { margin-bottom: 0; }
`;
