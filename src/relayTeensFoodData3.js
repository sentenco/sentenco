// RELAY Lesson 3: "Cooking at Home" | Food & Eating Out | Teens

export default {
  id: "relay-teens-food-3",
  code: "L3",
  title: "Cooking at Home",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you ever cook at home?",
    sampleAnswer: "Yes, sometimes. → I make pasta when my parents are busy. → Do you ever cook at home?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Who cooks at your home?", missingBeatHint: "Add a detail" },
      { question: "Can you cook anything?", missingBeatHint: "Add an example" },
      { question: "What's the first thing you learned to cook?", missingBeatHint: "Add a detail" },
      { question: "Do you help in the kitchen?", missingBeatHint: "Add a reason" },
      { question: "What's your favorite meal that someone cooks for you?", missingBeatHint: "Add why" },
      { question: "Do you like cooking?", missingBeatHint: "Add why" },
      { question: "What do you usually eat for dinner?", missingBeatHint: "Add a detail" },
      { question: "Have you ever burned something?", missingBeatHint: "Add a detail" },
      { question: "Do you watch cooking videos?", missingBeatHint: "Add a reason" },
      { question: "What would you like to learn to cook?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A friend comes over and wants to cook something together. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend who wants to cook with you",
    opener: "I'm hungry. Can we make something together?",
  },

  pushIt: {
    prompt: "One harder one: “Should everyone learn to cook before they move out?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is cooking at home."],
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
      say: ["Now a real one. I'm a friend who wants to cook with you. Keep it going."],
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
