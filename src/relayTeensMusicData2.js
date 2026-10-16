// RELAY Lesson 2: "Concerts & Live Events" | Music & Creativity | Teens

export default {
  id: "relay-teens-music-2",
  code: "L2",
  title: "Concerts & Live Events",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Have you ever been to a concert?",
    sampleAnswer: "Yes, once. → I saw a local band with my cousin. → Have you ever been to a concert?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Have you ever seen a live show?", missingBeatHint: "Add a detail" },
      { question: "Which artist would you like to see live?", missingBeatHint: "Add why" },
      { question: "Who would you go to a concert with?", missingBeatHint: "Add why" },
      { question: "Do you like big crowds?", missingBeatHint: "Add a reason" },
      { question: "What makes a concert fun?", missingBeatHint: "Add a detail" },
      { question: "Have you been to a school talent show?", missingBeatHint: "Add a detail" },
      { question: "Do you buy tickets online?", missingBeatHint: "Add a reason" },
      { question: "How much would you pay for a concert ticket?", missingBeatHint: "Add why" },
      { question: "Do you take photos or videos at concerts?", missingBeatHint: "Add a reason" },
      { question: "What do you wear to a concert?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "A friend has an extra concert ticket and wants you to come. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend with an extra concert ticket",
    opener: "I have an extra ticket for Saturday. Do you want to come?",
  },

  pushIt: {
    prompt: "One harder one: “Are live concerts worth the high price?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is concerts and live events."],
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
      say: ["Now a real one. I'm a friend with an extra concert ticket. Keep it going."],
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
