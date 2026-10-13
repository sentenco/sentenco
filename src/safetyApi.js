import { useCallback, useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";

// Report and Block. Everything reports "not available" (empty lists) until
// sql/add_report_and_block.sql has been run, so the app keeps working without it.

export const REPORT_REASONS = [
  { key: "spam", label: "Spam or advertising" },
  { key: "harassment", label: "Harassment or bullying" },
  { key: "inappropriate", label: "Inappropriate or unsafe content" },
  { key: "impersonation", label: "Pretending to be someone else" },
  { key: "other", label: "Something else" },
];

export const blockUser = (id) => supabase.rpc("block_user", { p_id: id });
export const unblockUser = (id) => supabase.rpc("unblock_user", { p_id: id });
export const reportContent = (type, target, reason, details) =>
  supabase.rpc("report_content", { p_type: type, p_target: target, p_reason: reason, p_details: details || null });

// Ids of every teacher hidden from me, in both directions (people I blocked and people who blocked me).
async function fetchHiddenIds() {
  const { data, error } = await supabase.rpc("blocked_ids");
  if (error || !Array.isArray(data)) return [];
  return data;
}

// Ids of the teachers I blocked myself (the ones I can unblock).
async function fetchMyBlocks() {
  const { data, error } = await supabase.from("blocks").select("blocked_id, created_at").order("created_at", { ascending: false });
  if (error) return [];
  return (data || []).map((r) => r.blocked_id);
}

// { hidden: ids hidden both ways, mine: ids I blocked, refresh() }.
export function useBlocked() {
  const { user } = useAuth();
  const [state, setState] = useState({ hidden: [], mine: [] });
  const refresh = useCallback(async () => {
    if (!user) { setState({ hidden: [], mine: [] }); return; }
    const [hidden, mine] = await Promise.all([fetchHiddenIds(), fetchMyBlocks()]);
    setState({ hidden, mine });
  }, [user?.id]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { refresh(); }, [refresh]);
  return { hidden: state.hidden, mine: state.mine, refresh };
}
