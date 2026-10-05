// RELAY Lesson 3: "Streaming & Content" | Gaming & Online Life | Teens

export default {
  id: "relay-teens-gaming-3",
  code: "L3",
  title: "Streaming & Content",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you watch people stream or play games online?",
    sampleAnswer: "Yes, I do. → I watch a streamer almost every day. → Do you watch any streamers?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Who's your favorite streamer or YouTuber?", missingBeatHint: "Add why" },
      { question: "Do you ever record or post your own gameplay?", missingBeatHint: "Add a reason" },
      { question: "What platform do you use the most?", missingBeatHint: "Add a detail" },
      { question: "Have you ever wanted to be a streamer?", missingBeatHint: "Add why" },
      { question: "What kind of content do you like watching?", missingBeatHint: "Add a detail" },
      { question: "Do you watch gaming videos before you buy a game?", missingBeatHint: "Add a reason" },
      { question: "What's the funniest gaming video you've seen?", missingBeatHint: "Add a detail" },
      { question: "Do you watch live streams or recorded videos?", missingBeatHint: "Add why" },
      { question: "Would you ever make a gaming video?", missingBeatHint: "Add a reason" },
      { question: "Do you talk in the chat when you watch a stream?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "A friend asks if you watched last night's stream. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend asking about a stream you watched",
    opener: "Did you catch the stream last night?",
  },

  pushIt: {
    prompt: "One harder one: “Do you think being a streamer is a real job?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is streaming and content."],
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
      say: ["Now a real one. I'm a friend asking about last night's stream. Keep it going."],
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
