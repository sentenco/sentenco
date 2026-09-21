import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

const TIERS = [
  {
    key: "free",
    name: "Free",
    tagline: "Everything you need to start your day.",
    price: "Free forever",
    cta: "You're already here",
    ctaDisabled: true,
    accent: "coral",
    features: [
      "Homeroom (Community, Daily Correction, clock)",
      "Articles (the Gazette)",
      "Full Community access, Universal and your company's",
      "Teacher's Desk (unlock daily with 3 posts, comments, or likes)",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "Every category, unlocked.",
    price: "₱299/mo",
    originalPrice: "₱499/mo",
    priceBadge: "Early Adopter Price",
    priceNote: "Locks in your rate. Price rises once we're out of early access.",
    cta: "Upgrade to Pro",
    accent: "coral",
    highlighted: true,
    features: [
      "Everything in Free",
      "Speaking, Reading, Grammar, Vocabulary, Writing, Listening",
      "Teacher's Desk unlocked automatically",
    ],
  },
  {
    key: "pro_plus",
    name: "Pro+",
    tagline: "Every level. AI tools built in.",
    price: "₱350/mo",
    originalPrice: "₱599/mo",
    priceBadge: "Early Adopter Price",
    priceNote: "Locks in your rate. Price rises once we're out of early access.",
    cta: "Upgrade to Pro+",
    accent: "navy",
    features: [
      "Everything in Pro",
      "Every CEFR level, A1 through C2",
      "AI-powered Dictionary",
      "AI-powered Grammar Checker",
      "AI-powered Translator",
    ],
  },
];

export default function Subscription() {
  const navigate = useNavigate();
  const [notice, setNotice] = useState(null);

  function handleUpgrade(tierName) {
    setNotice(`${tierName} isn't open for billing yet. Check back soon.`);
  }

  return (
    <div className="sub-shell">
      <style>{CSS}</style>
      <header className="sub-topbar">
        <button type="button" className="sub-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentivo.png" alt="" className="sub-brand-logo" />entenco
        </button>
        <h1 className="sub-topbar-title">Subscription</h1>
      </header>

      <div className="sub-page">
        <div className="sub-intro">
          <p className="sub-eyebrow">Plans</p>
          <h2 className="sub-heading">Simple pricing, built around how you actually teach</h2>
          <p className="sub-lede">Start free. Upgrade whenever the curriculum or the AI tools become part of your daily routine.</p>
        </div>

        {notice && (
          <div className="sub-notice">
            {notice}
            <button type="button" className="sub-notice-close" onClick={() => setNotice(null)} aria-label="Dismiss">&times;</button>
          </div>
        )}

        <div className="sub-tiers">
          {TIERS.map((t) => (
            <div className={`sub-tier sub-tier--${t.accent}${t.highlighted ? " is-highlighted" : ""}`} key={t.key}>
              {t.highlighted && <span className="sub-tier-badge">Most popular</span>}
              <h3 className="sub-tier-name">{t.name}</h3>
              <p className="sub-tier-tagline">{t.tagline}</p>
              <div className="sub-tier-price-block">
                {t.priceBadge && <span className="sub-tier-price-badge">{t.priceBadge}</span>}
                <div className="sub-tier-price-row">
                  {t.originalPrice && <span className="sub-tier-price-was">{t.originalPrice}</span>}
                  <span className="sub-tier-price">{t.price}</span>
                </div>
                {t.priceNote && <p className="sub-tier-price-note">{t.priceNote}</p>}
              </div>
              <ul className="sub-tier-features">
                {t.features.map((f, i) => (
                  <li key={i}><span className="sub-check"><CheckIcon /></span>{f}</li>
                ))}
              </ul>
              <button
                type="button"
                className="sub-tier-cta"
                disabled={t.ctaDisabled}
                onClick={() => handleUpgrade(t.name)}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="sub-legal-note">
          By subscribing you agree to our <a href="/library/legal/terms">Terms of Service</a> and{" "}
          <a href="/library/legal/refund">Refund & Cancellation Policy</a>.
        </p>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.sub-shell {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --navy-dark: #12203B;
  --navy-pale: #E9ECF3;
  --hair: rgba(43,42,74,0.09);
  min-height: 100vh;
  background: #FBFAF7;
  color: var(--ink);
  font-family: 'Quicksand', sans-serif;
}
.sub-shell * { box-sizing: border-box; }

.sub-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card);
}
.sub-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.sub-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.sub-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); letter-spacing: 0.015em; margin: 0; }

.sub-page { max-width: 1000px; margin: 0 auto; padding: 48px 24px 80px; }

.sub-intro { max-width: 62ch; margin: 0 auto 40px; text-align: center; }
.sub-eyebrow { font-family: 'Quicksand', sans-serif; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--coral); margin: 0 0 8px; }
.sub-heading { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 28px; line-height: 1.3; margin: 0 0 10px; text-wrap: balance; }
.sub-lede { font-size: 14.5px; color: var(--muted); line-height: 1.6; margin: 0; }

.sub-notice {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  max-width: 640px; margin: 0 auto 28px; background: var(--coral-pale); color: var(--ink);
  border-radius: 12px; padding: 12px 16px; font-size: 13.5px;
}
.sub-notice-close { background: none; border: none; color: var(--muted); font-size: 18px; cursor: pointer; line-height: 1; padding: 0; }

.sub-tiers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: stretch; }
.sub-legal-note { text-align: center; font-size: 12px; color: var(--muted); margin: 28px 0 0; }
.sub-legal-note a { color: var(--muted); text-decoration: underline; }
.sub-legal-note a:hover { color: var(--ink); }
@media (max-width: 860px) { .sub-tiers { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; } }

