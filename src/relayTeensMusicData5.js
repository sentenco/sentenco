// RELAY Lesson 5: "Making Videos & Sharing" | Music & Creativity | Teens

export default {
  id: "relay-teens-music-5",
  code: "L5",
  title: "Making Videos & Sharing",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you make videos or post photos?",
    sampleAnswer: "Sometimes. → I post photos of my food and my pet. → Do you make videos or post photos?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Do you make videos on your phone?", missingBeatHint: "Add a detail" },
      { question: "What do you like to film?", missingBeatHint: "Add why" },
      { question: "Do you edit your videos?", missingBeatHint: "Add a reason" },
      { question: "Which apps do you use?", missingBeatHint: "Add a detail" },
      { question: "Do you share your work online?", missingBeatHint: "Add a reason" },
      { question: "How do you feel when people like your posts?", missingBeatHint: "Add why" },
      { question: "Do you have a favorite creator?", missingBeatHint: "Add why" },
      { question: "Do you make videos with your friends?", missingBeatHint: "Add a detail" },
      { question: "Have you ever deleted a post?", missingBeatHint: "Add a reason" },
      { question: "What kind of video would you like to make?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A friend wants to make a short video with you and asks for ideas. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend who wants to make a video with you",
    opener: "Let's make a video this weekend. Do you have any ideas?",
  },

  pushIt: {
    prompt: "One harder one: “Should everyone share their work online?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is making videos and sharing."],
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
      say: ["Now a real one. I'm a friend who wants to make a video with you. Keep it going."],
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
