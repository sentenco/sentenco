// RELAY Lesson 2: "Eating Out with Friends" | Food & Eating Out | Teens

export default {
  id: "relay-teens-food-2",
  code: "L2",
  title: "Eating Out with Friends",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you ever eat out with your friends?",
    sampleAnswer: "Yes, sometimes. → We usually go to a burger place after school. → Do you eat out with your friends?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Where do you go when you eat out with friends?", missingBeatHint: "Add a detail" },
      { question: "How often do you eat out?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer fast food or a café?", missingBeatHint: "Add why" },
      { question: "What do you usually order?", missingBeatHint: "Add a detail" },
      { question: "Do you share food with your friends?", missingBeatHint: "Add a reason" },
      { question: "Who pays when you eat out?", missingBeatHint: "Add a detail" },
      { question: "Have you ever had a bad meal at a restaurant?", missingBeatHint: "Add a detail" },
      { question: "Do you eat out on weekdays or on weekends?", missingBeatHint: "Add a reason" },
      { question: "What's your favorite place to eat?", missingBeatHint: "Add why" },
      { question: "Do you like trying new restaurants?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "You and a friend are deciding where to eat after school. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend deciding where to eat",
    opener: "I'm so hungry. Where do you want to go?",
  },

  pushIt: {
    prompt: "One harder one: “Is fast food really that bad for you?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is eating out with friends."],
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
      say: ["Now a real one. I'm a friend deciding where to eat. Keep it going."],
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
