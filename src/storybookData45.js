// A1 Adults digital storybook, Book 45: "Cooking Dinner for the Family"
// Static content -- no Supabase. Fifth book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook45/cover.jpg";

export const STORYBOOK_TITLE = "Cooking Dinner for the Family";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Miguel standing at a kitchen stove stirring a pot, his wife and two children sitting at a nearby table, warm kitchen light filling the room.";

export const CHARACTERS = [
  { name: "Miguel", role: "The narrator, an adult", look: "Apron over his shirt, wooden spoon in hand, determined but a little unsure in the kitchen." },
  { name: "Sofia", role: "Miguel's wife", look: "Comfortable sweater, warm smile, supportive and encouraging." },
  { name: "Lucas and Mia", role: "Miguel and Sofia's two children", look: "Casual home clothes, curious and hungry expressions." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Special Plan",
    image: null,
    imageNote: "Miguel standing in the kitchen looking at a recipe on his phone, ingredients spread out on the counter in front of him.",
    story:
      "Tonight, Sofia has to work late, so I decide to cook dinner for our family myself. I do not cook very often, so I feel a little nervous about this plan. I find a simple recipe on my phone for chicken and vegetables. I write down the ingredients I need and check what I already have at home. I am missing a few things, so I plan a quick trip to the store first. Lucas and Mia are excited when I tell them I am cooking tonight. “Can we help too, Miguel?” Mia asks with a big smile on her face.",
    questions: [
      { text: "Why does Miguel decide to cook dinner tonight?", answer: "Because Sofia has to work late." },
      { text: "How does Miguel feel about this plan?", answer: "A little nervous." },
      { text: "What does Mia ask Miguel?", answer: "Can we help too?" },
    ],
    trueFalse: [
      { text: "Sofia has to work late tonight.", answer: true },
      { text: "Miguel cooks dinner every single night.", answer: false },
      { text: "Miguel finds a recipe on his phone.", answer: true },
      { text: "Lucas and Mia feel upset about the plan.", answer: false },
      { text: "Mia asks if she can help too.", answer: true },
    ],
    buildSentence: [
      {
        target: "Tonight, Sofia has to work late, so I decide to cook dinner for our family myself.",
        jumbled: ["decide", "for", "cook", "to", "work", "late,", "Tonight,", "has", "to", "myself.", "I", "dinner", "family", "our", "so", "Sofia"],
      },
      {
        target: "I do not cook very often, so I feel a little nervous about this plan.",
        jumbled: ["often,", "nervous", "feel", "so", "I", "I", "this", "about", "cook", "plan.", "very", "not", "do", "a", "little"],
      },
      {
        target: "I write down the ingredients I need and check what I already have at home.",
        jumbled: ["home.", "down", "have", "I", "ingredients", "check", "need", "the", "what", "I", "write", "and", "already", "I", "at"],
      },
      {
        target: "I am missing a few things, so I plan a quick trip to the store first.",
        jumbled: ["first.", "a", "quick", "plan", "to", "I", "missing", "few", "I", "trip", "things,", "store", "am", "so", "a", "the"],
      },
      {
        target: "“Can we help too, Miguel?” Mia asks with a big smile on her face.",
        jumbled: ["Mia", "smile", "a", "with", "“Can", "too,", "on", "her", "we", "asks", "face.", "Miguel?”", "help", "big"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you tried cooking something new.",
    mySentenceExample: "I felt nervous the first time I tried cooking soup.",
  },
  {
    number: 2,
    title: "Buying the Ingredients",
    image: null,
    imageNote: "Miguel pushing a small shopping cart through a grocery store aisle with Lucas and Mia beside him, checking a list on his phone.",
    story:
      "I take Lucas and Mia with me to the store to buy the ingredients we need. They enjoy walking through the aisles and helping me find items on my list. “Look, Miguel, I found the chicken!” Lucas says, and Mia picks out fresh carrots and potatoes carefully. I check my phone to make sure I do not forget anything important. The kids ask if we can also buy a small dessert for after dinner. I agree, and we choose a small chocolate cake to share together later. Shopping together feels fun, and it makes the trip go by much faster.",
    questions: [
      { text: "Who does Miguel take with him to the store?", answer: "Lucas and Mia." },
      { text: "What does Lucas find quickly?", answer: "The chicken." },
      { text: "What do the kids ask to buy?", answer: "A small dessert." },
    ],
    trueFalse: [
      { text: "Miguel takes Lucas and Mia to the store.", answer: true },
      { text: "Lucas refuses to help find any items.", answer: false },
      { text: "Mia picks out fresh carrots and potatoes.", answer: true },
      { text: "The kids ask for a small dessert.", answer: true },
      { text: "Miguel refuses to buy any dessert.", answer: false },
    ],
    buildSentence: [
      {
        target: "I take Lucas and Mia with me to the store to buy the ingredients we need.",
        jumbled: ["Mia", "with", "to", "the", "and", "Lucas", "me", "the", "take", "ingredients", "I", "need.", "to", "buy", "we", "store"],
      },
      {
        target: "They enjoy walking through the aisles and helping me find items on my list.",
        jumbled: ["and", "walking", "find", "the", "helping", "They", "on", "my", "me", "items", "enjoy", "aisles", "through", "list."],
      },
      {
        target: "“Look, Miguel, I found the chicken!” Lucas says, and Mia picks out fresh carrots and potatoes carefully.",
        jumbled: ["I", "“Look,", "chicken!”", "Mia", "potatoes", "carrots", "says,", "found", "the", "out", "carefully.", "Lucas", "Miguel,", "picks", "fresh", "and", "and"],
      },
      {
        target: "The kids ask if we can also buy a small dessert for after dinner.",
        jumbled: ["also", "The", "for", "if", "dessert", "dinner.", "we", "kids", "ask", "buy", "can", "after", "a", "small"],
      },
      {
        target: "I agree, and we choose a small chocolate cake to share together later.",
        jumbled: ["and", "chocolate", "to", "small", "choose", "together", "a", "I", "later.", "agree,", "cake", "we", "share"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about shopping with family or friends.",
    mySentenceExample: "Shopping with my children makes the trip more fun.",
  },
  {
    number: 3,
    title: "Getting Started",
    image: null,
    imageNote: "Miguel washing vegetables at the kitchen sink, a recipe open on his phone propped against a jar on the counter.",
    story:
      "Back home, I put on my apron and set my phone on the counter for the recipe. First, I wash the vegetables carefully under running water in the sink. I cut the carrots and potatoes into small pieces, just like the recipe shows. The chicken needs to be cleaned and seasoned with salt and pepper next. I feel a little slow at first, checking the recipe after almost every single step. Sofia calls to check on us, and I tell her everything is going okay so far. “You can do this, Miguel,” she says encouragingly before hanging up the phone.",
    questions: [
      { text: "What does Miguel wash first?", answer: "The vegetables." },
      { text: "How does Miguel cut the carrots and potatoes?", answer: "Into small pieces, like the recipe shows." },
      { text: "What does Sofia say to Miguel on the phone?", answer: "You can do this." },
    ],
    trueFalse: [
      { text: "Miguel washes the vegetables first.", answer: true },
      { text: "Miguel cuts the vegetables into large pieces.", answer: false },
      { text: "Miguel seasons the chicken with salt and pepper.", answer: true },
      { text: "Sofia does not call to check on them.", answer: false },
      { text: "Sofia says you can do this.", answer: true },
    ],
    buildSentence: [
      {
        target: "Back home, I put on my apron and set my phone on the counter for the recipe.",
        jumbled: ["my", "the", "set", "phone", "apron", "Back", "the", "I", "home,", "my", "for", "and", "counter", "put", "on", "on", "recipe."],
      },
      {
        target: "First, I wash the vegetables carefully under running water in the sink.",
        jumbled: ["the", "First,", "sink.", "in", "the", "I", "under", "carefully", "water", "running", "wash", "vegetables"],
      },
      {
        target: "I cut the carrots and potatoes into small pieces, just like the recipe shows.",
        jumbled: ["potatoes", "pieces,", "shows.", "the", "small", "cut", "the", "and", "recipe", "I", "just", "into", "like", "carrots"],
      },
      {
        target: "I feel a little slow at first, checking the recipe after almost every single step.",
        jumbled: ["checking", "recipe", "first,", "single", "feel", "the", "a", "step.", "I", "little", "almost", "every", "at", "after", "slow"],
      },
      {
        target: "Sofia calls to check on us, and I tell her everything is going okay so far.",
        jumbled: ["Sofia", "and", "so", "her", "far.", "us,", "going", "I", "tell", "to", "okay", "is", "calls", "check", "on", "everything"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone who encouraged you to try something.",
    mySentenceExample: "My friend encouraged me to try cooking a new dish.",
  },
  {
    number: 4,
    title: "The Kids Help Out",
    image: null,
    imageNote: "Lucas stirring a bowl of vegetables while Mia sets the table, both children happily helping in the kitchen with Miguel supervising.",
    story:
      "Lucas asks if he can stir the vegetables in the bowl, and I let him carefully help me. He stirs slowly and proudly, happy to be part of making dinner tonight. Mia decides to set the table instead, placing plates and forks in the right spots. She counts the plates carefully to make sure everyone has exactly what they need. Watching them help makes me smile, even though the kitchen is getting a little messy. Cooking together as a small team feels much more fun than cooking completely alone. “Great job, Miguel!” Mia says proudly, and I thank them both for being such wonderful little helpers tonight.",
    questions: [
      { text: "What does Lucas ask to help with?", answer: "Stirring the vegetables." },
      { text: "What does Mia decide to do instead?", answer: "Set the table." },
      { text: "How does Miguel feel watching the kids help?", answer: "He smiles." },
    ],
    trueFalse: [
      { text: "Lucas asks to stir the vegetables.", answer: true },
      { text: "Mia refuses to help with anything.", answer: false },
      { text: "Mia sets the table with plates and forks.", answer: true },
      { text: "Miguel feels annoyed watching them help.", answer: false },
      { text: "Miguel thanks the kids for helping.", answer: true },
    ],
    buildSentence: [
      {
        target: "Lucas asks if he can stir the vegetables in the bowl, and I let him carefully help me.",
        jumbled: ["I", "let", "if", "he", "stir", "me.", "vegetables", "carefully", "in", "the", "the", "can", "bowl,", "asks", "Lucas", "help", "him", "and"],
      },
      {
        target: "He stirs slowly and proudly, happy to be part of making dinner tonight.",
        jumbled: ["happy", "be", "tonight.", "and", "part", "of", "dinner", "stirs", "to", "making", "slowly", "He", "proudly,"],
      },
      {
        target: "Mia decides to set the table instead, placing plates and forks in the right spots.",
        jumbled: ["and", "spots.", "set", "Mia", "the", "right", "plates", "the", "table", "in", "to", "instead,", "decides", "forks", "placing"],
      },
      {
        target: "Watching them help makes me smile, even though the kitchen is getting a little messy.",
        jumbled: ["the", "them", "messy.", "is", "me", "help", "a", "little", "even", "makes", "though", "kitchen", "Watching", "smile,", "getting"],
      },
      {
        target: "“Great job, Miguel!” Mia says proudly, and I thank them both for being such wonderful little helpers tonight.",
        jumbled: ["both", "for", "I", "and", "such", "proudly,", "them", "being", "thank", "“Great", "says", "helpers", "Miguel!”", "little", "tonight.", "Mia", "job,", "wonderful"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about doing a task together with family.",
    mySentenceExample: "Cleaning the house together with my family feels more fun.",
  },
  {
    number: 5,
    title: "A Small Mistake",
    image: null,
    imageNote: "Miguel looking worried at a slightly burnt pan on the stove, waving away smoke with a kitchen towel.",
    story:
      "While talking with the kids, I forget to check the chicken cooking in the pan on the stove. Suddenly, I smell something burning and rush over to check it quickly. One side of the chicken looks darker than it should, and a little smoke rises up. “Stay calm, Miguel,” I tell myself, and I turn off the stove immediately, moving the pan to a cool spot. Looking closely, only the outside is a little too dark, but the inside still looks fine. I decide the dinner is not ruined completely, just slightly imperfect now. I laugh a little at my small kitchen mistake tonight.",
    questions: [
      { text: "What does Miguel forget to check?", answer: "The chicken cooking in the pan." },
      { text: "What does Miguel smell suddenly?", answer: "Something burning." },
      { text: "How does Miguel react to the mistake?", answer: "He turns off the stove and laughs a little." },
    ],
    trueFalse: [
      { text: "Miguel forgets to check the chicken.", answer: true },
      { text: "Miguel smells something burning.", answer: true },
      { text: "The entire dinner is completely ruined.", answer: false },
      { text: "Miguel feels worried and turns off the stove.", answer: true },
      { text: "Miguel refuses to laugh about the mistake.", answer: false },
    ],
    buildSentence: [
      {
        target: "I forget to check the chicken cooking in the pan on the stove.",
        jumbled: ["the", "the", "chicken", "stove.", "check", "the", "on", "in", "pan", "I", "cooking", "forget", "to"],
      },
      {
        target: "Suddenly, I smell something burning and rush over to check it quickly.",
        jumbled: ["quickly.", "smell", "I", "something", "over", "Suddenly,", "check", "it", "to", "rush", "and", "burning"],
      },
      {
        target: "“Stay calm, Miguel,” I tell myself, and I turn off the stove immediately, moving the pan to a cool spot.",
        jumbled: ["spot.", "moving", "cool", "immediately,", "and", "I", "“Stay", "turn", "pan", "I", "Miguel,”", "myself,", "calm,", "tell", "the", "the", "to", "a", "stove", "off"],
      },
      {
        target: "Looking closely, only the outside is a little too dark, but the inside still looks fine.",
        jumbled: ["closely,", "is", "still", "inside", "the", "too", "outside", "only", "looks", "fine.", "but", "Looking", "dark,", "a", "little", "the"],
      },
      {
        target: "I decide the dinner is not ruined completely, just slightly imperfect now.",
        jumbled: ["ruined", "completely,", "I", "the", "is", "dinner", "slightly", "now.", "just", "imperfect", "not", "decide"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small mistake you made while cooking.",
    mySentenceExample: "I made a small mistake and burned the toast once.",
  },
  {
    number: 6,
    title: "Fixing the Dinner",
    image: null,
    imageNote: "Miguel carefully cutting away the darker part of the chicken, checking it with a fork, the kids watching curiously nearby.",
    story:
      "I carefully cut away the slightly burnt part of the chicken with a sharp knife. The rest of the meat looks perfectly fine and smells delicious still. I check it one more time with a fork to make sure it is fully cooked. Lucas and Mia watch curiously. “Is it safe, Miguel?” Mia asks. “Yes, it's completely fine now,” I tell them, feeling more confident about the situation. I add the vegetables to the pan and let everything cook together for a few more minutes. The kitchen starts to smell wonderful, and my confidence slowly starts coming back.",
    questions: [
      { text: "What does Miguel cut away with a knife?", answer: "The slightly burnt part of the chicken." },
      { text: "What do Lucas and Mia ask?", answer: "If the chicken is still safe to eat." },
      { text: "What does Miguel add to the pan?", answer: "The vegetables." },
    ],
    trueFalse: [
      { text: "Miguel cuts away the burnt part with a knife.", answer: true },
      { text: "The rest of the chicken looks ruined too.", answer: false },
      { text: "The kids ask if the chicken is safe to eat.", answer: true },
      { text: "Miguel adds the vegetables to the pan.", answer: true },
      { text: "The kitchen starts to smell bad.", answer: false },
    ],
    buildSentence: [
      {
        target: "I carefully cut away the slightly burnt part of the chicken with a sharp knife.",
        jumbled: ["sharp", "carefully", "a", "away", "part", "of", "with", "the", "burnt", "chicken", "slightly", "the", "knife.", "I", "cut"],
      },
      {
        target: "I check it one more time with a fork to make sure it is fully cooked.",
        jumbled: ["cooked.", "time", "make", "fully", "it", "with", "is", "sure", "check", "I", "it", "one", "more", "fork", "a", "to"],
      },
      {
        target: "Lucas and Mia watch curiously.",
        jumbled: ["curiously.", "Lucas", "and", "watch", "Mia"],
      },
      {
        target: "“Yes, it's completely fine now,” I tell them, feeling more confident about the situation.",
        jumbled: ["fine", "about", "situation.", "confident", "them,", "it's", "“Yes,", "I", "more", "feeling", "completely", "now,”", "tell", "the"],
      },
      {
        target: "I add the vegetables to the pan and let everything cook together for a few more minutes.",
        jumbled: ["I", "few", "pan", "everything", "to", "add", "cook", "minutes.", "and", "let", "for", "the", "more", "a", "together", "the", "vegetables"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about fixing something that went a little wrong.",
    mySentenceExample: "I fixed my drawing after making a small mistake.",
  },
  {
    number: 7,
    title: "Setting the Table",
    image: null,
    imageNote: "The family gathering around a fully set dinner table, Mia placing napkins carefully while Miguel carries the finished dish to the table.",
    story:
      "The dinner finally looks ready, so I turn off the stove and prepare to serve it. Mia already set the table earlier, so everything is neat and ready for us. I carry the pan carefully to the table and serve everyone a portion. The chicken and vegetables look colorful and smell wonderful in the warm kitchen. Lucas helps by pouring water into everyone's glasses at the table. “Great job, Miguel!” Lucas says as we all sit down together, and I feel proud looking at the meal I cooked. Even with the small mistake earlier, dinner looks surprisingly good tonight.",
    questions: [
      { text: "Who already set the table earlier?", answer: "Mia." },
      { text: "What does Lucas help with?", answer: "Pouring water into the glasses." },
      { text: "How does Miguel feel looking at the meal?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Mia already set the table earlier.", answer: true },
      { text: "Miguel serves everyone a portion.", answer: true },
      { text: "Lucas refuses to help with anything at the table.", answer: false },
      { text: "Miguel feels proud looking at the meal.", answer: true },
      { text: "The dinner looks completely ruined despite the effort.", answer: false },
    ],
    buildSentence: [
      {
        target: "The dinner finally looks ready, so I turn off the stove and prepare to serve it.",
        jumbled: ["it.", "The", "so", "stove", "turn", "dinner", "serve", "looks", "to", "ready,", "off", "prepare", "I", "the", "and", "finally"],
      },
      {
        target: "Mia already set the table earlier, so everything is neat and ready for us.",
        jumbled: ["ready", "so", "for", "earlier,", "the", "table", "Mia", "already", "us.", "everything", "neat", "is", "set", "and"],
      },
      {
        target: "I carry the pan carefully to the table and serve everyone a portion.",
        jumbled: ["carry", "the", "serve", "a", "the", "and", "everyone", "carefully", "I", "pan", "to", "portion.", "table"],
      },
      {
        target: "Lucas helps by pouring water into everyone's glasses at the table.",
        jumbled: ["glasses", "water", "at", "Lucas", "table.", "pouring", "helps", "everyone's", "by", "into", "the"],
      },
      {
        target: "“Great job, Miguel!” Lucas says as we all sit down together, and I feel proud looking at the meal I cooked.",
        jumbled: ["Miguel!”", "proud", "“Great", "feel", "together,", "as", "I", "cooked.", "Lucas", "down", "at", "says", "all", "sit", "looking", "the", "job,", "we", "and", "I", "meal"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about sitting down to eat with your family.",
    mySentenceExample: "I feel happy sitting down to eat dinner with my family.",
  },
  {
    number: 8,
    title: "Sofia Comes Home",
    image: null,
    imageNote: "Sofia walking through the front door, smiling with surprise as she sees the family sitting at a set dinner table.",
    story:
      "Just as we start eating, Sofia arrives home from her long day of work. She walks into the kitchen and sees us all sitting at the table together. Her eyes widen with surprise, and she smiles warmly at the scene in front of her. “Miguel, you actually cooked a whole dinner?” she asks, clearly impressed by the effort I made. I invite her to sit down and try a plate before it gets too cold. She tastes the chicken and vegetables and says it tastes really good tonight. I feel proud that my small kitchen mistake did not ruin the whole meal.",
    questions: [
      { text: "When does Sofia arrive home?", answer: "Just as they start eating." },
      { text: "How does Sofia react seeing the table?", answer: "Surprised and impressed." },
      { text: "What does Sofia say about the food?", answer: "That it tastes really good." },
    ],
    trueFalse: [
      { text: "Sofia arrives home just as they start eating.", answer: true },
      { text: "Sofia feels no surprise at all seeing the table.", answer: false },
      { text: "Sofia asks if Miguel actually cooked a whole dinner.", answer: true },
      { text: "Sofia says the food tastes really good.", answer: true },
      { text: "Miguel feels the mistake ruined the whole meal.", answer: false },
    ],
    buildSentence: [
      {
        target: "Just as we start eating, Sofia arrives home from her long day of work.",
        jumbled: ["arrives", "of", "Sofia", "her", "Just", "home", "work.", "start", "long", "as", "eating,", "from", "we", "day"],
      },
      {
        target: "She walks into the kitchen and sees us all sitting at the table together.",
        jumbled: ["She", "the", "sees", "all", "together.", "the", "table", "and", "kitchen", "walks", "sitting", "at", "into", "us"],
      },
      {
        target: "Her eyes widen with surprise, and she smiles warmly at the scene in front of her.",
        jumbled: ["of", "surprise,", "at", "eyes", "warmly", "Her", "her.", "with", "smiles", "scene", "she", "widen", "in", "the", "and", "front"],
      },
      {
        target: "I invite her to sit down and try a plate before it gets too cold.",
        jumbled: ["sit", "try", "I", "too", "and", "it", "invite", "to", "a", "before", "gets", "her", "plate", "cold.", "down"],
      },
      {
        target: "I feel proud that my small kitchen mistake did not ruin the whole meal.",
        jumbled: ["I", "meal.", "kitchen", "small", "the", "that", "my", "whole", "feel", "proud", "not", "did", "ruin", "mistake"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about surprising someone with something you did.",
    mySentenceExample: "I surprised my mom by cleaning the whole house.",
  },
  {
    number: 9,
    title: "Enjoying Dessert Together",
    image: null,
    imageNote: "The family sitting together eating slices of chocolate cake, everyone smiling and talking around the dinner table.",
    story:
      "After finishing dinner, I bring out the small chocolate cake we bought earlier at the store. Everyone's eyes light up, and Mia claps her hands excitedly at the table. I cut the cake carefully and give everyone a slice on their plate. We eat dessert together, laughing and talking about our day around the table. “This cake was a great idea, Miguel,” Sofia says, telling us about her busy day at work while enjoying her piece of cake. Lucas talks proudly about helping stir the vegetables earlier in the kitchen. This simple family moment feels warm and special, even though tonight started with a small kitchen mistake.",
    questions: [
      { text: "What dessert does Miguel bring out?", answer: "A small chocolate cake." },
      { text: "How does Mia react seeing the cake?", answer: "She claps her hands excitedly." },
      { text: "What does Lucas talk proudly about?", answer: "Helping stir the vegetables." },
    ],
    trueFalse: [
      { text: "Miguel brings out a small chocolate cake.", answer: true },
      { text: "Mia feels nothing seeing the cake.", answer: false },
      { text: "Miguel gives everyone a slice of cake.", answer: true },
      { text: "Lucas talks proudly about helping stir the vegetables.", answer: true },
      { text: "This family moment feels cold and awkward.", answer: false },
    ],
    buildSentence: [
      {
        target: "I bring out the small chocolate cake we bought earlier at the store.",
        jumbled: ["cake", "small", "at", "earlier", "store.", "out", "the", "bought", "chocolate", "bring", "we", "the", "I"],
      },
      {
        target: "Everyone's eyes light up, and Mia claps her hands excitedly at the table.",
        jumbled: ["claps", "up,", "at", "excitedly", "the", "hands", "table.", "eyes", "Everyone's", "Mia", "her", "light", "and"],
      },
      {
        target: "I cut the cake carefully and give everyone a slice on their plate.",
        jumbled: ["a", "cake", "the", "and", "their", "cut", "slice", "on", "plate.", "give", "carefully", "I", "everyone"],
      },
      {
        target: "“This cake was a great idea, Miguel,” Sofia says, telling us about her busy day at work while enjoying her piece of cake.",
        jumbled: ["at", "of", "says,", "was", "while", "great", "idea,", "Sofia", "a", "us", "cake.", "busy", "telling", "cake", "her", "enjoying", "piece", "her", "about", "work", "“This", "day", "Miguel,”"],
      },
      {
        target: "This simple family moment feels warm and special, even though tonight started with a small kitchen mistake.",
        jumbled: ["small", "family", "special,", "moment", "simple", "mistake.", "started", "even", "warm", "feels", "kitchen", "though", "a", "tonight", "This", "with", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a special moment with your family.",
    mySentenceExample: "Eating dessert together is a special moment for my family.",
  },
  {
    number: 10,
    title: "A Proud Cook",
    image: null,
    imageNote: "Miguel washing dishes at the sink that evening, looking satisfied, Sofia drying dishes beside him and smiling.",
    story:
      "Later that evening, Sofia and I wash the dishes together while the kids watch television. “I'm proud of you for cooking tonight, Miguel,” Sofia says, drying a plate beside me. I tell her about the small mistake with the chicken, and she laughs kindly about it. “Everyone makes mistakes when they try something new,” she reminds me warmly. I feel happy that dinner turned out well despite my nervous start earlier today. Cooking for my family taught me something important about trying new things bravely. Next time, I already feel more confident about cooking dinner again for everyone.",
    questions: [
      { text: "What do Sofia and Miguel do together that evening?", answer: "Wash the dishes." },
      { text: "What does Sofia say she is proud of?", answer: "Miguel cooking tonight." },
      { text: "How does Miguel feel about cooking next time?", answer: "More confident." },
    ],
    trueFalse: [
      { text: "Sofia and Miguel wash the dishes together.", answer: true },
      { text: "Sofia says she is proud of Miguel for cooking.", answer: true },
      { text: "Sofia gets angry hearing about the small mistake.", answer: false },
      { text: "Miguel feels happy that dinner turned out well.", answer: true },
      { text: "Miguel feels less confident about cooking again.", answer: false },
    ],
    buildSentence: [
      {
        target: "Later that evening, Sofia and I wash the dishes together while the kids watch television.",
        jumbled: ["the", "Sofia", "I", "watch", "that", "wash", "evening,", "dishes", "the", "and", "television.", "while", "together", "Later", "kids"],
      },
      {
        target: "“I'm proud of you for cooking tonight, Miguel,” Sofia says, drying a plate beside me.",
        jumbled: ["plate", "cooking", "you", "for", "tonight,", "Sofia", "a", "says,", "beside", "“I'm", "Miguel,”", "proud", "of", "me.", "drying"],
      },
      {
        target: "I tell her about the small mistake with the chicken, and she laughs kindly about it.",
        jumbled: ["the", "and", "mistake", "her", "small", "I", "about", "the", "laughs", "chicken,", "tell", "she", "it.", "with", "about", "kindly"],
      },
      {
        target: "I feel happy that dinner turned out well despite my nervous start earlier today.",
        jumbled: ["my", "dinner", "happy", "today.", "turned", "despite", "nervous", "earlier", "out", "I", "that", "feel", "start", "well"],
      },
      {
        target: "Cooking for my family taught me something important about trying new things bravely.",
        jumbled: ["taught", "things", "me", "bravely.", "for", "important", "trying", "Cooking", "something", "new", "about", "my", "family"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling proud after trying something new.",
    mySentenceExample: "I felt proud after trying something new and it went well.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
