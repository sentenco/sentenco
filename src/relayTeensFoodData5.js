// RELAY Lesson 5: "Healthy Eating & Habits" | Food & Eating Out | Teens

export default {
  id: "relay-teens-food-5",
  code: "L5",
  title: "Healthy Eating & Habits",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you try to eat healthy?",
    sampleAnswer: "Sometimes, yes. → I try to eat fruit every day. → Do you try to eat healthy?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Do you eat fruit and vegetables every day?", missingBeatHint: "Add an example" },
      { question: "What's your favorite healthy food?", missingBeatHint: "Add why" },
      { question: "How much junk food do you eat?", missingBeatHint: "Add a detail" },
      { question: "Do you eat breakfast before school?", missingBeatHint: "Add a reason" },
      { question: "Do you drink enough water?", missingBeatHint: "Add a reason" },
      { question: "What snacks do you take to school?", missingBeatHint: "Add a detail" },
      { question: "Do you eat late at night?", missingBeatHint: "Add a reason" },
      { question: "Who decides what you eat at home?", missingBeatHint: "Add a detail" },
      { question: "Do you think teens eat healthy enough?", missingBeatHint: "Add why" },
      { question: "What's one thing you want to eat less of?", missingBeatHint: "Add why" },
    ],
  },

  yourTurn: {
    scenario: "A friend says you should eat healthier and asks what you usually eat. Keep the conversation going for at least 4 turns.",
    teacherRole: "A friend who is trying to eat healthier",
    opener: "I'm trying to eat healthier. What do you usually eat in a day?",
  },

  pushIt: {
    prompt: "One harder one: “Should schools sell junk food?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is healthy eating and habits."],
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
      say: ["Now a real one. I'm a friend who is trying to eat healthier. Keep it going."],
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
