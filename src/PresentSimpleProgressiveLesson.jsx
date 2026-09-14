import React, { useEffect, useState } from "react";

const NAVY = "#1B2A4A";
const CORAL = "#FF6B4A";
const CORAL_DEEP = "#E0502F";

const SIMPLE = {
  key: "simple", label: "Present Simple", accent: NAVY, accentLight: "#E4E9F5",
  formula: "Subject + verb (+ s / es for he/she/it)",
  signals: ["always", "usually", "often", "every day", "never"],
  examples: [
    { label: "Habit", text: "I brush my teeth every morning." },
    { label: "Fact", text: "Water boils at 100°C." },
    { label: "Schedule", text: "The bus leaves at 8 AM." },
  ],
  practice: [
    { blank: "She ___ to work every day. (walk)", answer: "walks" },
    { blank: "The store ___ at 9 PM. (close)", answer: "closes" },
    { blank: "He never ___ meat. (eat)", answer: "eats" },
    { blank: "We ___ English on Mondays. (study)", answer: "study" },
  ],
};

const PROGRESSIVE = {
  key: "progressive", label: "Present Progressive", accent: CORAL, accentLight: "#FFE6DD",
  formula: "Subject + am / is / are + verb-ing",
  signals: ["right now", "at the moment", "currently", "these days", "look!"],
  examples: [
    { label: "Happening now", text: "I am writing an email right now." },
    { label: "Temporary", text: "She is staying with her cousin this week." },
    { label: "Future plan", text: "We are meeting the client tomorrow." },
  ],
  practice: [
    { blank: "Look! It ___ outside. (rain)", answer: "is raining" },
    { blank: "Right now, we ___ for the bus. (wait)", answer: "are waiting" },
    { blank: "I ___ for my exam this week. (study)", answer: "am studying" },
    { blank: "They ___ dinner at the moment. (cook)", answer: "are cooking" },
  ],
};

const MIXED_PRACTICE = [
  { blank: "My sister ___ in a bank. (work)", answer: "works", tense: "Simple", accent: NAVY },
  { blank: "Shh, the baby ___ now. (sleep)", answer: "is sleeping", tense: "Progressive", accent: CORAL },
  { blank: "We usually ___ dinner at 7. (have)", answer: "have", tense: "Simple", accent: NAVY },
  { blank: "I can't talk, I ___ right now. (drive)", answer: "am driving", tense: "Progressive", accent: CORAL },
];

function ExampleCard({ ex, accent }) {
  return (
    <div className="psp-example-card">
      <span className="psp-example-label" style={{ color: accent }}>{ex.label}</span>
      <span className="psp-example-text">{ex.text}</span>
    </div>
  );
}

function RuleBox({ group }) {
  return (
    <div className="psp-rulebox" style={{ borderColor: group.accentLight }}>
      <span className="psp-formula" style={{ background: group.accentLight, color: group.accent }}>{group.formula}</span>
      <div className="psp-signal-row">
        {group.signals.map((sig) => <span key={sig} className="psp-signal-chip">{sig}</span>)}
      </div>
      <div className="psp-example-grid">
        {group.examples.map((ex) => <ExampleCard key={ex.text} ex={ex} accent={group.accent} />)}
      </div>
    </div>
  );
}

function BlankCard({ item, accent }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="psp-blank-card" onClick={() => setRevealed((r) => !r)}>
      <p className="psp-blank-sentence">{item.blank}</p>
      {revealed ? (
        <span className="psp-blank-answer" style={{ background: accent || item.accent }}>
          {item.answer}{item.tense ? ` · ${item.tense}` : ""}
        </span>
      ) : (
        <span className="psp-blank-hint">Tap to reveal</span>
      )}
    </div>
  );
}

