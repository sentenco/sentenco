import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { supabase } from "./supabaseClient";

const AuthContext = createContext();

// Owner account is exempt from all plan gating everywhere in the app,
// regardless of what profiles.plan actually holds in the database.
const OWNER_EMAIL = "caldrin1999@gmail.com";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // What the user can currently use, from the database function my_plan():
  // { plan, source: "base"|"trial"|"grant"|"paid"|"owner", endsAt, trialAvailable }
  const [planInfo, setPlanInfo] = useState({ plan: "free", source: "none", endsAt: null, trialAvailable: false });
  const plan = planInfo.plan;
  const userRef = useRef(null);

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
    refreshPlan();
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
    return error;
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ user, loading, plan, planInfo, refreshPlan, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}