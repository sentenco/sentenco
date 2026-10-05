// RELAY Lesson 5: "Where I See Myself" | Future Plans & Ambitions | Teens

export default {
  id: "relay-teens-future-5",
  code: "L5",
  title: "Where I See Myself",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Have you ever thought about where you'll be in ten years?",
    sampleAnswer: "Yes, sometimes. I picture myself in a creative job. Have you thought about it too?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Where do you see yourself in ten years?", missingBeatHint: "Add a detail" },
      { question: "Do you want to stay in your hometown or move away?", missingBeatHint: "Add why" },
      { question: "What kind of life do you imagine having?", missingBeatHint: "Add a detail" },
      { question: "Are you excited or nervous about growing up?", missingBeatHint: "Add why" },
      { question: "What's one goal you have for yourself?", missingBeatHint: "Add a detail" },
      { question: "What kind of home do you want to live in?", missingBeatHint: "Add a detail" },
      { question: "Do you want to have a family someday?", missingBeatHint: "Add why" },
      { question: "What do you hope to be doing next year?", missingBeatHint: "Add a detail" },
      { question: "Who will you still be friends with in the future?", missingBeatHint: "Add why" },
      { question: "What's one thing you want to learn before you grow up?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "It's the end of the school year and a teacher asks about your plans for the future. Keep the conversation going for at least 4 turns.",
    teacherRole: "A teacher curious about your future plans",
    opener: "Before you go, tell me: where do you see yourself in a few years?",
  },

  pushIt: {
    prompt: "One harder one: “Should teenagers already know what they want to do with their life?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is where you see yourself in the future."],
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
      say: ["Now a real one. I'm a teacher curious about your future plans. Keep it going."],
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
