import React, { useContext } from "react";
import { ScoreCtx, useStore, Strategy, E8Player } from "./e8Kit.jsx";

// E8 Task 6: "complete the dialogue" (write the missing fragment, using the given word unchanged, max three words).
// 16 gaps, one per slide. Every item, the answer key and the "why" texts are written by Sentenco in the style of the
// task; none of them come from the exam paper. All in English, one item per slide.

// given = the word in brackets (must stay unchanged and counts towards the three-word limit).
// lines = [speaker, text]; the line with {gap} is the one the student completes.
const ITEMS = [
  // ---- Block A: how questions ------------------------------------------------------------------
  {
    block: "A", given: "often",
    lines: [["X", "You’re a really good swimmer! {gap} do you go to the pool?"], ["Y", "Twice a week, on Tuesdays and Fridays."]],
    answers: ["how often"],
    why: "Y answers with a frequency (twice a week), so the question is how often. The given word stays exactly as it is.",
    trap: "Writing only the given word. Often alone is not a question: add the question word how.",
    note: "First item, go slowly. Ask: what does “twice a week” answer? Then she writes the whole chunk, not only the bracket word.",
  },
  {
    block: "A", given: "many",
    lines: [["X", "{gap} students are there in your class?"], ["Y", "Twenty-four, so it’s quite crowded."]],
    answers: ["how many"],
    why: "Y gives a number of people, and students can be counted, so how many.",
    trap: "How much is for things you cannot count (water, money). Students are countable.",
    note: "If she writes “how much”, ask: can you count students? One student, two students?",
  },
  {
    block: "A", given: "much",
    lines: [["X", "Excuse me, {gap} these trainers?"], ["Y", "They’re forty-five pounds."]],
    answers: ["how much are"],
    why: "The answer is a price, so how much. Trainers is plural, so the missing verb is are.",
    trap: "Is or are? Look at the noun after the gap: trainers is plural. The three-word limit is exactly how much are.",
    note: "Two things to notice: price question, plural noun. Ask her to say the noun after the gap out loud before she types.",
  },
  {
    block: "A", given: "old",
    lines: [["X", "{gap} your cousin?"], ["Y", "She’s six. She started school last week."]],
    answers: ["how old is"],
    why: "Y gives an age, so how old. One person, so is.",
    trap: "How old is = three words, the maximum. Do not add more words.",
    note: "Quick win to finish the block. Point out that the chunk is exactly at the three-word limit.",
  },
  // ---- Block B: what, which, where -------------------------------------------------------------
  {
    block: "B", given: "time",
    lines: [["X", "Excuse me, {gap} the last bus leave?"], ["Y", "At ten forty-five, from stop number three."]],
    answers: ["what time does"],
    why: "Y gives a clock time, so what time. The bus is one thing (it), so does.",
    trap: "Do or does? The subject after the gap is the bus, singular, so does.",
    note: "Ask her to replace “the last bus” with a pronoun (it). Then does is easy to hear.",
  },
  {
    block: "B", given: "like",
    lines: [["X", "What {gap} doing at the weekend?"], ["Y", "Playing football with my friends."]],
    answers: ["do you like"],
    why: "What do you like doing…? asks about your interests. Like keeps its form, and doing follows it.",
    trap: "Would you like doing is wrong: would like takes to + verb, not -ing.",
    note: "The word “doing” after the gap is the clue. Ask: what comes after like when we talk about hobbies?",
  },
  {
    block: "B", given: "which",
    lines: [["X", "There are two pizzas on the menu. {gap} you want?"], ["Y", "The one with mushrooms, please."]],
    answers: ["which one do", "which do"],
    why: "Two choices, so which. Then do + you: which (one) do you want? Both forms are correct.",
    trap: "What is for open questions; which is for a small choice between things you can see.",
    note: "Either answer is fine. Ask why which, not what: how many pizzas are there?",
  },
  {
    block: "B", given: "where",
    lines: [["X", "{gap} go last summer?"], ["Y", "We went to Croatia. It was amazing!"]],
    answers: ["where did you"],
    why: "Last summer is finished, so did. Then the plain verb go: Where did you go?",
    trap: "Where are you go? mixes two verbs. After did we use the plain verb.",
    note: "Ask her to find the time clue (last summer). Finished time means past: did.",
  },
  // ---- Block C: suggesting, asking, offering ---------------------------------------------------
  {
    block: "C", given: "shall",
    lines: [["X", "It’s raining hard. {gap} a taxi?"], ["Y", "Good idea. I don’t want to get wet."]],
    answers: ["shall we take", "shall we get", "shall we call", "shall we order"],
    why: "Shall we + verb suggests doing something together. Take, get, call and order all work.",
    trap: "Do not add to: shall we to take is wrong. After shall we use the plain verb.",
    note: "Several verbs are correct here. Praise any of the four, then ask her for a fifth idea.",
  },
  {
    block: "C", given: "why",
    lines: [["X", "I don’t understand this exercise. {gap} ask the teacher?"], ["Y", "Good idea. She always explains things clearly."]],
    answers: ["why don't we", "why don't you", "why not"],
    why: "A suggestion: Why don’t we / you + verb, or the short Why not + verb.",
    trap: "Why we don’t ask is the wrong word order. Keep don’t right after why.",
    note: "Accept all three answers. Point out that why not is the shortest, only two words.",
  },
  {
    block: "C", given: "mind",
    lines: [["X", "{gap} if I open the window?"], ["Y", "No, not at all. It’s quite hot in here."]],
    answers: ["do you mind", "would you mind"],
    why: "A polite request for permission: Do / Would you mind if I…? No, not at all means: go ahead.",
    trap: "Did you mind is the wrong tense for a request. Use do or would.",
    note: "Ask: does “No, not at all” mean yes or no to the window? (Yes, open it.)",
  },
  {
    block: "C", given: "tell",
    lines: [["X", "Excuse me, {gap} me the way to the library, please?"], ["Y", "Sure. Go straight on and turn left."]],
    answers: ["could you tell", "can you tell", "would you tell"],
    why: "A polite request: Could you tell me…? Tell keeps its form because it follows could / can / would.",
    trap: "Could you telling is wrong. After could, can and would we use the plain verb.",
    note: "The given word is in the middle of the chunk this time. Read the whole sentence aloud with her answer.",
  },
  // ---- Block D: grammar chunks -----------------------------------------------------------------
  {
    block: "D", given: "ever",
    lines: [["X", "{gap} been to a music festival?"], ["Y", "Yes, last summer! It was fantastic."]],
    answers: ["have you ever"],
    why: "Life experience up to now uses the present perfect: Have you ever been…?",
    trap: "Did you ever been is wrong. The word been always needs have or has before it.",
    note: "The word “been” after the gap is the clue. Ask what helper verb always comes before been.",
  },
  {
    block: "D", given: "long",
    lines: [["X", "{gap} you lived in this town?"], ["Y", "Since 2019, so about six years."]],
    answers: ["how long have"],
    why: "Since 2019 means from then until now, so the present perfect: How long have you lived…?",
    trap: "How long do you live does not link the past to now. Since and for need have / has.",
    note: "Ask her to underline the clue in Y’s line. Since 2019 is a present perfect signal.",
  },
  {
    block: "D", given: "enough",
    lines: [["X", "Do you want to see a film tonight?"], ["Y", "I’d love to, but I {gap} money."]],
    answers: ["don't have enough", "haven't got enough"],
    why: "Enough goes before the noun: enough money. Don’t have / haven’t got says the money is not there.",
    trap: "Money enough is wrong in English. Enough comes before the noun.",
    note: "The gap is in Y’s line this time. Read X’s line first, then decide what Y is really saying (no).",
  },
  {
    block: "D", given: "neither",
    lines: [["X", "I can’t stand horror films."], ["Y", "{gap} I. They’re much too scary."]],
    answers: ["neither can"],
    why: "Agreeing with a negative sentence: Neither + the same helper verb + I. X said can’t, so neither can I.",
    trap: "Neither don’t I is wrong: neither already makes the sentence negative, so do not add not.",
    note: "Ask her to find the helper verb in X’s line (can). Y repeats it.",
  },
];

