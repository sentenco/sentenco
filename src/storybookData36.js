// A2 Teens digital storybook, Book 36: "The School Newspaper"
// Static content -- no Supabase. Sixth book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook36/cover.jpg";

export const STORYBOOK_TITLE = "The School Newspaper";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Caleb sitting at a cluttered newspaper office desk, typing intently on a laptop surrounded by notebooks and a printed newspaper, Iris reading over his shoulder.";

export const CHARACTERS = [
  { name: "Caleb", role: "The narrator, a teenager", look: "Messy hair, flannel shirt, curious and determined once he finds a real story." },
  { name: "Ms. Rivera", role: "The newspaper's faculty editor", look: "Cardigan, red editing pen always in hand, cautious but fair." },
  { name: "Iris", role: "Caleb's fellow reporter", look: "Short curly hair, notebook always in her back pocket, sharp and encouraging." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Joining the Newspaper",
    image: null,
    imageNote: "Caleb standing eagerly in the cramped school newspaper office, holding a pen and notepad, Ms. Rivera welcoming him at a cluttered desk.",
    story:
      "After reading every issue of our school newspaper obsessively for two years, I finally work up the courage to join the staff myself. Ms. Rivera welcomes me warmly into the cramped, cluttered office, explaining that new reporters usually start with smaller, simpler assignments before earning bigger stories. I nod eagerly, imagining myself uncovering something important and meaningful for the whole school to read about. “Everyone starts somewhere, Caleb,” she says, handing me a small stack of upcoming events to write about. Walking out with my very first assignment, I feel a genuine thrill about officially becoming part of something real.",
    questions: [
      { text: "Why does Caleb decide to join the newspaper?", answer: "He's read every issue obsessively for two years." },
      { text: "What does Ms. Rivera explain to new reporters?", answer: "That they usually start with smaller assignments." },
      { text: "How does Caleb feel with his first assignment?", answer: "A genuine thrill." },
    ],
    trueFalse: [
      { text: "Caleb has read the newspaper for two years.", answer: true },
      { text: "Ms. Rivera says new reporters start with big stories immediately.", answer: false },
      { text: "Ms. Rivera hands Caleb upcoming events to write about.", answer: true },
      { text: "Caleb feels nothing special about his first assignment.", answer: false },
      { text: "The newspaper office is described as cramped and cluttered.", answer: true },
    ],
    buildSentence: [
      {
        target: "I finally work up the courage to join the staff myself.",
        jumbled: ["join", "the", "to", "finally", "the", "work", "staff", "courage", "up", "myself.", "I"],
      },
      {
        target: "Ms. Rivera welcomes me warmly into the cramped, cluttered office, explaining that new reporters usually start with smaller, simpler assignments before earning bigger stories.",
        jumbled: ["assignments", "earning", "welcomes", "Rivera", "with", "usually", "that", "smaller,", "cramped,", "cluttered", "bigger", "Ms.", "simpler", "office,", "new", "into", "the", "reporters", "stories.", "explaining", "start", "me", "warmly", "before"],
      },
      {
        target: "I nod eagerly, imagining myself uncovering something important and meaningful for the whole school to read about.",
        jumbled: ["and", "important", "whole", "to", "myself", "for", "the", "about.", "uncovering", "I", "imagining", "meaningful", "read", "eagerly,", "nod", "something", "school"],
      },
      {
        target: "“Everyone starts somewhere, Caleb,” she says, handing me a small stack of upcoming events to write about.",
        jumbled: ["she", "a", "of", "Caleb,”", "about.", "upcoming", "events", "to", "me", "somewhere,", "handing", "“Everyone", "starts", "says,", "write", "small", "stack"],
      },
      {
        target: "Walking out with my very first assignment, I feel a genuine thrill about officially becoming part of something real.",
        jumbled: ["becoming", "about", "genuine", "feel", "assignment,", "something", "of", "part", "Walking", "my", "real.", "officially", "with", "very", "first", "out", "I", "thrill", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about joining a club or activity you were curious about.",
    mySentenceExample: "I joined the art club because I was curious about painting.",
  },
  {
    number: 2,
    title: "The First Assignment",
    image: null,
    imageNote: "Caleb sitting at a lunch table, disappointedly reviewing his notes about the school cafeteria menu change, students eating around him.",
    story:
      "My first assignment turns out to be reporting on a small change to the cafeteria menu, hardly the exciting investigative journalism I had imagined joining for. I interview the cafeteria manager, jot down uninspiring quotes about nutritional guidelines, and struggle to make three hundred words feel remotely interesting. Iris, another reporter who sits near me, notices my obvious disappointment and laughs sympathetically. “We all start with menu changes and lost-and-found updates, Caleb,” she admits, sharing her own embarrassing first article about a broken water fountain. Somehow, knowing everyone begins this way makes the assignment feel slightly less discouraging.",
    questions: [
      { text: "What is Caleb's first assignment about?", answer: "A small change to the cafeteria menu." },
      { text: "Who does Caleb interview?", answer: "The cafeteria manager." },
      { text: "What does Iris admit about her own first article?", answer: "That it was about a broken water fountain." },
    ],
    trueFalse: [
      { text: "Caleb's first assignment is about a menu change.", answer: true },
      { text: "Caleb finds this assignment thrilling and exciting.", answer: false },
      { text: "Iris shares her own embarrassing first article.", answer: true },
      { text: "Iris's first article was about a broken water fountain.", answer: true },
      { text: "Caleb feels more discouraged after talking to Iris.", answer: false },
    ],
    buildSentence: [
      {
        target: "My first assignment turns out to be reporting on a small change to the cafeteria menu, hardly the exciting investigative journalism I had imagined joining for.",
        jumbled: ["had", "a", "My", "journalism", "for.", "hardly", "first", "cafeteria", "to", "investigative", "turns", "assignment", "imagined", "joining", "on", "exciting", "to", "be", "reporting", "the", "change", "out", "the", "small", "I", "menu,"],
      },
      {
        target: "I interview the cafeteria manager, jot down uninspiring quotes about nutritional guidelines, and struggle to make three hundred words feel remotely interesting.",
        jumbled: ["remotely", "manager,", "down", "hundred", "words", "interesting.", "and", "cafeteria", "to", "three", "I", "interview", "guidelines,", "feel", "struggle", "nutritional", "make", "jot", "quotes", "the", "about", "uninspiring"],
      },
      {
        target: "Iris, another reporter who sits near me, notices my obvious disappointment and laughs sympathetically.",
        jumbled: ["me,", "sympathetically.", "and", "Iris,", "disappointment", "obvious", "near", "sits", "my", "notices", "laughs", "reporter", "another", "who"],
      },
      {
        target: "“We all start with menu changes and lost-and-found updates, Caleb,” she admits, sharing her own embarrassing first article about a broken water fountain.",
        jumbled: ["embarrassing", "about", "with", "water", "lost-and-found", "menu", "admits,", "changes", "start", "first", "and", "updates,", "Caleb,”", "article", "broken", "“We", "all", "own", "her", "sharing", "she", "a", "fountain."],
      },
      {
        target: "Somehow, knowing everyone begins this way makes the assignment feel slightly less discouraging.",
        jumbled: ["discouraging.", "makes", "knowing", "less", "slightly", "everyone", "this", "the", "feel", "Somehow,", "way", "assignment", "begins"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a boring task that turned out okay once you started.",
    mySentenceExample: "Cleaning my room felt boring but turned out okay once I started.",
  },
  {
    number: 3,
    title: "A Bigger Story",
    image: null,
    imageNote: "Caleb overhearing two teachers whispering worriedly in the hallway about budget cuts, standing frozen with his notebook clutched to his chest.",
    story:
      "While walking through the hallway one afternoon, I overhear two teachers discussing the school's budget in hushed, worried tones near the art room. Something about “cutting the art program” catches my attention immediately, and I slow my pace, straining to hear more details without seeming obvious. This sounds like something students would genuinely want to know about, unlike menu changes or lost umbrellas. My heart races with unexpected excitement as I realize I might have accidentally stumbled onto real, meaningful news. “This is it, Caleb,” I tell myself, deciding right there in the hallway that I need to investigate this story properly, whatever it takes.",
    questions: [
      { text: "What does Caleb overhear teachers discussing?", answer: "Cutting the art program." },
      { text: "How does this compare to his previous stories?", answer: "It's something students would genuinely want to know about." },
      { text: "What does Caleb decide to do?", answer: "Investigate the story properly." },
    ],
    trueFalse: [
      { text: "Caleb overhears teachers discussing budget cuts.", answer: true },
      { text: "The teachers mention cutting the art program.", answer: true },
      { text: "Caleb feels bored hearing this news.", answer: false },
      { text: "Caleb decides to investigate the story.", answer: true },
      { text: "Caleb ignores what he overhears completely.", answer: false },
    ],
    buildSentence: [
      {
        target: "I overhear two teachers discussing the school's budget in hushed, worried tones near the art room.",
        jumbled: ["overhear", "room.", "two", "the", "art", "worried", "tones", "discussing", "school's", "budget", "the", "in", "I", "teachers", "near", "hushed,"],
      },
      {
        target: "Something about “cutting the art program” catches my attention immediately, and I slow my pace, straining to hear more details without seeming obvious.",
        jumbled: ["art", "immediately,", "about", "attention", "straining", "and", "pace,", "without", "I", "more", "seeming", "to", "“cutting", "slow", "obvious.", "the", "my", "details", "hear", "catches", "program”", "Something", "my"],
      },
      {
        target: "This sounds like something students would genuinely want to know about, unlike menu changes or lost umbrellas.",
        jumbled: ["want", "about,", "something", "know", "or", "to", "like", "sounds", "changes", "menu", "umbrellas.", "students", "would", "genuinely", "unlike", "This", "lost"],
      },
      {
        target: "My heart races with unexpected excitement as I realize I might have accidentally stumbled onto real, meaningful news.",
        jumbled: ["races", "unexpected", "stumbled", "with", "real,", "might", "excitement", "accidentally", "I", "meaningful", "My", "I", "onto", "news.", "have", "heart", "realize", "as"],
      },
      {
        target: "“This is it, Caleb,” I tell myself, deciding right there in the hallway that I need to investigate this story properly, whatever it takes.",
        jumbled: ["it,", "I", "myself,", "takes.", "Caleb,”", "story", "“This", "need", "properly,", "I", "is", "to", "deciding", "hallway", "that", "this", "right", "it", "whatever", "investigate", "the", "in", "tell", "there"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about accidentally learning something important.",
    mySentenceExample: "I accidentally learned something important overhearing a conversation at school.",
  },
  {
    number: 4,
    title: "Asking Questions",
    image: null,
    imageNote: "Caleb holding a notebook and interviewing an art teacher in a colorful classroom filled with student paintings, both talking seriously.",
    story:
      "I start by visiting the art room directly, asking Mr. Foster, the art teacher, whether the rumors about budget cuts hold any truth. “There's truth to it, Caleb, but nothing official yet,” he confirms cautiously, noting that funding discussions are indeed happening, though nothing has been decided yet by the administration. Next, I interview several students in the hallway, discovering that many genuinely care about keeping the art program running for future classes. Taking careful notes, I realize this story involves real people with real concerns, unlike my previous, forgettable assignments. Gathering these different perspectives feels like actual journalism, exactly what originally drew me toward joining the newspaper.",
    questions: [
      { text: "Who does Caleb interview first?", answer: "Mr. Foster, the art teacher." },
      { text: "What does Mr. Foster confirm?", answer: "That funding discussions are happening, though nothing is decided." },
      { text: "What does Caleb discover from interviewing students?", answer: "That many genuinely care about keeping the art program." },
    ],
    trueFalse: [
      { text: "Caleb interviews Mr. Foster, the art teacher.", answer: true },
      { text: "Mr. Foster says nothing official has been decided yet.", answer: true },
      { text: "No students care about the art program at all.", answer: false },
      { text: "Caleb interviews several students in the hallway.", answer: true },
      { text: "Caleb feels this story is just like his old assignments.", answer: false },
    ],
    buildSentence: [
      {
        target: "I start by visiting the art room directly, asking Mr. Foster, the art teacher, whether the rumors about budget cuts hold any truth.",
        jumbled: ["about", "art", "hold", "I", "the", "by", "rumors", "directly,", "room", "visiting", "whether", "truth.", "any", "cuts", "art", "asking", "budget", "Foster,", "start", "the", "the", "Mr.", "teacher,"],
      },
      {
        target: "“There's truth to it, Caleb, but nothing official yet,” he confirms cautiously, noting that funding discussions are indeed happening, though nothing has been decided yet by the administration.",
        jumbled: ["yet,”", "“There's", "to", "cautiously,", "that", "has", "it,", "funding", "official", "nothing", "yet", "administration.", "happening,", "but", "by", "though", "noting", "decided", "been", "Caleb,", "confirms", "the", "nothing", "indeed", "discussions", "are", "truth", "he"],
      },
      {
        target: "Next, I interview several students in the hallway, discovering that many genuinely care about keeping the art program running for future classes.",
        jumbled: ["the", "in", "about", "program", "that", "for", "keeping", "discovering", "genuinely", "interview", "classes.", "care", "art", "I", "future", "Next,", "hallway,", "many", "the", "running", "several", "students"],
      },
      {
        target: "Taking careful notes, I realize this story involves real people with real concerns, unlike my previous, forgettable assignments.",
        jumbled: ["real", "story", "with", "previous,", "realize", "my", "involves", "assignments.", "I", "concerns,", "people", "real", "notes,", "careful", "unlike", "this", "Taking", "forgettable"],
      },
      {
        target: "Gathering these different perspectives feels like actual journalism, exactly what originally drew me toward joining the newspaper.",
        jumbled: ["perspectives", "what", "exactly", "the", "feels", "newspaper.", "drew", "like", "joining", "originally", "different", "actual", "these", "Gathering", "journalism,", "me", "toward"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about interviewing or asking someone important questions.",
    mySentenceExample: "I interviewed my grandfather about his life for a school project.",
  },
  {
    number: 5,
    title: "Ms. Rivera's Doubt",
    image: null,
    imageNote: "Ms. Rivera sitting at her desk, reading Caleb's pitch with a concerned expression, Caleb standing nervously waiting for her response.",
    story:
      "Excited about my findings, I bring my story pitch to Ms. Rivera, expecting immediate enthusiastic approval for such an important topic. Instead, she reads it slowly, her expression thoughtful rather than immediately encouraging, which honestly surprises and worries me a little. “This is a serious, sensitive story, Caleb. Are you prepared to handle it responsibly?” she asks carefully, not doubting my ability exactly, but emphasizing genuine journalistic responsibility. I assure her I understand the importance of accuracy and fairness, especially regarding something affecting real students and teachers. After a long pause, she finally nods, agreeing cautiously to let me pursue it under her guidance.",
    questions: [
      { text: "How does Ms. Rivera react to Caleb's pitch?", answer: "Thoughtfully, not immediately enthusiastic." },
      { text: "What does Ms. Rivera ask Caleb?", answer: "If he's prepared to handle it responsibly." },
      { text: "What does Caleb assure her?", answer: "That he understands the importance of accuracy and fairness." },
    ],
    trueFalse: [
      { text: "Ms. Rivera immediately approves with pure enthusiasm.", answer: false },
      { text: "Ms. Rivera reads the pitch slowly and thoughtfully.", answer: true },
      { text: "Ms. Rivera asks if Caleb is prepared to handle it responsibly.", answer: true },
      { text: "Caleb refuses to promise accuracy or fairness.", answer: false },
      { text: "Ms. Rivera eventually agrees to let him pursue it.", answer: true },
    ],
    buildSentence: [
      {
        target: "Excited about my findings, I bring my story pitch to Ms. Rivera, expecting immediate enthusiastic approval for such an important topic.",
        jumbled: ["immediate", "story", "my", "important", "about", "Ms.", "such", "Rivera,", "for", "pitch", "I", "findings,", "Excited", "bring", "to", "my", "topic.", "expecting", "enthusiastic", "an", "approval"],
      },
      {
        target: "Instead, she reads it slowly, her expression thoughtful rather than immediately encouraging, which honestly surprises and worries me a little.",
        jumbled: ["slowly,", "worries", "encouraging,", "and", "immediately", "she", "a", "Instead,", "her", "thoughtful", "reads", "which", "rather", "honestly", "little.", "surprises", "than", "expression", "me", "it"],
      },
      {
        target: "“This is a serious, sensitive story, Caleb. Are you prepared to handle it responsibly?” she asks carefully, not doubting my ability exactly, but emphasizing genuine journalistic responsibility.",
        jumbled: ["serious,", "exactly,", "genuine", "story,", "is", "a", "to", "carefully,", "Caleb.", "you", "not", "my", "asks", "“This", "ability", "Are", "handle", "sensitive", "journalistic", "responsibility.", "she", "emphasizing", "but", "responsibly?”", "it", "doubting", "prepared"],
      },
      {
        target: "I assure her I understand the importance of accuracy and fairness, especially regarding something affecting real students and teachers.",
        jumbled: ["her", "understand", "affecting", "real", "and", "I", "regarding", "and", "I", "importance", "students", "especially", "assure", "the", "something", "teachers.", "accuracy", "of", "fairness,"],
      },
      {
        target: "She finally nods, agreeing cautiously to let me pursue it under her guidance.",
        jumbled: ["under", "guidance.", "pursue", "to", "She", "me", "agreeing", "cautiously", "her", "let", "finally", "it", "nods,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being trusted with a serious responsibility.",
    mySentenceExample: "I was trusted with a serious responsibility when I watched my younger cousin alone.",
  },
  {
    number: 6,
    title: "Digging Deeper",
    image: null,
    imageNote: "Caleb and Iris sitting together at a shared desk, comparing interview notes and highlighting important quotes, papers spread everywhere.",
    story:
      "With official permission secured, Iris offers to help me dig deeper, and together we schedule an interview with the school principal directly. We prepare thoughtful, specific questions beforehand, wanting to understand the actual financial reasoning rather than relying only on hallway rumors. Iris teaches me how to structure genuinely useful interview questions, avoiding anything that sounds accusatory or one-sided unfairly. “Good journalism asks hard questions respectfully, Caleb,” she explains, reviewing my draft questions with her sharp editing eye. By the time our interview is scheduled for Thursday, I feel far more prepared and considerably less nervous than I expected to feel.",
    questions: [
      { text: "Who offers to help Caleb dig deeper?", answer: "Iris." },
      { text: "Who do they schedule an interview with?", answer: "The school principal." },
      { text: "What does Iris teach Caleb?", answer: "How to structure fair, non-accusatory interview questions." },
    ],
    trueFalse: [
      { text: "Iris offers to help Caleb dig deeper.", answer: true },
      { text: "They schedule an interview with the principal.", answer: true },
      { text: "Iris says good journalism avoids hard questions.", answer: false },
      { text: "Caleb feels less prepared after Iris's help.", answer: false },
      { text: "The interview is scheduled for Thursday.", answer: true },
    ],
    buildSentence: [
      {
        target: "With official permission secured, Iris offers to help me dig deeper, and together we schedule an interview with the school principal directly.",
        jumbled: ["together", "schedule", "directly.", "offers", "we", "me", "with", "official", "secured,", "help", "the", "interview", "an", "dig", "With", "permission", "school", "and", "to", "deeper,", "principal", "Iris"],
      },
      {
        target: "We prepare thoughtful, specific questions beforehand, wanting to understand the actual financial reasoning rather than relying only on hallway rumors.",
        jumbled: ["the", "on", "beforehand,", "We", "to", "questions", "reasoning", "only", "prepare", "relying", "hallway", "rather", "thoughtful,", "than", "rumors.", "actual", "specific", "understand", "financial", "wanting"],
      },
      {
        target: "Iris teaches me how to structure genuinely useful interview questions, avoiding anything that sounds accusatory or one-sided unfairly.",
        jumbled: ["how", "questions,", "interview", "accusatory", "Iris", "avoiding", "genuinely", "anything", "to", "teaches", "useful", "or", "me", "unfairly.", "that", "sounds", "structure", "one-sided"],
      },
      {
        target: "“Good journalism asks hard questions respectfully, Caleb,” she explains, reviewing my draft questions with her sharp editing eye.",
        jumbled: ["sharp", "questions", "“Good", "with", "her", "respectfully,", "asks", "questions", "my", "reviewing", "Caleb,”", "draft", "eye.", "hard", "she", "editing", "journalism", "explains,"],
      },
      {
        target: "By the time our interview is scheduled for Thursday, I feel far more prepared and considerably less nervous than I expected to feel.",
        jumbled: ["is", "time", "considerably", "interview", "far", "and", "to", "feel", "By", "I", "scheduled", "for", "nervous", "feel.", "more", "expected", "our", "prepared", "the", "less", "I", "than", "Thursday,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about preparing carefully for something important.",
    mySentenceExample: "I prepared carefully for my job interview by practicing common questions.",
  },
  {
    number: 7,
    title: "Writing the Draft",
    image: null,
    imageNote: "Caleb typing intently at a laptop late at night in his bedroom, crumpled paper drafts scattered around him, a cup of tea nearby.",
    story:
      "Armed with quotes from teachers, students, and the principal, I finally sit down to write the actual article, feeling the weight of responsibility more than ever. Balancing every perspective fairly proves harder than I expected, since I genuinely want to represent everyone's concerns without appearing biased toward any particular side. I rewrite my opening paragraph four separate times, searching for a tone that feels serious without becoming overly dramatic or sensational. “Keep going, Caleb,” I mutter, and late into the evening, surrounded by crumpled paper and empty tea cups, I finally produce a draft that feels honest, balanced, and genuinely worth submitting to Ms. Rivera for review.",
    questions: [
      { text: "What does Caleb finally sit down to do?", answer: "Write the actual article." },
      { text: "What does Caleb find harder than expected?", answer: "Balancing every perspective fairly." },
      { text: "How many times does Caleb rewrite his opening paragraph?", answer: "Four times." },
    ],
    trueFalse: [
      { text: "Caleb sits down to write the actual article.", answer: true },
      { text: "Balancing every perspective proves easier than expected.", answer: false },
      { text: "Caleb rewrites his opening paragraph four times.", answer: true },
      { text: "Caleb finishes quickly without much effort.", answer: false },
      { text: "Caleb feels the draft is honest and balanced.", answer: true },
    ],
    buildSentence: [
      {
        target: "Armed with quotes from teachers, students, and the principal, I finally sit down to write the actual article, feeling the weight of responsibility more than ever.",
        jumbled: ["more", "students,", "the", "the", "responsibility", "quotes", "down", "I", "teachers,", "Armed", "finally", "ever.", "than", "the", "from", "to", "and", "weight", "with", "actual", "write", "article,", "sit", "feeling", "of", "principal,"],
      },
      {
        target: "Balancing every perspective fairly proves harder than I expected, since I genuinely want to represent everyone's concerns without appearing biased toward any particular side.",
        jumbled: ["to", "every", "expected,", "perspective", "represent", "without", "than", "everyone's", "any", "toward", "Balancing", "I", "I", "want", "concerns", "particular", "proves", "appearing", "since", "fairly", "genuinely", "harder", "side.", "biased"],
      },
      {
        target: "I rewrite my opening paragraph four separate times, searching for a tone that feels serious without becoming overly dramatic or sensational.",
        jumbled: ["that", "without", "dramatic", "times,", "serious", "separate", "overly", "for", "sensational.", "feels", "four", "opening", "rewrite", "I", "my", "a", "searching", "tone", "becoming", "or", "paragraph"],
      },
      {
        target: "“Keep going, Caleb,” I mutter, and late into the evening, surrounded by crumpled paper and empty tea cups, I finally produce a draft that feels honest, balanced, and genuinely worth submitting to Ms. Rivera for review.",
        jumbled: ["empty", "into", "draft", "a", "paper", "that", "worth", "and", "genuinely", "review.", "the", "Caleb,”", "surrounded", "tea", "I", "by", "produce", "Ms.", "evening,", "honest,", "“Keep", "feels", "to", "crumpled", "I", "Rivera", "and", "cups,", "submitting", "late", "and", "for", "mutter,", "going,", "balanced,", "finally"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about revising something many times to get it right.",
    mySentenceExample: "I revised my essay many times to make it clear and correct.",
  },
  {
    number: 8,
    title: "A Nervous Edit",
    image: null,
    imageNote: "Ms. Rivera sitting across from Caleb, marking up his printed draft with red pen while he watches nervously, both leaning over the paper.",
    story:
      "Ms. Rivera reads my draft slowly the next day, her red pen moving steadily across the paper while I sit nearby trying not to fidget nervously. “This part needs a source, Caleb,” she notes at one point, and “this sentence sounds like your opinion, not fact,” at another. Though her feedback stings slightly, I recognize she's genuinely helping me become more precise and credible as a reporter. We spend nearly an hour revising sentences together, cutting anything unnecessary and strengthening weaker, unclear arguments throughout the article. By the end, my article looks noticeably different, but undeniably stronger and more professionally polished than my original draft.",
    questions: [
      { text: "What does Ms. Rivera do with her red pen?", answer: "Marks up his draft." },
      { text: "What kind of feedback does she give?", answer: "That parts need sources and some sentences sound like opinion, not fact." },
      { text: "How does Caleb feel about her feedback?", answer: "It stings, but he recognizes it's helping him." },
    ],
    trueFalse: [
      { text: "Ms. Rivera marks up the draft with a red pen.", answer: true },
      { text: "Ms. Rivera says one sentence sounds like opinion, not fact.", answer: true },
      { text: "Caleb ignores all of Ms. Rivera's feedback.", answer: false },
      { text: "They spend nearly an hour revising together.", answer: true },
      { text: "The final article looks weaker than the original draft.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Rivera reads my draft slowly the next day, her red pen moving steadily across the paper while I sit nearby trying not to fidget nervously.",
        jumbled: ["to", "pen", "the", "while", "nervously.", "reads", "next", "fidget", "my", "Rivera", "trying", "draft", "paper", "the", "I", "Ms.", "day,", "nearby", "moving", "slowly", "her", "red", "across", "sit", "not", "steadily"],
      },
      {
        target: "“This part needs a source, Caleb,” she notes at one point, and “this sentence sounds like your opinion, not fact,” at another.",
        jumbled: ["“This", "Caleb,”", "like", "not", "source,", "fact,”", "at", "“this", "a", "sentence", "another.", "your", "and", "at", "sounds", "part", "needs", "opinion,", "one", "notes", "point,", "she"],
      },
      {
        target: "I recognize she's genuinely helping me become more precise and credible as a reporter.",
        jumbled: ["and", "become", "helping", "as", "she's", "credible", "recognize", "more", "I", "reporter.", "genuinely", "a", "precise", "me"],
      },
      {
        target: "We spend nearly an hour revising sentences together, cutting anything unnecessary and strengthening weaker, unclear arguments throughout the article.",
        jumbled: ["spend", "We", "strengthening", "revising", "and", "arguments", "unclear", "hour", "unnecessary", "the", "anything", "an", "together,", "throughout", "article.", "nearly", "sentences", "cutting", "weaker,"],
      },
      {
        target: "By the end, my article looks noticeably different, but undeniably stronger and more professionally polished than my original draft.",
        jumbled: ["professionally", "and", "original", "than", "noticeably", "draft.", "different,", "By", "article", "my", "the", "my", "end,", "looks", "polished", "stronger", "undeniably", "more", "but"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about receiving helpful feedback that improved your work.",
    mySentenceExample: "My teacher gave helpful feedback that improved my essay a lot.",
  },
  {
    number: 9,
    title: "Publication Day",
    image: null,
    imageNote: "Caleb standing by the school entrance watching students pick up copies of the newspaper, his byline visible on the front page.",
    story:
      "On publication day, I arrive early to watch students grab copies of the newspaper from the stack near the main entrance, my stomach fluttering nervously. Seeing my name printed as the byline above the article feels surreal, something I have imagined for two entire years finally becoming real. Throughout the day, classmates approach me with genuine questions and opinions about the art program, several thanking me directly for investigating something they actually cared about. “Thanks for writing this, Caleb,” one classmate says with a grin. Even a couple of skeptical teachers stop me in the hallway, acknowledging the article felt fair and well-researched despite the sensitive topic. This response feels better than any grade I have ever received.",
    questions: [
      { text: "What does Caleb watch students do?", answer: "Grab copies of the newspaper." },
      { text: "How does Caleb feel seeing his byline?", answer: "Surreal." },
      { text: "How do classmates react throughout the day?", answer: "They thank him for investigating something they cared about." },
    ],
    trueFalse: [
      { text: "Caleb watches students grab newspaper copies.", answer: true },
      { text: "Caleb feels nothing seeing his byline printed.", answer: false },
      { text: "Classmates approach him with questions and opinions.", answer: true },
      { text: "Every teacher criticizes the article harshly.", answer: false },
      { text: "This response feels better than any grade to Caleb.", answer: true },
    ],
    buildSentence: [
      {
        target: "On publication day, I arrive early to watch students grab copies of the newspaper from the stack near the main entrance, my stomach fluttering nervously.",
        jumbled: ["my", "near", "grab", "entrance,", "watch", "the", "stomach", "day,", "fluttering", "I", "from", "newspaper", "nervously.", "stack", "of", "On", "the", "students", "publication", "to", "early", "the", "arrive", "copies", "main"],
      },
      {
        target: "Seeing my name printed as the byline above the article feels surreal, something I have imagined for two entire years finally becoming real.",
        jumbled: ["above", "surreal,", "printed", "something", "real.", "two", "I", "as", "years", "name", "my", "article", "byline", "becoming", "feels", "finally", "the", "have", "imagined", "the", "for", "entire", "Seeing"],
      },
      {
        target: "Throughout the day, classmates approach me with genuine questions and opinions about the art program, several thanking me directly for investigating something they actually cared about.",
        jumbled: ["me", "me", "cared", "several", "the", "and", "opinions", "directly", "thanking", "genuine", "about", "Throughout", "questions", "the", "art", "day,", "approach", "about.", "something", "program,", "with", "investigating", "classmates", "they", "actually", "for"],
      },
      {
        target: "“Thanks for writing this, Caleb,” one classmate says with a grin.",
        jumbled: ["this,", "says", "with", "one", "writing", "Caleb,”", "for", "classmate", "a", "grin.", "“Thanks"],
      },
      {
        target: "Even a couple of skeptical teachers stop me in the hallway, acknowledging the article felt fair and well-researched despite the sensitive topic.",
        jumbled: ["acknowledging", "well-researched", "Even", "sensitive", "despite", "skeptical", "and", "teachers", "a", "the", "stop", "fair", "hallway,", "the", "couple", "me", "felt", "topic.", "the", "of", "article", "in"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about seeing your work recognized by other people.",
    mySentenceExample: "I felt proud seeing my painting displayed in the school hallway.",
  },
  {
    number: 10,
    title: "Making a Difference",
    image: null,
    imageNote: "Caleb standing with Ms. Rivera and Iris outside the art room, watching students paint again, a small announcement board mentioning saved funding nearby.",
    story:
      "Two weeks after publication, the administration announces they've reconsidered the budget decision, citing overwhelming student interest revealed through the newspaper article. Standing outside the art room, watching students paint just like always, I feel a swell of pride unlike anything I've experienced from schoolwork before. “You started this, Caleb,” Iris reminds me, though I quickly credit her research help and Ms. Rivera's careful guidance throughout the entire process. Ms. Rivera smiles proudly, mentioning that journalism's real purpose is exactly this: giving people information that leads to genuine, meaningful change. Walking away, I already feel eager to find my next important story.",
    questions: [
      { text: "What does the administration announce?", answer: "That they've reconsidered the budget decision." },
      { text: "How does Caleb feel watching students paint again?", answer: "A swell of pride." },
      { text: "What does Ms. Rivera say journalism's real purpose is?", answer: "Giving people information that leads to genuine, meaningful change." },
    ],
    trueFalse: [
      { text: "The administration reconsiders the budget decision.", answer: true },
      { text: "Caleb feels nothing special watching the students paint.", answer: false },
      { text: "Caleb takes full credit and ignores Iris's help.", answer: false },
      { text: "Ms. Rivera says journalism's purpose is meaningful change.", answer: true },
      { text: "Caleb feels eager to find his next story.", answer: true },
    ],
    buildSentence: [
      {
        target: "Two weeks after publication, the administration announces they've reconsidered the budget decision, citing overwhelming student interest revealed through the newspaper article.",
        jumbled: ["the", "publication,", "through", "interest", "newspaper", "citing", "they've", "the", "after", "reconsidered", "revealed", "budget", "student", "the", "Two", "administration", "announces", "decision,", "article.", "weeks", "overwhelming"],
      },
      {
        target: "Standing outside the art room, watching students paint just like always, I feel a swell of pride unlike anything I've experienced from schoolwork before.",
        jumbled: ["schoolwork", "swell", "watching", "pride", "outside", "of", "always,", "room,", "just", "paint", "art", "experienced", "from", "before.", "students", "I've", "anything", "the", "I", "unlike", "a", "Standing", "feel", "like"],
      },
      {
        target: "“You started this, Caleb,” Iris reminds me, though I quickly credit her research help and Ms. Rivera's careful guidance throughout the entire process.",
        jumbled: ["the", "Caleb,”", "process.", "guidance", "Iris", "I", "started", "throughout", "Ms.", "help", "reminds", "and", "me,", "careful", "“You", "entire", "Rivera's", "quickly", "research", "credit", "though", "her", "this,"],
      },
      {
        target: "Ms. Rivera smiles proudly, mentioning that journalism's real purpose is exactly this: giving people information that leads to genuine, meaningful change.",
        jumbled: ["Rivera", "proudly,", "mentioning", "that", "giving", "Ms.", "this:", "leads", "genuine,", "is", "exactly", "purpose", "journalism's", "to", "real", "change.", "that", "smiles", "people", "meaningful", "information"],
      },
      {
        target: "Walking away, I already feel eager to find my next important story.",
        jumbled: ["find", "important", "away,", "I", "already", "to", "feel", "eager", "story.", "next", "my", "Walking"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time your effort led to a real, positive change.",
    mySentenceExample: "My effort to recycle more led to a real change in my whole school.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
