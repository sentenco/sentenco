// SPARK Kids 1 — Picture Quest
// 20-minute one-to-one online ESL trial lesson for true beginners who are
// still building their alphabet. Introduces the first 10 letters, A-J,
// each paired with one picture. The Letter Wheel is the main activity —
// it carries all 10 letters at once since a wheel doesn't grow with
// more segments the way a grid of cards would. Every other game only
// ever shows a small handful of letters at a time, by design, so no
// slide ever needs to scroll.

export default {
  id: "spark-1",
  code: "SPARK 1",
  title: "Picture Quest",
  subtitle: "The first 10 letters of the alphabet, one picture at a time",
  length: "20 min",
  coreAim: "Get the child recognizing letters A through J and naming the picture that goes with each one, with the spinning Letter Wheel as the main activity.",
  hiddenAssessment: "Letter recognition across 10 letters, letter-sound awareness, listening, pencil control, and willingness to point, say, and guess.",
  materials: [
    "1 spin wheel with all 10 letters of the day (A-J)",
    "4 flippable cards pairing a number with a letter + picture",
    "1 letter-tracing round with paper and a pencil",
    "2 hidden mystery letters for the guessing round",
    "3 letter prompt cards for Find and Show",
  ],
  pacing: [
    { part: "Cover + hello", time: "3 min" },
    { part: "Main Activity: Spin the Letter Wheel", time: "6 min" },
    { part: "Game 2: Flip and Find the Picture", time: "3 min" },
    { part: "Game 3: Trace the Letter", time: "2 min" },
    { part: "Game 4: Mystery Letter Box", time: "2 min" },
    { part: "Game 5: Find the Letter", time: "2 min" },
    { part: "Final recap + feedback", time: "2 min" },
  ],

  introSlides: [
    {
      kind: "intro",
      title: "Let's Learn Our ABCs!",
      lead: "Today we meet 10 letters and 10 pictures. The big wheel will help us find them all!",
      steps: [
        "Spin the Letter Wheel",
        "Flip and find a picture",
        "Trace a letter",
        "Guess the mystery letter",
        "Find something at home!",
      ],
    },
  ],

  slides: [
    {
      kind: "wheel",
      title: "Spin the Letter Wheel!",
      purpose: "Main activity. Carries all 10 letters of the day in one game, so the child hears and says every letter-picture pair at least once.",
      timing: "6 min",
      teacherScript: ["Spin it!", "What letter?", "Can you say the letter?", "Now say the word!", "Let's spin again!"],
      supportMoves: ["If the child only says the letter, model the full word.", "Teacher: \"A! It's an apple!\" Student repeats.", "Spin until every letter has come up at least once, more if there's time."],
      question: "Spin and find a letter!",
      starter: "It's the letter ___.",
      items: [
        { label: "Apple", wheel: "A", icon: "apple" },
        { label: "Banana", wheel: "B", icon: "banana" },
        { label: "Cat", wheel: "C", icon: "cat" },
        { label: "Dog", wheel: "D", icon: "dog" },
        { label: "Elephant", wheel: "E", icon: "elephant" },
        { label: "Fish", wheel: "F", icon: "fish" },
        { label: "Grapes", wheel: "G", icon: "grapes" },
        { label: "Hat", wheel: "H", icon: "hat" },
        { label: "Ice Cream", wheel: "I", icon: "icecream" },
        { label: "Juice", wheel: "J", icon: "juice" },
      ],
    },
    {
      kind: "flipcards",
      title: "Flip and Find the Picture!",
      purpose: "Repeat 4 of today's letters with a second mechanic, for real retention. Deliberately kept to 4 cards, not 10, so the slide never scrolls.",
      timing: "3 min",
      teacherScript: ["Pick a number!", "Flip it!", "What letter do you see?", "What is it?"],
      supportMoves: ["Point at the first letter of the word as you say it together.", "Student: \"Cat.\" Teacher: \"C! C is for cat.\""],
      cards: [
        { number: 1, label: "apple", icon: "apple", category: "food" },
        { number: 2, label: "dog", icon: "dog", category: "animal" },
        { number: 3, label: "grapes", icon: "grapes", category: "food" },
        { number: 4, label: "hat", icon: "hat", category: "object" },
      ],
      starters: ["I pick number ___.", "It's the letter ___.", "It's a ___."],
    },
    {
      kind: "write",
      title: "Trace the Letter!",
      purpose: "Add a hands-on, pencil-and-paper moment to make one letter stick.",
      timing: "2 min",
      teacherScript: ["A is for apple!", "Can you write the letter A?", "Say the letter as you write it.", "Show me!"],
      supportMoves: ["If the child has no pencil handy, have them trace the letter shape in the air with a finger instead."],
      word: "A",
      icon: "apple",
      instruction: "Write the letter A on your paper.",
    },
    {
      kind: "mystery",
      title: "Mystery Letter Box 1",
      purpose: "Shift from naming to guessing, with the letter as the clue.",
      timing: "1 min",
      teacherScript: ["It starts with... I!", "What do you think it is?", "Reveal it!", "Were you right?"],
      label: "icecream",
      icon: "icecream",
      starter: "I think it's a ___.",
    },
    {
      kind: "mystery",
      title: "Mystery Letter Box 2",
      purpose: "Repeat the guessing mechanic with a new letter clue.",
      timing: "1 min",
      teacherScript: ["It starts with... J!", "What do you think it is this time?", "Reveal it!", "Were you right?"],
      label: "juice",
      icon: "juice",
      starter: "I think it's a ___.",
    },
    {
      kind: "findshow",
      title: "Find the Letter!",
      purpose: "Move from screen pictures to the child's real environment, and end on an easy win.",
      timing: "2 min",
      teacherScript: ["Find something!", "Show me something that starts with B! Or C! Or H!", "You found it — great job!"],
      prompts: ["something that starts with B", "something that starts with C", "something that starts with H"],
      starter: "I have a ___. It starts with ___.",
    },
    {
      title: "Letter Rainbow Recap!",
      purpose: "End with one fast, confident spoken pass through all 10 letters. Text-only on purpose, no picture grid, so the slide never needs to scroll.",
      timing: "1 min",
      kidGuide: ["A…", "B…", "C…", "D…", "E…", "F…", "G…", "H…", "I…", "J…"],
      teacherScript: ["Let's say all 10 letters one more time, fast!", "A is for...?", "B is for...?", "Keep going all the way to J!"],
    },
    {
      kind: "feedback",
      title: "Great Job Today!",
      purpose: "End on a clean, positive note with a parent-ready summary.",
      timing: "1 min",
      childText: ["Great job!", "You know 10 letters!"],
      feedback: {
        strength: "Good listening, good participation, recognizes several of the 10 letters and their sounds, willing to repeat, trace, and try.",
        target: "Needs more practice with the rest of the alphabet, needs more confidence connecting a letter to its sound without a picture cue, needs more pencil-control practice.",
        recommendedPath: "Fun alphabet and phonics classes with picture games and letter-tracing practice, building toward Story Quest.",
      },
    },
  ],
};
