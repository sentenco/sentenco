// RELAY Lesson 5: "Dream Destinations" | Travel & Adventures | Teens

export default {
  id: "relay-teens-travel-5",
  code: "L5",
  title: "Dream Destinations",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you have a dream travel destination?",
    sampleAnswer: "Yes, I do. I've always wanted to see Japan. Do you have a dream destination?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Where is your dream place to visit?", missingBeatHint: "Add why" },
      { question: "Who would you want to travel with?", missingBeatHint: "Add a reason" },
      { question: "Would you rather travel alone or with others someday?", missingBeatHint: "Add why" },
      { question: "Do you want to travel a lot when you're older?", missingBeatHint: "Add a detail" },
      { question: "If you could live anywhere for a year, where would it be?", missingBeatHint: "Add why" },
      { question: "Which country would you visit first?", missingBeatHint: "Add why" },
      { question: "What would you want to see there?", missingBeatHint: "Add a detail" },
      { question: "Do you want to visit a big city or a small town?", missingBeatHint: "Add why" },
      { question: "Would you like to see snow or sunshine on your dream trip?", missingBeatHint: "Add why" },
      { question: "How would you get there?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "You're talking with a friend about where you both want to travel someday. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend dreaming about future travel with you",
    opener: "If you could go anywhere right now, where would you go?",
  },

  pushIt: {
    prompt: "One harder one: “Is it better to travel when you're young or wait until you're older?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is dream destinations."],
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
      say: ["Now a real one. I'm a friend dreaming about future travel with you. Keep it going."],
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
