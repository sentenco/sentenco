import React, { useContext } from "react";
import { UnseenPlayer, UCover } from "./unseenKit.jsx";
import { ScoreCtx, useStore, LETTERS } from "./e8Kit.jsx";
import { RoomScene, EyeScene, DoorScene, BoardsScene, HeartScene, EyeIcon, TapeIcon, HeartIcon, WeightIcon, BubbleIcon, BadgeIcon } from "./tthArt.jsx";

// The Tell-Tale Heart (Edgar Allan Poe, 1843): a 25-minute mystery lesson, one-to-one, teacher-led.
// Teens 12 to 17, A2 to B1. Six steps: mystery, vocabulary, story (four scenes), detective cases, debate, new ending.
// The story below is our own simplified retelling. Violence stays off the page.

const STEP = (n, name, min) => `Step ${n} · ${name} · ${min} min`;

/* ---------------------------- Step 1: the mystery begins ---------------------------- */

const CHOICES = [
  { label: "Investigate", text: "You kneel and press your ear to the boards. Thump... thump... It is louder now. The sound is coming from right under your hands." },
  { label: "Run away", text: "You run for the door and down the stairs. The sound gets softer, softer... or is it only your own heart you can hear?" },
  { label: "Call for help", text: "A calm voice says, “Stay where you are. Tell me what you hear.” Thump... thump... “Wait,” says the voice. “Is that coming from the floor, or from you?”" },
];

