// A2 Teens digital storybook, Book 32: "The School Debate Team"
// Static content -- no Supabase. Second book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook32/cover.jpg";

export const STORYBOOK_TITLE = "The School Debate Team";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Diego standing at a podium in a school gymnasium, notecards in hand, Priya seated at a nearby table giving an encouraging thumbs up, judges visible in the background.";

export const CHARACTERS = [
  { name: "Diego", role: "The narrator, a teenager", look: "Curly hair, collared shirt, thoughtful but easily nervous when speaking in public." },
  { name: "Priya", role: "Diego's debate partner", look: "Long braid, blazer, quick-thinking and confident." },
  { name: "Mr. Alvarez", role: "The debate team coach", look: "Bow tie, sharp eyes, demanding but genuinely supportive." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Joining the Team",
    image: null,
    imageNote: "Diego standing nervously outside a classroom door with a 'Debate Club Tryouts' sign, peeking through the small window at students already inside.",
    story:
      "After my English teacher mentions that I argue persuasively during class discussions, she suggests I try out for the school debate team. I stand outside the classroom door for a full minute, unsure whether I actually have the confidence to walk inside. Public speaking has never been something I enjoyed, and the idea of debating strangers in front of judges sounds genuinely terrifying. Still, something about the challenge pulls at my curiosity. Taking a deep breath, I tell myself, “Come on, Diego, just do it,” and finally push open the door and step into a room full of students who all seem far more prepared than I feel.",
    questions: [
      { text: "Why does the teacher suggest Diego try debate?", answer: "Because he argues persuasively during class discussions." },
      { text: "How does Diego feel about public speaking?", answer: "He finds it terrifying -- he's never enjoyed it." },
      { text: "What does Diego finally do?", answer: "Pushes open the door and steps into the room." },
    ],
    trueFalse: [
      { text: "Diego's teacher suggests he try out for debate.", answer: true },
      { text: "Diego has always loved public speaking.", answer: false },
      { text: "Diego stands outside the door unsure at first.", answer: true },
      { text: "Diego decides not to go inside at all.", answer: false },
      { text: "Diego feels the other students seem more prepared.", answer: true },
    ],
    buildSentence: [
      {
        target: "She suggests I try out for the school debate team.",
        jumbled: ["out", "suggests", "I", "school", "She", "the", "try", "team.", "debate", "for"],
      },
      {
        target: "I stand outside the classroom door for a full minute, unsure whether I actually have the confidence to walk inside.",
        jumbled: ["confidence", "stand", "for", "full", "inside.", "whether", "outside", "a", "door", "the", "to", "minute,", "I", "unsure", "the", "I", "walk", "have", "classroom", "actually"],
      },
      {
        target: "Public speaking has never been something I enjoyed, and the idea of debating strangers in front of judges sounds genuinely terrifying.",
        jumbled: ["never", "of", "judges", "enjoyed,", "strangers", "debating", "and", "Public", "front", "sounds", "of", "in", "idea", "been", "something", "has", "genuinely", "I", "terrifying.", "the", "speaking"],
      },
      {
        target: "Still, something about the challenge pulls at my curiosity.",
        jumbled: ["pulls", "something", "curiosity.", "my", "at", "challenge", "about", "the", "Still,"],
      },
      {
        target: "Taking a deep breath, I tell myself, “Come on, Diego, just do it,” and finally push open the door and step into a room full of students who all seem far more prepared than I feel.",
        jumbled: ["just", "a", "tell", "myself,", "open", "room", "I", "on,", "students", "door", "of", "prepared", "and", "feel.", "Taking", "push", "I", "it,”", "than", "Diego,", "finally", "breath,", "a", "the", "seem", "“Come", "full", "deep", "and", "do", "step", "more", "all", "far", "into", "who"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a challenge you decided to try even though it scared you.",
    mySentenceExample: "I decided to try out for the school play even though public speaking scares me.",
  },
  {
    number: 2,
    title: "Learning the Rules",
    image: null,
    imageNote: "Mr. Alvarez writing debate format rules on a whiteboard while a room of students, including Diego, take notes with confused expressions.",
    story:
      "Mr. Alvarez begins the meeting by explaining the debate format, and honestly, the rules feel completely overwhelming at first. There are opening statements, rebuttals, cross-examinations, and closing arguments, each with strict time limits I struggle to keep straight. “Don't worry, everyone feels lost during their first week, Diego,” Mr. Alvarez says, noticing my confused expression among several others. He explains that debate isn't really about winning arguments through volume, but through logic, evidence, and staying calm under pressure. By the end of the meeting, my head spins with new vocabulary, but a small part of me feels intrigued rather than defeated.",
    questions: [
      { text: "What does Mr. Alvarez explain?", answer: "The debate format -- opening statements, rebuttals, cross-examinations, closing arguments." },
      { text: "What does Mr. Alvarez say about winning debates?", answer: "That it's about logic, evidence, and staying calm, not volume." },
      { text: "How does Diego feel by the end of the meeting?", answer: "Intrigued rather than defeated." },
    ],
    trueFalse: [
      { text: "Mr. Alvarez explains the debate format.", answer: true },
      { text: "The rules feel simple to Diego immediately.", answer: false },
      { text: "Mr. Alvarez says debate is about staying calm and using logic.", answer: true },
      { text: "Diego is the only confused student in the room.", answer: false },
      { text: "Diego feels intrigued rather than defeated.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Alvarez begins the meeting by explaining the debate format, and honestly, the rules feel completely overwhelming at first.",
        jumbled: ["at", "begins", "the", "rules", "overwhelming", "and", "meeting", "first.", "by", "Alvarez", "completely", "format,", "the", "honestly,", "debate", "feel", "explaining", "Mr.", "the"],
      },
      {
        target: "There are opening statements, rebuttals, cross-examinations, and closing arguments, each with strict time limits I struggle to keep straight.",
        jumbled: ["limits", "opening", "arguments,", "strict", "statements,", "keep", "each", "There", "to", "are", "straight.", "time", "with", "cross-examinations,", "closing", "rebuttals,", "and", "I", "struggle"],
      },
      {
        target: "“Don't worry, everyone feels lost during their first week, Diego,” Mr. Alvarez says, noticing my confused expression among several others.",
        jumbled: ["noticing", "among", "lost", "first", "everyone", "Alvarez", "my", "others.", "several", "confused", "their", "expression", "Mr.", "says,", "week,", "during", "feels", "“Don't", "worry,", "Diego,”"],
      },
      {
        target: "He explains that debate isn't really about winning arguments through volume, but through logic, evidence, and staying calm under pressure.",
        jumbled: ["but", "explains", "through", "He", "logic,", "through", "evidence,", "isn't", "calm", "about", "pressure.", "staying", "volume,", "winning", "really", "under", "arguments", "debate", "that", "and"],
      },
      {
        target: "By the end of the meeting, my head spins with new vocabulary, but a small part of me feels intrigued rather than defeated.",
        jumbled: ["the", "me", "vocabulary,", "meeting,", "spins", "with", "head", "but", "rather", "of", "intrigued", "small", "my", "the", "By", "of", "a", "part", "end", "than", "new", "defeated.", "feels"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning something with a lot of new rules.",
    mySentenceExample: "Learning chess felt overwhelming because there were so many new rules.",
  },
  {
    number: 3,
    title: "Finding a Partner",
    image: null,
    imageNote: "Priya introducing herself to Diego with a confident handshake, both standing beside a table with debate topic cards spread out.",
    story:
      "For team debates, Mr. Alvarez pairs students together, and I end up partnered with Priya, someone I have only ever seen around school but never actually spoken to. “I've heard you're good at arguing, Diego,” Priya says with a grin, extending her hand for a confident handshake. I laugh nervously, admitting I'm not sure that's necessarily a compliment. As we start discussing our first practice topic, I quickly notice Priya thinks incredibly fast on her feet, building arguments almost effortlessly. Working alongside someone so naturally talented feels intimidating at first, but I also sense this partnership could genuinely help me improve.",
    questions: [
      { text: "Who does Diego get paired with?", answer: "Priya." },
      { text: "What does Priya say about Diego?", answer: "That she's heard he's good at arguing." },
      { text: "What does Diego notice about Priya's thinking?", answer: "That she thinks incredibly fast on her feet." },
    ],
    trueFalse: [
      { text: "Diego is paired with Priya.", answer: true },
      { text: "Diego and Priya were already close friends before this.", answer: false },
      { text: "Priya thinks quickly and builds arguments easily.", answer: true },
      { text: "Diego feels nothing intimidating about working with Priya.", answer: false },
      { text: "Diego senses the partnership could help him improve.", answer: true },
    ],
    buildSentence: [
      {
        target: "For team debates, Mr. Alvarez pairs students together, and I end up partnered with Priya, someone I have only ever seen around school but never actually spoken to.",
        jumbled: ["up", "spoken", "and", "someone", "debates,", "with", "only", "have", "partnered", "I", "school", "never", "actually", "together,", "I", "seen", "around", "end", "students", "to.", "Mr.", "For", "team", "Priya,", "pairs", "ever", "but", "Alvarez"],
      },
      {
        target: "“I've heard you're good at arguing, Diego,” Priya says with a grin, extending her hand for a confident handshake.",
        jumbled: ["Priya", "says", "with", "a", "heard", "hand", "good", "at", "“I've", "handshake.", "extending", "arguing,", "grin,", "you're", "Diego,”", "for", "confident", "a", "her"],
      },
      {
        target: "I laugh nervously, admitting I'm not sure that's necessarily a compliment.",
        jumbled: ["that's", "sure", "I", "I'm", "necessarily", "nervously,", "admitting", "compliment.", "a", "not", "laugh"],
      },
      {
        target: "I quickly notice Priya thinks incredibly fast on her feet, building arguments almost effortlessly.",
        jumbled: ["I", "building", "effortlessly.", "her", "thinks", "feet,", "arguments", "on", "quickly", "almost", "incredibly", "fast", "Priya", "notice"],
      },
      {
        target: "Working alongside someone so naturally talented feels intimidating at first, but I also sense this partnership could genuinely help me improve.",
        jumbled: ["also", "first,", "sense", "I", "feels", "improve.", "at", "someone", "genuinely", "so", "could", "help", "me", "partnership", "alongside", "this", "naturally", "talented", "but", "intimidating", "Working"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about working with someone talented at something you find hard.",
    mySentenceExample: "Working with my talented friend on math helped me understand it better.",
  },
  {
    number: 4,
    title: "Building an Argument",
    image: null,
    imageNote: "Diego and Priya sitting at a library table surrounded by printed articles and highlighted notes, building an outline together on a shared laptop.",
    story:
      "Our first assigned topic asks whether school uniforms should be required, and Priya suggests we spend the whole weekend researching both sides thoroughly. “Understanding the opposing argument makes your own argument stronger, Diego,” she explains, opening several tabs of articles on her laptop. We highlight key statistics and organize our strongest points into a clear, logical outline. I discover that building a genuinely persuasive argument requires much more careful thinking than simply stating an opinion loudly. By Sunday evening, we have transformed a messy pile of research into three solid, well-supported points that I actually feel proud presenting.",
    questions: [
      { text: "What is their first assigned topic?", answer: "Whether school uniforms should be required." },
      { text: "What does Priya say about understanding the opposing argument?", answer: "That it makes your own argument stronger." },
      { text: "How do they organize their research?", answer: "Into a clear, logical outline with key statistics." },
    ],
    trueFalse: [
      { text: "Their topic is about school uniforms.", answer: true },
      { text: "Priya says understanding the other side makes your argument stronger.", answer: true },
      { text: "They ignore the opposing side completely.", answer: false },
      { text: "Building a persuasive argument requires careful thinking.", answer: true },
      { text: "They end up with no real points by Sunday.", answer: false },
    ],
    buildSentence: [
      {
        target: "Our first assigned topic asks whether school uniforms should be required, and Priya suggests we spend the whole weekend researching both sides thoroughly.",
        jumbled: ["we", "asks", "the", "both", "first", "uniforms", "spend", "whether", "school", "thoroughly.", "Our", "required,", "topic", "and", "assigned", "should", "suggests", "sides", "Priya", "be", "researching", "whole", "weekend"],
      },
      {
        target: "“Understanding the opposing argument makes your own argument stronger, Diego,” she explains, opening several tabs of articles on her laptop.",
        jumbled: ["articles", "own", "your", "laptop.", "her", "stronger,", "on", "she", "tabs", "the", "of", "argument", "argument", "opposing", "opening", "several", "“Understanding", "makes", "explains,", "Diego,”"],
      },
      {
        target: "We highlight key statistics and organize our strongest points into a clear, logical outline.",
        jumbled: ["clear,", "logical", "and", "statistics", "key", "highlight", "We", "strongest", "a", "our", "into", "outline.", "points", "organize"],
      },
      {
        target: "I discover that building a genuinely persuasive argument requires much more careful thinking than simply stating an opinion loudly.",
        jumbled: ["that", "an", "careful", "opinion", "requires", "argument", "than", "genuinely", "stating", "more", "persuasive", "a", "discover", "much", "loudly.", "simply", "I", "building", "thinking"],
      },
      {
        target: "By Sunday evening, we have transformed a messy pile of research into three solid, well-supported points that I actually feel proud presenting.",
        jumbled: ["proud", "transformed", "have", "research", "into", "well-supported", "that", "I", "actually", "By", "pile", "solid,", "feel", "we", "three", "evening,", "presenting.", "a", "points", "messy", "of", "Sunday"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about researching both sides of an issue.",
    mySentenceExample: "I researched both sides before choosing my opinion for the essay.",
  },
  {
    number: 5,
    title: "The Practice Round",
    image: null,
    imageNote: "Diego standing awkwardly while another teammate debates against him during practice, notecards shaking slightly in his hands, Mr. Alvarez observing with a clipboard.",
    story:
      "Mr. Alvarez organizes a practice round where different pairs debate against each other under timed, realistic conditions. When it's my turn to speak, my prepared notecards suddenly feel useless, and my mind goes completely blank for several agonizing seconds. I stumble through my opening statement, repeating myself awkwardly while my opponent watches with a patient but slightly amused expression. Priya tries subtly signaling encouragement from the sidelines, mouthing “You've got this, Diego,” but nervousness completely overwhelms my ability to think clearly. When my three minutes finally end, I sit down feeling embarrassed, wondering whether I made a serious mistake joining this team.",
    questions: [
      { text: "What does Mr. Alvarez organize?", answer: "A practice round with timed, realistic conditions." },
      { text: "What happens to Diego's mind during his turn?", answer: "It goes completely blank." },
      { text: "How does Diego feel when his three minutes end?", answer: "Embarrassed." },
    ],
    trueFalse: [
      { text: "Mr. Alvarez organizes a timed practice round.", answer: true },
      { text: "Diego speaks confidently without any trouble.", answer: false },
      { text: "Diego's mind goes blank for several seconds.", answer: true },
      { text: "Priya tries to signal encouragement to Diego.", answer: true },
      { text: "Diego feels proud and confident afterward.", answer: false },
    ],
    buildSentence: [
      {
        target: "Mr. Alvarez organizes a practice round where different pairs debate against each other under timed, realistic conditions.",
        jumbled: ["a", "practice", "organizes", "each", "where", "round", "debate", "other", "Mr.", "realistic", "under", "timed,", "against", "conditions.", "Alvarez", "different", "pairs"],
      },
      {
        target: "My prepared notecards suddenly feel useless, and my mind goes completely blank for several agonizing seconds.",
        jumbled: ["agonizing", "for", "several", "My", "my", "suddenly", "blank", "and", "seconds.", "completely", "goes", "notecards", "feel", "useless,", "mind", "prepared"],
      },
      {
        target: "I stumble through my opening statement, repeating myself awkwardly while my opponent watches with a patient but slightly amused expression.",
        jumbled: ["repeating", "opponent", "through", "my", "patient", "myself", "my", "but", "watches", "expression.", "statement,", "while", "with", "opening", "I", "a", "amused", "slightly", "awkwardly", "stumble"],
      },
      {
        target: "Priya tries subtly signaling encouragement from the sidelines, mouthing “You've got this, Diego,” but nervousness completely overwhelms my ability to think clearly.",
        jumbled: ["signaling", "to", "encouragement", "clearly.", "ability", "completely", "my", "nervousness", "but", "this,", "mouthing", "Priya", "got", "sidelines,", "Diego,”", "from", "the", "think", "subtly", "overwhelms", "tries", "“You've"],
      },
      {
        target: "I sit down feeling embarrassed, wondering whether I made a serious mistake joining this team.",
        jumbled: ["made", "this", "serious", "I", "sit", "down", "joining", "wondering", "whether", "embarrassed,", "a", "mistake", "team.", "feeling", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time your mind went blank during something important.",
    mySentenceExample: "My mind went blank during my first piano recital in front of everyone.",
  },
  {
    number: 6,
    title: "A Setback",
    image: null,
    imageNote: "Diego sitting alone on the bleachers after practice, looking discouraged, his notecards scattered beside him.",
    story:
      "After practice ends, I sit alone on the bleachers, replaying my embarrassing performance over and over in my head. “What were you thinking, Diego?” I mutter under my breath. Maybe Priya deserves a better partner, someone who doesn't freeze up the moment real pressure appears in front of an audience. I seriously consider quitting the team altogether, convinced that today's disaster proves I simply don't belong here among naturally confident speakers. My notecards lie scattered beside me, a small, defeated reminder of hours spent preparing for something I still completely failed at delivering. Part of me wants to disappear quietly before anyone notices how discouraged I actually feel.",
    questions: [
      { text: "Where does Diego sit after practice?", answer: "Alone on the bleachers." },
      { text: "What does Diego consider doing?", answer: "Quitting the team." },
      { text: "How does Diego feel looking at his notecards?", answer: "Defeated." },
    ],
    trueFalse: [
      { text: "Diego sits alone on the bleachers.", answer: true },
      { text: "Diego feels completely confident after practice.", answer: false },
      { text: "Diego considers quitting the team.", answer: true },
      { text: "Diego believes he prepared for nothing at all.", answer: false },
      { text: "Diego wants to disappear quietly.", answer: true },
    ],
    buildSentence: [
      {
        target: "I sit alone on the bleachers, replaying my embarrassing performance over and over in my head.",
        jumbled: ["the", "on", "over", "over", "my", "head.", "I", "replaying", "alone", "embarrassing", "in", "performance", "and", "sit", "bleachers,", "my"],
      },
      {
        target: "“What were you thinking, Diego?” I mutter under my breath.",
        jumbled: ["Diego?”", "were", "mutter", "my", "I", "you", "under", "“What", "breath.", "thinking,"],
      },
      {
        target: "Maybe Priya deserves a better partner, someone who doesn't freeze up the moment real pressure appears in front of an audience.",
        jumbled: ["front", "real", "of", "Maybe", "someone", "a", "better", "who", "moment", "doesn't", "freeze", "audience.", "pressure", "partner,", "the", "Priya", "in", "up", "deserves", "appears", "an"],
      },
      {
        target: "I seriously consider quitting the team altogether, convinced that today's disaster proves I simply don't belong here among naturally confident speakers.",
        jumbled: ["don't", "I", "altogether,", "among", "the", "quitting", "I", "convinced", "that", "confident", "seriously", "proves", "simply", "belong", "naturally", "speakers.", "disaster", "today's", "consider", "here", "team"],
      },
      {
        target: "My notecards lie scattered beside me, a small, defeated reminder of hours spent preparing for something I still completely failed at delivering.",
        jumbled: ["of", "beside", "small,", "hours", "defeated", "preparing", "completely", "at", "lie", "delivering.", "failed", "still", "My", "reminder", "something", "me,", "a", "notecards", "spent", "I", "scattered", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt discouraged after trying something new.",
    mySentenceExample: "I felt discouraged after my first attempt at painting looked messy.",
  },
  {
    number: 7,
    title: "Priya's Advice",
    image: null,
    imageNote: "Priya sitting down beside Diego on the bleachers, speaking gently and pointing at his scattered notecards while he listens.",
    story:
      "Just as I'm about to leave, Priya walks over and sits beside me without saying a word at first. “Everyone freezes their first time, Diego. I did too,” she finally admits, surprising me completely. She explains that the problem wasn't my argument, which was actually well-researched, but rather that I tried memorizing every word instead of just knowing my main points. “Speak like you're explaining it to a friend,” she suggests, “not reciting a script.” Hearing that even Priya struggled once makes my failure feel less permanent, and slowly, a small flicker of determination replaces my earlier urge to quit.",
    questions: [
      { text: "What does Priya admit about her own first time?", answer: "That she froze too." },
      { text: "What does Priya say the real problem was?", answer: "That he tried memorizing every word instead of knowing his main points." },
      { text: "What advice does Priya give Diego?", answer: "Speak like you're explaining it to a friend, not reciting a script." },
    ],
    trueFalse: [
      { text: "Priya admits she froze during her first time too.", answer: true },
      { text: "Priya says Diego's argument itself was badly researched.", answer: false },
      { text: "Priya suggests speaking like explaining to a friend.", answer: true },
      { text: "Diego feels his failure is permanent after hearing this.", answer: false },
      { text: "Diego feels a small flicker of determination return.", answer: true },
    ],
    buildSentence: [
      {
        target: "Just as I'm about to leave, Priya walks over and sits beside me without saying a word at first.",
        jumbled: ["saying", "beside", "word", "me", "first.", "I'm", "Priya", "as", "leave,", "a", "Just", "about", "at", "over", "walks", "and", "without", "sits", "to"],
      },
      {
        target: "“Everyone freezes their first time, Diego. I did too,” she finally admits, surprising me completely.",
        jumbled: ["finally", "too,”", "Diego.", "their", "completely.", "time,", "freezes", "“Everyone", "surprising", "she", "me", "admits,", "did", "I", "first"],
      },
      {
        target: "She explains that the problem wasn't my argument, which was actually well-researched, but rather that I tried memorizing every word instead of just knowing my main points.",
        jumbled: ["that", "of", "I", "that", "wasn't", "but", "was", "rather", "explains", "actually", "the", "word", "problem", "argument,", "points.", "well-researched,", "which", "instead", "main", "memorizing", "just", "She", "my", "knowing", "my", "every", "tried"],
      },
      {
        target: "“Speak like you're explaining it to a friend,” she suggests, “not reciting a script.”",
        jumbled: ["a", "friend,”", "explaining", "script.”", "“Speak", "like", "reciting", "to", "a", "you're", "it", "she", "suggests,", "“not"],
      },
      {
        target: "Hearing that even Priya struggled once makes my failure feel less permanent, and slowly, a small flicker of determination replaces my earlier urge to quit.",
        jumbled: ["urge", "of", "to", "earlier", "Hearing", "Priya", "failure", "once", "less", "and", "slowly,", "makes", "my", "a", "struggled", "quit.", "that", "determination", "my", "permanent,", "flicker", "even", "replaces", "small", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about advice that helped you feel less alone in a struggle.",
    mySentenceExample: "Hearing my sister struggled too helped me feel less alone in learning guitar.",
  },
  {
    number: 8,
    title: "The Real Tournament",
    image: null,
    imageNote: "Diego and Priya walking into a school gymnasium filled with tables and competing teams, both wearing matching team badges, nervous but determined.",
    story:
      "A month later, our team travels to a real regional debate tournament held at a different school's gymnasium. The room buzzes with dozens of students in matching team colors, and my nerves return instantly at the sight of unfamiliar, confident faces everywhere. Priya squeezes my shoulder reassuringly, whispering, “You've got this, Diego,” as we find our assigned table for the first round. Remembering her advice, I focus on knowing my main points rather than reciting memorized sentences word for word. When my turn comes, my voice shakes slightly at first, but I push through, speaking more naturally than I ever managed during practice.",
    questions: [
      { text: "Where does the tournament take place?", answer: "A different school's gymnasium." },
      { text: "How does Diego feel seeing the competing teams?", answer: "His nerves return instantly." },
      { text: "What does Diego remember when it's his turn?", answer: "To know his main points rather than reciting memorized sentences." },
    ],
    trueFalse: [
      { text: "The tournament takes place at a different school.", answer: true },
      { text: "Diego feels completely relaxed seeing the other teams.", answer: false },
      { text: "Priya squeezes Diego's shoulder reassuringly.", answer: true },
      { text: "Diego forgets Priya's advice completely.", answer: false },
      { text: "Diego speaks more naturally than during practice.", answer: true },
    ],
    buildSentence: [
      {
        target: "A month later, our team travels to a real regional debate tournament held at a different school's gymnasium.",
        jumbled: ["debate", "held", "our", "a", "regional", "travels", "team", "real", "different", "month", "later,", "at", "school's", "to", "tournament", "a", "gymnasium.", "A"],
      },
      {
        target: "The room buzzes with dozens of students in matching team colors, and my nerves return instantly at the sight of unfamiliar, confident faces everywhere.",
        jumbled: ["matching", "team", "and", "sight", "everywhere.", "with", "The", "my", "room", "dozens", "of", "unfamiliar,", "confident", "the", "colors,", "faces", "in", "students", "return", "at", "of", "buzzes", "instantly", "nerves"],
      },
      {
        target: "Priya squeezes my shoulder reassuringly, whispering, “You've got this, Diego,” as we find our assigned table for the first round.",
        jumbled: ["table", "assigned", "squeezes", "whispering,", "for", "round.", "“You've", "Diego,”", "reassuringly,", "we", "got", "this,", "as", "my", "the", "first", "find", "Priya", "shoulder", "our"],
      },
      {
        target: "Remembering her advice, I focus on knowing my main points rather than reciting memorized sentences word for word.",
        jumbled: ["word", "focus", "points", "advice,", "rather", "than", "word.", "for", "on", "Remembering", "sentences", "I", "reciting", "my", "main", "memorized", "knowing", "her"],
      },
      {
        target: "My voice shakes slightly at first, but I push through, speaking more naturally than I ever managed during practice.",
        jumbled: ["first,", "ever", "naturally", "push", "through,", "during", "shakes", "more", "My", "than", "at", "slightly", "but", "I", "speaking", "I", "voice", "practice.", "managed"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a competition or event that made you nervous.",
    mySentenceExample: "My first swim meet made me nervous but excited at the same time.",
  },
  {
    number: 9,
    title: "Facing a Tough Opponent",
    image: null,
    imageNote: "Diego standing across from a confident, sharply dressed opposing debater, both mid-argument at a debate table, judges taking notes nearby.",
    story:
      "Our final round pairs us against the tournament's top-ranked team, a duo known for their sharp, quick rebuttals that had eliminated several other teams already. My stomach tightens as their lead speaker begins, effortlessly dismantling parts of an argument we had prepared. Instead of panicking like I might have weeks ago, I tell myself, “Stay calm, Diego,” and remember Priya's advice, calmly building on our remaining points instead. When it's my turn for rebuttal, I surprise myself by responding smoothly, addressing their argument directly instead of ignoring it. Whether we win or lose, I realize I am actually holding my own.",
    questions: [
      { text: "Who do they face in the final round?", answer: "The tournament's top-ranked team." },
      { text: "What does the opposing lead speaker do?", answer: "Dismantles parts of their argument effortlessly." },
      { text: "How does Diego react compared to how he might have before?", answer: "He stays calm and builds on their remaining points instead of panicking." },
    ],
    trueFalse: [
      { text: "They face the tournament's top-ranked team.", answer: true },
      { text: "Diego panics completely and gives up.", answer: false },
      { text: "Diego remembers Priya's advice during the round.", answer: true },
      { text: "Diego ignores the opponent's argument entirely.", answer: false },
      { text: "Diego realizes he is holding his own.", answer: true },
    ],
    buildSentence: [
      {
        target: "Our final round pairs us against the tournament's top-ranked team, a duo known for their sharp, quick rebuttals that had eliminated several other teams already.",
        jumbled: ["already.", "their", "final", "sharp,", "teams", "had", "us", "duo", "pairs", "Our", "several", "eliminated", "tournament's", "other", "quick", "the", "team,", "that", "against", "a", "for", "top-ranked", "rebuttals", "round", "known"],
      },
      {
        target: "My stomach tightens as their lead speaker begins, effortlessly dismantling parts of an argument we had prepared.",
        jumbled: ["dismantling", "their", "we", "an", "effortlessly", "My", "argument", "had", "speaker", "stomach", "prepared.", "tightens", "parts", "as", "begins,", "of", "lead"],
      },
      {
        target: "Instead of panicking like I might have weeks ago, I tell myself, “Stay calm, Diego,” and remember Priya's advice, calmly building on our remaining points instead.",
        jumbled: ["building", "remaining", "panicking", "remember", "ago,", "calm,", "like", "Instead", "have", "might", "of", "points", "Priya's", "Diego,”", "instead.", "“Stay", "tell", "weeks", "on", "and", "our", "advice,", "I", "calmly", "myself,", "I"],
      },
      {
        target: "I surprise myself by responding smoothly, addressing their argument directly instead of ignoring it.",
        jumbled: ["myself", "I", "instead", "smoothly,", "directly", "surprise", "of", "responding", "ignoring", "addressing", "it.", "by", "their", "argument"],
      },
      {
        target: "Whether we win or lose, I realize I am actually holding my own.",
        jumbled: ["Whether", "win", "lose,", "own.", "am", "realize", "holding", "we", "or", "I", "actually", "I", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about facing a difficult challenger or challenge.",
    mySentenceExample: "I faced a difficult opponent in chess but stayed calm and focused.",
  },
  {
    number: 10,
    title: "Win or Lose, We Grew",
    image: null,
    imageNote: "Diego and Priya standing together outside the gymnasium after the tournament, holding a small participation ribbon, both smiling proudly despite not winning first place.",
    story:
      "In the end, our team doesn't win the tournament, losing narrowly to the top-ranked pair by only a few judge points. Standing outside the gymnasium afterward, I expect to feel crushed, but strangely, I mostly feel proud instead. “Remember how you froze during that first practice round, Diego?” Priya asks, grinning as she recalls how far I have actually come. She's right; the nervous, blank-minded version of myself from weeks ago would never have survived facing the tournament's toughest team so calmly. Walking to the car, I already find myself looking forward to next semester's competition, something I never expected to feel.",
    questions: [
      { text: "Does their team win the tournament?", answer: "No, they lose narrowly." },
      { text: "How does Diego feel afterward, unexpectedly?", answer: "Proud." },
      { text: "What does Diego look forward to by the end?", answer: "Next semester's competition." },
    ],
    trueFalse: [
      { text: "Their team loses narrowly to the top-ranked pair.", answer: true },
      { text: "Diego feels completely crushed afterward.", answer: false },
      { text: "Priya reminds Diego how far he has come.", answer: true },
      { text: "Diego decides he never wants to debate again.", answer: false },
      { text: "Diego looks forward to next semester's competition.", answer: true },
    ],
    buildSentence: [
      {
        target: "In the end, our team doesn't win the tournament, losing narrowly to the top-ranked pair by only a few judge points.",
        jumbled: ["to", "losing", "the", "In", "end,", "narrowly", "the", "team", "doesn't", "win", "few", "top-ranked", "judge", "the", "pair", "only", "our", "by", "tournament,", "points.", "a"],
      },
      {
        target: "Standing outside the gymnasium afterward, I expect to feel crushed, but strangely, I mostly feel proud instead.",
        jumbled: ["proud", "feel", "Standing", "I", "afterward,", "feel", "the", "gymnasium", "expect", "to", "crushed,", "mostly", "strangely,", "instead.", "I", "outside", "but"],
      },
      {
        target: "“Remember how you froze during that first practice round, Diego?” Priya asks, grinning as she recalls how far I have actually come.",
        jumbled: ["how", "recalls", "as", "during", "practice", "that", "come.", "how", "have", "round,", "froze", "“Remember", "asks,", "Diego?”", "far", "actually", "grinning", "you", "first", "she", "I", "Priya"],
      },
      {
        target: "She's right; the nervous, blank-minded version of myself from weeks ago would never have survived facing the tournament's toughest team so calmly.",
        jumbled: ["ago", "myself", "team", "never", "weeks", "the", "facing", "of", "version", "the", "have", "She's", "would", "so", "survived", "nervous,", "from", "toughest", "calmly.", "tournament's", "blank-minded", "right;"],
      },
      {
        target: "Walking to the car, I already find myself looking forward to next semester's competition, something I never expected to feel.",
        jumbled: ["expected", "the", "already", "competition,", "to", "I", "myself", "semester's", "feel.", "looking", "to", "next", "find", "Walking", "something", "forward", "never", "I", "to", "car,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about growing from an experience even without winning.",
    mySentenceExample: "I grew a lot from the competition even though our team didn't win first place.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
