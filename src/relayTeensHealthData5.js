// RELAY Lesson 5: "Healthy Habits I Want" | Health & Feeling Good | Teens

export default {
  id: "relay-teens-health-5",
  code: "L5",
  title: "Healthy Habits I Want",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you have any healthy habits?",
    sampleAnswer: "Yes, a few. → I drink water every morning. → Do you have any healthy habits?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's one healthy habit you have?", missingBeatHint: "Add a detail" },
      { question: "What's one habit you want to change?", missingBeatHint: "Add why" },
      { question: "How do you start your morning?", missingBeatHint: "Add a detail" },
      { question: "Do you plan your day or just go with it?", missingBeatHint: "Add a reason" },
      { question: "What do you do to feel good?", missingBeatHint: "Add why" },
      { question: "Do you track your sleep or steps?", missingBeatHint: "Add a reason" },
      { question: "Who encourages you to be healthy?", missingBeatHint: "Add a detail" },
      { question: "What's hard about keeping a new habit?", missingBeatHint: "Add an example" },
      { question: "Do you spend time outside every day?", missingBeatHint: "Add a reason" },
      { question: "What healthy goal do you have this month?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A friend wants to build a new healthy habit and asks for your help. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend starting a healthy habit",
    opener: "I want to start a new habit, but I don't know where to begin.",
  },

  pushIt: {
    prompt: "One harder one: “Is it easier to build habits with friends?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is healthy habits i want."],
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
      say: ["Now a real one. I'm a friend starting a healthy habit. Keep it going."],
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
