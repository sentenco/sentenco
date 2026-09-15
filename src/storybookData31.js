// A2 Teens digital storybook, Book 31: "Studying for the Big Exam"
// Static content -- no Supabase, mirrors the pattern in storybookData21.js
// and storybookData22.js (the Teens track). First book in a new A2 Teens
// batch (Books 31-38) -- Teens has been A1-only until now (Adults moved
// to A2 earlier, then Kids got its own A2 batch, Books 23-30). Uses the
// Teens-track pattern: 3 questions, 5 True/False and 5 Build-a-Sentence
// per chapter, Build-a-Sentence items ordered shortest-to-longest, with
// noticeably more complex grammar/vocabulary than the A1 Teens books
// (subordinate clauses, modals, past continuous, conditionals).
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook31/cover.jpg";

export const STORYBOOK_TITLE = "Studying for the Big Exam";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Maya and Jordan sitting across from each other at a library table, covered in flashcards and open notebooks, both looking focused under warm reading lamps.";

export const CHARACTERS = [
  { name: "Maya", role: "The narrator, a teenager", look: "Dark hair pulled back, hoodie, thoughtful and easily overwhelmed by pressure at first." },
  { name: "Jordan", role: "Maya's classmate and study partner", look: "Short hair, glasses, calm and encouraging." },
  { name: "Mr. Cole", role: "Maya's teacher", look: "Cardigan, chalk-dusted hands, strict but fair." },
  { name: "Mom", role: "Maya's mother", look: "Reading glasses on a chain, supportive and practical." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Exam Announcement",
    image: null,
    imageNote: "Mr. Cole writing 'FINAL EXAM - Two Weeks' on the whiteboard while the class groans, Maya staring at her notebook with a worried expression.",
    story:
      "On Monday morning, Mr. Cole walks into class and writes something on the whiteboard that makes my stomach drop: “Final Exam — Two Weeks.” A quiet groan spreads across the room, and I feel my chest tighten with sudden panic. “Okay, Maya, just breathe,” I whisper to myself. This exam covers three whole months of material, and honestly, I have barely reviewed any of it so far. While everyone else complains to their neighbors, I sit frozen, thinking about how far behind I already feel. Two weeks doesn't sound like nearly enough time to learn everything I need to know before this exam decides so much of my grade.",
    questions: [
      { text: "What does Mr. Cole write on the whiteboard?", answer: "Final Exam -- Two Weeks." },
      { text: "How does Maya feel when she sees it?", answer: "Panicked, her stomach drops." },
      { text: "How much material does the exam cover?", answer: "Three whole months." },
    ],
    trueFalse: [
      { text: "Mr. Cole announces the final exam is in two weeks.", answer: true },
      { text: "Maya feels completely calm about the news.", answer: false },
      { text: "The exam covers three months of material.", answer: true },
      { text: "Everyone in class is excited about the exam.", answer: false },
      { text: "Maya has already reviewed everything she needs.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Monday morning, Mr. Cole walks into class and writes something on the whiteboard that makes my stomach drop: “Final Exam — Two Weeks.”",
        jumbled: ["Weeks.”", "on", "Mr.", "walks", "—", "Cole", "Two", "stomach", "into", "class", "writes", "drop:", "my", "and", "something", "Exam", "“Final", "Monday", "makes", "whiteboard", "that", "the", "morning,", "On"],
      },
      {
        target: "A quiet groan spreads across the room, and I feel my chest tighten with sudden panic.",
        jumbled: ["room,", "spreads", "panic.", "and", "chest", "my", "tighten", "sudden", "with", "the", "feel", "across", "A", "quiet", "groan", "I"],
      },
      {
        target: "“Okay, Maya, just breathe,” I whisper to myself.",
        jumbled: ["whisper", "breathe,”", "to", "“Okay,", "myself.", "Maya,", "I", "just"],
      },
      {
        target: "This exam covers three whole months of material, and honestly, I have barely reviewed any of it so far.",
        jumbled: ["material,", "and", "barely", "reviewed", "three", "This", "of", "exam", "so", "have", "covers", "far.", "of", "any", "I", "months", "whole", "it", "honestly,"],
      },
      {
        target: "Two weeks doesn't sound like nearly enough time to learn everything I need to know before this exam decides so much of my grade.",
        jumbled: ["need", "to", "weeks", "nearly", "Two", "exam", "much", "know", "like", "time", "to", "doesn't", "learn", "sound", "my", "this", "before", "grade.", "everything", "decides", "enough", "so", "I", "of"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you found out about a big deadline.",
    mySentenceExample: "I felt nervous when I found out my project was due in three days.",
  },
  {
    number: 2,
    title: "Making a Study Plan",
    image: null,
    imageNote: "Maya and Jordan sitting together at a lunch table, writing out a color-coded study calendar on a notebook page, both looking determined.",
    story:
      "At lunch, I explain my panic to Jordan, who has always been much more organized than I am about schoolwork. “Let's make a real plan instead of just worrying, Maya,” Jordan suggests calmly, pulling out a notebook. We divide the fourteen days into sections, deciding which subject we will focus on each afternoon after school. Jordan even suggests studying together at the library, since we struggle with different topics and could actually help each other. Writing everything down somehow makes the huge amount of material feel a little more manageable. For the first time since the announcement, I feel a small spark of hope.",
    questions: [
      { text: "What does Jordan suggest making?", answer: "A real study plan." },
      { text: "How do they divide the fourteen days?", answer: "Into sections for different subjects each afternoon." },
      { text: "Where do they decide to study together?", answer: "The library." },
    ],
    trueFalse: [
      { text: "Jordan suggests making a real study plan.", answer: true },
      { text: "They divide fourteen days by subject.", answer: true },
      { text: "Jordan refuses to study together at the library.", answer: false },
      { text: "Writing the plan makes Maya feel worse.", answer: false },
      { text: "Maya feels a small spark of hope.", answer: true },
    ],
    buildSentence: [
      {
        target: "At lunch, I explain my panic to Jordan, who has always been much more organized than I am about schoolwork.",
        jumbled: ["I", "has", "schoolwork.", "organized", "At", "panic", "explain", "about", "than", "my", "who", "lunch,", "much", "Jordan,", "been", "to", "more", "am", "always", "I"],
      },
      {
        target: "“Let's make a real plan instead of just worrying, Maya,” Jordan suggests calmly, pulling out a notebook.",
        jumbled: ["out", "Maya,”", "worrying,", "make", "just", "Jordan", "“Let's", "pulling", "a", "of", "a", "calmly,", "real", "plan", "instead", "suggests", "notebook."],
      },
      {
        target: "We divide the fourteen days into sections, deciding which subject we will focus on each afternoon after school.",
        jumbled: ["which", "sections,", "days", "divide", "the", "focus", "deciding", "We", "on", "afternoon", "after", "subject", "we", "will", "each", "fourteen", "into", "school."],
      },
      {
        target: "Jordan even suggests studying together at the library, since we struggle with different topics and could actually help each other.",
        jumbled: ["could", "we", "different", "struggle", "at", "together", "since", "with", "even", "and", "the", "actually", "each", "other.", "library,", "topics", "help", "suggests", "studying", "Jordan"],
      },
      {
        target: "Writing everything down somehow makes the huge amount of material feel a little more manageable.",
        jumbled: ["everything", "down", "amount", "huge", "Writing", "of", "feel", "a", "more", "manageable.", "somehow", "material", "the", "little", "makes"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a plan you made to solve a problem.",
    mySentenceExample: "I made a plan to finish my homework before dinner every day.",
  },
  {
    number: 3,
    title: "Too Many Distractions",
    image: null,
    imageNote: "Maya sitting at her desk with an open textbook, but staring at her phone screen instead, notifications lighting up the display.",
    story:
      "Our first study session doesn't go nearly as well as I had hoped. I sit down with my textbook open, determined to focus, but my phone keeps buzzing with messages from group chats. Every few minutes, I check a notification, telling myself it will only take a second, but somehow twenty minutes disappear each time. When I finally look up, an entire hour has passed and I have barely read two pages. Jordan, who studies at my house today, notices my scattered attention immediately. “Maybe we should try something different tomorrow, Maya,” Jordan says gently, and I nod, embarrassed by how unfocused I have been.",
    questions: [
      { text: "What keeps interrupting Maya while she studies?", answer: "Her phone buzzing with messages." },
      { text: "How much does Maya read in an hour?", answer: "Barely two pages." },
      { text: "What does Jordan suggest?", answer: "Trying something different tomorrow." },
    ],
    trueFalse: [
      { text: "Maya's phone keeps buzzing with messages.", answer: true },
      { text: "Maya reads the whole textbook in an hour.", answer: false },
      { text: "Jordan studies at Maya's house that day.", answer: true },
      { text: "Jordan does not notice Maya's distraction.", answer: false },
      { text: "Jordan suggests trying something different.", answer: true },
    ],
    buildSentence: [
      {
        target: "Our first study session doesn't go nearly as well as I had hoped.",
        jumbled: ["well", "study", "Our", "doesn't", "hoped.", "go", "as", "nearly", "session", "I", "had", "as", "first"],
      },
      {
        target: "I sit down with my textbook open, determined to focus, but my phone keeps buzzing with messages from group chats.",
        jumbled: ["determined", "with", "group", "messages", "but", "open,", "with", "sit", "keeps", "focus,", "chats.", "to", "textbook", "down", "buzzing", "I", "my", "my", "phone", "from"],
      },
      {
        target: "Every few minutes, I check a notification, telling myself it will only take a second, but somehow twenty minutes disappear each time.",
        jumbled: ["a", "each", "time.", "take", "notification,", "I", "telling", "minutes,", "will", "a", "second,", "somehow", "it", "only", "check", "disappear", "Every", "but", "minutes", "few", "twenty", "myself"],
      },
      {
        target: "An entire hour has passed and I have barely read two pages.",
        jumbled: ["An", "read", "entire", "have", "barely", "I", "hour", "and", "two", "pages.", "has", "passed"],
      },
      {
        target: "“Maybe we should try something different tomorrow, Maya,” Jordan says gently, and I nod, embarrassed by how unfocused I have been.",
        jumbled: ["been.", "I", "by", "try", "says", "“Maybe", "I", "different", "we", "unfocused", "and", "Maya,”", "Jordan", "embarrassed", "something", "tomorrow,", "have", "how", "should", "nod,", "gently,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something that distracts you when you try to focus.",
    mySentenceExample: "My phone distracts me a lot when I try to study.",
  },
  {
    number: 4,
    title: "A New Strategy",
    image: null,
    imageNote: "Maya's phone placed in another room while she studies at the kitchen table with flashcards, Mom setting a timer nearby.",
    story:
      "That evening, Mom notices my frustration and offers some advice from her own school days. “Try studying in short bursts, with real breaks in between, Maya,” she suggests, setting a timer for twenty-five minutes. She also recommends leaving my phone in another room completely, which sounds painful but strangely necessary. I make a stack of flashcards for vocabulary words instead of just rereading my notes passively. During my first real focused session, I actually remember information much better than before. When the timer finally rings, I feel surprised at how much I accomplished without constant interruptions pulling my attention away.",
    questions: [
      { text: "What advice does Mom give Maya?", answer: "Study in short bursts with real breaks in between." },
      { text: "What does Mom recommend Maya do with her phone?", answer: "Leave it in another room." },
      { text: "What does Maya make instead of just rereading notes?", answer: "Flashcards." },
    ],
    trueFalse: [
      { text: "Mom suggests studying in short bursts with breaks.", answer: true },
      { text: "Mom tells Maya to keep her phone right beside her.", answer: false },
      { text: "Maya makes flashcards for vocabulary words.", answer: true },
      { text: "Maya remembers information worse than before.", answer: false },
      { text: "Maya feels surprised at how much she accomplished.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, Mom notices my frustration and offers some advice from her own school days.",
        jumbled: ["some", "evening,", "days.", "her", "from", "Mom", "notices", "and", "my", "That", "own", "frustration", "offers", "advice", "school"],
      },
      {
        target: "“Try studying in short bursts, with real breaks in between, Maya,” she suggests, setting a timer for twenty-five minutes.",
        jumbled: ["timer", "for", "a", "“Try", "suggests,", "between,", "bursts,", "twenty-five", "short", "real", "she", "breaks", "studying", "Maya,”", "in", "with", "in", "setting", "minutes."],
      },
      {
        target: "She also recommends leaving my phone in another room completely, which sounds painful but strangely necessary.",
        jumbled: ["sounds", "in", "which", "but", "also", "completely,", "recommends", "painful", "strangely", "leaving", "necessary.", "She", "room", "phone", "my", "another"],
      },
      {
        target: "I make a stack of flashcards for vocabulary words instead of just rereading my notes passively.",
        jumbled: ["make", "vocabulary", "for", "flashcards", "notes", "instead", "just", "passively.", "a", "stack", "I", "of", "of", "rereading", "my", "words"],
      },
      {
        target: "I feel surprised at how much I accomplished without constant interruptions pulling my attention away.",
        jumbled: ["without", "I", "accomplished", "feel", "I", "my", "how", "pulling", "interruptions", "surprised", "away.", "attention", "at", "constant", "much"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about advice someone gave you that actually helped.",
    mySentenceExample: "My coach gave me advice about breathing that actually helped me relax.",
  },
  {
    number: 5,
    title: "Falling Behind",
    image: null,
    imageNote: "Maya looking over at Jordan's neatly organized notes at the library, comparing them anxiously to her own messier notebook.",
    story:
      "By the end of the first week, I glance over at Jordan's notes during our library session and feel a wave of anxiety rush through me. Jordan's notebook is perfectly organized with color-coded sections, while mine looks messy and incomplete in comparison. “You already know so much more than me,” I say quietly, my confidence sinking lower with every page I compare. Jordan looks up, surprised by my sudden discouragement. “We're just better at different subjects, Maya,” Jordan replies simply, but I can't shake the growing feeling that I might not be ready for this exam no matter how hard I try.",
    questions: [
      { text: "What does Maya notice about Jordan's notes?", answer: "They are perfectly organized with color-coded sections." },
      { text: "How does Maya's notebook compare?", answer: "Messy and incomplete." },
      { text: "What does Jordan say about their different strengths?", answer: "That they're just better at different subjects." },
    ],
    trueFalse: [
      { text: "Jordan's notes are color-coded and organized.", answer: true },
      { text: "Maya's notebook looks neater than Jordan's.", answer: false },
      { text: "Maya feels a wave of anxiety.", answer: true },
      { text: "Jordan says they are equally bad at everything.", answer: false },
      { text: "Maya worries she might not be ready.", answer: true },
    ],
    buildSentence: [
      {
        target: "By the end of the first week, I glance over at Jordan's notes during our library session and feel a wave of anxiety rush through me.",
        jumbled: ["wave", "notes", "and", "session", "I", "rush", "a", "end", "over", "of", "anxiety", "library", "first", "our", "By", "the", "week,", "me.", "through", "during", "Jordan's", "the", "at", "glance", "of", "feel"],
      },
      {
        target: "Jordan's notebook is perfectly organized with color-coded sections, while mine looks messy and incomplete in comparison.",
        jumbled: ["incomplete", "comparison.", "organized", "Jordan's", "is", "and", "mine", "messy", "perfectly", "with", "looks", "notebook", "in", "sections,", "while", "color-coded"],
      },
      {
        target: "“You already know so much more than me,” I say quietly, my confidence sinking lower with every page I compare.",
        jumbled: ["“You", "know", "quietly,", "so", "more", "page", "with", "than", "I", "compare.", "already", "confidence", "lower", "I", "say", "much", "my", "sinking", "every", "me,”"],
      },
      {
        target: "Jordan looks up, surprised by my sudden discouragement.",
        jumbled: ["up,", "looks", "by", "sudden", "discouragement.", "my", "surprised", "Jordan"],
      },
      {
        target: "“We're just better at different subjects, Maya,” Jordan replies simply, but I can't shake the growing feeling that I might not be ready for this exam no matter how hard I try.",
        jumbled: ["subjects,", "how", "I", "just", "exam", "ready", "Jordan", "might", "simply,", "growing", "that", "matter", "feeling", "but", "better", "I", "I", "shake", "at", "Maya,”", "no", "different", "can't", "not", "try.", "“We're", "this", "hard", "the", "replies", "be", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you compared yourself to someone else.",
    mySentenceExample: "I compared my drawing to my friend's and felt a little discouraged.",
  },
  {
    number: 6,
    title: "Jordan's Encouragement",
    image: null,
    imageNote: "Jordan turning Maya's notebook toward her, pointing out a well-written answer, both smiling as they sit surrounded by open books.",
    story:
      "Noticing my discouragement, Jordan pauses our session and flips back through my notebook carefully. “Look at this answer you wrote yesterday, Maya,” Jordan says, pointing to a paragraph I had completely forgotten about. “This is actually better explained than mine.” I stare at my own words, surprised that they sound more confident than I remembered feeling while writing them. Jordan explains that everyone studies differently, and comparing our progress isn't fair to either of us. “Let's just focus on getting a little better each day instead,” Jordan suggests warmly. Hearing this reframes the whole exam in a way that finally feels achievable.",
    questions: [
      { text: "What does Jordan point out in Maya's notebook?", answer: "An answer she wrote yesterday that's actually well explained." },
      { text: "How does Maya feel reading her own answer?", answer: "Surprised -- it sounds more confident than she remembered." },
      { text: "What does Jordan suggest focusing on instead?", answer: "Getting a little better each day." },
    ],
    trueFalse: [
      { text: "Jordan points out a well-written answer of Maya's.", answer: true },
      { text: "Maya's answer sounds worse than she remembered.", answer: false },
      { text: "Jordan says comparing progress isn't fair to either of them.", answer: true },
      { text: "Jordan suggests focusing only on winning.", answer: false },
      { text: "Maya feels the exam is finally achievable.", answer: true },
    ],
    buildSentence: [
      {
        target: "Noticing my discouragement, Jordan pauses our session and flips back through my notebook carefully.",
        jumbled: ["notebook", "flips", "back", "Jordan", "and", "through", "carefully.", "discouragement,", "session", "our", "pauses", "my", "my", "Noticing"],
      },
      {
        target: "“Look at this answer you wrote yesterday, Maya,” Jordan says, pointing to a paragraph I had completely forgotten about.",
        jumbled: ["this", "had", "at", "answer", "Maya,”", "to", "Jordan", "paragraph", "a", "wrote", "forgotten", "pointing", "yesterday,", "completely", "“Look", "about.", "you", "I", "says,"],
      },
      {
        target: "I stare at my own words, surprised that they sound more confident than I remembered feeling while writing them.",
        jumbled: ["them.", "I", "surprised", "more", "words,", "while", "that", "they", "own", "confident", "writing", "remembered", "at", "feeling", "I", "sound", "than", "my", "stare"],
      },
      {
        target: "Jordan explains that everyone studies differently, and comparing our progress isn't fair to either of us.",
        jumbled: ["differently,", "Jordan", "explains", "comparing", "fair", "everyone", "studies", "isn't", "and", "our", "either", "progress", "to", "us.", "of", "that"],
      },
      {
        target: "“Let's just focus on getting a little better each day instead,” Jordan suggests warmly.",
        jumbled: ["suggests", "day", "little", "just", "getting", "on", "“Let's", "warmly.", "better", "a", "each", "instead,”", "focus", "Jordan"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time a friend helped you feel more confident.",
    mySentenceExample: "My friend helped me feel more confident before my presentation.",
  },
  {
    number: 7,
    title: "The Practice Test",
    image: null,
    imageNote: "Maya and Jordan sitting at separate desks with a timer running, both writing quickly on practice exam sheets, focused expressions.",
    story:
      "With one week left, Mr. Cole hands out a practice test to help us prepare for the real exam's format and timing. Jordan and I decide to take it together under real exam conditions, setting a strict timer and sitting apart so we can't help each other. My hands feel slightly shaky as I turn the first page, but I remind myself, “This is just practice, Maya, not the actual grade.” Some questions feel surprisingly familiar from our study sessions, while others make me pause and think much harder. When the timer finally buzzes, I feel exhausted but oddly proud of pushing through it.",
    questions: [
      { text: "What does Mr. Cole hand out?", answer: "A practice test." },
      { text: "How do Maya and Jordan take the practice test?", answer: "Together, under real exam conditions, sitting apart." },
      { text: "How does Maya feel when the timer buzzes?", answer: "Exhausted but oddly proud." },
    ],
    trueFalse: [
      { text: "Mr. Cole hands out a practice test.", answer: true },
      { text: "Maya and Jordan help each other during the test.", answer: false },
      { text: "Maya's hands feel slightly shaky.", answer: true },
      { text: "Every question feels completely unfamiliar to Maya.", answer: false },
      { text: "Maya feels exhausted but proud afterward.", answer: true },
    ],
    buildSentence: [
      {
        target: "With one week left, Mr. Cole hands out a practice test to help us prepare for the real exam's format and timing.",
        jumbled: ["out", "prepare", "a", "practice", "exam's", "one", "Cole", "test", "the", "for", "format", "Mr.", "real", "and", "week", "hands", "to", "left,", "help", "With", "us", "timing."],
      },
      {
        target: "Jordan and I decide to take it together under real exam conditions, setting a strict timer and sitting apart so we can't help each other.",
        jumbled: ["under", "setting", "strict", "other.", "exam", "Jordan", "timer", "help", "sitting", "real", "to", "and", "I", "decide", "we", "a", "together", "it", "and", "each", "take", "can't", "apart", "conditions,", "so"],
      },
      {
        target: "My hands feel slightly shaky as I turn the first page, but I remind myself, “This is just practice, Maya, not the actual grade.”",
        jumbled: ["remind", "the", "is", "“This", "the", "I", "shaky", "myself,", "as", "just", "first", "Maya,", "not", "but", "page,", "feel", "actual", "grade.”", "I", "hands", "practice,", "My", "slightly", "turn"],
      },
      {
        target: "Some questions feel surprisingly familiar from our study sessions, while others make me pause and think much harder.",
        jumbled: ["and", "study", "sessions,", "our", "questions", "others", "think", "much", "me", "harder.", "feel", "Some", "make", "from", "while", "familiar", "pause", "surprisingly"],
      },
      {
        target: "I feel exhausted but oddly proud of pushing through it.",
        jumbled: ["exhausted", "but", "feel", "through", "oddly", "proud", "of", "pushing", "I", "it."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about practicing before doing something important.",
    mySentenceExample: "I practiced my speech many times before presenting it to the class.",
  },
  {
    number: 8,
    title: "Reviewing Mistakes",
    image: null,
    imageNote: "Maya and Jordan going through the graded practice test together, circling wrong answers in red pen and discussing corrections.",
    story:
      "The next day, Mr. Cole returns our graded practice tests, and I nervously flip to my score before reading any comments. It's not perfect, but it's better than I expected, especially considering how nervous I felt. Jordan and I sit down together to review every single mistake, discussing why each wrong answer happened instead of just moving past it. “This is actually the most useful part, Maya,” Jordan explains, “because now we know exactly what to review.” Going through our errors carefully, rather than feeling embarrassed about them, helps both of us understand the material in a way that simple rereading never could.",
    questions: [
      { text: "What does Mr. Cole return the next day?", answer: "Their graded practice tests." },
      { text: "How does Maya feel about her score?", answer: "Not perfect, but better than expected." },
      { text: "Why does Jordan say reviewing mistakes is useful?", answer: "Because now they know exactly what to review." },
    ],
    trueFalse: [
      { text: "Mr. Cole returns their graded practice tests.", answer: true },
      { text: "Maya's score is worse than she expected.", answer: false },
      { text: "Jordan and Maya review every mistake together.", answer: true },
      { text: "Jordan says reviewing mistakes is a waste of time.", answer: false },
      { text: "Reviewing errors helps them understand the material better.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next day, Mr. Cole returns our graded practice tests, and I nervously flip to my score before reading any comments.",
        jumbled: ["flip", "before", "my", "to", "score", "I", "practice", "next", "Mr.", "any", "Cole", "reading", "our", "The", "returns", "nervously", "graded", "and", "tests,", "day,", "comments."],
      },
      {
        target: "It's not perfect, but it's better than I expected, especially considering how nervous I felt.",
        jumbled: ["than", "It's", "I", "felt.", "considering", "I", "nervous", "how", "especially", "not", "it's", "expected,", "but", "perfect,", "better"],
      },
      {
        target: "Jordan and I sit down together to review every single mistake, discussing why each wrong answer happened instead of just moving past it.",
        jumbled: ["of", "discussing", "past", "to", "just", "Jordan", "together", "happened", "and", "moving", "I", "answer", "instead", "each", "single", "review", "sit", "every", "why", "wrong", "down", "it.", "mistake,"],
      },
      {
        target: "“This is actually the most useful part, Maya,” Jordan explains, “because now we know exactly what to review.”",
        jumbled: ["Jordan", "“because", "review.”", "know", "exactly", "to", "Maya,”", "now", "part,", "is", "actually", "“This", "we", "explains,", "most", "the", "useful", "what"],
      },
      {
        target: "Going through our errors carefully, rather than feeling embarrassed about them, helps both of us understand the material in a way that simple rereading never could.",
        jumbled: ["Going", "both", "carefully,", "them,", "never", "embarrassed", "feeling", "rather", "the", "that", "errors", "about", "than", "helps", "rereading", "simple", "material", "of", "way", "in", "our", "us", "through", "could.", "understand", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning from a mistake you made.",
    mySentenceExample: "I learned to double-check my answers after making a careless mistake.",
  },
  {
    number: 9,
    title: "Exam Day Nerves",
    image: null,
    imageNote: "Maya standing outside the exam hall taking a deep breath, Jordan giving her a reassuring nod nearby, other students filing inside.",
    story:
      "The morning of the actual exam arrives faster than I expected, and my stomach feels tight with nervous energy as I get ready. Mom makes my favorite breakfast, reminding me gently that I have prepared more than I realize over these past two weeks. At school, I meet Jordan outside the exam hall, and we exchange a quick, nervous smile. “We've got this, Maya,” Jordan says confidently, though I can tell they feel just as nervous as I do underneath their calm expression. Taking a deep breath, I remind myself of everything we practiced together and walk through the doors.",
    questions: [
      { text: "How does Maya feel the morning of the exam?", answer: "Her stomach feels tight with nervous energy." },
      { text: "What does Mom remind Maya of?", answer: "That she has prepared more than she realizes." },
      { text: "What does Jordan say outside the exam hall?", answer: "We've got this." },
    ],
    trueFalse: [
      { text: "Maya's stomach feels tight with nervous energy.", answer: true },
      { text: "Mom forgets to make Maya breakfast.", answer: false },
      { text: "Maya meets Jordan outside the exam hall.", answer: true },
      { text: "Jordan feels completely calm with no nerves at all.", answer: false },
      { text: "Maya reminds herself of everything they practiced.", answer: true },
    ],
    buildSentence: [
      {
        target: "The morning of the actual exam arrives faster than I expected, and my stomach feels tight with nervous energy as I get ready.",
        jumbled: ["arrives", "the", "of", "with", "faster", "actual", "ready.", "nervous", "my", "than", "morning", "I", "exam", "energy", "feels", "and", "The", "as", "stomach", "expected,", "get", "tight", "I"],
      },
      {
        target: "Mom makes my favorite breakfast, reminding me gently that I have prepared more than I realize over these past two weeks.",
        jumbled: ["I", "over", "weeks.", "two", "makes", "favorite", "these", "breakfast,", "prepared", "than", "past", "more", "Mom", "I", "gently", "have", "realize", "me", "that", "reminding", "my"],
      },
      {
        target: "At school, I meet Jordan outside the exam hall, and we exchange a quick, nervous smile.",
        jumbled: ["exam", "and", "school,", "exchange", "quick,", "Jordan", "meet", "the", "nervous", "I", "smile.", "we", "hall,", "outside", "At", "a"],
      },
      {
        target: "“We've got this, Maya,” Jordan says confidently, though I can tell they feel just as nervous as I do underneath their calm expression.",
        jumbled: ["though", "got", "I", "can", "do", "expression.", "tell", "they", "“We've", "just", "feel", "Jordan", "as", "nervous", "their", "I", "says", "confidently,", "as", "Maya,”", "underneath", "calm", "this,"],
      },
      {
        target: "Taking a deep breath, I remind myself of everything we practiced together and walk through the doors.",
        jumbled: ["the", "together", "Taking", "remind", "I", "through", "of", "practiced", "myself", "and", "walk", "a", "breath,", "doors.", "deep", "everything", "we"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how you felt before something important.",
    mySentenceExample: "I felt nervous but ready before my big soccer match.",
  },
  {
    number: 10,
    title: "The Results",
    image: null,
    imageNote: "Maya and Jordan opening their exam results together in the hallway, both breaking into relieved, proud smiles at what they see.",
    story:
      "A week later, Mr. Cole hands back our exam results, and my hands tremble slightly as I unfold the paper. My score is not perfect, but it's significantly better than I ever imagined possible two weeks ago. “Look at us, Maya,” Jordan grins widely at their own paper beside me, and we both realize how far we've come since that panicked Monday morning. “We actually did it,” I say, still a little in disbelief at how much we improved through consistent effort. Walking home together, I understand now that studying isn't really about being perfect, it's about growing steadily and never giving up along the way.",
    questions: [
      { text: "How does Maya feel unfolding her results?", answer: "Her hands tremble slightly." },
      { text: "How does Maya's score compare to what she imagined?", answer: "Significantly better than she ever imagined." },
      { text: "What does Maya understand about studying by the end?", answer: "That it's about growing steadily and never giving up, not being perfect." },
    ],
    trueFalse: [
      { text: "Maya's hands tremble as she unfolds the paper.", answer: true },
      { text: "Maya's score is worse than she imagined.", answer: false },
      { text: "Jordan also improved on the exam.", answer: true },
      { text: "Maya feels no sense of accomplishment at all.", answer: false },
      { text: "Maya learns studying is about growing steadily.", answer: true },
    ],
    buildSentence: [
      {
        target: "A week later, Mr. Cole hands back our exam results, and my hands tremble slightly as I unfold the paper.",
        jumbled: ["our", "Cole", "exam", "Mr.", "the", "tremble", "later,", "week", "back", "results,", "as", "unfold", "I", "and", "my", "hands", "hands", "A", "slightly", "paper."],
      },
      {
        target: "My score is not perfect, but it's significantly better than I ever imagined possible two weeks ago.",
        jumbled: ["but", "than", "weeks", "I", "ever", "is", "it's", "possible", "imagined", "score", "better", "significantly", "not", "My", "ago.", "two", "perfect,"],
      },
      {
        target: "“Look at us, Maya,” Jordan grins widely at their own paper beside me, and we both realize how far we've come since that panicked Monday morning.",
        jumbled: ["panicked", "at", "me,", "beside", "own", "that", "far", "realize", "come", "at", "us,", "their", "“Look", "we", "grins", "we've", "how", "morning.", "Monday", "paper", "widely", "both", "and", "Jordan", "Maya,”", "since"],
      },
      {
        target: "“We actually did it,” I say, still a little in disbelief at how much we improved through consistent effort.",
        jumbled: ["through", "much", "a", "how", "effort.", "at", "say,", "improved", "little", "did", "we", "still", "consistent", "actually", "“We", "in", "it,”", "disbelief", "I"],
      },
      {
        target: "Walking home together, I understand now that studying isn't really about being perfect, it's about growing steadily and never giving up along the way.",
        jumbled: ["way.", "it's", "about", "I", "the", "understand", "growing", "now", "being", "along", "together,", "Walking", "about", "studying", "up", "perfect,", "home", "isn't", "steadily", "and", "that", "really", "never", "giving"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you achieved through steady effort.",
    mySentenceExample: "I improved my grades through steady effort over the whole semester.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
