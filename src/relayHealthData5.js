// RELAY Lesson 5: "Doctor Visits & Checkups" | Health & Wellness | Adults

export default {
  id: "relay-health-5",
  code: "L5",
  title: "Doctor Visits & Checkups",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you go for regular checkups?",
    sampleAnswer: "Yes, I try to. I go once a year. Do you go for regular checkups?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "How often do you visit the doctor?", missingBeatHint: "Add a detail" },
      { question: "Do you like going to the doctor, or avoid it?", missingBeatHint: "Add a reason" },
      { question: "Have you had a checkup recently?", missingBeatHint: "Add a detail" },
      { question: "Do you follow your doctor's advice closely?", missingBeatHint: "Add why" },
      { question: "What's one health habit you want to improve?", missingBeatHint: "Add a detail" },
      { question: "Do you have a doctor you trust?", missingBeatHint: "Add why" },
      { question: "Do you go to the dentist regularly?", missingBeatHint: "Add a reason" },
      { question: "Do you take any vitamins?", missingBeatHint: "Add a reason" },
      { question: "Do you get a flu shot every year?", missingBeatHint: "Add a reason" },
      { question: "What do you do when you start feeling sick?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "You're at a checkup and the doctor asks about your lifestyle. Keep the conversation going for at least 4 turns.",
    teacherRole: "A doctor asking about your lifestyle",
    opener: "So, how have you been feeling lately?",
  },

  pushIt: {
    prompt: "One harder one: “Do people take preventive health checkups seriously enough?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is doctor visits and checkups."],
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
      say: ["Now a real one. I'm a doctor asking about your lifestyle. Keep it going."],
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
