import { useState } from "react";
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
    features: [
      "Homeroom: community, Teacher's Desk and clock",
      "Articles (the Gazette)",
      "Full community: follow, connect and message teachers",
      "Teacher's Desk unlocks daily with 3 posts, comments or likes",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "Every category, unlocked.",
    price: "₱299",
    originalPrice: "₱499",
    priceNote: "Early adopter price. It stays yours while you stay subscribed.",
    cta: "Upgrade to Pro",
    highlighted: true,
    features: [
      "Everything in Free",
      "Speaking, Reading, Grammar, Vocabulary, Writing, Listening",
      "Teacher's Desk always unlocked",
    ],
  },
  {
    key: "pro_plus",
    name: "Pro+",
    tagline: "Every level. AI tools built in.",
    price: "₱350",
    originalPrice: "₱599",
    priceNote: "Early adopter price. It stays yours while you stay subscribed.",
    cta: "Upgrade to Pro+",
    navy: true,
    features: [
      "Everything in Pro",
      "Every CEFR level, A1 through C2",
      "AI Dictionary",
      "AI Grammar Checker",
      "AI Translator",
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
  const [codeOpen, setCodeOpen] = useState(false);
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
    sub = "You still have Homeroom and Articles. Paid plans open after the beta. If you were invited, use your code.";
  } else {
    headline = `You're on ${PLAN_NAMES[plan]}`;
    sub = "Everything in your plan is unlocked.";
  }

  const showRing = user && active && planInfo.endsAt && planInfo.source === "trial";
  const ringPct = showRing ? Math.min(100, Math.round((daysLeft(planInfo.endsAt) / 7) * 100)) : 0;

  return (
    <div className="sub-rib">
      <div className="sub-rib-text">
        <p className="sub-rib-eyebrow">{active ? (planInfo.source === "trial" ? "Free trial" : "Free access") : "Beta access"}</p>
        <h3 className="sub-rib-title">{headline}</h3>
        <p className="sub-rib-sub">{sub}</p>
        {planInfo.source === "trial" && <p className="sub-rib-fine">The AI tools allow 30 lookups a day during the trial.</p>}
      </div>
      {showRing && (
        <div className="sub-ring" style={{ "--p": ringPct }} aria-label={`${daysLeft(planInfo.endsAt)} days left`}>
          <span>{daysLeft(planInfo.endsAt)}<small>days</small></span>
        </div>
      )}
      <div className="sub-rib-actions">
        {action}
        {user && !planInfo.notSetUp && (
          codeOpen ? (
            <form className="sub-redeem-row" onSubmit={redeem}>
              <input id="sub-code" className="sub-redeem-input" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Your code" aria-label="Your code" autoComplete="off" spellCheck={false} autoFocus />
              <button type="submit" className="sub-redeem-btn" disabled={busy}>Redeem</button>
              <button type="button" className="sub-redeem-cancel" onClick={() => { setCodeOpen(false); setCode(""); }} aria-label="Close">&times;</button>
            </form>
          ) : (
            <button type="button" className="sub-redeem-toggle" onClick={() => setCodeOpen(true)}>Have a code?</button>
          )
        )}
      </div>
      {message && <p className={`sub-access-msg is-${message.kind}`} role="status">{message.text}</p>}
      {authMode && <AuthForm mode={authMode} onClose={() => setAuthMode(null)} />}
    </div>
  );
}

