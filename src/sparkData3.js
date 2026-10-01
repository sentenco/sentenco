// SPARK Kids 3 — Action Quest
// 20-minute one-to-one online ESL trial lesson for kids who already know
// enough English to speak in short sentences. Focus: movement, location
// language, and real objects, through fast teacher-driven games.

export default {
  id: "spark-3",
  code: "SPARK 3",
  title: "Action Quest",
  subtitle: "Action, location, and real-object games for confident little speakers",
  length: "20 min",
  coreAim: "Get the child speaking through action, location, and real-object tasks such as \"I can jump\" and \"It is on the chair.\"",
  hiddenAssessment: "Listening response, classroom English, prepositions, simple action verbs, and willingness to respond physically and verbally.",
  materials: [
    "1 spin wheel with 6 actions (jump, clap, sit, stand, dance, wave)",
    "1 teddy, toy, or cartoon object for location modeling",
    "4 flippable cards revealing a location phrase",
    "2 real-object prompt rounds, e.g. pencil, book, toy",
  ],
  pacing: [
    { part: "Cover + hello", time: "3 min" },
    { part: "Game 1: Spin and Act!", time: "4 min" },
    { part: "Game 2: Flip and Find the Teddy", time: "4 min" },
    { part: "Game 3: Where Is It?", time: "3 min" },
    { part: "Game 4: Show and Put", time: "3 min" },
    { part: "Game 5: Your Turn!", time: "2 min" },
    { part: "Final challenge + feedback", time: "1 min" },
  ],

  introSlides: [
    {
      kind: "intro",
      title: "Let's Move and Play!",
      lead: "Today we will spin for actions, flip for hiding places, and use real things around you!",
      steps: [
        "Spin and act it out",
        "Flip and find the teddy",
        "Show and put real things",
        "Final action challenge!",
      ],
    },
  ],

  slides: [
    {
      kind: "wheel",
      title: "Spin and Act!",
      purpose: "Open with a high-energy action game that needs almost no explanation.",
      timing: "4 min",
      teacherScript: ["Spin it!", "What does it say?", "Now do it!", "Can you say: I can ___?"],
      supportMoves: ["Do the action together the first time if needed.", "Student does the action. Teacher: \"You can jump!\" Student repeats."],
      question: "Spin and do the action!",
      starter: "I can ___.",
      items: [
        { wheel: "Jump", label: "Jump!" },
        { wheel: "Clap", label: "Clap!" },
        { wheel: "Sit", label: "Sit down!" },
        { wheel: "Stand", label: "Stand up!" },
        { wheel: "Dance", label: "Dance!" },
        { wheel: "Wave", label: "Wave!" },
      ],
    },
    {
      kind: "flipcards",
      cardMode: "text",
      title: "Flip and Find the Teddy!",
      purpose: "Introduce preposition language through a flipping game instead of a flat explanation.",
      timing: "4 min",
      teacherScript: ["Flip a card!", "Where is the teddy?", "Say the whole sentence."],
      supportMoves: ["Hold up a real teddy or toy and act out each location as it's flipped.", "Student: \"Chair.\" Teacher: \"It is on the chair.\" Student repeats the full sentence."],
      cards: [
        { number: 1, text: "on the chair" },
        { number: 2, text: "in the box" },
        { number: 3, text: "under the table" },
        { number: 4, text: "next to the book" },
      ],
      starters: ["It is on the ___.", "It is in the ___.", "It is under the ___.", "It is next to the ___."],
    },
    {
      kind: "mystery",
      title: "Where Is It? 1",
      purpose: "Shift from flipping to guessing, using a real toy as the hidden clue.",
      timing: "1.5 min",
      teacherScript: ["Where is the teddy now?", "Guess!", "Reveal it!", "Say the whole sentence."],
      revealText: "under the table",
      starter: "It is under the ___.",
    },
    {
      kind: "mystery",
      title: "Where Is It? 2",
      purpose: "Repeat the guessing mechanic with a new location.",
      timing: "1.5 min",
      teacherScript: ["One more! Where is it now?", "Guess!", "Reveal it!", "Say the whole sentence."],
      revealText: "in the box",
      starter: "It is in the ___.",
    },
    {
      title: "Show and Put",
      purpose: "Move from screen pictures to the child's real environment and real objects.",
      timing: "3 min",
      kidGuide: ["This is my ___.", "It is on the ___.", "It is under the ___."],
      teacherScript: ["Show me a pencil.", "Put it on your book.", "Now say it!", "Put it under the book now."],
      expectedOutput: ["This is my pencil.", "It is on the book.", "It is under the book."],
      promptOptions: ["Show me a pencil.", "Put it on the book.", "Put it under the book.", "Put it next to the book."],
    },
    {
      title: "Your Turn!",
      purpose: "Free-practice round combining action and location with the child's own objects.",
      timing: "2 min",
      kidGuide: ["I can ___.", "It is on the ___.", "It is in the ___."],
      teacherScript: ["Jump two times!", "Now find a toy.", "Put it in a box or on a chair.", "Tell me where it is!"],
      expectedOutput: ["I can jump.", "The toy is in the box.", "The toy is on the chair."],
      sceneIcons: [],
    },
    {
      kind: "feedback",
      title: "Great Job Today!",
      purpose: "Give positive child-facing feedback and a parent-ready summary.",
      timing: "1 min",
      childText: ["Great job!", "You listened fast!", "You did the actions and spoke English!"],
      feedback: {
        strength: "Strong listening response, good participation, good understanding of action commands, willing to speak full sentences.",
        target: "Needs more support with location words like on/in/under, needs more confidence making full answers without a model, needs more repetition for sentence building.",
        recommendedPath: "Fun action-based speaking lessons with classroom English, prepositions, and real-object practice.",
      },
    },
  ],
};
