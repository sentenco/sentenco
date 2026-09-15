// A2 Kids digital storybook, Book 29: "The Science Fair Project"
// Static content -- no Supabase. Seventh book in the A2 Kids batch
// (Books 23-30). Same structure/level as storybookData23.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook29/cover.jpg";

export const STORYBOOK_TITLE = "The Science Fair Project";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Nora and Finn standing proudly beside a small erupting volcano model on a table at the school gymnasium, orange 'lava' foam bubbling out, a science fair banner behind them.";

export const CHARACTERS = [
  { name: "Nora", role: "The narrator, a young girl", look: "Ponytail, safety goggles around her neck, determined and curious." },
  { name: "Finn", role: "Nora's project partner", look: "Round glasses, science-themed T-shirt, patient and detail-oriented." },
  { name: "Ms. Ortiz", role: "Nora and Finn's teacher", look: "Lab coat over regular clothes, encouraging and knowledgeable." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Choosing a Project",
    image: null,
    imageNote: "Ms. Ortiz standing at the front of the classroom explaining the science fair, a list of project ideas written on the whiteboard behind her, Nora and Finn whispering excitedly.",
    story:
      "Ms. Ortiz announces that our class will join the school science fair next month, and everyone starts talking excitedly. “You may work with a partner,” she says, and I immediately turn to Finn, my closest friend in science class. “Let's make an erupting volcano, Nora!” Finn suggests enthusiastically, and I agree right away because it sounds both exciting and a little challenging. We write our idea on the sign-up sheet, feeling proud that we chose something more interesting than a simple poster. This project already feels like the beginning of a fun adventure together.",
    questions: [
      { text: "What event does Ms. Ortiz announce?", answer: "The school science fair." },
      { text: "What project does Finn suggest?", answer: "An erupting volcano." },
      { text: "How does Nora feel about the idea?", answer: "Excited, though a little challenged." },
    ],
    trueFalse: [
      { text: "Ms. Ortiz announces a school science fair.", answer: true },
      { text: "Finn suggests making a simple poster.", answer: false },
      { text: "Nora feels excited about their project idea.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Ortiz announces that our class will join the school science fair next month, and everyone starts talking excitedly.",
        jumbled: ["excitedly.", "everyone", "next", "starts", "school", "our", "the", "join", "talking", "announces", "science", "that", "will", "class", "Ortiz", "month,", "and", "Ms.", "fair"],
      },
      {
        target: "“You may work with a partner,” she says, and I immediately turn to Finn, my closest friend in science class.",
        jumbled: ["to", "work", "and", "partner,”", "Finn,", "turn", "she", "“You", "in", "science", "immediately", "my", "closest", "friend", "class.", "a", "I", "says,", "with", "may"],
      },
      {
        target: "“Let's make an erupting volcano, Nora!”",
        jumbled: ["an", "erupting", "volcano,", "make", "“Let's", "Nora!”"],
      },
      {
        target: "Finn suggests enthusiastically, and I agree right away because it sounds both exciting and a little challenging.",
        jumbled: ["away", "challenging.", "and", "I", "exciting", "because", "sounds", "enthusiastically,", "it", "right", "both", "little", "suggests", "and", "agree", "Finn", "a"],
      },
      {
        target: "We write our idea on the sign-up sheet, feeling proud that we chose something more interesting than a simple poster.",
        jumbled: ["sign-up", "feeling", "on", "proud", "something", "more", "idea", "write", "our", "simple", "sheet,", "we", "a", "than", "the", "that", "poster.", "interesting", "We", "chose"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a project you worked on with a partner.",
    mySentenceExample: "I worked with a partner on a poster about the solar system.",
  },
  {
    number: 2,
    title: "Gathering Materials",
    image: null,
    imageNote: "Nora and Finn standing in a kitchen holding baking soda, vinegar, red food coloring, and modeling clay, checking items off a written list.",
    story:
      "After school, Finn comes to my house so we can gather everything we need. We check our list carefully: baking soda, vinegar, red food coloring, and clay for the volcano's shape. “My mom says we can use the kitchen table,” I tell Finn as we spread out the materials. We also grab an old plastic bottle to use as the volcano's core. “I think we have everything now, Nora,” Finn says, double-checking the list one more time. Looking at all our supplies laid out neatly, I feel a mix of excitement and nervousness about actually building the project tomorrow.",
    questions: [
      { text: "What materials do they gather?", answer: "Baking soda, vinegar, red food coloring, and clay." },
      { text: "Where do they plan to build the project?", answer: "The kitchen table." },
      { text: "What will they use as the volcano's core?", answer: "An old plastic bottle." },
    ],
    trueFalse: [
      { text: "They gather baking soda and vinegar.", answer: true },
      { text: "They decide not to use any food coloring.", answer: false },
      { text: "They will use a plastic bottle as the core.", answer: true },
    ],
    buildSentence: [
      {
        target: "Finn comes to my house so we can gather everything we need.",
        jumbled: ["Finn", "can", "everything", "so", "my", "we", "we", "house", "to", "need.", "gather", "comes"],
      },
      {
        target: "We check our list carefully: baking soda, vinegar, red food coloring, and clay for the volcano's shape.",
        jumbled: ["volcano's", "soda,", "carefully:", "the", "red", "vinegar,", "coloring,", "for", "and", "shape.", "our", "We", "check", "clay", "baking", "food", "list"],
      },
      {
        target: "“My mom says we can use the kitchen table,” I tell Finn as we spread out the materials.",
        jumbled: ["I", "“My", "we", "says", "tell", "materials.", "can", "out", "kitchen", "we", "spread", "mom", "as", "the", "table,”", "use", "the", "Finn"],
      },
      {
        target: "We also grab an old plastic bottle to use as the volcano's core.",
        jumbled: ["plastic", "old", "to", "also", "use", "volcano's", "core.", "the", "bottle", "grab", "as", "We", "an"],
      },
      {
        target: "Looking at all our supplies laid out neatly, I feel a mix of excitement and nervousness about actually building the project tomorrow.",
        jumbled: ["mix", "excitement", "our", "actually", "at", "laid", "project", "tomorrow.", "of", "about", "building", "neatly,", "a", "supplies", "feel", "nervousness", "out", "the", "all", "and", "Looking", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about materials you needed for a project.",
    mySentenceExample: "I needed glue, scissors, and paper for my art project.",
  },
  {
    number: 3,
    title: "Building the Volcano",
    image: null,
    imageNote: "Nora molding gray clay around a plastic bottle on the kitchen table while Finn smooths the sides, both focused and slightly messy with clay on their hands.",
    story:
      "On Saturday, we spend the whole afternoon shaping our volcano. I mold soft gray clay around the plastic bottle, while Finn carefully smooths the sides to make it look more realistic. “It needs to look like a real mountain, Nora,” Finn says, adding small bumps and ridges along the surface. Our hands get covered in sticky clay, but neither of us minds at all. After almost two hours of careful work, our volcano finally starts looking impressive. “This actually looks amazing,” I say proudly, admiring our creation sitting on the table between us.",
    questions: [
      { text: "What does Nora mold around the bottle?", answer: "Soft gray clay." },
      { text: "What does Finn add to make it realistic?", answer: "Small bumps and ridges." },
      { text: "How long does building the volcano take?", answer: "Almost two hours." },
    ],
    trueFalse: [
      { text: "Nora molds clay around a plastic bottle.", answer: true },
      { text: "Finn refuses to help with the shaping.", answer: false },
      { text: "Building the volcano takes almost two hours.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Saturday, we spend the whole afternoon shaping our volcano.",
        jumbled: ["shaping", "whole", "afternoon", "volcano.", "the", "On", "spend", "we", "our", "Saturday,"],
      },
      {
        target: "I mold soft gray clay around the plastic bottle, while Finn carefully smooths the sides to make it look more realistic.",
        jumbled: ["I", "while", "soft", "gray", "around", "carefully", "clay", "more", "the", "Finn", "it", "bottle,", "plastic", "look", "to", "realistic.", "the", "mold", "smooths", "make", "sides"],
      },
      {
        target: "“It needs to look like a real mountain, Nora,” Finn says, adding small bumps and ridges along the surface.",
        jumbled: ["the", "a", "mountain,", "and", "ridges", "like", "says,", "needs", "“It", "real", "Nora,”", "along", "to", "adding", "surface.", "look", "Finn", "bumps", "small"],
      },
      {
        target: "Our hands get covered in sticky clay, but neither of us minds at all.",
        jumbled: ["sticky", "covered", "neither", "us", "of", "get", "hands", "clay,", "all.", "in", "at", "but", "minds", "Our"],
      },
      {
        target: "“This actually looks amazing,” I say proudly, admiring our creation sitting on the table between us.",
        jumbled: ["I", "creation", "on", "table", "proudly,", "“This", "admiring", "between", "looks", "our", "the", "sitting", "us.", "amazing,”", "say", "actually"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you built with your hands.",
    mySentenceExample: "I built a small birdhouse with my hands last summer.",
  },
  {
    number: 4,
    title: "First Test Fails",
    image: null,
    imageNote: "Nora and Finn peering disappointedly into the volcano's opening as a weak, watery fizz barely bubbles out instead of a dramatic eruption.",
    story:
      "Excited to see results, we pour baking soda into the volcano's opening, followed quickly by vinegar mixed with red food coloring. We wait eagerly, expecting a dramatic eruption, but instead, only a weak, watery fizz bubbles out slowly. “That's it, Nora?” Finn asks, clearly disappointed by the underwhelming result. I feel my excitement deflate a little too. “Something must be wrong with our mixture,” I say, staring at the barely-bubbling liquid. Our first attempt is definitely not the exciting eruption we imagined, and we both realize we need to figure out what went wrong.",
    questions: [
      { text: "What do they pour into the volcano first?", answer: "Baking soda, followed by vinegar mixed with red food coloring." },
      { text: "What happens instead of a dramatic eruption?", answer: "Only a weak, watery fizz." },
      { text: "How do Nora and Finn feel about the result?", answer: "Disappointed." },
    ],
    trueFalse: [
      { text: "They pour baking soda then vinegar into the volcano.", answer: true },
      { text: "The eruption is huge and dramatic on the first try.", answer: false },
      { text: "Nora and Finn feel disappointed by the result.", answer: true },
    ],
    buildSentence: [
      {
        target: "Excited to see results, we pour baking soda into the volcano's opening, followed quickly by vinegar mixed with red food coloring.",
        jumbled: ["coloring.", "mixed", "we", "opening,", "by", "food", "followed", "soda", "the", "into", "volcano's", "results,", "Excited", "to", "with", "baking", "red", "see", "pour", "quickly", "vinegar"],
      },
      {
        target: "We wait eagerly, expecting a dramatic eruption, but instead, only a weak, watery fizz bubbles out slowly.",
        jumbled: ["eruption,", "We", "a", "expecting", "out", "wait", "only", "eagerly,", "bubbles", "weak,", "instead,", "watery", "dramatic", "but", "fizz", "slowly.", "a"],
      },
      {
        target: "“That's it, Nora?” Finn asks, clearly disappointed by the underwhelming result.",
        jumbled: ["it,", "clearly", "by", "disappointed", "Nora?”", "underwhelming", "result.", "“That's", "Finn", "asks,", "the"],
      },
      {
        target: "I feel my excitement deflate a little too.",
        jumbled: ["I", "deflate", "a", "my", "excitement", "feel", "too.", "little"],
      },
      {
        target: "Our first attempt is definitely not the exciting eruption we imagined, and we both realize we need to figure out what went wrong.",
        jumbled: ["to", "we", "definitely", "figure", "imagined,", "is", "out", "need", "first", "exciting", "eruption", "wrong.", "attempt", "the", "and", "both", "we", "Our", "what", "realize", "we", "not", "went"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time something didn't work the way you expected.",
    mySentenceExample: "My drawing didn't work the way I expected the first time.",
  },
  {
    number: 5,
    title: "Figuring Out Why",
    image: null,
    imageNote: "Nora and Finn reading a science book together at the kitchen table, pointing at a diagram explaining chemical reactions, both looking thoughtful.",
    story:
      "Determined to solve the mystery, we open a science book Finn brought about chemical reactions. “Maybe we didn't use enough baking soda, Nora,” Finn suggests, reading through the explanation carefully. We learn that the reaction between baking soda and vinegar needs a proper ratio to create a strong, bubbly eruption. “We only used a small spoonful,” I realize, checking our earlier measurements. Understanding the science behind our failed experiment actually makes the problem feel less frustrating and more like an interesting puzzle we can definitely solve together with a little more research.",
    questions: [
      { text: "What book do they read?", answer: "A science book about chemical reactions." },
      { text: "What does Finn suggest might be the problem?", answer: "That they didn't use enough baking soda." },
      { text: "How does understanding the science make Nora feel?", answer: "Less frustrated -- more like solving an interesting puzzle." },
    ],
    trueFalse: [
      { text: "They read a science book about chemical reactions.", answer: true },
      { text: "Finn thinks they used too much baking soda.", answer: false },
      { text: "Understanding the science makes the problem feel like a puzzle.", answer: true },
    ],
    buildSentence: [
      {
        target: "Determined to solve the mystery, we open a science book Finn brought about chemical reactions.",
        jumbled: ["chemical", "the", "mystery,", "to", "solve", "book", "a", "Finn", "brought", "about", "we", "science", "open", "Determined", "reactions."],
      },
      {
        target: "“Maybe we didn't use enough baking soda, Nora,” Finn suggests, reading through the explanation carefully.",
        jumbled: ["explanation", "the", "“Maybe", "suggests,", "through", "didn't", "use", "soda,", "Nora,”", "we", "carefully.", "Finn", "baking", "reading", "enough"],
      },
      {
        target: "We learn that the reaction between baking soda and vinegar needs a proper ratio to create a strong, bubbly eruption.",
        jumbled: ["eruption.", "soda", "ratio", "and", "bubbly", "a", "reaction", "a", "learn", "needs", "to", "strong,", "vinegar", "create", "that", "between", "proper", "the", "We", "baking"],
      },
      {
        target: "“We only used a small spoonful,” I realize, checking our earlier measurements.",
        jumbled: ["small", "used", "a", "spoonful,”", "I", "measurements.", "“We", "earlier", "only", "our", "realize,", "checking"],
      },
      {
        target: "Understanding the science behind our failed experiment actually makes the problem feel less frustrating and more like an interesting puzzle we can definitely solve together with a little more research.",
        jumbled: ["solve", "feel", "more", "an", "the", "research.", "can", "problem", "a", "like", "failed", "behind", "and", "we", "experiment", "makes", "frustrating", "science", "little", "puzzle", "the", "with", "actually", "more", "definitely", "our", "interesting", "together", "Understanding", "less"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you researched to solve a problem.",
    mySentenceExample: "I researched online to solve a problem with my computer.",
  },
  {
    number: 6,
    title: "Trying Again",
    image: null,
    imageNote: "Nora carefully measuring baking soda with a tablespoon while Finn writes numbers on a small notepad, both concentrating hard.",
    story:
      "Armed with our new knowledge, we clean out the volcano and prepare for a second attempt. This time, I carefully measure three full tablespoons of baking soda instead of just one small spoonful. Finn writes down our exact measurements on a notepad, so we can remember what worked. We pour the vinegar mixture in slowly, watching closely. The eruption is definitely bigger this time, but it still stops quickly instead of bubbling for a long time. “Better, but not perfect yet, Nora,” Finn says, and we both agree to try adjusting the recipe one more time.",
    questions: [
      { text: "How much baking soda does Nora measure this time?", answer: "Three full tablespoons." },
      { text: "What does Finn do to remember their measurements?", answer: "Writes them down on a notepad." },
      { text: "How does the second attempt compare to the first?", answer: "Bigger, but it still stops quickly." },
    ],
    trueFalse: [
      { text: "Nora measures three tablespoons of baking soda.", answer: true },
      { text: "Finn does not write down their measurements.", answer: false },
      { text: "The second eruption is bigger than the first.", answer: true },
    ],
    buildSentence: [
      {
        target: "Armed with our new knowledge, we clean out the volcano and prepare for a second attempt.",
        jumbled: ["a", "clean", "our", "the", "new", "knowledge,", "out", "and", "prepare", "Armed", "we", "with", "volcano", "second", "attempt.", "for"],
      },
      {
        target: "This time, I carefully measure three full tablespoons of baking soda instead of just one small spoonful.",
        jumbled: ["of", "small", "spoonful.", "just", "I", "three", "measure", "tablespoons", "baking", "This", "one", "full", "instead", "time,", "soda", "of", "carefully"],
      },
      {
        target: "Finn writes down our exact measurements on a notepad, so we can remember what worked.",
        jumbled: ["we", "our", "so", "can", "Finn", "writes", "remember", "exact", "measurements", "notepad,", "down", "worked.", "what", "a", "on"],
      },
      {
        target: "We pour the vinegar mixture in slowly, watching closely.",
        jumbled: ["watching", "closely.", "the", "slowly,", "in", "We", "vinegar", "mixture", "pour"],
      },
      {
        target: "“Better, but not perfect yet, Nora,” Finn says, and we both agree to try adjusting the recipe one more time.",
        jumbled: ["and", "“Better,", "yet,", "but", "agree", "recipe", "to", "more", "Nora,”", "time.", "one", "not", "the", "perfect", "we", "Finn", "says,", "try", "adjusting", "both"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about improving something on a second try.",
    mySentenceExample: "My drawing looked much better on my second try.",
  },
  {
    number: 7,
    title: "A Breakthrough",
    image: null,
    imageNote: "A bright orange foam eruption bursting dramatically out of the volcano model, Nora and Finn jumping back with delighted, surprised expressions.",
    story:
      "For our third attempt, we add a small amount of dish soap to make the reaction foamier and longer-lasting, an idea Finn found in another book. We measure everything precisely and pour the mixture in together. This time, bright orange foam erupts dramatically out of the volcano, bubbling and flowing down the sides for almost a full minute! “YES! We did it!” I shout, jumping up and down excitedly. “Nice work, Nora!” Finn says, high-fiving me with a huge grin. After three attempts and lots of patience, we finally created the impressive eruption we had originally imagined.",
    questions: [
      { text: "What new ingredient do they add this time?", answer: "A small amount of dish soap." },
      { text: "What happens with the third attempt?", answer: "Bright orange foam erupts dramatically for almost a minute." },
      { text: "How do Nora and Finn react?", answer: "They shout and high-five, excited." },
    ],
    trueFalse: [
      { text: "They add dish soap to the mixture.", answer: true },
      { text: "The third eruption fails completely.", answer: false },
      { text: "Nora and Finn celebrate excitedly.", answer: true },
    ],
    buildSentence: [
      {
        target: "For our third attempt, we add a small amount of dish soap to make the reaction foamier and longer-lasting, an idea Finn found in another book.",
        jumbled: ["make", "dish", "add", "the", "soap", "longer-lasting,", "third", "our", "foamier", "amount", "attempt,", "reaction", "a", "found", "in", "For", "small", "and", "an", "to", "book.", "of", "idea", "we", "Finn", "another"],
      },
      {
        target: "We measure everything precisely and pour the mixture in together.",
        jumbled: ["We", "precisely", "together.", "and", "in", "measure", "everything", "the", "pour", "mixture"],
      },
      {
        target: "This time, bright orange foam erupts dramatically out of the volcano, bubbling and flowing down the sides for almost a full minute!",
        jumbled: ["This", "almost", "foam", "a", "bubbling", "and", "of", "down", "time,", "bright", "orange", "out", "dramatically", "erupts", "full", "volcano,", "sides", "for", "the", "minute!", "the", "flowing"],
      },
      {
        target: "“YES! We did it!” I shout, jumping up and down excitedly.",
        jumbled: ["did", "“YES!", "I", "excitedly.", "jumping", "and", "We", "it!”", "shout,", "down", "up"],
      },
      {
        target: "We finally created the impressive eruption we had originally imagined.",
        jumbled: ["eruption", "imagined.", "finally", "the", "impressive", "had", "originally", "We", "we", "created"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you finally succeeded after trying many times.",
    mySentenceExample: "I finally succeeded at riding a bike after trying many times.",
  },
  {
    number: 8,
    title: "Practicing the Presentation",
    image: null,
    imageNote: "Nora and Finn standing in front of a poster board covered in diagrams and notes, practicing their presentation in Nora's living room.",
    story:
      "With our volcano finally working, we shift our focus to preparing what we will say at the fair. We make a colorful poster explaining the chemical reaction, complete with diagrams and simple explanations. “We should explain why our first two attempts failed too, Nora,” Finn suggests, “Judges might like knowing we learned from mistakes.” We practice our presentation multiple times in my living room, taking turns speaking clearly and confidently. By our fifth practice round, we finally feel ready and comfortable explaining every single detail about our exciting, if slightly messy, science journey.",
    questions: [
      { text: "What do they make to explain their project?", answer: "A colorful poster with diagrams." },
      { text: "What does Finn suggest including?", answer: "Explaining why their first two attempts failed." },
      { text: "How many times do they practice?", answer: "Five times." },
    ],
    trueFalse: [
      { text: "They make a poster with diagrams.", answer: true },
      { text: "Finn suggests hiding their failed attempts.", answer: false },
      { text: "They practice their presentation five times.", answer: true },
    ],
    buildSentence: [
      {
        target: "With our volcano finally working, we shift our focus to preparing what we will say at the fair.",
        jumbled: ["finally", "the", "working,", "our", "With", "preparing", "what", "our", "to", "at", "shift", "we", "volcano", "we", "fair.", "will", "say", "focus"],
      },
      {
        target: "We make a colorful poster explaining the chemical reaction, complete with diagrams and simple explanations.",
        jumbled: ["simple", "colorful", "a", "complete", "and", "chemical", "reaction,", "make", "poster", "the", "with", "diagrams", "explanations.", "We", "explaining"],
      },
      {
        target: "“We should explain why our first two attempts failed too, Nora,” Finn suggests, “Judges might like knowing we learned from mistakes.”",
        jumbled: ["failed", "Finn", "too,", "why", "first", "like", "should", "might", "attempts", "we", "knowing", "“We", "“Judges", "Nora,”", "learned", "suggests,", "mistakes.”", "two", "from", "explain", "our"],
      },
      {
        target: "We practice our presentation multiple times in my living room, taking turns speaking clearly and confidently.",
        jumbled: ["our", "clearly", "times", "and", "taking", "practice", "living", "confidently.", "presentation", "multiple", "my", "turns", "in", "room,", "We", "speaking"],
      },
      {
        target: "By our fifth practice round, we finally feel ready and comfortable explaining every single detail about our exciting, if slightly messy, science journey.",
        jumbled: ["single", "journey.", "science", "if", "ready", "and", "practice", "round,", "every", "about", "fifth", "our", "feel", "explaining", "detail", "slightly", "finally", "messy,", "comfortable", "By", "our", "exciting,", "we"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about preparing to explain something to other people.",
    mySentenceExample: "I practiced explaining my project before showing it to my class.",
  },
  {
    number: 9,
    title: "Science Fair Day",
    image: null,
    imageNote: "Nora and Finn standing beside their volcano table in a busy school gymnasium, presenting to a group of interested judges and classmates.",
    story:
      "The school gymnasium buzzes with excitement as families and judges walk between colorful project tables. My stomach feels full of nervous butterflies as our turn approaches. When the judges arrive at our table, Finn and I take deep breaths and begin explaining our project confidently, just like we practiced. We even demonstrate the eruption live, and the judges' eyes widen with delighted surprise as orange foam bubbles impressively down the sides. “Excellent explanation of the chemistry, and great persistence, Nora,” one judge says, glancing at our name card before writing notes on her clipboard. I feel incredibly proud of everything we accomplished together.",
    questions: [
      { text: "How does Nora feel before the judges arrive?", answer: "Full of nervous butterflies." },
      { text: "What do Nora and Finn demonstrate live?", answer: "The eruption." },
      { text: "What does the judge say about their project?", answer: "Excellent explanation of the chemistry, and great persistence." },
    ],
    trueFalse: [
      { text: "Nora feels nervous butterflies before the judges arrive.", answer: true },
      { text: "They refuse to demonstrate the eruption.", answer: false },
      { text: "The judge praises their persistence.", answer: true },
    ],
    buildSentence: [
      {
        target: "The school gymnasium buzzes with excitement as families and judges walk between colorful project tables.",
        jumbled: ["buzzes", "school", "project", "families", "gymnasium", "between", "excitement", "and", "judges", "walk", "colorful", "The", "as", "with", "tables."],
      },
      {
        target: "My stomach feels full of nervous butterflies as our turn approaches.",
        jumbled: ["full", "as", "of", "My", "butterflies", "turn", "feels", "nervous", "our", "approaches.", "stomach"],
      },
      {
        target: "Finn and I take deep breaths and begin explaining our project confidently, just like we practiced.",
        jumbled: ["confidently,", "breaths", "our", "take", "Finn", "project", "and", "like", "begin", "we", "just", "and", "deep", "practiced.", "explaining", "I"],
      },
      {
        target: "We even demonstrate the eruption live, and the judges' eyes widen with delighted surprise as orange foam bubbles impressively down the sides.",
        jumbled: ["eyes", "and", "foam", "eruption", "orange", "live,", "surprise", "We", "widen", "even", "sides.", "down", "impressively", "the", "the", "as", "judges'", "with", "bubbles", "demonstrate", "delighted", "the"],
      },
      {
        target: "“Excellent explanation of the chemistry, and great persistence, Nora,” one judge says, glancing at our name card before writing notes on her clipboard.",
        jumbled: ["says,", "explanation", "our", "before", "and", "judge", "of", "on", "notes", "card", "one", "at", "clipboard.", "glancing", "Nora,”", "great", "the", "her", "“Excellent", "persistence,", "name", "chemistry,", "writing"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you presented something to a group.",
    mySentenceExample: "I presented my book report to my whole class.",
  },
  {
    number: 10,
    title: "Ribbon and Reflection",
    image: null,
    imageNote: "Nora and Finn holding a blue 'Most Improved' ribbon together, both smiling proudly beside their volcano project, parents clapping in the background.",
    story:
      "At the end of the fair, the principal announces the winners, and my heart pounds with anticipation. We don't win first place, but we receive a special ribbon for “Most Improved Project” after judges heard about our three attempts. Holding the blue ribbon together, Finn and I feel just as proud as if we had won everything. “We didn't give up, and that's what really matters, Nora,” Finn says, and I completely agree with him. This whole experience taught me that failing at first isn't the end of a project, it's simply part of the process toward something great.",
    questions: [
      { text: "What ribbon do Nora and Finn receive?", answer: "Most Improved Project." },
      { text: "Why do they receive this ribbon?", answer: "Because the judges heard about their three attempts." },
      { text: "What lesson does Nora learn from the experience?", answer: "That failing at first isn't the end, it's part of the process toward something great." },
    ],
    trueFalse: [
      { text: "They win first place in the fair.", answer: false },
      { text: "They receive a 'Most Improved' ribbon.", answer: true },
      { text: "Nora learns that failing at first is part of the process.", answer: true },
    ],
    buildSentence: [
      {
        target: "At the end of the fair, the principal announces the winners, and my heart pounds with anticipation.",
        jumbled: ["the", "fair,", "heart", "end", "At", "the", "and", "winners,", "my", "with", "principal", "anticipation.", "announces", "of", "the", "pounds", "the"],
      },
      {
        target: "We don't win first place, but we receive a special ribbon for “Most Improved Project” after judges heard about our three attempts.",
        jumbled: ["judges", "We", "but", "receive", "Improved", "for", "place,", "our", "ribbon", "after", "attempts.", "win", "first", "we", "heard", "Project”", "don't", "special", "“Most", "three", "a", "about"],
      },
      {
        target: "Holding the blue ribbon together, Finn and I feel just as proud as if we had won everything.",
        jumbled: ["won", "everything.", "the", "just", "together,", "Finn", "blue", "Holding", "as", "ribbon", "I", "feel", "and", "as", "we", "had", "if", "proud"],
      },
      {
        target: "“We didn't give up, and that's what really matters, Nora,” Finn says, and I completely agree with him.",
        jumbled: ["him.", "up,", "give", "Nora,”", "really", "and", "says,", "completely", "I", "matters,", "agree", "and", "Finn", "didn't", "that's", "“We", "what", "with"],
      },
      {
        target: "This whole experience taught me that failing at first isn't the end of a project, it's simply part of the process toward something great.",
        jumbled: ["process", "failing", "the", "part", "me", "This", "that", "great.", "taught", "project,", "simply", "experience", "of", "something", "of", "toward", "end", "it's", "isn't", "at", "first", "the", "whole", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you learned from not giving up.",
    mySentenceExample: "I learned that practicing every day helps me improve at soccer.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
