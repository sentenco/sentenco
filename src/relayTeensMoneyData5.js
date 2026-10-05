// RELAY Lesson 5: "Money & the Future" | Part-Time Jobs & Money | Teens

export default {
  id: "relay-teens-money-5",
  code: "L5",
  title: "Money & the Future",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you ever think about money for the future?",
    sampleAnswer: "Yes, sometimes. I think about what job I'll have. Do you think about it too?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Do you think you'll have a job when you're older?", missingBeatHint: "Add a detail" },
      { question: "What job do you think would pay well?", missingBeatHint: "Add why" },
      { question: "Do you think you're good with money?", missingBeatHint: "Add a reason" },
      { question: "Would you rather have a job you love or one that pays a lot?", missingBeatHint: "Add why" },
      { question: "What's one thing you've learned about money?", missingBeatHint: "Add a detail" },
      { question: "Do you want to be rich someday?", missingBeatHint: "Add a reason" },
      { question: "What would you do if you won a lot of money?", missingBeatHint: "Add a detail" },
      { question: "Do you know anyone who is good at saving?", missingBeatHint: "Add a detail" },
      { question: "Would you ever start your own business?", missingBeatHint: "Add a reason" },
      { question: "Do you think money can buy happiness?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A relative asks what you want to do when you're older and about money. Keep the conversation going for at least 4 turns.",
    teacherRole: "A relative curious about your future plans",
    opener: "So, have you thought about what job you want when you're older?",
  },

  pushIt: {
    prompt: "One harder one: “Is money the most important thing when choosing a job?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is money and the future."],
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
      say: ["Now a real one. I'm a relative curious about your future plans. Keep it going."],
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
      goal: "Close warmly. This is the last lesson in the track.",
      say: ["Nice work today. That wraps up this track. You've built a real habit here."],
      do: ["No scorecard, no homework. Just end on the win."],
      timing: "1 min",
    },
  },
};