.sub-tier {
  position: relative;
  background: var(--card); border: 1px solid var(--hair); border-top: 4px solid var(--tier-accent, var(--coral));
  border-radius: 20px; padding: 26px 24px 24px;
  display: flex; flex-direction: column;
  box-shadow: 0 10px 30px rgba(43,42,74,0.06);
}
.sub-tier--coral { --tier-accent: var(--coral); --tier-accent-pale: var(--coral-pale); }
.sub-tier--navy { --tier-accent: var(--navy); --tier-accent-pale: var(--navy-pale); }
.sub-tier.is-highlighted { box-shadow: 0 16px 40px rgba(255,107,74,0.16); transform: translateY(-4px); }

.sub-tier-badge {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  background: var(--coral); color: #fff; font-family: 'Quicksand', sans-serif; font-weight: 800;
  font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; padding: 5px 14px; border-radius: 999px;
  white-space: nowrap;
}

.sub-tier-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 21px; margin: 4px 0 4px; color: var(--ink); }
.sub-tier-tagline { font-size: 12.5px; color: var(--muted); margin: 0 0 16px; line-height: 1.4; min-height: 32px; }
.sub-tier-price-block { margin: 0 0 20px; }
.sub-tier-price-badge {
  display: inline-block; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 9.5px;
  letter-spacing: 0.06em; text-transform: uppercase; color: var(--tier-accent, var(--coral));
  background: var(--tier-accent-pale, var(--coral-pale)); padding: 3px 9px; border-radius: 999px; margin: 0 0 8px;
}
.sub-tier-price-row { display: flex; align-items: baseline; gap: 8px; margin: 0; }
.sub-tier-price-was { font-family: 'Quicksand', sans-serif; font-size: 13px; color: var(--muted); text-decoration: line-through; }
.sub-tier-price { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 18px; color: var(--tier-accent, var(--coral)); margin: 0; }
.sub-tier-price-note { font-size: 11px; color: var(--muted); margin: 6px 0 0; line-height: 1.4; }

.sub-tier-features { list-style: none; margin: 0 0 24px; padding: 0; display: flex; flex-direction: column; gap: 11px; flex: 1; }
.sub-tier-features li { display: flex; align-items: flex-start; gap: 9px; font-size: 13.5px; line-height: 1.4; color: var(--ink); }
.sub-check {
  flex-shrink: 0; width: 18px; height: 18px; border-radius: 50%; margin-top: 1px;
  background: var(--tier-accent, var(--coral)); color: #fff;
  display: flex; align-items: center; justify-content: center;
}
.sub-check svg { width: 10px; height: 10px; }

.sub-tier-cta {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px;
  background: var(--tier-accent, var(--coral)); color: #fff; border: none; border-radius: 999px;
  padding: 11px; cursor: pointer; width: 100%;
}
.sub-tier-cta:hover:not(:disabled) { filter: brightness(0.92); }
.sub-tier-cta:disabled { background: var(--hair); color: var(--muted); cursor: default; }
`;
