// B2 Adults digital storybook, Book 77: "Negotiating an Insurance Claim"
// Static content -- no Supabase. Fifth book in the B2 Adults batch
// (73-80). High-stakes negotiation over a contested claim amount,
// distinct from Book 62's "A Billing Dispute" (B1, a straightforward
// phone-call correction of an obvious clerical error) -- this one
// involves genuine back-and-forth negotiation over a disputed
// settlement figure. Adults-track shape: 3 questions, 5 True/False,
// 5 Build-a-Sentence per chapter. Chapter images not generated yet --
// image left null per chapter.
import coverImg from "./assets/storybook77/cover.jpg";

export const STORYBOOK_TITLE = "Negotiating an Insurance Claim";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Desmond standing in his driveway looking at storm damage on his roof, phone in hand, an insurance claim letter tucked under his arm.";

export const CHARACTERS = [
  { name: "Desmond", role: "The narrator, a homeowner filing a storm-damage claim", look: "Practical, methodical, keeps detailed records of everything." },
  { name: "Ms. Farrow", role: "An insurance claims adjuster", look: "Professional, follows company guidelines closely, open to reasonable evidence." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Assessing the Damage",
    image: null,
    imageNote: "Desmond standing in his backyard, looking up at visible roof damage after a storm, phone camera in hand.",
    story:
      "After last week's severe storm, I discover significant damage to my roof, along with a fallen tree branch that had cracked a fence panel. I photograph everything methodically, documenting the damage from multiple angles before contacting my insurance company to file a claim. Ms. Farrow, the assigned adjuster, visits within a few days. \"Desmond, walk me through what you've found,\" she says, inspecting the damage and taking her own measurements and photographs. A week later, I receive her assessment, and the proposed settlement amount seems considerably lower than what local contractors had quoted me. Given this discrepancy, I realize I'll need to understand exactly why these numbers differ so significantly.",
    questions: [
      { text: "What does Desmond discover after last week's storm?", answer: "Significant roof damage and a cracked fence panel." },
      { text: "What does Desmond do before contacting his insurance company?", answer: "Photographs everything methodically." },
      { text: "What does Desmond notice about the proposed settlement amount?", answer: "That it seems considerably lower than local contractor quotes." },
    ],
    trueFalse: [
      { text: "Desmond discovers significant roof damage after the storm.", answer: true },
      { text: "Desmond photographs the damage methodically before filing a claim.", answer: true },
      { text: "Ms. Farrow never actually visits to inspect the damage.", answer: false },
      { text: "The proposed settlement seems considerably lower than contractor quotes.", answer: true },
      { text: "Desmond realizes he needs to understand this discrepancy.", answer: true },
    ],
    buildSentence: [
      {
        target: "I discover significant damage to my roof, along with a fallen tree branch that had cracked a fence panel.",
        jumbled: ["branch", "with", "significant", "fence", "had", "along", "a", "damage", "fallen", "my", "a", "cracked", "panel.", "I", "tree", "roof,", "to", "discover", "that"],
      },
      {
        target: "I photograph everything methodically, documenting the damage from multiple angles before contacting my insurance company to file a claim.",
        jumbled: ["angles", "to", "from", "I", "a", "the", "documenting", "multiple", "before", "contacting", "my", "file", "everything", "insurance", "damage", "photograph", "methodically,", "company", "claim."],
      },
      {
        target: "Ms. Farrow, the assigned adjuster, visits within a few days.",
        jumbled: ["a", "adjuster,", "assigned", "few", "the", "days.", "Ms.", "visits", "within", "Farrow,"],
      },
      {
        target: "\"Desmond, walk me through what you've found,\" she says, inspecting the damage and taking her own measurements and photographs.",
        jumbled: ["photographs.", "her", "\"Desmond,", "what", "she", "own", "you've", "and", "inspecting", "through", "measurements", "and", "walk", "says,", "taking", "me", "the", "damage", "found,\""],
      },
      {
        target: "A week later, I receive her assessment, and the proposed settlement amount seems considerably lower than what local contractors had quoted me.",
        jumbled: ["contractors", "I", "receive", "seems", "me.", "proposed", "and", "quoted", "A", "the", "assessment,", "later,", "amount", "considerably", "than", "settlement", "her", "local", "had", "lower", "what", "week"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about documenting damage carefully before filing an insurance claim.",
    mySentenceExample: "I documented the damage carefully before filing an insurance claim.",
  },
  {
    number: 2,
    title: "Gathering Independent Estimates",
    image: null,
    imageNote: "Desmond standing with a local contractor, both looking up at the roof, contractor writing notes on a clipboard.",
    story:
      "Before disputing the settlement, I decide to gather two additional independent estimates from local, licensed contractors for comparison. Both estimates come in significantly higher than the insurance company's proposed amount, suggesting the initial assessment may have underestimated the actual repair costs. I also research typical material and labor costs in my area, wanting to understand whether recent price increases had been properly accounted for. This research, moreover, reveals that lumber and roofing material costs had risen considerably since the adjuster's original assessment guidelines were last updated. Armed with this concrete evidence, I feel confident that my concern is genuinely justified, not simply personal frustration. \"You've done your homework, Desmond,\" I tell myself, filing the estimates neatly together.",
    questions: [
      { text: "What does Desmond decide to gather before disputing the settlement?", answer: "Two independent estimates." },
      { text: "How do the independent estimates compare to the insurance amount?", answer: "Significantly higher." },
      { text: "What does Desmond's research reveal about material costs?", answer: "That they've risen since the assessment guidelines were last updated." },
    ],
    trueFalse: [
      { text: "Desmond gathers two additional independent contractor estimates.", answer: true },
      { text: "Both estimates come in significantly higher than the insurance amount.", answer: true },
      { text: "Desmond's research reveals material costs have risen considerably.", answer: true },
      { text: "Desmond decides his concern is simply personal frustration.", answer: false },
      { text: "Desmond feels confident his concern is genuinely justified.", answer: true },
    ],
    buildSentence: [
      {
        target: "I decide to gather two additional independent estimates from local, licensed contractors for comparison.",
        jumbled: ["comparison.", "gather", "contractors", "I", "decide", "estimates", "licensed", "local,", "two", "additional", "to", "for", "independent", "from"],
      },
      {
        target: "Both estimates come in significantly higher than the insurance company's proposed amount, suggesting the initial assessment may have underestimated the actual repair costs.",
        jumbled: ["the", "company's", "the", "suggesting", "have", "significantly", "insurance", "than", "may", "assessment", "actual", "estimates", "in", "the", "higher", "costs.", "amount,", "proposed", "Both", "repair", "initial", "come", "underestimated"],
      },
      {
        target: "I also research typical material and labor costs in my area, wanting to understand whether recent price increases had been properly accounted for.",
        jumbled: ["understand", "and", "to", "material", "also", "whether", "had", "price", "costs", "research", "typical", "my", "wanting", "I", "properly", "area,", "increases", "in", "labor", "been", "for.", "accounted", "recent"],
      },
      {
        target: "This research, moreover, reveals that lumber and roofing material costs had risen considerably since the adjuster's original assessment guidelines were last updated.",
        jumbled: ["since", "last", "and", "reveals", "had", "adjuster's", "guidelines", "moreover,", "assessment", "This", "costs", "lumber", "that", "roofing", "risen", "were", "material", "original", "the", "updated.", "considerably", "research,"],
      },
      {
        target: "Armed with this concrete evidence, I feel confident that my concern is genuinely justified, not simply personal frustration.",
        jumbled: ["frustration.", "confident", "concrete", "I", "concern", "with", "that", "personal", "evidence,", "my", "Armed", "simply", "feel", "not", "is", "genuinely", "this", "justified,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about gathering independent evidence before disputing a decision.",
    mySentenceExample: "I gathered independent evidence before disputing the decision.",
  },
  {
    number: 3,
    title: "Requesting a Review",
    image: null,
    imageNote: "Desmond on the phone with Ms. Farrow, notes and estimate documents spread on the table in front of him.",
    story:
      "I call Ms. Farrow, explaining respectfully that I'd gathered independent estimates significantly higher than the company's proposed settlement amount. She listens carefully, asking me to send documentation so she can formally review the discrepancy on her end. I mention specifically that material costs seem to have increased since the assessment guidelines were last updated, referencing my own research. \"That's possible, Desmond — our guideline updates sometimes lag behind the current market,\" she acknowledges. Given her willingness to genuinely reconsider, I feel this conversation is heading toward a productive, collaborative outcome rather than a confrontation.",
    questions: [
      { text: "What does Desmond explain to Ms. Farrow?", answer: "That his independent estimates are significantly higher." },
      { text: "What does Ms. Farrow ask Desmond to send?", answer: "Documentation." },
      { text: "What does Ms. Farrow acknowledge is possible?", answer: "That guideline updates lag behind current market conditions." },
    ],
    trueFalse: [
      { text: "Desmond explains he'd gathered higher independent estimates.", answer: true },
      { text: "Ms. Farrow asks Desmond to send documentation for review.", answer: true },
      { text: "Ms. Farrow refuses to acknowledge any possibility of error.", answer: false },
      { text: "Ms. Farrow acknowledges guideline updates sometimes lag behind the market.", answer: true },
      { text: "Desmond feels this is heading toward a productive outcome.", answer: true },
    ],
    buildSentence: [
      {
        target: "I call Ms. Farrow, explaining respectfully that I'd gathered independent estimates significantly higher than the company's proposed settlement amount.",
        jumbled: ["gathered", "I", "Farrow,", "proposed", "company's", "estimates", "than", "independent", "settlement", "amount.", "Ms.", "call", "that", "I'd", "explaining", "respectfully", "significantly", "the", "higher"],
      },
      {
        target: "She listens carefully, asking me to send documentation so she can formally review the discrepancy on her end.",
        jumbled: ["so", "carefully,", "formally", "She", "the", "end.", "listens", "documentation", "can", "she", "on", "discrepancy", "send", "her", "to", "asking", "me", "review"],
      },
      {
        target: "I mention specifically that material costs seem to have increased since the assessment guidelines were last updated, referencing my own research.",
        jumbled: ["own", "updated,", "last", "guidelines", "I", "mention", "specifically", "material", "since", "increased", "referencing", "seem", "that", "to", "were", "the", "assessment", "costs", "my", "research.", "have"],
      },
      {
        target: "\"That's possible, Desmond — our guideline updates sometimes lag behind the current market,\" she acknowledges.",
        jumbled: ["possible,", "updates", "the", "she", "current", "\"That's", "Desmond", "—", "market,\"", "behind", "guideline", "sometimes", "our", "acknowledges.", "lag"],
      },
      {
        target: "Given her willingness to genuinely reconsider, I feel this conversation is heading toward a productive, collaborative outcome rather than a confrontation.",
        jumbled: ["Given", "to", "collaborative", "genuinely", "reconsider,", "this", "heading", "than", "her", "a", "willingness", "I", "toward", "a", "productive,", "is", "outcome", "feel", "conversation", "confrontation.", "rather"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about calling to request a review of a decision you believed was incorrect.",
    mySentenceExample: "I called to request a review of a decision I believed was incorrect.",
  },
  {
    number: 4,
    title: "Submitting Documentation",
    image: null,
    imageNote: "Desmond at his laptop, organizing scanned documents and photos into a folder to send to the insurance company.",
    story:
      "I compile everything into a clear, organized document: photographs, both independent estimates, and a brief summary explaining the discrepancy in market pricing. I keep the tone factual and professional throughout, avoiding language that might sound accusatory or overly emotional in nature. Moreover, I highlight specific line items where the difference seems most significant, making it easier for Ms. Farrow to review efficiently. Sending this documentation, I feel I've presented my case as thoroughly and persuasively as reasonably possible. Now, I simply need to wait for the formal review process to actually run its course. \"Patience, Desmond,\" I remind myself, closing the laptop.",
    questions: [
      { text: "What does Desmond compile into a document?", answer: "Photographs, estimates, and a summary of the pricing discrepancy." },
      { text: "What tone does Desmond keep throughout?", answer: "Factual and professional." },
      { text: "What does Desmond highlight in the documentation?", answer: "Specific line items with the most significant differences." },
    ],
    trueFalse: [
      { text: "Desmond compiles photographs, estimates, and a pricing summary.", answer: true },
      { text: "Desmond keeps the tone factual and professional throughout.", answer: true },
      { text: "Desmond uses accusatory, emotional language deliberately.", answer: false },
      { text: "Desmond highlights specific line items with the biggest differences.", answer: true },
      { text: "Desmond feels he's presented his case thoroughly and persuasively.", answer: true },
    ],
    buildSentence: [
      {
        target: "I compile everything into a clear, organized document: photographs, both independent estimates, and a brief summary explaining the discrepancy in market pricing.",
        jumbled: ["explaining", "the", "a", "in", "and", "into", "brief", "compile", "a", "photographs,", "pricing.", "both", "estimates,", "I", "organized", "market", "independent", "everything", "summary", "clear,", "document:", "discrepancy"],
      },
      {
        target: "I keep the tone factual and professional throughout, avoiding language that might sound accusatory or overly emotional in nature.",
        jumbled: ["in", "professional", "factual", "accusatory", "overly", "I", "tone", "might", "avoiding", "and", "keep", "the", "that", "nature.", "emotional", "sound", "language", "throughout,", "or"],
      },
      {
        target: "Moreover, I highlight specific line items where the difference seems most significant, making it easier for Ms. Farrow to review efficiently.",
        jumbled: ["where", "making", "easier", "review", "efficiently.", "significant,", "seems", "highlight", "I", "most", "Farrow", "items", "Ms.", "line", "it", "to", "specific", "the", "difference", "Moreover,", "for"],
      },
      {
        target: "Sending this documentation, I feel I've presented my case as thoroughly and persuasively as reasonably possible.",
        jumbled: ["persuasively", "as", "and", "possible.", "feel", "case", "Sending", "I've", "this", "presented", "I", "thoroughly", "my", "as", "reasonably", "documentation,"],
      },
      {
        target: "Now, I simply need to wait for the formal review process to actually run its course.",
        jumbled: ["review", "course.", "its", "simply", "run", "for", "to", "wait", "to", "I", "the", "actually", "Now,", "process", "need", "formal"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about compiling clear, factual documentation to support a claim.",
    mySentenceExample: "I compiled clear, factual documentation to support my claim.",
  },
  {
    number: 5,
    title: "A Partial Response",
    image: null,
    imageNote: "Desmond reading an email response on his laptop, expression a mix of relief and mild disappointment.",
    story:
      "A week later, Ms. Farrow responds. \"Desmond, the company has agreed to revise the settlement, though not fully to the amount you requested,\" she explains. She mentions that while material costs had indeed increased, some of my estimates included additional work beyond what the original damage strictly required. This distinction, she explains, means the company can only adjust the amount partially rather than matching my highest estimate exactly. I consider this carefully, recognizing that her reasoning, while disappointing, seems genuinely grounded in reasonable, defensible criteria rather than arbitrary refusal. Given this, I decide the revised offer, though not perfect, represents meaningful progress worth acknowledging.",
    questions: [
      { text: "What does Ms. Farrow explain the company has agreed to?", answer: "Revise the settlement, though not fully to the requested amount." },
      { text: "What does Ms. Farrow say about some of Desmond's estimates?", answer: "That they included additional work beyond what was strictly required." },
      { text: "What does Desmond decide about the revised offer?", answer: "That it represents meaningful progress worth acknowledging." },
    ],
    trueFalse: [
      { text: "Ms. Farrow explains the company agreed to revise the settlement.", answer: true },
      { text: "Some estimates included additional work beyond the original damage.", answer: true },
      { text: "The company matches Desmond's highest estimate exactly.", answer: false },
      { text: "Desmond recognizes her reasoning seems genuinely grounded and reasonable.", answer: true },
      { text: "Desmond decides this revised offer represents meaningful progress.", answer: true },
    ],
    buildSentence: [
      {
        target: "A week later, Ms. Farrow responds.",
        jumbled: ["Farrow", "week", "responds.", "Ms.", "later,", "A"],
      },
      {
        target: "\"Desmond, the company has agreed to revise the settlement, though not fully to the amount you requested,\" she explains.",
        jumbled: ["amount", "she", "to", "you", "\"Desmond,", "to", "explains.", "the", "the", "though", "requested,\"", "the", "not", "agreed", "revise", "has", "company", "fully", "settlement,"],
      },
      {
        target: "She mentions that while material costs had indeed increased, some of my estimates included additional work beyond what the original damage strictly required.",
        jumbled: ["of", "my", "original", "had", "additional", "indeed", "what", "beyond", "required.", "increased,", "material", "costs", "estimates", "that", "included", "work", "She", "mentions", "some", "strictly", "while", "damage", "the"],
      },
      {
        target: "This distinction, she explains, means the company can only adjust the amount partially rather than matching my highest estimate exactly.",
        jumbled: ["partially", "matching", "only", "highest", "This", "exactly.", "can", "the", "my", "means", "adjust", "explains,", "than", "distinction,", "she", "estimate", "amount", "company", "the", "rather"],
      },
      {
        target: "I consider this carefully, recognizing that her reasoning, while disappointing, seems genuinely grounded in reasonable, defensible criteria rather than arbitrary refusal.",
        jumbled: ["disappointing,", "consider", "in", "carefully,", "reasonable,", "seems", "defensible", "rather", "I", "criteria", "recognizing", "grounded", "arbitrary", "while", "this", "that", "genuinely", "than", "refusal.", "reasoning,", "her"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about accepting a partial win as meaningful progress in a negotiation.",
    mySentenceExample: "I accepted a partial win as meaningful progress in the negotiation.",
  },
  {
    number: 6,
    title: "Clarifying the Scope",
    image: null,
    imageNote: "Desmond and Ms. Farrow on a video call, both reviewing an itemized document, discussing specific line items.",
    story:
      "Rather than simply accepting the partial revision, I schedule a call to clarify exactly which items were excluded and why specifically. Ms. Farrow walks me through the itemized breakdown, explaining that one contractor's estimate included optional upgrades beyond basic, necessary repair work. I ask whether removing those specific upgrades from my estimate might allow the remaining costs to be fully covered instead. \"If you resubmit an estimate focused strictly on repair, not upgrade, Desmond, this could work,\" she agrees, reviewing this possibility. This clarification, given how specific it becomes, helps me understand exactly what adjustments would actually strengthen my case.",
    questions: [
      { text: "What does Desmond schedule instead of simply accepting the revision?", answer: "A call to clarify which items were excluded." },
      { text: "What does Ms. Farrow explain about one contractor's estimate?", answer: "That it included optional upgrades beyond necessary repair." },
      { text: "What does Desmond ask about removing the upgrades?", answer: "Whether that would allow the remaining costs to be fully covered." },
    ],
    trueFalse: [
      { text: "Desmond schedules a call to clarify the excluded items.", answer: true },
      { text: "One estimate included optional upgrades beyond necessary repair work.", answer: true },
      { text: "Desmond asks whether removing upgrades might allow full coverage.", answer: true },
      { text: "Ms. Farrow refuses to consider this possibility at all.", answer: false },
      { text: "This clarification helps Desmond understand what would strengthen his case.", answer: true },
    ],
    buildSentence: [
      {
        target: "Rather than simply accepting the partial revision, I schedule a call to clarify exactly which items were excluded and why specifically.",
        jumbled: ["a", "the", "excluded", "Rather", "exactly", "items", "specifically.", "partial", "to", "schedule", "than", "revision,", "were", "clarify", "call", "why", "simply", "and", "accepting", "I", "which"],
      },
      {
        target: "Ms. Farrow walks me through the itemized breakdown, explaining that one contractor's estimate included optional upgrades beyond basic, necessary repair work.",
        jumbled: ["through", "repair", "optional", "the", "upgrades", "walks", "me", "Ms.", "breakdown,", "necessary", "itemized", "estimate", "one", "included", "Farrow", "work.", "explaining", "beyond", "basic,", "that", "contractor's"],
      },
      {
        target: "I ask whether removing those specific upgrades from my estimate might allow the remaining costs to be fully covered instead.",
        jumbled: ["instead.", "the", "specific", "fully", "allow", "removing", "costs", "covered", "estimate", "I", "ask", "upgrades", "my", "might", "to", "remaining", "whether", "be", "from", "those"],
      },
      {
        target: "\"If you resubmit an estimate focused strictly on repair, not upgrade, Desmond, this could work,\" she agrees, reviewing this possibility.",
        jumbled: ["resubmit", "could", "on", "this", "work,\"", "an", "you", "reviewing", "strictly", "upgrade,", "\"If", "not", "possibility.", "this", "agrees,", "repair,", "focused", "Desmond,", "she", "estimate"],
      },
      {
        target: "This clarification, given how specific it becomes, helps me understand exactly what adjustments would actually strengthen my case.",
        jumbled: ["it", "clarification,", "This", "becomes,", "me", "strengthen", "would", "given", "understand", "exactly", "actually", "case.", "specific", "adjustments", "what", "my", "helps", "how"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about clarifying specific details before resubmitting a revised request.",
    mySentenceExample: "I clarified specific details before resubmitting a revised request.",
  },
  {
    number: 7,
    title: "Resubmitting the Estimate",
    image: null,
    imageNote: "Desmond calling the contractor to request a revised, repair-only estimate, taking notes during the call.",
    story:
      "I contact the contractor, requesting a revised estimate focused strictly on necessary repairs, excluding the optional upgrades entirely. He provides a new estimate promptly, which, once resubmitted, comes noticeably closer to the insurance company's revised offer amount. I send this updated estimate to Ms. Farrow, along with a brief note explaining the adjustment we'd discussed during our call. \"Got it, Desmond, I'll process this final review within the next few business days,\" she confirms. Given how collaborative this process has felt lately, I feel genuinely optimistic that we're approaching a fair, final resolution.",
    questions: [
      { text: "What does Desmond request from the contractor?", answer: "A revised estimate focused strictly on necessary repairs." },
      { text: "How does the new estimate compare to the insurance offer?", answer: "Noticeably closer." },
      { text: "What does Ms. Farrow say she'll do?", answer: "Process the final review within a few business days." },
    ],
    trueFalse: [
      { text: "Desmond requests a revised, repair-only estimate.", answer: true },
      { text: "The new estimate comes noticeably closer to the insurance offer.", answer: true },
      { text: "Ms. Farrow refuses to acknowledge receiving this update.", answer: false },
      { text: "Ms. Farrow says she'll process this within a few business days.", answer: true },
      { text: "Desmond feels genuinely optimistic about a fair resolution.", answer: true },
    ],
    buildSentence: [
      {
        target: "I contact the contractor, requesting a revised estimate focused strictly on necessary repairs, excluding the optional upgrades entirely.",
        jumbled: ["I", "the", "entirely.", "focused", "the", "requesting", "upgrades", "contact", "estimate", "optional", "strictly", "repairs,", "a", "on", "excluding", "contractor,", "revised", "necessary"],
      },
      {
        target: "He provides a new estimate promptly, which, once resubmitted, comes noticeably closer to the insurance company's revised offer amount.",
        jumbled: ["provides", "promptly,", "revised", "a", "insurance", "to", "comes", "the", "new", "company's", "amount.", "estimate", "offer", "He", "resubmitted,", "once", "closer", "which,", "noticeably"],
      },
      {
        target: "I send this updated estimate to Ms. Farrow, along with a brief note explaining the adjustment we'd discussed during our call.",
        jumbled: ["a", "during", "updated", "adjustment", "discussed", "this", "to", "along", "with", "Farrow,", "I", "note", "Ms.", "our", "send", "brief", "explaining", "call.", "the", "we'd", "estimate"],
      },
      {
        target: "\"Got it, Desmond, I'll process this final review within the next few business days,\" she confirms.",
        jumbled: ["process", "she", "this", "I'll", "Desmond,", "few", "confirms.", "days,\"", "review", "next", "business", "\"Got", "within", "the", "final", "it,"],
      },
      {
        target: "Given how collaborative this process has felt lately, I feel genuinely optimistic that we're approaching a fair, final resolution.",
        jumbled: ["we're", "collaborative", "this", "lately,", "felt", "I", "feel", "a", "process", "Given", "how", "resolution.", "has", "fair,", "genuinely", "that", "optimistic", "approaching", "final"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about resubmitting a request after making a reasonable adjustment.",
    mySentenceExample: "I resubmitted my request after making a reasonable adjustment.",
  },
  {
    number: 8,
    title: "The Final Approval",
    image: null,
    imageNote: "Desmond reading an approval email on his phone, sitting on his porch, a relieved smile on his face.",
    story:
      "A few days later, I receive final approval, with the settlement amount now closely matching the revised, repair-focused estimate. Ms. Farrow's email explains the adjustment clearly, noting that both parties had ultimately reached a figure grounded in accurate, current market conditions. I reply, thanking her for handling this collaboratively rather than simply enforcing the original, outdated assessment without reconsideration. \"I appreciate you approaching this with clear documentation, Desmond, rather than frustration or vague complaints,\" she responds briefly. Reading this final confirmation, I feel genuine relief that patient, evidence-based negotiation had ultimately produced a fair outcome.",
    questions: [
      { text: "What does Desmond receive a few days later?", answer: "Final approval." },
      { text: "What does Ms. Farrow's email explain?", answer: "That both parties reached a figure grounded in accurate market conditions." },
      { text: "What does Ms. Farrow appreciate about how Desmond approached this?", answer: "That he used clear documentation rather than frustration." },
    ],
    trueFalse: [
      { text: "Desmond receives final approval a few days later.", answer: true },
      { text: "The settlement now closely matches the revised estimate.", answer: true },
      { text: "Ms. Farrow appreciates that Desmond approached this with documentation.", answer: true },
      { text: "The company simply enforced the original outdated assessment.", answer: false },
      { text: "Desmond feels genuine relief at this outcome.", answer: true },
    ],
    buildSentence: [
      {
        target: "A few days later, I receive final approval, with the settlement amount now closely matching the revised, repair-focused estimate.",
        jumbled: ["later,", "the", "amount", "approval,", "few", "settlement", "receive", "estimate.", "repair-focused", "matching", "A", "the", "closely", "revised,", "with", "I", "final", "now", "days"],
      },
      {
        target: "Ms. Farrow's email explains the adjustment clearly, noting that both parties had ultimately reached a figure grounded in accurate, current market conditions.",
        jumbled: ["both", "accurate,", "Ms.", "reached", "conditions.", "grounded", "parties", "that", "the", "current", "Farrow's", "adjustment", "explains", "a", "ultimately", "clearly,", "noting", "figure", "market", "in", "email", "had"],
      },
      {
        target: "I reply, thanking her for handling this collaboratively rather than simply enforcing the original, outdated assessment without reconsideration.",
        jumbled: ["her", "I", "than", "this", "original,", "assessment", "outdated", "thanking", "enforcing", "rather", "the", "simply", "collaboratively", "without", "reconsideration.", "for", "handling", "reply,"],
      },
      {
        target: "\"I appreciate you approaching this with clear documentation, Desmond, rather than frustration or vague complaints,\" she responds briefly.",
        jumbled: ["briefly.", "with", "documentation,", "you", "frustration", "vague", "complaints,\"", "than", "approaching", "responds", "Desmond,", "appreciate", "rather", "clear", "this", "she", "or", "\"I"],
      },
      {
        target: "Reading this final confirmation, I feel genuine relief that patient, evidence-based negotiation had ultimately produced a fair outcome.",
        jumbled: ["a", "confirmation,", "feel", "final", "fair", "this", "genuine", "I", "patient,", "outcome.", "that", "negotiation", "had", "evidence-based", "relief", "produced", "ultimately", "Reading"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling relieved when a fair outcome was finally reached.",
    mySentenceExample: "I felt relieved when a fair outcome was finally reached.",
  },
  {
    number: 9,
    title: "Sharing the Experience",
    image: null,
    imageNote: "Desmond talking with a neighbor over the fence, gesturing toward his repaired roof, both chatting casually.",
    story:
      "My neighbor, whose house sustained similar storm damage, mentions she'd simply accepted her insurance company's first offer without question. I share what I'd learned: gathering independent estimates, requesting clarification, and negotiating based on evidence rather than frustration alone. She admits she hadn't realized insurance settlements could actually be negotiated, having assumed the initial offer was simply final. I explain that, in my experience, most adjusters are open to reasonable, well-documented requests, even if they can't guarantee full agreement. \"Thanks for the insight, Desmond — I'll reconsider my own settlement before my repairs begin,\" she says.",
    questions: [
      { text: "What does Desmond's neighbor mention about her own claim?", answer: "That she simply accepted the first offer without question." },
      { text: "What does Desmond share with his neighbor?", answer: "Gathering estimates, requesting clarification, negotiating with evidence." },
      { text: "What had the neighbor assumed about insurance settlements?", answer: "That the initial offer was simply final." },
    ],
    trueFalse: [
      { text: "The neighbor mentions she accepted her first offer without question.", answer: true },
      { text: "Desmond shares what he'd learned about negotiating with evidence.", answer: true },
      { text: "The neighbor had assumed the initial offer was simply final.", answer: true },
      { text: "Desmond says most adjusters refuse reasonable, documented requests.", answer: false },
      { text: "The neighbor says she'll reconsider her own settlement.", answer: true },
    ],
    buildSentence: [
      {
        target: "My neighbor, whose house sustained similar storm damage, mentions she'd simply accepted her insurance company's first offer without question.",
        jumbled: ["accepted", "she'd", "neighbor,", "My", "whose", "her", "without", "damage,", "company's", "house", "question.", "storm", "first", "mentions", "offer", "simply", "insurance", "similar", "sustained"],
      },
      {
        target: "I share what I'd learned: gathering independent estimates, requesting clarification, and negotiating based on evidence rather than frustration alone.",
        jumbled: ["clarification,", "rather", "I'd", "requesting", "independent", "than", "what", "evidence", "estimates,", "gathering", "and", "based", "learned:", "I", "frustration", "negotiating", "share", "alone.", "on"],
      },
      {
        target: "She admits she hadn't realized insurance settlements could actually be negotiated, having assumed the initial offer was simply final.",
        jumbled: ["insurance", "final.", "simply", "realized", "assumed", "initial", "She", "was", "settlements", "having", "she", "the", "could", "offer", "hadn't", "negotiated,", "admits", "actually", "be"],
      },
      {
        target: "I explain that, in my experience, most adjusters are open to reasonable, well-documented requests, even if they can't guarantee full agreement.",
        jumbled: ["adjusters", "explain", "full", "well-documented", "in", "reasonable,", "they", "to", "experience,", "if", "most", "guarantee", "requests,", "are", "can't", "my", "even", "I", "that,", "agreement.", "open"],
      },
      {
        target: "\"Thanks for the insight, Desmond — I'll reconsider my own settlement before my repairs begin,\" she says.",
        jumbled: ["—", "settlement", "Desmond", "I'll", "insight,", "for", "\"Thanks", "the", "own", "my", "begin,\"", "my", "before", "reconsider", "says.", "she", "repairs"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about sharing something you learned to help someone else negotiate confidently.",
    mySentenceExample: "I shared what I learned to help someone else negotiate confidently.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Desmond standing in his driveway, looking up at the fully repaired roof, satisfied expression.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I simply accepted the original settlement without question. If I had assumed the first offer was final, I likely would have paid a significant amount out of pocket for necessary repairs. Instead, gathering evidence, requesting clarification, and negotiating patiently allowed me to reach an outcome grounded in genuine accuracy. I've learned that insurance settlements, like many formal processes, often have more room for negotiation than they initially appear to allow. In the end, this experience taught me that persistence, paired with solid evidence, tends to produce far better outcomes than passive acceptance. \"You handled that well, Desmond,\" I tell myself, looking up at the finished roof.",
    questions: [
      { text: "What does Desmond realize looking back on the process?", answer: "How differently things might have gone had he accepted the original settlement." },
      { text: "What might have happened if he had accepted the original settlement?", answer: "He'd have paid significantly out of pocket." },
      { text: "What has Desmond learned about insurance settlements?", answer: "That they often have more room for negotiation than they appear." },
    ],
    trueFalse: [
      { text: "Desmond realizes things might have gone differently without negotiating.", answer: true },
      { text: "Accepting the original settlement might have meant paying out of pocket.", answer: true },
      { text: "Desmond believes insurance settlements have no room for negotiation.", answer: false },
      { text: "Desmond learns settlements often have more room for negotiation than expected.", answer: true },
      { text: "Desmond learns persistence paired with evidence produces better outcomes.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire process, I realize how differently things might have unfolded had I simply accepted the original settlement without question.",
        jumbled: ["entire", "simply", "had", "the", "accepted", "differently", "on", "how", "process,", "might", "realize", "Looking", "settlement", "without", "unfolded", "back", "I", "question.", "I", "have", "the", "original", "things"],
      },
      {
        target: "I likely would have paid a significant amount out of pocket for necessary repairs.",
        jumbled: ["necessary", "would", "pocket", "significant", "likely", "out", "have", "of", "amount", "repairs.", "paid", "a", "for", "I"],
      },
      {
        target: "Instead, gathering evidence, requesting clarification, and negotiating patiently allowed me to reach an outcome grounded in genuine accuracy.",
        jumbled: ["clarification,", "negotiating", "allowed", "requesting", "to", "an", "outcome", "reach", "grounded", "accuracy.", "in", "Instead,", "and", "patiently", "genuine", "evidence,", "me", "gathering"],
      },
      {
        target: "I've learned that insurance settlements, like many formal processes, often have more room for negotiation than they initially appear to allow.",
        jumbled: ["they", "to", "room", "appear", "processes,", "I've", "negotiation", "many", "often", "have", "insurance", "allow.", "more", "for", "that", "initially", "settlements,", "learned", "like", "than", "formal"],
      },
      {
        target: "In the end, this experience taught me that persistence, paired with solid evidence, tends to produce far better outcomes than passive acceptance.",
        jumbled: ["acceptance.", "to", "with", "solid", "produce", "than", "taught", "evidence,", "paired", "persistence,", "this", "tends", "me", "end,", "experience", "that", "outcomes", "passive", "far", "In", "better", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating an insurance claim patiently.",
    mySentenceExample: "I learned that patient, evidence-based negotiation produces fairer outcomes.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
