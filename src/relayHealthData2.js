// RELAY Lesson 2: "Sleep & Rest" | Health & Wellness | Adults

export default {
  id: "relay-health-2",
  code: "L2",
  title: "Sleep & Rest",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you get enough sleep?",
    sampleAnswer: "Not really. I usually stay up too late. Do you get enough sleep?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What time do you usually go to bed?", missingBeatHint: "Add a detail" },
      { question: "Do you have trouble falling asleep?", missingBeatHint: "Add a reason" },
      { question: "What helps you relax before bed?", missingBeatHint: "Add a detail" },
      { question: "Do you nap during the day?", missingBeatHint: "Add why" },
      { question: "How do you feel when you don't get enough sleep?", missingBeatHint: "Add a detail" },
      { question: "How many hours do you usually sleep?", missingBeatHint: "Add a detail" },
      { question: "Do you wake up early or late?", missingBeatHint: "Add a reason" },
      { question: "Do you use your phone before bed?", missingBeatHint: "Add a detail" },
      { question: "Do you have a bedtime routine?", missingBeatHint: "Add a detail" },
      { question: "What do you do when you can't sleep?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "A friend notices you look tired and asks about it. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend who notices you look tired",
    opener: "You look exhausted. Did you not sleep well?",
  },

  pushIt: {
    prompt: "One harder one: “Is sleep more important than diet or exercise for health?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is sleep and rest."],
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
      say: ["Now a real one. I'm a friend who notices you look tired. Keep it going."],
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
