import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { supabase } from "./supabaseClient";

const AuthContext = createContext();

// Owner account is exempt from all plan gating everywhere in the app,
// regardless of what profiles.plan actually holds in the database.
const OWNER_EMAIL = "caldrin1999@gmail.com";

// One active login per account. Each sign-in claims the account with a random
// token kept in this browser; every other device holding an older token is
// signed out the next time it checks. See sql/one_active_session.sql. If that
// SQL has not been run, the calls fail and nothing is enforced.
const SESSION_TOKEN_KEY = "sentenco_session_token";
const SESSION_CHECK_MS = 45 * 1000;
function readToken() { try { return localStorage.getItem(SESSION_TOKEN_KEY); } catch { return null; } }
function writeToken(t) { try { if (t) localStorage.setItem(SESSION_TOKEN_KEY, t); else localStorage.removeItem(SESSION_TOKEN_KEY); } catch { /* storage blocked */ } }
function newToken() {
  const a = new Uint8Array(24);
  crypto.getRandomValues(a);
  return Array.from(a, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // What the user can currently use, from the database function my_plan():
  // { plan, source: "base"|"trial"|"grant"|"paid"|"owner", endsAt, trialAvailable }
  const [planInfo, setPlanInfo] = useState({ plan: "free", source: "none", endsAt: null, trialAvailable: false });
  const plan = planInfo.plan;
  // False until the plan for the current account has been looked up, so a gate
  // does not flash "locked" at someone whose plan is simply still loading.
  const [planReady, setPlanReady] = useState(false);
  const userRef = useRef(null);
  const planUserId = useRef(undefined);
  const claiming = useRef(false);
  const [kicked, setKicked] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const refreshPlan = useCallback(async () => {
    const u = userRef.current;
    if (!u) { setPlanInfo({ plan: "free", source: "none", endsAt: null, trialAvailable: false }); return; }
    if (u.email?.toLowerCase() === OWNER_EMAIL) {
      setPlanInfo({ plan: "pro_plus", source: "owner", endsAt: null, trialAvailable: false });
      return;
    }
    const { data, error } = await supabase.rpc("my_plan");
    if (!error && data) {
      setPlanInfo({
        plan: data.plan || "free",
        source: data.source || "base",
        endsAt: data.ends_at || null,
        trialAvailable: !!data.trial_available,
      });
      return;
    }
    // The trial tables are not set up yet (or the call failed): fall back to the plain profile plan.
    const { data: prof } = await supabase.from("profiles").select("plan").eq("id", u.id).maybeSingle();
    setPlanInfo({ plan: prof?.plan || "free", source: "base", endsAt: null, trialAvailable: false, notSetUp: true });
  }, []);

  useEffect(() => {
    userRef.current = user;
    // Only a different account resets "ready"; token refreshes hand us a new
    // user object for the same account and must not re-lock the page.
    const id = user?.id ?? null;
    if (planUserId.current !== id) { planUserId.current = id; setPlanReady(false); }
    let off = false;
    refreshPlan().finally(() => { if (!off && planUserId.current === id) setPlanReady(true); });
    return () => { off = true; };
  }, [user, refreshPlan]);

  // Keep the plan fresh: when the tab regains focus, every 5 minutes, and right when a trial or grant ends.
  useEffect(() => {
    if (!user) return undefined;
    const onVisible = () => { if (document.visibilityState === "visible") refreshPlan(); };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", refreshPlan);
    const every = setInterval(refreshPlan, 5 * 60 * 1000);
    let atEnd;
    if (planInfo.endsAt) {
      const ms = new Date(planInfo.endsAt).getTime() - Date.now() + 1500;
      if (ms > 0 && ms < 2147000000) atEnd = setTimeout(refreshPlan, ms);
    }
    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", refreshPlan);
      clearInterval(every);
      if (atEnd) clearTimeout(atEnd);
    };
  }, [user, planInfo.endsAt, refreshPlan]);

  // Make this browser the account's active login.
  const claimSession = useCallback(async () => {
    claiming.current = true;
    try {
      const token = newToken();
      writeToken(token);
      await supabase.rpc("claim_session", { p_token: token });
    } finally {
      claiming.current = false;
    }
  }, []);

  // Still the active login? If another device has taken over, sign this one out (this device only).
  const checkSession = useCallback(async () => {
    const u = userRef.current;
    if (!u || claiming.current || u.email?.toLowerCase() === OWNER_EMAIL) return;
    const token = readToken();
    if (!token) { await claimSession(); return; }   // signed in before this existed, or storage was cleared
    const { data, error } = await supabase.rpc("check_session", { p_token: token });
    if (error || data !== false) return;
    writeToken(null);
    setKicked(true);
    await supabase.auth.signOut({ scope: "local" });
  }, [claimSession]);

  useEffect(() => {
    if (!user) return undefined;
    checkSession();
    const onVisible = () => { if (document.visibilityState === "visible") checkSession(); };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", checkSession);
    const every = setInterval(checkSession, SESSION_CHECK_MS);
    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", checkSession);
      clearInterval(every);
    };
  }, [user?.id, checkSession]);

  async function signUp(email, password, companyId) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { company_id: companyId || "" } },
    });
    return error;
  }

  async function signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) { setKicked(false); await claimSession(); }
    return error;
  }

  async function signOut() {
    writeToken(null);
    await supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ user, loading, plan, planInfo, planReady, refreshPlan, signUp, signIn, signOut }}>
      {children}
      {kicked && !user && (
        <div role="alertdialog" aria-modal="true" aria-labelledby="kick-title" style={{ position: "fixed", inset: 0, zIndex: 3000, background: "rgba(43,42,74,0.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <div style={{ background: "#fff", borderRadius: 20, padding: "28px 26px", maxWidth: 380, textAlign: "center", fontFamily: "'Quicksand', sans-serif", color: "#2B2A4A", boxShadow: "0 24px 60px rgba(43,42,74,0.3)" }}>
            <h2 id="kick-title" style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 21, margin: "0 0 8px" }}>You were signed out</h2>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B6E96", margin: "0 0 18px" }}>
              Your account was signed in on another device. Sentenco allows one active login per account. Log in again to continue here.
            </p>
            <button type="button" onClick={() => setKicked(false)} style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", background: "#FF6B4A", border: "none", borderRadius: 999, padding: "11px 26px", cursor: "pointer" }}>OK</button>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}