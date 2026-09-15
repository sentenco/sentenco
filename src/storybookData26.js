// A2 Kids digital storybook, Book 26: "Helping in the Garden"
// Static content -- no Supabase. Fourth book in the A2 Kids batch
// (Books 23-30). Same structure/level as storybookData23.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook26/cover.jpg";

export const STORYBOOK_TITLE = "Helping in the Garden";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Theo and Grandpa kneeling together in a sunny backyard garden, planting seeds in neat rows, gardening tools and a watering can nearby.";

export const CHARACTERS = [
  { name: "Theo", role: "The narrator, a young boy", look: "Messy brown hair, striped shirt, curious and eager to learn." },
  { name: "Grandpa", role: "Theo's grandfather", look: "Straw hat, gray beard, patient and wise." },
  { name: "Ivy", role: "The neighbor's daughter, Theo's friend", look: "Two braids, green rain boots, cheerful and helpful." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Grandpa's Garden",
    image: null,
    imageNote: "Theo standing at the edge of Grandpa's backyard garden, looking at neat rows of dirt and gardening tools, Grandpa smiling beside him.",
    story:
      "Every Saturday, I visit Grandpa's house, and today he takes me straight to his backyard garden. “Would you like to help me plant vegetables this year, Theo?” he asks, handing me a small trowel. I look at the empty rows of soft brown dirt and feel excited about the idea. “What can we grow?” I ask curiously. “Tomatoes, carrots, and maybe some pumpkins,” Grandpa says, smiling under his straw hat. I have never grown anything before, but Grandpa promises to teach me everything step by step. I feel proud that he trusts me to help with his special garden.",
    questions: [
      { text: "What does Grandpa ask Theo?", answer: "If he would like to help plant vegetables." },
      { text: "What vegetables might they grow?", answer: "Tomatoes, carrots, and pumpkins." },
      { text: "How does Theo feel about helping?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Grandpa asks Theo to help plant vegetables.", answer: true },
      { text: "Theo has grown many vegetables before.", answer: false },
      { text: "Theo feels proud that Grandpa trusts him.", answer: true },
    ],
    buildSentence: [
      {
        target: "Every Saturday, I visit Grandpa's house, and today he takes me straight to his backyard garden.",
        jumbled: ["today", "Grandpa's", "house,", "to", "and", "straight", "takes", "Every", "his", "me", "backyard", "Saturday,", "garden.", "I", "he", "visit"],
      },
      {
        target: "“Would you like to help me plant vegetables this year, Theo?” he asks, handing me a small trowel.",
        jumbled: ["you", "handing", "trowel.", "plant", "“Would", "vegetables", "to", "Theo?”", "small", "me", "asks,", "a", "me", "year,", "like", "this", "help", "he"],
      },
      {
        target: "I look at the empty rows of soft brown dirt and feel excited about the idea.",
        jumbled: ["at", "soft", "excited", "brown", "idea.", "empty", "I", "the", "about", "of", "look", "feel", "rows", "dirt", "the", "and"],
      },
      {
        target: "“Tomatoes, carrots, and maybe some pumpkins,” Grandpa says, smiling under his straw hat.",
        jumbled: ["carrots,", "under", "hat.", "and", "says,", "some", "pumpkins,”", "straw", "maybe", "“Tomatoes,", "smiling", "Grandpa", "his"],
      },
      {
        target: "I have never grown anything before, but Grandpa promises to teach me everything step by step.",
        jumbled: ["step.", "promises", "before,", "me", "everything", "never", "teach", "grown", "step", "I", "anything", "by", "Grandpa", "have", "to", "but"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something a family member taught you.",
    mySentenceExample: "My mom taught me how to bake bread.",
  },
  {
    number: 2,
    title: "Planting the Seeds",
    image: null,
    imageNote: "Theo carefully dropping small seeds into a shallow hole in the soil, Grandpa demonstrating the correct depth with his fingers.",
    story:
      "Grandpa shows me how to make a small hole in the soil with my finger, just deep enough for a seed. “Not too deep, or the seed won't be able to grow,” he explains carefully. I drop a tiny tomato seed into each hole and gently cover it with soft dirt. My hands get a little muddy, but I don't mind at all. “How long until it grows?” I ask eagerly. “Good things take time, Theo,” Grandpa says with a wise smile. We plant an entire row together, and I already feel a strange excitement about watching something grow from nothing.",
    questions: [
      { text: "How deep should the holes be?", answer: "Just deep enough for a seed, not too deep." },
      { text: "What does Theo plant in each hole?", answer: "A tiny tomato seed." },
      { text: "What does Grandpa say about growing things?", answer: "That good things take time." },
    ],
    trueFalse: [
      { text: "The holes should be very deep.", answer: false },
      { text: "Theo plants tomato seeds.", answer: true },
      { text: "Grandpa says good things take time.", answer: true },
    ],
    buildSentence: [
      {
        target: "Grandpa shows me how to make a small hole in the soil with my finger, just deep enough for a seed.",
        jumbled: ["hole", "to", "deep", "a", "Grandpa", "just", "make", "me", "enough", "seed.", "small", "how", "with", "the", "in", "for", "my", "soil", "shows", "a", "finger,"],
      },
      {
        target: "“Not too deep, or the seed won't be able to grow,” he explains carefully.",
        jumbled: ["seed", "“Not", "the", "be", "too", "won't", "deep,", "explains", "to", "he", "or", "carefully.", "grow,”", "able"],
      },
      {
        target: "I drop a tiny tomato seed into each hole and gently cover it with soft dirt.",
        jumbled: ["gently", "hole", "with", "tomato", "dirt.", "drop", "tiny", "each", "seed", "I", "and", "a", "cover", "soft", "into", "it"],
      },
      {
        target: "“How long until it grows?” I ask eagerly.",
        jumbled: ["until", "I", "eagerly.", "long", "“How", "grows?”", "ask", "it"],
      },
      {
        target: "We plant an entire row together, and I already feel a strange excitement about watching something grow from nothing.",
        jumbled: ["entire", "nothing.", "strange", "grow", "watching", "row", "excitement", "about", "plant", "We", "a", "and", "feel", "I", "an", "already", "from", "together,", "something"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something that takes a long time to happen.",
    mySentenceExample: "Growing a tall tree takes a very long time.",
  },
  {
    number: 3,
    title: "Watering Every Day",
    image: null,
    imageNote: "Theo carrying a small watering can across the garden, carefully sprinkling water over the newly planted rows of soil.",
    story:
      "Grandpa explains that seeds need water and sunlight every single day to grow properly. Now I visit the garden every afternoon after school, carrying a small green watering can. I pour water gently over each row, careful not to drown the tiny seeds underneath. “You're becoming a real gardener, Theo,” Grandpa says, watching me from his porch chair. It becomes part of my daily routine, and I actually start looking forward to this quiet time in the garden. I check the soil for any changes, but for now, everything still looks exactly the same as before.",
    questions: [
      { text: "What do seeds need to grow properly?", answer: "Water and sunlight every day." },
      { text: "When does Theo visit the garden?", answer: "Every afternoon after school." },
      { text: "What does Grandpa say Theo is becoming?", answer: "A real gardener." },
    ],
    trueFalse: [
      { text: "Seeds need water and sunlight to grow.", answer: true },
      { text: "Theo only visits the garden once a week.", answer: false },
      { text: "Grandpa says Theo is becoming a real gardener.", answer: true },
    ],
    buildSentence: [
      {
        target: "Grandpa explains that seeds need water and sunlight every single day to grow properly.",
        jumbled: ["need", "properly.", "Grandpa", "water", "to", "and", "single", "grow", "every", "sunlight", "that", "seeds", "explains", "day"],
      },
      {
        target: "Now I visit the garden every afternoon after school, carrying a small green watering can.",
        jumbled: ["visit", "after", "afternoon", "every", "a", "carrying", "Now", "school,", "can.", "I", "small", "watering", "green", "the", "garden"],
      },
      {
        target: "I pour water gently over each row, careful not to drown the tiny seeds underneath.",
        jumbled: ["water", "each", "careful", "pour", "over", "not", "underneath.", "the", "I", "gently", "to", "seeds", "tiny", "drown", "row,"],
      },
      {
        target: "“You're becoming a real gardener, Theo,” Grandpa says, watching me from his porch chair.",
        jumbled: ["“You're", "Grandpa", "his", "chair.", "me", "real", "a", "Theo,”", "gardener,", "watching", "becoming", "from", "porch", "says,"],
      },
      {
        target: "It becomes part of my daily routine, and I actually start looking forward to this quiet time in the garden.",
        jumbled: ["of", "the", "I", "daily", "time", "looking", "my", "start", "to", "and", "forward", "in", "becomes", "quiet", "actually", "It", "garden.", "routine,", "part", "this"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a daily routine you have.",
    mySentenceExample: "I brush my teeth every morning and night.",
  },
  {
    number: 4,
    title: "Waiting Is Hard",
    image: null,
    imageNote: "Theo kneeling by the soil, staring intently at an empty patch of dirt, arms crossed with an impatient expression.",
    story:
      "After a full week of watering, I stare at the soil, but nothing seems to be happening at all. “I don't see anything growing yet,” I complain, feeling frustrated. Grandpa chuckles softly and sits down beside me. “Nothing worth having comes quickly, Theo,” he says gently. “Plants grow underground first, where we cannot see them.” I try to be patient, but waiting feels really difficult when I want to see results right away. Grandpa reminds me that even though I cannot see progress, the seeds are working hard beneath the surface every single day.",
    questions: [
      { text: "What does Theo notice after a week?", answer: "That nothing seems to be growing yet." },
      { text: "How does Theo feel about waiting?", answer: "Frustrated." },
      { text: "What does Grandpa say about plants growing?", answer: "That they grow underground first, where you cannot see them." },
    ],
    trueFalse: [
      { text: "Theo sees a huge plant after one week.", answer: false },
      { text: "Theo feels frustrated about waiting.", answer: true },
      { text: "Grandpa says plants grow underground first.", answer: true },
    ],
    buildSentence: [
      {
        target: "I stare at the soil, but nothing seems to be happening at all.",
        jumbled: ["I", "nothing", "at", "soil,", "the", "happening", "stare", "but", "be", "all.", "to", "at", "seems"],
      },
      {
        target: "“I don't see anything growing yet,” I complain, feeling frustrated.",
        jumbled: ["“I", "see", "yet,”", "I", "feeling", "don't", "frustrated.", "complain,", "growing", "anything"],
      },
      {
        target: "“Nothing worth having comes quickly, Theo,” he says gently.",
        jumbled: ["gently.", "Theo,”", "he", "having", "comes", "worth", "“Nothing", "says", "quickly,"],
      },
      {
        target: "“Plants grow underground first, where we cannot see them.”",
        jumbled: ["we", "“Plants", "grow", "see", "underground", "them.”", "first,", "where", "cannot"],
      },
      {
        target: "Grandpa reminds me that even though I cannot see progress, the seeds are working hard beneath the surface every single day.",
        jumbled: ["working", "day.", "me", "cannot", "that", "the", "every", "see", "beneath", "hard", "Grandpa", "the", "I", "surface", "progress,", "single", "seeds", "even", "are", "though", "reminds"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something that was hard for you to wait for.",
    mySentenceExample: "It was hard for me to wait for my birthday to come.",
  },
  {
    number: 5,
    title: "The First Sprout",
    image: null,
    imageNote: "Theo crouching down excitedly, pointing at a tiny green sprout poking out of the soil, Grandpa smiling proudly beside him.",
    story:
      "Two weeks after planting, I run to the garden after school like every other day. But this time, something is different! A tiny green sprout is poking up through the soil. “Grandpa! Grandpa! Come look!” I shout excitedly, waving my arms. He hurries over and kneels beside me, a proud smile spreading across his face. “That's your very first tomato plant, Theo,” he says warmly. I stare at the small green stem in amazement, hardly believing that this tiny seed actually turned into something alive. My patience finally paid off, and I feel incredibly proud.",
    questions: [
      { text: "What does Theo find after two weeks?", answer: "A tiny green sprout." },
      { text: "How does Theo react to finding it?", answer: "He shouts excitedly for Grandpa." },
      { text: "What does Grandpa call this tiny plant?", answer: "His very first tomato plant." },
    ],
    trueFalse: [
      { text: "Theo finds a tiny green sprout.", answer: true },
      { text: "Theo feels nothing special about the sprout.", answer: false },
      { text: "This is Theo's first tomato plant.", answer: true },
    ],
    buildSentence: [
      {
        target: "Two weeks after planting, I run to the garden after school like every other day.",
        jumbled: ["after", "garden", "other", "to", "Two", "weeks", "planting,", "I", "every", "after", "the", "day.", "school", "run", "like"],
      },
      {
        target: "A tiny green sprout is poking up through the soil.",
        jumbled: ["up", "tiny", "is", "A", "sprout", "soil.", "the", "poking", "green", "through"],
      },
      {
        target: "“Grandpa! Grandpa! Come look!” I shout excitedly, waving my arms.",
        jumbled: ["Come", "arms.", "I", "waving", "Grandpa!", "my", "excitedly,", "“Grandpa!", "look!”", "shout"],
      },
      {
        target: "He hurries over and kneels beside me, a proud smile spreading across his face.",
        jumbled: ["hurries", "me,", "spreading", "across", "proud", "over", "a", "face.", "kneels", "beside", "and", "his", "He", "smile"],
      },
      {
        target: "I stare at the small green stem in amazement, hardly believing that this tiny seed actually turned into something alive.",
        jumbled: ["believing", "at", "seed", "the", "this", "alive.", "amazement,", "something", "actually", "in", "I", "stem", "into", "turned", "small", "green", "stare", "hardly", "that", "tiny"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time your patience paid off.",
    mySentenceExample: "My patience paid off when I finally learned to swim.",
  },
  {
    number: 6,
    title: "Uh-oh, Weeds!",
    image: null,
    imageNote: "Theo and Grandpa kneeling in the garden, carefully pulling tall green weeds from around the young tomato plants.",
    story:
      "A few days later, I notice strange plants growing between our neat rows of vegetables. “What are these?” I ask, pointing at the tall, spiky green plants. “Those are weeds,” Grandpa explains. “They steal water and sunlight from our real plants, so we need to remove them, Theo.” We spend the whole afternoon carefully pulling weeds by their roots, making sure not to disturb our growing vegetables nearby. My hands get dirty and a little tired, but I understand that taking care of a garden means solving problems as they appear, not just planting and waiting.",
    questions: [
      { text: "What strange plants does Theo notice?", answer: "Weeds." },
      { text: "Why do weeds need to be removed?", answer: "Because they steal water and sunlight from the real plants." },
      { text: "What does Theo learn about taking care of a garden?", answer: "That it means solving problems as they appear." },
    ],
    trueFalse: [
      { text: "Weeds steal water and sunlight from vegetables.", answer: true },
      { text: "Grandpa says weeds are helpful and should stay.", answer: false },
      { text: "Theo learns that gardening means solving problems.", answer: true },
    ],
    buildSentence: [
      {
        target: "A few days later, I notice strange plants growing between our neat rows of vegetables.",
        jumbled: ["vegetables.", "days", "I", "neat", "plants", "few", "our", "A", "of", "between", "notice", "growing", "rows", "strange", "later,"],
      },
      {
        target: "“What are these?” I ask, pointing at the tall, spiky green plants.",
        jumbled: ["I", "tall,", "“What", "these?”", "ask,", "pointing", "the", "green", "plants.", "at", "are", "spiky"],
      },
      {
        target: "“Those are weeds,” Grandpa explains.",
        jumbled: ["weeds,”", "explains.", "“Those", "Grandpa", "are"],
      },
      {
        target: "“They steal water and sunlight from our real plants, so we need to remove them, Theo.”",
        jumbled: ["water", "to", "real", "steal", "from", "plants,", "remove", "“They", "we", "and", "them,", "Theo.”", "so", "sunlight", "need", "our"],
      },
      {
        target: "My hands get dirty and a little tired, but I understand that taking care of a garden means solving problems as they appear, not just planting and waiting.",
        jumbled: ["tired,", "get", "waiting.", "care", "just", "and", "garden", "as", "of", "My", "appear,", "a", "understand", "little", "that", "and", "a", "means", "I", "but", "dirty", "not", "problems", "they", "solving", "planting", "taking", "hands"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a problem you had to solve.",
    mySentenceExample: "I had to solve a problem when my bike tire went flat.",
  },
  {
    number: 7,
    title: "Bugs in the Garden",
    image: null,
    imageNote: "Theo pointing curiously at a small red ladybug resting on a tomato leaf, Grandpa explaining beside him with a gentle smile.",
    story:
      "While weeding, I spot a small red bug with black spots resting on a leaf. “Should I remove this too?” I ask, worried it might be harmful. Grandpa leans in closer and shakes his head. “That's a ladybug, Theo. She actually eats the bad bugs that damage our plants,” he explains. I learn that not every bug in the garden is a problem; some of them are actually helpful friends. Grandpa shows me a different, greenish bug nearby that does damage leaves, and we carefully remove that one instead. I realize gardening requires paying close attention to small details.",
    questions: [
      { text: "What bug does Theo spot on a leaf?", answer: "A small red bug with black spots -- a ladybug." },
      { text: "What does the ladybug do that is helpful?", answer: "Eats the bad bugs that damage the plants." },
      { text: "What does Theo learn about bugs in the garden?", answer: "That not every bug is a problem -- some are helpful." },
    ],
    trueFalse: [
      { text: "The ladybug eats bad bugs that damage plants.", answer: true },
      { text: "Grandpa says all bugs should be removed.", answer: false },
      { text: "Theo learns that not every bug is a problem.", answer: true },
    ],
    buildSentence: [
      {
        target: "I spot a small red bug with black spots resting on a leaf.",
        jumbled: ["leaf.", "black", "red", "bug", "spot", "spots", "I", "with", "a", "a", "on", "resting", "small"],
      },
      {
        target: "“Should I remove this too?” I ask, worried it might be harmful.",
        jumbled: ["it", "worried", "harmful.", "be", "“Should", "this", "too?”", "remove", "I", "might", "ask,", "I"],
      },
      {
        target: "“That's a ladybug, Theo. She actually eats the bad bugs that damage our plants,” he explains.",
        jumbled: ["eats", "a", "the", "Theo.", "actually", "damage", "explains.", "“That's", "bad", "he", "plants,”", "our", "that", "ladybug,", "bugs", "She"],
      },
      {
        target: "I learn that not every bug in the garden is a problem; some of them are actually helpful friends.",
        jumbled: ["problem;", "are", "friends.", "not", "of", "every", "is", "helpful", "some", "actually", "learn", "them", "I", "bug", "in", "the", "garden", "that", "a"],
      },
      {
        target: "Grandpa shows me a different, greenish bug nearby that does damage leaves, and we carefully remove that one instead.",
        jumbled: ["bug", "different,", "and", "a", "carefully", "instead.", "damage", "leaves,", "we", "greenish", "me", "shows", "remove", "nearby", "that", "Grandpa", "does", "that", "one"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an animal or insect that helps in nature.",
    mySentenceExample: "Bees help flowers grow by carrying pollen.",
  },
  {
    number: 8,
    title: "Ivy Comes to Help",
    image: null,
    imageNote: "Ivy kneeling in the garden beside Theo, both children laughing while planting flowers along the garden's edge, Grandpa watching happily.",
    story:
      "One afternoon, my neighbor Ivy sees me working in the garden and walks over curiously. “Can I help too, Theo?” she asks, peeking through the fence. “Of course!” I say happily, showing her how to water the plants correctly. Grandpa gives Ivy her own small trowel, and together we plant colorful flowers along the garden's edge. Ivy asks lots of questions, and I feel proud explaining everything I have learned so far. Working together makes the afternoon fly by quickly, and the garden looks even more beautiful with two helpers instead of just one.",
    questions: [
      { text: "What does Ivy ask Theo?", answer: "Can I help too?" },
      { text: "What does Grandpa give Ivy?", answer: "Her own small trowel." },
      { text: "How does Theo feel explaining things to Ivy?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Ivy asks if she can help in the garden.", answer: true },
      { text: "Theo refuses to let Ivy help.", answer: false },
      { text: "Theo feels proud explaining things to Ivy.", answer: true },
    ],
    buildSentence: [
      {
        target: "One afternoon, my neighbor Ivy sees me working in the garden and walks over curiously.",
        jumbled: ["sees", "working", "curiously.", "over", "afternoon,", "and", "One", "the", "in", "garden", "me", "walks", "Ivy", "my", "neighbor"],
      },
      {
        target: "“Can I help too, Theo?” she asks, peeking through the fence.",
        jumbled: ["I", "help", "Theo?”", "too,", "“Can", "asks,", "peeking", "she", "the", "through", "fence."],
      },
      {
        target: "“Of course!” I say happily, showing her how to water the plants correctly.",
        jumbled: ["her", "correctly.", "course!”", "showing", "say", "happily,", "“Of", "the", "to", "water", "I", "plants", "how"],
      },
      {
        target: "Grandpa gives Ivy her own small trowel, and together we plant colorful flowers along the garden's edge.",
        jumbled: ["the", "we", "trowel,", "small", "gives", "together", "plant", "along", "own", "and", "garden's", "colorful", "Ivy", "edge.", "flowers", "her", "Grandpa"],
      },
      {
        target: "Working together makes the afternoon fly by quickly, and the garden looks even more beautiful with two helpers instead of just one.",
        jumbled: ["one.", "with", "even", "of", "the", "just", "the", "more", "beautiful", "quickly,", "helpers", "afternoon", "by", "together", "Working", "instead", "looks", "two", "makes", "and", "fly", "garden"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you taught a friend something new.",
    mySentenceExample: "I taught my friend how to play chess last weekend.",
  },
  {
    number: 9,
    title: "The Harvest",
    image: null,
    imageNote: "Theo holding a basket full of red tomatoes and orange carrots, kneeling proudly in the garden with Grandpa beside him.",
    story:
      "Weeks later, Grandpa announces exciting news. “I think it's time to harvest our vegetables, Theo,” he says with a wide smile. We walk through the garden together, and I can hardly believe how much everything has grown. I gently pick bright red tomatoes and pull up orange carrots from the soft soil, placing them carefully into a woven basket. “We grew all of this ourselves,” I say in amazement, holding up the heavy basket. After weeks of watering, waiting, and problem-solving, seeing the finished results feels incredibly rewarding and worth every single moment of effort.",
    questions: [
      { text: "What does Grandpa announce?", answer: "That it's time to harvest the vegetables." },
      { text: "What vegetables do they harvest?", answer: "Tomatoes and carrots." },
      { text: "How does Theo feel holding the basket?", answer: "Amazed and rewarded." },
    ],
    trueFalse: [
      { text: "Grandpa says it's time to harvest the vegetables.", answer: true },
      { text: "They harvest tomatoes and carrots.", answer: true },
      { text: "Theo feels disappointed with the harvest.", answer: false },
    ],
    buildSentence: [
      {
        target: "Weeks later, Grandpa announces exciting news.",
        jumbled: ["news.", "Weeks", "exciting", "Grandpa", "announces", "later,"],
      },
      {
        target: "“I think it's time to harvest our vegetables, Theo,” he says with a wide smile.",
        jumbled: ["it's", "says", "time", "Theo,”", "a", "vegetables,", "he", "our", "harvest", "smile.", "with", "to", "wide", "“I", "think"],
      },
      {
        target: "We walk through the garden together, and I can hardly believe how much everything has grown.",
        jumbled: ["believe", "garden", "the", "how", "through", "everything", "hardly", "I", "much", "has", "We", "can", "walk", "together,", "and", "grown."],
      },
      {
        target: "I gently pick bright red tomatoes and pull up orange carrots from the soft soil, placing them carefully into a woven basket.",
        jumbled: ["from", "red", "soft", "carefully", "I", "and", "woven", "pull", "them", "orange", "soil,", "the", "bright", "into", "tomatoes", "a", "gently", "basket.", "up", "placing", "pick", "carrots"],
      },
      {
        target: "Seeing the finished results feels incredibly rewarding and worth every single moment of effort.",
        jumbled: ["incredibly", "every", "Seeing", "feels", "finished", "of", "the", "and", "results", "single", "rewarding", "effort.", "moment", "worth"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finishing something you worked hard on.",
    mySentenceExample: "I felt proud after finishing my hard puzzle.",
  },
  {
    number: 10,
    title: "Sharing the Vegetables",
    image: null,
    imageNote: "Theo's whole family and Ivy's family gathered around a table filled with fresh vegetables, everyone smiling and sharing a meal together.",
    story:
      "That evening, we bring the harvested vegetables home, and Mom cooks a delicious dinner using our fresh tomatoes and carrots. We invite Ivy's family over to share the meal, and everyone praises how delicious homegrown vegetables taste. “We should share some with the neighbors too, Theo,” Grandpa suggests, and I happily agree, filling small bags with extra vegetables. Walking around the neighborhood delivering our garden's gifts makes me feel proud and generous. I realize that helping something grow, and then sharing what it produces, might be one of the best feelings I have ever experienced.",
    questions: [
      { text: "What does Mom cook for dinner?", answer: "A meal using the fresh tomatoes and carrots." },
      { text: "Who does Grandpa suggest sharing vegetables with?", answer: "The neighbors." },
      { text: "How does Theo feel about sharing the vegetables?", answer: "Proud and generous." },
    ],
    trueFalse: [
      { text: "Mom cooks dinner using the fresh vegetables.", answer: true },
      { text: "Grandpa says not to share with anyone.", answer: false },
      { text: "Theo feels proud and generous sharing the vegetables.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, we bring the harvested vegetables home, and Mom cooks a delicious dinner using our fresh tomatoes and carrots.",
        jumbled: ["evening,", "our", "carrots.", "we", "a", "bring", "and", "home,", "vegetables", "cooks", "tomatoes", "fresh", "using", "the", "harvested", "dinner", "Mom", "delicious", "That", "and"],
      },
      {
        target: "We invite Ivy's family over to share the meal, and everyone praises how delicious homegrown vegetables taste.",
        jumbled: ["the", "delicious", "invite", "and", "praises", "to", "everyone", "homegrown", "meal,", "vegetables", "We", "share", "taste.", "how", "family", "over", "Ivy's"],
      },
      {
        target: "“We should share some with the neighbors too, Theo,” Grandpa suggests, and I happily agree, filling small bags with extra vegetables.",
        jumbled: ["agree,", "some", "the", "too,", "happily", "with", "filling", "should", "extra", "Grandpa", "I", "with", "suggests,", "Theo,”", "bags", "vegetables.", "share", "neighbors", "small", "and", "“We"],
      },
      {
        target: "Walking around the neighborhood delivering our garden's gifts makes me feel proud and generous.",
        jumbled: ["gifts", "feel", "me", "the", "our", "makes", "and", "Walking", "proud", "generous.", "around", "neighborhood", "garden's", "delivering"],
      },
      {
        target: "I realize that helping something grow, and then sharing what it produces, might be one of the best feelings I have ever experienced.",
        jumbled: ["grow,", "the", "it", "realize", "what", "then", "experienced.", "I", "and", "ever", "produces,", "I", "that", "one", "might", "have", "helping", "best", "sharing", "of", "feelings", "something", "be"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you shared something with someone.",
    mySentenceExample: "I shared my lunch with a friend who forgot theirs.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
