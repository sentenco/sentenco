import React from "react";
import { UnseenPlayer, UCover } from "./unseenKit.jsx";
import { KIT_STYLES, Message, Sort, Fix, Talk, Wrap, Cards, Pick, Spell } from "./linoyKit.jsx";

// Lesson 3 of Linoy's exam prep (teen, high B1): Present progressive.
// Title slide, then the Kickoff (Spelling: the only place in the lesson with a voice), then the Lesson Proper:
// Read, Notice, Learn, Practice, Compare, Use it, Wrap-up. About 25 minutes. Nothing the teacher has to read out loud.

const TITLE = "Present Progressive";

const SLIDES = [
  // ---------- Title ----------
  {
    stage: "Exam preparation", title: true,
    note: "About half a minute. Read the title. Lesson 3 of 4. Today: what is happening right now.",
    body: <UCover title={TITLE} module="LESSON 3" />,
  },

  // ---------- Kickoff: Spelling (about 4 minutes) ----------
  {
    stage: "Listen. Spell the word.",
    note: "Kickoff, about 1.5 minutes. Press Play: the voice says the word, the word in a sentence, then the word again. She spells it aloud or types it. Press Check to mark what she typed, or Show answers to check by eye. If the voice sounds poor, say it yourself. Words and sentences: 1 chatting: She is chatting with her friends. 2 arriving: We are arriving at the station at six. 3 planning: I am planning a surprise party.",
    body: (
      <Spell
        id="k1"
        items={[
          { n: 1, word: "chatting", sentence: "She is chatting with her friends." },
          { n: 2, word: "arriving", sentence: "We are arriving at the station at six." },
          { n: 3, word: "planning", sentence: "I am planning a surprise party." },
        ]}
      />
    ),
  },
  {
    stage: "Listen. Spell the word.",
    note: "About 1.5 minutes. Two more, a little harder. Words and sentences: 4 studying: He is studying for his exam. 5 lying: The cat is lying on my bed. Studying keeps the y; lying changes ie to y.",
    body: (
      <Spell
        id="k2"
        items={[
          { n: 4, word: "studying", sentence: "He is studying for his exam." },
          { n: 5, word: "lying", sentence: "The cat is lying on my bed." },
        ]}
      />
    ),
  },
  {
    stage: "Which rule did each one follow?",
    note: "About 1 minute. She guesses the pattern; the lesson explains it. Answers: chatting and planning double the letter, arriving drops the e, studying just adds -ing, lying changes ie to y.",
    body: (
      <Sort
        id="s0"
        compact
        cats={[
          { key: "add", label: "Just add -ing" },
          { key: "drop", label: "Drop the e" },
          { key: "dbl", label: "Double the letter" },
          { key: "ie", label: "ie to y" },
        ]}
        items={[
          { w: "chatting", cat: "dbl" },
          { w: "arriving", cat: "drop" },
          { w: "planning", cat: "dbl" },
          { w: "studying", cat: "add" },
          { w: "lying", cat: "ie" },
        ]}
      />
    ),
  },

  // ---------- Lesson Proper (about 20 minutes) ----------
  {
    stage: "Read. Then answer.",
    note: "About 2 minutes. She reads the message on the slide, then answers the two questions. Answers: in the library. The teacher is walking around.",
    body: (
      <Message
        text="“I’m sitting in the library. My friends are studying, but I’m texting you! The teacher is walking around, so I can’t talk long.”"
        questions={["Where is she?", "Why can’t she talk long?"]}
      />
    ),
  },
  {
    stage: "What two parts do the verbs have?",
    note: "About 1.5 minutes. She finds am / is / are plus -ing in the message before she sees the rule. Ask which clue words tell us it is happening now.",
    body: (
      <Cards
        rows={[
          { label: "From the message", text: <>I<em>’m</em> sitt<em>ing</em> in the library.</> },
          { label: "From the message", text: <>My friends <em>are</em> study<em>ing</em>.</> },
          { label: "From the message", text: <>The teacher <em>is</em> walk<em>ing</em> around.</> },
        ]}
      />
    ),
  },
  {
    stage: "Read the rule.",
    note: "About 2 minutes. Three uses, one example each. Ask her for her own example of each use.",
    body: (
      <Cards
        rows={[
          { label: "Now", text: <>I’m <em>texting</em> you.</> },
          { label: "Around now", text: <>I’m <em>reading</em> a good book.</> },
          { label: "Temporary", text: <>I’m <em>staying</em> with my aunt.</> },
        ]}
      />
    ),
  },
  {
    stage: "Build it.",
    note: "About 2 minutes. am / is / are plus the -ing form. Ask her to turn the statement into a negative and a question for a different verb.",
    body: (
      <Cards
        rows={[
          { label: "Statement", text: <>I <em>am working</em>.</> },
          { label: "Negative", text: <>She <em>isn’t working</em>.</> },
          { label: "Question", text: <><em>Are</em> you <em>listening</em>?</> },
        ]}
      />
    ),
  },
  {
    stage: "Check the spelling.",
    note: "About 1.5 minutes. These are the four rules her Kickoff words followed. Ask her to say which Kickoff word goes in which box.",
    body: (
      <Cards
        cols={2}
        rows={[
          { label: "Add -ing", text: "study, studying" },
          { label: "Drop the e", text: "arrive, arriving" },
          { label: "Double the letter", text: "plan, planning" },
          { label: "ie to y", text: "lie, lying" },
        ]}
      />
    ),
  },
  {
    stage: "Choose the right form.",
    note: "About 1.5 minutes. Answers: is writing, are waiting, am studying.",
    body: (
      <Pick
        id="p1"
        items={[
          { n: 1, before: "Right now, she", after: "a message.", options: ["writes", "is writing"], correct: 1 },
          { n: 2, before: "Look! My friends", after: "outside.", options: ["wait", "are waiting"], correct: 1 },
          { n: 3, before: "At the moment, I", after: "for my exam.", options: ["study", "am studying"], correct: 1 },
        ]}
      />
    ),
  },
  {
    stage: "Write the -ing form.",
    note: "About 1.5 minutes. She says or types each -ing form. Press Show answers to check: beginning, deciding, tying. Begin doubles the n because the stress is on the last part.",
    body: (
      <Fix
        id="w1"
        items={[
          { wrong: "begin", right: "beginning" },
          { wrong: "decide", right: "deciding" },
          { wrong: "tie", right: "tying" },
        ]}
      />
    ),
  },
  {
    stage: "Same verb, two tenses.",
    note: "About 2 minutes. Compare a routine with right now. Ask her which clue words belong to each tense.",
    body: (
      <Cards
        cols={2}
        rows={[
          { label: "Present simple", text: <>I <em>play</em> football on Saturdays.</> },
          { label: "Present progressive", text: <>I’m <em>playing</em> football now.</> },
          { label: "Clue words", text: "usually, always, every week" },
          { label: "Clue words", text: "now, at the moment, today" },
        ]}
      />
    ),
  },
  {
    stage: "Choose the tense.",
    note: "About 1.5 minutes. Answers: play, is sleeping, works. Clue words: every week, Be quiet!, a job (permanent).",
    body: (
      <Pick
        id="t1"
        items={[
          { n: 1, before: "I", after: "tennis every week.", options: ["play", "am playing"], correct: 0 },
          { n: 2, before: "Be quiet! The baby", after: ".", options: ["sleeps", "is sleeping"], correct: 1 },
          { n: 3, before: "She", after: "in a bank.", options: ["works", "is working"], correct: 0 },
        ]}
      />
    ),
  },
  {
    stage: "Choose the tense.",
    note: "About 1.5 minutes. Same task, with the state verbs from lesson 1 as a trap. Answers: know, wants, is raining.",
    body: (
      <Pick
        id="t2"
        items={[
          { n: 1, before: "I", after: "the answer.", options: ["know", "am knowing"], correct: 0 },
          { n: 2, before: "He", after: "a new phone.", options: ["wants", "is wanting"], correct: 0 },
          { n: 3, before: "Look! It", after: ".", options: ["rains", "is raining"], correct: 1 },
        ]}
      />
    ),
  },
  {
    stage: "Look around you.",
    note: "About 2.5 minutes. She talks about her own room, screen or home, using the starters. Listen for am / is / are plus -ing and for state verbs wrongly in -ing. Write mistakes down for the end.",
    body: <Talk rows={["Right now, I’m …", "My family is …", "My friends are …"]} />,
  },
  {
    stage: "Remember.",
    note: "About 1 minute. She reads the three takeaways. Finish Lesson closes the window.",
    body: <Wrap rows={["Now and around now: am, is, are + -ing.", "Check the spelling of the -ing form.", "State verbs stay simple."]} />,
  },
];

export const LESSON_GUIDE = SLIDES.map((s) => ({ stage: s.stage, time: null, note: s.note }));

export default function PresentProgressiveLesson() {
  return <UnseenPlayer slides={SLIDES} extraStyles={KIT_STYLES} teacherNotes />;
}
