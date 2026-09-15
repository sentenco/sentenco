// B2 Adults digital storybook, Book 74: "Mediating a Dispute Between Coworkers"
// Static content -- no Supabase. Second book in the B2 Adults batch
// (73-80). Workplace triangulated-mediation scenario, the adult-
// professional parallel to Book 71's Teens "two friends" mediation
// but distinct in context and mechanics (a team lead resolving a
// process/credit dispute, not a personal friendship rift). Adults-
// track shape: 3 questions, 5 True/False, 5 Build-a-Sentence per
// chapter. Chapter images not generated yet -- image left null per chapter.
import coverImg from "./assets/storybook74/cover.jpg";

export const STORYBOOK_TITLE = "Mediating a Dispute Between Coworkers";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Ines standing between Salim and Petra at a shared office desk, both avoiding eye contact, tension visible in the room.";

export const CHARACTERS = [
  { name: "Ines", role: "The narrator, a team lead mediating a conflict", look: "Calm, organized, prefers addressing tension directly rather than letting it fester." },
  { name: "Salim", role: "A team member who feels his work was uncredited", look: "Detail-oriented, quietly frustrated, avoids confrontation until pushed." },
  { name: "Petra", role: "A team member accused of taking credit for Salim's work", look: "Confident presenter, genuinely unaware of how her actions were perceived." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Tension in the Team",
    image: null,
    imageNote: "Ines noticing Salim and Petra avoiding eye contact across a shared office desk, both visibly tense.",
    story:
      "Over the past week, I've noticed Salim and Petra communicating only through brief, clipped messages rather than their usual friendly exchanges. As team lead, I initially hesitate to intervene, hoping whatever tension exists might resolve itself naturally over time. However, during yesterday's meeting, Salim visibly stiffened when Petra presented findings that, given the project timeline, he'd clearly contributed to significantly. Afterward, a colleague mentions overhearing that Salim feels his analysis had been presented as entirely Petra's own idea. \"Ines, you might want to check in with him,\" she adds quietly. Given how this could affect team morale, I realize I'll need to address this directly rather than hoping it resolves itself.",
    questions: [
      { text: "What has Ines noticed about Salim and Petra's communication?", answer: "That it's brief and clipped." },
      { text: "What happens during yesterday's meeting?", answer: "Salim visibly stiffens when Petra presents findings he'd contributed to." },
      { text: "What does a colleague mention overhearing?", answer: "That Salim feels his analysis was presented as entirely Petra's idea." },
    ],
    trueFalse: [
      { text: "Salim and Petra have been communicating only through clipped messages.", answer: true },
      { text: "Ines initially hopes the tension resolves itself naturally.", answer: true },
      { text: "Salim visibly stiffened when Petra presented findings during the meeting.", answer: true },
      { text: "A colleague says Salim feels credited fairly for his work.", answer: false },
      { text: "Ines realizes she needs to address this directly.", answer: true },
    ],
    buildSentence: [
      {
        target: "Over the past week, I've noticed Salim and Petra communicating only through brief, clipped messages rather than their usual friendly exchanges.",
        jumbled: ["rather", "Salim", "only", "messages", "I've", "brief,", "clipped", "past", "week,", "the", "and", "usual", "communicating", "friendly", "through", "exchanges.", "Over", "their", "Petra", "than", "noticed"],
      },
      {
        target: "I initially hesitate to intervene, hoping whatever tension exists might resolve itself naturally over time.",
        jumbled: ["initially", "tension", "might", "over", "intervene,", "naturally", "resolve", "hesitate", "exists", "time.", "I", "to", "whatever", "hoping", "itself"],
      },
      {
        target: "However, during yesterday's meeting, Salim visibly stiffened when Petra presented findings that, given the project timeline, he'd clearly contributed to significantly.",
        jumbled: ["stiffened", "findings", "when", "Salim", "timeline,", "clearly", "to", "given", "the", "that,", "meeting,", "significantly.", "project", "during", "contributed", "Petra", "visibly", "yesterday's", "presented", "he'd", "However,"],
      },
      {
        target: "Afterward, a colleague mentions overhearing that Salim feels his analysis had been presented as entirely Petra's own idea.",
        jumbled: ["idea.", "as", "analysis", "Salim", "own", "had", "presented", "his", "colleague", "overhearing", "a", "that", "entirely", "Petra's", "Afterward,", "mentions", "been", "feels"],
      },
      {
        target: "Given how this could affect team morale, I realize I'll need to address this directly rather than hoping it resolves itself.",
        jumbled: ["I'll", "team", "morale,", "address", "itself.", "I", "affect", "resolves", "rather", "to", "could", "than", "need", "this", "directly", "this", "how", "realize", "it", "Given", "hoping"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing tension between two coworkers before it becomes a bigger problem.",
    mySentenceExample: "I noticed tension between two coworkers before it became a problem.",
  },
  {
    number: 2,
    title: "Hearing Salim's Side",
    image: null,
    imageNote: "Ines and Salim sitting in a small meeting room, Salim explaining something with a restrained but frustrated tone.",
    story:
      "I ask Salim to meet privately, and he explains, somewhat reluctantly, what had actually been bothering him for weeks now. \"Ines, can I be honest with you?\" he asks, hesitating. He'd spent considerable time developing the analysis Petra presented, yet she'd introduced it during the meeting without ever mentioning his contribution. Salim admits he hadn't said anything at the time, not wanting to seem petty in front of senior leadership. Nevertheless, he acknowledges that staying silent has left him feeling increasingly resentful, which he recognizes isn't sustainable long-term. I thank him for his honesty, recognizing this situation likely feels more significant to him than a simple oversight.",
    questions: [
      { text: "What does Salim explain had been bothering him?", answer: "That Petra presented his analysis without mentioning his contribution." },
      { text: "Why didn't Salim say anything at the time?", answer: "He didn't want to seem petty in front of senior leadership." },
      { text: "What does Salim acknowledge about staying silent?", answer: "That it isn't sustainable long-term." },
    ],
    trueFalse: [
      { text: "Salim explains what had been bothering him for weeks.", answer: true },
      { text: "Salim spent considerable time developing the analysis Petra presented.", answer: true },
      { text: "Salim didn't want to seem petty in front of senior leadership.", answer: true },
      { text: "Salim says staying silent has felt sustainable long-term.", answer: false },
      { text: "Ines recognizes this feels significant to Salim.", answer: true },
    ],
    buildSentence: [
      {
        target: "I ask Salim to meet privately, and he explains, somewhat reluctantly, what had actually been bothering him for weeks now.",
        jumbled: ["him", "and", "reluctantly,", "ask", "weeks", "explains,", "to", "had", "now.", "privately,", "been", "what", "I", "for", "actually", "bothering", "somewhat", "he", "meet", "Salim"],
      },
      {
        target: "\"Ines, can I be honest with you?\" he asks, hesitating.",
        jumbled: ["\"Ines,", "honest", "can", "you?\"", "with", "be", "hesitating.", "asks,", "he", "I"],
      },
      {
        target: "He'd spent considerable time developing the analysis Petra presented, yet she'd introduced it during the meeting without ever mentioning his contribution.",
        jumbled: ["without", "analysis", "contribution.", "she'd", "developing", "mentioning", "meeting", "it", "He'd", "considerable", "the", "introduced", "time", "his", "Petra", "during", "presented,", "ever", "spent", "the", "yet"],
      },
      {
        target: "Salim admits he hadn't said anything at the time, not wanting to seem petty in front of senior leadership.",
        jumbled: ["leadership.", "he", "in", "senior", "seem", "time,", "not", "Salim", "the", "anything", "at", "of", "admits", "hadn't", "front", "said", "petty", "to", "wanting"],
      },
      {
        target: "I thank him for his honesty, recognizing this situation likely feels more significant to him than a simple oversight.",
        jumbled: ["him", "honesty,", "him", "feels", "recognizing", "to", "I", "simple", "than", "his", "situation", "oversight.", "a", "thank", "more", "for", "significant", "this", "likely"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about listening to a coworker explain why they felt overlooked.",
    mySentenceExample: "I listened to my coworker explain why he felt overlooked.",
  },
  {
    number: 3,
    title: "Hearing Petra's Side",
    image: null,
    imageNote: "Ines and Petra sitting together, Petra looking genuinely surprised as Ines explains the situation.",
    story:
      "I speak with Petra separately, curious whether she's aware of how her presentation had been perceived by Salim specifically. \"Ines, is something wrong?\" she asks, noticing my expression. Her reaction surprises me: she seems genuinely unaware, insisting she hadn't intended to take credit for anyone else's work. She explains that in the rush of preparing the presentation, she'd simply forgotten to explicitly mention who'd contributed which section. Given how sincere her surprise seems, I believe this was likely an oversight rather than deliberate, calculated credit-taking. Nevertheless, I explain that regardless of intent, Salim's hurt feelings are genuinely valid and deserve to be addressed properly.",
    questions: [
      { text: "What does Ines ask Petra about?", answer: "How her presentation had been perceived by Salim." },
      { text: "How does Petra react to hearing this?", answer: "Genuinely unaware and surprised." },
      { text: "What does Petra explain about preparing the presentation?", answer: "That she simply forgot to mention who contributed which section." },
    ],
    trueFalse: [
      { text: "Ines asks Petra if she's aware of how her presentation was perceived.", answer: true },
      { text: "Petra seems genuinely unaware and surprised.", answer: true },
      { text: "Petra admits she deliberately intended to take credit.", answer: false },
      { text: "Petra explains she forgot to mention who contributed which section.", answer: true },
      { text: "Ines believes this was likely an oversight, not deliberate.", answer: true },
    ],
    buildSentence: [
      {
        target: "I speak with Petra separately, curious whether she's aware of how her presentation had been perceived by Salim specifically.",
        jumbled: ["had", "speak", "curious", "perceived", "by", "Salim", "aware", "her", "whether", "she's", "with", "how", "separately,", "of", "been", "presentation", "I", "specifically.", "Petra"],
      },
      {
        target: "\"Ines, is something wrong?\" she asks, noticing my expression.",
        jumbled: ["expression.", "is", "she", "wrong?\"", "\"Ines,", "something", "my", "noticing", "asks,"],
      },
      {
        target: "Her reaction surprises me: she seems genuinely unaware, insisting she hadn't intended to take credit for anyone else's work.",
        jumbled: ["unaware,", "credit", "she", "take", "seems", "hadn't", "else's", "for", "surprises", "genuinely", "work.", "reaction", "me:", "anyone", "intended", "Her", "she", "to", "insisting"],
      },
      {
        target: "She explains that in the rush of preparing the presentation, she'd simply forgotten to explicitly mention who'd contributed which section.",
        jumbled: ["mention", "explicitly", "preparing", "she'd", "presentation,", "contributed", "the", "the", "simply", "which", "forgotten", "explains", "section.", "in", "of", "to", "that", "rush", "She", "who'd"],
      },
      {
        target: "Nevertheless, I explain that regardless of intent, Salim's hurt feelings are genuinely valid and deserve to be addressed properly.",
        jumbled: ["Salim's", "feelings", "properly.", "and", "intent,", "of", "deserve", "are", "to", "regardless", "addressed", "Nevertheless,", "that", "I", "genuinely", "explain", "valid", "hurt", "be"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about discovering someone's mistake was unintentional rather than deliberate.",
    mySentenceExample: "I discovered her mistake was unintentional rather than deliberate.",
  },
  {
    number: 4,
    title: "Understanding Both Perspectives",
    image: null,
    imageNote: "Ines sitting alone at her desk, writing notes comparing both accounts, thoughtful expression.",
    story:
      "Reflecting on both conversations, I realize this conflict stems less from malice and more from a breakdown in communication under pressure. Salim's hurt is legitimate, given how much effort he'd invested without acknowledgment, however unintentional the omission actually was. Petra's confusion is also legitimate, given that she genuinely hadn't recognized how significant proper attribution would feel to him. Had either of them communicated more directly and earlier, this misunderstanding likely could have been resolved before it escalated. I decide that facilitating a direct conversation between them, rather than relaying messages myself, would genuinely serve them both better. \"Handle this carefully, Ines,\" I remind myself, closing my notebook.",
    questions: [
      { text: "What does Ines realize this conflict stems from?", answer: "A breakdown in communication under pressure, not malice." },
      { text: "Why is Salim's hurt legitimate?", answer: "Given how much effort he invested without acknowledgment." },
      { text: "What does Ines decide would serve them better?", answer: "Facilitating a direct conversation between them." },
    ],
    trueFalse: [
      { text: "Ines realizes this stems from a communication breakdown, not malice.", answer: true },
      { text: "Salim's hurt is legitimate given his invested effort.", answer: true },
      { text: "Petra's confusion is not considered legitimate at all.", answer: false },
      { text: "Ines decides facilitating a direct conversation would serve them better.", answer: true },
      { text: "Earlier direct communication might have prevented this escalation.", answer: true },
    ],
    buildSentence: [
      {
        target: "Reflecting on both conversations, I realize this conflict stems less from malice and more from a breakdown in communication under pressure.",
        jumbled: ["breakdown", "less", "more", "this", "pressure.", "Reflecting", "both", "I", "under", "stems", "from", "from", "and", "conflict", "conversations,", "malice", "in", "communication", "a", "on", "realize"],
      },
      {
        target: "Salim's hurt is legitimate, given how much effort he'd invested without acknowledgment, however unintentional the omission actually was.",
        jumbled: ["he'd", "however", "hurt", "given", "acknowledgment,", "omission", "actually", "effort", "Salim's", "was.", "much", "without", "is", "unintentional", "how", "invested", "the", "legitimate,"],
      },
      {
        target: "Petra's confusion is also legitimate, given that she genuinely hadn't recognized how significant proper attribution would feel to him.",
        jumbled: ["she", "genuinely", "proper", "attribution", "that", "significant", "hadn't", "given", "recognized", "legitimate,", "would", "him.", "confusion", "Petra's", "also", "feel", "is", "how", "to"],
      },
      {
        target: "Had either of them communicated more directly and earlier, this misunderstanding likely could have been resolved before it escalated.",
        jumbled: ["more", "likely", "and", "them", "earlier,", "of", "it", "misunderstanding", "escalated.", "have", "this", "before", "either", "communicated", "Had", "resolved", "directly", "could", "been"],
      },
      {
        target: "I decide that facilitating a direct conversation between them, rather than relaying messages myself, would genuinely serve them both better.",
        jumbled: ["both", "rather", "them,", "that", "serve", "between", "genuinely", "relaying", "them", "conversation", "than", "decide", "messages", "facilitating", "myself,", "direct", "better.", "a", "I", "would"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about realizing a conflict came from miscommunication rather than bad intent.",
    mySentenceExample: "I realized the conflict came from miscommunication, not bad intent.",
  },
  {
    number: 5,
    title: "Bringing Them Together",
    image: null,
    imageNote: "Ines sitting between Salim and Petra in a meeting room, facilitating as both look at each other cautiously.",
    story:
      "I arrange a meeting with both Salim and Petra together, explaining upfront that my goal is understanding, not assigning blame. \"Thank you for setting this up, Ines,\" Salim says quietly as we sit down. Petra begins by acknowledging that she hadn't properly credited Salim's contribution, apologizing sincerely once she understood how it had affected him. Salim, in turn, admits he should have raised this concern immediately rather than allowing resentment to build silently over weeks. Given this mutual acknowledgment, both agree that clearer communication about credit and contribution should become standard practice going forward. Watching this exchange unfold, I feel relieved that addressing it directly had actually worked as intended.",
    questions: [
      { text: "What does Ines explain her goal is for this meeting?", answer: "Understanding, not assigning blame." },
      { text: "What does Petra acknowledge and apologize for?", answer: "Not properly crediting Salim's contribution." },
      { text: "What does Salim admit he should have done?", answer: "Raised the concern immediately instead of letting resentment build." },
    ],
    trueFalse: [
      { text: "Ines explains her goal is understanding, not assigning blame.", answer: true },
      { text: "Petra acknowledges she hadn't properly credited Salim's contribution.", answer: true },
      { text: "Salim admits he should have raised this concern immediately.", answer: true },
      { text: "Both refuse to agree on any changes going forward.", answer: false },
      { text: "Ines feels relieved this approach worked as intended.", answer: true },
    ],
    buildSentence: [
      {
        target: "I arrange a meeting with both Salim and Petra together, explaining upfront that my goal is understanding, not assigning blame.",
        jumbled: ["Salim", "goal", "both", "assigning", "understanding,", "that", "upfront", "blame.", "I", "is", "meeting", "not", "a", "and", "together,", "my", "with", "Petra", "explaining", "arrange"],
      },
      {
        target: "\"Thank you for setting this up, Ines,\" Salim says quietly as we sit down.",
        jumbled: ["down.", "Salim", "setting", "Ines,\"", "for", "this", "says", "we", "quietly", "up,", "as", "\"Thank", "you", "sit"],
      },
      {
        target: "Petra begins by acknowledging that she hadn't properly credited Salim's contribution, apologizing sincerely once she understood how it had affected him.",
        jumbled: ["apologizing", "Petra", "it", "hadn't", "contribution,", "affected", "she", "understood", "she", "Salim's", "acknowledging", "sincerely", "properly", "once", "how", "by", "him.", "begins", "that", "credited", "had"],
      },
      {
        target: "Salim, in turn, admits he should have raised this concern immediately rather than allowing resentment to build silently over weeks.",
        jumbled: ["than", "Salim,", "allowing", "resentment", "weeks.", "to", "immediately", "concern", "he", "raised", "this", "should", "in", "build", "admits", "silently", "have", "turn,", "rather", "over"],
      },
      {
        target: "Given this mutual acknowledgment, both agree that clearer communication about credit and contribution should become standard practice going forward.",
        jumbled: ["mutual", "clearer", "about", "that", "and", "should", "credit", "agree", "standard", "going", "become", "practice", "both", "Given", "this", "contribution", "communication", "acknowledgment,", "forward."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about bringing two people together to resolve a misunderstanding directly.",
    mySentenceExample: "I brought two people together to resolve a misunderstanding directly.",
  },
  {
    number: 6,
    title: "A New Team Practice",
    image: null,
    imageNote: "Ines presenting a new team norm on a whiteboard during a full team meeting, everyone nodding along.",
    story:
      "Given what happened, I propose a small but meaningful change: every presentation must now explicitly credit each contributor's specific role. The team responds positively, several members mentioning they'd occasionally felt similarly overlooked, though none had raised it directly before now. \"This is a good call, Ines,\" one teammate says, nodding. Petra volunteers to update the presentation template herself, ensuring attribution becomes a built-in, unavoidable step rather than an afterthought. Salim, meanwhile, seems visibly more relaxed during the meeting, contributing openly rather than holding back as he'd recently been doing. This small structural change, born from one uncomfortable conversation, seems likely to prevent similar friction going forward.",
    questions: [
      { text: "What change does Ines propose?", answer: "Every presentation must explicitly credit each contributor's role." },
      { text: "How does the team respond to this proposal?", answer: "Positively." },
      { text: "What does Petra volunteer to do?", answer: "Update the presentation template to build in attribution." },
    ],
    trueFalse: [
      { text: "Ines proposes that presentations must explicitly credit contributors.", answer: true },
      { text: "The team responds positively to this proposal.", answer: true },
      { text: "Petra volunteers to update the presentation template.", answer: true },
      { text: "Salim seems more withdrawn and quiet during this meeting.", answer: false },
      { text: "This change seems likely to prevent similar friction going forward.", answer: true },
    ],
    buildSentence: [
      {
        target: "Given what happened, I propose a small but meaningful change: every presentation must now explicitly credit each contributor's specific role.",
        jumbled: ["Given", "contributor's", "a", "propose", "presentation", "each", "credit", "change:", "meaningful", "explicitly", "I", "now", "specific", "must", "every", "what", "role.", "happened,", "small", "but"],
      },
      {
        target: "The team responds positively, several members mentioning they'd occasionally felt similarly overlooked, though none had raised it directly before now.",
        jumbled: ["it", "responds", "overlooked,", "occasionally", "felt", "directly", "mentioning", "now.", "raised", "though", "before", "similarly", "none", "team", "The", "members", "they'd", "positively,", "had", "several"],
      },
      {
        target: "\"This is a good call, Ines,\" one teammate says, nodding.",
        jumbled: ["good", "teammate", "nodding.", "says,", "a", "is", "call,", "\"This", "Ines,\"", "one"],
      },
      {
        target: "Petra volunteers to update the presentation template herself, ensuring attribution becomes a built-in, unavoidable step rather than an afterthought.",
        jumbled: ["afterthought.", "built-in,", "ensuring", "update", "than", "herself,", "step", "to", "an", "volunteers", "the", "presentation", "template", "attribution", "Petra", "a", "becomes", "rather", "unavoidable"],
      },
      {
        target: "Salim, meanwhile, seems visibly more relaxed during the meeting, contributing openly rather than holding back as he'd recently been doing.",
        jumbled: ["Salim,", "as", "the", "visibly", "doing.", "recently", "openly", "more", "seems", "than", "back", "been", "relaxed", "contributing", "holding", "meanwhile,", "rather", "he'd", "meeting,", "during"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about proposing a small change that could prevent a bigger problem later.",
    mySentenceExample: "I proposed a small change that could prevent a bigger problem later.",
  },
  {
    number: 7,
    title: "A Genuine Repair",
    image: null,
    imageNote: "Salim and Petra sitting together at lunch a week later, chatting normally, tension visibly gone.",
    story:
      "A week later, I notice Salim and Petra sitting together at lunch, chatting normally as though the earlier tension had never existed. Curious, I ask Salim privately how things had settled between them, and he admits Petra had gone out of her way to acknowledge his work publicly since then. \"Ines, it made a real difference,\" he tells me, smiling. She'd mentioned his contribution specifically during a subsequent client call, something he genuinely hadn't expected but deeply appreciated. He tells me that this small gesture mattered more to him than any formal policy change ultimately could have. I realize that while structural changes matter, genuine interpersonal repair often requires something more personal too.",
    questions: [
      { text: "What does Ines notice a week later?", answer: "Salim and Petra sitting together at lunch, chatting normally." },
      { text: "What does Salim admit Petra had done since their meeting?", answer: "Acknowledged his work publicly during a client call." },
      { text: "What does Salim say mattered more than the policy change?", answer: "That small personal gesture." },
    ],
    trueFalse: [
      { text: "Ines notices Salim and Petra sitting together at lunch.", answer: true },
      { text: "Petra had acknowledged his work publicly during a client call.", answer: true },
      { text: "Salim says the formal policy mattered more than this gesture.", answer: false },
      { text: "Salim says this small gesture mattered more to him.", answer: true },
      { text: "Ines realizes genuine repair often requires something personal too.", answer: true },
    ],
    buildSentence: [
      {
        target: "A week later, I notice Salim and Petra sitting together at lunch, chatting normally as though the earlier tension had never existed.",
        jumbled: ["and", "existed.", "the", "Salim", "later,", "earlier", "lunch,", "chatting", "normally", "I", "never", "had", "though", "together", "week", "tension", "notice", "Petra", "sitting", "A", "at", "as"],
      },
      {
        target: "Curious, I ask Salim privately how things had settled between them, and he admits Petra had gone out of her way to acknowledge his work publicly since then.",
        jumbled: ["admits", "Salim", "gone", "and", "I", "out", "he", "Curious,", "had", "to", "settled", "way", "Petra", "work", "of", "privately", "between", "her", "since", "acknowledge", "things", "how", "had", "ask", "then.", "them,", "his", "publicly"],
      },
      {
        target: "\"Ines, it made a real difference,\" he tells me, smiling.",
        jumbled: ["made", "it", "\"Ines,", "real", "me,", "tells", "he", "smiling.", "a", "difference,\""],
      },
      {
        target: "She'd mentioned his contribution specifically during a subsequent client call, something he genuinely hadn't expected but deeply appreciated.",
        jumbled: ["hadn't", "something", "he", "mentioned", "a", "subsequent", "appreciated.", "deeply", "She'd", "contribution", "specifically", "call,", "genuinely", "but", "client", "his", "during", "expected"],
      },
      {
        target: "He tells me that this small gesture mattered more to him than any formal policy change ultimately could have.",
        jumbled: ["that", "formal", "gesture", "tells", "could", "ultimately", "have.", "small", "him", "me", "any", "than", "mattered", "this", "to", "more", "He", "change", "policy"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small, genuine gesture that repaired trust between two coworkers.",
    mySentenceExample: "A small, genuine gesture repaired trust between two coworkers.",
  },
  {
    number: 8,
    title: "Writing a Summary for Leadership",
    image: null,
    imageNote: "Ines at her laptop drafting a brief written summary for her own manager about the team's new attribution practice.",
    story:
      "My own manager asks about the new attribution practice, having heard about it secondhand from someone on the broader leadership team. I write a brief summary explaining what prompted the change, careful to describe it constructively rather than dwelling on the original conflict. I emphasize the outcome: improved team communication and a structural safeguard against similar misunderstandings recurring in the future. My manager responds enthusiastically, suggesting other teams might benefit from adopting a similar practice themselves eventually. \"Nice work handling this, Ines,\" she adds, forwarding my summary to the rest of leadership. This written summary, though brief, feels like a genre I hadn't fully mastered before this experience.",
    questions: [
      { text: "Who asks Ines about the new attribution practice?", answer: "Her own manager." },
      { text: "What does Ines emphasize in her summary?", answer: "Improved team communication and a structural safeguard." },
      { text: "How does Ines's manager respond?", answer: "Enthusiastically, suggesting other teams adopt it." },
    ],
    trueFalse: [
      { text: "Ines's own manager asks about the new attribution practice.", answer: true },
      { text: "Ines writes a summary describing the change constructively.", answer: true },
      { text: "Ines emphasizes improved team communication as the outcome.", answer: true },
      { text: "Her manager responds dismissively, showing no interest at all.", answer: false },
      { text: "Her manager suggests other teams might adopt a similar practice.", answer: true },
    ],
    buildSentence: [
      {
        target: "My own manager asks about the new attribution practice, having heard about it secondhand from someone on the broader leadership team.",
        jumbled: ["it", "someone", "My", "own", "about", "practice,", "the", "secondhand", "new", "manager", "attribution", "from", "heard", "asks", "the", "having", "team.", "broader", "leadership", "about", "on"],
      },
      {
        target: "I write a brief summary explaining what prompted the change, careful to describe it constructively rather than dwelling on the original conflict.",
        jumbled: ["a", "it", "I", "constructively", "dwelling", "on", "describe", "the", "summary", "original", "careful", "rather", "conflict.", "what", "to", "prompted", "the", "explaining", "change,", "brief", "than", "write"],
      },
      {
        target: "I emphasize the outcome: improved team communication and a structural safeguard against similar misunderstandings recurring in the future.",
        jumbled: ["misunderstandings", "the", "team", "I", "emphasize", "improved", "in", "outcome:", "future.", "a", "similar", "against", "safeguard", "structural", "the", "and", "recurring", "communication"],
      },
      {
        target: "My manager responds enthusiastically, suggesting other teams might benefit from adopting a similar practice themselves eventually.",
        jumbled: ["practice", "manager", "themselves", "eventually.", "similar", "other", "benefit", "enthusiastically,", "My", "suggesting", "a", "responds", "adopting", "teams", "might", "from"],
      },
      {
        target: "This written summary, though brief, feels like a genre I hadn't fully mastered before this experience.",
        jumbled: ["genre", "mastered", "I", "before", "though", "a", "experience.", "This", "feels", "summary,", "brief,", "like", "hadn't", "fully", "this", "written"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about writing a professional summary to share a positive outcome with leadership.",
    mySentenceExample: "I wrote a professional summary to share a positive outcome.",
  },
  {
    number: 9,
    title: "Reflecting with the Team",
    image: null,
    imageNote: "Ines, Salim, and Petra sitting together in a casual team debrief, all relaxed, discussing the experience openly.",
    story:
      "During a casual team debrief, the three of us discuss what we'd each learned from the whole experience, openly and without defensiveness. Petra admits she now double-checks attribution automatically, no longer trusting memory alone during rushed, high-pressure preparation. \"Thanks for pushing us to talk about this, Ines,\" Salim adds. Salim admits he's learned to raise concerns earlier, recognizing that silence, however well-intentioned, often makes situations worse rather than better. I share that mediating this taught me to separate intent from impact, since good intentions don't automatically prevent real harm. This honest reflection, given how uncomfortable the original situation had felt, now feels like genuine growth for all three of us.",
    questions: [
      { text: "What do the three of them discuss during the debrief?", answer: "What they each learned from the experience." },
      { text: "What does Petra admit she now does automatically?", answer: "Double-checks attribution." },
      { text: "What does Ines share she learned from mediating this?", answer: "To separate intent from impact." },
    ],
    trueFalse: [
      { text: "The three of them discuss what they each learned openly.", answer: true },
      { text: "Petra admits she now double-checks attribution automatically.", answer: true },
      { text: "Salim admits silence often makes situations worse.", answer: true },
      { text: "Ines shares that good intentions always prevent real harm.", answer: false },
      { text: "This reflection feels like genuine growth for all three.", answer: true },
    ],
    buildSentence: [
      {
        target: "During a casual team debrief, the three of us discuss what we'd each learned from the whole experience, openly and without defensiveness.",
        jumbled: ["the", "casual", "without", "team", "three", "we'd", "learned", "us", "During", "the", "a", "defensiveness.", "from", "discuss", "whole", "each", "debrief,", "experience,", "openly", "and", "of", "what"],
      },
      {
        target: "Petra admits she now double-checks attribution automatically, no longer trusting memory alone during rushed, high-pressure preparation.",
        jumbled: ["rushed,", "high-pressure", "memory", "Petra", "no", "attribution", "alone", "she", "longer", "now", "during", "preparation.", "automatically,", "admits", "trusting", "double-checks"],
      },
      {
        target: "\"Thanks for pushing us to talk about this, Ines,\" Salim adds.",
        jumbled: ["adds.", "pushing", "to", "talk", "about", "\"Thanks", "us", "Ines,\"", "for", "Salim", "this,"],
      },
      {
        target: "Salim admits he's learned to raise concerns earlier, recognizing that silence, however well-intentioned, often makes situations worse rather than better.",
        jumbled: ["worse", "to", "than", "situations", "better.", "raise", "learned", "makes", "admits", "silence,", "he's", "rather", "recognizing", "well-intentioned,", "often", "earlier,", "that", "however", "Salim", "concerns"],
      },
      {
        target: "This honest reflection, given how uncomfortable the original situation had felt, now feels like genuine growth for all three of us.",
        jumbled: ["genuine", "like", "growth", "of", "had", "the", "original", "for", "feels", "three", "uncomfortable", "situation", "felt,", "us.", "given", "reflection,", "now", "This", "how", "honest", "all"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson your whole team learned together from a difficult situation.",
    mySentenceExample: "Our whole team learned a valuable lesson from that difficult situation.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Ines sitting at her desk that evening, reflecting quietly, the team now visible working comfortably together in the background.",
    story:
      "Looking back on the entire situation, I realize how differently things might have unfolded had I simply let the tension continue unaddressed. If I had avoided the conversation, hoping it would resolve itself, resentment likely would have deepened into something far harder to repair. Instead, addressing it directly, while genuinely understanding both perspectives first, allowed for a resolution that strengthened rather than merely patched things over. I've learned that mediating workplace conflict isn't about assigning fault, but about restoring the trust that good collaboration actually requires. In the end, this experience taught me that leadership sometimes means having uncomfortable conversations precisely because they matter. \"You did the right thing, Ines,\" I tell myself, watching the team work comfortably together.",
    questions: [
      { text: "What does Ines realize looking back on the situation?", answer: "How differently things might have gone had she let the tension continue." },
      { text: "What might have happened if she had avoided the conversation?", answer: "Resentment likely would have deepened into something harder to repair." },
      { text: "What has Ines learned about mediating workplace conflict?", answer: "That it's about restoring trust, not assigning fault." },
    ],
    trueFalse: [
      { text: "Ines realizes things might have gone differently without addressing this.", answer: true },
      { text: "Avoiding the conversation might have deepened the resentment.", answer: true },
      { text: "Ines believes mediating conflict is about assigning fault.", answer: false },
      { text: "Ines learns mediating is about restoring trust, not assigning fault.", answer: true },
      { text: "Ines learns leadership sometimes means having uncomfortable conversations.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire situation, I realize how differently things might have unfolded had I simply let the tension continue unaddressed.",
        jumbled: ["simply", "unfolded", "unaddressed.", "things", "the", "continue", "situation,", "differently", "let", "might", "the", "on", "Looking", "realize", "I", "tension", "back", "how", "have", "I", "had", "entire"],
      },
      {
        target: "Resentment likely would have deepened into something far harder to repair.",
        jumbled: ["harder", "far", "likely", "have", "Resentment", "deepened", "repair.", "something", "into", "would", "to"],
      },
      {
        target: "Instead, addressing it directly, while genuinely understanding both perspectives first, allowed for a resolution that strengthened rather than merely patched things over.",
        jumbled: ["genuinely", "perspectives", "over.", "both", "things", "for", "it", "first,", "merely", "strengthened", "allowed", "that", "while", "understanding", "Instead,", "a", "rather", "addressing", "patched", "than", "directly,", "resolution"],
      },
      {
        target: "I've learned that mediating workplace conflict isn't about assigning fault, but about restoring the trust that good collaboration actually requires.",
        jumbled: ["fault,", "assigning", "collaboration", "conflict", "good", "requires.", "restoring", "mediating", "actually", "workplace", "isn't", "learned", "the", "I've", "trust", "that", "about", "about", "that", "but"],
      },
      {
        target: "In the end, this experience taught me that leadership sometimes means having uncomfortable conversations precisely because they matter.",
        jumbled: ["leadership", "me", "experience", "that", "having", "conversations", "In", "precisely", "end,", "taught", "because", "means", "they", "matter.", "this", "uncomfortable", "sometimes", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from mediating a conflict between coworkers.",
    mySentenceExample: "I learned that mediating conflict restores trust, not just resolves disputes.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
