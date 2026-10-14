import React from "react";

// Original vector art for the "The Tell-Tale Heart" custom lesson. No external images, no text inside the pictures.
// Palette: navy, cream, coral, gold. Animations are in the lesson's CSS (they stop for people who prefer less motion).

const NAVY = "#1B2A4A";
const DEEP = "#0E1830";
const CORAL = "#FF6B4A";
const GOLD = "#FFD36E";
const CREAM = "#FEF6E6";
const WOOD = "#6B4A33";
const WOOD_DARK = "#3E2A1E";
const PALE = "#BFE3F2";

const HEART = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

function Floor({ y = 125, h = 45, w = 900 }) {
  return (
    <g>
      <rect x="0" y={y} width={w} height={h} fill="#4A3322" />
      {[0.28, 0.55, 0.82].map((f) => (
        <line key={f} x1="0" y1={y + h * f} x2={w} y2={y + h * f} stroke={WOOD_DARK} strokeWidth="2" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1={i * 78 + (i % 2) * 30} y1={y + (i % 3 === 0 ? 0 : h * 0.28)} x2={i * 78 + (i % 2) * 30} y2={y + (i % 3 === 0 ? h * 0.28 : h * 0.55)} stroke={WOOD_DARK} strokeWidth="2" />
      ))}
    </g>
  );
}

// Step 1: a dark wooden room, a candle, an antique clock, and a heartbeat glowing under the floor.
export function RoomScene() {
  return (
    <svg className="tt-svg" viewBox="0 0 900 210" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A dark wooden room with a candle, an old clock and a red glow under the floor">
      <defs>
        <linearGradient id="rs-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={DEEP} /><stop offset="1" stopColor="#24356A" /></linearGradient>
        <radialGradient id="rs-glow"><stop offset="0" stopColor={CORAL} stopOpacity=".8" /><stop offset="1" stopColor={CORAL} stopOpacity="0" /></radialGradient>
        <radialGradient id="rs-candle"><stop offset="0" stopColor={GOLD} stopOpacity=".55" /><stop offset="1" stopColor={GOLD} stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="900" height="210" fill="url(#rs-wall)" />
      {Array.from({ length: 19 }).map((_, i) => <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="125" stroke="#0A1228" strokeOpacity=".45" strokeWidth="2" />)}
      {/* window with a crescent moon */}
      <rect x="70" y="18" width="110" height="92" rx="6" fill="#0A1228" stroke={WOOD} strokeWidth="6" />
      <line x1="125" y1="18" x2="125" y2="110" stroke={WOOD} strokeWidth="4" />
      <line x1="70" y1="64" x2="180" y2="64" stroke={WOOD} strokeWidth="4" />
      <circle cx="152" cy="42" r="13" fill={GOLD} />
      <circle cx="158" cy="38" r="11" fill="#0A1228" />
      {/* antique grandfather clock */}
      <rect x="300" y="14" width="64" height="124" rx="7" fill={WOOD} />
      <circle cx="332" cy="46" r="21" fill={CREAM} stroke={WOOD_DARK} strokeWidth="3" />
      <line x1="332" y1="46" x2="332" y2="31" stroke={NAVY} strokeWidth="3" strokeLinecap="round" />
      <line x1="332" y1="46" x2="344" y2="52" stroke={NAVY} strokeWidth="3" strokeLinecap="round" />
      <rect x="313" y="78" width="38" height="52" rx="4" fill={DEEP} />
      <line x1="332" y1="80" x2="332" y2="114" stroke={GOLD} strokeWidth="2" />
      <circle cx="332" cy="118" r="7" fill={GOLD} />
      {/* candle on a shelf */}
      <circle cx="780" cy="96" r="70" fill="url(#rs-candle)" />
      <rect x="730" y="120" width="100" height="9" rx="3" fill={WOOD} />
      <rect x="773" y="86" width="14" height="34" fill={CREAM} />
      <ellipse className="tt-flame" cx="780" cy="76" rx="6" ry="11" fill={GOLD} />
      <Floor y={129} h={81} />
      {/* the glowing gap in the floor and the heart under it */}
      <ellipse className="tt-glow" cx="450" cy="166" rx="150" ry="30" fill="url(#rs-glow)" />
      <rect x="408" y="164" width="84" height="4" rx="2" fill={CORAL} />
      <ellipse className="tt-ripple" cx="450" cy="166" rx="40" ry="9" fill="none" stroke={CORAL} strokeWidth="2" />
      <ellipse className="tt-ripple tt-ripple--2" cx="450" cy="166" rx="40" ry="9" fill="none" stroke={CORAL} strokeWidth="2" />
      <g transform="translate(436 150) scale(1.15)"><path className="tt-beat" d={HEART} fill={CORAL} /></g>
    </svg>
  );
}

