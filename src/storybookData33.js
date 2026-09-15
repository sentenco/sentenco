// A2 Teens digital storybook, Book 33: "Learning to Drive"
// Static content -- no Supabase. Third book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook33/cover.jpg";

export const STORYBOOK_TITLE = "Learning to Drive";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Sofia sitting proudly in the driver's seat of a car, hands on the wheel, Dad in the passenger seat smiling, an empty parking lot visible through the windshield.";

export const CHARACTERS = [
  { name: "Sofia", role: "The narrator, a teenager", look: "Ponytail, denim jacket, eager but easily anxious behind the wheel at first." },
  { name: "Dad", role: "Sofia's father", look: "Baseball cap, relaxed posture, patient and calm under pressure." },
  { name: "Mr. Kim", role: "Sofia's driving instructor", look: "Neat button-up shirt, clipboard, professional and reassuring." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Turning Sixteen",
    image: null,
    imageNote: "Sofia holding up her freshly printed learner's permit outside the local DMV office, Dad standing proudly beside her with car keys in hand.",
    story:
      "The moment I turn sixteen, getting my learner's permit becomes the only thing I can think about, day and night. Dad takes me to the local office on my actual birthday, and I fill out the paperwork with hands that shake slightly from excitement. When the clerk finally hands me my temporary permit, I stare at it like it's some kind of golden ticket to freedom. “Ready for your first real lesson this weekend, Sofia?” Dad asks, grinning as we walk back to the car together. I nod enthusiastically, though a small, nervous flutter mixes with all my excitement.",
    questions: [
      { text: "What does Sofia get on her birthday?", answer: "Her learner's permit." },
      { text: "How do Sofia's hands feel while filling out paperwork?", answer: "Shaking slightly from excitement." },
      { text: "What does Dad ask Sofia?", answer: "Ready for your first real lesson this weekend?" },
    ],
    trueFalse: [
      { text: "Sofia gets her learner's permit on her birthday.", answer: true },
      { text: "Sofia feels completely calm filling out the paperwork.", answer: false },
      { text: "Dad asks if she's ready for her first lesson.", answer: true },
      { text: "Sofia feels no excitement at all about driving.", answer: false },
      { text: "Sofia feels a nervous flutter mixed with excitement.", answer: true },
    ],
    buildSentence: [
      {
        target: "The moment I turn sixteen, getting my learner's permit becomes the only thing I can think about, day and night.",
        jumbled: ["about,", "I", "permit", "think", "the", "turn", "I", "thing", "The", "and", "sixteen,", "can", "only", "night.", "becomes", "getting", "moment", "learner's", "day", "my"],
      },
      {
        target: "Dad takes me to the local office on my actual birthday, and I fill out the paperwork with hands that shake slightly from excitement.",
        jumbled: ["shake", "paperwork", "the", "out", "takes", "my", "that", "Dad", "hands", "local", "and", "with", "the", "excitement.", "I", "birthday,", "me", "actual", "slightly", "fill", "to", "on", "office", "from"],
      },
      {
        target: "I stare at it like it's some kind of golden ticket to freedom.",
        jumbled: ["at", "ticket", "kind", "to", "it's", "golden", "stare", "some", "of", "I", "it", "freedom.", "like"],
      },
      {
        target: "“Ready for your first real lesson this weekend, Sofia?” Dad asks, grinning as we walk back to the car together.",
        jumbled: ["the", "as", "back", "walk", "we", "real", "grinning", "car", "asks,", "first", "“Ready", "Sofia?”", "lesson", "for", "Dad", "together.", "your", "this", "to", "weekend,"],
      },
      {
        target: "I nod enthusiastically, though a small, nervous flutter mixes with all my excitement.",
        jumbled: ["all", "with", "enthusiastically,", "nod", "my", "a", "small,", "flutter", "nervous", "excitement.", "mixes", "I", "though"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you looked forward to on a birthday.",
    mySentenceExample: "I looked forward to getting my first phone on my birthday.",
  },
  {
    number: 2,
    title: "The First Lesson",
    image: null,
    imageNote: "Sofia sitting in the driver's seat of an empty parking lot, gripping the steering wheel tightly, Mr. Kim in the passenger seat calmly giving instructions.",
    story:
      "Saturday morning, Mr. Kim meets us at an empty church parking lot for my very first actual driving lesson. Sitting in the driver's seat for the first time feels strangely unfamiliar, even though I have watched Dad drive thousands of times before. “Adjust your mirrors first, then find the brake with your right foot, Sofia,” Mr. Kim instructs patiently, noticing my white-knuckled grip on the wheel. Starting the engine sends an unexpected jolt of nervous energy through my entire body. Slowly, carefully, I press the gas pedal, and the car creeps forward for the very first time under my own control.",
    questions: [
      { text: "Where does the first lesson take place?", answer: "An empty church parking lot." },
      { text: "What does Mr. Kim tell Sofia to adjust first?", answer: "Her mirrors." },
      { text: "How does Sofia feel starting the engine?", answer: "A jolt of nervous energy." },
    ],
    trueFalse: [
      { text: "The first lesson takes place in an empty parking lot.", answer: true },
      { text: "Sofia feels completely comfortable in the driver's seat immediately.", answer: false },
      { text: "Mr. Kim tells her to adjust her mirrors first.", answer: true },
      { text: "Sofia refuses to start the engine.", answer: false },
      { text: "The car creeps forward under Sofia's control.", answer: true },
    ],
    buildSentence: [
      {
        target: "Saturday morning, Mr. Kim meets us at an empty church parking lot for my very first actual driving lesson.",
        jumbled: ["an", "morning,", "lot", "lesson.", "Kim", "very", "parking", "us", "actual", "my", "driving", "for", "at", "Saturday", "meets", "Mr.", "first", "church", "empty"],
      },
      {
        target: "Sitting in the driver's seat for the first time feels strangely unfamiliar, even though I have watched Dad drive thousands of times before.",
        jumbled: ["watched", "unfamiliar,", "Dad", "thousands", "I", "Sitting", "have", "the", "drive", "first", "for", "driver's", "seat", "even", "times", "feels", "time", "though", "the", "in", "before.", "strangely", "of"],
      },
      {
        target: "“Adjust your mirrors first, then find the brake with your right foot, Sofia,” Mr. Kim instructs patiently, noticing my white-knuckled grip on the wheel.",
        jumbled: ["right", "instructs", "brake", "Mr.", "Sofia,”", "mirrors", "grip", "my", "your", "white-knuckled", "the", "“Adjust", "the", "wheel.", "first,", "foot,", "patiently,", "Kim", "noticing", "then", "find", "your", "on", "with"],
      },
      {
        target: "Starting the engine sends an unexpected jolt of nervous energy through my entire body.",
        jumbled: ["entire", "nervous", "the", "unexpected", "jolt", "of", "my", "Starting", "through", "sends", "body.", "energy", "engine", "an"],
      },
      {
        target: "Slowly, carefully, I press the gas pedal, and the car creeps forward for the very first time under my own control.",
        jumbled: ["the", "forward", "car", "and", "I", "first", "control.", "my", "gas", "for", "press", "carefully,", "the", "pedal,", "own", "under", "very", "creeps", "Slowly,", "time", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about doing something for the very first time.",
    mySentenceExample: "Riding a horse for the first time felt strangely unfamiliar to me.",
  },
  {
    number: 3,
    title: "Stalling in the Parking Lot",
    image: null,
    imageNote: "Sofia looking embarrassed with her hands over her face as the car sits stalled beside a knocked-over orange traffic cone.",
    story:
      "Halfway through the lesson, Mr. Kim asks me to practice a simple turn around a row of orange traffic cones. Focusing too hard on steering, I forget to press the gas steadily, and the engine suddenly sputters and dies completely. My cheeks flush red with embarrassment as the car rolls slightly and knocks over one of the cones with a soft thud. “Happens to literally everyone, Sofia,” Mr. Kim reassures me calmly, not seeming bothered in the slightest by my obvious mistake. Restarting the engine, I try again, determined not to let one small stall ruin my entire confidence.",
    questions: [
      { text: "What does Mr. Kim ask Sofia to practice?", answer: "A simple turn around traffic cones." },
      { text: "What happens to the engine?", answer: "It sputters and dies." },
      { text: "What does Mr. Kim say about stalling?", answer: "That it happens to literally everyone." },
    ],
    trueFalse: [
      { text: "Sofia practices turning around traffic cones.", answer: true },
      { text: "The engine sputters and dies.", answer: true },
      { text: "Mr. Kim gets angry about the mistake.", answer: false },
      { text: "Sofia knocks over one of the cones.", answer: true },
      { text: "Sofia refuses to try driving again.", answer: false },
    ],
    buildSentence: [
      {
        target: "Halfway through the lesson, Mr. Kim asks me to practice a simple turn around a row of orange traffic cones.",
        jumbled: ["me", "simple", "around", "orange", "Mr.", "through", "cones.", "turn", "to", "asks", "row", "lesson,", "practice", "the", "a", "traffic", "a", "of", "Kim", "Halfway"],
      },
      {
        target: "Focusing too hard on steering, I forget to press the gas steadily, and the engine suddenly sputters and dies completely.",
        jumbled: ["completely.", "suddenly", "press", "engine", "and", "the", "dies", "I", "steering,", "forget", "on", "Focusing", "steadily,", "the", "gas", "sputters", "and", "too", "to", "hard"],
      },
      {
        target: "My cheeks flush red with embarrassment as the car rolls slightly and knocks over one of the cones with a soft thud.",
        jumbled: ["the", "rolls", "a", "as", "flush", "knocks", "slightly", "one", "over", "My", "with", "with", "soft", "embarrassment", "cones", "cheeks", "car", "of", "and", "the", "thud.", "red"],
      },
      {
        target: "“Happens to literally everyone, Sofia,” Mr. Kim reassures me calmly, not seeming bothered in the slightest by my obvious mistake.",
        jumbled: ["in", "not", "everyone,", "Sofia,”", "bothered", "Mr.", "seeming", "my", "reassures", "“Happens", "Kim", "me", "calmly,", "mistake.", "literally", "by", "the", "to", "slightest", "obvious"],
      },
      {
        target: "Restarting the engine, I try again, determined not to let one small stall ruin my entire confidence.",
        jumbled: ["I", "the", "one", "stall", "engine,", "let", "Restarting", "small", "try", "confidence.", "my", "again,", "determined", "to", "entire", "ruin", "not"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an embarrassing mistake you recovered from.",
    mySentenceExample: "I tripped in front of my class but recovered and kept walking confidently.",
  },
  {
    number: 4,
    title: "Dad's Patience",
    image: null,
    imageNote: "Dad sitting calmly in the passenger seat of the family car in a wide empty lot, gesturing encouragingly as Sofia practices turns.",
    story:
      "Between official lessons with Mr. Kim, Dad offers to take me practicing in an empty lot near our neighborhood every evening. Unlike my nervous energy, Dad stays remarkably relaxed no matter how many mistakes I make during our sessions together. “You're overthinking the mirrors again, Sofia,” he says gently one evening, without a hint of frustration in his tone. His calm presence in the passenger seat somehow makes me feel braver about attempting trickier maneuvers I would otherwise avoid. After a week of these evening practice sessions, steering and braking finally start feeling less like separate, terrifying tasks and more like one smooth motion.",
    questions: [
      { text: "Where does Dad take Sofia to practice?", answer: "An empty lot near their neighborhood." },
      { text: "How does Dad react to Sofia's mistakes?", answer: "He stays relaxed, without frustration." },
      { text: "How do steering and braking start feeling after a week?", answer: "Like one smooth motion instead of separate, terrifying tasks." },
    ],
    trueFalse: [
      { text: "Dad takes Sofia practicing in an empty lot.", answer: true },
      { text: "Dad gets frustrated with every mistake Sofia makes.", answer: false },
      { text: "Dad tells Sofia she's overthinking the mirrors.", answer: true },
      { text: "Sofia feels braver because of Dad's calm presence.", answer: true },
      { text: "Steering and braking still feel completely separate after a week.", answer: false },
    ],
    buildSentence: [
      {
        target: "Between official lessons with Mr. Kim, Dad offers to take me practicing in an empty lot near our neighborhood every evening.",
        jumbled: ["an", "Kim,", "neighborhood", "evening.", "with", "to", "take", "offers", "every", "lessons", "Mr.", "in", "near", "empty", "official", "Between", "lot", "practicing", "Dad", "me", "our"],
      },
      {
        target: "Unlike my nervous energy, Dad stays remarkably relaxed no matter how many mistakes I make during our sessions together.",
        jumbled: ["many", "my", "during", "remarkably", "make", "sessions", "Unlike", "together.", "how", "our", "nervous", "stays", "Dad", "no", "energy,", "matter", "mistakes", "relaxed", "I"],
      },
      {
        target: "“You're overthinking the mirrors again, Sofia,” he says gently one evening, without a hint of frustration in his tone.",
        jumbled: ["a", "says", "the", "evening,", "hint", "in", "of", "frustration", "“You're", "overthinking", "he", "again,", "gently", "one", "Sofia,”", "mirrors", "tone.", "without", "his"],
      },
      {
        target: "His calm presence in the passenger seat somehow makes me feel braver about attempting trickier maneuvers I would otherwise avoid.",
        jumbled: ["avoid.", "trickier", "would", "makes", "the", "seat", "in", "attempting", "somehow", "calm", "braver", "feel", "about", "I", "His", "passenger", "maneuvers", "otherwise", "me", "presence"],
      },
      {
        target: "Steering and braking finally start feeling less like separate, terrifying tasks and more like one smooth motion.",
        jumbled: ["like", "like", "feeling", "less", "motion.", "separate,", "Steering", "tasks", "more", "terrifying", "start", "one", "and", "braking", "and", "finally", "smooth"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone who was patient with you while you learned something.",
    mySentenceExample: "My grandma was very patient with me while I learned to knit.",
  },
  {
    number: 5,
    title: "Merging onto the Road",
    image: null,
    imageNote: "Sofia gripping the steering wheel tightly, checking her mirrors nervously as the car merges onto a busy street with several other vehicles.",
    story:
      "Three weeks into lessons, Mr. Kim announces it's time to practice driving on an actual street instead of the empty lot. My heart pounds as I check my mirrors repeatedly, waiting anxiously for a large enough gap between passing cars. “Signal, check your blind spot, then go, Sofia,” Mr. Kim reminds me calmly, though his voice sounds distant beneath my own racing thoughts. When I finally merge, the car accelerates smoothly into traffic, and for a brief, thrilling moment, I actually feel like a real driver instead of just a nervous teenager pretending. The unfamiliar sensation of real speed takes some getting used to.",
    questions: [
      { text: "What does Mr. Kim announce it's time to practice?", answer: "Driving on an actual street." },
      { text: "What does Sofia check repeatedly?", answer: "Her mirrors, waiting for a gap between cars." },
      { text: "How does Sofia feel merging into traffic?", answer: "Like a real driver, for a brief thrilling moment." },
    ],
    trueFalse: [
      { text: "Mr. Kim announces it's time to drive on a real street.", answer: true },
      { text: "Sofia's heart pounds while checking mirrors.", answer: true },
      { text: "Sofia refuses to merge into traffic at all.", answer: false },
      { text: "Sofia feels like a real driver for a moment.", answer: true },
      { text: "Real speed feels completely familiar to Sofia immediately.", answer: false },
    ],
    buildSentence: [
      {
        target: "Three weeks into lessons, Mr. Kim announces it's time to practice driving on an actual street instead of the empty lot.",
        jumbled: ["an", "Three", "street", "the", "Mr.", "it's", "time", "driving", "instead", "on", "actual", "into", "of", "empty", "announces", "Kim", "weeks", "practice", "lessons,", "lot.", "to"],
      },
      {
        target: "My heart pounds as I check my mirrors repeatedly, waiting anxiously for a large enough gap between passing cars.",
        jumbled: ["anxiously", "gap", "cars.", "between", "I", "check", "passing", "pounds", "enough", "mirrors", "My", "waiting", "my", "repeatedly,", "large", "heart", "for", "a", "as"],
      },
      {
        target: "“Signal, check your blind spot, then go, Sofia,” Mr. Kim reminds me calmly, though his voice sounds distant beneath my own racing thoughts.",
        jumbled: ["racing", "reminds", "beneath", "me", "blind", "go,", "Sofia,”", "though", "distant", "then", "own", "Kim", "your", "voice", "sounds", "spot,", "thoughts.", "his", "my", "calmly,", "“Signal,", "Mr.", "check"],
      },
      {
        target: "The car accelerates smoothly into traffic, and for a brief, thrilling moment, I actually feel like a real driver instead of just a nervous teenager pretending.",
        jumbled: ["just", "smoothly", "moment,", "a", "of", "a", "driver", "actually", "for", "car", "into", "and", "I", "brief,", "instead", "a", "pretending.", "The", "traffic,", "nervous", "thrilling", "real", "feel", "like", "accelerates", "teenager"],
      },
      {
        target: "The unfamiliar sensation of real speed takes some getting used to.",
        jumbled: ["of", "unfamiliar", "sensation", "to.", "used", "takes", "speed", "getting", "some", "real", "The"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a moment you felt more grown up than usual.",
    mySentenceExample: "I felt more grown up when I cooked dinner for my whole family alone.",
  },
  {
    number: 6,
    title: "A Close Call",
    image: null,
    imageNote: "Sofia braking hard with wide eyes as another car pulls out unexpectedly ahead, Mr. Kim calmly reaching for the instructor's brake pedal.",
    story:
      "During our fourth lesson on a quiet residential street, a car suddenly pulls out from a driveway without checking properly for oncoming traffic. My whole body freezes for a split second before instinct kicks in, and I slam the brake hard, my heart lurching into my throat. Mr. Kim's hand hovers near his own instructor brake, ready to intervene if needed, but somehow we stop safely with plenty of room to spare. “You reacted exactly right, Sofia,” he says, though my hands won't stop trembling for several long minutes afterward. That moment terrifies me more than any mistake I've made so far.",
    questions: [
      { text: "What does another car do suddenly?", answer: "Pulls out from a driveway without checking for traffic." },
      { text: "What does Sofia's body do at first?", answer: "Freezes for a split second." },
      { text: "What does Mr. Kim say about Sofia's reaction?", answer: "That she reacted exactly right." },
    ],
    trueFalse: [
      { text: "A car pulls out without checking for traffic.", answer: true },
      { text: "Sofia's body freezes for a split second.", answer: true },
      { text: "They crash into the other car.", answer: false },
      { text: "Mr. Kim says Sofia reacted exactly right.", answer: true },
      { text: "Sofia's hands stop trembling immediately afterward.", answer: false },
    ],
    buildSentence: [
      {
        target: "During our fourth lesson on a quiet residential street, a car suddenly pulls out from a driveway without checking properly for oncoming traffic.",
        jumbled: ["on", "street,", "suddenly", "a", "lesson", "residential", "for", "driveway", "checking", "a", "fourth", "out", "without", "traffic.", "a", "pulls", "oncoming", "car", "quiet", "from", "During", "our", "properly"],
      },
      {
        target: "My whole body freezes for a split second before instinct kicks in, and I slam the brake hard, my heart lurching into my throat.",
        jumbled: ["my", "instinct", "throat.", "second", "lurching", "hard,", "my", "for", "into", "before", "freezes", "My", "kicks", "and", "brake", "heart", "in,", "the", "a", "whole", "body", "I", "split", "slam"],
      },
      {
        target: "Mr. Kim's hand hovers near his own instructor brake, ready to intervene if needed, but somehow we stop safely with plenty of room to spare.",
        jumbled: ["room", "if", "Kim's", "safely", "ready", "hovers", "with", "plenty", "we", "instructor", "stop", "to", "hand", "Mr.", "intervene", "his", "own", "somehow", "near", "spare.", "brake,", "to", "of", "needed,", "but"],
      },
      {
        target: "“You reacted exactly right, Sofia,” he says, though my hands won't stop trembling for several long minutes afterward.",
        jumbled: ["several", "says,", "afterward.", "reacted", "my", "right,", "“You", "exactly", "he", "won't", "long", "minutes", "trembling", "hands", "stop", "though", "for", "Sofia,”"],
      },
      {
        target: "That moment terrifies me more than any mistake I've made so far.",
        jumbled: ["than", "moment", "far.", "any", "more", "That", "so", "me", "mistake", "made", "terrifies", "I've"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a scary moment where you had to react quickly.",
    mySentenceExample: "I had to react quickly when a ball flew toward my face during practice.",
  },
  {
    number: 7,
    title: "Talking It Through",
    image: null,
    imageNote: "Sofia sitting on the porch steps at home with Dad, talking quietly while the car sits parked in the driveway behind them.",
    story:
      "That evening, I tell Dad about the close call, admitting quietly that maybe I'm not actually cut out for driving after all. Instead of dismissing my fear, Dad listens carefully and shares a similar story from when he first learned to drive decades ago. “Fear after a close call means you're taking this seriously, Sofia, not that you're failing,” he explains, sitting beside me on the porch steps. He reminds me that even experienced drivers face unpredictable situations sometimes, and reacting well matters more than never feeling scared at all. Slowly, talking honestly about my fear makes it feel much more manageable than before.",
    questions: [
      { text: "What does Sofia tell Dad about?", answer: "The close call." },
      { text: "What does Dad share with Sofia?", answer: "A similar story from when he first learned to drive." },
      { text: "What does Dad say fear after a close call means?", answer: "That she's taking it seriously, not that she's failing." },
    ],
    trueFalse: [
      { text: "Sofia tells Dad about the close call.", answer: true },
      { text: "Dad dismisses Sofia's fear immediately.", answer: false },
      { text: "Dad shares a similar story from his own past.", answer: true },
      { text: "Dad says fear means Sofia is taking driving seriously.", answer: true },
      { text: "Talking about it makes Sofia's fear feel worse.", answer: false },
    ],
    buildSentence: [
      {
        target: "That evening, I tell Dad about the close call, admitting quietly that maybe I'm not actually cut out for driving after all.",
        jumbled: ["call,", "cut", "close", "tell", "Dad", "not", "out", "evening,", "that", "I", "the", "That", "all.", "maybe", "driving", "actually", "admitting", "quietly", "I'm", "after", "about", "for"],
      },
      {
        target: "Instead of dismissing my fear, Dad listens carefully and shares a similar story from when he first learned to drive decades ago.",
        jumbled: ["from", "ago.", "to", "story", "he", "first", "listens", "my", "learned", "when", "a", "decades", "similar", "shares", "Dad", "of", "carefully", "Instead", "drive", "dismissing", "and", "fear,"],
      },
      {
        target: "“Fear after a close call means you're taking this seriously, Sofia, not that you're failing,” he explains, sitting beside me on the porch steps.",
        jumbled: ["porch", "“Fear", "call", "he", "Sofia,", "you're", "the", "means", "you're", "steps.", "a", "failing,”", "not", "this", "on", "close", "beside", "sitting", "that", "explains,", "me", "seriously,", "taking", "after"],
      },
      {
        target: "He reminds me that even experienced drivers face unpredictable situations sometimes, and reacting well matters more than never feeling scared at all.",
        jumbled: ["scared", "sometimes,", "face", "all.", "unpredictable", "more", "and", "even", "situations", "drivers", "feeling", "reminds", "that", "reacting", "He", "matters", "at", "me", "never", "than", "experienced", "well"],
      },
      {
        target: "Slowly, talking honestly about my fear makes it feel much more manageable than before.",
        jumbled: ["my", "it", "fear", "makes", "honestly", "than", "about", "feel", "much", "Slowly,", "before.", "manageable", "talking", "more"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about talking through a fear with someone who understood.",
    mySentenceExample: "Talking through my fear of the dentist with my mom made it feel manageable.",
  },
  {
    number: 8,
    title: "Parallel Parking Practice",
    image: null,
    imageNote: "Sofia looking over her shoulder while carefully reversing the car between two orange cones set up to look like parked vehicles.",
    story:
      "With only two weeks left before my driving test, Mr. Kim insists we dedicate an entire lesson purely to parallel parking, a skill I have been quietly dreading. He sets up two cones representing parked cars, and my first three attempts end with the car angled awkwardly, nowhere close to the curb. “Slow down and trust the mirrors, Sofia,” Mr. Kim repeats patiently, refusing to let frustration creep into his voice despite my repeated failures. On my seventh attempt, something finally clicks, and the car glides smoothly into the space between the cones. The relief and pride I feel afterward completely erase my earlier frustration.",
    questions: [
      { text: "What skill does Mr. Kim want to practice?", answer: "Parallel parking." },
      { text: "How do Sofia's first three attempts go?", answer: "Angled awkwardly, nowhere near the curb." },
      { text: "What happens on Sofia's seventh attempt?", answer: "The car glides smoothly into the space." },
    ],
    trueFalse: [
      { text: "Mr. Kim wants to practice parallel parking.", answer: true },
      { text: "Sofia parks perfectly on her very first try.", answer: false },
      { text: "Mr. Kim tells her to slow down and trust the mirrors.", answer: true },
      { text: "Sofia gives up after the third attempt.", answer: false },
      { text: "The car glides smoothly into the space on the seventh try.", answer: true },
    ],
    buildSentence: [
      {
        target: "With only two weeks left before my driving test, Mr. Kim insists we dedicate an entire lesson purely to parallel parking, a skill I have been quietly dreading.",
        jumbled: ["only", "we", "entire", "lesson", "purely", "a", "my", "I", "weeks", "Mr.", "left", "to", "insists", "driving", "an", "dedicate", "parking,", "before", "test,", "With", "quietly", "skill", "Kim", "parallel", "dreading.", "have", "two", "been"],
      },
      {
        target: "He sets up two cones representing parked cars, and my first three attempts end with the car angled awkwardly, nowhere close to the curb.",
        jumbled: ["end", "the", "first", "with", "nowhere", "curb.", "to", "parked", "sets", "car", "awkwardly,", "my", "three", "close", "cars,", "angled", "representing", "attempts", "up", "the", "two", "and", "He", "cones"],
      },
      {
        target: "“Slow down and trust the mirrors, Sofia,” Mr. Kim repeats patiently, refusing to let frustration creep into his voice despite my repeated failures.",
        jumbled: ["Mr.", "his", "creep", "frustration", "trust", "“Slow", "Kim", "let", "repeats", "to", "patiently,", "voice", "and", "Sofia,”", "the", "my", "down", "failures.", "into", "refusing", "despite", "repeated", "mirrors,"],
      },
      {
        target: "On my seventh attempt, something finally clicks, and the car glides smoothly into the space between the cones.",
        jumbled: ["car", "clicks,", "something", "my", "smoothly", "the", "the", "into", "between", "and", "space", "cones.", "the", "finally", "glides", "On", "seventh", "attempt,"],
      },
      {
        target: "The relief and pride I feel afterward completely erase my earlier frustration.",
        jumbled: ["earlier", "and", "feel", "pride", "afterward", "I", "relief", "my", "erase", "The", "frustration.", "completely"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about practicing something until it finally worked.",
    mySentenceExample: "I practiced free throws until they finally started going in consistently.",
  },
  {
    number: 9,
    title: "The Driving Test",
    image: null,
    imageNote: "Sofia sitting nervously in the driver's seat outside the DMV testing center, an examiner with a clipboard sitting beside her, Dad watching anxiously from the sidewalk.",
    story:
      "The morning of my actual driving test, I barely eat breakfast, my stomach far too full of nervous butterflies to handle food. A serious-looking examiner climbs into the passenger seat with a clipboard, instructing me to begin with a simple three-point turn. My hands feel clammy against the steering wheel, but I remind myself, “You've got this, Sofia,” recalling everything Mr. Kim and Dad taught me over these past weeks. Through parallel parking, lane changes, and a nerve-wracking stop at a busy intersection, I focus entirely on staying calm rather than perfect. Twenty long minutes later, we finally pull back into the testing center parking lot.",
    questions: [
      { text: "How does Sofia feel eating breakfast that morning?", answer: "Too nervous to eat much." },
      { text: "Who climbs into the passenger seat?", answer: "A serious-looking examiner." },
      { text: "What does Sofia focus on during the test?", answer: "Staying calm rather than perfect." },
    ],
    trueFalse: [
      { text: "Sofia barely eats breakfast that morning.", answer: true },
      { text: "A serious examiner sits in the passenger seat.", answer: true },
      { text: "Sofia's hands feel completely dry and relaxed.", answer: false },
      { text: "Sofia focuses on staying calm rather than perfect.", answer: true },
      { text: "The test lasts only two minutes.", answer: false },
    ],
    buildSentence: [
      {
        target: "The morning of my actual driving test, I barely eat breakfast, my stomach far too full of nervous butterflies to handle food.",
        jumbled: ["barely", "my", "full", "too", "morning", "butterflies", "handle", "of", "far", "breakfast,", "to", "The", "food.", "eat", "stomach", "driving", "nervous", "actual", "my", "I", "test,", "of"],
      },
      {
        target: "A serious-looking examiner climbs into the passenger seat with a clipboard, instructing me to begin with a simple three-point turn.",
        jumbled: ["A", "the", "with", "a", "me", "into", "serious-looking", "examiner", "begin", "simple", "seat", "turn.", "to", "climbs", "with", "passenger", "three-point", "instructing", "clipboard,", "a"],
      },
      {
        target: "My hands feel clammy against the steering wheel, but I remind myself, “You've got this, Sofia,” recalling everything Mr. Kim and Dad taught me over these past weeks.",
        jumbled: ["Dad", "wheel,", "weeks.", "Mr.", "I", "feel", "got", "me", "“You've", "recalling", "My", "everything", "myself,", "past", "remind", "taught", "and", "over", "hands", "Kim", "this,", "steering", "the", "clammy", "Sofia,”", "against", "these", "but"],
      },
      {
        target: "Through parallel parking, lane changes, and a nerve-wracking stop at a busy intersection, I focus entirely on staying calm rather than perfect.",
        jumbled: ["stop", "rather", "parking,", "than", "nerve-wracking", "at", "and", "calm", "Through", "a", "on", "perfect.", "staying", "parallel", "I", "intersection,", "entirely", "busy", "changes,", "focus", "a", "lane"],
      },
      {
        target: "Twenty long minutes later, we finally pull back into the testing center parking lot.",
        jumbled: ["parking", "pull", "minutes", "back", "we", "later,", "lot.", "Twenty", "center", "into", "the", "testing", "finally", "long"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a test or exam that made you very nervous.",
    mySentenceExample: "My swimming test made me very nervous before I dove into the pool.",
  },
  {
    number: 10,
    title: "Passing the Test",
    image: null,
    imageNote: "Sofia hugging Dad tightly outside the DMV, holding a printed 'PASS' slip, both grinning widely with pure joy.",
    story:
      "Back inside the testing center, the examiner reviews her notes silently while my heart hammers against my ribs, waiting for the verdict. “Congratulations, you passed, Sofia,” she finally says, and pure relief floods through my entire body all at once. I rush outside to find Dad waiting anxiously, and the moment he sees my face, he already knows the answer before I even speak. We hug tightly right there on the sidewalk, and I think back on every stall, every nervous mirror check, and that one terrifying close call. Looking back, all those difficult moments feel completely worth it now.",
    questions: [
      { text: "What does the examiner say to Sofia?", answer: "Congratulations, you passed." },
      { text: "How does Sofia feel hearing the news?", answer: "Pure relief." },
      { text: "What does Sofia think back on afterward?", answer: "Every stall, mirror check, and the close call." },
    ],
    trueFalse: [
      { text: "The examiner tells Sofia she passed.", answer: true },
      { text: "Sofia feels disappointed hearing the news.", answer: false },
      { text: "Dad is waiting anxiously outside.", answer: true },
      { text: "Sofia forgets about all the difficult moments completely.", answer: false },
      { text: "Sofia feels the hard moments were worth it.", answer: true },
    ],
    buildSentence: [
      {
        target: "Back inside the testing center, the examiner reviews her notes silently while my heart hammers against my ribs, waiting for the verdict.",
        jumbled: ["my", "the", "verdict.", "Back", "center,", "while", "reviews", "testing", "my", "hammers", "waiting", "the", "against", "her", "for", "examiner", "heart", "ribs,", "inside", "notes", "the", "silently"],
      },
      {
        target: "“Congratulations, you passed, Sofia,” she finally says, and pure relief floods through my entire body all at once.",
        jumbled: ["relief", "my", "passed,", "entire", "all", "body", "through", "once.", "says,", "and", "you", "Sofia,”", "“Congratulations,", "she", "pure", "finally", "at", "floods"],
      },
      {
        target: "I rush outside to find Dad waiting anxiously, and the moment he sees my face, he already knows the answer before I even speak.",
        jumbled: ["sees", "he", "Dad", "moment", "speak.", "face,", "even", "outside", "answer", "before", "to", "knows", "he", "and", "the", "waiting", "the", "I", "anxiously,", "rush", "find", "my", "I", "already"],
      },
      {
        target: "We hug tightly right there on the sidewalk, and I think back on every stall, every nervous mirror check, and that one terrifying close call.",
        jumbled: ["right", "nervous", "close", "there", "and", "mirror", "think", "every", "tightly", "We", "one", "check,", "sidewalk,", "the", "stall,", "back", "terrifying", "call.", "and", "that", "on", "every", "I", "hug", "on"],
      },
      {
        target: "Looking back, all those difficult moments feel completely worth it now.",
        jumbled: ["moments", "it", "back,", "all", "feel", "those", "worth", "completely", "difficult", "Looking", "now."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reaching a goal after facing many small challenges.",
    mySentenceExample: "I reached my goal of running a mile after facing many tiring practices.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
