import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";
import AuthForm from "./AuthForm";

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


const ERRORS = {
  trial_already_used: "You've already used your free trial.",
  invalid_code: "That code isn't valid. Check it and try again.",
  code_expired: "That code has expired.",
  code_used_up: "That code has already been used the maximum number of times.",
  already_redeemed: "You've already redeemed that code.",
  not_signed_in: "Sign in first, then try again.",
};

function friendlyError(error) {
  const key = Object.keys(ERRORS).find((k) => (error?.message || "").includes(k));
  return key ? ERRORS[key] : "Something went wrong. Please try again in a moment.";
}

const PLAN_NAMES = { free: "Free", pro: "Pro", pro_plus: "Pro+" };

function daysLeft(endsAt) {
  return Math.max(1, Math.ceil((new Date(endsAt).getTime() - Date.now()) / 86400000));
}
function niceDate(endsAt) {
  return new Date(endsAt).toLocaleDateString("en-PH", { month: "long", day: "numeric", timeZone: "Asia/Manila" });
}

function AccessPanel({ onNotice }) {
  const { user, plan, planInfo, refreshPlan } = useAuth();
  const [authMode, setAuthMode] = useState(null);
  const [busy, setBusy] = useState(false);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState(null); // { kind: "ok" | "error", text }

  async function startTrial() {
    setBusy(true); setMessage(null);
    const { error } = await supabase.rpc("start_trial");
    setBusy(false);
    if (error) { setMessage({ kind: "error", text: friendlyError(error) }); return; }
    await refreshPlan();
    setMessage({ kind: "ok", text: "Your 7-day free trial has started. Everything is unlocked." });
  }

  async function redeem(e) {
    e.preventDefault();
    if (!code.trim()) { setMessage({ kind: "error", text: "Enter your code first." }); return; }
    setBusy(true); setMessage(null);
    const { error } = await supabase.rpc("redeem_code", { p_code: code });
    setBusy(false);
    if (error) { setMessage({ kind: "error", text: friendlyError(error) }); return; }
    setCode("");
    await refreshPlan();
    setMessage({ kind: "ok", text: "Code redeemed. Your access is active." });
  }

  const active = planInfo.source === "trial" || planInfo.source === "grant";
  let headline; let sub; let action = null;
  if (!user) {
    headline = "Try everything free for 7 days";
    sub = "Pro+ access: every category, every level and the AI tools. No card needed.";
    action = <button type="button" className="sub-access-btn" onClick={() => setAuthMode("signup")}>Create a free account to start</button>;
  } else if (planInfo.notSetUp) {
    headline = "Free trials are opening soon";
    sub = "We're setting up beta access. Check back in a little while.";
  } else if (active) {
    const what = planInfo.source === "trial" ? "Free trial" : "Free access";
    headline = `${what} active: ${PLAN_NAMES[plan]}`;
    sub = `${daysLeft(planInfo.endsAt)} day${daysLeft(planInfo.endsAt) === 1 ? "" : "s"} left. Ends ${niceDate(planInfo.endsAt)}.`;
  } else if (planInfo.trialAvailable) {
    headline = "Try everything free for 7 days";
    sub = "Pro+ access: every category, every level and the AI tools. No card needed. Your 7 days start when you press the button.";
    action = <button type="button" className="sub-access-btn" disabled={busy} onClick={startTrial}>{busy ? "Starting..." : "Start my free trial"}</button>;
  } else if (plan === "free") {
    headline = "Your free trial has ended";
    sub = "You still have Homeroom and Articles. Paid plans open after the beta. If you were invited, redeem your code below.";
  } else {
    headline = `You're on ${PLAN_NAMES[plan]}`;
    sub = "Everything in your plan is unlocked.";
  }

  return (
    <div className="sub-access">
      <div className="sub-access-main">
        <p className="sub-access-eyebrow">Beta access</p>
        <h3 className="sub-access-title">{headline}</h3>
        <p className="sub-access-sub">{sub}</p>
        {action}
        {planInfo.source === "trial" && <p className="sub-access-fine">The AI tools allow 30 lookups a day during the trial. Teacher's Desk still unlocks with your 3 daily posts, comments or likes.</p>}
      </div>
      {user && !planInfo.notSetUp && (
        <form className="sub-redeem" onSubmit={redeem}>
          <label className="sub-redeem-label" htmlFor="sub-code">Have a code?</label>
          <div className="sub-redeem-row">
            <input id="sub-code" className="sub-redeem-input" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter your code" autoComplete="off" spellCheck={false} />
            <button type="submit" className="sub-redeem-btn" disabled={busy}>Redeem</button>
          </div>
        </form>
      )}
      {message && <p className={`sub-access-msg is-${message.kind}`} role="status">{message.text}</p>}
      {authMode && <AuthForm mode={authMode} onClose={() => setAuthMode(null)} />}
    </div>
  );
}

export default function Subscription() {
  const navigate = useNavigate();
  const [notice, setNotice] = useState(null);

  function handleUpgrade(tierName) {
    setNotice(`${tierName} isn't open for billing yet. During the beta you can try everything free for 7 days.`);
  }

  return (
    <div className="sub-shell">
      <style>{CSS}</style>
      <header className="sub-topbar">
        <button type="button" className="sub-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentenco.png" alt="" className="sub-brand-logo" />entenco
        </button>
        <h1 className="sub-topbar-title">Subscription</h1>
      </header>

      <div className="sub-page">
        <div className="sub-intro">
          <p className="sub-eyebrow">Plans</p>
          <h2 className="sub-heading">Simple pricing, built around how you actually teach</h2>
          <p className="sub-lede">Start free. Upgrade whenever the curriculum or the AI tools become part of your daily routine.</p>
        </div>

        <AccessPanel />

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
.sub-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.sub-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); letter-spacing: 0.015em; margin: 0; }

.sub-page { max-width: 1000px; margin: 0 auto; padding: 48px 24px 80px; }

.sub-intro { max-width: 62ch; margin: 0 auto 40px; text-align: center; }
.sub-eyebrow { font-family: 'Quicksand', sans-serif; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--coral); margin: 0 0 8px; }
.sub-heading { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 28px; line-height: 1.3; margin: 0 0 10px; text-wrap: balance; }
.sub-lede { font-size: 14.5px; color: var(--muted); line-height: 1.6; margin: 0; }


