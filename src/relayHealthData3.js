// RELAY Lesson 3: "Eating Habits" | Health & Wellness | Adults

export default {
  id: "relay-health-3",
  code: "L3",
  title: "Eating Habits",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you eat healthy most of the time?",
    sampleAnswer: "Yes, mostly. I try to cook at home a lot. Do you eat healthy most of the time?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What does a typical meal look like for you?", missingBeatHint: "Add a detail" },
      { question: "Do you cook at home or eat out more?", missingBeatHint: "Add a reason" },
      { question: "Have you ever tried a specific diet?", missingBeatHint: "Add a detail" },
      { question: "Do you meal prep?", missingBeatHint: "Add why" },
      { question: "What's your favorite healthy meal?", missingBeatHint: "Add a detail" },
      { question: "Do you eat breakfast every day?", missingBeatHint: "Add a detail" },
      { question: "How much water do you drink?", missingBeatHint: "Add a detail" },
      { question: "Do you snack between meals?", missingBeatHint: "Add a detail" },
      { question: "Do you eat a lot of vegetables?", missingBeatHint: "Add a reason" },
      { question: "What's your biggest food weakness?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A coworker notices your lunch and asks about your eating habits. Keep the conversation going for at least 4 turns.",
    teacherRole: "A coworker curious about your lunch",
    opener: "That looks good. Do you always bring lunch from home?",
  },

  pushIt: {
    prompt: "One harder one: “Is it realistic to eat healthy with a busy schedule?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is eating habits."],
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
      say: ["Now a real one. I'm a coworker curious about your lunch. Keep it going."],
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