export default function PresentSimpleProgressiveLesson() {
  const [i, setI] = useState(0);
  const total = SLIDES.length;
  const s = SLIDES[i];

  useEffect(() => {
    const styleId = "psp-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }
  function exit() {
    window.close();
  }

  return (
    <div className="psp-wrap">
      <div className="psp-single">
        <div className="psp-slide">
          <button className="psp-close" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <div className="psp-header">
            <div className="psp-brand">
              <span className="psp-brand-badge">
                <img className="psp-brand-logo" src="/logo-sentivo.png" alt="" />
              </span>
              <span>entivo</span>
            </div>
            <div className="psp-stage-chip">
              <span className="psp-stage-name">{s.stage}</span>
              {s.time && <span className="psp-stage-time">{s.time}</span>}
            </div>
          </div>
          <div className="psp-body">{s.body}</div>
          <div className="psp-footer">
            <button className={`psp-nav ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="psp-progress">
              {Array.from({ length: total }).map((_, idx) => (
                <span key={idx} className={`psp-dot ${idx === i ? "on" : ""}`} />
              ))}
            </div>
            <button className="psp-nav next" onClick={() => (i === total - 1 ? exit() : go(1))}>
              {i === total - 1 ? "Finish Lesson" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const LESSON_GUIDE = [
  { stage: "Customized Lesson", time: null, note: null },
  { stage: "Warm-up", time: "~2 min", note: "Ask what the student does every day versus what they're doing right at this moment. Don't name the tenses yet, just get both kinds of answers on the table." },
  { stage: "Present Simple", time: "~3 min", note: "Point out the three uses: habits, facts, and schedules. All three feel permanent or repeated, that's the throughline." },
  { stage: "Practice: Present Simple", time: "~2 min", note: "Remind the student about the -s/-es ending for he/she/it before they answer." },
  { stage: "Present Progressive", time: "~3 min", note: "Point out this is for things happening right now, or temporary. Contrast directly with the \"permanent\" feel of Present Simple." },
  { stage: "Practice: Present Progressive", time: "~2 min", note: "Watch for missed spelling changes (e.g. drop the e in \"write\" → \"writing\") if the student writes the answer instead of saying it." },
  { stage: "Simple vs Progressive", time: "~2 min", note: "This is the key comparison slide. Have the student read the signal words aloud, those are the fastest way to pick the right tense in real conversation." },
  { stage: "Mixed Practice", time: "~3 min", note: "This is the combining activity, both tenses appear together. Have the student name the signal word that gave the tense away before revealing the answer." },
  { stage: "Now You Try", time: "~2 min", note: "Free production, mixing both tenses naturally. Correct gently if they default to only one tense out of habit." },
  { stage: "Wrap-Up", time: null, note: null },
];

const SLIDES = [
  {
    stage: "Customized Lesson", time: null,
    body: (
      <div className="psp-cover">
        <span className="psp-eyebrow">Sentivo &middot; Customized Lesson</span>
        <h1 className="psp-h1">Present Simple vs Progressive</h1>
        <p className="psp-cover-p">Learn when to use each tense, then practice choosing between them in the same conversation.</p>
      </div>
    ),
  },
  {
    stage: "Warm-up", time: "~2 min",
    body: (
      <div className="psp-center">
        <h2 className="psp-h2">Let's Warm Up</h2>
        <p className="psp-p">What do you do every day? What are you doing right now?</p>
      </div>
    ),
  },
  {
    stage: "Present Simple", time: "~3 min",
    body: (
      <>
        <h2 className="psp-h2">Present Simple</h2>
        <p className="psp-p-sm">Use this for habits, facts, and schedules: things that stay true.</p>
        <RuleBox group={SIMPLE} />
      </>
    ),
  },
  {
    stage: "Practice: Present Simple", time: "~2 min",
    body: (
      <>
        <h2 className="psp-h2">Complete the Sentence</h2>
        <p className="psp-p-sm">Say the sentence out loud, then tap the card to check.</p>
        <div className="psp-blank-grid">
          {SIMPLE.practice.map((item) => <BlankCard key={item.blank} item={item} accent={SIMPLE.accent} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Present Progressive", time: "~3 min",
    body: (
      <>
        <h2 className="psp-h2">Present Progressive</h2>
        <p className="psp-p-sm">Use this for right now, temporary situations, and planned future moments.</p>
        <RuleBox group={PROGRESSIVE} />
      </>
    ),
  },
  {
    stage: "Practice: Present Progressive", time: "~2 min",
    body: (
      <>
        <h2 className="psp-h2">Complete the Sentence</h2>
        <p className="psp-p-sm">Say the sentence out loud, then tap the card to check.</p>
        <div className="psp-blank-grid">
          {PROGRESSIVE.practice.map((item) => <BlankCard key={item.blank} item={item} accent={PROGRESSIVE.accent} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Simple vs Progressive", time: "~2 min",
    body: (
      <>
        <h2 className="psp-h2">Which One Do I Use?</h2>
        <div className="psp-compare-grid">
          <div className="psp-compare-col" style={{ borderColor: SIMPLE.accentLight }}>
            <span className="psp-compare-title" style={{ color: SIMPLE.accent }}>Present Simple</span>
            <p className="psp-compare-p">Repeated, permanent, or always true.</p>
            <div className="psp-signal-row">
              {SIMPLE.signals.map((sig) => <span key={sig} className="psp-signal-chip">{sig}</span>)}
            </div>
          </div>
          <div className="psp-compare-col" style={{ borderColor: PROGRESSIVE.accentLight }}>
            <span className="psp-compare-title" style={{ color: PROGRESSIVE.accent }}>Present Progressive</span>
            <p className="psp-compare-p">Happening now, or temporary.</p>
            <div className="psp-signal-row">
              {PROGRESSIVE.signals.map((sig) => <span key={sig} className="psp-signal-chip">{sig}</span>)}
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    stage: "Mixed Practice", time: "~3 min",
    body: (
      <>
        <h2 className="psp-h2">Choose the Right Tense</h2>
        <p className="psp-p-sm">Some need Present Simple, some need Present Progressive. Look for the signal word.</p>
        <div className="psp-blank-grid">
          {MIXED_PRACTICE.map((item) => <BlankCard key={item.blank} item={item} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Now You Try", time: "~2 min",
    body: (
      <div className="psp-center">
        <h2 className="psp-h2">Your Turn</h2>
        <ul className="psp-qlist">
          <li>Tell me one thing you do every week. Use Present Simple.</li>
          <li>Tell me one thing you are doing today. Use Present Progressive.</li>
          <li>Now combine them: "I usually ___, but today I am ___."</li>
        </ul>
      </div>
    ),
  },
  {
    stage: "Wrap-Up", time: null,
    body: (
      <div className="psp-cover">
        <h2 className="psp-h1" style={{ fontSize: 34 }}>Great Job!</h2>
        <p className="psp-cover-p">You practiced Present Simple for habits and facts, Present Progressive for right now, and how to choose between them.</p>
      </div>
    ),
  },
];

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Quicksand:wght@500;600;700&display=swap');

.psp-wrap { min-height: 100vh; width: 100%; background: #EEF1F6; color: #1B2A4A; font-family: 'Quicksand', sans-serif; padding: 16px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; }
.psp-wrap * { box-sizing: border-box; }
.psp-single { flex-shrink: 0; }

.psp-slide {
  position: relative; width: min(740px, calc(100vw - 32px)); height: min(580px, calc(100vh - 32px)); flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 24px 50px rgba(27,42,74,0.18);
}
.psp-close { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.2); color: #fff; }

.psp-header { flex-shrink: 0; background: ${NAVY}; padding: 20px 30px; display: flex; align-items: center; justify-content: space-between; }
.psp-brand { display: flex; align-items: center; gap: 8px; font-family: 'Fraunces', serif; font-weight: 700; font-size: 17px; color: #fff; }
.psp-brand-badge { display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #fff; flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.18); }
.psp-brand-logo { height: 16px; width: auto; display: block; }
.psp-stage-chip { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.14); padding: 7px 15px; border-radius: 999px; }
.psp-stage-name { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11.5px; color: #fff; letter-spacing: 0.02em; }
.psp-stage-time { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.14); padding: 3px 8px; border-radius: 999px; }

.psp-body { flex: 1; overflow-y: auto; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px 42px; gap: 12px; }

.psp-footer { flex-shrink: 0; background: #F5F6FA; border-top: 1px solid #E4E9F5; padding: 16px 26px; display: flex; align-items: center; justify-content: space-between; }
.psp-nav { display: inline-flex; align-items: center; gap: 7px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; padding: 11px 20px; border-radius: 12px; border: 1px solid #DCE2F0; cursor: pointer; background: #fff; color: ${NAVY}; }
.psp-nav.next { background: ${CORAL}; border-color: ${CORAL}; color: #fff; }
.psp-nav.is-off, .psp-nav:disabled { opacity: 0.35; cursor: default; }
.psp-progress { display: flex; align-items: center; gap: 6px; }
.psp-dot { width: 6px; height: 6px; border-radius: 50%; background: #D6DCEA; }
.psp-dot.on { width: 20px; border-radius: 4px; background: ${CORAL}; }

.psp-eyebrow { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; }
.psp-h1 { font-family: 'Fraunces', serif; font-weight: 700; font-size: 30px; color: ${NAVY}; margin: 8px 0 0; text-align: center; }
.psp-h2 { font-family: 'Fraunces', serif; font-weight: 700; font-size: 25px; color: ${NAVY}; margin: 0 0 4px; text-align: center; }
.psp-p { font-size: 15px; font-weight: 600; color: #5A6B92; text-align: center; max-width: 480px; line-height: 1.6; }
.psp-p-sm { font-size: 13px; font-weight: 600; color: #8892AC; text-align: center; margin: -6px 0 4px; }
.psp-cover { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }
.psp-cover-p { font-size: 14.5px; font-weight: 600; color: #5A6B92; max-width: 500px; line-height: 1.6; margin: 0; }
.psp-center { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }

.psp-rulebox { width: 100%; max-width: 580px; display: flex; flex-direction: column; align-items: center; gap: 12px; border: 1px solid; border-radius: 16px; padding: 16px 20px; }
.psp-formula { font-family: 'Fraunces', serif; font-weight: 700; font-size: 13.5px; padding: 7px 16px; border-radius: 999px; }
.psp-signal-row { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; }
.psp-signal-chip { font-size: 10.5px; font-weight: 700; color: #6B7699; background: #F0F2F8; border-radius: 999px; padding: 4px 10px; }
.psp-example-grid { display: flex; flex-direction: column; gap: 8px; width: 100%; }
.psp-example-card { display: flex; align-items: baseline; gap: 8px; background: #FAFBFD; border: 1px solid #E4E9F5; border-radius: 10px; padding: 9px 14px; }
.psp-example-label { font-size: 9.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; flex-shrink: 0; width: 92px; }
.psp-example-text { font-size: 13px; font-weight: 600; color: #3A4568; }

.psp-blank-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; width: 100%; max-width: 580px; }
.psp-blank-card { background: #FAFBFD; border: 1px dashed #C7D0E5; border-radius: 12px; padding: 14px 16px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; align-items: center; text-align: center; }
.psp-blank-sentence { font-family: 'Fraunces', serif; font-weight: 600; font-size: 13px; color: ${NAVY}; margin: 0; }
.psp-blank-hint { font-size: 10px; font-weight: 700; color: #A6ADC7; text-transform: uppercase; letter-spacing: 0.04em; }
.psp-blank-answer { font-size: 11.5px; font-weight: 700; color: #fff; padding: 4px 12px; border-radius: 999px; }

.psp-compare-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; width: 100%; max-width: 580px; }
.psp-compare-col { border: 1px solid; border-radius: 16px; padding: 16px 16px; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
.psp-compare-title { font-family: 'Fraunces', serif; font-weight: 700; font-size: 15px; }
.psp-compare-p { font-size: 11.5px; font-weight: 600; color: #6B7699; margin: 0 0 4px; }

.psp-qlist { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; max-width: 480px; }
.psp-qlist li { font-size: 14px; font-weight: 600; color: #3A4568; background: #FAFBFD; border: 1px solid #E4E9F5; border-radius: 10px; padding: 12px 16px; }

@media (max-width: 640px) {
  .psp-header { padding: 14px 18px; }
  .psp-body { padding: 16px 18px; gap: 8px; }
  .psp-footer { padding: 12px 16px; }
  .psp-h1 { font-size: 24px; }
  .psp-h2 { font-size: 20px; }
  .psp-blank-grid, .psp-compare-grid { grid-template-columns: 1fr; max-width: 100%; }
  .psp-example-label { width: 76px; }
}
`;