const BLOCKS = {
  A: { name: "How… questions", time: "~5 min" },
  B: { name: "What, which, where", time: "~5 min" },
  C: { name: "Suggest, ask, offer", time: "~5 min" },
  D: { name: "Grammar chunks", time: "~5 min" },
};

// ---- the gap item -----------------------------------------------------------------------------------------
const norm = (s) => s.toLowerCase().replace(/[’‘]/g, "'").replace(/[.,!?]/g, "").replace(/\s+/g, " ").trim();

function GapItem({ n, item }) {
  const { report } = useContext(ScoreCtx);
  const id = `t6-${n}`;
  const [st, setSt] = useStore("gap-" + id, { val: "", checked: false });
  const cleaned = norm(st.val);
  const words = cleaned ? cleaned.split(" ") : [];
  const right = item.answers.includes(cleaned);
  function check() {
    if (!cleaned || st.checked) return;
    setSt({ ...st, checked: true });
    report(id, right);
  }
  let problem = null;
  if (st.checked && !right) {
    if (words.length > 3) problem = "That is more than three words, so the exam would give 0 points.";
    else if (!words.includes(item.given)) problem = `The given word (${item.given}) must appear exactly as it is.`;
  }
  return (
    <div className="e6-wrap">
      <p className="e6-help">Write the missing words. Use the word in brackets, unchanged. Maximum three words in the gap, and the given word counts.</p>
      <div className="e6-dialogue">
        {item.lines.map(([who, text], i) => {
          const hasGap = text.includes("{gap}");
          const [pre, post] = hasGap ? text.split("{gap}") : [text, ""];
          return (
            <div key={i} className={`e6-line ${who === "Y" ? "is-y" : ""}`}>
              <span className="e6-who">{who}</span>
              <div className="e6-bubble">
                {hasGap ? (
                  <>
                    {pre}
                    <span className="e6-given">({item.given})</span>
                    <input
                      className={`e8-input ${st.checked ? (right ? "is-correct" : "is-wrong") : ""}`}
                      value={st.val}
                      disabled={st.checked}
                      onChange={(e) => setSt({ ...st, val: e.target.value })}
                      onKeyDown={(e) => { if (e.key === "Enter") check(); }}
                      placeholder="type here"
                      autoComplete="off"
                      spellCheck="false"
                    />
                    {post}
                  </>
                ) : (
                  text
                )}
              </div>
            </div>
          );
        })}
      </div>
      {!st.checked ? (
        <button type="button" className="e8-check" disabled={!cleaned} onClick={check}>Check</button>
      ) : (
        <div className={`e8-why ${right ? "is-ok" : "is-bad"}`}>
          {right ? (
            <p><b>Correct.</b> {item.why}</p>
          ) : (
            <>
              {problem && <p><b>{problem}</b></p>}
              <p><b>Answer: {item.answers[0]}.</b> {item.why}</p>
            </>
          )}
          {item.answers.length > 1 && <p>Also correct: {item.answers.slice(right ? 0 : 1).filter((a) => a !== cleaned).join(" · ") || "no other answers"}.</p>}
          <p className="e8-trap"><b>The trap:</b> {item.trap}</p>
        </div>
      )}
    </div>
  );
}

