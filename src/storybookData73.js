// B2 Adults digital storybook, Book 73: "Negotiating a Salary Raise"
// Static content -- no Supabase. First book in a new B2 Adults batch
// (Books 73-80) -- Adults has been A1/A2/B1-only until now; this is
// the first B2 Adults content. Calibrated to the sourced B2 Adults
// spec (see memory project_b2_level_jump_and_approach): negotiation/
// mediation core drive, "instrumental relevance," full B2 grammar
// range (past perfect, present perfect + continuous, full modal
// nuance including may/might/ought to, first/second/selective-third
// conditional), explicit discourse markers (however, moreover,
// nevertheless, given that, in light of, as a result), and genre-
// aware writing woven into the narrative -- distinct register from
// the B1 Adults batch (57-64), which centered on service/incident
// resolution rather than deliberate negotiation. Adults-track shape:
// 3 questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image left null per chapter.
import coverImg from "./assets/storybook73/cover.jpg";

export const STORYBOOK_TITLE = "Negotiating a Salary Raise";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Naomi sitting at her desk reviewing printed notes before a meeting, a calendar reminder for 'Salary Review' visible on her monitor.";

export const CHARACTERS = [
  { name: "Naomi", role: "The narrator, a mid-level analyst preparing to negotiate a raise", look: "Blazer, organized folder of notes, composed but visibly nervous." },
  { name: "Mr. Delacroix", role: "Naomi's department director", look: "Measured, values preparation, respects direct but respectful negotiation." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Deciding to Ask",
    image: null,
    imageNote: "Naomi sitting at her desk after hours, reviewing a spreadsheet of her recent project contributions.",
    story:
      "After reviewing my contributions over the past year, I conclude that my current salary no longer reflects my actual responsibilities. I'd taken on two major projects beyond my original role, yet my compensation hadn't been adjusted to account for either. Colleagues in similar positions, I'd discreetly learned, were earning noticeably more, which only reinforced my growing sense that something needed addressing. Rather than simply feeling resentful, I decide the more productive path is requesting a formal conversation about compensation. Given how uncomfortable this conversation might become, I know I'll need to prepare far more thoroughly than I initially assumed. \"One step at a time, Naomi,\" I murmur to myself, opening a blank document to begin planning.",
    questions: [
      { text: "What does Naomi conclude after reviewing her contributions?", answer: "That her salary no longer reflects her actual responsibilities." },
      { text: "What had Naomi taken on beyond her original role?", answer: "Two major projects." },
      { text: "What does Naomi decide to do instead of feeling resentful?", answer: "Request a formal conversation about compensation." },
    ],
    trueFalse: [
      { text: "Naomi concludes her salary no longer reflects her responsibilities.", answer: true },
      { text: "Naomi had taken on two major projects beyond her original role.", answer: true },
      { text: "Naomi learned colleagues in similar positions were earning less.", answer: false },
      { text: "Naomi decides to request a formal conversation about compensation.", answer: true },
      { text: "Naomi knows this conversation will require thorough preparation.", answer: true },
    ],
    buildSentence: [
      {
        target: "I conclude that my current salary no longer reflects my actual responsibilities.",
        jumbled: ["my", "conclude", "actual", "responsibilities.", "longer", "that", "reflects", "current", "no", "my", "salary", "I"],
      },
      {
        target: "I'd taken on two major projects beyond my original role, yet my compensation hadn't been adjusted to account for either.",
        jumbled: ["yet", "to", "compensation", "my", "on", "original", "either.", "major", "beyond", "adjusted", "for", "two", "hadn't", "role,", "I'd", "my", "taken", "been", "account", "projects"],
      },
      {
        target: "Colleagues in similar positions, I'd discreetly learned, were earning noticeably more, which only reinforced my growing sense that something needed addressing.",
        jumbled: ["learned,", "which", "I'd", "Colleagues", "needed", "positions,", "discreetly", "sense", "noticeably", "more,", "growing", "similar", "were", "that", "reinforced", "only", "addressing.", "earning", "in", "my", "something"],
      },
      {
        target: "Rather than simply feeling resentful, I decide the more productive path is requesting a formal conversation about compensation.",
        jumbled: ["the", "a", "is", "path", "about", "productive", "simply", "feeling", "decide", "Rather", "than", "I", "more", "compensation.", "requesting", "conversation", "resentful,", "formal"],
      },
      {
        target: "Given how uncomfortable this conversation might become, I know I'll need to prepare far more thoroughly than I initially assumed.",
        jumbled: ["become,", "uncomfortable", "need", "know", "I", "initially", "this", "I", "Given", "thoroughly", "how", "prepare", "more", "I'll", "assumed.", "to", "might", "far", "conversation", "than"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about deciding to have a difficult professional conversation instead of staying silent.",
    mySentenceExample: "I decided to have a difficult conversation instead of staying silent.",
  },
  {
    number: 2,
    title: "Building the Case",
    image: null,
    imageNote: "Naomi at her desk compiling a document, screenshots of project outcomes and metrics pinned to a corkboard beside her.",
    story:
      "Over the following week, I compile concrete evidence: project outcomes, measurable metrics, and written feedback from clients I'd worked with directly. I research typical salary ranges for my role and experience level, ensuring my request would be grounded in data rather than assumption. Moreover, I draft a clear summary of my expanded responsibilities, framing them not as complaints but as evidence of growth. I rehearse explaining this calmly, anticipating that Mr. Delacroix might push back or request additional justification. \"Stay factual, Naomi,\" I remind myself, rehearsing my opening lines one more time. Having built what feels like a genuinely solid case, I schedule a meeting for the following Thursday afternoon.",
    questions: [
      { text: "What does Naomi compile over the following week?", answer: "Concrete evidence -- project outcomes, metrics, and client feedback." },
      { text: "What does Naomi research to ground her request?", answer: "Typical salary ranges for her role and experience." },
      { text: "What does Naomi anticipate Mr. Delacroix might do?", answer: "Push back or request additional justification." },
    ],
    trueFalse: [
      { text: "Naomi compiles project outcomes, metrics, and client feedback.", answer: true },
      { text: "Naomi researches typical salary ranges for her role.", answer: true },
      { text: "Naomi frames her responsibilities as complaints, not growth.", answer: false },
      { text: "Naomi anticipates Mr. Delacroix might push back.", answer: true },
      { text: "Naomi schedules a meeting for the following Thursday.", answer: true },
    ],
    buildSentence: [
      {
        target: "Over the following week, I compile concrete evidence: project outcomes, measurable metrics, and written feedback from clients I'd worked with directly.",
        jumbled: ["outcomes,", "following", "from", "evidence:", "with", "written", "worked", "directly.", "the", "concrete", "I", "clients", "Over", "measurable", "week,", "compile", "project", "I'd", "and", "metrics,", "feedback"],
      },
      {
        target: "I research typical salary ranges for my role and experience level, ensuring my request would be grounded in data rather than assumption.",
        jumbled: ["salary", "role", "rather", "than", "my", "grounded", "experience", "my", "I", "research", "and", "assumption.", "typical", "data", "in", "level,", "would", "request", "be", "ranges", "for", "ensuring"],
      },
      {
        target: "Moreover, I draft a clear summary of my expanded responsibilities, framing them not as complaints but as evidence of growth.",
        jumbled: ["summary", "a", "expanded", "my", "but", "Moreover,", "of", "not", "I", "them", "evidence", "draft", "as", "growth.", "framing", "as", "of", "complaints", "clear", "responsibilities,"],
      },
      {
        target: "I rehearse explaining this calmly, anticipating that Mr. Delacroix might push back or request additional justification.",
        jumbled: ["calmly,", "rehearse", "explaining", "this", "back", "additional", "or", "Delacroix", "Mr.", "anticipating", "push", "justification.", "request", "I", "might", "that"],
      },
      {
        target: "Having built what feels like a genuinely solid case, I schedule a meeting for the following Thursday afternoon.",
        jumbled: ["Having", "I", "for", "built", "what", "afternoon.", "a", "meeting", "feels", "like", "Thursday", "case,", "following", "schedule", "solid", "a", "genuinely", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about preparing solid evidence before making an important request.",
    mySentenceExample: "I prepared solid evidence before making an important request.",
  },
  {
    number: 3,
    title: "Walking Into the Meeting",
    image: null,
    imageNote: "Naomi sitting across from Mr. Delacroix in his office, folder open on her lap, both looking composed.",
    story:
      "Thursday arrives, and I walk into Mr. Delacroix's office feeling more prepared than nervous, which surprises me somewhat. \"Naomi, come in, please sit down,\" he says, gesturing to the chair across from his desk. I open by thanking him for his time, then present my case clearly, referencing the projects and metrics I'd compiled. He listens attentively, occasionally jotting notes, which I take as a reasonably encouraging sign initially. When I finish, he acknowledges that my contributions have indeed grown significantly beyond my original job description. However, he mentions that budget constraints this quarter may limit how much flexibility he actually has available.",
    questions: [
      { text: "How does Naomi feel walking into the meeting?", answer: "More prepared than nervous." },
      { text: "What does Naomi do when she opens the meeting?", answer: "Thanks him for his time, then presents her case." },
      { text: "What does Mr. Delacroix mention about budget constraints?", answer: "That they may limit his flexibility this quarter." },
    ],
    trueFalse: [
      { text: "Naomi feels more prepared than nervous walking in.", answer: true },
      { text: "Naomi opens by thanking Mr. Delacroix for his time.", answer: true },
      { text: "Mr. Delacroix denies that her contributions have grown.", answer: false },
      { text: "Mr. Delacroix mentions budget constraints this quarter.", answer: true },
      { text: "Mr. Delacroix listens attentively and jots notes.", answer: true },
    ],
    buildSentence: [
      {
        target: "Thursday arrives, and I walk into Mr. Delacroix's office feeling more prepared than nervous, which surprises me somewhat.",
        jumbled: ["walk", "surprises", "and", "Thursday", "me", "more", "arrives,", "Delacroix's", "prepared", "Mr.", "feeling", "somewhat.", "into", "than", "which", "office", "nervous,", "I"],
      },
      {
        target: "\"Naomi, come in, please sit down,\" he says, gesturing to the chair across from his desk.",
        jumbled: ["the", "says,", "from", "to", "he", "his", "chair", "desk.", "down,\"", "in,", "across", "\"Naomi,", "gesturing", "come", "please", "sit"],
      },
      {
        target: "I open by thanking him for his time, then present my case clearly, referencing the projects and metrics I'd compiled.",
        jumbled: ["his", "compiled.", "thanking", "I'd", "for", "then", "case", "him", "present", "time,", "projects", "I", "and", "open", "by", "metrics", "my", "referencing", "the", "clearly,"],
      },
      {
        target: "He listens attentively, occasionally jotting notes, which I take as a reasonably encouraging sign initially.",
        jumbled: ["reasonably", "as", "sign", "listens", "which", "take", "encouraging", "He", "a", "I", "jotting", "notes,", "occasionally", "attentively,", "initially."],
      },
      {
        target: "He acknowledges that my contributions have indeed grown significantly beyond my original job description.",
        jumbled: ["description.", "acknowledges", "that", "grown", "He", "have", "my", "job", "original", "beyond", "indeed", "contributions", "significantly", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about presenting a clear, well-prepared case to someone in authority.",
    mySentenceExample: "I presented a clear, well-prepared case to my manager.",
  },
  {
    number: 4,
    title: "Navigating Pushback",
    image: null,
    imageNote: "Naomi leaning forward slightly, speaking calmly, Mr. Delacroix considering thoughtfully across the desk.",
    story:
      "Rather than accepting this as a final answer, I ask whether there might be alternative options given the budget limitations he'd mentioned. He considers this, suggesting perhaps a smaller immediate increase paired with a scheduled review in six months instead. \"Let's find something that works for both of us, Naomi,\" he adds. I acknowledge this compromise seems reasonable, though I ask whether the six-month review could be formalized in writing. He agrees this seems fair, appreciating, he notes, that I'm approaching this collaboratively rather than simply demanding an outcome. This exchange, given how it unfolds, feels less like a confrontation and more like genuine problem-solving together.",
    questions: [
      { text: "What does Naomi ask instead of accepting the answer as final?", answer: "Whether there are alternative options." },
      { text: "What does Mr. Delacroix suggest as a compromise?", answer: "A smaller immediate increase with a scheduled six-month review." },
      { text: "What does Naomi ask about the six-month review?", answer: "Whether it could be formalized in writing." },
    ],
    trueFalse: [
      { text: "Naomi asks whether there might be alternative options.", answer: true },
      { text: "Mr. Delacroix suggests a smaller increase with a scheduled review.", answer: true },
      { text: "Naomi refuses to consider any compromise at all.", answer: false },
      { text: "Naomi asks whether the review could be formalized in writing.", answer: true },
      { text: "Mr. Delacroix appreciates her collaborative approach.", answer: true },
    ],
    buildSentence: [
      {
        target: "Rather than accepting this as a final answer, I ask whether there might be alternative options given the budget limitations he'd mentioned.",
        jumbled: ["a", "whether", "he'd", "limitations", "given", "final", "accepting", "options", "mentioned.", "might", "Rather", "I", "budget", "alternative", "the", "as", "ask", "be", "this", "there", "than", "answer,"],
      },
      {
        target: "He considers this, suggesting perhaps a smaller immediate increase paired with a scheduled review in six months instead.",
        jumbled: ["smaller", "with", "this,", "perhaps", "immediate", "review", "months", "paired", "a", "He", "suggesting", "six", "a", "increase", "instead.", "considers", "in", "scheduled"],
      },
      {
        target: "\"Let's find something that works for both of us, Naomi,\" he adds.",
        jumbled: ["\"Let's", "both", "that", "of", "for", "adds.", "us,", "Naomi,\"", "works", "he", "find", "something"],
      },
      {
        target: "I acknowledge this compromise seems reasonable, though I ask whether the six-month review could be formalized in writing.",
        jumbled: ["though", "this", "formalized", "I", "six-month", "compromise", "review", "could", "I", "whether", "acknowledge", "writing.", "in", "reasonable,", "be", "ask", "the", "seems"],
      },
      {
        target: "He agrees this seems fair, appreciating, he notes, that I'm approaching this collaboratively rather than simply demanding an outcome.",
        jumbled: ["rather", "this", "an", "approaching", "notes,", "appreciating,", "agrees", "he", "He", "outcome.", "collaboratively", "I'm", "seems", "this", "demanding", "simply", "fair,", "that", "than"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about proposing a compromise instead of accepting a first answer.",
    mySentenceExample: "I proposed a compromise instead of accepting the first answer.",
  },
  {
    number: 5,
    title: "Reaching an Agreement",
    image: null,
    imageNote: "Naomi and Mr. Delacroix shaking hands across the desk, both looking satisfied, a printed agreement visible on the table.",
    story:
      "We agree on the terms: a modest raise effective immediately, with a formal, documented review scheduled for six months from now. Mr. Delacroix asks his assistant to draft a written confirmation, ensuring both of us have something concrete to reference later. I thank him for his openness, and he, in turn, thanks me for approaching the conversation professionally rather than emotionally. \"Congratulations, Naomi. You handled this well,\" he says, shaking my hand. Leaving his office, I feel genuinely proud, not just of the outcome, but of how I'd managed the entire negotiation. This experience, I realize, has taught me something valuable about advocating for myself constructively.",
    questions: [
      { text: "What do Naomi and Mr. Delacroix agree on?", answer: "A modest raise now, with a documented review in six months." },
      { text: "What does Mr. Delacroix ask his assistant to do?", answer: "Draft a written confirmation." },
      { text: "How does Naomi feel leaving his office?", answer: "Genuinely proud." },
    ],
    trueFalse: [
      { text: "They agree on a modest raise with a documented six-month review.", answer: true },
      { text: "Mr. Delacroix asks his assistant to draft a written confirmation.", answer: true },
      { text: "Naomi feels disappointed leaving the office.", answer: false },
      { text: "Mr. Delacroix thanks Naomi for approaching this professionally.", answer: true },
      { text: "Naomi feels she learned something valuable about self-advocacy.", answer: true },
    ],
    buildSentence: [
      {
        target: "We agree on the terms: a modest raise effective immediately, with a formal, documented review scheduled for six months from now.",
        jumbled: ["for", "six", "documented", "raise", "months", "formal,", "agree", "terms:", "a", "modest", "the", "with", "on", "from", "immediately,", "a", "review", "effective", "scheduled", "We", "now."],
      },
      {
        target: "Mr. Delacroix asks his assistant to draft a written confirmation, ensuring both of us have something concrete to reference later.",
        jumbled: ["reference", "concrete", "later.", "draft", "Delacroix", "have", "asks", "us", "a", "written", "ensuring", "to", "his", "confirmation,", "assistant", "something", "to", "Mr.", "both", "of"],
      },
      {
        target: "I thank him for his openness, and he, in turn, thanks me for approaching the conversation professionally rather than emotionally.",
        jumbled: ["he,", "thanks", "thank", "openness,", "than", "me", "emotionally.", "his", "conversation", "for", "in", "approaching", "for", "professionally", "him", "rather", "the", "and", "turn,", "I"],
      },
      {
        target: "You handled this well,\" he says, shaking my hand.",
        jumbled: ["says,", "my", "hand.", "shaking", "handled", "You", "this", "he", "well,\""],
      },
      {
        target: "Leaving his office, I feel genuinely proud, not just of the outcome, but of how I'd managed the entire negotiation.",
        jumbled: ["Leaving", "the", "I", "just", "but", "outcome,", "entire", "genuinely", "of", "his", "managed", "office,", "how", "negotiation.", "of", "proud,", "not", "feel", "the", "I'd"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reaching a fair agreement after a professional negotiation.",
    mySentenceExample: "I reached a fair agreement after a professional negotiation.",
  },
  {
    number: 6,
    title: "Following Up in Writing",
    image: null,
    imageNote: "Naomi at her laptop, drafting a brief follow-up email summarizing the meeting's outcome.",
    story:
      "That evening, I draft a brief follow-up email to Mr. Delacroix, summarizing what we'd agreed on during our meeting. I keep the tone professional and appreciative, avoiding anything that might seem presumptuous or overly casual in writing. In the email, I reference the six-month review date specifically, ensuring there's a clear, shared record of our agreement. I also thank him again, noting that I genuinely appreciated his willingness to discuss this openly rather than dismissing my request outright. I close with \"Best regards, Naomi\" and read the message once more before sending. Sending the email, I feel satisfied that I'd handled this negotiation thoroughly, from preparation through to written follow-up.",
    questions: [
      { text: "What does Naomi draft that evening?", answer: "A follow-up email." },
      { text: "What tone does Naomi keep in the email?", answer: "Professional and appreciative." },
      { text: "What does Naomi reference specifically in the email?", answer: "The six-month review date." },
    ],
    trueFalse: [
      { text: "Naomi drafts a brief follow-up email that evening.", answer: true },
      { text: "Naomi keeps the tone professional and appreciative.", answer: true },
      { text: "Naomi avoids mentioning the six-month review date at all.", answer: false },
      { text: "Naomi thanks Mr. Delacroix again in the email.", answer: true },
      { text: "Naomi feels satisfied she handled this thoroughly.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, I draft a brief follow-up email to Mr. Delacroix, summarizing what we'd agreed on during our meeting.",
        jumbled: ["our", "email", "during", "Delacroix,", "on", "brief", "I", "what", "follow-up", "meeting.", "Mr.", "we'd", "draft", "a", "to", "summarizing", "agreed", "evening,", "That"],
      },
      {
        target: "I keep the tone professional and appreciative, avoiding anything that might seem presumptuous or overly casual in writing.",
        jumbled: ["seem", "in", "I", "and", "presumptuous", "anything", "professional", "appreciative,", "the", "that", "avoiding", "or", "writing.", "keep", "might", "tone", "casual", "overly"],
      },
      {
        target: "In the email, I reference the six-month review date specifically, ensuring there's a clear, shared record of our agreement.",
        jumbled: ["shared", "In", "record", "specifically,", "our", "a", "the", "review", "agreement.", "ensuring", "six-month", "email,", "the", "date", "there's", "I", "of", "reference", "clear,"],
      },
      {
        target: "I also thank him again, noting that I genuinely appreciated his willingness to discuss this openly rather than dismissing my request outright.",
        jumbled: ["that", "than", "genuinely", "I", "him", "willingness", "this", "appreciated", "to", "dismissing", "outright.", "rather", "noting", "my", "request", "again,", "I", "openly", "also", "discuss", "thank", "his"],
      },
      {
        target: "Sending the email, I feel satisfied that I'd handled this negotiation thoroughly, from preparation through to written follow-up.",
        jumbled: ["that", "handled", "this", "email,", "feel", "Sending", "written", "thoroughly,", "I'd", "satisfied", "negotiation", "through", "from", "follow-up.", "I", "preparation", "the", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about writing a follow-up message to confirm an agreement in writing.",
    mySentenceExample: "I wrote a follow-up message to confirm the agreement in writing.",
  },
  {
    number: 7,
    title: "Telling a Colleague",
    image: null,
    imageNote: "Naomi chatting with a colleague in the break room, both holding coffee mugs, the colleague looking impressed.",
    story:
      "During lunch, I mention the negotiation to a colleague, partly to share the outcome and partly to offer encouragement. She admits she's been considering a similar conversation herself but has felt too intimidated to actually schedule it. \"How did you even start, Naomi?\" she asks, leaning in. I explain that preparation made the biggest difference, since walking in with data rather than emotion changed the entire dynamic. Moreover, I mention that framing the conversation as collaborative, rather than confrontational, seemed to genuinely matter to how it unfolded. She thanks me for the insight, saying she now feels more confident about approaching her own manager eventually.",
    questions: [
      { text: "What does Naomi mention during lunch?", answer: "The negotiation, to a colleague." },
      { text: "What has the colleague been considering but felt intimidated by?", answer: "A similar conversation with her manager." },
      { text: "What does Naomi explain made the biggest difference?", answer: "Preparation -- walking in with data rather than emotion." },
    ],
    trueFalse: [
      { text: "Naomi mentions the negotiation to a colleague during lunch.", answer: true },
      { text: "The colleague has been considering a similar conversation herself.", answer: true },
      { text: "Naomi explains that preparation made the biggest difference.", answer: true },
      { text: "Naomi says confrontation mattered more than collaboration.", answer: false },
      { text: "The colleague feels more confident after this conversation.", answer: true },
    ],
    buildSentence: [
      {
        target: "During lunch, I mention the negotiation to a colleague, partly to share the outcome and partly to offer encouragement.",
        jumbled: ["a", "partly", "to", "I", "During", "to", "lunch,", "mention", "the", "negotiation", "partly", "the", "outcome", "colleague,", "encouragement.", "offer", "to", "and", "share"],
      },
      {
        target: "She admits she's been considering a similar conversation herself but has felt too intimidated to actually schedule it.",
        jumbled: ["a", "schedule", "it.", "similar", "too", "but", "considering", "conversation", "admits", "has", "She", "to", "herself", "actually", "intimidated", "she's", "been", "felt"],
      },
      {
        target: "\"How did you even start, Naomi?\" she asks, leaning in.",
        jumbled: ["start,", "in.", "did", "\"How", "you", "she", "even", "asks,", "Naomi?\"", "leaning"],
      },
      {
        target: "I explain that preparation made the biggest difference, since walking in with data rather than emotion changed the entire dynamic.",
        jumbled: ["in", "changed", "I", "walking", "biggest", "that", "made", "with", "entire", "than", "since", "the", "rather", "the", "preparation", "emotion", "dynamic.", "explain", "data", "difference,"],
      },
      {
        target: "Moreover, I mention that framing the conversation as collaborative, rather than confrontational, seemed to genuinely matter to how it unfolded.",
        jumbled: ["as", "conversation", "how", "the", "confrontational,", "that", "unfolded.", "to", "I", "to", "rather", "collaborative,", "genuinely", "framing", "seemed", "mention", "Moreover,", "than", "it", "matter"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about encouraging a colleague to advocate for themselves professionally.",
    mySentenceExample: "I encouraged my colleague to advocate for herself professionally.",
  },
  {
    number: 8,
    title: "The Six-Month Mark",
    image: null,
    imageNote: "Naomi sitting across from Mr. Delacroix again, six months later, a calendar visible showing the scheduled review date.",
    story:
      "Six months later, exactly as agreed, Mr. Delacroix schedules the promised review meeting to reassess my compensation once again. I arrive with updated metrics, having continued documenting my contributions since our original conversation months earlier. He reviews everything carefully, then confirms that the additional raise we'd discussed will indeed take effect starting next month. \"Well done, Naomi,\" he adds, closing the folder. I thank him, noting how much I'd appreciated that this agreement was actually honored rather than quietly forgotten over time. This follow-through, more than the raise itself, reinforces my trust in approaching future negotiations directly and professionally.",
    questions: [
      { text: "What does Mr. Delacroix schedule six months later?", answer: "The promised review meeting." },
      { text: "What does Naomi arrive with?", answer: "Updated metrics." },
      { text: "What does Mr. Delacroix confirm at the review?", answer: "That the additional raise will take effect next month." },
    ],
    trueFalse: [
      { text: "Mr. Delacroix schedules the promised review meeting six months later.", answer: true },
      { text: "Naomi arrives with updated metrics.", answer: true },
      { text: "Mr. Delacroix confirms the additional raise will take effect.", answer: true },
      { text: "The agreement was quietly forgotten over time.", answer: false },
      { text: "This follow-through reinforces Naomi's trust in future negotiations.", answer: true },
    ],
    buildSentence: [
      {
        target: "Six months later, exactly as agreed, Mr. Delacroix schedules the promised review meeting to reassess my compensation once again.",
        jumbled: ["as", "agreed,", "exactly", "months", "reassess", "schedules", "my", "the", "once", "Six", "Mr.", "again.", "review", "meeting", "later,", "compensation", "to", "promised", "Delacroix"],
      },
      {
        target: "I arrive with updated metrics, having continued documenting my contributions since our original conversation months earlier.",
        jumbled: ["contributions", "updated", "since", "my", "metrics,", "arrive", "months", "having", "I", "our", "earlier.", "original", "conversation", "documenting", "with", "continued"],
      },
      {
        target: "He reviews everything carefully, then confirms that the additional raise we'd discussed will indeed take effect starting next month.",
        jumbled: ["additional", "He", "take", "discussed", "reviews", "starting", "indeed", "will", "everything", "month.", "carefully,", "next", "we'd", "the", "that", "confirms", "effect", "raise", "then"],
      },
      {
        target: "\"Well done, Naomi,\" he adds, closing the folder.",
        jumbled: ["\"Well", "adds,", "folder.", "he", "the", "Naomi,\"", "done,", "closing"],
      },
      {
        target: "I thank him, noting how much I'd appreciated that this agreement was actually honored rather than quietly forgotten over time.",
        jumbled: ["over", "appreciated", "time.", "thank", "noting", "much", "honored", "quietly", "was", "I", "agreement", "how", "this", "actually", "than", "forgotten", "that", "rather", "him,", "I'd"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an agreement being honored exactly as promised.",
    mySentenceExample: "The agreement was honored exactly as promised six months later.",
  },
  {
    number: 9,
    title: "Mentoring Someone Else",
    image: null,
    imageNote: "Naomi sitting with a junior colleague, reviewing a document together, offering guidance on preparing a similar case.",
    story:
      "A junior colleague, having heard about my experience secondhand, asks if I'd help her prepare for her own upcoming compensation conversation. \"Naomi, do you have a few minutes? I could really use your advice,\" she asks. I agree, walking her through how I'd compiled evidence, researched salary ranges, and anticipated potential pushback beforehand. She admits she'd assumed negotiating meant being aggressive, which had made her avoid the conversation entirely until now. I explain that, in my experience, framing the conversation collaboratively, rather than combatively, tends to produce better long-term outcomes. Watching her leave feeling more confident, I realize this negotiation taught me something worth passing forward to others.",
    questions: [
      { text: "What does the junior colleague ask Naomi for help with?", answer: "Preparing for her own compensation conversation." },
      { text: "What does Naomi walk her through?", answer: "How she compiled evidence, researched ranges, and anticipated pushback." },
      { text: "What had the colleague assumed negotiating meant?", answer: "Being aggressive." },
    ],
    trueFalse: [
      { text: "A junior colleague asks Naomi to help her prepare.", answer: true },
      { text: "Naomi walks her through evidence, research, and anticipating pushback.", answer: true },
      { text: "The colleague had assumed negotiating meant being aggressive.", answer: true },
      { text: "Naomi advises approaching this combatively rather than collaboratively.", answer: false },
      { text: "Naomi realizes this lesson is worth passing forward to others.", answer: true },
    ],
    buildSentence: [
      {
        target: "A junior colleague, having heard about my experience secondhand, asks if I'd help her prepare for her own upcoming compensation conversation.",
        jumbled: ["I'd", "secondhand,", "asks", "A", "if", "compensation", "experience", "colleague,", "upcoming", "for", "heard", "conversation.", "own", "help", "about", "having", "junior", "my", "her", "her", "prepare"],
      },
      {
        target: "\"Naomi, do you have a few minutes?",
        jumbled: ["have", "\"Naomi,", "minutes?", "you", "few", "do", "a"],
      },
      {
        target: "I agree, walking her through how I'd compiled evidence, researched salary ranges, and anticipated potential pushback beforehand.",
        jumbled: ["anticipated", "and", "walking", "compiled", "researched", "through", "salary", "evidence,", "ranges,", "beforehand.", "I'd", "her", "agree,", "how", "pushback", "potential", "I"],
      },
      {
        target: "She admits she'd assumed negotiating meant being aggressive, which had made her avoid the conversation entirely until now.",
        jumbled: ["made", "conversation", "She", "meant", "now.", "negotiating", "the", "aggressive,", "being", "her", "entirely", "until", "had", "avoid", "she'd", "which", "admits", "assumed"],
      },
      {
        target: "I explain that, in my experience, framing the conversation collaboratively, rather than combatively, tends to produce better long-term outcomes.",
        jumbled: ["experience,", "long-term", "produce", "explain", "than", "in", "that,", "outcomes.", "my", "the", "combatively,", "framing", "I", "better", "to", "collaboratively,", "tends", "conversation", "rather"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about passing along something valuable you learned to help someone else.",
    mySentenceExample: "I passed along something valuable I learned to help a colleague.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Naomi sitting at her desk, reflecting quietly, the original folder of evidence now filed away neatly on a shelf.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had I approached this out of frustration rather than preparation. If I had simply demanded a raise without evidence, Mr. Delacroix may have reasonably felt pressured rather than genuinely persuaded. Instead, building a thorough case and remaining open to compromise allowed us to reach an outcome that respected us both. I've learned that negotiation, at its best, isn't about winning against someone, but about solving a shared problem together. In the end, this experience taught me that advocating for myself professionally requires patience just as much as confidence. \"You did this the right way, Naomi,\" I tell myself, filing the folder away for good.",
    questions: [
      { text: "What does Naomi realize looking back on the process?", answer: "How differently things might have gone had she approached it from frustration." },
      { text: "What might have happened if she had demanded a raise without evidence?", answer: "Mr. Delacroix may have felt pressured rather than persuaded." },
      { text: "What has Naomi learned about negotiation at its best?", answer: "That it's about solving a shared problem together, not winning against someone." },
    ],
    trueFalse: [
      { text: "Naomi realizes things might have gone differently without preparation.", answer: true },
      { text: "Demanding without evidence might have felt pressuring rather than persuasive.", answer: true },
      { text: "Naomi believes negotiation is about winning against someone.", answer: false },
      { text: "Naomi learns negotiation is about solving a shared problem together.", answer: true },
      { text: "Naomi learns advocating for herself requires patience and confidence.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire process, I realize how differently things might have unfolded had I approached this out of frustration rather than preparation.",
        jumbled: ["how", "preparation.", "out", "process,", "differently", "rather", "realize", "back", "I", "the", "things", "unfolded", "might", "of", "Looking", "on", "than", "I", "entire", "this", "frustration", "approached", "had", "have"],
      },
      {
        target: "Mr. Delacroix may have reasonably felt pressured rather than genuinely persuaded.",
        jumbled: ["have", "rather", "may", "reasonably", "than", "felt", "Delacroix", "persuaded.", "genuinely", "Mr.", "pressured"],
      },
      {
        target: "Instead, building a thorough case and remaining open to compromise allowed us to reach an outcome that respected us both.",
        jumbled: ["outcome", "us", "respected", "building", "to", "and", "compromise", "both.", "a", "case", "allowed", "thorough", "reach", "us", "to", "that", "remaining", "an", "open", "Instead,"],
      },
      {
        target: "I've learned that negotiation, at its best, isn't about winning against someone, but about solving a shared problem together.",
        jumbled: ["learned", "someone,", "its", "but", "that", "winning", "a", "about", "shared", "isn't", "solving", "negotiation,", "at", "problem", "best,", "together.", "I've", "about", "against"],
      },
      {
        target: "In the end, this experience taught me that advocating for myself professionally requires patience just as much as confidence.",
        jumbled: ["requires", "In", "taught", "confidence.", "as", "this", "experience", "professionally", "for", "end,", "me", "that", "as", "advocating", "just", "the", "myself", "patience", "much"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating something important professionally.",
    mySentenceExample: "I learned that professional negotiation requires patience and preparation.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
