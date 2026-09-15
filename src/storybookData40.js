// A2 Adults digital storybook, Book 40: "Adopting a Rescue Dog"
// Static content -- no Supabase. Eighth and final book in the Adults
// track batch (Books 39-40), completing Adults at 8 books to match
// Kids and Teens. Same pattern as storybookData7.js through
// storybookData12.js: 3 questions, 5 True/False and 5 Build-a-Sentence
// per chapter, ordered shortest-to-longest. Built around a trust-building
// arc rather than a lost-pet plot, to stay distinct from Book 24's
// "The Class Pet" (which already uses a pet-escape/found beat).
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook40/cover.jpg";

export const STORYBOOK_TITLE = "Adopting a Rescue Dog";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Isaac sitting on the living room floor with a once-shy rescue dog now resting its head happily on his lap, warm evening light filling the cozy apartment.";

export const CHARACTERS = [
  { name: "Isaac", role: "The narrator, an adult living alone", look: "Glasses, casual sweater, kind but initially unsure how to earn an animal's trust." },
  { name: "Ms. Alvarado", role: "A volunteer at the animal shelter", look: "Shelter vest, clipboard, warm and knowledgeable about rescue animals." },
  { name: "Ranger", role: "The rescue dog", look: "Medium-sized, brindle fur, timid posture at first that slowly relaxes over time." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Decision to Adopt",
    image: null,
    imageNote: "Isaac standing outside the entrance of a local animal shelter, reading a poster about rescue dogs, looking thoughtful before stepping inside.",
    story:
      "After living alone in my apartment for nearly two years, the quiet evenings gradually start feeling less peaceful and more genuinely lonely than I expected. A coworker mentions volunteering at the local animal shelter, and something about the idea of adopting a rescue dog stays with me for weeks afterward. I research the responsibilities carefully, saving my notes in a file I title “Isaac's Adoption Checklist,” considering the time, cost, and commitment involved before making any final decision. Finally, one Saturday morning, I decide to simply visit the shelter, without promising myself anything beyond just looking. Standing outside the entrance, I take a deep breath before stepping through the door.",
    questions: [
      { text: "How long has Isaac been living alone?", answer: "Nearly two years." },
      { text: "What does a coworker mention to Isaac?", answer: "Volunteering at the local animal shelter." },
      { text: "What does Isaac decide to do one Saturday morning?", answer: "Visit the shelter, just to look." },
    ],
    trueFalse: [
      { text: "Isaac has been living alone for nearly two years.", answer: true },
      { text: "Isaac's evenings feel more lonely than expected.", answer: true },
      { text: "A coworker mentions volunteering at an animal shelter.", answer: true },
      { text: "Isaac decides immediately to adopt without any research.", answer: false },
      { text: "Isaac decides to simply visit the shelter first.", answer: true },
    ],
    buildSentence: [
      {
        target: "The quiet evenings gradually start feeling less peaceful and more genuinely lonely than I expected.",
        jumbled: ["feeling", "lonely", "and", "start", "quiet", "genuinely", "less", "than", "The", "expected.", "evenings", "I", "peaceful", "gradually", "more"],
      },
      {
        target: "A coworker mentions volunteering at the local animal shelter, and something about the idea of adopting a rescue dog stays with me for weeks afterward.",
        jumbled: ["mentions", "shelter,", "for", "adopting", "animal", "the", "A", "about", "afterward.", "weeks", "me", "at", "stays", "local", "something", "coworker", "volunteering", "the", "idea", "dog", "with", "a", "and", "rescue", "of"],
      },
      {
        target: "I research the responsibilities carefully, saving my notes in a file I title “Isaac's Adoption Checklist,” considering the time, cost, and commitment involved before making any final decision.",
        jumbled: ["research", "final", "involved", "file", "the", "and", "any", "my", "“Isaac's", "I", "carefully,", "Adoption", "saving", "a", "commitment", "title", "I", "considering", "the", "before", "decision.", "time,", "making", "responsibilities", "Checklist,”", "in", "cost,", "notes"],
      },
      {
        target: "Finally, one Saturday morning, I decide to simply visit the shelter, without promising myself anything beyond just looking.",
        jumbled: ["Finally,", "looking.", "promising", "beyond", "the", "shelter,", "simply", "anything", "Saturday", "one", "myself", "morning,", "I", "decide", "just", "without", "visit", "to"],
      },
      {
        target: "Standing outside the entrance, I take a deep breath before stepping through the door.",
        jumbled: ["a", "stepping", "through", "deep", "outside", "I", "before", "entrance,", "the", "breath", "take", "the", "door.", "Standing"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a decision you thought about carefully before making.",
    mySentenceExample: "I thought carefully before deciding to change my career.",
  },
  {
    number: 2,
    title: "Meeting Ranger",
    image: null,
    imageNote: "Isaac crouching outside a kennel, looking gently at a brindle dog hiding in the back corner, Ms. Alvarado standing nearby with a clipboard.",
    story:
      "Ms. Alvarado, a shelter volunteer, walks me past rows of eager, tail-wagging dogs, each one jumping excitedly against their kennel doors. One dog, however, sits quietly in the back corner of his kennel, barely lifting his head as I approach curiously. “That's Ranger, Isaac. He's been here longer than most, honestly, because his shyness makes him harder to place,” she explains softly. Something about his cautious, watchful eyes stops me completely, unlike the more obviously excitable dogs surrounding him. “He needs someone genuinely patient,” Ms. Alvarado adds, watching my reaction carefully. Despite every practical instinct suggesting an easier dog, I feel strangely drawn toward him.",
    questions: [
      { text: "What are most of the dogs doing as Isaac walks past?", answer: "Jumping excitedly against their kennel doors." },
      { text: "What is different about Ranger's behavior?", answer: "He sits quietly in the back corner, barely lifting his head." },
      { text: "What does Ms. Alvarado say Ranger needs?", answer: "Someone genuinely patient." },
    ],
    trueFalse: [
      { text: "Most dogs jump excitedly against their kennel doors.", answer: true },
      { text: "Ranger sits quietly in the back corner.", answer: true },
      { text: "Ranger has been at the shelter for a very short time.", answer: false },
      { text: "Ms. Alvarado says Ranger needs someone patient.", answer: true },
      { text: "Isaac feels no interest in Ranger at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Alvarado, a shelter volunteer, walks me past rows of eager, tail-wagging dogs, each one jumping excitedly against their kennel doors.",
        jumbled: ["past", "excitedly", "kennel", "eager,", "a", "against", "each", "Ms.", "their", "walks", "one", "shelter", "of", "me", "tail-wagging", "doors.", "Alvarado,", "jumping", "dogs,", "rows", "volunteer,"],
      },
      {
        target: "One dog, however, sits quietly in the back corner of his kennel, barely lifting his head as I approach curiously.",
        jumbled: ["quietly", "dog,", "One", "however,", "head", "approach", "lifting", "back", "as", "of", "I", "the", "in", "sits", "curiously.", "corner", "his", "kennel,", "barely", "his"],
      },
      {
        target: "“That's Ranger, Isaac. He's been here longer than most, honestly, because his shyness makes him harder to place,” she explains softly.",
        jumbled: ["explains", "longer", "here", "she", "makes", "Ranger,", "than", "softly.", "“That's", "Isaac.", "been", "place,”", "harder", "to", "because", "him", "most,", "He's", "shyness", "honestly,", "his"],
      },
      {
        target: "Something about his cautious, watchful eyes stops me completely, unlike the more obviously excitable dogs surrounding him.",
        jumbled: ["more", "Something", "unlike", "me", "cautious,", "his", "dogs", "about", "the", "watchful", "eyes", "him.", "obviously", "excitable", "completely,", "stops", "surrounding"],
      },
      {
        target: "Despite every practical instinct suggesting an easier dog, I feel strangely drawn toward him.",
        jumbled: ["practical", "dog,", "easier", "him.", "I", "feel", "drawn", "toward", "instinct", "every", "strangely", "Despite", "suggesting", "an"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being drawn to something or someone unexpected.",
    mySentenceExample: "I felt drawn to a quiet student who needed extra encouragement.",
  },
  {
    number: 3,
    title: "Bringing Him Home",
    image: null,
    imageNote: "Isaac carrying a nervous Ranger's leash through his apartment doorway, the dog hesitating and pressing close against the wall, tail tucked low.",
    story:
      "After completing the adoption paperwork, I carefully lead Ranger through my apartment door, unsure exactly what to expect from this next chapter. He hesitates immediately at the threshold, pressing his body against the wall, tail tucked low between his legs nervously. I sit down quietly on the floor nearby. “Slow down, Isaac, let him come to you,” I tell myself, giving him space rather than forcing any immediate interaction he clearly isn't ready for yet. Ranger explores cautiously, sniffing corners and furniture, occasionally glancing back toward me with uncertain, watchful eyes. By evening, he retreats completely under my bed, refusing both food and water despite my gentle, repeated attempts.",
    questions: [
      { text: "What does Ranger do immediately at the doorway?", answer: "He hesitates, pressing his body against the wall." },
      { text: "What does Isaac do instead of forcing interaction?", answer: "Sits quietly on the floor, giving him space." },
      { text: "Where does Ranger retreat to by evening?", answer: "Under the bed." },
    ],
    trueFalse: [
      { text: "Ranger hesitates immediately at the doorway.", answer: true },
      { text: "Isaac forces immediate interaction with Ranger.", answer: false },
      { text: "Isaac sits down quietly, giving Ranger space.", answer: true },
      { text: "Ranger retreats completely under the bed by evening.", answer: true },
      { text: "Ranger eats and drinks normally on the first evening.", answer: false },
    ],
    buildSentence: [
      {
        target: "I carefully lead Ranger through my apartment door, unsure exactly what to expect from this next chapter.",
        jumbled: ["to", "Ranger", "apartment", "this", "exactly", "lead", "unsure", "door,", "I", "through", "expect", "chapter.", "what", "from", "my", "next", "carefully"],
      },
      {
        target: "He hesitates immediately at the threshold, pressing his body against the wall, tail tucked low between his legs nervously.",
        jumbled: ["his", "his", "tucked", "hesitates", "tail", "at", "between", "body", "pressing", "the", "He", "against", "the", "immediately", "legs", "wall,", "low", "threshold,", "nervously."],
      },
      {
        target: "I sit down quietly on the floor nearby.",
        jumbled: ["the", "quietly", "floor", "on", "down", "I", "sit", "nearby."],
      },
      {
        target: "“Slow down, Isaac, let him come to you,” I tell myself, giving him space rather than forcing any immediate interaction he clearly isn't ready for yet.",
        jumbled: ["ready", "him", "come", "any", "tell", "giving", "forcing", "myself,", "you,”", "yet.", "“Slow", "immediate", "clearly", "I", "to", "interaction", "he", "space", "let", "him", "Isaac,", "for", "than", "down,", "rather", "isn't"],
      },
      {
        target: "By evening, he retreats completely under my bed, refusing both food and water despite my gentle, repeated attempts.",
        jumbled: ["refusing", "completely", "both", "food", "my", "my", "By", "repeated", "water", "gentle,", "retreats", "and", "evening,", "attempts.", "he", "bed,", "under", "despite"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about giving someone or something space and time to adjust.",
    mySentenceExample: "I gave my new coworker space and time to adjust to the office.",
  },
  {
    number: 4,
    title: "Small Signs of Trust",
    image: null,
    imageNote: "Isaac sitting on the kitchen floor at a distance, watching Ranger cautiously approach an empty food bowl and finally eat, tail relaxing slightly.",
    story:
      "For several days, Ranger only eats when he believes I'm not watching, sneaking cautiously toward his bowl whenever I step into another room. Rather than feeling discouraged, I read that this behavior is common among rescue dogs adjusting slowly to unfamiliar surroundings and people. I begin keeping a small notebook, headed “Isaac's Patience Log,” and start leaving small treats scattered gently near wherever he chooses to rest, never forcing direct contact or demanding immediate affection from him. Gradually, he starts eating while I sit quietly nearby, no longer requiring complete privacy for something as simple as a meal. These tiny, incremental changes feel disproportionately significant, each one representing genuine, hard-won progress.",
    questions: [
      { text: "When does Ranger only eat during the first few days?", answer: "When he believes Isaac isn't watching." },
      { text: "What does Isaac begin leaving near Ranger?", answer: "Small treats." },
      { text: "What gradual change happens with Ranger's eating?", answer: "He starts eating while Isaac sits quietly nearby." },
    ],
    trueFalse: [
      { text: "Ranger only eats when he thinks Isaac isn't watching.", answer: true },
      { text: "Isaac feels discouraged and gives up quickly.", answer: false },
      { text: "Isaac begins leaving small treats near Ranger.", answer: true },
      { text: "Ranger eventually eats while Isaac sits nearby.", answer: true },
      { text: "Isaac forces direct contact to speed things up.", answer: false },
    ],
    buildSentence: [
      {
        target: "For several days, Ranger only eats when he believes I'm not watching, sneaking cautiously toward his bowl whenever I step into another room.",
        jumbled: ["Ranger", "only", "his", "several", "he", "when", "into", "step", "For", "another", "cautiously", "believes", "not", "sneaking", "days,", "whenever", "toward", "eats", "watching,", "I", "room.", "I'm", "bowl"],
      },
      {
        target: "Rather than feeling discouraged, I read that this behavior is common among rescue dogs adjusting slowly to unfamiliar surroundings and people.",
        jumbled: ["behavior", "discouraged,", "to", "common", "adjusting", "surroundings", "among", "read", "unfamiliar", "rescue", "is", "this", "than", "Rather", "dogs", "slowly", "people.", "and", "feeling", "that", "I"],
      },
      {
        target: "I begin keeping a small notebook, headed “Isaac's Patience Log,” and start leaving small treats scattered gently near wherever he chooses to rest, never forcing direct contact or demanding immediate affection from him.",
        jumbled: ["keeping", "notebook,", "scattered", "“Isaac's", "Log,”", "gently", "headed", "a", "I", "and", "to", "contact", "demanding", "rest,", "wherever", "immediate", "him.", "chooses", "treats", "from", "Patience", "he", "direct", "affection", "small", "near", "forcing", "small", "begin", "or", "never", "start", "leaving"],
      },
      {
        target: "Gradually, he starts eating while I sit quietly nearby, no longer requiring complete privacy for something as simple as a meal.",
        jumbled: ["for", "eating", "a", "longer", "nearby,", "complete", "as", "I", "as", "starts", "Gradually,", "privacy", "while", "he", "simple", "no", "sit", "meal.", "something", "quietly", "requiring"],
      },
      {
        target: "These tiny, incremental changes feel disproportionately significant, each one representing genuine, hard-won progress.",
        jumbled: ["significant,", "feel", "representing", "tiny,", "changes", "These", "each", "disproportionately", "progress.", "hard-won", "one", "incremental", "genuine,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small sign of progress that meant a lot to you.",
    mySentenceExample: "A small sign of progress meant a lot when I finally understood a hard lesson.",
  },
  {
    number: 5,
    title: "A Setback",
    image: null,
    imageNote: "Ranger cowering under the bed during a thunderstorm, visible only by his eyes glowing in the dim light, Isaac kneeling nearby looking worried.",
    story:
      "Three weeks into our slow progress, a sudden, violent thunderstorm rolls through the city late one night, and Ranger completely panics at the noise. He bolts immediately under my bed, shaking uncontrollably, refusing to come out despite my gentle, worried coaxing for nearly an hour. Watching him regress so completely after weeks of careful progress leaves me questioning whether I'm actually equipped to help an animal with this much fear. I wonder briefly if adopting him was genuinely selfish, prioritizing my own loneliness over what might actually be best for him. Exhausted and discouraged, I whisper, “Get it together, Isaac,” before finally sitting on the floor beside the bed, simply waiting quietly.",
    questions: [
      { text: "What happens late one night three weeks in?", answer: "A violent thunderstorm." },
      { text: "How does Ranger react to the thunderstorm?", answer: "He bolts under the bed, shaking uncontrollably." },
      { text: "What does Isaac question during this setback?", answer: "Whether he is equipped to help Ranger, and if adopting him was selfish." },
    ],
    trueFalse: [
      { text: "A violent thunderstorm rolls through late one night.", answer: true },
      { text: "Ranger stays completely calm during the storm.", answer: false },
      { text: "Ranger bolts under the bed shaking.", answer: true },
      { text: "Isaac questions whether he's equipped to help Ranger.", answer: true },
      { text: "Isaac feels no doubt about the adoption at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "Three weeks into our slow progress, a sudden, violent thunderstorm rolls through the city late one night, and Ranger completely panics at the noise.",
        jumbled: ["a", "panics", "the", "night,", "thunderstorm", "weeks", "violent", "sudden,", "city", "slow", "into", "one", "noise.", "through", "our", "the", "completely", "Ranger", "and", "Three", "progress,", "rolls", "at", "late"],
      },
      {
        target: "He bolts immediately under my bed, shaking uncontrollably, refusing to come out despite my gentle, worried coaxing for nearly an hour.",
        jumbled: ["worried", "bed,", "shaking", "come", "refusing", "nearly", "uncontrollably,", "hour.", "out", "to", "despite", "bolts", "coaxing", "an", "for", "my", "He", "my", "immediately", "gentle,", "under"],
      },
      {
        target: "Watching him regress so completely after weeks of careful progress leaves me questioning whether I'm actually equipped to help an animal with this much fear.",
        jumbled: ["this", "Watching", "him", "weeks", "me", "I'm", "of", "to", "equipped", "whether", "much", "help", "careful", "an", "actually", "so", "progress", "questioning", "with", "regress", "leaves", "completely", "after", "fear.", "animal"],
      },
      {
        target: "I wonder briefly if adopting him was genuinely selfish, prioritizing my own loneliness over what might actually be best for him.",
        jumbled: ["genuinely", "might", "selfish,", "adopting", "him.", "for", "was", "own", "actually", "loneliness", "prioritizing", "briefly", "best", "I", "over", "wonder", "him", "my", "what", "be", "if"],
      },
      {
        target: "Exhausted and discouraged, I whisper, “Get it together, Isaac,” before finally sitting on the floor beside the bed, simply waiting quietly.",
        jumbled: ["floor", "sitting", "finally", "Exhausted", "beside", "it", "simply", "I", "before", "Isaac,”", "bed,", "the", "on", "discouraged,", "and", "whisper,", "together,", "waiting", "the", "quietly.", "“Get"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a moment of doubt during a difficult process.",
    mySentenceExample: "I felt doubt during a difficult process of learning a new skill.",
  },
  {
    number: 6,
    title: "Patience Pays Off",
    image: null,
    imageNote: "Isaac sitting cross-legged on his living room floor reading a book about rescue-dog trauma, Ranger lying a short distance away, watching curiously.",
    story:
      "The next morning, I call Ms. Alvarado, explaining my discouragement and genuine uncertainty about handling setbacks like the previous night's storm. “Isaac, this is completely normal for a traumatized rescue animal,” she reassures me calmly, explaining that regression after progress is not a sign of my failure whatsoever. She recommends simply existing calmly near Ranger daily, without demanding anything, letting him choose when and how to approach me instead. Following her advice, I spend evenings quietly reading nearby, deliberately ignoring him rather than seeking constant interaction or reassurance from his direction. Slowly, over several days, I notice him resting slightly closer to me each evening.",
    questions: [
      { text: "Who does Isaac call the next morning?", answer: "Ms. Alvarado." },
      { text: "What does Ms. Alvarado say about regression?", answer: "That it's completely normal for traumatized rescue animals." },
      { text: "What new approach does Isaac try?", answer: "Existing calmly near Ranger without demanding anything." },
    ],
    trueFalse: [
      { text: "Isaac calls Ms. Alvarado the next morning.", answer: true },
      { text: "Ms. Alvarado says regression means Isaac has failed.", answer: false },
      { text: "Ms. Alvarado recommends existing calmly near Ranger daily.", answer: true },
      { text: "Isaac tries reading nearby instead of forcing interaction.", answer: true },
      { text: "Ranger stays exactly the same distance away every evening.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next morning, I call Ms. Alvarado, explaining my discouragement and genuine uncertainty about handling setbacks like the previous night's storm.",
        jumbled: ["like", "handling", "and", "the", "storm.", "explaining", "my", "morning,", "I", "about", "discouragement", "setbacks", "Ms.", "next", "The", "night's", "previous", "genuine", "call", "Alvarado,", "uncertainty"],
      },
      {
        target: "“Isaac, this is completely normal for a traumatized rescue animal,” she reassures me calmly, explaining that regression after progress is not a sign of my failure whatsoever.",
        jumbled: ["traumatized", "a", "this", "me", "animal,”", "progress", "“Isaac,", "sign", "rescue", "normal", "is", "she", "not", "that", "a", "explaining", "failure", "calmly,", "of", "completely", "regression", "after", "reassures", "for", "whatsoever.", "is", "my"],
      },
      {
        target: "She recommends simply existing calmly near Ranger daily, without demanding anything, letting him choose when and how to approach me instead.",
        jumbled: ["and", "to", "approach", "how", "existing", "instead.", "letting", "me", "near", "when", "him", "choose", "daily,", "anything,", "without", "simply", "recommends", "Ranger", "demanding", "calmly", "She"],
      },
      {
        target: "Following her advice, I spend evenings quietly reading nearby, deliberately ignoring him rather than seeking constant interaction or reassurance from his direction.",
        jumbled: ["him", "I", "ignoring", "her", "Following", "from", "constant", "spend", "reading", "seeking", "or", "evenings", "nearby,", "than", "deliberately", "quietly", "reassurance", "direction.", "rather", "advice,", "his", "interaction"],
      },
      {
        target: "Slowly, over several days, I notice him resting slightly closer to me each evening.",
        jumbled: ["evening.", "Slowly,", "over", "days,", "closer", "notice", "me", "each", "I", "to", "him", "slightly", "several", "resting"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about advice that helped you handle a setback.",
    mySentenceExample: "My friend's advice helped me handle a setback at my new job.",
  },
  {
    number: 7,
    title: "The First Approach",
    image: null,
    imageNote: "Ranger walking slowly across the living room toward Isaac, who sits still and calm, one paw lifted mid-step, Isaac's eyes soft and hopeful.",
    story:
      "One quiet evening, while reading on the living room floor exactly as Ms. Alvarado suggested, I notice Ranger stand and stretch from his usual resting spot. Instead of retreating toward the bedroom as expected, he walks slowly and deliberately across the living room, directly toward me. My heart races with cautious hope. “Stay still, Isaac,” I tell myself, remaining perfectly still and resisting every urge to reach toward him immediately. Ranger stops just inches away, sniffing my outstretched hand carefully before finally resting his head gently against my knee. Tears unexpectedly well up in my eyes; this small, quiet moment feels genuinely monumental after weeks of patient waiting.",
    questions: [
      { text: "What does Ranger do instead of retreating this time?", answer: "He walks slowly toward Isaac." },
      { text: "What does Isaac resist doing?", answer: "Reaching toward him immediately." },
      { text: "What does Ranger finally do with his head?", answer: "Rests it gently against Isaac's knee." },
    ],
    trueFalse: [
      { text: "Ranger walks slowly toward Isaac instead of retreating.", answer: true },
      { text: "Isaac immediately reaches out to grab Ranger.", answer: false },
      { text: "Ranger sniffs Isaac's outstretched hand.", answer: true },
      { text: "Ranger rests his head against Isaac's knee.", answer: true },
      { text: "Isaac feels nothing significant about this moment.", answer: false },
    ],
    buildSentence: [
      {
        target: "One quiet evening, while reading on the living room floor exactly as Ms. Alvarado suggested, I notice Ranger stand and stretch from his usual resting spot.",
        jumbled: ["I", "from", "reading", "while", "spot.", "Alvarado", "usual", "Ranger", "One", "suggested,", "stretch", "his", "evening,", "room", "stand", "the", "and", "exactly", "resting", "on", "quiet", "Ms.", "floor", "living", "notice", "as"],
      },
      {
        target: "Instead of retreating toward the bedroom as expected, he walks slowly and deliberately across the living room, directly toward me.",
        jumbled: ["of", "room,", "deliberately", "toward", "the", "the", "he", "slowly", "across", "as", "toward", "and", "walks", "living", "Instead", "retreating", "bedroom", "expected,", "directly", "me."],
      },
      {
        target: "My heart races with cautious hope.",
        jumbled: ["with", "races", "hope.", "My", "heart", "cautious"],
      },
      {
        target: "“Stay still, Isaac,” I tell myself, remaining perfectly still and resisting every urge to reach toward him immediately.",
        jumbled: ["“Stay", "remaining", "still", "every", "immediately.", "perfectly", "I", "reach", "resisting", "Isaac,”", "tell", "to", "toward", "urge", "and", "myself,", "still,", "him"],
      },
      {
        target: "Ranger stops just inches away, sniffing my outstretched hand carefully before finally resting his head gently against my knee.",
        jumbled: ["head", "before", "resting", "gently", "away,", "knee.", "outstretched", "against", "stops", "finally", "his", "carefully", "hand", "Ranger", "just", "my", "my", "sniffing", "inches"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small moment that felt surprisingly meaningful to you.",
    mySentenceExample: "A small moment felt surprisingly meaningful when my cat finally sat on my lap.",
  },
  {
    number: 8,
    title: "Walks in the Park",
    image: null,
    imageNote: "Isaac and Ranger walking together along a sunny park path, Ranger's tail relaxed and slightly wagging, both moving at an easy, comfortable pace.",
    story:
      "Building on our newfound connection, I decide it's finally time to attempt our first proper walk together at the small park nearby. Ranger hesitates at the front door initially. “Easy does it, Isaac,” I remind myself, and with gentle encouragement and a favorite treat, he steps outside cautiously beside me. The unfamiliar sounds and smells clearly overwhelm him at first, his body tense and alert to every passing car or stranger nearby. Gradually, though, his posture relaxes noticeably, his tail beginning a slow, uncertain wag as we walk along a quiet path. By the walk's end, something in him seems lighter, genuinely curious rather than purely fearful of his surroundings.",
    questions: [
      { text: "What do Isaac and Ranger attempt for the first time?", answer: "A proper walk together at the park." },
      { text: "How does Ranger react to the unfamiliar sounds at first?", answer: "He's tense and overwhelmed." },
      { text: "What happens to Ranger's tail as they walk?", answer: "It begins a slow, uncertain wag." },
    ],
    trueFalse: [
      { text: "Isaac and Ranger attempt their first proper walk.", answer: true },
      { text: "Ranger feels completely relaxed from the very first step.", answer: false },
      { text: "Ranger's posture relaxes noticeably as they walk.", answer: true },
      { text: "Ranger's tail begins a slow, uncertain wag.", answer: true },
      { text: "Ranger seems purely fearful the entire walk.", answer: false },
    ],
    buildSentence: [
      {
        target: "Building on our newfound connection, I decide it's finally time to attempt our first proper walk together at the small park nearby.",
        jumbled: ["it's", "proper", "to", "first", "I", "walk", "together", "park", "on", "connection,", "nearby.", "our", "at", "newfound", "time", "small", "decide", "our", "Building", "finally", "attempt", "the"],
      },
      {
        target: "Ranger hesitates at the front door initially.",
        jumbled: ["front", "door", "the", "Ranger", "initially.", "hesitates", "at"],
      },
      {
        target: "“Easy does it, Isaac,” I remind myself, and with gentle encouragement and a favorite treat, he steps outside cautiously beside me.",
        jumbled: ["outside", "does", "I", "Isaac,”", "“Easy", "cautiously", "myself,", "a", "and", "with", "me.", "treat,", "steps", "favorite", "gentle", "it,", "he", "and", "encouragement", "remind", "beside"],
      },
      {
        target: "The unfamiliar sounds and smells clearly overwhelm him at first, his body tense and alert to every passing car or stranger nearby.",
        jumbled: ["nearby.", "passing", "body", "clearly", "unfamiliar", "car", "first,", "tense", "and", "sounds", "to", "alert", "every", "him", "at", "or", "smells", "and", "stranger", "overwhelm", "his", "The"],
      },
      {
        target: "Gradually, though, his posture relaxes noticeably, his tail beginning a slow, uncertain wag as we walk along a quiet path.",
        jumbled: ["along", "uncertain", "slow,", "his", "walk", "though,", "as", "quiet", "posture", "we", "wag", "tail", "relaxes", "Gradually,", "noticeably,", "path.", "his", "a", "beginning", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about trying something new together with someone or something you care about.",
    mySentenceExample: "I tried hiking for the first time together with my new puppy.",
  },
  {
    number: 9,
    title: "A Full Transformation",
    image: null,
    imageNote: "Ranger bounding playfully across the living room with a chew toy, tail wagging energetically, Isaac laughing and clapping from the couch.",
    story:
      "Three months after that first hesitant step through my apartment door, Ranger has transformed into an entirely different dog than the timid creature I originally brought home. He greets me enthusiastically now whenever I return, tail wagging vigorously, sometimes even bringing a favorite toy directly to my feet. Watching him play freely, bounding playfully across the living room floor, feels almost unrecognizable compared to those first anxious days hiding beneath my bed. Ms. Alvarado, visiting recently for a follow-up check, seems genuinely amazed by his remarkable transformation over such a relatively short period. “This is exactly why patience matters so much, Isaac,” she says, smiling warmly at us both.",
    questions: [
      { text: "How much time has passed since Ranger came home?", answer: "Three months." },
      { text: "How does Ranger greet Isaac now?", answer: "Enthusiastically, wagging his tail, sometimes bringing a toy." },
      { text: "What does Ms. Alvarado say about the transformation?", answer: "This is exactly why patience matters so much." },
    ],
    trueFalse: [
      { text: "Three months have passed since Ranger arrived.", answer: true },
      { text: "Ranger greets Isaac enthusiastically now.", answer: true },
      { text: "Ranger still hides under the bed most days.", answer: false },
      { text: "Ms. Alvarado visits for a follow-up check.", answer: true },
      { text: "Ms. Alvarado says this proves patience doesn't matter much.", answer: false },
    ],
    buildSentence: [
      {
        target: "Three months after that first hesitant step through my apartment door, Ranger has transformed into an entirely different dog than the timid creature I originally brought home.",
        jumbled: ["dog", "my", "home.", "originally", "that", "the", "Ranger", "apartment", "into", "Three", "timid", "step", "transformed", "has", "hesitant", "door,", "after", "first", "months", "entirely", "I", "an", "creature", "brought", "than", "through", "different"],
      },
      {
        target: "He greets me enthusiastically now whenever I return, tail wagging vigorously, sometimes even bringing a favorite toy directly to my feet.",
        jumbled: ["feet.", "directly", "greets", "sometimes", "enthusiastically", "toy", "vigorously,", "I", "me", "even", "wagging", "to", "whenever", "now", "return,", "a", "tail", "bringing", "He", "my", "favorite"],
      },
      {
        target: "Watching him play freely, bounding playfully across the living room floor, feels almost unrecognizable compared to those first anxious days hiding beneath my bed.",
        jumbled: ["across", "days", "playfully", "almost", "beneath", "floor,", "feels", "the", "hiding", "him", "living", "anxious", "Watching", "first", "to", "bed.", "my", "those", "play", "bounding", "freely,", "room", "compared", "unrecognizable"],
      },
      {
        target: "Ms. Alvarado, visiting recently for a follow-up check, seems genuinely amazed by his remarkable transformation over such a relatively short period.",
        jumbled: ["a", "check,", "visiting", "amazed", "such", "over", "period.", "recently", "by", "genuinely", "follow-up", "for", "his", "a", "short", "remarkable", "transformation", "Ms.", "Alvarado,", "seems", "relatively"],
      },
      {
        target: "“This is exactly why patience matters so much, Isaac,” she says, smiling warmly at us both.",
        jumbled: ["why", "so", "matters", "she", "much,", "us", "is", "warmly", "patience", "at", "“This", "both.", "smiling", "says,", "Isaac,”", "exactly"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a transformation you witnessed over time.",
    mySentenceExample: "I witnessed a transformation in my little brother's confidence over the school year.",
  },
  {
    number: 10,
    title: "Companions for Life",
    image: null,
    imageNote: "Isaac sitting on his couch in the evening, Ranger curled up peacefully beside him, both relaxed and content, warm lamp light filling the cozy room.",
    story:
      "Sitting on my couch this evening, Ranger curled comfortably beside me, I reflect on everything these past few months have genuinely taught me about patience and trust. Adopting him wasn't simply about curing my own loneliness, as I once worried during that difficult, doubtful night of the thunderstorm. Instead, we healed something in each other gradually, learning together how consistent patience eventually builds something lasting and real. My apartment no longer feels quiet in that lonely way it once did, filled instead with the comfortable presence of genuine companionship. Ranger shifts closer, resting his head against my leg. “We did it, Isaac,” I think quietly, and I smile contentedly.",
    questions: [
      { text: "Where does Isaac sit this evening?", answer: "On his couch, with Ranger curled beside him." },
      { text: "What does Isaac realize adopting Ranger wasn't simply about?", answer: "Curing his own loneliness." },
      { text: "How does Isaac's apartment feel now compared to before?", answer: "Filled with genuine companionship, no longer lonely." },
    ],
    trueFalse: [
      { text: "Isaac sits on his couch with Ranger beside him.", answer: true },
      { text: "Isaac realizes adopting Ranger wasn't simply about curing his loneliness.", answer: true },
      { text: "Isaac's apartment still feels lonely in the same way.", answer: false },
      { text: "They healed something in each other gradually.", answer: true },
      { text: "Isaac feels nothing meaningful looking back on this journey.", answer: false },
    ],
    buildSentence: [
      {
        target: "Sitting on my couch this evening, Ranger curled comfortably beside me, I reflect on everything these past few months have genuinely taught me about patience and trust.",
        jumbled: ["everything", "genuinely", "past", "months", "reflect", "couch", "patience", "evening,", "curled", "this", "I", "my", "comfortably", "taught", "me", "me,", "have", "trust.", "and", "beside", "about", "on", "few", "on", "Sitting", "these", "Ranger"],
      },
      {
        target: "Adopting him wasn't simply about curing my own loneliness, as I once worried during that difficult, doubtful night of the thunderstorm.",
        jumbled: ["wasn't", "him", "that", "night", "difficult,", "loneliness,", "curing", "my", "I", "during", "thunderstorm.", "doubtful", "own", "as", "the", "once", "Adopting", "of", "worried", "simply", "about"],
      },
      {
        target: "Instead, we healed something in each other gradually, learning together how consistent patience eventually builds something lasting and real.",
        jumbled: ["each", "gradually,", "patience", "healed", "lasting", "something", "real.", "other", "eventually", "how", "learning", "consistent", "we", "Instead,", "in", "and", "together", "something", "builds"],
      },
      {
        target: "My apartment no longer feels quiet in that lonely way it once did, filled instead with the comfortable presence of genuine companionship.",
        jumbled: ["did,", "of", "with", "filled", "instead", "the", "companionship.", "it", "apartment", "presence", "longer", "lonely", "that", "no", "in", "once", "genuine", "way", "My", "quiet", "comfortable", "feels"],
      },
      {
        target: "“We did it, Isaac,” I think quietly, and I smile contentedly.",
        jumbled: ["“We", "I", "quietly,", "did", "and", "Isaac,”", "think", "it,", "I", "smile", "contentedly."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a relationship or bond that grew stronger through patience.",
    mySentenceExample: "My friendship grew stronger through patience during a difficult year.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
