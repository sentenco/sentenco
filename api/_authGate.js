// Shared server-side Pro+ check for the AI endpoints (dictionary-lookup,
// grammar-check, translate). Leading underscore keeps Vercel from treating
// this as its own route. The client only enforces this in the UI
// (SearchLookup.jsx) -- without this check anyone who found the endpoint
// URL could call it directly and bypass the paywall entirely.
//
// Access comes from the database function my_plan() (base plan, 7-day trial,
// promo grants -- see sql/entitlements_trial_and_codes.sql). Trial accounts
// also have a daily cap on AI calls (ai_trial_hit) so a free trial can't run
// up the API bill.

import { createClient } from "@supabase/supabase-js";

const OWNER_EMAIL = "caldrin1999@gmail.com";

function supabaseFor(token) {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { global: { headers: { Authorization: `Bearer ${token}` } } });
}

// Returns { ok: true } when the request may use the AI tools, otherwise
// { ok: false, message } with a message safe to show the user. Never throws.
export async function checkAiAccess(req, featureName = "This tool") {
  const denied = { ok: false, message: `${featureName} is a Sentenco Pro+ feature.` };
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) return denied;

  const supabase = supabaseFor(token);
  if (!supabase) return denied;

  const { data: userData, error: userError } = await supabase.auth.getUser(token);
  if (userError || !userData?.user) return denied;
  const user = userData.user;

  if (user.email?.toLowerCase() === OWNER_EMAIL) return { ok: true };

  const { data: info, error: planError } = await supabase.rpc("my_plan");
  let plan;
  if (!planError && info) {
    plan = info.plan;
  } else {
    // Trial tables not set up yet: fall back to the plain profile plan.
    const { data: profile } = await supabase.from("profiles").select("plan").eq("id", user.id).maybeSingle();
    plan = profile?.plan;
  }
  if (plan !== "pro_plus") return denied;

  if (!planError && info?.source === "trial") {
    const { data: allowed } = await supabase.rpc("ai_trial_hit", { p_limit: 30 });
    if (allowed === false) {
      return { ok: false, message: "You've used today's 30 free-trial lookups. They reset tomorrow, or redeem a code for full access." };
    }
  }
  return { ok: true };
}

// Backwards-compatible boolean wrapper.
export async function isProPlusRequest(req) {
  return (await checkAiAccess(req)).ok;
}
