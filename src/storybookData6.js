// A1 Teens digital storybook, Book 6: "A Stronger Swimmer"
// Static content -- no Supabase, mirrors the pattern in storybookData5.js.
import coverImg from "./assets/storybook6/cover.jpg";

export const STORYBOOK_TITLE = "A Stronger Swimmer";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Sam standing at the edge of the city swimming pool wearing a blue swim cap and goggles, coach Ms. Lee smiling beside him, friends Ravi and Tina in the water nearby.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Sam", role: "The narrator, a new swimmer", look: "Short hair, blue swim cap and goggles, nervous-but-determined expression at first." },
  { name: "Ms. Lee", role: "The swim coach", look: "Red or coral swimsuit, whistle-lanyard, warm and patient expression." },
  { name: "Ravi", role: "Sam's classmate", look: "Dark hair, green swim cap, energetic and playful." },
  { name: "Tina", role: "Sam's classmate", look: "Hair tucked under a yellow swim cap, encouraging and confident in the water." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Day at the Swimming Pool",
    image: null,
    imageNote: "Sam standing at the edge of the city pool holding a towel, Ms. Lee (red swimsuit) smiling and handing him a blue swim cap, other children splashing in the shallow end behind them.",
    story:
      "Every Saturday morning, I go to the big swimming pool in the city. Today is my first swimming lesson, and my stomach feels a little tight. I stand near the water and watch other people swim from one side to the other. Some children wear bright goggles and splash happily in the shallow end. The swim coach, Ms. Lee, walks over and smiles at me. She says, “Hello, Sam, welcome to the class.” I say hello back and hold my towel close to my body. Ms. Lee gives me a blue swim cap and tells me to put it on my head. The water looks cold and deep, but the coach stands near me and waits. When I slowly put my feet in the pool, the water feels cool on my skin. I still feel a little afraid, but I am proud that I took my first step into the pool.",
    questions: [
      { text: "When does Sam go to the swimming pool?", answer: "Every Saturday morning." },
      { text: "Who is Ms. Lee?", answer: "The swim coach." },
      { text: "What does Sam do at the end of the story?", answer: "He slowly puts his feet in the pool." },
    ],
    trueFalse: [
      { text: "Today is Sam's first swimming lesson.", answer: true },
      { text: "The children are angry and quiet in the shallow end.", answer: false },
      { text: "Sam feels a little afraid but proud at the end.", answer: true },
      { text: "Ms. Lee gives Sam a blue swim cap.", answer: true },
      { text: "Sam refuses to put his feet in the water.", answer: false },
    ],
    buildSentence: [
      {
        target: "Every Saturday morning, I go to the big swimming pool in the city.",
        jumbled: ["in", "city.", "swimming", "Every", "Saturday", "pool", "I", "the", "go", "to", "morning,", "the", "big"],
      },
      {
        target: "I stand near the water and watch other people swim from one side to the other.",
        jumbled: ["other.", "and", "the", "stand", "other", "people", "swim", "watch", "I", "near", "from", "water", "the", "side", "to", "one"],
      },
      {
        target: "She says, “Hello, Sam, welcome to the class.” I say hello back and hold my towel close to my body.",
        jumbled: ["“Hello,", "to", "to", "say", "welcome", "back", "hold", "the", "and", "hello", "body.", "class.”", "close", "says,", "She", "I", "towel", "my", "my", "Sam,"],
      },
      {
        target: "Ms. Lee gives me a blue swim cap and tells me to put it on my head.",
        jumbled: ["it", "head.", "swim", "my", "to", "and", "me", "Lee", "Ms.", "blue", "put", "on", "tells", "cap", "a", "me", "gives"],
      },
      {
        target: "I still feel a little afraid, but I am proud that I took my first step into the pool.",
        jumbled: ["into", "pool.", "a", "step", "am", "afraid,", "still", "I", "my", "little", "that", "first", "I", "took", "feel", "the", "proud", "I", "but"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about swimming and you.",
    mySentenceExample: "I feel nervous, but I want to learn how to swim.",
  },
  {
    number: 2,
    title: "Meeting the Swim Coach and Class",
    image: null,
    imageNote: "Sam sitting in a row with Ravi and Tina and other students at the pool edge, Ms. Lee standing in front introducing the class, everyone in swim caps and goggles.",
    story:
      "On my second Saturday, I arrive early and sit on a bench near the pool. Ms. Lee comes to me and says, “Good morning, Sam, are you ready to learn today?” She calls all the students together and asks us to sit in a row. One by one, we say our names, our ages, and if we can swim a little. A boy next to me says, “Hi, I am Ravi,” and a girl says, “I am Tina.” Ms. Lee tells us that today we will only learn in the shallow water. “Do not worry,” she says, “everyone learns at their own speed.” We all put on our swim caps and goggles and walk to the edge together. When I look at my new classmates, I do not feel so alone anymore. In that moment, I feel calm because now I know my coach and my class.",
    questions: [
      { text: "What does Ms. Lee ask the students to do first?", answer: "Sit in a row and say their names, ages, and if they can swim a little." },
      { text: "What are the names of the two classmates Sam meets?", answer: "Ravi and Tina." },
      { text: "Where will the class learn today?", answer: "In the shallow water." },
    ],
    trueFalse: [
      { text: "Sam arrives early and sits on a bench.", answer: true },
      { text: "The class will swim in the deep water today.", answer: false },
      { text: "Sam feels calm at the end because he knows his class.", answer: true },
      { text: "Ravi and Tina are Sam's classmates.", answer: true },
      { text: "Ms. Lee says everyone must swim at the same speed.", answer: false },
    ],
    buildSentence: [
      {
        target: "On my second Saturday, I arrive early and sit on a bench near the pool.",
        jumbled: ["arrive", "bench", "second", "I", "early", "On", "sit", "and", "a", "my", "pool.", "on", "the", "near", "Saturday,"],
      },
      {
        target: "Ms. Lee comes to me and says, “Good morning, Sam, are you ready to learn today?” She calls all the students together and asks us to sit in a row.",
        jumbled: ["Sam,", "all", "in", "and", "students", "comes", "calls", "ready", "says,", "to", "and", "learn", "row.", "together", "you", "to", "asks", "me", "to", "us", "Ms.", "morning,", "“Good", "sit", "She", "today?”", "Lee", "are", "the", "a"],
      },
      {
        target: "A boy next to me says, “Hi, I am Ravi,” and a girl says, “I am Tina.” Ms. Lee tells us that today we will only learn in the shallow water.",
        jumbled: ["learn", "me", "to", "and", "tells", "in", "today", "only", "boy", "water.", "says,", "we", "shallow", "Lee", "Ravi,”", "“I", "Tina.”", "says,", "will", "us", "“Hi,", "Ms.", "girl", "that", "the", "am", "am", "next", "I", "A", "a"],
      },
      {
        target: "We all put on our swim caps and goggles and walk to the edge together.",
        jumbled: ["all", "put", "We", "and", "swim", "to", "edge", "our", "together.", "caps", "goggles", "the", "and", "on", "walk"],
      },
      {
        target: "In that moment, I feel calm because now I know my coach and my class.",
        jumbled: ["my", "now", "and", "calm", "class.", "coach", "moment,", "my", "feel", "that", "I", "know", "In", "because", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your class or your classmates.",
    mySentenceExample: "I have kind classmates in my swimming class.",
  },
  {
    number: 3,
    title: "Learning to Kick and Move My Arms",
    image: null,
    imageNote: "Sam holding the edge of the shallow pool kicking his legs behind him, Ms. Lee demonstrating arm circles nearby, Ravi splashing happily beside him.",
    story:
      "Today, Ms. Lee says we will learn how to kick our legs and move our arms. She stands in the shallow water and shows us slowly with her own body. “Kick from your hips, and keep your legs long and straight,” she tells us. I hold the edge of the pool and kick my legs behind me in the water. At first, my kicks make big splashes, but the coach says, “That's okay, Sam, just keep trying.” Then Ms. Lee shows us how to move our arms in slow circles. Ravi kicks fast and laughs when the water jumps up around him. I try to kick and move my arms at the same time, but it is a little hard. Slowly, my body starts to feel the rhythm of kick and pull. In that moment, I feel happy because my arms and legs work together in the water.",
    questions: [
      { text: "What does Ms. Lee teach the class today?", answer: "How to kick their legs and move their arms." },
      { text: "What does Sam hold while he kicks his legs?", answer: "The edge of the pool." },
      { text: "How does Sam feel at the end?", answer: "Happy." },
    ],
    trueFalse: [
      { text: "The class learns to kick and move their arms.", answer: true },
      { text: "Ms. Lee is angry about the big splashes.", answer: false },
      { text: "Sam feels happy when his arms and legs work together.", answer: true },
      { text: "Ravi laughs when the water jumps up.", answer: true },
      { text: "Ms. Lee says big splashes are bad.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today, Ms. Lee says we will learn how to kick our legs and move our arms.",
        jumbled: ["our", "to", "will", "Today,", "how", "move", "Lee", "Ms.", "we", "says", "arms.", "learn", "kick", "our", "and", "legs"],
      },
      {
        target: "I hold the edge of the pool and kick my legs behind me in the water.",
        jumbled: ["me", "the", "the", "the", "pool", "legs", "edge", "behind", "kick", "hold", "I", "in", "water.", "my", "of", "and"],
      },
      {
        target: "At first, my kicks make big splashes, but the coach says, “That's okay, Sam, just keep trying.”",
        jumbled: ["splashes,", "okay,", "just", "coach", "“That's", "keep", "Sam,", "the", "big", "but", "At", "kicks", "trying.”", "make", "first,", "my", "says,"],
      },
      {
        target: "I try to kick and move my arms at the same time, but it is a little hard.",
        jumbled: ["kick", "my", "try", "time,", "and", "a", "move", "arms", "hard.", "at", "the", "little", "I", "is", "but", "it", "to", "same"],
      },
      {
        target: "In that moment, I feel happy because my arms and legs work together in the water.",
        jumbled: ["legs", "that", "moment,", "feel", "happy", "water.", "in", "In", "work", "together", "because", "I", "and", "arms", "the", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning to kick or swim.",
    mySentenceExample: "I kick my legs to move in the water.",
  },
  {
    number: 4,
    title: "Practising in the Shallow Water",
    image: null,
    imageNote: "Sam pushing off the pool wall and gliding across the shallow water alone, Tina swimming beside him giving a thumbs-up under the water, Ms. Lee watching from the middle of the pool.",
    story:
      "On the next Saturday, we practise moving across the shallow water alone. Ms. Lee stands in the middle of the pool and watches every student. “Push off the wall, kick your legs, and glide like a fish,” she says. I take a deep breath, push off the wall, and float on top of the water. For a few seconds, I move forward without holding the edge. My face is in the water, so I lift my head to breathe and then look down again. Tina swims next to me and gives me a thumbs-up under the water. I reach the other side of the shallow area and stand up with a big smile. Ms. Lee claps and says, “Very good, Sam, you can move on your own now.” In that moment, I feel proud because I swim a short way without any help.",
    questions: [
      { text: "What does Ms. Lee tell the students to do?", answer: "Push off the wall, kick their legs, and glide like a fish." },
      { text: "What does Sam do to breathe?", answer: "He lifts his head out of the water." },
      { text: "What does Ms. Lee say when Sam reaches the other side?", answer: "Very good, Sam, you can move on your own now." },
    ],
    trueFalse: [
      { text: "Sam practises in the shallow water.", answer: true },
      { text: "Sam holds the edge the whole time.", answer: false },
      { text: "Sam feels proud because he swims a short way alone.", answer: true },
      { text: "Tina gives Sam a thumbs-up underwater.", answer: true },
      { text: "Ms. Lee never watches the students.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Lee stands in the middle of the pool and watches every student.",
        jumbled: ["middle", "watches", "and", "Lee", "stands", "in", "student.", "every", "of", "pool", "the", "Ms.", "the"],
      },
      {
        target: "I take a deep breath, push off the wall, and float on top of the water.",
        jumbled: ["and", "water.", "deep", "the", "on", "float", "a", "wall,", "take", "I", "top", "push", "breath,", "the", "of", "off"],
      },
      {
        target: "My face is in the water, so I lift my head to breathe and then look down again.",
        jumbled: ["lift", "face", "water,", "look", "in", "I", "and", "my", "the", "My", "then", "to", "again.", "is", "down", "so", "head", "breathe"],
      },
      {
        target: "I reach the other side of the shallow area and stand up with a big smile.",
        jumbled: ["shallow", "the", "I", "stand", "side", "with", "smile.", "of", "a", "and", "big", "the", "other", "reach", "up", "area"],
      },
      {
        target: "Ms. Lee claps and says, “Very good, Sam, you can move on your own now.”",
        jumbled: ["Ms.", "you", "says,", "on", "move", "now.”", "your", "good,", "Lee", "claps", "own", "can", "and", "Sam,", "“Very"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about doing something on your own.",
    mySentenceExample: "I can swim a little without help now.",
  },
  {
    number: 5,
    title: "Nervous About the Deep Water",
    image: null,
    imageNote: "Sam and Ravi standing at the edge of the pool holding onto the wall, both looking cautiously toward the dark blue deep end, Ms. Lee standing calmly nearby.",
    story:
      "Today, Ms. Lee points to the other end of the pool, where the water is deep. My heart beats fast because I know I cannot touch the floor there. She says, “Soon you will learn to swim in the deep water too, Sam.” I look at the dark blue water and hold the edge with both hands. Ravi says he is a little scared too, so I feel better because I am not alone. Ms. Lee tells us we will only look at the deep end today, not swim in it. We walk slowly along the edge and watch the deep water below us. I take a deep breath and tell myself that I can be brave step by step. Ms. Lee smiles and says, “Being nervous is normal, and I will help you.” In that moment, I feel calmer because my coach understands my fear.",
    questions: [
      { text: "Why does Sam's heart beat fast?", answer: "Because he knows he cannot touch the floor in the deep water." },
      { text: "Who says he is a little scared too?", answer: "Ravi." },
      { text: "What does Ms. Lee say about being nervous?", answer: "That it is normal, and she will help him." },
    ],
    trueFalse: [
      { text: "The deep water is at the other end of the pool.", answer: true },
      { text: "The class swims in the deep water today.", answer: false },
      { text: "Sam feels calmer because his coach understands his fear.", answer: true },
      { text: "Ravi says he feels a little scared too.", answer: true },
      { text: "Ms. Lee says being nervous is strange.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today, Ms. Lee points to the other end of the pool, where the water is deep.",
        jumbled: ["the", "end", "to", "where", "Ms.", "deep.", "points", "of", "is", "Lee", "pool,", "water", "other", "the", "Today,", "the"],
      },
      {
        target: "She says, “Soon you will learn to swim in the deep water too, Sam.”",
        jumbled: ["deep", "water", "will", "you", "too,", "learn", "Sam.”", "She", "to", "swim", "in", "the", "“Soon", "says,"],
      },
      {
        target: "Ravi says he is a little scared too, so I feel better because I am not alone.",
        jumbled: ["because", "too,", "little", "not", "better", "am", "I", "he", "says", "feel", "I", "alone.", "a", "scared", "is", "so", "Ravi"],
      },
      {
        target: "I take a deep breath and tell myself that I can be brave step by step.",
        jumbled: ["myself", "can", "by", "take", "I", "step.", "tell", "be", "a", "that", "brave", "step", "and", "deep", "I", "breath"],
      },
      {
        target: "Ms. Lee smiles and says, “Being nervous is normal, and I will help you.”",
        jumbled: ["“Being", "normal,", "says,", "help", "is", "and", "Ms.", "Lee", "will", "I", "and", "you.”", "nervous", "smiles"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt nervous.",
    mySentenceExample: "I feel nervous, but I try to be brave.",
  },
  {
    number: 6,
    title: "Help from My Coach and Friends",
    image: null,
    imageNote: "Ms. Lee holding Sam's hands in the deeper water while he kicks and floats, Ravi and Tina swimming nearby cheering him on.",
    story:
      "The next lesson, Ms. Lee stands in the deeper water and holds out her hands. “I will hold you, Sam, so you are safe,” she says with a warm smile. I hold her hands and slowly move to where my feet cannot touch the floor. At first, I feel scared, but Ms. Lee keeps me safe on top of the water. Ravi and Tina swim near me and say, “You can do it, Sam!” I kick my legs and move my arms while the coach holds me lightly. Then Ms. Lee lets go for two seconds, and I float on my own. My friends cheer, and I put my feet back on the shallow floor with a smile. My body still shakes a little, but my heart feels strong. In that moment, I feel thankful because my coach and friends help me be brave.",
    questions: [
      { text: "What does Ms. Lee do to keep Sam safe?", answer: "She holds his hands." },
      { text: "What do Ravi and Tina say to Sam?", answer: "You can do it, Sam!" },
      { text: "What happens when Ms. Lee lets go for two seconds?", answer: "Sam floats on his own." },
    ],
    trueFalse: [
      { text: "Ms. Lee holds Sam's hands in the deeper water.", answer: true },
      { text: "Sam's friends laugh at him and walk away.", answer: false },
      { text: "Sam feels thankful because his coach and friends help him.", answer: true },
      { text: "Ravi and Tina cheer for Sam.", answer: true },
      { text: "Ms. Lee never lets go of Sam's hands.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next lesson, Ms. Lee stands in the deeper water and holds out her hands.",
        jumbled: ["The", "Ms.", "lesson,", "hands.", "stands", "next", "Lee", "her", "and", "water", "holds", "out", "deeper", "the", "in"],
      },
      {
        target: "At first, I feel scared, but Ms. Lee keeps me safe on top of the water.",
        jumbled: ["safe", "I", "scared,", "top", "feel", "of", "keeps", "on", "At", "but", "Lee", "water.", "me", "first,", "Ms.", "the"],
      },
      {
        target: "I kick my legs and move my arms while the coach holds me lightly.",
        jumbled: ["kick", "holds", "arms", "lightly.", "move", "coach", "I", "me", "and", "legs", "the", "while", "my", "my"],
      },
      {
        target: "My friends cheer, and I put my feet back on the shallow floor with a smile.",
        jumbled: ["put", "with", "on", "floor", "the", "My", "a", "I", "shallow", "friends", "and", "feet", "my", "back", "cheer,", "smile."],
      },
      {
        target: "In that moment, I feel thankful because my coach and friends help me be brave.",
        jumbled: ["because", "I", "help", "be", "and", "brave.", "coach", "friends", "that", "feel", "thankful", "moment,", "In", "my", "me"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone who helps you.",
    mySentenceExample: "My coach helps me when I feel afraid.",
  },
  {
    number: 7,
    title: "My First Full Length of the Pool",
    image: null,
    imageNote: "Sam swimming steadily across the full length of the pool with Ms. Lee walking alongside the edge, Ravi and Tina cheering from the far wall as he approaches.",
    story:
      "Today, Ms. Lee says, “Sam, I think you are ready to swim one full length.” My heart jumps, but this time I feel more excited than afraid. I stand at the shallow end and look all the way to the other side. Ms. Lee walks along the edge next to me so I am never alone. I push off the wall, kick my legs, and move my arms in a steady rhythm. I breathe to the side, look down, and keep my body long and straight. Halfway across, my arms feel tired, but I tell myself, “Keep going, Sam.” Slowly, I reach the other wall and touch it with my hand. Ravi, Tina, and Ms. Lee all cheer loudly for me. In that moment, I feel amazing because I swim the whole length of the pool for the first time.",
    questions: [
      { text: "What does Ms. Lee think Sam is ready to do?", answer: "Swim one full length of the pool." },
      { text: "Who walks along the edge next to Sam?", answer: "Ms. Lee." },
      { text: "What does Sam tell himself halfway across?", answer: "Keep going, Sam." },
    ],
    trueFalse: [
      { text: "Sam swims one full length of the pool.", answer: true },
      { text: "Sam feels more afraid than excited this time.", answer: false },
      { text: "Sam feels amazing at the end.", answer: true },
      { text: "Ms. Lee walks along the edge next to Sam.", answer: true },
      { text: "Sam gives up halfway across.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today, Ms. Lee says, “Sam, I think you are ready to swim one full length.”",
        jumbled: ["one", "“Sam,", "Ms.", "ready", "length.”", "think", "full", "are", "Lee", "I", "swim", "Today,", "to", "says,", "you"],
      },
      {
        target: "I stand at the shallow end and look all the way to the other side.",
        jumbled: ["at", "stand", "I", "the", "other", "the", "to", "and", "all", "shallow", "way", "side.", "end", "look", "the"],
      },
      {
        target: "I push off the wall, kick my legs, and move my arms in a steady rhythm.",
        jumbled: ["rhythm.", "kick", "my", "legs,", "in", "move", "the", "off", "arms", "and", "my", "I", "steady", "wall,", "a", "push"],
      },
      {
        target: "Halfway across, my arms feel tired, but I tell myself, “Keep going, Sam.”",
        jumbled: ["tired,", "arms", "across,", "tell", "feel", "but", "my", "Sam.”", "Halfway", "going,", "“Keep", "I", "myself,"],
      },
      {
        target: "In that moment, I feel amazing because I swim the whole length of the pool for the first time.",
        jumbled: ["for", "the", "In", "time.", "feel", "first", "the", "because", "I", "the", "length", "amazing", "I", "of", "whole", "that", "swim", "moment,", "pool"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reaching a goal.",
    mySentenceExample: "I feel happy when I finish a hard task.",
  },
  {
    number: 8,
    title: "A Simple Water Game",
    image: null,
    imageNote: "Sam diving under the shallow water reaching for a colorful ring on the pool floor, Ravi and Tina nearby also diving for rings, everyone laughing.",
    story:
      "Today, Ms. Lee says we will play a fun game in the shallow water. She puts small colourful rings on the floor of the pool. “Take a breath, go under the water, and pick up one ring,” she tells us. I hold my nose, go under the water, and open my eyes behind my goggles. I see a red ring near my feet, so I reach down and grab it quickly. When I come up, I hold the ring high, and my friends laugh and clap. “Good job, Sam!” Ravi shouts. Ravi finds a blue ring, and Tina finds two rings at the same time. We swim, dive, and count our rings together in the warm water. The game makes my swimming feel like play, not hard work. In that moment, I feel joyful because learning to swim can also be so much fun.",
    questions: [
      { text: "What does Ms. Lee put on the floor of the pool?", answer: "Small colourful rings." },
      { text: "What colour ring does Sam pick up?", answer: "Red." },
      { text: "How does Sam feel at the end?", answer: "Joyful." },
    ],
    trueFalse: [
      { text: "The class plays a game with rings in the water.", answer: true },
      { text: "Sam cannot find any rings.", answer: false },
      { text: "Sam feels joyful because swimming can be fun.", answer: true },
      { text: "Ravi finds a blue ring.", answer: true },
      { text: "Tina finds no rings at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today, Ms. Lee says we will play a fun game in the shallow water.",
        jumbled: ["we", "Lee", "fun", "shallow", "water.", "in", "game", "play", "will", "says", "a", "Today,", "the", "Ms."],
      },
      {
        target: "“Take a breath, go under the water, and pick up one ring,” she tells us.",
        jumbled: ["ring,”", "pick", "water,", "“Take", "and", "tells", "she", "go", "us.", "up", "the", "under", "breath,", "one", "a"],
      },
      {
        target: "I see a red ring near my feet, so I reach down and grab it quickly.",
        jumbled: ["I", "quickly.", "and", "it", "down", "feet,", "a", "reach", "see", "I", "my", "red", "so", "ring", "grab", "near"],
      },
      {
        target: "Ravi finds a blue ring, and Tina finds two rings at the same time.",
        jumbled: ["same", "finds", "blue", "at", "a", "the", "Ravi", "and", "finds", "ring,", "Tina", "rings", "two", "time."],
      },
      {
        target: "In that moment, I feel joyful because learning to swim can also be so much fun.",
        jumbled: ["much", "so", "be", "I", "fun.", "In", "that", "feel", "also", "moment,", "joyful", "because", "can", "to", "learning", "swim"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a game you like in the water.",
    mySentenceExample: "I like to find rings in the pool.",
  },
  {
    number: 9,
    title: "A Small Swim Day",
    image: null,
    imageNote: "Sam swimming across the pool while families watch and clap from the poolside, Ms. Lee holding a small paper certificate ready to give him at the far wall.",
    story:
      "Today is a special “swim day” at the pool, and many families come to watch. Ms. Lee tells us we will each swim one length to show what we can do. My hands feel a little cold, but I remember all my practice. When it is my turn, I stand at the wall and take a slow, deep breath. Ms. Lee says, “You can do it, Sam,” and I push off into the water. I kick, pull, and breathe, and I keep my eyes on the other wall. The people clap softly as I move across the calm blue water. When I touch the far wall, I lift my head and smile with tired arms. Ms. Lee gives me a small paper certificate with my name on it. In that moment, I feel so proud because everyone can see how much I have learned.",
    questions: [
      { text: "What is special about today at the pool?", answer: "It is a special swim day and families come to watch." },
      { text: "What does Sam do when it is his turn?", answer: "He takes a slow, deep breath and pushes off into the water." },
      { text: "What does Ms. Lee give Sam at the end?", answer: "A small paper certificate with his name on it." },
    ],
    trueFalse: [
      { text: "Many families come to watch the swim day.", answer: true },
      { text: "Sam forgets everything he practised.", answer: false },
      { text: "Sam feels proud because everyone sees how much he learned.", answer: true },
      { text: "Ms. Lee gives Sam a paper certificate.", answer: true },
      { text: "Sam refuses to swim on swim day.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Lee tells us we will each swim one length to show what we can do.",
        jumbled: ["what", "Ms.", "tells", "do.", "swim", "us", "to", "one", "show", "can", "Lee", "length", "each", "we", "we", "will"],
      },
      {
        target: "I stand at the wall and take a slow, deep breath.",
        jumbled: ["at", "slow,", "take", "a", "deep", "stand", "breath.", "I", "and", "wall", "the"],
      },
      {
        target: "Ms. Lee says, “You can do it, Sam,” and I push off into the water.",
        jumbled: ["Lee", "it,", "water.", "I", "can", "do", "into", "push", "off", "Sam,”", "the", "Ms.", "and", "“You", "says,"],
      },
      {
        target: "I lift my head and smile with tired arms.",
        jumbled: ["arms.", "tired", "with", "head", "I", "smile", "my", "and", "lift"],
      },
      {
        target: "In that moment, I feel so proud because everyone can see how much I have learned.",
        jumbled: ["can", "have", "I", "learned.", "that", "how", "proud", "see", "feel", "much", "because", "moment,", "everyone", "so", "I", "In"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about showing what you can do.",
    mySentenceExample: "I am proud when I show my new skill.",
  },
  {
    number: 10,
    title: "A Stronger Swimmer",
    image: null,
    imageNote: "Sam jumping gently into the pool with confidence, Ravi and Tina swimming beside him laughing, Ms. Lee smiling proudly from the poolside on his last Saturday.",
    story:
      "On my last Saturday of the class, I walk to the pool and feel calm and happy. The water does not look cold or scary to me anymore. Ms. Lee smiles and says, “Sam, look how far you have come since your first day.” I put on my cap and goggles and jump gently into the water. I swim to the deep end, float, and come back without any fear. Ravi and Tina swim beside me, and we laugh and race in a friendly way. I remember my first day, when my stomach felt tight and my feet did not want to move. Now I can kick, glide, dive, and swim a full length on my own. Ms. Lee says, “You are a stronger swimmer now, and I am proud of you.” In that moment, I feel wonderful because the pool has become a happy place for me.",
    questions: [
      { text: "How does the pool look to Sam on his last Saturday?", answer: "Not cold or scary anymore." },
      { text: "What can Sam do now that he could not do at first?", answer: "Kick, glide, dive, and swim a full length on his own." },
      { text: "What does Ms. Lee say to Sam at the end?", answer: "You are a stronger swimmer now, and I am proud of you." },
    ],
    trueFalse: [
      { text: "The water looks scary to Sam on his last day.", answer: false },
      { text: "Sam can swim to the deep end without fear now.", answer: true },
      { text: "Sam feels wonderful because the pool is a happy place.", answer: true },
      { text: "Ms. Lee says Sam is a stronger swimmer now.", answer: true },
      { text: "Sam cannot kick or glide at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "On my last Saturday of the class, I walk to the pool and feel calm and happy.",
        jumbled: ["walk", "of", "last", "the", "Saturday", "calm", "feel", "pool", "class,", "the", "and", "I", "and", "to", "happy.", "On", "my"],
      },
      {
        target: "Ms. Lee smiles and says, “Sam, look how far you have come since your first day.”",
        jumbled: ["day.”", "Lee", "Ms.", "smiles", "“Sam,", "you", "far", "since", "how", "look", "says,", "and", "have", "come", "first", "your"],
      },
      {
        target: "Ravi and Tina swim beside me, and we laugh and race in a friendly way.",
        jumbled: ["and", "a", "friendly", "race", "Tina", "way.", "swim", "and", "and", "laugh", "we", "Ravi", "me,", "in", "beside"],
      },
      {
        target: "I remember my first day, when my stomach felt tight and my feet did not want to move.",
        jumbled: ["felt", "when", "stomach", "my", "want", "my", "my", "move.", "and", "I", "remember", "first", "not", "did", "feet", "tight", "to", "day,"],
      },
      {
        target: "In that moment, I feel wonderful because the pool has become a happy place for me.",
        jumbled: ["because", "me.", "pool", "for", "that", "I", "the", "feel", "place", "happy", "In", "has", "a", "become", "moment,", "wonderful"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how you feel about swimming now.",
    mySentenceExample: "I feel strong and happy when I swim now.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
