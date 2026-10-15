import { useRef, useState } from "react";

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

const slideSrc = (i) => `/landing/p${String(i + 1).padStart(2, "0")}.jpg`;

export default function LandingPage({ onSignUp, onLogin }) {
  const [slide, setSlide] = useState(0);
  const [discView, setDiscView] = useState("top");
  const railRef = useRef(null);
  const tryRef = useRef(null);
  const hubsRef = useRef(null);
  const currRef = useRef(null);
  const whyRef = useRef(null);
  const last = SLIDES.length - 1;

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
        <div className="lnd-nav-in">
          <div className="lnd-brand"><img src="/logo-sentenco.png" alt="" />entenco</div>
          <div className="lnd-links">
            <button type="button" onClick={() => goTo(hubsRef)}>Hubs</button>
            <button type="button" onClick={() => goTo(currRef)}>Curriculum</button>
            <button type="button" onClick={goTry}>Try a lesson</button>
            <button type="button" onClick={() => goTo(whyRef)}>Why join</button>
          </div>
          <button type="button" className="lnd-btn" onClick={onLogin}>Log in</button>
          <button type="button" className="lnd-btn lnd-dark" onClick={onSignUp}>Sign up</button>
        </div>
      </nav>

      <header className="lnd-hero">
        <div className="lnd-blob lnd-b1" /><div className="lnd-blob lnd-b2" /><div className="lnd-blob lnd-b3" />
        <div className="lnd-hero-in">
          <div>
            <div className="lnd-eyebrow">For ESL teachers</div>
            <h1 className="lnd-hero-h">Lessons ready for your class, <span>today.</span></h1>
            <p className="lnd-sub">Speaking, grammar, vocabulary, writing, reading and more. Kids, Teens and Adults, A1 to A2.</p>
            <div className="lnd-cta-row">
              <button type="button" className="lnd-btn lnd-big" onClick={onSignUp}>Sign up free</button>
              <button type="button" className="lnd-btn lnd-soft" onClick={goTry}>Try a sample lesson</button>
            </div>
            <p className="lnd-fine">No card needed. 7-day Pro trial when you sign up.</p>
          </div>
          <div className="lnd-collage" aria-hidden="true">
            <img className="lnd-c1" src="/landing/hub-grammar.jpg" alt="" />
            <img className="lnd-c2" src="/landing/hub-writing.jpg" alt="" />
            <img className="lnd-c3" src="/landing/hub-speaking.jpg" alt="" />
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
              <div className="lnd-shot"><img src={`/landing/hub-${h.key}.jpg`} alt={`${h.name} hub`} loading="lazy" /></div>
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
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&family=Quicksand:wght@500;600;700&display=swap');
.lnd {
  --coral: #FF6B4A; --coral-dark: #E8573A; --navy: #1B2A4A; --ink: #2B2A4A; --muted: #6B6E96;
  --cream: #FFF8F1; --line: #EDE6DD;
  --peach: #FFE3D6; --lilac: #E9E4FF; --mint: #DDF3E6; --butter: #FFF0C2; --sky: #DCEBFF; --pink: #FFE0EC;
  --head: 'Fredoka', system-ui, sans-serif; --body: 'Quicksand', system-ui, sans-serif;
  background: var(--cream); color: var(--ink); font-family: var(--body); line-height: 1.5; width: 100%; overflow-x: hidden;
}
.lnd *, .lnd *::before, .lnd *::after { box-sizing: border-box; }
.lnd button { font-family: inherit; cursor: pointer; }
.lnd button:focus-visible { outline: 3px solid #FFB4A2; outline-offset: 3px; }
.lnd img { display: block; }

.lnd-nav { position: sticky; top: 0; z-index: 20; background: rgba(255,248,241,.93); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line); }
.lnd-nav-in { max-width: 1180px; margin: 0 auto; padding: 12px 24px; display: flex; align-items: center; gap: 10px; }
.lnd-brand { display: flex; align-items: center; font-family: var(--head); font-weight: 700; font-size: 24px; color: var(--navy); margin-right: auto; }
.lnd-brand img { height: 32px; width: auto; margin-right: -7px; }
.lnd-links { display: flex; gap: 4px; margin-right: 14px; }
.lnd-links button { border: 0; background: transparent; font: 700 14px var(--body); color: var(--ink); padding: 8px 14px; border-radius: 999px; }
.lnd-links button:hover { background: var(--peach); }
.lnd-btn.lnd-dark { background: var(--navy); color: #fff; }
.lnd-section, .lnd-sample, .lnd-why { scroll-margin-top: 64px; }
.lnd-btn { font: 700 14px var(--body); border-radius: 999px; padding: 9px 20px; border: 2px solid var(--navy); background: #fff; color: var(--navy); }
.lnd-btn.lnd-big { font: 600 17px var(--head); padding: 14px 30px; border-color: var(--coral); background: var(--coral); color: #fff; box-shadow: 0 6px 0 var(--coral-dark); transition: transform .12s, box-shadow .12s; }
.lnd-btn.lnd-big:hover { transform: translateY(2px); box-shadow: 0 4px 0 var(--coral-dark); }
.lnd-btn.lnd-soft { font: 700 16px var(--body); padding: 13px 26px; background: transparent; }
.lnd-btn.lnd-white { background: #fff; color: var(--coral-dark); border-color: #fff; font: 600 17px var(--head); padding: 14px 32px; position: relative; }

.lnd-hero { position: relative; overflow: hidden; }
.lnd-hero-in { max-width: 1180px; margin: 0 auto; padding: 56px 24px 36px; display: grid; grid-template-columns: 1fr 1.05fr; gap: 40px; align-items: center; position: relative; z-index: 1; }
.lnd-blob { position: absolute; border-radius: 50%; z-index: 0; }
.lnd-b1 { width: 420px; height: 420px; background: var(--peach); right: -110px; top: -120px; }
.lnd-b2 { width: 260px; height: 260px; background: var(--lilac); left: -90px; bottom: -60px; }
.lnd-b3 { width: 120px; height: 120px; background: var(--butter); left: 46%; top: 30px; }
.lnd-eyebrow { font: 700 12px var(--body); letter-spacing: .14em; text-transform: uppercase; color: var(--coral-dark); }
.lnd-hero-h { font-family: var(--head); font-weight: 600; font-size: 56px; line-height: 1.04; margin: 10px 0 14px; color: var(--navy); }
.lnd-hero-h span { color: var(--coral); }
.lnd-sub { font-size: 19px; color: var(--muted); max-width: 44ch; margin: 0 0 26px; }
.lnd-cta-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
.lnd-fine { font-size: 13.5px; color: var(--muted); margin: 16px 0 0; }
.lnd-collage { position: relative; height: 380px; }
.lnd-collage img { position: absolute; width: 64%; border-radius: 20px; border: 4px solid #fff; box-shadow: 0 18px 40px rgba(27,42,74,.2); }
.lnd-c1 { left: 0; top: 30px; transform: rotate(-5deg); }
.lnd-c2 { right: 0; top: 0; transform: rotate(4deg); }
.lnd-c3 { left: 20%; bottom: 0; transform: rotate(-1.5deg); width: 60%; }

.lnd-section { max-width: 1180px; margin: 0 auto; padding: 54px 0 14px; }
.lnd-sec-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; padding: 0 24px; margin-bottom: 18px; flex-wrap: wrap; }
.lnd-chip { display: inline-block; font: 700 12px var(--body); letter-spacing: .1em; text-transform: uppercase; border-radius: 999px; padding: 5px 12px; background: var(--navy); color: #fff; }
.lnd-chip.lnd-coral { background: var(--coral); }
.lnd-sec-head h2 { font-family: var(--head); font-weight: 600; font-size: 36px; line-height: 1.1; margin: 10px 0 4px; color: var(--navy); }
.lnd-sec-head p { margin: 0; color: var(--muted); font-size: 16.5px; max-width: 52ch; }
.lnd-arrows { display: flex; gap: 8px; }
.lnd-arrows button { width: 46px; height: 46px; border-radius: 50%; border: 2px solid var(--navy); background: #fff; color: var(--navy); font: 700 20px var(--body); display: grid; place-items: center; padding: 0; transition: background .15s; }
.lnd-arrows button:hover { background: var(--navy); color: #fff; }
.lnd-rail { display: flex; gap: 18px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 6px 24px 26px; scrollbar-width: thin; scrollbar-color: #D9CFC4 transparent; }
.lnd-rail::-webkit-scrollbar { height: 8px; }
.lnd-rail::-webkit-scrollbar-thumb { background: #D9CFC4; border-radius: 8px; }
.lnd-hub { flex: 0 0 330px; scroll-snap-align: start; border-radius: 28px; padding: 12px 12px 16px; transition: transform .2s; }
.lnd-hub:hover { transform: translateY(-4px) rotate(-.6deg); }
.lnd-shot { border-radius: 18px; overflow: hidden; background: #fff; border: 2px solid #fff; }
.lnd-shot img { width: 100%; height: auto; }
.lnd-hub b { display: block; font-family: var(--head); font-weight: 600; font-size: 22px; color: var(--navy); margin: 14px 8px 0; }
.lnd-hub span { display: block; margin: 2px 8px 0; font-size: 14.5px; color: #55587F; }
.lnd-t-peach { background: var(--peach); } .lnd-t-lilac { background: var(--lilac); } .lnd-t-mint { background: var(--mint); }
.lnd-t-butter { background: var(--butter); } .lnd-t-sky { background: var(--sky); } .lnd-t-pink { background: var(--pink); }

.lnd-disc { display: grid; grid-template-columns: .8fr 1.4fr; gap: 40px; align-items: center; padding: 20px 24px 10px; }
.lnd-disc > * { min-width: 0; }
.lnd-disc-text h2 { font-family: var(--head); font-weight: 600; font-size: 38px; line-height: 1.1; margin: 12px 0 10px; color: var(--navy); }
.lnd-disc-text p { margin: 0 0 16px; color: var(--muted); font-size: 17px; }
.lnd-ticks { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.lnd-ticks li { position: relative; padding-left: 34px; font-weight: 700; color: var(--ink); }
.lnd-ticks li::before { content: ""; position: absolute; left: 0; top: 2px; width: 22px; height: 22px; border-radius: 50%; background: var(--coral); }
.lnd-ticks li::after { content: ""; position: absolute; left: 7px; top: 7px; width: 5px; height: 9px; border: solid #fff; border-width: 0 2.5px 2.5px 0; transform: rotate(45deg); }
.lnd-disc-view { background: var(--peach); border-radius: 30px; padding: 16px; }
.lnd-seg { display: flex; gap: 4px; background: #F4EEE6; border-radius: 999px; padding: 4px; margin: 0 0 14px; max-width: 340px; }
.lnd-seg button { flex: 1; border: 0; background: transparent; border-radius: 999px; padding: 9px 12px; font: 700 13.5px var(--body); color: var(--muted); }
.lnd-seg button.on { background: #fff; color: var(--navy); box-shadow: 0 2px 8px rgba(27,42,74,.12); }
.lnd-disc-frame { background: #fff; border-radius: 18px; padding: 10px; border: 2px solid #fff; box-shadow: 0 14px 34px rgba(27,42,74,.14); }
.lnd-disc-frame img { width: 100%; border-radius: 10px; border: 1px solid var(--line); aspect-ratio: 900/690; object-fit: cover; object-position: top; }

.lnd-sample { background: var(--navy); color: #fff; margin-top: 40px; position: relative; overflow: hidden; }
.lnd-sample-blob { background: rgba(255,255,255,.05); width: 380px; height: 380px; right: -120px; top: -130px; }
.lnd-sample-in { max-width: 1180px; margin: 0 auto; padding: 60px 24px; display: grid; grid-template-columns: .75fr 1.5fr; gap: 44px; align-items: center; position: relative; z-index: 1; }
.lnd-sample-in > * { min-width: 0; }
.lnd-sample h2 { font-family: var(--head); font-weight: 600; font-size: 38px; line-height: 1.1; margin: 10px 0 10px; color: #fff; }
.lnd-sample-sub { color: #C9D0E4; font-size: 17px; margin: 0 0 18px; }
.lnd-pills { display: flex; gap: 8px; flex-wrap: wrap; }
.lnd-pills span { background: rgba(255,255,255,.12); border-radius: 999px; padding: 6px 14px; font-weight: 700; font-size: 14px; }
.lnd-device { background: #0F1A33; border-radius: 24px; padding: 12px; box-shadow: 0 26px 60px rgba(0,0,0,.4); }
.lnd-screen { position: relative; border-radius: 30px; overflow: hidden; background: #fff; aspect-ratio: 1000/777; }
.lnd-screen img { width: 100%; height: 100%; object-fit: cover; }
.lnd-zone { position: absolute; bottom: 2%; height: 11%; background: transparent; border: 0; padding: 0; }
.lnd-zl { left: 5%; width: 17%; } .lnd-zr { right: 4%; width: 19%; }
.lnd-zone:disabled { cursor: default; }
.lnd-pcap { margin: 14px 4px 0; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
.lnd-pcap p { margin: 0; font-weight: 700; font-size: 15px; flex: 1 1 240px; color: #fff; }
.lnd-pbtn { display: flex; gap: 8px; align-items: center; }
.lnd-pbtn button { border: 0; border-radius: 999px; padding: 10px 20px; font: 700 14px var(--body); background: rgba(255,255,255,.14); color: #fff; }
.lnd-pbtn button.lnd-next { background: var(--coral); box-shadow: 0 4px 0 var(--coral-dark); }
.lnd-pbtn button:disabled { opacity: .4; cursor: default; }
.lnd-pcount { font-weight: 700; font-size: 13px; color: #C9D0E4; min-width: 58px; text-align: center; }
.lnd-thumbs { display: flex; gap: 8px; margin-top: 12px; overflow-x: auto; padding-bottom: 6px; scrollbar-width: thin; }
.lnd-thumbs button { flex: 0 0 78px; border: 2px solid transparent; border-radius: 8px; padding: 0; background: none; overflow: hidden; opacity: .55; }
.lnd-thumbs button img { width: 100%; aspect-ratio: 1000/777; object-fit: cover; }
.lnd-thumbs button.on { border-color: var(--coral); opacity: 1; }

.lnd-why { max-width: 1180px; margin: 0 auto; padding: 56px 24px 10px; display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 18px; }
.lnd-why > div { border-radius: 24px; padding: 22px; }
.lnd-why b { font-family: var(--head); font-weight: 600; font-size: 21px; color: var(--navy); display: block; margin-bottom: 6px; }
.lnd-why p { margin: 0; color: #55587F; font-size: 15.5px; }
.lnd-finish { max-width: 1180px; margin: 44px auto 0; padding: 0 24px 60px; }
.lnd-finish-in { background: var(--coral); border-radius: 34px; padding: 54px 24px; text-align: center; position: relative; overflow: hidden; }
.lnd-finish-in::before { content: ""; position: absolute; width: 300px; height: 300px; border-radius: 50%; background: rgba(255,255,255,.14); right: -80px; top: -100px; }
.lnd-finish h2 { font-family: var(--head); font-weight: 600; font-size: 38px; color: #fff; margin: 0 0 6px; position: relative; }
.lnd-finish p { margin: 0 0 22px; color: #FFE9E2; font-size: 17px; position: relative; }

@media (max-width: 860px) {
  .lnd-hero-in, .lnd-sample-in, .lnd-disc { grid-template-columns: 1fr; }
  .lnd-nav-in { flex-wrap: wrap; padding: 10px 18px; gap: 8px; }
  .lnd-links { order: 3; flex-basis: 100%; justify-content: center; margin-right: 0; gap: 2px; }
  .lnd-links button { padding: 6px 12px; font-size: 13.5px; }
  .lnd-hero-in { padding: 40px 20px 30px; }
  .lnd-sample-in { padding: 44px 20px; }
  .lnd-disc { padding: 20px 20px 10px; }
  .lnd-sec-head, .lnd-rail { padding-left: 20px; padding-right: 20px; }
  .lnd-hero-h { font-size: 40px; }
  .lnd-collage { height: 310px; }
  .lnd-hub { flex-basis: 78vw; }
  .lnd-sec-head h2, .lnd-sample h2, .lnd-finish h2, .lnd-disc-text h2 { font-size: 30px; }
}
@media (prefers-reduced-motion: reduce) { .lnd *, .lnd *::before { transition: none !important; } }
`;
