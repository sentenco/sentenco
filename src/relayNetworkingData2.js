// RELAY Lesson 2: "Elevator Pitches" | Networking & Professional Events | Adults

export default {
  id: "relay-networking-2",
  code: "L2",
  title: "Elevator Pitches",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Can you describe your job in one sentence?",
    sampleAnswer: "Yes, I can. I help companies grow their online presence. Can you describe your job in one sentence?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What do you do for work?", missingBeatHint: "Add a detail" },
      { question: "What's the best part of your job?", missingBeatHint: "Add why" },
      { question: "What are you working on right now?", missingBeatHint: "Add a detail" },
      { question: "Do you enjoy talking about your work?", missingBeatHint: "Add a reason" },
      { question: "What made you choose this career?", missingBeatHint: "Add a detail" },
      { question: "How would you describe your job to a stranger?", missingBeatHint: "Add a detail" },
      { question: "What's the most interesting project you've done?", missingBeatHint: "Add why" },
      { question: "Who do you usually work with?", missingBeatHint: "Add a detail" },
      { question: "What do you want people to remember about you?", missingBeatHint: "Add why" },
      { question: "Do you find it easy to talk about yourself?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "Someone asks what you do at a conference and you only have a minute to answer. Keep the conversation going for at least 4 turns.",
    teacherRole: "Someone curious about your work at a conference",
    opener: "So, what do you do?",
  },

  pushIt: {
    prompt: "One harder one: “Is it better to have a short pitch ready, or speak naturally?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is describing your work quickly."],
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
      say: ["Now a real one. I'm someone curious about your work at a conference. Keep it going."],
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
