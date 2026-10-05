// RELAY Lesson 3: "New Places & Cultures" | Travel & Adventures | Teens

export default {
  id: "relay-teens-travel-3",
  code: "L3",
  title: "New Places & Cultures",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Have you ever visited a different country?",
    sampleAnswer: "Yes, I have. I visited last year with my family. Have you ever visited a different country?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's the most interesting place you've visited?", missingBeatHint: "Add why" },
      { question: "Do you like trying food from other places?", missingBeatHint: "Add a reason" },
      { question: "Have you ever met someone from a different country?", missingBeatHint: "Add a detail" },
      { question: "What language would you like to learn?", missingBeatHint: "Add why" },
      { question: "What's something different about another place you've visited?", missingBeatHint: "Add a detail" },
      { question: "Do you like learning about other countries?", missingBeatHint: "Add a reason" },
      { question: "What's a food you'd like to try from another country?", missingBeatHint: "Add why" },
      { question: "Do you know any words in another language?", missingBeatHint: "Add a detail" },
      { question: "Have you ever been to a festival in another place?", missingBeatHint: "Add a detail" },
      { question: "Do you want to live in another country someday?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "You meet an exchange student at school who's curious about where you're from. Keep the conversation going for at least 4 turns.",
    teacherRole: "An exchange student new to your school",
    opener: "Hi, I'm new here. Have you always lived in this area?",
  },

  pushIt: {
    prompt: "One harder one: “Is it important to learn about other cultures?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is new places and cultures."],
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
      say: ["Now a real one. I'm an exchange student new to your school. Keep it going."],
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
