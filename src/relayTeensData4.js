// RELAY Lesson 4: "Sports & Hobbies" | Small talk | Teens

export default {
  id: "relay-teens-4",
  code: "L4",
  title: "Sports & Hobbies",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you play any sports?",
    sampleAnswer: "Yes, I do. → I play basketball on the weekends. → Do you play any sports?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What do you like to do after school?", missingBeatHint: "Add a detail" },
      { question: "Do you play any instruments?", missingBeatHint: "Add a detail" },
      { question: "Are you in any clubs?", missingBeatHint: "Add a detail" },
      { question: "Do you like team sports or solo activities?", missingBeatHint: "Add a reason" },
      { question: "What hobby would you like to try?", missingBeatHint: "Add why" },
      { question: "What sport do you like watching?", missingBeatHint: "Add why" },
      { question: "Do you draw, paint, or make things?", missingBeatHint: "Add a detail" },
      { question: "How long have you had your favorite hobby?", missingBeatHint: "Add a detail" },
      { question: "Do you practice with anyone?", missingBeatHint: "Add a detail" },
      { question: "Have you ever won a prize or a medal?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "You join a new after-school club and someone introduces themselves. Keep the conversation going for at least 4 turns.",
    teacherRole: "Another student in the new club",
    opener: "Hey, is this your first time here too?",
  },

  pushIt: {
    prompt: "One harder one: “Do you think schools should have more clubs?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is sports and hobbies."],
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
      goal: "The core drill: student produces all 3 beats, live, every round.",
      say: [
        "Same style: answer, add, ask, every time.",
        "If you stop after one, I'll just say which beat is missing and you try that same answer again.",
      ],
      do: [
        "Ask each question, let them respond fully before any feedback.",
        "If a beat's missing, name only the missing beat: never supply your own version.",
        "Let them redo their own answer, not repeat yours.",
      ],
      timing: "16 min",
    },
    yourturn: {
      goal: "Unaided diagnostic: sustain a real exchange without prompting.",
      say: ["Now a real one. I'm another student in your new club. Keep it going."],
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
      do: ["No scorecard, no homework this lesson: just end on the win."],
      timing: "1 min",
    },
  },
};
