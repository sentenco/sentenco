// A1 Teens digital storybook, Book 5: "My School Basketball Team"
// Static content -- no Supabase, mirrors the pattern in storybookData4.js.
import coverImg from "./assets/storybook5/cover.jpg";

export const STORYBOOK_TITLE = "My School Basketball Team";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Nina standing on the shiny school gym court holding a basketball with both hands, the tall hoop above her, Coach Ben and teammates Mia and Jay visible nearby.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Nina", role: "The narrator, a new player on the team", look: "Hair in a ponytail, blue team jersey, nervous-but-determined expression at first." },
  { name: "Coach Ben", role: "The basketball coach", look: "Red team shirt, whistle around his neck, warm and encouraging." },
  { name: "Mia", role: "Nina's teammate", look: "Curly hair, kind and patient, often the one who explains things gently." },
  { name: "Jay", role: "Nina's teammate", look: "Short hair, energetic and talkative, quick to cheer teammates on." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Time in the School Gym",
    image: null,
    imageNote: "Nina standing just inside the bright school gym, Coach Ben (red shirt) handing her a basketball, other students bouncing balls in the background under the tall hoop.",
    story:
      "After school, I walk to the big gym next to the playground. The doors are open, and I can hear a ball bouncing on the floor. Inside the gym, the lights are bright, and a tall hoop hangs above the shiny court. A teacher in a red shirt holds a basketball and looks at the students. He smiles at me and says, “Welcome to the basketball club, Nina.” I feel my hands shake a little, but I smile back at him. He gives me a ball and shows me how to hold it with both hands. Other students bounce their balls on the floor and laugh together. When I try to bounce my ball, it goes a little to the side, but no one laughs at me. I take a deep breath, try again, and this time the ball comes back to my hand, so I feel scared and excited, but glad I came to the gym.",
    questions: [
      { text: "Where does Nina go after school?", answer: "The big gym next to the playground." },
      { text: "What does the teacher in the red shirt say to Nina?", answer: "Welcome to the basketball club, Nina." },
      { text: "What happens when Nina tries to bounce the ball again?", answer: "It comes back to her hand." },
    ],
    trueFalse: [
      { text: "Nina goes to the gym next to the playground.", answer: true },
      { text: "The teacher is angry when Nina comes into the gym.", answer: false },
      { text: "Nina feels scared and excited at the end.", answer: true },
      { text: "The teacher gives Nina a basketball.", answer: true },
      { text: "Other students laugh at Nina when the ball goes to the side.", answer: false },
    ],
    buildSentence: [
      {
        target: "The doors are open, and I can hear a ball bouncing on the floor.",
        jumbled: ["the", "are", "on", "I", "ball", "hear", "and", "bouncing", "The", "open,", "can", "floor.", "a", "doors"],
      },
      {
        target: "Inside the gym, the lights are bright, and a tall hoop hangs above the shiny court.",
        jumbled: ["are", "tall", "gym,", "lights", "bright,", "court.", "Inside", "and", "hangs", "the", "a", "the", "shiny", "above", "hoop", "the"],
      },
      {
        target: "I feel my hands shake a little, but I smile back at him.",
        jumbled: ["my", "at", "I", "smile", "him.", "a", "I", "feel", "back", "little,", "hands", "shake", "but"],
      },
      {
        target: "He gives me a ball and shows me how to hold it with both hands.",
        jumbled: ["shows", "hold", "with", "gives", "both", "and", "a", "ball", "me", "He", "how", "me", "it", "to", "hands."],
      },
      {
        target: "I take a deep breath, try again, and this time the ball comes back to my hand, so I feel scared and excited, but glad I came to the gym.",
        jumbled: ["excited,", "comes", "try", "the", "ball", "I", "this", "time", "scared", "deep", "breath,", "came", "and", "so", "hand,", "take", "glad", "the", "to", "and", "a", "to", "again,", "back", "feel", "but", "my", "gym.", "I", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about basketball and you.",
    mySentenceExample: "I feel shy, but I want to learn basketball in the gym.",
  },
  {
    number: 2,
    title: "Meeting the Basketball Coach",
    image: null,
    imageNote: "Nina sitting on a wooden bench with Coach Ben beside her, Mia and Jay running over to say hello, warm gym lighting.",
    story:
      "The next afternoon, I come to the gym a little early and sit on the wooden bench. The coach in the red shirt walks over to me and sits down beside me. He says, “My name is Coach Ben, and I am happy you joined the team.” He asks me my name, my class, and if I like sports. I tell him I am Nina, I am in class seven, and I want to learn basketball. Coach Ben smiles and says, “Everyone starts as a beginner, so do not worry.” Then two girls run over and say, “Hi, I'm Mia,” and “I'm Jay, welcome to the team.” We all shake hands, and the gym feels warmer and friendlier to me. When practice starts, I stand with Mia and Jay in the line. In that moment, I feel calm because now I know my coach and two new friends.",
    questions: [
      { text: "What is the coach's name?", answer: "Coach Ben." },
      { text: "What class is Nina in?", answer: "Class seven." },
      { text: "Who are the two girls that say hello to Nina?", answer: "Mia and Jay." },
    ],
    trueFalse: [
      { text: "Nina comes to the gym late.", answer: false },
      { text: "Coach Ben says everyone starts as a beginner.", answer: true },
      { text: "Nina feels calm at the end of the chapter.", answer: true },
      { text: "Mia and Jay welcome Nina to the team.", answer: true },
      { text: "Nina refuses to tell the coach her name.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next afternoon, I come to the gym a little early and sit on the wooden bench.",
        jumbled: ["to", "early", "a", "wooden", "afternoon,", "bench.", "come", "gym", "The", "the", "I", "and", "little", "the", "sit", "on", "next"],
      },
      {
        target: "He says, “My name is Coach Ben, and I am happy you joined the team.” He asks me my name, my class, and if I like sports.",
        jumbled: ["you", "if", "He", "Coach", "Ben,", "He", "my", "class,", "is", "I", "says,", "and", "name,", "and", "sports.", "happy", "like", "am", "me", "“My", "I", "my", "team.”", "joined", "name", "asks", "the"],
      },
      {
        target: "I tell him I am Nina, I am in class seven, and I want to learn basketball.",
        jumbled: ["to", "him", "am", "basketball.", "and", "I", "in", "I", "Nina,", "want", "tell", "I", "class", "seven,", "am", "learn", "I"],
      },
      {
        target: "Then two girls run over and say, “Hi, I'm Mia,” and “I'm Jay, welcome to the team.”",
        jumbled: ["“Hi,", "and", "to", "over", "run", "Mia,”", "Then", "I'm", "and", "two", "say,", "Jay,", "girls", "team.”", "the", "welcome", "“I'm"],
      },
      {
        target: "In that moment, I feel calm because now I know my coach and two new friends.",
        jumbled: ["friends.", "and", "In", "my", "coach", "I", "now", "two", "new", "that", "feel", "calm", "know", "I", "because", "moment,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a coach or a teacher you like.",
    mySentenceExample: "My coach is kind and helps me learn.",
  },
  {
    number: 3,
    title: "Learning to Bounce and Dribble",
    image: null,
    imageNote: "Coach Ben demonstrating dribbling in the middle of the court while Nina and Mia copy him, Mia gently showing Nina how to soften her hand on the ball.",
    story:
      "Today, Coach Ben says we will learn how to bounce and dribble the ball. He stands in the middle of the court and shows us slowly with his own ball. “Push the ball down with your fingers, not your whole hand,” he tells us. I try to bounce the ball, but at first it jumps too high and goes away from me. Mia laughs kindly and says, “Keep your hand soft, like this, Nina.” I copy her, and slowly my ball stays close to my body. Then Coach Ben asks us to walk and bounce the ball at the same time. My first steps are slow, but I do not drop the ball this time. When I dribble all the way to the wall and back, Coach Ben claps for me. In that moment, I feel proud because I can bounce and walk with the ball.",
    questions: [
      { text: "What does Coach Ben teach the team today?", answer: "How to bounce and dribble the ball." },
      { text: "What does Mia tell Nina about her hand?", answer: "To keep it soft." },
      { text: "What does Coach Ben do when Nina dribbles to the wall and back?", answer: "He claps for her." },
    ],
    trueFalse: [
      { text: "The team learns to bounce and dribble the ball.", answer: true },
      { text: "Nina drops the ball every time she walks.", answer: false },
      { text: "Nina feels proud at the end.", answer: true },
      { text: "Mia tells Nina to keep her hand soft.", answer: true },
      { text: "Coach Ben does not show the team how to dribble.", answer: false },
    ],
    buildSentence: [
      {
        target: "He stands in the middle of the court and shows us slowly with his own ball.",
        jumbled: ["of", "court", "us", "shows", "ball.", "stands", "slowly", "with", "the", "and", "middle", "the", "He", "own", "in", "his"],
      },
      {
        target: "I try to bounce the ball, but at first it jumps too high and goes away from me.",
        jumbled: ["but", "it", "too", "try", "I", "first", "goes", "the", "away", "ball,", "to", "high", "bounce", "at", "and", "me.", "jumps", "from"],
      },
      {
        target: "Mia laughs kindly and says, “Keep your hand soft, like this, Nina.”",
        jumbled: ["soft,", "like", "your", "and", "says,", "Mia", "kindly", "laughs", "hand", "“Keep", "Nina.”", "this,"],
      },
      {
        target: "Then Coach Ben asks us to walk and bounce the ball at the same time.",
        jumbled: ["the", "the", "asks", "us", "and", "ball", "to", "walk", "at", "Ben", "bounce", "Then", "time.", "Coach", "same"],
      },
      {
        target: "Coach Ben claps for me.",
        jumbled: ["claps", "Coach", "me.", "Ben", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning something new.",
    mySentenceExample: "I feel happy when I learn a new skill.",
  },
  {
    number: 4,
    title: "Shooting Practice at the Hoop",
    image: null,
    imageNote: "Nina bending her knees and shooting a basketball toward the hoop, Jay standing nearby giving advice, the ball mid-flight toward the ring.",
    story:
      "On Thursday, Coach Ben says it is time to shoot the ball at the hoop. He stands under the tall hoop and shows us how to hold the ball and look up. “Bend your knees, then push the ball up softly,” he tells the team. My first shot is too weak, and the ball does not reach the hoop. Jay stands next to me and says, “Try again, Nina, and use your legs, not only your arms.” I bend my knees, look at the hoop, and push the ball up with both hands. This time the ball flies higher and touches the ring, but it does not go in. On my next try, the ball drops through the hoop, and I hear a soft sound. My friends cheer for me, and I feel excited because I made my first basket today.",
    questions: [
      { text: "What does Coach Ben teach on Thursday?", answer: "Shooting the ball at the hoop." },
      { text: "What does Jay tell Nina to use?", answer: "Her legs, not only her arms." },
      { text: "What happens on Nina's next try after touching the ring?", answer: "The ball drops through the hoop." },
    ],
    trueFalse: [
      { text: "Nina's first shot goes into the hoop.", answer: false },
      { text: "Jay tells Nina to use her legs, not only her arms.", answer: true },
      { text: "Nina feels excited because she makes her first basket.", answer: true },
      { text: "Nina's second shot touches the ring.", answer: true },
      { text: "Coach Ben never shows the team how to shoot.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Thursday, Coach Ben says it is time to shoot the ball at the hoop.",
        jumbled: ["the", "to", "is", "hoop.", "Ben", "shoot", "at", "the", "Thursday,", "says", "ball", "On", "Coach", "it", "time"],
      },
      {
        target: "He stands under the tall hoop and shows us how to hold the ball and look up.",
        jumbled: ["hoop", "ball", "and", "how", "to", "look", "us", "stands", "the", "He", "the", "up.", "and", "hold", "tall", "under", "shows"],
      },
      {
        target: "Jay stands next to me and says, “Try again, Nina, and use your legs, not only your arms.”",
        jumbled: ["only", "your", "“Try", "legs,", "and", "and", "stands", "to", "me", "next", "Jay", "use", "says,", "your", "again,", "Nina,", "not", "arms.”"],
      },
      {
        target: "I bend my knees, look at the hoop, and push the ball up with both hands.",
        jumbled: ["at", "knees,", "push", "hoop,", "with", "my", "I", "ball", "up", "bend", "the", "hands.", "both", "look", "the", "and"],
      },
      {
        target: "On my next try, the ball drops through the hoop, and I hear a soft sound.",
        jumbled: ["through", "try,", "a", "On", "sound.", "next", "soft", "ball", "the", "and", "I", "hoop,", "my", "drops", "the", "hear"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about trying again after a mistake.",
    mySentenceExample: "I miss the ball, but I try again.",
  },
  {
    number: 5,
    title: "A Small Mistake in Practice",
    image: null,
    imageNote: "Nina having slipped on the gym floor during a small game, Coach Ben rushing over and Mia reaching out a hand to help her up, other players watching with concern.",
    story:
      "During practice, we play a small game with two teams on the court. I run fast to catch the ball, but I do not look down at my feet. Suddenly, I slip on the shiny floor and fall on my side. For a moment, my face feels hot because everyone can see me. Coach Ben runs to me quickly and asks, “Nina, are you okay?” I say yes, and Mia gives me her hand and helps me stand up. Coach Ben tells the team, “Falling is normal, so do not be afraid to try.” I brush the dust from my shorts and take a deep breath. Then I go back into the game and pass the ball to Jay. In that moment, I feel brave because a small mistake did not stop me.",
    questions: [
      { text: "What does Nina forget to look at when she runs?", answer: "Her feet." },
      { text: "Who helps Nina stand up?", answer: "Mia." },
      { text: "What does Coach Ben say about falling?", answer: "That falling is normal, so do not be afraid to try." },
    ],
    trueFalse: [
      { text: "Nina slips and falls on the court.", answer: true },
      { text: "Coach Ben is angry that Nina falls.", answer: false },
      { text: "Nina feels brave at the end.", answer: true },
      { text: "Mia helps Nina stand up.", answer: true },
      { text: "Coach Ben says falling means Nina must quit.", answer: false },
    ],
    buildSentence: [
      {
        target: "During practice, we play a small game with two teams on the court.",
        jumbled: ["game", "on", "two", "we", "the", "play", "practice,", "small", "court.", "with", "During", "a", "teams"],
      },
      {
        target: "I run fast to catch the ball, but I do not look down at my feet.",
        jumbled: ["but", "I", "the", "at", "down", "ball,", "catch", "my", "fast", "not", "to", "look", "feet.", "I", "do", "run"],
      },
      {
        target: "Coach Ben runs to me quickly and asks, “Nina, are you okay?” I say yes, and Mia gives me her hand and helps me stand up.",
        jumbled: ["asks,", "you", "gives", "runs", "quickly", "and", "Coach", "Mia", "Ben", "and", "are", "and", "I", "yes,", "helps", "okay?”", "her", "say", "me", "me", "“Nina,", "hand", "to", "stand", "me", "up."],
      },
      {
        target: "Coach Ben tells the team, “Falling is normal, so do not be afraid to try.”",
        jumbled: ["is", "not", "so", "afraid", "normal,", "Ben", "“Falling", "Coach", "be", "to", "tells", "the", "team,", "do", "try.”"],
      },
      {
        target: "In that moment, I feel brave because a small mistake did not stop me.",
        jumbled: ["not", "I", "me.", "did", "a", "small", "brave", "mistake", "In", "that", "feel", "stop", "moment,", "because"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small mistake you made.",
    mySentenceExample: "I make a mistake, but I do not give up.",
  },
  {
    number: 6,
    title: "Break Time Talk",
    image: null,
    imageNote: "Nina, Mia, and Jay sitting together on the gym bench during a break, sharing crackers and water, Coach Ben walking past in the background.",
    story:
      "After hard practice, we sit on the bench and drink water during our break. Mia opens her bag and shares some small crackers with the team. Jay talks about her favourite player and says, “She can jump so high and shoot from far away.” I tell them I do not know many players yet, but I want to learn more. Mia says, “We can watch a short game on my phone after school, Nina.” We laugh and talk about our own dreams in basketball. Coach Ben walks past us and says, “Good rest, team, you play well today.” The break feels short but happy, like a small party on the bench. When Coach Ben blows his whistle, we stand up and get ready again. In that moment, I feel warm inside because these teammates feel like real friends.",
    questions: [
      { text: "What does Mia share with the team?", answer: "Small crackers." },
      { text: "What does Jay talk about during the break?", answer: "Her favorite player." },
      { text: "What does Coach Ben say when he walks past them?", answer: "Good rest, team, you play well today." },
    ],
    trueFalse: [
      { text: "The team drinks water during the break.", answer: true },
      { text: "Nina knows many basketball players already.", answer: false },
      { text: "Nina feels warm inside because her teammates feel like real friends.", answer: true },
      { text: "Mia shares crackers with the team.", answer: true },
      { text: "Coach Ben says the team played badly today.", answer: false },
    ],
    buildSentence: [
      {
        target: "We sit on the bench and drink water during our break.",
        jumbled: ["bench", "during", "sit", "and", "on", "the", "our", "break.", "water", "drink", "We"],
      },
      {
        target: "Jay talks about her favourite player and says, “She can jump so high and shoot from far away.” I tell them I do not know many players yet, but I want to learn more.",
        jumbled: ["them", "want", "Jay", "do", "her", "players", "says,", "to", "about", "far", "“She", "favourite", "know", "jump", "I", "more.", "high", "many", "from", "yet,", "shoot", "so", "player", "can", "but", "away.”", "learn", "and", "I", "talks", "tell", "and", "I", "not"],
      },
      {
        target: "Mia says, “We can watch a short game on my phone after school, Nina.”",
        jumbled: ["a", "“We", "short", "Mia", "watch", "phone", "my", "says,", "game", "can", "Nina.”", "after", "school,", "on"],
      },
      {
        target: "Coach Ben walks past us and says, “Good rest, team, you play well today.”",
        jumbled: ["“Good", "you", "Ben", "walks", "past", "and", "Coach", "today.”", "play", "says,", "team,", "us", "well", "rest,"],
      },
      {
        target: "In that moment, I feel warm inside because these teammates feel like real friends.",
        jumbled: ["teammates", "that", "I", "feel", "because", "In", "inside", "moment,", "warm", "like", "feel", "real", "friends.", "these"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about talking with friends after sport.",
    mySentenceExample: "I like to talk and rest with my friends.",
  },
  {
    number: 7,
    title: "Extra Practice After School",
    image: null,
    imageNote: "Nina, Mia, and Jay alone in the quiet gym after school, taking turns shooting at the hoop, Jay counting baskets out loud.",
    story:
      "On Friday, I stay in the gym for extra practice with Mia and Jay. The other students go home, so the big gym feels quiet and calm. We take three balls and stand in front of the tall hoop together. Mia says, “Let's count how many baskets we can make in five minutes.” I dribble, bend my knees, and shoot the ball as many times as I can. At first, I miss more than I make, but slowly my hands feel stronger. Jay counts my baskets out loud and says, “Nina, you are getting better every day.” We help each other pick up the balls and try again and again. When the extra practice ends, my arms are tired, but my heart is happy. In that moment, I feel proud because I work hard even when no one asks me to.",
    questions: [
      { text: "Who stays for extra practice with Nina?", answer: "Mia and Jay." },
      { text: "What does Mia want the friends to count?", answer: "How many baskets they can make in five minutes." },
      { text: "What does Jay say about Nina?", answer: "That she is getting better every day." },
    ],
    trueFalse: [
      { text: "The gym is loud and full during extra practice.", answer: false },
      { text: "Nina misses more baskets at first.", answer: true },
      { text: "Nina feels proud because she works hard on her own.", answer: true },
      { text: "Jay counts Nina's baskets out loud.", answer: true },
      { text: "Nina practises alone with no one else.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Friday, I stay in the gym for extra practice with Mia and Jay.",
        jumbled: ["extra", "Jay.", "for", "with", "the", "I", "in", "stay", "Mia", "gym", "Friday,", "and", "On", "practice"],
      },
      {
        target: "We take three balls and stand in front of the tall hoop together.",
        jumbled: ["three", "in", "hoop", "tall", "stand", "balls", "and", "take", "We", "front", "the", "together.", "of"],
      },
      {
        target: "I dribble, bend my knees, and shoot the ball as many times as I can.",
        jumbled: ["knees,", "I", "can.", "as", "ball", "shoot", "the", "many", "my", "as", "I", "and", "dribble,", "times", "bend"],
      },
      {
        target: "Jay counts my baskets out loud and says, “Nina, you are getting better every day.”",
        jumbled: ["and", "you", "out", "says,", "baskets", "getting", "are", "Jay", "“Nina,", "loud", "every", "better", "my", "day.”", "counts"],
      },
      {
        target: "In that moment, I feel proud because I work hard even when no one asks me to.",
        jumbled: ["one", "to.", "I", "even", "no", "In", "when", "hard", "I", "me", "that", "asks", "proud", "because", "work", "moment,", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about working hard at something.",
    mySentenceExample: "I practise a lot because I want to be better.",
  },
  {
    number: 8,
    title: "Getting Ready for a Mini Game",
    image: null,
    imageNote: "The team gathered around Coach Ben and a small white board with arrows and circles, then putting their hands together in the middle of the court and shouting 'Team!'",
    story:
      "Next week, our team will play a mini game against another class in the gym. Coach Ben tells us to wear our team shirts and come early on game day. He shows us a simple plan on a small white board with arrows and circles. “Pass the ball, help each other, and do not be afraid,” he says to us. We practise passing and running in the right places on the court. Mia and I practise a quick pass near the hoop many times. “Nice pass, Nina,” she says, catching the ball. Jay says, “If we play as one team, we can do our best.” After practice, we put our hands together in the middle and say, “Team!” I go home and put my clean team shirt on my chair for the game. In that moment, I feel nervous but ready because our team is prepared together.",
    questions: [
      { text: "Who will the team play against next week?", answer: "Another class." },
      { text: "What does Coach Ben show on the small white board?", answer: "A simple plan with arrows and circles." },
      { text: "What do the players say when they put their hands together?", answer: "Team!" },
    ],
    trueFalse: [
      { text: "The mini game is against another class.", answer: true },
      { text: "Coach Ben tells the team to come late on game day.", answer: false },
      { text: "Nina feels nervous but ready at the end.", answer: true },
      { text: "Coach Ben shows a plan on a white board.", answer: true },
      { text: "The team never practises passing before the game.", answer: false },
    ],
    buildSentence: [
      {
        target: "Next week, our team will play a mini game against another class in the gym.",
        jumbled: ["our", "play", "another", "gym.", "the", "game", "will", "week,", "class", "in", "team", "a", "mini", "against", "Next"],
      },
      {
        target: "He shows us a simple plan on a small white board with arrows and circles.",
        jumbled: ["small", "plan", "white", "with", "a", "board", "He", "simple", "us", "and", "arrows", "a", "shows", "circles.", "on"],
      },
      {
        target: "We practise passing and running in the right places on the court.",
        jumbled: ["running", "the", "the", "on", "and", "in", "passing", "We", "court.", "right", "places", "practise"],
      },
      {
        target: "Jay says, “If we play as one team, we can do our best.”",
        jumbled: ["Jay", "we", "“If", "says,", "team,", "do", "play", "best.”", "our", "one", "can", "we", "as"],
      },
      {
        target: "I go home and put my clean team shirt on my chair for the game.",
        jumbled: ["go", "team", "chair", "my", "shirt", "the", "my", "on", "put", "for", "home", "clean", "I", "game.", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about getting ready for something important.",
    mySentenceExample: "I feel nervous, but I am ready for the game.",
  },
  {
    number: 9,
    title: "My First School Basketball Game",
    image: null,
    imageNote: "Nina shooting the ball into the basket during the mini game, the gym full of watching students, Mia and Jay running toward her with big smiles as the crowd cheers.",
    story:
      "Today is game day, and the gym is full of students who come to watch. My heart beats fast when I hear the loud voices and see the bright lights. Coach Ben says, “Just do your best, Nina, and remember to help your team.” When the game starts, I run, pass, and try to stay close to Mia and Jay. In the first half, the other class scores two baskets, and we feel a little worried. But Jay catches the ball and passes it to me near the hoop. I bend my knees, look up, and shoot the ball into the basket. The whole gym cheers, and my teammates hug me with big smiles. When the game ends, we do not win, but we play well and never give up. In that moment, I feel proud because I scored in my very first game.",
    questions: [
      { text: "Why is the gym full today?", answer: "Because it is game day and students come to watch." },
      { text: "Who passes the ball to Nina near the hoop?", answer: "Jay." },
      { text: "Does the team win the game?", answer: "No, they do not win, but they play well." },
    ],
    trueFalse: [
      { text: "Many students come to watch the game.", answer: true },
      { text: "Nina misses her shot near the hoop.", answer: false },
      { text: "Nina feels proud because she scored in her first game.", answer: true },
      { text: "Jay passes the ball to Nina near the hoop.", answer: true },
      { text: "The team wins the game easily.", answer: false },
    ],
    buildSentence: [
      {
        target: "Today is game day, and the gym is full of students who come to watch.",
        jumbled: ["of", "come", "is", "is", "students", "who", "full", "Today", "to", "the", "and", "gym", "day,", "game", "watch."],
      },
      {
        target: "I run, pass, and try to stay close to Mia and Jay.",
        jumbled: ["Mia", "try", "close", "to", "I", "pass,", "and", "and", "Jay.", "stay", "run,", "to"],
      },
      {
        target: "In the first half, the other class scores two baskets, and we feel a little worried.",
        jumbled: ["feel", "we", "scores", "two", "worried.", "baskets,", "other", "In", "a", "and", "the", "class", "half,", "the", "first", "little"],
      },
      {
        target: "I bend my knees, look up, and shoot the ball into the basket.",
        jumbled: ["up,", "basket.", "bend", "the", "knees,", "ball", "shoot", "the", "and", "I", "look", "into", "my"],
      },
      {
        target: "We do not win, but we play well and never give up.",
        jumbled: ["win,", "up.", "and", "we", "do", "well", "We", "play", "never", "not", "give", "but"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about doing your best.",
    mySentenceExample: "I do my best even when the game is hard.",
  },
  {
    number: 10,
    title: "Part of the Team",
    image: null,
    imageNote: "Nina, Mia, Jay, and Coach Ben with hands together in the middle of the gym court shouting 'Team!', Nina looking calm and happy under the tall hoop.",
    story:
      "On Monday, I walk into the gym, and it does not feel new or scary anymore. Mia waves at me, Jay throws me a ball, and Coach Ben smiles at the door. We start our practice, and my hands move with the ball more easily now. I can bounce, dribble, pass, and shoot, and I am not afraid to try. During a short break, Coach Ben says, “Nina, you are a real part of this team now.” I look around at the tall hoop, the shiny court, and my kind friends. I remember my first day, when my hands shook and the ball went to the side. Now I feel strong, calm, and happy in this same gym. At the end of practice, we put our hands together and shout, “Team!” In that moment, I feel proud because the basketball team truly feels like my place.",
    questions: [
      { text: "How does the gym feel to Nina on Monday?", answer: "Not new or scary anymore." },
      { text: "What does Coach Ben say to Nina during the break?", answer: "You are a real part of this team now." },
      { text: "What does Nina remember from her first day?", answer: "When her hands shook and the ball went to the side." },
    ],
    trueFalse: [
      { text: "The gym feels new and scary to Nina now.", answer: false },
      { text: "Coach Ben says Nina is a real part of the team.", answer: true },
      { text: "Nina feels proud because the team feels like her place.", answer: true },
      { text: "Nina can now bounce, dribble, pass, and shoot.", answer: true },
      { text: "Nina forgets her very first day at the gym.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Monday, I walk into the gym, and it does not feel new or scary anymore.",
        jumbled: ["into", "and", "Monday,", "anymore.", "walk", "On", "does", "not", "scary", "or", "it", "the", "feel", "gym,", "I", "new"],
      },
      {
        target: "We start our practice, and my hands move with the ball more easily now.",
        jumbled: ["practice,", "hands", "easily", "start", "more", "with", "ball", "now.", "the", "our", "my", "We", "and", "move"],
      },
      {
        target: "During a short break, Coach Ben says, “Nina, you are a real part of this team now.”",
        jumbled: ["real", "short", "are", "part", "“Nina,", "break,", "Ben", "you", "says,", "this", "During", "a", "a", "now.”", "of", "team", "Coach"],
      },
      {
        target: "I remember my first day, when my hands shook and the ball went to the side.",
        jumbled: ["to", "my", "the", "shook", "went", "side.", "the", "and", "remember", "when", "first", "hands", "ball", "I", "day,", "my"],
      },
      {
        target: "In that moment, I feel proud because the basketball team truly feels like my place.",
        jumbled: ["like", "that", "feel", "moment,", "team", "my", "because", "the", "I", "proud", "feels", "place.", "In", "basketball", "truly"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a place where you feel you belong.",
    mySentenceExample: "The gym feels like my place now.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
