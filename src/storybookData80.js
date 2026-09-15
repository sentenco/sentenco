// B2 Adults digital storybook, Book 80: "Proposing a Change to Company Policy"
// Static content -- no Supabase. Eighth and final book in the B2
// Adults batch (73-80). Internal formal-proposal/negotiation
// scenario, matching the B2 Adults spec's explicit "Write/Synthesize
// (genre-aware output)" focus -- distinct from the other 7 books'
// negotiation contexts (salary, coworker mediation, vendor contract,
// HOA, insurance, business partnership, rent). Adults-track shape:
// 3 questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image left null per chapter.
import coverImg from "./assets/storybook80/cover.jpg";

export const STORYBOOK_TITLE = "Proposing a Change to Company Policy";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Adaeze sitting at her desk drafting a formal proposal document on her laptop, sticky notes with employee feedback pinned nearby.";

export const CHARACTERS = [
  { name: "Adaeze", role: "The narrator, a mid-level manager proposing a policy change", look: "Organized, methodical, respected for thorough, evidence-based work." },
  { name: "Mr. Castellano", role: "The company's operations director", look: "Pragmatic, focused on measurable outcomes, open to well-supported proposals." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Recurring Complaint",
    image: null,
    imageNote: "Adaeze sitting at her desk, reviewing anonymous feedback survey results on her laptop, thoughtful expression.",
    story:
      "Reviewing this quarter's anonymous employee survey, I notice a recurring theme: many employees feel the current two-fixed-office-days policy lacks meaningful flexibility. Several comments mention that commuting on specific mandated days, regardless of actual workload, feels unnecessarily rigid given how remote work has generally proven effective. As a manager, I've noticed this myself, particularly among employees managing childcare or long commutes on inconvenient scheduled days. Given how consistently this concern appears across departments, I suspect this isn't simply isolated complaining, but a genuine, addressable problem. I decide I'll research this further before considering whether proposing a policy change might actually be worthwhile. \"Look into this properly, Adaeze,\" I tell myself, bookmarking the survey results.",
    questions: [
      { text: "What recurring theme does Adaeze notice in the survey?", answer: "That the two-fixed-office-days policy lacks flexibility." },
      { text: "What do several comments mention about commuting?", answer: "That mandated days feel unnecessarily rigid." },
      { text: "What does Adaeze decide to do?", answer: "Research further before proposing a policy change." },
    ],
    trueFalse: [
      { text: "Adaeze notices a recurring theme about office-day flexibility.", answer: true },
      { text: "Several comments mention commuting on mandated days feels rigid.", answer: true },
      { text: "Adaeze dismisses this as isolated complaining immediately.", answer: false },
      { text: "This concern appears consistently across departments.", answer: true },
      { text: "Adaeze decides to research this further.", answer: true },
    ],
    buildSentence: [
      {
        target: "Reviewing this quarter's anonymous employee survey, I notice a recurring theme: many employees feel the current two-fixed-office-days policy lacks meaningful flexibility.",
        jumbled: ["many", "meaningful", "theme:", "survey,", "recurring", "policy", "quarter's", "feel", "flexibility.", "two-fixed-office-days", "I", "notice", "current", "the", "Reviewing", "this", "anonymous", "employee", "lacks", "employees", "a"],
      },
      {
        target: "Several comments mention that commuting on specific mandated days, regardless of actual workload, feels unnecessarily rigid given how remote work has generally proven effective.",
        jumbled: ["days,", "unnecessarily", "actual", "how", "mention", "that", "of", "mandated", "generally", "commuting", "regardless", "feels", "specific", "comments", "work", "Several", "effective.", "on", "given", "proven", "workload,", "remote", "rigid", "has"],
      },
      {
        target: "I've noticed this myself, particularly among employees managing childcare or long commutes on inconvenient scheduled days.",
        jumbled: ["this", "days.", "employees", "myself,", "inconvenient", "particularly", "childcare", "I've", "scheduled", "among", "noticed", "managing", "or", "on", "commutes", "long"],
      },
      {
        target: "Given how consistently this concern appears across departments, I suspect this isn't simply isolated complaining, but a genuine, addressable problem.",
        jumbled: ["genuine,", "I", "addressable", "departments,", "concern", "across", "this", "Given", "how", "isn't", "complaining,", "appears", "problem.", "isolated", "suspect", "simply", "a", "this", "but", "consistently"],
      },
      {
        target: "I decide I'll research this further before considering whether proposing a policy change might actually be worthwhile.",
        jumbled: ["a", "this", "be", "policy", "I", "might", "whether", "I'll", "further", "before", "actually", "change", "decide", "research", "worthwhile.", "considering", "proposing"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing a recurring complaint that seemed worth addressing seriously.",
    mySentenceExample: "I noticed a recurring complaint that seemed worth addressing seriously.",
  },
  {
    number: 2,
    title: "Gathering Evidence",
    image: null,
    imageNote: "Adaeze compiling survey data, productivity metrics, and comparison research into an organized document.",
    story:
      "I compile the relevant survey data, along with productivity metrics from the past year comparing office days versus remote work days specifically. The data suggests no meaningful productivity difference exists, which weakens the traditional argument that mandated office days genuinely improve output. I also research what comparable companies in our industry currently offer, discovering that flexible, employee-chosen office days have become increasingly common. Moreover, I interview a few colleagues directly, gathering specific examples of how rigid scheduling had created genuine difficulty for them personally. Armed with this evidence, I feel confident that a formal proposal would be grounded in data, not simply preference. \"The case is solid, Adaeze,\" I remind myself, organizing the findings into one file.",
    questions: [
      { text: "What does Adaeze compile?", answer: "Survey data and productivity metrics." },
      { text: "What does the productivity data suggest?", answer: "No meaningful productivity difference between office and remote days." },
      { text: "What does Adaeze discover about comparable companies?", answer: "That flexible, employee-chosen office days have become common." },
    ],
    trueFalse: [
      { text: "Adaeze compiles survey data and productivity metrics.", answer: true },
      { text: "The data suggests no meaningful productivity difference exists.", answer: true },
      { text: "Comparable companies rarely offer flexible office days.", answer: false },
      { text: "Adaeze interviews colleagues to gather specific examples.", answer: true },
      { text: "Adaeze feels confident this proposal is grounded in data.", answer: true },
    ],
    buildSentence: [
      {
        target: "I compile the relevant survey data, along with productivity metrics from the past year comparing office days versus remote work days specifically.",
        jumbled: ["specifically.", "days", "office", "days", "the", "the", "compile", "metrics", "past", "relevant", "I", "from", "versus", "survey", "remote", "with", "comparing", "productivity", "along", "data,", "year", "work"],
      },
      {
        target: "The data suggests no meaningful productivity difference exists, which weakens the traditional argument that mandated office days genuinely improve output.",
        jumbled: ["improve", "days", "output.", "argument", "office", "exists,", "difference", "genuinely", "which", "that", "data", "productivity", "traditional", "suggests", "The", "mandated", "the", "weakens", "no", "meaningful"],
      },
      {
        target: "I also research what comparable companies in our industry currently offer, discovering that flexible, employee-chosen office days have become increasingly common.",
        jumbled: ["office", "that", "what", "increasingly", "also", "have", "become", "in", "days", "offer,", "discovering", "common.", "our", "industry", "currently", "companies", "comparable", "I", "employee-chosen", "flexible,", "research"],
      },
      {
        target: "Moreover, I interview a few colleagues directly, gathering specific examples of how rigid scheduling had created genuine difficulty for them personally.",
        jumbled: ["I", "interview", "directly,", "had", "personally.", "scheduling", "rigid", "specific", "gathering", "them", "for", "difficulty", "few", "how", "a", "genuine", "of", "colleagues", "created", "examples", "Moreover,"],
      },
      {
        target: "Armed with this evidence, I feel confident that a formal proposal would be grounded in data, not simply preference.",
        jumbled: ["I", "with", "in", "formal", "proposal", "confident", "feel", "a", "Armed", "simply", "this", "would", "preference.", "that", "be", "grounded", "not", "data,", "evidence,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about gathering evidence before proposing a change at work.",
    mySentenceExample: "I gathered evidence before proposing a change at work.",
  },
  {
    number: 3,
    title: "Drafting the Proposal",
    image: null,
    imageNote: "Adaeze at her laptop writing a formal document, headers visible for 'Background,' 'Data,' and 'Recommendation.'",
    story:
      "I draft a formal proposal, structuring it clearly with sections for background, supporting data, and a specific, actionable recommendation. Rather than simply criticizing the current policy, I frame the proposal constructively, emphasizing how flexibility could genuinely improve both morale and measurable outcomes. I recommend replacing fixed office days with a flexible, department-coordinated system, ensuring teams could still collaborate effectively when needed. Moreover, I include a proposed trial period, allowing the company to evaluate this change before committing to it permanently. Reading my draft back, I feel it strikes the right balance between advocacy and genuine professional objectivity. \"This is ready to share, Adaeze,\" I tell myself, saving the final version.",
    questions: [
      { text: "How does Adaeze structure her proposal?", answer: "With sections for background, supporting data, and a recommendation." },
      { text: "What does Adaeze recommend replacing fixed office days with?", answer: "A flexible, department-coordinated system." },
      { text: "What does Adaeze include to allow evaluation before permanence?", answer: "A proposed trial period." },
    ],
    trueFalse: [
      { text: "Adaeze structures the proposal with background, data, and recommendation.", answer: true },
      { text: "Adaeze recommends a flexible, department-coordinated system.", answer: true },
      { text: "Adaeze frames the proposal purely as criticism of the current policy.", answer: false },
      { text: "Adaeze includes a proposed trial period.", answer: true },
      { text: "Adaeze feels this strikes a balance between advocacy and objectivity.", answer: true },
    ],
    buildSentence: [
      {
        target: "I draft a formal proposal, structuring it clearly with sections for background, supporting data, and a specific, actionable recommendation.",
        jumbled: ["supporting", "actionable", "it", "for", "data,", "a", "formal", "sections", "clearly", "draft", "with", "recommendation.", "I", "background,", "structuring", "a", "proposal,", "and", "specific,"],
      },
      {
        target: "Rather than simply criticizing the current policy, I frame the proposal constructively, emphasizing how flexibility could genuinely improve both morale and measurable outcomes.",
        jumbled: ["both", "constructively,", "frame", "and", "measurable", "the", "morale", "the", "than", "I", "criticizing", "Rather", "proposal", "policy,", "simply", "outcomes.", "could", "genuinely", "flexibility", "improve", "how", "emphasizing", "current"],
      },
      {
        target: "I recommend replacing fixed office days with a flexible, department-coordinated system, ensuring teams could still collaborate effectively when needed.",
        jumbled: ["department-coordinated", "days", "could", "ensuring", "flexible,", "system,", "teams", "still", "replacing", "I", "effectively", "needed.", "fixed", "recommend", "with", "office", "when", "a", "collaborate"],
      },
      {
        target: "Moreover, I include a proposed trial period, allowing the company to evaluate this change before committing to it permanently.",
        jumbled: ["a", "trial", "committing", "I", "company", "Moreover,", "the", "allowing", "period,", "to", "this", "before", "evaluate", "include", "to", "change", "proposed", "permanently.", "it"],
      },
      {
        target: "Reading my draft back, I feel it strikes the right balance between advocacy and genuine professional objectivity.",
        jumbled: ["genuine", "feel", "I", "it", "advocacy", "back,", "strikes", "Reading", "draft", "and", "balance", "professional", "objectivity.", "right", "my", "between", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about writing a formal proposal that recommends a specific, actionable change.",
    mySentenceExample: "I wrote a formal proposal that recommended a specific, actionable change.",
  },
  {
    number: 4,
    title: "Sharing with Colleagues",
    image: null,
    imageNote: "Adaeze sharing her draft proposal with two colleagues in a meeting room, all three reviewing it together.",
    story:
      "Before submitting the proposal formally, I share the draft with two trusted colleagues, wanting honest feedback before it reaches leadership. \"Adaeze, this data section would be even stronger with a specific pilot example,\" one colleague suggests. Another mentions the proposal could address potential concerns preemptively, such as how client-facing roles might handle the increased flexibility. I incorporate both suggestions, recognizing that anticipating objections strengthens a proposal far more than simply hoping none arise. This collaborative revision process, though it takes extra time, genuinely improves the proposal's overall persuasiveness and thoroughness.",
    questions: [
      { text: "What does Adaeze do before submitting the proposal formally?", answer: "Shares the draft with two trusted colleagues." },
      { text: "What does one colleague suggest strengthening?", answer: "The data section with a specific pilot example." },
      { text: "What does another colleague mention the proposal could address?", answer: "How client-facing roles might handle the flexibility." },
    ],
    trueFalse: [
      { text: "Adaeze shares the draft with two trusted colleagues first.", answer: true },
      { text: "One colleague suggests strengthening the data section with an example.", answer: true },
      { text: "Another colleague mentions addressing client-facing role concerns.", answer: true },
      { text: "Adaeze ignores both suggestions and submits the original draft.", answer: false },
      { text: "This revision process improves the proposal's persuasiveness.", answer: true },
    ],
    buildSentence: [
      {
        target: "I share the draft with two trusted colleagues, wanting honest feedback before it reaches leadership.",
        jumbled: ["it", "the", "honest", "I", "colleagues,", "reaches", "trusted", "two", "draft", "wanting", "feedback", "with", "leadership.", "before", "share"],
      },
      {
        target: "\"Adaeze, this data section would be even stronger with a specific pilot example,\" one colleague suggests.",
        jumbled: ["pilot", "even", "stronger", "section", "suggests.", "specific", "one", "data", "would", "this", "\"Adaeze,", "a", "colleague", "be", "example,\"", "with"],
      },
      {
        target: "Another mentions the proposal could address potential concerns preemptively, such as how client-facing roles might handle the increased flexibility.",
        jumbled: ["the", "handle", "address", "concerns", "as", "such", "preemptively,", "roles", "client-facing", "proposal", "potential", "could", "the", "flexibility.", "Another", "how", "mentions", "increased", "might"],
      },
      {
        target: "I incorporate both suggestions, recognizing that anticipating objections strengthens a proposal far more than simply hoping none arise.",
        jumbled: ["anticipating", "far", "strengthens", "both", "none", "proposal", "objections", "more", "hoping", "that", "a", "incorporate", "arise.", "I", "simply", "than", "recognizing", "suggestions,"],
      },
      {
        target: "This collaborative revision process, though it takes extra time, genuinely improves the proposal's overall persuasiveness and thoroughness.",
        jumbled: ["and", "though", "improves", "overall", "genuinely", "takes", "time,", "it", "This", "revision", "the", "thoroughness.", "proposal's", "persuasiveness", "extra", "process,", "collaborative"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about asking colleagues for honest feedback before submitting something formal.",
    mySentenceExample: "I asked colleagues for honest feedback before submitting the proposal.",
  },
  {
    number: 5,
    title: "Submitting to Leadership",
    image: null,
    imageNote: "Adaeze sending an email with the attached proposal document, Mr. Castellano's name visible in the recipient field.",
    story:
      "I submit the revised proposal to Mr. Castellano, along with a brief cover note summarizing the key recommendation concisely upfront. \"Adaeze, I've read it thoroughly — let's discuss it further at a scheduled meeting,\" he responds within a day. I feel a mixture of nervousness and cautious optimism, given how thoroughly I'd prepared this proposal over several weeks. Walking into his office, I remind myself that regardless of the outcome, I'd approached this professionally and evidence-based throughout. Whatever happens next, I know I've genuinely done everything reasonably possible to advocate for this change effectively.",
    questions: [
      { text: "Who does Adaeze submit the revised proposal to?", answer: "Mr. Castellano." },
      { text: "How does Mr. Castellano respond?", answer: "Within a day, wanting to discuss it further." },
      { text: "How does Adaeze feel walking into his office?", answer: "A mixture of nervousness and cautious optimism." },
    ],
    trueFalse: [
      { text: "Adaeze submits the revised proposal to Mr. Castellano.", answer: true },
      { text: "Mr. Castellano responds within a day, wanting to discuss it.", answer: true },
      { text: "Adaeze feels a mixture of nervousness and cautious optimism.", answer: true },
      { text: "Mr. Castellano ignores the proposal entirely.", answer: false },
      { text: "Adaeze feels she's done everything reasonably possible.", answer: true },
    ],
    buildSentence: [
      {
        target: "I submit the revised proposal to Mr. Castellano, along with a brief cover note summarizing the key recommendation concisely upfront.",
        jumbled: ["the", "submit", "note", "recommendation", "brief", "to", "upfront.", "the", "with", "Mr.", "I", "cover", "along", "Castellano,", "a", "concisely", "key", "summarizing", "proposal", "revised"],
      },
      {
        target: "\"Adaeze, I've read it thoroughly — let's discuss it further at a scheduled meeting,\" he responds within a day.",
        jumbled: ["within", "thoroughly", "let's", "further", "—", "he", "\"Adaeze,", "responds", "scheduled", "read", "discuss", "it", "day.", "it", "at", "a", "I've", "meeting,\"", "a"],
      },
      {
        target: "I feel a mixture of nervousness and cautious optimism, given how thoroughly I'd prepared this proposal over several weeks.",
        jumbled: ["proposal", "this", "given", "over", "how", "weeks.", "nervousness", "cautious", "I", "of", "a", "I'd", "prepared", "feel", "mixture", "and", "optimism,", "several", "thoroughly"],
      },
      {
        target: "Walking into his office, I remind myself that regardless of the outcome, I'd approached this professionally and evidence-based throughout.",
        jumbled: ["remind", "the", "of", "myself", "that", "throughout.", "outcome,", "I'd", "I", "office,", "this", "Walking", "evidence-based", "and", "regardless", "his", "professionally", "into", "approached"],
      },
      {
        target: "Whatever happens next, I know I've genuinely done everything reasonably possible to advocate for this change effectively.",
        jumbled: ["I", "this", "reasonably", "possible", "everything", "change", "Whatever", "for", "happens", "I've", "know", "advocate", "next,", "done", "genuinely", "to", "effectively."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about submitting a well-prepared proposal and waiting for a response.",
    mySentenceExample: "I submitted a well-prepared proposal and waited for a response.",
  },
  {
    number: 6,
    title: "Discussing the Proposal",
    image: null,
    imageNote: "Adaeze and Mr. Castellano sitting across from each other, the printed proposal on the desk between them, both engaged in discussion.",
    story:
      "\"Adaeze, this is thorough — I particularly appreciate the productivity data,\" Mr. Castellano says, opening the meeting. He raises one concern: whether completely flexible scheduling might make cross-team collaboration meetings harder to coordinate effectively. I explain that the proposal actually addresses this, suggesting department-level coordination rather than fully individual, unstructured flexibility. He reconsiders the document, acknowledging he'd initially misread that particular section during his first review. Given this clarification, he seems considerably more receptive, mentioning this addresses his primary concern about maintaining operational coherence.",
    questions: [
      { text: "What does Mr. Castellano acknowledge about the proposal?", answer: "Its thoroughness, especially the productivity data." },
      { text: "What concern does Mr. Castellano raise?", answer: "Whether flexible scheduling might make cross-team collaboration harder." },
      { text: "What does Adaeze explain about the proposal?", answer: "That it addresses this with department-level coordination." },
    ],
    trueFalse: [
      { text: "Mr. Castellano acknowledges the proposal's thoroughness.", answer: true },
      { text: "Mr. Castellano raises a concern about cross-team collaboration.", answer: true },
      { text: "Adaeze explains the proposal suggests department-level coordination.", answer: true },
      { text: "Mr. Castellano refuses to reconsider his initial reading.", answer: false },
      { text: "Mr. Castellano seems considerably more receptive after clarification.", answer: true },
    ],
    buildSentence: [
      {
        target: "\"Adaeze, this is thorough — I particularly appreciate the productivity data,\" Mr. Castellano says, opening the meeting.",
        jumbled: ["—", "\"Adaeze,", "particularly", "productivity", "is", "I", "Castellano", "opening", "this", "says,", "thorough", "meeting.", "data,\"", "Mr.", "the", "appreciate", "the"],
      },
      {
        target: "He raises one concern: whether completely flexible scheduling might make cross-team collaboration meetings harder to coordinate effectively.",
        jumbled: ["concern:", "completely", "effectively.", "collaboration", "make", "coordinate", "flexible", "harder", "one", "He", "cross-team", "might", "scheduling", "meetings", "raises", "whether", "to"],
      },
      {
        target: "I explain that the proposal actually addresses this, suggesting department-level coordination rather than fully individual, unstructured flexibility.",
        jumbled: ["individual,", "this,", "suggesting", "the", "proposal", "fully", "rather", "that", "addresses", "coordination", "I", "flexibility.", "unstructured", "explain", "than", "actually", "department-level"],
      },
      {
        target: "He reconsiders the document, acknowledging he'd initially misread that particular section during his first review.",
        jumbled: ["initially", "he'd", "particular", "misread", "the", "review.", "reconsiders", "acknowledging", "section", "document,", "He", "during", "first", "that", "his"],
      },
      {
        target: "Given this clarification, he seems considerably more receptive, mentioning this addresses his primary concern about maintaining operational coherence.",
        jumbled: ["more", "clarification,", "receptive,", "this", "he", "concern", "addresses", "considerably", "primary", "operational", "about", "his", "seems", "coherence.", "Given", "mentioning", "maintaining", "this"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about clarifying a misunderstanding during an important discussion.",
    mySentenceExample: "I clarified a misunderstanding during the important discussion.",
  },
  {
    number: 7,
    title: "Approval with Conditions",
    image: null,
    imageNote: "Mr. Castellano signing off on a document, Adaeze looking relieved and pleased across the desk.",
    story:
      "Mr. Castellano approves the proposal for a three-month trial period, with a formal review scheduled afterward to assess its actual effectiveness. He asks that I personally track specific metrics during the trial, ensuring the company has clear data for the final decision. I agree readily, recognizing that this responsibility, while additional work, also gives me genuine ownership over the outcome. \"Thank you, Adaeze, for bringing forward a well-researched, professionally presented proposal,\" he says, rather than informal, unstructured complaints. Leaving his office, I feel genuinely proud, not just of the approval, but of the entire process that led here.",
    questions: [
      { text: "What does Mr. Castellano approve?", answer: "A three-month trial period." },
      { text: "What does Mr. Castellano ask Adaeze to do during the trial?", answer: "Personally track specific metrics." },
      { text: "What does Mr. Castellano thank Adaeze for?", answer: "Bringing forward a well-researched, professional proposal." },
    ],
    trueFalse: [
      { text: "Mr. Castellano approves a three-month trial period.", answer: true },
      { text: "Mr. Castellano asks Adaeze to personally track specific metrics.", answer: true },
      { text: "Adaeze refuses to take on this additional responsibility.", answer: false },
      { text: "Mr. Castellano thanks her for a well-researched proposal.", answer: true },
      { text: "Adaeze feels genuinely proud of the entire process.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Castellano approves the proposal for a three-month trial period, with a formal review scheduled afterward to assess its actual effectiveness.",
        jumbled: ["review", "formal", "trial", "Castellano", "proposal", "to", "with", "three-month", "its", "period,", "actual", "assess", "a", "effectiveness.", "scheduled", "a", "Mr.", "approves", "afterward", "the", "for"],
      },
      {
        target: "He asks that I personally track specific metrics during the trial, ensuring the company has clear data for the final decision.",
        jumbled: ["has", "I", "for", "decision.", "track", "the", "final", "asks", "company", "clear", "metrics", "the", "trial,", "during", "that", "the", "personally", "ensuring", "data", "He", "specific"],
      },
      {
        target: "I agree readily, recognizing that this responsibility, while additional work, also gives me genuine ownership over the outcome.",
        jumbled: ["this", "additional", "readily,", "genuine", "agree", "me", "recognizing", "responsibility,", "the", "I", "gives", "work,", "ownership", "outcome.", "also", "that", "over", "while"],
      },
      {
        target: "\"Thank you, Adaeze, for bringing forward a well-researched, professionally presented proposal,\" he says, rather than informal, unstructured complaints.",
        jumbled: ["forward", "complaints.", "well-researched,", "informal,", "proposal,\"", "bringing", "for", "\"Thank", "than", "Adaeze,", "presented", "rather", "a", "unstructured", "he", "professionally", "says,", "you,"],
      },
      {
        target: "Leaving his office, I feel genuinely proud, not just of the approval, but of the entire process that led here.",
        jumbled: ["the", "of", "not", "genuinely", "of", "his", "I", "led", "Leaving", "approval,", "just", "the", "here.", "proud,", "but", "process", "feel", "office,", "that", "entire"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about receiving approval for a proposal you worked hard to prepare.",
    mySentenceExample: "I received approval for the proposal I worked hard to prepare.",
  },
  {
    number: 8,
    title: "Tracking the Trial",
    image: null,
    imageNote: "Adaeze at her desk reviewing a spreadsheet tracking productivity and satisfaction metrics during the trial period.",
    story:
      "Throughout the trial period, I track productivity metrics and collect brief, informal feedback from employees about how the flexibility feels in practice. Most feedback is overwhelmingly positive, with several employees mentioning genuine improvements to their work-life balance and overall morale. A few minor scheduling conflicts arise, though department coordination generally resolves these without significant disruption to broader projects. I document everything carefully, wanting the final review to reflect an accurate, comprehensive picture rather than selective, favorable anecdotes alone. This tracking process, though time-consuming, ensures the eventual decision will be grounded in genuine evidence, not simply my own advocacy. \"Keep it thorough, Adaeze,\" I remind myself, updating the spreadsheet once more.",
    questions: [
      { text: "What does Adaeze track throughout the trial period?", answer: "Productivity metrics and employee feedback." },
      { text: "How does most feedback turn out?", answer: "Overwhelmingly positive." },
      { text: "Why does Adaeze document everything carefully?", answer: "To ensure an accurate, comprehensive picture, not selective anecdotes." },
    ],
    trueFalse: [
      { text: "Adaeze tracks productivity metrics and collects employee feedback.", answer: true },
      { text: "Most feedback is overwhelmingly positive.", answer: true },
      { text: "A few minor scheduling conflicts arise during the trial.", answer: true },
      { text: "Adaeze only documents selective, favorable feedback.", answer: false },
      { text: "This tracking ensures the decision is grounded in genuine evidence.", answer: true },
    ],
    buildSentence: [
      {
        target: "Throughout the trial period, I track productivity metrics and collect brief, informal feedback from employees about how the flexibility feels in practice.",
        jumbled: ["informal", "metrics", "productivity", "the", "brief,", "how", "collect", "Throughout", "about", "from", "employees", "feels", "the", "I", "and", "practice.", "flexibility", "in", "track", "feedback", "period,", "trial"],
      },
      {
        target: "Most feedback is overwhelmingly positive, with several employees mentioning genuine improvements to their work-life balance and overall morale.",
        jumbled: ["several", "feedback", "Most", "with", "employees", "overwhelmingly", "positive,", "morale.", "improvements", "to", "is", "overall", "genuine", "balance", "their", "mentioning", "work-life", "and"],
      },
      {
        target: "A few minor scheduling conflicts arise, though department coordination generally resolves these without significant disruption to broader projects.",
        jumbled: ["these", "though", "resolves", "without", "few", "broader", "to", "generally", "projects.", "significant", "disruption", "conflicts", "A", "scheduling", "department", "arise,", "coordination", "minor"],
      },
      {
        target: "I document everything carefully, wanting the final review to reflect an accurate, comprehensive picture rather than selective, favorable anecdotes alone.",
        jumbled: ["comprehensive", "selective,", "accurate,", "review", "reflect", "picture", "than", "the", "to", "final", "I", "wanting", "alone.", "document", "favorable", "rather", "everything", "carefully,", "an", "anecdotes"],
      },
      {
        target: "This tracking process, though time-consuming, ensures the eventual decision will be grounded in genuine evidence, not simply my own advocacy.",
        jumbled: ["though", "in", "This", "simply", "will", "decision", "genuine", "own", "tracking", "be", "time-consuming,", "evidence,", "grounded", "my", "process,", "ensures", "not", "advocacy.", "eventual", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about tracking results carefully during a trial period.",
    mySentenceExample: "I tracked results carefully throughout the trial period.",
  },
  {
    number: 9,
    title: "The Final Review",
    image: null,
    imageNote: "Adaeze presenting a summary report to Mr. Castellano and a small leadership group, all reviewing charts together.",
    story:
      "At the final review meeting, I present a comprehensive summary of the trial's outcomes, including both the positive results and minor challenges encountered. Mr. Castellano and the broader leadership team review the data carefully, asking thoughtful questions about long-term sustainability and potential edge cases. Given the overwhelmingly positive results, leadership decides to formally adopt the flexible scheduling policy company-wide, effective the following month. \"This decision was considerably easier because of Adaeze's thorough, evidence-based approach,\" Mr. Castellano publicly credits. Hearing this acknowledgment, I feel that months of careful preparation had genuinely culminated in something meaningful.",
    questions: [
      { text: "What does Adaeze present at the final review meeting?", answer: "A comprehensive summary of the trial's outcomes." },
      { text: "What does leadership decide given the results?", answer: "To formally adopt the flexible scheduling policy company-wide." },
      { text: "What does Mr. Castellano publicly credit?", answer: "Adaeze's thorough, evidence-based approach." },
    ],
    trueFalse: [
      { text: "Adaeze presents a comprehensive summary of the trial's outcomes.", answer: true },
      { text: "Leadership decides to formally adopt the policy company-wide.", answer: true },
      { text: "Mr. Castellano credits Adaeze's thorough, evidence-based approach.", answer: true },
      { text: "Leadership decides to reject the proposal entirely.", answer: false },
      { text: "Adaeze feels months of preparation culminated in something meaningful.", answer: true },
    ],
    buildSentence: [
      {
        target: "At the final review meeting, I present a comprehensive summary of the trial's outcomes, including both the positive results and minor challenges encountered.",
        jumbled: ["comprehensive", "outcomes,", "a", "trial's", "positive", "both", "and", "of", "challenges", "minor", "the", "summary", "results", "the", "I", "final", "At", "present", "review", "the", "including", "encountered.", "meeting,"],
      },
      {
        target: "Mr. Castellano and the broader leadership team review the data carefully, asking thoughtful questions about long-term sustainability and potential edge cases.",
        jumbled: ["asking", "the", "data", "and", "and", "carefully,", "thoughtful", "review", "about", "sustainability", "broader", "long-term", "Mr.", "leadership", "cases.", "questions", "edge", "potential", "the", "Castellano", "team"],
      },
      {
        target: "Given the overwhelmingly positive results, leadership decides to formally adopt the flexible scheduling policy company-wide, effective the following month.",
        jumbled: ["to", "company-wide,", "leadership", "the", "decides", "month.", "Given", "positive", "flexible", "scheduling", "results,", "overwhelmingly", "the", "following", "the", "effective", "adopt", "policy", "formally"],
      },
      {
        target: "\"This decision was considerably easier because of Adaeze's thorough, evidence-based approach,\" Mr. Castellano publicly credits.",
        jumbled: ["\"This", "was", "Mr.", "decision", "of", "easier", "approach,\"", "evidence-based", "credits.", "thorough,", "considerably", "Castellano", "publicly", "because", "Adaeze's"],
      },
      {
        target: "Hearing this acknowledgment, I feel that months of careful preparation had genuinely culminated in something meaningful.",
        jumbled: ["something", "culminated", "meaningful.", "I", "of", "careful", "feel", "acknowledgment,", "preparation", "had", "in", "this", "genuinely", "months", "Hearing", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a proposal being fully adopted after months of careful preparation.",
    mySentenceExample: "The proposal was fully adopted after months of careful preparation.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Adaeze sitting at her desk, the original survey data and final approved policy document both visible, reflecting quietly.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I simply complained informally rather than proposing something structured. If I had raised this concern casually, without evidence or a clear recommendation, leadership likely would have had little reason to act. Instead, researching thoroughly, writing formally, and tracking results transparently allowed this idea to become genuine, lasting policy. I've learned that advocating for meaningful change at work requires more than identifying a problem; it requires proposing a workable solution. In the end, this experience taught me that patient, evidence-based persistence can genuinely transform how an entire organization operates. \"You did this the right way, Adaeze,\" I tell myself, filing the approved policy document away.",
    questions: [
      { text: "What does Adaeze realize looking back on the process?", answer: "How differently things might have gone had she complained informally." },
      { text: "What might have happened if she had simply complained informally?", answer: "Leadership likely would have had little reason to act." },
      { text: "What has Adaeze learned about advocating for meaningful change?", answer: "That it requires proposing a workable solution, not just identifying a problem." },
    ],
    trueFalse: [
      { text: "Adaeze realizes things might have gone differently without structure.", answer: true },
      { text: "Complaining informally without evidence likely wouldn't have prompted action.", answer: true },
      { text: "Adaeze believes identifying a problem alone is usually enough.", answer: false },
      { text: "Adaeze learns advocating for change requires proposing a workable solution.", answer: true },
      { text: "Adaeze learns patient, evidence-based persistence can transform an organization.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire process, I realize how differently things might have unfolded had I simply complained informally rather than proposing something structured.",
        jumbled: ["things", "I", "process,", "on", "simply", "rather", "entire", "how", "proposing", "informally", "than", "something", "I", "had", "Looking", "unfolded", "the", "differently", "complained", "might", "have", "back", "realize", "structured."],
      },
      {
        target: "Without evidence or a clear recommendation, leadership likely would have had little reason to act.",
        jumbled: ["leadership", "act.", "a", "would", "had", "to", "little", "or", "recommendation,", "have", "likely", "clear", "reason", "Without", "evidence"],
      },
      {
        target: "Instead, researching thoroughly, writing formally, and tracking results transparently allowed this idea to become genuine, lasting policy.",
        jumbled: ["this", "researching", "formally,", "transparently", "lasting", "Instead,", "become", "and", "tracking", "writing", "allowed", "idea", "to", "policy.", "genuine,", "results", "thoroughly,"],
      },
      {
        target: "I've learned that advocating for meaningful change at work requires more than identifying a problem; it requires proposing a workable solution.",
        jumbled: ["solution.", "that", "workable", "more", "it", "a", "requires", "a", "than", "requires", "learned", "at", "identifying", "meaningful", "for", "I've", "proposing", "advocating", "work", "change", "problem;"],
      },
      {
        target: "In the end, this experience taught me that patient, evidence-based persistence can genuinely transform how an entire organization operates.",
        jumbled: ["evidence-based", "the", "can", "me", "experience", "organization", "genuinely", "entire", "transform", "end,", "how", "patient,", "an", "In", "this", "taught", "persistence", "operates.", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from proposing a well-researched change at work.",
    mySentenceExample: "I learned that proposing a well-researched change can transform a workplace.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
