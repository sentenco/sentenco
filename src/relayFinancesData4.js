// RELAY Lesson 4: "Investing" | Money & Finances | Adults

export default {
  id: "relay-finances-4",
  code: "L4",
  title: "Investing",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Have you ever invested money?",
    sampleAnswer: "Yes, I have. I started with a small amount in stocks. Have you ever invested money?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What do you know about investing?", missingBeatHint: "Add a detail" },
      { question: "Do you invest in stocks, property, or something else?", missingBeatHint: "Add a detail" },
      { question: "Are you comfortable taking financial risks?", missingBeatHint: "Add a reason" },
      { question: "Have you ever lost money on an investment?", missingBeatHint: "Add a detail" },
      { question: "Would you rather invest yourself or use an advisor?", missingBeatHint: "Add why" },
      { question: "Have you ever talked to a financial advisor?", missingBeatHint: "Add a detail" },
      { question: "Do you read financial news?", missingBeatHint: "Add a reason" },
      { question: "What's the safest way to invest?", missingBeatHint: "Add why" },
      { question: "Would you invest in a friend's business?", missingBeatHint: "Add why" },
      { question: "Do you think everyone should invest?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A coworker mentions they just started investing and wants your thoughts. Keep the conversation going for at least 4 turns.",
    teacherRole: "A coworker who just started investing",
    opener: "I just opened an investment account. Have you ever done that?",
  },

  pushIt: {
    prompt: "One harder one: “Is investing worth the risk for the average person?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is investing."],
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
      goal: "The core drill. Student produces all 3 beats, live, every round.",
      say: [
        "Same style: answer, add, ask, every time.",
        "If you stop after one, I'll just say which beat is missing and you try that same answer again.",
      ],
      do: [
        "Ask each question, let them respond fully before any feedback.",
        "If a beat's missing, name only the missing beat. Never supply your own version.",
        "Let them redo their own answer, not repeat yours.",
      ],
      timing: "16 min",
    },
    yourturn: {
      goal: "Unaided diagnostic. Sustain a real exchange without prompting.",
      say: ["Now a real one. I'm a coworker who just started investing. Keep it going."],
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
      do: ["No scorecard, no homework this lesson. Just end on the win."],
      timing: "1 min",
    },
  },
};
