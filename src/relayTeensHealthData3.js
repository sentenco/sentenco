// RELAY Lesson 3: "Stress & School Pressure" | Health & Feeling Good | Teens

export default {
  id: "relay-teens-health-3",
  code: "L3",
  title: "Stress & School Pressure",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you ever feel stressed about school?",
    sampleAnswer: "Yes, sometimes. → I get nervous before big tests. → Do you ever feel stressed about school?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What makes you stressed at school?", missingBeatHint: "Add a detail" },
      { question: "How do you feel before a test?", missingBeatHint: "Add a detail" },
      { question: "What do you do to relax?", missingBeatHint: "Add why" },
      { question: "Do you talk to anyone when you feel stressed?", missingBeatHint: "Add a reason" },
      { question: "Do you have too much homework?", missingBeatHint: "Add a reason" },
      { question: "What helps you focus when you study?", missingBeatHint: "Add a detail" },
      { question: "Do you feel pressure from your parents?", missingBeatHint: "Add a reason" },
      { question: "What's the most stressful part of your week?", missingBeatHint: "Add why" },
      { question: "Do you take breaks when you study?", missingBeatHint: "Add a reason" },
      { question: "What makes you feel calm?", missingBeatHint: "Add an example" },
    ],
  },

  yourTurn: {
    scenario: "A classmate is worried about an exam and wants advice. Keep the conversation going for at least 4 turns.",
    teacherRole: "A classmate worried about an exam",
    opener: "I have a big test tomorrow and I'm so nervous.",
  },

  pushIt: {
    prompt: "One harder one: “Do schools put too much pressure on students?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is stress and school pressure."],
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
      say: ["Now a real one. I'm a classmate worried about an exam. Keep it going."],
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
