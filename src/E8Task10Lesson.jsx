import React, { useContext } from "react";
import { ScoreCtx, useStore, Strategy, E8Player } from "./e8Kit.jsx";

// E8 Task 10: "information transfer". In the real exam the student reads two English texts and completes a message
// in POLISH with the facts from them (a mediation task). All Sentenco E8 lessons are in English, so this version keeps
// the same skill (finding facts in two texts and reporting them in a short message) with the message in English.
// Four sets: two short texts each and a message with three gaps (1 to 3 words per gap), one gap per slide.
// Every text, message, the answer key and the "why" texts are written by Sentenco; none come from the exam paper.

// email: strings and gap numbers. answers are written without a leading the / a / an (the check ignores those).
const SETS = [
  {
    name: "Two summer camps",
    texts: [
      { id: "A", title: "CAMP BLUE LAKE", text: "Ten days of sailing, swimming and campfire evenings in the mountains. Dates: 3 to 12 July. Price: £320, including meals and equipment. Ages 12 to 16. Bring your own sleeping bag." },
      { id: "B", title: "GREEN HILLS ADVENTURE CAMP", text: "Seven days of horse riding and hiking near the forest. Dates: 20 to 26 August. Price: £280. Ages 13 to 17. You sleep in wooden cabins, and sleeping bags are provided." },
    ],
    email: ["Hi Mia! I have found two camps for us. Camp Blue Lake is in the ", 1, ", and it costs ", 2, ". The other one, Green Hills, is different: there you don’t need to bring ", 3, ". Which do you prefer? Ania"],
    gaps: [
      { answers: ["mountains", "mountain"], why: "Text A says “in the mountains”. Text B is near a forest.", trap: "Right fact, wrong text: the forest belongs to Green Hills.", note: "First set, so go slowly. Have her read the message first, then find the camp name (Blue Lake) in the texts." },
      { answers: ["£320", "320", "320 pounds"], why: "Text A: “Price: £320”.", trap: "£280 is the price of the other camp, Green Hills.", note: "The message says Blue Lake, so only text A counts. Ask her which price is next to that name." },
      { answers: ["sleeping bag", "sleeping bags"], why: "Text B says sleeping bags are provided, so at Green Hills you don’t need to bring one. At Blue Lake you do.", trap: "Text A says “bring your own sleeping bag”. That is the other camp. Here you need the thing you do NOT bring.", note: "A small thinking step: “provided” means you don’t bring it. Ask her: which camp needs a sleeping bag, and which does not?" },
    ],
  },
  {
    name: "Two bike shops",
    texts: [
      { id: "A", title: "CITY BIKES", text: "Open 9 a.m. to 6 p.m., Monday to Saturday. Bike hire: £8 per hour or £30 per day. Helmets are free. You can find us next to the train station." },
      { id: "B", title: "GREEN WHEELS", text: "Open every day from 10 a.m. Bike hire: £6 per hour or £25 per day. Helmets cost £2. We are in Castle Park, and every customer gets a free map of bike routes." },
    ],
    email: ["Hi Tom! We can hire bikes in two places. City Bikes is next to the ", 1, ", but it is closed on ", 2, ". At Green Wheels, you get a free ", 3, " with your bike. Which shop shall we choose? Leo"],
    gaps: [
      { answers: ["train station", "station"], why: "Text A: “next to the train station”.", trap: "Castle Park is where Green Wheels is.", note: "Quick one. Ask which shop the message is about (City Bikes)." },
      { answers: ["sunday", "sundays"], why: "Text A is open Monday to Saturday, so it is closed on Sundays. The text never says “closed”: you work it out.", trap: "Green Wheels is open every day. The closed day belongs to City Bikes.", note: "The word “closed” is not in the text. Ask: which day is missing from Monday to Saturday?" },
      { answers: ["map", "bike map", "route map", "map of routes"], why: "Text B: “every customer gets a free map of bike routes”.", trap: "Helmets are free at City Bikes but cost £2 at Green Wheels. The free extra at Green Wheels is the map.", note: "The gap is a noun after “a free”. Ask her which free thing Green Wheels gives." },
    ],
  },
  {
    name: "Two music events",
    texts: [
      { id: "A", title: "SUMMER JAM FESTIVAL", text: "Two days of music in Riverside Park on 15 and 16 August. Day ticket: £18. Weekend ticket: £30. Gates open at noon. Camping is available. No glass bottles, please." },
      { id: "B", title: "SCHOOL BAND CONCERT", text: "Friday 6 June, 7 p.m., in the school hall. Tickets cost £3 at the door. All the money goes to an animal shelter. Students play their own songs." },
    ],
    email: ["Hi Ben! There are two music events. The festival is in ", 1, ", and if we go both days, the ticket costs ", 2, ". The school concert is much cheaper, and the money helps ", 3, ". Let me know! Zoe"],
    gaps: [
      { answers: ["riverside park"], why: "Text A: “in Riverside Park”.", trap: "The school hall is the place of the concert, not the festival.", note: "Copy the place name exactly. Ask her which event is “the festival”." },
      { answers: ["£30", "30", "30 pounds"], why: "Both days means the weekend ticket, £30. The day ticket is for one day only.", trap: "£18 is the price for one day. The message says “both days”.", note: "Key words in the message: “both days”. Ask which ticket is for both." },
      { answers: ["animals", "animal shelter", "shelter"], why: "Text B: “all the money goes to an animal shelter”, so the money helps animals.", trap: "The money does not go to the band or the school. It goes to an animal shelter.", note: "Accept animals or the shelter. Ask her where the money goes." },
    ],
  },
  {
    name: "Two school trips",
    texts: [
      { id: "A", title: "YEAR 8 TRIP TO THE SCIENCE MUSEUM", text: "Thursday 12 March. The coach leaves at 8 a.m. and comes back at 4 p.m. Cost: £10. Please bring a notebook and a packed lunch." },
      { id: "B", title: "YEAR 7 TRIP TO THE FARM", text: "Friday 13 March. The coach leaves at 9 a.m. and comes back at 3 p.m. Cost: £7, lunch included. Wear old shoes." },
    ],
    email: ["Hi Dad! I’m in Year 8, so I’m going to the ", 1, ". The coach leaves at ", 2, ", and I have to bring a notebook and ", 3, ". Can you give me £10? Alex"],
    gaps: [
      { answers: ["science museum"], why: "Year 8 is text A, the trip to the science museum.", trap: "The farm trip is for Year 7.", note: "Last set. She should be quick now. Ask: which year is Alex in?" },
      { answers: ["8 am", "8", "8 o'clock", "8:00", "800"], why: "Text A: the coach leaves at 8 a.m.", trap: "9 a.m. is the farm trip’s time.", note: "Accept any clear way of writing eight in the morning." },
      { answers: ["packed lunch", "lunch"], why: "Text A: bring a notebook and a packed lunch. On the farm trip lunch is included, but not on this trip.", trap: "Lunch is included on the farm trip only. The museum trip needs a packed lunch.", note: "Ask her: does Alex’s trip include lunch? What does the text say to bring?" },
    ],
  },
];

