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
// sun, rainbow and flowers reuse the A1 pictures by path (three flowers side by side for the plural)
const SUN = { label: "sun", src: "/curriculum/u3-l1/sun.jpg" }, CLOUD = WX("cloud", "cloud.jpg"), RAINBOW = { label: "rainbow", src: "/curriculum/u2-l3/rainbow.jpg" };
const FLOWERS = { label: "flowers", src: "/curriculum/u1-l2/flower.jpg", count: 3 }, LEAVES = WX("leaves", "leaves.jpg"), SNOW = WX("snow", "snow.jpg");
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

// ---- Unit 7 (My Favorite Story) pieces; pictures still to be generated (Batch 2) ----
const SY = (label, file) => ({ label, src: `/curriculum/a2-story/${file}` });
const S_KING = SY("king", "king.jpg"), S_PRINCESS = SY("princess", "princess.jpg"), S_DRAGON = SY("dragon", "dragon.jpg"), S_RABBIT = SY("rabbit", "rabbit.jpg");
const S_FOREST = SY("forest", "forest.jpg"), S_CASTLE = SY("castle", "castle.jpg");
const CHARS4 = [S_KING, S_PRINCESS, S_DRAGON, S_RABBIT], PLACES2 = [S_FOREST, S_CASTLE], CAST6 = [...CHARS4, ...PLACES2];
// three four-picture stories, each in story order (the labels are only for the placeholders and the teacher)
const STORY_RABBIT = [SY("the rabbit went to the forest", "rabbit-1.jpg"), SY("the princess went to the forest", "rabbit-2.jpg"), SY("the princess found the rabbit", "rabbit-3.jpg"), SY("they went home to the castle", "rabbit-4.jpg")];
const STORY_DRAGON = [SY("a dragon went to the castle", "dragon-1.jpg"), SY("the king saw the dragon", "dragon-2.jpg"), SY("the princess opened the door", "dragon-3.jpg"), SY("they had cake", "dragon-4.jpg")];
const STORY_CROWN = [SY("the king had a crown", "crown-1.jpg"), SY("the rabbit found the crown", "crown-2.jpg"), SY("the rabbit went to the castle", "crown-3.jpg"), SY("the king was happy", "crown-4.jpg")];
const ENDINGS3 = [{ label: "a happy ending" }, { label: "a sad ending" }, { label: "a funny ending" }];
const ORDERQ = [["👀", "Look at the pictures."], ["🗣️", "Tell the story in order."]];
const ORDER2 = "First, ___. Then, ___.", ORDER4 = "First, ___. Then, ___. After that, ___. Finally, ___.";
const DICEQ = [["👀", "Look at the dice."], ["🗣️", "Start a story."]];
const CLUE7 = [["👀", "Read the clue."], ["🗣️", "Guess the character."]];
const READ_STORY = { ...READ_ALOUD, heading: "Read Your Story" };

// ---- Unit 8 (Sports & Hobbies) pieces; swim/soccer/basketball/dance/cook/read/sing/draw reuse the Unit 1 club pictures, run/jump/bike are new (Batch 2) ----
const AB = (label, file) => ({ label, src: `/curriculum/a2-sport/${file}` });
const A_RUN = AB("run", "run.jpg"), A_JUMP = AB("jump", "jump.jpg"), A_BIKE = AB("ride a bike", "bike.jpg");
const A_SWIM = { label: "swim", src: SWIMMING.src }, A_SOCCER = { label: "play soccer", src: SOCCER.src }, A_BASKET = { label: "play basketball", src: BASKETBALL.src };
const A_DANCE = { label: "dance", src: DANCING.src }, A_COOK = { label: "cook", src: COOKING.src }, A_READ = { label: "read", src: READING.src };
const A_SING = { label: "sing", src: MUSIC_CLUB.src }, A_DRAW = { label: "draw", src: DRAWING.src };
const SPORT6 = [A_SWIM, A_RUN, A_JUMP, A_BIKE, A_SOCCER, A_BASKET], HOBBY5 = [A_DANCE, A_SING, A_DRAW, A_COOK, A_READ], DO11 = [...SPORT6, ...HOBBY5];
const CANCANT = [{ label: "I can" }, { label: "I can't" }];
const REASONS = [{ label: "fun" }, { label: "easy" }, { label: "hard" }, { label: "boring" }];
const CLUBS6 = [SWIMMING, SOCCER, DANCING, READING, COOKING, BASKETBALL];
const CANQ = "What can you do?";
const YESNO = "Yes, I can. / No, I can't.";
const ASKQ = [["👀", "Look at the picture."], ["🗣️", "Ask the teacher."]];
const ABILITYDICE = { type: "dice", dice: [{ name: "Do what?", items: DO11 }, { name: "Can?", items: CANCANT }], size: 108 };
const REASONDICE = { type: "dice", dice: [{ name: "Activity", items: CLUBS6 }, { name: "Because it is...", items: REASONS }], size: 108 };
const READ_CAN = { ...READ_ALOUD, heading: "Read Your Sentences" };

// ---- Unit 9 (How Do You Feel?) pieces; happy/sad/angry/tired reuse the A1 faces, the other four faces and two situations are new (Batch 2) ----
const FE = (label, file) => ({ label, src: `/curriculum/u4-feelings/${file}` });
const F_HAPPY = FE("happy", "happy.png"), F_SAD = FE("sad", "sad.png"), F_ANGRY = FE("angry", "angry.png"), F_TIRED = FE("tired", "tired.png");
const FN = (label, file) => ({ label, src: `/curriculum/a2-feelings/${file}` });
const F_WORRIED = FN("worried", "worried.jpg"), F_EXCITED = FN("excited", "excited.jpg"), F_SCARED = FN("scared", "scared.jpg"), F_BORED = FN("bored", "bored.jpg");
const OLD4 = [F_HAPPY, F_SAD, F_ANGRY, F_TIRED], NEW4 = [F_WORRIED, F_EXCITED, F_SCARED, F_BORED], FACES8 = [...OLD4, ...NEW4];
const SIT_BIRTHDAY = { label: "it is my birthday", src: "/curriculum/objects/birthday-cake.png" }, SIT_TEST = FN("I have a test", "test.jpg"), SIT_LOST = FN("my toy is lost", "lost-toy.jpg");
const SIT_GAME = { label: "I have a big game", src: SOCCER.src }, SIT_SICK = { label: "my friend is sick", src: "/curriculum/a2-jobs/sick.jpg" };
const SITS5 = [SIT_BIRTHDAY, SIT_TEST, SIT_LOST, SIT_GAME, SIT_SICK];
const HOWQ = "How do you feel?", WHYQ = "How do you feel? Why?";
const FEELDICE = { type: "dice", dice: [{ name: "Feeling", items: FACES8 }, { name: "Because", items: SITS5 }], size: 104 };
const ADVICEWORDS = [{ label: "rest" }, { label: "study" }, { label: "talk to a friend" }, { label: "ask the teacher" }, { label: "relax" }];
const ADVDICE = { type: "dice", dice: [{ name: "Problem", items: [F_TIRED, SIT_TEST, SIT_LOST, SIT_SICK, F_WORRIED] }, { name: "Advice", items: ADVICEWORDS }], size: 104 };
// Advice Desk: a problem and three advice cards; the right card is at `answer`
const ADV = (label, src, text, options, answer) => ({ type: "help", problem: { label, src, text }, options: options.map((l) => ({ label: l })), answer, said: options[answer] });
const ADV_TIRED = ADV("tired", F_TIRED.src, "I'm tired.", ["You should play all night.", "You should rest.", "You should run a lot."], 1);
const ADV_TEST = ADV("test", SIT_TEST.src, "I have a test tomorrow.", ["You should study.", "You should watch TV all day.", "You should throw the book."], 0);
const ADV_LOST = ADV("lost toy", SIT_LOST.src, "My toy is lost.", ["You should shout.", "You should sleep.", "You should look for it."], 2);
const ADV_SICK = ADV("sick friend", SIT_SICK.src, "My friend is sick.", ["You should run away.", "You should help your friend.", "You should take his toy."], 1);
const ADV_GAME = ADV("worried", F_WORRIED.src, "I'm nervous about my game.", ["You should stay in bed.", "You should stop playing.", "You should practice."], 2);
const ADVQ = [["👀", "Look at the problem."], ["🗣️", "Say good advice."]];
const READ_FEEL = { ...READ_ALOUD, heading: "Read Your Feelings" };

// ---- Unit 10 (Helping at Home) pieces; the eight chore pictures are new (Batch 2) ----
const CH = (label, file) => ({ label, src: `/curriculum/a2-chores/${file}` });
const C_BED = CH("make my bed", "bed.jpg"), C_ROOM = CH("clean my room", "room.jpg"), C_DISHES = CH("wash the dishes", "dishes.jpg"), C_PET = CH("feed the pet", "pet.jpg");
const C_TABLE = CH("set the table", "table.jpg"), C_SWEEP = CH("sweep the floor", "sweep.jpg"), C_TRASH = CH("take out the trash", "trash.jpg"), C_LAUNDRY = CH("do the laundry", "laundry.jpg");
const CHORES4A = [C_BED, C_ROOM, C_DISHES, C_PET], CHORES4B = [C_TABLE, C_SWEEP, C_TRASH, C_LAUNDRY], CHORES8 = [...CHORES4A, ...CHORES4B];
const HAVEQ = "What do you have to do?";
const DOHAVE = "Yes, I do. / No, I don't.";
const CHOREDICE = { type: "dice", dice: [{ name: "Chore", items: CHORES8 }, { name: "Say", items: [{ label: "I have to..." }, { label: "Can you...?" }] }], size: 100 };
const CHOREDICE1 = { type: "dice", dice: [{ name: "Chore", items: CHORES4A }], size: 92 };
// Home Helper: a request and three replies; the polite reply is at `answer`
const HH = (pic, text, options, answer) => ({ type: "help", problem: { label: pic.label, src: pic.src, text }, options: options.map((l) => ({ label: l })), answer, said: options[answer] });
const HH_DISHES = HH(C_DISHES, "Can you wash the dishes, please?", ["Sure! I can wash them.", "No!", "I don't want to."], 0);
const HH_TRASH = HH(C_TRASH, "Can you take out the trash?", ["Never!", "Sure! I can take it out.", "Go away."], 1);
const HH_TABLE = HH(C_TABLE, "I have to cook. Can you help me?", ["No, thanks.", "Maybe never.", "Sure! Let's do it together."], 2);
const HH_LAUNDRY = HH(C_LAUNDRY, "Can you do the laundry now?", ["Sorry, I can't. I'm busy.", "No!", "Never."], 0);
const HH_ROOM = HH(C_ROOM, "Can you clean your room, please?", ["I don't want to.", "No!", "Of course. I can clean it."], 2);
const HHQ = [["👀", "Look at the request."], ["🗣️", "Say a polite answer."]];
const ASKCHORE = [["👀", "Look at the picture."], ["🗣️", "Ask the teacher to help."]];
const READ_HOME = { ...READ_ALOUD, heading: "Read Your Sentences" };

// ---- Unit 11 (My Future Plans) pieces; most pictures are reused (soccer, homework, friend, pizza, park, swim, read, cook, store, jobs), four are new (Batch 2) ----
const PL = (label, file) => ({ label, src: `/curriculum/a2-plans/${file}` });
const PL_MOVIE = PL("watch a movie", "movie.jpg"), PL_GRANDMA = PL("visit my grandma", "grandma.jpg"), PL_BEACH = PL("go to the beach", "beach.jpg"), PL_TRAVEL = PL("travel", "travel.jpg");
const PL_SOCCER = { label: "play soccer", src: SOCCER.src }, PL_HOMEWORK = { label: "do my homework", src: HOMEWORK.src }, PL_FRIEND = { label: "see my friend", src: FRIEND.src };
const PL_PIZZA = { label: "eat pizza", src: PIZZA.src }, PL_PARK = { label: "go to the park", src: PARK.src }, PL_SWIM = { label: "swim", src: SWIMMING.src };
const PL_READ = { label: "read a book", src: READING.src }, PL_COOK = { label: "cook dinner", src: COOKING.src }, PL_STORE = { label: "go shopping", src: T_STORE.src };
const PLANS6 = [PL_SOCCER, PL_HOMEWORK, PL_MOVIE, PL_FRIEND, PL_PIZZA, PL_PARK];
const PLANS12 = [...PLANS6, PL_SWIM, PL_READ, PL_COOK, PL_GRANDMA, PL_STORE, PL_BEACH];
const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const DAYS7 = DAY_NAMES.map((label) => ({ label })), WHEN2 = [{ label: "Tonight" }, { label: "Tomorrow" }];
const WEEK_A = [PL_HOMEWORK, PL_READ, PL_COOK, PL_SOCCER, PL_STORE, PL_BEACH, PL_GRANDMA].map((p, i) => ({ ...p, label: DAY_NAMES[i] }));
const WEEK_B = [PL_SWIM, PL_MOVIE, PL_HOMEWORK, PL_FRIEND, PL_PIZZA, PL_PARK, PL_SOCCER].map((p, i) => ({ ...p, label: DAY_NAMES[i] }));
const GOING = "What are you going to do?";
const PLANDICE = { type: "dice", dice: [{ name: "When?", items: WHEN2 }, { name: "Plan", items: PLANS6 }], size: 104 };
const WEEKDICE = { type: "dice", dice: [{ name: "Day", items: DAYS7 }, { name: "Plan", items: PLANS12 }], size: 104 };
const DREAMS7 = [...JOBS6, PL_TRAVEL];
const DREAMDICE = { type: "dice", dice: [{ name: "Someday", items: DREAMS7 }], size: 96 };
const YESAM = "Yes, I am. / No, I'm not.";
const READ_PLAN = { ...READ_ALOUD, heading: "Read Your Plans" };

