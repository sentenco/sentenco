// RELAY Lesson 3: "Chores & Responsibilities" | Part-Time Jobs & Money | Teens

export default {
  id: "relay-teens-money-3",
  code: "L3",
  title: "Chores & Responsibilities",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you have chores at home?",
    sampleAnswer: "Yes, I do. I usually take out the trash and do the dishes. Do you have chores?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What chores do you usually do?", missingBeatHint: "Add a detail" },
      { question: "Do you get paid for doing chores?", missingBeatHint: "Add a detail" },
      { question: "What chore do you dislike the most?", missingBeatHint: "Add why" },
      { question: "Do you think kids should get an allowance for chores?", missingBeatHint: "Add a reason" },
      { question: "How do you split chores with your siblings?", missingBeatHint: "Add a detail" },
      { question: "Who does the dishes at your house?", missingBeatHint: "Add a detail" },
      { question: "Do you clean your own room?", missingBeatHint: "Add a detail" },
      { question: "What chore do you actually enjoy?", missingBeatHint: "Add why" },
      { question: "Do your parents ask you to do chores on weekends?", missingBeatHint: "Add a detail" },
      { question: "Would you do extra chores to earn more?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "Your parent is assigning weekend chores and you're negotiating who does what. Keep the conversation going for at least 4 turns.",
    teacherRole: "A parent assigning weekend chores",
    opener: "Okay, who wants to do the dishes this weekend?",
  },

  pushIt: {
    prompt: "One harder one: “Should teenagers be paid for doing chores at home?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is chores and responsibilities."],
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
      say: ["Now a real one. I'm a parent assigning weekend chores. Keep it going."],
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