// ---- extra slide pieces -----------------------------------------------------------------------------------
function PhraseBank({ title, cards }) {
  return (
    <div className="e6-bank-wrap">
      <span className="e8-eyebrow">Phrase bank</span>
      <h2 className="e8-h2">{title}</h2>
      <div className="e6-bank">
        {cards.map((c) => (
          <div key={c.job} className="e6-card">
            <b>{c.job}</b>
            <ul>{c.phrases.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreByBlock() {
  const { results } = useContext(ScoreCtx);
  const rows = ["A", "B", "C", "D"].map((b) => {
    const ids = ITEMS.map((it, i) => ({ it, id: `t6-${i + 1}` })).filter((x) => x.it.block === b).map((x) => x.id);
    const got = ids.filter((id) => results[id] === true).length;
    const tried = ids.filter((id) => id in results).length;
    return { b, got, tried, max: ids.length };
  });
  const total = rows.reduce((a, r) => a + r.got, 0);
  const max = rows.reduce((a, r) => a + r.max, 0);
  return (
    <div className="e8-score">
      <div className="e8-score-total"><span>{total}</span><small>out of {max}</small></div>
      <div className="e8-score-tiles" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {rows.map((r) => (
          <div key={r.b} className={`e8-score-tile ${r.tried === r.max && r.got === r.max ? "is-full" : ""}`}>
            <small>Block {r.b}</small>
            <b>{r.tried === 0 ? "–" : `${r.got}/${r.max}`}</b>
            <span>{BLOCKS[r.b].name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TRAPS = [
  ["Too long", "More than three words means 0 points, even if the English is perfect. Count the given word too."],
  ["Changed word", "The given word must stay exactly as it is: (tell) is not told or telling."],
  ["Only the given word", "Often on its own is not enough. Add the missing question word: how often."],
  ["Wrong helper verb", "Look at the words after the gap: is or are? do or does? have or has?"],
  ["Right idea, wrong tense", "Last summer needs did; since 2019 needs have; every week needs do or does."],
];

function Traps() {
  return (
    <div className="e8-traps">
      <h2 className="e8-h2">Five traps in Task 6</h2>
      {TRAPS.map(([k, v]) => (
        <div key={k} className="e8-trap-row" style={{ gridTemplateColumns: "170px 1fr" }}><b>{k}</b><span>{v}</span></div>
      ))}
    </div>
  );
}

function TakeHome() {
  return (
    <div className="e8-takehome">
      <span className="e8-eyebrow">Take-home · make your own Task 6</span>
      <h2 className="e8-h2">Write three gaps for a friend</h2>
      <p className="e8-p">For each idea, write a two-line dialogue in your notebook. Leave one gap and put the given word in brackets. Write the answer on the back.</p>
      <ul className="e8-th-list">
        <li>Ask how often a friend plays a sport. Given word: (often)</li>
        <li>Suggest going to a café after school. Given word: (shall)</li>
        <li>Ask if you can borrow a pen. Given word: (mind)</li>
      </ul>
      <p className="e8-p">Next lesson, we will swap and solve each other’s.</p>
    </div>
  );
}

// ---- slides -----------------------------------------------------------------------------------------------
const SLIDES = [
  {
    stage: "E8 Task 6", time: null,
    note: "Alice is preparing for the E8, the Polish eighth-grade English exam. Task 6 is only 2 points, but it is the one where students lose points to the small rules (word limit, unchanged word). Today is 25 minutes on this one task type: 16 gaps, one at a time. Every item and the answer key are ours, written in the style of the task.",
    body: (
      <div className="e8-cover">
        <span className="e8-eyebrow">Sentenco · Custom Lesson · E8 Task 6</span>
        <h1 className="e8-h1">Finish the Dialogue</h1>
        <p className="e8-cover-p">Sixteen short dialogues, each with one gap. Write the missing words, use the given word, and stay inside three words.</p>
        <span className="e8-source">Format based on the E8 English exam, Task 6 (CKE, Poland). All items and the answer key are by Sentenco.</span>
      </div>
    ),
  },
  {
    stage: "Today’s Plan", time: "~0.5 min",
    note: "Read the plan in half a minute. The rule of the whole lesson: the other speaker’s line tells you what the missing question is about.",
    body: (
      <div className="e8-plan">
        <h2 className="e8-h2">Goal: find the clue, then write the chunk</h2>
        <p className="e8-p">In Task 6 the gap is a small chunk of grammar. The other line always gives you a clue, and three rules decide if the chunk is right.</p>
        <div className="e8-plan-list">
          {[
            ["Strategy", "Find the clue. Three rules of the gap. Two phrase banks", "4 min"],
            ["Block A", "How… questions", "5 min"],
            ["Block B", "What, which, where", "5 min"],
            ["Block C", "Suggest, ask, offer", "5 min"],
            ["Block D", "Grammar chunks", "5 min"],
            ["Wrap-up", "Score and five traps", "1 min"],
          ].map(([k, d, t]) => (
            <div key={k} className="e8-plan-item"><b>{k}</b><span>{d}</span><small>{t}</small></div>
          ))}
        </div>
      </div>
    ),
  },
  {
    stage: "Strategy · Find the Clue", time: "~1 min",
    note: "Have Alice read the three steps aloud, then move on. Repeat the phrase “the other line is your clue” all lesson.",
    body: (
      <Strategy
        n={1}
        title="The other line is your clue"
        steps={[
          "Read the whole dialogue first, both lines, before you write anything.",
          "The other speaker’s line tells you the type of question: a number, a price, a time, a place, or a reason.",
          "Say the whole sentence in your head with your chunk in it. Then write only the missing words.",
        ]}
      />
    ),
  },
  {
    stage: "Strategy · Three Rules", time: "~1 min",
    note: "These three rules are where points are lost. Do the worked example together, slowly. She will meet every rule again in the traps at the end.",
    body: (
      <Strategy
        n={2}
        title="Three rules of the gap"
        steps={[
          "Use the given word exactly as it is. Do not change its form.",
          "Write three words at most. The given word counts as one of them.",
          "Read the words after the gap. Is / are, do / does, have / has must fit them.",
        ]}
        example={<>Example: (early) ____ do you get up on Sundays? → <b>how early</b> (2 words, given word unchanged). ✗ <b>how early do</b> repeats “do”, which is already after the gap.</>}
      />
    ),
  },
  {
    stage: "Phrase Bank 1", time: "~1 min",
    note: "Read the cards aloud together. Do not memorise them; she will build the same chunks in the gaps. Ask her to point to the chunk for asking a price.",
    body: (
      <PhraseBank
        title="Question chunks"
        cards={[
          { job: "Ask how often / how long", phrases: ["How often do you…?", "How long does it last?", "How long have you…?"] },
          { job: "Ask about numbers", phrases: ["How many + countable (students)", "How much + price (How much are these?)", "How old is…?"] },
          { job: "Ask about time and place", phrases: ["What time does…?", "Where did you…?"] },
          { job: "Ask about choice and interests", phrases: ["Which one do you…?", "What do you like doing?", "What is she like?"] },
        ]}
      />
    ),
  },
  {
    stage: "Phrase Bank 2", time: "~1 min",
    note: "Same routine. The last card shows two short answers that also appear as gaps: Neither can I and don’t have enough.",
    body: (
      <PhraseBank
        title="Suggest, ask and agree"
        cards={[
          { job: "Suggest", phrases: ["Shall we…?", "Why don’t we…?", "Why not…?"] },
          { job: "Ask politely", phrases: ["Could you tell me…?", "Do you mind if I…?", "Would you mind…?"] },
          { job: "Talk about experience", phrases: ["Have you ever been…?", "How long have you…?"] },
          { job: "Agree and explain", phrases: ["Neither can I. / So do I.", "I don’t have enough…"] },
        ]}
      />
    ),
  },
  ...ITEMS.flatMap((it, idx) => {
    const n = idx + 1;
    const out = [];
    if (n === 9) {
      out.push({
        stage: "Halfway · Rule Check", time: "~0.5 min",
        note: "Half a minute. Ask her which rule has cost her a point so far, then keep going. Eight gaps done, eight to go.",
        body: (
          <div className="e8-strategy">
            <span className="e8-eyebrow">Halfway</span>
            <h2 className="e8-h2">Three checks before you press Check</h2>
            <ol className="e8-steps">
              <li><span className="e8-step-n">1</span><span><b>Given word.</b> Is it in my answer, unchanged?</span></li>
              <li><span className="e8-step-n">2</span><span><b>Count.</b> Three words or fewer, given word included?</span></li>
              <li><span className="e8-step-n">3</span><span><b>Fit.</b> Does my chunk work with the words after the gap?</span></li>
            </ol>
          </div>
        ),
      });
    }
    out.push({
      stage: `Block ${it.block} · Gap ${n} of 16`, time: n >= 13 ? "~1 min" : "~1.25 min",
      note: it.note,
      body: <GapItem n={n} item={it} />,
    });
    return out;
  }),
  {
    stage: "Your Score", time: "~0.5 min",
    note: "Read the total, then only talk about the block where she lost points. Which trap was it?",
    body: <ScoreByBlock />,
  },
  {
    stage: "Five Traps", time: "~0.5 min",
    note: "Read them one by one. Ask her which one caught her today.",
    body: <Traps />,
  },
  {
    stage: "Take-Home", time: null,
    note: "Homework: she writes her own Task 6 gaps. Next lesson, swap and solve two or three of hers as the warm-up.",
    body: <TakeHome />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: s.time, note: s.note }));

const extraStyles = `
.e6-bank-wrap { display: flex; flex-direction: column; align-items: center; gap: 6px; width: 100%; max-width: 820px; }
.e6-bank { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; margin-top: 4px; }
.e6-card { background: rgba(255,255,255,0.88); border: 1px solid #EBDFD0; border-radius: 14px; padding: 11px 18px; }
.e6-card b { display: block; font-weight: 800; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: #E0502F; margin-bottom: 4px; }
.e6-card ul { margin: 0; padding-left: 18px; }
.e6-card li { font-size: 16px; font-weight: 700; line-height: 1.55; color: #1B2A4A; }

.e6-wrap { width: 100%; max-width: 860px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.e6-help { margin: 0; font-size: 13px; font-weight: 700; color: #5A6B92; text-align: center; }
.e6-dialogue { width: 100%; display: flex; flex-direction: column; gap: 12px; }
.e6-line { display: flex; align-items: center; gap: 12px; }
.e6-line.is-y { flex-direction: row-reverse; }
.e6-who { width: 36px; height: 36px; flex-shrink: 0; border-radius: 50%; background: #1B2A4A; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 15px; }
.e6-line.is-y .e6-who { background: #FF6B4A; }
.e6-bubble { background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 16px; padding: 10px 20px; font-family: 'Fraunces', serif; font-weight: 600; font-size: 21px; line-height: 2; color: #1B2A4A; max-width: 810px; text-wrap: pretty; }
.e6-given { color: #E0502F; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 17px; margin: 0 8px 0 4px; }
.e6-bubble .e8-input { display: inline-block; width: 190px; max-width: 190px; margin: 0 6px; font-size: 17px; padding: 3px 10px; }
.e6-wrap .e8-why { width: 100%; max-width: 760px; }
`;

export default function E8Task6Lesson() {
  return <E8Player slides={SLIDES} extraStyles={extraStyles} />;
}
