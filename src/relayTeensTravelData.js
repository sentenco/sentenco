// RELAY Lesson 1: "Trips & Vacations" | Travel & Adventures | Teens

export default {
  id: "relay-teens-travel-1",
  code: "L1",
  title: "Trips & Vacations",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Baseline",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you like traveling?",
    sampleAnswer: "Yes, I do. I love seeing new places. Do you like traveling too?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Where was the last place you traveled to?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer the beach or the mountains?", missingBeatHint: "Add a reason" },
      { question: "Have you ever been on a school trip?", missingBeatHint: "Add a detail" },
      { question: "Do you like flying or driving on trips?", missingBeatHint: "Add why" },
      { question: "Where would you like to go someday?", missingBeatHint: "Add why" },
      { question: "Who do you usually travel with?", missingBeatHint: "Add a detail" },
      { question: "Do you like staying in hotels?", missingBeatHint: "Add a reason" },
      { question: "What's the best trip you've ever taken?", missingBeatHint: "Add a detail" },
      { question: "Do you take a lot of photos on trips?", missingBeatHint: "Add why" },
      { question: "Do you prefer short trips or long ones?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "You just got back from a trip and a classmate asks about it. Keep the conversation going for at least 4 turns.",
    teacherRole: "A classmate curious about your trip",
    opener: "I heard you just got back from a trip. How was it?",
  },

  pushIt: {
    prompt: "One harder one: “Do you think traveling teaches you more than school does?” Still three beats.",
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
      say: ["Now a real one. I'm a classmate curious about your trip. Keep it going."],
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
