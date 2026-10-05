// RELAY Lesson 5: "Food & Restaurants" | Small talk | Adults

export default {
  id: "relay-5",
  code: "L5",
  title: "Food & Restaurants",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you like cooking?",
    sampleAnswer: "Yes, I do. → I love trying new recipes. → Do you like cooking?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's your favorite restaurant?", missingBeatHint: "Add why" },
      { question: "Do you prefer eating out or cooking at home?", missingBeatHint: "Add a reason" },
      { question: "Have you tried any new food lately?", missingBeatHint: "Add a detail" },
      { question: "Do you like spicy food?", missingBeatHint: "Add a reason" },
      { question: "What did you have for breakfast?", missingBeatHint: "Add a detail" },
      { question: "What's your favorite type of cuisine?", missingBeatHint: "Add why" },
      { question: "Do you like trying street food?", missingBeatHint: "Add a reason" },
      { question: "Do you drink coffee or tea?", missingBeatHint: "Add why" },
      { question: "What's the best meal you've ever had?", missingBeatHint: "Add a detail" },
      { question: "Do you have a dish you can cook well?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "You're at a restaurant and the server strikes up a quick conversation while taking your order. Keep it going for at least 4 turns.",
    teacherRole: "A friendly server at a restaurant",
    opener: "First time here, or have you tried us before?",
  },

  pushIt: {
    prompt: "One harder one: “Do you think eating out is worth the price?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is food and restaurants."],
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
      say: ["Now a real one. I'm your server at a restaurant. Keep it going."],
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
      goal: "Close warmly: this is the last lesson in the track.",
      say: ["Nice work today. That wraps up this track. You've built a real habit here."],
      do: ["No scorecard, no homework: just end on the win."],
      timing: "1 min",
    },
  },
};