const norm = (s) => s.toLowerCase().replace(/[’‘]/g, "'").replace(/[.,!?]/g, "").replace(/\s+/g, " ").trim();
const stripArticle = (s) => s.replace(/^(the|a|an) /, "");

// ---- one gap per slide ------------------------------------------------------------------------------------
function InfoSlide({ set, si, g }) {
  const { report } = useContext(ScoreCtx);
  const id = `t10-${si + 1}-${g}`;
  const gap = set.gaps[g - 1];
  const [st, setSt] = useStore("gap-" + id, { val: "", checked: false });
  const [ovr, setOvr] = useStore("ovr-" + id, false);
  const cleaned = norm(st.val);
  const words = cleaned ? cleaned.split(" ") : [];
  const right = gap.answers.includes(cleaned) || gap.answers.includes(stripArticle(cleaned));
  function check() {
    if (!cleaned || st.checked) return;
    setSt({ ...st, checked: true });
    report(id, right && words.length <= 3);
  }
  const good = st.checked && ((right && words.length <= 3) || ovr);
  let problem = null;
  if (st.checked && !right) problem = words.length > 3 ? "That is more than three words." : null;
  const Slot = ({ n }) => {
    if (n < g) return <span className="e8-filled">{set.gaps[n - 1].answers[0]}</span>;
    if (n === g) {
      return (
        <input
          className={`e8-input ${st.checked ? (good ? "is-correct" : "is-wrong") : ""}`}
          value={st.val}
          disabled={st.checked}
          onChange={(e) => setSt({ ...st, val: e.target.value })}
          onKeyDown={(e) => { if (e.key === "Enter") check(); }}
          placeholder={`10.${n}`}
          autoComplete="off"
          spellCheck="false"
        />
      );
    }
    return <span className="e8-gap is-later"><span className="e8-gap-n">10.{n}</span></span>;
  };
  return (
    <div className="e10-wrap">
      <div className="e10-texts">
        {set.texts.map((t) => (
          <div key={t.id} className="e8-textcard">
            <div className="e8-textcard-head"><span className="e8-textcard-id">Text {t.id} · {t.title}</span></div>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
      <div className="e10-email">
        {set.email.map((seg, i) => (typeof seg === "number" ? <React.Fragment key={i}><Slot n={seg} /></React.Fragment> : <React.Fragment key={i}>{seg}</React.Fragment>))}
      </div>
      {!st.checked ? (
        <button type="button" className="e8-check" disabled={!cleaned} onClick={check}>Check</button>
      ) : (
        <div className={`e8-why ${good ? "is-ok" : "is-bad"}`}>
          {good && !right ? (
            <p><b>Accepted by the teacher.</b> The answer in our key is: {gap.answers[0]}.</p>
          ) : good ? (
            <p><b>Correct.</b> {gap.why}</p>
          ) : (
            <>
              {problem && <p><b>{problem}</b></p>}
              <p><b>Answer: {gap.answers[0]}.</b> {gap.why}</p>
            </>
          )}
          <p className="e8-trap"><b>The trap:</b> {gap.trap}</p>
          {!good && (
            <button type="button" className="e10-accept" onClick={() => setOvr(true)}>Teacher: accept my answer</button>
          )}
        </div>
      )}
    </div>
  );
}

// ---- extra slide pieces -----------------------------------------------------------------------------------
function TrapCards() {
  const cards = [
    ["Right fact, wrong text", "The message names the camp, shop or trip. Take the fact from that text only."],
    ["Fact you must work out", "Monday to Saturday means closed on Sunday. Provided means you do not bring it."],
    ["The right number", "Day ticket or weekend ticket? Ten days or seven? Check what the number is for."],
    ["Three words at most", "Copy only the fact. No full sentences, no extra words."],
  ];
  return (
    <div className="e10-tcwrap">
      <span className="e8-eyebrow">Exam strategy 2</span>
      <h2 className="e8-h2">Two texts, four traps</h2>
      <div className="e10-cards">
        {cards.map(([k, v]) => (
          <div key={k} className="e10-card"><b>{k}</b><span>{v}</span></div>
        ))}
      </div>
    </div>
  );
}

function ScoreBySet() {
  const { results, store } = useContext(ScoreCtx);
  const rows = SETS.map((s, si) => {
    const ids = [1, 2, 3].map((g) => `t10-${si + 1}-${g}`);
    const got = ids.filter((id) => results[id] === true || store["ovr-" + id] === true).length;
    const tried = ids.filter((id) => id in results).length;
    return { name: s.name, n: si + 1, got, tried, max: 3 };
  });
  const total = rows.reduce((a, r) => a + r.got, 0);
  const max = rows.reduce((a, r) => a + r.max, 0);
  return (
    <div className="e8-score">
      <div className="e8-score-total"><span>{total}</span><small>out of {max}</small></div>
      <div className="e8-score-tiles" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {rows.map((r) => (
          <div key={r.n} className={`e8-score-tile ${r.tried === r.max && r.got === r.max ? "is-full" : ""}`}>
            <small>Set {r.n}</small>
            <b>{r.tried === 0 ? "–" : `${r.got}/${r.max}`}</b>
            <span>{r.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TRAPS = [
  ["Wrong text", "Two texts, similar facts. The message tells you which one to use (Blue Lake, City Bikes, the festival). Check the name first."],
  ["Wrong number", "A day ticket, a weekend ticket and a price for children can all be in one text. Check what the number is for."],
  ["Not in the text", "Sometimes the fact is not written: closed on Sunday (open Monday to Saturday), do not bring (provided). Work it out."],
  ["Too long", "More than three words is wrong. Give only the fact, not a sentence."],
  ["Wrong kind of word", "Read the words around the gap. After “a free” you need a thing (a noun), not a price or a day."],
];

function Traps() {
  return (
    <div className="e8-traps">
      <h2 className="e8-h2">Five traps in Task 10</h2>
      {TRAPS.map(([k, v]) => (
        <div key={k} className="e8-trap-row" style={{ gridTemplateColumns: "170px 1fr" }}><b>{k}</b><span>{v}</span></div>
      ))}
    </div>
  );
}

function TakeHome() {
  return (
    <div className="e8-takehome">
      <span className="e8-eyebrow">Take-home · make your own Task 10</span>
      <h2 className="e8-h2">Two texts and a message</h2>
      <p className="e8-p">Choose two similar things (two cafés, two gyms, two football clubs). Write a short text about each, with prices, days and one special detail. Then write a message to a friend with three gaps.</p>
      <ul className="e8-th-list">
        <li>Make one gap a place, one a number, and one a fact the reader must work out.</li>
        <li>Each answer must be three words or fewer.</li>
        <li>Write the answers on the back.</li>
      </ul>
      <p className="e8-p">Next lesson, we will swap and solve.</p>
    </div>
  );
}

// ---- slides -----------------------------------------------------------------------------------------------
const gapSlides = SETS.flatMap((set, si) =>
  [1, 2, 3].map((g) => ({
    stage: `Set ${si + 1} · ${set.name} · Gap ${g} of 3`,
    time: g === 1 ? "~2 min" : "~1.5 min",
    note: set.gaps[g - 1].note,
    body: <InfoSlide set={set} si={si} g={g} />,
    _first: si === 2 && g === 1,
  }))
);

const SLIDES = [
  {
    stage: "E8 Task 10", time: null,
    note: "Alice is preparing for the E8, the Polish eighth-grade English exam. In the real Task 10 the student reads two English texts and completes a message in Polish (3 points). This lesson trains the same skill, finding facts in two texts and reporting them briefly, but with the message in English, to keep all E8 lessons in English. Four sets of two texts, three gaps each. Every text and the answer key are ours. If she gives a good answer that is not in the key, use the “Teacher: accept my answer” button.",
    body: (
      <div className="e8-cover">
        <span className="e8-eyebrow">Sentenco · Custom Lesson · E8 Task 10</span>
        <h1 className="e8-h1">Find the Facts</h1>
        <p className="e8-cover-p">Read two short texts, then complete a message to a friend with the right facts. One to three words for each gap.</p>
        <span className="e8-source">Format based on the E8 English exam, Task 10 (CKE, Poland), with the message in English. All texts and the answer key are by Sentenco.</span>
      </div>
    ),
  },
  {
    stage: "Today’s Plan", time: "~0.5 min",
    note: "Read the plan in half a minute. The rule of the whole lesson: the message tells you WHICH text to use and WHAT kind of fact to find.",
    body: (
      <div className="e8-plan">
        <h2 className="e8-h2">Goal: the right fact from the right text</h2>
        <p className="e8-p">Two texts talk about similar things. The message names the one you need, and the gap tells you the kind of fact.</p>
        <div className="e8-plan-list">
          {[
            ["Strategy", "Find the fact, not the sentence. Two texts, four traps", "2.5 min"],
            ["Set 1", "Two summer camps", "5 min"],
            ["Set 2", "Two bike shops", "5 min"],
            ["Set 3", "Two music events", "5 min"],
            ["Set 4", "Two school trips", "5 min"],
            ["Wrap-up", "Score and five traps", "2 min"],
          ].map(([k, d, t]) => (
            <div key={k} className="e8-plan-item"><b>{k}</b><span>{d}</span><small>{t}</small></div>
          ))}
        </div>
      </div>
    ),
  },
  {
    stage: "Strategy · Find the Fact", time: "~1 min",
    note: "Have Alice read the three steps aloud, then start. Repeat “which text, what kind of fact” all lesson.",
    body: (
      <Strategy
        n={1}
        title="Find the fact, not the sentence"
        steps={[
          "Read the sentence with the gap. Decide what kind of fact is missing: a place, a price, a day, a thing.",
          "The message tells you which text to use (the camp, the shop, the trip). Find the fact in that text only.",
          "Write only the fact: one to three words. Sometimes you need one small step, for example open Monday to Saturday means closed on Sunday.",
        ]}
      />
    ),
  },
  {
    stage: "Strategy · Four Traps", time: "~1.5 min",
    note: "Read the four cards aloud together. Each set of the lesson will show at least one of them. Ask which one she thinks will be hardest.",
    body: <TrapCards />,
  },
  ...gapSlides.flatMap((s) => {
    const { _first, ...slide } = s;
    if (!_first) return [slide];
    return [
      {
        stage: "Halfway · Check", time: "~0.5 min",
        note: "Half a minute. Ask her which kind of fact is hardest for her: the place, the number or the fact she has to work out. Six gaps done, six to go.",
        body: (
          <div className="e8-strategy">
            <span className="e8-eyebrow">Halfway</span>
            <h2 className="e8-h2">Three checks for every gap</h2>
            <ol className="e8-steps">
              <li><span className="e8-step-n">1</span><span><b>Which text?</b> Did the message name it?</span></li>
              <li><span className="e8-step-n">2</span><span><b>What kind of fact?</b> A place, a number, a day, a thing?</span></li>
              <li><span className="e8-step-n">3</span><span><b>Length.</b> Three words at most, and it fits the sentence.</span></li>
            </ol>
          </div>
        ),
      },
      slide,
    ];
  }),
  {
    stage: "Your Score", time: "~0.5 min",
    note: "Read the total, then only talk about the set where she lost points. Which trap was it?",
    body: <ScoreBySet />,
  },
  {
    stage: "Five Traps", time: "~1 min",
    note: "Read them one by one. Ask her which one caught her today.",
    body: <Traps />,
  },
  {
    stage: "Take-Home", time: null,
    note: "Homework: she writes two texts and a message with three gaps. Next lesson, swap and solve as the warm-up.",
    body: <TakeHome />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: s.time, note: s.note }));

const extraStyles = `
.e10-wrap { width: 100%; max-width: 900px; display: flex; flex-direction: column; align-items: center; gap: 10px; }
.e10-texts { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; }
.e10-texts .e8-textcard p { font-size: 12.5px; }
.e10-email { width: 100%; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 14px; padding: 9px 20px; font-family: 'Fraunces', serif; font-weight: 600; font-size: 17.5px; line-height: 1.95; color: #1B2A4A; text-wrap: pretty; }
.e10-email .e8-input { display: inline-block; width: 190px; max-width: 190px; margin: 0 2px; font-size: 16px; padding: 2px 10px; }
.e10-wrap .e8-why { width: 100%; }
.e10-accept { margin-top: 6px; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 12px; background: #fff; color: #1B2A4A; border: 1.5px solid #9AA6C4; border-radius: 999px; padding: 4px 14px; cursor: pointer; }
.e10-tcwrap { display: flex; flex-direction: column; align-items: center; gap: 6px; width: 100%; max-width: 860px; }
.e10-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; margin-top: 6px; }
.e10-card { display: flex; flex-direction: column; gap: 4px; background: rgba(255,255,255,0.88); border: 1px solid #EBDFD0; border-radius: 14px; padding: 12px 18px; }
.e10-card b { font-weight: 800; font-size: 14px; color: #E0502F; }
.e10-card span { font-size: 15px; font-weight: 700; line-height: 1.5; color: #1B2A4A; }
`;

export default function E8Task10Lesson() {
  return <E8Player slides={SLIDES} extraStyles={extraStyles} />;
}
