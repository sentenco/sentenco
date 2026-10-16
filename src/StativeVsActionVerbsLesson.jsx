import React, { useState } from "react";
import { UnseenPlayer, UCover } from "./unseenKit.jsx";
import { useStore, NAVY, CORAL_DEEP, GREEN, RED } from "./e8Kit.jsx";

// Lesson 1 of Linoy's exam prep (teen, high B1): Stative vs action verbs.
// Kickoff: Definitions (dictionary style, choices hidden until the teacher reveals them).
// Lesson Proper: Listen first, Notice, Learn, Practice, Use it, Wrap-up. About 25 minutes.
// The teacher reads the Listen clip aloud; the script sits behind a button. No audio in this lesson.

const TITLE = "Stative vs Action Verbs";

const EXTRA = `
.sv-def { display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%; max-width: 840px; }
.sv-pos { font-family: 'Baloo 2', sans-serif; font-style: italic; font-weight: 600; font-size: 26px; color: ${CORAL_DEEP}; }
.sv-def-text { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 42px; line-height: 1.2; color: ${NAVY}; text-align: center; }
.sv-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 78px; line-height: 1; color: ${NAVY}; }
.sv-meaning { background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 14px; padding: 12px 26px; font-size: 22px; font-weight: 700; color: #2F3C5A; text-align: center; }
.sv-choices { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.sv-choice { min-width: 200px; height: 62px; padding: 0 26px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 24px; color: ${NAVY}; background: rgba(255,255,255,0.94); border: 2px solid #DCE2F0; border-radius: 16px; cursor: pointer; }
.sv-choice:disabled { cursor: default; }
.sv-choice:not(:disabled):hover { border-color: #9AA6C4; }
.sv-choice.is-hidden { background: repeating-linear-gradient(135deg, #fff 0 8px, #F2EBE5 8px 16px); border: 2px dashed #C9CFE0; }
.sv-choice.is-correct { background: ${GREEN}; border-color: ${GREEN}; color: #fff; }
.sv-choice.is-wrong { background: ${RED}; border-color: ${RED}; color: #fff; }
.sv-choice.is-dim { opacity: 0.45; }
.sv-tog { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 15px; color: ${NAVY}; background: #fff; border: 1.5px solid #DCE2F0; border-radius: 999px; padding: 8px 22px; cursor: pointer; }
.sv-tog:hover { border-color: ${NAVY}; }
.sv-chips { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.sv-chip { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 26px; color: ${NAVY}; background: #FFE9E1; border: 2px solid #F4C0AD; border-radius: 14px; padding: 10px 24px; }

.sv-listen { display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 820px; align-items: stretch; }
.sv-reader { display: flex; align-items: center; gap: 16px; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 999px; padding: 12px 24px 12px 14px; font-size: 24px; font-weight: 700; color: ${NAVY}; }
.sv-t { width: 42px; height: 42px; border-radius: 50%; background: ${NAVY}; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 20px; flex: none; }
.sv-script { margin: 0; background: #FFF6E5; border: 2px solid #F2A900; border-radius: 14px; padding: 12px 22px; font-size: 20px; font-weight: 600; line-height: 1.5; color: #6B5310; }
.sv-qs { display: flex; flex-direction: column; gap: 10px; }
.sv-q { display: flex; align-items: baseline; gap: 14px; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 14px; padding: 12px 22px; font-size: 26px; font-weight: 700; color: ${NAVY}; }
.sv-q i { font-style: normal; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: ${CORAL_DEEP}; }
.sv-listen .sv-tog { align-self: center; }

.sv-sort { display: flex; flex-direction: column; align-items: center; gap: 22px; width: 100%; max-width: 840px; }
.sv-pool { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; min-height: 64px; }
.sv-sort-chip { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 26px; color: ${NAVY}; background: #fff; border: 2px solid #DCE2F0; border-radius: 14px; padding: 10px 24px; cursor: pointer; }
.sv-sort-chip.is-sel { border-color: ${NAVY}; box-shadow: 0 0 0 3px rgba(27,42,74,0.14); }
.sv-sort-chip.is-bad { background: ${RED}; border-color: ${RED}; color: #fff; }
.sv-sort-chip.is-ok { background: #E6F8F5; border-color: #A8E6DF; cursor: default; }
.sv-drops { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; width: 100%; }
.sv-drop { min-height: 190px; display: flex; flex-direction: column; align-items: center; gap: 12px; background: rgba(255,255,255,0.9); border: 2px dashed #C9CFE0; border-radius: 18px; padding: 16px; font-family: 'Quicksand', sans-serif; cursor: pointer; }
.sv-drop:hover { border-color: ${NAVY}; }
.sv-drop b { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; font-weight: 800; }
.sv-drop-chips { display: flex; flex-direction: column; gap: 8px; align-items: center; }

.sv-rule { display: flex; flex-direction: column; align-items: center; gap: 24px; width: 100%; max-width: 840px; }
.sv-rule-big { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 56px; line-height: 1.15; color: ${NAVY}; text-align: center; }
.sv-eg { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 640px; }
.sv-eg div { display: flex; align-items: center; gap: 16px; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 16px; padding: 14px 24px; font-size: 28px; font-weight: 700; color: ${NAVY}; }
.sv-eg .ok { color: ${GREEN}; font-size: 30px; }
.sv-eg .no { color: ${RED}; font-size: 30px; }

.sv-groups { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; width: 100%; max-width: 860px; }
.sv-group { background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 18px 20px; text-align: center; }
.sv-group b { display: block; font-family: 'Baloo 2', sans-serif; font-size: 26px; color: ${CORAL_DEEP}; margin-bottom: 8px; }
.sv-group span { display: block; font-size: 23px; font-weight: 700; line-height: 1.55; color: ${NAVY}; }

.sv-checks { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 860px; }
.sv-row { display: flex; align-items: center; gap: 14px; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 14px 18px; }
.sv-n { width: 34px; height: 34px; border-radius: 50%; background: #E4E9F5; color: ${NAVY}; font-weight: 800; font-size: 16px; display: flex; align-items: center; justify-content: center; flex: none; }
.sv-s { flex: 1; font-size: 26px; font-weight: 700; color: ${NAVY}; line-height: 1.3; }
.sv-yn { min-width: 140px; height: 48px; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 17px; color: ${NAVY}; background: #fff; border: 2px solid #DCE2F0; border-radius: 14px; cursor: pointer; }
.sv-yn:disabled { cursor: default; }
.sv-yn:not(:disabled):hover { border-color: #9AA6C4; }
.sv-yn.is-correct { background: ${GREEN}; border-color: ${GREEN}; color: #fff; }
.sv-yn.is-wrong { background: ${RED}; border-color: ${RED}; color: #fff; }
.sv-yn.is-dim { opacity: 0.4; }

.sv-fix { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; max-width: 860px; }
.sv-fix-row { width: 100%; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 12px 22px; }
.sv-fix-wrong { font-size: 26px; font-weight: 700; color: ${NAVY}; }
.sv-fix-right { margin-top: 4px; font-size: 24px; font-weight: 800; color: #1E9C8F; }

.sv-two { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 860px; }
.sv-two-head, .sv-two-row { display: grid; grid-template-columns: 110px 1fr 1fr; gap: 14px; align-items: center; }
.sv-two-head span { font-weight: 800; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; text-align: center; }
.sv-two-verb { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 34px; color: ${NAVY}; }
.sv-two-cell { background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 16px; padding: 16px 20px; font-size: 25px; font-weight: 700; color: ${NAVY}; text-align: center; }
.sv-two-cell em { font-style: normal; background: #FFE58A; border-radius: 4px; padding: 0 4px; }

.sv-talk { display: flex; flex-direction: column; align-items: center; gap: 22px; width: 100%; max-width: 820px; }
.sv-talk-row { display: flex; align-items: center; gap: 18px; width: 100%; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 16px 26px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 34px; color: ${NAVY}; }
.sv-talk-row i { font-style: normal; font-weight: 800; color: ${CORAL_DEEP}; font-size: 38px; min-width: 24px; }

.sv-wrap { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 820px; }
.sv-wrap div { display: flex; align-items: center; gap: 18px; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 18px 26px; font-size: 28px; font-weight: 700; color: ${NAVY}; }
.sv-wrap i { font-style: normal; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: ${CORAL_DEEP}; font-size: 34px; }
`;

