// A1 Kids digital storybook, Book 13: "My New Puppy"
// Static content -- no Supabase, mirrors the pattern in storybookData9.js
// through storybookData12.js. First book in the Kids age track (Books 1-6
// are Teens, 7-12 are Adults) -- vocabulary, sentence length, and story
// content are simpler than the Teens books, and each chapter uses only 3
// True/False and 3 Build-a-Sentence items instead of 5, per the Kids-track
// spec.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook13/cover.jpg";

export const STORYBOOK_TITLE = "My New Puppy";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Ellie sitting on the living room floor hugging her small brown puppy Milo, both smiling, warm cozy home setting with a dog bed and a ball nearby.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Ellie", role: "The narrator, a young girl", look: "Short brown hair in two pigtails, yellow T-shirt, big happy smile." },
  { name: "Milo", role: "Ellie's new puppy", look: "Small brown puppy with floppy ears and a white patch on his chest." },
  { name: "Mom", role: "Ellie's mother", look: "Shoulder-length dark hair, soft cardigan, warm and gentle." },
  { name: "Dad", role: "Ellie's father", look: "Short hair, checked shirt, patient and playful." },
  { name: "Theo", role: "Ellie's little brother, appears in Chapter 2", look: "Curly hair, striped shirt, excitable." },
  { name: "Grace", role: "Ellie's friend from the park, appears in Chapter 5", look: "Long hair in a ponytail, pink jacket, has her own dog." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Big Surprise",
    image: null,
    imageNote: "Ellie opening the front door and gasping with delight at a small brown puppy sitting on the kitchen floor, Mom smiling in the background.",
    story:
      "Today is a special day. I come home from school and open the door. I see a small brown puppy on the kitchen floor! Mom smiles and says, “He is your new puppy, Ellie!” I feel so happy, and I want to jump and shout. The puppy runs to me and licks my hand. Dad says, “You can play with him now, Ellie.” I sit on the floor and pet his soft fur. This is the best day ever!",
    questions: [
      { text: "What does Ellie see on the kitchen floor?", answer: "A small brown puppy." },
      { text: "What does Mom say?", answer: "He is your new puppy!" },
      { text: "How does Ellie feel?", answer: "So happy." },
    ],
    trueFalse: [
      { text: "Ellie sees a puppy on the kitchen floor.", answer: true },
      { text: "Ellie feels sad.", answer: false },
      { text: "Dad says she can play with the puppy.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today is a special day.",
        jumbled: ["a", "special", "is", "Today", "day."],
      },
      {
        target: "I see a small brown puppy on the kitchen floor!",
        jumbled: ["the", "I", "see", "kitchen", "a", "small", "on", "floor!", "puppy", "brown"],
      },
      {
        target: "I feel so happy, and I want to jump and shout.",
        jumbled: ["want", "so", "and", "I", "I", "jump", "shout.", "feel", "to", "happy,", "and"],
      },
      {
        target: "The puppy runs to me and licks my hand.",
        jumbled: ["licks", "and", "hand.", "The", "to", "me", "my", "runs", "puppy"],
      },
      {
        target: "I sit on the floor and pet his soft fur.",
        jumbled: ["on", "his", "floor", "pet", "I", "soft", "and", "sit", "the", "fur."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a pet you have or want.",
    mySentenceExample: "I want a small dog.",
  },
  {
    number: 2,
    title: "Choosing a Name",
    image: null,
    imageNote: "The family sitting together on the living room floor around the puppy, Theo excitedly pointing, Ellie thinking with a hand on her chin.",
    story:
      "We sit together in the living room. Dad says, “We need a good name for him, Ellie.” I think of many names. Mom says, “What about Max?” My brother Theo says, “I like Rex!” I look at the puppy's big brown eyes. I say, “His name is Milo.” Everyone smiles and says, “Good choice, Ellie! Milo is a good name!” The puppy wags his tail. Now he has a name!",
    questions: [
      { text: "Where does the family sit?", answer: "In the living room." },
      { text: "What name does Ellie choose?", answer: "Milo." },
      { text: "What does the puppy do when he gets his name?", answer: "He wags his tail." },
    ],
    trueFalse: [
      { text: "The family sits in the kitchen.", answer: false },
      { text: "Ellie chooses the name Milo.", answer: true },
      { text: "The puppy wags his tail.", answer: true },
    ],
    buildSentence: [
      {
        target: "Dad says, “We need a good name for him, Ellie.”",
        jumbled: ["for", "need", "says,", "“We", "Dad", "good", "a", "Ellie.”", "name", "him,"],
      },
      {
        target: "I think of many names.",
        jumbled: ["many", "of", "I", "names.", "think"],
      },
      {
        target: "I look at the puppy's big brown eyes.",
        jumbled: ["at", "I", "look", "the", "eyes.", "brown", "big", "puppy's"],
      },
      {
        target: "Everyone smiles and says, “Good choice, Ellie! Milo is a good name!”",
        jumbled: ["Milo", "a", "good", "says,", "smiles", "and", "is", "Ellie!", "name!”", "“Good", "choice,", "Everyone"],
      },
      {
        target: "The puppy wags his tail.",
        jumbled: ["his", "The", "wags", "tail.", "puppy"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a name you like.",
    mySentenceExample: "I like the name Luna.",
  },
  {
    number: 3,
    title: "Milo's First Night",
    image: null,
    imageNote: "Ellie in pajamas sitting on the floor beside a small dog bed at night, gently petting a whimpering Milo under soft moonlight through the window.",
    story:
      "At night, Milo sleeps in a small bed in my room. Soon, I hear a soft cry. Milo is awake, and he looks scared. I get out of bed and sit next to him. I say, “It's okay, Milo. Ellie is here.” I pet his head slowly. Milo stops crying and rests his head on my hand. Soon, we both fall asleep. In the morning, Mom peeks in and says, “Good morning, Ellie!” Milo licks my face and wakes me up too.",
    questions: [
      { text: "Where does Milo sleep?", answer: "In a small bed in Ellie's room." },
      { text: "What does Milo do at night?", answer: "He cries softly because he looks scared." },
      { text: "What wakes Ellie up in the morning?", answer: "Milo licking her face." },
    ],
    trueFalse: [
      { text: "Milo sleeps in the kitchen.", answer: false },
      { text: "Milo cries at night.", answer: true },
      { text: "Milo licks Ellie's face in the morning.", answer: true },
    ],
    buildSentence: [
      {
        target: "At night, Milo sleeps in a small bed in my room.",
        jumbled: ["a", "At", "in", "bed", "small", "sleeps", "in", "my", "Milo", "night,", "room."],
      },
      {
        target: "I get out of bed and sit next to him.",
        jumbled: ["of", "sit", "get", "to", "out", "I", "him.", "bed", "and", "next"],
      },
      {
        target: "I say, “It's okay, Milo. Ellie is here.”",
        jumbled: ["“It's", "okay,", "Milo.", "say,", "Ellie", "here.”", "is", "I"],
      },
      {
        target: "Milo stops crying and rests his head on my hand.",
        jumbled: ["rests", "Milo", "and", "head", "crying", "stops", "hand.", "his", "my", "on"],
      },
      {
        target: "In the morning, Mom peeks in and says, “Good morning, Ellie!”",
        jumbled: ["“Good", "Mom", "Ellie!”", "in", "morning,", "peeks", "and", "the", "says,", "morning,", "In"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about nighttime.",
    mySentenceExample: "I sleep in my bed at night.",
  },
  {
    number: 4,
    title: "Puppy School",
    image: null,
    imageNote: "Dad kneeling on the living room floor holding a small treat above Milo, who is mid-jump, Ellie watching and clapping nearby.",
    story:
      "Today, Dad teaches Milo a new trick. Dad holds a small treat and says, “Watch this, Ellie! Sit, Milo!” Milo looks confused and jumps up. Dad tries again, slowly and kindly. “Sit, Milo,” he says softly. This time, Milo sits down! We clap and cheer for him. Milo gets his treat and wags his tail. I say, “Good boy, Milo!” Dad smiles and says, “Great job, Ellie!” Puppy school is fun, and Milo learns fast.",
    questions: [
      { text: "Who teaches Milo a new trick?", answer: "Dad." },
      { text: "What word does Dad say to Milo?", answer: "Sit." },
      { text: "What does Milo get when he sits?", answer: "A treat." },
    ],
    trueFalse: [
      { text: "Dad teaches Milo a new trick.", answer: true },
      { text: "Milo sits down on the first try.", answer: false },
      { text: "Milo gets a treat.", answer: true },
    ],
    buildSentence: [
      {
        target: "Dad holds a small treat and says, “Watch this, Ellie! Sit, Milo!”",
        jumbled: ["Milo!”", "and", "a", "Dad", "says,", "“Watch", "Ellie!", "this,", "small", "Sit,", "holds", "treat"],
      },
      {
        target: "Milo looks confused and jumps up.",
        jumbled: ["up.", "and", "looks", "confused", "Milo", "jumps"],
      },
      {
        target: "“Sit, Milo,” he says softly.",
        jumbled: ["he", "Milo,”", "says", "“Sit,", "softly."],
      },
      {
        target: "Milo gets his treat and wags his tail.",
        jumbled: ["Milo", "his", "and", "gets", "treat", "his", "tail.", "wags"],
      },
      {
        target: "Puppy school is fun, and Milo learns fast.",
        jumbled: ["fun,", "is", "fast.", "school", "learns", "Milo", "Puppy", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning something new.",
    mySentenceExample: "I learn to jump rope.",
  },
  {
    number: 5,
    title: "A Walk in the Park",
    image: null,
    imageNote: "Ellie holding Milo's leash on a sunny park path, Grace and her own dog nearby, the two puppies playfully running in circles on the grass.",
    story:
      "On Saturday, I take Milo for his first walk. I hold his leash, and we walk to the park. Milo sniffs the grass and wags his tail. At the park, I see my friend Grace with her dog. “Ellie, over here!” Grace calls and waves. “Your puppy is so cute, Ellie!” she says. Milo and Grace's dog play together and run in circles. We sit on a bench and watch them play. It is a fun day at the park.",
    questions: [
      { text: "Where does Ellie take Milo?", answer: "The park, for his first walk." },
      { text: "Who does she see at the park?", answer: "Her friend Grace." },
      { text: "What do Milo and Grace's dog do?", answer: "They play together and run in circles." },
    ],
    trueFalse: [
      { text: "Ellie takes Milo to the park.", answer: true },
      { text: "Grace says the puppy is ugly.", answer: false },
      { text: "Milo and Grace's dog play together.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Saturday, I take Milo for his first walk.",
        jumbled: ["his", "first", "walk.", "On", "take", "Saturday,", "I", "for", "Milo"],
      },
      {
        target: "I hold his leash, and we walk to the park.",
        jumbled: ["we", "to", "and", "hold", "walk", "leash,", "the", "I", "his", "park."],
      },
      {
        target: "At the park, I see my friend Grace with her dog.",
        jumbled: ["friend", "At", "her", "see", "dog.", "the", "my", "Grace", "park,", "with", "I"],
      },
      {
        target: "Milo and Grace's dog play together and run in circles.",
        jumbled: ["and", "together", "in", "circles.", "run", "and", "play", "Milo", "Grace's", "dog"],
      },
      {
        target: "We sit on a bench and watch them play.",
        jumbled: ["sit", "We", "them", "on", "and", "a", "play.", "bench", "watch"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about the park.",
    mySentenceExample: "I like to play at the park.",
  },
  {
    number: 6,
    title: "Milo Makes a Mess",
    image: null,
    imageNote: "Ellie standing in the hallway looking at a chewed shoe on the floor, Milo sitting nearby looking sheepish, Mom kneeling to comfort Ellie.",
    story:
      "One afternoon, I come home and see something on the floor. Milo has chewed my favorite shoe! I feel upset and want to shout. Mom hugs me and says, “Ellie, Milo is still a baby. He does not know yet.” We clean up the mess together. Dad gives Milo a chew toy instead and says, “Don't worry, Ellie.” I hug Milo and say, “It's okay, Milo.” I learn that puppies make mistakes too.",
    questions: [
      { text: "What does Milo chew?", answer: "Ellie's favorite shoe." },
      { text: "How does Ellie feel at first?", answer: "Upset." },
      { text: "What does Ellie learn?", answer: "That puppies make mistakes too." },
    ],
    trueFalse: [
      { text: "Milo chews Ellie's shoe.", answer: true },
      { text: "Ellie feels happy about the mess.", answer: false },
      { text: "Dad gives Milo a chew toy.", answer: true },
    ],
    buildSentence: [
      {
        target: "One afternoon, I come home and see something on the floor.",
        jumbled: ["the", "I", "home", "come", "One", "floor.", "something", "afternoon,", "see", "on", "and"],
      },
      {
        target: "I feel upset and want to shout.",
        jumbled: ["shout.", "and", "upset", "I", "want", "feel", "to"],
      },
      {
        target: "Mom hugs me and says, “Ellie, Milo is still a baby. He does not know yet.”",
        jumbled: ["a", "yet.”", "does", "Milo", "still", "is", "hugs", "me", "“Ellie,", "says,", "baby.", "not", "and", "He", "know", "Mom"],
      },
      {
        target: "Dad gives Milo a chew toy instead and says, “Don't worry, Ellie.”",
        jumbled: ["gives", "instead", "Milo", "toy", "and", "a", "Dad", "worry,", "chew", "Ellie.”", "“Don't", "says,"],
      },
      {
        target: "I hug Milo and say, “It's okay, Milo.”",
        jumbled: ["say,", "Milo", "okay,", "I", "hug", "“It's", "Milo.”", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a mistake.",
    mySentenceExample: "I make a mistake, but it is okay.",
  },
  {
    number: 7,
    title: "Bath Time for Milo",
    image: null,
    imageNote: "Ellie kneeling by a bathtub giving Milo a bubbly bath, both of them splashed with water and laughing, towels ready nearby.",
    story:
      "Today, Milo needs a bath. He rolled in the mud outside! I fill the tub with warm water. Milo does not like the water at first. He shakes and splashes everywhere. Water goes all over my clothes, and I start to laugh. Mom peeks in and laughs too. “Ellie, you are as wet as Milo!” she says. Slowly, Milo relaxes and enjoys the warm water. I wash his soft fur gently. After the bath, Milo looks clean and smells so fresh. He shakes his whole body and gets me wet again! “Milo!” I laugh. “Now Ellie needs a bath too!”",
    questions: [
      { text: "Why does Milo need a bath?", answer: "Because he rolled in the mud outside." },
      { text: "What does Milo do at first?", answer: "He does not like the water -- he shakes and splashes." },
      { text: "How does Milo look after the bath?", answer: "Clean and fresh-smelling." },
    ],
    trueFalse: [
      { text: "Milo rolled in the mud.", answer: true },
      { text: "Milo loves the water right away.", answer: false },
      { text: "Milo looks clean after the bath.", answer: true },
    ],
    buildSentence: [
      {
        target: "I fill the tub with warm water.",
        jumbled: ["water.", "tub", "with", "fill", "warm", "the", "I"],
      },
      {
        target: "Water goes all over my clothes, and I start to laugh.",
        jumbled: ["start", "goes", "over", "to", "clothes,", "all", "and", "laugh.", "I", "my", "Water"],
      },
      {
        target: "“Ellie, you are as wet as Milo!” she says.",
        jumbled: ["she", "Milo!”", "“Ellie,", "are", "as", "you", "as", "says.", "wet"],
      },
      {
        target: "Milo looks clean and smells so fresh.",
        jumbled: ["clean", "fresh.", "and", "so", "looks", "Milo", "smells"],
      },
      {
        target: "“Now Ellie needs a bath too!”",
        jumbled: ["bath", "too!”", "“Now", "a", "Ellie", "needs"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about bath time.",
    mySentenceExample: "I take a bath at night.",
  },
  {
    number: 8,
    title: "Milo Learns to Fetch",
    image: null,
    imageNote: "Ellie in the backyard throwing a small ball, Milo mid-run chasing after it, tail wagging with excitement.",
    story:
      "In the yard, I throw a small ball for Milo. “Go get it, Milo!” I shout. Milo runs fast, but he does not bring the ball back. He just looks at it and barks. Dad watches from the porch and calls, “Keep trying, Ellie!” I try again and again, but Milo does not understand yet. Then, on the fifth try, Milo picks up the ball and runs back to me! I clap my hands and say, “Good job, Milo!” Dad cheers, “Well done, Ellie and Milo!” Now Milo loves to play fetch every day.",
    questions: [
      { text: "What does Ellie throw for Milo?", answer: "A small ball." },
      { text: "What does Milo do at first?", answer: "He just looks at the ball and barks." },
      { text: "What happens on the fifth try?", answer: "Milo picks up the ball and runs back to Ellie." },
    ],
    trueFalse: [
      { text: "Ellie throws a ball for Milo.", answer: true },
      { text: "Milo brings the ball back the first time.", answer: false },
      { text: "Milo picks up the ball on the fifth try.", answer: true },
    ],
    buildSentence: [
      {
        target: "In the yard, I throw a small ball for Milo.",
        jumbled: ["yard,", "Milo.", "ball", "for", "In", "a", "small", "the", "I", "throw"],
      },
      {
        target: "Milo runs fast, but he does not bring the ball back.",
        jumbled: ["he", "runs", "ball", "does", "not", "but", "back.", "fast,", "bring", "Milo", "the"],
      },
      {
        target: "I try again and again, but Milo does not understand yet.",
        jumbled: ["Milo", "I", "but", "does", "and", "understand", "yet.", "try", "not", "again,", "again"],
      },
      {
        target: "Then, on the fifth try, Milo picks up the ball and runs back to me!",
        jumbled: ["Then,", "up", "Milo", "picks", "try,", "the", "the", "runs", "to", "fifth", "ball", "back", "on", "me!", "and"],
      },
      {
        target: "Now Milo loves to play fetch every day.",
        jumbled: ["every", "day.", "fetch", "loves", "play", "to", "Now", "Milo"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a game you like to play.",
    mySentenceExample: "I like to play with a ball.",
  },
  {
    number: 9,
    title: "Show and Tell",
    image: null,
    imageNote: "Ellie standing at the front of her classroom holding up a photo of Milo, classmates sitting on the carpet with raised hands to ask questions.",
    story:
      "At school, it is show-and-tell day. I bring photos of Milo to show my class. My teacher smiles and says, “Go ahead, Ellie.” I stand at the front and hold up a photo. “This is my puppy, Milo,” I say. My classmates smile and ask questions. “What does he eat?” asks one boy. “What tricks does he know?” asks a girl. I answer every question with a big smile. Everyone claps and says, “Great job, Ellie! Milo looks very cute!” I feel proud to share my puppy with my class.",
    questions: [
      { text: "What does Ellie bring to school?", answer: "Photos of Milo." },
      { text: "What does Ellie say about the photo?", answer: "This is my puppy, Milo." },
      { text: "How does Ellie feel?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Ellie brings Milo's photos to school.", answer: true },
      { text: "No one asks questions about Milo.", answer: false },
      { text: "Ellie feels proud.", answer: true },
    ],
    buildSentence: [
      {
        target: "I bring photos of Milo to show my class.",
        jumbled: ["of", "class.", "Milo", "to", "photos", "bring", "I", "my", "show"],
      },
      {
        target: "I stand at the front and hold up a photo.",
        jumbled: ["a", "at", "the", "and", "front", "up", "I", "photo.", "stand", "hold"],
      },
      {
        target: "“This is my puppy, Milo,” I say.",
        jumbled: ["puppy,", "my", "“This", "is", "I", "say.", "Milo,”"],
      },
      {
        target: "“What tricks does he know?” asks a girl.",
        jumbled: ["a", "he", "know?”", "asks", "girl.", "“What", "does", "tricks"],
      },
      {
        target: "Everyone claps and says, “Great job, Ellie! Milo looks very cute!”",
        jumbled: ["looks", "Everyone", "cute!”", "Ellie!", "Milo", "“Great", "job,", "very", "and", "says,", "claps"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about show-and-tell.",
    mySentenceExample: "I want to show my toy at school.",
  },
  {
    number: 10,
    title: "My Best Friend Milo",
    image: null,
    imageNote: "Ellie lying on the floor next to a now slightly bigger Milo in the evening, both relaxed and happy, a small dog bed and toys visible nearby.",
    story:
      "It has been one month since Milo came home. He is bigger now and knows many tricks. Milo can sit, come, and fetch the ball. Every morning, he wakes me up with a lick on my face. Every afternoon, we play together in the yard. At night, Milo sleeps next to my bed. I remember the first day, when Milo was scared and small. Now, Milo is happy and full of energy. I look at Milo and smile. “Ellie loves you, Milo,” I whisper. Mom smiles and says, “You and Milo are perfect together, Ellie.” He is not just my puppy. He is my best friend.",
    questions: [
      { text: "How long has Milo been home?", answer: "One month." },
      { text: "What tricks can Milo do now?", answer: "Sit, come, and fetch the ball." },
      { text: "What does Ellie call Milo at the end?", answer: "Her best friend." },
    ],
    trueFalse: [
      { text: "Milo has been home for one month.", answer: true },
      { text: "Milo cannot do any tricks.", answer: false },
      { text: "Ellie calls Milo her best friend.", answer: true },
    ],
    buildSentence: [
      {
        target: "It has been one month since Milo came home.",
        jumbled: ["came", "has", "home.", "Milo", "been", "since", "It", "month", "one"],
      },
      {
        target: "Every morning, he wakes me up with a lick on my face.",
        jumbled: ["with", "wakes", "lick", "he", "face.", "up", "Every", "a", "me", "my", "morning,", "on"],
      },
      {
        target: "I remember the first day, when Milo was scared and small.",
        jumbled: ["the", "remember", "I", "small.", "was", "when", "scared", "and", "Milo", "first", "day,"],
      },
      {
        target: "Now, Milo is happy and full of energy.",
        jumbled: ["full", "Now,", "Milo", "is", "of", "happy", "and", "energy."],
      },
      {
        target: "Mom smiles and says, “You and Milo are perfect together, Ellie.”",
        jumbled: ["smiles", "and", "and", "together,", "says,", "Milo", "perfect", "are", "“You", "Ellie.”", "Mom"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your best friend.",
    mySentenceExample: "My best friend makes me happy.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