.sub-access {
  max-width: 720px; margin: 0 auto 34px; background: var(--navy-pale); border: 1px solid var(--hair); border-radius: 20px;
  padding: 24px 28px; display: grid; gap: 16px;
}
.sub-access-eyebrow { font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--navy); margin: 0 0 6px; }
.sub-access-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 22px; margin: 0 0 6px; color: var(--navy); }
.sub-access-sub { font-size: 14px; line-height: 1.55; color: var(--ink); margin: 0 0 14px; }
.sub-access-fine { font-size: 12px; color: var(--muted); margin: 12px 0 0; line-height: 1.5; }
.sub-access-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; color: #fff; background: var(--coral);
  border: none; border-radius: 999px; padding: 12px 24px; cursor: pointer;
}
.sub-access-btn:hover:not(:disabled) { filter: brightness(0.92); }
.sub-access-btn:disabled { opacity: 0.6; cursor: default; }
.sub-redeem { border-top: 1px solid var(--hair); padding-top: 16px; }
.sub-redeem-label { display: block; font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); margin: 0 0 8px; }
.sub-redeem-row { display: flex; gap: 8px; max-width: 420px; }
.sub-redeem-input {
  flex: 1; min-width: 0; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.04em; text-transform: uppercase;
  border: 1.5px solid var(--hair); border-radius: 12px; padding: 10px 14px; background: #fff; color: var(--ink);
}
.sub-redeem-input:focus { outline: 3px solid var(--navy); outline-offset: 1px; }
.sub-redeem-btn { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px; color: #fff; background: var(--navy); border: none; border-radius: 12px; padding: 10px 20px; cursor: pointer; }
.sub-redeem-btn:disabled { opacity: 0.6; cursor: default; }
.sub-access-msg { font-size: 13.5px; font-weight: 600; margin: 0; border-radius: 10px; padding: 10px 14px; }
.sub-access-msg.is-ok { background: #E3F5EA; color: #1F7A47; }
.sub-access-msg.is-error { background: #FDE8E5; color: #A3322A; }

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
