// RELAY Lesson 2: "At the Airport" | Travel & Business Trips | Adults

export default {
  id: "relay-travel-2",
  code: "L2",
  title: "At the Airport",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you like arriving early at the airport?",
    sampleAnswer: "Yes, I do. It helps me avoid stress. Do you like arriving early?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "How early do you usually arrive at the airport?", missingBeatHint: "Add a detail" },
      { question: "Do you check bags or travel with a carry-on?", missingBeatHint: "Add a reason" },
      { question: "Have you ever missed a flight?", missingBeatHint: "Add a detail" },
      { question: "Do you like airport food?", missingBeatHint: "Add why" },
      { question: "What do you usually do while waiting for a flight?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer a window seat or an aisle seat?", missingBeatHint: "Add why" },
      { question: "Do you get nervous before flying?", missingBeatHint: "Add a reason" },
      { question: "What's in your carry-on bag?", missingBeatHint: "Add a detail" },
      { question: "Have you ever had a delayed flight?", missingBeatHint: "Add a detail" },
      { question: "Do you use airport lounges?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "Your flight is delayed and you strike up a conversation with someone at the gate. Keep the conversation going for at least 4 turns.",
    teacherRole: "A fellow passenger waiting at the gate",
    opener: "Looks like we're stuck here for a while. Where are you headed?",
  },

  pushIt: {
    prompt: "One harder one: “Is it better to arrive early or cut it close at the airport?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is the airport."],
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
      say: ["Now a real one. I'm a fellow passenger waiting at the gate. Keep it going."],
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
