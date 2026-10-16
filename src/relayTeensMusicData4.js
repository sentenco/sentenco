// RELAY Lesson 4: "Drawing, Writing & Making Things" | Music & Creativity | Teens

export default {
  id: "relay-teens-music-4",
  code: "L4",
  title: "Drawing, Writing & Making Things",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you like making things?",
    sampleAnswer: "Yes, I do. → I draw when I'm bored. → Do you like making things?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Do you like drawing or painting?", missingBeatHint: "Add a detail" },
      { question: "Do you write stories or poems?", missingBeatHint: "Add a detail" },
      { question: "What do you like to make?", missingBeatHint: "Add why" },
      { question: "Do you keep a journal or a sketchbook?", missingBeatHint: "Add a reason" },
      { question: "Where do you get your ideas?", missingBeatHint: "Add an example" },
      { question: "Do you show your work to other people?", missingBeatHint: "Add a reason" },
      { question: "Have you ever made a gift for someone?", missingBeatHint: "Add a detail" },
      { question: "Do you do any crafts?", missingBeatHint: "Add a detail" },
      { question: "Who's your favorite artist or writer?", missingBeatHint: "Add why" },
      { question: "What would you like to create one day?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A classmate sees your notebook full of drawings and asks about it. Keep the conversation going for at least 4 turns.",
    teacherRole: "A classmate who noticed your drawings",
    opener: "Wow, did you draw these? They look really good.",
  },

  pushIt: {
    prompt: "One harder one: “Is creative work as important as school subjects?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is drawing, writing and making things."],
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
      say: ["Now a real one. I'm a classmate who noticed your drawings. Keep it going."],
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
