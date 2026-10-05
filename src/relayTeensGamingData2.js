// RELAY Lesson 2: "Online Friends" | Gaming & Online Life | Teens

export default {
  id: "relay-teens-gaming-2",
  code: "L2",
  title: "Online Friends",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you have friends you only know online?",
    sampleAnswer: "Yes, I do. → I met them through a game. → Do you have any online friends?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "How did you meet your online friends?", missingBeatHint: "Add a detail" },
      { question: "Do you use voice chat when you play?", missingBeatHint: "Add a reason" },
      { question: "Have you ever met an online friend in person?", missingBeatHint: "Add a detail" },
      { question: "What do you usually talk about with them?", missingBeatHint: "Add a detail" },
      { question: "Do your parents know about your online friends?", missingBeatHint: "Add a detail" },
      { question: "Do you have a gamer name?", missingBeatHint: "Add a detail" },
      { question: "What games do you play with your online friends?", missingBeatHint: "Add a detail" },
      { question: "Do you talk to your online friends outside the game?", missingBeatHint: "Add a reason" },
      { question: "Have you ever made a new friend through a game?", missingBeatHint: "Add a detail" },
      { question: "What do you like most about playing online?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "You're in a voice chat and a new player joins your team. Keep the conversation going for at least 4 turns.",
    teacherRole: "A new player who just joined your team",
    opener: "Hey, is this squad open? Mind if I join?",
  },

  pushIt: {
    prompt: "One harder one: “Can online friendships be as real as in-person ones?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is online friends."],
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
      say: ["Now a real one. I'm a new player joining your team's voice chat. Keep it going."],
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
