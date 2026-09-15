// A1 Adults digital storybook, Book 48: "A Visit to the Post Office"
// Static content -- no Supabase. Eighth and final book in the A1 Adults
// batch (Books 41-48), completing a second full 8-book set for Adults.
// Same structure/level as storybookData41.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook48/cover.jpg";

export const STORYBOOK_TITLE = "A Visit to the Post Office";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Omar standing at a post office counter holding a wrapped package, a clerk weighing it on a small scale, other customers waiting in line behind him.";

export const CHARACTERS = [
  { name: "Omar", role: "The narrator, an adult", look: "Simple jacket, a wrapped package under his arm, calm but unfamiliar with mailing packages." },
  { name: "Ms. Park", role: "A post office clerk", look: "Post office uniform, name tag, efficient and friendly." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Package to Send",
    image: null,
    imageNote: "Omar sitting at his kitchen table, wrapping a small package in brown paper and tape.",
    story:
      "My sister's birthday is next week, and she lives in another city far from me. I bought her a small gift, and now I need to mail it to her. I wrap the gift carefully in brown paper and tape it closed firmly. I write her name and address on the front in clear, careful handwriting. “Omar, you can figure this out,” I tell myself, since I have never mailed a package before and feel a little unsure about the process. I search online for the nearest post office and check its opening hours. It opens at nine, so I plan to go there this morning.",
    questions: [
      { text: "Why does Omar need to mail a package?", answer: "Because his sister's birthday is next week and she lives in another city." },
      { text: "What does Omar do to the gift first?", answer: "Wraps it carefully in brown paper." },
      { text: "What does Omar write on the front?", answer: "Her name and address." },
    ],
    trueFalse: [
      { text: "Omar's sister's birthday is next week.", answer: true },
      { text: "Omar wraps the gift in brown paper.", answer: true },
      { text: "Omar has mailed many packages before.", answer: false },
      { text: "Omar writes her name and address on the front.", answer: true },
      { text: "The post office opens at nine.", answer: true },
    ],
    buildSentence: [
      {
        target: "My sister's birthday is next week, and she lives in another city far from me.",
        jumbled: ["is", "birthday", "me.", "sister's", "in", "week,", "from", "another", "she", "My", "far", "lives", "city", "and", "next"],
      },
      {
        target: "I bought her a small gift, and now I need to mail it to her.",
        jumbled: ["a", "and", "mail", "her", "small", "need", "gift,", "I", "to", "it", "I", "bought", "now", "to", "her."],
      },
      {
        target: "I wrap the gift carefully in brown paper and tape it closed firmly.",
        jumbled: ["closed", "gift", "I", "carefully", "firmly.", "in", "paper", "tape", "the", "brown", "it", "and", "wrap"],
      },
      {
        target: "“Omar, you can figure this out,” I tell myself, since I have never mailed a package before and feel a little unsure about the process.",
        jumbled: ["since", "I", "have", "about", "you", "myself,", "package", "tell", "a", "little", "never", "before", "process.", "a", "can", "out,”", "the", "feel", "figure", "unsure", "mailed", "this", "I", "and", "“Omar,"],
      },
      {
        target: "I search online for the nearest post office and check its opening hours.",
        jumbled: ["online", "nearest", "hours.", "search", "for", "its", "the", "office", "post", "I", "opening", "and", "check"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about sending a gift to someone.",
    mySentenceExample: "I sent a gift to my sister for her birthday.",
  },
  {
    number: 2,
    title: "Finding the Post Office",
    image: null,
    imageNote: "Omar walking down a city street holding his package, looking at his phone for directions, a post office sign visible ahead.",
    story:
      "I leave my apartment with the package under my arm and check my phone for directions. The post office is only a short walk away, about ten minutes from my home. I follow the map on my phone, turning left at a small coffee shop on the corner. The morning air feels fresh, and the streets are not too busy yet today. Soon, I see a blue and white sign that says “Post Office” ahead of me. “Good job, Omar,” I think, feeling a small sense of accomplishment just finding the right place easily. I walk toward the entrance and open the door carefully.",
    questions: [
      { text: "How far is the post office from Omar's home?", answer: "About a ten-minute walk." },
      { text: "Where does Omar turn left?", answer: "At a small coffee shop on the corner." },
      { text: "What color is the post office sign?", answer: "Blue and white." },
    ],
    trueFalse: [
      { text: "The post office is about a ten-minute walk away.", answer: true },
      { text: "Omar turns left at a small coffee shop.", answer: true },
      { text: "The streets are extremely busy this morning.", answer: false },
      { text: "The sign is blue and white.", answer: true },
      { text: "Omar cannot find the post office at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "I leave my apartment with the package under my arm and check my phone for directions.",
        jumbled: ["my", "check", "package", "the", "apartment", "phone", "under", "my", "for", "and", "arm", "I", "my", "directions.", "leave", "with"],
      },
      {
        target: "The post office is only a short walk away, about ten minutes from my home.",
        jumbled: ["away,", "ten", "is", "from", "about", "The", "post", "my", "walk", "short", "home.", "a", "office", "only", "minutes"],
      },
      {
        target: "I follow the map on my phone, turning left at a small coffee shop on the corner.",
        jumbled: ["left", "the", "shop", "on", "turning", "small", "follow", "I", "the", "corner.", "on", "at", "phone,", "a", "coffee", "map", "my"],
      },
      {
        target: "Soon, I see a blue and white sign that says “Post Office” ahead of me.",
        jumbled: ["ahead", "I", "of", "Office”", "see", "sign", "that", "blue", "“Post", "me.", "and", "white", "says", "a", "Soon,"],
      },
      {
        target: "“Good job, Omar,” I think, feeling a small sense of accomplishment just finding the right place easily.",
        jumbled: ["right", "accomplishment", "finding", "small", "a", "place", "sense", "just", "I", "Omar,”", "job,", "the", "easily.", "“Good", "think,", "of", "feeling"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finding a new place using a map or phone.",
    mySentenceExample: "I found the new restaurant using the map on my phone.",
  },
  {
    number: 3,
    title: "Waiting in Line",
    image: null,
    imageNote: "Omar standing in a short line inside the post office, holding his package, other customers waiting ahead of him.",
    story:
      "Inside, I see a short line of people waiting for the two open counters. I stand behind a woman holding several large envelopes in her hands. “Just wait, Omar,” I think. The line moves slowly, but I do not mind waiting a little today. I look around the post office at the stamps and boxes displayed on the walls. There are many different sizes of boxes, and I wonder which one I might need. My package is small, so I hope I will not need to buy a new box. After a few minutes, the woman in front of me finishes, and it is my turn.",
    questions: [
      { text: "How many counters are open?", answer: "Two." },
      { text: "What is the woman in front of Omar holding?", answer: "Several large envelopes." },
      { text: "What does Omar wonder about?", answer: "Which box size he might need." },
    ],
    trueFalse: [
      { text: "There are two open counters.", answer: true },
      { text: "The woman in front is holding large envelopes.", answer: true },
      { text: "Omar feels upset about waiting.", answer: false },
      { text: "Omar wonders which size box he might need.", answer: true },
      { text: "Omar leaves the line before his turn.", answer: false },
    ],
    buildSentence: [
      {
        target: "Inside, I see a short line of people waiting for the two open counters.",
        jumbled: ["I", "see", "waiting", "line", "counters.", "the", "of", "Inside,", "a", "for", "short", "two", "open", "people"],
      },
      {
        target: "I stand behind a woman holding several large envelopes in her hands.",
        jumbled: ["in", "envelopes", "large", "behind", "a", "holding", "her", "woman", "several", "hands.", "stand", "I"],
      },
      {
        target: "The line moves slowly, but I do not mind waiting a little today.",
        jumbled: ["a", "I", "but", "moves", "The", "line", "waiting", "do", "mind", "today.", "little", "slowly,", "not"],
      },
      {
        target: "I look around the post office at the stamps and boxes displayed on the walls.",
        jumbled: ["I", "office", "the", "and", "walls.", "stamps", "boxes", "look", "on", "displayed", "the", "around", "the", "post", "at"],
      },
      {
        target: "My package is small, so I hope I will not need to buy a new box.",
        jumbled: ["is", "I", "hope", "to", "a", "new", "need", "My", "I", "buy", "not", "will", "package", "so", "small,", "box."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting patiently in a line somewhere.",
    mySentenceExample: "I waited patiently in a line at the grocery store.",
  },
  {
    number: 4,
    title: "Meeting Ms. Park",
    image: null,
    imageNote: "Omar placing his package on the counter, Ms. Park smiling and greeting him, ready to help with the mailing process.",
    story:
      "I walk to the counter and place my package carefully in front of the clerk. Her name tag says Ms. Park, and she greets me with a warm, professional smile. “Good morning! What can I help you with today?” she asks kindly. “My name is Omar, and I need to send this package to my sister in another city,” I explain. “No problem at all. Let's get it weighed first,” she says, reaching for the package. I feel relieved that the process seems simple so far, not as confusing as I expected. Ms. Park's calm, friendly manner makes me feel comfortable asking any questions I have.",
    questions: [
      { text: "What is written on the clerk's name tag?", answer: "Ms. Park." },
      { text: "What does Omar explain to Ms. Park?", answer: "That he needs to send the package to his sister." },
      { text: "How does Ms. Park's manner make Omar feel?", answer: "Comfortable." },
    ],
    trueFalse: [
      { text: "The clerk's name tag says Ms. Park.", answer: true },
      { text: "Omar explains he needs to send a package.", answer: true },
      { text: "Ms. Park seems annoyed to help Omar.", answer: false },
      { text: "Omar feels relieved the process seems simple.", answer: true },
      { text: "Omar feels too nervous to ask any questions.", answer: false },
    ],
    buildSentence: [
      {
        target: "I walk to the counter and place my package carefully in front of the clerk.",
        jumbled: ["and", "of", "walk", "to", "in", "the", "counter", "front", "the", "package", "carefully", "I", "place", "clerk.", "my"],
      },
      {
        target: "Her name tag says Ms. Park, and she greets me with a warm, professional smile.",
        jumbled: ["tag", "she", "greets", "Park,", "and", "professional", "name", "warm,", "a", "Ms.", "smile.", "with", "Her", "says", "me"],
      },
      {
        target: "“My name is Omar, and I need to send this package to my sister in another city,” I explain.",
        jumbled: ["and", "Omar,", "need", "“My", "explain.", "name", "send", "this", "in", "to", "to", "I", "is", "sister", "city,”", "my", "another", "package", "I"],
      },
      {
        target: "“No problem at all. Let's get it weighed first,” she says, reaching for the package.",
        jumbled: ["the", "it", "she", "all.", "“No", "says,", "reaching", "problem", "Let's", "package.", "first,”", "at", "weighed", "for", "get"],
      },
      {
        target: "I feel relieved that the process seems simple so far, not as confusing as I expected.",
        jumbled: ["feel", "I", "expected.", "that", "process", "seems", "relieved", "so", "as", "confusing", "the", "I", "simple", "far,", "as", "not"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being helped by someone at a counter or desk.",
    mySentenceExample: "The clerk helped me kindly at the counter.",
  },
  {
    number: 5,
    title: "Weighing the Package",
    image: null,
    imageNote: "Ms. Park placing Omar's package on a small digital scale, both looking at the weight displayed on the screen.",
    story:
      "Ms. Park places my package on a small digital scale on the counter. The screen shows the weight, and she checks it against a price chart nearby. “It's light, so shipping will not be too expensive, Omar,” she tells me with a smile. She asks how quickly I want the package to arrive at its destination. I explain that it does not need to be very fast, just before my sister's birthday. Ms. Park suggests a standard shipping option that will arrive in about five days. I agree, feeling glad the price and time both sound completely reasonable to me.",
    questions: [
      { text: "What does Ms. Park place the package on?", answer: "A small digital scale." },
      { text: "What does Ms. Park say about the shipping cost?", answer: "That it's light, so shipping will not be too expensive." },
      { text: "What shipping option does Ms. Park suggest?", answer: "A standard option that arrives in about five days." },
    ],
    trueFalse: [
      { text: "Ms. Park places the package on a digital scale.", answer: true },
      { text: "Ms. Park says shipping will be very expensive.", answer: false },
      { text: "Omar needs the package to arrive very fast.", answer: false },
      { text: "Ms. Park suggests a standard shipping option.", answer: true },
      { text: "Omar feels the price and time sound reasonable.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Park places my package on a small digital scale on the counter.",
        jumbled: ["on", "counter.", "digital", "the", "package", "my", "Ms.", "places", "Park", "small", "scale", "on", "a"],
      },
      {
        target: "The screen shows the weight, and she checks it against a price chart nearby.",
        jumbled: ["she", "the", "shows", "chart", "The", "it", "screen", "checks", "and", "nearby.", "price", "weight,", "a", "against"],
      },
      {
        target: "“It's light, so shipping will not be too expensive, Omar,” she tells me with a smile.",
        jumbled: ["smile.", "tells", "she", "Omar,”", "me", "shipping", "too", "be", "with", "expensive,", "“It's", "a", "will", "not", "so", "light,"],
      },
      {
        target: "I explain that it does not need to be very fast, just before my sister's birthday.",
        jumbled: ["very", "my", "does", "fast,", "sister's", "just", "explain", "before", "to", "not", "that", "need", "I", "birthday.", "be", "it"],
      },
      {
        target: "Ms. Park suggests a standard shipping option that will arrive in about five days.",
        jumbled: ["option", "about", "standard", "arrive", "will", "days.", "Park", "shipping", "a", "that", "suggests", "Ms.", "five", "in"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about choosing an option that seemed reasonable to you.",
    mySentenceExample: "I chose the option that seemed most reasonable to me.",
  },
  {
    number: 6,
    title: "Filling Out a Form",
    image: null,
    imageNote: "Omar writing on a small mailing form at the counter, Ms. Park pointing at a specific line for the address.",
    story:
      "Ms. Park gives me a small form to fill out with the shipping address. I write my sister's full name and her complete address carefully on the lines. “Make sure the zip code is correct, Omar,” Ms. Park reminds me kindly, pointing at the line. I check the number twice against my phone to make sure it matches exactly. I also write my own address in the sender's section at the top. Ms. Park checks the form quickly and says everything looks correct and complete. Filling out the form takes only a minute, much faster than I originally expected it to take.",
    questions: [
      { text: "What does Ms. Park give Omar?", answer: "A small form." },
      { text: "What does Ms. Park remind Omar to check?", answer: "The zip code." },
      { text: "How long does filling out the form take?", answer: "Only a minute." },
    ],
    trueFalse: [
      { text: "Ms. Park gives Omar a small form.", answer: true },
      { text: "Ms. Park reminds Omar to check the zip code.", answer: true },
      { text: "Omar refuses to write his own address.", answer: false },
      { text: "Filling out the form takes only a minute.", answer: true },
      { text: "The form takes much longer than expected.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Park gives me a small form to fill out with the shipping address.",
        jumbled: ["to", "fill", "shipping", "with", "Park", "small", "a", "out", "form", "Ms.", "the", "address.", "gives", "me"],
      },
      {
        target: "I write my sister's full name and her complete address carefully on the lines.",
        jumbled: ["address", "and", "her", "the", "lines.", "name", "on", "sister's", "full", "carefully", "I", "write", "my", "complete"],
      },
      {
        target: "“Make sure the zip code is correct, Omar,” Ms. Park reminds me kindly, pointing at the line.",
        jumbled: ["the", "Park", "correct,", "zip", "“Make", "kindly,", "is", "the", "pointing", "line.", "at", "reminds", "me", "Ms.", "Omar,”", "sure", "code"],
      },
      {
        target: "I also write my own address in the sender's section at the top.",
        jumbled: ["section", "write", "also", "address", "sender's", "top.", "my", "the", "the", "I", "own", "in", "at"],
      },
      {
        target: "Filling out the form takes only a minute, much faster than I originally expected it to take.",
        jumbled: ["Filling", "only", "than", "form", "I", "it", "takes", "originally", "expected", "a", "take.", "the", "minute,", "faster", "much", "to", "out"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about filling out a form carefully.",
    mySentenceExample: "I filled out the form carefully to avoid mistakes.",
  },
  {
    number: 7,
    title: "Buying Stamps",
    image: null,
    imageNote: "Omar pointing at a small display of colorful stamps behind the counter while Ms. Park shows him a few options.",
    story:
      "While waiting, I notice a small display of colorful stamps behind the counter. I remember I also need stamps for some letters I need to send later. I ask Ms. Park if I can buy a few stamps along with the package shipping. “Of course, Omar, we have several designs to choose from,” she says, showing me a sheet. I pick a design with a picture of flowers, thinking my aunt would like receiving it. I buy ten stamps, more than I need right now, just to have extras ready. Ms. Park adds the stamps to my total cost for today's visit.",
    questions: [
      { text: "What does Omar notice behind the counter?", answer: "A display of colorful stamps." },
      { text: "What does Omar ask Ms. Park about?", answer: "Buying a few stamps." },
      { text: "What design does Omar choose for his stamps?", answer: "One with flowers." },
    ],
    trueFalse: [
      { text: "Omar notices a display of colorful stamps.", answer: true },
      { text: "Omar asks if he can buy stamps too.", answer: true },
      { text: "Ms. Park says stamps are not available today.", answer: false },
      { text: "Omar chooses a design with flowers.", answer: true },
      { text: "Omar buys exactly one single stamp.", answer: false },
    ],
    buildSentence: [
      {
        target: "I notice a small display of colorful stamps behind the counter.",
        jumbled: ["display", "notice", "behind", "stamps", "I", "a", "the", "of", "counter.", "colorful", "small"],
      },
      {
        target: "I remember I also need stamps for some letters I need to send later.",
        jumbled: ["send", "for", "stamps", "I", "letters", "I", "need", "some", "later.", "remember", "to", "need", "I", "also"],
      },
      {
        target: "I ask Ms. Park if I can buy a few stamps along with the package shipping.",
        jumbled: ["Ms.", "I", "package", "I", "a", "can", "with", "few", "shipping.", "if", "ask", "the", "Park", "stamps", "along", "buy"],
      },
      {
        target: "I pick a design with a picture of flowers, thinking my aunt would like receiving it.",
        jumbled: ["thinking", "picture", "would", "with", "aunt", "design", "my", "a", "I", "flowers,", "a", "receiving", "of", "pick", "it.", "like"],
      },
      {
        target: "I buy ten stamps, more than I need right now, just to have extras ready.",
        jumbled: ["stamps,", "I", "I", "ten", "than", "have", "buy", "extras", "to", "need", "right", "just", "more", "ready.", "now,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about buying something small along with a bigger errand.",
    mySentenceExample: "I bought stamps along with mailing my package.",
  },
  {
    number: 8,
    title: "Paying for Everything",
    image: null,
    imageNote: "Omar tapping his card on a small payment machine at the counter, Ms. Park handing him a receipt and a tracking slip.",
    story:
      "Ms. Park tells me the total cost for the shipping and the ten stamps together. I take out my card and tap it on the small payment machine on the counter. The payment goes through quickly, and the machine prints a receipt for me. Ms. Park also hands me a small tracking slip with a special number on it. “You can check this number online to see where your package is, Omar,” she explains. I thank her for her help and carefully put the receipt into my wallet. This whole visit turned out to be much easier than I originally expected.",
    questions: [
      { text: "How does Omar pay for everything?", answer: "With his card, tapping it on the machine." },
      { text: "What does Ms. Park hand Omar besides the receipt?", answer: "A tracking slip." },
      { text: "What can Omar do with the tracking number?", answer: "Check online to see where his package is." },
    ],
    trueFalse: [
      { text: "Omar pays by tapping his card.", answer: true },
      { text: "The machine prints a receipt for Omar.", answer: true },
      { text: "Ms. Park hands Omar a tracking slip.", answer: true },
      { text: "Omar can check the tracking number online.", answer: true },
      { text: "This visit turned out much harder than expected.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Park tells me the total cost for the shipping and the ten stamps together.",
        jumbled: ["ten", "the", "stamps", "together.", "tells", "Park", "Ms.", "me", "cost", "and", "the", "shipping", "the", "total", "for"],
      },
      {
        target: "I take out my card and tap it on the small payment machine on the counter.",
        jumbled: ["take", "tap", "and", "on", "small", "card", "my", "counter.", "machine", "I", "on", "the", "out", "it", "the", "payment"],
      },
      {
        target: "Ms. Park also hands me a small tracking slip with a special number on it.",
        jumbled: ["a", "tracking", "Ms.", "it.", "me", "a", "special", "on", "slip", "with", "hands", "number", "also", "Park", "small"],
      },
      {
        target: "“You can check this number online to see where your package is, Omar,” she explains.",
        jumbled: ["she", "see", "is,", "check", "this", "number", "Omar,”", "where", "your", "can", "online", "“You", "package", "explains.", "to"],
      },
      {
        target: "I thank her for her help and carefully put the receipt into my wallet.",
        jumbled: ["receipt", "thank", "into", "wallet.", "help", "my", "the", "carefully", "and", "her", "I", "put", "for", "her"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about paying for something at a counter.",
    mySentenceExample: "I paid for my package with my card at the counter.",
  },
  {
    number: 9,
    title: "Leaving the Post Office",
    image: null,
    imageNote: "Omar walking out of the post office through the glass doors, holding his receipt and tracking slip, sunlight outside.",
    story:
      "I say goodbye to Ms. Park and walk toward the post office's glass doors. Outside, the morning sun feels warm, and the street looks a little busier now than before. I check the tracking slip one more time to make sure I did not lose it. My package is finally on its way to my sister in another city now. “Well done, Omar,” I think, feeling proud that I completed this simple errand successfully on my very first try. It seemed a little confusing at first, but everything worked out just fine. Walking home, I already feel confident about mailing packages again in the future.",
    questions: [
      { text: "How does the morning sun feel to Omar outside?", answer: "Warm." },
      { text: "What does Omar check one more time?", answer: "The tracking slip." },
      { text: "How does Omar feel about completing the errand?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "The morning sun feels warm to Omar.", answer: true },
      { text: "Omar checks the tracking slip one more time.", answer: true },
      { text: "Omar's package is finally on its way.", answer: true },
      { text: "Omar feels proud completing this errand successfully.", answer: true },
      { text: "Omar feels this errand went badly overall.", answer: false },
    ],
    buildSentence: [
      {
        target: "I say goodbye to Ms. Park and walk toward the post office's glass doors.",
        jumbled: ["goodbye", "glass", "toward", "I", "and", "to", "walk", "say", "Ms.", "office's", "post", "Park", "the", "doors."],
      },
      {
        target: "Outside, the morning sun feels warm, and the street looks a little busier now than before.",
        jumbled: ["the", "and", "a", "the", "now", "feels", "street", "looks", "busier", "morning", "before.", "than", "sun", "little", "warm,", "Outside,"],
      },
      {
        target: "I check the tracking slip one more time to make sure I did not lose it.",
        jumbled: ["to", "I", "tracking", "I", "lose", "did", "check", "it.", "make", "more", "slip", "one", "time", "not", "the", "sure"],
      },
      {
        target: "“Well done, Omar,” I think, feeling proud that I completed this simple errand successfully on my very first try.",
        jumbled: ["proud", "this", "first", "my", "errand", "very", "simple", "feeling", "think,", "on", "“Well", "done,", "I", "try.", "that", "Omar,”", "completed", "successfully", "I"],
      },
      {
        target: "It seemed a little confusing at first, but everything worked out just fine.",
        jumbled: ["It", "first,", "worked", "confusing", "fine.", "seemed", "everything", "little", "out", "just", "at", "but", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about completing an errand successfully.",
    mySentenceExample: "I felt proud after completing my errand successfully today.",
  },
  {
    number: 10,
    title: "A Message from My Sister",
    image: null,
    imageNote: "Omar sitting at home checking his phone, smiling at a tracking update and a message from his sister on the screen.",
    story:
      "A few days later, I check the tracking number Ms. Park gave me at the post office. The screen shows my package is now getting close to my sister's city. I feel a small thrill knowing the birthday gift will arrive on time. Two days after that, I receive a happy message from my sister on my phone. “I got your gift! Thank you so much, Omar, I love it,” she writes with excitement. I smile widely, feeling proud that my simple trip to the post office made her so happy. Something as small as mailing a package can create such a meaningful moment.",
    questions: [
      { text: "What does Omar check a few days later?", answer: "The tracking number." },
      { text: "What does the tracking screen show?", answer: "That his package is close to his sister's city." },
      { text: "What does Omar's sister say in her message?", answer: "I got your gift! Thank you so much, I love it." },
    ],
    trueFalse: [
      { text: "Omar checks the tracking number a few days later.", answer: true },
      { text: "The package is getting close to his sister's city.", answer: true },
      { text: "Omar's sister never receives the package.", answer: false },
      { text: "Omar's sister says she loves the gift.", answer: true },
      { text: "Omar feels nothing about making his sister happy.", answer: false },
    ],
    buildSentence: [
      {
        target: "A few days later, I check the tracking number Ms. Park gave me at the post office.",
        jumbled: ["Ms.", "post", "check", "office.", "gave", "I", "A", "Park", "number", "the", "days", "the", "at", "few", "tracking", "me", "later,"],
      },
      {
        target: "The screen shows my package is now getting close to my sister's city.",
        jumbled: ["shows", "The", "now", "sister's", "getting", "close", "city.", "screen", "package", "is", "my", "my", "to"],
      },
      {
        target: "Two days after that, I receive a happy message from my sister on my phone.",
        jumbled: ["Two", "that,", "my", "sister", "on", "my", "from", "after", "days", "phone.", "happy", "receive", "I", "a", "message"],
      },
      {
        target: "“I got your gift! Thank you so much, Omar, I love it,” she writes with excitement.",
        jumbled: ["writes", "love", "got", "Thank", "“I", "with", "Omar,", "much,", "excitement.", "so", "it,”", "I", "you", "she", "gift!", "your"],
      },
      {
        target: "I smile widely, feeling proud that my simple trip to the post office made her so happy.",
        jumbled: ["I", "office", "proud", "simple", "widely,", "made", "so", "trip", "post", "my", "happy.", "smile", "the", "that", "to", "her", "feeling"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small action that created a meaningful moment.",
    mySentenceExample: "Sending a simple card created a meaningful moment for my friend.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
