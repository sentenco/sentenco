import React, { useEffect, useState } from "react";

const IMG = "/curriculum/u8-l1";
const PREF_COLOR = { Like: "#22A67E", "Don't Like": "#E0502F" };

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

function PhotoIcon({ size = 42 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5-4 4-3-3-6 6" />
    </svg>
  );
}

function Pic({ src, label, size = 116, onZoom }) {
  const big = (
    <div className="zoom-pic">
      {src ? <img src={src} alt={label} /> : (
        <div className="zoom-ph">
          <PhotoIcon size={44} />
          <span>{label}</span>
        </div>
      )}
    </div>
  );
  return (
    <div className="pic" style={{ width: size, height: size }} onClick={() => onZoom(big)}>
      {src ? <img src={src} alt={label} draggable={false} /> : (
        <div className="pic-ph">
          <PhotoIcon size={typeof size === "number" ? Math.round(size * 0.22) : 26} />
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}

function PrefTag({ label, onZoom }) {
  const color = PREF_COLOR[label];
  const big = <div className="pref-zoom" style={{ background: color }}>{label}</div>;
  return (
    <div className="pref-tag" style={{ background: color }} onClick={() => onZoom(big)}>
      {label}
    </div>
  );
}

function SortBin({ label, color, items, onZoom }) {
  return (
    <div className="sort-bin" style={{ borderColor: color }}>
      <div className="sort-bin-label" style={{ background: color }}>{label}</div>
      <div className="sort-bin-items">
        {items.map((it, idx) => (
          <Pic key={idx} src={it.src} label={it.label} size={54} onZoom={onZoom} />
        ))}
      </div>
    </div>
  );
}

const PARTS = {
  A: { color: "#F2A900" },
  B: { color: "#2E97C7" },
  C: { color: "#22A67E" },
  D: { color: "#E0567A" },
};

export default function IDontLikeItLesson() {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    const styleId = "hal-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".hal-wrap");
    const slide = document.querySelector(".slide");
    if (!wrap || !slide) return;
    const pad = parseFloat(getComputedStyle(wrap).paddingLeft) || 0;
    const targetW = Math.ceil(slide.offsetWidth + pad * 2);
    const targetH = Math.ceil(slide.offsetHeight + pad * 2);
    const chromeW = window.outerWidth - window.innerWidth;
    const chromeH = window.outerHeight - window.innerHeight;
    const screenW = window.screen.availWidth || 1600;
    const screenH = window.screen.availHeight || 900;
    const outerW = Math.min(targetW + chromeW, screenW);
    const outerH = Math.min(targetH + chromeH, screenH);
    window.resizeTo(outerW, outerH);
    const left = Math.max(0, Math.floor((screenW - outerW) / 2));
    const top = Math.max(0, Math.floor((screenH - outerH) / 2));
    window.moveTo(left, top);
  }, []);

  useEffect(() => {
    if (zoom) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [zoom]);

  function exit() {
    window.close();
  }

  const slides = buildSlides({ onZoom: setZoom });
  const total = slides.length;
  const lastPart = [...slides].reverse().find((x) => x.part)?.part;
  const s = slides[i];

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }

  return (
    <div className="hal-wrap">
      <div className="deck-single">
        <div className={`slide ${i === 0 ? "slide--title" : "slide--regular"}`}>
          <button className="close-btn" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div className="slide-header">
            <div className="brand-bubble">
              <img className="brand-logo" src="/logo-sentivo.png" alt="" />
              <span className="brand-word">entivo</span>
            </div>
            <div className="stage-chip">
              {s.part && <span className="part-badge" style={{ background: PARTS[s.part].color }}>{s.part}</span>}
              <span className="stage-name">{s.stage}</span>
              {s.part && s.part === lastPart && <span className="last-tag">Last part!</span>}
            </div>
          </div>

          <div className={`slide-body ${s.instruction ? "has-instruction" : ""}`}>
            {s.instruction && (
              <div className="slide-instruction">
                {s.instruction.map(([icon, text]) => (
                  <span key={text} className="instr-step"><span className="instr-icon">{icon}</span>{text}</span>
                ))}
              </div>
            )}
            {s.title && <span className="title-highlight"><h2 className="slide-h sub">{s.title}</h2></span>}
            {s.body}
            {s.guide && (
              <div className="slide-guide">
                <span className="guide-label">Say</span>
                <span className="guide-text">
                  {s.guide.split("___").map((part, k, arr) => (
                    <React.Fragment key={k}>{part}{k < arr.length - 1 && <span className="guide-blank" />}</React.Fragment>
                  ))}
                </span>
              </div>
            )}
          </div>

          <div className="slide-footer">
            <button className={`nav-btn ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="progress-track">
              {Array.from({ length: total }).map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === i ? "on" : ""} ${slides[idx].part && slides[idx].part !== slides[idx - 1]?.part ? "part-start" : ""}`}
                  style={slides[idx].part && idx === i ? { background: PARTS[slides[idx].part].color } : undefined}
                />
              ))}
            </div>
            <button className="nav-btn next" onClick={() => (i === total - 1 ? exit() : go(1))}>
              {i === total - 1 ? "Finish Lesson" : "Next →"}
            </button>
          </div>
        </div>
      </div>

      {zoom && (
        <div className="zoom-overlay open" onClick={() => setZoom(null)}>
          <div className="zoom-overlay-inner" onClick={(e) => e.stopPropagation()}>
            <button className="zoom-close" onClick={() => setZoom(null)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            {zoom}
          </div>
        </div>
      )}
    </div>
  );
}

