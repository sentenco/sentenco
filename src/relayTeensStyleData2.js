// RELAY Lesson 2: "Shopping with Friends" | Style & Shopping | Teens

export default {
  id: "relay-teens-style-2",
  code: "L2",
  title: "Shopping with Friends",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you go shopping with your friends?",
    sampleAnswer: "Yes, sometimes. → We go to the mall on weekends. → Do you go shopping with your friends?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Where do you go shopping?", missingBeatHint: "Add a detail" },
      { question: "Who do you go shopping with?", missingBeatHint: "Add why" },
      { question: "How often do you go to the mall?", missingBeatHint: "Add a detail" },
      { question: "What do you usually buy?", missingBeatHint: "Add a detail" },
      { question: "Do you like trying on clothes?", missingBeatHint: "Add a reason" },
      { question: "Do you spend a lot or just look around?", missingBeatHint: "Add a reason" },
      { question: "What's your favorite store?", missingBeatHint: "Add why" },
      { question: "Do you ask your friends for advice?", missingBeatHint: "Add an example" },
      { question: "Do you like sales and discounts?", missingBeatHint: "Add a reason" },
      { question: "Have you ever bought something you didn't need?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "You and a friend are in a store and you can't decide what to buy. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend shopping with you",
    opener: "I like both of these. Which one looks better on me?",
  },

  pushIt: {
    prompt: "One harder one: “Is shopping a good way to spend free time?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is shopping with friends."],
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
      say: ["Now a real one. I'm a friend shopping with you. Keep it going."],
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
