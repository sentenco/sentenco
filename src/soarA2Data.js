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
const READING = CL("reading", "reading.jpg"), COOKING = CL("cooking", "cooking.jpg"), DRAWING = { label: "art club", src: "/curriculum/a2-school/art.jpg" }, MUSIC_CLUB = { label: "music club", src: "/curriculum/a2-school/music.jpg" };
const LUNCH = SP("lunch", "lunch.jpg"), HOMEWORK = SP("homework", "homework.jpg");
const LISTEN_ANSWER = [["👂", "Listen to the question."], ["🗣️", "Answer the teacher."]];
const NO_HELP = (t) => [["🤔", "No help this time!"], ["🗣️", t]];
const pair = (a, b) => ({ type: "strip", numbered: false, size: 108, items: [a, b] });

// ---- Unit 2 (Yesterday & Today) pieces; pictures reuse A1 / A2 files by path ----
const PARK = { label: "park", src: "/curriculum/u11-l5/playground.jpg" }, SCHOOL = { label: "school", src: "/curriculum/u12-routines/go-to-school.jpg" };
const PIZZA = { label: "pizza", src: "/curriculum/u8-l1/pizza.avif" }, ICECREAM = { label: "ice cream", src: "/curriculum/u1-l3/icecream.jpg" };
const DOG = { label: "dog", src: "/curriculum/u9-l1/dog.jpg" }, CAT = { label: "cat", src: "/curriculum/u9-l1/cat.jpg" }, ELEPHANT = { label: "elephant", src: "/curriculum/u9-l1/elephant.jpg" };
const FRIEND = { label: "friend", src: "/curriculum/u1-l1/wavingkid.jpg" }, BREAKFAST = { label: "breakfast", src: "/curriculum/u12-routines/eat.jpg" };
const CAKE = { label: "cake", src: "/curriculum/objects/birthday-cake.png" }, PICTURE = { label: "picture", src: "/curriculum/a2-school/art.jpg" };
const SAY_PAST = [["👀", "Look at the word."], ["🗣️", "Say the word for yesterday."]];
const SAY_NOW = [["👀", "Look at the word."], ["🗣️", "Say the word for today."]];
const LISTEN_REPEAT = [["👂", "Listen to the teacher."], ["🗣️", "Repeat the sentences."]];
const TYPE3 = { type: "postcard", line: "Yesterday, I ___. I ___. I ___.", instruction: [["⌨️", "Type three sentences in the chat."]] };
const HOME_PIC = HOME;
const one = (item) => ({ type: "strip", numbered: false, labels: false, size: 120, items: [item] });

