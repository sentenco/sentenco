import { supabase } from "./supabaseClient";

// Follow (one-way) and Connect (two-way, needs accepting). Everything here quietly reports
// "not available" until sql/add_follow_and_connect.sql has been run, so the pages simply hide the controls.

function missing(error) {
  return !!error && (error.code === "42P01" || error.code === "PGRST202" || error.code === "PGRST205" || /does not exist|schema cache|Could not find/i.test(error.message || ""));
}

// Where I stand with another teacher: { available, following, conn: "none" | "pending_out" | "pending_in" | "connected" }.
export async function getNetworkState(me, other) {
  const [f, c] = await Promise.all([
    supabase.from("follows").select("followee_id").eq("follower_id", me).eq("followee_id", other).maybeSingle(),
    supabase.from("connections").select("requester_id, addressee_id, status").or(`and(requester_id.eq.${me},addressee_id.eq.${other}),and(requester_id.eq.${other},addressee_id.eq.${me})`).maybeSingle(),
  ]);
  if (missing(f.error) || missing(c.error)) return { available: false, following: false, conn: "none" };
  let conn = "none";
  if (c.data) conn = c.data.status === "accepted" ? "connected" : c.data.requester_id === me ? "pending_out" : "pending_in";
  return { available: true, following: !!f.data, conn };
}

export async function getNetworkCounts(id) {
  const { data, error } = await supabase.rpc("profile_network_counts", { p_id: id });
  if (error || !data) return null;
  return { followers: data.followers || 0, following: data.following || 0, connections: data.connections || 0 };
}

export const followUser = (id) => supabase.rpc("follow_user", { p_id: id });
export const unfollowUser = (id) => supabase.rpc("unfollow_user", { p_id: id });
export const requestConnection = (id) => supabase.rpc("request_connection", { p_id: id });
export const removeConnection = (id) => supabase.rpc("remove_connection", { p_id: id });
export const respondConnection = (id, accept) => supabase.rpc("respond_connection", { p_other: id, p_accept: accept });

// The ids of the teachers I follow (used by the Homeroom "Following" feed). null when the tables are not there yet.
export async function getFollowingIds(me) {
  const { data, error } = await supabase.from("follows").select("followee_id").eq("follower_id", me);
  if (error) return null;
  return (data || []).map((r) => r.followee_id);
}

// Everything the network page needs, as lists of teacher ids.
export async function getNetworkLists(me) {
  const [fol, ing, con] = await Promise.all([
    supabase.from("follows").select("follower_id, created_at").eq("followee_id", me).order("created_at", { ascending: false }),
    supabase.from("follows").select("followee_id, created_at").eq("follower_id", me).order("created_at", { ascending: false }),
    supabase.from("connections").select("requester_id, addressee_id, status, created_at").or(`requester_id.eq.${me},addressee_id.eq.${me}`).order("created_at", { ascending: false }),
  ]);
  if (missing(fol.error) || missing(ing.error) || missing(con.error)) return null;
  const rows = con.data || [];
  return {
    followers: (fol.data || []).map((r) => r.follower_id),
    following: (ing.data || []).map((r) => r.followee_id),
    requests: rows.filter((r) => r.status === "pending" && r.addressee_id === me).map((r) => r.requester_id),
    sent: rows.filter((r) => r.status === "pending" && r.requester_id === me).map((r) => r.addressee_id),
    connections: rows.filter((r) => r.status === "accepted").map((r) => (r.requester_id === me ? r.addressee_id : r.requester_id)),
  };
}

export async function getPeople(ids) {
  if (!ids.length) return {};
  const { data } = await supabase.from("profiles").select("id, display_name, avatar_url, years_teaching, teaches_ages").in("id", ids);
  const map = {};
  (data || []).forEach((p) => { map[p.id] = p; });
  return map;
}

// Who has asked to connect with me and is still waiting (ids), or null when the tables are not there yet.
export async function getPendingRequesterIds(me) {
  const { data, error } = await supabase.from("connections").select("requester_id").eq("addressee_id", me).eq("status", "pending");
  if (error) return null;
  return (data || []).map((r) => r.requester_id);
}

// Teachers you may know: [{ id, display_name, avatar_url, years_teaching, teaches_ages, shared_ages, shared_expertise, mutual_count, same_school, follows_me }].
// Empty until sql/add_suggestions_pins_saves_edit_delete.sql has been run.
export async function getSuggestions(limit = 8) {
  const { data, error } = await supabase.rpc("suggested_teachers", { p_limit: limit });
  if (error || !Array.isArray(data)) return [];
  return data;
}
