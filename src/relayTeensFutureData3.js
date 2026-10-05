// RELAY Lesson 3: "College & After School" | Future Plans & Ambitions | Teens

export default {
  id: "relay-teens-future-3",
  code: "L3",
  title: "College & After School",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you want to go to college?",
    sampleAnswer: "Yes, I do. I want to study something creative. Do you want to go to college?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What would you want to study?", missingBeatHint: "Add why" },
      { question: "Do you want to move away for college?", missingBeatHint: "Add a reason" },
      { question: "Have you visited any colleges?", missingBeatHint: "Add a detail" },
      { question: "Is college necessary for every career?", missingBeatHint: "Add why" },
      { question: "What are you most excited about for after high school?", missingBeatHint: "Add a detail" },
      { question: "Do you know what kind of school you want to attend?", missingBeatHint: "Add a detail" },
      { question: "Would you take a year off after high school?", missingBeatHint: "Add why" },
      { question: "Do you want to study in another country?", missingBeatHint: "Add why" },
      { question: "Do you know anyone who is in college?", missingBeatHint: "Add a detail" },
      { question: "What would you do if you didn't go to college?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "An older cousin who's already in college asks about your plans after high school. Keep the conversation going for at least 4 turns.",
    teacherRole: "An older cousin in college",
    opener: "So, have you started thinking about what's next after high school?",
  },

  pushIt: {
    prompt: "One harder one: “Is college worth it for everyone?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is college and after school."],
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
      say: ["Now a real one. I'm an older cousin in college. Keep it going."],
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
