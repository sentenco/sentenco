// A2 Kids digital storybook, Book 28: "Lost and Found"
// Static content -- no Supabase. Sixth book in the A2 Kids batch
// (Books 23-30). Same structure/level as storybookData23.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook28/cover.jpg";

export const STORYBOOK_TITLE = "Lost and Found";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Kai kneeling on the school playground looking worriedly at his empty wrist, the monkey bars visible behind him, a small silver watch glinting in the grass nearby.";

export const CHARACTERS = [
  { name: "Kai", role: "The narrator, a young boy", look: "Short black hair, blue jacket, careful and a little anxious when worried." },
  { name: "Ben", role: "Kai's classmate and friend", look: "Freckles, green cap, loyal and quick-thinking." },
  { name: "Mr. Diaz", role: "Kai's teacher", look: "Glasses, striped tie, calm and helpful." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My Favorite Watch",
    image: null,
    imageNote: "Kai looking proudly at a small silver watch on his wrist while getting ready for school, a photo of his grandfather visible on his dresser.",
    story:
      "Before I leave for school, I carefully put on my favorite watch, the one Grandpa gave me for my birthday. “Take good care of it, Kai,” Grandpa always tells me, since it belonged to him when he was young too. The silver watch ticks quietly on my wrist, making me feel a little more grown up. I check the time proudly, even though I already know we have plenty of time before school starts. This watch means more to me than any other object I own, and I promise myself to always keep it safe and close.",
    questions: [
      { text: "Who gave Kai the watch?", answer: "Grandpa." },
      { text: "How does the watch make Kai feel?", answer: "A little more grown up." },
      { text: "What does Kai promise himself?", answer: "To always keep it safe and close." },
    ],
    trueFalse: [
      { text: "Grandpa gave Kai the watch for his birthday.", answer: true },
      { text: "Kai does not care about the watch at all.", answer: false },
      { text: "Kai promises to keep the watch safe.", answer: true },
    ],
    buildSentence: [
      {
        target: "I carefully put on my favorite watch, the one Grandpa gave me for my birthday.",
        jumbled: ["gave", "I", "for", "Grandpa", "favorite", "carefully", "the", "me", "on", "my", "birthday.", "my", "one", "watch,", "put"],
      },
      {
        target: "“Take good care of it, Kai,” Grandpa always tells me, since it belonged to him when he was young too.",
        jumbled: ["it", "care", "young", "too.", "tells", "to", "“Take", "was", "he", "him", "since", "of", "it,", "always", "when", "good", "Grandpa", "belonged", "me,", "Kai,”"],
      },
      {
        target: "The silver watch ticks quietly on my wrist, making me feel a little more grown up.",
        jumbled: ["watch", "up.", "feel", "quietly", "a", "grown", "on", "The", "my", "little", "silver", "wrist,", "more", "making", "ticks", "me"],
      },
      {
        target: "I check the time proudly, even though I already know we have plenty of time before school starts.",
        jumbled: ["we", "have", "time", "time", "school", "though", "I", "check", "of", "I", "proudly,", "plenty", "starts.", "know", "the", "even", "before", "already"],
      },
      {
        target: "This watch means more to me than any other object I own, and I promise myself to always keep it safe and close.",
        jumbled: ["other", "I", "and", "to", "myself", "me", "means", "and", "object", "promise", "more", "it", "than", "always", "keep", "safe", "own,", "close.", "I", "This", "to", "watch", "any"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an object that is very special to you.",
    mySentenceExample: "A necklace from my grandmother is very special to me.",
  },
  {
    number: 2,
    title: "Recess Fun",
    image: null,
    imageNote: "Kai hanging happily from the monkey bars at recess, his watch resting on a nearby bench where he placed it before playing.",
    story:
      "At recess, Ben and I race straight to the monkey bars, our favorite part of the playground. Before climbing, I quickly take off my watch so it won't get scratched, placing it carefully on the nearby bench. “Last one across is a rotten egg, Kai!” Ben shouts, already swinging forward. We laugh and compete for almost the entire recess, completely forgetting about everything else around us. When the bell finally rings, we run breathlessly back toward the classroom line, excited and out of breath from all the fun we just had together.",
    questions: [
      { text: "What is Kai and Ben's favorite part of the playground?", answer: "The monkey bars." },
      { text: "Why does Kai take off his watch?", answer: "So it won't get scratched." },
      { text: "What happens when the bell rings?", answer: "They run back to the classroom line, out of breath." },
    ],
    trueFalse: [
      { text: "Kai and Ben's favorite spot is the monkey bars.", answer: true },
      { text: "Kai keeps his watch on while playing.", answer: false },
      { text: "They run back to the classroom when the bell rings.", answer: true },
    ],
    buildSentence: [
      {
        target: "At recess, Ben and I race straight to the monkey bars, our favorite part of the playground.",
        jumbled: ["favorite", "Ben", "the", "of", "race", "to", "our", "I", "part", "and", "bars,", "recess,", "the", "At", "playground.", "straight", "monkey"],
      },
      {
        target: "I quickly take off my watch so it won't get scratched, placing it carefully on the nearby bench.",
        jumbled: ["it", "take", "I", "it", "watch", "placing", "the", "carefully", "on", "won't", "my", "bench.", "quickly", "so", "nearby", "get", "off", "scratched,"],
      },
      {
        target: "“Last one across is a rotten egg, Kai!” Ben shouts, already swinging forward.",
        jumbled: ["shouts,", "swinging", "is", "a", "egg,", "Ben", "already", "forward.", "rotten", "one", "Kai!”", "“Last", "across"],
      },
      {
        target: "We laugh and compete for almost the entire recess, completely forgetting about everything else around us.",
        jumbled: ["We", "almost", "us.", "recess,", "compete", "around", "else", "for", "completely", "the", "everything", "entire", "and", "forgetting", "about", "laugh"],
      },
      {
        target: "We run breathlessly back toward the classroom line, excited and out of breath from all the fun we just had together.",
        jumbled: ["just", "the", "and", "We", "we", "had", "toward", "out", "breathlessly", "back", "run", "excited", "breath", "from", "the", "classroom", "of", "fun", "all", "together.", "line,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite thing to do at recess.",
    mySentenceExample: "My favorite thing to do at recess is play tag with friends.",
  },
  {
    number: 3,
    title: "Uh-oh, It's Gone",
    image: null,
    imageNote: "Kai standing in the classroom looking down at his bare wrist with a shocked, worried expression, other classmates working quietly around him.",
    story:
      "Back in the classroom, I sit down at my desk and glance at my wrist to check the time. My stomach suddenly drops. My watch is gone! I remember taking it off at recess, but I completely forgot to pick it back up afterward. Panic rushes through me as I picture Grandpa's disappointed face if I lost his special gift. “This can't be happening, Kai,” I whisper to myself, my hands feeling cold and shaky. I raise my hand immediately, hoping Mr. Diaz will let me go back outside to search before it gets too late.",
    questions: [
      { text: "What does Kai notice is missing?", answer: "His watch." },
      { text: "What did Kai forget to do?", answer: "Pick it back up after recess." },
      { text: "How does Kai feel about possibly losing it?", answer: "Panicked." },
    ],
    trueFalse: [
      { text: "Kai notices his watch is missing.", answer: true },
      { text: "Kai remembers exactly where he left it.", answer: false },
      { text: "Kai feels panicked about losing the watch.", answer: true },
    ],
    buildSentence: [
      {
        target: "Back in the classroom, I sit down at my desk and glance at my wrist to check the time.",
        jumbled: ["the", "and", "I", "in", "check", "at", "time.", "classroom,", "to", "the", "desk", "sit", "wrist", "my", "down", "Back", "at", "glance", "my"],
      },
      {
        target: "My stomach suddenly drops.",
        jumbled: ["stomach", "My", "suddenly", "drops."],
      },
      {
        target: "I remember taking it off at recess, but I completely forgot to pick it back up afterward.",
        jumbled: ["pick", "I", "back", "taking", "afterward.", "but", "completely", "I", "off", "it", "remember", "forgot", "at", "to", "recess,", "up", "it"],
      },
      {
        target: "Panic rushes through me as I picture Grandpa's disappointed face if I lost his special gift.",
        jumbled: ["if", "Panic", "as", "rushes", "special", "disappointed", "his", "Grandpa's", "me", "I", "I", "picture", "face", "through", "gift.", "lost"],
      },
      {
        target: "I raise my hand immediately, hoping Mr. Diaz will let me go back outside to search before it gets too late.",
        jumbled: ["me", "late.", "to", "hoping", "back", "outside", "immediately,", "Mr.", "will", "before", "my", "gets", "let", "it", "search", "I", "go", "too", "hand", "Diaz", "raise"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you realized you lost something.",
    mySentenceExample: "I felt panicked when I realized I lost my house key.",
  },
  {
    number: 4,
    title: "Retracing My Steps",
    image: null,
    imageNote: "Kai standing in the middle of the classroom with his eyes closed, thinking hard, trying to remember his exact path during recess.",
    story:
      "Mr. Diaz notices my worried face and asks what's wrong. I explain everything quickly, and he tells me to think carefully before panicking further. “Where exactly were you at recess, Kai?” he asks calmly. I close my eyes and try to remember every single place I went: the monkey bars, the bench, and then the line for the water fountain. “I placed it on the bench near the monkey bars,” I say slowly, the memory becoming clearer. Retracing my steps in my mind helps me feel a little less panicked and gives me a real place to start searching.",
    questions: [
      { text: "What does Mr. Diaz ask Kai to do?", answer: "Think carefully about where he was at recess." },
      { text: "Where does Kai remember placing the watch?", answer: "On the bench near the monkey bars." },
      { text: "How does thinking carefully help Kai?", answer: "It makes him feel less panicked and gives him a place to start." },
    ],
    trueFalse: [
      { text: "Mr. Diaz tells Kai to think carefully.", answer: true },
      { text: "Kai cannot remember any places he visited.", answer: false },
      { text: "Kai remembers placing the watch on the bench.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Diaz notices my worried face and asks what's wrong.",
        jumbled: ["worried", "asks", "my", "wrong.", "notices", "Mr.", "what's", "face", "and", "Diaz"],
      },
      {
        target: "I explain everything quickly, and he tells me to think carefully before panicking further.",
        jumbled: ["explain", "to", "before", "think", "and", "further.", "panicking", "me", "carefully", "quickly,", "tells", "everything", "I", "he"],
      },
      {
        target: "“Where exactly were you at recess, Kai?” he asks calmly.",
        jumbled: ["recess,", "at", "he", "asks", "exactly", "Kai?”", "were", "you", "calmly.", "“Where"],
      },
      {
        target: "I close my eyes and try to remember every single place I went: the monkey bars, the bench, and then the line for the water fountain.",
        jumbled: ["line", "and", "eyes", "I", "remember", "for", "monkey", "close", "try", "every", "I", "the", "to", "single", "water", "place", "bench,", "fountain.", "the", "went:", "and", "bars,", "the", "my", "then", "the"],
      },
      {
        target: "Retracing my steps in my mind helps me feel a little less panicked and gives me a real place to start searching.",
        jumbled: ["little", "Retracing", "feel", "me", "less", "start", "a", "mind", "gives", "my", "panicked", "my", "real", "in", "helps", "place", "steps", "searching.", "a", "to", "me", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you had to remember where you left something.",
    mySentenceExample: "I had to remember where I left my backpack after school.",
  },
  {
    number: 5,
    title: "Asking Ben for Help",
    image: null,
    imageNote: "Ben nodding determinedly beside Kai, both boys standing near the classroom door ready to search, Ben giving a reassuring thumbs up.",
    story:
      "Mr. Diaz gives me permission to search, and I quickly ask Ben to come with me. “I remember you had your watch near the bench,” Ben says thoughtfully, trying to help me remember too. “We'll find it together, Kai,” he adds confidently, giving me a reassuring pat on the shoulder. Having Ben beside me makes the situation feel less scary, even though I am still very worried inside. Two people searching feels much better than searching completely alone. We walk quickly toward the playground, both determined to find my grandfather's precious watch before it disappears forever.",
    questions: [
      { text: "Who does Kai ask to help him search?", answer: "Ben." },
      { text: "What does Ben remember?", answer: "That Kai had his watch near the bench." },
      { text: "How does having Ben help make Kai feel?", answer: "Less scared." },
    ],
    trueFalse: [
      { text: "Kai asks Ben to help him search.", answer: true },
      { text: "Ben refuses to help Kai at all.", answer: false },
      { text: "Having Ben helps Kai feel less scared.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Diaz gives me permission to search, and I quickly ask Ben to come with me.",
        jumbled: ["Mr.", "with", "come", "Diaz", "quickly", "me.", "me", "ask", "Ben", "permission", "to", "and", "I", "search,", "gives", "to"],
      },
      {
        target: "“I remember you had your watch near the bench,” Ben says thoughtfully, trying to help me remember too.",
        jumbled: ["trying", "bench,”", "help", "remember", "watch", "me", "“I", "says", "to", "too.", "remember", "you", "thoughtfully,", "had", "the", "your", "Ben", "near"],
      },
      {
        target: "“We'll find it together, Kai,” he adds confidently, giving me a reassuring pat on the shoulder.",
        jumbled: ["he", "find", "reassuring", "adds", "shoulder.", "it", "giving", "“We'll", "Kai,”", "pat", "a", "the", "confidently,", "me", "on", "together,"],
      },
      {
        target: "Having Ben beside me makes the situation feel less scary, even though I am still very worried inside.",
        jumbled: ["makes", "still", "beside", "the", "situation", "I", "less", "inside.", "me", "am", "very", "feel", "even", "though", "worried", "scary,", "Having", "Ben"],
      },
      {
        target: "We walk quickly toward the playground, both determined to find my grandfather's precious watch before it disappears forever.",
        jumbled: ["watch", "determined", "before", "playground,", "my", "precious", "quickly", "it", "disappears", "find", "the", "We", "walk", "toward", "grandfather's", "forever.", "both", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time a friend helped you look for something.",
    mySentenceExample: "My friend helped me look for my missing pencil case.",
  },
  {
    number: 6,
    title: "Checking the Classroom",
    image: null,
    imageNote: "Kai and Ben searching under desks and inside cubbies in an empty classroom, looking hopeful but not finding anything yet.",
    story:
      "Before heading outside, we decide to double-check the classroom first, just in case I dropped it somewhere inside instead. Ben and I search under every desk, inside my cubby, and even behind the bookshelf. “Maybe it fell out of your pocket during class, Kai,” Ben suggests, checking near my chair carefully. Unfortunately, after ten minutes of careful searching, we find absolutely nothing inside the classroom. My worry starts growing again, but I try to stay hopeful, reminding myself that we still have not checked the playground yet, where I actually remember leaving it.",
    questions: [
      { text: "Where do Kai and Ben search first?", answer: "The classroom." },
      { text: "What does Ben suggest?", answer: "That it fell out of Kai's pocket during class." },
      { text: "What do they find in the classroom?", answer: "Nothing." },
    ],
    trueFalse: [
      { text: "They search the classroom before going outside.", answer: true },
      { text: "They immediately find the watch under a desk.", answer: false },
      { text: "They find nothing inside the classroom.", answer: true },
    ],
    buildSentence: [
      {
        target: "We decide to double-check the classroom first, just in case I dropped it somewhere inside instead.",
        jumbled: ["the", "it", "I", "decide", "classroom", "case", "instead.", "somewhere", "in", "first,", "inside", "We", "double-check", "to", "just", "dropped"],
      },
      {
        target: "Ben and I search under every desk, inside my cubby, and even behind the bookshelf.",
        jumbled: ["my", "and", "desk,", "cubby,", "search", "behind", "inside", "I", "every", "and", "even", "Ben", "under", "the", "bookshelf."],
      },
      {
        target: "“Maybe it fell out of your pocket during class, Kai,” Ben suggests, checking near my chair carefully.",
        jumbled: ["out", "it", "Ben", "chair", "of", "“Maybe", "pocket", "during", "fell", "checking", "your", "Kai,”", "carefully.", "class,", "suggests,", "near", "my"],
      },
      {
        target: "Unfortunately, after ten minutes of careful searching, we find absolutely nothing inside the classroom.",
        jumbled: ["Unfortunately,", "ten", "minutes", "we", "the", "after", "of", "inside", "find", "classroom.", "absolutely", "nothing", "searching,", "careful"],
      },
      {
        target: "My worry starts growing again, but I try to stay hopeful, reminding myself that we still have not checked the playground yet, where I actually remember leaving it.",
        jumbled: ["not", "again,", "to", "playground", "where", "but", "worry", "that", "we", "remember", "starts", "try", "stay", "checked", "myself", "hopeful,", "I", "I", "still", "My", "reminding", "it.", "actually", "the", "growing", "yet,", "leaving", "have"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a place you searched carefully for something.",
    mySentenceExample: "I searched carefully under my bed for my missing shoe.",
  },
  {
    number: 7,
    title: "Mr. Diaz's Idea",
    image: null,
    imageNote: "Mr. Diaz gesturing toward a small wooden Lost and Found box near the school office, Kai and Ben looking hopeful.",
    story:
      "Feeling discouraged, we return to tell Mr. Diaz that the classroom search failed. He thinks for a moment and then snaps his fingers. “Did you check the Lost and Found box near the office, Kai?” he asks. “Sometimes another teacher finds things on the playground and brings them there.” I hadn't even thought of that possibility! Suddenly, hope rushes back into my chest. “Can we go check right now?” I ask eagerly. Mr. Diaz nods and gives us permission, and Ben and I sprint down the hallway toward the office as fast as our legs can carry us.",
    questions: [
      { text: "What does Mr. Diaz suggest checking?", answer: "The Lost and Found box." },
      { text: "Why might the watch be there?", answer: "Because another teacher might have found it on the playground." },
      { text: "How does Kai feel about this new idea?", answer: "Hopeful." },
    ],
    trueFalse: [
      { text: "Mr. Diaz suggests checking the Lost and Found box.", answer: true },
      { text: "Kai had already checked the Lost and Found box.", answer: false },
      { text: "Kai feels hopeful after hearing the idea.", answer: true },
    ],
    buildSentence: [
      {
        target: "Feeling discouraged, we return to tell Mr. Diaz that the classroom search failed.",
        jumbled: ["classroom", "tell", "failed.", "Mr.", "that", "we", "return", "Diaz", "search", "Feeling", "the", "to", "discouraged,"],
      },
      {
        target: "“Did you check the Lost and Found box near the office, Kai?” he asks.",
        jumbled: ["box", "you", "and", "Kai?”", "Found", "“Did", "the", "check", "the", "asks.", "office,", "near", "he", "Lost"],
      },
      {
        target: "“Sometimes another teacher finds things on the playground and brings them there.”",
        jumbled: ["“Sometimes", "on", "the", "there.”", "them", "finds", "another", "things", "and", "teacher", "playground", "brings"],
      },
      {
        target: "I hadn't even thought of that possibility!",
        jumbled: ["hadn't", "that", "possibility!", "I", "of", "even", "thought"],
      },
      {
        target: "Mr. Diaz nods and gives us permission, and Ben and I sprint down the hallway toward the office as fast as our legs can carry us.",
        jumbled: ["as", "toward", "and", "down", "legs", "the", "Diaz", "can", "Mr.", "I", "gives", "as", "and", "office", "permission,", "fast", "us", "and", "the", "hallway", "our", "us.", "Ben", "sprint", "nods", "carry"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a good idea someone gave you.",
    mySentenceExample: "My teacher gave me a good idea about organizing my desk.",
  },
  {
    number: 8,
    title: "The Lost and Found Box",
    image: null,
    imageNote: "Kai and Ben crouched beside a wooden box filled with jackets, water bottles, and small items, digging through it carefully with anxious hope.",
    story:
      "We arrive at the office, slightly out of breath, and find the wooden Lost and Found box sitting quietly in the corner. It is filled with jackets, water bottles, and single mittens. My hands shake a little as I start digging through the pile, item by item. “It has to be in here,” I mutter, mostly to convince myself. Ben helps me search too, carefully moving jackets aside without making a mess. “We'll find it, Kai,” he says encouragingly. My heart pounds nervously with every item I check, hoping desperately that Grandpa's precious watch is somewhere hidden inside this messy little box.",
    questions: [
      { text: "What items are inside the Lost and Found box?", answer: "Jackets, water bottles, and single mittens." },
      { text: "How does Kai's body react while searching?", answer: "His hands shake." },
      { text: "How does Ben help Kai?", answer: "By searching too, moving jackets aside carefully." },
    ],
    trueFalse: [
      { text: "The box has jackets, water bottles, and mittens.", answer: true },
      { text: "Kai feels completely calm while searching the box.", answer: false },
      { text: "Ben helps search through the box too.", answer: true },
    ],
    buildSentence: [
      {
        target: "We arrive at the office, slightly out of breath, and find the wooden Lost and Found box sitting quietly in the corner.",
        jumbled: ["We", "at", "out", "arrive", "box", "the", "office,", "the", "and", "of", "sitting", "Lost", "quietly", "breath,", "slightly", "corner.", "in", "wooden", "and", "find", "Found", "the"],
      },
      {
        target: "It is filled with jackets, water bottles, and single mittens.",
        jumbled: ["and", "mittens.", "filled", "with", "single", "bottles,", "water", "It", "is", "jackets,"],
      },
      {
        target: "My hands shake a little as I start digging through the pile, item by item.",
        jumbled: ["hands", "shake", "item.", "a", "the", "through", "as", "start", "little", "item", "My", "by", "digging", "I", "pile,"],
      },
      {
        target: "Ben helps me search too, carefully moving jackets aside without making a mess.",
        jumbled: ["Ben", "jackets", "too,", "mess.", "helps", "aside", "moving", "me", "search", "making", "carefully", "a", "without"],
      },
      {
        target: "My heart pounds nervously with every item I check, hoping desperately that Grandpa's precious watch is somewhere hidden inside this messy little box.",
        jumbled: ["messy", "item", "is", "check,", "precious", "pounds", "desperately", "little", "every", "with", "hidden", "nervously", "box.", "hoping", "My", "I", "that", "heart", "watch", "this", "Grandpa's", "somewhere", "inside"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how your body feels when you are nervous.",
    mySentenceExample: "My hands shake a little when I feel nervous.",
  },
  {
    number: 9,
    title: "Found It!",
    image: null,
    imageNote: "Kai holding up the small silver watch triumphantly, Ben cheering beside him, both boys grinning with relief near the Lost and Found box.",
    story:
      "Near the very bottom of the box, my fingers touch something small and cool. I pull it out carefully, and my heart leaps with joy. It's my watch! “I found it! I found it!” I shout, holding it up triumphantly for Ben to see. “Nice job, Kai!” he cheers loudly, giving me a high-five, both of us grinning from ear to ear. I quickly fasten the watch back onto my wrist, feeling an overwhelming wave of relief wash over me. “Grandpa's watch is safe,” I whisper happily to myself, promising once again to never take it off carelessly like that again.",
    questions: [
      { text: "What does Kai find near the bottom of the box?", answer: "His watch." },
      { text: "How does Kai react when he finds it?", answer: "He shouts with joy and holds it up triumphantly." },
      { text: "What does Kai promise himself?", answer: "To never take it off carelessly again." },
    ],
    trueFalse: [
      { text: "Kai finds his watch near the bottom of the box.", answer: true },
      { text: "Kai feels disappointed after finding the watch.", answer: false },
      { text: "Kai promises to never take it off carelessly again.", answer: true },
    ],
    buildSentence: [
      {
        target: "Near the very bottom of the box, my fingers touch something small and cool.",
        jumbled: ["and", "something", "the", "touch", "Near", "bottom", "small", "my", "of", "the", "box,", "fingers", "very", "cool."],
      },
      {
        target: "I pull it out carefully, and my heart leaps with joy.",
        jumbled: ["I", "heart", "my", "with", "it", "pull", "joy.", "and", "carefully,", "leaps", "out"],
      },
      {
        target: "“I found it! I found it!” I shout, holding it up triumphantly for Ben to see.",
        jumbled: ["shout,", "found", "see.", "Ben", "I", "for", "up", "it!", "I", "it!”", "it", "found", "to", "“I", "holding", "triumphantly"],
      },
      {
        target: "“Nice job, Kai!” he cheers loudly, giving me a high-five, both of us grinning from ear to ear.",
        jumbled: ["ear", "to", "us", "from", "loudly,", "high-five,", "cheers", "“Nice", "grinning", "job,", "me", "he", "of", "giving", "Kai!”", "a", "both", "ear."],
      },
      {
        target: "“Grandpa's watch is safe,” I whisper happily to myself, promising once again to never take it off carelessly like that again.",
        jumbled: ["whisper", "happily", "promising", "myself,", "to", "carelessly", "is", "never", "to", "again", "again.", "I", "safe,”", "watch", "once", "it", "take", "like", "off", "that", "“Grandpa's"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt relieved after finding something.",
    mySentenceExample: "I felt relieved after finding my lost homework in my bag.",
  },
  {
    number: 10,
    title: "A Safer Habit",
    image: null,
    imageNote: "Kai showing his watch to Grandpa on a video call that evening, smiling proudly while explaining what happened, a small notebook labeled 'Watch Rules' beside him.",
    story:
      "That evening, I tell Grandpa the whole story during our video call, feeling a little embarrassed about almost losing his gift. Instead of being upset, Grandpa laughs gently and says, “Everyone makes mistakes, Kai. What matters is that you learned something.” From now on, I decide to only take off my watch when absolutely necessary, and always place it somewhere I will definitely remember, like my jacket pocket instead of a random bench. This scary experience taught me an important lesson about being more careful with the things that truly matter to me.",
    questions: [
      { text: "Who does Kai tell the whole story to?", answer: "Grandpa." },
      { text: "What does Grandpa say about mistakes?", answer: "That everyone makes mistakes; what matters is that you learned something." },
      { text: "What new habit does Kai decide to form?", answer: "To only take off the watch when necessary and keep it somewhere he'll remember." },
    ],
    trueFalse: [
      { text: "Kai tells Grandpa the whole story.", answer: true },
      { text: "Grandpa gets very angry at Kai.", answer: false },
      { text: "Kai decides to be more careful with the watch.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, I tell Grandpa the whole story during our video call, feeling a little embarrassed about almost losing his gift.",
        jumbled: ["his", "call,", "the", "Grandpa", "a", "embarrassed", "whole", "story", "our", "feeling", "tell", "I", "during", "evening,", "losing", "little", "almost", "That", "gift.", "about", "video"],
      },
      {
        target: "Instead of being upset, Grandpa laughs gently and says, “Everyone makes mistakes, Kai. What matters is that you learned something.”",
        jumbled: ["mistakes,", "being", "upset,", "you", "learned", "Instead", "What", "laughs", "Kai.", "gently", "and", "“Everyone", "that", "makes", "is", "something.”", "Grandpa", "of", "matters", "says,"],
      },
      {
        target: "From now on, I decide to only take off my watch when absolutely necessary, and always place it somewhere I will definitely remember, like my jacket pocket instead of a random bench.",
        jumbled: ["pocket", "on,", "my", "random", "place", "decide", "of", "only", "always", "somewhere", "jacket", "instead", "off", "watch", "definitely", "will", "a", "and", "I", "remember,", "necessary,", "my", "take", "bench.", "now", "when", "I", "like", "to", "absolutely", "From", "it"],
      },
      {
        target: "This scary experience taught me an important lesson about being more careful with the things that truly matter to me.",
        jumbled: ["to", "taught", "about", "that", "me.", "careful", "truly", "things", "matter", "me", "with", "scary", "an", "being", "important", "This", "the", "more", "lesson", "experience"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from a mistake.",
    mySentenceExample: "I learned to check my bag twice after losing my keys once.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
