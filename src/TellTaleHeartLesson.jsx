import React, { useContext } from "react";
import { UnseenPlayer, UCover } from "./unseenKit.jsx";
import { ScoreCtx, useStore, LETTERS } from "./e8Kit.jsx";

// The Tell-Tale Heart (adapted for ESL): a mystery lesson, one-to-one, teacher-led. Teens 12 to 17, A2 to B1.
// Order: the eerie question, today's line, vocabulary, vocabulary check, the adapted story (four scenes),
// probing questions, "is he really insane?", follow-up questions, the end.
// The story text is the teacher's own adapted version, word for word. Pictures are the teacher's too: put a file path in PICS
// (for example "/curriculum/tell-tale-heart/scene-1.jpg") and it appears; an empty string shows no picture.

// pos = which part of the picture stays visible when it is cropped into a wide strip.
const PICS = {
  eerie: { src: "/curriculum/tell-tale-heart/eerie.jpg", pos: "center 74%" },
  eye: { src: "/curriculum/tell-tale-heart/scene-1-eye.jpg", pos: "center 50%" },
  night: { src: "/curriculum/tell-tale-heart/scene-2-night.jpg", pos: "center 50%" },
  police: { src: "/curriculum/tell-tale-heart/scene-3-police.jpg", pos: "center 30%" },
  sound: { src: "/curriculum/tell-tale-heart/scene-4-sound.jpg", pos: "center 24%" },
};

function Pic({ pic, tall }) {
  if (!pic || !pic.src) return null;
  return <div className={`tt-art ${tall ? "tt-art--tall" : ""}`}><img src={pic.src} alt="" style={{ objectPosition: pic.pos }} /></div>;
}

/* ---------------------------- 1. the eerie question ---------------------------- */

const CHOICES = [
  { label: "Investigate", text: "You kneel and press your ear to the boards. Thump... thump... It is louder now. The sound is coming from right under your hands." },
  { label: "Run away", text: "You run for the door and down the stairs. The sound gets softer, softer... or is it only your own heart you can hear?" },
  { label: "Call for help", text: "A calm voice says, “Stay where you are. Tell me what you hear.” Thump... thump... “Wait,” says the voice. “Is that coming from the floor, or from you?”" },
];

