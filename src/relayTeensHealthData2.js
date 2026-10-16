// RELAY Lesson 2: "Staying Active" | Health & Feeling Good | Teens

export default {
  id: "relay-teens-health-2",
  code: "L2",
  title: "Staying Active",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you do any exercise?",
    sampleAnswer: "Yes, I do. → I play basketball twice a week. → Do you do any exercise?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What do you do to stay active?", missingBeatHint: "Add a detail" },
      { question: "How often do you exercise?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer exercising alone or with friends?", missingBeatHint: "Add why" },
      { question: "What's your favorite sport or activity?", missingBeatHint: "Add why" },
      { question: "Do you walk or bike to school?", missingBeatHint: "Add a reason" },
      { question: "Do you like PE class?", missingBeatHint: "Add why" },
      { question: "Have you ever been injured?", missingBeatHint: "Add a detail" },
      { question: "Do you watch sports or play them?", missingBeatHint: "Add a reason" },
      { question: "What's hard about exercising regularly?", missingBeatHint: "Add an example" },
      { question: "What new activity would you like to try?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A friend invites you to join a sports club. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend who wants you to join a sports club",
    opener: "We need one more person for our team. Want to join?",
  },

  pushIt: {
    prompt: "One harder one: “Should PE class be required every day?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is staying active."],
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
      say: ["Now a real one. I'm a friend who wants you to join a sports club. Keep it going."],
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
