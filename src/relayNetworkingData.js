// RELAY Lesson 1: "Meeting New People" | Networking & Professional Events | Adults

export default {
  id: "relay-networking-1",
  code: "L1",
  title: "Meeting New People",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Baseline",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you enjoy networking events?",
    sampleAnswer: "Yes, I do. I like meeting people from other industries. Do you enjoy networking events?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What brings you to this event?", missingBeatHint: "Add a detail" },
      { question: "What industry do you work in?", missingBeatHint: "Add a detail" },
      { question: "Do you find networking easy or difficult?", missingBeatHint: "Add a reason" },
      { question: "How did you get into your field?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer small talk or getting straight to business?", missingBeatHint: "Add why" },
      { question: "Is this your first time at this event?", missingBeatHint: "Add a detail" },
      { question: "How do you usually introduce yourself?", missingBeatHint: "Add a detail" },
      { question: "Do you like meeting people from other fields?", missingBeatHint: "Add a reason" },
      { question: "What kind of people do you hope to meet today?", missingBeatHint: "Add why" },
      { question: "Have you been to many events like this?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "You're at a networking event and someone introduces themselves. Keep the conversation going for at least 4 turns.",
    teacherRole: "A stranger introducing themselves at a networking event",
    opener: "Hi, I don't think we've met. What do you do?",
  },

  pushIt: {
    prompt: "One harder one: “Is networking still important in the age of social media?” Still three beats.",
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
      say: ["Now a real one. I'm a stranger introducing myself at a networking event. Keep it going."],
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