export default function Subscription() {
  const [notice, setNotice] = useState(null);

  function handleUpgrade(tierName) {
    setNotice(`${tierName} isn't open for billing yet. During the beta you can try everything free for 7 days.`);
  }

  return (
    <div className="sub-shell">
      <style>{CSS}</style>
      <div className="sub-page">
        <div className="sub-intro">
          <p className="sub-eyebrow">Plans</p>
          <h2 className="sub-heading">Simple pricing, built around how you actually teach</h2>
          <p className="sub-lede">Start free. Upgrade when the curriculum or the AI tools become part of your daily routine.</p>
        </div>

        <AccessPanel />

        {notice && (
          <div className="sub-notice" role="status">
            {notice}
            <button type="button" className="sub-notice-close" onClick={() => setNotice(null)} aria-label="Dismiss">&times;</button>
          </div>
        )}

        <div className="sub-tiers">
          {TIERS.map((t) => (
            <div className={`sub-tier${t.highlighted ? " is-pro" : ""}${t.navy ? " is-navy" : ""}`} key={t.key}>
              {t.highlighted && <span className="sub-tier-badge">Most popular</span>}
              <h3 className="sub-tier-name">{t.name}</h3>
              <p className="sub-tier-tagline">{t.tagline}</p>
              <div className="sub-tier-price-row">
                {t.originalPrice && <span className="sub-tier-price-was">{t.originalPrice}</span>}
                <span className={`sub-tier-price${t.originalPrice ? "" : " is-small"}`}>{t.price}</span>
                {t.originalPrice && <span className="sub-tier-per">/mo</span>}
              </div>
              <p className="sub-tier-price-note">{t.priceNote || "\u00A0"}</p>
              <ul className="sub-tier-features">
                {t.features.map((f, i) => (
                  <li key={i}><span className="sub-check"><CheckIcon /></span>{f}</li>
                ))}
              </ul>
              <button type="button" className="sub-tier-cta" disabled={t.ctaDisabled} onClick={() => handleUpgrade(t.name)}>
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
  --ink: #2B2A4A; --muted: #8B84A3; --coral: #FF6B4A; --coral-deep: #E0502F; --coral-pale: #FDECE5; --navy: #1B2A4A; --hair: rgba(43,42,74,0.1);
  min-height: 100%; background: #F1F3F8; color: var(--ink); font-family: 'Quicksand', sans-serif;
}
.sub-shell * { box-sizing: border-box; }
.sub-page { max-width: 1040px; margin: 0 auto; padding: 32px 24px 100px; }

.sub-intro { text-align: center; max-width: 580px; margin: 0 auto 20px; }
.sub-eyebrow { margin: 0; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: var(--coral-deep); }
.sub-heading { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 34px; line-height: 1.12; margin: 6px 0 8px; text-wrap: balance; }
.sub-lede { margin: 0; font-size: 15px; font-weight: 600; line-height: 1.55; color: var(--muted); }

.sub-rib {
  position: relative; overflow: hidden; display: flex; align-items: center; gap: 18px; flex-wrap: wrap;
  background: #fff; border-radius: 26px; padding: 16px 20px 16px 26px; margin: 0 auto 26px; max-width: 780px;
  box-shadow: 0 1px 2px rgba(27,42,74,0.04), 0 14px 30px -22px rgba(27,42,74,0.35);
}
.sub-rib::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: linear-gradient(var(--coral), #FF9B6A); }
.sub-rib-text { flex: 1; min-width: 230px; }
.sub-rib-eyebrow { margin: 0; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; color: var(--coral-deep); }
.sub-rib-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 19px; margin: 2px 0; }
.sub-rib-sub { margin: 0; font-size: 13.5px; font-weight: 600; line-height: 1.5; color: var(--muted); }
.sub-rib-fine { margin: 6px 0 0; font-size: 12px; font-weight: 600; color: var(--muted); }
.sub-rib-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
.sub-access-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; color: #fff; background: var(--coral); border: none; border-radius: 999px;
  padding: 12px 22px; cursor: pointer; white-space: nowrap; box-shadow: 0 10px 22px -10px rgba(255,107,74,0.75); transition: background 0.15s;
}
.sub-access-btn:hover:not(:disabled) { background: var(--coral-deep); }
.sub-access-btn:disabled { opacity: 0.6; cursor: default; }
.sub-access-btn:focus-visible, .sub-tier-cta:focus-visible { outline: 3px solid var(--navy); outline-offset: 2px; }
.sub-ring { --p: 70; width: 64px; height: 64px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: conic-gradient(var(--coral) calc(var(--p) * 1%), #E7EAF2 0); }
.sub-ring span { width: 48px; height: 48px; border-radius: 50%; background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 18px; line-height: 1; }
.sub-ring small { font-family: 'Quicksand', sans-serif; font-size: 9px; font-weight: 700; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; }
.sub-redeem-toggle { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: var(--coral-deep); background: none; border: none; padding: 4px 2px; cursor: pointer; text-decoration: underline; text-underline-offset: 3px; border-radius: 6px; }
.sub-redeem-toggle:hover { color: #C2411F; }
.sub-redeem-toggle:focus-visible { outline: 3px solid var(--navy); outline-offset: 2px; }
.sub-redeem-row { display: flex; align-items: center; gap: 6px; max-width: 300px; }
.sub-redeem-input {
  flex: 1; min-width: 0; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.04em; text-transform: uppercase;
  border: 1.5px solid var(--hair); border-radius: 10px; padding: 7px 11px; background: #fff; color: var(--ink);
}
.sub-redeem-input:focus { outline: 3px solid var(--navy); outline-offset: 1px; }
.sub-redeem-btn { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: #fff; background: var(--navy); border: none; border-radius: 10px; padding: 8px 14px; cursor: pointer; }
.sub-redeem-btn:disabled { opacity: 0.6; cursor: default; }
.sub-redeem-cancel { width: 28px; height: 28px; border: none; border-radius: 50%; background: none; color: var(--muted); font-size: 18px; line-height: 1; cursor: pointer; flex-shrink: 0; }
.sub-redeem-cancel:hover { background: rgba(43,42,74,0.08); color: var(--ink); }
.sub-access-msg { flex-basis: 100%; font-size: 13.5px; font-weight: 600; margin: 0; border-radius: 12px; padding: 10px 14px; }
.sub-access-msg.is-ok { background: #E3F5EA; color: #1F7A47; }
.sub-access-msg.is-error { background: #FBE3E0; color: #B3261E; }

.sub-notice { position: relative; max-width: 780px; margin: -12px auto 22px; background: #FFF4D6; color: #7A5C0C; border-radius: 18px; padding: 12px 40px 12px 16px; font-size: 13.5px; font-weight: 700; line-height: 1.5; }
.sub-notice-close { position: absolute; right: 8px; top: 8px; width: 26px; height: 26px; border: none; border-radius: 50%; background: none; color: inherit; font-size: 18px; cursor: pointer; }

.sub-tiers { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; align-items: stretch; padding-top: 10px; }
.sub-tier { position: relative; background: #fff; border-radius: 30px; padding: 24px 22px 22px; display: flex; flex-direction: column; box-shadow: 0 1px 2px rgba(27,42,74,0.05), 0 18px 36px -26px rgba(27,42,74,0.4); }
.sub-tier.is-pro { background: linear-gradient(170deg, #fff 55%, var(--coral-pale)); box-shadow: 0 0 0 2px var(--coral), 0 26px 46px -26px rgba(255,107,74,0.6); transform: translateY(-6px); }
.sub-tier-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; font-weight: 700; border-radius: 999px; padding: 4px 12px; background: var(--coral); color: #fff; white-space: nowrap; }
.sub-tier-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 24px; margin: 0; }
.sub-tier-tagline { font-size: 13.5px; font-weight: 600; color: var(--muted); margin: 4px 0 14px; min-height: 36px; }
.sub-tier-price-row { display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap; }
.sub-tier-price { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 34px; line-height: 1.1; }
.sub-tier-price.is-small { font-size: 28px; }
.sub-tier-price-was { font-size: 14px; font-weight: 700; color: var(--muted); text-decoration: line-through; }
.sub-tier-per { font-size: 13px; font-weight: 700; color: var(--muted); }
.sub-tier-price-note { font-size: 12px; font-weight: 600; color: var(--muted); line-height: 1.45; margin: 4px 0 0; min-height: 34px; }
.sub-tier-features { list-style: none; margin: 16px 0 20px; padding: 0; flex: 1; display: flex; flex-direction: column; gap: 10px; }
.sub-tier-features li { display: flex; gap: 10px; align-items: flex-start; font-size: 14px; font-weight: 600; line-height: 1.45; }
.sub-check { width: 20px; height: 20px; border-radius: 50%; background: var(--coral); color: #fff; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
.sub-check svg { width: 12px; height: 12px; stroke-width: 3; }
.sub-tier.is-navy .sub-check { background: var(--navy); }
.sub-tier-cta { width: 100%; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; border: none; border-radius: 999px; padding: 12px 22px; cursor: pointer; background: var(--navy); color: #fff; transition: background 0.15s; }
.sub-tier-cta:hover:not(:disabled) { background: #12203B; }
.sub-tier.is-pro .sub-tier-cta { background: var(--coral); box-shadow: 0 10px 22px -10px rgba(255,107,74,0.75); }
.sub-tier.is-pro .sub-tier-cta:hover:not(:disabled) { background: var(--coral-deep); }
.sub-tier-cta:disabled { background: #F1F3F8; color: var(--muted); cursor: default; box-shadow: none; }

.sub-legal-note { text-align: center; font-size: 12.5px; font-weight: 600; color: var(--muted); margin: 24px 0 0; }
.sub-legal-note a { color: var(--ink); }

@media (max-width: 880px) {
  .sub-tiers { grid-template-columns: 1fr; max-width: 460px; margin: 0 auto; }
  .sub-tier.is-pro { transform: none; }
  .sub-tier-tagline, .sub-tier-price-note { min-height: 0; }
  .sub-heading { font-size: 27px; }
  .sub-rib-actions { align-items: flex-start; }
}
@media (max-width: 640px) { .sub-page { padding: 20px 12px 80px; } }
@media (prefers-reduced-motion: reduce) { .sub-access-btn, .sub-tier-cta { transition: none; } }
`;
