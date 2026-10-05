// RELAY Lesson 1: "Travel Habits" | Travel & Business Trips | Adults

export default {
  id: "relay-travel-1",
  code: "L1",
  title: "Travel Habits",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Baseline",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you travel often?",
    sampleAnswer: "Yes, I do. I travel for work a few times a year. Do you travel often?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Where was your last trip?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer traveling for work or for leisure?", missingBeatHint: "Add a reason" },
      { question: "Do you like flying?", missingBeatHint: "Add why" },
      { question: "How do you usually plan a trip?", missingBeatHint: "Add a detail" },
      { question: "Where would you like to travel next?", missingBeatHint: "Add why" },
      { question: "How often do you travel?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer cities or nature?", missingBeatHint: "Add why" },
      { question: "Do you travel alone or with others?", missingBeatHint: "Add a reason" },
      { question: "What's the best trip you've taken?", missingBeatHint: "Add a detail" },
      { question: "Do you book your trips online?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "You're sitting next to someone on a flight and they start a conversation. Keep the conversation going for at least 4 turns.",
    teacherRole: "A stranger sitting next to you on a flight",
    opener: "Are you traveling for business or pleasure?",
  },

  pushIt: {
    prompt: "One harder one: “Is business travel worth the time away from home?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Frame it fast: no theory, just the rule.",
      say: [
        "Today's rule is simple: every time I ask you something, you give three beats, the answer, one more detail, and a question back to me.",
        "That's it. We're going to drill it until it's automatic.",
      ],
      do: ["Keep this under a minute. The drill teaches the concept, not the intro."],
      timing: "1 min",
    },
    warmup: {
      goal: "Get the student to demonstrate the gap themselves, then name it.",
      say: [
        "Quick question. Answer however feels natural, don't think about it.",
        "Notice something: you answered and then stopped. That's exactly the habit we're fixing today.",
      ],
      do: ["Ask the question and stop. Don't nudge for more, don't hint that more is coming."],
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
      say: ["Now a real one. I'm a stranger sitting next to you on a flight. Keep it going."],
      do: [
        "Stay in character, don't break to coach mid-scene.",
        "Count how many turns they sustain before it stalls. That's today's real measurement.",
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
