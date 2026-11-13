// The "On Air" Just Talk Board styles shared by the B1-B2 and C1-C2 boards (root class .jt1).
// Tokens are the B1-B2 banner colors; the C1-C2 board recolors them with .jt1.c1.
export const ONAIR_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Outfit:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..24,500,0,0&display=block');
/* Colors come from the B1-B2 banner: deep teal (--red is the main accent), mint stage, bulb yellow (--gold). */
.jt1 { --stage: #E3F3EE; --card: #FFFFFF; --ink: #15302A; --muted: #5E7871; --line: #CFE5DD; --soft: #EDF7F3; --red: #2C7A6E; --red-wash: #DDF1EC; --gold: #F2B93B; --gold-wash: #FFF4D6; --teal: #1F5E55; --teal-wash: #E2F2EC; --plum: #1F5E55; --plum-2: #2C7A6E; --plum-wash: #E2F2EC; --fold: #CFE2DA; --rule-line: #E5F1EC;
  --disp: 'Bricolage Grotesque', system-ui, sans-serif; --body: 'Outfit', system-ui, sans-serif;
  min-height: 100vh; color: var(--ink); font-family: var(--body); font-size: 15px; box-sizing: border-box;
  background: radial-gradient(ellipse 60% 40% at 55% 12%, #FFFFFF 0%, rgba(255,255,255,0) 70%), radial-gradient(ellipse 40% 40% at 100% 100%, #CDEBE1 0%, rgba(205,235,225,0) 70%), var(--stage);
  background-attachment: fixed;
  padding: 14px max(16px, env(safe-area-inset-right, 0px)) 110px max(16px, env(safe-area-inset-left, 0px)); }
.jt1 *, .jt1 *::before, .jt1 *::after { box-sizing: border-box; }
.jt1 button, .jt1 select, .jt1 input, .jt1 textarea { font: inherit; color: inherit; }
.jt1 button { cursor: pointer; border: 0; background: none; }
.jt1 button:disabled { opacity: .45; cursor: default; }
.jt1 button:focus-visible, .jt1 .tl:focus-within { outline: 3px solid var(--teal); outline-offset: 2px; }
.jt1 .ms { font-family: 'Material Symbols Rounded'; font-weight: normal; font-style: normal; font-size: 20px; line-height: 1; white-space: nowrap; direction: ltr; display: inline-block; vertical-align: middle; -webkit-font-smoothing: antialiased; }
.jt1 .denied { padding: 40px; text-align: center; color: var(--muted); }
.jt1 .row { display: flex; gap: 10px; align-items: center; justify-content: center; flex-wrap: wrap; }

/* top bar */
/* the top bar sits on the same grid as the rail + sheet below, so it lines up with the board */
.jt1 .bar { max-width: 980px; margin: 0 auto 14px; display: grid; grid-template-columns: 70px minmax(0, 1fr); gap: 14px; }
.jt1 .bar-in { grid-column: 2; display: flex; flex-direction: column; align-items: center; gap: 10px; }
.jt1 .bar-in .mark-t { text-align: center; }
.jt1 .bar-in .right { justify-content: center; }
.jt1 .mark-t { display: grid; min-width: 0; max-width: 100%; line-height: 1.15; text-align: left; }
.jt1 .mark-t b { font-family: var(--disp); font-weight: 800; font-size: 18px; letter-spacing: -.01em; white-space: nowrap; }
.jt1 .mark-t span { font-size: 12.5px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jt1 .bar .right { justify-content: center; }
.jt1 .pg { display: inline-flex; align-items: center; gap: 4px; }
.jt1 .pg.add { color: var(--red); padding: 5px 9px; }
.jt1 .pg .ms { font-size: 17px; }
.jt1 .pg-x { display: inline-grid; place-items: center; margin-right: -4px; opacity: .7; }
.jt1 .pg-x .ms { font-size: 15px; }
.jt1 .sheet.free { background-color: #fff; background-image: linear-gradient(var(--rule-line) 1px, transparent 1px); background-size: 100% 32px; }
.jt1 .free-hint { display: grid; justify-items: center; gap: 4px; text-align: center; padding: 80px 20px; color: var(--muted); pointer-events: none; }
.jt1 .free-hint b { font-family: var(--disp); font-size: 26px; color: var(--ink); }
.jt1 .saved { color: var(--teal); display: inline-grid; place-items: center; }
.jt1 .saved .ms { font-size: 19px; }
.jt1 .present { position: fixed; left: calc(50% + 42px); bottom: max(16px, env(safe-area-inset-bottom, 0px)); transform: translateX(-50%); z-index: 20; display: flex; align-items: center; gap: 4px; background: var(--teal); color: #fff; border-radius: 14px; padding: 6px; box-shadow: 0 12px 28px rgba(21,48,42,.3); max-width: calc(100% - 28px); }
.jt1 .present > button { display: inline-flex; align-items: center; gap: 2px; border-radius: 10px; padding: 9px 13px; font-weight: 600; font-size: 13.5px; color: #fff; white-space: nowrap; }
.jt1 .present .next { background: var(--gold); color: #3A2A00; padding-right: 10px; }
.jt1 .present > button:disabled { opacity: .4; background: none; color: #fff; }
.jt1 .present .dots { display: flex; align-items: center; gap: 6px; padding: 0 8px; min-width: 0; }
.jt1 .present .dots button { width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,.35); padding: 0; flex: 0 0 auto; }
.jt1 .present .dots button.on { background: rgba(255,255,255,.75); }
.jt1 .present .dots button.cur { width: auto; height: auto; border-radius: 999px; background: #fff; color: var(--teal); padding: 3px 10px; }
.jt1 .present .dots b { font-size: 12.5px; font-weight: 700; white-space: nowrap; }
.jt1 .right { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; align-items: center; }
.jt1 .pill-sel { display: inline-flex; align-items: center; gap: 4px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 3px 6px 3px 9px; font-size: 13px; font-weight: 600; color: var(--muted); }
.jt1 .pill-sel select, .jt1 .pill-sel input { border: 0; background: none; font-weight: 600; color: var(--ink); padding: 4px 2px; max-width: 140px; outline: none; }
.jt1 .pill-sel.teal { color: var(--teal); }
.jt1 .tool { display: inline-flex; align-items: center; gap: 6px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 6px 12px 6px 9px; font-weight: 600; font-size: 13px; }
.jt1 .tool.on { background: var(--teal-wash); border-color: var(--teal); color: var(--teal); }
.jt1 .tool.fix { background: var(--gold); border-color: var(--gold); color: #3A2A00; font-weight: 700; }
.jt1 .tool .badge { background: #fff; color: var(--ink); border-radius: 999px; min-width: 20px; height: 20px; display: inline-grid; place-items: center; font-size: 12px; padding: 0 6px; }
.jt1 .pages { display: inline-flex; gap: 2px; background: var(--card); border: 1px solid var(--line); border-radius: 11px; padding: 3px; }
.jt1 .pg { padding: 5px 12px; border-radius: 8px; font-weight: 600; font-size: 13px; color: var(--muted); }
.jt1 .pg.on { background: var(--ink); color: #fff; }


/* stage: rail + sheet */
.jt1 .stage { max-width: 980px; margin: 0 auto; display: grid; grid-template-columns: 70px minmax(0, 1fr); gap: 14px; align-items: start; }
.jt1 .rail { position: sticky; top: 14px; display: grid; gap: 2px; background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 6px; box-shadow: 0 8px 22px rgba(20,60,50,.08); }
.jt1 .tl { display: grid; justify-items: center; gap: 3px; padding: 9px 2px 7px; border-radius: 11px; color: var(--muted); font-size: 10.5px; font-weight: 600; cursor: pointer; }
.jt1 .tl:hover { background: var(--soft); color: var(--ink); }
.jt1 .tl.on { background: var(--ink); color: #fff; }
.jt1 .rail hr { border: 0; height: 1px; background: var(--line); margin: 5px 8px; }
.jt1 .inks { display: grid; justify-items: center; gap: 8px; padding: 6px 0; }
.jt1 .dot { width: 18px; height: 18px; border-radius: 50%; box-shadow: 0 0 0 2px var(--card), 0 0 0 3px var(--line); }
.jt1 .dot.on { box-shadow: 0 0 0 2px var(--card), 0 0 0 4px var(--ink); }
.jt1 .stamps { display: grid; gap: 4px; padding: 2px 0 4px; }
.jt1 .stmp { border-radius: 8px; padding: 5px 0; font-size: 10.5px; font-weight: 700; color: #fff; }
.jt1 .stmp.on { box-shadow: 0 0 0 2px var(--card), 0 0 0 4px var(--ink); }
.jt1 .sheet-wrap { min-width: 0; display: grid; gap: 12px; }
.jt1 .sheet { position: relative; background: rgba(255,255,255,.55); border: 1px solid var(--line); border-radius: 22px; min-height: 760px; overflow: hidden; }
.jt1 .lesson { position: relative; padding: 26px clamp(14px, 4vw, 44px) 50px; display: grid; gap: 30px; }
.jt1 .ink { position: absolute; left: 0; top: 0; width: 100%; z-index: 5; touch-action: none; }
.jt1 .items { position: absolute; inset: 0; z-index: 6; pointer-events: none; }
.jt1 .item { position: absolute; }
.jt1 .item.txt { min-width: 60px; padding: 4px 8px; border: 1.5px dashed transparent; border-radius: 6px; font-family: var(--disp); font-size: 24px; font-weight: 700; color: var(--ink); line-height: 1.3; }
.jt1 .item.txt:hover, .jt1 .item.txt:focus-within { border-color: var(--line); }
.jt1 .txt-ed { outline: none; display: inline-block; min-width: 40px; }
.jt1 .item.img { background: #fff; padding: 8px; border-radius: 6px; box-shadow: 0 10px 24px rgba(20,60,50,.18); }
.jt1 .item.img img { display: block; width: 100%; height: auto; pointer-events: none; border-radius: 3px; }
.jt1 .item.stamp { font-family: var(--disp); font-weight: 800; font-size: 17px; letter-spacing: .02em; color: #fff; padding: 8px 16px; border-radius: 8px; transform: rotate(-6deg); box-shadow: 0 8px 18px rgba(20,60,50,.25); white-space: nowrap; animation: jt1Stamp .35s cubic-bezier(.2,1.6,.4,1) both; }
@keyframes jt1Stamp { from { opacity: 0; transform: rotate(-6deg) scale(1.6); } }
.jt1 .item .del, .jt1 .item .grip { position: absolute; width: 24px; height: 24px; border-radius: 50%; background: var(--ink); color: #fff; display: grid; place-items: center; opacity: 0; transition: opacity .15s; }
.jt1 .item .del { top: -10px; right: -10px; }
.jt1 .item .grip { bottom: -10px; right: -10px; cursor: nwse-resize; }
.jt1 .item .ms { font-size: 15px; }
.jt1 .item:hover .del, .jt1 .item:hover .grip { opacity: 1; }
.jt1 .spot .lesson > *:not(.lit):not(:has(.lit)), .jt1 .spot .part > *:not(.lit):not(:has(.lit)):not(.lit *) { opacity: .12; filter: blur(1.5px); transition: opacity .25s, filter .25s; }
.jt1 .spot .lit { position: relative; z-index: 2; transform: scale(1.03); transition: transform .25s; }

/* rundown */

.jt1 .head { display: flex; align-items: flex-end; justify-content: space-between; gap: 10px; flex-wrap: wrap; padding-bottom: 12px; border-bottom: 1px solid var(--line); }
.jt1 .head h1 { font-family: var(--disp); font-weight: 800; font-size: clamp(28px, 4vw, 40px); letter-spacing: -.02em; margin: 0; line-height: 1; }
.jt1 .tag { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; color: var(--teal); background: var(--teal-wash); border-radius: 8px; padding: 5px 10px; text-align: left; }
.jt1 .tag .ms { font-size: 17px; }
.jt1 .part { display: grid; gap: 16px; }
.jt1 .anim .part { animation: jt1Rise .4s cubic-bezier(.2,.7,.2,1) both; }
@keyframes jt1Rise { from { opacity: 0; transform: translateY(10px); } }
.jt1 .pop { animation: jt1Pop .3s cubic-bezier(.2,.7,.2,1) both; }
@keyframes jt1Pop { from { opacity: 0; transform: scale(.97); } }
@media (prefers-reduced-motion: reduce) { .jt1 .anim .part, .jt1 .pop, .jt1 .item.stamp { animation: none; } }
.jt1 .ph { display: flex; align-items: baseline; gap: 10px; }
.jt1 .ph .n { font-family: var(--disp); font-weight: 800; font-size: 15px; color: #fff; background: var(--red); border-radius: 7px; padding: 2px 8px; }
.jt1 .ph h2 { margin: 0; font-family: var(--disp); font-size: 13px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--muted); }
.jt1 .ph::after { content: ""; flex: 1; height: 1px; background: var(--line); align-self: center; }

/* cue cards */
.jt1 .stack { position: relative; width: min(100%, 640px); justify-self: center; }
.jt1 .stack.cover { width: 100%; }
.jt1 .stack.fu { width: min(100%, 580px); }
.jt1 .icard { position: relative; z-index: 1; background: var(--card); border-radius: 8px; padding: 18px 22px 20px; display: grid; gap: 10px; box-shadow: 0 14px 30px rgba(20,60,50,.11); border-top: 8px solid var(--gold); transform: rotate(-.5deg);
  background-image: linear-gradient(transparent 31px, var(--rule-line) 32px); background-size: 100% 32px; background-position: 0 50px; }
.jt1 .icard::after { content: ""; position: absolute; right: 0; bottom: 0; width: 30px; height: 30px; background: linear-gradient(135deg, var(--stage) 50%, var(--fold) 50%); border-radius: 0 0 8px 0; }
.jt1 .icard small { font-family: var(--disp); font-size: 11.5px; font-weight: 700; color: var(--teal); letter-spacing: .14em; text-transform: uppercase; }
.jt1 .icard .q { font-family: var(--disp); font-weight: 700; font-size: clamp(23px, 3.2vw, 32px); line-height: 1.15; letter-spacing: -.01em; margin: 0; text-wrap: balance; }
.jt1 .icard p.d { margin: 0; font-size: 17px; line-height: 32px; font-weight: 500; }
.jt1 .stack.fu .icard { transform: none; }
.jt1 .stack.fu .icard .q { font-size: clamp(20px, 2.6vw, 26px); }
.jt1 .q-tools { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.jt1 .fu-wrap { display: grid; gap: 12px; width: min(100%, 640px); justify-self: center; }
.jt1 .fu-wrap .stack { width: 100%; }
.jt1 .fu-wrap .icard { background: linear-gradient(90deg, var(--plum), var(--plum-2)); color: #fff; border-top: 0; border-radius: 16px; transform: none; box-shadow: 0 10px 24px rgba(106,76,147,.25); }
.jt1 .fu-wrap .icard::after { display: none; }
.jt1 .fu-wrap .icard small { color: #F7D9FF; }
.jt1 .fu-wrap .stack.push .icard { background: linear-gradient(90deg, #4E3775, var(--plum)); }
.jt1 .cover-card { padding: 26px 26px 30px; text-align: left; justify-items: start; border-top-color: var(--red); transform: none; background-image: none; }
.jt1 .cover-card::after { display: none; }
.jt1 .cover-card small { color: var(--red); }
.jt1 .cover-card h1 { font-family: var(--disp); font-weight: 800; font-size: clamp(44px, 7.4vw, 84px); line-height: .92; letter-spacing: -.035em; margin: 4px 0 8px; text-wrap: balance; }

/* captions (answers, notes, reveals) */
.jt1 .sticky { display: inline-block; background: var(--card); color: var(--ink); padding: 12px 18px 12px 16px; font-weight: 600; font-size: 19px; line-height: 1.35; border-radius: 10px; box-shadow: 0 8px 20px rgba(20,60,50,.10); border-left: 6px solid var(--red); max-width: 100%; text-align: left; }
.jt1 .sticky.big { font-size: 21px; padding: 16px 22px 16px 18px; }
.jt1 .sticky.green { border-left-color: var(--teal); }
.jt1 .sticky.mine { font-size: 16px; padding: 8px 14px; box-shadow: none; background: var(--soft); border-left-color: var(--gold); }
.jt1 .sticky small { display: block; font-family: var(--disp); font-weight: 700; font-size: 11.5px; letter-spacing: .14em; text-transform: uppercase; color: var(--red); margin-bottom: 3px; }
.jt1 .sticky.green small { color: var(--teal); }
.jt1 .sticky-wrap { display: grid; justify-items: center; gap: 6px; }
.jt1 .notes { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.jt1 .notes .sticky { font-size: 15.5px; padding: 8px 14px; border-left: 0; border: 1px solid var(--line); box-shadow: none; border-radius: 999px; background: var(--card); }
.jt1 .blank { display: inline-block; min-width: 80px; border-bottom: 2.5px solid rgba(35,32,43,.4); margin: 0 4px; transform: translateY(-4px); }
.jt1 .fill { display: inline-block; min-width: 140px; padding: 0 6px; border-bottom: 2px dashed rgba(35,32,43,.35); color: var(--red); outline: none; }
.jt1 [data-ph]:empty::before { content: attr(data-ph); color: #B9AFA4; font-weight: 400; }
.jt1 .ans-btn { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px 9px 12px; font-weight: 600; font-size: 14.5px; background: var(--soft); border: 2px solid transparent; border-radius: 12px; }
.jt1 .ans-btn.on { background: var(--card); border-color: var(--ink); }
.jt1 .ans-btn.red { background: var(--ink); color: #fff; }
.jt1 .ans-btn.ghost { background: var(--card); border-color: var(--line); }
.jt1 .fu-wrap .ans-btn.ghost { background: rgba(255,255,255,.18); border-color: transparent; color: #fff; }
.jt1 .mini-btn { display: inline-flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 600; color: var(--teal); background: var(--teal-wash); border-radius: 8px; padding: 6px 11px 6px 8px; justify-self: center; }
.jt1 .mini-btn .ms { font-size: 17px; }

/* words */
.jt1 .words { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
.jt1 .word { background: var(--card); border: 1px solid var(--line); border-radius: 999px; padding: 8px 16px; font-family: var(--disp); font-weight: 700; font-size: 17px; transition: transform .15s; }
.jt1 button.word:hover { transform: translateY(-2px); }
.jt1 .word.seen { border-color: var(--teal); color: var(--teal); }
.jt1 .word.on { background: var(--red); border-color: var(--red); color: #fff; }
.jt1 .words.small .word { font-size: 14px; padding: 5px 12px; }
.jt1 .wcard { justify-self: center; width: min(100%, 680px); display: grid; gap: 12px; }
.jt1 .lower { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: stretch; border-radius: 12px; overflow: hidden; box-shadow: 0 12px 26px rgba(20,60,50,.14); background: var(--card); }
.jt1 .lt-tag { background: var(--red); color: #fff; padding: 14px 20px; display: grid; align-content: center; gap: 4px; }
.jt1 .lt-tag b { font-family: var(--disp); font-weight: 800; font-size: clamp(28px, 4vw, 40px); letter-spacing: -.02em; line-height: 1; }
.jt1 .lt-tag .stress { color: rgba(255,255,255,.85); }
.jt1 .lt-tag .stress em { color: #fff; text-decoration: underline; text-underline-offset: 3px; }
.jt1 .lt-txt { padding: 12px 16px; display: grid; align-content: center; gap: 4px; min-width: 0; }
.jt1 .lower > .spk { align-self: center; margin-right: 12px; }
.jt1 .stress { font-size: 12.5px; font-weight: 600; letter-spacing: .04em; color: var(--muted); }
.jt1 .stress em { font-style: normal; color: var(--red); }
.jt1 .wmean { font-size: 17px; font-weight: 700; margin: 0; }
.jt1 .wex-row { display: flex; align-items: center; gap: 10px; }
.jt1 .wex { font-size: 16px; margin: 0; color: var(--muted); }
.jt1 .wex b { color: var(--red); }
.jt1 .wfoot { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: space-between; }
.jt1 .spk { width: 38px; height: 38px; border-radius: 50%; background: var(--ink); color: #fff; display: inline-grid; place-items: center; flex: 0 0 auto; }
.jt1 .spk.sm { width: 30px; height: 30px; background: var(--soft); color: var(--ink); }
.jt1 .spk.sm .ms { font-size: 17px; }
.jt1 .tr-btn { display: inline-flex; align-items: center; gap: 5px; color: var(--teal); background: var(--teal-wash); border-radius: 8px; padding: 5px 10px 5px 7px; font-weight: 600; font-size: 12.5px; text-decoration: none; }
.jt1 .tr-btn .ms, .jt1 .tr-out .ms { font-size: 16px; }
.jt1 .tr-out { display: inline-flex; align-items: center; gap: 6px; background: var(--teal-wash); color: #166B69; border-radius: 8px; padding: 5px 11px 5px 8px; font-weight: 600; font-size: 16px; }

/* grammar */
.jt1 .rule { justify-self: center; width: min(100%, 640px); display: grid; gap: 12px; background: var(--card); border-radius: 14px; padding: 20px 22px; box-shadow: 0 12px 26px rgba(20,60,50,.10); border-top: 8px solid var(--gold); }
.jt1 .rule small { font-family: var(--disp); font-size: 11.5px; font-weight: 700; color: #B07D12; letter-spacing: .14em; text-transform: uppercase; }
.jt1 .rule h3 { margin: 0; font-family: var(--disp); font-weight: 800; font-size: clamp(24px, 3.4vw, 32px); line-height: 1.1; letter-spacing: -.01em; }
.jt1 .rule p { margin: 0; font-size: 16.5px; line-height: 1.5; }
.jt1 .ex { display: grid; gap: 6px; margin: 0; padding: 0; list-style: none; }
.jt1 .ex li { font-size: 18px; font-weight: 500; padding-left: 22px; position: relative; }
.jt1 .ex li::before { content: ""; position: absolute; left: 4px; top: .55em; width: 8px; height: 8px; border-radius: 2px; background: var(--gold); }
.jt1 .ex b { color: var(--red); }

/* step nav + buttons */
.jt1 .stepnav { display: flex; align-items: center; justify-content: space-between; gap: 10px; background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 5px; width: min(100%, 640px); justify-self: center; }
.jt1 .stepnav button { display: inline-flex; align-items: center; gap: 2px; border-radius: 9px; padding: 8px 13px; font-weight: 600; font-size: 14px; }
.jt1 .stepnav .nx { background: var(--ink); color: #fff; padding-right: 10px; }
.jt1 .stepnav button:disabled { opacity: .35; background: none; color: var(--ink); }
.jt1 .sn-dots { display: flex; gap: 6px; flex-wrap: wrap; justify-content: center; }
.jt1 .sn-dots i { width: 8px; height: 8px; border-radius: 50%; background: var(--line); }
.jt1 .sn-dots i.on { background: var(--teal); }
.jt1 .sn-dots i.cur { background: var(--red); width: 20px; border-radius: 4px; }
.jt1 .go { justify-self: end; display: inline-flex; align-items: center; gap: 8px; background: var(--ink); color: #fff; border-radius: 12px; padding: 13px 22px; font-family: var(--disp); font-weight: 700; font-size: 15px; box-shadow: 0 10px 22px rgba(21,48,42,.18); }

/* challenge */
.jt1 .act-box { display: grid; gap: 16px; justify-items: center; background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 18px; }
.jt1 .how { margin: 0; text-align: center; font-size: 15px; color: var(--muted); max-width: 54ch; }
.jt1 .tf-card { width: min(100%, 560px); min-height: 150px; display: grid; place-content: center; justify-items: center; text-align: center; gap: 10px; background: var(--card); border-radius: 8px; padding: 20px; box-shadow: 0 12px 26px rgba(20,60,50,.11); border-top: 8px solid var(--plum); }
.jt1 .tf-card .q { font-family: var(--disp); font-weight: 700; font-size: clamp(22px, 3vw, 30px); line-height: 1.15; margin: 0; text-wrap: balance; }
.jt1 .tf-card small { font-family: var(--disp); font-size: 11.5px; font-weight: 700; color: var(--plum); letter-spacing: .14em; text-transform: uppercase; }
.jt1 .verdict { font-family: var(--disp); font-weight: 800; font-size: 30px; line-height: 1.1; }
.jt1 .verdict.t { color: var(--teal); }
.jt1 .verdict.f { color: var(--red); }
.jt1 .why { margin: 0; font-size: 15.5px; color: var(--muted); max-width: 48ch; }
.jt1 .score { font-size: 13px; font-weight: 600; color: var(--teal); background: var(--teal-wash); border-radius: 8px; padding: 5px 10px; justify-self: center; }
.jt1 .timer { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center; }
.jt1 .clock { font-family: var(--disp); font-weight: 800; font-size: 46px; line-height: 1; font-variant-numeric: tabular-nums; min-width: 120px; text-align: center; }
.jt1 .clock.done { color: var(--red); }
.jt1 .order-list, .jt1 .answer-list { display: grid; gap: 8px; width: min(100%, 520px); }
.jt1 .ord { display: flex; align-items: center; gap: 12px; background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 10px 14px; font-weight: 600; font-size: 17px; text-align: left; }
.jt1 .ord-n { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; background: var(--soft); font-family: var(--disp); font-size: 14px; font-weight: 800; flex: 0 0 auto; }
.jt1 .ord.on { border-color: var(--plum); }
.jt1 .ord.on .ord-n { background: var(--plum); color: #fff; }
.jt1 .ans-row { display: flex; align-items: center; gap: 10px; background: var(--soft); border-radius: 10px; padding: 8px 12px; }
.jt1 .ans-row b { font-size: 16px; flex: 1; min-width: 0; }
.jt1 .ans-row .note { font-size: 13px; font-weight: 600; color: var(--muted); }
.jt1 .ans-row > .ms { color: var(--red); }
.jt1 .ans-row.ok > .ms { color: var(--teal); }
.jt1 .sides { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; width: 100%; }
.jt1 .side { display: grid; gap: 10px; align-content: start; background: var(--soft); border-radius: 14px; padding: 14px; border: 2px solid transparent; }
.jt1 .side.on { border-color: var(--plum); background: var(--plum-wash); }
.jt1 .side-h { display: inline-flex; align-items: center; gap: 6px; font-family: var(--disp); font-weight: 800; font-size: 20px; }
.jt1 .side ul { margin: 0; padding-left: 18px; display: grid; gap: 6px; font-size: 15px; }
.jt1 .chips-row { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.jt1 .chip { background: var(--card); border: 1px solid var(--line); border-radius: 999px; padding: 7px 14px; font-weight: 600; font-size: 15px; }
.jt1 .chip.on { background: var(--plum); border-color: var(--plum); color: #fff; }
.jt1 .checks { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; width: 100%; }
.jt1 .ck { display: flex; align-items: center; gap: 8px; text-align: left; background: var(--soft); border-radius: 10px; padding: 9px 12px; font-weight: 600; font-size: 14.5px; }
.jt1 .ck .ms { color: #BDB3A8; }
.jt1 .ck.on { background: var(--teal); color: #fff; }
.jt1 .ck.on .ms { color: #fff; }
.jt1 .recap { display: grid; gap: 8px; }
.jt1 .rc-row { display: grid; gap: 4px; justify-items: start; padding: 8px 0; border-top: 1px solid var(--line); }
.jt1 .rc-row b { font-size: 15px; color: var(--teal); }
.jt1 .rc-row .mini-btn { justify-self: start; }
.jt1 .rc-fact { font-size: 17px; font-weight: 500; }

/* wrap-up */
.jt1 .lines { justify-self: center; width: min(100%, 640px); display: grid; background: var(--card); border-radius: 14px; padding: 10px 20px 14px; box-shadow: 0 10px 24px rgba(20,60,50,.08); }
.jt1 .line { display: flex; gap: 10px; align-items: baseline; border-bottom: 1px solid var(--line); padding: 8px 0 4px; }
.jt1 .line i { font-style: normal; font-family: var(--disp); font-weight: 800; color: var(--red); font-size: 17px; }
.jt1 .line .ed { flex: 1; min-width: 0; font-size: 18px; font-weight: 500; outline: none; min-height: 30px; }
.jt1 .fixes { justify-self: center; width: min(100%, 640px); display: grid; gap: 10px; }
.jt1 .fx { display: grid; gap: 8px; background: var(--card); border-radius: 12px; padding: 12px 16px; box-shadow: 0 6px 14px rgba(20,60,50,.08); border-left: 6px solid var(--red); }
.jt1 .fx.up { border-left-color: var(--gold); }
.jt1 .fx-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
.jt1 .fx-kind { font-family: var(--disp); font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--red); }
.jt1 .fx.up .fx-kind { color: #B07D12; }
.jt1 .fx-said { font-size: 19px; font-weight: 600; text-decoration: underline wavy var(--red); text-decoration-thickness: 1.5px; text-underline-offset: 5px; }
.jt1 .fx.up .fx-said { text-decoration-color: var(--gold); }
.jt1 .fx-better { font-size: 19px; font-weight: 700; color: var(--teal); display: flex; gap: 6px; align-items: center; }
.jt1 .empty { text-align: center; color: var(--muted); font-size: 14px; background: var(--card); border-radius: 12px; padding: 16px; }

/* Fix it drawer */
.jt1 .scrim { position: fixed; inset: 0; background: rgba(21,48,42,.2); z-index: 49; }
.jt1 .fixd { position: fixed; top: 0; right: 0; bottom: 0; width: min(380px, 100vw); background: var(--card); box-shadow: -10px 0 30px rgba(20,60,50,.18); transform: translateX(105%); transition: transform .25s; z-index: 50; display: grid; grid-template-rows: auto auto minmax(0, 1fr); gap: 14px; padding: calc(16px + env(safe-area-inset-top, 0px)) max(16px, env(safe-area-inset-right, 0px)) calc(16px + env(safe-area-inset-bottom, 0px)) 16px; visibility: hidden; }
.jt1 .fixd.open { transform: none; visibility: visible; }
.jt1 .fixd-h { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.jt1 .fixd-h h2 { margin: 0; font-family: var(--disp); font-weight: 800; font-size: 26px; }
.jt1 .fixd-h button { width: 34px; height: 34px; border-radius: 50%; background: var(--soft); display: grid; place-items: center; }
.jt1 .fform { display: grid; gap: 8px; background: var(--soft); border-radius: 12px; padding: 12px; }
.jt1 .fform label { font-family: var(--disp); font-size: 11.5px; font-weight: 700; color: var(--muted); letter-spacing: .1em; text-transform: uppercase; }
.jt1 .fform textarea, .jt1 .fform input { width: 100%; border: 1px solid var(--line); border-radius: 8px; padding: 9px 11px; background: var(--card); font-size: 17px; font-weight: 500; color: var(--ink); outline: none; resize: none; }
.jt1 .fform textarea:focus, .jt1 .fform input:focus { border-color: var(--teal); }
.jt1 .fseg { display: inline-flex; background: var(--card); border-radius: 9px; padding: 3px; gap: 3px; }
.jt1 .fseg button { border-radius: 7px; padding: 6px 12px; font-size: 13px; font-weight: 600; color: var(--muted); }
.jt1 .fseg button.on { background: var(--red); color: #fff; }
.jt1 .fseg button.up.on { background: var(--gold); color: var(--ink); }
.jt1 .fadd { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
.jt1 .fadd .add { display: inline-flex; align-items: center; gap: 6px; background: var(--ink); color: #fff; border-radius: 9px; padding: 8px 14px 8px 10px; font-weight: 600; font-size: 14px; }
.jt1 .flist { overflow-y: auto; display: grid; gap: 8px; align-content: start; }
.jt1 .flist-empty { margin: 0; color: var(--muted); font-size: 13.5px; text-align: center; padding: 10px; }
.jt1 .fl { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 2px 8px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 8px 10px; }
.jt1 .fl b { font-size: 16px; font-weight: 600; }
.jt1 .fl-better { font-size: 15.5px; font-weight: 600; color: var(--teal); grid-column: 1; outline: none; }
.jt1 .fl > button { grid-row: 1 / span 2; grid-column: 2; color: var(--muted); align-self: center; }
.jt1 .fl.up { border-left: 4px solid var(--gold); }
.jt1 .fl.fx0 { border-left: 4px solid var(--red); }

@media (max-width: 720px) {
  .jt1 .present { left: 50%; }
  .jt1 .bar { grid-template-columns: 1fr; }
  .jt1 .bar-in { grid-column: 1; justify-content: center; }
  .jt1 .stage { grid-template-columns: 1fr; }
  .jt1 .rail { position: static; display: flex; flex-wrap: wrap; justify-content: center; }
  .jt1 .rail hr { display: none; }
  .jt1 .inks, .jt1 .stamps { display: flex; padding: 0 4px; align-items: center; }
  .jt1 .stmp { padding: 5px 8px; }
  .jt1 .sides, .jt1 .checks { grid-template-columns: 1fr; }
  .jt1 .lower { grid-template-columns: 1fr; }
  .jt1 .lower > .spk { margin: 0 0 12px 16px; }
}
`;