// A dictionary-style definition. The choices stay hidden until the teacher presses Show choices.
// Hide choices puts them away again and clears the pick, so she can try once more without them.
function Define({ id, pos, text, choices, correct }) {
  const [shown, setShown] = useStore("show-" + id, false);
  const [picked, setPicked] = useStore("pick-" + id, null);
  const toggle = () => {
    if (shown) { setShown(false); setPicked(null); } else setShown(true);
  };
  return (
    <div className="sv-def">
      <div className="sv-pos">{pos}</div>
      <div className="sv-def-text">{text}</div>
      <div className="sv-choices">
        {choices.map((c, k) => {
          let cls = shown ? "" : "is-hidden";
          if (shown && picked !== null) cls = k === correct ? "is-correct" : k === picked ? "is-wrong" : "is-dim";
          return (
            <button key={k} type="button" className={`sv-choice ${cls}`} disabled={!shown || picked !== null} onClick={() => setPicked(k)} aria-label={shown ? c : "Hidden choice"}>
              {shown ? c : ""}
            </button>
          );
        })}
      </div>
      <button type="button" className="sv-tog" onClick={toggle}>{shown ? "Hide choices" : "Show choices"}</button>
    </div>
  );
}

function OwnWords({ id, pos, word, meaning }) {
  const [shown, setShown] = useStore("show-" + id, false);
  return (
    <div className="sv-def">
      <div className="sv-pos">{pos}</div>
      <div className="sv-word">{word}</div>
      {shown && <div className="sv-meaning">{meaning}</div>}
      <button type="button" className="sv-tog" onClick={() => setShown(!shown)}>{shown ? "Hide definition" : "Show definition"}</button>
    </div>
  );
}

