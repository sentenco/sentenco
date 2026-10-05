// RELAY Lesson 5: "Family & Weekends" | Small talk | Teens

export default {
  id: "relay-teens-5",
  code: "L5",
  title: "Family & Weekends",
  technique: "Answer, Add, Ask",
  format: "bounce",
  tag: "Progress",
  subtitle: "Turn a one-word answer into a real exchange.",
  techniqueLine: "Answer, Add, Ask",

  warmup: {
    question: "Do you have any siblings?",
    sampleAnswer: "Yes, I do. → I have a younger brother. → Do you have any siblings?",
  },

  bounce: {
    heading: "Every answer needs three beats: Answer. Add. Ask.",
    rounds: [
      { question: "Do you get along with your siblings?", missingBeatHint: "Add a detail" },
      { question: "Do you have any chores at home?", missingBeatHint: "Add a detail" },
      { question: "What do you usually do with your family on weekends?", missingBeatHint: "Add a detail" },
      { question: "Do your parents let you stay out late?", missingBeatHint: "Add a detail" },
      { question: "What's your favorite family tradition?", missingBeatHint: "Add a detail" },
      { question: "Who cooks at home most of the time?", missingBeatHint: "Add a detail" },
      { question: "Do you eat dinner together as a family?", missingBeatHint: "Add a detail" },
      { question: "Where do you go on family trips?", missingBeatHint: "Add a detail" },
      { question: "Do you have a favorite relative?", missingBeatHint: "Add why" },
      { question: "What do you do on Sunday afternoons?", missingBeatHint: "Add a detail" },
    ],
  },

  yourTurn: {
    scenario: "It's Sunday dinner and a family member asks about your week. Keep the conversation going for at least 4 turns.",
    teacherRole: "A family member at Sunday dinner",
    opener: "So, how was your week?",
  },

  pushIt: {
    prompt: "One harder one: “Do you think teenagers should have a curfew?” Still three beats.",
  },

  end: {
    heading: "Nice work today.",
    line: "See you next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Same rule, new topic: keep the reminder short.",
      say: ["Same rule: Answer, Add, Ask. Today's topic is family and weekends."],
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
      say: ["Now a real one. I'm a family member at Sunday dinner. Keep it going."],
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
