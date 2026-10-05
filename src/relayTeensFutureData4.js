// RELAY Lesson 4: "Skills & Talents" | Future Plans & Ambitions | Teens

export default {
  id: "relay-teens-future-4",
  code: "L4",
  title: "Skills & Talents",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you have a talent or skill you're proud of?",
    sampleAnswer: "Yes, I do. I'm pretty good at drawing. Do you have a talent you're proud of?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "What are you naturally good at?", missingBeatHint: "Add a detail" },
      { question: "Is there a skill you'd like to improve?", missingBeatHint: "Add why" },
      { question: "Did you learn that skill on your own or from someone?", missingBeatHint: "Add a detail" },
      { question: "Could your talents turn into a career?", missingBeatHint: "Add a reason" },
      { question: "What's something you've gotten better at recently?", missingBeatHint: "Add a detail" },
      { question: "Can you play an instrument or sing?", missingBeatHint: "Add a detail" },
      { question: "What skill do you want to learn this year?", missingBeatHint: "Add why" },
      { question: "Are you good at explaining things to others?", missingBeatHint: "Add an example" },
      { question: "Do your friends say you're good at something?", missingBeatHint: "Add a detail" },
      { question: "Do you like working with computers?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "You're showing a family member something you've been working on and they ask about it. Keep the conversation going for at least 4 turns.",
    teacherRole: "A family member curious about your skill",
    opener: "Wow, when did you learn to do that?",
  },

  pushIt: {
    prompt: "One harder one: “Is it better to follow your talent or a job that pays well?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is skills and talents."],
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
      say: ["Now a real one. I'm a family member curious about your skill. Keep it going."],
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
      do: ["No scorecard, no homework this lesson. Just end on the win."],
      timing: "1 min",
    },
  },
};
