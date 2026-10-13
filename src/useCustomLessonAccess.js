import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";

const OWNER_EMAIL = "caldrin1999@gmail.com";

// The custom lessons the signed-in teacher can see: their own ("mine") and
// ones another teacher shared on a Homeroom post they can see ("shared").
// Returns a Map of slug -> { relation, ownerName }. If the database function
// is missing (sharing SQL not run yet) only the site owner sees anything.
export default function useCustomLessonAccess(enabled = true) {
  const { user } = useAuth();
  const [access, setAccess] = useState(() => new Map());
  const [ready, setReady] = useState(false);
  const [notSetUp, setNotSetUp] = useState(false);

  const load = useCallback(async () => {
    if (!user) { setAccess(new Map()); setReady(true); return; }
    const { data, error } = await supabase.rpc("my_custom_lessons");
    if (error) {
      setNotSetUp(true);
      setAccess(new Map());
      setReady(true);
      return;
    }
    setNotSetUp(false);
    setAccess(new Map((data || []).map((r) => [r.slug, { relation: r.relation, ownerName: r.owner_name }])));
    setReady(true);
  }, [user]);

  useEffect(() => {
    if (!enabled) return;
    load();
  }, [enabled, load]);

  const isOwnerEmail = user?.email?.toLowerCase() === OWNER_EMAIL;
  return { access, ready, notSetUp, isOwnerEmail, reload: load };
}
