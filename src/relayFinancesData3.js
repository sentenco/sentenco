// RELAY Lesson 3: "Saving for the Future" | Money & Finances | Adults

export default {
  id: "relay-finances-3",
  code: "L3",
  title: "Saving for the Future",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you save for retirement or the future?",
    sampleAnswer: "Yes, I do. I put a little away each paycheck. Do you save for the future?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What are you currently saving for?", missingBeatHint: "Add a detail" },
      { question: "Do you have a savings goal?", missingBeatHint: "Add a reason" },
      { question: "Have you started saving for retirement?", missingBeatHint: "Add a detail" },
      { question: "Do you think about the future often when it comes to money?", missingBeatHint: "Add why" },
      { question: "What's one financial habit you're proud of?", missingBeatHint: "Add a detail" },
      { question: "Do you have an emergency fund?", missingBeatHint: "Add a reason" },
      { question: "Do you save a fixed amount each month?", missingBeatHint: "Add a detail" },
      { question: "What would you do with an extra bonus?", missingBeatHint: "Add why" },
      { question: "Do you think it's important to save early?", missingBeatHint: "Add why" },
      { question: "Did your parents teach you about saving?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "A financial advisor asks about your savings goals. Keep the conversation going for at least 4 turns.",
    teacherRole: "A financial advisor asking about your goals",
    opener: "So, what are you currently saving toward?",
  },

  pushIt: {
    prompt: "One harder one: “Is it ever too early to start saving for retirement?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is saving for the future."],
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
      say: ["Now a real one. I'm a financial advisor asking about your goals. Keep it going."],
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
