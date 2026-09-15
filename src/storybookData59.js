// B1 Adults digital storybook, Book 59: "A Mix-Up at the Pharmacy"
// Static content -- no Supabase. Third book in the B1 Adults batch
// (57-64). Distinct from Book 10's general clinic-visit routine: this
// story centers on a prescription ERROR at the pharmacy counter and
// the complaint/correction process, matching the B1 Adults spec's
// "service incident" and "phone call / problem explanation" focus.
// Grammar/vocab calibrated the same way as Books 57-58. Adults-track
// shape: 3 questions, 5 True/False, 5 Build-a-Sentence per chapter.
// Chapter images not generated yet -- image left null per chapter.
import coverImg from "./assets/storybook59/cover.jpg";

export const STORYBOOK_TITLE = "A Mix-Up at the Pharmacy";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Elena standing at a pharmacy counter, looking closely at a small orange pill bottle with a puzzled expression, pharmacist nearby.";

export const CHARACTERS = [
  { name: "Elena", role: "The narrator, an adult picking up a prescription", look: "Work clothes, tote bag, reading glasses pushed up on her head." },
  { name: "Mr. Diaz", role: "The pharmacist", look: "White coat, calm and careful manner, name tag clipped to his pocket." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Picking Up My Prescription",
    image: null,
    imageNote: "Elena walking into a small neighborhood pharmacy after work, phone showing a pickup notification.",
    story:
      "After work, I stop by the pharmacy to pick up a prescription my doctor called in earlier this week. The notification on my phone says it's ready, so I expect this errand to take only a few minutes at most. Inside, the pharmacy is fairly busy, with several people waiting in a short line ahead of me. While I wait, I glance at my phone, mentally planning the rest of my evening once this quick stop is finished. When it's finally my turn, I give my name at the counter. “One moment, Elena,” the assistant says, disappearing briefly to retrieve my bag.",
    questions: [
      { text: "Why does Elena stop by the pharmacy?", answer: "To pick up a prescription her doctor called in." },
      { text: "What does the notification on her phone say?", answer: "That it's ready." },
      { text: "What does Elena do while waiting in line?", answer: "Glances at her phone, planning her evening." },
    ],
    trueFalse: [
      { text: "Elena stops by the pharmacy after work.", answer: true },
      { text: "The notification says her prescription is ready.", answer: true },
      { text: "The pharmacy is completely empty when Elena arrives.", answer: false },
      { text: "Elena expects this errand to take only a few minutes.", answer: true },
      { text: "The assistant disappears briefly to get her bag.", answer: true },
    ],
    buildSentence: [
      {
        target: "I stop by the pharmacy to pick up a prescription my doctor called in earlier this week.",
        jumbled: ["stop", "prescription", "doctor", "by", "this", "pharmacy", "my", "called", "week.", "I", "the", "earlier", "pick", "in", "up", "a", "to"],
      },
      {
        target: "The notification on my phone says it's ready, so I expect this errand to take only a few minutes at most.",
        jumbled: ["so", "it's", "at", "notification", "I", "few", "says", "phone", "most.", "ready,", "only", "on", "take", "expect", "minutes", "The", "a", "errand", "this", "my", "to"],
      },
      {
        target: "Inside, the pharmacy is fairly busy, with several people waiting in a short line ahead of me.",
        jumbled: ["several", "with", "a", "in", "waiting", "busy,", "ahead", "people", "is", "short", "Inside,", "of", "line", "pharmacy", "me.", "the", "fairly"],
      },
      {
        target: "I glance at my phone, mentally planning the rest of my evening once this quick stop is finished.",
        jumbled: ["rest", "this", "mentally", "evening", "quick", "my", "phone,", "I", "once", "glance", "of", "at", "the", "finished.", "is", "planning", "stop", "my"],
      },
      {
        target: "I give my name at the counter.",
        jumbled: ["I", "at", "give", "counter.", "my", "name", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about running a quick errand after work.",
    mySentenceExample: "I ran a quick errand to the pharmacy after work.",
  },
  {
    number: 2,
    title: "Something Doesn't Look Right",
    image: null,
    imageNote: "Elena examining the pill bottle label closely at the counter, comparing it against something on her phone screen.",
    story:
      "The assistant hands me a small bag, and out of habit, I check the label before leaving the counter, my own name, Elena, printed above the dosage. Something immediately catches my attention: the dosage listed seems different from what my doctor had actually mentioned during my appointment. I pull up my doctor's instructions on my phone, comparing the numbers carefully to make sure I'm not simply misremembering something. Unfortunately, the difference is clear, which means either the prescription itself or the label has some kind of error. Rather than simply assuming it's fine, I decide I should mention this immediately to someone who actually works here.",
    questions: [
      { text: "What does Elena check out of habit?", answer: "The label on the bag." },
      { text: "What catches Elena's attention on the label?", answer: "The dosage seems different from what the doctor mentioned." },
      { text: "What does Elena decide she should do?", answer: "Mention it to someone who works there." },
    ],
    trueFalse: [
      { text: "Elena checks the label out of habit.", answer: true },
      { text: "The dosage listed matches exactly what her doctor said.", answer: false },
      { text: "Elena pulls up her doctor's instructions on her phone.", answer: true },
      { text: "Elena decides to simply assume it's fine.", answer: false },
      { text: "Elena decides to mention this to someone who works there.", answer: true },
    ],
    buildSentence: [
      {
        target: "The assistant hands me a small bag, and out of habit, I check the label before leaving the counter, my own name, Elena, printed above the dosage.",
        jumbled: ["a", "The", "assistant", "leaving", "name,", "label", "out", "my", "Elena,", "the", "own", "check", "dosage.", "me", "hands", "small", "and", "above", "I", "printed", "bag,", "the", "habit,", "counter,", "of", "before", "the"],
      },
      {
        target: "Something immediately catches my attention: the dosage listed seems different from what my doctor had actually mentioned during my appointment.",
        jumbled: ["actually", "immediately", "had", "attention:", "dosage", "Something", "what", "during", "doctor", "the", "listed", "different", "from", "appointment.", "my", "mentioned", "seems", "my", "my", "catches"],
      },
      {
        target: "I pull up my doctor's instructions on my phone, comparing the numbers carefully to make sure I'm not simply misremembering something.",
        jumbled: ["my", "phone,", "something.", "numbers", "doctor's", "sure", "misremembering", "make", "comparing", "not", "pull", "up", "instructions", "simply", "carefully", "on", "I'm", "to", "I", "the", "my"],
      },
      {
        target: "Unfortunately, the difference is clear, which means either the prescription itself or the label has some kind of error.",
        jumbled: ["which", "prescription", "either", "has", "or", "itself", "difference", "error.", "the", "kind", "some", "means", "of", "clear,", "the", "the", "label", "Unfortunately,", "is"],
      },
      {
        target: "Rather than simply assuming it's fine, I decide I should mention this immediately to someone who actually works here.",
        jumbled: ["works", "simply", "Rather", "who", "here.", "it's", "someone", "mention", "this", "than", "decide", "should", "fine,", "I", "I", "assuming", "immediately", "to", "actually"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing an error before it caused a bigger problem.",
    mySentenceExample: "I noticed the error before it caused a bigger problem.",
  },
  {
    number: 3,
    title: "Speaking with the Pharmacist",
    image: null,
    imageNote: "Elena speaking politely with Mr. Diaz across the counter, pointing at the label while he examines it carefully.",
    story:
      "I ask to speak with the pharmacist directly, and Mr. Diaz comes over, greeting me with a professional, attentive manner. I explain calmly that the dosage on the label doesn't match what I remember my doctor telling me during our appointment. He takes the bottle carefully, examining both the label and the original prescription order on his computer screen. “You were right to bring this up, Elena. Let me look into it more closely before you take anything,” he says seriously. I appreciate that he doesn't dismiss my concern, treating it instead as something genuinely worth investigating properly.",
    questions: [
      { text: "Who comes over to speak with Elena?", answer: "Mr. Diaz, the pharmacist." },
      { text: "What does Elena explain calmly?", answer: "That the dosage doesn't match what she remembers." },
      { text: "What does Mr. Diaz say to Elena?", answer: "That she was right to bring it up, and he'll look into it." },
    ],
    trueFalse: [
      { text: "Mr. Diaz comes over with a professional, attentive manner.", answer: true },
      { text: "Elena explains the dosage doesn't match what she remembers.", answer: true },
      { text: "Mr. Diaz dismisses Elena's concern immediately.", answer: false },
      { text: "Mr. Diaz checks the original prescription order on his computer.", answer: true },
      { text: "Elena appreciates that he takes her concern seriously.", answer: true },
    ],
    buildSentence: [
      {
        target: "I ask to speak with the pharmacist directly, and Mr. Diaz comes over, greeting me with a professional, attentive manner.",
        jumbled: ["directly,", "with", "me", "ask", "to", "pharmacist", "speak", "with", "comes", "over,", "I", "the", "greeting", "Diaz", "Mr.", "attentive", "and", "a", "manner.", "professional,"],
      },
      {
        target: "I explain calmly that the dosage on the label doesn't match what I remember my doctor telling me during our appointment.",
        jumbled: ["telling", "during", "appointment.", "the", "label", "doesn't", "dosage", "on", "I", "the", "me", "what", "doctor", "calmly", "I", "my", "match", "explain", "that", "our", "remember"],
      },
      {
        target: "He takes the bottle carefully, examining both the label and the original prescription order on his computer screen.",
        jumbled: ["computer", "examining", "prescription", "He", "bottle", "original", "the", "the", "both", "carefully,", "screen.", "his", "and", "takes", "order", "the", "on", "label"],
      },
      {
        target: "“You were right to bring this up, Elena. Let me look into it more closely before you take anything,” he says seriously.",
        jumbled: ["before", "into", "says", "“You", "he", "it", "Elena.", "Let", "take", "closely", "me", "you", "look", "seriously.", "to", "up,", "more", "anything,”", "were", "this", "right", "bring"],
      },
      {
        target: "I appreciate that he doesn't dismiss my concern, treating it instead as something genuinely worth investigating properly.",
        jumbled: ["dismiss", "as", "I", "something", "appreciate", "he", "investigating", "properly.", "it", "worth", "instead", "that", "genuinely", "treating", "doesn't", "my", "concern,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone taking your concern seriously.",
    mySentenceExample: "The pharmacist took my concern seriously and checked it.",
  },
  {
    number: 4,
    title: "Finding the Error",
    image: null,
    imageNote: "Mr. Diaz looking at his computer screen with a concerned expression, then turning to explain something to Elena.",
    story:
      "After a few minutes of checking, Mr. Diaz confirms that there was, in fact, a data entry error somewhere in the system. Apparently, my prescription was accidentally mixed up with another patient's order that had a similar name on file. “I'm genuinely sorry about this, Elena. If you had taken this dosage, it could have caused you some unpleasant side effects,” he explains honestly. Hearing this makes me feel slightly uneasy, though I'm also relieved I caught the mistake before it actually became a problem. He assures me that correcting this will only take a few more minutes now that the cause has been identified.",
    questions: [
      { text: "What does Mr. Diaz confirm happened?", answer: "A data entry error." },
      { text: "What was Elena's prescription mixed up with?", answer: "Another patient's order with a similar name." },
      { text: "How does Elena feel hearing this explanation?", answer: "Slightly uneasy, but relieved she caught it." },
    ],
    trueFalse: [
      { text: "Mr. Diaz confirms a data entry error occurred.", answer: true },
      { text: "The prescription was mixed up with another patient's order.", answer: true },
      { text: "Mr. Diaz says the wrong dosage would have had no effect.", answer: false },
      { text: "Elena feels only anger and no relief at all.", answer: false },
      { text: "Correcting this will only take a few more minutes.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Diaz confirms that there was, in fact, a data entry error somewhere in the system.",
        jumbled: ["Diaz", "confirms", "fact,", "a", "Mr.", "in", "somewhere", "that", "was,", "the", "system.", "in", "error", "entry", "data", "there"],
      },
      {
        target: "Apparently, my prescription was accidentally mixed up with another patient's order that had a similar name on file.",
        jumbled: ["another", "mixed", "accidentally", "prescription", "on", "a", "Apparently,", "that", "up", "order", "name", "similar", "patient's", "my", "with", "was", "file.", "had"],
      },
      {
        target: "“I'm genuinely sorry about this, Elena. If you had taken this dosage, it could have caused you some unpleasant side effects,” he explains honestly.",
        jumbled: ["dosage,", "If", "you", "this,", "this", "could", "caused", "you", "about", "unpleasant", "effects,”", "genuinely", "it", "explains", "honestly.", "he", "had", "taken", "side", "“I'm", "some", "sorry", "have", "Elena."],
      },
      {
        target: "Hearing this makes me feel slightly uneasy, though I'm also relieved I caught the mistake before it actually became a problem.",
        jumbled: ["uneasy,", "also", "feel", "I", "makes", "problem.", "before", "slightly", "a", "I'm", "me", "it", "actually", "this", "became", "relieved", "caught", "the", "mistake", "Hearing", "though"],
      },
      {
        target: "He assures me that correcting this will only take a few more minutes now that the cause has been identified.",
        jumbled: ["the", "a", "more", "minutes", "now", "this", "that", "take", "cause", "been", "only", "me", "will", "has", "that", "assures", "identified.", "few", "correcting", "He"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling relieved you caught a mistake in time.",
    mySentenceExample: "I felt relieved I caught the mistake in time.",
  },
  {
    number: 5,
    title: "Correcting the Prescription",
    image: null,
    imageNote: "Mr. Diaz preparing a new pill bottle behind the counter while Elena waits nearby, looking more relaxed now.",
    story:
      "Mr. Diaz personally prepares the corrected prescription himself this time, double-checking every detail before sealing the new bag. While waiting, I ask what typically happens in situations like this, curious whether such mix-ups occur often at pharmacies generally. He explains that strict double-checking procedures usually prevent this, though rare human errors can still occasionally slip through the system. “We take this extremely seriously, Elena, and I'll personally be reporting this internally so it gets reviewed properly,” he assures me. I appreciate his honesty, especially since he easily could have downplayed how serious this mistake actually was.",
    questions: [
      { text: "Who prepares the corrected prescription?", answer: "Mr. Diaz, personally." },
      { text: "What does Elena ask Mr. Diaz while waiting?", answer: "Whether such mix-ups happen often." },
      { text: "What does Mr. Diaz say he will do?", answer: "Report it internally so it gets reviewed." },
    ],
    trueFalse: [
      { text: "Mr. Diaz personally prepares the corrected prescription.", answer: true },
      { text: "Elena asks whether mix-ups occur often at pharmacies.", answer: true },
      { text: "Mr. Diaz says errors like this happen constantly.", answer: false },
      { text: "Mr. Diaz says he'll report this internally for review.", answer: true },
      { text: "Elena appreciates his honesty about the mistake.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Diaz personally prepares the corrected prescription himself this time, double-checking every detail before sealing the new bag.",
        jumbled: ["corrected", "the", "the", "bag.", "new", "every", "detail", "himself", "double-checking", "Diaz", "Mr.", "before", "sealing", "personally", "prescription", "this", "time,", "prepares"],
      },
      {
        target: "I ask what typically happens in situations like this, curious whether such mix-ups occur often at pharmacies generally.",
        jumbled: ["this,", "ask", "I", "at", "situations", "whether", "curious", "occur", "mix-ups", "happens", "pharmacies", "often", "in", "generally.", "typically", "such", "like", "what"],
      },
      {
        target: "He explains that strict double-checking procedures usually prevent this, though rare human errors can still occasionally slip through the system.",
        jumbled: ["slip", "usually", "that", "though", "through", "human", "rare", "explains", "double-checking", "occasionally", "this,", "can", "still", "strict", "prevent", "He", "errors", "the", "system.", "procedures"],
      },
      {
        target: "“We take this extremely seriously, Elena, and I'll personally be reporting this internally so it gets reviewed properly,” he assures me.",
        jumbled: ["gets", "assures", "Elena,", "so", "extremely", "personally", "reporting", "internally", "this", "he", "me.", "be", "seriously,", "it", "take", "reviewed", "properly,”", "this", "I'll", "“We", "and"],
      },
      {
        target: "I appreciate his honesty, especially since he easily could have downplayed how serious this mistake actually was.",
        jumbled: ["have", "his", "could", "he", "I", "since", "this", "appreciate", "actually", "especially", "was.", "easily", "serious", "honesty,", "downplayed", "how", "mistake"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone being honest about a mistake instead of hiding it.",
    mySentenceExample: "He was honest about the mistake instead of hiding it.",
  },
  {
    number: 6,
    title: "A Second Check",
    image: null,
    imageNote: "A second pharmacy staff member reviewing the corrected bottle alongside Mr. Diaz, both nodding in agreement.",
    story:
      "Before handing me the new bag, Mr. Diaz asks a colleague to independently verify the corrected prescription, just to be completely certain. His colleague checks the dosage against the original doctor's order, comparing every number carefully one final time. Once she confirms everything matches correctly, Mr. Diaz finally hands me the bag. “Here you go, Elena, everything's been double-checked twice now,” he says, explaining each instruction clearly and slowly this time. He also writes his direct extension on a small card, telling me to call immediately if anything seems even slightly unclear later. This extra layer of caution reassures me considerably, especially given what almost happened only minutes earlier.",
    questions: [
      { text: "What does Mr. Diaz ask a colleague to do?", answer: "Independently verify the corrected prescription." },
      { text: "What does the colleague compare?", answer: "The dosage against the original doctor's order." },
      { text: "What does Mr. Diaz write on a small card?", answer: "His direct extension." },
    ],
    trueFalse: [
      { text: "Mr. Diaz asks a colleague to independently verify the prescription.", answer: true },
      { text: "The colleague compares the dosage against the doctor's order.", answer: true },
      { text: "Mr. Diaz hands Elena the bag without any explanation.", answer: false },
      { text: "Mr. Diaz writes his direct extension on a small card.", answer: true },
      { text: "Elena feels no reassurance from this extra caution.", answer: false },
    ],
    buildSentence: [
      {
        target: "Mr. Diaz asks a colleague to independently verify the corrected prescription, just to be completely certain.",
        jumbled: ["asks", "independently", "just", "to", "the", "certain.", "corrected", "Diaz", "prescription,", "completely", "colleague", "to", "Mr.", "be", "verify", "a"],
      },
      {
        target: "His colleague checks the dosage against the original doctor's order, comparing every number carefully one final time.",
        jumbled: ["against", "every", "dosage", "the", "number", "checks", "colleague", "order,", "doctor's", "original", "time.", "carefully", "His", "comparing", "the", "one", "final"],
      },
      {
        target: "Mr. Diaz finally hands me the bag.",
        jumbled: ["the", "hands", "Mr.", "finally", "me", "Diaz", "bag."],
      },
      {
        target: "“Here you go, Elena, everything's been double-checked twice now,” he says, explaining each instruction clearly and slowly this time.",
        jumbled: ["you", "clearly", "and", "now,”", "explaining", "everything's", "been", "go,", "time.", "Elena,", "twice", "“Here", "this", "says,", "he", "instruction", "each", "double-checked", "slowly"],
      },
      {
        target: "He also writes his direct extension on a small card, telling me to call immediately if anything seems even slightly unclear later.",
        jumbled: ["on", "his", "call", "writes", "telling", "unclear", "immediately", "slightly", "also", "small", "a", "seems", "even", "card,", "later.", "anything", "if", "to", "He", "extension", "me", "direct"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone double-checking something carefully to avoid a mistake.",
    mySentenceExample: "The pharmacist double-checked everything carefully to avoid a mistake.",
  },
  {
    number: 7,
    title: "Talking to My Doctor",
    image: null,
    imageNote: "Elena on the phone at home that evening, notebook and pen nearby, explaining the situation to her doctor's office.",
    story:
      "That evening, I decide to call my doctor's office as well, just to mention what happened at the pharmacy earlier. “Thank you for calling, Elena, the doctor will definitely want to know about this,” the receptionist says, given the potential seriousness involved. I explain the situation clearly, including how it was caught and corrected before I actually took anything. She reassures me that my original prescription itself was correct, and only the pharmacy's internal system had the error. Although the whole experience felt slightly unsettling, I'm genuinely glad everyone involved took it as seriously as they did.",
    questions: [
      { text: "What does Elena decide to do that evening?", answer: "Call her doctor's office." },
      { text: "What does the receptionist say about the doctor?", answer: "That the doctor will likely want to know." },
      { text: "What does the receptionist reassure Elena about?", answer: "That her original prescription was correct." },
    ],
    trueFalse: [
      { text: "Elena decides to call her doctor's office that evening.", answer: true },
      { text: "The receptionist thanks Elena for reporting it.", answer: true },
      { text: "The receptionist says the original prescription was wrong too.", answer: false },
      { text: "Elena explains how the error was caught and corrected.", answer: true },
      { text: "Elena feels glad everyone took this seriously.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, I decide to call my doctor's office as well, just to mention what happened at the pharmacy earlier.",
        jumbled: ["at", "my", "That", "as", "call", "the", "just", "doctor's", "earlier.", "mention", "well,", "evening,", "office", "happened", "I", "to", "decide", "to", "what", "pharmacy"],
      },
      {
        target: "“Thank you for calling, Elena, the doctor will definitely want to know about this,” the receptionist says, given the potential seriousness involved.",
        jumbled: ["for", "definitely", "the", "doctor", "the", "involved.", "seriousness", "given", "want", "says,", "receptionist", "will", "calling,", "about", "potential", "this,”", "“Thank", "to", "the", "you", "know", "Elena,"],
      },
      {
        target: "I explain the situation clearly, including how it was caught and corrected before I actually took anything.",
        jumbled: ["caught", "was", "and", "anything.", "corrected", "actually", "including", "the", "I", "explain", "took", "I", "situation", "how", "clearly,", "it", "before"],
      },
      {
        target: "She reassures me that my original prescription itself was correct, and only the pharmacy's internal system had the error.",
        jumbled: ["reassures", "itself", "and", "She", "me", "system", "original", "that", "the", "had", "pharmacy's", "prescription", "correct,", "error.", "was", "internal", "only", "my", "the"],
      },
      {
        target: "I'm genuinely glad everyone involved took it as seriously as they did.",
        jumbled: ["took", "it", "did.", "as", "genuinely", "as", "involved", "glad", "I'm", "seriously", "everyone", "they"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reporting a problem to make sure it gets fixed properly.",
    mySentenceExample: "I reported the problem to make sure it got fixed properly.",
  },
  {
    number: 8,
    title: "A Follow-Up Call",
    image: null,
    imageNote: "Elena's phone screen showing an incoming call from the pharmacy, her picking it up with a curious expression.",
    story:
      "A few days later, the pharmacy calls to follow up, which honestly surprises me since I hadn't expected any further contact. It's Mr. Diaz himself. “Hi Elena, just checking in on how the new prescription is working,” he says, asking whether the corrected medication has been working properly without any unexpected issues. I confirm everything seems fine so far, and I thank him again for handling the entire situation so professionally. He mentions that the pharmacy has since added an additional verification step specifically for prescriptions with similar patient names. Hearing that something concrete changed because of my situation makes the whole experience feel genuinely worthwhile, in the end.",
    questions: [
      { text: "Who calls Elena a few days later?", answer: "Mr. Diaz." },
      { text: "What does Mr. Diaz check on the call?", answer: "Whether the corrected medication has been working properly." },
      { text: "What has the pharmacy added since this situation?", answer: "An additional verification step for similar patient names." },
    ],
    trueFalse: [
      { text: "The pharmacy calls Elena a few days later to follow up.", answer: true },
      { text: "It's Mr. Diaz himself who calls.", answer: true },
      { text: "Mr. Diaz checks whether the medication is working properly.", answer: true },
      { text: "The pharmacy has added an additional verification step.", answer: true },
      { text: "Elena feels annoyed that they called to follow up.", answer: false },
    ],
    buildSentence: [
      {
        target: "A few days later, the pharmacy calls to follow up, which honestly surprises me since I hadn't expected any further contact.",
        jumbled: ["expected", "to", "follow", "contact.", "since", "A", "any", "surprises", "up,", "I", "days", "which", "hadn't", "me", "honestly", "the", "few", "later,", "calls", "pharmacy", "further"],
      },
      {
        target: "It's Mr. Diaz himself.",
        jumbled: ["Diaz", "It's", "Mr.", "himself."],
      },
      {
        target: "“Hi Elena, just checking in on how the new prescription is working,” he says, asking whether the corrected medication has been working properly without any unexpected issues.",
        jumbled: ["how", "without", "says,", "“Hi", "any", "the", "is", "issues.", "the", "new", "Elena,", "he", "medication", "on", "been", "whether", "properly", "has", "just", "working", "prescription", "working,”", "in", "unexpected", "corrected", "checking", "asking"],
      },
      {
        target: "I confirm everything seems fine so far, and I thank him again for handling the entire situation so professionally.",
        jumbled: ["I", "far,", "I", "and", "for", "seems", "the", "so", "professionally.", "confirm", "thank", "so", "again", "him", "handling", "fine", "situation", "everything", "entire"],
      },
      {
        target: "He mentions that the pharmacy has since added an additional verification step specifically for prescriptions with similar patient names.",
        jumbled: ["similar", "verification", "that", "step", "He", "pharmacy", "for", "specifically", "an", "since", "patient", "mentions", "additional", "prescriptions", "added", "names.", "has", "with", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about receiving a follow-up call after reporting a problem.",
    mySentenceExample: "I received a follow-up call after reporting the problem.",
  },
  {
    number: 9,
    title: "Sharing My Story",
    image: null,
    imageNote: "Elena telling a friend about the experience over coffee, both sitting at a small café table.",
    story:
      "Over coffee with a friend, I mention the whole pharmacy situation, partly as a warning and partly out of genuine relief. “Wow, Elena, I don't think I've ever actually read my own label,” she admits, saying she usually trusts the process completely without a second thought. I explain that, on the other hand, this experience taught me it's always worth double-checking, however busy or trusting you normally feel. She agrees, saying she'll probably start reading labels more carefully herself starting from now on. It feels strange, but sharing this story might actually help prevent a similar mix-up for someone else entirely.",
    questions: [
      { text: "Who does Elena mention the situation to over coffee?", answer: "A friend." },
      { text: "What does the friend admit about her own habits?", answer: "That she rarely checks her labels closely." },
      { text: "What does the friend say she'll start doing?", answer: "Reading labels more carefully." },
    ],
    trueFalse: [
      { text: "Elena mentions the situation to a friend over coffee.", answer: true },
      { text: "The friend admits she rarely checks her own labels closely.", answer: true },
      { text: "Elena feels this experience taught her nothing useful.", answer: false },
      { text: "The friend says she'll start reading labels more carefully.", answer: true },
      { text: "Elena believes sharing this story is completely pointless.", answer: false },
    ],
    buildSentence: [
      {
        target: "Over coffee with a friend, I mention the whole pharmacy situation, partly as a warning and partly out of genuine relief.",
        jumbled: ["warning", "genuine", "pharmacy", "out", "a", "with", "situation,", "whole", "mention", "friend,", "the", "and", "of", "Over", "coffee", "partly", "relief.", "as", "partly", "I", "a"],
      },
      {
        target: "“Wow, Elena, I don't think I've ever actually read my own label,” she admits, saying she usually trusts the process completely without a second thought.",
        jumbled: ["actually", "admits,", "thought.", "label,”", "usually", "second", "without", "don't", "think", "I", "“Wow,", "the", "Elena,", "saying", "trusts", "read", "process", "my", "completely", "a", "I've", "she", "she", "ever", "own"],
      },
      {
        target: "I explain that, on the other hand, this experience taught me it's always worth double-checking, however busy or trusting you normally feel.",
        jumbled: ["worth", "always", "the", "experience", "you", "or", "that,", "I", "other", "me", "however", "taught", "double-checking,", "normally", "hand,", "explain", "feel.", "busy", "trusting", "this", "it's", "on"],
      },
      {
        target: "She agrees, saying she'll probably start reading labels more carefully herself starting from now on.",
        jumbled: ["labels", "carefully", "from", "herself", "now", "agrees,", "She", "starting", "on.", "she'll", "more", "reading", "start", "probably", "saying"],
      },
      {
        target: "It feels strange, but sharing this story might actually help prevent a similar mix-up for someone else entirely.",
        jumbled: ["story", "It", "similar", "but", "strange,", "mix-up", "sharing", "this", "might", "someone", "else", "help", "prevent", "a", "feels", "for", "entirely.", "actually"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about sharing a lesson you learned so it might help someone else.",
    mySentenceExample: "I shared my lesson so it might help someone else too.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Elena at home, calmly organizing her medications on a shelf, a small checklist notebook beside her.",
    story:
      "Looking back on the entire experience, I realize how easily this small mix-up could have turned into something far more serious. If I hadn't checked the label carefully, or if I'd assumed everything was automatically correct, the outcome might have been genuinely dangerous. Instead, staying alert and speaking up calmly allowed Mr. Diaz to actually catch and correct the problem quickly. I've started keeping a small checklist for anything health-related now, the first page titled simply “Elena's Health Checklist,” covering everything from prescriptions to appointment details. In the end, this experience reminded me that questioning something politely is always better than simply assuming it's fine.",
    questions: [
      { text: "What does Elena realize looking back on this experience?", answer: "How easily the mix-up could have turned serious." },
      { text: "What has Elena started keeping now?", answer: "A small checklist for anything health-related." },
      { text: "What does this experience remind Elena of?", answer: "That questioning something politely is better than assuming it's fine." },
    ],
    trueFalse: [
      { text: "Elena realizes this could have turned into something serious.", answer: true },
      { text: "Elena has started keeping a health-related checklist.", answer: true },
      { text: "Elena wishes she had simply assumed everything was fine.", answer: false },
      { text: "Staying alert allowed Mr. Diaz to correct the problem quickly.", answer: true },
      { text: "Elena feels questioning something politely is usually pointless.", answer: false },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire experience, I realize how easily this small mix-up could have turned into something far more serious.",
        jumbled: ["into", "Looking", "serious.", "experience,", "far", "on", "how", "entire", "the", "realize", "back", "more", "something", "easily", "mix-up", "have", "this", "I", "could", "small", "turned"],
      },
      {
        target: "The outcome might have been genuinely dangerous.",
        jumbled: ["been", "The", "genuinely", "might", "have", "outcome", "dangerous."],
      },
      {
        target: "Instead, staying alert and speaking up calmly allowed Mr. Diaz to actually catch and correct the problem quickly.",
        jumbled: ["Diaz", "Instead,", "and", "Mr.", "and", "staying", "allowed", "correct", "the", "catch", "up", "calmly", "actually", "to", "speaking", "problem", "quickly.", "alert"],
      },
      {
        target: "I've started keeping a small checklist for anything health-related now, the first page titled simply “Elena's Health Checklist,” covering everything from prescriptions to appointment details.",
        jumbled: ["everything", "small", "anything", "to", "started", "appointment", "page", "for", "from", "checklist", "“Elena's", "covering", "a", "now,", "first", "titled", "health-related", "Health", "the", "prescriptions", "details.", "keeping", "Checklist,”", "I've", "simply"],
      },
      {
        target: "In the end, this experience reminded me that questioning something politely is always better than simply assuming it's fine.",
        jumbled: ["is", "In", "politely", "than", "the", "me", "simply", "questioning", "better", "that", "experience", "fine.", "end,", "always", "reminded", "something", "it's", "this", "assuming"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from catching a mistake before it caused harm.",
    mySentenceExample: "I learned to always double-check before assuming something is correct.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
