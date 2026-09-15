// A2 Adults digital storybook, Book 10: "Feeling Better Again"
// Static content -- no Supabase, mirrors the pattern in storybookData9.js.
// Like Books 7-9, this book's narrator, Riley, is an adult and stays
// gender-neutral throughout -- no gendered pronoun is ever used for Riley
// in the story, only their name. Grace (the receptionist) and Dr. Santos
// are explicitly "she" in the source; the pharmacist is explicitly "he";
// the nurse is never gendered, so stays neutral.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook10/cover.jpg";

export const STORYBOOK_TITLE = "Feeling Better Again";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Riley sitting calmly in a bright, clean clinic waiting room holding a small form, a plant and a health poster visible on the wall nearby.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Riley", role: "A patient with a sore throat", look: "Simple comfortable clothing, a little tired at first but calm, gender-neutral by design -- the story never uses a pronoun for Riley, only their name." },
  { name: "Grace", role: "Works the front desk of the clinic", look: "Neat cardigan or blouse, warm and welcoming smile -- explicitly \"she\" in the source text." },
  { name: "Dr. Santos", role: "The clinic doctor", look: "White coat, stethoscope, gentle and reassuring manner -- explicitly \"she\" in the source text." },
  { name: "The nurse", role: "Calls patients in from the waiting room", look: "Simple scrubs, calm and efficient -- the source text never assigns a pronoun to this character, so keep neutral." },
  { name: "The pharmacist", role: "Works the clinic's small pharmacy counter", look: "White coat, friendly and reassuring -- explicitly \"he\" in the source text." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Visit to the Clinic",
    image: null,
    imageNote: "Riley walking into a small neighborhood clinic looking a little unwell, Grace smiling from behind the front desk, quiet street visible through the door.",
    story:
      "This morning, I wake up with a sore throat and a heavy head. At first, I sit on my bed and hope I will feel better soon. “Maybe it will pass, Riley,” I tell myself, but I do not feel any better. I drink some water, but my throat still hurts, and my body feels weak. Then I decide to visit the small clinic near my apartment. I put on a clean shirt, take my bag, and walk slowly down the street. When I arrive at the clinic, I see a woman sitting behind a desk near the door. She smiles and says, “Good morning, how can I help you?” I tell her, “I have a sore throat, and I do not feel well today.” She gives me a form and asks me to sit down and wait for the doctor. As I sit in the quiet room, I still feel sick, but I also feel calm because I know help is coming.",
    questions: [
      { text: "How does Riley feel in the morning?", answer: "Sick, with a sore throat and a heavy head." },
      { text: "Where does Riley go?", answer: "To the small clinic near the apartment." },
      { text: "What does the woman at the desk give to Riley?", answer: "A form." },
    ],
    trueFalse: [
      { text: "Riley wakes up with a sore throat.", answer: true },
      { text: "Riley goes to a shop near the apartment.", answer: false },
      { text: "Riley feels calm at the end because help is coming.", answer: true },
      { text: "Grace gives Riley a form.", answer: true },
      { text: "Riley feels perfectly fine in the morning.", answer: false },
    ],
    buildSentence: [
      {
        target: "At first, I sit on my bed and hope I will feel better soon.",
        jumbled: ["my", "sit", "At", "feel", "first,", "I", "and", "hope", "soon.", "on", "will", "bed", "I", "better"],
      },
      {
        target: "“Maybe it will pass, Riley,” I tell myself, but I do not feel any better.",
        jumbled: ["do", "myself,", "will", "it", "I", "not", "tell", "I", "feel", "but", "any", "pass,", "“Maybe", "better.", "Riley,”"],
      },
      {
        target: "I put on a clean shirt, take my bag, and walk slowly down the street.",
        jumbled: ["street.", "slowly", "I", "walk", "on", "and", "shirt,", "the", "clean", "a", "my", "bag,", "put", "take", "down"],
      },
      {
        target: "She smiles and says, “Good morning, how can I help you?” I tell her, “I have a sore throat, and I do not feel well today.”",
        jumbled: ["morning,", "throat,", "She", "I", "can", "I", "you?”", "do", "have", "her,", "well", "I", "“Good", "not", "how", "and", "and", "tell", "help", "“I", "smiles", "feel", "says,", "a", "sore", "today.”"],
      },
      {
        target: "I still feel sick, but I also feel calm because I know help is coming.",
        jumbled: ["because", "I", "I", "I", "know", "also", "calm", "help", "sick,", "coming.", "is", "feel", "feel", "still", "but"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about going to a clinic or doctor.",
    mySentenceExample: "I go to the clinic when I do not feel well.",
  },
  {
    number: 2,
    title: "Talking to the Receptionist",
    image: null,
    imageNote: "Riley writing on a small white form at the front desk, Grace typing details into a computer and smiling warmly.",
    story:
      "At the desk, Grace, the kind receptionist, gives me a small white form to fill in. The form asks for my name, my age, and my phone number. I write my details slowly and carefully with a black pen. Then she asks, “Is this your first visit to our clinic?” I say, “Yes, this is my first time here today.” She types my name into her computer and makes a new file for me. She asks me what problem brings me to the clinic today. I tell her, “I have a sore throat and a headache since this morning.” She smiles and says, “Please sit down, Riley, and the doctor will call you soon.” As I give back the form, I feel calm because Grace is helpful and kind.",
    questions: [
      { text: "What does Grace give Riley to fill in?", answer: "A small white form." },
      { text: "What three things does the form ask for?", answer: "Name, age, and phone number." },
      { text: "What does Grace say Riley should do?", answer: "Sit down and wait for the doctor." },
    ],
    trueFalse: [
      { text: "The form asks for Riley's name, age, and phone number.", answer: true },
      { text: "This is Riley's tenth visit to the clinic.", answer: false },
      { text: "Riley feels calm because Grace is kind.", answer: true },
      { text: "Riley writes with a black pen.", answer: true },
      { text: "Grace refuses to help Riley.", answer: false },
    ],
    buildSentence: [
      {
        target: "At the desk, Grace, the kind receptionist, gives me a small white form to fill in.",
        jumbled: ["in.", "the", "desk,", "form", "fill", "white", "small", "to", "Grace,", "a", "gives", "the", "me", "At", "kind", "receptionist,"],
      },
      {
        target: "The form asks for my name, my age, and my phone number.",
        jumbled: ["my", "and", "form", "phone", "age,", "asks", "my", "The", "name,", "for", "number.", "my"],
      },
      {
        target: "Then she asks, “Is this your first visit to our clinic?” I say, “Yes, this is my first time here today.”",
        jumbled: ["this", "say,", "I", "this", "first", "today.”", "first", "she", "our", "my", "“Yes,", "clinic?”", "time", "your", "to", "“Is", "visit", "Then", "here", "is", "asks,"],
      },
      {
        target: "I tell her, “I have a sore throat and a headache since this morning.”",
        jumbled: ["morning.”", "“I", "sore", "this", "have", "her,", "headache", "and", "a", "tell", "since", "I", "throat", "a"],
      },
      {
        target: "She smiles and says, “Please sit down, Riley, and the doctor will call you soon.”",
        jumbled: ["the", "She", "call", "Riley,", "doctor", "and", "“Please", "soon.”", "will", "sit", "smiles", "and", "says,", "you", "down,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about filling in a form.",
    mySentenceExample: "I write my name and age on the form.",
  },
  {
    number: 3,
    title: "Waiting for the Doctor",
    image: null,
    imageNote: "Riley sitting quietly in a clean waiting room with soft chairs, a clock, health posters, and a big plant, a nurse calling another patient in the background.",
    story:
      "After I give back the form, I sit down on a chair in the waiting room. The room is clean and quiet, with soft chairs and a small table. A few other people wait too, and some of them look a little tired. On the wall, there is a clock, some health posters, and a big plant. I hold my bag on my lap and take slow, deep breaths. “Stay calm, Riley,” I whisper to myself, and my shoulders relax a little. My throat still hurts, but the calm room helps me feel less worried. I read a health poster about washing hands and drinking clean water. A nurse comes out and calls another patient into a room. I wait for about ten minutes and try to stay calm and patient. As I wait quietly, I feel okay because I know the doctor will help me soon.",
    questions: [
      { text: "Where does Riley sit after giving back the form?", answer: "In the waiting room." },
      { text: "What is on the wall of the waiting room?", answer: "A clock, health posters, and a big plant." },
      { text: "What does the health poster talk about?", answer: "Washing hands and drinking clean water." },
    ],
    trueFalse: [
      { text: "The waiting room is clean and quiet.", answer: true },
      { text: "Riley waits for many hours.", answer: false },
      { text: "Riley feels okay because the doctor will help soon.", answer: true },
      { text: "A nurse calls another patient.", answer: true },
      { text: "Riley refuses to wait and leaves.", answer: false },
    ],
    buildSentence: [
      {
        target: "I sit down on a chair in the waiting room.",
        jumbled: ["sit", "a", "on", "the", "chair", "in", "waiting", "I", "down", "room."],
      },
      {
        target: "A few other people wait too, and some of them look a little tired.",
        jumbled: ["look", "few", "and", "A", "people", "them", "other", "too,", "some", "tired.", "wait", "a", "of", "little"],
      },
      {
        target: "“Stay calm, Riley,” I whisper to myself, and my shoulders relax a little.",
        jumbled: ["whisper", "myself,", "“Stay", "calm,", "Riley,”", "my", "little.", "shoulders", "I", "to", "a", "relax", "and"],
      },
      {
        target: "My throat still hurts, but the calm room helps me feel less worried.",
        jumbled: ["me", "calm", "the", "throat", "worried.", "hurts,", "but", "still", "helps", "feel", "room", "less", "My"],
      },
      {
        target: "I feel okay because I know the doctor will help me soon.",
        jumbled: ["feel", "okay", "I", "because", "I", "help", "will", "soon.", "doctor", "the", "know", "me"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting at a clinic.",
    mySentenceExample: "I wait quietly for my turn at the clinic.",
  },
  {
    number: 4,
    title: "Meeting the Doctor",
    image: null,
    imageNote: "Riley sitting down beside Dr. Santos's desk in a bright clean office, Dr. Santos smiling warmly and reading the form on her computer screen.",
    story:
      "Soon, the nurse opens a door and calls, “Riley, please come in, it is your turn.” I stand up, walk into the room, and see a kind doctor at her desk. She smiles and says, “Hello, my name is Dr. Santos, please sit down.” I sit on the chair next to her desk and put my bag on the floor. She looks at my form on her computer and reads my details. Then she asks, “How are you feeling today, and what is the problem?” Her voice is soft and calm, so I do not feel nervous anymore. I feel that she really wants to listen and help me get better. The room is bright and clean, and everything feels safe and quiet. As I sit with Dr. Santos, I feel calm because she is friendly and kind.",
    questions: [
      { text: "Who calls Riley into the room?", answer: "The nurse." },
      { text: "What is the doctor's name?", answer: "Dr. Santos." },
      { text: "What does the doctor ask Riley?", answer: "How are you feeling today, and what is the problem?" },
    ],
    trueFalse: [
      { text: "Dr. Santos is a kind doctor.", answer: true },
      { text: "Riley feels very nervous with the doctor.", answer: false },
      { text: "Riley feels calm because the doctor is friendly.", answer: true },
      { text: "The nurse calls Riley into the room.", answer: true },
      { text: "Dr. Santos ignores Riley's form.", answer: false },
    ],
    buildSentence: [
      {
        target: "Soon, the nurse opens a door and calls, “Riley, please come in, it is your turn.”",
        jumbled: ["“Riley,", "opens", "turn.”", "it", "calls,", "in,", "and", "door", "come", "please", "the", "is", "nurse", "Soon,", "a", "your"],
      },
      {
        target: "I sit on the chair next to her desk and put my bag on the floor.",
        jumbled: ["my", "next", "to", "chair", "I", "on", "the", "the", "on", "bag", "her", "sit", "and", "floor.", "desk", "put"],
      },
      {
        target: "Then she asks, “How are you feeling today, and what is the problem?”",
        jumbled: ["you", "today,", "are", "what", "is", "problem?”", "Then", "“How", "feeling", "and", "the", "she", "asks,"],
      },
      {
        target: "Her voice is soft and calm, so I do not feel nervous anymore.",
        jumbled: ["I", "not", "is", "and", "voice", "soft", "anymore.", "nervous", "so", "feel", "Her", "do", "calm,"],
      },
      {
        target: "I feel calm because she is friendly and kind.",
        jumbled: ["friendly", "and", "is", "kind.", "I", "she", "feel", "calm", "because"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about meeting a doctor.",
    mySentenceExample: "The doctor is kind and helps me feel calm.",
  },
  {
    number: 5,
    title: "Describing My Symptoms",
    image: null,
    imageNote: "Riley explaining symptoms to Dr. Santos, who listens carefully and writes notes on her computer, calm and attentive.",
    story:
      "Dr. Santos asks me to tell her about my problem step by step. I say, “Since this morning, I have a sore throat and a headache.” She asks, “Do you have a fever or a cough too, Riley?” I tell her, “Yes, I feel a little hot, and I cough sometimes.” She asks when the problem started and how I feel now. I explain that I woke up feeling weak and tired today. She listens carefully and writes some notes on her computer. Then she asks if I sleep well and drink enough water each day. I answer all her questions slowly and honestly. As I describe my symptoms, I feel relieved because the doctor understands my problem clearly.",
    questions: [
      { text: "What symptoms does Riley have?", answer: "A sore throat, a headache, a slight fever, and a cough." },
      { text: "What does the doctor ask about besides the sore throat?", answer: "A fever or a cough." },
      { text: "What does the doctor do while Riley speaks?", answer: "Writes some notes on her computer." },
    ],
    trueFalse: [
      { text: "Riley has a sore throat and a headache.", answer: true },
      { text: "The doctor does not listen to Riley.", answer: false },
      { text: "Riley feels relieved because the doctor understands.", answer: true },
      { text: "Riley has a fever and a cough.", answer: true },
      { text: "The doctor never writes any notes.", answer: false },
    ],
    buildSentence: [
      {
        target: "Dr. Santos asks me to tell her about my problem step by step.",
        jumbled: ["asks", "step.", "me", "problem", "Santos", "her", "my", "Dr.", "tell", "to", "by", "step", "about"],
      },
      {
        target: "I say, “Since this morning, I have a sore throat and a headache.” She asks, “Do you have a fever or a cough too, Riley?” I tell her, “Yes, I feel a little hot, and I cough sometimes.” She asks when the problem started and how I feel now.",
        jumbled: ["say,", "I", "She", "and", "asks", "have", "I", "and", "“Yes,", "too,", "asks,", "a", "feel", "this", "cough", "I", "a", "you", "tell", "morning,", "hot,", "I", "“Do", "have", "problem", "now.", "the", "or", "and", "throat", "when", "I", "a", "how", "She", "Riley?”", "feel", "a", "her,", "sore", "sometimes.”", "little", "I", "a", "fever", "cough", "headache.”", "started", "“Since"],
      },
      {
        target: "I explain that I woke up feeling weak and tired today.",
        jumbled: ["weak", "and", "that", "explain", "I", "feeling", "I", "today.", "tired", "up", "woke"],
      },
      {
        target: "Then she asks if I sleep well and drink enough water each day.",
        jumbled: ["well", "drink", "sleep", "I", "if", "Then", "each", "and", "asks", "day.", "she", "enough", "water"],
      },
      {
        target: "I feel relieved because the doctor understands my problem clearly.",
        jumbled: ["doctor", "understands", "my", "clearly.", "the", "feel", "I", "problem", "because", "relieved"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about telling a doctor how you feel.",
    mySentenceExample: "I tell the doctor about my sore throat.",
  },
  {
    number: 6,
    title: "The Simple Check-Up",
    image: null,
    imageNote: "Dr. Santos checking Riley's throat with a small light, a thermometer and stethoscope visible on the desk, Riley's mouth open saying 'ahhh'.",
    story:
      "Next, Dr. Santos says, “Let me check you now, Riley, please do not worry.” She puts a small thermometer under my arm to check my temperature. Then she looks inside my throat with a little light and a stick. “Say 'ahhh' for me, please,” she says, and I open my mouth wide. She listens to my chest and back with a stethoscope and asks me to breathe. Her hands are gentle, and she tells me each step before she does it. She checks my temperature and says, “You have a small fever, but it is not serious.” I feel calm because she explains everything in a clear and kind way. She writes some notes and gives me a soft, friendly smile. As the check-up ends, I feel relieved because my problem is small and easy to treat.",
    questions: [
      { text: "What does the doctor put under Riley's arm?", answer: "A thermometer." },
      { text: "What does the doctor ask Riley to say?", answer: "\"Ahhh.\"" },
      { text: "What does the doctor say about the fever?", answer: "That it is small and not serious." },
    ],
    trueFalse: [
      { text: "The doctor checks Riley's throat with a light.", answer: true },
      { text: "The doctor says the problem is very serious.", answer: false },
      { text: "Riley feels relieved at the end of the check-up.", answer: true },
      { text: "Dr. Santos listens with a stethoscope.", answer: true },
      { text: "Dr. Santos says nothing about the fever.", answer: false },
    ],
    buildSentence: [
      {
        target: "Next, Dr. Santos says, “Let me check you now, Riley, please do not worry.”",
        jumbled: ["you", "Santos", "says,", "please", "“Let", "me", "do", "not", "now,", "Riley,", "Dr.", "Next,", "check", "worry.”"],
      },
      {
        target: "Then she looks inside my throat with a little light and a stick.",
        jumbled: ["little", "a", "looks", "my", "light", "a", "and", "inside", "she", "with", "Then", "throat", "stick."],
      },
      {
        target: "She listens to my chest and back with a stethoscope and asks me to breathe.",
        jumbled: ["stethoscope", "my", "me", "She", "and", "a", "to", "listens", "with", "breathe.", "back", "asks", "to", "chest", "and"],
      },
      {
        target: "She checks my temperature and says, “You have a small fever, but it is not serious.”",
        jumbled: ["have", "small", "my", "checks", "and", "says,", "not", "a", "“You", "it", "fever,", "serious.”", "temperature", "is", "but", "She"],
      },
      {
        target: "I feel relieved because my problem is small and easy to treat.",
        jumbled: ["I", "to", "and", "problem", "is", "treat.", "my", "easy", "because", "relieved", "feel", "small"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a doctor's check-up.",
    mySentenceExample: "The doctor checks my throat and my temperature.",
  },
  {
    number: 7,
    title: "Getting My Medicine",
    image: null,
    imageNote: "Dr. Santos handing Riley a small prescription paper across the desk, explaining instructions with a calm gesture, Riley listening carefully.",
    story:
      "After the check-up, Dr. Santos tells me what I need to do to get better. She says, “You have a small throat infection, Riley, so I will give you some medicine.” She writes a prescription on a small piece of paper for me. “Take this medicine two times a day, after your meals,” she explains. She also tells me to drink a lot of warm water and rest at home. “Do not drink cold drinks, and try to sleep well tonight,” she adds. I listen carefully and repeat the instructions so I remember them. She asks, “Do you have any questions for me before you go?” I say, “No, thank you, Dr. Santos, you explain everything clearly.” As I take the prescription, I feel hopeful because now I know how to get better.",
    questions: [
      { text: "What does the doctor say Riley has?", answer: "A small throat infection." },
      { text: "How many times a day should Riley take the medicine?", answer: "Two times a day, after meals." },
      { text: "What does the doctor tell Riley to drink?", answer: "A lot of warm water." },
    ],
    trueFalse: [
      { text: "The doctor gives Riley a prescription for medicine.", answer: true },
      { text: "The doctor says to drink cold drinks.", answer: false },
      { text: "Riley feels hopeful because they know how to get better.", answer: true },
      { text: "Dr. Santos tells Riley to rest at home.", answer: true },
      { text: "Riley has many questions for the doctor.", answer: false },
    ],
    buildSentence: [
      {
        target: "Dr. Santos tells me what I need to do to get better.",
        jumbled: ["what", "get", "need", "me", "do", "to", "Santos", "to", "I", "Dr.", "tells", "better."],
      },
      {
        target: "She says, “You have a small throat infection, Riley, so I will give you some medicine.”",
        jumbled: ["will", "you", "throat", "medicine.”", "give", "small", "some", "have", "says,", "I", "a", "infection,", "“You", "Riley,", "She", "so"],
      },
      {
        target: "She also tells me to drink a lot of warm water and rest at home.",
        jumbled: ["a", "also", "and", "rest", "warm", "water", "tells", "lot", "at", "drink", "She", "me", "of", "to", "home."],
      },
      {
        target: "“Do not drink cold drinks, and try to sleep well tonight,” she adds.",
        jumbled: ["drink", "well", "adds.", "cold", "she", "“Do", "drinks,", "try", "and", "tonight,”", "sleep", "to", "not"],
      },
      {
        target: "She asks, “Do you have any questions for me before you go?” I say, “No, thank you, Dr. Santos, you explain everything clearly.”",
        jumbled: ["everything", "I", "go?”", "She", "Dr.", "any", "“Do", "you", "clearly.”", "have", "before", "you", "thank", "you", "Santos,", "for", "me", "asks,", "questions", "explain", "“No,", "you,", "say,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about medicine from a doctor.",
    mySentenceExample: "I take my medicine two times a day.",
  },
  {
    number: 8,
    title: "At the Pharmacy",
    image: null,
    imageNote: "Riley handing a prescription to a friendly pharmacist in a white coat behind the pharmacy counter, a small paper bag of medicine and throat lozenges nearby.",
    story:
      "I leave the doctor's room and walk to the small pharmacy in the clinic. Behind the counter, a friendly pharmacist in a white coat smiles at me. I give him the prescription from Dr. Santos and wait for a minute. He reads the paper and finds my medicine on a shelf behind him. He puts the medicine in a small paper bag with a white label. “Take one tablet two times a day, after your meals,” he tells me. He also gives me some throat lozenges to help with the pain. I pay for the medicine and put the bag safely in my hand. He says, “Get well soon, Riley, and drink lots of warm water.” As I leave the pharmacy, I feel ready because now I have everything I need to get better.",
    questions: [
      { text: "Who is behind the pharmacy counter?", answer: "A friendly pharmacist." },
      { text: "What does the pharmacist put the medicine in?", answer: "A small paper bag with a white label." },
      { text: "What does the pharmacist give besides the tablets?", answer: "Throat lozenges." },
    ],
    trueFalse: [
      { text: "The pharmacist wears a white coat.", answer: true },
      { text: "Riley does not pay for the medicine.", answer: false },
      { text: "Riley feels ready to get better at the end.", answer: true },
      { text: "The pharmacist gives throat lozenges too.", answer: true },
      { text: "The pharmacist cannot find the medicine.", answer: false },
    ],
    buildSentence: [
      {
        target: "I leave the doctor's room and walk to the small pharmacy in the clinic.",
        jumbled: ["doctor's", "I", "clinic.", "leave", "to", "in", "walk", "the", "the", "the", "room", "and", "pharmacy", "small"],
      },
      {
        target: "I give him the prescription from Dr. Santos and wait for a minute.",
        jumbled: ["minute.", "him", "Dr.", "the", "wait", "a", "prescription", "give", "Santos", "I", "for", "and", "from"],
      },
      {
        target: "He puts the medicine in a small paper bag with a white label.",
        jumbled: ["paper", "a", "He", "bag", "medicine", "white", "a", "with", "label.", "puts", "small", "the", "in"],
      },
      {
        target: "I pay for the medicine and put the bag safely in my hand.",
        jumbled: ["the", "medicine", "and", "for", "bag", "the", "hand.", "pay", "I", "my", "safely", "put", "in"],
      },
      {
        target: "I feel ready because now I have everything I need to get better.",
        jumbled: ["I", "I", "get", "I", "to", "ready", "better.", "feel", "have", "need", "everything", "because", "now"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about getting medicine at a pharmacy.",
    mySentenceExample: "I buy my medicine at the pharmacy.",
  },
  {
    number: 9,
    title: "Resting at Home",
    image: null,
    imageNote: "Riley lying on a bed under a soft blanket in a quiet dim room, a cup of warm tea with honey on the nightstand, phone put away.",
    story:
      "When I get home, I take off my shoes and change into soft, warm clothes. I drink a big glass of warm water, just like the doctor tells me. Then I take my first tablet after I eat a small, simple lunch. I make a cup of warm tea with honey to help my sore throat. I lie down on my bed with a soft blanket and close my eyes. I turn off the bright lights and let my body rest in the quiet room. “Just rest now, Riley,” I tell myself, sinking into the pillow. I do not use my phone too much, so my eyes can rest too. In the afternoon, I sleep for a while and feel a little better after. My throat still hurts a bit, but the pain is not as strong now. As I rest at home, I feel calm because I am taking good care of myself.",
    questions: [
      { text: "What does Riley drink at home, like the doctor says?", answer: "A big glass of warm water." },
      { text: "What does Riley put in the warm tea?", answer: "Honey." },
      { text: "How does Riley feel after sleeping in the afternoon?", answer: "A little better." },
    ],
    trueFalse: [
      { text: "Riley takes the first tablet after eating lunch.", answer: true },
      { text: "Riley uses the phone all afternoon.", answer: false },
      { text: "Riley feels calm because they are taking care of themselves.", answer: true },
      { text: "Riley changes into soft, warm clothes.", answer: true },
      { text: "Riley's throat feels worse after resting.", answer: false },
    ],
    buildSentence: [
      {
        target: "I take off my shoes and change into soft, warm clothes.",
        jumbled: ["off", "take", "change", "warm", "into", "shoes", "my", "I", "soft,", "clothes.", "and"],
      },
      {
        target: "I make a cup of warm tea with honey to help my sore throat.",
        jumbled: ["I", "throat.", "cup", "my", "sore", "make", "of", "warm", "tea", "help", "to", "honey", "a", "with"],
      },
      {
        target: "I turn off the bright lights and let my body rest in the quiet room.",
        jumbled: ["my", "bright", "rest", "turn", "off", "quiet", "body", "lights", "I", "and", "the", "in", "the", "let", "room."],
      },
      {
        target: "I do not use my phone too much, so my eyes can rest too.",
        jumbled: ["my", "can", "not", "use", "too.", "so", "my", "I", "phone", "do", "too", "rest", "eyes", "much,"],
      },
      {
        target: "I feel calm because I am taking good care of myself.",
        jumbled: ["feel", "I", "taking", "because", "am", "good", "I", "myself.", "care", "calm", "of"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about resting when you are sick.",
    mySentenceExample: "I rest and drink warm water when I am sick.",
  },
  {
    number: 10,
    title: "Feeling Better Again",
    image: null,
    imageNote: "Riley standing by an open window with bright fresh light, smiling and full of energy, an empty medicine bottle and finished tea cup visible nearby showing recovery.",
    story:
      "After a few days of medicine and rest, I wake up and feel much better. My throat does not hurt anymore, and my head feels light and clear. I do not have a fever, and my body feels strong and full of energy. I remember the first morning, when I felt weak, hot, and worried. “Look how far you have come, Riley,” I think, smiling to myself. Now I am thankful for Dr. Santos, the kind nurse, and the friendly pharmacist. I finish all my medicine, exactly as the doctor tells me to. I drink water, eat healthy food, and sleep well every night. I understand now that going to the doctor early is a smart and good choice. Next time I feel sick, I will not be afraid to visit the clinic. As I feel healthy again, I feel happy and thankful because I got the help I needed.",
    questions: [
      { text: "How does Riley feel after a few days of medicine and rest?", answer: "Much better." },
      { text: "Who does Riley feel thankful for?", answer: "Dr. Santos, the nurse, and the pharmacist." },
      { text: "What did Riley learn about going to the doctor?", answer: "That going to the doctor early is a smart and good choice." },
    ],
    trueFalse: [
      { text: "Riley feels much better after a few days.", answer: true },
      { text: "Riley still has a fever and a sore throat.", answer: false },
      { text: "Riley feels happy and thankful at the end.", answer: true },
      { text: "Riley's throat does not hurt anymore.", answer: true },
      { text: "Riley forgets to finish the medicine.", answer: false },
    ],
    buildSentence: [
      {
        target: "I wake up and feel much better.",
        jumbled: ["wake", "and", "feel", "I", "up", "much", "better."],
      },
      {
        target: "I do not have a fever, and my body feels strong and full of energy.",
        jumbled: ["I", "feels", "energy.", "not", "my", "a", "and", "do", "fever,", "body", "strong", "have", "of", "and", "full"],
      },
      {
        target: "Now I am thankful for Dr. Santos, the kind nurse, and the friendly pharmacist.",
        jumbled: ["I", "the", "am", "friendly", "the", "for", "and", "kind", "pharmacist.", "thankful", "Santos,", "Now", "nurse,", "Dr."],
      },
      {
        target: "I finish all my medicine, exactly as the doctor tells me to.",
        jumbled: ["all", "I", "to.", "as", "the", "medicine,", "me", "exactly", "finish", "doctor", "my", "tells"],
      },
      {
        target: "I feel happy and thankful because I got the help I needed.",
        jumbled: ["the", "happy", "help", "and", "I", "got", "I", "needed.", "thankful", "feel", "because", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling better after being sick.",
    mySentenceExample: "I feel healthy and happy again now.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
