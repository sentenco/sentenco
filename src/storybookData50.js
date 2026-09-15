// B1 Teens digital storybook, Book 50: "Organizing a Fundraiser"
// Static content -- no Supabase. Second book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook50/cover.jpg";

export const STORYBOOK_TITLE = "Organizing a Fundraiser";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Amir standing in front of a bulletin board covered in fundraiser flyers, holding a clipboard, determined expression, school hallway visible around him.";

export const CHARACTERS = [
  { name: "Amir", role: "The narrator, a teenager", look: "Glasses, hoodie, organized but easily overwhelmed under pressure." },
  { name: "Lena", role: "Amir's classmate and fundraiser partner", look: "Braided hair, denim jacket, practical and encouraging." },
  { name: "Mr. Okafor", role: "The teacher supervising the fundraiser", look: "Cardigan, calm demeanor, supportive but hands-off." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A School in Need",
    image: null,
    imageNote: "Amir standing in a school library with damaged, worn-out books stacked on a cart, looking thoughtfully at the collection.",
    story:
      "During library club, I notice how many of our books are falling apart, with torn pages and broken spines everywhere. When I ask the librarian about replacing them, she explains that the school simply doesn't have the budget this year. This bothers me more than I expected, since I've always loved this library since I was younger. If nobody does something, these books will just keep getting worse until students can't use them properly anymore. I mention this to Lena at lunch, and she immediately suggests we organize a fundraiser ourselves. “We could actually do this, Amir,” she says, already sounding sure of it. The idea feels ambitious, but something about it also feels genuinely worth trying.",
    questions: [
      { text: "What does Amir notice about the library books?", answer: "They're falling apart, with torn pages and broken spines." },
      { text: "What does the librarian say about the budget?", answer: "That the school doesn't have the budget this year." },
      { text: "What does Lena suggest at lunch?", answer: "Organizing a fundraiser." },
    ],
    trueFalse: [
      { text: "Amir notices many books are falling apart.", answer: true },
      { text: "The librarian says the school has plenty of budget.", answer: false },
      { text: "Amir has always loved the library.", answer: true },
      { text: "Lena suggests organizing a fundraiser.", answer: true },
      { text: "Amir feels this idea is not worth trying.", answer: false },
    ],
    buildSentence: [
      {
        target: "During library club, I notice how many of our books are falling apart, with torn pages and broken spines everywhere.",
        jumbled: ["pages", "I", "falling", "apart,", "many", "spines", "everywhere.", "books", "club,", "our", "notice", "broken", "are", "library", "and", "torn", "of", "with", "how", "During"],
      },
      {
        target: "She explains that the school simply doesn't have the budget this year.",
        jumbled: ["have", "She", "simply", "this", "the", "the", "that", "doesn't", "year.", "budget", "explains", "school"],
      },
      {
        target: "These books will just keep getting worse until students can't use them properly anymore.",
        jumbled: ["worse", "until", "books", "can't", "anymore.", "them", "use", "getting", "properly", "just", "will", "keep", "students", "These"],
      },
      {
        target: "I mention this to Lena at lunch, and she immediately suggests we organize a fundraiser ourselves.",
        jumbled: ["immediately", "lunch,", "mention", "fundraiser", "she", "ourselves.", "a", "this", "I", "organize", "Lena", "and", "at", "to", "we", "suggests"],
      },
      {
        target: "“We could actually do this, Amir,” she says, already sounding sure of it.",
        jumbled: ["could", "sounding", "of", "sure", "she", "“We", "this,", "already", "it.", "says,", "actually", "Amir,”", "do"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a problem you noticed that you wanted to fix.",
    mySentenceExample: "I noticed a problem with litter and wanted to organize a cleanup.",
  },
  {
    number: 2,
    title: "Getting Permission",
    image: null,
    imageNote: "Amir and Lena standing in front of Mr. Okafor's desk, presenting a written proposal, the teacher reading it thoughtfully.",
    story:
      "Before starting anything, Lena and I know we need permission from a teacher to organize this properly. We write a short proposal explaining our goal and bring it to Mr. Okafor after class. He reads it carefully, asking several questions about our plan and how we intend to collect donations. “If you're serious about this, Amir, I'll support you, but you'll need to handle most of the organizing yourselves,” he says. I feel a mix of excitement and nervousness, since neither of us has organized something like this before. Lena squeezes my arm reassuringly, reminding me that we can figure out the details together as we go.",
    questions: [
      { text: "What do Amir and Lena bring to Mr. Okafor?", answer: "A short proposal." },
      { text: "What does Mr. Okafor ask about?", answer: "Their plan and how they intend to collect donations." },
      { text: "What does Mr. Okafor say he will do?", answer: "Support them, but they'll need to organize it themselves." },
    ],
    trueFalse: [
      { text: "Amir and Lena write a proposal.", answer: true },
      { text: "Mr. Okafor refuses to even read their proposal.", answer: false },
      { text: "Mr. Okafor asks about their plan and donations.", answer: true },
      { text: "Mr. Okafor says he will support them.", answer: true },
      { text: "Amir feels no nervousness about this at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "Lena and I know we need permission from a teacher to organize this properly.",
        jumbled: ["properly.", "I", "this", "teacher", "organize", "know", "and", "to", "permission", "Lena", "from", "a", "we", "need"],
      },
      {
        target: "We write a short proposal explaining our goal and bring it to Mr. Okafor after class.",
        jumbled: ["explaining", "it", "goal", "class.", "after", "and", "Mr.", "a", "our", "bring", "We", "proposal", "Okafor", "to", "short", "write"],
      },
      {
        target: "He reads it carefully, asking several questions about our plan and how we intend to collect donations.",
        jumbled: ["how", "He", "plan", "collect", "questions", "it", "intend", "to", "several", "our", "reads", "and", "we", "asking", "about", "carefully,", "donations."],
      },
      {
        target: "“If you're serious about this, Amir, I'll support you, but you'll need to handle most of the organizing yourselves,” he says.",
        jumbled: ["handle", "need", "organizing", "but", "Amir,", "serious", "the", "most", "you're", "about", "yourselves,”", "of", "says.", "I'll", "he", "support", "you,", "you'll", "to", "this,", "“If"],
      },
      {
        target: "I feel a mix of excitement and nervousness, since neither of us has organized something like this before.",
        jumbled: ["of", "this", "feel", "I", "like", "excitement", "since", "before.", "a", "and", "organized", "has", "of", "nervousness,", "something", "us", "neither", "mix"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about asking someone for permission to do something.",
    mySentenceExample: "I asked my teacher for permission to start a school club.",
  },
  {
    number: 3,
    title: "Choosing a Plan",
    image: null,
    imageNote: "Amir and Lena sitting at a table covered in sticky notes, brainstorming different fundraiser ideas, both looking focused and animated.",
    story:
      "That weekend, Lena and I meet to brainstorm what kind of fundraiser would actually work for our school. We consider a bake sale, but Lena points out that several clubs already do that every semester. Instead, we decide on a talent show, charging a small entry fee for both performers and audience members. Although we've never organized an event this large, we figure the excitement might attract more donations than a simple sale would. We divide our tasks carefully: I'll handle the venue and equipment, while Lena manages sign-ups and publicity. By the end of our meeting, our sticky-note wall looks chaotic, but our plan finally feels solid. “We've actually got this, Amir,” Lena says, grinning at the mess of notes.",
    questions: [
      { text: "What event do Amir and Lena decide on?", answer: "A talent show." },
      { text: "Why do they avoid a bake sale?", answer: "Because several clubs already do that every semester." },
      { text: "How do they divide their tasks?", answer: "Amir handles venue and equipment, Lena manages sign-ups and publicity." },
    ],
    trueFalse: [
      { text: "Amir and Lena decide on a talent show.", answer: true },
      { text: "They avoid a bake sale because other clubs already do one.", answer: true },
      { text: "Amir will handle sign-ups and publicity.", answer: false },
      { text: "Lena manages sign-ups and publicity.", answer: true },
      { text: "Their plan feels completely unclear by the end.", answer: false },
    ],
    buildSentence: [
      {
        target: "That weekend, Lena and I meet to brainstorm what kind of fundraiser would actually work for our school.",
        jumbled: ["for", "Lena", "meet", "brainstorm", "and", "our", "kind", "weekend,", "of", "work", "what", "school.", "to", "fundraiser", "That", "I", "actually", "would"],
      },
      {
        target: "We consider a bake sale, but Lena points out that several clubs already do that every semester.",
        jumbled: ["consider", "points", "that", "semester.", "out", "a", "do", "several", "sale,", "already", "We", "bake", "every", "clubs", "Lena", "that", "but"],
      },
      {
        target: "We figure the excitement might attract more donations than a simple sale would.",
        jumbled: ["excitement", "more", "sale", "attract", "donations", "figure", "a", "the", "than", "might", "simple", "We", "would."],
      },
      {
        target: "We divide our tasks carefully: I'll handle the venue and equipment, while Lena manages sign-ups and publicity.",
        jumbled: ["our", "divide", "I'll", "publicity.", "the", "We", "tasks", "and", "handle", "and", "carefully:", "equipment,", "manages", "sign-ups", "while", "venue", "Lena"],
      },
      {
        target: "By the end of our meeting, our sticky-note wall looks chaotic, but our plan finally feels solid.",
        jumbled: ["our", "our", "plan", "solid.", "By", "our", "looks", "the", "meeting,", "chaotic,", "end", "sticky-note", "finally", "feels", "of", "but", "wall"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about dividing tasks with someone on a project.",
    mySentenceExample: "We divided our tasks so each person handled a different part.",
  },
  {
    number: 4,
    title: "Spreading the Word",
    image: null,
    imageNote: "Amir hanging colorful flyers on a school bulletin board while Lena posts about the event on a laptop nearby, both looking busy and focused.",
    story:
      "With our plan set, Lena and I spend the next week spreading the word throughout school as widely as possible. I design and print flyers, hanging them near the cafeteria, gym, and main entrance where everyone passes daily. Lena creates a sign-up sheet online and shares it through every class group chat she can access. We also ask teachers if we can make short morning announcements about the event and our cause. Some students seem enthusiastic immediately, while others walk past our flyers without even glancing at them. Despite the mixed reactions, five acts sign up within just the first two days, which honestly surprises us both. “Five already, Amir, and it's only been two days,” Lena texts me, clearly thrilled.",
    questions: [
      { text: "What does Amir do to spread the word?", answer: "Designs and prints flyers." },
      { text: "What does Lena create online?", answer: "A sign-up sheet." },
      { text: "How many acts sign up within the first two days?", answer: "Five." },
    ],
    trueFalse: [
      { text: "Amir designs and prints flyers.", answer: true },
      { text: "Lena creates a sign-up sheet online.", answer: true },
      { text: "Every single student reacts enthusiastically to the flyers.", answer: false },
      { text: "Five acts sign up within the first two days.", answer: true },
      { text: "Amir and Lena feel unsurprised by the response.", answer: false },
    ],
    buildSentence: [
      {
        target: "With our plan set, Lena and I spend the next week spreading the word throughout school as widely as possible.",
        jumbled: ["the", "as", "possible.", "Lena", "next", "word", "our", "and", "set,", "spreading", "week", "plan", "spend", "With", "throughout", "widely", "I", "school", "as", "the"],
      },
      {
        target: "I design and print flyers, hanging them near the cafeteria, gym, and main entrance where everyone passes daily.",
        jumbled: ["and", "passes", "daily.", "everyone", "gym,", "them", "design", "cafeteria,", "entrance", "the", "print", "and", "flyers,", "near", "hanging", "main", "I", "where"],
      },
      {
        target: "Lena creates a sign-up sheet online and shares it through every class group chat she can access.",
        jumbled: ["it", "she", "a", "sign-up", "every", "chat", "online", "group", "and", "Lena", "class", "access.", "sheet", "shares", "creates", "can", "through"],
      },
      {
        target: "Some students seem enthusiastic immediately, while others walk past our flyers without even glancing at them.",
        jumbled: ["immediately,", "walk", "flyers", "Some", "glancing", "seem", "past", "our", "students", "at", "while", "them.", "others", "without", "even", "enthusiastic"],
      },
      {
        target: "Despite the mixed reactions, five acts sign up within just the first two days, which honestly surprises us both.",
        jumbled: ["the", "us", "five", "both.", "first", "Despite", "the", "two", "sign", "up", "mixed", "within", "days,", "surprises", "acts", "just", "reactions,", "honestly", "which"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about spreading the word about an event or cause.",
    mySentenceExample: "I spread the word about our fundraiser through social media.",
  },
  {
    number: 5,
    title: "A Setback",
    image: null,
    imageNote: "Amir looking worried at his phone, reading a message that the school gym is unavailable, Lena standing nearby with a concerned expression.",
    story:
      "Ten days before the show, I receive a message that the gym has been double-booked for a sports event instead. Panic rushes through me immediately, since we had already promised performers a specific date and location. If we cancel now, all the momentum we've built over the past week would completely disappear. I call Lena right away, and although she sounds worried too, she stays remarkably calm about the situation. “Let's ask Mr. Okafor if the cafeteria could work instead, Amir,” she suggests, already thinking practically. I hadn't even considered that option, but suddenly it seems like exactly the solution we desperately need.",
    questions: [
      { text: "What message does Amir receive ten days before the show?", answer: "That the gym has been double-booked." },
      { text: "What does Amir worry might happen if they cancel?", answer: "That all their momentum would disappear." },
      { text: "What does Lena suggest instead?", answer: "Asking if the cafeteria could work." },
    ],
    trueFalse: [
      { text: "The gym has been double-booked for a sports event.", answer: true },
      { text: "Amir feels completely calm about this news.", answer: false },
      { text: "Lena suggests using the cafeteria instead.", answer: true },
      { text: "Amir had already considered using the cafeteria.", answer: false },
      { text: "Lena stays remarkably calm about the situation.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ten days before the show, I receive a message that the gym has been double-booked for a sports event instead.",
        jumbled: ["days", "double-booked", "that", "event", "gym", "before", "message", "I", "instead.", "for", "Ten", "the", "show,", "the", "a", "has", "been", "a", "sports", "receive"],
      },
      {
        target: "Panic rushes through me immediately, since we had already promised performers a specific date and location.",
        jumbled: ["Panic", "through", "date", "already", "rushes", "since", "had", "we", "immediately,", "location.", "performers", "specific", "and", "promised", "me", "a"],
      },
      {
        target: "All the momentum we've built over the past week would completely disappear.",
        jumbled: ["disappear.", "built", "past", "we've", "the", "All", "completely", "momentum", "week", "the", "over", "would"],
      },
      {
        target: "I call Lena right away, and although she sounds worried too, she stays remarkably calm about the situation.",
        jumbled: ["although", "call", "too,", "I", "situation.", "remarkably", "she", "the", "worried", "about", "stays", "calm", "she", "right", "sounds", "Lena", "and", "away,"],
      },
      {
        target: "I hadn't even considered that option, but suddenly it seems like exactly the solution we desperately need.",
        jumbled: ["considered", "we", "even", "hadn't", "like", "but", "I", "seems", "solution", "desperately", "it", "exactly", "that", "need.", "the", "option,", "suddenly"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about staying calm during an unexpected problem.",
    mySentenceExample: "I stayed calm when my plan suddenly changed at the last minute.",
  },
  {
    number: 6,
    title: "A New Location",
    image: null,
    imageNote: "Amir and Lena arranging chairs and a small stage area in the school cafeteria, Mr. Okafor helping move a table nearby.",
    story:
      "Mr. Okafor agrees the cafeteria could work, though it means rearranging our entire setup completely from scratch. Together, we measure the space and realize we'll need a smaller stage than originally planned for the gym. Lena redesigns the seating chart while I contact each performer to explain the sudden change of venue. Surprisingly, nobody drops out, and one performer even offers to help us build a simple platform stage. Working through this setback together, rather than separately, actually brings Lena and me closer as genuine partners. By the end of the day, exhausted but relieved, our new plan feels even more solid than before. “Told you we'd figure it out, Amir,” Lena says with a tired smile.",
    questions: [
      { text: "What does Mr. Okafor agree to?", answer: "Using the cafeteria." },
      { text: "What does Lena redesign?", answer: "The seating chart." },
      { text: "How does this setback affect Amir and Lena's partnership?", answer: "It brings them closer as genuine partners." },
    ],
    trueFalse: [
      { text: "Mr. Okafor agrees the cafeteria could work.", answer: true },
      { text: "Lena redesigns the seating chart.", answer: true },
      { text: "Every single performer drops out immediately.", answer: false },
      { text: "This setback brings Amir and Lena closer.", answer: true },
      { text: "Their new plan feels weaker than before.", answer: false },
    ],
    buildSentence: [
      {
        target: "Mr. Okafor agrees the cafeteria could work, though it means rearranging our entire setup completely from scratch.",
        jumbled: ["rearranging", "Okafor", "it", "agrees", "Mr.", "our", "work,", "could", "cafeteria", "entire", "though", "scratch.", "completely", "setup", "means", "the", "from"],
      },
      {
        target: "Together, we measure the space and realize we'll need a smaller stage than originally planned for the gym.",
        jumbled: ["we'll", "and", "for", "measure", "space", "we", "originally", "planned", "need", "the", "the", "smaller", "a", "stage", "than", "realize", "Together,", "gym."],
      },
      {
        target: "Lena redesigns the seating chart while I contact each performer to explain the sudden change of venue.",
        jumbled: ["the", "contact", "performer", "each", "chart", "sudden", "to", "I", "of", "while", "redesigns", "venue.", "Lena", "the", "explain", "change", "seating"],
      },
      {
        target: "Working through this setback together, rather than separately, actually brings Lena and me closer as genuine partners.",
        jumbled: ["than", "genuine", "as", "rather", "me", "closer", "together,", "setback", "Working", "actually", "and", "partners.", "brings", "Lena", "separately,", "through", "this"],
      },
      {
        target: "By the end of the day, exhausted but relieved, our new plan feels even more solid than before.",
        jumbled: ["than", "day,", "before.", "but", "even", "end", "more", "exhausted", "the", "relieved,", "new", "the", "By", "of", "our", "plan", "feels", "solid"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about overcoming a setback together with someone.",
    mySentenceExample: "We overcame a setback together when our project plan changed suddenly.",
  },
  {
    number: 7,
    title: "The Night Before",
    image: null,
    imageNote: "Amir lying awake in bed at night, staring at the ceiling, a checklist visible on his nightstand under a small lamp.",
    story:
      "The night before the fundraiser, I lie awake, running through every possible thing that could go wrong tomorrow. What if not enough people show up, or what if the sound equipment fails during a performance? Lena had told me earlier, “Worrying won't change anything, Amir,” but my mind refuses to listen right now. I finally get up and review our checklist one more time, just to reassure myself everything is actually ready. Ticket sales have already covered nearly half our fundraising goal, which should feel more comforting than it currently does. Eventually, exhaustion wins over anxiety, and I drift into a restless, uneasy sleep before the big day.",
    questions: [
      { text: "What does Amir do the night before the fundraiser?", answer: "Reviews the checklist, lying awake worrying." },
      { text: "What had Lena told him earlier?", answer: "That worrying wouldn't change anything." },
      { text: "How much of the fundraising goal have ticket sales covered?", answer: "Nearly half." },
    ],
    trueFalse: [
      { text: "Amir lies awake worrying the night before.", answer: true },
      { text: "Lena told him worrying wouldn't change anything.", answer: true },
      { text: "Amir feels completely relaxed and confident that night.", answer: false },
      { text: "Ticket sales have covered nearly half the goal.", answer: true },
      { text: "Amir sleeps peacefully without any trouble.", answer: false },
    ],
    buildSentence: [
      {
        target: "The night before the fundraiser, I lie awake, running through every possible thing that could go wrong tomorrow.",
        jumbled: ["every", "awake,", "running", "night", "thing", "lie", "I", "through", "fundraiser,", "possible", "The", "wrong", "tomorrow.", "before", "the", "could", "that", "go"],
      },
      {
        target: "What if not enough people show up, or what if the sound equipment fails during a performance?",
        jumbled: ["up,", "the", "show", "if", "if", "what", "not", "fails", "performance?", "equipment", "What", "during", "or", "sound", "enough", "a", "people"],
      },
      {
        target: "Lena had told me earlier, “Worrying won't change anything, Amir,” but my mind refuses to listen right now.",
        jumbled: ["refuses", "had", "change", "right", "mind", "my", "anything,", "earlier,", "told", "now.", "listen", "Amir,”", "to", "but", "“Worrying", "me", "Lena", "won't"],
      },
      {
        target: "I finally get up and review our checklist one more time, just to reassure myself everything is actually ready.",
        jumbled: ["checklist", "finally", "to", "everything", "actually", "ready.", "get", "myself", "more", "review", "reassure", "I", "is", "one", "just", "up", "time,", "our", "and"],
      },
      {
        target: "Ticket sales have already covered nearly half our fundraising goal, which should feel more comforting than it currently does.",
        jumbled: ["have", "nearly", "feel", "our", "goal,", "half", "which", "currently", "Ticket", "comforting", "sales", "more", "it", "should", "fundraising", "than", "already", "covered", "does."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a night before an important event when you couldn't sleep well.",
    mySentenceExample: "I couldn't sleep well the night before my big exam.",
  },
  {
    number: 8,
    title: "Fundraiser Night",
    image: null,
    imageNote: "A cafeteria transformed with string lights and a small stage, students filling seats as Amir stands nervously near the entrance checking tickets.",
    story:
      "By six o'clock, the cafeteria looks completely transformed, with string lights and a small handmade stage in the corner. Students begin arriving steadily, and within twenty minutes, nearly every seat has someone sitting in it. Lena manages backstage while I greet guests at the door, collecting tickets and directing people to open seats. When the first performer steps onto the stage, the room erupts into supportive applause, and my nervousness slowly starts fading. Performance after performance goes smoothly, each one met with genuine enthusiasm from the packed, energetic crowd. Watching everything come together after weeks of planning feels genuinely overwhelming, in the best possible way. “Look at this, Amir,” Lena says quietly, nodding at the packed room.",
    questions: [
      { text: "How does the cafeteria look by six o'clock?", answer: "Completely transformed, with string lights and a small stage." },
      { text: "What does Amir do at the door?", answer: "Greets guests and collects tickets." },
      { text: "How does the crowd react to the performances?", answer: "With genuine enthusiasm." },
    ],
    trueFalse: [
      { text: "The cafeteria looks completely transformed by six.", answer: true },
      { text: "Nearly every seat has someone in it.", answer: true },
      { text: "Amir manages backstage during the show.", answer: false },
      { text: "The crowd reacts with genuine enthusiasm.", answer: true },
      { text: "Amir feels nothing watching it all come together.", answer: false },
    ],
    buildSentence: [
      {
        target: "By six o'clock, the cafeteria looks completely transformed, with string lights and a small handmade stage in the corner.",
        jumbled: ["the", "in", "with", "string", "a", "small", "the", "completely", "and", "By", "looks", "cafeteria", "lights", "stage", "transformed,", "corner.", "o'clock,", "six", "handmade"],
      },
      {
        target: "Students begin arriving steadily, and within twenty minutes, nearly every seat has someone sitting in it.",
        jumbled: ["begin", "nearly", "steadily,", "twenty", "in", "minutes,", "seat", "has", "within", "arriving", "every", "Students", "it.", "and", "sitting", "someone"],
      },
      {
        target: "The room erupts into supportive applause, and my nervousness slowly starts fading.",
        jumbled: ["The", "and", "slowly", "erupts", "into", "applause,", "fading.", "starts", "my", "room", "nervousness", "supportive"],
      },
      {
        target: "Performance after performance goes smoothly, each one met with genuine enthusiasm from the packed, energetic crowd.",
        jumbled: ["packed,", "after", "performance", "each", "one", "genuine", "Performance", "goes", "crowd.", "with", "enthusiasm", "the", "energetic", "from", "smoothly,", "met"],
      },
      {
        target: "Watching everything come together after weeks of planning feels genuinely overwhelming, in the best possible way.",
        jumbled: ["together", "planning", "everything", "feels", "the", "Watching", "after", "overwhelming,", "weeks", "best", "possible", "of", "genuinely", "way.", "come", "in"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about watching something you planned finally come together.",
    mySentenceExample: "Watching our project come together after weeks of work felt amazing.",
  },
  {
    number: 9,
    title: "Counting the Donations",
    image: null,
    imageNote: "Amir and Lena sitting at a table after the event, counting money and tickets together, both looking exhausted but excited.",
    story:
      "After the last performer bows and the crowd slowly filters out, Lena and I sit down to count everything we raised tonight. Ticket sales, plus a few generous extra donations, add up to more money than either of us had honestly expected. When we reach the final total, we look at each other, both too stunned to speak for a moment. “We actually did this, Amir,” Lena finally says, her voice filled with disbelief and quiet pride. I think about the worn-out library books that started this whole idea just a few weeks ago. Tomorrow, we'll present the total to Mr. Okafor and the librarian, but tonight, we simply celebrate quietly together.",
    questions: [
      { text: "What do Amir and Lena do after the show ends?", answer: "Sit down to count everything they raised." },
      { text: "How does the total compare to what they expected?", answer: "More than either had expected." },
      { text: "What does Lena say when they reach the final total?", answer: "We actually did this." },
    ],
    trueFalse: [
      { text: "Amir and Lena count everything they raised.", answer: true },
      { text: "The total raised is less than they expected.", answer: false },
      { text: "Lena says we actually did this.", answer: true },
      { text: "Amir thinks about the worn-out library books.", answer: true },
      { text: "They plan to present the total tomorrow.", answer: true },
    ],
    buildSentence: [
      {
        target: "Lena and I sit down to count everything we raised tonight.",
        jumbled: ["to", "and", "Lena", "count", "I", "tonight.", "raised", "sit", "we", "down", "everything"],
      },
      {
        target: "Ticket sales, plus a few generous extra donations, add up to more money than either of us had honestly expected.",
        jumbled: ["than", "either", "expected.", "Ticket", "of", "us", "money", "generous", "sales,", "to", "donations,", "up", "extra", "had", "honestly", "few", "more", "a", "add", "plus"],
      },
      {
        target: "We look at each other, both too stunned to speak for a moment.",
        jumbled: ["look", "to", "for", "a", "stunned", "moment.", "each", "at", "too", "speak", "We", "other,", "both"],
      },
      {
        target: "“We actually did this, Amir,” Lena finally says, her voice filled with disbelief and quiet pride.",
        jumbled: ["says,", "her", "and", "disbelief", "this,", "voice", "did", "“We", "actually", "filled", "pride.", "quiet", "Lena", "with", "Amir,”", "finally"],
      },
      {
        target: "Tomorrow, we'll present the total to Mr. Okafor and the librarian, but tonight, we simply celebrate quietly together.",
        jumbled: ["librarian,", "Okafor", "present", "simply", "we'll", "tonight,", "quietly", "the", "Tomorrow,", "to", "Mr.", "we", "together.", "total", "but", "celebrate", "and", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a moment when hard work finally paid off.",
    mySentenceExample: "My hard work finally paid off when I saw my final grade.",
  },
  {
    number: 10,
    title: "New Books for the Library",
    image: null,
    imageNote: "Amir and Lena standing in the library, helping the librarian unbox brand-new books, both smiling proudly at the shelf.",
    story:
      "Two weeks later, boxes of brand-new books arrive at the library, purchased entirely with the money we raised together. The librarian nearly cries when she sees the collection, thanking Amir and Lena repeatedly for their thoughtful effort. Helping unpack and shelve the books feels even more satisfying than the fundraiser night itself somehow. Several classmates who attended the show now stop by regularly, asking when the next fundraiser might happen. I never expected that noticing a small problem could lead to something this meaningful and lasting. If I hadn't mentioned those torn pages to Lena, none of this would have happened at all.",
    questions: [
      { text: "What arrives at the library two weeks later?", answer: "Boxes of brand-new books." },
      { text: "How does the librarian react?", answer: "She nearly cries, thanking them repeatedly." },
      { text: "What do several classmates ask Amir now?", answer: "When the next fundraiser might happen." },
    ],
    trueFalse: [
      { text: "Boxes of brand-new books arrive two weeks later.", answer: true },
      { text: "The librarian feels nothing about this gift.", answer: false },
      { text: "Classmates ask when the next fundraiser might happen.", answer: true },
      { text: "Amir never expected this to become so meaningful.", answer: true },
      { text: "Amir regrets mentioning the torn pages to Lena.", answer: false },
    ],
    buildSentence: [
      {
        target: "Two weeks later, boxes of brand-new books arrive at the library, purchased entirely with the money we raised together.",
        jumbled: ["with", "at", "weeks", "together.", "we", "arrive", "library,", "brand-new", "boxes", "entirely", "later,", "of", "the", "raised", "the", "books", "Two", "purchased", "money"],
      },
      {
        target: "The librarian nearly cries when she sees the collection, thanking Amir and Lena repeatedly for their thoughtful effort.",
        jumbled: ["and", "Amir", "she", "cries", "effort.", "sees", "thoughtful", "the", "thanking", "collection,", "when", "for", "Lena", "their", "repeatedly", "The", "librarian", "nearly"],
      },
      {
        target: "Helping unpack and shelve the books feels even more satisfying than the fundraiser night itself somehow.",
        jumbled: ["than", "feels", "the", "the", "somehow.", "unpack", "Helping", "fundraiser", "night", "more", "itself", "books", "satisfying", "and", "even", "shelve"],
      },
      {
        target: "Several classmates who attended the show now stop by regularly, asking when the next fundraiser might happen.",
        jumbled: ["show", "classmates", "when", "attended", "might", "the", "stop", "who", "Several", "by", "next", "fundraiser", "asking", "regularly,", "the", "happen.", "now"],
      },
      {
        target: "None of this would have happened at all.",
        jumbled: ["this", "have", "at", "happened", "None", "all.", "of", "would"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small action that led to a bigger, meaningful result.",
    mySentenceExample: "A small idea I shared led to a meaningful project at my school.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
