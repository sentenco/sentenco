import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { SUPPORT_EMAIL } from "./siteConfig.js";
import { ageYearsLine, fetchOwnProfile } from "./profileFields.js";

const OWNER_EMAIL = "caldrin1999@gmail.com";

function Icon({ name }) {
  const paths = {
    user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
    card: <><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    key: <path d="M21 2l-2 2m-7.6 7.6a5.5 5.5 0 1 1-7.8 7.8 5.5 5.5 0 0 1 7.8-7.8zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />,
    help: <><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

// What the plan banner says, from the account's current access (trial, code, paid, free or owner).
function planBanner(planInfo, isOwner) {
  const days = planInfo.endsAt ? Math.max(1, Math.ceil((new Date(planInfo.endsAt).getTime() - Date.now()) / 86400000)) : null;
  const planName = planInfo.plan === "pro_plus" ? "Pro+" : planInfo.plan === "pro" ? "Pro" : "Free";
  if (isOwner) return { tone: "owner", chip: "Owner", line: "Full access", sub: "Every plan, every page.", bar: null, cta: null };
  if (planInfo.source === "trial") {
    return {
      tone: "trial", chip: "Free trial", line: `${days} ${days === 1 ? "day" : "days"} left`,
      sub: `Pro+ access ends ${fmtDate(planInfo.endsAt)}.`, bar: Math.min(100, Math.max(6, Math.round(((7 - days) / 7) * 100))), cta: "See plans",
    };
  }
  if (planInfo.source === "grant") {
    return { tone: "pro", chip: planName, line: "Free access", sub: `Ends ${fmtDate(planInfo.endsAt)} (${days} ${days === 1 ? "day" : "days"} left).`, bar: null, cta: "Plans and codes" };
  }
  if (planInfo.plan !== "free") {
    return { tone: "pro", chip: planName, line: "Active", sub: planInfo.endsAt ? `Renews or ends ${fmtDate(planInfo.endsAt)}.` : "Thank you for being a member.", bar: null, cta: "Manage plan" };
  }
  if (planInfo.trialAvailable && !planInfo.notSetUp) {
    return { tone: "free", chip: "Free plan", line: "Homeroom, Articles and Kids stories", sub: "Try everything free for 7 days. No card needed.", bar: null, cta: "Start free trial" };
  }
  return { tone: "free", chip: "Free plan", line: "Homeroom, Articles and Kids stories", sub: "Paid plans open after the beta. Have a code? Redeem it.", bar: null, cta: "See plans" };
}

// The account menu under the profile photo: who you are, your plan, four big tiles, and Log out.
export default function AccountMenu({ user, planInfo, isAdmin, navigate, onClose, onSignOut }) {
  const [me, setMe] = useState(null);
  const isOwner = user?.email?.toLowerCase() === OWNER_EMAIL;

  useEffect(() => {
    if (!user) return undefined;
    let off = false;
    fetchOwnProfile(supabase, user.id, "display_name, avatar_url, country, years_teaching")
      .then((data) => { if (!off) setMe(data || null); });
    return () => { off = true; };
  }, [user]);

  const name = me?.display_name || localStorage.getItem("sentenco_teacher_name") || "Teacher";
  const years = me?.years_teaching;
  const sub = ageYearsLine(me?.age, years);
  const initials = ((name.trim().split(/\s+/)[0]?.[0] || "T") + (name.trim().split(/\s+/)[1]?.[0] || "")).toUpperCase();
  const banner = planBanner(planInfo, isOwner);
  const go = (path) => () => { navigate(path); onClose(); };

  return (
    <div className="am-menu" role="menu">
      <style>{CSS}</style>
      <div className="am-head">
        <span className="am-av">{me?.avatar_url ? <img src={me.avatar_url} alt="" /> : initials}</span>
        <div className="am-head-text"><b>{name}</b>{sub && <small>{sub}</small>}</div>
      </div>

      <div className={`am-banner am-banner--${banner.tone}`}>
        <div className="am-banner-row">
          <span className={`am-chip am-chip--${banner.tone}`}>{banner.chip}</span>
          {banner.cta && <button type="button" className="am-cta" onClick={go("/library/subscription")}>{banner.cta}</button>}
        </div>
        <b className="am-banner-line">{banner.line}</b>
        {banner.bar !== null && <div className="am-meter"><i style={{ width: `${banner.bar}%` }} /></div>}
        <p>{banner.sub}</p>
      </div>

      <div className="am-tiles">
        <button type="button" className="am-tile" role="menuitem" onClick={go(`/library/teacher/${user.id}`)}><span className="am-ic"><Icon name="user" /></span>My profile</button>
        <button type="button" className="am-tile" role="menuitem" onClick={go("/library/subscription")}><span className="am-ic"><Icon name="card" /></span>Subscription</button>
        {isAdmin ? (
          <>
            <button type="button" className="am-tile" role="menuitem" onClick={go("/library/admin/teachers")}><span className="am-ic"><Icon name="users" /></span>Teachers</button>
            <button type="button" className="am-tile" role="menuitem" onClick={go("/library/admin/access")}><span className="am-ic"><Icon name="key" /></span>Access codes</button>
          </>
        ) : (
          <>
            <a className="am-tile" role="menuitem" href={`mailto:${SUPPORT_EMAIL}`} onClick={onClose}><span className="am-ic"><Icon name="help" /></span>Help &amp; Support</a>
            <button type="button" className="am-tile" role="menuitem" onClick={go("/library/legal/terms")}><span className="am-ic"><Icon name="shield" /></span>Terms &amp; Privacy</button>
          </>
        )}
      </div>

      <div className="am-foot">
        {isAdmin ? (
          <div className="am-links">
            <button type="button" onClick={go("/library/legal/terms")}>Terms &amp; Privacy</button>
            <a href={`mailto:${SUPPORT_EMAIL}`} onClick={onClose}>Help &amp; Support</a>
          </div>
        ) : <span />}
        <button type="button" className="am-logout" onClick={() => { onSignOut(); onClose(); }}>Log out</button>
      </div>
    </div>
  );
}

const CSS = `
.am-menu {
  position: absolute; top: 48px; right: 0; z-index: 40; width: 380px; max-width: calc(100vw - 24px);
  background: #fff; border-radius: 24px; padding: 14px; font-family: 'Quicksand', sans-serif; color: #2B2A4A;
  box-shadow: 0 24px 60px -12px rgba(27,42,74,0.35), 0 0 0 1px rgba(43,42,74,0.09);
}
.am-menu * { box-sizing: border-box; }
.am-head { display: flex; align-items: center; gap: 12px; padding: 4px 4px 12px; }
.am-av { width: 48px; height: 48px; border-radius: 50%; overflow: hidden; flex-shrink: 0; background: #1B2A4A; color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 16px; display: flex; align-items: center; justify-content: center; }
.am-av img { width: 100%; height: 100%; object-fit: cover; }
.am-head-text { min-width: 0; }
.am-head-text b { display: block; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 17px; color: #2B2A4A; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.am-head-text small { color: #8B84A3; font-weight: 600; font-size: 12.5px; }
.am-banner { border-radius: 18px; padding: 14px 16px; margin-bottom: 12px; background: #E7EAF2; }
.am-banner--trial { background: linear-gradient(120deg, #FFF4D6, #FDECE5); }
.am-banner--pro { background: linear-gradient(120deg, #E3E7F4, #E9ECF3); }
.am-banner--owner { background: #E9ECF3; }
.am-banner-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 8px; }
.am-chip { display: inline-flex; border-radius: 999px; padding: 4px 11px; font-size: 12px; font-weight: 700; background: #E7EAF2; color: #2B2A4A; }
.am-chip--trial { background: #FFF4D6; color: #7A5C0C; box-shadow: 0 0 0 1px rgba(122,92,12,0.2); }
.am-chip--pro { background: #1B2A4A; color: #fff; }
.am-chip--owner { background: #2B2A4A; color: #fff; }
.am-chip--free { background: #fff; }
.am-cta { border: none; background: #FF6B4A; color: #fff; border-radius: 999px; padding: 8px 16px; font-family: 'Quicksand', sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; }
.am-cta:hover { background: #E0502F; }
.am-banner-line { display: block; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 16px; }
.am-meter { height: 8px; border-radius: 999px; background: rgba(255,255,255,0.75); overflow: hidden; margin-top: 8px; }
.am-meter i { display: block; height: 100%; background: #FF6B4A; border-radius: 999px; }
.am-banner p { margin: 8px 0 0; font-size: 12.5px; font-weight: 600; color: #55527a; line-height: 1.4; }
.am-tiles { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.am-tile { display: flex; flex-direction: column; gap: 8px; align-items: flex-start; text-align: left; text-decoration: none; border: none; background: #F1F3F8; border-radius: 16px; padding: 12px; font-family: 'Quicksand', sans-serif; font-size: 13.5px; font-weight: 700; color: #2B2A4A; cursor: pointer; }
.am-tile:hover { background: #E7EAF2; }
.am-ic { width: 34px; height: 34px; border-radius: 11px; background: #fff; color: #1B2A4A; display: flex; align-items: center; justify-content: center; }
.am-ic svg { width: 18px; height: 18px; }
.am-foot { display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding: 6px 4px 0; }
.am-links { display: flex; gap: 4px; flex-wrap: wrap; }
.am-links button, .am-links a { border: none; background: none; text-decoration: none; font-family: 'Quicksand', sans-serif; font-size: 12.5px; font-weight: 700; color: #8B84A3; padding: 8px 8px; border-radius: 10px; cursor: pointer; }
.am-links button:hover, .am-links a:hover { background: #F1F3F8; color: #2B2A4A; }
.am-logout { border: none; background: none; font-family: 'Quicksand', sans-serif; font-size: 13.5px; font-weight: 700; color: #B3361F; padding: 8px 12px; border-radius: 10px; cursor: pointer; margin-left: auto; }
.am-logout:hover { background: #FBE6E1; }
`;
