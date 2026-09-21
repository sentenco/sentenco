// Teacher's Guide for one Story Making topic: a suggested pacing for the
// whole 25-minute class, plus the sample answer (uses the same word bank
// and connectors the student sees) that isn't shown in the student player.
function getTense(focus) {
  return focus.split(",")[0].trim();
}

export default function StoryMakingGuide({ item }) {
  const tense = getTense(item.focus);
  const connectors = item.connectors;

  return (
    <div className="smg-wrap">
      <style>{CSS}</style>

      <div className="smg-topbar">
        <span className="smg-brand">
          <img src="/logo-sentenco.png" alt="" className="smg-logo" />
          <span className="smg-brand-word">entenco</span>
        </span>
        <span className="smg-eyebrow">Teacher's Guide · Story Making</span>
      </div>

      <div className="smg-content">
        <div className="smg-hero">
          <span className="smg-tense-tag">🕓 {tense}</span>
          <h1 className="smg-title">{item.title}</h1>
          <p className="smg-sub">A 25-minute story-making class, start to finish.</p>
        </div>

        <div className="smg-timing">
          <div className="smg-timing-row"><span className="smg-timing-min">3 min</span><span>Warm-up: talk about the picture together</span></div>
          <div className="smg-timing-row"><span className="smg-timing-min">5 min</span><span>Introduce the word bank{connectors ? " and connector words" : ""}</span></div>
          <div className="smg-timing-row"><span className="smg-timing-min">12 min</span><span>Student writes their 5-sentence story</span></div>
          <div className="smg-timing-row"><span className="smg-timing-min">3 min</span><span>Compare against the sample answer, discuss</span></div>
          <div className="smg-timing-row"><span className="smg-timing-min">2 min</span><span>Student reads their story aloud</span></div>
        </div>

        <section className="smg-section">
          <h2 className="smg-section-title">1. Warm-Up</h2>
          <p className="smg-section-note">Open the class with this before the student starts writing.</p>
          <p className="smg-text">Look at the picture together. Ask: "What do you see? What do you think is happening?"</p>
        </section>

        <section className="smg-section">
          <h2 className="smg-section-title">2. Word Bank (shown to the student)</h2>
          <div className="smg-chip-row">
            {item.words.map((w) => (
              <span className="smg-chip" key={w}>{w}</span>
            ))}
          </div>
        </section>

        {connectors && (
          <section className="smg-section">
            <h2 className="smg-section-title">3. Connectors (shown to the student)</h2>
            <div className="smg-chip-row">
              {connectors.map((c) => (
                <span className="smg-chip smg-chip--connector" key={c}>{c}</span>
              ))}
            </div>
          </section>
        )}

        <section className="smg-section">
          <h2 className="smg-section-title">{connectors ? "4" : "3"}. Sample Answer</h2>
          <p className="smg-section-note">Not shown to the student — use this to check their story{connectors ? " uses the words and connectors" : " uses the word bank"}.</p>
          <p className="smg-sample">{item.sample}</p>
        </section>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.smg-wrap {
  min-height: 100vh;
  background: #FFF8EF;
  font-family: 'Karla', sans-serif;
  color: #4A3F3A;
}
.smg-wrap * { box-sizing: border-box; }

.smg-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 28px;
  background: #FFFFFF;
  border-bottom: 1px solid rgba(42,110,133,0.10);
}
.smg-brand { display: flex; align-items: center; gap: 6px; }
.smg-logo { width: 22px; height: 22px; border-radius: 50%; }
.smg-brand-word { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 14px; color: #4A3F3A; }
.smg-eyebrow {
  font-family: 'Karla', sans-serif; font-size: 10.5px; font-weight: 800;
  letter-spacing: 0.12em; text-transform: uppercase; color: #2A6E85;
  background: #E1F1F6; border-radius: 999px; padding: 6px 14px;
}

.smg-content { max-width: 640px; margin: 0 auto; padding: 40px 24px 70px; }

.smg-hero { text-align: center; margin-bottom: 28px; }
.smg-tense-tag {
  display: inline-block; font-size: 11.5px; font-weight: 700; color: #2A6E85;
  background: #E1F1F6; border-radius: 999px; padding: 5px 14px; margin-bottom: 12px;
}
.smg-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 44px; color: #4A3F3A; margin: 0 0 8px; line-height: 1.05; }
.smg-sub { font-size: 13.5px; font-weight: 600; color: #A9836F; margin: 0; }

.smg-timing {
  background: #FFFFFF; border: 1px solid #C7E6EE; border-radius: 16px;
  padding: 8px 20px; margin-bottom: 34px;
}
.smg-timing-row {
  display: flex; align-items: center; gap: 14px;
  padding: 11px 0; border-bottom: 1px dashed rgba(42,110,133,0.14);
  font-size: 13.5px; font-weight: 600; color: #4A3F3A;
}
.smg-timing-row:last-child { border-bottom: none; }
.smg-timing-min {
  flex-shrink: 0; width: 52px; text-align: center;
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 11.5px;
  color: #2A6E85; background: #E1F1F6; border-radius: 999px; padding: 4px 0;
}

.smg-section { margin-bottom: 30px; }
.smg-section-title {
  font-family: 'Caveat', cursive; font-weight: 700; font-size: 24px; color: #4A3F3A;
  margin: 0 0 4px;
}
.smg-section-note { font-size: 12.5px; font-weight: 500; color: #A9836F; margin: 0 0 10px; }
.smg-text { font-family: 'Karla', sans-serif; font-weight: 600; font-size: 15px; color: #4A3F3A; line-height: 1.6; margin: 0; }

.smg-chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
.smg-chip {
  font-family: 'Karla', sans-serif; font-weight: 700; font-size: 13px;
  color: #2A6E85; background: #FFFFFF;
  border: 1.5px solid #C7E6EE; border-radius: 9px; padding: 7px 12px;
}
.smg-chip--connector { color: #8A5A00; background: #FFE29E; border-color: #F0C05F; }

.smg-sample { font-family: 'Karla', sans-serif; font-size: 14.5px; line-height: 1.7; color: #1F7A47; background: #E4F8EC; border-radius: 14px; padding: 16px 18px; margin: 0; }

@media (max-width: 600px) {
  .smg-topbar, .smg-content { padding-left: 18px; padding-right: 18px; }
}
`;
