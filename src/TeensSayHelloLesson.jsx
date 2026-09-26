import React, { useEffect, useState } from "react";
import { CoverBadges } from "./TeensCoverBadges.jsx";
import { ThisOrThatBlock, teensGameStyles } from "./TeensGames.jsx";

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

function ZoomIcon() {
  return <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5 L21 21" /></svg>;
}

function VocabCards({ items }) {
  const [zoomed, setZoomed] = useState(null);
  useEffect(() => {
    if (!zoomed) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setZoomed(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomed]);
  return (
    <>
      <div className="vocab-row">
        {items.map((it, i) => (
          <div className="vocab-card" key={i} onClick={() => setZoomed(it)}>
            <span className="vocab-label">{it.label}</span>
            {it.note && <p className="vocab-note">{it.note}</p>}
            <span className="vocab-zoom-badge"><ZoomIcon /></span>
          </div>
        ))}
      </div>
      {zoomed && (
        <div className="vocab-zoom-overlay" onClick={() => setZoomed(null)}>
          <div className="vocab-zoom-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="vocab-zoom-close" onClick={() => setZoomed(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <span className="vocab-zoom-label">{zoomed.label}</span>
            {zoomed.note && <p className="vocab-zoom-note">{zoomed.note}</p>}
          </div>
        </div>
      )}
    </>
  );
}

// Teacher-facing instruction pills -- same pattern as A1/A2 Kids and the
// rest of Ignite (IgniteLesson.jsx).
const VERB_COLOR = {
  look: "#2E97C7", watch: "#2E97C7", find: "#2E97C7",
  say: "#E0502F", answer: "#E0502F", tell: "#E0502F", ask: "#E0502F", repeat: "#E0502F", introduce: "#E0502F", greet: "#E0502F",
  listen: "#8E6FCE",
  write: "#0F9E90", type: "#0F9E90", spell: "#0F9E90",
  read: "#D6478C",
  guess: "#22A67E", choose: "#22A67E", pick: "#22A67E",
};

function InstructionStep({ icon, text }) {
  const m = text.match(/^([A-Za-z]+)([\s\S]*)$/);
  const verb = m ? m[1] : "";
  let rest = m ? m[2] : text;
  const color = VERB_COLOR[verb.toLowerCase()];
  if (color) rest = /^[.!]\s*$/.test(rest) ? "" : rest.replace(/^:/, "");
  return (
    <span className="instr-step">
      <span className="instr-icon">{icon}</span>
      <span className="instr-text">
        {color ? <b className="instr-tag" style={{ background: color }}>{verb}</b> : null}
        {color ? rest : text}
      </span>
    </span>
  );
}

export default function TeensSayHelloLesson() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const styleId = "tsh-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles + teensGameStyles;
    document.head.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".tsh-wrap");
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

  function exit() {
    window.close();
  }

  const slides = buildSlides();
  const total = slides.length;
  const s = slides[i];

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }

  return (
    <div className="tsh-wrap">
      <div className="deck-single">
        <div className={`slide ${i === 0 ? "slide--title" : "slide--regular"}`}>
          <button className="close-btn" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div className="slide-header">
            <div className="brand-bubble">
              <img className="brand-logo" src="/logo-sentenco.png" alt="" />
              <span className="brand-word">entenco</span>
            </div>
            {i !== 0 && (
              <div className="pennant">
                <span className="pennant-text">{s.stage}</span>
              </div>
            )}
          </div>

          <div className={`slide-body ${i !== 0 && s.instruction ? "has-instruction" : ""}`}>
            {i === 0 && <CoverBadges stage={s.stage} showRibbon={false} />}
            {i !== 0 && s.instruction && (
              <div className="slide-instruction">
                {s.instruction.map(([icon, text]) => <InstructionStep key={text} icon={icon} text={text} />)}
              </div>
            )}
            {s.body}
          </div>

          <div className="slide-footer">
            <button className={`nav-btn ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="progress-track">
              {Array.from({ length: total }).map((_, idx) => (
                <span key={idx} className={`dot ${idx === i ? "on" : ""}`} />
              ))}
            </div>
            <button className="nav-btn next" onClick={() => (i === total - 1 ? exit() : go(1))}>
              {i === total - 1 ? "Finish Lesson" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const LESSON_GUIDE = [
  { stage: "Unit 1 · Lesson 1", time: null, note: null },
  { stage: "Greetings", time: "~4 min", note: "Introduce the range from casual (Hey, Hi) to more neutral (Hello) greetings." },
  { stage: "Meet a Few People", time: "~3 min", note: "Show 3 varied intro exchanges with different names so the pattern feels natural, not memorized." },
  { stage: "Introduce Yourself", time: "~4 min", note: "Model one complete self-introduction exchange, fully filled in, before asking the student to fill anything in themselves." },
  { stage: "Try It", time: "~4 min", note: "Teacher starts the exchange, student fills in their own name to finish it." },
  { stage: "Try It Again", time: "~4 min", note: "Same pattern with a different opening line, so the student isn't just repeating the first round." },
  { stage: "Casual or Polite?", time: "~5 min", note: "This-or-that round: student picks the greeting that fits the moment and says why in one sentence." },
  { stage: "Casual or Polite? 2", time: "~5 min", note: "Second round, new pairs -- keep pacing brisk, this is for retention and timing, not new language." },
  { stage: "Casual or Polite? 3", time: "~5 min", note: "Third round, new pairs -- last repetition before independent practice." },
  { stage: "Your Turn", time: "~4 min", note: "Student introduces themselves in their own words using the pattern, no prompts." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides() {
  return [
    // 1: Title
    {
      stage: "Unit 1 · Lesson 1",
      body: (
        <div className="title-content">
          <div className="cover-ribbon"><span className="cr-label">LESSON</span><span className="cr-num">1</span></div>
          <h1 className="title-h">Say Hello</h1>
          <p className="title-p">Learn how to greet people and introduce yourself by name.</p>
        </div>
      ),
    },
    // 2: Greetings range (present)
    {
      stage: "Greetings",
      instruction: [["👀", "Look at the three greetings."], ["🗣️", "Say each one."]],
      body: (
        <div className="stage-col">
          <h2 className="slide-h">How Do You Say Hi?</h2>
          <p className="slide-p">Different greetings for different moments</p>
          <VocabCards
            items={[
              { label: "Hey", note: "Casual, for friends and people your age" },
              { label: "Hi", note: "Friendly and easy, works almost anywhere" },
              { label: "Hello", note: "A bit more neutral, for meeting someone new" },
            ]}
          />
        </div>
      ),
    },
    // 3: A few more examples (present, continued)
    {
      stage: "Meet a Few People",
      instruction: [["👀", "Look at the three exchanges."], ["🗣️", "Say each answer."]],
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Same Pattern, Different People</h2>
          <p className="slide-p">The greeting changes, the pattern doesn't</p>
          <div className="mini-log">
            <div className="mini-pair">
              <div className="mini-row mini-q"><span>Hey, what's your name?</span></div>
              <div className="mini-row mini-a"><span>Hi, I'm Jordan.</span></div>
            </div>
            <div className="mini-pair">
              <div className="mini-row mini-q"><span>Hi there, I'm new here.</span></div>
              <div className="mini-row mini-a"><span>Hey, I'm Priya. Welcome!</span></div>
            </div>
            <div className="mini-pair">
              <div className="mini-row mini-q"><span>Hello, nice to meet you.</span></div>
              <div className="mini-row mini-a"><span>Hello, I'm Marcus. You too.</span></div>
            </div>
          </div>
        </div>
      ),
    },
    // 4: Introduce yourself pattern (model, fully filled)
    {
      stage: "Introduce Yourself",
      instruction: [["👂", "Listen to the exchange."], ["🗣️", "Repeat both lines."]],
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Nice to Meet You</h2>
          <p className="slide-p">Notice the pattern</p>
          <div className="bubble-col is-roomy">
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hey, I don't think we've met. What's your name?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Hi, I'm Alex. Nice to meet you!</div>
            </div>
          </div>
        </div>
      ),
    },
    // 5: Guided practice, round 1
    {
      stage: "Try It",
      instruction: [["👂", "Listen."], ["🗣️", "Answer with your own name."]],
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Your Turn to Answer</h2>
          <p className="slide-p">Finish the exchange</p>
          <div className="bubble-col is-roomy">
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hey, I don't think we've met. What's your name?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Hi, I'm <span className="fill"></span>. Nice to meet you!</div>
            </div>
          </div>
        </div>
      ),
    },
    // 6: Guided practice, round 2
    {
      stage: "Try It Again",
      instruction: [["👂", "Listen."], ["🗣️", "Answer with your own name."]],
      body: (
        <div className="stage-col">
          <h2 className="slide-h">One More Round</h2>
          <p className="slide-p">A different greeting, same pattern</p>
          <div className="bubble-col is-roomy">
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hello, nice to meet you.</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Hello, I'm <span className="fill"></span>. Nice to meet you too!</div>
            </div>
          </div>
        </div>
      ),
    },
    // 7: Highlight activity
    {
      stage: "Casual or Polite?",
      instruction: [["🤔", "Pick the one that fits."], ["🗣️", "Say why in one sentence."]],
      body: (
        <ThisOrThatBlock
          heading="Casual or Polite?"
          pairs={[
            ["Hey!", "Hello."],
            ["Hi there!", "Good afternoon."],
            ["What's up?", "How do you do?"],
            ["Yo!", "Nice to meet you."],
          ]}
        />
      ),
    },
    // 7b: Highlight activity, round 2
    {
      stage: "Casual or Polite? 2",
      instruction: [["🤔", "Pick the one that fits."], ["🗣️", "Say why in one sentence."]],
      body: (
        <ThisOrThatBlock
          heading="Casual or Polite? Round 2"
          pairs={[
            ["Sup?", "Good morning."],
            ["Nice meeting you!", "It's a pleasure to meet you."],
            ["Hiya!", "Hello, how are you?"],
            ["Long time no see!", "It's been a while, hasn't it?"],
          ]}
        />
      ),
    },
    // 7c: Highlight activity, round 3
    {
      stage: "Casual or Polite? 3",
      instruction: [["🤔", "Pick the one that fits."], ["🗣️", "Say why in one sentence."]],
      body: (
        <ThisOrThatBlock
          heading="Casual or Polite? Round 3"
          pairs={[
            ["Hey, what's up?", "Hello, nice to meet you."],
            ["Yo, I'm here!", "Good afternoon, everyone."],
            ["Catch you later!", "It was nice meeting you."],
            ["Cool, see ya!", "Thank you, goodbye."],
          ]}
        />
      ),
    },
    // 8: Independent practice
    {
      stage: "Your Turn",
      instruction: [["🗣️", "Introduce yourself."], ["🙅", "No help this time."]],
      body: (
        <div className="stage-col">
          <h2 className="slide-h">Introduce Yourself</h2>
          <p className="slide-p">Say it out loud, in your own words</p>
          <div className="frame-card">
            <div className="frame-line">Hi, I'm <span className="blank blank--wide"></span>.</div>
          </div>
        </div>
      ),
    },
    // 9: Wrap-up
    {
      stage: "Wrap-Up",
      body: (
        <div className="stage-col">
          <StarIcon size={40} fill="var(--coral)" />
          <h2 className="slide-h">Nice Work!</h2>
          <p className="slide-p">You can now greet someone and introduce yourself by name. Next up: talking about where you're from.</p>
        </div>
      ),
    },
  ];
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&family=Fredoka:wght@600;700&display=swap');

:root {
  --coral: #FF6B4A; --coral-deep: #E0502F; --coral-light: #FFE6DD;
  --navy: #1B2A4A; --navy-soft: #5A6B92; --navy-light: #E4E9F5; --sun: #F2A900; --sun-light: #FFF1D2;
  --ink: #2B2438; --ink-soft: #736A87;
}

.tsh-wrap {
  min-height: 100vh; width: 100%; background: #F5EFE7; color: var(--ink);
  font-family: 'Quicksand', sans-serif; padding: 1cm; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center;
}
.tsh-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 30px; box-shadow: 0 24px 50px rgba(27,42,74,0.22);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/teens-a1-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/teens-a1-shared/slide-bg.jpg'); background-position: center; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.15); color: var(--navy); }

.slide-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 22px 0; position: relative; z-index: 2; }
.brand-bubble { display: flex; align-items: center; gap: 6px; background: #fff; border-radius: 999px; padding: 5px 14px 5px 6px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.brand-logo { width: 22px; height: 22px; border-radius: 50%; }
.brand-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 14px; color: var(--navy); }
.pennant { background: #fff; border-radius: 999px; padding: 6px 16px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.pennant-text { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; color: var(--navy); }

.slide-body { flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px 30px; position: relative; z-index: 2; }
.slide-body.has-instruction { padding-top: 54px; }
.slide-instruction { position: absolute; top: 16px; left: 50%; transform: translateX(-50%); width: max-content; max-width: 610px; display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap; font-family: 'Baloo 2', sans-serif; font-weight: 600; font-size: 15px; color: #fff; background: linear-gradient(180deg, #26386A, #1B2A4A); border-radius: 999px; padding: 6px 20px; box-shadow: 0 5px 0 rgba(10,18,40,0.35), 0 10px 18px rgba(27,42,74,0.2); z-index: 3; text-align: center; }
.instr-step { display: inline-flex; align-items: center; gap: 6px; }
.instr-icon { font-size: 15px; }
.instr-tag { border-radius: 6px; padding: 1px 6px; margin-right: 4px; }

.title-content { padding: 40px 40px 40px 280px; width: 100%; }
.cover-ribbon { display: inline-flex; align-items: center; gap: 10px; height: 44px; margin-bottom: 14px; background: linear-gradient(180deg, #26386A, #1B2A4A); color: #fff; border-radius: 999px; padding: 0 6px 0 18px; box-shadow: 0 5px 0 rgba(10,18,40,0.3), 0 8px 14px rgba(27,42,74,0.2); z-index: 4; }
.cover-ribbon .cr-label { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 13px; letter-spacing: 0.16em; }
.cover-ribbon .cr-num { width: 34px; height: 34px; border-radius: 50%; background: var(--coral); display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; line-height: 1; }
.unit-medal { position: absolute; left: 106px; top: 276px; width: 104px; height: 104px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #FF8A6B, var(--coral-deep)); border: 7px solid #FFD066; box-shadow: 0 10px 20px rgba(27,42,74,0.28); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; transform: rotate(-6deg); z-index: 4; }
.unit-medal .um-label { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.2em; margin-bottom: -6px; padding-left: 0.2em; }
.unit-medal .um-num { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 60px; line-height: 1; text-shadow: 0 3px 0 rgba(160,45,18,0.35); }
.unit-medal.is-long .um-num { font-size: 46px; }
.title-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 36px; color: var(--navy); margin: 0 0 12px; line-height: 1.05; }
.title-p { font-family: 'Quicksand', sans-serif; font-size: 14.5px; font-weight: 600; color: var(--ink-soft); max-width: 320px; line-height: 1.55; }

.stage-col { width: 100%; text-align: center; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; color: var(--navy); margin: 0 0 6px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 13px; color: var(--ink-soft); font-weight: 600; margin: 0 0 18px; }

.vocab-row { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; padding-top: 6px; }
.vocab-card { position: relative; background: var(--coral-light); border: 2px solid var(--coral-deep); border-radius: 12px; padding: 12px 16px; width: 128px; box-shadow: 0 4px 0 rgba(224,80,47,0.25); cursor: pointer; }
.vocab-card:nth-child(3n+1) { transform: rotate(-4deg); }
.vocab-card:nth-child(3n+2) { transform: rotate(3deg); margin-top: 10px; }
.vocab-card:nth-child(3n+3) { transform: rotate(-2deg); }
.vocab-label { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; color: var(--coral-deep); }
.vocab-note { font-size: 11px; color: var(--ink-soft); font-weight: 600; line-height: 1.4; margin: 6px 0 0; }
.vocab-zoom-badge { position: absolute; bottom: -8px; right: -8px; width: 24px; height: 24px; border-radius: 50%; background: var(--navy); color: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(27,42,74,0.3); }
.vocab-zoom-overlay { position: fixed; inset: 0; background: rgba(20,28,54,0.72); display: flex; align-items: center; justify-content: center; z-index: 50; }
.vocab-zoom-card { position: relative; background: var(--coral-light); border: 3px solid var(--coral-deep); border-radius: 20px; padding: 36px 44px; max-width: 80%; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
.vocab-zoom-label { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 32px; color: var(--coral-deep); }
.vocab-zoom-note { font-size: 15px; color: var(--ink-soft); font-weight: 600; margin: 10px 0 0; }
.vocab-zoom-close { position: absolute; top: -14px; right: -14px; width: 32px; height: 32px; border-radius: 50%; border: none; cursor: pointer; background: var(--navy); color: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.25); }

.bubble-col { display: flex; flex-direction: column; gap: 8px; max-width: 380px; margin: 0 auto; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { border: 2px solid; border-radius: 16px; padding: 12px 16px; font-weight: 700; font-size: 13.5px; text-align: left; }
.bubble.left { background: var(--navy-light); border-color: var(--navy); color: var(--navy); border-radius: 16px 16px 16px 4px; }
.bubble.right { background: var(--coral-light); border-color: var(--coral-deep); color: var(--coral-deep); border-radius: 16px 16px 4px 16px; }
.bubble .fill { display: inline-block; min-width: 56px; border-bottom: 2px solid currentColor; }
.bubble-col.is-roomy { gap: 14px; max-width: 460px; }
.bubble-col.is-roomy .avatar { width: 40px; height: 40px; font-size: 15px; }
.bubble-col.is-roomy .bubble { font-size: 17px; padding: 16px 22px; }

.mini-log { display: flex; flex-direction: column; gap: 6px; max-width: 320px; margin: 0 auto; text-align: left; }
.mini-pair { display: flex; flex-direction: column; gap: 4px; }
.mini-pair + .mini-pair { margin-top: 4px; }
.mini-row { border-radius: 12px; padding: 8px 13px; border: 2px solid; max-width: 84%; }
.mini-row.mini-q { background: var(--navy-light); border-color: var(--navy-soft); align-self: flex-start; }
.mini-row.mini-a { background: var(--coral-light); border-color: var(--coral-deep); align-self: flex-end; }
.mini-row span { font-weight: 700; font-size: 12.5px; color: var(--ink); }

.frame-card { background: var(--coral-light); border: 2px solid var(--coral-deep); border-radius: 16px; padding: 20px 24px; max-width: 360px; margin: 0 auto; }
.frame-line { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15px; color: var(--ink); }
.blank { display: inline-block; min-width: 46px; border-bottom: 2px solid var(--coral-deep); }
.blank--wide { min-width: 100px; }

.slide-footer { display: flex; align-items: center; justify-content: space-between; padding: 0 22px 20px; position: relative; z-index: 2; }
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.is-off { opacity: 0.4; cursor: default; box-shadow: none; }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.progress-track { display: flex; align-items: center; gap: 6px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }
`;
