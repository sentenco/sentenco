// Shared look for the owner-only pages (Access codes, Payments).
export const ADMIN_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');
.aac-shell { min-height: 100vh; background: #FBFAF7; color: #2B2A4A; font-family: 'Quicksand', sans-serif; }
.aac-shell * { box-sizing: border-box; }
.aac-topbar { display: flex; align-items: center; justify-content: space-between; padding: 14px 28px; background: #fff; border-bottom: 1px solid rgba(43,42,74,0.09); }
.aac-brand { display: flex; align-items: center; font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: #2B2A4A; background: none; border: none; cursor: pointer; padding: 0; }
.aac-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.aac-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; margin: 0; }
.aac-toplink { font: 700 13px 'Quicksand', sans-serif; color: #E8573A; background: none; border: none; cursor: pointer; text-decoration: underline; }
.aac-page { max-width: 1040px; margin: 0 auto; padding: 32px 24px 80px; }
.aac-status { color: #8B84A3; font-size: 14px; }
.aac-error { background: #FDE8E5; color: #A3322A; border-radius: 12px; padding: 12px 16px; font-size: 13.5px; margin: 0 0 18px; }
.aac-notice { border-radius: 12px; padding: 12px 16px; font-size: 13.5px; font-weight: 600; margin: 0 0 18px; }
.aac-notice.is-ok { background: #E3F5EA; color: #1F7A47; }
.aac-notice.is-error { background: #FDE8E5; color: #A3322A; }
.aac-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 0 0 32px; }
@media (max-width: 800px) { .aac-grid { grid-template-columns: 1fr; } }
.aac-card { background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 16px; padding: 22px; display: grid; gap: 12px; align-content: start; }
.aac-h { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 18px; margin: 0; }
.aac-h--wide { margin: 8px 0 12px; }
.aac-sub { font-size: 12.5px; color: #8B84A3; margin: -6px 0 0; }
.aac-label { display: grid; gap: 5px; font-size: 11.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #8B84A3; }
.aac-inline { display: flex; gap: 8px; }
.aac-three { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 10px; }
.aac-input { width: 100%; font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 14px; border: 1.5px solid rgba(43,42,74,0.14); border-radius: 10px; padding: 9px 12px; background: #fff; color: #2B2A4A; text-transform: none; letter-spacing: 0; }
.aac-input:focus { outline: 3px solid #1B2A4A; outline-offset: 1px; }
.aac-btn { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; color: #fff; background: #1B2A4A; border: none; border-radius: 999px; padding: 11px 20px; cursor: pointer; justify-self: start; }
.aac-btn:disabled { opacity: 0.5; cursor: default; }
.aac-ghost { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: #1B2A4A; background: #E9ECF3; border: none; border-radius: 999px; padding: 6px 14px; cursor: pointer; white-space: nowrap; }
.aac-table { background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 14px; overflow: hidden; margin: 0 0 32px; }
.aac-row { display: grid; grid-template-columns: 1.3fr 0.6fr 0.5fr 0.6fr 1.6fr 1.2fr auto; gap: 10px; align-items: center; padding: 10px 16px; font-size: 13px; border-top: 1px solid rgba(43,42,74,0.06); }
.aac-row--g { grid-template-columns: 1.8fr 0.6fr 1.2fr 1fr 1fr 0.8fr auto; }
.aac-row--head { border-top: none; background: #F4F2EC; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #8B84A3; }
.aac-row.is-off { opacity: 0.55; }
.aac-mono { font-family: ui-monospace, Menlo, monospace; font-weight: 700; }
.aac-wrap { overflow-wrap: anywhere; }
.aac-on { color: #1F7A47; font-weight: 800; }
.aac-offtxt { color: #8B84A3; font-weight: 700; }
`;
