// Shared look for the curriculum level pages (TrackLevelPage, and the owner's Just Talk room).
export const TLP_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=Inter:wght@500;600;700;800&display=swap');

.tlp-wrap {
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #FFFCF6;
  color: #23264A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.tlp-wrap * { box-sizing: border-box; }

.tlp-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.tlp-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,107,74,0.07); }
.tlp-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(27,42,74,0.05); }

.tlp-stage { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; padding: 26px 40px 70px; }

.tlp-breadcrumb { display: block; background: none; border: none; cursor: pointer; padding: 0; font-size: 12px; font-weight: 600; color: #6B6E96; margin-bottom: 22px; text-align: left; }
.tlp-crumb-sep { color: #C7C4DC; }

.tlp-banner-hero {
  border-radius: 20px;
  padding: 26px 32px;
  margin-bottom: 18px;
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 280px;
  overflow: hidden;
  justify-content: center;
  box-sizing: border-box;
}
.tlp-cefr-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
  background: #fff;
  box-shadow: 0 2px 8px rgba(27,42,74,0.1);
}
.tlp-banner-title { display: flex; align-items: baseline; gap: 12px; max-width: 60%; }
.tlp-level-code { font-family: 'Source Serif 4', serif; font-size: 40px; font-weight: 600; line-height: 1; }
.tlp-level-name { font-family: 'Source Serif 4', serif; font-size: 26px; font-weight: 600; color: #23264A; }
.tlp-description {
  font-size: 13px; font-weight: 500; color: #4A5578; line-height: 1.55; max-width: 60%;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;
}
@media (max-width: 700px) { .tlp-description { max-width: 100%; } }

.tlp-stats-strip {
  background: #fff;
  border: 1px solid #EDE6F4;
  border-radius: 16px;
  padding: 20px 26px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 26px;
  box-shadow: 0 4px 16px rgba(27,42,74,0.06);
}
@media (max-width: 700px) { .tlp-stats-strip { grid-template-columns: 1fr; } }
.tlp-stat-item { display: flex; align-items: center; gap: 12px; }
.tlp-stat-icon { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.tlp-stat-icon--blue { background: #E4E9F5; color: #4A5578; }
.tlp-stat-icon--coral { background: #FFE6DD; color: #FF6B4A; }
.tlp-stat-icon--lav { background: #EEE9F7; color: #7A5FA8; }
.tlp-stat-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #1B2A4A; }
.tlp-stat-sub { font-size: 11px; font-weight: 500; color: #6B6E96; margin-top: 1px; line-height: 1.3; }

.tlp-toc {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(27,42,74,0.12);
  border: 1px solid #EDE6F4;
}

.tlp-toc-header { padding: 30px 40px 26px; position: relative; overflow: hidden; }
.tlp-toc-header::before {
  content: ""; position: absolute; top: -60px; right: -40px; width: 220px; height: 220px; border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%);
  pointer-events: none;
}
.tlp-toc-eyebrow-row { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; position: relative; z-index: 1; }
.tlp-toc-eyebrow-rule { flex: 0 1 34px; height: 1px; background: rgba(255,255,255,0.35); }
.tlp-toc-eyebrow { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.8); }
.tlp-toc-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 28px; margin: 0; color: #fff; position: relative; z-index: 1; }
.tlp-toc-sub { font-size: 12.5px; color: rgba(255,255,255,0.65); margin-top: 6px; position: relative; z-index: 1; }

.tlp-toc-list { list-style: none; margin: 0; padding: 10px 40px 34px; }
.tlp-toc-item { border-bottom: 1px solid #F0EBFA; }
.tlp-toc-item:last-child { border-bottom: none; }

.tlp-toc-row {
  display: flex; align-items: center; gap: 16px;
  padding: 15px 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.15s ease;
}
.tlp-toc-row:hover { background: #FAF7FC; }
.tlp-toc-item.is-open .tlp-toc-row { background: #FAF7FC; }

.tlp-toc-unit-label {
  flex-shrink: 0;
  font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 12px; letter-spacing: 0.03em;
  padding: 5px 10px; border-radius: 7px;
  width: 68px; text-align: center;
}
.tlp-toc-main { flex: 1; min-width: 0; }
.tlp-toc-title-row { display: flex; align-items: baseline; gap: 10px; }
.tlp-toc-item-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 16px; color: #23264A; white-space: nowrap; }
.tlp-toc-leader { flex: 1; border-bottom: 1.5px dotted #D8D2E8; margin-bottom: 5px; }
.tlp-toc-page-tag { font-size: 11px; font-weight: 700; color: #6B6E96; white-space: nowrap; }
.tlp-toc-focus { font-size: 12px; color: #6B6E96; margin-top: 3px; }

.tlp-toc-chevron {
  flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%;
  color: #6B6E96; display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s ease, color 0.15s ease, background 0.15s ease;
}
.tlp-toc-item.is-open .tlp-toc-chevron { transform: rotate(180deg); }

.tlp-toc-panel { max-height: 0; overflow: hidden; transition: max-height 0.25s ease; }
.tlp-toc-item.is-open .tlp-toc-panel { max-height: 600px; }
.tlp-toc-panel-inner { padding: 4px 8px 18px 84px; }
.tlp-toc-lesson-row { display: flex; align-items: center; gap: 12px; padding: 9px 8px; border-radius: 8px; margin: 0 -8px; }
.tlp-toc-lesson-bullet {
  flex-shrink: 0; width: 21px; height: 21px; border-radius: 50%;
  background: #fff; border: 1.5px solid #FF6B4A; color: #E0502F;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 10px;
}
.tlp-toc-lesson-row.is-test .tlp-toc-lesson-bullet { border-color: #C98A00; color: #A87A1E; background: #FBF0DC; }
.tlp-toc-lesson-main { flex: 1; min-width: 0; display: flex; align-items: baseline; gap: 8px; }
.tlp-toc-lesson-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #23264A; white-space: nowrap; }
.tlp-toc-lesson-focus { font-size: 11.5px; color: #6B6E96; }
.tlp-toc-lesson-tag { font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #C7A8B8; margin-left: auto; flex-shrink: 0; }
.tlp-toc-lesson-row.is-test .tlp-toc-lesson-tag { color: #A87A1E; }
.tlp-toc-lesson-row.is-ready:hover { background: #FFF9F7; }
.tlp-toc-lesson-open {
  display: inline-flex; align-items: center; gap: 4px; cursor: pointer; border: none;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 11px;
  color: #fff; background: #FF6B4A; border-radius: 999px; padding: 4px 11px;
  margin-left: auto; flex-shrink: 0;
}
.tlp-toc-lesson-open:hover { background: #E0502F; }

.tlp-cert-cta {
  background: #fff; border-radius: 20px; border: 1.5px solid #FFD9CB;
  box-shadow: 0 18px 40px rgba(27,42,74,0.12);
  margin-top: 22px; padding: 30px 36px; position: relative; overflow: hidden;
  display: flex; align-items: center; gap: 24px;
}
.tlp-cert-cta::before {
  content: ""; position: absolute; top: -50px; right: -30px; width: 160px; height: 160px; border-radius: 50%;
  background: radial-gradient(circle, rgba(255,107,74,0.14), transparent 70%); pointer-events: none;
}
.tlp-cert-cta-icon {
  flex-shrink: 0; width: 60px; height: 60px; border-radius: 50%; background: #FFE6DD;
  display: flex; align-items: center; justify-content: center;
}
.tlp-cert-cta-main { flex: 1; min-width: 0; }
.tlp-cert-cta-eyebrow { display: block; font-weight: 700; font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: #E0502F; margin-bottom: 5px; }
.tlp-cert-cta-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 19px; color: #23264A; margin-bottom: 5px; }
.tlp-cert-cta-sub { font-size: 13px; color: #6B6E96; line-height: 1.5; }
.tlp-cert-cta-note { font-size: 12px; font-weight: 600; color: #A87A1E; background: #FBF0DC; border-radius: 8px; padding: 7px 11px; margin-top: 10px; display: inline-block; }
.tlp-cert-cta-btn {
  flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #fff;
  background: #FF6B4A; border: none; border-radius: 999px; padding: 12px 22px; cursor: pointer; white-space: nowrap;
}
.tlp-cert-cta-btn:hover { filter: brightness(0.9); }

@media (max-width: 700px) {
  .tlp-stage { padding: 20px 18px 50px; }
  .tlp-banner-hero { padding: 20px 18px; }
  .tlp-toc-header { padding: 22px 20px; }
  .tlp-toc-list { padding: 10px 16px 24px; }
  .tlp-toc-panel-inner { padding-left: 40px; }
  .tlp-cert-cta { flex-direction: column; align-items: flex-start; text-align: left; }
  .tlp-cert-cta-btn { width: 100%; justify-content: center; }
}
`;
