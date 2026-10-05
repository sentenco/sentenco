// RELAY Lesson 4: "Team Games & Competitions" | Gaming & Online Life | Teens

export default {
  id: "relay-teens-gaming-4",
  code: "L4",
  title: "Team Games & Competitions",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you play team games?",
    sampleAnswer: "Yes, I do. → I play with a group of friends online. → Do you play any team games?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What's your role when you play with a team?", missingBeatHint: "Add a detail" },
      { question: "Do you get competitive when you play?", missingBeatHint: "Add a reason" },
      { question: "Have you ever joined a tournament?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer winning or just having fun?", missingBeatHint: "Add why" },
      { question: "What happens when your team loses?", missingBeatHint: "Add a detail" },
      { question: "Do you play any team games at school or online?", missingBeatHint: "Add a detail" },
      { question: "Who's the best player on your team?", missingBeatHint: "Add why" },
      { question: "How do you celebrate when you win?", missingBeatHint: "Add a detail" },
      { question: "Do you practice before big matches?", missingBeatHint: "Add a detail" },
      { question: "What makes a good teammate?", missingBeatHint: "Add an example" },
    ],
  },

  yourTurn: {
    scenario: "Your team just lost a close match and a teammate wants to talk about it. Keep the conversation going for at least 4 turns.",
    teacherRole: "A teammate after a close loss",
    opener: "That was so close! What do you think went wrong?",
  },

  pushIt: {
    prompt: "One harder one: “Should esports be considered a real sport?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is team games and competitions."],
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
      say: ["Now a real one. I'm your teammate after a close loss. Keep it going."],
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
