import { useEffect, useRef, useState } from "react";
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

// What each plan unlocks (kept in line with the real gates: RouteAccessGate, audienceAccess, unseenAccess, Library).
// Prices are in pesos; the server keeps its own copy in api/_maya.js and never trusts the browser's amount.
const TIERS = [
  {
    key: "free",
    name: "Free",
    tagline: "Everything you need to start your day.",
    cta: "You're already here",
    ctaDisabled: true,
    features: [
      "Homeroom: community, Teacher's Desk and clock",
      "Articles (the Gazette)",
      "Kids story books and the Letter Board games",
      "Kids SPARK trial classes",
      "Follow, connect and message other teachers",
      "Teacher's Desk unlocks daily with 3 posts, comments or likes",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "Every category, unlocked.",
    price: { month: 299, year: 2990 },
    was: { month: 499, year: 5988 },
    highlighted: true,
    features: [
      "Everything in Free",
      "Every lesson in Speaking, Grammar, Vocabulary, Writing and Listening",
      "All story books, for Kids, Teens and Adults",
      "Unseen Reading: 269 reading cases, including 60 for Kids",
      "Custom Lessons made for your students",
      "Teacher's Desk always unlocked",
    ],
  },
  {
    key: "pro_plus",
    name: "Pro+",
    tagline: "The full curriculum, Kids to Adults.",
    price: { month: 350, year: 3500 },
    was: { month: 599, year: 7188 },
    navy: true,
    features: [
      "Everything in Pro",
      "The full A1 and A2 curriculum: 384 ready-to-teach lessons",
      "Kids (Discover, Soar), Teens (Ignite, Ablaze), Adults (Sprout, Bloom)",
      "A teacher guide for every curriculum lesson",
      "SPARK trial classes for Teens and Adults",
    ],
  },
];

const peso = (n) => "₱" + Number(n).toLocaleString("en-PH", { maximumFractionDigits: 0 });

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
    sub = "Pro+ access: every category and the full curriculum. No card needed.";
    action = <button type="button" className="sub-access-btn" onClick={() => setAuthMode("signup")}>Create a free account to start</button>;
  } else if (planInfo.notSetUp) {
    headline = "Free trials are opening soon";
    sub = "We're setting up beta access. Check back in a little while.";
  } else if (planInfo.source === "paid" && planInfo.endsAt) {
    headline = `${PLAN_NAMES[plan]} is active`;
    sub = `Paid until ${niceDate(planInfo.endsAt)} (${daysLeft(planInfo.endsAt)} day${daysLeft(planInfo.endsAt) === 1 ? "" : "s"} left). Buy another pass any time: it starts when this one ends.`;
  } else if (active) {
    const what = planInfo.source === "trial" ? "Free trial" : "Free access";
    headline = `${what} active: ${PLAN_NAMES[plan]}`;
    sub = `${daysLeft(planInfo.endsAt)} day${daysLeft(planInfo.endsAt) === 1 ? "" : "s"} left. Ends ${niceDate(planInfo.endsAt)}.`;
  } else if (planInfo.trialAvailable) {
    headline = "Try everything free for 7 days";
    sub = "Pro+ access: every category and the full curriculum. No card needed. Your 7 days start when you press the button.";
    action = <button type="button" className="sub-access-btn" disabled={busy} onClick={startTrial}>{busy ? "Starting..." : "Start my free trial"}</button>;
  } else if (plan === "free") {
    headline = "Your free trial has ended";
    sub = "You still have Homeroom, Articles, Kids stories and the Letter Board. Pick a plan below to unlock the rest, or use a code if you were invited.";
  } else {
    headline = `You're on ${PLAN_NAMES[plan]}`;
    sub = "Everything in your plan is unlocked.";
  }

  const showRing = user && active && planInfo.endsAt && planInfo.source === "trial";
  const ringPct = showRing ? Math.min(100, Math.round((daysLeft(planInfo.endsAt) / 7) * 100)) : 0;

  return (
    <div className="sub-rib">
      <div className="sub-rib-text">
        <p className="sub-rib-eyebrow">{planInfo.source === "paid" ? "Your plan" : active ? (planInfo.source === "trial" ? "Free trial" : "Free access") : "Beta access"}</p>
        <h3 className="sub-rib-title">{headline}</h3>
        <p className="sub-rib-sub">{sub}</p>
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

const PAY_MESSAGES = {
  cancelled: { kind: "info", text: "Payment cancelled. Nothing was charged." },
  failed: { kind: "error", text: "The payment didn't go through. Nothing was charged. You can try again, or use another card or wallet." },
  expired: { kind: "error", text: "The payment page expired before it was finished. Nothing was charged. You can start again." },
  pending: { kind: "info", text: "Maya is still processing your payment. Your plan turns on as soon as it's confirmed; you can refresh this page in a minute." },
};

async function callApi(path, body) {
  const { data } = await supabase.auth.getSession();
  const token = data?.session?.access_token;
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: JSON.stringify(body),
  });
  let json = {};
  try { json = await res.json(); } catch { /* empty */ }
  return { ok: res.ok, json };
}

