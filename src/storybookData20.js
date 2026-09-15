// A1 Kids digital storybook, Book 20: "My Little Sister"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js
// through storybookData19.js. Eighth book in the Kids age track. Same
// simplified vocabulary/sentence length and 3+3 True/False and
// Build-a-Sentence pattern.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook20/cover.jpg";

export const STORYBOOK_TITLE = "My Little Sister";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Ben sitting on the sofa carefully holding his tiny baby sister Rosie, both looking at each other warmly, Mom and Dad watching happily nearby.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Ben", role: "The narrator, a young boy and new big brother", look: "Short brown hair, green T-shirt, thoughtful and caring expression." },
  { name: "Rosie", role: "Ben's new baby sister", look: "Tiny newborn baby, soft wisps of hair, wrapped in a pale yellow blanket." },
  { name: "Mom", role: "Ben and Rosie's mother", look: "Tied-back hair, comfortable cardigan, warm and tired-but-happy expression." },
  { name: "Dad", role: "Ben and Rosie's father", look: "Short hair, plain T-shirt, gentle and supportive." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Baby Comes Home",
    image: null,
    imageNote: "Ben sitting carefully on the sofa holding tiny newborn Rosie for the first time, Mom and Dad watching with proud smiles.",
    story:
      "Today, Mom and Dad bring my new baby sister home from the hospital. Her name is Rosie, and she is very small and soft. I look at her tiny hands and tiny little toes. “Do you want to hold her, Ben?” Mom asks me gently. I sit down carefully, and Dad places Rosie in my arms. She feels light, like a small, warm bundle. Rosie opens her eyes for a second and looks at me. “Hi, Rosie, I'm your big brother,” I whisper softly. I feel proud and a little nervous at the same time.",
    questions: [
      { text: "What is the new baby's name?", answer: "Rosie." },
      { text: "What does Ben look at first?", answer: "Her tiny hands and tiny toes." },
      { text: "How does Ben feel holding Rosie?", answer: "Proud and a little nervous." },
    ],
    trueFalse: [
      { text: "The baby's name is Rosie.", answer: true },
      { text: "Ben does not want to hold her.", answer: false },
      { text: "Ben feels proud and nervous.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today, Mom and Dad bring my new baby sister home from the hospital.",
        jumbled: ["baby", "home", "my", "Today,", "Dad", "Mom", "from", "hospital.", "new", "bring", "and", "sister", "the"],
      },
      {
        target: "Her name is Rosie, and she is very small and soft.",
        jumbled: ["she", "small", "soft.", "Rosie,", "is", "name", "is", "and", "very", "Her", "and"],
      },
      {
        target: "“Do you want to hold her, Ben?” Mom asks me gently.",
        jumbled: ["“Do", "her,", "hold", "Ben?”", "to", "you", "Mom", "gently.", "me", "want", "asks"],
      },
      {
        target: "Rosie opens her eyes for a second and looks at me.",
        jumbled: ["Rosie", "eyes", "second", "a", "opens", "looks", "me.", "at", "her", "for", "and"],
      },
      {
        target: "I feel proud and a little nervous at the same time.",
        jumbled: ["and", "a", "nervous", "time.", "same", "I", "at", "feel", "proud", "the", "little"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a baby you know.",
    mySentenceExample: "My baby sister is very small.",
  },
  {
    number: 2,
    title: "Rosie Cries a Lot",
    image: null,
    imageNote: "Mom walking around the living room at night gently rocking a crying Rosie, Ben sitting up in bed nearby with a pillow over his ears, Dad yawning in the kitchen.",
    story:
      "That night, Rosie cries loudly, and I cannot fall asleep. Mom walks around the house, holding Rosie and singing softly. “Babies cry because it is how they talk to us,” Mom explains. I put my pillow over my ears, but I can still hear her. In the morning, I feel tired, and so does everyone else. Dad makes coffee and yawns while feeding Rosie her bottle. “Being a baby's family is hard work, Ben,” Dad says with a tired smile. I did not know babies could cry so much. I hope Rosie feels better and cries a little less tonight.",
    questions: [
      { text: "What does Rosie do at night?", answer: "She cries loudly." },
      { text: "What does Mom say about crying?", answer: "That it is how babies talk to us." },
      { text: "How does everyone feel in the morning?", answer: "Tired." },
    ],
    trueFalse: [
      { text: "Rosie cries loudly at night.", answer: true },
      { text: "Mom says crying means babies are happy.", answer: false },
      { text: "Everyone feels tired in the morning.", answer: true },
    ],
    buildSentence: [
      {
        target: "That night, Rosie cries loudly, and I cannot fall asleep.",
        jumbled: ["fall", "Rosie", "night,", "I", "cries", "loudly,", "asleep.", "and", "That", "cannot"],
      },
      {
        target: "“Babies cry because it is how they talk to us,” Mom explains.",
        jumbled: ["to", "is", "because", "they", "it", "“Babies", "cry", "Mom", "talk", "explains.", "us,”", "how"],
      },
      {
        target: "I put my pillow over my ears, but I can still hear her.",
        jumbled: ["pillow", "but", "ears,", "my", "her.", "can", "I", "hear", "my", "put", "still", "over", "I"],
      },
      {
        target: "“Being a baby's family is hard work, Ben,” Dad says with a tired smile.",
        jumbled: ["tired", "is", "a", "Ben,”", "“Being", "family", "with", "says", "hard", "smile.", "work,", "a", "baby's", "Dad"],
      },
      {
        target: "I hope Rosie feels better and cries a little less tonight.",
        jumbled: ["little", "better", "Rosie", "hope", "I", "less", "a", "cries", "tonight.", "feels", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling tired.",
    mySentenceExample: "I feel tired when I do not sleep well.",
  },
  {
    number: 3,
    title: "Helping Mom with the Baby",
    image: null,
    imageNote: "Ben proudly handing Mom a clean diaper while she changes baby Rosie on a changing table, Ben also holding a pair of tiny socks.",
    story:
      "The next day, I ask Mom if I can help with Rosie. “You can bring me a clean diaper, Ben,” Mom says with a smile. I run to get a soft, clean diaper from the shelf. I also help by holding Rosie's tiny socks while Mom dresses her. “You are such a good helper,” Mom tells me happily. I like feeling useful and important as a big brother. Rosie looks up at me while Mom changes her clothes. I make a silly face, and Rosie's eyes seem to smile a little. Helping with Rosie makes me feel proud of myself.",
    questions: [
      { text: "What does Ben bring Mom?", answer: "A clean diaper." },
      { text: "What else does Ben help with?", answer: "Holding Rosie's tiny socks while Mom dresses her." },
      { text: "How does Ben feel about helping?", answer: "Proud." },
    ],
    trueFalse: [
      { text: "Ben brings a clean diaper.", answer: true },
      { text: "Ben refuses to help at all.", answer: false },
      { text: "Ben feels proud of himself.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next day, I ask Mom if I can help with Rosie.",
        jumbled: ["I", "with", "if", "Rosie.", "day,", "next", "help", "can", "I", "Mom", "ask", "The"],
      },
      {
        target: "“You can bring me a clean diaper, Ben,” Mom says with a smile.",
        jumbled: ["clean", "a", "diaper,", "says", "me", "smile.", "“You", "a", "bring", "Mom", "with", "can", "Ben,”"],
      },
      {
        target: "I also help by holding Rosie's tiny socks while Mom dresses her.",
        jumbled: ["Mom", "tiny", "I", "socks", "holding", "while", "by", "dresses", "help", "also", "Rosie's", "her."],
      },
      {
        target: "I like feeling useful and important as a big brother.",
        jumbled: ["I", "useful", "brother.", "a", "as", "feeling", "like", "important", "and", "big"],
      },
      {
        target: "I make a silly face, and Rosie's eyes seem to smile a little.",
        jumbled: ["smile", "Rosie's", "face,", "little.", "eyes", "and", "silly", "to", "I", "make", "a", "a", "seem"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about helping your family.",
    mySentenceExample: "I help my mom at home.",
  },
  {
    number: 4,
    title: "A Quiet Moment with Rosie",
    image: null,
    imageNote: "Ben sitting calmly on the sofa holding sleeping Rosie close, Mom taking a gentle photo of the two of them together.",
    story:
      "One afternoon, the house feels calm and quiet for a while. I sit on the sofa, and Mom places sleepy Rosie in my arms. She breathes slowly and softly while she sleeps peacefully. I look at her tiny eyelashes and small, round cheeks. I feel warm and calm holding my little sister close. Mom takes a photo of us together on the sofa. “You two look so sweet together, Ben,” Mom whispers with a smile. I stay very still so I do not wake Rosie up. This quiet moment with Rosie feels really special to me.",
    questions: [
      { text: "Where does Ben sit with Rosie?", answer: "On the sofa." },
      { text: "What is Rosie doing while Ben holds her?", answer: "Sleeping peacefully." },
      { text: "What does Mom do?", answer: "Takes a photo of them together." },
    ],
    trueFalse: [
      { text: "Ben sits on the sofa.", answer: true },
      { text: "Rosie is wide awake and loud.", answer: false },
      { text: "Mom takes a photo of them.", answer: true },
    ],
    buildSentence: [
      {
        target: "One afternoon, the house feels calm and quiet for a while.",
        jumbled: ["calm", "One", "quiet", "and", "feels", "the", "while.", "a", "for", "house", "afternoon,"],
      },
      {
        target: "I sit on the sofa, and Mom places sleepy Rosie in my arms.",
        jumbled: ["sleepy", "Mom", "and", "on", "Rosie", "I", "my", "places", "sit", "arms.", "in", "sofa,", "the"],
      },
      {
        target: "I look at her tiny eyelashes and small, round cheeks.",
        jumbled: ["small,", "tiny", "eyelashes", "cheeks.", "I", "her", "round", "at", "and", "look"],
      },
      {
        target: "“You two look so sweet together, Ben,” Mom whispers with a smile.",
        jumbled: ["two", "Ben,”", "Mom", "whispers", "with", "a", "“You", "sweet", "look", "smile.", "together,", "so"],
      },
      {
        target: "I stay very still so I do not wake Rosie up.",
        jumbled: ["very", "do", "Rosie", "I", "so", "not", "wake", "up.", "stay", "still", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a quiet, calm moment.",
    mySentenceExample: "I feel calm when the house is quiet.",
  },
  {
    number: 5,
    title: "Rosie's First Smile",
    image: null,
    imageNote: "Ben leaning over the crib making a silly face at Rosie, who is smiling for the first time, Mom and Dad rushing in with happy surprised expressions.",
    story:
      "This morning, I lean over Rosie's crib to say good morning. I make a silly face and stick out my tongue playfully. Suddenly, Rosie's little mouth curves into a real smile! “Mom, Dad, come quick! Rosie is smiling!” I shout excitedly. Mom and Dad rush over and see Rosie smiling at me again. “That's her first real smile, Ben!” Mom says with happy tears. I feel so proud that I made my baby sister smile first. Rosie smiles again when I make another silly face. This is one of the happiest moments of my life.",
    questions: [
      { text: "What does Ben do to Rosie?", answer: "Makes a silly face and sticks out his tongue." },
      { text: "What happens suddenly?", answer: "Rosie smiles for the first time." },
      { text: "How does Mom feel about Rosie's first smile?", answer: "Happy -- she has happy tears." },
    ],
    trueFalse: [
      { text: "Ben makes a silly face.", answer: true },
      { text: "Rosie does not smile at all.", answer: false },
      { text: "Mom feels happy about the smile.", answer: true },
    ],
    buildSentence: [
      {
        target: "This morning, I lean over Rosie's crib to say good morning.",
        jumbled: ["say", "morning.", "This", "I", "crib", "lean", "morning,", "to", "over", "Rosie's", "good"],
      },
      {
        target: "I make a silly face and stick out my tongue playfully.",
        jumbled: ["silly", "and", "out", "playfully.", "I", "a", "my", "tongue", "face", "stick", "make"],
      },
      {
        target: "Mom and Dad rush over and see Rosie smiling at me again.",
        jumbled: ["and", "Rosie", "smiling", "rush", "over", "again.", "Mom", "me", "at", "Dad", "see", "and"],
      },
      {
        target: "I feel so proud that I made my baby sister smile first.",
        jumbled: ["made", "sister", "feel", "proud", "I", "baby", "that", "first.", "my", "smile", "so", "I"],
      },
      {
        target: "This is one of the happiest moments of my life.",
        jumbled: ["my", "the", "is", "of", "of", "moments", "happiest", "This", "one", "life."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a happy moment.",
    mySentenceExample: "I feel happy when my family smiles.",
  },
  {
    number: 6,
    title: "Feeling a Little Jealous",
    image: null,
    imageNote: "Ben sitting alone in his room holding a drawing, looking a little sad, while through the doorway Mom and Dad are busy caring for baby Rosie.",
    story:
      "Lately, Mom and Dad spend most of their time with Rosie. I feel a little forgotten, even though I know that is silly. Today, I wanted to show Dad my new drawing, but he was busy with Rosie. I feel a small knot of sadness in my stomach. I go to my room and sit quietly by myself. I do not want to be mean, but I feel a little jealous. I wait to hear someone call, “Ben, are you okay?” but nobody notices that I am upset for a little while. I wonder if Mom and Dad still have enough love for me too.",
    questions: [
      { text: "Who do Mom and Dad spend most time with?", answer: "Rosie." },
      { text: "What did Ben want to show Dad?", answer: "His new drawing." },
      { text: "How does Ben feel?", answer: "A little jealous and forgotten." },
    ],
    trueFalse: [
      { text: "Mom and Dad spend time with Rosie.", answer: true },
      { text: "Dad drops everything to see the drawing.", answer: false },
      { text: "Ben feels a little jealous.", answer: true },
    ],
    buildSentence: [
      {
        target: "Lately, Mom and Dad spend most of their time with Rosie.",
        jumbled: ["and", "Dad", "time", "their", "Lately,", "with", "most", "Rosie.", "Mom", "spend", "of"],
      },
      {
        target: "Today, I wanted to show Dad my new drawing, but he was busy with Rosie.",
        jumbled: ["show", "was", "new", "he", "Rosie.", "my", "but", "busy", "Today,", "with", "to", "wanted", "Dad", "drawing,", "I"],
      },
      {
        target: "I feel a small knot of sadness in my stomach.",
        jumbled: ["my", "I", "in", "small", "knot", "sadness", "of", "stomach.", "feel", "a"],
      },
      {
        target: "I do not want to be mean, but I feel a little jealous.",
        jumbled: ["a", "I", "want", "do", "I", "to", "but", "jealous.", "not", "mean,", "be", "feel", "little"],
      },
      {
        target: "I wait to hear someone call, “Ben, are you okay?” but nobody notices that I am upset for a little while.",
        jumbled: ["hear", "upset", "wait", "notices", "but", "I", "am", "that", "to", "for", "nobody", "little", "you", "while.", "okay?”", "“Ben,", "someone", "a", "I", "call,", "are"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling jealous or left out.",
    mySentenceExample: "I feel jealous sometimes, and that is okay.",
  },
  {
    number: 7,
    title: "Talking to Dad About My Feelings",
    image: null,
    imageNote: "Dad sitting beside Ben on the bed with an arm around him, both looking at Ben's drawing together, warm evening light in the room.",
    story:
      "That evening, Dad notices I am quiet and sits beside me. “What's wrong, Ben? You seem a little sad today,” he asks gently. I take a deep breath and tell Dad how I feel. “I feel like you and Mom only care about Rosie now,” I say quietly. Dad hugs me tightly and says, “We love you just as much, Ben.” He explains that babies need extra help, but my feelings matter too. Dad looks at my new drawing and says it is wonderful. We spend the next hour together, just Dad and me. Talking about my feelings makes me feel so much better.",
    questions: [
      { text: "What does Dad notice about Ben?", answer: "That he is quiet and seems a little sad." },
      { text: "What does Ben tell Dad?", answer: "That he feels like Mom and Dad only care about Rosie now." },
      { text: "What does Dad say about loving Ben?", answer: "That they love him just as much." },
    ],
    trueFalse: [
      { text: "Dad notices Ben is quiet.", answer: true },
      { text: "Ben hides his feelings and says nothing.", answer: false },
      { text: "Dad says he loves Ben just as much.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, Dad notices I am quiet and sits beside me.",
        jumbled: ["am", "quiet", "notices", "I", "evening,", "That", "and", "me.", "beside", "sits", "Dad"],
      },
      {
        target: "“What's wrong, Ben? You seem a little sad today,” he asks gently.",
        jumbled: ["You", "gently.", "seem", "a", "today,”", "“What's", "little", "Ben?", "sad", "wrong,", "asks", "he"],
      },
      {
        target: "“I feel like you and Mom only care about Rosie now,” I say quietly.",
        jumbled: ["care", "Rosie", "like", "only", "say", "and", "feel", "Mom", "I", "about", "you", "quietly.", "“I", "now,”"],
      },
      {
        target: "Dad hugs me tightly and says, “We love you just as much, Ben.” He explains that babies need extra help, but my feelings matter too.",
        jumbled: ["much,", "explains", "me", "but", "as", "extra", "matter", "says,", "feelings", "too.", "that", "Ben.”", "just", "love", "and", "need", "hugs", "babies", "He", "tightly", "help,", "you", "my", "Dad", "“We"],
      },
      {
        target: "We spend the next hour together, just Dad and me.",
        jumbled: ["and", "hour", "together,", "me.", "the", "spend", "Dad", "next", "We", "just"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about talking about your feelings.",
    mySentenceExample: "I feel better when I talk about my feelings.",
  },
  {
    number: 8,
    title: "Reading a Book to Rosie",
    image: null,
    imageNote: "Ben sitting beside Rosie's crib reading a colorful picture book about a duck, Rosie waving her tiny arms and watching him closely, Mom smiling from the doorway.",
    story:
      "Today, Mom asks if I want to read a book to Rosie. “She loves the sound of your voice, Ben,” Mom says kindly. I pick my favorite book about a little duck. I sit next to Rosie's crib and open the colorful book. I read slowly and use funny voices for each animal. Rosie looks at me with wide, curious eyes the whole time. She waves her little arms like she is enjoying the story. “You are a wonderful big brother, Ben,” Mom says proudly. Reading to Rosie makes me feel important and loved.",
    questions: [
      { text: "What does Ben read to Rosie?", answer: "A book about a little duck." },
      { text: "How does Ben read the story?", answer: "Slowly, using funny voices." },
      { text: "What does Rosie do while listening?", answer: "Waves her little arms." },
    ],
    trueFalse: [
      { text: "Ben reads a book about a duck.", answer: true },
      { text: "Ben reads in a boring, flat voice.", answer: false },
      { text: "Rosie waves her little arms.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today, Mom asks if I want to read a book to Rosie.",
        jumbled: ["book", "a", "Today,", "Rosie.", "want", "Mom", "to", "if", "I", "asks", "read", "to"],
      },
      {
        target: "“She loves the sound of your voice, Ben,” Mom says kindly.",
        jumbled: ["kindly.", "loves", "Ben,”", "voice,", "sound", "of", "says", "“She", "your", "the", "Mom"],
      },
      {
        target: "I sit next to Rosie's crib and open the colorful book.",
        jumbled: ["colorful", "and", "the", "sit", "book.", "I", "open", "Rosie's", "to", "next", "crib"],
      },
      {
        target: "Rosie looks at me with wide, curious eyes the whole time.",
        jumbled: ["with", "whole", "wide,", "eyes", "me", "curious", "at", "looks", "time.", "Rosie", "the"],
      },
      {
        target: "“You are a wonderful big brother, Ben,” Mom says proudly.",
        jumbled: ["proudly.", "brother,", "big", "are", "“You", "wonderful", "says", "Ben,”", "Mom", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reading a book.",
    mySentenceExample: "I like to read books out loud.",
  },
  {
    number: 9,
    title: "Rosie Grabs My Finger",
    image: null,
    imageNote: "Ben holding very still as tiny Rosie's hand wraps tightly around his finger, both looking at each other, Mom watching with a warm smile nearby.",
    story:
      "This afternoon, I hold my finger near Rosie's tiny hand. Her small fingers wrap around mine and hold on tightly. “Look, she's holding my finger!” I say with a big, happy smile. Rosie's grip is surprisingly strong for such a tiny baby. I stay very still so she does not let go. Mom watches us and says, “She really loves her big brother, Ben.” I feel a warm, happy feeling inside my chest. Rosie looks up at me and makes a small, happy sound. This little moment makes me love being her big brother even more.",
    questions: [
      { text: "What does Rosie do to Ben's finger?", answer: "She wraps her fingers around it and holds on tightly." },
      { text: "How does Ben describe her grip?", answer: "Surprisingly strong." },
      { text: "What does Mom say?", answer: "She really loves her big brother." },
    ],
    trueFalse: [
      { text: "Rosie grabs Ben's finger.", answer: true },
      { text: "Rosie's grip is very weak.", answer: false },
      { text: "Mom says Rosie loves her big brother.", answer: true },
    ],
    buildSentence: [
      {
        target: "This afternoon, I hold my finger near Rosie's tiny hand.",
        jumbled: ["This", "afternoon,", "hand.", "tiny", "I", "near", "hold", "finger", "my", "Rosie's"],
      },
      {
        target: "“Look, she's holding my finger!” I say with a big, happy smile.",
        jumbled: ["big,", "smile.", "happy", "I", "finger!”", "holding", "with", "“Look,", "a", "say", "she's", "my"],
      },
      {
        target: "Rosie's grip is surprisingly strong for such a tiny baby.",
        jumbled: ["strong", "baby.", "such", "for", "grip", "a", "Rosie's", "surprisingly", "tiny", "is"],
      },
      {
        target: "Mom watches us and says, “She really loves her big brother, Ben.”",
        jumbled: ["brother,", "watches", "says,", "Ben.”", "big", "us", "really", "loves", "and", "Mom", "her", "“She"],
      },
      {
        target: "This little moment makes me love being her big brother even more.",
        jumbled: ["me", "brother", "big", "more.", "even", "moment", "makes", "little", "This", "her", "love", "being"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a sweet family moment.",
    mySentenceExample: "My baby sister holds my hand.",
  },
  {
    number: 10,
    title: "I Love Being a Big Brother",
    image: null,
    imageNote: "Ben smiling and playing peekaboo with Rosie, now a little older, both laughing together in the living room, Mom and Dad watching happily from the sofa.",
    story:
      "It has been one month since Rosie came home with us. I help feed her, sing to her, and make her laugh every day. I do not feel jealous anymore because I know I am loved too. Mom and Dad always make time for both Rosie and me. Rosie smiles big every time she sees my face now. “You are the best big brother, Ben,” Dad says, ruffling my hair. I used to worry that Rosie would take my parents' love away. Now I understand that love grows bigger with every new person. Being Rosie's big brother is one of my favorite things in the whole world.",
    questions: [
      { text: "How long has Rosie been home?", answer: "One month." },
      { text: "What does Ben do for Rosie every day?", answer: "Helps feed her, sings to her, and makes her laugh." },
      { text: "What does Ben understand now about love?", answer: "That love grows bigger with every new person." },
    ],
    trueFalse: [
      { text: "Rosie has been home for one month.", answer: true },
      { text: "Ben still feels very jealous.", answer: false },
      { text: "Ben understands love grows bigger.", answer: true },
    ],
    buildSentence: [
      {
        target: "It has been one month since Rosie came home with us.",
        jumbled: ["one", "home", "with", "has", "since", "It", "month", "been", "came", "us.", "Rosie"],
      },
      {
        target: "I help feed her, sing to her, and make her laugh every day.",
        jumbled: ["sing", "laugh", "her,", "I", "her,", "every", "feed", "her", "to", "and", "help", "make", "day."],
      },
      {
        target: "Mom and Dad always make time for both Rosie and me.",
        jumbled: ["time", "Mom", "for", "both", "Rosie", "make", "Dad", "and", "me.", "and", "always"],
      },
      {
        target: "“You are the best big brother, Ben,” Dad says, ruffling my hair.",
        jumbled: ["the", "says,", "hair.", "ruffling", "brother,", "are", "my", "Ben,”", "big", "“You", "best", "Dad"],
      },
      {
        target: "Being Rosie's big brother is one of my favorite things in the whole world.",
        jumbled: ["one", "Being", "in", "whole", "is", "world.", "brother", "things", "the", "of", "Rosie's", "my", "favorite", "big"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a sibling or family member you love.",
    mySentenceExample: "I love my little sister very much.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
