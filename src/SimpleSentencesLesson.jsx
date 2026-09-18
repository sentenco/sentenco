import React, { useEffect, useState } from "react";

const BLEND_COLOR = "#2E97C7";
const SIZE_COLOR = { Big: "#FF6B4A", Small: "#4FA8D8", Long: "#8E6FCE", Short: "#F2A900" };
const NOSE_IMG = "/curriculum/u2-l2/nose.jpg";

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

function WordCard({ src, word, label, onZoom }) {
  return (
    <div className="wc">
      <Pic src={src} label={label} onZoom={onZoom} />
      <div className="word">{word}</div>
    </div>
  );
}

function LetterTile({ letters, color, size = 74, fontSize = 28, onZoom }) {
  const big = <div className="letter-tile zoom-letter-tile" style={{ background: color }}><span>{letters}</span></div>;
  return (
    <div className="letter-tile" style={{ background: color, width: size, height: size, fontSize }} onClick={() => onZoom(big)}>
      {letters}
    </div>
  );
}

function BlendRow({ parts, result, color = BLEND_COLOR, onZoom }) {
  return (
    <div className="blend-row">
      {parts.map((p, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <span className="blend-plus">+</span>}
          <LetterTile letters={p} color={color} size={54} fontSize={20} onZoom={onZoom} />
        </React.Fragment>
      ))}
      <span className="blend-plus">=</span>
      <div className="blend-word">{result}</div>
    </div>
  );
}

function DescriptorTag({ label, color, onZoom }) {
  const big = <div className="desc-zoom" style={{ background: color }}>{label}</div>;
  return (
    <div className="desc-tag" style={{ background: color }} onClick={() => onZoom(big)}>
      {label}
    </div>
  );
}

const PARTS = {
  A: { color: "#F2A900" },
  B: { color: "#2E97C7" },
  C: { color: "#22A67E" },
  D: { color: "#E0567A" },
};

