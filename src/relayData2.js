// RELAY Lesson 2: "Weekend Plans" | Small talk | Adults

export default {
  id: "relay-2",
  code: "L2",
  title: "Weekend Plans",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you have plans this weekend?",
    sampleAnswer: "Yes, I do. → I'm going hiking with a friend. → Do you have any plans?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What do you usually do on Saturdays?", missingBeatHint: "Add a detail" },
      { question: "Do you like going out or staying in?", missingBeatHint: "Add a reason" },
      { question: "Have you seen any good movies lately?", missingBeatHint: "Add what" },
      { question: "Do you play any sports?", missingBeatHint: "Add a detail" },
      { question: "What are you doing tonight?", missingBeatHint: "Add a plan detail" },
      { question: "Do you like to travel on weekends?", missingBeatHint: "Add a reason" },
      { question: "What's your favorite way to relax?", missingBeatHint: "Add why" },
      { question: "Do you cook on weekends?", missingBeatHint: "Add a detail" },
      { question: "Have you read any good books lately?", missingBeatHint: "Add a detail" },
      { question: "Do you have any plans for next weekend?", missingBeatHint: "Add a plan detail" },
    ],
  },

  yourTurn: {
    scenario: "A friend texts you asking what you're up to this weekend. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend checking in over text",
    opener: "Hey! Any big plans this weekend?",
  },

  pushIt: {
    prompt: "One harder one: “Do you think weekends are long enough?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule as last time: Answer, Add, Ask. Today's topic is weekends."],
      do: ["Keep this under a minute."],
      timing: "1 min",
    },
    warmup: {
      goal: "Check whether the habit carried over from last lesson, or if it's back to bare answers.",
      say: [
        "Quick question. Answer however feels natural.",
        "Notice whether you added more this time, or stopped again. Either is useful information.",
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
      say: ["Now a real one. I'm a friend texting to check in on your weekend. Keep it going."],
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
