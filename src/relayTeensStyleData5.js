// RELAY Lesson 5: "Gifts & Special Occasions" | Style & Shopping | Teens

export default {
  id: "relay-teens-style-5",
  code: "L5",
  title: "Gifts & Special Occasions",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you like giving gifts?",
    sampleAnswer: "Yes, I do. → I like finding something special for my friends. → Do you like giving gifts?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's the best gift you've ever received?", missingBeatHint: "Add why" },
      { question: "What's the best gift you've ever given?", missingBeatHint: "Add a detail" },
      { question: "Do you like birthday parties?", missingBeatHint: "Add why" },
      { question: "How do you choose a gift for a friend?", missingBeatHint: "Add a detail" },
      { question: "Do you wrap gifts or buy gift bags?", missingBeatHint: "Add a reason" },
      { question: "What do you wear to special events?", missingBeatHint: "Add a detail" },
      { question: "Do you make cards or buy them?", missingBeatHint: "Add a reason" },
      { question: "What's your favorite holiday?", missingBeatHint: "Add why" },
      { question: "Do you save money for gifts?", missingBeatHint: "Add a reason" },
      { question: "What would you like for your next birthday?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A friend asks you to help pick a birthday gift for someone. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend choosing a birthday gift",
    opener: "It's my sister's birthday soon. What should I get her?",
  },

  pushIt: {
    prompt: "One harder one: “Is a handmade gift better than a store-bought one?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is gifts and special occasions."],
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
      say: ["Now a real one. I'm a friend choosing a birthday gift. Keep it going."],
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