function Mystery() {
  const [pick, setPick] = useStore("mys", null);
  return (
    <div className="tt-mystery">
      <div className="tt-art tt-art--room"><RoomScene /></div>
      <p className="tt-big">Imagine you hear a heartbeat coming from underneath your floor. What would you do?</p>
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

const DQ = ["Would you investigate or run away?", "Can fear make us imagine things?", "Can someone hide a terrible secret forever?"];

function Discuss() {
  const [done, setDone] = useStore("dq", [false, false, false]);
  const toggle = (i) => setDone((d) => d.map((v, k) => (k === i ? !v : v)));
  return (
    <div className="tt-discuss">
      <span className="un-eyebrow">Talk about it</span>
      <h2 className="un-h2">Three questions before we start</h2>
      <div className="tt-dq-list">
        {DQ.map((q, i) => (
          <button key={q} type="button" className={`tt-dq ${done[i] ? "is-done" : ""}`} onClick={() => toggle(i)} aria-pressed={done[i]}>
            <span className="tt-dq-n">{done[i] ? "✓" : i + 1}</span>
            <span>{q}</span>
          </button>
        ))}
      </div>
      <button type="button" className="tt-link" onClick={() => setDone([false, false, false])}>Reset</button>
    </div>
  );
}

function Intro() {
  return (
    <div className="tt-intro">
      <EyeIcon size={110} />
      <span className="un-eyebrow">Tonight&rsquo;s story</span>
      <h2 className="tt-intro-title">The Tell-Tale Heart</h2>
      <p className="tt-by">by Edgar Allan Poe, 1843</p>
      <p className="tt-tease">A narrator. An old man. A pale blue eye. And a sound that will not stop.</p>
      <p className="tt-tease2">Read carefully. You are the detective.</p>
    </div>
  );
}

/* ---------------------------- Step 2: unlock the vocabulary ---------------------------- */

const WORDS = [
  { w: "obsessed", Icon: EyeIcon, def: "Thinking about one thing all the time, and not able to stop.", ex: "The narrator was obsessed with the old man’s eye.", q: "If you are obsessed with a game, do you think about it a little or a lot?", a: "A lot. You think about it all the time." },
  { w: "murder", Icon: TapeIcon, def: "Killing a person on purpose. A crime.", ex: "The detective is working on a murder case.", q: "Is a murder an accident, or is it on purpose?", a: "It is on purpose. An accident is not a murder." },
  { w: "heartbeat", Icon: HeartIcon, def: "The movement and sound of your heart: boom, boom, boom.", ex: "After running up the stairs, I could feel my heartbeat.", q: "When does your heartbeat get faster? Give one example.", a: "For example: when I run, or when I am scared or nervous." },
  { w: "guilt", Icon: WeightIcon, def: "The bad feeling you have when you know you did something wrong.", ex: "She felt guilt after she broke her friend’s phone.", q: "Do you feel guilt after a good thing or after a bad thing?", a: "After a bad thing, something you did wrong." },
  { w: "confess", Icon: BubbleIcon, def: "To tell the truth about something bad that you did.", ex: "He confessed that he took the money.", q: "Who do people sometimes confess to? Name one person.", a: "For example: the police, a teacher, a parent, a friend." },
];

function WordCards() {
  const [sel, setSel] = useStore("wc-sel", 0);
  const [shown, setShown] = useStore("wc-ans", {});
  const w = WORDS[sel];
  return (
    <div className="tt-words">
      <div className="tt-wcards">
        {WORDS.map((x, i) => (
          <button key={x.w} type="button" className={`tt-wcard ${sel === i ? "is-sel" : ""}`} onClick={() => setSel(i)}>
            <span className="tt-wicon"><x.Icon size={44} /></span>
            <b>{x.w}</b>
          </button>
        ))}
      </div>
      <div className="tt-wdetail">
        <div className="tt-wdetail-icon"><w.Icon size={84} /></div>
        <div className="tt-wdetail-text">
          <h2>{w.w}</h2>
          <p className="tt-def">{w.def}</p>
          <p className="tt-ex">&ldquo;{w.ex}&rdquo;</p>
          <div className="tt-wq">
            <b>{w.q}</b>
            {shown[w.w] ? <span className="tt-wa">{w.a}</span> : <button type="button" className="tt-btn tt-btn--small" onClick={() => setShown((s) => ({ ...s, [w.w]: true }))}>Show a sample answer</button>}
          </div>
        </div>
      </div>
      <button type="button" className="tt-link" onClick={() => { setShown({}); setSel(0); }}>Reset the cards</button>
    </div>
  );
}

const VQ = [
  { q: "Tom is ___ with chess. He plays it all day and all night.", options: ["obsessed", "heartbeat", "confess"], correct: 0, why: "Obsessed means thinking about one thing all the time." },
  { q: "She felt ___ after she broke her friend’s phone.", options: ["guilt", "murder", "heartbeat"], correct: 0, why: "Guilt is the bad feeling after you do something wrong." },
  { q: "He felt so bad that he decided to ___ the truth.", options: ["obsessed", "confess", "murder"], correct: 1, why: "To confess is to tell the truth about something bad you did." },
];

function VocabChallenge() {
  const { report } = useContext(ScoreCtx);
  const [st, setSt] = useStore("vq", { i: 0, picks: [null, null, null] });
  const i = st.i;
  if (i >= VQ.length) {
    const got = st.picks.filter((p, k) => p === VQ[k].correct).length;
    return (
      <div className="tt-quiz tt-quiz--done">
        <div className="tt-bigscore"><span>{got}</span><small>out of {VQ.length}</small></div>
        <p className="tt-big">{got === VQ.length ? "All five words unlocked." : "Good work. Look at the words again if you need to."}</p>
        <button type="button" className="tt-btn" onClick={() => setSt({ i: 0, picks: [null, null, null] })}>Try the challenge again</button>
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

/* ---------------------------- Step 3: read and discover ---------------------------- */

const SCENES = {
  eye: {
    kicker: "Scene 1 of 4", title: "The Eye", art: <EyeScene />,
    lines: [
      "Why do you say I am mad? I am not mad! My mind is clear, and my hearing is very sharp. Listen, and I will tell you the whole story calmly.",
      "There was an old man who lived in my house. I loved him. He never hurt me, and I did not want his money.",
      "But he had one pale blue eye, with a thin cloud over it. Every time that eye looked at me, my blood ran cold.",
      "I became obsessed with it. I thought about it all day and all night. Slowly, I made a terrible decision: I had to get rid of the eye.",
    ],
  },
  nights: {
    kicker: "Scene 2 of 4", title: "Seven Nights", art: <DoorScene />,
    lines: [
      "Every night, at exactly midnight, I went to the old man’s room.",
      "I opened the door very, very slowly. I carried a small lantern with a cloth over it, so only one thin line of light came out.",
      "I stood there and watched him sleep. But every night, his eye was closed. I could not do it, because the eye was the problem, not the man.",
      "In the morning, I spoke to him kindly. “How did you sleep, my friend?” I asked. He never imagined what I was thinking.",
    ],
  },
  eighth: {
    kicker: "Scene 3 of 4", title: "The Eighth Night", art: <BoardsScene />,
    lines: [
      "On the eighth night, my finger touched the lantern and it made a small noise. The old man sat up in bed. “Who is there?” he cried.",
      "I stood still in the dark for an hour. Then I heard a heartbeat. Boom, boom, boom! The old man’s heart was getting louder and louder.",
      "I opened the lantern. The pale blue eye was open, looking straight at me. I could not stand it. In a few minutes, it was over, and the heartbeat stopped. Then I hid the body under three boards in the floor.",
      "At four o’clock, three policemen knocked. A neighbor had heard a scream. I smiled. “It was my bad dream,” I said. “The old man is away.” I put my chair right on top of the hidden boards.",
    ],
  },
  sound: {
    kicker: "Scene 4 of 4", title: "The Sound", art: <HeartScene />, beat: true,
    lines: [
      "We sat and talked. I was calm and friendly. But slowly, my head began to hurt, and I heard a low sound in my ears.",
      "It was a soft, quick beat, like a watch wrapped in cotton. Boom, boom, boom. It grew louder and louder. I talked faster, and louder, but the sound grew louder too.",
      "Why did the policemen not stop smiling? Could they not hear it? They knew! They were laughing at me!",
      "I could not bear it any more. “Stop pretending!” I shouted. “Yes, I did it! Tear up the boards! Here, here! It is the beating of his terrible heart!”",
    ],
  },
};

function Scene({ id }) {
  const sc = SCENES[id];
  const [n, setN] = useStore("sc-" + id, 1);
  const done = n >= sc.lines.length;
  return (
    <div className={`tt-scene ${sc.beat ? "is-beat" : ""}`}>
      <div className="tt-art tt-art--wide">{sc.art}</div>
      <div className="tt-textcard">
        <div className="tt-texthead"><span className="un-eyebrow">{sc.kicker}</span><h2>{sc.title}</h2></div>
        <div className="tt-lines">
          {sc.lines.slice(0, n).map((l, k) => <p key={k} className={k === n - 1 && n > 1 ? "is-new" : ""}>{l}</p>)}
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
      </div>
    </div>
  );
}

// One question between scenes. correct = null means it is a prediction (no right answer).
function ReadQ({ id, kicker, q, options, correct, explain }) {
  const { report } = useContext(ScoreCtx);
  const [picked, setPicked] = useStore("rq-" + id, null);
  const checked = picked !== null;
  const isPrediction = correct === null;
  const pick = (k) => {
    if (checked) return;
    setPicked(k);
    if (!isPrediction) report("rq-" + id, k === correct);
  };
  return (
    <div className="tt-quiz">
      <span className="un-eyebrow">{kicker}</span>
      <p className="tt-qtext">{q}</p>
      <div className="tt-opts">
        {options.map((o, k) => {
          let cls = "";
          if (checked) cls = isPrediction ? (k === picked ? "is-pred" : "is-dim") : k === correct ? "is-correct" : k === picked ? "is-wrong" : "is-dim";
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
            <div className={`tt-why ${isPrediction ? "is-pred" : picked === correct ? "is-ok" : "is-bad"}`}>
              {isPrediction ? <><b>Good thinking.</b> {explain}</> : <><b>{picked === correct ? "Correct." : `The answer is ${LETTERS[correct]}.`}</b> {explain}</>}
            </div>
            <button type="button" className="tt-link" onClick={() => setPicked(null)}>Try again</button>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------------------------- Step 4: detective challenge ---------------------------- */

const CASES = [
  {
    id: "cf-1", title: "The Motive", Clue: EyeIcon, clue: "Clue: a pale blue eye",
    q: "Why did the narrator kill the old man?",
    options: ["He wanted the old man’s money.", "He could not stand the old man’s pale blue eye.", "The old man was cruel to him."],
    correct: 1,
    explain: "The narrator says he loved the old man and did not want his money. The old man never hurt him. The eye was the only reason, and that is what makes him so strange.",
  },
  {
    id: "cf-2", title: "The Confession", Clue: BadgeIcon, clue: "Clue: three policemen",
    q: "Why did the narrator suddenly confess?",
    options: ["The police found the body under the floor.", "He could not bear the sound, and he believed the police could hear it too.", "The old man’s family arrived at the house."],
    correct: 1,
    explain: "The police suspected nothing. They sat and smiled. The narrator broke down because of the sound in his head, and he was sure they could hear it.",
  },
  {
    id: "cf-3", title: "The Heartbeat", Clue: HeartIcon, clue: "Clue: a sound only he can hear",
    q: "What might the heartbeat symbolize?",
    options: ["The old man is still alive.", "The narrator’s guilt, which he cannot escape.", "The sound of the clock in the room."],
    correct: 1,
    explain: "Many readers think the heartbeat is the narrator’s own guilt. The policemen never hear it. Only the narrator does, and it gets louder the more he tries to hide what he did.",
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
        <span className="tt-tab">Case file {n}</span>
        <div className="tt-clue"><c.Clue size={92} /></div>
        <b>{c.title}</b>
        <small>{c.clue}</small>
      </aside>
      <div className="tt-casemain">
        <div className="tt-progress" aria-label={`Case ${n} of ${CASES.length}`}>
          {CASES.map((x, k) => {
            const r = results[x.id];
            return <span key={x.id} className={`tt-chip ${k === n - 1 ? "is-now" : ""} ${r === true ? "is-ok" : r === false ? "is-bad" : ""}`}>Case {k + 1}{r === true ? " ✓" : r === false ? " ✗" : ""}</span>;
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
              <div className={`tt-why ${picked === c.correct ? "is-ok" : "is-bad"}`}><b>{picked === c.correct ? "Case solved." : `The answer is ${LETTERS[c.correct]}.`}</b> {c.explain}</div>
              <button type="button" className="tt-link" onClick={() => setPicked(null)}>Try this case again</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- Step 5: is he really insane? ---------------------------- */

const POSITIONS = [
  { k: "unwell", label: "He was mentally unwell.", hint: "Evidence you could use: he says “I am not mad” again and again, he is obsessed with an eye, and he hears a sound nobody else hears." },
  { k: "guilt", label: "He was overwhelmed by guilt.", hint: "Evidence you could use: he stays calm until he sits on top of the hidden body, and the sound grows louder as his fear grows." },
  { k: "both", label: "It could be both.", hint: "Evidence you could use: a person can be unwell and also feel guilty. One idea does not cancel the other." },
];
const STARTERS = ["I believe the narrator was... because...", "One piece of evidence is...", "In my opinion...", "I disagree because..."];

function Debate() {
  const [pos, setPos] = useStore("deb", null);
  return (
    <div className="tt-debate">
      <p className="tt-big">Was the narrator mentally unwell, or was he overwhelmed by guilt?</p>
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

const FQ = ["Can guilt affect how we think and behave?", "Was the heartbeat real or imaginary?", "Do you think the police already suspected him?"];

function FollowUp() {
  const [done, setDone] = useStore("fq", [false, false, false]);
  const toggle = (i) => setDone((d) => d.map((v, k) => (k === i ? !v : v)));
  return (
    <div className="tt-discuss">
      <span className="un-eyebrow">Keep talking</span>
      <h2 className="un-h2">Three more questions</h2>
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

/* ---------------------------- Step 6: rewrite the ending ---------------------------- */

const SCENARIOS = [
  { label: "What if the police heard the heartbeat too?", open: "The policemen stopped talking. They looked at the floor. They could hear it too..." },
  { label: "What if the narrator never confessed?", open: "The narrator took a deep breath, smiled and stayed silent. The sound was still there..." },
  { label: "What if the old man was still alive?", open: "The boards began to move. Someone was pushing from underneath..." },
];
const END_STARTERS = ["Suddenly...", "The police discovered...", "The narrator realized...", "In the end..."];

function Rewrite() {
  const [sc, setSc] = useStore("rw", null);
  return (
    <div className="tt-debate">
      <span className="un-eyebrow">You are Edgar Allan Poe</span>
      <p className="tt-big">Change the ending of the story. Choose one idea and tell it out loud.</p>
      <div className="tt-pos tt-pos--stack">
        {SCENARIOS.map((s, i) => (
          <button key={s.label} type="button" className={`tt-posbtn ${sc === i ? "is-on" : ""}`} onClick={() => setSc(sc === i ? null : i)} aria-pressed={sc === i}>{s.label}</button>
        ))}
      </div>
      <div className="tt-debatebox">
        {sc === null ? <span className="tt-hint">Choose a scenario to get your first line.</span> : <p className="tt-hintp"><b>Start with:</b> {SCENARIOS[sc].open}</p>}
        <div className="tt-starters">
          {END_STARTERS.map((s) => <span key={s} className="tt-starter">{s}</span>)}
        </div>
      </div>
    </div>
  );
}

function TheEnd() {
  const { results } = useContext(ScoreCtx);
  const sum = (ids) => ids.filter((id) => results[id] === true).length;
  const vq = sum(["vq-1", "vq-2", "vq-3"]);
  const cf = sum(["cf-1", "cf-2", "cf-3"]);
  return (
    <div className="tt-end-card">
      <div className="tt-endbadge" aria-hidden="true"><HeartIcon size={44} /></div>
      <h2 className="tt-end-h">You finished The Tell-Tale Heart</h2>
      <div className="tt-reflect">
        <span className="un-eyebrow">One last question</span>
        <p>What do you think is the most frightening part of the story?</p>
      </div>
      <div className="tt-scores">
        <div><small>Vocabulary challenge</small><b>{vq}/3</b></div>
        <div><small>Detective cases solved</small><b>{cf}/3</b></div>
      </div>
    </div>
  );
}

/* ---------------------------- the lesson ---------------------------- */

const SLIDES = [
  {
    stage: "A mystery lesson", title: true,
    note: "25 minutes, one-to-one. The student does most of the thinking and speaking. Step times are in the label at the top. Click Teacher guide on any page for a short tip. Nothing in the lesson needs the internet except the fonts.",
    body: <UCover title="The Tell-Tale Heart" module="A MYSTERY LESSON" />,
  },
  {
    stage: STEP(1, "The Mystery Begins", 3),
    note: "Read the question aloud and pause. Let the student pick. Read the short reply together, then ask: why did you choose that? About 1 minute.",
    body: <Mystery />,
  },
  {
    stage: STEP(1, "The Mystery Begins", 3),
    note: "Ask the three questions in order. Tap a question to tick it off. Accept short answers and ask for one reason. Do not correct grammar here. About 1 minute.",
    body: <Discuss />,
  },
  {
    stage: STEP(1, "The Mystery Begins", 3),
    note: "Read it slowly and quietly, like a trailer. Ask: what do you think will happen? Then move on. About 30 seconds.",
    body: <Intro />,
  },
  {
    stage: STEP(2, "Unlock the Vocabulary", 4),
    note: "Tap each word. Read the meaning, then the example, then ask the question. Show the sample answer only after the student has tried. About 2 minutes for five words.",
    body: <WordCards />,
  },
  {
    stage: STEP(2, "Unlock the Vocabulary", 4),
    note: "Three quick questions. The student chooses, you read the feedback together. About 1.5 minutes. Use Try again if you have time.",
    body: <VocabChallenge />,
  },
  {
    stage: STEP(3, "Read and Discover", 5),
    note: "Let the student read each line aloud as it appears. Help with pronunciation only. About 1 minute per scene.",
    body: <Scene id="eye" />,
  },
  {
    stage: STEP(3, "Read and Discover", 5),
    note: "A quick check. Ask the student to find the sentence that proves the answer.",
    body: <ReadQ id="1" kicker="Check" q="What does the narrator hate about the old man?" options={["His money.", "His pale blue eye.", "His loud voice."]} correct={1} explain="He says he loved the old man and did not want his money. The pale blue eye is what he cannot stand." />,
  },
  {
    stage: STEP(3, "Read and Discover", 5),
    note: "Read it with a quieter voice. Count the seven marks on the wall together if you like: one for every night.",
    body: <Scene id="nights" />,
  },
  {
    stage: STEP(3, "Read and Discover", 5),
    note: "There is no wrong answer. Ask why. Then read on to check the prediction.",
    body: <ReadQ id="2" kicker="Predict" q="It is the eighth night. What do you think will happen?" options={["He will give up and forget the eye.", "Something will go wrong, and he will act.", "The old man will call the police."]} correct={null} explain="Say why you think so, then read on to check your idea." />,
  },
  {
    stage: STEP(3, "Read and Discover", 5),
    note: "The story is told calmly and without detail. If the student asks what happened, say: the narrator killed him, and we will talk about why in the detective step. The clock shows 4 o'clock, when the police arrive.",
    body: <Scene id="eighth" />,
  },
  {
    stage: STEP(3, "Read and Discover", 5),
    note: "Ask the student to find the sentence that gives the reason.",
    body: <ReadQ id="3" kicker="Check" q="Why did the policemen come to the house?" options={["The old man had called them.", "A neighbor heard a scream.", "The narrator asked them to come."]} correct={1} explain="The text says a neighbor had heard a scream in the night. The narrator did not call them." />,
  },
  {
    stage: STEP(3, "Read and Discover", 5),
    note: "Read the last scene a little faster as the sound grows. The heart on the picture beats on its own. Let the student read the last line with feeling.",
    body: <Scene id="sound" />,
  },
  {
    stage: STEP(4, "Detective Challenge", 5),
    note: "Let the student choose, then read the explanation together. Ask them to point to the line in the story. About 1.5 minutes per case.",
    body: <CaseFile c={CASES[0]} n={1} />,
  },
  {
    stage: STEP(4, "Detective Challenge", 5),
    note: "Ask: did the police know? What made him break?",
    body: <CaseFile c={CASES[1]} n={2} />,
  },
  {
    stage: STEP(4, "Detective Challenge", 5),
    note: "This case introduces the idea of guilt. After the answer, ask the student to use the word guilt in a sentence.",
    body: <CaseFile c={CASES[2]} n={3} />,
  },
  {
    stage: STEP(5, "Is He Really Insane?", 4),
    note: "Be neutral. All three positions are fine if the student gives a reason. Use the sentence starters. Remember that mental illness does not make people violent. We are only discussing a character in a story. About 2.5 minutes.",
    body: <Debate />,
  },
  {
    stage: STEP(5, "Is He Really Insane?", 4),
    note: "Pick one or two questions if time is short. Tap to tick them off.",
    body: <FollowUp />,
  },
  {
    stage: STEP(6, "Rewrite the Ending", 4),
    note: "The student chooses an idea and tells the new ending out loud for about a minute. Give the first line if they need it. Let them speak, then ask one follow-up question. About 3.5 minutes.",
    body: <Rewrite />,
  },
  {
    stage: "The End",
    note: "Ask the final question and listen. Give feedback on one thing they did well. The scores show the vocabulary challenge and the detective cases.",
    body: <TheEnd />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

const EXTRA_CSS = `
.tt-art { border-radius: 16px; overflow: hidden; background: #0E1830; box-shadow: 0 8px 20px rgba(27,42,74,0.25); width: 100%; }
.tt-art--room { height: 168px; }
.tt-art--wide { height: 118px; }
.tt-svg { display: block; width: 100%; height: 100%; }

.tt-beat { transform-box: fill-box; transform-origin: center; animation: tthBeat 1.3s ease-in-out infinite; }
.tt-glow { animation: tthGlow 1.3s ease-in-out infinite; }
.tt-ripple { transform-box: fill-box; transform-origin: center; opacity: 0; animation: tthRip 1.3s ease-out infinite; }
.tt-ripple--2 { animation-delay: 0.45s; }
.tt-ripple-c { transform-box: fill-box; transform-origin: center; opacity: 0; animation: tthRipC 1.3s ease-out infinite; }
.tt-ripple-c--2 { animation-delay: 0.45s; }
.tt-flame { transform-box: fill-box; transform-origin: 50% 100%; animation: tthFlame 1.6s ease-in-out infinite alternate; }
.tt-vignette { animation: tthVig 1.3s ease-in-out infinite; }
@keyframes tthBeat { 0%,100% { transform: scale(1); } 12% { transform: scale(1.18); } 24% { transform: scale(1); } 36% { transform: scale(1.12); } 48% { transform: scale(1); } }
@keyframes tthGlow { 0%,100% { opacity: .55; } 12% { opacity: 1; } 36% { opacity: .85; } }
@keyframes tthRip { 0% { transform: scale(.4); opacity: .8; } 100% { transform: scale(2.6); opacity: 0; } }
@keyframes tthRipC { 0% { transform: scale(.9); opacity: .8; } 100% { transform: scale(2.6); opacity: 0; } }
@keyframes tthFlame { from { transform: scale(1,1) rotate(-2deg); } to { transform: scale(.88,1.14) rotate(2deg); } }
@keyframes tthVig { 0%,100% { opacity: .55; } 12% { opacity: 1; } 36% { opacity: .8; } }
@keyframes tthCard { 0%,100% { box-shadow: 0 0 0 0 rgba(255,107,74,0); } 12% { box-shadow: 0 0 0 6px rgba(255,107,74,0.28); } 36% { box-shadow: 0 0 0 3px rgba(255,107,74,0.18); } }
@keyframes tthFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) {
  .tt-beat, .tt-glow, .tt-ripple, .tt-ripple-c, .tt-flame, .tt-vignette, .tt-scene.is-beat .tt-textcard, .tt-lines p.is-new { animation: none; }
}

.tt-big { margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 25px; line-height: 1.3; color: #1B2A4A; text-align: center; text-wrap: balance; }
.tt-hint { font-size: 14.5px; font-weight: 700; color: #6B7899; }
.tt-link { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: #6B7899; background: none; border: none; text-decoration: underline; cursor: pointer; padding: 4px 6px; }
.tt-link:hover { color: #1B2A4A; }
.tt-push { margin-left: auto; }
.tt-btn { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 14.5px; background: #1B2A4A; color: #fff; border: none; border-radius: 12px; padding: 11px 24px; cursor: pointer; }
.tt-btn--small { font-size: 13px; padding: 8px 18px; border-radius: 999px; background: #FF6B4A; }

.tt-mystery { width: 100%; max-width: 860px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.tt-choices { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.tt-choice { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 17px; color: #1B2A4A; background: #fff; border: 2px solid #DCE2F0; border-radius: 14px; padding: 9px 26px; cursor: pointer; }
.tt-choice:hover { border-color: #9AA6C4; }
.tt-choice.is-on { background: #1B2A4A; border-color: #1B2A4A; color: #fff; }
.tt-reveal-box { width: 100%; min-height: 84px; background: #1B2A4A; border-radius: 16px; padding: 14px 22px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-align: center; }
.tt-reveal-box p { margin: 0; color: #FEF6E6; font-size: 16.5px; font-weight: 600; line-height: 1.5; animation: tthFade .35s ease; }
.tt-reveal-box .tt-hint { color: #B7C2DE; }
.tt-reveal-box .tt-link { color: #FFD36E; }

.tt-discuss { width: 100%; max-width: 760px; display: flex; flex-direction: column; align-items: center; gap: 10px; }
.tt-dq-list { width: 100%; display: flex; flex-direction: column; gap: 12px; margin: 6px 0 2px; }
.tt-dq { display: flex; align-items: center; gap: 16px; text-align: left; font-family: 'Baloo 2', sans-serif; font-weight: 600; font-size: 21px; color: #1B2A4A; background: rgba(255,255,255,0.94); border: 2px solid #DCE2F0; border-radius: 18px; padding: 15px 22px; cursor: pointer; }
.tt-dq.is-done { background: #E3F6F2; border-color: #A8E6DF; }
.tt-dq-n { flex: none; width: 36px; height: 36px; border-radius: 50%; background: #1B2A4A; color: #fff; display: grid; place-items: center; font-weight: 700; font-size: 16px; }
.tt-dq.is-done .tt-dq-n { background: #1F9D8A; }

.tt-intro { display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center; background: #1B2A4A; border-radius: 22px; padding: 26px 56px 28px; max-width: 700px; box-shadow: 0 10px 24px rgba(27,42,74,0.3); }
.tt-intro .un-eyebrow { color: #FFD36E; margin-top: 8px; }
.tt-intro-title { margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 46px; line-height: 1.1; color: #FEF6E6; }
.tt-by { margin: 0; color: #B7C2DE; font-weight: 700; font-size: 15px; }
.tt-tease { margin: 10px 0 0; font-family: 'Baloo 2', sans-serif; font-weight: 600; font-size: 21px; line-height: 1.4; color: #FEF6E6; }
.tt-tease2 { margin: 0; color: #FFD36E; font-weight: 700; font-size: 16px; }

.tt-words { width: 100%; max-width: 860px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.tt-wcards { width: 100%; display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
.tt-wcard { display: flex; flex-direction: column; align-items: center; gap: 4px; background: #fff; border: 2px solid #DCE2F0; border-radius: 16px; padding: 10px 6px 9px; cursor: pointer; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 17px; color: #1B2A4A; }
.tt-wicon { height: 34px; display: grid; place-items: center; }
.tt-wcard.is-sel { border-color: #FF6B4A; background: #FFF1EC; box-shadow: 0 0 0 3px rgba(255,107,74,0.15); }
.tt-wdetail { width: 100%; display: flex; gap: 22px; align-items: center; background: rgba(255,255,255,0.94); border: 1px solid #EBDFD0; border-radius: 20px; padding: 16px 24px; }
.tt-wdetail-icon { flex: none; width: 112px; height: 112px; border-radius: 22px; background: #F1F3F8; display: grid; place-items: center; }
.tt-wdetail-text h2 { margin: 0 0 4px; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 32px; color: #1B2A4A; line-height: 1.1; }
.tt-def { margin: 0 0 6px; font-size: 17px; font-weight: 700; color: #33415E; }
.tt-ex { margin: 0 0 10px; font-size: 15.5px; font-weight: 600; font-style: italic; color: #6B7899; }
.tt-wq { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; background: #FFF6E5; border-radius: 12px; padding: 10px 14px; }
.tt-wq b { font-size: 15px; color: #1B2A4A; }
.tt-wa { font-size: 14.5px; font-weight: 700; color: #1F7A6C; }

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
.tt-opt.is-pred { background: #1B2A4A; border-color: #1B2A4A; color: #fff; }
.tt-opt.is-correct .tt-opt-letter, .tt-opt.is-wrong .tt-opt-letter, .tt-opt.is-pred .tt-opt-letter { background: rgba(255,255,255,.28); color: #fff; }
.tt-opt.is-dim { opacity: .5; }
.tt-qfoot { min-height: 76px; display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }
.tt-why { width: 100%; border-radius: 14px; padding: 11px 16px; font-size: 15px; font-weight: 600; line-height: 1.5; color: #1B2A4A; }
.tt-why.is-ok { background: #E6F8F5; border: 1px solid #A8E6DF; }
.tt-why.is-bad { background: #FDECEC; border: 1px solid #F5B8BA; }
.tt-why.is-pred { background: #EEF1FA; border: 1px solid #C9D2EC; }
.tt-bigscore { display: flex; align-items: baseline; gap: 10px; background: #1B2A4A; color: #fff; border-radius: 22px; padding: 10px 34px; }
.tt-bigscore span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 56px; line-height: 1; }
.tt-bigscore small { font-size: 16px; font-weight: 700; opacity: .75; }

.tt-scene { width: 100%; max-width: 880px; display: flex; flex-direction: column; gap: 10px; }
.tt-textcard { background: rgba(255,255,255,0.95); border: 1px solid #EBDFD0; border-radius: 18px; padding: 12px 24px 10px; display: flex; flex-direction: column; gap: 6px; }
.tt-scene.is-beat .tt-textcard { animation: tthCard 1.3s ease-in-out infinite; }
.tt-texthead { display: flex; align-items: baseline; gap: 12px; }
.tt-texthead h2 { margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 25px; color: #1B2A4A; line-height: 1.1; }
.tt-lines p { margin: 0 0 6px; text-align: justify; text-justify: inter-word; font-size: 16.5px; font-weight: 600; line-height: 1.5; color: #2F3C5A; }
.tt-lines p.is-new { animation: tthFade .45s ease; }
.tt-textfoot { display: flex; align-items: center; gap: 12px; min-height: 36px; }
.tt-end { font-size: 13px; font-weight: 800; color: #1F7A6C; }

.tt-case { width: 100%; max-width: 880px; display: grid; grid-template-columns: 200px minmax(0, 1fr); gap: 22px; align-items: stretch; }
.tt-folder { position: relative; background: #1B2A4A; border-radius: 6px 18px 18px 18px; padding: 34px 14px 18px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 6px; box-shadow: 0 10px 22px rgba(27,42,74,0.25); }
.tt-tab { position: absolute; top: -14px; left: 0; background: #FFD36E; color: #1B2A4A; font-weight: 800; font-size: 11.5px; letter-spacing: .08em; text-transform: uppercase; padding: 5px 14px; border-radius: 10px 10px 0 0; }
.tt-clue { width: 130px; height: 110px; border-radius: 14px; background: #FEF6E6; display: grid; place-items: center; }
.tt-folder b { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 20px; color: #FEF6E6; }
.tt-folder small { font-size: 12.5px; font-weight: 700; color: #B7C2DE; }
.tt-casemain { display: flex; flex-direction: column; gap: 12px; min-width: 0; }

.tt-debate { width: 100%; max-width: 860px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.tt-pos { width: 100%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.tt-pos--stack { grid-template-columns: 1fr; gap: 9px; }
.tt-posbtn { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 18px; line-height: 1.25; color: #1B2A4A; background: #fff; border: 2px solid #DCE2F0; border-radius: 16px; padding: 14px 16px; cursor: pointer; text-align: center; }
.tt-pos--stack .tt-posbtn { text-align: left; padding: 11px 20px; }
.tt-posbtn:hover { border-color: #9AA6C4; }
.tt-posbtn.is-on { background: #1B2A4A; border-color: #1B2A4A; color: #fff; }
.tt-debatebox { width: 100%; background: #FFF6E5; border: 1px dashed #F2A900; border-radius: 16px; padding: 14px 20px; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }
.tt-hintp { margin: 0; font-size: 15.5px; font-weight: 700; color: #6B5310; line-height: 1.5; }
.tt-starters { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.tt-starter { font-family: 'Baloo 2', sans-serif; font-weight: 600; font-size: 16px; color: #1B2A4A; background: #fff; border-radius: 999px; padding: 6px 16px; box-shadow: 0 1px 0 #EBDFD0; }

.tt-end-card { display: flex; flex-direction: column; align-items: center; gap: 14px; width: 100%; max-width: 720px; }
.tt-endbadge { width: 72px; height: 72px; border-radius: 50%; background: #1B2A4A; display: grid; place-items: center; box-shadow: 0 8px 20px rgba(27,42,74,0.3); }
.tt-end-h { margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 38px; line-height: 1.15; color: #1B2A4A; text-align: center; }
.tt-reflect { background: #1B2A4A; border-radius: 18px; padding: 14px 30px; text-align: center; }
.tt-reflect .un-eyebrow { color: #FFD36E; }
.tt-reflect p { margin: 4px 0 0; font-family: 'Baloo 2', sans-serif; font-weight: 600; font-size: 23px; line-height: 1.3; color: #FEF6E6; }
.tt-scores { display: flex; gap: 14px; }
.tt-scores div { display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 14px; padding: 10px 26px; }
.tt-scores small { font-size: 12px; font-weight: 800; color: #B5381D; }
.tt-scores b { font-family: 'Baloo 2', sans-serif; font-size: 26px; color: #1B2A4A; }
`;

export default function TellTaleHeartLesson() {
  return <UnseenPlayer slides={SLIDES} extraStyles={EXTRA_CSS} teacherNotes />;
}
