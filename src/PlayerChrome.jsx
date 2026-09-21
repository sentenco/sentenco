// Shared branded shell for standalone activity popups (Vocabulary games,
// Writing activities): a real header with the Sentenco logo instead of a
// bare white page, matching the site's actual wordmark (same markup as
// Library.jsx's .gc-header-brand).
export default function PlayerChrome({ eyebrow, children }) {
  return (
    <div className="pch-page">
      <style>{CSS}</style>
      <div className="pch-header">
        <span className="pch-brand">
          <img src="/logo-sentenco.png" alt="" className="pch-logo" />entenco
        </span>
        {eyebrow && <span className="pch-eyebrow">{eyebrow}</span>}
      </div>
      <div className="pch-body">{children}</div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&display=swap');

.pch-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #F6F2EA;
}
.pch-page * { box-sizing: border-box; }

.pch-header {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: #FFFFFF;
  border-bottom: 1px solid rgba(43,42,74,0.08);
}
.pch-brand {
  font-family: 'Fredoka', sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: #2B2A4A;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  gap: 0;
}
.pch-logo { height: 26px; width: auto; display: block; margin-right: -4px; }
.pch-eyebrow {
  font-family: 'SF Mono', 'Menlo', Consolas, monospace;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9A93A8;
}

.pch-body { flex: 1; display: flex; min-height: 0; }
.pch-body > * { flex: 1; min-height: 0; }
`;
