// A1 Teens digital storybook, Book 2: "A New Student in Our Class"
// Static content -- no Supabase, mirrors the pattern in storybookData.js.
// Chapter art is landscape (3:2) except Chapter 1, which reuses a portrait
// (2:3) shot originally generated as a cover candidate -- StoryBook.jsx's
// image slot uses object-fit: contain, so neither shape gets cropped.

import coverImg from "./assets/storybook2/cover.png";
import chapter1Img from "./assets/storybook2/chapter1.png";
import chapter2Img from "./assets/storybook2/chapter2.png";
import chapter3Img from "./assets/storybook2/chapter3.png";
import chapter4Img from "./assets/storybook2/chapter4.png";
import chapter5Img from "./assets/storybook2/chapter5.png";
import chapter6Img from "./assets/storybook2/chapter6.png";
import chapter7Img from "./assets/storybook2/chapter7.png";
import chapter8Img from "./assets/storybook2/chapter8.png";
import chapter9Img from "./assets/storybook2/chapter9.png";
import chapter10Img from "./assets/storybook2/chapter10.png";

export const STORYBOOK_TITLE = "A New Student in Our Class";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "A group illustration of the new student Leo standing with his three new classmates outside their school, all smiling: Leo, Sara, Ken, and Amir.";

export const CHARACTERS = [
  { name: "Leo", role: "The narrator, a new student", look: "Short black hair, no glasses, gray zip-up hoodie, small backpack." },
  { name: "Sara", role: "Leo's classmate", look: "Long straight brown hair with a headband, light blue cardigan." },
  { name: "Ken", role: "Leo's classmate", look: "Short wavy brown hair, striped green sweater." },
  { name: "Amir", role: "Leo's classmate, joins from Chapter 8", look: "Curly black hair, mustard yellow jacket." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Morning at This School",
    image: chapter1Img,
    imageNote: "Leo standing at the school gate holding his small backpack; a friendly teacher smiles and welcomes him, with Sara and Ken visible smiling in the classroom doorway.",
    story:
      "Today is my first morning at this new school. I stand at the school gate and hold my small backpack. A friendly teacher smiles at me and says, “Good morning, welcome!” She walks with me and shows me the way to my new classroom. In the hallway, I see many students talking and laughing, and my heart beats fast. When I walk into the classroom, a boy and a girl look at me and smile. The girl says, “Hi, I’m Sara,” and the boy says, “I’m Ken, nice to meet you.” I take a deep breath and say, “Hello, my name is Leo,” and I feel a little less shy and a little more at home.",
    questions: [
      { text: "Where does Leo stand at the beginning of the story?", answer: "At the school gate." },
      { text: "Who shows Leo the way to his new classroom?", answer: "The teacher." },
      { text: "What are the names of the two classmates Leo meets?", answer: "Sara and Ken." },
    ],
    trueFalse: [
      { text: "It is Leo’s first morning at this school.", answer: true },
      { text: "The hallway is quiet and empty.", answer: false },
      { text: "Leo feels a little less shy at the end.", answer: true },
      { text: "A teacher welcomes Leo at the gate.", answer: true },
      { text: "Leo already knows Sara and Ken before this day.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today is my first morning at this new school.",
        jumbled: ["is", "first", "school.", "new", "Today", "at", "this", "morning", "my"],
      },
      {
        target: "I stand at the school gate and hold my small backpack.",
        jumbled: ["my", "the", "stand", "small", "I", "and", "gate", "school", "at", "backpack.", "hold"],
      },
      {
        target: "She walks with me and shows me the way to my new classroom.",
        jumbled: ["me", "to", "way", "She", "classroom.", "walks", "the", "my", "with", "new", "shows", "me", "and"],
      },
      {
        target: "A boy and a girl look at me and smile.",
        jumbled: ["a", "smile.", "girl", "and", "and", "at", "boy", "look", "me", "A"],
      },
      {
        target: "I take a deep breath and say, “Hello, my name is Leo,” and I feel a little less shy and a little more at home.",
        jumbled: ["less", "say,", "and", "feel", "breath", "little", "take", "“Hello,", "name", "a", "deep", "at", "a", "I", "I", "is", "a", "and", "my", "shy", "more", "and", "home.", "little", "Leo,”"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your first time in a new place or class.",
    mySentenceExample: "I feel shy, but a friend says hello to me.",
  },
  {
    number: 2,
    title: "Finding My Seat",
    image: chapter2Img,
    imageNote: "Leo sitting at a desk near a classroom window; Ken turned around in the seat in front, showing Leo a notebook with a name sticker on Leo's desk.",
    story:
      "The next day, I arrive a little early and walk into the classroom slowly. Sara waves at me and points to a desk near the window. “You can sit here, Leo,” she says with a friendly smile. Ken sits in front of me and turns around to show me his notebook. He wrote my name on a small sticker and puts it on my desk. The teacher comes in, looks at me, and says, “Good, you found your seat.” I look at my name on the desk and feel like this place is really for me.",
    questions: [
      { text: "Where does Sara tell Leo to sit?", answer: "At a desk near the window." },
      { text: "What does Ken put on Leo’s desk?", answer: "A small sticker with Leo's name." },
      { text: "What does the teacher say when she sees Leo?", answer: "Good, you found your seat." },
    ],
    trueFalse: [
      { text: "Leo arrives late to the classroom.", answer: false },
      { text: "Sara helps Leo find a place to sit.", answer: true },
      { text: "The teacher is unhappy with Leo’s seat.", answer: false },
      { text: "Ken writes Leo’s name on a sticker.", answer: true },
      { text: "Leo sits far from the window.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next day, I arrive a little early and walk into the classroom slowly.",
        jumbled: ["into", "walk", "early", "a", "the", "next", "day,", "slowly.", "and", "The", "arrive", "I", "classroom", "little"],
      },
      {
        target: "Sara waves at me and points to a desk near the window.",
        jumbled: ["a", "near", "at", "points", "me", "to", "desk", "the", "Sara", "waves", "window.", "and"],
      },
      {
        target: "Ken sits in front of me and turns around to show me his notebook.",
        jumbled: ["sits", "of", "in", "me", "notebook.", "his", "show", "to", "front", "me", "turns", "around", "Ken", "and"],
      },
      {
        target: "He wrote my name on a small sticker and puts it on my desk.",
        jumbled: ["sticker", "and", "on", "wrote", "He", "puts", "on", "my", "a", "it", "desk.", "name", "small", "my"],
      },
      {
        target: "I look at my name on the desk and feel like this place is really for me.",
        jumbled: ["this", "the", "on", "place", "and", "I", "at", "my", "is", "feel", "name", "me.", "look", "desk", "really", "like", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your seat in class.",
    mySentenceExample: "I sit near the window in my classroom.",
  },
  {
    number: 3,
    title: "Break Time in the School Yard",
    image: chapter3Img,
    imageNote: "Leo, Sara, and Ken standing together under a big tree in the school yard, with other students playing basketball in the background.",
    story:
      "At break time, the teacher says, “You can go outside now,” and the students run to the school yard. Sara and Ken walk with me so I do not feel alone. We stand under a big tree and watch other students play basketball and talk. Ken asks me, “What do you like to do at school, Leo?” I tell him I like to draw and sometimes play games on my phone. Sara listens and says, “Maybe we can draw together in art class.” I look around the yard and feel less like a stranger and more like part of the school.",
    questions: [
      { text: "Where do the students go at break time?", answer: "The school yard." },
      { text: "Why do Sara and Ken walk with Leo?", answer: "So he does not feel alone." },
      { text: "What does Leo say he likes to do?", answer: "Draw and sometimes play games on his phone." },
    ],
    trueFalse: [
      { text: "The students stay in the classroom during break.", answer: false },
      { text: "Sara and Ken walk with Leo so he is not alone.", answer: true },
      { text: "Leo says he likes to draw.", answer: true },
      { text: "Other students play basketball in the yard.", answer: true },
      { text: "Ken asks Leo about his favorite food.", answer: false },
    ],
    buildSentence: [
      {
        target: "At break time, the teacher says, “You can go outside now,” and the students run to the school yard.",
        jumbled: ["go", "break", "to", "says,", "run", "“You", "the", "the", "school", "yard.", "time,", "At", "teacher", "now,”", "students", "the", "can", "outside", "and"],
      },
      {
        target: "Sara and Ken walk with me so I do not feel alone.",
        jumbled: ["walk", "do", "not", "so", "alone.", "I", "me", "with", "Ken", "Sara", "feel", "and"],
      },
      {
        target: "We stand under a big tree and watch other students play basketball and talk.",
        jumbled: ["basketball", "big", "talk.", "tree", "other", "and", "We", "watch", "under", "students", "a", "stand", "and", "play"],
      },
      {
        target: "Ken asks me, “What do you like to do at school, Leo?” I tell him I like to draw and sometimes play games on my phone.",
        jumbled: ["school,", "to", "Leo?”", "I", "at", "me,", "games", "draw", "you", "phone.", "like", "sometimes", "“What", "I", "my", "asks", "and", "on", "Ken", "do", "do", "like", "tell", "him", "play", "to"],
      },
      {
        target: "I look around the yard and feel less like a stranger and more like part of the school.",
        jumbled: ["the", "part", "more", "yard", "of", "around", "like", "and", "stranger", "feel", "less", "I", "a", "the", "look", "school.", "and", "like"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your break time.",
    mySentenceExample: "At break time, I talk with my friends in the yard.",
  },
  {
    number: 4,
    title: "My First Canteen Lunch",
    image: chapter4Img,
    imageNote: "Leo, Sara, and Ken sitting together at a canteen table with trays of rice, soup, and fried chicken, a busy canteen in the background.",
    story:
      "At lunchtime, Sara asks, “Leo, do you want to eat in the canteen with us?” I say yes, and we walk to the small canteen at the end of the hall. The room is busy, and I can smell rice, soup, and fried chicken. Ken helps me read the menu on the wall and points to a simple meal. I buy rice and chicken and a bottle of water with my money. We sit together at a table, and Sara tells me about the school clubs. As I eat my warm food and listen to them, I feel comfortable and not nervous anymore.",
    questions: [
      { text: "Where do they go for lunch?", answer: "The canteen." },
      { text: "Who helps Leo read the menu?", answer: "Ken." },
      { text: "What does Leo buy to eat?", answer: "Rice and chicken and a bottle of water." },
    ],
    trueFalse: [
      { text: "Leo eats alone in the classroom.", answer: false },
      { text: "The canteen is busy and has many smells.", answer: true },
      { text: "Leo feels more nervous at the end of lunch.", answer: false },
      { text: "Ken helps Leo read the menu.", answer: true },
      { text: "Leo buys noodles for lunch.", answer: false },
    ],
    buildSentence: [
      {
        target: "At lunchtime, Sara asks, “Leo, do you want to eat in the canteen with us?” I say yes, and we walk to the small canteen at the end of the hall.",
        jumbled: ["want", "of", "the", "and", "eat", "canteen", "at", "we", "the", "the", "hall.", "canteen", "end", "to", "the", "do", "Sara", "lunchtime,", "asks,", "“Leo,", "walk", "in", "At", "you", "with", "yes,", "small", "I", "to", "us?”", "say"],
      },
      {
        target: "The room is busy, and I can smell rice, soup, and fried chicken.",
        jumbled: ["is", "and", "smell", "The", "fried", "can", "and", "chicken.", "I", "busy,", "soup,", "rice,", "room"],
      },
      {
        target: "Ken helps me read the menu on the wall and points to a simple meal.",
        jumbled: ["points", "me", "the", "Ken", "the", "wall", "menu", "and", "on", "to", "helps", "read", "meal.", "a", "simple"],
      },
      {
        target: "I buy rice and chicken and a bottle of water with my money.",
        jumbled: ["bottle", "water", "a", "with", "of", "money.", "rice", "I", "and", "buy", "my", "and", "chicken"],
      },
      {
        target: "I feel comfortable and not nervous anymore.",
        jumbled: ["comfortable", "feel", "nervous", "and", "anymore.", "I", "not"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your lunch at school.",
    mySentenceExample: "I eat rice and drink water at lunch.",
  },
  {
    number: 5,
    title: "A Lost Notebook",
    image: chapter5Img,
    imageNote: "Leo looking worried while searching the hallway floor with Sara and Ken; a boy from another class holding up a blue notebook.",
    story:
      "One afternoon, after class, I look in my bag and cannot find my blue notebook. I feel worried because my homework and notes are inside it. Sara and Ken stay with me and help me check my desk and chair. We walk back to the hallway and look on the floor near the door. A boy from another class holds up a notebook and asks, “Is this yours, Leo? I saw your name on it.” I see my name on the cover and say, “Yes, thank you so much!” When I put the notebook safely in my bag, I feel safe again and very thankful for my classmates.",
    questions: [
      { text: "What item does Leo lose?", answer: "His blue notebook." },
      { text: "Who helps Leo look for it?", answer: "Sara and Ken." },
      { text: "Who finds the notebook in the hallway?", answer: "A boy from another class." },
    ],
    trueFalse: [
      { text: "Leo loses his blue notebook.", answer: true },
      { text: "Sara and Ken leave Leo alone to search.", answer: false },
      { text: "Leo feels thankful at the end.", answer: true },
      { text: "A boy from another class finds the notebook.", answer: true },
      { text: "Leo’s name is not on the notebook.", answer: false },
    ],
    buildSentence: [
      {
        target: "One afternoon, after class, I look in my bag and cannot find my blue notebook.",
        jumbled: ["cannot", "One", "afternoon,", "after", "and", "find", "notebook.", "look", "my", "I", "class,", "my", "in", "bag", "blue"],
      },
      {
        target: "I feel worried because my homework and notes are inside it.",
        jumbled: ["I", "notes", "because", "and", "inside", "feel", "homework", "worried", "are", "it.", "my"],
      },
      {
        target: "Sara and Ken stay with me and help me check my desk and chair.",
        jumbled: ["me", "and", "Ken", "with", "and", "desk", "check", "and", "help", "chair.", "me", "my", "stay", "Sara"],
      },
      {
        target: "A boy from another class holds up a notebook and asks, “Is this yours, Leo? I saw your name on it.”",
        jumbled: ["asks,", "yours,", "a", "“Is", "on", "it.”", "class", "A", "I", "your", "from", "this", "name", "boy", "and", "notebook", "Leo?", "another", "saw", "up", "holds"],
      },
      {
        target: "I feel safe again and very thankful for my classmates.",
        jumbled: ["safe", "my", "feel", "for", "and", "classmates.", "thankful", "I", "very", "again"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about losing or finding something.",
    mySentenceExample: "I lose my pen, but my friend finds it.",
  },
  {
    number: 6,
    title: "Joining the English Club",
    image: chapter6Img,
    imageNote: "Leo and Ken walking into a small clubroom where a few students sit in a circle, playing a word game and smiling.",
    story:
      "On Wednesday, the teacher tells the class about the English club after school. She says students can play word games, watch short videos, and practice speaking. Sara looks at me and says, “Leo, I think you will like this club.” After classes, Ken and I walk to the small room for the club together. Inside, a few students sit in a circle and smile at us. We play a simple word game and laugh when someone says a funny answer. When the club ends, I feel excited because I now have a place to practise English with new friends.",
    questions: [
      { text: "What club does the teacher tell the class about?", answer: "The English club." },
      { text: "What do students do in the English club?", answer: "Play word games, watch short videos, and practice speaking." },
      { text: "How does Leo feel when the club ends?", answer: "Excited." },
    ],
    trueFalse: [
      { text: "The club is about English.", answer: true },
      { text: "Students only sit and read quietly in the club.", answer: false },
      { text: "Leo feels excited at the end.", answer: true },
      { text: "Sara tells Leo he will like the club.", answer: true },
      { text: "The students never speak in the club.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Wednesday, the teacher tells the class about the English club after school.",
        jumbled: ["On", "the", "class", "the", "club", "Wednesday,", "English", "teacher", "the", "after", "school.", "tells", "about"],
      },
      {
        target: "She says students can play word games, watch short videos, and practice speaking.",
        jumbled: ["play", "speaking.", "can", "videos,", "students", "She", "says", "games,", "short", "watch", "and", "word", "practice"],
      },
      {
        target: "Sara looks at me and says, “Leo, I think you will like this club.”",
        jumbled: ["think", "“Leo,", "club.”", "at", "and", "says,", "like", "will", "Sara", "me", "this", "looks", "I", "you"],
      },
      {
        target: "Inside, a few students sit in a circle and smile at us.",
        jumbled: ["a", "and", "a", "few", "students", "at", "sit", "Inside,", "us.", "in", "circle", "smile"],
      },
      {
        target: "I feel excited because I now have a place to practise English with new friends.",
        jumbled: ["with", "have", "practise", "a", "I", "I", "to", "feel", "now", "because", "new", "excited", "friends.", "place", "English"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a club you like or want to join.",
    mySentenceExample: "I want to join the music club at school.",
  },
  {
    number: 7,
    title: "Homework Check",
    image: chapter7Img,
    imageNote: "Leo sitting at his desk with an open notebook while the teacher checks his work and smiles; Sara and Ken giving a thumbs-up nearby.",
    story:
      "The next morning, our teacher asks us to open our notebooks for a homework check. My hands feel a little cold, but I know I finished all the exercises last night. She walks around the room and looks at each student’s work. When she stops at my desk, she reads my answers slowly. Then she smiles and says, “Good job, Leo, your homework is clear.” Sara and Ken look at me and give me a small thumbs-up. I close my notebook and feel proud of my work in this new class.",
    questions: [
      { text: "What does the teacher ask the students to open?", answer: "Their notebooks." },
      { text: "How does Leo feel before the homework check?", answer: "A little cold and nervous." },
      { text: "What does the teacher say to Leo?", answer: "Good job, Leo, your homework is clear." },
    ],
    trueFalse: [
      { text: "Leo did not do his homework.", answer: false },
      { text: "The teacher says, “Good job, Leo.”", answer: true },
      { text: "Leo feels proud at the end.", answer: true },
      { text: "Leo finished his homework the night before.", answer: true },
      { text: "Sara and Ken ignore Leo after the check.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next morning, our teacher asks us to open our notebooks for a homework check.",
        jumbled: ["notebooks", "our", "next", "morning,", "teacher", "homework", "open", "a", "asks", "to", "us", "our", "for", "The", "check."],
      },
      {
        target: "My hands feel a little cold, but I know I finished all the exercises last night.",
        jumbled: ["know", "My", "I", "finished", "hands", "I", "the", "cold,", "all", "feel", "little", "night.", "exercises", "but", "last", "a"],
      },
      {
        target: "She walks around the room and looks at each student’s work.",
        jumbled: ["each", "looks", "and", "the", "room", "She", "at", "work.", "around", "student’s", "walks"],
      },
      {
        target: "Then she smiles and says, “Good job, Leo, your homework is clear.”",
        jumbled: ["clear.”", "homework", "Then", "and", "says,", "smiles", "she", "your", "Leo,", "job,", "is", "“Good"],
      },
      {
        target: "I close my notebook and feel proud of my work in this new class.",
        jumbled: ["this", "in", "class.", "new", "close", "work", "notebook", "my", "feel", "my", "proud", "of", "I", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your homework.",
    mySentenceExample: "I do my homework before I play games.",
  },
  {
    number: 8,
    title: "A Small Group Poster",
    image: chapter8Img,
    imageNote: "Leo, Sara, Ken, and Amir working together around a table on a poster titled 'My School Day', drawing pictures and writing sentences.",
    story:
      "This week, our teacher asks us to make a small poster in groups. She puts me with Sara, Ken, and another boy named Amir. We choose the topic “My School Day” and decide to draw pictures and write short sentences. Sara writes the title at the top of the paper in big letters. “Leo, what do you think?” she asks, showing me the page. Ken draws a classroom, and Amir draws the canteen and the yard. I write simple sentences under each picture. When we finish the poster, I feel happy because our group works well together.",
    questions: [
      { text: "What does the teacher ask the students to make?", answer: "A small poster in groups." },
      { text: "Who is in Leo’s group?", answer: "Sara, Ken, and Amir." },
      { text: "What topic does their group choose?", answer: "My School Day." },
    ],
    trueFalse: [
      { text: "The group topic is “My School Day.”", answer: true },
      { text: "Leo only draws pictures and does not write.", answer: false },
      { text: "Leo feels happy about the group at the end.", answer: true },
      { text: "Ken draws the classroom.", answer: true },
      { text: "Amir works alone on the poster.", answer: false },
    ],
    buildSentence: [
      {
        target: "This week, our teacher asks us to make a small poster in groups.",
        jumbled: ["poster", "to", "in", "This", "our", "a", "week,", "teacher", "small", "make", "us", "groups.", "asks"],
      },
      {
        target: "We choose the topic “My School Day” and decide to draw pictures and write short sentences.",
        jumbled: ["to", "draw", "decide", "the", "and", "We", "School", "and", "“My", "sentences.", "choose", "Day”", "short", "write", "pictures", "topic"],
      },
      {
        target: "Sara writes the title at the top of the paper in big letters.",
        jumbled: ["top", "the", "the", "at", "paper", "Sara", "of", "big", "title", "writes", "letters.", "the", "in"],
      },
      {
        target: "Ken draws a classroom, and Amir draws the canteen and the yard.",
        jumbled: ["draws", "Ken", "Amir", "draws", "the", "a", "and", "the", "yard.", "canteen", "and", "classroom,"],
      },
      {
        target: "I feel happy because our group works well together.",
        jumbled: ["group", "together.", "well", "works", "because", "happy", "I", "our", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about working in a group.",
    mySentenceExample: "In a group, I like to draw and write.",
  },
  {
    number: 9,
    title: "Our Short Class Presentation",
    image: chapter9Img,
    imageNote: "Leo's group standing at the front of the classroom presenting their poster; Sara holding the poster, Ken pointing at a picture, classmates listening and clapping.",
    story:
      "Today, each group stands at the front of the classroom to show their poster. My group is a little nervous, but the teacher smiles and tells us to start. Sara holds the poster, and Ken points to the first picture of the classroom. Amir reads one short sentence, and I read the next one slowly. Some students listen and nod when they understand. When we finish, the class claps, and the teacher says, “Well done, Leo, that was clear.” I feel nervous and excited at the same time, but I am glad we could speak in front of the class.",
    questions: [
      { text: "What does each group show at the front of the classroom?", answer: "Their poster." },
      { text: "Who holds the poster in Leo’s group?", answer: "Sara." },
      { text: "How does Leo feel at the end?", answer: "Nervous and excited at the same time." },
    ],
    trueFalse: [
      { text: "The class ignores the group and does not clap.", answer: false },
      { text: "Leo reads a sentence from the poster.", answer: true },
      { text: "The teacher says the presentation is clear.", answer: true },
      { text: "Sara holds the poster.", answer: true },
      { text: "The group refuses to speak in front of the class.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today, each group stands at the front of the classroom to show their poster.",
        jumbled: ["front", "group", "to", "the", "stands", "each", "Today,", "the", "show", "at", "their", "classroom", "of", "poster."],
      },
      {
        target: "My group is a little nervous, but the teacher smiles and tells us to start.",
        jumbled: ["start.", "group", "My", "teacher", "but", "tells", "and", "smiles", "little", "is", "nervous,", "to", "us", "the", "a"],
      },
      {
        target: "Sara holds the poster, and Ken points to the first picture of the classroom.",
        jumbled: ["picture", "holds", "classroom.", "the", "Ken", "Sara", "poster,", "first", "the", "the", "of", "to", "points", "and"],
      },
      {
        target: "Some students listen and nod when they understand.",
        jumbled: ["students", "when", "listen", "understand.", "Some", "nod", "they", "and"],
      },
      {
        target: "I feel nervous and excited at the same time, but I am glad we could speak in front of the class.",
        jumbled: ["could", "feel", "nervous", "time,", "but", "the", "am", "of", "glad", "excited", "and", "the", "front", "class.", "in", "speak", "I", "at", "same", "we", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about speaking in front of others.",
    mySentenceExample: "I feel shy, but I try to speak clearly.",
  },
  {
    number: 10,
    title: "This Class Feels Like Home",
    image: chapter10Img,
    imageNote: "Leo walking into the classroom smiling; Sara waving, Ken moving his bag over, Amir greeting him, and the class poster visible on the wall.",
    story:
      "On Friday morning, I walk into the classroom and hear my classmates talking and laughing. Sara waves at me, Ken moves his bag so I can sit, and Amir asks, “How are you today, Leo?” The teacher starts the lesson and uses our poster from last week on the board. She says, “This class did good work this month.” I look around and see my name on my desk, my notebook in my bag, and our poster on the wall. At the end of the day, we leave the school together and talk about next week. As I walk home with my friends, this school does not feel new anymore, and this class feels like home to me.",
    questions: [
      { text: "What does Sara do when Leo enters the classroom?", answer: "She waves at him." },
      { text: "What does the teacher use on the board?", answer: "Their poster from last week." },
      { text: "How does the class feel to Leo at the end?", answer: "Like home." },
    ],
    trueFalse: [
      { text: "Leo hears his classmates talking and laughing.", answer: true },
      { text: "The teacher says the class did bad work this month.", answer: false },
      { text: "Leo feels that the class is like home.", answer: true },
      { text: "Ken moves his bag so Leo can sit.", answer: true },
      { text: "Leo walks home alone at the end of the day.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Friday morning, I walk into the classroom and hear my classmates talking and laughing.",
        jumbled: ["classmates", "I", "and", "the", "my", "Friday", "classroom", "On", "laughing.", "and", "talking", "walk", "hear", "into", "morning,"],
      },
      {
        target: "Sara waves at me, Ken moves his bag so I can sit, and Amir asks, “How are you today, Leo?”",
        jumbled: ["“How", "today,", "moves", "asks,", "are", "sit,", "Ken", "bag", "waves", "and", "Sara", "his", "so", "Leo?”", "Amir", "at", "you", "can", "I", "me,"],
      },
      {
        target: "The teacher starts the lesson and uses our poster from last week on the board.",
        jumbled: ["on", "The", "week", "lesson", "our", "the", "from", "the", "poster", "starts", "last", "teacher", "and", "board.", "uses"],
      },
      {
        target: "I look around and see my name on my desk, my notebook in my bag, and our poster on the wall.",
        jumbled: ["see", "on", "in", "the", "around", "our", "notebook", "I", "wall.", "name", "on", "my", "look", "bag,", "my", "and", "desk,", "my", "my", "poster", "and"],
      },
      {
        target: "This school does not feel new anymore, and this class feels like home to me.",
        jumbled: ["this", "and", "not", "This", "feels", "like", "does", "feel", "home", "me.", "school", "class", "to", "anymore,", "new"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a place that feels like home to you.",
    mySentenceExample: "My classroom feels like home when I am with my friends.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
