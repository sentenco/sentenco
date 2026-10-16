// RELAY Lesson 3: "Shopping Online" | Style & Shopping | Teens

export default {
  id: "relay-teens-style-3",
  code: "L3",
  title: "Shopping Online",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you ever shop online?",
    sampleAnswer: "Sometimes. → My mom orders things and I choose them. → Do you ever shop online?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Have you ever bought something online?", missingBeatHint: "Add a detail" },
      { question: "What do you look for online?", missingBeatHint: "Add why" },
      { question: "Do you read reviews before you buy?", missingBeatHint: "Add a reason" },
      { question: "Do you prefer shopping online or in a store?", missingBeatHint: "Add why" },
      { question: "Who pays when you order something?", missingBeatHint: "Add a detail" },
      { question: "Have you ever received the wrong thing?", missingBeatHint: "Add a detail" },
      { question: "How long do you wait for your orders?", missingBeatHint: "Add a reason" },
      { question: "Do you save things in a wish list?", missingBeatHint: "Add a reason" },
      { question: "Do you see ads for things you want?", missingBeatHint: "Add an example" },
      { question: "What's the best thing you've ever bought online?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A friend wants to buy something online and asks for your advice. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend buying something online",
    opener: "I want to order these shoes online. Is that a good idea?",
  },

  pushIt: {
    prompt: "One harder one: “Is online shopping better than going to the store?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is shopping online."],
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
      say: ["Now a real one. I'm a friend buying something online. Keep it going."],
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
