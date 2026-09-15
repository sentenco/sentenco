// A1 Kids digital storybook, Book 14: "A Week with Grandma"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js.
// Second book in the Kids age track. Same simplified vocabulary/sentence
// length and 3+3 True/False and Build-a-Sentence pattern as Book 13.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook14/cover.jpg";

export const STORYBOOK_TITLE = "A Week with Grandma";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Noah and Grandma standing together in her sunny garden, both smiling, a small watering can in Noah's hand and yellow flowers all around them.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Noah", role: "The narrator, a young boy", look: "Short dark hair, striped shirt, curious and cheerful expression." },
  { name: "Grandma", role: "Noah's grandmother", look: "Silver hair in a bun, floral apron, warm and gentle smile." },
  { name: "Grandpa", role: "Noah's grandfather, appears in Chapter 7", look: "White hair, checked vest, kind and playful eyes." },
  { name: "Ruby", role: "Grandma's neighbor, a girl Noah's age, appears in Chapter 8", look: "Curly red hair, green dress, energetic and friendly." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Arriving at Grandma's House",
    image: null,
    imageNote: "Noah stepping out of the car with his small bag, Grandma waving from the front door of a cozy house with flowers along the path.",
    story:
      "Today, Mom drives me to Grandma's house for a whole week. I bring my small bag with my clothes and my favorite toy. Grandma waits at the door and waves with a big smile. “Welcome, Noah!” she says, and she gives me a warm hug. Her house smells like fresh bread and flowers. I see my old room with the soft blue blanket. I put my bag on the bed and look outside the window. I see a big green garden with yellow flowers. I feel happy and excited for my week with Grandma.",
    questions: [
      { text: "Where does Mom drive Noah?", answer: "To Grandma's house." },
      { text: "What does Grandma's house smell like?", answer: "Fresh bread and flowers." },
      { text: "What does Noah see outside the window?", answer: "A big green garden with yellow flowers." },
    ],
    trueFalse: [
      { text: "Noah stays with Grandma for a week.", answer: true },
      { text: "Grandma is angry when Noah arrives.", answer: false },
      { text: "Noah sees a garden outside the window.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today, Mom drives me to Grandma's house for a whole week.",
        jumbled: ["Mom", "week.", "whole", "to", "house", "me", "Today,", "for", "a", "Grandma's", "drives"],
      },
      {
        target: "I bring my small bag with my clothes and my favorite toy.",
        jumbled: ["bag", "bring", "toy.", "my", "favorite", "my", "small", "clothes", "my", "with", "I", "and"],
      },
      {
        target: "“Welcome, Noah!” she says, and she gives me a warm hug.",
        jumbled: ["gives", "me", "Noah!”", "a", "“Welcome,", "she", "and", "warm", "hug.", "says,", "she"],
      },
      {
        target: "I put my bag on the bed and look outside the window.",
        jumbled: ["bed", "my", "window.", "I", "on", "the", "and", "look", "the", "bag", "put", "outside"],
      },
      {
        target: "I feel happy and excited for my week with Grandma.",
        jumbled: ["I", "with", "feel", "excited", "and", "happy", "Grandma.", "week", "my", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about visiting a family member.",
    mySentenceExample: "I visit my grandma on weekends.",
  },
  {
    number: 2,
    title: "Grandma's Garden",
    image: null,
    imageNote: "Grandma in a sun hat and green gloves showing Noah a small tomato plant, a watering can nearby, roses and sunflowers in the background.",
    story:
      "In the morning, Grandma takes me to see her garden. She wears a big sun hat and green gloves. “Come, Noah, let's water the flowers,” she says. I hold the small watering can carefully. We water the red roses and the yellow sunflowers. Grandma shows me a small green tomato on a plant. “It will be red and ready soon,” she says. I dig in the soft dirt and find a tiny worm. Grandma laughs and says worms help the garden grow. I love spending the morning in Grandma's garden.",
    questions: [
      { text: "What does Grandma wear in the garden?", answer: "A big sun hat and green gloves." },
      { text: "What do they water?", answer: "The red roses and yellow sunflowers." },
      { text: "What does Noah find in the dirt?", answer: "A tiny worm." },
    ],
    trueFalse: [
      { text: "Grandma wears a sun hat.", answer: true },
      { text: "They water the flowers with juice.", answer: false },
      { text: "Noah finds a worm in the dirt.", answer: true },
    ],
    buildSentence: [
      {
        target: "In the morning, Grandma takes me to see her garden.",
        jumbled: ["takes", "me", "Grandma", "her", "to", "garden.", "see", "In", "morning,", "the"],
      },
      {
        target: "“Come, Noah, let's water the flowers,” she says.",
        jumbled: ["Noah,", "the", "flowers,”", "says.", "she", "let's", "“Come,", "water"],
      },
      {
        target: "Grandma shows me a small green tomato on a plant.",
        jumbled: ["a", "me", "on", "tomato", "Grandma", "plant.", "green", "shows", "small", "a"],
      },
      {
        target: "I dig in the soft dirt and find a tiny worm.",
        jumbled: ["and", "soft", "a", "tiny", "dirt", "in", "worm.", "find", "dig", "I", "the"],
      },
      {
        target: "Grandma laughs and says worms help the garden grow.",
        jumbled: ["grow.", "garden", "and", "Grandma", "laughs", "worms", "says", "help", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a garden or plants.",
    mySentenceExample: "I like to water the flowers.",
  },
  {
    number: 3,
    title: "Baking Cookies Together",
    image: null,
    imageNote: "Noah wearing a small apron stirring a mixing bowl on the kitchen counter, Grandma rolling cookie dough into balls beside him, a tray nearby.",
    story:
      "This afternoon, Grandma and I bake cookies in her warm kitchen. She ties a small apron around my waist. “First, we mix the flour and sugar, Noah,” Grandma says. I stir the bowl slowly and carefully. Grandma helps me roll the dough into small balls. We put the cookies on a tray and place them in the oven. Soon, the kitchen smells sweet and warm. When the cookies are ready, Grandma lets me eat one first. The cookie is soft, warm, and delicious. Baking with Grandma is one of my favorite things to do.",
    questions: [
      { text: "What do they bake?", answer: "Cookies." },
      { text: "What does Noah do to the dough?", answer: "Rolls it into small balls." },
      { text: "How does the cookie taste?", answer: "Soft, warm, and delicious." },
    ],
    trueFalse: [
      { text: "Grandma and Noah bake cookies.", answer: true },
      { text: "Noah rolls the dough into small balls.", answer: true },
      { text: "The cookie tastes sour.", answer: false },
    ],
    buildSentence: [
      {
        target: "This afternoon, Grandma and I bake cookies in her warm kitchen.",
        jumbled: ["Grandma", "This", "afternoon,", "cookies", "her", "in", "warm", "kitchen.", "and", "bake", "I"],
      },
      {
        target: "“First, we mix the flour and sugar, Noah,” Grandma says.",
        jumbled: ["Noah,”", "says.", "and", "flour", "mix", "“First,", "the", "Grandma", "we", "sugar,"],
      },
      {
        target: "We put the cookies on a tray and place them in the oven.",
        jumbled: ["and", "oven.", "them", "tray", "place", "a", "in", "cookies", "on", "We", "the", "the", "put"],
      },
      {
        target: "Grandma lets me eat one first.",
        jumbled: ["me", "eat", "first.", "Grandma", "one", "lets"],
      },
      {
        target: "Baking with Grandma is one of my favorite things to do.",
        jumbled: ["of", "with", "one", "things", "favorite", "do.", "to", "my", "is", "Grandma", "Baking"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about baking or cooking.",
    mySentenceExample: "I like to bake cookies with my family.",
  },
  {
    number: 4,
    title: "A Rainy Afternoon Story",
    image: null,
    imageNote: "Noah sitting close to Grandma in a big armchair by a rainy window, Grandma mid-story with a warm expression, soft lamp light.",
    story:
      "Outside, the rain falls softly on Grandma's window. We cannot play in the garden today. Grandma sits in her big chair and pats the seat next to her. “Come, Noah, I will tell you a story,” she says. I sit close to her and listen carefully. Grandma tells me a story about when she was a little girl. She talks about her old dog and her favorite tree. I ask her many questions, and she smiles at each one. The rain keeps falling, but I do not feel bored at all. Grandma's stories are the best part of a rainy day.",
    questions: [
      { text: "Why can't they play outside?", answer: "Because it is raining." },
      { text: "What does Grandma tell Noah?", answer: "A story about when she was a little girl." },
      { text: "How does Noah feel during the story?", answer: "Not bored at all." },
    ],
    trueFalse: [
      { text: "It is sunny outside.", answer: false },
      { text: "Grandma tells Noah a story.", answer: true },
      { text: "Noah feels bored during the story.", answer: false },
    ],
    buildSentence: [
      {
        target: "Outside, the rain falls softly on Grandma's window.",
        jumbled: ["on", "Outside,", "rain", "window.", "Grandma's", "the", "falls", "softly"],
      },
      {
        target: "Grandma sits in her big chair and pats the seat next to her.",
        jumbled: ["chair", "her.", "seat", "in", "sits", "to", "the", "her", "big", "next", "pats", "and", "Grandma"],
      },
      {
        target: "Grandma tells me a story about when she was a little girl.",
        jumbled: ["girl.", "a", "she", "a", "when", "Grandma", "was", "story", "tells", "little", "me", "about"],
      },
      {
        target: "I ask her many questions, and she smiles at each one.",
        jumbled: ["her", "and", "each", "ask", "she", "questions,", "one.", "smiles", "I", "at", "many"],
      },
      {
        target: "The rain keeps falling, but I do not feel bored at all.",
        jumbled: ["bored", "rain", "all.", "falling,", "feel", "do", "The", "but", "keeps", "I", "not", "at"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a rainy day.",
    mySentenceExample: "I stay inside when it rains.",
  },
  {
    number: 5,
    title: "Feeding the Birds",
    image: null,
    imageNote: "Noah and Grandma standing very still near a bird feeder in the early morning garden, small birds landing nearby, a red bird singing on a fence.",
    story:
      "Early in the morning, Grandma wakes me up quietly. “Come, Noah, it's time to feed the birds,” she whispers. We walk outside with a small bag of seeds. Grandma shows me how to fill the little bird feeder. I sprinkle some seeds on the ground too. Soon, small birds land near us and start to eat. A bright red bird sits on the fence and sings. I stand very still so I do not scare them away. Grandma smiles and says the birds visit every morning. Feeding the birds with Grandma makes me feel calm and happy.",
    questions: [
      { text: "What time do they feed the birds?", answer: "Early in the morning." },
      { text: "What does Noah fill?", answer: "The little bird feeder." },
      { text: "What color is the bird that sings?", answer: "Red." },
    ],
    trueFalse: [
      { text: "They feed the birds in the morning.", answer: true },
      { text: "Noah fills the bird feeder with rocks.", answer: false },
      { text: "A red bird sings on the fence.", answer: true },
    ],
    buildSentence: [
      {
        target: "“Come, Noah, it's time to feed the birds,” she whispers.",
        jumbled: ["“Come,", "to", "feed", "she", "whispers.", "it's", "birds,”", "Noah,", "time", "the"],
      },
      {
        target: "Grandma shows me how to fill the little bird feeder.",
        jumbled: ["bird", "me", "little", "how", "shows", "the", "fill", "to", "Grandma", "feeder."],
      },
      {
        target: "Soon, small birds land near us and start to eat.",
        jumbled: ["eat.", "us", "birds", "small", "near", "land", "Soon,", "start", "and", "to"],
      },
      {
        target: "I stand very still so I do not scare them away.",
        jumbled: ["so", "do", "I", "scare", "very", "them", "not", "still", "stand", "I", "away."],
      },
      {
        target: "Feeding the birds with Grandma makes me feel calm and happy.",
        jumbled: ["and", "me", "calm", "birds", "feel", "happy.", "makes", "Feeding", "with", "Grandma", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about animals or birds.",
    mySentenceExample: "I like to watch birds in the morning.",
  },
  {
    number: 6,
    title: "A Small Accident",
    image: null,
    imageNote: "Noah looking worried beside a small spilled cup of juice on the kitchen floor, Grandma kneeling beside him with a gentle, reassuring smile and a towel.",
    story:
      "Today, I help Grandma carry a cup of juice to the table. My foot slips, and the juice spills on the floor! I feel worried and my face turns red. “It's okay, Noah, accidents happen,” Grandma says softly. She does not get angry at all. We get a towel together and clean up the mess. Grandma pours me a new cup of juice with a smile. I say, “I'm sorry, Grandma.” She hugs me and says, “You are a good helper.” I feel better because Grandma is so kind and patient.",
    questions: [
      { text: "What does Noah spill?", answer: "A cup of juice." },
      { text: "How does Grandma react?", answer: "She stays calm and says accidents happen." },
      { text: "How does Noah feel at the end?", answer: "Better." },
    ],
    trueFalse: [
      { text: "Noah spills juice on the floor.", answer: true },
      { text: "Grandma gets very angry.", answer: false },
      { text: "Noah feels better at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today, I help Grandma carry a cup of juice to the table.",
        jumbled: ["cup", "to", "a", "I", "carry", "juice", "of", "help", "Grandma", "Today,", "table.", "the"],
      },
      {
        target: "I feel worried and my face turns red.",
        jumbled: ["and", "turns", "feel", "my", "red.", "worried", "face", "I"],
      },
      {
        target: "We get a towel together and clean up the mess.",
        jumbled: ["clean", "the", "a", "mess.", "and", "get", "up", "towel", "together", "We"],
      },
      {
        target: "Grandma pours me a new cup of juice with a smile.",
        jumbled: ["a", "of", "a", "pours", "new", "me", "smile.", "Grandma", "with", "cup", "juice"],
      },
      {
        target: "She hugs me and says, “You are a good helper.”",
        jumbled: ["helper.”", "me", "good", "says,", "and", "She", "hugs", "“You", "a", "are"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small accident.",
    mySentenceExample: "I spill my milk, but it is okay.",
  },
  {
    number: 7,
    title: "Grandpa's Old Photos",
    image: null,
    imageNote: "Noah and Grandpa sitting together on a soft sofa in the evening, a big open box of old photos between them, Grandpa laughing at a photo.",
    story:
      "In the evening, Grandpa sits with me on the soft sofa. He opens a big box full of old photos. “This is me when I was young,” Grandpa says with a laugh. I see photos of Grandma and Grandpa when they were kids. One photo shows them standing next to an old car. Grandpa tells me funny stories about each picture. I laugh when I see a photo of Grandpa with messy hair. He says, “Time goes fast, Noah, so enjoy every day.” I look at the old photos and feel close to my family. This evening with Grandpa feels very special.",
    questions: [
      { text: "What does Grandpa open?", answer: "A big box of old photos." },
      { text: "What do the photos show?", answer: "Grandma and Grandpa when they were kids." },
      { text: "What does Grandpa tell Noah?", answer: "Time goes fast, so enjoy every day." },
    ],
    trueFalse: [
      { text: "Grandpa opens a box of old photos.", answer: true },
      { text: "The photos are all empty.", answer: false },
      { text: "Grandpa says to enjoy every day.", answer: true },
    ],
    buildSentence: [
      {
        target: "In the evening, Grandpa sits with me on the soft sofa.",
        jumbled: ["Grandpa", "In", "on", "soft", "with", "the", "sits", "sofa.", "me", "the", "evening,"],
      },
      {
        target: "“This is me when I was young,” Grandpa says with a laugh.",
        jumbled: ["laugh.", "me", "says", "“This", "when", "a", "Grandpa", "was", "young,”", "is", "with", "I"],
      },
      {
        target: "One photo shows them standing next to an old car.",
        jumbled: ["to", "old", "standing", "One", "an", "them", "next", "car.", "shows", "photo"],
      },
      {
        target: "I laugh when I see a photo of Grandpa with messy hair.",
        jumbled: ["laugh", "with", "Grandpa", "see", "of", "when", "a", "hair.", "messy", "I", "photo", "I"],
      },
      {
        target: "I look at the old photos and feel close to my family.",
        jumbled: ["I", "my", "family.", "at", "old", "feel", "close", "look", "and", "photos", "to", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your family.",
    mySentenceExample: "I love spending time with my family.",
  },
  {
    number: 8,
    title: "Playing with Ruby Next Door",
    image: null,
    imageNote: "Noah and Ruby playing with a jump rope under a big tree in Grandma's garden, Grandma watching happily from the porch with two glasses of lemonade.",
    story:
      "In the afternoon, Grandma's neighbor Ruby comes over to play. Ruby is my age, and she has a big, friendly smile. We play in the garden and run around the big tree. Ruby brings her jump rope, and we take turns jumping. I count while Ruby jumps, and then she counts for me. We laugh a lot and share a cold glass of lemonade. Grandma watches us from the porch and smiles happily. Ruby says, “You are fun to play with, Noah!” I feel happy to have a new friend during my week with Grandma.",
    questions: [
      { text: "Who comes over to play?", answer: "Grandma's neighbor Ruby." },
      { text: "What do they play with?", answer: "A jump rope." },
      { text: "What does Ruby say to Noah?", answer: "You are fun to play with, Noah!" },
    ],
    trueFalse: [
      { text: "Ruby comes over to play.", answer: true },
      { text: "They play with a jump rope.", answer: true },
      { text: "Ruby says Noah is boring.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the afternoon, Grandma's neighbor Ruby comes over to play.",
        jumbled: ["over", "afternoon,", "Ruby", "Grandma's", "comes", "to", "the", "In", "neighbor", "play."],
      },
      {
        target: "Ruby is my age, and she has a big, friendly smile.",
        jumbled: ["is", "big,", "and", "she", "smile.", "Ruby", "friendly", "my", "age,", "has", "a"],
      },
      {
        target: "I count while Ruby jumps, and then she counts for me.",
        jumbled: ["me.", "while", "for", "she", "Ruby", "then", "I", "count", "jumps,", "and", "counts"],
      },
      {
        target: "We laugh a lot and share a cold glass of lemonade.",
        jumbled: ["We", "cold", "laugh", "of", "lemonade.", "a", "glass", "share", "and", "lot", "a"],
      },
      {
        target: "I feel happy to have a new friend during my week with Grandma.",
        jumbled: ["a", "to", "friend", "have", "Grandma.", "new", "happy", "with", "during", "I", "my", "week", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a friend you play with.",
    mySentenceExample: "I play with my friend after school.",
  },
  {
    number: 9,
    title: "A Trip to the Farmers Market",
    image: null,
    imageNote: "Noah and Grandma walking through a colorful outdoor market, Noah holding a red apple, stalls of fruit, vegetables, and flowers around them.",
    story:
      "On Saturday, Grandma takes me to the farmers market in town. The market is full of colorful fruits and vegetables. We see red apples, orange carrots, and green lettuce. “Choose a fruit, Noah,” Grandma says. I pick a juicy, red apple from a big basket. A kind man sells us fresh bread that smells amazing. Grandma buys flowers for the kitchen table too. We carry our bags and walk home together slowly. I feel proud because I helped Grandma choose good food. The farmers market is a fun place to visit.",
    questions: [
      { text: "Where does Grandma take Noah?", answer: "The farmers market." },
      { text: "What fruit does Noah choose?", answer: "A juicy, red apple." },
      { text: "What does Grandma buy for the kitchen table?", answer: "Flowers." },
    ],
    trueFalse: [
      { text: "They go to the farmers market.", answer: true },
      { text: "Noah chooses a banana.", answer: false },
      { text: "Grandma buys flowers for the table.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Saturday, Grandma takes me to the farmers market in town.",
        jumbled: ["to", "Grandma", "On", "market", "the", "Saturday,", "town.", "takes", "me", "in", "farmers"],
      },
      {
        target: "We see red apples, orange carrots, and green lettuce.",
        jumbled: ["orange", "see", "green", "We", "apples,", "lettuce.", "carrots,", "and", "red"],
      },
      {
        target: "I pick a juicy, red apple from a big basket.",
        jumbled: ["pick", "I", "red", "juicy,", "apple", "big", "basket.", "a", "a", "from"],
      },
      {
        target: "We carry our bags and walk home together slowly.",
        jumbled: ["our", "and", "We", "slowly.", "home", "carry", "walk", "bags", "together"],
      },
      {
        target: "I feel proud because I helped Grandma choose good food.",
        jumbled: ["proud", "feel", "I", "food.", "Grandma", "helped", "because", "good", "choose", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about shopping for food.",
    mySentenceExample: "I like to buy fresh fruit.",
  },
  {
    number: 10,
    title: "Saying Goodbye",
    image: null,
    imageNote: "Noah hugging Grandma tightly on the front porch with his packed bag beside him, Mom's car waiting in the driveway, a small bag of cookies in Noah's hand.",
    story:
      "Today is my last day at Grandma's house. Mom will come soon to take me home. I help Grandma pack my bag and fold my blue blanket. I think about the garden, the cookies, and the birds we fed. Grandma hugs me tightly and says, “I loved having you here, Noah.” I feel a little sad, but also happy about my fun week. “I will visit again soon, Grandma,” I promise. She smiles and gives me a small bag of cookies for the trip. When Mom arrives, I wave goodbye to Grandma's house. My week with Grandma was the best week ever.",
    questions: [
      { text: "Who is coming to take Noah home?", answer: "Mom." },
      { text: "What does Grandma give Noah for the trip?", answer: "A small bag of cookies." },
      { text: "How does Noah describe his week?", answer: "The best week ever." },
    ],
    trueFalse: [
      { text: "Mom comes to take Noah home.", answer: true },
      { text: "Grandma gives Noah a bag of cookies.", answer: true },
      { text: "Noah says the week was boring.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today is my last day at Grandma's house.",
        jumbled: ["Today", "day", "is", "last", "house.", "at", "Grandma's", "my"],
      },
      {
        target: "I think about the garden, the cookies, and the birds we fed.",
        jumbled: ["cookies,", "and", "think", "I", "birds", "the", "garden,", "about", "fed.", "the", "the", "we"],
      },
      {
        target: "Grandma hugs me tightly and says, “I loved having you here, Noah.”",
        jumbled: ["and", "me", "tightly", "loved", "says,", "here,", "Grandma", "hugs", "having", "Noah.”", "“I", "you"],
      },
      {
        target: "She smiles and gives me a small bag of cookies for the trip.",
        jumbled: ["me", "smiles", "a", "trip.", "small", "of", "She", "cookies", "and", "for", "gives", "the", "bag"],
      },
      {
        target: "I wave goodbye to Grandma's house.",
        jumbled: ["house.", "goodbye", "wave", "to", "I", "Grandma's"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about saying goodbye to someone.",
    mySentenceExample: "I say goodbye and wave to my friend.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
