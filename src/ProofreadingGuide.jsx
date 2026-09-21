// Teacher's Guide for one Proofreading topic: everything the student
// player no longer shows (warm-up prompt, answer key, speaking follow-up)
// plus a suggested pacing so a teacher can run the whole 25-minute class
// from this one page.
export default function ProofreadingGuide({ item }) {
  return (
    <div className="pfg-wrap">
      <style>{CSS}</style>

      <div className="pfg-topbar">
        <span className="pfg-brand">
          <img src="/logo-sentivo.png" alt="" className="pfg-logo" />
          <span className="pfg-brand-word">entenco</span>
        </span>
        <span className="pfg-eyebrow">Teacher's Guide · Proofreading</span>
      </div>

      <div className="pfg-content">
        <div className="pfg-hero">
          <span className="pfg-focus-tag">{item.focus}</span>
          <h1 className="pfg-title">{item.title}</h1>
          <p className="pfg-sub">A 25-minute proofreading class, start to finish.</p>
        </div>

        <div className="pfg-timing">
          <div className="pfg-timing-row"><span className="pfg-timing-min">3 min</span><span>Warm-up discussion</span></div>
          <div className="pfg-timing-row"><span className="pfg-timing-min">5 min</span><span>Read the paragraph together, spot the mistakes out loud</span></div>
          <div className="pfg-timing-row"><span className="pfg-timing-min">10 min</span><span>Student rewrites the paragraph correctly</span></div>
          <div className="pfg-timing-row"><span className="pfg-timing-min">4 min</span><span>Compare against the answer key, discuss what was missed</span></div>
          <div className="pfg-timing-row"><span className="pfg-timing-min">3 min</span><span>Speaking follow-up</span></div>
        </div>

        <section className="pfg-section">
          <h2 className="pfg-section-title">1. Warm-Up</h2>
          <p className="pfg-section-note">Open the class with this before the student sees the paragraph.</p>
          <p className="pfg-text">{item.warmup}</p>
        </section>

        <section className="pfg-section">
          <h2 className="pfg-section-title">2. The Passage (shown to the student)</h2>
          <p className="pfg-script pfg-script--mistakes">{item.mistakes}</p>
        </section>

        <section className="pfg-section">
          <h2 className="pfg-section-title">3. Answer Key</h2>
          <p className="pfg-section-note">Not shown to the student — use this to check their rewrite.</p>
          <p className="pfg-script pfg-script--corrected">{item.corrected}</p>
        </section>

        <section className="pfg-section">
          <h2 className="pfg-section-title">4. Speaking Follow-Up</h2>
          <p className="pfg-text">{item.followup}</p>
        </section>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.pfg-wrap {
  min-height: 100vh;
  background: #FFF8EF;
  font-family: 'Karla', sans-serif;
  color: #4A3F3A;
}
.pfg-wrap * { box-sizing: border-box; }

.pfg-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 28px;
  background: #FFFFFF;
  border-bottom: 1px solid rgba(169,114,10,0.10);
}
.pfg-brand { display: flex; align-items: center; gap: 6px; }
.pfg-logo { width: 22px; height: 22px; border-radius: 50%; }
.pfg-brand-word { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 14px; color: #4A3F3A; }
.pfg-eyebrow {
  font-family: 'Karla', sans-serif; font-size: 10.5px; font-weight: 800;
  letter-spacing: 0.12em; text-transform: uppercase; color: #A9720A;
  background: rgba(232,168,61,0.16); border-radius: 999px; padding: 6px 14px;
}

.pfg-content { max-width: 640px; margin: 0 auto; padding: 40px 24px 70px; }

.pfg-hero { text-align: center; margin-bottom: 28px; }
.pfg-focus-tag {
  display: inline-block; font-size: 11.5px; font-weight: 700; color: #A9720A;
  background: rgba(232,168,61,0.16); border-radius: 999px; padding: 5px 14px; margin-bottom: 12px;
}
.pfg-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 44px; color: #4A3F3A; margin: 0 0 8px; line-height: 1.05; }
.pfg-sub { font-size: 13.5px; font-weight: 600; color: #A9836F; margin: 0; }

.pfg-timing {
  background: #FFFFFF; border: 1px solid #FCE4B0; border-radius: 16px;
  padding: 8px 20px; margin-bottom: 34px;
}
.pfg-timing-row {
  display: flex; align-items: center; gap: 14px;
  padding: 11px 0; border-bottom: 1px dashed rgba(169,114,10,0.14);
  font-size: 13.5px; font-weight: 600; color: #4A3F3A;
}
.pfg-timing-row:last-child { border-bottom: none; }
.pfg-timing-min {
  flex-shrink: 0; width: 52px; text-align: center;
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 11.5px;
  color: #A9720A; background: rgba(232,168,61,0.16); border-radius: 999px; padding: 4px 0;
}

.pfg-section { margin-bottom: 30px; }
.pfg-section-title {
  font-family: 'Caveat', cursive; font-weight: 700; font-size: 24px; color: #4A3F3A;
  margin: 0 0 4px;
}
.pfg-section-note { font-size: 12.5px; font-weight: 500; color: #A9836F; margin: 0 0 10px; }
.pfg-text { font-family: 'Karla', sans-serif; font-weight: 600; font-size: 15px; color: #4A3F3A; line-height: 1.6; margin: 0; }
.pfg-script { font-family: 'Karla', sans-serif; font-size: 14.5px; line-height: 1.7; border-radius: 14px; padding: 16px 18px; white-space: pre-line; margin: 0; }
.pfg-script--mistakes { color: #B3392F; background: #FDEAEA; font-style: italic; }
.pfg-script--corrected { color: #1F7A47; background: #E4F8EC; }

@media (max-width: 600px) {
  .pfg-topbar, .pfg-content { padding-left: 18px; padding-right: 18px; }
}
`;
