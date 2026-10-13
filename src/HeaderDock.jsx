// Shared pieces of the small switcher pill (search / Homeroom / Convo / Profile / bell) that sits next to the account photo.

export function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h5v-6h4v6h5V10" />
    </svg>
  );
}

// Small switcher for the social pages (Homeroom, Convo, your profile), shown on Convo and profile pages
// in place of the section tab rows.
export const DOCK_CSS = `
.gc-topbar-left { display: flex; align-items: center; gap: 18px; min-width: 0; }
.gc-topbar.has-dock .gc-topbar-actions { gap: 14px; }
.gc-topbar .avatar-btn, .gc-topbar .avatar-btn-img { border-radius: 50%; }
.gc-hsearch { display: flex; align-items: center; gap: 6px; min-width: 0; }
.gc-hsearch-btn { width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(43,42,74,0.1); background: #fff; color: #8B84A3; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; transition: color 0.15s, border-color 0.15s, background 0.15s; }
.gc-hsearch-btn svg { width: 18px; height: 18px; }
.gc-hsearch-btn:hover, .gc-hsearch.is-open .gc-hsearch-btn { color: #E0502F; border-color: #FF6B4A; background: rgba(255,107,74,0.08); }
.gc-hsearch-btn:focus-visible, .gc-hsearch-input:focus-visible { outline: 3px solid #1B2A4A; outline-offset: 2px; }
.gc-hsearch-input { width: 240px; max-width: 34vw; border: 1px solid rgba(43,42,74,0.1); border-radius: 999px; background: #F1F3F8; padding: 12px 18px; font-family: 'Quicksand', sans-serif; font-size: 13.5px; font-weight: 600; color: #2B2A4A; outline: none; }
.gc-hsearch-input:focus { border-color: #FF6B4A; background: #fff; }
.gc-dock-bellwrap { position: relative; display: flex; }
.gc-dock-bellbtn { padding: 12px 14px; }
.gc-dock { display: flex; align-items: center; gap: 6px; background: #F1F3F8; border-radius: 999px; padding: 6px; }
.gc-dock-btn { border: none; background: none; border-radius: 999px; padding: 12px 18px; font-family: 'Quicksand', sans-serif; font-size: 13.5px; font-weight: 700; color: #8B84A3; display: flex; align-items: center; gap: 7px; cursor: pointer; transition: color 0.15s, background 0.15s; }
.gc-dock-btn { position: relative; }
.gc-dock-dot { position: absolute; top: 8px; right: 9px; width: 9px; height: 9px; border-radius: 50%; background: #FF6B4A; border: 1.5px solid #F1F3F8; }
.gc-dock-btn.is-on .gc-dock-dot { border-color: #fff; }
.gc-dock-btn svg { width: 19px; height: 19px; flex-shrink: 0; }
.gc-dock-btn:hover { color: #2B2A4A; }
.gc-dock-btn.is-on { background: #fff; color: #2B2A4A; box-shadow: 0 1px 4px rgba(27,42,74,0.14); }
.gc-dock-btn:focus-visible { outline: 3px solid #1B2A4A; outline-offset: 2px; }
@media (max-width: 1000px) {
  .gc-topbar-left { gap: 10px; }
  .gc-hsearch-input { width: 130px; }
  .gc-topbar.has-dock .gc-topbar-actions { gap: 6px; }
  .gc-dock-btn { padding: 11px 14px; }
  .gc-dock-btn span { display: none; }
  .gc-dock-btn.is-on span { display: inline; }
}
@media (max-width: 520px) { .gc-dock-btn:not(.gc-dock-bellbtn) { display: none; } .gc-dock { background: none; padding: 0; } }
`;

