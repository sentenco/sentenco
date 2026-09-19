export const LEVEL_DATA = {
  A1: {
    name: "Discover",
    accent: "coral",
    color: "#FF6B4A",
    light: "#FFE6DD",
    cefr: "Kids · CEFR A1",
    banner: "/curriculum/a1-banner.png",
    description:
      "The starting point for young learners. A1 builds two things at once: the alphabet and phonics needed to read and write simple words, and the everyday phrases needed to start speaking English right away.",
  },
  A2: {
    name: "Soar",
    accent: "navy",
    color: "#1B2A4A",
    light: "#FFE6DD",
    cefr: "Kids · CEFR A2",
    banner: "/curriculum/a2-banner.png",
    description:
      "Once the alphabet and phonics are secure, A2 expands into longer, connected sentences and more independent everyday situations, with the foundation from A1 as the base.",
  },
};

function buildLessons(unitNum, items) {
  const [l1, l2, l3] = items;
  return [
    { num: 1, title: l1.title, focus: l1.focus },
    { num: 2, title: l2.title, focus: l2.focus },
    { num: 3, title: l3.title, focus: l3.focus },
    { num: 4, title: "Let's Review!", focus: `Everything from ${l1.short}, ${l2.short}, and ${l3.short}` },
    { num: 5, title: "Show What You Know!", focus: "Free practice, no reveal" },
    { num: 6, title: `Unit ${unitNum} Test`, focus: "Summative check of the whole unit", isTest: true },
  ];
}

