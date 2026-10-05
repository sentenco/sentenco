// RELAY Lesson 3: "Following Up" | Networking & Professional Events | Adults

export default {
  id: "relay-networking-3",
  code: "L3",
  title: "Following Up",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you usually follow up after meeting someone new?",
    sampleAnswer: "Yes, I do. I usually send a quick message the next day. Do you follow up after meeting someone new?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "How do you usually stay in touch with new contacts?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer email or messaging to follow up?", missingBeatHint: "Add a reason" },
      { question: "Have you ever reconnected with someone after a long time?", missingBeatHint: "Add a detail" },
      { question: "Do you find it awkward to reach out first?", missingBeatHint: "Add why" },
      { question: "What's a good way to keep a conversation going after meeting someone?", missingBeatHint: "Add a detail" },
      { question: "Do you send a message the same day you meet someone?", missingBeatHint: "Add a reason" },
      { question: "What do you usually write in a follow-up message?", missingBeatHint: "Add a detail" },
      { question: "Do you connect with people on LinkedIn?", missingBeatHint: "Add a reason" },
      { question: "Have you ever forgotten someone's name?", missingBeatHint: "Add a detail" },
      { question: "How soon should you follow up after an event?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "You run into someone you met briefly at a conference last month. Keep the conversation going for at least 4 turns.",
    teacherRole: "Someone you met briefly a month ago",
    opener: "Hey, it's been a while. How have you been?",
  },

  pushIt: {
    prompt: "One harder one: “Is it awkward to follow up with someone you barely know?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is following up with new contacts."],
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
      say: ["Now a real one. I'm someone you met briefly a month ago. Keep it going."],
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
