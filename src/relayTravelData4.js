// RELAY Lesson 4: "Meeting People on the Road" | Travel & Business Trips | Adults

export default {
  id: "relay-travel-4",
  code: "L4",
  title: "Meeting People on the Road",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you enjoy meeting new people when you travel?",
    sampleAnswer: "Yes, I do. It's one of my favorite parts of traveling. Do you enjoy meeting new people when you travel?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Have you ever made a friend while traveling?", missingBeatHint: "Add a detail" },
      { question: "Do you talk to strangers when you travel, or keep to yourself?", missingBeatHint: "Add a reason" },
      { question: "What's a memorable conversation you've had while traveling?", missingBeatHint: "Add a detail" },
      { question: "Do you attend events or dinners when traveling for work?", missingBeatHint: "Add a detail" },
      { question: "Would you rather travel alone or with colleagues?", missingBeatHint: "Add why" },
      { question: "Do you stay in touch with people you meet?", missingBeatHint: "Add a detail" },
      { question: "Have you ever asked a local for advice?", missingBeatHint: "Add a detail" },
      { question: "Do you like group tours?", missingBeatHint: "Add why" },
      { question: "Do you speak the local language when you travel?", missingBeatHint: "Add a detail" },
      { question: "What do you talk about with other travelers?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "You're at a work dinner in another city and sit next to someone new. Keep the conversation going for at least 4 turns.",
    teacherRole: "A colleague from another office at a work dinner",
    opener: "I don't think we've worked together before. What team are you on?",
  },

  pushIt: {
    prompt: "One harder one: “Is it worth the effort to socialize on a business trip?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic. Keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is meeting people while traveling."],
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
      say: ["Now a real one. I'm a colleague from another office at a work dinner. Keep it going."],
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
