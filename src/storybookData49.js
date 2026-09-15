// B1 Teens digital storybook, Book 49: "Taking a Break from Social Media"
// Static content -- no Supabase. First book in a new B1 Teens batch
// (Books 49-56) -- the first B1-level content in Story Book at all.
// Kids does not get B1 (per the user, matching the CEFR ceiling used
// elsewhere in the app -- Kids tops out at A2/B2 in the main curriculum
// but Story Book specifically stops Kids at A2). Calibrated to the CEFR
// A2-to-B1 jump documented for the main curriculum (see memory
// project_b1_level_jump_and_approach): past simple + past continuous
// together, occasional controlled past perfect, first/second
// conditionals, modals (should/must/might/have to), complex sentences
// with because/although/so/when/while, basic relative clauses, and more
// abstract teen themes (here: digital wellbeing/online identity) rather
// than purely concrete event narration. Same Teens-track shape: 3
// questions, 5 True/False, 5 Build-a-Sentence per chapter,
// shortest-to-longest, but noticeably more complex than the A2 batch.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook49/cover.jpg";

export const STORYBOOK_TITLE = "Taking a Break from Social Media";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Zoe sitting on her bedroom floor, placing her phone into a small box labeled '7 Days,' a journal and pen open beside her.";

export const CHARACTERS = [
  { name: "Zoe", role: "The narrator, a teenager", look: "Hair in a loose bun, oversized sweater, thoughtful and a little exhausted at first." },
  { name: "Priya", role: "Zoe's close friend", look: "Short curly hair, colorful scrunchies, supportive and understanding." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Too Much Scrolling",
    image: null,
    imageNote: "Zoe lying on her bed at night, her face lit only by her phone screen, a tired but tense expression as she scrolls endlessly.",
    story:
      "Lately, I've noticed that I check my phone almost constantly, even when nothing important is happening. Last night, I was scrolling through photos of a classmate's vacation when I suddenly felt strangely empty inside. Everyone online seems to be having a more exciting, more successful life than I am, or at least that's how it feels. I know comparing myself like this isn't healthy, but I can't seem to stop doing it anyway. My screen time report this week showed nearly seven hours a day, which honestly shocked me. \"Something has to change, Zoe,\" I tell myself, although I'm not entirely sure what that should look like yet.",
    questions: [
      { text: "What does Zoe notice about her phone habits lately?", answer: "She checks it almost constantly, even when nothing is happening." },
      { text: "How does Zoe feel scrolling through the vacation photos?", answer: "Strangely empty." },
      { text: "What did Zoe's screen time report show?", answer: "Nearly seven hours a day." },
    ],
    trueFalse: [
      { text: "Zoe checks her phone almost constantly.", answer: true },
      { text: "Zoe feels great after scrolling through her classmate's photos.", answer: false },
      { text: "Zoe's screen time was nearly seven hours a day.", answer: true },
      { text: "Zoe knows exactly what she needs to change.", answer: false },
      { text: "Zoe thinks comparing herself online isn't healthy.", answer: true },
    ],
    buildSentence: [
      {
        target: "Lately, I've noticed that I check my phone almost constantly, even when nothing important is happening.",
        jumbled: ["I", "my", "happening.", "that", "almost", "I've", "noticed", "Lately,", "constantly,", "important", "check", "is", "when", "even", "nothing", "phone"],
      },
      {
        target: "Last night, I was scrolling through photos of a classmate's vacation when I suddenly felt strangely empty inside.",
        jumbled: ["a", "empty", "night,", "I", "inside.", "of", "strangely", "I", "vacation", "through", "Last", "photos", "was", "when", "felt", "suddenly", "classmate's", "scrolling"],
      },
      {
        target: "Everyone online seems to be having a more exciting, more successful life than I am, or at least that's how it feels.",
        jumbled: ["than", "successful", "a", "or", "how", "more", "Everyone", "having", "feels.", "more", "be", "am,", "it", "online", "life", "I", "that's", "at", "least", "to", "exciting,", "seems"],
      },
      {
        target: "I know comparing myself like this isn't healthy, but I can't seem to stop doing it anyway.",
        jumbled: ["stop", "this", "but", "know", "it", "I", "to", "myself", "anyway.", "can't", "comparing", "doing", "healthy,", "I", "like", "seem", "isn't"],
      },
      {
        target: "\"Something has to change, Zoe,\" I tell myself, although I'm not entirely sure what that should look like yet.",
        jumbled: ["should", "has", "look", "I'm", "yet.", "that", "sure", "to", "not", "tell", "\"Something", "although", "entirely", "like", "Zoe,\"", "I", "change,", "myself,", "what"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a habit you noticed you wanted to change.",
    mySentenceExample: "I noticed I wanted to change how much time I spend online.",
  },
  {
    number: 2,
    title: "Priya's Idea",
    image: null,
    imageNote: "Zoe and Priya sitting together at a café table, Priya gesturing enthusiastically while explaining an idea, Zoe looking uncertain.",
    story:
      "The next day, I tell Priya how empty and exhausted social media has been making me feel. Instead of just sympathizing, she suggests something bold: a full week without any social media apps at all. “If you deleted the apps, Zoe, you wouldn't even be tempted to check them,” she reasons calmly. I feel a flash of panic just imagining it, since I've never gone more than a few hours without checking something. Priya, who tried something similar last year, says the first two days were the hardest by far. Although the idea terrifies me a little, part of me is genuinely curious what would happen.",
    questions: [
      { text: "What does Priya suggest to Zoe?", answer: "A full week without social media apps." },
      { text: "How does Zoe feel imagining a week without social media?", answer: "A flash of panic." },
      { text: "What does Priya say about her own experience?", answer: "That the first two days were the hardest." },
    ],
    trueFalse: [
      { text: "Priya suggests a full week without social media.", answer: true },
      { text: "Zoe feels completely calm imagining this idea.", answer: false },
      { text: "Priya has tried something similar before.", answer: true },
      { text: "Priya says the idea would be easy from day one.", answer: false },
      { text: "Zoe feels a little curious despite her fear.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next day, I tell Priya how empty and exhausted social media has been making me feel.",
        jumbled: ["Priya", "The", "feel.", "making", "I", "tell", "day,", "social", "how", "next", "and", "media", "been", "empty", "exhausted", "me", "has"],
      },
      {
        target: "Instead of just sympathizing, she suggests something bold: a full week without any social media apps at all.",
        jumbled: ["sympathizing,", "all.", "just", "any", "bold:", "week", "at", "Instead", "she", "without", "suggests", "apps", "social", "full", "media", "of", "a", "something"],
      },
      {
        target: "“If you deleted the apps, Zoe, you wouldn't even be tempted to check them,” she reasons calmly.",
        jumbled: ["the", "Zoe,", "tempted", "check", "deleted", "to", "you", "you", "even", "she", "apps,", "calmly.", "“If", "wouldn't", "them,”", "reasons", "be"],
      },
      {
        target: "I feel a flash of panic just imagining it, since I've never gone more than a few hours without checking something.",
        jumbled: ["hours", "just", "than", "few", "flash", "feel", "something.", "a", "since", "I", "a", "without", "panic", "never", "of", "it,", "more", "imagining", "I've", "checking", "gone"],
      },
      {
        target: "Priya, who tried something similar last year, says the first two days were the hardest by far.",
        jumbled: ["tried", "days", "were", "two", "far.", "year,", "who", "says", "hardest", "last", "the", "something", "the", "first", "Priya,", "by", "similar"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a bold idea a friend once suggested to you.",
    mySentenceExample: "My friend suggested a bold idea to try running a marathon together.",
  },
  {
    number: 3,
    title: "Deleting the Apps",
    image: null,
    imageNote: "Zoe's finger hovering over an app icon on her phone screen, hesitating before finally pressing delete, a determined expression on her face.",
    story:
      "That evening, I sit on my bed, staring at the apps I want to remove for the week ahead. My thumb hovers over the first icon for almost a full minute before I finally press delete. Deleting the second and third apps feels slightly easier, though my hands are still shaking a little. Once everything is gone, my home screen looks strangely empty, almost like something is missing from my life already. \"No turning back now, Zoe,\" I whisper to the empty room. I set a reminder for exactly seven days from now, when I will allow myself to reinstall everything. Whatever happens this week, I have already committed, and there's no turning back now.",
    questions: [
      { text: "What does Zoe do with the apps that evening?", answer: "Deletes them." },
      { text: "How does Zoe's home screen look afterward?", answer: "Strangely empty." },
      { text: "What does Zoe set a reminder for?", answer: "Seven days from now." },
    ],
    trueFalse: [
      { text: "Zoe deletes the apps that evening.", answer: true },
      { text: "Zoe's hands feel completely steady the whole time.", answer: false },
      { text: "Zoe's home screen looks strangely empty afterward.", answer: true },
      { text: "Zoe sets a reminder for seven days later.", answer: true },
      { text: "Zoe decides to reinstall the apps immediately.", answer: false },
    ],
    buildSentence: [
      {
        target: "That evening, I sit on my bed, staring at the apps I want to remove for the week ahead.",
        jumbled: ["want", "evening,", "bed,", "I", "I", "staring", "ahead.", "That", "my", "for", "week", "sit", "the", "the", "to", "at", "on", "apps", "remove"],
      },
      {
        target: "My thumb hovers over the first icon for almost a full minute before I finally press delete.",
        jumbled: ["hovers", "delete.", "I", "icon", "the", "for", "finally", "over", "thumb", "minute", "My", "first", "before", "almost", "press", "a", "full"],
      },
      {
        target: "My home screen looks strangely empty, almost like something is missing from my life already.",
        jumbled: ["looks", "is", "already.", "almost", "missing", "life", "My", "something", "strangely", "from", "screen", "empty,", "my", "like", "home"],
      },
      {
        target: "\"No turning back now, Zoe,\" I whisper to the empty room.",
        jumbled: ["whisper", "to", "empty", "room.", "now,", "back", "turning", "Zoe,\"", "the", "\"No", "I"],
      },
      {
        target: "I set a reminder for exactly seven days from now, when I will allow myself to reinstall everything.",
        jumbled: ["everything.", "from", "I", "seven", "to", "allow", "a", "for", "exactly", "will", "days", "myself", "I", "reinstall", "set", "when", "reminder", "now,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about committing to a difficult decision.",
    mySentenceExample: "I committed to waking up earlier even though it felt hard at first.",
  },
  {
    number: 4,
    title: "The First Uncomfortable Day",
    image: null,
    imageNote: "Zoe sitting at her desk, reaching automatically for her phone out of habit, then pausing with a frustrated expression when she remembers the apps are gone.",
    story:
      "By the next morning, I already notice how many times I reach for my phone out of pure habit. While waiting for the bus, I catch myself unlocking my phone at least six times, each time remembering there's nothing there now. The silence feels uncomfortable, almost like a constant itch I can't scratch no matter how hard I try. At lunch, I overhear friends discussing a video that went viral, and I feel a strange pang of exclusion. I had never realized how much of my social life actually depended on staying constantly updated online. \"This is only day one, Zoe,\" I remind myself. This first day feels much harder than I honestly expected it to be.",
    questions: [
      { text: "What does Zoe notice by the next morning?", answer: "How many times she reaches for her phone out of habit." },
      { text: "How many times does Zoe unlock her phone while waiting for the bus?", answer: "At least six times." },
      { text: "How does Zoe feel hearing about the viral video at lunch?", answer: "A strange pang of exclusion." },
    ],
    trueFalse: [
      { text: "Zoe reaches for her phone out of habit.", answer: true },
      { text: "Zoe unlocks her phone at least six times waiting for the bus.", answer: true },
      { text: "Zoe feels completely unaffected by the silence.", answer: false },
      { text: "Zoe feels a pang of exclusion at lunch.", answer: true },
      { text: "This first day feels easier than Zoe expected.", answer: false },
    ],
    buildSentence: [
      {
        target: "By the next morning, I already notice how many times I reach for my phone out of pure habit.",
        jumbled: ["the", "my", "how", "times", "phone", "By", "I", "out", "of", "notice", "next", "reach", "already", "habit.", "pure", "many", "for", "morning,", "I"],
      },
      {
        target: "I catch myself unlocking my phone at least six times, each time remembering there's nothing there now.",
        jumbled: ["least", "catch", "now.", "myself", "remembering", "there's", "phone", "at", "nothing", "my", "there", "six", "time", "unlocking", "times,", "I", "each"],
      },
      {
        target: "At lunch, I overhear friends discussing a video that went viral, and I feel a strange pang of exclusion.",
        jumbled: ["discussing", "pang", "video", "exclusion.", "viral,", "of", "overhear", "I", "a", "lunch,", "strange", "that", "I", "went", "feel", "a", "At", "friends", "and"],
      },
      {
        target: "I had never realized how much of my social life actually depended on staying constantly updated online.",
        jumbled: ["actually", "much", "constantly", "never", "realized", "social", "staying", "how", "depended", "had", "I", "my", "of", "on", "life", "online.", "updated"],
      },
      {
        target: "This first day feels much harder than I honestly expected it to be.",
        jumbled: ["first", "to", "be.", "This", "feels", "it", "harder", "I", "much", "expected", "day", "honestly", "than"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a habit that was harder to break than you expected.",
    mySentenceExample: "Breaking my habit of checking messages was harder than I expected.",
  },
  {
    number: 5,
    title: "Filling the Empty Time",
    image: null,
    imageNote: "Zoe sitting on her bedroom floor with an old sketchbook, drawing intently, evening sunlight coming through the window.",
    story:
      "Without endless scrolling to fill my free time, I suddenly realize how many empty hours I actually have. That evening, instead of reaching for my phone, I dig out an old sketchbook I hadn't touched in months. I sit by my window and draw for almost an hour, something I used to genuinely love doing years ago. While I was drawing, I completely forgot to check the time, which almost never happens anymore lately. It occurs to me that I had been using my phone partly to avoid boredom, but also to avoid deeper, quieter thoughts. \"Maybe you never really lost this, Zoe,\" I think, smiling faintly. Rediscovering this small hobby feels unexpectedly comforting, like reconnecting with an old friend.",
    questions: [
      { text: "What does Zoe dig out that evening?", answer: "An old sketchbook." },
      { text: "What happens to Zoe's sense of time while drawing?", answer: "She completely forgets to check it." },
      { text: "What does Zoe realize about why she used her phone?", answer: "To avoid boredom and deeper, quieter thoughts." },
    ],
    trueFalse: [
      { text: "Zoe digs out an old sketchbook that evening.", answer: true },
      { text: "Zoe checks the time constantly while drawing.", answer: false },
      { text: "Zoe realizes she used her phone to avoid quiet thoughts too.", answer: true },
      { text: "Zoe finds drawing to be a boring activity.", answer: false },
      { text: "Rediscovering this hobby feels comforting to Zoe.", answer: true },
    ],
    buildSentence: [
      {
        target: "Without endless scrolling to fill my free time, I suddenly realize how many empty hours I actually have.",
        jumbled: ["have.", "Without", "how", "hours", "scrolling", "actually", "my", "time,", "I", "endless", "I", "fill", "many", "empty", "realize", "suddenly", "to", "free"],
      },
      {
        target: "That evening, instead of reaching for my phone, I dig out an old sketchbook I hadn't touched in months.",
        jumbled: ["in", "for", "old", "phone,", "hadn't", "reaching", "touched", "an", "of", "months.", "dig", "out", "That", "I", "instead", "sketchbook", "my", "I", "evening,"],
      },
      {
        target: "I sit by my window and draw for almost an hour, something I used to genuinely love doing years ago.",
        jumbled: ["by", "doing", "draw", "used", "almost", "window", "hour,", "my", "an", "something", "to", "genuinely", "sit", "I", "for", "ago.", "years", "love", "I", "and"],
      },
      {
        target: "It occurs to me that I had been using my phone partly to avoid boredom, but also to avoid deeper, quieter thoughts.",
        jumbled: ["also", "had", "avoid", "using", "partly", "to", "It", "to", "avoid", "deeper,", "to", "been", "me", "occurs", "my", "that", "but", "quieter", "boredom,", "I", "phone", "thoughts."],
      },
      {
        target: "Rediscovering this small hobby feels unexpectedly comforting, like reconnecting with an old friend.",
        jumbled: ["Rediscovering", "comforting,", "small", "friend.", "reconnecting", "old", "unexpectedly", "feels", "hobby", "with", "this", "an", "like"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about rediscovering a hobby you had forgotten about.",
    mySentenceExample: "I rediscovered painting after not doing it for years.",
  },
  {
    number: 6,
    title: "A Moment of Temptation",
    image: null,
    imageNote: "Zoe standing in the app store on her phone, her finger hovering over the download button, a conflicted expression on her face.",
    story:
      "On day four, something stressful happens at school, and my first instinct is to post about it online. I open the app store without even thinking, my finger already hovering over the download button. I pause, remembering how I felt during that first uncomfortable day, and how proud I had been of getting through it. \"Don't throw that away, Zoe,\" I remind myself firmly. If I reinstalled the app now, all that earlier effort would basically be wasted. Instead, I text Priya directly, explaining what happened and how frustrated I feel about it. She responds within minutes, and somehow, this feels like a more genuine kind of connection anyway.",
    questions: [
      { text: "What happens at school on day four?", answer: "Something stressful." },
      { text: "What is Zoe's first instinct?", answer: "To post about it online." },
      { text: "What does Zoe do instead of reinstalling the app?", answer: "Texts Priya directly." },
    ],
    trueFalse: [
      { text: "Something stressful happens at school on day four.", answer: true },
      { text: "Zoe's first instinct is to post about it online.", answer: true },
      { text: "Zoe reinstalls the app without any hesitation.", answer: false },
      { text: "Zoe texts Priya directly instead.", answer: true },
      { text: "Zoe feels this text conversation is less genuine.", answer: false },
    ],
    buildSentence: [
      {
        target: "On day four, something stressful happens at school, and my first instinct is to post about it online.",
        jumbled: ["school,", "first", "instinct", "happens", "online.", "stressful", "it", "post", "at", "and", "my", "something", "about", "is", "to", "On", "day", "four,"],
      },
      {
        target: "I open the app store without even thinking, my finger already hovering over the download button.",
        jumbled: ["finger", "even", "app", "without", "hovering", "my", "over", "button.", "thinking,", "store", "the", "I", "the", "open", "already", "download"],
      },
      {
        target: "I pause, remembering how I felt during that first uncomfortable day, and how proud I had been of getting through it.",
        jumbled: ["I", "during", "I", "first", "that", "through", "I", "how", "had", "pause,", "uncomfortable", "day,", "proud", "remembering", "how", "it.", "been", "and", "felt", "getting", "of"],
      },
      {
        target: "All that earlier effort would basically be wasted.",
        jumbled: ["effort", "that", "basically", "be", "wasted.", "All", "would", "earlier"],
      },
      {
        target: "She responds within minutes, and somehow, this feels like a more genuine kind of connection anyway.",
        jumbled: ["feels", "connection", "responds", "She", "kind", "of", "within", "this", "genuine", "minutes,", "and", "like", "anyway.", "a", "more", "somehow,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about resisting a temptation to go back to an old habit.",
    mySentenceExample: "I resisted the temptation to skip practice when I felt tired.",
  },
  {
    number: 7,
    title: "A Real Conversation",
    image: null,
    imageNote: "Zoe and Priya sitting together on a park bench, deep in conversation, phones nowhere in sight, both looking relaxed and engaged.",
    story:
      "On day five, Priya and I meet at the park, and I notice something different about our conversation right away. Normally, we would both glance at our phones occasionally, even mid-conversation, without really meaning to. Today, neither of us has that option, so we talk uninterrupted for almost two hours straight. I tell her things I probably wouldn't have shared over text, since talking in person feels more vulnerable somehow. “I've been thinking about deleting mine too, Zoe, not just for this one week,” she admits. Walking home afterward, I realize this might be the longest real conversation we've had in months.",
    questions: [
      { text: "What does Zoe notice about their conversation today?", answer: "That they talk uninterrupted, without glancing at phones." },
      { text: "How long do they talk uninterrupted?", answer: "Almost two hours." },
      { text: "What does Priya admit she has been thinking about?", answer: "Deleting her apps permanently." },
    ],
    trueFalse: [
      { text: "Zoe and Priya meet at the park on day five.", answer: true },
      { text: "They both check their phones during the conversation.", answer: false },
      { text: "They talk uninterrupted for almost two hours.", answer: true },
      { text: "Priya admits she's considered deleting her apps permanently.", answer: true },
      { text: "Zoe feels this wasn't a particularly meaningful conversation.", answer: false },
    ],
    buildSentence: [
      {
        target: "On day five, Priya and I meet at the park, and I notice something different about our conversation right away.",
        jumbled: ["and", "something", "day", "Priya", "different", "five,", "On", "and", "the", "our", "away.", "I", "conversation", "about", "right", "meet", "I", "park,", "at", "notice"],
      },
      {
        target: "Normally, we would both glance at our phones occasionally, even mid-conversation, without really meaning to.",
        jumbled: ["glance", "would", "really", "Normally,", "phones", "to.", "both", "even", "our", "we", "mid-conversation,", "occasionally,", "without", "meaning", "at"],
      },
      {
        target: "Today, neither of us has that option, so we talk uninterrupted for almost two hours straight.",
        jumbled: ["uninterrupted", "that", "us", "straight.", "neither", "talk", "almost", "hours", "has", "so", "for", "option,", "two", "Today,", "we", "of"],
      },
      {
        target: "I tell her things I probably wouldn't have shared over text, since talking in person feels more vulnerable somehow.",
        jumbled: ["probably", "in", "text,", "tell", "shared", "person", "I", "her", "have", "talking", "over", "somehow.", "things", "vulnerable", "I", "since", "more", "wouldn't", "feels"],
      },
      {
        target: "“I've been thinking about deleting mine too, Zoe, not just for this one week,” she admits.",
        jumbled: ["too,", "one", "mine", "“I've", "deleting", "just", "for", "admits.", "about", "been", "this", "thinking", "not", "she", "week,”", "Zoe,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a meaningful conversation you had without distractions.",
    mySentenceExample: "I had a meaningful conversation with my grandmother without any distractions.",
  },
  {
    number: 8,
    title: "The Seventh Day",
    image: null,
    imageNote: "Zoe sitting on her bed, looking at her phone's app store, the reminder notification visible on the screen, a thoughtful expression on her face.",
    story:
      "The reminder finally goes off: seven days have passed, and I'm technically free to reinstall everything now. Surprisingly, I don't feel the urgent excitement I expected to feel at this exact moment. Instead, I open my journal, where I've been writing down thoughts and feelings all week instead of posting them. Reading back through my entries, I notice how much calmer and more present I have generally felt lately. If I reinstall everything exactly as before, I might slide right back into my old habits within days. \"No rush, Zoe,\" I write at the bottom of the page, and I decide to think about this decision carefully rather than rushing into anything immediately.",
    questions: [
      { text: "What happens when the reminder finally goes off?", answer: "Zoe is free to reinstall everything, but doesn't feel urgent excitement." },
      { text: "How does Zoe feel compared to what she expected?", answer: "Calmer, not eager to reinstall." },
      { text: "What does Zoe decide to do about reinstalling everything?", answer: "Think about it carefully rather than rushing." },
    ],
    trueFalse: [
      { text: "The reminder goes off after seven days.", answer: true },
      { text: "Zoe feels intense excitement to reinstall everything immediately.", answer: false },
      { text: "Zoe has been writing in a journal all week.", answer: true },
      { text: "Zoe feels calmer and more present lately.", answer: true },
      { text: "Zoe decides to rush the decision immediately.", answer: false },
    ],
    buildSentence: [
      {
        target: "The reminder finally goes off: seven days have passed, and I'm technically free to reinstall everything now.",
        jumbled: ["now.", "passed,", "to", "and", "reinstall", "goes", "off:", "The", "seven", "technically", "reminder", "finally", "I'm", "have", "days", "everything", "free"],
      },
      {
        target: "Surprisingly, I don't feel the urgent excitement I expected to feel at this exact moment.",
        jumbled: ["Surprisingly,", "moment.", "I", "expected", "I", "feel", "excitement", "this", "urgent", "exact", "the", "to", "don't", "at", "feel"],
      },
      {
        target: "Instead, I open my journal, where I've been writing down thoughts and feelings all week instead of posting them.",
        jumbled: ["I", "writing", "posting", "instead", "week", "down", "and", "them.", "all", "thoughts", "open", "been", "I've", "where", "of", "feelings", "my", "Instead,", "journal,"],
      },
      {
        target: "Reading back through my entries, I notice how much calmer and more present I have generally felt lately.",
        jumbled: ["how", "my", "Reading", "calmer", "lately.", "entries,", "I", "present", "generally", "notice", "I", "back", "felt", "more", "through", "and", "have", "much"],
      },
      {
        target: "\"No rush, Zoe,\" I write at the bottom of the page, and I decide to think about this decision carefully rather than rushing into anything immediately.",
        jumbled: ["I", "immediately.", "rushing", "write", "about", "carefully", "to", "this", "into", "I", "the", "page,", "of", "and", "than", "think", "anything", "rush,", "\"No", "decide", "rather", "bottom", "decision", "Zoe,\"", "the", "at"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reaching a goal and reflecting on what you learned.",
    mySentenceExample: "Reaching my goal taught me that I am stronger than I thought.",
  },
  {
    number: 9,
    title: "Finding a New Balance",
    image: null,
    imageNote: "Zoe reinstalling one app on her phone while turning off notifications in the settings menu, a calm and deliberate expression on her face.",
    story:
      "After thinking it over for two more days, I decide on a middle ground instead of an all-or-nothing choice. I reinstall only one app, the one I actually use to stay connected with distant relatives, nothing else. I also turn off all notifications, so checking the app becomes a conscious choice rather than an automatic reflex. \"This is your choice now, Zoe,\" I think. If a notification isn't controlling my attention constantly, I feel like I'm the one actually in charge now. Priya, impressed by this compromise, decides to try something similar with her own accounts. This new approach feels more sustainable than either extreme, whether that's constant scrolling or complete avoidance.",
    questions: [
      { text: "What decision does Zoe make after two more days?", answer: "A middle ground -- reinstalling only one app." },
      { text: "Which app does Zoe reinstall?", answer: "The one she uses to stay connected with distant relatives." },
      { text: "What does Zoe do with her notifications?", answer: "Turns them all off." },
    ],
    trueFalse: [
      { text: "Zoe decides on a middle ground compromise.", answer: true },
      { text: "Zoe reinstalls every single app she had before.", answer: false },
      { text: "Zoe turns off all her notifications.", answer: true },
      { text: "Priya decides to try something similar too.", answer: true },
      { text: "Zoe feels this new approach is unsustainable.", answer: false },
    ],
    buildSentence: [
      {
        target: "I decide on a middle ground instead of an all-or-nothing choice.",
        jumbled: ["choice.", "instead", "an", "ground", "I", "a", "decide", "of", "on", "all-or-nothing", "middle"],
      },
      {
        target: "I reinstall only one app, the one I actually use to stay connected with distant relatives, nothing else.",
        jumbled: ["reinstall", "the", "else.", "only", "I", "stay", "with", "one", "distant", "app,", "I", "one", "use", "to", "actually", "relatives,", "nothing", "connected"],
      },
      {
        target: "I also turn off all notifications, so checking the app becomes a conscious choice rather than an automatic reflex.",
        jumbled: ["I", "an", "so", "turn", "reflex.", "becomes", "notifications,", "a", "conscious", "off", "also", "the", "all", "rather", "than", "choice", "checking", "automatic", "app"],
      },
      {
        target: "I feel like I'm the one actually in charge now.",
        jumbled: ["like", "actually", "I", "the", "I'm", "now.", "charge", "in", "feel", "one"],
      },
      {
        target: "This new approach feels more sustainable than either extreme, whether that's constant scrolling or complete avoidance.",
        jumbled: ["or", "scrolling", "that's", "extreme,", "than", "more", "This", "either", "constant", "avoidance.", "sustainable", "complete", "feels", "new", "approach", "whether"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finding a balanced approach to something in your life.",
    mySentenceExample: "I found a balanced approach to studying and relaxing during exams.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Zoe sitting at her desk, writing in her journal one final entry, her phone resting face-down beside her, a peaceful expression on her face.",
    story:
      "A month later, I look back at that first uncomfortable day and barely recognize how anxious I felt then. My screen time has dropped significantly, not because I forced it, but because I genuinely don't need it as much anymore. I still draw regularly now, something I almost gave up entirely before this whole experiment began. Whenever I feel that familiar urge to compare myself to others online, I remember how empty that feeling actually was. Priya and I meet in person far more often now, having real conversations instead of just liking each other's posts. \"You needed that, Zoe,\" I think sometimes, smiling to myself. Taking that break taught me that stepping back sometimes helps you see yourself more clearly.",
    questions: [
      { text: "How does Zoe's screen time compare to before?", answer: "It has dropped significantly." },
      { text: "What does Zoe still do regularly now?", answer: "Draw." },
      { text: "What did taking the break teach Zoe?", answer: "That stepping back sometimes helps you see yourself more clearly." },
    ],
    trueFalse: [
      { text: "Zoe's screen time has dropped significantly.", answer: true },
      { text: "Zoe gave up drawing again after the experiment.", answer: false },
      { text: "Zoe and Priya meet in person more often now.", answer: true },
      { text: "Zoe still compares herself constantly to others online.", answer: false },
      { text: "Zoe learned that stepping back helps her see herself clearly.", answer: true },
    ],
    buildSentence: [
      {
        target: "A month later, I look back at that first uncomfortable day and barely recognize how anxious I felt then.",
        jumbled: ["A", "day", "felt", "look", "at", "recognize", "month", "I", "and", "back", "then.", "first", "later,", "that", "I", "how", "uncomfortable", "barely", "anxious"],
      },
      {
        target: "My screen time has dropped significantly, not because I forced it, but because I genuinely don't need it as much anymore.",
        jumbled: ["My", "because", "screen", "it", "it,", "not", "I", "has", "but", "significantly,", "need", "as", "anymore.", "much", "forced", "I", "dropped", "don't", "time", "genuinely", "because"],
      },
      {
        target: "I remember how empty that feeling actually was.",
        jumbled: ["empty", "feeling", "how", "I", "remember", "actually", "that", "was."],
      },
      {
        target: "Priya and I meet in person far more often now, having real conversations instead of just liking each other's posts.",
        jumbled: ["I", "Priya", "conversations", "each", "posts.", "other's", "more", "now,", "in", "real", "liking", "instead", "just", "person", "far", "having", "and", "meet", "often", "of"],
      },
      {
        target: "Taking that break taught me that stepping back sometimes helps you see yourself more clearly.",
        jumbled: ["stepping", "break", "that", "sometimes", "that", "helps", "you", "Taking", "back", "more", "yourself", "see", "me", "clearly.", "taught"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something a break or pause taught you about yourself.",
    mySentenceExample: "Taking a break from studying taught me that I needed more rest.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
