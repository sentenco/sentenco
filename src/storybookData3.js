// A1 Teens digital storybook, Book 3: "Siblings and Neighbors at Home"
// Static content -- no Supabase, mirrors the pattern in storybookData2.js.
import coverImg from "./assets/storybook3/cover.jpg";

export const STORYBOOK_TITLE = "Siblings and Neighbors at Home";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Lena sitting at the family breakfast table on a sunny Saturday morning, smiling at her younger brother Marco as sunlight comes through the window.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Lena", role: "The narrator, an older sister", look: "Long dark hair in a loose ponytail, soft yellow house dress or T-shirt, warm friendly expression." },
  { name: "Marco", role: "Lena's younger brother", look: "Short black hair, striped T-shirt, energetic and expressive, calls Lena \"ate Lena.\"" },
  { name: "Bea", role: "Lena's neighbor, becomes a recurring family friend", look: "Curly brown hair with a headband, light green cardigan, gentle and helpful." },
  { name: "Nina", role: "Lena's cousin, visits from another town", look: "Straight hair with a bright clip, floral top, lively and talkative." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Quiet Morning at Home",
    image: null,
    imageNote: "Lena walking out of her room into a sunlit kitchen where Marco and their mother are already at the breakfast table with bread, eggs, and juice.",
    story:
      "It is Saturday morning, and I wake up a little late in my room. Sunlight comes through the window and makes the floor warm and bright. My younger brother Marco is already in the kitchen with our mother. I wash my face, fix my bed, and walk out of my room slowly. On the table, I see bread, eggs, and a glass of juice for breakfast. Marco smiles and says, “Good morning, ate Lena!” I sit with my family, eat my breakfast, and feel calm and happy at home.",
    questions: [
      { text: "What day is it in the story?", answer: "Saturday." },
      { text: "Who is already in the kitchen?", answer: "Her brother Marco and their mother." },
      { text: "How does Lena feel at the end?", answer: "Calm and happy." },
    ],
    trueFalse: [
      { text: "It is Saturday morning.", answer: true },
      { text: "Marco is still sleeping in his room.", answer: false },
      { text: "Lena feels calm and happy at the end.", answer: true },
      { text: "Lena washes her face and fixes her bed.", answer: true },
      { text: "They have pizza for breakfast.", answer: false },
    ],
    buildSentence: [
      {
        target: "It is Saturday morning, and I wake up a little late in my room.",
        jumbled: ["Saturday", "a", "room.", "late", "morning,", "I", "up", "little", "my", "is", "It", "in", "and", "wake"],
      },
      {
        target: "Sunlight comes through the window and makes the floor warm and bright.",
        jumbled: ["the", "bright.", "warm", "and", "makes", "floor", "the", "and", "Sunlight", "window", "comes", "through"],
      },
      {
        target: "I wash my face, fix my bed, and walk out of my room slowly.",
        jumbled: ["fix", "of", "room", "my", "face,", "walk", "my", "my", "slowly.", "I", "wash", "out", "bed,", "and"],
      },
      {
        target: "On the table, I see bread, eggs, and a glass of juice for breakfast.",
        jumbled: ["bread,", "eggs,", "see", "juice", "I", "and", "the", "glass", "for", "breakfast.", "a", "On", "of", "table,"],
      },
      {
        target: "I sit with my family, eat my breakfast, and feel calm and happy at home.",
        jumbled: ["calm", "sit", "at", "my", "feel", "eat", "I", "family,", "happy", "my", "breakfast,", "with", "home.", "and", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your morning at home.",
    mySentenceExample: "On Saturday morning, I eat breakfast with my family.",
  },
  {
    number: 2,
    title: "Our Neighbor at the Gate",
    image: null,
    imageNote: "Lena opening the gate for her neighbor Bea, who holds a small paper bag of banana bread, while Marco looks at the bag with big eyes beside Lena.",
    story:
      "After breakfast, I hear someone call my name outside the house: “Lena!” I walk to the gate and see my neighbor, Bea, with a small paper bag in her hand. She says her mother made banana bread and wants to share some with us. Marco stands beside me and looks at the bag with big eyes. I laugh and open the gate for Bea. We talk for a few minutes about school and the weekend. When I take the paper bag and thank her, I feel glad to have a kind neighbor.",
    questions: [
      { text: "Who calls Lena outside the house?", answer: "Her neighbor, Bea." },
      { text: "What is in Bea's paper bag?", answer: "Banana bread." },
      { text: "How does Lena feel at the end?", answer: "Glad to have a kind neighbor." },
    ],
    trueFalse: [
      { text: "Bea is Lena's neighbor.", answer: true },
      { text: "Bea brings soup in the paper bag.", answer: false },
      { text: "Lena feels glad to have a kind neighbor.", answer: true },
      { text: "Marco looks at the bag with big eyes.", answer: true },
      { text: "Lena does not let Bea inside the gate.", answer: false },
    ],
    buildSentence: [
      {
        target: "I hear someone call my name outside the house: “Lena!”",
        jumbled: ["the", "call", "outside", "name", "house:", "someone", "I", "my", "hear", "“Lena!”"],
      },
      {
        target: "I walk to the gate and see my neighbor, Bea, with a small paper bag in her hand.",
        jumbled: ["the", "with", "I", "a", "to", "hand.", "Bea,", "small", "paper", "neighbor,", "gate", "her", "my", "see", "walk", "in", "and", "bag"],
      },
      {
        target: "She says her mother made banana bread and wants to share some with us.",
        jumbled: ["and", "with", "some", "bread", "banana", "mother", "She", "wants", "us.", "share", "made", "to", "says", "her"],
      },
      {
        target: "I laugh and open the gate for Bea.",
        jumbled: ["Bea.", "I", "open", "gate", "laugh", "the", "for", "and"],
      },
      {
        target: "I feel glad to have a kind neighbor.",
        jumbled: ["kind", "I", "have", "a", "neighbor.", "to", "feel", "glad"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your neighbor.",
    mySentenceExample: "My neighbor is kind and friendly.",
  },
  {
    number: 3,
    title: "A Snack in the Kitchen",
    image: null,
    imageNote: "Lena, Marco, and Bea sitting together at the kitchen table with a plate of sliced banana bread and glasses of cold water, all smiling and eating.",
    story:
      "In the afternoon, Marco and I go to the kitchen because we feel hungry. Our mother puts the banana bread on a plate and cuts it into small pieces. The bread smells sweet, and the whole kitchen feels warm. Bea comes in with two glasses of cold water and sits with us at the table. “Here you go, Lena,” she says, handing me a glass. Marco eats quickly and smiles with food on his lips. We laugh, eat our snack, and talk about our favorite foods. When the plates are empty, the kitchen feels full of happy voices.",
    questions: [
      { text: "Why do Lena and Marco go to the kitchen?", answer: "Because they feel hungry." },
      { text: "What does their mother cut into small pieces?", answer: "The banana bread." },
      { text: "What do they talk about while eating?", answer: "Their favorite foods." },
    ],
    trueFalse: [
      { text: "Lena and Marco go to the kitchen because they are sleepy.", answer: false },
      { text: "Their mother cuts the banana bread into small pieces.", answer: true },
      { text: "They talk about their favorite foods.", answer: true },
      { text: "Bea brings two glasses of cold water.", answer: true },
      { text: "The kitchen feels empty and quiet.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the afternoon, Marco and I go to the kitchen because we feel hungry.",
        jumbled: ["and", "afternoon,", "feel", "the", "I", "In", "Marco", "go", "we", "to", "the", "hungry.", "because", "kitchen"],
      },
      {
        target: "Our mother puts the banana bread on a plate and cuts it into small pieces.",
        jumbled: ["a", "plate", "the", "puts", "banana", "and", "Our", "mother", "into", "it", "bread", "pieces.", "small", "cuts", "on"],
      },
      {
        target: "Bea comes in with two glasses of cold water and sits with us at the table.",
        jumbled: ["in", "glasses", "Bea", "and", "sits", "us", "of", "with", "cold", "with", "water", "two", "table.", "at", "comes", "the"],
      },
      {
        target: "“Here you go, Lena,” she says, handing me a glass.",
        jumbled: ["you", "glass.", "me", "handing", "says,", "a", "“Here", "go,", "Lena,”", "she"],
      },
      {
        target: "The kitchen feels full of happy voices.",
        jumbled: ["of", "happy", "full", "The", "voices.", "kitchen", "feels"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite snack.",
    mySentenceExample: "My favorite snack is sweet bread and juice.",
  },
  {
    number: 4,
    title: "Homework at the Table",
    image: null,
    imageNote: "Marco sitting at the dining table with his notebook and pencil, Lena beside him reading his questions, Bea checking spelling on the page.",
    story:
      "Later that day, Marco brings his notebook to the dining table and looks at me. He says, “Ate Lena, can you help me with my homework?” I sit beside him and read the questions slowly. Bea stays with us and checks the spelling on one page. Marco writes the answers with his pencil and asks us small questions. After a few minutes, he finishes the last line and puts down the pencil. He smiles at us, and I feel proud because we help him do his work.",
    questions: [
      { text: "Who asks for help with homework?", answer: "Marco." },
      { text: "Where do they sit to do the homework?", answer: "At the dining table." },
      { text: "How does Lena feel at the end?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Marco asks Lena to help him.", answer: true },
      { text: "Bea leaves and does not stay with them.", answer: false },
      { text: "Lena feels proud because they help Marco.", answer: true },
      { text: "Bea checks the spelling on one page.", answer: true },
      { text: "Marco finishes his homework without any help.", answer: false },
    ],
    buildSentence: [
      {
        target: "Later that day, Marco brings his notebook to the dining table and looks at me.",
        jumbled: ["and", "brings", "to", "notebook", "dining", "me.", "Marco", "day,", "looks", "the", "his", "at", "that", "Later", "table"],
      },
      {
        target: "He says, “Ate Lena, can you help me with my homework?”",
        jumbled: ["help", "my", "He", "Lena,", "can", "homework?”", "me", "you", "with", "“Ate", "says,"],
      },
      {
        target: "Bea stays with us and checks the spelling on one page.",
        jumbled: ["spelling", "on", "Bea", "checks", "page.", "stays", "us", "with", "and", "the", "one"],
      },
      {
        target: "Marco writes the answers with his pencil and asks us small questions.",
        jumbled: ["us", "answers", "his", "pencil", "and", "asks", "small", "writes", "questions.", "with", "the", "Marco"],
      },
      {
        target: "He smiles at us, and I feel proud because we help him do his work.",
        jumbled: ["He", "because", "smiles", "we", "him", "at", "do", "work.", "feel", "I", "proud", "us,", "and", "his", "help"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about homework at home.",
    mySentenceExample: "I do my homework at the table after lunch.",
  },
  {
    number: 5,
    title: "A Visit from Cousin Nina",
    image: null,
    imageNote: "Nina at the front door hugging or greeting Marco with a big smile, holding a small box of cookies, while Lena and Bea watch from the living room.",
    story:
      "On Sunday morning, our cousin Nina comes to visit our house. She lives in another town, so we do not see her every week. Marco runs to the door and says, “Hi, Nina!” with a big smile, and Nina hugs him before turning to me. “Lena, I missed you!” she says. Nina brings a small box of cookies for our family. Bea is still at our house, so she meets Nina for the first time. We sit in the living room, talk about school, and drink cold juice together. When Nina laughs at Marco's funny story, the room feels bright and full of life.",
    questions: [
      { text: "Who visits the house on Sunday morning?", answer: "Their cousin Nina." },
      { text: "What does Nina bring for the family?", answer: "A small box of cookies." },
      { text: "Where do they sit and talk?", answer: "In the living room." },
    ],
    trueFalse: [
      { text: "Nina lives in the same house as Lena.", answer: false },
      { text: "Nina brings cookies for the family.", answer: true },
      { text: "They sit in the living room and talk.", answer: true },
      { text: "Marco runs to the door to greet Nina.", answer: true },
      { text: "Bea has met Nina many times before.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Sunday morning, our cousin Nina comes to visit our house.",
        jumbled: ["our", "house.", "comes", "to", "cousin", "morning,", "Sunday", "our", "Nina", "On", "visit"],
      },
      {
        target: "Marco runs to the door and says, “Hi, Nina!” with a big smile, and Nina hugs him before turning to me.",
        jumbled: ["“Hi,", "before", "him", "smile,", "me.", "and", "turning", "the", "Nina", "says,", "a", "Nina!”", "big", "hugs", "Marco", "and", "to", "with", "door", "runs", "to"],
      },
      {
        target: "“Lena, I missed you!” she says.",
        jumbled: ["she", "says.", "missed", "I", "“Lena,", "you!”"],
      },
      {
        target: "Bea is still at our house, so she meets Nina for the first time.",
        jumbled: ["at", "first", "the", "house,", "time.", "still", "our", "meets", "she", "for", "so", "Nina", "Bea", "is"],
      },
      {
        target: "The room feels bright and full of life.",
        jumbled: ["and", "life.", "room", "of", "full", "feels", "The", "bright"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your cousin.",
    mySentenceExample: "My cousin visits us on the weekend.",
  },
  {
    number: 6,
    title: "Cleaning the Living Room",
    image: null,
    imageNote: "Lena, Marco, Nina, and Bea all cleaning the living room together -- Marco stacking books on a shelf, Nina folding a blanket, Bea wiping a table, Lena fixing pillows.",
    story:
      "Before lunch, our mother asks us to help clean the living room. “Lena, can you fix the pillows after?” she says. Marco picks up the books on the floor and puts them on the shelf. Nina folds a blanket and places it on the sofa. Bea wipes the small table with a cloth and hums a happy song. I fix the pillows and open the window for fresh air. The room looks messy at first, but little by little it becomes clean and bright. When we finish and sit down to look at the room, I feel happy because we did the work together.",
    questions: [
      { text: "What does their mother ask them to clean?", answer: "The living room." },
      { text: "What does Marco put on the shelf?", answer: "The books." },
      { text: "How does Lena feel when they finish?", answer: "Happy." },
    ],
    trueFalse: [
      { text: "They clean the kitchen before lunch.", answer: false },
      { text: "Nina folds a blanket and puts it on the sofa.", answer: true },
      { text: "Lena feels happy because they worked together.", answer: true },
      { text: "Bea wipes the table and hums a song.", answer: true },
      { text: "Marco leaves the books on the floor.", answer: false },
    ],
    buildSentence: [
      {
        target: "Our mother asks us to help clean the living room.",
        jumbled: ["mother", "room.", "living", "clean", "us", "help", "Our", "asks", "to", "the"],
      },
      {
        target: "Marco picks up the books on the floor and puts them on the shelf.",
        jumbled: ["floor", "on", "shelf.", "up", "on", "the", "the", "Marco", "puts", "them", "and", "books", "picks", "the"],
      },
      {
        target: "Nina folds a blanket and places it on the sofa.",
        jumbled: ["a", "sofa.", "places", "the", "on", "it", "Nina", "blanket", "and", "folds"],
      },
      {
        target: "Bea wipes the small table with a cloth and hums a happy song.",
        jumbled: ["wipes", "hums", "the", "and", "a", "with", "cloth", "Bea", "happy", "a", "small", "song.", "table"],
      },
      {
        target: "I feel happy because we did the work together.",
        jumbled: ["happy", "because", "feel", "I", "work", "together.", "we", "did", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about cleaning at home.",
    mySentenceExample: "I clean my room on the weekend.",
  },
  {
    number: 7,
    title: "A Rainy Afternoon Game",
    image: null,
    imageNote: "Lena, Marco, Nina, and Bea sitting around the table playing a board game together, rain visible through the window behind them, Marco clapping excitedly.",
    story:
      "In the afternoon, dark clouds cover the sky and the rain starts to fall. We cannot go outside, so Marco brings a board game to the table. Nina reads the game rules and asks, “Are you ready, Lena?” Bea laughs at the funny pictures on the box. I move my game piece carefully and try to win the first round. Marco claps when he gets a lucky number and jumps in his chair. The rain makes a soft sound on the roof while we play together. When the game ends, I do not feel bored because the rainy afternoon becomes fun.",
    questions: [
      { text: "Why can they not go outside?", answer: "Because it is raining." },
      { text: "What does Marco bring to the table?", answer: "A board game." },
      { text: "How does Lena feel when the game ends?", answer: "Not bored -- the rainy afternoon becomes fun." },
    ],
    trueFalse: [
      { text: "It starts to rain in the afternoon.", answer: true },
      { text: "They go to the park to play.", answer: false },
      { text: "Lena does not feel bored at the end.", answer: true },
      { text: "Marco brings a board game to the table.", answer: true },
      { text: "They watch a movie instead of playing a game.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the afternoon, dark clouds cover the sky and the rain starts to fall.",
        jumbled: ["In", "fall.", "starts", "the", "the", "dark", "the", "and", "afternoon,", "clouds", "rain", "to", "sky", "cover"],
      },
      {
        target: "We cannot go outside, so Marco brings a board game to the table.",
        jumbled: ["game", "the", "so", "Marco", "a", "board", "outside,", "brings", "to", "table.", "cannot", "go", "We"],
      },
      {
        target: "Bea laughs at the funny pictures on the box.",
        jumbled: ["on", "the", "box.", "Bea", "pictures", "at", "laughs", "funny", "the"],
      },
      {
        target: "I move my game piece carefully and try to win the first round.",
        jumbled: ["first", "the", "my", "carefully", "to", "piece", "try", "game", "round.", "move", "and", "I", "win"],
      },
      {
        target: "I do not feel bored because the rainy afternoon becomes fun.",
        jumbled: ["feel", "bored", "afternoon", "I", "becomes", "the", "because", "not", "do", "fun.", "rainy"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a rainy day at home.",
    mySentenceExample: "On rainy days, I play games with my family.",
  },
  {
    number: 8,
    title: "Dinner with the Family",
    image: null,
    imageNote: "The whole family and Bea sitting around the dinner table -- father just home from work, dishes of fish, rice, and vegetables, everyone talking and passing food.",
    story:
      "In the evening, our father comes home from work and smiles when he sees everyone together. The table is ready, and the smell of fish, rice, and vegetables fills the room. Marco tells Father about the board game, and Nina talks about her town. Bea thanks our parents for the food and sits quietly beside me. We eat dinner, pass the dishes, and listen to one another. Father says, “It is nice to have a full table tonight, don’t you think, Lena?” As I look around at my family and friends, I feel warm inside and very thankful.",
    questions: [
      { text: "Who comes home in the evening?", answer: "Their father." },
      { text: "What food smells fill the room?", answer: "Fish, rice, and vegetables." },
      { text: "How does Lena feel at the end?", answer: "Warm inside and thankful." },
    ],
    trueFalse: [
      { text: "Their father comes home from work.", answer: true },
      { text: "Bea does not eat dinner with them.", answer: false },
      { text: "Lena feels thankful at the end.", answer: true },
      { text: "Marco tells Father about the board game.", answer: true },
      { text: "Nina says nothing about her town.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the evening, our father comes home from work and smiles when he sees everyone together.",
        jumbled: ["everyone", "sees", "he", "from", "In", "home", "together.", "the", "smiles", "work", "our", "evening,", "when", "father", "comes", "and"],
      },
      {
        target: "The table is ready, and the smell of fish, rice, and vegetables fills the room.",
        jumbled: ["the", "The", "vegetables", "room.", "and", "of", "ready,", "the", "smell", "table", "fish,", "is", "and", "fills", "rice,"],
      },
      {
        target: "Marco tells Father about the board game, and Nina talks about her town.",
        jumbled: ["tells", "town.", "talks", "board", "game,", "Nina", "about", "Marco", "and", "about", "her", "Father", "the"],
      },
      {
        target: "We eat dinner, pass the dishes, and listen to one another.",
        jumbled: ["We", "listen", "eat", "dinner,", "another.", "one", "dishes,", "the", "pass", "to", "and"],
      },
      {
        target: "I feel warm inside and very thankful.",
        jumbled: ["very", "inside", "thankful.", "I", "and", "feel", "warm"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about dinner with your family.",
    mySentenceExample: "I eat dinner with my family every night.",
  },
  {
    number: 9,
    title: "A Small Problem with the Lamp",
    image: null,
    imageNote: "The living room lamp dark, father checking it while Nina holds a chair and Lena holds a small box with a new light bulb, Bea standing near a worried-looking Marco.",
    story:
      "That night, the lamp in the living room suddenly stops working. The room becomes darker, and Marco looks worried for a moment. Our father checks the lamp and says it needs a new light bulb. “Lena, can you get the box?” he asks. Nina brings a chair, and I hold the small box with the new bulb inside. Bea stands near Marco and tells him it will be okay soon. After a few minutes, the lamp shines again and fills the room with light. We all clap, and I feel glad because the problem is small and easy to fix together.",
    questions: [
      { text: "What stops working in the living room?", answer: "The lamp." },
      { text: "What does the lamp need?", answer: "A new light bulb." },
      { text: "How does Lena feel at the end?", answer: "Glad." },
    ],
    trueFalse: [
      { text: "The lamp stops working at night.", answer: true },
      { text: "The father says the lamp needs a new chair.", answer: false },
      { text: "Lena feels glad because they fix the problem together.", answer: true },
      { text: "Nina brings a chair to help.", answer: true },
      { text: "The lamp never turns back on.", answer: false },
    ],
    buildSentence: [
      {
        target: "That night, the lamp in the living room suddenly stops working.",
        jumbled: ["night,", "That", "the", "suddenly", "in", "working.", "living", "stops", "room", "the", "lamp"],
      },
      {
        target: "Our father checks the lamp and says it needs a new light bulb.",
        jumbled: ["needs", "lamp", "and", "new", "the", "it", "Our", "bulb.", "light", "a", "says", "father", "checks"],
      },
      {
        target: "“Lena, can you get the box?” he asks.",
        jumbled: ["the", "box?”", "asks.", "get", "you", "can", "he", "“Lena,"],
      },
      {
        target: "Nina brings a chair, and I hold the small box with the new bulb inside.",
        jumbled: ["inside.", "hold", "Nina", "brings", "small", "bulb", "the", "the", "box", "I", "and", "with", "chair,", "a", "new"],
      },
      {
        target: "We all clap, and I feel glad because the problem is small and easy to fix together.",
        jumbled: ["feel", "easy", "is", "to", "all", "and", "because", "I", "We", "small", "fix", "glad", "together.", "clap,", "problem", "the", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about fixing something at home.",
    mySentenceExample: "My father fixes the lamp at home.",
  },
  {
    number: 10,
    title: "A Happy Weekend at Home",
    image: null,
    imageNote: "Lena sitting near the living room window at sunset, looking peaceful, with the clean room, empty plates, and shelf of games visible -- Nina and Marco hugging goodbye at the gate in the background.",
    story:
      "On Sunday evening, the house feels quiet after our busy weekend together. Nina gets ready to go home, and Marco gives her a quick hug at the gate. Bea waves goodbye and says, “See you next weekend, Lena!” I go back inside and look at the clean living room, the empty plates, and the games on the shelf. The house looks simple, but it feels full of good memories from the weekend. I sit near the window and think about the food, the laughter, and the time with the people around me. As the sun goes down, I feel peaceful because home is warm when love and kindness are inside it.",
    questions: [
      { text: "Who gets ready to go home on Sunday evening?", answer: "Nina." },
      { text: "What does Bea say at the gate?", answer: "That she will visit again next weekend." },
      { text: "How does Lena feel at the end?", answer: "Peaceful." },
    ],
    trueFalse: [
      { text: "Nina stays at the house forever.", answer: false },
      { text: "Bea says she will visit again next weekend.", answer: true },
      { text: "Lena feels peaceful at the end.", answer: true },
      { text: "Marco gives Nina a hug at the gate.", answer: true },
      { text: "The house feels empty of memories.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Sunday evening, the house feels quiet after our busy weekend together.",
        jumbled: ["On", "our", "feels", "after", "together.", "the", "weekend", "house", "busy", "quiet", "Sunday", "evening,"],
      },
      {
        target: "Nina gets ready to go home, and Marco gives her a quick hug at the gate.",
        jumbled: ["ready", "a", "Marco", "her", "home,", "Nina", "to", "hug", "the", "gate.", "go", "at", "and", "gets", "gives", "quick"],
      },
      {
        target: "I go back inside and look at the clean living room, the empty plates, and the games on the shelf.",
        jumbled: ["games", "I", "look", "the", "room,", "inside", "living", "back", "and", "the", "clean", "empty", "plates,", "the", "at", "go", "on", "and", "the", "shelf."],
      },
      {
        target: "The house looks simple, but it feels full of good memories from the weekend.",
        jumbled: ["weekend.", "simple,", "full", "it", "feels", "memories", "the", "looks", "good", "house", "of", "but", "from", "The"],
      },
      {
        target: "I sit near the window and think about the food, the laughter, and the time with the people around me.",
        jumbled: ["time", "the", "with", "near", "around", "the", "window", "I", "the", "me.", "about", "and", "food,", "and", "laughter,", "the", "the", "sit", "think", "people"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your home.",
    mySentenceExample: "My home feels warm and peaceful at night.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
