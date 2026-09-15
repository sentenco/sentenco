// A1 Kids digital storybook, Book 17: "Learning to Ride My Bike"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js
// through storybookData16.js. Fifth and final book in this Kids-track
// batch. Same simplified vocabulary/sentence length and 3+3 True/False
// and Build-a-Sentence pattern.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook17/cover.jpg";

export const STORYBOOK_TITLE = "Learning to Ride My Bike";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Zara riding her purple bike down the street with a big proud smile, Dad walking beside her, her brother Felix cheering from the sidewalk.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Zara", role: "The narrator, a young girl", look: "Curly black hair in a ponytail, blue helmet, determined and cheerful expression." },
  { name: "Dad", role: "Zara's father", look: "Short hair, gray T-shirt, patient and encouraging." },
  { name: "Felix", role: "Zara's older brother, appears from Chapter 8", look: "Messy brown hair, green hoodie, playful and supportive." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Bike",
    image: null,
    imageNote: "Dad wheeling a shiny purple bike with white stripes into the front yard, Zara gasping with delight, a blue helmet in her hands.",
    story:
      "Today is my birthday, and I get a big surprise. Dad wheels a shiny new bike into the yard. It is purple with white stripes and a soft seat. “Happy birthday, Zara!” Dad says with a big smile. I run over and touch the smooth, cool handlebars. “Can I ride it now?” I ask excitedly. Dad laughs and says, “First, let's put on your helmet.” I put on my blue helmet and feel ready for an adventure. I cannot wait to learn how to ride my new bike.",
    questions: [
      { text: "What does Zara get for her birthday?", answer: "A new bike." },
      { text: "What color is the bike?", answer: "Purple with white stripes." },
      { text: "What does Dad say to put on first?", answer: "Her helmet." },
    ],
    trueFalse: [
      { text: "Zara gets a new bike.", answer: true },
      { text: "The bike is red and black.", answer: false },
      { text: "Dad says to put on a helmet first.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today is my birthday, and I get a big surprise.",
        jumbled: ["my", "and", "a", "Today", "get", "surprise.", "birthday,", "is", "big", "I"],
      },
      {
        target: "It is purple with white stripes and a soft seat.",
        jumbled: ["purple", "stripes", "is", "white", "and", "with", "seat.", "It", "a", "soft"],
      },
      {
        target: "“Happy birthday, Zara!” Dad says with a big smile.",
        jumbled: ["big", "smile.", "says", "a", "with", "“Happy", "birthday,", "Zara!”", "Dad"],
      },
      {
        target: "Dad laughs and says, “First, let's put on your helmet.”",
        jumbled: ["helmet.”", "laughs", "and", "your", "Dad", "put", "let's", "says,", "“First,", "on"],
      },
      {
        target: "I put on my blue helmet and feel ready for an adventure.",
        jumbled: ["put", "helmet", "for", "adventure.", "an", "feel", "blue", "on", "my", "and", "ready", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a birthday gift.",
    mySentenceExample: "I got a new toy for my birthday.",
  },
  {
    number: 2,
    title: "Training Wheels On",
    image: null,
    imageNote: "Dad kneeling beside the bike attaching small training wheels, Zara sitting on the seat holding the handlebars tightly with a proud expression.",
    story:
      "Dad attaches two small training wheels to my new bike. “These will help you balance, Zara,” he explains kindly. I sit on the seat and hold the handlebars tightly. My feet reach the pedals just right, and I feel proud. Dad checks the training wheels to make sure they are safe. “Are you ready to try?” Dad asks with a smile. I nod my head and take a deep breath. I push the pedals slowly, and the bike starts to move. Riding with training wheels feels safe and exciting at the same time.",
    questions: [
      { text: "What does Dad attach to the bike?", answer: "Training wheels." },
      { text: "What do the training wheels help with?", answer: "Balance." },
      { text: "How does Zara feel when she is ready?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Dad attaches training wheels.", answer: true },
      { text: "Training wheels help Zara balance.", answer: true },
      { text: "Zara feels scared and refuses to try.", answer: false },
    ],
    buildSentence: [
      {
        target: "Dad attaches two small training wheels to my new bike.",
        jumbled: ["attaches", "my", "small", "bike.", "training", "wheels", "Dad", "new", "two", "to"],
      },
      {
        target: "I sit on the seat and hold the handlebars tightly.",
        jumbled: ["handlebars", "on", "and", "sit", "hold", "the", "tightly.", "the", "seat", "I"],
      },
      {
        target: "My feet reach the pedals just right, and I feel proud.",
        jumbled: ["and", "pedals", "right,", "just", "proud.", "feel", "the", "reach", "feet", "I", "My"],
      },
      {
        target: "“Are you ready to try?” Dad asks with a smile.",
        jumbled: ["ready", "to", "asks", "try?”", "you", "Dad", "“Are", "a", "with", "smile."],
      },
      {
        target: "Riding with training wheels feels safe and exciting at the same time.",
        jumbled: ["feels", "the", "at", "same", "with", "and", "training", "time.", "Riding", "exciting", "wheels", "safe"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about trying something new.",
    mySentenceExample: "I feel excited to try something new.",
  },
  {
    number: 3,
    title: "Wobbly First Try",
    image: null,
    imageNote: "Zara riding wobbly down the yard path with training wheels, Dad standing nearby calling out encouragement, arms mid-clap.",
    story:
      "I push the pedals, and the bike wobbles from side to side. “Keep looking forward, Zara,” Dad calls out to me. I try to steer straight, but the bike zigzags on the path. My hands feel shaky on the handlebars at first. Slowly, the bike starts to feel a little more steady. I make it to the end of the yard without stopping! “You did it!” Dad says, clapping his hands happily. I feel proud, even though the ride was wobbly. Learning something new takes practice, and I am ready to try again.",
    questions: [
      { text: "What does the bike do at first?", answer: "Wobbles from side to side." },
      { text: "What does Dad tell Zara to do?", answer: "Keep looking forward." },
      { text: "Does Zara make it to the end of the yard?", answer: "Yes, without stopping." },
    ],
    trueFalse: [
      { text: "The bike wobbles at first.", answer: true },
      { text: "Dad tells Zara to close her eyes.", answer: false },
      { text: "Zara makes it to the end of the yard.", answer: true },
    ],
    buildSentence: [
      {
        target: "I push the pedals, and the bike wobbles from side to side.",
        jumbled: ["side", "push", "and", "the", "pedals,", "from", "wobbles", "the", "bike", "to", "I", "side."],
      },
      {
        target: "I try to steer straight, but the bike zigzags on the path.",
        jumbled: ["to", "bike", "the", "the", "path.", "but", "try", "straight,", "steer", "zigzags", "on", "I"],
      },
      {
        target: "Slowly, the bike starts to feel a little more steady.",
        jumbled: ["bike", "the", "to", "little", "feel", "a", "steady.", "starts", "Slowly,", "more"],
      },
      {
        target: "I make it to the end of the yard without stopping!",
        jumbled: ["the", "to", "I", "make", "without", "stopping!", "yard", "it", "end", "of", "the"],
      },
      {
        target: "Learning something new takes practice, and I am ready to try again.",
        jumbled: ["am", "takes", "Learning", "I", "something", "practice,", "again.", "new", "ready", "and", "to", "try"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about practicing something.",
    mySentenceExample: "I practice every day to get better.",
  },
  {
    number: 4,
    title: "Dad Holds the Seat",
    image: null,
    imageNote: "Dad running alongside the bike holding the back of the seat, Zara pedaling with a determined smile, no training wheels visible, wind in her hair.",
    story:
      "The next day, Dad takes off the training wheels to help me balance better. “I will hold the seat so you feel safe,” he says. I climb onto the bike, and Dad holds on tightly behind me. I push the pedals, and Dad runs along beside the bike. “You're doing great, Zara!” Dad says, a little out of breath. I feel the wind on my face as we move faster. Dad slowly loosens his grip, but he stays close by. Even without training wheels, I feel brave with Dad right there.",
    questions: [
      { text: "What does Dad take off the bike?", answer: "The training wheels." },
      { text: "What does Dad do to help Zara feel safe?", answer: "Holds the seat." },
      { text: "How does Zara feel with Dad nearby?", answer: "Brave." },
    ],
    trueFalse: [
      { text: "Dad takes off the training wheels.", answer: true },
      { text: "Dad holds the bike seat.", answer: true },
      { text: "Zara feels alone and scared.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next day, Dad takes off the training wheels to help me balance better.",
        jumbled: ["help", "me", "the", "balance", "off", "Dad", "to", "next", "day,", "wheels", "The", "better.", "takes", "training"],
      },
      {
        target: "I climb onto the bike, and Dad holds on tightly behind me.",
        jumbled: ["and", "onto", "holds", "behind", "I", "bike,", "tightly", "me.", "the", "on", "climb", "Dad"],
      },
      {
        target: "I push the pedals, and Dad runs along beside the bike.",
        jumbled: ["runs", "bike.", "the", "pedals,", "and", "the", "beside", "I", "along", "Dad", "push"],
      },
      {
        target: "“You're doing great, Zara!” Dad says, a little out of breath.",
        jumbled: ["a", "little", "great,", "Dad", "says,", "doing", "breath.", "out", "of", "Zara!”", "“You're"],
      },
      {
        target: "Even without training wheels, I feel brave with Dad right there.",
        jumbled: ["with", "right", "without", "there.", "feel", "training", "wheels,", "I", "Even", "brave", "Dad"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone who helps you.",
    mySentenceExample: "My dad helps me learn new things.",
  },
  {
    number: 5,
    title: "A Little Fall",
    image: null,
    imageNote: "Zara sitting on the grass beside her fallen bike with a small scrape on her knee, Dad kneeling beside her with a worried, caring expression.",
    story:
      "Today, Dad lets go of the seat for a few seconds. I ride on my own, but then I lose my balance. The bike tips over, and I fall onto the soft grass. My knee feels a little sore, and I want to cry. Dad runs over quickly and helps me stand up. “Are you okay, Zara?” he asks with a worried face. “I'm okay, Dad, just a little scraped,” I say bravely. Dad hugs me and says falling is part of learning to ride. I take a deep breath and get ready to try once more.",
    questions: [
      { text: "What happens when Dad lets go?", answer: "Zara loses her balance and the bike tips over." },
      { text: "Where does Zara fall?", answer: "Onto the soft grass." },
      { text: "What does Dad say about falling?", answer: "That falling is part of learning to ride." },
    ],
    trueFalse: [
      { text: "Zara loses her balance.", answer: true },
      { text: "Zara falls onto hard rocks.", answer: false },
      { text: "Dad says falling is part of learning.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today, Dad lets go of the seat for a few seconds.",
        jumbled: ["go", "for", "few", "the", "Dad", "of", "seconds.", "lets", "a", "Today,", "seat"],
      },
      {
        target: "I ride on my own, but then I lose my balance.",
        jumbled: ["but", "ride", "I", "then", "I", "balance.", "on", "lose", "own,", "my", "my"],
      },
      {
        target: "My knee feels a little sore, and I want to cry.",
        jumbled: ["little", "I", "sore,", "to", "want", "and", "a", "knee", "My", "cry.", "feels"],
      },
      {
        target: "“Are you okay, Zara?” he asks with a worried face.",
        jumbled: ["okay,", "he", "Zara?”", "face.", "“Are", "worried", "a", "asks", "with", "you"],
      },
      {
        target: "Dad hugs me and says falling is part of learning to ride.",
        jumbled: ["hugs", "part", "ride.", "and", "learning", "falling", "to", "of", "me", "Dad", "is", "says"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about falling down and trying again.",
    mySentenceExample: "I fall down, but I try again.",
  },
  {
    number: 6,
    title: "Trying Again",
    image: null,
    imageNote: "Zara climbing back onto her bike with a determined look, Dad kneeling beside her holding the seat gently, encouraging smile on his face.",
    story:
      "After my little fall, I feel a bit nervous to try again. Dad kneels beside me and says, “You can do this, Zara.” I take a deep breath and climb back onto my bike. Dad holds the seat gently, just like before. I push the pedals slowly and focus on looking straight ahead. This time, I feel more balanced and confident on the bike. Dad lets go again, and I ride a little further than before. “I'm doing it, Dad!” I shout with excitement. Trying again after a fall makes me feel strong and brave.",
    questions: [
      { text: "How does Zara feel before trying again?", answer: "A bit nervous." },
      { text: "What does Dad say to encourage her?", answer: "You can do this, Zara." },
      { text: "Does Zara ride further this time?", answer: "Yes, a little further than before." },
    ],
    trueFalse: [
      { text: "Zara feels nervous at first.", answer: true },
      { text: "Dad tells Zara to give up.", answer: false },
      { text: "Zara rides further than before.", answer: true },
    ],
    buildSentence: [
      {
        target: "I feel a bit nervous to try again.",
        jumbled: ["try", "to", "again.", "bit", "feel", "nervous", "I", "a"],
      },
      {
        target: "Dad kneels beside me and says, “You can do this, Zara.”",
        jumbled: ["kneels", "Zara.”", "Dad", "beside", "do", "says,", "me", "this,", "and", "can", "“You"],
      },
      {
        target: "I push the pedals slowly and focus on looking straight ahead.",
        jumbled: ["pedals", "on", "straight", "looking", "push", "the", "and", "focus", "slowly", "ahead.", "I"],
      },
      {
        target: "Dad lets go again, and I ride a little further than before.",
        jumbled: ["little", "go", "a", "before.", "and", "than", "ride", "I", "further", "again,", "Dad", "lets"],
      },
      {
        target: "Trying again after a fall makes me feel strong and brave.",
        jumbled: ["strong", "after", "and", "feel", "a", "makes", "me", "again", "brave.", "Trying", "fall"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being brave.",
    mySentenceExample: "I feel brave when I try again.",
  },
  {
    number: 7,
    title: "Taking Off the Training Wheels",
    image: null,
    imageNote: "Zara riding steadily on her own down the yard path, no hands holding her, Dad watching proudly from a distance with a big smile.",
    story:
      "Today, I tell Dad I am ready to ride all by myself. “No training wheels and no holding on, Zara?” Dad asks with a smile. “Yes, Dad, I want to try,” I say confidently. Dad checks my helmet and makes sure the bike is ready. I climb on the bike and push off the ground slowly. My legs pedal steadily, and the bike moves forward smoothly. I look ahead and keep my balance all by myself. Dad watches from a distance with a proud smile on his face. I cannot believe I am really riding on my own!",
    questions: [
      { text: "What does Zara tell Dad she is ready for?", answer: "To ride all by herself, with no training wheels or holding on." },
      { text: "What does Dad check before she rides?", answer: "Her helmet and the bike." },
      { text: "How does Zara ride this time?", answer: "By herself, keeping her balance." },
    ],
    trueFalse: [
      { text: "Zara wants to ride without help.", answer: true },
      { text: "Dad does not check the bike.", answer: false },
      { text: "Zara rides on her own this time.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today, I tell Dad I am ready to ride all by myself.",
        jumbled: ["I", "tell", "ready", "by", "Dad", "I", "am", "ride", "to", "all", "Today,", "myself."],
      },
      {
        target: "“No training wheels and no holding on, Zara?” Dad asks with a smile.",
        jumbled: ["holding", "wheels", "Dad", "smile.", "training", "a", "no", "with", "Zara?”", "asks", "and", "on,", "“No"],
      },
      {
        target: "Dad checks my helmet and makes sure the bike is ready.",
        jumbled: ["helmet", "the", "and", "my", "checks", "ready.", "Dad", "makes", "sure", "is", "bike"],
      },
      {
        target: "My legs pedal steadily, and the bike moves forward smoothly.",
        jumbled: ["bike", "and", "smoothly.", "forward", "legs", "My", "the", "moves", "pedal", "steadily,"],
      },
      {
        target: "Dad watches from a distance with a proud smile on his face.",
        jumbled: ["distance", "with", "Dad", "a", "on", "his", "from", "watches", "smile", "a", "face.", "proud"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about doing something on your own.",
    mySentenceExample: "I can ride my bike on my own now.",
  },
  {
    number: 8,
    title: "Felix Cheers Me On",
    image: null,
    imageNote: "Felix running alongside Zara on the sidewalk clapping and cheering, Zara pedaling with a big grin, both laughing happily.",
    story:
      "My big brother Felix comes outside to watch me ride. “Go, Zara, go!” he shouts and claps his hands. I smile and pedal a little faster down the path. Felix runs alongside me, cheering with every turn I make. “You're really good at this!” Felix says with a proud smile. I feel happy that my big brother believes in me. He gives me a high five when I stop safely at the end. “Thanks for cheering for me, Felix,” I say happily. Having my brother's support makes riding my bike even more fun.",
    questions: [
      { text: "Who comes outside to watch Zara ride?", answer: "Her big brother Felix." },
      { text: "What does Felix do while Zara rides?", answer: "Cheers and runs alongside her." },
      { text: "What does Felix give Zara at the end?", answer: "A high five." },
    ],
    trueFalse: [
      { text: "Felix comes outside to watch.", answer: true },
      { text: "Felix ignores Zara completely.", answer: false },
      { text: "Felix gives Zara a high five.", answer: true },
    ],
    buildSentence: [
      {
        target: "My big brother Felix comes outside to watch me ride.",
        jumbled: ["outside", "My", "me", "to", "comes", "ride.", "brother", "Felix", "watch", "big"],
      },
      {
        target: "I smile and pedal a little faster down the path.",
        jumbled: ["the", "I", "faster", "down", "a", "path.", "and", "little", "smile", "pedal"],
      },
      {
        target: "“You're really good at this!” Felix says with a proud smile.",
        jumbled: ["good", "“You're", "says", "really", "proud", "with", "at", "a", "this!”", "smile.", "Felix"],
      },
      {
        target: "He gives me a high five when I stop safely at the end.",
        jumbled: ["I", "He", "at", "high", "me", "gives", "safely", "five", "when", "a", "the", "stop", "end."],
      },
      {
        target: "Having my brother's support makes riding my bike even more fun.",
        jumbled: ["Having", "makes", "more", "even", "my", "support", "brother's", "bike", "fun.", "my", "riding"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone who cheers for you.",
    mySentenceExample: "My brother cheers for me when I try hard things.",
  },
  {
    number: 9,
    title: "Riding Down the Street",
    image: null,
    imageNote: "Zara riding along the sidewalk past neighborhood houses, Dad walking beside her, a neighbor waving from her porch, kids playing in the distance.",
    story:
      "Today, Dad says I can ride down our whole street. “Stay close to the side, Zara, and I'll walk with you,” Dad says. I pedal past our neighbor's house and wave to Mrs. Lopez. The wind feels cool against my face as I ride along. I see kids playing and dogs barking as I pass by. Dad walks beside me the whole time, smiling proudly. I ride all the way to the corner and turn around carefully. Riding down the real street feels like a big, exciting adventure. I feel like I can ride anywhere now!",
    questions: [
      { text: "What does Dad say Zara can do today?", answer: "Ride down the whole street." },
      { text: "Who does Zara wave to?", answer: "Their neighbor, Mrs. Lopez." },
      { text: "How does the wind feel?", answer: "Cool against her face." },
    ],
    trueFalse: [
      { text: "Zara rides down the street.", answer: true },
      { text: "Zara waves to Mrs. Lopez.", answer: true },
      { text: "The wind feels hot and uncomfortable.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today, Dad says I can ride down our whole street.",
        jumbled: ["ride", "Dad", "I", "our", "whole", "down", "street.", "Today,", "can", "says"],
      },
      {
        target: "“Stay close to the side, Zara, and I'll walk with you,” Dad says.",
        jumbled: ["Zara,", "and", "I'll", "“Stay", "says.", "Dad", "side,", "with", "walk", "you,”", "to", "close", "the"],
      },
      {
        target: "The wind feels cool against my face as I ride along.",
        jumbled: ["against", "I", "as", "ride", "cool", "feels", "along.", "my", "The", "face", "wind"],
      },
      {
        target: "I ride all the way to the corner and turn around carefully.",
        jumbled: ["around", "all", "and", "I", "the", "to", "the", "corner", "ride", "carefully.", "way", "turn"],
      },
      {
        target: "Riding down the real street feels like a big, exciting adventure.",
        jumbled: ["the", "real", "street", "Riding", "a", "feels", "exciting", "like", "down", "big,", "adventure."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about riding or traveling somewhere.",
    mySentenceExample: "I like to ride my bike down the street.",
  },
  {
    number: 10,
    title: "I Can Ride My Bike!",
    image: null,
    imageNote: "The whole family riding bikes together around the neighborhood at sunset, Zara in front with a huge proud smile, Dad and Felix riding behind her.",
    story:
      "It has been one month since I got my new bike. I remember my first wobbly ride and my little fall. Now, I can ride fast, turn corners, and stop safely. Dad no longer needs to hold my seat or walk beside me. “You're one of the best bike riders on our street, Zara,” Felix says. Today, our whole family rides bikes together around the neighborhood. I feel the wind in my hair and a big smile on my face. “I did it, I can really ride my bike!” I shout happily. Learning to ride my bike taught me that practice makes anything possible.",
    questions: [
      { text: "How long has it been since Zara got her bike?", answer: "One month." },
      { text: "What does Zara remember from the beginning?", answer: "Her first wobbly ride and her little fall." },
      { text: "What does the whole family do together?", answer: "Ride bikes together around the neighborhood." },
    ],
    trueFalse: [
      { text: "It has been one month.", answer: true },
      { text: "Zara still needs Dad to hold her seat.", answer: false },
      { text: "The family rides bikes together.", answer: true },
    ],
    buildSentence: [
      {
        target: "It has been one month since I got my new bike.",
        jumbled: ["I", "since", "month", "It", "has", "been", "bike.", "got", "one", "new", "my"],
      },
      {
        target: "I remember my first wobbly ride and my little fall.",
        jumbled: ["first", "my", "fall.", "my", "remember", "ride", "little", "and", "I", "wobbly"],
      },
      {
        target: "“You're one of the best bike riders on our street, Zara,” Felix says.",
        jumbled: ["street,", "Felix", "our", "best", "says.", "Zara,”", "“You're", "one", "riders", "of", "bike", "the", "on"],
      },
      {
        target: "I feel the wind in my hair and a big smile on my face.",
        jumbled: ["on", "my", "a", "smile", "big", "in", "feel", "and", "wind", "hair", "my", "the", "I", "face."],
      },
      {
        target: "“I did it, I can really ride my bike!” I shout happily.",
        jumbled: ["I", "bike!”", "happily.", "I", "“I", "ride", "shout", "did", "can", "really", "my", "it,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something practice helped you do.",
    mySentenceExample: "Practice helped me learn to ride my bike.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
