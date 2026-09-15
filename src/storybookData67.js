// B2 Teens digital storybook, Book 67: "The Rumor in the Group Chat"
// Static content -- no Supabase. Third book in the B2 Teens batch
// (65-72). Misinformation/ethics scenario, distinct from Book 53
// "Standing Up to a Bully Online" (direct bullying, a bystander
// dilemma) -- this one centers on a rumor spreading and the narrator
// weighing loyalty vs. fairness before intervening, matching the B2
// spec's mediation/comparing-viewpoints focus. Teens-track shape: 3
// questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image left null per chapter.
import coverImg from "./assets/storybook67/cover.jpg";

export const STORYBOOK_TITLE = "The Rumor in the Group Chat";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Malik staring at his phone screen showing a group chat, a worried expression as he scrolls through a long thread of messages.";

export const CHARACTERS = [
  { name: "Malik", role: "The narrator, a student in a large friend group chat", look: "Hoodie, backpack, thoughtful and a little conflict-averse." },
  { name: "Beatriz", role: "A classmate the rumor is about", look: "Quiet, keeps to herself lately, seems increasingly withdrawn." },
  { name: "Otis", role: "The classmate who started the rumor", look: "Confident, popular, doesn't seem to realize the harm he's caused." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Message Appears",
    image: null,
    imageNote: "Malik's phone screen showing a group chat notification, his face illuminated by the screen light at night.",
    story:
      "Late one evening, a message pops up in our class group chat claiming Beatriz had cheated on last week's history exam. I don't recognize the source immediately, though the message spreads within minutes, with dozens of replies piling up rapidly. Some students seem to accept it as fact instantly, while others question where this information had actually come from originally. I scroll through the thread uneasily, noticing Beatriz hasn't responded, which somehow makes the whole situation feel worse. Okay, Malik, don't just sit here scrolling, I think, my stomach tightening. Whatever the truth turns out to be, I sense this rumor has already caused damage that won't be easily undone.",
    questions: [
      { text: "What does the message claim about Beatriz?", answer: "That she cheated on last week's history exam." },
      { text: "How quickly does the message spread?", answer: "Within minutes." },
      { text: "What does Malik notice about Beatriz's response?", answer: "That she hasn't responded." },
    ],
    trueFalse: [
      { text: "The message claims Beatriz cheated on last week's exam.", answer: true },
      { text: "The message spreads within minutes.", answer: true },
      { text: "Every single student immediately accepts it as fact.", answer: false },
      { text: "Beatriz hasn't responded in the thread.", answer: true },
      { text: "Malik senses this rumor has already caused damage.", answer: true },
    ],
    buildSentence: [
      {
        target: "Late one evening, a message pops up in our class group chat claiming Beatriz had cheated on last week's history exam.",
        jumbled: ["claiming", "evening,", "week's", "had", "one", "last", "exam.", "message", "on", "Beatriz", "in", "pops", "class", "up", "a", "group", "Late", "cheated", "chat", "history", "our"],
      },
      {
        target: "I don't recognize the source immediately, though the message spreads within minutes, with dozens of replies piling up rapidly.",
        jumbled: ["the", "rapidly.", "message", "replies", "spreads", "recognize", "up", "with", "the", "within", "dozens", "though", "source", "immediately,", "of", "minutes,", "I", "piling", "don't"],
      },
      {
        target: "Some students seem to accept it as fact instantly, while others question where this information had actually come from originally.",
        jumbled: ["where", "others", "actually", "Some", "from", "students", "had", "question", "it", "seem", "originally.", "information", "to", "as", "while", "instantly,", "come", "accept", "this", "fact"],
      },
      {
        target: "I scroll through the thread uneasily, noticing Beatriz hasn't responded, which somehow makes the whole situation feel worse.",
        jumbled: ["responded,", "thread", "through", "the", "which", "noticing", "worse.", "uneasily,", "the", "whole", "situation", "feel", "I", "somehow", "makes", "scroll", "Beatriz", "hasn't"],
      },
      {
        target: "Whatever the truth turns out to be, I sense this rumor has already caused damage that won't be easily undone.",
        jumbled: ["to", "damage", "be,", "has", "turns", "out", "sense", "won't", "the", "this", "Whatever", "undone.", "that", "easily", "caused", "already", "truth", "rumor", "I", "be"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about seeing a rumor spread quickly online.",
    mySentenceExample: "I saw a rumor spread quickly online last week.",
  },
  {
    number: 2,
    title: "Tracing the Source",
    image: null,
    imageNote: "Malik scrolling back through old messages on his phone, trying to find where the rumor originally started.",
    story:
      "Curious about where this claim originated, I scroll back further, trying to trace the message to its actual first appearance. Eventually, I find it: Otis had posted the original claim, saying he'd heard it secondhand from someone in another class. This detail concerns me considerably, since secondhand information, especially something this serious, ought to be verified before being shared publicly. I message Otis privately, asking whether he'd actually confirmed any of this before posting it to the entire group. “Relax, Malik, it's not that big a deal,” he replies first. He responds casually, saying he'd simply assumed it was true because multiple people had apparently mentioned something similar.",
    questions: [
      { text: "What does Malik do to find the source of the claim?", answer: "Scrolls back to trace the message's first appearance." },
      { text: "Who posted the original claim, and where had he heard it?", answer: "Otis, secondhand from someone in another class." },
      { text: "What does Malik ask Otis privately?", answer: "Whether he'd actually confirmed any of it." },
    ],
    trueFalse: [
      { text: "Malik scrolls back to trace the message's original appearance.", answer: true },
      { text: "Otis posted the original claim.", answer: true },
      { text: "Otis says he heard it secondhand from another class.", answer: true },
      { text: "Otis confirms he had personally verified the claim.", answer: false },
      { text: "Malik messages Otis privately about the claim.", answer: true },
    ],
    buildSentence: [
      {
        target: "Curious about where this claim originated, I scroll back further, trying to trace the message to its actual first appearance.",
        jumbled: ["trace", "trying", "I", "back", "to", "claim", "about", "message", "this", "to", "first", "actual", "Curious", "its", "further,", "scroll", "where", "originated,", "appearance.", "the"],
      },
      {
        target: "Eventually, I find it: Otis had posted the original claim, saying he'd heard it secondhand from someone in another class.",
        jumbled: ["I", "another", "class.", "he'd", "Eventually,", "secondhand", "claim,", "it", "heard", "had", "it:", "original", "posted", "from", "Otis", "in", "the", "find", "someone", "saying"],
      },
      {
        target: "This detail concerns me considerably, since secondhand information, especially something this serious, ought to be verified before being shared publicly.",
        jumbled: ["something", "before", "ought", "considerably,", "concerns", "This", "this", "to", "serious,", "information,", "especially", "shared", "secondhand", "verified", "being", "since", "publicly.", "detail", "be", "me"],
      },
      {
        target: "I message Otis privately, asking whether he'd actually confirmed any of this before posting it to the entire group.",
        jumbled: ["asking", "confirmed", "to", "actually", "posting", "any", "I", "message", "this", "privately,", "entire", "group.", "he'd", "the", "Otis", "it", "of", "whether", "before"],
      },
      {
        target: "He responds casually, saying he'd simply assumed it was true because multiple people had apparently mentioned something similar.",
        jumbled: ["mentioned", "assumed", "had", "people", "similar.", "apparently", "true", "saying", "simply", "casually,", "He", "it", "was", "he'd", "something", "responds", "multiple", "because"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about tracing information back to find out if it was actually true.",
    mySentenceExample: "I traced the information back to find out if it was true.",
  },
  {
    number: 3,
    title: "Weighing Loyalty and Fairness",
    image: null,
    imageNote: "Malik sitting on his bed, phone in hand, staring at the ceiling deep in thought.",
    story:
      "I find myself genuinely torn about what to do next, caught between two competing instincts that both feel legitimate. On one hand, Otis is someone I've known for years, and calling him out publicly might damage our friendship considerably. On the other hand, Beatriz is being unfairly judged based on nothing more than an unverified secondhand claim. I remind myself that loyalty to a friend shouldn't mean staying silent while someone else gets hurt unfairly. Okay, Malik, you know what you have to do, I think, sitting up straighter. Given this reasoning, I decide that saying something, however uncomfortable, seems like the only genuinely fair option available.",
    questions: [
      { text: "What two competing instincts does Malik feel torn between?", answer: "Loyalty to Otis and fairness to Beatriz." },
      { text: "Why might calling Otis out publicly be difficult?", answer: "It might damage their years-long friendship." },
      { text: "What does Malik decide about staying silent?", answer: "That it shouldn't mean letting someone else get hurt unfairly." },
    ],
    trueFalse: [
      { text: "Malik feels torn between two competing instincts.", answer: true },
      { text: "Malik has known Otis for years.", answer: true },
      { text: "Malik decides loyalty means staying silent no matter what.", answer: false },
      { text: "Beatriz is being judged based on an unverified claim.", answer: true },
      { text: "Malik decides saying something seems like the fair option.", answer: true },
    ],
    buildSentence: [
      {
        target: "I find myself genuinely torn about what to do next, caught between two competing instincts that both feel legitimate.",
        jumbled: ["do", "legitimate.", "genuinely", "myself", "to", "that", "about", "competing", "I", "feel", "between", "find", "torn", "two", "next,", "what", "instincts", "both", "caught"],
      },
      {
        target: "On one hand, Otis is someone I've known for years, and calling him out publicly might damage our friendship considerably.",
        jumbled: ["hand,", "calling", "years,", "might", "is", "someone", "I've", "Otis", "damage", "On", "considerably.", "known", "out", "him", "one", "for", "and", "friendship", "our", "publicly"],
      },
      {
        target: "On the other hand, Beatriz is being unfairly judged based on nothing more than an unverified secondhand claim.",
        jumbled: ["is", "the", "On", "being", "nothing", "than", "based", "more", "hand,", "other", "an", "Beatriz", "secondhand", "unverified", "unfairly", "on", "claim.", "judged"],
      },
      {
        target: "I remind myself that loyalty to a friend shouldn't mean staying silent while someone else gets hurt unfairly.",
        jumbled: ["while", "remind", "gets", "myself", "to", "hurt", "loyalty", "someone", "I", "mean", "else", "that", "staying", "shouldn't", "friend", "silent", "a", "unfairly."],
      },
      {
        target: "Given this reasoning, I decide that saying something, however uncomfortable, seems like the only genuinely fair option available.",
        jumbled: ["fair", "saying", "that", "genuinely", "however", "uncomfortable,", "option", "only", "Given", "decide", "this", "I", "the", "like", "available.", "seems", "reasoning,", "something,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being torn between loyalty to a friend and doing what's fair.",
    mySentenceExample: "I felt torn between loyalty to my friend and doing what's fair.",
  },
  {
    number: 4,
    title: "Speaking with Otis",
    image: null,
    imageNote: "Malik and Otis talking privately in a school hallway, Otis looking increasingly uncomfortable as Malik speaks.",
    story:
      "I find Otis alone before class and explain, as calmly as I can manage, why this situation genuinely concerns me. I point out that spreading unverified claims, especially ones this serious, can cause real harm regardless of whether they're true. Otis initially seems defensive, insisting he hadn't meant any real damage by simply sharing what he'd heard. “Come on, Malik, I didn't mean anything by it,” he says defensively. However, as I continue explaining Beatriz's likely perspective, his expression gradually shifts from defensiveness toward genuine discomfort instead. By the end of our conversation, he admits, somewhat reluctantly, that he probably should have verified things first.",
    questions: [
      { text: "What does Malik explain to Otis?", answer: "That spreading unverified claims can cause real harm." },
      { text: "How does Otis initially react?", answer: "Defensively." },
      { text: "What does Otis admit by the end of the conversation?", answer: "That he probably should have verified things first." },
    ],
    trueFalse: [
      { text: "Malik finds Otis alone before class to talk.", answer: true },
      { text: "Otis initially seems defensive about the situation.", answer: true },
      { text: "Otis's expression stays exactly the same throughout the conversation.", answer: false },
      { text: "Otis admits he probably should have verified things first.", answer: true },
      { text: "Malik explains that unverified claims can cause real harm.", answer: true },
    ],
    buildSentence: [
      {
        target: "I find Otis alone before class and explain, as calmly as I can manage, why this situation genuinely concerns me.",
        jumbled: ["as", "class", "this", "explain,", "as", "me.", "manage,", "calmly", "I", "situation", "alone", "can", "why", "Otis", "genuinely", "find", "before", "and", "concerns", "I"],
      },
      {
        target: "I point out that spreading unverified claims, especially ones this serious, can cause real harm regardless of whether they're true.",
        jumbled: ["whether", "unverified", "can", "this", "they're", "regardless", "I", "serious,", "spreading", "ones", "especially", "cause", "real", "claims,", "true.", "that", "point", "harm", "out", "of"],
      },
      {
        target: "Otis initially seems defensive, insisting he hadn't meant any real damage by simply sharing what he'd heard.",
        jumbled: ["damage", "he'd", "he", "meant", "hadn't", "sharing", "defensive,", "what", "any", "initially", "heard.", "seems", "simply", "insisting", "by", "real", "Otis"],
      },
      {
        target: "“Come on, Malik, I didn't mean anything by it,” he says defensively.",
        jumbled: ["he", "says", "anything", "Malik,", "on,", "didn't", "I", "“Come", "by", "defensively.", "it,”", "mean"],
      },
      {
        target: "However, as I continue explaining Beatriz's likely perspective, his expression gradually shifts from defensiveness toward genuine discomfort instead.",
        jumbled: ["expression", "I", "genuine", "as", "defensiveness", "toward", "perspective,", "explaining", "likely", "his", "from", "instead.", "discomfort", "gradually", "Beatriz's", "continue", "shifts", "However,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about explaining calmly why something someone did was harmful.",
    mySentenceExample: "I explained calmly why something he did was harmful.",
  },
  {
    number: 5,
    title: "A Difficult Conversation with Beatriz",
    image: null,
    imageNote: "Malik approaching Beatriz at her locker, she looks guarded at first, then gradually more open as they talk.",
    story:
      "Deciding I also need to speak with Beatriz directly, I approach her carefully, aware she might reasonably distrust anyone right now. She admits she's seen the messages and had genuinely considered not coming to school at all this week. “I almost didn't come in today, Malik,” she admits quietly. I apologize on behalf of the group chat generally, even though I hadn't personally spread the original claim myself. She appreciates this, though she mentions that apologies alone won't necessarily undo the damage already done to her reputation. Given this, I ask what she thinks would actually help the situation moving forward from here.",
    questions: [
      { text: "Why does Malik decide he needs to speak with Beatriz?", answer: "To address the situation directly." },
      { text: "What had Beatriz genuinely considered doing?", answer: "Not coming to school that week." },
      { text: "What does Beatriz mention about apologies alone?", answer: "That they won't necessarily undo the damage." },
    ],
    trueFalse: [
      { text: "Malik decides he needs to speak with Beatriz directly.", answer: true },
      { text: "Beatriz had considered not coming to school at all.", answer: true },
      { text: "Beatriz says apologies alone will completely fix everything.", answer: false },
      { text: "Malik apologizes on behalf of the group chat.", answer: true },
      { text: "Malik asks what would actually help the situation.", answer: true },
    ],
    buildSentence: [
      {
        target: "Deciding I also need to speak with Beatriz directly, I approach her carefully, aware she might reasonably distrust anyone right now.",
        jumbled: ["might", "approach", "with", "directly,", "she", "need", "right", "her", "carefully,", "also", "Beatriz", "anyone", "speak", "I", "aware", "now.", "I", "reasonably", "distrust", "to", "Deciding"],
      },
      {
        target: "She admits she's seen the messages and had genuinely considered not coming to school at all this week.",
        jumbled: ["she's", "considered", "the", "week.", "this", "coming", "genuinely", "all", "not", "to", "She", "admits", "messages", "seen", "had", "at", "and", "school"],
      },
      {
        target: "“I almost didn't come in today, Malik,” she admits quietly.",
        jumbled: ["today,", "didn't", "come", "“I", "quietly.", "she", "in", "admits", "Malik,”", "almost"],
      },
      {
        target: "I apologize on behalf of the group chat generally, even though I hadn't personally spread the original claim myself.",
        jumbled: ["the", "claim", "I", "even", "group", "on", "generally,", "the", "I", "behalf", "personally", "apologize", "hadn't", "chat", "though", "original", "of", "spread", "myself."],
      },
      {
        target: "She appreciates this, though she mentions that apologies alone won't necessarily undo the damage already done to her reputation.",
        jumbled: ["to", "her", "reputation.", "apologies", "done", "alone", "the", "though", "already", "She", "that", "this,", "she", "mentions", "necessarily", "appreciates", "damage", "undo", "won't"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about apologizing to someone even though you weren't fully responsible for the harm.",
    mySentenceExample: "I apologized even though I wasn't fully responsible for the harm.",
  },
  {
    number: 6,
    title: "A Public Correction",
    image: null,
    imageNote: "Otis typing a message into the group chat, Malik standing nearby, both looking at the phone screen together.",
    story:
      "Otis and I agree that a public correction in the group chat is necessary, given how publicly the rumor had spread. “Thanks for pushing me on this, Malik,” he says before typing. He writes a message admitting the original claim was unverified and apologizing directly to Beatriz for the harm caused. Some students respond supportively, though a few seem oddly reluctant to fully let go of the original, more dramatic story. I add my own message, gently reminding everyone that spreading unverified claims can hurt real people regardless of intent. Watching the conversation shift, even slightly, toward accountability feels like a small but genuinely meaningful victory.",
    questions: [
      { text: "What do Otis and Malik agree is necessary?", answer: "A public correction in the group chat." },
      { text: "What does Otis's message admit?", answer: "That the claim was unverified, and apologizes to Beatriz." },
      { text: "How do some students respond to the correction?", answer: "Supportively, though a few seem reluctant to let go of the story." },
    ],
    trueFalse: [
      { text: "Otis and Malik agree a public correction is necessary.", answer: true },
      { text: "Otis's message admits the original claim was unverified.", answer: true },
      { text: "Every single student responds supportively without any reluctance.", answer: false },
      { text: "Malik adds his own message about unverified claims.", answer: true },
      { text: "Malik feels this shift toward accountability is meaningful.", answer: true },
    ],
    buildSentence: [
      {
        target: "Otis and I agree that a public correction in the group chat is necessary, given how publicly the rumor had spread.",
        jumbled: ["necessary,", "agree", "correction", "the", "that", "in", "rumor", "I", "publicly", "the", "public", "Otis", "a", "given", "how", "group", "had", "is", "spread.", "and", "chat"],
      },
      {
        target: "“Thanks for pushing me on this, Malik,” he says before typing.",
        jumbled: ["this,", "he", "says", "me", "typing.", "“Thanks", "for", "pushing", "Malik,”", "on", "before"],
      },
      {
        target: "He writes a message admitting the original claim was unverified and apologizing directly to Beatriz for the harm caused.",
        jumbled: ["caused.", "was", "original", "message", "writes", "the", "to", "for", "admitting", "He", "directly", "the", "and", "a", "Beatriz", "apologizing", "harm", "unverified", "claim"],
      },
      {
        target: "Some students respond supportively, though a few seem oddly reluctant to fully let go of the original, more dramatic story.",
        jumbled: ["fully", "of", "a", "Some", "though", "supportively,", "reluctant", "let", "the", "oddly", "to", "dramatic", "more", "few", "seem", "original,", "students", "story.", "go", "respond"],
      },
      {
        target: "I add my own message, gently reminding everyone that spreading unverified claims can hurt real people regardless of intent.",
        jumbled: ["message,", "my", "real", "can", "of", "everyone", "hurt", "spreading", "intent.", "regardless", "unverified", "people", "reminding", "gently", "I", "own", "that", "claims", "add"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone publicly correcting a mistake they had made.",
    mySentenceExample: "Someone publicly corrected a mistake they had made online.",
  },
  {
    number: 7,
    title: "Beatriz's Response",
    image: null,
    imageNote: "Beatriz reading the correction message on her phone, a small, cautious smile forming as she looks up.",
    story:
      "The next day, Beatriz mentions she'd seen the correction message and appreciated that Otis had actually taken responsibility publicly. She admits it doesn't completely erase how the past week had felt, though it genuinely helps somewhat. “It means something that you asked, Malik,” she adds. I ask whether she thinks Otis's apology felt sincere, given everything that had happened between them. She considers this carefully, then says that his willingness to admit fault publicly, in spite of the social risk, seemed like real accountability. Hearing her perspective directly, rather than assuming how she felt, strikes me as something I should have done earlier.",
    questions: [
      { text: "What does Beatriz mention the next day?", answer: "That she'd seen the correction and appreciated it." },
      { text: "What does Beatriz say about the past week?", answer: "That it doesn't completely erase how it felt, but it helps." },
      { text: "What does Beatriz think about Otis's apology?", answer: "That admitting fault publicly was real accountability." },
    ],
    trueFalse: [
      { text: "Beatriz mentions she'd seen the correction message.", answer: true },
      { text: "Beatriz says the correction completely erases the past week.", answer: false },
      { text: "Beatriz thinks Otis's public admission seemed like real accountability.", answer: true },
      { text: "Malik asks whether Beatriz thinks the apology felt sincere.", answer: true },
      { text: "Malik realizes he should have asked her perspective earlier.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next day, Beatriz mentions she'd seen the correction message and appreciated that Otis had actually taken responsibility publicly.",
        jumbled: ["she'd", "message", "that", "Beatriz", "responsibility", "the", "Otis", "The", "correction", "seen", "next", "mentions", "actually", "day,", "and", "publicly.", "appreciated", "taken", "had"],
      },
      {
        target: "She admits it doesn't completely erase how the past week had felt, though it genuinely helps somewhat.",
        jumbled: ["though", "it", "how", "genuinely", "it", "had", "completely", "erase", "somewhat.", "felt,", "helps", "She", "week", "past", "the", "doesn't", "admits"],
      },
      {
        target: "“It means something that you asked, Malik,” she adds.",
        jumbled: ["something", "“It", "she", "asked,", "that", "adds.", "Malik,”", "means", "you"],
      },
      {
        target: "I ask whether she thinks Otis's apology felt sincere, given everything that had happened between them.",
        jumbled: ["whether", "everything", "happened", "them.", "had", "I", "thinks", "between", "ask", "felt", "that", "sincere,", "given", "she", "apology", "Otis's"],
      },
      {
        target: "She considers this carefully, then says that his willingness to admit fault publicly, in spite of the social risk, seemed like real accountability.",
        jumbled: ["willingness", "risk,", "his", "considers", "to", "She", "like", "publicly,", "the", "then", "admit", "seemed", "accountability.", "carefully,", "social", "of", "real", "that", "this", "spite", "says", "in", "fault"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about asking someone directly how they felt instead of assuming.",
    mySentenceExample: "I asked her directly how she felt instead of assuming.",
  },
  {
    number: 8,
    title: "A Broader Conversation",
    image: null,
    imageNote: "Malik's class having a group discussion led by a teacher about online rumors and responsibility, students seated in a circle.",
    story:
      "Our homeroom teacher, having heard about the situation, dedicates part of a class period to discussing online responsibility more broadly. Several students share their own experiences with rumors, both as the person who spread one and the person harmed by one. Otis speaks up unprompted, admitting publicly what he'd already told me privately about not verifying information first. “Malik already knows this,” he adds, glancing my way, “but I want everyone to hear it.” This openness, moreover, seems to shift the classroom's mood from awkward silence toward genuine, thoughtful reflection instead. I realize this single incident has sparked a conversation that might actually change how people behave going forward.",
    questions: [
      { text: "What does the homeroom teacher dedicate part of the class to?", answer: "Discussing online responsibility." },
      { text: "What do several students share?", answer: "Their own experiences with rumors." },
      { text: "What does Otis do during this class discussion?", answer: "Admits publicly what he'd told Malik privately." },
    ],
    trueFalse: [
      { text: "The homeroom teacher dedicates class time to online responsibility.", answer: true },
      { text: "Several students share their own experiences with rumors.", answer: true },
      { text: "Otis refuses to say anything during the discussion.", answer: false },
      { text: "Otis speaks up unprompted about not verifying information.", answer: true },
      { text: "Malik feels this incident sparked a meaningful conversation.", answer: true },
    ],
    buildSentence: [
      {
        target: "Our homeroom teacher, having heard about the situation, dedicates part of a class period to discussing online responsibility more broadly.",
        jumbled: ["homeroom", "dedicates", "part", "discussing", "the", "online", "to", "situation,", "teacher,", "having", "a", "more", "of", "class", "broadly.", "heard", "responsibility", "Our", "period", "about"],
      },
      {
        target: "Several students share their own experiences with rumors, both as the person who spread one and the person harmed by one.",
        jumbled: ["harmed", "who", "own", "one.", "spread", "person", "the", "experiences", "the", "rumors,", "and", "Several", "by", "person", "as", "their", "share", "students", "one", "with", "both"],
      },
      {
        target: "Otis speaks up unprompted, admitting publicly what he'd already told me privately about not verifying information first.",
        jumbled: ["information", "me", "admitting", "what", "Otis", "verifying", "told", "up", "not", "publicly", "he'd", "already", "unprompted,", "first.", "privately", "about", "speaks"],
      },
      {
        target: "“Malik already knows this,” he adds, glancing my way, “but I want everyone to hear it.”",
        jumbled: ["want", "he", "glancing", "my", "I", "hear", "it.”", "knows", "already", "everyone", "way,", "to", "“but", "this,”", "adds,", "“Malik"],
      },
      {
        target: "I realize this single incident has sparked a conversation that might actually change how people behave going forward.",
        jumbled: ["sparked", "conversation", "that", "a", "incident", "might", "has", "people", "how", "actually", "single", "I", "behave", "this", "realize", "change", "going", "forward."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a difficult situation leading to a broader, useful conversation.",
    mySentenceExample: "A difficult situation led to a broader, useful conversation.",
  },
  {
    number: 9,
    title: "A New Understanding",
    image: null,
    imageNote: "Malik, Otis, and Beatriz sitting together at a lunch table, tentatively rebuilding a normal, friendly interaction.",
    story:
      "A few weeks later, I notice Beatriz and Otis sitting at the same lunch table, something that would have seemed unlikely just recently. Their conversation seems cautious but genuine, neither pretending the incident hadn't happened nor dwelling on it constantly either. “Sit down, Malik,” Otis says, sliding over to make room. I join them, and we talk about something unrelated entirely, the ordinary kind of conversation that somehow feels meaningful given everything before it. Watching this unfold, I realize that accountability, when handled honestly, can actually rebuild trust rather than permanently destroying it. This experience has taught me something about patience I hadn't fully appreciated before this happened.",
    questions: [
      { text: "What does Malik notice a few weeks later?", answer: "Beatriz and Otis sitting at the same lunch table." },
      { text: "How does their conversation seem?", answer: "Cautious but genuine." },
      { text: "What does Malik realize about accountability?", answer: "That it can rebuild trust rather than destroy it." },
    ],
    trueFalse: [
      { text: "Malik notices Beatriz and Otis sitting at the same table.", answer: true },
      { text: "Their conversation seems cautious but genuine.", answer: true },
      { text: "They pretend the incident never happened at all.", answer: false },
      { text: "Malik realizes accountability can rebuild trust rather than destroy it.", answer: true },
      { text: "Malik learns something about patience from this experience.", answer: true },
    ],
    buildSentence: [
      {
        target: "A few weeks later, I notice Beatriz and Otis sitting at the same lunch table, something that would have seemed unlikely just recently.",
        jumbled: ["I", "and", "same", "sitting", "unlikely", "that", "would", "the", "notice", "Beatriz", "A", "weeks", "lunch", "table,", "recently.", "at", "later,", "seemed", "just", "something", "few", "have", "Otis"],
      },
      {
        target: "Their conversation seems cautious but genuine, neither pretending the incident hadn't happened nor dwelling on it constantly either.",
        jumbled: ["Their", "neither", "seems", "happened", "the", "cautious", "conversation", "on", "nor", "incident", "pretending", "it", "constantly", "hadn't", "genuine,", "dwelling", "either.", "but"],
      },
      {
        target: "“Sit down, Malik,” Otis says, sliding over to make room.",
        jumbled: ["room.", "down,", "sliding", "says,", "Malik,”", "make", "“Sit", "Otis", "over", "to"],
      },
      {
        target: "I join them, and we talk about something unrelated entirely, the ordinary kind of conversation that somehow feels meaningful given everything before it.",
        jumbled: ["before", "it.", "and", "them,", "I", "entirely,", "join", "that", "somehow", "feels", "ordinary", "unrelated", "meaningful", "something", "about", "given", "everything", "the", "of", "talk", "we", "conversation", "kind"],
      },
      {
        target: "Watching this unfold, I realize that accountability, when handled honestly, can actually rebuild trust rather than permanently destroying it.",
        jumbled: ["honestly,", "actually", "than", "accountability,", "I", "that", "can", "handled", "destroying", "when", "Watching", "trust", "it.", "this", "rebuild", "rather", "unfold,", "realize", "permanently"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about watching trust slowly rebuild between two people after a conflict.",
    mySentenceExample: "I watched trust slowly rebuild between two people after a conflict.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Malik sitting alone on his bed that evening, phone face-down beside him, reflecting quietly.",
    story:
      "Looking back on the entire situation, I realize how easily I could have simply stayed silent and let the rumor run its course. You did the right thing, Malik, I think, letting out a breath I hadn't realized I was holding. Had I chosen silence, Beatriz might have continued suffering unfairly, while Otis never learned anything meaningful from the situation either. Instead, choosing to speak up, however uncomfortable it initially felt, allowed genuine accountability and eventual healing to actually happen. I've learned that loyalty to a friend shouldn't mean protecting them from consequences they genuinely need to face. In the end, this experience taught me that fairness sometimes requires more courage than simply staying quiet.",
    questions: [
      { text: "What does Malik realize looking back on the situation?", answer: "How easily he could have stayed silent." },
      { text: "What might have happened had he chosen silence?", answer: "Beatriz would have kept suffering, and Otis would have learned nothing." },
      { text: "What has Malik learned about loyalty and fairness?", answer: "That loyalty shouldn't mean protecting a friend from consequences they need to face." },
    ],
    trueFalse: [
      { text: "Malik realizes he could have simply stayed silent.", answer: true },
      { text: "Silence might have meant Beatriz continued suffering unfairly.", answer: true },
      { text: "Malik believes loyalty means protecting friends from all consequences.", answer: false },
      { text: "Malik learns fairness sometimes requires more courage than staying quiet.", answer: true },
      { text: "Speaking up allowed genuine accountability and healing to happen.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire situation, I realize how easily I could have simply stayed silent and let the rumor run its course.",
        jumbled: ["on", "the", "and", "I", "stayed", "rumor", "silent", "its", "I", "realize", "could", "let", "easily", "have", "back", "run", "how", "the", "Looking", "situation,", "course.", "entire", "simply"],
      },
      {
        target: "You did the right thing, Malik, I think, letting out a breath I hadn't realized I was holding.",
        jumbled: ["did", "You", "a", "thing,", "letting", "out", "I", "holding.", "I", "think,", "breath", "realized", "was", "hadn't", "the", "I", "right", "Malik,"],
      },
      {
        target: "Had I chosen silence, Beatriz might have continued suffering unfairly, while Otis never learned anything meaningful from the situation either.",
        jumbled: ["Beatriz", "Otis", "situation", "silence,", "while", "suffering", "have", "never", "anything", "unfairly,", "Had", "from", "the", "learned", "continued", "I", "might", "chosen", "meaningful", "either."],
      },
      {
        target: "Instead, choosing to speak up, however uncomfortable it initially felt, allowed genuine accountability and eventual healing to actually happen.",
        jumbled: ["speak", "genuine", "it", "Instead,", "allowed", "however", "felt,", "happen.", "initially", "eventual", "uncomfortable", "actually", "to", "to", "accountability", "and", "healing", "choosing", "up,"],
      },
      {
        target: "I've learned that loyalty to a friend shouldn't mean protecting them from consequences they genuinely need to face.",
        jumbled: ["they", "protecting", "mean", "face.", "I've", "a", "from", "consequences", "loyalty", "to", "friend", "genuinely", "them", "to", "need", "shouldn't", "that", "learned"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from choosing to speak up instead of staying silent.",
    mySentenceExample: "I learned that speaking up matters more than staying silent.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
