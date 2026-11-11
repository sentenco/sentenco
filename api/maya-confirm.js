// Called when the teacher comes back from Maya: checks the payment with Maya and, if it went
// through, turns on the plan. POST { ref } (the payment id) with the teacher's Supabase token.
// Returns { status: "paid" | "pending" | "failed" | "cancelled" | "expired", plan, ends_at }.

import { adminDb, userFromRequest, confirmPayment } from "./_maya.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  const user = await userFromRequest(req);
  if (!user) {
    res.status(401).json({ error: "Sign in first, then try again." });
    return;
  }

  const ref = typeof req.body?.ref === "string" ? req.body.ref : "";
  if (!/^[0-9a-f-]{36}$/i.test(ref)) {
    res.status(400).json({ error: "Missing payment reference." });
    return;
  }

  const db = adminDb();
  if (!db) {
    res.status(503).json({ error: "Payments aren't switched on yet." });
    return;
  }

  const { data: payment } = await db.from("payments").select("*").eq("id", ref).eq("user_id", user.id).maybeSingle();
  if (!payment) {
    res.status(404).json({ error: "We couldn't find that payment." });
    return;
  }

  const result = await confirmPayment(db, payment);
  res.status(200).json(result);
}
