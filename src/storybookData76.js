// B2 Adults digital storybook, Book 76: "A Dispute with the Homeowners Association"
// Static content -- no Supabase. Fourth book in the B2 Adults batch
// (73-80). Civic negotiation/formal-writing scenario, distinct from
// the workplace and business negotiations in Books 73-75 -- this
// centers on a homeowner negotiating a rule dispute with an HOA
// board, matching the B2 Adults spec's genre-aware writing focus
// (a formal appeal letter). Adults-track shape: 3 questions, 5 True/
// False, 5 Build-a-Sentence per chapter. Chapter images not generated
// yet -- image left null per chapter.
import coverImg from "./assets/storybook76/cover.jpg";

export const STORYBOOK_TITLE = "A Dispute with the Homeowners Association";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Rosalind standing in her front yard looking at a small vegetable garden, an official-looking letter in her hand, expression concerned.";

export const CHARACTERS = [
  { name: "Rosalind", role: "The narrator, a homeowner who built a small front-yard garden", look: "Practical, gardening gloves often nearby, values her community but stands her ground." },
  { name: "Mr. Ashworth", role: "The homeowners association board president", look: "Formal, rule-focused, though willing to listen when approached respectfully." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "An Official Letter",
    image: null,
    imageNote: "Rosalind opening a formal letter at her kitchen table, the envelope marked with the HOA's official letterhead.",
    story:
      "I open an official letter from the homeowners association, informing me that my front-yard vegetable garden violates the community's landscaping guidelines. Apparently, the guidelines specify only ornamental plants are permitted in visible front areas, something I hadn't fully realized when I planted it. The letter requests I remove the garden within thirty days or face a modest but recurring fine going forward. Given how much effort I'd invested, and how much I genuinely enjoy growing my own vegetables, this feels considerably unfair. Rather than simply complying immediately, I decide I'll research whether there's any room for genuine negotiation here. \"Don't panic yet, Rosalind,\" I tell myself, setting the letter down on the table.",
    questions: [
      { text: "What does the official letter inform Rosalind of?", answer: "That her front-yard vegetable garden violates landscaping guidelines." },
      { text: "What do the guidelines specify is permitted in front areas?", answer: "Only ornamental plants." },
      { text: "What does Rosalind decide to do instead of complying immediately?", answer: "Research whether there's room for negotiation." },
    ],
    trueFalse: [
      { text: "The letter says her garden violates landscaping guidelines.", answer: true },
      { text: "The guidelines specify only ornamental plants are permitted.", answer: true },
      { text: "The letter requests removal within thirty days or a fine.", answer: true },
      { text: "Rosalind immediately complies without question.", answer: false },
      { text: "Rosalind decides to research whether negotiation is possible.", answer: true },
    ],
    buildSentence: [
      {
        target: "I open an official letter from the homeowners association, informing me that my front-yard vegetable garden violates the community's landscaping guidelines.",
        jumbled: ["I", "open", "the", "front-yard", "garden", "association,", "an", "from", "homeowners", "letter", "landscaping", "the", "violates", "informing", "me", "community's", "my", "official", "vegetable", "guidelines.", "that"],
      },
      {
        target: "Apparently, the guidelines specify only ornamental plants are permitted in visible front areas, something I hadn't fully realized when I planted it.",
        jumbled: ["I", "in", "something", "plants", "I", "ornamental", "front", "fully", "specify", "permitted", "when", "hadn't", "planted", "Apparently,", "only", "the", "are", "areas,", "guidelines", "it.", "visible", "realized"],
      },
      {
        target: "The letter requests I remove the garden within thirty days or face a modest but recurring fine going forward.",
        jumbled: ["thirty", "face", "the", "garden", "The", "a", "or", "recurring", "I", "letter", "modest", "fine", "within", "requests", "forward.", "going", "days", "but", "remove"],
      },
      {
        target: "Given how much effort I'd invested, and how much I genuinely enjoy growing my own vegetables, this feels considerably unfair.",
        jumbled: ["my", "much", "how", "enjoy", "genuinely", "much", "Given", "how", "I", "considerably", "effort", "unfair.", "and", "I'd", "own", "vegetables,", "invested,", "this", "feels", "growing"],
      },
      {
        target: "Rather than simply complying immediately, I decide I'll research whether there's any room for genuine negotiation here.",
        jumbled: ["than", "I", "research", "complying", "any", "genuine", "here.", "simply", "Rather", "negotiation", "decide", "room", "there's", "whether", "I'll", "for", "immediately,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about receiving an official notice that seemed unfair at first.",
    mySentenceExample: "I received an official notice that seemed unfair at first.",
  },
  {
    number: 2,
    title: "Reading the Fine Print",
    image: null,
    imageNote: "Rosalind at her kitchen table reading through the HOA's full bylaws document, highlighting sections.",
    story:
      "I request the full HOA bylaws document, reading through it carefully to understand exactly what's permitted and what genuinely isn't. I discover that while ornamental plants are indeed specified, the guidelines also include a provision allowing exceptions through formal board approval. Moreover, I find that several other properties in the neighborhood have small, permitted gardens, suggesting exceptions aren't entirely unprecedented here. This detail, given how it changes my understanding, suggests negotiation might genuinely be possible rather than simply futile. Armed with this information, I decide to draft a formal request for an exception rather than simply removing the garden. \"There's a real case here, Rosalind,\" I remind myself, highlighting the relevant clause.",
    questions: [
      { text: "What does Rosalind request and read through carefully?", answer: "The full HOA bylaws document." },
      { text: "What provision does Rosalind discover in the guidelines?", answer: "That exceptions can be granted through formal board approval." },
      { text: "What does Rosalind decide to draft?", answer: "A formal request for an exception." },
    ],
    trueFalse: [
      { text: "Rosalind requests the full HOA bylaws document.", answer: true },
      { text: "The guidelines include a provision allowing exceptions through board approval.", answer: true },
      { text: "No other properties in the neighborhood have gardens at all.", answer: false },
      { text: "Rosalind decides to draft a formal request for an exception.", answer: true },
      { text: "This detail suggests negotiation might genuinely be possible.", answer: true },
    ],
    buildSentence: [
      {
        target: "I request the full HOA bylaws document, reading through it carefully to understand exactly what's permitted and what genuinely isn't.",
        jumbled: ["permitted", "understand", "HOA", "I", "exactly", "document,", "to", "full", "carefully", "genuinely", "the", "isn't.", "what's", "bylaws", "and", "reading", "it", "request", "what", "through"],
      },
      {
        target: "I discover that while ornamental plants are indeed specified, the guidelines also include a provision allowing exceptions through formal board approval.",
        jumbled: ["I", "a", "include", "the", "approval.", "specified,", "board", "guidelines", "that", "ornamental", "allowing", "also", "indeed", "provision", "while", "through", "are", "discover", "exceptions", "plants", "formal"],
      },
      {
        target: "Moreover, I find that several other properties in the neighborhood have small, permitted gardens, suggesting exceptions aren't entirely unprecedented here.",
        jumbled: ["other", "I", "that", "neighborhood", "Moreover,", "properties", "exceptions", "have", "gardens,", "aren't", "the", "small,", "unprecedented", "entirely", "in", "here.", "permitted", "several", "suggesting", "find"],
      },
      {
        target: "This detail, given how it changes my understanding, suggests negotiation might genuinely be possible rather than simply futile.",
        jumbled: ["understanding,", "futile.", "changes", "detail,", "my", "suggests", "This", "rather", "be", "simply", "possible", "how", "it", "given", "genuinely", "negotiation", "might", "than"],
      },
      {
        target: "Armed with this information, I decide to draft a formal request for an exception rather than simply removing the garden.",
        jumbled: ["a", "than", "this", "to", "information,", "decide", "request", "the", "for", "simply", "removing", "garden.", "an", "exception", "draft", "with", "I", "formal", "Armed", "rather"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reading the fine print of a rule and discovering an exception existed.",
    mySentenceExample: "I read the fine print and discovered an exception existed.",
  },
  {
    number: 3,
    title: "Drafting the Request",
    image: null,
    imageNote: "Rosalind at her laptop, drafting a formal letter, printed photos of her garden nearby as evidence.",
    story:
      "I draft a formal letter to the board, explaining respectfully why I believe an exception is warranted in this particular case. I include photographs showing the garden is well-maintained and, in my view, visually appealing despite not being strictly ornamental. I also reference the specific bylaw provision allowing exceptions, along with examples of similarly approved gardens elsewhere in the neighborhood. Rather than simply demanding compliance, I frame this as a reasonable request grounded in both evidence and existing precedent. Reading the letter back, I feel it strikes an appropriately professional, non-confrontational tone throughout, and I sign it simply, \"Sincerely, Rosalind.\"",
    questions: [
      { text: "What does Rosalind draft to the board?", answer: "A formal letter explaining why an exception is warranted." },
      { text: "What does Rosalind include in the letter?", answer: "Photographs showing the garden is well-maintained." },
      { text: "What does Rosalind reference in her request?", answer: "The specific bylaw provision and examples of approved gardens elsewhere." },
    ],
    trueFalse: [
      { text: "Rosalind drafts a formal letter to the board.", answer: true },
      { text: "Rosalind includes photographs showing the garden is well-maintained.", answer: true },
      { text: "Rosalind references the specific bylaw provision allowing exceptions.", answer: true },
      { text: "Rosalind's letter demands compliance from the board.", answer: false },
      { text: "Rosalind feels the letter strikes a professional, non-confrontational tone.", answer: true },
    ],
    buildSentence: [
      {
        target: "I draft a formal letter to the board, explaining respectfully why I believe an exception is warranted in this particular case.",
        jumbled: ["in", "why", "board,", "an", "exception", "this", "to", "letter", "particular", "warranted", "explaining", "a", "believe", "case.", "I", "draft", "I", "is", "formal", "the", "respectfully"],
      },
      {
        target: "I include photographs showing the garden is well-maintained and, in my view, visually appealing despite not being strictly ornamental.",
        jumbled: ["photographs", "visually", "appealing", "and,", "the", "is", "despite", "view,", "ornamental.", "I", "strictly", "showing", "garden", "not", "being", "in", "include", "well-maintained", "my"],
      },
      {
        target: "I also reference the specific bylaw provision allowing exceptions, along with examples of similarly approved gardens elsewhere in the neighborhood.",
        jumbled: ["along", "bylaw", "of", "with", "also", "the", "reference", "elsewhere", "provision", "I", "exceptions,", "the", "similarly", "in", "examples", "neighborhood.", "gardens", "specific", "allowing", "approved"],
      },
      {
        target: "Rather than simply demanding compliance, I frame this as a reasonable request grounded in both evidence and existing precedent.",
        jumbled: ["Rather", "reasonable", "both", "compliance,", "in", "as", "I", "than", "request", "precedent.", "existing", "a", "and", "simply", "evidence", "demanding", "this", "grounded", "frame"],
      },
      {
        target: "Reading the letter back, I feel it strikes an appropriately professional, non-confrontational tone throughout, and I sign it simply, \"Sincerely, Rosalind.\"",
        jumbled: ["and", "feel", "the", "letter", "appropriately", "\"Sincerely,", "throughout,", "simply,", "tone", "Rosalind.\"", "it", "an", "I", "it", "I", "strikes", "sign", "Reading", "non-confrontational", "professional,", "back,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about writing a formal request grounded in evidence rather than emotion.",
    mySentenceExample: "I wrote a formal request grounded in evidence rather than emotion.",
  },
  {
    number: 4,
    title: "Submitting the Appeal",
    image: null,
    imageNote: "Rosalind mailing the letter at a mailbox, then checking her calendar for the board's next scheduled meeting.",
    story:
      "I submit the formal appeal, along with a request to present my case in person at the board's next scheduled meeting. \"We've received your appeal, Rosalind, and the board will review it at our meeting in two weeks,\" Mr. Ashworth confirms promptly. While waiting, I continue maintaining the garden carefully, wanting to demonstrate genuine commitment rather than treating this as a temporary display. A neighbor mentions she'd support my appeal if asked, having admired the garden since I'd first planted it. This small gesture of support, given how uncertain the outcome feels, genuinely encourages me moving forward.",
    questions: [
      { text: "What does Rosalind submit along with the formal appeal?", answer: "A request to present her case in person." },
      { text: "What does Mr. Ashworth confirm?", answer: "Receipt, and that the board will review it in two weeks." },
      { text: "What does a neighbor mention?", answer: "That she'd support Rosalind's appeal." },
    ],
    trueFalse: [
      { text: "Rosalind requests to present her case in person at the meeting.", answer: true },
      { text: "Mr. Ashworth confirms receipt promptly.", answer: true },
      { text: "The board will review her request in two weeks.", answer: true },
      { text: "A neighbor mentions she opposes Rosalind's garden entirely.", answer: false },
      { text: "This small gesture of support encourages Rosalind.", answer: true },
    ],
    buildSentence: [
      {
        target: "I submit the formal appeal, along with a request to present my case in person at the board's next scheduled meeting.",
        jumbled: ["scheduled", "the", "person", "in", "present", "appeal,", "at", "case", "board's", "meeting.", "next", "I", "with", "along", "submit", "to", "formal", "request", "the", "a", "my"],
      },
      {
        target: "\"We've received your appeal, Rosalind, and the board will review it at our meeting in two weeks,\" Mr. Ashworth confirms promptly.",
        jumbled: ["Mr.", "received", "board", "weeks,\"", "Rosalind,", "appeal,", "two", "\"We've", "will", "it", "our", "Ashworth", "at", "the", "meeting", "promptly.", "your", "and", "in", "review", "confirms"],
      },
      {
        target: "I continue maintaining the garden carefully, wanting to demonstrate genuine commitment rather than treating this as a temporary display.",
        jumbled: ["display.", "garden", "continue", "genuine", "this", "wanting", "to", "temporary", "a", "I", "demonstrate", "rather", "treating", "as", "than", "carefully,", "maintaining", "the", "commitment"],
      },
      {
        target: "A neighbor mentions she'd support my appeal if asked, having admired the garden since I'd first planted it.",
        jumbled: ["appeal", "I'd", "asked,", "admired", "mentions", "support", "my", "it.", "since", "neighbor", "garden", "first", "she'd", "the", "A", "having", "if", "planted"],
      },
      {
        target: "This small gesture of support, given how uncertain the outcome feels, genuinely encourages me moving forward.",
        jumbled: ["of", "support,", "given", "This", "how", "gesture", "feels,", "genuinely", "uncertain", "forward.", "encourages", "moving", "the", "outcome", "small", "me"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about submitting a formal appeal and waiting for a decision.",
    mySentenceExample: "I submitted a formal appeal and waited for their decision.",
  },
  {
    number: 5,
    title: "Presenting to the Board",
    image: null,
    imageNote: "Rosalind standing before a small board table, presenting photos on a laptop to several seated board members.",
    story:
      "At the meeting, I present my case calmly, walking the board through the photographs, the relevant bylaw, and the neighborhood precedent I'd found. Mr. Ashworth asks several clarifying questions, particularly about long-term maintenance and how the garden might look during winter months. I answer honestly, admitting the garden looks less vibrant seasonally, though I'd be willing to add borders for a more polished appearance. \"We appreciate that you've approached this respectfully, Rosalind, rather than ignoring the notice,\" one board member mentions. Given the board's attentive questions, I sense they're genuinely considering this request rather than merely going through procedural motions.",
    questions: [
      { text: "What does Rosalind walk the board through?", answer: "The photographs, the bylaw, and the neighborhood precedent." },
      { text: "What does Mr. Ashworth ask clarifying questions about?", answer: "Long-term maintenance and winter appearance." },
      { text: "What does Rosalind offer to do?", answer: "Add borders for a more polished appearance." },
    ],
    trueFalse: [
      { text: "Rosalind walks the board through photographs, bylaws, and precedent.", answer: true },
      { text: "Mr. Ashworth asks about long-term maintenance and winter appearance.", answer: true },
      { text: "Rosalind claims the garden looks perfect year-round.", answer: false },
      { text: "Rosalind offers to add borders for a more polished appearance.", answer: true },
      { text: "Rosalind senses the board is genuinely considering this request.", answer: true },
    ],
    buildSentence: [
      {
        target: "At the meeting, I present my case calmly, walking the board through the photographs, the relevant bylaw, and the neighborhood precedent I'd found.",
        jumbled: ["the", "I'd", "At", "my", "case", "present", "I", "meeting,", "relevant", "neighborhood", "board", "the", "bylaw,", "walking", "found.", "the", "and", "the", "precedent", "the", "photographs,", "through", "calmly,"],
      },
      {
        target: "Mr. Ashworth asks several clarifying questions, particularly about long-term maintenance and how the garden might look during winter months.",
        jumbled: ["the", "months.", "about", "how", "look", "clarifying", "long-term", "garden", "several", "asks", "and", "Mr.", "might", "during", "questions,", "particularly", "maintenance", "winter", "Ashworth"],
      },
      {
        target: "I answer honestly, admitting the garden looks less vibrant seasonally, though I'd be willing to add borders for a more polished appearance.",
        jumbled: ["borders", "vibrant", "for", "I'd", "I", "add", "to", "a", "appearance.", "honestly,", "the", "less", "garden", "more", "polished", "answer", "be", "though", "admitting", "seasonally,", "looks", "willing"],
      },
      {
        target: "\"We appreciate that you've approached this respectfully, Rosalind, rather than ignoring the notice,\" one board member mentions.",
        jumbled: ["mentions.", "this", "rather", "notice,\"", "Rosalind,", "\"We", "approached", "that", "member", "you've", "than", "board", "appreciate", "respectfully,", "the", "ignoring", "one"],
      },
      {
        target: "Given the board's attentive questions, I sense they're genuinely considering this request rather than merely going through procedural motions.",
        jumbled: ["procedural", "genuinely", "Given", "I", "through", "merely", "than", "motions.", "sense", "this", "board's", "going", "rather", "they're", "questions,", "the", "considering", "request", "attentive"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about presenting a case honestly, including its potential weaknesses.",
    mySentenceExample: "I presented my case honestly, including its potential weaknesses.",
  },
  {
    number: 6,
    title: "The Board's Decision",
    image: null,
    imageNote: "Mr. Ashworth reading an official decision aloud to Rosalind at a follow-up meeting, both looking composed.",
    story:
      "A week later, Mr. Ashworth calls. \"Good news, Rosalind, the board has approved your exception, with one condition,\" he tells me. They'd like me to add a small decorative border, similar to what I'd already offered, to maintain visual consistency with neighboring properties. I agree readily, genuinely relieved that a compromise had been reached rather than an outright rejection of my request. Mr. Ashworth mentions this exception will now be documented, potentially serving as precedent for similar future requests from other homeowners. Hanging up, I feel proud that respectful, well-prepared negotiation had actually produced a positive outcome.",
    questions: [
      { text: "What does Mr. Ashworth call to inform Rosalind?", answer: "That the board has approved her exception." },
      { text: "What condition is attached to the approval?", answer: "Adding a small decorative border." },
      { text: "What does Mr. Ashworth mention about this exception?", answer: "That it will be documented as precedent for future requests." },
    ],
    trueFalse: [
      { text: "Mr. Ashworth calls to inform her the board approved her exception.", answer: true },
      { text: "The condition is adding a small decorative border.", answer: true },
      { text: "Rosalind refuses to agree to this condition.", answer: false },
      { text: "This exception will be documented as potential precedent.", answer: true },
      { text: "Rosalind feels proud this negotiation produced a positive outcome.", answer: true },
    ],
    buildSentence: [
      {
        target: "A week later, Mr. Ashworth calls.",
        jumbled: ["week", "A", "later,", "Mr.", "Ashworth", "calls."],
      },
      {
        target: "\"Good news, Rosalind, the board has approved your exception, with one condition,\" he tells me.",
        jumbled: ["exception,", "he", "tells", "approved", "Rosalind,", "\"Good", "has", "me.", "news,", "the", "condition,\"", "one", "board", "your", "with"],
      },
      {
        target: "They'd like me to add a small decorative border, similar to what I'd already offered, to maintain visual consistency with neighboring properties.",
        jumbled: ["what", "They'd", "visual", "I'd", "add", "similar", "neighboring", "consistency", "already", "like", "maintain", "decorative", "to", "properties.", "with", "to", "small", "a", "to", "border,", "me", "offered,"],
      },
      {
        target: "I agree readily, genuinely relieved that a compromise had been reached rather than an outright rejection of my request.",
        jumbled: ["had", "request.", "an", "compromise", "reached", "that", "my", "a", "rejection", "rather", "I", "relieved", "readily,", "genuinely", "of", "than", "been", "outright", "agree"],
      },
      {
        target: "Mr. Ashworth mentions this exception will now be documented, potentially serving as precedent for similar future requests from other homeowners.",
        jumbled: ["mentions", "this", "Ashworth", "potentially", "serving", "requests", "documented,", "now", "exception", "as", "similar", "homeowners.", "be", "from", "for", "other", "future", "precedent", "will", "Mr."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about receiving approval after negotiating a fair compromise.",
    mySentenceExample: "I received approval after negotiating a fair compromise.",
  },
  {
    number: 7,
    title: "Adding the Border",
    image: null,
    imageNote: "Rosalind kneeling in her front yard, installing a small decorative border around the vegetable garden.",
    story:
      "Over the following weekend, I install a simple decorative border, exactly as agreed upon during the board's approval process. The garden now looks noticeably more polished, blending the practical vegetables with a more intentional, cohesive visual design overall. A few neighbors stop by. \"This looks wonderful, Rosalind,\" one says, asking genuinely curious questions about the vegetables I'm growing. One neighbor mentions she might request a similar exception herself, inspired by seeing how mine had ultimately turned out. I feel satisfied that resolving this respectfully had, in a small way, opened a door for others too.",
    questions: [
      { text: "What does Rosalind install over the following weekend?", answer: "A simple decorative border." },
      { text: "How does the garden look now?", answer: "More polished." },
      { text: "What does one neighbor mention?", answer: "That she might request a similar exception herself." },
    ],
    trueFalse: [
      { text: "Rosalind installs a simple decorative border.", answer: true },
      { text: "The garden now looks noticeably more polished.", answer: true },
      { text: "No neighbors show any interest in the garden.", answer: false },
      { text: "One neighbor mentions she might request a similar exception.", answer: true },
      { text: "Rosalind feels this opened a door for others too.", answer: true },
    ],
    buildSentence: [
      {
        target: "Over the following weekend, I install a simple decorative border, exactly as agreed upon during the board's approval process.",
        jumbled: ["as", "a", "approval", "install", "exactly", "I", "simple", "the", "during", "board's", "weekend,", "Over", "agreed", "border,", "following", "upon", "decorative", "the", "process."],
      },
      {
        target: "The garden now looks noticeably more polished, blending the practical vegetables with a more intentional, cohesive visual design overall.",
        jumbled: ["now", "more", "overall.", "with", "visual", "design", "vegetables", "a", "The", "practical", "intentional,", "noticeably", "blending", "garden", "more", "cohesive", "looks", "polished,", "the"],
      },
      {
        target: "A few neighbors stop by.",
        jumbled: ["neighbors", "few", "A", "stop", "by."],
      },
      {
        target: "\"This looks wonderful, Rosalind,\" one says, asking genuinely curious questions about the vegetables I'm growing.",
        jumbled: ["genuinely", "\"This", "curious", "the", "one", "asking", "growing.", "looks", "vegetables", "I'm", "wonderful,", "says,", "about", "questions", "Rosalind,\""],
      },
      {
        target: "One neighbor mentions she might request a similar exception herself, inspired by seeing how mine had ultimately turned out.",
        jumbled: ["out.", "how", "seeing", "mine", "neighbor", "similar", "by", "ultimately", "a", "exception", "inspired", "request", "she", "herself,", "mentions", "One", "had", "might", "turned"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about completing a compromise you agreed to during a negotiation.",
    mySentenceExample: "I completed the compromise I agreed to during the negotiation.",
  },
  {
    number: 8,
    title: "A Written Thank-You",
    image: null,
    imageNote: "Rosalind at her laptop writing a thank-you email to Mr. Ashworth and the board.",
    story:
      "I write a brief thank-you email to Mr. Ashworth and the board, appreciating their willingness to consider my request thoughtfully. I mention that I understand guidelines exist for good reason, and I respect the board's role in maintaining neighborhood consistency generally. Nevertheless, I express genuine gratitude that they'd been open to a reasonable exception rather than enforcing rigid, blanket compliance regardless of context. \"Thank you, Rosalind — you approached this whole situation professionally from the very beginning,\" Mr. Ashworth replies warmly. This exchange, small as it is, leaves me feeling genuinely positive about my relationship with the community's governance.",
    questions: [
      { text: "What does Rosalind write to Mr. Ashworth and the board?", answer: "A thank-you email." },
      { text: "What does Rosalind mention understanding?", answer: "That guidelines exist for good reason." },
      { text: "How does Mr. Ashworth reply?", answer: "Warmly, appreciating her professionalism." },
    ],
    trueFalse: [
      { text: "Rosalind writes a brief thank-you email to the board.", answer: true },
      { text: "Rosalind mentions she understands guidelines exist for good reason.", answer: true },
      { text: "Rosalind expresses no gratitude for the board's flexibility.", answer: false },
      { text: "Mr. Ashworth replies warmly, appreciating her professionalism.", answer: true },
      { text: "Rosalind feels genuinely positive about the community's governance.", answer: true },
    ],
    buildSentence: [
      {
        target: "I write a brief thank-you email to Mr. Ashworth and the board, appreciating their willingness to consider my request thoughtfully.",
        jumbled: ["to", "consider", "request", "write", "to", "their", "and", "Mr.", "willingness", "I", "appreciating", "Ashworth", "my", "email", "thoughtfully.", "a", "brief", "thank-you", "the", "board,"],
      },
      {
        target: "I mention that I understand guidelines exist for good reason, and I respect the board's role in maintaining neighborhood consistency generally.",
        jumbled: ["board's", "I", "respect", "consistency", "in", "mention", "good", "that", "generally.", "and", "reason,", "maintaining", "I", "understand", "I", "role", "neighborhood", "exist", "guidelines", "for", "the"],
      },
      {
        target: "Nevertheless, I express genuine gratitude that they'd been open to a reasonable exception rather than enforcing rigid, blanket compliance regardless of context.",
        jumbled: ["to", "reasonable", "that", "regardless", "been", "compliance", "Nevertheless,", "rigid,", "rather", "a", "genuine", "context.", "blanket", "exception", "express", "enforcing", "of", "than", "open", "they'd", "I", "gratitude"],
      },
      {
        target: "\"Thank you, Rosalind — you approached this whole situation professionally from the very beginning,\" Mr. Ashworth replies warmly.",
        jumbled: ["approached", "from", "Ashworth", "you,", "the", "—", "beginning,\"", "professionally", "situation", "warmly.", "this", "you", "\"Thank", "Mr.", "replies", "very", "Rosalind", "whole"],
      },
      {
        target: "This exchange, small as it is, leaves me feeling genuinely positive about my relationship with the community's governance.",
        jumbled: ["as", "small", "me", "with", "genuinely", "positive", "it", "about", "governance.", "the", "is,", "community's", "leaves", "relationship", "exchange,", "feeling", "my", "This"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about writing a thank-you note after a fair resolution to a dispute.",
    mySentenceExample: "I wrote a thank-you note after a fair resolution to our dispute.",
  },
  {
    number: 9,
    title: "Helping a Neighbor",
    image: null,
    imageNote: "Rosalind sitting with her neighbor at an outdoor table, reviewing the neighbor's own garden proposal together.",
    story:
      "\"Rosalind, could you help me draft my own exception request?\" the neighbor who'd mentioned interest earlier asks, inspired by how mine had unfolded. I walk her through what worked well: referencing specific bylaws, including photographic evidence, and framing the request collaboratively rather than confrontationally. She admits she'd initially assumed challenging an HOA decision meant automatic conflict, an assumption my experience had apparently corrected. I explain that, in my experience, most disputes like this stem from miscommunication rather than genuine, irreconcilable disagreement. Watching her leave feeling more confident, I realize this experience had value extending well beyond my own garden.",
    questions: [
      { text: "What does the neighbor ask Rosalind for help with?", answer: "Drafting her own exception request." },
      { text: "What does Rosalind walk her through?", answer: "Referencing bylaws, including evidence, and framing it collaboratively." },
      { text: "What had the neighbor initially assumed?", answer: "That challenging an HOA decision meant automatic conflict." },
    ],
    trueFalse: [
      { text: "The neighbor asks Rosalind for help drafting her own request.", answer: true },
      { text: "Rosalind walks her through referencing bylaws and using evidence.", answer: true },
      { text: "The neighbor had initially assumed challenging the HOA meant automatic conflict.", answer: true },
      { text: "Rosalind says most disputes stem from irreconcilable disagreement.", answer: false },
      { text: "Rosalind realizes this experience had value beyond her own garden.", answer: true },
    ],
    buildSentence: [
      {
        target: "\"Rosalind, could you help me draft my own exception request?\" the neighbor who'd mentioned interest earlier asks, inspired by how mine had unfolded.",
        jumbled: ["who'd", "how", "inspired", "could", "exception", "mentioned", "request?\"", "earlier", "draft", "by", "interest", "help", "you", "own", "neighbor", "the", "mine", "me", "asks,", "\"Rosalind,", "unfolded.", "my", "had"],
      },
      {
        target: "I walk her through what worked well: referencing specific bylaws, including photographic evidence, and framing the request collaboratively rather than confrontationally.",
        jumbled: ["and", "collaboratively", "evidence,", "her", "I", "the", "what", "confrontationally.", "including", "referencing", "framing", "well:", "rather", "bylaws,", "worked", "specific", "request", "through", "photographic", "walk", "than"],
      },
      {
        target: "She admits she'd initially assumed challenging an HOA decision meant automatic conflict, an assumption my experience had apparently corrected.",
        jumbled: ["an", "She", "automatic", "corrected.", "challenging", "apparently", "my", "an", "meant", "had", "experience", "initially", "conflict,", "assumption", "admits", "decision", "assumed", "HOA", "she'd"],
      },
      {
        target: "I explain that, in my experience, most disputes like this stem from miscommunication rather than genuine, irreconcilable disagreement.",
        jumbled: ["in", "I", "most", "that,", "disagreement.", "miscommunication", "explain", "genuine,", "rather", "disputes", "like", "from", "my", "irreconcilable", "this", "stem", "experience,", "than"],
      },
      {
        target: "Watching her leave feeling more confident, I realize this experience had value extending well beyond my own garden.",
        jumbled: ["leave", "experience", "Watching", "feeling", "own", "I", "well", "my", "extending", "beyond", "more", "confident,", "this", "had", "her", "value", "realize", "garden."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about helping someone else using what you learned from your own experience.",
    mySentenceExample: "I helped someone else using what I learned from my own experience.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Rosalind sitting on her front porch at sunset, garden visible and thriving in the yard, reflecting quietly.",
    story:
      "Looking back on the entire dispute, I realize how differently things might have unfolded had I simply removed the garden without question. If I had assumed the rule was absolute and non-negotiable, I would have missed a reasonable path that actually existed within the bylaws. Instead, researching thoroughly and approaching the board respectfully allowed me to reach an outcome that honored both the rules and my own genuine interests. I've learned that formal disputes, approached with preparation rather than frustration, often have more flexibility than they initially appear to allow. In the end, this experience taught me that advocating for something you value is worth the effort required to do it properly. \"You did this the right way, Rosalind,\" I tell myself, watching the sunset over the garden.",
    questions: [
      { text: "What does Rosalind realize looking back on the dispute?", answer: "How differently things might have gone had she simply removed the garden." },
      { text: "What might have happened if she had simply removed the garden?", answer: "She would have missed a reasonable path within the bylaws." },
      { text: "What has Rosalind learned about formal disputes?", answer: "That they often have more flexibility than they initially appear." },
    ],
    trueFalse: [
      { text: "Rosalind realizes things might have gone differently without questioning the rule.", answer: true },
      { text: "Assuming the rule was absolute might have meant missing a real solution.", answer: true },
      { text: "Rosalind believes formal disputes never have any flexibility.", answer: false },
      { text: "Rosalind learns disputes often have more flexibility than they appear.", answer: true },
      { text: "Rosalind learns advocating for something valued is worth the effort.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire dispute, I realize how differently things might have unfolded had I simply removed the garden without question.",
        jumbled: ["removed", "unfolded", "on", "I", "the", "have", "Looking", "things", "differently", "garden", "might", "without", "back", "question.", "had", "dispute,", "I", "the", "realize", "simply", "how", "entire"],
      },
      {
        target: "I would have missed a reasonable path that actually existed within the bylaws.",
        jumbled: ["would", "the", "reasonable", "that", "I", "have", "bylaws.", "within", "actually", "path", "missed", "a", "existed"],
      },
      {
        target: "Instead, researching thoroughly and approaching the board respectfully allowed me to reach an outcome that honored both the rules and my own genuine interests.",
        jumbled: ["thoroughly", "the", "outcome", "interests.", "approaching", "allowed", "me", "honored", "and", "reach", "and", "an", "my", "researching", "both", "genuine", "the", "rules", "own", "to", "Instead,", "respectfully", "board", "that"],
      },
      {
        target: "I've learned that formal disputes, approached with preparation rather than frustration, often have more flexibility than they initially appear to allow.",
        jumbled: ["disputes,", "preparation", "allow.", "initially", "frustration,", "have", "more", "they", "rather", "flexibility", "that", "to", "formal", "than", "appear", "than", "with", "often", "learned", "I've", "approached"],
      },
      {
        target: "In the end, this experience taught me that advocating for something you value is worth the effort required to do it properly.",
        jumbled: ["In", "properly.", "to", "end,", "you", "experience", "this", "is", "required", "for", "advocating", "something", "that", "value", "do", "the", "effort", "worth", "it", "taught", "the", "me"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating a formal dispute respectfully.",
    mySentenceExample: "I learned that respectful negotiation often reveals more flexibility than expected.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