// Scene 1: the pale blue eye.
export function EyeScene() {
  return (
    <svg className="tt-svg" viewBox="0 0 900 170" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A large pale blue eye in the dark">
      <defs>
        <radialGradient id="ey-bg" cx=".5" cy=".5" r=".75"><stop offset="0" stopColor="#2C4078" /><stop offset="1" stopColor={DEEP} /></radialGradient>
        <radialGradient id="ey-iris"><stop offset="0" stopColor="#E6F4FA" /><stop offset=".7" stopColor={PALE} /><stop offset="1" stopColor="#86BCD6" /></radialGradient>
        <radialGradient id="ey-halo"><stop offset="0" stopColor={PALE} stopOpacity=".35" /><stop offset="1" stopColor={PALE} stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="900" height="170" fill="url(#ey-bg)" />
      <circle cx="450" cy="85" r="150" fill="url(#ey-halo)" />
      <path d="M300 85 Q450 -5 600 85 Q450 175 300 85Z" fill="#E8EEF3" />
      <circle cx="450" cy="85" r="41" fill="url(#ey-iris)" stroke="#6FA9C4" strokeWidth="3" />
      <circle cx="450" cy="85" r="15" fill={DEEP} />
      <circle cx="437" cy="72" r="6" fill="#fff" opacity=".9" />
      <ellipse cx="456" cy="89" rx="34" ry="30" fill="#fff" opacity=".2" />
      <path d="M300 85 Q450 -5 600 85" fill="none" stroke={DEEP} strokeWidth="8" strokeLinecap="round" />
      <path d="M300 85 Q450 175 600 85" fill="none" stroke={DEEP} strokeWidth="4" strokeLinecap="round" />
      <path d="M338 30 Q450 -22 562 30" fill="none" stroke="#4A5C8C" strokeWidth="3" opacity=".7" strokeLinecap="round" />
      {[[120, 40], [190, 120], [260, 60], [650, 50], [720, 118], [790, 70], [830, 30]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="2.5" fill={GOLD} opacity=".5" />)}
    </svg>
  );
}

// Scene 2: a door a little open at night and a thin line of lantern light.
export function DoorScene() {
  return (
    <svg className="tt-svg" viewBox="0 0 900 170" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A door slightly open at night with a thin line of lantern light">
      <defs>
        <linearGradient id="dr-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={DEEP} /><stop offset="1" stopColor="#24356A" /></linearGradient>
        <radialGradient id="dr-lamp"><stop offset="0" stopColor={GOLD} stopOpacity=".6" /><stop offset="1" stopColor={GOLD} stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="900" height="170" fill="url(#dr-bg)" />
      <circle cx="110" cy="116" r="62" fill="url(#dr-lamp)" />
      {/* the covered lantern */}
      <path d="M100 96 q13 -16 26 0" fill="none" stroke={GOLD} strokeWidth="3" />
      <rect x="96" y="96" width="34" height="44" rx="6" fill="#7A5A2F" />
      <rect x="96" y="96" width="34" height="20" rx="6" fill={CREAM} opacity=".85" />
      {/* the door */}
      <rect x="376" y="6" width="156" height="142" fill="#0A1228" stroke={WOOD} strokeWidth="7" />
      <rect x="454" y="12" width="72" height="134" fill="#1A2447" />
      <rect x="458" y="14" width="5" height="130" fill={GOLD} />
      <polygon points="382,12 452,24 452,146 382,146" fill="#4A3322" stroke={WOOD_DARK} strokeWidth="3" />
      <circle cx="440" cy="88" r="5" fill={GOLD} />
      <polygon points="456,146 466,146 530,170 436,170" fill={GOLD} opacity=".45" />
      <Floor y={146} h={24} />
      <circle cx="790" cy="28" r="13" fill={GOLD} /><circle cx="796" cy="24" r="11" fill="#17224A" />
    </svg>
  );
}

