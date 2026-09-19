import React, { useEffect, useState } from "react";
import { WrapUp, wrapUpStyles } from "./WrapUpSlide.jsx";

const LETTER_COLOR = {
  S: "#E0567A", T: "#2E97C7", U: "#22A67E", V: "#8E6FCE",
  W: "#2BAFAF", X: "#F2A900", Y: "#C77D2E", Z: "#D6478C",
};
const COLOR_HEX = {
  Red: "#E5484D", Blue: "#2E97C7", Yellow: "#F2A900", Green: "#22A67E",
  Orange: "#E8712E", Pink: "#EC6FA6", Purple: "#8B5FBF", Brown: "#8B5A2B",
};
const BLEND_COLOR = "#2E97C7";

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
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

function ColorSwatch({ name, hex, size = 90, onZoom }) {
  const big = <div className="swatch zoom-swatch" style={{ background: hex }} />;
  return (
    <div className="wc">
      <div className="swatch" style={{ background: hex, width: size, height: size }} onClick={() => onZoom(big)} />
      <div className="word">{name}</div>
    </div>
  );
}

function BlendRow({ parts, result, color = BLEND_COLOR, onZoom }) {
  return (
    <div className="blend-row">
      {parts.map((p, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <span className="blend-plus">+</span>}
          <LetterTile letters={p} color={color} size={58} fontSize={22} onZoom={onZoom} />
        </React.Fragment>
      ))}
      <span className="blend-plus">=</span>
      <div className="blend-word">{result}</div>
    </div>
  );
}

const PARTS = {
  A: { color: "#F2A900" },
  B: { color: "#2E97C7" },
  C: { color: "#22A67E" },
  D: { color: "#E0567A" },
};