function Recap({ words }) {
  return <div className="sv-chips">{words.map((w) => <span key={w} className="sv-chip">{w}</span>)}</div>;
}

// The teacher reads the clip aloud. The script is hidden so she listens instead of reading.
function Listen({ id, script, questions }) {
  const [shown, setShown] = useStore("show-" + id, false);
  return (
    <div className="sv-listen">
      <div className="sv-reader"><span className="sv-t">T</span><span>Your teacher reads a voice message</span></div>
      {shown && <p className="sv-script">{script}</p>}
      <div className="sv-qs">{questions.map((q, k) => <div key={k} className="sv-q"><i>?</i>{q}</div>)}</div>
      <button type="button" className="sv-tog" onClick={() => setShown(!shown)}>{shown ? "Hide script" : "Show script"}</button>
    </div>
  );
}

// Tap a verb, then tap the box it belongs in. A wrong box flashes red and the verb goes back.
function Sort({ id, cats, items }) {
  const [placed, setPlaced] = useStore("sort-" + id, {});
  const [sel, setSel] = useState(null);
  const [bad, setBad] = useState(null);
  const pool = items.filter((it) => !placed[it.w]);
  const drop = (cat) => {
    if (sel === null) return;
    const it = items.find((x) => x.w === sel);
    if (it.cat === cat) {
      setPlaced((p) => ({ ...p, [sel]: true }));
      setSel(null);
    } else {
      const w = sel;
      setBad(w);
      setSel(null);
      setTimeout(() => setBad(null), 700);
    }
  };
  return (
    <div className="sv-sort">
      <div className="sv-pool">
        {pool.map((it) => (
          <button key={it.w} type="button" className={`sv-sort-chip ${sel === it.w ? "is-sel" : ""} ${bad === it.w ? "is-bad" : ""}`} onClick={() => setSel(sel === it.w ? null : it.w)}>{it.w}</button>
        ))}
      </div>
      <div className="sv-drops">
        {cats.map((c) => (
          <button key={c.key} type="button" className="sv-drop" onClick={() => drop(c.key)}>
            <b>{c.label}</b>
            <div className="sv-drop-chips">
              {items.filter((it) => it.cat === c.key && placed[it.w]).map((it) => <span key={it.w} className="sv-sort-chip is-ok">{it.w}</span>)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function CheckRow({ id, n, s, ok }) {
  const [pick, setPick] = useStore("chk-" + id, null);
  const done = pick !== null;
  const btn = (val, label) => {
    let cls = "";
    if (done) cls = val === ok ? "is-correct" : val === pick ? "is-wrong" : "is-dim";
    return <button type="button" className={`sv-yn ${cls}`} disabled={done} onClick={() => setPick(val)}>{label}</button>;
  };
  return (
    <div className="sv-row">
      <span className="sv-n">{n}</span>
      <span className="sv-s">{s}</span>
      {btn(true, "Correct")}
      {btn(false, "Not correct")}
    </div>
  );
}

function Check({ id, items }) {
  return <div className="sv-checks">{items.map((it) => <CheckRow key={it.n} id={`${id}-${it.n}`} {...it} />)}</div>;
}

function Fix({ id, items }) {
  const [shown, setShown] = useStore("show-" + id, false);
  return (
    <div className="sv-fix">
      {items.map((it) => (
        <div key={it.wrong} className="sv-fix-row">
          <div className="sv-fix-wrong">{it.wrong}</div>
          {shown && <div className="sv-fix-right">{it.right}</div>}
        </div>
      ))}
      <button type="button" className="sv-tog" onClick={() => setShown(!shown)}>{shown ? "Hide answers" : "Show answers"}</button>
    </div>
  );
}

function Rule() {
  return (
    <div className="sv-rule">
      <div className="sv-rule-big">State verbs don’t take -ing.</div>
      <div className="sv-eg">
        <div><span className="ok">&#10003;</span>She deserves a break.</div>
        <div><span className="no">&#10007;</span>She is deserving a break.</div>
      </div>
    </div>
  );
}

function Groups({ groups }) {
  return (
    <div className="sv-groups">
      {groups.map((g) => (
        <div key={g.title} className="sv-group"><b>{g.title}</b>{g.words.map((w) => <span key={w}>{w}</span>)}</div>
      ))}
    </div>
  );
}

function TwoMeanings({ rows }) {
  return (
    <div className="sv-two">
      <div className="sv-two-head"><span /><span>State</span><span>Action</span></div>
      {rows.map((r) => (
        <div key={r.verb} className="sv-two-row">
          <div className="sv-two-verb">{r.verb}</div>
          <div className="sv-two-cell">{r.state}</div>
          <div className="sv-two-cell">{r.action}</div>
        </div>
      ))}
    </div>
  );
}

function Talk({ rows }) {
  return <div className="sv-talk">{rows.map((r, k) => <div key={k} className="sv-talk-row"><i>{k + 1}</i>{r}</div>)}</div>;
}

function Wrap({ rows }) {
  return <div className="sv-wrap">{rows.map((r, k) => <div key={k}><i>{k + 1}</i>{r}</div>)}</div>;
}

const SLIDES = [
  // ---------- Kickoff: Definitions (about 4 minutes) ----------
  {
    stage: "What word is it?",
    note: "Kickoff, about 1 minute. Read the definition aloud and let her answer without the choices. If she is stuck, press Show choices; Hide choices puts them away again so she can try once more. Answer: doubt (verb). Example: I doubt she’ll text back tonight.",
    body: <Define id="k1" pos="verb" text="to feel unsure that something is true" choices={["imagine", "doubt", "regret"]} correct={1} />,
  },
  {
    stage: "What word is it?",
    note: "About 1 minute. Same routine: no choices first. Answer: deserve (verb). Example: You deserve a break.",
    body: <Define id="k2" pos="verb" text="to earn something because of what you have done" choices={["value", "lack", "deserve"]} correct={2} />,
  },
  {
    stage: "What word is it?",
    note: "About 1 minute. Answer: appreciate (verb). Example: I really appreciate your help.",
    body: <Define id="k3" pos="verb" text="to be grateful for something that someone has done" choices={["appreciate", "regret", "resemble"]} correct={0} />,
  },
  {
    stage: "Say it in your own words.",
    note: "About 1 minute. She defines the word before you show anything. Dictionary style: to think that something is probably true. Example: I suppose she’s still getting ready.",
    body: <OwnWords id="k4" pos="verb" word="suppose" meaning="to think that something is probably true" />,
  },
  {
    stage: "Say one sentence with each word.",
    note: "About half a minute. She uses all four words. They come back in the lesson.",
    body: <Recap words={["doubt", "deserve", "appreciate", "suppose"]} />,
  },

  // ---------- Lesson Proper (about 20 minutes) ----------
  {
    stage: "Exam preparation", title: true,
    note: "About half a minute. Read the title. Lesson 1 of 4. Today: which verbs never take -ing.",
    body: <UCover title={TITLE} module="LESSON 1" />,
  },
  {
    stage: "Listen. Then answer.",
    note: "About 2 minutes. Read this message aloud, twice, at a natural pace: “I’m waiting outside the cinema. I doubt Mia is coming. I suppose she’s still getting ready. I know she deserves a fun night, so let’s wait.” Answers: outside the cinema. Verbs that are not actions: doubt, suppose, know, deserve. Show the script only if she needs it.",
    body: (
      <Listen
        id="l1"
        script="“I’m waiting outside the cinema. I doubt Mia is coming. I suppose she’s still getting ready. I know she deserves a fun night, so let’s wait.”"
        questions={["Where is she waiting?", "Which verb is not an action?"]}
      />
    ),
  },
  {
    stage: "Sort the verbs from the clip.",
    note: "About 2 minutes. She notices the pattern before she sees the rule. Doing now: waiting, getting ready. Not an action: doubt, suppose, know.",
    body: (
      <Sort
        id="s1"
        cats={[{ key: "doing", label: "Doing now" }, { key: "state", label: "Not an action" }]}
        items={[
          { w: "waiting", cat: "doing" },
          { w: "doubt", cat: "state" },
          { w: "getting ready", cat: "doing" },
          { w: "suppose", cat: "state" },
          { w: "know", cat: "state" },
        ]}
      />
    ),
  },
  {
    stage: "Read the rule.",
    note: "About 1.5 minutes. One rule, one pair of examples. Ask her to say why the second sentence sounds wrong before moving on.",
    body: <Rule />,
  },
  {
    stage: "Meet the three groups.",
    note: "About 2 minutes. Her Kickoff words are in these groups. Ask her to add one more verb to each group.",
    body: (
      <Groups
        groups={[
          { title: "Thinking", words: ["know", "believe", "doubt", "suppose", "understand"] },
          { title: "Feeling", words: ["like", "prefer", "appreciate", "want", "need"] },
          { title: "Having", words: ["own", "belong", "lack", "contain", "resemble"] },
        ]}
      />
    ),
  },
  {
    stage: "Correct or not?",
    note: "About 1.5 minutes. Answers: 1 correct, 2 not correct, 3 not correct.",
    body: (
      <Check
        id="c1"
        items={[
          { n: 1, s: "She deserves a break.", ok: true },
          { n: 2, s: "I am understanding the rules.", ok: false },
          { n: 3, s: "We are appreciating your help.", ok: false },
        ]}
      />
    ),
  },
  {
    stage: "Correct or not?",
    note: "About 1.5 minutes. A second round, so the first one is not rushed. Answers: 4 not correct, 5 correct, 6 correct.",
    body: (
      <Check
        id="c2"
        items={[
          { n: 4, s: "He is wanting a new phone.", ok: false },
          { n: 5, s: "They doubt the story.", ok: true },
          { n: 6, s: "This jacket belongs to my sister.", ok: true },
        ]}
      />
    ),
  },
  {
    stage: "Fix the mistake.",
    note: "About 2.5 minutes. She rewrites each sentence correctly, speaking or typing. Press Show answers to check: I prefer the blue dress. She knows my secret. Do you remember her name?",
    body: (
      <Fix
        id="f1"
        items={[
          { wrong: "I am preferring the blue dress.", right: "I prefer the blue dress." },
          { wrong: "She is knowing my secret.", right: "She knows my secret." },
          { wrong: "Are you remembering her name?", right: "Do you remember her name?" },
        ]}
      />
    ),
  },
  {
    stage: "Some verbs do both.",
    note: "About 3 minutes. Two pairs only. Have: owning (state) vs eating (action). Think: an opinion (state) vs a thought process (action). More of these in the review test.",
    body: (
      <TwoMeanings
        rows={[
          { verb: "have", state: <>I <em>have</em> a dog.</>, action: <>I’m <em>having</em> lunch.</> },
          { verb: "think", state: <>I <em>think</em> it’s cool.</>, action: <>I’m <em>thinking</em> about my trip.</> },
        ]}
      />
    ),
  },
  {
    stage: "Talk for one minute.",
    note: "About 3 minutes. She speaks, using the verbs correctly. This is her strength, so give her time. Listen for -ing mistakes on state verbs and write them down for the end.",
    body: <Talk rows={["1 thing you doubt.", "1 thing you deserve.", "1 thing you are doing now."]} />,
  },
  {
    stage: "Remember.",
    note: "About 1 minute. She reads the three takeaways. Finish Lesson closes the window.",
    body: <Wrap rows={["State verbs don’t take -ing.", "Three groups: thinking, feeling, having.", "Have and think can be both."]} />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

export default function StativeVsActionVerbsLesson() {
  return <UnseenPlayer slides={SLIDES} extraStyles={EXTRA} teacherNotes />;
}
