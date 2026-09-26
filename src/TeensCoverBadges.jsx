// Cover-slide UNIT medal + LESSON ribbon. Static, fixed-position badges
// (positioned per track via CSS) — not interactive on the live slide.

export function CoverBadges({ stage }) {
  const m = String(stage || "").match(/Unit (\d+)(?: · | )(?:Lesson (\d+)|Unit Review|Test)/);
  if (!m) return null;
  const unit = m[1];
  const lesson = m[2] || "R";
  return (
    <>
      <div className="cover-ribbon"><span className="cr-label">LESSON</span><span className="cr-num">{lesson}</span></div>
      <div className={`unit-medal ${String(unit).length > 1 ? "is-long" : ""}`}><span className="um-label">UNIT</span><span className="um-num">{unit}</span></div>
    </>
  );
}
