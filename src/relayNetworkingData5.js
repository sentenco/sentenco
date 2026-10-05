// RELAY Lesson 5: "Building Your Network" | Networking & Professional Events | Adults

export default {
  id: "relay-networking-5",
  code: "L5",
  title: "Building Your Network",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you think your network is important to your career?",
    sampleAnswer: "Yes, I do. It's helped me find opportunities before. Do you think your network is important?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Who's someone in your network you rely on?", missingBeatHint: "Add a detail" },
      { question: "Do you actively try to grow your network?", missingBeatHint: "Add a reason" },
      { question: "Have you ever gotten an opportunity through networking?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer online networking or in person?", missingBeatHint: "Add why" },
      { question: "What's one tip you'd give for networking well?", missingBeatHint: "Add a detail" },
      { question: "Who helped you most in your career?", missingBeatHint: "Add why" },
      { question: "Do you go to industry events?", missingBeatHint: "Add a reason" },
      { question: "Have you ever introduced two people to each other?", missingBeatHint: "Add a detail" },
      { question: "Do you keep in touch with former coworkers?", missingBeatHint: "Add a reason" },
      { question: "What's the best way to meet people in a new city?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A mentor asks how your networking has been going. Keep the conversation going for at least 4 turns.",
    teacherRole: "A mentor checking in on your networking",
    opener: "So, how has your networking been going lately?",
  },

  pushIt: {
    prompt: "One harder one: “Is who you know really more important than what you know?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is building your network."],
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
      say: ["Now a real one. I'm a mentor checking in on your networking. Keep it going."],
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
