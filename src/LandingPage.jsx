import { useEffect, useRef, useState } from "react";

// What visitors who are not signed in see on the Homeroom page: what Sentenco is,
// the main hubs, the A1 Discover curriculum, and a click-through of a real lesson.
// Signed-in teachers never see this; they get Homeroom as before.

const HUBS = [
  { key: "speaking", name: "Speaking", sub: "The Fluency Clinic", tone: "peach" },
  { key: "grammar", name: "Grammar", sub: "The Grammar Garden", tone: "mint" },
  { key: "vocabulary", name: "Vocabulary", sub: "Lessons and games", tone: "lilac" },
  { key: "writing", name: "Writing", sub: "Scrapbook Studio", tone: "pink" },
  { key: "reading", name: "Reading", sub: "Storybooks with questions and activities", tone: "butter" },
  { key: "articles", name: "Articles", sub: "The Gazette, three reading levels", tone: "sky" },
];

const SLIDES = [
  "The cover: Lesson 1, \"Hello, Alphabet!\" with the letters A, B and C.",
  "Hello!: students wave and say hello, hi and bye.",
  "What's Your Name?: students listen, then answer with their own name.",
  "Meet A, B, C!: students look at each letter and say its name.",
  "My Name Is...: three friends whose names start with A, B and C.",
  "Meet Anna!: a short dialogue, then the student says their own name.",
  "Meet Bob!: the same pattern with a new friend.",
  "Meet Carol!: the third friend, and the third letter.",
  "A is for...: ant, apple, alligator. Students say each word.",
  "B is for...: ball, banana, bear.",
  "C is for...: cat, car, cookie.",
  "Look & Say!: all nine pictures together, one letter per row.",
  "Mixed Up! 1: pictures out of order, students say the letter and word.",
  "Mixed Up! 2: a new set of three.",
  "Mixed Up! 3: the last mixed-up round.",
  "Let's Practice!: a short dialogue using the student's own name.",
  "Show What You Know!: Part D, the last part. Students remember each letter.",
  "What Letter?: no help this time, students say the word and the letter.",
  "What Letter? Again!: a fresh set of pictures.",
  "One More Time!: the final round.",
  "Mission Complete!: a celebration, and a summary of what they learned.",
];

const COLLAGE = [
  { key: "speaking", name: "Speaking" },
  { key: "grammar", name: "Grammar" },
  { key: "writing", name: "Writing" },
];

const slideSrc = (i) => `/landing/p${String(i + 1).padStart(2, "0")}.jpg`;

