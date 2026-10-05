// RELAY Lesson 3: "Hotels & Accommodations" | Travel & Business Trips | Adults

export default {
  id: "relay-travel-3",
  code: "L3",
  title: "Hotels & Accommodations",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you have a favorite type of place to stay?",
    sampleAnswer: "Yes, I do. I like smaller boutique hotels. Do you have a favorite type of place to stay?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Do you prefer hotels or other types of accommodation?", missingBeatHint: "Add a reason" },
      { question: "What do you look for when booking a place to stay?", missingBeatHint: "Add a detail" },
      { question: "Have you ever had a bad experience at a hotel?", missingBeatHint: "Add a detail" },
      { question: "Do you use the gym or pool when you travel?", missingBeatHint: "Add a reason" },
      { question: "What's the nicest place you've stayed at?", missingBeatHint: "Add a detail" },
      { question: "Do you read reviews before booking a hotel?", missingBeatHint: "Add a reason" },
      { question: "Do you like hotels with breakfast included?", missingBeatHint: "Add why" },
      { question: "What's the most important thing in a hotel room?", missingBeatHint: "Add why" },
      { question: "Have you ever stayed in a hostel or a rental apartment?", missingBeatHint: "Add a detail" },
      { question: "Do you ask for upgrades?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "You check in at a hotel front desk and the receptionist makes conversation. Keep the conversation going for at least 4 turns.",
    teacherRole: "A hotel receptionist checking you in",
    opener: "Welcome. Is this your first time staying with us?",
  },

  pushIt: {
    prompt: "One harder one: “Does the type of hotel really affect a business trip?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is hotels and accommodations."],
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
      say: ["Now a real one. I'm a hotel receptionist checking you in. Keep it going."],
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
