// A1 Kids digital storybook, Book 18: "My First Day at School"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js
// through storybookData17.js. Sixth book in the Kids age track. Same
// simplified vocabulary/sentence length and 3+3 True/False and
// Build-a-Sentence pattern.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook18/cover.jpg";

export const STORYBOOK_TITLE = "My First Day at School";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Lucy standing at the school gate holding Mom's hand and a blue backpack, a friendly teacher waving from the classroom doorway, other children arriving.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Lucy", role: "The narrator, a young girl starting school", look: "Brown hair in two pigtails, blue backpack, curious and a little nervous expression at first." },
  { name: "Mom", role: "Lucy's mother", look: "Shoulder-length hair, warm cardigan, gentle and reassuring." },
  { name: "Ms. Bell", role: "Lucy's teacher", look: "Neat bun, colorful cardigan, warm smile, calm voice." },
  { name: "Owen", role: "Lucy's new friend, appears from Chapter 5", look: "Short messy hair, striped shirt, friendly and outgoing." },
  { name: "Ella", role: "Lucy's new friend, appears from Chapter 6", look: "Curly hair with a bow, yellow dress, curious and kind." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Getting Ready for School",
    image: null,
    imageNote: "Lucy holding Mom's hand at the school gate, wearing a new blue backpack, other children and parents walking toward the school building.",
    story:
      "Today is my first day of school, and I feel a little nervous. Mom helps me put on my new blue backpack. I have a new lunch box with a picture of a cat on it. “You are going to have so much fun, Lucy,” Mom says with a smile. I hold Mom's hand tightly as we walk to the school gate. Many children walk into the big building with their parents. I take a deep breath and try to feel brave. Mom gives me a big hug before I go inside. I feel a little scared, but also a little excited too.",
    questions: [
      { text: "What does Mom help Lucy put on?", answer: "Her new blue backpack." },
      { text: "What does Lucy's lunch box have on it?", answer: "A picture of a cat." },
      { text: "How does Lucy feel before going inside?", answer: "A little scared, but also a little excited." },
    ],
    trueFalse: [
      { text: "Lucy wears a blue backpack.", answer: true },
      { text: "Lucy feels nothing at all.", answer: false },
      { text: "Mom gives Lucy a hug.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today is my first day of school, and I feel a little nervous.",
        jumbled: ["nervous.", "is", "I", "feel", "a", "first", "my", "school,", "day", "little", "of", "Today", "and"],
      },
      {
        target: "I have a new lunch box with a picture of a cat on it.",
        jumbled: ["of", "a", "picture", "box", "with", "I", "have", "on", "a", "cat", "a", "it.", "new", "lunch"],
      },
      {
        target: "“You are going to have so much fun, Lucy,” Mom says with a smile.",
        jumbled: ["Lucy,”", "to", "Mom", "with", "have", "fun,", "“You", "going", "much", "says", "so", "smile.", "are", "a"],
      },
      {
        target: "Many children walk into the big building with their parents.",
        jumbled: ["parents.", "walk", "their", "the", "Many", "into", "with", "children", "big", "building"],
      },
      {
        target: "I feel a little scared, but also a little excited too.",
        jumbled: ["but", "little", "a", "too.", "also", "excited", "I", "little", "scared,", "feel", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your first day somewhere new.",
    mySentenceExample: "I feel nervous on my first day.",
  },
  {
    number: 2,
    title: "Meeting the Teacher",
    image: null,
    imageNote: "Ms. Bell kneeling down to greet Lucy warmly in the classroom doorway, pointing toward a small desk with a name tag.",
    story:
      "Inside the classroom, a kind woman smiles at me. “Hello, I am Ms. Bell, your new teacher,” she says warmly. I say, “Hello, my name is Lucy,” in a small voice. Ms. Bell shows me where to put my backpack on a small hook. She has a name tag with my name on my desk. “This is your very own seat, Lucy,” she says kindly. I sit down and look around the colorful classroom. Ms. Bell's voice is soft, and her smile makes me feel calm. I think I am going to like my new teacher.",
    questions: [
      { text: "What is the teacher's name?", answer: "Ms. Bell." },
      { text: "What does Lucy say her name is?", answer: "Lucy." },
      { text: "What does Lucy find on her desk?", answer: "A name tag with her name." },
    ],
    trueFalse: [
      { text: "The teacher's name is Ms. Bell.", answer: true },
      { text: "Lucy does not say her name.", answer: false },
      { text: "Lucy finds a name tag on her desk.", answer: true },
    ],
    buildSentence: [
      {
        target: "Inside the classroom, a kind woman smiles at me.",
        jumbled: ["woman", "smiles", "classroom,", "Inside", "a", "at", "the", "me.", "kind"],
      },
      {
        target: "“Hello, I am Ms. Bell, your new teacher,” she says warmly.",
        jumbled: ["your", "Ms.", "I", "she", "Bell,", "“Hello,", "teacher,”", "am", "new", "says", "warmly."],
      },
      {
        target: "Ms. Bell shows me where to put my backpack on a small hook.",
        jumbled: ["a", "where", "Ms.", "my", "hook.", "on", "backpack", "to", "shows", "small", "put", "Bell", "me"],
      },
      {
        target: "“This is your very own seat, Lucy,” she says kindly.",
        jumbled: ["says", "“This", "is", "very", "kindly.", "own", "your", "she", "seat,", "Lucy,”"],
      },
      {
        target: "Ms. Bell's voice is soft, and her smile makes me feel calm.",
        jumbled: ["feel", "me", "her", "voice", "smile", "makes", "is", "Bell's", "Ms.", "soft,", "and", "calm."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a teacher you like.",
    mySentenceExample: "My teacher is kind and helpful.",
  },
  {
    number: 3,
    title: "My New Classroom",
    image: null,
    imageNote: "Lucy looking around a colorful classroom with animal posters, a reading corner with pillows, and a small fish tank on a shelf.",
    story:
      "I look around my new classroom with big, curious eyes. There are colorful pictures of animals on every wall. A big shelf holds many books, blocks, and puzzles. Small tables and chairs sit together in groups of four. A cozy reading corner has soft pillows and a fuzzy rug. “Welcome, Lucy,” Ms. Bell says, and she shows us where the crayons and paper are kept. I see a class pet, a small fish, swimming in a tank. Everything in the classroom looks fun and new. I already want to explore every single corner of this room.",
    questions: [
      { text: "What is on the walls?", answer: "Colorful pictures of animals." },
      { text: "What does the reading corner have?", answer: "Soft pillows and a fuzzy rug." },
      { text: "What class pet does Lucy see?", answer: "A small fish." },
    ],
    trueFalse: [
      { text: "There are pictures of animals on the walls.", answer: true },
      { text: "The reading corner is empty and cold.", answer: false },
      { text: "Lucy sees a fish in a tank.", answer: true },
    ],
    buildSentence: [
      {
        target: "I look around my new classroom with big, curious eyes.",
        jumbled: ["big,", "look", "eyes.", "classroom", "I", "with", "my", "new", "curious", "around"],
      },
      {
        target: "There are colorful pictures of animals on every wall.",
        jumbled: ["of", "wall.", "are", "colorful", "on", "There", "every", "pictures", "animals"],
      },
      {
        target: "A cozy reading corner has soft pillows and a fuzzy rug.",
        jumbled: ["A", "reading", "a", "fuzzy", "soft", "corner", "pillows", "has", "cozy", "and", "rug."],
      },
      {
        target: "“Welcome, Lucy,” Ms. Bell says, and she shows us where the crayons and paper are kept.",
        jumbled: ["the", "where", "she", "paper", "crayons", "Lucy,”", "and", "us", "Bell", "kept.", "and", "shows", "are", "“Welcome,", "Ms.", "says,"],
      },
      {
        target: "I already want to explore every single corner of this room.",
        jumbled: ["want", "this", "room.", "already", "corner", "I", "single", "explore", "to", "every", "of"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your classroom.",
    mySentenceExample: "My classroom has many colorful pictures.",
  },
  {
    number: 4,
    title: "Circle Time Story",
    image: null,
    imageNote: "Ms. Bell holding up a colorful picture book to a group of children sitting in a circle on a soft rug, Lucy laughing and listening closely.",
    story:
      "Ms. Bell asks everyone to sit together on the soft rug. “It's time for circle time and a story,” she says. All the children sit in a big, round circle happily. Ms. Bell holds up a colorful book about a brave little bear. She reads with a fun voice, and everyone listens closely. I laugh when the bear does something silly in the story. After the story, Ms. Bell asks us questions about the bear. I raise my hand and answer one question correctly. “Great answer, Lucy!” Ms. Bell says with a smile. Circle time is quickly becoming my favorite part of school.",
    questions: [
      { text: "Where do the children sit?", answer: "Together on the soft rug, in a circle." },
      { text: "What is the story about?", answer: "A brave little bear." },
      { text: "What does Lucy do after the story?", answer: "Raises her hand and answers a question correctly." },
    ],
    trueFalse: [
      { text: "The children sit on a rug.", answer: true },
      { text: "The story is about a brave bear.", answer: true },
      { text: "Lucy does not answer any questions.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Bell asks everyone to sit together on the soft rug.",
        jumbled: ["rug.", "the", "Ms.", "asks", "to", "on", "everyone", "sit", "Bell", "together", "soft"],
      },
      {
        target: "Ms. Bell holds up a colorful book about a brave little bear.",
        jumbled: ["brave", "Ms.", "up", "colorful", "about", "a", "book", "a", "little", "holds", "bear.", "Bell"],
      },
      {
        target: "I laugh when the bear does something silly in the story.",
        jumbled: ["silly", "I", "bear", "the", "something", "laugh", "when", "does", "story.", "in", "the"],
      },
      {
        target: "Ms. Bell asks us questions about the bear.",
        jumbled: ["the", "Bell", "about", "questions", "asks", "Ms.", "bear.", "us"],
      },
      {
        target: "Circle time is quickly becoming my favorite part of school.",
        jumbled: ["favorite", "is", "quickly", "becoming", "part", "time", "my", "school.", "Circle", "of"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a story you like.",
    mySentenceExample: "I like stories about animals.",
  },
  {
    number: 5,
    title: "Making a Friend",
    image: null,
    imageNote: "Lucy and a boy named Owen building a tall tower together with colorful blocks, both laughing as the tower nearly reaches the ceiling.",
    story:
      "At the block area, a boy smiles and waves at me. “Hi, I'm Owen. Do you want to build with me?” he asks. “Yes! My name is Lucy,” I say with a happy smile. We start building a tall tower with colorful blocks together. Owen is very good at making the tower stand up straight. My tower falls down once, but Owen helps me build it again. We laugh together when our tower finally reaches the ceiling almost. Owen says, “You are fun to play with, Lucy!” I feel so happy to make my first friend at school.",
    questions: [
      { text: "Who asks Lucy to play?", answer: "Owen." },
      { text: "What do they build together?", answer: "A tall tower with colorful blocks." },
      { text: "What does Owen say to Lucy?", answer: "You are fun to play with, Lucy!" },
    ],
    trueFalse: [
      { text: "Owen asks Lucy to build blocks.", answer: true },
      { text: "The tower never falls down.", answer: false },
      { text: "Owen says Lucy is fun to play with.", answer: true },
    ],
    buildSentence: [
      {
        target: "At the block area, a boy smiles and waves at me.",
        jumbled: ["at", "and", "area,", "the", "waves", "me.", "At", "block", "a", "boy", "smiles"],
      },
      {
        target: "“Hi, I'm Owen. Do you want to build with me?” he asks.",
        jumbled: ["Owen.", "Do", "asks.", "“Hi,", "I'm", "build", "to", "want", "you", "me?”", "he", "with"],
      },
      {
        target: "Owen is very good at making the tower stand up straight.",
        jumbled: ["at", "straight.", "stand", "tower", "Owen", "making", "good", "is", "very", "up", "the"],
      },
      {
        target: "My tower falls down once, but Owen helps me build it again.",
        jumbled: ["My", "but", "falls", "helps", "build", "it", "Owen", "again.", "me", "once,", "down", "tower"],
      },
      {
        target: "I feel so happy to make my first friend at school.",
        jumbled: ["first", "to", "my", "school.", "friend", "at", "make", "happy", "I", "feel", "so"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about making a new friend.",
    mySentenceExample: "I make a new friend at school.",
  },
  {
    number: 6,
    title: "Snack Time",
    image: null,
    imageNote: "Lucy, Owen, and Ella sitting together at a small table sharing apple slices and crackers, all smiling and talking.",
    story:
      "At snack time, everyone sits together at the small tables. Ms. Bell gives each of us a cup of apple slices. I sit next to my new friend Owen and a girl named Ella. “Want to share, Lucy?” Ella asks, and she shares her crackers with me, and I share my apple slices too. We talk about our favorite colors while we eat our snacks. Owen says his favorite color is green, and mine is purple. Ella says her favorite color is yellow, like the sun. Snack time is a fun way to talk and make new friends. I feel happy sitting with my new classmates.",
    questions: [
      { text: "What snack does Ms. Bell give the children?", answer: "Apple slices." },
      { text: "Who does Lucy sit next to?", answer: "Owen and a girl named Ella." },
      { text: "What do they talk about?", answer: "Their favorite colors." },
    ],
    trueFalse: [
      { text: "Ms. Bell gives apple slices.", answer: true },
      { text: "Lucy sits alone at snack time.", answer: false },
      { text: "They talk about their favorite colors.", answer: true },
    ],
    buildSentence: [
      {
        target: "At snack time, everyone sits together at the small tables.",
        jumbled: ["snack", "at", "the", "together", "everyone", "small", "time,", "tables.", "sits", "At"],
      },
      {
        target: "I sit next to my new friend Owen and a girl named Ella.",
        jumbled: ["sit", "a", "my", "to", "next", "friend", "named", "Owen", "Ella.", "girl", "and", "new", "I"],
      },
      {
        target: "“Want to share, Lucy?” Ella asks, and she shares her crackers with me, and I share my apple slices too.",
        jumbled: ["and", "my", "she", "share,", "share", "me,", "with", "shares", "slices", "Ella", "apple", "asks,", "crackers", "and", "too.", "I", "“Want", "her", "Lucy?”", "to"],
      },
      {
        target: "Owen says his favorite color is green, and mine is purple.",
        jumbled: ["color", "purple.", "mine", "green,", "and", "says", "is", "Owen", "his", "is", "favorite"],
      },
      {
        target: "Snack time is a fun way to talk and make new friends.",
        jumbled: ["fun", "a", "Snack", "make", "talk", "to", "new", "friends.", "is", "and", "time", "way"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite snack.",
    mySentenceExample: "My favorite snack is apple slices.",
  },
  {
    number: 7,
    title: "A Little Cry",
    image: null,
    imageNote: "Ms. Bell kneeling beside a teary-eyed Lucy with a comforting hand on her shoulder, Owen holding out his toy car to share.",
    story:
      "In the afternoon, I suddenly think about Mom and feel sad. My eyes fill with tears, and I start to cry quietly. Ms. Bell notices and comes over to sit beside me. “It's okay to miss your mom, Lucy,” she says gently. She gives me a soft tissue and a warm, caring hug. Owen comes over and gives me his favorite toy car to hold. “You can borrow it, Lucy,” he says kindly. I feel better because my teacher and my new friend are so kind. I take a deep breath and feel ready to keep playing.",
    questions: [
      { text: "Why does Lucy start to cry?", answer: "Because she suddenly misses Mom." },
      { text: "What does Ms. Bell give Lucy?", answer: "A soft tissue and a hug." },
      { text: "What does Owen give Lucy?", answer: "His favorite toy car." },
    ],
    trueFalse: [
      { text: "Lucy misses her mom.", answer: true },
      { text: "Ms. Bell ignores Lucy's tears.", answer: false },
      { text: "Owen gives Lucy his toy car.", answer: true },
    ],
    buildSentence: [
      {
        target: "In the afternoon, I suddenly think about Mom and feel sad.",
        jumbled: ["and", "I", "afternoon,", "sad.", "Mom", "about", "In", "feel", "the", "suddenly", "think"],
      },
      {
        target: "My eyes fill with tears, and I start to cry quietly.",
        jumbled: ["and", "My", "quietly.", "start", "eyes", "with", "tears,", "fill", "I", "to", "cry"],
      },
      {
        target: "She gives me a soft tissue and a warm, caring hug.",
        jumbled: ["caring", "warm,", "a", "She", "and", "soft", "tissue", "me", "gives", "a", "hug."],
      },
      {
        target: "Owen comes over and gives me his favorite toy car to hold.",
        jumbled: ["car", "favorite", "and", "comes", "hold.", "gives", "me", "over", "toy", "his", "Owen", "to"],
      },
      {
        target: "I feel better because my teacher and my new friend are so kind.",
        jumbled: ["so", "better", "I", "because", "teacher", "my", "new", "and", "my", "feel", "are", "kind.", "friend"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about missing someone.",
    mySentenceExample: "I miss my mom when I am at school.",
  },
  {
    number: 8,
    title: "Playground Fun",
    image: null,
    imageNote: "Lucy, Owen, and Ella playing together on a sunny playground with swings and a slide, all laughing and running around.",
    story:
      "After lunch, Ms. Bell takes the whole class outside to play. The playground has swings, a slide, and a climbing wall. “Come on, Lucy!” Owen calls, and he and Ella run to the slide as I follow them quickly. We climb up the ladder and slide down again and again. Ella pushes me gently on the swing, and I laugh with joy. The sun feels warm, and the sky is bright and blue. We play tag and run around the playground together happily. Playing outside with my new friends is so much fun. I do not want playtime to end at all.",
    questions: [
      { text: "What does the playground have?", answer: "Swings, a slide, and a climbing wall." },
      { text: "Who does Lucy follow to the slide?", answer: "Owen and Ella." },
      { text: "What does Ella do on the swing?", answer: "Pushes Lucy gently." },
    ],
    trueFalse: [
      { text: "The playground has swings and a slide.", answer: true },
      { text: "Lucy plays alone outside.", answer: false },
      { text: "Ella pushes Lucy on the swing.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Bell takes the whole class outside to play.",
        jumbled: ["outside", "class", "takes", "whole", "to", "the", "Ms.", "play.", "Bell"],
      },
      {
        target: "“Come on, Lucy!” Owen calls, and he and Ella run to the slide as I follow them quickly.",
        jumbled: ["follow", "quickly.", "as", "on,", "the", "Owen", "calls,", "slide", "Ella", "“Come", "and", "he", "I", "Lucy!”", "and", "to", "run", "them"],
      },
      {
        target: "Ella pushes me gently on the swing, and I laugh with joy.",
        jumbled: ["Ella", "with", "joy.", "I", "swing,", "pushes", "gently", "laugh", "the", "me", "on", "and"],
      },
      {
        target: "The sun feels warm, and the sky is bright and blue.",
        jumbled: ["feels", "is", "bright", "sun", "blue.", "the", "and", "and", "warm,", "sky", "The"],
      },
      {
        target: "Playing outside with my new friends is so much fun.",
        jumbled: ["my", "friends", "is", "Playing", "with", "much", "fun.", "outside", "new", "so"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about playing outside.",
    mySentenceExample: "I like to play on the swings.",
  },
  {
    number: 9,
    title: "My Favorite Toy",
    image: null,
    imageNote: "Lucy standing in front of the class holding up a soft teddy bear, classmates sitting on the rug listening with curious smiles.",
    story:
      "Today, Ms. Bell says we can bring something special to share. I bring my soft, fluffy teddy bear from home. When it is my turn, I stand in front of the class carefully. “This is my teddy bear. His name is Buttons,” I say. My classmates smile and ask questions about my bear. “Where did you get him, Lucy?” asks Ella with curious eyes. “My grandma gave him to me,” I answer proudly. Everyone says Buttons looks very soft and cute. I feel proud to share something special with my new friends.",
    questions: [
      { text: "What does Lucy bring to share?", answer: "Her teddy bear." },
      { text: "What is the teddy bear's name?", answer: "Buttons." },
      { text: "Who gave Lucy the teddy bear?", answer: "Her grandma." },
    ],
    trueFalse: [
      { text: "Lucy brings a teddy bear.", answer: true },
      { text: "The bear's name is Buttons.", answer: true },
      { text: "Lucy says her dad gave her the bear.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today, Ms. Bell says we can bring something special to share.",
        jumbled: ["Bell", "says", "bring", "Ms.", "can", "to", "something", "Today,", "share.", "we", "special"],
      },
      {
        target: "I stand in front of the class carefully.",
        jumbled: ["stand", "in", "of", "carefully.", "the", "front", "I", "class"],
      },
      {
        target: "“This is my teddy bear. His name is Buttons,” I say.",
        jumbled: ["His", "teddy", "Buttons,”", "bear.", "“This", "say.", "is", "is", "I", "my", "name"],
      },
      {
        target: "“Where did you get him, Lucy?” asks Ella with curious eyes.",
        jumbled: ["you", "get", "curious", "Ella", "him,", "did", "“Where", "Lucy?”", "with", "asks", "eyes."],
      },
      {
        target: "I feel proud to share something special with my new friends.",
        jumbled: ["share", "feel", "new", "something", "friends.", "to", "with", "my", "special", "proud", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite toy.",
    mySentenceExample: "My favorite toy is a soft bear.",
  },
  {
    number: 10,
    title: "Home Time - I Love School!",
    image: null,
    imageNote: "Lucy running toward Mom at the school gate with a huge smile, holding a toy car and telling her all about the day, other parents and children in the background.",
    story:
      "At the end of the day, Mom waits for me at the school gate. “How was your first day, Lucy?” Mom asks with a big smile. “I made two new friends, and I love my teacher!” I say excitedly. I tell Mom about circle time, snack time, and playing on the playground. I show her the toy car that Owen let me borrow today. Mom listens to every word with a happy, proud smile. “I am so proud of you, Lucy,” she says warmly. I hold Mom's hand and feel excited for tomorrow. My first day of school was better than I ever imagined.",
    questions: [
      { text: "Who waits for Lucy at the gate?", answer: "Mom." },
      { text: "What does Lucy tell Mom about?", answer: "Circle time, snack time, and playing on the playground." },
      { text: "How does Lucy feel about tomorrow?", answer: "Excited." },
    ],
    trueFalse: [
      { text: "Mom waits at the school gate.", answer: true },
      { text: "Lucy has nothing to tell Mom.", answer: false },
      { text: "Lucy feels excited for tomorrow.", answer: true },
    ],
    buildSentence: [
      {
        target: "At the end of the day, Mom waits for me at the school gate.",
        jumbled: ["Mom", "gate.", "school", "end", "the", "for", "me", "of", "day,", "at", "the", "waits", "the", "At"],
      },
      {
        target: "“I made two new friends, and I love my teacher!” I say excitedly.",
        jumbled: ["made", "my", "two", "new", "and", "love", "“I", "I", "teacher!”", "I", "friends,", "excitedly.", "say"],
      },
      {
        target: "I tell Mom about circle time, snack time, and playing on the playground.",
        jumbled: ["tell", "snack", "on", "time,", "circle", "the", "Mom", "and", "about", "time,", "playing", "I", "playground."],
      },
      {
        target: "Mom listens to every word with a happy, proud smile.",
        jumbled: ["smile.", "happy,", "to", "Mom", "listens", "word", "a", "every", "with", "proud"],
      },
      {
        target: "My first day of school was better than I ever imagined.",
        jumbled: ["better", "school", "was", "My", "of", "first", "I", "than", "imagined.", "ever", "day"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a great day you had.",
    mySentenceExample: "I had a great day at school.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
