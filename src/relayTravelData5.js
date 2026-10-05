// RELAY Lesson 5: "Coming Home" | Travel & Business Trips | Adults

export default {
  id: "relay-travel-5",
  code: "L5",
  title: "Coming Home",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you enjoy coming home after a trip?",
    sampleAnswer: "Yes, I do. I like sleeping in my own bed again. Do you enjoy coming home after a trip?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What do you miss most when you travel?", missingBeatHint: "Add a detail" },
      { question: "Do you feel tired or energized after a trip?", missingBeatHint: "Add a reason" },
      { question: "What's the first thing you do when you get home?", missingBeatHint: "Add a detail" },
      { question: "Do you unpack right away or leave it for later?", missingBeatHint: "Add why" },
      { question: "What's one thing you'd do differently on your next trip?", missingBeatHint: "Add a detail" },
      { question: "Do you bring back souvenirs?", missingBeatHint: "Add a detail" },
      { question: "How do you feel when a trip ends?", missingBeatHint: "Add why" },
      { question: "Do you share your photos with friends?", missingBeatHint: "Add a detail" },
      { question: "Do you plan your next trip before you come home?", missingBeatHint: "Add a reason" },
      { question: "What's the best thing about being home?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A coworker asks about your trip on your first day back. Keep the conversation going for at least 4 turns.",
    teacherRole: "A coworker asking about your trip",
    opener: "Welcome back. How was the trip?",
  },

  pushIt: {
    prompt: "One harder one: “Is business travel becoming less necessary with video calls?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is coming home after a trip."],
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
      say: ["Now a real one. I'm a coworker asking about your trip. Keep it going."],
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
      goal: "Close warmly. This is the last lesson in the track.",
      say: ["Nice work today. That wraps up this track. You've built a real habit here."],
      do: ["No scorecard, no homework. Just end on the win."],
      timing: "1 min",
    },
  },
};
