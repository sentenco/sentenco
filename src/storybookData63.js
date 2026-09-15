// B1 Adults digital storybook, Book 63: "Renewing My Driver's License"
// Static content -- no Supabase. Seventh book in the B1 Adults batch
// (57-64). Bureaucratic-mishap scenario, distinct from the A1 Adults
// bank/post-office books (Books 43, 48) which were smooth first-time
// transactions -- this one centers on a complication (a missing
// document / wrong office) requiring problem-solving, matching B1's
// higher complexity target. Adults-track shape: 3 questions, 5 True/
// False, 5 Build-a-Sentence per chapter. Chapter images not generated
// yet -- image left null per chapter.
import coverImg from "./assets/storybook63/cover.jpg";

export const STORYBOOK_TITLE = "Renewing My Driver's License";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Yusuf standing at a government office counter, holding a folder of documents, looking at a clerk who is shaking her head apologetically.";

export const CHARACTERS = [
  { name: "Yusuf", role: "The narrator, an adult renewing an expiring license", look: "Button-up shirt, folder of documents tucked under one arm, patient expression." },
  { name: "Ms. Okafor", role: "A clerk at the licensing office", look: "Office uniform, name tag, methodical and precise in how she explains things." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Reminder Letter",
    image: null,
    imageNote: "Yusuf opening an official-looking envelope at his kitchen table, reading a renewal notice with mild concern.",
    story:
      "Among this week's mail, I find an official letter addressed to Yusuf, reminding me that my driver's license expires in exactly three weeks. I've been meaning to renew it for a while now, so I decide today would be a reasonable day to finally handle it. The letter lists several required documents, including proof of address, my current license, and a recent passport photo. I gather what I believe are all the necessary papers, placing them carefully into a folder by the door. Confident I'm well prepared, I plan to visit the licensing office first thing tomorrow morning.",
    questions: [
      { text: "What does Yusuf find among this week's mail?", answer: "A letter reminding him his license expires in three weeks." },
      { text: "How long until his license expires?", answer: "Three weeks." },
      { text: "What does Yusuf do with the documents he gathers?", answer: "Places them carefully in a folder by the door." },
    ],
    trueFalse: [
      { text: "Yusuf finds an official letter about his license expiring.", answer: true },
      { text: "His license expires in exactly three weeks.", answer: true },
      { text: "Yusuf decides to ignore the letter completely.", answer: false },
      { text: "Yusuf places the documents carefully into a folder.", answer: true },
      { text: "Yusuf plans to visit the office tomorrow morning.", answer: true },
    ],
    buildSentence: [
      {
        target: "Among this week's mail, I find an official letter addressed to Yusuf, reminding me that my driver's license expires in exactly three weeks.",
        jumbled: ["license", "Among", "expires", "I", "this", "mail,", "Yusuf,", "driver's", "letter", "addressed", "three", "official", "reminding", "to", "find", "that", "me", "weeks.", "an", "my", "exactly", "in", "week's"],
      },
      {
        target: "I've been meaning to renew it for a while now, so I decide today would be a reasonable day to finally handle it.",
        jumbled: ["so", "today", "finally", "day", "I've", "now,", "it.", "while", "a", "meaning", "handle", "I", "be", "for", "been", "would", "it", "a", "reasonable", "to", "to", "decide", "renew"],
      },
      {
        target: "The letter lists several required documents, including proof of address, my current license, and a recent passport photo.",
        jumbled: ["a", "including", "address,", "The", "lists", "and", "passport", "photo.", "documents,", "letter", "my", "current", "several", "of", "license,", "proof", "required", "recent"],
      },
      {
        target: "I gather what I believe are all the necessary papers, placing them carefully into a folder by the door.",
        jumbled: ["papers,", "by", "all", "carefully", "believe", "I", "the", "placing", "door.", "folder", "the", "a", "them", "necessary", "are", "I", "into", "gather", "what"],
      },
      {
        target: "Confident I'm well prepared, I plan to visit the licensing office first thing tomorrow morning.",
        jumbled: ["first", "office", "to", "Confident", "I", "licensing", "the", "plan", "visit", "thing", "I'm", "tomorrow", "prepared,", "well", "morning."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about preparing documents for an official task.",
    mySentenceExample: "I prepared documents carefully for the official task.",
  },
  {
    number: 2,
    title: "Arriving at the Office",
    image: null,
    imageNote: "Yusuf standing in a busy government office lobby, taking a numbered ticket from a dispenser, looking around at the waiting area.",
    story:
      "The licensing office is busier than I expected, with a long row of chairs already filled by other waiting visitors. I take a numbered ticket from the dispenser near the entrance and find an open seat toward the back. Glancing at the screen above the counters, I see they're currently serving numbers considerably lower than mine. Settling in for what will likely be a long wait, I pull out my phone and notice a calendar reminder still open, “Yusuf: license renewal today,” from last night. After nearly forty minutes, my number finally appears, and I walk confidently toward the assigned counter.",
    questions: [
      { text: "How does Yusuf describe the licensing office?", answer: "Busier than expected." },
      { text: "What does Yusuf take near the entrance?", answer: "A numbered ticket." },
      { text: "How long does Yusuf wait before his number appears?", answer: "Nearly forty minutes." },
    ],
    trueFalse: [
      { text: "The licensing office is busier than Yusuf expected.", answer: true },
      { text: "Yusuf takes a numbered ticket from a dispenser.", answer: true },
      { text: "Yusuf's number is called almost immediately.", answer: false },
      { text: "Yusuf waits nearly forty minutes before his number appears.", answer: true },
      { text: "Yusuf walks confidently toward the assigned counter.", answer: true },
    ],
    buildSentence: [
      {
        target: "The licensing office is busier than I expected, with a long row of chairs already filled by other waiting visitors.",
        jumbled: ["is", "with", "row", "visitors.", "busier", "already", "waiting", "than", "chairs", "expected,", "a", "I", "The", "by", "long", "office", "licensing", "other", "of", "filled"],
      },
      {
        target: "I take a numbered ticket from the dispenser near the entrance and find an open seat toward the back.",
        jumbled: ["from", "an", "I", "the", "numbered", "near", "and", "dispenser", "the", "toward", "seat", "open", "take", "find", "entrance", "back.", "the", "a", "ticket"],
      },
      {
        target: "Glancing at the screen above the counters, I see they're currently serving numbers considerably lower than mine.",
        jumbled: ["I", "lower", "see", "serving", "above", "they're", "counters,", "screen", "mine.", "currently", "Glancing", "at", "than", "considerably", "the", "numbers", "the"],
      },
      {
        target: "Settling in for what will likely be a long wait, I pull out my phone and notice a calendar reminder still open, “Yusuf: license renewal today,” from last night.",
        jumbled: ["will", "be", "open,", "a", "for", "out", "likely", "reminder", "still", "license", "pull", "and", "long", "in", "Settling", "I", "notice", "from", "phone", "renewal", "night.", "my", "wait,", "what", "a", "calendar", "last", "“Yusuf:", "today,”"],
      },
      {
        target: "My number finally appears, and I walk confidently toward the assigned counter.",
        jumbled: ["I", "confidently", "walk", "the", "counter.", "and", "assigned", "toward", "finally", "appears,", "number", "My"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting patiently at a busy office.",
    mySentenceExample: "I waited patiently at a busy government office.",
  },
  {
    number: 3,
    title: "A Missing Document",
    image: null,
    imageNote: "Ms. Okafor looking through Yusuf's folder at the counter, pausing with a concerned expression as she checks a document.",
    story:
      "Ms. Okafor greets me politely and begins reviewing my documents one by one, checking each against her list carefully. Everything seems fine until she pauses, mentioning that my proof of address is actually more than three months old. “Unfortunately, Yusuf, this particular document needs to be more recent than what you've brought today,” she explains apologetically. My stomach sinks slightly, since I genuinely believed I had prepared everything correctly beforehand. I ask whether there's any way around this requirement, hoping perhaps a different document might work instead.",
    questions: [
      { text: "What does Ms. Okafor do when reviewing Yusuf's documents?", answer: "Checks each against her list carefully." },
      { text: "What problem does she find with his proof of address?", answer: "It's more than three months old." },
      { text: "What does Yusuf ask Ms. Okafor?", answer: "If there's any way around the requirement." },
    ],
    trueFalse: [
      { text: "Ms. Okafor checks each document against her list carefully.", answer: true },
      { text: "His proof of address is more than three months old.", answer: true },
      { text: "Ms. Okafor says the document needs to be more recent.", answer: true },
      { text: "Yusuf feels completely confident nothing is wrong.", answer: false },
      { text: "Yusuf asks whether a different document might work.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Okafor greets me politely and begins reviewing my documents one by one, checking each against her list carefully.",
        jumbled: ["by", "one", "each", "documents", "Okafor", "my", "checking", "list", "greets", "against", "her", "and", "begins", "Ms.", "reviewing", "politely", "carefully.", "me", "one,"],
      },
      {
        target: "Everything seems fine until she pauses, mentioning that my proof of address is actually more than three months old.",
        jumbled: ["seems", "Everything", "that", "my", "address", "more", "actually", "she", "proof", "pauses,", "fine", "months", "three", "until", "mentioning", "old.", "than", "is", "of"],
      },
      {
        target: "“Unfortunately, Yusuf, this particular document needs to be more recent than what you've brought today,” she explains apologetically.",
        jumbled: ["she", "needs", "apologetically.", "recent", "to", "Yusuf,", "particular", "“Unfortunately,", "than", "this", "you've", "be", "explains", "more", "today,”", "what", "document", "brought"],
      },
      {
        target: "My stomach sinks slightly, since I genuinely believed I had prepared everything correctly beforehand.",
        jumbled: ["stomach", "I", "since", "slightly,", "beforehand.", "My", "had", "prepared", "I", "sinks", "genuinely", "everything", "believed", "correctly"],
      },
      {
        target: "I ask whether there's any way around this requirement, hoping perhaps a different document might work instead.",
        jumbled: ["requirement,", "any", "there's", "I", "this", "document", "way", "instead.", "perhaps", "different", "a", "around", "ask", "whether", "work", "hoping", "might"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about discovering a document you needed wasn't accepted.",
    mySentenceExample: "I discovered my document wasn't accepted at the counter.",
  },
  {
    number: 4,
    title: "Exploring Options",
    image: null,
    imageNote: "Ms. Okafor explaining alternative documents to Yusuf, both looking at a printed checklist on the counter.",
    story:
      "Ms. Okafor checks a printed list of acceptable alternatives, explaining that a recent utility bill or bank statement could also work instead. Unfortunately, I don't have either of those with me, having only brought exactly what the original letter specified. “Would it be possible for me to bring the correct document tomorrow instead?” I ask, trying to stay patient despite my frustration. “Yes, Yusuf, you're welcome to return with the updated document without waiting in line again,” she confirms. She writes a small note on my file, explaining that most of my paperwork has already been verified today.",
    questions: [
      { text: "What alternatives does Ms. Okafor mention?", answer: "A recent utility bill or bank statement." },
      { text: "Does Yusuf have either alternative document with him?", answer: "No." },
      { text: "What does Yusuf ask Ms. Okafor?", answer: "If he can bring the correct document tomorrow instead." },
    ],
    trueFalse: [
      { text: "A recent utility bill or bank statement could also work.", answer: true },
      { text: "Yusuf has one of these alternatives with him.", answer: false },
      { text: "Yusuf asks if he can bring the document tomorrow instead.", answer: true },
      { text: "Ms. Okafor confirms he can return without waiting in line again.", answer: true },
      { text: "Ms. Okafor refuses to write any note about today's visit.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Okafor checks a printed list of acceptable alternatives, explaining that a recent utility bill or bank statement could also work instead.",
        jumbled: ["list", "Ms.", "a", "a", "that", "could", "statement", "or", "checks", "acceptable", "printed", "utility", "work", "Okafor", "instead.", "bank", "bill", "of", "alternatives,", "recent", "explaining", "also"],
      },
      {
        target: "Unfortunately, I don't have either of those with me, having only brought exactly what the original letter specified.",
        jumbled: ["having", "have", "only", "I", "those", "what", "of", "Unfortunately,", "don't", "either", "brought", "with", "letter", "specified.", "original", "exactly", "me,", "the"],
      },
      {
        target: "“Would it be possible for me to bring the correct document tomorrow instead?” I ask, trying to stay patient despite my frustration.",
        jumbled: ["be", "me", "to", "stay", "instead?”", "tomorrow", "bring", "ask,", "despite", "it", "possible", "to", "“Would", "trying", "I", "my", "correct", "patient", "the", "frustration.", "document", "for"],
      },
      {
        target: "“Yes, Yusuf, you're welcome to return with the updated document without waiting in line again,” she confirms.",
        jumbled: ["return", "updated", "“Yes,", "Yusuf,", "she", "you're", "welcome", "in", "with", "the", "line", "without", "to", "again,”", "waiting", "confirms.", "document"],
      },
      {
        target: "She writes a small note on my file, explaining that most of my paperwork has already been verified today.",
        jumbled: ["small", "explaining", "on", "my", "note", "my", "today.", "She", "already", "file,", "paperwork", "of", "been", "that", "most", "a", "verified", "has", "writes"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finding an alternative solution to a paperwork problem.",
    mySentenceExample: "I found an alternative solution to my paperwork problem.",
  },
  {
    number: 5,
    title: "A Small Setback",
    image: null,
    imageNote: "Yusuf walking out of the office, folder under his arm, checking his phone with a slightly frustrated expression.",
    story:
      "Walking back to my car, I feel mildly annoyed that a single overlooked detail cost me an entire trip to the office. On the other hand, I remind myself that this wasn't really such a serious problem, all things considered. I search my email for a recent utility bill I could print at home, hoping to have everything ready by tomorrow. Fortunately, I find one from just two weeks ago, opening with “Dear Yusuf,” which should easily satisfy the office's recency requirement. Feeling somewhat better about the situation, I head home to print the document before I forget completely.",
    questions: [
      { text: "How does Yusuf feel walking back to his car?", answer: "Mildly annoyed." },
      { text: "What does Yusuf search his email for?", answer: "A recent utility bill." },
      { text: "How old is the utility bill Yusuf finds?", answer: "Two weeks." },
    ],
    trueFalse: [
      { text: "Yusuf feels mildly annoyed about the wasted trip.", answer: true },
      { text: "Yusuf searches his email for a recent utility bill.", answer: true },
      { text: "Yusuf cannot find any recent utility bill at all.", answer: false },
      { text: "The utility bill he finds is from just two weeks ago.", answer: true },
      { text: "Yusuf heads home to print the document.", answer: true },
    ],
    buildSentence: [
      {
        target: "Walking back to my car, I feel mildly annoyed that a single overlooked detail cost me an entire trip to the office.",
        jumbled: ["to", "I", "overlooked", "an", "detail", "single", "trip", "office.", "me", "to", "that", "car,", "Walking", "cost", "annoyed", "feel", "my", "back", "mildly", "a", "the", "entire"],
      },
      {
        target: "On the other hand, I remind myself that this wasn't really such a serious problem, all things considered.",
        jumbled: ["considered.", "myself", "things", "other", "all", "that", "such", "wasn't", "this", "serious", "I", "On", "hand,", "the", "a", "problem,", "really", "remind"],
      },
      {
        target: "I search my email for a recent utility bill I could print at home, hoping to have everything ready by tomorrow.",
        jumbled: ["email", "could", "I", "by", "utility", "everything", "ready", "search", "a", "recent", "home,", "at", "hoping", "to", "tomorrow.", "I", "print", "have", "my", "for", "bill"],
      },
      {
        target: "Fortunately, I find one from just two weeks ago, opening with “Dear Yusuf,” which should easily satisfy the office's recency requirement.",
        jumbled: ["from", "Yusuf,”", "just", "should", "office's", "recency", "weeks", "the", "two", "find", "Fortunately,", "opening", "one", "I", "“Dear", "requirement.", "which", "with", "easily", "satisfy", "ago,"],
      },
      {
        target: "Feeling somewhat better about the situation, I head home to print the document before I forget completely.",
        jumbled: ["about", "head", "somewhat", "the", "document", "better", "completely.", "forget", "situation,", "before", "Feeling", "print", "I", "to", "the", "home", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about handling a small setback without getting too upset.",
    mySentenceExample: "I handled the small setback without getting too upset.",
  },
  {
    number: 6,
    title: "Returning the Next Day",
    image: null,
    imageNote: "Yusuf walking back into the licensing office the next morning, folder in hand, looking more confident this time.",
    story:
      "The next morning, I return to the office with my printed utility bill tucked safely inside the folder alongside everything else. As Ms. Okafor promised, I don't need to take another number, since a staff member directs me straight to her counter. She reviews the new document quickly, confirming this time that everything actually meets the requirement properly. “Perfect, Yusuf, this should work just fine,” she says, sounding genuinely pleased that the issue has been resolved so easily. Relief washes over me, especially knowing I won't need to make yet another separate trip.",
    questions: [
      { text: "What does Yusuf bring with him the next morning?", answer: "The printed utility bill." },
      { text: "Does Yusuf need to take another number this time?", answer: "No." },
      { text: "What does Ms. Okafor say about the new document?", answer: "That it should work just fine." },
    ],
    trueFalse: [
      { text: "Yusuf brings his printed utility bill the next morning.", answer: true },
      { text: "Yusuf needs to take another number and wait again.", answer: false },
      { text: "Ms. Okafor confirms everything meets the requirement now.", answer: true },
      { text: "Ms. Okafor sounds genuinely pleased the issue is resolved.", answer: true },
      { text: "Yusuf feels no relief about avoiding another trip.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next morning, I return to the office with my printed utility bill tucked safely inside the folder alongside everything else.",
        jumbled: ["everything", "return", "the", "morning,", "The", "printed", "next", "alongside", "I", "inside", "to", "folder", "tucked", "utility", "safely", "with", "my", "bill", "office", "the", "else."],
      },
      {
        target: "I don't need to take another number, since a staff member directs me straight to her counter.",
        jumbled: ["since", "straight", "need", "another", "counter.", "her", "a", "staff", "directs", "I", "me", "don't", "member", "to", "number,", "to", "take"],
      },
      {
        target: "She reviews the new document quickly, confirming this time that everything actually meets the requirement properly.",
        jumbled: ["time", "confirming", "document", "quickly,", "meets", "actually", "properly.", "the", "new", "this", "everything", "She", "the", "requirement", "that", "reviews"],
      },
      {
        target: "“Perfect, Yusuf, this should work just fine,” she says, sounding genuinely pleased that the issue has been resolved so easily.",
        jumbled: ["“Perfect,", "should", "pleased", "work", "been", "the", "Yusuf,", "fine,”", "issue", "that", "she", "has", "says,", "just", "sounding", "easily.", "so", "resolved", "this", "genuinely"],
      },
      {
        target: "Relief washes over me, especially knowing I won't need to make yet another separate trip.",
        jumbled: ["over", "I", "to", "make", "need", "yet", "trip.", "Relief", "another", "especially", "knowing", "won't", "washes", "me,", "separate"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about successfully fixing a problem after returning with the right documents.",
    mySentenceExample: "I successfully fixed the problem by returning with the right documents.",
  },
  {
    number: 7,
    title: "Finishing the Application",
    image: null,
    imageNote: "Yusuf sitting for a photo booth-style camera at the office counter, Ms. Okafor adjusting the equipment nearby.",
    story:
      "With the documents finally settled, Ms. Okafor moves quickly through the rest of the application process without further complications. She takes my photo using a small camera mounted beside her desk, asking me to remove my glasses briefly. “Just sign here, Yusuf, and you'll be all set,” she says, and I sign a few forms electronically, confirming my current address and agreeing to the office's standard terms and conditions. She explains that my new license should arrive by mail within roughly ten business days from today. Thanking her for her patience throughout this entire process, I gather my folder and head back outside.",
    questions: [
      { text: "What does Ms. Okafor do with the small camera?", answer: "Takes Yusuf's photo." },
      { text: "What does Yusuf sign electronically?", answer: "A few forms confirming his address and agreeing to terms." },
      { text: "How long will it take for the new license to arrive?", answer: "Roughly ten business days." },
    ],
    trueFalse: [
      { text: "Ms. Okafor takes Yusuf's photo using a small camera.", answer: true },
      { text: "Yusuf signs a few forms electronically.", answer: true },
      { text: "The new license should arrive within ten business days.", answer: true },
      { text: "Yusuf refuses to thank Ms. Okafor for her patience.", answer: false },
      { text: "The process runs into further complications after this.", answer: false },
    ],
    buildSentence: [
      {
        target: "With the documents finally settled, Ms. Okafor moves quickly through the rest of the application process without further complications.",
        jumbled: ["without", "Okafor", "through", "rest", "settled,", "of", "finally", "documents", "quickly", "process", "further", "complications.", "the", "Ms.", "application", "moves", "the", "With", "the"],
      },
      {
        target: "She takes my photo using a small camera mounted beside her desk, asking me to remove my glasses briefly.",
        jumbled: ["using", "She", "briefly.", "remove", "photo", "my", "asking", "takes", "desk,", "a", "glasses", "to", "small", "beside", "her", "camera", "my", "mounted", "me"],
      },
      {
        target: "“Just sign here, Yusuf, and you'll be all set,” she says, and I sign a few forms electronically, confirming my current address and agreeing to the office's standard terms and conditions.",
        jumbled: ["address", "conditions.", "agreeing", "the", "few", "and", "sign", "a", "sign", "she", "“Just", "and", "and", "be", "my", "forms", "here,", "to", "and", "confirming", "Yusuf,", "standard", "all", "current", "you'll", "electronically,", "set,”", "says,", "office's", "I", "terms"],
      },
      {
        target: "She explains that my new license should arrive by mail within roughly ten business days from today.",
        jumbled: ["that", "explains", "today.", "roughly", "ten", "license", "mail", "days", "within", "business", "from", "by", "new", "my", "should", "She", "arrive"],
      },
      {
        target: "Thanking her for her patience throughout this entire process, I gather my folder and head back outside.",
        jumbled: ["Thanking", "entire", "her", "patience", "and", "her", "process,", "outside.", "folder", "throughout", "my", "I", "gather", "back", "this", "for", "head"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finally completing an official process after some difficulty.",
    mySentenceExample: "I finally completed the official process after some difficulty.",
  },
  {
    number: 8,
    title: "Telling a Coworker",
    image: null,
    imageNote: "Yusuf chatting with a coworker at the office water cooler, gesturing as he describes the two trips to the licensing office.",
    story:
      "Back at work, I mention the whole license renewal story to a coworker, half complaining and half laughing about it now. She admits she went through something similar last year, needing three separate visits before finally getting hers sorted properly. “Yusuf, next time bring copies of everything,” she jokes, and we laugh that government offices seem to specialize in requiring exactly the one document you didn't think to bring. On the other hand, she points out that checking the requirements list twice beforehand probably saves people the most hassle overall. I make a mental note to always double-check document dates carefully for anything official going forward.",
    questions: [
      { text: "Who does Yusuf mention the story to at work?", answer: "A coworker." },
      { text: "What does the coworker admit about her own experience?", answer: "That she needed three separate visits last year." },
      { text: "What mental note does Yusuf make?", answer: "To always double-check document dates for official things." },
    ],
    trueFalse: [
      { text: "Yusuf mentions the story to a coworker at work.", answer: true },
      { text: "The coworker needed three separate visits last year.", answer: true },
      { text: "The coworker says checking requirements twice saves hassle.", answer: true },
      { text: "Yusuf decides never to double-check documents again.", answer: false },
      { text: "Yusuf makes a note to double-check document dates carefully.", answer: true },
    ],
    buildSentence: [
      {
        target: "Back at work, I mention the whole license renewal story to a coworker, half complaining and half laughing about it now.",
        jumbled: ["now.", "a", "at", "the", "and", "Back", "laughing", "it", "coworker,", "whole", "half", "story", "license", "half", "work,", "to", "complaining", "renewal", "about", "mention", "I"],
      },
      {
        target: "She admits she went through something similar last year, needing three separate visits before finally getting hers sorted properly.",
        jumbled: ["admits", "through", "She", "needing", "similar", "three", "year,", "getting", "visits", "hers", "before", "she", "something", "separate", "properly.", "last", "finally", "went", "sorted"],
      },
      {
        target: "“Yusuf, next time bring copies of everything,” she jokes, and we laugh that government offices seem to specialize in requiring exactly the one document you didn't think to bring.",
        jumbled: ["bring.", "you", "bring", "laugh", "to", "to", "time", "that", "think", "offices", "of", "specialize", "she", "everything,”", "document", "didn't", "copies", "government", "requiring", "we", "“Yusuf,", "exactly", "jokes,", "the", "next", "seem", "one", "in", "and"],
      },
      {
        target: "On the other hand, she points out that checking the requirements list twice beforehand probably saves people the most hassle overall.",
        jumbled: ["hassle", "most", "points", "probably", "the", "the", "overall.", "On", "people", "saves", "hand,", "other", "that", "checking", "requirements", "list", "beforehand", "she", "out", "twice", "the"],
      },
      {
        target: "I make a mental note to always double-check document dates carefully for anything official going forward.",
        jumbled: ["make", "to", "document", "a", "mental", "double-check", "going", "dates", "official", "anything", "carefully", "I", "forward.", "note", "always", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning from a coworker who had a similar experience.",
    mySentenceExample: "I learned from a coworker who had a similar experience.",
  },
  {
    number: 9,
    title: "The License Arrives",
    image: null,
    imageNote: "Yusuf checking his mailbox at home, pulling out an envelope, opening it to reveal his new driver's license.",
    story:
      "Exactly nine days later, I find an envelope addressed to Yusuf from the licensing office waiting in my mailbox after work. Opening it carefully, I slide out my brand new license, checking that all the details are printed correctly this time. Everything looks accurate, including my updated address and a photo that's honestly better than my old one. I tuck the new license into my wallet, finally replacing the expired one I'd been carrying around nervously. This small piece of plastic represents an oddly satisfying conclusion to what felt like an unnecessarily complicated process.",
    questions: [
      { text: "How many days later does the envelope arrive?", answer: "Nine." },
      { text: "What does Yusuf check on the new license?", answer: "That all the details are printed correctly." },
      { text: "What does Yusuf do with the new license?", answer: "Tucks it into his wallet, replacing the expired one." },
    ],
    trueFalse: [
      { text: "The envelope arrives exactly nine days later.", answer: true },
      { text: "Yusuf checks that all the details are printed correctly.", answer: true },
      { text: "Yusuf finds his address is printed incorrectly.", answer: false },
      { text: "Yusuf tucks the new license into his wallet.", answer: true },
      { text: "Yusuf feels this conclusion is oddly satisfying.", answer: true },
    ],
    buildSentence: [
      {
        target: "Exactly nine days later, I find an envelope addressed to Yusuf from the licensing office waiting in my mailbox after work.",
        jumbled: ["find", "addressed", "my", "Exactly", "waiting", "after", "to", "work.", "nine", "envelope", "from", "licensing", "days", "in", "the", "mailbox", "an", "later,", "I", "office", "Yusuf"],
      },
      {
        target: "Opening it carefully, I slide out my brand new license, checking that all the details are printed correctly this time.",
        jumbled: ["the", "Opening", "correctly", "that", "out", "carefully,", "slide", "brand", "time.", "it", "checking", "this", "all", "I", "printed", "license,", "new", "are", "my", "details"],
      },
      {
        target: "Everything looks accurate, including my updated address and a photo that's honestly better than my old one.",
        jumbled: ["that's", "honestly", "including", "and", "address", "Everything", "my", "one.", "my", "a", "old", "updated", "accurate,", "looks", "photo", "better", "than"],
      },
      {
        target: "I tuck the new license into my wallet, finally replacing the expired one I'd been carrying around nervously.",
        jumbled: ["into", "wallet,", "I", "tuck", "nervously.", "the", "replacing", "license", "my", "one", "expired", "I'd", "been", "new", "finally", "around", "carrying", "the"],
      },
      {
        target: "This small piece of plastic represents an oddly satisfying conclusion to what felt like an unnecessarily complicated process.",
        jumbled: ["of", "an", "represents", "satisfying", "plastic", "piece", "what", "felt", "process.", "complicated", "This", "an", "unnecessarily", "small", "conclusion", "oddly", "to", "like"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about the satisfaction of finally receiving something you worked for.",
    mySentenceExample: "I felt satisfied finally receiving my new license in the mail.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Yusuf sitting at his kitchen table again, calmly filing away his old license and paperwork into a folder.",
    story:
      "Looking back on the entire process, I realize how a single overlooked document turned a simple errand into a two-day ordeal. If I had double-checked the exact requirements more carefully beforehand, I likely could have avoided the wasted first trip entirely. However, staying calm and asking clear questions at the counter allowed me to fix the mistake without unnecessary stress. I've since created a small checklist titled “Yusuf's Document Checklist,” listing exactly what's needed before I ever leave the house. In the end, this minor bureaucratic hiccup taught me something genuinely useful about preparing thoroughly for official tasks.",
    questions: [
      { text: "What does Yusuf realize looking back on the process?", answer: "How one overlooked document turned a simple errand into a two-day ordeal." },
      { text: "What might have helped him avoid the wasted first trip?", answer: "Double-checking the exact requirements beforehand." },
      { text: "What has Yusuf created since this experience?", answer: "A small checklist for official documents." },
    ],
    trueFalse: [
      { text: "A single overlooked document turned this into a two-day ordeal.", answer: true },
      { text: "Double-checking requirements might have avoided the wasted trip.", answer: true },
      { text: "Yusuf has created a small checklist for official documents.", answer: true },
      { text: "Yusuf feels he learned nothing useful from this experience.", answer: false },
      { text: "Staying calm allowed him to fix the mistake without stress.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire process, I realize how a single overlooked document turned a simple errand into a two-day ordeal.",
        jumbled: ["single", "a", "I", "realize", "a", "simple", "turned", "entire", "process,", "a", "overlooked", "back", "the", "Looking", "on", "errand", "how", "ordeal.", "two-day", "into", "document"],
      },
      {
        target: "I likely could have avoided the wasted first trip entirely.",
        jumbled: ["could", "have", "the", "avoided", "entirely.", "first", "trip", "I", "wasted", "likely"],
      },
      {
        target: "However, staying calm and asking clear questions at the counter allowed me to fix the mistake without unnecessary stress.",
        jumbled: ["stress.", "the", "me", "questions", "mistake", "clear", "without", "the", "staying", "unnecessary", "at", "counter", "fix", "However,", "and", "allowed", "asking", "to", "calm"],
      },
      {
        target: "I've since created a small checklist titled “Yusuf's Document Checklist,” listing exactly what's needed before I ever leave the house.",
        jumbled: ["Document", "the", "ever", "listing", "needed", "titled", "“Yusuf's", "checklist", "small", "what's", "leave", "exactly", "Checklist,”", "before", "I", "since", "house.", "I've", "a", "created"],
      },
      {
        target: "In the end, this minor bureaucratic hiccup taught me something genuinely useful about preparing thoroughly for official tasks.",
        jumbled: ["taught", "tasks.", "genuinely", "preparing", "minor", "this", "about", "In", "hiccup", "thoroughly", "end,", "something", "the", "bureaucratic", "useful", "official", "for", "me"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from a bureaucratic mistake or delay.",
    mySentenceExample: "I learned to prepare thoroughly for official tasks in advance.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
