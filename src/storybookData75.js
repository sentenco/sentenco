// B2 Adults digital storybook, Book 75: "Negotiating a Vendor Contract"
// Static content -- no Supabase. Third book in the B2 Adults batch
// (73-80). Business/external-negotiation scenario, distinct from
// Book 73's internal salary negotiation -- this centers on a small
// business owner negotiating pricing and terms with an external
// supplier, matching the B2 Adults spec's "instrumental relevance"
// and genre-aware writing (formal proposal/email) focus. Adults-
// track shape: 3 questions, 5 True/False, 5 Build-a-Sentence per
// chapter. Chapter images not generated yet -- image left null per chapter.
import coverImg from "./assets/storybook75/cover.jpg";

export const STORYBOOK_TITLE = "Negotiating a Vendor Contract";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Tomas sitting at a small bakery's back office desk, a supplier contract spread out in front of him, calculator and notes nearby.";

export const CHARACTERS = [
  { name: "Tomas", role: "The narrator, owner of a small bakery", look: "Apron over work clothes, practical, careful with the business's finances." },
  { name: "Ms. Idowu", role: "A sales representative for a flour and grain supplier", look: "Professional, personable, genuinely wants a lasting business relationship." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Contract Renewal",
    image: null,
    imageNote: "Tomas reading a renewal letter from his supplier at his bakery's back office desk, a slightly concerned expression.",
    story:
      "My current flour supplier sends their annual contract renewal, and I notice the proposed prices have increased more than I'd expected. Given how tight my bakery's margins already are, absorbing this increase without adjustment would genuinely hurt my business's profitability. I consider simply switching suppliers, though doing so would mean rebuilding a relationship I'd carefully developed over three years. Instead, I decide the more sensible approach is requesting a conversation about the proposed terms before committing to anything. Given how much this decision affects my business, I know I'll need to prepare a genuinely persuasive case beforehand. \"Do this properly, Tomas,\" I tell myself, setting the renewal letter aside for now.",
    questions: [
      { text: "What does Tomas's current flour supplier send?", answer: "The annual contract renewal." },
      { text: "What does Tomas notice about the proposed prices?", answer: "That they've increased more than expected." },
      { text: "What does Tomas decide is the more sensible approach?", answer: "Requesting a conversation about the terms." },
    ],
    trueFalse: [
      { text: "Tomas's supplier sends their annual contract renewal.", answer: true },
      { text: "The proposed prices have increased more than expected.", answer: true },
      { text: "Tomas immediately switches suppliers without discussion.", answer: false },
      { text: "Tomas decides to request a conversation about the terms.", answer: true },
      { text: "Tomas knows he needs to prepare a persuasive case.", answer: true },
    ],
    buildSentence: [
      {
        target: "My current flour supplier sends their annual contract renewal, and I notice the proposed prices have increased more than I'd expected.",
        jumbled: ["expected.", "I", "current", "contract", "notice", "their", "flour", "I'd", "proposed", "prices", "increased", "annual", "and", "than", "renewal,", "sends", "more", "supplier", "have", "the", "My"],
      },
      {
        target: "Given how tight my bakery's margins already are, absorbing this increase without adjustment would genuinely hurt my business's profitability.",
        jumbled: ["without", "genuinely", "are,", "adjustment", "business's", "increase", "profitability.", "my", "bakery's", "my", "how", "tight", "margins", "Given", "this", "hurt", "absorbing", "already", "would"],
      },
      {
        target: "I consider simply switching suppliers, though doing so would mean rebuilding a relationship I'd carefully developed over three years.",
        jumbled: ["simply", "developed", "doing", "over", "rebuilding", "so", "would", "mean", "though", "years.", "carefully", "relationship", "three", "suppliers,", "I", "I'd", "consider", "switching", "a"],
      },
      {
        target: "Instead, I decide the more sensible approach is requesting a conversation about the proposed terms before committing to anything.",
        jumbled: ["to", "is", "Instead,", "I", "about", "more", "decide", "sensible", "the", "committing", "a", "conversation", "approach", "terms", "requesting", "proposed", "anything.", "before", "the"],
      },
      {
        target: "Given how much this decision affects my business, I know I'll need to prepare a genuinely persuasive case beforehand.",
        jumbled: ["need", "how", "persuasive", "I", "prepare", "a", "Given", "much", "my", "to", "case", "genuinely", "decision", "affects", "I'll", "business,", "know", "this", "beforehand."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about deciding to negotiate rather than simply accepting a price increase.",
    mySentenceExample: "I decided to negotiate rather than simply accepting a price increase.",
  },
  {
    number: 2,
    title: "Researching Alternatives",
    image: null,
    imageNote: "Tomas comparing printed price sheets from different suppliers spread across his desk, calculator nearby.",
    story:
      "Before the conversation, I research pricing from two competing suppliers, ensuring I'd understand the actual market rate genuinely. I discover that while my current supplier's proposed price is indeed higher, it's not dramatically out of line with the broader market. This research, moreover, gives me leverage: I can reference specific competitor rates without necessarily needing to switch suppliers immediately. I also calculate exactly how much a smaller, more reasonable increase would affect my monthly costs specifically. Armed with this data, I feel considerably more confident approaching Ms. Idowu than I would have otherwise. \"You've done the homework, Tomas,\" I remind myself, gathering the price sheets into one folder.",
    questions: [
      { text: "What does Tomas research before the conversation?", answer: "Pricing from two competing suppliers." },
      { text: "What does Tomas discover about the proposed price?", answer: "That it's higher, but not dramatically out of line with the market." },
      { text: "What does this research give Tomas?", answer: "Leverage." },
    ],
    trueFalse: [
      { text: "Tomas researches pricing from two competing suppliers.", answer: true },
      { text: "The proposed price is dramatically out of line with the market.", answer: false },
      { text: "This research gives Tomas leverage for the conversation.", answer: true },
      { text: "Tomas calculates how a smaller increase would affect his costs.", answer: true },
      { text: "Tomas feels more confident approaching Ms. Idowu.", answer: true },
    ],
    buildSentence: [
      {
        target: "I research pricing from two competing suppliers, ensuring I'd understand the actual market rate genuinely.",
        jumbled: ["ensuring", "actual", "competing", "suppliers,", "market", "the", "two", "I", "rate", "from", "understand", "genuinely.", "pricing", "research", "I'd"],
      },
      {
        target: "I discover that while my current supplier's proposed price is indeed higher, it's not dramatically out of line with the broader market.",
        jumbled: ["with", "line", "is", "out", "I", "dramatically", "it's", "current", "indeed", "while", "price", "proposed", "not", "that", "of", "higher,", "my", "supplier's", "the", "broader", "discover", "market."],
      },
      {
        target: "This research, moreover, gives me leverage: I can reference specific competitor rates without necessarily needing to switch suppliers immediately.",
        jumbled: ["gives", "leverage:", "immediately.", "This", "research,", "rates", "without", "specific", "reference", "I", "suppliers", "switch", "me", "can", "competitor", "needing", "to", "moreover,", "necessarily"],
      },
      {
        target: "I also calculate exactly how much a smaller, more reasonable increase would affect my monthly costs specifically.",
        jumbled: ["a", "my", "specifically.", "costs", "smaller,", "affect", "I", "more", "exactly", "reasonable", "calculate", "increase", "how", "also", "much", "monthly", "would"],
      },
      {
        target: "Armed with this data, I feel considerably more confident approaching Ms. Idowu than I would have otherwise.",
        jumbled: ["more", "data,", "Idowu", "otherwise.", "approaching", "would", "I", "confident", "with", "than", "I", "have", "Ms.", "feel", "considerably", "this", "Armed"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about researching the market before entering a business negotiation.",
    mySentenceExample: "I researched the market before entering the business negotiation.",
  },
  {
    number: 3,
    title: "Requesting the Meeting",
    image: null,
    imageNote: "Tomas sitting across from Ms. Idowu at a small café table, both with coffee cups, papers spread between them.",
    story:
      "I request a meeting with Ms. Idowu, explaining upfront that I'd like to discuss the proposed contract terms before signing anything. She agrees readily, mentioning she genuinely values our long working relationship and prefers open discussion over losing a client abruptly. \"Of course, Tomas, let's talk it through,\" she says, taking a seat across from me. I open by acknowledging the quality of her company's product, then explain that the proposed increase exceeds what my current margins can comfortably absorb. She listens attentively, asking clarifying questions rather than immediately defending the proposed pricing outright. This respectful, business-like exchange, given how it begins, leaves me cautiously optimistic about finding common ground.",
    questions: [
      { text: "What does Tomas request?", answer: "A meeting with Ms. Idowu." },
      { text: "Why does Ms. Idowu agree readily?", answer: "She values their long working relationship." },
      { text: "How does Ms. Idowu respond to Tomas's explanation?", answer: "She listens attentively, asking clarifying questions." },
    ],
    trueFalse: [
      { text: "Tomas requests a meeting to discuss the proposed terms.", answer: true },
      { text: "Ms. Idowu values their long working relationship.", answer: true },
      { text: "Tomas opens by criticizing her company's product quality.", answer: false },
      { text: "Ms. Idowu listens attentively and asks clarifying questions.", answer: true },
      { text: "Tomas feels cautiously optimistic about finding common ground.", answer: true },
    ],
    buildSentence: [
      {
        target: "I request a meeting with Ms. Idowu, explaining upfront that I'd like to discuss the proposed contract terms before signing anything.",
        jumbled: ["request", "that", "Ms.", "with", "anything.", "like", "I", "to", "upfront", "signing", "contract", "the", "before", "meeting", "explaining", "a", "discuss", "terms", "Idowu,", "I'd", "proposed"],
      },
      {
        target: "She agrees readily, mentioning she genuinely values our long working relationship and prefers open discussion over losing a client abruptly.",
        jumbled: ["client", "genuinely", "relationship", "abruptly.", "she", "mentioning", "agrees", "She", "values", "long", "open", "a", "over", "prefers", "discussion", "our", "working", "and", "readily,", "losing"],
      },
      {
        target: "\"Of course, Tomas, let's talk it through,\" she says, taking a seat across from me.",
        jumbled: ["talk", "says,", "\"Of", "from", "course,", "through,\"", "me.", "taking", "she", "let's", "seat", "across", "a", "Tomas,", "it"],
      },
      {
        target: "I open by acknowledging the quality of her company's product, then explain that the proposed increase exceeds what my current margins can comfortably absorb.",
        jumbled: ["increase", "my", "explain", "can", "acknowledging", "proposed", "I", "that", "the", "of", "company's", "product,", "quality", "current", "absorb.", "margins", "exceeds", "the", "comfortably", "open", "her", "then", "by", "what"],
      },
      {
        target: "This respectful, business-like exchange, given how it begins, leaves me cautiously optimistic about finding common ground.",
        jumbled: ["This", "leaves", "it", "finding", "optimistic", "begins,", "me", "business-like", "common", "about", "given", "ground.", "how", "exchange,", "cautiously", "respectful,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about opening a business negotiation respectfully and professionally.",
    mySentenceExample: "I opened the business negotiation respectfully and professionally.",
  },
  {
    number: 4,
    title: "Presenting My Case",
    image: null,
    imageNote: "Tomas showing a printed cost breakdown to Ms. Idowu, both leaning over the papers together.",
    story:
      "I present my cost breakdown, explaining specifically how the proposed increase would affect my bakery's monthly operating expenses. I mention, respectfully, that I'd researched competitor pricing and found it somewhat more favorable, though not dramatically different overall. Rather than threatening to switch suppliers, I frame this as context, hoping to negotiate collaboratively rather than through implicit pressure. Ms. Idowu nods, acknowledging that a valued, long-term client like myself deserves consideration beyond standard, blanket pricing policies. \"You've made a fair case, Tomas,\" she says. She mentions she'll need to consult her manager, but suggests there may be flexibility available given our history together.",
    questions: [
      { text: "What does Tomas present to Ms. Idowu?", answer: "A cost breakdown." },
      { text: "What does Tomas mention about competitor pricing?", answer: "That it's somewhat more favorable, but not dramatically different." },
      { text: "What does Ms. Idowu say she needs to do?", answer: "Consult her manager." },
    ],
    trueFalse: [
      { text: "Tomas presents a cost breakdown explaining the impact.", answer: true },
      { text: "Tomas mentions competitor pricing was somewhat more favorable.", answer: true },
      { text: "Tomas explicitly threatens to switch suppliers immediately.", answer: false },
      { text: "Ms. Idowu says she needs to consult her manager.", answer: true },
      { text: "Ms. Idowu suggests there may be flexibility available.", answer: true },
    ],
    buildSentence: [
      {
        target: "I present my cost breakdown, explaining specifically how the proposed increase would affect my bakery's monthly operating expenses.",
        jumbled: ["expenses.", "my", "my", "breakdown,", "bakery's", "how", "increase", "proposed", "specifically", "affect", "operating", "I", "explaining", "monthly", "would", "the", "present", "cost"],
      },
      {
        target: "I mention, respectfully, that I'd researched competitor pricing and found it somewhat more favorable, though not dramatically different overall.",
        jumbled: ["dramatically", "different", "pricing", "I", "I'd", "mention,", "though", "somewhat", "competitor", "that", "favorable,", "found", "and", "it", "researched", "overall.", "respectfully,", "more", "not"],
      },
      {
        target: "Rather than threatening to switch suppliers, I frame this as context, hoping to negotiate collaboratively rather than through implicit pressure.",
        jumbled: ["Rather", "through", "implicit", "to", "suppliers,", "pressure.", "frame", "as", "than", "negotiate", "than", "context,", "collaboratively", "this", "I", "hoping", "to", "switch", "rather", "threatening"],
      },
      {
        target: "Ms. Idowu nods, acknowledging that a valued, long-term client like myself deserves consideration beyond standard, blanket pricing policies.",
        jumbled: ["that", "client", "pricing", "long-term", "nods,", "deserves", "acknowledging", "valued,", "policies.", "myself", "a", "Idowu", "consideration", "like", "Ms.", "beyond", "standard,", "blanket"],
      },
      {
        target: "She mentions she'll need to consult her manager, but suggests there may be flexibility available given our history together.",
        jumbled: ["available", "need", "to", "She", "given", "flexibility", "may", "suggests", "her", "history", "she'll", "together.", "but", "our", "consult", "be", "mentions", "manager,", "there"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about presenting a business case without threatening or pressuring the other side.",
    mySentenceExample: "I presented my case without threatening or pressuring the other side.",
  },
  {
    number: 5,
    title: "A Counteroffer",
    image: null,
    imageNote: "Ms. Idowu on a phone call briefly, then returning to the table with a revised offer written on paper.",
    story:
      "Ms. Idowu steps away briefly to call her manager, returning several minutes later with a revised offer to discuss together. Rather than the full proposed increase, she offers a smaller adjustment, paired with a locked-in rate for the following eighteen months. This longer commitment, she explains, benefits her company too, since it guarantees predictable, stable revenue from a reliable client. \"This is what I could arrange for you, Tomas,\" she says, sliding the revised terms across the table. I consider this carefully, recognizing that price stability itself has genuine value beyond the immediate number involved. Given these terms, I agree this counteroffer seems considerably more reasonable than the originally proposed contract.",
    questions: [
      { text: "What does Ms. Idowu do briefly?", answer: "Step away to call her manager." },
      { text: "What does the revised offer include?", answer: "A smaller adjustment with a locked-in rate for eighteen months." },
      { text: "Why does the longer commitment benefit her company too?", answer: "It guarantees predictable, stable revenue." },
    ],
    trueFalse: [
      { text: "Ms. Idowu steps away briefly to call her manager.", answer: true },
      { text: "The revised offer includes a smaller adjustment with a locked-in rate.", answer: true },
      { text: "The longer commitment guarantees predictable revenue for her company.", answer: true },
      { text: "Tomas immediately rejects this counteroffer outright.", answer: false },
      { text: "Tomas agrees this counteroffer seems considerably more reasonable.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Idowu steps away briefly to call her manager, returning several minutes later with a revised offer to discuss together.",
        jumbled: ["revised", "away", "with", "a", "offer", "to", "briefly", "her", "together.", "steps", "call", "discuss", "minutes", "several", "Idowu", "manager,", "to", "Ms.", "returning", "later"],
      },
      {
        target: "Rather than the full proposed increase, she offers a smaller adjustment, paired with a locked-in rate for the following eighteen months.",
        jumbled: ["months.", "proposed", "smaller", "than", "offers", "rate", "a", "the", "she", "eighteen", "adjustment,", "increase,", "with", "paired", "the", "locked-in", "a", "Rather", "full", "following", "for"],
      },
      {
        target: "This longer commitment, she explains, benefits her company too, since it guarantees predictable, stable revenue from a reliable client.",
        jumbled: ["too,", "reliable", "from", "client.", "company", "revenue", "This", "it", "stable", "commitment,", "guarantees", "since", "her", "predictable,", "longer", "benefits", "a", "explains,", "she"],
      },
      {
        target: "\"This is what I could arrange for you, Tomas,\" she says, sliding the revised terms across the table.",
        jumbled: ["Tomas,\"", "across", "you,", "table.", "terms", "sliding", "I", "says,", "is", "for", "could", "revised", "the", "the", "\"This", "she", "what", "arrange"],
      },
      {
        target: "I consider this carefully, recognizing that price stability itself has genuine value beyond the immediate number involved.",
        jumbled: ["consider", "involved.", "has", "value", "stability", "number", "I", "genuine", "that", "immediate", "the", "recognizing", "itself", "this", "price", "carefully,", "beyond"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about considering a counteroffer that benefited both sides of a negotiation.",
    mySentenceExample: "I considered a counteroffer that benefited both sides fairly.",
  },
  {
    number: 6,
    title: "Finalizing the Terms",
    image: null,
    imageNote: "Tomas and Ms. Idowu reviewing a revised contract document together, both pointing at specific clauses.",
    story:
      "We review the revised contract together, line by line, ensuring both of us fully understand every term before signing anything. I ask a few clarifying questions about delivery schedules and minimum order quantities, wanting complete clarity beforehand. Ms. Idowu answers each question thoroughly, adjusting one minor clause after I mention a scheduling conflict with my current ordering pattern. Once satisfied, we both sign the updated agreement, shaking hands as a gesture of renewed, mutual commitment. \"Pleasure doing business with you, Tomas,\" she says warmly. Walking her out, I feel genuinely satisfied that this negotiation had strengthened, rather than strained, our working relationship.",
    questions: [
      { text: "What do Tomas and Ms. Idowu review together?", answer: "The revised contract, line by line." },
      { text: "What does Tomas ask clarifying questions about?", answer: "Delivery schedules and minimum order quantities." },
      { text: "What happens once they're both satisfied?", answer: "They sign the updated agreement." },
    ],
    trueFalse: [
      { text: "Tomas and Ms. Idowu review the revised contract line by line.", answer: true },
      { text: "Tomas asks about delivery schedules and order quantities.", answer: true },
      { text: "Ms. Idowu refuses to adjust any clauses at all.", answer: false },
      { text: "They both sign the updated agreement.", answer: true },
      { text: "Tomas feels this strengthened their working relationship.", answer: true },
    ],
    buildSentence: [
      {
        target: "We review the revised contract together, line by line, ensuring both of us fully understand every term before signing anything.",
        jumbled: ["fully", "both", "understand", "ensuring", "We", "line", "the", "revised", "review", "of", "together,", "every", "anything.", "term", "us", "line,", "by", "before", "contract", "signing"],
      },
      {
        target: "I ask a few clarifying questions about delivery schedules and minimum order quantities, wanting complete clarity beforehand.",
        jumbled: ["beforehand.", "ask", "a", "clarifying", "questions", "about", "order", "wanting", "and", "clarity", "complete", "quantities,", "minimum", "I", "delivery", "schedules", "few"],
      },
      {
        target: "Ms. Idowu answers each question thoroughly, adjusting one minor clause after I mention a scheduling conflict with my current ordering pattern.",
        jumbled: ["answers", "one", "Idowu", "thoroughly,", "conflict", "a", "current", "with", "I", "after", "minor", "adjusting", "pattern.", "clause", "ordering", "my", "Ms.", "scheduling", "question", "each", "mention"],
      },
      {
        target: "We both sign the updated agreement, shaking hands as a gesture of renewed, mutual commitment.",
        jumbled: ["agreement,", "renewed,", "a", "shaking", "of", "commitment.", "mutual", "gesture", "hands", "as", "We", "the", "updated", "both", "sign"],
      },
      {
        target: "Walking her out, I feel genuinely satisfied that this negotiation had strengthened, rather than strained, our working relationship.",
        jumbled: ["feel", "this", "satisfied", "Walking", "relationship.", "strengthened,", "than", "negotiation", "our", "out,", "working", "genuinely", "rather", "strained,", "had", "her", "that", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finalizing a business agreement that both sides felt good about.",
    mySentenceExample: "We finalized a business agreement that both sides felt good about.",
  },
  {
    number: 7,
    title: "Writing a Formal Confirmation",
    image: null,
    imageNote: "Tomas at his laptop that evening, drafting a formal email summarizing the agreed terms.",
    story:
      "That evening, I draft a formal email to Ms. Idowu, summarizing the finalized terms for both our records going forward. I keep the tone professional, referencing specific numbers and dates rather than vague, general descriptions of what we'd agreed. I also thank her for approaching this collaboratively, noting that I valued the flexibility her company had ultimately shown, and I sign off simply as \"Tomas.\" Sending this email ensures there's a clear, documented reference should any confusion arise later regarding these specific terms. This written follow-up, I realize, is as much a part of successful negotiation as the actual conversation itself.",
    questions: [
      { text: "What does Tomas draft that evening?", answer: "A formal confirmation email." },
      { text: "What tone does Tomas keep in the email?", answer: "Professional, referencing specific numbers and dates." },
      { text: "Why does Tomas send this email?", answer: "To ensure a clear, documented reference for later." },
    ],
    trueFalse: [
      { text: "Tomas drafts a formal email summarizing the finalized terms.", answer: true },
      { text: "Tomas keeps the tone professional with specific numbers and dates.", answer: true },
      { text: "Tomas avoids thanking Ms. Idowu in the email.", answer: false },
      { text: "This email ensures a clear, documented reference for later.", answer: true },
      { text: "Tomas realizes written follow-up is part of successful negotiation.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, I draft a formal email to Ms. Idowu, summarizing the finalized terms for both our records going forward.",
        jumbled: ["email", "our", "summarizing", "evening,", "Idowu,", "the", "for", "a", "finalized", "both", "draft", "to", "terms", "I", "formal", "Ms.", "forward.", "going", "That", "records"],
      },
      {
        target: "I keep the tone professional, referencing specific numbers and dates rather than vague, general descriptions of what we'd agreed.",
        jumbled: ["tone", "the", "of", "and", "specific", "keep", "general", "numbers", "vague,", "what", "descriptions", "agreed.", "rather", "I", "dates", "we'd", "referencing", "professional,", "than"],
      },
      {
        target: "I also thank her for approaching this collaboratively, noting that I valued the flexibility her company had ultimately shown, and I sign off simply as \"Tomas.\"",
        jumbled: ["had", "thank", "I", "valued", "shown,", "collaboratively,", "the", "and", "I", "as", "approaching", "ultimately", "also", "her", "for", "company", "this", "that", "off", "flexibility", "\"Tomas.\"", "sign", "noting", "simply", "I", "her"],
      },
      {
        target: "Sending this email ensures there's a clear, documented reference should any confusion arise later regarding these specific terms.",
        jumbled: ["should", "ensures", "confusion", "documented", "Sending", "email", "these", "this", "arise", "terms.", "reference", "clear,", "later", "any", "specific", "a", "regarding", "there's"],
      },
      {
        target: "This written follow-up, I realize, is as much a part of successful negotiation as the actual conversation itself.",
        jumbled: ["itself.", "realize,", "as", "negotiation", "actual", "the", "This", "I", "of", "conversation", "a", "part", "as", "written", "much", "is", "successful", "follow-up,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about writing a formal email to confirm the details of a business agreement.",
    mySentenceExample: "I wrote a formal email to confirm the details of our agreement.",
  },
  {
    number: 8,
    title: "Sharing with My Staff",
    image: null,
    imageNote: "Tomas explaining the new supplier terms to his two bakery staff members in the kitchen, all relaxed.",
    story:
      "The next morning, I explain the new supplier terms to my staff, since the adjusted pricing directly affects our overall budget planning. \"Does this mean we're raising menu prices, Tomas?\" one employee asks, wondering if we might need to adjust slightly to maintain our current margins. I explain that, given the smaller-than-expected increase, only minor adjustments should actually be necessary going forward. Another employee mentions appreciating that I'd negotiated rather than simply passing the full increase along without any pushback. This transparency, I realize, matters not just for practical planning, but for maintaining trust within my small team too.",
    questions: [
      { text: "What does Tomas explain to his staff the next morning?", answer: "The new supplier terms." },
      { text: "What does one employee ask about?", answer: "Whether menu prices need adjusting." },
      { text: "What does another employee mention appreciating?", answer: "That Tomas negotiated rather than passing along the full increase." },
    ],
    trueFalse: [
      { text: "Tomas explains the new supplier terms to his staff.", answer: true },
      { text: "One employee asks about adjusting menu prices.", answer: true },
      { text: "Tomas says major menu price changes are now necessary.", answer: false },
      { text: "An employee appreciates that Tomas negotiated rather than just passing costs along.", answer: true },
      { text: "Tomas realizes this transparency matters for team trust too.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next morning, I explain the new supplier terms to my staff, since the adjusted pricing directly affects our overall budget planning.",
        jumbled: ["pricing", "The", "my", "the", "to", "directly", "supplier", "overall", "planning.", "I", "budget", "staff,", "next", "new", "terms", "the", "explain", "affects", "since", "adjusted", "our", "morning,"],
      },
      {
        target: "\"Does this mean we're raising menu prices, Tomas?\" one employee asks, wondering if we might need to adjust slightly to maintain our current margins.",
        jumbled: ["wondering", "need", "our", "to", "employee", "adjust", "we're", "Tomas?\"", "we", "raising", "margins.", "asks,", "to", "one", "might", "maintain", "mean", "current", "slightly", "prices,", "\"Does", "if", "menu", "this"],
      },
      {
        target: "I explain that, given the smaller-than-expected increase, only minor adjustments should actually be necessary going forward.",
        jumbled: ["that,", "given", "actually", "smaller-than-expected", "be", "adjustments", "only", "forward.", "necessary", "I", "increase,", "minor", "the", "going", "should", "explain"],
      },
      {
        target: "Another employee mentions appreciating that I'd negotiated rather than simply passing the full increase along without any pushback.",
        jumbled: ["mentions", "any", "simply", "than", "employee", "passing", "appreciating", "full", "without", "negotiated", "increase", "the", "I'd", "rather", "pushback.", "that", "along", "Another"],
      },
      {
        target: "This transparency, I realize, matters not just for practical planning, but for maintaining trust within my small team too.",
        jumbled: ["realize,", "for", "trust", "too.", "team", "planning,", "practical", "maintaining", "for", "just", "but", "matters", "not", "This", "small", "I", "my", "within", "transparency,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about explaining a business decision transparently to your team.",
    mySentenceExample: "I explained the business decision transparently to my team.",
  },
  {
    number: 9,
    title: "A Stronger Partnership",
    image: null,
    imageNote: "Tomas and Ms. Idowu meeting again months later, both relaxed and friendly, discussing an upcoming order casually.",
    story:
      "Several months later, Ms. Idowu visits again to discuss an upcoming seasonal order, and our conversation feels noticeably more relaxed than before. \"You actually changed how I approach clients now, Tomas,\" she mentions, emphasizing flexibility over rigid, blanket policies. I admit that I'd initially worried negotiating might damage our relationship, though it clearly achieved the opposite outcome instead. Given how smoothly this partnership now operates, I recognize that respectful negotiation, handled well, can genuinely strengthen business relationships rather than threaten them. This realization, more than the specific pricing terms, feels like the negotiation's most lasting outcome.",
    questions: [
      { text: "What does Ms. Idowu discuss when she visits several months later?", answer: "An upcoming seasonal order." },
      { text: "What does Ms. Idowu mention about their negotiation?", answer: "That it influenced how she approaches other long-term clients." },
      { text: "What does Tomas admit he had initially worried about?", answer: "That negotiating might damage their relationship." },
    ],
    trueFalse: [
      { text: "Ms. Idowu visits to discuss an upcoming seasonal order.", answer: true },
      { text: "Ms. Idowu says their negotiation influenced how she approaches other clients.", answer: true },
      { text: "Tomas admits he initially worried negotiating might damage the relationship.", answer: true },
      { text: "The negotiation actually damaged their relationship permanently.", answer: false },
      { text: "Tomas recognizes respectful negotiation can strengthen relationships.", answer: true },
    ],
    buildSentence: [
      {
        target: "Several months later, Ms. Idowu visits again to discuss an upcoming seasonal order, and our conversation feels noticeably more relaxed than before.",
        jumbled: ["and", "discuss", "to", "visits", "our", "later,", "relaxed", "before.", "Idowu", "noticeably", "again", "an", "seasonal", "upcoming", "months", "Several", "order,", "feels", "more", "conversation", "than", "Ms."],
      },
      {
        target: "\"You actually changed how I approach clients now, Tomas,\" she mentions, emphasizing flexibility over rigid, blanket policies.",
        jumbled: ["I", "she", "\"You", "approach", "now,", "mentions,", "over", "clients", "flexibility", "emphasizing", "changed", "policies.", "blanket", "rigid,", "actually", "how", "Tomas,\""],
      },
      {
        target: "I admit that I'd initially worried negotiating might damage our relationship, though it clearly achieved the opposite outcome instead.",
        jumbled: ["might", "I'd", "instead.", "worried", "the", "it", "opposite", "I", "clearly", "admit", "that", "initially", "negotiating", "damage", "achieved", "though", "our", "outcome", "relationship,"],
      },
      {
        target: "Given how smoothly this partnership now operates, I recognize that respectful negotiation, handled well, can genuinely strengthen business relationships rather than threaten them.",
        jumbled: ["smoothly", "Given", "business", "strengthen", "rather", "negotiation,", "now", "this", "relationships", "handled", "how", "than", "recognize", "respectful", "them.", "threaten", "I", "well,", "operates,", "can", "that", "genuinely", "partnership"],
      },
      {
        target: "This realization, more than the specific pricing terms, feels like the negotiation's most lasting outcome.",
        jumbled: ["specific", "feels", "the", "outcome.", "pricing", "more", "like", "lasting", "This", "negotiation's", "realization,", "than", "the", "most", "terms,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a negotiation that ended up strengthening a business relationship.",
    mySentenceExample: "The negotiation ended up strengthening our business relationship.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Tomas standing in his bakery at closing time, reflecting quietly while wiping down the counter.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I simply accepted the original terms without question. If I had avoided the conversation out of discomfort, I likely would have quietly absorbed costs my business genuinely couldn't sustain long-term. Instead, researching thoroughly and negotiating respectfully allowed me to protect my business while preserving a valuable, long-term relationship. I've learned that negotiation, done well, isn't adversarial by nature, but rather a genuine tool for finding sustainable, mutual solutions. In the end, this experience taught me that advocating for my business requires both preparation and genuine respect for the other side. \"You handled that well, Tomas,\" I tell myself, locking up the bakery for the night.",
    questions: [
      { text: "What does Tomas realize looking back on the process?", answer: "How differently things might have gone had he accepted the original terms." },
      { text: "What might have happened if he had simply accepted the original terms?", answer: "He would have quietly absorbed costs his business couldn't sustain." },
      { text: "What has Tomas learned about negotiation done well?", answer: "That it's a tool for finding sustainable, mutual solutions, not adversarial." },
    ],
    trueFalse: [
      { text: "Tomas realizes things might have gone differently without negotiating.", answer: true },
      { text: "Accepting the original terms might have strained his business finances.", answer: true },
      { text: "Tomas believes negotiation is adversarial by nature.", answer: false },
      { text: "Tomas learns negotiation is a tool for sustainable, mutual solutions.", answer: true },
      { text: "Tomas learns advocating for his business requires preparation and respect.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire process, I realize how differently things might have unfolded had I simply accepted the original terms without question.",
        jumbled: ["back", "I", "question.", "the", "differently", "simply", "terms", "how", "on", "have", "process,", "realize", "might", "entire", "without", "the", "things", "Looking", "had", "unfolded", "original", "I", "accepted"],
      },
      {
        target: "I likely would have quietly absorbed costs my business genuinely couldn't sustain long-term.",
        jumbled: ["costs", "my", "I", "likely", "sustain", "have", "quietly", "genuinely", "couldn't", "business", "would", "long-term.", "absorbed"],
      },
      {
        target: "Instead, researching thoroughly and negotiating respectfully allowed me to protect my business while preserving a valuable, long-term relationship.",
        jumbled: ["to", "protect", "allowed", "my", "a", "thoroughly", "researching", "preserving", "Instead,", "negotiating", "and", "respectfully", "valuable,", "relationship.", "long-term", "business", "while", "me"],
      },
      {
        target: "I've learned that negotiation, done well, isn't adversarial by nature, but rather a genuine tool for finding sustainable, mutual solutions.",
        jumbled: ["sustainable,", "adversarial", "a", "done", "mutual", "tool", "negotiation,", "nature,", "but", "by", "solutions.", "well,", "isn't", "genuine", "rather", "learned", "for", "that", "finding", "I've"],
      },
      {
        target: "In the end, this experience taught me that advocating for my business requires both preparation and genuine respect for the other side.",
        jumbled: ["requires", "preparation", "taught", "my", "side.", "end,", "me", "both", "In", "respect", "business", "the", "experience", "for", "advocating", "other", "and", "for", "the", "genuine", "this", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating a business agreement respectfully.",
    mySentenceExample: "I learned that respectful negotiation protects both sides of a deal.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
