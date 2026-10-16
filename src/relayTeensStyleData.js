// RELAY Lesson 1: "What I Wear" | Style & Shopping | Teens

export default {
  id: "relay-teens-style-1",
  code: "L1",
  title: "What I Wear",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Baseline",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you care about what you wear?",
    sampleAnswer: "Yes, a little. → I like comfortable clothes in simple colors. → Do you care about what you wear?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What do you usually wear to school?", missingBeatHint: "Add a detail" },
      { question: "What's your favorite piece of clothing?", missingBeatHint: "Add why" },
      { question: "Do you wear a uniform at school?", missingBeatHint: "Add a reason" },
      { question: "What colors do you like to wear?", missingBeatHint: "Add why" },
      { question: "Do you like to dress like your friends?", missingBeatHint: "Add a reason" },
      { question: "What shoes do you wear most?", missingBeatHint: "Add a detail" },
      { question: "Do you pick your own clothes?", missingBeatHint: "Add a reason" },
      { question: "What do you wear on weekends?", missingBeatHint: "Add a detail" },
      { question: "Do you wear hats, bags or jewelry?", missingBeatHint: "Add a detail" },
      { question: "What do you wear when you want to look nice?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "A friend likes your outfit and asks where it's from. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend who likes your outfit",
    opener: "I love your jacket. Where did you get it?",
  },

  pushIt: {
    prompt: "One harder one: “Should schools have uniforms?” Still three beats.",
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
      say: ["Now a real one. I'm a friend who likes your outfit. Keep it going."],
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
