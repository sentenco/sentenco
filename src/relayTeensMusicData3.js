// RELAY Lesson 3: "Singing & Instruments" | Music & Creativity | Teens

export default {
  id: "relay-teens-music-3",
  code: "L3",
  title: "Singing & Instruments",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you play an instrument?",
    sampleAnswer: "Not right now. → I played piano when I was little. → Do you play an instrument?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Can you play an instrument?", missingBeatHint: "Add a detail" },
      { question: "Do you like singing?", missingBeatHint: "Add a reason" },
      { question: "What instrument would you like to learn?", missingBeatHint: "Add why" },
      { question: "Have you ever been in a band or a choir?", missingBeatHint: "Add a detail" },
      { question: "Do you sing in the shower?", missingBeatHint: "Add a detail" },
      { question: "Does anyone in your family play music?", missingBeatHint: "Add a detail" },
      { question: "How often do you practice?", missingBeatHint: "Add a reason" },
      { question: "Do you take lessons or teach yourself?", missingBeatHint: "Add why" },
      { question: "Is it hard to learn an instrument?", missingBeatHint: "Add an example" },
      { question: "Would you perform in front of people?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A friend hears you humming and asks if you play music. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend who is curious about your music skills",
    opener: "That sounded good. Do you play something?",
  },

  pushIt: {
    prompt: "One harder one: “Should every student learn an instrument at school?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is singing and instruments."],
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
      say: ["Now a real one. I'm a friend who is curious about your music skills. Keep it going."],
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
