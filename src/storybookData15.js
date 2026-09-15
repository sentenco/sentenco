// A1 Kids digital storybook, Book 15: "My Best Friend and Me"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js
// and storybookData14.js. Third book in the Kids age track. Same
// simplified vocabulary/sentence length and 3+3 True/False and
// Build-a-Sentence pattern.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook15/cover.jpg";

export const STORYBOOK_TITLE = "My Best Friend and Me";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Ivy and Oscar sitting together on the school playground, both wearing matching friendship bracelets and smiling, swings visible in the background.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Ivy", role: "The narrator, a young girl", look: "Long dark hair with a headband, purple dress, warm and thoughtful expression." },
  { name: "Oscar", role: "Ivy's best friend and classmate", look: "Short brown hair, blue cap, cheerful and a little shy." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My Best Friend Oscar",
    image: null,
    imageNote: "Ivy and Oscar sitting next to each other at their classroom desks, both smiling and waving good morning, a blue cap visible on Oscar.",
    story:
      "Oscar is my best friend at school. We sit next to each other in class every day. Oscar has short brown hair and always wears a blue cap. Every morning, Oscar waves and says, “Good morning, Ivy!” At recess, we play together on the swings. Oscar tells funny jokes that always make me laugh. “Did you hear this one, Ivy?” he asks before every joke. We share our favorite stories about our weekends. I feel happy when Oscar is with me at school. Having a best friend makes every day more fun.",
    questions: [
      { text: "Who is Ivy's best friend?", answer: "Oscar." },
      { text: "What do they do every morning?", answer: "Wave and say Good morning to each other." },
      { text: "Where do they play at recess?", answer: "On the swings." },
    ],
    trueFalse: [
      { text: "Oscar is Ivy's best friend.", answer: true },
      { text: "They never talk in the morning.", answer: false },
      { text: "They play on the swings at recess.", answer: true },
    ],
    buildSentence: [
      {
        target: "We sit next to each other in class every day.",
        jumbled: ["day.", "to", "each", "class", "every", "next", "We", "other", "in", "sit"],
      },
      {
        target: "Oscar has short brown hair and always wears a blue cap.",
        jumbled: ["hair", "brown", "wears", "short", "Oscar", "and", "a", "always", "blue", "has", "cap."],
      },
      {
        target: "Oscar tells funny jokes that always make me laugh.",
        jumbled: ["laugh.", "jokes", "tells", "make", "funny", "that", "always", "me", "Oscar"],
      },
      {
        target: "“Did you hear this one, Ivy?” he asks before every joke.",
        jumbled: ["asks", "before", "joke.", "Ivy?”", "one,", "this", "every", "hear", "he", "you", "“Did"],
      },
      {
        target: "I feel happy when Oscar is with me at school.",
        jumbled: ["with", "at", "I", "is", "me", "school.", "when", "happy", "Oscar", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your best friend.",
    mySentenceExample: "My best friend makes me laugh.",
  },
  {
    number: 2,
    title: "Sharing Our Snacks",
    image: null,
    imageNote: "Ivy and Oscar sitting at a small round lunch table, Ivy holding half an apple out to Oscar, his box of orange crackers open between them.",
    story:
      "At lunchtime, I open my lunch box and see a red apple. Oscar opens his lunch box and has orange crackers. “Do you want to share, Ivy?” Oscar asks with a smile. I give him half of my apple, and he gives me some crackers. We sit together at the small round table. “Your apple is sweet and juicy, Ivy,” Oscar says. I say his crackers are crunchy and tasty. We laugh and talk about our favorite foods. Sharing snacks with Oscar makes lunchtime my favorite part of the day.",
    questions: [
      { text: "What does Ivy have for lunch?", answer: "A red apple." },
      { text: "What does Oscar have for lunch?", answer: "Orange crackers." },
      { text: "What do they do with their food?", answer: "They share it." },
    ],
    trueFalse: [
      { text: "Ivy has an apple for lunch.", answer: true },
      { text: "Oscar has cookies for lunch.", answer: false },
      { text: "They share their food together.", answer: true },
    ],
    buildSentence: [
      {
        target: "At lunchtime, I open my lunch box and see a red apple.",
        jumbled: ["red", "lunchtime,", "lunch", "and", "see", "I", "box", "a", "open", "At", "my", "apple."],
      },
      {
        target: "“Do you want to share, Ivy?” Oscar asks with a smile.",
        jumbled: ["share,", "you", "want", "“Do", "Oscar", "asks", "smile.", "with", "to", "Ivy?”", "a"],
      },
      {
        target: "I give him half of my apple, and he gives me some crackers.",
        jumbled: ["gives", "crackers.", "him", "and", "of", "give", "apple,", "some", "half", "I", "he", "my", "me"],
      },
      {
        target: "“Your apple is sweet and juicy, Ivy,” Oscar says.",
        jumbled: ["“Your", "apple", "Ivy,”", "sweet", "is", "Oscar", "juicy,", "says.", "and"],
      },
      {
        target: "Sharing snacks with Oscar makes lunchtime my favorite part of the day.",
        jumbled: ["makes", "day.", "Sharing", "lunchtime", "Oscar", "of", "the", "my", "snacks", "favorite", "with", "part"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about sharing something.",
    mySentenceExample: "I share my lunch with my friend.",
  },
  {
    number: 3,
    title: "Building a Blanket Fort",
    image: null,
    imageNote: "Ivy and Oscar inside a cozy blanket fort made of blankets draped over chairs, a flashlight glowing between them, Ivy's little brother peeking inside.",
    story:
      "After school, Oscar comes to my house to play. We decide to build a big fort in my room. We use soft blankets and put them over two chairs. Oscar holds the blanket while I tuck in the sides. “This is the best fort ever, Ivy!” Oscar says. We add pillows inside to make it soft and cozy. Inside the fort, we use a flashlight because it is dark. We tell stories and giggle inside our secret fort. My little brother peeks in and asks, “Ivy, can I play too?” so we let him join. Building a fort with Oscar is one of my favorite games.",
    questions: [
      { text: "What do they build in Ivy's room?", answer: "A blanket fort." },
      { text: "What do they use to build the fort?", answer: "Soft blankets, two chairs, and pillows." },
      { text: "Who wants to join them?", answer: "Ivy's little brother." },
    ],
    trueFalse: [
      { text: "They build a fort.", answer: true },
      { text: "They use blankets and pillows.", answer: true },
      { text: "No one else wants to join them.", answer: false },
    ],
    buildSentence: [
      {
        target: "We decide to build a big fort in my room.",
        jumbled: ["a", "decide", "We", "room.", "in", "build", "fort", "big", "my", "to"],
      },
      {
        target: "We use soft blankets and put them over two chairs.",
        jumbled: ["use", "them", "soft", "blankets", "chairs.", "and", "put", "We", "over", "two"],
      },
      {
        target: "We add pillows inside to make it soft and cozy.",
        jumbled: ["add", "inside", "soft", "We", "and", "it", "cozy.", "make", "pillows", "to"],
      },
      {
        target: "Inside the fort, we use a flashlight because it is dark.",
        jumbled: ["it", "dark.", "use", "is", "Inside", "we", "because", "flashlight", "a", "fort,", "the"],
      },
      {
        target: "My little brother peeks in and asks, “Ivy, can I play too?” so we let him join.",
        jumbled: ["brother", "we", "in", "join.", "asks,", "too?”", "“Ivy,", "can", "I", "little", "so", "let", "My", "peeks", "and", "play", "him"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a game you like to play indoors.",
    mySentenceExample: "I like to build a fort with blankets.",
  },
  {
    number: 4,
    title: "A Small Disagreement",
    image: null,
    imageNote: "Ivy walking away with crossed arms on the playground, Oscar sitting alone on a bench looking sad, a red ball on the ground between them.",
    story:
      "At recess, Oscar and I both want to play with the same red ball. “I had it first!” I say loudly. “No, I saw it first, Ivy!” Oscar says back. We both feel upset, and we do not want to share. I cross my arms and walk away from Oscar. Oscar sits alone on the bench, looking sad. I think about how much fun we usually have together. Playing alone does not feel as fun as playing with Oscar. I realize that our friendship is more important than one ball.",
    questions: [
      { text: "What do Ivy and Oscar both want?", answer: "The same red ball." },
      { text: "How do they feel?", answer: "Upset." },
      { text: "What does Ivy realize?", answer: "That their friendship is more important than one ball." },
    ],
    trueFalse: [
      { text: "They both want the same ball.", answer: true },
      { text: "They feel happy about the fight.", answer: false },
      { text: "Ivy realizes their friendship is important.", answer: true },
    ],
    buildSentence: [
      {
        target: "At recess, Oscar and I both want to play with the same red ball.",
        jumbled: ["both", "recess,", "I", "with", "Oscar", "and", "the", "ball.", "to", "same", "red", "want", "At", "play"],
      },
      {
        target: "“No, I saw it first, Ivy!” Oscar says back.",
        jumbled: ["says", "back.", "“No,", "it", "Ivy!”", "first,", "Oscar", "saw", "I"],
      },
      {
        target: "We both feel upset, and we do not want to share.",
        jumbled: ["to", "both", "and", "share.", "upset,", "feel", "want", "we", "do", "not", "We"],
      },
      {
        target: "I think about how much fun we usually have together.",
        jumbled: ["have", "about", "think", "how", "I", "much", "usually", "fun", "together.", "we"],
      },
      {
        target: "Playing alone does not feel as fun as playing with Oscar.",
        jumbled: ["alone", "with", "feel", "as", "fun", "Playing", "as", "not", "playing", "does", "Oscar."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a disagreement with a friend.",
    mySentenceExample: "I feel upset when my friend and I disagree.",
  },
  {
    number: 5,
    title: "Saying Sorry",
    image: null,
    imageNote: "Ivy sitting down next to Oscar on the same playground bench, both smiling now and about to share the red ball again.",
    story:
      "The next day, I see Oscar sitting alone at recess again. I walk over slowly and sit down next to him. “I'm sorry about the ball yesterday,” I say quietly. Oscar looks up and says, “I'm sorry too, Ivy.” We both smile, and I feel much better inside. “Let's share the ball today, Ivy,” Oscar says kindly. We take turns throwing and catching the ball together. Saying sorry was hard, but it made our friendship strong again. I learn that good friends can fix their problems together.",
    questions: [
      { text: "Where does Ivy find Oscar?", answer: "Sitting alone at recess." },
      { text: "What does Ivy say to Oscar?", answer: "I'm sorry about the ball yesterday." },
      { text: "What do they do with the ball this time?", answer: "They take turns throwing and catching it." },
    ],
    trueFalse: [
      { text: "Ivy finds Oscar sitting alone.", answer: true },
      { text: "Ivy does not say sorry.", answer: false },
      { text: "They take turns with the ball.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next day, I see Oscar sitting alone at recess again.",
        jumbled: ["The", "sitting", "next", "see", "recess", "I", "at", "day,", "again.", "Oscar", "alone"],
      },
      {
        target: "I walk over slowly and sit down next to him.",
        jumbled: ["him.", "sit", "to", "slowly", "next", "and", "I", "down", "walk", "over"],
      },
      {
        target: "Oscar looks up and says, “I'm sorry too, Ivy.”",
        jumbled: ["up", "sorry", "“I'm", "Oscar", "says,", "looks", "Ivy.”", "too,", "and"],
      },
      {
        target: "“Let's share the ball today, Ivy,” Oscar says kindly.",
        jumbled: ["says", "today,", "the", "ball", "kindly.", "“Let's", "Oscar", "share", "Ivy,”"],
      },
      {
        target: "Saying sorry was hard, but it made our friendship strong again.",
        jumbled: ["again.", "sorry", "our", "but", "friendship", "made", "hard,", "Saying", "it", "was", "strong"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about saying sorry.",
    mySentenceExample: "I say sorry when I make a mistake.",
  },
  {
    number: 6,
    title: "Drawing Pictures Together",
    image: null,
    imageNote: "Ivy and Oscar sitting side by side at an art table, Ivy holding a drawing of a tall tree, Oscar holding a drawing of a red race car, crayons scattered between them.",
    story:
      "During art class, Oscar and I sit at the same table. We each get a big piece of paper and colorful crayons. I draw a picture of a tall, green tree with birds. Oscar draws a picture of a fast, red race car. We show each other our drawings and give kind compliments. “I love your tree, Ivy!” Oscar says with a big smile. “Your car looks so fast, Oscar!” I say happily. We decide to trade drawings and keep them forever. Art class is more fun when I create with my best friend.",
    questions: [
      { text: "What does Ivy draw?", answer: "A tall, green tree with birds." },
      { text: "What does Oscar draw?", answer: "A fast, red race car." },
      { text: "What do they decide to do with their drawings?", answer: "Trade them and keep them forever." },
    ],
    trueFalse: [
      { text: "Ivy draws a tree.", answer: true },
      { text: "Oscar draws a boat.", answer: false },
      { text: "They decide to trade their drawings.", answer: true },
    ],
    buildSentence: [
      {
        target: "During art class, Oscar and I sit at the same table.",
        jumbled: ["class,", "table.", "the", "sit", "Oscar", "During", "art", "same", "and", "at", "I"],
      },
      {
        target: "We each get a big piece of paper and colorful crayons.",
        jumbled: ["big", "of", "paper", "piece", "each", "crayons.", "We", "and", "a", "colorful", "get"],
      },
      {
        target: "Oscar draws a picture of a fast, red race car.",
        jumbled: ["of", "fast,", "car.", "red", "a", "Oscar", "race", "picture", "draws", "a"],
      },
      {
        target: "“I love your tree, Ivy!” Oscar says with a big smile.",
        jumbled: ["“I", "love", "with", "smile.", "your", "big", "Oscar", "Ivy!”", "says", "tree,", "a"],
      },
      {
        target: "Art class is more fun when I create with my best friend.",
        jumbled: ["when", "class", "my", "create", "Art", "with", "fun", "more", "best", "is", "friend.", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about drawing or art.",
    mySentenceExample: "I like to draw pictures of animals.",
  },
  {
    number: 7,
    title: "A Rainy Day Indoors",
    image: null,
    imageNote: "Ivy and Oscar sitting on a classroom rug working together on a large rainbow-colored jigsaw puzzle, rain visible through the window behind them.",
    story:
      "Today, it rains hard, so we cannot play outside at recess. Oscar and I stay inside the classroom instead. We choose a puzzle from the shelf and sit on the rug. The puzzle has one hundred pieces of a big rainbow. We work together, finding pieces that fit just right. Oscar is very good at finding the corner pieces. “Found another one, Ivy!” he says proudly. I am good at finding the pieces with bright colors. After a while, we finish the whole puzzle together. “We did it, Ivy!” Oscar cheers. Even on a rainy day, playing with Oscar is always fun.",
    questions: [
      { text: "Why do they stay inside?", answer: "Because it rains hard." },
      { text: "What do they choose to do?", answer: "A puzzle." },
      { text: "How many pieces does the puzzle have?", answer: "One hundred." },
    ],
    trueFalse: [
      { text: "It rains, so they stay inside.", answer: true },
      { text: "They choose to read books.", answer: false },
      { text: "The puzzle has one hundred pieces.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today, it rains hard, so we cannot play outside at recess.",
        jumbled: ["at", "play", "hard,", "so", "we", "recess.", "outside", "it", "rains", "Today,", "cannot"],
      },
      {
        target: "We choose a puzzle from the shelf and sit on the rug.",
        jumbled: ["puzzle", "a", "the", "the", "rug.", "on", "sit", "from", "choose", "shelf", "and", "We"],
      },
      {
        target: "We work together, finding pieces that fit just right.",
        jumbled: ["finding", "fit", "work", "together,", "right.", "pieces", "that", "We", "just"],
      },
      {
        target: "I am good at finding the pieces with bright colors.",
        jumbled: ["with", "good", "bright", "I", "colors.", "finding", "the", "am", "at", "pieces"],
      },
      {
        target: "Even on a rainy day, playing with Oscar is always fun.",
        jumbled: ["rainy", "with", "always", "on", "a", "fun.", "Even", "is", "Oscar", "playing", "day,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a rainy day activity.",
    mySentenceExample: "I like to do puzzles on rainy days.",
  },
  {
    number: 8,
    title: "Helping Oscar with Homework",
    image: null,
    imageNote: "Ivy and Oscar sitting together at a table after school, Ivy pointing at Oscar's math paper, both smiling as he solves a problem correctly.",
    story:
      "After school, Oscar looks worried about his math homework. “I don't understand these numbers,” he says softly. I sit next to him and look at his paper. “Let's do it together,” I say with a smile. I show him how to add the numbers step by step. Oscar tries the next problem, and he gets it right! “You did it, Oscar!” I say, and we both cheer happily. Oscar says, “Thank you for helping me, Ivy.” Helping my best friend makes me feel proud and happy.",
    questions: [
      { text: "What is Oscar worried about?", answer: "His math homework." },
      { text: "What does Ivy do to help?", answer: "Shows him how to add the numbers step by step." },
      { text: "How does Oscar feel after getting the answer right?", answer: "Happy -- they both cheer." },
    ],
    trueFalse: [
      { text: "Oscar is worried about math homework.", answer: true },
      { text: "Ivy ignores Oscar's problem.", answer: false },
      { text: "Oscar feels happy after getting it right.", answer: true },
    ],
    buildSentence: [
      {
        target: "Oscar looks worried about his math homework.",
        jumbled: ["worried", "math", "looks", "homework.", "about", "Oscar", "his"],
      },
      {
        target: "I sit next to him and look at his paper.",
        jumbled: ["next", "his", "and", "to", "sit", "I", "at", "paper.", "look", "him"],
      },
      {
        target: "I show him how to add the numbers step by step.",
        jumbled: ["how", "add", "by", "numbers", "step.", "to", "him", "show", "step", "I", "the"],
      },
      {
        target: "“You did it, Oscar!” I say, and we both cheer happily.",
        jumbled: ["I", "say,", "and", "both", "did", "it,", "cheer", "we", "Oscar!”", "happily.", "“You"],
      },
      {
        target: "Helping my best friend makes me feel proud and happy.",
        jumbled: ["my", "me", "friend", "best", "and", "feel", "proud", "happy.", "Helping", "makes"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about helping a friend.",
    mySentenceExample: "I help my friend with homework.",
  },
  {
    number: 9,
    title: "A Surprise Friendship Bracelet",
    image: null,
    imageNote: "Oscar shyly handing Ivy a small box before class, a colorful blue and yellow friendship bracelet visible inside, both smiling in the school hallway.",
    story:
      "One morning, Oscar hands me a small box before class. “This is for you, Ivy,” he says with a shy smile. Inside the box, I find a colorful friendship bracelet. It has blue and yellow strings woven together carefully. “I made it myself,” Oscar says proudly. I put the bracelet on my wrist right away. “I love it, Oscar! Thank you so much!” I say happily. The next day, I give Oscar a matching bracelet I made too. “Best friends forever, Ivy,” Oscar says with a big smile. Now we both wear our friendship bracelets every single day.",
    questions: [
      { text: "What does Oscar give Ivy?", answer: "A friendship bracelet." },
      { text: "What colors are the bracelet?", answer: "Blue and yellow." },
      { text: "What does Ivy give Oscar the next day?", answer: "A matching bracelet she made." },
    ],
    trueFalse: [
      { text: "Oscar gives Ivy a bracelet.", answer: true },
      { text: "The bracelet is only black.", answer: false },
      { text: "Ivy gives Oscar a matching bracelet.", answer: true },
    ],
    buildSentence: [
      {
        target: "“This is for you, Ivy,” he says with a shy smile.",
        jumbled: ["a", "with", "says", "“This", "Ivy,”", "is", "shy", "you,", "smile.", "he", "for"],
      },
      {
        target: "Inside the box, I find a colorful friendship bracelet.",
        jumbled: ["Inside", "the", "bracelet.", "box,", "I", "a", "find", "friendship", "colorful"],
      },
      {
        target: "I put the bracelet on my wrist right away.",
        jumbled: ["on", "away.", "my", "bracelet", "I", "put", "right", "wrist", "the"],
      },
      {
        target: "The next day, I give Oscar a matching bracelet I made too.",
        jumbled: ["matching", "next", "made", "The", "Oscar", "give", "too.", "bracelet", "day,", "I", "a", "I"],
      },
      {
        target: "“Best friends forever, Ivy,” Oscar says with a big smile.",
        jumbled: ["friends", "forever,", "says", "big", "smile.", "“Best", "a", "Oscar", "Ivy,”", "with"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a gift you gave or received.",
    mySentenceExample: "I gave my friend a small gift.",
  },
  {
    number: 10,
    title: "Best Friends Forever",
    image: null,
    imageNote: "Ivy and Oscar standing together on the last day of school, both wearing their friendship bracelets, waving goodbye with big smiles under a summer sky.",
    story:
      "It has been a whole school year since Oscar and I became friends. We shared snacks, built forts, and fixed a small fight together. We drew pictures, did puzzles, and helped each other with homework. Now summer break is here, and we will not see each other every day. “I will miss you, Oscar,” I say with a small tear in my eye. “Me too, Ivy, but we can still play sometimes,” Oscar says kindly. We promise to call each other and meet at the park. I look at my friendship bracelet and smile with happiness. Oscar is not just my classmate. He is my best friend forever.",
    questions: [
      { text: "How long have Ivy and Oscar been friends?", answer: "A whole school year." },
      { text: "What do they promise to do?", answer: "Call each other and meet at the park." },
      { text: "What does Ivy look at and smile?", answer: "Her friendship bracelet." },
    ],
    trueFalse: [
      { text: "They have been friends for a school year.", answer: true },
      { text: "They promise to never talk again.", answer: false },
      { text: "Ivy smiles at her friendship bracelet.", answer: true },
    ],
    buildSentence: [
      {
        target: "It has been a whole school year since Oscar and I became friends.",
        jumbled: ["whole", "It", "school", "Oscar", "been", "has", "a", "became", "year", "since", "and", "friends.", "I"],
      },
      {
        target: "Now summer break is here, and we will not see each other every day.",
        jumbled: ["day.", "and", "break", "we", "Now", "not", "will", "see", "is", "each", "every", "here,", "summer", "other"],
      },
      {
        target: "“I will miss you, Oscar,” I say with a small tear in my eye.",
        jumbled: ["eye.", "miss", "small", "my", "tear", "with", "say", "Oscar,”", "a", "you,", "“I", "I", "will", "in"],
      },
      {
        target: "We promise to call each other and meet at the park.",
        jumbled: ["other", "park.", "the", "each", "to", "and", "at", "promise", "call", "We", "meet"],
      },
      {
        target: "Oscar is not just my classmate.",
        jumbled: ["Oscar", "is", "classmate.", "my", "not", "just"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a friend you will always remember.",
    mySentenceExample: "My best friend will always be special to me.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
