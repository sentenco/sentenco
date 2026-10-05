// RELAY Lesson 1: "Keep It Going" | Small talk | Baseline diagnostic
//
// RELAY is for learners who give complete, correct, but conversation-ending
// answers: no reason, no detail, no question back, so the exchange dies.
// Every lesson drills one rule: Answer, Add, Ask. No slide ever shows a
// model/"ideal" version of an answer for the student to compare against:
// the student produces every rep themselves, live.

export default {
  id: "relay-1",
  code: "L1",
  title: "Small Talk",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Baseline",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you like your job?",
    sampleAnswer: "Yes, I do. → I really like my coworkers. → Do you like your job too?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What did you do this weekend?", missingBeatHint: "Add a detail" },
      { question: "Do you like your job?", missingBeatHint: "Add a reason" },
      { question: "What's your favorite food?", missingBeatHint: "Add why" },
      { question: "How's the weather been?", missingBeatHint: "Add a detail" },
      { question: "What are you doing after this?", missingBeatHint: "Add a plan detail" },
      { question: "How was your morning?", missingBeatHint: "Add a detail" },
      { question: "Do you have any plans for the holidays?", missingBeatHint: "Add a plan detail" },
      { question: "What kind of music do you like?", missingBeatHint: "Add why" },
      { question: "Have you been busy lately?", missingBeatHint: "Add a detail" },
      { question: "Where did you grow up?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "You just met a coworker in the break room. Keep the conversation going for at least 4 turns.",
    teacherRole: "A new coworker making small talk",
    opener: "Hey, I don't think we've met. I just started last week!",
  },

  pushIt: {
    prompt: "One harder one: “What do you think about remote work?” Still three beats.",
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
      do: [
        "Ask the question and stop. Don't nudge for more, don't hint that more is coming.",
        "Right after, point at the pattern directly: this is the ‘before’ the student needs to hear to buy into the drill.",
      ],
      timing: "1 min",
    },
    bounce: {
      goal: "The core drill: student produces all 3 beats, live, every round.",
      say: [
        "Same question style, but now: answer, add, ask, every time.",
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
      say: ["Now a real one. I'm your new coworker in the break room. Keep it going."],
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
