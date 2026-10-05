// RELAY Lesson 5: "Big Financial Decisions" | Money & Finances | Adults

export default {
  id: "relay-finances-5",
  code: "L5",
  title: "Big Financial Decisions",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Have you ever made a big financial decision?",
    sampleAnswer: "Yes, I have. I bought a car last year. Have you ever made a big financial decision?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's the biggest purchase you've ever made?", missingBeatHint: "Add a detail" },
      { question: "Do you research a lot before big purchases?", missingBeatHint: "Add a reason" },
      { question: "Have you ever regretted a financial decision?", missingBeatHint: "Add a detail" },
      { question: "Do you ask others for advice on money matters?", missingBeatHint: "Add why" },
      { question: "What's a financial goal you have for the next few years?", missingBeatHint: "Add a detail" },
      { question: "Would you buy a house or rent?", missingBeatHint: "Add why" },
      { question: "Have you ever taken out a loan?", missingBeatHint: "Add a detail" },
      { question: "Do you think it's better to buy a new car or a used one?", missingBeatHint: "Add why" },
      { question: "How do you decide if something is worth the money?", missingBeatHint: "Add an example" },
      { question: "What's the best money advice you've ever received?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A family member asks for advice before making a big purchase. Keep the conversation going for at least 4 turns.",
    teacherRole: "A family member asking for financial advice",
    opener: "I'm thinking about making a big purchase. What do you think?",
  },

  pushIt: {
    prompt: "One harder one: “Is it better to make big financial decisions alone or with input from others?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is big financial decisions."],
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
      say: ["Now a real one. I'm a family member asking for financial advice. Keep it going."],
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
