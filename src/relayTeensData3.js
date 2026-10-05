// RELAY Lesson 3: "Shows & Social Media" | Small talk | Teens

export default {
  id: "relay-teens-3",
  code: "L3",
  title: "Shows & Social Media",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you watch a lot of shows?",
    sampleAnswer: "Yes, I do. → I watch a new episode every night. → Do you watch a lot of shows?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's your favorite show right now?", missingBeatHint: "Add why" },
      { question: "Do you use social media a lot?", missingBeatHint: "Add a reason" },
      { question: "What kind of videos do you like watching?", missingBeatHint: "Add a detail" },
      { question: "Do you follow any celebrities or creators?", missingBeatHint: "Add a detail" },
      { question: "What's the last thing you posted?", missingBeatHint: "Add a detail" },
      { question: "Do you watch shows on your phone or on TV?", missingBeatHint: "Add a reason" },
      { question: "What's the last movie you watched?", missingBeatHint: "Add a detail" },
      { question: "Do you like reality shows or dramas?", missingBeatHint: "Add why" },
      { question: "Which app do you open first in the morning?", missingBeatHint: "Add why" },
      { question: "Do you ever take a break from social media?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "A classmate asks what you've been watching lately. Keep the conversation going for at least 4 turns.",
    teacherRole: "A classmate curious about what you watch",
    opener: "Have you watched anything good lately?",
  },

  pushIt: {
    prompt: "One harder one: “Do you think people spend too much time on social media?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is shows and social media."],
      do: ["Keep this under a minute."],
      timing: "1 min",
    },
    warmup: {
      goal: "Check whether the habit is holding up on a new topic.",
      say: [
        "Quick question. Answer however feels natural.",
        "Notice whether you added more this time, or stopped again.",
      ],
      do: ["Ask the question and stop. Don't nudge for more."],
      timing: "1 min",
    },
    bounce: {
      goal: "The core drill: student produces all 3 beats, live, every round.",
      say: [
        "Same style: answer, add, ask, every time.",
        "If you stop after one, I'll just say which beat is missing and you try that same answer again.",
      ],
      do: [
        "Ask each question, let them respond fully before any feedback.",
        "If a beat's missing, name only the missing beat: never supply your own version.",
        "Let them redo their own answer, not repeat yours.",
      ],
      timing: "16 min",
    },
    yourturn: {
      goal: "Unaided diagnostic: sustain a real exchange without prompting.",
      say: ["Now a real one. I'm a classmate asking what you've been watching. Keep it going."],
      do: [
        "Stay in character, don't break to coach mid-scene.",
        "Count how many turns they sustain before it stalls.",
      ],
      timing: "3 min",
    },
    pushit: {
      goal: "Optional stretch if time allows.",
      say: ["One more, tougher topic, still three beats."],
      do: ["Skip if short on time."],
      timing: "2 min (optional)",
    },
    end: {
      goal: "Close warmly, no score to deliver.",
      say: ["Nice work today. See you next lesson."],
      do: ["No scorecard, no homework this lesson: just end on the win."],
      timing: "1 min",
    },
  },
};
