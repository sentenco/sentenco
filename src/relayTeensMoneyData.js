// RELAY Lesson 1: "First Job" | Part-Time Jobs & Money | Teens

export default {
  id: "relay-teens-money-1",
  code: "L1",
  title: "First Job",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Baseline",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Have you ever had a part-time job?",
    sampleAnswer: "Yes, I have. I worked at a coffee shop last summer. Have you ever had a job?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What kind of job would you like to have?", missingBeatHint: "Add why" },
      { question: "Do you get an allowance?", missingBeatHint: "Add a detail" },
      { question: "Do you save your money or spend it?", missingBeatHint: "Add a reason" },
      { question: "Have you ever babysat or done odd jobs for money?", missingBeatHint: "Add a detail" },
      { question: "What's the most expensive thing you've ever bought?", missingBeatHint: "Add a detail" },
      { question: "Would you rather work indoors or outdoors?", missingBeatHint: "Add why" },
      { question: "Do you want a part-time job?", missingBeatHint: "Add a reason" },
      { question: "What would you do with your first paycheck?", missingBeatHint: "Add why" },
      { question: "Have you ever sold something?", missingBeatHint: "Add a detail" },
      { question: "Do you know anyone who has a job you admire?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "You're applying for your first part-time job and the manager asks you a few questions. Keep the conversation going for at least 4 turns.",
    teacherRole: "A manager interviewing you for a part-time job",
    opener: "So, tell me a little about yourself. Why do you want to work here?",
  },

  pushIt: {
    prompt: "One harder one: “Do you think teenagers should have part-time jobs?” Still three beats.",
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
      say: ["Now a real one. I'm a manager interviewing you for a part-time job. Keep it going."],
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
