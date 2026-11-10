import { useAuth } from "./AuthContext";
import CustomLessonGate from "./CustomLessonGate.jsx";

import { hasUnseenPlan } from "./unseenAccess.js";

// Unseen Reading lessons open for every paid plan (see unseenAccess.js).
// Anyone else falls back to the custom lesson check, so a lesson that was shared with them still opens.

export default function UnseenAccessGate({ slug, children }) {
  const { plan, planReady } = useAuth();
  if (!planReady) return null; // wait for the plan, so the player is never built twice
  if (hasUnseenPlan(plan)) return children;
  return <CustomLessonGate slug={slug}>{children}</CustomLessonGate>;
}
