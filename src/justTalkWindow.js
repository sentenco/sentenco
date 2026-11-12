// Just Talk Boards always open in half the screen (the right half), full height.
// A board window that is already open is resized and moved too, both from the hub and when the board loads.

export function halfScreen() {
  const s = window.screen || {};
  const sw = s.availWidth || 1600;
  const w = Math.floor(sw / 2);
  return { w, h: s.availHeight || 900, left: (s.availLeft || 0) + (sw - w), top: s.availTop || 0 };
}

export function openBoardWindow(url) {
  const { w, h, left, top } = halfScreen();
  const win = window.open(url, "justTalkBoard", `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`);
  try { win?.resizeTo(w, h); win?.moveTo(left, top); win?.focus(); } catch { /* browser blocked the resize */ }
}

export function fitBoardWindow() {
  if (!window.opener) return;
  const { w, h, left, top } = halfScreen();
  try { window.resizeTo(w, h); window.moveTo(left, top); } catch { /* browser blocked the resize */ }
}
