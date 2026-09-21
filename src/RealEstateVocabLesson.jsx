import React, { useEffect, useState } from "react";

const NAVY = "#1B2A4A";
const NAVY_DEEP = "#132038";
const CORAL = "#FF6B4A";
const CORAL_DEEP = "#E0502F";
const GOLD = "#B8860B";
const GOLD_LIGHT = "#F5EBD3";

function Icon({ name, size = 30, color = NAVY }) {
  const p = { fill: "none", stroke: color, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "person": return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" /></svg>;
    case "person2": return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" /><path d="M9 8h6" /></svg>;
    case "briefcase": return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /></svg>;
    case "key": return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><circle cx="8" cy="8" r="3.5" /><path d="M10.5 10.5 20 20M16 16l2-2M19 19l2-2" /></svg>;
    case "house": return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M4 11 12 4l8 7" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg>;
    case "tag": return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M12 3h6a2 2 0 0 1 2 2v6l-9 9-8-8z" /><circle cx="16" cy="7" r="1.3" fill={color} stroke="none" /></svg>;
    case "pin": return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.3" /></svg>;
    case "star": return <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none"><path d="M12 3l2.6 5.7 6.2.7-4.6 4.3 1.3 6.2-5.5-3.1-5.5 3.1 1.3-6.2-4.6-4.3 6.2-.7z" /></svg>;
    case "percent": return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><circle cx="7" cy="7" r="2.5" /><circle cx="17" cy="17" r="2.5" /><path d="M18 6 6 18" /></svg>;
    case "wallet": return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /><circle cx="16.5" cy="14.5" r="1.2" fill={color} stroke="none" /></svg>;
    case "handshake": return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M3 12l4-4 4 3 3-3 4 4" /><path d="M3 12l3 4 3-2M21 12l-3 4-3-2" /></svg>;
    case "document": return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4" /><path d="M9.5 12h5M9.5 15.5h5" /></svg>;
    default: return null;
  }
}

const WORD_GROUPS = [
  {
    key: "people", label: "People in Real Estate", accent: NAVY, accentLight: "#E4E9F5",
    words: [
      { term: "Buyer", icon: "person", def: "A person who wants to purchase a home or property.", blank: "The ___ wants to buy a new house.", answer: "buyer" },
      { term: "Seller", icon: "person2", def: "A person who wants to sell their home or property.", blank: "The ___ is selling her apartment.", answer: "seller" },
      { term: "Agent", icon: "briefcase", def: "A professional who helps buyers and sellers complete a sale.", blank: "My ___ found me a great house.", answer: "agent" },
      { term: "Landlord", icon: "key", def: "A person who owns a property and rents it to someone else.", blank: "The ___ owns three apartments.", answer: "landlord" },
    ],
  },
  {
    key: "property", label: "Property & Location", accent: CORAL, accentLight: "#FFE6DD",
    words: [
      { term: "Property", icon: "house", def: "A house, apartment, or piece of land that can be bought, sold, or rented.", blank: "This ___ has three bedrooms.", answer: "property" },
      { term: "Listing", icon: "tag", def: "A property that is officially for sale or for rent.", blank: "I saw a new ___ online.", answer: "listing" },
      { term: "Neighborhood", icon: "pin", def: "The area around a property, including nearby streets and buildings.", blank: "This ___ is quiet and safe.", answer: "neighborhood" },
      { term: "Amenities", icon: "star", def: "Special features of a property, like a pool, gym, or parking.", blank: "The building has great ___, like a pool.", answer: "amenities" },
    ],
  },
  {
    key: "money", label: "Money & Process", accent: GOLD, accentLight: GOLD_LIGHT,
    words: [
      { term: "Mortgage", icon: "percent", def: "A loan from a bank used to buy a home.", blank: "I need a ___ to buy this house.", answer: "mortgage" },
      { term: "Down Payment", icon: "wallet", def: "The first, upfront payment made when buying a home.", blank: "We paid a 20% ___.", answer: "down payment" },
      { term: "Offer", icon: "handshake", def: "The price and terms a buyer proposes to the seller.", blank: "They made an ___ on the house.", answer: "offer" },
      { term: "Lease", icon: "document", def: "A legal agreement to rent a property for a period of time.", blank: "I signed a one-year ___.", answer: "lease" },
    ],
  },
];

function WordCard({ word, accent, accentLight }) {
  return (
    <div className="rev-word-card">
      <div className="rev-word-icon" style={{ background: accentLight, color: accent }}><Icon name={word.icon} color={accent} /></div>
      <div className="rev-word-term">{word.term}</div>
      <div className="rev-word-def">{word.def}</div>
    </div>
  );
}