function Mystery() {
  const [pick, setPick] = useStore("mys", null);
  return (
    <div className={`tt-mystery ${PICS.eerie.src ? "has-pic" : ""}`}>
      <Pic pic={PICS.eerie} tall />
      <p className="tt-eerie">Imagine you hear a heartbeat coming from underneath your floor. What would you do?</p>
      <div className="tt-choices">
        {CHOICES.map((c, i) => (
          <button key={c.label} type="button" className={`tt-choice ${pick === i ? "is-on" : ""}`} onClick={() => setPick(i)}>{c.label}</button>
        ))}
      </div>
      <div className="tt-reveal-box">
        {pick === null ? <span className="tt-hint">Choose one to find out what happens.</span> : (
          <>
            <p>{CHOICES[pick].text}</p>
            <button type="button" className="tt-link" onClick={() => setPick(null)}>Choose again</button>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------------------------- 2. today's line ---------------------------- */

function TodayLine() {
  return (
    <div className="tt-today">
      <p>Today, we're going to read about a man who hears something very strange.</p>
    </div>
  );
}

/* ---------------------------- 3. vocabulary and the check ---------------------------- */

const WORDS = [
  { w: "Obsessed", m: "Unable to stop thinking about something" },
  { w: "Murder", m: "To kill someone intentionally" },
  { w: "Heartbeat", m: "The sound or movement of a beating heart" },
  { w: "Guilt", m: "Feeling bad about something wrong you did" },
  { w: "Confess", m: "To admit doing something wrong" },
];

function VocabTable() {
  return (
    <div className="tt-vocab">
      <span className="un-eyebrow">Before we read</span>
      <h2 className="un-h2">Vocabulary to fully understand the story</h2>
      <div className="tt-vtable" role="table" aria-label="Vocabulary">
        <div className="tt-vrow tt-vrow--head" role="row"><span role="columnheader">Word</span><span role="columnheader">Simple meaning</span></div>
        {WORDS.map((x) => (
          <div key={x.w} className="tt-vrow" role="row"><b role="cell">{x.w}</b><span role="cell">{x.m}</span></div>
        ))}
      </div>
    </div>
  );
}

const VQ = [
  { q: "Tom thinks about chess all day and cannot stop. He is ___ with chess.", options: ["obsessed", "heartbeat", "confess"], correct: 0, why: "Obsessed means unable to stop thinking about something." },
  { q: "Which word means “to kill someone intentionally”?", options: ["guilt", "murder", "confess"], correct: 1, why: "Murder means to kill someone intentionally." },
  { q: "You put your hand on your chest and feel a steady beat. What are you feeling?", options: ["your heartbeat", "your guilt", "your murder"], correct: 0, why: "A heartbeat is the sound or movement of a beating heart." },
  { q: "She broke her friend’s phone, and she feels bad about it. What is that feeling?", options: ["obsessed", "heartbeat", "guilt"], correct: 2, why: "Guilt is feeling bad about something wrong you did." },
  { q: "He told his teacher, “I did it. It was me.” He decided to ___.", options: ["confess", "murder", "obsess"], correct: 0, why: "To confess is to admit doing something wrong." },
];

function VocabChallenge() {
  const { report } = useContext(ScoreCtx);
  const [st, setSt] = useStore("vq", { i: 0, picks: VQ.map(() => null) });
  const i = st.i;
  if (i >= VQ.length) {
    const got = st.picks.filter((p, k) => p === VQ[k].correct).length;
    return (
      <div className="tt-quiz tt-quiz--done">
        <div className="tt-bigscore"><span>{got}</span><small>out of {VQ.length}</small></div>
        <p className="tt-big">{got === VQ.length ? "All five words unlocked." : "Good work. Look at the words again if you need to."}</p>
        <button type="button" className="tt-btn" onClick={() => setSt({ i: 0, picks: VQ.map(() => null) })}>Try the check again</button>
      </div>
    );
  }
  const item = VQ[i];
  const picked = st.picks[i];
  const checked = picked !== null;
  const pick = (k) => {
    if (checked) return;
    setSt((s) => ({ ...s, picks: s.picks.map((p, n) => (n === i ? k : p)) }));
    report(`vq-${i + 1}`, k === item.correct);
  };
  return (
    <div className="tt-quiz">
      <div className="tt-progress" aria-label={`Question ${i + 1} of ${VQ.length}`}>
        {VQ.map((_, k) => <span key={k} className={`tt-pdot ${k < i ? "is-done" : k === i ? "is-now" : ""}`} />)}
        <small>Question {i + 1} of {VQ.length}</small>
      </div>
      <p className="tt-qtext">{item.q}</p>
      <div className="tt-opts">
        {item.options.map((o, k) => {
          let cls = "";
          if (checked) cls = k === item.correct ? "is-correct" : k === picked ? "is-wrong" : "is-dim";
          return (
            <button key={o} type="button" className={`tt-opt ${cls}`} disabled={checked} onClick={() => pick(k)}>
              <span className="tt-opt-letter">{LETTERS[k]}</span><span>{o}</span>
            </button>
          );
        })}
      </div>
      <div className="tt-qfoot">
        {checked && (
          <>
            <div className={`tt-why ${picked === item.correct ? "is-ok" : "is-bad"}`}><b>{picked === item.correct ? "Correct." : `The answer is ${LETTERS[item.correct]}.`}</b> {item.why}</div>
            <button type="button" className="tt-btn" onClick={() => setSt((s) => ({ ...s, i: s.i + 1 }))}>{i === VQ.length - 1 ? "See my score" : "Next question"}</button>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------------------------- 4. the story ---------------------------- */

// The reading text is the teacher's exact adapted story. Only the grouping into scenes and lines is ours; no wording is changed.
const SCENES = {
  eye: {
    kicker: "Adapted story · Scene 1 of 4", title: "The Eye", pic: PICS.eye,
    lines: [
      "A man lived with an old man.",
      "He liked the old man, but he hated one thing about him: his strange, pale-blue eye.",
    ],
  },
  night: {
    kicker: "Adapted story · Scene 2 of 4", title: "The Night", pic: PICS.night,
    lines: [
      "Every night, the narrator secretly watched the old man while he slept.",
      "One night, the old man woke up.",
      "The narrator became frightened and angry.",
      "He killed the old man and hid his body under the wooden floor.",
    ],
  },
  police: {
    kicker: "Adapted story · Scene 3 of 4", title: "The Police", pic: PICS.police,
    lines: [
      "Later, the police arrived because a neighbor had heard a scream.",
      "The narrator smiled and invited them inside.",
      "He believed they would never discover his secret.",
      "But suddenly, he heard a sound.",
    ],
  },
  sound: {
    kicker: "Adapted story · Scene 4 of 4", title: "The Sound", pic: PICS.sound, beat: true,
    lines: [
      "Thump... thump... thump...",
      "It sounded like a heartbeat. The sound grew louder and louder.",
      "The narrator became terrified. He thought the police could hear it too.",
      "Finally, he shouted, \"I killed him! His body is under the floor!\"",
      "But was the heartbeat real, or was it only in his mind?",
    ],
  },
};

function Scene({ id }) {
  const sc = SCENES[id];
  const [n, setN] = useStore("sc-" + id, 1);
  const done = n >= sc.lines.length;
  return (
    <div className={`tt-scene ${sc.beat ? "is-beat" : ""} ${sc.pic && sc.pic.src ? "has-pic" : ""}`}>
      <Pic pic={sc.pic} />
      <div className="tt-textcard">
        <div className="tt-texthead">
          <span className="un-eyebrow">{sc.kicker}</span>
          <h2>{sc.title}</h2>
        </div>
        <div className="tt-lines">
          {sc.lines.slice(0, n).map((l, k) => <p key={k} className={`${k === n - 1 && n > 1 ? "is-new" : ""} ${l.startsWith("Thump") ? "is-thump" : ""}`}>{l}</p>)}
        </div>
        <div className="tt-textfoot">
          {!done ? (
            <>
              <button type="button" className="tt-btn tt-btn--small" onClick={() => setN(n + 1)}>Reveal the next line</button>
              <button type="button" className="tt-link" onClick={() => setN(sc.lines.length)}>Show all</button>
            </>
          ) : <span className="tt-end">End of the scene. Press Next.</span>}
          {n > 1 && <button type="button" className="tt-link tt-push" onClick={() => setN(1)}>Start the scene again</button>}
        </div>
        <small className="tt-credit">Adapted for ESL instruction; not Poe&rsquo;s original text.</small>
      </div>
    </div>
  );
}

/* ---------------------------- 5. probing questions ---------------------------- */

const CASES = [
  {
    id: "cf-1", title: "The Motive",
    q: "Why did the narrator kill the old man?",
    options: ["He wanted the old man’s money.", "He hated the old man’s strange, pale-blue eye.", "The old man was cruel to him."],
    correct: 1,
    explain: "The text says he liked the old man, but he hated one thing about him: his strange, pale-blue eye. Nothing says the old man took anything or was cruel. The eye was the reason, and that is what makes the story so strange.",
  },
  {
    id: "cf-2", title: "The Confession",
    q: "Why did the narrator suddenly confess?",
    options: ["The police found the body under the floor.", "He heard the sound and thought the police could hear it too.", "The old man’s family arrived at the house."],
    correct: 1,
    explain: "He believed the police would never discover his secret. Then the sound grew louder and louder, he became terrified, and he thought they could hear it too. Nobody found the body: he told them himself.",
  },
  {
    id: "cf-3", title: "The Heartbeat",
    q: "What might the heartbeat symbolize?",
    options: ["The old man is still alive.", "The narrator’s guilt, which he cannot escape.", "The sound of a clock in the room."],
    correct: 1,
    explain: "The story ends by asking whether the heartbeat was real or only in his mind. Many readers think it shows the narrator’s guilt: a feeling he cannot escape, and it grows louder and louder.",
  },
];

function CaseFile({ c, n }) {
  const { report, results } = useContext(ScoreCtx);
  const [picked, setPicked] = useStore("cf-pick-" + c.id, null);
  const checked = picked !== null;
  const pick = (k) => { if (checked) return; setPicked(k); report(c.id, k === c.correct); };
  return (
    <div className="tt-case">
      <aside className="tt-folder">
        <span className="tt-tab">Question {n}</span>
        <b>{c.title}</b>
        <small>Think, then choose</small>
      </aside>
      <div className="tt-casemain">
        <div className="tt-progress" aria-label={`Question ${n} of ${CASES.length}`}>
          {CASES.map((x, k) => {
            const r = results[x.id];
            return <span key={x.id} className={`tt-chip ${k === n - 1 ? "is-now" : ""} ${r === true ? "is-ok" : r === false ? "is-bad" : ""}`}>Question {k + 1}{r === true ? " ✓" : r === false ? " ✗" : ""}</span>;
          })}
        </div>
        <p className="tt-qtext">{c.q}</p>
        <div className="tt-opts">
          {c.options.map((o, k) => {
            let cls = "";
            if (checked) cls = k === c.correct ? "is-correct" : k === picked ? "is-wrong" : "is-dim";
            return (
              <button key={o} type="button" className={`tt-opt ${cls}`} disabled={checked} onClick={() => pick(k)}>
                <span className="tt-opt-letter">{LETTERS[k]}</span><span>{o}</span>
              </button>
            );
          })}
        </div>
        <div className="tt-qfoot">
          {checked && (
            <>
              <div className={`tt-why ${picked === c.correct ? "is-ok" : "is-bad"}`}><b>{picked === c.correct ? "That is right." : `The answer is ${LETTERS[c.correct]}.`}</b> {c.explain}</div>
              <button type="button" className="tt-link" onClick={() => setPicked(null)}>Try this question again</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- 6. is he really insane? and follow-up ---------------------------- */

const POSITIONS = [
  { k: "disturbed", label: "He was mentally disturbed.", hint: "Evidence you could use: he hated one small thing, the eye, so much that he killed for it, and the sound may have been only in his mind." },
  { k: "guilt", label: "He was overwhelmed by guilt.", hint: "Evidence you could use: he smiled and felt safe, but the sound grew louder and louder, and he shouted the truth." },
  { k: "both", label: "I'm not sure. It could be both.", hint: "Evidence you could use: a person can be troubled and also feel guilty. One idea does not cancel the other." },
];
const STARTERS = ["I believe the narrator was... because...", "One piece of evidence is...", "In my opinion...", "I disagree because..."];

function Debate() {
  const [pos, setPos] = useStore("deb", null);
  return (
    <div className="tt-debate">
      <p className="tt-big">Was the narrator mentally disturbed, or was he simply overwhelmed by guilt?</p>
      <div className="tt-pos">
        {POSITIONS.map((p, i) => (
          <button key={p.k} type="button" className={`tt-posbtn ${pos === i ? "is-on" : ""}`} onClick={() => setPos(pos === i ? null : i)} aria-pressed={pos === i}>{p.label}</button>
        ))}
      </div>
      <div className="tt-debatebox">
        {pos === null ? <span className="tt-hint">Choose a position, then explain your reasons out loud.</span> : <p className="tt-hintp">{POSITIONS[pos].hint}</p>}
        <div className="tt-starters">
          {STARTERS.map((s) => <span key={s} className="tt-starter">{s}</span>)}
        </div>
      </div>
    </div>
  );
}

const FQ = [
  "Can guilt make someone hear or imagine things?",
  "Do you think the police already suspected him?",
  "Would he have confessed if he had not heard the heartbeat?",
];

function FollowUp() {
  const [done, setDone] = useStore("fq", [false, false, false]);
  const toggle = (i) => setDone((d) => d.map((v, k) => (k === i ? !v : v)));
  return (
    <div className="tt-discuss">
      <span className="un-eyebrow">Keep talking</span>
      <h2 className="un-h2">Follow-up questions</h2>
      <div className="tt-dq-list">
        {FQ.map((q, i) => (
          <button key={q} type="button" className={`tt-dq ${done[i] ? "is-done" : ""}`} onClick={() => toggle(i)} aria-pressed={done[i]}>
            <span className="tt-dq-n">{done[i] ? "✓" : i + 1}</span><span>{q}</span>
          </button>
        ))}
      </div>
      <button type="button" className="tt-link" onClick={() => setDone([false, false, false])}>Reset</button>
    </div>
  );
}

/* ---------------------------- 7. the end ---------------------------- */

function TheEnd() {
  const { results } = useContext(ScoreCtx);
  const sum = (ids) => ids.filter((id) => results[id] === true).length;
  const vq = sum(VQ.map((_, i) => `vq-${i + 1}`));
  const cf = sum(CASES.map((c) => c.id));
  return (
    <div className="tt-end-card">
      <div className="tt-endbadge" aria-hidden="true">{"✓"}</div>
      <h2 className="tt-end-h">You finished The Tell-Tale Heart</h2>
      <div className="tt-scores">
        <div><small>Vocabulary check</small><b>{vq}/{VQ.length}</b></div>
        <div><small>Probing questions</small><b>{cf}/{CASES.length}</b></div>
      </div>
    </div>
  );
}

/* ---------------------------- the lesson ---------------------------- */

const SLIDES = [
  {
    stage: "A mystery lesson", title: true,
    note: "One-to-one. The student does most of the thinking and speaking. Click Teacher guide on any page for a short tip. Nothing needs the internet except the fonts.",
    body: <UCover title="The Tell-Tale Heart" module="A MYSTERY LESSON" />,
  },
  {
    stage: "The Eerie Question",
    note: "Read the question aloud and pause. Let the student pick, read the short reply together, then ask: why did you choose that?",
    body: <Mystery />,
  },
  {
    stage: "Today’s Story",
    note: "Read it slowly and quietly, like a trailer. Ask: what do you think the strange thing is? Then move on.",
    body: <TodayLine />,
  },
  {
    stage: "Vocabulary",
    note: "Read each word and its simple meaning together. Ask the student to say the word back. The next page checks all five.",
    body: <VocabTable />,
  },
  {
    stage: "Vocabulary Check",
    note: "Five quick questions, one for each word. The student chooses, you read the feedback together. Use Try again if there is time.",
    body: <VocabChallenge />,
  },
  {
    stage: "The Story · Scene 1 of 4",
    note: "The reading text is the exact adapted story. Let the student read each line aloud as it appears. Help with pronunciation only.",
    body: <Scene id="eye" />,
  },
  {
    stage: "The Story · Scene 2 of 4",
    note: "Read with a quieter voice. If the student asks about the killing, say: we will talk about why in a moment.",
    body: <Scene id="night" />,
  },
  {
    stage: "The Story · Scene 3 of 4",
    note: "Stop at \"But suddenly, he heard a sound\" and ask: what sound? Then go on to the last scene.",
    body: <Scene id="police" />,
  },
  {
    stage: "The Story · Scene 4 of 4",
    note: "Read a little faster as the sound grows. The card pulses like a heartbeat. End on the last question and leave a pause.",
    body: <Scene id="sound" />,
  },
  {
    stage: "Probing Questions",
    note: "Let the student choose, then read the explanation together. Ask them to point to the line in the story.",
    body: <CaseFile c={CASES[0]} n={1} />,
  },
  {
    stage: "Probing Questions",
    note: "Ask: did the police know? What made him break?",
    body: <CaseFile c={CASES[1]} n={2} />,
  },
  {
    stage: "Probing Questions",
    note: "This question introduces the idea of guilt. After the answer, ask the student to use the word guilt in a sentence.",
    body: <CaseFile c={CASES[2]} n={3} />,
  },
  {
    stage: "Is He Really Insane?",
    note: "Be neutral. All three positions are fine if the student gives a reason. Use the sentence starters. Remember that mental illness does not make people violent: we are only discussing a character in a story.",
    body: <Debate />,
  },
  {
    stage: "Follow-Up Questions",
    note: "Pick one or two questions if time is short. Tap a question to tick it off.",
    body: <FollowUp />,
  },
  {
    stage: "The End",
    note: "Give feedback on one thing the student did well. The scores show the vocabulary check and the probing questions.",
    body: <TheEnd />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

const EXTRA_CSS = `
.tt-art { border-radius: 16px; overflow: hidden; background: #0E1830; box-shadow: 0 8px 20px rgba(27,42,74,0.25); width: 100%; height: 172px; flex: none; }
.tt-art--tall { height: 176px; }
.tt-art img { display: block; width: 100%; height: 100%; object-fit: cover; }

@keyframes tthCard { 0%,100% { box-shadow: 0 0 0 0 rgba(255,107,74,0); } 12% { box-shadow: 0 0 0 7px rgba(255,107,74,0.30); } 36% { box-shadow: 0 0 0 3px rgba(255,107,74,0.18); } }
@keyframes tthFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .tt-scene.is-beat .tt-textcard, .tt-lines p.is-new { animation: none; } }

.tt-big { margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 26px; line-height: 1.3; color: #1B2A4A; text-align: center; text-wrap: balance; }
.tt-hint { font-size: 14.5px; font-weight: 700; color: #6B7899; }
.tt-link { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: #6B7899; background: none; border: none; text-decoration: underline; cursor: pointer; padding: 4px 6px; }
.tt-link:hover { color: #1B2A4A; }
.tt-push { margin-left: auto; }
.tt-btn { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 14.5px; background: #1B2A4A; color: #fff; border: none; border-radius: 12px; padding: 11px 24px; cursor: pointer; }
.tt-btn--small { font-size: 13px; padding: 8px 18px; border-radius: 999px; background: #FF6B4A; }

.tt-mystery { width: 100%; max-width: 860px; display: flex; flex-direction: column; align-items: center; gap: 16px; }
.tt-eerie { margin: 0; width: 100%; background: #1B2A4A; color: #FEF6E6; border-radius: 22px; padding: 30px 40px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 31px; line-height: 1.3; text-align: center; text-wrap: balance; box-shadow: 0 10px 24px rgba(27,42,74,0.28); }
.tt-choices { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.tt-choice { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 18px; color: #1B2A4A; background: #fff; border: 2px solid #DCE2F0; border-radius: 14px; padding: 9px 28px; cursor: pointer; }
.tt-choice:hover { border-color: #9AA6C4; }
.tt-choice.is-on { background: #FF6B4A; border-color: #FF6B4A; color: #fff; }
.tt-reveal-box { width: 100%; min-height: 92px; background: rgba(255,255,255,0.95); border: 1px solid #EBDFD0; border-radius: 16px; padding: 14px 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-align: center; }
.tt-reveal-box p { margin: 0; color: #1B2A4A; font-size: 17px; font-weight: 600; line-height: 1.5; animation: tthFade .35s ease; }

.tt-today { width: 100%; max-width: 760px; background: #1B2A4A; border-radius: 24px; padding: 48px 56px; text-align: center; box-shadow: 0 10px 24px rgba(27,42,74,0.3); }
.tt-today p { margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 38px; line-height: 1.3; color: #FEF6E6; text-wrap: balance; }

.tt-vocab { width: 100%; max-width: 820px; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.tt-vtable { width: 100%; display: flex; flex-direction: column; gap: 9px; margin-top: 6px; }
.tt-vrow { display: grid; grid-template-columns: 220px minmax(0, 1fr); align-items: center; gap: 18px; background: rgba(255,255,255,0.95); border: 1px solid #EBDFD0; border-radius: 16px; padding: 12px 22px; }
.tt-vrow b { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; color: #1B2A4A; line-height: 1.1; }
.tt-vrow span { font-size: 18px; font-weight: 700; color: #33415E; line-height: 1.35; }
.tt-vrow--head { background: #1B2A4A; border-color: #1B2A4A; padding: 8px 22px; }
.tt-vrow--head span { font-size: 12.5px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: #FFD36E; }

.tt-discuss { width: 100%; max-width: 760px; display: flex; flex-direction: column; align-items: center; gap: 10px; }
.tt-dq-list { width: 100%; display: flex; flex-direction: column; gap: 12px; margin: 6px 0 2px; }
.tt-dq { display: flex; align-items: center; gap: 16px; text-align: left; font-family: 'Baloo 2', sans-serif; font-weight: 600; font-size: 22px; color: #1B2A4A; background: rgba(255,255,255,0.94); border: 2px solid #DCE2F0; border-radius: 18px; padding: 16px 22px; cursor: pointer; }
.tt-dq.is-done { background: #E3F6F2; border-color: #A8E6DF; }
.tt-dq-n { flex: none; width: 36px; height: 36px; border-radius: 50%; background: #1B2A4A; color: #fff; display: grid; place-items: center; font-weight: 700; font-size: 16px; }
.tt-dq.is-done .tt-dq-n { background: #1F9D8A; }

.tt-quiz { width: 100%; max-width: 820px; display: flex; flex-direction: column; gap: 14px; }
.tt-quiz--done { align-items: center; text-align: center; gap: 16px; }
.tt-progress { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.tt-progress small { margin-left: 6px; font-weight: 800; font-size: 12.5px; color: #6B7899; letter-spacing: .04em; text-transform: uppercase; }
.tt-pdot { width: 34px; height: 8px; border-radius: 4px; background: #DCE2F0; }
.tt-pdot.is-done { background: #1F9D8A; } .tt-pdot.is-now { background: #FF6B4A; }
.tt-chip { font-weight: 800; font-size: 12.5px; color: #6B7899; background: #fff; border: 1.5px solid #DCE2F0; border-radius: 999px; padding: 4px 13px; }
.tt-chip.is-now { border-color: #FF6B4A; color: #B5381D; }
.tt-chip.is-ok { background: #E3F6F2; border-color: #A8E6DF; color: #1F7A6C; }
.tt-chip.is-bad { background: #FDECEC; border-color: #F5B8BA; color: #B3262B; }
.tt-qtext { margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 26px; line-height: 1.3; color: #1B2A4A; }
.tt-opts { display: flex; flex-direction: column; gap: 10px; }
.tt-opt { display: flex; align-items: center; gap: 14px; text-align: left; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 17px; line-height: 1.4; color: #1B2A4A; background: rgba(255,255,255,0.95); border: 2px solid #DCE2F0; border-radius: 16px; padding: 11px 18px; cursor: pointer; }
.tt-opt:disabled { cursor: default; }
.tt-opt:not(:disabled):hover { border-color: #9AA6C4; }
.tt-opt-letter { flex: none; width: 28px; height: 28px; border-radius: 50%; background: #E4E9F5; color: #1B2A4A; font-weight: 800; font-size: 13px; display: grid; place-items: center; }
.tt-opt.is-correct { background: #1F9D8A; border-color: #1F9D8A; color: #fff; }
.tt-opt.is-wrong { background: #E5484D; border-color: #E5484D; color: #fff; }
.tt-opt.is-correct .tt-opt-letter, .tt-opt.is-wrong .tt-opt-letter { background: rgba(255,255,255,.28); color: #fff; }
.tt-opt.is-dim { opacity: .5; }
.tt-qfoot { min-height: 76px; display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }
.tt-why { width: 100%; border-radius: 14px; padding: 11px 16px; font-size: 15px; font-weight: 600; line-height: 1.5; color: #1B2A4A; }
.tt-why.is-ok { background: #E6F8F5; border: 1px solid #A8E6DF; }
.tt-why.is-bad { background: #FDECEC; border: 1px solid #F5B8BA; }
.tt-bigscore { display: flex; align-items: baseline; gap: 10px; background: #1B2A4A; color: #fff; border-radius: 22px; padding: 10px 34px; }
.tt-bigscore span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 56px; line-height: 1; }
.tt-bigscore small { font-size: 16px; font-weight: 700; opacity: .75; }

.tt-scene { width: 100%; max-width: 880px; display: flex; flex-direction: column; gap: 12px; }
.tt-textcard { background: rgba(255,255,255,0.96); border: 1px solid #EBDFD0; border-radius: 20px; padding: 18px 30px 12px; display: flex; flex-direction: column; gap: 8px; }
.tt-scene.is-beat .tt-textcard { animation: tthCard 1.3s ease-in-out infinite; }
.tt-texthead { display: flex; align-items: baseline; gap: 14px; }
.tt-texthead h2 { margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 30px; color: #1B2A4A; line-height: 1.1; }
.tt-lines { min-height: 150px; }
.tt-lines p { margin: 0 0 10px; text-align: justify; text-justify: inter-word; font-size: 22px; font-weight: 600; line-height: 1.5; color: #2F3C5A; }
.tt-scene.has-pic .tt-lines { min-height: 0; }
.tt-scene.has-pic .tt-lines p { font-size: 17.5px; line-height: 1.45; margin-bottom: 6px; }
.tt-scene.has-pic .tt-textcard { padding: 12px 26px 8px; gap: 5px; }
.tt-scene.has-pic .tt-texthead h2 { font-size: 26px; }
.tt-scene.has-pic .tt-lines p.is-thump { font-size: 21px; }
.tt-scene.has-pic .tt-textfoot { min-height: 30px; }
.tt-mystery.has-pic { gap: 12px; }
.tt-mystery.has-pic .tt-eerie { font-size: 26px; padding: 16px 32px; }
.tt-mystery.has-pic .tt-reveal-box { min-height: 78px; padding: 10px 24px; }
.tt-lines p.is-new { animation: tthFade .45s ease; }
.tt-lines p.is-thump { font-style: italic; text-align: center; font-size: 26px; letter-spacing: .02em; color: #B5381D; }
.tt-textfoot { display: flex; align-items: center; gap: 12px; min-height: 36px; }
.tt-end { font-size: 13px; font-weight: 800; color: #1F7A6C; }
.tt-credit { font-size: 11.5px; font-weight: 700; color: #8892AC; }

.tt-case { width: 100%; max-width: 880px; display: grid; grid-template-columns: 190px minmax(0, 1fr); gap: 22px; align-items: stretch; }
.tt-folder { position: relative; background: #1B2A4A; border-radius: 6px 18px 18px 18px; padding: 34px 14px 18px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 6px; box-shadow: 0 10px 22px rgba(27,42,74,0.25); }
.tt-tab { position: absolute; top: -14px; left: 0; background: #FFD36E; color: #1B2A4A; font-weight: 800; font-size: 11.5px; letter-spacing: .08em; text-transform: uppercase; padding: 5px 14px; border-radius: 10px 10px 0 0; }
.tt-folder b { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; line-height: 1.15; color: #FEF6E6; }
.tt-folder small { font-size: 12.5px; font-weight: 700; color: #B7C2DE; }
.tt-casemain { display: flex; flex-direction: column; gap: 12px; min-width: 0; }

.tt-debate { width: 100%; max-width: 860px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.tt-pos { width: 100%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.tt-posbtn { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 19px; line-height: 1.25; color: #1B2A4A; background: #fff; border: 2px solid #DCE2F0; border-radius: 16px; padding: 16px 16px; cursor: pointer; text-align: center; }
.tt-posbtn:hover { border-color: #9AA6C4; }
.tt-posbtn.is-on { background: #1B2A4A; border-color: #1B2A4A; color: #fff; }
.tt-debatebox { width: 100%; background: #FFF6E5; border: 1px dashed #F2A900; border-radius: 16px; padding: 14px 20px; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }
.tt-hintp { margin: 0; font-size: 15.5px; font-weight: 700; color: #6B5310; line-height: 1.5; }
.tt-starters { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.tt-starter { font-family: 'Baloo 2', sans-serif; font-weight: 600; font-size: 16px; color: #1B2A4A; background: #fff; border-radius: 999px; padding: 6px 16px; box-shadow: 0 1px 0 #EBDFD0; }

.tt-end-card { display: flex; flex-direction: column; align-items: center; gap: 18px; width: 100%; max-width: 720px; }
.tt-endbadge { width: 76px; height: 76px; border-radius: 50%; background: #1F9D8A; color: #fff; font-size: 40px; font-weight: 800; display: grid; place-items: center; box-shadow: 0 8px 20px rgba(31,157,138,0.35); }
.tt-end-h { margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 40px; line-height: 1.15; color: #1B2A4A; text-align: center; }
.tt-scores { display: flex; gap: 14px; }
.tt-scores div { display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 14px; padding: 10px 30px; }
.tt-scores small { font-size: 12px; font-weight: 800; color: #B5381D; }
.tt-scores b { font-family: 'Baloo 2', sans-serif; font-size: 28px; color: #1B2A4A; }
`;

export default function TellTaleHeartLesson() {
  return <UnseenPlayer slides={SLIDES} extraStyles={EXTRA_CSS} teacherNotes />;
}
