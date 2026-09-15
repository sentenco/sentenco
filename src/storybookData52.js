// B1 Teens digital storybook, Book 52: "The Anxiety Before the Presentation"
// Static content -- no Supabase. Fourth book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook52/cover.jpg";

export const STORYBOOK_TITLE = "The Anxiety Before the Presentation";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Aisha standing alone in an empty classroom, practicing in front of a whiteboard with note cards shaking slightly in her hands, afternoon light through the windows.";

export const CHARACTERS = [
  { name: "Aisha", role: "The narrator, a teenager", look: "Neat braids, cardigan, thoughtful and prone to overthinking under pressure." },
  { name: "Ms. Whitfield", role: "Aisha's English teacher", look: "Patterned scarf, calm voice, perceptive and supportive." },
  { name: "Devon", role: "Aisha's classmate", look: "Backpack covered in pins, relaxed manner, unexpectedly understanding." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Assignment",
    image: null,
    imageNote: "Ms. Whitfield writing 'Individual Presentations - Friday' on the whiteboard while Aisha stares at it with a sinking expression.",
    story:
      "Ms. Whitfield announces that our next assignment requires each of us to present a research topic alone in front of the class. My stomach immediately tightens, a familiar, uncomfortable sensation whenever public speaking gets mentioned in any context. While other students seem only mildly annoyed by the assignment, I feel something closer to genuine panic building inside me. I've always struggled with presentations, my voice shaking and my mind going completely blank under pressure. If I could choose any assignment except this one, I honestly would, without hesitation or regret. \"Five days, Aisha,\" I remind myself. Friday feels impossibly close already, even though it's technically still five days away.",
    questions: [
      { text: "What does the assignment require each student to do?", answer: "Present a research topic alone in front of the class." },
      { text: "How does Aisha's stomach react to the news?", answer: "It tightens immediately." },
      { text: "What has Aisha always struggled with?", answer: "Presentations." },
    ],
    trueFalse: [
      { text: "The assignment requires an individual presentation.", answer: true },
      { text: "Aisha feels completely unbothered by this news.", answer: false },
      { text: "Aisha has always struggled with presentations.", answer: true },
      { text: "Other students seem only mildly annoyed.", answer: true },
      { text: "Friday feels comfortably far away to Aisha.", answer: false },
    ],
    buildSentence: [
      {
        target: "Ms. Whitfield announces that our next assignment requires each of us to present a research topic alone in front of the class.",
        jumbled: ["next", "requires", "to", "of", "present", "front", "in", "topic", "announces", "our", "Whitfield", "Ms.", "of", "us", "each", "class.", "alone", "the", "research", "a", "assignment", "that"],
      },
      {
        target: "My stomach immediately tightens, a familiar, uncomfortable sensation whenever public speaking gets mentioned in any context.",
        jumbled: ["any", "context.", "tightens,", "familiar,", "stomach", "a", "mentioned", "whenever", "immediately", "sensation", "public", "My", "speaking", "uncomfortable", "gets", "in"],
      },
      {
        target: "I feel something closer to genuine panic building inside me.",
        jumbled: ["panic", "inside", "I", "closer", "to", "something", "feel", "building", "me.", "genuine"],
      },
      {
        target: "I honestly would, without hesitation or regret.",
        jumbled: ["without", "or", "honestly", "would,", "I", "hesitation", "regret."],
      },
      {
        target: "Friday feels impossibly close already, even though it's technically still five days away.",
        jumbled: ["technically", "impossibly", "days", "even", "Friday", "already,", "away.", "five", "feels", "it's", "though", "still", "close"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an assignment or task that made you feel nervous.",
    mySentenceExample: "A speaking assignment made me feel nervous when I first heard about it.",
  },
  {
    number: 2,
    title: "Avoiding the Inevitable",
    image: null,
    imageNote: "Aisha sitting at her desk at home, staring at a blank document on her laptop, notes scattered but untouched around her.",
    story:
      "That evening, I open my laptop to start researching, but I find myself scrolling through unrelated websites instead. Somehow, cleaning my entire room suddenly feels more urgent than actually preparing for something that terrifies me. I know avoiding this won't make Friday disappear, but knowing something logically doesn't always change how I behave. By midnight, I've accomplished almost nothing related to my actual assignment, just a spotless room and wasted hours. Frustrated with myself, I finally write down a topic, though even that small step feels exhausting somehow. \"Tomorrow, Aisha,\" I promise myself, and I'll actually start working on this instead of avoiding it completely.",
    questions: [
      { text: "What does Aisha do instead of researching?", answer: "Scrolls through unrelated websites and cleans her room." },
      { text: "What does Aisha realize about avoiding the assignment?", answer: "That it won't make Friday disappear." },
      { text: "What has Aisha accomplished by midnight?", answer: "Almost nothing -- just a spotless room." },
    ],
    trueFalse: [
      { text: "Aisha scrolls through unrelated websites instead.", answer: true },
      { text: "Aisha immediately starts researching without any delay.", answer: false },
      { text: "Aisha realizes avoiding this won't make Friday disappear.", answer: true },
      { text: "Aisha has accomplished almost nothing by midnight.", answer: true },
      { text: "Aisha feels energized rather than exhausted writing the topic.", answer: false },
    ],
    buildSentence: [
      {
        target: "That evening, I open my laptop to start researching, but I find myself scrolling through unrelated websites instead.",
        jumbled: ["That", "open", "but", "laptop", "through", "to", "instead.", "scrolling", "I", "myself", "unrelated", "websites", "researching,", "find", "evening,", "start", "I", "my"],
      },
      {
        target: "Somehow, cleaning my entire room suddenly feels more urgent than actually preparing for something that terrifies me.",
        jumbled: ["for", "feels", "suddenly", "cleaning", "Somehow,", "urgent", "more", "something", "room", "than", "actually", "my", "me.", "that", "terrifies", "preparing", "entire"],
      },
      {
        target: "I know avoiding this won't make Friday disappear, but knowing something logically doesn't always change how I behave.",
        jumbled: ["behave.", "change", "know", "make", "but", "won't", "Friday", "logically", "knowing", "I", "avoiding", "how", "something", "always", "disappear,", "doesn't", "this", "I"],
      },
      {
        target: "By midnight, I've accomplished almost nothing related to my actual assignment, just a spotless room and wasted hours.",
        jumbled: ["hours.", "By", "a", "almost", "related", "and", "assignment,", "my", "I've", "accomplished", "midnight,", "wasted", "spotless", "just", "actual", "to", "nothing", "room"],
      },
      {
        target: "Frustrated with myself, I finally write down a topic, though even that small step feels exhausting somehow.",
        jumbled: ["I", "even", "somehow.", "finally", "step", "feels", "a", "with", "write", "small", "Frustrated", "topic,", "that", "exhausting", "though", "myself,", "down"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about avoiding something you knew you needed to do.",
    mySentenceExample: "I avoided studying even though I knew I needed to prepare.",
  },
  {
    number: 3,
    title: "Talking to Ms. Whitfield",
    image: null,
    imageNote: "Aisha standing nervously at Ms. Whitfield's desk after class, the teacher listening with a kind, attentive expression.",
    story:
      "After class the next day, I gather enough courage to admit my anxiety about the presentation to Ms. Whitfield directly. She listens patiently, nodding as I explain how my voice shakes and my thoughts scatter whenever I'm in front of people. Rather than dismissing my concerns, she shares that many students experience exactly this same fear before presenting. “Would it help if you practiced in front of just me first, Aisha, before the actual presentation?” she offers kindly. Relief washes over me instantly, since practicing with one person feels dramatically less terrifying than facing the entire class immediately. We schedule a practice session for Thursday, giving me something concrete to work toward.",
    questions: [
      { text: "What does Aisha admit to Ms. Whitfield?", answer: "Her anxiety about the presentation." },
      { text: "What does Ms. Whitfield say about other students?", answer: "That many experience the same fear." },
      { text: "What does Ms. Whitfield offer Aisha?", answer: "To practice in front of just her first." },
    ],
    trueFalse: [
      { text: "Aisha admits her anxiety to Ms. Whitfield.", answer: true },
      { text: "Ms. Whitfield dismisses Aisha's concerns entirely.", answer: false },
      { text: "Ms. Whitfield says many students share this same fear.", answer: true },
      { text: "Ms. Whitfield offers to let Aisha practice with her first.", answer: true },
      { text: "Aisha feels this offer makes things worse.", answer: false },
    ],
    buildSentence: [
      {
        target: "I gather enough courage to admit my anxiety about the presentation to Ms. Whitfield directly.",
        jumbled: ["anxiety", "the", "I", "to", "to", "my", "gather", "courage", "about", "presentation", "directly.", "Ms.", "admit", "enough", "Whitfield"],
      },
      {
        target: "She listens patiently, nodding as I explain how my voice shakes and my thoughts scatter whenever I'm in front of people.",
        jumbled: ["my", "listens", "people.", "my", "voice", "explain", "how", "shakes", "scatter", "thoughts", "patiently,", "as", "nodding", "She", "of", "I'm", "and", "in", "I", "whenever", "front"],
      },
      {
        target: "Rather than dismissing my concerns, she shares that many students experience exactly this same fear before presenting.",
        jumbled: ["exactly", "students", "that", "she", "concerns,", "fear", "same", "presenting.", "experience", "this", "my", "before", "many", "than", "dismissing", "shares", "Rather"],
      },
      {
        target: "“Would it help if you practiced in front of just me first, Aisha, before the actual presentation?” she offers kindly.",
        jumbled: ["kindly.", "if", "of", "you", "practiced", "offers", "just", "it", "front", "presentation?”", "in", "actual", "Aisha,", "the", "“Would", "me", "first,", "she", "help", "before"],
      },
      {
        target: "Relief washes over me instantly, since practicing with one person feels dramatically less terrifying than facing the entire class immediately.",
        jumbled: ["Relief", "the", "practicing", "feels", "washes", "less", "immediately.", "over", "with", "class", "than", "since", "facing", "person", "instantly,", "entire", "terrifying", "dramatically", "me", "one"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about telling someone about a fear you had.",
    mySentenceExample: "I told my teacher about my fear of speaking in front of others.",
  },
  {
    number: 4,
    title: "Preparing the Content",
    image: null,
    imageNote: "Aisha sitting at her desk surrounded by research notes and index cards, highlighting key points, focused and determined.",
    story:
      "With a concrete plan in place, I finally dive into researching my topic properly, focused entirely on ocean conservation. Once I actually start, I realize the material genuinely interests me, which somehow makes the process less painful overall. I organize my research into clear sections, writing key points on index cards to help me stay on track later. While writing, I occasionally forget about the presentation itself, absorbed instead in learning fascinating facts about coral reefs. By evening, I have a solid outline, complete with statistics, images, and a clear structure for delivery. \"The content is ready, Aisha,\" I tell myself, although the thought of actually speaking it aloud still makes my chest tighten uncomfortably.",
    questions: [
      { text: "What topic does Aisha research?", answer: "Ocean conservation." },
      { text: "What does Aisha realize once she starts?", answer: "That the material genuinely interests her." },
      { text: "What does Aisha have by evening?", answer: "A solid outline with statistics, images, and structure." },
    ],
    trueFalse: [
      { text: "Aisha's topic is ocean conservation.", answer: true },
      { text: "Aisha finds the material genuinely interesting.", answer: true },
      { text: "Aisha writes key points on index cards.", answer: true },
      { text: "Aisha has nothing prepared by evening.", answer: false },
      { text: "Aisha feels completely calm about speaking it aloud.", answer: false },
    ],
    buildSentence: [
      {
        target: "With a concrete plan in place, I finally dive into researching my topic properly, focused entirely on ocean conservation.",
        jumbled: ["researching", "dive", "conservation.", "ocean", "in", "plan", "properly,", "I", "focused", "finally", "on", "a", "With", "my", "concrete", "entirely", "place,", "into", "topic"],
      },
      {
        target: "I realize the material genuinely interests me, which somehow makes the process less painful overall.",
        jumbled: ["realize", "the", "interests", "I", "process", "overall.", "makes", "the", "material", "somehow", "which", "me,", "genuinely", "less", "painful"],
      },
      {
        target: "I organize my research into clear sections, writing key points on index cards to help me stay on track later.",
        jumbled: ["organize", "on", "I", "to", "key", "clear", "index", "sections,", "stay", "on", "into", "research", "points", "help", "me", "cards", "writing", "my", "track", "later."],
      },
      {
        target: "I occasionally forget about the presentation itself, absorbed instead in learning fascinating facts about coral reefs.",
        jumbled: ["instead", "about", "absorbed", "facts", "occasionally", "itself,", "about", "fascinating", "forget", "coral", "learning", "the", "I", "reefs.", "presentation", "in"],
      },
      {
        target: "\"The content is ready, Aisha,\" I tell myself, although the thought of actually speaking it aloud still makes my chest tighten uncomfortably.",
        jumbled: ["of", "tighten", "myself,", "tell", "actually", "ready,", "Aisha,\"", "aloud", "chest", "is", "speaking", "the", "still", "I", "it", "although", "content", "my", "thought", "makes", "uncomfortably.", "\"The"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about becoming genuinely interested in a topic you had to research.",
    mySentenceExample: "I became genuinely interested in space after researching it for a project.",
  },
  {
    number: 5,
    title: "The Practice Session",
    image: null,
    imageNote: "Aisha standing in front of Ms. Whitfield in an empty classroom, notecards shaking slightly, the teacher smiling encouragingly.",
    story:
      "Thursday arrives, and I stand nervously in front of Ms. Whitfield in the empty classroom after school. My hands shake as I begin, my voice barely above a whisper for the first sentence or two. She waits patiently, offering a reassuring nod rather than interrupting or correcting me immediately. As I continue, something unexpected happens: I start focusing on the content itself rather than my own fear. By the middle of my practice run, my voice has steadied considerably, though my hands still tremble slightly. Afterward, Ms. Whitfield offers specific, gentle feedback. “Your knowledge really shows, Aisha,” she says, despite my visible nervousness.",
    questions: [
      { text: "Where does Aisha practice her presentation?", answer: "In the empty classroom after school." },
      { text: "How does Aisha's voice sound at first?", answer: "Barely above a whisper." },
      { text: "What happens as Aisha continues speaking?", answer: "She starts focusing on the content rather than her fear." },
    ],
    trueFalse: [
      { text: "Aisha practices in the empty classroom after school.", answer: true },
      { text: "Aisha's voice is loud and confident from the start.", answer: false },
      { text: "Aisha starts focusing on the content rather than her fear.", answer: true },
      { text: "Aisha's voice steadies by the middle of her practice.", answer: true },
      { text: "Ms. Whitfield offers no feedback at all afterward.", answer: false },
    ],
    buildSentence: [
      {
        target: "Thursday arrives, and I stand nervously in front of Ms. Whitfield in the empty classroom after school.",
        jumbled: ["the", "school.", "arrives,", "in", "I", "of", "and", "classroom", "front", "stand", "empty", "in", "nervously", "Ms.", "Thursday", "Whitfield", "after"],
      },
      {
        target: "My hands shake as I begin, my voice barely above a whisper for the first sentence or two.",
        jumbled: ["or", "the", "shake", "my", "My", "voice", "first", "whisper", "I", "hands", "a", "above", "barely", "as", "begin,", "two.", "sentence", "for"],
      },
      {
        target: "Something unexpected happens: I start focusing on the content itself rather than my own fear.",
        jumbled: ["I", "happens:", "Something", "than", "my", "on", "focusing", "unexpected", "fear.", "the", "start", "content", "itself", "own", "rather"],
      },
      {
        target: "By the middle of my practice run, my voice has steadied considerably, though my hands still tremble slightly.",
        jumbled: ["of", "voice", "run,", "considerably,", "my", "my", "practice", "hands", "By", "still", "steadied", "has", "the", "my", "slightly.", "though", "tremble", "middle"],
      },
      {
        target: "“Your knowledge really shows, Aisha,” she says, despite my visible nervousness.",
        jumbled: ["really", "she", "my", "says,", "nervousness.", "despite", "Aisha,”", "shows,", "knowledge", "visible", "“Your"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about practicing something difficult with support from someone.",
    mySentenceExample: "I practiced my speech with support from my teacher before the real thing.",
  },
  {
    number: 6,
    title: "A Conversation with Devon",
    image: null,
    imageNote: "Devon sitting beside Aisha in the school hallway, talking casually, both leaning against lockers with relaxed body language.",
    story:
      "In the hallway before lunch, Devon mentions casually that he also gets nervous before presentations, which genuinely surprises me. He always seems so relaxed and confident during class discussions, so I assumed public speaking came naturally to him. “I just don't let people see it as much, Aisha,” he admits, shrugging like it's not a big deal at all. He shares a small trick that helps him: picking one friendly face in the crowd to focus on while speaking. I hadn't considered that even outwardly confident people might be hiding similar anxiety underneath. This conversation, unexpectedly, makes me feel considerably less alone heading into tomorrow's actual presentation.",
    questions: [
      { text: "What does Devon mention to Aisha?", answer: "That he also gets nervous before presentations." },
      { text: "What had Aisha assumed about Devon?", answer: "That public speaking came naturally to him." },
      { text: "What trick does Devon share with Aisha?", answer: "Picking one friendly face in the crowd to focus on." },
    ],
    trueFalse: [
      { text: "Devon mentions he also gets nervous before presentations.", answer: true },
      { text: "Aisha had assumed public speaking came naturally to Devon.", answer: true },
      { text: "Devon shares a trick about focusing on a friendly face.", answer: true },
      { text: "Aisha feels more alone after this conversation.", answer: false },
      { text: "Devon says he never hides his nervousness at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "In the hallway before lunch, Devon mentions casually that he also gets nervous before presentations, which genuinely surprises me.",
        jumbled: ["me.", "before", "presentations,", "In", "lunch,", "mentions", "casually", "the", "gets", "which", "surprises", "he", "that", "before", "nervous", "Devon", "hallway", "also", "genuinely"],
      },
      {
        target: "He always seems so relaxed and confident during class discussions, so I assumed public speaking came naturally to him.",
        jumbled: ["naturally", "I", "discussions,", "He", "and", "always", "him.", "so", "assumed", "speaking", "to", "class", "public", "during", "confident", "relaxed", "came", "seems", "so"],
      },
      {
        target: "“I just don't let people see it as much, Aisha,” he admits, shrugging like it's not a big deal at all.",
        jumbled: ["shrugging", "Aisha,”", "much,", "just", "like", "big", "it", "as", "see", "people", "all.", "not", "he", "at", "“I", "deal", "let", "a", "don't", "it's", "admits,"],
      },
      {
        target: "He shares a small trick that helps him: picking one friendly face in the crowd to focus on while speaking.",
        jumbled: ["while", "to", "crowd", "that", "the", "him:", "a", "focus", "friendly", "face", "in", "He", "one", "on", "small", "speaking.", "picking", "shares", "trick", "helps"],
      },
      {
        target: "I hadn't considered that even outwardly confident people might be hiding similar anxiety underneath.",
        jumbled: ["hadn't", "outwardly", "even", "considered", "that", "underneath.", "similar", "people", "confident", "might", "hiding", "I", "anxiety", "be"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about discovering someone shared a fear you thought was only yours.",
    mySentenceExample: "I discovered my friend shared the same fear of flying that I had.",
  },
  {
    number: 7,
    title: "The Morning Of",
    image: null,
    imageNote: "Aisha standing in front of her bathroom mirror that morning, taking a deep breath, her notecards held tightly in one hand.",
    story:
      "I wake up earlier than necessary, my stomach already twisted into familiar, uncomfortable knots before I even leave bed. Standing in front of the mirror, I practice Devon's trick, imagining a friendly face I'll focus on later. My mom notices my quietness at breakfast. “Being nervous doesn't mean you'll fail today, Aisha,” she reminds me gently. If I focus only on getting through it, rather than being perfect, maybe that expectation feels more manageable. I review my notecards one final time on the bus, my hands slightly less shaky than they were yesterday. By the time I reach school, nervous energy has replaced pure dread, which somehow feels like real progress.",
    questions: [
      { text: "How does Aisha's stomach feel when she wakes up?", answer: "Twisted into familiar, uncomfortable knots." },
      { text: "What does Aisha practice in front of the mirror?", answer: "Devon's trick." },
      { text: "What does Aisha's mom remind her at breakfast?", answer: "That being nervous doesn't mean she'll fail." },
    ],
    trueFalse: [
      { text: "Aisha's stomach feels twisted into knots.", answer: true },
      { text: "Aisha practices Devon's trick in front of the mirror.", answer: true },
      { text: "Aisha's mom says being nervous means she'll fail.", answer: false },
      { text: "Aisha's hands are slightly less shaky than yesterday.", answer: true },
      { text: "Aisha feels pure dread by the time she reaches school.", answer: false },
    ],
    buildSentence: [
      {
        target: "I wake up earlier than necessary, my stomach already twisted into familiar, uncomfortable knots before I even leave bed.",
        jumbled: ["twisted", "familiar,", "up", "wake", "knots", "necessary,", "already", "my", "into", "I", "earlier", "leave", "than", "I", "stomach", "bed.", "uncomfortable", "even", "before"],
      },
      {
        target: "Standing in front of the mirror, I practice Devon's trick, imagining a friendly face I'll focus on later.",
        jumbled: ["of", "practice", "trick,", "I", "I'll", "on", "friendly", "a", "mirror,", "in", "Standing", "Devon's", "face", "imagining", "front", "later.", "the", "focus"],
      },
      {
        target: "“Being nervous doesn't mean you'll fail today, Aisha,” she reminds me gently.",
        jumbled: ["Aisha,”", "you'll", "mean", "nervous", "me", "today,", "fail", "gently.", "reminds", "“Being", "doesn't", "she"],
      },
      {
        target: "Rather than being perfect, maybe that expectation feels more manageable.",
        jumbled: ["manageable.", "Rather", "than", "that", "maybe", "more", "perfect,", "feels", "expectation", "being"],
      },
      {
        target: "I review my notecards one final time on the bus, my hands slightly less shaky than they were yesterday.",
        jumbled: ["final", "than", "my", "notecards", "review", "they", "shaky", "my", "time", "one", "were", "bus,", "on", "hands", "less", "the", "I", "slightly", "yesterday."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small change in how you felt on an important day.",
    mySentenceExample: "On the day of my exam, my nervousness slowly turned into focus.",
  },
  {
    number: 8,
    title: "Standing in Front of the Class",
    image: null,
    imageNote: "Aisha standing at the front of the classroom holding notecards, mid-presentation, Devon visible in the crowd giving a small encouraging nod.",
    story:
      "When my name is called, my legs feel heavy walking to the front. \"You've got this, Aisha,\" I remind myself, recalling everything I practiced. I find Devon's face in the crowd, and he gives me a small, encouraging nod that steadies me slightly. My first sentence comes out shakier than I'd like, but I push through instead of stopping to restart. Slowly, as I move through my notecards, my voice gains strength, and the words start flowing more naturally. I even glance up occasionally, noticing classmates actually listening rather than judging me the way I had imagined. Before I fully realize it, I'm delivering my final sentence, and the room breaks into applause.",
    questions: [
      { text: "What does Aisha do when she reaches the front?", answer: "Finds Devon's face in the crowd." },
      { text: "How does Aisha's first sentence sound?", answer: "Shakier than she'd like." },
      { text: "What does Aisha notice about her classmates while presenting?", answer: "That they're actually listening, not judging." },
    ],
    trueFalse: [
      { text: "Aisha finds Devon's face in the crowd.", answer: true },
      { text: "Aisha's first sentence comes out perfectly confident.", answer: false },
      { text: "Aisha's voice gains strength as she continues.", answer: true },
      { text: "Aisha notices classmates actually listening to her.", answer: true },
      { text: "The room stays silent after Aisha finishes.", answer: false },
    ],
    buildSentence: [
      {
        target: "My legs feel heavy walking to the front.",
        jumbled: ["heavy", "to", "My", "front.", "walking", "feel", "legs", "the"],
      },
      {
        target: "\"You've got this, Aisha,\" I remind myself, recalling everything I practiced.",
        jumbled: ["recalling", "I", "remind", "myself,", "this,", "practiced.", "Aisha,\"", "\"You've", "I", "everything", "got"],
      },
      {
        target: "I find Devon's face in the crowd, and he gives me a small, encouraging nod that steadies me slightly.",
        jumbled: ["that", "face", "nod", "encouraging", "the", "me", "and", "steadies", "Devon's", "small,", "I", "slightly.", "crowd,", "find", "he", "in", "a", "gives", "me"],
      },
      {
        target: "Slowly, as I move through my notecards, my voice gains strength, and the words start flowing more naturally.",
        jumbled: ["Slowly,", "as", "voice", "my", "my", "the", "more", "flowing", "naturally.", "through", "strength,", "I", "notecards,", "start", "words", "gains", "move", "and"],
      },
      {
        target: "I even glance up occasionally, noticing classmates actually listening rather than judging me the way I had imagined.",
        jumbled: ["judging", "rather", "the", "actually", "occasionally,", "way", "than", "even", "me", "listening", "noticing", "I", "had", "up", "imagined.", "glance", "I", "classmates"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about pushing through fear to finish something important.",
    mySentenceExample: "I pushed through my fear and finished my speech successfully.",
  },
  {
    number: 9,
    title: "Afterward",
    image: null,
    imageNote: "Aisha sitting back down at her desk, exhaling with relief, classmates around her still clapping, Ms. Whitfield giving a thumbs up.",
    story:
      "Sitting back down, I exhale a breath I feel like I'd been holding since Ms. Whitfield first announced the assignment. Ms. Whitfield gives me a warm thumbs up from across the room, and I feel my shoulders finally relax completely. Devon leans over during the next presentation. “Yours was genuinely one of the most interesting topics today, Aisha,” he whispers. I can hardly believe I actually did it, especially considering how impossible this felt just five days ago. The fear hasn't disappeared entirely, and I know future presentations will still bring some nervousness. However, I now have real proof that I can push through that fear successfully.",
    questions: [
      { text: "What does Aisha do sitting back down?", answer: "Exhales a breath she'd been holding." },
      { text: "What does Ms. Whitfield give Aisha?", answer: "A warm thumbs up." },
      { text: "What does Aisha now have proof of?", answer: "That she can push through her fear successfully." },
    ],
    trueFalse: [
      { text: "Aisha exhales a breath she'd been holding.", answer: true },
      { text: "Ms. Whitfield gives Aisha a warm thumbs up.", answer: true },
      { text: "Devon says her topic was boring.", answer: false },
      { text: "Aisha now has proof she can push through fear.", answer: true },
      { text: "Aisha believes her fear has completely disappeared.", answer: false },
    ],
    buildSentence: [
      {
        target: "Sitting back down, I exhale a breath I feel like I'd been holding since Ms. Whitfield first announced the assignment.",
        jumbled: ["announced", "assignment.", "since", "a", "back", "feel", "holding", "Ms.", "breath", "I'd", "the", "been", "down,", "like", "exhale", "Sitting", "I", "first", "I", "Whitfield"],
      },
      {
        target: "Ms. Whitfield gives me a warm thumbs up from across the room, and I feel my shoulders finally relax completely.",
        jumbled: ["finally", "me", "gives", "across", "the", "up", "warm", "relax", "completely.", "feel", "shoulders", "thumbs", "a", "my", "from", "room,", "I", "Whitfield", "and", "Ms."],
      },
      {
        target: "“Yours was genuinely one of the most interesting topics today, Aisha,” he whispers.",
        jumbled: ["topics", "Aisha,”", "whispers.", "genuinely", "the", "of", "one", "today,", "interesting", "he", "was", "most", "“Yours"],
      },
      {
        target: "I can hardly believe I actually did it, especially considering how impossible this felt just five days ago.",
        jumbled: ["considering", "I", "ago.", "felt", "how", "I", "days", "five", "especially", "actually", "did", "it,", "can", "this", "hardly", "believe", "just", "impossible"],
      },
      {
        target: "The fear hasn't disappeared entirely, and I know future presentations will still bring some nervousness.",
        jumbled: ["future", "bring", "nervousness.", "know", "presentations", "fear", "I", "and", "will", "some", "disappeared", "The", "hasn't", "entirely,", "still"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about proving something to yourself after facing a fear.",
    mySentenceExample: "I proved to myself that I could handle public speaking after my presentation.",
  },
  {
    number: 10,
    title: "A New Perspective",
    image: null,
    imageNote: "Aisha sitting at her desk that evening, writing in a journal, a small smile on her face, notecards from the presentation resting nearby.",
    story:
      "That evening, I write in my journal about the entire experience, wanting to remember exactly how today actually felt. I realize my anxiety wasn't something to eliminate completely, but rather something I could learn to work alongside instead. Ms. Whitfield's practice offer, Devon's honest confession, and my mom's gentle words all mattered more than I initially recognized. \"You reached out for support, Aisha,\" I write in my journal. If I hadn't, I might have let fear stop me from trying at all. Next time a presentation gets assigned, I know the nervousness will likely return, at least somewhat. But now I also know something equally important: nervousness and capability can genuinely coexist within the same person.",
    questions: [
      { text: "What does Aisha do that evening?", answer: "Writes in her journal about the experience." },
      { text: "What does Aisha realize about her anxiety?", answer: "That it wasn't something to eliminate, but to work alongside." },
      { text: "What does Aisha know will likely happen next time?", answer: "That the nervousness will likely return, at least somewhat." },
    ],
    trueFalse: [
      { text: "Aisha writes in her journal that evening.", answer: true },
      { text: "Aisha realizes her anxiety needed to be eliminated completely.", answer: false },
      { text: "Aisha recognizes the support she received mattered.", answer: true },
      { text: "Aisha knows nervousness will likely return next time.", answer: true },
      { text: "Aisha believes nervousness and capability cannot coexist.", answer: false },
    ],
    buildSentence: [
      {
        target: "That evening, I write in my journal about the entire experience, wanting to remember exactly how today actually felt.",
        jumbled: ["today", "evening,", "how", "my", "to", "experience,", "journal", "remember", "write", "the", "wanting", "entire", "in", "about", "actually", "That", "I", "exactly", "felt."],
      },
      {
        target: "I realize my anxiety wasn't something to eliminate completely, but rather something I could learn to work alongside instead.",
        jumbled: ["could", "alongside", "I", "rather", "my", "learn", "eliminate", "but", "anxiety", "to", "something", "work", "wasn't", "completely,", "something", "I", "instead.", "realize", "to"],
      },
      {
        target: "Ms. Whitfield's practice offer, Devon's honest confession, and my mom's gentle words all mattered more than I initially recognized.",
        jumbled: ["honest", "Devon's", "recognized.", "Whitfield's", "mom's", "initially", "practice", "confession,", "words", "Ms.", "more", "mattered", "and", "my", "than", "all", "I", "offer,", "gentle"],
      },
      {
        target: "I might have let fear stop me from trying at all.",
        jumbled: ["all.", "at", "fear", "let", "trying", "me", "stop", "might", "have", "from", "I"],
      },
      {
        target: "But now I also know something equally important: nervousness and capability can genuinely coexist within the same person.",
        jumbled: ["capability", "nervousness", "important:", "something", "same", "genuinely", "person.", "and", "can", "within", "coexist", "But", "the", "equally", "now", "also", "know", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you learned about yourself after facing a fear.",
    mySentenceExample: "I learned that I am braver than I thought after facing my fear.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