export default function Subscription() {
  const { user, plan, planInfo, refreshPlan } = useAuth();
  const [period, setPeriod] = useState("month");
  const [notice, setNotice] = useState(null); // { kind: "ok" | "error" | "info", text }
  const [busyTier, setBusyTier] = useState(null);
  const [authMode, setAuthMode] = useState(null);
  const handled = useRef(false);
  const testMode = typeof window !== "undefined" && !/^(www\.)?sentenco\.com$/i.test(window.location.hostname);

  // Back from Maya: /library/subscription?pay=done|failed|cancelled&ref=<payment id>
  useEffect(() => {
    if (handled.current || !user) return;
    const params = new URLSearchParams(window.location.search);
    const pay = params.get("pay");
    const ref = params.get("ref");
    if (!pay || !ref) return;
    handled.current = true;
    const clean = () => window.history.replaceState(null, "", window.location.pathname);
    (async () => {
      setNotice({ kind: "info", text: "Checking your payment with Maya..." });
      let result = null;
      for (let i = 0; i < 5; i++) {
        const { ok, json } = await callApi("/api/maya-confirm", { ref });
        result = ok ? json : { status: "error", error: json.error };
        if (!ok || result.status !== "pending" || pay !== "done") break;
        await new Promise((r) => setTimeout(r, 2500));
      }
      clean();
      if (result?.status === "paid") {
        await refreshPlan();
        const until = result.ends_at ? ` until ${niceDate(result.ends_at)}` : "";
        setNotice({ kind: "ok", text: `Payment received. ${PLAN_NAMES[result.plan] || "Your plan"} is active${until}. Thank you!` });
      } else if (result?.status && PAY_MESSAGES[result.status]) {
        setNotice(PAY_MESSAGES[pay === "cancelled" && result.status === "pending" ? "cancelled" : result.status]);
      } else {
        setNotice({ kind: "error", text: result?.error || "We couldn't check the payment just now. If you paid, your plan turns on shortly; refresh this page in a minute." });
      }
    })();
  }, [user, refreshPlan]);

  async function handleUpgrade(tier) {
    if (!user) { setAuthMode("signup"); return; }
    setBusyTier(tier.key);
    setNotice(null);
    const { ok, json } = await callApi("/api/maya-checkout", { plan: tier.key, period });
    if (ok && json.redirectUrl) {
      window.location.assign(json.redirectUrl);
      return;
    }
    setBusyTier(null);
    setNotice({ kind: "error", text: json.error || "We couldn't open the payment page. Please try again." });
  }

  const paidOrTrial = planInfo.source === "paid" || planInfo.source === "grant" || planInfo.source === "trial";

  return (
    <div className="sub-shell">
      <style>{CSS}</style>
      <div className="sub-page">
        <div className="sub-intro">
          <p className="sub-eyebrow">Plans</p>
          <h2 className="sub-heading">Simple pricing, built around how you actually teach</h2>
          <p className="sub-lede">Start free. Upgrade when the lessons or the curriculum become part of your daily routine.</p>
        </div>

        <AccessPanel />

        {notice && (
          <div className={`sub-notice is-${notice.kind}`} role="status">
            {notice.text}
            <button type="button" className="sub-notice-close" onClick={() => setNotice(null)} aria-label="Dismiss">&times;</button>
          </div>
        )}

        <div className="sub-period" role="group" aria-label="Billing period">
          <button type="button" aria-pressed={period === "month"} onClick={() => setPeriod("month")}>Monthly</button>
          <button type="button" aria-pressed={period === "year"} onClick={() => setPeriod("year")}>Yearly <span className="sub-save">2 months free</span></button>
        </div>

        <div className="sub-tiers">
          {TIERS.map((t) => {
            const isCurrent = plan === t.key && (t.key === "free" || paidOrTrial);
            const price = t.price?.[period];
            let cta = t.cta;
            if (t.key !== "free") {
              cta = busyTier === t.key ? "Opening Maya..." : isCurrent && planInfo.source === "paid"
                ? `Add ${period === "year" ? "1 year" : "1 month"}`
                : `Get ${t.name}, ${period === "year" ? "1 year" : "1 month"}`;
            }
            return (
              <div className={`sub-tier${t.highlighted ? " is-pro" : ""}${t.navy ? " is-navy" : ""}`} key={t.key}>
                {t.highlighted && <span className="sub-tier-badge">Most popular</span>}
                <h3 className="sub-tier-name">{t.name}</h3>
                <p className="sub-tier-tagline">{t.tagline}</p>
                <div className="sub-tier-price-row">
                  {price ? (
                    <>
                      <span className="sub-tier-price-was">{peso(t.was[period])}</span>
                      <span className="sub-tier-price">{peso(price)}</span>
                      <span className="sub-tier-per">{period === "year" ? "/yr" : "/mo"}</span>
                    </>
                  ) : (
                    <span className="sub-tier-price is-small">Free forever</span>
                  )}
                </div>
                <p className="sub-tier-price-note">
                  {price ? (period === "year" ? `About ${peso(Math.round(price / 12))} a month. Pay once for 12 months.` : "Early adopter price. Pay once for 30 days, no auto-charge.") : "\u00A0"}
                </p>
                <ul className="sub-tier-features">
                  {t.features.map((f, i) => (
                    <li key={i}><span className="sub-check"><CheckIcon /></span>{f}</li>
                  ))}
                </ul>
                <button type="button" className="sub-tier-cta" disabled={t.ctaDisabled || busyTier !== null} onClick={() => handleUpgrade(t)}>
                  {cta}
                </button>
              </div>
            );
          })}
        </div>

        <p className="sub-pay-note">
          Pay on Maya's secure page with the Maya app, QR Ph (works with GCash and other banks) or a credit or debit card. Passes don't renew by themselves; we'll remind you before yours ends.
          {testMode && <><br /><b>Test mode:</b> no real money moves here. Use Maya's test card 4123 4501 3100 1381, any name, 12/30, CVV 123, password mctest1.</>}
        </p>

        <p className="sub-legal-note">
          By subscribing you agree to our <a href="/library/legal/terms">Terms of Service</a> and{" "}
          <a href="/library/legal/refund">Refund & Cancellation Policy</a>.
        </p>
      </div>
      {authMode && <AuthForm mode={authMode} onClose={() => setAuthMode(null)} />}
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
.sub-notice.is-ok { background: #E3F5EA; color: #1F7A47; }
.sub-notice.is-error { background: #FBE3E0; color: #B3261E; }
.sub-notice.is-info { background: #EAF0FB; color: #2B3F6B; }
.sub-period { display: flex; justify-content: center; gap: 4px; width: max-content; margin: 0 auto 22px; padding: 4px; background: #fff; border-radius: 999px; box-shadow: 0 1px 2px rgba(27,42,74,0.06), 0 10px 22px -18px rgba(27,42,74,0.4); }
.sub-period button { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; color: var(--ink); background: none; border: none; border-radius: 999px; padding: 9px 18px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; }
.sub-period button[aria-pressed="true"] { background: var(--navy); color: #fff; }
.sub-period button:focus-visible { outline: 3px solid var(--coral); outline-offset: 2px; }
.sub-save { font-size: 11px; font-weight: 700; background: var(--coral-pale); color: var(--coral-deep); border-radius: 999px; padding: 2px 8px; }
.sub-period button[aria-pressed="true"] .sub-save { background: var(--coral); color: #fff; }
.sub-pay-note { text-align: center; font-size: 13px; font-weight: 600; color: var(--muted); line-height: 1.6; max-width: 640px; margin: 22px auto 0; }
.sub-pay-note b { color: var(--ink); }
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
