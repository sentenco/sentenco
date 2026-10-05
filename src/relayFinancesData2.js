// RELAY Lesson 2: "Bills & Expenses" | Money & Finances | Adults

export default {
  id: "relay-finances-2",
  code: "L2",
  title: "Bills & Expenses",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you pay your bills on time?",
    sampleAnswer: "Yes, usually. I set reminders on my phone. Do you pay your bills on time?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's your biggest monthly expense?", missingBeatHint: "Add a detail" },
      { question: "Do you pay bills online or by other methods?", missingBeatHint: "Add a reason" },
      { question: "Have you ever forgotten to pay a bill?", missingBeatHint: "Add a detail" },
      { question: "Do you split expenses with anyone?", missingBeatHint: "Add a detail" },
      { question: "What's one expense you'd like to reduce?", missingBeatHint: "Add why" },
      { question: "Do you pay your bills on time?", missingBeatHint: "Add a detail" },
      { question: "What's your cheapest monthly bill?", missingBeatHint: "Add a detail" },
      { question: "Do you have any subscriptions?", missingBeatHint: "Add a detail" },
      { question: "Do you compare prices for services?", missingBeatHint: "Add a reason" },
      { question: "Who manages the bills in your home?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "A roommate wants to talk about splitting this month's bills. Keep the conversation going for at least 4 turns.",
    teacherRole: "A roommate discussing shared bills",
    opener: "Hey, have you looked at this month's bills yet?",
  },

  pushIt: {
    prompt: "One harder one: “Is it better to split expenses evenly or based on income?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is bills and expenses."],
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
      say: ["Now a real one. I'm a roommate discussing shared bills. Keep it going."],
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
