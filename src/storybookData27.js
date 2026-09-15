// A2 Kids digital storybook, Book 27: "My Little Brother's Birthday"
// Static content -- no Supabase. Fifth book in the A2 Kids batch
// (Books 23-30). Same structure/level as storybookData23.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook27/cover.jpg";

export const STORYBOOK_TITLE = "My Little Brother's Birthday";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Ella and her parents hanging colorful dinosaur-themed balloons and streamers in the living room, working quietly and quickly with excited grins.";

export const CHARACTERS = [
  { name: "Ella", role: "The narrator, a young girl", look: "Long brown hair, pink hoodie, thoughtful and caring older sister." },
  { name: "Max", role: "Ella's little brother, turning five", look: "Curly hair, dinosaur T-shirt, energetic and easily curious." },
  { name: "Mom", role: "Ella and Max's mother", look: "Apron, warm smile, organized and loving." },
  { name: "Dad", role: "Ella and Max's father", look: "Glasses, checkered shirt, funny and helpful." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Big Surprise Party",
    image: null,
    imageNote: "Mom whispering excitedly to Ella in the kitchen, a calendar on the wall with Max's birthday circled, Max playing obliviously in another room.",
    story:
      "Mom pulls me into the kitchen and closes the door quietly. “Max's birthday is next Saturday, and I want to plan a surprise party,” she whispers excitedly. My eyes light up immediately because I love surprises, especially for my little brother. “Can I help plan it?” I ask eagerly. “Of course, Ella! I need your help with everything,” Mom says, smiling warmly. We start making a list of things we need: decorations, a cake, and games. Keeping this secret from Max for a whole week feels like a big challenge, but I am determined to make his birthday unforgettable.",
    questions: [
      { text: "What does Mom want to plan for Max?", answer: "A surprise birthday party." },
      { text: "How does Ella feel about helping?", answer: "Excited." },
      { text: "What do Mom and Ella start making?", answer: "A list of things they need: decorations, a cake, and games." },
    ],
    trueFalse: [
      { text: "Mom wants to plan a surprise party for Max.", answer: true },
      { text: "Ella does not want to help at all.", answer: false },
      { text: "They start making a list of things they need.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mom pulls me into the kitchen and closes the door quietly.",
        jumbled: ["closes", "quietly.", "Mom", "pulls", "me", "into", "the", "kitchen", "the", "and", "door"],
      },
      {
        target: "“Max's birthday is next Saturday, and I want to plan a surprise party,” she whispers excitedly.",
        jumbled: ["birthday", "is", "I", "Saturday,", "plan", "excitedly.", "surprise", "whispers", "“Max's", "to", "and", "a", "want", "party,”", "she", "next"],
      },
      {
        target: "My eyes light up immediately because I love surprises, especially for my little brother.",
        jumbled: ["eyes", "light", "immediately", "especially", "surprises,", "I", "for", "My", "because", "my", "little", "love", "up", "brother."],
      },
      {
        target: "“Of course, Ella! I need your help with everything,” Mom says, smiling warmly.",
        jumbled: ["help", "says,", "your", "I", "Ella!", "everything,”", "Mom", "course,", "need", "smiling", "“Of", "warmly.", "with"],
      },
      {
        target: "Keeping this secret from Max for a whole week feels like a big challenge, but I am determined to make his birthday unforgettable.",
        jumbled: ["make", "week", "his", "for", "a", "am", "but", "to", "Max", "from", "whole", "big", "birthday", "this", "I", "a", "secret", "determined", "unforgettable.", "Keeping", "like", "feels", "challenge,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a surprise you planned for someone.",
    mySentenceExample: "I planned a surprise breakfast for my dad's birthday.",
  },
  {
    number: 2,
    title: "Making the Guest List",
    image: null,
    imageNote: "Ella and Mom sitting at the kitchen table writing names on a list, a crayon drawing of Max's friends taped to the fridge nearby.",
    story:
      "That evening, Mom and I sit at the kitchen table with a notebook, writing down names for the guest list. “Who are Max's best friends from preschool?” Mom asks me. I think carefully and name a few kids he always talks about, like Leo and Sofia. We also add our grandparents and Max's favorite cousin, Ben. “Don't forget Uncle Jake, he always makes Max laugh,” I remind Mom. By the end, our list has fifteen names on it. “This is going to be a wonderful party, Ella,” Mom says, and I nod eagerly, already imagining Max's excited face.",
    questions: [
      { text: "What do Mom and Ella write?", answer: "The guest list." },
      { text: "Who does Ella name as Max's friends?", answer: "Leo and Sofia." },
      { text: "How many names are on the final list?", answer: "Fifteen." },
    ],
    trueFalse: [
      { text: "Mom and Ella write a guest list together.", answer: true },
      { text: "Ella cannot remember any of Max's friends.", answer: false },
      { text: "The final list has fifteen names.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, Mom and I sit at the kitchen table with a notebook, writing down names for the guest list.",
        jumbled: ["with", "kitchen", "at", "guest", "list.", "I", "names", "the", "and", "notebook,", "table", "a", "writing", "That", "the", "for", "sit", "evening,", "down", "Mom"],
      },
      {
        target: "“Who are Max's best friends from preschool?” Mom asks me.",
        jumbled: ["friends", "Max's", "me.", "are", "from", "best", "“Who", "preschool?”", "asks", "Mom"],
      },
      {
        target: "I think carefully and name a few kids he always talks about, like Leo and Sofia.",
        jumbled: ["he", "and", "about,", "Leo", "talks", "kids", "I", "name", "think", "a", "like", "carefully", "few", "Sofia.", "always", "and"],
      },
      {
        target: "“Don't forget Uncle Jake, he always makes Max laugh,” I remind Mom.",
        jumbled: ["he", "remind", "makes", "Uncle", "Mom.", "laugh,”", "“Don't", "I", "Max", "forget", "Jake,", "always"],
      },
      {
        target: "“This is going to be a wonderful party, Ella,” Mom says, and I nod eagerly, already imagining Max's excited face.",
        jumbled: ["excited", "Ella,”", "going", "says,", "face.", "a", "be", "Mom", "already", "“This", "nod", "I", "eagerly,", "wonderful", "is", "Max's", "and", "imagining", "to", "party,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone you would invite to a party.",
    mySentenceExample: "I would invite my best friend to my party first.",
  },
  {
    number: 3,
    title: "Picking the Perfect Gift",
    image: null,
    imageNote: "Ella standing in a toy store aisle, comparing a toy dinosaur set and a dinosaur puzzle, thinking hard with a finger on her chin.",
    story:
      "On Wednesday, Dad takes me to the toy store to help pick Max's gift. “He loves dinosaurs more than anything,” I tell Dad, walking straight to that aisle. I see a large dinosaur toy set and also a colorful dinosaur puzzle, and I cannot decide which one Max would love more. “What does your gut tell you?” Dad asks, smiling. I remember how Max always pretends his toys are exploring, so I choose the dinosaur set with moving parts. “Perfect choice, Ella,” Dad says proudly. I feel confident that Max will absolutely love unwrapping this gift.",
    questions: [
      { text: "What does Max love more than anything?", answer: "Dinosaurs." },
      { text: "What two gifts does Ella consider?", answer: "A dinosaur toy set and a dinosaur puzzle." },
      { text: "Which gift does Ella finally choose?", answer: "The dinosaur set with moving parts." },
    ],
    trueFalse: [
      { text: "Max loves dinosaurs more than anything.", answer: true },
      { text: "Ella decides instantly without any thinking.", answer: false },
      { text: "Ella chooses the dinosaur set with moving parts.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Wednesday, Dad takes me to the toy store to help pick Max's gift.",
        jumbled: ["takes", "help", "On", "Dad", "me", "toy", "pick", "to", "Wednesday,", "the", "Max's", "to", "gift.", "store"],
      },
      {
        target: "“He loves dinosaurs more than anything,” I tell Dad, walking straight to that aisle.",
        jumbled: ["dinosaurs", "more", "Dad,", "straight", "aisle.", "loves", "“He", "tell", "walking", "than", "anything,”", "that", "to", "I"],
      },
      {
        target: "I see a large dinosaur toy set and also a colorful dinosaur puzzle, and I cannot decide which one Max would love more.",
        jumbled: ["love", "and", "Max", "set", "decide", "and", "I", "would", "colorful", "dinosaur", "one", "cannot", "which", "also", "toy", "a", "dinosaur", "I", "more.", "see", "puzzle,", "large", "a"],
      },
      {
        target: "I remember how Max always pretends his toys are exploring, so I choose the dinosaur set with moving parts.",
        jumbled: ["set", "I", "I", "his", "toys", "choose", "pretends", "remember", "parts.", "are", "always", "with", "so", "exploring,", "the", "Max", "dinosaur", "moving", "how"],
      },
      {
        target: "I feel confident that Max will absolutely love unwrapping this gift.",
        jumbled: ["Max", "this", "that", "will", "gift.", "feel", "unwrapping", "love", "confident", "I", "absolutely"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a gift you chose carefully for someone.",
    mySentenceExample: "I chose a book carefully for my friend who loves reading.",
  },
  {
    number: 4,
    title: "Decorating the House",
    image: null,
    imageNote: "Ella standing on a step stool taping green dinosaur streamers to the wall, Dad blowing up balloons nearby, both working quickly.",
    story:
      "On Saturday morning, Grandma takes Max to the park so we can decorate secretly. Dad and I work quickly, hanging green dinosaur streamers across the living room and tying colorful balloons to every chair. Mom arranges a big “Happy Birthday” banner above the fireplace, carefully checking that it hangs perfectly straight. “We only have two hours before they come back, Ella,” Dad reminds us, so we move even faster. By the time we finish, our living room looks like a magical dinosaur jungle. I feel so excited imagining Max's face when he walks through the door.",
    questions: [
      { text: "Where does Grandma take Max?", answer: "The park." },
      { text: "What do Dad and Ella hang around the room?", answer: "Green dinosaur streamers and balloons." },
      { text: "How much time do they have to decorate?", answer: "Two hours." },
    ],
    trueFalse: [
      { text: "Grandma takes Max to the park.", answer: true },
      { text: "They hang ocean-themed decorations instead of dinosaurs.", answer: false },
      { text: "They have two hours to decorate.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Saturday morning, Grandma takes Max to the park so we can decorate secretly.",
        jumbled: ["secretly.", "Grandma", "so", "park", "Saturday", "the", "morning,", "On", "takes", "decorate", "we", "to", "Max", "can"],
      },
      {
        target: "Dad and I work quickly, hanging green dinosaur streamers across the living room and tying colorful balloons to every chair.",
        jumbled: ["room", "tying", "Dad", "green", "living", "and", "the", "balloons", "to", "I", "every", "quickly,", "and", "chair.", "hanging", "colorful", "dinosaur", "across", "work", "streamers"],
      },
      {
        target: "Mom arranges a big “Happy Birthday” banner above the fireplace, carefully checking that it hangs perfectly straight.",
        jumbled: ["it", "arranges", "the", "“Happy", "a", "big", "checking", "perfectly", "fireplace,", "Birthday”", "hangs", "Mom", "banner", "that", "carefully", "above", "straight."],
      },
      {
        target: "“We only have two hours before they come back, Ella,” Dad reminds us, so we move even faster.",
        jumbled: ["only", "have", "back,", "come", "faster.", "Dad", "so", "even", "before", "two", "hours", "reminds", "“We", "we", "they", "move", "Ella,”", "us,"],
      },
      {
        target: "By the time we finish, our living room looks like a magical dinosaur jungle.",
        jumbled: ["living", "room", "finish,", "the", "jungle.", "like", "a", "dinosaur", "we", "our", "looks", "time", "magical", "By"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about decorating a room for a special event.",
    mySentenceExample: "We decorated our classroom for the winter holiday party.",
  },
  {
    number: 5,
    title: "The Cake Mishap",
    image: null,
    imageNote: "Mom looking worried at a slightly sunken chocolate cake on the kitchen counter, Ella holding a bag of decorating candy, ready to help fix it.",
    story:
      "While we finish decorating, Mom calls me into the kitchen with a worried voice. “The cake sank in the middle, Ella,” she says, pointing at the slightly lopsided chocolate cake. My heart drops for a moment, but then I have an idea. “What if we cover the middle with candy and dinosaur figures?” I suggest. Mom's face brightens instantly. Together, we pile colorful candy and small plastic dinosaurs right over the sunken part, and honestly, it looks even better than a plain cake. “Problems have solutions,” Mom says, laughing with relief, and I feel proud we fixed it together.",
    questions: [
      { text: "What problem happens with the cake?", answer: "It sinks in the middle." },
      { text: "What idea does Ella suggest?", answer: "Cover the middle with candy and dinosaur figures." },
      { text: "How does the fixed cake look?", answer: "Even better than a plain cake." },
    ],
    trueFalse: [
      { text: "The cake sank in the middle.", answer: true },
      { text: "Ella has no ideas about how to fix it.", answer: false },
      { text: "The fixed cake looks even better than before.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mom calls me into the kitchen with a worried voice.",
        jumbled: ["calls", "me", "worried", "Mom", "kitchen", "with", "into", "voice.", "a", "the"],
      },
      {
        target: "“The cake sank in the middle, Ella,” she says, pointing at the slightly lopsided chocolate cake.",
        jumbled: ["cake", "chocolate", "middle,", "she", "slightly", "the", "pointing", "in", "cake.", "the", "says,", "Ella,”", "lopsided", "“The", "at", "sank"],
      },
      {
        target: "“What if we cover the middle with candy and dinosaur figures?”",
        jumbled: ["dinosaur", "and", "if", "the", "candy", "with", "middle", "figures?”", "cover", "“What", "we"],
      },
      {
        target: "Mom's face brightens instantly.",
        jumbled: ["brightens", "instantly.", "Mom's", "face"],
      },
      {
        target: "Together, we pile colorful candy and small plastic dinosaurs right over the sunken part, and honestly, it looks even better than a plain cake.",
        jumbled: ["right", "even", "a", "candy", "we", "honestly,", "and", "plastic", "looks", "the", "and", "over", "small", "than", "better", "plain", "dinosaurs", "colorful", "it", "sunken", "cake.", "Together,", "part,", "pile"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a mistake you fixed with a good idea.",
    mySentenceExample: "I fixed my drawing mistake by turning it into a funny animal.",
  },
  {
    number: 6,
    title: "Keeping the Secret",
    image: null,
    imageNote: "Ella hiding a wrapped gift behind her back and smiling nervously at Max, who looks at her with curious suspicion.",
    story:
      "Right before Grandma brings Max home, Dad quickly hides the decorations behind closed doors, and we all act normal. When Max walks in, he looks at me curiously. “Why are you smiling so weird, Ella?” he asks suspiciously. “No reason!” I say too quickly, trying not to laugh. He almost walks toward the living room, but I distract him by asking about his time at the park instead. My heart beats fast, worried he might discover our secret too early. Thankfully, he gets distracted talking about the ducks he saw, and the surprise stays safe for now.",
    questions: [
      { text: "What does Max notice about Ella?", answer: "That she is smiling weirdly." },
      { text: "What does Ella say when Max asks why she's smiling?", answer: "No reason!" },
      { text: "How does Ella distract Max?", answer: "By asking about his time at the park." },
    ],
    trueFalse: [
      { text: "Max notices Ella smiling strangely.", answer: true },
      { text: "Ella tells Max about the party immediately.", answer: false },
      { text: "Ella distracts Max by asking about the park.", answer: true },
    ],
    buildSentence: [
      {
        target: "Right before Grandma brings Max home, Dad quickly hides the decorations behind closed doors, and we all act normal.",
        jumbled: ["normal.", "Dad", "doors,", "behind", "Grandma", "hides", "quickly", "before", "and", "Max", "we", "all", "Right", "brings", "decorations", "the", "closed", "act", "home,"],
      },
      {
        target: "He looks at me curiously.",
        jumbled: ["He", "me", "looks", "curiously.", "at"],
      },
      {
        target: "“Why are you smiling so weird, Ella?” he asks suspiciously.",
        jumbled: ["weird,", "suspiciously.", "you", "he", "Ella?”", "“Why", "so", "asks", "are", "smiling"],
      },
      {
        target: "He almost walks toward the living room, but I distract him by asking about his time at the park instead.",
        jumbled: ["the", "about", "park", "asking", "the", "instead.", "almost", "toward", "at", "room,", "He", "living", "I", "time", "his", "walks", "but", "by", "him", "distract"],
      },
      {
        target: "Thankfully, he gets distracted talking about the ducks he saw, and the surprise stays safe for now.",
        jumbled: ["distracted", "stays", "the", "safe", "ducks", "gets", "he", "he", "about", "talking", "Thankfully,", "for", "and", "the", "saw,", "now.", "surprise"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a secret you kept for someone.",
    mySentenceExample: "I kept a secret about my sister's surprise gift.",
  },
  {
    number: 7,
    title: "Hiding Everyone",
    image: null,
    imageNote: "Family members and friends crouching quietly behind the couch and kitchen counter, all holding back giggles as they wait in the dim living room.",
    story:
      "While Max naps for his afternoon rest, guests slowly start arriving through the back door to stay quiet. Leo, Sofia, Ben, and even Uncle Jake tiptoe inside, trying hard not to giggle too loudly. “Everyone, hide behind the couch and the kitchen counter,” Dad whispers, turning to me. “Get ready, Ella,” he adds, turning off the living room lights. I peek through the curtains and see Grandma walking Max toward the front door, right on schedule. My stomach feels full of nervous butterflies as everyone crouches down, holding their breath, waiting for the perfect moment to surprise my little brother.",
    questions: [
      { text: "What are the guests trying to do quietly?", answer: "Arrive and hide without giggling too loudly." },
      { text: "Where does everyone hide?", answer: "Behind the couch and the kitchen counter." },
      { text: "What does Ella see through the curtains?", answer: "Grandma walking Max toward the front door." },
    ],
    trueFalse: [
      { text: "Guests arrive through the back door quietly.", answer: true },
      { text: "Everyone stands right in the middle of the room.", answer: false },
      { text: "Ella sees Grandma walking Max toward the door.", answer: true },
    ],
    buildSentence: [
      {
        target: "Guests slowly start arriving through the back door to stay quiet.",
        jumbled: ["start", "through", "to", "quiet.", "the", "slowly", "arriving", "door", "stay", "back", "Guests"],
      },
      {
        target: "Leo, Sofia, Ben, and even Uncle Jake tiptoe inside, trying hard not to giggle too loudly.",
        jumbled: ["trying", "Uncle", "even", "Sofia,", "giggle", "Jake", "and", "too", "tiptoe", "not", "hard", "Ben,", "inside,", "to", "Leo,", "loudly."],
      },
      {
        target: "“Everyone, hide behind the couch and the kitchen counter,” Dad whispers, turning to me.",
        jumbled: ["and", "Dad", "whispers,", "“Everyone,", "turning", "counter,”", "the", "kitchen", "to", "behind", "the", "me.", "hide", "couch"],
      },
      {
        target: "“Get ready, Ella,” he adds, turning off the living room lights.",
        jumbled: ["“Get", "Ella,”", "living", "lights.", "he", "ready,", "the", "room", "off", "adds,", "turning"],
      },
      {
        target: "My stomach feels full of nervous butterflies as everyone crouches down, holding their breath, waiting for the perfect moment to surprise my little brother.",
        jumbled: ["down,", "to", "full", "feels", "of", "moment", "waiting", "perfect", "little", "as", "crouches", "My", "brother.", "stomach", "the", "holding", "surprise", "my", "for", "breath,", "their", "nervous", "butterflies", "everyone"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you waited nervously for something.",
    mySentenceExample: "I waited nervously for my test results at school.",
  },
  {
    number: 8,
    title: "Surprise!",
    image: null,
    imageNote: "Max standing in the doorway with a shocked, delighted expression, everyone jumping out from hiding with confetti in the air, Ella laughing beside him.",
    story:
      "The front door opens, and Max steps inside, rubbing his sleepy eyes. Suddenly, everyone jumps out from their hiding spots. “SURPRISE!” we all shout together, throwing confetti into the air. Max freezes for a moment, completely shocked, and then a huge smile spreads across his face. “This is for me?” he asks in disbelief, looking around at all his friends and family. “Happy birthday, Max!” I shout, hugging him tightly. His eyes fill with happy tears, and he hugs me back even tighter. “Way to go, Ella!” Dad calls out, grinning as confetti settles around us. Watching his reaction makes every bit of planning completely worth it.",
    questions: [
      { text: "What does Max do when he steps inside?", answer: "Rubs his sleepy eyes, then freezes in shock." },
      { text: "How does Max react to the surprise?", answer: "A huge smile spreads and his eyes fill with happy tears." },
      { text: "What does Ella feel after seeing Max's reaction?", answer: "That every bit of planning was worth it." },
    ],
    trueFalse: [
      { text: "Everyone shouts 'Surprise!' when Max walks in.", answer: true },
      { text: "Max feels nothing special about the surprise.", answer: false },
      { text: "Ella feels the planning was worth it.", answer: true },
    ],
    buildSentence: [
      {
        target: "The front door opens, and Max steps inside, rubbing his sleepy eyes.",
        jumbled: ["steps", "rubbing", "his", "The", "and", "front", "inside,", "door", "opens,", "Max", "sleepy", "eyes."],
      },
      {
        target: "“SURPRISE!” we all shout together, throwing confetti into the air.",
        jumbled: ["we", "shout", "air.", "throwing", "the", "“SURPRISE!”", "confetti", "together,", "all", "into"],
      },
      {
        target: "Max freezes for a moment, completely shocked, and then a huge smile spreads across his face.",
        jumbled: ["huge", "for", "freezes", "across", "completely", "a", "and", "face.", "shocked,", "smile", "a", "moment,", "Max", "spreads", "then", "his"],
      },
      {
        target: "His eyes fill with happy tears, and he hugs me back even tighter.",
        jumbled: ["even", "happy", "hugs", "His", "fill", "and", "me", "back", "he", "tears,", "with", "eyes", "tighter."],
      },
      {
        target: "“Way to go, Ella!” Dad calls out, grinning as confetti settles around us.",
        jumbled: ["to", "around", "Dad", "out,", "“Way", "go,", "settles", "grinning", "confetti", "as", "us.", "calls", "Ella!”"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about the happiest surprise you ever received.",
    mySentenceExample: "The happiest surprise I ever received was a puppy for my birthday.",
  },
  {
    number: 9,
    title: "Party Games",
    image: null,
    imageNote: "Max and his friends laughing while playing a dinosaur-themed pin-the-tail game, blindfolded and spinning, other kids cheering around them.",
    story:
      "After the surprise, we move outside for party games in the backyard. We play a dinosaur-themed version of pin-the-tail, where each blindfolded kid tries to stick a paper tail on a giant dinosaur poster. Max giggles uncontrollably as Leo spins in the wrong direction completely. Next, we play musical chairs, and Sofia wins after a fierce final round against Ben. Everyone laughs, cheers, and claps throughout the games. “This is the best day, Ella!” Max shouts between rounds. Watching Max laugh so freely with his friends fills me with warmth, and I realize this party is turning out even better than I imagined.",
    questions: [
      { text: "What game do they play involving a dinosaur poster?", answer: "Pin-the-tail." },
      { text: "Who wins the musical chairs game?", answer: "Sofia." },
      { text: "How does Ella feel watching Max laugh?", answer: "Filled with warmth." },
    ],
    trueFalse: [
      { text: "They play a dinosaur pin-the-tail game.", answer: true },
      { text: "No one wins the musical chairs game.", answer: false },
      { text: "Ella feels warmth watching Max laugh.", answer: true },
    ],
    buildSentence: [
      {
        target: "We move outside for party games in the backyard.",
        jumbled: ["in", "outside", "for", "move", "backyard.", "the", "party", "We", "games"],
      },
      {
        target: "We play a dinosaur-themed version of pin-the-tail, where each blindfolded kid tries to stick a paper tail on a giant dinosaur poster.",
        jumbled: ["kid", "dinosaur", "tries", "We", "blindfolded", "each", "giant", "dinosaur-themed", "a", "play", "paper", "of", "a", "stick", "poster.", "tail", "on", "a", "where", "version", "pin-the-tail,", "to"],
      },
      {
        target: "Next, we play musical chairs, and Sofia wins after a fierce final round against Ben.",
        jumbled: ["Sofia", "and", "Ben.", "after", "wins", "fierce", "a", "play", "chairs,", "final", "Next,", "musical", "round", "against", "we"],
      },
      {
        target: "Everyone laughs, cheers, and claps throughout the games.",
        jumbled: ["Everyone", "games.", "cheers,", "throughout", "laughs,", "claps", "and", "the"],
      },
      {
        target: "Watching Max laugh so freely with his friends fills me with warmth, and I realize this party is turning out even better than I imagined.",
        jumbled: ["laugh", "warmth,", "so", "out", "turning", "with", "me", "realize", "this", "fills", "Watching", "with", "freely", "better", "imagined.", "party", "and", "friends", "is", "Max", "his", "than", "I", "I", "even"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a fun game you played at a party.",
    mySentenceExample: "I played a fun game of musical chairs at my cousin's party.",
  },
  {
    number: 10,
    title: "Best Birthday Ever",
    image: null,
    imageNote: "Max hugging Ella tightly on the couch at the end of the party, wrapping paper and the dinosaur toy set scattered happily around them.",
    story:
      "As the party winds down and guests say their goodbyes, Max climbs onto the couch beside me, clutching his new dinosaur toy set tightly. “This was the best birthday ever,” he says, resting his head on my shoulder. “I helped plan the whole thing,” I tell him proudly, and his eyes widen with surprise. “You did? Thank you, Ella!” he says, hugging me tightly around the neck. Sitting there together, surrounded by wrapping paper and leftover balloons, I feel closer to my little brother than ever before. Some memories, I realize, are worth every bit of secret planning.",
    questions: [
      { text: "What does Max say about his birthday?", answer: "That it was the best birthday ever." },
      { text: "What does Ella tell Max?", answer: "That she helped plan the whole thing." },
      { text: "How does Ella feel by the end of the day?", answer: "Closer to her little brother than ever before." },
    ],
    trueFalse: [
      { text: "Max says this was the best birthday ever.", answer: true },
      { text: "Ella never tells Max that she helped plan it.", answer: false },
      { text: "Ella feels closer to her brother by the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Max climbs onto the couch beside me, clutching his new dinosaur toy set tightly.",
        jumbled: ["set", "toy", "climbs", "his", "onto", "dinosaur", "tightly.", "clutching", "Max", "me,", "new", "couch", "the", "beside"],
      },
      {
        target: "“This was the best birthday ever,” he says, resting his head on my shoulder.",
        jumbled: ["resting", "ever,”", "the", "head", "he", "“This", "my", "on", "was", "shoulder.", "his", "best", "says,", "birthday"],
      },
      {
        target: "“I helped plan the whole thing,” I tell him proudly, and his eyes widen with surprise.",
        jumbled: ["his", "I", "and", "plan", "helped", "proudly,", "“I", "eyes", "widen", "the", "surprise.", "him", "whole", "thing,”", "tell", "with"],
      },
      {
        target: "“You did? Thank you, Ella!” he says, hugging me tightly around the neck.",
        jumbled: ["he", "says,", "me", "Thank", "hugging", "“You", "you,", "the", "did?", "neck.", "tightly", "around", "Ella!”"],
      },
      {
        target: "Sitting there together, surrounded by wrapping paper and leftover balloons, I feel closer to my little brother than ever before.",
        jumbled: ["ever", "by", "and", "to", "wrapping", "before.", "there", "paper", "little", "closer", "together,", "my", "than", "Sitting", "leftover", "balloons,", "brother", "surrounded", "feel", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a memory that made you feel close to a family member.",
    mySentenceExample: "Baking cookies with my grandma made me feel very close to her.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
