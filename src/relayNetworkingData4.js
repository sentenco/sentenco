// RELAY Lesson 4: "Small Talk with Clients" | Networking & Professional Events | Adults

export default {
  id: "relay-networking-4",
  code: "L4",
  title: "Small Talk with Clients",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you talk to clients often?",
    sampleAnswer: "Yes, I do. I have client calls most days. Do you talk to clients often?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's your approach to small talk with clients?", missingBeatHint: "Add a detail" },
      { question: "Do you usually talk about work first or something casual?", missingBeatHint: "Add a reason" },
      { question: "Have you ever had an awkward conversation with a client?", missingBeatHint: "Add a detail" },
      { question: "Do you remember personal details about your clients?", missingBeatHint: "Add a detail" },
      { question: "What topics do you avoid with clients?", missingBeatHint: "Add why" },
      { question: "How do you start a meeting with a client?", missingBeatHint: "Add a detail" },
      { question: "Do you talk about the weather with clients?", missingBeatHint: "Add why" },
      { question: "What do you do when a client is in a bad mood?", missingBeatHint: "Add a detail" },
      { question: "Do you ever have lunch with clients?", missingBeatHint: "Add a detail" },
      { question: "How do you end a conversation politely?", missingBeatHint: "Add an example" },
    ],
  },

  yourTurn: {
    scenario: "A client calls before a meeting starts and makes some small talk first. Keep the conversation going for at least 4 turns.",
    teacherRole: "A client making small talk before a meeting",
    opener: "Hey, good to see you. How's everything going on your end?",
  },

  pushIt: {
    prompt: "One harder one: “How much small talk is too much in a business setting?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is small talk with clients."],
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
      say: ["Now a real one. I'm a client making small talk before a meeting. Keep it going."],
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
