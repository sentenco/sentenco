// RELAY Lesson 2: "School & Grades" | Future Plans & Ambitions | Teens

export default {
  id: "relay-teens-future-2",
  code: "L2",
  title: "School & Grades",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Are you a good student?",
    sampleAnswer: "Yes, I think so. I work hard on my assignments. Are you a good student?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What subject do you enjoy the most?", missingBeatHint: "Add why" },
      { question: "Do you study a lot for tests?", missingBeatHint: "Add a detail" },
      { question: "Do your grades matter to your future plans?", missingBeatHint: "Add a reason" },
      { question: "Have you ever struggled in a class?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer studying alone or with others?", missingBeatHint: "Add why" },
      { question: "What's your favorite class this year?", missingBeatHint: "Add why" },
      { question: "Do you ask teachers for help?", missingBeatHint: "Add a reason" },
      { question: "How do you remember things for tests?", missingBeatHint: "Add a detail" },
      { question: "Do you do homework right after school?", missingBeatHint: "Add a reason" },
      { question: "What was your best grade this year?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "You're studying with a classmate before a big test and talking about your goals. Keep the conversation going for at least 4 turns.",
    teacherRole: "A classmate studying with you",
    opener: "Are you nervous about this test?",
  },

  pushIt: {
    prompt: "One harder one: “Do grades really show how smart someone is?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is school and grades."],
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
      say: ["Now a real one. I'm a classmate studying with you. Keep it going."],
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
