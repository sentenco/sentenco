// A1 Adults digital storybook, Book 41: "My First Day at a New Job"
// Static content -- no Supabase. First book in a new A1 Adults batch
// (Books 41-48) -- Adults has been A2-only since Books 7-12 were moved
// up from A1 (see sql/update_storybook_adults_level_to_a2.sql), so this
// is genuinely new A1 content, not a relabel. Uses the same Adults-track
// pattern as storybookData7.js: 3 questions, 5 True/False and 5
// Build-a-Sentence per chapter, shortest-to-longest -- but the language
// itself is kept deliberately simple (short sentences, mostly simple
// present/past, minimal subordination) to actually earn the A1 label,
// while the topic itself stays adult-appropriate (starting a new job).
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook41/cover.jpg";

export const STORYBOOK_TITLE = "My First Day at a New Job";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Carlos standing nervously in front of a small office building, checking his watch, a welcome sign visible through the glass door.";

export const CHARACTERS = [
  { name: "Carlos", role: "The narrator, an adult starting a new job", look: "Neat shirt, small bag, nervous but hopeful expression." },
  { name: "Fatima", role: "Carlos's new coworker", look: "Friendly smile, badge on her shirt, helpful and patient." },
  { name: "Mr. Yang", role: "Carlos's new manager", look: "Suit jacket, kind eyes, calm and organized." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Beginning",
    image: null,
    imageNote: "Carlos standing outside a small office building, looking at his watch, a welcome sign visible through the glass door.",
    story:
      "Today is my first day at a new job. I wake up early and check my clothes twice. I eat a small breakfast, but I am too nervous to eat much. I leave my house early because I do not want to be late. The office is in a small gray building near the train station. I stand outside for a minute and take a deep breath. Then I open the door and walk inside. A woman at the front desk smiles at me. “You must be Carlos,” she says. I smile back and say, “Yes, that's me.”",
    questions: [
      { text: "What day is it for Carlos?", answer: "His first day at a new job." },
      { text: "Why does Carlos leave his house early?", answer: "Because he does not want to be late." },
      { text: "Who smiles at Carlos when he walks in?", answer: "A woman at the front desk." },
    ],
    trueFalse: [
      { text: "Today is Carlos's first day at a new job.", answer: true },
      { text: "Carlos eats a big breakfast.", answer: false },
      { text: "The office is near the train station.", answer: true },
      { text: "Carlos is late for work.", answer: false },
      { text: "A woman at the front desk smiles at him.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today is my first day at a new job.",
        jumbled: ["job.", "new", "day", "first", "a", "at", "Today", "is", "my"],
      },
      {
        target: "I eat a small breakfast, but I am too nervous to eat much.",
        jumbled: ["too", "much.", "eat", "nervous", "to", "I", "eat", "I", "breakfast,", "a", "small", "but", "am"],
      },
      {
        target: "The office is in a small gray building near the train station.",
        jumbled: ["train", "in", "building", "small", "a", "The", "is", "near", "gray", "the", "office", "station."],
      },
      {
        target: "A woman at the front desk smiles at me.",
        jumbled: ["A", "desk", "at", "at", "me.", "smiles", "woman", "the", "front"],
      },
      {
        target: "I smile back and say, “Yes, that's me.”",
        jumbled: ["back", "smile", "I", "that's", "say,", "me.”", "“Yes,", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your first day at a new job or school.",
    mySentenceExample: "I felt nervous on my first day at a new school.",
  },
  {
    number: 2,
    title: "Meeting Fatima",
    image: null,
    imageNote: "Fatima shaking hands with Carlos in a bright office hallway, both smiling, desks visible in the background.",
    story:
      "The woman at the desk calls a coworker to help me. Her name is Fatima. She has a friendly smile and a badge on her shirt. “Welcome to the team, Carlos,” she says, and shakes my hand. She walks with me down the hallway and shows me my new desk. It is next to a big window with good light. “If you have any questions, just ask me,” Fatima says kindly. I feel a little better now. Having a friendly face on my first day helps me relax. We talk for a few minutes about the office and the people who work here.",
    questions: [
      { text: "Who helps Carlos on his first day?", answer: "Fatima." },
      { text: "What does Fatima show Carlos?", answer: "His new desk." },
      { text: "How does Carlos feel after meeting Fatima?", answer: "A little better." },
    ],
    trueFalse: [
      { text: "Fatima's name badge is on her shirt.", answer: true },
      { text: "Fatima ignores Carlos completely.", answer: false },
      { text: "Carlos's new desk is next to a window.", answer: true },
      { text: "Fatima says to ask her if he has questions.", answer: true },
      { text: "Carlos feels worse after meeting Fatima.", answer: false },
    ],
    buildSentence: [
      {
        target: "The woman at the desk calls a coworker to help me.",
        jumbled: ["me.", "at", "coworker", "The", "desk", "calls", "help", "the", "a", "to", "woman"],
      },
      {
        target: "She has a friendly smile and a badge on her shirt.",
        jumbled: ["badge", "on", "smile", "her", "a", "a", "has", "shirt.", "and", "She", "friendly"],
      },
      {
        target: "She walks with me down the hallway and shows me my new desk.",
        jumbled: ["down", "She", "with", "and", "hallway", "walks", "new", "shows", "me", "me", "my", "desk.", "the"],
      },
      {
        target: "“If you have any questions, just ask me,” Fatima says kindly.",
        jumbled: ["just", "“If", "any", "ask", "Fatima", "kindly.", "says", "have", "you", "me,”", "questions,"],
      },
      {
        target: "We talk for a few minutes about the office and the people who work here.",
        jumbled: ["We", "office", "few", "talk", "about", "a", "work", "here.", "minutes", "who", "people", "for", "and", "the", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone who was kind to you when you were new somewhere.",
    mySentenceExample: "A classmate was kind to me on my first day at school.",
  },
  {
    number: 3,
    title: "Meeting the Manager",
    image: null,
    imageNote: "Mr. Yang sitting behind a desk, shaking Carlos's hand in a small office with a computer and folders on the desk.",
    story:
      "After lunch, Fatima takes me to meet my manager, Mr. Yang. His office is small but very tidy. He stands up and shakes my hand warmly. “Welcome, Carlos. I am happy you are here,” he says. He explains my job tasks slowly and clearly. I write down important notes in my new notebook. Mr. Yang tells me the working hours and the lunch break time. He also gives me a map of the building. “Don't worry if you forget something today,” he says with a smile. “Everyone forgets things on their first day.” I thank him and feel a bit more confident.",
    questions: [
      { text: "Who does Fatima take Carlos to meet?", answer: "Mr. Yang, the manager." },
      { text: "What does Carlos write down?", answer: "Important notes about his job tasks." },
      { text: "What does Mr. Yang say about forgetting things?", answer: "That everyone forgets things on their first day." },
    ],
    trueFalse: [
      { text: "Mr. Yang's office is small but tidy.", answer: true },
      { text: "Mr. Yang refuses to shake Carlos's hand.", answer: false },
      { text: "Carlos writes down notes in a notebook.", answer: true },
      { text: "Mr. Yang gives Carlos a map of the building.", answer: true },
      { text: "Mr. Yang says never to forget anything.", answer: false },
    ],
    buildSentence: [
      {
        target: "Fatima takes me to meet my manager, Mr. Yang.",
        jumbled: ["my", "meet", "Fatima", "takes", "manager,", "me", "Yang.", "Mr.", "to"],
      },
      {
        target: "“Welcome, Carlos. I am happy you are here,” he says.",
        jumbled: ["Carlos.", "here,”", "happy", "he", "you", "are", "am", "I", "says.", "“Welcome,"],
      },
      {
        target: "I write down important notes in my new notebook.",
        jumbled: ["important", "notebook.", "notes", "write", "new", "my", "I", "in", "down"],
      },
      {
        target: "Mr. Yang tells me the working hours and the lunch break time.",
        jumbled: ["break", "the", "the", "and", "me", "hours", "working", "lunch", "Mr.", "time.", "Yang", "tells"],
      },
      {
        target: "“Don't worry if you forget something today,” he says with a smile.",
        jumbled: ["smile.", "says", "forget", "“Don't", "with", "if", "today,”", "a", "you", "worry", "he", "something"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone who explained something new to you.",
    mySentenceExample: "My teacher explained the new lesson to me clearly.",
  },
  {
    number: 4,
    title: "Learning the Computer System",
    image: null,
    imageNote: "Carlos sitting at his desk, staring confused at a computer screen full of icons, Fatima pointing at the screen to help.",
    story:
      "In the afternoon, I sit at my new desk and turn on the computer. There are many programs I do not know. I feel confused looking at all the icons and buttons. Fatima notices my confused face. “Need help, Carlos?” she asks, and comes over to help me. She shows me how to open my email and how to save a file. “Don't worry, it looks hard now, but it gets easier,” she says kindly. I try the steps myself, and I make a small mistake. Fatima laughs gently and shows me again. This time, I do it correctly. I feel proud of this small success.",
    questions: [
      { text: "What does Carlos do in the afternoon?", answer: "Sits at his desk and turns on the computer." },
      { text: "Why does Fatima come over to help?", answer: "Because she notices his confused face." },
      { text: "How does Carlos feel after doing it correctly?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Carlos turns on the computer in the afternoon.", answer: true },
      { text: "Carlos understands all the programs right away.", answer: false },
      { text: "Fatima shows Carlos how to open his email.", answer: true },
      { text: "Carlos makes a small mistake at first.", answer: true },
      { text: "Carlos feels bad after doing it correctly.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the afternoon, I sit at my new desk and turn on the computer.",
        jumbled: ["computer.", "my", "sit", "on", "turn", "at", "I", "the", "and", "In", "the", "afternoon,", "new", "desk"],
      },
      {
        target: "I feel confused looking at all the icons and buttons.",
        jumbled: ["at", "feel", "the", "and", "looking", "buttons.", "I", "all", "confused", "icons"],
      },
      {
        target: "She shows me how to open my email and how to save a file.",
        jumbled: ["file.", "to", "She", "save", "me", "email", "to", "open", "how", "shows", "how", "a", "and", "my"],
      },
      {
        target: "“Don't worry, it looks hard now, but it gets easier,” she says kindly.",
        jumbled: ["now,", "hard", "worry,", "she", "says", "but", "easier,”", "looks", "kindly.", "it", "“Don't", "it", "gets"],
      },
      {
        target: "Fatima laughs gently and shows me again.",
        jumbled: ["again.", "Fatima", "shows", "and", "gently", "laughs", "me"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning to use something new and difficult.",
    mySentenceExample: "I felt confused learning to use a new phone.",
  },
  {
    number: 5,
    title: "Lunch with New Coworkers",
    image: null,
    imageNote: "Carlos sitting at a lunch table with Fatima and two other coworkers, everyone eating and talking, sandwiches and drinks on the table.",
    story:
      "At noon, Fatima invites me to eat lunch. “Join us, Carlos,” she says, with her and two other coworkers. I feel a little shy at first, sitting with people I just met. We sit at a small table near the window and open our lunch bags. The other coworkers ask me questions about myself, and I answer them slowly. They tell me funny stories about their own first days at the office. I laugh with them, and my shyness disappears little by little. By the end of lunch, I feel like part of the team already. This makes me happy and less nervous about the rest of the day.",
    questions: [
      { text: "Who invites Carlos to eat lunch?", answer: "Fatima." },
      { text: "How does Carlos feel at first?", answer: "A little shy." },
      { text: "What do the coworkers tell Carlos?", answer: "Funny stories about their own first days." },
    ],
    trueFalse: [
      { text: "Fatima invites Carlos to eat lunch.", answer: true },
      { text: "Carlos feels completely relaxed at first.", answer: false },
      { text: "They sit at a table near the window.", answer: true },
      { text: "The coworkers tell funny stories about their first days.", answer: true },
      { text: "Carlos feels worse by the end of lunch.", answer: false },
    ],
    buildSentence: [
      {
        target: "At noon, Fatima invites me to eat lunch.",
        jumbled: ["me", "eat", "invites", "Fatima", "At", "to", "noon,", "lunch."],
      },
      {
        target: "I feel a little shy at first, sitting with people I just met.",
        jumbled: ["I", "at", "people", "met.", "shy", "feel", "first,", "little", "sitting", "just", "a", "with", "I"],
      },
      {
        target: "We sit at a small table near the window and open our lunch bags.",
        jumbled: ["and", "We", "sit", "near", "bags.", "window", "small", "lunch", "table", "open", "our", "at", "a", "the"],
      },
      {
        target: "They tell me funny stories about their own first days at the office.",
        jumbled: ["funny", "at", "tell", "days", "stories", "about", "own", "first", "me", "the", "office.", "their", "They"],
      },
      {
        target: "By the end of lunch, I feel like part of the team already.",
        jumbled: ["of", "feel", "I", "By", "like", "team", "lunch,", "end", "already.", "the", "of", "part", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about eating lunch with new people.",
    mySentenceExample: "I felt shy eating lunch with new people at first.",
  },
  {
    number: 6,
    title: "A Small Mistake",
    image: null,
    imageNote: "Carlos looking worried at a printer that jammed with paper, Fatima walking over to help him fix it.",
    story:
      "In the afternoon, Mr. Yang asks me to print some papers for a meeting. I walk to the printer and press the button. But the printer makes a strange noise and stops working. I feel worried and do not know what to do. I look around, but no one is near to help me right away. Then Fatima walks by and sees my worried face. “The printer gets paper stuck sometimes, Carlos,” she says calmly. She opens the printer and removes the stuck paper carefully. In one minute, the printer works again. I thank her again, feeling grateful for such a helpful coworker on my first day.",
    questions: [
      { text: "What does Mr. Yang ask Carlos to do?", answer: "Print some papers for a meeting." },
      { text: "What happens with the printer?", answer: "It makes a strange noise and stops working." },
      { text: "Who helps Carlos fix the printer?", answer: "Fatima." },
    ],
    trueFalse: [
      { text: "Mr. Yang asks Carlos to print some papers.", answer: true },
      { text: "The printer works perfectly the first time.", answer: false },
      { text: "Carlos feels worried about the printer.", answer: true },
      { text: "Fatima helps fix the printer.", answer: true },
      { text: "The printer never works again that day.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the afternoon, Mr. Yang asks me to print some papers for a meeting.",
        jumbled: ["print", "Yang", "for", "a", "papers", "meeting.", "me", "some", "In", "Mr.", "to", "asks", "the", "afternoon,"],
      },
      {
        target: "But the printer makes a strange noise and stops working.",
        jumbled: ["the", "strange", "stops", "working.", "printer", "makes", "a", "But", "and", "noise"],
      },
      {
        target: "I look around, but no one is near to help me right away.",
        jumbled: ["to", "look", "one", "no", "is", "around,", "me", "I", "away.", "near", "but", "help", "right"],
      },
      {
        target: "“The printer gets paper stuck sometimes, Carlos,” she says calmly.",
        jumbled: ["gets", "“The", "paper", "says", "calmly.", "printer", "she", "stuck", "sometimes,", "Carlos,”"],
      },
      {
        target: "I thank her again, feeling grateful for such a helpful coworker on my first day.",
        jumbled: ["for", "a", "grateful", "coworker", "helpful", "feeling", "on", "again,", "I", "first", "my", "such", "thank", "her", "day."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small problem someone helped you solve.",
    mySentenceExample: "My friend helped me solve a small problem with my computer.",
  },
  {
    number: 7,
    title: "A Meeting with the Team",
    image: null,
    imageNote: "Carlos sitting at a conference table with Mr. Yang, Fatima, and other coworkers, listening carefully during a team meeting.",
    story:
      "At three o'clock, the whole team has a meeting in a small conference room. I sit next to Fatima and listen carefully. Mr. Yang talks about the team's goals for the month. I do not understand every word, but I understand the main ideas. When it's my turn to speak, I introduce myself to the group. My voice shakes a little, but I finish my short introduction. Everyone claps and welcomes me warmly to the team. After the meeting, one coworker tells me, “You did a great job, Carlos.” I feel relieved that the meeting is over and proud of myself.",
    questions: [
      { text: "What time is the team meeting?", answer: "Three o'clock." },
      { text: "What does Mr. Yang talk about?", answer: "The team's goals for the month." },
      { text: "How does Carlos feel after the meeting?", answer: "Relieved and proud." },
    ],
    trueFalse: [
      { text: "The team meeting is at three o'clock.", answer: true },
      { text: "Carlos refuses to introduce himself.", answer: false },
      { text: "Mr. Yang talks about the team's goals.", answer: true },
      { text: "Everyone claps and welcomes Carlos.", answer: true },
      { text: "Carlos feels nothing after the meeting.", answer: false },
    ],
    buildSentence: [
      {
        target: "At three o'clock, the whole team has a meeting in a small conference room.",
        jumbled: ["the", "in", "meeting", "conference", "a", "room.", "team", "At", "three", "small", "has", "a", "whole", "o'clock,"],
      },
      {
        target: "Mr. Yang talks about the team's goals for the month.",
        jumbled: ["talks", "goals", "for", "team's", "the", "Mr.", "about", "month.", "Yang", "the"],
      },
      {
        target: "I do not understand every word, but I understand the main ideas.",
        jumbled: ["I", "I", "understand", "not", "ideas.", "but", "main", "the", "word,", "do", "every", "understand"],
      },
      {
        target: "My voice shakes a little, but I finish my short introduction.",
        jumbled: ["my", "short", "little,", "I", "but", "shakes", "finish", "My", "introduction.", "voice", "a"],
      },
      {
        target: "One coworker tells me, “You did a great job, Carlos.”",
        jumbled: ["great", "me,", "tells", "Carlos.”", "a", "did", "“You", "coworker", "One", "job,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about introducing yourself to a new group of people.",
    mySentenceExample: "I felt nervous introducing myself to my new class.",
  },
  {
    number: 8,
    title: "The End of the Day",
    image: null,
    imageNote: "Carlos putting on his jacket and waving goodbye to Fatima and Mr. Yang at the office entrance, the sky outside turning orange at sunset.",
    story:
      "At five o'clock, my first day at the new job finally comes to an end. I close my computer and pack my small bag slowly. Fatima waves goodbye and says, “See you tomorrow, Carlos!” Mr. Yang stops by my desk too and says I did well for a first day. I walk outside, and the sky is turning orange with the sunset. I feel tired, but it is a good kind of tired. Today had nervous moments, small mistakes, and new friendly faces too. Walking to the train station, I think about tomorrow, and I already feel less nervous about it.",
    questions: [
      { text: "What time does Carlos's first day end?", answer: "Five o'clock." },
      { text: "What does Fatima say to Carlos?", answer: "See you tomorrow, Carlos!" },
      { text: "How does Carlos feel walking to the train station?", answer: "Tired, but a good kind of tired -- less nervous." },
    ],
    trueFalse: [
      { text: "Carlos's first day ends at five o'clock.", answer: true },
      { text: "Fatima says nothing to Carlos before leaving.", answer: false },
      { text: "Mr. Yang says Carlos did well for a first day.", answer: true },
      { text: "Carlos feels a good kind of tired.", answer: true },
      { text: "Carlos feels more nervous about tomorrow.", answer: false },
    ],
    buildSentence: [
      {
        target: "At five o'clock, my first day at the new job finally comes to an end.",
        jumbled: ["finally", "my", "the", "at", "new", "job", "five", "end.", "an", "to", "first", "At", "comes", "o'clock,", "day"],
      },
      {
        target: "I close my computer and pack my small bag slowly.",
        jumbled: ["slowly.", "and", "my", "computer", "my", "close", "small", "I", "pack", "bag"],
      },
      {
        target: "Mr. Yang stops by my desk too and says I did well for a first day.",
        jumbled: ["and", "for", "a", "well", "too", "did", "first", "by", "desk", "Mr.", "my", "I", "Yang", "says", "stops", "day."],
      },
      {
        target: "I walk outside, and the sky is turning orange with the sunset.",
        jumbled: ["turning", "I", "sky", "outside,", "sunset.", "is", "the", "with", "walk", "and", "orange", "the"],
      },
      {
        target: "Walking to the train station, I think about tomorrow, and I already feel less nervous about it.",
        jumbled: ["and", "nervous", "to", "train", "I", "about", "think", "it.", "Walking", "less", "already", "tomorrow,", "feel", "station,", "the", "about", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how you felt at the end of a busy day.",
    mySentenceExample: "I felt tired but happy at the end of a busy day.",
  },
  {
    number: 9,
    title: "A Text from Fatima",
    image: null,
    imageNote: "Carlos sitting on a train seat, smiling at a text message on his phone, city lights visible through the train window at dusk.",
    story:
      "On the train home, my phone buzzes with a new message. It is from Fatima. “Great first day, Carlos! You did better than you think,” she writes. I smile and read the message again. It feels nice to know someone at work is thinking of me. I write back, “Thank you! See you tomorrow.” Looking out the train window, I feel happy about my decision to take this job. The day was long and a little scary at times, but also full of kind people. I close my eyes for a moment, feeling more relaxed than I did this morning.",
    questions: [
      { text: "Who sends Carlos a text message?", answer: "Fatima." },
      { text: "What does the message say?", answer: "Great first day! You did better than you think." },
      { text: "How does Carlos feel looking out the window?", answer: "Happy about his decision to take this job." },
    ],
    trueFalse: [
      { text: "Fatima sends Carlos a text message.", answer: true },
      { text: "The message says Carlos did a bad job.", answer: false },
      { text: "Carlos writes back to thank her.", answer: true },
      { text: "Carlos feels happy about his decision.", answer: true },
      { text: "Carlos feels more nervous than this morning.", answer: false },
    ],
    buildSentence: [
      {
        target: "On the train home, my phone buzzes with a new message.",
        jumbled: ["train", "phone", "On", "message.", "home,", "my", "the", "buzzes", "with", "a", "new"],
      },
      {
        target: "“Great first day, Carlos! You did better than you think,” she writes.",
        jumbled: ["better", "think,”", "than", "Carlos!", "you", "she", "did", "first", "“Great", "day,", "You", "writes."],
      },
      {
        target: "It feels nice to know someone at work is thinking of me.",
        jumbled: ["of", "feels", "know", "me.", "thinking", "someone", "is", "It", "to", "work", "nice", "at"],
      },
      {
        target: "Looking out the train window, I feel happy about my decision to take this job.",
        jumbled: ["window,", "I", "about", "job.", "feel", "this", "take", "Looking", "the", "my", "out", "happy", "to", "train", "decision"],
      },
      {
        target: "The day was long and a little scary at times, but also full of kind people.",
        jumbled: ["people.", "of", "kind", "but", "The", "was", "times,", "full", "little", "a", "day", "and", "scary", "at", "also", "long"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a kind message someone sent you.",
    mySentenceExample: "My friend sent me a kind message after my exam.",
  },
  {
    number: 10,
    title: "Ready for Tomorrow",
    image: null,
    imageNote: "Carlos at home laying out his clothes for the next day, a small notebook and pen on the table, a calm smile on his face.",
    story:
      "At home, I make dinner and think about my first day at the new job. It had many new things: a new desk, a new computer, and many new faces. I remember Fatima's kindness and Mr. Yang's patience with all my questions. I lay out my clothes for tomorrow, just like I did today. At the top of one page, I had written, “Carlos's first day,” and I read the notes underneath it. Everything makes a little more sense now than it did this morning. I turn off the light and get ready for bed, feeling calm. Tomorrow will still be new, but I know I am not alone there.",
    questions: [
      { text: "What does Carlos do after dinner?", answer: "Lays out his clothes for tomorrow and reads his notes." },
      { text: "What does Carlos remember about Fatima and Mr. Yang?", answer: "Fatima's kindness and Mr. Yang's patience." },
      { text: "How does Carlos feel getting ready for bed?", answer: "Calm." },
    ],
    trueFalse: [
      { text: "Carlos lays out his clothes for tomorrow.", answer: true },
      { text: "Carlos forgets everything about his first day.", answer: false },
      { text: "Carlos reads the notes he wrote earlier.", answer: true },
      { text: "Everything makes more sense now than this morning.", answer: true },
      { text: "Carlos feels alone and worried going to bed.", answer: false },
    ],
    buildSentence: [
      {
        target: "At home, I make dinner and think about my first day at the new job.",
        jumbled: ["and", "new", "the", "day", "dinner", "At", "at", "my", "make", "about", "job.", "I", "home,", "first", "think"],
      },
      {
        target: "It had many new things: a new desk, a new computer, and many new faces.",
        jumbled: ["new", "a", "things:", "faces.", "had", "many", "new", "computer,", "It", "desk,", "new", "a", "and", "many", "new"],
      },
      {
        target: "I lay out my clothes for tomorrow, just like I did today.",
        jumbled: ["lay", "did", "like", "tomorrow,", "I", "my", "out", "today.", "just", "for", "clothes", "I"],
      },
      {
        target: "At the top of one page, I had written, “Carlos's first day,” and I read the notes underneath it.",
        jumbled: ["notes", "had", "one", "the", "written,", "it.", "top", "first", "At", "I", "of", "underneath", "“Carlos's", "and", "day,”", "the", "page,", "I", "read"],
      },
      {
        target: "Tomorrow will still be new, but I know I am not alone there.",
        jumbled: ["Tomorrow", "know", "I", "new,", "I", "am", "be", "there.", "but", "will", "still", "alone", "not"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about getting ready for a new day.",
    mySentenceExample: "I get ready for a new day by planning my clothes at night.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
