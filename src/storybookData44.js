// A1 Adults digital storybook, Book 44: "Taking the Bus to Work"
// Static content -- no Supabase. Fourth book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook44/cover.jpg";

export const STORYBOOK_TITLE = "Taking the Bus to Work";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Angela standing at a bus stop with a coffee cup, checking her watch as a city bus approaches, other commuters waiting nearby.";

export const CHARACTERS = [
  { name: "Angela", role: "The narrator, an adult who takes the bus to work", look: "Work bag, comfortable shoes, calm but always watching the time." },
  { name: "Walter", role: "A regular rider Angela sees every morning", look: "Newspaper under his arm, warm smile, chatty and friendly." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Morning Routine",
    image: null,
    imageNote: "Angela leaving her apartment building with a coffee cup and work bag, checking her watch on a quiet morning street.",
    story:
      "Every morning, I leave my apartment at exactly seven-fifteen to catch the bus to work. I do not own a car, so the bus is my main way to travel. My phone reminder says, “Angela, don't forget your badge!” I grab my coffee, check my bag for my badge, and lock my door carefully. The walk to the bus stop takes about five minutes down a quiet street. I like this short walk because it helps me wake up before work starts. My bus usually arrives around seven-thirty, so I try not to be late. Today, the morning air feels a little cold, so I walk a bit faster than usual.",
    questions: [
      { text: "What time does Angela leave her apartment?", answer: "Seven-fifteen." },
      { text: "Why does Angela take the bus?", answer: "Because she does not own a car." },
      { text: "How long does the walk to the bus stop take?", answer: "About five minutes." },
    ],
    trueFalse: [
      { text: "Angela leaves her apartment at seven-fifteen.", answer: true },
      { text: "Angela owns a car and drives to work.", answer: false },
      { text: "The walk to the bus stop takes about five minutes.", answer: true },
      { text: "Angela's bus usually arrives around seven-thirty.", answer: true },
      { text: "The morning air feels warm today.", answer: false },
    ],
    buildSentence: [
      {
        target: "Every morning, I leave my apartment at exactly seven-fifteen to catch the bus to work.",
        jumbled: ["seven-fifteen", "exactly", "the", "at", "catch", "morning,", "leave", "work.", "apartment", "to", "I", "bus", "to", "Every", "my"],
      },
      {
        target: "I do not own a car, so the bus is my main way to travel.",
        jumbled: ["travel.", "my", "to", "main", "car,", "so", "the", "bus", "own", "not", "do", "I", "a", "is", "way"],
      },
      {
        target: "I grab my coffee, check my bag for my badge, and lock my door carefully.",
        jumbled: ["for", "carefully.", "grab", "my", "check", "and", "I", "door", "coffee,", "my", "badge,", "my", "bag", "lock", "my"],
      },
      {
        target: "The walk to the bus stop takes about five minutes down a quiet street.",
        jumbled: ["down", "a", "stop", "takes", "to", "The", "about", "five", "minutes", "bus", "the", "quiet", "street.", "walk"],
      },
      {
        target: "Today, the morning air feels a little cold, so I walk a bit faster than usual.",
        jumbled: ["bit", "faster", "a", "so", "cold,", "walk", "a", "I", "feels", "little", "Today,", "morning", "usual.", "air", "the", "than"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your morning routine.",
    mySentenceExample: "My morning routine starts with a cup of coffee.",
  },
  {
    number: 2,
    title: "Waiting at the Stop",
    image: null,
    imageNote: "Angela standing at a covered bus stop with a few other commuters, checking her phone for the bus schedule.",
    story:
      "At the bus stop, a few other people are already waiting for the same bus. I check my phone to see how many minutes until the bus arrives. The app says three minutes, so I have a little time to relax. I check my badge, which reads “Angela,” before putting it back in my bag. I see Walter, a man I recognize from riding this bus almost every day. He always carries a newspaper under his arm and smiles at everyone politely. We nod at each other, though we have never really talked before today. The morning traffic passes by slowly, and I hear the sounds of the busy city waking up around us.",
    questions: [
      { text: "Who else is waiting at the bus stop?", answer: "Walter." },
      { text: "What does Angela check on her phone?", answer: "How many minutes until the bus arrives." },
      { text: "What does Walter always carry?", answer: "A newspaper." },
    ],
    trueFalse: [
      { text: "A few other people are waiting at the stop.", answer: true },
      { text: "Angela checks her phone for the bus time.", answer: true },
      { text: "Walter always carries a newspaper.", answer: true },
      { text: "Angela and Walter are old close friends already.", answer: false },
      { text: "The city sounds nothing like a busy place.", answer: false },
    ],
    buildSentence: [
      {
        target: "At the bus stop, a few other people are already waiting for the same bus.",
        jumbled: ["other", "for", "few", "are", "waiting", "stop,", "already", "people", "bus.", "the", "a", "At", "the", "bus", "same"],
      },
      {
        target: "I check my phone to see how many minutes until the bus arrives.",
        jumbled: ["I", "the", "phone", "to", "see", "check", "many", "until", "minutes", "how", "my", "arrives.", "bus"],
      },
      {
        target: "I check my badge, which reads “Angela,” before putting it back in my bag.",
        jumbled: ["before", "“Angela,”", "I", "check", "badge,", "putting", "it", "bag.", "my", "back", "my", "reads", "which", "in"],
      },
      {
        target: "I see Walter, a man I recognize from riding this bus almost every day.",
        jumbled: ["bus", "see", "a", "this", "I", "almost", "from", "I", "Walter,", "recognize", "day.", "every", "man", "riding"],
      },
      {
        target: "The morning traffic passes by slowly, and I hear the sounds of the busy city waking up around us.",
        jumbled: ["around", "the", "slowly,", "and", "I", "waking", "hear", "of", "us.", "up", "The", "morning", "passes", "by", "the", "city", "sounds", "busy", "traffic"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone you see often but do not know well.",
    mySentenceExample: "I see my neighbor often but do not know him well.",
  },
  {
    number: 3,
    title: "Getting On the Bus",
    image: null,
    imageNote: "Angela stepping onto a city bus, tapping her transit card on the reader, the driver nodding as passengers board behind her.",
    story:
      "The bus finally arrives, and the doors open with a soft hissing sound. I step on carefully and tap my transit card on the small reader by the door. “Morning, Angela,” the driver says, recognizing a regular rider, and I walk toward an empty seat near the middle. Walter gets on right behind me and sits a few rows back with his newspaper. The bus is not too crowded today, which makes the ride feel more comfortable. I look out the window as the bus starts moving through the busy city streets. My commute officially begins now, and I settle in for the ride.",
    questions: [
      { text: "What sound do the bus doors make?", answer: "A soft hissing sound." },
      { text: "What does Angela tap on the reader?", answer: "Her transit card." },
      { text: "Where does Angela sit on the bus?", answer: "Near the middle." },
    ],
    trueFalse: [
      { text: "The bus doors open with a hissing sound.", answer: true },
      { text: "Angela pays with cash instead of a card.", answer: false },
      { text: "Angela sits near the middle of the bus.", answer: true },
      { text: "The bus is extremely crowded today.", answer: false },
      { text: "Angela looks out the window as the bus moves.", answer: true },
    ],
    buildSentence: [
      {
        target: "The bus finally arrives, and the doors open with a soft hissing sound.",
        jumbled: ["The", "hissing", "sound.", "and", "a", "with", "finally", "doors", "arrives,", "open", "bus", "the", "soft"],
      },
      {
        target: "I step on carefully and tap my transit card on the small reader by the door.",
        jumbled: ["my", "carefully", "step", "on", "transit", "tap", "reader", "the", "on", "small", "the", "card", "I", "by", "and", "door."],
      },
      {
        target: "“Morning, Angela,” the driver says, recognizing a regular rider, and I walk toward an empty seat near the middle.",
        jumbled: ["empty", "walk", "the", "a", "middle.", "Angela,”", "the", "rider,", "an", "toward", "near", "I", "recognizing", "driver", "says,", "and", "“Morning,", "seat", "regular"],
      },
      {
        target: "The bus is not too crowded today, which makes the ride feel more comfortable.",
        jumbled: ["feel", "the", "bus", "The", "crowded", "is", "comfortable.", "makes", "too", "today,", "not", "ride", "more", "which"],
      },
      {
        target: "I look out the window as the bus starts moving through the busy city streets.",
        jumbled: ["starts", "look", "the", "through", "as", "busy", "the", "I", "moving", "city", "bus", "streets.", "the", "window", "out"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about getting onto a bus or train.",
    mySentenceExample: "I tap my card and find a seat when I get on the bus.",
  },
  {
    number: 4,
    title: "A Crowded Stop",
    image: null,
    imageNote: "Angela standing and holding a bus pole as many new passengers crowd into the bus at a busy downtown stop.",
    story:
      "A few stops later, the bus arrives at a busy downtown corner near many office buildings. Many people get on the bus at once, and it suddenly feels much more crowded than before. I stand up and give my seat to an older woman carrying heavy grocery bags. “Thank you, dear,” she says kindly, and I move toward the back to hold onto a pole instead. “That's okay,” I think, “Angela is happy to help.” The bus feels warm now with so many people standing close together. I check the time on my phone and see I still have fifteen minutes before work starts. The bus continues moving slowly through the traffic.",
    questions: [
      { text: "Where does the bus arrive a few stops later?", answer: "A busy downtown corner." },
      { text: "What does Angela do for the older woman?", answer: "Gives her seat to her." },
      { text: "How does the bus feel now with more people?", answer: "Warm and crowded." },
    ],
    trueFalse: [
      { text: "The bus arrives at a busy downtown corner.", answer: true },
      { text: "Angela refuses to give up her seat.", answer: false },
      { text: "Angela gives her seat to an older woman.", answer: true },
      { text: "The bus feels warm with many people standing.", answer: true },
      { text: "Angela has no time left before work starts.", answer: false },
    ],
    buildSentence: [
      {
        target: "A few stops later, the bus arrives at a busy downtown corner near many office buildings.",
        jumbled: ["downtown", "corner", "stops", "few", "a", "office", "later,", "busy", "many", "the", "bus", "arrives", "A", "buildings.", "near", "at"],
      },
      {
        target: "Many people get on the bus at once, and it suddenly feels much more crowded than before.",
        jumbled: ["feels", "once,", "get", "suddenly", "Many", "people", "at", "crowded", "than", "before.", "more", "bus", "the", "it", "on", "and", "much"],
      },
      {
        target: "“Thank you, dear,” she says kindly, and I move toward the back to hold onto a pole instead.",
        jumbled: ["“Thank", "hold", "onto", "dear,”", "a", "move", "the", "to", "I", "instead.", "and", "you,", "she", "says", "kindly,", "toward", "back", "pole"],
      },
      {
        target: "The bus feels warm now with so many people standing close together.",
        jumbled: ["feels", "with", "close", "now", "many", "The", "standing", "together.", "so", "bus", "warm", "people"],
      },
      {
        target: "I check the time on my phone and see I still have fifteen minutes before work starts.",
        jumbled: ["on", "the", "phone", "starts.", "still", "I", "before", "my", "work", "time", "and", "see", "fifteen", "minutes", "I", "have", "check"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about giving up your seat for someone.",
    mySentenceExample: "I gave up my seat for an elderly man on the train.",
  },
  {
    number: 5,
    title: "A Short Delay",
    image: null,
    imageNote: "Angela looking worried at her phone while the bus sits still in traffic, other passengers also checking their phones.",
    story:
      "Suddenly, the bus stops moving and stays still for several minutes in heavy traffic. I look out the window and see a long line of cars stopped ahead of us too. I check my phone and feel a small wave of worry about being late for work. Other passengers also look a little impatient, checking their phones or watches quietly. The driver announces there is an accident ahead, causing this unexpected delay today. I take a deep breath. “Angela, a few minutes late happens sometimes,” I remind myself. There is nothing I can really do except wait patiently now.",
    questions: [
      { text: "What happens to the bus suddenly?", answer: "It stops moving in heavy traffic." },
      { text: "What does Angela feel about being late?", answer: "A small wave of worry." },
      { text: "What does the driver announce?", answer: "That there is an accident ahead." },
    ],
    trueFalse: [
      { text: "The bus stops moving in heavy traffic.", answer: true },
      { text: "Angela feels no worry at all about being late.", answer: false },
      { text: "The driver announces there is an accident ahead.", answer: true },
      { text: "Other passengers also seem a little impatient.", answer: true },
      { text: "Angela decides to get off and walk immediately.", answer: false },
    ],
    buildSentence: [
      {
        target: "Suddenly, the bus stops moving and stays still for several minutes in heavy traffic.",
        jumbled: ["and", "for", "heavy", "stops", "Suddenly,", "several", "traffic.", "moving", "the", "bus", "stays", "minutes", "still", "in"],
      },
      {
        target: "I look out the window and see a long line of cars stopped ahead of us too.",
        jumbled: ["us", "stopped", "a", "the", "of", "line", "cars", "see", "too.", "ahead", "I", "and", "window", "look", "out", "long", "of"],
      },
      {
        target: "Other passengers also look a little impatient, checking their phones or watches quietly.",
        jumbled: ["passengers", "checking", "watches", "Other", "look", "also", "a", "phones", "impatient,", "little", "or", "quietly.", "their"],
      },
      {
        target: "The driver announces there is an accident ahead, causing this unexpected delay today.",
        jumbled: ["accident", "there", "an", "causing", "ahead,", "announces", "delay", "unexpected", "driver", "is", "today.", "The", "this"],
      },
      {
        target: "There is nothing I can really do except wait patiently now.",
        jumbled: ["patiently", "I", "except", "now.", "do", "really", "can", "is", "nothing", "wait", "There"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting patiently during an unexpected delay.",
    mySentenceExample: "I waited patiently during an unexpected delay at the airport.",
  },
  {
    number: 6,
    title: "Talking with Walter",
    image: null,
    imageNote: "Angela and Walter standing together holding poles on the bus, talking and smiling during the delay, Walter's newspaper folded under his arm.",
    story:
      "During the delay, Walter walks over and stands near me, holding onto the same pole. “Traffic like this happens more than I would like,” he says with a small laugh. I laugh too and agree, feeling glad for the friendly conversation during this boring wait. He asks where I work, and I tell him about my office near the city center. He tells me he works at a small bookstore not too far from my office building. “What's your name, by the way?” he asks. “Angela,” I say, and we talk easily for the rest of the delay. The time passes much faster now, and I feel happy to finally know his name properly too.",
    questions: [
      { text: "What does Walter say about the traffic?", answer: "That it happens more than he'd like." },
      { text: "What does Walter ask Angela?", answer: "Where she works." },
      { text: "Where does Walter work?", answer: "A small bookstore." },
    ],
    trueFalse: [
      { text: "Walter walks over and stands near Angela.", answer: true },
      { text: "Walter refuses to speak with Angela at all.", answer: false },
      { text: "Walter asks Angela where she works.", answer: true },
      { text: "Walter works at a small bookstore.", answer: true },
      { text: "The time passes more slowly after they talk.", answer: false },
    ],
    buildSentence: [
      {
        target: "During the delay, Walter walks over and stands near me, holding onto the same pole.",
        jumbled: ["the", "over", "pole.", "onto", "me,", "walks", "During", "the", "Walter", "delay,", "near", "stands", "and", "same", "holding"],
      },
      {
        target: "“Traffic like this happens more than I would like,” he says with a small laugh.",
        jumbled: ["I", "happens", "“Traffic", "he", "like", "small", "more", "says", "than", "would", "laugh.", "a", "like,”", "with", "this"],
      },
      {
        target: "He asks where I work, and I tell him about my office near the city center.",
        jumbled: ["him", "office", "and", "I", "center.", "He", "where", "I", "about", "asks", "work,", "city", "near", "my", "the", "tell"],
      },
      {
        target: "He tells me he works at a small bookstore not too far from my office building.",
        jumbled: ["small", "He", "works", "bookstore", "tells", "from", "too", "office", "building.", "at", "he", "far", "a", "me", "not", "my"],
      },
      {
        target: "The time passes much faster now, and I feel happy to finally know his name properly too.",
        jumbled: ["his", "finally", "too.", "name", "now,", "properly", "much", "faster", "to", "happy", "feel", "I", "and", "passes", "know", "The", "time"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a conversation that made a boring wait better.",
    mySentenceExample: "A conversation with a coworker made a boring wait better.",
  },
  {
    number: 7,
    title: "Moving Again",
    image: null,
    imageNote: "Angela looking relieved as the bus begins moving forward again, traffic clearing ahead through the front window.",
    story:
      "After nearly fifteen minutes, the traffic finally starts moving again, and the bus continues its route. I feel relief as the bus picks up speed, moving smoothly through the remaining streets. Walter returns to his seat, giving me a friendly nod before sitting down again. I check my phone and calculate that I will only be a few minutes late now. “Angela, your manager understands occasional delays,” I remind myself, so I do not feel too worried about it anymore. The city passes by outside the window, and familiar buildings tell me my stop is getting closer. I gather my bag, getting ready to get off soon.",
    questions: [
      { text: "How long does the traffic delay last?", answer: "Nearly fifteen minutes." },
      { text: "How does Angela feel when the bus starts moving?", answer: "Relief." },
      { text: "What does Angela calculate on her phone?", answer: "That she'll only be a few minutes late." },
    ],
    trueFalse: [
      { text: "The traffic delay lasts nearly fifteen minutes.", answer: true },
      { text: "Angela feels no relief when the bus moves again.", answer: false },
      { text: "Angela calculates she will be only a few minutes late.", answer: true },
      { text: "Walter stays standing next to Angela the whole time.", answer: false },
      { text: "Angela gathers her bag to get off soon.", answer: true },
    ],
    buildSentence: [
      {
        target: "The traffic finally starts moving again, and the bus continues its route.",
        jumbled: ["its", "traffic", "again,", "the", "bus", "route.", "and", "finally", "The", "moving", "starts", "continues"],
      },
      {
        target: "I feel relief as the bus picks up speed, moving smoothly through the remaining streets.",
        jumbled: ["through", "speed,", "feel", "smoothly", "I", "moving", "relief", "streets.", "picks", "up", "the", "bus", "the", "as", "remaining"],
      },
      {
        target: "I check my phone and calculate that I will only be a few minutes late now.",
        jumbled: ["check", "now.", "my", "few", "calculate", "will", "and", "I", "be", "I", "a", "minutes", "that", "late", "phone", "only"],
      },
      {
        target: "“Angela, your manager understands occasional delays,” I remind myself, so I do not feel too worried about it anymore.",
        jumbled: ["do", "anymore.", "feel", "I", "your", "understands", "about", "“Angela,", "occasional", "too", "manager", "worried", "remind", "not", "so", "myself,", "I", "delays,”", "it"],
      },
      {
        target: "The city passes by outside the window, and familiar buildings tell me my stop is getting closer.",
        jumbled: ["city", "buildings", "getting", "outside", "me", "by", "stop", "window,", "my", "and", "The", "closer.", "the", "passes", "is", "familiar", "tell"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling relieved when a problem finally ends.",
    mySentenceExample: "I felt relieved when the long line finally ended.",
  },
  {
    number: 8,
    title: "Getting Off the Bus",
    image: null,
    imageNote: "Angela stepping off the bus onto a busy sidewalk near her office building, waving goodbye to Walter through the bus window.",
    story:
      "The bus finally reaches my stop, and I press the button to signal the driver to stop. I wave goodbye to Walter, who smiles and says, “See you tomorrow, Angela!” I step off the bus and onto the busy sidewalk near my office building. The fresh air feels nice after standing inside the warm, crowded bus for so long. I walk quickly toward the entrance, checking the time one more time on my phone. I am only five minutes late, which feels completely manageable and not too serious. Walking through the office doors, I already feel ready to start my workday.",
    questions: [
      { text: "What does Angela do to signal the driver?", answer: "Presses the button." },
      { text: "What does Walter say as Angela leaves?", answer: "See you tomorrow!" },
      { text: "How late is Angela to work?", answer: "Five minutes." },
    ],
    trueFalse: [
      { text: "Angela presses a button to signal the driver.", answer: true },
      { text: "Walter says nothing as Angela leaves.", answer: false },
      { text: "Angela is only five minutes late.", answer: true },
      { text: "The fresh air feels unpleasant to Angela.", answer: false },
      { text: "Angela feels ready to start her workday.", answer: true },
    ],
    buildSentence: [
      {
        target: "The bus finally reaches my stop, and I press the button to signal the driver to stop.",
        jumbled: ["The", "to", "stop.", "the", "stop,", "the", "press", "button", "finally", "to", "I", "my", "and", "reaches", "bus", "signal", "driver"],
      },
      {
        target: "I wave goodbye to Walter, who smiles and says, “See you tomorrow, Angela!”",
        jumbled: ["wave", "you", "I", "Walter,", "who", "to", "tomorrow,", "smiles", "says,", "Angela!”", "“See", "goodbye", "and"],
      },
      {
        target: "The fresh air feels nice after standing inside the warm, crowded bus for so long.",
        jumbled: ["after", "inside", "nice", "The", "crowded", "feels", "warm,", "so", "for", "bus", "air", "standing", "the", "long.", "fresh"],
      },
      {
        target: "I walk quickly toward the entrance, checking the time one more time on my phone.",
        jumbled: ["more", "I", "checking", "the", "toward", "time", "the", "my", "entrance,", "walk", "time", "phone.", "on", "one", "quickly"],
      },
      {
        target: "I am only five minutes late, which feels completely manageable and not too serious.",
        jumbled: ["completely", "too", "not", "late,", "which", "minutes", "manageable", "only", "and", "am", "feels", "I", "serious.", "five"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about arriving somewhere a little late but feeling okay about it.",
    mySentenceExample: "I arrived a little late but felt okay because I had a good reason.",
  },
  {
    number: 9,
    title: "The Ride Home",
    image: null,
    imageNote: "Angela sitting on the bus in the evening, looking tired but relaxed, city lights beginning to glow outside the window.",
    story:
      "After a long workday, I walk back to the same bus stop for my ride home in the evening. The sky is turning orange, and the streets feel calmer than during the busy morning rush. I sit near a window this time, since the bus is much less crowded now. I see Walter again, and we chat briefly about our workdays before he gets off at his stop. He waves and says, “See you tomorrow morning, Angela!” before stepping off happily. I feel tired but satisfied after a full day of work, and the bus ride feels like a nice, quiet break.",
    questions: [
      { text: "What is the sky doing on Angela's ride home?", answer: "Turning orange." },
      { text: "Where does Angela sit on the way home?", answer: "Near a window." },
      { text: "What does Walter say before getting off?", answer: "See you tomorrow morning!" },
    ],
    trueFalse: [
      { text: "The sky is turning orange on the ride home.", answer: true },
      { text: "The bus is much more crowded than in the morning.", answer: false },
      { text: "Angela sits near a window this time.", answer: true },
      { text: "Walter says see you tomorrow morning.", answer: true },
      { text: "Angela feels annoyed by the ride home.", answer: false },
    ],
    buildSentence: [
      {
        target: "I walk back to the same bus stop for my ride home in the evening.",
        jumbled: ["evening.", "the", "same", "I", "for", "stop", "in", "ride", "my", "walk", "bus", "to", "back", "the", "home"],
      },
      {
        target: "The sky is turning orange, and the streets feel calmer than during the busy morning rush.",
        jumbled: ["orange,", "the", "The", "feel", "morning", "rush.", "is", "than", "sky", "busy", "streets", "and", "calmer", "during", "turning", "the"],
      },
      {
        target: "I sit near a window this time, since the bus is much less crowded now.",
        jumbled: ["near", "bus", "a", "I", "sit", "the", "crowded", "now.", "since", "less", "this", "window", "time,", "is", "much"],
      },
      {
        target: "I see Walter again, and we chat briefly about our workdays before he gets off at his stop.",
        jumbled: ["Walter", "off", "again,", "we", "workdays", "briefly", "gets", "his", "see", "our", "stop.", "and", "chat", "about", "at", "I", "before", "he"],
      },
      {
        target: "I feel tired but satisfied after a full day of work, and the bus ride feels like a nice, quiet break.",
        jumbled: ["a", "bus", "break.", "like", "and", "nice,", "ride", "tired", "the", "quiet", "satisfied", "day", "but", "after", "feel", "of", "work,", "feels", "a", "full", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a quiet moment at the end of a busy day.",
    mySentenceExample: "A quiet walk home is my favorite moment at the end of a busy day.",
  },
  {
    number: 10,
    title: "Part of My Day",
    image: null,
    imageNote: "Angela sitting at home that evening, looking at a bus schedule app on her phone with a calm, satisfied expression.",
    story:
      "At home that evening, I think about my day and the small moments that happened on the bus. The morning delay was frustrating at first, but talking with Walter made it feel much better. I realize the bus ride is not just a way to get to work anymore. It has become a small, familiar part of my daily life, filled with routine and friendly faces. “Angela, this is what your daily life looks like now,” I think with a smile. Tomorrow, I will see Walter again at the same stop, and we might talk about our days once more. Taking the bus used to feel like just a task, but now it feels comfortable and familiar.",
    questions: [
      { text: "What does Angela think about that evening?", answer: "Her day and the small moments on the bus." },
      { text: "What made the morning delay feel better?", answer: "Talking with Walter." },
      { text: "How does taking the bus feel to Angela now?", answer: "Comfortable and familiar." },
    ],
    trueFalse: [
      { text: "Angela thinks about her day and the bus ride.", answer: true },
      { text: "Talking with Walter made the delay feel worse.", answer: false },
      { text: "The bus ride has become part of Angela's daily life.", answer: true },
      { text: "Angela expects to see Walter again tomorrow.", answer: true },
      { text: "Taking the bus still feels like just a task to Angela.", answer: false },
    ],
    buildSentence: [
      {
        target: "At home that evening, I think about my day and the small moments that happened on the bus.",
        jumbled: ["moments", "the", "think", "day", "and", "evening,", "home", "At", "on", "the", "that", "I", "bus.", "small", "about", "that", "happened", "my"],
      },
      {
        target: "The morning delay was frustrating at first, but talking with Walter made it feel much better.",
        jumbled: ["delay", "feel", "at", "Walter", "made", "talking", "The", "with", "was", "better.", "but", "much", "morning", "frustrating", "it", "first,"],
      },
      {
        target: "It has become a small, familiar part of my daily life, filled with routine and friendly faces.",
        jumbled: ["daily", "friendly", "and", "It", "small,", "faces.", "a", "of", "become", "part", "with", "has", "filled", "routine", "my", "familiar", "life,"],
      },
      {
        target: "“Angela, this is what your daily life looks like now,” I think with a smile.",
        jumbled: ["smile.", "daily", "like", "your", "is", "with", "this", "what", "a", "I", "looks", "“Angela,", "now,”", "think", "life"],
      },
      {
        target: "Tomorrow, I will see Walter again at the same stop, and we might talk about our days once more.",
        jumbled: ["and", "about", "days", "Tomorrow,", "same", "again", "we", "the", "our", "once", "will", "stop,", "Walter", "at", "more.", "might", "see", "talk", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a routine that became more comfortable over time.",
    mySentenceExample: "My morning routine became more comfortable over time at my new job.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
