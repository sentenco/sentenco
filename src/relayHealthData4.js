// RELAY Lesson 4: "Stress & Balance" | Health & Wellness | Adults

export default {
  id: "relay-health-4",
  code: "L4",
  title: "Stress & Balance",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you feel stressed often?",
    sampleAnswer: "Yes, sometimes. Work gets busy and it piles up. Do you feel stressed often?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What usually causes you the most stress?", missingBeatHint: "Add a detail" },
      { question: "How do you usually deal with stress?", missingBeatHint: "Add a detail" },
      { question: "Do you think you have a good work-life balance?", missingBeatHint: "Add a reason" },
      { question: "Have you ever taken time off just to rest?", missingBeatHint: "Add a detail" },
      { question: "What helps you relax after a stressful day?", missingBeatHint: "Add a detail" },
      { question: "Do you take breaks during your workday?", missingBeatHint: "Add a reason" },
      { question: "Do you have a hobby that helps you relax?", missingBeatHint: "Add a detail" },
      { question: "Do you ever feel overwhelmed?", missingBeatHint: "Add a detail" },
      { question: "Who do you talk to when you're stressed?", missingBeatHint: "Add why" },
      { question: "What does a perfect relaxing day look like for you?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "A friend asks how you're handling a busy time at work. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend checking in during a busy time",
    opener: "You've seemed really busy lately. How are you holding up?",
  },

  pushIt: {
    prompt: "One harder one: “Is it possible to have a perfect work-life balance?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is stress and balance."],
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
      say: ["Now a real one. I'm a friend checking in during a busy time. Keep it going."],
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
