import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useCanSeeTeensAdults, isTeensAdultsPath } from "./audienceAccess";

// Wraps every route. Lesson and activity pages that belong to a paid category
// open only when the account's current plan covers them, so pasting a direct
// link after a trial ends no longer gets anyone in. Category pages that live
// inside the Library already show their own lock screen; this covers the
// standalone players and hubs. The lesson content itself still ships in the
// app bundle, so this is a gate for ordinary use, not encryption.

const RANK = { free: 0, pro: 1, pro_plus: 2 };

const PRO_PREFIXES = [
  "/library/grammar/",
  "/library/vocabulary/",
  "/library/stress",
  "/library/writing/",
  "/library/listening/",
  "/library/storybook",
  "/library/forge",
  "/library/relay",
  "/library/ascend",
  "/library/bridge",
  "/library/derive",
  "/library/sequence",
  "/library/shift",
];

// The plan a path needs: "pro_plus", "pro", or null for open pages.
export function requiredPlanFor(pathname) {
  const p = pathname.replace(/\/+$/, "") || "/";
  // Curriculum lesson players (unit pages are gated inside the Library).
  if (p.startsWith("/library/curriculum/") && p.includes("/lesson/")) return "pro_plus";
  if (p.startsWith("/teacher-guide/")) return "pro_plus";
  if (PRO_PREFIXES.some((x) => p === x.replace(/\/$/, "") || p.startsWith(x))) return "pro";
  return null;
}

function Screen({ title, text, actions }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FBFAF7", padding: 24, fontFamily: "'Quicksand', sans-serif" }}>
      <div style={{ maxWidth: 440, textAlign: "center", color: "#2B2A4A" }}>
        <img src="/logo-sentenco.png" alt="" style={{ height: 40, marginBottom: 14 }} />
        <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 24, margin: "0 0 8px" }}>{title}</h1>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#6B6E96", margin: "0 0 18px" }}>{text}</p>
        {actions && <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>{actions}</div>}
      </div>
    </div>
  );
}

const btn = (primary) => ({
  fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, border: "none", borderRadius: 999, padding: "11px 24px", cursor: "pointer",
  color: primary ? "#fff" : "#FF6B4A", background: primary ? "#FF6B4A" : "#FDECE5",
});

export default function RouteAccessGate({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, loading, plan, planInfo, planReady } = useAuth();
  const canSeeTeensAdults = useCanSeeTeensAdults();
  const need = requiredPlanFor(pathname);
  const teensAdults = isTeensAdultsPath(pathname);

  if (!need && !teensAdults) return children;
  if (loading || !planReady) return <Screen title="One moment" text="Checking your access." />;
  // Teens and Adults pages are hidden, not just locked, for accounts without Pro+.
  if (teensAdults && !canSeeTeensAdults) {
    return (
      <Screen
        title="Page not found"
        text="We couldn't find that page."
        actions={<button type="button" style={btn(true)} onClick={() => navigate("/library")}>Back to Sentenco</button>}
      />
    );
  }
  if (!need) return children;
  if (RANK[plan] >= RANK[need]) return children;

  const home = <button type="button" style={btn(false)} onClick={() => navigate("/library")}>Back to Sentenco</button>;
  const plans = (label) => <button type="button" style={btn(true)} onClick={() => navigate("/library/subscription")}>{label}</button>;
  const tier = need === "pro_plus" ? "Pro+" : "Pro";

  if (!user) {
    return (
      <Screen
        title="Sign in to open this lesson"
        text={`This lesson is part of Sentenco ${tier}. Sign in, and start your free 7-day trial, no card needed.`}
        actions={<>{plans("See how it works")}{home}</>}
      />
    );
  }
  if (!planInfo.notSetUp && planInfo.trialAvailable) {
    return (
      <Screen
        title={`This lesson is part of Sentenco ${tier}`}
        text="Start your free 7-day trial to open it. No card needed."
        actions={<>{plans("Start your free 7-day trial")}{home}</>}
      />
    );
  }
  return (
    <Screen
      title={need === "pro_plus" && plan === "pro" ? "This lesson is part of Pro+" : `This lesson is part of Sentenco ${tier}`}
      text="Your access has ended or doesn't include this lesson. Paid plans open after the beta. If you were invited, redeem your code on the plans page."
      actions={<>{plans("See plans or redeem a code")}{home}</>}
    />
  );
}
