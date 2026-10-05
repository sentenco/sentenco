// RELAY Lesson 1: "What Do You Want to Be?" | Future Plans & Ambitions | Teens

export default {
  id: "relay-teens-future-1",
  code: "L1",
  title: "What Do You Want to Be?",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Baseline",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you know what you want to be when you're older?",
    sampleAnswer: "Yes, I think so. I'd like to be a designer. Do you know what you want to be?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What job or career interests you?", missingBeatHint: "Add why" },
      { question: "Do your parents have a job in mind for you?", missingBeatHint: "Add a detail" },
      { question: "What subject are you best at in school?", missingBeatHint: "Add why" },
      { question: "Have your career plans changed over the years?", missingBeatHint: "Add a detail" },
      { question: "Do you want to go to college?", missingBeatHint: "Add a reason" },
      { question: "Who do you want to be like when you grow up?", missingBeatHint: "Add why" },
      { question: "Do you think your job should be fun?", missingBeatHint: "Add a reason" },
      { question: "Would you rather work with people or alone?", missingBeatHint: "Add why" },
      { question: "What's a job you'd never want to do?", missingBeatHint: "Add why" },
      { question: "Do you want to work in an office or somewhere else?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A career counselor at school asks about your plans for the future. Keep the conversation going for at least 4 turns.",
    teacherRole: "A career counselor at school",
    opener: "So, have you thought about what you want to do after graduation?",
  },

  pushIt: {
    prompt: "One harder one: “Is it important to decide your career early?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Frame it fast: no theory, just the rule.",
      say: [
        "Today's rule is simple: every time I ask you something, you give three beats, the answer, one more detail, and a question back to me.",
        "That's it. We're going to drill it until it's automatic.",
      ],
      do: ["Keep this under a minute. The drill teaches the concept, not the intro."],
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
      say: ["Now a real one. I'm a career counselor at school. Keep it going."],
      do: [
        "Stay in character, don't break to coach mid-scene.",
        "Count how many turns they sustain before it stalls. That's today's real measurement.",
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
