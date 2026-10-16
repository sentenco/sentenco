// RELAY Lesson 1: "Music I Love" | Music & Creativity | Teens

export default {
  id: "relay-teens-music-1",
  code: "L1",
  title: "Music I Love",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Baseline",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you listen to music every day?",
    sampleAnswer: "Yes, I do. → I listen on my way to school. → Do you listen to music every day?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What kind of music do you like?", missingBeatHint: "Add why" },
      { question: "Who's your favorite singer or band?", missingBeatHint: "Add why" },
      { question: "When do you listen to music?", missingBeatHint: "Add a detail" },
      { question: "Do you listen with headphones or speakers?", missingBeatHint: "Add a reason" },
      { question: "What's your favorite song right now?", missingBeatHint: "Add why" },
      { question: "Do you have a playlist?", missingBeatHint: "Add a detail" },
      { question: "How do you find new songs?", missingBeatHint: "Add a detail" },
      { question: "Do you know the words to your favorite songs?", missingBeatHint: "Add an example" },
      { question: "Do you listen to music when you study?", missingBeatHint: "Add a reason" },
      { question: "What song makes you feel happy?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A friend sits next to you on the bus and asks what you are listening to. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend on the bus who is curious about your music",
    opener: "What are you listening to? Is it any good?",
  },

  pushIt: {
    prompt: "One harder one: “Does the music you like say something about who you are?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Frame it fast: no theory, just the rule.",
      say: [
        "Today's rule is simple: every time I ask you something, you give three beats: the answer, one more detail, and a question back to me.",
        "That's it. We're going to drill it until it's automatic.",
      ],
      do: ["Keep this under a minute: the drill teaches the concept, not the intro."],
      timing: "1 min",
    },
    warmup: {
      goal: "Get the student to demonstrate the gap themselves, then name it.",
      say: [
        "Quick question. Answer however feels natural, don't think about it.",
        "Notice something: you answered and then stopped. That's exactly the habit we're fixing today.",
      ],
      do: ["Ask the question and stop. Don't nudge for more, don't hint that more is coming."],
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
      say: ["Now a real one. I'm a friend on the bus who is curious about your music. Keep it going."],
      do: [
        "Stay in character, don't break to coach mid-scene.",
        "Count how many turns they sustain before it stalls: that's today's real measurement.",
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
