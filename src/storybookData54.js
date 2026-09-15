// B1 Teens digital storybook, Book 54: "Choosing My Own Path"
// Static content -- no Supabase. Sixth book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook54/cover.jpg";

export const STORYBOOK_TITLE = "Choosing My Own Path";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Sana sitting at the kitchen table across from her father, two brochures spread between them, a tense but hopeful conversation happening.";

export const CHARACTERS = [
  { name: "Sana", role: "The narrator, a teenager", look: "Long hair in a braid, paint-stained sleeves, passionate but conflict-avoidant." },
  { name: "Dad", role: "Sana's father", look: "Reading glasses, formal shirt, well-meaning but set in his expectations." },
  { name: "Ms. Okoro", role: "Sana's art teacher", look: "Colorful scarf, paint-splattered apron, encouraging and perceptive." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Two Different Dreams",
    image: null,
    imageNote: "Sana sitting at her desk with a college brochure for engineering on one side and an art portfolio on the other, looking torn.",
    story:
      "For as long as I can remember, my dad has assumed I would eventually study engineering, just like him and my older brother. I've never directly disagreed with this plan, mostly because bringing it up always felt easier avoided than confronted. Lately, though, my art teacher has been encouraging me to consider applying to art school instead. Painting makes me feel genuinely alive in a way that math and science assignments simply never have. If I mention this to my dad, I know it will likely lead to a conversation I've been dreading for years. \"You have to say something, Sana,\" I think. Tonight, sitting between two brochures, I finally admit I can't keep avoiding this decision forever.",
    questions: [
      { text: "What has Sana's dad always assumed about her future?", answer: "That she'd study engineering." },
      { text: "What has Sana's art teacher been encouraging?", answer: "Applying to art school." },
      { text: "How does painting make Sana feel?", answer: "Genuinely alive." },
    ],
    trueFalse: [
      { text: "Sana's dad assumed she would study engineering.", answer: true },
      { text: "Sana has openly disagreed with this plan for years.", answer: false },
      { text: "Sana's art teacher encourages her to consider art school.", answer: true },
      { text: "Painting makes Sana feel genuinely alive.", answer: true },
      { text: "Sana feels ready to avoid this decision forever.", answer: false },
    ],
    buildSentence: [
      {
        target: "For as long as I can remember, my dad has assumed I would eventually study engineering, just like him and my older brother.",
        jumbled: ["my", "can", "as", "would", "older", "assumed", "I", "like", "study", "as", "eventually", "brother.", "For", "my", "engineering,", "and", "dad", "has", "remember,", "I", "just", "long", "him"],
      },
      {
        target: "I've never directly disagreed with this plan, mostly because bringing it up always felt easier avoided than confronted.",
        jumbled: ["never", "avoided", "because", "it", "felt", "up", "bringing", "this", "disagreed", "with", "than", "always", "easier", "mostly", "I've", "confronted.", "directly", "plan,"],
      },
      {
        target: "Painting makes me feel genuinely alive in a way that math and science assignments simply never have.",
        jumbled: ["have.", "a", "assignments", "Painting", "that", "math", "makes", "and", "me", "feel", "in", "alive", "simply", "science", "way", "genuinely", "never"],
      },
      {
        target: "I know it will likely lead to a conversation I've been dreading for years.",
        jumbled: ["for", "conversation", "dreading", "years.", "will", "a", "been", "know", "it", "to", "I", "lead", "I've", "likely"],
      },
      {
        target: "Tonight, sitting between two brochures, I finally admit I can't keep avoiding this decision forever.",
        jumbled: ["I", "can't", "brochures,", "between", "decision", "avoiding", "Tonight,", "this", "I", "admit", "forever.", "sitting", "two", "finally", "keep"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a decision you've been avoiding.",
    mySentenceExample: "I've been avoiding a decision about which classes to choose next year.",
  },
  {
    number: 2,
    title: "Ms. Okoro's Encouragement",
    image: null,
    imageNote: "Ms. Okoro looking through Sana's portfolio with genuine admiration, pointing at a specific painting while Sana watches nervously.",
    story:
      "After class, Ms. Okoro asks me to stay behind to look through my portfolio together more carefully. She points to a painting I made last month, saying it shows genuine talent and a distinctive artistic voice already forming. “Have you thought seriously about applying to art school, Sana?” she asks, watching my reaction closely and thoughtfully. I admit I've thought about it constantly, though I haven't told my parents anything about these feelings yet. She explains applications are due in two months, which means I can't delay this decision much longer. Walking home, her words replay in my mind, mixing excitement with genuine, familiar anxiety.",
    questions: [
      { text: "What does Ms. Okoro ask Sana to do after class?", answer: "Look through her portfolio together." },
      { text: "What does Ms. Okoro say about Sana's painting?", answer: "That it shows genuine talent and a distinctive voice." },
      { text: "When are applications due?", answer: "In two months." },
    ],
    trueFalse: [
      { text: "Ms. Okoro asks Sana to stay behind after class.", answer: true },
      { text: "Ms. Okoro says the painting shows genuine talent.", answer: true },
      { text: "Sana has already told her parents about art school.", answer: false },
      { text: "Applications are due in two months.", answer: true },
      { text: "Sana feels only excitement with no anxiety.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Okoro asks me to stay behind to look through my portfolio together more carefully.",
        jumbled: ["to", "together", "stay", "look", "Ms.", "asks", "to", "carefully.", "behind", "my", "portfolio", "me", "Okoro", "more", "through"],
      },
      {
        target: "She points to a painting I made last month, saying it shows genuine talent and a distinctive artistic voice already forming.",
        jumbled: ["saying", "month,", "forming.", "and", "I", "voice", "talent", "painting", "to", "distinctive", "a", "made", "last", "it", "artistic", "a", "She", "already", "shows", "points", "genuine"],
      },
      {
        target: "“Have you thought seriously about applying to art school, Sana?” she asks, watching my reaction closely and thoughtfully.",
        jumbled: ["my", "school,", "about", "she", "asks,", "seriously", "to", "reaction", "“Have", "and", "thoughtfully.", "you", "applying", "art", "thought", "closely", "watching", "Sana?”"],
      },
      {
        target: "I admit I've thought about it constantly, though I haven't told my parents anything about these feelings yet.",
        jumbled: ["my", "I", "these", "it", "feelings", "thought", "constantly,", "parents", "though", "haven't", "admit", "about", "about", "yet.", "I", "told", "I've", "anything"],
      },
      {
        target: "She explains applications are due in two months, which means I can't delay this decision much longer.",
        jumbled: ["due", "delay", "months,", "two", "longer.", "can't", "explains", "applications", "decision", "She", "in", "which", "I", "this", "are", "much", "means"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone who encouraged you to pursue something you loved.",
    mySentenceExample: "My teacher encouraged me to pursue writing after reading my story.",
  },
  {
    number: 3,
    title: "Practicing the Conversation",
    image: null,
    imageNote: "Sana standing in front of her bedroom mirror, practicing what to say, her portfolio held nervously against her chest.",
    story:
      "That night, I stand in front of my mirror, rehearsing exactly how I'll bring this up with my dad tomorrow. Every version of the conversation I imagine ends with him looking disappointed, or worse, genuinely hurt by my decision. I remind myself that avoiding this conversation only delays an inevitable moment, not prevents it entirely. If I could show him my portfolio first, maybe he would understand why this matters so much to me. I practice specific phrases, trying to sound confident rather than apologetic about something I actually care about deeply. \"You can do this, Sana,\" I whisper to my reflection. Despite hours of rehearsal, I still don't feel remotely ready for tomorrow's actual conversation.",
    questions: [
      { text: "What does Sana do that night?", answer: "Rehearses how to bring it up with her dad." },
      { text: "How does Sana imagine the conversation ending?", answer: "With her dad disappointed or hurt." },
      { text: "What does Sana remind herself about avoiding the conversation?", answer: "That it only delays the inevitable, not prevents it." },
    ],
    trueFalse: [
      { text: "Sana rehearses the conversation in front of her mirror.", answer: true },
      { text: "Sana imagines the conversation going perfectly every time.", answer: false },
      { text: "Sana reminds herself avoiding this only delays it.", answer: true },
      { text: "Sana practices sounding confident rather than apologetic.", answer: true },
      { text: "Sana feels completely ready after hours of practice.", answer: false },
    ],
    buildSentence: [
      {
        target: "That night, I stand in front of my mirror, rehearsing exactly how I'll bring this up with my dad tomorrow.",
        jumbled: ["of", "stand", "my", "exactly", "up", "That", "my", "night,", "tomorrow.", "with", "this", "rehearsing", "dad", "I'll", "front", "bring", "mirror,", "how", "I", "in"],
      },
      {
        target: "Every version of the conversation I imagine ends with him looking disappointed, or worse, genuinely hurt by my decision.",
        jumbled: ["genuinely", "him", "the", "with", "imagine", "conversation", "version", "hurt", "ends", "Every", "disappointed,", "worse,", "decision.", "I", "by", "of", "looking", "or", "my"],
      },
      {
        target: "Maybe he would understand why this matters so much to me.",
        jumbled: ["why", "he", "understand", "to", "much", "so", "would", "this", "matters", "me.", "Maybe"],
      },
      {
        target: "I practice specific phrases, trying to sound confident rather than apologetic about something I actually care about deeply.",
        jumbled: ["to", "confident", "I", "rather", "about", "I", "specific", "about", "sound", "care", "apologetic", "actually", "than", "phrases,", "trying", "something", "practice", "deeply."],
      },
      {
        target: "Despite hours of rehearsal, I still don't feel remotely ready for tomorrow's actual conversation.",
        jumbled: ["Despite", "still", "don't", "actual", "remotely", "rehearsal,", "for", "feel", "ready", "hours", "I", "of", "conversation.", "tomorrow's"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about practicing a difficult conversation before having it.",
    mySentenceExample: "I practiced a difficult conversation before talking to my parents about my grades.",
  },
  {
    number: 4,
    title: "The Conversation Begins",
    image: null,
    imageNote: "Sana sitting across from her dad at the kitchen table, her portfolio open between them, both looking serious but attentive.",
    story:
      "The next evening, I ask Dad if we can talk about something important, my voice noticeably shaking as I speak. He sets down his newspaper immediately, giving me his full attention in a way that makes this feel even more real. I explain, as clearly as I can, how deeply painting matters to me and how engineering never felt genuinely right. His expression shifts from confusion to something harder to read, somewhere between concern and quiet disappointment. “I always assumed you enjoyed the engineering path we discussed, Sana,” he says slowly, clearly processing this unexpected shift. I take a deep breath, knowing this conversation has only just truly begun.",
    questions: [
      { text: "What does Sana ask her dad?", answer: "If they can talk about something important." },
      { text: "How does Sana's voice sound as she speaks?", answer: "Noticeably shaking." },
      { text: "What does Dad say he always assumed?", answer: "That she enjoyed the engineering path." },
    ],
    trueFalse: [
      { text: "Sana asks her dad if they can talk.", answer: true },
      { text: "Sana's voice sounds completely steady and calm.", answer: false },
      { text: "Dad gives Sana his full attention.", answer: true },
      { text: "Dad says he always assumed Sana enjoyed engineering.", answer: true },
      { text: "This conversation feels completely finished already.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next evening, I ask Dad if we can talk about something important, my voice noticeably shaking as I speak.",
        jumbled: ["something", "shaking", "can", "The", "I", "evening,", "about", "ask", "we", "speak.", "important,", "next", "talk", "my", "as", "Dad", "voice", "if", "noticeably", "I"],
      },
      {
        target: "He sets down his newspaper immediately, giving me his full attention in a way that makes this feel even more real.",
        jumbled: ["down", "way", "a", "giving", "even", "He", "that", "makes", "this", "feel", "attention", "immediately,", "full", "me", "sets", "real.", "his", "in", "his", "newspaper", "more"],
      },
      {
        target: "I explain, as clearly as I can, how deeply painting matters to me and how engineering never felt genuinely right.",
        jumbled: ["as", "as", "me", "how", "painting", "to", "I", "explain,", "never", "right.", "and", "engineering", "felt", "deeply", "how", "can,", "I", "clearly", "matters", "genuinely"],
      },
      {
        target: "His expression shifts from confusion to something harder to read, somewhere between concern and quiet disappointment.",
        jumbled: ["to", "something", "and", "expression", "to", "from", "concern", "quiet", "His", "shifts", "read,", "somewhere", "disappointment.", "harder", "between", "confusion"],
      },
      {
        target: "“I always assumed you enjoyed the engineering path we discussed, Sana,” he says slowly, clearly processing this unexpected shift.",
        jumbled: ["this", "you", "he", "always", "says", "unexpected", "shift.", "slowly,", "“I", "processing", "engineering", "assumed", "we", "the", "Sana,”", "path", "enjoyed", "clearly", "discussed,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about beginning a conversation that felt difficult but necessary.",
    mySentenceExample: "I began a difficult but necessary conversation with my parents about my future.",
  },
  {
    number: 5,
    title: "Dad's Concerns",
    image: null,
    imageNote: "Dad leaning forward at the table, speaking earnestly while gesturing with his hands, Sana listening with a mix of frustration and understanding.",
    story:
      "Dad explains his worries carefully, mentioning financial stability and how competitive the art world can genuinely be. He isn't trying to be unkind, I realize, only expressing fears rooted in wanting a secure future for me. “Art is a wonderful hobby, Sana, but can it really support you long-term?” he asks, not dismissively, but with real concern. I feel frustration building, though I try reminding myself that understanding his perspective doesn't mean automatically agreeing with it. I explain that many artists build sustainable careers, mentioning illustration, design, and teaching as realistic possibilities. Although he doesn't look convinced yet, he does seem willing to actually listen now.",
    questions: [
      { text: "What worries does Dad explain to Sana?", answer: "Financial stability and how competitive the art world is." },
      { text: "How does Dad ask about art supporting her long-term?", answer: "Can it really support you long-term?" },
      { text: "What does Sana mention as realistic possibilities?", answer: "Illustration, design, and teaching." },
    ],
    trueFalse: [
      { text: "Dad mentions financial stability as a worry.", answer: true },
      { text: "Dad dismisses Sana's feelings completely and unkindly.", answer: false },
      { text: "Sana mentions illustration, design, and teaching.", answer: true },
      { text: "Dad seems completely convinced immediately.", answer: false },
      { text: "Dad seems willing to actually listen now.", answer: true },
    ],
    buildSentence: [
      {
        target: "Dad explains his worries carefully, mentioning financial stability and how competitive the art world can genuinely be.",
        jumbled: ["the", "financial", "competitive", "explains", "world", "be.", "Dad", "genuinely", "his", "carefully,", "how", "and", "can", "art", "mentioning", "worries", "stability"],
      },
      {
        target: "He isn't trying to be unkind, I realize, only expressing fears rooted in wanting a secure future for me.",
        jumbled: ["only", "a", "to", "be", "He", "unkind,", "rooted", "I", "isn't", "future", "realize,", "trying", "secure", "for", "fears", "me.", "in", "wanting", "expressing"],
      },
      {
        target: "“Art is a wonderful hobby, Sana, but can it really support you long-term?” he asks, not dismissively, but with real concern.",
        jumbled: ["you", "but", "dismissively,", "a", "but", "long-term?”", "can", "really", "not", "with", "it", "hobby,", "he", "real", "wonderful", "is", "support", "concern.", "asks,", "“Art", "Sana,"],
      },
      {
        target: "I feel frustration building, though I try reminding myself that understanding his perspective doesn't mean automatically agreeing with it.",
        jumbled: ["agreeing", "building,", "understanding", "automatically", "myself", "his", "it.", "perspective", "with", "frustration", "I", "reminding", "I", "doesn't", "though", "try", "that", "mean", "feel"],
      },
      {
        target: "I explain that many artists build sustainable careers, mentioning illustration, design, and teaching as realistic possibilities.",
        jumbled: ["mentioning", "and", "careers,", "that", "many", "sustainable", "illustration,", "design,", "I", "possibilities.", "build", "realistic", "explain", "as", "teaching", "artists"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about understanding someone's worry even if you disagree with it.",
    mySentenceExample: "I understood my parent's worry even though I disagreed with the conclusion.",
  },
  {
    number: 6,
    title: "Showing My Work",
    image: null,
    imageNote: "Dad flipping through Sana's portfolio at the table, his expression softening with visible surprise as he examines each painting closely.",
    story:
      "I bring out my portfolio, something I've never actually shown him in this much detail before. He flips through slowly, pausing longer on certain pieces, his expression shifting from politeness to genuine surprise. “I didn't realize your skill had developed this much, Sana,” he admits, sounding almost embarrassed about not knowing sooner. I explain how many hours I've spent practicing after school, hours he assumed were spent on homework instead. Seeing tangible proof of my dedication seems to shift something in how seriously he's taking this conversation now. For the first time tonight, I feel like he's seeing me clearly, not just his assumptions about me.",
    questions: [
      { text: "What does Sana bring out during the conversation?", answer: "Her portfolio." },
      { text: "How does Dad's expression change looking through it?", answer: "From politeness to genuine surprise." },
      { text: "What does Dad admit about Sana's skill?", answer: "That he didn't realize it had developed this much." },
    ],
    trueFalse: [
      { text: "Sana brings out her portfolio.", answer: true },
      { text: "Dad's expression shows genuine surprise looking through it.", answer: true },
      { text: "Dad admits he didn't realize her skill had developed this much.", answer: true },
      { text: "Dad assumed Sana's hours were spent on homework.", answer: true },
      { text: "Sana feels Dad still sees only his assumptions of her.", answer: false },
    ],
    buildSentence: [
      {
        target: "I bring out my portfolio, something I've never actually shown him in this much detail before.",
        jumbled: ["my", "much", "in", "shown", "out", "this", "before.", "portfolio,", "him", "I", "something", "never", "bring", "detail", "actually", "I've"],
      },
      {
        target: "He flips through slowly, pausing longer on certain pieces, his expression shifting from politeness to genuine surprise.",
        jumbled: ["shifting", "politeness", "pausing", "slowly,", "pieces,", "surprise.", "expression", "his", "flips", "from", "on", "genuine", "through", "He", "to", "certain", "longer"],
      },
      {
        target: "“I didn't realize your skill had developed this much, Sana,” he admits, sounding almost embarrassed about not knowing sooner.",
        jumbled: ["“I", "admits,", "almost", "skill", "had", "much,", "not", "knowing", "this", "developed", "didn't", "realize", "your", "Sana,”", "about", "he", "sounding", "embarrassed", "sooner."],
      },
      {
        target: "I explain how many hours I've spent practicing after school, hours he assumed were spent on homework instead.",
        jumbled: ["on", "practicing", "spent", "spent", "how", "were", "after", "assumed", "school,", "many", "homework", "hours", "explain", "I've", "he", "instead.", "hours", "I"],
      },
      {
        target: "Seeing tangible proof of my dedication seems to shift something in how seriously he's taking this conversation now.",
        jumbled: ["of", "Seeing", "how", "seriously", "he's", "tangible", "now.", "taking", "dedication", "in", "this", "shift", "something", "conversation", "my", "seems", "to", "proof"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about showing someone proof of your effort or dedication.",
    mySentenceExample: "I showed my parents proof of my dedication through my grades and projects.",
  },
  {
    number: 7,
    title: "A Compromise",
    image: null,
    imageNote: "Dad and Sana sitting closer together at the table now, both looking at a laptop screen showing an art school's curriculum, engaged in discussion.",
    story:
      "Dad suggests we research together, looking specifically at career outcomes for graduates from serious art programs. Together, we find statistics showing many art graduates do build stable, successful careers across various creative industries. He remains cautious. “Just consider it, Sana,” he adds, suggesting I also apply to one or two universities offering both art and a practical minor. Although this isn't exactly what I originally hoped for, it feels like genuine middle ground rather than simple defeat. If this compromise lets me pursue painting while easing his concerns somewhat, that seems worth seriously considering. We spend another hour researching programs together, something I never expected tonight's conversation to include.",
    questions: [
      { text: "What does Dad suggest they do together?", answer: "Research career outcomes for art program graduates." },
      { text: "What does Dad suggest Sana also do?", answer: "Apply to a university offering both art and a practical minor." },
      { text: "How does Sana feel about this compromise?", answer: "Like genuine middle ground, worth considering." },
    ],
    trueFalse: [
      { text: "Dad suggests researching career outcomes together.", answer: true },
      { text: "They find no evidence that art careers can be stable.", answer: false },
      { text: "Dad suggests applying to schools with a practical minor too.", answer: true },
      { text: "Sana feels this compromise is simple defeat.", answer: false },
      { text: "They spend another hour researching programs together.", answer: true },
    ],
    buildSentence: [
      {
        target: "Dad suggests we research together, looking specifically at career outcomes for graduates from serious art programs.",
        jumbled: ["looking", "at", "for", "we", "suggests", "research", "career", "Dad", "art", "graduates", "programs.", "specifically", "outcomes", "serious", "together,", "from"],
      },
      {
        target: "Together, we find statistics showing many art graduates do build stable, successful careers across various creative industries.",
        jumbled: ["showing", "build", "various", "find", "many", "careers", "we", "art", "Together,", "statistics", "across", "stable,", "successful", "do", "graduates", "creative", "industries."],
      },
      {
        target: "“Just consider it, Sana,” he adds, suggesting I also apply to one or two universities offering both art and a practical minor.",
        jumbled: ["two", "consider", "offering", "it,", "practical", "he", "art", "universities", "Sana,”", "apply", "a", "also", "minor.", "or", "and", "one", "suggesting", "“Just", "adds,", "I", "to", "both"],
      },
      {
        target: "It feels like genuine middle ground rather than simple defeat.",
        jumbled: ["than", "like", "rather", "It", "ground", "simple", "feels", "middle", "genuine", "defeat."],
      },
      {
        target: "That seems worth seriously considering.",
        jumbled: ["worth", "seems", "seriously", "That", "considering."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finding a compromise with someone you disagreed with.",
    mySentenceExample: "I found a compromise with my parents about my weekend plans.",
  },
  {
    number: 8,
    title: "Telling Ms. Okoro",
    image: null,
    imageNote: "Sana excitedly telling Ms. Okoro about the conversation with her dad, the teacher smiling warmly and nodding encouragingly.",
    story:
      "The next day, I tell Ms. Okoro everything that happened during our long conversation the night before. She listens with genuine interest, smiling warmly when I mention that Dad actually looked through my entire portfolio. “Compromises aren't failures, Sana. Sometimes they're just the beginning of a longer journey,” she reminds me kindly. She offers to help me research programs that combine strong art training with practical, career-focused coursework. I feel a wave of relief knowing I have support both at home now and here at school. This entire experience is teaching me that difficult conversations, however uncomfortable, can genuinely lead somewhere worthwhile.",
    questions: [
      { text: "Who does Sana tell about the conversation?", answer: "Ms. Okoro." },
      { text: "What does Ms. Okoro say about compromises?", answer: "That they aren't failures, just the beginning of a longer journey." },
      { text: "What does Ms. Okoro offer to help with?", answer: "Researching programs combining art training with practical coursework." },
    ],
    trueFalse: [
      { text: "Sana tells Ms. Okoro about the conversation.", answer: true },
      { text: "Ms. Okoro says compromises are failures.", answer: false },
      { text: "Ms. Okoro offers to help research programs.", answer: true },
      { text: "Sana feels a wave of relief now.", answer: true },
      { text: "Sana feels this experience taught her nothing valuable.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next day, I tell Ms. Okoro everything that happened during our long conversation the night before.",
        jumbled: ["the", "Okoro", "day,", "happened", "our", "during", "Ms.", "everything", "conversation", "before.", "tell", "night", "The", "long", "next", "that", "I"],
      },
      {
        target: "She listens with genuine interest, smiling warmly when I mention that Dad actually looked through my entire portfolio.",
        jumbled: ["looked", "She", "mention", "listens", "when", "actually", "through", "smiling", "portfolio.", "that", "my", "Dad", "interest,", "entire", "with", "I", "warmly", "genuine"],
      },
      {
        target: "“Compromises aren't failures, Sana. Sometimes they're just the beginning of a longer journey,” she reminds me kindly.",
        jumbled: ["the", "beginning", "me", "journey,”", "of", "reminds", "longer", "aren't", "failures,", "a", "“Compromises", "she", "just", "Sometimes", "Sana.", "they're", "kindly."],
      },
      {
        target: "She offers to help me research programs that combine strong art training with practical, career-focused coursework.",
        jumbled: ["training", "to", "with", "programs", "that", "She", "coursework.", "career-focused", "offers", "me", "art", "help", "combine", "research", "strong", "practical,"],
      },
      {
        target: "I feel a wave of relief knowing I have support both at home now and here at school.",
        jumbled: ["a", "both", "here", "I", "of", "at", "at", "I", "now", "school.", "support", "have", "knowing", "home", "and", "relief", "feel", "wave"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a difficult experience that ended up teaching you something valuable.",
    mySentenceExample: "A difficult experience with my grades taught me the value of asking for help.",
  },
  {
    number: 9,
    title: "Choosing Programs Together",
    image: null,
    imageNote: "Sana and Dad sitting together on the living room couch, reviewing a shortlist of universities on a laptop, both engaged and collaborative.",
    story:
      "Over the following weeks, Dad and I spend several evenings researching universities that offer exactly the combination we discussed. He asks thoughtful questions during our research, genuinely trying to understand this world that once felt completely foreign to him. I notice him researching art career statistics independently too, clearly wanting to feel more informed and confident about this decision. We narrow our list down to four programs, each offering strong art training alongside practical, employable skills. Watching him engage this seriously with something that matters so much to me feels genuinely meaningful. \"This is working, Sana,\" I think, watching him lean over his laptop. Our relationship, I realize, has actually grown stronger through navigating this disagreement honestly together.",
    questions: [
      { text: "What do Sana and Dad do over the following weeks?", answer: "Research universities together." },
      { text: "What does Dad do independently?", answer: "Research art career statistics on his own." },
      { text: "How many programs do they narrow their list down to?", answer: "Four." },
    ],
    trueFalse: [
      { text: "Sana and Dad research universities together.", answer: true },
      { text: "Dad researches art career statistics independently too.", answer: true },
      { text: "They narrow their list down to four programs.", answer: true },
      { text: "Sana feels their relationship has grown weaker.", answer: false },
      { text: "Dad shows no interest in understanding this world.", answer: false },
    ],
    buildSentence: [
      {
        target: "Over the following weeks, Dad and I spend several evenings researching universities that offer exactly the combination we discussed.",
        jumbled: ["the", "following", "and", "that", "Over", "the", "evenings", "universities", "we", "several", "exactly", "combination", "offer", "discussed.", "spend", "weeks,", "researching", "Dad", "I"],
      },
      {
        target: "He asks thoughtful questions during our research, genuinely trying to understand this world that once felt completely foreign to him.",
        jumbled: ["to", "He", "genuinely", "questions", "him.", "trying", "world", "felt", "asks", "foreign", "our", "this", "completely", "once", "that", "during", "understand", "research,", "thoughtful", "to"],
      },
      {
        target: "I notice him researching art career statistics independently too, clearly wanting to feel more informed and confident about this decision.",
        jumbled: ["notice", "independently", "statistics", "clearly", "confident", "wanting", "art", "too,", "researching", "and", "informed", "I", "career", "him", "this", "about", "feel", "to", "more", "decision."],
      },
      {
        target: "Watching him engage this seriously with something that matters so much to me feels genuinely meaningful.",
        jumbled: ["matters", "engage", "him", "so", "genuinely", "this", "Watching", "with", "feels", "meaningful.", "to", "seriously", "that", "me", "much", "something"],
      },
      {
        target: "Our relationship, I realize, has actually grown stronger through navigating this disagreement honestly together.",
        jumbled: ["Our", "I", "stronger", "together.", "relationship,", "has", "this", "grown", "realize,", "navigating", "disagreement", "honestly", "through", "actually"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a relationship that grew stronger through disagreement.",
    mySentenceExample: "My friendship grew stronger through disagreement when we talked honestly.",
  },
  {
    number: 10,
    title: "Submitting My Application",
    image: null,
    imageNote: "Sana sitting at her laptop, finger hovering over the submit button for her art school application, Dad standing behind her with a proud smile.",
    story:
      "Tonight, I sit at my laptop, finger hovering over the submit button for my first-choice art program application. Dad stands behind me, having offered to be there when I finally send it, something I never expected weeks ago. “I'm proud of you, Sana, for knowing what you want and fighting for it respectfully,” he says quietly. I press submit, and something settles inside me, a mixture of excitement, nervousness, and genuine gratitude for how far we've come. This journey taught me that choosing my own path didn't mean rejecting my family, only inviting them to understand it. If I hadn't found the courage to speak that first evening, none of this progress would exist.",
    questions: [
      { text: "What is Sana about to do tonight?", answer: "Submit her first-choice art program application." },
      { text: "What does Dad say he's proud of?", answer: "That she knows what she wants and fights for it respectfully." },
      { text: "What did this journey teach Sana about choosing her own path?", answer: "That it didn't mean rejecting her family, only inviting them to understand it." },
    ],
    trueFalse: [
      { text: "Sana is about to submit her application.", answer: true },
      { text: "Dad refuses to be present for this moment.", answer: false },
      { text: "Dad says he's proud of her for fighting respectfully.", answer: true },
      { text: "Sana learned choosing her path meant rejecting her family.", answer: false },
      { text: "Sana feels grateful for how far they've come.", answer: true },
    ],
    buildSentence: [
      {
        target: "Tonight, I sit at my laptop, finger hovering over the submit button for my first-choice art program application.",
        jumbled: ["button", "Tonight,", "my", "sit", "the", "over", "hovering", "application.", "my", "program", "art", "I", "laptop,", "first-choice", "at", "submit", "finger", "for"],
      },
      {
        target: "Dad stands behind me, having offered to be there when I finally send it, something I never expected weeks ago.",
        jumbled: ["send", "behind", "finally", "having", "there", "offered", "stands", "me,", "ago.", "expected", "something", "weeks", "be", "when", "to", "Dad", "never", "I", "it,", "I"],
      },
      {
        target: "“I'm proud of you, Sana, for knowing what you want and fighting for it respectfully,” he says quietly.",
        jumbled: ["it", "quietly.", "says", "Sana,", "want", "of", "knowing", "what", "fighting", "for", "you", "for", "respectfully,”", "“I'm", "proud", "you,", "and", "he"],
      },
      {
        target: "I press submit, and something settles inside me, a mixture of excitement, nervousness, and genuine gratitude for how far we've come.",
        jumbled: ["settles", "how", "a", "far", "genuine", "of", "we've", "and", "nervousness,", "gratitude", "come.", "excitement,", "I", "and", "mixture", "submit,", "press", "for", "inside", "me,", "something"],
      },
      {
        target: "This journey taught me that choosing my own path didn't mean rejecting my family, only inviting them to understand it.",
        jumbled: ["my", "This", "choosing", "my", "understand", "taught", "journey", "me", "family,", "only", "to", "mean", "rejecting", "path", "own", "that", "it.", "inviting", "didn't", "them"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a moment when you finally acted on a decision you'd been considering.",
    mySentenceExample: "I finally acted on my decision to try out for the school play.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