const VERB_COLOR = {
  look: "#2E97C7", watch: "#2E97C7",
  say: "#E0502F", answer: "#E0502F", tell: "#E0502F", introduce: "#E0502F", give: "#E0502F",
  listen: "#8E6FCE",
  remember: "#22A67E", guess: "#22A67E",
  tap: "#D98A00", pick: "#D98A00", make: "#D98A00", put: "#D98A00", wave: "#D98A00", do: "#D98A00",
  point: "#D98A00", show: "#D98A00", match: "#D98A00", find: "#2E97C7", build: "#D98A00", blend: "#D98A00",
  count: "#22A67E", ask: "#E0502F", repeat: "#E0502F",
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

export default function Unit3LetsReviewLesson() {
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
              {s.part && <span className="part-badge" style={{ background: PARTS[s.part].color }}>Part {s.part}</span>}
              <span className="stage-name">{s.stage}</span>
              {s.part && s.part === lastPart && <span className="last-tag">Last part!</span>}
            </div>
          </div>

          <div className={`slide-body ${s.instruction ? "has-instruction" : ""}`}>
            {s.instruction && (
              <div className="slide-instruction">
                {s.instruction.map(([icon, text]) => (
                  <InstructionStep key={text} icon={icon} text={text} />
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
  { stage: "Unit 3 · Lesson 4", time: null, note: null },
  { stage: "Hello & Letter Warm-Up", time: "~3 min", note: "Greet the student and show mixed letters from S-Z. Student identifies them rather than reciting the alphabet in order. Fast learner? Add Name Them Again! (+1 min)." },
  { stage: "Color Review", time: "~3 min", note: "Review the 8 colors from Lessons 1-2. Show colored objects and ask \"What color?\" Fast learner? Add Colors Again! (+1 min)." },
  { stage: "S-Z Letter Challenge", time: "~4 min", note: "Show S-Z in random order, including uppercase/lowercase pairs. Student names the letters and matches pairs. Fast learner? Add Do They Match? 2 (+1 min)." },
  { stage: "Letter + Color", time: "~4 min", note: "Show letters in different colors. Ask \"What letter?\" and \"What color?\" Student answers both: \"T. Blue!\" Fast learner? Add Letter + Color 2 and 3 (+2 min)." },
  { stage: "Blend & Say", time: "~4 min", note: "Revisit the simple blends from Lesson 3. Model the sounds separately, then let the student blend them: m-a-t -> mat, s-a-t -> sat, s-i-t -> sit. Fast learner? Add Blend & Say 2 (new words) and No Help! (answers hidden, you confirm) (+3 min)." },
  { stage: "Rainbow Word Builder", time: "~4 min", note: "Student completes a colorful onscreen word-building game: choose letters, build a simple word, blend the sounds, then identify the color of the finished word/object. Fast learner? Add the two extra Rainbow Words (PAT in pink, TIP in green) (+3 min)." },
  { stage: "Final Review Challenge", time: "~3 min", note: "Give a quick mixed challenge: identify S-Z, name colors, and blend 2-3 simple words. Celebrate the student's progress. Fast learner? Do Final Challenge 2 as well (+2 min)." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 3 · Lesson 4",
      time: null,
      body: (
        <div className="title-content">
          <span className="title-highlight"><h1 className="slide-h title-h">Let's Review!</h1></span>
          <p className="slide-p title-p">Today we bring it all together: letters S to Z, colors, and blending.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Tt" color={LETTER_COLOR.T} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="Ww" color={LETTER_COLOR.W} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="Zz" color={LETTER_COLOR.Z} size={56} fontSize={22} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello & Letter Warm-Up
    {
      stage: "Hello & Letter Warm-Up",
      part: "A",
      instruction: [["👋", "Say hello."], ["🗣️", "Say each letter."]],
      guide: "It's the letter ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Name the Letters!</h2></span>
          <div className="letter-row">
            <LetterTile letters="Xx" color={LETTER_COLOR.X} size={52} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Ss" color={LETTER_COLOR.S} size={52} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Zz" color={LETTER_COLOR.Z} size={52} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Uu" color={LETTER_COLOR.U} size={52} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Vv" color={LETTER_COLOR.V} size={52} fontSize={19} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Hello & Letter Warm-Up",
      part: "A",
      title: "Name Them Again!",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say its name."]],
      guide: "It's the letter ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="Ww" color={LETTER_COLOR.W} size={52} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Tt" color={LETTER_COLOR.T} size={52} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Yy" color={LETTER_COLOR.Y} size={52} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Ss" color={LETTER_COLOR.S} size={52} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Xx" color={LETTER_COLOR.X} size={52} fontSize={19} onZoom={onZoom} />
        </div>
      ),
    },
    // 3: Color Review
    {
      stage: "Color Review",
      part: "B",
      instruction: [["👀", "Look at each color."], ["🗣️", "Say the color."]],
      guide: "It's ___.",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Color Review!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Red" hex={COLOR_HEX.Red} size={54} onZoom={onZoom} />
            <ColorSwatch name="Yellow" hex={COLOR_HEX.Yellow} size={54} onZoom={onZoom} />
            <ColorSwatch name="Orange" hex={COLOR_HEX.Orange} size={54} onZoom={onZoom} />
            <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} size={54} onZoom={onZoom} />
            <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} size={54} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Color Review",
      part: "B",
      title: "Colors Again!",
      instruction: [["👀", "Look at each color."], ["🗣️", "Say the color."]],
      guide: "It's ___.",
      body: (
        <div className="word-row">
          <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} size={54} onZoom={onZoom} />
          <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={54} onZoom={onZoom} />
          <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={54} onZoom={onZoom} />
          <ColorSwatch name="Red" hex={COLOR_HEX.Red} size={54} onZoom={onZoom} />
          <ColorSwatch name="Yellow" hex={COLOR_HEX.Yellow} size={54} onZoom={onZoom} />
        </div>
      ),
    },
    // 4: S-Z Letter Challenge
    {
      stage: "S-Z Letter Challenge",
      part: "B",
      instruction: [["👀", "Look at each pair."], ["🗣️", "Say the big and small letter."]],
      guide: "Big ___. Small ___.",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Do They Match?</h2></span>
          <div className="row" style={{ gap: 40 }}>
            <div className="match-pair">
              <LetterTile letters="W" color={LETTER_COLOR.W} size={68} fontSize={28} onZoom={onZoom} />
              <span className="match-plus">+</span>
              <LetterTile letters="w" color={LETTER_COLOR.W} size={68} fontSize={28} onZoom={onZoom} />
            </div>
            <div className="match-pair">
              <LetterTile letters="Y" color={LETTER_COLOR.Y} size={68} fontSize={28} onZoom={onZoom} />
              <span className="match-plus">+</span>
              <LetterTile letters="y" color={LETTER_COLOR.Y} size={68} fontSize={28} onZoom={onZoom} />
            </div>
          </div>
        </>
      ),
    },
    {
      stage: "S-Z Letter Challenge",
      part: "B",
      title: "Do They Match? 2",
      instruction: [["👀", "Look at each pair."], ["🗣️", "Say the big and small letter."]],
      guide: "Big ___. Small ___.",
      body: (
        <div className="row" style={{ gap: 40 }}>
            <div className="match-pair">
              <LetterTile letters="S" color={LETTER_COLOR.S} size={68} fontSize={28} onZoom={onZoom} />
              <span className="match-plus">+</span>
              <LetterTile letters="s" color={LETTER_COLOR.S} size={68} fontSize={28} onZoom={onZoom} />
            </div>
            <div className="match-pair">
              <LetterTile letters="T" color={LETTER_COLOR.T} size={68} fontSize={28} onZoom={onZoom} />
              <span className="match-plus">+</span>
              <LetterTile letters="t" color={LETTER_COLOR.T} size={68} fontSize={28} onZoom={onZoom} />
            </div>
        </div>
      ),
    },
    // 5: Letter + Color
    {
      stage: "Letter + Color",
      part: "B",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say the letter and the color."]],
      guide: "The letter ___ is ___.",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Letter + Color!</h2></span>
          <div className="letter-row">
            <LetterTile letters="T" color={COLOR_HEX.Blue} size={70} fontSize={28} onZoom={onZoom} />
            <LetterTile letters="S" color={COLOR_HEX.Green} size={70} fontSize={28} onZoom={onZoom} />
            <LetterTile letters="X" color={COLOR_HEX.Orange} size={70} fontSize={28} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    {
      stage: "Letter + Color",
      part: "B",
      title: "Letter + Color 2!",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say the letter and the color."]],
      guide: "The letter ___ is ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="U" color={COLOR_HEX.Red} size={70} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="Y" color={COLOR_HEX.Yellow} size={70} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="W" color={COLOR_HEX.Purple} size={70} fontSize={28} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Letter + Color",
      part: "B",
      title: "Letter + Color 3!",
      instruction: [["👀", "Look at each letter."], ["🗣️", "Say the letter and the color."]],
      guide: "The letter ___ is ___.",
      body: (
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="Z" color={COLOR_HEX.Pink} size={70} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="V" color={COLOR_HEX.Brown} size={70} fontSize={28} onZoom={onZoom} />
          <LetterTile letters="S" color={COLOR_HEX.Blue} size={70} fontSize={28} onZoom={onZoom} />
        </div>
      ),
    },
    // 6: Blend & Say
    {
      stage: "Blend & Say",
      part: "B",
      instruction: [["👀", "Look at the letters."], ["🗣️", "Say the sounds. Say the word."]],
      time: "~4 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Blend & Say!</h2></span>
          <BlendRow parts={["m", "a", "t"]} result="mat" onZoom={onZoom} />
          <BlendRow parts={["s", "a", "t"]} result="sat" onZoom={onZoom} />
          <BlendRow parts={["s", "i", "t"]} result="sit" onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Blend & Say",
      part: "B",
      title: "Blend & Say 2!",
      instruction: [["👀", "Look at the letters."], ["🗣️", "Say the sounds. Say the word."]],
      body: (
        <div className="center-col">
          <BlendRow parts={["p","a","t"]} result="pat" onZoom={onZoom} />
          <BlendRow parts={["t","i","p"]} result="tip" onZoom={onZoom} />
          <BlendRow parts={["s","i","p"]} result="sip" onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Blend & Say",
      part: "B",
      title: "No Help!",
      instruction: [["🤔", "No help this time!"], ["🗣️", "Say the sounds. Say the word."]],
      body: (
        <div className="center-col">
          <BlendRow parts={["m","a","p"]} result="?" onZoom={onZoom} />
          <BlendRow parts={["t","a","p"]} result="?" onZoom={onZoom} />
          <BlendRow parts={["s","i","t"]} result="?" onZoom={onZoom} />
        </div>
      ),
    },
    // 7: HIGHLIGHT Rainbow Word Builder
    {
      stage: "Rainbow Word Builder",
      part: "C",
      instruction: [["🧩", "Build the word."], ["🗣️", "Say the word and the color."]],
      guide: "The word is ___. The color is ___.",
      time: "~4 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">🌈 Rainbow Word Builder!</h2></span>
          <BlendRow parts={["S", "A", "T"]} result="SAT" color={COLOR_HEX.Purple} onZoom={onZoom} />
          <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} size={60} onZoom={onZoom} />
        </div>
      ),
    },
    // 7b: HIGHLIGHT Rainbow Word Builder Round 2
    {
      stage: "Rainbow Word Builder",
      part: "C",
      instruction: [["🧩", "Build the word."], ["🗣️", "Say the word and the color."]],
      guide: "The word is ___. The color is ___.",
      time: "~2 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">🌈 One More Rainbow Word!</h2></span>
          <BlendRow parts={["M", "A", "T"]} result="MAT" color={COLOR_HEX.Orange} onZoom={onZoom} />
          <ColorSwatch name="Orange" hex={COLOR_HEX.Orange} size={60} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Rainbow Word Builder",
      part: "C",
      title: "🌈 Rainbow Word 3!",
      instruction: [["🧩", "Build the word."], ["🗣️", "Say the word and the color."]],
      guide: "The word is ___. The color is ___.",
      body: (
        <div className="center-col">
          <BlendRow parts={["P","A","T"]} result="PAT" color={COLOR_HEX.Pink} onZoom={onZoom} />
          <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={60} onZoom={onZoom} />
        </div>
      ),
    },
    {
      stage: "Rainbow Word Builder",
      part: "C",
      title: "🌈 Rainbow Word 4!",
      instruction: [["🧩", "Build the word."], ["🗣️", "Say the word and the color."]],
      guide: "The word is ___. The color is ___.",
      body: (
        <div className="center-col">
          <BlendRow parts={["T","I","P"]} result="TIP" color={COLOR_HEX.Green} onZoom={onZoom} />
          <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={60} onZoom={onZoom} />
        </div>
      ),
    },
    // 8: Final Review Challenge
    {
      stage: "Final Review Challenge",
      part: "D",
      instruction: [["👀", "Look at everything."], ["🗣️", "Say the letters, colors and word."]],
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Final Challenge!</h2></span>
          <div className="letter-row">
            <LetterTile letters="Vv" color={LETTER_COLOR.V} size={50} fontSize={19} onZoom={onZoom} />
            <LetterTile letters="Yy" color={LETTER_COLOR.Y} size={50} fontSize={19} onZoom={onZoom} />
          </div>
          <div className="word-row">
            <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={50} onZoom={onZoom} />
            <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={50} onZoom={onZoom} />
          </div>
          <BlendRow parts={["p", "i", "t"]} result="pit" onZoom={onZoom} />
        </>
      ),
    },
    {
      stage: "Final Review Challenge",
      part: "D",
      title: "Final Challenge 2!",
      instruction: [["👀", "Look at everything."], ["🗣️", "Say the letters, colors and word."]],
      body: (
        <>
        <div className="letter-row" style={{ marginTop: 6 }}>
          <LetterTile letters="Zz" color={LETTER_COLOR.Z} size={50} fontSize={19} onZoom={onZoom} />
          <LetterTile letters="Ww" color={LETTER_COLOR.W} size={50} fontSize={19} onZoom={onZoom} />
        </div>
        <div className="word-row">
          <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} size={50} onZoom={onZoom} />
          <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} size={50} onZoom={onZoom} />
        </div>
        <div className="center-col">
          <BlendRow parts={["t","i","p"]} result="tip" onZoom={onZoom} />
        </div>
        </>
      ),
    },
    // 9: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <WrapUp>You know Ss to Zz, eight colors, and you can blend simple sounds into words!</WrapUp>
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
  padding: 0 36px 34px; display: flex; align-items: center; justify-content: space-between;
}
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.nav-btn.is-off, .nav-btn:disabled { opacity: 0.32; box-shadow: 0 1px 2px rgba(27,42,74,0.1) inset; cursor: default; }
.progress-track { display: flex; align-items: center; gap: 7px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); }
.last-tag { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 10.5px; color: #fff; background: var(--coral); border-radius: 999px; padding: 2px 8px; letter-spacing: 0.02em; }
.slide-guide { display: inline-flex; align-items: center; gap: 10px; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 18px; color: var(--coral-deep); background: var(--coral-light); border: 2.5px dashed var(--coral); border-radius: 16px; padding: 6px 18px; position: relative; z-index: 1; }
.guide-label { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #fff; background: var(--coral); border-radius: 999px; padding: 2px 9px; }
.guide-blank { display: inline-block; width: 64px; border-bottom: 3px solid var(--coral-deep); margin: 0 4px; vertical-align: -3px; }
.big-question { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 72px; line-height: 1; color: var(--coral); background: #fff; width: 110px; height: 110px; border-radius: 28px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(27,42,74,0.14); }
.bin-hint { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 28px; color: #C9C2DD; min-height: 46px; display: flex; align-items: center; }
.dot.part-start { margin-left: 8px; }
.slide-body.has-instruction { padding-top: 98px; }
.slide-instruction { position: absolute; top: 44px; left: 50%; transform: translateX(-50%); width: max-content; max-width: 672px; display: flex; align-items: center; justify-content: center; gap: 18px; flex-wrap: wrap; font-family: 'Baloo 2', sans-serif; font-weight: 600; font-size: 18px; color: #fff; background: linear-gradient(180deg, #26386A, #1B2A4A); border-radius: 999px; padding: 7px 24px; box-shadow: 0 6px 0 rgba(10,18,40,0.35), 0 12px 20px rgba(27,42,74,0.2); z-index: 2; text-align: center; }
.slide-instruction .instr-tag { box-shadow: 0 0 0 2px rgba(255,255,255,0.85); }
.instr-step { display: inline-flex; align-items: center; gap: 8px; }
.instr-icon { font-size: 24px; line-height: 1; }
.instr-text { display: inline-flex; align-items: center; gap: 8px; }
.instr-tag { font-weight: 800; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; padding: 3px 11px; border-radius: 999px; }
.part-badge { height: 22px; padding: 0 10px; border-radius: 999px; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 11.5px; letter-spacing: 0.03em; white-space: nowrap; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }

.title-highlight { position: relative; display: inline-block; }
.title-highlight::before { content: ""; position: absolute; left: -12px; right: -12px; top: 34%; bottom: 18%; background: #FFD066; opacity: 0.85; transform: rotate(-1.4deg); border-radius: 4px; z-index: 0; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 46px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 32px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 16px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.title-content { width: 100%; padding-left: 230px; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
.title-h { text-align: left; font-size: 38px; }
.title-p { text-align: left; max-width: 300px; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 14px; }
.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.letter-row { display: flex; gap: 12px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.match-pair { display: flex; align-items: center; gap: 10px; }
.match-plus { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; color: var(--ink-soft); }

.word-row { display: flex; gap: 16px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 17px; color: var(--navy); }

.swatch { border-radius: 20px; cursor: zoom-in; box-shadow: 0 0 0 5px #fff, 0 8px 18px rgba(27,42,74,0.16); transition: transform 0.15s ease; flex-shrink: 0; }
.swatch:hover { transform: scale(1.04); }
.zoom-swatch { width: 260px; height: 260px; border-radius: 46px; }

.blend-row { display: flex; align-items: center; gap: 8px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.blend-plus { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; color: var(--ink-soft); }
.blend-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 28px; color: var(--navy); background: #fff; padding: 8px 20px; border-radius: 14px; box-shadow: 0 6px 14px rgba(27,42,74,0.12); text-transform: lowercase; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
${wrapUpStyles}
`;