// ---- Unit 12 (All About My Year) pieces; NO new pictures: everything is reused from Units 1-11 ----
const PAST6 = [{ label: "park", src: PARK.src }, { label: "pizza", src: PIZZA.src }, { label: "dog", src: DOG.src }, { label: "breakfast", src: BREAKFAST.src }, { label: "picture", src: PICTURE.src }, { label: "homework", src: HOMEWORK.src }];
const TIMES3 = [{ label: "Yesterday" }, { label: "Every day" }, { label: "Tomorrow" }];
const TIMEDICE = { type: "dice", dice: [{ name: "When?", items: TIMES3 }, { name: "Do what?", items: PAST6 }], size: 104 };
const YESTDICE = { type: "dice", dice: [{ name: "Yesterday, I...", items: PAST6 }], size: 96 };
const EVERYDICE = { type: "dice", dice: [{ name: "Every day, I...", items: [{ label: "go to school", src: SCHOOL.src }, { label: "have breakfast", src: BREAKFAST.src }, { label: "do my homework", src: HOMEWORK.src }, C_BED, A_BIKE, A_READ] }], size: 96 };
const TOPICS11 = [
  { label: "school", src: MATH.src }, { label: "yesterday", src: PIZZA.src }, { label: "weather", src: SUNNY.src }, { label: "town", src: T_BANK.src }, { label: "shopping", src: S_APPLE.src }, { label: "jobs", src: J_DOCTOR.src },
  { label: "stories", src: S_DRAGON.src }, { label: "sports", src: A_SWIM.src }, { label: "feelings", src: F_HAPPY.src }, { label: "home", src: C_BED.src }, { label: "plans", src: PL_BEACH.src },
];
const TOPICS_NOW = TOPICS11.filter((t) => ["weather", "town", "shopping", "jobs", "sports", "feelings", "home"].includes(t.label));
const TOPICQ = [["👀", "Look at the wheel."], ["🗣️", "Say two sentences about it."]];
const TIMEDICEQ = [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]];
const FORTUNEQ = [["👂", "Listen to the teacher."], ["🗣️", "Say yes or correct it."]];
const READ_YEAR = { ...READ_ALOUD, heading: "Read Your Year" };
const CLUEQ_FEEL = [["👀", "Read the clue."], ["🗣️", "Guess the feeling."]];

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

  // ---------- Unit 7: My Favorite Story ----------
  "7-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 7, title: "Once Upon a Time!", subtitle: "Meet story characters and start a story." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Favorite Story", turns: [{ who: "teacher", text: "What is your favorite story?" }], instruction: LISTEN_ANSWER, guide: "My favorite story is ___." },

      // ---- Part B: story words (5 min) ----
      { type: "strip", part: "B", stage: "Story Words", heading: "Four Characters", numbered: false, size: 100, items: CHARS4, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Story Words", heading: "Once Upon a Time", lines: ["Once upon a time, there was a *king*.", "Once upon a time, there was a *dragon*."], instruction: REPEAT_SENT },
      { ...one(S_KING), part: "B", stage: "Story Words", heading: "Who Is This?", question: WHO, instruction: LISTEN_ANSWER, guide: "It is a ___." },
      { ...one(S_PRINCESS), part: "B", stage: "Story Words", heading: "Who Is This? 2", question: WHO, instruction: LISTEN_ANSWER, guide: "It is a ___." },
      { ...one(S_DRAGON), part: "B", stage: "Story Words", heading: "Who Is This? 3", question: WHO, instruction: LISTEN_ANSWER, guide: "It is a ___." },
      { ...one(S_RABBIT), part: "B", stage: "Story Words", heading: "Who Is This? 4", question: WHO, instruction: LISTEN_ANSWER, guide: "It is a ___." },
      { type: "strip", part: "B", stage: "Story Places", heading: "Two Story Places", numbered: false, size: 100, items: PLACES2, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Story Places", heading: "One Day", lines: ["One day, the rabbit went to the *forest*.", "One day, the princess went to the *castle*."], instruction: REPEAT_SENT },

      // ---- Part C: story dice and the games (13 min) ----
      { type: "dice", part: "C", stage: "Story Dice", heading: "Story Dice", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }], size: 104, instruction: DICEQ, guide: "Once upon a time, there was a ___." },
      { type: "dice", part: "C", stage: "Story Dice", heading: "Story Dice 2", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }], size: 104, instruction: DICEQ, guide: "One day, the ___ went to the ___." },
      { type: "dice", part: "C", stage: "Story Dice", heading: "Story Dice 3", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }], size: 104, instruction: [["👀", "Look at the dice."], ["🗣️", "Tell two sentences."]], guide: "Once upon a time... One day..." },
      { type: "spin", part: "C", stage: "Character Wheel", heading: "Character Wheel", items: CHARS4, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say the character."]], guide: "There was a ___." },
      { type: "peek", part: "C", stage: "Guess the Character", heading: "Who Am I?", item: S_DRAGON, reveal: "It is a dragon.", question: "I live in a cave. I like fire.", instruction: CLUE7, guide: "You are a ___." },
      { type: "peek", part: "C", stage: "Guess the Character", heading: "Who Am I? 2", item: S_RABBIT, reveal: "It is a rabbit.", question: "I hop in the forest.", instruction: CLUE7, guide: "You are a ___." },
      { type: "peek", part: "C", stage: "Guess the Character", heading: "Who Am I? 3", item: S_KING, reveal: "It is a king.", question: "I am a man. I wear a crown.", instruction: CLUE7, guide: "You are a ___." },
      { type: "missing", part: "C", stage: "What's Missing?", heading: "What's Missing?", items: CHARS4, instruction: [["👀", "Look at the characters."], ["🗣️", "Say the character that went away."]], guide: "The ___ is missing." },
      { type: "sprint", part: "C", stage: "Story Sprint", heading: "Story Sprint", items: CAST6, seconds: 45, instruction: LOOK_SAY("Say a sentence. Be fast!"), guide: "There was a ___." },

      // ---- Part D: my story beginning (4 min) ----
      { type: "dialogue", part: "D", stage: "My Story", heading: "Start a Story", turns: [{ who: "teacher", text: "Start a story about a king, a princess, a dragon or a rabbit." }], instruction: LISTEN_ANSWER, guide: "Once upon a time, there was a ___." },
      { ...TYPE2("Once upon a time, there was a ___. One day, it went to the ___."), part: "D", stage: "Type It!", heading: "Type Your Story" },
      READ_STORY,
      { type: "wrapup", stage: "You've Landed!", recap: "You can meet story characters and start a story with Once upon a time." },
    ],
  },
  "7-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 7, title: "What Happened Next?", subtitle: "Tell what happened in a story with then, suddenly and after that." },

      // ---- Part A: review (3 min) ----
      { type: "table", part: "A", stage: "Review", heading: "Say the Word", rows: [["go", "?"], ["see", "?"], ["have", "?"]], instruction: SAY_PAST },
      { type: "spin", part: "A", stage: "Review", heading: "Character Wheel", items: CHARS4, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say the character."]], guide: "There was a ___." },

      // ---- Part B: four new words and story words (5 min) ----
      { type: "table", part: "B", stage: "Four New Words", heading: "Four New Words", rows: [["find", "found"], ["help", "helped"], ["look", "looked"], ["open", "opened"]], instruction: [["👀", "Look at the words."], ["🗣️", "Say each pair."]] },
      { type: "table", part: "B", stage: "Four New Words", heading: "Say the Word", rows: [["find", "?"], ["help", "?"], ["look", "?"], ["open", "?"]], instruction: SAY_PAST },
      { type: "table", part: "B", stage: "Four New Words", heading: "Say the Word 2", rows: [["open", "?"], ["find", "?"], ["help", "?"], ["look", "?"]], instruction: SAY_PAST },
      { type: "message", part: "B", stage: "Story Words", heading: "Then and Suddenly", lines: ["*Then*, the princess went to the forest.", "*Suddenly*, she saw a dragon!"], instruction: REPEAT_SENT },
      { type: "message", part: "B", stage: "Story Words", heading: "After That", lines: ["*After that*, she opened the door.", "She *found* a cake!"], instruction: REPEAT_SENT },

      // ---- Part C: put the story in order (13 min) ----
      { type: "order", part: "C", stage: "Story Order", heading: "Story Order", items: STORY_RABBIT, instruction: ORDERQ, guide: ORDER2 },
      { type: "order", part: "C", stage: "Story Order", heading: "Story Order 2", items: STORY_DRAGON, instruction: ORDERQ, guide: ORDER2 },
      { type: "order", part: "C", stage: "Story Order", heading: "Story Order 3", items: STORY_CROWN, instruction: ORDERQ, guide: ORDER2 },
      { type: "order", part: "C", stage: "Story Order", heading: "Story Order 4", items: STORY_CROWN, instruction: ORDERQ, guide: ORDER2 },
      { type: "strip", part: "C", stage: "What Happened Next?", heading: "What Happened Next?", size: 92, active: 0, items: STORY_RABBIT, question: "The rabbit went to the forest. What happened next?", instruction: LISTEN_ANSWER, guide: "Then, ___." },
      { type: "strip", part: "C", stage: "What Happened Next?", heading: "What Happened Next? 2", size: 92, active: 1, items: STORY_RABBIT, question: "The princess went to the forest. What happened next?", instruction: LISTEN_ANSWER, guide: "Suddenly, ___." },
      { type: "strip", part: "C", stage: "What Happened Next?", heading: "What Happened Next? 3", size: 92, active: 2, items: STORY_RABBIT, question: "The princess found the rabbit. What happened next?", instruction: LISTEN_ANSWER, guide: "After that, ___." },
      { type: "message", part: "C", stage: "Story Telephone", heading: "Story Telephone", lines: ["Once upon a time, a princess went to the forest."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "Then, she ___." },
      { type: "message", part: "C", stage: "Story Telephone", heading: "Story Telephone 2", lines: ["Once upon a time, a princess went to the forest. Then she found a dragon."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say it again and add a new event."]], guide: "Suddenly, the dragon ___." },
      { type: "chips", part: "C", stage: "Story Telephone", heading: "The Whole Story", items: ["Once upon a time", "Then", "Suddenly", "After that"], instruction: NO_HELP("Tell the whole story alone.") },

      // ---- Part D: my story (4 min) ----
      { type: "dialogue", part: "D", stage: "My Story", heading: "Tell It Again", turns: [{ who: "teacher", text: "Tell me a story about a princess and a dragon." }], instruction: NO_HELP("Tell a short story.") },
      { ...TYPE2("First, ___. Then, ___."), part: "D", stage: "Type It!", heading: "Type Your Story" },
      READ_STORY,
      { type: "wrapup", stage: "You've Landed!", recap: "You can tell what happened next in a story with then, suddenly and after that." },
    ],
  },
  "7-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 7, title: "The End!", subtitle: "Finish a story with finally and a good ending." },

      // ---- Part A: review (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "order", part: "A", stage: "Review", heading: "Story Order", items: STORY_RABBIT, instruction: ORDERQ, guide: ORDER2 },

      // ---- Part B: endings (5 min) ----
      { type: "chips", part: "B", stage: "Endings", heading: "Ending Words", items: ["Finally", "The end", "happy", "sad"], instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Endings", heading: "The Ending", lines: ["*Finally*, they went home.", "It was a *happy* ending."], instruction: REPEAT_SENT },
      { ...one(STORY_RABBIT[3]), part: "B", stage: "Endings", heading: "How Does It End?", question: "How does the story end?", instruction: LISTEN_ANSWER, guide: "Finally, ___." },
      { ...one(STORY_DRAGON[3]), part: "B", stage: "Endings", heading: "How Does It End? 2", question: "How does the story end?", instruction: LISTEN_ANSWER, guide: "Finally, ___." },
      { ...one(STORY_CROWN[3]), part: "B", stage: "Endings", heading: "How Does It End? 3", question: "How does the story end?", instruction: LISTEN_ANSWER, guide: "Finally, ___." },
      { type: "message", part: "B", stage: "Endings", heading: "The Whole Story", lines: ["*First*, the king had a crown.", "*Then*, the rabbit found it.", "*After that*, it went to the castle.", "*Finally*, the king was happy."], instruction: REPEAT_SENT },

      // ---- Part C: tell the whole story (13 min) ----
      { type: "order", part: "C", stage: "Story Order", heading: "Story Order 2", items: STORY_DRAGON, instruction: ORDERQ, guide: ORDER4 },
      { type: "order", part: "C", stage: "Story Order", heading: "Story Order 3", items: STORY_CROWN, instruction: ORDERQ, guide: ORDER4 },
      { type: "order", part: "C", stage: "Story Order", heading: "Story Order 4", items: STORY_RABBIT, instruction: ORDERQ, guide: ORDER4 },
      { type: "dice", part: "C", stage: "Story Dice", heading: "Story Dice", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }, { name: "The end", items: ENDINGS3 }], size: 96, instruction: [["👀", "Look at the dice."], ["🗣️", "Tell a short story."]], guide: "Once upon a time... Finally..." },
      { type: "dice", part: "C", stage: "Story Dice", heading: "Story Dice 2", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }, { name: "The end", items: ENDINGS3 }], size: 96, instruction: [["👀", "Look at the dice."], ["🗣️", "Tell a short story."]], guide: "Once upon a time... Finally..." },
      { type: "peek", part: "C", stage: "Mystery Ending", heading: "Mystery Ending", item: STORY_DRAGON[3], reveal: "Finally, they had cake.", question: "How does the story end?", instruction: LOOK_SAY("Guess the ending."), guide: "I think, finally, ___." },
      { type: "peek", part: "C", stage: "Mystery Ending", heading: "Mystery Ending 2", item: STORY_CROWN[3], reveal: "Finally, the king was happy.", question: "How does the story end?", instruction: LOOK_SAY("Guess the ending."), guide: "I think, finally, ___." },
      { type: "spin", part: "C", stage: "Character Wheel", heading: "Character Wheel", items: CHARS4, instruction: [["👀", "Look at the wheel."], ["🗣️", "Tell a story about this character."]] },

      // ---- Part D: my ending (4 min) ----
      { type: "dialogue", part: "D", stage: "My Ending", heading: "My Ending", turns: [{ who: "teacher", text: "How does your favorite story end?" }], instruction: LISTEN_ANSWER, guide: "Finally, ___." },
      { ...TYPE2("First, ___. Finally, ___."), part: "D", stage: "Type It!", heading: "Type Your Story" },
      READ_STORY,
      { type: "wrapup", stage: "You've Landed!", recap: "You can finish a story with finally and a happy ending." },
    ],
  },
  "7-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 7, title: "Let's Review!", subtitle: "Play the story games and tell the whole story." },

      // ---- Part A: memory challenge (4 min) ----
      { type: "missing", part: "A", stage: "Memory Challenge", heading: "What's Missing?", items: CHARS4, instruction: [["👀", "Look at the characters."], ["🗣️", "Say the character that went away."]], guide: "The ___ is missing." },
      { type: "table", part: "A", stage: "Memory Challenge", heading: "Say the Word", rows: [["find", "?"], ["help", "?"], ["look", "?"], ["open", "?"]], instruction: SAY_PAST },

      // ---- Part B: story order (5 min) ----
      { type: "order", part: "B", stage: "Story Order", heading: "Story Order", items: STORY_CROWN, instruction: ORDERQ, guide: ORDER4 },
      { type: "order", part: "B", stage: "Story Order", heading: "Story Order 2", items: STORY_RABBIT, instruction: ORDERQ, guide: ORDER4 },

      // ---- Part C: games (13 min) ----
      { type: "order", part: "C", stage: "Story Order", heading: "Story Order 3", items: STORY_DRAGON, instruction: NO_HELP("Tell the story in order.") },
      { type: "order", part: "C", stage: "Story Order", heading: "Story Order 4", items: STORY_CROWN, instruction: NO_HELP("Tell the story in order.") },
      { type: "dice", part: "C", stage: "Story Dice", heading: "Story Dice", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }, { name: "The end", items: ENDINGS3 }], size: 96, instruction: [["👀", "Look at the dice."], ["🗣️", "Tell a short story."]], guide: "Once upon a time... Finally..." },
      { type: "dice", part: "C", stage: "Story Dice", heading: "Story Dice 2", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }, { name: "The end", items: ENDINGS3 }], size: 96, instruction: NO_HELP("Tell a short story.") },
      { type: "dice", part: "C", stage: "Story Dice", heading: "Story Dice 3", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }, { name: "The end", items: ENDINGS3 }], size: 96, instruction: [["👀", "Look at the dice."], ["🗣️", "Tell a short story."]], guide: "Once upon a time... Finally..." },
      { type: "dice", part: "C", stage: "Story Dice", heading: "Story Dice 4", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }, { name: "The end", items: ENDINGS3 }], size: 96, instruction: NO_HELP("Tell a short story.") },
      { type: "peek", part: "C", stage: "Guess the Character", heading: "Who Am I?", item: S_PRINCESS, reveal: "It is a princess.", question: "I am a girl. I wear a crown.", instruction: CLUE7, guide: "You are a ___." },
      { type: "peek", part: "C", stage: "Guess the Character", heading: "Who Am I? 2", item: S_RABBIT, reveal: "It is a rabbit.", question: "I hop in the forest.", instruction: CLUE7, guide: "You are a ___." },
      { type: "sprint", part: "C", stage: "Beat the Clock", heading: "Beat the Clock", items: CAST6, seconds: 45, instruction: LOOK_SAY("Say a sentence. Be fast!") },

      // ---- Part D: three things (3 min) ----
      { type: "dialogue", part: "D", stage: "Review", heading: "Three Things", turns: [{ who: "teacher", text: "Tell me three things about a story." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE2("First, ___. Finally, ___."), part: "D", stage: "Type It!", heading: "Type Your Story" },
      READ_STORY,
      { type: "wrapup", stage: "You've Landed!", recap: "You can tell a whole story with a beginning, a middle and an ending." },
    ],
  },
  "7-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 7, title: "Show What You Know!", subtitle: "Tell and change stories, all on your own." },

      // ---- Part A: conversation starter (4 min) ----
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Tell Me a Story", turns: [{ who: "teacher", text: "Tell me a story you know." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Favorite Story", turns: [{ who: "teacher", text: "What is your favorite story? Who is in it?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Why?", turns: [{ who: "teacher", text: "Why do you like it?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: story podcast (8 min) ----
      { type: "order", part: "B", stage: "Story Order", heading: "Mystery Story", items: STORY_DRAGON, instruction: NO_HELP("Tell the story in order.") },
      { type: "order", part: "B", stage: "Story Order", heading: "Mystery Story 2", items: STORY_CROWN, instruction: NO_HELP("Tell the story in order.") },
      { type: "order", part: "B", stage: "Story Order", heading: "Mystery Story 3", items: STORY_RABBIT, instruction: NO_HELP("Tell the story in order.") },
      { type: "dice", part: "B", stage: "Story Dice", heading: "Story Podcast", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }, { name: "The end", items: ENDINGS3 }], size: 96, instruction: NO_HELP("Tell a story for the podcast.") },
      { type: "dice", part: "B", stage: "Story Dice", heading: "Story Podcast 2", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }, { name: "The end", items: ENDINGS3 }], size: 96, instruction: NO_HELP("Tell a story for the podcast.") },
      { type: "dice", part: "B", stage: "Story Dice", heading: "Story Podcast 3", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }, { name: "The end", items: ENDINGS3 }], size: 96, instruction: NO_HELP("Tell a story for the podcast.") },
      { type: "dice", part: "B", stage: "Story Dice", heading: "Story Podcast 4", dice: [{ name: "Who?", items: CHARS4 }, { name: "Where?", items: PLACES2 }, { name: "The end", items: ENDINGS3 }], size: 96, instruction: NO_HELP("Tell a story for the podcast.") },
      { type: "message", part: "B", stage: "Change the Story", heading: "Change the Story", lines: ["This time, the rabbit found a *dragon* in the forest!"], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Tell the new story."]] },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best!", items: CAST6, seconds: 60, labels: false, instruction: [["🤔", "No help this time!"], ["🗣️", "Say a sentence. Be fast!"]] },

      // ---- Part C: my favorite story (5 min) ----
      { type: "dialogue", part: "C", stage: "My Favorite Story", heading: "My Favorite Story", turns: [{ who: "teacher", text: "Tell me about your favorite story. What happened first, then, and at the end?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "My Favorite Story", heading: "Happy or Sad?", turns: [{ who: "teacher", text: "Was the ending happy or sad?" }], instruction: LISTEN_ANSWER },

      // ---- Part D: teacher and student story, then writing (8 min) ----
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together", lines: ["Once upon a time, there was a *princess*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 2", lines: ["One day, she went to the *forest*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 3", lines: ["*Suddenly*, she saw a *dragon*!"], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Type It!", heading: "My Story...", lines: ["Write your story."], instruction: [["⌨️", "Type four or five sentences in the chat."]] },
      { ...READ_STORY, heading: "Read Your Writing" },
      { type: "wrapup", stage: "Unit 7 Complete!", title: "Unit 7 Complete!", see: "Great job!", recap: "You can tell and change a story, in your own words." },
    ],
  },
  "7-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 7, title: "Unit 7 Test", subtitle: "Show what you can say about a story!" },

      // ---- Part A: story words ----
      { ...one(S_KING), part: "A", stage: "Story Words", heading: "Who Is This?", question: WHO, instruction: LISTEN_ANSWER },
      { ...one(S_PRINCESS), part: "A", stage: "Story Words", heading: "Who Is This? 2", question: WHO, instruction: LISTEN_ANSWER },
      { ...one(S_DRAGON), part: "A", stage: "Story Words", heading: "Who Is This? 3", question: WHO, instruction: LISTEN_ANSWER },
      { ...one(S_RABBIT), part: "A", stage: "Story Words", heading: "Who Is This? 4", question: WHO, instruction: LISTEN_ANSWER },
      { ...one(S_FOREST), part: "A", stage: "Story Words", heading: "Where Is It?", question: "What is this place?", instruction: LISTEN_ANSWER },
      { ...one(S_CASTLE), part: "A", stage: "Story Words", heading: "Where Is It? 2", question: "What is this place?", instruction: LISTEN_ANSWER },

      // ---- Part B: story in order ----
      { type: "order", part: "B", stage: "Story in Order", heading: "Story in Order", items: STORY_RABBIT, instruction: ORDERQ },
      { type: "order", part: "B", stage: "Story in Order", heading: "Story in Order 2", items: STORY_DRAGON, instruction: ORDERQ },

      // ---- Part C: retelling ----
      { type: "strip", part: "C", stage: "Retelling", heading: "Tell the Story", size: 92, items: STORY_CROWN, instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell the whole story."]] },
      { type: "strip", part: "C", stage: "Retelling", heading: "Tell the Story 2", size: 92, items: STORY_RABBIT, instruction: [["👀", "Look at the pictures."], ["🗣️", "Tell the whole story."]] },

      // ---- Part D: speaking ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "My Favorite Story", turns: [{ who: "teacher", text: "What is your favorite story? Who is in it?" }], instruction: [["👂", "Listen to the questions."], ["🗣️", "Answer the questions."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "How Does It End?", turns: [{ who: "teacher", text: "Tell me how the story begins and how it ends." }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say three or four sentences."]] },
      { type: "score", stage: "My Unit 7 Score!", heading: "My Unit 7 Score!", rows: [["Story words", "/ 6"], ["Story in order", "/ 6"], ["Retelling", "/ 4"], ["Speaking", "/ 4"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 7 Complete!", title: "Unit 7 Complete!", see: "On to Unit 8!", recap: "You can tell a story in order, from beginning to end." },
    ],
  },

  // ---------- Unit 8: Sports & Hobbies ----------
  "8-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 8, title: "What Can You Do?", subtitle: "Say what you can do with I can... and ask Can you...?" },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Sports You Like", turns: [{ who: "teacher", text: "What sports do you like?" }], instruction: LISTEN_ANSWER, guide: "I like ___." },

      // ---- Part B: six things to do (5 min) ----
      { type: "strip", part: "B", stage: "Six Things to Do", heading: "Six Things to Do", numbered: false, size: 84, items: SPORT6, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Six Things to Do", heading: "I Can...", lines: ["I can *swim*.", "I can *play soccer*."], instruction: REPEAT_SENT },
      { ...one(A_SWIM), part: "B", stage: "Six Things to Do", heading: "What Can You Do?", question: CANQ, instruction: LISTEN_ANSWER, guide: "I can ___." },
      { ...one(A_RUN), part: "B", stage: "Six Things to Do", heading: "What Can You Do? 2", question: CANQ, instruction: LISTEN_ANSWER, guide: "I can ___." },
      { ...one(A_JUMP), part: "B", stage: "Six Things to Do", heading: "What Can You Do? 3", question: CANQ, instruction: LISTEN_ANSWER, guide: "I can ___." },
      { ...one(A_BIKE), part: "B", stage: "Six Things to Do", heading: "What Can You Do? 4", question: CANQ, instruction: LISTEN_ANSWER, guide: "I can ___." },
      { type: "message", part: "B", stage: "Six Things to Do", heading: "Can You...?", lines: ["Can you *swim*?", "*Yes, I can.*"], instruction: REPEAT_SENT },

      // ---- Part C: the games (13 min) ----
      { type: "spin", part: "C", stage: "Ability Wheel", heading: "Ability Wheel", items: SPORT6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what you can do."]], guide: "I can ___." },
      { type: "spin", part: "C", stage: "Ability Wheel", heading: "Ability Wheel 2", items: SPORT6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what you can do."]], guide: "I can ___." },
      { type: "dice", part: "C", stage: "Ask Me!", heading: "Ask Me!", dice: [{ name: "Do what?", items: SPORT6 }], size: 92, instruction: ASKQ, guide: "Can you ___?" },
      { type: "dice", part: "C", stage: "Ask Me!", heading: "Ask Me! 2", dice: [{ name: "Do what?", items: SPORT6 }], size: 92, instruction: ASKQ, guide: "Can you ___?" },
      { type: "peek", part: "C", stage: "Mystery Activity", heading: "Mystery Activity", item: A_SWIM, reveal: "You can swim!", question: CANQ, instruction: LOOK_SAY("Guess the activity."), guide: "I can ___." },
      { type: "peek", part: "C", stage: "Mystery Activity", heading: "Mystery Activity 2", item: A_BIKE, reveal: "You can ride a bike!", question: CANQ, instruction: LOOK_SAY("Guess the activity."), guide: "I can ___." },
      { type: "missing", part: "C", stage: "What's Missing?", heading: "What's Missing?", items: SPORT6, size: 84, instruction: [["👀", "Look at the pictures."], ["🗣️", "Say the one that went away."]], guide: "___ is missing." },
      { type: "sprint", part: "C", stage: "Ability Sprint", heading: "Ability Sprint", items: SPORT6, seconds: 45, instruction: LOOK_SAY("Say what you can do. Be fast!"), guide: "I can ___." },
      { type: "sprint", part: "C", stage: "Ability Sprint", heading: "Ability Sprint 2", items: SPORT6, seconds: 45, instruction: LOOK_SAY("Say what you can do. Be fast!"), guide: "I can ___." },

      // ---- Part D: what I can do (4 min) ----
      { type: "dialogue", part: "D", stage: "My Abilities", heading: "Three Things", turns: [{ who: "teacher", text: "What can you do? Tell me three things." }], instruction: LISTEN_ANSWER, guide: "I can ___." },
      { ...TYPE2("I can ___. I can ___."), part: "D", stage: "Type It!", heading: "Type What You Can Do" },
      READ_CAN,
      { type: "wrapup", stage: "You've Landed!", recap: "You can say what you can do and ask a friend Can you?" },
    ],
  },
  "8-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 8, title: "I Can't Do That!", subtitle: "Say what you can't do, and use but." },

      // ---- Part A: review (3 min) ----
      { type: "spin", part: "A", stage: "Review", heading: "Ability Wheel", items: SPORT6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what you can do."]], guide: "I can ___." },
      { ...one(A_SWIM), part: "A", stage: "Review", heading: "Can You...?", question: "Can you swim?", instruction: LISTEN_ANSWER, guide: YESNO },

      // ---- Part B: hobbies and can't (5 min) ----
      { type: "strip", part: "B", stage: "Five Hobbies", heading: "Five Hobbies", numbered: false, size: 92, items: HOBBY5, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Five Hobbies", heading: "I Can't...", lines: ["I can *dance*.", "I *can't* sing."], instruction: REPEAT_SENT },
      { ...one(A_DANCE), part: "B", stage: "Five Hobbies", heading: "Can You...?", question: "Can you dance?", instruction: LISTEN_ANSWER, guide: YESNO },
      { ...one(A_DRAW), part: "B", stage: "Five Hobbies", heading: "Can You...? 2", question: "Can you draw?", instruction: LISTEN_ANSWER, guide: YESNO },
      { ...one(A_COOK), part: "B", stage: "Five Hobbies", heading: "Can You...? 3", question: "Can you cook?", instruction: LISTEN_ANSWER, guide: YESNO },
      { type: "message", part: "B", stage: "But", heading: "But", lines: ["I can swim, *but* I can't dance."], instruction: REPEAT_SENT },

      // ---- Part C: can and can't games (13 min) ----
      { ...ABILITYDICE, part: "C", stage: "Ability Dice", heading: "Ability Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I ___ ___." },
      { ...ABILITYDICE, part: "C", stage: "Ability Dice", heading: "Ability Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I ___ ___." },
      { ...ABILITYDICE, part: "C", stage: "Ability Dice", heading: "Ability Dice 3", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I ___ ___." },
      { ...ABILITYDICE, part: "C", stage: "Ability Dice", heading: "Ability Dice 4", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I ___ ___." },
      { type: "spin", part: "C", stage: "Hobby Wheel", heading: "Hobby Wheel", items: HOBBY5, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say if you can or can't."]], guide: "I can / can't ___." },
      { type: "strip", part: "C", stage: "Can and Can't", heading: "Can and Can't", numbered: false, labels: false, size: 100, items: [A_SWIM, A_DANCE], question: CANQ, instruction: LISTEN_ANSWER, guide: "I can ___, but I can't ___." },
      { type: "strip", part: "C", stage: "Can and Can't", heading: "Can and Can't 2", numbered: false, labels: false, size: 100, items: [A_RUN, A_DRAW], question: CANQ, instruction: LISTEN_ANSWER, guide: "I can ___, but I can't ___." },
      { type: "strip", part: "C", stage: "Can and Can't", heading: "Can and Can't 3", numbered: false, labels: false, size: 100, items: [A_BIKE, A_COOK], question: CANQ, instruction: LISTEN_ANSWER, guide: "I can ___, but I can't ___." },
      { type: "peek", part: "C", stage: "Mystery Activity", heading: "Mystery Activity", item: A_DRAW, reveal: "Can you draw?", question: "Can you do this?", instruction: LOOK_SAY("Guess the activity."), guide: "Yes, I can. / No, I can't." },
      { type: "sprint", part: "C", stage: "Can or Can't Sprint", heading: "Can or Can't Sprint", items: DO11, seconds: 45, instruction: LOOK_SAY("Say if you can or can't. Be fast!"), guide: "I can / can't ___." },

      // ---- Part D: what I can't do (4 min) ----
      { type: "dialogue", part: "D", stage: "My Abilities", heading: "What Can't You Do?", turns: [{ who: "teacher", text: "What can't you do? What can you do?" }], instruction: LISTEN_ANSWER, guide: "I can't ___." },
      { ...TYPE2("I can ___, but I can't ___."), part: "D", stage: "Type It!", heading: "Type Can and Can't" },
      READ_CAN,
      { type: "wrapup", stage: "You've Landed!", recap: "You can say what you can and can't do, and join it with but." },
    ],
  },
  "8-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 8, title: "Because I Like It!", subtitle: "Say why you like or can't do something." },

      // ---- Part A: review (3 min) ----
      { ...ABILITYDICE, part: "A", stage: "Review", heading: "Ability Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I ___ ___." },
      { type: "dialogue", part: "A", stage: "Review", heading: "Favorite Sport", turns: [{ who: "teacher", text: "What is your favorite sport or hobby?" }], instruction: LISTEN_ANSWER, guide: "My favorite is ___." },

      // ---- Part B: four reasons (5 min) ----
      { type: "chips", part: "B", stage: "Four Reasons", heading: "Four Reasons", items: ["fun", "easy", "hard", "boring"], instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Four Reasons", heading: "Because", lines: ["I like soccer *because* it is *fun*.", "I can't cook *because* it is *hard*."], instruction: REPEAT_SENT },
      { ...one(SOCCER), part: "B", stage: "Four Reasons", heading: "Why Do You Like It?", question: "Do you like soccer? Why?", instruction: LISTEN_ANSWER, guide: "I like soccer because it is ___." },
      { ...one(DANCING), part: "B", stage: "Four Reasons", heading: "Why Do You Like It? 2", question: "Do you like dancing? Why?", instruction: LISTEN_ANSWER, guide: "I like dancing because it is ___." },
      { ...one(READING), part: "B", stage: "Four Reasons", heading: "Why Do You Like It? 3", question: "Do you like reading? Why?", instruction: LISTEN_ANSWER, guide: "I like reading because it is ___." },
      { ...one(COOKING), part: "B", stage: "Four Reasons", heading: "Why Do You Like It? 4", question: "Do you like cooking? Why?", instruction: LISTEN_ANSWER, guide: "I like cooking because it is ___." },

      // ---- Part C: reason dice and games (13 min) ----
      { ...REASONDICE, part: "C", stage: "Reason Dice", heading: "Reason Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I like ___ because it is ___." },
      { ...REASONDICE, part: "C", stage: "Reason Dice", heading: "Reason Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I like ___ because it is ___." },
      { ...REASONDICE, part: "C", stage: "Reason Dice", heading: "Reason Dice 3", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I like ___ because it is ___." },
      { ...REASONDICE, part: "C", stage: "Reason Dice", heading: "Reason Dice 4", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I like ___ because it is ___." },
      { type: "spin", part: "C", stage: "Reason Wheel", heading: "Reason Wheel", items: REASONS, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say something that is like this."]], guide: "___ is ___." },
      { type: "strip", part: "C", stage: "Which Do You Like?", heading: "Which Do You Like?", numbered: false, labels: false, size: 100, items: [SOCCER, DANCING], question: "Which do you like? Why?", instruction: LISTEN_ANSWER, guide: "I like ___ because it is ___." },
      { type: "strip", part: "C", stage: "Which Do You Like?", heading: "Which Do You Like? 2", numbered: false, labels: false, size: 100, items: [SWIMMING, READING], question: "Which do you like? Why?", instruction: LISTEN_ANSWER, guide: "I like ___ because it is ___." },
      { type: "strip", part: "C", stage: "Which Do You Like?", heading: "Which Do You Like? 3", numbered: false, labels: false, size: 100, items: [BASKETBALL, COOKING], question: "Which do you like? Why?", instruction: NO_HELP("Choose one and say why.") },
      { type: "peek", part: "C", stage: "Guess My Favorite", heading: "Guess My Favorite", item: SOCCER, reveal: "It is soccer.", question: "I like it because it is fun. I use a ball.", instruction: [["👀", "Read the clue."], ["🗣️", "Guess the sport."]], guide: "It is ___." },
      { type: "sprint", part: "C", stage: "Because Sprint", heading: "Because Sprint", items: CLUBS6, seconds: 45, instruction: LOOK_SAY("Say why you like it. Be fast!"), guide: "I like it because it is ___." },

      // ---- Part D: why I like it (4 min) ----
      { type: "dialogue", part: "D", stage: "My Reasons", heading: "Why?", turns: [{ who: "teacher", text: "What do you like? Why do you like it?" }], instruction: LISTEN_ANSWER, guide: "I like ___ because it is ___." },
      { ...TYPE2("I like ___ because it is ___."), part: "D", stage: "Type It!", heading: "Type Your Reason" },
      READ_CAN,
      { type: "wrapup", stage: "You've Landed!", recap: "You can say why you like something with because." },
    ],
  },
  "8-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 8, title: "Let's Review!", subtitle: "Play the sports and hobbies games." },

      // ---- Part A: memory challenge (4 min) ----
      { type: "missing", part: "A", stage: "Memory Challenge", heading: "What's Missing?", items: HOBBY5, size: 92, instruction: [["👀", "Look at the pictures."], ["🗣️", "Say the one that went away."]], guide: "___ is missing." },
      { type: "spin", part: "A", stage: "Memory Challenge", heading: "Ability Wheel", items: SPORT6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what you can do."]], guide: "I can ___." },

      // ---- Part B: can and can't (5 min) ----
      { ...ABILITYDICE, part: "B", stage: "Ability Dice", heading: "Ability Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I ___ ___." },
      { ...ABILITYDICE, part: "B", stage: "Ability Dice", heading: "Ability Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I ___ ___." },
      { ...ABILITYDICE, part: "B", stage: "Ability Dice", heading: "Ability Dice 3", instruction: NO_HELP("Say the sentence.") },

      // ---- Part C: reasons and games (13 min) ----
      { ...REASONDICE, part: "C", stage: "Reason Dice", heading: "Reason Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I like ___ because it is ___." },
      { ...REASONDICE, part: "C", stage: "Reason Dice", heading: "Reason Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I like ___ because it is ___." },
      { ...REASONDICE, part: "C", stage: "Reason Dice", heading: "Reason Dice 3", instruction: NO_HELP("Say the sentence.") },
      { type: "strip", part: "C", stage: "Can and Can't", heading: "Can and Can't", numbered: false, labels: false, size: 100, items: [A_SOCCER, A_SING], question: CANQ, instruction: LISTEN_ANSWER, guide: "I can ___, but I can't ___." },
      { type: "strip", part: "C", stage: "Can and Can't", heading: "Can and Can't 2", numbered: false, labels: false, size: 100, items: [A_JUMP, A_COOK], question: CANQ, instruction: NO_HELP("Say what you can and can't do.") },
      { type: "peek", part: "C", stage: "Guess My Favorite", heading: "Guess My Favorite", item: DANCING, reveal: "It is dancing.", question: "I like it because it is fun. I use music.", instruction: [["👀", "Read the clue."], ["🗣️", "Guess the hobby."]], guide: "It is ___." },
      { type: "sprint", part: "C", stage: "Beat the Clock", heading: "Beat the Clock", items: DO11, seconds: 45, instruction: LOOK_SAY("Say what you can or can't do. Be fast!") },
      { type: "sprint", part: "C", stage: "Beat the Clock", heading: "Beat the Clock 2", items: CLUBS6, seconds: 45, instruction: LOOK_SAY("Say why you like it. Be fast!") },

      // ---- Part D: three things (3 min) ----
      { type: "dialogue", part: "D", stage: "Review", heading: "Three Things", turns: [{ who: "teacher", text: "Tell me three things about sports and hobbies." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE2("I can ___, but I can't ___."), part: "D", stage: "Type It!", heading: "Type Can and Can't" },
      READ_CAN,
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about what you can do, what you can't do and why." },
    ],
  },
  "8-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 8, title: "Show What You Know!", subtitle: "Talk about sports and hobbies, all on your own." },

      // ---- Part A: conversation starter (4 min) ----
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Tell Me About You", turns: [{ who: "teacher", text: "Tell me about the sports and hobbies you like." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Can and Can't", turns: [{ who: "teacher", text: "What can you do? What can't you do?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Why?", turns: [{ who: "teacher", text: "Why do you like your favorite sport or hobby?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: dice and interviews (8 min) ----
      { ...ABILITYDICE, part: "B", stage: "Ability Dice", heading: "Ability Dice", instruction: NO_HELP("Say the sentence.") },
      { ...ABILITYDICE, part: "B", stage: "Ability Dice", heading: "Ability Dice 2", instruction: NO_HELP("Say the sentence.") },
      { ...REASONDICE, part: "B", stage: "Reason Dice", heading: "Reason Dice", instruction: NO_HELP("Say the sentence.") },
      { ...REASONDICE, part: "B", stage: "Reason Dice", heading: "Reason Dice 2", instruction: NO_HELP("Say the sentence.") },
      { ...ABILITYDICE, part: "B", stage: "Ability Dice", heading: "Ability Dice 3", instruction: NO_HELP("Say the sentence.") },
      { ...ABILITYDICE, part: "B", stage: "Ability Dice", heading: "Ability Dice 4", instruction: NO_HELP("Say the sentence.") },
      { ...REASONDICE, part: "B", stage: "Reason Dice", heading: "Reason Dice 3", instruction: NO_HELP("Say the sentence.") },
      { ...REASONDICE, part: "B", stage: "Reason Dice", heading: "Reason Dice 4", instruction: NO_HELP("Say the sentence.") },
      { type: "dialogue", part: "B", stage: "Interview", heading: "Interview Me!", turns: [{ who: "teacher", text: "Now you ask me! Ask me what I can do and why I like it." }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Ask the teacher questions."]] },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best!", items: DO11, seconds: 60, labels: false, instruction: [["🤔", "No help this time!"], ["🗣️", "Say what you can or can't do. Be fast!"]] },

      // ---- Part C: my favorite (5 min) ----
      { type: "dialogue", part: "C", stage: "My Favorite", heading: "My Favorite Sport", turns: [{ who: "teacher", text: "Tell me about your favorite sport. Can you do it? Why do you like it?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "My Favorite", heading: "Something New", turns: [{ who: "teacher", text: "What do you want to learn? Why?" }], instruction: LISTEN_ANSWER },

      // ---- Part D: teacher and student story, then writing (8 min) ----
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together", lines: ["Yesterday, I went to the *park*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 2", lines: ["I saw a boy. He can *ride a bike*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 3", lines: ["He can *jump*, too."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Type It!", heading: "About Me...", lines: ["Write about what you can do and what you like."], instruction: [["⌨️", "Type four or five sentences in the chat."]] },
      { ...READ_CAN, heading: "Read Your Writing" },
      { type: "wrapup", stage: "Unit 8 Complete!", title: "Unit 8 Complete!", see: "Great job!", recap: "You can talk about what you can do, what you can't and why, in your own words." },
    ],
  },
  "8-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 8, title: "Unit 8 Test", subtitle: "Show what you can say about sports and hobbies!" },

      // ---- Part A: words ----
      { ...one(A_RUN), part: "A", stage: "Words", heading: "What Is It?", question: "What can you do in this picture?", instruction: LISTEN_ANSWER },
      { ...one(A_JUMP), part: "A", stage: "Words", heading: "What Is It? 2", question: "What can you do in this picture?", instruction: LISTEN_ANSWER },
      { ...one(A_BIKE), part: "A", stage: "Words", heading: "What Is It? 3", question: "What can you do in this picture?", instruction: LISTEN_ANSWER },
      { ...one(A_SWIM), part: "A", stage: "Words", heading: "What Is It? 4", question: "What can you do in this picture?", instruction: LISTEN_ANSWER },
      { ...one(A_DANCE), part: "A", stage: "Words", heading: "What Is It? 5", question: "What can you do in this picture?", instruction: LISTEN_ANSWER },
      { ...one(A_SING), part: "A", stage: "Words", heading: "What Is It? 6", question: "What can you do in this picture?", instruction: LISTEN_ANSWER },

      // ---- Part B: can and can't ----
      { ...one(A_SWIM), part: "B", stage: "Can and Can't", heading: "Can You...?", question: "Can you swim?", instruction: LISTEN_ANSWER },
      { ...one(A_BIKE), part: "B", stage: "Can and Can't", heading: "Can You...? 2", question: "Can you ride a bike?", instruction: LISTEN_ANSWER },
      { ...one(A_DANCE), part: "B", stage: "Can and Can't", heading: "Can You...? 3", question: "Can you dance?", instruction: LISTEN_ANSWER },
      { ...one(A_COOK), part: "B", stage: "Can and Can't", heading: "Can You...? 4", question: "Can you cook?", instruction: LISTEN_ANSWER },
      { ...one(A_SING), part: "B", stage: "Can and Can't", heading: "Can You...? 5", question: "Can you sing?", instruction: LISTEN_ANSWER },
      { ...one(A_JUMP), part: "B", stage: "Can and Can't", heading: "Can You...? 6", question: "Can you jump?", instruction: LISTEN_ANSWER },

      // ---- Part C: because ----
      { ...one(SOCCER), part: "C", stage: "Because", heading: "Why Do You Like It?", question: "Do you like soccer? Why?", instruction: LISTEN_ANSWER },
      { ...one(DANCING), part: "C", stage: "Because", heading: "Why Do You Like It? 2", question: "Do you like dancing? Why?", instruction: LISTEN_ANSWER },

      // ---- Part D: speaking ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About You", turns: [{ who: "teacher", text: "What can you do? What can't you do?" }], instruction: [["👂", "Listen to the questions."], ["🗣️", "Answer the questions."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "My Favorite", turns: [{ who: "teacher", text: "What is your favorite sport or hobby? Why do you like it?" }], instruction: [["👂", "Listen to the questions."], ["🗣️", "Say two or three sentences."]] },
      { type: "score", stage: "My Unit 8 Score!", heading: "My Unit 8 Score!", rows: [["Words", "/ 6"], ["Can and can't", "/ 6"], ["Because", "/ 4"], ["Speaking", "/ 4"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 8 Complete!", title: "Unit 8 Complete!", see: "On to Unit 9!", recap: "You can say what you can and can't do and why you like it." },
    ],
  },

  // ---------- Unit 9: How Do You Feel? ----------
  "9-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 9, title: "Feelings Words!", subtitle: "Name more feelings and say how you feel." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "spin", part: "A", stage: "Feeling Wheel", heading: "Feeling Wheel", items: OLD4, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say how you feel."]], guide: "I feel ___." },

      // ---- Part B: four new feelings (5 min) ----
      { type: "strip", part: "B", stage: "Four New Feelings", heading: "Four New Feelings", numbered: false, size: 100, items: NEW4, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Four New Feelings", heading: "How Do You Feel?", lines: [HOWQ, "I feel *worried*."], instruction: REPEAT_SENT },
      { ...one(F_WORRIED), part: "B", stage: "Four New Feelings", heading: "How Do You Feel?", question: HOWQ, instruction: LISTEN_ANSWER, guide: "I feel ___." },
      { ...one(F_EXCITED), part: "B", stage: "Four New Feelings", heading: "How Do You Feel? 2", question: HOWQ, instruction: LISTEN_ANSWER, guide: "I feel ___." },
      { ...one(F_SCARED), part: "B", stage: "Four New Feelings", heading: "How Do You Feel? 3", question: HOWQ, instruction: LISTEN_ANSWER, guide: "I feel ___." },
      { ...one(F_BORED), part: "B", stage: "Four New Feelings", heading: "How Do You Feel? 4", question: HOWQ, instruction: LISTEN_ANSWER, guide: "I feel ___." },
      { type: "strip", part: "B", stage: "Eight Feelings", heading: "Eight Feelings", numbered: false, size: 64, items: FACES8, instruction: REPEAT_WORDS },

      // ---- Part C: the games (13 min) ----
      { type: "spin", part: "C", stage: "Feeling Wheel", heading: "Feeling Wheel 2", items: FACES8, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say how you feel."]], guide: "I feel ___." },
      { type: "spin", part: "C", stage: "Feeling Wheel", heading: "Feeling Wheel 3", items: FACES8, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say how you feel."]], guide: "I feel ___." },
      { type: "peek", part: "C", stage: "Mystery Face", heading: "Mystery Face", item: F_EXCITED, reveal: "I feel excited!", question: HOWQ, instruction: LOOK_SAY("Guess the feeling."), guide: "I think I feel ___." },
      { type: "peek", part: "C", stage: "Mystery Face", heading: "Mystery Face 2", item: F_SCARED, reveal: "I feel scared!", question: HOWQ, instruction: LOOK_SAY("Guess the feeling."), guide: "I think I feel ___." },
      { type: "peek", part: "C", stage: "Mystery Face", heading: "Mystery Face 3", item: F_BORED, reveal: "I feel bored!", question: HOWQ, instruction: LOOK_SAY("Guess the feeling."), guide: "I think I feel ___." },
      { type: "missing", part: "C", stage: "What's Missing?", heading: "What's Missing?", items: NEW4, instruction: [["👀", "Look at the faces."], ["🗣️", "Say the feeling that went away."]], guide: "The ___ face is missing." },
      { type: "dialogue", part: "C", stage: "Emotion Theater", heading: "Emotion Theater", turns: [{ who: "teacher", text: "(The teacher shows a feeling with a face, without speaking.)" }], instruction: [["👀", "Look at the teacher."], ["🗣️", "Ask what the teacher feels."]], guide: "Are you ___?" },
      { type: "dialogue", part: "C", stage: "Emotion Theater", heading: "Emotion Theater 2", turns: [{ who: "teacher", text: "(The teacher shows a different feeling, without speaking.)" }], instruction: [["👀", "Look at the teacher."], ["🗣️", "Ask what the teacher feels."]], guide: "Are you ___?" },
      { type: "sprint", part: "C", stage: "Feeling Sprint", heading: "Feeling Sprint", items: FACES8, seconds: 45, instruction: LOOK_SAY("Say how you feel. Be fast!"), guide: "I feel ___." },

      // ---- Part D: my feelings (4 min) ----
      { type: "dialogue", part: "D", stage: "My Feelings", heading: "How Do You Feel Today?", turns: [{ who: "teacher", text: "How do you feel today?" }], instruction: LISTEN_ANSWER, guide: "Today, I feel ___." },
      { ...TYPE2("Today, I feel ___. I feel ___, too."), part: "D", stage: "Type It!", heading: "Type Your Feelings" },
      READ_FEEL,
      { type: "wrapup", stage: "You've Landed!", recap: "You can name eight feelings and say how you feel." },
    ],
  },
  "9-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 9, title: "Why Do You Feel That Way?", subtitle: "Say how you feel and why, with because." },

      // ---- Part A: review (3 min) ----
      { type: "spin", part: "A", stage: "Review", heading: "Feeling Wheel", items: FACES8, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say how you feel."]], guide: "I feel ___." },
      { type: "dialogue", part: "A", stage: "Review", heading: "Today", turns: [{ who: "teacher", text: HOWQ }], instruction: LISTEN_ANSWER, guide: "I feel ___." },

      // ---- Part B: reasons (5 min) ----
      { type: "strip", part: "B", stage: "Reasons", heading: "Five Reasons", numbered: false, size: 84, items: SITS5, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Reasons", heading: "Because", lines: ["I feel *happy* because it is my birthday.", "I feel *worried* because I have a test."], instruction: REPEAT_SENT },
      { ...one(SIT_BIRTHDAY), part: "B", stage: "Reasons", heading: "Why?", question: WHYQ, instruction: LISTEN_ANSWER, guide: "I feel ___ because ___." },
      { ...one(SIT_TEST), part: "B", stage: "Reasons", heading: "Why? 2", question: WHYQ, instruction: LISTEN_ANSWER, guide: "I feel ___ because ___." },
      { ...one(SIT_LOST), part: "B", stage: "Reasons", heading: "Why? 3", question: WHYQ, instruction: LISTEN_ANSWER, guide: "I feel ___ because ___." },
      { ...one(SIT_SICK), part: "B", stage: "Reasons", heading: "Why? 4", question: WHYQ, instruction: LISTEN_ANSWER, guide: "I feel ___ because ___." },

      // ---- Part C: feeling dice and games (13 min) ----
      { ...FEELDICE, part: "C", stage: "Feeling Dice", heading: "Feeling Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I feel ___ because ___." },
      { ...FEELDICE, part: "C", stage: "Feeling Dice", heading: "Feeling Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I feel ___ because ___." },
      { ...FEELDICE, part: "C", stage: "Feeling Dice", heading: "Feeling Dice 3", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I feel ___ because ___." },
      { ...FEELDICE, part: "C", stage: "Feeling Dice", heading: "Feeling Dice 4", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I feel ___ because ___." },
      { ...FEELDICE, part: "C", stage: "Feeling Dice", heading: "Feeling Dice 5", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I feel ___ because ___." },
      { type: "peek", part: "C", stage: "Guess the Feeling", heading: "Guess the Feeling", item: F_EXCITED, reveal: "I feel excited!", question: "It is my birthday tomorrow!", instruction: CLUEQ_FEEL, guide: "You feel ___." },
      { type: "peek", part: "C", stage: "Guess the Feeling", heading: "Guess the Feeling 2", item: F_WORRIED, reveal: "I feel worried.", question: "I have a big test.", instruction: CLUEQ_FEEL, guide: "You feel ___." },
      { type: "peek", part: "C", stage: "Guess the Feeling", heading: "Guess the Feeling 3", item: F_SAD, reveal: "I feel sad.", question: "My toy is lost.", instruction: CLUEQ_FEEL, guide: "You feel ___." },
      { type: "dialogue", part: "C", stage: "What Happened?", heading: "What Happened?", turns: [{ who: "teacher", text: "You have a big game tomorrow. How do you feel? Why?" }], instruction: LISTEN_ANSWER, guide: "I feel ___ because ___." },
      { type: "dialogue", part: "C", stage: "What Happened?", heading: "What Happened? 2", turns: [{ who: "teacher", text: "Your best friend is sick. How do you feel? Why?" }], instruction: LISTEN_ANSWER, guide: "I feel ___ because ___." },
      { type: "sprint", part: "C", stage: "Why Sprint", heading: "Why Sprint", items: SITS5, seconds: 45, instruction: LOOK_SAY("Say how you feel and why. Be fast!"), guide: "I feel ___ because ___." },

      // ---- Part D: my reasons (4 min) ----
      { type: "dialogue", part: "D", stage: "My Reasons", heading: "A Happy Time", turns: [{ who: "teacher", text: "Tell me about a time you feel happy. Why?" }], instruction: LISTEN_ANSWER, guide: "I feel happy because ___." },
      { ...TYPE2("I feel ___ because ___."), part: "D", stage: "Type It!", heading: "Type Your Reason" },
      READ_FEEL,
      { type: "wrapup", stage: "You've Landed!", recap: "You can say how you feel and why, with because." },
    ],
  },
  "9-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 9, title: "What Should You Do?", subtitle: "Give simple advice with should and shouldn't." },

      // ---- Part A: review (3 min) ----
      { ...FEELDICE, part: "A", stage: "Review", heading: "Feeling Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I feel ___ because ___." },
      { type: "dialogue", part: "A", stage: "Review", heading: "A Problem", turns: [{ who: "teacher", text: "I have a problem. I'm tired and worried. How do I feel?" }], instruction: LISTEN_ANSWER, guide: "You feel ___." },

      // ---- Part B: advice (5 min) ----
      { type: "chips", part: "B", stage: "Advice Words", heading: "Advice Words", items: ["rest", "study", "talk to a friend", "ask the teacher"], instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Advice", heading: "Should", lines: ["I'm tired. You *should* rest.", "I have a test. You *should* study."], instruction: REPEAT_SENT },
      { type: "message", part: "B", stage: "Advice", heading: "Shouldn't", lines: ["I'm worried. You *should* talk to a friend.", "You *shouldn't* worry."], instruction: REPEAT_SENT },
      { ...one(F_TIRED), part: "B", stage: "Advice", heading: "What Should I Do?", question: "I'm tired. What should I do?", instruction: LISTEN_ANSWER, guide: "You should ___." },
      { ...one(SIT_TEST), part: "B", stage: "Advice", heading: "What Should I Do? 2", question: "I have a test. What should I do?", instruction: LISTEN_ANSWER, guide: "You should ___." },
      { ...one(SIT_LOST), part: "B", stage: "Advice", heading: "What Should I Do? 3", question: "My toy is lost. What should I do?", instruction: LISTEN_ANSWER, guide: "You should ___." },

      // ---- Part C: advice desk and games (13 min) ----
      { ...ADV_TIRED, part: "C", stage: "Advice Desk", heading: "Advice Desk", instruction: ADVQ, guide: "You should ___." },
      { ...ADV_TEST, part: "C", stage: "Advice Desk", heading: "Advice Desk 2", instruction: ADVQ, guide: "You should ___." },
      { ...ADV_LOST, part: "C", stage: "Advice Desk", heading: "Advice Desk 3", instruction: ADVQ, guide: "You should ___." },
      { ...ADV_SICK, part: "C", stage: "Advice Desk", heading: "Advice Desk 4", instruction: ADVQ, guide: "You should ___." },
      { ...ADV_GAME, part: "C", stage: "Advice Desk", heading: "Advice Desk 5", instruction: ADVQ, guide: "You should ___." },
      { ...ADVDICE, part: "C", stage: "Advice Dice", heading: "Advice Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Give the advice."]], guide: "You should ___." },
      { ...ADVDICE, part: "C", stage: "Advice Dice", heading: "Advice Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Give the advice."]], guide: "You should ___." },
      { ...ADVDICE, part: "C", stage: "Advice Dice", heading: "Advice Dice 3", instruction: [["👀", "Look at the dice."], ["🗣️", "Give the advice."]], guide: "You should ___." },
      { ...ADVDICE, part: "C", stage: "Advice Dice", heading: "Advice Dice 4", instruction: [["👀", "Look at the dice."], ["🗣️", "Give the advice."]], guide: "You should ___." },
      { type: "dialogue", part: "C", stage: "Advice Hotline", heading: "Advice Hotline", turns: [{ who: "teacher", text: "Hello! I have too much homework. What should I do?" }], instruction: LISTEN_ANSWER, guide: "You should ___." },
      { type: "dialogue", part: "C", stage: "Advice Hotline", heading: "Advice Hotline 2", turns: [{ who: "teacher", text: "Hello! I'm nervous about my game. What should I do?" }], instruction: LISTEN_ANSWER, guide: "You should ___." },
      { type: "sprint", part: "C", stage: "Advice Sprint", heading: "Advice Sprint", items: [F_TIRED, SIT_TEST, SIT_LOST, SIT_SICK, F_WORRIED], seconds: 45, instruction: LOOK_SAY("Give advice. Be fast!"), guide: "You should ___." },

      // ---- Part D: my advice (4 min) ----
      { type: "dialogue", part: "D", stage: "My Advice", heading: "Give Me Advice", turns: [{ who: "teacher", text: "I am nervous about tomorrow. What should I do?" }], instruction: LISTEN_ANSWER, guide: "You should ___." },
      { ...TYPE2("You should ___. You shouldn't ___."), part: "D", stage: "Type It!", heading: "Type Your Advice" },
      { ...READ_ALOUD, heading: "Read Your Advice" },
      { type: "wrapup", stage: "You've Landed!", recap: "You can give simple advice with should and shouldn't." },
    ],
  },
  "9-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 9, title: "Let's Review!", subtitle: "Play the feelings, reasons and advice games." },

      // ---- Part A: memory challenge (4 min) ----
      { type: "missing", part: "A", stage: "Memory Challenge", heading: "What's Missing?", items: OLD4, instruction: [["👀", "Look at the faces."], ["🗣️", "Say the feeling that went away."]], guide: "The ___ face is missing." },
      { type: "spin", part: "A", stage: "Memory Challenge", heading: "Feeling Wheel", items: FACES8, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say how you feel."]], guide: "I feel ___." },

      // ---- Part B: feeling dice (5 min) ----
      { ...FEELDICE, part: "B", stage: "Feeling Dice", heading: "Feeling Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I feel ___ because ___." },
      { ...FEELDICE, part: "B", stage: "Feeling Dice", heading: "Feeling Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I feel ___ because ___." },
      { ...FEELDICE, part: "B", stage: "Feeling Dice", heading: "Feeling Dice 3", instruction: NO_HELP("Say the sentence.") },

      // ---- Part C: advice and games (13 min) ----
      { ...ADV_GAME, part: "C", stage: "Advice Desk", heading: "Advice Desk", instruction: ADVQ, guide: "You should ___." },
      { ...ADV_SICK, part: "C", stage: "Advice Desk", heading: "Advice Desk 2", instruction: ADVQ, guide: "You should ___." },
      { ...ADV_TEST, part: "C", stage: "Advice Desk", heading: "Advice Desk 3", instruction: NO_HELP("Say good advice.") },
      { ...ADVDICE, part: "C", stage: "Advice Dice", heading: "Advice Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Give the advice."]], guide: "You should ___." },
      { ...ADVDICE, part: "C", stage: "Advice Dice", heading: "Advice Dice 2", instruction: NO_HELP("Give the advice.") },
      { type: "peek", part: "C", stage: "Guess the Feeling", heading: "Guess the Feeling", item: F_ANGRY, reveal: "I feel angry.", question: "My brother broke my toy.", instruction: CLUEQ_FEEL, guide: "You feel ___." },
      { type: "peek", part: "C", stage: "Guess the Feeling", heading: "Guess the Feeling 2", item: F_BORED, reveal: "I feel bored.", question: "There is nothing to do.", instruction: CLUEQ_FEEL, guide: "You feel ___." },
      { type: "sprint", part: "C", stage: "Beat the Clock", heading: "Beat the Clock", items: [...FACES8, ...SITS5], seconds: 45, instruction: LOOK_SAY("Say how you feel and why. Be fast!") },
      { type: "dialogue", part: "C", stage: "Feeling, Reason, Advice", heading: "Feeling, Reason, Advice", turns: [{ who: "teacher", text: "I'm tired because I stayed up late. Tell me how I feel, and give me advice." }], instruction: NO_HELP("Say the feeling, the reason and the advice.") },

      // ---- Part D: three things (3 min) ----
      { type: "dialogue", part: "D", stage: "Review", heading: "Three Things", turns: [{ who: "teacher", text: "Tell me three things about feelings." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE2("I feel ___ because ___. I should ___."), part: "D", stage: "Type It!", heading: "Type Your Feelings" },
      READ_FEEL,
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about feelings, reasons and advice." },
    ],
  },
  "9-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 9, title: "Show What You Know!", subtitle: "Talk about feelings and give advice, all on your own." },

      // ---- Part A: conversation starter (4 min) ----
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Tell Me About Feelings", turns: [{ who: "teacher", text: "Tell me about feelings. How do you feel today?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "What Makes You Happy?", turns: [{ who: "teacher", text: "What makes you happy? What makes you worried?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "What Helps?", turns: [{ who: "teacher", text: "What helps you when you feel sad or angry?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: friend in trouble (8 min) ----
      { ...ADV_TIRED, part: "B", stage: "Friend in Trouble", heading: "Friend in Trouble", instruction: NO_HELP("Say the feeling and good advice.") },
      { ...ADV_LOST, part: "B", stage: "Friend in Trouble", heading: "Friend in Trouble 2", instruction: NO_HELP("Say the feeling and good advice.") },
      { ...ADV_GAME, part: "B", stage: "Friend in Trouble", heading: "Friend in Trouble 3", instruction: NO_HELP("Say the feeling and good advice.") },
      { ...ADV_TIRED, part: "B", stage: "Friend in Trouble", heading: "Friend in Trouble 4", instruction: NO_HELP("Say the feeling and good advice.") },
      { ...ADV_LOST, part: "B", stage: "Friend in Trouble", heading: "Friend in Trouble 5", instruction: NO_HELP("Say the feeling and good advice.") },
      { ...ADV_GAME, part: "B", stage: "Friend in Trouble", heading: "Friend in Trouble 6", instruction: NO_HELP("Say the feeling and good advice.") },
      { ...ADV_TIRED, part: "B", stage: "Friend in Trouble", heading: "Friend in Trouble 7", instruction: NO_HELP("Say the feeling and good advice.") },
      { ...ADV_LOST, part: "B", stage: "Friend in Trouble", heading: "Friend in Trouble 8", instruction: NO_HELP("Say the feeling and good advice.") },
      { ...ADV_GAME, part: "B", stage: "Friend in Trouble", heading: "Friend in Trouble 9", instruction: NO_HELP("Say the feeling and good advice.") },
      { ...FEELDICE, part: "B", stage: "Feeling Dice", heading: "Feeling Dice", instruction: NO_HELP("Say the sentence.") },
      { ...FEELDICE, part: "B", stage: "Feeling Dice", heading: "Feeling Dice 2", instruction: NO_HELP("Say the sentence.") },
      { ...ADVDICE, part: "B", stage: "Advice Dice", heading: "Advice Dice", instruction: NO_HELP("Give the advice.") },
      { type: "dialogue", part: "B", stage: "My Problem", heading: "My Problem, My Solution", turns: [{ who: "teacher", text: "Tell me about a problem you had. How did you feel? What should you do?" }], instruction: LISTEN_ANSWER },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best!", items: FACES8, seconds: 60, labels: false, instruction: [["🤔", "No help this time!"], ["🗣️", "Say how you feel. Be fast!"]] },

      // ---- Part C: a real talk (5 min) ----
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "A Good Day", turns: [{ who: "teacher", text: "Tell me about a day you felt very happy. Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "Advice for a Friend", turns: [{ who: "teacher", text: "Your friend is worried about a test. Give your friend advice." }], instruction: LISTEN_ANSWER },

      // ---- Part D: teacher and student story, then writing (8 min) ----
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together", lines: ["Yesterday, I had a *test*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 2", lines: ["I was *worried*, but I studied."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 3", lines: ["After that, I went home. I was *happy*!"], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Type It!", heading: "My Feelings...", lines: ["Write about a time you had a feeling, and why."], instruction: [["⌨️", "Type four or five sentences in the chat."]] },
      { ...READ_FEEL, heading: "Read Your Writing" },
      { type: "wrapup", stage: "Unit 9 Complete!", title: "Unit 9 Complete!", see: "Great job!", recap: "You can talk about feelings, reasons and advice, in your own words." },
    ],
  },
  "9-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 9, title: "Unit 9 Test", subtitle: "Show what you can say about feelings!" },

      // ---- Part A: feelings ----
      { ...one(F_WORRIED), part: "A", stage: "Feelings", heading: "How Do You Feel?", question: HOWQ, instruction: LISTEN_ANSWER },
      { ...one(F_EXCITED), part: "A", stage: "Feelings", heading: "How Do You Feel? 2", question: HOWQ, instruction: LISTEN_ANSWER },
      { ...one(F_SCARED), part: "A", stage: "Feelings", heading: "How Do You Feel? 3", question: HOWQ, instruction: LISTEN_ANSWER },
      { ...one(F_BORED), part: "A", stage: "Feelings", heading: "How Do You Feel? 4", question: HOWQ, instruction: LISTEN_ANSWER },
      { ...one(F_HAPPY), part: "A", stage: "Feelings", heading: "How Do You Feel? 5", question: HOWQ, instruction: LISTEN_ANSWER },
      { ...one(F_TIRED), part: "A", stage: "Feelings", heading: "How Do You Feel? 6", question: HOWQ, instruction: LISTEN_ANSWER },

      // ---- Part B: feeling and reason ----
      { ...one(SIT_BIRTHDAY), part: "B", stage: "Feeling and Reason", heading: "Why?", question: "How do you feel? Why? Say two sentences.", instruction: LISTEN_ANSWER },
      { ...one(SIT_TEST), part: "B", stage: "Feeling and Reason", heading: "Why? 2", question: "How do you feel? Why? Say two sentences.", instruction: LISTEN_ANSWER },
      { ...one(SIT_LOST), part: "B", stage: "Feeling and Reason", heading: "Why? 3", question: "How do you feel? Why? Say two sentences.", instruction: LISTEN_ANSWER },

      // ---- Part C: advice ----
      { ...ADV_SICK, part: "C", stage: "Advice", heading: "Give Advice", instruction: ADVQ },
      { ...ADV_TEST, part: "C", stage: "Advice", heading: "Give Advice 2", instruction: ADVQ },

      // ---- Part D: speaking ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About Feelings", turns: [{ who: "teacher", text: "How do you feel today? Why?" }], instruction: [["👂", "Listen to the questions."], ["🗣️", "Answer the questions."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "A Friend in Trouble", turns: [{ who: "teacher", text: "My friend is sad because she lost her toy. What should she do?" }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say why and give advice."]] },
      { type: "score", stage: "My Unit 9 Score!", heading: "My Unit 9 Score!", rows: [["Feelings", "/ 6"], ["Feeling and reason", "/ 6"], ["Advice", "/ 4"], ["Speaking", "/ 4"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 9 Complete!", title: "Unit 9 Complete!", see: "On to Unit 10!", recap: "You can talk about feelings, reasons and advice." },
    ],
  },

  // ---------- Unit 10: Helping at Home ----------
  "10-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 10, title: "My Chores!", subtitle: "Name chores and say what you have to do at home." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "dialogue", part: "A", stage: "Hello!", heading: "At Home", turns: [{ who: "teacher", text: "What do you do after school?" }], instruction: LISTEN_ANSWER, guide: "I ___." },

      // ---- Part B: four chores (5 min) ----
      { type: "strip", part: "B", stage: "Four Chores", heading: "Four Chores", numbered: false, size: 100, items: CHORES4A, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Four Chores", heading: "I Have To...", lines: ["I have to *make my bed*.", "I have to *feed the pet*."], instruction: REPEAT_SENT },
      { ...one(C_BED), part: "B", stage: "Four Chores", heading: "What Do You Have To Do?", question: HAVEQ, instruction: LISTEN_ANSWER, guide: "I have to ___." },
      { ...one(C_ROOM), part: "B", stage: "Four Chores", heading: "What Do You Have To Do? 2", question: HAVEQ, instruction: LISTEN_ANSWER, guide: "I have to ___." },
      { ...one(C_DISHES), part: "B", stage: "Four Chores", heading: "What Do You Have To Do? 3", question: HAVEQ, instruction: LISTEN_ANSWER, guide: "I have to ___." },
      { ...one(C_PET), part: "B", stage: "Four Chores", heading: "What Do You Have To Do? 4", question: HAVEQ, instruction: LISTEN_ANSWER, guide: "I have to ___." },
      { type: "message", part: "B", stage: "Four Chores", heading: "Do You Have To...?", lines: ["Do you have to *make your bed*?", "*Yes, I do.* / *No, I don't.*"], instruction: REPEAT_SENT },

      // ---- Part C: the games (13 min) ----
      { ...CHOREDICE1, part: "C", stage: "Chore Dice", heading: "Chore Dice", instruction: [["👀", "Look at the die."], ["🗣️", "Say the chore."]], guide: "I have to ___." },
      { ...CHOREDICE1, part: "C", stage: "Chore Dice", heading: "Chore Dice 2", instruction: [["👀", "Look at the die."], ["🗣️", "Say the chore."]], guide: "I have to ___." },
      { ...CHOREDICE1, part: "C", stage: "Chore Dice", heading: "Chore Dice 3", instruction: [["👀", "Look at the die."], ["🗣️", "Say the chore."]], guide: "I have to ___." },
      { type: "spin", part: "C", stage: "Chore Wheel", heading: "Chore Wheel", items: CHORES4A, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what you have to do."]], guide: "I have to ___." },
      { ...one(C_DISHES), part: "C", stage: "Do You Have To?", heading: "Do You Have To...?", question: "Do you have to wash the dishes?", instruction: LISTEN_ANSWER, guide: DOHAVE },
      { ...one(C_PET), part: "C", stage: "Do You Have To?", heading: "Do You Have To...? 2", question: "Do you have to feed the pet?", instruction: LISTEN_ANSWER, guide: DOHAVE },
      { ...one(C_ROOM), part: "C", stage: "Do You Have To?", heading: "Do You Have To...? 3", question: "Do you have to clean your room?", instruction: LISTEN_ANSWER, guide: DOHAVE },
      { type: "peek", part: "C", stage: "Mystery Chore", heading: "Mystery Chore", item: C_BED, reveal: "You have to make your bed!", question: HAVEQ, instruction: LOOK_SAY("Guess the chore."), guide: "I have to ___." },
      { type: "peek", part: "C", stage: "Mystery Chore", heading: "Mystery Chore 2", item: C_PET, reveal: "You have to feed the pet!", question: HAVEQ, instruction: LOOK_SAY("Guess the chore."), guide: "I have to ___." },
      { type: "missing", part: "C", stage: "What's Missing?", heading: "What's Missing?", items: CHORES4A, instruction: [["👀", "Look at the chores."], ["🗣️", "Say the chore that went away."]], guide: "The ___ chore is missing." },
      { type: "sprint", part: "C", stage: "Chore Sprint", heading: "Chore Sprint", items: CHORES4A, seconds: 45, instruction: LOOK_SAY("Say what you have to do. Be fast!"), guide: "I have to ___." },
      { type: "dialogue", part: "C", stage: "You're Late!", heading: "You're Late!", turns: [{ who: "teacher", text: "You're late! What do you have to do?" }], instruction: NO_HELP("Say what you have to do.") },

      // ---- Part D: my chores (4 min) ----
      { type: "dialogue", part: "D", stage: "My Chores", heading: "My Chores", turns: [{ who: "teacher", text: "What do you have to do at home?" }], instruction: LISTEN_ANSWER, guide: "I have to ___." },
      { ...TYPE2("I have to ___. I have to ___."), part: "D", stage: "Type It!", heading: "Type Your Chores" },
      READ_HOME,
      { type: "wrapup", stage: "You've Landed!", recap: "You can name chores and say what you have to do at home." },
    ],
  },
  "10-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 10, title: "Can You Help?", subtitle: "Ask someone to help with a chore, politely." },

      // ---- Part A: review (3 min) ----
      { type: "spin", part: "A", stage: "Review", heading: "Chore Wheel", items: CHORES4A, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what you have to do."]], guide: "I have to ___." },
      { ...one(C_BED), part: "A", stage: "Review", heading: "Do You Have To...?", question: "Do you have to make your bed?", instruction: LISTEN_ANSWER, guide: DOHAVE },

      // ---- Part B: four more chores and requests (5 min) ----
      { type: "strip", part: "B", stage: "Four More Chores", heading: "Four More Chores", numbered: false, size: 100, items: CHORES4B, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Requests", heading: "Can You...?", lines: ["*Can you* set the table, *please*?", "*Sure!* / *Sorry, I can't.*"], instruction: REPEAT_SENT },
      { ...one(C_TABLE), part: "B", stage: "Requests", heading: "Ask for Help", instruction: ASKCHORE, guide: "Can you ___, please?" },
      { ...one(C_SWEEP), part: "B", stage: "Requests", heading: "Ask for Help 2", instruction: ASKCHORE, guide: "Can you ___, please?" },
      { ...one(C_TRASH), part: "B", stage: "Requests", heading: "Ask for Help 3", instruction: ASKCHORE, guide: "Can you ___, please?" },
      { ...one(C_LAUNDRY), part: "B", stage: "Requests", heading: "Ask for Help 4", instruction: ASKCHORE, guide: "Can you ___, please?" },

      // ---- Part C: chore dice and helper games (13 min) ----
      { ...CHOREDICE, part: "C", stage: "Chore Dice", heading: "Chore Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I have to ___. / Can you ___?" },
      { ...CHOREDICE, part: "C", stage: "Chore Dice", heading: "Chore Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I have to ___. / Can you ___?" },
      { ...CHOREDICE, part: "C", stage: "Chore Dice", heading: "Chore Dice 3", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I have to ___. / Can you ___?" },
      { ...HH_DISHES, part: "C", stage: "Home Helper", heading: "Home Helper", instruction: HHQ },
      { ...HH_TRASH, part: "C", stage: "Home Helper", heading: "Home Helper 2", instruction: HHQ },
      { ...HH_ROOM, part: "C", stage: "Home Helper", heading: "Home Helper 3", instruction: HHQ },
      { type: "dialogue", part: "C", stage: "Help Hotline", heading: "Help Hotline", turns: [{ who: "teacher", text: "Can you sweep the floor, please?" }], instruction: LISTEN_ANSWER, guide: "Sure! / Sorry, I can't." },
      { type: "dialogue", part: "C", stage: "Help Hotline", heading: "Help Hotline 2", turns: [{ who: "teacher", text: "Can you do the laundry, please?" }], instruction: LISTEN_ANSWER, guide: "Sure! / Sorry, I can't." },
      { type: "spin", part: "C", stage: "Chore Wheel", heading: "Chore Wheel 2", items: CHORES8, instruction: [["👀", "Look at the wheel."], ["🗣️", "Ask the teacher for help."]], guide: "Can you ___, please?" },
      { type: "peek", part: "C", stage: "Mystery Chore", heading: "Mystery Chore", item: C_SWEEP, reveal: "Can you sweep the floor?", question: "Ask the teacher for help.", instruction: LOOK_SAY("Guess the chore."), guide: "Can you ___, please?" },
      { type: "sprint", part: "C", stage: "Chore Sprint", heading: "Chore Sprint", items: CHORES8, seconds: 45, instruction: LOOK_SAY("Ask for help. Be fast!"), guide: "Can you ___, please?" },

      // ---- Part D: my request (4 min) ----
      { type: "dialogue", part: "D", stage: "My Request", heading: "Ask Me!", turns: [{ who: "teacher", text: "I have to do a lot at home. Ask me to help you!" }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Ask for help."]], guide: "Can you ___, please?" },
      { ...TYPE2("Can you ___, please? Sure! I can ___."), part: "D", stage: "Type It!", heading: "Type a Request" },
      READ_HOME,
      { type: "wrapup", stage: "You've Landed!", recap: "You can ask for help politely with Can you, please?" },
    ],
  },
  "10-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 10, title: "Helping Each Other!", subtitle: "Say yes politely, say sorry politely, and help together." },

      // ---- Part A: review (3 min) ----
      { ...CHOREDICE, part: "A", stage: "Review", heading: "Chore Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I have to ___. / Can you ___?" },
      { type: "dialogue", part: "A", stage: "Review", heading: "Can You Help?", turns: [{ who: "teacher", text: "Can you help me, please?" }], instruction: LISTEN_ANSWER, guide: "Sure! / Sorry, I can't." },

      // ---- Part B: good answers (5 min) ----
      { type: "chips", part: "B", stage: "Good Answers", heading: "Four Good Answers", items: ["Sure!", "Of course.", "Sorry, I can't.", "Let's do it together."], instruction: REPEAT_SENT },
      { type: "message", part: "B", stage: "Good Answers", heading: "Yes or Sorry", lines: ["Can you help me? *Sure!*", "Can you cook? *Sorry, I can't. I'm busy.*"], instruction: REPEAT_SENT },
      { type: "message", part: "B", stage: "Good Answers", heading: "Together", lines: ["I have to wash the dishes. Can you help?", "*Let's do it together!*"], instruction: REPEAT_SENT },
      { ...HH_DISHES, part: "B", stage: "Good Answers", heading: "Home Helper", instruction: HHQ },
      { ...HH_LAUNDRY, part: "B", stage: "Good Answers", heading: "Home Helper 2", instruction: HHQ },
      { ...HH_TABLE, part: "B", stage: "Good Answers", heading: "Home Helper 3", instruction: HHQ },

      // ---- Part C: the busy house (13 min) ----
      { ...HH_TRASH, part: "C", stage: "Home Helper", heading: "Home Helper 4", instruction: HHQ },
      { ...HH_ROOM, part: "C", stage: "Home Helper", heading: "Home Helper 5", instruction: HHQ },
      { ...HH_TRASH, part: "C", stage: "Home Helper", heading: "Home Helper 8", instruction: HHQ },
      { ...HH_ROOM, part: "C", stage: "Home Helper", heading: "Home Helper 9", instruction: HHQ },
      { ...HH_TRASH, part: "C", stage: "Home Helper", heading: "Home Helper 10", instruction: HHQ },
      { ...HH_ROOM, part: "C", stage: "Home Helper", heading: "Home Helper 11", instruction: HHQ },
      { ...HH_LAUNDRY, part: "C", stage: "Home Helper", heading: "Home Helper 6", instruction: NO_HELP("Say a polite answer.") },
      { ...HH_TABLE, part: "C", stage: "Home Helper", heading: "Home Helper 7", instruction: NO_HELP("Say a polite answer.") },
      { type: "dialogue", part: "C", stage: "The Busy House", heading: "The Busy House", turns: [{ who: "teacher", text: "I have to cook, but I also have to clean. Can you help?" }], instruction: LISTEN_ANSWER, guide: "Sure! I can ___." },
      { type: "dialogue", part: "C", stage: "The Busy House", heading: "The Busy House 2", turns: [{ who: "teacher", text: "Now I have to wash the dishes too! Can you help?" }], instruction: LISTEN_ANSWER, guide: "Sure! Let's ___ together." },
      { type: "dialogue", part: "C", stage: "Switch Roles", heading: "Switch Roles", turns: [{ who: "teacher", text: "Now you have a lot to do. Ask me for help!" }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Ask for help."]], guide: "Can you ___, please?" },
      { type: "dialogue", part: "C", stage: "Switch Roles", heading: "Switch Roles 2", turns: [{ who: "teacher", text: "(The teacher says sorry.) Sorry, I can't. I'm busy." }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Ask again in a nice way."]], guide: "Okay. Maybe ___." },
      { type: "sprint", part: "C", stage: "Chore Sprint", heading: "Chore Sprint", items: CHORES8, seconds: 45, instruction: LOOK_SAY("Ask for help. Be fast!"), guide: "Can you ___, please?" },

      // ---- Part D: helping each other (4 min) ----
      { type: "dialogue", part: "D", stage: "Helping", heading: "Helping at Home", turns: [{ who: "teacher", text: "Who do you help at home? How do you help?" }], instruction: LISTEN_ANSWER, guide: "I help my ___." },
      { ...TYPE2("Can you ___? Sure! Let's ___ together."), part: "D", stage: "Type It!", heading: "Type Your Talk" },
      READ_HOME,
      { type: "wrapup", stage: "You've Landed!", recap: "You can answer a request politely and help each other." },
    ],
  },
  "10-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 10, title: "Let's Review!", subtitle: "Play the home helper games and talk about chores." },

      // ---- Part A: memory challenge (4 min) ----
      { type: "missing", part: "A", stage: "Memory Challenge", heading: "What's Missing?", items: CHORES4B, instruction: [["👀", "Look at the chores."], ["🗣️", "Say the chore that went away."]], guide: "The ___ chore is missing." },
      { type: "spin", part: "A", stage: "Memory Challenge", heading: "Chore Wheel", items: CHORES8, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say what you have to do."]], guide: "I have to ___." },

      // ---- Part B: chore dice (5 min) ----
      { ...CHOREDICE, part: "B", stage: "Chore Dice", heading: "Chore Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I have to ___. / Can you ___?" },
      { ...CHOREDICE, part: "B", stage: "Chore Dice", heading: "Chore Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the sentence."]], guide: "I have to ___. / Can you ___?" },
      { ...CHOREDICE, part: "B", stage: "Chore Dice", heading: "Chore Dice 3", instruction: NO_HELP("Say the sentence.") },

      // ---- Part C: home helper and games (13 min) ----
      { ...HH_TABLE, part: "C", stage: "Home Helper", heading: "Home Helper", instruction: HHQ },
      { ...HH_ROOM, part: "C", stage: "Home Helper", heading: "Home Helper 2", instruction: HHQ },
      { ...HH_TRASH, part: "C", stage: "Home Helper", heading: "Home Helper 3", instruction: NO_HELP("Say a polite answer.") },
      { ...HH_LAUNDRY, part: "C", stage: "Home Helper", heading: "Home Helper 4", instruction: NO_HELP("Say a polite answer.") },
      { type: "peek", part: "C", stage: "Mystery Chore", heading: "Mystery Chore", item: C_LAUNDRY, reveal: "You have to do the laundry!", question: HAVEQ, instruction: LOOK_SAY("Guess the chore."), guide: "I have to ___." },
      { type: "peek", part: "C", stage: "Mystery Chore", heading: "Mystery Chore 2", item: C_TRASH, reveal: "You have to take out the trash!", question: HAVEQ, instruction: LOOK_SAY("Guess the chore."), guide: "I have to ___." },
      { type: "sprint", part: "C", stage: "Beat the Clock", heading: "Beat the Clock", items: CHORES8, seconds: 45, instruction: LOOK_SAY("Say what you have to do. Be fast!") },
      { type: "sprint", part: "C", stage: "Beat the Clock", heading: "Beat the Clock 2", items: CHORES8, seconds: 45, instruction: LOOK_SAY("Ask for help. Be fast!") },
      { type: "dialogue", part: "C", stage: "Chore Talk", heading: "Chore Talk", turns: [{ who: "teacher", text: "I have to clean the house. Talk to me: what do you have to do, and can you help me?" }], instruction: NO_HELP("Talk about chores and help.") },

      // ---- Part D: three things (3 min) ----
      { type: "dialogue", part: "D", stage: "Review", heading: "Three Things", turns: [{ who: "teacher", text: "Tell me three things about chores and helping." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE2("I have to ___. Can you ___? Sure!"), part: "D", stage: "Type It!", heading: "Type Your Sentences" },
      READ_HOME,
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about chores, ask for help and answer politely." },
    ],
  },
  "10-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 10, title: "Show What You Know!", subtitle: "Talk about chores and helping at home, all on your own." },

      // ---- Part A: conversation starter (4 min) ----
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Tell Me About Chores", turns: [{ who: "teacher", text: "Tell me about the chores you do at home." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Which Chore?", turns: [{ who: "teacher", text: "Which chore do you like? Which chore don't you like? Why?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Who Helps?", turns: [{ who: "teacher", text: "Who helps you at home? How do you help them?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: home emergency (8 min) ----
      { ...HH_DISHES, part: "B", stage: "Home Emergency", heading: "Home Emergency", instruction: NO_HELP("Say a polite answer.") },
      { ...HH_LAUNDRY, part: "B", stage: "Home Emergency", heading: "Home Emergency 2", instruction: NO_HELP("Say a polite answer.") },
      { ...HH_ROOM, part: "B", stage: "Home Emergency", heading: "Home Emergency 3", instruction: NO_HELP("Say a polite answer.") },
      { ...HH_DISHES, part: "B", stage: "Home Emergency", heading: "Home Emergency 4", instruction: NO_HELP("Say a polite answer.") },
      { ...HH_LAUNDRY, part: "B", stage: "Home Emergency", heading: "Home Emergency 5", instruction: NO_HELP("Say a polite answer.") },
      { ...HH_ROOM, part: "B", stage: "Home Emergency", heading: "Home Emergency 6", instruction: NO_HELP("Say a polite answer.") },
      { ...HH_DISHES, part: "B", stage: "Home Emergency", heading: "Home Emergency 7", instruction: NO_HELP("Say a polite answer.") },
      { ...HH_LAUNDRY, part: "B", stage: "Home Emergency", heading: "Home Emergency 8", instruction: NO_HELP("Say a polite answer.") },
      { ...HH_ROOM, part: "B", stage: "Home Emergency", heading: "Home Emergency 9", instruction: NO_HELP("Say a polite answer.") },
      { type: "dialogue", part: "B", stage: "Help Me!", heading: "Help Me!", turns: [{ who: "teacher", text: "Oh no! The trash is full!" }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Offer to help."]] },
      { type: "dialogue", part: "B", stage: "Help Me!", heading: "Help Me! 2", turns: [{ who: "teacher", text: "Oh no! Friends are coming and the table is not ready!" }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Offer to help."]] },
      { ...CHOREDICE, part: "B", stage: "Chore Dice", heading: "Chore Dice", instruction: NO_HELP("Say the sentence.") },
      { ...CHOREDICE, part: "B", stage: "Chore Dice", heading: "Chore Dice 2", instruction: NO_HELP("Say the sentence.") },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best!", items: CHORES8, seconds: 60, labels: false, instruction: [["🤔", "No help this time!"], ["🗣️", "Say what you have to do. Be fast!"]] },

      // ---- Part C: a real talk (5 min) ----
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "My Home Routine", turns: [{ who: "teacher", text: "Tell me about your home routine. What do you have to do every day?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "A Helper", turns: [{ who: "teacher", text: "Tell me how you help your family. Who helps you?" }], instruction: LISTEN_ANSWER },

      // ---- Part D: teacher and student story, then writing (8 min) ----
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together", lines: ["Yesterday, I went *home*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 2", lines: ["I made my *bed*. I did the *laundry*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 3", lines: ["After that, I had *dinner* with my family."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Type It!", heading: "My Home...", lines: ["Write about your chores and how you help at home."], instruction: [["⌨️", "Type four or five sentences in the chat."]] },
      { ...READ_HOME, heading: "Read Your Writing" },
      { type: "wrapup", stage: "Unit 10 Complete!", title: "Unit 10 Complete!", see: "Great job!", recap: "You can talk about chores and helping at home, in your own words." },
    ],
  },
  "10-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 10, title: "Unit 10 Test", subtitle: "Show what you can say about helping at home!" },

      // ---- Part A: chores ----
      { ...one(C_BED), part: "A", stage: "Chores", heading: "What Do You Have To Do?", question: HAVEQ, instruction: LISTEN_ANSWER },
      { ...one(C_DISHES), part: "A", stage: "Chores", heading: "What Do You Have To Do? 2", question: HAVEQ, instruction: LISTEN_ANSWER },
      { ...one(C_TRASH), part: "A", stage: "Chores", heading: "What Do You Have To Do? 3", question: HAVEQ, instruction: LISTEN_ANSWER },
      { ...one(C_SWEEP), part: "A", stage: "Chores", heading: "What Do You Have To Do? 4", question: HAVEQ, instruction: LISTEN_ANSWER },
      { ...one(C_LAUNDRY), part: "A", stage: "Chores", heading: "What Do You Have To Do? 5", question: HAVEQ, instruction: LISTEN_ANSWER },
      { ...one(C_TABLE), part: "A", stage: "Chores", heading: "What Do You Have To Do? 6", question: HAVEQ, instruction: LISTEN_ANSWER },

      // ---- Part B: requests ----
      { type: "strip", part: "B", stage: "Requests", heading: "Ask for Help", numbered: false, labels: false, size: 100, items: [C_BED, C_DISHES], instruction: [["👀", "Look at the chores."], ["🗣️", "Ask for help with each one."]] },
      { type: "strip", part: "B", stage: "Requests", heading: "Ask for Help 2", numbered: false, labels: false, size: 100, items: [C_TRASH, C_SWEEP], instruction: [["👀", "Look at the chores."], ["🗣️", "Ask for help with each one."]] },
      { type: "strip", part: "B", stage: "Requests", heading: "Ask for Help 3", numbered: false, labels: false, size: 100, items: [C_LAUNDRY, C_TABLE], instruction: [["👀", "Look at the chores."], ["🗣️", "Ask for help with each one."]] },

      // ---- Part C: polite answers ----
      { ...HH_DISHES, part: "C", stage: "Polite Answers", heading: "Say a Polite Answer", instruction: HHQ },
      { ...HH_LAUNDRY, part: "C", stage: "Polite Answers", heading: "Say a Polite Answer 2", instruction: HHQ },

      // ---- Part D: speaking ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Tell Me About Chores", turns: [{ who: "teacher", text: "What do you have to do at home?" }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say three or four sentences."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Help Me!", turns: [{ who: "teacher", text: "I have to cook dinner. Can you help me?" }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Answer and ask a question."]] },
      { type: "score", stage: "My Unit 10 Score!", heading: "My Unit 10 Score!", rows: [["Chores", "/ 6"], ["Requests", "/ 6"], ["Polite answers", "/ 4"], ["Speaking", "/ 4"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 10 Complete!", title: "Unit 10 Complete!", see: "On to Unit 11!", recap: "You can talk about chores, ask for help and answer politely." },
    ],
  },

  // ---------- Unit 11: My Future Plans ----------
  "11-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 11, title: "What Are You Going To Do?", subtitle: "Say your plans with I'm going to..." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "dialogue", part: "A", stage: "Yesterday", heading: "Yesterday", turns: [{ who: "teacher", text: "What did you do yesterday?" }], instruction: LISTEN_ANSWER, guide: "Yesterday, I ___." },

      // ---- Part B: six plans (5 min) ----
      { type: "strip", part: "B", stage: "Six Plans", heading: "Six Plans", numbered: false, size: 84, items: PLANS6, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Six Plans", heading: "Going To", lines: ["I'm going to *play soccer*.", "I'm going to *watch a movie*."], instruction: REPEAT_SENT },
      { type: "message", part: "B", stage: "Six Plans", heading: "Tonight and Tomorrow", lines: ["*Tonight*, I'm going to do my homework.", "*Tomorrow*, I'm going to see my friend."], instruction: REPEAT_SENT },
      { ...one(PL_SOCCER), part: "B", stage: "Six Plans", heading: "What Are You Going To Do?", question: GOING, instruction: LISTEN_ANSWER, guide: "I'm going to ___." },
      { ...one(PL_MOVIE), part: "B", stage: "Six Plans", heading: "What Are You Going To Do? 2", question: GOING, instruction: LISTEN_ANSWER, guide: "I'm going to ___." },
      { ...one(PL_PIZZA), part: "B", stage: "Six Plans", heading: "What Are You Going To Do? 3", question: GOING, instruction: LISTEN_ANSWER, guide: "I'm going to ___." },
      { ...one(PL_PARK), part: "B", stage: "Six Plans", heading: "What Are You Going To Do? 4", question: GOING, instruction: LISTEN_ANSWER, guide: "I'm going to ___." },

      // ---- Part C: the games (13 min) ----
      { ...PLANDICE, part: "C", stage: "Plan Dice", heading: "Plan Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the plan."]], guide: "___, I'm going to ___." },
      { ...PLANDICE, part: "C", stage: "Plan Dice", heading: "Plan Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the plan."]], guide: "___, I'm going to ___." },
      { ...PLANDICE, part: "C", stage: "Plan Dice", heading: "Plan Dice 3", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the plan."]], guide: "___, I'm going to ___." },
      { type: "spin", part: "C", stage: "Plan Wheel", heading: "Plan Wheel", items: PLANS6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say your plan."]], guide: "I'm going to ___." },
      { type: "peek", part: "C", stage: "Mystery Plan", heading: "Mystery Plan", item: PL_MOVIE, reveal: "You're going to watch a movie!", question: GOING, instruction: LOOK_SAY("Guess the plan."), guide: "I'm going to ___." },
      { type: "peek", part: "C", stage: "Mystery Plan", heading: "Mystery Plan 2", item: PL_SOCCER, reveal: "You're going to play soccer!", question: GOING, instruction: LOOK_SAY("Guess the plan."), guide: "I'm going to ___." },
      { type: "peek", part: "C", stage: "Mystery Plan", heading: "Mystery Plan 3", item: PL_PIZZA, reveal: "You're going to eat pizza!", question: GOING, instruction: LOOK_SAY("Guess the plan."), guide: "I'm going to ___." },
      { type: "missing", part: "C", stage: "What's Missing?", heading: "What's Missing?", items: PLANS6, size: 84, instruction: [["👀", "Look at the plans."], ["🗣️", "Say the plan that went away."]], guide: "___ is missing." },
      { type: "strip", part: "C", stage: "Yesterday and Tomorrow", heading: "Yesterday and Tomorrow", numbered: false, labels: false, size: 100, items: [PL_PARK, PL_MOVIE], question: "What did you do yesterday? What are you going to do tomorrow?", instruction: LISTEN_ANSWER, guide: "Yesterday, I ___. Tomorrow, I'm going to ___." },
      { type: "sprint", part: "C", stage: "Plan Sprint", heading: "Plan Sprint", items: PLANS6, seconds: 45, instruction: LOOK_SAY("Say your plan. Be fast!"), guide: "I'm going to ___." },
      { type: "sprint", part: "C", stage: "Plan Sprint", heading: "Plan Sprint 2", items: PLANS6, seconds: 45, instruction: LOOK_SAY("Say your plan. Be fast!"), guide: "I'm going to ___." },

      // ---- Part D: my plans (4 min) ----
      { type: "dialogue", part: "D", stage: "My Plans", heading: "Tonight", turns: [{ who: "teacher", text: "What are you going to do tonight?" }], instruction: LISTEN_ANSWER, guide: "Tonight, I'm going to ___." },
      { ...TYPE2("Tonight, I'm going to ___. Tomorrow, I'm going to ___."), part: "D", stage: "Type It!", heading: "Type Your Plans" },
      READ_PLAN,
      { type: "wrapup", stage: "You've Landed!", recap: "You can say your plans with I'm going to." },
    ],
  },
  "11-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 11, title: "My Plans for the Week!", subtitle: "Say your plans for each day of the week." },

      // ---- Part A: review (3 min) ----
      { type: "spin", part: "A", stage: "Review", heading: "Plan Wheel", items: PLANS6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say your plan."]], guide: "I'm going to ___." },
      { type: "dialogue", part: "A", stage: "Review", heading: "Tomorrow", turns: [{ who: "teacher", text: "What are you going to do tomorrow?" }], instruction: LISTEN_ANSWER, guide: "Tomorrow, I'm going to ___." },

      // ---- Part B: the days (5 min) ----
      { type: "chips", part: "B", stage: "The Days", heading: "Seven Days", items: DAY_NAMES, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "The Days", heading: "On Monday", lines: ["*On Monday*, I'm going to do my homework.", "*On Saturday*, I'm going to go to the beach."], instruction: REPEAT_SENT },
      { type: "strip", part: "B", stage: "My Week", heading: "My Week", numbered: false, size: 68, items: WEEK_A, instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the plans."]] },
      { type: "strip", part: "B", stage: "My Week", heading: "What Is the Plan?", numbered: false, size: 68, active: 0, items: WEEK_A, question: "What are you going to do on Monday?", instruction: LISTEN_ANSWER, guide: "On Monday, I'm going to ___." },
      { type: "strip", part: "B", stage: "My Week", heading: "What Is the Plan? 2", numbered: false, size: 68, active: 3, items: WEEK_A, question: "What are you going to do on Thursday?", instruction: LISTEN_ANSWER, guide: "On Thursday, I'm going to ___." },
      { type: "strip", part: "B", stage: "My Week", heading: "What Is the Plan? 3", numbered: false, size: 68, active: 5, items: WEEK_A, question: "What are you going to do on Saturday?", instruction: LISTEN_ANSWER, guide: "On Saturday, I'm going to ___." },
      { type: "message", part: "B", stage: "My Week", heading: "Are You Going To...?", lines: ["Are you going to *swim* on Saturday?", "*Yes, I am.* / *No, I'm not.*"], instruction: REPEAT_SENT },

      // ---- Part C: week games (13 min) ----
      { ...WEEKDICE, part: "C", stage: "Week Dice", heading: "Week Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the plan."]], guide: "On ___, I'm going to ___." },
      { ...WEEKDICE, part: "C", stage: "Week Dice", heading: "Week Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the plan."]], guide: "On ___, I'm going to ___." },
      { ...WEEKDICE, part: "C", stage: "Week Dice", heading: "Week Dice 3", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the plan."]], guide: "On ___, I'm going to ___." },
      { type: "spin", part: "C", stage: "Day Wheel", heading: "Day Wheel", items: DAYS7, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say a plan for that day."]], guide: "On ___, I'm going to ___." },
      { ...one(PL_SWIM), part: "C", stage: "Are You Going To?", heading: "Are You Going To...?", question: "Are you going to swim on Saturday?", instruction: LISTEN_ANSWER, guide: YESAM },
      { ...one(PL_MOVIE), part: "C", stage: "Are You Going To?", heading: "Are You Going To...? 2", question: "Are you going to watch a movie on Sunday?", instruction: LISTEN_ANSWER, guide: YESAM },
      { ...one(PL_SOCCER), part: "C", stage: "Are You Going To?", heading: "Are You Going To...? 3", question: "Are you going to play soccer on Wednesday?", instruction: LISTEN_ANSWER, guide: YESAM },
      { type: "peek", part: "C", stage: "Mystery Plan", heading: "Mystery Plan", item: PL_BEACH, reveal: "You're going to go to the beach!", question: "What are you going to do on Saturday?", instruction: LOOK_SAY("Guess the plan."), guide: "I'm going to ___." },
      { type: "strip", part: "C", stage: "My Week", heading: "My Week 2", numbered: false, size: 68, items: WEEK_B, instruction: NO_HELP("Tell the plans for the week.") },
      { type: "sprint", part: "C", stage: "Week Sprint", heading: "Week Sprint", items: [...WEEK_A, ...WEEK_B], seconds: 45, instruction: LOOK_SAY("Say the plan for the day. Be fast!"), guide: "On ___, I'm going to ___." },

      // ---- Part D: my week (4 min) ----
      { type: "dialogue", part: "D", stage: "My Week", heading: "This Weekend", turns: [{ who: "teacher", text: "What are you going to do this weekend?" }], instruction: LISTEN_ANSWER, guide: "On Saturday, I'm going to ___." },
      { ...TYPE2("On ___, I'm going to ___. On ___, I'm going to ___."), part: "D", stage: "Type It!", heading: "Type Your Week" },
      READ_PLAN,
      { type: "wrapup", stage: "You've Landed!", recap: "You can say your plans for the days of the week." },
    ],
  },
  "11-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 11, title: "Someday I Will!", subtitle: "Talk about what you are going to be someday." },

      // ---- Part A: review (3 min) ----
      { ...WEEKDICE, part: "A", stage: "Review", heading: "Week Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the plan."]], guide: "On ___, I'm going to ___." },
      { type: "dialogue", part: "A", stage: "Review", heading: "This Weekend", turns: [{ who: "teacher", text: "What are you going to do this weekend?" }], instruction: LISTEN_ANSWER, guide: "This weekend, I'm going to ___." },

      // ---- Part B: dreams (5 min) ----
      { type: "strip", part: "B", stage: "Dream Jobs", heading: "Dream Jobs", numbered: false, size: 84, items: JOBS6, instruction: REPEAT_WORDS },
      { type: "message", part: "B", stage: "Someday", heading: "Someday", lines: ["*Someday*, I'm going to be a *pilot*.", "I *want to* be a doctor."], instruction: REPEAT_SENT },
      { type: "message", part: "B", stage: "Someday", heading: "Travel", lines: ["*Someday*, I'm going to *travel*.", "I want to *see* many places."], instruction: REPEAT_SENT },
      { ...one(J_PILOT), part: "B", stage: "Someday", heading: "Someday I Will", question: "What are you going to be someday?", instruction: LISTEN_ANSWER, guide: "Someday, I'm going to be a ___." },
      { ...one(J_CHEF), part: "B", stage: "Someday", heading: "Someday I Will 2", question: "What are you going to be someday?", instruction: LISTEN_ANSWER, guide: "Someday, I'm going to be a ___." },
      { ...one(PL_TRAVEL), part: "B", stage: "Someday", heading: "Someday I Will 3", question: "What are you going to do someday?", instruction: LISTEN_ANSWER, guide: "Someday, I'm going to ___." },

      // ---- Part C: dream games (13 min) ----
      { ...DREAMDICE, part: "C", stage: "Dream Dice", heading: "Dream Dice", instruction: [["👀", "Look at the die."], ["🗣️", "Say your dream."]], guide: "Someday, I'm going to ___." },
      { ...DREAMDICE, part: "C", stage: "Dream Dice", heading: "Dream Dice 2", instruction: [["👀", "Look at the die."], ["🗣️", "Say your dream."]], guide: "Someday, I'm going to ___." },
      { ...DREAMDICE, part: "C", stage: "Dream Dice", heading: "Dream Dice 3", instruction: [["👀", "Look at the die."], ["🗣️", "Say your dream."]], guide: "Someday, I'm going to ___." },
      { type: "spin", part: "C", stage: "Dream Wheel", heading: "Dream Wheel", items: DREAMS7, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say your dream."]], guide: "Someday, I'm going to ___." },
      { type: "dialogue", part: "C", stage: "Talk Show", heading: "Talk Show", turns: [{ who: "teacher", text: "Welcome to the show! What are you going to do someday?" }], instruction: LISTEN_ANSWER, guide: "Someday, I'm going to ___." },
      { type: "dialogue", part: "C", stage: "Talk Show", heading: "Talk Show 2", turns: [{ who: "teacher", text: "Wow! Why do you want to do that?" }], instruction: LISTEN_ANSWER, guide: "I want to ___ because ___." },
      { type: "peek", part: "C", stage: "Mystery Dream", heading: "Mystery Dream", item: J_PILOT, reveal: "You're going to be a pilot!", question: "I want to fly a plane.", instruction: [["👀", "Read the clue."], ["🗣️", "Guess the dream."]], guide: "You're going to be a ___." },
      { type: "peek", part: "C", stage: "Mystery Dream", heading: "Mystery Dream 2", item: J_FIREFIGHTER, reveal: "You're going to be a firefighter!", question: "I want to put out fires.", instruction: [["👀", "Read the clue."], ["🗣️", "Guess the dream."]], guide: "You're going to be a ___." },
      { type: "strip", part: "C", stage: "Tomorrow and Someday", heading: "Tomorrow and Someday", numbered: false, labels: false, size: 100, items: [PL_HOMEWORK, J_DOCTOR], question: "What are you going to do tomorrow? And someday?", instruction: LISTEN_ANSWER, guide: "Tomorrow, I'm going to ___. Someday, I'm going to ___." },
      { type: "sprint", part: "C", stage: "Dream Sprint", heading: "Dream Sprint", items: DREAMS7, seconds: 45, instruction: LOOK_SAY("Say your dream. Be fast!"), guide: "Someday, I'm going to ___." },

      // ---- Part D: my dream (4 min) ----
      { type: "dialogue", part: "D", stage: "My Dream", heading: "My Dream", turns: [{ who: "teacher", text: "What are you going to be someday? Why?" }], instruction: LISTEN_ANSWER, guide: "Someday, I'm going to be a ___ because ___." },
      { ...TYPE2("Someday, I'm going to ___. I want to ___."), part: "D", stage: "Type It!", heading: "Type Your Dream" },
      { ...READ_ALOUD, heading: "Read Your Dream" },
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about what you are going to be someday." },
    ],
  },
  "11-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 11, title: "Let's Review!", subtitle: "Play the plans and dreams games." },

      // ---- Part A: memory challenge (4 min) ----
      { type: "missing", part: "A", stage: "Memory Challenge", heading: "What's Missing?", items: PLANS6, size: 84, instruction: [["👀", "Look at the plans."], ["🗣️", "Say the plan that went away."]], guide: "___ is missing." },
      { type: "spin", part: "A", stage: "Memory Challenge", heading: "Day Wheel", items: DAYS7, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say a plan for that day."]], guide: "On ___, I'm going to ___." },

      // ---- Part B: plan dice (5 min) ----
      { ...PLANDICE, part: "B", stage: "Plan Dice", heading: "Plan Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the plan."]], guide: "___, I'm going to ___." },
      { ...WEEKDICE, part: "B", stage: "Week Dice", heading: "Week Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the plan."]], guide: "On ___, I'm going to ___." },
      { ...WEEKDICE, part: "B", stage: "Week Dice", heading: "Week Dice 2", instruction: NO_HELP("Say the plan.") },

      // ---- Part C: dreams and games (13 min) ----
      { ...DREAMDICE, part: "C", stage: "Dream Dice", heading: "Dream Dice", instruction: [["👀", "Look at the die."], ["🗣️", "Say your dream."]], guide: "Someday, I'm going to ___." },
      { ...DREAMDICE, part: "C", stage: "Dream Dice", heading: "Dream Dice 2", instruction: NO_HELP("Say your dream.") },
      { ...WEEKDICE, part: "C", stage: "Week Dice", heading: "Week Dice 3", instruction: NO_HELP("Say the plan.") },
      { type: "strip", part: "C", stage: "My Week", heading: "My Week", numbered: false, size: 68, items: WEEK_B, instruction: NO_HELP("Tell the plans for the week.") },
      { type: "peek", part: "C", stage: "Mystery Plan", heading: "Mystery Plan", item: PL_GRANDMA, reveal: "You're going to visit your grandma!", question: "What are you going to do on Sunday?", instruction: LOOK_SAY("Guess the plan."), guide: "I'm going to ___." },
      { type: "peek", part: "C", stage: "Mystery Dream", heading: "Mystery Dream", item: J_CHEF, reveal: "You're going to be a chef!", question: "I want to cook for many people.", instruction: [["👀", "Read the clue."], ["🗣️", "Guess the dream."]], guide: "You're going to be a ___." },
      { type: "sprint", part: "C", stage: "Beat the Clock", heading: "Beat the Clock", items: PLANS12, seconds: 45, instruction: LOOK_SAY("Say your plan. Be fast!") },
      { type: "sprint", part: "C", stage: "Beat the Clock", heading: "Beat the Clock 2", items: DREAMS7, seconds: 45, instruction: LOOK_SAY("Say your dream. Be fast!") },
      { type: "dialogue", part: "C", stage: "My Future", heading: "My Future", turns: [{ who: "teacher", text: "Tell me about your future: tonight, this weekend and someday." }], instruction: NO_HELP("Tell about your future.") },

      // ---- Part D: three things (3 min) ----
      { type: "dialogue", part: "D", stage: "Review", heading: "Three Things", turns: [{ who: "teacher", text: "Tell me three plans." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE2("This weekend, I'm going to ___. Someday, I'm going to ___."), part: "D", stage: "Type It!", heading: "Type Your Future" },
      READ_PLAN,
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about your plans for tonight, the week and someday." },
    ],
  },
  "11-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 11, title: "Show What You Know!", subtitle: "Talk about your plans and dreams, all on your own." },

      // ---- Part A: conversation starter (4 min) ----
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Tell Me About Your Plans", turns: [{ who: "teacher", text: "Tell me about your plans for this week." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Your Weekend", turns: [{ who: "teacher", text: "What are you going to do this weekend? Who are you going to see?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Your Dream", turns: [{ who: "teacher", text: "What are you going to be someday? Why?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: pick a day and surprises (8 min) ----
      { ...WEEKDICE, part: "B", stage: "Pick a Day", heading: "Pick a Day!", instruction: NO_HELP("Say a real plan.") },
      { ...WEEKDICE, part: "B", stage: "Pick a Day", heading: "Pick a Day! 2", instruction: NO_HELP("Say a real plan.") },
      { ...WEEKDICE, part: "B", stage: "Pick a Day", heading: "Pick a Day! 3", instruction: NO_HELP("Say a real plan.") },
      { ...WEEKDICE, part: "B", stage: "Pick a Day", heading: "Pick a Day! 4", instruction: NO_HELP("Say a real plan.") },
      { ...WEEKDICE, part: "B", stage: "Pick a Day", heading: "Pick a Day! 5", instruction: NO_HELP("Say a real plan.") },
      { ...WEEKDICE, part: "B", stage: "Pick a Day", heading: "Pick a Day! 6", instruction: NO_HELP("Say a real plan.") },
      { ...WEEKDICE, part: "B", stage: "Pick a Day", heading: "Pick a Day! 7", instruction: NO_HELP("Say a real plan.") },
      { ...WEEKDICE, part: "B", stage: "Pick a Day", heading: "Pick a Day! 8", instruction: NO_HELP("Say a real plan.") },
      { ...WEEKDICE, part: "B", stage: "Pick a Day", heading: "Pick a Day! 9", instruction: NO_HELP("Say a real plan.") },
      { ...DREAMDICE, part: "B", stage: "Dream Dice", heading: "Dream Dice", instruction: NO_HELP("Say your dream.") },
      { type: "dialogue", part: "B", stage: "Future Surprise", heading: "Future Surprise!", turns: [{ who: "teacher", text: "Your friend invites you to the beach on Saturday!" }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say your new plan."]] },
      { type: "dialogue", part: "B", stage: "Future Surprise", heading: "Future Surprise! 2", turns: [{ who: "teacher", text: "It is going to rain tomorrow!" }], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Say your new plan."]] },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best!", items: PLANS12, seconds: 60, labels: false, instruction: [["🤔", "No help this time!"], ["🗣️", "Say your plan. Be fast!"]] },

      // ---- Part C: a real talk (5 min) ----
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "Next Weekend", turns: [{ who: "teacher", text: "Tell me about next weekend. What are you going to do? Who are you going to see?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "Real Talk", heading: "Someday", turns: [{ who: "teacher", text: "Tell me about a big dream. What are you going to do someday?" }], instruction: LISTEN_ANSWER },

      // ---- Part D: teacher and student story, then writing (8 min) ----
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together", lines: ["This weekend, I'm going to go to the *park*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 2", lines: ["I'm going to see my *friend*."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 3", lines: ["We're going to play *soccer*!"], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Type It!", heading: "My Future...", lines: ["Write about your plans and your dream."], instruction: [["⌨️", "Type four or five sentences in the chat."]] },
      { ...READ_PLAN, heading: "Read Your Writing" },
      { type: "wrapup", stage: "Unit 11 Complete!", title: "Unit 11 Complete!", see: "Great job!", recap: "You can talk about your plans and your dreams, in your own words." },
    ],
  },
  "11-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 11, title: "Unit 11 Test", subtitle: "Show what you can say about your plans!" },

      // ---- Part A: plans ----
      { ...one(PL_SOCCER), part: "A", stage: "Plans", heading: "What Are You Going To Do?", question: GOING, instruction: LISTEN_ANSWER },
      { ...one(PL_MOVIE), part: "A", stage: "Plans", heading: "What Are You Going To Do? 2", question: GOING, instruction: LISTEN_ANSWER },
      { ...one(PL_PIZZA), part: "A", stage: "Plans", heading: "What Are You Going To Do? 3", question: GOING, instruction: LISTEN_ANSWER },
      { ...one(PL_PARK), part: "A", stage: "Plans", heading: "What Are You Going To Do? 4", question: GOING, instruction: LISTEN_ANSWER },
      { ...one(PL_BEACH), part: "A", stage: "Plans", heading: "What Are You Going To Do? 5", question: GOING, instruction: LISTEN_ANSWER },
      { ...one(PL_GRANDMA), part: "A", stage: "Plans", heading: "What Are You Going To Do? 6", question: GOING, instruction: LISTEN_ANSWER },

      // ---- Part B: plans for the week ----
      { type: "strip", part: "B", stage: "My Week", heading: "My Week", numbered: false, size: 84, items: WEEK_A.slice(0, 3), instruction: [["👀", "Look at the days."], ["🗣️", "Tell the plan for each day."]] },
      { type: "strip", part: "B", stage: "My Week", heading: "My Week 2", numbered: false, size: 84, items: WEEK_A.slice(4, 7), instruction: [["👀", "Look at the days."], ["🗣️", "Tell the plan for each day."]] },

      // ---- Part C: dreams ----
      { ...one(J_PILOT), part: "C", stage: "Dreams", heading: "Someday", question: "What are you going to be someday?", instruction: LISTEN_ANSWER },
      { ...one(J_DOCTOR), part: "C", stage: "Dreams", heading: "Someday 2", question: "What are you going to be someday?", instruction: LISTEN_ANSWER },

      // ---- Part D: speaking ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "My Plans", turns: [{ who: "teacher", text: "What are you going to do tonight? And this weekend?" }], instruction: [["👂", "Listen to the questions."], ["🗣️", "Answer the questions."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "My Dream", turns: [{ who: "teacher", text: "What are you going to be someday? Why?" }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say two or three sentences."]] },
      { type: "score", stage: "My Unit 11 Score!", heading: "My Unit 11 Score!", rows: [["Plans", "/ 6"], ["Plans for the week", "/ 6"], ["Dreams", "/ 4"], ["Speaking", "/ 4"]], total: "/ 20" },
      { type: "wrapup", stage: "Unit 11 Complete!", title: "Unit 11 Complete!", see: "On to Unit 12!", recap: "You can talk about your plans and your dreams with going to." },
    ],
  },

  // ---------- Unit 12: All About My Year ----------
  "12-1": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 1, unit: 12, title: "Looking Back!", subtitle: "Talk about what you did in the past." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Hello!", heading: "Hello!", turns: [{ who: "teacher", text: "How are you today?" }], instruction: LISTEN_ANSWER, guide: "I'm ___." },
      { type: "dialogue", part: "A", stage: "Yesterday", heading: "Yesterday", turns: [{ who: "teacher", text: "What did you do yesterday?" }], instruction: LISTEN_ANSWER, guide: "Yesterday, I ___." },

      // ---- Part B: past words (5 min) ----
      { type: "table", part: "B", stage: "Past Words", heading: "Three Past Words", rows: [["go", "went"], ["eat", "ate"], ["see", "saw"]], instruction: [["👀", "Look at the words."], ["🗣️", "Say each pair."]] },
      { type: "table", part: "B", stage: "Past Words", heading: "Three More Past Words", rows: [["have", "had"], ["do", "did"], ["make", "made"]], instruction: [["👀", "Look at the words."], ["🗣️", "Say each pair."]] },
      { type: "table", part: "B", stage: "Past Words", heading: "Four More", rows: [["find", "found"], ["help", "helped"], ["look", "looked"], ["open", "opened"]], instruction: [["👀", "Look at the words."], ["🗣️", "Say each pair."]] },
      { type: "table", part: "B", stage: "Past Words", heading: "Say the Word", rows: [["go", "?"], ["see", "?"], ["make", "?"], ["find", "?"]], instruction: SAY_PAST },
      { type: "table", part: "B", stage: "Past Words", heading: "Say the Word 2", rows: [["have", "?"], ["help", "?"], ["do", "?"], ["open", "?"]], instruction: SAY_PAST },
      { type: "message", part: "B", stage: "Past Words", heading: "Yesterday", lines: ["Yesterday, I *went* to the park.", "I *saw* a dog and *ate* pizza."], instruction: REPEAT_SENT },

      // ---- Part C: looking back games (13 min) ----
      { ...YESTDICE, part: "C", stage: "Yesterday Dice", heading: "Yesterday Dice", instruction: [["👀", "Look at the die."], ["🗣️", "Say what you did."]], guide: "Yesterday, I ___." },
      { ...YESTDICE, part: "C", stage: "Yesterday Dice", heading: "Yesterday Dice 2", instruction: [["👀", "Look at the die."], ["🗣️", "Say what you did."]], guide: "Yesterday, I ___." },
      { ...YESTDICE, part: "C", stage: "Yesterday Dice", heading: "Yesterday Dice 3", instruction: [["👀", "Look at the die."], ["🗣️", "Say what you did."]], guide: "Yesterday, I ___." },
      { type: "order", part: "C", stage: "Story Order", heading: "Story Order", items: STORY_RABBIT, instruction: ORDERQ, guide: ORDER4 },
      { type: "order", part: "C", stage: "Story Order", heading: "Story Order 2", items: STORY_CROWN, instruction: ORDERQ, guide: ORDER4 },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter", numbered: false, size: 100, active: 0, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the morning, he ___." },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter 2", numbered: false, size: 100, active: 1, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the afternoon, he ___." },
      { type: "strip", part: "C", stage: "Yesterday Reporter", heading: "Yesterday Reporter 3", numbered: false, size: 100, active: 2, items: [{ ...BREAKFAST, label: "in the morning" }, { ...CAKE, label: "in the afternoon" }, { ...HOMEWORK, label: "in the evening" }], instruction: [["👀", "Look at the day."], ["🗣️", "Tell what he did."]], guide: "In the evening, he ___." },
      { type: "missing", part: "C", stage: "What's Missing?", heading: "What's Missing?", items: PAST6.slice(0, 4), instruction: [["👀", "Look at the pictures."], ["🗣️", "Say the one that went away."]], guide: "___ is missing." },
      { type: "sprint", part: "C", stage: "Yesterday Sprint", heading: "Yesterday Sprint", items: PAST6, seconds: 45, instruction: LOOK_SAY("Say what you did. Be fast!"), guide: "Yesterday, I ___." },

      // ---- Part D: my past (4 min) ----
      { type: "dialogue", part: "D", stage: "My Past", heading: "Last Weekend", turns: [{ who: "teacher", text: "What did you do last weekend? Tell me three things." }], instruction: LISTEN_ANSWER, guide: "Last weekend, I ___." },
      { ...TYPE2("Yesterday, I ___. Then, I ___."), part: "D", stage: "Type It!", heading: "Type Your Past" },
      READ_YEAR,
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about what you did in the past." },
    ],
  },
  "12-2": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 2, unit: 12, title: "Everyday Life!", subtitle: "Talk about your everyday life, your town and your home." },

      // ---- Part A: warm-up (3 min) ----
      { type: "dialogue", part: "A", stage: "Every Day", heading: "Every Day", turns: [{ who: "teacher", text: "What do you do every day?" }], instruction: LISTEN_ANSWER, guide: "Every day, I ___." },
      { type: "spin", part: "A", stage: "Topic Wheel", heading: "Topic Wheel", items: TOPICS_NOW, instruction: TOPICQ },

      // ---- Part B: everyday language (5 min) ----
      { type: "message", part: "B", stage: "My Day", heading: "Every Day", lines: ["I *go* to school. I *have* breakfast at home.", "I *do* my homework."], instruction: REPEAT_SENT },
      { type: "message", part: "B", stage: "My Town", heading: "Around My Town", lines: ["There is a *park* near my school.", "The *bank* is next to the *store*."], instruction: REPEAT_SENT },
      { type: "town", part: "B", stage: "My Town", heading: "Next To", rows: [[T_SCHOOL, T_STORE, T_PARK]], size: 88, question: "What is next to the store?", instruction: MAPQ, guide: "The ___ is next to the store." },
      { type: "message", part: "B", stage: "My Home", heading: "At Home", lines: ["I *have to* make my bed.", "I *can* ride a bike, but I *can't* cook."], instruction: REPEAT_SENT },
      { ...EVERYDICE, part: "B", stage: "Every Day Dice", heading: "Every Day Dice", instruction: [["👀", "Look at the die."], ["🗣️", "Say what you do."]], guide: "Every day, I ___." },

      // ---- Part C: the everyday arcade (13 min) ----
      { ...EVERYDICE, part: "C", stage: "Every Day Dice", heading: "Every Day Dice 2", instruction: [["👀", "Look at the die."], ["🗣️", "Say what you do."]], guide: "Every day, I ___." },
      { ...EVERYDICE, part: "C", stage: "Every Day Dice", heading: "Every Day Dice 3", instruction: [["👀", "Look at the die."], ["🗣️", "Say what you do."]], guide: "Every day, I ___." },
      { type: "spin", part: "C", stage: "Topic Wheel", heading: "Topic Wheel 2", items: TOPICS_NOW, instruction: TOPICQ },
      { type: "spin", part: "C", stage: "Topic Wheel", heading: "Topic Wheel 3", items: TOPICS_NOW, instruction: TOPICQ },
      { type: "route", part: "C", stage: "Be the GPS", heading: "Be the GPS", grid: MAP_HOSPITAL, places: BUILD, goal: "H", question: "Take the car to the hospital.", instruction: GPSQ, guide: "Go straight. Turn ___. Stop!" },
      { type: "shop", part: "C", stage: "Shop Shelf", heading: "Shop Shelf", items: [STOCK(S_APPLE), STOCK(S_COOKIE), STOCK(S_BOOK), STOCK(S_BAG)], budget: 40, size: 80, instruction: SHELFQ, guide: "I'd like a ___, please." },
      { ...ADV_TEST, part: "C", stage: "Advice Desk", heading: "Advice Desk", instruction: ADVQ, guide: "You should ___." },
      { ...HH_TRASH, part: "C", stage: "Home Helper", heading: "Home Helper", instruction: HHQ },
      { type: "peek", part: "C", stage: "Mystery Weather", heading: "Mystery Weather", item: SNOWY, reveal: "It is snowy.", question: WQ, instruction: LOOK_SAY("Guess the weather."), guide: "I think it is ___." },
      { type: "sprint", part: "C", stage: "Topic Sprint", heading: "Topic Sprint", items: TOPICS_NOW, seconds: 45, instruction: LOOK_SAY("Say one sentence about it. Be fast!") },

      // ---- Part D: my everyday life (4 min) ----
      { type: "dialogue", part: "D", stage: "My Life", heading: "My Everyday Life", turns: [{ who: "teacher", text: "Tell me about your everyday life. Where do you go? What is near your school?" }], instruction: LISTEN_ANSWER, guide: "I go to ___. There is a ___ near my ___." },
      { ...TYPE2("I go to ___. There is a ___ near my ___."), part: "D", stage: "Type It!", heading: "Type Your Day" },
      READ_YEAR,
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about your everyday life, your town and your home." },
    ],
  },
  "12-3": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 3, unit: 12, title: "Looking Ahead!", subtitle: "Talk about your plans and dreams." },

      // ---- Part A: warm-up (3 min) ----
      { type: "spin", part: "A", stage: "Review", heading: "Plan Wheel", items: PLANS6, instruction: [["👀", "Look at the wheel."], ["🗣️", "Say your plan."]], guide: "I'm going to ___." },
      { type: "dialogue", part: "A", stage: "Review", heading: "Tomorrow", turns: [{ who: "teacher", text: "What are you going to do tomorrow?" }], instruction: LISTEN_ANSWER, guide: "Tomorrow, I'm going to ___." },

      // ---- Part B: going to review (5 min) ----
      { type: "message", part: "B", stage: "Going To", heading: "Going To", lines: ["I'm going to *play soccer* tomorrow.", "I'm going to *travel* someday."], instruction: REPEAT_SENT },
      { type: "strip", part: "B", stage: "My Week", heading: "My Week", numbered: false, size: 68, items: WEEK_B, instruction: [["👂", "Listen to the teacher."], ["🗣️", "Repeat the plans."]] },
      { type: "strip", part: "B", stage: "My Week", heading: "What Is the Plan?", numbered: false, size: 68, active: 1, items: WEEK_B, question: "What are you going to do on Tuesday?", instruction: LISTEN_ANSWER, guide: "On Tuesday, I'm going to ___." },
      { type: "strip", part: "B", stage: "My Week", heading: "What Is the Plan? 2", numbered: false, size: 68, active: 5, items: WEEK_B, question: "What are you going to do on Saturday?", instruction: LISTEN_ANSWER, guide: "On Saturday, I'm going to ___." },

      // ---- Part C: fortune teller and games (13 min) ----
      { type: "dialogue", part: "C", stage: "Fortune Teller", heading: "Fortune Teller", turns: [{ who: "teacher", text: "I predict... you are going to visit a friend next week." }], instruction: FORTUNEQ, guide: "Yes! / No! I'm going to ___." },
      { type: "dialogue", part: "C", stage: "Fortune Teller", heading: "Fortune Teller 2", turns: [{ who: "teacher", text: "I predict... you are going to go to the beach on Saturday." }], instruction: FORTUNEQ, guide: "Yes! / No! I'm going to ___." },
      { type: "dialogue", part: "C", stage: "Fortune Teller", heading: "Fortune Teller 3", turns: [{ who: "teacher", text: "I predict... you are going to be a pilot someday!" }], instruction: FORTUNEQ, guide: "Yes! / No! I'm going to ___." },
      { type: "dialogue", part: "C", stage: "Fortune Teller", heading: "Fortune Teller 4", turns: [{ who: "teacher", text: "I predict... you are going to visit a friend next week." }], instruction: FORTUNEQ, guide: "Yes! / No! I'm going to ___." },
      { type: "dialogue", part: "C", stage: "Fortune Teller", heading: "Fortune Teller 5", turns: [{ who: "teacher", text: "I predict... you are going to go to the beach on Saturday." }], instruction: FORTUNEQ, guide: "Yes! / No! I'm going to ___." },
      { type: "dialogue", part: "C", stage: "Fortune Teller", heading: "Fortune Teller 6", turns: [{ who: "teacher", text: "I predict... you are going to be a pilot someday!" }], instruction: FORTUNEQ, guide: "Yes! / No! I'm going to ___." },
      { type: "dialogue", part: "C", stage: "Fortune Teller", heading: "Fortune Teller 7", turns: [{ who: "teacher", text: "I predict... you are going to visit a friend next week." }], instruction: FORTUNEQ, guide: "Yes! / No! I'm going to ___." },
      { type: "dialogue", part: "C", stage: "Fortune Teller", heading: "Fortune Teller 8", turns: [{ who: "teacher", text: "I predict... you are going to go to the beach on Saturday." }], instruction: FORTUNEQ, guide: "Yes! / No! I'm going to ___." },
      { type: "dialogue", part: "C", stage: "Fortune Teller", heading: "Fortune Teller 9", turns: [{ who: "teacher", text: "I predict... you are going to be a pilot someday!" }], instruction: FORTUNEQ, guide: "Yes! / No! I'm going to ___." },
      { ...WEEKDICE, part: "C", stage: "Week Dice", heading: "Week Dice", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the plan."]], guide: "On ___, I'm going to ___." },
      { ...WEEKDICE, part: "C", stage: "Week Dice", heading: "Week Dice 2", instruction: [["👀", "Look at the dice."], ["🗣️", "Say the plan."]], guide: "On ___, I'm going to ___." },
      { ...DREAMDICE, part: "C", stage: "Dream Dice", heading: "Dream Dice", instruction: [["👀", "Look at the die."], ["🗣️", "Say your dream."]], guide: "Someday, I'm going to ___." },
      { ...DREAMDICE, part: "C", stage: "Dream Dice", heading: "Dream Dice 2", instruction: [["👀", "Look at the die."], ["🗣️", "Say your dream."]], guide: "Someday, I'm going to ___." },
      { type: "peek", part: "C", stage: "Mystery Plan", heading: "Mystery Plan", item: PL_TRAVEL, reveal: "You're going to travel!", question: "What are you going to do someday?", instruction: LOOK_SAY("Guess the plan."), guide: "I'm going to ___." },
      { type: "sprint", part: "C", stage: "Plan Sprint", heading: "Plan Sprint", items: PLANS12, seconds: 45, instruction: LOOK_SAY("Say your plan. Be fast!"), guide: "I'm going to ___." },

      // ---- Part D: my plans (4 min) ----
      { type: "dialogue", part: "D", stage: "My Plans", heading: "Next Week and Someday", turns: [{ who: "teacher", text: "What are you going to do next week? And someday?" }], instruction: LISTEN_ANSWER, guide: "Next week, I'm going to ___. Someday, I'm going to ___." },
      { ...TYPE2("Next week, I'm going to ___. Someday, I'm going to ___."), part: "D", stage: "Type It!", heading: "Type Your Plans" },
      READ_YEAR,
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about your plans and your dreams." },
    ],
  },
  "12-4": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 4, unit: 12, title: "Let's Review!", subtitle: "Travel in time: past, present and future." },

      // ---- Part A: memory challenge (4 min) ----
      { type: "table", part: "A", stage: "Memory Challenge", heading: "Now Backwards", heads: ["Yesterday", "Today"], rows: [["went", "?"], ["saw", "?"], ["made", "?"], ["ate", "?"]], instruction: [["👀", "Look at the word."], ["🗣️", "Say the word for today."]] },
      { type: "spin", part: "A", stage: "Memory Challenge", heading: "Topic Wheel", items: TOPICS11, instruction: TOPICQ },

      // ---- Part B: time detective (5 min) ----
      { ...one(PARK), size: 88, part: "B", stage: "Time Detective", heading: "Time Detective", sentence: "Clue: *Yesterday*", frame: ["I ___ to the park.", "go or went?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(PIZZA), size: 88, part: "B", stage: "Time Detective", heading: "Time Detective 2", sentence: "Clue: *Every day*", frame: ["I ___ pizza.", "eat or ate?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },
      { ...one(DOG), size: 88, part: "B", stage: "Time Detective", heading: "Time Detective 3", sentence: "Clue: *Tomorrow*", frame: ["I ___ a dog.", "see, saw or am going to see?"], instruction: [["🔍", "Find the clue word."], ["🗣️", "Say the sentence the right way."]] },

      // ---- Part C: time machine (13 min) ----
      { ...TIMEDICE, part: "C", stage: "Time Machine", heading: "Time Machine", instruction: TIMEDICEQ, guide: "___, I ___." },
      { ...TIMEDICE, part: "C", stage: "Time Machine", heading: "Time Machine 2", instruction: TIMEDICEQ, guide: "___, I ___." },
      { ...TIMEDICE, part: "C", stage: "Time Machine", heading: "Time Machine 3", instruction: TIMEDICEQ, guide: "___, I ___." },
      { ...TIMEDICE, part: "C", stage: "Time Machine", heading: "Time Machine 4", instruction: NO_HELP("Say the sentence.") },
      { ...TIMEDICE, part: "C", stage: "Time Machine", heading: "Time Machine 5", instruction: NO_HELP("Say the sentence.") },
      { type: "spin", part: "C", stage: "Topic Wheel", heading: "Topic Wheel 2", items: TOPICS11, instruction: TOPICQ },
      { type: "peek", part: "C", stage: "Mystery Topic", heading: "Mystery Topic", item: J_PILOT, reveal: "She is a pilot.", question: "I fly a plane.", instruction: CLUEQ, guide: "You are a ___." },
      { type: "peek", part: "C", stage: "Mystery Topic", heading: "Mystery Topic 2", item: F_WORRIED, reveal: "I feel worried.", question: "I have a big test.", instruction: CLUEQ_FEEL, guide: "You feel ___." },
      { type: "sprint", part: "C", stage: "Time Travel Sprint", heading: "Time Travel Sprint", items: PAST6, seconds: 60, instruction: [["👀", "Look at the picture."], ["🗣️", "Say it: yesterday, every day, tomorrow."]] },
      { type: "dialogue", part: "C", stage: "Time Traveler", heading: "Time Traveler", turns: [{ who: "teacher", text: "Travel to the past! Now travel to the present! Now travel to the future!" }], instruction: NO_HELP("Say a sentence for each time.") },

      // ---- Part D: past, present, future (3 min) ----
      { type: "dialogue", part: "D", stage: "Review", heading: "Three Times", turns: [{ who: "teacher", text: "Tell me one sentence about yesterday, one about now and one about tomorrow." }], instruction: NO_HELP("Say three sentences.") },
      { ...TYPE2("Yesterday, I ___. Every day, I ___. Tomorrow, I'm going to ___."), part: "D", stage: "Type It!", heading: "Type Three Times" },
      READ_YEAR,
      { type: "wrapup", stage: "You've Landed!", recap: "You can talk about the past, the present and the future." },
    ],
  },
  "12-5": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 5, unit: 12, title: "Show What You Know!", subtitle: "Tell about your year, all on your own." },

      // ---- Part A: conversation starter (4 min) ----
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Tell Me About Your Year", turns: [{ who: "teacher", text: "Tell me about your year." }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Before", turns: [{ who: "teacher", text: "What did you do last year? What did you learn?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "A", stage: "Conversation", heading: "Now", turns: [{ who: "teacher", text: "What is your life like now? What do you do every day?" }], instruction: LISTEN_ANSWER },

      // ---- Part B: time travel interview (8 min) ----
      { ...TIMEDICE, part: "B", stage: "Time Machine", heading: "Time Machine", instruction: NO_HELP("Say the sentence.") },
      { ...TIMEDICE, part: "B", stage: "Time Machine", heading: "Time Machine 2", instruction: NO_HELP("Say the sentence.") },
      { ...TIMEDICE, part: "B", stage: "Time Machine", heading: "Time Machine 3", instruction: NO_HELP("Say the sentence.") },
      { ...TIMEDICE, part: "B", stage: "Time Machine", heading: "Time Machine 4", instruction: NO_HELP("Say the sentence.") },
      { ...TIMEDICE, part: "B", stage: "Time Machine", heading: "Time Machine 5", instruction: NO_HELP("Say the sentence.") },
      { ...TIMEDICE, part: "B", stage: "Time Machine", heading: "Time Machine 6", instruction: NO_HELP("Say the sentence.") },
      { type: "spin", part: "B", stage: "Topic Wheel", heading: "Topic Wheel", items: TOPICS11, instruction: [["🤔", "No help this time!"], ["🗣️", "Say three sentences about it."]] },
      { type: "spin", part: "B", stage: "Topic Wheel", heading: "Topic Wheel 2", items: TOPICS11, instruction: [["🤔", "No help this time!"], ["🗣️", "Say three sentences about it."]] },
      { type: "spin", part: "B", stage: "Topic Wheel", heading: "Topic Wheel 3", items: TOPICS11, instruction: [["🤔", "No help this time!"], ["🗣️", "Say three sentences about it."]] },
      { type: "dialogue", part: "B", stage: "Interview", heading: "Time Travel Interview", turns: [{ who: "teacher", text: "What did you do last weekend? What do you usually do after school? What are you going to do next weekend?" }], instruction: LISTEN_ANSWER },
      { type: "sprint", part: "B", stage: "Beat Your Best", heading: "Beat Your Best!", items: TOPICS11, seconds: 60, labels: false, instruction: [["🤔", "No help this time!"], ["🗣️", "Say a sentence about it. Be fast!"]] },

      // ---- Part C: my best moment (5 min) ----
      { type: "dialogue", part: "C", stage: "My Best Moment", heading: "My Best Year Moment", turns: [{ who: "teacher", text: "Tell me about your best moment this year. What happened? Why was it good?" }], instruction: LISTEN_ANSWER },
      { type: "dialogue", part: "C", stage: "My Best Moment", heading: "Looking Forward", turns: [{ who: "teacher", text: "What are you looking forward to? Why?" }], instruction: LISTEN_ANSWER },

      // ---- Part D: my year story, then writing (8 min) ----
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together", lines: ["Last year, I *went* to a new school."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 2", lines: ["Now, I *study* English every day."], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Story Together", heading: "Story Together 3", lines: ["Next, I'm going to *travel* someday!"], instruction: [["👂", "Listen to the teacher."], ["🗣️", "Add the next sentence."]] },
      { type: "message", part: "D", stage: "Type It!", heading: "All About My Year", lines: ["Write about your year: before, now and next."], instruction: [["⌨️", "Type five or six sentences in the chat."]] },
      { ...READ_YEAR, heading: "Read Your Writing" },
      { type: "wrapup", stage: "Unit 12 Complete!", title: "Unit 12 Complete!", see: "Great job!", recap: "You can tell about your past, your present and your future, in your own words." },
    ],
  },
  "12-6": {
    v2: true,
    slides: [
      { type: "title", stage: "A2 · Soar", lesson: 6, unit: 12, title: "Unit 12 Test", subtitle: "Show what you can say about your year!" },

      // ---- Part A: words from the whole year ----
      { ...one(SUNNY), part: "A", stage: "Words", heading: "What Is It?", question: "What is this? Say a sentence.", instruction: LISTEN_ANSWER },
      { ...one(T_BANK), part: "A", stage: "Words", heading: "What Is It? 2", question: "What is this? Say a sentence.", instruction: LISTEN_ANSWER },
      { ...one(J_DOCTOR), part: "A", stage: "Words", heading: "What Is It? 3", question: "Who is this? Say a sentence.", instruction: LISTEN_ANSWER },
      { ...one(F_WORRIED), part: "A", stage: "Words", heading: "What Is It? 4", question: "How do you feel? Say a sentence.", instruction: LISTEN_ANSWER },

      // ---- Part B: the past ----
      { type: "strip", part: "B", stage: "The Past", heading: "Yesterday", numbered: false, labels: false, size: 100, items: [PARK, PIZZA], instruction: [["👀", "Look at the pictures."], ["🗣️", "Say what you did yesterday."]] },
      { type: "strip", part: "B", stage: "The Past", heading: "Yesterday 2", numbered: false, labels: false, size: 100, items: [DOG, PICTURE], instruction: [["👀", "Look at the pictures."], ["🗣️", "Say what you did yesterday."]] },

      // ---- Part C: the present ----
      { type: "strip", part: "C", stage: "The Present", heading: "Every Day", numbered: false, labels: false, size: 100, items: [SCHOOL, BREAKFAST], instruction: [["👀", "Look at the pictures."], ["🗣️", "Say what you do every day."]] },
      { type: "strip", part: "C", stage: "The Present", heading: "Every Day 2", numbered: false, labels: false, size: 100, items: [C_BED, A_BIKE], instruction: [["👀", "Look at the pictures."], ["🗣️", "Say what you have to do or can do."]] },

      // ---- Part D: the future ----
      { type: "strip", part: "D", stage: "The Future", heading: "Tomorrow", numbered: false, labels: false, size: 100, items: [PL_MOVIE, PL_BEACH], instruction: [["👀", "Look at the pictures."], ["🗣️", "Say what you are going to do."]] },
      { type: "strip", part: "D", stage: "The Future", heading: "Tomorrow 2", numbered: false, labels: false, size: 100, items: [PL_GRANDMA, J_PILOT], instruction: [["👀", "Look at the pictures."], ["🗣️", "Say what you are going to do."]] },

      // ---- Part E: speaking ----
      { type: "dialogue", part: "D", stage: "Speaking", heading: "Before, Now, Next", turns: [{ who: "teacher", text: "Tell me about before, now and next. What did you do last year? What do you do now? What are you going to do next?" }], instruction: [["👂", "Listen to the questions."], ["🗣️", "Say five or six sentences."]] },
      { type: "dialogue", part: "D", stage: "Speaking", heading: "My Favorite", turns: [{ who: "teacher", text: "What was your favorite part of the year? Why?" }], instruction: [["👂", "Listen to the question."], ["🗣️", "Say two or three sentences."]] },
      { type: "score", stage: "My Final Score!", heading: "My Final Score!", rows: [["Words", "/ 4"], ["The past", "/ 4"], ["The present", "/ 4"], ["The future", "/ 4"], ["Speaking", "/ 4"]], total: "/ 20" },
      { type: "wrapup", stage: "A2 Complete!", title: "A2 Complete!", see: "Congratulations!", recap: "You did it! You can talk about your past, your present and your future in English." },
    ],
  },
};