export const UNITS = {
  A1: [
    {
      num: 1, title: "Hello, Alphabet!", focus: "Greetings, \"What's your name?\"", thread: "Letters A to I",
      lessons: buildLessons(1, [
        { title: "Hello, Alphabet!", focus: "Letters A, B, C. \"Hello! My name is...\"", short: "A-C" },
        { title: "How Are You?", focus: "\"How are you?\" and letters D, E, F", short: "D-F" },
        { title: "Almost There!", focus: "\"Nice to meet you!\" and letters G, H, I", short: "G-I" },
      ]),
    },
    {
      num: 2, title: "Numbers & Letters", focus: "Counting 1 to 10", thread: "Letters J to R, letter sounds",
      lessons: buildLessons(2, [
        { title: "Counting Begins!", focus: "Numbers 1 to 5, Letters J, K, L", short: "1-5" },
        { title: "Count On!", focus: "Numbers 6 to 10, Letters M, N, O", short: "6-10" },
        { title: "Letters Keep Going!", focus: "Letters P, Q, R. \"How many?\"", short: "P-R" },
      ]),
    },
    {
      num: 3, title: "Colors & Sounds", focus: "Colors, \"This is a...\"", thread: "Letters S to Z, first blending",
      lessons: buildLessons(3, [
        { title: "Colorful Letters!", focus: "Letters S, T, U. First colors", short: "S-U" },
        { title: "More Colors!", focus: "Letters V, W, X. More colors", short: "V-X" },
        { title: "Blending Begins!", focus: "Letters Y, Z. First blending", short: "Y-Z" },
      ]),
    },
    {
      num: 4, title: "All About Me", focus: "Name, age, feelings, \"I am...\"", thread: "Simple words: cat, dog, pen",
      lessons: buildLessons(4, [
        { title: "This Is Me!", focus: "\"I am...\", the word cat", short: "\"I am\"" },
        { title: "How Old Are You?", focus: "Age numbers, the word dog", short: "ages" },
        { title: "How Do You Feel?", focus: "Feelings words, the word pen", short: "feelings" },
      ]),
    },
    {
      num: 5, title: "My Family", focus: "Family members, \"This is my...\"", thread: "Sight words: mom, dad, sister",
      lessons: buildLessons(5, [
        { title: "My Family Begins!", focus: "Mom, dad. \"This is my...\"", short: "mom/dad" },
        { title: "More Family!", focus: "Sister, brother", short: "siblings" },
        { title: "Everyone Together!", focus: "Talking about a family photo", short: "family talk" },
      ]),
    },
    {
      num: 6, title: "My Body", focus: "Body parts, simple descriptions", thread: "Word family: at, og",
      lessons: buildLessons(6, [
        { title: "Head to Toe!", focus: "Body parts, the -at word family", short: "-at" },
        { title: "Let's Describe!", focus: "More body parts, the -og word family", short: "-og" },
        { title: "Simple Sentences!", focus: "Describing with body words", short: "describing" },
      ]),
    },
    {
      num: 7, title: "My School", focus: "Classroom objects and language", thread: "Sight words: pen, book, bag",
      lessons: buildLessons(7, [
        { title: "In My Bag!", focus: "Pen, book, bag", short: "bag items" },
        { title: "Classroom Words!", focus: "Desk, chair, board", short: "classroom" },
        { title: "Classroom Talk!", focus: "Simple classroom instructions", short: "instructions" },
      ]),
    },
    {
      num: 8, title: "Food I Like", focus: "Food vocabulary, \"I like / I don't like\"", thread: "Word family: in, op",
      lessons: buildLessons(8, [
        { title: "Yummy Food!", focus: "Food words, the -in word family", short: "-in" },
        { title: "I Like It!", focus: "\"I like...\", the -op word family", short: "-op" },
        { title: "I Don't Like It!", focus: "\"I don't like...\"", short: "dislikes" },
      ]),
    },
    {
      num: 9, title: "Animals", focus: "Animal names, \"It's a...\"", thread: "Sight words: cat, dog, big, small",
      lessons: buildLessons(9, [
        { title: "Animal Friends!", focus: "Cat, dog. \"It's a...\"", short: "pets" },
        { title: "Big and Small!", focus: "Describing size", short: "size" },
        { title: "At the Zoo!", focus: "More animal names", short: "zoo animals" },
      ]),
    },
    {
      num: 10, title: "My House", focus: "Rooms, \"It's in the...\"", thread: "Word family: ed, ig",
      lessons: buildLessons(10, [
        { title: "Around the House!", focus: "Rooms, the -ed word family", short: "-ed" },
        { title: "Where Is It?", focus: "\"It's in the...\", the -ig word family", short: "-ig" },
        { title: "My Favorite Room!", focus: "Describing a room", short: "descriptions" },
      ]),
    },
    {
      num: 11, title: "Toys & Play", focus: "Toys, simple present (\"I play...\")", thread: "Sight words: toy, ball, fun",
      lessons: buildLessons(11, [
        { title: "My Toys!", focus: "Toy, ball", short: "toys" },
        { title: "Let's Play!", focus: "\"I play...\", fun", short: "\"I play\"" },
        { title: "Playtime Fun!", focus: "More play verbs", short: "play verbs" },
      ]),
    },
    {
      num: 12, title: "My Day", focus: "Daily routine, review", thread: "Cumulative phonics review",
      lessons: buildLessons(12, [
        { title: "Morning Time!", focus: "Morning routine words", short: "morning" },
        { title: "Afternoon and Night!", focus: "The rest of the day", short: "afternoon/night" },
        { title: "My Whole Day!", focus: "Full daily routine practice", short: "full day" },
      ]),
    },
  ],
  A2: [
    {
      num: 1, title: "School Life and School Projects", focus: "Talking about school subjects, your day, clubs, and a class project", thread: "Simple past, comparatives, connectors",
      lessons: [
        { num: 1, title: "School Subjects", focus: "Say which school subjects you have and give simple opinions" },
        { num: 2, title: "My School Day", focus: "Sequence a school day using first, then, after that, finally" },
        { num: 3, title: "After-School Clubs", focus: "Talk about after-school activities and compare preferences" },
        { num: 4, title: "A Class Project", focus: "Describe a simple class project using sequencing and because" },
        { num: 5, title: "Show What You Know!", focus: "Free practice, no reveal: school life, school days, and a class project" },
        { num: 6, title: "Unit 1 Test", focus: "Summative check of the whole unit", isTest: true },
      ],
    },
    {
      num: 2, title: "Yesterday & Today", focus: "Recounting recent events", thread: "Past simple, irregular verbs",
      lessons: buildLessons(2, [
        { title: "Irregular Surprises!", focus: "went, ate, saw", short: "irregular verbs" },
        { title: "More Irregulars!", focus: "had, did, made", short: "more irregulars" },
        { title: "Yesterday's Story!", focus: "Connecting irregular verbs", short: "connecting events" },
      ]),
    },
    {
      num: 3, title: "Weather & Seasons", focus: "Describing weather and seasons", thread: "\"There is / there are\"",
      lessons: buildLessons(3, [
        { title: "What's the Weather?", focus: "Weather words, \"There is...\"", short: "weather words" },
        { title: "Four Seasons!", focus: "Season names, \"There are...\"", short: "seasons" },
        { title: "Weather Talk!", focus: "Describing today's weather", short: "describing weather" },
      ]),
    },
    {
      num: 4, title: "Around Town", focus: "Places in the community", thread: "Prepositions of place",
      lessons: buildLessons(4, [
        { title: "Places in Town!", focus: "Store, park. \"Next to...\"", short: "places" },
        { title: "Where Is It?", focus: "\"Behind...\", \"between...\"", short: "more prepositions" },
        { title: "Giving Directions!", focus: "Simple directions", short: "directions" },
      ]),
    },
    {
      num: 5, title: "Let's Go Shopping", focus: "Asking for and buying things", thread: "Quantities and prices",
      lessons: buildLessons(5, [
        { title: "At the Store!", focus: "Shopping words, \"How much?\"", short: "shopping words" },
        { title: "Counting Money!", focus: "Prices and quantities", short: "prices" },
        { title: "Let's Buy Something!", focus: "Shopping roleplay", short: "roleplay" },
      ]),
    },
    {
      num: 6, title: "Jobs People Do", focus: "Community helpers", thread: "\"He / she is a...\"",
      lessons: buildLessons(6, [
        { title: "What's Your Job?", focus: "Jobs, \"He is a...\"", short: "jobs" },
        { title: "More Jobs!", focus: "\"She is a...\", job duties", short: "job duties" },
        { title: "Community Helpers!", focus: "Talking about helpers", short: "helpers" },
      ]),
    },
    {
      num: 7, title: "My Favorite Story", focus: "Retelling a story", thread: "Narrative sequencing",
      lessons: buildLessons(7, [
        { title: "Once Upon a Time!", focus: "Story words, \"first...\"", short: "\"first\"" },
        { title: "What Happened Next?", focus: "\"Then...\", \"after that...\"", short: "\"then/after\"" },
        { title: "The End!", focus: "\"Finally...\", wrapping up a story", short: "\"finally\"" },
      ]),
    },
    {
      num: 8, title: "Sports & Hobbies", focus: "Abilities, likes and dislikes", thread: "\"I can / can't...\", because",
      lessons: buildLessons(8, [
        { title: "What Can You Do?", focus: "\"I can...\", sports words", short: "\"I can\"" },
        { title: "I Can't Do That!", focus: "\"I can't...\", hobbies", short: "\"I can't\"" },
        { title: "Because I Like It!", focus: "Giving reasons with because", short: "reasons" },
      ]),
    },
    {
      num: 9, title: "How Do You Feel?", focus: "Emotions, simple problem solving", thread: "Giving reasons and advice",
      lessons: buildLessons(9, [
        { title: "Feelings Words!", focus: "Happy, sad, worried", short: "feelings" },
        { title: "Why Do You Feel That Way?", focus: "Giving reasons", short: "reasons" },
        { title: "What Should You Do?", focus: "Giving simple advice", short: "advice" },
      ]),
    },
    {
      num: 10, title: "Helping at Home", focus: "Chores and requests", thread: "\"I have to...\", \"Can you...?\"",
      lessons: buildLessons(10, [
        { title: "My Chores!", focus: "Chore words, \"I have to...\"", short: "chores" },
        { title: "Can You Help?", focus: "Making requests", short: "requests" },
        { title: "Helping Each Other!", focus: "Responding to requests", short: "responses" },
      ]),
    },
    {
      num: 11, title: "My Future Plans", focus: "Talking about intentions", thread: "\"Going to\" future",
      lessons: buildLessons(11, [
        { title: "What Are You Going To Do?", focus: "Introducing \"going to\"", short: "\"going to\"" },
        { title: "My Plans for the Week!", focus: "More \"going to\" practice", short: "weekly plans" },
        { title: "Someday I Will!", focus: "Talking about future dreams", short: "future dreams" },
      ]),
    },
    {
      num: 12, title: "All About My Year", focus: "Review and capstone", thread: "Cumulative grammar review",
      lessons: buildLessons(12, [
        { title: "Looking Back!", focus: "Past simple review", short: "past review" },
        { title: "Everyday Life!", focus: "Present and place review", short: "present review" },
        { title: "Looking Ahead!", focus: "Future plans review", short: "future review" },
      ]),
    },
  ],
};

export const READY_UNITS = {
  A1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  A2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};