function BlankCard({ word, accent }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="rev-blank-card" onClick={() => setRevealed((r) => !r)}>
      <p className="rev-blank-sentence">{word.blank}</p>
      {revealed ? (
        <span className="rev-blank-answer" style={{ background: accent }}>{word.answer}</span>
      ) : (
        <span className="rev-blank-hint">Tap to reveal</span>
      )}
    </div>
  );
}

export default function RealEstateVocabLesson() {
  const [i, setI] = useState(0);
  const total = SLIDES.length;
  const s = SLIDES[i];

  useEffect(() => {
    const styleId = "rev-styles";
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
    <div className="rev-wrap">
      <div className="rev-single">
        <div className="rev-slide">
          <button className="rev-close" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <div className="rev-header">
            <div className="rev-brand">
              <span className="rev-brand-badge">
                <img className="rev-brand-logo" src="/logo-sentivo.png" alt="" />
              </span>
              <span>entenco</span>
            </div>
            <div className="rev-stage-chip">
              <span className="rev-stage-name">{s.stage}</span>
              {s.time && <span className="rev-stage-time">{s.time}</span>}
            </div>
          </div>
          <div className="rev-body">{s.body}</div>
          <div className="rev-footer">
            <button className={`rev-nav ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="rev-progress">
              {Array.from({ length: total }).map((_, idx) => (
                <span key={idx} className={`rev-dot ${idx === i ? "on" : ""}`} />
              ))}
            </div>
            <button className="rev-nav next" onClick={() => (i === total - 1 ? exit() : go(1))}>
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
  { stage: "Warm-up", time: "~2 min", note: "Open conversation, let the student answer freely in whatever sentences they can manage. This is a comprehension/rapport check, not a vocabulary test yet." },
  { stage: "People in Real Estate", time: "~4 min", note: "Read each definition aloud. The student's comprehension is stronger than production, so it's fine to use the full definition sentence, just don't require them to repeat it verbatim." },
  { stage: "Practice: People", time: "~2 min", note: "Student says the completed sentence out loud before tapping to check. Keep corrections light, the goal is confident simple-sentence production, not perfect grammar." },
  { stage: "Property & Location", time: "~4 min", note: "Same approach: read the definition, check understanding with a quick gesture or one-word confirmation before moving on." },
  { stage: "Practice: Property", time: "~2 min", note: "Same drill as the People group." },
  { stage: "Money & Process", time: "~4 min", note: "These are the most abstract terms in the set. Slow down here and consider a real example (a number, a percentage) to anchor comprehension." },
  { stage: "Practice: Money", time: "~2 min", note: "Same drill. \"Down Payment\" is two words, let the student know that's expected." },
  { stage: "Listen & Understand", time: "~3 min", note: "Read the dialogue aloud at a natural pace, twice if needed. This is a comprehension task, the student is not expected to produce language this complex yet." },
  { stage: "Check Your Understanding", time: "~2 min", note: "Accept short, simple answers (\"Yes\", \"A gym\", \"Quiet\"). The goal is confirming they understood the dialogue, not testing sentence complexity." },
  { stage: "Now You Try", time: "~2 min", note: "Free production using the target words. Keep sentences simple, this matches their production level even though they understood a much richer dialogue a moment ago." },
  { stage: "Wrap-Up", time: null, note: null },
];

const SLIDES = [
  {
    stage: "Customized Lesson", time: null,
    body: (
      <div className="rev-cover">
        <span className="rev-eyebrow">Sentenco &middot; Customized Lesson</span>
        <h1 className="rev-h1">Real Estate Vocabulary</h1>
        <p className="rev-cover-p">A 25-minute one-to-one lesson: 12 core real estate words, grouped by People, Property, and Money.</p>
        <div className="rev-cover-tags">
          <span className="rev-cover-tag">Comprehension: Intermediate</span>
          <span className="rev-cover-tag">Production: Advanced Beginner</span>
        </div>
      </div>
    ),
  },
  {
    stage: "Warm-up", time: "~2 min",
    body: (
      <div className="rev-center">
        <h2 className="rev-h2">Let's Talk Real Estate</h2>
        <p className="rev-p">Have you ever bought, sold, or rented a home? What do you already know about real estate?</p>
      </div>
    ),
  },
  {
    stage: "People in Real Estate", time: "~4 min",
    body: (
      <>
        <h2 className="rev-h2">People in Real Estate</h2>
        <div className="rev-word-grid">
          {WORD_GROUPS[0].words.map((w) => <WordCard key={w.term} word={w} accent={WORD_GROUPS[0].accent} accentLight={WORD_GROUPS[0].accentLight} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Practice: People", time: "~2 min",
    body: (
      <>
        <h2 className="rev-h2">Complete the Sentence</h2>
        <p className="rev-p-sm">Say the sentence out loud, then tap the card to check.</p>
        <div className="rev-blank-grid">
          {WORD_GROUPS[0].words.map((w) => <BlankCard key={w.term} word={w} accent={WORD_GROUPS[0].accent} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Property & Location", time: "~4 min",
    body: (
      <>
        <h2 className="rev-h2">Property & Location</h2>
        <div className="rev-word-grid">
          {WORD_GROUPS[1].words.map((w) => <WordCard key={w.term} word={w} accent={WORD_GROUPS[1].accent} accentLight={WORD_GROUPS[1].accentLight} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Practice: Property", time: "~2 min",
    body: (
      <>
        <h2 className="rev-h2">Complete the Sentence</h2>
        <p className="rev-p-sm">Say the sentence out loud, then tap the card to check.</p>
        <div className="rev-blank-grid">
          {WORD_GROUPS[1].words.map((w) => <BlankCard key={w.term} word={w} accent={WORD_GROUPS[1].accent} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Money & Process", time: "~4 min",
    body: (
      <>
        <h2 className="rev-h2">Money & Process</h2>
        <div className="rev-word-grid">
          {WORD_GROUPS[2].words.map((w) => <WordCard key={w.term} word={w} accent={WORD_GROUPS[2].accent} accentLight={WORD_GROUPS[2].accentLight} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Practice: Money", time: "~2 min",
    body: (
      <>
        <h2 className="rev-h2">Complete the Sentence</h2>
        <p className="rev-p-sm">Say the sentence out loud, then tap the card to check.</p>
        <div className="rev-blank-grid">
          {WORD_GROUPS[2].words.map((w) => <BlankCard key={w.term} word={w} accent={WORD_GROUPS[2].accent} />)}
        </div>
      </>
    ),
  },
  {
    stage: "Listen & Understand", time: "~3 min",
    body: (
      <>
        <h2 className="rev-h2">A Conversation With an Agent</h2>
        <div className="rev-dialogue">
          <div className="rev-line"><span className="rev-speaker">Agent:</span> "Hi! I found a great listing for you. It's a two-bedroom apartment with nice amenities, like a gym and a parking spot."</div>
          <div className="rev-line"><span className="rev-speaker">Client:</span> "That sounds good. What's the neighborhood like?"</div>
          <div className="rev-line"><span className="rev-speaker">Agent:</span> "It's quiet and close to downtown. The seller is asking for $250,000."</div>
          <div className="rev-line"><span className="rev-speaker">Client:</span> "Okay. If I want it, do I need a mortgage?"</div>
          <div className="rev-line"><span className="rev-speaker">Agent:</span> "Yes, most buyers do. You'll also need a down payment, usually around 10 to 20 percent."</div>
          <div className="rev-line"><span className="rev-speaker">Client:</span> "Got it. Can we make an offer this week?"</div>
          <div className="rev-line"><span className="rev-speaker">Agent:</span> "Of course! I'll help you every step of the way."</div>
        </div>
      </>
    ),
  },
  {
    stage: "Check Your Understanding", time: "~2 min",
    body: (
      <div className="rev-center">
        <h2 className="rev-h2">Answer in Simple Sentences</h2>
        <ul className="rev-qlist">
          <li>What does the apartment have?</li>
          <li>Is the neighborhood quiet or noisy?</li>
          <li>Does the client need a mortgage?</li>
        </ul>
      </div>
    ),
  },
  {
    stage: "Now You Try", time: "~2 min",
    body: (
      <div className="rev-center">
        <h2 className="rev-h2">Your Turn</h2>
        <ul className="rev-qlist">
          <li>Tell me about a property you know. Use "property" or "neighborhood."</li>
          <li>Have you ever made an offer on something? Use "offer."</li>
          <li>Do you rent or own your home? Use "landlord" or "mortgage."</li>
        </ul>
      </div>
    ),
  },
  {
    stage: "Wrap-Up", time: null,
    body: (
      <div className="rev-cover">
        <h2 className="rev-h1" style={{ fontSize: 34 }}>Great Job!</h2>
        <p className="rev-cover-p">Today you learned 12 real estate words across people, property, and money. Keep using them in your next conversation.</p>
      </div>
    ),
  },
];

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Quicksand:wght@500;600;700&display=swap');

.rev-wrap { min-height: 100vh; width: 100%; background: #EEF1F6; color: #1B2A4A; font-family: 'Quicksand', sans-serif; padding: 16px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; }
.rev-wrap * { box-sizing: border-box; }
.rev-single { flex-shrink: 0; }

.rev-slide {
  position: relative; width: min(740px, calc(100vw - 32px)); height: min(580px, calc(100vh - 32px)); flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 24px 50px rgba(27,42,74,0.18);
}
.rev-close { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.2); color: #fff; }

.rev-header { flex-shrink: 0; background: ${NAVY}; padding: 20px 30px; display: flex; align-items: center; justify-content: space-between; }
.rev-brand { display: flex; align-items: center; gap: 8px; font-family: 'Fraunces', serif; font-weight: 700; font-size: 17px; color: #fff; }
.rev-brand-badge { display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #fff; flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.18); }
.rev-brand-logo { height: 16px; width: auto; display: block; }
.rev-stage-chip { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.14); padding: 7px 15px; border-radius: 999px; }
.rev-stage-name { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11.5px; color: #fff; letter-spacing: 0.02em; }
.rev-stage-time { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.14); padding: 3px 8px; border-radius: 999px; }

.rev-body { flex: 1; overflow-y: auto; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 26px 42px; gap: 14px; }

.rev-footer { flex-shrink: 0; background: #F5F6FA; border-top: 1px solid #E4E9F5; padding: 16px 26px; display: flex; align-items: center; justify-content: space-between; }
.rev-nav { display: inline-flex; align-items: center; gap: 7px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; padding: 11px 20px; border-radius: 12px; border: 1px solid #DCE2F0; cursor: pointer; background: #fff; color: ${NAVY}; }
.rev-nav.next { background: ${CORAL}; border-color: ${CORAL}; color: #fff; }
.rev-nav.is-off, .rev-nav:disabled { opacity: 0.35; cursor: default; }
.rev-progress { display: flex; align-items: center; gap: 6px; }
.rev-dot { width: 6px; height: 6px; border-radius: 50%; background: #D6DCEA; }
.rev-dot.on { width: 20px; border-radius: 4px; background: ${CORAL}; }

.rev-eyebrow { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; }
.rev-h1 { font-family: 'Fraunces', serif; font-weight: 700; font-size: 34px; color: ${NAVY}; margin: 8px 0 0; text-align: center; }
.rev-h2 { font-family: 'Fraunces', serif; font-weight: 700; font-size: 26px; color: ${NAVY}; margin: 0 0 4px; text-align: center; }
.rev-p { font-size: 15px; font-weight: 600; color: #5A6B92; text-align: center; max-width: 480px; line-height: 1.6; }
.rev-p-sm { font-size: 13px; font-weight: 600; color: #8892AC; text-align: center; margin: -6px 0 4px; }
.rev-cover { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }
.rev-cover-p { font-size: 14.5px; font-weight: 600; color: #5A6B92; max-width: 480px; line-height: 1.6; margin: 0; }
.rev-cover-tags { display: flex; gap: 10px; margin-top: 8px; }
.rev-cover-tag { font-size: 11px; font-weight: 700; color: ${NAVY}; background: #E4E9F5; padding: 6px 14px; border-radius: 999px; }
.rev-center { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }

.rev-word-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; width: 100%; max-width: 560px; }
.rev-word-card { background: #FAFBFD; border: 1px solid #E4E9F5; border-radius: 14px; padding: 14px 16px; display: flex; flex-direction: column; gap: 6px; }
.rev-word-icon { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
.rev-word-term { font-family: 'Fraunces', serif; font-weight: 700; font-size: 15.5px; color: ${NAVY}; }
.rev-word-def { font-size: 12px; font-weight: 600; color: #6B7699; line-height: 1.45; }

.rev-blank-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; width: 100%; max-width: 560px; }
.rev-blank-card { background: #FAFBFD; border: 1px dashed #C7D0E5; border-radius: 12px; padding: 14px 16px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; align-items: center; text-align: center; }
.rev-blank-sentence { font-family: 'Fraunces', serif; font-weight: 600; font-size: 13.5px; color: ${NAVY}; margin: 0; }
.rev-blank-hint { font-size: 10px; font-weight: 700; color: #A6ADC7; text-transform: uppercase; letter-spacing: 0.04em; }
.rev-blank-answer { font-size: 12px; font-weight: 700; color: #fff; padding: 4px 12px; border-radius: 999px; }

.rev-dialogue { display: flex; flex-direction: column; gap: 8px; max-width: 560px; width: 100%; }
.rev-line { font-size: 13px; font-weight: 600; color: #3A4568; line-height: 1.5; background: #FAFBFD; border-radius: 10px; padding: 9px 13px; }
.rev-speaker { font-family: 'Fraunces', serif; font-weight: 700; color: ${NAVY}; margin-right: 4px; }

.rev-qlist { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; max-width: 460px; }
.rev-qlist li { font-size: 14px; font-weight: 600; color: #3A4568; background: #FAFBFD; border: 1px solid #E4E9F5; border-radius: 10px; padding: 12px 16px; }

@media (max-width: 640px) {
  .rev-header { padding: 14px 18px; }
  .rev-body { padding: 18px 20px; gap: 10px; }
  .rev-footer { padding: 12px 16px; }
  .rev-h1 { font-size: 26px; }
  .rev-h2 { font-size: 21px; }
  .rev-word-grid, .rev-blank-grid { grid-template-columns: 1fr; max-width: 100%; }
}
`;
