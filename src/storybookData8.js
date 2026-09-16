// A2 Adults digital storybook, Book 8: "A Good Week at the Shop"
// Static content -- no Supabase, mirrors the pattern in storybookData7.js.
// Like Book 7, this book's narrator, Casey, is an adult worker and stays
// gender-neutral throughout -- no gendered pronoun is ever used for Casey
// in the story, only their name (manager Ms. Cruz is explicitly "she").
import coverImg from "./assets/storybook8/cover.jpg";

export const STORYBOOK_TITLE = "A Good Week at the Shop";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Casey standing behind the counter of a small neighborhood shop, smiling at the door, shelves of bottles and boxes neatly stocked behind them, morning light through the front window.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Casey", role: "A shop worker, new to the job", look: "Neutral work apron over simple clothes, calm and attentive expression, gender-neutral by design -- the story never uses a pronoun for Casey, only their name." },
  { name: "Ms. Cruz", role: "Casey's manager", look: "Apron with the shop's colors, hair tied back, kind but always a little busy." },
  { name: "Ben", role: "Casey's coworker", look: "Simple work shirt, easygoing and friendly, quick with a joke." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Morning at the Shop",
    image: null,
    imageNote: "Casey unlocking the glass door of a small shop early in the morning, Ms. Cruz already inside smiling, quiet empty street visible outside.",
    story:
      "Every weekday, I wake up early and get ready for work. I put on my clean shirt, eat a quick breakfast, and leave my apartment before seven. The shop is only ten minutes away, so I walk there with my bag on my shoulder. When I arrive, the street is still quiet, and the glass door is closed. My manager is already inside, and she smiles when she sees me. “Good morning, Casey,” she says, and I wave back. I unlock the door, turn on the lights, and help open the shop for the day. Then I check the shelves and move some bottles and boxes into the right place. A few minutes later, the first customer comes in and says, “Good morning.” I smile and say, “Good morning, how can I help you?” As the day begins, I feel a little busy, but I am ready to help people at the shop.",
    questions: [
      { text: "How does Casey go to the shop?", answer: "They walk." },
      { text: "Who is already inside the shop?", answer: "The manager." },
      { text: "What does Casey say to the first customer?", answer: "Good morning, how can I help you?" },
    ],
    trueFalse: [
      { text: "The shop is ten minutes away from Casey's apartment.", answer: true },
      { text: "Casey closes the shop when they arrive.", answer: false },
      { text: "Casey feels ready to help people at the end.", answer: true },
      { text: "Ms. Cruz is already inside when Casey arrives.", answer: true },
      { text: "Casey ignores the shelves.", answer: false },
    ],
    buildSentence: [
      {
        target: "I put on my clean shirt, eat a quick breakfast, and leave my apartment before seven.",
        jumbled: ["a", "my", "apartment", "quick", "my", "leave", "clean", "on", "seven.", "shirt,", "put", "I", "eat", "and", "before", "breakfast,"],
      },
      {
        target: "The shop is only ten minutes away, so I walk there with my bag on my shoulder.",
        jumbled: ["is", "I", "so", "my", "shop", "walk", "bag", "ten", "on", "only", "shoulder.", "with", "away,", "The", "there", "minutes", "my"],
      },
      {
        target: "My manager is already inside, and she smiles when she sees me.",
        jumbled: ["manager", "and", "when", "smiles", "she", "she", "already", "My", "me.", "inside,", "sees", "is"],
      },
      {
        target: "I unlock the door, turn on the lights, and help open the shop for the day.",
        jumbled: ["I", "shop", "on", "the", "lights,", "turn", "and", "the", "help", "for", "the", "open", "unlock", "door,", "the", "day."],
      },
      {
        target: "I feel a little busy, but I am ready to help people at the shop.",
        jumbled: ["I", "at", "feel", "am", "shop.", "the", "ready", "to", "people", "little", "I", "a", "but", "help", "busy,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about helping customers.",
    mySentenceExample: "I smile when I help a customer in the shop.",
  },
  {
    number: 2,
    title: "Opening the Shop",
    image: null,
    imageNote: "Casey and Ms. Cruz opening the shop together -- Ms. Cruz counting money at the cashier, Casey taking chairs down, Ben checking the drinks fridge near the door.",
    story:
      "On Tuesday, I arrive at the shop a few minutes early with my manager. Her name is Ms. Cruz, and she is kind but always busy in the morning. First, we open the big glass door and switch on all the lights. I take the chairs down and put them near the small tables by the wall. Ms. Cruz counts the money in the cashier and writes it in a small book. My coworker Ben checks the cold drinks in the fridge near the door. I use a soft cloth to clean the counter and the front window. Outside, I can see the first people walking to work on the street. When everything is ready, Ms. Cruz says, “Good job, Casey, we are open now.” As we open the shop together, I feel proud because our team is ready for the day.",
    questions: [
      { text: "What is the manager's name?", answer: "Ms. Cruz." },
      { text: "What does Ms. Cruz count in the cashier?", answer: "The money." },
      { text: "What does Casey use to clean the counter and window?", answer: "A soft cloth." },
    ],
    trueFalse: [
      { text: "Casey arrives a few minutes early.", answer: true },
      { text: "Ben counts the money in the cashier.", answer: false },
      { text: "Casey feels proud when the shop is ready.", answer: true },
      { text: "Ben checks the drinks in the fridge.", answer: true },
      { text: "Ms. Cruz is never busy in the morning.", answer: false },
    ],
    buildSentence: [
      {
        target: "Her name is Ms. Cruz, and she is kind but always busy in the morning.",
        jumbled: ["in", "morning.", "but", "the", "kind", "name", "always", "Cruz,", "Ms.", "is", "Her", "and", "is", "busy", "she"],
      },
      {
        target: "I take the chairs down and put them near the small tables by the wall.",
        jumbled: ["near", "chairs", "tables", "take", "put", "the", "small", "the", "wall.", "them", "by", "I", "and", "the", "down"],
      },
      {
        target: "Ms. Cruz counts the money in the cashier and writes it in a small book.",
        jumbled: ["it", "money", "in", "counts", "book.", "in", "cashier", "the", "the", "a", "and", "small", "Cruz", "Ms.", "writes"],
      },
      {
        target: "I use a soft cloth to clean the counter and the front window.",
        jumbled: ["I", "cloth", "and", "the", "to", "front", "soft", "the", "a", "window.", "use", "clean", "counter"],
      },
      {
        target: "I feel proud because our team is ready for the day.",
        jumbled: ["feel", "team", "for", "day.", "our", "proud", "is", "the", "I", "ready", "because"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about starting your workday.",
    mySentenceExample: "I clean the counter before we open the shop.",
  },
  {
    number: 3,
    title: "Helping the First Customers",
    image: null,
    imageNote: "Casey showing a young woman a shelf of fresh bread, an old man nearby at the fridge being helped to find milk, Ben helping another customer with fruit at the front table.",
    story:
      "In the morning, the shop is quiet, and then the first customers come in. A young woman walks in and says, “Good morning, I need some bread.” I show her the shelf with fresh bread near the back of the shop. She chooses two loaves and thanks me with a friendly smile. Next, an old man comes in and asks for milk and eggs. I walk with him to the fridge and help him find the fresh milk. He says, “Thank you, you are very kind, Casey,” and I feel happy inside. Ben helps another customer choose some fruit near the front table. The shop slowly fills with people, and everyone talks in soft voices. I move quickly and help each person with a smile and a kind word. As I help the first customers, I feel useful because people are glad for my help.",
    questions: [
      { text: "What does the young woman need?", answer: "Some bread." },
      { text: "What does the old man ask for?", answer: "Milk and eggs." },
      { text: "What does Ben help another customer choose?", answer: "Fruit." },
    ],
    trueFalse: [
      { text: "The young woman needs some bread.", answer: true },
      { text: "The old man asks for shoes and a hat.", answer: false },
      { text: "Casey feels useful because people are glad for the help.", answer: true },
      { text: "The old man asks for milk and eggs.", answer: true },
      { text: "Ben does not help any customers.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the morning, the shop is quiet, and then the first customers come in.",
        jumbled: ["morning,", "the", "In", "first", "in.", "customers", "the", "quiet,", "the", "is", "and", "come", "then", "shop"],
      },
      {
        target: "I show her the shelf with fresh bread near the back of the shop.",
        jumbled: ["of", "her", "show", "with", "near", "the", "the", "fresh", "the", "back", "I", "bread", "shop.", "shelf"],
      },
      {
        target: "I walk with him to the fridge and help him find the fresh milk.",
        jumbled: ["him", "fresh", "fridge", "him", "with", "walk", "help", "I", "find", "and", "the", "the", "to", "milk."],
      },
      {
        target: "He says, “Thank you, you are very kind, Casey,” and I feel happy inside.",
        jumbled: ["says,", "kind,", "you,", "and", "very", "I", "happy", "you", "are", "“Thank", "feel", "Casey,”", "inside.", "He"],
      },
      {
        target: "I feel useful because people are glad for my help.",
        jumbled: ["for", "help.", "I", "feel", "useful", "are", "people", "because", "glad", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about helping someone find something.",
    mySentenceExample: "I help customers find the food they need.",
  },
  {
    number: 4,
    title: "Finding an Item for a Customer",
    image: null,
    imageNote: "Casey searching through boxes in a storage room at the back of the shop, a worried-looking man waiting near the counter up front, a small pack of batteries visible on a high shelf.",
    story:
      "In the afternoon, a man comes in and looks around the shop with a worried face. He says, “Excuse me, do you have any batteries for a clock?” I am not sure, so I say, “Let me check for you, please wait one minute.” I look on the small shelf near the counter, but I do not see them there. Then I remember a box in the storage room at the back. I walk to the storage room and search the boxes one by one. Finally, I find a small pack of clock batteries on a high shelf. I bring them to the man and say, “Here you are, is this the right one?” He smiles and says, “Yes, thank you so much for looking, Casey.” As the man leaves happy, I feel proud because I did not give up on his question.",
    questions: [
      { text: "What does the man ask for?", answer: "Batteries for a clock." },
      { text: "Where does Casey finally find the batteries?", answer: "In a box in the storage room, on a high shelf." },
      { text: "What does the man say at the end?", answer: "Yes, thank you so much for looking." },
    ],
    trueFalse: [
      { text: "The man asks for batteries for a clock.", answer: true },
      { text: "Casey finds the batteries on the first shelf.", answer: false },
      { text: "Casey feels proud because they did not give up.", answer: true },
      { text: "Casey searches boxes in the storage room.", answer: true },
      { text: "The man leaves angry at the end.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the afternoon, a man comes in and looks around the shop with a worried face.",
        jumbled: ["a", "man", "in", "the", "shop", "worried", "comes", "the", "looks", "a", "face.", "and", "In", "with", "afternoon,", "around"],
      },
      {
        target: "I am not sure, so I say, “Let me check for you, please wait one minute.”",
        jumbled: ["one", "am", "please", "“Let", "wait", "you,", "so", "I", "check", "me", "sure,", "not", "minute.”", "say,", "for", "I"],
      },
      {
        target: "I walk to the storage room and search the boxes one by one.",
        jumbled: ["storage", "one.", "one", "I", "boxes", "the", "the", "by", "walk", "room", "search", "to", "and"],
      },
      {
        target: "I bring them to the man and say, “Here you are, is this the right one?”",
        jumbled: ["man", "them", "one?”", "I", "you", "and", "bring", "the", "the", "are,", "to", "this", "“Here", "say,", "is", "right"],
      },
      {
        target: "I feel proud because I did not give up on his question.",
        jumbled: ["proud", "because", "did", "his", "up", "on", "feel", "give", "question.", "I", "I", "not"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finding something for someone.",
    mySentenceExample: "I look everywhere to help a customer.",
  },
  {
    number: 5,
    title: "Working at the Cashier",
    image: null,
    imageNote: "Casey at the cashier scanning items for a customer, a line of people waiting behind, bread milk and juice on the counter, a card-payment terminal visible.",
    story:
      "Today, Ms. Cruz asks me to work at the cashier near the door. “You can do this, Casey,” she adds with a smile. A line of customers waits, so I take a deep breath and smile. The first customer puts bread, milk, and juice on the counter. I scan each item slowly and read the price on the screen. I tell her, “That is three hundred pesos, please,” in a clear voice. She gives me the money, and I count her change carefully into her hand. I put her food in a bag and say, “Thank you, have a nice day.” The next customer pays with a card, so I show him where to tap it. I help each person in the line, one by one, without any big mistakes. As the line grows shorter, I feel confident because I can work the cashier well.",
    questions: [
      { text: "What does Ms. Cruz ask Casey to do today?", answer: "Work at the cashier." },
      { text: "What does the first customer put on the counter?", answer: "Bread, milk, and juice." },
      { text: "How does the next customer pay?", answer: "With a card." },
    ],
    trueFalse: [
      { text: "Casey works at the cashier today.", answer: true },
      { text: "Casey makes many big mistakes at the cashier.", answer: false },
      { text: "Casey feels confident at the end.", answer: true },
      { text: "The first customer puts bread, milk, and juice on the counter.", answer: true },
      { text: "No one pays with a card today.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today, Ms. Cruz asks me to work at the cashier near the door.",
        jumbled: ["near", "Ms.", "cashier", "to", "asks", "work", "the", "Today,", "Cruz", "me", "door.", "the", "at"],
      },
      {
        target: "A line of customers waits, so I take a deep breath and smile.",
        jumbled: ["so", "of", "breath", "and", "deep", "a", "waits,", "smile.", "A", "customers", "take", "line", "I"],
      },
      {
        target: "I tell her, “That is three hundred pesos, please,” in a clear voice.",
        jumbled: ["clear", "hundred", "her,", "tell", "in", "please,”", "voice.", "three", "“That", "pesos,", "a", "I", "is"],
      },
      {
        target: "I put her food in a bag and say, “Thank you, have a nice day.”",
        jumbled: ["I", "you,", "say,", "nice", "her", "put", "“Thank", "food", "have", "in", "a", "day.”", "a", "and", "bag"],
      },
      {
        target: "The next customer pays with a card, so I show him where to tap it.",
        jumbled: ["show", "where", "a", "him", "customer", "with", "tap", "I", "so", "card,", "next", "pays", "to", "The", "it."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about paying or giving change.",
    mySentenceExample: "I count the change carefully for each customer.",
  },
  {
    number: 6,
    title: "A Difficult Customer",
    image: null,
    imageNote: "Casey calmly speaking to an angry-looking customer holding a small bag near the counter, walking with him to the fridge to show him different drink flavors.",
    story:
      "In the afternoon, a customer comes in with an angry face and a small bag. He says, “This drink is wrong, I did not want this one.” His voice is loud, and some other customers look at us. I stay calm and say, “I am sorry, sir, let me help you with that.” I look in the bag and see that he has the wrong flavour of juice. I say, “No problem, you can choose the drink you really want.” I walk with him to the fridge and show him the different flavours. He picks the right one, and slowly his angry face becomes calm. I change it at the cashier and say, “I am sorry for the mistake.” He says, “Thank you, you are very patient, Casey,” and leaves the shop happy. As he walks out, I feel proud because I stayed calm and solved the problem.",
    questions: [
      { text: "Why is the customer angry?", answer: "Because he got the wrong flavour of juice." },
      { text: "How does Casey speak to the angry customer?", answer: "Calmly." },
      { text: "What does the customer say before he leaves?", answer: "Thank you, you are very patient." },
    ],
    trueFalse: [
      { text: "The customer has the wrong flavour of juice.", answer: true },
      { text: "Casey shouts back at the angry customer.", answer: false },
      { text: "Casey feels proud because they stayed calm.", answer: true },
      { text: "Casey stays calm with the angry customer.", answer: true },
      { text: "The customer stays angry at the end.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the afternoon, a customer comes in with an angry face and a small bag.",
        jumbled: ["angry", "the", "and", "a", "small", "customer", "bag.", "comes", "in", "a", "afternoon,", "face", "an", "with", "In"],
      },
      {
        target: "I stay calm and say, “I am sorry, sir, let me help you with that.”",
        jumbled: ["say,", "calm", "sorry,", "help", "stay", "am", "and", "me", "you", "sir,", "that.”", "let", "I", "with", "“I"],
      },
      {
        target: "I look in the bag and see that he has the wrong flavour of juice.",
        jumbled: ["look", "see", "flavour", "wrong", "I", "and", "he", "juice.", "of", "bag", "the", "that", "the", "in", "has"],
      },
      {
        target: "I walk with him to the fridge and show him the different flavours.",
        jumbled: ["the", "and", "I", "him", "walk", "with", "him", "to", "flavours.", "show", "different", "fridge", "the"],
      },
      {
        target: "I change it at the cashier and say, “I am sorry for the mistake.”",
        jumbled: ["change","sorry","mistake.”","the","it","for","“I","the","I","say,","cashier","and","am","at"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about staying calm with a difficult person.",
    mySentenceExample: "I stay calm and kind with every customer.",
  },
  {
    number: 7,
    title: "Lunch Break Behind the Shop",
    image: null,
    imageNote: "Casey and Ben sitting on small chairs in a room behind the shop, lunch boxes with rice and fish open, both laughing near a window.",
    story:
      "At one o'clock, Ms. Cruz says, “You can take your lunch break now, Casey.” I walk to the small room behind the shop, where we keep our bags. Ben is already there, eating rice and vegetables from his lunch box. I open my own lunch box and take out rice, fish, and a banana. We sit on two small chairs near the window and eat together. Ben tells me a funny story about a customer from last week. I laugh and share some of my banana with him for dessert. We talk about our families, our plans, and the busy morning at the shop. After thirty minutes, we wash our hands and get ready for the afternoon. As I finish my lunch, I feel rested and happy to work with a good coworker.",
    questions: [
      { text: "What time is the lunch break?", answer: "One o'clock." },
      { text: "Where does Casey eat lunch?", answer: "In the small room behind the shop." },
      { text: "What does Ben tell Casey during lunch?", answer: "A funny story about a customer from last week." },
    ],
    trueFalse: [
      { text: "Casey eats lunch in the room behind the shop.", answer: true },
      { text: "Casey eats lunch alone in the storage room.", answer: false },
      { text: "Casey feels rested and happy at the end.", answer: true },
      { text: "Ben eats rice and vegetables.", answer: true },
      { text: "Casey eats lunch standing at the counter.", answer: false },
    ],
    buildSentence: [
      {
        target: "At one o'clock, Ms. Cruz says, “You can take your lunch break now, Casey.”",
        jumbled: ["can", "Ms.", "says,", "lunch", "Casey.”", "take", "break", "“You", "one", "o'clock,", "At", "Cruz", "now,", "your"],
      },
      {
        target: "I open my own lunch box and take out rice, fish, and a banana.",
        jumbled: ["and", "fish,", "take", "banana.", "I", "open", "rice,", "my", "a", "and", "lunch", "box", "own", "out"],
      },
      {
        target: "We sit on two small chairs near the window and eat together.",
        jumbled: ["small", "window", "together.", "near", "and", "sit", "two", "We", "eat", "on", "the", "chairs"],
      },
      {
        target: "We talk about our families, our plans, and the busy morning at the shop.",
        jumbled: ["at", "families,", "busy", "morning", "the", "shop.", "our", "plans,", "the", "talk", "and", "We", "our", "about"],
      },
      {
        target: "I feel rested and happy to work with a good coworker.",
        jumbled: ["feel", "to", "I", "coworker.", "rested", "and", "good", "a", "work", "happy", "with"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your lunch break at work.",
    mySentenceExample: "I eat lunch with my coworker in a small room.",
  },
  {
    number: 8,
    title: "Filling the Shelves Again",
    image: null,
    imageNote: "Casey pushing a trolley loaded with boxes of biscuits and bottles toward empty shelves, Ben helping lift a heavy box onto a high shelf.",
    story:
      "In the afternoon, many shelves are empty because we sold a lot today. Ms. Cruz asks me to fill the shelves with new items from the storage room. I take a small trolley and push it to the back of the shop. I load boxes of biscuits, bottles of water, and cans of soup on it. Then I push the trolley back and start to fill the empty shelves. I put the older items in the front and the new items behind them. I make each row neat and turn the labels so people can read them. Ben helps me lift the heavy boxes onto the high shelves. “Nice teamwork, Casey,” he says with a grin. Slowly, the empty shelves become full and clean and easy to see. As I finish filling the shelves, I feel satisfied because the shop looks fresh and ready.",
    questions: [
      { text: "Why are many shelves empty in the afternoon?", answer: "Because they sold a lot that day." },
      { text: "What does Casey load onto the trolley?", answer: "Boxes of biscuits, bottles of water, and cans of soup." },
      { text: "Who helps Casey lift the heavy boxes?", answer: "Ben." },
    ],
    trueFalse: [
      { text: "Casey fills the shelves with new items.", answer: true },
      { text: "Casey puts the new items in front of the old ones.", answer: false },
      { text: "Casey feels satisfied because the shop looks fresh.", answer: true },
      { text: "Ben helps lift the heavy boxes.", answer: true },
      { text: "The shelves stay empty all afternoon.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Cruz asks me to fill the shelves with new items from the storage room.",
        jumbled: ["with", "to", "the", "the", "Cruz", "fill", "from", "shelves", "items", "Ms.", "room.", "asks", "storage", "new", "me"],
      },
      {
        target: "I take a small trolley and push it to the back of the shop.",
        jumbled: ["the", "the", "take", "small", "it", "push", "I", "to", "and", "of", "trolley", "shop.", "back", "a"],
      },
      {
        target: "I put the older items in the front and the new items behind them.",
        jumbled: ["the", "front", "I", "behind", "the", "older", "the", "them.", "in", "put", "and", "new", "items", "items"],
      },
      {
        target: "I make each row neat and turn the labels so people can read them.",
        jumbled: ["so", "can", "neat", "make", "each", "them.", "people", "turn", "I", "read", "labels", "row", "and", "the"],
      },
      {
        target: "I feel satisfied because the shop looks fresh and ready.",
        jumbled: ["the", "I", "looks", "feel", "because", "ready.", "satisfied", "shop", "and", "fresh"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your work in a shop.",
    mySentenceExample: "I fill the shelves so the shop looks nice.",
  },
  {
    number: 9,
    title: "Closing the Shop",
    image: null,
    imageNote: "Casey locking the front glass door and turning a sign to 'Closed', Ben mopping the floor nearby, Ms. Cruz counting money at the cashier under dimmer evening lights.",
    story:
      "In the evening, the last customer leaves, and the street becomes quiet. Ms. Cruz looks at the clock and says, “It is time to close the shop now.” I lock the front glass door and turn the small sign to “Closed.” Ben and I clean the counter and the floor with soft cloths and a mop. Ms. Cruz counts the money in the cashier and writes the numbers in her book. I check that the fridge doors are closed and the drinks are cold. Then I put the chairs on the tables so we can clean the floor. We turn off most of the lights and check every corner one more time. Ms. Cruz says, “Good work today, Casey, see you tomorrow,” and we all smile. As I leave the quiet shop, I feel tired but happy after a full day of work.",
    questions: [
      { text: "What does Casey do with the front door?", answer: "Locks it and turns the sign to Closed." },
      { text: "What does Ms. Cruz count in the cashier?", answer: "The money." },
      { text: "What does Ms. Cruz say before everyone leaves?", answer: "Good work today, see you tomorrow." },
    ],
    trueFalse: [
      { text: "Casey locks the front glass door.", answer: true },
      { text: "Casey leaves the fridge doors open and warm.", answer: false },
      { text: "Casey feels tired but happy at the end.", answer: true },
      { text: "Ms. Cruz counts the money at the cashier.", answer: true },
      { text: "Casey leaves the lights all on.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Cruz looks at the clock and says, “It is time to close the shop now.”",
        jumbled: ["is", "Ms.", "at", "to", "Cruz", "and", "the", "clock", "looks", "now.”", "time", "“It", "says,", "the", "close", "shop"],
      },
      {
        target: "Ben and I clean the counter and the floor with soft cloths and a mop.",
        jumbled: ["soft", "and", "Ben", "and", "the", "clean", "I", "a", "cloths", "the", "mop.", "with", "counter", "and", "floor"],
      },
      {
        target: "Ms. Cruz counts the money in the cashier and writes the numbers in her book.",
        jumbled: ["numbers", "the", "money", "the", "Cruz", "writes", "in", "and", "cashier", "her", "Ms.", "book.", "counts", "the", "in"],
      },
      {
        target: "Then I put the chairs on the tables so we can clean the floor.",
        jumbled: ["floor.", "I", "on", "clean", "the", "the", "chairs", "the", "so", "tables", "can", "put", "we", "Then"],
      },
      {
        target: "I feel tired but happy after a full day of work.",
        jumbled: ["I", "happy", "a", "feel", "day", "of", "full", "but", "tired", "work.", "after"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about the end of your workday.",
    mySentenceExample: "I feel happy when we close the shop together.",
  },
  {
    number: 10,
    title: "A Good Week at the Shop",
    image: null,
    imageNote: "Casey standing behind the counter on Friday evening as Ms. Cruz walks over with a warm smile to say something kind, Ben nearby, street lamps glowing outside the front window.",
    story:
      "On Friday evening, I sit for a moment and think about my whole week. On Monday, everything felt new, but now the shop feels like my second home. This week, I opened the shop, worked the cashier, and filled many shelves. I helped happy customers, and I also helped one angry customer stay calm. Ben and I ate lunch together and laughed about many funny things. Ms. Cruz walks to me and says, “You are a great help to this shop.” “I mean it, Casey,” she adds, smiling. I smile and say, “Thank you, I really like working here with you.” We close the shop, turn off the lights, and lock the door for the weekend. Outside, the evening air is cool, and the street lamps are bright. As I walk home, I feel proud and thankful because I had a good week at the shop.",
    questions: [
      { text: "How did everything feel on Monday?", answer: "New." },
      { text: "What does Ms. Cruz say to Casey on Friday?", answer: "You are a great help to this shop." },
      { text: "How does Casey feel as they walk home?", answer: "Proud and thankful." },
    ],
    trueFalse: [
      { text: "On Monday, everything felt new.", answer: true },
      { text: "Ms. Cruz says Casey is not helpful.", answer: false },
      { text: "Casey feels proud and thankful at the end.", answer: true },
      { text: "Casey helped an angry customer stay calm.", answer: true },
      { text: "Ben and Casey never eat lunch together.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Friday evening, I sit for a moment and think about my whole week.",
        jumbled: ["sit", "a", "evening,", "Friday", "I", "and", "whole", "my", "about", "moment", "think", "week.", "for", "On"],
      },
      {
        target: "This week, I opened the shop, worked the cashier, and filled many shelves.",
        jumbled: ["many", "I", "the", "shelves.", "worked", "the", "shop,", "filled", "This", "week,", "opened", "and", "cashier,"],
      },
      {
        target: "Ms. Cruz walks to me and says, “You are a great help to this shop.”",
        jumbled: ["says,", "this", "Ms.", "help", "me", "shop.”", "great", "“You", "walks", "a", "and", "to", "Cruz", "to", "are"],
      },
      {
        target: "I smile and say, “Thank you, I really like working here with you.”",
        jumbled: ["really", "working", "like", "I", "you.”", "and", "with", "“Thank", "smile", "you,", "I", "here", "say,"],
      },
      {
        target: "I feel proud and thankful because I had a good week at the shop.",
        jumbled: ["I", "I", "good", "thankful", "at", "had", "feel", "a", "shop.", "week", "and", "because", "proud", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a good week at your job.",
    mySentenceExample: "I feel proud when I have a good week at the shop.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