// Scene 3: a quiet room late at night with a clock, two chairs and a few lighter floorboards.
function Chair({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} fill={DEEP} stroke="#2F4070" strokeWidth="1.5">
      <rect x="0" y="0" width="7" height="52" /><rect x="0" y="0" width="30" height="7" /><rect x="22" y="0" width="7" height="30" opacity="0" />
      <rect x="-6" y="38" width="44" height="8" rx="2" />
      <rect x="-4" y="46" width="6" height="22" /><rect x="28" y="46" width="6" height="22" />
    </g>
  );
}
export function BoardsScene() {
  return (
    <svg className="tt-svg" viewBox="0 0 900 170" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A clock, two chairs and a few lighter floorboards in a quiet room">
      <defs><linearGradient id="bd-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={DEEP} /><stop offset="1" stopColor="#22335C" /></linearGradient></defs>
      <rect width="900" height="170" fill="url(#bd-bg)" />
      {/* clock at 4:00 */}
      <rect x="86" y="14" width="112" height="112" rx="14" fill={WOOD} />
      <circle cx="142" cy="70" r="43" fill={CREAM} stroke={WOOD_DARK} strokeWidth="4" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        return <line key={i} x1={142 + Math.sin(a) * 36} y1={70 - Math.cos(a) * 36} x2={142 + Math.sin(a) * 41} y2={70 - Math.cos(a) * 41} stroke={NAVY} strokeWidth="2.5" />;
      })}
      <line x1="142" y1="70" x2="142" y2="38" stroke={NAVY} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="142" y1="70" x2="159" y2="80" stroke={NAVY} strokeWidth="5" strokeLinecap="round" />
      <circle cx="142" cy="70" r="4" fill={CORAL} />
      {/* floor, with three lighter boards in the middle */}
      <Floor y={112} h={58} />
      <rect x="402" y="112" width="96" height="58" fill="#6A4B34" />
      <line x1="434" y1="112" x2="434" y2="170" stroke={WOOD_DARK} strokeWidth="2" /><line x1="466" y1="112" x2="466" y2="170" stroke={WOOD_DARK} strokeWidth="2" />
      {[[412, 118], [444, 164], [476, 118]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="2" fill={WOOD_DARK} />)}
      <Chair x={330} y={64} />
      <Chair x={540} y={64} />
      {/* a door with a thin line of light: someone is knocking */}
      <rect x="720" y="22" width="106" height="124" fill="#0A1228" stroke={WOOD} strokeWidth="6" />
      <rect x="742" y="30" width="62" height="116" fill="#4A3322" />
      <rect x="770" y="30" width="4" height="116" fill={GOLD} opacity=".8" />
      <circle cx="795" cy="90" r="4" fill={GOLD} />
    </svg>
  );
}

