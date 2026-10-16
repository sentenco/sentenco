import React from "react";
import { UnseenPlayer, UCover } from "./unseenKit.jsx";
import { KIT_STYLES, Define, OwnWords, Recap, Message, Sort, Check, Fix, Talk, Wrap } from "./linoyKit.jsx";

// Lesson 1 of Linoy's exam prep (teen, high B1): Stative vs action verbs.
// Kickoff: Definitions (dictionary style, choices hidden until the teacher reveals them).
// Lesson Proper: Read first, Notice, Learn, Practice, Use it, Wrap-up. About 25 minutes.
// The opening message is shown on the slide for her to read. No audio in this lesson.

const TITLE = "Stative vs Action Verbs";


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

const SLIDES = [
  // ---------- Title ----------
  {
    stage: "Exam preparation", title: true,
    note: "About half a minute. Read the title. Lesson 1 of 4. Today: which verbs never take -ing.",
    body: <UCover title={TITLE} module="LESSON 1" />,
  },

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
    stage: "Read. Then answer.",
    note: "About 2 minutes. She reads the message on the slide, then answers the two questions. Answers: outside the cinema. Verbs that are not actions: doubt, suppose, know, deserve.",
    body: (
      <Message
        text="“I’m waiting outside the cinema. I doubt Mia is coming. I suppose she’s still getting ready. I know she deserves a fun night, so let’s wait.”"
        questions={["Where is she waiting?", "Which verb is not an action?"]}
      />
    ),
  },
  {
    stage: "Sort the verbs from the message.",
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
  return <UnseenPlayer slides={SLIDES} extraStyles={KIT_STYLES} teacherNotes />;
}