export const LESSON_GUIDE = [
  { stage: "Unit 8 · Lesson 3", time: null, note: null },
  { stage: "Food Warm-Up", time: "~3 min", note: "Show familiar foods and let the student identify them. Quickly recycle \"I like...\"" },
  { stage: "I Don't Like It!", time: "~4 min", note: "Introduce \"I don't like...\" with exaggerated facial expressions. Example: \"I don't like eggs!\"" },
  { stage: "Like or Don't Like?", time: "~4 min", note: "Show one food at a time. Student chooses and says either \"I like ___.\" or \"I don't like ___.\"" },
  { stage: "Food Sorting", time: "~4 min", note: "Create two areas: LIKE and DON'T LIKE. Student places food pictures and says a sentence for each." },
  { stage: "What Does Teacher Like?", time: "~3 min", note: "Teacher says sentences about food. Student listens and identifies whether the teacher likes or doesn't like each food." },
  { stage: "HIGHLIGHT: Food Judge", time: "~2 min", note: "Show unusual/funny food combinations. Student is the judge: \"I like it!\" / \"I don't like it!\"" },
  { stage: "HIGHLIGHT: Food Judge", time: "~2 min", note: "Teacher gives a ridiculous opinion, student reacts. Then student asks the teacher about foods." },
  { stage: "My Food Choices", time: "~3 min", note: "Student chooses 2 foods they like and 2 they don't like and says the sentences independently." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 8 · Lesson 3",
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">I Don't Like It!</h1></span>
          <p className="slide-p title-p">Today we say what we don't like too!</p>
        </div>
      ),
    },
    // 2: Food Warm-Up
    {
      stage: "Food Warm-Up",
      body: (
        <div className="bubble-col" style={{ maxWidth: 420 }}>
          <div className="brow me">
            <div className="avatar coral">S</div>
            <div className="bubble right">I like pizza!</div>
          </div>
        </div>
      ),
    },
    // 3: I Don't Like It!
    {
      stage: "I Don't Like It!",
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/egg.jpg`} label="egg" size={100} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I don't like eggs! 😖</div>
            </div>
          </div>
        </div>
      ),
    },
    // 3b: I Don't Like It! (second model)
    {
      stage: "I Don't Like It!",
      body: (
        <div className="center-col">
          <Pic src="/curriculum/u8-l1/rice.jpg" label="rice" size={100} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I don't like rice! 😖</div>
            </div>
          </div>
        </div>
      ),
    },
    // 4: Like or Don't Like? (round 1)
    {
      stage: "Like or Don't Like?",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Like or Don't Like?</h2></span>
          <Pic src={`${IMG}/banana.jpg`} label="banana" size={100} onZoom={onZoom} />
        </div>
      ),
    },
    // 4b: Like or Don't Like? (round 2)
    {
      stage: "Like or Don't Like?",
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/pizza.avif`} label="pizza" size={100} onZoom={onZoom} />
        </div>
      ),
    },
    // 4c: Like or Don't Like? (round 3)
    {
      stage: "Like or Don't Like?",
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/apple.jpg`} label="apple" size={100} onZoom={onZoom} />
        </div>
      ),
    },
    // 5: Food Sorting
    {
      stage: "Food Sorting",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Food Sorting!</h2></span>
          <div className="sort-row">
            <SortBin label="LIKE" color={PREF_COLOR.Like} items={[{ src: `${IMG}/pizza.avif`, label: "pizza" }, { src: `${IMG}/apple.jpg`, label: "apple" }]} onZoom={onZoom} />
            <SortBin label="DON'T LIKE" color={PREF_COLOR["Don't Like"]} items={[{ src: `${IMG}/egg.jpg`, label: "egg" }]} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: What Does Teacher Like? (round 1)
    {
      stage: "What Does Teacher Like?",
      body: (
        <div className="bubble-col" style={{ maxWidth: 420 }}>
          <div className="brow">
            <div className="avatar navy">T</div>
            <div className="bubble left">I like rice. I don't like bananas.</div>
          </div>
        </div>
      ),
    },
    // 6b: What Does Teacher Like? (round 2)
    {
      stage: "What Does Teacher Like?",
      body: (
        <div className="bubble-col" style={{ maxWidth: 420 }}>
          <div className="brow">
            <div className="avatar navy">T</div>
            <div className="bubble left">I like apples. I don't like eggs.</div>
          </div>
        </div>
      ),
    },
    // 7: HIGHLIGHT Food Judge (round 1)
    {
      stage: "HIGHLIGHT: Food Judge",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">🍽️ Food Judge!</h2></span>
          <Pic src="/curriculum/u8-l3/pizza-banana.jpg" label="pizza with a banana on top" size={130} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I don't like it! 😝</div>
            </div>
          </div>
        </div>
      ),
    },
    // 7b: HIGHLIGHT Food Judge (round 1, second combo)
    {
      stage: "HIGHLIGHT: Food Judge",
      body: (
        <div className="center-col">
          <Pic src="/curriculum/u8-l3/rice-apple.jpg" label="rice with apple slices" size={130} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">I like it! 😋</div>
            </div>
          </div>
        </div>
      ),
    },
    // 8: HIGHLIGHT Food Judge (round 2, switch)
    {
      stage: "HIGHLIGHT: Food Judge",
      body: (
        <div className="center-col">
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I like eggs with ice cream!</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Yuck! Do you like pizza?</div>
            </div>
          </div>
        </div>
      ),
    },
    // 8b: HIGHLIGHT Food Judge (round 2, second combo)
    {
      stage: "HIGHLIGHT: Food Judge",
      body: (
        <div className="center-col">
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">I like banana pizza!</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Yuck! Do you like rice?</div>
            </div>
          </div>
        </div>
      ),
    },
    // 9: My Food Choices
    {
      stage: "My Food Choices",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">My Food Choices!</h2></span>
          <div className="word-row">
            <Pic src={`${IMG}/pizza.avif`} label="pizza" size={64} onZoom={onZoom} />
            <Pic src={`${IMG}/banana.jpg`} label="banana" size={64} onZoom={onZoom} />
            <Pic src={`${IMG}/egg.jpg`} label="egg" size={64} onZoom={onZoom} />
            <Pic src={`${IMG}/apple.jpg`} label="apple" size={64} onZoom={onZoom} />
          </div>
          <div className="word-row">
            <PrefTag label="Like" onZoom={onZoom} />
            <PrefTag label="Don't Like" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 10: Wrap-up
    {
      stage: "Wrap-Up",
      body: (
        <div className="center-col">
          <StarIcon size={48} fill="var(--sun)" />
          <h2 className="slide-h sub">Great Job!</h2>
          <p className="slide-p">You can say what you like and don't like! See you next lesson!</p>
        </div>
      ),
    },
  ];
}

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&family=Fredoka:wght@600;700&display=swap');

:root {
  --coral: #FF6B4A; --coral-deep: #E0502F; --coral-light: #FFE6DD;
  --sun: #F2A900; --navy: #1B2A4A; --navy-soft: #5A6B92; --navy-light: #E4E9F5;
  --ink: #2B2438; --ink-soft: #736A87;
}

.hal-wrap { min-height: 100vh; width: 100%; background: #EDE7F6; color: var(--ink); font-family: 'Quicksand', sans-serif; padding: 1cm; box-sizing: border-box; display: flex; align-items: center; justify-content: center; }
.hal-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 24px 50px rgba(27,42,74,0.22);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/a1-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/a1-shared/slide-bg-v3.jpg'); background-position: center; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.15); color: var(--navy); }

.slide-header {
  flex-shrink: 0; position: relative; z-index: 2;
  padding: 20px 26px 0; display: flex; align-items: center; justify-content: space-between;
}

.brand-bubble { position: relative; z-index: 1; display: flex; align-items: center; gap: 0; background: #fff; border-radius: 999px; padding: 6px 16px 6px 8px; box-shadow: 0 3px 8px rgba(0,0,0,0.2); }
.brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.brand-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--navy); }

.stage-chip { position: relative; z-index: 1; display: flex; align-items: center; gap: 8px; background: #fff; padding: 7px 16px; border-radius: 999px; box-shadow: 0 3px 8px rgba(27,42,74,0.15); }
.stage-name { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: var(--navy); letter-spacing: 0.02em; }

.slide-body { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 22px 44px; position: relative; z-index: 1; gap: 16px; }

.slide-footer {
  flex-shrink: 0; position: relative; z-index: 2;
  padding: 0 26px 20px; display: flex; align-items: center; justify-content: space-between;
}
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.nav-btn.is-off, .nav-btn:disabled { opacity: 0.32; box-shadow: 0 1px 2px rgba(27,42,74,0.1) inset; cursor: default; }
.progress-track { display: flex; align-items: center; gap: 7px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.part-badge { width: 22px; height: 22px; border-radius: 50%; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 12px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
.last-tag { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 10.5px; color: #fff; background: var(--coral); border-radius: 999px; padding: 2px 8px; letter-spacing: 0.02em; }
.slide-body.has-instruction { padding-top: 74px; }
.slide-instruction { position: absolute; top: 30px; left: 26px; max-width: 640px; display: flex; align-items: center; justify-content: flex-start; gap: 16px; flex-wrap: wrap; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 16px; color: var(--navy); background: #fff; border-radius: 999px; padding: 8px 20px; box-shadow: 0 4px 12px rgba(27,42,74,0.12); z-index: 2; text-align: left; }
.instr-step { display: inline-flex; align-items: center; gap: 7px; }
.instr-icon { font-size: 20px; line-height: 1; }
.slide-guide { display: inline-flex; align-items: center; gap: 10px; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 18px; color: var(--coral-deep); background: var(--coral-light); border: 2.5px dashed var(--coral); border-radius: 16px; padding: 6px 18px; position: relative; z-index: 1; }
.guide-label { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #fff; background: var(--coral); border-radius: 999px; padding: 2px 9px; }
.guide-blank { display: inline-block; width: 64px; border-bottom: 3px solid var(--coral-deep); margin: 0 4px; vertical-align: -3px; }
.big-question { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 72px; line-height: 1; color: var(--coral); background: #fff; width: 110px; height: 110px; border-radius: 28px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(27,42,74,0.14); }
.bin-hint { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 28px; color: #C9C2DD; min-height: 46px; display: flex; align-items: center; }
.dot.part-start { margin-left: 8px; }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }

.title-highlight { position: relative; display: inline-block; }
.title-highlight::before { content: ""; position: absolute; left: -12px; right: -12px; top: 34%; bottom: 18%; background: #FFD066; opacity: 0.85; transform: rotate(-1.4deg); border-radius: 4px; z-index: 0; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 42px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 32px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 16px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.title-content { width: 100%; padding-left: 230px; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
.title-h { text-align: left; font-size: 38px; }
.title-p { text-align: left; max-width: 300px; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 14px; }

.word-row { display: flex; gap: 16px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; align-items: center; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 24px; background: #fff; box-shadow: 0 0 0 5px #fff, 0 8px 18px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 9.5px; font-weight: 700; text-align: center; padding: 0 6px; }

.pref-tag { cursor: zoom-in; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 18px; color: #fff; padding: 12px 26px; border-radius: 16px; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.pref-tag:hover { transform: scale(1.05); }
.pref-zoom { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 40px; color: #fff; padding: 30px 56px; border-radius: 30px; }

.sort-row { display: flex; gap: 18px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.sort-bin { background: #fff; border: 2.5px dashed; border-radius: 20px; padding: 14px; display: flex; flex-direction: column; align-items: center; gap: 10px; min-width: 200px; }
.sort-bin-label { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; color: #fff; padding: 6px 16px; border-radius: 999px; }
.sort-bin-items { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }

.bubble-col { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; overflow: hidden; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: #fff; border-radius: 18px; padding: 12px 16px; font-weight: 700; font-size: 15px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
.bubble.left { border-radius: 18px 18px 18px 4px; }
.bubble.right { border-radius: 18px 18px 4px 18px; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
`;
