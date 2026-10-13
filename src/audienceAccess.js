import { useAuth } from "./AuthContext";

// The Teens and Adults tracks are visible only to accounts with Pro+ access
// (the 7-day trial and promo codes count, and so does the owner). Everyone
// else, including free accounts after the beta, sees the Kids track only.
// To open them to everyone again, make this always return true.
export function useCanSeeTeensAdults() {
  const { plan, planReady } = useAuth();
  return !!planReady && plan === "pro_plus";
}

export const isTeensAdultsPath = (pathname) =>
  /^\/library\/(curriculum|spark)\/(teens|adults)(\/|$)/.test(pathname);
