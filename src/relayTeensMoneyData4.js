// RELAY Lesson 4: "Big Purchases" | Part-Time Jobs & Money | Teens

export default {
  id: "relay-teens-money-4",
  code: "L4",
  title: "Big Purchases",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Is there something big you want to buy?",
    sampleAnswer: "Yes, there is. I'm saving up for new headphones. Is there something you want to buy?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's something you've been wanting to buy?", missingBeatHint: "Add why" },
      { question: "Do you ask your parents for money or earn it yourself?", missingBeatHint: "Add a detail" },
      { question: "Have you ever regretted buying something?", missingBeatHint: "Add a detail" },
      { question: "Do you compare prices before you buy something?", missingBeatHint: "Add a reason" },
      { question: "Would you rather get a gift or the money to buy it yourself?", missingBeatHint: "Add why" },
      { question: "Would you buy a phone or a game console first?", missingBeatHint: "Add why" },
      { question: "Do you check reviews before you buy?", missingBeatHint: "Add a reason" },
      { question: "Have you ever returned something you bought?", missingBeatHint: "Add a detail" },
      { question: "Do you ever wait for a sale?", missingBeatHint: "Add a reason" },
      { question: "What's the best thing you've ever bought?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "You're at a store deciding whether to buy something and a friend is giving their opinion. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend shopping with you",
    opener: "Are you actually going to buy that?",
  },

  pushIt: {
    prompt: "One harder one: “Is it smart to save up for something instead of buying it right away?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is big purchases."],
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
      do: ["No scorecard, no homework this lesson. Just end on the win."],
      timing: "1 min",
    },
  },
};
