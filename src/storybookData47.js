// A1 Adults digital storybook, Book 47: "Learning to Use My New Phone"
// Static content -- no Supabase. Seventh book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook47/cover.jpg";

export const STORYBOOK_TITLE = "Learning to Use My New Phone";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Beatriz sitting at her kitchen table, looking curiously at a new smartphone box, an instruction pamphlet spread out beside her.";

export const CHARACTERS = [
  { name: "Beatriz", role: "The narrator, an adult", look: "Reading glasses on a chain, patient expression, unfamiliar with new technology at first." },
  { name: "Noah", role: "Beatriz's nephew", look: "Casual T-shirt, always holding his own phone, patient and helpful with technology." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Phone Arrives",
    image: null,
    imageNote: "Beatriz opening a phone box on her kitchen table, looking at the new smartphone inside with a curious but uncertain expression.",
    story:
      "My old phone finally stopped working last week, so I bought a new smartphone yesterday. The box sits on my kitchen table, and I open it slowly and carefully. Inside, I find the phone, a charging cable, and a small instruction pamphlet. My old phone was very simple, only for calling and sending short messages. This new phone looks much more complicated, with a large screen and many small icons. “Beatriz, you can learn this,” I tell myself, even though I feel a little nervous about learning something so new at my age. Still, I know many useful things are possible with a phone like this one.",
    questions: [
      { text: "Why does Beatriz buy a new phone?", answer: "Because her old phone stopped working." },
      { text: "What does Beatriz find inside the box?", answer: "The phone, a charging cable, and an instruction pamphlet." },
      { text: "How does Beatriz feel about learning something new?", answer: "A little nervous." },
    ],
    trueFalse: [
      { text: "Beatriz's old phone stopped working last week.", answer: true },
      { text: "The box contains a phone, cable, and pamphlet.", answer: true },
      { text: "Beatriz's old phone had a large complicated screen.", answer: false },
      { text: "Beatriz feels a little nervous about this.", answer: true },
      { text: "Beatriz thinks the phone can do nothing useful.", answer: false },
    ],
    buildSentence: [
      {
        target: "My old phone finally stopped working last week, so I bought a new smartphone yesterday.",
        jumbled: ["I", "new", "so", "smartphone", "working", "yesterday.", "stopped", "finally", "phone", "week,", "bought", "last", "My", "old", "a"],
      },
      {
        target: "The box sits on my kitchen table, and I open it slowly and carefully.",
        jumbled: ["I", "my", "it", "and", "carefully.", "open", "The", "table,", "box", "sits", "slowly", "kitchen", "on", "and"],
      },
      {
        target: "Inside, I find the phone, a charging cable, and a small instruction pamphlet.",
        jumbled: ["small", "charging", "cable,", "instruction", "pamphlet.", "a", "the", "I", "phone,", "find", "Inside,", "and", "a"],
      },
      {
        target: "This new phone looks much more complicated, with a large screen and many small icons.",
        jumbled: ["a", "new", "complicated,", "small", "screen", "phone", "with", "many", "icons.", "more", "much", "This", "looks", "large", "and"],
      },
      {
        target: "“Beatriz, you can learn this,” I tell myself, even though I feel a little nervous about learning something so new at my age.",
        jumbled: ["my", "new", "I", "tell", "though", "nervous", "something", "this,”", "I", "learning", "age.", "“Beatriz,", "about", "a", "feel", "little", "you", "so", "even", "can", "learn", "at", "myself,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning to use something new.",
    mySentenceExample: "I felt nervous learning to use my new computer.",
  },
  {
    number: 2,
    title: "Calling Noah for Help",
    image: null,
    imageNote: "Beatriz sitting on her couch, holding her old phone to call her nephew, the new smartphone box beside her.",
    story:
      "Instead of guessing everything alone, I decide to call my nephew Noah for help. He is young and always seems to understand technology very quickly and easily. “Aunt Beatriz, I can come over this weekend and help you,” he says kindly on the phone. I feel relieved knowing I will not have to figure this out completely alone. Noah always explains things patiently, without making me feel silly for asking simple questions. I thank him and tell him I will have some tea and snacks ready. Waiting for Saturday, I feel a little more hopeful about this new phone.",
    questions: [
      { text: "Who does Beatriz call for help?", answer: "Her nephew Noah." },
      { text: "What does Noah offer to do?", answer: "Come over on the weekend to help." },
      { text: "How does Beatriz feel after talking to Noah?", answer: "Relieved and hopeful." },
    ],
    trueFalse: [
      { text: "Beatriz calls her nephew Noah for help.", answer: true },
      { text: "Noah refuses to help Beatriz at all.", answer: false },
      { text: "Noah offers to come over this weekend.", answer: true },
      { text: "Beatriz feels relieved after talking to Noah.", answer: true },
      { text: "Beatriz feels more worried after the call.", answer: false },
    ],
    buildSentence: [
      {
        target: "Instead of guessing everything alone, I decide to call my nephew Noah for help.",
        jumbled: ["to", "of", "alone,", "everything", "Instead", "for", "I", "help.", "call", "Noah", "nephew", "my", "guessing", "decide"],
      },
      {
        target: "He is young and always seems to understand technology very quickly and easily.",
        jumbled: ["and", "technology", "easily.", "quickly", "understand", "He", "to", "is", "young", "seems", "always", "very", "and"],
      },
      {
        target: "“Aunt Beatriz, I can come over this weekend and help you,” he says kindly on the phone.",
        jumbled: ["come", "phone.", "this", "you,”", "the", "over", "he", "kindly", "weekend", "“Aunt", "says", "Beatriz,", "help", "on", "and", "can", "I"],
      },
      {
        target: "Noah always explains things patiently, without making me feel silly for asking simple questions.",
        jumbled: ["asking", "Noah", "making", "things", "without", "simple", "for", "patiently,", "silly", "questions.", "explains", "feel", "always", "me"],
      },
      {
        target: "I thank him and tell him I will have some tea and snacks ready.",
        jumbled: ["him", "I", "and", "tea", "thank", "and", "I", "ready.", "tell", "some", "have", "will", "him", "snacks"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about asking someone for help with something new.",
    mySentenceExample: "I asked my daughter for help with my new computer.",
  },
  {
    number: 3,
    title: "Turning It On",
    image: null,
    imageNote: "Noah sitting beside Beatriz on the couch, showing her how to press the power button on her new phone.",
    story:
      "On Saturday, Noah arrives and sits beside me with a warm smile on his face. “Let's start simple, Aunt Beatriz,” he says, picking up the new phone gently from the table. He shows me the small button on the side used to turn the phone on. I press it carefully, and the screen lights up brightly, showing colorful icons everywhere. “Don't worry, everything here is easy once you know where to look,” he reassures me kindly. He explains the icons slowly, one at a time, without rushing through any explanation. I feel my nervousness slowly fading with each simple, clear step he shows me.",
    questions: [
      { text: "What does Noah say to start with?", answer: "Let's start simple." },
      { text: "What does the small button do?", answer: "Turns the phone on." },
      { text: "How does Noah explain the icons?", answer: "Slowly, one at a time, without rushing." },
    ],
    trueFalse: [
      { text: "Noah says let's start simple.", answer: true },
      { text: "The small button turns the phone on.", answer: true },
      { text: "Noah rushes through the explanation quickly.", answer: false },
      { text: "Noah explains the icons slowly, one at a time.", answer: true },
      { text: "Beatriz's nervousness grows stronger with each step.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Saturday, Noah arrives and sits beside me with a warm smile on his face.",
        jumbled: ["sits", "me", "a", "arrives", "warm", "smile", "Saturday,", "and", "with", "face.", "his", "On", "beside", "Noah", "on"],
      },
      {
        target: "“Let's start simple, Aunt Beatriz,” he says, picking up the new phone gently from the table.",
        jumbled: ["start", "he", "new", "phone", "Aunt", "table.", "the", "up", "“Let's", "says,", "the", "from", "picking", "simple,", "gently", "Beatriz,”"],
      },
      {
        target: "He shows me the small button on the side used to turn the phone on.",
        jumbled: ["on.", "side", "the", "phone", "button", "the", "used", "me", "turn", "small", "shows", "on", "the", "He", "to"],
      },
      {
        target: "“Don't worry, everything here is easy once you know where to look,” he reassures me kindly.",
        jumbled: ["me", "to", "once", "“Don't", "worry,", "you", "is", "look,”", "reassures", "everything", "where", "easy", "he", "know", "here", "kindly."],
      },
      {
        target: "He explains the icons slowly, one at a time, without rushing through any explanation.",
        jumbled: ["explains", "at", "a", "He", "the", "icons", "through", "explanation.", "any", "slowly,", "one", "rushing", "without", "time,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone explaining something to you slowly and clearly.",
    mySentenceExample: "My teacher explained the lesson slowly and clearly to me.",
  },
  {
    number: 4,
    title: "Sending a Text Message",
    image: null,
    imageNote: "Beatriz carefully typing a text message on her new phone while Noah watches and points at the screen, both smiling.",
    story:
      "Next, Noah shows me how to open the messages app and find a contact. My hands feel a little clumsy, but I follow his instructions step by step carefully. “Nice work, Aunt Beatriz,” Noah says as I choose my sister's name from the contact list, feeling proud I found it myself. I type a short message slowly, checking each letter twice before sending it. “Hi Carmen, I have a new phone now,” I write with careful concentration. I press the send button, and the message disappears from the screen immediately. A minute later, my phone buzzes with a reply from my sister. I feel a small burst of excitement seeing it work.",
    questions: [
      { text: "What app does Noah show Beatriz first?", answer: "The messages app." },
      { text: "Who does Beatriz choose to message?", answer: "Her sister Carmen." },
      { text: "How does Beatriz feel when the reply arrives?", answer: "A small burst of excitement." },
    ],
    trueFalse: [
      { text: "Noah shows Beatriz the messages app.", answer: true },
      { text: "Beatriz messages her sister Carmen.", answer: true },
      { text: "Beatriz sends the message without checking it.", answer: false },
      { text: "Beatriz's phone buzzes with a reply.", answer: true },
      { text: "Beatriz feels nothing seeing the reply.", answer: false },
    ],
    buildSentence: [
      {
        target: "Next, Noah shows me how to open the messages app and find a contact.",
        jumbled: ["how", "app", "contact.", "the", "to", "find", "a", "Next,", "Noah", "and", "shows", "messages", "me", "open"],
      },
      {
        target: "“Nice work, Aunt Beatriz,” Noah says as I choose my sister's name from the contact list, feeling proud I found it myself.",
        jumbled: ["list,", "says", "work,", "my", "myself.", "the", "Aunt", "“Nice", "it", "name", "Beatriz,”", "proud", "choose", "feeling", "I", "Noah", "as", "contact", "I", "sister's", "found", "from"],
      },
      {
        target: "I type a short message slowly, checking each letter twice before sending it.",
        jumbled: ["before", "it.", "twice", "slowly,", "message", "short", "each", "a", "sending", "type", "I", "checking", "letter"],
      },
      {
        target: "“Hi Carmen, I have a new phone now,” I write with careful concentration.",
        jumbled: ["Carmen,", "a", "write", "I", "careful", "phone", "with", "new", "concentration.", "“Hi", "now,”", "have", "I"],
      },
      {
        target: "A minute later, my phone buzzes with a reply from my sister.",
        jumbled: ["A", "a", "with", "from", "reply", "my", "buzzes", "sister.", "my", "later,", "minute", "phone"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about sending a message to someone important to you.",
    mySentenceExample: "I sent a message to my sister to share my good news.",
  },
  {
    number: 5,
    title: "Taking a Photo",
    image: null,
    imageNote: "Beatriz holding up her new phone, taking a photo of Noah as he smiles and makes a funny pose in the living room.",
    story:
      "Noah suggests we practice something more fun: taking a photo with the camera app. “Try this, Aunt Beatriz,” he says, showing me where the camera icon is and how to open it quickly. I point the phone at him, and he makes a silly, funny pose for the picture. I press the round button on the screen, and the phone makes a small clicking sound. The photo appears on the screen instantly, showing Noah laughing in a funny position. I laugh too, surprised at how clear and colorful the picture looks. Taking photos feels much easier than I expected it to be at first.",
    questions: [
      { text: "What does Noah suggest they practice?", answer: "Taking a photo with the camera app." },
      { text: "What does Noah do for the photo?", answer: "Makes a silly, funny pose." },
      { text: "How does the photo look on the screen?", answer: "Clear and colorful." },
    ],
    trueFalse: [
      { text: "Noah suggests taking a photo with the camera app.", answer: true },
      { text: "Noah refuses to pose for any picture.", answer: false },
      { text: "The phone makes a small clicking sound.", answer: true },
      { text: "The photo looks clear and colorful.", answer: true },
      { text: "Taking photos feels harder than Beatriz expected.", answer: false },
    ],
    buildSentence: [
      {
        target: "Noah suggests we practice something more fun: taking a photo with the camera app.",
        jumbled: ["camera", "taking", "photo", "Noah", "with", "a", "app.", "more", "practice", "suggests", "the", "we", "something", "fun:"],
      },
      {
        target: "“Try this, Aunt Beatriz,” he says, showing me where the camera icon is and how to open it quickly.",
        jumbled: ["camera", "this,", "open", "is", "showing", "where", "and", "“Try", "Beatriz,”", "me", "to", "he", "the", "it", "Aunt", "how", "quickly.", "says,", "icon"],
      },
      {
        target: "I point the phone at him, and he makes a silly, funny pose for the picture.",
        jumbled: ["the", "phone", "the", "a", "him,", "silly,", "picture.", "for", "funny", "and", "he", "point", "pose", "makes", "I", "at"],
      },
      {
        target: "The photo appears on the screen instantly, showing Noah laughing in a funny position.",
        jumbled: ["a", "laughing", "photo", "Noah", "on", "in", "The", "position.", "screen", "appears", "showing", "the", "funny", "instantly,"],
      },
      {
        target: "Taking photos feels much easier than I expected it to be at first.",
        jumbled: ["Taking", "be", "I", "it", "easier", "first.", "than", "feels", "at", "photos", "much", "expected", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about taking a photo of someone or something.",
    mySentenceExample: "I took a photo of my grandchildren at the park.",
  },
  {
    number: 6,
    title: "Getting a Little Confused",
    image: null,
    imageNote: "Beatriz frowning slightly at the phone screen, several apps open at once, Noah pointing helpfully at one specific button.",
    story:
      "Trying to explore on my own, I accidentally open several apps at the same time without understanding it. The screen becomes crowded with different windows, and I feel confused about what happened. “I think I broke it,” I tell Noah, feeling a little worried about my mistake. Noah laughs gently. “You didn't break it, Aunt Beatriz,” he reassures me. He shows me a simple button that closes extra apps and cleans up the screen easily. I feel relieved that fixing my mistake was much simpler than I first thought. Technology mistakes, I realize, are usually not as serious as they seem.",
    questions: [
      { text: "What does Beatriz accidentally do?", answer: "Opens several apps at the same time." },
      { text: "What does Beatriz worry about?", answer: "That she broke the phone." },
      { text: "How does Noah help fix the confusion?", answer: "Shows her a button that closes extra apps." },
    ],
    trueFalse: [
      { text: "Beatriz accidentally opens several apps at once.", answer: true },
      { text: "Beatriz feels completely calm about this mistake.", answer: false },
      { text: "Beatriz worries she broke the phone.", answer: true },
      { text: "Noah shows her a button that closes extra apps.", answer: true },
      { text: "Fixing the mistake turns out to be very difficult.", answer: false },
    ],
    buildSentence: [
      {
        target: "Trying to explore on my own, I accidentally open several apps at the same time without understanding it.",
        jumbled: ["several", "same", "explore", "at", "accidentally", "open", "apps", "I", "it.", "to", "understanding", "the", "on", "without", "Trying", "my", "own,", "time"],
      },
      {
        target: "“I think I broke it,” I tell Noah, feeling a little worried about my mistake.",
        jumbled: ["I", "broke", "tell", "little", "worried", "a", "mistake.", "Noah,", "I", "feeling", "about", "my", "it,”", "think", "“I"],
      },
      {
        target: "Noah laughs gently.",
        jumbled: ["Noah", "gently.", "laughs"],
      },
      {
        target: "He shows me a simple button that closes extra apps and cleans up the screen easily.",
        jumbled: ["the", "apps", "closes", "that", "button", "cleans", "He", "simple", "screen", "a", "me", "up", "and", "easily.", "shows", "extra"],
      },
      {
        target: "I feel relieved that fixing my mistake was much simpler than I first thought.",
        jumbled: ["relieved", "fixing", "I", "simpler", "I", "than", "mistake", "feel", "much", "that", "was", "my", "first", "thought."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a mistake that turned out to be less serious than you thought.",
    mySentenceExample: "My mistake with the printer was less serious than I thought.",
  },
  {
    number: 7,
    title: "Setting Up Video Calls",
    image: null,
    imageNote: "Beatriz smiling and waving at her phone screen during a video call, Noah sitting beside her helping set up the app.",
    story:
      "“Aunt Beatriz, want to learn video calling?” Noah asks, so I can see my family more often. My daughter lives far away, and this idea excites me immediately and completely. He downloads a simple video calling app and shows me how it works. We call my daughter together, and her smiling face appears on my screen suddenly. “Mom, you're using a smartphone now?” she asks, clearly surprised and happy about it. We talk for several minutes, and I feel genuinely happy seeing her face so clearly. This feature alone already makes the whole new phone feel worth it.",
    questions: [
      { text: "What does Noah ask if Beatriz would like to learn?", answer: "Video calling." },
      { text: "Who do they call together?", answer: "Beatriz's daughter." },
      { text: "How does Beatriz's daughter react?", answer: "Surprised and happy." },
    ],
    trueFalse: [
      { text: "Noah asks if Beatriz wants to learn video calling.", answer: true },
      { text: "Beatriz's daughter lives very close by.", answer: false },
      { text: "They call Beatriz's daughter together.", answer: true },
      { text: "Beatriz's daughter feels surprised and happy.", answer: true },
      { text: "Beatriz feels this feature is not worth it.", answer: false },
    ],
    buildSentence: [
      {
        target: "“Aunt Beatriz, want to learn video calling?” Noah asks, so I can see my family more often.",
        jumbled: ["I", "my", "so", "family", "can", "Beatriz,", "see", "often.", "to", "“Aunt", "asks,", "calling?”", "more", "learn", "Noah", "want", "video"],
      },
      {
        target: "My daughter lives far away, and this idea excites me immediately and completely.",
        jumbled: ["and", "completely.", "My", "and", "away,", "idea", "excites", "immediately", "far", "lives", "daughter", "this", "me"],
      },
      {
        target: "We call my daughter together, and her smiling face appears on my screen suddenly.",
        jumbled: ["screen", "my", "We", "her", "face", "on", "suddenly.", "call", "together,", "daughter", "and", "my", "smiling", "appears"],
      },
      {
        target: "“Mom, you're using a smartphone now?” she asks, clearly surprised and happy about it.",
        jumbled: ["“Mom,", "surprised", "smartphone", "a", "it.", "she", "now?”", "asks,", "using", "you're", "and", "about", "clearly", "happy"],
      },
      {
        target: "We talk for several minutes, and I feel genuinely happy seeing her face so clearly.",
        jumbled: ["happy", "feel", "seeing", "I", "talk", "We", "and", "several", "so", "her", "genuinely", "clearly.", "face", "for", "minutes,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about talking to a family member using video calling.",
    mySentenceExample: "I love talking to my daughter using video calling.",
  },
  {
    number: 8,
    title: "Practicing Alone",
    image: null,
    imageNote: "Beatriz sitting alone on her couch that evening, confidently scrolling through her phone with a small smile.",
    story:
      "After Noah leaves, I decide to practice using my phone a little more by myself. I open the camera app again and take a few more photos around my apartment. I also check the messages app to see if my sister replied again. “Look at you, Beatriz,” I think with a smile, feeling more comfortable finding buttons and menus without asking anyone for help. I make a small mistake once, but I remember Noah's advice about the button that fixes things. Fixing it myself this time makes me feel proud of my quick progress today. Learning something new alone, even in small steps, feels genuinely rewarding.",
    questions: [
      { text: "What does Beatriz practice after Noah leaves?", answer: "Taking more photos and checking messages." },
      { text: "How does Beatriz feel finding things without help?", answer: "More comfortable." },
      { text: "How does Beatriz fix her small mistake this time?", answer: "By remembering Noah's advice about the button." },
    ],
    trueFalse: [
      { text: "Beatriz practices using her phone alone.", answer: true },
      { text: "Beatriz refuses to open the camera app again.", answer: false },
      { text: "Beatriz feels more comfortable finding things now.", answer: true },
      { text: "Beatriz fixes her mistake herself this time.", answer: true },
      { text: "Beatriz feels nothing about this small progress.", answer: false },
    ],
    buildSentence: [
      {
        target: "I decide to practice using my phone a little more by myself.",
        jumbled: ["a", "to", "by", "myself.", "my", "practice", "decide", "little", "using", "more", "I", "phone"],
      },
      {
        target: "I open the camera app again and take a few more photos around my apartment.",
        jumbled: ["and", "a", "I", "take", "app", "more", "camera", "around", "again", "the", "apartment.", "few", "open", "my", "photos"],
      },
      {
        target: "“Look at you, Beatriz,” I think with a smile, feeling more comfortable finding buttons and menus without asking anyone for help.",
        jumbled: ["a", "anyone", "and", "comfortable", "you,", "smile,", "feeling", "Beatriz,”", "menus", "finding", "buttons", "help.", "with", "asking", "“Look", "more", "at", "for", "think", "I", "without"],
      },
      {
        target: "I make a small mistake once, but I remember Noah's advice about the button that fixes things.",
        jumbled: ["Noah's", "I", "remember", "button", "the", "I", "make", "small", "mistake", "fixes", "a", "things.", "once,", "advice", "that", "about", "but"],
      },
      {
        target: "Fixing it myself this time makes me feel proud of my quick progress today.",
        jumbled: ["today.", "feel", "this", "makes", "it", "myself", "my", "me", "quick", "proud", "Fixing", "time", "progress", "of"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about practicing something new by yourself.",
    mySentenceExample: "I practiced my new skill by myself and felt proud.",
  },
  {
    number: 9,
    title: "Showing a Friend",
    image: null,
    imageNote: "Beatriz sitting at a café table with a friend, both looking at her phone screen as she shows off a photo, smiling proudly.",
    story:
      "The next day, I meet my friend Rosa for coffee at our favorite small café. I proudly show her my new phone and the photos I took yesterday. “You learned all this so quickly, Beatriz,” Rosa says, clearly impressed by my new skills. I explain how my nephew helped me and how I practiced more by myself afterward. Rosa admits she also wants a new phone but feels nervous about learning it too. I encourage her kindly, telling her it feels difficult at first but gets easier quickly. Sharing what I learned with a friend makes me feel confident and helpful today.",
    questions: [
      { text: "Who does Beatriz meet for coffee?", answer: "Her friend Rosa." },
      { text: "What does Beatriz show Rosa?", answer: "Her new phone and the photos she took." },
      { text: "What does Rosa admit she wants?", answer: "A new phone too." },
    ],
    trueFalse: [
      { text: "Beatriz meets her friend Rosa for coffee.", answer: true },
      { text: "Beatriz hides her new phone from Rosa.", answer: false },
      { text: "Rosa admits she also wants a new phone.", answer: true },
      { text: "Beatriz encourages Rosa kindly.", answer: true },
      { text: "Beatriz feels unhelpful sharing what she learned.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next day, I meet my friend Rosa for coffee at our favorite small café.",
        jumbled: ["coffee", "favorite", "for", "I", "café.", "meet", "my", "our", "day,", "small", "at", "The", "next", "friend", "Rosa"],
      },
      {
        target: "I proudly show her my new phone and the photos I took yesterday.",
        jumbled: ["her", "and", "I", "show", "my", "photos", "the", "phone", "yesterday.", "took", "proudly", "new", "I"],
      },
      {
        target: "“You learned all this so quickly, Beatriz,” Rosa says, clearly impressed by my new skills.",
        jumbled: ["all", "my", "skills.", "learned", "“You", "impressed", "Beatriz,”", "new", "says,", "Rosa", "this", "quickly,", "so", "clearly", "by"],
      },
      {
        target: "Rosa admits she also wants a new phone but feels nervous about learning it too.",
        jumbled: ["phone", "it", "she", "Rosa", "learning", "too.", "about", "but", "feels", "admits", "nervous", "a", "wants", "also", "new"],
      },
      {
        target: "I encourage her kindly, telling her it feels difficult at first but gets easier quickly.",
        jumbled: ["her", "feels", "it", "gets", "quickly.", "easier", "difficult", "at", "encourage", "I", "telling", "but", "kindly,", "first", "her"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about teaching or showing a friend something new.",
    mySentenceExample: "I showed my friend how to use a new app.",
  },
  {
    number: 10,
    title: "Comfortable with My Phone",
    image: null,
    imageNote: "Beatriz sitting comfortably on her couch, video calling her daughter and looking at photos, completely relaxed and confident.",
    story:
      "One week later, using my new phone feels completely normal, almost like a natural part of my day. I video call my daughter every few days now, something I never imagined doing so easily before. I take photos of small, simple moments, like my morning tea or a pretty flower outside. My old worries about this new technology already feel a little silly looking back now. “You're a natural, Aunt Beatriz,” Noah says when he checks in sometimes, proud of how comfortable I have become with everything so quickly. Learning something new at my age felt scary at first, but now it feels genuinely wonderful.",
    questions: [
      { text: "How does using the phone feel one week later?", answer: "Completely normal." },
      { text: "What does Beatriz do every few days now?", answer: "Video call her daughter." },
      { text: "How does Beatriz feel about learning something new now?", answer: "It feels genuinely wonderful." },
    ],
    trueFalse: [
      { text: "Using the phone feels completely normal now.", answer: true },
      { text: "Beatriz video calls her daughter every few days.", answer: true },
      { text: "Beatriz's old worries still feel completely serious now.", answer: false },
      { text: "Noah checks in, proud of Beatriz's progress.", answer: true },
      { text: "Beatriz feels this experience was completely wasted.", answer: false },
    ],
    buildSentence: [
      {
        target: "One week later, using my new phone feels completely normal, almost like a natural part of my day.",
        jumbled: ["new", "of", "natural", "completely", "part", "a", "almost", "phone", "later,", "using", "like", "day.", "my", "feels", "One", "week", "normal,", "my"],
      },
      {
        target: "I video call my daughter every few days now, something I never imagined doing so easily before.",
        jumbled: ["days", "easily", "I", "I", "video", "few", "something", "imagined", "so", "daughter", "every", "my", "never", "call", "before.", "doing", "now,"],
      },
      {
        target: "I take photos of small, simple moments, like my morning tea or a pretty flower outside.",
        jumbled: ["simple", "take", "flower", "photos", "of", "I", "like", "outside.", "moments,", "tea", "pretty", "small,", "or", "my", "morning", "a"],
      },
      {
        target: "My old worries about this new technology already feel a little silly looking back now.",
        jumbled: ["already", "looking", "this", "worries", "little", "new", "about", "technology", "back", "a", "feel", "now.", "My", "old", "silly"],
      },
      {
        target: "“You're a natural, Aunt Beatriz,” Noah says when he checks in sometimes, proud of how comfortable I have become with everything so quickly.",
        jumbled: ["of", "when", "quickly.", "become", "a", "proud", "Aunt", "have", "in", "checks", "I", "he", "says", "natural,", "everything", "Noah", "sometimes,", "so", "Beatriz,”", "“You're", "with", "how", "comfortable"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something that felt scary at first but became comfortable.",
    mySentenceExample: "Using a computer felt scary at first but became comfortable for me.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
