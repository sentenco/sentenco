// RELAY Lesson 2: "Friends & Hangouts" | Small talk | Teens

export default {
  id: "relay-teens-2",
  code: "L2",
  title: "Friends & Hangouts",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you hang out with friends a lot?",
    sampleAnswer: "Yes, I do. → We usually hang out after school. → Do you hang out with your friends a lot?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What do you usually do with your friends?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer a big group of friends or a few close ones?", missingBeatHint: "Add a reason" },
      { question: "Have you made any new friends recently?", missingBeatHint: "Add a detail" },
      { question: "Do you like going to the mall?", missingBeatHint: "Add a reason" },
      { question: "What are you doing after school today?", missingBeatHint: "Add a plan detail" },
      { question: "Do you text your friends a lot?", missingBeatHint: "Add a detail" },
      { question: "What's your best friend like?", missingBeatHint: "Add a detail" },
      { question: "Do you like having sleepovers?", missingBeatHint: "Add a reason" },
      { question: "Where do you usually meet your friends?", missingBeatHint: "Add a detail" },
      { question: "Have you ever had an argument with a friend?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "You bump into a friend at the mall you haven't seen in a while. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend you ran into at the mall",
    opener: "Oh my gosh, I haven't seen you in forever!",
  },

  pushIt: {
    prompt: "One harder one: “Is it better to have a few close friends or a lot of friends?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is friends and hanging out."],
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
      say: ["Now a real one. I'm a friend you just ran into at the mall. Keep it going."],
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
