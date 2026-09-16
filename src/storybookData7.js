// A2 Adults digital storybook, Book 7: "A Full and Good Week"
// Static content -- no Supabase, mirrors the pattern in storybookData6.js.
// Unlike Books 1-6 (teen narrators), this book's narrator, Jordan, is an
// adult office worker and stays gender-neutral throughout -- no gendered
// pronoun is ever used for Jordan in the story, only their name.
import coverImg from "./assets/storybook7/cover.jpg";

export const STORYBOOK_TITLE = "A Full and Good Week";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Jordan sitting at a desk by a big office window on a Monday morning, coffee cup nearby, city skyline visible through the window, computer screen glowing softly.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Jordan", role: "The narrator, an office worker new to the team", look: "Neutral business-casual clothing, calm and thoughtful expression, gender-neutral by design -- the story never uses a pronoun for Jordan, only their name." },
  { name: "Dan", role: "Jordan's coworker at the next desk", look: "Short hair, button-up shirt sleeves rolled up, friendly and helpful." },
  { name: "Ms. Reyes", role: "Jordan's manager", look: "Blazer, hair in a neat bun, warm but professional demeanor." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Morning at the Office",
    image: null,
    imageNote: "Jordan sitting down at a desk by a big window on the fifth floor, opening a laptop, a coworker nearby smiling and saying good morning, city view through the window.",
    story:
      "Every weekday, I wake up at six o'clock in the morning. I wash my face, get dressed, and make a cup of coffee in the kitchen. While I eat bread and eggs, I look at my phone and check the time. At seven o'clock, I leave my apartment and walk to the bus stop near my street. The bus is full, but I find a seat by the window and watch the city go by. When I arrive at the office building, I take the lift to the fifth floor. My desk is next to a big window, and my computer is already on. I sit down, put my bag under the desk, and open my email. A coworker smiles at me and says, “Good morning, Jordan,” and I smile back. As I start my work for the day, I feel calm, awake, and ready for the office.",
    questions: [
      { text: "What does Jordan drink in the kitchen?", answer: "A cup of coffee." },
      { text: "How does Jordan go to work?", answer: "By bus." },
      { text: "What does Jordan do when they sit at the desk?", answer: "Puts the bag under the desk and opens email." },
    ],
    trueFalse: [
      { text: "Jordan walks to the bus stop near the street.", answer: true },
      { text: "The desk is next to a small door.", answer: false },
      { text: "Jordan feels calm and ready at the end.", answer: true },
      { text: "Jordan drinks coffee in the kitchen.", answer: true },
      { text: "The bus is empty in the morning.", answer: false },
    ],
    buildSentence: [
      {
        target: "I wash my face, get dressed, and make a cup of coffee in the kitchen.",
        jumbled: ["a", "kitchen.", "I", "of", "get", "wash", "in", "and", "the", "cup", "make", "face,", "my", "dressed,", "coffee"],
      },
      {
        target: "At seven o'clock, I leave my apartment and walk to the bus stop near my street.",
        jumbled: ["I", "my", "bus", "At", "o'clock,", "near", "and", "walk", "to", "stop", "leave", "street.", "my", "apartment", "seven", "the"],
      },
      {
        target: "The bus is full, but I find a seat by the window and watch the city go by.",
        jumbled: ["full,", "but", "the", "a", "by", "find", "watch", "is", "The", "bus", "go", "the", "I", "seat", "window", "by.", "and", "city"],
      },
      {
        target: "My desk is next to a big window, and my computer is already on.",
        jumbled: ["a", "on.", "to", "my", "and", "desk", "next", "big", "window,", "computer", "is", "My", "already", "is"],
      },
      {
        target: "I feel calm, awake, and ready for the office.",
        jumbled: ["I", "office.", "ready", "feel", "for", "and", "the", "calm,", "awake,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your morning before work.",
    mySentenceExample: "I drink coffee before I go to work.",
  },
  {
    number: 2,
    title: "Getting Ready and Leaving Home",
    image: null,
    imageNote: "Jordan standing in front of a mirror in a small apartment, checking a bag for phone, keys, and an office card, a grey sky visible through the window.",
    story:
      "On Tuesday, my alarm rings at six o'clock, and I turn it off slowly. I stay in bed for one minute, then I get up and open the curtains. The sky is grey, so I choose a warm jacket for the cool morning. I brush my teeth, wash my face, and put on my clean work clothes. In the kitchen, I make coffee and eat a small bowl of oatmeal with fruit. Before I leave, I check my bag for my phone, my keys, and my office card. “One more deep breath, Jordan,” I think, looking in the mirror one time before the day begins. Then I put on my shoes and lock the apartment door behind me. The hallway is quiet, and I walk down the stairs to the street. As I step outside into the cool air, I feel fresh and ready to go to work.",
    questions: [
      { text: "What time does the alarm ring?", answer: "Six o'clock." },
      { text: "What does Jordan eat for breakfast?", answer: "A small bowl of oatmeal with fruit." },
      { text: "What three things does Jordan check in the bag?", answer: "Phone, keys, and office card." },
    ],
    trueFalse: [
      { text: "Jordan stays in bed for one minute after the alarm.", answer: true },
      { text: "Jordan forgets to check the bag.", answer: false },
      { text: "Jordan feels fresh and ready at the end.", answer: true },
      { text: "Jordan eats oatmeal with fruit.", answer: true },
      { text: "Jordan wears shorts for the cool morning.", answer: false },
    ],
    buildSentence: [
      {
        target: "I stay in bed for one minute, then I get up and open the curtains.",
        jumbled: ["bed", "I", "the", "open", "in", "up", "curtains.", "then", "I", "for", "minute,", "stay", "one", "and", "get"],
      },
      {
        target: "The sky is grey, so I choose a warm jacket for the cool morning.",
        jumbled: ["I", "choose", "for", "The", "cool", "is", "sky", "the", "a", "grey,", "warm", "jacket", "so", "morning."],
      },
      {
        target: "I check my bag for my phone, my keys, and my office card.",
        jumbled: ["for", "bag", "keys,", "card.", "phone,", "my", "my", "I", "my", "my", "office", "and", "check"],
      },
      {
        target: "“One more deep breath, Jordan,” I think, looking in the mirror one time before the day begins.",
        jumbled: ["one", "mirror", "before", "breath,", "more", "deep", "I", "the", "“One", "the", "think,", "in", "looking", "time", "Jordan,”", "begins.", "day"],
      },
      {
        target: "I feel fresh and ready to go to work.",
        jumbled: ["feel", "I", "go", "fresh", "work.", "to", "to", "ready", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about getting ready in the morning.",
    mySentenceExample: "I put on my work clothes and eat breakfast.",
  },
  {
    number: 3,
    title: "Going to Work by Bus",
    image: null,
    imageNote: "Jordan standing on a full city bus, giving up a seat to an elderly man, other passengers reading or listening to music, city street visible through the window.",
    story:
      "Every morning, I walk to the bus stop at the end of my street. Many people wait there, so I stand in line and look at my phone. When the bus comes, the doors open, and I tap my card to pay. The bus is warm, and I find a seat near the middle by the window. I put my bag on my lap and watch the shops and cars go by. Some people read books, and some people listen to music with headphones. At one stop, an old man gets on, so I stand up and give him my seat. He says, “Thank you,” and I think, “No problem at all, Jordan is happy to help,” and I smile and hold the bar with my hand. After about twenty minutes, the bus stops near my office building. As I step off the bus, I feel awake and ready to start my work.",
    questions: [
      { text: "How does Jordan pay for the bus?", answer: "By tapping a card." },
      { text: "Why does Jordan stand up on the bus?", answer: "To give the seat to an old man." },
      { text: "How long is the bus ride?", answer: "About twenty minutes." },
    ],
    trueFalse: [
      { text: "Jordan taps a card to pay for the bus.", answer: true },
      { text: "Jordan keeps the seat when the old man gets on.", answer: false },
      { text: "Jordan feels awake and ready at the end.", answer: true },
      { text: "An old man gets on the bus.", answer: true },
      { text: "No one waits at the bus stop.", answer: false },
    ],
    buildSentence: [
      {
        target: "Every morning, I walk to the bus stop at the end of my street.",
        jumbled: ["at", "bus", "street.", "stop", "to", "the", "walk", "of", "end", "I", "Every", "the", "my", "morning,"],
      },
      {
        target: "The bus is warm, and I find a seat near the middle by the window.",
        jumbled: ["by", "the", "a", "the", "I", "middle", "seat", "is", "window.", "warm,", "near", "and", "The", "bus", "find"],
      },
      {
        target: "I put my bag on my lap and watch the shops and cars go by.",
        jumbled: ["and", "bag", "my", "on", "shops", "I", "put", "lap", "watch", "by.", "and", "cars", "my", "go", "the"],
      },
      {
        target: "He says, “Thank you,” and I think, “No problem at all, Jordan is happy to help,” and I smile and hold the bar with my hand.",
        jumbled: ["all,", "at", "He", "Jordan", "to", "help,”", "I", "smile", "my", "happy", "problem", "and", "“Thank", "the", "you,”", "bar", "hold", "think,", "and", "says,", "is", "with", "and", "I", "hand.", "“No"],
      },
      {
        target: "I feel awake and ready to start my work.",
        jumbled: ["start", "my", "ready", "I", "to", "and", "awake", "feel", "work."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how you travel to work or school.",
    mySentenceExample: "I go to work by bus every morning.",
  },
  {
    number: 4,
    title: "Starting the Workday",
    image: null,
    imageNote: "Jordan sitting at a desk writing a task list on a yellow paper note, a mug of tea nearby, coworker Dan at the next desk asking how the day is going.",
    story:
      "When I arrive at the office, I say good morning to the people near the door. I walk to my desk, sit down, and turn on my computer screen. First, I open my email and read the new messages from last night. My manager, Ms. Reyes, sends a short message about our work for today. I write a small list of my tasks on a yellow paper note. Then I make a cup of tea in the small office kitchen and come back to my desk. My coworker Dan sits next to me and asks, “How are you today, Jordan?” I say, “I am good, thank you,” and we both start our work. The office is quiet, and I can hear soft sounds of keyboards. As I begin my first task, I feel focused and ready for a busy day.",
    questions: [
      { text: "What does Jordan do first at the desk?", answer: "Opens email and reads new messages." },
      { text: "Who sends a message about the work for today?", answer: "Ms. Reyes, the manager." },
      { text: "Where does Jordan make a cup of tea?", answer: "In the small office kitchen." },
    ],
    trueFalse: [
      { text: "Jordan opens email first at the desk.", answer: true },
      { text: "Ms. Reyes is Jordan's coworker at the next desk.", answer: false },
      { text: "Jordan feels focused and ready at the end.", answer: true },
      { text: "Dan sits next to Jordan.", answer: true },
      { text: "Jordan skips writing a task list.", answer: false },
    ],
    buildSentence: [
      {
        target: "I say good morning to the people near the door.",
        jumbled: ["say", "to", "good", "the", "morning", "the", "door.", "near", "I", "people"],
      },
      {
        target: "I walk to my desk, sit down, and turn on my computer screen.",
        jumbled: ["sit", "my", "my", "desk,", "to", "computer", "turn", "down,", "I", "on", "walk", "screen.", "and"],
      },
      {
        target: "My manager, Ms. Reyes, sends a short message about our work for today.",
        jumbled: ["our", "Ms.", "My", "short", "for", "Reyes,", "work", "manager,", "message", "sends", "today.", "about", "a"],
      },
      {
        target: "My coworker Dan sits next to me and asks, “How are you today, Jordan?”",
        jumbled: ["sits","Jordan?”","Dan","and","to","you","today,","next","“How","me","My","coworker","are","asks,"],
      },
      {
        target: "I feel focused and ready for a busy day.",
        jumbled: ["day.", "a", "feel", "and", "I", "focused", "ready", "busy", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how you start your workday.",
    mySentenceExample: "I check my email when I start work.",
  },
  {
    number: 5,
    title: "Morning Tasks at My Desk",
    image: null,
    imageNote: "Jordan on the phone at the desk, a report open on the computer screen, a task list note with crossed-off lines, Dan nearby being shown a file.",
    story:
      "This morning, I have three important tasks on my list to finish. First, I write a short report about the work from last week. I type carefully and check my words so there are no mistakes. Then I call a customer to answer a simple question about their order. I speak slowly and clearly, and the customer says, “Thank you for your help.” After the call, I send two emails to my team about our next meeting. “Jordan, can you show me something?” Dan asks, and I show him how to open the right file. Time passes quickly, and soon it is almost twelve o'clock. I cross out each task on my note with a happy line. As I finish my morning work, I feel proud because I did everything on my list.",
    questions: [
      { text: "How many tasks does Jordan have on the list?", answer: "Three." },
      { text: "What does Jordan do first?", answer: "Writes a short report about last week's work." },
      { text: "What does the customer say after the phone call?", answer: "Thank you for your help." },
    ],
    trueFalse: [
      { text: "Jordan has three tasks to finish.", answer: true },
      { text: "Jordan makes many mistakes in the report.", answer: false },
      { text: "Jordan feels proud after finishing the morning work.", answer: true },
      { text: "Jordan calls a customer.", answer: true },
      { text: "Jordan ignores Dan's question.", answer: false },
    ],
    buildSentence: [
      {
        target: "This morning, I have three important tasks on my list to finish.",
        jumbled: ["tasks", "to", "list", "I", "have", "finish.", "three", "on", "my", "important", "morning,", "This"],
      },
      {
        target: "First, I write a short report about the work from last week.",
        jumbled: ["the", "I", "from", "a", "about", "First,", "report", "work", "short", "write", "week.", "last"],
      },
      {
        target: "I speak slowly and clearly, and the customer says, “Thank you for your help.” After the call, I send two emails to my team about our next meeting.",
        jumbled: ["help.”", "emails", "my", "and", "“Thank", "call,", "and", "clearly,", "for", "After", "slowly", "team", "two", "the", "our", "next", "customer", "speak", "about", "says,", "I", "your", "I", "you", "send", "to", "the", "meeting."],
      },
      {
        target: "“Jordan, can you show me something?” Dan asks, and I show him how to open the right file.",
        jumbled: ["the", "Dan", "can", "him", "to", "me", "show", "right", "file.", "open", "you", "asks,", "show", "I", "something?”", "“Jordan,", "and", "how"],
      },
      {
        target: "I feel proud because I did everything on my list.",
        jumbled: ["I", "I", "feel", "did", "because", "proud", "list.", "everything", "on", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a task you do at work.",
    mySentenceExample: "I write reports and answer emails at work.",
  },
  {
    number: 6,
    title: "Lunch Break with Coworkers",
    image: null,
    imageNote: "Jordan, Dan, and Ms. Reyes sitting together at a table in a small office canteen with plates of rice and chicken, everyone laughing at a story.",
    story:
      "At twelve o'clock, my manager says, “It is time for lunch, everyone.” I stand up, stretch my arms, and turn off my computer screen. Dan asks me, “Jordan, do you want to eat lunch with us today?” I say yes, and we walk together to the small canteen on the ground floor. The room smells of warm rice, soup, and fresh bread. I buy a plate of rice and chicken and a bottle of water. We sit at a table near the window and talk about our weekend plans. Ms. Reyes tells a funny story, and everyone at the table laughs. For thirty minutes, I forget about work and just enjoy the food and my coworkers. As I finish my lunch, I feel relaxed and happy to work with kind people.",
    questions: [
      { text: "What time is the lunch break?", answer: "Twelve o'clock." },
      { text: "Where do they go for lunch?", answer: "The small canteen on the ground floor." },
      { text: "What does Jordan buy to eat?", answer: "A plate of rice and chicken and a bottle of water." },
    ],
    trueFalse: [
      { text: "Dan invites Jordan to eat lunch with the coworkers.", answer: true },
      { text: "Jordan eats lunch alone at the desk.", answer: false },
      { text: "Jordan feels relaxed and happy at the end.", answer: true },
      { text: "Ms. Reyes tells a funny story.", answer: true },
      { text: "Jordan buys noodles for lunch.", answer: false },
    ],
    buildSentence: [
      {
        target: "At twelve o'clock, my manager says, “It is time for lunch, everyone.”",
        jumbled: ["twelve", "manager", "says,", "o'clock,", "“It", "for", "lunch,", "At", "my", "everyone.”", "is", "time"],
      },
      {
        target: "Dan asks me, “Jordan, do you want to eat lunch with us today?” I say yes, and we walk together to the small canteen on the ground floor.",
        jumbled: ["we", "and", "yes,", "small", "canteen", "the", "“Jordan,", "to", "me,", "want", "with", "us", "walk", "today?”", "to", "on", "asks", "eat", "the", "Dan", "I", "lunch", "say", "do", "you", "together", "floor.", "ground"],
      },
      {
        target: "I buy a plate of rice and chicken and a bottle of water.",
        jumbled: ["a", "and", "I", "bottle", "and", "plate", "water.", "of", "chicken", "a", "of", "rice", "buy"],
      },
      {
        target: "We sit at a table near the window and talk about our weekend plans.",
        jumbled: ["window", "about", "and", "a", "plans.", "our", "the", "at", "table", "near", "sit", "talk", "We", "weekend"],
      },
      {
        target: "For thirty minutes, I forget about work and just enjoy the food and my coworkers.",
        jumbled: ["thirty", "For", "forget", "work", "the", "just", "enjoy", "minutes,", "about", "food", "coworkers.", "I", "and", "and", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your lunch break.",
    mySentenceExample: "I eat lunch with my coworkers at noon.",
  },
  {
    number: 7,
    title: "A Busy Afternoon",
    image: null,
    imageNote: "Jordan standing and speaking to a small team in a meeting room, Ms. Reyes nodding encouragingly, sticky notes and a laptop on the table.",
    story:
      "After lunch, the afternoon is very busy at the office. My phone rings, my email box is full, and there is a meeting at two o'clock. I take a deep breath and start with the most important task first. In the meeting, my team talks about a new project for next month. “Jordan, can you share your ideas?” Ms. Reyes asks, so I speak clearly to the group. My hands feel a little nervous, but my coworkers listen and nod their heads. After the meeting, I return to my desk and answer many emails. Dan helps me carry some heavy boxes to the storage room. We work fast, but we still smile and help each other along the way. As the afternoon ends, I feel tired but proud because we finish so much work together.",
    questions: [
      { text: "What time is the meeting?", answer: "Two o'clock." },
      { text: "What does Ms. Reyes ask Jordan to share?", answer: "Their ideas." },
      { text: "Who helps Jordan carry the heavy boxes?", answer: "Dan." },
    ],
    trueFalse: [
      { text: "The afternoon is very busy at the office.", answer: true },
      { text: "Jordan sits quietly and does no work in the meeting.", answer: false },
      { text: "Jordan feels tired but proud at the end.", answer: true },
      { text: "Ms. Reyes asks Jordan to share ideas.", answer: true },
      { text: "Jordan refuses to help Dan carry boxes.", answer: false },
    ],
    buildSentence: [
      {
        target: "My phone rings, my email box is full, and there is a meeting at two o'clock.",
        jumbled: ["two", "o'clock.", "phone", "box", "full,", "my", "rings,", "a", "and", "is", "meeting", "at", "My", "there", "email", "is"],
      },
      {
        target: "I take a deep breath and start with the most important task first.",
        jumbled: ["most", "task", "I", "first.", "deep", "a", "start", "and", "with", "the", "take", "important", "breath"],
      },
      {
        target: "“Jordan, can you share your ideas?” Ms. Reyes asks, so I speak clearly to the group.",
        jumbled: ["group.", "ideas?”", "clearly", "“Jordan,", "Reyes", "the", "speak", "you", "share", "to", "Ms.", "I", "can", "asks,", "so", "your"],
      },
      {
        target: "I return to my desk and answer many emails.",
        jumbled: ["answer", "my", "to", "emails.", "many", "I", "return", "and", "desk"],
      },
      {
        target: "I feel tired but proud because we finish so much work together.",
        jumbled: ["work", "I", "together.", "but", "so", "because", "we", "proud", "much", "finish", "tired", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a busy day at work.",
    mySentenceExample: "I work fast on a busy afternoon.",
  },
  {
    number: 8,
    title: "A Small Problem at Work",
    image: null,
    imageNote: "Jordan looking worried at a dark computer screen, Dan leaning over to help, a tech helper checking cables behind the desk.",
    story:
      "Late in the day, my computer suddenly stops and the screen goes dark. I feel worried because I have important work on the screen. I try to turn it on again, but nothing happens on the black screen. Dan sees my face and asks, “Jordan, are you okay? What is the problem?” I tell him my computer is not working, and he comes to help me. Together, we call the office helper, Mr. Tan, from the tech team. Mr. Tan checks the cables and finds one that is loose behind the desk. He plugs it in again, and the screen turns on with all my work still there. I feel so relieved, and I say, “Thank you very much for your help.” As I go back to work, I feel calm because a small problem is easy to fix with help.",
    questions: [
      { text: "What is the problem with Jordan's computer?", answer: "It suddenly stops and the screen goes dark." },
      { text: "Who does Jordan call for help?", answer: "Mr. Tan, from the tech team." },
      { text: "What does Mr. Tan find behind the desk?", answer: "A loose cable." },
    ],
    trueFalse: [
      { text: "Jordan's computer screen goes dark.", answer: true },
      { text: "Jordan loses all the work forever.", answer: false },
      { text: "Jordan feels calm at the end.", answer: true },
      { text: "Dan asks if Jordan is okay.", answer: true },
      { text: "Mr. Tan cannot find the problem.", answer: false },
    ],
    buildSentence: [
      {
        target: "Late in the day, my computer suddenly stops and the screen goes dark.",
        jumbled: ["day,", "the", "Late", "in", "my", "and", "screen", "computer", "the", "dark.", "goes", "stops", "suddenly"],
      },
      {
        target: "I try to turn it on again, but nothing happens on the black screen.",
        jumbled: ["try", "it", "turn", "to", "on", "on", "the", "again,", "but", "screen.", "black", "nothing", "happens", "I"],
      },
      {
        target: "Dan sees my face and asks, “Jordan, are you okay? What is the problem?” I tell him my computer is not working, and he comes to help me.",
        jumbled: ["him", "“Jordan,", "are", "and", "me.", "What", "he", "Dan", "okay?", "is", "tell", "my", "my", "computer", "asks,", "to", "I", "problem?”", "sees", "the", "is", "not", "and", "comes", "face", "you", "help", "working,"],
      },
      {
        target: "He plugs it in again, and the screen turns on with all my work still there.",
        jumbled: ["screen", "there.", "on", "He", "all", "plugs", "the", "turns", "work", "it", "with", "still", "in", "and", "my", "again,"],
      },
      {
        target: "I feel calm because a small problem is easy to fix with help.",
        jumbled: ["with", "calm", "easy", "fix", "help.", "problem", "I", "a", "is", "small", "because", "feel", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small problem you solved.",
    mySentenceExample: "I ask for help when I have a problem at work.",
  },
  {
    number: 9,
    title: "Finishing Work and Going Home",
    image: null,
    imageNote: "Jordan tidying a desk and saving files, putting on a jacket, waving goodbye to Dan and Ms. Reyes near the office door, orange evening sky through the window.",
    story:
      "At five o'clock, the workday is almost over, and I check my task list. I am happy because I finished every task on my note today. I save all my files and close the programs on my computer. Then I tidy my desk and put my papers in a neat pile. I say, “Goodbye, see you tomorrow,” to Dan and Ms. Reyes. “See you tomorrow, Jordan!” they both say. I put on my jacket, take my bag, and walk to the lift with a smile. Outside, the sky is orange, and the evening air feels cool and fresh. I walk to the bus stop and wait with the other tired workers. On the bus home, I close my eyes for a moment and think about my day. As I ride home, I feel satisfied because I did good work and now I can rest.",
    questions: [
      { text: "What time is it when the workday is almost over?", answer: "Five o'clock." },
      { text: "What does Jordan do before leaving the desk?", answer: "Saves all files, closes programs, and tidies the desk." },
      { text: "What colour is the sky outside?", answer: "Orange." },
    ],
    trueFalse: [
      { text: "Jordan finishes every task today.", answer: true },
      { text: "Jordan leaves the desk messy and full of papers.", answer: false },
      { text: "Jordan feels satisfied at the end.", answer: true },
      { text: "Jordan says goodbye to Dan and Ms. Reyes.", answer: true },
      { text: "The sky is dark blue outside.", answer: false },
    ],
    buildSentence: [
      {
        target: "At five o'clock, the workday is almost over, and I check my task list.",
        jumbled: ["five", "workday", "and", "task", "I", "is", "the", "list.", "At", "over,", "o'clock,", "my", "check", "almost"],
      },
      {
        target: "Then I tidy my desk and put my papers in a neat pile.",
        jumbled: ["pile.", "and", "put", "Then", "a", "my", "tidy", "my", "I", "neat", "in", "desk", "papers"],
      },
      {
        target: "I say, “Goodbye, see you tomorrow,” to Dan and Ms. Reyes.",
        jumbled: ["I", "Ms.", "say,", "tomorrow,”", "“Goodbye,", "you", "and", "see", "to", "Dan", "Reyes."],
      },
      {
        target: "I put on my jacket, take my bag, and walk to the lift with a smile.",
        jumbled: ["with", "the", "my", "I", "on", "jacket,", "my", "a", "and", "smile.", "take", "bag,", "put", "lift", "to", "walk"],
      },
      {
        target: "I feel satisfied because I did good work and now I can rest.",
        jumbled: ["because", "now", "can", "satisfied", "I", "rest.", "work", "and", "I", "did", "good", "feel", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about the end of your workday.",
    mySentenceExample: "I feel happy when I finish my work.",
  },
  {
    number: 10,
    title: "A Full and Good Week",
    image: null,
    imageNote: "Jordan sitting at the desk on Friday afternoon, Ms. Reyes walking over with a warm smile to say something kind, Dan nearby, a bright evening sky outside the office window.",
    story:
      "On Friday afternoon, I sit at my desk and think about the whole week. On Monday, I felt a little nervous, but now the office feels like home. This week, I wrote reports, answered calls, and joined an important meeting. I helped Dan with his files, and he helped me carry heavy boxes. When my computer had a problem, kind coworkers helped me fix it fast. Ms. Reyes walks to my desk and says, “You did great work this week, Jordan.” I smile and say, “Thank you, I really enjoy working with this team.” I turn off my computer and say goodbye to everyone for the weekend. Outside, the evening is bright, and I feel light and free. As I walk home, I feel proud and thankful because I had a full and good week at work.",
    questions: [
      { text: "How did Jordan feel on Monday?", answer: "A little nervous." },
      { text: "What does Ms. Reyes say on Friday afternoon?", answer: "You did great work this week." },
      { text: "How does Jordan feel as they walk home?", answer: "Proud and thankful." },
    ],
    trueFalse: [
      { text: "On Monday, Jordan felt a little nervous.", answer: true },
      { text: "Ms. Reyes says Jordan did bad work this week.", answer: false },
      { text: "Jordan feels proud and thankful at the end.", answer: true },
      { text: "Dan helped Jordan carry boxes.", answer: true },
      { text: "Jordan feels sad at the end of the week.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Friday afternoon, I sit at my desk and think about the whole week.",
        jumbled: ["afternoon,", "Friday", "week.", "I", "think", "at", "whole", "sit", "and", "about", "my", "desk", "the", "On"],
      },
      {
        target: "I helped Dan with his files, and he helped me carry heavy boxes.",
        jumbled: ["heavy", "and", "his", "he", "carry", "helped", "boxes.", "with", "I", "me", "Dan", "helped", "files,"],
      },
      {
        target: "Ms. Reyes walks to my desk and says, “You did great work this week, Jordan.”",
        jumbled: ["“You", "and", "did", "work", "great", "says,", "Ms.", "my", "Reyes", "to", "Jordan.”", "week,", "walks", "desk", "this"],
      },
      {
        target: "I smile and say, “Thank you, I really enjoy working with this team.”",
        jumbled: ["I", "team.”", "“Thank", "really", "working", "enjoy", "I", "with", "you,", "this", "and", "say,", "smile"],
      },
      {
        target: "I feel proud and thankful because I had a full and good week at work.",
        jumbled: ["feel", "proud", "full", "a", "and", "at", "work.", "I", "good", "thankful", "because", "had", "and", "I", "week"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a good week you had.",
    mySentenceExample: "I feel proud when I have a good week at work.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
