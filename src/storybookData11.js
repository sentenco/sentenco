// A2 Adults digital storybook, Book 11: "A Happier Free Time"
// Static content -- no Supabase, mirrors the pattern in storybookData10.js.
// Like Books 7-10, this book's narrator, Quinn, is an adult and stays
// gender-neutral throughout -- no gendered pronoun is ever used for Quinn
// in the story, only their name, matching the source text. Friend Leo is
// ALSO never gendered by the source text (no "he"/"his" ever used), so
// Leo's CHARACTERS entry stays neutral too, same as Maya in Book 9.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook11/cover.jpg";

export const STORYBOOK_TITLE = "A Happier Free Time";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Quinn sitting comfortably in a cozy city apartment in the evening, a small handwritten list of hobbies on the table, warm lamp light and a window showing the evening city outside.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Quinn", role: "The narrator, an adult building more balance and fun into free time", look: "Simple comfortable clothing, tired-but-hopeful expression at first, gender-neutral by design -- the story never uses a pronoun for Quinn, only their name." },
  { name: "Leo", role: "Quinn's friend, meets for coffee", look: "Casual comfortable clothing, warm and easygoing -- the source text never assigns a pronoun to Leo either, so keep this character neutral too." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Free Time After Work",
    image: null,
    imageNote: "Quinn sitting on a sofa in the evening writing a small list of hobbies on paper, phone set aside, warm lamp light in a cozy apartment.",
    story:
      "Every day, I work hard from morning until the evening. When I come home, I feel tired, and my mind is full of work. For a long time, I only sat on the sofa and looked at my phone. But one evening, I think, “I want to do more with my free time.” Free time is a small gift after a busy day at work. I decide to try new things that make me feel happy and calm. I want to walk, cook, read, and meet my friends more often. My friend Leo says, “Quinn, free time is for rest and fun, not more stress.” I write a small list of hobbies I want to try after work. As I look at my list, I feel excited because my free time can be happy and full.",
    questions: [
      { text: "How does Quinn feel when coming home from work?", answer: "Tired." },
      { text: "What does Quinn decide to do with free time?", answer: "Try new things like walking, cooking, reading, and meeting friends." },
      { text: "What does Leo say about free time?", answer: "Free time is for rest and fun, not more stress." },
    ],
    trueFalse: [
      { text: "Quinn works hard from morning until evening.", answer: true },
      { text: "Quinn wants to only sit and look at the phone forever.", answer: false },
      { text: "Quinn feels excited about free time at the end.", answer: true },
      { text: "Leo says free time is for rest and fun.", answer: true },
      { text: "Quinn never wants to try new things.", answer: false },
    ],
    buildSentence: [
      {
        target: "I feel tired, and my mind is full of work.",
        jumbled: ["full", "tired,", "my", "I", "work.", "and", "of", "is", "mind", "feel"],
      },
      {
        target: "For a long time, I only sat on the sofa and looked at my phone.",
        jumbled: ["sat", "long", "at", "phone.", "the", "looked", "on", "only", "and", "I", "sofa", "my", "For", "time,", "a"],
      },
      {
        target: "I decide to try new things that make me feel happy and calm.",
        jumbled: ["I", "try", "to", "make", "happy", "that", "me", "new", "feel", "decide", "things", "and", "calm."],
      },
      {
        target: "My friend Leo says, “Quinn, free time is for rest and fun, not more stress.”",
        jumbled: ["not", "and", "Leo", "My", "more", "friend", "rest", "stress.”", "is", "time", "fun,", "says,", "free", "“Quinn,", "for"],
      },
      {
        target: "I feel excited because my free time can be happy and full.",
        jumbled: ["full.", "and", "my", "feel", "because", "be", "happy", "excited", "free", "time", "I", "can"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your free time.",
    mySentenceExample: "In my free time, I like to walk and read.",
  },
  {
    number: 2,
    title: "A Quiet Evening at Home",
    image: null,
    imageNote: "Quinn sitting in a favourite chair by a window with a warm lamp, a cup of tea and an open book nearby, dark calm street visible outside.",
    story:
      "Tonight, I want a quiet and calm evening in my home. After dinner, I wash the dishes and clean my small kitchen. Then I turn off the big lights and turn on a soft, warm lamp. I make a cup of tea and sit in my favourite chair by the window. “Not tonight, Quinn,” I tell myself, and I do not look at my phone or my work emails tonight. Instead, I open a simple book and read a few quiet pages. Outside, the city is dark, and the street is calm and peaceful. I feel my body relax and my mind become slow and soft. A quiet evening at home is simple, but it feels very good. As I sit in the warm light, I feel calm because I give myself time to rest.",
    questions: [
      { text: "What does Quinn make to drink in the evening?", answer: "A cup of tea." },
      { text: "What does Quinn read?", answer: "A simple book." },
      { text: "How does Quinn feel at the end?", answer: "Calm." },
    ],
    trueFalse: [
      { text: "Quinn wants a calm evening at home.", answer: true },
      { text: "Quinn reads work emails all night.", answer: false },
      { text: "Quinn feels calm because they give themselves time to rest.", answer: true },
      { text: "Quinn washes the dishes after dinner.", answer: true },
      { text: "Quinn looks at the phone all night.", answer: false },
    ],
    buildSentence: [
      {
        target: "Tonight, I want a quiet and calm evening in my home.",
        jumbled: ["a", "want", "home.", "Tonight,", "and", "my", "I", "quiet", "evening", "in", "calm"],
      },
      {
        target: "I make a cup of tea and sit in my favourite chair by the window.",
        jumbled: ["chair", "of", "by", "in", "tea", "and", "I", "window.", "sit", "the", "a", "favourite", "cup", "make", "my"],
      },
      {
        target: "“Not tonight, Quinn,” I tell myself, and I do not look at my phone or my work emails tonight.",
        jumbled: ["Quinn,”", "at", "I", "emails", "tell", "or", "not", "phone", "my", "look", "“Not", "tonight.", "tonight,", "myself,", "I", "my", "work", "do", "and"],
      },
      {
        target: "Outside, the city is dark, and the street is calm and peaceful.",
        jumbled: ["city", "street", "peaceful.", "is", "is", "calm", "the", "dark,", "and", "Outside,", "and", "the"],
      },
      {
        target: "I feel calm because I give myself time to rest.",
        jumbled: ["I", "because", "give", "myself", "feel", "calm", "to", "time", "rest.", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a calm evening.",
    mySentenceExample: "I drink tea and read a book at night.",
  },
  {
    number: 3,
    title: "A Walk in the Park",
    image: null,
    imageNote: "Quinn walking slowly along a path in a green park in the evening, tall trees around, children playing with a ball and older people sitting and talking in the background.",
    story:
      "On a nice evening, I decide to take a walk in the park. I put on comfortable shoes and a light jacket for the cool air. The park is near my home, so I walk there in just a few minutes. Many people walk, run, or sit on the green grass with their families. I walk slowly along the path and look at the tall green trees. Some children play with a ball, and some old people sit and talk. I breathe the fresh air and feel my body become light and free. “Slow down, Quinn,” I whisper to myself, and I do not think about work; I only enjoy the calm park. A walk in the park is free, easy, and good for my health. When I walk home, I feel fresh and happy because a simple walk lifts my mood.",
    questions: [
      { text: "What does Quinn put on before the walk?", answer: "Comfortable shoes and a light jacket." },
      { text: "What do the children do in the park?", answer: "Play with a ball." },
      { text: "How does Quinn feel when walking home?", answer: "Fresh and happy." },
    ],
    trueFalse: [
      { text: "Quinn takes a walk in the park in the evening.", answer: true },
      { text: "Quinn thinks about work during the whole walk.", answer: false },
      { text: "Quinn feels fresh and happy after the walk.", answer: true },
      { text: "Children play with a ball in the park.", answer: true },
      { text: "Quinn stays inside all evening.", answer: false },
    ],
    buildSentence: [
      {
        target: "On a nice evening, I decide to take a walk in the park.",
        jumbled: ["decide", "to", "On", "take", "in", "the", "nice", "evening,", "walk", "I", "a", "a", "park."],
      },
      {
        target: "The park is near my home, so I walk there in just a few minutes.",
        jumbled: ["in", "so", "near", "just", "I", "park", "few", "is", "home,", "minutes.", "there", "my", "a", "walk", "The"],
      },
      {
        target: "I walk slowly along the path and look at the tall green trees.",
        jumbled: ["look", "I", "the", "the", "slowly", "at", "and", "trees.", "along", "path", "green", "walk", "tall"],
      },
      {
        target: "“Slow down, Quinn,” I whisper to myself, and I do not think about work; I only enjoy the calm park.",
        jumbled: ["do", "only", "I", "calm", "“Slow", "work;", "think", "about", "I", "not", "down,", "myself,", "Quinn,”", "park.", "whisper", "to", "enjoy", "the", "I", "and"],
      },
      {
        target: "I feel fresh and happy because a simple walk lifts my mood.",
        jumbled: ["feel", "because", "and", "mood.", "a", "walk", "simple", "my", "happy", "lifts", "fresh", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about walking in your free time.",
    mySentenceExample: "I walk in the park to feel calm and free.",
  },
  {
    number: 4,
    title: "Watching a Movie",
    image: null,
    imageNote: "Quinn sitting on a soft sofa in a dim living room with a bowl of popcorn and a glass of juice, watching a movie on a bright screen.",
    story:
      "On Friday night, I want to relax and watch a good movie at home. I make some popcorn in a bowl and pour a cool glass of juice. I turn off the big lights and sit on my soft, comfortable sofa. “Relax, Quinn,” I tell myself. I choose a fun and simple movie that I really want to see. The story is exciting, and I forget about my busy week at work. I laugh at the funny parts and feel surprised at the exciting parts. The movie takes me to a new world for about two hours. I eat my popcorn slowly and enjoy every minute of the film. When the movie ends, I feel happy and calm inside. As I turn off the screen, I feel relaxed because a good movie is a nice, easy hobby.",
    questions: [
      { text: "What does Quinn make to eat while watching the movie?", answer: "Popcorn." },
      { text: "When does Quinn watch the movie?", answer: "On Friday night." },
      { text: "How does Quinn feel when the movie ends?", answer: "Happy and calm." },
    ],
    trueFalse: [
      { text: "Quinn watches a movie on Friday night.", answer: true },
      { text: "The movie is boring and Quinn turns it off.", answer: false },
      { text: "Quinn feels relaxed because a good movie is a nice hobby.", answer: true },
      { text: "Quinn makes popcorn.", answer: true },
      { text: "Quinn forgets to watch the whole movie.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Friday night, I want to relax and watch a good movie at home.",
        jumbled: ["want", "night,", "watch", "I", "a", "and", "movie", "good", "to", "at", "home.", "relax", "On", "Friday"],
      },
      {
        target: "I turn off the big lights and sit on my soft, comfortable sofa.",
        jumbled: ["I", "on", "the", "sit", "lights", "sofa.", "and", "off", "my", "big", "turn", "soft,", "comfortable"],
      },
      {
        target: "I choose a fun and simple movie that I really want to see.",
        jumbled: ["movie", "and", "I", "choose", "simple", "a", "see.", "really", "want", "I", "that", "to", "fun"],
      },
      {
        target: "I laugh at the funny parts and feel surprised at the exciting parts.",
        jumbled: ["the", "feel", "parts.", "I", "and", "exciting", "at", "laugh", "parts", "funny", "surprised", "the", "at"],
      },
      {
        target: "I feel relaxed because a good movie is a nice, easy hobby.",
        jumbled: ["nice,", "a", "good", "movie", "relaxed", "because", "hobby.", "I", "is", "easy", "feel", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a movie you like.",
    mySentenceExample: "I watch a fun movie to relax on the weekend.",
  },
  {
    number: 5,
    title: "Cooking as a Hobby",
    image: null,
    imageNote: "Quinn wearing a clean apron in a kitchen, cutting vegetables on a wooden board, a phone with a recipe propped nearby, rice and chicken cooking on the stove.",
    story:
      "This weekend, I want to try cooking as a fun new hobby. I go to the market and buy fresh vegetables, rice, and chicken. In my kitchen, I wash my hands and put on a clean apron. “Let's do this, Quinn,” I say with a smile. I cut the vegetables into small pieces on a wooden board. I follow a simple recipe on my phone, step by step. I cook the rice, fry the chicken, and mix the colourful vegetables. My kitchen smells warm and delicious, like a small restaurant. I taste the food and add a little salt to make it better. When the meal is ready, I sit down and eat my own cooking. As I enjoy my meal, I feel proud because I made something good with my own hands.",
    questions: [
      { text: "What does Quinn buy at the market?", answer: "Fresh vegetables, rice, and chicken." },
      { text: "What does Quinn follow to cook?", answer: "A simple recipe on the phone." },
      { text: "How does Quinn feel while eating the meal?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Quinn tries cooking as a new hobby.", answer: true },
      { text: "Quinn buys only sweets at the market.", answer: false },
      { text: "Quinn feels proud because they cooked with their own hands.", answer: true },
      { text: "Quinn wears a clean apron.", answer: true },
      { text: "Quinn refuses to follow the recipe.", answer: false },
    ],
    buildSentence: [
      {
        target: "This weekend, I want to try cooking as a fun new hobby.",
        jumbled: ["This", "a", "hobby.", "want", "I", "fun", "try", "as", "to", "weekend,", "new", "cooking"],
      },
      {
        target: "In my kitchen, I wash my hands and put on a clean apron.",
        jumbled: ["put", "I", "hands", "apron.", "a", "wash", "my", "kitchen,", "In", "and", "my", "on", "clean"],
      },
      {
        target: "I cut the vegetables into small pieces on a wooden board.",
        jumbled: ["small", "the", "cut", "on", "pieces", "a", "wooden", "I", "into", "vegetables", "board."],
      },
      {
        target: "I cook the rice, fry the chicken, and mix the colourful vegetables.",
        jumbled: ["and", "colourful", "fry", "the", "rice,", "the", "mix", "vegetables.", "I", "chicken,", "cook", "the"],
      },
      {
        target: "I feel proud because I made something good with my own hands.",
        jumbled: ["because", "something", "I", "with", "own", "made", "my", "hands.", "feel", "good", "I", "proud"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about cooking.",
    mySentenceExample: "I like to cook simple food at home.",
  },
  {
    number: 6,
    title: "Listening to Music",
    image: null,
    imageNote: "Quinn sitting on a sofa with eyes closed, listening to music with a small speaker or headphones nearby, soft warm lighting in the room.",
    story:
      "In the evening, I like to listen to music to relax my mind. I sit on my sofa, close my eyes, and play my favourite songs. The soft music fills my room and makes me feel calm and happy. Some songs are slow and quiet, and some songs are fun and fast. When a fast song plays, I move my head and tap my feet. “Nice one, Quinn,” I laugh to myself. I remember happy times from my life when I hear an old song. Music helps me forget my stress from the busy day at work. Sometimes I sing along softly to the words I know well. Listening to music is a simple and free hobby that I love. As the music plays, I feel peaceful because it fills my heart with good feelings.",
    questions: [
      { text: "When does Quinn like to listen to music?", answer: "In the evening." },
      { text: "What does Quinn do when a fast song plays?", answer: "Moves their head and taps their feet." },
      { text: "How does Quinn feel as the music plays?", answer: "Peaceful." },
    ],
    trueFalse: [
      { text: "Quinn listens to music to relax the mind.", answer: true },
      { text: "Music makes Quinn feel more stressed.", answer: false },
      { text: "Quinn feels peaceful as the music plays.", answer: true },
      { text: "Quinn taps their feet to fast songs.", answer: true },
      { text: "Quinn never sings along.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the evening, I like to listen to music to relax my mind.",
        jumbled: ["my", "evening,", "to", "the", "like", "music", "to", "relax", "mind.", "to", "In", "I", "listen"],
      },
      {
        target: "The soft music fills my room and makes me feel calm and happy.",
        jumbled: ["feel", "fills", "music", "me", "calm", "room", "makes", "soft", "and", "The", "happy.", "my", "and"],
      },
      {
        target: "I move my head and tap my feet.",
        jumbled: ["move", "my", "feet.", "and", "I", "tap", "head", "my"],
      },
      {
        target: "I remember happy times from my life when I hear an old song.",
        jumbled: ["life", "my", "from", "when", "remember", "an", "I", "happy", "I", "song.", "old", "hear", "times"],
      },
      {
        target: "I feel peaceful because it fills my heart with good feelings.",
        jumbled: ["it", "fills", "feelings.", "I", "heart", "with", "my", "feel", "because", "good", "peaceful"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about music you like.",
    mySentenceExample: "I listen to soft music to relax.",
  },
  {
    number: 7,
    title: "Meeting a Friend for Coffee",
    image: null,
    imageNote: "Quinn and Leo sitting at a table by a big sunny café window, cups of coffee and tea between them, both laughing mid-conversation.",
    story:
      "On Saturday afternoon, I meet my friend Leo for coffee. We choose a small café near the park with big, sunny windows. I order a warm coffee, and Leo orders a cup of tea. We sit at a table by the window and talk about our week. Leo tells me a funny story, and I laugh out loud. “You needed this, Quinn,” Leo says. I tell Leo about my new hobbies, like cooking and walking. We talk about our dreams, our families, and our plans. The time passes quickly because we enjoy each other's company. It feels so good to talk with a real friend, not a phone. As I finish my coffee, I feel happy because good friends make free time special.",
    questions: [
      { text: "Who does Quinn meet for coffee?", answer: "Their friend Leo." },
      { text: "What does Quinn order at the café?", answer: "A warm coffee." },
      { text: "What do Quinn and Leo talk about?", answer: "Their dreams, their families, and their plans." },
    ],
    trueFalse: [
      { text: "Quinn meets Leo for coffee on Saturday.", answer: true },
      { text: "Quinn and Leo do not talk to each other.", answer: false },
      { text: "Quinn feels happy because good friends make free time special.", answer: true },
      { text: "Leo tells a funny story.", answer: true },
      { text: "Quinn talks to the phone instead of Leo.", answer: false },
    ],
    buildSentence: [
      {
        target: "We choose a small café near the park with big, sunny windows.",
        jumbled: ["park", "We", "windows.", "small", "a", "café", "the", "choose", "big,", "with", "sunny", "near"],
      },
      {
        target: "We sit at a table by the window and talk about our week.",
        jumbled: ["sit", "and", "week.", "window", "our", "by", "a", "We", "about", "table", "the", "at", "talk"],
      },
      {
        target: "Leo tells me a funny story, and I laugh out loud.",
        jumbled: ["me", "and", "tells", "loud.", "a", "I", "out", "funny", "story,", "laugh", "Leo"],
      },
      {
        target: "I tell Leo about my new hobbies, like cooking and walking.",
        jumbled: ["cooking", "I", "and", "walking.", "hobbies,", "Leo", "like", "my", "tell", "about", "new"],
      },
      {
        target: "I feel happy because good friends make free time special.",
        jumbled: ["I", "good", "friends", "special.", "feel", "happy", "time", "because", "make", "free"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about meeting a friend.",
    mySentenceExample: "I meet my friend for coffee on the weekend.",
  },
  {
    number: 8,
    title: "Trying a New Class",
    image: null,
    imageNote: "Quinn sitting at a table in a small art classroom with pencils and paper, drawing a bowl of colourful fruit, a kind teacher nearby offering guidance.",
    story:
      "This week, I decide to try a new class in my free time. I find a small art class in a building near my office. On the first day, I feel a little nervous, but also excited to learn. The teacher is kind and shows us how to draw simple pictures. I sit next to a friendly woman who is also a beginner like me. We use pencils and paper to draw a bowl of colourful fruit. At first, my drawing is not good, but I do not give up. The teacher says, “Everyone learns step by step, so keep trying, Quinn.” Slowly, my drawing becomes better, and I feel proud of my work. As I leave the class, I feel happy because I learn something new and fun.",
    questions: [
      { text: "What kind of class does Quinn try?", answer: "A small art class." },
      { text: "What do they draw in the class?", answer: "A bowl of colourful fruit." },
      { text: "What does the teacher say when Quinn's drawing is not good?", answer: "Everyone learns step by step, so keep trying." },
    ],
    trueFalse: [
      { text: "Quinn tries an art class.", answer: true },
      { text: "Quinn gives up because the first drawing is not good.", answer: false },
      { text: "Quinn feels happy because they learn something new.", answer: true },
      { text: "Quinn feels a little nervous on the first day.", answer: true },
      { text: "The teacher tells Quinn to give up.", answer: false },
    ],
    buildSentence: [
      {
        target: "This week, I decide to try a new class in my free time.",
        jumbled: ["to", "a", "new", "I", "free", "my", "decide", "week,", "try", "class", "in", "time.", "This"],
      },
      {
        target: "On the first day, I feel a little nervous, but also excited to learn.",
        jumbled: ["a", "nervous,", "I", "On", "also", "to", "little", "the", "but", "first", "excited", "learn.", "day,", "feel"],
      },
      {
        target: "I sit next to a friendly woman who is also a beginner like me.",
        jumbled: ["a", "beginner", "next", "me.", "a", "I", "friendly", "like", "who", "sit", "to", "is", "woman", "also"],
      },
      {
        target: "At first, my drawing is not good, but I do not give up.",
        jumbled: ["At", "give", "my", "do", "but", "not", "drawing", "up.", "I", "first,", "not", "is", "good,"],
      },
      {
        target: "I feel happy because I learn something new and fun.",
        jumbled: ["and", "I", "new", "happy", "because", "I", "something", "learn", "fun.", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a class you want to try.",
    mySentenceExample: "I want to try an art class in my free time.",
  },
  {
    number: 9,
    title: "A Relaxing Weekend",
    image: null,
    imageNote: "A gentle montage feel in one scene -- Quinn waking up late with coffee in bed, sunlight streaming in, a book and cleaning supplies visible nearby suggesting a slow relaxed weekend.",
    story:
      "This weekend, I want to relax and enjoy my free time slowly. On Saturday morning, I wake up late and drink my coffee in bed. I do not rush, and I do not look at my work emails. In the afternoon, I take a walk in the park and enjoy the sun. Later, I cook a simple, healthy meal and eat it near the window. In the evening, I watch a movie and listen to soft music. On Sunday, I meet Leo, and we talk and laugh at a café. “Same time next week, Quinn?” Leo asks. I read my book, clean my home, and rest on my sofa. This weekend feels full of small, happy, and calm moments. As the weekend ends, I feel rested because I used my free time in a good way.",
    questions: [
      { text: "What does Quinn do on Saturday morning?", answer: "Wakes up late and drinks coffee in bed." },
      { text: "Who does Quinn meet on Sunday?", answer: "Leo." },
      { text: "How does Quinn feel as the weekend ends?", answer: "Rested." },
    ],
    trueFalse: [
      { text: "Quinn wakes up late on Saturday morning.", answer: true },
      { text: "Quinn works and checks emails all weekend.", answer: false },
      { text: "Quinn feels rested at the end of the weekend.", answer: true },
      { text: "Quinn meets Leo on Sunday.", answer: true },
      { text: "Quinn cleans nothing all weekend.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Saturday morning, I wake up late and drink my coffee in bed.",
        jumbled: ["morning,", "up", "drink", "in", "I", "wake", "late", "and", "Saturday", "On", "bed.", "my", "coffee"],
      },
      {
        target: "In the afternoon, I take a walk in the park and enjoy the sun.",
        jumbled: ["afternoon,", "park", "In", "enjoy", "I", "take", "the", "the", "walk", "sun.", "a", "in", "the", "and"],
      },
      {
        target: "Later, I cook a simple, healthy meal and eat it near the window.",
        jumbled: ["and", "Later,", "the", "simple,", "healthy", "I", "cook", "a", "meal", "it", "eat", "window.", "near"],
      },
      {
        target: "On Sunday, I meet Leo, and we talk and laugh at a café.",
        jumbled: ["Leo,", "talk", "we", "I", "meet", "café.", "Sunday,", "and", "On", "and", "laugh", "a", "at"],
      },
      {
        target: "I feel rested because I used my free time in a good way.",
        jumbled: ["way.", "my", "feel", "used", "time", "a", "I", "good", "I", "free", "because", "in", "rested"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a relaxing weekend.",
    mySentenceExample: "I rest and enjoy my free time on the weekend.",
  },
  {
    number: 10,
    title: "A Happier Free Time",
    image: null,
    imageNote: "Quinn standing in a bright cozy apartment surrounded by small signs of new hobbies -- a book, a music speaker, art supplies, cooking ingredients -- looking calm and content.",
    story:
      "After a few weeks of new hobbies, I feel happier and more balanced. In the past, I only worked and looked at my phone every evening. Now I walk, cook, read, and listen to music in my free time. I meet my friend Leo and enjoy real conversations at a café. I try a new art class and learn something fun every week. My mind feels calm, and my body feels rested and strong. My free time is not empty anymore; it is full of small, good things. My friends say, “You look happy and relaxed these days, Quinn.” I understand now that free time is important for a good life. As I look at my new hobbies, I feel proud and thankful because my life after work is full and happy.",
    questions: [
      { text: "How did Quinn spend free time in the past?", answer: "Only worked and looked at the phone every evening." },
      { text: "What hobbies does Quinn do now?", answer: "Walking, cooking, reading, listening to music, and an art class." },
      { text: "How does Quinn feel about life after work at the end?", answer: "Proud and thankful." },
    ],
    trueFalse: [
      { text: "In the past, Quinn only worked and looked at the phone.", answer: true },
      { text: "Quinn feels more empty and bored now.", answer: false },
      { text: "Quinn feels proud and thankful at the end.", answer: true },
      { text: "Quinn's friends say they look happy now.", answer: true },
      { text: "Quinn's mind feels more stressed now.", answer: false },
    ],
    buildSentence: [
      {
        target: "I feel happier and more balanced.",
        jumbled: ["and", "I", "feel", "happier", "more", "balanced."],
      },
      {
        target: "Now I walk, cook, read, and listen to music in my free time.",
        jumbled: ["music", "in", "time.", "Now", "free", "to", "I", "my", "read,", "cook,", "and", "walk,", "listen"],
      },
      {
        target: "I try a new art class and learn something fun every week.",
        jumbled: ["something", "and", "a", "new", "every", "class", "week.", "try", "I", "learn", "art", "fun"],
      },
      {
        target: "My free time is not empty anymore; it is full of small, good things.",
        jumbled: ["of", "My", "good", "not", "anymore;", "things.", "free", "full", "empty", "time", "small,", "is", "it", "is"],
      },
      {
        target: "I feel proud and thankful because my life after work is full and happy.",
        jumbled: ["and", "I", "because", "life", "is", "after", "proud", "happy.", "my", "and", "full", "feel", "thankful", "work"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how your free time makes you feel.",
    mySentenceExample: "My hobbies make my free time happy and full.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