export default function LandingPage({ onSignUp, onLogin }) {
  const [slide, setSlide] = useState(0);
  const [discView, setDiscView] = useState("top");
  const [front, setFront] = useState(0);
  const [paused, setPaused] = useState(false);
  const railRef = useRef(null);
  const tryRef = useRef(null);
  const hubsRef = useRef(null);
  const currRef = useRef(null);
  const whyRef = useRef(null);
  const heroRef = useRef(null);
  const [active, setActive] = useState("");
  const last = SLIDES.length - 1;

  // The three hero pictures take turns coming to the front (not when the visitor prefers less motion).
  useEffect(() => {
    if (paused) return undefined;
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = setInterval(() => setFront((f) => (f + 1) % COLLAGE.length), 3600);
    return () => clearInterval(id);
  }, [paused]);

  // Highlight the nav link for the section the visitor is looking at.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const marks = [["", heroRef], ["hubs", hubsRef], ["curriculum", currRef], ["try", tryRef], ["why", whyRef]];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.getAttribute("data-nav") || ""); }),
      { root: null, rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    marks.forEach(([k, r]) => { if (r.current) { r.current.setAttribute("data-nav", k); io.observe(r.current); } });
    return () => io.disconnect();
  }, []);

  const scrollRail = (dir) => {
    const r = railRef.current;
    if (r) r.scrollBy({ left: dir * Math.min(r.clientWidth * 0.8, 900), behavior: "smooth" });
  };
  const goTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const goTry = () => goTo(tryRef);
  const prev = () => setSlide((s) => Math.max(0, s - 1));
  const next = () => setSlide((s) => Math.min(last, s + 1));

  return (
    <div className="lnd">
      <style>{CSS}</style>

      <nav className="lnd-nav" aria-label="Sentenco">
        <div className="lnd-pill">
          <div className="lnd-brand"><img src="/logo-sentenco.png" alt="" />entenco</div>
          <div className="lnd-links">
            <button type="button" className={active === "hubs" ? "on" : ""} aria-current={active === "hubs" ? "true" : undefined} onClick={() => goTo(hubsRef)}>Hubs</button>
            <button type="button" className={active === "curriculum" ? "on" : ""} aria-current={active === "curriculum" ? "true" : undefined} onClick={() => goTo(currRef)}>Curriculum</button>
            <button type="button" className={active === "try" ? "on" : ""} aria-current={active === "try" ? "true" : undefined} onClick={goTry}>Try a lesson</button>
            <button type="button" className={active === "why" ? "on" : ""} aria-current={active === "why" ? "true" : undefined} onClick={() => goTo(whyRef)}>Why join</button>
          </div>
          <div className="lnd-acts">
            <button type="button" className="lnd-login" onClick={onLogin}>Log in</button>
            <button type="button" className="lnd-signup" onClick={onSignUp}>Sign up</button>
          </div>
        </div>
      </nav>

      <header className="lnd-hero" ref={heroRef}>
        <div className="lnd-blob lnd-b1" /><div className="lnd-blob lnd-b2" /><div className="lnd-blob lnd-b3" />
        <div className="lnd-hero-in">
          <div>
            <div className="lnd-eyebrow"><i />For ESL teachers</div>
            <h1 className="lnd-hero-h">Lessons ready for your class, <em>today.</em></h1>
            <p className="lnd-sub">Speaking, grammar, vocabulary, writing, reading and more. Kids, Teens and Adults, A1 to A2.</p>
            <div className="lnd-cta-row">
              <button type="button" className="lnd-btn lnd-big" onClick={onSignUp}>Sign up free</button>
              <button type="button" className="lnd-btn lnd-soft" onClick={goTry}>Try a sample lesson</button>
            </div>
            <p className="lnd-fine">No card needed. 7-day Pro trial when you sign up.</p>
          </div>
          <div className="lnd-collage-wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="lnd-collage">
              {COLLAGE.map((c, i) => (
                <img
                  key={c.key}
                  className={`lnd-pos${(i - front + COLLAGE.length) % COLLAGE.length}`}
                  src={`/landing/hub-${c.key}.jpg`}
                  alt={`${c.name} hub`}
                  onClick={() => setFront(i)}
                />
              ))}
            </div>
            <div className="lnd-collage-dots">
              {COLLAGE.map((c, i) => (
                <button key={c.key} type="button" className={i === front ? "on" : ""} aria-label={`Show the ${c.name} hub`} onClick={() => setFront(i)} />
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="lnd-section" ref={hubsRef}>
        <div className="lnd-sec-head">
          <div>
            <span className="lnd-chip lnd-coral">The main hubs</span>
            <h2>Everything for the lesson, in one place</h2>
            <p>Pick a hub for the skill you want to teach today.</p>
          </div>
          <div className="lnd-arrows">
            <button type="button" onClick={() => scrollRail(-1)} aria-label="Scroll left">&larr;</button>
            <button type="button" onClick={() => scrollRail(1)} aria-label="Scroll right">&rarr;</button>
          </div>
        </div>
        <div className="lnd-rail" ref={railRef}>
          {HUBS.map((h) => (
            <div key={h.key} className={`lnd-hub lnd-t-${h.tone}`}>
              <div className="lnd-shot"><div className="lnd-win"><i /><i /><i /></div><img src={`/landing/hub-${h.key}.jpg`} alt={`${h.name} hub`} loading="lazy" /></div>
              <b>{h.name}</b>
              <span>{h.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="lnd-section" ref={currRef}>
        <div className="lnd-disc">
          <div className="lnd-disc-text">
            <span className="lnd-chip">The curriculum</span>
            <h2>Start with A1 Discover</h2>
            <p>The first level for young learners: letters, phonics and the first words and phrases. 12 units, 72 lessons, each one ready to put on screen.</p>
            <ul className="lnd-ticks">
              <li>Open a level to see all its units</li>
              <li>Open a unit to see every lesson inside</li>
              <li>Each lesson is one click away</li>
            </ul>
          </div>
          <div className="lnd-disc-view">
            <div className="lnd-seg" role="tablist">
              <button type="button" role="tab" aria-selected={discView === "top"} className={discView === "top" ? "on" : ""} onClick={() => setDiscView("top")}>The level page</button>
              <button type="button" role="tab" aria-selected={discView === "units"} className={discView === "units" ? "on" : ""} onClick={() => setDiscView("units")}>Units and lessons</button>
            </div>
            <div className="lnd-disc-frame">
              <div className="lnd-win"><i /><i /><i /></div>
              <img src={`/landing/lv-discover-${discView}.jpg`} alt={discView === "top" ? "The A1 Discover level page" : "A1 Discover units and lessons"} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="lnd-sample" ref={tryRef}>
        <div className="lnd-blob lnd-sample-blob" />
        <div className="lnd-sample-in">
          <div>
            <span className="lnd-chip lnd-coral">Try it now</span>
            <h2>Click through a real lesson</h2>
            <p className="lnd-sample-sub">A1 Discover, Unit 1 Lesson 1: "Hello, Alphabet!" This is the full player, all 21 slides, exactly as a class sees it. Click the lesson's own Next button.</p>
            <div className="lnd-pills"><span>Wave</span><span>Look</span><span>Listen</span><span>Say</span><span>Remember</span></div>
          </div>
          <div className="lnd-player">
            <div className="lnd-device">
              <div className="lnd-screen">
                <img src={slideSrc(slide)} alt={SLIDES[slide].split(":")[0]} />
                <button type="button" className="lnd-zone lnd-zl" aria-label="Previous slide" onClick={prev} disabled={slide === 0} />
                <button type="button" className="lnd-zone lnd-zr" aria-label="Next slide" onClick={next} disabled={slide === last} />
              </div>
            </div>
            <div className="lnd-pcap">
              <p>{SLIDES[slide]}</p>
              <div className="lnd-pbtn">
                <button type="button" onClick={prev} disabled={slide === 0}>Back</button>
                <span className="lnd-pcount">{slide + 1} of {SLIDES.length}</span>
                <button type="button" className="lnd-next" onClick={next} disabled={slide === last}>Next</button>
              </div>
            </div>
            <div className="lnd-thumbs">
              {SLIDES.map((_, i) => (
                <button key={i} type="button" className={i === slide ? "on" : ""} aria-label={`Slide ${i + 1}`} onClick={() => setSlide(i)}>
                  <img src={slideSrc(i)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={whyRef}>
        <div className="lnd-why">
          <div className="lnd-t-peach"><b>Teach it today</b><p>Lessons open in the classroom with no prep. Pick a level and start.</p></div>
          <div className="lnd-t-mint"><b>Free teacher tools</b><p>A name wheel, a feedback generator, a notebook and a syllabus maker.</p></div>
          <div className="lnd-t-lilac"><b>Made by a teacher</b><p>Built by a working ESL teacher for real classes, and still growing.</p></div>
        </div>
      </section>

      <div className="lnd-finish">
        <div className="lnd-finish-in">
          <h2>Your first lesson is one click away</h2>
          <p>Free to start. No card needed.</p>
          <button type="button" className="lnd-btn lnd-white" onClick={onSignUp}>Sign up free</button>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600&family=Figtree:wght@400;500;600;700&family=Fredoka:wght@600;700&display=swap');
.lnd {
  --coral: #FF6B4A; --coral-d: #E5502F; --navy: #16203E; --ink: #25264A; --muted: #62668C;
  --cream: #FFF8F1; --line: #F0E5D8;
  --disp: 'Fraunces', Georgia, serif; --ui: 'Figtree', system-ui, sans-serif; --brand: 'Fredoka', system-ui, sans-serif;
  background:
    radial-gradient(900px 520px at 88% -4%, #FFE2D3 0%, rgba(255,226,211,0) 62%),
    radial-gradient(760px 460px at -6% 30%, #ECE7FF 0%, rgba(236,231,255,0) 62%),
    var(--cream);
  color: var(--ink); font-family: var(--ui); font-size: 16px; line-height: 1.55; width: 100%; overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
.lnd *, .lnd *::before, .lnd *::after { box-sizing: border-box; }
.lnd button { font-family: inherit; cursor: pointer; }
.lnd button:focus-visible { outline: 3px solid #FFB4A2; outline-offset: 3px; }
.lnd img { display: block; }

/* top bar */
.lnd-nav { position: sticky; top: 0; z-index: 20; padding: 12px 24px 0; pointer-events: none; }
.lnd-pill {
  pointer-events: auto; max-width: 1180px; margin: 0 auto; display: flex; align-items: center; gap: 12px; padding: 8px 10px 8px 20px;
  background: rgba(255,255,255,.78); -webkit-backdrop-filter: blur(16px) saturate(1.5); backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(255,255,255,.95); border-radius: 999px;
  box-shadow: 0 0 0 1px rgba(22,32,62,.05), 0 12px 32px rgba(22,32,62,.09);
}
.lnd-brand { display: flex; align-items: center; font-family: var(--brand); font-weight: 700; font-size: 24px; letter-spacing: -.01em; color: var(--navy); margin-right: auto; }
.lnd-brand img { height: 32px; width: auto; margin-right: -7px; }
.lnd-links { display: flex; gap: 2px; padding: 4px; background: rgba(22,32,62,.04); border-radius: 999px; }
.lnd-links button { border: 0; background: transparent; font: 600 14px var(--ui); color: var(--muted); padding: 8px 16px; border-radius: 999px; transition: background .2s, color .2s; }
.lnd-links button:hover { color: var(--navy); background: rgba(255,255,255,.8); }
.lnd-links button.on { color: var(--coral-d); background: #fff; box-shadow: 0 2px 8px rgba(22,32,62,.1); }
.lnd-acts { display: flex; align-items: center; gap: 4px; margin-left: auto; }
.lnd-login { border: 0; background: transparent; font: 700 14px var(--ui); color: var(--navy); padding: 10px 16px; border-radius: 999px; }
.lnd-login:hover { background: rgba(22,32,62,.06); }
.lnd-signup { border: 0; font: 700 14px var(--ui); color: #fff; padding: 11px 22px; border-radius: 999px; background: linear-gradient(180deg, #FF7C5C 0%, #F2583A 100%); box-shadow: 0 6px 16px rgba(255,107,74,.4), inset 0 1px 0 rgba(255,255,255,.35); transition: transform .15s, box-shadow .15s; }
.lnd-signup:hover { transform: translateY(-1px); box-shadow: 0 9px 20px rgba(255,107,74,.45), inset 0 1px 0 rgba(255,255,255,.35); }

/* buttons */
.lnd-btn { font: 700 15px var(--ui); border-radius: 999px; padding: 12px 24px; border: 1.5px solid var(--navy); background: #fff; color: var(--navy); }
.lnd-btn.lnd-big { font: 700 17px var(--ui); padding: 16px 32px; border: 0; color: #fff; background: linear-gradient(180deg, #FF7C5C 0%, #F2583A 100%); box-shadow: 0 12px 26px rgba(255,107,74,.42), inset 0 1px 0 rgba(255,255,255,.4); transition: transform .15s, box-shadow .15s; }
.lnd-btn.lnd-big:hover { transform: translateY(-2px); box-shadow: 0 16px 30px rgba(255,107,74,.48), inset 0 1px 0 rgba(255,255,255,.4); }
.lnd-btn.lnd-soft { font: 700 17px var(--ui); padding: 15px 28px; background: rgba(255,255,255,.7); border: 1.5px solid rgba(22,32,62,.85); backdrop-filter: blur(6px); transition: background .15s, transform .15s; }
.lnd-btn.lnd-soft:hover { background: #fff; transform: translateY(-2px); }
.lnd-btn.lnd-white { background: #fff; color: var(--coral-d); border: 0; font: 700 17px var(--ui); padding: 16px 34px; position: relative; box-shadow: 0 12px 26px rgba(120,30,10,.22); transition: transform .15s; }
.lnd-btn.lnd-white:hover { transform: translateY(-2px); }

/* hero */
.lnd-hero { position: relative; overflow: hidden; }
.lnd-hero::before { content: ""; position: absolute; inset: 0; z-index: 0; background-image: radial-gradient(rgba(180,150,120,.28) 1.1px, transparent 1.3px); background-size: 26px 26px; -webkit-mask-image: linear-gradient(180deg, #000 0%, transparent 72%); mask-image: linear-gradient(180deg, #000 0%, transparent 72%); opacity: .55; }
.lnd-hero-in { max-width: 1180px; margin: 0 auto; padding: 64px 24px 44px; display: grid; grid-template-columns: 1fr 1.05fr; gap: 44px; align-items: center; position: relative; z-index: 1; }
.lnd-blob { position: absolute; border-radius: 50%; z-index: 0; }
.lnd-b1 { width: 440px; height: 440px; background: radial-gradient(circle at 30% 30%, #FFEBDD, #FFD3BD); right: -120px; top: -130px; opacity: .9; }
.lnd-b2 { width: 280px; height: 280px; background: radial-gradient(circle at 30% 30%, #F4F0FF, #E0D8FF); left: -100px; bottom: -70px; }
.lnd-b3 { width: 120px; height: 120px; background: radial-gradient(circle at 30% 30%, #FFF8DB, #FFE9A8); left: 47%; top: 34px; }
.lnd-eyebrow { display: inline-flex; align-items: center; gap: 10px; font: 700 12.5px var(--ui); letter-spacing: .16em; text-transform: uppercase; color: var(--coral-d); }
.lnd-eyebrow i { width: 26px; height: 2px; border-radius: 2px; background: var(--coral); display: block; }
.lnd-hero-h { font-family: var(--disp); font-weight: 600; font-size: 62px; line-height: 1.02; letter-spacing: -.025em; margin: 14px 0 18px; color: var(--navy); }
.lnd-hero-h em { font-style: italic; color: var(--coral); background: linear-gradient(180deg, transparent 66%, rgba(255,214,102,.55) 66%, rgba(255,214,102,.55) 92%, transparent 92%); padding: 0 .08em; }
.lnd-sub { font-size: 19.5px; line-height: 1.55; color: var(--muted); max-width: 42ch; margin: 0 0 30px; }
.lnd-cta-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
.lnd-fine { font-size: 14px; color: var(--muted); margin: 18px 0 0; }
.lnd-collage { position: relative; aspect-ratio: 1.45 / 1; }
.lnd-collage img { position: absolute; width: 62%; height: auto; border-radius: 22px; border: 5px solid #fff; box-shadow: 0 20px 44px rgba(22,32,62,.18); cursor: pointer;
  transition: left .8s cubic-bezier(.4,.1,.2,1), top .8s cubic-bezier(.4,.1,.2,1), transform .8s cubic-bezier(.4,.1,.2,1), box-shadow .8s; }
.lnd-pos0 { left: 19%; top: 42%; transform: rotate(-1.5deg); z-index: 3; box-shadow: 0 28px 56px rgba(22,32,62,.26) !important; }
.lnd-pos1 { left: 38%; top: 0; transform: rotate(4deg); z-index: 1; }
.lnd-pos2 { left: 0; top: 8%; transform: rotate(-5deg); z-index: 2; }
.lnd-collage-dots { display: flex; gap: 8px; justify-content: center; margin-top: 12px; }
.lnd-collage-dots button { width: 10px; height: 10px; border-radius: 50%; border: 0; padding: 0; background: #E4D8CB; transition: background .2s, width .2s; }
.lnd-collage-dots button.on { background: var(--coral); width: 28px; border-radius: 999px; }

/* sections */
.lnd-section { max-width: 1180px; margin: 0 auto; padding: 64px 0 16px; scroll-margin-top: 72px; }
.lnd-sec-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; padding: 0 24px; margin-bottom: 22px; flex-wrap: wrap; }
.lnd-chip { display: inline-block; font: 700 12px var(--ui); letter-spacing: .12em; text-transform: uppercase; border-radius: 999px; padding: 6px 14px; background: var(--navy); color: #fff; }
.lnd-chip.lnd-coral { background: var(--coral); box-shadow: 0 6px 14px rgba(255,107,74,.3); }
.lnd-sec-head h2 { font-family: var(--disp); font-weight: 600; font-size: 40px; line-height: 1.08; letter-spacing: -.02em; margin: 14px 0 6px; color: var(--navy); }
.lnd-sec-head p { margin: 0; color: var(--muted); font-size: 17.5px; max-width: 52ch; }
.lnd-arrows { display: flex; gap: 10px; }
.lnd-arrows button { width: 48px; height: 48px; border-radius: 50%; border: 1.5px solid rgba(22,32,62,.85); background: #fff; color: var(--navy); font: 700 20px var(--ui); display: grid; place-items: center; padding: 0; box-shadow: 0 6px 14px rgba(22,32,62,.08); transition: background .15s, color .15s, transform .15s; }
.lnd-arrows button:hover { background: var(--navy); color: #fff; transform: translateY(-2px); }
.lnd-rail { display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 10px 24px 30px; scrollbar-width: thin; scrollbar-color: #D9CFC4 transparent; }
.lnd-rail::-webkit-scrollbar { height: 8px; }
.lnd-rail::-webkit-scrollbar-thumb { background: #D9CFC4; border-radius: 8px; }
.lnd-hub { flex: 0 0 340px; scroll-snap-align: start; border-radius: 30px; padding: 12px 12px 18px; transition: transform .25s, box-shadow .25s; box-shadow: 0 10px 26px rgba(22,32,62,.06); }
.lnd-hub:hover { transform: translateY(-6px) rotate(-.6deg); box-shadow: 0 18px 38px rgba(22,32,62,.13); }
.lnd-shot { border-radius: 20px; overflow: hidden; background: #fff; border: 2px solid #fff; box-shadow: 0 6px 16px rgba(22,32,62,.08); }
.lnd-shot img { width: 100%; height: auto; }
.lnd-win { display: flex; gap: 6px; align-items: center; padding: 9px 12px; background: #FBF7F2; border-bottom: 1px solid var(--line); }
.lnd-win i { width: 8px; height: 8px; border-radius: 50%; background: #FF8F76; display: block; }
.lnd-win i:nth-child(2) { background: #FFC857; } .lnd-win i:nth-child(3) { background: #5FD3A6; }
.lnd-hub b { display: block; font-family: var(--disp); font-weight: 600; font-size: 25px; letter-spacing: -.01em; color: var(--navy); margin: 16px 10px 0; }
.lnd-hub span { display: block; margin: 3px 10px 0; font-size: 15px; color: #55587F; }
.lnd-t-peach { background: linear-gradient(165deg, #FFEBDF, #FFDCC8); } .lnd-t-lilac { background: linear-gradient(165deg, #F1EDFF, #E3DCFF); } .lnd-t-mint { background: linear-gradient(165deg, #E7F8EE, #D5F0E2); }
.lnd-t-butter { background: linear-gradient(165deg, #FFF5D8, #FFEBB3); } .lnd-t-sky { background: linear-gradient(165deg, #E6F1FF, #D4E6FF); } .lnd-t-pink { background: linear-gradient(165deg, #FFE9F2, #FFD8E7); }

/* discover */
.lnd-disc { display: grid; grid-template-columns: .8fr 1.4fr; gap: 44px; align-items: center; padding: 20px 24px 10px; }
.lnd-disc > * { min-width: 0; }
.lnd-disc-text h2 { font-family: var(--disp); font-weight: 600; font-size: 42px; line-height: 1.06; letter-spacing: -.02em; margin: 16px 0 12px; color: var(--navy); }
.lnd-disc-text p { margin: 0 0 20px; color: var(--muted); font-size: 18px; }
.lnd-ticks { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
.lnd-ticks li { position: relative; padding-left: 38px; font-weight: 600; font-size: 16.5px; color: var(--ink); }
.lnd-ticks li::before { content: ""; position: absolute; left: 0; top: 0; width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(180deg, #FF7C5C, #F2583A); box-shadow: 0 4px 10px rgba(255,107,74,.35); }
.lnd-ticks li::after { content: ""; position: absolute; left: 9px; top: 5px; width: 6px; height: 11px; border: solid #fff; border-width: 0 2.5px 2.5px 0; transform: rotate(45deg); }
.lnd-disc-view { background: linear-gradient(160deg, #FFE9DC, #FFD9C6); border-radius: 34px; padding: 18px; box-shadow: 0 18px 40px rgba(255,107,74,.14); }
.lnd-seg { display: flex; gap: 4px; background: rgba(255,255,255,.55); border-radius: 999px; padding: 4px; margin: 0 0 16px; max-width: 360px; }
.lnd-seg button { flex: 1; border: 0; background: transparent; border-radius: 999px; padding: 10px 14px; font: 700 14px var(--ui); color: var(--muted); transition: background .2s, color .2s; }
.lnd-seg button.on { background: #fff; color: var(--navy); box-shadow: 0 3px 10px rgba(22,32,62,.12); }
.lnd-disc-frame { background: #fff; border-radius: 20px; overflow: hidden; border: 2px solid #fff; box-shadow: 0 16px 36px rgba(22,32,62,.16); }
.lnd-disc-frame img { width: 100%; aspect-ratio: 900/690; object-fit: cover; object-position: top; }

/* sample lesson */
.lnd-sample { color: #fff; margin-top: 48px; position: relative; overflow: hidden; scroll-margin-top: 0;
  background: radial-gradient(900px 520px at 82% 0%, #2E3F7C 0%, rgba(46,63,124,0) 62%), radial-gradient(700px 420px at 0% 100%, #3A2E6B 0%, rgba(58,46,107,0) 60%), #131B38; }
.lnd-sample::before { content: ""; position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,.55) 1px, transparent 1.4px), radial-gradient(rgba(255,255,255,.3) 1px, transparent 1.4px); background-size: 120px 120px, 70px 70px; background-position: 0 0, 35px 40px; opacity: .28; }
.lnd-sample-blob { background: rgba(255,255,255,.05); width: 400px; height: 400px; right: -130px; top: -140px; }
.lnd-sample-in { max-width: 1180px; margin: 0 auto; padding: 68px 24px; display: grid; grid-template-columns: .75fr 1.5fr; gap: 48px; align-items: center; position: relative; z-index: 1; }
.lnd-sample-in > * { min-width: 0; }
.lnd-sample h2 { font-family: var(--disp); font-weight: 600; font-size: 42px; line-height: 1.06; letter-spacing: -.02em; margin: 14px 0 12px; color: #fff; }
.lnd-sample-sub { color: #C6CDE6; font-size: 17.5px; margin: 0 0 20px; }
.lnd-pills { display: flex; gap: 8px; flex-wrap: wrap; }
.lnd-pills span { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.14); border-radius: 999px; padding: 7px 15px; font-weight: 700; font-size: 14px; }
.lnd-device { background: #0C1330; border-radius: 28px; padding: 12px; border: 1px solid rgba(255,255,255,.09); box-shadow: 0 30px 70px rgba(0,0,0,.45), 0 0 90px rgba(255,107,74,.14); }
.lnd-screen { position: relative; border-radius: 30px; overflow: hidden; background: #fff; aspect-ratio: 1000/777; }
.lnd-screen img { width: 100%; height: 100%; object-fit: cover; }
.lnd-zone { position: absolute; bottom: 2%; height: 11%; background: transparent; border: 0; padding: 0; }
.lnd-zl { left: 5%; width: 17%; } .lnd-zr { right: 4%; width: 19%; }
.lnd-zone:disabled { cursor: default; }
.lnd-pcap { margin: 16px 4px 0; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
.lnd-pcap p { margin: 0; font-weight: 600; font-size: 15.5px; flex: 1 1 240px; color: #fff; }
.lnd-pbtn { display: flex; gap: 8px; align-items: center; }
.lnd-pbtn button { border: 0; border-radius: 999px; padding: 11px 22px; font: 700 14.5px var(--ui); background: rgba(255,255,255,.14); color: #fff; transition: background .15s; }
.lnd-pbtn button:hover:not(:disabled) { background: rgba(255,255,255,.22); }
.lnd-pbtn button.lnd-next { background: linear-gradient(180deg, #FF7C5C, #F2583A); box-shadow: 0 6px 16px rgba(255,107,74,.4); }
.lnd-pbtn button:disabled { opacity: .4; cursor: default; }
.lnd-pcount { font-weight: 700; font-size: 13px; color: #C6CDE6; min-width: 58px; text-align: center; }
.lnd-thumbs { display: flex; gap: 8px; margin-top: 14px; overflow-x: auto; padding-bottom: 8px; scrollbar-width: thin; scrollbar-color: rgba(255,255,255,.3) transparent; }
.lnd-thumbs::-webkit-scrollbar { height: 6px; } .lnd-thumbs::-webkit-scrollbar-thumb { background: rgba(255,255,255,.3); border-radius: 6px; } .lnd-thumbs::-webkit-scrollbar-track { background: transparent; }
.lnd-thumbs button { flex: 0 0 80px; border: 2px solid transparent; border-radius: 9px; padding: 0; background: none; overflow: hidden; opacity: .5; transition: opacity .2s, border-color .2s; }
.lnd-thumbs button:hover { opacity: .85; }
.lnd-thumbs button img { width: 100%; aspect-ratio: 1000/777; object-fit: cover; }
.lnd-thumbs button.on { border-color: var(--coral); opacity: 1; }

/* why + finish */
.lnd-why { max-width: 1180px; margin: 0 auto; padding: 64px 24px 10px; display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 20px; }
.lnd-why > div { border-radius: 30px; padding: 28px 26px 30px; position: relative; overflow: hidden; box-shadow: 0 10px 26px rgba(22,32,62,.06); }
.lnd-why > div::after { content: ""; position: absolute; width: 130px; height: 130px; border-radius: 50%; right: -40px; top: -44px; background: rgba(255,255,255,.55); }
.lnd-why b { font-family: var(--disp); font-weight: 600; font-size: 24px; letter-spacing: -.01em; color: var(--navy); display: block; margin-bottom: 8px; position: relative; }
.lnd-why p { margin: 0; color: #50537C; font-size: 16px; position: relative; }
.lnd-finish { max-width: 1180px; margin: 52px auto 0; padding: 0 24px 64px; }
.lnd-finish-in { background: linear-gradient(135deg, #FF7A59 0%, #F2583A 100%); border-radius: 38px; padding: 64px 24px; text-align: center; position: relative; overflow: hidden; box-shadow: 0 26px 60px rgba(255,107,74,.32); }
.lnd-finish-in::before { content: ""; position: absolute; width: 320px; height: 320px; border-radius: 50%; background: rgba(255,255,255,.15); right: -90px; top: -110px; }
.lnd-finish-in::after { content: ""; position: absolute; width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,.1); left: -60px; bottom: -80px; }
.lnd-finish h2 { font-family: var(--disp); font-weight: 600; font-size: 44px; line-height: 1.08; letter-spacing: -.02em; color: #fff; margin: 0 0 8px; position: relative; }
.lnd-finish p { margin: 0 0 26px; color: #FFE9E2; font-size: 18px; position: relative; }

@media (max-width: 860px) {
  .lnd-hero-in, .lnd-sample-in, .lnd-disc { grid-template-columns: 1fr; }
  .lnd-nav { padding: 10px 14px 0; }
  .lnd-pill { flex-wrap: wrap; border-radius: 28px; padding: 8px 8px 8px 16px; gap: 8px; }
  .lnd-links { order: 3; flex-basis: 100%; justify-content: center; overflow-x: auto; }
  .lnd-links button { padding: 7px 13px; font-size: 13.5px; white-space: nowrap; }
  .lnd-hero-in { padding: 44px 20px 30px; }
  .lnd-sample-in { padding: 48px 20px; }
  .lnd-disc { padding: 20px 20px 10px; }
  .lnd-sec-head, .lnd-rail { padding-left: 20px; padding-right: 20px; }
  .lnd-hero-h { font-size: 42px; }
  .lnd-hub { flex-basis: 78vw; }
  .lnd-sec-head h2, .lnd-sample h2, .lnd-finish h2, .lnd-disc-text h2 { font-size: 32px; }
}
@media (prefers-reduced-motion: reduce) { .lnd *, .lnd *::before { transition: none !important; } }
`;
