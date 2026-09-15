// A1 Adults digital storybook, Book 43: "A Trip to the Bank"
// Static content -- no Supabase. Third book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook43/cover.jpg";

export const STORYBOOK_TITLE = "A Trip to the Bank";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Derek standing at a bank counter, handing papers to a bank teller, a number ticket in his other hand, other customers waiting on chairs nearby.";

export const CHARACTERS = [
  { name: "Derek", role: "The narrator, an adult", look: "Simple jacket, folder of papers under his arm, a little unsure but trying to stay calm." },
  { name: "Ms. Reyes", role: "A bank teller", look: "Bank uniform, name badge, patient and clear when explaining things." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Task",
    image: null,
    imageNote: "Derek sitting at his kitchen table, looking at bank papers and his ID card, a laptop open in front of him.",
    story:
      "This week, I need to open a new bank account for my paycheck. I have never done this before, so I feel a little nervous about it. I look online and find the bank's address near my apartment. I gather my ID card and some important papers I might need. I put everything into a folder so I do not lose anything important. My friend texts, “Good luck at the bank, Derek!” and tells me the visit is usually quick and simple. Still, I want to be ready with all the right documents. I check the folder one more time before I leave my apartment.",
    questions: [
      { text: "What does Derek need to do this week?", answer: "Open a new bank account." },
      { text: "How does Derek feel about this task?", answer: "A little nervous." },
      { text: "What does Derek put into a folder?", answer: "His ID card and important papers." },
    ],
    trueFalse: [
      { text: "Derek needs to open a new bank account.", answer: true },
      { text: "Derek has done this many times before.", answer: false },
      { text: "Derek gathers his ID card and papers.", answer: true },
      { text: "Derek's friend says the visit is usually quick.", answer: true },
      { text: "Derek leaves without checking his folder.", answer: false },
    ],
    buildSentence: [
      {
        target: "This week, I need to open a new bank account for my paycheck.",
        jumbled: ["This", "for", "I", "new", "bank", "to", "open", "week,", "need", "paycheck.", "a", "my", "account"],
      },
      {
        target: "I have never done this before, so I feel a little nervous about it.",
        jumbled: ["never", "I", "so", "nervous", "I", "a", "this", "before,", "little", "feel", "about", "it.", "done", "have"],
      },
      {
        target: "I gather my ID card and some important papers I might need.",
        jumbled: ["might", "and", "I", "important", "my", "gather", "need.", "I", "papers", "some", "ID", "card"],
      },
      {
        target: "My friend texts, “Good luck at the bank, Derek!” and tells me the visit is usually quick and simple.",
        jumbled: ["usually", "and", "me", "visit", "the", "texts,", "the", "friend", "and", "Derek!”", "is", "simple.", "luck", "at", "My", "bank,", "quick", "tells", "“Good"],
      },
      {
        target: "I check the folder one more time before I leave my apartment.",
        jumbled: ["leave", "I", "I", "my", "time", "apartment.", "the", "folder", "before", "more", "check", "one"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about preparing for a new task.",
    mySentenceExample: "I gather everything I need before starting a new task.",
  },
  {
    number: 2,
    title: "Arriving at the Bank",
    image: null,
    imageNote: "Derek walking through the entrance of a bank building, a security guard nodding as he passes a line of chairs.",
    story:
      "I arrive at the bank around ten in the morning, hoping it is not too busy yet. The building is large, with big glass doors and a security guard near the entrance. I write my name, Derek, on the sign-in sheet by the door. I walk inside and see rows of chairs where some people are already waiting. A machine near the door prints small paper tickets with numbers on them. I take a ticket and check the number carefully: it says thirty-two. I look at a screen that shows the number currently being helped. It says twenty-eight, so I know I still have a short wait ahead.",
    questions: [
      { text: "What time does Derek arrive at the bank?", answer: "Around ten in the morning." },
      { text: "What does the machine near the door do?", answer: "Prints small paper tickets with numbers." },
      { text: "What number is on Derek's ticket?", answer: "Thirty-two." },
    ],
    trueFalse: [
      { text: "Derek arrives at the bank around ten in the morning.", answer: true },
      { text: "The bank has no waiting area at all.", answer: false },
      { text: "A machine prints paper tickets with numbers.", answer: true },
      { text: "Derek's ticket number is thirty-two.", answer: true },
      { text: "The screen shows number fifty being helped.", answer: false },
    ],
    buildSentence: [
      {
        target: "I arrive at the bank around ten in the morning, hoping it is not too busy yet.",
        jumbled: ["the", "it", "busy", "not", "ten", "yet.", "I", "the", "bank", "morning,", "at", "hoping", "is", "too", "arrive", "in", "around"],
      },
      {
        target: "The building is large, with big glass doors and a security guard near the entrance.",
        jumbled: ["near", "is", "guard", "big", "The", "doors", "large,", "glass", "and", "security", "with", "entrance.", "the", "building", "a"],
      },
      {
        target: "I walk inside and see rows of chairs where some people are already waiting.",
        jumbled: ["see", "waiting.", "walk", "are", "I", "inside", "people", "rows", "of", "already", "chairs", "and", "some", "where"],
      },
      {
        target: "A machine near the door prints small paper tickets with numbers on them.",
        jumbled: ["A", "numbers", "near", "prints", "on", "machine", "the", "small", "door", "paper", "them.", "tickets", "with"],
      },
      {
        target: "It says twenty-eight, so I know I still have a short wait ahead.",
        jumbled: ["says", "wait", "a", "I", "so", "have", "know", "twenty-eight,", "It", "short", "ahead.", "still", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting for your turn somewhere.",
    mySentenceExample: "I waited for my turn at the doctor's office yesterday.",
  },
  {
    number: 3,
    title: "Waiting My Turn",
    image: null,
    imageNote: "Derek sitting in a waiting chair, checking his phone occasionally, looking up at a digital number screen on the wall.",
    story:
      "I sit down on one of the chairs and check my phone while I wait. Time passes slowly, and I watch the number on the screen change every few minutes. A woman next to me is also waiting. “What's your name?” she asks. “Derek,” I say, and we talk a little about the weather outside. This small conversation helps the time pass more quickly than I expect. I look up again, and the screen finally shows number thirty-one. My turn is almost here now, and I feel my nervousness returning a little. I take a deep breath and gather my folder, getting ready to stand up.",
    questions: [
      { text: "What does Derek do while he waits?", answer: "Checks his phone." },
      { text: "Who does Derek talk to while waiting?", answer: "A woman next to him." },
      { text: "What number does the screen show?", answer: "Thirty-one." },
    ],
    trueFalse: [
      { text: "Derek checks his phone while waiting.", answer: true },
      { text: "Derek refuses to talk to anyone nearby.", answer: false },
      { text: "The screen finally shows number thirty-one.", answer: true },
      { text: "Derek feels no nervousness at all now.", answer: false },
      { text: "Derek takes a deep breath and gathers his folder.", answer: true },
    ],
    buildSentence: [
      {
        target: "I sit down on one of the chairs and check my phone while I wait.",
        jumbled: ["of", "down", "I", "I", "my", "and", "while", "check", "the", "wait.", "phone", "chairs", "on", "one", "sit"],
      },
      {
        target: "Time passes slowly, and I watch the number on the screen change every few minutes.",
        jumbled: ["screen", "on", "minutes.", "slowly,", "every", "number", "Time", "the", "I", "passes", "change", "the", "and", "watch", "few"],
      },
      {
        target: "“Derek,” I say, and we talk a little about the weather outside.",
        jumbled: ["little", "“Derek,”", "I", "say,", "and", "a", "outside.", "weather", "talk", "about", "the", "we"],
      },
      {
        target: "This small conversation helps the time pass more quickly than I expect.",
        jumbled: ["time", "conversation", "the", "quickly", "helps", "pass", "I", "expect.", "than", "This", "more", "small"],
      },
      {
        target: "My turn is almost here now, and I feel my nervousness returning a little.",
        jumbled: ["and", "now,", "little.", "feel", "turn", "I", "My", "a", "nervousness", "returning", "here", "my", "is", "almost"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a short conversation that made time pass quickly.",
    mySentenceExample: "A short conversation with a stranger made my wait pass quickly.",
  },
  {
    number: 4,
    title: "Meeting Ms. Reyes",
    image: null,
    imageNote: "Derek sitting across from Ms. Reyes at a bank counter, both looking at his ID card and paperwork on the desk.",
    story:
      "The number thirty-two finally appears, and I walk toward the counter with my folder. A friendly bank worker named Ms. Reyes greets me with a warm smile. “How can I help you today?” she asks kindly, and I explain that I want to open a new account. She nods and asks for my ID card, which I hand her carefully from my folder. “Nice to meet you, Derek,” she says, reading the card. She types something into her computer and checks my information slowly and clearly. “Everything looks good so far,” she says, making me feel a little more relaxed about the whole process.",
    questions: [
      { text: "Who greets Derek at the counter?", answer: "Ms. Reyes." },
      { text: "What does Derek explain to Ms. Reyes?", answer: "That he wants to open a new account." },
      { text: "What does Ms. Reyes ask for?", answer: "His ID card." },
    ],
    trueFalse: [
      { text: "Ms. Reyes greets Derek with a warm smile.", answer: true },
      { text: "Derek says he wants to close an account.", answer: false },
      { text: "Ms. Reyes asks for Derek's ID card.", answer: true },
      { text: "Ms. Reyes ignores Derek's information completely.", answer: false },
      { text: "Derek feels more relaxed after hearing her.", answer: true },
    ],
    buildSentence: [
      {
        target: "The number thirty-two finally appears, and I walk toward the counter with my folder.",
        jumbled: ["folder.", "toward", "The", "thirty-two", "finally", "counter", "walk", "the", "I", "with", "number", "my", "appears,", "and"],
      },
      {
        target: "A friendly bank worker named Ms. Reyes greets me with a warm smile.",
        jumbled: ["a", "Reyes", "worker", "bank", "warm", "named", "Ms.", "A", "me", "friendly", "with", "smile.", "greets"],
      },
      {
        target: "“How can I help you today?” she asks kindly, and I explain that I want to open a new account.",
        jumbled: ["kindly,", "to", "open", "help", "I", "“How", "I", "and", "new", "can", "account.", "want", "I", "asks", "she", "that", "explain", "a", "today?”", "you"],
      },
      {
        target: "“Nice to meet you, Derek,” she says, reading the card.",
        jumbled: ["the", "reading", "she", "meet", "card.", "says,", "“Nice", "you,", "Derek,”", "to"],
      },
      {
        target: "“Everything looks good so far,” she says, making me feel a little more relaxed about the whole process.",
        jumbled: ["says,", "feel", "relaxed", "more", "so", "process.", "far,”", "looks", "me", "“Everything", "about", "the", "a", "good", "whole", "little", "she", "making"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being helped by a friendly worker.",
    mySentenceExample: "A friendly worker helped me find the right form to fill out.",
  },
  {
    number: 5,
    title: "Filling Out Forms",
    image: null,
    imageNote: "Derek carefully writing on a paper form at the bank counter, Ms. Reyes pointing at a specific line for him to sign.",
    story:
      "Ms. Reyes gives me a short form to fill out with my personal information. I write my name, address, and phone number carefully in the correct boxes. Some questions on the form confuse me a little, so I ask her for help. She explains each question patiently, and I understand everything much better now. “Just sign here at the bottom, Derek,” she says, pointing to a small line on the page. I sign my name carefully and hand the form back to her. Filling out forms feels easier when someone explains things clearly like Ms. Reyes does.",
    questions: [
      { text: "What does Ms. Reyes give Derek?", answer: "A short form to fill out." },
      { text: "What does Derek write in the boxes?", answer: "His name, address, and phone number." },
      { text: "What does Derek do when questions confuse him?", answer: "Asks Ms. Reyes for help." },
    ],
    trueFalse: [
      { text: "Ms. Reyes gives Derek a short form.", answer: true },
      { text: "Derek writes his name, address, and phone number.", answer: true },
      { text: "Derek refuses to ask any questions.", answer: false },
      { text: "Derek signs his name at the bottom.", answer: true },
      { text: "Filling out forms feels harder with her help.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Reyes gives me a short form to fill out with my personal information.",
        jumbled: ["my", "Ms.", "personal", "information.", "short", "me", "out", "to", "Reyes", "fill", "gives", "a", "with", "form"],
      },
      {
        target: "I write my name, address, and phone number carefully in the correct boxes.",
        jumbled: ["and", "boxes.", "phone", "write", "I", "name,", "address,", "in", "my", "the", "number", "correct", "carefully"],
      },
      {
        target: "Some questions on the form confuse me a little, so I ask her for help.",
        jumbled: ["help.", "form", "for", "Some", "me", "ask", "a", "questions", "confuse", "little,", "so", "I", "her", "on", "the"],
      },
      {
        target: "“Just sign here at the bottom, Derek,” she says, pointing to a small line on the page.",
        jumbled: ["Derek,”", "says,", "bottom,", "“Just", "she", "the", "here", "sign", "to", "the", "small", "on", "page.", "line", "pointing", "at", "a"],
      },
      {
        target: "Filling out forms feels easier when someone explains things clearly like Ms. Reyes does.",
        jumbled: ["someone", "forms", "clearly", "when", "Reyes", "explains", "easier", "does.", "Ms.", "things", "feels", "like", "out", "Filling"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about filling out an important form.",
    mySentenceExample: "I filled out an important form for my new job.",
  },
  {
    number: 6,
    title: "A Question About Money",
    image: null,
    imageNote: "Derek counting cash to deposit at the counter while Ms. Reyes explains something on a small printed pamphlet, both looking at the numbers together.",
    story:
      "Ms. Reyes asks how much money I want to put into my new account today. I take out the cash I brought and count it carefully on the counter. “Derek, this account has no monthly fee if you keep a small amount inside it,” she explains. I did not know this detail before, so I feel glad she explained it clearly. She also gives me a small pamphlet with more information to read later. I ask a few more questions about using the account online. She answers everything patiently, and I begin to feel confident about my choice.",
    questions: [
      { text: "What does Ms. Reyes ask Derek?", answer: "How much money he wants to put into the account." },
      { text: "What does Ms. Reyes explain about the account?", answer: "That it has no monthly fee if he keeps a small amount inside." },
      { text: "What does Ms. Reyes give Derek?", answer: "A small pamphlet." },
    ],
    trueFalse: [
      { text: "Ms. Reyes asks how much money Derek wants to deposit.", answer: true },
      { text: "The account always has a large monthly fee.", answer: false },
      { text: "Ms. Reyes gives Derek a small pamphlet.", answer: true },
      { text: "Derek asks no further questions at all.", answer: false },
      { text: "Derek begins to feel confident about his choice.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Reyes asks how much money I want to put into my new account today.",
        jumbled: ["much", "account", "Reyes", "want", "money", "today.", "Ms.", "to", "asks", "put", "I", "how", "new", "into", "my"],
      },
      {
        target: "I take out the cash I brought and count it carefully on the counter.",
        jumbled: ["out", "the", "the", "on", "count", "it", "take", "brought", "counter.", "and", "cash", "carefully", "I", "I"],
      },
      {
        target: "“Derek, this account has no monthly fee if you keep a small amount inside it,” she explains.",
        jumbled: ["“Derek,", "has", "keep", "this", "you", "she", "small", "monthly", "amount", "no", "account", "a", "inside", "explains.", "if", "fee", "it,”"],
      },
      {
        target: "She also gives me a small pamphlet with more information to read later.",
        jumbled: ["gives", "to", "information", "a", "later.", "pamphlet", "small", "also", "more", "with", "me", "She", "read"],
      },
      {
        target: "She answers everything patiently, and I begin to feel confident about my choice.",
        jumbled: ["about", "feel", "my", "answers", "begin", "everything", "I", "choice.", "patiently,", "and", "to", "She", "confident"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning new information that helped you.",
    mySentenceExample: "Learning about the fee helped me choose the right account.",
  },
  {
    number: 7,
    title: "Getting a New Card",
    image: null,
    imageNote: "Ms. Reyes handing Derek a new debit card across the counter, Derek smiling and holding it carefully.",
    story:
      "After completing the paperwork, Ms. Reyes tells me my account is officially open now. She explains that a debit card will arrive by mail within one week. To my surprise, she also gives me a temporary card I can use right away today. I hold the small plastic card carefully, feeling excited about this new step. “Remember to set a secret number for it later, Derek,” she reminds me kindly. I nod and put the card safely into my wallet. This whole process feels much easier than I expected it to be earlier this morning.",
    questions: [
      { text: "What does Ms. Reyes tell Derek about his account?", answer: "That it is officially open." },
      { text: "What does Ms. Reyes give Derek to use today?", answer: "A temporary card." },
      { text: "What does Ms. Reyes remind Derek to do?", answer: "Set a secret number for it later." },
    ],
    trueFalse: [
      { text: "Derek's account is officially open now.", answer: true },
      { text: "The permanent card arrives immediately with no wait.", answer: false },
      { text: "Ms. Reyes gives Derek a temporary card today.", answer: true },
      { text: "Ms. Reyes reminds Derek to set a secret number.", answer: true },
      { text: "This process feels harder than Derek expected.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Reyes tells me my account is officially open now.",
        jumbled: ["open", "me", "account", "tells", "Reyes", "my", "now.", "is", "officially", "Ms."],
      },
      {
        target: "She explains that a debit card will arrive by mail within one week.",
        jumbled: ["mail", "within", "arrive", "a", "one", "week.", "will", "explains", "that", "debit", "She", "card", "by"],
      },
      {
        target: "To my surprise, she also gives me a temporary card I can use right away today.",
        jumbled: ["today.", "a", "she", "gives", "me", "my", "temporary", "I", "card", "use", "can", "To", "away", "right", "also", "surprise,"],
      },
      {
        target: "“Remember to set a secret number for it later, Derek,” she reminds me kindly.",
        jumbled: ["to", "later,", "reminds", "kindly.", "she", "it", "number", "Derek,”", "“Remember", "me", "set", "secret", "for", "a"],
      },
      {
        target: "This whole process feels much easier than I expected it to be earlier this morning.",
        jumbled: ["this", "feels", "whole", "earlier", "be", "it", "This", "than", "process", "much", "morning.", "to", "expected", "easier", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about completing a task that felt easier than expected.",
    mySentenceExample: "Fixing my bike felt easier than I expected once I started.",
  },
  {
    number: 8,
    title: "A Few Last Questions",
    image: null,
    imageNote: "Derek pointing at a phone app screen while Ms. Reyes explains something, both looking at the small screen together at the counter.",
    story:
      "Before leaving, I ask Ms. Reyes about the bank's mobile app on my phone. She shows me how to download it and explains the basic features clearly. I can check my balance, send money, and see recent activity right from my phone. This makes managing my account much more convenient for my busy schedule. She also tells me about the bank's hours and where to find help if needed. “Good luck with everything, Derek,” she says. I thank her sincerely for her patience and clear explanations today. Standing up from the chair, I feel proud of completing this important task successfully.",
    questions: [
      { text: "What does Derek ask about before leaving?", answer: "The bank's mobile app." },
      { text: "What can Derek do with the mobile app?", answer: "Check his balance, send money, and see recent activity." },
      { text: "How does Derek feel about completing this task?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Derek asks about the bank's mobile app.", answer: true },
      { text: "The app lets Derek check his balance.", answer: true },
      { text: "Ms. Reyes refuses to explain the app.", answer: false },
      { text: "Derek thanks Ms. Reyes for her patience.", answer: true },
      { text: "Derek feels disappointed about completing this task.", answer: false },
    ],
    buildSentence: [
      {
        target: "I ask Ms. Reyes about the bank's mobile app on my phone.",
        jumbled: ["the", "on", "Reyes", "bank's", "phone.", "my", "I", "about", "mobile", "ask", "Ms.", "app"],
      },
      {
        target: "I can check my balance, send money, and see recent activity right from my phone.",
        jumbled: ["activity", "from", "and", "I", "send", "my", "right", "recent", "check", "my", "balance,", "see", "can", "money,", "phone."],
      },
      {
        target: "This makes managing my account much more convenient for my busy schedule.",
        jumbled: ["managing", "convenient", "my", "busy", "account", "much", "makes", "for", "my", "more", "This", "schedule."],
      },
      {
        target: "She also tells me about the bank's hours and where to find help if needed.",
        jumbled: ["where", "and", "about", "She", "help", "hours", "also", "the", "needed.", "find", "if", "bank's", "to", "me", "tells"],
      },
      {
        target: "Standing up from the chair, I feel proud of completing this important task successfully.",
        jumbled: ["this", "of", "up", "chair,", "I", "successfully.", "task", "Standing", "from", "completing", "proud", "feel", "important", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about using an app to make your life easier.",
    mySentenceExample: "I use an app to check my bus schedule every morning.",
  },
  {
    number: 9,
    title: "Leaving the Bank",
    image: null,
    imageNote: "Derek walking out of the bank's glass doors, checking his wallet with the new card visible, sunshine outside.",
    story:
      "I say goodbye to Ms. Reyes and walk toward the bank's large glass doors. Outside, the sun feels warm on my face after sitting inside for almost an hour. I check my wallet one more time to make sure my new card is safely inside. My folder is now empty since I gave all my papers to Ms. Reyes earlier. Walking to my car, I think, “Derek, you did it.” I feel a small sense of accomplishment about this simple errand. It seemed complicated this morning, but it turned out to be manageable after all. I already feel ready to use my new account soon.",
    questions: [
      { text: "How does the sun feel to Derek outside?", answer: "Warm." },
      { text: "What does Derek check in his wallet?", answer: "That his new card is safely inside." },
      { text: "How does Derek feel about the errand now?", answer: "A small sense of accomplishment -- manageable after all." },
    ],
    trueFalse: [
      { text: "The sun feels warm on Derek's face.", answer: true },
      { text: "Derek forgets to check his wallet.", answer: false },
      { text: "Derek's folder is now empty.", answer: true },
      { text: "Derek feels a small sense of accomplishment.", answer: true },
      { text: "Derek thinks the errand was impossible to finish.", answer: false },
    ],
    buildSentence: [
      {
        target: "I say goodbye to Ms. Reyes and walk toward the bank's large glass doors.",
        jumbled: ["Reyes", "Ms.", "large", "the", "glass", "walk", "say", "doors.", "and", "to", "toward", "I", "goodbye", "bank's"],
      },
      {
        target: "I check my wallet one more time to make sure my new card is safely inside.",
        jumbled: ["my", "my", "safely", "I", "time", "wallet", "card", "new", "make", "sure", "inside.", "check", "one", "is", "more", "to"],
      },
      {
        target: "My folder is now empty since I gave all my papers to Ms. Reyes earlier.",
        jumbled: ["I", "all", "to", "papers", "Reyes", "gave", "folder", "My", "empty", "Ms.", "is", "my", "since", "earlier.", "now"],
      },
      {
        target: "I feel a small sense of accomplishment about this simple errand.",
        jumbled: ["of", "I", "a", "accomplishment", "this", "about", "small", "sense", "feel", "errand.", "simple"],
      },
      {
        target: "It seemed complicated this morning, but it turned out to be manageable after all.",
        jumbled: ["complicated", "to", "this", "manageable", "be", "but", "turned", "It", "seemed", "all.", "after", "morning,", "it", "out"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an errand that felt easier than you thought.",
    mySentenceExample: "Renewing my ID felt easier than I thought it would be.",
  },
  {
    number: 10,
    title: "My New Account",
    image: null,
    imageNote: "Derek sitting at home, checking his new bank app on his phone with a satisfied smile, the temporary card resting on the table.",
    story:
      "That evening, I sit on my couch and open the new banking app on my phone. I log in for the first time, and the screen shows, “Welcome, Derek!” I see my new account clearly below it. It feels strange but exciting to see my own account after only one visit today. I remember how nervous I felt this morning before going to the bank. Looking back, the whole process was much simpler than I imagined it would be. Ms. Reyes explained everything clearly and made the visit feel comfortable and easy. Next week, my paycheck will go directly into this new account.",
    questions: [
      { text: "What does Derek do that evening?", answer: "Opens the new banking app on his phone." },
      { text: "How does Derek feel seeing his account for the first time?", answer: "Strange but exciting." },
      { text: "What will happen with Derek's paycheck next week?", answer: "It will go directly into the new account." },
    ],
    trueFalse: [
      { text: "Derek opens the new banking app that evening.", answer: true },
      { text: "Derek feels nothing seeing his new account.", answer: false },
      { text: "The whole process was much simpler than expected.", answer: true },
      { text: "Ms. Reyes made the visit feel confusing and hard.", answer: false },
      { text: "Derek's paycheck will go into this new account.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, I sit on my couch and open the new banking app on my phone.",
        jumbled: ["the", "I", "couch", "on", "sit", "open", "banking", "evening,", "my", "new", "on", "my", "That", "and", "app", "phone."],
      },
      {
        target: "I log in for the first time, and the screen shows, “Welcome, Derek!”",
        jumbled: ["“Welcome,", "first", "and", "the", "shows,", "the", "Derek!”", "screen", "for", "log", "in", "I", "time,"],
      },
      {
        target: "It feels strange but exciting to see my own account after only one visit today.",
        jumbled: ["but", "to", "own", "exciting", "today.", "strange", "It", "feels", "visit", "account", "only", "see", "after", "my", "one"],
      },
      {
        target: "Looking back, the whole process was much simpler than I imagined it would be.",
        jumbled: ["was", "be.", "than", "much", "simpler", "I", "back,", "it", "would", "process", "whole", "the", "Looking", "imagined"],
      },
      {
        target: "Ms. Reyes explained everything clearly and made the visit feel comfortable and easy.",
        jumbled: ["everything", "the", "explained", "clearly", "Reyes", "made", "and", "visit", "Ms.", "easy.", "and", "feel", "comfortable"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a task that turned out simpler than you expected.",
    mySentenceExample: "Getting my ID renewed was simpler than I expected it to be.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
