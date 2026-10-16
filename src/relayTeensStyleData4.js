// RELAY Lesson 4: "Trends & Influences" | Style & Shopping | Teens

export default {
  id: "relay-teens-style-4",
  code: "L4",
  title: "Trends & Influences",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you follow fashion trends?",
    sampleAnswer: "A little. → I notice what people wear online. → Do you follow fashion trends?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's popular at your school right now?", missingBeatHint: "Add a detail" },
      { question: "Where do you get fashion ideas?", missingBeatHint: "Add a detail" },
      { question: "Do you follow any style influencers?", missingBeatHint: "Add why" },
      { question: "Have you ever copied someone's style?", missingBeatHint: "Add a detail" },
      { question: "Do trends change fast?", missingBeatHint: "Add an example" },
      { question: "What trend do you like?", missingBeatHint: "Add why" },
      { question: "Is there a trend you don't like?", missingBeatHint: "Add why" },
      { question: "Do you buy things because they're popular?", missingBeatHint: "Add a reason" },
      { question: "Do your friends have the same style as you?", missingBeatHint: "Add an example" },
      { question: "How would you describe your own style?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "A friend asks you to help choose a new look for the school dance. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend who wants a new look",
    opener: "I want to try a new style. What do you think would suit me?",
  },

  pushIt: {
    prompt: "One harder one: “Do trends make people lose their own style?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is trends and influences."],
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
      say: ["Now a real one. I'm a friend who wants a new look. Keep it going."],
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
