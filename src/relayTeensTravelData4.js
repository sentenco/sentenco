// RELAY Lesson 4: "Adventures & Outdoors" | Travel & Adventures | Teens

export default {
  id: "relay-teens-travel-4",
  code: "L4",
  title: "Adventures & Outdoors",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you like outdoor activities?",
    sampleAnswer: "Yes, I do. I love hiking on weekends. Do you like outdoor activities?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Have you ever been camping or hiking?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer indoor or outdoor activities?", missingBeatHint: "Add a reason" },
      { question: "What's the most adventurous thing you've done?", missingBeatHint: "Add a detail" },
      { question: "Are you scared of any outdoor activities?", missingBeatHint: "Add why" },
      { question: "What adventure would you like to try someday?", missingBeatHint: "Add why" },
      { question: "Do you like swimming in the sea or in a pool?", missingBeatHint: "Add why" },
      { question: "Have you ever slept in a tent?", missingBeatHint: "Add a detail" },
      { question: "What's your favorite place to be outside?", missingBeatHint: "Add why" },
      { question: "Do you like climbing or walking up hills?", missingBeatHint: "Add a detail" },
      { question: "Are you afraid of any animals?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "You're planning an outdoor trip with friends and deciding what to do. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend planning an outdoor trip with you",
    opener: "So what should we actually do on this trip?",
  },

  pushIt: {
    prompt: "One harder one: “Are outdoor adventures worth the risk?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is adventures and the outdoors."],
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
      say: ["Now a real one. I'm a friend planning an outdoor trip with you. Keep it going."],
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
