// SPARK Kids 1 — Picture Quest
// 20-minute one-to-one online ESL trial lesson for true beginners who are
// still building their alphabet. Every game ties one letter to one
// picture, so the child leaves having matched 6 letters to 6 pictures
// in six different ways: spinning, flipping, tracing, guessing, and
// finding them in real life.

export default {
  id: "spark-1",
  code: "SPARK 1",
  title: "Picture Quest",
  subtitle: "Learning letters through pictures, for kids just starting their ABCs",
  length: "20 min",
  coreAim: "Get the child recognizing 6 letters and naming the picture that goes with each one, through repeated, varied, playful exposure.",
  hiddenAssessment: "Letter recognition, letter-sound awareness, listening, pencil control, and willingness to point, say, and guess.",
  materials: [
    "1 spin wheel with the 6 letters of the day",
    "5 flippable cards pairing a number with a letter + picture",
    "1 letter-tracing round with paper and a pencil",
    "2 hidden mystery letters for the guessing round",
    "3 letter prompt cards for Find and Show",
  ],
  pacing: [
    { part: "Cover + hello", time: "3 min" },
    { part: "Game 1: Spin the Letter Wheel", time: "4 min" },
    { part: "Game 2: Flip and Find the Picture", time: "4 min" },
    { part: "Game 3: Trace the Letter", time: "3 min" },
    { part: "Game 4: Mystery Letter Box", time: "3 min" },
    { part: "Game 5: Find the Letter", time: "2 min" },
    { part: "Final recap + feedback", time: "1 min" },
  ],

  introSlides: [
    {
      kind: "intro",
      title: "Let's Learn Letters and Pictures!",
      lead: "Today every letter gets a picture friend. Let's spin, flip, trace, and find them all!",
      steps: [
        "Spin for a letter",
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
      purpose: "Open with a high-energy letter game that needs almost no explanation.",
      timing: "4 min",
      teacherScript: ["Spin it!", "What letter?", "Can you say the letter?", "Now say the word!"],
      supportMoves: ["If the child only says the letter, model the full word.", "Teacher: \"D! It's a dog!\" Student repeats."],
      question: "Spin and find a letter!",
      starter: "It's the letter ___.",
      items: [
        { label: "Dog", wheel: "D", icon: "dog" },
        { label: "Cat", wheel: "C", icon: "cat" },
        { label: "Banana", wheel: "B", icon: "banana" },
        { label: "Elephant", wheel: "E", icon: "elephant" },
        { label: "Lion", wheel: "L", icon: "lion" },
        { label: "Fish", wheel: "F", icon: "fish" },
      ],
    },
    {
      kind: "flipcards",
      title: "Flip and Find the Picture!",
      purpose: "Repeat the same 6 letter-picture pairs with a second mechanic, for real retention.",
      timing: "4 min",
      teacherScript: ["Pick a number!", "Flip it!", "What letter do you see?", "What is it?"],
      supportMoves: ["Point at the first letter of the word as you say it together.", "Student: \"Cat.\" Teacher: \"C! C is for cat.\""],
      cards: [
        { number: 1, label: "dog", icon: "dog", category: "animal" },
        { number: 2, label: "cat", icon: "cat", category: "animal" },
        { number: 3, label: "banana", icon: "banana", category: "food" },
        { number: 4, label: "elephant", icon: "elephant", category: "animal" },
        { number: 5, label: "lion", icon: "lion", category: "animal" },
      ],
      starters: ["I pick number ___.", "It's the letter ___.", "It's a ___."],
    },
    {
      kind: "write",
      title: "Trace the Letter!",
      purpose: "Add a hands-on, pencil-and-paper moment to make the letter stick.",
      timing: "3 min",
      teacherScript: ["D is for dog!", "Can you write the letter D?", "Say the letter as you write it.", "Show me!"],
      supportMoves: ["If the child has no pencil handy, have them trace the letter shape in the air with a finger instead."],
      word: "D",
      icon: "dog",
      instruction: "Write the letter D on your paper.",
    },
    {
      kind: "mystery",
      title: "Mystery Letter Box 1",
      purpose: "Shift from naming to guessing, with the letter as the clue.",
      timing: "1.5 min",
      teacherScript: ["It starts with... E!", "What do you think it is?", "Reveal it!", "Were you right?"],
      label: "elephant",
      icon: "elephant",
      starter: "I think it's a ___.",
    },
    {
      kind: "mystery",
      title: "Mystery Letter Box 2",
      purpose: "Repeat the guessing mechanic with a new letter clue.",
      timing: "1.5 min",
      teacherScript: ["It starts with... F!", "What do you think it is this time?", "Reveal it!", "Were you right?"],
      label: "fish",
      icon: "fish",
      starter: "I think it's a ___.",
    },
    {
      kind: "findshow",
      title: "Find the Letter!",
      purpose: "Move from screen pictures to the child's real environment, and end on an easy win.",
      timing: "2 min",
      teacherScript: ["Find something!", "Show me something that starts with B! Or T! Or P!", "You found it — great job!"],
      prompts: ["something that starts with B", "something that starts with T", "something that starts with P"],
      starter: "I have a ___. It starts with ___.",
    },
    {
      title: "Letter Rainbow Recap!",
      purpose: "End with one fast, confident pass through every letter and picture from today.",
      timing: "1 min",
      kidGuide: ["D is for ___.", "C is for ___.", "B is for ___.", "E is for ___.", "L is for ___.", "F is for ___."],
      teacherScript: ["Let's say them all one more time!", "D is for...?", "C is for...?", "Keep going!"],
      sceneIcons: ["dog", "cat", "banana", "elephant", "lion", "fish"],
    },
    {
      kind: "feedback",
      title: "Great Job Today!",
      purpose: "End on a clean, positive note with a parent-ready summary.",
      timing: "0.5 min",
      childText: ["Great job!", "You know your letters!"],
      feedback: {
        strength: "Good listening, good participation, recognizes several letters and their sounds, willing to repeat, trace, and try.",
        target: "Needs more practice with the full alphabet, needs more confidence connecting a letter to its sound without a picture cue, needs more pencil-control practice.",
        recommendedPath: "Fun alphabet and phonics classes with picture games and letter-tracing practice, building toward Story Quest.",
      },
    },
  ],
};
