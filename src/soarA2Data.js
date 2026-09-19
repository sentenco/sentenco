// SOAR A2 Kids lesson data, keyed "unit-lesson". Consumed by SoarLesson.jsx.
// Content adapted from SOARA2KIDS.docx -- each lesson's Goal + 5 numbered
// teaching steps (the ⭐ step is usually the richest/most interactive one)
// mapped onto the same 6-slide "Sky Voyage" shell established by Unit 1
// Lesson 1 (SchoolSubjectsLesson.jsx): Getting Ready, Taking Off, [a
// content-appropriate middle stage], Flight Log, Postcard Message, Landing.


// ---- shared pieces for the rebuilt (v2) lessons ----
const SP = (label, file) => ({ label, src: `/curriculum/a2-school/${file}` });
const ARRIVE = { label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" };
const HOME = { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" };
const MATH = SP("Math", "math.jpg"), ENGLISH = SP("English", "english.jpg"), SCIENCE = SP("Science", "science.jpg"), ART = SP("Art", "art.jpg");
const MUSIC = SP("Music", "music.jpg"), PE = SP("P.E.", "pe.jpg"), HISTORY = SP("History", "history.jpg"), GEOGRAPHY = SP("Geography", "geography.jpg");
const CL = (label, file) => ({ label, src: `/curriculum/a2-clubs/${file}` });
const PR = (label, file) => ({ label, src: `/curriculum/a2-project/${file}` });
const BASKETBALL = CL("basketball", "basketball.jpg"), SOCCER = CL("soccer", "soccer.jpg"), SWIMMING = CL("swimming", "swimming.jpg"), DANCING = CL("dancing", "dancing.jpg");
const READING = CL("reading", "reading.jpg"), CODING = CL("coding", "coding.jpg"), COOKING = CL("cooking", "cooking.jpg"), DRAWING = { label: "art club", src: "/curriculum/a2-school/art.jpg" }, MUSIC_CLUB = { label: "music club", src: "/curriculum/a2-school/music.jpg" };
const LUNCH = SP("lunch", "lunch.jpg"), HOMEWORK = SP("homework", "homework.jpg");
const LISTEN_ANSWER = [["👂", "Listen to the question."], ["🗣️", "Answer the teacher."]];
const NO_HELP = (t) => [["🤔", "No help this time!"], ["🗣️", t]];
const pair = (a, b) => ({ type: "strip", numbered: false, size: 108, items: [a, b] });
const one = (item) => ({ type: "strip", numbered: false, labels: false, size: 120, items: [item] });

export const SOAR_A2_LESSONS = {
  // ---------- Unit 1: School Life ----------
  "1-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 1, title: "School Subjects", subtitle: "Say which subjects you have and what you think about them." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "dialogue", part: "A", stage: "Hello!", heading: "How Was School?", turns: [{ who: "teacher", text: "How was school today?" }], instruction: LISTEN_ANSWER, guide: "School was ___." },
      { type: "dialogue", part: "A", stage: "Hello!", heading: "At School", turns: [{ who: "teacher", text: "What did you do at school today?" }], instruction: LISTEN_ANSWER, guide: "I ___ at school." },

      // ---- Part B: school subjects (5 min) ----
      { type: "strip", part: "B", stage: "School Subjects", heading: "School Subjects", numbered: false, items: [MATH, ENGLISH, SCIENCE, ART], instruction: [["👀", "Look at the subjects."], ["🗣️", "Say each subject."]] },
      { type: "strip", part: "B", stage: "School Subjects", heading: "School Subjects 2", numbered: false, items: [MUSIC, PE, HISTORY, GEOGRAPHY], instruction: [["👀", "Look at the subjects."], ["🗣️", "Say each subject."]] },
      { ...one(SCIENCE), part: "B", stage: "What Subject?", heading: "What Subject Is This?", question: "What subject is this?", instruction: [["👀", "Look at the picture."], ["🗣️", "Answer the question."]], guide: "It's ___." },
      { ...one(ART), part: "B", stage: "What Subject?", heading: "What Subject Is This? 2", question: "What subject is this?", instruction: [["👀", "Look at the picture."], ["🗣️", "Answer the question."]], guide: "It's ___." },
      { ...one(HISTORY), part: "B", stage: "What Subject?", heading: "What Subject Is This? 3", question: "What subject is this?", instruction: [["🤔", "No help this time!"], ["🗣️", "Say the subject."]] },
      { ...one(SCIENCE), part: "B", stage: "Do You Have It?", heading: "Do You Have It?", question: "Do you have Science at school?", instruction: LISTEN_ANSWER, guide: "Yes, I do. / No, I don't." },
      { ...one(MUSIC), part: "B", stage: "Do You Have It?", heading: "Do You Have It? 2", question: "Do you have Music at school?", instruction: LISTEN_ANSWER, guide: "Yes, I do. / No, I don't." },
      { type: "strip", part: "B", stage: "Other Subjects", heading: "Other Subjects", numbered: false, size: 100, items: [MATH, ENGLISH, ART, PE], question: "What other subjects do you have?", instruction: LISTEN_ANSWER, guide: "I have ___, ___, and ___." },

      // ---- Part C: likes, reasons, interview (13 min) ----
      { type: "message", part: "C", stage: "Like or Don't Like?", heading: "I Like, I Don't Like", lines: ["I *like* Math.", "I *don't like* History."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the sentences."]] },
      { ...one(MATH), part: "C", stage: "Like or Don't Like?", heading: "Do You Like It?", question: "Do you like Math?", instruction: LISTEN_ANSWER, guide: "I like ___. / I don't like ___." },
      { ...one(ENGLISH), part: "C", stage: "Like or Don't Like?", heading: "Do You Like It? 2", question: "Do you like English?", instruction: LISTEN_ANSWER, guide: "I like ___. / I don't like ___." },
      { ...one(PE), part: "C", stage: "Like or Don't Like?", heading: "Do You Like It? 3", question: "Do you like P.E.?", instruction: LISTEN_ANSWER, guide: "I like ___. / I don't like ___." },
      { type: "chips", part: "C", stage: "Because...", heading: "Opinion Words", items: ["easy", "difficult", "fun", "interesting", "boring"], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the words."]] },
      { type: "message", part: "C", stage: "Because...", heading: "Add a Reason", lines: ["I like Math *because* it is *easy*.", "I don't like History *because* it is *difficult*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the sentences."]] },
      { ...one(SCIENCE), part: "C", stage: "Because...", heading: "Why?", question: "Do you like Science? Why?", instruction: LISTEN_ANSWER, guide: "I like ___ because it is ___." },
      { ...one(ART), part: "C", stage: "Because...", heading: "Why? 2", question: "Do you like Art? Why?", instruction: LISTEN_ANSWER, guide: "I like ___ because it is ___." },
      { ...one(HISTORY), part: "C", stage: "Because...", heading: "Why? 3", question: "Do you like History? Why?", instruction: NO_HELP("Answer and say why.") },
      { type: "dialogue", part: "C", stage: "School Subject Interview", heading: "School Subject Interview", turns: [{ who: "teacher", text: "What subject do you like? Why?" }], instruction: LISTEN_ANSWER, guide: "I like ___ because it is ___." },
      { type: "dialogue", part: "C", stage: "School Subject Interview", heading: "Interview 2", turns: [{ who: "teacher", text: "Is Science easy or difficult?" }], instruction: LISTEN_ANSWER, guide: "Science is ___." },
      { type: "dialogue", part: "C", stage: "School Subject Interview", heading: "Interview 3", turns: [{ who: "teacher", text: "Which subject is boring? Which subject is fun?" }], instruction: NO_HELP("Answer the question.") },
      { type: "chips", part: "C", stage: "Now You Ask!", heading: "Now You Ask!", items: ["What subjects do you have?", "Do you like ___?", "Why?"], instruction: [["👀", "Look at the questions."], ["🗣️", "Ask the teacher three questions."]] },

      // ---- Part D: my talk (4 min) ----
      { type: "message", part: "D", stage: "My Talk", heading: "Listen to the Model", lines: ["I have English, Math, Science, Art, and P.E.", "My favorite subject is English *because* it is fun.", "I don't like Math *because* it is difficult."], instruction: [["👂", "Listen to the model."], ["🗣️", "Repeat the sentences."]] },
      { type: "dialogue", part: "D", stage: "My Talk", heading: "My School Subjects", turns: [{ who: "teacher", text: "Tell me about your school subjects." }], instruction: NO_HELP("Say four or five sentences.") },
      { type: "postcard", part: "D", stage: "Type It!", heading: "Type Your Subjects", line: "I have ___. My favorite subject is ___ because it is ___. I don't like ___ because it is ___.", instruction: [["⌨️", "Type your subjects in the chat."]] },
      { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Subjects", lines: ["Read your sentences to the teacher.", "Use *because* two times."], instruction: [["📖", "Read what you typed out loud."]] },
      { type: "wrapup", stage: "You've Landed!", recap: "You can say which subjects you have, which ones you like, and why." },
    ],
  },
  "1-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 1, title: "My School Day", subtitle: "Say your school day in order." },

      // ---- Part A: warm-up (3 min) ----
      { type: "chips", part: "A", stage: "Let's Review!", heading: "My School Subjects", items: ["Math", "English", "Science", "Art", "History", "Music", "P.E.", "Geography"],
        instruction: [["👀", "Look at the subjects."], ["🗣️", "Say your favorite subject."]], guide: "My favorite subject is ___." },
      { type: "dialogue", part: "A", stage: "Let's Review!", heading: "Why?", turns: [{ who: "teacher", text: "What is your favorite subject? Why?" }],
        instruction: [["👂", "Listen to the question."], ["🗣️", "Answer with because."]], guide: "I like ___ because it is ___." },
      { type: "dialogue", part: "A", stage: "Let's Review!", heading: "Not My Favorite", turns: [{ who: "teacher", text: "What subject do you not like? Why?" }],
        instruction: [["👂", "Listen to the question."], ["🗣️", "Answer with because."]], guide: "I don't like ___ because it is ___." },

      // ---- Part B: learn the pattern (5 min) ----
      { type: "strip", part: "B", stage: "A School Day", heading: "A School Day",
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", src: "/curriculum/a2-school/english.jpg" }, { label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        instruction: [["👀", "Look at the pictures."], ["🗣️", "Say each activity."]] },
      { type: "chips", part: "B", stage: "Sequencing Words", heading: "Four Little Words", items: ["First", "Then", "After that", "Finally"],
        instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the four words."]] },
      { type: "strip", part: "B", stage: "What Happens?", heading: "What Happens First?", active: 0,
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", src: "/curriculum/a2-school/english.jpg" }, { label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        instruction: [["👀", "Look at picture 1."], ["🗣️", "Answer the question."]], guide: "First, I ___." },
      { type: "strip", part: "B", stage: "What Happens?", heading: "What Happens Next?", active: 1,
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", src: "/curriculum/a2-school/english.jpg" }, { label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        instruction: [["👀", "Look at picture 2."], ["🗣️", "Answer the question."]], guide: "Then, I ___." },
      { type: "strip", part: "B", stage: "What Happens?", heading: "And After That?", active: 2,
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", src: "/curriculum/a2-school/english.jpg" }, { label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        instruction: [["👀", "Look at picture 3."], ["🗣️", "Answer the question."]], guide: "After that, I ___." },
      { type: "strip", part: "B", stage: "What Happens?", heading: "And After That? 2", active: 3,
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", src: "/curriculum/a2-school/english.jpg" }, { label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        instruction: [["👀", "Look at picture 4."], ["🗣️", "Answer the question."]], guide: "After that, I ___." },
      { type: "strip", part: "B", stage: "What Happens?", heading: "What Happens Last?", active: 4,
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", src: "/curriculum/a2-school/english.jpg" }, { label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        instruction: [["👀", "Look at picture 5."], ["🗣️", "Answer the question."]], guide: "Finally, I ___." },

      // ---- Part C: build it, then tell the story (13 min) ----
      { type: "strip", part: "C", stage: "Build My School Day", heading: "Listen to the Model",
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", src: "/curriculum/a2-school/english.jpg" }, { label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        sentence: "*First*, I arrive at school. *Then*, I have English. *After that*, I have Math. *Finally*, I go home.",
        instruction: [["👂", "Listen to the model."], ["🗣️", "Repeat the sentences."]] },
      { type: "strip", part: "C", stage: "Build My School Day", heading: "Build My School Day",
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "Art", src: "/curriculum/a2-school/art.jpg" }, { label: "P.E.", src: "/curriculum/a2-school/pe.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        frame: ["First, I ___. Then, I ___.", "After that, I ___. Finally, I ___."],
        instruction: [["👀", "Look at the day."], ["🗣️", "Say it in order."]] },
      { type: "strip", part: "C", stage: "Build My School Day", heading: "Build My School Day 2",
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "Science", src: "/curriculum/a2-school/science.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        frame: ["First, I ___. Then, I ___.", "After that, I ___. Finally, I ___."],
        instruction: [["👀", "Look at the day."], ["🗣️", "Say it in order."]] },
      { type: "strip", part: "C", stage: "Build My School Day", heading: "Build My School Day 3",
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", src: "/curriculum/a2-school/english.jpg" }, { label: "Music", src: "/curriculum/a2-school/music.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        instruction: [["🤔", "No help this time!"], ["🗣️", "Say the day in order."]] },
      { type: "strip", part: "C", stage: "Add the Time", heading: "Add the Time",
        items: [{ label: "arrive at school", time: "8:00", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", time: "9:00", src: "/curriculum/a2-school/english.jpg" }, { label: "lunch", time: "12:00", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", time: "3:00", src: "/curriculum/u12-routines/go-home.jpg" }],
        frame: ["First, I arrive at school at ___."],
        instruction: [["👀", "Look at the times."], ["🗣️", "Say the day with times."]] },
      { type: "strip", part: "C", stage: "School Day Story", heading: "School Day Story", numbered: false, size: 84,
        items: [{ label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "Science", src: "/curriculum/a2-school/science.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "homework", src: "/curriculum/a2-school/homework.jpg" }],
        question: "*First*, I go to school. What happens next?",
        instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next event."]], guide: "Then, I ___." },
      { type: "strip", part: "C", stage: "School Day Story", heading: "School Day Story 2", numbered: false, size: 84,
        items: [{ label: "P.E.", src: "/curriculum/a2-school/pe.jpg" }, { label: "Art", src: "/curriculum/a2-school/art.jpg" }, { label: "Music", src: "/curriculum/a2-school/music.jpg" }, { label: "English", src: "/curriculum/a2-school/english.jpg" }],
        question: "*After that*, I have lunch. What happens next?",
        instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next event."]], guide: "After that, I ___." },
      { type: "strip", part: "C", stage: "School Day Story", heading: "School Day Story 3", numbered: false, size: 84,
        items: [{ label: "homework", src: "/curriculum/a2-school/homework.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }, { label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }],
        question: "*Then*, I do my homework. How does the day end?",
        instruction: [["👂", "Listen to the teacher."], ["🗣️", "End the story."]], guide: "Finally, I ___." },
      { type: "chips", part: "C", stage: "Tell It Again", heading: "Tell the Whole Story", items: ["First", "Then", "After that", "Finally"],
        instruction: [["🤔", "No help this time!"], ["🗣️", "Retell the whole story."]] },

      // ---- Part D: my own school day (4 min) ----
      { type: "dialogue", part: "D", stage: "My School Day", heading: "My School Day", turns: [{ who: "teacher", text: "Tell me about your school day." }],
        instruction: [["👂", "Listen to the question."], ["🗣️", "Tell me your school day."]], guide: "First, I ___." },
      { type: "postcard", part: "D", stage: "Type It!", heading: "Type Your Day", line: "First, I ___. Then, I ___. After that, I ___. Finally, I ___.",
        instruction: [["⌨️", "Type your school day in the chat."]] },
      { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Day", lines: ["Read your sentences to the teacher.", "Use all four words: *First*, *Then*, *After that*, *Finally*."],
        instruction: [["📖", "Read your school day out loud."]] },
      { type: "wrapup", stage: "You've Landed!", recap: "You can say your school day in order: First, Then, After that, Finally." },
    ],
  },
  "1-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 1, title: "After-School Clubs", subtitle: "Talk about clubs and say which one you prefer." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Warm-Up", heading: "After School", turns: [{ who: "teacher", text: "What do you do after school?" }], instruction: LISTEN_ANSWER, guide: "After school, I ___." },
      { type: "dialogue", part: "A", stage: "Warm-Up", heading: "Choices", turns: [{ who: "teacher", text: "Do you play games, watch TV, do homework, or play sports?" }], instruction: LISTEN_ANSWER, guide: "I ___." },
      { type: "dialogue", part: "A", stage: "Warm-Up", heading: "My Favorite", turns: [{ who: "teacher", text: "What is your favorite after-school activity?" }], instruction: LISTEN_ANSWER, guide: "My favorite activity is ___." },

      // ---- Part B: club match (5 min) ----
      { type: "strip", part: "B", stage: "Club Match", heading: "After-School Clubs", numbered: false, items: [BASKETBALL, SOCCER, SWIMMING, DANCING], instruction: [["👀", "Look at the clubs."], ["🗣️", "Say each activity."]] },
      { type: "strip", part: "B", stage: "Club Match", heading: "After-School Clubs 2", numbered: false, size: 96, items: [DRAWING, MUSIC_CLUB, READING, CODING, COOKING], instruction: [["👀", "Look at the clubs."], ["🗣️", "Say each activity."]] },
      { ...one(DRAWING), part: "B", stage: "Club Match", heading: "What Can You Do?", question: "What can you do in the art club?", instruction: LISTEN_ANSWER, guide: "You can ___." },
      { ...one(BASKETBALL), part: "B", stage: "Club Match", heading: "What Can You Do? 2", question: "What can you do in the sports club?", instruction: LISTEN_ANSWER, guide: "You can ___." },
      { ...one(MUSIC_CLUB), part: "B", stage: "Club Match", heading: "What Can You Do? 3", question: "What can you do in the music club?", instruction: LISTEN_ANSWER, guide: "You can ___." },
      { ...one(CODING), part: "B", stage: "Club Match", heading: "What Can You Do? 4", question: "What can you do in the coding club?", instruction: NO_HELP("Answer the question.") },
      { type: "message", part: "B", stage: "Club Match", heading: "I Like, I Prefer", lines: ["I *like* drawing.", "I *prefer* drawing to swimming."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the sentences."]] },

      // ---- Part C: choose your club (13 min) ----
      { ...pair(BASKETBALL, DRAWING), part: "C", stage: "What Would You Choose?", heading: "Basketball or Art?", question: "Which club do you want to join?", instruction: LISTEN_ANSWER, guide: "I want to join the ___ club." },
      { ...pair(BASKETBALL, DRAWING), part: "C", stage: "What Would You Choose?", heading: "Why?", question: "Why?", instruction: LISTEN_ANSWER, guide: "Because I like ___." },
      { type: "message", part: "C", stage: "Choose Your Club", heading: "Compare Clubs", lines: ["I *prefer* Art Club.", "I like Art Club *more than* Basketball Club.", "Art is *more fun than* basketball."], instruction: [["👂", "Listen to the model."], ["🗣️", "Repeat the sentences."]] },
      { ...pair(BASKETBALL, SWIMMING), part: "C", stage: "Choose Your Club", heading: "Choose Your Club", question: "Which club do you prefer?", instruction: LISTEN_ANSWER, guide: "I prefer ___." },
      { ...pair(DRAWING, MUSIC_CLUB), part: "C", stage: "Choose Your Club", heading: "Choose Your Club 2", question: "Which club do you prefer? Why?", instruction: LISTEN_ANSWER, guide: "I like ___ more than ___." },
      { ...pair(READING, CODING), part: "C", stage: "Choose Your Club", heading: "Choose Your Club 3", question: "Which club is more fun?", instruction: LISTEN_ANSWER, guide: "___ is more fun than ___." },
      { ...pair(DANCING, SOCCER), part: "C", stage: "Choose Your Club", heading: "Choose Your Club 4", question: "Which club do you prefer? Why?", instruction: NO_HELP("Choose a club and say why.") },
      { ...pair(SWIMMING, COOKING), part: "C", stage: "Choose Your Club", heading: "A Difficult Choice", question: "This is hard! Choose one and tell me why.", instruction: NO_HELP("Defend your choice.") },
      { type: "chips", part: "C", stage: "Now You Ask!", heading: "Now You Ask!", items: ["Which do you prefer, ___ or ___?", "Why?"], instruction: [["👀", "Look at the questions."], ["🗣️", "Ask the teacher two questions."]] },

      // ---- Part D: my perfect club (4 min) ----
      { type: "message", part: "D", stage: "My Perfect Club", heading: "Listen to the Model", lines: ["My favorite club is a music club.", "I like singing and playing the guitar.", "I *prefer* music to sports *because* it is fun."], instruction: [["👂", "Listen to the model."], ["🗣️", "Repeat the sentences."]] },
      { type: "dialogue", part: "D", stage: "My Perfect Club", heading: "My Perfect Club", turns: [{ who: "teacher", text: "Tell me about your perfect after-school club." }], instruction: NO_HELP("Say four sentences.") },
      { type: "postcard", part: "D", stage: "Type It!", heading: "Type Your Club", line: "My favorite club is a ___ club. I like ___. I prefer ___ to ___ because it is ___.", instruction: [["⌨️", "Type your perfect club in the chat."]] },
      { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Club", lines: ["Read your sentences to the teacher.", "Use *prefer* and *because*."], instruction: [["📖", "Read what you typed out loud."]] },
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about clubs and say which one you prefer and why." },
    ],
  },
  "1-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 1, title: "A Class Project", subtitle: "Explain a project with First, Then, After that, Finally and because." },

      // ---- Part A: review (3 min) ----
      { type: "dialogue", part: "A", stage: "Review", heading: "Review", turns: [{ who: "teacher", text: "What subject do you like? Why?" }], instruction: LISTEN_ANSWER, guide: "I like ___ because it is ___." },
      { type: "dialogue", part: "A", stage: "Review", heading: "After School", turns: [{ who: "teacher", text: "What do you do after school?" }], instruction: LISTEN_ANSWER, guide: "After school, I ___." },
      { type: "dialogue", part: "A", stage: "Review", heading: "Activities", turns: [{ who: "teacher", text: "What activities do you like?" }], instruction: LISTEN_ANSWER, guide: "I like ___." },

      // ---- Part B: what is a project? (9 min) ----
      { ...one({ label: "animals", src: "/curriculum/u9-scenes/all-animals.jpg" }), part: "B", stage: "What Is a Project?", heading: "A Class Project", size: 110, question: "Our project is Animals Around the World. What can we do?", instruction: LISTEN_ANSWER, guide: "We can ___." },
      { type: "chips", part: "B", stage: "What Is a Project?", heading: "Project Words", items: ["project", "group", "idea", "topic", "poster", "picture", "write", "draw", "practice", "present"], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the words."]] },
      { type: "strip", part: "B", stage: "Build the Project", heading: "Four Project Steps", size: 100, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at the steps."], ["🗣️", "Say each step."]] },
      { type: "strip", part: "B", stage: "Build the Project", heading: "Listen to the Model", size: 84, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], sentence: "*First*, we choose a topic. *Then*, we find information. *After that*, we make a poster. *Finally*, we present it.", instruction: [["👂", "Listen to the model."], ["🗣️", "Repeat the sentences."]] },
      { type: "strip", part: "B", stage: "Build the Project", heading: "What Do We Do First?", size: 100, active: 0, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 1."], ["🗣️", "Answer the question."]], guide: "First, we ___." },
      { type: "strip", part: "B", stage: "Build the Project", heading: "What Do We Do Next?", size: 100, active: 1, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 2."], ["🗣️", "Answer the question."]], guide: "Then, we ___." },
      { type: "strip", part: "B", stage: "Build the Project", heading: "And After That?", size: 100, active: 2, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 3."], ["🗣️", "Answer the question."]], guide: "After that, we ___." },
      { type: "strip", part: "B", stage: "Build the Project", heading: "How Does It End?", size: 100, active: 3, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 4."], ["🗣️", "Answer the question."]], guide: "Finally, we ___." },

      // ---- Part C: project pitch (8 min) ----
      { type: "strip", part: "C", stage: "Project Pitch", heading: "Your Class Needs a Project!", numbered: false, size: 84, items: [{ label: "animals", src: "/curriculum/u9-scenes/all-animals.jpg" }, PR("space", "space.jpg"), SOCCER, { label: "countries", src: "/curriculum/a2-school/geography.jpg" }, { label: "my hobby", src: "/curriculum/a2-school/art.jpg" }], question: "What is your project about?", instruction: [["👀", "Look at the topics."], ["🗣️", "Choose a topic."]], guide: "Our project is about ___." },
      { type: "dialogue", part: "C", stage: "Project Pitch", heading: "Why This Topic?", turns: [{ who: "teacher", text: "Why did you choose this topic?" }], instruction: LISTEN_ANSWER, guide: "I chose it because ___." },
      { type: "dialogue", part: "C", stage: "Project Pitch", heading: "First and Then", turns: [{ who: "teacher", text: "What do you do first? What do you do next?" }], instruction: LISTEN_ANSWER, guide: "First, we ___. Then, we ___." },
      { type: "dialogue", part: "C", stage: "Project Pitch", heading: "After That", turns: [{ who: "teacher", text: "What do you do after that? How does it end?" }], instruction: LISTEN_ANSWER, guide: "After that, we ___. Finally, we ___." },
      { type: "dialogue", part: "C", stage: "Project Pitch", heading: "Interesting?", turns: [{ who: "teacher", text: "Why is your project interesting?" }], instruction: LISTEN_ANSWER, guide: "It is interesting because ___." },
      { type: "message", part: "C", stage: "Project Pitch", heading: "Listen to a Pitch", lines: ["Our project is about space *because* I like planets.", "*First*, we choose the topic. *Then*, we find pictures.", "*After that*, we make a poster. *Finally*, we present it."], instruction: [["👂", "Listen to the model."], ["🗣️", "Repeat the pitch."]] },
      { type: "dialogue", part: "C", stage: "Project Pitch", heading: "A New Project", turns: [{ who: "teacher", text: "Choose a different topic. What is your new project?" }], instruction: NO_HELP("Tell me your new project.") },
      { type: "chips", part: "C", stage: "Tell It Again", heading: "Say It Again", items: ["First", "Then", "After that", "Finally", "because"], instruction: NO_HELP("Retell the project pitch.") },

      // ---- Part D: mini presentation (4 min) ----
      { type: "dialogue", part: "D", stage: "Mini Presentation", heading: "Mini Presentation", turns: [{ who: "teacher", text: "Present your project to me. Take 30 to 60 seconds." }], instruction: NO_HELP("Present your project.") },
      { type: "postcard", part: "D", stage: "Type It!", heading: "Type Your Project", line: "My project is about ___. First, we ___. Then, we ___. It is interesting because ___.", instruction: [["⌨️", "Type your project in the chat."]] },
      { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Pitch", lines: ["Read your sentences to the teacher.", "Use *First*, *Then*, *After that*, *Finally* and *because*."], instruction: [["📖", "Read what you typed out loud."]] },
      { type: "wrapup", stage: "You've Landed!", recap: "You can explain a class project with First, Then, After that, Finally and because." },
    ],
  },
  "1-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 1, title: "Show What You Know!", subtitle: "Talk and type about your school life, all on your own." },

      // ---- Part A: quick school challenge (4 min) ----
      { type: "dialogue", part: "A", stage: "Quick Challenge", heading: "Quick Challenge", turns: [{ who: "teacher", text: "Name five school subjects." }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say five subjects."]] },
      { type: "dialogue", part: "A", stage: "Quick Challenge", heading: "Favorite Subject", turns: [{ who: "teacher", text: "What is your favorite subject? Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Quick Challenge", heading: "After School", turns: [{ who: "teacher", text: "What do you do after school? What is your favorite activity?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: my school day (5 min) ----
      { type: "chips", part: "B", stage: "My School Day", heading: "Your School Day", items: ["First", "Then", "After that", "Finally"], instruction: NO_HELP("Say your school day in order.") },
      { type: "strip", part: "B", stage: "My School Day", heading: "A Busy Day", items: [ARRIVE, MATH, PE, LUNCH, HOME], instruction: [["👀", "Look at the day."], ["🗣️", "Say it in order."]] },
      { type: "strip", part: "B", stage: "My School Day", heading: "A Busy Day 2", items: [ARRIVE, ENGLISH, SCIENCE, LUNCH, HOMEWORK], instruction: [["👀", "Look at the day."], ["🗣️", "Say it in order."]] },
      { type: "strip", part: "B", stage: "My School Day", heading: "Add the Time", items: [{ ...ARRIVE, time: "8:00" }, { ...ART, time: "10:00" }, { ...LUNCH, time: "12:00" }, { ...HOME, time: "3:00" }], instruction: [["👀", "Look at the times."], ["🗣️", "Say the day with times."]] },

      // ---- Part C: school life interview show (8 min) ----
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "Welcome to the Show!", turns: [{ who: "teacher", text: "Welcome to the School Life Interview Show! What subject do you like? Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "First and Next", turns: [{ who: "teacher", text: "What do you do first at school? What do you do next?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "Which Club?", turns: [{ who: "teacher", text: "Which club do you prefer? Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "A Class Project", turns: [{ who: "teacher", text: "Tell me about a class project." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "The New Student", turns: [{ who: "teacher", text: "You are talking to a new student. Tell them about your school life." }], instruction: [["👂", "Listen to the situation."], ["🗣️", "Tell the new student."]] },

      // ---- Part D: my project and my writing (9 min) ----
      { type: "dialogue", part: "D", stage: "My Class Project", heading: "My Class Project", turns: [{ who: "teacher", text: "What is your project about? Why did you choose it?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "D", stage: "My Class Project", heading: "My Class Project 2", turns: [{ who: "teacher", text: "What do you do first? What do you do next?" }], instruction: LISTEN_ANSWER },
      { type: "message", part: "D", stage: "Type It!", heading: "My School Life", lines: ["Include one or two subjects, an opinion, your school day in order, and an after-school activity."], instruction: [["⌨️", "Type four to six sentences in the chat."]] },
      { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Writing", lines: ["Read your sentences to the teacher."], instruction: [["📖", "Read what you typed out loud."]] },
      { type: "wrapup", stage: "Unit 1 Complete!", title: "Unit 1 Complete!", see: "Great job!", recap: "You can talk about your subjects, your school day, and a class project." },
    ],
  },

  "1-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 1, title: "Unit 1 Test", subtitle: "Show what you can say about school life!" },

      // ---- Part A: words ----
      { type: "strip", part: "A", stage: "Words", heading: "What Subject Is It?", numbered: false, labels: false, size: 100, items: [MATH, SCIENCE, ART, MUSIC], instruction: [["👀", "Look at each picture."], ["🗣️", "Say the subject."]] },
      { type: "strip", part: "A", stage: "Words", heading: "What Subject Is It? 2", numbered: false, labels: false, size: 100, items: [ENGLISH, PE, HISTORY, GEOGRAPHY], instruction: [["👀", "Look at each picture."], ["🗣️", "Say the subject."]] },
      { type: "strip", part: "A", stage: "Words", heading: "What Club Is It?", numbered: false, labels: false, size: 100, items: [BASKETBALL, SWIMMING, DANCING, CODING], instruction: [["👀", "Look at each picture."], ["🗣️", "Say the club activity."]] },
      { type: "strip", part: "A", stage: "Words", heading: "What Club Is It? 2", numbered: false, labels: false, size: 100, items: [SOCCER, READING, COOKING, DRAWING], instruction: [["👀", "Look at each picture."], ["🗣️", "Say the club activity."]] },

      // ---- Part B: opinions and comparing ----
      { ...one(MATH), part: "B", stage: "Opinions", heading: "Do You Like It?", question: "Do you like Math? Why?", instruction: [["👂", "Listen to the question."], ["🗣️", "Answer with because."]] },
      { ...one(PE), part: "B", stage: "Opinions", heading: "Do You Like It? 2", question: "Do you like P.E.? Why?", instruction: [["👂", "Listen to the question."], ["🗣️", "Answer with because."]] },
      { ...pair(BASKETBALL, DRAWING), part: "B", stage: "Opinions", heading: "Which Club?", question: "Which club do you prefer? Why?", instruction: [["👂", "Listen to the question."], ["🗣️", "Answer with prefer."]] },
      { ...pair(READING, CODING), part: "B", stage: "Opinions", heading: "Which Club? 2", question: "Which club do you prefer? Why?", instruction: [["👂", "Listen to the question."], ["🗣️", "Answer with prefer."]] },

      // ---- Part C: sequencing ----
      { type: "strip", part: "C", stage: "Sequencing", heading: "A School Day", items: [ARRIVE, ENGLISH, LUNCH, HOME], instruction: [["👀", "Look at the day."], ["🗣️", "Say it in order."]] },
      { type: "strip", part: "C", stage: "Sequencing", heading: "A School Day 2", items: [ARRIVE, MATH, ART, HOME], instruction: [["👀", "Look at the day."], ["🗣️", "Say it in order."]] },
      { type: "strip", part: "C", stage: "Sequencing", heading: "A Class Project", size: 100, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at the steps."], ["🗣️", "Tell the project in order."]] },

      // ---- Part D: speaking and writing ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About School", turns: [{ who: "teacher", text: "Tell me about your school day and your favorite subject." }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say five or six sentences."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About Clubs", turns: [{ who: "teacher", text: "Tell me about your favorite club and a class project." }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say five or six sentences."]] },
      { type: "message", part: "D", stage: "Writing", heading: "My School Life", lines: ["Write about school: subjects, an opinion, your school day in order, and a club."], instruction: [["⌨️", "Type five or six sentences in the chat."]] },
      { type: "score", stage: "My Unit 1 Score!", heading: "My Unit 1 Score!", rows: [["Words", "/ 4"], ["Opinions", "/ 4"], ["Sequencing", "/ 4"], ["Speaking", "/ 5"], ["Writing", "/ 3"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 1 Complete!", title: "Unit 1 Complete!", see: "On to Unit 2!", recap: "You can talk about your subjects, your clubs, your school day and a class project." },
    ],
  },

  // ---------- Unit 2: Yesterday & Today ----------
  "2-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Lesson 1", title: "Irregular Surprises!", subtitle: "Use went, ate, and saw to talk about recent events." },
      { type: "message", stage: "Getting Ready", heading: "What Did You Do Yesterday?", subheading: "Let's find out!", lines: ["What did you do *yesterday*?"] },
      { type: "table", stage: "Taking Off", heading: "Past or Present?", subheading: "Three verbs that change completely in the past", rows: [["go", "went"], ["eat", "ate"], ["see", "saw"]] },
      { type: "message", stage: "What Happened?", heading: "What Happened?", subheading: "🏫 School · 🍕 Pizza · 🐶 Dog", lines: ["I *went* to school.", "I *ate* pizza.", "I *saw* a dog."] },
      { type: "dialogue", stage: "Flight Log", heading: "What Happened Yesterday?", subheading: "Build a funny yesterday story together", turns: [{ who: "teacher", text: "Yesterday, Tom went to the park." }, { who: "teacher", text: "What happened next?" }, { who: "student", text: "Then he saw a dog!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Recount", subheading: "What did you do yesterday? (3 sentences)", line: "Yesterday, I ___. I ___. I ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Yesterday", caption: "Yesterday, I went to school. I ate pizza. I saw my friend." },
    ],
  },
  "2-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Lesson 2", title: "More Irregulars!", subtitle: "Use had, did, and made to talk about past activities." },
      { type: "table", stage: "Getting Ready", heading: "Review", subheading: "go/eat/see in the past", rows: [["go", "went"], ["eat", "ate"], ["see", "saw"]] },
      { type: "table", stage: "Taking Off", heading: "Meet the New Irregulars", subheading: "Three more verbs that change in the past", rows: [["have", "had"], ["do", "did"], ["make", "made"]] },
      { type: "message", stage: "What Did You Do?", heading: "What Did You Do?", subheading: "📚 Homework · 🍳 Breakfast · 🎨 Picture", lines: ["I *did* my homework.", "I *had* breakfast.", "I *made* a picture."] },
      { type: "dialogue", stage: "Flight Log", heading: "Yesterday Reporter", subheading: "Report what someone did: morning, afternoon, evening", turns: [{ who: "teacher", text: "In the morning, he had breakfast." }, { who: "student", text: "In the afternoon, he made a cake." }, { who: "student", text: "In the evening, he did his homework." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Speed Round", subheading: "have → had, do → did, make → made — now reverse it!", line: "had → ___, did → ___, made → ___" },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "More Irregulars", caption: "I had breakfast. I did my homework. I made a picture." },
    ],
  },
  "2-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Lesson 3", title: "Yesterday's Story!", subtitle: "Connect irregular verbs to tell a short story about yesterday." },
      { type: "table", stage: "Getting Ready", heading: "Irregular Verb Review", subheading: "Rapid-fire recall", rows: [["go", "went"], ["eat", "ate"], ["see", "saw"], ["have", "had"], ["do", "did"], ["make", "made"]] },
      { type: "log", stage: "Taking Off", heading: "Put the Story Together", subheading: "Wake up → Eat breakfast → Go to school → See a friend", rows: ["First, I ___ breakfast.", "Then, I ___ to school.", "After that, I ___ my friend."] },
      { type: "dialogue", stage: "Flight Log", heading: "Story Telephone", subheading: "Add one event at a time, building a story together", turns: [{ who: "teacher", text: "Yesterday, Mia went to the park." }, { who: "student", text: "Yesterday, Mia went to the park. Then she saw a dog." }, { who: "teacher", text: "...and then she made a new friend!" }] },
      { type: "message", stage: "My Yesterday", heading: "My Yesterday", subheading: "Tell a short story (4-5 sentences, 3+ irregular verbs)", lines: ["What was the most interesting thing you did *yesterday*?"] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Question", subheading: "One last thought", line: "The most interesting thing I did yesterday was ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Yesterday's Story", caption: "First, I had breakfast. Then, I went to school. After that, I saw my friend." },
    ],
  },
  "2-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Lesson 4", title: "Let's Review!", subtitle: "Review all irregular verbs and connect events into a clear recount." },
      { type: "table", stage: "Memory Challenge", heading: "Give the Past Form", subheading: "go, eat, see, have, do, make", rows: [["go", "went"], ["eat", "ate"], ["see", "saw"], ["have", "had"], ["do", "did"], ["make", "made"]] },
      { type: "dialogue", stage: "Fix the Story", heading: "Fix the Story", subheading: "Catch the mistake and correct it", turns: [{ who: "teacher", text: "Yesterday, I go to school." }, { who: "student", text: "No! You went to school." }, { who: "teacher", text: "I eat pizza." }, { who: "student", text: "You ate pizza!" }] },
      { type: "log", stage: "Connect the Events", heading: "Connect the Events", subheading: "I went to the park. I saw my friend. I ate ice cream.", rows: ["First, I ___", "Then, I ___", "After that, ___"] },
      { type: "dialogue", stage: "Flight Log", heading: "Past Tense Detective", subheading: "Find and correct the mistakes, then retell the story", turns: [{ who: "teacher", text: "Yesterday, I go to school. I eat lunch." }, { who: "student", text: "I went to school. I ate lunch. I saw my friend." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Review", subheading: "Tell me three things you did yesterday", line: "I ___. I ___. I ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "Yesterday, I went to school. I ate lunch. I saw my friend." },
    ],
  },
  "2-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Lesson 5", title: "Show What You Know!", subtitle: "Free practice — show what you can really do with the past tense." },
      { type: "message", stage: "Getting Ready", heading: "Conversation Starter", subheading: "Tell me about yesterday", lines: ["Where did you go? What did you eat? Who did you see?"] },
      { type: "dialogue", stage: "Flight Log", heading: "One-Minute Yesterday", subheading: "Talk for one minute about yesterday", turns: [{ who: "teacher", text: "Where did you go?" }, { who: "student", text: "I went to my grandma's house." }, { who: "teacher", text: "What did you eat?" }, { who: "student", text: "I ate her special soup!" }] },
      { type: "message", stage: "Real-Life Recount", heading: "Real-Life Recount", subheading: "Tell me about something fun you did recently", lines: ["What happened next?"] },
      { type: "dialogue", stage: "Teacher & Student Story", heading: "Teacher & Student Story", subheading: "Take turns adding one event", turns: [{ who: "teacher", text: "Yesterday, I went to the park." }, { who: "student", text: "Then, I saw a dog." }, { who: "teacher", text: "After that, I ate ice cream." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Mini Writing", subheading: "Write 4-6 sentences about a recent event", line: "Yesterday, I ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "Yesterday, I went to the park. I saw a dog. I ate ice cream." },
    ],
  },
  "2-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Test", title: "Unit 2 Test", subtitle: "Summative check: can you actually recount a recent event?" },
      { type: "table", stage: "Part 1: Verb Check", heading: "Complete the Past Form", subheading: "go, eat, see, have, do, make", rows: [["go", "____"], ["eat", "____"], ["see", "____"], ["have", "____"], ["do", "____"], ["make", "____"]] },
      { type: "message", stage: "Part 2: Sentences", heading: "Make Sentences", subheading: "Use went, ate, saw, had, did, made", lines: ["Make a sentence with each irregular verb."] },
      { type: "log", stage: "Part 3: Sequencing", heading: "Put It in Order", subheading: "Tell the story using all four connectors", rows: ["First, ___", "Then, ___", "After that, ___", "Finally, ___"] },
      { type: "dialogue", stage: "Part 4: Speaking ⭐", heading: "Tell Me About Yesterday", subheading: "Target: 5-6 connected sentences", turns: [{ who: "teacher", text: "Tell me about something you did yesterday." }] },
      { type: "postcard", stage: "Part 5: Writing", heading: "Short Writing", subheading: "5-6 sentences", line: "What did you do yesterday? ___" },
      { type: "landing", stage: "Landing", heading: "Unit 2 Complete!", cardTitle: "Unit 2 Test", caption: "Great work recounting the past!" },
    ],
  },

  // ---------- Unit 3: Weather & Seasons ----------
  "3-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Lesson 1", title: "What's the Weather?", subtitle: "Use weather words and \"There is...\" to describe weather scenes." },
      { type: "chips", stage: "Getting Ready", heading: "Weather Words", subheading: "What's the weather like today?", items: ["☀️ sunny", "🌧️ rainy", "☁️ cloudy", "💨 windy", "⛈️ stormy", "❄️ snowy", "🌫️ foggy", "🌈 rainbow"] },
      { type: "message", stage: "Taking Off", heading: "Weather Detective", subheading: "What can you see?", lines: ["It is *sunny*.", "There is a *rainbow*.", "There is a *cloud*."] },
      { type: "message", stage: "What's in the Picture?", heading: "What's in the Picture?", subheading: "A busy weather scene", lines: ["There is a *sun*.", "There is a big *cloud*.", "Is it sunny or rainy?"] },
      { type: "message", stage: "Flight Log", heading: "Mystery Weather Picture", subheading: "Predict before the picture is fully revealed", lines: ["There is a *cloud*. There is a *rainbow*. It is *rainy*."] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Describe today's weather (3-4 sentences)", line: "Today it is ___. There is ___. There are ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "What's the Weather?", caption: "It is rainy. There is a rainbow. There are clouds." },
    ],
  },
  "3-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Lesson 2", title: "Four Seasons!", subtitle: "Name the four seasons and use \"There are...\" to describe them." },
      { type: "chips", stage: "Getting Ready", heading: "Meet the Four Seasons", subheading: "🌸 Spring · ☀️ Summer · 🍂 Autumn · ❄️ Winter", items: ["🌸 Spring", "☀️ Summer", "🍂 Autumn", "❄️ Winter"] },
      { type: "message", stage: "Taking Off", heading: "Season Detective", subheading: "Spot the clues", lines: ["There are *flowers*. → Spring", "There are *leaves*. → Autumn", "There is *snow*. → Winter"] },
      { type: "dialogue", stage: "Flight Log", heading: "Season Interview", subheading: "Ask and answer about the four seasons", turns: [{ who: "teacher", text: "What season has flowers?" }, { who: "student", text: "There are flowers in spring!" }, { who: "teacher", text: "What season has snow?" }, { who: "student", text: "There are snowflakes in winter." }] },
      { type: "message", stage: "My Favorite Season", heading: "My Favorite Season", subheading: "What's your favorite season? Why?", lines: ["My favorite season is *summer* because it is sunny."] },
      { type: "postcard", stage: "Postcard Message", heading: "My Favorite Season", subheading: "Complete the sentence", line: "My favorite season is ___ because it is ___. There are ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Four Seasons", caption: "My favorite season is summer because it is sunny. There are many sunny days." },
    ],
  },
  "3-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Lesson 3", title: "Weather Talk!", subtitle: "Describe today's weather using vocabulary and there is / there are." },
      { type: "message", stage: "Getting Ready", heading: "Quick Review", subheading: "Flash-round", lines: ["It's *cloudy*.", "It's *windy*.", "There is a *rainbow*.", "There are *clouds*."] },
      { type: "message", stage: "Taking Off", heading: "Weather Around the World", subheading: "What's the weather like in City A?", lines: ["It's *rainy*.", "There are *clouds* in City B."] },
      { type: "log", stage: "Build a Weather Report", heading: "Build a Weather Report", subheading: "Fill in your own report", rows: ["Today in ___:", "Weather: ___", "There is: ___", "There are: ___"] },
      { type: "message", stage: "Flight Log", heading: "Weather Forecast", subheading: "City A: sunny · City B: rainy · City C: windy", lines: ["In City A, it is *sunny*.", "There are *clouds* in City B.", "What's the weather like tomorrow?"] },
      { type: "dialogue", stage: "Postcard Message", heading: "Weather Conversation", subheading: "Do you like this weather?", turns: [{ who: "teacher", text: "What's the weather like today?" }, { who: "student", text: "It's sunny!" }, { who: "teacher", text: "Do you like this weather?" }, { who: "student", text: "Yes, I do because I like sunny days." }] },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Weather Talk!", caption: "In City A, it is sunny. There are clouds in City B." },
    ],
  },
  "3-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Lesson 4", title: "Let's Review!", subtitle: "Review weather, seasons, and there is / there are." },
      { type: "chips", stage: "Weather Speed Round", heading: "Weather Speed Round", subheading: "Say it fast!", items: ["It's sunny!", "It's windy!", "It's snowy!"] },
      { type: "message", stage: "Season Challenge", heading: "Season Challenge", subheading: "Give the season from the clue", lines: ["There are *flowers*. → Spring!", "There are colorful *leaves*. → Autumn!", "There is *snow*. → Winter!"] },
      { type: "dialogue", stage: "Fix My Weather", heading: "Fix My Weather", subheading: "Catch the mistake", turns: [{ who: "teacher", text: "There are a rainbow." }, { who: "student", text: "No! There is a rainbow." }, { who: "teacher", text: "There is clouds." }, { who: "student", text: "There are clouds!" }] },
      { type: "message", stage: "Flight Log", heading: "What's Wrong With This Weather?", subheading: "Spot the strange weather and correct it", lines: ["\"It is winter. There are flowers everywhere and no snow.\" Is this correct?", "No — there are usually *snowflakes* in winter."] },
      { type: "postcard", stage: "Postcard Message", heading: "Mini Weather Report", subheading: "Use weather, a season, there is, and there are", line: "Today it is ___. It is ___ season. There is ___. There are ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "It is winter. There is snow. There are snowflakes everywhere." },
    ],
  },
  "3-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Lesson 5", title: "Show What You Know!", subtitle: "Free practice — talk about weather and seasons on your own." },
      { type: "message", stage: "Conversation", heading: "Conversation", subheading: "What's the weather like today?", lines: ["Do you like it? What's your favorite weather? What's your favorite season?"] },
      { type: "message", stage: "Flight Log", heading: "Plan a Weather Trip", subheading: "You can travel to one place — where do you want to go?", lines: ["I want to go to the beach because it is *sunny*.", "There are clouds, but it is *warm*."] },
      { type: "message", stage: "Plan a Holiday", heading: "Plan a Holiday", subheading: "Where, what season, what's the weather, what can you see/do?", lines: ["I want to go to Japan in winter. It is cold and snowy. There are mountains and there is snow."] },
      { type: "message", stage: "Weather Reporter Challenge", heading: "Weather Reporter Challenge", subheading: "Give a 30-45 second weather report — no sentence frame!", lines: ["What's the weather like today, and what will it be like tomorrow?"] },
      { type: "postcard", stage: "Postcard Message", heading: "Short Writing", subheading: "\"My Favorite Season\" (4-6 sentences)", line: "My favorite season is ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "My favorite season is summer. It is hot and sunny. There are many sunny days." },
    ],
  },
  "3-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Test", title: "Unit 3 Test", subtitle: "Can you describe weather and seasons without heavy support?" },
      { type: "chips", stage: "Part 1: Weather Vocabulary", heading: "Identify the Weather", subheading: "Name each picture", items: ["sunny", "rainy", "cloudy", "windy", "stormy", "snowy", "foggy"] },
      { type: "chips", stage: "Part 2: Seasons", heading: "Name the Seasons", subheading: "Give one thing associated with each", items: ["🌸 Spring", "☀️ Summer", "🍂 Autumn", "❄️ Winter"] },
      { type: "log", stage: "Part 3: There Is / Are", heading: "Complete the Sentences", subheading: "Fill in is or are", rows: ["There ___ a rainbow.", "There ___ clouds.", "There ___ snow.", "There ___ flowers."] },
      { type: "message", stage: "Part 4: Picture Description ⭐", heading: "Describe the Picture", subheading: "Weather, season, and things in the picture", lines: ["What can you see?"] },
      { type: "postcard", stage: "Part 5-6: Speaking & Writing", heading: "Your Favorite Season", subheading: "5-6 sentences with a reason", line: "My favorite season is ___. It is ___. I like it because ___." },
      { type: "landing", stage: "Landing", heading: "Unit 3 Complete!", cardTitle: "Unit 3 Test", caption: "My favorite season is summer. There are many sunny days. I like going to the beach." },
    ],
  },

  // ---------- Unit 4: Around Town ----------
  "4-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Lesson 1", title: "Places in Town! 🏙️", subtitle: "Name common places in town and say where one place is using next to." },
      { type: "chips", stage: "Getting Ready", heading: "Places in Town", subheading: "What places do you know?", items: ["store", "park", "school", "library", "hospital", "restaurant", "supermarket", "bank", "bus stop", "playground"] },
      { type: "message", stage: "Taking Off", heading: "Where Is It?", subheading: "🏫 School | 🏪 Store", lines: ["The store is *next to* the school.", "What is next to the park?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Town Tour Guide", subheading: "Be the tour guide!", turns: [{ who: "teacher", text: "Where can I go to read?" }, { who: "student", text: "There is a library. The library is next to the park." }, { who: "teacher", text: "Where can I go to buy food?" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Describe your town (3-4 sentences)", line: "There is a ___. The ___ is next to the ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Places in Town", caption: "There is a school. The park is next to the school. The store is next to the park." },
    ],
  },
  "4-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Lesson 2", title: "Where Is It? 📍", subtitle: "Describe where places are using behind and between." },
      { type: "message", stage: "Getting Ready", heading: "Warm-Up Review", subheading: "Use yesterday's town map", lines: ["Where is the school? What is next to the park?"] },
      { type: "message", stage: "Taking Off", heading: "New Prepositions", subheading: "behind · between", lines: ["The park is *behind* the school.", "The bank is *between* the store and the library."] },
      { type: "message", stage: "Map Detective", heading: "Map Detective", subheading: "Answer in complete sentences", lines: ["What is behind the school?", "What is between the bank and the park?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Hidden Place", subheading: "Ask yes/no questions to find the secret place", turns: [{ who: "student", text: "Is it next to the school?" }, { who: "teacher", text: "No." }, { who: "student", text: "Is it between the store and the library?" }, { who: "teacher", text: "Yes!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Describe 3 locations without being prompted", line: "The ___ is next to the ___. The ___ is behind the ___. The ___ is between the ___ and the ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Where Is It?", caption: "The library is next to the school. The bank is between the store and the hospital." },
    ],
  },
  "4-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Lesson 3", title: "Giving Directions! 🗺️", subtitle: "Give and follow simple directions to a place." },
      { type: "chips", stage: "Getting Ready", heading: "Direction Words", subheading: "New words for today", items: ["go", "turn", "left", "right", "straight", "stop", "go past"] },
      { type: "message", stage: "Taking Off", heading: "Learn Directions", subheading: "⬆️ Go straight · ⬅️ Turn left · ➡️ Turn right · 🛑 Stop", lines: ["Go straight!", "Turn left!"] },
      { type: "message", stage: "Build a Route", heading: "Build a Route", subheading: "Break the direction into small steps", lines: ["Go straight. Turn right. The park is on your *left*."] },
      { type: "dialogue", stage: "Flight Log", heading: "Lost Tourist", subheading: "Help the lost tourist find the bank!", turns: [{ who: "teacher", text: "I'm at the school. I want to go to the bank. Help me!" }, { who: "student", text: "Go straight. Turn left. Go past the park. The bank is on your right." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Give directions from one place to another (2-3 steps)", line: "Go ___. Turn ___. The ___ is on your ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Giving Directions!", caption: "Go straight. Turn left. Go past the park. The bank is on your right." },
    ],
  },
  "4-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Lesson 4", title: "Let's Review! 🔄", subtitle: "Combine places, prepositions, and directions to communicate around a town." },
      { type: "chips", stage: "Fast Retrieval", heading: "Fast Retrieval", subheading: "Name the places, then answer: Where is the bank?", items: ["store", "park", "school", "library", "hospital", "restaurant", "bank"] },
      { type: "dialogue", stage: "Fix the Map", heading: "Fix the Map", subheading: "The picture shows the store is BEHIND the school", turns: [{ who: "teacher", text: "The store is next to the school." }, { who: "student", text: "No! The store is behind the school." }] },
      { type: "message", stage: "Direction Challenge", heading: "Direction Challenge", subheading: "Follow the route, then switch roles", lines: ["Go straight. Turn left. Stop."] },
      { type: "dialogue", stage: "Flight Log", heading: "Wrong Directions", subheading: "Catch the mistake — the map shows the library is on the LEFT", turns: [{ who: "teacher", text: "Go straight. Turn left. The library is on your right." }, { who: "student", text: "No, it's on your left! Go straight, turn left, and the library is on your left." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "Tell me about your town", line: "There is a ___. The ___ is next to the ___. To get to the ___, go ___ and turn ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "There is a school. The park is next to the school. Go straight and turn right to reach the store." },
    ],
  },
  "4-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Lesson 5", title: "Show What You Know! ⭐", subtitle: "Use the unit language independently — no reveal!" },
      { type: "message", stage: "Mystery Town", heading: "Mystery Town", subheading: "A brand-new town map", lines: ["Tell me about this town."] },
      { type: "dialogue", stage: "Flight Log", heading: "My Town Tour", subheading: "Give a complete virtual tour", turns: [{ who: "teacher", text: "Where is the hospital?" }, { who: "student", text: "The hospital is next to the bank." }, { who: "teacher", text: "How do I get to the supermarket?" }, { who: "student", text: "Go straight, then turn right." }] },
      { type: "message", stage: "Change the Map", heading: "Change the Map", subheading: "Adapt to a changing situation", lines: ["Move the park. Where is it now? What is next to it?"] },
      { type: "message", stage: "My Town", heading: "My Town", subheading: "Create or imagine your own town", lines: ["What places are in your town? What is your favorite place?"] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "Can you help me find it?", line: "My favorite place is the ___. It is next to the ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "There is a park in my town. My favorite place is the library, next to the park." },
    ],
  },
  "4-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Test", title: "Unit 4 Test", subtitle: "Around Town — describe places and navigate independently." },
      { type: "chips", stage: "Part 1: Places", heading: "Name the Places", subheading: "6-8 pictures", items: ["store", "park", "school", "library", "hospital", "bank"] },
      { type: "message", stage: "Part 2: Where Is It?", heading: "Where Is It?", subheading: "Use next to, behind, between", lines: ["What is next to the school? What is behind the library?"] },
      { type: "message", stage: "Part 3-4: Directions ⭐", heading: "Give Directions", subheading: "I'm at the school. How can I get to the supermarket?", lines: ["Go straight. Turn right. Go straight again. The supermarket is on your *left*."] },
      { type: "message", stage: "Part 5: Speaking", heading: "Tell Me About Your Town", subheading: "4-6 connected sentences", lines: ["There is a school in my town. The park is next to the school."] },
      { type: "postcard", stage: "Part 6: Writing", heading: "Short Writing", subheading: "3-5 sentences about the town/map", line: "There is a ___ next to the ___. The ___ is between the ___ and the ___." },
      { type: "landing", stage: "Landing", heading: "Unit 4 Complete!", cardTitle: "Unit 4 Test", caption: "There is a park next to the school. The bank is between the store and the library." },
    ],
  },

  // ---------- Unit 5: Let's Go Shopping ----------
  "5-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Lesson 1", title: "At the Store! 🛒", subtitle: "Identify shopping items and ask \"How much is it?\" / \"How much are they?\"" },
      { type: "chips", stage: "Getting Ready", heading: "Shopping Words", subheading: "Today we're going shopping!", items: ["shirt", "shoes", "book", "pencil", "apple", "water", "toy", "bag"] },
      { type: "message", stage: "Taking Off", heading: "How Much?", subheading: "👕 $5 · 👟 $10 (pair)", lines: ["How much is it? It's *five dollars*.", "How much are they? They're *ten dollars*."] },
      { type: "dialogue", stage: "Flight Log", heading: "Customer Interview", subheading: "Teacher: store employee. You: customer.", turns: [{ who: "teacher", text: "Can I help you? What do you want?" }, { who: "student", text: "How much is it?" }, { who: "student", text: "How much are they?" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Choose 3 things you want to buy", line: "I want a ___. It's ___ dollars." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "At the Store!", caption: "How much is it? It's five dollars. How much are they? They're ten dollars." },
    ],
  },
  "5-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Lesson 2", title: "Counting Money! 💰", subtitle: "Understand and say common prices and quantities." },
      { type: "message", stage: "Getting Ready", heading: "Warm-Up", subheading: "Quick price review", lines: ["How much is the book? How much are the shoes?"] },
      { type: "message", stage: "Taking Off", heading: "Prices & Quantities", subheading: "🍎 → one apple · 🍎🍎 → two apples", lines: ["One apple is *10 pesos*.", "Two apples are *20 pesos*."] },
      { type: "dialogue", stage: "How Many?", heading: "How Many?", subheading: "Practice with different products", turns: [{ who: "teacher", text: "How many do you want?" }, { who: "student", text: "I want two." }] },
      { type: "dialogue", stage: "Flight Log", heading: "Shopping Budget", subheading: "You have 20 pesos! What will you buy?", turns: [{ who: "teacher", text: "You have 20 pesos." }, { who: "student", text: "I want two apples. They are five pesos. I have twenty pesos." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Buy three things — say what and how many", line: "I want ___ ___(s). They are ___ pesos." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Counting Money!", caption: "I want two apples. They are twenty pesos. I have thirty pesos." },
    ],
  },
  "5-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Lesson 3", title: "Let's Buy Something! 🛍️", subtitle: "Take part in a simple shopping conversation from beginning to end." },
      { type: "chips", stage: "Getting Ready", heading: "Customer Phrases", subheading: "What you say when shopping", items: ["Hello.", "I'd like a ___, please.", "How much is it?", "I'll take it, please.", "Thank you."] },
      { type: "dialogue", stage: "Taking Off", heading: "Build the Conversation", subheading: "Customer and Cashier", turns: [{ who: "student", text: "Hello. I'd like a book, please." }, { who: "teacher", text: "Sure. It's 50 pesos." }, { who: "student", text: "I'll take it, please." }] },
      { type: "dialogue", stage: "Flight Log", heading: "The Busy Cashier", subheading: "Complete several purchases — even when there's a problem!", turns: [{ who: "teacher", text: "Sorry, we're out of apples." }, { who: "student", text: "Okay. I'd like a banana, please." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Complete a shopping conversation on your own", line: "Hello. I'd like a ___, please. How much is it? I'll take it, please." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Buy Something!", caption: "Hello. I'd like a book, please. It's 50 pesos. I'll take it, please. Thank you!" },
    ],
  },
  "5-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Lesson 4", title: "Let's Review! 🔄", subtitle: "Use shopping vocabulary, prices, quantities, and expressions together." },
      { type: "message", stage: "Shopping Speed Round", heading: "Shopping Speed Round", subheading: "Say the price fast!", lines: ["It's *20 pesos*.", "They're *50 pesos*."] },
      { type: "message", stage: "Quantity Challenge", heading: "Quantity Challenge", subheading: "🍎🍎🍎", lines: ["How many apples? How much are three apples?"] },
      { type: "dialogue", stage: "Fix the Shopping Mistake", heading: "Fix the Shopping Mistake", subheading: "Catch and correct the error", turns: [{ who: "teacher", text: "Two apples? They're ten dollars." }, { who: "student", text: "No, they're five dollars!" }] },
      { type: "dialogue", stage: "Flight Log", heading: "Shopping Mistakes", subheading: "Find and correct more mistakes", turns: [{ who: "teacher", text: "You want three books?" }, { who: "student", text: "No, I want two books." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "What do you usually buy at a store?", line: "I usually buy ___ because ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "I usually buy books because I like reading. They're around 50 pesos." },
    ],
  },
  "5-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Lesson 5", title: "Show What You Know! ⭐", subtitle: "Use shopping language independently — no reveal!" },
      { type: "message", stage: "Mystery Store", heading: "Mystery Store", subheading: "New products, new prices", lines: ["You are shopping. What do you want?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Shopping Trip", subheading: "You need food for a picnic. You have 30 pesos.", turns: [{ who: "teacher", text: "Welcome! What can I get you?" }, { who: "student", text: "I'd like two apples and a water, please." }] },
      { type: "dialogue", stage: "The Price Changed!", heading: "The Price Changed!", subheading: "Respond spontaneously", turns: [{ who: "teacher", text: "Oh! The apples are now 80 pesos." }, { who: "student", text: "Hmm, do you have anything cheaper?" }] },
      { type: "message", stage: "Switch Roles", heading: "Switch Roles", subheading: "Now you're the cashier!", lines: ["Check the picture and respond appropriately when the teacher shops."] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "What did you buy? How much did you spend?", line: "I bought ___ and ___. I spent ___ pesos." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "I bought two apples and a water. I spent thirty pesos. My favorite thing was the apples!" },
    ],
  },
  "5-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Test", title: "Unit 5 Test", subtitle: "Let's Go Shopping — handle a shopping situation independently." },
      { type: "chips", stage: "Part 1: Vocabulary", heading: "Name the Products", subheading: "8-10 products", items: ["shirt", "shoes", "book", "apple", "water", "toy"] },
      { type: "message", stage: "Part 2-3: Prices & Quantities", heading: "Prices & Quantities", subheading: "How much is/are it/they? How many?", lines: ["How much is the shirt? How many apples are there?"] },
      { type: "message", stage: "Part 4: Questions", heading: "Ask the Questions", subheading: "You ask this time!", lines: ["How much is the book? How much are the pencils?"] },
      { type: "dialogue", stage: "Part 5: Roleplay ⭐", heading: "Shopping Roleplay", subheading: "Choose, ask, decide, and buy politely", turns: [{ who: "student", text: "Hello. I'd like two apples, please. How much are they?" }, { who: "teacher", text: "They're 40 pesos." }, { who: "student", text: "Okay. I'll take them, please." }] },
      { type: "postcard", stage: "Part 6: Writing", heading: "Short Writing", subheading: "3-5 sentences", line: "I want to buy ___. They are ___ pesos. I like shopping for ___." },
      { type: "landing", stage: "Landing", heading: "Unit 5 Complete!", cardTitle: "Unit 5 Test", caption: "I want to buy two apples. They are 40 pesos. I also want a book for 50 pesos." },
    ],
  },

  // ---------- Unit 6: Jobs People Do ----------
  "6-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Lesson 1", title: "What's Your Job? 👨‍💼", subtitle: "Identify jobs and describe people with He is a... / She is a..." },
      { type: "chips", stage: "Getting Ready", heading: "Jobs", subheading: "Today, let's talk about people and their jobs!", items: ["teacher", "doctor", "nurse", "police officer", "firefighter", "chef", "farmer", "driver", "dentist"] },
      { type: "message", stage: "Taking Off", heading: "He or She?", subheading: "👨‍🍳 → chef · 👩‍⚕️ → doctor", lines: ["He is a *chef*.", "She is a *doctor*."] },
      { type: "dialogue", stage: "Flight Log", heading: "Job Interview", subheading: "Guess the mystery worker!", turns: [{ who: "student", text: "What is your job?" }, { who: "teacher", text: "I help sick people." }, { who: "student", text: "Are you a doctor?" }, { who: "teacher", text: "Yes!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Describe 4 people's jobs", line: "He is a ___. She is a ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "What's Your Job?", caption: "He is a firefighter. She is a nurse." },
    ],
  },
  "6-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Lesson 2", title: "More Jobs! 👩‍🔧", subtitle: "Talk about more jobs and describe simple job duties." },
      { type: "chips", stage: "Getting Ready", heading: "More Jobs", subheading: "New workers to meet", items: ["engineer", "pilot", "mechanic", "artist", "baker", "veterinarian", "photographer", "scientist"] },
      { type: "message", stage: "Taking Off", heading: "Jobs + Duties", subheading: "👨‍🔧 Mechanic → fixes cars · 👩‍🍳 Baker → makes bread", lines: ["She is a *baker*. She *makes bread*.", "He is a *mechanic*. He *fixes cars*."] },
      { type: "dialogue", stage: "Who Does What?", heading: "Who Does What?", subheading: "Connect the job to the action", turns: [{ who: "teacher", text: "She makes bread." }, { who: "student", text: "She is a baker!" }] },
      { type: "dialogue", stage: "Flight Log", heading: "Who Am I?", subheading: "Guess the job from the clues", turns: [{ who: "teacher", text: "I work with animals. I help sick animals." }, { who: "student", text: "You are a veterinarian!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Choose 3 jobs and describe what each person does", line: "She is a ___. She ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "More Jobs!", caption: "He is a pilot. He flies a plane. She is a veterinarian. She cares for animals." },
    ],
  },
  "6-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Lesson 3", title: "Community Helpers! 🚒", subtitle: "Talk about how different workers help people in the community." },
      { type: "message", stage: "Getting Ready", heading: "How Do They Help?", subheading: "Who helps sick people? Who keeps people safe?", lines: ["A firefighter *helps people*.", "A doctor *treats sick people*."] },
      { type: "message", stage: "Taking Off", heading: "Community Problems", subheading: "Who can help?", lines: ["I am sick. Who can help me?", "There is a fire. Who can help?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Emergency Call", subheading: "Identify the right helper and explain why", turns: [{ who: "teacher", text: "Someone is sick!" }, { who: "student", text: "A doctor can help because she treats sick people." }] },
      { type: "message", stage: "Postcard Message", heading: "Exit Talk", subheading: "Which community helper is important to you? Why?", lines: ["I think firefighters are important because *they help people*."] },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Community Helpers!", caption: "A doctor treats sick people. A police officer keeps people safe." },
    ],
  },
  "6-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Lesson 4", title: "Let's Review! 🔄", subtitle: "Combine jobs, job duties, and community-helper language." },
      { type: "chips", stage: "Job Speed Round", heading: "Job Speed Round", subheading: "Say it fast!", items: ["driver", "nurse", "farmer", "chef", "pilot", "baker"] },
      { type: "dialogue", stage: "What Do They Do?", heading: "What Do They Do?", subheading: "Job → duty", turns: [{ who: "teacher", text: "She is a chef." }, { who: "student", text: "She cooks food." }] },
      { type: "dialogue", stage: "Fix the Mistake", heading: "Fix the Mistake", subheading: "Catch the error", turns: [{ who: "teacher", text: "A doctor fixes cars." }, { who: "student", text: "No! A mechanic fixes cars." }] },
      { type: "dialogue", stage: "Flight Log", heading: "Job Mistake Challenge", subheading: "Correct the mistake, then say who CAN help", turns: [{ who: "teacher", text: "A firefighter delivers letters." }, { who: "student", text: "No. A mail carrier delivers letters." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "Talk about three community helpers", line: "A ___ helps people by ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "A firefighter helps people. A teacher helps students learn." },
    ],
  },
  "6-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Lesson 5", title: "Show What You Know! ⭐", subtitle: "Communicate about jobs and community helpers independently." },
      { type: "message", stage: "Mystery Workers", heading: "Mystery Workers", subheading: "Describe them yourself", lines: ["Who is this? What does this person do?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Community Help Desk", subheading: "You work at the help desk — who can solve each problem?", turns: [{ who: "teacher", text: "My dog is sick." }, { who: "student", text: "A veterinarian can help. They care for animals." }, { who: "teacher", text: "There's a fire!" }] },
      { type: "dialogue", stage: "Guess My Job", heading: "Guess My Job", subheading: "Give clues without saying the job", turns: [{ who: "teacher", text: "I work in a hospital. I help sick people." }, { who: "student", text: "You're a doctor!" }] },
      { type: "message", stage: "My Dream Job", heading: "My Dream Job", subheading: "What job would you like to have? Why?", lines: ["I want to be a *veterinarian* because I like animals."] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "Which job helps people the most?", line: "I think a ___ helps people the most because ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "I want to be a veterinarian because I like animals and want to help them." },
    ],
  },
  "6-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Test", title: "Unit 6 Test", subtitle: "Jobs People Do — identify, describe, and explain independently." },
      { type: "chips", stage: "Part 1: Jobs", heading: "Name the Jobs", subheading: "8-10 pictures", items: ["teacher", "doctor", "firefighter", "chef", "mechanic", "pilot"] },
      { type: "message", stage: "Part 2: He or She?", heading: "He or She?", subheading: "Complete sentences", lines: ["He is a *firefighter*.", "She is a *doctor*."] },
      { type: "message", stage: "Part 3: Duties", heading: "What Does a Mechanic Do?", subheading: "Job → duty", lines: ["A mechanic *fixes cars*."] },
      { type: "dialogue", stage: "Part 4: Who Can Help? ⭐", heading: "Who Can Help?", subheading: "Identify the helper and explain why", turns: [{ who: "teacher", text: "My dog is sick. Who can help?" }, { who: "student", text: "A veterinarian can help. She cares for sick animals." }] },
      { type: "postcard", stage: "Part 5-6: Speaking & Writing", heading: "Community Helpers", subheading: "3-4 helpers, with a reason", line: "She is a ___. She ___. I think ___s are important because ___." },
      { type: "landing", stage: "Landing", heading: "Unit 6 Complete!", cardTitle: "Unit 6 Test", caption: "She is a veterinarian. She takes care of animals. I think veterinarians are important." },
    ],
  },
  "7-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 7 · Lesson 1", title: "Once Upon a Time!", subtitle: "Identify story elements and begin a story using First…" },
      { type: "chips", stage: "Getting Ready", heading: "Story Words", subheading: "New words for telling a story", items: ["story", "character", "beginning", "problem", "forest", "house", "friend", "lost", "find", "walk"] },
      { type: "message", stage: "Taking Off", heading: "First…", subheading: "Show 2-3 story pictures", lines: ["*First*, the boy walks to the forest.", "*First*, the girl sees a dog.", "*First*, they walk to the house."] },
      { type: "message", stage: "Once Upon a Time…", heading: "Once Upon a Time…", subheading: "Every story has a beginning", lines: ["Once upon a time, there was a boy.", "*First*, he went for a walk."] },
      { type: "dialogue", stage: "Flight Log", heading: "Story Picture Reveal", subheading: "Describe each picture as it's revealed", turns: [{ who: "teacher", text: "Here is the first picture. What is happening?" }, { who: "student", text: "First, the boy is at home." }, { who: "teacher", text: "What happens next?" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Start a Story", subheading: "Write the first sentence of a story", line: "Once upon a time, ___. First, ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Once Upon a Time!", caption: "Once upon a time, there was a girl. First, she walked to the forest." },
    ],
  },
  "7-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 7 · Lesson 2", title: "What Happened Next?", subtitle: "Connect events using then and after that." },
      { type: "chips", stage: "Getting Ready", heading: "New Story Words", subheading: "Recycle Lesson 1 + these", items: ["run", "see", "meet", "open", "go", "help", "look", "find"] },
      { type: "message", stage: "Taking Off", heading: "Then… / After That…", subheading: "Two connected pictures", lines: ["*Then*, he sees a dog.", "*After that*, they go home.", "*Then*, she opens the door."] },
      { type: "message", stage: "Put It in Order", heading: "Put It in Order", subheading: "What happens first, then next?", lines: ["First, they walk into the forest.", "*Then*, they find a strange house."] },
      { type: "dialogue", stage: "Flight Log", heading: "Continue My Story", subheading: "Take turns adding the next event", turns: [{ who: "teacher", text: "A girl walks into the forest. Then she sees a strange house." }, { who: "student", text: "After that, she opens the door!" }, { who: "teacher", text: "What happens next?" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Retell three events in order", line: "First, ___. Then, ___. After that, ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "What Happened Next?", caption: "First, she walked into the forest. Then, she saw a house. After that, she opened the door." },
    ],
  },
  "7-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 7 · Lesson 3", title: "The End!", subtitle: "Finish a story using finally and give a clear ending." },
      { type: "chips", stage: "Getting Ready", heading: "Ending Words", subheading: "How stories finish", items: ["finally", "end", "happy", "sad", "home", "safe", "together", "found"] },
      { type: "message", stage: "Taking Off", heading: "The Ending", subheading: "First = beginning · Then/After that = middle · Finally = ending", lines: ["*Finally*, they go home.", "*Finally*, the boy finds his dog.", "*Finally*, they are together."] },
      { type: "message", stage: "Which Is the Ending?", heading: "Which Is the Ending?", subheading: "Pick the picture that comes last", lines: ["*Finally*, the story ends."] },
      { type: "dialogue", stage: "Flight Log", heading: "Three Possible Endings", subheading: "Choose an ending, then invent a different one", turns: [{ who: "teacher", text: "The boy is lost in the forest. How does the story end?" }, { who: "student", text: "Finally, he finds his way home!" }, { who: "teacher", text: "Can you think of a different ending?" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "Retell a 4-picture story: First → Then → Finally", line: "First, ___. Then, ___. Finally, ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "The End!", caption: "First, the dog was lost. Then, a boy found him. Finally, they went home together." },
    ],
  },
  "7-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 7 · Lesson 4", title: "Let's Review!", subtitle: "Retell a complete short story in the correct order." },
      { type: "chips", stage: "Getting Ready", heading: "Story Speed Round", subheading: "Story words + sequencing words", items: ["character", "beginning", "problem", "ending", "forest", "First…", "Then…", "After that…", "Finally…"] },
      { type: "message", stage: "Put the Story Together", heading: "Put the Story Together", subheading: "Mix up 4-5 story pictures and order them", lines: ["*First*, ___. *Then*, ___. *After that*, ___. *Finally*, ___."] },
      { type: "dialogue", stage: "Fix the Story", heading: "Fix the Story", subheading: "The order is wrong — correct it", turns: [{ who: "teacher", text: "Finally, the boy walked to the forest. First, he found his dog." }, { who: "student", text: "No! First, he walked to the forest. Finally, he found his dog." }] },
      { type: "dialogue", stage: "Flight Log", heading: "Mixed-Up Story", subheading: "Listen, then explain the correct sequence", turns: [{ who: "teacher", text: "Finally the girl went home. First she saw a cat. Then she followed it." }, { who: "student", text: "No — first she saw a cat, then she followed it, finally she went home!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "Retell a short story without pictures, if you can", line: "First, ___. Then, ___. Finally, ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "First, she saw a cat. Then, she followed it. Finally, she went home." },
    ],
  },
  "7-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 7 · Lesson 5", title: "Show What You Know! ⭐", subtitle: "Retell and create stories independently." },
      { type: "message", stage: "Mystery Story", heading: "Mystery Story", subheading: "4-5 unfamiliar pictures — what happened?", lines: ["Look at the pictures. What happened in this story?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Story Podcast", subheading: "Tell us a story! Then answer follow-up questions", turns: [{ who: "teacher", text: "Tell us a story!" }, { who: "student", text: "Once upon a time, a girl found a lost puppy. First, she..." }, { who: "teacher", text: "What happened after that?" }] },
      { type: "message", stage: "Change the Story", heading: "Change the Story", subheading: "Change one part", lines: ["The boy doesn't find the dog. *He finds a cat!*"] },
      { type: "message", stage: "My Favorite Story", heading: "My Favorite Story", subheading: "Talk about a favorite story, movie, or fairy tale", lines: ["My favorite story is about *a girl who finds a lost puppy*."] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "What happened in your story? Was it happy or sad?", line: "In my story, ___. It was ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "My favorite story is about a lost puppy who finally finds her way home. It has a happy ending." },
    ],
  },
  "7-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 7 · Test", title: "Unit 7 Test", subtitle: "My Favorite Story — sequence and retell a story independently." },
      { type: "chips", stage: "Part 1: Story Vocabulary", heading: "Name the Story Words", subheading: "6-8 pictures", items: ["character", "forest", "house", "friend", "problem", "help", "find", "ending"] },
      { type: "message", stage: "Part 2-3: Story Order", heading: "Order the Story", subheading: "Put mixed-up pictures in order, then describe them", lines: ["*First*, ___. *Then*, ___. *After that*, ___. *Finally*, ___."] },
      { type: "dialogue", stage: "Part 4: What Happened?", heading: "What Happened?", subheading: "Answer questions about the story", turns: [{ who: "teacher", text: "What happened first? What happened next?" }, { who: "student", text: "First, the dog got lost. Then, a girl found him." }] },
      { type: "dialogue", stage: "Part 5: Story Retelling ⭐", heading: "Retell the Story", subheading: "5-7 connected sentences, in order", turns: [{ who: "teacher", text: "Now retell the whole story for me." }, { who: "student", text: "First, a boy went to the park. Then, he saw a dog. After that, he helped the dog. Finally, the dog went home." }] },
      { type: "postcard", stage: "Part 6: Short Writing", heading: "Write the Story", subheading: "4-5 sentences using sequencing words", line: "First, ___. Then, ___. After that, ___. Finally, ___." },
      { type: "landing", stage: "Landing", heading: "Unit 7 Complete!", cardTitle: "Unit 7 Test", caption: "First, a boy went to the park. Then, he saw a dog. Finally, they went home together." },
    ],
  },
  "8-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 8 · Lesson 1", title: "What Can You Do?", subtitle: "Name sports and say what you can do." },
      { type: "chips", stage: "Getting Ready", heading: "Sports", subheading: "New words for this unit", items: ["basketball", "soccer", "tennis", "swimming", "running", "cycling", "baseball", "volleyball", "skating", "dancing"] },
      { type: "message", stage: "Taking Off", heading: "I Can!", subheading: "I can + activity", lines: ["I can play *basketball*.", "I can *swim*.", "I can *run*."] },
      { type: "dialogue", stage: "Can You Do It?", heading: "Can You Do It?", subheading: "Interview each other", turns: [{ who: "teacher", text: "Can you swim?" }, { who: "student", text: "Yes, I can." }, { who: "teacher", text: "Can you play tennis?" }, { who: "student", text: "No, I can't." }] },
      { type: "dialogue", stage: "Flight Log", heading: "Can You Do It? Interview", subheading: "Ask and answer, then switch roles", turns: [{ who: "teacher", text: "Can you play basketball?" }, { who: "student", text: "Yes, I can. I can play basketball!" }, { who: "student", text: "Can you swim?" }, { who: "teacher", text: "Yes, I can." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Say three things you can do", line: "I can ___. I can ___. I can ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "What Can You Do?", caption: "I can play basketball. I can swim. I can run." },
    ],
  },
  "8-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 8 · Lesson 2", title: "I Can't Do That!", subtitle: "Talk about hobbies using can and can't." },
      { type: "chips", stage: "Getting Ready", heading: "Hobbies", subheading: "New words for this unit", items: ["drawing", "painting", "reading", "singing", "dancing", "cooking", "playing games", "taking photos", "gardening"] },
      { type: "message", stage: "Taking Off", heading: "I Can / I Can't", subheading: "Sort activities into can and can't", lines: ["I can *draw*.", "I *can't* sing.", "I can *play games*.", "I *can't* play the guitar."] },
      { type: "dialogue", stage: "Flight Log", heading: "Hobby Charades", subheading: "Act it out, then guess", turns: [{ who: "teacher", text: "(acts out cooking)" }, { who: "student", text: "Can you cook?" }, { who: "teacher", text: "Yes, I can!" }, { who: "student", text: "Can you draw?" }] },
      { type: "message", stage: "Guessing Game", heading: "Yes or No?", subheading: "The other person answers", lines: ["\"Can you cook?\"", "\"No, I can't!\""] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "2 things you can do + 2 things you can't", line: "I can ___ and ___. I can't ___ or ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "I Can't Do That!", caption: "I can draw and cook. I can't sing or play the guitar." },
    ],
  },
  "8-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 8 · Lesson 3", title: "Because I Like It!", subtitle: "Express likes and dislikes with a reason." },
      { type: "chips", stage: "Getting Ready", heading: "Reason Words", subheading: "Why do you like it?", items: ["fun", "interesting", "easy", "difficult", "exciting", "relaxing", "healthy", "enjoyable"] },
      { type: "message", stage: "Taking Off", heading: "Why? Because…", subheading: "Give a simple reason", lines: ["I like soccer *because* it is fun.", "I like basketball *because* it is exciting."] },
      { type: "message", stage: "Match the Reason", heading: "Match the Reason", subheading: "swimming → healthy/fun", lines: ["I don't like running *because* it is difficult.", "I like drawing *because* it is relaxing."] },
      { type: "dialogue", stage: "Flight Log", heading: "Would You Rather?", subheading: "Choose and explain", turns: [{ who: "teacher", text: "Would you rather play soccer or tennis?" }, { who: "student", text: "I'd rather play tennis because it is exciting." }, { who: "teacher", text: "Would you rather draw or sing?" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "Two preferences with reasons", line: "I like ___ because it is ___. I don't like ___ because it is ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Because I Like It!", caption: "I'd rather play tennis because it is exciting. I like drawing because it is relaxing." },
    ],
  },
  "8-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 8 · Lesson 4", title: "Let's Review!", subtitle: "Combine abilities, preferences, and reasons." },
      { type: "chips", stage: "Getting Ready", heading: "Ability Speed Round", subheading: "Sports + hobbies review", items: ["basketball", "swimming", "cycling", "drawing", "singing", "cooking", "photography"] },
      { type: "message", stage: "Taking Off", heading: "Like or Don't Like?", subheading: "React to sports and hobbies", lines: ["\"Can you…?\" \"Yes, I can.\" / \"No, I can't.\""] },
      { type: "message", stage: "Add a Reason", heading: "Add a Reason", subheading: "Turn simple opinions into longer sentences", lines: ["\"I like swimming.\" → \"I like swimming *because* it is fun.\""] },
      { type: "dialogue", stage: "Flight Log", heading: "Activity Mistake Detective", subheading: "Does the statement make sense? Fix it if not", turns: [{ who: "teacher", text: "I can't swim, but I like swimming because it is relaxing." }, { who: "student", text: "That doesn't make sense! You can't like an activity you can't do." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "3-4 connected sentences", line: "I can ___. I like ___ because it is ___. I don't like ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "I can swim. I like swimming because it is relaxing. I don't like running because it is difficult." },
    ],
  },
  "8-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 8 · Lesson 5", title: "Show What You Know! ⭐", subtitle: "Communicate about abilities, hobbies, and preferences independently." },
      { type: "message", stage: "Mystery Activity", heading: "Mystery Activity", subheading: "What can/can't this person do?", lines: ["Look at the picture. What can this person do?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Perfect Weekend Interview", subheading: "Plan a weekend without being told which structure to use", turns: [{ who: "teacher", text: "What can you do? What do you like? Why?" }, { who: "student", text: "I can play basketball. I like it because it is fun. This weekend, I want to play basketball." }] },
      { type: "message", stage: "Activity Problem", heading: "Activity Problem", subheading: "Your friend wants to play tennis, but you can't", lines: ["\"I can't play tennis, but I can play *basketball* instead.\""] },
      { type: "message", stage: "My Perfect Hobby", heading: "My Perfect Hobby", subheading: "Choose one hobby and explain why", lines: ["My perfect hobby is *painting* because it is relaxing."] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "What do you enjoy? What is difficult for you?", line: "I enjoy ___. ___ is difficult for me." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "I enjoy painting because it is relaxing. Running is difficult for me." },
    ],
  },
  "8-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 8 · Test", title: "Unit 8 Test", subtitle: "Sports & Hobbies — abilities, preferences, and reasons independently." },
      { type: "chips", stage: "Part 1: Vocabulary", heading: "Name the Activities", subheading: "8-10 pictures", items: ["swimming", "basketball", "cooking", "drawing", "tennis", "singing"] },
      { type: "dialogue", stage: "Part 2: Abilities", heading: "Can You…?", subheading: "Answer appropriately", turns: [{ who: "teacher", text: "Can you swim? Can you cook?" }, { who: "student", text: "Yes, I can swim. No, I can't cook." }] },
      { type: "message", stage: "Part 3: Can / Can't", heading: "Can / Can't", subheading: "Produce full sentences", lines: ["I can *swim*.", "I can't play *tennis*."] },
      { type: "dialogue", stage: "Part 4-5: Reasons ⭐", heading: "Give a Reason", subheading: "Talk about 2-3 activities and explain preferences", turns: [{ who: "teacher", text: "Do you like basketball? Why or why not?" }, { who: "student", text: "I like basketball because it is fun. I don't like running because it is difficult." }] },
      { type: "postcard", stage: "Part 6: Short Writing", heading: "Sports & Hobbies", subheading: "4-5 sentences", line: "I can ___. I can play ___. I like ___ because it is ___. I don't like ___ because it is ___." },
      { type: "landing", stage: "Landing", heading: "Unit 8 Complete!", cardTitle: "Unit 8 Test", caption: "I can swim. I can play basketball. I like swimming because it is fun. I don't like running because it is difficult." },
    ],
  },
  "9-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 9 · Lesson 1", title: "Feelings Words! 😊", subtitle: "Identify common emotions and say how you feel." },
      { type: "chips", stage: "Getting Ready", heading: "Feelings", subheading: "New words for this unit", items: ["happy", "sad", "angry", "worried", "scared", "excited", "tired", "bored", "nervous", "surprised"] },
      { type: "message", stage: "Taking Off", heading: "How Do You Feel?", subheading: "I am / I feel + emotion", lines: ["I am *happy*.", "I feel *sad*.", "I'm *worried*."] },
      { type: "message", stage: "Ask and Answer", heading: "How Do You Feel?", subheading: "Ask a friend", lines: ["\"How do you feel?\"", "\"I feel *excited*.\""] },
      { type: "dialogue", stage: "Flight Log", heading: "Emotion Theater", subheading: "Act it out, guess, then say a full sentence", turns: [{ who: "teacher", text: "(acts worried, without speaking)" }, { who: "student", text: "Are you worried?" }, { who: "teacher", text: "Yes! I feel worried." }, { who: "student", text: "You are worried." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Say how you feel today, and why", line: "Today, I feel ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Feelings Words!", caption: "Today, I feel excited. I feel happy and a little tired too." },
    ],
  },
  "9-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 9 · Lesson 2", title: "Why Do You Feel That Way?", subtitle: "Explain feelings using because." },
      { type: "chips", stage: "Getting Ready", heading: "New Words", subheading: "Review feelings + these", items: ["test", "birthday", "homework", "game", "friend", "mistake", "gift", "surprise", "problem"] },
      { type: "message", stage: "Taking Off", heading: "Why? Because…", subheading: "Feeling + because + reason", lines: ["I'm happy *because* it's my birthday.", "I'm sad *because* my friend is away.", "I'm worried *because* I have a test."] },
      { type: "message", stage: "Match the Feeling & Reason", heading: "Match the Feeling & Reason", subheading: "Pair each feeling with a reason", lines: ["I'm excited *because* I have a game."] },
      { type: "dialogue", stage: "Flight Log", heading: "What Happened?", subheading: "React to a situation with a feeling and a reason", turns: [{ who: "teacher", text: "You have a big test tomorrow. How do you feel? Why?" }, { who: "student", text: "I'm worried because I have a test." }, { who: "teacher", text: "You got a gift! How do you feel?" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "Say a feeling and a reason", line: "I feel ___ because ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Why Do You Feel That Way?", caption: "I'm worried because I have a test. I'm excited because I have a game." },
    ],
  },
  "9-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 9 · Lesson 3", title: "What Should You Do?", subtitle: "Give simple advice with should and shouldn't." },
      { type: "chips", stage: "Getting Ready", heading: "Advice Words", subheading: "New words for this unit", items: ["problem", "help", "talk", "rest", "study", "practice", "ask", "tell", "try", "relax"] },
      { type: "message", stage: "Taking Off", heading: "Should / Shouldn't", subheading: "Give advice", lines: ["You *should* study.", "You *should* ask your teacher.", "You *shouldn't* worry."] },
      { type: "message", stage: "Advice Match", heading: "Advice Match", subheading: "Match a problem to good advice", lines: ["\"What should I do?\" → \"You should get some rest.\""] },
      { type: "dialogue", stage: "Flight Log", heading: "Advice Hotline", subheading: "Answer the call and give advice", turns: [{ who: "teacher", text: "Hello! I have too much homework. What should I do?" }, { who: "student", text: "You should study a little every day. You shouldn't worry." }, { who: "teacher", text: "I'm nervous about my test!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Give advice for a problem", line: "You should ___. You shouldn't ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "What Should You Do?", caption: "You should study and ask your teacher. You shouldn't worry so much." },
    ],
  },
  "9-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 9 · Lesson 4", title: "Let's Review!", subtitle: "Combine feelings, reasons, and advice." },
      { type: "chips", stage: "Getting Ready", heading: "Feeling Speed Round", subheading: "Feelings + advice review", items: ["happy", "worried", "tired", "nervous", "should", "shouldn't", "because"] },
      { type: "message", stage: "Taking Off", heading: "Why Do You Feel That Way?", subheading: "Feeling + reason", lines: ["I'm worried *because* I have a test."] },
      { type: "message", stage: "Give Me Advice!", heading: "Give Me Advice!", subheading: "React with advice", lines: ["\"I'm tired.\" → \"You should get some rest.\""] },
      { type: "dialogue", stage: "Flight Log", heading: "Advice Mistake Show", subheading: "The advice is bad — correct it and explain why", turns: [{ who: "teacher", text: "I'm tired. You should play video games all night!" }, { who: "student", text: "No! You should get some rest, because you're tired." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "Feeling + reason + advice", line: "I feel ___ because ___. I should ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "I feel tired because I studied all night. I should get some rest." },
    ],
  },
  "9-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 9 · Lesson 5", title: "Show What You Know! ⭐", subtitle: "Use feelings, reasons, and advice independently." },
      { type: "message", stage: "Mystery Feeling", heading: "Mystery Feeling", subheading: "Look at a situation — how does the person feel?", lines: ["Look at the picture. How does this person feel?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Friend in Trouble", subheading: "Identify the feeling, explain the reason, give advice", turns: [{ who: "teacher", text: "Your friend is nervous because she has a test tomorrow." }, { who: "student", text: "She is nervous because she has a test. She should study and relax." }] },
      { type: "message", stage: "What Happened?", heading: "What Happened?", subheading: "Create a short explanation", lines: ["He looks *excited* because *he got a new bike*."] },
      { type: "message", stage: "My Problem, My Solution", heading: "My Problem, My Solution", subheading: "Talk about an everyday problem", lines: ["I'm tired *because* I stayed up late. I should *go to bed early*."] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "A time you felt worried and what helped", line: "I felt worried because ___. I ___ and I felt better." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "She is nervous because she has a test. She should study and get some rest." },
    ],
  },
  "9-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 9 · Test", title: "Unit 9 Test", subtitle: "How Do You Feel? — feelings, reasons, and advice independently." },
      { type: "chips", stage: "Part 1: Feelings", heading: "Name the Feelings", subheading: "8-10 emotions", items: ["happy", "sad", "worried", "excited", "nervous", "tired"] },
      { type: "dialogue", stage: "Part 2-3: How & Why", heading: "How Do You Feel? Why?", subheading: "Answer with a feeling and a reason", turns: [{ who: "teacher", text: "How do you feel? Why?" }, { who: "student", text: "I'm worried because I have a test tomorrow." }] },
      { type: "message", stage: "Part 4: Advice", heading: "What Should You Do?", subheading: "Give advice for simple problems", lines: ["\"I'm tired.\" → \"You should get some rest.\""] },
      { type: "dialogue", stage: "Part 5: Problem-Solving ⭐", heading: "Problem-Solving Speaking", subheading: "Identify the feeling, explain the reason, give advice", turns: [{ who: "teacher", text: "My friend is sad because she lost her toy." }, { who: "student", text: "She is sad because she lost her toy. She should look for it." }] },
      { type: "postcard", stage: "Part 6: Short Writing", heading: "Feeling, Reason, Advice", subheading: "4-5 sentences", line: "I am ___ because ___. I should ___. I should also ___." },
      { type: "landing", stage: "Landing", heading: "Unit 9 Complete!", cardTitle: "Unit 9 Test", caption: "I am worried because I have a test. I should study. I should ask my teacher for help." },
    ],
  },
  "10-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 10 · Lesson 1", title: "My Chores! 🧹", subtitle: "Name chores and say what you have to do at home." },
      { type: "chips", stage: "Getting Ready", heading: "Chores", subheading: "New words for this unit", items: ["clean my room", "wash the dishes", "take out the trash", "do the laundry", "make my bed", "sweep the floor", "set the table", "feed the pet"] },
      { type: "message", stage: "Taking Off", heading: "I Have To…", subheading: "Talk about responsibilities", lines: ["I have to *clean my room*.", "I have to *wash the dishes*.", "I have to *feed my cat*."] },
      { type: "dialogue", stage: "Do You Have To?", heading: "Do You Have To…?", subheading: "Ask and answer", turns: [{ who: "teacher", text: "Do you have to do the laundry?" }, { who: "student", text: "Yes, I do." }, { who: "teacher", text: "Do you have to make your bed?" }, { who: "student", text: "No, I don't." }] },
      { type: "dialogue", stage: "Flight Log", heading: "My Busy Morning", subheading: "You're late! What do you have to do?", turns: [{ who: "teacher", text: "You're late! What do you have to do?" }, { who: "student", text: "I have to make my bed. I have to wash the dishes." }, { who: "teacher", text: "What else do you have to do?" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Say three chores you have to do", line: "I have to ___. I have to ___. I have to ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "My Chores!", caption: "I have to make my bed. I have to wash the dishes. I have to feed my cat." },
    ],
  },
  "10-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 10 · Lesson 2", title: "Can You Help?", subtitle: "Politely ask someone to help with a chore." },
      { type: "chips", stage: "Getting Ready", heading: "New Words", subheading: "Review chores + these", items: ["help", "please", "now", "later", "together"] },
      { type: "message", stage: "Taking Off", heading: "Can You…?", subheading: "Make a polite request", lines: ["*Can you* wash the dishes?", "*Can you* clean your room, please?", "*Can you* help me?"] },
      { type: "message", stage: "Request Practice", heading: "Request Practice", subheading: "Answer a request", lines: ["\"Can you help me?\"", "\"Yes, I can.\" / \"Sure!\" / \"Sorry, I can't.\""] },
      { type: "dialogue", stage: "Flight Log", heading: "Help Hotline", subheading: "Answer the call, then switch roles", turns: [{ who: "teacher", text: "Can you help me? Can you wash the dishes?" }, { who: "student", text: "Sure! Yes, I can." }, { who: "student", text: "Can you take out the trash?" }, { who: "teacher", text: "Sorry, I can't." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Make a request and answer one", line: "Can you ___? / Sure! I can ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Can You Help?", caption: "Can you wash the dishes, please? Sure, I can!" },
    ],
  },
  "10-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 10 · Lesson 3", title: "Helping Each Other!", subtitle: "Accept, refuse politely, or respond to a request." },
      { type: "chips", stage: "Getting Ready", heading: "Responses", subheading: "Accepting and refusing", items: ["Sure!", "Yes, I can.", "Of course.", "Okay!", "Sorry, I can't.", "Sorry, I'm busy.", "Maybe later.", "Let's do it together."] },
      { type: "message", stage: "Taking Off", heading: "How Can I Respond?", subheading: "Choose a good response", lines: ["\"Can you help me?\" → \"*I can help you.*\"", "\"Can you cook?\" → \"*Let's do it together.*\""] },
      { type: "message", stage: "Good or Bad Response?", heading: "Good or Bad Response?", subheading: "Decide if the response fits", lines: ["\"Can you help?\" → \"Sorry, I'm busy.\" (polite)"] },
      { type: "dialogue", stage: "Flight Log", heading: "The Busy House", subheading: "Decide how to respond as things get busier", turns: [{ who: "teacher", text: "I have to cook, but I also have to clean. Can you help?" }, { who: "student", text: "Sure! I can help you clean." }, { who: "teacher", text: "Now I have to wash the dishes too!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "Respond to a busy request", line: "\"Can you help me?\" — ___" },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Helping Each Other!", caption: "Sure! I can help you. Let's do it together." },
    ],
  },
  "10-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 10 · Lesson 4", title: "Let's Review!", subtitle: "Combine chores, requests, and responses." },
      { type: "chips", stage: "Getting Ready", heading: "Chore Speed Round", subheading: "Chores + requests review", items: ["clean my room", "wash the dishes", "have to", "Can you…?", "Sure!", "Sorry, I can't"] },
      { type: "message", stage: "Taking Off", heading: "Have To Challenge", subheading: "Say what you have to do", lines: ["I have to *set the table*."] },
      { type: "message", stage: "Request & Response", heading: "Request & Response", subheading: "Ask and answer", lines: ["\"Can you sweep the floor?\" → \"Sure!\""] },
      { type: "dialogue", stage: "Flight Log", heading: "Request Repair", subheading: "Fix the too-short response", turns: [{ who: "teacher", text: "Can you help me? ... No." }, { who: "student", text: "Sorry, I can't. I'm busy right now." }, { who: "teacher", text: "Can you clean your room? ... Later." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "A chore, a request, and a polite response", line: "I have to ___. Can you ___? ___" },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "I have to clean my room. Can you help me? Sure, I can!" },
    ],
  },
  "10-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 10 · Lesson 5", title: "Show What You Know! ⭐", subtitle: "Communicate about chores and helping at home independently." },
      { type: "message", stage: "Mystery House", heading: "Mystery House", subheading: "Look at a messy house — what needs to be done?", lines: ["Look at the house. What has to be done?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Home Emergency", subheading: "Make requests, respond, and talk about what you have to do", turns: [{ who: "teacher", text: "I have to cook. Can you help me?" }, { who: "student", text: "Sure! I can set the table." }, { who: "teacher", text: "I have to clean my room too!" }] },
      { type: "message", stage: "Help Me!", heading: "Help Me!", subheading: "Respond to an unexpected situation", lines: ["\"The trash is full!\" → \"*I can take it out.*\""] },
      { type: "message", stage: "My Home Routine", heading: "My Home Routine", subheading: "Talk about your own chores", lines: ["At home, I have to *feed the pet* and *make my bed*."] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "What chore do you like the least?", line: "I don't like ___ because ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "I have to feed my cat and make my bed. Can you help me set the table? Sure!" },
    ],
  },
  "10-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 10 · Test", title: "Unit 10 Test", subtitle: "Helping at Home — chores, requests, and responses independently." },
      { type: "chips", stage: "Part 1: Chores", heading: "Name the Chores", subheading: "8-10 pictures", items: ["wash the dishes", "clean my room", "make my bed", "take out the trash", "sweep the floor"] },
      { type: "message", stage: "Part 2: Responsibilities", heading: "I Have To…", subheading: "Produce sentences", lines: ["I have to *clean my room*."] },
      { type: "message", stage: "Part 3: Requests", heading: "Can You…?", subheading: "Respond to a situation with a request", lines: ["\"The dishes are dirty.\" → \"*Can you wash the dishes, please?*\""] },
      { type: "message", stage: "Part 4: Responding", heading: "Responding", subheading: "Respond appropriately", lines: ["\"Can you help me?\" → \"*Sure!*\"", "\"Can you do the laundry?\" → \"*Sorry, I can't.*\""] },
      { type: "dialogue", stage: "Part 5: Roleplay ⭐", heading: "Helping at Home Roleplay", subheading: "A chore, a request, a response, then another", turns: [{ who: "teacher", text: "I have to cook dinner. Can you help me?" }, { who: "student", text: "Sure! I can set the table. Can you help me clean up after?" }] },
      { type: "postcard", stage: "Part 6: Short Writing", heading: "Chores at Home", subheading: "4-5 sentences", line: "I have to ___. I have to ___. I can help my family. Sometimes I ask ___ for help." },
      { type: "landing", stage: "Landing", heading: "Unit 10 Complete!", cardTitle: "Unit 10 Test", caption: "I have to clean my room. I have to feed my cat. I can help my family. Sometimes I ask my brother for help." },
    ],
  },
  "11-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 11 · Lesson 1", title: "What Are You Going To Do? 🔮", subtitle: "Talk about simple future plans using I'm going to…" },
      { type: "chips", stage: "Getting Ready", heading: "Future Verbs", subheading: "New words for this unit", items: ["study", "play", "visit", "watch", "eat", "buy", "go", "meet", "clean", "practice"] },
      { type: "message", stage: "Taking Off", heading: "Meet Going To", subheading: "I'm going to + verb", lines: ["I'm going to *study*.", "I'm going to play *basketball*.", "I'm going to *watch a movie*."] },
      { type: "dialogue", stage: "What Are You Going To Do?", heading: "What Are You Going To Do?", subheading: "Ask and answer", turns: [{ who: "teacher", text: "What are you going to do?" }, { who: "student", text: "I'm going to visit my friend." }] },
      { type: "dialogue", stage: "Flight Log", heading: "Future Interview", subheading: "Interview each other, then switch roles", turns: [{ who: "teacher", text: "What are you going to do after class?" }, { who: "student", text: "I'm going to eat lunch." }, { who: "teacher", text: "What are you going to do tonight?" }, { who: "student", text: "I'm going to watch a movie." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Say what you're going to do today", line: "I'm going to ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "What Are You Going To Do?", caption: "I'm going to visit my friend. I'm going to watch a movie." },
    ],
  },
  "11-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 11 · Lesson 2", title: "My Plans for the Week!", subtitle: "Describe several plans for the coming week." },
      { type: "chips", stage: "Getting Ready", heading: "Days & Activities", subheading: "New words for this unit", items: ["Monday", "Tuesday", "Wednesday", "Saturday", "Sunday", "go shopping", "visit family", "meet friends", "do homework"] },
      { type: "message", stage: "Taking Off", heading: "My Week", subheading: "Day + going to + activity", lines: ["*On Monday*, I'm going to study.", "*On Saturday*, I'm going to play basketball."] },
      { type: "message", stage: "Plan the Days", heading: "Plan the Days", subheading: "Different plans for different days", lines: ["I'm going to visit my grandmother.", "\"What are you going to do this weekend?\""] },
      { type: "dialogue", stage: "Flight Log", heading: "Calendar Conversation", subheading: "Answer, and correct the teacher when they guess wrong", turns: [{ who: "teacher", text: "What are you going to do on Monday?" }, { who: "student", text: "I'm going to study." }, { who: "teacher", text: "Are you going to play soccer on Wednesday?" }, { who: "student", text: "No, I'm going to visit my family on Wednesday." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "Plans for two different days", line: "On ___, I'm going to ___. On ___, I'm going to ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "My Plans for the Week!", caption: "On Monday, I'm going to study. On Saturday, I'm going to play basketball." },
    ],
  },
  "11-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 11 · Lesson 3", title: "Someday I Will! 🌟", subtitle: "Talk about long-term dreams and future plans." },
      { type: "chips", stage: "Getting Ready", heading: "Dream Words", subheading: "New words for this unit", items: ["dream", "someday", "travel", "become", "learn", "live", "visit", "see", "meet", "try"] },
      { type: "message", stage: "Taking Off", heading: "Someday…", subheading: "Going to for long-term dreams", lines: ["I'm going to *travel someday*.", "I'm going to *learn Japanese*.", "I'm going to *become a doctor*."] },
      { type: "message", stage: "Dream Match", heading: "Dream Match", subheading: "I want to… also works", lines: ["I *want to* become a teacher.", "I *want to* travel the world."] },
      { type: "dialogue", stage: "Flight Log", heading: "Future Talk Show", subheading: "You're a talk-show guest — answer about your dreams", turns: [{ who: "teacher", text: "What are you going to do someday? Where are you going to go?" }, { who: "student", text: "Someday, I'm going to travel to Japan. I want to learn Japanese too." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "One dream for someday", line: "Someday, I'm going to ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Someday I Will!", caption: "Someday, I'm going to travel to Japan. I want to become a doctor." },
    ],
  },
  "11-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 11 · Lesson 4", title: "Let's Review!", subtitle: "Combine near-future plans and future dreams." },
      { type: "chips", stage: "Getting Ready", heading: "Future Speed Round", subheading: "Going to review", items: ["I'm going to…", "On Monday…", "This weekend…", "Someday…", "I want to…"] },
      { type: "message", stage: "Plan My Week", heading: "Plan My Week", subheading: "A plan for each day", lines: ["On Tuesday, I'm going to *do homework*."] },
      { type: "message", stage: "Dream Big", heading: "Dream Big", subheading: "A long-term dream", lines: ["Someday, I'm going to *become a doctor*."] },
      { type: "dialogue", stage: "Flight Log", heading: "Future Plan Mistakes", subheading: "Fix the grammar, then react to a mismatched plan", turns: [{ who: "teacher", text: "Tomorrow, I going to study." }, { who: "student", text: "Tomorrow, I'm going to study." }, { who: "teacher", text: "On Saturday, I'm going to go to school for five hours!" }, { who: "student", text: "That's not a great plan for Saturday!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "A near-future plan and a dream", line: "This weekend, I'm going to ___. Someday, I'm going to ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "This weekend, I'm going to visit my friend. Someday, I'm going to travel the world." },
    ],
  },
  "11-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 11 · Lesson 5", title: "Show What You Know! ⭐", subtitle: "Communicate about future plans and dreams independently." },
      { type: "message", stage: "Mystery Future", heading: "Mystery Future", subheading: "What do you think this person plans to do?", lines: ["Look at the picture. What is this person going to do?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Pick a Day!", subheading: "Pick a day, then say a real plan for it right away", turns: [{ who: "teacher", text: "Pick one: Monday, Saturday, Next month, Someday." }, { who: "student", text: "Someday! I'm going to travel to Japan." }, { who: "teacher", text: "Saturday!" }, { who: "student", text: "I'm going to play basketball." }] },
      { type: "message", stage: "Future Surprise!", heading: "Future Surprise!", subheading: "Respond to an unexpected change", lines: ["\"Your friend invites you to the beach on Saturday.\" → \"I'm going to *go to the beach* instead!\""] },
      { type: "message", stage: "My Future Dream", heading: "My Future Dream", subheading: "Something you hope to do someday", lines: ["Someday, I'm going to *become a pilot*."] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "One plan for tomorrow and one dream for someday", line: "Tomorrow, I'm going to ___. Someday, I'm going to ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "Tomorrow, I'm going to study. Someday, I'm going to travel the world." },
    ],
  },
  "11-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 11 · Test", title: "Unit 11 Test", subtitle: "My Future Plans — going to for near-future plans and dreams." },
      { type: "chips", stage: "Part 1: Vocabulary", heading: "Name the Future Activities", subheading: "8-10 pictures", items: ["study", "travel", "visit family", "play basketball", "become a doctor"] },
      { type: "message", stage: "Part 2: Going To", heading: "Going To", subheading: "Produce full sentences", lines: ["I'm going to *study*.", "She's going to *play tennis*.", "They're going to *visit their family*."] },
      { type: "dialogue", stage: "Part 3-4: Questions & Weekly Plans", heading: "Weekly Plans", subheading: "3-4 plans for different days", turns: [{ who: "teacher", text: "What are you going to do this weekend?" }, { who: "student", text: "On Saturday, I'm going to visit my friend. On Sunday, I'm going to study." }] },
      { type: "dialogue", stage: "Part 5: My Future Plans ⭐", heading: "My Future Plans", subheading: "Near-future plan + weekend plan + dream (5-7 sentences)", turns: [{ who: "teacher", text: "Tell me about your future plans." }, { who: "student", text: "Tomorrow, I'm going to study. This weekend, I'm going to visit my friend. Someday, I'm going to travel to Japan." }] },
      { type: "postcard", stage: "Part 6: Short Writing", heading: "Future Plans & Dreams", subheading: "4-5 sentences", line: "This weekend, I'm going to ___. We're going to ___. Next week, I'm going to ___. Someday, I'm going to ___." },
      { type: "landing", stage: "Landing", heading: "Unit 11 Complete!", cardTitle: "Unit 11 Test", caption: "This weekend, I'm going to visit my friend. We're going to watch a movie. Someday, I'm going to travel to Japan." },
    ],
  },
  "12-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 12 · Lesson 1", title: "Looking Back! 🕰️", subtitle: "Talk about things you did in the past." },
      { type: "chips", stage: "Getting Ready", heading: "Past Simple Review", subheading: "From across the whole course", items: ["went", "ate", "saw", "had", "did", "made", "played", "studied", "visited", "watched", "helped"] },
      { type: "message", stage: "Taking Off", heading: "Past Simple Review", subheading: "Yesterday / last weekend + past verb", lines: ["Yesterday, I *went* to school.", "Last weekend, I *played* basketball.", "I *visited* my friend."] },
      { type: "dialogue", stage: "What Did You Do?", heading: "What Did You Do?", subheading: "Ask and answer", turns: [{ who: "teacher", text: "What did you do yesterday?" }, { who: "student", text: "I watched a movie." }] },
      { type: "dialogue", stage: "Flight Log", heading: "Year-in-Review Interview", subheading: "Answer with real past-simple detail", turns: [{ who: "teacher", text: "What did you do? Where did you go? What did you see?" }, { who: "student", text: "I went to the park. I saw my friends. I ate ice cream." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Three things you did recently", line: "Yesterday, I ___. I also ___. Then I ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Looking Back!", caption: "Yesterday, I went to the park. I saw my friends and ate ice cream." },
    ],
  },
  "12-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 12 · Lesson 2", title: "Everyday Life! 🏠", subtitle: "Describe your everyday life and familiar places." },
      { type: "chips", stage: "Getting Ready", heading: "Everyday Places", subheading: "Review from across the course", items: ["school", "home", "town", "store", "park", "library", "restaurant", "family"] },
      { type: "message", stage: "Taking Off", heading: "My Everyday Life", subheading: "Present simple for routines", lines: ["I go to *school*.", "I study *English*.", "I *clean my room*."] },
      { type: "message", stage: "Around My Town", heading: "Around My Town", subheading: "Describe where things are", lines: ["There is a *park* near my school.", "The *bank* is next to the *store*."] },
      { type: "dialogue", stage: "Flight Log", heading: "Draw My Day", subheading: "Describe your day and mark each place on a simple map", turns: [{ who: "teacher", text: "Where do you go every day?" }, { who: "student", text: "I go to school. There is a park near my school. I usually help at home too." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "One connected description of your day", line: "I go to ___. There is a ___ near my ___. I usually ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Everyday Life!", caption: "I go to school every day. There is a park near my school. I usually help at home." },
    ],
  },
  "12-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 12 · Lesson 3", title: "Looking Ahead! 🚀", subtitle: "Talk about upcoming plans and future dreams." },
      { type: "chips", stage: "Getting Ready", heading: "Future Review", subheading: "Review from across the course", items: ["study", "play", "visit", "travel", "meet", "watch", "practice", "become"] },
      { type: "message", stage: "Taking Off", heading: "Going To Review", subheading: "Near-future and long-term plans", lines: ["I'm going to *study* tomorrow.", "I'm going to *play basketball* this weekend.", "I'm going to *travel* someday."] },
      { type: "message", stage: "Tomorrow or Someday?", heading: "Tomorrow or Someday?", subheading: "Sort plans by how soon they happen", lines: ["\"What are you going to do next week?\""] },
      { type: "dialogue", stage: "Flight Log", heading: "Fortune Teller", subheading: "Confirm or correct the prediction, then switch roles", turns: [{ who: "teacher", text: "I predict... you are going to visit a friend next week." }, { who: "student", text: "Yes, that's right! I'm going to visit my friend." }, { who: "teacher", text: "I predict... you are going to become famous someday!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "A near plan and a someday dream", line: "Next week, I'm going to ___. Someday, I'm going to ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Looking Ahead!", caption: "Next week, I'm going to visit my friend. Someday, I'm going to travel the world." },
    ],
  },
  "12-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 12 · Lesson 4", title: "Let's Review!", subtitle: "Distinguish and connect past, present, and future." },
      { type: "message", stage: "Getting Ready", heading: "Past, Present, or Future?", subheading: "Three ways to talk about time", lines: ["Past: I *went*… I *played*…", "Present: I *go*… I *play*…", "Future: I'm *going to visit*…"] },
      { type: "message", stage: "Fix the Time", heading: "Fix the Time", subheading: "Match the sentence to the right time word", lines: ["\"Yesterday, I *go* to school.\" → \"Yesterday, I *went* to school.\""] },
      { type: "dialogue", stage: "Flight Log", heading: "Time Traveler", subheading: "Jump between past, present, and future unpredictably", turns: [{ who: "teacher", text: "Travel to the past!" }, { who: "student", text: "Yesterday, I played basketball." }, { who: "teacher", text: "Come back to now!" }, { who: "student", text: "I go to school every day." }, { who: "teacher", text: "Travel to the future!" }] },
      { type: "message", stage: "Time Travel Speed Round", heading: "Time Travel Speed Round", subheading: "Say a sentence for each time period fast", lines: ["Past → Present → Future"] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "One sentence for each time period", line: "Yesterday, I ___. Now, I ___. Tomorrow, I'm going to ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "Yesterday, I played basketball. Now, I study English. Tomorrow, I'm going to visit my friend." },
    ],
  },
  "12-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 12 · Lesson 5", title: "Show What You Know! 🌟", subtitle: "Communicate about your past, present, and future independently." },
      { type: "message", stage: "Mystery Timeline", heading: "Mystery Timeline", subheading: "What happened, what's happening, what's next?", lines: ["Look at the timeline. What happened? What is happening now? What will happen next?"] },
      { type: "dialogue", stage: "Flight Log", heading: "My Year Talk Show", subheading: "Cover before → now → next, without being told which grammar to use", turns: [{ who: "teacher", text: "What did you do this year? What is your life like now? What are you going to do next?" }, { who: "student", text: "This year, I learned English. Now, I study every day. Next month, I'm going to take a test." }] },
      { type: "message", stage: "Time Travel Interview", heading: "Time Travel Interview", subheading: "Unexpected questions across all three times", lines: ["\"What did you do last weekend?\" \"What do you usually do after school?\" \"What are you going to do next weekend?\""] },
      { type: "message", stage: "My Best Year Moment", heading: "My Best Year Moment", subheading: "Choose one moment and talk about it", lines: ["My favorite moment this year was *when I visited my grandmother*."] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "What are you looking forward to?", line: "I am looking forward to ___ because ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "This year, I learned English. Now, I study every day. Next month, I'm going to take a test." },
    ],
  },
  "12-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 12 · Final Test", title: "Unit 12 Test", subtitle: "All About My Year — the SOAR A2 capstone: past, present, and future together." },
      { type: "chips", stage: "Part 1: Vocabulary Review", heading: "Review Across the Program", subheading: "10-12 pictures from many units", items: ["school", "town", "shopping", "jobs", "weather", "sports", "chores", "feelings"] },
      { type: "message", stage: "Part 2-3: Past & Present", heading: "Past & Present", subheading: "2-3 sentences each", lines: ["Yesterday, I *went to the park*. I *played basketball*.", "I *go to school*. I *study English*."] },
      { type: "message", stage: "Part 4: Future", heading: "Future Plans", subheading: "Upcoming plans", lines: ["This weekend, I'm going to *visit my friend*. We're going to *watch a movie*."] },
      { type: "dialogue", stage: "Part 5: My Year ⭐", heading: "My Year: Speaking Capstone", subheading: "Before → Now → Next, connected (7-10 sentences)", turns: [{ who: "teacher", text: "Tell me about before, now, and next." }, { who: "student", text: "Last year, I started playing basketball. Now, I play every weekend and study English. Next month, I'm going to join a basketball club. Someday, I'm going to play in a big game." }] },
      { type: "postcard", stage: "Part 6: Short Writing", heading: "All About My Year", subheading: "5-7 sentences: past, present, future", line: "Last year, ___. Now, ___. Next, I'm going to ___." },
      { type: "landing", stage: "Landing", heading: "SOAR A2 Complete! 🌟", cardTitle: "Unit 12 Test", caption: "Last year, I started playing basketball. Now, I play every weekend. Someday, I'm going to play in a big game. I did it — I can connect my past, present, and future in English!" },
    ],
  },
};
