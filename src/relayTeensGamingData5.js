// RELAY Lesson 5: "Screen Time & Balance" | Gaming & Online Life | Teens

export default {
  id: "relay-teens-gaming-5",
  code: "L5",
  title: "Screen Time & Balance",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you think you spend too much time on screens?",
    sampleAnswer: "Yes, probably. → I lose track of time when I'm gaming. → Do you think you spend too much time on screens?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "How much screen time do you get in a day?", missingBeatHint: "Add a detail" },
      { question: "Do your parents limit your screen time?", missingBeatHint: "Add a detail" },
      { question: "What do you do when you're not on a screen?", missingBeatHint: "Add a detail" },
      { question: "Do you ever take breaks from gaming?", missingBeatHint: "Add a reason" },
      { question: "What would you do with an extra hour of free time?", missingBeatHint: "Add why" },
      { question: "What do you do first when you get home?", missingBeatHint: "Add a detail" },
      { question: "Do you ever play before bed?", missingBeatHint: "Add a reason" },
      { question: "Do you think games are good or bad for you?", missingBeatHint: "Add why" },
      { question: "What's your favorite thing to do offline?", missingBeatHint: "Add why" },
      { question: "Do you do your homework before you play?", missingBeatHint: "Add a reason" },
    ],
  },

  yourTurn: {
    scenario: "Your parent asks you to take a break from your screen. Keep the conversation going for at least 4 turns.",
    teacherRole: "A parent asking you to take a screen break",
    opener: "Hey, you've been on that a while. Want to take a break?",
  },

  pushIt: {
    prompt: "One harder one: “Do you think screen time limits are fair?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is screen time and balance."],
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
      say: ["Now a real one. I'm a parent asking you to take a screen break. Keep it going."],
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
      goal: "Close warmly: this is the last lesson in the track.",
      say: ["Nice work today. That wraps up this track. You've built a real habit here."],
      do: ["No scorecard, no homework: just end on the win."],
      timing: "1 min",
    },
  },
};
