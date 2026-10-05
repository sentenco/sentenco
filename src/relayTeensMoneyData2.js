// RELAY Lesson 2: "Saving & Spending" | Part-Time Jobs & Money | Teens

export default {
  id: "relay-teens-money-2",
  code: "L2",
  title: "Saving & Spending",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Are you good at saving money?",
    sampleAnswer: "Yes, I am. I put a little aside every month. Are you good at saving?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What are you saving up for right now?", missingBeatHint: "Add a detail" },
      { question: "Do you have a bank account?", missingBeatHint: "Add a detail" },
      { question: "What do you usually spend your money on?", missingBeatHint: "Add a detail" },
      { question: "Do your parents give you money for chores?", missingBeatHint: "Add a detail" },
      { question: "Would you rather save for something big or spend on small things?", missingBeatHint: "Add why" },
      { question: "Do you keep your money in a piggy bank or an account?", missingBeatHint: "Add a reason" },
      { question: "Do you save a little money every week?", missingBeatHint: "Add a detail" },
      { question: "Have you ever saved up for a long time?", missingBeatHint: "Add a detail" },
      { question: "What was the last thing you bought?", missingBeatHint: "Add a detail" },
      { question: "Do you buy things online?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "You're saving up for something with a friend and comparing progress. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend who's also saving up for something",
    opener: "How much have you saved so far?",
  },

  pushIt: {
    prompt: "One harder one: “Is it better to save money or spend it while you're young?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is saving and spending money."],
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
      say: ["Now a real one. I'm a friend who's also saving up for something. Keep it going."],
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
