// RELAY Lesson 1: "What Do You Play?" | Gaming & Online Life | Teens

export default {
  id: "relay-teens-gaming-1",
  code: "L1",
  title: "What Do You Play?",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Baseline",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you play video games?",
    sampleAnswer: "Yes, I do. → I mostly play on my phone. → Do you play any games?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's your favorite game right now?", missingBeatHint: "Add why" },
      { question: "Do you play on your phone or a console?", missingBeatHint: "Add a detail" },
      { question: "Do you play alone or with friends?", missingBeatHint: "Add a reason" },
      { question: "How long do you usually play for?", missingBeatHint: "Add a detail" },
      { question: "Have you tried any new games lately?", missingBeatHint: "Add a detail" },
      { question: "What's the first game you ever played?", missingBeatHint: "Add a detail" },
      { question: "Who taught you to play games?", missingBeatHint: "Add a detail" },
      { question: "Do you have a favorite character?", missingBeatHint: "Add why" },
      { question: "What game do you want to play next?", missingBeatHint: "Add why" },
      { question: "Do you play games on weekdays or weekends?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "Someone in your class notices your gaming backpack and asks about it. Keep the conversation going for at least 4 turns.",
    teacherRole: "A classmate who noticed your gaming stuff",
    opener: "Oh cool, are you into gaming? What do you play?",
  },

  pushIt: {
    prompt: "One harder one: “Do you think video games are a waste of time?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Frame it fast: no theory, just the rule.",
      say: [
        "Today's rule is simple: every time I ask you something, you give three beats: the answer, one more detail, and a question back to me.",
        "That's it. We're going to drill it until it's automatic.",
      ],
      do: ["Keep this under a minute: the drill teaches the concept, not the intro."],
      timing: "1 min",
    },
    warmup: {
      goal: "Get the student to demonstrate the gap themselves, then name it.",
      say: [
        "Quick question. Answer however feels natural, don't think about it.",
        "Notice something: you answered and then stopped. That's exactly the habit we're fixing today.",
      ],
      do: ["Ask the question and stop. Don't nudge for more, don't hint that more is coming."],
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
      say: ["Now a real one. I'm a classmate who noticed your gaming stuff. Keep it going."],
      do: [
        "Stay in character, don't break to coach mid-scene.",
        "Count how many turns they sustain before it stalls: that's today's real measurement.",
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
