// B2 Teens digital storybook, Book 69: "The Environmental Club's Big Decision"
// Static content -- no Supabase. Fifth book in the B2 Teens batch
// (65-72). Activism-strategy scenario, distinct from Book 50
// "Organizing a Fundraiser" (library-funding fundraiser execution) --
// this one centers on two factions disagreeing over STRATEGY
// (protest vs. quiet lobbying) and the narrator mediating between
// them, matching the B2 spec's mediation/comparing-viewpoints focus.
// Teens-track shape: 3 questions, 5 True/False, 5 Build-a-Sentence
// per chapter. Chapter images not generated yet -- image null per chapter.
import coverImg from "./assets/storybook69/cover.jpg";

export const STORYBOOK_TITLE = "The Environmental Club's Big Decision";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Simone standing at the front of a classroom-style meeting, two groups of environmental club members seated on opposite sides, mid-disagreement.";

export const CHARACTERS = [
  { name: "Simone", role: "The narrator, president of the Environmental Club", look: "Practical clothes, always carries a reusable water bottle, diplomatic by nature." },
  { name: "Teodoro", role: "A club member who wants a public protest", look: "Passionate, impatient with slow processes, believes visibility matters most." },
  { name: "Winnie", role: "A club member who prefers quiet lobbying", look: "Methodical, prefers data and private meetings over public demonstrations." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Club Divided",
    image: null,
    imageNote: "Simone standing at a whiteboard in a classroom, club members seated in two visibly separated groups.",
    story:
      "Our Environmental Club has recently learned that the school plans to replace the community garden with a parking expansion. Everyone agrees this decision seems shortsighted, but the club has split sharply over how we should actually respond. Teodoro insists we organize a public protest outside the administration building, arguing that visibility creates real pressure for change. “We can't just sit back, Simone,” he says. Winnie counters that a protest might alienate the very administrators we'd need to eventually persuade toward reversing the decision. As club president, I realize this disagreement threatens to derail our shared goal entirely, unless I can find some way to bridge it.",
    questions: [
      { text: "What has the school planned to do with the community garden?", answer: "Replace it with a parking expansion." },
      { text: "What does Teodoro insist the club should do?", answer: "Organize a public protest." },
      { text: "What does Winnie counter about a protest?", answer: "That it might alienate the administrators they need to persuade." },
    ],
    trueFalse: [
      { text: "The school plans to replace the garden with a parking expansion.", answer: true },
      { text: "Everyone agrees this decision seems shortsighted.", answer: true },
      { text: "Teodoro insists on organizing a public protest.", answer: true },
      { text: "Winnie fully supports the protest idea immediately.", answer: false },
      { text: "Simone realizes this disagreement threatens their shared goal.", answer: true },
    ],
    buildSentence: [
      {
        target: "Our Environmental Club has recently learned that the school plans to replace the community garden with a parking expansion.",
        jumbled: ["community", "the", "has", "replace", "plans", "expansion.", "a", "Environmental", "parking", "Our", "that", "learned", "garden", "with", "Club", "school", "recently", "the", "to"],
      },
      {
        target: "Everyone agrees this decision seems shortsighted, but the club has split sharply over how we should actually respond.",
        jumbled: ["how", "split", "sharply", "respond.", "the", "decision", "but", "should", "actually", "seems", "shortsighted,", "over", "we", "Everyone", "agrees", "this", "has", "club"],
      },
      {
        target: "Teodoro insists we organize a public protest outside the administration building, arguing that visibility creates real pressure for change.",
        jumbled: ["real", "we", "arguing", "the", "public", "protest", "a", "visibility", "Teodoro", "insists", "that", "administration", "change.", "outside", "pressure", "organize", "for", "building,", "creates"],
      },
      {
        target: "“We can't just sit back, Simone,” he says.",
        jumbled: ["can't", "says.", "sit", "just", "he", "back,", "“We", "Simone,”"],
      },
      {
        target: "I realize this disagreement threatens to derail our shared goal entirely, unless I can find some way to bridge it.",
        jumbled: ["I", "this", "it.", "goal", "shared", "entirely,", "disagreement", "derail", "way", "to", "realize", "unless", "our", "threatens", "I", "some", "can", "to", "bridge", "find"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a group disagreeing over the best strategy to achieve a shared goal.",
    mySentenceExample: "The group disagreed over the best strategy to achieve their goal.",
  },
  {
    number: 2,
    title: "Hearing Teodoro's Case",
    image: null,
    imageNote: "Simone and Teodoro talking one-on-one after a meeting, Teodoro gesturing animatedly while explaining his position.",
    story:
      "After the meeting, I ask Teodoro to explain his reasoning more fully, curious what's actually driving his strong conviction. He tells me about a similar situation at another school, where quiet lobbying had dragged on for months without any real result. “Trust me, Simone, we don't have that kind of time,” he says. Only after students organized a visible, well-covered protest did the administration finally take the issue seriously enough to act. He argues that given our limited time before the construction begins, we simply can't afford a slow, uncertain approach. I understand his frustration, though I also wonder whether that other school's specific situation genuinely applies to ours.",
    questions: [
      { text: "What does Simone ask Teodoro to do?", answer: "Explain his reasoning more fully." },
      { text: "What example does Teodoro give from another school?", answer: "That quiet lobbying dragged on for months until a protest worked." },
      { text: "What does Teodoro argue about their limited time?", answer: "That they can't afford a slow, uncertain approach." },
    ],
    trueFalse: [
      { text: "Simone asks Teodoro to explain his reasoning more fully.", answer: true },
      { text: "Teodoro tells her about a similar situation at another school.", answer: true },
      { text: "Quiet lobbying at that school worked quickly and easily.", answer: false },
      { text: "Teodoro argues they can't afford a slow, uncertain approach.", answer: true },
      { text: "Simone wonders whether that situation genuinely applies to theirs.", answer: true },
    ],
    buildSentence: [
      {
        target: "I ask Teodoro to explain his reasoning more fully, curious what's actually driving his strong conviction.",
        jumbled: ["explain", "to", "actually", "fully,", "reasoning", "Teodoro", "curious", "ask", "strong", "his", "his", "I", "more", "what's", "conviction.", "driving"],
      },
      {
        target: "He tells me about a similar situation at another school, where quiet lobbying had dragged on for months without any real result.",
        jumbled: ["without", "had", "on", "another", "any", "He", "lobbying", "situation", "about", "me", "tells", "at", "dragged", "real", "months", "quiet", "school,", "similar", "result.", "a", "for", "where"],
      },
      {
        target: "“Trust me, Simone, we don't have that kind of time,” he says.",
        jumbled: ["Simone,", "time,”", "we", "kind", "he", "don't", "that", "“Trust", "me,", "have", "of", "says."],
      },
      {
        target: "Only after students organized a visible, well-covered protest did the administration finally take the issue seriously enough to act.",
        jumbled: ["well-covered", "issue", "a", "students", "enough", "seriously", "the", "to", "act.", "visible,", "the", "finally", "take", "organized", "administration", "protest", "after", "did", "Only"],
      },
      {
        target: "He argues that given our limited time before the construction begins, we simply can't afford a slow, uncertain approach.",
        jumbled: ["time", "we", "that", "simply", "limited", "argues", "uncertain", "begins,", "afford", "a", "can't", "construction", "slow,", "our", "He", "before", "approach.", "the", "given"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about listening carefully to understand why someone feels strongly about something.",
    mySentenceExample: "I listened carefully to understand why he felt so strongly.",
  },
  {
    number: 3,
    title: "Hearing Winnie's Case",
    image: null,
    imageNote: "Simone and Winnie sitting at a library table, Winnie showing spreadsheets and printed data on her laptop.",
    story:
      "I have a similar conversation with Winnie, who pulls up research she'd compiled about the administration's decision-making patterns historically. She explains that our principal tends to respond defensively to public criticism, often digging in rather than reconsidering a position. “Think about it, Simone,” she says, tapping the screen. Given this pattern, Winnie argues, a protest might actually make the administration less likely to reverse course, not more. She suggests instead requesting a formal meeting, backed by clear data about the garden's environmental and educational value. I find her reasoning compelling too, though I recognize it requires patience Teodoro clearly feels we don't currently have.",
    questions: [
      { text: "What research has Winnie compiled?", answer: "About the administration's decision-making patterns." },
      { text: "What does Winnie say about how the principal responds to criticism?", answer: "That she responds defensively and digs in." },
      { text: "What does Winnie suggest instead of a protest?", answer: "Requesting a formal meeting backed by data." },
    ],
    trueFalse: [
      { text: "Winnie has compiled research about the administration's decision patterns.", answer: true },
      { text: "The principal tends to respond defensively to public criticism.", answer: true },
      { text: "Winnie believes a protest might make reversal less likely.", answer: true },
      { text: "Winnie suggests organizing a larger, louder protest instead.", answer: false },
      { text: "Simone finds Winnie's reasoning compelling too.", answer: true },
    ],
    buildSentence: [
      {
        target: "I have a similar conversation with Winnie, who pulls up research she'd compiled about the administration's decision-making patterns historically.",
        jumbled: ["the", "a", "administration's", "similar", "research", "conversation", "who", "pulls", "historically.", "with", "have", "patterns", "compiled", "she'd", "about", "decision-making", "I", "Winnie,", "up"],
      },
      {
        target: "She explains that our principal tends to respond defensively to public criticism, often digging in rather than reconsidering a position.",
        jumbled: ["reconsidering", "often", "in", "respond", "digging", "position.", "public", "criticism,", "explains", "She", "to", "principal", "tends", "than", "defensively", "rather", "our", "to", "a", "that"],
      },
      {
        target: "“Think about it, Simone,” she says, tapping the screen.",
        jumbled: ["tapping", "about", "the", "says,", "Simone,”", "it,", "screen.", "she", "“Think"],
      },
      {
        target: "Given this pattern, Winnie argues, a protest might actually make the administration less likely to reverse course, not more.",
        jumbled: ["might", "to", "make", "not", "Given", "course,", "more.", "likely", "less", "the", "pattern,", "this", "protest", "Winnie", "a", "reverse", "actually", "administration", "argues,"],
      },
      {
        target: "I find her reasoning compelling too, though I recognize it requires patience Teodoro clearly feels we don't currently have.",
        jumbled: ["we", "currently", "clearly", "reasoning", "it", "patience", "I", "too,", "recognize", "feels", "have.", "don't", "find", "compelling", "Teodoro", "though", "requires", "I", "her"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone using data or research to support their point of view.",
    mySentenceExample: "She used research to support her point of view effectively.",
  },
  {
    number: 4,
    title: "Neither Fully Right",
    image: null,
    imageNote: "Simone sitting alone at home, notebook open, sketching out a diagram comparing both approaches.",
    story:
      "Sitting alone that evening, I try mapping out both perspectives honestly, rather than simply picking whichever argument felt more persuasive emotionally. Teodoro's urgency seems justified, given how little time remains before construction genuinely begins on the site. Winnie's caution also seems justified, given what she knows specifically about how our particular administration tends to react. I realize that whichever approach we choose exclusively, we risk alienating either the timeline or the relationship we'd need for lasting success. Perhaps, Simone, I think, the answer isn't choosing one approach over the other, but finding a way to combine them.",
    questions: [
      { text: "What does Simone try to do sitting alone that evening?", answer: "Map out both perspectives honestly." },
      { text: "Why does Teodoro's urgency seem justified?", answer: "Because little time remains before construction begins." },
      { text: "What does Simone begin to think might be the answer?", answer: "Combining both approaches instead of choosing one." },
    ],
    trueFalse: [
      { text: "Simone tries mapping out both perspectives honestly.", answer: true },
      { text: "Teodoro's urgency seems justified given the limited time remaining.", answer: true },
      { text: "Winnie's caution seems justified given what she knows about the administration.", answer: true },
      { text: "Simone decides Teodoro is completely right and Winnie is wrong.", answer: false },
      { text: "Simone begins thinking about combining both approaches.", answer: true },
    ],
    buildSentence: [
      {
        target: "Sitting alone that evening, I try mapping out both perspectives honestly, rather than simply picking whichever argument felt more persuasive emotionally.",
        jumbled: ["whichever", "evening,", "out", "felt", "alone", "mapping", "honestly,", "Sitting", "I", "simply", "persuasive", "argument", "than", "more", "both", "perspectives", "rather", "emotionally.", "that", "picking", "try"],
      },
      {
        target: "Teodoro's urgency seems justified, given how little time remains before construction genuinely begins on the site.",
        jumbled: ["how", "little", "begins", "before", "seems", "given", "urgency", "justified,", "time", "on", "construction", "remains", "the", "site.", "Teodoro's", "genuinely"],
      },
      {
        target: "Winnie's caution also seems justified, given what she knows specifically about how our particular administration tends to react.",
        jumbled: ["administration", "caution", "Winnie's", "what", "our", "given", "react.", "seems", "specifically", "she", "also", "to", "tends", "about", "particular", "knows", "justified,", "how"],
      },
      {
        target: "I realize that whichever approach we choose exclusively, we risk alienating either the timeline or the relationship we'd need for lasting success.",
        jumbled: ["success.", "timeline", "that", "either", "we", "choose", "exclusively,", "approach", "I", "whichever", "realize", "relationship", "risk", "the", "or", "lasting", "we", "alienating", "the", "we'd", "need", "for"],
      },
      {
        target: "Perhaps, Simone, I think, the answer isn't choosing one approach over the other, but finding a way to combine them.",
        jumbled: ["other,", "them.", "Simone,", "to", "finding", "Perhaps,", "over", "think,", "isn't", "the", "approach", "the", "a", "choosing", "but", "way", "I", "combine", "one", "answer"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about realizing two opposing viewpoints might both have some truth to them.",
    mySentenceExample: "I realized two opposing viewpoints might both have some truth to them.",
  },
  {
    number: 5,
    title: "Proposing a Combined Plan",
    image: null,
    imageNote: "Simone presenting a two-part plan on a whiteboard to the full club, both Teodoro and Winnie watching attentively.",
    story:
      "At the next meeting, I propose a two-phase plan, hoping it might genuinely satisfy both Teodoro's urgency and Winnie's caution. First, we'd request a formal meeting with data, giving the administration a fair, respectful chance to reconsider privately. However, if that meeting doesn't produce a real commitment within two weeks, we'd move forward with a public demonstration instead. This way, I explain, we're not choosing between patience and pressure, but sequencing them strategically together. Teodoro looks skeptical initially. “Fine, Simone — two weeks, but that's it,” he finally says, admitting the timeline gives him something concrete to hold onto.",
    questions: [
      { text: "What does Simone propose at the next meeting?", answer: "A two-phase plan." },
      { text: "What happens first in the two-phase plan?", answer: "Requesting a formal meeting with data." },
      { text: "What happens if the meeting doesn't produce a commitment?", answer: "They'd move forward with a public demonstration." },
    ],
    trueFalse: [
      { text: "Simone proposes a two-phase plan.", answer: true },
      { text: "The first phase is a formal meeting with data.", answer: true },
      { text: "If the meeting fails, they'd move forward with a demonstration.", answer: true },
      { text: "Teodoro immediately rejects this plan entirely.", answer: false },
      { text: "Teodoro admits the timeline gives him something concrete.", answer: true },
    ],
    buildSentence: [
      {
        target: "At the next meeting, I propose a two-phase plan, hoping it might genuinely satisfy both Teodoro's urgency and Winnie's caution.",
        jumbled: ["plan,", "I", "might", "it", "two-phase", "next", "a", "and", "hoping", "At", "satisfy", "caution.", "propose", "Teodoro's", "the", "genuinely", "urgency", "both", "Winnie's", "meeting,"],
      },
      {
        target: "First, we'd request a formal meeting with data, giving the administration a fair, respectful chance to reconsider privately.",
        jumbled: ["administration", "with", "request", "First,", "meeting", "giving", "fair,", "data,", "respectful", "formal", "we'd", "to", "reconsider", "the", "chance", "a", "privately.", "a"],
      },
      {
        target: "However, if that meeting doesn't produce a real commitment within two weeks, we'd move forward with a public demonstration instead.",
        jumbled: ["we'd", "move", "if", "real", "produce", "instead.", "two", "However,", "meeting", "doesn't", "commitment", "with", "forward", "public", "within", "weeks,", "a", "that", "a", "demonstration"],
      },
      {
        target: "This way, I explain, we're not choosing between patience and pressure, but sequencing them strategically together.",
        jumbled: ["pressure,", "together.", "explain,", "This", "but", "we're", "choosing", "I", "strategically", "between", "them", "not", "and", "way,", "sequencing", "patience"],
      },
      {
        target: "“Fine, Simone — two weeks, but that's it,” he finally says, admitting the timeline gives him something concrete to hold onto.",
        jumbled: ["him", "finally", "he", "to", "two", "admitting", "timeline", "hold", "the", "onto.", "that's", "it,”", "Simone", "gives", "but", "says,", "“Fine,", "concrete", "weeks,", "something", "—"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about proposing a plan that combines two different approaches.",
    mySentenceExample: "I proposed a plan that combined two different approaches.",
  },
  {
    number: 6,
    title: "Requesting the Meeting",
    image: null,
    imageNote: "Simone and Winnie walking into the principal's office, folder of printed data in hand, both looking composed.",
    story:
      "Winnie and I request a formal meeting with the principal, bringing carefully organized data about the garden's educational and environmental value. The principal listens politely, though her expression remains difficult to read throughout most of our presentation. “Thank you both for putting this together, Simone,” she says, glancing at our folder. She mentions budget pressures and safety requirements, explaining the parking decision wasn't made carelessly or without genuine consideration. Nevertheless, she agrees to review our proposal formally, promising a decision within the two-week window we'd requested. Leaving her office, I feel cautiously hopeful, though I remind myself this outcome remains genuinely uncertain either way.",
    questions: [
      { text: "What do Simone and Winnie bring to the meeting?", answer: "Carefully organized data about the garden's value." },
      { text: "What does the principal mention about the decision?", answer: "Budget pressures and safety requirements." },
      { text: "What does the principal agree to?", answer: "Review the proposal formally within two weeks." },
    ],
    trueFalse: [
      { text: "Winnie and Simone bring carefully organized data to the meeting.", answer: true },
      { text: "The principal mentions budget pressures and safety requirements.", answer: true },
      { text: "The principal refuses to consider their proposal at all.", answer: false },
      { text: "The principal agrees to review the proposal within two weeks.", answer: true },
      { text: "Simone feels cautiously hopeful leaving the office.", answer: true },
    ],
    buildSentence: [
      {
        target: "Winnie and I request a formal meeting with the principal, bringing carefully organized data about the garden's educational and environmental value.",
        jumbled: ["I", "educational", "about", "garden's", "carefully", "bringing", "a", "formal", "with", "data", "value.", "the", "meeting", "environmental", "principal,", "and", "the", "organized", "and", "Winnie", "request"],
      },
      {
        target: "The principal listens politely, though her expression remains difficult to read throughout most of our presentation.",
        jumbled: ["though", "to", "read", "principal", "difficult", "remains", "politely,", "throughout", "expression", "most", "presentation.", "listens", "her", "our", "The", "of"],
      },
      {
        target: "“Thank you both for putting this together, Simone,” she says, glancing at our folder.",
        jumbled: ["Simone,”", "this", "says,", "at", "she", "you", "our", "putting", "for", "glancing", "both", "“Thank", "folder.", "together,"],
      },
      {
        target: "She mentions budget pressures and safety requirements, explaining the parking decision wasn't made carelessly or without genuine consideration.",
        jumbled: ["carelessly", "budget", "decision", "the", "mentions", "parking", "or", "made", "and", "requirements,", "explaining", "safety", "without", "wasn't", "consideration.", "She", "genuine", "pressures"],
      },
      {
        target: "Leaving her office, I feel cautiously hopeful, though I remind myself this outcome remains genuinely uncertain either way.",
        jumbled: ["her", "myself", "office,", "cautiously", "genuinely", "this", "hopeful,", "remind", "Leaving", "I", "remains", "way.", "feel", "uncertain", "either", "though", "I", "outcome"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about presenting a well-prepared case to someone in a position of authority.",
    mySentenceExample: "I presented a well-prepared case to someone in authority.",
  },
  {
    number: 7,
    title: "Waiting and Preparing",
    image: null,
    imageNote: "Teodoro and Simone sitting together, quietly planning a backup demonstration just in case, sketching signs on paper.",
    story:
      "While waiting for the principal's decision, Teodoro and I begin quietly preparing for a potential demonstration, just in case it's actually needed. He seems genuinely more at ease now, having accepted that patience, at least temporarily, doesn't mean giving up entirely. We sketch signs and plan logistics together, an odd but oddly productive collaboration between two people who'd initially disagreed sharply. Winnie checks in occasionally too, mentioning she respects that we're preparing responsibly rather than assuming the meeting will definitely succeed. “Smart move, Simone,” she says, glancing at our sketches. This waiting period, though tense, teaches me that patience and preparation aren't actually opposites after all.",
    questions: [
      { text: "What do Teodoro and Simone begin preparing while waiting?", answer: "A potential demonstration." },
      { text: "How does Teodoro seem now, compared to before?", answer: "More at ease." },
      { text: "What does Winnie mention when she checks in?", answer: "That she respects them preparing responsibly." },
    ],
    trueFalse: [
      { text: "Teodoro and Simone begin preparing for a potential demonstration.", answer: true },
      { text: "Teodoro seems genuinely more at ease now.", answer: true },
      { text: "Winnie refuses to acknowledge their preparation at all.", answer: false },
      { text: "Winnie says she respects them preparing responsibly.", answer: true },
      { text: "Simone learns patience and preparation aren't actually opposites.", answer: true },
    ],
    buildSentence: [
      {
        target: "Teodoro and I begin quietly preparing for a potential demonstration, just in case it's actually needed.",
        jumbled: ["in", "just", "for", "case", "demonstration,", "and", "actually", "quietly", "Teodoro", "preparing", "it's", "begin", "potential", "I", "needed.", "a"],
      },
      {
        target: "He seems genuinely more at ease now, having accepted that patience, at least temporarily, doesn't mean giving up entirely.",
        jumbled: ["now,", "He", "having", "entirely.", "that", "giving", "seems", "up", "ease", "patience,", "least", "mean", "temporarily,", "doesn't", "at", "genuinely", "accepted", "more", "at"],
      },
      {
        target: "We sketch signs and plan logistics together, an odd but oddly productive collaboration between two people who'd initially disagreed sharply.",
        jumbled: ["initially", "sharply.", "people", "two", "but", "collaboration", "together,", "productive", "who'd", "between", "oddly", "We", "and", "logistics", "signs", "an", "odd", "sketch", "disagreed", "plan"],
      },
      {
        target: "Winnie checks in occasionally too, mentioning she respects that we're preparing responsibly rather than assuming the meeting will definitely succeed.",
        jumbled: ["the", "responsibly", "assuming", "rather", "meeting", "succeed.", "in", "that", "than", "Winnie", "preparing", "she", "definitely", "mentioning", "occasionally", "checks", "respects", "will", "we're", "too,"],
      },
      {
        target: "This waiting period, though tense, teaches me that patience and preparation aren't actually opposites after all.",
        jumbled: ["and", "actually", "aren't", "waiting", "tense,", "that", "though", "after", "This", "me", "all.", "patience", "opposites", "teaches", "period,", "preparation"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about preparing for two possible outcomes while staying hopeful for the better one.",
    mySentenceExample: "I prepared for two possible outcomes while staying hopeful.",
  },
  {
    number: 8,
    title: "The Principal's Answer",
    image: null,
    imageNote: "Simone reading an official email on her phone in the school hallway, the club members gathered around waiting for the news.",
    story:
      "Exactly on the deadline, an email arrives from the principal's office, and I read it aloud to the gathered club members immediately. She's decided to preserve most of the garden, redesigning the parking plan to require fewer spaces than originally proposed. It's not a complete victory, she admits, but a genuine compromise that respects both the school's needs and the students' concerns. Teodoro cheers loudly, while Winnie simply smiles, quietly satisfied that the patient approach had actually worked. “You did it, Simone,” Teodoro says, pulling me into a celebratory hug. I feel enormous relief, grateful that combining both strategies had led to an outcome neither approach alone might have achieved.",
    questions: [
      { text: "What arrives exactly on the deadline?", answer: "An email from the principal's office." },
      { text: "What has the principal decided?", answer: "To preserve most of the garden with a redesigned parking plan." },
      { text: "How do Teodoro and Winnie each react?", answer: "Teodoro cheers loudly; Winnie smiles, quietly satisfied." },
    ],
    trueFalse: [
      { text: "An email arrives exactly on the deadline.", answer: true },
      { text: "The principal has decided to preserve most of the garden.", answer: true },
      { text: "The principal calls this a complete, unconditional victory.", answer: false },
      { text: "Teodoro cheers loudly while Winnie smiles quietly.", answer: true },
      { text: "Simone feels this outcome came from combining both strategies.", answer: true },
    ],
    buildSentence: [
      {
        target: "Exactly on the deadline, an email arrives from the principal's office, and I read it aloud to the gathered club members immediately.",
        jumbled: ["it", "on", "an", "I", "gathered", "the", "deadline,", "from", "to", "arrives", "email", "aloud", "Exactly", "office,", "read", "the", "immediately.", "principal's", "club", "and", "members", "the"],
      },
      {
        target: "She's decided to preserve most of the garden, redesigning the parking plan to require fewer spaces than originally proposed.",
        jumbled: ["of", "originally", "redesigning", "most", "garden,", "plan", "the", "require", "proposed.", "to", "preserve", "fewer", "decided", "than", "spaces", "She's", "to", "parking", "the"],
      },
      {
        target: "It's not a complete victory, she admits, but a genuine compromise that respects both the school's needs and the students' concerns.",
        jumbled: ["and", "she", "respects", "students'", "needs", "It's", "the", "that", "admits,", "not", "a", "a", "school's", "the", "both", "but", "concerns.", "compromise", "victory,", "complete", "genuine"],
      },
      {
        target: "Teodoro cheers loudly, while Winnie simply smiles, quietly satisfied that the patient approach had actually worked.",
        jumbled: ["worked.", "quietly", "loudly,", "simply", "that", "approach", "Winnie", "actually", "Teodoro", "smiles,", "cheers", "the", "patient", "while", "satisfied", "had"],
      },
      {
        target: "I feel enormous relief, grateful that combining both strategies had led to an outcome neither approach alone might have achieved.",
        jumbled: ["approach", "relief,", "that", "to", "enormous", "might", "strategies", "achieved.", "I", "an", "have", "alone", "led", "grateful", "combining", "neither", "outcome", "feel", "both", "had"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about receiving good news after a period of uncertainty.",
    mySentenceExample: "I received good news after a long period of uncertainty.",
  },
  {
    number: 9,
    title: "Reflecting Together",
    image: null,
    imageNote: "Simone, Teodoro, and Winnie sitting together in the garden, relaxed, talking as club members work nearby.",
    story:
      "A few weeks later, the three of us sit together in the newly preserved garden, reflecting on how the whole process unfolded. Teodoro admits that, had we gone straight to a protest, he's not entirely sure it would have worked as smoothly as it eventually did. Winnie, meanwhile, admits that without the credible threat of a protest, the administration may have simply delayed responding indefinitely. Both acknowledge that the other's approach, however different from their own instinct, contributed something genuinely necessary to the outcome. “You were right to make us wait, Simone,” Teodoro admits. Listening to them, I feel proud that mediating didn't mean silencing either perspective, but combining their strengths.",
    questions: [
      { text: "Where do the three of them sit together a few weeks later?", answer: "In the newly preserved garden." },
      { text: "What does Teodoro admit about going straight to a protest?", answer: "That he's not sure it would have worked as smoothly." },
      { text: "What does Winnie admit about the credible threat of a protest?", answer: "That without it, the administration may have delayed indefinitely." },
    ],
    trueFalse: [
      { text: "The three of them sit together in the preserved garden.", answer: true },
      { text: "Teodoro admits a protest alone might not have worked as smoothly.", answer: true },
      { text: "Winnie admits the credible threat of a protest may have mattered.", answer: true },
      { text: "Both refuse to acknowledge the other's approach helped at all.", answer: false },
      { text: "Simone feels mediating combined both perspectives' strengths.", answer: true },
    ],
    buildSentence: [
      {
        target: "A few weeks later, the three of us sit together in the newly preserved garden, reflecting on how the whole process unfolded.",
        jumbled: ["how", "unfolded.", "three", "few", "later,", "the", "the", "sit", "reflecting", "us", "of", "garden,", "A", "newly", "the", "whole", "process", "on", "preserved", "together", "in", "weeks"],
      },
      {
        target: "Teodoro admits that, had we gone straight to a protest, he's not entirely sure it would have worked as smoothly as it eventually did.",
        jumbled: ["straight", "would", "worked", "it", "protest,", "to", "sure", "entirely", "did.", "as", "he's", "we", "have", "admits", "Teodoro", "as", "not", "that,", "had", "smoothly", "a", "gone", "eventually", "it"],
      },
      {
        target: "Winnie, meanwhile, admits that without the credible threat of a protest, the administration may have simply delayed responding indefinitely.",
        jumbled: ["have", "simply", "may", "a", "administration", "protest,", "of", "without", "credible", "delayed", "admits", "the", "responding", "the", "meanwhile,", "indefinitely.", "Winnie,", "threat", "that"],
      },
      {
        target: "Both acknowledge that the other's approach, however different from their own instinct, contributed something genuinely necessary to the outcome.",
        jumbled: ["something", "Both", "other's", "contributed", "necessary", "the", "approach,", "instinct,", "different", "however", "the", "genuinely", "acknowledge", "that", "their", "to", "from", "own", "outcome."],
      },
      {
        target: "Listening to them, I feel proud that mediating didn't mean silencing either perspective, but combining their strengths.",
        jumbled: ["but", "didn't", "to", "mean", "either", "Listening", "combining", "their", "mediating", "I", "them,", "that", "silencing", "strengths.", "feel", "proud", "perspective,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about two people with different approaches realizing they both contributed something valuable.",
    mySentenceExample: "Two people with different approaches both contributed something valuable.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Simone sitting alone in the garden at sunset, writing reflectively in a notebook, the club's sign visible nearby.",
    story:
      "Looking back on the entire situation, I realize how differently things might have unfolded had I simply sided with one approach over the other. You didn't have to choose, Simone, I think, closing my notebook as the sun sets. If I had chosen only urgency or only patience, we likely would have lost either valuable time or a valuable relationship with the administration. Instead, taking the time to genuinely understand both perspectives allowed us to build something stronger than either alone. I've learned that mediation, at its best, doesn't mean compromise in the sense of everyone losing something. In the end, this experience taught me that combining seemingly opposite strengths can produce outcomes neither side imagined possible alone.",
    questions: [
      { text: "What does Simone realize looking back on the situation?", answer: "How differently things might have unfolded had she sided with one approach." },
      { text: "What might have happened if she had chosen only one approach?", answer: "They'd have lost either valuable time or a valuable relationship." },
      { text: "What has Simone learned about mediation at its best?", answer: "That it doesn't mean compromise where everyone loses something." },
    ],
    trueFalse: [
      { text: "Simone realizes things might have unfolded differently with one approach.", answer: true },
      { text: "Choosing only one approach might have lost time or a relationship.", answer: true },
      { text: "Simone believes mediation always means everyone losing something.", answer: false },
      { text: "Simone learns combining strengths can produce unimagined outcomes.", answer: true },
      { text: "Understanding both perspectives allowed them to build something stronger.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire situation, I realize how differently things might have unfolded had I simply sided with one approach over the other.",
        jumbled: ["the", "back", "I", "on", "had", "sided", "unfolded", "approach", "differently", "Looking", "over", "other.", "entire", "the", "might", "situation,", "things", "have", "realize", "how", "I", "with", "one", "simply"],
      },
      {
        target: "You didn't have to choose, Simone, I think, closing my notebook as the sun sets.",
        jumbled: ["I", "closing", "notebook", "think,", "to", "as", "sun", "choose,", "sets.", "Simone,", "have", "You", "my", "the", "didn't"],
      },
      {
        target: "We likely would have lost either valuable time or a valuable relationship with the administration.",
        jumbled: ["administration.", "lost", "with", "time", "either", "a", "valuable", "would", "or", "relationship", "We", "valuable", "have", "likely", "the"],
      },
      {
        target: "Instead, taking the time to genuinely understand both perspectives allowed us to build something stronger than either alone.",
        jumbled: ["Instead,", "taking", "to", "stronger", "something", "time", "allowed", "understand", "alone.", "us", "the", "than", "genuinely", "perspectives", "to", "both", "either", "build"],
      },
      {
        target: "In the end, this experience taught me that combining seemingly opposite strengths can produce outcomes neither side imagined possible alone.",
        jumbled: ["possible", "imagined", "combining", "opposite", "end,", "that", "the", "experience", "strengths", "can", "produce", "alone.", "taught", "outcomes", "me", "side", "this", "neither", "seemingly", "In"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from combining two different strategies instead of choosing just one.",
    mySentenceExample: "I learned that combining two strategies can work better than one.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
