// One prompt per day for the Homeroom, rotating through this list. Written for
// teachers to answer in a sentence or two; answering opens the post box.
export const HOMEROOM_PROMPTS = [
  "What is one warm-up you use on Mondays?",
  "Which mistake do your students make the most, and how do you fix it?",
  "Share one game that works with a very quiet student.",
  "What is your go-to way to explain the difference between a and an?",
  "Which song or video has worked well in your class lately?",
  "How do you end a lesson so students leave smiling?",
  "What is one thing you wish you had known in your first year of teaching?",
  "How do you handle a student who finishes everything early?",
  "Share a simple speaking task that needs no preparation.",
  "What is your favorite way to review last week's words?",
  "How do you teach pronunciation without making students shy?",
  "Which classroom object do you use most for teaching?",
  "What is a small win from this week?",
  "How do you keep a young learner focused for 25 minutes?",
  "Share your best tip for teaching the past simple.",
  "What do you do when a lesson plan goes wrong halfway?",
  "How do you make homework feel light for students?",
  "What is your favorite question to start a conversation with a new student?",
  "Which flashcard activity do your students ask for again and again?",
  "How do you teach prepositions of place so they stick?",
  "What is one phrase you use to encourage students?",
  "How do you check understanding without asking 'Do you understand?'",
  "Share a way to teach vocabulary using only pictures.",
  "How do you handle a lesson with a student who has low energy?",
  "What is a mistake you made as a teacher that taught you something?",
  "How do you introduce a new tense to beginners?",
  "What is your favorite listening activity?",
  "How do you teach students to ask questions in English?",
  "Which online tool saves you the most prep time?",
  "What would you tell a new teacher joining Sentenco today?",
];

export function promptOfTheDay(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  const day = Math.floor((date - start) / 86400000);
  return HOMEROOM_PROMPTS[day % HOMEROOM_PROMPTS.length];
}
