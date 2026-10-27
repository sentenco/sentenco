import { UnseenPlayer, UCover } from "./unseenKit.jsx";
import { useStore, NAVY, CORAL_DEEP, RED, GREEN } from "./e8Kit.jsx";
import { KIT_STYLES, Talk, TestResults, TestMistakes } from "./linoyKit.jsx";

// A harder present continuous quiz for Amitay (teen, high B1). It grows out of the Verb Tenses test 2B
// (choose the form, identify the usage, change the sentence, fix the mistake, speaking) and adds present
// simple vs continuous with a verb in brackets.
// 25 questions in 5 sections. No hints while she answers. At the end: score by section, then the mistakes.
// Typed answers are marked ignoring capitals, the final full stop or question mark and contractions (isn't = is not).

const TITLE = "Present Continuous Challenge";

const norm = (t) =>
  (t || "")
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/n't\b/g, " not")
    .replace(/'m\b/g, " am")
    .replace(/'re\b/g, " are")
    .replace(/'s\b/g, " is")
    .replace(/[.!?]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();

const typedOk = (it, text) => norm(text) !== "" && it.accept.some((a) => norm(a) === norm(text));

const USAGES = ["Happening now", "Temporary situation", "Changing situation", "Not present continuous"];

const SECTIONS = [
  {
    key: "form", label: "Choose the form",
    items: [
      { id: "f1", kind: "mc", n: 1, text: "Sorry, I can’t talk. I ______ a shower.", options: ["take", "am taking", "taking"], correct: 1 },
      { id: "f2", kind: "mc", n: 2, text: "I ______ what you mean. Can you say it again?", options: ["am not understanding", "don’t understand", "not understand"], correct: 1 },
      { id: "f3", kind: "mc", n: 3, text: "Why ______ my jacket? It’s mine!", options: ["are you wearing", "you are wearing", "do you wearing"], correct: 0 },
      { id: "f4", kind: "mc", n: 4, text: "Dad usually drives me to school, but this week he ______ me to the bus stop.", options: ["takes", "is taking", "take"], correct: 1 },
      { id: "f5", kind: "mc", n: 5, text: "The weather ______ colder and colder.", options: ["gets", "get", "is getting"], correct: 2 },
    ],
  },
  {
    key: "use", label: "Identify the use",
    items: [
      { id: "u1", kind: "mc", n: 1, text: "She is staying with her aunt while her flat is painted.", options: USAGES, correct: 1 },
      { id: "u2", kind: "mc", n: 2, text: "More and more teenagers are choosing to study online.", options: USAGES, correct: 2 },
      { id: "u3", kind: "mc", n: 3, text: "Listen! Someone is knocking at the door.", options: USAGES, correct: 0 },
      { id: "u4", kind: "mc", n: 4, text: "My dad drives me to school every morning.", options: USAGES, correct: 3 },
      { id: "u5", kind: "mc", n: 5, text: "Wait! I’m putting my shoes on.", options: USAGES, correct: 0 },
    ],
  },
  {
    key: "change", label: "Change the sentence",
    items: [
      { id: "c1", kind: "txt", n: 1, task: "Make it negative.", base: "She is cooking dinner.", answer: "She is not cooking dinner.", accept: ["She is not cooking dinner."] },
      { id: "c2", kind: "txt", n: 2, task: "Make it a question.", base: "They are watching a film.", answer: "Are they watching a film?", accept: ["Are they watching a film?"] },
      { id: "c3", kind: "txt", n: 3, task: "Make it positive.", base: "I am not listening to music.", answer: "I am listening to music.", accept: ["I am listening to music."] },
      { id: "c4", kind: "txt", n: 4, task: "Make it a negative sentence.", base: "Is he waiting for the bus?", answer: "He is not waiting for the bus.", accept: ["He is not waiting for the bus."] },
      { id: "c5", kind: "txt", n: 5, task: "Ask about the person with Who.", base: "We are meeting Sam at six.", answer: "Who are we meeting at six?", accept: ["Who are we meeting at six?"] },
    ],
  },
  {
    key: "fix", label: "Fix the sentence",
    items: [
      { id: "x1", kind: "txt", n: 1, base: "My brother playing video games right now.", answer: "My brother is playing video games right now.", accept: ["My brother is playing video games right now."] },
      { id: "x2", kind: "txt", n: 2, base: "We are runing in the park.", answer: "We are running in the park.", accept: ["We are running in the park."] },
      { id: "x3", kind: "txt", n: 3, base: "I am knowing the answer.", answer: "I know the answer.", accept: ["I know the answer."] },
      { id: "x4", kind: "txt", n: 4, base: "What you are doing?", answer: "What are you doing?", accept: ["What are you doing?"] },
      { id: "x5", kind: "txt", n: 5, base: "Mia is not wearing her glasses today.", answer: "C (already correct)", accept: ["C", "correct"] },
    ],
  },
  {
    key: "mix", label: "Simple or continuous?",
    items: [
      { id: "m1", kind: "txt", n: 1, before: "Look! It", after: ".", verb: "snow", answer: "is snowing", accept: ["is snowing"] },
      { id: "m2", kind: "txt", n: 2, before: "My mum", after: "coffee. She prefers tea.", verb: "not drink", answer: "does not drink", accept: ["does not drink"] },
      { id: "m3", kind: "txt", n: 3, before: "Why", after: "? What’s so funny?", verb: "you / smile", answer: "are you smiling", accept: ["are you smiling"] },
      { id: "m4", kind: "txt", n: 4, before: "I", after: "this exercise. Can you help me?", verb: "not understand", answer: "do not understand", accept: ["do not understand"] },
      { id: "m5", kind: "txt", n: 5, before: "Ella usually walks to school, but today she", after: "the bus.", verb: "take", answer: "is taking", accept: ["is taking"] },
    ],
  },
];

const section = (key) => SECTIONS.find((s) => s.key === key);

const grade = (it, store) => (it.kind === "mc" ? store["pick-" + it.id] === it.correct : typedOk(it, store["txt-" + it.id]));

const describe = (it, store) => {
  if (it.kind === "mc") {
    const mine = store["pick-" + it.id];
    return { q: it.text, mine: mine === null || mine === undefined ? "" : it.options[mine], answer: it.options[it.correct] };
  }
  const q = it.task ? `${it.task} ${it.base}` : it.verb ? `${it.before} ______ (${it.verb}) ${it.after}` : it.base;
  return { q, mine: store["txt-" + it.id], answer: it.answer };
};

const QUIZ_STYLES = `
.aq-rows { display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 900px; }
.aq-row { display: flex; flex-direction: column; gap: 10px; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 12px 18px 14px; }
.aq-top { display: flex; align-items: flex-start; gap: 14px; }
.aq-q { flex: 1; font-size: 25px; font-weight: 700; line-height: 1.3; color: ${NAVY}; }
.aq-q small { display: block; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: ${CORAL_DEEP}; font-weight: 800; margin-bottom: 2px; }
.aq-q .aq-gap { display: inline-block; min-width: 120px; padding: 0 6px; border-bottom: 3px solid ${NAVY}; text-align: center; font-weight: 800; }
.aq-q .aq-verb { font-weight: 800; color: ${CORAL_DEEP}; }
.aq-opts { display: flex; gap: 10px; flex-wrap: wrap; padding-left: 48px; }
.aq-opt { height: 44px; padding: 0 20px; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 18px; color: ${NAVY}; background: #fff; border: 2px solid #DCE2F0; border-radius: 14px; cursor: pointer; }
.aq-opt:hover { border-color: #9AA6C4; }
.aq-opt.is-picked { border-color: ${NAVY}; background: #E4E9F5; box-shadow: 0 0 0 3px rgba(27,42,74,0.14); }
.aq-in { margin-left: 48px; height: 50px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 25px; color: ${NAVY}; background: #fff; border: 2px solid #DCE2F0; border-radius: 14px; padding: 0 18px; }
.aq-in:focus { outline: none; border-color: ${NAVY}; }
.aq-rows .sv-n { margin-top: 2px; }
.aq-ok { color: ${GREEN}; }
.aq-bad { color: ${RED}; }
`;

function McRow({ it }) {
  const [picked, setPicked] = useStore("pick-" + it.id, null);
  const parts = it.text.split("______");
  return (
    <div className="aq-row">
      <div className="aq-top">
        <span className="sv-n">{it.n}</span>
        <div className="aq-q">
          {parts.length > 1 ? (
            <>{parts[0]}<span className="aq-gap">{picked !== null ? it.options[picked] : ""}</span>{parts[1]}</>
          ) : it.text}
        </div>
      </div>
      <div className="aq-opts">
        {it.options.map((o, k) => (
          <button key={o} type="button" className={`aq-opt ${picked === k ? "is-picked" : ""}`} onClick={() => setPicked(k)}>{o}</button>
        ))}
      </div>
    </div>
  );
}

function TxtRow({ it }) {
  const [text, setText] = useStore("txt-" + it.id, "");
  return (
    <div className="aq-row">
      <div className="aq-top">
        <span className="sv-n">{it.n}</span>
        <div className="aq-q">
          {it.task && <small>{it.task}</small>}
          {it.verb ? (
            <>{it.before} <span className="aq-gap">______</span> <span className="aq-verb">({it.verb})</span>{/^[.,?!]/.test(it.after) ? "" : " "}{it.after}</>
          ) : it.base}
        </div>
      </div>
      <input
        className="aq-in"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck={false}
        aria-label={`Answer ${it.n}`}
      />
    </div>
  );
}

const Rows = ({ items }) => (
  <div className="aq-rows">
    {items.map((it) => (it.kind === "mc" ? <McRow key={it.id} it={it} /> : <TxtRow key={it.id} it={it} />))}
  </div>
);

const answerLine = (items) => items.map((it) => `${it.n} ${it.kind === "mc" ? it.options[it.correct] : it.answer}`).join(" · ");

const slidesFor = (key, stage, minutes, extra = "", numbered = true) => {
  const items = section(key).items;
  return [items.slice(0, 3), items.slice(3)].map((g) => ({
    stage: numbered ? `${stage} · ${g[0].n} to ${g[g.length - 1].n}` : stage,
    note: `About ${minutes}. Answers: ${answerLine(g)}. ${extra}No hints and no talking about answers until the end.`,
    body: <Rows items={g} />,
  }));
};

const SLIDES = [
  {
    stage: "Challenge quiz", title: true,
    note: "About half a minute. 25 questions in 5 sections: choose the form, identify the use, change the sentence, fix the sentence, simple or continuous. Then a speaking challenge. No hints and no talking about answers until the end. She types her answers in the boxes. The Teacher guide on each slide has the answers.",
    body: <UCover title={TITLE} module="AMITAY" />,
  },
  ...slidesFor("form", "Choose the form", "2.5 minutes", "Watch 2: understand is a state verb. 5: colder and colder is a changing situation. "),
  ...slidesFor("use", "Identify the use", "2 minutes", "Four choices: the fourth is a trap for routines (present simple). "),
  ...slidesFor("change", "Change the sentence", "3 minutes", "Typed answers ignore capitals, the final full stop or question mark and contractions (isn’t = is not). "),
  ...slidesFor("fix", "Fix the mistake. Write C if it is correct.", "3 minutes", "Item 5 is already correct, so the answer is C. ", false),
  ...slidesFor("mix", "Simple or continuous?", "3 minutes", "She writes the verb in the right form, with the helper verb. Don’t and doesn’t are accepted. "),
  {
    stage: "Talk for one minute.",
    note: "About 4 minutes, not scored. She talks for about 40 seconds on each prompt. Listen for am / is / are plus -ing, state verbs wrongly in -ing, and present simple used for things happening now. Write down mistakes for the end.",
    body: <Talk rows={["Everyone at home: what are they doing right now?", "Two things that are changing in your town or life.", "Something you usually do, but are not doing this week. Why?"]} />,
  },
  {
    stage: "Your score",
    note: "About 1.5 minutes. Read the total, then the score for each section. The weakest section shows what to teach next. Press Next to see the mistakes with the right answers.",
    body: <TestResults title={TITLE} sections={SECTIONS} grade={grade} />,
  },
  {
    stage: "Check the mistakes",
    note: "About 3 minutes. Go through each mistake with her: her answer is in red, the right answer in green. If she typed a correct sentence that is not listed, accept it. Ask her to say why before you explain. Finish Lesson closes the window.",
    body: <TestMistakes sections={SECTIONS} grade={grade} describe={describe} />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

export default function AmitayPresentContinuousQuiz() {
  return <UnseenPlayer slides={SLIDES} extraStyles={KIT_STYLES + QUIZ_STYLES} teacherNotes />;
}
