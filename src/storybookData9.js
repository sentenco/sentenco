// A2 Adults digital storybook, Book 9: "A Healthier Me"
// Static content -- no Supabase, mirrors the pattern in storybookData8.js.
// Like Books 7-8, this book's narrator, Avery, is an adult and stays
// gender-neutral throughout -- no gendered pronoun is ever used for Avery
// in the story, only their name (friend Maya is neutral too -- neither is
// ever "he" or "she").
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook9/cover.jpg";

export const STORYBOOK_TITLE = "A Healthier Me";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Avery sitting calmly on the edge of a bed in a bright city apartment at sunrise, a glass of water on the nearby table, window open to cool morning air.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Avery", role: "An adult building healthier daily habits", look: "Simple comfortable clothing, calm and steady expression, gender-neutral by design -- the story never uses a pronoun for Avery, only their name." },
  { name: "Maya", role: "Avery's friend, joins for evening exercise", look: "Comfortable workout clothes and sneakers, warm and encouraging -- the source text never assigns a pronoun to Maya either, so keep this character neutral too." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Better Start to My Day",
    image: null,
    imageNote: "Avery sitting quietly on the edge of the bed at sunrise, drinking a glass of water, window open with soft morning light coming in.",
    story:
      "Every morning, I wake up at six thirty and sit quietly on my bed for a minute. Before I look at my phone, I drink a glass of water from the bottle on my table. Then I open the window and take a deep breath of cool morning air. My body feels a little tired, so I stretch my arms, my back, and my legs. “Good morning, Avery,” I whisper to myself with a small smile. After that, I go to the kitchen and make a simple breakfast with eggs, bread, and fruit. I do not rush, and I try to eat slowly while I listen to soft music. When I finish breakfast, I put on my shoes and walk outside for ten minutes. The street is calm, and the short walk helps me feel more awake. Before I leave for work, I smile because my body feels light and my mind feels clear. This small morning routine is simple, but it gives me a better start to my day.",
    questions: [
      { text: "What does Avery drink before looking at the phone?", answer: "A glass of water." },
      { text: "What does Avery eat for breakfast?", answer: "Eggs, bread, and fruit." },
      { text: "How does Avery feel before leaving for work?", answer: "Light, with a clear mind." },
    ],
    trueFalse: [
      { text: "Avery drinks water before looking at the phone.", answer: true },
      { text: "Avery eats breakfast very fast.", answer: false },
      { text: "The short walk helps Avery feel more awake.", answer: true },
      { text: "Avery stretches arms, back, and legs.", answer: true },
      { text: "Avery skips breakfast.", answer: false },
    ],
    buildSentence: [
      {
        target: "I drink a glass of water from the bottle on my table.",
        jumbled: ["on", "drink", "the", "my", "table.", "from", "water", "I", "a", "of", "glass", "bottle"],
      },
      {
        target: "My body feels a little tired, so I stretch my arms, my back, and my legs.",
        jumbled: ["I", "little", "arms,", "my", "back,", "so", "tired,", "stretch", "feels", "legs.", "body", "a", "my", "and", "my", "My"],
      },
      {
        target: "I go to the kitchen and make a simple breakfast with eggs, bread, and fruit.",
        jumbled: ["eggs,", "bread,", "and", "I", "a", "kitchen", "with", "breakfast", "simple", "make", "fruit.", "and", "to", "the", "go"],
      },
      {
        target: "I do not rush, and I try to eat slowly while I listen to soft music.",
        jumbled: ["I", "while", "to", "not", "rush,", "do", "and", "eat", "I", "try", "slowly", "music.", "to", "listen", "I", "soft"],
      },
      {
        target: "I smile because my body feels light and my mind feels clear.",
        jumbled: ["I", "body", "clear.", "light", "my", "mind", "because", "and", "smile", "feels", "my", "feels"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a healthy morning habit.",
    mySentenceExample: "I drink water and walk in the morning.",
  },
  {
    number: 2,
    title: "A Simple Healthy Breakfast",
    image: null,
    imageNote: "Avery sitting at a kitchen table eating breakfast without a phone nearby, eggs bread and cut fruit on the plate, a small cup of green tea beside it.",
    story:
      "Today, I decide to make a healthy breakfast before I go to work. I wash my hands and take out eggs, bread, and fresh fruit from the fridge. I cook two eggs slowly in a small pan with only a little oil. While the eggs cook, I cut a banana and an apple into small pieces. I put brown bread in the toaster and wait for it to turn warm and golden. “This smells wonderful, Avery,” I say to myself, laughing quietly. Then I sit down at the table and eat my breakfast without my phone. I drink a glass of water and a small cup of green tea. I chew my food slowly and enjoy every simple bite. This healthy breakfast is easy, cheap, and good for my body. When I finish, I feel full of energy and ready for a busy day.",
    questions: [
      { text: "What does Avery take out of the fridge?", answer: "Eggs, bread, and fresh fruit." },
      { text: "What fruit does Avery cut into small pieces?", answer: "A banana and an apple." },
      { text: "How does Avery feel when the breakfast is finished?", answer: "Full of energy." },
    ],
    trueFalse: [
      { text: "Avery cooks the eggs with a little oil.", answer: true },
      { text: "Avery eats breakfast while looking at the phone.", answer: false },
      { text: "Avery feels full of energy at the end.", answer: true },
      { text: "Avery cuts a banana and an apple.", answer: true },
      { text: "Avery skips the toast.", answer: false },
    ],
    buildSentence: [
      {
        target: "I wash my hands and take out eggs, bread, and fresh fruit from the fridge.",
        jumbled: ["fresh", "my", "eggs,", "from", "fruit", "out", "I", "bread,", "the", "hands", "and", "and", "take", "fridge.", "wash"],
      },
      {
        target: "I cook two eggs slowly in a small pan with only a little oil.",
        jumbled: ["cook", "little", "oil.", "pan", "a", "slowly", "a", "small", "eggs", "two", "in", "only", "with", "I"],
      },
      {
        target: "I put brown bread in the toaster and wait for it to turn warm and golden.",
        jumbled: ["golden.", "and", "and", "warm", "wait", "in", "for", "bread", "put", "toaster", "I", "it", "the", "to", "turn", "brown"],
      },
      {
        target: "Then I sit down at the table and eat my breakfast without my phone.",
        jumbled: ["the", "eat", "and", "table", "my", "down", "my", "at", "breakfast", "I", "without", "sit", "Then", "phone."],
      },
      {
        target: "I feel full of energy and ready for a busy day.",
        jumbled: ["energy", "day.", "a", "for", "full", "of", "I", "ready", "feel", "busy", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a healthy food you like.",
    mySentenceExample: "I eat eggs and fruit for a healthy breakfast.",
  },
  {
    number: 3,
    title: "A Short Morning Walk",
    image: null,
    imageNote: "Avery walking briskly through a small green park in the morning, swinging arms, trees and a few birds visible, no phone in hand.",
    story:
      "After breakfast, I put on my shoes and go outside for a short walk. The morning air is cool and fresh, and the sky is a soft blue. I walk down my street and turn into the small green park nearby. Many people walk, run, or do simple exercises in the park too. “Keep going, Avery,” I say quietly, smiling at the morning air. I walk fast and swing my arms to make my body warm and awake. I see the tall trees, the little flowers, and some birds in the sky. I do not use my phone, so I can look at the world around me. After about fifteen minutes, my heart beats a little faster, and I feel strong. The walk is short, but it makes my whole body feel more alive. When I walk back home, I feel calm, happy, and ready for the day.",
    questions: [
      { text: "Where does Avery walk in the morning?", answer: "In the small green park nearby." },
      { text: "What does Avery see in the park?", answer: "Tall trees, little flowers, and some birds." },
      { text: "How long is the morning walk?", answer: "About fifteen minutes." },
    ],
    trueFalse: [
      { text: "Avery walks in a small green park.", answer: true },
      { text: "Avery uses the phone during the whole walk.", answer: false },
      { text: "Avery feels calm and happy after the walk.", answer: true },
      { text: "Avery swings their arms while walking.", answer: true },
      { text: "Avery sees no trees or birds.", answer: false },
    ],
    buildSentence: [
      {
        target: "I put on my shoes and go outside for a short walk.",
        jumbled: ["my", "short", "on", "outside", "walk.", "I", "a", "and", "shoes", "for", "go", "put"],
      },
      {
        target: "I walk down my street and turn into the small green park nearby.",
        jumbled: ["my", "into", "turn", "green", "the", "small", "and", "park", "street", "down", "walk", "I", "nearby."],
      },
      {
        target: "I walk fast and swing my arms to make my body warm and awake.",
        jumbled: ["arms", "walk", "my", "fast", "warm", "make", "swing", "and", "my", "I", "and", "awake.", "body", "to"],
      },
      {
        target: "I do not use my phone, so I can look at the world around me.",
        jumbled: ["look", "the", "do", "me.", "I", "at", "my", "world", "not", "so", "use", "I", "around", "can", "phone,"],
      },
      {
        target: "My heart beats a little faster, and I feel strong.",
        jumbled: ["faster,", "little", "beats", "I", "a", "and", "heart", "feel", "My", "strong."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a walk you like to take.",
    mySentenceExample: "I walk in the park to feel awake.",
  },
  {
    number: 4,
    title: "Drinking Enough Water",
    image: null,
    imageNote: "Avery at a desk with a large water bottle nearby, taking a sip mid-afternoon, sunlight through an office window.",
    story:
      "Today, I want to remember to drink enough water during the whole day. In the morning, I fill a big bottle with clean, cool water. I keep the bottle on my desk so I can see it all the time. Every hour, I take a few sips and slowly finish the bottle. When I drink water, I feel less tired, and my head feels clear. At lunch, I drink water instead of a sweet, sugary drink. In the afternoon, I fill the bottle again and keep drinking slowly. My skin feels better, and my body feels light and fresh. “Good habit, Avery,” I think, pleased with myself. Drinking water is simple, but many people forget to do it. By the end of the day, I feel proud because I drink enough water for my health.",
    questions: [
      { text: "Where does Avery keep the water bottle?", answer: "On the desk." },
      { text: "What does Avery drink at lunch instead of a sweet drink?", answer: "Water." },
      { text: "How does Avery feel by the end of the day?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Avery keeps the bottle on the desk.", answer: true },
      { text: "Avery drinks a sugary drink at lunch.", answer: false },
      { text: "Avery feels proud about drinking enough water.", answer: true },
      { text: "Avery fills a big bottle in the morning.", answer: true },
      { text: "Avery forgets to drink water all day.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today, I want to remember to drink enough water during the whole day.",
        jumbled: ["the", "want", "water", "whole", "I", "during", "to", "remember", "day.", "Today,", "to", "drink", "enough"],
      },
      {
        target: "I keep the bottle on my desk so I can see it all the time.",
        jumbled: ["keep", "bottle", "my", "the", "time.", "on", "so", "see", "I", "desk", "can", "the", "I", "it", "all"],
      },
      {
        target: "I feel less tired, and my head feels clear.",
        jumbled: ["I", "clear.", "tired,", "feels", "less", "my", "feel", "head", "and"],
      },
      {
        target: "In the afternoon, I fill the bottle again and keep drinking slowly.",
        jumbled: ["afternoon,", "drinking", "the", "the", "again", "fill", "In", "slowly.", "I", "and", "bottle", "keep"],
      },
      {
        target: "By the end of the day, I feel proud because I drink enough water for my health.",
        jumbled: ["drink", "day,", "water", "enough", "I", "feel", "I", "health.", "the", "the", "my", "By", "because", "of", "proud", "for", "end"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about drinking water.",
    mySentenceExample: "I drink water many times a day.",
  },
  {
    number: 5,
    title: "A Healthy Lunch",
    image: null,
    imageNote: "Avery sitting at a table with a bright colorful plate of rice, vegetables, chicken, and salad, a glass of water beside it.",
    story:
      "At noon, I feel hungry, so I get ready to make a healthy lunch. I do not want fast food today, so I choose fresh and simple things. I cook some rice and add many colourful vegetables to my plate. I put a piece of chicken and some green salad next to the rice. The plate looks bright and full, like a small garden of food. I sit down at the table and eat slowly without hurrying. I drink water with my meal and take small, happy bites. The food tastes fresh, and my stomach feels full but not heavy. “Well done, Avery,” I think, smiling at my colourful plate. After lunch, I do not feel tired or sleepy like I do with fast food. When I finish, I feel good because a healthy lunch gives my body real energy.",
    questions: [
      { text: "What does Avery add to the rice?", answer: "Colourful vegetables, chicken, and green salad." },
      { text: "What does Avery drink with the meal?", answer: "Water." },
      { text: "How does Avery feel after eating a healthy lunch?", answer: "Not tired or sleepy -- full of real energy." },
    ],
    trueFalse: [
      { text: "Avery makes a healthy lunch with rice and vegetables.", answer: true },
      { text: "Avery eats fast food for lunch today.", answer: false },
      { text: "Avery feels good after the healthy lunch.", answer: true },
      { text: "Avery adds chicken and salad to the plate.", answer: true },
      { text: "Avery feels heavy and tired after lunch.", answer: false },
    ],
    buildSentence: [
      {
        target: "At noon, I feel hungry, so I get ready to make a healthy lunch.",
        jumbled: ["I", "so", "make", "lunch.", "healthy", "ready", "hungry,", "feel", "get", "At", "to", "a", "noon,", "I"],
      },
      {
        target: "I put a piece of chicken and some green salad next to the rice.",
        jumbled: ["green", "chicken", "put", "of", "rice.", "piece", "and", "salad", "the", "some", "next", "I", "to", "a"],
      },
      {
        target: "The plate looks bright and full, like a small garden of food.",
        jumbled: ["looks", "and", "small", "The", "garden", "plate", "food.", "like", "a", "bright", "of", "full,"],
      },
      {
        target: "The food tastes fresh, and my stomach feels full but not heavy.",
        jumbled: ["not", "but", "fresh,", "food", "feels", "The", "heavy.", "and", "my", "stomach", "full", "tastes"],
      },
      {
        target: "I do not feel tired or sleepy like I do with fast food.",
        jumbled: ["food.", "not", "with", "like", "sleepy", "I", "do", "or", "do", "fast", "feel", "I", "tired"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a healthy lunch.",
    mySentenceExample: "I eat rice, vegetables, and chicken for lunch.",
  },
  {
    number: 6,
    title: "A Rest in the Afternoon",
    image: null,
    imageNote: "Avery sitting quietly in a chair at a desk with eyes closed, taking a short calm break, a glass of water nearby instead of a coffee cup.",
    story:
      "In the middle of the afternoon, I feel a little tired at my desk. Instead of drinking more coffee, I decide to take a short rest. I close my eyes and sit quietly in my chair for a few minutes. I take slow, deep breaths and let my shoulders relax down. I think about calm things, like the park, the sky, and the sea. My busy mind becomes quiet, and my body feels softer and lighter. “Better already, Avery,” I whisper, feeling calmer. After five minutes, I open my eyes and stretch my arms up high. I drink a little water and stand up to walk around the room. This short rest helps me feel fresh without any sugar or coffee. When I go back to work, I feel calm, awake, and ready to continue.",
    questions: [
      { text: "What does Avery feel in the afternoon?", answer: "A little tired." },
      { text: "What does Avery do instead of drinking more coffee?", answer: "Takes a short rest." },
      { text: "How does Avery feel when going back to work?", answer: "Calm, awake, and ready to continue." },
    ],
    trueFalse: [
      { text: "Avery takes a short rest in the afternoon.", answer: true },
      { text: "Avery drinks a lot of coffee to feel awake.", answer: false },
      { text: "Avery feels calm and awake at the end.", answer: true },
      { text: "Avery takes slow, deep breaths.", answer: true },
      { text: "Avery drinks more coffee to rest.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the middle of the afternoon, I feel a little tired at my desk.",
        jumbled: ["tired", "In", "my", "desk.", "middle", "at", "the", "the", "feel", "little", "afternoon,", "a", "I", "of"],
      },
      {
        target: "I close my eyes and sit quietly in my chair for a few minutes.",
        jumbled: ["close", "my", "a", "I", "quietly", "sit", "few", "chair", "and", "eyes", "in", "minutes.", "for", "my"],
      },
      {
        target: "I think about calm things, like the park, the sky, and the sea.",
        jumbled: ["I", "and", "things,", "sky,", "park,", "calm", "the", "think", "like", "the", "sea.", "the", "about"],
      },
      {
        target: "I open my eyes and stretch my arms up high.",
        jumbled: ["arms", "eyes", "my", "open", "stretch", "high.", "my", "up", "and", "I"],
      },
      {
        target: "I feel calm, awake, and ready to continue.",
        jumbled: ["I", "ready", "awake,", "feel", "and", "to", "continue.", "calm,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how you rest during the day.",
    mySentenceExample: "I close my eyes and rest for a few minutes.",
  },
  {
    number: 7,
    title: "Easy Exercise After Work",
    image: null,
    imageNote: "Avery and friend Maya stretching together in a park in comfortable workout clothes, both smiling, evening light around them.",
    story:
      "After work, I want to move my body with some easy exercise. I put on comfortable clothes and a good pair of shoes. My friend Maya comes to my apartment, and we walk to the park together. First, we stretch our arms, legs, and backs for a few minutes. Then we walk fast around the park two or three times. After that, we do some simple exercises, like standing up and sitting down. We do not do anything too hard, so we can talk and laugh while we move. Maya says, “Easy exercise every day is better than hard exercise one time, Avery.” My body feels warm, and my heart beats in a happy, strong way. When we finish, I feel proud because I take care of my body after a long day.",
    questions: [
      { text: "Who comes to do exercise with Avery?", answer: "Their friend Maya." },
      { text: "What do they do first at the park?", answer: "Stretch their arms, legs, and backs." },
      { text: "What does Maya say about easy exercise?", answer: "Easy exercise every day is better than hard exercise one time." },
    ],
    trueFalse: [
      { text: "Maya does easy exercise with Avery.", answer: true },
      { text: "They do very hard exercise and cannot talk.", answer: false },
      { text: "Avery feels proud at the end.", answer: true },
      { text: "They stretch their arms, legs, and backs.", answer: true },
      { text: "Maya says hard exercise is always better.", answer: false },
    ],
    buildSentence: [
      {
        target: "I want to move my body with some easy exercise.",
        jumbled: ["some", "body", "I", "with", "to", "want", "easy", "my", "exercise.", "move"],
      },
      {
        target: "My friend Maya comes to my apartment, and we walk to the park together.",
        jumbled: ["to", "and", "we", "to", "My", "apartment,", "walk", "park", "friend", "together.", "the", "comes", "my", "Maya"],
      },
      {
        target: "We do some simple exercises, like standing up and sitting down.",
        jumbled: ["some", "sitting", "standing", "We", "exercises,", "and", "up", "simple", "like", "do", "down."],
      },
      {
        target: "We do not do anything too hard, so we can talk and laugh while we move.",
        jumbled: ["so", "move.", "anything", "do", "laugh", "while", "can", "hard,", "not", "and", "do", "we", "we", "talk", "We", "too"],
      },
      {
        target: "I feel proud because I take care of my body after a long day.",
        jumbled: ["because", "a", "my", "body", "take", "day.", "after", "long", "care", "feel", "of", "I", "proud", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about exercise you like.",
    mySentenceExample: "I walk and stretch after work.",
  },
  {
    number: 8,
    title: "A Calm Evening",
    image: null,
    imageNote: "Avery sitting near a window with a warm cup of tea and a small notebook, reading a book under soft light, phone nowhere in sight.",
    story:
      "In the evening, I want to relax and let go of the busy day. I turn off my computer and put my phone in another room. I make a warm cup of tea and sit near the window with a soft light. Outside, the sky is dark, and the street is quiet and calm. I read a few pages of a simple book that I really enjoy. Then I write three good things about my day in a small notebook. This helps my mind feel thankful and peaceful before bed. “Slow down, Avery,” I remind myself, breathing out slowly. I do not look at bright screens, so my eyes and mind can rest. I take a warm shower and put on clean, comfortable clothes. When I sit quietly in my calm home, I feel relaxed and ready to sleep.",
    questions: [
      { text: "Where does Avery put the phone in the evening?", answer: "In another room." },
      { text: "What does Avery write in the small notebook?", answer: "Three good things about the day." },
      { text: "How does Avery feel at the end of the evening?", answer: "Relaxed and ready to sleep." },
    ],
    trueFalse: [
      { text: "Avery makes a warm cup of tea in the evening.", answer: true },
      { text: "Avery looks at bright screens before bed.", answer: false },
      { text: "Avery feels relaxed and ready to sleep.", answer: true },
      { text: "Avery reads a few pages of a book.", answer: true },
      { text: "Avery keeps the phone nearby all evening.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the evening, I want to relax and let go of the busy day.",
        jumbled: ["want", "relax", "go", "let", "In", "evening,", "I", "and", "to", "the", "day.", "busy", "of", "the"],
      },
      {
        target: "I make a warm cup of tea and sit near the window with a soft light.",
        jumbled: ["sit", "and", "window", "soft", "warm", "light.", "cup", "a", "make", "the", "a", "of", "near", "I", "with", "tea"],
      },
      {
        target: "I read a few pages of a simple book that I really enjoy.",
        jumbled: ["a", "simple", "read", "really", "a", "few", "I", "of", "pages", "I", "enjoy.", "that", "book"],
      },
      {
        target: "This helps my mind feel thankful and peaceful before bed.",
        jumbled: ["before", "thankful", "my", "bed.", "mind", "This", "and", "feel", "helps", "peaceful"],
      },
      {
        target: "I feel relaxed and ready to sleep.",
        jumbled: ["feel", "to", "I", "sleep.", "relaxed", "ready", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a calm evening habit.",
    mySentenceExample: "I drink tea and read a book at night.",
  },
  {
    number: 9,
    title: "Good Sleep at Night",
    image: null,
    imageNote: "Avery lying peacefully in a dark quiet bedroom, phone left far away on a shelf across the room, calm expression before sleep.",
    story:
      "At night, I want to sleep well so my body can rest and heal. I go to bed at the same time every night to help my body know the routine. Before sleep, I make my room dark, quiet, and cool. I put my phone far from my bed so bright lights do not wake me. I lie down, close my eyes, and take a few slow, deep breaths. I think about calm and happy things, not about my problems or my work. Soon my body feels heavy, and my mind becomes soft and quiet. I fall asleep easily and sleep for many peaceful hours. “Sleep well, Avery,” I think as my eyes grow heavy. In the morning, I wake up without a tired, heavy feeling. When I wake up, I feel fresh and thankful because good sleep gives me new energy.",
    questions: [
      { text: "What does Avery do before sleep to help the body?", answer: "Goes to bed at the same time every night." },
      { text: "Where does Avery put the phone at night?", answer: "Far from the bed." },
      { text: "How does Avery feel in the morning after good sleep?", answer: "Fresh and thankful." },
    ],
    trueFalse: [
      { text: "Avery goes to bed at the same time every night.", answer: true },
      { text: "Avery keeps the phone right next to the bed.", answer: false },
      { text: "Avery feels fresh and thankful in the morning.", answer: true },
      { text: "Avery makes the room dark, quiet, and cool.", answer: true },
      { text: "Avery thinks about work problems before sleep.", answer: false },
    ],
    buildSentence: [
      {
        target: "I go to bed at the same time every night to help my body know the routine.",
        jumbled: ["night", "at", "my", "to", "bed", "the", "body", "time", "same", "every", "know", "help", "to", "the", "routine.", "go", "I"],
      },
      {
        target: "I put my phone far from my bed so bright lights do not wake me.",
        jumbled: ["my", "I", "not", "so", "lights", "bed", "do", "wake", "bright", "from", "phone", "put", "my", "me.", "far"],
      },
      {
        target: "I think about calm and happy things, not about my problems or my work.",
        jumbled: ["work.", "about", "and", "things,", "my", "calm", "about", "not", "I", "think", "problems", "or", "my", "happy"],
      },
      {
        target: "Soon my body feels heavy, and my mind becomes soft and quiet.",
        jumbled: ["soft", "and", "feels", "body", "mind", "my", "heavy,", "Soon", "and", "becomes", "my", "quiet."],
      },
      {
        target: "I feel fresh and thankful because good sleep gives me new energy.",
        jumbled: ["feel", "because", "good", "fresh", "new", "gives", "thankful", "sleep", "I", "and", "me", "energy."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how you sleep well.",
    mySentenceExample: "I sleep in a dark, quiet room at night.",
  },
  {
    number: 10,
    title: "A Healthier Me",
    image: null,
    imageNote: "Avery sitting peacefully at home, reflecting with a small smile, glimpses of the day's healthy habits visible around the room -- a water bottle, walking shoes, a notebook, and tea.",
    story:
      "After one month of my new routine, I sit and think about how I feel. In the past, I felt tired, heavy, and stressed almost every day. Now I wake up early, drink water, and eat healthy food each morning. I walk, stretch, and do easy exercise with my friend Maya. I rest in the afternoon and stay calm in the evening with tea and a book. I sleep well at night, so my body feels strong and fresh. My clothes fit better, my skin looks brighter, and my mind feels clear. “I am proud of you, Avery,” I whisper to myself. My friends say, “You look happy and full of energy these days.” I smile because these small, simple habits change my whole life. As I look at my healthy routine, I feel proud and thankful because I take good care of myself.",
    questions: [
      { text: "How did Avery feel in the past?", answer: "Tired, heavy, and stressed almost every day." },
      { text: "What do Avery's friends say now?", answer: "You look happy and full of energy these days." },
      { text: "How does Avery feel about the healthy routine at the end?", answer: "Proud and thankful." },
    ],
    trueFalse: [
      { text: "In the past, Avery felt tired and stressed.", answer: true },
      { text: "Avery feels worse after the new routine.", answer: false },
      { text: "Avery feels proud and thankful at the end.", answer: true },
      { text: "Avery sleeps well at night now.", answer: true },
      { text: "Avery's friends say nothing has changed.", answer: false },
    ],
    buildSentence: [
      {
        target: "I sit and think about how I feel.",
        jumbled: ["about", "think", "how", "I", "I", "sit", "and", "feel."],
      },
      {
        target: "Now I wake up early, drink water, and eat healthy food each morning.",
        jumbled: ["drink", "early,", "morning.", "I", "each", "water,", "up", "wake", "Now", "and", "eat", "healthy", "food"],
      },
      {
        target: "I rest in the afternoon and stay calm in the evening with tea and a book.",
        jumbled: ["rest", "the", "in", "afternoon", "with", "book.", "a", "in", "calm", "I", "stay", "and", "and", "evening", "the", "tea"],
      },
      {
        target: "My clothes fit better, my skin looks brighter, and my mind feels clear.",
        jumbled: ["clothes", "my", "my", "looks", "skin", "My", "better,", "fit", "and", "feels", "brighter,", "mind", "clear."],
      },
      {
        target: "I feel proud and thankful because I take good care of myself.",
        jumbled: ["take", "I", "myself.", "feel", "because", "proud", "and", "I", "good", "care", "thankful", "of"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a healthy habit that helps you.",
    mySentenceExample: "My healthy routine makes me feel strong.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
