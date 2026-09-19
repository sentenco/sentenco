import React from "react";

// Shared "Mission Complete!" wrap-up slide for the A1 Kids lessons.
// Usage in a lesson's last slide body:
//   <WrapUp see="See you next lesson!" chips={[["Aa", "#F2A900"], ["Bb", "#2E97C7"]]}>Recap sentence.</WrapUp>
// chips is optional (letters / key words learned); children are the recap; extra nodes can follow via `after`.

const CONFETTI = [
  [4, 12, "#F2A900", 20], [14, 44, "#2E97C7", -30], [26, 4, "#E0567A", 50], [72, 6, "#22A67E", -20],
  [86, 32, "#F2A900", 35], [95, 12, "#8E6FCE", -45], [8, 58, "#E0567A", 15], [92, 56, "#2E97C7", 60],
];

function Star({ size, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#F2A900" style={style} aria-hidden="true">
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

export function WrapUp({ title = "Mission Complete!", see = "See you next lesson!", chips, children, after }) {
  return (
    <div className="wrapup-col">
      <div className="wrapup-confetti" aria-hidden="true">
        {CONFETTI.map(([x, y, c, r], i) => (
          <i key={i} className="wrapup-cf" style={{ left: `${x}%`, top: `${y}%`, background: c, transform: `rotate(${r}deg)` }} />
        ))}
      </div>
      <div className="wrapup-stars">
        <Star size={38} />
        <Star size={58} />
        <Star size={38} />
      </div>
      <div className="wrapup-banner">{title}</div>
      {children && <p className="wrapup-recap">{children}</p>}
      {chips && chips.length > 0 && (
        <div className="wrapup-chips">
          {chips.map(([label, color]) => (
            <span key={label} className="wrapup-chip" style={{ background: color }}>{label}</span>
          ))}
        </div>
      )}
      {after}
      {see && <p className="wrapup-see">{see}</p>}
    </div>
  );
}

export const wrapUpStyles = `
.wrapup-col { position: relative; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 4px 24px; }
.wrapup-confetti { position: absolute; inset: -8px 0; pointer-events: none; }
.wrapup-cf { position: absolute; width: 12px; height: 18px; border-radius: 3px; opacity: 0.9; }
.wrapup-stars { position: relative; display: flex; align-items: flex-end; gap: 10px; filter: drop-shadow(0 4px 6px rgba(184,121,31,0.35)); }
.wrapup-stars svg:nth-child(1) { transform: rotate(-14deg) translateY(6px); }
.wrapup-stars svg:nth-child(3) { transform: rotate(14deg) translateY(6px); }
.wrapup-banner { position: relative; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 46px; line-height: 1.1; color: #fff; background: linear-gradient(180deg, #FF6B4A, #E0502F); padding: 6px 34px 10px; border-radius: 22px; box-shadow: 0 6px 0 rgba(160,45,18,0.4), 0 14px 24px rgba(224,80,47,0.3); transform: rotate(-1.5deg); text-align: center; }
.wrapup-recap { position: relative; font-family: 'Quicksand', sans-serif; font-size: 16px; font-weight: 600; color: #736A87; text-align: center; max-width: 470px; margin: 0; line-height: 1.5; }
.wrapup-chips { position: relative; display: flex; gap: 12px; }
.wrapup-chip { min-width: 52px; height: 52px; padding: 0 10px; border-radius: 15px; border: 3px solid #fff; display: flex; align-items: center; justify-content: center; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; box-shadow: 0 6px 14px rgba(27,42,74,0.15); }
.wrapup-see { position: relative; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 18px; color: #E0502F; margin: 2px 0 0; }
`;
