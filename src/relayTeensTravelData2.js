// RELAY Lesson 2: "Packing & Planning" | Travel & Adventures | Teens

export default {
  id: "relay-teens-travel-2",
  code: "L2",
  title: "Packing & Planning",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Are you good at packing for trips?",
    sampleAnswer: "Yes, I am. I always make a list first. Are you good at packing?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's the one thing you always pack?", missingBeatHint: "Add why" },
      { question: "Do you like planning every detail or just going with the flow?", missingBeatHint: "Add a reason" },
      { question: "Have you ever forgotten something important on a trip?", missingBeatHint: "Add a detail" },
      { question: "Do you research a place before you go?", missingBeatHint: "Add a detail" },
      { question: "Who usually plans the trip in your family?", missingBeatHint: "Add a detail" },
      { question: "Do you pack your own bag?", missingBeatHint: "Add a detail" },
      { question: "Do you bring snacks on trips?", missingBeatHint: "Add a detail" },
      { question: "Do you pack the night before or on the day?", missingBeatHint: "Add a reason" },
      { question: "What do you always forget to pack?", missingBeatHint: "Add a detail" },
      { question: "Do you bring a book or a game for the trip?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "You're packing for a trip with a sibling and arguing about what to bring. Keep the conversation going for at least 4 turns.",
    teacherRole: "A sibling helping you pack",
    opener: "Do you really need to bring all that?",
  },

  pushIt: {
    prompt: "One harder one: “Is it better to plan a trip carefully or be spontaneous?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is packing and planning trips."],
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
      say: ["Now a real one. I'm a sibling helping you pack. Keep it going."],
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