// ---- Unit 3 (Weather & Seasons) pieces; pictures still to be generated (placeholders show until then) ----
const WX = (label, file) => ({ label, src: `/curriculum/a2-weather/${file}` });
const SUNNY = WX("sunny", "sunny.jpg"), RAINY = WX("rainy", "rainy.jpg"), CLOUDY = WX("cloudy", "cloudy.jpg"), WINDY = WX("windy", "windy.jpg");
const SNOWY = WX("snowy", "snowy.jpg"), HOT = WX("hot", "hot.jpg"), COLD = WX("cold", "cold.jpg");
const SUN = WX("sun", "sun.jpg"), CLOUD = WX("cloud", "cloud.jpg"), RAINBOW = WX("rainbow", "rainbow.jpg");
const FLOWERS = WX("flowers", "flowers.jpg"), LEAVES = WX("leaves", "leaves.jpg"), SNOW = WX("snow", "snow.jpg");
const SN = (label, file) => ({ label, src: `/curriculum/a2-seasons/${file}` });
const SPRING = SN("spring", "spring.jpg"), SUMMER = SN("summer", "summer.jpg"), AUTUMN = SN("autumn", "autumn.jpg"), WINTER = SN("winter", "winter.jpg");
const WEATHER4 = [SUNNY, RAINY, CLOUDY, WINDY], SEASONS = [SPRING, SUMMER, AUTUMN, WINTER];
const WEATHER7 = [SUNNY, RAINY, CLOUDY, WINDY, SNOWY, HOT, COLD], THINGS6 = [SUN, CLOUD, RAINBOW, FLOWERS, LEAVES, SNOW];
const WQ = "What's the weather like?";
const LOOK_SAY = (t) => [["👀", "Look at the picture."], ["🗣️", t]];
const REPEAT_WORDS = [["👂", "Listen to the teacher."], ["🗣️", "Repeat each word."]];
const TYPE2 = (line) => ({ type: "postcard", line, instruction: [["⌨️", "Type two sentences in the chat."]] });
const READ_ALOUD = { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Weather", lines: ["Read your sentences to the teacher."], instruction: [["📖", "Read what you typed out loud."]] };

// ---- Unit 4 (Around Town) pieces; pictures still to be generated (placeholders show until then) ----
const TW = (label, file) => ({ label, src: `/curriculum/a2-town/${file}` });
const T_SCHOOL = TW("school", "school.jpg"), T_PARK = TW("park", "park.jpg"), T_STORE = TW("store", "store.jpg"), T_LIBRARY = TW("library", "library.jpg");
const T_HOSPITAL = TW("hospital", "hospital.jpg"), T_BANK = TW("bank", "bank.jpg"), T_SUPERMARKET = TW("supermarket", "supermarket.jpg"), T_RESTAURANT = TW("restaurant", "restaurant.jpg");
const PLACES4 = [T_STORE, T_LIBRARY, T_HOSPITAL, T_BANK], PLACES6 = [T_SCHOOL, T_PARK, T_STORE, T_LIBRARY, T_HOSPITAL, T_BANK];
const PLACES8 = [T_SCHOOL, T_PARK, T_STORE, T_LIBRARY, T_HOSPITAL, T_BANK, T_SUPERMARKET, T_RESTAURANT];
const BUILD = { S: T_SCHOOL, P: T_PARK, T: T_STORE, L: T_LIBRARY, H: T_HOSPITAL, B: T_BANK, M: T_SUPERMARKET, R: T_RESTAURANT };
const DIR_ITEMS = [{ kind: "straight", word: "go straight" }, { kind: "left", word: "turn left" }, { kind: "right", word: "turn right" }, { kind: "stop", word: "stop" }];
const PREPS2 = [{ label: "next to" }, { label: "behind" }];
// route maps: # road, @ start (facing east), . grass, letters = buildings
const MAP_BANK = ["S.B..P", "@####.", "......"], MAP_LIBRARY = ["S.....", "@####.", "....#L"], MAP_HOSPITAL = ["....#H", "....#.", "@####."];
const MAP_MARKET = ["....M.", "..###.", "@##..."], MAP_STORE = ["......", "@####.", "...T.."], MAP_RESTAURANT = ["..#R..", "..#...", "@##..."];
const MAPQ = [["👀", "Look at the map."], ["🗣️", "Say where it is."]];
const GPSQ = [["👀", "Look at the map."], ["🗣️", "Tell the teacher where to go."]];
const TFQ = [["👀", "Look at the map."], ["🗣️", "Say true or false. Fix it if it is false."]];
const TOWN_BEHIND = [[T_PARK, null, T_RESTAURANT], [T_SCHOOL, T_STORE, T_BANK]];
const READ_TOWN = { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Town", lines: ["Read your sentences to the teacher."], instruction: [["📖", "Read what you typed out loud."]] };

// ---- Unit 5 (Let's Go Shopping) pieces; every picture is reused from A1 (nothing new to generate) ----
const SH = (label, src) => ({ label, src });
const S_APPLE = SH("apple", "/curriculum/u8-l1/apple.jpg"), S_BANANA = SH("banana", "/curriculum/u8-l1/banana.jpg"), S_COOKIE = SH("cookie", "/curriculum/u1-l1/cookie.webp");
const S_JUICE = SH("juice", "/curriculum/u2-l1/juice.avif"), S_BOOK = SH("book", "/curriculum/u7-objects/book.png"), S_BALL = SH("ball", "/curriculum/u11-l1/ball.jpg");
const S_BAG = SH("bag", "/curriculum/u7-l1/bag.avif"), S_HAT = SH("hat", "/curriculum/u1-l3/hat.avif"), S_TOY = SH("toy", "/curriculum/u11-l1/toy.jpg"), S_KITE = SH("kite", "/curriculum/u2-l1/kite.jpg");
const PRICES = { apple: 5, banana: 5, cookie: 10, juice: 10, book: 20, ball: 20, bag: 30, hat: 30, toy: 40, kite: 50 };
const STOCK = (item) => ({ ...item, price: PRICES[item.label] });
const STOCKN = (item, n) => ({ ...item, count: n, label: item.label + "s", price: PRICES[item.label] * n });
const TAG = (item, n = 1) => ({ ...item, count: n, label: `${PRICES[item.label] * n} pesos` });
const SHOP6 = [S_APPLE, S_BANANA, S_COOKIE, S_JUICE, S_BOOK, S_BALL];
const PRICE_WORDS = (list) => list.map((n) => ({ label: `${n} pesos` }));
const HM = "How much is it?", HMP = "How much are they?";
const REPEAT_SENT = [["👂", "Listen to the teacher."], ["🗣️", "Repeat each sentence."]];
const TF_PRICE = LOOK_SAY("Say true or false. Fix it if it is false.");
const SHELFQ = [["👀", "Look at the shelf."], ["🗣️", "Say what you want."]];
const READ_SHOP = { ...READ_ALOUD, heading: "Read Your Shopping" };

// ---- Unit 6 (Jobs People Do) pieces; pictures still to be generated (placeholders show until then) ----
// He / she follows the person in the picture: teacher she, doctor he, chef she, farmer she, driver he, firefighter she, police officer he, baker he, pilot she.
const JB = (label, file) => ({ label, src: `/curriculum/a2-jobs/${file}` });
const J_TEACHER = JB("teacher", "teacher.jpg"), J_DOCTOR = JB("doctor", "doctor.jpg"), J_CHEF = JB("chef", "chef.jpg"), J_FARMER = JB("farmer", "farmer.jpg"), J_DRIVER = JB("driver", "driver.jpg");
const J_FIREFIGHTER = JB("firefighter", "firefighter.jpg"), J_POLICE = { ...JB("police officer", "police-officer.jpg"), wheel: "police" }, J_BAKER = JB("baker", "baker.jpg"), J_PILOT = JB("pilot", "pilot.jpg");
const JOBS5 = [J_TEACHER, J_DOCTOR, J_CHEF, J_FARMER, J_DRIVER], JOBS4 = [J_FIREFIGHTER, J_POLICE, J_BAKER, J_PILOT];
const JOBS6 = [J_DOCTOR, J_CHEF, J_FIREFIGHTER, J_POLICE, J_BAKER, J_PILOT], JOBS9 = [...JOBS5, ...JOBS4];
const PB = (label, file, text) => ({ label, src: `/curriculum/a2-jobs/${file}`, text });
const P_SICK = PB("sick", "sick.jpg", "Someone is sick!"), P_FIRE = PB("fire", "fire.jpg", "There is a fire!"), P_LOST = PB("lost", "lost.jpg", "A child is lost!"), P_HUNGRY = PB("hungry", "hungry.jpg", "I am hungry!");
const HELP_SICK = { type: "help", problem: P_SICK, options: [J_DOCTOR, J_BAKER, J_PILOT], answer: 0, said: "A doctor can help." };
const HELP_FIRE = { type: "help", problem: P_FIRE, options: [J_TEACHER, J_FIREFIGHTER, J_FARMER], answer: 1, said: "A firefighter can help." };
const HELP_LOST = { type: "help", problem: P_LOST, options: [J_CHEF, J_DRIVER, J_POLICE], answer: 2, said: "A police officer can help." };
const HELP_HUNGRY = { type: "help", problem: P_HUNGRY, options: [J_DOCTOR, J_CHEF, J_PILOT], answer: 1, said: "A chef can help." };
const WHO = "Who is this?";
const TF_PICTURE = LOOK_SAY("Say true or false. Fix it if it is false.");
const HELPQ = [["👀", "Look at the problem."], ["🗣️", "Say who can help."]];
const CLUEQ = [["👀", "Read the clue."], ["🗣️", "Guess the job."]];
const DUTYQ = [["👀", "Look at the picture."], ["🗣️", "Say what the person does."]];
const READ_JOB = { ...READ_ALOUD, heading: "Read Your Jobs" };

export const SOAR_A2_LESSONS = {
  // ---------- Unit 1: School Life ----------
  "1-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 1, title: "School Subjects", subtitle: "Say which subjects you have and what you think about them." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "dialogue", part: "A", stage: "Hello!", heading: "How Was School?", turns: [{ who: "teacher", text: "How was school today?" }], instruction: LISTEN_ANSWER, guide: "School was ___." },
      { type: "dialogue", part: "A", stage: "Hello!", heading: "At School", turns: [{ who: "teacher", text: "What do you do at school?" }], instruction: LISTEN_ANSWER, guide: "At school, I ___." },

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
      { type: "chips", part: "C", stage: "Because...", heading: "Words for Subjects", items: ["easy", "difficult", "fun", "interesting", "boring"], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the words."]] },
      { type: "message", part: "C", stage: "Because...", heading: "Add a Reason", lines: ["I like Math *because* it is *easy*.", "I don't like History *because* it is *difficult*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the sentences."]] },
      { ...one(SCIENCE), part: "C", stage: "Because...", heading: "Why?", question: "Do you like Science? Why?", instruction: LISTEN_ANSWER, guide: "I like ___ because it is ___." },
      { ...one(ART), part: "C", stage: "Because...", heading: "Why? 2", question: "Do you like Art? Why?", instruction: LISTEN_ANSWER, guide: "I like ___ because it is ___." },
      { ...one(HISTORY), part: "C", stage: "Because...", heading: "Why? 3", question: "Do you like History? Why?", instruction: NO_HELP("Answer and say why.") },
      { type: "dialogue", part: "C", stage: "School Subject Interview", heading: "School Subject Interview", turns: [{ who: "teacher", text: "What subject do you like? Why?" }], instruction: LISTEN_ANSWER, guide: "I like ___ because it is ___." },
      { type: "dialogue", part: "C", stage: "School Subject Interview", heading: "Interview 2", turns: [{ who: "teacher", text: "Is Science easy or difficult?" }], instruction: LISTEN_ANSWER, guide: "Science is ___." },
      { type: "dialogue", part: "C", stage: "School Subject Interview", heading: "Interview 3", turns: [{ who: "teacher", text: "Which subject is boring? Which subject is fun?" }], instruction: NO_HELP("Answer the question.") },
      { type: "chips", part: "C", stage: "Now You Ask!", heading: "Now You Ask!", items: ["What subjects do you have?", "Do you like ___?", "Why?"], instruction: [["👀", "Look at the questions."], ["🗣️", "Ask the teacher three questions."]] },

      // ---- Part D: my talk (4 min) ----
      { type: "message", part: "D", stage: "My Talk", heading: "Listen to the Example", lines: ["I have English, Math, Science, Art, and P.E.", "My favorite subject is English *because* it is fun.", "I don't like Math *because* it is difficult."], instruction: [["👂", "Listen to the example."], ["🗣️", "Repeat the sentences."]] },
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
      { type: "strip", part: "C", stage: "Build My School Day", heading: "Listen to the Example",
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", src: "/curriculum/a2-school/english.jpg" }, { label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        sentence: "*First*, I arrive at school. *Then*, I have English. *After that*, I have Math. *Finally*, I go home.",
        instruction: [["👂", "Listen to the example."], ["🗣️", "Repeat the sentences."]] },
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
      { type: "strip", part: "C", stage: "Build My School Day", heading: "Build My School Day 4",
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "Art", src: "/curriculum/a2-school/art.jpg" }, { label: "P.E.", src: "/curriculum/a2-school/pe.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        frame: ["First, I ___. Then, I ___.", "After that, I ___. Finally, I ___."],
        instruction: [["👀", "Look at the day."], ["🗣️", "Say it in order."]] },
      { type: "strip", part: "C", stage: "Build My School Day", heading: "Build My School Day 5",
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "Math", src: "/curriculum/a2-school/math.jpg" }, { label: "Science", src: "/curriculum/a2-school/science.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        frame: ["First, I ___. Then, I ___.", "After that, I ___. Finally, I ___."],
        instruction: [["👀", "Look at the day."], ["🗣️", "Say it in order."]] },
      { type: "strip", part: "C", stage: "Build My School Day", heading: "Build My School Day 6",
        items: [{ label: "arrive at school", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", src: "/curriculum/a2-school/english.jpg" }, { label: "Music", src: "/curriculum/a2-school/music.jpg" }, { label: "lunch", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", src: "/curriculum/u12-routines/go-home.jpg" }],
        instruction: [["🤔", "No help this time!"], ["🗣️", "Say the day in order."]] },
      { type: "strip", part: "C", stage: "Add the Time", heading: "Add the Time",
        items: [{ label: "arrive at school", time: "8 o'clock", src: "/curriculum/u12-routines/go-to-school.jpg" }, { label: "English", time: "9 o'clock", src: "/curriculum/a2-school/english.jpg" }, { label: "lunch", time: "1 o'clock", src: "/curriculum/a2-school/lunch.jpg" }, { label: "go home", time: "3 o'clock", src: "/curriculum/u12-routines/go-home.jpg" }],
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
        instruction: [["🤔", "No help this time!"], ["🗣️", "Tell the whole story again."]] },

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
      { type: "strip", part: "B", stage: "Club Match", heading: "After-School Clubs 2", numbered: false, items: [DRAWING, MUSIC_CLUB, READING, COOKING], instruction: [["👀", "Look at the clubs."], ["🗣️", "Say each activity."]] },
      { ...one(DRAWING), part: "B", stage: "Club Match", heading: "What Can You Do?", question: "What can you do in the art club?", instruction: LISTEN_ANSWER, guide: "You can ___." },
      { ...one(BASKETBALL), part: "B", stage: "Club Match", heading: "What Can You Do? 2", question: "What can you do in the sports club?", instruction: LISTEN_ANSWER, guide: "You can ___." },
      { ...one(MUSIC_CLUB), part: "B", stage: "Club Match", heading: "What Can You Do? 3", question: "What can you do in the music club?", instruction: LISTEN_ANSWER, guide: "You can ___." },
      { ...one(READING), part: "B", stage: "Club Match", heading: "What Can You Do? 4", question: "What can you do in the reading club?", instruction: NO_HELP("Answer the question.") },
      { type: "message", part: "B", stage: "Club Match", heading: "I Like, I Prefer", lines: ["I *like* drawing.", "I *prefer* drawing to swimming."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the sentences."]] },

      // ---- Part C: choose your club (13 min) ----
      { ...pair(BASKETBALL, DRAWING), part: "C", stage: "What Would You Choose?", heading: "Basketball or Art?", question: "Which club do you want to join?", instruction: LISTEN_ANSWER, guide: "I want to join the ___ club." },
      { ...pair(BASKETBALL, DRAWING), part: "C", stage: "What Would You Choose?", heading: "Why?", question: "Why?", instruction: LISTEN_ANSWER, guide: "Because I like ___." },
      { type: "message", part: "C", stage: "Choose Your Club", heading: "Choosing a Club", lines: ["I *prefer* Art Club.", "I like Art Club *more than* Basketball Club.", "Art is *more fun than* basketball."], instruction: [["👂", "Listen to the example."], ["🗣️", "Repeat the sentences."]] },
      { ...pair(BASKETBALL, SWIMMING), part: "C", stage: "Choose Your Club", heading: "Choose Your Club", question: "Which club do you prefer?", instruction: LISTEN_ANSWER, guide: "I prefer ___." },
      { ...pair(DRAWING, MUSIC_CLUB), part: "C", stage: "Choose Your Club", heading: "Choose Your Club 2", question: "Which club do you prefer? Why?", instruction: LISTEN_ANSWER, guide: "I like ___ more than ___." },
      { ...pair(READING, COOKING), part: "C", stage: "Choose Your Club", heading: "Choose Your Club 3", question: "Which club is more fun?", instruction: LISTEN_ANSWER, guide: "___ is more fun than ___." },
      { ...pair(DANCING, SOCCER), part: "C", stage: "Choose Your Club", heading: "Choose Your Club 4", question: "Which club do you prefer? Why?", instruction: NO_HELP("Choose a club and say why.") },
      { ...pair(SWIMMING, MUSIC_CLUB), part: "C", stage: "Choose Your Club", heading: "A Difficult Choice", question: "This is hard! Choose one and tell me why.", instruction: NO_HELP("Say why you choose it.") },
      { ...pair(BASKETBALL, SWIMMING), part: "C", stage: "Choose Your Club", heading: "Choose Your Club 5", question: "Which club do you prefer?", instruction: LISTEN_ANSWER, guide: "I prefer ___." },
      { ...pair(DRAWING, MUSIC_CLUB), part: "C", stage: "Choose Your Club", heading: "Choose Your Club 6", question: "Which club do you prefer? Why?", instruction: LISTEN_ANSWER, guide: "I like ___ more than ___." },
      { ...pair(READING, COOKING), part: "C", stage: "Choose Your Club", heading: "Choose Your Club 7", question: "Which club is more fun?", instruction: LISTEN_ANSWER, guide: "___ is more fun than ___." },
      { ...pair(DANCING, SOCCER), part: "C", stage: "Choose Your Club", heading: "Choose Your Club 8", question: "Which club do you prefer? Why?", instruction: NO_HELP("Choose a club and say why.") },
      { ...pair(SWIMMING, MUSIC_CLUB), part: "C", stage: "Choose Your Club", heading: "A Difficult Choice 2", question: "This is hard! Choose one and tell me why.", instruction: NO_HELP("Say why you choose it.") },
      { type: "chips", part: "C", stage: "Now You Ask!", heading: "Now You Ask!", items: ["Which do you prefer, ___ or ___?", "Why?"], instruction: [["👀", "Look at the questions."], ["🗣️", "Ask the teacher two questions."]] },

      // ---- Part D: my perfect club (4 min) ----
      { type: "message", part: "D", stage: "My Perfect Club", heading: "Listen to the Example", lines: ["My favorite club is a music club.", "I like singing and playing the guitar.", "I *prefer* music to sports *because* it is fun."], instruction: [["👂", "Listen to the example."], ["🗣️", "Repeat the sentences."]] },
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
      { type: "strip", part: "B", stage: "Build the Project", heading: "Listen to the Example", size: 84, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], sentence: "*First*, we choose a topic. *Then*, we find information. *After that*, we make a poster. *Finally*, we present it.", instruction: [["👂", "Listen to the example."], ["🗣️", "Repeat the sentences."]] },
      { type: "strip", part: "B", stage: "Build the Project", heading: "What Do We Do First?", size: 100, active: 0, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 1."], ["🗣️", "Answer the question."]], guide: "First, we ___." },
      { type: "strip", part: "B", stage: "Build the Project", heading: "What Do We Do Next?", size: 100, active: 1, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 2."], ["🗣️", "Answer the question."]], guide: "Then, we ___." },
      { type: "strip", part: "B", stage: "Build the Project", heading: "And After That?", size: 100, active: 2, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 3."], ["🗣️", "Answer the question."]], guide: "After that, we ___." },
      { type: "strip", part: "B", stage: "Build the Project", heading: "How Does It End?", size: 100, active: 3, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 4."], ["🗣️", "Answer the question."]], guide: "Finally, we ___." },
      { type: "strip", part: "B", stage: "Build the Project", heading: "What Do We Do First? 2", size: 100, active: 0, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 1."], ["🗣️", "Answer the question."]], guide: "First, we ___." },
      { type: "strip", part: "B", stage: "Build the Project", heading: "What Do We Do Next? 2", size: 100, active: 1, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 2."], ["🗣️", "Answer the question."]], guide: "Then, we ___." },
      { type: "strip", part: "B", stage: "Build the Project", heading: "And After That? 2", size: 100, active: 2, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 3."], ["🗣️", "Answer the question."]], guide: "After that, we ___." },
      { type: "strip", part: "B", stage: "Build the Project", heading: "How Does It End? 2", size: 100, active: 3, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at picture 4."], ["🗣️", "Answer the question."]], guide: "Finally, we ___." },

      // ---- Part C: project pitch (8 min) ----
      { type: "strip", part: "C", stage: "Project Pitch", heading: "Your Class Needs a Project!", numbered: false, size: 84, items: [{ label: "animals", src: "/curriculum/u9-scenes/all-animals.jpg" }, PR("space", "space.jpg"), SOCCER, { label: "countries", src: "/curriculum/a2-school/geography.jpg" }, { label: "my hobby", src: "/curriculum/a2-school/art.jpg" }], question: "What is your project about?", instruction: [["👀", "Look at the topics."], ["🗣️", "Choose a topic."]], guide: "Our project is about ___." },
      { type: "dialogue", part: "C", stage: "Project Pitch", heading: "Why This Topic?", turns: [{ who: "teacher", text: "Why do you like this topic?" }], instruction: LISTEN_ANSWER, guide: "I like it because ___." },
      { type: "dialogue", part: "C", stage: "Project Pitch", heading: "First and Then", turns: [{ who: "teacher", text: "What do you do first? What do you do next?" }], instruction: LISTEN_ANSWER, guide: "First, we ___. Then, we ___." },
      { type: "dialogue", part: "C", stage: "Project Pitch", heading: "After That", turns: [{ who: "teacher", text: "What do you do after that? How does it end?" }], instruction: LISTEN_ANSWER, guide: "After that, we ___. Finally, we ___." },
      { type: "dialogue", part: "C", stage: "Project Pitch", heading: "Interesting?", turns: [{ who: "teacher", text: "Why is your project interesting?" }], instruction: LISTEN_ANSWER, guide: "It is interesting because ___." },
      { type: "message", part: "C", stage: "Project Pitch", heading: "Listen to a Pitch", lines: ["Our project is about space *because* I like planets.", "*First*, we choose the topic. *Then*, we find pictures.", "*After that*, we make a poster. *Finally*, we present it."], instruction: [["👂", "Listen to the example."], ["🗣️", "Repeat the pitch."]] },
      { type: "dialogue", part: "C", stage: "Project Pitch", heading: "A New Project", turns: [{ who: "teacher", text: "Choose a different topic. What is your new project?" }], instruction: NO_HELP("Tell me your new project.") },
      { type: "chips", part: "C", stage: "Tell It Again", heading: "Say It Again", items: ["First", "Then", "After that", "Finally", "because"], instruction: NO_HELP("Tell the pitch again.") },

      // ---- Part D: mini presentation (4 min) ----
      { type: "dialogue", part: "D", stage: "Mini Presentation", heading: "Mini Presentation", turns: [{ who: "teacher", text: "Present your project to me. Take 30 to 60 seconds." }], instruction: NO_HELP("Tell us about your project.") },
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
      { type: "strip", part: "B", stage: "My School Day", heading: "Add the Time", items: [{ ...ARRIVE, time: "8 o'clock" }, { ...ART, time: "10 o'clock" }, { ...LUNCH, time: "1 o'clock" }, { ...HOME, time: "3 o'clock" }], instruction: [["👀", "Look at the times."], ["🗣️", "Say the day with times."]] },

      // ---- Part C: school life interview show (8 min) ----
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "Welcome to the Show!", turns: [{ who: "teacher", text: "Welcome to the School Life Interview Show! What subject do you like? Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "First and Next", turns: [{ who: "teacher", text: "What do you do first at school? What do you do next?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "Which Club?", turns: [{ who: "teacher", text: "Which club do you prefer? Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "A Class Project", turns: [{ who: "teacher", text: "Tell me about a class project." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "The New Student", turns: [{ who: "teacher", text: "You are talking to a new student. Tell them about your school life." }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Tell the new student."]] },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "Welcome to the Show! 2", turns: [{ who: "teacher", text: "Welcome to the School Life Interview Show! What subject do you like? Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "First and Next 2", turns: [{ who: "teacher", text: "What do you do first at school? What do you do next?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "Which Club? 2", turns: [{ who: "teacher", text: "Which club do you prefer? Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "A Class Project 2", turns: [{ who: "teacher", text: "Tell me about a class project." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "The New Student 2", turns: [{ who: "teacher", text: "You are talking to a new student. Tell them about your school life." }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Tell the new student."]] },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "Welcome to the Show! 3", turns: [{ who: "teacher", text: "Welcome to the School Life Interview Show! What subject do you like? Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "First and Next 3", turns: [{ who: "teacher", text: "What do you do first at school? What do you do next?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "Which Club? 3", turns: [{ who: "teacher", text: "Which club do you prefer? Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "A Class Project 3", turns: [{ who: "teacher", text: "Tell me about a class project." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Interview Show", heading: "The New Student 3", turns: [{ who: "teacher", text: "You are talking to a new student. Tell them about your school life." }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Tell the new student."]] },

      // ---- Part D: my project and my writing (9 min) ----
      { type: "dialogue", part: "D", stage: "My Class Project", heading: "My Class Project", turns: [{ who: "teacher", text: "What is your project about? Why do you like it?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "D", stage: "My Class Project", heading: "My Class Project 2", turns: [{ who: "teacher", text: "What do you do first? What do you do next?" }], instruction: LISTEN_ANSWER },
      { type: "message", part: "D", stage: "Type It!", heading: "My School Life", lines: ["Write about your subjects, what you like, your school day in order, and an after-school activity."], instruction: [["⌨️", "Type four to six sentences in the chat."]] },
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
      { type: "strip", part: "A", stage: "Words", heading: "What Club Is It?", numbered: false, labels: false, size: 100, items: [BASKETBALL, SWIMMING, DANCING, MUSIC_CLUB], instruction: [["👀", "Look at each picture."], ["🗣️", "Say the club activity."]] },
      { type: "strip", part: "A", stage: "Words", heading: "What Club Is It? 2", numbered: false, labels: false, size: 100, items: [SOCCER, READING, COOKING, DRAWING], instruction: [["👀", "Look at each picture."], ["🗣️", "Say the club activity."]] },

      // ---- Part B: opinions and comparing ----
      { ...one(MATH), part: "B", stage: "Opinions", heading: "Do You Like It?", question: "Do you like Math? Why?", instruction: [["👂", "Listen to the question."], ["🗣️", "Answer with because."]] },
      { ...one(PE), part: "B", stage: "Opinions", heading: "Do You Like It? 2", question: "Do you like P.E.? Why?", instruction: [["👂", "Listen to the question."], ["🗣️", "Answer with because."]] },
      { ...pair(BASKETBALL, DRAWING), part: "B", stage: "Opinions", heading: "Which Club?", question: "Which club do you prefer? Why?", instruction: [["👂", "Listen to the question."], ["🗣️", "Say which one you prefer."]] },
      { ...pair(READING, COOKING), part: "B", stage: "Opinions", heading: "Which Club? 2", question: "Which club do you prefer? Why?", instruction: [["👂", "Listen to the question."], ["🗣️", "Say which one you prefer."]] },

      // ---- Part C: sequencing ----
      { type: "strip", part: "C", stage: "Sequencing", heading: "A School Day", items: [ARRIVE, ENGLISH, LUNCH, HOME], instruction: [["👀", "Look at the day."], ["🗣️", "Say it in order."]] },
      { type: "strip", part: "C", stage: "Sequencing", heading: "A School Day 2", items: [ARRIVE, MATH, ART, HOME], instruction: [["👀", "Look at the day."], ["🗣️", "Say it in order."]] },
      { type: "strip", part: "C", stage: "Sequencing", heading: "A Class Project", size: 100, items: [PR("choose a topic", "topic.jpg"), PR("find information", "information.jpg"), PR("make a poster", "poster.jpg"), PR("present it", "present.jpg")], instruction: [["👀", "Look at the steps."], ["🗣️", "Tell the project in order."]] },

      // ---- Part D: speaking and writing ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About School", turns: [{ who: "teacher", text: "Tell me about your school day and your favorite subject." }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say five or six sentences."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About Clubs", turns: [{ who: "teacher", text: "Tell me about your favorite club and a class project." }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say five or six sentences."]] },
      { type: "message", part: "D", stage: "Writing", heading: "My School Life", lines: ["Write about your subjects, what you like, your school day in order, and a club."], instruction: [["⌨️", "Type five or six sentences in the chat."]] },
      { type: "score", stage: "My Unit 1 Score!", heading: "My Unit 1 Score!", rows: [["Words", "/ 4"], ["Opinions", "/ 4"], ["Sequencing", "/ 4"], ["Speaking", "/ 5"], ["Writing", "/ 3"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 1 Complete!", title: "Unit 1 Complete!", see: "On to Unit 2!", recap: "You can talk about your subjects, your clubs, your school day and a class project." },
    ],
  },

  // ---------- Unit 2: Yesterday & Today ----------
  "2-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 2, title: "Irregular Surprises!", subtitle: "Use went, ate and saw to tell what happened." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Yesterday", turns: [{ who: "teacher", text: "What did you do yesterday?" }], instruction: LISTEN_ANSWER, guide: "Yesterday, I ___." },

      // ---- Part B: today or yesterday? (5 min) ----
      { type: "table", part: "B", stage: "Today or Yesterday?", heading: "Three Special Words", rows: [["go", "went"], ["eat", "ate"], ["see", "saw"]], instruction: [["👀", "Look at the words."], ["🗣️", "Say each pair."]] },
      { type: "table", part: "B", stage: "Today or Yesterday?", heading: "Say the Word", rows: [["go", "?"], ["eat", "?"], ["see", "?"]], instruction: SAY_PAST },
      { type: "table", part: "B", stage: "Today or Yesterday?", heading: "Say the Word 2", rows: [["see", "?"], ["go", "?"], ["eat", "?"]], instruction: SAY_PAST },
      { type: "message", part: "B", stage: "Today or Yesterday?", heading: "Today, Yesterday", lines: ["I *go* to school every day.", "Yesterday, I *went* to school."], instruction: LISTEN_REPEAT },
      { type: "message", part: "B", stage: "Today or Yesterday?", heading: "Today, Yesterday 2", lines: ["I *eat* lunch every day.", "Yesterday, I *ate* pizza."], instruction: LISTEN_REPEAT },
      { type: "message", part: "B", stage: "Today or Yesterday?", heading: "Today, Yesterday 3", lines: ["I *see* my friend every day.", "Yesterday, I *saw* my friend."], instruction: LISTEN_REPEAT },

      // ---- Part C: what happened? and the story (13 min) ----
      { ...one(SCHOOL), part: "C", stage: "What Happened?", heading: "What Happened?", question: "Yesterday, where did you go?", instruction: LISTEN_ANSWER, guide: "I went to ___." },
      { ...one(PARK), part: "C", stage: "What Happened?", heading: "What Happened? 2", question: "Yesterday, where did you go?", instruction: LISTEN_ANSWER, guide: "I went to ___." },
      { ...one(PIZZA), part: "C", stage: "What Happened?", heading: "What Happened? 3", question: "Yesterday, what did you eat?", instruction: LISTEN_ANSWER, guide: "I ate ___." },
      { ...one(ICECREAM), part: "C", stage: "What Happened?", heading: "What Happened? 4", question: "Yesterday, what did you eat?", instruction: LISTEN_ANSWER, guide: "I ate ___." },
      { ...one(DOG), part: "C", stage: "What Happened?", heading: "What Happened? 5", question: "Yesterday, what did you see?", instruction: LISTEN_ANSWER, guide: "I saw a ___." },
      { ...one(ELEPHANT), part: "C", stage: "What Happened?", heading: "What Happened? 6", question: "Yesterday, what did you see?", instruction: LISTEN_ANSWER, guide: "I saw an ___." },
      { type: "strip", part: "C", stage: "What Happened?", heading: "Mix It Up", numbered: false, labels: false, size: 100, items: [PARK, ICECREAM, ELEPHANT], instruction: [["👀", "Look at the pictures."], ["🗣️", "Say what happened yesterday."]], guide: "I went / I ate / I saw ___." },
      { type: "strip", part: "C", stage: "What Happened Yesterday?", heading: "What Happened Yesterday?", numbered: false, size: 84, items: [PIZZA, DOG, ICECREAM, ELEPHANT], question: "Yesterday, Tom went to the park. What happened next?", instruction: LISTEN_ANSWER, guide: "Then, he ___." },
      { type: "strip", part: "C", stage: "What Happened Yesterday?", heading: "What Happened Yesterday? 2", numbered: false, size: 84, items: [PIZZA, DOG, ICECREAM, ELEPHANT], question: "Then, Tom ate ice cream. What happened next?", instruction: LISTEN_ANSWER, guide: "After that, he ___." },
      { type: "strip", part: "C", stage: "What Happened Yesterday?", heading: "What Happened Yesterday? 3", numbered: false, size: 84, items: [PIZZA, DOG, ICECREAM, ELEPHANT], question: "After that, Tom saw a dog. How did the day end?", instruction: LISTEN_ANSWER, guide: "Finally, he ___." },
      { type: "strip", part: "C", stage: "What Happened Yesterday?", heading: "What Happened Yesterday? 4", numbered: false, size: 84, items: [PIZZA, DOG, ICECREAM, ELEPHANT], question: "Yesterday, Tom went to the park. What happened next?", instruction: LISTEN_ANSWER, guide: "Then, he ___." },
      { type: "strip", part: "C", stage: "What Happened Yesterday?", heading: "What Happened Yesterday? 5", numbered: false, size: 84, items: [PIZZA, DOG, ICECREAM, ELEPHANT], question: "Then, Tom ate ice cream. What happened next?", instruction: LISTEN_ANSWER, guide: "After that, he ___." },
      { type: "strip", part: "C", stage: "What Happened Yesterday?", heading: "What Happened Yesterday? 6", numbered: false, size: 84, items: [PIZZA, DOG, ICECREAM, ELEPHANT], question: "After that, Tom saw a dog. How did the day end?", instruction: LISTEN_ANSWER, guide: "Finally, he ___." },
      { type: "strip", part: "C", stage: "What Happened Yesterday?", heading: "What Happened Yesterday? 7", numbered: false, size: 84, items: [PIZZA, DOG, ICECREAM, ELEPHANT], question: "Yesterday, Tom went to the park. What happened next?", instruction: LISTEN_ANSWER, guide: "Then, he ___." },
      { type: "strip", part: "C", stage: "What Happened Yesterday?", heading: "What Happened Yesterday? 8", numbered: false, size: 84, items: [PIZZA, DOG, ICECREAM, ELEPHANT], question: "Then, Tom ate ice cream. What happened next?", instruction: LISTEN_ANSWER, guide: "After that, he ___." },
      { type: "strip", part: "C", stage: "What Happened Yesterday?", heading: "What Happened Yesterday? 9", numbered: false, size: 84, items: [PIZZA, DOG, ICECREAM, ELEPHANT], question: "After that, Tom saw a dog. How did the day end?", instruction: LISTEN_ANSWER, guide: "Finally, he ___." },
      { type: "dialogue", part: "C", stage: "What Happened Yesterday?", heading: "Tell the Story Again", turns: [{ who: "teacher", text: "Tell me the whole story about Tom." }], instruction: NO_HELP("Tell the whole story again.") },

      // ---- Part D: my yesterday (4 min) ----
      { type: "message", part: "D", stage: "My Yesterday", heading: "Listen to the Example", lines: ["Yesterday, I *went* to the park.", "I *ate* ice cream.", "I *saw* an elephant!"], instruction: LISTEN_REPEAT },
      { type: "dialogue", part: "D", stage: "My Yesterday", heading: "Quick Story", turns: [{ who: "teacher", text: "What did you do yesterday?" }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE3, part: "D", stage: "Type It!", heading: "Type Your Yesterday" },
      { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Yesterday", lines: ["Read your sentences to the teacher."], instruction: [["📖", "Read what you typed out loud."]] },
      { type: "wrapup", stage: "You've Landed!", recap: "You can tell what happened yesterday with went, ate and saw." },
    ],
  },
  "2-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 2, title: "More Irregulars!", subtitle: "Use had, did and made to tell what you did." },

      // ---- Part A: review (4 min) ----
      { type: "table", part: "A", stage: "Review", heading: "Say the Word", rows: [["go", "?"], ["eat", "?"], ["see", "?"]], instruction: SAY_PAST },
      { type: "table", part: "A", stage: "Review", heading: "Say the Word 2", rows: [["eat", "?"], ["see", "?"], ["go", "?"]], instruction: SAY_PAST },
      { type: "dialogue", part: "A", stage: "Review", heading: "Yesterday", turns: [{ who: "teacher", text: "What did you do yesterday?" }], instruction: LISTEN_ANSWER, guide: "Yesterday, I ___." },

      // ---- Part B: three new words (5 min) ----
      { type: "table", part: "B", stage: "Three New Words", heading: "Three New Words", rows: [["have", "had"], ["do", "did"], ["make", "made"]], instruction: [["👀", "Look at the words."], ["🗣️", "Say each pair."]] },
      { type: "table", part: "B", stage: "Three New Words", heading: "Say the Word", rows: [["have", "?"], ["do", "?"], ["make", "?"]], instruction: SAY_PAST },
      { type: "table", part: "B", stage: "Three New Words", heading: "Say the Word 2", rows: [["make", "?"], ["have", "?"], ["do", "?"]], instruction: SAY_PAST },
      { type: "message", part: "B", stage: "Three New Words", heading: "I Had, I Did, I Made", lines: ["I *had* breakfast.", "I *did* my homework.", "I *made* a picture."], instruction: LISTEN_REPEAT },

      // ---- Part C: what did you do? and the reporter (13 min) ----
      { ...one(BREAKFAST), part: "C", stage: "What Did You Do?", heading: "What Did You Do?", question: "What did you have this morning?", instruction: LISTEN_ANSWER, guide: "I had ___." },
      { ...one(LUNCH), part: "C", stage: "What Did You Do?", heading: "What Did You Do? 2", question: "What did you have for lunch?", instruction: LISTEN_ANSWER, guide: "I had ___." },
      { ...one(HOMEWORK), part: "C", stage: "What Did You Do?", heading: "What Did You Do? 3", question: "What did you do after school?", instruction: LISTEN_ANSWER, guide: "I did my ___." },
      { ...one(PICTURE), part: "C", stage: "What Did You Do?", heading: "What Did You Do? 4", question: "What did you make in art class?", instruction: LISTEN_ANSWER, guide: "I made a ___." },
      { ...one(CAKE), part: "C", stage: "What Did You Do?", heading: "What Did You Do? 5", question: "What did you make for the party?", instruction: LISTEN_ANSWER, guide: "I made a ___." },
      { type: "strip", part: "C", stage: "What Did You Do?", heading: "Mix It Up", numbered: false, labels: false, size: 100, items: [BREAKFAST, HOMEWORK, PICTURE], instruction: NO_HELP("Say what you did."), },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter", numbered: false, size: 100, active: 0, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the morning, he ___." },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter 2", numbered: false, size: 100, active: 1, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the afternoon, he ___." },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter 3", numbered: false, size: 100, active: 2, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the evening, he ___." },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter 4", numbered: false, size: 100, active: 0, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the morning, he ___." },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter 5", numbered: false, size: 100, active: 1, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the afternoon, he ___." },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter 6", numbered: false, size: 100, active: 2, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the evening, he ___." },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter 7", numbered: false, size: 100, active: 0, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the morning, he ___." },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter 8", numbered: false, size: 100, active: 1, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the afternoon, he ___." },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter 9", numbered: false, size: 100, active: 2, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the evening, he ___." },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "A New Day", numbered: false, size: 100, items: [{ ...PICTURE, label: "in the morning" }, { ...LUNCH, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: NO_HELP("Tell the whole day.") },
      { type: "dialogue", part: "C", stage: "Yesterday Reporter", heading: "Follow-Up Questions", turns: [{ who: "teacher", text: "What did he make? What did he have?" }], instruction: LISTEN_ANSWER, guide: "He made ___. He had ___." },
      { type: "table", part: "C", stage: "Speed Round", heading: "Speed Round", heads: ["Yesterday", "Today"], rows: [["had", "?"], ["did", "?"], ["made", "?"]], instruction: [["👀", "Look at the word."], ["🗣️", "Say the word for today."]] },

      // ---- Part D: three things (4 min) ----
      { type: "dialogue", part: "D", stage: "My Yesterday", heading: "Three Things", turns: [{ who: "teacher", text: "Tell me three things you did yesterday." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE3, part: "D", stage: "Type It!", heading: "Type Your Yesterday" },
      { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Yesterday", lines: ["Read your sentences to the teacher."], instruction: [["📖", "Read what you typed out loud."]] },
      { type: "wrapup", stage: "You've Landed!", recap: "You can tell what you had, did and made yesterday." },
    ],
  },
  "2-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 2, title: "Yesterday's Story!", subtitle: "Join your sentences into a short story." },

      // ---- Part A: verb review (4 min) ----
      { type: "table", part: "A", stage: "Review", heading: "Say the Word", rows: [["go", "?"], ["eat", "?"], ["see", "?"]], instruction: SAY_PAST },
      { type: "table", part: "A", stage: "Review", heading: "Say the Word 2", rows: [["have", "?"], ["do", "?"], ["make", "?"]], instruction: SAY_PAST },
      { type: "table", part: "A", stage: "Review", heading: "Say the Word 3", rows: [["make", "?"], ["see", "?"], ["do", "?"]], instruction: SAY_PAST },

      // ---- Part B: put the story together (5 min) ----
      { type: "chips", part: "B", stage: "Put the Story Together", heading: "Four Little Words", items: ["First", "Then", "After that", "Finally"], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the four words."]] },
      { type: "strip", part: "B", stage: "Put the Story Together", heading: "Listen to the Example", size: 100, items: [BREAKFAST, SCHOOL, FRIEND], sentence: "*First*, I had breakfast. *Then*, I went to school. *After that*, I saw my friend.", instruction: LISTEN_REPEAT },
      { type: "strip", part: "B", stage: "Put the Story Together", heading: "Put the Story Together", size: 100, items: [BREAKFAST, SCHOOL, LUNCH, FRIEND], frame: ["First, I ___. Then, I ___.", "After that, I ___. Finally, I ___."], instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell the story in order."]] },
      { type: "strip", part: "B", stage: "Put the Story Together", heading: "Put the Story Together 2", size: 100, items: [PARK, PIZZA, CAT, PICTURE], frame: ["First, I ___. Then, I ___.", "After that, I ___. Finally, I ___."], instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell the story in order."]] },
      { type: "strip", part: "B", stage: "Put the Story Together", heading: "Put the Story Together 3", size: 100, items: [HOMEWORK, CAKE, PARK, FRIEND], instruction: NO_HELP("Tell the story in order.") },

      // ---- Part C: story telephone (9 min) ----
      { type: "message", part: "C", stage: "Story Telephone", heading: "Story Telephone", lines: ["Yesterday, Mia went to the park."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "Then, she ___." },
      { type: "message", part: "C", stage: "Story Telephone", heading: "Story Telephone 2", lines: ["Yesterday, Mia went to the park. Then she saw a dog."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "After that, she ___." },
      { type: "message", part: "C", stage: "Story Telephone", heading: "Story Telephone 3", lines: ["Yesterday, Mia went to the park. Then she saw a dog. After that, she ate pizza."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "Finally, she ___." },
      { type: "chips", part: "C", stage: "Story Telephone", heading: "The Whole Story", items: ["First", "Then", "After that", "Finally"], instruction: NO_HELP("Tell the whole story alone.") },
      { type: "message", part: "C", stage: "Story Telephone", heading: "Story Telephone 4", lines: ["Yesterday, Mia went to the park."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "Then, she ___." },
      { type: "message", part: "C", stage: "Story Telephone", heading: "Story Telephone 5", lines: ["Yesterday, Mia went to the park. Then she saw a dog."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "After that, she ___." },
      { type: "message", part: "C", stage: "Story Telephone", heading: "Story Telephone 6", lines: ["Yesterday, Mia went to the park. Then she saw a dog. After that, she ate pizza."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "Finally, she ___." },
      { type: "chips", part: "C", stage: "Story Telephone", heading: "The Whole Story 3", items: ["First", "Then", "After that", "Finally"], instruction: NO_HELP("Tell the whole story alone.") },
      { type: "message", part: "C", stage: "Story Telephone", heading: "Story Telephone 7", lines: ["Yesterday, Mia went to the park."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "Then, she ___." },
      { type: "message", part: "C", stage: "Story Telephone", heading: "Story Telephone 8", lines: ["Yesterday, Mia went to the park. Then she saw a dog."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "After that, she ___." },
      { type: "message", part: "C", stage: "Story Telephone", heading: "Story Telephone 9", lines: ["Yesterday, Mia went to the park. Then she saw a dog. After that, she ate pizza."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "Finally, she ___." },
      { type: "chips", part: "C", stage: "Story Telephone", heading: "The Whole Story 4", items: ["First", "Then", "After that", "Finally"], instruction: NO_HELP("Tell the whole story alone.") },
      { type: "message", part: "C", stage: "Story Telephone", heading: "A New Story", lines: ["Yesterday, Tom went to school."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "Then, he ___." },
      { type: "message", part: "C", stage: "Story Telephone", heading: "A New Story 2", lines: ["Yesterday, Tom went to school. Then he had lunch."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "After that, he ___." },
      { type: "chips", part: "C", stage: "Story Telephone", heading: "The Whole Story 2", items: ["First", "Then", "After that", "Finally"], instruction: NO_HELP("Tell the whole story alone.") },

      // ---- Part D: my yesterday (5 min) ----
      { type: "dialogue", part: "D", stage: "My Yesterday", heading: "My Yesterday", turns: [{ who: "teacher", text: "Tell me about your yesterday. Use three special words." }], instruction: NO_HELP("Say four or five sentences.") },
      { ...TYPE3, part: "D", stage: "Type It!", heading: "Type Your Yesterday" },
      { type: "dialogue", part: "D", stage: "Exit Question", heading: "The Best Part", turns: [{ who: "teacher", text: "What was the most interesting thing you did yesterday?" }], instruction: LISTEN_ANSWER, guide: "The most interesting thing was ___." },
      { type: "wrapup", stage: "You've Landed!", recap: "You can tell a short story about yesterday with First, Then, After that and Finally." },
    ],
  },
  "2-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 2, title: "Let's Review!", subtitle: "Pick the right word and tell it right." },

      // ---- Part A: memory challenge (4 min) ----
      { type: "table", part: "A", stage: "Memory Challenge", heading: "Memory Challenge", rows: [["go", "?"], ["eat", "?"], ["see", "?"], ["have", "?"]], instruction: SAY_PAST },
      { type: "table", part: "A", stage: "Memory Challenge", heading: "Memory Challenge 2", rows: [["do", "?"], ["make", "?"], ["eat", "?"], ["go", "?"]], instruction: SAY_PAST },
      { type: "table", part: "A", stage: "Memory Challenge", heading: "Now Backwards", heads: ["Yesterday", "Today"], rows: [["went", "?"], ["saw", "?"], ["made", "?"], ["ate", "?"]], instruction: [["👀", "Look at the word."], ["🗣️", "Say the word for today."]] },

      // ---- Part B: pick the word (5 min) ----
      { ...one(SCHOOL), size: 100, part: "B", stage: "Pick the Word", heading: "Pick the Word", frame: ["Yesterday, I ___ to school.", "go or went?"], instruction: [["👀", "Look at the two words."], ["🗣️", "Say the sentence."]] },
      { ...one(PIZZA), size: 100, part: "B", stage: "Pick the Word", heading: "Pick the Word 2", frame: ["Yesterday, I ___ pizza.", "eat or ate?"], instruction: [["👀", "Look at the two words."], ["🗣️", "Say the sentence."]] },
      { ...one(FRIEND), size: 100, part: "B", stage: "Pick the Word", heading: "Pick the Word 3", frame: ["Yesterday, I ___ my friend.", "see or saw?"], instruction: [["👀", "Look at the two words."], ["🗣️", "Say the sentence."]] },
      { type: "strip", part: "B", stage: "Pick the Word", heading: "Pick the Word 4", numbered: false, labels: false, size: 100, items: [CAKE, HOMEWORK], question: "Yesterday, what did you make? What did you do?", instruction: NO_HELP("Answer with the past words.") },

      // ---- Part C: connect and time detective (13 min) ----
      { type: "message", part: "C", stage: "Connect the Events", heading: "Connect the Events", lines: ["I went to the park. I saw my friend. I ate ice cream."], instruction: [["📖", "Read the sentences."], ["🗣️", "Join them into a story."]], guide: "First, I ___. Then, I ___." },
      { type: "message", part: "C", stage: "Connect the Events", heading: "Connect the Events 2", lines: ["I made a cake. I went to the store. I ate the cake."], instruction: [["📖", "Read the sentences."], ["🗣️", "Join them into a story."]], guide: "First, I ___. Then, I ___." },
      { type: "message", part: "C", stage: "Connect the Events", heading: "Connect the Events 3", lines: ["I did my homework. I had lunch. I saw a dog."], instruction: NO_HELP("Join them into a story.") },
      { ...one(PARK), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective", sentence: "Clue: *Yesterday*", frame: ["I ___ to the park.", "go or went?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(LUNCH), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective 2", sentence: "Clue: *Today*", frame: ["I ___ lunch.", "eat or ate?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(FRIEND), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective 3", sentence: "Clue: *Yesterday*", frame: ["I ___ my friend.", "see or saw?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(HOMEWORK), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective 4", sentence: "Clue: *Today*", frame: ["I ___ my homework.", "do or did?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(PARK), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective 5", sentence: "Clue: *Yesterday*", frame: ["I ___ to the park.", "go or went?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(LUNCH), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective 6", sentence: "Clue: *Today*", frame: ["I ___ lunch.", "eat or ate?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(FRIEND), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective 7", sentence: "Clue: *Yesterday*", frame: ["I ___ my friend.", "see or saw?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(HOMEWORK), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective 8", sentence: "Clue: *Today*", frame: ["I ___ my homework.", "do or did?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(PARK), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective 9", sentence: "Clue: *Yesterday*", frame: ["I ___ to the park.", "go or went?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(LUNCH), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective 10", sentence: "Clue: *Today*", frame: ["I ___ lunch.", "eat or ate?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(FRIEND), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective 11", sentence: "Clue: *Yesterday*", frame: ["I ___ my friend.", "see or saw?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(HOMEWORK), size: 88, part: "C", stage: "Time Detective", heading: "Time Detective 12", sentence: "Clue: *Today*", frame: ["I ___ my homework.", "do or did?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { type: "chips", part: "C", stage: "Time Detective", heading: "Tell a Story", items: ["First", "Then", "After that", "Finally"], instruction: NO_HELP("Tell a story about yesterday.") },

      // ---- Part D: three things (3 min) ----
      { type: "dialogue", part: "D", stage: "Review", heading: "Three Things", turns: [{ who: "teacher", text: "Tell me three things you did yesterday." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE3, part: "D", stage: "Type It!", heading: "Type Your Yesterday" },
      { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Yesterday", lines: ["Read your sentences to the teacher."], instruction: [["📖", "Read what you typed out loud."]] },
      { type: "wrapup", stage: "You've Landed!", recap: "You can pick the past word and tell a story about yesterday." },
    ],
  },
  "2-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 2, title: "Show What You Know!", subtitle: "Tell about yesterday, all on your own." },

      // ---- Part A: conversation starter (4 min) ----
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Tell Me About Yesterday", turns: [{ who: "teacher", text: "Tell me about yesterday." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Where and What?", turns: [{ who: "teacher", text: "Where did you go? What did you eat?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Who?", turns: [{ who: "teacher", text: "Who did you see? What did you do after that?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: one-minute yesterday (8 min) ----
      { type: "dialogue", part: "B", stage: "One-Minute Yesterday", heading: "One-Minute Yesterday", turns: [{ who: "teacher", text: "You have one minute. Tell me all about yesterday!" }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Talk for one minute."]] },
      { type: "dialogue", part: "B", stage: "One-Minute Yesterday", heading: "More, Please!", turns: [{ who: "teacher", text: "What did you do after that? What happened next?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "B", stage: "One-Minute Yesterday", heading: "A Funny Yesterday", turns: [{ who: "teacher", text: "Now tell me about a funny yesterday. Anything can happen!" }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Talk for one minute."]] },
      { type: "strip", part: "B", stage: "Surprise Story", heading: "Surprise Story", numbered: false, labels: false, size: 84, items: [SCHOOL, PIZZA, DOG, PICTURE, { label: "home", src: "/curriculum/u12-routines/go-home.jpg" }], question: "Tell me a story about these pictures.", instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell your story."]] },
      { type: "strip", part: "B", stage: "Surprise Story", heading: "Surprise Story 2", numbered: false, labels: false, size: 84, items: [PARK, ICECREAM, ELEPHANT, CAKE, FRIEND], question: "Tell me a story about these pictures.", instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell your story."]] },
      { type: "strip", part: "B", stage: "Surprise Story", heading: "Surprise Story 3", numbered: false, labels: false, size: 84, items: [SCHOOL, PIZZA, DOG, PICTURE, { label: "home", src: "/curriculum/u12-routines/go-home.jpg" }], question: "Tell me a story about these pictures.", instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell your story."]] },
      { type: "strip", part: "B", stage: "Surprise Story", heading: "Surprise Story 4", numbered: false, labels: false, size: 84, items: [PARK, ICECREAM, ELEPHANT, CAKE, FRIEND], question: "Tell me a story about these pictures.", instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell your story."]] },
      { type: "strip", part: "B", stage: "Surprise Story", heading: "Surprise Story 5", numbered: false, labels: false, size: 84, items: [SCHOOL, PIZZA, DOG, PICTURE, { label: "home", src: "/curriculum/u12-routines/go-home.jpg" }], question: "Tell me a story about these pictures.", instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell your story."]] },
      { type: "strip", part: "B", stage: "Surprise Story", heading: "Surprise Story 6", numbered: false, labels: false, size: 84, items: [PARK, ICECREAM, ELEPHANT, CAKE, FRIEND], question: "Tell me a story about these pictures.", instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell your story."]] },

      // ---- Part C: a real recount (5 min) ----
      { type: "dialogue", part: "C", stage: "Real Story", heading: "Something Fun", turns: [{ who: "teacher", text: "Tell me about something fun you did this week." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Real Story", heading: "Something Fun 2", turns: [{ who: "teacher", text: "Where did you go? Who did you see? What happened next?" }], instruction: LISTEN_ANSWER },

      // ---- Part D: teacher and student story, then writing (8 min) ----
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together", lines: ["Yesterday, I went to the park."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next event."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 2", lines: ["After that, I ate ice cream."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next event."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 3", lines: ["Finally, I made a picture."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next event."]] },
      { type: "message", part: "D", stage: "Type It!", heading: "Yesterday...", lines: ["Write about something you did this week."], instruction: [["⌨️", "Type three or four sentences in the chat."]] },
      { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Writing", lines: ["Read your sentences to the teacher."], instruction: [["📖", "Read what you typed out loud."]] },
      { type: "wrapup", stage: "Unit 2 Complete!", title: "Unit 2 Complete!", see: "Great job!", recap: "You can tell what happened yesterday, in your own words." },
    ],
  },
  "2-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 2, title: "Unit 2 Test", subtitle: "Show what you can say about yesterday!" },

      // ---- Part A: the six special words ----
      { type: "table", part: "A", stage: "Words", heading: "Say the Word", rows: [["go", "?"], ["eat", "?"], ["see", "?"]], instruction: SAY_PAST },
      { type: "table", part: "A", stage: "Words", heading: "Say the Word 2", rows: [["have", "?"], ["do", "?"], ["make", "?"]], instruction: SAY_PAST },
      { type: "table", part: "A", stage: "Words", heading: "Say the Word 3", rows: [["make", "?"], ["go", "?"], ["do", "?"]], instruction: SAY_PAST },

      // ---- Part B: make sentences ----
      { ...one(SCHOOL), part: "B", stage: "Sentences", heading: "What Happened?", question: "What happened yesterday?", instruction: [["👀", "Look at the picture."], ["🗣️", "Say a sentence about yesterday."]] },
      { ...one(PIZZA), part: "B", stage: "Sentences", heading: "What Happened? 2", question: "What happened yesterday?", instruction: [["👀", "Look at the picture."], ["🗣️", "Say a sentence about yesterday."]] },
      { ...one(DOG), part: "B", stage: "Sentences", heading: "What Happened? 3", question: "What happened yesterday?", instruction: [["👀", "Look at the picture."], ["🗣️", "Say a sentence about yesterday."]] },
      { ...one(BREAKFAST), part: "B", stage: "Sentences", heading: "What Happened? 4", question: "What happened yesterday?", instruction: [["👀", "Look at the picture."], ["🗣️", "Say a sentence about yesterday."]] },
      { ...one(HOMEWORK), part: "B", stage: "Sentences", heading: "What Happened? 5", question: "What happened yesterday?", instruction: [["👀", "Look at the picture."], ["🗣️", "Say a sentence about yesterday."]] },
      { ...one(PICTURE), part: "B", stage: "Sentences", heading: "What Happened? 6", question: "What happened yesterday?", instruction: [["👀", "Look at the picture."], ["🗣️", "Say a sentence about yesterday."]] },

      // ---- Part C: story in order ----
      { type: "strip", part: "C", stage: "Story in Order", heading: "Tell the Story", size: 100, items: [BREAKFAST, SCHOOL, LUNCH, FRIEND], instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell the story in order."]] },
      { type: "strip", part: "C", stage: "Story in Order", heading: "Tell the Story 2", size: 100, items: [PARK, ICECREAM, DOG, HOME_PIC], instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell the story in order."]] },

      // ---- Part D: speaking ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About Yesterday", turns: [{ who: "teacher", text: "Tell me about something you did yesterday." }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say five or six sentences."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me More", turns: [{ who: "teacher", text: "Where did you go? What did you eat? Who did you see?" }], instruction: [["👂", "Listen to the questions."], ["🗣️", "Answer the questions."]] },
      { type: "score", stage: "My Unit 2 Score!", heading: "My Unit 2 Score!", rows: [["Words", "/ 6"], ["Sentences", "/ 6"], ["Story in order", "/ 4"], ["Speaking", "/ 4"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 2 Complete!", title: "Unit 2 Complete!", see: "On to Unit 3!", recap: "You can tell what happened yesterday with went, ate, saw, had, did and made." },
    ],
  },

  // ---------- Unit 3: Weather & Seasons ----------
  "3-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 3, title: "What's the Weather?", subtitle: "Say what the weather is like and what is in the sky." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Look Outside", turns: [{ who: "teacher", text: "Look out of your window. What can you see?" }], instruction: LISTEN_ANSWER, guide: "I can see ___." },

      // ---- Part B: four weather words (5 min) ----
      { type: "strip", part: "B", stage: "Weather Words", heading: "Four Weather Words", numbered: false, size: 100, items: WEATHER4, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Weather Words", heading: "What's the Weather Like?", lines: [WQ, "It is *sunny*."], instruction: LISTEN_REPEAT },
      { ...one(SUNNY), part: "B", stage: "Weather Words", heading: "What's the Weather?", question: WQ, instruction: LISTEN_ANSWER, guide: "It is ___." },
      { ...one(RAINY), part: "B", stage: "Weather Words", heading: "What's the Weather? 2", question: WQ, instruction: LISTEN_ANSWER, guide: "It is ___." },
      { ...one(CLOUDY), part: "B", stage: "Weather Words", heading: "What's the Weather? 3", question: WQ, instruction: LISTEN_ANSWER, guide: "It is ___." },
      { ...one(WINDY), part: "B", stage: "Weather Words", heading: "What's the Weather? 4", question: WQ, instruction: LISTEN_ANSWER, guide: "It is ___." },

      // ---- Part C: the sky and the games (13 min) ----
      { type: "spin", part: "C", stage: "Weather Wheel", heading: "Weather Wheel", items: WEATHER4, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what the weather is."]], guide: "It is ___." },
      { type: "strip", part: "C", stage: "In the Sky", heading: "Three Things in the Sky", numbered: false, size: 100, items: [SUN, CLOUD, RAINBOW], instruction: REPEAT_WORDS },
      { type: "message", part: "C", stage: "In the Sky", heading: "There Is a...", lines: ["There is a *sun*.", "There is a *cloud*.", "There is a *rainbow*."], instruction: LISTEN_REPEAT },
      { ...one(SUN), part: "C", stage: "In the Sky", heading: "What Is in the Sky?", question: "What is in the sky?", instruction: LISTEN_ANSWER, guide: "There is a ___." },
      { ...one(CLOUD), part: "C", stage: "In the Sky", heading: "What Is in the Sky? 2", question: "What is in the sky?", instruction: LISTEN_ANSWER, guide: "There is a ___." },
      { ...one(RAINBOW), part: "C", stage: "In the Sky", heading: "What Is in the Sky? 3", question: "What is in the sky?", instruction: LISTEN_ANSWER, guide: "There is a ___." },
      { type: "strip", part: "C", stage: "In the Sky", heading: "Look at the Sky", numbered: false, labels: false, size: 100, items: [SUN, CLOUD, RAINBOW], instruction: NO_HELP("Say what is in the sky.") },
      { type: "peek", part: "C", stage: "Mystery Weather", heading: "Mystery Weather", item: WINDY, reveal: "It is windy.", question: WQ, instruction: LOOK_SAY("Guess the weather."), guide: "I think it is ___." },
      { type: "peek", part: "C", stage: "Mystery Weather", heading: "Mystery Weather 2", item: RAINY, reveal: "It is rainy.", question: WQ, instruction: LOOK_SAY("Guess the weather."), guide: "I think it is ___." },
      { type: "peek", part: "C", stage: "Mystery Weather", heading: "Mystery Weather 3", item: WINDY, reveal: "It is windy.", question: WQ, instruction: LOOK_SAY("Guess the weather."), guide: "I think it is ___." },
      { type: "peek", part: "C", stage: "Mystery Weather", heading: "Mystery Weather 4", item: RAINY, reveal: "It is rainy.", question: WQ, instruction: LOOK_SAY("Guess the weather."), guide: "I think it is ___." },
      { type: "peek", part: "C", stage: "Mystery Weather", heading: "Mystery Weather 5", item: WINDY, reveal: "It is windy.", question: WQ, instruction: LOOK_SAY("Guess the weather."), guide: "I think it is ___." },
      { type: "peek", part: "C", stage: "Mystery Weather", heading: "Mystery Weather 6", item: RAINY, reveal: "It is rainy.", question: WQ, instruction: LOOK_SAY("Guess the weather."), guide: "I think it is ___." },
      { type: "sprint", part: "C", stage: "Weather Sprint", heading: "Weather Sprint", items: WEATHER4, seconds: 40, instruction: LOOK_SAY("Say a sentence. Be fast!"), guide: "It is ___." },

      // ---- Part D: my weather (4 min) ----
      { type: "dialogue", part: "D", stage: "My Weather", heading: "Where You Live", turns: [{ who: "teacher", text: "What's the weather like where you live today?" }], instruction: LISTEN_ANSWER, guide: "It is ___ today." },
      { ...TYPE2("Today, it is ___. There is a ___."), part: "D", stage: "Type It!", heading: "Type Your Weather" },
      READ_ALOUD,
      { type: "wrapup", stage: "You've Landed!", recap: "You can say what the weather is like and what is in the sky." },
    ],
  },
  "3-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 3, title: "Four Seasons!", subtitle: "Say the four seasons and what there is in each one." },

      // ---- Part A: review (3 min) ----
      { type: "dialogue", part: "A", stage: "Review", heading: "Today's Weather", turns: [{ who: "teacher", text: WQ }], instruction: LISTEN_ANSWER, guide: "It is ___ today." },
      { type: "spin", part: "A", stage: "Review", heading: "Weather Wheel", items: WEATHER4, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what the weather is."]], guide: "It is ___." },

      // ---- Part B: four seasons (5 min) ----
      { type: "strip", part: "B", stage: "Four Seasons", heading: "Four Seasons", numbered: false, size: 100, items: SEASONS, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Four Seasons", heading: "What Is There?", lines: ["In *spring*, there are *flowers*.", "In *autumn*, there are *leaves*.", "In *winter*, there is *snow*."], instruction: LISTEN_REPEAT },
      { ...one(SPRING), part: "B", stage: "Four Seasons", heading: "What Season?", question: "What season is it?", instruction: LISTEN_ANSWER, guide: "It is ___." },
      { ...one(SUMMER), part: "B", stage: "Four Seasons", heading: "What Season? 2", question: "What season is it?", instruction: LISTEN_ANSWER, guide: "It is ___." },
      { ...one(AUTUMN), part: "B", stage: "Four Seasons", heading: "What Season? 3", question: "What season is it?", instruction: LISTEN_ANSWER, guide: "It is ___." },
      { ...one(WINTER), part: "B", stage: "Four Seasons", heading: "What Season? 4", question: "What season is it?", instruction: LISTEN_ANSWER, guide: "It is ___." },

      // ---- Part C: what is there? and the games (13 min) ----
      { ...one(FLOWERS), part: "C", stage: "What Is There?", heading: "What Is There?", question: "What is there in spring?", instruction: LISTEN_ANSWER, guide: "There are ___." },
      { ...one(LEAVES), part: "C", stage: "What Is There?", heading: "What Is There? 2", question: "What is there in autumn?", instruction: LISTEN_ANSWER, guide: "There are ___." },
      { ...one(SNOW), part: "C", stage: "What Is There?", heading: "What Is There? 3", question: "What is there in winter?", instruction: LISTEN_ANSWER, guide: "There is ___." },
      { type: "strip", part: "C", stage: "What Is There?", heading: "Season by Season", numbered: false, size: 100, items: SEASONS, instruction: NO_HELP("Say what there is in each season.") },
      { type: "spin", part: "C", stage: "Season Wheel", heading: "Season Wheel", items: SEASONS, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what the weather is in that season."]], guide: "In ___, it is ___." },
      { type: "peek", part: "C", stage: "Mystery Season", heading: "Mystery Season", item: WINTER, reveal: "It is winter.", question: "What season is it?", instruction: LOOK_SAY("Guess the season."), guide: "I think it is ___." },
      { type: "peek", part: "C", stage: "Mystery Season", heading: "Mystery Season 2", item: AUTUMN, reveal: "It is autumn.", question: "What season is it?", instruction: LOOK_SAY("Guess the season."), guide: "I think it is ___." },
      { type: "peek", part: "C", stage: "Mystery Season", heading: "Mystery Season 3", item: WINTER, reveal: "It is winter.", question: "What season is it?", instruction: LOOK_SAY("Guess the season."), guide: "I think it is ___." },
      { type: "peek", part: "C", stage: "Mystery Season", heading: "Mystery Season 4", item: AUTUMN, reveal: "It is autumn.", question: "What season is it?", instruction: LOOK_SAY("Guess the season."), guide: "I think it is ___." },
      { type: "peek", part: "C", stage: "Mystery Season", heading: "Mystery Season 5", item: WINTER, reveal: "It is winter.", question: "What season is it?", instruction: LOOK_SAY("Guess the season."), guide: "I think it is ___." },
      { type: "peek", part: "C", stage: "Mystery Season", heading: "Mystery Season 6", item: AUTUMN, reveal: "It is autumn.", question: "What season is it?", instruction: LOOK_SAY("Guess the season."), guide: "I think it is ___." },
      { type: "missing", part: "C", stage: "What's Missing?", heading: "What's Missing?", items: SEASONS, instruction: [["👀", "Look at the seasons."], ["🗣️", "Say the season that went away."]], guide: "___ is missing." },
      { type: "sprint", part: "C", stage: "Season Sprint", heading: "Season Sprint", items: [FLOWERS, LEAVES, SNOW, SUN, CLOUD], seconds: 45, instruction: LOOK_SAY("Say what there is. Be fast!"), guide: "There is / are ___." },

      // ---- Part D: my favorite season (4 min) ----
      { type: "dialogue", part: "D", stage: "My Favorite Season", heading: "My Favorite Season", turns: [{ who: "teacher", text: "Which season do you like best? Why?" }], instruction: LISTEN_ANSWER, guide: "My favorite season is ___ because ___." },
      { ...TYPE2("My favorite season is ___. There are ___ in ___."), part: "D", stage: "Type It!", heading: "Type Your Season" },
      { ...READ_ALOUD, heading: "Read Your Season" },
      { type: "wrapup", stage: "You've Landed!", recap: "You can say the four seasons and what there is in each one." },
    ],
  },
  "3-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 3, title: "Weather Talk!", subtitle: "Give a weather report with hot, cold and snowy." },

      // ---- Part A: review (3 min) ----
      { type: "dialogue", part: "A", stage: "Review", heading: "Today's Weather", turns: [{ who: "teacher", text: WQ }], instruction: LISTEN_ANSWER, guide: "It is ___ today." },
      { type: "missing", part: "A", stage: "What's Missing?", heading: "What's Missing?", items: WEATHER4, instruction: [["👀", "Look at the weather."], ["🗣️", "Say the weather that went away."]], guide: "___ is missing." },

      // ---- Part B: three new words (5 min) ----
      { type: "strip", part: "B", stage: "Three New Words", heading: "Three New Words", numbered: false, size: 100, items: [HOT, COLD, SNOWY], instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Three New Words", heading: "Hot, Cold, Snowy", lines: ["It is *hot*.", "It is *cold*.", "It is *snowy*."], instruction: LISTEN_REPEAT },
      { ...one(HOT), part: "B", stage: "Three New Words", heading: "What's the Weather?", question: WQ, instruction: LISTEN_ANSWER, guide: "It is ___." },
      { ...one(COLD), part: "B", stage: "Three New Words", heading: "What's the Weather? 2", question: WQ, instruction: LISTEN_ANSWER, guide: "It is ___." },
      { ...one(SNOWY), part: "B", stage: "Three New Words", heading: "What's the Weather? 3", question: WQ, instruction: LISTEN_ANSWER, guide: "It is ___." },
      { type: "message", part: "B", stage: "Three New Words", heading: "Two Words Together", lines: ["It is *hot* and *sunny*.", "It is *cold* and *windy*."], instruction: LISTEN_REPEAT },

      // ---- Part C: the weather report (13 min) ----
      { type: "strip", part: "C", stage: "Two Words", heading: "Two Words", numbered: false, labels: false, size: 100, items: [HOT, SUNNY], question: WQ, instruction: LISTEN_ANSWER, guide: "It is ___ and ___." },
      { type: "strip", part: "C", stage: "Two Words", heading: "Two Words 2", numbered: false, labels: false, size: 100, items: [COLD, WINDY], question: WQ, instruction: LISTEN_ANSWER, guide: "It is ___ and ___." },
      { type: "strip", part: "C", stage: "Two Words", heading: "Two Words 3", numbered: false, labels: false, size: 100, items: [RAINY, COLD], question: WQ, instruction: LISTEN_ANSWER, guide: "It is ___ and ___." },
      { type: "strip", part: "C", stage: "Weather Report", heading: "Weather Report", numbered: false, size: 100, active: 0, items: [{ ...SUNNY, label: "in the morning" }, { ...CLOUDY, label: "in the afternoon" }, { ...RAINY, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell the weather."]], guide: "In the morning, it is ___." },
      { type: "strip", part: "C", stage: "Weather Report", heading: "Weather Report 2", numbered: false, size: 100, active: 1, items: [{ ...SUNNY, label: "in the morning" }, { ...CLOUDY, label: "in the afternoon" }, { ...RAINY, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell the weather."]], guide: "In the afternoon, it is ___." },
      { type: "strip", part: "C", stage: "Weather Report", heading: "Weather Report 3", numbered: false, size: 100, active: 2, items: [{ ...SUNNY, label: "in the morning" }, { ...CLOUDY, label: "in the afternoon" }, { ...RAINY, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell the weather."]], guide: "In the evening, it is ___." },
      { type: "dice", part: "C", stage: "Weather Dice", heading: "Weather Dice", dice: [{ name: "Weather", items: WEATHER7 }, { name: "In the picture", items: THINGS6 }], instruction: [["👀", "Look at the dice."], ["🗣️", "Say two sentences."]], guide: "It is ___. There is / are ___." },
      { type: "dice", part: "C", stage: "Weather Dice", heading: "Weather Dice 2", dice: [{ name: "Weather", items: WEATHER7 }, { name: "In the picture", items: THINGS6 }], instruction: [["👀", "Look at the dice."], ["🗣️", "Say two sentences."]], guide: "It is ___. There is / are ___." },
      { type: "dice", part: "C", stage: "Weather Dice", heading: "Weather Dice 3", dice: [{ name: "Weather", items: WEATHER7 }, { name: "In the picture", items: THINGS6 }], instruction: [["👀", "Look at the dice."], ["🗣️", "Say two sentences."]], guide: "It is ___. There is / are ___." },
      { type: "peek", part: "C", stage: "Mystery Weather", heading: "Mystery Weather", item: SNOWY, reveal: "It is cold and snowy.", question: WQ, instruction: LOOK_SAY("Guess the weather."), guide: "I think it is ___." },
      { type: "sprint", part: "C", stage: "Reporter Sprint", heading: "Reporter Sprint", items: WEATHER7, seconds: 45, instruction: LOOK_SAY("Say a sentence. Be fast!"), guide: "It is ___." },
      { type: "dialogue", part: "C", stage: "Weather Report", heading: "You Are the Reporter!", turns: [{ who: "teacher", text: "Good morning! What is the weather report today?" }], instruction: NO_HELP("Give the weather report.") },

      // ---- Part D: my weather (4 min) ----
      { type: "dialogue", part: "D", stage: "My Weather", heading: "Where You Live", turns: [{ who: "teacher", text: "What's the weather like where you live?" }], instruction: LISTEN_ANSWER, guide: "It is ___ and ___." },
      { ...TYPE2("Today it is ___ and ___. There is / are ___."), part: "D", stage: "Type It!", heading: "Type Your Weather" },
      READ_ALOUD,
      { type: "wrapup", stage: "You've Landed!", recap: "You can give a weather report with hot, cold and snowy." },
    ],
  },
  "3-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 3, title: "Let's Review!", subtitle: "Play the weather games and tell it right." },

      // ---- Part A: memory challenge (4 min) ----
      { type: "spin", part: "A", stage: "Memory Challenge", heading: "Weather Wheel", items: WEATHER7, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what the weather is."]], guide: "It is ___." },
      { type: "missing", part: "A", stage: "Memory Challenge", heading: "What's Missing?", items: SEASONS, instruction: [["👀", "Look at the seasons."], ["🗣️", "Say the season that went away."]], guide: "___ is missing." },

      // ---- Part B: true or false (5 min) ----
      { ...one(SUNNY), size: 100, part: "B", stage: "True or False?", heading: "True or False?", sentence: "It is *rainy*.", instruction: LOOK_SAY("Say true or false. Fix it if it is false.") },
      { ...one(COLD), size: 100, part: "B", stage: "True or False?", heading: "True or False? 2", sentence: "It is *cold*.", instruction: LOOK_SAY("Say true or false. Fix it if it is false.") },
      { ...one(FLOWERS), size: 100, part: "B", stage: "True or False?", heading: "True or False? 3", sentence: "There are *leaves*.", instruction: LOOK_SAY("Say true or false. Fix it if it is false.") },
      { ...one(WINTER), size: 100, part: "B", stage: "True or False?", heading: "True or False? 4", sentence: "It is *winter*.", instruction: LOOK_SAY("Say true or false. Fix it if it is false.") },
      { ...one(SPRING), size: 100, part: "B", stage: "True or False?", heading: "True or False? 5", sentence: "It is *autumn*.", instruction: LOOK_SAY("Say true or false. Fix it if it is false.") },

      // ---- Part C: games and season talk (13 min) ----
      { type: "dice", part: "C", stage: "Weather Dice", heading: "Weather Dice", dice: [{ name: "Weather", items: WEATHER7 }, { name: "In the picture", items: THINGS6 }], instruction: [["👀", "Look at the dice."], ["🗣️", "Say two sentences."]], guide: "It is ___. There is / are ___." },
      { type: "dice", part: "C", stage: "Weather Dice", heading: "Weather Dice 2", dice: [{ name: "Weather", items: WEATHER7 }, { name: "In the picture", items: THINGS6 }], instruction: [["👀", "Look at the dice."], ["🗣️", "Say two sentences."]], guide: "It is ___. There is / are ___." },
      { type: "dice", part: "C", stage: "Weather Dice", heading: "Weather Dice 3", dice: [{ name: "Weather", items: WEATHER7 }, { name: "In the picture", items: THINGS6 }], instruction: [["👀", "Look at the dice."], ["🗣️", "Say two sentences."]], guide: "It is ___. There is / are ___." },
      { type: "sprint", part: "C", stage: "Beat the Clock", heading: "Beat the Clock", items: [SUNNY, RAINY, SNOWY, HOT, COLD, FLOWERS, LEAVES, SUN], seconds: 45, instruction: LOOK_SAY("Say a sentence. Be fast!") },
      { type: "peek", part: "C", stage: "Mystery Season", heading: "Mystery Season", item: SUMMER, reveal: "It is summer.", question: "What season is it?", instruction: LOOK_SAY("Guess the season."), guide: "I think it is ___." },
      { type: "strip", part: "C", stage: "Season Talk", heading: "Season Talk", numbered: false, size: 100, items: SEASONS, frame: ["In ___, there are ___.", "In ___, it is ___."], instruction: [["👀", "Look at the seasons."], ["🗣️", "Talk about each season."]] },
      { type: "dialogue", part: "C", stage: "Season Talk", heading: "Winter and Summer", turns: [{ who: "teacher", text: "What's the weather like in winter? What's the weather like in summer?" }], instruction: LISTEN_ANSWER, guide: "In ___, it is ___." },
      { type: "spin", part: "C", stage: "Season Wheel", heading: "Season Wheel", items: SEASONS, instruction: NO_HELP("Say two sentences about the season.") },

      // ---- Part D: three things (3 min) ----
      { type: "dialogue", part: "D", stage: "Review", heading: "Three Things", turns: [{ who: "teacher", text: "Tell me three things about the weather today." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE2("Today it is ___. There is / are ___."), part: "D", stage: "Type It!", heading: "Type Your Weather" },
      READ_ALOUD,
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about weather and seasons with there is and there are." },
    ],
  },
  "3-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 3, title: "Show What You Know!", subtitle: "Talk about weather and seasons, all on your own." },

      // ---- Part A: conversation starter (4 min) ----
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Tell Me About the Weather", turns: [{ who: "teacher", text: "Tell me about the weather today." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Where You Live", turns: [{ who: "teacher", text: "What's the weather like where you live? Is it hot or cold?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Seasons", turns: [{ who: "teacher", text: "Which season do you like? Why?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: the weather reporter (8 min) ----
      { type: "dialogue", part: "B", stage: "Weather Reporter", heading: "One-Minute Report", turns: [{ who: "teacher", text: "You are the weather reporter! You have one minute. Tell me about the weather!" }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Talk for one minute."]] },
      { type: "dialogue", part: "B", stage: "Weather Reporter", heading: "More, Please!", turns: [{ who: "teacher", text: "What's the weather like in the morning? And in the evening? What is in the sky?" }], instruction: LISTEN_ANSWER },
      { type: "peek", part: "B", stage: "Mystery Picture", heading: "Mystery Picture", item: SPRING, reveal: "Spring! There are flowers.", question: "Tell me about this picture.", instruction: [["👀", "Look at the picture."], ["🗣️", "Tell what you can see."]] },
      { type: "peek", part: "B", stage: "Mystery Picture", heading: "Mystery Picture 2", item: WINTER, reveal: "Winter! There is snow.", question: "Tell me about this picture.", instruction: [["👀", "Look at the picture."], ["🗣️", "Tell what you can see."]] },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best!", items: [SUNNY, RAINY, CLOUDY, WINDY, SNOWY, HOT, COLD, SUN, CLOUD, RAINBOW, FLOWERS, LEAVES, SNOW], seconds: 60, labels: false, instruction: [["🤔", "No help this time!"], ["🗣️", "Say a sentence. Be fast!"]] },
      { type: "dice", part: "B", stage: "Weather Dice", heading: "Weather Report Dice", dice: [{ name: "Season", items: SEASONS }, { name: "Weather", items: WEATHER7 }, { name: "In the picture", items: THINGS6 }], instruction: NO_HELP("Say a weather report.") },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best! 2", items: [SUNNY, RAINY, CLOUDY, WINDY, SNOWY, HOT, COLD, SUN, CLOUD, RAINBOW, FLOWERS, LEAVES, SNOW], seconds: 60, labels: false, instruction: [["🤔", "No help this time!"], ["🗣️", "Say a sentence. Be fast!"]] },
      { type: "dice", part: "B", stage: "Weather Dice", heading: "Weather Report Dice 2", dice: [{ name: "Season", items: SEASONS }, { name: "Weather", items: WEATHER7 }, { name: "In the picture", items: THINGS6 }], instruction: NO_HELP("Say a weather report.") },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best! 3", items: [SUNNY, RAINY, CLOUDY, WINDY, SNOWY, HOT, COLD, SUN, CLOUD, RAINBOW, FLOWERS, LEAVES, SNOW], seconds: 60, labels: false, instruction: [["🤔", "No help this time!"], ["🗣️", "Say a sentence. Be fast!"]] },
      { type: "dice", part: "B", stage: "Weather Dice", heading: "Weather Report Dice 3", dice: [{ name: "Season", items: SEASONS }, { name: "Weather", items: WEATHER7 }, { name: "In the picture", items: THINGS6 }], instruction: NO_HELP("Say a weather report.") },

      // ---- Part C: a real talk (5 min) ----
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "Favorite Weather", turns: [{ who: "teacher", text: "What is your favorite weather? Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "Your Country", turns: [{ who: "teacher", text: "What seasons are there in your country? What is the weather like?" }], instruction: LISTEN_ANSWER },

      // ---- Part D: teacher and student report, then writing (8 min) ----
      { type: "message", part: "D", stage: "Report Together", heading: "Report Together", lines: ["Good morning! It is *cold* today."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Report Together", heading: "Report Together 2", lines: ["In the afternoon, it is *windy*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Report Together", heading: "Report Together 3", lines: ["In the evening, there are *clouds*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Type It!", heading: "The Weather...", lines: ["Write about the weather today."], instruction: [["⌨️", "Type three or four sentences in the chat."]] },
      { ...READ_ALOUD, heading: "Read Your Writing" },
      { type: "wrapup", stage: "Unit 3 Complete!", title: "Unit 3 Complete!", see: "Great job!", recap: "You can talk about the weather and the seasons, in your own words." },
    ],
  },
  "3-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 3, title: "Unit 3 Test", subtitle: "Show what you can say about weather and seasons!" },

      // ---- Part A: weather words ----
      { ...one(SUNNY), part: "A", stage: "Weather Words", heading: "What's the Weather?", question: WQ, instruction: LISTEN_ANSWER },
      { ...one(RAINY), part: "A", stage: "Weather Words", heading: "What's the Weather? 2", question: WQ, instruction: LISTEN_ANSWER },
      { ...one(CLOUDY), part: "A", stage: "Weather Words", heading: "What's the Weather? 3", question: WQ, instruction: LISTEN_ANSWER },
      { ...one(WINDY), part: "A", stage: "Weather Words", heading: "What's the Weather? 4", question: WQ, instruction: LISTEN_ANSWER },
      { ...one(SNOWY), part: "A", stage: "Weather Words", heading: "What's the Weather? 5", question: WQ, instruction: LISTEN_ANSWER },
      { ...one(HOT), part: "A", stage: "Weather Words", heading: "What's the Weather? 6", question: WQ, instruction: LISTEN_ANSWER },

      // ---- Part B: seasons ----
      { type: "strip", part: "B", stage: "Seasons", heading: "Seasons", numbered: false, labels: false, size: 100, items: [SPRING, SUMMER], instruction: LOOK_SAY("Say the seasons.") },
      { type: "strip", part: "B", stage: "Seasons", heading: "Seasons 2", numbered: false, labels: false, size: 100, items: [AUTUMN, WINTER], instruction: LOOK_SAY("Say the seasons.") },

      // ---- Part C: there is / there are ----
      { type: "strip", part: "C", stage: "There Is / There Are", heading: "What Is There?", numbered: false, labels: false, size: 100, items: [SUN, CLOUD], instruction: LOOK_SAY("Say what there is.") },
      { type: "strip", part: "C", stage: "There Is / There Are", heading: "What Is There? 2", numbered: false, labels: false, size: 100, items: [RAINBOW, FLOWERS], instruction: LOOK_SAY("Say what there is.") },
      { type: "strip", part: "C", stage: "There Is / There Are", heading: "What Is There? 3", numbered: false, labels: false, size: 100, items: [LEAVES, SNOW], instruction: LOOK_SAY("Say what there is.") },

      // ---- Part D: speaking ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About the Weather", turns: [{ who: "teacher", text: "Tell me about the weather today. What is it like? What is in the sky?" }], instruction: [["👂", "Listen to the questions."], ["🗣️", "Answer the questions."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "My Favorite Season", turns: [{ who: "teacher", text: "Which season do you like best? Why?" }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say two or three sentences."]] },
      { type: "score", stage: "My Unit 3 Score!", heading: "My Unit 3 Score!", rows: [["Weather words", "/ 6"], ["Seasons", "/ 4"], ["There is / are", "/ 6"], ["Speaking", "/ 4"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 3 Complete!", title: "Unit 3 Complete!", see: "On to Unit 4!", recap: "You can talk about the weather and the seasons with there is and there are." },
    ],
  },

  // ---------- Unit 4: Around Town ----------
  "4-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 4, title: "Places in Town!", subtitle: "Name places in town and say what is next to what." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Today's Weather", turns: [{ who: "teacher", text: WQ }], instruction: LISTEN_ANSWER, guide: "It is ___ today." },

      // ---- Part B: four places (5 min) ----
      { type: "strip", part: "B", stage: "Four Places", heading: "Four Places", numbered: false, size: 100, items: PLACES4, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Four Places", heading: "There Is a...", lines: ["There is a *bank*.", "There is a *hospital*."], instruction: LISTEN_REPEAT },
      { ...one(T_STORE), part: "B", stage: "Four Places", heading: "What Is It?", question: "What is it?", instruction: LISTEN_ANSWER, guide: "It is a ___." },
      { ...one(T_LIBRARY), part: "B", stage: "Four Places", heading: "What Is It? 2", question: "What is it?", instruction: LISTEN_ANSWER, guide: "It is a ___." },
      { ...one(T_HOSPITAL), part: "B", stage: "Four Places", heading: "What Is It? 3", question: "What is it?", instruction: LISTEN_ANSWER, guide: "It is a ___." },
      { ...one(T_BANK), part: "B", stage: "Four Places", heading: "What Is It? 4", question: "What is it?", instruction: LISTEN_ANSWER, guide: "It is a ___." },

      // ---- Part C: next to, and the games (13 min) ----
      { type: "spin", part: "C", stage: "Place Wheel", heading: "Place Wheel", items: PLACES6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what there is."]], guide: "There is a ___." },
      { type: "message", part: "C", stage: "Next To", heading: "Next To", lines: ["The store is *next to* the school.", "The bank is *next to* the park."], instruction: LISTEN_REPEAT },
      { type: "town", part: "C", stage: "Next To", heading: "Next To", rows: [[T_SCHOOL, T_STORE, T_PARK]], size: 88, question: "What is next to the store?", instruction: MAPQ, guide: "The ___ is next to the store." },
      { type: "town", part: "C", stage: "Next To", heading: "Next To 2", rows: [[T_LIBRARY, T_BANK, T_HOSPITAL]], size: 88, question: "Where is the bank?", instruction: MAPQ, guide: "The bank is next to the ___." },
      { type: "town", part: "C", stage: "Next To", heading: "Next To 3", rows: [[T_PARK, T_LIBRARY, T_SCHOOL]], size: 88, question: "Where is the library?", instruction: MAPQ, guide: "The library is next to the ___." },
      { type: "town", part: "C", stage: "Next To", heading: "Next To 5", rows: [[T_SCHOOL, T_STORE, T_PARK]], size: 88, question: "What is next to the store?", instruction: MAPQ, guide: "The ___ is next to the store." },
      { type: "town", part: "C", stage: "Next To", heading: "Next To 6", rows: [[T_LIBRARY, T_BANK, T_HOSPITAL]], size: 88, question: "Where is the bank?", instruction: MAPQ, guide: "The bank is next to the ___." },
      { type: "town", part: "C", stage: "Next To", heading: "Next To 7", rows: [[T_PARK, T_LIBRARY, T_SCHOOL]], size: 88, question: "Where is the library?", instruction: MAPQ, guide: "The library is next to the ___." },
      { type: "town", part: "C", stage: "Next To", heading: "Next To 8", rows: [[T_SCHOOL, T_STORE, T_PARK]], size: 88, question: "What is next to the store?", instruction: MAPQ, guide: "The ___ is next to the store." },
      { type: "town", part: "C", stage: "Next To", heading: "Next To 9", rows: [[T_LIBRARY, T_BANK, T_HOSPITAL]], size: 88, question: "Where is the bank?", instruction: MAPQ, guide: "The bank is next to the ___." },
      { type: "town", part: "C", stage: "Next To", heading: "Next To 10", rows: [[T_PARK, T_LIBRARY, T_SCHOOL]], size: 88, question: "Where is the library?", instruction: MAPQ, guide: "The library is next to the ___." },
      { type: "peek", part: "C", stage: "Mystery Place", heading: "Mystery Place", item: T_HOSPITAL, reveal: "It is a hospital.", question: "What place is it?", instruction: LOOK_SAY("Guess the place."), guide: "I think it is a ___." },
      { type: "peek", part: "C", stage: "Mystery Place", heading: "Mystery Place 2", item: T_LIBRARY, reveal: "It is a library.", question: "What place is it?", instruction: LOOK_SAY("Guess the place."), guide: "I think it is a ___." },
      { type: "missing", part: "C", stage: "What's Missing?", heading: "What's Missing?", items: PLACES4, instruction: [["👀", "Look at the places."], ["🗣️", "Say the place that went away."]], guide: "The ___ is missing." },
      { type: "sprint", part: "C", stage: "Town Sprint", heading: "Town Sprint", items: PLACES6, seconds: 40, instruction: LOOK_SAY("Say what there is. Be fast!"), guide: "There is a ___." },

      // ---- Part D: my town (4 min) ----
      { type: "dialogue", part: "D", stage: "My Town", heading: "My Town", turns: [{ who: "teacher", text: "What places are in your town?" }], instruction: LISTEN_ANSWER, guide: "There is a ___ in my town." },
      { ...TYPE2("There is a ___. The ___ is next to the ___."), part: "D", stage: "Type It!", heading: "Type Your Town" },
      READ_TOWN,
      { type: "wrapup", stage: "You've Landed!", recap: "You can name places in town and say what is next to what." },
    ],
  },
  "4-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 4, title: "Where Is It?", subtitle: "Say where places are with behind and between." },

      // ---- Part A: review (3 min) ----
      { type: "town", part: "A", stage: "Review", heading: "Next To", rows: [[T_SCHOOL, T_STORE, T_PARK]], size: 88, question: "What is next to the school?", instruction: MAPQ, guide: "The ___ is next to the school." },
      { type: "spin", part: "A", stage: "Review", heading: "Place Wheel", items: PLACES6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what there is."]], guide: "There is a ___." },

      // ---- Part B: behind and between (5 min) ----
      { type: "strip", part: "B", stage: "Two New Places", heading: "Two New Places", numbered: false, size: 100, items: [T_SUPERMARKET, T_RESTAURANT], instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Behind", heading: "Behind", lines: ["The park is *behind* the school."], instruction: LISTEN_REPEAT },
      { type: "town", part: "B", stage: "Behind", heading: "Behind", rows: TOWN_BEHIND, size: 56, question: "What is behind the school?", instruction: MAPQ, guide: "The ___ is behind the school." },
      { type: "town", part: "B", stage: "Behind", heading: "Behind 2", rows: [[T_LIBRARY, T_SUPERMARKET, null], [T_HOSPITAL, T_BANK, T_STORE]], size: 56, question: "What is behind the bank?", instruction: MAPQ, guide: "The ___ is behind the bank." },
      { type: "message", part: "B", stage: "Between", heading: "Between", lines: ["The bank is *between* the store and the library."], instruction: LISTEN_REPEAT },
      { type: "town", part: "B", stage: "Between", heading: "Between", rows: [[T_STORE, T_BANK, T_LIBRARY]], size: 88, question: "Where is the bank?", instruction: MAPQ, guide: "The bank is between the ___ and the ___." },
      { type: "town", part: "B", stage: "Between", heading: "Between 2", rows: [[T_SCHOOL, T_PARK, T_HOSPITAL]], size: 88, question: "Where is the park?", instruction: MAPQ, guide: "The park is between the ___ and the ___." },
      { type: "town", part: "B", stage: "Behind", heading: "Behind 4", rows: TOWN_BEHIND, size: 56, question: "What is behind the school?", instruction: MAPQ, guide: "The ___ is behind the school." },
      { type: "town", part: "B", stage: "Behind", heading: "Behind 5", rows: [[T_LIBRARY, T_SUPERMARKET, null], [T_HOSPITAL, T_BANK, T_STORE]], size: 56, question: "What is behind the bank?", instruction: MAPQ, guide: "The ___ is behind the bank." },
      { type: "town", part: "B", stage: "Between", heading: "Between 4", rows: [[T_STORE, T_BANK, T_LIBRARY]], size: 88, question: "Where is the bank?", instruction: MAPQ, guide: "The bank is between the ___ and the ___." },
      { type: "town", part: "B", stage: "Between", heading: "Between 5", rows: [[T_SCHOOL, T_PARK, T_HOSPITAL]], size: 88, question: "Where is the park?", instruction: MAPQ, guide: "The park is between the ___ and the ___." },

      // ---- Part C: games and true or false (13 min) ----
      { type: "dice", part: "C", stage: "Where Is It?", heading: "Where Is It?", dice: [{ name: "Place", items: PLACES6 }, { name: "Where?", items: PREPS2 }, { name: "Place", items: PLACES6 }], instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "The ___ is ___ the ___." },
      { type: "town", part: "C", stage: "True or False?", heading: "True or False?", rows: TOWN_BEHIND, size: 56, sentence: "The park is *behind* the school.", instruction: TFQ },
      { type: "town", part: "C", stage: "True or False?", heading: "True or False? 2", rows: TOWN_BEHIND, size: 56, sentence: "The restaurant is *next to* the bank.", instruction: TFQ },
      { type: "town", part: "C", stage: "True or False?", heading: "True or False? 3", rows: [[T_STORE, T_BANK, T_LIBRARY]], size: 88, sentence: "The bank is *between* the store and the library.", instruction: TFQ },
      { type: "town", part: "C", stage: "True or False?", heading: "True or False? 4", rows: [[T_STORE, T_BANK, T_LIBRARY]], size: 88, sentence: "The library is *between* the store and the bank.", instruction: TFQ },
      { type: "peek", part: "C", stage: "Mystery Place", heading: "Mystery Place", item: T_SUPERMARKET, reveal: "It is a supermarket.", question: "What place is it?", instruction: LOOK_SAY("Guess the place."), guide: "I think it is a ___." },
      { type: "missing", part: "C", stage: "What's Missing?", heading: "What's Missing?", items: [T_SCHOOL, T_PARK, T_SUPERMARKET, T_RESTAURANT], instruction: [["👀", "Look at the places."], ["🗣️", "Say the place that went away."]], guide: "The ___ is missing." },
      { type: "town", part: "C", stage: "Tell Me About the Town", heading: "The Whole Town", rows: [[T_LIBRARY, T_SUPERMARKET, T_RESTAURANT], [T_SCHOOL, T_STORE, T_PARK]], size: 56, instruction: NO_HELP("Tell where the places are.") },

      // ---- Part D: my town (4 min) ----
      { type: "dialogue", part: "D", stage: "My Town", heading: "Near My School", turns: [{ who: "teacher", text: "Where is your school? What is next to it?" }], instruction: LISTEN_ANSWER },
      { ...TYPE2("The ___ is next to the ___. The ___ is behind the ___."), part: "D", stage: "Type It!", heading: "Type Your Town" },
      READ_TOWN,
      { type: "wrapup", stage: "You've Landed!", recap: "You can say where places are with next to, behind and between." },
    ],
  },
  "4-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 4, title: "Giving Directions!", subtitle: "Tell a car where to go with straight, left and right." },

      // ---- Part A: review (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "missing", part: "A", stage: "Review", heading: "What's Missing?", items: PLACES4, instruction: [["👀", "Look at the places."], ["🗣️", "Say the place that went away."]], guide: "The ___ is missing." },

      // ---- Part B: four direction words (5 min) ----
      { type: "dirs", part: "B", stage: "Direction Words", heading: "Four Direction Words", items: DIR_ITEMS, size: 96, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Direction Words", heading: "Go, Turn, Stop", lines: ["Go *straight*. Turn *left*.", "Turn *right*. *Stop*!"], instruction: LISTEN_REPEAT },
      { type: "dirs", part: "B", stage: "Direction Words", heading: "What Do I Do?", items: [DIR_ITEMS[0]], labels: false, size: 120, instruction: LOOK_SAY("Say the direction.") },
      { type: "dirs", part: "B", stage: "Direction Words", heading: "What Do I Do? 2", items: [DIR_ITEMS[1]], labels: false, size: 120, instruction: LOOK_SAY("Say the direction.") },
      { type: "dirs", part: "B", stage: "Direction Words", heading: "What Do I Do? 3", items: [DIR_ITEMS[2]], labels: false, size: 120, instruction: LOOK_SAY("Say the direction.") },
      { type: "dirs", part: "B", stage: "Direction Words", heading: "What Do I Do? 4", items: [DIR_ITEMS[3]], labels: false, size: 120, instruction: LOOK_SAY("Say the direction.") },

      // ---- Part C: be the GPS (13 min) ----
      { type: "route", part: "C", stage: "Be the GPS", heading: "Be the GPS", grid: MAP_BANK, places: BUILD, goal: "B", question: "Take the car to the bank.", instruction: GPSQ, guide: "Go straight. Stop!" },
      { type: "message", part: "C", stage: "Left and Right", heading: "Left and Right", lines: ["The bank is on the *left*.", "The store is on the *right*."], instruction: LISTEN_REPEAT },
      { type: "route", part: "C", stage: "Be the GPS", heading: "Be the GPS 2", grid: MAP_LIBRARY, places: BUILD, goal: "L", question: "Take the car to the library.", instruction: GPSQ, guide: "Go straight. Turn ___. Stop!" },
      { type: "route", part: "C", stage: "Be the GPS", heading: "Be the GPS 5", grid: MAP_LIBRARY, places: BUILD, goal: "L", question: "Take the car to the library.", instruction: GPSQ, guide: "Go straight. Turn ___. Stop!" },
      { type: "route", part: "C", stage: "Be the GPS", heading: "Be the GPS 3", grid: MAP_HOSPITAL, places: BUILD, goal: "H", question: "Take the car to the hospital.", instruction: GPSQ, guide: "Go straight. Turn ___. Go straight. Stop!" },
      { type: "route", part: "C", stage: "Be the GPS", heading: "Be the GPS 4", grid: MAP_MARKET, places: BUILD, goal: "M", question: "Take the car to the supermarket.", instruction: NO_HELP("Tell the teacher where to go.") },
      { type: "spin", part: "C", stage: "Direction Wheel", heading: "Direction Wheel", items: DIR_ITEMS.map((d) => ({ label: d.word })), instruction: [["👀", "Look at the wheel."], ["🗣️", "Say the direction."]] },

      // ---- Part D: my directions (4 min) ----
      { type: "route", part: "D", stage: "You Are the Driver", heading: "You Are the Driver!", grid: MAP_STORE, places: BUILD, goal: "T", question: "Take the car to the store.", instruction: NO_HELP("Tell the teacher where to go.") },
      { type: "postcard", part: "D", stage: "Type It!", heading: "Type the Directions", line: "Go straight. Turn ___. Stop! The ___ is on the ___.", instruction: [["⌨️", "Type the directions in the chat."]] },
      { type: "message", part: "D", stage: "Read It Aloud", heading: "Read Your Directions", lines: ["Read your directions to the teacher."], instruction: [["📖", "Read what you typed out loud."]] },
      { type: "wrapup", stage: "You've Landed!", recap: "You can tell a car where to go with straight, left, right and stop." },
    ],
  },
  "4-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 4, title: "Let's Review!", subtitle: "Play the town games and tell it right." },

      // ---- Part A: memory challenge (4 min) ----
      { type: "missing", part: "A", stage: "Memory Challenge", heading: "What's Missing?", items: PLACES4, instruction: [["👀", "Look at the places."], ["🗣️", "Say the place that went away."]], guide: "The ___ is missing." },
      { type: "spin", part: "A", stage: "Memory Challenge", heading: "Place Wheel", items: PLACES8, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what there is."]], guide: "There is a ___." },

      // ---- Part B: true or false (5 min) ----
      { type: "town", part: "B", stage: "True or False?", heading: "True or False?", rows: [[T_SCHOOL, T_STORE, T_PARK]], size: 88, sentence: "The store is *next to* the park.", instruction: TFQ },
      { type: "town", part: "B", stage: "True or False?", heading: "True or False? 2", rows: [[T_LIBRARY, T_BANK, T_HOSPITAL]], size: 88, sentence: "The hospital is *between* the bank and the library.", instruction: TFQ },
      { type: "town", part: "B", stage: "True or False?", heading: "True or False? 3", rows: TOWN_BEHIND, size: 56, sentence: "The restaurant is *behind* the bank.", instruction: TFQ },
      { type: "town", part: "B", stage: "True or False?", heading: "True or False? 4", rows: TOWN_BEHIND, size: 56, sentence: "The park is *behind* the store.", instruction: TFQ },
      { type: "town", part: "B", stage: "True or False?", heading: "True or False? 5", rows: [[T_PARK, T_LIBRARY, T_SCHOOL]], size: 88, sentence: "The library is *between* the park and the school.", instruction: TFQ },

      // ---- Part C: games and directions (13 min) ----
      { type: "route", part: "C", stage: "Be the GPS", heading: "Be the GPS", grid: MAP_STORE, places: BUILD, goal: "T", question: "Take the car to the store.", instruction: GPSQ, guide: "Go straight. Stop!" },
      { type: "route", part: "C", stage: "Be the GPS", heading: "Be the GPS 2", grid: MAP_RESTAURANT, places: BUILD, goal: "R", question: "Take the car to the restaurant.", instruction: GPSQ, guide: "Go straight. Turn ___. Go straight. Stop!" },
      { type: "route", part: "C", stage: "Be the GPS", heading: "Be the GPS 4", grid: MAP_RESTAURANT, places: BUILD, goal: "R", question: "Take the car to the restaurant.", instruction: GPSQ, guide: "Go straight. Turn ___. Go straight. Stop!" },
      { type: "route", part: "C", stage: "Be the GPS", heading: "Be the GPS 5", grid: MAP_RESTAURANT, places: BUILD, goal: "R", question: "Take the car to the restaurant.", instruction: GPSQ, guide: "Go straight. Turn ___. Go straight. Stop!" },
      { type: "dice", part: "C", stage: "Where Is It?", heading: "Where Is It?", dice: [{ name: "Place", items: PLACES8 }, { name: "Where?", items: PREPS2 }, { name: "Place", items: PLACES8 }], instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "The ___ is ___ the ___." },
      { type: "peek", part: "C", stage: "Mystery Place", heading: "Mystery Place", item: T_BANK, reveal: "It is a bank.", question: "What place is it?", instruction: LOOK_SAY("Guess the place."), guide: "I think it is a ___." },
      { type: "town", part: "C", stage: "Tell Me About the Town", heading: "The Whole Town", rows: [[T_HOSPITAL, T_SUPERMARKET, T_LIBRARY], [T_BANK, T_SCHOOL, T_RESTAURANT]], size: 56, instruction: NO_HELP("Tell where the places are.") },
      { type: "route", part: "C", stage: "Be the GPS", heading: "Be the GPS 3", grid: MAP_LIBRARY, places: BUILD, goal: "L", question: "Take the car to the library.", instruction: NO_HELP("Tell the teacher where to go.") },

      // ---- Part D: three things (3 min) ----
      { type: "dialogue", part: "D", stage: "Review", heading: "Three Things", turns: [{ who: "teacher", text: "Tell me three things about a town." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE2("There is a ___. The ___ is next to the ___."), part: "D", stage: "Type It!", heading: "Type Your Town" },
      READ_TOWN,
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about places, where they are and how to get there." },
    ],
  },
  "4-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 4, title: "Show What You Know!", subtitle: "Talk about a town and give directions, all on your own." },

      // ---- Part A: conversation starter (4 min) ----
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Tell Me About Your Town", turns: [{ who: "teacher", text: "Tell me about your town." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "What Is There?", turns: [{ who: "teacher", text: "What places are there? What is next to your school?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Favorite Place", turns: [{ who: "teacher", text: "What is your favorite place in town? Why?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: town tour and GPS (8 min) ----
      { type: "town", part: "B", stage: "Town Tour", heading: "Town Tour", rows: [[T_LIBRARY, T_SUPERMARKET, T_RESTAURANT], [T_SCHOOL, T_STORE, T_PARK]], size: 56, instruction: NO_HELP("Tell about this town.") },
      { type: "town", part: "B", stage: "Town Tour", heading: "Town Tour 2", rows: [[T_HOSPITAL, null, T_BANK], [T_PARK, T_LIBRARY, T_SCHOOL]], size: 56, instruction: NO_HELP("Tell about this town.") },
      { type: "route", part: "B", stage: "Be the GPS", heading: "Be the GPS", grid: MAP_RESTAURANT, places: BUILD, goal: "R", question: "Take the car to the restaurant.", instruction: NO_HELP("Tell the teacher where to go.") },
      { type: "route", part: "B", stage: "Be the GPS", heading: "Be the GPS 2", grid: MAP_MARKET, places: BUILD, goal: "M", question: "Take the car to the supermarket.", instruction: NO_HELP("Tell the teacher where to go.") },
      { type: "route", part: "B", stage: "Be the GPS", heading: "Be the GPS 3", grid: MAP_RESTAURANT, places: BUILD, goal: "R", question: "Take the car to the restaurant.", instruction: NO_HELP("Tell the teacher where to go.") },
      { type: "route", part: "B", stage: "Be the GPS", heading: "Be the GPS 4", grid: MAP_MARKET, places: BUILD, goal: "M", question: "Take the car to the supermarket.", instruction: NO_HELP("Tell the teacher where to go.") },
      { type: "dice", part: "B", stage: "Where Is It?", heading: "Where Is It?", dice: [{ name: "Place", items: PLACES8 }, { name: "Where?", items: PREPS2 }, { name: "Place", items: PLACES8 }], instruction: NO_HELP("Say the sentence.") },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best!", items: PLACES8, seconds: 60, labels: false, instruction: [["🤔", "No help this time!"], ["🗣️", "Say a sentence. Be fast!"]] },

      // ---- Part C: a real talk (5 min) ----
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "Where Is It?", turns: [{ who: "teacher", text: "Where is your favorite place? What is next to it?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "How Do I Get There?", turns: [{ who: "teacher", text: "How do I get to your favorite place?" }], instruction: LISTEN_ANSWER },

      // ---- Part D: teacher and student town, then writing (8 min) ----
      { type: "message", part: "D", stage: "Town Together", heading: "Town Together", lines: ["There is a big *park* in my town."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Town Together", heading: "Town Together 2", lines: ["The *library* is next to the park."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Town Together", heading: "Town Together 3", lines: ["The *school* is behind the library."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Type It!", heading: "My Town...", lines: ["Write about your town."], instruction: [["⌨️", "Type three or four sentences in the chat."]] },
      { ...READ_TOWN, heading: "Read Your Writing" },
      { type: "wrapup", stage: "Unit 4 Complete!", title: "Unit 4 Complete!", see: "Great job!", recap: "You can talk about a town and tell someone how to get there." },
    ],
  },
  "4-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 4, title: "Unit 4 Test", subtitle: "Show what you can say about a town!" },

      // ---- Part A: places ----
      { ...one(T_STORE), part: "A", stage: "Places", heading: "What Is It?", question: "What is it?", instruction: LISTEN_ANSWER },
      { ...one(T_LIBRARY), part: "A", stage: "Places", heading: "What Is It? 2", question: "What is it?", instruction: LISTEN_ANSWER },
      { ...one(T_HOSPITAL), part: "A", stage: "Places", heading: "What Is It? 3", question: "What is it?", instruction: LISTEN_ANSWER },
      { ...one(T_BANK), part: "A", stage: "Places", heading: "What Is It? 4", question: "What is it?", instruction: LISTEN_ANSWER },
      { ...one(T_SUPERMARKET), part: "A", stage: "Places", heading: "What Is It? 5", question: "What is it?", instruction: LISTEN_ANSWER },
      { ...one(T_RESTAURANT), part: "A", stage: "Places", heading: "What Is It? 6", question: "What is it?", instruction: LISTEN_ANSWER },

      // ---- Part B: where is it? ----
      { type: "town", part: "B", stage: "Where Is It?", heading: "Where Is It?", rows: [[T_STORE, T_BANK, T_LIBRARY]], size: 88, question: "Where is the bank? Where is the store?", instruction: MAPQ },
      { type: "town", part: "B", stage: "Where Is It?", heading: "Where Is It? 2", rows: TOWN_BEHIND, size: 56, question: "What is behind the school? What is behind the bank?", instruction: MAPQ },
      { type: "town", part: "B", stage: "Where Is It?", heading: "Where Is It? 3", rows: [[T_HOSPITAL, T_PARK, T_SCHOOL]], size: 88, question: "Where is the park? What is next to the hospital?", instruction: MAPQ },

      // ---- Part C: directions ----
      { type: "route", part: "C", stage: "Directions", heading: "Give Directions", grid: MAP_LIBRARY, places: BUILD, goal: "L", question: "Take the car to the library.", instruction: GPSQ },
      { type: "route", part: "C", stage: "Directions", heading: "Give Directions 2", grid: MAP_HOSPITAL, places: BUILD, goal: "H", question: "Take the car to the hospital.", instruction: GPSQ },

      // ---- Part D: speaking ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About Your Town", turns: [{ who: "teacher", text: "Tell me about your town. What places are there?" }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say three or four sentences."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Favorite Place", turns: [{ who: "teacher", text: "What is your favorite place? Where is it?" }], instruction: [["👂", "Listen to the questions."], ["🗣️", "Answer the questions."]] },
      { type: "score", stage: "My Unit 4 Score!", heading: "My Unit 4 Score!", rows: [["Places", "/ 6"], ["Where is it?", "/ 6"], ["Directions", "/ 4"], ["Speaking", "/ 4"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 4 Complete!", title: "Unit 4 Complete!", see: "On to Unit 5!", recap: "You can talk about places in town, where they are and how to get there." },
    ],
  },

  // ---------- Unit 5: Let's Go Shopping ----------
  "5-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 5, title: "At the Store!", subtitle: "Ask how much things are and say the prices." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "missing", part: "A", stage: "What's Missing?", heading: "What's Missing?", items: [S_APPLE, S_BANANA, S_BOOK, S_BALL], instruction: [["👀", "Look at the things."], ["🗣️", "Say the thing that went away."]], guide: "The ___ is missing." },

      // ---- Part B: how much is it? (5 min) ----
      { type: "strip", part: "B", stage: "How Much?", heading: "Six Things to Buy", numbered: false, size: 84, items: SHOP6, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "How Much?", heading: "How Much Is It?", lines: [HM, "It's *ten* pesos."], instruction: REPEAT_SENT },
      { type: "strip", part: "B", stage: "How Much?", heading: "How Much Is It?", numbered: false, size: 110, items: [TAG(S_APPLE)], question: HM, instruction: LISTEN_ANSWER, guide: "It's ___ pesos." },
      { type: "strip", part: "B", stage: "How Much?", heading: "How Much Is It? 2", numbered: false, size: 110, items: [TAG(S_COOKIE)], question: HM, instruction: LISTEN_ANSWER, guide: "It's ___ pesos." },
      { type: "strip", part: "B", stage: "How Much?", heading: "How Much Is It? 3", numbered: false, size: 110, items: [TAG(S_BOOK)], question: HM, instruction: LISTEN_ANSWER, guide: "It's ___ pesos." },
      { type: "message", part: "B", stage: "How Much?", heading: "How Much Are They?", lines: [HMP, "They're *twenty* pesos."], instruction: REPEAT_SENT },
      { type: "strip", part: "B", stage: "How Much?", heading: "How Much Are They?", numbered: false, size: 110, items: [TAG(S_BANANA, 2)], question: HMP, instruction: LISTEN_ANSWER, guide: "They're ___ pesos." },
      { type: "strip", part: "B", stage: "How Much?", heading: "How Much Are They? 2", numbered: false, size: 110, items: [TAG(S_COOKIE, 2)], question: HMP, instruction: LISTEN_ANSWER, guide: "They're ___ pesos." },

      // ---- Part C: the shop and the games (13 min) ----
      { type: "spin", part: "C", stage: "Price Wheel", heading: "Price Wheel", items: PRICE_WORDS([5, 10, 20]), instruction: [["👀", "Look at the wheel."], ["🗣️", "Say the price."]], guide: "It's ___ pesos." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_JUICE)], size: 84, instruction: [["👀", "Look at the shelf."], ["🗣️", "Ask how much it is."]], guide: "How much is the ___?" },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 2", items: [STOCKN(S_APPLE, 2), STOCKN(S_COOKIE, 2), STOCKN(S_BANANA, 2), STOCKN(S_JUICE, 2)], size: 84, instruction: [["👀", "Look at the shelf."], ["🗣️", "Ask how much they are."]], guide: "How much are the ___?" },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 3", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_JUICE)], size: 84, instruction: [["👀", "Look at the shelf."], ["🗣️", "Ask how much it is."]], guide: "How much is the ___?" },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 4", items: [STOCKN(S_APPLE, 2), STOCKN(S_COOKIE, 2), STOCKN(S_BANANA, 2), STOCKN(S_JUICE, 2)], size: 84, instruction: [["👀", "Look at the shelf."], ["🗣️", "Ask how much they are."]], guide: "How much are the ___?" },
      { type: "peek", part: "C", stage: "Mystery Thing", heading: "Mystery Thing", item: S_COOKIE, reveal: "It is a cookie.", question: "What is it?", instruction: LOOK_SAY("Guess the thing."), guide: "I think it is a ___." },
      { type: "sprint", part: "C", stage: "Price Sprint", heading: "Price Sprint", items: [TAG(S_APPLE), TAG(S_COOKIE), TAG(S_BOOK), TAG(S_JUICE), TAG(S_BANANA), TAG(S_BALL)], seconds: 40, instruction: LOOK_SAY("Say the price. Be fast!"), guide: "It's ___ pesos." },
      { type: "strip", part: "C", stage: "True or False?", heading: "True or False?", numbered: false, size: 100, items: [TAG(S_APPLE)], sentence: "The apple is *ten* pesos.", instruction: TF_PRICE },
      { type: "strip", part: "C", stage: "True or False?", heading: "True or False? 2", numbered: false, size: 100, items: [TAG(S_BOOK)], sentence: "The book is *twenty* pesos.", instruction: TF_PRICE },
      { type: "strip", part: "C", stage: "True or False?", heading: "True or False? 3", numbered: false, size: 100, items: [TAG(S_JUICE)], sentence: "The juice is *five* pesos.", instruction: TF_PRICE },

      // ---- Part D: my shopping (4 min) ----
      { type: "dialogue", part: "D", stage: "My Shopping", heading: "What Do You Want?", turns: [{ who: "teacher", text: "What do you want to buy?" }], instruction: LISTEN_ANSWER, guide: "I want a ___." },
      { ...TYPE2("I want a ___. It's ___ pesos."), part: "D", stage: "Type It!", heading: "Type Your Shopping" },
      READ_SHOP,
      { type: "wrapup", stage: "You've Landed!", recap: "You can ask how much things are and say the prices." },
    ],
  },
  "5-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 5, title: "Counting Money!", subtitle: "Count to fifty and say how much things cost." },

      // ---- Part A: review (3 min) ----
      { type: "spin", part: "A", stage: "Review", heading: "Price Wheel", items: PRICE_WORDS([5, 10, 20]), instruction: [["👀", "Look at the wheel."], ["🗣️", "Say the price."]], guide: "It's ___ pesos." },
      { type: "strip", part: "A", stage: "Review", heading: "How Much Is It?", numbered: false, size: 110, items: [TAG(S_JUICE)], question: HM, instruction: LISTEN_ANSWER, guide: "It's ___ pesos." },

      // ---- Part B: three new numbers and how many (5 min) ----
      { type: "chips", part: "B", stage: "Count by Tens", heading: "Count by Tens", items: ["10", "20", "30", "40", "50"], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say the numbers."]] },
      { type: "message", part: "B", stage: "Count by Tens", heading: "Thirty, Forty, Fifty", lines: ["It's *thirty* pesos.", "It's *forty* pesos.", "It's *fifty* pesos."], instruction: REPEAT_SENT },
      { type: "strip", part: "B", stage: "Count by Tens", heading: "How Much Is It?", numbered: false, size: 110, items: [TAG(S_BAG)], question: HM, instruction: LISTEN_ANSWER, guide: "It's ___ pesos." },
      { type: "strip", part: "B", stage: "Count by Tens", heading: "How Much Is It? 2", numbered: false, size: 110, items: [TAG(S_TOY)], question: HM, instruction: LISTEN_ANSWER, guide: "It's ___ pesos." },
      { type: "strip", part: "B", stage: "Count by Tens", heading: "How Much Is It? 3", numbered: false, size: 110, items: [TAG(S_KITE)], question: HM, instruction: LISTEN_ANSWER, guide: "It's ___ pesos." },
      { type: "strip", part: "B", stage: "How Many?", heading: "How Many?", numbered: false, labels: false, size: 110, items: [{ ...S_APPLE, count: 3 }], question: "How many apples?", instruction: LISTEN_ANSWER, guide: "There are ___ apples." },
      { type: "strip", part: "B", stage: "How Many?", heading: "How Many? 2", numbered: false, labels: false, size: 110, items: [{ ...S_BOOK, count: 2 }], question: "How many books?", instruction: LISTEN_ANSWER, guide: "There are ___ books." },

      // ---- Part C: how much are they? and the shop (13 min) ----
      { type: "message", part: "C", stage: "How Much Are They?", heading: "Two Apples", lines: ["One apple is *five* pesos.", "Two apples are *ten* pesos."], instruction: REPEAT_SENT },
      { type: "strip", part: "C", stage: "How Much Are They?", heading: "How Much Are They?", numbered: false, size: 110, items: [TAG(S_COOKIE, 2)], question: HMP, instruction: LISTEN_ANSWER, guide: "They're ___ pesos." },
      { type: "strip", part: "C", stage: "How Much Are They?", heading: "How Much Are They? 2", numbered: false, size: 110, items: [TAG(S_BOOK, 2)], question: HMP, instruction: LISTEN_ANSWER, guide: "They're ___ pesos." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_BAG)], budget: 30, size: 80, instruction: SHELFQ, guide: "I want a ___." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 2", items: [STOCK(S_BANANA), STOCK(S_JUICE), STOCK(S_BALL), STOCK(S_TOY)], budget: 40, size: 80, instruction: SHELFQ, guide: "I want a ___." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 3", items: [STOCK(S_COOKIE), STOCK(S_HAT), STOCK(S_KITE), STOCK(S_BOOK)], budget: 50, size: 80, instruction: NO_HELP("Say what you want.") },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 4", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_BAG)], budget: 30, size: 80, instruction: SHELFQ, guide: "I want a ___." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 5", items: [STOCK(S_BANANA), STOCK(S_JUICE), STOCK(S_BALL), STOCK(S_TOY)], budget: 40, size: 80, instruction: SHELFQ, guide: "I want a ___." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 6", items: [STOCK(S_COOKIE), STOCK(S_HAT), STOCK(S_KITE), STOCK(S_BOOK)], budget: 50, size: 80, instruction: NO_HELP("Say what you want.") },
      { type: "dice", part: "C", stage: "Shopping Dice", heading: "Shopping Dice", dice: [{ name: "How many?", items: [{ label: "two" }, { label: "three" }] }, { name: "Thing", items: [S_APPLE, S_COOKIE, S_BANANA, S_BOOK, S_BALL, S_JUICE] }, { name: "Price", items: PRICE_WORDS([10, 20, 30, 40, 50]) }], size: 92, instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "___ ___ are ___." },
      { type: "sprint", part: "C", stage: "Price Sprint", heading: "Price Sprint", items: [TAG(S_APPLE), TAG(S_TOY), TAG(S_COOKIE), TAG(S_KITE), TAG(S_BOOK), TAG(S_BAG), TAG(S_HAT), TAG(S_JUICE)], seconds: 45, instruction: LOOK_SAY("Say the price. Be fast!"), guide: "It's ___ pesos." },
      { type: "missing", part: "C", stage: "What's Missing?", heading: "What's Missing?", items: [S_BAG, S_HAT, S_TOY, S_KITE], instruction: [["👀", "Look at the things."], ["🗣️", "Say the thing that went away."]], guide: "The ___ is missing." },

      // ---- Part D: my shopping (4 min) ----
      { type: "dialogue", part: "D", stage: "My Shopping", heading: "Fifty Pesos", turns: [{ who: "teacher", text: "You have fifty pesos. What do you want to buy?" }], instruction: LISTEN_ANSWER, guide: "I want a ___ and a ___." },
      { ...TYPE2("I want a ___. It's ___ pesos."), part: "D", stage: "Type It!", heading: "Type Your Shopping" },
      READ_SHOP,
      { type: "wrapup", stage: "You've Landed!", recap: "You can count to fifty and say how much things cost." },
    ],
  },
  "5-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 5, title: "Let's Buy Something!", subtitle: "Buy something politely, from hello to thank you." },

      // ---- Part A: review (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "shop", part: "A", stage: "Review", heading: "Shop Shelf", items: [STOCK(S_BOOK), STOCK(S_BAG), STOCK(S_TOY), STOCK(S_KITE)], size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Ask how much it is."]], guide: "How much is the ___?" },

      // ---- Part B: polite words (5 min) ----
      { type: "chips", part: "B", stage: "Polite Words", heading: "Shopping Words", items: ["Hello.", "I'd like a ___, please.", "Here you are.", "Thank you."], instruction: REPEAT_SENT },
      { type: "dialogue", part: "B", stage: "Polite Words", heading: "At the Shop", turns: [{ who: "student", text: "Hello. I'd like a book, please." }, { who: "teacher", text: "Here you are. It's twenty pesos." }, { who: "student", text: "Thank you." }], instruction: REPEAT_SENT },
      { type: "strip", part: "B", stage: "Polite Words", heading: "Can I Help You?", numbered: false, size: 100, items: [TAG(S_BOOK)], question: "Hello! Can I help you?", instruction: LISTEN_ANSWER, guide: "I'd like a ___, please." },
      { type: "strip", part: "B", stage: "Polite Words", heading: "Can I Help You? 2", numbered: false, size: 100, items: [TAG(S_BALL)], question: "Hello! Can I help you?", instruction: LISTEN_ANSWER, guide: "I'd like a ___, please." },
      { type: "strip", part: "B", stage: "Polite Words", heading: "Can I Help You? 3", numbered: false, size: 100, items: [TAG(S_JUICE)], question: "Hello! Can I help you?", instruction: LISTEN_ANSWER, guide: "I'd like a ___, please." },

      // ---- Part C: the whole shop talk and the games (13 min) ----
      { type: "spin", part: "C", stage: "Customer Wheel", heading: "Customer Wheel", items: SHOP6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Buy it politely."]], guide: "I'd like a ___, please." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Buy Two Things", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_BAG)], budget: 50, size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Buy two things. Be polite."]], guide: "Hello. I'd like a ___ and a ___, please." },
      { type: "dialogue", part: "C", stage: "The Busy Cashier", heading: "Sorry!", turns: [{ who: "teacher", text: "Sorry, we don't have bananas." }], instruction: LISTEN_ANSWER, guide: "Okay. I'd like a ___, please." },
      { type: "dialogue", part: "C", stage: "The Busy Cashier", heading: "Sorry! 2", turns: [{ who: "teacher", text: "Sorry, we don't have juice." }], instruction: LISTEN_ANSWER, guide: "Okay. I'd like a ___, please." },
      { type: "sprint", part: "C", stage: "Please Sprint", heading: "Please Sprint", items: SHOP6, seconds: 40, instruction: LOOK_SAY("Buy it politely. Be fast!"), guide: "I'd like a ___, please." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Buy Two Things 2", items: [STOCK(S_BANANA), STOCK(S_JUICE), STOCK(S_BALL), STOCK(S_TOY)], budget: 40, size: 80, instruction: NO_HELP("Buy two things. Be polite.") },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Buy Two Things 3", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_BAG)], budget: 50, size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Buy two things. Be polite."]], guide: "Hello. I'd like a ___ and a ___, please." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Buy Two Things 4", items: [STOCK(S_BANANA), STOCK(S_JUICE), STOCK(S_BALL), STOCK(S_TOY)], budget: 40, size: 80, instruction: NO_HELP("Buy two things. Be polite.") },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Buy Two Things 5", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_BAG)], budget: 50, size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Buy two things. Be polite."]], guide: "Hello. I'd like a ___ and a ___, please." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Buy Two Things 6", items: [STOCK(S_BANANA), STOCK(S_JUICE), STOCK(S_BALL), STOCK(S_TOY)], budget: 40, size: 80, instruction: NO_HELP("Buy two things. Be polite.") },
      { type: "dialogue", part: "C", stage: "The Whole Talk", heading: "The Whole Shop Talk", turns: [{ who: "teacher", text: "Hello! Can I help you?" }], instruction: NO_HELP("Have the whole shop talk.") },

      // ---- Part D: my shopping talk (4 min) ----
      { type: "postcard", part: "D", stage: "Type It!", heading: "Type Your Shop Talk", line: "Hello. I'd like a ___, please. How much is it? Thank you.", instruction: [["⌨️", "Type the shop talk in the chat."]] },
      { ...READ_SHOP, heading: "Read Your Shop Talk" },
      { type: "wrapup", stage: "You've Landed!", recap: "You can buy something politely, from hello to thank you." },
    ],
  },
  "5-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 5, title: "Let's Review!", subtitle: "Play the shop games and tell it right." },

      // ---- Part A: memory challenge (4 min) ----
      { type: "missing", part: "A", stage: "Memory Challenge", heading: "What's Missing?", items: [S_APPLE, S_COOKIE, S_BOOK, S_BAG], instruction: [["👀", "Look at the things."], ["🗣️", "Say the thing that went away."]], guide: "The ___ is missing." },
      { type: "spin", part: "A", stage: "Memory Challenge", heading: "Price Wheel", items: PRICE_WORDS([5, 10, 20, 30, 40, 50]), instruction: [["👀", "Look at the wheel."], ["🗣️", "Say the price."]], guide: "It's ___ pesos." },

      // ---- Part B: true or false (5 min) ----
      { type: "strip", part: "B", stage: "True or False?", heading: "True or False?", numbered: false, size: 100, items: [TAG(S_BAG)], sentence: "The bag is *thirty* pesos.", instruction: TF_PRICE },
      { type: "strip", part: "B", stage: "True or False?", heading: "True or False? 2", numbered: false, size: 100, items: [TAG(S_TOY)], sentence: "The toy is *fifty* pesos.", instruction: TF_PRICE },
      { type: "strip", part: "B", stage: "True or False?", heading: "True or False? 3", numbered: false, size: 100, items: [TAG(S_BOOK, 2)], sentence: "The books are *forty* pesos.", instruction: TF_PRICE },
      { type: "strip", part: "B", stage: "True or False?", heading: "True or False? 4", numbered: false, size: 100, items: [TAG(S_COOKIE, 2)], sentence: "The cookies are *ten* pesos.", instruction: TF_PRICE },
      { type: "strip", part: "B", stage: "True or False?", heading: "True or False? 5", numbered: false, size: 100, items: [TAG(S_APPLE)], sentence: "The apple is *five* pesos.", instruction: TF_PRICE },

      // ---- Part C: games and shopping (13 min) ----
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_BALL)], budget: 20, size: 80, instruction: SHELFQ, guide: "I'd like a ___, please." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 2", items: [STOCK(S_JUICE), STOCK(S_HAT), STOCK(S_TOY), STOCK(S_KITE)], budget: 50, size: 80, instruction: NO_HELP("Buy things. Be polite.") },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 3", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_BALL)], budget: 20, size: 80, instruction: SHELFQ, guide: "I'd like a ___, please." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 4", items: [STOCK(S_JUICE), STOCK(S_HAT), STOCK(S_TOY), STOCK(S_KITE)], budget: 50, size: 80, instruction: NO_HELP("Buy things. Be polite.") },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 5", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_BALL)], budget: 20, size: 80, instruction: SHELFQ, guide: "I'd like a ___, please." },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf 6", items: [STOCK(S_JUICE), STOCK(S_HAT), STOCK(S_TOY), STOCK(S_KITE)], budget: 50, size: 80, instruction: NO_HELP("Buy things. Be polite.") },
      { type: "dice", part: "C", stage: "Shopping Dice", heading: "Shopping Dice", dice: [{ name: "How many?", items: [{ label: "two" }, { label: "three" }] }, { name: "Thing", items: [S_APPLE, S_COOKIE, S_BANANA, S_BOOK, S_BALL, S_JUICE] }, { name: "Price", items: PRICE_WORDS([10, 20, 30, 40, 50]) }], size: 92, instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "___ ___ are ___." },
      { type: "sprint", part: "C", stage: "Beat the Clock", heading: "Beat the Clock", items: [TAG(S_APPLE), TAG(S_TOY), TAG(S_COOKIE), TAG(S_KITE), TAG(S_BOOK), TAG(S_BAG), TAG(S_BALL, 2), TAG(S_JUICE)], seconds: 45, instruction: LOOK_SAY("Say the price. Be fast!") },
      { type: "dialogue", part: "C", stage: "The Busy Cashier", heading: "Sorry!", turns: [{ who: "teacher", text: "Sorry, we don't have books." }], instruction: LISTEN_ANSWER, guide: "Okay. I'd like a ___, please." },
      { type: "dialogue", part: "C", stage: "The Whole Talk", heading: "The Whole Shop Talk", turns: [{ who: "teacher", text: "Hello! Can I help you?" }], instruction: NO_HELP("Have the whole shop talk.") },

      // ---- Part D: three things (3 min) ----
      { type: "dialogue", part: "D", stage: "Review", heading: "Three Things", turns: [{ who: "teacher", text: "Tell me three things about shopping." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE2("I want a ___. It's ___ pesos."), part: "D", stage: "Type It!", heading: "Type Your Shopping" },
      READ_SHOP,
      { type: "wrapup", stage: "You've Landed!", recap: "You can ask for things, say the price and buy them politely." },
    ],
  },
  "5-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 5, title: "Show What You Know!", subtitle: "Shop and talk about shopping, all on your own." },

      // ---- Part A: conversation starter (4 min) ----
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Tell Me About Shopping", turns: [{ who: "teacher", text: "Tell me about shopping." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "What Do You Buy?", turns: [{ who: "teacher", text: "What do you like to buy? Where do you go shopping?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Who Goes With You?", turns: [{ who: "teacher", text: "Who goes shopping with you?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: the customer and the cashier (8 min) ----
      { type: "shop", part: "B", stage: "Mystery Store", heading: "Mystery Store", items: [STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_HAT), STOCK(S_KITE)], budget: 50, size: 80, instruction: NO_HELP("Buy things. Be polite.") },
      { type: "dialogue", part: "B", stage: "The Price Changed!", heading: "The Price Changed!", turns: [{ who: "teacher", text: "Oh! The book is now forty pesos." }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say what you think."]] },
      { type: "shop", part: "B", stage: "Switch Roles", heading: "You Are the Cashier!", items: [STOCK(S_BOOK), STOCK(S_BALL), STOCK(S_COOKIE), STOCK(S_BAG)], question: "The teacher wants the book and the ball. How much is it?", size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Tell the teacher the price."]] },
      { type: "shop", part: "B", stage: "Switch Roles", heading: "You Are the Cashier! 2", items: [STOCK(S_TOY), STOCK(S_JUICE), STOCK(S_APPLE), STOCK(S_HAT)], question: "The teacher wants the toy and the apple. How much is it?", size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Tell the teacher the price."]] },
      { type: "shop", part: "B", stage: "Switch Roles", heading: "You Are the Cashier! 3", items: [STOCK(S_BOOK), STOCK(S_BALL), STOCK(S_COOKIE), STOCK(S_BAG)], question: "The teacher wants the book and the ball. How much is it?", size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Tell the teacher the price."]] },
      { type: "shop", part: "B", stage: "Switch Roles", heading: "You Are the Cashier! 4", items: [STOCK(S_TOY), STOCK(S_JUICE), STOCK(S_APPLE), STOCK(S_HAT)], question: "The teacher wants the toy and the apple. How much is it?", size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Tell the teacher the price."]] },
      { type: "shop", part: "B", stage: "Switch Roles", heading: "You Are the Cashier! 5", items: [STOCK(S_BOOK), STOCK(S_BALL), STOCK(S_COOKIE), STOCK(S_BAG)], question: "The teacher wants the book and the ball. How much is it?", size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Tell the teacher the price."]] },
      { type: "shop", part: "B", stage: "Switch Roles", heading: "You Are the Cashier! 6", items: [STOCK(S_TOY), STOCK(S_JUICE), STOCK(S_APPLE), STOCK(S_HAT)], question: "The teacher wants the toy and the apple. How much is it?", size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Tell the teacher the price."]] },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best!", items: [TAG(S_APPLE), TAG(S_TOY), TAG(S_COOKIE), TAG(S_KITE), TAG(S_BOOK), TAG(S_BAG), TAG(S_BALL, 2), TAG(S_JUICE, 2), TAG(S_HAT)], seconds: 60, instruction: [["🤔", "No help this time!"], ["🗣️", "Say the price. Be fast!"]] },

      // ---- Part C: a real talk (5 min) ----
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "Your Store", turns: [{ who: "teacher", text: "Tell me about a store near your home. What can you buy there?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "Your Money", turns: [{ who: "teacher", text: "You have fifty pesos. What do you want to buy? Why?" }], instruction: LISTEN_ANSWER },

      // ---- Part D: teacher and student story, then writing (8 min) ----
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together", lines: ["Yesterday, I went to the *store*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 2", lines: ["I saw a *book*. It's twenty pesos."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 3", lines: ["After that, I went *home*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Type It!", heading: "My Shopping...", lines: ["Write about a shopping trip."], instruction: [["⌨️", "Type three or four sentences in the chat."]] },
      { ...READ_SHOP, heading: "Read Your Writing" },
      { type: "wrapup", stage: "Unit 5 Complete!", title: "Unit 5 Complete!", see: "Great job!", recap: "You can shop, ask the price and talk about shopping, in your own words." },
    ],
  },
  "5-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 5, title: "Unit 5 Test", subtitle: "Show what you can say about shopping!" },

      // ---- Part A: things ----
      { ...one(S_APPLE), part: "A", stage: "Things", heading: "What Is It?", question: "What is it?", instruction: LISTEN_ANSWER },
      { ...one(S_COOKIE), part: "A", stage: "Things", heading: "What Is It? 2", question: "What is it?", instruction: LISTEN_ANSWER },
      { ...one(S_JUICE), part: "A", stage: "Things", heading: "What Is It? 3", question: "What is it?", instruction: LISTEN_ANSWER },
      { ...one(S_BOOK), part: "A", stage: "Things", heading: "What Is It? 4", question: "What is it?", instruction: LISTEN_ANSWER },
      { ...one(S_BALL), part: "A", stage: "Things", heading: "What Is It? 5", question: "What is it?", instruction: LISTEN_ANSWER },
      { ...one(S_BAG), part: "A", stage: "Things", heading: "What Is It? 6", question: "What is it?", instruction: LISTEN_ANSWER },

      // ---- Part B: prices ----
      { type: "strip", part: "B", stage: "Prices", heading: "How Much?", numbered: false, size: 100, items: [TAG(S_APPLE), TAG(S_BOOK)], instruction: [["👀", "Look at the prices."], ["🗣️", "Say how much they are."]] },
      { type: "strip", part: "B", stage: "Prices", heading: "How Much? 2", numbered: false, size: 100, items: [TAG(S_COOKIE), TAG(S_TOY)], instruction: [["👀", "Look at the prices."], ["🗣️", "Say how much they are."]] },
      { type: "strip", part: "B", stage: "Prices", heading: "How Much? 3", numbered: false, size: 100, items: [TAG(S_BANANA, 2), TAG(S_BALL, 2)], instruction: [["👀", "Look at the prices."], ["🗣️", "Say how much they are."]] },

      // ---- Part C: shopping talk ----
      { type: "shop", part: "C", stage: "Shopping Talk", heading: "Buy Two Things", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_BAG)], budget: 50, size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Buy two things. Be polite."]] },
      { type: "shop", part: "C", stage: "Shopping Talk", heading: "Buy Two Things 2", items: [STOCK(S_BANANA), STOCK(S_JUICE), STOCK(S_BALL), STOCK(S_HAT)], budget: 40, size: 80, instruction: [["👀", "Look at the shelf."], ["🗣️", "Buy two things. Be polite."]] },

      // ---- Part D: speaking ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About Shopping", turns: [{ who: "teacher", text: "What do you like to buy? Where do you go shopping?" }], instruction: [["👂", "Listen to the questions."], ["🗣️", "Answer the questions."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "A Store Near You", turns: [{ who: "teacher", text: "Tell me about a store near your home." }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say three or four sentences."]] },
      { type: "score", stage: "My Unit 5 Score!", heading: "My Unit 5 Score!", rows: [["Things", "/ 6"], ["Prices", "/ 6"], ["Shopping talk", "/ 4"], ["Speaking", "/ 4"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 5 Complete!", title: "Unit 5 Complete!", see: "On to Unit 6!", recap: "You can ask how much things are, say prices and shop politely." },
    ],
  },

  // ---------- Unit 6: Jobs People Do ----------
  "6-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 6, title: "What's Your Job?", subtitle: "Say what job a person has with He is a... and She is a..." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Who Helps You?", turns: [{ who: "teacher", text: "Who helps you at school?" }], instruction: LISTEN_ANSWER, guide: "My ___ helps me." },

      // ---- Part B: five jobs (5 min) ----
      { type: "strip", part: "B", stage: "Five Jobs", heading: "Five Jobs", numbered: false, size: 92, items: JOBS5, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Five Jobs", heading: "He or She?", lines: ["He is a *doctor*.", "She is a *chef*."], instruction: REPEAT_SENT },
      { ...one(J_DOCTOR), part: "B", stage: "Five Jobs", heading: "Who Is This?", question: WHO, instruction: LISTEN_ANSWER, guide: "He is a ___." },
      { ...one(J_CHEF), part: "B", stage: "Five Jobs", heading: "Who Is This? 2", question: WHO, instruction: LISTEN_ANSWER, guide: "She is a ___." },
      { ...one(J_DRIVER), part: "B", stage: "Five Jobs", heading: "Who Is This? 3", question: WHO, instruction: LISTEN_ANSWER, guide: "He is a ___." },
      { ...one(J_FARMER), part: "B", stage: "Five Jobs", heading: "Who Is This? 4", question: WHO, instruction: LISTEN_ANSWER, guide: "She is a ___." },
      { ...one(J_TEACHER), part: "B", stage: "Five Jobs", heading: "Who Is This? 5", question: WHO, instruction: LISTEN_ANSWER, guide: "She is a ___." },

      // ---- Part C: the games (13 min) ----
      { type: "spin", part: "C", stage: "Job Wheel", heading: "Job Wheel", items: JOBS5, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say the job."]], guide: "He / She is a ___." },
      { type: "strip", part: "C", stage: "He or She?", heading: "He or She?", numbered: false, labels: false, size: 100, items: [J_DOCTOR, J_CHEF], instruction: LOOK_SAY("Tell about the two people."), guide: "He is a ___. She is a ___." },
      { type: "strip", part: "C", stage: "He or She?", heading: "He or She? 2", numbered: false, labels: false, size: 100, items: [J_FARMER, J_DRIVER], instruction: LOOK_SAY("Tell about the two people."), guide: "She is a ___. He is a ___." },
      { type: "peek", part: "C", stage: "Mystery Worker", heading: "Mystery Worker", item: J_DOCTOR, reveal: "He is a doctor.", question: WHO, instruction: LOOK_SAY("Guess the job."), guide: "I think he is a ___." },
      { type: "peek", part: "C", stage: "Mystery Worker", heading: "Mystery Worker 2", item: J_FARMER, reveal: "She is a farmer.", question: WHO, instruction: LOOK_SAY("Guess the job."), guide: "I think she is a ___." },
      { type: "peek", part: "C", stage: "Mystery Worker", heading: "Mystery Worker 3", item: J_DOCTOR, reveal: "He is a doctor.", question: WHO, instruction: LOOK_SAY("Guess the job."), guide: "I think he is a ___." },
      { type: "peek", part: "C", stage: "Mystery Worker", heading: "Mystery Worker 4", item: J_FARMER, reveal: "She is a farmer.", question: WHO, instruction: LOOK_SAY("Guess the job."), guide: "I think she is a ___." },
      { type: "missing", part: "C", stage: "What's Missing?", heading: "What's Missing?", items: JOBS5, size: 84, instruction: [["👀", "Look at the jobs."], ["🗣️", "Say the job that went away."]], guide: "The ___ is missing." },
      { type: "sprint", part: "C", stage: "Job Sprint", heading: "Job Sprint", items: JOBS5, seconds: 40, instruction: LOOK_SAY("Say the job. Be fast!"), guide: "He / She is a ___." },
      { ...one(J_CHEF), size: 100, part: "C", stage: "True or False?", heading: "True or False?", sentence: "She is a *chef*.", instruction: TF_PICTURE },
      { ...one(J_DRIVER), size: 100, part: "C", stage: "True or False?", heading: "True or False? 2", sentence: "He is a *farmer*.", instruction: TF_PICTURE },
      { ...one(J_TEACHER), size: 100, part: "C", stage: "True or False?", heading: "True or False? 3", sentence: "She is a *doctor*.", instruction: TF_PICTURE },

      // ---- Part D: my family's jobs (4 min) ----
      { type: "dialogue", part: "D", stage: "My Family", heading: "My Family's Jobs", turns: [{ who: "teacher", text: "What is your mom's job? What is your dad's job?" }], instruction: LISTEN_ANSWER, guide: "My mom is a ___." },
      { ...TYPE2("He is a ___. She is a ___."), part: "D", stage: "Type It!", heading: "Type Two Jobs" },
      READ_JOB,
      { type: "wrapup", stage: "You've Landed!", recap: "You can say what job a person has with He is a and She is a." },
    ],
  },
  "6-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 6, title: "More Jobs!", subtitle: "Learn four more jobs and say what each person does." },

      // ---- Part A: review (3 min) ----
      { type: "spin", part: "A", stage: "Review", heading: "Job Wheel", items: JOBS5, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say the job."]], guide: "He / She is a ___." },
      { ...one(J_DOCTOR), part: "A", stage: "Review", heading: "Who Is This?", question: WHO, instruction: LISTEN_ANSWER, guide: "He is a ___." },

      // ---- Part B: four new jobs (5 min) ----
      { type: "strip", part: "B", stage: "Four New Jobs", heading: "Four New Jobs", numbered: false, size: 100, items: JOBS4, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Four New Jobs", heading: "He or She?", lines: ["She is a *firefighter*.", "He is a *police officer*."], instruction: REPEAT_SENT },
      { ...one(J_FIREFIGHTER), part: "B", stage: "Four New Jobs", heading: "Who Is This?", question: WHO, instruction: LISTEN_ANSWER, guide: "She is a ___." },
      { ...one(J_POLICE), part: "B", stage: "Four New Jobs", heading: "Who Is This? 2", question: WHO, instruction: LISTEN_ANSWER, guide: "He is a ___." },
      { ...one(J_BAKER), part: "B", stage: "Four New Jobs", heading: "Who Is This? 3", question: WHO, instruction: LISTEN_ANSWER, guide: "He is a ___." },
      { ...one(J_PILOT), part: "B", stage: "Four New Jobs", heading: "Who Is This? 4", question: WHO, instruction: LISTEN_ANSWER, guide: "She is a ___." },

      // ---- Part C: what do they do? and the games (13 min) ----
      { type: "message", part: "C", stage: "What Do They Do?", heading: "What Do They Do?", lines: ["He is a baker. He *makes* bread.", "She is a pilot. She *flies* a plane."], instruction: REPEAT_SENT },
      { ...one(J_BAKER), part: "C", stage: "What Do They Do?", heading: "What Does He Do?", question: "What does he do?", instruction: LISTEN_ANSWER, guide: "He ___." },
      { ...one(J_PILOT), part: "C", stage: "What Do They Do?", heading: "What Does She Do?", question: "What does she do?", instruction: LISTEN_ANSWER, guide: "She ___." },
      { type: "message", part: "C", stage: "What Do They Do?", heading: "What Do They Do? 2", lines: ["She is a firefighter. She *puts out* fires.", "He is a police officer. He *keeps* people safe."], instruction: REPEAT_SENT },
      { ...one(J_FIREFIGHTER), part: "C", stage: "What Do They Do?", heading: "What Does She Do? 2", question: "What does she do?", instruction: LISTEN_ANSWER, guide: "She ___." },
      { ...one(J_POLICE), part: "C", stage: "What Do They Do?", heading: "What Does He Do? 2", question: "What does he do?", instruction: LISTEN_ANSWER, guide: "He ___." },
      { type: "peek", part: "C", stage: "Guess My Job", heading: "Guess My Job", item: J_FIREFIGHTER, reveal: "She is a firefighter.", question: "I put out fires.", instruction: CLUEQ, guide: "You are a ___." },
      { type: "peek", part: "C", stage: "Guess My Job", heading: "Guess My Job 2", item: J_BAKER, reveal: "He is a baker.", question: "I make bread.", instruction: CLUEQ, guide: "You are a ___." },
      { type: "peek", part: "C", stage: "Guess My Job", heading: "Guess My Job 3", item: J_FIREFIGHTER, reveal: "She is a firefighter.", question: "I put out fires.", instruction: CLUEQ, guide: "You are a ___." },
      { type: "peek", part: "C", stage: "Guess My Job", heading: "Guess My Job 4", item: J_BAKER, reveal: "He is a baker.", question: "I make bread.", instruction: CLUEQ, guide: "You are a ___." },
      { type: "spin", part: "C", stage: "Job Wheel", heading: "Job Wheel", items: JOBS6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say the job and what the person does."]], guide: "He / She is a ___." },
      { type: "sprint", part: "C", stage: "Job Sprint", heading: "Job Sprint", items: JOBS6, seconds: 45, instruction: LOOK_SAY("Say the job. Be fast!"), guide: "He / She is a ___." },
      { ...one(J_BAKER), size: 100, part: "C", stage: "True or False?", heading: "True or False?", sentence: "A baker *makes* bread.", instruction: TF_PICTURE },
      { ...one(J_PILOT), size: 100, part: "C", stage: "True or False?", heading: "True or False? 2", sentence: "A pilot *puts out* fires.", instruction: TF_PICTURE },

      // ---- Part D: my family (4 min) ----
      { type: "dialogue", part: "D", stage: "My Family", heading: "What Do They Do?", turns: [{ who: "teacher", text: "What does your mom do? What does your dad do?" }], instruction: LISTEN_ANSWER },
      { ...TYPE2("She is a ___. She ___."), part: "D", stage: "Type It!", heading: "Type Two Jobs" },
      READ_JOB,
      { type: "wrapup", stage: "You've Landed!", recap: "You can name more jobs and say what each person does." },
    ],
  },
  "6-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 6, title: "Community Helpers!", subtitle: "Say who can help when someone has a problem." },

      // ---- Part A: review (3 min) ----
      { type: "peek", part: "A", stage: "Review", heading: "Guess My Job", item: J_PILOT, reveal: "She is a pilot.", question: "I fly a plane.", instruction: CLUEQ, guide: "You are a ___." },
      { type: "spin", part: "A", stage: "Review", heading: "Job Wheel", items: JOBS6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say the job."]], guide: "He / She is a ___." },

      // ---- Part B: more things people do (5 min) ----
      { type: "message", part: "B", stage: "What Do They Do?", heading: "What Do They Do?", lines: ["She is a teacher. She *teaches* children.", "She is a chef. She *cooks* food."], instruction: REPEAT_SENT },
      { type: "message", part: "B", stage: "What Do They Do?", heading: "What Do They Do? 2", lines: ["She is a farmer. She *grows* food.", "He is a driver. He *drives* a bus."], instruction: REPEAT_SENT },
      { type: "message", part: "B", stage: "What Do They Do?", heading: "What Do They Do? 3", lines: ["He is a doctor. He *helps* sick people."], instruction: REPEAT_SENT },
      { ...one(J_TEACHER), part: "B", stage: "What Do They Do?", heading: "What Does She Do?", question: "What does she do?", instruction: LISTEN_ANSWER, guide: "She ___." },
      { ...one(J_FARMER), part: "B", stage: "What Do They Do?", heading: "What Does She Do? 2", question: "What does she do?", instruction: LISTEN_ANSWER, guide: "She ___." },
      { ...one(J_DRIVER), part: "B", stage: "What Do They Do?", heading: "What Does He Do?", question: "What does he do?", instruction: LISTEN_ANSWER, guide: "He ___." },
      { ...one(J_DOCTOR), part: "B", stage: "What Do They Do?", heading: "What Does He Do? 2", question: "What does he do?", instruction: LISTEN_ANSWER, guide: "He ___." },

      // ---- Part C: who can help? (13 min) ----
      { type: "message", part: "C", stage: "Who Can Help?", heading: "Who Can Help?", lines: ["Someone is sick. A doctor *can help*.", "There is a fire. A firefighter *can help*."], instruction: REPEAT_SENT },
      { ...HELP_SICK, part: "C", stage: "Who Can Help?", heading: "Who Can Help?", instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_FIRE, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 2", instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_LOST, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 3", instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_HUNGRY, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 4", instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_SICK, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 6", instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_FIRE, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 7", instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_LOST, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 8", instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_HUNGRY, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 9", instruction: HELPQ, guide: "A ___ can help." },
      { type: "peek", part: "C", stage: "Guess My Job", heading: "Guess My Job", item: J_DRIVER, reveal: "He is a driver.", question: "I drive a bus.", instruction: CLUEQ, guide: "You are a ___." },
      { type: "peek", part: "C", stage: "Guess My Job", heading: "Guess My Job 2", item: J_TEACHER, reveal: "She is a teacher.", question: "I teach children.", instruction: CLUEQ, guide: "You are a ___." },
      { type: "sprint", part: "C", stage: "Job Sprint", heading: "Job Sprint", items: JOBS9, seconds: 45, instruction: LOOK_SAY("Say the job. Be fast!"), guide: "He / She is a ___." },

      // ---- Part D: an important helper (4 min) ----
      { type: "dialogue", part: "D", stage: "My Helper", heading: "An Important Helper", turns: [{ who: "teacher", text: "Which helper is important to you? Why?" }], instruction: LISTEN_ANSWER, guide: "A ___ helps people." },
      { ...TYPE2("A ___ can help. He / She ___."), part: "D", stage: "Type It!", heading: "Type About a Helper" },
      { ...READ_ALOUD, heading: "Read About a Helper" },
      { type: "wrapup", stage: "You've Landed!", recap: "You can say who can help when someone has a problem." },
    ],
  },
  "6-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 6, title: "Let's Review!", subtitle: "Play the job games and tell it right." },

      // ---- Part A: memory challenge (4 min) ----
      { type: "missing", part: "A", stage: "Memory Challenge", heading: "What's Missing?", items: JOBS4, instruction: [["👀", "Look at the jobs."], ["🗣️", "Say the job that went away."]], guide: "The ___ is missing." },
      { type: "spin", part: "A", stage: "Memory Challenge", heading: "Job Wheel", items: JOBS6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say the job."]], guide: "He / She is a ___." },

      // ---- Part B: true or false (5 min) ----
      { ...one(J_POLICE), size: 100, part: "B", stage: "True or False?", heading: "True or False?", sentence: "He is a *police officer*.", instruction: TF_PICTURE },
      { ...one(J_CHEF), size: 100, part: "B", stage: "True or False?", heading: "True or False? 2", sentence: "A chef *drives* a bus.", instruction: TF_PICTURE },
      { ...one(J_FIREFIGHTER), size: 100, part: "B", stage: "True or False?", heading: "True or False? 3", sentence: "A firefighter *puts out* fires.", instruction: TF_PICTURE },
      { ...one(J_FARMER), size: 100, part: "B", stage: "True or False?", heading: "True or False? 4", sentence: "A farmer *teaches* children.", instruction: TF_PICTURE },
      { ...one(J_DOCTOR), size: 100, part: "B", stage: "True or False?", heading: "True or False? 5", sentence: "A doctor *helps* sick people.", instruction: TF_PICTURE },

      // ---- Part C: games and helpers (13 min) ----
      { ...HELP_FIRE, part: "C", stage: "Who Can Help?", heading: "Who Can Help?", options: [J_FIREFIGHTER, J_BAKER, J_DRIVER], answer: 0, instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_HUNGRY, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 2", options: [J_PILOT, J_TEACHER, J_CHEF], answer: 2, instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_FIRE, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 4", options: [J_FIREFIGHTER, J_BAKER, J_DRIVER], answer: 0, instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_HUNGRY, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 5", options: [J_PILOT, J_TEACHER, J_CHEF], answer: 2, instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_FIRE, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 6", options: [J_FIREFIGHTER, J_BAKER, J_DRIVER], answer: 0, instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_HUNGRY, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 7", options: [J_PILOT, J_TEACHER, J_CHEF], answer: 2, instruction: HELPQ, guide: "A ___ can help." },
      { ...HELP_SICK, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 3", options: [J_FARMER, J_CHEF, J_DOCTOR], answer: 2, labels: false, instruction: NO_HELP("Say who can help.") },
      { type: "peek", part: "C", stage: "Guess My Job", heading: "Guess My Job", item: J_POLICE, reveal: "He is a police officer.", question: "I keep people safe.", instruction: CLUEQ, guide: "You are a ___." },
      { type: "peek", part: "C", stage: "Guess My Job", heading: "Guess My Job 2", item: J_FARMER, reveal: "She is a farmer.", question: "I grow food.", instruction: CLUEQ, guide: "You are a ___." },
      { type: "sprint", part: "C", stage: "Beat the Clock", heading: "Beat the Clock", items: JOBS9, seconds: 45, instruction: LOOK_SAY("Say the job. Be fast!") },
      { type: "dialogue", part: "C", stage: "Who Am I?", heading: "Who Am I?", turns: [{ who: "teacher", text: "I help sick people. Who am I?" }], instruction: NO_HELP("Say who I am.") },

      // ---- Part D: three things (3 min) ----
      { type: "dialogue", part: "D", stage: "Review", heading: "Three Things", turns: [{ who: "teacher", text: "Tell me three things about jobs." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE2("She is a ___. She ___."), part: "D", stage: "Type It!", heading: "Type Your Jobs" },
      READ_JOB,
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about jobs, what people do and who can help." },
    ],
  },
  "6-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 6, title: "Show What You Know!", subtitle: "Talk about jobs and helpers, all on your own." },

      // ---- Part A: conversation starter (4 min) ----
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Tell Me About Jobs", turns: [{ who: "teacher", text: "Tell me about jobs." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Jobs You Know", turns: [{ who: "teacher", text: "What jobs do you know? What does each person do?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Who Helps You?", turns: [{ who: "teacher", text: "Who helps you every day?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: help desk and clues (8 min) ----
      { ...HELP_LOST, part: "B", stage: "Help Desk", heading: "Help Desk", options: [J_POLICE, J_BAKER, J_PILOT], answer: 0, labels: false, instruction: NO_HELP("Say who can help."), },
      { ...HELP_HUNGRY, part: "B", stage: "Help Desk", heading: "Help Desk 2", options: [J_TEACHER, J_DRIVER, J_CHEF], answer: 2, labels: false, instruction: NO_HELP("Say who can help.") },
      { ...HELP_SICK, part: "B", stage: "Help Desk", heading: "Help Desk 3", options: [J_DOCTOR, J_FARMER, J_FIREFIGHTER], answer: 0, labels: false, instruction: NO_HELP("Say who can help.") },
      { ...HELP_LOST, part: "B", stage: "Help Desk", heading: "Help Desk 4", options: [J_POLICE, J_BAKER, J_PILOT], answer: 0, labels: false, instruction: NO_HELP("Say who can help."), },
      { ...HELP_HUNGRY, part: "B", stage: "Help Desk", heading: "Help Desk 5", options: [J_TEACHER, J_DRIVER, J_CHEF], answer: 2, labels: false, instruction: NO_HELP("Say who can help.") },
      { ...HELP_SICK, part: "B", stage: "Help Desk", heading: "Help Desk 6", options: [J_DOCTOR, J_FARMER, J_FIREFIGHTER], answer: 0, labels: false, instruction: NO_HELP("Say who can help.") },
      { ...HELP_LOST, part: "B", stage: "Help Desk", heading: "Help Desk 7", options: [J_POLICE, J_BAKER, J_PILOT], answer: 0, labels: false, instruction: NO_HELP("Say who can help."), },
      { ...HELP_HUNGRY, part: "B", stage: "Help Desk", heading: "Help Desk 8", options: [J_TEACHER, J_DRIVER, J_CHEF], answer: 2, labels: false, instruction: NO_HELP("Say who can help.") },
      { ...HELP_SICK, part: "B", stage: "Help Desk", heading: "Help Desk 9", options: [J_DOCTOR, J_FARMER, J_FIREFIGHTER], answer: 0, labels: false, instruction: NO_HELP("Say who can help.") },
      { type: "peek", part: "B", stage: "Guess My Job", heading: "Guess My Job", item: J_BAKER, reveal: "He is a baker.", question: "I make bread. I work in a shop.", instruction: [["🤔", "No help this time!"], ["🗣️", "Guess the job."]] },
      { type: "strip", part: "B", stage: "Your Clues", heading: "Give Me Clues!", numbered: false, labels: false, size: 110, items: [J_PILOT], instruction: [["👀", "Look at the picture."], ["🗣️", "Give clues. Do not say the job!"]] },
      { type: "strip", part: "B", stage: "Your Clues", heading: "Give Me Clues! 2", numbered: false, labels: false, size: 110, items: [J_FIREFIGHTER], instruction: [["👀", "Look at the picture."], ["🗣️", "Give clues. Do not say the job!"]] },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best!", items: JOBS9, seconds: 60, labels: false, instruction: [["🤔", "No help this time!"], ["🗣️", "Say the job. Be fast!"]] },

      // ---- Part C: my dream job (5 min) ----
      { type: "dialogue", part: "C", stage: "My Dream Job", heading: "My Dream Job", turns: [{ who: "teacher", text: "What job do you want to have? Why?" }], instruction: LISTEN_ANSWER, guide: "I want to be a ___ because ___." },
      { type: "dialogue", part: "C", stage: "My Dream Job", heading: "Why?", turns: [{ who: "teacher", text: "What does this person do?" }], instruction: LISTEN_ANSWER },

      // ---- Part D: teacher and student story, then writing (8 min) ----
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together", lines: ["Yesterday, I went to the *park*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 2", lines: ["I saw a *police officer*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 3", lines: ["After that, I went *home*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Type It!", heading: "My Dream Job...", lines: ["Write about the job you want."], instruction: [["⌨️", "Type three or four sentences in the chat."]] },
      { ...READ_JOB, heading: "Read Your Writing" },
      { type: "wrapup", stage: "Unit 6 Complete!", title: "Unit 6 Complete!", see: "Great job!", recap: "You can talk about jobs and helpers, in your own words." },
    ],
  },
  "6-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 6, title: "Unit 6 Test", subtitle: "Show what you can say about jobs!" },

      // ---- Part A: jobs ----
      { ...one(J_DOCTOR), part: "A", stage: "Jobs", heading: "Who Is This?", question: WHO, instruction: LISTEN_ANSWER },
      { ...one(J_CHEF), part: "A", stage: "Jobs", heading: "Who Is This? 2", question: WHO, instruction: LISTEN_ANSWER },
      { ...one(J_FARMER), part: "A", stage: "Jobs", heading: "Who Is This? 3", question: WHO, instruction: LISTEN_ANSWER },
      { ...one(J_FIREFIGHTER), part: "A", stage: "Jobs", heading: "Who Is This? 4", question: WHO, instruction: LISTEN_ANSWER },
      { ...one(J_BAKER), part: "A", stage: "Jobs", heading: "Who Is This? 5", question: WHO, instruction: LISTEN_ANSWER },
      { ...one(J_PILOT), part: "A", stage: "Jobs", heading: "Who Is This? 6", question: WHO, instruction: LISTEN_ANSWER },

      // ---- Part B: what do they do? ----
      { type: "strip", part: "B", stage: "What Do They Do?", heading: "What Do They Do?", numbered: false, labels: false, size: 100, items: [J_TEACHER, J_DRIVER], instruction: DUTYQ },
      { type: "strip", part: "B", stage: "What Do They Do?", heading: "What Do They Do? 2", numbered: false, labels: false, size: 100, items: [J_FIREFIGHTER, J_BAKER], instruction: DUTYQ },
      { type: "strip", part: "B", stage: "What Do They Do?", heading: "What Do They Do? 3", numbered: false, labels: false, size: 100, items: [J_DOCTOR, J_POLICE], instruction: DUTYQ },

      // ---- Part C: who can help? ----
      { ...HELP_SICK, part: "C", stage: "Who Can Help?", heading: "Who Can Help?", options: [J_TEACHER, J_DOCTOR, J_PILOT], answer: 1, labels: false, instruction: HELPQ },
      { ...HELP_FIRE, part: "C", stage: "Who Can Help?", heading: "Who Can Help? 2", options: [J_CHEF, J_BAKER, J_FIREFIGHTER], answer: 2, labels: false, instruction: HELPQ },

      // ---- Part D: speaking ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About Jobs", turns: [{ who: "teacher", text: "What jobs do you know? What does each person do?" }], instruction: [["👂", "Listen to the questions."], ["🗣️", "Answer the questions."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "My Dream Job", turns: [{ who: "teacher", text: "What job do you want to have? Why?" }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say two or three sentences."]] },
      { type: "score", stage: "My Unit 6 Score!", heading: "My Unit 6 Score!", rows: [["Jobs", "/ 6"], ["What they do", "/ 6"], ["Who can help", "/ 4"], ["Speaking", "/ 4"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 6 Complete!", title: "Unit 6 Complete!", see: "On to Unit 7!", recap: "You can talk about jobs, what people do and who can help." },
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
