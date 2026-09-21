// Teacher's Guide for one Register Rewrite topic: a suggested pacing,
// the hint phrases, and the sample rewrite(s) -- not shown in the
// student player, which only shows the original message and lets the
// student reveal hints if they ask for them.
export default function RegisterRewriteGuide({ item }) {
  const rounds = item.rounds || [{ original: item.original, helpfulPhrases: item.helpfulPhrases, sample: item.sample }];
  const toFormal = item.direction === "toFormal";

  return (
    <div className="rrg-wrap">
      <style>{CSS}</style>

      <div className="rrg-topbar">
        <span className="rrg-brand">
          <img src="/logo-sentivo.png" alt="" className="rrg-logo" />
          <span className="rrg-brand-word">entenco</span>
        </span>
        <span className="rrg-eyebrow">Teacher's Guide · Register Rewrite</span>
      </div>

      <div className="rrg-content">
        <div className="rrg-hero">
          <div className="rrg-direction-track" data-formal={toFormal}>
            <span className="rrg-direction-tag rrg-direction-tag--from">{toFormal ? "Casual" : "Formal"}</span>
            <span className="rrg-direction-arrow">→</span>
            <span className="rrg-direction-tag rrg-direction-tag--to">{toFormal ? "Formal" : "Casual"}</span>
          </div>
          <h1 className="rrg-title">{item.title}</h1>
          <p className="rrg-sub">{item.context}</p>
        </div>

        <div className="rrg-timing">
          <div className="rrg-timing-row"><span className="rrg-timing-min">3 min</span><span>Warm-up: discuss why register matters here</span></div>
          <div className="rrg-timing-row"><span className="rrg-timing-min">15 min</span><span>Student rewrites {rounds.length > 1 ? `each of the ${rounds.length} messages` : "the message"} (hints available on request)</span></div>
          <div className="rrg-timing-row"><span className="rrg-timing-min">5 min</span><span>Compare against the sample{rounds.length > 1 ? "s" : ""}, discuss</span></div>
          <div className="rrg-timing-row"><span className="rrg-timing-min">2 min</span><span>Wrap-up</span></div>
        </div>

        {rounds.map((r, i) => (
          <section className="rrg-section" key={i}>
            <h2 className="rrg-section-title">{rounds.length > 1 ? `Round ${i + 1}` : "The Message"}</h2>

            <p className="rrg-round-label">Original (shown to the student)</p>
            <p className="rrg-original">{r.original}</p>

            <p className="rrg-round-label">Hints (hidden by default, student can reveal)</p>
            <div className="rrg-chip-row">
              {r.helpfulPhrases.map((p) => (
                <span className="rrg-chip" key={p}>{p}</span>
              ))}
            </div>

            <p className="rrg-round-label rrg-round-label--sample">Sample rewrite (not shown to the student)</p>
            <p className="rrg-sample">{r.sample}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.rrg-wrap {
  min-height: 100vh;
  background: #FFF8EF;
  font-family: 'Karla', sans-serif;
  color: #4A3F3A;
}
.rrg-wrap * { box-sizing: border-box; }

.rrg-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 28px;
  background: #FFFFFF;
  border-bottom: 1px solid rgba(47,122,80,0.10);
}
.rrg-brand { display: flex; align-items: center; gap: 6px; }
.rrg-logo { width: 22px; height: 22px; border-radius: 50%; }
.rrg-brand-word { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 14px; color: #4A3F3A; }
.rrg-eyebrow {
  font-family: 'Karla', sans-serif; font-size: 10.5px; font-weight: 800;
  letter-spacing: 0.12em; text-transform: uppercase; color: #2F7A50;
  background: rgba(76,175,122,0.14); border-radius: 999px; padding: 6px 14px;
}

.rrg-content { max-width: 640px; margin: 0 auto; padding: 40px 24px 70px; }

.rrg-hero { text-align: center; margin-bottom: 28px; }
.rrg-direction-track { display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 14px; }
.rrg-direction-tag {
  font-family: 'Karla', sans-serif; font-size: 11.5px; font-weight: 800;
  letter-spacing: 0.04em; text-transform: uppercase; border-radius: 999px; padding: 5px 12px;
}
.rrg-direction-tag--from { color: #A9836F; background: #F5EEE4; }
.rrg-direction-arrow { color: #D9C7B5; font-size: 13px; }
.rrg-direction-track[data-formal="true"] .rrg-direction-tag--to { color: #2F7A50; background: #DFF3E7; }
.rrg-direction-track[data-formal="false"] .rrg-direction-tag--to { color: #2A6E85; background: #E1F1F6; }
.rrg-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 44px; color: #4A3F3A; margin: 0 0 8px; line-height: 1.05; }
.rrg-sub { font-size: 13.5px; font-weight: 600; color: #A9836F; margin: 0; }

.rrg-timing {
  background: #FFFFFF; border: 1px solid #C3EEDD; border-radius: 16px;
  padding: 8px 20px; margin-bottom: 34px;
}
.rrg-timing-row {
  display: flex; align-items: center; gap: 14px;
  padding: 11px 0; border-bottom: 1px dashed rgba(47,122,80,0.14);
  font-size: 13.5px; font-weight: 600; color: #4A3F3A;
}
.rrg-timing-row:last-child { border-bottom: none; }
.rrg-timing-min {
  flex-shrink: 0; width: 52px; text-align: center;
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 11.5px;
  color: #2F7A50; background: rgba(76,175,122,0.14); border-radius: 999px; padding: 4px 0;
}

.rrg-section { margin-bottom: 30px; padding-bottom: 24px; border-bottom: 1px dashed rgba(47,122,80,0.14); }
.rrg-section:last-child { border-bottom: none; }
.rrg-section-title {
  font-family: 'Caveat', cursive; font-weight: 700; font-size: 26px; color: #4A3F3A;
  margin: 0 0 12px;
}
.rrg-round-label { font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #A9836F; margin: 0 0 6px; }
.rrg-round-label--sample { color: #1F9D6E; margin-top: 14px; }
.rrg-original { font-family: 'Karla', sans-serif; font-weight: 600; font-size: 14.5px; color: #4A3F3A; background: #FFFDF8; border: 1px solid #F5D9CC; border-radius: 10px; padding: 12px 14px; margin: 0 0 12px; }
.rrg-chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
.rrg-chip { font-family: 'Karla', sans-serif; font-weight: 700; font-size: 12.5px; color: #2F7A50; background: #DFF3E7; border-radius: 999px; padding: 6px 13px; }
.rrg-sample { font-family: 'Karla', sans-serif; font-size: 14px; line-height: 1.6; color: #1F7A47; background: #E4F8EC; border-radius: 12px; padding: 14px 16px; margin: 0; }

@media (max-width: 600px) {
  .rrg-topbar, .rrg-content { padding-left: 18px; padding-right: 18px; }
}
`;
