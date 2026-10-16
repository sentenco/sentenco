// RELAY Lesson 4: "Feeling Sick" | Health & Feeling Good | Teens

export default {
  id: "relay-teens-health-4",
  code: "L4",
  title: "Feeling Sick",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you get sick often?",
    sampleAnswer: "Not really. → I usually get a cold once a year. → Do you get sick often?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "When was the last time you were sick?", missingBeatHint: "Add a detail" },
      { question: "What do you do when you have a cold?", missingBeatHint: "Add a detail" },
      { question: "Do you go to school when you're sick?", missingBeatHint: "Add a reason" },
      { question: "Who takes care of you when you're sick?", missingBeatHint: "Add a detail" },
      { question: "Have you ever been to the hospital?", missingBeatHint: "Add a detail" },
      { question: "What do you eat or drink when you feel bad?", missingBeatHint: "Add why" },
      { question: "Do you like going to the doctor?", missingBeatHint: "Add why" },
      { question: "Do you take medicine at home?", missingBeatHint: "Add a reason" },
      { question: "What do you do when you're sick and bored?", missingBeatHint: "Add a detail" },
      { question: "Do you get a flu shot every year?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "You call a friend who stayed home sick today. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend who is home sick",
    opener: "Hey, thanks for calling. I feel terrible today.",
  },

  pushIt: {
    prompt: "One harder one: “Should people stay home when they have a small cold?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is feeling sick."],
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
      say: ["Now a real one. I'm a friend who is home sick. Keep it going."],
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
