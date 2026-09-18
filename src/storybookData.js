// A1 Teens digital storybook: "The School Days of Paul, Ethan, Mia & Angel"
// Static content -- no Supabase, mirrors the pattern in CurriculumOverview.jsx.

import coverImg from "./assets/storybook/cover.jpeg";
import chapter1Img from "./assets/storybook/chapter1.webp";
import chapter2Img from "./assets/storybook/chapter2.webp";
import chapter3Img from "./assets/storybook/chapter3.webp";
import chapter4Img from "./assets/storybook/chapter4.webp";
import chapter5Img from "./assets/storybook/chapter5.webp";
import chapter6Img from "./assets/storybook/chapter6.webp";
import chapter7Img from "./assets/storybook/chapter7.webp";
import chapter8Img from "./assets/storybook/chapter8.webp";
import chapter9Img from "./assets/storybook/chapter9.webp";
import chapter10Img from "./assets/storybook/chapter10.webp";

export const STORYBOOK_TITLE = "Paul's Diary";
export const STORYBOOK_SUBTITLE = "An A1 storybook for teens";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "A group illustration of all four teen friends standing together outside their school, smiling: Paul, Ethan, Mia, and Angel.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Paul", role: "The narrator", look: "Short black hair, round glasses, navy blue hoodie." },
  { name: "Ethan", role: "Paul's best friend", look: "Curly brown hair, red sports jersey, big smile." },
  { name: "Mia", role: "Paul's classmate", look: "Long hair in a high ponytail, yellow denim jacket." },
  { name: "Angel", role: "Paul's classmate", look: "Short curly hair, green basketball jacket." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My Morning Alarm",
    image: chapter1Img,
    imageNote: "Paul sitting up in bed with his phone, morning light through the window; Mia and Angel visible in the kitchen doorway.",
    story:
      "In the morning, my alarm rings at six thirty. I open my eyes and see my phone on the small table. Ethan sends me a short message: “Wake up, Paul!” I laugh, turn off the alarm, and sit up in my bed. In the kitchen, Mia drinks hot chocolate and talks with Angel. We eat bread and eggs together and look at our school bags. After breakfast, we walk to school and feel ready for the day.",
    questions: [
      { text: "What time does the alarm ring?", answer: "At six thirty." },
      { text: "Who sends a message to Paul?", answer: "Ethan." },
      { text: "What do they eat in the kitchen?", answer: "Bread and eggs." },
    ],
    trueFalse: [
      { text: "Paul’s alarm rings at eight o’clock.", answer: false },
      { text: "Ethan sends a message to Paul.", answer: true },
      { text: "They walk to school after breakfast.", answer: true },
      { text: "Mia drinks hot chocolate in the kitchen.", answer: true },
      { text: "They eat cereal for breakfast.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the morning, my alarm rings at six thirty.",
        jumbled: ["my", "at", "six", "In", "the", "rings", "morning,", "thirty.", "alarm"],
      },
      {
        target: "I open my eyes and see my phone on the small table.",
        jumbled: ["my", "and", "my", "I", "eyes", "small", "see", "table.", "on", "phone", "open", "the"],
      },
      {
        target: "I laugh, turn off the alarm, and sit up in my bed.",
        jumbled: ["in", "off", "bed.", "my", "laugh,", "up", "sit", "and", "alarm,", "I", "the", "turn"],
      },
      {
        target: "In the kitchen, Mia drinks hot chocolate and talks with Angel.",
        jumbled: ["In", "kitchen,", "talks", "Mia", "Angel.", "drinks", "the", "hot", "chocolate", "with", "and"],
      },
      {
        target: "We eat bread and eggs together and look at our school bags.",
        jumbled: ["and", "at", "together", "and", "look", "school", "bread", "We", "eggs", "our", "bags.", "eat"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your morning.",
    mySentenceExample: "In the morning, I wake up at seven.",
  },
  {
    number: 2,
    title: "A Busy Break Time",
    image: chapter2Img,
    imageNote: "Paul and Mia at a school desk during break time, with Ethan eating a sandwich and Angel talking nearby.",
    story:
      "At school, I sit with Mia during break time. Our classroom is noisy, but I like the happy sound. Ethan buys a sandwich and a bottle of water from the small canteen. Near the window, Angel tells us about her basketball practice after class. We listen to her and smile because she is very excited. My sandwich is warm, and Mia shares her apple with me. “Here, Paul, try some,” she says. When the bell rings again, we go back to class together.",
    questions: [
      { text: "Who sits with Paul during break time?", answer: "Mia." },
      { text: "What does Ethan buy from the canteen?", answer: "A sandwich and a bottle of water." },
      { text: "Why do they smile at Angel?", answer: "Because she is very excited about her basketball practice." },
    ],
    trueFalse: [
      { text: "Paul sits alone during break time.", answer: false },
      { text: "Ethan buys a sandwich and water.", answer: true },
      { text: "Angel talks about music class.", answer: false },
      { text: "Mia shares her apple with Paul.", answer: true },
      { text: "The bell doesn’t ring again.", answer: false },
    ],
    buildSentence: [
      {
        target: "At school, I sit with Mia during break time.",
        jumbled: ["Mia", "time.", "break", "with", "I", "school,", "sit", "during", "At"],
      },
      {
        target: "Ethan buys a sandwich and a bottle of water from the small canteen.",
        jumbled: ["the", "canteen.", "and", "water", "small", "of", "a", "from", "bottle", "buys", "sandwich", "Ethan", "a"],
      },
      {
        target: "Near the window, Angel tells us about her basketball practice after class.",
        jumbled: ["practice", "the", "Angel", "after", "about", "us", "her", "Near", "class.", "tells", "basketball", "window,"],
      },
      {
        target: "We listen to her and smile because she is very excited.",
        jumbled: ["excited.", "her", "she", "We", "smile", "to", "is", "very", "because", "and", "listen"],
      },
      {
        target: "We go back to class together.",
        jumbled: ["together.", "We", "class", "to", "go", "back"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your break time.",
    mySentenceExample: "During break time, I eat bread with my friend.",
  },
  {
    number: 3,
    title: "Our Favorite Lunch",
    image: chapter3Img,
    imageNote: "All four friends sitting together at an outdoor lunch table near the school garden, sharing food.",
    story:
      "At lunch time, we sit at the same table near the school garden. Paul likes rice and chicken, but Ethan likes noodles more. Mia opens her lunch box and shows us her favorite sandwich. Angel drinks juice and says the mango flavor is very good. We talk about food, laugh together, and share small bites. The sun is bright, so we stay in the shade and enjoy our meal. After lunch, everyone feels full and happy.",
    questions: [
      { text: "Where do they sit at lunch time?", answer: "At the same table near the school garden." },
      { text: "What food does Ethan like more?", answer: "Noodles." },
      { text: "What flavor does Angel like?", answer: "Mango." },
    ],
    trueFalse: [
      { text: "They sit near the school garden.", answer: true },
      { text: "Paul likes noodles more than rice and chicken.", answer: false },
      { text: "Angel drinks juice.", answer: true },
      { text: "Ethan likes noodles more than rice and chicken.", answer: true },
      { text: "They eat lunch inside the classroom.", answer: false },
    ],
    buildSentence: [
      {
        target: "At lunch time, we sit at the same table near the school garden.",
        jumbled: ["the", "we", "near", "time,", "garden.", "school", "at", "same", "table", "At", "sit", "the", "lunch"],
      },
      {
        target: "Paul likes rice and chicken, but Ethan likes noodles more.",
        jumbled: ["likes", "Ethan", "and", "but", "Paul", "noodles", "chicken,", "more.", "likes", "rice"],
      },
      {
        target: "Mia opens her lunch box and shows us her favorite sandwich.",
        jumbled: ["shows", "opens", "box", "favorite", "sandwich.", "Mia", "us", "lunch", "and", "her", "her"],
      },
      {
        target: "We talk about food, laugh together, and share small bites.",
        jumbled: ["share", "food,", "bites.", "talk", "and", "small", "together,", "about", "laugh", "We"],
      },
      {
        target: "The sun is bright, so we stay in the shade and enjoy our meal.",
        jumbled: ["The", "and", "sun", "the", "meal.", "stay", "shade", "enjoy", "bright,", "in", "so", "we", "is", "our"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite lunch.",
    mySentenceExample: "My favorite lunch is rice and egg.",
  },
  {
    number: 4,
    title: "After-School Plans",
    image: chapter4Img,
    imageNote: "The four friends at the school gate in the late afternoon sun, Ethan holding a skateboard.",
    story:
      "When classes end, I wait for my friends at the school gate. Ethan wants to go to the park because he likes skateboarding there. Mia needs to go home early and help her mother in the kitchen. Angel asks us to stop at a small shop for cold drinks first. “Paul, are you coming?” she says. I look at the sky, feel the warm air, and think it is a good afternoon. In the end, we go to the shop together and talk on the way. After that, we say goodbye and follow our own plans.",
    questions: [
      { text: "Where does Paul wait for his friends?", answer: "At the school gate." },
      { text: "Why does Ethan want to go to the park?", answer: "Because he likes skateboarding there." },
      { text: "Where do they go first together?", answer: "To a small shop for cold drinks." },
    ],
    trueFalse: [
      { text: "Paul waits at the school gate.", answer: true },
      { text: "Mia wants to go skateboarding.", answer: false },
      { text: "They go to a small shop first.", answer: true },
      { text: "Ethan likes skateboarding at the park.", answer: true },
      { text: "Angel wants to go straight home.", answer: false },
    ],
    buildSentence: [
      {
        target: "I wait for my friends at the school gate.",
        jumbled: ["at", "the", "wait", "gate.", "I", "friends", "for", "my", "school"],
      },
      {
        target: "Mia needs to go home early and help her mother in the kitchen.",
        jumbled: ["to", "needs", "her", "help", "early", "and", "the", "in", "go", "Mia", "mother", "kitchen.", "home"],
      },
      {
        target: "Angel asks us to stop at a small shop for cold drinks first.",
        jumbled: ["stop", "shop", "for", "Angel", "us", "a", "at", "first.", "small", "to", "cold", "asks", "drinks"],
      },
      {
        target: "I look at the sky, feel the warm air, and think it is a good afternoon.",
        jumbled: ["sky,", "warm", "look", "at", "good", "feel", "the", "think", "air,", "afternoon.", "I", "a", "the", "is", "and", "it"],
      },
      {
        target: "In the end, we go to the shop together and talk on the way.",
        jumbled: ["on", "the", "shop", "talk", "to", "the", "go", "the", "and", "together", "end,", "we", "way.", "In"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your plan after school.",
    mySentenceExample: "After school, I go home and rest.",
  },
  {
    number: 5,
    title: "A Rainy Walk Home",
    image: chapter5Img,
    imageNote: "The four friends walking home together in the rain, all sharing one big blue umbrella.",
    story:
      "This afternoon, dark clouds fill the sky above our school. A few minutes later, the rain starts, and everyone runs to the front hall. Ethan laughs because he has a big blue umbrella in his bag. “Don’t worry, Paul, we’ll stay dry,” he says. Mia stands next to me and watches the water on the street. Angel says the rain is cold, but she likes the fresh air. When the rain gets lighter, we walk home slowly under Ethan’s umbrella. Our shoes get a little wet, but the walk feels fun.",
    questions: [
      { text: "What fills the sky above the school?", answer: "Dark clouds." },
      { text: "What does Ethan have in his bag?", answer: "A big blue umbrella." },
      { text: "How do they walk home?", answer: "Slowly, together under Ethan's umbrella." },
    ],
    trueFalse: [
      { text: "The weather is sunny after school.", answer: false },
      { text: "Ethan has a blue umbrella.", answer: true },
      { text: "Their shoes stay completely dry.", answer: false },
      { text: "Everyone runs to the front hall.", answer: true },
      { text: "Mia stands far away from Paul.", answer: false },
    ],
    buildSentence: [
      {
        target: "This afternoon, dark clouds fill the sky above our school.",
        jumbled: ["school.", "afternoon,", "fill", "our", "above", "clouds", "the", "dark", "sky", "This"],
      },
      {
        target: "A few minutes later, the rain starts, and everyone runs to the front hall.",
        jumbled: ["the", "and", "rain", "later,", "hall.", "to", "runs", "few", "A", "minutes", "the", "everyone", "starts,", "front"],
      },
      {
        target: "“Don’t worry, Paul, we’ll stay dry,” he says.",
        jumbled: ["we’ll", "Paul,", "dry,”", "“Don’t", "worry,", "he", "stay", "says."],
      },
      {
        target: "Mia stands next to me and watches the water on the street.",
        jumbled: ["the", "Mia", "on", "stands", "next", "and", "to", "me", "the", "water", "watches", "street."],
      },
      {
        target: "We walk home slowly under Ethan’s umbrella.",
        jumbled: ["under", "Ethan’s", "walk", "We", "slowly", "umbrella.", "home"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about rainy days.",
    mySentenceExample: "On rainy days, I bring an umbrella.",
  },
  {
    number: 6,
    title: "My Hobby Club",
    image: chapter6Img,
    imageNote: "Paul and Mia sitting together in the art room, drawing; a finished picture of a park with birds on the table.",
    story:
      "On Wednesday, I stay at school for the art club after class. Mia sits beside me because she also likes drawing. Ethan does not join the club, but he comes to see our pictures for a few minutes. Angel looks at my paper and says, “Paul, your tree is nice and colorful.” The room is quiet, so I can think and draw well. I make a picture of a park with birds, grass, and a bench. Before going home, I put my drawing in my bag and feel proud.",
    questions: [
      { text: "What club does Paul join after class?", answer: "The art club." },
      { text: "Who sits beside Paul?", answer: "Mia." },
      { text: "How does Paul feel before going home?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Paul stays for the art club.", answer: true },
      { text: "Ethan joins the club and draws all afternoon.", answer: false },
      { text: "Paul feels proud of his drawing.", answer: true },
      { text: "Angel says Paul’s tree is nice and colorful.", answer: true },
      { text: "The art room is very noisy.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Wednesday, I stay at school for the art club after class.",
        jumbled: ["at", "after", "stay", "school", "Wednesday,", "On", "club", "the", "I", "class.", "art", "for"],
      },
      {
        target: "Mia sits beside me because she also likes drawing.",
        jumbled: ["she", "likes", "because", "me", "sits", "beside", "drawing.", "Mia", "also"],
      },
      {
        target: "Ethan does not join the club, but he comes to see our pictures for a few minutes.",
        jumbled: ["the", "a", "he", "club,", "but", "join", "see", "our", "comes", "not", "Ethan", "does", "minutes.", "pictures", "few", "to", "for"],
      },
      {
        target: "The room is quiet, so I can think and draw well.",
        jumbled: ["well.", "room", "and", "draw", "The", "can", "is", "quiet,", "I", "think", "so"],
      },
      {
        target: "I make a picture of a park with birds, grass, and a bench.",
        jumbled: ["park", "and", "I", "picture", "grass,", "a", "birds,", "make", "of", "with", "a", "a", "bench."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your hobby.",
    mySentenceExample: "My hobby is drawing small pictures.",
  },
  {
    number: 7,
    title: "A Saturday at Home",
    image: chapter7Img,
    imageNote: "Paul at the breakfast table with a plate of pancakes, looking at a photo on his phone.",
    story:
      "On Saturday morning, I do not go to school, so I wake up a little late. My father makes pancakes, and the sweet smell fills the kitchen. “Good morning, Paul,” he says with a smile. After breakfast, Ethan sends me a photo of his new football shoes. Mia stays at home and reads a comic book near her window. Angel helps her older sister clean the living room and arrange the chairs. In the afternoon, I play a mobile game and listen to music in my room. It is a simple day, but I feel relaxed and happy.",
    questions: [
      { text: "Why does Paul wake up a little late?", answer: "Because he does not go to school on Saturday." },
      { text: "What does Ethan send to Paul?", answer: "A photo of his new football shoes." },
      { text: "What does Angel help clean?", answer: "The living room." },
    ],
    trueFalse: [
      { text: "Paul goes to school on Saturday morning.", answer: false },
      { text: "Ethan sends a photo of new football shoes.", answer: true },
      { text: "Angel helps clean the kitchen.", answer: false },
      { text: "Paul’s father makes pancakes.", answer: true },
      { text: "Mia plays basketball on Saturday.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Saturday morning, I do not go to school, so I wake up a little late.",
        jumbled: ["school,", "do", "up", "little", "morning,", "I", "I", "to", "wake", "a", "Saturday", "go", "late.", "not", "so", "On"],
      },
      {
        target: "My father makes pancakes, and the sweet smell fills the kitchen.",
        jumbled: ["the", "father", "fills", "makes", "and", "sweet", "pancakes,", "the", "kitchen.", "smell", "My"],
      },
      {
        target: "Ethan sends me a photo of his new football shoes.",
        jumbled: ["of", "Ethan", "a", "sends", "photo", "shoes.", "football", "his", "new", "me"],
      },
      {
        target: "Angel helps her older sister clean the living room and arrange the chairs.",
        jumbled: ["the", "arrange", "the", "her", "helps", "living", "room", "Angel", "sister", "and", "chairs.", "clean", "older"],
      },
      {
        target: "In the afternoon, I play a mobile game and listen to music in my room.",
        jumbled: ["a", "in", "play", "game", "I", "music", "the", "In", "room.", "listen", "and", "mobile", "my", "afternoon,", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your Saturday.",
    mySentenceExample: "On Saturday, I watch TV at home.",
  },
  {
    number: 8,
    title: "A Small Birthday Surprise",
    image: chapter8Img,
    imageNote: "The friends surprising Mia at the lunch table with a small pink gift bag and a set of colorful pens.",
    story:
      "Today is Mia’s birthday, and we want to do something nice for her. Before class, Ethan gives Angel a small pink gift bag to carry. I keep a birthday card inside my notebook and wait for the right time. At lunch, we call Mia to our table and sing for her with big smiles. She looks surprised, opens the gift bag, and finds a set of colorful pens. Her eyes shine, and she thanks us again and again. “Thank you, Paul, Ethan, Angel!” she says. The lunch break feels short, but the moment feels special.",
    questions: [
      { text: "Whose birthday is it?", answer: "Mia's." },
      { text: "What does Paul keep inside his notebook?", answer: "A birthday card." },
      { text: "What is inside the gift bag?", answer: "A set of colorful pens." },
    ],
    trueFalse: [
      { text: "It is Angel’s birthday.", answer: false },
      { text: "Paul keeps a birthday card in his notebook.", answer: true },
      { text: "Mia finds colorful pens in the gift bag.", answer: true },
      { text: "Ethan gives Angel a small pink gift bag.", answer: true },
      { text: "Mia feels sad during lunch.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today is Mia’s birthday, and we want to do something nice for her.",
        jumbled: ["we", "Mia’s", "and", "something", "want", "birthday,", "for", "is", "her.", "nice", "to", "Today", "do"],
      },
      {
        target: "I keep a birthday card inside my notebook and wait for the right time.",
        jumbled: ["a", "keep", "inside", "wait", "right", "card", "and", "notebook", "I", "birthday", "my", "time.", "the", "for"],
      },
      {
        target: "At lunch, we call Mia to our table and sing for her with big smiles.",
        jumbled: ["and", "her", "big", "At", "table", "to", "for", "Mia", "smiles.", "our", "sing", "lunch,", "we", "with", "call"],
      },
      {
        target: "She looks surprised, opens the gift bag, and finds a set of colorful pens.",
        jumbled: ["and", "opens", "finds", "She", "the", "pens.", "gift", "colorful", "surprised,", "bag,", "a", "of", "looks", "set"],
      },
      {
        target: "The lunch break feels short, but the moment feels special.",
        jumbled: ["moment", "The", "but", "feels", "feels", "special.", "lunch", "short,", "the", "break"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about birthdays.",
    mySentenceExample: "On my birthday, I eat cake with my family.",
  },
  {
    number: 9,
    title: "Our Class Project Day",
    image: chapter9Img,
    imageNote: "Paul, Ethan, Mia, and Angel gathered around a classroom desk, making a poster about healthy habits.",
    story:
      "This week, our class makes a simple project about healthy habits. In the classroom, the teacher puts us in one group, so we work together. Ethan writes the title on a big sheet of paper with neat letters. Mia draws fruit and water bottles in bright colors. Angel talks about exercise and gives us good ideas for the poster. “Paul, can you cut the pictures?” she asks. I cut the pictures carefully and glue them in the right place. At the end of class, our poster looks clean, colorful, and complete.",
    questions: [
      { text: "What is the class project about?", answer: "Healthy habits." },
      { text: "Who writes the title on the paper?", answer: "Ethan." },
      { text: "What does Paul do for the poster?", answer: "He cuts the pictures and glues them in the right place." },
    ],
    trueFalse: [
      { text: "The class project is about healthy habits.", answer: true },
      { text: "Mia writes the title with neat letters.", answer: false },
      { text: "Paul glues the pictures in the right place.", answer: true },
      { text: "Ethan writes the title with neat letters.", answer: true },
      { text: "Angel talks about video games for the poster.", answer: false },
    ],
    buildSentence: [
      {
        target: "This week, our class makes a simple project about healthy habits.",
        jumbled: ["our", "class", "project", "makes", "a", "week,", "simple", "This", "healthy", "habits.", "about"],
      },
      {
        target: "In the classroom, the teacher puts us in one group, so we work together.",
        jumbled: ["so", "the", "classroom,", "puts", "In", "we", "the", "us", "in", "group,", "together.", "work", "teacher", "one"],
      },
      {
        target: "Mia draws fruit and water bottles in bright colors.",
        jumbled: ["fruit", "and", "water", "in", "Mia", "colors.", "bottles", "bright", "draws"],
      },
      {
        target: "Angel talks about exercise and gives us good ideas for the poster.",
        jumbled: ["good", "exercise", "gives", "us", "poster.", "Angel", "about", "and", "the", "for", "ideas", "talks"],
      },
      {
        target: "I cut the pictures carefully and glue them in the right place.",
        jumbled: ["pictures", "glue", "in", "the", "the", "place.", "I", "and", "cut", "carefully", "right", "them"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about group work.",
    mySentenceExample: "In group work, I draw pictures.",
  },
  {
    number: 10,
    title: "The Best Day of the Term",
    image: chapter10Img,
    imageNote: "The four friends standing together in front of a wall of colorful class posters, all smiling.",
    story:
      "This morning, our teacher puts the class projects on the wall for everyone to see. I stand with Ethan, Mia, and Angel in front of our poster and smile. The teacher says our work is neat, colorful, and easy to understand. “Well done, Paul,” she adds with a smile. Ethan looks proud, and Angel gives Mia a happy high five. During break time, we talk about our favorite moments this term. I think about the rainy walk, the art club, and Mia’s birthday surprise. On the way home, I feel thankful for my friends and for all our good days together.",
    questions: [
      { text: "Where does the teacher put the class projects?", answer: "On the wall." },
      { text: "What does the teacher say about their work?", answer: "That it is neat, colorful, and easy to understand." },
      { text: "How does Paul feel on the way home?", answer: "Thankful." },
    ],
    trueFalse: [
      { text: "The teacher puts the projects on the wall.", answer: true },
      { text: "Angel is sad in front of the poster.", answer: false },
      { text: "Paul feels thankful on the way home.", answer: true },
      { text: "Ethan looks proud in front of the poster.", answer: true },
      { text: "They forget about the rainy walk.", answer: false },
    ],
    buildSentence: [
      {
        target: "This morning, our teacher puts the class projects on the wall for everyone to see.",
        jumbled: ["projects", "This", "class", "everyone", "our", "on", "the", "to", "teacher", "puts", "for", "morning,", "the", "see.", "wall"],
      },
      {
        target: "I stand with Ethan, Mia, and Angel in front of our poster and smile.",
        jumbled: ["in", "Mia,", "with", "Angel", "smile.", "and", "stand", "of", "Ethan,", "poster", "and", "our", "front", "I"],
      },
      {
        target: "“Well done, Paul,” she adds with a smile.",
        jumbled: ["adds", "Paul,”", "done,", "smile.", "a", "“Well", "she", "with"],
      },
      {
        target: "Ethan looks proud, and Angel gives Mia a happy high five.",
        jumbled: ["high", "Angel", "a", "Ethan", "Mia", "five.", "and", "looks", "gives", "proud,", "happy"],
      },
      {
        target: "On the way home, I feel thankful for my friends and for all our good days together.",
        jumbled: ["friends", "together.", "thankful", "good", "feel", "and", "home,", "way", "On", "my", "for", "all", "I", "days", "the", "our", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your friends.",
    mySentenceExample: "My friends make school fun.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "1 / 1",
};
