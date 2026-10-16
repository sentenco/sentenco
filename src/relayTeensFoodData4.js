// RELAY Lesson 4: "Trying New Food" | Food & Eating Out | Teens

export default {
  id: "relay-teens-food-4",
  code: "L4",
  title: "Trying New Food",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you like trying new food?",
    sampleAnswer: "Yes, I do. → I tried sushi for the first time last month. → Do you like trying new food?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's the strangest food you've ever tried?", missingBeatHint: "Add a detail" },
      { question: "Have you ever tried food from another country?", missingBeatHint: "Add a detail" },
      { question: "What's your favorite food from another country?", missingBeatHint: "Add why" },
      { question: "Do you eat the same things every week?", missingBeatHint: "Add a reason" },
      { question: "Would you try a food you've never seen before?", missingBeatHint: "Add why" },
      { question: "Is there a food you were afraid to try?", missingBeatHint: "Add a detail" },
      { question: "What food did you hate as a kid but like now?", missingBeatHint: "Add why" },
      { question: "Do your friends like trying new food?", missingBeatHint: "Add an example" },
      { question: "What food would you like to try next?", missingBeatHint: "Add why" },
      { question: "What's a food from your country that visitors should try?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "A friend from another country is visiting and wants to try local food. Keep the conversation going for at least 4 turns.",
    teacherRole: "A visiting friend who wants to try local food",
    opener: "Everything looks interesting. What should I try first?",
  },

  pushIt: {
    prompt: "One harder one: “Is it rude to say you don't like someone's food?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is trying new food."],
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
      say: ["Now a real one. I'm a visiting friend who wants to try local food. Keep it going."],
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
