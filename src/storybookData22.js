// A1 Teens digital storybook, Book 22: "Our School Talent Show"
// Static content -- no Supabase, mirrors the pattern in storybookData.js
// through storybookData21.js (the Teens track). Eighth and final Teens
// book in this batch. Uses the Teens-track pattern: 5 True/False and 5
// Build-a-Sentence per chapter, Build-a-Sentence items ordered
// shortest-to-longest.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook22/cover.jpg";

export const STORYBOOK_TITLE = "Our School Talent Show";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Zoe and Cody standing together on a school auditorium stage under bright lights, both holding a microphone and smiling at a cheering audience.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Zoe", role: "The narrator, a teen performing in the talent show", look: "Shoulder-length hair with a headband, casual outfit, thoughtful and a little nervous at first." },
  { name: "Cody", role: "Zoe's best friend and singing partner", look: "Short tousled hair, hoodie, easygoing and encouraging." },
  { name: "Ms. Alvarez", role: "The school music teacher", look: "Neat cardigan, glasses on a chain, warm and encouraging." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Signing Up for the Talent Show",
    image: null,
    imageNote: "Zoe and Cody standing in front of a school hallway poster announcing the talent show, both smiling as they write their names on a sign-up sheet.",
    story:
      "This morning, a poster on the wall announces the school talent show. “Sign up now, all talents welcome!” the poster says in bright letters. My best friend Cody looks at me and says, “We should do this together, Zoe!” I feel excited, but also a little nervous about performing. We write our names on the sign-up sheet outside the music room. Ms. Alvarez, the music teacher, smiles and says she cannot wait to see us. “What will you two perform?” she asks curiously. Cody and I look at each other, not sure yet. Signing up for the talent show feels like a big, exciting step.",
    questions: [
      { text: "What does the poster announce?", answer: "The school talent show." },
      { text: "Who wants to sign up with Zoe?", answer: "Cody." },
      { text: "What does Ms. Alvarez ask them?", answer: "What will you two perform?" },
    ],
    trueFalse: [
      { text: "The poster announces a talent show.", answer: true },
      { text: "Zoe signs up completely alone.", answer: false },
      { text: "Cody wants to perform with Zoe.", answer: true },
      { text: "Ms. Alvarez seems annoyed about the show.", answer: false },
      { text: "Ms. Alvarez asks what they will perform.", answer: true },
    ],
    buildSentence: [
      {
        target: "This morning, a poster on the wall announces the school talent show.",
        jumbled: ["talent", "school", "the", "announces", "This", "a", "show.", "morning,", "wall", "on", "the", "poster"],
      },
      {
        target: "My best friend Cody looks at me and says, “We should do this together, Zoe!”",
        jumbled: ["says,", "at", "best", "Zoe!”", "looks", "“We", "together,", "this", "do", "Cody", "and", "friend", "My", "me", "should"],
      },
      {
        target: "We write our names on the sign-up sheet outside the music room.",
        jumbled: ["room.", "write", "on", "sign-up", "our", "We", "the", "the", "sheet", "music", "outside", "names"],
      },
      {
        target: "Ms. Alvarez, the music teacher, smiles and says she cannot wait to see us.",
        jumbled: ["us.", "cannot", "she", "see", "music", "the", "smiles", "Alvarez,", "to", "says", "wait", "teacher,", "Ms.", "and"],
      },
      {
        target: "Signing up for the talent show feels like a big, exciting step.",
        jumbled: ["exciting", "talent", "show", "like", "up", "step.", "for", "big,", "a", "feels", "the", "Signing"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about signing up for something new.",
    mySentenceExample: "I feel excited to try something new.",
  },
  {
    number: 2,
    title: "Choosing a Song",
    image: null,
    imageNote: "Zoe and Cody sitting in the music room flipping through a stack of song sheets, Ms. Alvarez listening nearby with a supportive smile.",
    story:
      "After school, Cody and I sit in the music room to choose a song. “What about a song we both know well, Zoe?” Cody suggests thoughtfully. We look through many songs, trying to find the perfect one. I want something upbeat, while Cody prefers something a little slower. After a while, we agree on a fun, popular song we both love. Ms. Alvarez listens to our choice and says it sounds like a great fit. “This song shows off both your voices well,” she says with a smile. We feel relieved to finally have our song chosen. Now the real work of practicing can begin.",
    questions: [
      { text: "Where do Zoe and Cody choose a song?", answer: "The music room." },
      { text: "What kind of song does Zoe want?", answer: "Something upbeat." },
      { text: "What does Ms. Alvarez say about their choice?", answer: "That it shows off both their voices well." },
    ],
    trueFalse: [
      { text: "They choose a song in the music room.", answer: true },
      { text: "They agree on a song immediately without talking.", answer: false },
      { text: "Zoe wants something upbeat.", answer: true },
      { text: "Ms. Alvarez dislikes their song choice.", answer: false },
      { text: "Ms. Alvarez says the song fits well.", answer: true },
    ],
    buildSentence: [
      {
        target: "Cody and I sit in the music room to choose a song.",
        jumbled: ["song.", "to", "and", "a", "room", "Cody", "choose", "I", "the", "sit", "music", "in"],
      },
      {
        target: "We look through many songs, trying to find the perfect one.",
        jumbled: ["perfect", "look", "one.", "the", "We", "to", "many", "through", "trying", "songs,", "find"],
      },
      {
        target: "We agree on a fun, popular song we both love.",
        jumbled: ["song", "we", "love.", "popular", "agree", "on", "both", "a", "We", "fun,"],
      },
      {
        target: "Ms. Alvarez listens to our choice and says it sounds like a great fit.",
        jumbled: ["fit.", "Alvarez", "listens", "it", "our", "a", "to", "sounds", "and", "says", "choice", "great", "like", "Ms."],
      },
      {
        target: "We feel relieved to finally have our song chosen.",
        jumbled: ["to", "song", "We", "chosen.", "finally", "feel", "our", "have", "relieved"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about choosing a song you like.",
    mySentenceExample: "I like songs that are upbeat and fun.",
  },
  {
    number: 3,
    title: "First Rehearsal",
    image: null,
    imageNote: "Zoe and Cody standing on the empty auditorium stage during their first rehearsal, Ms. Alvarez sitting in the front row taking notes.",
    story:
      "Our first rehearsal happens in the empty auditorium after school. My voice sounds shaky, and I forget some of the words. Cody stays patient and reminds me gently when I lose my place. “It's just the first try, Zoe, we'll get better,” Cody says encouragingly. Ms. Alvarez watches from the front row and takes helpful notes. She tells us to relax our shoulders and breathe before singing. We try the song again, and it already sounds much better. By the end of rehearsal, we both feel more confident about our song. The first rehearsal is not perfect, but it is a good beginning.",
    questions: [
      { text: "Where does the first rehearsal happen?", answer: "In the empty auditorium." },
      { text: "What happens to Zoe's voice?", answer: "It sounds shaky and she forgets some words." },
      { text: "What does Ms. Alvarez tell them to do?", answer: "Relax their shoulders and breathe before singing." },
    ],
    trueFalse: [
      { text: "The rehearsal happens in the auditorium.", answer: true },
      { text: "Zoe remembers every single word perfectly.", answer: false },
      { text: "Cody stays patient with Zoe.", answer: true },
      { text: "Ms. Alvarez tells them to relax and breathe.", answer: true },
      { text: "They feel worse by the end of rehearsal.", answer: false },
    ],
    buildSentence: [
      {
        target: "Our first rehearsal happens in the empty auditorium after school.",
        jumbled: ["the", "empty", "rehearsal", "auditorium", "first", "Our", "in", "school.", "after", "happens"],
      },
      {
        target: "Cody stays patient and reminds me gently when I lose my place.",
        jumbled: ["stays", "gently", "my", "and", "reminds", "me", "when", "patient", "place.", "I", "lose", "Cody"],
      },
      {
        target: "“It's just the first try, Zoe, we'll get better,” Cody says encouragingly.",
        jumbled: ["Cody", "better,”", "just", "the", "“It's", "we'll", "encouragingly.", "Zoe,", "says", "get", "first", "try,"],
      },
      {
        target: "She tells us to relax our shoulders and breathe before singing.",
        jumbled: ["breathe", "She", "shoulders", "to", "and", "our", "before", "singing.", "relax", "tells", "us"],
      },
      {
        target: "By the end of rehearsal, we both feel more confident about our song.",
        jumbled: ["rehearsal,", "confident", "both", "By", "the", "song.", "we", "feel", "about", "of", "our", "end", "more"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about practicing something.",
    mySentenceExample: "I practice a lot before a performance.",
  },
  {
    number: 4,
    title: "Stage Fright",
    image: null,
    imageNote: "Zoe sitting on her bed looking worried the night before rehearsal, then the next day talking quietly with Cody in the hallway before class.",
    story:
      "The night before our second rehearsal, I feel a wave of worry. What if I forget the words in front of the whole school? My stomach feels tight, and I cannot sleep well that night. The next day, I tell Cody about my fear before rehearsal starts. “I get scared too, Zoe, but we can be scared together,” Cody says kindly. Ms. Alvarez tells us that even famous singers feel nervous sometimes. “Stage fright means you care about doing well,” she explains gently. Her words make me feel less alone with my worry. I decide to focus on having fun instead of being perfect.",
    questions: [
      { text: "What does Zoe worry about?", answer: "Forgetting the words in front of the whole school." },
      { text: "What does Zoe tell Cody?", answer: "About her fear." },
      { text: "What does Ms. Alvarez say about stage fright?", answer: "That it means you care about doing well." },
    ],
    trueFalse: [
      { text: "Zoe worries about forgetting the words.", answer: true },
      { text: "Zoe sleeps perfectly well that night.", answer: false },
      { text: "Cody says he also gets scared.", answer: true },
      { text: "Ms. Alvarez says famous singers never feel nervous.", answer: false },
      { text: "Zoe decides to focus on having fun.", answer: true },
    ],
    buildSentence: [
      {
        target: "The night before our second rehearsal, I feel a wave of worry.",
        jumbled: ["a", "I", "second", "feel", "worry.", "wave", "The", "our", "rehearsal,", "of", "before", "night"],
      },
      {
        target: "What if I forget the words in front of the whole school?",
        jumbled: ["school?", "if", "What", "whole", "of", "front", "forget", "the", "the", "in", "words", "I"],
      },
      {
        target: "“I get scared too, Zoe, but we can be scared together,” Cody says kindly.",
        jumbled: ["“I", "Zoe,", "we", "can", "but", "scared", "get", "together,”", "says", "be", "scared", "too,", "Cody", "kindly."],
      },
      {
        target: "Ms. Alvarez tells us that even famous singers feel nervous sometimes.",
        jumbled: ["sometimes.", "Ms.", "famous", "singers", "us", "even", "nervous", "feel", "that", "tells", "Alvarez"],
      },
      {
        target: "I decide to focus on having fun instead of being perfect.",
        jumbled: ["focus", "being", "of", "I", "on", "decide", "fun", "perfect.", "instead", "having", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling nervous before something important.",
    mySentenceExample: "I feel nervous before a big performance.",
  },
  {
    number: 5,
    title: "Practicing with Cody",
    image: null,
    imageNote: "Zoe and Cody practicing their song together in a garage using an old microphone and speaker, Cody's little sister watching and clapping nearby.",
    story:
      "Every day after school, Cody and I practice our song together. We practice in Cody's garage, using an old microphone and speaker. Cody's little sister watches us and claps, shouting, “Go, Zoe and Cody!” after every practice session. We work on hitting the high notes and staying together in rhythm. Some days, we laugh so much that we forget to practice seriously. Other days, we focus completely and get through the whole song perfectly. Cody always makes practicing feel fun instead of stressful and scary. By the end of the week, we know the song by heart. Practicing with a good friend makes everything feel easier and more fun.",
    questions: [
      { text: "Where do Zoe and Cody practice?", answer: "In Cody's garage." },
      { text: "Who watches them practice?", answer: "Cody's little sister." },
      { text: "How does Cody make practicing feel?", answer: "Fun instead of stressful." },
    ],
    trueFalse: [
      { text: "They practice in Cody's garage.", answer: true },
      { text: "No one ever watches them practice.", answer: false },
      { text: "Cody's little sister watches and claps.", answer: true },
      { text: "Practicing with Cody feels stressful and scary.", answer: false },
      { text: "They know the song by heart by the end of the week.", answer: true },
    ],
    buildSentence: [
      {
        target: "Every day after school, Cody and I practice our song together.",
        jumbled: ["song", "I", "school,", "and", "together.", "practice", "Every", "day", "after", "our", "Cody"],
      },
      {
        target: "Cody's little sister watches us and claps, shouting, “Go, Zoe and Cody!” after every practice session.",
        jumbled: ["shouting,", "watches", "and", "practice", "little", "sister", "Cody!”", "after", "claps,", "“Go,", "and", "every", "Zoe", "session.", "us", "Cody's"],
      },
      {
        target: "We work on hitting the high notes and staying together in rhythm.",
        jumbled: ["work", "We", "together", "high", "in", "the", "on", "staying", "and", "hitting", "notes", "rhythm."],
      },
      {
        target: "Other days, we focus completely and get through the whole song perfectly.",
        jumbled: ["get", "focus", "days,", "the", "we", "Other", "and", "through", "song", "whole", "completely", "perfectly."],
      },
      {
        target: "By the end of the week, we know the song by heart.",
        jumbled: ["by", "end", "heart.", "song", "the", "week,", "the", "By", "of", "we", "know", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about practicing with a friend.",
    mySentenceExample: "I practice better with a good friend.",
  },
  {
    number: 6,
    title: "A Costume Problem",
    image: null,
    imageNote: "Zoe standing in front of her closet looking worried at a dress with a broken zipper, Mom helping her look through other outfits on the bed.",
    story:
      "Two days before the show, I try on my performance outfit at home. To my surprise, the zipper on my favorite dress is broken! I feel a small wave of panic thinking about the show. I call Cody, and he tells me not to worry too much. My mom offers to help me find a quick solution to the problem. We look through my closet and find another outfit that works well. Mom sews a small button on the new outfit to make it special. “Problem solved, and you look great too, Zoe,” Mom says with a proud smile. A small costume problem does not have to ruin the whole show.",
    questions: [
      { text: "What problem does Zoe find with her dress?", answer: "The zipper is broken." },
      { text: "Who helps Zoe solve the problem?", answer: "Her mom." },
      { text: "What does Mom do to the new outfit?", answer: "Sews a small button on it." },
    ],
    trueFalse: [
      { text: "The zipper on Zoe's dress is broken.", answer: true },
      { text: "Zoe finds the problem the morning of the show.", answer: false },
      { text: "Mom helps Zoe find a new outfit.", answer: true },
      { text: "Mom refuses to help at all.", answer: false },
      { text: "Mom sews a button on the new outfit.", answer: true },
    ],
    buildSentence: [
      {
        target: "Two days before the show, I try on my performance outfit at home.",
        jumbled: ["days", "show,", "performance", "outfit", "try", "before", "the", "I", "Two", "at", "my", "on", "home."],
      },
      {
        target: "To my surprise, the zipper on my favorite dress is broken!",
        jumbled: ["To", "favorite", "dress", "broken!", "zipper", "my", "on", "the", "my", "is", "surprise,"],
      },
      {
        target: "My mom offers to help me find a quick solution to the problem.",
        jumbled: ["to", "find", "offers", "solution", "My", "to", "problem.", "the", "me", "mom", "help", "quick", "a"],
      },
      {
        target: "Mom sews a small button on the new outfit to make it special.",
        jumbled: ["special.", "the", "make", "on", "it", "a", "outfit", "button", "new", "to", "sews", "Mom", "small"],
      },
      {
        target: "“Problem solved, and you look great too, Zoe,” Mom says with a proud smile.",
        jumbled: ["look", "and", "you", "smile.", "too,", "solved,", "a", "“Problem", "says", "Mom", "Zoe,”", "proud", "great", "with"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about solving a small problem.",
    mySentenceExample: "I solve small problems with help from my family.",
  },
  {
    number: 7,
    title: "Dress Rehearsal",
    image: null,
    imageNote: "Zoe and Cody performing in their costumes on the fully lit auditorium stage, Ms. Alvarez watching proudly from the audience seats.",
    story:
      "The day before the show, we have our full dress rehearsal on stage. We wear our costumes and perform under the bright stage lights. My hands shake a little as the microphone turns on for us. Cody gives me an encouraging nod, and we begin singing together. Our voices blend nicely, and the rhythm feels smooth and confident. Ms. Alvarez watches from the audience seats with a proud, warm smile. “That was wonderful, Zoe and Cody, you two are ready,” she says when we finish. Hearing those words makes all our practice feel worth it. We walk off stage feeling excited and ready for tomorrow's show.",
    questions: [
      { text: "What do they wear during dress rehearsal?", answer: "Their costumes." },
      { text: "What does Cody give Zoe before singing?", answer: "An encouraging nod." },
      { text: "What does Ms. Alvarez say when they finish?", answer: "That was wonderful, you two are ready." },
    ],
    trueFalse: [
      { text: "They wear their costumes during rehearsal.", answer: true },
      { text: "Zoe's hands feel completely still.", answer: false },
      { text: "Cody gives Zoe an encouraging nod.", answer: true },
      { text: "Ms. Alvarez says they are not ready.", answer: false },
      { text: "They feel excited for tomorrow.", answer: true },
    ],
    buildSentence: [
      {
        target: "The day before the show, we have our full dress rehearsal on stage.",
        jumbled: ["dress", "full", "on", "stage.", "show,", "The", "have", "our", "we", "before", "the", "day", "rehearsal"],
      },
      {
        target: "My hands shake a little as the microphone turns on for us.",
        jumbled: ["the", "on", "a", "for", "as", "hands", "us.", "little", "shake", "microphone", "My", "turns"],
      },
      {
        target: "Cody gives me an encouraging nod, and we begin singing together.",
        jumbled: ["we", "me", "together.", "begin", "encouraging", "nod,", "an", "Cody", "gives", "and", "singing"],
      },
      {
        target: "“That was wonderful, Zoe and Cody, you two are ready,” she says when we finish.",
        jumbled: ["finish.", "Cody,", "she", "says", "wonderful,", "“That", "when", "Zoe", "was", "we", "ready,”", "two", "you", "and", "are"],
      },
      {
        target: "We walk off stage feeling excited and ready for tomorrow's show.",
        jumbled: ["tomorrow's", "walk", "show.", "off", "ready", "feeling", "We", "for", "and", "stage", "excited"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a rehearsal or practice run.",
    mySentenceExample: "I feel more confident after a rehearsal.",
  },
  {
    number: 8,
    title: "The Night Before",
    image: null,
    imageNote: "Zoe lying in bed at night looking at her phone with a small smile, a text message from Cody visible on the screen, Mom standing in the doorway saying goodnight.",
    story:
      "The night before the show, I lie in bed feeling a mix of emotions. I feel excited, nervous, and proud all at the same time. My phone buzzes with a text message from Cody. “Tomorrow is going to be amazing, Zoe,” his message says. I smile and text back, “I can't wait to sing with you.” I go over the song lyrics quietly one more time in my head. My mom comes in to say goodnight and wishes me luck. “Just have fun up there, that's all that matters,” she says softly. I finally fall asleep, feeling ready for our big day tomorrow.",
    questions: [
      { text: "How does Zoe feel the night before?", answer: "Excited, nervous, and proud all at once." },
      { text: "Who texts Zoe that night?", answer: "Cody." },
      { text: "What does Mom say before bed?", answer: "Just have fun up there, that's all that matters." },
    ],
    trueFalse: [
      { text: "Zoe feels excited, nervous, and proud.", answer: true },
      { text: "Zoe feels nothing at all that night.", answer: false },
      { text: "Cody texts Zoe that night.", answer: true },
      { text: "Mom says winning is all that matters.", answer: false },
      { text: "Zoe falls asleep feeling ready.", answer: true },
    ],
    buildSentence: [
      {
        target: "The night before the show, I lie in bed feeling a mix of emotions.",
        jumbled: ["a", "bed", "show,", "of", "emotions.", "feeling", "in", "I", "before", "lie", "The", "the", "night", "mix"],
      },
      {
        target: "I feel excited, nervous, and proud all at the same time.",
        jumbled: ["at", "all", "I", "same", "proud", "excited,", "nervous,", "feel", "the", "time.", "and"],
      },
      {
        target: "I smile and text back, “I can't wait to sing with you.”",
        jumbled: ["wait", "sing", "text", "you.”", "to", "can't", "“I", "with", "and", "smile", "I", "back,"],
      },
      {
        target: "I go over the song lyrics quietly one more time in my head.",
        jumbled: ["head.", "lyrics", "one", "I", "time", "go", "my", "song", "over", "the", "more", "quietly", "in"],
      },
      {
        target: "“Just have fun up there, that's all that matters,” she says softly.",
        jumbled: ["all", "up", "says", "that's", "matters,”", "“Just", "have", "she", "that", "there,", "fun", "softly."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about the night before something important.",
    mySentenceExample: "I feel nervous the night before a big event.",
  },
  {
    number: 9,
    title: "Showtime",
    image: null,
    imageNote: "Zoe and Cody standing together on the bright stage in front of a full auditorium, singing confidently into microphones, the audience clapping.",
    story:
      "The auditorium is full of students, teachers, and excited parents tonight. Backstage, my heart pounds as we wait for our turn to perform. “We've got this, Zoe,” Cody whispers, squeezing my hand for support. Our names are called, and we walk onto the bright, lit stage. The music starts, and I take a deep breath before singing. My nervousness disappears as soon as I hear Cody's voice beside mine. We sing together confidently, smiling at each other through the whole song. The audience claps loudly and cheers when our performance finally ends. Standing on that stage with Cody is a moment I will never forget.",
    questions: [
      { text: "Who fills the auditorium tonight?", answer: "Students, teachers, and excited parents." },
      { text: "What does Cody say backstage?", answer: "We've got this." },
      { text: "What happens when the audience hears them finish?", answer: "They clap loudly and cheer." },
    ],
    trueFalse: [
      { text: "The auditorium is full of people.", answer: true },
      { text: "Zoe performs completely alone.", answer: false },
      { text: "Cody squeezes Zoe's hand for support.", answer: true },
      { text: "Zoe's nervousness gets worse during the song.", answer: false },
      { text: "The audience claps and cheers.", answer: true },
    ],
    buildSentence: [
      {
        target: "The auditorium is full of students, teachers, and excited parents tonight.",
        jumbled: ["parents", "auditorium", "of", "full", "The", "tonight.", "excited", "students,", "teachers,", "is", "and"],
      },
      {
        target: "Backstage, my heart pounds as we wait for our turn to perform.",
        jumbled: ["perform.", "my", "to", "as", "turn", "we", "Backstage,", "our", "pounds", "wait", "heart", "for"],
      },
      {
        target: "Our names are called, and we walk onto the bright, lit stage.",
        jumbled: ["onto", "the", "Our", "called,", "bright,", "lit", "walk", "and", "stage.", "names", "we", "are"],
      },
      {
        target: "My nervousness disappears as soon as I hear Cody's voice beside mine.",
        jumbled: ["beside", "hear", "soon", "nervousness", "as", "voice", "as", "My", "disappears", "I", "Cody's", "mine."],
      },
      {
        target: "Standing on that stage with Cody is a moment I will never forget.",
        jumbled: ["a", "Standing", "stage", "forget.", "I", "is", "will", "moment", "Cody", "on", "never", "that", "with"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about performing in front of others.",
    mySentenceExample: "I feel proud after performing on stage.",
  },
  {
    number: 10,
    title: "After the Show",
    image: null,
    imageNote: "Zoe and Cody hugging with big smiles after the show, Zoe's parents nearby with proud expressions, Ms. Alvarez congratulating them in the background.",
    story:
      "After the show, Cody and I hug each other with huge smiles. “We actually did it!” I say, still feeling the excitement in my chest. Ms. Alvarez comes over and congratulates us on a wonderful performance. My parents find me in the crowd and give me a big, proud hug. “You sounded amazing up there, Zoe,” my mom says with happy tears. We did not win first place, but that does not matter to me. I learned that facing my fear was the real victory tonight. Cody and I already talk about performing together again next year. Our first talent show together is a memory I will always treasure.",
    questions: [
      { text: "What do Zoe and Cody do after the show?", answer: "Hug each other with huge smiles." },
      { text: "What does Ms. Alvarez do?", answer: "Congratulates them on a wonderful performance." },
      { text: "What does Zoe say was the real victory?", answer: "Facing her fear." },
    ],
    trueFalse: [
      { text: "Zoe and Cody hug after the show.", answer: true },
      { text: "They win first place in the show.", answer: false },
      { text: "Ms. Alvarez congratulates them.", answer: true },
      { text: "Zoe's mom has no reaction at all.", answer: false },
      { text: "Zoe says facing her fear was the real victory.", answer: true },
    ],
    buildSentence: [
      {
        target: "Cody and I hug each other with huge smiles.",
        jumbled: ["huge", "I", "other", "smiles.", "Cody", "each", "with", "and", "hug"],
      },
      {
        target: "“We actually did it!” I say, still feeling the excitement in my chest.",
        jumbled: ["“We", "still", "feeling", "my", "the", "did", "it!”", "say,", "excitement", "I", "actually", "in", "chest."],
      },
      {
        target: "My parents find me in the crowd and give me a big, proud hug.",
        jumbled: ["find", "proud", "big,", "the", "crowd", "give", "me", "and", "in", "My", "a", "hug.", "parents", "me"],
      },
      {
        target: "We did not win first place, but that does not matter to me.",
        jumbled: ["does", "me.", "not", "first", "to", "did", "that", "We", "place,", "win", "not", "but", "matter"],
      },
      {
        target: "Our first talent show together is a memory I will always treasure.",
        jumbled: ["a", "first", "is", "together", "I", "Our", "talent", "treasure.", "memory", "will", "always", "show"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about overcoming a fear.",
    mySentenceExample: "I feel proud when I face my fears.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
