// A1 Teens digital storybook, Book 21: "My First Part-Time Job"
// Static content -- no Supabase, mirrors the pattern in storybookData.js
// through storybookData6.js (the original Teens track). Seventh Teens
// book. Uses the Teens-track pattern: 5 True/False and 5 Build-a-Sentence
// per chapter, Build-a-Sentence items ordered shortest-to-longest.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook21/cover.jpg";

export const STORYBOOK_TITLE = "My First Part-Time Job";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Kayla standing proudly behind the counter of a small, cozy bookshop, coworker Josh smiling beside her, shelves of books and a warm reading corner in the background.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Kayla", role: "The narrator, a teen starting her first job", look: "Long hair in a low ponytail, casual cardigan, nervous-but-eager expression at first." },
  { name: "Mr. Dizon", role: "The bookshop owner", look: "Middle-aged, glasses, cardigan over a collared shirt, warm and patient." },
  { name: "Josh", role: "Kayla's coworker at the bookshop", look: "Short curly hair, bookshop apron, friendly and easygoing." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Job Interview",
    image: null,
    imageNote: "Kayla standing nervously in front of a small bookshop, looking at a 'Part-time helper wanted' sign in the window, Mr. Dizon visible smiling inside.",
    story:
      "This week, I see a sign in the bookshop window that says, “Part-time helper wanted.” I feel nervous, but I decide to ask about the job. Inside, a kind man introduces himself as Mr. Dizon, the shop owner. He asks me simple questions about school and why I want to work. I tell him I love books and I want to earn my own money. Mr. Dizon smiles and says, “I like your energy, Kayla.” He asks me to come back on Saturday to start training. I walk home feeling proud that I did not give up my nerves. My first job interview goes better than I ever expected.",
    questions: [
      { text: "Where does Kayla see the sign?", answer: "In the bookshop window." },
      { text: "What does Mr. Dizon ask Kayla?", answer: "Simple questions about school and why she wants to work." },
      { text: "How does Kayla feel walking home?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Kayla sees a sign in the bookshop window.", answer: true },
      { text: "Kayla feels nothing before the interview.", answer: false },
      { text: "Mr. Dizon asks Kayla to start on Saturday.", answer: true },
      { text: "Kayla says she does not like books.", answer: false },
      { text: "Kayla feels proud walking home.", answer: true },
    ],
    buildSentence: [
      {
        target: "This week, I see a sign in the bookshop window that says, “Part-time helper wanted.”",
        jumbled: ["“Part-time", "see", "sign", "week,", "that", "helper", "bookshop", "in", "I", "the", "says,", "wanted.”", "This", "a", "window"],
      },
      {
        target: "Inside, a kind man introduces himself as Mr. Dizon, the shop owner.",
        jumbled: ["Inside,", "Mr.", "man", "a", "himself", "introduces", "kind", "Dizon,", "shop", "as", "owner.", "the"],
      },
      {
        target: "He asks me simple questions about school and why I want to work.",
        jumbled: ["want", "me", "to", "school", "and", "about", "I", "why", "simple", "work.", "He", "asks", "questions"],
      },
      {
        target: "Mr. Dizon smiles and says, “I like your energy, Kayla.” He asks me to come back on Saturday to start training.",
        jumbled: ["and", "smiles", "“I", "says,", "come", "to", "asks", "Mr.", "Dizon", "He", "back", "your", "to", "like", "Kayla.”", "energy,", "on", "me", "training.", "start", "Saturday"],
      },
      {
        target: "I walk home feeling proud that I did not give up my nerves.",
        jumbled: ["I", "home", "nerves.", "did", "that", "up", "my", "not", "feeling", "give", "I", "walk", "proud"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a job interview.",
    mySentenceExample: "I feel nervous before a job interview.",
  },
  {
    number: 2,
    title: "Starting at the Bookshop",
    image: null,
    imageNote: "Kayla and Josh standing together in the bookshop aisles, Mr. Dizon pointing out different book sections, a small café corner visible in the background.",
    story:
      "On Saturday, I arrive early at the small, cozy bookshop. Mr. Dizon shows me around and introduces me to my coworker, Josh. Josh smiles and says, “Welcome to the team, Kayla.” The shop smells like old paper and fresh coffee from the small café corner. Mr. Dizon explains where different book genres are kept on the shelves. I learn where the mystery novels, comics, and children's books are placed. Josh shows me how to greet customers with a friendly smile. By the end of the day, I already feel more comfortable in the shop. My first day at the bookshop feels like a good beginning.",
    questions: [
      { text: "Who is Kayla's coworker?", answer: "Josh." },
      { text: "What does the shop smell like?", answer: "Old paper and fresh coffee." },
      { text: "How does Kayla feel by the end of the day?", answer: "More comfortable." },
    ],
    trueFalse: [
      { text: "Josh is Kayla's coworker.", answer: true },
      { text: "The shop smells like flowers.", answer: false },
      { text: "Mr. Dizon shows Kayla around.", answer: true },
      { text: "Kayla learns where the book genres are.", answer: true },
      { text: "Kayla feels uncomfortable by the end of the day.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Saturday, I arrive early at the small, cozy bookshop.",
        jumbled: ["the", "Saturday,", "bookshop.", "small,", "arrive", "at", "early", "cozy", "I", "On"],
      },
      {
        target: "Mr. Dizon shows me around and introduces me to my coworker, Josh.",
        jumbled: ["my", "me", "coworker,", "Josh.", "and", "me", "Dizon", "shows", "around", "to", "introduces", "Mr."],
      },
      {
        target: "The shop smells like old paper and fresh coffee from the small café corner.",
        jumbled: ["and", "the", "café", "like", "small", "corner.", "coffee", "shop", "old", "paper", "smells", "The", "fresh", "from"],
      },
      {
        target: "I learn where the mystery novels, comics, and children's books are placed.",
        jumbled: ["are", "I", "comics,", "and", "the", "mystery", "children's", "where", "books", "placed.", "learn", "novels,"],
      },
      {
        target: "By the end of the day, I already feel more comfortable in the shop.",
        jumbled: ["shop.", "By", "the", "the", "already", "end", "I", "comfortable", "the", "in", "more", "day,", "of", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your first day somewhere new.",
    mySentenceExample: "My first day at work feels exciting.",
  },
  {
    number: 3,
    title: "Learning the Cash Register",
    image: null,
    imageNote: "Josh showing Kayla how to use a cash register at the bookshop counter, a customer waiting patiently nearby with two books.",
    story:
      "Today, Josh teaches me how to use the cash register carefully. “Press this button first, then scan the book,” he explains slowly. My hands feel a little shaky as I try the register myself. I scan a book, and the price shows correctly on the screen. A customer buys two books, and I count her change carefully. “You did that perfectly, Kayla,” Josh says with an encouraging smile. I feel proud that I did not make any mistakes today. By the afternoon, I can use the register without feeling nervous at all. Learning something new at work feels exciting, even when it is a little scary.",
    questions: [
      { text: "What does Josh teach Kayla?", answer: "How to use the cash register." },
      { text: "What does Kayla do for the customer?", answer: "Counts her change carefully." },
      { text: "How does Kayla feel by the afternoon?", answer: "Not nervous at all." },
    ],
    trueFalse: [
      { text: "Josh teaches Kayla the cash register.", answer: true },
      { text: "Kayla refuses to try the register.", answer: false },
      { text: "Kayla counts the customer's change.", answer: true },
      { text: "Josh says Kayla made many mistakes.", answer: false },
      { text: "Kayla feels nervous by the afternoon.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today, Josh teaches me how to use the cash register carefully.",
        jumbled: ["register", "Josh", "how", "use", "the", "to", "teaches", "carefully.", "cash", "me", "Today,"],
      },
      {
        target: "My hands feel a little shaky as I try the register myself.",
        jumbled: ["My", "as", "hands", "myself.", "little", "register", "a", "try", "shaky", "I", "feel", "the"],
      },
      {
        target: "I scan a book, and the price shows correctly on the screen.",
        jumbled: ["the", "book,", "a", "shows", "screen.", "the", "and", "on", "correctly", "I", "scan", "price"],
      },
      {
        target: "“You did that perfectly, Kayla,” Josh says with an encouraging smile.",
        jumbled: ["Kayla,”", "smile.", "perfectly,", "Josh", "“You", "says", "did", "that", "with", "an", "encouraging"],
      },
      {
        target: "Learning something new at work feels exciting, even when it is a little scary.",
        jumbled: ["when", "is", "new", "at", "a", "it", "something", "even", "feels", "scary.", "exciting,", "Learning", "work", "little"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning a new skill.",
    mySentenceExample: "I feel proud when I learn something new.",
  },
  {
    number: 4,
    title: "A Difficult Customer",
    image: null,
    imageNote: "An unhappy customer holding a torn book at the counter, Kayla looking uncertain while Josh calmly steps in to help, shelves of books in the background.",
    story:
      "This afternoon, a customer comes in with an angry look on his face. “This book has a torn page, I want my money back,” he says loudly. My heart beats fast, and I am not sure what to say. Josh notices and calmly walks over. “I've got this, Kayla,” he says, then turns to the customer. “I'm sorry about that, sir, let me get you a new copy,” Josh says kindly. The customer's face softens, and he thanks Josh for the quick help. After the customer leaves, Josh tells me it is okay to ask for help sometimes. “Every worker needs help with hard customers,” he explains gently. I feel thankful to have a kind coworker like Josh.",
    questions: [
      { text: "Why is the customer angry?", answer: "Because his book has a torn page." },
      { text: "What does Josh do to help?", answer: "Offers the customer a new copy." },
      { text: "What does Josh tell Kayla afterward?", answer: "That it's okay to ask for help sometimes." },
    ],
    trueFalse: [
      { text: "The customer's book has a torn page.", answer: true },
      { text: "Kayla handles the angry customer completely alone.", answer: false },
      { text: "Josh offers a new copy of the book.", answer: true },
      { text: "The customer stays angry at the end.", answer: false },
      { text: "Kayla feels thankful for Josh's help.", answer: true },
    ],
    buildSentence: [
      {
        target: "“This book has a torn page, I want my money back,” he says loudly.",
        jumbled: ["he", "“This", "money", "want", "book", "I", "page,", "back,”", "my", "has", "says", "loudly.", "a", "torn"],
      },
      {
        target: "My heart beats fast, and I am not sure what to say.",
        jumbled: ["beats", "and", "sure", "am", "I", "say.", "not", "My", "heart", "fast,", "what", "to"],
      },
      {
        target: "“I'm sorry about that, sir, let me get you a new copy,” Josh says kindly.",
        jumbled: ["a", "me", "you", "kindly.", "sir,", "Josh", "new", "about", "“I'm", "copy,”", "let", "sorry", "says", "get", "that,"],
      },
      {
        target: "Josh tells me it is okay to ask for help sometimes.",
        jumbled: ["tells", "Josh", "okay", "ask", "for", "help", "to", "me", "it", "is", "sometimes."],
      },
      {
        target: "“Every worker needs help with hard customers,” he explains gently.",
        jumbled: ["“Every", "help", "customers,”", "explains", "worker", "gently.", "needs", "he", "with", "hard"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about asking for help.",
    mySentenceExample: "It is okay to ask for help.",
  },
  {
    number: 5,
    title: "Organizing the Shelves",
    image: null,
    imageNote: "Kayla carefully arranging books on the mystery section shelf by author name, Josh nearby chatting with her, Mr. Dizon walking past and smiling approvingly.",
    story:
      "Today, Mr. Dizon asks me to organize the mystery book section. The shelves look messy, with books placed in the wrong order. I sort the books carefully by the author's last name. It takes a long time, but I enjoy the quiet, focused work. Josh helps me for a while and tells me fun facts about famous authors. By the end of the afternoon, the shelf looks neat and organized. Mr. Dizon walks by and says, “This looks fantastic, Kayla.” I feel a real sense of accomplishment looking at the tidy shelf. Small tasks like this make me appreciate working at the bookshop even more.",
    questions: [
      { text: "What section does Kayla organize?", answer: "The mystery book section." },
      { text: "How does Kayla sort the books?", answer: "By the author's last name." },
      { text: "What does Mr. Dizon say about the shelf?", answer: "This looks fantastic, Kayla." },
    ],
    trueFalse: [
      { text: "Kayla organizes the mystery section.", answer: true },
      { text: "The shelves are already perfectly organized.", answer: false },
      { text: "Kayla sorts books by author's last name.", answer: true },
      { text: "Josh does not help Kayla at all.", answer: false },
      { text: "Mr. Dizon says the shelf looks fantastic.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today, Mr. Dizon asks me to organize the mystery book section.",
        jumbled: ["section.", "mystery", "Today,", "to", "book", "Dizon", "asks", "the", "Mr.", "organize", "me"],
      },
      {
        target: "The shelves look messy, with books placed in the wrong order.",
        jumbled: ["books", "messy,", "placed", "order.", "the", "shelves", "in", "look", "The", "wrong", "with"],
      },
      {
        target: "Josh helps me for a while and tells me fun facts about famous authors.",
        jumbled: ["for", "famous", "authors.", "and", "fun", "facts", "about", "me", "me", "helps", "while", "tells", "Josh", "a"],
      },
      {
        target: "By the end of the afternoon, the shelf looks neat and organized.",
        jumbled: ["end", "organized.", "neat", "of", "shelf", "and", "the", "the", "afternoon,", "By", "the", "looks"],
      },
      {
        target: "Small tasks like this make me appreciate working at the bookshop even more.",
        jumbled: ["bookshop", "make", "even", "me", "tasks", "the", "working", "Small", "appreciate", "at", "like", "more.", "this"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about organizing something.",
    mySentenceExample: "I feel good when my room is organized.",
  },
  {
    number: 6,
    title: "My First Paycheck",
    image: null,
    imageNote: "Mr. Dizon handing Kayla a small envelope at the counter, Kayla smiling with pride, Josh giving her a thumbs-up nearby.",
    story:
      "At the end of my second week, Mr. Dizon hands me an envelope. Inside is my very first paycheck from my very first job. I feel a rush of pride looking at the money I earned myself. “Thank you for working so hard, Kayla,” Mr. Dizon says warmly. I decide to save most of the money for something special later. I also want to buy a small gift for my little sister. Josh congratulates me and says everyone remembers their first paycheck forever. That evening, I show my parents the envelope with a huge smile. Earning my own money for the first time feels incredibly rewarding.",
    questions: [
      { text: "What does Mr. Dizon hand Kayla?", answer: "An envelope with her first paycheck." },
      { text: "What does Kayla decide to do with the money?", answer: "Save most of it and buy a gift for her sister." },
      { text: "How does Kayla feel earning her own money?", answer: "Incredibly rewarding." },
    ],
    trueFalse: [
      { text: "Mr. Dizon hands Kayla an envelope.", answer: true },
      { text: "Kayla spends all the money right away.", answer: false },
      { text: "Kayla wants to buy her sister a gift.", answer: true },
      { text: "Josh says no one remembers their first paycheck.", answer: false },
      { text: "Kayla feels the moment is rewarding.", answer: true },
    ],
    buildSentence: [
      {
        target: "At the end of my second week, Mr. Dizon hands me an envelope.",
        jumbled: ["second", "of", "At", "end", "an", "hands", "envelope.", "me", "Mr.", "Dizon", "week,", "the", "my"],
      },
      {
        target: "I feel a rush of pride looking at the money I earned myself.",
        jumbled: ["looking", "pride", "feel", "I", "at", "money", "a", "the", "of", "earned", "myself.", "rush", "I"],
      },
      {
        target: "I decide to save most of the money for something special later.",
        jumbled: ["the", "something", "for", "special", "most", "later.", "save", "of", "I", "to", "decide", "money"],
      },
      {
        target: "I also want to buy a small gift for my little sister.",
        jumbled: ["buy", "for", "also", "little", "a", "to", "I", "small", "want", "my", "gift", "sister."],
      },
      {
        target: "That evening, I show my parents the envelope with a huge smile.",
        jumbled: ["with", "envelope", "evening,", "I", "my", "a", "show", "the", "That", "huge", "smile.", "parents"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about earning money.",
    mySentenceExample: "I feel proud when I earn my own money.",
  },
  {
    number: 7,
    title: "A Busy Saturday",
    image: null,
    imageNote: "A long line of excited readers waiting outside the bookshop for an author signing event, Kayla and Josh working quickly behind the counter.",
    story:
      "This Saturday, the bookshop is busier than I have ever seen it. A famous author visits for a book signing event in the afternoon. Long lines of excited readers wait outside the shop's front door. Josh and I work quickly, helping customers find books and get them signed. My feet feel tired from standing and walking all day long. Despite the busy chaos, I feel excited to be part of something special. Mr. Dizon thanks Josh and me for our hard work at the end. “We could not have done this without you two, Kayla and Josh,” he says gratefully. Busy days like this make working at the bookshop feel truly meaningful.",
    questions: [
      { text: "What event happens at the bookshop?", answer: "A famous author's book signing." },
      { text: "What do Josh and Kayla do all day?", answer: "Help customers find books and get them signed." },
      { text: "What does Mr. Dizon say at the end?", answer: "We could not have done this without you two." },
    ],
    trueFalse: [
      { text: "A famous author visits for a signing.", answer: true },
      { text: "The bookshop is completely empty all day.", answer: false },
      { text: "Josh and Kayla help customers all day.", answer: true },
      { text: "Kayla's feet feel fresh and rested.", answer: false },
      { text: "Mr. Dizon thanks Josh and Kayla.", answer: true },
    ],
    buildSentence: [
      {
        target: "This Saturday, the bookshop is busier than I have ever seen it.",
        jumbled: ["Saturday,", "the", "seen", "it.", "than", "ever", "have", "bookshop", "I", "busier", "This", "is"],
      },
      {
        target: "A famous author visits for a book signing event in the afternoon.",
        jumbled: ["book", "visits", "signing", "event", "famous", "the", "A", "in", "afternoon.", "author", "for", "a"],
      },
      {
        target: "Josh and I work quickly, helping customers find books and get them signed.",
        jumbled: ["I", "signed.", "books", "quickly,", "Josh", "get", "find", "and", "and", "work", "helping", "them", "customers"],
      },
      {
        target: "Despite the busy chaos, I feel excited to be part of something special.",
        jumbled: ["Despite", "to", "be", "I", "the", "something", "special.", "chaos,", "busy", "feel", "part", "excited", "of"],
      },
      {
        target: "“We could not have done this without you two, Kayla and Josh,” he says gratefully.",
        jumbled: ["says", "not", "this", "gratefully.", "he", "you", "without", "two,", "and", "“We", "could", "have", "Kayla", "Josh,”", "done"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a busy day.",
    mySentenceExample: "I feel tired after a busy day.",
  },
  {
    number: 8,
    title: "Making a Mistake",
    image: null,
    imageNote: "Kayla looking embarrassed at the register while Josh points at a small counting error on the screen, both calm and focused on fixing it together.",
    story:
      "Today, I accidentally give a customer the wrong change at the register. I do not notice my mistake until Josh checks the register later. My face turns red, and I feel embarrassed about the error. “Everyone makes mistakes, Kayla, it's how we learn,” Josh says kindly. We call the customer, who kindly returns the extra change the next day. Mr. Dizon is not angry and simply reminds me to count carefully. I feel relieved that my mistake did not cause a bigger problem. From that day, I always double-check the change before giving it to customers. Making a mistake taught me to be more careful and responsible.",
    questions: [
      { text: "What mistake does Kayla make?", answer: "She gives a customer the wrong change." },
      { text: "What does Josh say about mistakes?", answer: "Everyone makes mistakes, it's how we learn." },
      { text: "What does Kayla do differently from that day?", answer: "Always double-checks the change." },
    ],
    trueFalse: [
      { text: "Kayla gives the wrong change.", answer: true },
      { text: "Mr. Dizon gets very angry at Kayla.", answer: false },
      { text: "Josh says mistakes help us learn.", answer: true },
      { text: "The customer keeps the extra change.", answer: false },
      { text: "Kayla double-checks change from now on.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today, I accidentally give a customer the wrong change at the register.",
        jumbled: ["I", "the", "customer", "at", "register.", "Today,", "wrong", "give", "a", "the", "accidentally", "change"],
      },
      {
        target: "I do not notice my mistake until Josh checks the register later.",
        jumbled: ["do", "I", "the", "checks", "mistake", "later.", "until", "register", "notice", "not", "Josh", "my"],
      },
      {
        target: "We call the customer, who kindly returns the extra change the next day.",
        jumbled: ["kindly", "returns", "extra", "who", "day.", "the", "call", "next", "the", "customer,", "the", "We", "change"],
      },
      {
        target: "Mr. Dizon is not angry and simply reminds me to count carefully.",
        jumbled: ["reminds", "is", "me", "count", "angry", "simply", "not", "Mr.", "and", "Dizon", "to", "carefully."],
      },
      {
        target: "From that day, I always double-check the change before giving it to customers.",
        jumbled: ["change", "double-check", "day,", "I", "before", "customers.", "always", "giving", "it", "to", "From", "the", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning from a mistake.",
    mySentenceExample: "I learn from my mistakes at work.",
  },
  {
    number: 9,
    title: "Josh Becomes a Friend",
    image: null,
    imageNote: "Kayla and Josh laughing together during a quiet shift, both holding copies of the same fantasy book series, comparing covers with big smiles.",
    story:
      "After a few weeks, Josh and I talk more during our quiet shifts. We discover we both love the same fantasy book series. Josh recommends a new book, and I recommend one back to him. During our breaks, we talk about school, friends, and our favorite movies. Josh invites me to a small book club he attends after school. “You would really like it, Kayla,” he says with a warm smile. I realize that Josh is becoming more than just a coworker now. Working at the bookshop gave me a job, but also a good friend. I feel thankful for this unexpected friendship at my first job.",
    questions: [
      { text: "What do Kayla and Josh both love?", answer: "The same fantasy book series." },
      { text: "What does Josh invite Kayla to?", answer: "A small book club he attends after school." },
      { text: "What does Kayla realize about Josh?", answer: "That he is becoming more than just a coworker." },
    ],
    trueFalse: [
      { text: "Kayla and Josh love the same book series.", answer: true },
      { text: "They never talk during their shifts.", answer: false },
      { text: "Josh invites Kayla to a book club.", answer: true },
      { text: "Kayla thinks Josh is only a coworker.", answer: false },
      { text: "Kayla feels thankful for the friendship.", answer: true },
    ],
    buildSentence: [
      {
        target: "Josh and I talk more during our quiet shifts.",
        jumbled: ["quiet", "shifts.", "our", "Josh", "I", "talk", "and", "more", "during"],
      },
      {
        target: "Josh recommends a new book, and I recommend one back to him.",
        jumbled: ["recommend", "a", "and", "book,", "one", "him.", "recommends", "I", "Josh", "back", "to", "new"],
      },
      {
        target: "During our breaks, we talk about school, friends, and our favorite movies.",
        jumbled: ["we", "breaks,", "During", "and", "favorite", "our", "friends,", "movies.", "our", "about", "talk", "school,"],
      },
      {
        target: "“You would really like it, Kayla,” he says with a warm smile.",
        jumbled: ["a", "warm", "it,", "“You", "smile.", "Kayla,”", "he", "really", "would", "with", "like", "says"],
      },
      {
        target: "Working at the bookshop gave me a job, but also a good friend.",
        jumbled: ["a", "Working", "but", "job,", "me", "also", "friend.", "at", "a", "bookshop", "the", "gave", "good"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a friend from work or school.",
    mySentenceExample: "I made a good friend at my job.",
  },
  {
    number: 10,
    title: "Proud of My First Job",
    image: null,
    imageNote: "Kayla confidently closing the bookshop register at the end of the day, Josh beside her locking the front door, Mr. Dizon waving goodbye from behind the counter.",
    story:
      "It has been three months since I started working at the bookshop. I know the shelves, the register, and every regular customer's favorite genre. Mr. Dizon trusts me to close the shop on my own now. Josh and I have become close friends, not just coworkers. I remember my nervous first interview and how far I have come. “We are so proud of you, Kayla,” my parents say, proud of how responsible I have become. I saved enough money to buy my sister a special birthday gift. Working my first job taught me more than I ever expected to learn. I feel proud of the person I am becoming through this job.",
    questions: [
      { text: "How long has Kayla worked at the bookshop?", answer: "Three months." },
      { text: "What does Mr. Dizon trust Kayla to do now?", answer: "Close the shop on her own." },
      { text: "What does Kayla feel proud of?", answer: "The person she is becoming through this job." },
    ],
    trueFalse: [
      { text: "Kayla has worked there for three months.", answer: true },
      { text: "Mr. Dizon does not trust Kayla at all.", answer: false },
      { text: "Kayla and Josh become close friends.", answer: true },
      { text: "Kayla saved no money at all.", answer: false },
      { text: "Kayla feels proud of who she is becoming.", answer: true },
    ],
    buildSentence: [
      {
        target: "It has been three months since I started working at the bookshop.",
        jumbled: ["started", "I", "been", "bookshop.", "months", "three", "at", "the", "It", "since", "has", "working"],
      },
      {
        target: "I know the shelves, the register, and every regular customer's favorite genre.",
        jumbled: ["the", "and", "genre.", "every", "regular", "know", "favorite", "I", "register,", "shelves,", "the", "customer's"],
      },
      {
        target: "I remember my nervous first interview and how far I have come.",
        jumbled: ["my", "remember", "first", "and", "nervous", "have", "interview", "come.", "I", "I", "far", "how"],
      },
      {
        target: "“We are so proud of you, Kayla,” my parents say, proud of how responsible I have become.",
        jumbled: ["so", "of", "proud", "proud", "are", "say,", "of", "parents", "I", "how", "my", "you,", "have", "responsible", "become.", "“We", "Kayla,”"],
      },
      {
        target: "Working my first job taught me more than I ever expected to learn.",
        jumbled: ["my", "taught", "first", "ever", "expected", "me", "I", "job", "to", "than", "Working", "more", "learn."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you are proud of.",
    mySentenceExample: "I am proud of my first job.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
