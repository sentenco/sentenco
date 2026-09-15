// B2 Adults digital storybook, Book 78: "Mediating a Business Partnership Dispute"
// Static content -- no Supabase. Sixth book in the B2 Adults batch
// (73-80). Third-party business mediation, the adult-professional
// parallel to Book 69's Teens "environmental club" strategy dispute
// and Book 74's coworker mediation, but distinct in stakes and
// context -- here the narrator is a mutual friend/consultant
// mediating between two business partners disagreeing on company
// direction. Adults-track shape: 3 questions, 5 True/False, 5
// Build-a-Sentence per chapter. Chapter images not generated yet --
// image left null per chapter.
import coverImg from "./assets/storybook78/cover.jpg";

export const STORYBOOK_TITLE = "Mediating a Business Partnership Dispute";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Yolanda sitting at a café table between two business partners, both looking tense, papers with financial projections spread between them.";

export const CHARACTERS = [
  { name: "Yolanda", role: "The narrator, a business consultant and mutual friend of both partners", look: "Composed, diplomatic, experienced in resolving workplace disagreements." },
  { name: "Hector", role: "Co-founder who wants to expand the business aggressively", look: "Ambitious, energetic, believes in seizing opportunities quickly." },
  { name: "Beatrix", role: "Co-founder who prefers cautious, steady growth", look: "Careful, financially disciplined, worried about overextending the business." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Business at a Crossroads",
    image: null,
    imageNote: "Yolanda sitting between Hector and Beatrix at a café table, both looking frustrated, papers spread between them.",
    story:
      "\"Yolanda, we need your help — we can't agree on this,\" Hector and Beatrix, co-founders of a small design studio, tell me, asking me to mediate a disagreement that's been building for weeks now. Hector wants to expand rapidly, taking on a large new client that would require hiring several additional employees quickly. Beatrix worries this expansion could overextend their finances, given how unpredictable client payments have occasionally been recently. Neither seems willing to fully concede, and their disagreement has apparently begun affecting daily operations at the studio. As a trusted friend to both, I agree to help, though I recognize this will require genuinely understanding both perspectives fully first.",
    questions: [
      { text: "What do Hector and Beatrix ask Yolanda to do?", answer: "Mediate their disagreement." },
      { text: "What does Hector want to do?", answer: "Expand rapidly, taking on a large new client." },
      { text: "What does Beatrix worry about?", answer: "That expansion could overextend their finances." },
    ],
    trueFalse: [
      { text: "Hector and Beatrix are co-founders of a small design studio.", answer: true },
      { text: "Hector wants to expand rapidly with a large new client.", answer: true },
      { text: "Beatrix worries this expansion could overextend their finances.", answer: true },
      { text: "Their disagreement has had no effect on daily operations.", answer: false },
      { text: "Yolanda agrees to help mediate this disagreement.", answer: true },
    ],
    buildSentence: [
      {
        target: "\"Yolanda, we need your help — we can't agree on this,\" Hector and Beatrix, co-founders of a small design studio, tell me, asking me to mediate a disagreement that's been building for weeks now.",
        jumbled: ["now.", "your", "disagreement", "—", "design", "need", "we", "this,\"", "tell", "been", "a", "me", "\"Yolanda,", "mediate", "that's", "to", "agree", "on", "can't", "Beatrix,", "for", "building", "a", "small", "we", "help", "me,", "studio,", "co-founders", "Hector", "of", "weeks", "and", "asking"],
      },
      {
        target: "Hector wants to expand rapidly, taking on a large new client that would require hiring several additional employees quickly.",
        jumbled: ["taking", "wants", "rapidly,", "to", "client", "a", "on", "additional", "that", "would", "require", "expand", "new", "hiring", "large", "employees", "several", "Hector", "quickly."],
      },
      {
        target: "Beatrix worries this expansion could overextend their finances, given how unpredictable client payments have occasionally been recently.",
        jumbled: ["occasionally", "expansion", "overextend", "payments", "finances,", "could", "how", "Beatrix", "given", "worries", "client", "this", "been", "unpredictable", "have", "recently.", "their"],
      },
      {
        target: "Neither seems willing to fully concede, and their disagreement has apparently begun affecting daily operations at the studio.",
        jumbled: ["the", "daily", "concede,", "affecting", "to", "disagreement", "willing", "Neither", "their", "and", "begun", "seems", "has", "fully", "studio.", "apparently", "operations", "at"],
      },
      {
        target: "I agree to help, though I recognize this will require genuinely understanding both perspectives fully first.",
        jumbled: ["both", "to", "help,", "this", "though", "first.", "require", "agree", "perspectives", "understanding", "I", "will", "genuinely", "recognize", "fully", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being asked to mediate a disagreement between two business partners.",
    mySentenceExample: "I was asked to mediate a disagreement between two business partners.",
  },
  {
    number: 2,
    title: "Hearing Hector's Vision",
    image: null,
    imageNote: "Yolanda and Hector sitting together, Hector gesturing enthusiastically as he explains his growth plans.",
    story:
      "I meet with Hector separately, curious to understand exactly why this particular opportunity feels so urgent and significant to him. \"Yolanda, this is the chance we've been waiting for,\" he explains, describing how this new client represents a rare chance to establish the studio as a serious competitor in a larger, more prestigious market. Moreover, he argues that hesitating too long risks losing the opportunity entirely, given how eager competitors are for similar contracts. He acknowledges the financial risk, though he believes their studio's strong reputation would attract additional clients once they'd successfully scaled. Listening carefully, I recognize his ambition is genuine, not simply reckless impatience as it might initially appear.",
    questions: [
      { text: "Why does Yolanda meet with Hector separately?", answer: "To understand why the opportunity feels so urgent to him." },
      { text: "What does Hector explain this new client represents?", answer: "A rare chance to establish the studio in a larger market." },
      { text: "What does Hector believe about their reputation once scaled?", answer: "That it would attract additional clients." },
    ],
    trueFalse: [
      { text: "Yolanda meets with Hector separately to understand his urgency.", answer: true },
      { text: "Hector explains this represents a rare chance to compete in a bigger market.", answer: true },
      { text: "Hector argues hesitating too long risks losing the opportunity.", answer: true },
      { text: "Hector completely denies any financial risk exists.", answer: false },
      { text: "Yolanda recognizes his ambition is genuine, not reckless.", answer: true },
    ],
    buildSentence: [
      {
        target: "I meet with Hector separately, curious to understand exactly why this particular opportunity feels so urgent and significant to him.",
        jumbled: ["this", "so", "feels", "with", "to", "to", "Hector", "curious", "I", "significant", "understand", "meet", "opportunity", "separately,", "exactly", "why", "him.", "and", "urgent", "particular"],
      },
      {
        target: "\"Yolanda, this is the chance we've been waiting for,\" he explains, describing how this new client represents a rare chance to establish the studio as a serious competitor in a larger, more prestigious market.",
        jumbled: ["how", "a", "chance", "waiting", "this", "been", "a", "prestigious", "chance", "as", "the", "this", "competitor", "he", "we've", "the", "more", "explains,", "rare", "establish", "client", "in", "represents", "describing", "studio", "market.", "new", "for,\"", "serious", "a", "is", "to", "larger,", "\"Yolanda,"],
      },
      {
        target: "Moreover, he argues that hesitating too long risks losing the opportunity entirely, given how eager competitors are for similar contracts.",
        jumbled: ["eager", "he", "hesitating", "opportunity", "are", "too", "risks", "similar", "competitors", "contracts.", "that", "long", "the", "how", "entirely,", "for", "argues", "losing", "given", "Moreover,"],
      },
      {
        target: "He acknowledges the financial risk, though he believes their studio's strong reputation would attract additional clients once they'd successfully scaled.",
        jumbled: ["the", "acknowledges", "studio's", "financial", "additional", "he", "though", "risk,", "clients", "scaled.", "successfully", "they'd", "would", "once", "attract", "He", "reputation", "strong", "their", "believes"],
      },
      {
        target: "Listening carefully, I recognize his ambition is genuine, not simply reckless impatience as it might initially appear.",
        jumbled: ["reckless", "not", "Listening", "appear.", "his", "is", "genuine,", "I", "simply", "as", "ambition", "it", "impatience", "carefully,", "recognize", "might", "initially"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about listening to someone explain why an opportunity felt urgent to them.",
    mySentenceExample: "I listened to him explain why this opportunity felt so urgent.",
  },
  {
    number: 3,
    title: "Hearing Beatrix's Concerns",
    image: null,
    imageNote: "Yolanda and Beatrix sitting together, Beatrix showing financial spreadsheets on her laptop, looking worried.",
    story:
      "I have a similar conversation with Beatrix, who shares detailed financial projections illustrating exactly what expansion would require upfront. \"Yolanda, look at these numbers,\" she says. She explains that hiring several employees immediately means committing to significant fixed costs, regardless of whether the new client relationship remains stable long-term. Given their studio's history of occasionally delayed client payments, she worries this expansion could genuinely strain their cash flow considerably. She's not opposed to growth generally, she clarifies, but believes a more gradual approach would be considerably less risky overall. Hearing this, I understand her caution stems from genuine financial expertise, not simply excessive risk-aversion.",
    questions: [
      { text: "What does Beatrix share with Yolanda?", answer: "Detailed financial projections." },
      { text: "What does Beatrix explain hiring several employees means?", answer: "Committing to significant fixed costs regardless of client stability." },
      { text: "What does Beatrix clarify about her position on growth?", answer: "That she's not opposed to it, just prefers a gradual approach." },
    ],
    trueFalse: [
      { text: "Beatrix shares detailed financial projections with Yolanda.", answer: true },
      { text: "Hiring several employees means committing to significant fixed costs.", answer: true },
      { text: "Beatrix is completely opposed to any growth at all.", answer: false },
      { text: "Beatrix believes a more gradual approach would be less risky.", answer: true },
      { text: "Yolanda understands her caution stems from genuine financial expertise.", answer: true },
    ],
    buildSentence: [
      {
        target: "I have a similar conversation with Beatrix, who shares detailed financial projections illustrating exactly what expansion would require upfront.",
        jumbled: ["projections", "similar", "require", "detailed", "conversation", "shares", "would", "expansion", "Beatrix,", "illustrating", "upfront.", "exactly", "financial", "with", "a", "who", "I", "what", "have"],
      },
      {
        target: "\"Yolanda, look at these numbers,\" she says.",
        jumbled: ["she", "says.", "numbers,\"", "at", "these", "look", "\"Yolanda,"],
      },
      {
        target: "She explains that hiring several employees immediately means committing to significant fixed costs, regardless of whether the new client relationship remains stable long-term.",
        jumbled: ["to", "costs,", "fixed", "hiring", "the", "means", "remains", "explains", "employees", "significant", "several", "regardless", "stable", "of", "new", "client", "whether", "that", "She", "committing", "immediately", "relationship", "long-term."],
      },
      {
        target: "Given their studio's history of occasionally delayed client payments, she worries this expansion could genuinely strain their cash flow considerably.",
        jumbled: ["their", "payments,", "strain", "occasionally", "delayed", "this", "she", "client", "considerably.", "history", "could", "flow", "expansion", "cash", "genuinely", "studio's", "their", "of", "worries", "Given"],
      },
      {
        target: "She's not opposed to growth generally, she clarifies, but believes a more gradual approach would be considerably less risky overall.",
        jumbled: ["opposed", "would", "but", "She's", "she", "growth", "not", "clarifies,", "risky", "a", "gradual", "generally,", "less", "believes", "overall.", "to", "considerably", "approach", "more", "be"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about understanding why someone's caution came from real expertise, not fear.",
    mySentenceExample: "I understood why her caution came from real expertise, not fear.",
  },
  {
    number: 4,
    title: "Two Legitimate Concerns",
    image: null,
    imageNote: "Yolanda sitting alone reviewing notes from both conversations, sketching a comparison chart.",
    story:
      "Reflecting on both conversations, I realize this disagreement isn't really about whether to grow, but about pace and acceptable risk tolerance. Hector's opportunity is genuinely valuable, and waiting too long could indeed mean losing it to a more decisive competitor. Beatrix's concern is equally valid, given that overextending financially could jeopardize the entire studio's stability if payments were delayed unexpectedly. Neither perspective is wrong exactly, though pursuing either exclusively risks losing something the other genuinely values. I decide that helping them find a structured, phased approach might address both urgency and caution simultaneously. \"Think this through carefully, Yolanda,\" I tell myself, sketching out a rough proposal.",
    questions: [
      { text: "What does Yolanda realize this disagreement is really about?", answer: "Pace and acceptable risk tolerance, not whether to grow." },
      { text: "Why is Hector's opportunity genuinely valuable?", answer: "Waiting too long could mean losing it to a competitor." },
      { text: "What does Yolanda decide might address both concerns?", answer: "A structured, phased approach." },
    ],
    trueFalse: [
      { text: "Yolanda realizes this is about pace and risk tolerance, not whether to grow.", answer: true },
      { text: "Waiting too long could mean losing the opportunity to a competitor.", answer: true },
      { text: "Yolanda decides one perspective is clearly wrong.", answer: false },
      { text: "Yolanda decides a structured, phased approach might help.", answer: true },
      { text: "Overextending could jeopardize the studio's stability.", answer: true },
    ],
    buildSentence: [
      {
        target: "Reflecting on both conversations, I realize this disagreement isn't really about whether to grow, but about pace and acceptable risk tolerance.",
        jumbled: ["Reflecting", "and", "disagreement", "really", "both", "grow,", "acceptable", "pace", "on", "about", "tolerance.", "isn't", "conversations,", "this", "risk", "to", "whether", "but", "realize", "I", "about"],
      },
      {
        target: "Hector's opportunity is genuinely valuable, and waiting too long could indeed mean losing it to a more decisive competitor.",
        jumbled: ["indeed", "to", "valuable,", "and", "mean", "losing", "it", "a", "long", "opportunity", "decisive", "is", "Hector's", "genuinely", "competitor.", "too", "more", "waiting", "could"],
      },
      {
        target: "Beatrix's concern is equally valid, given that overextending financially could jeopardize the entire studio's stability if payments were delayed unexpectedly.",
        jumbled: ["delayed", "given", "equally", "were", "studio's", "payments", "jeopardize", "if", "overextending", "concern", "the", "valid,", "unexpectedly.", "entire", "Beatrix's", "that", "could", "is", "stability", "financially"],
      },
      {
        target: "Neither perspective is wrong exactly, though pursuing either exclusively risks losing something the other genuinely values.",
        jumbled: ["exclusively", "something", "values.", "risks", "pursuing", "other", "Neither", "wrong", "though", "exactly,", "losing", "is", "either", "genuinely", "perspective", "the"],
      },
      {
        target: "I decide that helping them find a structured, phased approach might address both urgency and caution simultaneously.",
        jumbled: ["urgency", "both", "phased", "structured,", "I", "might", "and", "find", "helping", "simultaneously.", "address", "that", "them", "decide", "caution", "a", "approach"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about realizing a disagreement was really about pace, not the underlying goal.",
    mySentenceExample: "I realized the disagreement was really about pace, not the goal.",
  },
  {
    number: 5,
    title: "Proposing a Phased Approach",
    image: null,
    imageNote: "Yolanda presenting a phased plan on a whiteboard to Hector and Beatrix together, both listening attentively.",
    story:
      "I bring Hector and Beatrix together, proposing a phased approach: accepting the client, but hiring gradually rather than all at once immediately. This way, I explain, they could meet the new client's initial needs without committing to the full financial risk simultaneously. Moreover, I suggest establishing a specific cash-reserve threshold that, if maintained, would trigger the next hiring phase automatically. Hector seems slightly disappointed by the slower timeline, though he acknowledges this genuinely addresses Beatrix's core financial concern. \"This actually feels considerably safer, Yolanda,\" Beatrix admits, than either accepting immediately or declining the opportunity entirely.",
    questions: [
      { text: "What phased approach does Yolanda propose?", answer: "Accepting the client but hiring gradually." },
      { text: "What does Yolanda suggest establishing?", answer: "A cash-reserve threshold that triggers the next hiring phase." },
      { text: "How does Hector feel about the slower timeline?", answer: "Slightly disappointed, but he acknowledges it addresses Beatrix's concern." },
    ],
    trueFalse: [
      { text: "Yolanda proposes accepting the client but hiring gradually.", answer: true },
      { text: "Yolanda suggests establishing a cash-reserve threshold.", answer: true },
      { text: "Hector feels completely thrilled about the slower timeline.", answer: false },
      { text: "Hector acknowledges this addresses Beatrix's core concern.", answer: true },
      { text: "Beatrix admits this approach feels considerably safer.", answer: true },
    ],
    buildSentence: [
      {
        target: "I bring Hector and Beatrix together, proposing a phased approach: accepting the client, but hiring gradually rather than all at once immediately.",
        jumbled: ["accepting", "once", "I", "client,", "bring", "but", "than", "the", "together,", "hiring", "and", "at", "proposing", "phased", "all", "gradually", "a", "rather", "immediately.", "approach:", "Hector", "Beatrix"],
      },
      {
        target: "This way, I explain, they could meet the new client's initial needs without committing to the full financial risk simultaneously.",
        jumbled: ["initial", "financial", "This", "I", "the", "risk", "way,", "explain,", "to", "could", "new", "the", "full", "meet", "committing", "client's", "needs", "simultaneously.", "without", "they"],
      },
      {
        target: "Moreover, I suggest establishing a specific cash-reserve threshold that, if maintained, would trigger the next hiring phase automatically.",
        jumbled: ["Moreover,", "trigger", "maintained,", "would", "automatically.", "threshold", "that,", "a", "establishing", "the", "specific", "if", "hiring", "next", "I", "suggest", "phase", "cash-reserve"],
      },
      {
        target: "Hector seems slightly disappointed by the slower timeline, though he acknowledges this genuinely addresses Beatrix's core financial concern.",
        jumbled: ["core", "Beatrix's", "timeline,", "this", "concern.", "Hector", "acknowledges", "financial", "though", "slower", "genuinely", "he", "seems", "the", "slightly", "by", "disappointed", "addresses"],
      },
      {
        target: "\"This actually feels considerably safer, Yolanda,\" Beatrix admits, than either accepting immediately or declining the opportunity entirely.",
        jumbled: ["\"This", "admits,", "entirely.", "actually", "immediately", "feels", "declining", "the", "opportunity", "accepting", "Yolanda,\"", "safer,", "considerably", "or", "either", "Beatrix", "than"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about proposing a phased plan that balanced ambition with caution.",
    mySentenceExample: "I proposed a phased plan that balanced ambition with caution.",
  },
  {
    number: 6,
    title: "Drafting the Agreement",
    image: null,
    imageNote: "Yolanda, Hector, and Beatrix reviewing a written document together, all three pointing at specific clauses.",
    story:
      "I help draft a written agreement outlining the phased hiring plan, the cash-reserve threshold, and specific milestones for reassessment. Beatrix reviews the financial language carefully, suggesting one adjustment to make the reserve threshold slightly more conservative than originally proposed. \"Fair enough, Yolanda — a more cautious threshold makes sense given how much this matters,\" Hector agrees. Both partners sign the document, formalizing what had begun as an unstructured, emotional disagreement into a clear, shared plan. Watching them shake hands, I feel genuinely satisfied that mediating this hadn't required either of them abandoning their core values.",
    questions: [
      { text: "What does Yolanda help draft?", answer: "A written agreement outlining the phased plan." },
      { text: "What adjustment does Beatrix suggest?", answer: "Making the reserve threshold more conservative." },
      { text: "What does Hector agree to?", answer: "The adjustment." },
    ],
    trueFalse: [
      { text: "Yolanda helps draft a written agreement outlining the plan.", answer: true },
      { text: "Beatrix suggests making the reserve threshold more conservative.", answer: true },
      { text: "Hector refuses to agree to any adjustment at all.", answer: false },
      { text: "Both partners sign the document.", answer: true },
      { text: "Yolanda feels satisfied neither had to abandon their core values.", answer: true },
    ],
    buildSentence: [
      {
        target: "I help draft a written agreement outlining the phased hiring plan, the cash-reserve threshold, and specific milestones for reassessment.",
        jumbled: ["the", "I", "specific", "plan,", "a", "for", "phased", "agreement", "written", "and", "draft", "help", "milestones", "reassessment.", "threshold,", "outlining", "the", "cash-reserve", "hiring"],
      },
      {
        target: "Beatrix reviews the financial language carefully, suggesting one adjustment to make the reserve threshold slightly more conservative than originally proposed.",
        jumbled: ["adjustment", "Beatrix", "the", "one", "more", "to", "make", "reserve", "language", "carefully,", "reviews", "financial", "than", "the", "proposed.", "slightly", "suggesting", "threshold", "originally", "conservative"],
      },
      {
        target: "\"Fair enough, Yolanda — a more cautious threshold makes sense given how much this matters,\" Hector agrees.",
        jumbled: ["given", "agrees.", "much", "sense", "enough,", "more", "this", "makes", "—", "\"Fair", "Hector", "Yolanda", "a", "cautious", "threshold", "how", "matters,\""],
      },
      {
        target: "Both partners sign the document, formalizing what had begun as an unstructured, emotional disagreement into a clear, shared plan.",
        jumbled: ["an", "clear,", "had", "sign", "shared", "unstructured,", "document,", "what", "plan.", "formalizing", "the", "partners", "disagreement", "into", "as", "Both", "emotional", "a", "begun"],
      },
      {
        target: "Watching them shake hands, I feel genuinely satisfied that mediating this hadn't required either of them abandoning their core values.",
        jumbled: ["Watching", "that", "hands,", "of", "satisfied", "abandoning", "either", "feel", "mediating", "core", "required", "I", "hadn't", "them", "them", "shake", "values.", "their", "genuinely", "this"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about formalizing a compromise into a clear, written agreement.",
    mySentenceExample: "We formalized our compromise into a clear, written agreement.",
  },
  {
    number: 7,
    title: "The First Phase Begins",
    image: null,
    imageNote: "The design studio's small office, one new employee being welcomed by Hector and Beatrix together, all smiling.",
    story:
      "A month later, the studio hires its first new employee under the phased plan, welcoming her with genuine enthusiasm from both partners. Hector seems energized, finally moving forward on the opportunity he'd been anticipating, though within the agreed-upon structure now. Beatrix, meanwhile, closely monitors the cash reserves, though she admits feeling considerably less anxious than she'd expected given the built-in safeguards. The new client relationship, so far, has proceeded smoothly, with payments arriving reliably according to the agreed schedule. Watching this unfold from a distance, I feel proud that the phased compromise had actually translated into genuine, functional progress. \"Good work, Yolanda,\" I tell myself, closing the laptop after checking in on their progress.",
    questions: [
      { text: "What happens a month later?", answer: "The studio hires its first new employee under the phased plan." },
      { text: "How does Hector seem now?", answer: "Energized." },
      { text: "How does Beatrix feel, given the built-in safeguards?", answer: "Less anxious than expected." },
    ],
    trueFalse: [
      { text: "The studio hires its first new employee a month later.", answer: true },
      { text: "Hector seems energized, finally moving forward within the structure.", answer: true },
      { text: "Beatrix feels considerably less anxious than expected.", answer: true },
      { text: "The new client's payments have been unreliable and delayed.", answer: false },
      { text: "Yolanda feels proud this compromise translated into genuine progress.", answer: true },
    ],
    buildSentence: [
      {
        target: "A month later, the studio hires its first new employee under the phased plan, welcoming her with genuine enthusiasm from both partners.",
        jumbled: ["employee", "partners.", "with", "genuine", "later,", "new", "studio", "from", "A", "under", "welcoming", "month", "hires", "the", "the", "its", "first", "plan,", "both", "phased", "her", "enthusiasm"],
      },
      {
        target: "Hector seems energized, finally moving forward on the opportunity he'd been anticipating, though within the agreed-upon structure now.",
        jumbled: ["the", "been", "though", "the", "agreed-upon", "within", "on", "now.", "moving", "forward", "he'd", "Hector", "finally", "seems", "structure", "anticipating,", "opportunity", "energized,"],
      },
      {
        target: "Beatrix, meanwhile, closely monitors the cash reserves, though she admits feeling considerably less anxious than she'd expected given the built-in safeguards.",
        jumbled: ["monitors", "admits", "meanwhile,", "expected", "given", "she'd", "built-in", "the", "considerably", "feeling", "she", "though", "cash", "the", "closely", "than", "safeguards.", "reserves,", "anxious", "less", "Beatrix,"],
      },
      {
        target: "The new client relationship, so far, has proceeded smoothly, with payments arriving reliably according to the agreed schedule.",
        jumbled: ["far,", "new", "according", "has", "payments", "agreed", "schedule.", "to", "proceeded", "arriving", "client", "with", "reliably", "The", "so", "relationship,", "smoothly,", "the"],
      },
      {
        target: "Watching this unfold from a distance, I feel proud that the phased compromise had actually translated into genuine, functional progress.",
        jumbled: ["the", "feel", "Watching", "compromise", "genuine,", "phased", "distance,", "from", "that", "had", "proud", "functional", "I", "actually", "progress.", "unfold", "into", "a", "translated", "this"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about watching a compromise actually work out well in practice.",
    mySentenceExample: "I watched the compromise actually work out well in practice.",
  },
  {
    number: 8,
    title: "A Scheduled Check-In",
    image: null,
    imageNote: "Yolanda meeting with Hector and Beatrix again at the agreed milestone, reviewing progress on a laptop together.",
    story:
      "As agreed, I meet with Hector and Beatrix at the first scheduled milestone to review progress against the original plan. The cash reserves have remained above the agreed threshold, meeting the criteria required to trigger the next hiring phase. Hector feels validated that his original instinct about the opportunity's value had proven correct, given the client relationship's stability. Beatrix feels validated too, recognizing that the structured approach had prevented what could have otherwise felt like reckless, unmanaged risk. \"Thank you again, Yolanda, for facilitating a process that respected both of us,\" they both say, appreciating how it honored their different, yet equally legitimate, perspectives throughout.",
    questions: [
      { text: "What does Yolanda do as agreed?", answer: "Meets with Hector and Beatrix at the first milestone." },
      { text: "What have the cash reserves remained?", answer: "Above the agreed threshold." },
      { text: "How do both Hector and Beatrix feel?", answer: "Validated." },
    ],
    trueFalse: [
      { text: "Yolanda meets with them at the first scheduled milestone.", answer: true },
      { text: "The cash reserves have remained above the agreed threshold.", answer: true },
      { text: "Hector feels his original instinct about the opportunity was validated.", answer: true },
      { text: "Beatrix feels her structured approach concerns were dismissed.", answer: false },
      { text: "Both thank Yolanda for facilitating this process.", answer: true },
    ],
    buildSentence: [
      {
        target: "I meet with Hector and Beatrix at the first scheduled milestone to review progress against the original plan.",
        jumbled: ["first", "and", "at", "meet", "to", "scheduled", "review", "I", "Beatrix", "progress", "original", "with", "plan.", "Hector", "against", "the", "milestone", "the"],
      },
      {
        target: "The cash reserves have remained above the agreed threshold, meeting the criteria required to trigger the next hiring phase.",
        jumbled: ["to", "the", "required", "the", "meeting", "threshold,", "agreed", "criteria", "reserves", "phase.", "The", "the", "have", "remained", "hiring", "cash", "trigger", "next", "above"],
      },
      {
        target: "Hector feels validated that his original instinct about the opportunity's value had proven correct, given the client relationship's stability.",
        jumbled: ["correct,", "about", "his", "the", "stability.", "proven", "Hector", "that", "validated", "relationship's", "had", "client", "original", "opportunity's", "instinct", "given", "feels", "the", "value"],
      },
      {
        target: "Beatrix feels validated too, recognizing that the structured approach had prevented what could have otherwise felt like reckless, unmanaged risk.",
        jumbled: ["that", "risk.", "prevented", "could", "the", "what", "feels", "reckless,", "have", "approach", "unmanaged", "structured", "felt", "Beatrix", "too,", "recognizing", "otherwise", "had", "like", "validated"],
      },
      {
        target: "\"Thank you again, Yolanda, for facilitating a process that respected both of us,\" they both say, appreciating how it honored their different, yet equally legitimate, perspectives throughout.",
        jumbled: ["say,", "\"Thank", "Yolanda,", "appreciating", "perspectives", "both", "both", "a", "different,", "honored", "us,\"", "yet", "of", "their", "process", "that", "it", "respected", "they", "how", "for", "equally", "throughout.", "facilitating", "you", "again,", "legitimate,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about checking progress against a plan and finding both sides felt validated.",
    mySentenceExample: "We checked our progress and both sides felt validated by the outcome.",
  },
  {
    number: 9,
    title: "A Stronger Partnership",
    image: null,
    imageNote: "Hector and Beatrix sitting together in their studio office, working comfortably side by side.",
    story:
      "Several weeks later, Hector mentions to me, \"Yolanda, this experience genuinely changed how Beatrix and I approach major decisions together now.\" Rather than each simply advocating for their instinct, they've started deliberately considering both ambition and caution as complementary, not opposing, forces. Beatrix agrees, admitting she's become more comfortable with calculated risk, provided it's structured thoughtfully rather than impulsive. Both credit the mediation process itself, not just the specific outcome, with strengthening how they communicate during future disagreements. Hearing this, I recognize that successful mediation sometimes changes a relationship's dynamics well beyond the original dispute itself.",
    questions: [
      { text: "What does Hector mention has genuinely changed?", answer: "How he and Beatrix approach major decisions together." },
      { text: "What has Beatrix become more comfortable with?", answer: "Calculated risk, structured thoughtfully." },
      { text: "What do both credit the mediation process with?", answer: "Strengthening how they communicate." },
    ],
    trueFalse: [
      { text: "Hector mentions this changed how they approach major decisions.", answer: true },
      { text: "Beatrix has become more comfortable with structured, calculated risk.", answer: true },
      { text: "Both credit only the outcome, not the mediation process itself.", answer: false },
      { text: "Both credit the mediation process with strengthening their communication.", answer: true },
      { text: "Yolanda recognizes mediation can change a relationship's dynamics.", answer: true },
    ],
    buildSentence: [
      {
        target: "Several weeks later, Hector mentions to me, \"Yolanda, this experience genuinely changed how Beatrix and I approach major decisions together now.\"",
        jumbled: ["Beatrix", "later,", "how", "together", "me,", "mentions", "this", "changed", "to", "and", "Hector", "decisions", "weeks", "genuinely", "approach", "now.\"", "I", "\"Yolanda,", "Several", "major", "experience"],
      },
      {
        target: "Rather than each simply advocating for their instinct, they've started deliberately considering both ambition and caution as complementary, not opposing, forces.",
        jumbled: ["caution", "than", "ambition", "not", "started", "and", "considering", "opposing,", "as", "both", "Rather", "their", "they've", "each", "advocating", "for", "deliberately", "simply", "complementary,", "forces.", "instinct,"],
      },
      {
        target: "Beatrix agrees, admitting she's become more comfortable with calculated risk, provided it's structured thoughtfully rather than impulsive.",
        jumbled: ["she's", "risk,", "thoughtfully", "more", "admitting", "structured", "rather", "with", "Beatrix", "it's", "comfortable", "provided", "become", "than", "impulsive.", "calculated", "agrees,"],
      },
      {
        target: "Both credit the mediation process itself, not just the specific outcome, with strengthening how they communicate during future disagreements.",
        jumbled: ["the", "disagreements.", "they", "communicate", "the", "during", "credit", "future", "itself,", "outcome,", "specific", "mediation", "just", "not", "strengthening", "how", "process", "with", "Both"],
      },
      {
        target: "Hearing this, I recognize that successful mediation sometimes changes a relationship's dynamics well beyond the original dispute itself.",
        jumbled: ["a", "well", "original", "itself.", "this,", "dispute", "dynamics", "sometimes", "mediation", "relationship's", "beyond", "recognize", "Hearing", "I", "that", "the", "changes", "successful"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a mediation process that improved how two people communicate long-term.",
    mySentenceExample: "The mediation process improved how they communicated long-term.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Yolanda sitting alone at a café, reflecting quietly, a small smile as she looks out the window.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I simply sided with one partner's instinct. If I had pushed for either rapid expansion or complete caution, the studio likely would have lost something valuable either way. Instead, helping them find a structured middle path allowed both ambition and prudence to genuinely coexist productively. I've learned that mediating between business partners isn't about determining who's right, but about designing a framework that honors both perspectives. In the end, this experience taught me that the best solutions often emerge not from compromise alone, but from genuine structural creativity. \"Trust your process, Yolanda,\" I tell myself, smiling as I finish my coffee.",
    questions: [
      { text: "What does Yolanda realize looking back on the process?", answer: "How differently things might have gone had she sided with one partner." },
      { text: "What might have happened if she had sided with one instinct?", answer: "The studio likely would have lost something valuable either way." },
      { text: "What has Yolanda learned about mediating business partners?", answer: "That it's about designing a framework that honors both perspectives." },
    ],
    trueFalse: [
      { text: "Yolanda realizes things might have gone differently with one-sided advice.", answer: true },
      { text: "Pushing for either extreme might have cost the studio something valuable.", answer: true },
      { text: "Yolanda believes mediation is about determining who's right.", answer: false },
      { text: "Yolanda learns mediating is about designing a framework honoring both sides.", answer: true },
      { text: "Yolanda learns the best solutions often come from structural creativity.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire process, I realize how differently things might have unfolded had I simply sided with one partner's instinct.",
        jumbled: ["I", "entire", "process,", "had", "how", "unfolded", "instinct.", "things", "realize", "the", "one", "sided", "differently", "with", "on", "have", "back", "simply", "might", "partner's", "Looking", "I"],
      },
      {
        target: "The studio likely would have lost something valuable either way.",
        jumbled: ["The", "something", "either", "valuable", "have", "lost", "likely", "studio", "way.", "would"],
      },
      {
        target: "Instead, helping them find a structured middle path allowed both ambition and prudence to genuinely coexist productively.",
        jumbled: ["and", "structured", "coexist", "find", "them", "productively.", "middle", "ambition", "both", "allowed", "prudence", "to", "a", "path", "helping", "genuinely", "Instead,"],
      },
      {
        target: "I've learned that mediating between business partners isn't about determining who's right, but about designing a framework that honors both perspectives.",
        jumbled: ["I've", "designing", "who's", "both", "about", "that", "between", "honors", "that", "mediating", "determining", "right,", "about", "a", "isn't", "framework", "but", "partners", "perspectives.", "learned", "business"],
      },
      {
        target: "In the end, this experience taught me that the best solutions often emerge not from compromise alone, but from genuine structural creativity.",
        jumbled: ["experience", "solutions", "the", "alone,", "from", "this", "the", "In", "but", "not", "often", "emerge", "genuine", "that", "end,", "structural", "from", "compromise", "creativity.", "best", "me", "taught"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from mediating a business disagreement creatively.",
    mySentenceExample: "I learned that creative solutions honor both sides of a disagreement.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