export default function SimpleSentencesLesson() {
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

          <div className="slide-body">
            {s.title && <span className="title-highlight"><h2 className="slide-h sub">{s.title}</h2></span>}
            {s.body}
            {s.instruction && (
              <div className="slide-instruction">
                {s.instruction.map(([icon, text]) => (
                  <span key={text} className="instr-step"><span className="instr-icon">{icon}</span>{text}</span>
                ))}
              </div>
            )}
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
  { stage: "Unit 6 · Lesson 3", time: null, note: null },
  { stage: "Hello & Body Review", time: "~3 min", note: "Review body parts with quick actions, mixing old and new body words." },
  { stage: "Body + Adjective", time: "~3 min", note: "Review big, small, long, short combined with body words: big eyes, small nose, long legs, short arms." },
  { stage: "Simple Sentences", time: "~4 min", note: "Introduce \"It has...\" Use a character: \"It has big eyes.\" Practice together, then let the student complete the descriptions." },
  { stage: "Who Is It?", time: "~4 min", note: "Show 2-3 funny characters. Describe one: \"It has big eyes.\" Student finds the correct character, then switches roles." },
  { stage: "Build a Sentence", time: "~4 min", note: "Give body-part and adjective choices. Student builds sentences: It + has + big + ears. Gradually remove visual support." },
  { stage: "HIGHLIGHT: Design My Funny Friend!", time: "~2 min", note: "Student creates a silly character and describes it using \"It has...\"" },
  { stage: "HIGHLIGHT: Design My Funny Friend!", time: "~2 min", note: "Student produces 3-4 sentences about their character." },
  { stage: "Final Challenge", time: "~2 min", note: "Show a new character. Student independently describes it using body words." },
  { stage: "Final Challenge", time: "~1 min", note: "Finish with a quick -at / -og word review from Lessons 1-2." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 6 · Lesson 3",
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Simple Sentences!</h1></span>
          <p className="slide-p title-p">Today we learn to say "It has..." to describe a person.</p>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">It has big eyes!</div>
            </div>
          </div>
        </div>
      ),
    },
    // 2: Hello & Body Review
    {
      stage: "Hello & Body Review",
      body: (
        <div className="bubble-col" style={{ maxWidth: 420 }}>
          <div className="brow">
            <div className="avatar navy">T</div>
            <div className="bubble left">Touch your head! Show me your fingers! Touch your knees!</div>
          </div>
        </div>
      ),
    },
    // 3: Body + Adjective
    {
      stage: "Body + Adjective",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Body + Adjective!</h2></span>
          <div className="word-row">
            <div className="combo"><DescriptorTag label="Big" color={SIZE_COLOR.Big} onZoom={onZoom} /><WordCard src="/curriculum/u6-body/eyes.png" word="Eyes" label="eyes" onZoom={onZoom} /></div>
            <div className="combo"><DescriptorTag label="Small" color={SIZE_COLOR.Small} onZoom={onZoom} /><WordCard src={NOSE_IMG} word="Nose" label="nose" onZoom={onZoom} /></div>
          </div>
        </>
      ),
    },
    // 4: Simple Sentences intro
    {
      stage: "Simple Sentences",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">It Has...</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">It has big eyes. It has long legs.</div>
            </div>
          </div>
        </>
      ),
    },
    // 5: Simple Sentences practice
    {
      stage: "Simple Sentences",
      body: (
        <div className="bubble-col" style={{ maxWidth: 420 }}>
          <div className="brow me">
            <div className="avatar coral">S</div>
            <div className="bubble right">It has <span className="fill"></span> <span className="fill"></span>.</div>
          </div>
        </div>
      ),
    },
    // 6: Who Is It? (round 1)
    {
      stage: "Who Is It?",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Who Is It?</h2></span>
          <div className="word-row" style={{ gap: 24 }}>
            <Pic src="/curriculum/u6-characters/char-a.png" label="character A" size={112} onZoom={onZoom} />
            <Pic src="/curriculum/u6-characters/char-b.png" label="character B" size={112} onZoom={onZoom} />
            <Pic src="/curriculum/u6-characters/char-c.png" label="character C" size={112} onZoom={onZoom} />
          </div>
          <p className="slide-p">It has big eyes. Which one is it?</p>
        </div>
      ),
    },
    // 7: Who Is It? (round 2, student describes)
    {
      stage: "Who Is It?",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Your Turn to Describe!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">It has <span className="fill"></span>...</div>
            </div>
          </div>
        </div>
      ),
    },
    // 8: Build a Sentence
    {
      stage: "Build a Sentence",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Build a Sentence!</h2></span>
          <div className="word-row">
            <div className="word-chip">It</div>
            <div className="word-chip">has</div>
            <DescriptorTag label="Big" color={SIZE_COLOR.Big} onZoom={onZoom} />
            <WordCard src="/curriculum/u6-body/ears.png" word="Ears" label="ears" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 9: Build a Sentence continued
    {
      stage: "Build a Sentence",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Now You Try!</h2></span>
          <div className="word-row">
            <DescriptorTag label="Short" color={SIZE_COLOR.Short} onZoom={onZoom} />
            <WordCard src="/curriculum/u6-body/arms.png" word="Arms" label="arms" onZoom={onZoom} />
          </div>
          <p className="slide-p">Say the whole sentence!</p>
        </div>
      ),
    },
    // 10: HIGHLIGHT Design My Funny Friend! (round 1)
    {
      stage: "HIGHLIGHT: Design My Funny Friend!",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">🤪 Design My Funny Friend!</h2></span>
          <div className="word-row">
            <div className="combo"><DescriptorTag label="Big" color={SIZE_COLOR.Big} onZoom={onZoom} /><WordCard src="/curriculum/u6-body/eyes.png" word="Eyes" label="eyes" onZoom={onZoom} /></div>
            <div className="combo"><DescriptorTag label="Long" color={SIZE_COLOR.Long} onZoom={onZoom} /><WordCard src="/curriculum/u6-body/legs.png" word="Legs" label="legs" onZoom={onZoom} /></div>
          </div>
        </>
      ),
    },
    // 11: HIGHLIGHT Design My Funny Friend! (round 2)
    {
      stage: "HIGHLIGHT: Design My Funny Friend!",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Tell Me More!</h2></span>
          <p className="slide-p">What else does your friend have?</p>
        </div>
      ),
    },
    // 12: Final Challenge (describe independently)
    {
      stage: "Final Challenge",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Tell Me About This!</h2></span>
          <Pic src="/curriculum/u6-characters/mystery-1.png" label="new mystery character" size={180} onZoom={onZoom} />
        </div>
      ),
    },
    // 13: Final Challenge (word family review)
    {
      stage: "Final Challenge",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Quick Word Review!</h2></span>
          <BlendRow parts={["c", "a", "t"]} result="cat" onZoom={onZoom} />
          <BlendRow parts={["d", "o", "g"]} result="dog" onZoom={onZoom} />
        </div>
      ),
    },
    // 14: Great Job
    {
      stage: "Wrap-Up",
      body: (
        <div className="center-col">
          <StarIcon size={48} fill="var(--sun)" />
          <h2 className="slide-h sub">Great Job!</h2>
          <p className="slide-p">Today you learned to say "It has..." to describe a person. See you next lesson!</p>
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

.slide-body { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 22px 44px; position: relative; z-index: 1; gap: 14px; }

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
.slide-instruction { display: flex; align-items: center; justify-content: center; gap: 18px; flex-wrap: wrap; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 17px; color: var(--navy); background: #fff; border-radius: 999px; padding: 10px 24px; box-shadow: 0 4px 12px rgba(27,42,74,0.12); position: relative; z-index: 1; text-align: center; margin-top: 4px; }
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
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 40px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 32px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 16px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.title-content { width: 100%; padding-left: 230px; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
.title-h { text-align: left; font-size: 38px; }
.title-p { text-align: left; max-width: 300px; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 14px; }
.row { display: flex; gap: 20px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.word-row { display: flex; gap: 16px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; align-items: center; }
.combo { display: flex; align-items: center; gap: 10px; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 22px; background: #fff; box-shadow: 0 0 0 5px #fff, 0 8px 18px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 9px; font-weight: 700; text-align: center; padding: 0 6px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 15px; color: var(--navy); }

.word-chip {
  font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 16px; color: var(--navy);
  background: #fff; padding: 11px 20px; border-radius: 14px; box-shadow: 0 6px 14px rgba(27,42,74,0.1);
}

.letter-tile { cursor: zoom-in; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.blend-row { display: flex; align-items: center; gap: 7px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.blend-plus { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 20px; color: var(--ink-soft); }
.blend-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; color: var(--navy); background: #fff; padding: 7px 18px; border-radius: 12px; box-shadow: 0 6px 14px rgba(27,42,74,0.12); text-transform: lowercase; }

.desc-tag {
  font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 15px; color: #fff;
  padding: 10px 20px; border-radius: 999px; cursor: zoom-in;
  box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease;
}
.desc-tag:hover { transform: scale(1.05); }
.desc-zoom { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 40px; color: #fff; padding: 30px 56px; border-radius: 30px; }

.bubble-col { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; overflow: hidden; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: #fff; border-radius: 18px; padding: 12px 16px; font-weight: 700; font-size: 15px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
.bubble.left { border-radius: 18px 18px 18px 4px; }
.bubble.right { border-radius: 18px 18px 4px 18px; }
.bubble .fill { display: inline-block; min-width: 50px; border-bottom: 2.5px solid var(--coral-deep); vertical-align: -2px; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
`;