// Scene 4: a big beating heart with ripples, pulsing shadows at the edges.
export function HeartScene() {
  return (
    <svg className="tt-svg" viewBox="0 0 900 170" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A large glowing heart beating in the dark">
      <defs>
        <radialGradient id="ht-bg" cx=".5" cy=".5" r=".8"><stop offset="0" stopColor="#3A2650" /><stop offset="1" stopColor={DEEP} /></radialGradient>
        <radialGradient id="ht-glow"><stop offset="0" stopColor={CORAL} stopOpacity=".7" /><stop offset="1" stopColor={CORAL} stopOpacity="0" /></radialGradient>
        <radialGradient id="ht-vig" cx=".5" cy=".5" r=".75"><stop offset=".55" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".7" /></radialGradient>
      </defs>
      <rect width="900" height="170" fill="url(#ht-bg)" />
      <Floor y={138} h={32} />
      <circle className="tt-glow" cx="450" cy="82" r="150" fill="url(#ht-glow)" />
      <circle className="tt-ripple-c" cx="450" cy="84" r="46" fill="none" stroke={CORAL} strokeWidth="2.5" />
      <circle className="tt-ripple-c tt-ripple-c--2" cx="450" cy="84" r="46" fill="none" stroke={CORAL} strokeWidth="2.5" />
      <g transform="translate(398 30) scale(4.4)"><path className="tt-beat" d={HEART} fill={CORAL} /></g>
      <rect className="tt-vignette" width="900" height="170" fill="url(#ht-vig)" />
    </svg>
  );
}

/* ---------------------------- small icons ---------------------------- */

export function EyeIcon({ size = 64 }) {
  return (
    <svg width={size} height={size * 0.625} viewBox="0 0 64 40" role="img" aria-label="An eye">
      <path d="M3 20 Q32 -6 61 20 Q32 46 3 20Z" fill="#E8EEF3" stroke={NAVY} strokeWidth="2.5" />
      <circle cx="32" cy="20" r="10" fill={PALE} stroke="#6FA9C4" strokeWidth="2" />
      <circle cx="32" cy="20" r="4" fill={DEEP} />
      <circle cx="29" cy="17" r="1.8" fill="#fff" />
    </svg>
  );
}
export function TapeIcon({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Police tape">
      <g transform="rotate(-18 32 32)">
        <rect x="-8" y="22" width="80" height="20" fill={GOLD} stroke={NAVY} strokeWidth="2" />
        {Array.from({ length: 8 }).map((_, i) => <polygon key={i} points={`${i * 10 - 4},22 ${i * 10 + 2},22 ${i * 10 - 2},42 ${i * 10 - 8},42`} fill={NAVY} />)}
      </g>
    </svg>
  );
}
export function HeartIcon({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="A beating heart">
      <path d={HEART} fill={CORAL} />
      <path d="M5 12h4l1.6-3.4 2.6 7 1.8-3.6H19" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function WeightIcon({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="A heavy weight">
      <circle cx="32" cy="16" r="9" fill="none" stroke={NAVY} strokeWidth="4.5" />
      <path d="M12 56 L21 26 H43 L52 56 Z" fill={NAVY} />
      <path d="M24 34 H40" stroke={CREAM} strokeWidth="3" strokeLinecap="round" opacity=".5" />
    </svg>
  );
}
export function BubbleIcon({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="A speech bubble">
      <rect x="5" y="7" width="54" height="38" rx="12" fill={CORAL} />
      <polygon points="18,44 14,58 32,44" fill={CORAL} />
      <rect x="29.5" y="15" width="5" height="16" rx="2.5" fill={CREAM} />
      <circle cx="32" cy="37" r="3" fill={CREAM} />
    </svg>
  );
}
export function BadgeIcon({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="A police badge">
      <path d="M32 5 L54 13 V32 C54 46 44 54 32 59 C20 54 10 46 10 32 V13 Z" fill={NAVY} stroke={GOLD} strokeWidth="3" />
      <polygon points="32,18 36,28 47,28 38,34 41.5,45 32,38.5 22.5,45 26,34 17,28 28,28" fill={GOLD} />
    </svg>
  );
}
export function MagnifierIcon({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="A magnifying glass">
      <circle cx="27" cy="27" r="16" fill={PALE} fillOpacity=".5" stroke={NAVY} strokeWidth="5" />
      <line x1="39" y1="39" x2="56" y2="56" stroke={NAVY} strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}
