// B2 Adults digital storybook, Book 79: "Negotiating a Rent Increase"
// Static content -- no Supabase. Seventh book in the B2 Adults batch
// (73-80). Renter-landlord negotiation, distinct from Book 39
// "Moving into My First Apartment" (A2, settling-in) and Book 76's
// HOA dispute (a rule/exception negotiation with a board, not a
// direct landlord price negotiation). Adults-track shape: 3
// questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image left null per chapter.
import coverImg from "./assets/storybook79/cover.jpg";

export const STORYBOOK_TITLE = "Negotiating a Rent Increase";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Bianca sitting at her kitchen table reading a lease renewal letter, laptop open beside her showing apartment listings.";

export const CHARACTERS = [
  { name: "Bianca", role: "The narrator, a long-term tenant facing a proposed rent increase", look: "Practical, values stability, has lived in the same apartment for four years." },
  { name: "Mr. Halloran", role: "Bianca's landlord", look: "Business-minded but not unreasonable, manages several rental properties." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Renewal Letter",
    image: null,
    imageNote: "Bianca reading a lease renewal letter at her kitchen table, a concerned expression on her face.",
    story:
      "My lease renewal letter arrives, proposing a rent increase considerably higher than what I'd anticipated based on previous years' adjustments. Having lived here for four years, I've always paid on time and maintained the apartment carefully, which makes this increase feel somewhat unjustified. I check current listings for comparable apartments nearby, discovering that while rents have indeed risen, this particular increase still seems disproportionate. Moving would mean significant costs, from deposits to moving expenses, which I'd genuinely prefer to avoid if reasonably possible. Given this, I decide negotiating directly with Mr. Halloran seems like the more sensible first step. \"You can ask, Bianca,\" I tell myself, setting the letter aside for now.",
    questions: [
      { text: "What does Bianca's lease renewal letter propose?", answer: "A rent increase higher than expected." },
      { text: "How long has Bianca lived in the apartment?", answer: "Four years." },
      { text: "What does Bianca discover checking current listings?", answer: "That the increase seems disproportionate compared to the market." },
    ],
    trueFalse: [
      { text: "The renewal letter proposes a considerably higher rent increase.", answer: true },
      { text: "Bianca has lived in the apartment for four years.", answer: true },
      { text: "Bianca discovers this increase still seems disproportionate.", answer: true },
      { text: "Bianca decides to move immediately without negotiating.", answer: false },
      { text: "Bianca decides negotiating directly seems like the sensible first step.", answer: true },
    ],
    buildSentence: [
      {
        target: "My lease renewal letter arrives, proposing a rent increase considerably higher than what I'd anticipated based on previous years' adjustments.",
        jumbled: ["higher", "rent", "based", "than", "on", "previous", "My", "proposing", "arrives,", "adjustments.", "lease", "anticipated", "renewal", "considerably", "what", "a", "I'd", "years'", "letter", "increase"],
      },
      {
        target: "Having lived here for four years, I've always paid on time and maintained the apartment carefully, which makes this increase feel somewhat unjustified.",
        jumbled: ["makes", "this", "maintained", "feel", "which", "Having", "and", "apartment", "for", "carefully,", "unjustified.", "time", "here", "on", "years,", "the", "always", "lived", "I've", "somewhat", "four", "paid", "increase"],
      },
      {
        target: "I check current listings for comparable apartments nearby, discovering that while rents have indeed risen, this particular increase still seems disproportionate.",
        jumbled: ["increase", "risen,", "that", "indeed", "comparable", "for", "disproportionate.", "rents", "discovering", "I", "particular", "this", "listings", "have", "while", "apartments", "still", "nearby,", "current", "seems", "check"],
      },
      {
        target: "Moving would mean significant costs, from deposits to moving expenses, which I'd genuinely prefer to avoid if reasonably possible.",
        jumbled: ["would", "from", "reasonably", "expenses,", "prefer", "genuinely", "which", "costs,", "to", "I'd", "possible.", "avoid", "to", "deposits", "mean", "significant", "if", "Moving", "moving"],
      },
      {
        target: "Given this, I decide negotiating directly with Mr. Halloran seems like the more sensible first step.",
        jumbled: ["directly", "Given", "first", "step.", "the", "more", "Halloran", "I", "this,", "sensible", "decide", "Mr.", "negotiating", "seems", "with", "like"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about deciding to negotiate rather than simply accepting a proposed increase.",
    mySentenceExample: "I decided to negotiate rather than simply accepting the increase.",
  },
  {
    number: 2,
    title: "Researching the Market",
    image: null,
    imageNote: "Bianca at her laptop comparing rental listings, spreadsheet with prices for similar apartments open.",
    story:
      "I spend an evening researching comparable apartments, noting their prices, sizes, and amenities to build a reasonably accurate picture. I discover that similar units in my building's neighborhood rent for noticeably less than what Mr. Halloran is now proposing. I also research typical rent increase percentages in the area, finding that mine exceeds the average by a meaningful margin. This research, moreover, gives me concrete data to reference rather than simply expressing vague dissatisfaction about the number. Feeling genuinely prepared, I draft a few key points I'd like to raise during our upcoming conversation. \"You've got the numbers, Bianca,\" I remind myself, saving the spreadsheet.",
    questions: [
      { text: "What does Bianca spend an evening doing?", answer: "Researching comparable apartments." },
      { text: "What does Bianca discover about similar units nearby?", answer: "That they rent for noticeably less." },
      { text: "What does Bianca discover about typical rent increase percentages?", answer: "That hers exceeds the average by a meaningful margin." },
    ],
    trueFalse: [
      { text: "Bianca spends an evening researching comparable apartments.", answer: true },
      { text: "Similar units nearby rent for noticeably less.", answer: true },
      { text: "Her proposed increase exceeds the area average.", answer: true },
      { text: "Bianca decides to express only vague dissatisfaction.", answer: false },
      { text: "Bianca drafts key points for the upcoming conversation.", answer: true },
    ],
    buildSentence: [
      {
        target: "I spend an evening researching comparable apartments, noting their prices, sizes, and amenities to build a reasonably accurate picture.",
        jumbled: ["spend", "I", "evening", "their", "a", "noting", "and", "apartments,", "sizes,", "to", "build", "reasonably", "an", "picture.", "prices,", "accurate", "comparable", "researching", "amenities"],
      },
      {
        target: "I discover that similar units in my building's neighborhood rent for noticeably less than what Mr. Halloran is now proposing.",
        jumbled: ["my", "that", "proposing.", "units", "now", "I", "similar", "is", "less", "building's", "neighborhood", "noticeably", "for", "discover", "what", "Mr.", "than", "Halloran", "in", "rent"],
      },
      {
        target: "I also research typical rent increase percentages in the area, finding that mine exceeds the average by a meaningful margin.",
        jumbled: ["mine", "a", "area,", "research", "I", "the", "that", "in", "increase", "also", "finding", "meaningful", "by", "exceeds", "typical", "average", "margin.", "the", "rent", "percentages"],
      },
      {
        target: "This research, moreover, gives me concrete data to reference rather than simply expressing vague dissatisfaction about the number.",
        jumbled: ["than", "about", "simply", "concrete", "expressing", "moreover,", "dissatisfaction", "to", "me", "vague", "research,", "rather", "reference", "the", "data", "This", "gives", "number."],
      },
      {
        target: "Feeling genuinely prepared, I draft a few key points I'd like to raise during our upcoming conversation.",
        jumbled: ["points", "conversation.", "during", "key", "raise", "prepared,", "Feeling", "I", "I'd", "like", "a", "draft", "few", "our", "genuinely", "upcoming", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about researching the market before negotiating a price with someone.",
    mySentenceExample: "I researched the market before negotiating the price with him.",
  },
  {
    number: 3,
    title: "Requesting a Conversation",
    image: null,
    imageNote: "Bianca sitting across from Mr. Halloran at a small office, both with papers spread between them.",
    story:
      "I email Mr. Halloran, requesting a brief conversation about the proposed renewal terms before formally signing anything. \"Of course, Bianca, come by my office,\" he agrees, and we meet there, where I open by acknowledging that I genuinely enjoy living in the building. I mention my four years of reliable, on-time payments, then reference specific comparable listings I'd found nearby. He listens without interrupting, occasionally jotting notes, which I interpret as at least a willingness to hear me out fully. When I finish, he acknowledges that long-term, reliable tenants do genuinely matter to how he manages his properties overall.",
    questions: [
      { text: "What does Bianca email Mr. Halloran to request?", answer: "A brief conversation about the renewal terms." },
      { text: "What does Bianca mention when she opens the conversation?", answer: "That she genuinely enjoys living in the building." },
      { text: "What does Mr. Halloran acknowledge?", answer: "That long-term, reliable tenants matter to him." },
    ],
    trueFalse: [
      { text: "Bianca emails requesting a conversation about the renewal terms.", answer: true },
      { text: "Bianca mentions her four years of reliable, on-time payments.", answer: true },
      { text: "Mr. Halloran interrupts her constantly during the conversation.", answer: false },
      { text: "Mr. Halloran listens without interrupting, taking notes.", answer: true },
      { text: "Mr. Halloran acknowledges that reliable tenants genuinely matter.", answer: true },
    ],
    buildSentence: [
      {
        target: "I email Mr. Halloran, requesting a brief conversation about the proposed renewal terms before formally signing anything.",
        jumbled: ["the", "conversation", "Mr.", "terms", "about", "renewal", "Halloran,", "a", "formally", "proposed", "before", "signing", "anything.", "I", "requesting", "email", "brief"],
      },
      {
        target: "\"Of course, Bianca, come by my office,\" he agrees, and we meet there, where I open by acknowledging that I genuinely enjoy living in the building.",
        jumbled: ["that", "in", "he", "I", "\"Of", "come", "I", "living", "office,\"", "the", "where", "acknowledging", "enjoy", "by", "and", "my", "building.", "agrees,", "Bianca,", "by", "meet", "there,", "we", "open", "course,", "genuinely"],
      },
      {
        target: "I mention my four years of reliable, on-time payments, then reference specific comparable listings I'd found nearby.",
        jumbled: ["then", "my", "reliable,", "specific", "four", "I'd", "on-time", "listings", "mention", "found", "comparable", "I", "payments,", "reference", "nearby.", "years", "of"],
      },
      {
        target: "He listens without interrupting, occasionally jotting notes, which I interpret as at least a willingness to hear me out fully.",
        jumbled: ["jotting", "at", "hear", "listens", "as", "least", "interpret", "He", "without", "to", "out", "fully.", "which", "interrupting,", "me", "I", "occasionally", "notes,", "willingness", "a"],
      },
      {
        target: "He acknowledges that long-term, reliable tenants do genuinely matter to how he manages his properties overall.",
        jumbled: ["overall.", "manages", "he", "long-term,", "that", "to", "He", "matter", "how", "do", "tenants", "properties", "genuinely", "his", "reliable", "acknowledges"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about opening a negotiation by acknowledging something positive first.",
    mySentenceExample: "I opened the negotiation by acknowledging something positive first.",
  },
  {
    number: 4,
    title: "Presenting the Data",
    image: null,
    imageNote: "Bianca showing a printed comparison sheet to Mr. Halloran, both looking at the numbers together.",
    story:
      "I show Mr. Halloran my comparison sheet, pointing out specific nearby listings with similar square footage and amenities. \"Bianca, rising property taxes and maintenance costs partly explain this year's increase,\" he mentions, examining it carefully. I acknowledge these are legitimate business pressures, though I gently note that the specific percentage still seems higher than comparable properties nearby. Rather than dismissing my point, he considers this, admitting perhaps the initial number hadn't fully accounted for tenant retention value. This exchange, given how respectfully it's unfolding, leaves me cautiously hopeful about reaching a genuinely fair compromise.",
    questions: [
      { text: "What does Bianca show Mr. Halloran?", answer: "Her comparison sheet of nearby listings." },
      { text: "What does Mr. Halloran mention explains part of the increase?", answer: "Rising property taxes and maintenance costs." },
      { text: "What does Mr. Halloran admit considering Bianca's point?", answer: "That the initial number hadn't accounted for tenant retention value." },
    ],
    trueFalse: [
      { text: "Bianca shows Mr. Halloran her comparison sheet.", answer: true },
      { text: "Mr. Halloran mentions rising taxes and maintenance costs.", answer: true },
      { text: "Mr. Halloran dismisses Bianca's point immediately.", answer: false },
      { text: "Mr. Halloran admits the number hadn't accounted for tenant retention value.", answer: true },
      { text: "Bianca feels cautiously hopeful about a fair compromise.", answer: true },
    ],
    buildSentence: [
      {
        target: "I show Mr. Halloran my comparison sheet, pointing out specific nearby listings with similar square footage and amenities.",
        jumbled: ["footage", "sheet,", "with", "similar", "Mr.", "show", "Halloran", "specific", "comparison", "amenities.", "square", "and", "nearby", "listings", "out", "pointing", "my", "I"],
      },
      {
        target: "\"Bianca, rising property taxes and maintenance costs partly explain this year's increase,\" he mentions, examining it carefully.",
        jumbled: ["this", "and", "property", "explain", "he", "carefully.", "\"Bianca,", "increase,\"", "year's", "mentions,", "rising", "it", "costs", "taxes", "partly", "maintenance", "examining"],
      },
      {
        target: "I acknowledge these are legitimate business pressures, though I gently note that the specific percentage still seems higher than comparable properties nearby.",
        jumbled: ["specific", "legitimate", "I", "acknowledge", "comparable", "still", "though", "are", "nearby.", "gently", "seems", "properties", "percentage", "these", "than", "business", "pressures,", "that", "the", "higher", "note", "I"],
      },
      {
        target: "Rather than dismissing my point, he considers this, admitting perhaps the initial number hadn't fully accounted for tenant retention value.",
        jumbled: ["my", "perhaps", "for", "he", "number", "tenant", "accounted", "value.", "the", "this,", "initial", "considers", "retention", "dismissing", "than", "admitting", "Rather", "hadn't", "fully", "point,"],
      },
      {
        target: "This exchange, given how respectfully it's unfolding, leaves me cautiously hopeful about reaching a genuinely fair compromise.",
        jumbled: ["genuinely", "cautiously", "unfolding,", "reaching", "leaves", "a", "me", "how", "compromise.", "about", "given", "This", "respectfully", "exchange,", "hopeful", "it's", "fair"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about acknowledging someone's legitimate concerns while still making your own point.",
    mySentenceExample: "I acknowledged his legitimate concerns while still making my own point.",
  },
  {
    number: 5,
    title: "A Revised Offer",
    image: null,
    imageNote: "Mr. Halloran writing a revised number on paper, sliding it across the desk to Bianca.",
    story:
      "Mr. Halloran proposes a revised increase, roughly half of what was originally suggested, given my history as a reliable tenant. He explains this reflects a genuine attempt to balance his rising costs with retaining a tenant he genuinely doesn't want to lose. I consider this carefully, recognizing it's still an increase, though considerably more reasonable than the original proposal. I ask whether a two-year lease, rather than one, might allow for an even more favorable rate given the added stability. \"That's fair, Bianca — locking in a longer commitment could justify a slightly better rate for both of us,\" he agrees, considering this.",
    questions: [
      { text: "What does Mr. Halloran propose?", answer: "A revised increase, roughly half the original." },
      { text: "What does Mr. Halloran say this reflects?", answer: "An attempt to balance his costs with retaining a valued tenant." },
      { text: "What does Bianca ask about a two-year lease?", answer: "Whether it might allow for an even more favorable rate." },
    ],
    trueFalse: [
      { text: "Mr. Halloran proposes roughly half the originally suggested increase.", answer: true },
      { text: "Mr. Halloran says this reflects balancing costs with retaining a good tenant.", answer: true },
      { text: "Bianca asks whether a two-year lease might allow a better rate.", answer: true },
      { text: "Mr. Halloran refuses to consider a longer lease at all.", answer: false },
      { text: "Mr. Halloran agrees a longer commitment could justify a better rate.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Halloran proposes a revised increase, roughly half of what was originally suggested, given my history as a reliable tenant.",
        jumbled: ["reliable", "a", "a", "suggested,", "roughly", "increase,", "Halloran", "history", "originally", "revised", "tenant.", "what", "half", "my", "proposes", "given", "was", "of", "Mr.", "as"],
      },
      {
        target: "He explains this reflects a genuine attempt to balance his rising costs with retaining a tenant he genuinely doesn't want to lose.",
        jumbled: ["balance", "want", "lose.", "costs", "a", "retaining", "to", "his", "this", "genuine", "tenant", "genuinely", "with", "attempt", "reflects", "to", "rising", "doesn't", "explains", "a", "he", "He"],
      },
      {
        target: "I consider this carefully, recognizing it's still an increase, though considerably more reasonable than the original proposal.",
        jumbled: ["than", "still", "though", "consider", "reasonable", "the", "carefully,", "more", "original", "an", "recognizing", "I", "this", "increase,", "it's", "proposal.", "considerably"],
      },
      {
        target: "I ask whether a two-year lease, rather than one, might allow for an even more favorable rate given the added stability.",
        jumbled: ["the", "even", "rather", "a", "stability.", "for", "rate", "allow", "ask", "lease,", "than", "added", "one,", "given", "favorable", "whether", "more", "might", "I", "two-year", "an"],
      },
      {
        target: "\"That's fair, Bianca — locking in a longer commitment could justify a slightly better rate for both of us,\" he agrees, considering this.",
        jumbled: ["justify", "—", "rate", "fair,", "commitment", "of", "locking", "longer", "this.", "better", "he", "a", "considering", "Bianca", "\"That's", "agrees,", "a", "us,\"", "could", "slightly", "both", "for", "in"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about proposing a longer commitment in exchange for a better rate.",
    mySentenceExample: "I proposed a longer commitment in exchange for a better rate.",
  },
  {
    number: 6,
    title: "Finalizing the Lease",
    image: null,
    imageNote: "Bianca and Mr. Halloran reviewing a printed two-year lease agreement together, both signing.",
    story:
      "We finalize a two-year lease with a modest, reasonable increase, considerably lower than what was originally proposed weeks earlier. I read through the document carefully before signing, ensuring every term matches exactly what we'd verbally discussed and agreed upon. \"I appreciate you approaching this professionally, Bianca, rather than simply threatening to leave,\" Mr. Halloran mentions, signing as well. I thank him for his flexibility, genuinely relieved that this negotiation had produced an outcome I could comfortably accept long-term. Leaving his office, I feel proud that preparation and respectful persistence had actually paid off meaningfully.",
    questions: [
      { text: "What do Bianca and Mr. Halloran finalize?", answer: "A two-year lease with a modest increase." },
      { text: "What does Bianca do before signing?", answer: "Reads through the document carefully." },
      { text: "What does Mr. Halloran say he appreciated?", answer: "That she approached this professionally rather than threatening to leave." },
    ],
    trueFalse: [
      { text: "They finalize a two-year lease with a modest increase.", answer: true },
      { text: "Bianca reads through the document carefully before signing.", answer: true },
      { text: "Mr. Halloran appreciated that she approached this professionally.", answer: true },
      { text: "Bianca threatened to leave outright during the negotiation.", answer: false },
      { text: "Bianca feels proud that preparation and persistence paid off.", answer: true },
    ],
    buildSentence: [
      {
        target: "We finalize a two-year lease with a modest, reasonable increase, considerably lower than what was originally proposed weeks earlier.",
        jumbled: ["modest,", "earlier.", "finalize", "lower", "considerably", "two-year", "a", "originally", "what", "proposed", "weeks", "lease", "reasonable", "than", "was", "with", "We", "a", "increase,"],
      },
      {
        target: "I read through the document carefully before signing, ensuring every term matches exactly what we'd verbally discussed and agreed upon.",
        jumbled: ["matches", "every", "exactly", "what", "we'd", "ensuring", "term", "I", "carefully", "the", "upon.", "signing,", "through", "agreed", "document", "read", "verbally", "and", "discussed", "before"],
      },
      {
        target: "\"I appreciate you approaching this professionally, Bianca, rather than simply threatening to leave,\" Mr. Halloran mentions, signing as well.",
        jumbled: ["professionally,", "this", "as", "well.", "\"I", "mentions,", "Mr.", "approaching", "appreciate", "than", "you", "Bianca,", "signing", "Halloran", "rather", "to", "threatening", "simply", "leave,\""],
      },
      {
        target: "I thank him for his flexibility, genuinely relieved that this negotiation had produced an outcome I could comfortably accept long-term.",
        jumbled: ["him", "genuinely", "had", "comfortably", "relieved", "thank", "outcome", "I", "that", "an", "produced", "could", "for", "this", "negotiation", "flexibility,", "accept", "long-term.", "I", "his"],
      },
      {
        target: "Leaving his office, I feel proud that preparation and respectful persistence had actually paid off meaningfully.",
        jumbled: ["proud", "I", "respectful", "had", "preparation", "his", "office,", "off", "and", "actually", "that", "persistence", "feel", "Leaving", "meaningfully.", "paid"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finalizing an agreement that you could comfortably accept long-term.",
    mySentenceExample: "I finalized an agreement that I could comfortably accept long-term.",
  },
  {
    number: 7,
    title: "Telling a Friend",
    image: null,
    imageNote: "Bianca chatting with a friend over coffee, both discussing the negotiation experience casually.",
    story:
      "Over coffee, I mention the negotiation to a friend who's currently facing a similar rent increase at her own apartment building. \"Wait, you actually negotiated it, Bianca?\" she asks, admitting she'd assumed rent increases were simply non-negotiable. I explain that researching comparable listings gave me genuine leverage, rather than relying solely on vague appeals to fairness. Moreover, I mention that proposing a longer lease term ultimately helped, since it offered my landlord something valuable in return. She thanks me for the insight, saying she'll research comparable prices before her own renewal conversation happens.",
    questions: [
      { text: "What does Bianca mention over coffee?", answer: "The negotiation, to a friend facing a similar increase." },
      { text: "What had the friend assumed about rent increases?", answer: "That they were simply non-negotiable." },
      { text: "What does Bianca explain gave her genuine leverage?", answer: "Researching comparable listings." },
    ],
    trueFalse: [
      { text: "Bianca mentions the negotiation to a friend over coffee.", answer: true },
      { text: "The friend had assumed rent increases were simply non-negotiable.", answer: true },
      { text: "Bianca explains researching comparable listings gave her leverage.", answer: true },
      { text: "Bianca says proposing a longer lease term didn't help at all.", answer: false },
      { text: "The friend says she'll research comparable prices too.", answer: true },
    ],
    buildSentence: [
      {
        target: "Over coffee, I mention the negotiation to a friend who's currently facing a similar rent increase at her own apartment building.",
        jumbled: ["Over", "a", "similar", "negotiation", "I", "at", "the", "a", "friend", "increase", "to", "building.", "who's", "own", "rent", "her", "apartment", "mention", "currently", "coffee,", "facing"],
      },
      {
        target: "\"Wait, you actually negotiated it, Bianca?\" she asks, admitting she'd assumed rent increases were simply non-negotiable.",
        jumbled: ["increases", "actually", "\"Wait,", "negotiated", "you", "it,", "rent", "non-negotiable.", "admitting", "she'd", "Bianca?\"", "assumed", "simply", "she", "asks,", "were"],
      },
      {
        target: "I explain that researching comparable listings gave me genuine leverage, rather than relying solely on vague appeals to fairness.",
        jumbled: ["to", "gave", "comparable", "appeals", "than", "rather", "genuine", "fairness.", "me", "leverage,", "solely", "relying", "vague", "listings", "on", "explain", "I", "researching", "that"],
      },
      {
        target: "Moreover, I mention that proposing a longer lease term ultimately helped, since it offered my landlord something valuable in return.",
        jumbled: ["in", "a", "offered", "return.", "longer", "landlord", "valuable", "something", "it", "helped,", "that", "ultimately", "mention", "since", "Moreover,", "lease", "proposing", "I", "term", "my"],
      },
      {
        target: "She thanks me for the insight, saying she'll research comparable prices before her own renewal conversation happens.",
        jumbled: ["own", "saying", "insight,", "comparable", "conversation", "for", "happens.", "prices", "before", "She", "me", "the", "research", "her", "thanks", "renewal", "she'll"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about sharing negotiation advice with a friend facing a similar situation.",
    mySentenceExample: "I shared negotiation advice with a friend facing a similar situation.",
  },
  {
    number: 8,
    title: "Settling In Again",
    image: null,
    imageNote: "Bianca sitting comfortably in her apartment, unpacking a small box of new decor items, relaxed expression.",
    story:
      "With the new lease signed, I feel a renewed sense of stability, knowing exactly what my housing costs will be for two years. I use some of the money I'd saved compared to the original proposal to make a few small improvements to my apartment. Mr. Halloran, coincidentally, approves my request to repaint one wall. \"Of course, Bianca — I appreciate tenants who genuinely care for their space,\" he mentions. This small gesture, though minor, reinforces my sense that this negotiation had actually improved our overall landlord-tenant relationship. Settling back into my routine, I feel genuinely grateful I'd chosen to negotiate rather than simply accepting the first proposal.",
    questions: [
      { text: "What does Bianca feel with the new lease signed?", answer: "A renewed sense of stability." },
      { text: "What does Bianca use some of the saved money for?", answer: "Small improvements to her apartment." },
      { text: "What does Mr. Halloran approve?", answer: "Her request to repaint one wall." },
    ],
    trueFalse: [
      { text: "Bianca feels a renewed sense of stability with the new lease.", answer: true },
      { text: "Bianca uses some saved money for small apartment improvements.", answer: true },
      { text: "Mr. Halloran approves her request to repaint one wall.", answer: true },
      { text: "Mr. Halloran refuses to interact with Bianca after signing.", answer: false },
      { text: "Bianca feels grateful she chose to negotiate.", answer: true },
    ],
    buildSentence: [
      {
        target: "With the new lease signed, I feel a renewed sense of stability, knowing exactly what my housing costs will be for two years.",
        jumbled: ["I", "renewed", "stability,", "be", "lease", "With", "signed,", "knowing", "costs", "sense", "exactly", "will", "the", "a", "two", "housing", "of", "new", "for", "feel", "what", "my", "years."],
      },
      {
        target: "I use some of the money I'd saved compared to the original proposal to make a few small improvements to my apartment.",
        jumbled: ["the", "of", "a", "my", "I'd", "money", "some", "apartment.", "to", "original", "to", "saved", "use", "I", "proposal", "the", "improvements", "to", "make", "small", "compared", "few"],
      },
      {
        target: "Mr. Halloran, coincidentally, approves my request to repaint one wall.",
        jumbled: ["wall.", "one", "my", "approves", "to", "Halloran,", "request", "Mr.", "coincidentally,", "repaint"],
      },
      {
        target: "\"Of course, Bianca — I appreciate tenants who genuinely care for their space,\" he mentions.",
        jumbled: ["their", "for", "he", "mentions.", "I", "tenants", "—", "\"Of", "Bianca", "who", "care", "appreciate", "course,", "genuinely", "space,\""],
      },
      {
        target: "Settling back into my routine, I feel genuinely grateful I'd chosen to negotiate rather than simply accepting the first proposal.",
        jumbled: ["accepting", "I", "first", "feel", "simply", "Settling", "back", "the", "genuinely", "chosen", "rather", "to", "grateful", "proposal.", "into", "negotiate", "my", "routine,", "I'd", "than"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about settling into a renewed sense of stability after a successful negotiation.",
    mySentenceExample: "I settled into a renewed sense of stability after the negotiation.",
  },
  {
    number: 9,
    title: "A Year Later",
    image: null,
    imageNote: "Bianca checking her mailbox a year later, opening routine correspondence, no tension visible this time.",
    story:
      "A year into the new lease, I receive a routine notice from Mr. Halloran, unrelated to rent, simply updating tenants about building maintenance schedules. I realize how differently I now feel opening mail from him, compared to the anxiety I'd felt receiving that original renewal letter. Our interactions since the negotiation have remained professional and pleasant, without any lingering tension from that initial disagreement. I mention this to a neighbor, who says she's noticed Mr. Halloran seems generally more open to reasonable tenant requests lately too. \"Maybe that conversation changed something, Bianca,\" I consider, realizing one respectful negotiation had quietly shifted how he approaches these relationships generally.",
    questions: [
      { text: "What does Bianca receive a year into the new lease?", answer: "A routine maintenance notice." },
      { text: "How does Bianca feel opening mail from Mr. Halloran now, compared to before?", answer: "Much less anxious." },
      { text: "What does a neighbor mention about Mr. Halloran?", answer: "That he seems more open to reasonable tenant requests lately." },
    ],
    trueFalse: [
      { text: "Bianca receives a routine maintenance notice a year later.", answer: true },
      { text: "Bianca feels differently opening mail now compared to before.", answer: true },
      { text: "Their interactions have remained professional and pleasant.", answer: true },
      { text: "A neighbor says Mr. Halloran has become less flexible overall.", answer: false },
      { text: "Bianca considers that one negotiation may have shifted his approach.", answer: true },
    ],
    buildSentence: [
      {
        target: "A year into the new lease, I receive a routine notice from Mr. Halloran, unrelated to rent, simply updating tenants about building maintenance schedules.",
        jumbled: ["new", "updating", "simply", "the", "schedules.", "building", "a", "unrelated", "Mr.", "from", "rent,", "maintenance", "Halloran,", "A", "lease,", "routine", "tenants", "year", "receive", "notice", "to", "about", "into", "I"],
      },
      {
        target: "I realize how differently I now feel opening mail from him, compared to the anxiety I'd felt receiving that original renewal letter.",
        jumbled: ["anxiety", "renewal", "letter.", "to", "the", "now", "feel", "I", "opening", "felt", "original", "realize", "I'd", "compared", "how", "differently", "from", "him,", "receiving", "mail", "I", "that"],
      },
      {
        target: "Our interactions since the negotiation have remained professional and pleasant, without any lingering tension from that initial disagreement.",
        jumbled: ["Our", "the", "initial", "remained", "without", "lingering", "and", "disagreement.", "that", "pleasant,", "since", "from", "have", "any", "interactions", "tension", "professional", "negotiation"],
      },
      {
        target: "I mention this to a neighbor, who says she's noticed Mr. Halloran seems generally more open to reasonable tenant requests lately too.",
        jumbled: ["more", "says", "she's", "too.", "to", "seems", "requests", "Mr.", "tenant", "Halloran", "I", "who", "open", "neighbor,", "to", "lately", "noticed", "generally", "this", "mention", "reasonable", "a"],
      },
      {
        target: "\"Maybe that conversation changed something, Bianca,\" I consider, realizing one respectful negotiation had quietly shifted how he approaches these relationships generally.",
        jumbled: ["Bianca,\"", "\"Maybe", "changed", "he", "how", "respectful", "consider,", "one", "conversation", "had", "I", "shifted", "that", "relationships", "realizing", "quietly", "something,", "approaches", "these", "generally.", "negotiation"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing a relationship stayed positive long after a difficult negotiation.",
    mySentenceExample: "I noticed our relationship stayed positive long after the negotiation.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Bianca sitting at her kitchen table, the original renewal letter and the final signed lease both visible, reflecting quietly.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I simply accepted the original proposed increase without question. If I had assumed negotiation wasn't an option, I likely would have paid considerably more or faced the disruption of moving entirely. Instead, researching thoroughly and approaching Mr. Halloran respectfully allowed me to reach an outcome that genuinely worked for both of us. I've learned that even seemingly fixed proposals, like rent increases, often have more flexibility than they initially appear to have. In the end, this experience taught me that advocating for my own interests, done respectfully, rarely damages a relationship and often strengthens it. \"Well done, Bianca,\" I tell myself, setting the signed lease alongside the old renewal letter.",
    questions: [
      { text: "What does Bianca realize looking back on the process?", answer: "How differently things might have gone had she accepted the increase without question." },
      { text: "What might have happened if she had simply accepted the increase?", answer: "She'd have paid considerably more or faced moving." },
      { text: "What has Bianca learned about seemingly fixed proposals?", answer: "That they often have more flexibility than they appear." },
    ],
    trueFalse: [
      { text: "Bianca realizes things might have gone differently without negotiating.", answer: true },
      { text: "Accepting the increase might have meant paying more or moving.", answer: true },
      { text: "Bianca believes negotiation always damages a relationship.", answer: false },
      { text: "Bianca learns fixed proposals often have more flexibility than expected.", answer: true },
      { text: "Bianca learns advocating for herself respectfully can strengthen a relationship.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire process, I realize how differently things might have unfolded had I simply accepted the original proposed increase without question.",
        jumbled: ["how", "back", "original", "realize", "increase", "accepted", "simply", "on", "the", "might", "entire", "differently", "unfolded", "I", "proposed", "Looking", "things", "without", "question.", "process,", "had", "have", "I", "the"],
      },
      {
        target: "I likely would have paid considerably more or faced the disruption of moving entirely.",
        jumbled: ["considerably", "disruption", "I", "moving", "paid", "likely", "have", "or", "would", "of", "entirely.", "the", "more", "faced"],
      },
      {
        target: "Instead, researching thoroughly and approaching Mr. Halloran respectfully allowed me to reach an outcome that genuinely worked for both of us.",
        jumbled: ["Mr.", "Halloran", "thoroughly", "to", "for", "approaching", "allowed", "me", "and", "researching", "us.", "respectfully", "worked", "outcome", "both", "that", "of", "reach", "genuinely", "an", "Instead,"],
      },
      {
        target: "I've learned that even seemingly fixed proposals, like rent increases, often have more flexibility than they initially appear to have.",
        jumbled: ["have.", "proposals,", "than", "even", "I've", "increases,", "seemingly", "that", "like", "initially", "more", "to", "often", "learned", "rent", "fixed", "they", "have", "flexibility", "appear"],
      },
      {
        target: "In the end, this experience taught me that advocating for my own interests, done respectfully, rarely damages a relationship and often strengthens it.",
        jumbled: ["a", "end,", "this", "me", "it.", "In", "the", "that", "often", "advocating", "rarely", "own", "for", "taught", "relationship", "damages", "interests,", "strengthens", "experience", "my", "and", "respectfully,", "done"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating a rent increase respectfully.",
    mySentenceExample: "I learned that respectful negotiation often produces better outcomes.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
