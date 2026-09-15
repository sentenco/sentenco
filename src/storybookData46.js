// A1 Adults digital storybook, Book 46: "A Weekend at the Laundromat"
// Static content -- no Supabase. Sixth book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook46/cover.jpg";

export const STORYBOOK_TITLE = "A Weekend at the Laundromat";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Hana sitting on a bench inside a laundromat, reading a book while washing machines spin behind her, a full laundry bag beside her feet.";

export const CHARACTERS = [
  { name: "Hana", role: "The narrator, an adult", look: "Comfortable weekend clothes, hair tied back, a little tired but relaxed." },
  { name: "George", role: "A regular customer at the laundromat", look: "Baseball cap, friendly manner, chatty and helpful with the machines." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Bag Full of Laundry",
    image: null,
    imageNote: "Hana standing in her small apartment, looking at a large overflowing laundry bag on the floor.",
    story:
      "My apartment does not have a washing machine, so I go to the laundromat every weekend. Today, my laundry bag is especially full after two busy weeks at work. My phone reminder buzzes, “Time for laundry, Hana!” I gather all my dirty clothes and stuff them carefully into the large bag. I also grab some coins and a small bottle of detergent from my shelf. Carrying the heavy bag down the stairs takes a little effort this morning. I check my phone to see the laundromat's hours before I leave my building. It opens at eight, so I have plenty of time to get there today.",
    questions: [
      { text: "Why does Hana go to the laundromat every weekend?", answer: "Because her apartment does not have a washing machine." },
      { text: "What does Hana gather along with her clothes?", answer: "Coins and a small bottle of detergent." },
      { text: "What time does the laundromat open?", answer: "Eight." },
    ],
    trueFalse: [
      { text: "Hana's apartment does not have a washing machine.", answer: true },
      { text: "Hana's laundry bag is empty today.", answer: false },
      { text: "Hana grabs coins and detergent.", answer: true },
      { text: "The laundromat opens at eight.", answer: true },
      { text: "Hana has no time to get there today.", answer: false },
    ],
    buildSentence: [
      {
        target: "My apartment does not have a washing machine, so I go to the laundromat every weekend.",
        jumbled: ["so", "have", "does", "not", "I", "a", "washing", "laundromat", "the", "My", "to", "weekend.", "every", "apartment", "machine,", "go"],
      },
      {
        target: "Today, my laundry bag is especially full after two busy weeks at work.",
        jumbled: ["busy", "at", "bag", "my", "two", "after", "especially", "laundry", "Today,", "is", "full", "weeks", "work."],
      },
      {
        target: "I gather all my dirty clothes and stuff them carefully into the large bag.",
        jumbled: ["all", "and", "into", "gather", "stuff", "them", "dirty", "I", "the", "carefully", "clothes", "my", "large", "bag."],
      },
      {
        target: "I also grab some coins and a small bottle of detergent from my shelf.",
        jumbled: ["grab", "coins", "detergent", "also", "I", "shelf.", "small", "a", "some", "and", "of", "bottle", "my", "from"],
      },
      {
        target: "I check my phone to see the laundromat's hours before I leave my building.",
        jumbled: ["before", "check", "my", "I", "to", "leave", "building.", "the", "I", "hours", "see", "my", "laundromat's", "phone"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a weekly chore you do.",
    mySentenceExample: "I do my laundry every weekend at the laundromat.",
  },
  {
    number: 2,
    title: "Arriving at the Laundromat",
    image: null,
    imageNote: "Hana walking into a laundromat carrying a large laundry bag, rows of washing machines visible along the walls.",
    story:
      "I arrive at the laundromat and push open the glass door with my free hand. Rows of large washing machines line both walls, humming quietly with other people's laundry inside. The place smells clean, like soap and fresh warm air from the dryers. I find two empty machines near the back and place my heavy bag down beside them. A few other people are already there, reading magazines or looking at their phones quietly. “Good, Hana, not too crowded today,” I think, feeling relieved this early on a Saturday morning. This gives me space to sort my clothes comfortably.",
    questions: [
      { text: "What does Hana push open?", answer: "The glass door." },
      { text: "What does the laundromat smell like?", answer: "Clean, like soap and fresh warm air." },
      { text: "How does Hana feel about the crowd today?", answer: "Relieved it's not too crowded." },
    ],
    trueFalse: [
      { text: "Hana pushes open a glass door.", answer: true },
      { text: "The laundromat smells like fresh soap and warm air.", answer: true },
      { text: "Hana finds no empty machines at all.", answer: false },
      { text: "Hana feels relieved it is not too crowded.", answer: true },
      { text: "The laundromat is completely empty of people.", answer: false },
    ],
    buildSentence: [
      {
        target: "I arrive at the laundromat and push open the glass door with my free hand.",
        jumbled: ["laundromat", "the", "glass", "free", "the", "and", "push", "open", "my", "hand.", "at", "I", "door", "with", "arrive"],
      },
      {
        target: "Rows of large washing machines line both walls, humming quietly with other people's laundry inside.",
        jumbled: ["quietly", "washing", "line", "machines", "humming", "with", "walls,", "other", "inside.", "people's", "Rows", "large", "of", "laundry", "both"],
      },
      {
        target: "I find two empty machines near the back and place my heavy bag down beside them.",
        jumbled: ["beside", "machines", "heavy", "empty", "my", "place", "bag", "two", "back", "them.", "the", "find", "near", "and", "down", "I"],
      },
      {
        target: "A few other people are already there, reading magazines or looking at their phones quietly.",
        jumbled: ["their", "other", "phones", "are", "at", "quietly.", "already", "magazines", "or", "few", "reading", "looking", "A", "there,", "people"],
      },
      {
        target: "“Good, Hana, not too crowded today,” I think, feeling relieved this early on a Saturday morning.",
        jumbled: ["feeling", "a", "Saturday", "“Good,", "early", "relieved", "think,", "crowded", "too", "this", "today,”", "not", "morning.", "I", "on", "Hana,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about arriving somewhere and feeling relieved.",
    mySentenceExample: "I felt relieved when I arrived and found a seat.",
  },
  {
    number: 3,
    title: "Sorting the Clothes",
    image: null,
    imageNote: "Hana sorting laundry into two piles on a folding table, separating light and dark colored clothes.",
    story:
      "Before starting the machines, I sort my clothes into two separate piles carefully. One pile has light colors, and the other pile has dark colors only. I remember washing them together once, and a dark shirt turned my white shirts slightly gray. Since then, I always sort my laundry carefully to avoid that mistake again. I check pockets quickly for any forgotten coins, tissues, or small papers left inside. Finding an old receipt in my jeans makes me smile a little at the memory. “Nicely sorted, Hana,” I think, feeling ready to start washing my clothes.",
    questions: [
      { text: "How does Hana sort her clothes?", answer: "Into light colors and dark colors." },
      { text: "What happened once when she washed everything together?", answer: "A dark shirt turned her white shirts slightly gray." },
      { text: "What does Hana check in the pockets?", answer: "Coins, tissues, or small papers." },
    ],
    trueFalse: [
      { text: "Hana sorts her clothes into light and dark piles.", answer: true },
      { text: "A dark shirt once turned her white shirts gray.", answer: true },
      { text: "Hana never checks pockets before washing.", answer: false },
      { text: "Hana finds an old receipt in her jeans.", answer: true },
      { text: "Hana feels unprepared to start washing.", answer: false },
    ],
    buildSentence: [
      {
        target: "I sort my clothes into two separate piles carefully.",
        jumbled: ["carefully.", "sort", "piles", "separate", "into", "I", "my", "two", "clothes"],
      },
      {
        target: "One pile has light colors, and the other pile has dark colors only.",
        jumbled: ["pile", "One", "the", "light", "pile", "dark", "has", "other", "has", "only.", "colors,", "and", "colors"],
      },
      {
        target: "I remember washing them together once, and a dark shirt turned my white shirts slightly gray.",
        jumbled: ["washing", "dark", "shirt", "slightly", "remember", "and", "white", "shirts", "once,", "turned", "I", "together", "my", "gray.", "a", "them"],
      },
      {
        target: "I check pockets quickly for any forgotten coins, tissues, or small papers left inside.",
        jumbled: ["I", "forgotten", "coins,", "check", "inside.", "papers", "quickly", "left", "pockets", "any", "tissues,", "for", "small", "or"],
      },
      {
        target: "Finding an old receipt in my jeans makes me smile a little at the memory.",
        jumbled: ["at", "memory.", "an", "old", "little", "Finding", "in", "the", "my", "jeans", "receipt", "me", "a", "smile", "makes"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a mistake you learned from.",
    mySentenceExample: "I learned to sort clothes after a mistake with my white shirt.",
  },
  {
    number: 4,
    title: "Starting the Machines",
    image: null,
    imageNote: "Hana putting coins into a washing machine and pressing buttons, detergent bottle placed nearby on top of the machine.",
    story:
      "I load the first machine with my light-colored clothes and add a small amount of detergent. I put coins into the slot and press the correct buttons to start the wash cycle. The machine hums to life, and water begins filling up inside it slowly. I repeat the same steps for my second machine, this time with the dark clothes. Once both machines are running, I check my phone and see the wash will take about thirty minutes. “Now it's just waiting, Hana,” I think, deciding to sit down on a bench nearby and wait patiently for my clothes. This part of laundry day always feels a little slow.",
    questions: [
      { text: "What does Hana add to the machine?", answer: "A small amount of detergent." },
      { text: "What does Hana do to start the wash cycle?", answer: "Puts coins in the slot and presses the buttons." },
      { text: "How long will the wash take?", answer: "About thirty minutes." },
    ],
    trueFalse: [
      { text: "Hana adds a small amount of detergent.", answer: true },
      { text: "Hana puts coins into the slot.", answer: true },
      { text: "The wash will take about thirty minutes.", answer: true },
      { text: "Hana skips loading the second machine entirely.", answer: false },
      { text: "Hana decides to leave the laundromat completely.", answer: false },
    ],
    buildSentence: [
      {
        target: "I load the first machine with my light-colored clothes and add a small amount of detergent.",
        jumbled: ["I", "and", "clothes", "load", "of", "the", "a", "light-colored", "first", "add", "amount", "my", "machine", "with", "small", "detergent."],
      },
      {
        target: "I put coins into the slot and press the correct buttons to start the wash cycle.",
        jumbled: ["put", "and", "wash", "coins", "into", "start", "the", "the", "the", "buttons", "cycle.", "slot", "to", "correct", "press", "I"],
      },
      {
        target: "I repeat the same steps for my second machine, this time with the dark clothes.",
        jumbled: ["time", "this", "with", "second", "the", "my", "machine,", "repeat", "same", "I", "dark", "steps", "for", "clothes.", "the"],
      },
      {
        target: "I check my phone and see the wash will take about thirty minutes.",
        jumbled: ["take", "check", "the", "phone", "thirty", "my", "I", "minutes.", "and", "see", "will", "about", "wash"],
      },
      {
        target: "“Now it's just waiting, Hana,” I think, deciding to sit down on a bench nearby and wait patiently for my clothes.",
        jumbled: ["think,", "down", "a", "it's", "waiting,", "just", "bench", "for", "deciding", "my", "to", "nearby", "on", "“Now", "Hana,”", "sit", "wait", "clothes.", "patiently", "and", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting for a machine or task to finish.",
    mySentenceExample: "I waited for the washing machine to finish before leaving.",
  },
  {
    number: 5,
    title: "Meeting George",
    image: null,
    imageNote: "George sitting near Hana on a bench, holding a coffee cup and chatting with her, other machines humming in the background.",
    story:
      "While waiting, a man wearing a baseball cap sits down on the bench near me. “First time here, or do you come often?” he asks in a friendly voice, holding a coffee cup. “I'm Hana,” I say, and tell him I come here almost every weekend since my apartment has no machine. He introduces himself as George and says he comes here every Saturday too. We talk casually about our weeks while our clothes wash in the machines nearby. George tells me a funny story about a sock that once got completely lost in the dryer. I laugh, feeling glad for some pleasant company during the wait.",
    questions: [
      { text: "What does George ask Hana?", answer: "If it's her first time there, or if she comes often." },
      { text: "How often does Hana come to the laundromat?", answer: "Almost every weekend." },
      { text: "What story does George tell Hana?", answer: "About a sock that got lost in the dryer." },
    ],
    trueFalse: [
      { text: "George sits down on the bench near Hana.", answer: true },
      { text: "Hana comes to the laundromat almost every weekend.", answer: true },
      { text: "George says he never comes to the laundromat.", answer: false },
      { text: "George tells a story about a lost sock.", answer: true },
      { text: "Hana feels annoyed by George's company.", answer: false },
    ],
    buildSentence: [
      {
        target: "A man wearing a baseball cap sits down on the bench near me.",
        jumbled: ["me.", "bench", "cap", "baseball", "wearing", "man", "down", "A", "a", "sits", "on", "the", "near"],
      },
      {
        target: "“First time here, or do you come often?” he asks in a friendly voice, holding a coffee cup.",
        jumbled: ["time", "a", "or", "in", "here,", "often?”", "come", "“First", "you", "do", "cup.", "asks", "coffee", "a", "friendly", "voice,", "holding", "he"],
      },
      {
        target: "“I'm Hana,” I say, and tell him I come here almost every weekend since my apartment has no machine.",
        jumbled: ["come", "I", "has", "and", "apartment", "Hana,”", "machine.", "I", "my", "him", "tell", "no", "weekend", "since", "here", "say,", "“I'm", "almost", "every"],
      },
      {
        target: "We talk casually about our weeks while our clothes wash in the machines nearby.",
        jumbled: ["wash", "weeks", "our", "our", "We", "while", "machines", "about", "talk", "the", "nearby.", "in", "clothes", "casually"],
      },
      {
        target: "George tells me a funny story about a sock that once got completely lost in the dryer.",
        jumbled: ["a", "a", "me", "about", "in", "story", "got", "George", "once", "dryer.", "funny", "the", "sock", "completely", "lost", "tells", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about meeting someone new while waiting somewhere.",
    mySentenceExample: "I met someone new while waiting at the doctor's office.",
  },
  {
    number: 6,
    title: "Moving to the Dryer",
    image: null,
    imageNote: "Hana transferring wet clothes from a washing machine into a dryer, George helping carry a laundry basket nearby.",
    story:
      "A loud beep tells me my first washing machine has finished its cycle. I open the door and pull out my wet, clean clothes carefully into a basket. “Let me help with that, Hana,” George offers, carrying my second basket to the dryers nearby. I thank him and load both baskets of clothes into two separate dryers. I add a few coins for drying time and press the start button firmly. The dryers begin turning slowly, tumbling my clothes around inside with warm air. George checks his own machine too, and we sit back down together to wait some more.",
    questions: [
      { text: "What tells Hana the wash cycle is finished?", answer: "A loud beep." },
      { text: "What does George offer to help with?", answer: "Carrying her second basket to the dryers." },
      { text: "What does Hana add to the dryers?", answer: "A few coins for drying time." },
    ],
    trueFalse: [
      { text: "A loud beep tells Hana the cycle is finished.", answer: true },
      { text: "George offers to help carry a basket.", answer: true },
      { text: "Hana refuses any help from George.", answer: false },
      { text: "Hana adds coins for drying time.", answer: true },
      { text: "The dryers stay completely still and silent.", answer: false },
    ],
    buildSentence: [
      {
        target: "A loud beep tells me my first washing machine has finished its cycle.",
        jumbled: ["washing", "me", "has", "tells", "loud", "A", "machine", "its", "finished", "my", "beep", "first", "cycle."],
      },
      {
        target: "I open the door and pull out my wet, clean clothes carefully into a basket.",
        jumbled: ["my", "door", "the", "clean", "wet,", "a", "carefully", "into", "I", "and", "clothes", "open", "basket.", "out", "pull"],
      },
      {
        target: "“Let me help with that, Hana,” George offers, carrying my second basket to the dryers nearby.",
        jumbled: ["the", "second", "me", "to", "nearby.", "basket", "George", "help", "dryers", "Hana,”", "offers,", "my", "that,", "“Let", "carrying", "with"],
      },
      {
        target: "I add a few coins for drying time and press the start button firmly.",
        jumbled: ["firmly.", "press", "add", "for", "coins", "drying", "and", "few", "I", "button", "a", "start", "the", "time"],
      },
      {
        target: "George checks his own machine too, and we sit back down together to wait some more.",
        jumbled: ["we", "machine", "too,", "together", "more.", "wait", "some", "and", "to", "back", "checks", "sit", "down", "own", "George", "his"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone offering to help you with a task.",
    mySentenceExample: "My neighbor offered to help me carry groceries upstairs.",
  },
  {
    number: 7,
    title: "Reading While Waiting",
    image: null,
    imageNote: "Hana sitting on a bench reading a book, dryers spinning in the background, warm sunlight coming through a window.",
    story:
      "While the dryers spin, I take a book out of my bag to pass the time comfortably. “Good book, Hana?” George asks, then takes out his phone, scrolling through something quietly beside me. The laundromat feels peaceful now, filled only with the soft hum of the machines. Sunlight comes through a large window, warming the bench where we both sit together. I read a few chapters, enjoying this quiet, unhurried moment away from my usual busy schedule. Laundry day used to feel boring to me, but today it feels surprisingly relaxing instead. I glance at the dryers occasionally to check on the time remaining.",
    questions: [
      { text: "What does Hana take out of her bag?", answer: "A book." },
      { text: "What does George do on his phone?", answer: "Scrolls through something quietly." },
      { text: "How does laundry day feel to Hana today?", answer: "Surprisingly relaxing." },
    ],
    trueFalse: [
      { text: "Hana takes out a book to read.", answer: true },
      { text: "George refuses to sit near Hana at all.", answer: false },
      { text: "Sunlight comes through a large window.", answer: true },
      { text: "Laundry day feels surprisingly relaxing today.", answer: true },
      { text: "Hana feels bored the entire time.", answer: false },
    ],
    buildSentence: [
      {
        target: "I take a book out of my bag to pass the time comfortably.",
        jumbled: ["out", "time", "a", "the", "of", "take", "I", "bag", "pass", "comfortably.", "to", "book", "my"],
      },
      {
        target: "“Good book, Hana?” George asks, then takes out his phone, scrolling through something quietly beside me.",
        jumbled: ["phone,", "book,", "Hana?”", "through", "beside", "scrolling", "takes", "me.", "“Good", "his", "out", "George", "something", "then", "quietly", "asks,"],
      },
      {
        target: "The laundromat feels peaceful now, filled only with the soft hum of the machines.",
        jumbled: ["machines.", "the", "hum", "with", "feels", "now,", "filled", "the", "soft", "only", "laundromat", "of", "The", "peaceful"],
      },
      {
        target: "I read a few chapters, enjoying this quiet, unhurried moment away from my usual busy schedule.",
        jumbled: ["moment", "unhurried", "chapters,", "quiet,", "this", "few", "busy", "schedule.", "away", "a", "I", "read", "from", "my", "usual", "enjoying"],
      },
      {
        target: "Laundry day used to feel boring to me, but today it feels surprisingly relaxing instead.",
        jumbled: ["boring", "relaxing", "day", "but", "Laundry", "me,", "to", "used", "instead.", "feels", "feel", "surprisingly", "to", "today", "it"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a quiet moment you enjoyed recently.",
    mySentenceExample: "I enjoyed a quiet moment reading a book yesterday.",
  },
  {
    number: 8,
    title: "Folding the Clothes",
    image: null,
    imageNote: "Hana standing at a folding table, neatly folding warm clothes into a laundry bag, George waving goodbye in the background.",
    story:
      "The dryers finally beep, and I pull out my warm, soft clothes carefully. I carry the clothes to a large folding table near the window and begin folding them. Each shirt and pair of pants gets folded neatly and placed into my clean bag. George finishes his laundry around the same time and comes over to say goodbye. “See you next Saturday, probably, Hana,” he says with a friendly smile before leaving. I nod and wave, already looking forward to more friendly conversation next weekend. Folding warm clothes always feels satisfying, like finishing an important small task well.",
    questions: [
      { text: "What does Hana carry the clothes to?", answer: "A large folding table." },
      { text: "What does George say before leaving?", answer: "See you next Saturday, probably." },
      { text: "How does folding warm clothes feel to Hana?", answer: "Satisfying." },
    ],
    trueFalse: [
      { text: "Hana carries the clothes to a folding table.", answer: true },
      { text: "George leaves without saying goodbye.", answer: false },
      { text: "George says see you next Saturday.", answer: true },
      { text: "Folding warm clothes feels satisfying to Hana.", answer: true },
      { text: "Hana feels annoyed about seeing George again.", answer: false },
    ],
    buildSentence: [
      {
        target: "The dryers finally beep, and I pull out my warm, soft clothes carefully.",
        jumbled: ["beep,", "out", "and", "dryers", "I", "clothes", "soft", "warm,", "The", "pull", "carefully.", "my", "finally"],
      },
      {
        target: "I carry the clothes to a large folding table near the window and begin folding them.",
        jumbled: ["large", "and", "the", "to", "a", "folding", "window", "I", "folding", "begin", "table", "near", "clothes", "carry", "them.", "the"],
      },
      {
        target: "Each shirt and pair of pants gets folded neatly and placed into my clean bag.",
        jumbled: ["pair", "placed", "Each", "gets", "folded", "pants", "and", "clean", "neatly", "and", "into", "of", "my", "bag.", "shirt"],
      },
      {
        target: "“See you next Saturday, probably, Hana,” he says with a friendly smile before leaving.",
        jumbled: ["next", "a", "says", "leaving.", "“See", "Hana,”", "friendly", "you", "Saturday,", "smile", "with", "before", "probably,", "he"],
      },
      {
        target: "I nod and wave, already looking forward to more friendly conversation next weekend.",
        jumbled: ["forward", "and", "I", "wave,", "to", "friendly", "more", "looking", "nod", "conversation", "already", "weekend.", "next"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finishing a small task that felt satisfying.",
    mySentenceExample: "Folding my clean laundry always feels satisfying to me.",
  },
  {
    number: 9,
    title: "Walking Home",
    image: null,
    imageNote: "Hana walking down the sidewalk carrying a full laundry bag over her shoulder, a light smile on her face on a sunny afternoon.",
    story:
      "I carry my full bag of clean, folded clothes over my shoulder and leave the laundromat. The walk home feels lighter somehow, even though the bag itself is not lighter at all. The afternoon sun feels warm, and the street looks calm on this quiet Saturday. I think about my conversation with George and smile a little at his silly sock story. “Not bad at all, Hana,” I think. Small conversations like that make everyday errands feel less like boring chores to me. My apartment feels closer today because my mind is busy with pleasant thoughts. I already look forward to next weekend's laundry trip a little.",
    questions: [
      { text: "How does Hana carry her bag home?", answer: "Over her shoulder." },
      { text: "How does the walk home feel to Hana?", answer: "Lighter, even though the bag isn't." },
      { text: "What does Hana think about while walking?", answer: "Her conversation with George and his sock story." },
    ],
    trueFalse: [
      { text: "Hana carries her bag over her shoulder.", answer: true },
      { text: "The walk home feels heavier and harder.", answer: false },
      { text: "Hana thinks about her conversation with George.", answer: true },
      { text: "Small conversations make errands feel more boring.", answer: false },
      { text: "Hana looks forward to next weekend's trip.", answer: true },
    ],
    buildSentence: [
      {
        target: "I carry my full bag of clean, folded clothes over my shoulder and leave the laundromat.",
        jumbled: ["clean,", "leave", "and", "bag", "of", "over", "my", "my", "folded", "full", "I", "the", "laundromat.", "shoulder", "clothes", "carry"],
      },
      {
        target: "The walk home feels lighter somehow, even though the bag itself is not lighter at all.",
        jumbled: ["all.", "lighter", "walk", "the", "feels", "though", "home", "somehow,", "not", "even", "is", "at", "bag", "The", "itself", "lighter"],
      },
      {
        target: "I think about my conversation with George and smile a little at his silly sock story.",
        jumbled: ["his", "at", "silly", "a", "think", "smile", "George", "little", "I", "conversation", "about", "with", "sock", "story.", "my", "and"],
      },
      {
        target: "Small conversations like that make everyday errands feel less like boring chores to me.",
        jumbled: ["less", "like", "chores", "boring", "conversations", "feel", "Small", "like", "make", "that", "to", "me.", "everyday", "errands"],
      },
      {
        target: "My apartment feels closer today because my mind is busy with pleasant thoughts.",
        jumbled: ["is", "feels", "with", "today", "busy", "thoughts.", "apartment", "my", "closer", "pleasant", "mind", "because", "My"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a chore that felt better because of a small pleasant moment.",
    mySentenceExample: "My chore felt better because of a nice conversation with a neighbor.",
  },
  {
    number: 10,
    title: "Clean Clothes, Full Closet",
    image: null,
    imageNote: "Hana putting neatly folded clothes into her closet at home, the room tidy and organized, a satisfied smile on her face.",
    story:
      "Back at my apartment, I put my clean clothes carefully into my closet and drawers. Everything smells fresh, and my closet finally looks full and organized again after two busy weeks. “Well done, Hana,” I think, sitting down for a moment, feeling satisfied with how my weekend morning went. Laundry day is not always exciting, but today it felt calm and even a little enjoyable. Meeting George made an ordinary chore feel like a small, pleasant part of my week. I already know I will look for him again next time I go. Simple weekend tasks sometimes bring unexpected moments of connection with other people.",
    questions: [
      { text: "Where does Hana put her clean clothes?", answer: "In her closet and drawers." },
      { text: "How does Hana feel sitting down afterward?", answer: "Satisfied." },
      { text: "What made this laundry day feel special?", answer: "Meeting George." },
    ],
    trueFalse: [
      { text: "Hana puts her clothes into her closet and drawers.", answer: true },
      { text: "Hana's closet looks empty and messy still.", answer: false },
      { text: "Hana feels satisfied with her weekend morning.", answer: true },
      { text: "Meeting George made the chore feel more pleasant.", answer: true },
      { text: "Hana decides never to return to the laundromat.", answer: false },
    ],
    buildSentence: [
      {
        target: "Back at my apartment, I put my clean clothes carefully into my closet and drawers.",
        jumbled: ["carefully", "closet", "and", "at", "my", "Back", "into", "my", "clothes", "apartment,", "my", "put", "clean", "drawers.", "I"],
      },
      {
        target: "Everything smells fresh, and my closet finally looks full and organized again after two busy weeks.",
        jumbled: ["Everything", "again", "weeks.", "smells", "busy", "and", "my", "full", "after", "finally", "looks", "fresh,", "closet", "two", "and", "organized"],
      },
      {
        target: "“Well done, Hana,” I think, sitting down for a moment, feeling satisfied with how my weekend morning went.",
        jumbled: ["how", "morning", "satisfied", "done,", "Hana,”", "a", "moment,", "weekend", "feeling", "with", "I", "“Well", "my", "sitting", "down", "went.", "for", "think,"],
      },
      {
        target: "Meeting George made an ordinary chore feel like a small, pleasant part of my week.",
        jumbled: ["ordinary", "feel", "my", "an", "week.", "pleasant", "of", "small,", "Meeting", "part", "like", "chore", "made", "George", "a"],
      },
      {
        target: "I already know I will look for him again next time I go.",
        jumbled: ["know", "I", "I", "for", "again", "time", "him", "go.", "look", "I", "will", "next", "already"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an ordinary task that led to a nice surprise.",
    mySentenceExample: "An ordinary trip to the store led to a nice surprise meeting a friend.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
