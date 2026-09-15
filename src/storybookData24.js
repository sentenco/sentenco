// A2 Kids digital storybook, Book 24: "The Class Pet"
// Static content -- no Supabase. Second book in the A2 Kids batch
// (Books 23-30). Same structure/level as storybookData23.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook24/cover.jpg";

export const STORYBOOK_TITLE = "The Class Pet";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Leo carrying a small rabbit cage carefully down the school hallway, a fluffy white rabbit named Nibbles peeking out, Leo smiling with pride.";

export const CHARACTERS = [
  { name: "Leo", role: "The narrator, a young boy", look: "Short dark hair, red backpack, responsible and caring expression." },
  { name: "Zoe", role: "Leo's classmate", look: "Glasses, two pigtails, friendly and helpful." },
  { name: "Ms. Bailey", role: "Leo's teacher", look: "Cardigan sweater, warm smile, encouraging." },
  { name: "Nibbles", role: "The class pet, a white rabbit", look: "Fluffy white fur, pink nose, twitchy whiskers." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Job",
    image: null,
    imageNote: "Ms. Bailey standing beside a rabbit cage in the classroom, announcing the pet-care schedule to the class, Leo raising his hand eagerly.",
    story:
      "Every week, one student in our class gets to take care of Nibbles, our classroom rabbit. On Monday, Ms. Bailey announces that it is my turn this week. “Leo, you will feed Nibbles and clean her cage every day,” she explains. I feel proud because taking care of Nibbles is a big responsibility. Zoe, who had the job last week, gives me some helpful tips. “Nibbles loves carrots, and she gets scared by loud noises,” she says. I promise to take excellent care of our small, fluffy friend all week long.",
    questions: [
      { text: "What does Leo's new job involve?", answer: "Feeding Nibbles and cleaning her cage every day." },
      { text: "Who had the job before Leo?", answer: "Zoe." },
      { text: "What tip does Zoe give Leo?", answer: "That Nibbles loves carrots and gets scared by loud noises." },
    ],
    trueFalse: [
      { text: "Leo's job is to feed and clean Nibbles' cage.", answer: true },
      { text: "Zoe never had the job before.", answer: false },
      { text: "Zoe says Nibbles gets scared by loud noises.", answer: true },
    ],
    buildSentence: [
      {
        target: "Every week, one student in our class gets to take care of Nibbles, our classroom rabbit.",
        jumbled: ["gets", "class", "week,", "in", "classroom", "rabbit.", "take", "of", "care", "one", "student", "our", "Every", "to", "our", "Nibbles,"],
      },
      {
        target: "On Monday, Ms. Bailey announces that it is my turn this week.",
        jumbled: ["Monday,", "my", "turn", "announces", "is", "week.", "that", "Ms.", "it", "On", "Bailey", "this"],
      },
      {
        target: "“Leo, you will feed Nibbles and clean her cage every day,” she explains.",
        jumbled: ["clean", "“Leo,", "and", "she", "every", "cage", "will", "feed", "Nibbles", "day,”", "explains.", "her", "you"],
      },
      {
        target: "Zoe, who had the job last week, gives me some helpful tips.",
        jumbled: ["the", "helpful", "had", "job", "some", "who", "gives", "me", "week,", "last", "Zoe,", "tips."],
      },
      {
        target: "I promise to take excellent care of our small, fluffy friend all week long.",
        jumbled: ["our", "take", "to", "of", "care", "promise", "I", "fluffy", "small,", "excellent", "week", "all", "long.", "friend"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a responsibility you have at home or school.",
    mySentenceExample: "My responsibility at home is feeding our dog every morning.",
  },
  {
    number: 2,
    title: "Meeting Nibbles",
    image: null,
    imageNote: "Leo kneeling beside the rabbit cage, gently offering a carrot slice to Nibbles while Zoe watches and smiles.",
    story:
      "During recess, I learn everything about caring for Nibbles. First, I fill her water bottle and add fresh hay to her cage. Then I offer her a small piece of carrot, and she nibbles it happily from my hand. Her whiskers twitch, and her soft fur feels warm when I gently pet her. “She likes you already, Leo,” Zoe says with a laugh. I clean the corner of the cage where it is a little messy, just like Zoe showed me. By the end of recess, I feel much more confident about being Nibbles' caretaker.",
    questions: [
      { text: "What does Leo do first for Nibbles?", answer: "Fills her water bottle and adds fresh hay." },
      { text: "What does Leo offer Nibbles to eat?", answer: "A small piece of carrot." },
      { text: "How does Leo feel by the end of recess?", answer: "More confident." },
    ],
    trueFalse: [
      { text: "Leo fills the water bottle first.", answer: true },
      { text: "Nibbles refuses to eat the carrot.", answer: false },
      { text: "Leo feels more confident by the end of recess.", answer: true },
    ],
    buildSentence: [
      {
        target: "During recess, I learn everything about caring for Nibbles.",
        jumbled: ["for", "I", "about", "learn", "recess,", "caring", "During", "everything", "Nibbles."],
      },
      {
        target: "First, I fill her water bottle and add fresh hay to her cage.",
        jumbled: ["water", "I", "First,", "add", "her", "fill", "to", "bottle", "fresh", "and", "hay", "her", "cage."],
      },
      {
        target: "Then I offer her a small piece of carrot, and she nibbles it happily from my hand.",
        jumbled: ["hand.", "it", "my", "a", "from", "offer", "happily", "I", "of", "and", "she", "carrot,", "her", "Then", "nibbles", "small", "piece"],
      },
      {
        target: "“She likes you already, Leo,” Zoe says with a laugh.",
        jumbled: ["says", "already,", "Zoe", "laugh.", "Leo,”", "with", "you", "a", "likes", "“She"],
      },
      {
        target: "I clean the corner of the cage where it is a little messy, just like Zoe showed me.",
        jumbled: ["messy,", "the", "it", "clean", "corner", "just", "little", "Zoe", "is", "where", "showed", "of", "I", "me.", "the", "cage", "like", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an animal you like to take care of.",
    mySentenceExample: "I like to take care of my grandmother's cat when I visit.",
  },
  {
    number: 3,
    title: "The Weekend Question",
    image: null,
    imageNote: "Ms. Bailey asking the class a question in front of the whiteboard, Leo raising his hand high while other students look on.",
    story:
      "On Friday afternoon, Ms. Bailey asks the class an important question. “Nibbles needs a home for the weekend. Who would like to take her?” Many hands go up immediately, including mine, waving excitedly in the air. Ms. Bailey thinks for a moment and then smiles at me. “Leo, since you did such a great job this week, you can take her home,” she says. I feel thrilled but also a little nervous because I have never taken care of a pet by myself for two whole days. Zoe gives me a thumbs up from across the room.",
    questions: [
      { text: "What does Ms. Bailey ask the class?", answer: "Who would like to take Nibbles home for the weekend." },
      { text: "Who does Ms. Bailey choose?", answer: "Leo." },
      { text: "Why does Leo feel a little nervous?", answer: "He has never taken care of a pet alone for two days." },
    ],
    trueFalse: [
      { text: "Nibbles needs a home for the weekend.", answer: true },
      { text: "No one wants to take Nibbles home.", answer: false },
      { text: "Leo has taken care of a pet alone many times before.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Friday afternoon, Ms. Bailey asks the class an important question.",
        jumbled: ["Ms.", "the", "asks", "afternoon,", "an", "important", "On", "Bailey", "question.", "class", "Friday"],
      },
      {
        target: "“Nibbles needs a home for the weekend. Who would like to take her?”",
        jumbled: ["a", "the", "weekend.", "to", "home", "Who", "“Nibbles", "needs", "her?”", "for", "like", "would", "take"],
      },
      {
        target: "Many hands go up immediately, including mine, waving excitedly in the air.",
        jumbled: ["including", "in", "the", "Many", "excitedly", "up", "mine,", "go", "waving", "hands", "air.", "immediately,"],
      },
      {
        target: "“Leo, since you did such a great job this week, you can take her home,” she says.",
        jumbled: ["she", "says.", "did", "you", "can", "this", "“Leo,", "her", "great", "since", "you", "take", "home,”", "week,", "a", "such", "job"],
      },
      {
        target: "I feel thrilled but also a little nervous because I have never taken care of a pet by myself for two whole days.",
        jumbled: ["but", "feel", "thrilled", "I", "whole", "nervous", "for", "never", "little", "days.", "by", "taken", "a", "have", "pet", "care", "two", "I", "myself", "also", "of", "a", "because"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you were chosen for something special.",
    mySentenceExample: "I felt thrilled when the coach chose me for the team.",
  },
  {
    number: 4,
    title: "Bringing Nibbles Home",
    image: null,
    imageNote: "Leo walking carefully out of school holding the rabbit cage with both hands, his family's car waiting nearby.",
    story:
      "After school, I carry Nibbles' cage very carefully to the car, making sure not to shake it too much. At home, my little sister runs over excitedly and asks, “Can I pet her? Can I pet her?” I explain to my whole family that Nibbles needs a quiet, safe space and gentle hands. We choose a calm corner of the living room for her cage, away from loud noises. “This is a big responsibility, Leo,” Dad says, “but I know you can handle it.” I nod, feeling determined to be the best rabbit-sitter possible.",
    questions: [
      { text: "How does Leo carry the cage?", answer: "Very carefully, so it does not shake." },
      { text: "What does Leo's sister ask?", answer: "Can I pet her?" },
      { text: "Where do they put Nibbles' cage?", answer: "A calm corner of the living room." },
    ],
    trueFalse: [
      { text: "Leo carries the cage carefully.", answer: true },
      { text: "Leo's sister does not care about Nibbles.", answer: false },
      { text: "They choose a loud, busy corner for the cage.", answer: false },
    ],
    buildSentence: [
      {
        target: "I carry Nibbles' cage very carefully to the car, making sure not to shake it too much.",
        jumbled: ["carefully", "cage", "it", "to", "very", "too", "to", "not", "car,", "carry", "much.", "Nibbles'", "making", "sure", "shake", "I", "the"],
      },
      {
        target: "At home, my little sister runs over excitedly and asks, “Can I pet her? Can I pet her?” I explain to my whole family that Nibbles needs a quiet, safe space and gentle hands.",
        jumbled: ["quiet,", "my", "pet", "home,", "over", "I", "family", "and", "gentle", "her?", "a", "runs", "At", "Nibbles", "whole", "to", "“Can", "sister", "I", "safe", "explain", "excitedly", "Can", "and", "needs", "pet", "that", "my", "asks,", "her?”", "I", "hands.", "little", "space"],
      },
      {
        target: "We choose a calm corner of the living room for her cage, away from loud noises.",
        jumbled: ["calm", "cage,", "choose", "of", "the", "living", "We", "noises.", "her", "away", "loud", "a", "for", "from", "room", "corner"],
      },
      {
        target: "“This is a big responsibility, Leo,” Dad says, “but I know you can handle it.”",
        jumbled: ["“This", "is", "says,", "“but", "know", "can", "Dad", "you", "big", "a", "Leo,”", "handle", "it.”", "I", "responsibility,"],
      },
      {
        target: "I nod, feeling determined to be the best rabbit-sitter possible.",
        jumbled: ["determined", "be", "best", "nod,", "possible.", "I", "rabbit-sitter", "feeling", "the", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a rule your family has for taking care of something.",
    mySentenceExample: "In my family, we must feed our fish every day.",
  },
  {
    number: 5,
    title: "Settling In",
    image: null,
    imageNote: "Nibbles crouched quietly in the corner of her cage in Leo's living room, Leo sitting nearby speaking softly and offering hay.",
    story:
      "At first, Nibbles seems nervous in her new surroundings. She sits very still in the corner of her cage and does not move much. “Maybe she misses her classroom,” I think to myself. I sit quietly beside her cage and speak in a soft, gentle voice. Slowly, I offer her fresh hay through the cage bars. After a while, she starts hopping around a little and even nibbles on a piece of lettuce. Mom peeks in and smiles. “She's warming up to you, Leo,” she says. By dinnertime, Nibbles seems much more relaxed, and I feel relieved that she is finally settling into her temporary home.",
    questions: [
      { text: "How does Nibbles act at first?", answer: "Nervous -- she sits very still." },
      { text: "What does Leo do to help her feel better?", answer: "Sits quietly beside her and speaks softly, offering fresh hay." },
      { text: "How does Nibbles seem by dinnertime?", answer: "Much more relaxed." },
    ],
    trueFalse: [
      { text: "Nibbles seems nervous at first.", answer: true },
      { text: "Leo yells loudly to get Nibbles' attention.", answer: false },
      { text: "Nibbles seems more relaxed by dinnertime.", answer: true },
    ],
    buildSentence: [
      {
        target: "At first, Nibbles seems nervous in her new surroundings.",
        jumbled: ["nervous", "in", "her", "new", "At", "surroundings.", "Nibbles", "first,", "seems"],
      },
      {
        target: "She sits very still in the corner of her cage and does not move much.",
        jumbled: ["in", "and", "She", "does", "much.", "still", "very", "cage", "of", "the", "sits", "not", "move", "her", "corner"],
      },
      {
        target: "I sit quietly beside her cage and speak in a soft, gentle voice.",
        jumbled: ["her", "speak", "beside", "I", "voice.", "in", "soft,", "quietly", "and", "sit", "gentle", "a", "cage"],
      },
      {
        target: "She starts hopping around a little and even nibbles on a piece of lettuce.",
        jumbled: ["around", "and", "She", "piece", "of", "on", "starts", "hopping", "a", "a", "little", "even", "nibbles", "lettuce."],
      },
      {
        target: "By dinnertime, Nibbles seems much more relaxed, and I feel relieved that she is finally settling into her temporary home.",
        jumbled: ["she", "I", "seems", "finally", "feel", "and", "that", "home.", "relieved", "her", "is", "settling", "By", "temporary", "more", "Nibbles", "dinnertime,", "relaxed,", "much", "into"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how you help someone or something feel calm.",
    mySentenceExample: "I speak softly to help my baby cousin feel calm.",
  },
  {
    number: 6,
    title: "The Escape",
    image: null,
    imageNote: "Leo and his sister crawling under the living room furniture, looking worried, the empty open cage visible behind them.",
    story:
      "The next morning, I get a terrible surprise. The cage door is open, and Nibbles is nowhere to be seen! My heart starts beating fast, and I feel a wave of panic. “Nibbles is missing!” I shout, and my whole family rushes into the living room. We search under the couch, behind the curtains, and inside every corner of the room. “How did the door open, Leo?” Mom asks, checking the latch. I feel terrible, worrying that I forgot to close it properly the night before. We keep searching quietly so we do not scare her further.",
    questions: [
      { text: "What does Leo discover in the morning?", answer: "The cage door is open and Nibbles is gone." },
      { text: "How does Leo feel when he sees the empty cage?", answer: "Panicked." },
      { text: "What does the family do to find Nibbles?", answer: "Search under the couch, behind curtains, and in every corner." },
    ],
    trueFalse: [
      { text: "The cage door is open and Nibbles is gone.", answer: true },
      { text: "Leo feels calm and unworried about Nibbles.", answer: false },
      { text: "The family searches the living room together.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next morning, I get a terrible surprise.",
        jumbled: ["terrible", "morning,", "next", "a", "The", "get", "I", "surprise."],
      },
      {
        target: "The cage door is open, and Nibbles is nowhere to be seen!",
        jumbled: ["is", "nowhere", "to", "door", "open,", "is", "and", "cage", "seen!", "be", "Nibbles", "The"],
      },
      {
        target: "“Nibbles is missing!” I shout, and my whole family rushes into the living room.",
        jumbled: ["missing!”", "living", "shout,", "“Nibbles", "and", "I", "rushes", "whole", "into", "my", "is", "the", "room.", "family"],
      },
      {
        target: "We search under the couch, behind the curtains, and inside every corner of the room.",
        jumbled: ["every", "the", "couch,", "under", "curtains,", "search", "We", "the", "and", "the", "behind", "inside", "corner", "of", "room."],
      },
      {
        target: "I feel terrible, worrying that I forgot to close it properly the night before.",
        jumbled: ["I", "worrying", "I", "properly", "night", "to", "it", "the", "terrible,", "forgot", "feel", "close", "before.", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you lost something important.",
    mySentenceExample: "I felt worried when I lost my house key last week.",
  },
  {
    number: 7,
    title: "Found Under the Couch",
    image: null,
    imageNote: "Leo lying on his stomach, reaching under the couch and gently pulling out a slightly dusty but happy Nibbles.",
    story:
      "After ten worried minutes, my sister spots two small ears peeking out from under the couch. “I found her, Leo!” she yells excitedly. I lie down on my stomach and reach carefully underneath. Nibbles is sitting there quietly, a little dusty but completely unharmed. I gently scoop her up and hold her close to my chest, feeling my heart slow down with relief. “You scared us so much,” I whisper to her softly. Everyone in my family cheers and hugs each other, relieved that our small adventure ended happily.",
    questions: [
      { text: "Who spots Nibbles first?", answer: "Leo's sister." },
      { text: "Where is Nibbles hiding?", answer: "Under the couch." },
      { text: "How does Leo feel when he finds her?", answer: "Relieved." },
    ],
    trueFalse: [
      { text: "Leo's sister spots Nibbles first.", answer: true },
      { text: "Nibbles is hurt when they find her.", answer: false },
      { text: "Leo feels relieved when he finds Nibbles.", answer: true },
    ],
    buildSentence: [
      {
        target: "My sister spots two small ears peeking out from under the couch.",
        jumbled: ["couch.", "the", "sister", "from", "ears", "under", "peeking", "spots", "two", "small", "out", "My"],
      },
      {
        target: "“I found her, Leo!” she yells excitedly.",
        jumbled: ["excitedly.", "found", "she", "Leo!”", "yells", "her,", "“I"],
      },
      {
        target: "Nibbles is sitting there quietly, a little dusty but completely unharmed.",
        jumbled: ["dusty", "sitting", "there", "Nibbles", "but", "completely", "a", "little", "is", "unharmed.", "quietly,"],
      },
      {
        target: "I gently scoop her up and hold her close to my chest, feeling my heart slow down with relief.",
        jumbled: ["I", "down", "hold", "my", "her", "close", "and", "feeling", "scoop", "slow", "gently", "to", "heart", "my", "her", "chest,", "with", "relief.", "up"],
      },
      {
        target: "Everyone in my family cheers and hugs each other, relieved that our small adventure ended happily.",
        jumbled: ["Everyone", "each", "family", "ended", "our", "and", "that", "relieved", "small", "hugs", "other,", "cheers", "happily.", "in", "adventure", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt relieved.",
    mySentenceExample: "I felt relieved when I found my missing shoe under my bed.",
  },
  {
    number: 8,
    title: "A Safer Cage",
    image: null,
    imageNote: "Dad and Leo kneeling beside the rabbit cage, fixing a small metal latch together with a screwdriver, Nibbles watching calmly nearby.",
    story:
      "That afternoon, Dad and I look closely at Nibbles' cage door together. “The latch is a little loose. That's probably why it opened,” Dad explains. We find a small screwdriver and tighten the latch until it clicks firmly shut. “Now let's test it, Leo,” Dad says, and we check the door three times to make sure it stays closed. “Being responsible means fixing problems, not just feeling bad about them,” Dad tells me kindly. I feel proud that we solved the problem together, and I know Nibbles will be much safer for the rest of the weekend.",
    questions: [
      { text: "What is wrong with the cage door?", answer: "The latch is loose." },
      { text: "What do Leo and Dad use to fix it?", answer: "A small screwdriver." },
      { text: "What does Dad say about being responsible?", answer: "That it means fixing problems, not just feeling bad about them." },
    ],
    trueFalse: [
      { text: "The latch on the cage is a little loose.", answer: true },
      { text: "Dad says being responsible means only feeling bad.", answer: false },
      { text: "Leo feels proud that they fixed the problem.", answer: true },
    ],
    buildSentence: [
      {
        target: "That afternoon, Dad and I look closely at Nibbles' cage door together.",
        jumbled: ["and", "I", "door", "closely", "That", "afternoon,", "at", "Nibbles'", "cage", "look", "Dad", "together."],
      },
      {
        target: "“The latch is a little loose. That's probably why it opened,” Dad explains.",
        jumbled: ["is", "opened,”", "why", "it", "explains.", "little", "a", "latch", "loose.", "probably", "That's", "Dad", "“The"],
      },
      {
        target: "We find a small screwdriver and tighten the latch until it clicks firmly shut.",
        jumbled: ["until", "a", "find", "clicks", "shut.", "screwdriver", "the", "small", "tighten", "and", "firmly", "it", "We", "latch"],
      },
      {
        target: "“Now let's test it, Leo,” Dad says, and we check the door three times to make sure it stays closed.",
        jumbled: ["door", "test", "stays", "make", "Leo,”", "closed.", "it,", "we", "Dad", "the", "let's", "check", "says,", "times", "sure", "three", "and", "it", "to", "“Now"],
      },
      {
        target: "I feel proud that we solved the problem together, and I know Nibbles will be much safer for the rest of the weekend.",
        jumbled: ["weekend.", "the", "we", "be", "I", "the", "know", "the", "feel", "solved", "of", "that", "Nibbles", "proud", "and", "problem", "will", "much", "safer", "together,", "rest", "I", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a problem you fixed with help from someone.",
    mySentenceExample: "I fixed my broken toy with help from my uncle.",
  },
  {
    number: 9,
    title: "Back to School",
    image: null,
    imageNote: "Leo carrying the cage into the classroom on Monday morning, Zoe and other classmates gathering around excitedly to hear his story.",
    story:
      "On Monday morning, I carefully carry Nibbles back to the classroom. Zoe and several other classmates gather around immediately, curious about the weekend. “Did anything exciting happen, Leo?” Zoe asks. I take a deep breath and tell them the whole story, from the escape to finding her under the couch. “That sounds so scary!” one classmate says, eyes wide. I explain how Dad and I fixed the latch afterward so it would never happen again. Ms. Bailey listens to my story too, nodding thoughtfully as I finish explaining everything that happened over the weekend.",
    questions: [
      { text: "What does Leo do on Monday morning?", answer: "Carries Nibbles back to the classroom." },
      { text: "What does Zoe ask him?", answer: "Did anything exciting happen?" },
      { text: "Who else listens to Leo's story?", answer: "Ms. Bailey." },
    ],
    trueFalse: [
      { text: "Leo carries Nibbles back to the classroom on Monday.", answer: true },
      { text: "No one is curious about Leo's weekend.", answer: false },
      { text: "Ms. Bailey listens to the story too.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Monday morning, I carefully carry Nibbles back to the classroom.",
        jumbled: ["Nibbles", "morning,", "carry", "carefully", "classroom.", "the", "On", "Monday", "back", "I", "to"],
      },
      {
        target: "Zoe and several other classmates gather around immediately, curious about the weekend.",
        jumbled: ["around", "several", "other", "the", "and", "about", "classmates", "immediately,", "weekend.", "curious", "Zoe", "gather"],
      },
      {
        target: "I take a deep breath and tell them the whole story, from the escape to finding her under the couch.",
        jumbled: ["finding", "tell", "deep", "from", "I", "them", "breath", "the", "a", "couch.", "escape", "the", "the", "and", "whole", "her", "under", "to", "story,", "take"],
      },
      {
        target: "“That sounds so scary!” one classmate says, eyes wide.",
        jumbled: ["scary!”", "“That", "says,", "one", "classmate", "sounds", "eyes", "wide.", "so"],
      },
      {
        target: "Ms. Bailey listens to my story too, nodding thoughtfully as I finish explaining everything that happened over the weekend.",
        jumbled: ["everything", "Bailey", "I", "explaining", "that", "happened", "my", "the", "nodding", "Ms.", "as", "to", "too,", "over", "story", "finish", "thoughtfully", "weekend.", "listens"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a story you told your friends recently.",
    mySentenceExample: "I told my friends the story about my trip to the beach.",
  },
  {
    number: 10,
    title: "Class Hero",
    image: null,
    imageNote: "Ms. Bailey smiling and clapping in front of the class as Leo stands proudly beside Nibbles' cage, classmates clapping too.",
    story:
      "After hearing my whole story, Ms. Bailey stands up in front of the class. “Leo handled a difficult situation with real responsibility,” she announces. “He stayed calm, found Nibbles safely, and even fixed the problem so it won't happen again.” The whole class claps, and I feel my cheeks turn a little pink from happiness. Zoe leans over and whispers, “You're basically a class hero now!” I laugh, but secretly I feel very proud of myself. I already hope Ms. Bailey picks me for pet duty again very soon, because now I feel ready for anything.",
    questions: [
      { text: "What does Ms. Bailey say about Leo?", answer: "That he handled a difficult situation with real responsibility." },
      { text: "How does the class react?", answer: "They clap." },
      { text: "How does Leo feel by the end of the story?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Ms. Bailey says Leo handled the situation responsibly.", answer: true },
      { text: "The class stays silent and does not clap.", answer: false },
      { text: "Leo feels proud of himself by the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Bailey stands up in front of the class.",
        jumbled: ["Bailey", "Ms.", "class.", "up", "the", "stands", "front", "in", "of"],
      },
      {
        target: "“Leo handled a difficult situation with real responsibility,” she announces.",
        jumbled: ["responsibility,”", "a", "handled", "situation", "announces.", "she", "with", "difficult", "“Leo", "real"],
      },
      {
        target: "“He stayed calm, found Nibbles safely, and even fixed the problem so it won't happen again.”",
        jumbled: ["won't", "the", "again.”", "so", "happen", "“He", "found", "Nibbles", "calm,", "it", "fixed", "stayed", "even", "safely,", "and", "problem"],
      },
      {
        target: "Zoe leans over and whispers, “You're basically a class hero now!”",
        jumbled: ["over", "hero", "basically", "leans", "whispers,", "class", "and", "Zoe", "a", "“You're", "now!”"],
      },
      {
        target: "I already hope Ms. Bailey picks me for pet duty again very soon, because now I feel ready for anything.",
        jumbled: ["feel", "duty", "ready", "pet", "I", "picks", "me", "for", "again", "Ms.", "because", "anything.", "already", "I", "soon,", "now", "for", "hope", "Bailey", "very"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt proud of yourself.",
    mySentenceExample: "I felt proud of myself when I finished my science project.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
