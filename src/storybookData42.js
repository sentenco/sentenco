// A1 Adults digital storybook, Book 42: "Grocery Shopping for the Week"
// Static content -- no Supabase. Second book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook42/cover.jpg";

export const STORYBOOK_TITLE = "Grocery Shopping for the Week";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Priya pushing a shopping cart down a grocery store aisle, checking a handwritten list, shelves of colorful food around her.";

export const CHARACTERS = [
  { name: "Priya", role: "The narrator, an adult", look: "Casual jacket, reusable shopping bag, practical and a little tired after work." },
  { name: "Tom", role: "A grocery store worker", look: "Store apron, name tag, friendly and helpful." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Making a List",
    image: null,
    imageNote: "Priya sitting at her kitchen table, writing a shopping list on paper, an empty fridge visible behind her.",
    story:
      "It is Saturday morning, and my fridge is almost empty. I sit at my kitchen table and make a shopping list. At the top, I write, “Priya's Shopping List.” I write down milk, eggs, bread, and vegetables. I also need chicken and rice for dinner this week. My list gets longer as I check each cupboard in my kitchen. I like making a list because it helps me remember everything I need. Without a list, I always forget something important. I put the list in my pocket and grab my reusable bags. Then I get my car keys and get ready to go to the store.",
    questions: [
      { text: "What day is it?", answer: "Saturday." },
      { text: "Why does Priya make a shopping list?", answer: "Because it helps her remember everything she needs." },
      { text: "What does Priya grab before leaving?", answer: "Her reusable bags and car keys." },
    ],
    trueFalse: [
      { text: "It is Saturday morning.", answer: true },
      { text: "Priya's fridge is completely full.", answer: false },
      { text: "Priya writes milk, eggs, bread, and vegetables on her list.", answer: true },
      { text: "Priya never forgets anything without a list.", answer: false },
      { text: "Priya grabs her reusable bags.", answer: true },
    ],
    buildSentence: [
      {
        target: "I sit at my kitchen table and make a shopping list.",
        jumbled: ["a", "my", "make", "table", "and", "I", "list.", "kitchen", "sit", "shopping", "at"],
      },
      {
        target: "At the top, I write, “Priya's Shopping List.”",
        jumbled: ["List.”", "I", "Shopping", "the", "“Priya's", "write,", "top,", "At"],
      },
      {
        target: "My list gets longer as I check each cupboard in my kitchen.",
        jumbled: ["kitchen.", "as", "list", "each", "my", "in", "longer", "cupboard", "check", "gets", "My", "I"],
      },
      {
        target: "I like making a list because it helps me remember everything I need.",
        jumbled: ["like", "making", "I", "it", "everything", "remember", "a", "because", "list", "me", "I", "need.", "helps"],
      },
      {
        target: "Then I get my car keys and get ready to go to the store.",
        jumbled: ["I", "car", "get", "get", "the", "keys", "store.", "and", "my", "ready", "go", "to", "to", "Then"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you write a list for.",
    mySentenceExample: "I write a list before I go grocery shopping every week.",
  },
  {
    number: 2,
    title: "Arriving at the Store",
    image: null,
    imageNote: "Priya walking through automatic doors into a busy grocery store, grabbing a shopping cart near the entrance.",
    story:
      "I arrive at the grocery store and park my car near the entrance. The store is busy today because it is the weekend. I scan my loyalty card, and a screen flashes, “Welcome back, Priya!” I grab a cart and walk through the automatic doors. Bright lights and colorful signs greet me inside. I take out my list and check the first item: milk. I know this store well, so I walk straight to the dairy section. Many other people are shopping too, and the aisles feel a little crowded. I push my cart carefully around other shoppers. Shopping on a Saturday always takes a little longer than usual.",
    questions: [
      { text: "Why is the store busy today?", answer: "Because it is the weekend." },
      { text: "What does Priya grab near the entrance?", answer: "A cart." },
      { text: "What is the first item on Priya's list?", answer: "Milk." },
    ],
    trueFalse: [
      { text: "The store is busy because it is the weekend.", answer: true },
      { text: "Priya does not grab a cart.", answer: false },
      { text: "Milk is the first item on Priya's list.", answer: true },
      { text: "The store is completely empty today.", answer: false },
      { text: "Priya pushes her cart carefully around other shoppers.", answer: true },
    ],
    buildSentence: [
      {
        target: "I arrive at the grocery store and park my car near the entrance.",
        jumbled: ["the", "at", "and", "my", "the", "park", "arrive", "grocery", "entrance.", "store", "near", "car", "I"],
      },
      {
        target: "I scan my loyalty card, and a screen flashes, “Welcome back, Priya!”",
        jumbled: ["flashes,", "I", "screen", "my", "a", "and", "“Welcome", "card,", "loyalty", "scan", "back,", "Priya!”"],
      },
      {
        target: "I take out my list and check the first item: milk.",
        jumbled: ["list", "first", "take", "item:", "milk.", "the", "my", "and", "out", "I", "check"],
      },
      {
        target: "I know this store well, so I walk straight to the dairy section.",
        jumbled: ["straight", "the", "well,", "to", "walk", "store", "this", "I", "I", "so", "section.", "dairy", "know"],
      },
      {
        target: "Shopping on a Saturday always takes a little longer than usual.",
        jumbled: ["Saturday", "little", "than", "longer", "Shopping", "a", "a", "takes", "usual.", "on", "always"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a busy place you visited recently.",
    mySentenceExample: "The market was very busy when I visited on Saturday.",
  },
  {
    number: 3,
    title: "Finding Everything",
    image: null,
    imageNote: "Priya standing in the produce section, comparing two bags of apples, checking prices on a shelf label.",
    story:
      "I walk through the produce section and pick fresh apples and carrots. I check the prices carefully because I want to stay within my budget. Some vegetables cost more than I expect, so I choose a cheaper option instead. Next, I find the bread aisle and pick a loaf of whole wheat bread. I also find rice and chicken in the next two aisles. I check “Priya's Shopping List” again -- only a few items left. My cart slowly fills up with all the items on my list. I feel good about finding everything without much trouble. Shopping feels easier when I already know where things are in the store.",
    questions: [
      { text: "What does Priya pick in the produce section?", answer: "Fresh apples and carrots." },
      { text: "Why does Priya check prices carefully?", answer: "Because she wants to stay within her budget." },
      { text: "What kind of bread does Priya pick?", answer: "Whole wheat bread." },
    ],
    trueFalse: [
      { text: "Priya picks fresh apples and carrots.", answer: true },
      { text: "Priya does not care about prices at all.", answer: false },
      { text: "Priya picks whole wheat bread.", answer: true },
      { text: "Priya cannot find rice or chicken.", answer: false },
      { text: "Priya feels good about finding everything.", answer: true },
    ],
    buildSentence: [
      {
        target: "I walk through the produce section and pick fresh apples and carrots.",
        jumbled: ["section", "pick", "fresh", "the", "and", "carrots.", "I", "produce", "and", "through", "apples", "walk"],
      },
      {
        target: "Some vegetables cost more than I expect, so I choose a cheaper option instead.",
        jumbled: ["instead.", "I", "Some", "option", "a", "cheaper", "cost", "expect,", "choose", "vegetables", "more", "I", "than", "so"],
      },
      {
        target: "Next, I find the bread aisle and pick a loaf of whole wheat bread.",
        jumbled: ["wheat", "a", "Next,", "bread", "I", "and", "find", "pick", "aisle", "the", "whole", "loaf", "bread.", "of"],
      },
      {
        target: "I check “Priya's Shopping List” again -- only a few items left.",
        jumbled: ["left.", "“Priya's", "I", "only", "List”", "check", "again", "--", "items", "few", "Shopping", "a"],
      },
      {
        target: "Shopping feels easier when I already know where things are in the store.",
        jumbled: ["the", "Shopping", "where", "are", "easier", "things", "already", "feels", "know", "when", "I", "in", "store."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about checking prices while shopping.",
    mySentenceExample: "I check the prices carefully before I buy fruit.",
  },
  {
    number: 4,
    title: "Asking for Help",
    image: null,
    imageNote: "Priya asking Tom, a store worker, for directions in an aisle, Tom pointing helpfully toward a shelf.",
    story:
      "I look for a special kind of pasta, but I cannot find it anywhere in the aisle. I decide to ask a store worker for help. His name tag says Tom, and he smiles when I ask my question. “The pasta is on aisle six, next to the sauces, Priya,” he says kindly, reading my name from my loyalty card. I thank him and walk to aisle six right away. He is right, and I find the pasta exactly where he said. Tom also tells me about a sale on canned tomatoes nearby. I add two cans to my cart because I know I will use them soon.",
    questions: [
      { text: "What does Priya look for but cannot find?", answer: "A special kind of pasta." },
      { text: "Who helps Priya find the pasta?", answer: "Tom, a store worker." },
      { text: "What does Tom tell Priya about?", answer: "A sale on canned tomatoes." },
    ],
    trueFalse: [
      { text: "Priya cannot find a special kind of pasta.", answer: true },
      { text: "Priya refuses to ask anyone for help.", answer: false },
      { text: "Tom tells Priya the pasta is on aisle six.", answer: true },
      { text: "Tom tells Priya about a sale on canned tomatoes.", answer: true },
      { text: "Priya does not buy any canned tomatoes.", answer: false },
    ],
    buildSentence: [
      {
        target: "I look for a special kind of pasta, but I cannot find it anywhere in the aisle.",
        jumbled: ["the", "I", "for", "pasta,", "it", "but", "I", "look", "in", "find", "a", "of", "aisle.", "kind", "special", "anywhere", "cannot"],
      },
      {
        target: "His name tag says Tom, and he smiles when I ask my question.",
        jumbled: ["says", "and", "name", "when", "my", "Tom,", "ask", "he", "tag", "His", "question.", "I", "smiles"],
      },
      {
        target: "“The pasta is on aisle six, next to the sauces, Priya,” he says kindly, reading my name from my loyalty card.",
        jumbled: ["loyalty", "the", "says", "my", "card.", "kindly,", "sauces,", "my", "pasta", "six,", "name", "from", "“The", "next", "is", "reading", "Priya,”", "to", "on", "he", "aisle"],
      },
      {
        target: "He is right, and I find the pasta exactly where he said.",
        jumbled: ["exactly", "the", "he", "pasta", "where", "I", "and", "said.", "find", "He", "right,", "is"],
      },
      {
        target: "I add two cans to my cart because I know I will use them soon.",
        jumbled: ["them", "because", "use", "to", "two", "my", "cans", "I", "soon.", "I", "add", "I", "cart", "will", "know"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time a worker helped you find something.",
    mySentenceExample: "A worker helped me find the shoes I wanted at the store.",
  },
  {
    number: 5,
    title: "Staying on Budget",
    image: null,
    imageNote: "Priya using a calculator app on her phone while looking at items in her cart, checking a small notepad with numbers.",
    story:
      "Halfway through my shopping, I stop to check my phone's calculator. I want to make sure I do not spend too much money today. My banking app shows, “Hi Priya, here is your spending summary,” and I add up the prices of items already in my cart. The total is close to my budget, so I need to be careful with the rest. I decide to skip the expensive cheese and choose a cheaper brand instead. I also put back a bag of chips I do not really need. Staying on budget takes some effort, but it feels good to be responsible with my money. I continue shopping with more careful choices now.",
    questions: [
      { text: "What does Priya check halfway through shopping?", answer: "Her phone's calculator." },
      { text: "What does Priya decide to skip?", answer: "The expensive cheese." },
      { text: "How does Priya feel about staying on budget?", answer: "Good -- responsible." },
    ],
    trueFalse: [
      { text: "Priya checks her phone's calculator.", answer: true },
      { text: "Priya spends without thinking about money.", answer: false },
      { text: "Priya decides to skip the expensive cheese.", answer: true },
      { text: "Priya puts back a bag of chips.", answer: true },
      { text: "Priya feels bad about being responsible with money.", answer: false },
    ],
    buildSentence: [
      {
        target: "Halfway through my shopping, I stop to check my phone's calculator.",
        jumbled: ["calculator.", "Halfway", "shopping,", "check", "my", "stop", "I", "my", "to", "through", "phone's"],
      },
      {
        target: "My banking app shows, “Hi Priya, here is your spending summary,” and I add up the prices of items already in my cart.",
        jumbled: ["My", "prices", "cart.", "items", "and", "add", "summary,”", "the", "banking", "in", "I", "my", "app", "shows,", "up", "your", "already", "Priya,", "of", "spending", "is", "“Hi", "here"],
      },
      {
        target: "The total is close to my budget, so I need to be careful with the rest.",
        jumbled: ["with", "to", "be", "is", "The", "need", "to", "so", "total", "the", "my", "close", "careful", "I", "rest.", "budget,"],
      },
      {
        target: "I decide to skip the expensive cheese and choose a cheaper brand instead.",
        jumbled: ["the", "decide", "to", "brand", "and", "cheese", "skip", "a", "I", "choose", "expensive", "instead.", "cheaper"],
      },
      {
        target: "Staying on budget takes some effort, but it feels good to be responsible with my money.",
        jumbled: ["feels", "takes", "my", "but", "effort,", "it", "some", "budget", "good", "money.", "responsible", "on", "Staying", "with", "to", "be"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about staying on a budget.",
    mySentenceExample: "I stay on a budget by checking prices before I buy things.",
  },
  {
    number: 6,
    title: "The Long Line",
    image: null,
    imageNote: "Priya standing in a long checkout line with her full cart, other shoppers waiting behind her, a cashier scanning items ahead.",
    story:
      "When I finish shopping, I push my full cart toward the checkout area. Many other people are also finishing their shopping, so the lines are long today. I choose a line that looks the shortest and wait patiently with my cart. The person in front of me has many items too, so the line moves slowly. I check my phone while I wait. “Priya, how's the shopping going?” my sister texts, and I reply to her message. After about ten minutes, it is finally my turn. I start putting my groceries on the counter for the cashier to scan.",
    questions: [
      { text: "Why are the checkout lines long today?", answer: "Because many people are finishing their shopping." },
      { text: "What does Priya do while she waits?", answer: "Checks her phone and replies to a message from her sister." },
      { text: "How long does Priya wait in line?", answer: "About ten minutes." },
    ],
    trueFalse: [
      { text: "The checkout lines are long today.", answer: true },
      { text: "Priya refuses to wait in any line.", answer: false },
      { text: "Priya checks her phone while waiting.", answer: true },
      { text: "Priya waits about ten minutes.", answer: true },
      { text: "Priya leaves the store without paying.", answer: false },
    ],
    buildSentence: [
      {
        target: "I push my full cart toward the checkout area.",
        jumbled: ["cart", "push", "toward", "my", "checkout", "full", "area.", "the", "I"],
      },
      {
        target: "Many other people are also finishing their shopping, so the lines are long today.",
        jumbled: ["people", "long", "finishing", "the", "are", "other", "their", "lines", "also", "so", "shopping,", "are", "today.", "Many"],
      },
      {
        target: "The person in front of me has many items too, so the line moves slowly.",
        jumbled: ["me", "of", "front", "line", "in", "too,", "has", "the", "moves", "slowly.", "so", "items", "person", "many", "The"],
      },
      {
        target: "“Priya, how's the shopping going?” my sister texts, and I reply to her message.",
        jumbled: ["shopping", "reply", "“Priya,", "message.", "I", "going?”", "her", "and", "my", "the", "how's", "to", "sister", "texts,"],
      },
      {
        target: "I start putting my groceries on the counter for the cashier to scan.",
        jumbled: ["on", "start", "my", "counter", "scan.", "cashier", "for", "the", "the", "I", "groceries", "putting", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting in a long line.",
    mySentenceExample: "I waited in a long line at the bank last week.",
  },
  {
    number: 7,
    title: "Paying for Groceries",
    image: null,
    imageNote: "Priya tapping her card on a payment machine at the checkout counter, the cashier smiling and handing her a receipt.",
    story:
      "The cashier scans all my items quickly and tells me the total price. I take out my card and tap it on the small machine. The payment goes through, and the machine prints a long receipt. “Thank you, Priya, have a nice day,” the cashier says with a smile, glancing at my loyalty card. I say thank you back and start putting my groceries into my reusable bags. The bags feel heavy, but I am happy that shopping is almost finished. I check the receipt quickly to make sure everything is correct. Everything looks right, so I fold the receipt and put it in my pocket.",
    questions: [
      { text: "What does the cashier do with Priya's items?", answer: "Scans them and tells the total price." },
      { text: "How does Priya pay for her groceries?", answer: "With her card, tapping it on the machine." },
      { text: "What does Priya check before leaving?", answer: "The receipt." },
    ],
    trueFalse: [
      { text: "The cashier scans all of Priya's items.", answer: true },
      { text: "Priya pays with cash only.", answer: false },
      { text: "Priya taps her card on the machine.", answer: true },
      { text: "The machine prints a receipt.", answer: true },
      { text: "Priya ignores the receipt completely.", answer: false },
    ],
    buildSentence: [
      {
        target: "The cashier scans all my items quickly and tells me the total price.",
        jumbled: ["items", "all", "The", "quickly", "cashier", "total", "scans", "tells", "the", "and", "me", "my", "price."],
      },
      {
        target: "I take out my card and tap it on the small machine.",
        jumbled: ["and", "tap", "the", "I", "small", "take", "card", "on", "machine.", "my", "out", "it"],
      },
      {
        target: "“Thank you, Priya, have a nice day,” the cashier says with a smile, glancing at my loyalty card.",
        jumbled: ["card.", "a", "with", "my", "glancing", "you,", "nice", "“Thank", "Priya,", "a", "at", "day,”", "have", "says", "smile,", "the", "cashier", "loyalty"],
      },
      {
        target: "I say thank you back and start putting my groceries into my reusable bags.",
        jumbled: ["into", "my", "I", "groceries", "you", "thank", "back", "reusable", "putting", "start", "bags.", "my", "say", "and"],
      },
      {
        target: "Everything looks right, so I fold the receipt and put it in my pocket.",
        jumbled: ["put", "Everything", "receipt", "in", "I", "and", "so", "looks", "fold", "it", "pocket.", "my", "the", "right,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about paying for something at a store.",
    mySentenceExample: "I paid for my groceries with my card at the store.",
  },
  {
    number: 8,
    title: "Loading the Car",
    image: null,
    imageNote: "Priya loading grocery bags into the trunk of her car in the parking lot, the shopping cart standing beside her.",
    story:
      "I push my cart to my car and open the trunk carefully. I lift the heavy bags one by one and place them inside. Some bags are heavier than others, so I organize them to keep the eggs safe on top. After loading everything, I close the trunk and take a deep breath. I push the empty cart to the cart return area near my car. A neighbor walks by and waves. “Big shopping trip, Priya?” she asks with a smile. The parking lot is still busy, so I walk carefully between the cars. Finally, I get into my car and feel relieved that the shopping trip is finished for another week.",
    questions: [
      { text: "What does Priya do with the heavy bags?", answer: "Lifts them into the trunk." },
      { text: "Why does Priya organize the bags carefully?", answer: "To keep the eggs safe on top." },
      { text: "Where does Priya push the empty cart?", answer: "To the cart return area." },
    ],
    trueFalse: [
      { text: "Priya lifts the heavy bags one by one.", answer: true },
      { text: "Priya throws the eggs at the bottom carelessly.", answer: false },
      { text: "Priya organizes the bags to keep the eggs safe.", answer: true },
      { text: "Priya leaves the cart in the middle of the lot.", answer: false },
      { text: "Priya feels relieved when the trip is finished.", answer: true },
    ],
    buildSentence: [
      {
        target: "I push my cart to my car and open the trunk carefully.",
        jumbled: ["push", "I", "my", "carefully.", "to", "my", "the", "cart", "open", "and", "trunk", "car"],
      },
      {
        target: "Some bags are heavier than others, so I organize them to keep the eggs safe on top.",
        jumbled: ["top.", "others,", "Some", "keep", "so", "the", "bags", "safe", "heavier", "organize", "than", "to", "them", "I", "on", "are", "eggs"],
      },
      {
        target: "I push the empty cart to the cart return area near my car.",
        jumbled: ["the", "cart", "car.", "near", "push", "to", "area", "I", "the", "my", "return", "cart", "empty"],
      },
      {
        target: "“Big shopping trip, Priya?” she asks with a smile.",
        jumbled: ["trip,", "with", "Priya?”", "shopping", "a", "she", "asks", "smile.", "“Big"],
      },
      {
        target: "Finally, I get into my car and feel relieved that the shopping trip is finished for another week.",
        jumbled: ["shopping", "trip", "week.", "that", "into", "for", "another", "is", "Finally,", "I", "the", "my", "finished", "feel", "and", "car", "relieved", "get"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finishing an errand or task.",
    mySentenceExample: "I felt relieved when I finished cleaning my apartment.",
  },
  {
    number: 9,
    title: "Putting Groceries Away",
    image: null,
    imageNote: "Priya standing in her kitchen, placing groceries into the fridge and cupboards, the full bags sitting on the counter.",
    story:
      "At home, I carry all the bags into my kitchen and place them on the counter. I start putting the cold items into the fridge first, like milk, eggs, and vegetables. Then I put the dry items, like rice and pasta, into my cupboards. My kitchen looks much more organized now than it did this morning. I check off the last item on “Priya's Shopping List” and smile. I fold the empty bags and put them in a drawer for next time. Looking at my full fridge and cupboards makes me feel satisfied. All this food will last me through the busy week ahead. I feel ready and prepared now.",
    questions: [
      { text: "What does Priya put in the fridge first?", answer: "Cold items like milk, eggs, and vegetables." },
      { text: "What does Priya do with the empty bags?", answer: "Folds them and puts them in a drawer." },
      { text: "How does Priya feel looking at her full fridge?", answer: "Satisfied." },
    ],
    trueFalse: [
      { text: "Priya puts milk, eggs, and vegetables in the fridge first.", answer: true },
      { text: "Priya throws away the empty bags.", answer: false },
      { text: "Priya puts rice and pasta in her cupboards.", answer: true },
      { text: "Priya's kitchen looks messier than before.", answer: false },
      { text: "Priya feels satisfied looking at her full fridge.", answer: true },
    ],
    buildSentence: [
      {
        target: "At home, I carry all the bags into my kitchen and place them on the counter.",
        jumbled: ["my", "them", "I", "carry", "the", "home,", "and", "on", "At", "into", "the", "kitchen", "bags", "place", "counter.", "all"],
      },
      {
        target: "I start putting the cold items into the fridge first, like milk, eggs, and vegetables.",
        jumbled: ["the", "fridge", "items", "vegetables.", "into", "milk,", "and", "first,", "start", "like", "putting", "I", "the", "eggs,", "cold"],
      },
      {
        target: "My kitchen looks much more organized now than it did this morning.",
        jumbled: ["organized", "now", "My", "than", "morning.", "much", "kitchen", "looks", "it", "more", "did", "this"],
      },
      {
        target: "I fold the empty bags and put them in a drawer for next time.",
        jumbled: ["in", "and", "them", "for", "I", "a", "bags", "empty", "time.", "the", "put", "drawer", "next", "fold"],
      },
      {
        target: "All this food will last me through the busy week ahead.",
        jumbled: ["ahead.", "through", "the", "me", "busy", "this", "last", "week", "All", "food", "will"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about organizing something in your home.",
    mySentenceExample: "I organized my closet last weekend and it feels good.",
  },
  {
    number: 10,
    title: "A Good Week Ahead",
    image: null,
    imageNote: "Priya sitting at her kitchen table with a cup of tea, looking at her full fridge with a satisfied smile.",
    story:
      "That evening, I sit at my kitchen table with a warm cup of tea. I look at my full fridge and feel good about my Saturday shopping trip. I already planned meals for the week using the food I bought today. Tomorrow, I will cook chicken and rice for dinner, using the fresh ingredients I chose carefully. Shopping used to feel stressful, but now it feels more like a simple routine. I know I will not run out of food this week, and that feels comforting. I text my sister, “Priya's kitchen is fully stocked now!” I finish my tea and think about how good it feels to be prepared.",
    questions: [
      { text: "What does Priya do that evening?", answer: "Sits at her kitchen table with a cup of tea." },
      { text: "What will Priya cook tomorrow?", answer: "Chicken and rice." },
      { text: "How does shopping feel to Priya now compared to before?", answer: "Like a simple routine instead of stressful." },
    ],
    trueFalse: [
      { text: "Priya sits with a warm cup of tea.", answer: true },
      { text: "Priya has no plan for meals this week.", answer: false },
      { text: "Priya will cook chicken and rice tomorrow.", answer: true },
      { text: "Shopping now feels like a simple routine to Priya.", answer: true },
      { text: "Priya worries about running out of food.", answer: false },
    ],
    buildSentence: [
      {
        target: "That evening, I sit at my kitchen table with a warm cup of tea.",
        jumbled: ["at", "sit", "with", "kitchen", "cup", "I", "a", "evening,", "table", "my", "warm", "of", "That", "tea."],
      },
      {
        target: "I look at my full fridge and feel good about my Saturday shopping trip.",
        jumbled: ["good", "shopping", "trip.", "about", "full", "fridge", "at", "my", "my", "and", "feel", "Saturday", "I", "look"],
      },
      {
        target: "Tomorrow, I will cook chicken and rice for dinner, using the fresh ingredients I chose carefully.",
        jumbled: ["using", "will", "carefully.", "dinner,", "cook", "rice", "chicken", "the", "and", "ingredients", "fresh", "I", "for", "Tomorrow,", "chose", "I"],
      },
      {
        target: "I know I will not run out of food this week, and that feels comforting.",
        jumbled: ["food", "I", "out", "comforting.", "of", "know", "run", "not", "week,", "and", "will", "this", "I", "feels", "that"],
      },
      {
        target: "I finish my tea and think about how good it feels to be prepared.",
        jumbled: ["to", "prepared.", "it", "about", "good", "think", "I", "finish", "tea", "how", "my", "and", "feels", "be"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling prepared for something.",
    mySentenceExample: "I feel prepared for the week after I go grocery shopping.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
