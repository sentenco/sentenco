// A2 Kids digital storybook, Book 30: "A Camping Trip"
// Static content -- no Supabase. Eighth and final book in the A2 Kids
// batch (Books 23-30). Same structure/level as storybookData23.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook30/cover.jpg";

export const STORYBOOK_TITLE = "A Camping Trip";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Owen, Dad, and Lily sitting around a glowing campfire at night in the forest, roasting marshmallows, a green tent visible behind them under a starry sky.";

export const CHARACTERS = [
  { name: "Owen", role: "The narrator, a young boy", look: "Short brown hair, flannel jacket, adventurous but sometimes a bit nervous at night." },
  { name: "Dad", role: "Owen's father", look: "Beard, hiking boots, calm and reassuring." },
  { name: "Lily", role: "Owen's older sister", look: "Ponytail, green backpack, confident and encouraging." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Packing the Car",
    image: null,
    imageNote: "Owen and Lily loading a tent, sleeping bags, and a cooler into the trunk of the car, Dad checking a packing list on a clipboard.",
    story:
      "Saturday morning finally arrives, and our whole family is packing the car for our very first camping trip. I carry the rolled-up tent while Lily loads sleeping bags into the trunk carefully. “Don't forget the marshmallows,” Lily reminds Dad, who checks everything off his packing list twice. I feel a bubbling excitement in my chest, since I have never slept outside in nature before. “Are we bringing the fishing rods too?” I ask eagerly. “Of course, Owen,” Dad says, smiling. Once everything fits perfectly into the car, we finally climb in, ready for our big adventure to begin.",
    questions: [
      { text: "What does Owen carry to the car?", answer: "The rolled-up tent." },
      { text: "What does Lily remind Dad not to forget?", answer: "The marshmallows." },
      { text: "How does Owen feel about the trip?", answer: "Bubbling excitement." },
    ],
    trueFalse: [
      { text: "Owen carries the rolled-up tent.", answer: true },
      { text: "Lily reminds Dad about the marshmallows.", answer: true },
      { text: "Owen has camped outside many times before.", answer: false },
    ],
    buildSentence: [
      {
        target: "Saturday morning finally arrives, and our whole family is packing the car for our very first camping trip.",
        jumbled: ["packing", "the", "camping", "trip.", "first", "and", "Saturday", "is", "our", "morning", "whole", "family", "for", "finally", "arrives,", "our", "car", "very"],
      },
      {
        target: "I carry the rolled-up tent while Lily loads sleeping bags into the trunk carefully.",
        jumbled: ["bags", "carefully.", "Lily", "the", "the", "sleeping", "rolled-up", "trunk", "into", "loads", "while", "I", "carry", "tent"],
      },
      {
        target: "I feel a bubbling excitement in my chest, since I have never slept outside in nature before.",
        jumbled: ["I", "nature", "a", "slept", "since", "chest,", "bubbling", "before.", "my", "I", "in", "outside", "excitement", "have", "feel", "in", "never"],
      },
      {
        target: "“Are we bringing the fishing rods too?” I ask eagerly.",
        jumbled: ["too?”", "rods", "ask", "I", "fishing", "eagerly.", "we", "bringing", "the", "“Are"],
      },
      {
        target: "We finally climb in, ready for our big adventure to begin.",
        jumbled: ["big", "begin.", "ready", "adventure", "climb", "finally", "our", "for", "in,", "We", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about packing for a trip.",
    mySentenceExample: "I packed my swimsuit and towel for our beach trip.",
  },
  {
    number: 2,
    title: "The Long Drive",
    image: null,
    imageNote: "Owen and Lily playing a car game in the back seat, pointing excitedly out the window at passing trees and mountains as the car drives along a forest road.",
    story:
      "The drive to the campsite takes almost three hours, so Lily and I play games to pass the time. We spot yellow cars and count animals along the road, laughing whenever we both shout the same answer. As we get closer, the scenery changes from busy streets to tall green trees and winding mountain roads. “We're almost there, Owen,” Dad announces, and I press my face against the window, watching the beautiful forest pass by. When we finally turn onto a bumpy dirt road, my excitement grows even stronger, knowing our campsite is just minutes away now.",
    questions: [
      { text: "How long does the drive take?", answer: "Almost three hours." },
      { text: "What game do Owen and Lily play?", answer: "Spotting yellow cars and counting animals." },
      { text: "What does the scenery look like as they get closer?", answer: "Tall green trees and winding mountain roads." },
    ],
    trueFalse: [
      { text: "The drive takes almost three hours.", answer: true },
      { text: "Owen and Lily sleep the whole drive.", answer: false },
      { text: "The scenery becomes tall green trees and mountains.", answer: true },
    ],
    buildSentence: [
      {
        target: "The drive to the campsite takes almost three hours, so Lily and I play games to pass the time.",
        jumbled: ["drive", "I", "the", "pass", "hours,", "three", "to", "games", "and", "play", "almost", "to", "the", "Lily", "time.", "so", "takes", "The", "campsite"],
      },
      {
        target: "We spot yellow cars and count animals along the road, laughing whenever we both shout the same answer.",
        jumbled: ["spot", "both", "shout", "the", "we", "the", "We", "and", "animals", "laughing", "cars", "yellow", "road,", "count", "whenever", "along", "answer.", "same"],
      },
      {
        target: "The scenery changes from busy streets to tall green trees and winding mountain roads.",
        jumbled: ["changes", "busy", "roads.", "tall", "The", "from", "trees", "streets", "green", "scenery", "winding", "to", "and", "mountain"],
      },
      {
        target: "“We're almost there, Owen,” Dad announces, and I press my face against the window, watching the beautiful forest pass by.",
        jumbled: ["press", "watching", "Owen,”", "Dad", "almost", "against", "beautiful", "face", "by.", "the", "there,", "forest", "announces,", "“We're", "pass", "I", "my", "and", "window,", "the"],
      },
      {
        target: "My excitement grows even stronger, knowing our campsite is just minutes away now.",
        jumbled: ["campsite", "My", "even", "now.", "away", "excitement", "our", "grows", "minutes", "is", "knowing", "just", "stronger,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a game you play during a long car ride.",
    mySentenceExample: "I play a counting game during long car rides.",
  },
  {
    number: 3,
    title: "Setting Up the Tent",
    image: null,
    imageNote: "Owen and Lily struggling to connect tent poles while Dad watches patiently nearby, the half-built tent leaning slightly to one side.",
    story:
      "At the campsite, Dad announces that Lily and I get to set up the tent ourselves this time, with him only helping if needed. We spread out the tent poles, but connecting them correctly proves much harder than it looks. Our first attempt leans sideways dramatically, and we both burst out laughing at our wobbly creation. “Try connecting the poles in a criss-cross pattern, Owen,” Dad suggests helpfully, without actually touching anything himself. After several more tries, our tent finally stands up straight and sturdy. “We did it ourselves!” Lily cheers, and I feel a proud sense of accomplishment.",
    questions: [
      { text: "Who gets to set up the tent?", answer: "Owen and Lily." },
      { text: "What happens on their first attempt?", answer: "It leans sideways dramatically." },
      { text: "What does Dad suggest?", answer: "Connecting the poles in a criss-cross pattern." },
    ],
    trueFalse: [
      { text: "Owen and Lily set up the tent themselves.", answer: true },
      { text: "The tent stands perfectly straight on the first try.", answer: false },
      { text: "Dad suggests a criss-cross pattern for the poles.", answer: true },
    ],
    buildSentence: [
      {
        target: "At the campsite, Dad announces that Lily and I get to set up the tent ourselves this time, with him only helping if needed.",
        jumbled: ["Lily", "the", "time,", "up", "to", "and", "the", "needed.", "tent", "I", "helping", "set", "At", "that", "if", "him", "campsite,", "this", "ourselves", "get", "Dad", "announces", "only", "with"],
      },
      {
        target: "We spread out the tent poles, but connecting them correctly proves much harder than it looks.",
        jumbled: ["harder", "correctly", "spread", "much", "it", "poles,", "out", "We", "proves", "tent", "than", "the", "looks.", "but", "connecting", "them"],
      },
      {
        target: "“Try connecting the poles in a criss-cross pattern, Owen,” Dad suggests helpfully, without actually touching anything himself.",
        jumbled: ["the", "a", "suggests", "connecting", "anything", "in", "poles", "Dad", "“Try", "actually", "Owen,”", "without", "pattern,", "touching", "criss-cross", "helpfully,", "himself."],
      },
      {
        target: "Our tent finally stands up straight and sturdy.",
        jumbled: ["tent", "sturdy.", "up", "and", "straight", "finally", "stands", "Our"],
      },
      {
        target: "Lily cheers, and I feel a proud sense of accomplishment.",
        jumbled: ["a", "I", "of", "proud", "and", "accomplishment.", "Lily", "sense", "feel", "cheers,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you built or set up yourself.",
    mySentenceExample: "I set up my own bookshelf without any help.",
  },
  {
    number: 4,
    title: "Exploring the Woods",
    image: null,
    imageNote: "Owen, Dad, and Lily walking along a forest trail, pointing at a woodpecker on a tree trunk and colorful mushrooms along the path.",
    story:
      "After finishing the tent, we decide to explore the forest trail near our campsite before lunch. Dad leads the way, pointing out interesting things along the path, like a woodpecker tapping loudly on a tree trunk. “Look at these mushrooms, Owen,” Lily says, crouching down to examine some bright orange ones growing near the trail. We discover animal tracks pressed into soft mud and even spot a small chipmunk darting between rocks. Walking through the quiet, peaceful woods feels completely different from our noisy neighborhood back home, and I love every single new discovery we make together.",
    questions: [
      { text: "What does Dad point out on the trail?", answer: "A woodpecker tapping on a tree trunk." },
      { text: "What does Lily examine?", answer: "Bright orange mushrooms." },
      { text: "What animal tracks do they discover?", answer: "Tracks pressed into soft mud, and a chipmunk." },
    ],
    trueFalse: [
      { text: "Dad points out a woodpecker.", answer: true },
      { text: "Lily refuses to look at anything on the trail.", answer: false },
      { text: "They discover animal tracks in the mud.", answer: true },
    ],
    buildSentence: [
      {
        target: "We decide to explore the forest trail near our campsite before lunch.",
        jumbled: ["We", "near", "trail", "the", "before", "explore", "our", "to", "campsite", "lunch.", "forest", "decide"],
      },
      {
        target: "Dad leads the way, pointing out interesting things along the path, like a woodpecker tapping loudly on a tree trunk.",
        jumbled: ["leads", "woodpecker", "a", "a", "things", "out", "tapping", "interesting", "on", "Dad", "path,", "way,", "trunk.", "like", "pointing", "along", "the", "tree", "loudly", "the"],
      },
      {
        target: "“Look at these mushrooms, Owen,” Lily says, crouching down to examine some bright orange ones growing near the trail.",
        jumbled: ["to", "Lily", "orange", "ones", "the", "examine", "down", "these", "growing", "says,", "mushrooms,", "trail.", "some", "near", "crouching", "at", "Owen,”", "bright", "“Look"],
      },
      {
        target: "We discover animal tracks pressed into soft mud and even spot a small chipmunk darting between rocks.",
        jumbled: ["darting", "even", "into", "rocks.", "We", "chipmunk", "animal", "discover", "soft", "between", "and", "a", "pressed", "small", "spot", "tracks", "mud"],
      },
      {
        target: "Walking through the quiet, peaceful woods feels completely different from our noisy neighborhood back home, and I love every single new discovery we make together.",
        jumbled: ["make", "neighborhood", "love", "and", "Walking", "new", "different", "completely", "we", "the", "home,", "our", "together.", "single", "from", "feels", "I", "discovery", "quiet,", "peaceful", "back", "through", "noisy", "woods", "every"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something interesting you discovered outside.",
    mySentenceExample: "I discovered a colorful butterfly in our garden.",
  },
  {
    number: 5,
    title: "Building a Campfire",
    image: null,
    imageNote: "Dad showing Owen and Lily how to carefully stack small sticks in a teaspoon-shaped pile, matches nearby, both children watching closely.",
    story:
      "As evening approaches, Dad teaches us how to build a safe campfire before dinner. “Always stack the smallest sticks first, like a little teepee, Owen,” he explains, demonstrating carefully. He reminds us that fire safety matters more than anything else, and we must never touch matches without an adult present. Once the fire crackles happily, we roast hot dogs on long metal sticks for dinner. Later, we carefully roast marshmallows too, watching them turn golden brown and gooey. Sitting around the warm, glowing fire feels magical, completely different from anything I have experienced before at home.",
    questions: [
      { text: "How does Dad say to stack the sticks?", answer: "Like a little teepee, smallest first." },
      { text: "What does Dad say matters most?", answer: "Fire safety." },
      { text: "What do they roast for dinner?", answer: "Hot dogs." },
    ],
    trueFalse: [
      { text: "Dad says to stack sticks like a teepee.", answer: true },
      { text: "Dad says fire safety does not matter much.", answer: false },
      { text: "They roast hot dogs for dinner.", answer: true },
    ],
    buildSentence: [
      {
        target: "Dad teaches us how to build a safe campfire before dinner.",
        jumbled: ["how", "campfire", "dinner.", "teaches", "Dad", "to", "safe", "us", "before", "build", "a"],
      },
      {
        target: "“Always stack the smallest sticks first, like a little teepee, Owen,” he explains, demonstrating carefully.",
        jumbled: ["demonstrating", "carefully.", "little", "sticks", "Owen,”", "stack", "“Always", "like", "first,", "the", "smallest", "teepee,", "a", "he", "explains,"],
      },
      {
        target: "He reminds us that fire safety matters more than anything else, and we must never touch matches without an adult present.",
        jumbled: ["matches", "present.", "touch", "else,", "adult", "anything", "never", "must", "matters", "without", "safety", "an", "that", "we", "fire", "more", "and", "than", "us", "He", "reminds"],
      },
      {
        target: "We roast hot dogs on long metal sticks for dinner.",
        jumbled: ["sticks", "metal", "dogs", "for", "We", "long", "hot", "roast", "dinner.", "on"],
      },
      {
        target: "Sitting around the warm, glowing fire feels magical, completely different from anything I have experienced before at home.",
        jumbled: ["before", "I", "around", "fire", "anything", "have", "Sitting", "the", "warm,", "feels", "magical,", "at", "glowing", "home.", "different", "from", "completely", "experienced"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you learned how to do safely.",
    mySentenceExample: "I learned how to safely cross the street with an adult.",
  },
  {
    number: 6,
    title: "Campfire Stories",
    image: null,
    imageNote: "Dad gesturing dramatically while telling a story around the campfire, Owen and Lily leaning in with wide, captivated eyes, the fire glowing warmly.",
    story:
      "After dinner, Dad suggests we tell stories around the crackling campfire, just like he did when he was young. He begins with a funny tale about getting lost searching for berries as a boy, making both Lily and me laugh loudly. Then Lily tells a spooky story about a friendly forest ghost, using a mysterious, wobbly voice that gives me happy chills. “Your turn, Owen,” Dad says, grinning. When it's my turn, I make up a silly adventure about a talking raccoon who steals campers' marshmallows. We laugh together late into the evening, and I realize campfire stories might be my favorite part of camping so far.",
    questions: [
      { text: "What does Dad's story involve?", answer: "Getting lost searching for berries as a boy." },
      { text: "What kind of story does Lily tell?", answer: "A spooky story about a friendly forest ghost." },
      { text: "What does Owen's story involve?", answer: "A talking raccoon who steals campers' marshmallows." },
    ],
    trueFalse: [
      { text: "Dad tells a funny story about getting lost.", answer: true },
      { text: "Lily refuses to tell any story.", answer: false },
      { text: "Owen's story is about a talking raccoon.", answer: true },
    ],
    buildSentence: [
      {
        target: "Dad suggests we tell stories around the crackling campfire, just like he did when he was young.",
        jumbled: ["when", "was", "he", "the", "campfire,", "around", "Dad", "he", "stories", "tell", "just", "we", "like", "crackling", "did", "young.", "suggests"],
      },
      {
        target: "He begins with a funny tale about getting lost searching for berries as a boy, making both Lily and me laugh loudly.",
        jumbled: ["lost", "He", "a", "with", "funny", "tale", "as", "both", "searching", "making", "berries", "begins", "a", "Lily", "and", "loudly.", "laugh", "about", "for", "boy,", "getting", "me"],
      },
      {
        target: "Then Lily tells a spooky story about a friendly forest ghost, using a mysterious, wobbly voice that gives me happy chills.",
        jumbled: ["that", "spooky", "Then", "a", "a", "chills.", "wobbly", "ghost,", "happy", "mysterious,", "voice", "a", "using", "about", "me", "tells", "forest", "gives", "Lily", "friendly", "story"],
      },
      {
        target: "“Your turn, Owen,” Dad says, grinning.",
        jumbled: ["grinning.", "Dad", "Owen,”", "turn,", "“Your", "says,"],
      },
      {
        target: "We laugh together late into the evening, and I realize campfire stories might be my favorite part of camping so far.",
        jumbled: ["into", "I", "part", "my", "stories", "evening,", "and", "realize", "together", "of", "favorite", "laugh", "far.", "campfire", "so", "the", "We", "camping", "might", "be", "late"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a story someone told you.",
    mySentenceExample: "My grandfather told me a funny story about his childhood.",
  },
  {
    number: 7,
    title: "Strange Noises at Night",
    image: null,
    imageNote: "Owen sitting up wide-eyed in his sleeping bag inside the dark tent, listening nervously to rustling sounds outside, Lily sleeping soundly nearby.",
    story:
      "Later that night, tucked inside our sleeping bags, I suddenly hear a strange rustling noise just outside the tent. My whole body freezes, and my heart starts pounding loudly in my chest. “Did you hear that?” I whisper nervously to Lily, but she is already fast asleep, breathing peacefully. The rustling continues, followed by an odd hooting sound somewhere in the darkness. “Stay calm, Owen,” I tell myself, and I pull my sleeping bag tightly around myself, feeling much braver during the daytime than I do right now, alone with my racing imagination in the pitch-black tent.",
    questions: [
      { text: "What does Owen hear outside the tent?", answer: "A strange rustling noise and a hooting sound." },
      { text: "How does Owen's body react?", answer: "He freezes and his heart pounds." },
      { text: "What is Lily doing while Owen is scared?", answer: "Sleeping peacefully." },
    ],
    trueFalse: [
      { text: "Owen hears a strange rustling noise.", answer: true },
      { text: "Owen's heart feels completely calm.", answer: false },
      { text: "Lily is fast asleep while Owen is scared.", answer: true },
    ],
    buildSentence: [
      {
        target: "Later that night, tucked inside our sleeping bags, I suddenly hear a strange rustling noise just outside the tent.",
        jumbled: ["inside", "hear", "tucked", "that", "the", "night,", "just", "I", "tent.", "suddenly", "noise", "a", "bags,", "strange", "outside", "Later", "sleeping", "our", "rustling"],
      },
      {
        target: "My whole body freezes, and my heart starts pounding loudly in my chest.",
        jumbled: ["freezes,", "starts", "pounding", "chest.", "my", "my", "body", "whole", "My", "heart", "loudly", "and", "in"],
      },
      {
        target: "“Did you hear that?” I whisper nervously to Lily, but she is already fast asleep, breathing peacefully.",
        jumbled: ["to", "fast", "hear", "is", "nervously", "already", "breathing", "Lily,", "asleep,", "you", "I", "that?”", "“Did", "but", "whisper", "she", "peacefully."],
      },
      {
        target: "The rustling continues, followed by an odd hooting sound somewhere in the darkness.",
        jumbled: ["followed", "odd", "by", "darkness.", "an", "continues,", "rustling", "sound", "somewhere", "in", "The", "hooting", "the"],
      },
      {
        target: "“Stay calm, Owen,” I tell myself, and I pull my sleeping bag tightly around myself, feeling much braver during the daytime than I do right now, alone with my racing imagination in the pitch-black tent.",
        jumbled: ["tent.", "braver", "and", "the", "sleeping", "I", "in", "I", "racing", "myself,", "with", "much", "my", "“Stay", "tightly", "tell", "the", "pull", "pitch-black", "during", "around", "feeling", "right", "now,", "my", "alone", "imagination", "myself,", "I", "Owen,”", "do", "calm,", "than", "bag", "daytime"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you heard a strange noise.",
    mySentenceExample: "I heard a strange noise outside my window last night.",
  },
  {
    number: 8,
    title: "Dad's Comfort",
    image: null,
    imageNote: "Dad sitting beside Owen inside the tent with a flashlight, explaining gently while pointing toward the tent's mesh window, Owen looking reassured.",
    story:
      "Unable to sleep, I quietly unzip my sleeping bag and crawl over to Dad's side of the tent. “I heard scary noises outside,” I whisper, feeling a little embarrassed about waking him. Dad doesn't laugh at all; instead, he listens carefully and smiles reassuringly. “That's probably just an owl and some wind moving through the leaves, Owen,” he explains gently, shining his flashlight briefly outside to show me nothing dangerous is there. He lets me stay close beside him for the rest of the night. Feeling safe next to Dad, my racing heart slowly calms down completely.",
    questions: [
      { text: "What does Owen tell Dad?", answer: "That he heard scary noises outside." },
      { text: "What does Dad say the noise probably was?", answer: "An owl and wind moving through the leaves." },
      { text: "How does Owen feel after talking to Dad?", answer: "Safe -- his racing heart calms down." },
    ],
    trueFalse: [
      { text: "Owen tells Dad about the scary noises.", answer: true },
      { text: "Dad laughs at Owen and sends him away.", answer: false },
      { text: "Owen feels safe after talking to Dad.", answer: true },
    ],
    buildSentence: [
      {
        target: "Unable to sleep, I quietly unzip my sleeping bag and crawl over to Dad's side of the tent.",
        jumbled: ["quietly", "sleeping", "crawl", "bag", "side", "my", "and", "of", "tent.", "over", "to", "sleep,", "Dad's", "unzip", "I", "to", "the", "Unable"],
      },
      {
        target: "“I heard scary noises outside,” I whisper, feeling a little embarrassed about waking him.",
        jumbled: ["noises", "feeling", "him.", "waking", "a", "embarrassed", "“I", "I", "outside,”", "about", "whisper,", "little", "scary", "heard"],
      },
      {
        target: "Dad doesn't laugh at all; instead, he listens carefully and smiles reassuringly.",
        jumbled: ["instead,", "all;", "reassuringly.", "at", "listens", "smiles", "laugh", "he", "doesn't", "carefully", "Dad", "and"],
      },
      {
        target: "“That's probably just an owl and some wind moving through the leaves, Owen,” he explains gently, shining his flashlight briefly outside to show me nothing dangerous is there.",
        jumbled: ["he", "the", "me", "flashlight", "Owen,”", "shining", "owl", "“That's", "explains", "through", "moving", "and", "gently,", "there.", "wind", "his", "dangerous", "nothing", "leaves,", "briefly", "show", "some", "outside", "is", "an", "probably", "to", "just"],
      },
      {
        target: "He lets me stay close beside him for the rest of the night.",
        jumbled: ["beside", "the", "the", "him", "He", "stay", "for", "close", "lets", "me", "of", "rest", "night."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time someone helped you feel less scared.",
    mySentenceExample: "My mom helped me feel less scared during a thunderstorm.",
  },
  {
    number: 9,
    title: "Morning Hike and Surprise",
    image: null,
    imageNote: "Owen, Dad, and Lily standing at the edge of a clearing at sunrise, looking in amazement at two deer grazing peacefully near a sparkling lake.",
    story:
      "Early the next morning, refreshed after finally falling back asleep, we head out for a sunrise hike together. The forest looks completely different in the soft morning light, calm and golden. Suddenly, Lily grabs my arm. “Look, Owen,” Dad whispers, pointing silently toward a clearing ahead. Two deer stand peacefully near a sparkling lake, grazing quietly in the morning mist. We freeze completely still, watching in amazed silence until the deer slowly wander away into the trees. “That was incredible,” I whisper, and Dad nods, smiling proudly at witnessing something so beautiful together as a family.",
    questions: [
      { text: "What time of day is the hike?", answer: "Sunrise, in the morning." },
      { text: "What does Lily point toward?", answer: "A clearing ahead." },
      { text: "What do they see near the lake?", answer: "Two deer grazing." },
    ],
    trueFalse: [
      { text: "The hike happens early in the morning.", answer: true },
      { text: "They see nothing interesting on the hike.", answer: false },
      { text: "They see two deer near the lake.", answer: true },
    ],
    buildSentence: [
      {
        target: "Early the next morning, refreshed after finally falling back asleep, we head out for a sunrise hike together.",
        jumbled: ["out", "morning,", "refreshed", "for", "Early", "a", "falling", "the", "head", "next", "together.", "sunrise", "asleep,", "back", "after", "hike", "we", "finally"],
      },
      {
        target: "The forest looks completely different in the soft morning light, calm and golden.",
        jumbled: ["calm", "forest", "morning", "in", "golden.", "soft", "looks", "different", "completely", "the", "The", "light,", "and"],
      },
      {
        target: "“Look, Owen,” Dad whispers, pointing silently toward a clearing ahead.",
        jumbled: ["ahead.", "“Look,", "clearing", "pointing", "a", "silently", "Owen,”", "whispers,", "Dad", "toward"],
      },
      {
        target: "Two deer stand peacefully near a sparkling lake, grazing quietly in the morning mist.",
        jumbled: ["Two", "sparkling", "near", "deer", "the", "peacefully", "grazing", "stand", "lake,", "quietly", "in", "a", "mist.", "morning"],
      },
      {
        target: "“That was incredible,” I whisper, and Dad nods, smiling proudly at witnessing something so beautiful together as a family.",
        jumbled: ["witnessing", "“That", "incredible,”", "a", "family.", "I", "so", "something", "Dad", "at", "proudly", "nods,", "beautiful", "and", "smiling", "together", "whisper,", "as", "was"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an animal you saw in nature.",
    mySentenceExample: "I saw a family of ducks swimming in the park pond.",
  },
  {
    number: 10,
    title: "Packing Up, Already Missing It",
    image: null,
    imageNote: "Owen helping Dad fold the tent while Lily loads the car, all three looking back wistfully at the campsite one last time before leaving.",
    story:
      "By afternoon, it's time to pack everything back into the car and head home. Folding the tent feels much easier now that we know how it works, and we finish quickly as a team. As Dad starts the engine, I look back one last time at our campsite, already feeling a little sad to leave. “Can we come back next month?” I ask hopefully. “We definitely will, Owen,” Dad says, laughing. Thinking about the campfire stories, the deer, and even the scary noises that turned out fine, I realize this camping trip became one unforgettable adventure I will never forget.",
    questions: [
      { text: "What do they do by afternoon?", answer: "Pack everything back into the car." },
      { text: "How does folding the tent feel this time?", answer: "Much easier." },
      { text: "What does Owen ask Dad?", answer: "Can we come back next month?" },
    ],
    trueFalse: [
      { text: "They pack everything to head home.", answer: true },
      { text: "Folding the tent feels harder than before.", answer: false },
      { text: "Owen asks if they can come back next month.", answer: true },
    ],
    buildSentence: [
      {
        target: "By afternoon, it's time to pack everything back into the car and head home.",
        jumbled: ["and", "back", "time", "the", "head", "pack", "everything", "By", "afternoon,", "to", "into", "it's", "car", "home."],
      },
      {
        target: "Folding the tent feels much easier now that we know how it works, and we finish quickly as a team.",
        jumbled: ["now", "we", "know", "tent", "it", "Folding", "quickly", "as", "works,", "how", "much", "team.", "the", "we", "that", "a", "and", "finish", "easier", "feels"],
      },
      {
        target: "I look back one last time at our campsite, already feeling a little sad to leave.",
        jumbled: ["back", "at", "to", "I", "leave.", "look", "a", "time", "campsite,", "already", "one", "sad", "feeling", "our", "last", "little"],
      },
      {
        target: "“Can we come back next month?” I ask hopefully.",
        jumbled: ["hopefully.", "“Can", "month?”", "I", "next", "ask", "come", "we", "back"],
      },
      {
        target: "Thinking about the campfire stories, the deer, and even the scary noises that turned out fine, I realize this camping trip became one unforgettable adventure I will never forget.",
        jumbled: ["scary", "and", "even", "about", "never", "this", "camping", "adventure", "deer,", "realize", "noises", "trip", "the", "will", "campfire", "that", "stories,", "one", "I", "the", "became", "turned", "fine,", "out", "unforgettable", "forget.", "the", "Thinking", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a trip you never want to forget.",
    mySentenceExample: "I never want to forget our family trip to the mountains.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
