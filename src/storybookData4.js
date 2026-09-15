// A1 Teens digital storybook, Book 4: "My School Football Team"
// Static content -- no Supabase, mirrors the pattern in storybookData3.js.
import coverImg from "./assets/storybook4/cover.jpg";

export const STORYBOOK_TITLE = "My School Football Team";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Marco standing proudly on the school football field in his new blue number-ten team shirt, teammates and Coach Cruz visible behind him near the goal.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Marco", role: "The narrator, a new team member", look: "Short black hair, blue team shirt with number ten on the back, energetic and eager expression." },
  { name: "Mr. Cruz", role: "The football coach", look: "Middle-aged, short dark hair, sports cap, tracksuit and whistle around his neck, calm and encouraging." },
  { name: "Luis", role: "Marco's teammate", look: "Curly brown hair, red team shirt, friendly and supportive." },
  { name: "Ana", role: "Marco's teammate", look: "Hair in a ponytail, green team shirt, focused and encouraging." },
  { name: "Ben", role: "Marco's teammate", look: "Short hair, yellow team shirt, talkative and enthusiastic about football." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My New Football Shirt",
    image: null,
    imageNote: "Coach Cruz handing Marco a blue team shirt with number ten on the field, teammates smiling nearby near the goal, green grass all around.",
    story:
      "After school, I walk to the big field behind the classrooms. The grass is green, and I see some boys and girls passing a football to each other. Our coach, Mr. Cruz, stands near the goal and holds a list of names. He looks at me and says, “Welcome to the school football team, Marco.” My heart jumps because I really love football. Mr. Cruz gives me a blue team shirt with number ten on the back. I touch the shirt and feel the soft, clean cloth in my hands. Some teammates smile at me and say, “Hi, Marco,” so I do not feel alone. I put on the shirt and look at the field around me. In that moment, I feel proud and ready to play for my school team.",
    questions: [
      { text: "Where does Marco go after school?", answer: "The big field behind the classrooms." },
      { text: "Who is Mr. Cruz?", answer: "The football coach." },
      { text: "What color is Marco's new team shirt?", answer: "Blue." },
    ],
    trueFalse: [
      { text: "Marco sees boys and girls passing a football on the field.", answer: true },
      { text: "Mr. Cruz is a student in Marco's class.", answer: false },
      { text: "Marco feels proud when he puts on the shirt.", answer: true },
      { text: "Marco's shirt has number ten on the back.", answer: true },
      { text: "Mr. Cruz gives Marco a red shirt.", answer: false },
    ],
    buildSentence: [
      {
        target: "The grass is green, and I see some boys and girls passing a football to each other.",
        jumbled: ["and", "green,", "grass", "passing", "is", "The", "I", "each", "boys", "see", "some", "girls", "a", "football", "and", "to", "other."],
      },
      {
        target: "Our coach, Mr. Cruz, stands near the goal and holds a list of names.",
        jumbled: ["of", "goal", "list", "holds", "stands", "Mr.", "Our", "a", "names.", "near", "the", "coach,", "and", "Cruz,"],
      },
      {
        target: "Mr. Cruz gives me a blue team shirt with number ten on the back.",
        jumbled: ["a", "back.", "with", "Cruz", "on", "team", "the", "gives", "blue", "Mr.", "number", "shirt", "me", "ten"],
      },
      {
        target: "Some teammates smile at me and say, “Hi, Marco,” so I do not feel alone.",
        jumbled: ["alone.", "“Hi,", "Some", "smile", "not", "teammates", "I", "Marco,”", "do", "feel", "me", "so", "at", "and", "say,"],
      },
      {
        target: "In that moment, I feel proud and ready to play for my school team.",
        jumbled: ["for", "moment,", "my", "team.", "that", "play", "In", "school", "proud", "to", "feel", "I", "and", "ready"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about football and you.",
    mySentenceExample: "I feel happy when I play football with my friends.",
  },
  {
    number: 2,
    title: "My First Team Practice",
    image: null,
    imageNote: "Marco and Luis practicing passing a football to each other on the field, Marco's legs looking tired, Luis smiling encouragingly beside him.",
    story:
      "The next day, I go to the field again after my last class. This time, I know where to stand, so I feel more relaxed. Mr. Cruz blows his whistle and asks us to make two lines. We start with easy warm-up exercises and then run across the field. My legs feel tired, but I want to do my best. A boy named Luis stands next to me and shows me how to stretch my arms and legs. Then we kick the ball to a partner and count each pass together. I miss the ball one time, but Luis smiles and says, “It's okay, try again, Marco.” I kick the next pass better, and the ball goes straight to him. At the end of practice, I feel tired but happy because I finished my first day with the team.",
    questions: [
      { text: "How does Marco feel at the start of practice?", answer: "More relaxed." },
      { text: "What does Luis show Marco?", answer: "How to stretch his arms and legs." },
      { text: "How does Marco feel at the end of practice?", answer: "Tired but happy." },
    ],
    trueFalse: [
      { text: "Marco feels more relaxed on the second day.", answer: true },
      { text: "Luis gets angry when Marco misses the ball.", answer: false },
      { text: "Marco feels tired and happy after practice.", answer: true },
      { text: "Luis shows Marco how to stretch.", answer: true },
      { text: "Marco never misses the ball during practice.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next day, I go to the field again after my last class.",
        jumbled: ["after", "go", "The", "class.", "last", "my", "field", "to", "day,", "again", "the", "I", "next"],
      },
      {
        target: "Mr. Cruz blows his whistle and asks us to make two lines.",
        jumbled: ["whistle", "Mr.", "blows", "to", "his", "make", "lines.", "us", "and", "asks", "two", "Cruz"],
      },
      {
        target: "A boy named Luis stands next to me and shows me how to stretch my arms and legs.",
        jumbled: ["arms", "shows", "stretch", "to", "me", "named", "boy", "how", "Luis", "my", "stands", "to", "next", "and", "A", "and", "me", "legs."],
      },
      {
        target: "I miss the ball one time, but Luis smiles and says, “It's okay, try again, Marco.”",
        jumbled: ["says,", "“It's", "one", "Marco.”", "time,", "but", "Luis", "ball", "try", "I", "miss", "okay,", "and", "again,", "the", "smiles"],
      },
      {
        target: "At the end of practice, I feel tired but happy because I finished my first day with the team.",
        jumbled: ["At", "team.", "practice,", "my", "end", "finished", "of", "because", "tired", "I", "feel", "the", "happy", "with", "the", "day", "but", "first", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about practice.",
    mySentenceExample: "I feel tired after football practice.",
  },
  {
    number: 3,
    title: "Passing the Ball",
    image: null,
    imageNote: "Marco, Luis, Ana, and Ben passing a football in a small group in the middle of the field, the ball rolling toward Ana as Ben claps.",
    story:
      "On Thursday, our team practises passing the ball in small groups. I stand with Luis, Ana, and Ben near the middle of the field. Mr. Cruz tells us to look up before we kick the ball. At first, I look down too much, and my pass is too short. Ana calls my name and says, “Marco, look at me first.” I try again and kick the ball more carefully this time. The ball rolls across the grass and stops right at Ana's feet. Ben claps his hands and says, “Good pass!” We keep playing for ten more minutes, and I start to feel more confident. When practice ends, I know I am learning something new every day.",
    questions: [
      { text: "Who is in Marco's small group?", answer: "Luis, Ana, and Ben." },
      { text: "What does Ana tell Marco to do?", answer: "Look at her first before kicking." },
      { text: "How does Marco feel when practice ends?", answer: "More confident." },
    ],
    trueFalse: [
      { text: "Marco practises passing in a small group.", answer: true },
      { text: "Ana tells Marco to kick the ball harder only.", answer: false },
      { text: "Marco feels more confident at the end.", answer: true },
      { text: "Ben says, “Good pass!” after Marco kicks the ball.", answer: true },
      { text: "Marco looks up too much at first.", answer: false },
    ],
    buildSentence: [
      {
        target: "I stand with Luis, Ana, and Ben near the middle of the field.",
        jumbled: ["Ben", "I", "near", "stand", "of", "the", "with", "the", "field.", "middle", "and", "Luis,", "Ana,"],
      },
      {
        target: "At first, I look down too much, and my pass is too short.",
        jumbled: ["too", "is", "pass", "first,", "look", "too", "my", "short.", "down", "much,", "At", "I", "and"],
      },
      {
        target: "Ana calls my name and says, “Marco, look at me first.”",
        jumbled: ["my", "says,", "calls", "“Marco,", "first.”", "and", "look", "at", "Ana", "me", "name"],
      },
      {
        target: "The ball rolls across the grass and stops right at Ana's feet.",
        jumbled: ["stops", "rolls", "grass", "at", "and", "the", "across", "feet.", "right", "ball", "Ana's", "The"],
      },
      {
        target: "We keep playing for ten more minutes, and I start to feel more confident.",
        jumbled: ["playing", "confident.", "for", "ten", "to", "start", "We", "keep", "more", "and", "more", "feel", "minutes,", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about passing a ball.",
    mySentenceExample: "I pass the ball to my friend on the field.",
  },
  {
    number: 4,
    title: "Running on the Field",
    image: null,
    imageNote: "Marco and Luis running side by side across a sunlit field, sweat on their faces, Luis encouraging Marco as they near the end of the field.",
    story:
      "Friday is a hot day, but our team still practises after school. Mr. Cruz tells us to run from one side of the field to the other side. The sun is bright, and sweat runs down my face. At first, I want to stop because my legs feel heavy. Then I hear Luis say, “Come on, Marco, you can do it!” I take a deep breath and keep running beside him. When we reach the end of the field, I bend down and laugh because I am so tired. Mr. Cruz gives us water and says running makes us stronger players. I drink slowly and feel the cool water in my throat. On my way home, I feel tired, but I also feel stronger than before.",
    questions: [
      { text: "What does Mr. Cruz tell the team to do?", answer: "Run from one side of the field to the other." },
      { text: "Why does Marco want to stop at first?", answer: "Because his legs feel heavy." },
      { text: "How does Marco feel on his way home?", answer: "Tired, but also stronger than before." },
    ],
    trueFalse: [
      { text: "The team practises on a hot day.", answer: true },
      { text: "Luis tells Marco to stop running.", answer: false },
      { text: "Marco feels stronger after practice.", answer: true },
      { text: "Marco's legs feel heavy at first.", answer: true },
      { text: "Mr. Cruz does not give the team water.", answer: false },
    ],
    buildSentence: [
      {
        target: "Mr. Cruz tells us to run from one side of the field to the other side.",
        jumbled: ["Cruz", "from", "run", "the", "other", "Mr.", "the", "us", "one", "to", "tells", "side", "of", "to", "field", "side."],
      },
      {
        target: "At first, I want to stop because my legs feel heavy.",
        jumbled: ["legs", "feel", "my", "stop", "heavy.", "want", "to", "I", "At", "because", "first,"],
      },
      {
        target: "Then I hear Luis say, “Come on, Marco, you can do it!”",
        jumbled: ["“Come", "hear", "Luis", "Then", "I", "can", "it!”", "you", "say,", "Marco,", "do", "on,"],
      },
      {
        target: "I bend down and laugh because I am so tired.",
        jumbled: ["tired.", "down", "because", "laugh", "bend", "I", "I", "am", "so", "and"],
      },
      {
        target: "On my way home, I feel tired, but I also feel stronger than before.",
        jumbled: ["but", "than", "feel", "I", "stronger", "home,", "before.", "my", "also", "way", "tired,", "I", "feel", "On"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about running.",
    mySentenceExample: "I run fast when I play football.",
  },
  {
    number: 5,
    title: "A Talk with the Coach",
    image: null,
    imageNote: "Marco sitting on a bench beside Coach Cruz after practice, the coach speaking kindly to him, the empty field behind them in soft afternoon light.",
    story:
      "After practice on Monday, Mr. Cruz asks me to stay for a minute. I feel a little nervous because I think I made a mistake. He sits on the bench and tells me to sit beside him. Then he says, “Marco, you work hard, and I can see that.” I look at him and listen very carefully. He tells me my passes are getting better, but I need to talk more with my teammates. I nod and say, “Yes, Coach, I will try.” Mr. Cruz smiles and says good teams always speak to each other on the field. As I walk home, I think about his words again and again. I feel calm because the coach believes I can improve.",
    questions: [
      { text: "Who asks Marco to stay after practice?", answer: "Mr. Cruz." },
      { text: "What does Mr. Cruz say Marco needs to do more?", answer: "Talk more with his teammates." },
      { text: "How does Marco feel at the end?", answer: "Calm." },
    ],
    trueFalse: [
      { text: "Marco thinks he made a mistake at first.", answer: true },
      { text: "Mr. Cruz says Marco should talk less on the field.", answer: false },
      { text: "Marco feels calm because the coach believes in him.", answer: true },
      { text: "Mr. Cruz says Marco's passes are getting better.", answer: true },
      { text: "Marco ignores what the coach says.", answer: false },
    ],
    buildSentence: [
      {
        target: "Mr. Cruz asks me to stay for a minute.",
        jumbled: ["Mr.", "Cruz", "for", "stay", "minute.", "to", "me", "asks", "a"],
      },
      {
        target: "He sits on the bench and tells me to sit beside him.",
        jumbled: ["sits", "the", "to", "He", "bench", "sit", "beside", "and", "tells", "on", "me", "him."],
      },
      {
        target: "He tells me my passes are getting better, but I need to talk more with my teammates.",
        jumbled: ["tells", "to", "need", "teammates.", "my", "with", "getting", "more", "passes", "my", "are", "but", "I", "better,", "He", "me", "talk"],
      },
      {
        target: "Mr. Cruz smiles and says good teams always speak to each other on the field.",
        jumbled: ["speak", "field.", "to", "and", "teams", "Cruz", "smiles", "other", "good", "says", "always", "on", "the", "each", "Mr."],
      },
      {
        target: "I think about his words again and again.",
        jumbled: ["again.", "and", "I", "about", "again", "words", "his", "think"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a teacher or coach.",
    mySentenceExample: "My coach tells me to do my best.",
  },
  {
    number: 6,
    title: "Our Team at Break Time",
    image: null,
    imageNote: "Marco, Luis, Ana, and Ben sitting together under a tree at break time, Ben showing a photo on his phone, everyone smiling and talking.",
    story:
      "At break time on Tuesday, I sit under a tree with some teammates near the field. Luis has a sandwich, and Ana drinks water from a blue bottle. Ben talks about his favourite football player and shows us a photo on his phone. Then Ana asks, “Marco, what was your old school like?” I tell them I played football in the park with my cousins after class. Luis laughs and says we should all play in the park one day. We talk about football shoes, school homework, and our favourite snacks. The bell rings, but we are still smiling and talking as we stand up. When I walk back to class with them, I feel like I really belong to the team now.",
    questions: [
      { text: "Where does Marco sit at break time?", answer: "Under a tree near the field." },
      { text: "What does Ben show on his phone?", answer: "A photo of his favorite football player." },
      { text: "How does Marco feel when he walks back to class?", answer: "Like he really belongs to the team." },
    ],
    trueFalse: [
      { text: "Marco sits with teammates under a tree.", answer: true },
      { text: "Ana asks Marco about his old school and team.", answer: true },
      { text: "Marco feels alone at the end of break time.", answer: false },
      { text: "Ben shows a photo on his phone.", answer: true },
      { text: "Marco says he never played football before.", answer: false },
    ],
    buildSentence: [
      {
        target: "At break time on Tuesday, I sit under a tree with some teammates near the field.",
        jumbled: ["a", "sit", "I", "with", "the", "At", "tree", "teammates", "field.", "under", "on", "Tuesday,", "time", "some", "near", "break"],
      },
      {
        target: "Ben talks about his favourite football player and shows us a photo on his phone.",
        jumbled: ["talks", "us", "about", "player", "football", "on", "favourite", "a", "his", "and", "phone.", "photo", "Ben", "shows", "his"],
      },
      {
        target: "Then Ana asks, “Marco, what was your old school like?” I tell them I played football in the park with my cousins after class.",
        jumbled: ["your", "in", "football", "what", "“Marco,", "like?”", "school", "Then", "I", "Ana", "played", "class.", "after", "old", "them", "the", "I", "park", "asks,", "cousins", "with", "my", "tell", "was"],
      },
      {
        target: "Luis laughs and says we should all play in the park one day.",
        jumbled: ["should", "day.", "all", "one", "we", "and", "play", "in", "the", "says", "park", "Luis", "laughs"],
      },
      {
        target: "I feel like I really belong to the team now.",
        jumbled: ["really", "I", "team", "I", "now.", "belong", "feel", "to", "the", "like"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your friends at school.",
    mySentenceExample: "I talk with my friends at break time.",
  },
  {
    number: 7,
    title: "After-School Practice in the Rain",
    image: null,
    imageNote: "Marco, Luis, and Ana laughing and playing football together in light rain on the field, water drops visible, everyone's clothes a little wet.",
    story:
      "One afternoon, dark clouds cover the sky before football practice begins. Some students look worried, but Mr. Cruz says we can still train for a short time. Soon, light rain starts to fall on the field. The grass feels wet under my shoes, and the ball moves faster on the ground. At first, I do not like the rain because my shirt feels cold. Then Luis kicks the ball to me and shouts, “Catch it, Marco!” I pass it back with a smile. Ana laughs when water drops fall on her face, and soon everyone is laughing too. We run, pass, and shout to each other while the rain gets a little stronger. When practice ends, my clothes are wet, but I feel fresh and full of energy. It is not a perfect day, but it becomes one of my favourite practices.",
    questions: [
      { text: "What covers the sky before practice?", answer: "Dark clouds." },
      { text: "Why does Marco not like the rain at first?", answer: "Because his shirt feels cold." },
      { text: "How does Marco feel when practice ends?", answer: "Fresh and full of energy." },
    ],
    trueFalse: [
      { text: "Mr. Cruz cancels practice right away.", answer: false },
      { text: "The ball moves faster on the wet ground.", answer: true },
      { text: "Marco says it becomes one of his favourite practices.", answer: true },
      { text: "Ana laughs when rain falls on her face.", answer: true },
      { text: "Marco loves the rain from the very first minute.", answer: false },
    ],
    buildSentence: [
      {
        target: "Some students look worried, but Mr. Cruz says we can still train for a short time.",
        jumbled: ["short", "but", "time.", "Some", "still", "look", "Cruz", "for", "students", "train", "we", "says", "worried,", "a", "Mr.", "can"],
      },
      {
        target: "The grass feels wet under my shoes, and the ball moves faster on the ground.",
        jumbled: ["under", "shoes,", "wet", "grass", "faster", "on", "and", "ground.", "my", "moves", "the", "ball", "The", "the", "feels"],
      },
      {
        target: "At first, I do not like the rain because my shirt feels cold.",
        jumbled: ["the", "At", "shirt", "do", "my", "first,", "cold.", "because", "like", "feels", "not", "rain", "I"],
      },
      {
        target: "Ana laughs when water drops fall on her face, and soon everyone is laughing too.",
        jumbled: ["drops", "soon", "her", "laughing", "on", "and", "Ana", "fall", "water", "everyone", "is", "when", "face,", "laughs", "too."],
      },
      {
        target: "We run, pass, and shout to each other while the rain gets a little stronger.",
        jumbled: ["little", "other", "while", "shout", "run,", "a", "the", "rain", "gets", "each", "and", "pass,", "to", "stronger.", "We"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about rain and sports.",
    mySentenceExample: "I play football in light rain with my friends.",
  },
  {
    number: 8,
    title: "Getting Ready for the Match",
    image: null,
    imageNote: "The whole team including Marco, Luis, Ana, and Ben training with focus and energy, Coach Cruz watching closely, Luis scoring a goal in practice as the team cheers.",
    story:
      "On Friday, Mr. Cruz tells us we will have a match against another class next week. Everyone on the team becomes excited at once. He says we need to practise carefully and work together. “Marco, keep talking to your teammates,” he reminds me. During practice, we pass the ball faster and listen closely to the coach's instructions. I try to speak more on the field, just like Mr. Cruz told me before. When Luis runs to the left, I call his name and pass the ball to him. He scores a goal in practice, and our team cheers loudly. After training, we sit on the grass and talk about the match next week. I feel nervous about the game, but I also feel ready to help my team. For the first time, I can really imagine myself playing in our school match.",
    questions: [
      { text: "When will the team have a match?", answer: "Next week." },
      { text: "What does Marco try to do more on the field?", answer: "Speak more to his teammates on the field." },
      { text: "How does Marco feel about the match?", answer: "Nervous but ready." },
    ],
    trueFalse: [
      { text: "The team will play a match next week.", answer: true },
      { text: "Marco tries to speak less on the field.", answer: false },
      { text: "Marco feels nervous and ready.", answer: true },
      { text: "Luis scores a goal in practice.", answer: true },
      { text: "The team stops practicing after the news.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Friday, Mr. Cruz tells us we will have a match against another class next week.",
        jumbled: ["us", "will", "have", "On", "tells", "match", "class", "against", "week.", "Cruz", "Friday,", "another", "we", "Mr.", "a", "next"],
      },
      {
        target: "He says we need to practise carefully and work together.",
        jumbled: ["and", "need", "He", "together.", "we", "practise", "says", "work", "to", "carefully"],
      },
      {
        target: "I try to speak more on the field, just like Mr. Cruz told me before.",
        jumbled: ["on", "to", "before.", "speak", "field,", "me", "like", "Cruz", "Mr.", "try", "the", "just", "more", "told", "I"],
      },
      {
        target: "I call his name and pass the ball to him.",
        jumbled: ["ball", "I", "name", "to", "pass", "and", "his", "the", "call", "him."],
      },
      {
        target: "I feel nervous about the game, but I also feel ready to help my team.",
        jumbled: ["the", "my", "about", "but", "also", "nervous", "to", "ready", "feel", "feel", "I", "help", "team.", "game,", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a match.",
    mySentenceExample: "I feel excited before a football match.",
  },
  {
    number: 9,
    title: "Our First School Match",
    image: null,
    imageNote: "Marco and Ana celebrating a goal on the school field during the match, students watching from the sideline, teammates cheering, the goal net visible.",
    story:
      "The day of the match arrives, and I wake up early with a fast heartbeat. At school, I put on my blue team shirt and tie my shoes carefully. Our team meets near the field, and Mr. Cruz tells us to stay calm and play together. Many students stand near the side of the field to watch us. When the whistle blows, the game begins, and I run after the ball with my teammates. In the middle of the match, Luis passes the ball to me and shouts, “Go, Marco!” I send it to Ana on the left side. She kicks it hard, and the ball goes into the goal. Everyone cheers, and I shout with joy. We keep playing until the final whistle, and our team wins by one goal. After the match, I feel tired, excited, and very proud of what we did together.",
    questions: [
      { text: "How does Marco feel when he wakes up on the day of the match?", answer: "His heart beats fast." },
      { text: "Who scores the goal?", answer: "Ana." },
      { text: "What is the result of the match?", answer: "Their team wins by one goal." },
    ],
    trueFalse: [
      { text: "Marco wakes up late on the day of the match.", answer: false },
      { text: "Ana scores after Marco passes the ball across.", answer: true },
      { text: "The team wins by one goal.", answer: true },
      { text: "Marco wears his blue team shirt.", answer: true },
      { text: "No students come to watch the match.", answer: false },
    ],
    buildSentence: [
      {
        target: "The day of the match arrives, and I wake up early with a fast heartbeat.",
        jumbled: ["the", "The", "fast", "with", "early", "a", "arrives,", "of", "I", "day", "match", "and", "up", "wake", "heartbeat."],
      },
      {
        target: "Our team meets near the field, and Mr. Cruz tells us to stay calm and play together.",
        jumbled: ["stay", "and", "play", "Our", "field,", "meets", "Cruz", "tells", "Mr.", "team", "calm", "us", "near", "the", "and", "together.", "to"],
      },
      {
        target: "The game begins, and I run after the ball with my teammates.",
        jumbled: ["my", "I", "teammates.", "the", "run", "begins,", "with", "and", "game", "The", "after", "ball"],
      },
      {
        target: "She kicks it hard, and the ball goes into the goal.",
        jumbled: ["and", "goes", "the", "kicks", "ball", "the", "goal.", "it", "She", "hard,", "into"],
      },
      {
        target: "I feel tired, excited, and very proud of what we did together.",
        jumbled: ["very", "together.", "excited,", "feel", "we", "proud", "did", "of", "what", "tired,", "and", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a game you play.",
    mySentenceExample: "I feel happy when my team wins a game.",
  },
  {
    number: 10,
    title: "Playing for My Team",
    image: null,
    imageNote: "Marco walking home from school smiling with his football shoes in his bag, his folded blue number-ten shirt visible inside, warm late-afternoon light.",
    story:
      "On Monday after the match, I walk to school with my football shoes in my bag. The weekend game is over, but I still remember every moment on the field. In class, some students smile at me and say, “Good game, Marco!” At break time, Luis, Ana, and Ben sit with me again under the tree. We talk about the goal, the passes, and the loud cheers from the students. Mr. Cruz walks by and tells us he is proud of our teamwork. I thank him and smile because I know I worked hard for this team. Then I look at my blue shirt folded neatly inside my bag. It is only a shirt, but to me it means friendship, effort, and football. As I walk home after school, I feel happy because I am not only learning to play, I am learning to be part of a team.",
    questions: [
      { text: "What do some students say to Marco in class?", answer: "Good game, Marco!" },
      { text: "Who tells the team he is proud of their teamwork?", answer: "Mr. Cruz." },
      { text: "What does the blue shirt mean to Marco?", answer: "Friendship, effort, and football." },
    ],
    trueFalse: [
      { text: "Marco forgets the match very quickly.", answer: false },
      { text: "Mr. Cruz says he is proud of the team's teamwork.", answer: true },
      { text: "Marco feels he is becoming part of a team.", answer: true },
      { text: "Students say, “Good game, Marco!”", answer: true },
      { text: "Marco keeps his shoes at school forever.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Monday after the match, I walk to school with my football shoes in my bag.",
        jumbled: ["bag.", "in", "shoes", "On", "the", "walk", "match,", "school", "my", "I", "to", "football", "my", "with", "after", "Monday"],
      },
      {
        target: "At break time, Luis, Ana, and Ben sit with me again under the tree.",
        jumbled: ["the", "Luis,", "with", "tree.", "Ana,", "Ben", "under", "again", "At", "and", "sit", "time,", "break", "me"],
      },
      {
        target: "We talk about the goal, the passes, and the loud cheers from the students.",
        jumbled: ["talk", "from", "the", "We", "about", "cheers", "goal,", "passes,", "the", "students.", "and", "loud", "the", "the"],
      },
      {
        target: "I thank him and smile because I know I worked hard for this team.",
        jumbled: ["team.", "smile", "hard", "I", "I", "worked", "know", "him", "thank", "and", "this", "for", "because", "I"],
      },
      {
        target: "I feel happy because I am not only learning to play, I am learning to be part of a team.",
        jumbled: ["be", "learning", "to", "I", "feel", "not", "happy", "because", "am", "team.", "I", "I", "to", "part", "am", "of", "a", "play,", "learning", "only"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being part of a team.",
    mySentenceExample: "I feel proud when I help my team.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
