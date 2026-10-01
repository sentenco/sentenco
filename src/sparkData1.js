// SPARK Kids 1 — Picture Quest
// 20-minute one-to-one online ESL trial lesson for true beginners who are
// still building their alphabet. Introduces the first 10 letters, A-J,
// each paired with one picture from the existing A1 Kids alphabet
// curriculum. The Letter Wheel is the main activity (all 10 letters at
// once); a dedicated slide for each letter follows, one at a time, with
// a very big letter and a zoomable picture. Every slide is kept simple
// on purpose -- one clear instruction, one idea, nothing to scroll.

export default {
  id: "spark-1",
  code: "SPARK 1",
  title: "Picture Quest",
  subtitle: "The first 10 letters of the alphabet, one picture at a time",
  length: "20 min",
  coreAim: "Get the child recognizing letters A through J and naming the picture that goes with each one, with the spinning Letter Wheel as the main activity and one dedicated slide per letter.",
  hiddenAssessment: "Letter recognition across 10 letters, letter-sound awareness, listening, pencil control, and willingness to point, say, and guess.",
  materials: [
    "1 spin wheel with all 10 letters of the day (A-J)",
    "10 individual letter slides, one per letter",
    "1 letter-tracing round with paper and a pencil",
    "3 real-object prompts for Find the Letter",
  ],
  pacing: [
    { part: "Cover + hello", time: "3 min" },
    { part: "Main Activity: Spin the Letter Wheel", time: "5 min" },
    { part: "Meet Each Letter (A-J, one slide each)", time: "5 min" },
    { part: "Trace the Letter", time: "2 min" },
    { part: "Find the Letter", time: "2 min" },
    { part: "Final recap + feedback", time: "2 min" },
  ],

  introSlides: [
    {
      kind: "intro",
      title: "Let's Learn Our ABCs!",
      lead: "Today we meet 10 letters and 10 pictures. The big wheel will help us find them all!",
      steps: [
        "Spin the Letter Wheel",
        "Meet each letter, one at a time",
        "Trace a letter",
        "Find something at home!",
      ],
    },
  ],

  slides: [
    {
      kind: "wheel",
      title: "Spin the Letter Wheel!",
      topInstruction: "Spin, then say the letter!",
      purpose: "Main activity. Carries all 10 letters of the day in one game, so the child hears and says every letter-picture pair at least once before the letter-by-letter pass.",
      timing: "5 min",
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
    { kind: "letter", topInstruction: "Say the letter, then say the picture!", letter: "A", word: "Apple", icon: "apple", timing: "30 sec" },
    { kind: "letter", topInstruction: "Say the letter, then say the picture!", letter: "B", word: "Banana", icon: "banana", timing: "30 sec" },
    { kind: "letter", topInstruction: "Say the letter, then say the picture!", letter: "C", word: "Cat", icon: "cat", timing: "30 sec" },
    { kind: "letter", topInstruction: "Say the letter, then say the picture!", letter: "D", word: "Dog", icon: "dog", timing: "30 sec" },
    { kind: "letter", topInstruction: "Say the letter, then say the picture!", letter: "E", word: "Elephant", icon: "elephant", timing: "30 sec" },
    { kind: "letter", topInstruction: "Say the letter, then say the picture!", letter: "F", word: "Fish", icon: "fish", timing: "30 sec" },
    { kind: "letter", topInstruction: "Say the letter, then say the picture!", letter: "G", word: "Grapes", icon: "grapes", timing: "30 sec" },
    { kind: "letter", topInstruction: "Say the letter, then say the picture!", letter: "H", word: "Hat", icon: "hat", timing: "30 sec" },
    { kind: "letter", topInstruction: "Say the letter, then say the picture!", letter: "I", word: "Ice Cream", icon: "icecream", timing: "30 sec" },
    { kind: "letter", topInstruction: "Say the letter, then say the picture!", letter: "J", word: "Juice", icon: "juice", timing: "30 sec" },
    {
      kind: "write",
      title: "Trace the Letter!",
      topInstruction: "Grab a pencil and paper!",
      purpose: "Add a hands-on, pencil-and-paper moment to make one letter stick.",
      timing: "2 min",
      teacherScript: ["A is for apple!", "Can you write the letter A?", "Say the letter as you write it.", "Show me!"],
      supportMoves: ["If the child has no pencil handy, have them trace the letter shape in the air with a finger instead."],
      word: "A",
      icon: "apple",
      instruction: "Write the letter A on your paper.",
    },
    {
      kind: "findshow",
      title: "Find the Letter!",
      topInstruction: "Look around your room!",
      purpose: "Move from screen pictures to the child's real environment, and end on an easy win.",
      timing: "2 min",
      teacherScript: ["Find something!", "Show me something that starts with B! Or C! Or H!", "You found it — great job!"],
      prompts: ["something that starts with B", "something that starts with C", "something that starts with H"],
      starter: "I have a ___. It starts with ___.",
    },
    {
      title: "Letter Rainbow Recap!",
      topInstruction: "Let's say them all, fast!",
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
