// A2 Kids digital storybook, Book 25: "A Rainy Day Adventure"
// Static content -- no Supabase. Third book in the A2 Kids batch
// (Books 23-30). Same structure/level as storybookData23.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook25/cover.jpg";

export const STORYBOOK_TITLE = "A Rainy Day Adventure";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Ruby and Sam sitting inside a cushion 'pirate ship' in their living room, rain streaming down the window behind them, both wearing paper pirate hats and laughing.";

export const CHARACTERS = [
  { name: "Ruby", role: "The narrator, a young girl", look: "Red hair in a bun, striped shirt, imaginative and a bit disappointed at first." },
  { name: "Sam", role: "Ruby's younger brother", look: "Messy blond hair, dinosaur pajamas, energetic but easily startled." },
  { name: "Mom", role: "Ruby and Sam's mother", look: "Apron, warm smile, playful and creative." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Rained Out",
    image: null,
    imageNote: "Ruby standing at the window with a disappointed face, rain pouring down outside, a packed picnic basket sitting untouched on the kitchen table.",
    story:
      "This morning, I wake up excited because Mom promised a picnic at the park. I run to the window, but instead of sunshine, I see heavy gray clouds and pouring rain. “Oh no,” I whisper sadly. Sam runs in wearing his shoes already, ready to go, but his face falls too when he looks outside. “The picnic is cancelled,” Mom says gently, seeing our disappointed faces. “I'm sorry, Ruby and Sam.” I feel my excitement disappear completely, replaced by boredom. The whole day suddenly feels ruined, and I flop onto the couch with a heavy sigh.",
    questions: [
      { text: "What did Mom promise for today?", answer: "A picnic at the park." },
      { text: "What does Ruby see when she looks outside?", answer: "Heavy gray clouds and pouring rain." },
      { text: "How does Ruby feel when the picnic is cancelled?", answer: "Her excitement disappears -- she feels bored and disappointed." },
    ],
    trueFalse: [
      { text: "Mom promised a picnic at the park.", answer: true },
      { text: "The weather is sunny and warm.", answer: false },
      { text: "Ruby feels excited when the picnic is cancelled.", answer: false },
    ],
    buildSentence: [
      {
        target: "This morning, I wake up excited because Mom promised a picnic at the park.",
        jumbled: ["at", "Mom", "I", "park.", "This", "because", "the", "excited", "a", "wake", "up", "promised", "picnic", "morning,"],
      },
      {
        target: "I run to the window, but instead of sunshine, I see heavy gray clouds and pouring rain.",
        jumbled: ["window,", "rain.", "clouds", "sunshine,", "to", "and", "pouring", "run", "see", "instead", "the", "but", "of", "I", "heavy", "I", "gray"],
      },
      {
        target: "Sam runs in wearing his shoes already, ready to go, but his face falls too when he looks outside.",
        jumbled: ["ready", "to", "his", "go,", "already,", "face", "when", "wearing", "but", "he", "runs", "too", "falls", "outside.", "Sam", "his", "in", "shoes", "looks"],
      },
      {
        target: "“The picnic is cancelled,” Mom says gently, seeing our disappointed faces.",
        jumbled: ["faces.", "cancelled,”", "disappointed", "seeing", "Mom", "gently,", "“The", "says", "picnic", "is", "our"],
      },
      {
        target: "The whole day suddenly feels ruined, and I flop onto the couch with a heavy sigh.",
        jumbled: ["heavy", "suddenly", "feels", "I", "The", "flop", "day", "with", "a", "and", "couch", "the", "ruined,", "onto", "sigh.", "whole"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a plan that got cancelled because of weather.",
    mySentenceExample: "Our soccer game got cancelled because of heavy rain.",
  },
  {
    number: 2,
    title: "Bored Inside",
    image: null,
    imageNote: "Ruby and Sam lying upside down on the couch, staring at the ceiling with bored expressions, toys scattered untouched on the floor.",
    story:
      "For almost an hour, Sam and I lie on the couch doing nothing. “There's nothing to do,” Sam complains, kicking his legs. I agree completely, even though we have plenty of toys scattered around the room. Somehow, none of them seem interesting today. I stare at the ceiling and listen to the rain tapping against the window. “I wanted to go outside,” I mutter grumpily. “This is the worst rainy day ever, Ruby,” Sam groans. He sighs loudly next to me, and we both stay quiet, feeling stuck and a little grumpy about our ruined plans. The afternoon stretches ahead of us, gray and boring.",
    questions: [
      { text: "What do Ruby and Sam do for an hour?", answer: "Lie on the couch doing nothing." },
      { text: "What does Sam complain about?", answer: "That there's nothing to do." },
      { text: "What sound does Ruby listen to?", answer: "Rain tapping against the window." },
    ],
    trueFalse: [
      { text: "Sam says there's nothing to do.", answer: true },
      { text: "Ruby finds all the toys very interesting today.", answer: false },
      { text: "Ruby listens to rain tapping the window.", answer: true },
    ],
    buildSentence: [
      {
        target: "For almost an hour, Sam and I lie on the couch doing nothing.",
        jumbled: ["doing", "and", "the", "I", "on", "nothing.", "an", "For", "almost", "Sam", "couch", "hour,", "lie"],
      },
      {
        target: "I agree completely, even though we have plenty of toys scattered around the room.",
        jumbled: ["of", "completely,", "toys", "around", "plenty", "I", "even", "room.", "scattered", "we", "the", "though", "agree", "have"],
      },
      {
        target: "I stare at the ceiling and listen to the rain tapping against the window.",
        jumbled: ["at", "ceiling", "against", "and", "the", "the", "window.", "the", "stare", "tapping", "listen", "rain", "to", "I"],
      },
      {
        target: "“This is the worst rainy day ever, Ruby,” Sam groans.",
        jumbled: ["Sam", "day", "groans.", "worst", "“This", "is", "rainy", "the", "ever,", "Ruby,”"],
      },
      {
        target: "He sighs loudly next to me, and we both stay quiet, feeling stuck and a little grumpy about our ruined plans.",
        jumbled: ["loudly", "and", "next", "quiet,", "and", "grumpy", "stay", "our", "little", "we", "about", "He", "me,", "plans.", "sighs", "a", "ruined", "stuck", "feeling", "both", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt bored.",
    mySentenceExample: "I felt bored on a long car ride last summer.",
  },
  {
    number: 3,
    title: "Mom's Idea",
    image: null,
    imageNote: "Mom kneeling in front of Ruby and Sam with an excited grin, gesturing toward a pile of couch cushions and blankets.",
    story:
      "Mom walks into the living room and notices our bored, grumpy faces immediately. “I have an idea,” she says with a mischievous smile. “Since we can't go on an outdoor adventure, why don't we have an indoor one instead?” Sam sits up quickly, suddenly curious. “What kind of adventure?” he asks. “A pirate ship adventure, Ruby and Sam!” Mom announces, grabbing cushions from the couch. My boredom disappears instantly, replaced by excitement. “Let's do it!” I shout, jumping off the couch to help. Suddenly, the rainy day feels full of exciting possibilities again.",
    questions: [
      { text: "What does Mom suggest?", answer: "An indoor pirate ship adventure." },
      { text: "How does Sam react to Mom's idea?", answer: "He sits up quickly, curious." },
      { text: "What happens to Ruby's boredom?", answer: "It disappears instantly, replaced by excitement." },
    ],
    trueFalse: [
      { text: "Mom suggests an indoor pirate ship adventure.", answer: true },
      { text: "Sam is not interested in Mom's idea at all.", answer: false },
      { text: "Ruby's boredom disappears when she hears the idea.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mom walks into the living room and notices our bored, grumpy faces immediately.",
        jumbled: ["Mom", "into", "notices", "bored,", "walks", "our", "immediately.", "living", "the", "and", "room", "grumpy", "faces"],
      },
      {
        target: "“Since we can't go on an outdoor adventure, why don't we have an indoor one instead?”",
        jumbled: ["adventure,", "instead?”", "“Since", "don't", "why", "have", "outdoor", "we", "an", "an", "go", "on", "can't", "indoor", "we", "one"],
      },
      {
        target: "“A pirate ship adventure, Ruby and Sam!”",
        jumbled: ["and", "pirate", "“A", "Sam!”", "Ruby", "ship", "adventure,"],
      },
      {
        target: "Mom announces, grabbing cushions from the couch.",
        jumbled: ["couch.", "Mom", "grabbing", "the", "from", "cushions", "announces,"],
      },
      {
        target: "“Let's do it!” I shout, jumping off the couch to help.",
        jumbled: ["couch", "do", "shout,", "the", "“Let's", "to", "jumping", "I", "help.", "it!”", "off"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a creative idea someone shared with you.",
    mySentenceExample: "My teacher shared a creative idea for our art project.",
  },
  {
    number: 4,
    title: "Building the Ship",
    image: null,
    imageNote: "Ruby and Sam stacking couch cushions and draping a blanket to form a ship shape, Mom handing them a broomstick as a mast.",
    story:
      "We start building our pirate ship right away. Sam and I stack couch cushions to make the ship's tall sides, while Mom drapes a big blue blanket underneath for the ocean. “Every ship needs a mast!” Mom says, handing us a broomstick to stand upright between two cushions. We tie a small towel to the top for a sail. It takes almost twenty minutes, but soon our living room transforms into a real pirate ship. “This looks amazing, Ruby!” Sam says, his eyes wide with wonder. I feel proud of what we built together as a team.",
    questions: [
      { text: "What do they use to make the ship's sides?", answer: "Couch cushions." },
      { text: "What does the broomstick become?", answer: "The ship's mast." },
      { text: "How long does building the ship take?", answer: "Almost twenty minutes." },
    ],
    trueFalse: [
      { text: "They stack cushions for the ship's sides.", answer: true },
      { text: "The broomstick becomes a mast.", answer: true },
      { text: "Building the ship takes only two minutes.", answer: false },
    ],
    buildSentence: [
      {
        target: "We start building our pirate ship right away.",
        jumbled: ["away.", "our", "pirate", "start", "We", "right", "building", "ship"],
      },
      {
        target: "Sam and I stack couch cushions to make the ship's tall sides, while Mom drapes a big blue blanket underneath for the ocean.",
        jumbled: ["drapes", "the", "make", "the", "cushions", "stack", "ship's", "I", "Sam", "sides,", "Mom", "big", "ocean.", "blue", "while", "for", "blanket", "and", "couch", "tall", "a", "to", "underneath"],
      },
      {
        target: "“Every ship needs a mast!” Mom says, handing us a broomstick to stand upright between two cushions.",
        jumbled: ["a", "ship", "us", "between", "“Every", "a", "to", "broomstick", "cushions.", "two", "mast!”", "needs", "handing", "stand", "Mom", "upright", "says,"],
      },
      {
        target: "It takes almost twenty minutes, but soon our living room transforms into a real pirate ship.",
        jumbled: ["but", "minutes,", "twenty", "It", "takes", "soon", "real", "into", "ship.", "pirate", "transforms", "room", "a", "our", "almost", "living"],
      },
      {
        target: "“This looks amazing, Ruby!” Sam says, his eyes wide with wonder.",
        jumbled: ["his", "looks", "wide", "says,", "eyes", "“This", "with", "amazing,", "Sam", "wonder.", "Ruby!”"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you built with your family.",
    mySentenceExample: "I built a sandcastle with my family at the beach.",
  },
  {
    number: 5,
    title: "Setting Sail",
    image: null,
    imageNote: "Ruby standing proudly at the front of the cushion ship holding the broomstick mast, Sam sitting behind her steering an imaginary wheel, rain visible through the window.",
    story:
      "“All aboard!” I shout, climbing onto the ship with an imaginary captain's hat. Sam takes his place at the pretend steering wheel, ready for adventure. “Captain Ruby, which direction should we sail?” he asks, playing along perfectly. “Straight ahead, into the storm!” I announce dramatically, pointing at the rainy window. Outside, thunder rumbles softly, and it fits perfectly into our pretend ocean storm. We rock back and forth on our cushion ship, pretending huge waves are crashing around us. This imaginative game makes the real rain outside feel exciting instead of disappointing.",
    questions: [
      { text: "What does Ruby pretend to be?", answer: "The captain." },
      { text: "What does Sam do at the steering wheel?", answer: "Steers the pretend ship." },
      { text: "How does the real thunder fit into their game?", answer: "It becomes the sound of their pretend ocean storm." },
    ],
    trueFalse: [
      { text: "Ruby pretends to be the captain.", answer: true },
      { text: "Sam refuses to play the steering game.", answer: false },
      { text: "The thunder fits into their pretend storm.", answer: true },
    ],
    buildSentence: [
      {
        target: "“All aboard!” I shout, climbing onto the ship with an imaginary captain's hat.",
        jumbled: ["I", "with", "“All", "hat.", "climbing", "ship", "an", "captain's", "shout,", "onto", "the", "aboard!”", "imaginary"],
      },
      {
        target: "Sam takes his place at the pretend steering wheel, ready for adventure.",
        jumbled: ["steering", "adventure.", "wheel,", "place", "the", "ready", "his", "pretend", "at", "takes", "Sam", "for"],
      },
      {
        target: "“Straight ahead, into the storm!”",
        jumbled: ["“Straight", "storm!”", "the", "ahead,", "into"],
      },
      {
        target: "Outside, thunder rumbles softly, and it fits perfectly into our pretend ocean storm.",
        jumbled: ["into", "fits", "storm.", "it", "our", "and", "softly,", "ocean", "thunder", "perfectly", "pretend", "rumbles", "Outside,"],
      },
      {
        target: "We rock back and forth on our cushion ship, pretending huge waves are crashing around us.",
        jumbled: ["and", "our", "around", "cushion", "us.", "pretending", "rock", "waves", "ship,", "are", "forth", "on", "huge", "crashing", "We", "back"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a pretend game you like to play.",
    mySentenceExample: "I like to play a pretend game about being an astronaut.",
  },
  {
    number: 6,
    title: "The Treasure Map",
    image: null,
    imageNote: "Ruby sitting on the floor drawing a treasure map with crayons, Sam watching over her shoulder curiously.",
    story:
      "“Every good pirate adventure needs a treasure map,” I tell Sam, grabbing paper and crayons. I draw our living room, marking the couch, the bookshelf, and the kitchen door with an X for hidden treasure. While Sam is busy building a lookout tower from blocks, I sneak away and hide small toys and a bag of cookies around the house. When I finish, I show Sam the map, and his eyes light up with excitement. “Real treasure, Ruby?” he asks hopefully. “Only one way to find out,” I say with a mysterious smile, and we grab the map together.",
    questions: [
      { text: "What does Ruby draw?", answer: "A treasure map of the living room." },
      { text: "What does Ruby hide around the house?", answer: "Small toys and a bag of cookies." },
      { text: "How does Sam react to the map?", answer: "His eyes light up with excitement." },
    ],
    trueFalse: [
      { text: "Ruby draws a treasure map.", answer: true },
      { text: "Ruby hides real gold coins around the house.", answer: false },
      { text: "Sam's eyes light up with excitement.", answer: true },
    ],
    buildSentence: [
      {
        target: "“Every good pirate adventure needs a treasure map,” I tell Sam, grabbing paper and crayons.",
        jumbled: ["crayons.", "grabbing", "tell", "pirate", "“Every", "treasure", "adventure", "map,”", "Sam,", "good", "a", "I", "and", "paper", "needs"],
      },
      {
        target: "I draw our living room, marking the couch, the bookshelf, and the kitchen door with an X for hidden treasure.",
        jumbled: ["marking", "and", "door", "hidden", "kitchen", "treasure.", "an", "bookshelf,", "I", "couch,", "living", "the", "the", "with", "our", "X", "for", "draw", "the", "room,"],
      },
      {
        target: "I sneak away and hide small toys and a bag of cookies around the house.",
        jumbled: ["of", "sneak", "I", "cookies", "small", "around", "and", "house.", "toys", "away", "bag", "the", "and", "hide", "a"],
      },
      {
        target: "I show Sam the map, and his eyes light up with excitement.",
        jumbled: ["and", "show", "with", "excitement.", "I", "Sam", "light", "the", "map,", "his", "up", "eyes"],
      },
      {
        target: "“Only one way to find out,” I say with a mysterious smile, and we grab the map together.",
        jumbled: ["out,”", "grab", "and", "“Only", "map", "to", "one", "way", "the", "find", "we", "smile,", "say", "with", "a", "together.", "I", "mysterious"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you would like to find hidden somewhere.",
    mySentenceExample: "I would like to find a hidden box full of chocolate.",
  },
  {
    number: 7,
    title: "Sam Gets Scared",
    image: null,
    imageNote: "Sam covering his ears with a startled face as a bright flash of lightning fills the window, Ruby putting a comforting arm around him.",
    story:
      "As we search for the first clue, a sudden bright flash lights up the window, followed by a loud crack of thunder. Sam jumps and covers his ears, his face pale with fear. “I don't like that sound, Ruby,” he whispers, holding onto my arm tightly. I remember feeling scared of thunder too when I was younger, so I understand exactly how he feels. “It's okay,” I say softly, sitting beside him. “Let's pretend the thunder is cannons from an enemy pirate ship, and we are the brave crew sailing right through it.” Slowly, Sam's fear turns into excitement again.",
    questions: [
      { text: "What happens outside that scares Sam?", answer: "A bright flash of lightning and loud thunder." },
      { text: "How does Sam react to the thunder?", answer: "He jumps and covers his ears, scared." },
      { text: "How does Ruby help Sam feel better?", answer: "She pretends the thunder is cannons from an enemy pirate ship." },
    ],
    trueFalse: [
      { text: "A flash of lightning and thunder scares Sam.", answer: true },
      { text: "Ruby ignores Sam's fear completely.", answer: false },
      { text: "Ruby turns the thunder into part of their pretend game.", answer: true },
    ],
    buildSentence: [
      {
        target: "A sudden bright flash lights up the window, followed by a loud crack of thunder.",
        jumbled: ["the", "lights", "bright", "a", "crack", "window,", "followed", "flash", "sudden", "loud", "by", "up", "of", "A", "thunder."],
      },
      {
        target: "Sam jumps and covers his ears, his face pale with fear.",
        jumbled: ["ears,", "his", "pale", "face", "covers", "Sam", "his", "and", "fear.", "with", "jumps"],
      },
      {
        target: "I remember feeling scared of thunder too when I was younger, so I understand exactly how he feels.",
        jumbled: ["was", "I", "how", "scared", "remember", "feeling", "I", "I", "he", "when", "exactly", "younger,", "of", "too", "so", "thunder", "feels.", "understand"],
      },
      {
        target: "“It's okay,” I say softly, sitting beside him.",
        jumbled: ["sitting", "say", "beside", "softly,", "I", "“It's", "okay,”", "him."],
      },
      {
        target: "“Let's pretend the thunder is cannons from an enemy pirate ship, and we are the brave crew sailing right through it.”",
        jumbled: ["right", "thunder", "brave", "the", "ship,", "the", "from", "it.”", "crew", "sailing", "an", "pirate", "are", "enemy", "pretend", "cannons", "is", "“Let's", "and", "through", "we"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something that used to scare you.",
    mySentenceExample: "Loud thunder used to scare me when I was small.",
  },
  {
    number: 8,
    title: "Finding the Treasure",
    image: null,
    imageNote: "Ruby and Sam kneeling by the kitchen door, pulling a small bag of cookies and toys out from behind a plant, both grinning widely.",
    story:
      "Following the map carefully, we search behind the couch, under the bookshelf, and finally near the kitchen door. “X marks the spot!” I announce, pointing at a small potted plant. Sam digs behind it eagerly and pulls out the hidden bag of cookies and toys. “We found the treasure, Ruby!” he shouts, jumping up and down with joy. We celebrate our victory with a cookie snack, sitting proudly on our pirate ship. The thunder still rumbles outside, but neither of us feels scared anymore. Our imaginative adventure has turned this rainy day into something truly memorable.",
    questions: [
      { text: "Where do they finally find the treasure?", answer: "Near the kitchen door, behind a potted plant." },
      { text: "What was hidden as treasure?", answer: "A bag of cookies and toys." },
      { text: "How do they celebrate?", answer: "With a cookie snack on their pirate ship." },
    ],
    trueFalse: [
      { text: "They find the treasure near the kitchen door.", answer: true },
      { text: "The treasure is a broken toy.", answer: false },
      { text: "They celebrate by eating cookies.", answer: true },
    ],
    buildSentence: [
      {
        target: "Following the map carefully, we search behind the couch, under the bookshelf, and finally near the kitchen door.",
        jumbled: ["the", "finally", "we", "door.", "couch,", "the", "behind", "near", "the", "map", "Following", "bookshelf,", "under", "carefully,", "the", "search", "kitchen", "and"],
      },
      {
        target: "I announce, pointing at a small potted plant.",
        jumbled: ["plant.", "a", "potted", "at", "small", "pointing", "announce,", "I"],
      },
      {
        target: "Sam digs behind it eagerly and pulls out the hidden bag of cookies and toys.",
        jumbled: ["behind", "and", "hidden", "pulls", "the", "cookies", "of", "it", "and", "digs", "bag", "eagerly", "Sam", "out", "toys."],
      },
      {
        target: "We celebrate our victory with a cookie snack, sitting proudly on our pirate ship.",
        jumbled: ["sitting", "victory", "ship.", "cookie", "our", "with", "on", "proudly", "snack,", "celebrate", "We", "a", "our", "pirate"],
      },
      {
        target: "The thunder still rumbles outside, but neither of us feels scared anymore.",
        jumbled: ["outside,", "feels", "The", "of", "scared", "rumbles", "neither", "thunder", "us", "still", "anymore.", "but"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you found something you were looking for.",
    mySentenceExample: "I felt happy when I found my missing sock under the bed.",
  },
  {
    number: 9,
    title: "Rain Stops",
    image: null,
    imageNote: "Ruby and Sam looking out the window together at a colorful rainbow stretching across the clearing sky.",
    story:
      "By late afternoon, the rain slowly starts to stop, and soft sunlight peeks through the clouds. “Look, Ruby!” Sam shouts, pointing out the window. A bright rainbow stretches across the sky, its colors clear and beautiful. We press our faces against the glass, watching in amazement. “Maybe tomorrow we can finally have our picnic,” Mom says, joining us at the window. I smile, realizing that although our original plan was ruined, today turned out to be full of unexpected fun anyway. Sometimes the best adventures happen when plans change completely.",
    questions: [
      { text: "What does Sam see out the window?", answer: "A rainbow." },
      { text: "What does Mom say about tomorrow?", answer: "Maybe they can finally have their picnic." },
      { text: "What does Ruby realize about today?", answer: "That the best adventures happen when plans change." },
    ],
    trueFalse: [
      { text: "Sam sees a rainbow in the sky.", answer: true },
      { text: "Mom says they can never have a picnic now.", answer: false },
      { text: "Ruby realizes today turned out to be fun anyway.", answer: true },
    ],
    buildSentence: [
      {
        target: "By late afternoon, the rain slowly starts to stop, and soft sunlight peeks through the clouds.",
        jumbled: ["through", "stop,", "late", "clouds.", "peeks", "the", "By", "starts", "slowly", "and", "rain", "the", "afternoon,", "to", "sunlight", "soft"],
      },
      {
        target: "“Look, Ruby!” Sam shouts, pointing out the window.",
        jumbled: ["the", "Ruby!”", "pointing", "“Look,", "Sam", "out", "window.", "shouts,"],
      },
      {
        target: "A bright rainbow stretches across the sky, its colors clear and beautiful.",
        jumbled: ["colors", "and", "rainbow", "bright", "across", "its", "A", "beautiful.", "stretches", "sky,", "clear", "the"],
      },
      {
        target: "“Maybe tomorrow we can finally have our picnic,” Mom says, joining us at the window.",
        jumbled: ["the", "at", "we", "finally", "can", "our", "picnic,”", "us", "joining", "window.", "Mom", "“Maybe", "tomorrow", "says,", "have"],
      },
      {
        target: "I smile, realizing that although our original plan was ruined, today turned out to be full of unexpected fun anyway.",
        jumbled: ["plan", "turned", "to", "was", "smile,", "our", "today", "anyway.", "although", "that", "unexpected", "fun", "realizing", "I", "out", "ruined,", "be", "original", "of", "full"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a beautiful thing you saw in the sky.",
    mySentenceExample: "I saw a beautiful rainbow after the rain last week.",
  },
  {
    number: 10,
    title: "Best Rainy Day Ever",
    image: null,
    imageNote: "Ruby and Sam sitting happily inside their cushion ship at sunset, tired but smiling, the room cozy and warmly lit.",
    story:
      "That evening, as I get ready for bed, I think back on our whole rainy day. We built a ship, sailed through a pretend storm, found hidden treasure, and even watched a beautiful rainbow together. I realize that this unplanned day became one of the best days I have had in a long time, maybe even better than a regular picnic would have been. Sam gives me a tired, happy hug and says, “Can we build the ship again next time it rains, Ruby?” I laugh and agree completely, already looking forward to our next rainy day adventure.",
    questions: [
      { text: "What did Ruby and Sam do during their rainy day?", answer: "Built a ship, sailed through a pretend storm, found treasure, and watched a rainbow." },
      { text: "How does Ruby feel about the day by the end?", answer: "That it was one of the best days she's had." },
      { text: "What does Sam ask about next time?", answer: "If they can build the ship again next time it rains." },
    ],
    trueFalse: [
      { text: "They built a ship and found hidden treasure.", answer: true },
      { text: "Ruby thinks the day was boring and wasted.", answer: false },
      { text: "Sam wants to build the ship again next time.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, as I get ready for bed, I think back on our whole rainy day.",
        jumbled: ["day.", "bed,", "as", "I", "ready", "rainy", "for", "our", "back", "evening,", "get", "on", "That", "I", "think", "whole"],
      },
      {
        target: "We built a ship, sailed through a pretend storm, found hidden treasure, and even watched a beautiful rainbow together.",
        jumbled: ["built", "a", "a", "a", "through", "storm,", "rainbow", "and", "together.", "sailed", "ship,", "found", "We", "pretend", "treasure,", "even", "hidden", "beautiful", "watched"],
      },
      {
        target: "I realize that this unplanned day became one of the best days I have had in a long time, maybe even better than a regular picnic would have been.",
        jumbled: ["days", "a", "been.", "better", "unplanned", "best", "had", "have", "I", "even", "have", "picnic", "I", "would", "became", "day", "regular", "in", "this", "a", "that", "time,", "of", "maybe", "than", "the", "one", "long", "realize"],
      },
      {
        target: "Sam gives me a tired, happy hug and says, “Can we build the ship again next time it rains, Ruby?”",
        jumbled: ["time", "it", "tired,", "and", "we", "a", "build", "me", "“Can", "again", "Ruby?”", "next", "Sam", "happy", "hug", "says,", "ship", "the", "rains,", "gives"],
      },
      {
        target: "I laugh and agree completely, already looking forward to our next rainy day adventure.",
        jumbled: ["to", "agree", "already", "next", "forward", "laugh", "looking", "adventure.", "and", "rainy", "I", "day", "our", "completely,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a day that turned out better than you expected.",
    mySentenceExample: "My camping trip turned out better than I expected because of the fun games.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
