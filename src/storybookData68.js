// B2 Teens digital storybook, Book 68: "Whether We Should Move"
// Static content -- no Supabase. Fourth book in the B2 Teens batch
// (65-72). Family-mediation scenario, distinct from Book 54
// "Choosing My Own Path" (narrator's own career decision under
// family pressure) -- here the narrator is a THIRD party mediating
// between two family members' opposing views on relocating for a
// parent's job, matching the B2 spec's mediation focus applied to
// family dynamics. Teens-track shape: 3 questions, 5 True/False, 5
// Build-a-Sentence per chapter. Chapter images not generated yet --
// image left null per chapter.
import coverImg from "./assets/storybook68/cover.jpg";

export const STORYBOOK_TITLE = "Whether We Should Move";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Delphine sitting at the family dinner table, her parents on opposite sides mid-argument, a moving-company flyer visible on the table.";

export const CHARACTERS = [
  { name: "Delphine", role: "The narrator, a student caught between her parents' disagreement", look: "Quiet observer at first, learns to speak up carefully and diplomatically." },
  { name: "Corinne", role: "Delphine's mother, who has been offered a job in another city", look: "Ambitious, excited about the opportunity, tries to stay patient." },
  { name: "Julien", role: "Delphine's father, who doesn't want to move", look: "Steady, roots deeply valued, worried about disrupting the family." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Announcement",
    image: null,
    imageNote: "Delphine's mother standing in the kitchen holding a phone, excitedly telling the family about a job offer.",
    story:
      "At dinner, my mother announces she's been offered a significant promotion, though it would require our entire family relocating to another city. “Delphine, this could be huge for all of us,” she says, eyes bright. Her excitement is immediately obvious, but I notice my father's expression shift from surprise toward something considerably more guarded. He asks a few polite questions initially, though I can sense he's already forming objections he hasn't voiced yet. After dinner, I overhear them discussing it privately, their voices growing tenser than I've heard in quite a while. I realize, somewhat uncomfortably, that this decision might end up affecting our entire family's future significantly.",
    questions: [
      { text: "What does Delphine's mother announce at dinner?", answer: "A promotion requiring the family to relocate." },
      { text: "How does Delphine's father's expression shift?", answer: "From surprise to something more guarded." },
      { text: "What does Delphine overhear after dinner?", answer: "Her parents discussing it privately, tenser than usual." },
    ],
    trueFalse: [
      { text: "Delphine's mother has been offered a significant promotion.", answer: true },
      { text: "The promotion would require relocating to another city.", answer: true },
      { text: "Delphine's father's expression shifts toward something more guarded.", answer: true },
      { text: "Delphine's father immediately agrees enthusiastically.", answer: false },
      { text: "Delphine overhears her parents' voices growing tenser.", answer: true },
    ],
    buildSentence: [
      {
        target: "At dinner, my mother announces she's been offered a significant promotion, though it would require our entire family relocating to another city.",
        jumbled: ["At", "family", "our", "entire", "promotion,", "it", "relocating", "city.", "dinner,", "though", "require", "mother", "my", "would", "significant", "she's", "been", "a", "announces", "offered", "another", "to"],
      },
      {
        target: "“Delphine, this could be huge for all of us,” she says, eyes bright.",
        jumbled: ["could", "be", "this", "all", "us,”", "says,", "eyes", "“Delphine,", "bright.", "huge", "she", "for", "of"],
      },
      {
        target: "Her excitement is immediately obvious, but I notice my father's expression shift from surprise toward something considerably more guarded.",
        jumbled: ["guarded.", "excitement", "considerably", "but", "Her", "is", "more", "something", "shift", "surprise", "from", "immediately", "obvious,", "notice", "I", "toward", "father's", "my", "expression"],
      },
      {
        target: "He asks a few polite questions initially, though I can sense he's already forming objections he hasn't voiced yet.",
        jumbled: ["a", "initially,", "polite", "questions", "though", "already", "He", "voiced", "he's", "asks", "sense", "forming", "can", "hasn't", "he", "few", "I", "objections", "yet."],
      },
      {
        target: "I overhear them discussing it privately, their voices growing tenser than I've heard in quite a while.",
        jumbled: ["than", "discussing", "while.", "privately,", "it", "growing", "tenser", "voices", "I", "I've", "overhear", "them", "their", "a", "in", "heard", "quite"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about hearing news that could significantly change your family's life.",
    mySentenceExample: "I heard news that could significantly change my family's life.",
  },
  {
    number: 2,
    title: "Two Sides Emerge",
    image: null,
    imageNote: "Delphine standing in the hallway, overhearing her parents' voices from the kitchen through a partially open door.",
    story:
      "Over the following days, my parents' disagreement becomes harder to ignore, even though neither directly involves me in the conversation. My mother argues this opportunity may never come again, and that staying out of fear seems shortsighted long-term. My father counters that uprooting our entire life disrupts not just his career, but my education and friendships considerably too. Neither seems entirely wrong to me, which makes the whole situation feel more complicated than a simple right-versus-wrong disagreement. Think, Delphine, this isn't just about you, I remind myself, pacing my room. I begin wondering whether I should say something, or whether this decision genuinely isn't mine to influence.",
    questions: [
      { text: "What does Delphine's mother argue about the opportunity?", answer: "That it may never come again." },
      { text: "What does Delphine's father counter about uprooting their life?", answer: "That it disrupts his career and her education and friendships." },
      { text: "What does Delphine begin wondering?", answer: "Whether she should say something." },
    ],
    trueFalse: [
      { text: "The disagreement becomes harder to ignore over following days.", answer: true },
      { text: "Delphine's mother argues this opportunity may never come again.", answer: true },
      { text: "Delphine's father says the move would disrupt her education too.", answer: true },
      { text: "Delphine feels one parent is completely wrong.", answer: false },
      { text: "Delphine wonders whether she should say something.", answer: true },
    ],
    buildSentence: [
      {
        target: "Over the following days, my parents' disagreement becomes harder to ignore, even though neither directly involves me in the conversation.",
        jumbled: ["my", "involves", "harder", "following", "days,", "parents'", "the", "ignore,", "to", "directly", "though", "the", "in", "neither", "me", "even", "Over", "becomes", "disagreement", "conversation."],
      },
      {
        target: "My mother argues this opportunity may never come again, and that staying out of fear seems shortsighted long-term.",
        jumbled: ["fear", "of", "argues", "long-term.", "and", "this", "mother", "again,", "shortsighted", "out", "that", "staying", "may", "opportunity", "My", "come", "seems", "never"],
      },
      {
        target: "My father counters that uprooting our entire life disrupts not just his career, but my education and friendships considerably too.",
        jumbled: ["education", "disrupts", "that", "friendships", "our", "my", "too.", "his", "considerably", "and", "just", "but", "career,", "entire", "father", "not", "counters", "My", "life", "uprooting"],
      },
      {
        target: "Neither seems entirely wrong to me, which makes the whole situation feel more complicated than a simple right-versus-wrong disagreement.",
        jumbled: ["seems", "entirely", "me,", "to", "which", "feel", "than", "situation", "makes", "simple", "Neither", "whole", "the", "a", "disagreement.", "right-versus-wrong", "more", "complicated", "wrong"],
      },
      {
        target: "I begin wondering whether I should say something, or whether this decision genuinely isn't mine to influence.",
        jumbled: ["influence.", "wondering", "or", "whether", "decision", "genuinely", "isn't", "to", "I", "begin", "I", "mine", "something,", "should", "whether", "this", "say"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing two people you care about disagreeing, and neither seeming entirely wrong.",
    mySentenceExample: "I noticed two people disagreeing, and neither seemed entirely wrong.",
  },
  {
    number: 3,
    title: "A Conversation with My Mother",
    image: null,
    imageNote: "Delphine sitting with her mother in the living room, both holding mugs, having a calm one-on-one conversation.",
    story:
      "I find a quiet moment to ask my mother directly why this opportunity matters so much to her personally. She explains that she's worked toward something like this for years, and turning it down might mean never having another chance. “You know I've wanted this for years, Delphine,” she says. Moreover, she admits she's scared that if she refuses this offer out of fear, she'll always wonder what she'd given up. I ask whether she's considered how disruptive this could genuinely be for Dad and me, given everything we'd have to leave behind. She acknowledges this honestly, admitting she hasn't fully worked out how to address that part yet.",
    questions: [
      { text: "What does Delphine ask her mother directly?", answer: "Why the opportunity matters so much to her." },
      { text: "What does her mother explain about the opportunity?", answer: "That she's worked toward it for years." },
      { text: "What does Delphine ask her mother to consider?", answer: "How disruptive this could be for Dad and her." },
    ],
    trueFalse: [
      { text: "Delphine asks her mother why this opportunity matters so much.", answer: true },
      { text: "Her mother has worked toward this for years.", answer: true },
      { text: "Her mother says she's scared of always wondering what if.", answer: true },
      { text: "Her mother says she's fully figured out how to help everyone adjust.", answer: false },
      { text: "Delphine asks her mother to consider the disruption for the family.", answer: true },
    ],
    buildSentence: [
      {
        target: "I find a quiet moment to ask my mother directly why this opportunity matters so much to her personally.",
        jumbled: ["directly", "mother", "I", "to", "find", "opportunity", "my", "personally.", "matters", "so", "this", "ask", "moment", "to", "a", "much", "her", "quiet", "why"],
      },
      {
        target: "She explains that she's worked toward something like this for years, and turning it down might mean never having another chance.",
        jumbled: ["that", "having", "mean", "explains", "this", "like", "turning", "worked", "for", "chance.", "and", "years,", "something", "might", "another", "she's", "toward", "down", "it", "never", "She"],
      },
      {
        target: "“You know I've wanted this for years, Delphine,” she says.",
        jumbled: ["Delphine,”", "know", "I've", "she", "says.", "years,", "for", "“You", "this", "wanted"],
      },
      {
        target: "Moreover, she admits she's scared that if she refuses this offer out of fear, she'll always wonder what she'd given up.",
        jumbled: ["of", "she", "scared", "what", "out", "she's", "she", "that", "admits", "she'd", "she'll", "Moreover,", "up.", "refuses", "offer", "fear,", "if", "given", "always", "this", "wonder"],
      },
      {
        target: "I ask whether she's considered how disruptive this could genuinely be for Dad and me, given everything we'd have to leave behind.",
        jumbled: ["be", "could", "me,", "to", "we'd", "given", "I", "have", "this", "leave", "for", "behind.", "considered", "ask", "whether", "she's", "Dad", "everything", "and", "how", "genuinely", "disruptive"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about asking someone to explain why a decision matters so much to them.",
    mySentenceExample: "I asked her to explain why this decision mattered so much.",
  },
  {
    number: 4,
    title: "A Conversation with My Father",
    image: null,
    imageNote: "Delphine sitting with her father in the backyard, both looking out at the garden while talking quietly.",
    story:
      "Later that week, I have a similar conversation with my father, curious to understand his perspective more fully as well. He explains that he's built deep roots here: close friends, a job he genuinely enjoys, and a community that feels like home. “This is home, Delphine,” he says simply. He worries that starting over somewhere unfamiliar, at his age, may not be as easy as my mother seems to assume. Nevertheless, he admits he can see why this opportunity matters deeply to her, even if he personally struggles with it. I realize both my parents are wrestling with genuine, legitimate fears, just from entirely different angles.",
    questions: [
      { text: "What does Delphine's father explain about his life here?", answer: "Deep roots -- friends, a job he enjoys, a community." },
      { text: "What does he worry about regarding starting over?", answer: "That it may not be easy at his age." },
      { text: "What does Delphine realize about both her parents?", answer: "That they're both wrestling with legitimate fears, from different angles." },
    ],
    trueFalse: [
      { text: "Delphine's father has close friends and a job he enjoys.", answer: true },
      { text: "He worries starting over may not be as easy as assumed.", answer: true },
      { text: "He admits he can see why this matters to her.", answer: true },
      { text: "He refuses to acknowledge her perspective at all.", answer: false },
      { text: "Delphine realizes both parents have legitimate fears.", answer: true },
    ],
    buildSentence: [
      {
        target: "Later that week, I have a similar conversation with my father, curious to understand his perspective more fully as well.",
        jumbled: ["Later", "similar", "conversation", "father,", "his", "my", "well.", "as", "more", "with", "have", "week,", "perspective", "curious", "understand", "to", "that", "I", "a", "fully"],
      },
      {
        target: "He explains that he's built deep roots here: close friends, a job he genuinely enjoys, and a community that feels like home.",
        jumbled: ["genuinely", "deep", "built", "he", "home.", "roots", "He", "job", "explains", "that", "here:", "like", "close", "community", "that", "feels", "enjoys,", "a", "he's", "a", "friends,", "and"],
      },
      {
        target: "“This is home, Delphine,” he says simply.",
        jumbled: ["says", "is", "“This", "he", "home,", "Delphine,”", "simply."],
      },
      {
        target: "He worries that starting over somewhere unfamiliar, at his age, may not be as easy as my mother seems to assume.",
        jumbled: ["that", "may", "easy", "worries", "as", "at", "over", "be", "his", "He", "not", "assume.", "mother", "starting", "to", "seems", "unfamiliar,", "somewhere", "as", "my", "age,"],
      },
      {
        target: "Nevertheless, he admits he can see why this opportunity matters deeply to her, even if he personally struggles with it.",
        jumbled: ["why", "with", "can", "even", "he", "her,", "opportunity", "struggles", "matters", "Nevertheless,", "he", "this", "if", "it.", "deeply", "admits", "see", "to", "he", "personally"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about understanding someone's fear better after really listening to them.",
    mySentenceExample: "I understood his fear better after really listening to him.",
  },
  {
    number: 5,
    title: "Finding the Words",
    image: null,
    imageNote: "Delphine sitting alone at her desk, writing notes on paper, trying to organize what she wants to say to her parents.",
    story:
      "Having heard both perspectives, I realize I actually understand something neither of my parents has fully expressed to each other directly. My mother hasn't clearly said she's scared, and my father hasn't clearly said he actually supports her ambition despite his fear. I write down what I want to say, worried that speaking up might seem presumptuous for someone my age. Nevertheless, I remind myself that mediating doesn't mean deciding for them, just helping them actually hear each other properly. You can do this, Delphine, I tell myself, folding the paper closed. Taking a deep breath, I decide I'll try bringing this up carefully during dinner tomorrow evening.",
    questions: [
      { text: "What does Delphine realize she understands?", answer: "Something neither parent has fully expressed to the other." },
      { text: "What hasn't my father clearly said, according to Delphine?", answer: "That he actually supports her ambition despite his fear." },
      { text: "What does Delphine decide to do?", answer: "Bring it up carefully at dinner." },
    ],
    trueFalse: [
      { text: "Delphine realizes something neither parent has expressed to each other.", answer: true },
      { text: "Her mother hasn't clearly said she's scared.", answer: true },
      { text: "Her father hasn't clearly said he supports her ambition.", answer: true },
      { text: "Delphine decides mediating means deciding for her parents.", answer: false },
      { text: "Delphine decides to bring this up carefully during dinner.", answer: true },
    ],
    buildSentence: [
      {
        target: "Having heard both perspectives, I realize I actually understand something neither of my parents has fully expressed to each other directly.",
        jumbled: ["of", "both", "has", "other", "I", "perspectives,", "to", "realize", "understand", "each", "heard", "fully", "actually", "directly.", "something", "neither", "Having", "my", "parents", "I", "expressed"],
      },
      {
        target: "My mother hasn't clearly said she's scared, and my father hasn't clearly said he actually supports her ambition despite his fear.",
        jumbled: ["said", "hasn't", "supports", "fear.", "and", "her", "hasn't", "despite", "My", "father", "my", "said", "clearly", "his", "mother", "ambition", "clearly", "she's", "he", "scared,", "actually"],
      },
      {
        target: "I write down what I want to say, worried that speaking up might seem presumptuous for someone my age.",
        jumbled: ["worried", "for", "age.", "speaking", "might", "that", "up", "to", "down", "want", "say,", "someone", "seem", "presumptuous", "my", "I", "write", "what", "I"],
      },
      {
        target: "Nevertheless, I remind myself that mediating doesn't mean deciding for them, just helping them actually hear each other properly.",
        jumbled: ["for", "each", "Nevertheless,", "remind", "them,", "hear", "that", "I", "other", "doesn't", "just", "them", "actually", "mediating", "helping", "mean", "properly.", "deciding", "myself"],
      },
      {
        target: "Taking a deep breath, I decide I'll try bringing this up carefully during dinner tomorrow evening.",
        jumbled: ["carefully", "evening.", "deep", "tomorrow", "bringing", "up", "breath,", "I'll", "a", "during", "I", "Taking", "decide", "dinner", "this", "try"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about deciding to help two people understand each other better.",
    mySentenceExample: "I decided to help two people understand each other better.",
  },
  {
    number: 6,
    title: "Speaking Up at Dinner",
    image: null,
    imageNote: "Delphine standing at the dinner table, both parents looking at her with surprise as she speaks carefully.",
    story:
      "At dinner, I take a breath and mention, as gently as I can, that I don't think they've actually heard each other's real concerns yet. Both parents look surprised, though neither interrupts, which I take as a cautiously good sign initially. “Go on, Delphine,” my father finally says, nodding. I explain that Mom hasn't said she's scared of regret, and Dad hasn't said he actually admires her ambition. A long silence follows, until my mother reaches over and admits, quietly, that yes, that's exactly how she feels. My father, visibly moved, admits he hadn't realized how much fear was underneath her excitement this whole time.",
    questions: [
      { text: "What does Delphine mention at dinner?", answer: "That they haven't heard each other's real concerns." },
      { text: "How do both parents react initially?", answer: "Surprised, but they don't interrupt." },
      { text: "What does Delphine's mother admit?", answer: "That yes, she's scared of regret." },
    ],
    trueFalse: [
      { text: "Delphine mentions they haven't heard each other's real concerns.", answer: true },
      { text: "Both parents interrupt Delphine immediately.", answer: false },
      { text: "Delphine's mother admits she's scared of regret.", answer: true },
      { text: "Delphine's father admits he hadn't realized her fear.", answer: true },
      { text: "A long silence follows Delphine's explanation.", answer: true },
    ],
    buildSentence: [
      {
        target: "At dinner, I take a breath and mention, as gently as I can, that I don't think they've actually heard each other's real concerns yet.",
        jumbled: ["as", "yet.", "I", "I", "as", "actually", "dinner,", "don't", "that", "each", "and", "take", "breath", "heard", "gently", "mention,", "they've", "other's", "think", "a", "real", "can,", "concerns", "I", "At"],
      },
      {
        target: "Both parents look surprised, though neither interrupts, which I take as a cautiously good sign initially.",
        jumbled: ["which", "I", "surprised,", "parents", "initially.", "Both", "neither", "as", "look", "take", "good", "sign", "interrupts,", "cautiously", "a", "though"],
      },
      {
        target: "“Go on, Delphine,” my father finally says, nodding.",
        jumbled: ["says,", "nodding.", "Delphine,”", "father", "finally", "my", "“Go", "on,"],
      },
      {
        target: "I explain that Mom hasn't said she's scared of regret, and Dad hasn't said he actually admires her ambition.",
        jumbled: ["she's", "that", "Dad", "and", "scared", "actually", "said", "of", "said", "Mom", "ambition.", "explain", "hasn't", "her", "admires", "he", "regret,", "hasn't", "I"],
      },
      {
        target: "A long silence follows, until my mother reaches over and admits, quietly, that yes, that's exactly how she feels.",
        jumbled: ["that", "silence", "she", "feels.", "how", "A", "over", "follows,", "that's", "exactly", "admits,", "long", "my", "and", "reaches", "yes,", "until", "quietly,", "mother"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about speaking up carefully to help two people finally understand each other.",
    mySentenceExample: "I spoke up carefully to help them finally understand each other.",
  },
  {
    number: 7,
    title: "A Real Conversation, Finally",
    image: null,
    imageNote: "Delphine's parents sitting together on the couch that evening, talking softly, Delphine visible in the background giving them space.",
    story:
      "After dinner, my parents talk for over an hour, this time actually listening rather than simply defending their own positions. Okay, Delphine, you did your part, I think, pausing outside the living room. I overhear fragments: my mother acknowledging how hard leaving would genuinely be for Dad, and him acknowledging her fear of regret. Neither reaches a final decision that night, though something about their tone has shifted considerably from before. I give them space, retreating to my room, feeling relieved that at least they're finally communicating honestly now. Whatever they ultimately decide, I sense this conversation matters more than the actual outcome itself somehow.",
    questions: [
      { text: "How long do Delphine's parents talk after dinner?", answer: "Over an hour." },
      { text: "What does Delphine overhear her mother acknowledging?", answer: "How hard leaving would be for Dad." },
      { text: "How does Delphine feel giving them space?", answer: "Relieved they're finally communicating honestly." },
    ],
    trueFalse: [
      { text: "Delphine's parents talk for over an hour.", answer: true },
      { text: "Her mother acknowledges how hard leaving would be for Dad.", answer: true },
      { text: "They reach a final decision that same night.", answer: false },
      { text: "Delphine feels relieved they're communicating honestly.", answer: true },
      { text: "Delphine senses this conversation matters more than the outcome.", answer: true },
    ],
    buildSentence: [
      {
        target: "My parents talk for over an hour, this time actually listening rather than simply defending their own positions.",
        jumbled: ["this", "for", "parents", "an", "talk", "time", "their", "than", "own", "over", "rather", "actually", "positions.", "listening", "hour,", "defending", "simply", "My"],
      },
      {
        target: "Okay, Delphine, you did your part, I think, pausing outside the living room.",
        jumbled: ["part,", "Delphine,", "I", "outside", "you", "the", "your", "think,", "did", "pausing", "room.", "Okay,", "living"],
      },
      {
        target: "I overhear fragments: my mother acknowledging how hard leaving would genuinely be for Dad, and him acknowledging her fear of regret.",
        jumbled: ["hard", "would", "leaving", "genuinely", "for", "acknowledging", "overhear", "of", "I", "be", "him", "regret.", "fragments:", "and", "acknowledging", "mother", "how", "Dad,", "her", "my", "fear"],
      },
      {
        target: "Neither reaches a final decision that night, though something about their tone has shifted considerably from before.",
        jumbled: ["that", "their", "before.", "Neither", "reaches", "decision", "considerably", "from", "final", "shifted", "night,", "something", "a", "has", "about", "though", "tone"],
      },
      {
        target: "I give them space, retreating to my room, feeling relieved that at least they're finally communicating honestly now.",
        jumbled: ["room,", "communicating", "least", "them", "now.", "at", "they're", "relieved", "I", "that", "my", "space,", "to", "finally", "feeling", "give", "honestly", "retreating"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about giving two people space to have an honest conversation.",
    mySentenceExample: "I gave my parents space to have an honest conversation.",
  },
  {
    number: 8,
    title: "A Family Decision",
    image: null,
    imageNote: "The whole family sitting together at the kitchen table, a laptop open showing information about the new city, all three looking calm.",
    story:
      "A few days later, my parents call a family meeting, something we rarely do outside of holidays or emergencies. They explain they've decided to accept the offer together, but with a plan that addresses both their concerns directly. My mother will start the new role, while my father takes a few months transitioning his own work remotely before fully relocating. “This wouldn't have happened without you pushing us to talk, Delphine,” he adds. This staggered approach, they explain, gives everyone time to adjust rather than uprooting everything abruptly all at once. I feel proud, realizing this compromise likely wouldn't have emerged without that honest conversation at dinner.",
    questions: [
      { text: "What do Delphine's parents call a few days later?", answer: "A family meeting." },
      { text: "What have they decided together?", answer: "To accept the offer, with a staggered relocation plan." },
      { text: "What does the staggered approach give everyone?", answer: "Time to adjust." },
    ],
    trueFalse: [
      { text: "Delphine's parents call a family meeting a few days later.", answer: true },
      { text: "They've decided to accept the offer together with a plan.", answer: true },
      { text: "Her father will relocate immediately with no transition at all.", answer: false },
      { text: "The staggered approach gives everyone time to adjust.", answer: true },
      { text: "Delphine feels proud about this compromise.", answer: true },
    ],
    buildSentence: [
      {
        target: "A few days later, my parents call a family meeting, something we rarely do outside of holidays or emergencies.",
        jumbled: ["rarely", "parents", "call", "do", "my", "later,", "family", "few", "outside", "we", "days", "A", "something", "holidays", "a", "meeting,", "of", "or", "emergencies."],
      },
      {
        target: "They explain they've decided to accept the offer together, but with a plan that addresses both their concerns directly.",
        jumbled: ["that", "the", "explain", "together,", "offer", "decided", "concerns", "directly.", "with", "they've", "They", "their", "addresses", "but", "a", "plan", "to", "both", "accept"],
      },
      {
        target: "My mother will start the new role, while my father takes a few months transitioning his own work remotely before fully relocating.",
        jumbled: ["work", "father", "a", "new", "his", "the", "transitioning", "My", "start", "months", "while", "role,", "mother", "will", "few", "remotely", "before", "own", "relocating.", "my", "takes", "fully"],
      },
      {
        target: "“This wouldn't have happened without you pushing us to talk, Delphine,” he adds.",
        jumbled: ["adds.", "you", "to", "pushing", "he", "us", "without", "wouldn't", "happened", "talk,", "Delphine,”", "have", "“This"],
      },
      {
        target: "This staggered approach, they explain, gives everyone time to adjust rather than uprooting everything abruptly all at once.",
        jumbled: ["uprooting", "This", "all", "rather", "adjust", "they", "everyone", "explain,", "approach,", "at", "everything", "gives", "time", "staggered", "once.", "to", "than", "abruptly"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a family finding a compromise that addressed everyone's concerns.",
    mySentenceExample: "My family found a compromise that addressed everyone's concerns.",
  },
  {
    number: 9,
    title: "Saying Goodbye, For Now",
    image: null,
    imageNote: "Delphine hugging friends outside her house, moving boxes visible in the background, an emotional but hopeful scene.",
    story:
      "As moving day approaches, I say goodbye to close friends, feeling a familiar mixture of sadness and cautious excitement simultaneously. Several friends promise to visit, and given how manageable travel actually is now, I believe they genuinely mean it. My father seems calmer than I expected, having had time to process the decision rather than feeling forced into it suddenly. My mother thanks me privately: “Delphine, what you did at dinner changed everything.” I realize that sometimes, the most helpful thing you can do isn't choosing a side, but helping people truly hear each other.",
    questions: [
      { text: "What does Delphine feel as moving day approaches?", answer: "A mix of sadness and cautious excitement." },
      { text: "How does Delphine's father seem compared to what she expected?", answer: "Calmer." },
      { text: "What does Delphine's mother thank her for?", answer: "Speaking up at dinner." },
    ],
    trueFalse: [
      { text: "Delphine feels a mixture of sadness and cautious excitement.", answer: true },
      { text: "Several friends promise to visit.", answer: true },
      { text: "Her father seems calmer than Delphine expected.", answer: true },
      { text: "Her mother thanks Delphine for speaking up at dinner.", answer: true },
      { text: "Delphine believes choosing a side would have been more helpful.", answer: false },
    ],
    buildSentence: [
      {
        target: "I say goodbye to close friends, feeling a familiar mixture of sadness and cautious excitement simultaneously.",
        jumbled: ["I", "sadness", "friends,", "goodbye", "of", "a", "familiar", "close", "cautious", "to", "say", "mixture", "excitement", "feeling", "and", "simultaneously."],
      },
      {
        target: "Several friends promise to visit, and given how manageable travel actually is now, I believe they genuinely mean it.",
        jumbled: ["I", "is", "genuinely", "promise", "now,", "given", "to", "manageable", "visit,", "travel", "how", "it.", "and", "actually", "Several", "believe", "mean", "friends", "they"],
      },
      {
        target: "My father seems calmer than I expected, having had time to process the decision rather than feeling forced into it suddenly.",
        jumbled: ["forced", "to", "expected,", "decision", "had", "the", "having", "it", "My", "I", "rather", "into", "calmer", "father", "seems", "than", "time", "than", "suddenly.", "process", "feeling"],
      },
      {
        target: "My mother thanks me privately: “Delphine, what you did at dinner changed everything.”",
        jumbled: ["dinner", "me", "you", "My", "changed", "mother", "privately:", "“Delphine,", "what", "at", "thanks", "did", "everything.”"],
      },
      {
        target: "I realize that sometimes, the most helpful thing you can do isn't choosing a side, but helping people truly hear each other.",
        jumbled: ["do", "that", "but", "each", "hear", "most", "helpful", "people", "realize", "choosing", "the", "sometimes,", "helping", "can", "you", "isn't", "thing", "other.", "a", "truly", "I", "side,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about the mixed feelings of saying goodbye before a big change.",
    mySentenceExample: "I felt mixed emotions saying goodbye before a big change.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Delphine sitting in her new bedroom weeks later, unpacked boxes around her, writing in a journal with a content expression.",
    story:
      "Looking back on the whole process, I realize how differently things might have gone had I simply stayed silent throughout it all. You made a difference, Delphine, I think, glancing at the still-unpacked boxes around me. If my parents had never fully expressed their real fears to each other, the decision may have felt more like a battle than a compromise. Instead, helping them actually listen allowed a solution to emerge that respected both what they needed. I've learned that mediation between people you love isn't about choosing sides, but about creating space for real honesty. In the end, this experience taught me that families, given the chance, can usually find their way to fairness together.",
    questions: [
      { text: "What does Delphine realize looking back on the process?", answer: "How differently things might have gone had she stayed silent." },
      { text: "What might have happened if she had stayed silent?", answer: "The decision may have felt like a battle instead of a compromise." },
      { text: "What has Delphine learned about mediation between people you love?", answer: "That it's about creating space for real honesty, not choosing sides." },
    ],
    trueFalse: [
      { text: "Delphine realizes things might have gone differently without her involvement.", answer: true },
      { text: "Without honesty, the decision may have felt more like a battle.", answer: true },
      { text: "Delphine believes mediation means choosing sides between people you love.", answer: false },
      { text: "Delphine learns families can usually find their way to fairness.", answer: true },
      { text: "Helping her parents listen allowed a real solution to emerge.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the whole process, I realize how differently things might have gone had I simply stayed silent throughout it all.",
        jumbled: ["differently", "it", "things", "Looking", "throughout", "whole", "had", "the", "back", "simply", "on", "I", "I", "realize", "silent", "gone", "stayed", "process,", "all.", "how", "have", "might"],
      },
      {
        target: "You made a difference, Delphine, I think, glancing at the still-unpacked boxes around me.",
        jumbled: ["You", "the", "still-unpacked", "made", "I", "think,", "a", "me.", "boxes", "at", "difference,", "Delphine,", "glancing", "around"],
      },
      {
        target: "The decision may have felt more like a battle than a compromise.",
        jumbled: ["compromise.", "than", "The", "a", "felt", "like", "have", "decision", "may", "battle", "more", "a"],
      },
      {
        target: "Instead, helping them actually listen allowed a solution to emerge that respected both what they needed.",
        jumbled: ["what", "Instead,", "respected", "helping", "solution", "both", "they", "to", "a", "actually", "listen", "emerge", "allowed", "them", "needed.", "that"],
      },
      {
        target: "In the end, this experience taught me that families, given the chance, can usually find their way to fairness together.",
        jumbled: ["usually", "find", "way", "this", "families,", "to", "the", "together.", "chance,", "that", "the", "taught", "In", "their", "experience", "given", "end,", "me", "can", "fairness"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from helping people you love understand each other.",
    mySentenceExample: "I learned that helping people understand each other creates real change.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
