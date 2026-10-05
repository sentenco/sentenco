// RELAY Lesson 4: "Family & Home" | Small talk | Adults

export default {
  id: "relay-4",
  code: "L4",
  title: "Family & Home",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you live with your family?",
    sampleAnswer: "Yes, I do. → I live with my parents and my sister. → Do you live with your family too?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Do you have any siblings?", missingBeatHint: "Add a detail" },
      { question: "Is your hometown big or small?", missingBeatHint: "Add a detail" },
      { question: "Do you like your neighborhood?", missingBeatHint: "Add a reason" },
      { question: "Do you visit your family often?", missingBeatHint: "Add a detail" },
      { question: "Do you prefer apartments or houses?", missingBeatHint: "Add why" },
      { question: "Do you live with anyone?", missingBeatHint: "Add a detail" },
      { question: "What's your favorite room in your home?", missingBeatHint: "Add why" },
      { question: "Do you have any pets?", missingBeatHint: "Add a detail" },
      { question: "Who do you call the most in your family?", missingBeatHint: "Add a reason" },
      { question: "Do you cook for your family?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "A new neighbor introduces themselves at your door. Keep the conversation going for at least 4 turns.",
    teacherRole: "A new neighbor introducing themselves",
    opener: "Hi! I just moved in next door. I'm still getting to know the neighborhood.",
  },

  pushIt: {
    prompt: "One harder one: “Is it better to live close to family or far away?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is family and home."],
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
      say: ["Now a real one. I'm your new neighbor, just moved in. Keep it going."],
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
