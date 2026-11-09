// Features that are not ready for the public beta. They show on staging (staging.sentenco.com) and on this
// computer while building, and stay hidden on the live site. To open one up, return true for every host.

const host = typeof window !== "undefined" ? window.location.hostname : "";
export const isStagingOrLocal = host === "staging.sentenco.com" || host === "localhost" || host === "127.0.0.1";

// Letter Board: open to everyone since 2026-11-10 (was staging and local only).
export const SHOW_LETTER_BOARD = true;
