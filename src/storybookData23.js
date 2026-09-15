// A2 Kids digital storybook, Book 23: "My First Sleepover"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js
// through storybookData20.js. First book in a new A2 Kids batch (Books
// 23-30) -- longer sentences, more connectors (because/so/when/after), and
// past continuous / comparative forms than the A1 Kids books, but still
// simple, everyday topics a child would recognize. Same Kids-track 3+3
// True/False and Build-a-Sentence pattern (not 5, unlike Teens/Adults).
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook23/cover.jpg";

export const STORYBOOK_TITLE = "My First Sleepover";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Mia and Chloe sitting inside a cozy blanket fort in Chloe's living room, giggling with flashlights, a small teddy bear peeking out of Mia's backpack nearby.";

export const CHARACTERS = [
  { name: "Mia", role: "The narrator, a young girl", look: "Brown hair in two braids, yellow pajamas, a curious and a little nervous expression at first." },
  { name: "Chloe", role: "Mia's best friend", look: "Short curly hair, purple pajamas, cheerful and confident." },
  { name: "Mrs. Park", role: "Chloe's mother", look: "Warm smile, apron, kind and welcoming." },
  { name: "Mom", role: "Mia's mother", look: "Ponytail, soft cardigan, caring and encouraging." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Invitation",
    image: null,
    imageNote: "Chloe handing Mia a colorful invitation card at school, both girls smiling, Mia holding it with excitement.",
    story:
      "On Friday, Chloe gives me a small card at school. It says, “Sleepover at my house on Saturday!” I feel excited, but I am also a little nervous because I have never slept at a friend's house before. “Will you come, Mia?” Chloe asks, smiling. “Yes, of course!” I say quickly. When I get home, I ask Mom right away. She says yes, and I jump up and down happily. That night, I keep thinking about what a sleepover is really like. I am excited, but a small part of me is worried too.",
    questions: [
      { text: "What does Chloe give Mia at school?", answer: "A small invitation card." },
      { text: "How does Mia feel about the sleepover?", answer: "Excited but a little nervous." },
      { text: "Who does Mia ask when she gets home?", answer: "Mom." },
    ],
    trueFalse: [
      { text: "Chloe invites Mia to a sleepover.", answer: true },
      { text: "Mia has slept at a friend's house many times before.", answer: false },
      { text: "Mom says no to the sleepover.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Friday, Chloe gives me a small card at school.",
        jumbled: ["a", "at", "card", "On", "gives", "Friday,", "school.", "small", "Chloe", "me"],
      },
      {
        target: "I feel excited, but I am also a little nervous because I have never slept at a friend's house before.",
        jumbled: ["never", "but", "a", "have", "nervous", "friend's", "little", "also", "I", "excited,", "at", "am", "house", "before.", "feel", "I", "because", "slept", "a", "I"],
      },
      {
        target: "“Will you come, Mia?” Chloe asks, smiling.",
        jumbled: ["“Will", "asks,", "you", "Mia?”", "smiling.", "come,", "Chloe"],
      },
      {
        target: "She says yes, and I jump up and down happily.",
        jumbled: ["yes,", "happily.", "and", "I", "down", "and", "says", "She", "up", "jump"],
      },
      {
        target: "That night, I keep thinking about what a sleepover is really like.",
        jumbled: ["thinking", "I", "keep", "a", "like.", "what", "That", "is", "about", "night,", "really", "sleepover"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt excited and nervous at the same time.",
    mySentenceExample: "I felt excited and nervous before my first day at a new school.",
  },
  {
    number: 2,
    title: "Packing My Bag",
    image: null,
    imageNote: "Mia sitting on her bedroom floor, packing pajamas and a toothbrush into a backpack, secretly tucking a small teddy bear under her clothes.",
    story:
      "On Saturday morning, I start packing my bag for the sleepover. I fold my favorite pajamas and put in my toothbrush. Then I look at my old teddy bear on the bed. I have slept with him every night since I was small, but I feel shy about bringing him. “What if Chloe thinks I'm a baby?” I ask myself. After thinking for a moment, I decide to pack him quietly at the bottom of my bag, under my clothes, so no one will notice. Mom watches me and smiles. “All packed, Mia?” she asks, but she does not say anything about the bear.",
    questions: [
      { text: "What does Mia pack first?", answer: "Her favorite pajamas and toothbrush." },
      { text: "Why does Mia feel shy about the teddy bear?", answer: "She worries Chloe will think she's a baby." },
      { text: "Where does Mia hide the bear in her bag?", answer: "At the bottom, under her clothes." },
    ],
    trueFalse: [
      { text: "Mia packs her pajamas and toothbrush.", answer: true },
      { text: "Mia decides not to bring her teddy bear at all.", answer: false },
      { text: "Mia hides the bear under her clothes.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Saturday morning, I start packing my bag for the sleepover.",
        jumbled: ["start", "morning,", "bag", "my", "packing", "On", "for", "the", "I", "Saturday", "sleepover."],
      },
      {
        target: "Then I look at my old teddy bear on the bed.",
        jumbled: ["on", "Then", "bed.", "bear", "old", "teddy", "I", "at", "my", "look", "the"],
      },
      {
        target: "I have slept with him every night since I was small, but I feel shy about bringing him.",
        jumbled: ["have", "every", "I", "was", "night", "small,", "but", "slept", "I", "I", "with", "him.", "feel", "bringing", "shy", "about", "him", "since"],
      },
      {
        target: "I decide to pack him quietly at the bottom of my bag, under my clothes, so no one will notice.",
        jumbled: ["bottom", "bag,", "no", "of", "so", "will", "the", "my", "pack", "him", "notice.", "my", "one", "to", "quietly", "decide", "I", "under", "clothes,", "at"],
      },
      {
        target: "“All packed, Mia?” she asks, but she does not say anything about the bear.",
        jumbled: ["say", "asks,", "the", "but", "about", "she", "packed,", "she", "Mia?”", "“All", "anything", "not", "does", "bear."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something special you like to bring with you.",
    mySentenceExample: "I always bring my lucky pencil when I take a test.",
  },
  {
    number: 3,
    title: "Arriving at Chloe's House",
    image: null,
    imageNote: "Mom hugging Mia goodbye on Chloe's doorstep, Mrs. Park waving warmly from the doorway, Mia's car driving away in the background.",
    story:
      "When we arrive at Chloe's house, Mrs. Park opens the door with a big smile. “Welcome, Mia! We are so happy you're here,” she says warmly. Mom gives me a tight hug and says, “Have so much fun. I will pick you up tomorrow morning.” As Mom's car drives away, I feel a small flutter in my stomach. This is the first time I will sleep in a different house without my family. Chloe grabs my hand and says, “Come on, let's go play!” Her excitement makes me smile, and my nervous feeling starts to disappear a little.",
    questions: [
      { text: "Who opens the door when Mia arrives?", answer: "Mrs. Park." },
      { text: "What does Mom say before she leaves?", answer: "Have so much fun, I will pick you up tomorrow morning." },
      { text: "How does Mia feel when the car drives away?", answer: "A small flutter of nervousness." },
    ],
    trueFalse: [
      { text: "Mrs. Park welcomes Mia warmly.", answer: true },
      { text: "Mom stays at Chloe's house for the sleepover.", answer: false },
      { text: "Mia feels completely calm when Mom leaves.", answer: false },
    ],
    buildSentence: [
      {
        target: "Mrs. Park opens the door with a big smile.",
        jumbled: ["Mrs.", "door", "Park", "smile.", "big", "opens", "the", "with", "a"],
      },
      {
        target: "“Welcome, Mia! We are so happy you're here,” she says warmly.",
        jumbled: ["are", "happy", "here,”", "says", "so", "she", "We", "warmly.", "you're", "Mia!", "“Welcome,"],
      },
      {
        target: "Mom gives me a tight hug and says, “Have so much fun. I will pick you up tomorrow morning.”",
        jumbled: ["a", "much", "“Have", "will", "up", "I", "and", "hug", "fun.", "me", "you", "Mom", "tomorrow", "gives", "so", "tight", "morning.”", "says,", "pick"],
      },
      {
        target: "This is the first time I will sleep in a different house without my family.",
        jumbled: ["my", "I", "in", "first", "This", "house", "sleep", "is", "without", "different", "time", "the", "a", "family.", "will"],
      },
      {
        target: "Her excitement makes me smile, and my nervous feeling starts to disappear a little.",
        jumbled: ["feeling", "smile,", "little.", "my", "excitement", "a", "makes", "nervous", "Her", "disappear", "starts", "to", "and", "me"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about saying goodbye to a family member.",
    mySentenceExample: "I waved goodbye to my dad before school started.",
  },
  {
    number: 4,
    title: "Pizza and Movies",
    image: null,
    imageNote: "Mia and Chloe sitting on the couch eating pizza slices and laughing, a cartoon movie playing on the TV in front of them.",
    story:
      "For dinner, Mrs. Park orders a big cheese pizza, and Chloe and I sit on the couch to eat. “This is my favorite kind of night, Mia,” Chloe says, and I agree completely. After dinner, we choose a funny movie about a talking dog. We laugh so hard at one scene that pizza almost falls out of my mouth! By the time the movie ends, I am not thinking about home anymore. I am having more fun than I expected. “This sleepover is already better than I imagined,” I tell Chloe, and she grins proudly, happy that I am enjoying myself.",
    questions: [
      { text: "What do Mia and Chloe eat for dinner?", answer: "Cheese pizza." },
      { text: "What kind of movie do they watch?", answer: "A funny movie about a talking dog." },
      { text: "How does Mia feel by the end of the movie?", answer: "Having more fun than expected -- not thinking about home." },
    ],
    trueFalse: [
      { text: "They eat cheese pizza for dinner.", answer: true },
      { text: "The movie is about a talking cat.", answer: false },
      { text: "Mia is having more fun than she expected.", answer: true },
    ],
    buildSentence: [
      {
        target: "For dinner, Mrs. Park orders a big cheese pizza, and Chloe and I sit on the couch to eat.",
        jumbled: ["Mrs.", "and", "to", "on", "I", "a", "pizza,", "sit", "orders", "couch", "cheese", "Chloe", "the", "eat.", "and", "For", "Park", "big", "dinner,"],
      },
      {
        target: "“This is my favorite kind of night, Mia,” Chloe says, and I agree completely.",
        jumbled: ["and", "says,", "is", "Mia,”", "I", "Chloe", "night,", "completely.", "“This", "agree", "my", "kind", "of", "favorite"],
      },
      {
        target: "We laugh so hard at one scene that pizza almost falls out of my mouth!",
        jumbled: ["my", "pizza", "of", "out", "hard", "We", "almost", "scene", "at", "so", "one", "laugh", "mouth!", "that", "falls"],
      },
      {
        target: "By the time the movie ends, I am not thinking about home anymore.",
        jumbled: ["not", "time", "the", "anymore.", "the", "movie", "thinking", "am", "about", "By", "I", "ends,", "home"],
      },
      {
        target: "“This sleepover is already better than I imagined,” I tell Chloe, and she grins proudly, happy that I am enjoying myself.",
        jumbled: ["am", "happy", "than", "I", "grins", "that", "I", "better", "imagined,”", "Chloe,", "already", "she", "proudly,", "is", "and", "I", "“This", "myself.", "sleepover", "enjoying", "tell"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite kind of movie.",
    mySentenceExample: "My favorite kind of movie is a funny cartoon.",
  },
  {
    number: 5,
    title: "Building a Blanket Fort",
    image: null,
    imageNote: "Chloe and Mia draping blankets over chairs in the living room, building a large fort with flashlights and pillows inside.",
    story:
      "After the movie, Chloe has an amazing idea. “Let's build a blanket fort, Mia!” she says excitedly. We pull blankets off the beds and drape them over chairs and the couch. It takes us almost thirty minutes, but soon we have a huge fort with a soft floor of pillows inside. We crawl in with flashlights and pretend it is a secret castle. “I am the queen, and you are the knight,” Chloe announces, giggling. We invent a whole adventure story together, and I realize this is the most fun I have had in a very long time.",
    questions: [
      { text: "What does Chloe suggest building?", answer: "A blanket fort." },
      { text: "How long does the fort take to build?", answer: "Almost thirty minutes." },
      { text: "What do Mia and Chloe pretend the fort is?", answer: "A secret castle." },
    ],
    trueFalse: [
      { text: "Chloe suggests building a blanket fort.", answer: true },
      { text: "The fort takes only five minutes to build.", answer: false },
      { text: "They pretend the fort is a secret castle.", answer: true },
    ],
    buildSentence: [
      {
        target: "Chloe has an amazing idea.",
        jumbled: ["Chloe", "idea.", "an", "amazing", "has"],
      },
      {
        target: "“Let's build a blanket fort, Mia!” she says excitedly.",
        jumbled: ["build", "says", "“Let's", "Mia!”", "excitedly.", "she", "blanket", "a", "fort,"],
      },
      {
        target: "It takes us almost thirty minutes, but soon we have a huge fort with a soft floor of pillows inside.",
        jumbled: ["huge", "we", "a", "inside.", "almost", "minutes,", "a", "have", "soft", "soon", "thirty", "pillows", "of", "floor", "but", "fort", "It", "takes", "us", "with"],
      },
      {
        target: "We crawl in with flashlights and pretend it is a secret castle.",
        jumbled: ["and", "crawl", "flashlights", "is", "with", "in", "a", "castle.", "We", "pretend", "it", "secret"],
      },
      {
        target: "We invent a whole adventure story together, and I realize this is the most fun I have had in a very long time.",
        jumbled: ["story", "very", "a", "have", "most", "I", "long", "is", "invent", "We", "this", "whole", "the", "a", "had", "adventure", "time.", "I", "and", "realize", "together,", "in", "fun"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something fun you built or made.",
    mySentenceExample: "I built a tall tower out of blocks with my brother.",
  },
  {
    number: 6,
    title: "Missing Home",
    image: null,
    imageNote: "Mia lying awake in a sleeping bag inside the dark fort, quietly hugging her small teddy bear, Chloe already asleep nearby.",
    story:
      "Later that night, Mrs. Park turns off the lights, and Chloe falls asleep quickly inside our fort. I lie awake in my sleeping bag, listening to the quiet house. It sounds different from my own home. Slowly, I start to feel a little sad, and I miss my own bed and my mom's goodnight kiss. Quietly, so no one can hear, I take my teddy bear out of my bag and hold him close. I feel a little silly, but holding him makes me feel calmer. “It's okay, Mia,” I whisper to myself, and I close my eyes and try to think about the fun day we had instead.",
    questions: [
      { text: "What does Chloe do quickly after the lights go off?", answer: "Falls asleep." },
      { text: "Why does Mia start to feel sad?", answer: "Because the house sounds different and she misses her own bed and mom." },
      { text: "What does Mia take out of her bag?", answer: "Her teddy bear." },
    ],
    trueFalse: [
      { text: "Chloe falls asleep quickly.", answer: true },
      { text: "Mia feels completely happy the whole night.", answer: false },
      { text: "Mia quietly takes out her teddy bear.", answer: true },
    ],
    buildSentence: [
      {
        target: "Later that night, Mrs. Park turns off the lights, and Chloe falls asleep quickly inside our fort.",
        jumbled: ["inside", "Park", "off", "fort.", "and", "Mrs.", "that", "turns", "quickly", "our", "lights,", "the", "Later", "falls", "night,", "Chloe", "asleep"],
      },
      {
        target: "I lie awake in my sleeping bag, listening to the quiet house.",
        jumbled: ["listening", "lie", "bag,", "my", "I", "awake", "quiet", "sleeping", "house.", "in", "the", "to"],
      },
      {
        target: "Slowly, I start to feel a little sad, and I miss my own bed and my mom's goodnight kiss.",
        jumbled: ["feel", "I", "bed", "kiss.", "goodnight", "mom's", "start", "I", "to", "sad,", "miss", "my", "a", "and", "Slowly,", "my", "and", "own", "little"],
      },
      {
        target: "Quietly, so no one can hear, I take my teddy bear out of my bag and hold him close.",
        jumbled: ["so", "take", "my", "him", "bear", "of", "teddy", "out", "hear,", "I", "and", "one", "close.", "can", "my", "Quietly,", "no", "hold", "bag"],
      },
      {
        target: "“It's okay, Mia,” I whisper to myself, and I close my eyes and try to think about the fun day we had instead.",
        jumbled: ["my", "I", "fun", "about", "and", "Mia,”", "“It's", "eyes", "the", "close", "try", "think", "to", "and", "day", "whisper", "to", "we", "instead.", "okay,", "had", "I", "myself,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something that helps you feel calm.",
    mySentenceExample: "Listening to soft music helps me feel calm before bed.",
  },
  {
    number: 7,
    title: "Chloe Notices",
    image: null,
    imageNote: "Chloe sitting up in her sleeping bag, whispering kindly to Mia in the dim fort light, both girls smiling softly at each other.",
    story:
      "Suddenly, Chloe sits up and whispers, “Mia, are you okay?” I did not know she was still a little awake. I feel embarrassed, but I decide to tell her the truth. “I miss my mom a little,” I whisper back, holding my bear tighter. Instead of laughing, Chloe smiles kindly and says, “I felt the same way at my first sleepover too.” She shows me a small stuffed rabbit hidden in her own bag, and we both start laughing quietly. Talking about it makes me feel much better, and I realize being a little homesick is completely normal.",
    questions: [
      { text: "What does Chloe ask Mia?", answer: "Are you okay?" },
      { text: "How does Chloe react when Mia tells the truth?", answer: "She smiles kindly and says she felt the same way at her first sleepover." },
      { text: "What does Chloe show Mia?", answer: "Her own small stuffed rabbit hidden in her bag." },
    ],
    trueFalse: [
      { text: "Chloe laughs at Mia for missing her mom.", answer: false },
      { text: "Chloe also felt homesick at her first sleepover.", answer: true },
      { text: "Chloe has a hidden stuffed rabbit too.", answer: true },
    ],
    buildSentence: [
      {
        target: "Suddenly, Chloe sits up and whispers, “Mia, are you okay?”",
        jumbled: ["“Mia,", "are", "and", "whispers,", "sits", "up", "you", "Chloe", "Suddenly,", "okay?”"],
      },
      {
        target: "I did not know she was still a little awake.",
        jumbled: ["a", "did", "know", "not", "awake.", "little", "still", "she", "was", "I"],
      },
      {
        target: "“I miss my mom a little,” I whisper back, holding my bear tighter.",
        jumbled: ["my", "tighter.", "I", "bear", "back,", "miss", "little,”", "a", "my", "“I", "whisper", "mom", "holding"],
      },
      {
        target: "Instead of laughing, Chloe smiles kindly and says, “I felt the same way at my first sleepover too.”",
        jumbled: ["sleepover", "way", "“I", "says,", "at", "smiles", "laughing,", "felt", "same", "Chloe", "too.”", "the", "Instead", "first", "my", "kindly", "and", "of"],
      },
      {
        target: "She shows me a small stuffed rabbit hidden in her own bag, and we both start laughing quietly.",
        jumbled: ["rabbit", "start", "laughing", "stuffed", "She", "shows", "we", "small", "own", "me", "both", "and", "bag,", "her", "a", "quietly.", "hidden", "in"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time a friend helped you feel better.",
    mySentenceExample: "My friend told a joke and helped me feel better when I was sad.",
  },
  {
    number: 8,
    title: "Pancakes in the Morning",
    image: null,
    imageNote: "Mrs. Park flipping star-shaped pancakes in the kitchen while Mia and Chloe sit at the table, sunlight streaming through the window.",
    story:
      "The next morning, delicious smells wake me up. I climb out of the fort and follow the smell to the kitchen. Mrs. Park is making pancakes shaped like little stars! “Good morning, Mia and Chloe,” she says cheerfully. We eat our star pancakes with syrup, and the sunny kitchen feels warm and happy. “Did you sleep well?” Mrs. Park asks. “Yes, mostly,” I say, and Chloe winks at me because she knows our secret. After breakfast, I feel proud that I made it through my first whole night away from home.",
    questions: [
      { text: "What shape are the pancakes?", answer: "Little stars." },
      { text: "Who makes the pancakes?", answer: "Mrs. Park." },
      { text: "How does Mia feel after breakfast?", answer: "Proud she made it through her first night away from home." },
    ],
    trueFalse: [
      { text: "The pancakes are shaped like stars.", answer: true },
      { text: "Chloe's mom makes cereal instead of pancakes.", answer: false },
      { text: "Mia feels proud after breakfast.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next morning, delicious smells wake me up.",
        jumbled: ["me", "The", "morning,", "smells", "up.", "wake", "delicious", "next"],
      },
      {
        target: "I climb out of the fort and follow the smell to the kitchen.",
        jumbled: ["to", "of", "and", "the", "fort", "the", "kitchen.", "smell", "follow", "I", "climb", "the", "out"],
      },
      {
        target: "“Good morning, Mia and Chloe,” she says cheerfully.",
        jumbled: ["“Good", "she", "and", "Chloe,”", "says", "Mia", "morning,", "cheerfully."],
      },
      {
        target: "We eat our star pancakes with syrup, and the sunny kitchen feels warm and happy.",
        jumbled: ["feels", "happy.", "and", "our", "sunny", "kitchen", "star", "pancakes", "with", "syrup,", "and", "the", "We", "warm", "eat"],
      },
      {
        target: "I feel proud that I made it through my first whole night away from home.",
        jumbled: ["whole", "away", "feel", "from", "it", "made", "that", "night", "my", "first", "through", "proud", "home.", "I", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite breakfast food.",
    mySentenceExample: "My favorite breakfast food is pancakes with syrup.",
  },
  {
    number: 9,
    title: "Saying Goodbye",
    image: null,
    imageNote: "Mom hugging Mia on the doorstep as Chloe and Mrs. Park wave from behind, Mia's backpack over her shoulder with the teddy bear peeking out.",
    story:
      "Soon after breakfast, Mom's car pulls into the driveway. I feel happy to see her, but also a little sad that the sleepover is ending so quickly. “Did you have fun, Mia?” Mom asks, hugging me tightly. “The best time ever!” I say, and I really mean it. Chloe hugs me goodbye and says, “Let's do this again soon!” As we drive home, I look out the window and think about everything that happened: the fort, the pancakes, and the quiet talk in the dark. I am already excited to tell Mom every single detail.",
    questions: [
      { text: "How does Mia feel when Mom arrives?", answer: "Happy, but a little sad the sleepover is ending." },
      { text: "What does Mia say when Mom asks if she had fun?", answer: "The best time ever!" },
      { text: "What does Chloe say as Mia leaves?", answer: "Let's do this again soon!" },
    ],
    trueFalse: [
      { text: "Mia feels only sad and nothing else when Mom arrives.", answer: false },
      { text: "Mia tells Mom she had the best time ever.", answer: true },
      { text: "Chloe wants to have another sleepover soon.", answer: true },
    ],
    buildSentence: [
      {
        target: "Soon after breakfast, Mom's car pulls into the driveway.",
        jumbled: ["into", "Soon", "car", "Mom's", "after", "the", "driveway.", "pulls", "breakfast,"],
      },
      {
        target: "I feel happy to see her, but also a little sad that the sleepover is ending so quickly.",
        jumbled: ["happy", "a", "quickly.", "but", "sleepover", "I", "feel", "that", "to", "her,", "the", "also", "so", "ending", "sad", "see", "little", "is"],
      },
      {
        target: "“The best time ever!” I say, and I really mean it.",
        jumbled: ["time", "it.", "really", "I", "“The", "best", "and", "mean", "I", "ever!”", "say,"],
      },
      {
        target: "Chloe hugs me goodbye and says, “Let's do this again soon!”",
        jumbled: ["again", "and", "this", "“Let's", "goodbye", "says,", "me", "soon!”", "do", "hugs", "Chloe"],
      },
      {
        target: "I look out the window and think about everything that happened: the fort, the pancakes, and the quiet talk in the dark.",
        jumbled: ["and", "dark.", "the", "pancakes,", "in", "out", "look", "the", "everything", "the", "I", "window", "talk", "the", "think", "and", "happened:", "about", "quiet", "fort,", "that", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a fun event you did not want to end.",
    mySentenceExample: "I did not want the birthday party to end because it was so much fun.",
  },
  {
    number: 10,
    title: "Already Planning the Next One",
    image: null,
    imageNote: "Mia sitting at her own kitchen table with Mom, talking excitedly and drawing a picture of the blanket fort, her teddy bear sitting beside her.",
    story:
      "At home, I tell Mom everything about the sleepover, from the pizza and movie to the secret blanket fort. “It sounds like you had an incredible time, Mia,” Mom says, smiling. I even tell her about missing home a little, and she says that feeling is completely normal for a first sleepover. “Next time, it will feel even easier,” she promises. That night, I hug my teddy bear in my own bed and think about how brave I was. I already cannot wait for the next sleepover, and I know exactly what I want to pack.",
    questions: [
      { text: "Who does Mia tell everything to?", answer: "Mom." },
      { text: "What does Mom say about feeling homesick?", answer: "That it is completely normal for a first sleepover." },
      { text: "How does Mia feel about the next sleepover?", answer: "Excited -- she can't wait." },
    ],
    trueFalse: [
      { text: "Mia tells Mom about the sleepover.", answer: true },
      { text: "Mom says feeling homesick is unusual.", answer: false },
      { text: "Mia cannot wait for the next sleepover.", answer: true },
    ],
    buildSentence: [
      {
        target: "At home, I tell Mom everything about the sleepover, from the pizza and movie to the secret blanket fort.",
        jumbled: ["to", "pizza", "tell", "the", "Mom", "and", "sleepover,", "secret", "from", "home,", "the", "I", "about", "movie", "blanket", "At", "the", "everything", "fort."],
      },
      {
        target: "“It sounds like you had an incredible time, Mia,” Mom says, smiling.",
        jumbled: ["says,", "Mom", "had", "“It", "sounds", "time,", "smiling.", "like", "Mia,”", "incredible", "you", "an"],
      },
      {
        target: "I even tell her about missing home a little, and she says that feeling is completely normal for a first sleepover.",
        jumbled: ["for", "and", "that", "home", "first", "she", "tell", "says", "her", "even", "normal", "sleepover.", "a", "about", "I", "missing", "is", "feeling", "a", "completely", "little,"],
      },
      {
        target: "“Next time, it will feel even easier,” she promises.",
        jumbled: ["will", "even", "time,", "“Next", "it", "promises.", "she", "easier,”", "feel"],
      },
      {
        target: "That night, I hug my teddy bear in my own bed and think about how brave I was.",
        jumbled: ["I", "my", "about", "bed", "in", "That", "teddy", "bear", "night,", "brave", "own", "was.", "and", "think", "how", "my", "I", "hug"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something new you were brave enough to try.",
    mySentenceExample: "I was brave enough to try swimming in the deep pool for the first time.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
