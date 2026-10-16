import React from "react";
import { UnseenPlayer, UCover } from "./unseenKit.jsx";
import { KIT_STYLES, Define, Recap, Message, Sort, Fix, Talk, Wrap, Synonyms, Cards, Pick, Order } from "./linoyKit.jsx";

// Lesson 2 of Linoy's exam prep (teen, high B1): Present simple.
// Title slide, then the Kickoff (Synonyms, shown as text, answers behind a button), then the Lesson Proper:
// Read, Notice, Learn, Practice, Use it, Wrap-up. About 25 minutes. No audio and nothing the teacher has to read out.

const TITLE = "Present Simple";

const SLIDES = [
  // ---------- Title ----------
  {
    stage: "Exam preparation", title: true,
    note: "About half a minute. Read the title. Lesson 2 of 4. Today: routines, habits and facts.",
    body: <UCover title={TITLE} module="LESSON 2" />,
  },

  // ---------- Kickoff: Synonyms (about 4 minutes) ----------
  {
    stage: "Say a word with the same meaning.",
    note: "Kickoff, about 1.5 minutes. She gives a word with the same meaning for each one, without help. If she is stuck, press Show answers; Hide answers puts them away again. Answers: often, sometimes, all the time.",
    body: (
      <Synonyms
        id="k1"
        pos="adverb"
        rows={[
          { word: "frequently", syn: "often" },
          { word: "occasionally", syn: "sometimes" },
          { word: "constantly", syn: "all the time" },
        ]}
      />
    ),
  },
  {
    stage: "Which fits better?",
    note: "About 1.5 minutes. She chooses before seeing the choices if she can. Press Show choices if she is stuck; Hide choices puts them away again. Answer: constantly (almost every minute means all the time).",
    body: <Define id="k2" text="She checks her phone ______, almost every minute." choices={["occasionally", "constantly"]} correct={1} />,
  },
  {
    stage: "Say one sentence with each word.",
    note: "About 1 minute. One sentence for each word, about her own life. They come back in the lesson.",
    body: <Recap words={["frequently", "occasionally", "constantly"]} />,
  },

  // ---------- Lesson Proper (about 20 minutes) ----------
  {
    stage: "Read. Then answer.",
    note: "About 2 minutes. She reads the message on the slide, then answers the two questions. Answers: Ella wakes up early (six). Her sister studies late.",
    body: (
      <Message
        text="“I usually wake up at six because I walk my dog before school. My sister never gets up before seven. She studies late, so she sleeps late.”"
        questions={["Who wakes up early?", "Who studies late?"]}
      />
    ),
  },
  {
    stage: "Sort the verbs from the message.",
    note: "About 2 minutes. She notices the -s before she sees the rule. I / we / they: wake, walk. He / she / it: gets, studies, sleeps. Ask: which verbs end in -s, and who are they about?",
    body: (
      <Sort
        id="s1"
        cats={[{ key: "i", label: "I / we / they" }, { key: "she", label: "he / she / it" }]}
        items={[
          { w: "wake", cat: "i" },
          { w: "studies", cat: "she" },
          { w: "walk", cat: "i" },
          { w: "gets", cat: "she" },
          { w: "sleeps", cat: "she" },
        ]}
      />
    ),
  },
  {
    stage: "Read the rule.",
    note: "About 1.5 minutes. Three uses, one example each. Ask her for her own example of each use.",
    body: (
      <Cards
        rows={[
          { label: "Routines", text: <>I <em>walk</em> to school.</> },
          { label: "Facts", text: <>Water <em>boils</em> at 100°C.</> },
          { label: "Schedules", text: <>The bus <em>leaves</em> at 7.</> },
        ]}
      />
    ),
  },
  {
    stage: "Check the endings.",
    note: "About 2 minutes. This is the -s / -es spelling rule, and it is on her exam. Ask for one more verb in each box: teach, fix, fly, do.",
    body: (
      <Cards
        cols={2}
        rows={[
          { label: "+ s", text: "walk, walks" },
          { label: "+ es", text: "watch, watches · go, goes" },
          { label: "y to ies", text: "study, studies" },
          { label: "Special", text: "have, has" },
        ]}
      />
    ),
  },
  {
    stage: "Make it negative or a question.",
    note: "About 2 minutes. After does or doesn’t, the verb loses its -s. Ask her to turn the Ella sentences into questions.",
    body: (
      <Cards
        rows={[
          { label: "Negative", text: <>She <em>doesn’t</em> study late.</> },
          { label: "Question", text: <><em>Does</em> she study late?</> },
          { label: "Remember", text: "After does, no -s." },
        ]}
      />
    ),
  },
  {
    stage: "Where does the word go?",
    note: "About 1.5 minutes. Frequency words go before the main verb, and after am, is and are. Use her Kickoff words in your examples: She frequently… She is constantly…",
    body: (
      <Cards
        rows={[
          { label: "Before the verb", text: <>He <em>always</em> eats breakfast.</> },
          { label: "After am, is, are", text: <>He is <em>always</em> late.</> },
        ]}
      />
    ),
  },
  {
    stage: "Choose the right form.",
    note: "About 1.5 minutes. Answers: watches, goes, study.",
    body: (
      <Pick
        id="p1"
        items={[
          { n: 1, before: "She", after: "TV at night.", options: ["watch", "watches"], correct: 1 },
          { n: 2, before: "My dad", after: "to work by bus.", options: ["go", "goes"], correct: 1 },
          { n: 3, before: "My friends", after: "English on Fridays.", options: ["study", "studies"], correct: 0 },
        ]}
      />
    ),
  },
  {
    stage: "Make it negative.",
    note: "About 1.5 minutes. She says or types each negative sentence. Press Show answers to check.",
    body: (
      <Fix
        id="n1"
        items={[
          { wrong: "He plays the guitar.", right: "He doesn’t play the guitar." },
          { wrong: "We eat lunch at school.", right: "We don’t eat lunch at school." },
          { wrong: "My sister likes coffee.", right: "My sister doesn’t like coffee." },
        ]}
      />
    ),
  },
  {
    stage: "Put the words in order.",
    note: "About 2 minutes. She taps the words one by one. A wrong order turns red; Start again clears it. Answers: My brother never gets up on time. Does your sister always study at night?",
    body: (
      <Order
        id="o1"
        sentences={[
          { words: ["never", "my", "brother", "gets", "up", "on time"], answer: "my brother never gets up on time" },
          { words: ["study", "does", "always", "your", "sister", "at night"], answer: "does your sister always study at night" },
        ]}
      />
    ),
  },
  {
    stage: "Interview your teacher.",
    note: "About 3 minutes. She asks you three questions about your routine, using Do or Does and a frequency word (usually, never, sometimes, frequently). Listen for do / does and the -s ending, and write mistakes down for the end.",
    body: <Talk rows={["Do you usually …?", "Does your family ever …?", "What time does … start?"]} />,
  },
  {
    stage: "Remember.",
    note: "About 1 minute. She reads the three takeaways. Finish Lesson closes the window.",
    body: <Wrap rows={["Routines, habits and facts.", "He, she, it: add -s or -es.", "After does, no -s."]} />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

export default function PresentSimpleLesson() {
  return <UnseenPlayer slides={SLIDES} extraStyles={KIT_STYLES} teacherNotes />;
}
