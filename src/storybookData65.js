// B2 Teens digital storybook, Book 65: "The Uniform Policy Vote"
// Static content -- no Supabase. First book in a new B2 Teens batch
// (Books 65-72) -- Teens has been A1/A2/B1 until now; this is the
// first B2 Teens content. Calibrated to the sourced B2 Teens spec
// (see memory project_b2_level_jump_and_approach): the B1->B2 jump
// means longer/more abstract topics, real mediation (comparing
// viewpoints, finding common ground, not just personal opinion),
// fuller grammar -- narrative tenses with past perfect, present
// perfect + continuous, full modal nuance (may/ought to/should/must/
// might/could/have to), first/second/selective-third conditional,
// and real discourse markers (nevertheless, moreover, as a result,
// in spite of, whereas, given that) -- distinct register from the B1
// Teens batch (49-56), which used simpler complex sentences and a
// narrower modal/conditional range. Same Teens-track chapter shape:
// 3 questions, 5 True/False, 5 Build-a-Sentence per chapter.
// Chapter images not generated yet -- image left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook65/cover.jpg";

export const STORYBOOK_TITLE = "The Uniform Policy Vote";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Nadia standing at a podium in a school auditorium, addressing a divided student council, two groups of students visible on opposite sides.";

export const CHARACTERS = [
  { name: "Nadia", role: "The narrator, a student council representative", look: "Blazer over her uniform, notebook always in hand, thoughtful expression." },
  { name: "Mr. Ferris", role: "The student council's faculty advisor", look: "Cardigan, glasses, encourages debate without taking sides himself." },
  { name: "Kwame", role: "A council member who supports abolishing the uniform", look: "Casual clothes even at council meetings, passionate speaker." },
  { name: "Yuna", role: "A council member who supports keeping the uniform", look: "Neat, organized, prepares detailed notes before every meeting." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Proposal Arrives",
    image: null,
    imageNote: "Nadia reading a printed proposal at a student council table, other members reacting with mixed expressions.",
    story:
      "At this week's student council meeting, Mr. Ferris announces that a formal proposal to abolish the school uniform has been submitted. Immediately, the room splits into two camps, each side already forming opinions before the discussion has even properly begun. Kwame argues passionately that uniforms suppress individual expression, while Yuna counters that they reduce visible inequality between students. As the council's newly appointed mediator, I realize I'll need to hear both sides fully before forming any conclusion myself. Mr. Ferris asks me to organize a school-wide forum, where both perspectives can be presented and genuinely considered. “Nadia, I trust you to handle this fairly,” he tells me.",
    questions: [
      { text: "What proposal does Mr. Ferris announce?", answer: "A formal proposal to abolish the school uniform." },
      { text: "What does Kwame argue about uniforms?", answer: "That they suppress individual expression." },
      { text: "What does Mr. Ferris ask Nadia to organize?", answer: "A school-wide forum." },
    ],
    trueFalse: [
      { text: "A proposal to abolish the school uniform has been submitted.", answer: true },
      { text: "Kwame argues that uniforms suppress individual expression.", answer: true },
      { text: "Yuna argues that uniforms increase inequality between students.", answer: false },
      { text: "Nadia has been appointed as the council's mediator.", answer: true },
      { text: "Mr. Ferris asks Nadia to organize a school-wide forum.", answer: true },
    ],
    buildSentence: [
      {
        target: "At this week's student council meeting, Mr. Ferris announces that a formal proposal to abolish the school uniform has been submitted.",
        jumbled: ["school", "submitted.", "council", "a", "has", "formal", "Ferris", "proposal", "student", "Mr.", "week's", "uniform", "announces", "meeting,", "that", "to", "this", "been", "abolish", "At", "the"],
      },
      {
        target: "Immediately, the room splits into two camps, each side already forming opinions before the discussion has even properly begun.",
        jumbled: ["the", "begun.", "two", "room", "camps,", "the", "splits", "before", "side", "properly", "into", "discussion", "has", "each", "forming", "already", "opinions", "Immediately,", "even"],
      },
      {
        target: "Kwame argues passionately that uniforms suppress individual expression, while Yuna counters that they reduce visible inequality between students.",
        jumbled: ["suppress", "expression,", "reduce", "they", "that", "visible", "Kwame", "between", "inequality", "individual", "uniforms", "counters", "that", "students.", "Yuna", "argues", "while", "passionately"],
      },
      {
        target: "I realize I'll need to hear both sides fully before forming any conclusion myself.",
        jumbled: ["myself.", "hear", "I'll", "I", "both", "forming", "any", "fully", "need", "conclusion", "to", "before", "realize", "sides"],
      },
      {
        target: "Mr. Ferris asks me to organize a school-wide forum, where both perspectives can be presented and genuinely considered.",
        jumbled: ["school-wide", "forum,", "to", "Ferris", "organize", "and", "Mr.", "presented", "perspectives", "where", "me", "can", "a", "both", "genuinely", "be", "considered.", "asks"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a topic where people in your school or community disagree strongly.",
    mySentenceExample: "Students disagree strongly about whether phones should be allowed in class.",
  },
  {
    number: 2,
    title: "Preparing the Forum",
    image: null,
    imageNote: "Nadia at a desk covered in sticky notes, drafting a discussion outline, laptop open beside stacks of research printouts.",
    story:
      "Preparing for the forum turns out to be considerably harder than I had originally anticipated when I first agreed to organize it. “Nadia, you have no idea what you signed up for,” I think, half-joking. I research uniform policies at other schools, discovering that the arguments on both sides are more nuanced than I'd initially assumed. Some studies suggest uniforms genuinely reduce social pressure around clothing, whereas others argue they simply shift that pressure toward other visible markers instead. I draft discussion questions carefully, trying to ensure neither side would feel dismissed or unfairly represented during the actual event. By the time I finish, I've developed a far more complicated view of the issue than I'd expected.",
    questions: [
      { text: "How does preparing for the forum turn out to be?", answer: "Considerably harder than expected." },
      { text: "What does Nadia discover about the arguments on both sides?", answer: "That they're more nuanced than she'd assumed." },
      { text: "What does Nadia try to ensure with her discussion questions?", answer: "That neither side would feel dismissed." },
    ],
    trueFalse: [
      { text: "Preparing for the forum is harder than Nadia anticipated.", answer: true },
      { text: "Nadia researches uniform policies at other schools.", answer: true },
      { text: "Some studies suggest uniforms reduce social pressure around clothing.", answer: true },
      { text: "Nadia decides the issue is actually quite simple.", answer: false },
      { text: "Nadia tries to ensure neither side feels dismissed.", answer: true },
    ],
    buildSentence: [
      {
        target: "Preparing for the forum turns out to be considerably harder than I had originally anticipated when I first agreed to organize it.",
        jumbled: ["originally", "anticipated", "I", "when", "be", "I", "for", "it.", "to", "the", "agreed", "considerably", "turns", "forum", "had", "than", "out", "organize", "harder", "Preparing", "first", "to"],
      },
      {
        target: "“Nadia, you have no idea what you signed up for,” I think, half-joking.",
        jumbled: ["I", "half-joking.", "think,", "idea", "“Nadia,", "you", "you", "up", "no", "what", "signed", "have", "for,”"],
      },
      {
        target: "I research uniform policies at other schools, discovering that the arguments on both sides are more nuanced than I'd initially assumed.",
        jumbled: ["research", "nuanced", "arguments", "that", "at", "than", "I", "schools,", "assumed.", "more", "other", "both", "sides", "on", "I'd", "the", "are", "uniform", "policies", "initially", "discovering"],
      },
      {
        target: "Some studies suggest uniforms genuinely reduce social pressure around clothing, whereas others argue they simply shift that pressure toward other visible markers instead.",
        jumbled: ["simply", "social", "instead.", "shift", "markers", "other", "argue", "they", "toward", "uniforms", "whereas", "pressure", "studies", "that", "genuinely", "suggest", "visible", "others", "clothing,", "around", "reduce", "Some", "pressure"],
      },
      {
        target: "I draft discussion questions carefully, trying to ensure neither side would feel dismissed or unfairly represented during the actual event.",
        jumbled: ["feel", "discussion", "questions", "the", "would", "event.", "to", "draft", "neither", "ensure", "or", "side", "carefully,", "trying", "I", "during", "unfairly", "actual", "represented", "dismissed"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about researching an issue and discovering it was more complicated than you expected.",
    mySentenceExample: "I researched the issue and discovered it was more complicated than expected.",
  },
  {
    number: 3,
    title: "The Forum Begins",
    image: null,
    imageNote: "A packed school auditorium, Nadia standing at the front moderating as Kwame and Yuna sit facing the audience.",
    story:
      "The auditorium fills quickly, with far more students attending than I had honestly expected for a policy discussion. I open the forum by explaining the ground rules: respectful language, no interrupting, and genuine listening rather than simply waiting to respond. Kwame speaks first, describing how the uniform had made him feel invisible throughout his early years at the school. Yuna follows, explaining that before uniforms were introduced, she had constantly worried about being judged for what she couldn't afford. She glances at me. “Thank you for making space for this, Nadia,” she says quietly. Listening to both accounts, I realize this debate matters more personally to people than I had initially understood.",
    questions: [
      { text: "What does Nadia explain when she opens the forum?", answer: "The ground rules: respectful language, no interrupting, genuine listening." },
      { text: "What does Kwame describe about the uniform?", answer: "That it made him feel invisible in his early years." },
      { text: "What did Yuna worry about before uniforms were introduced?", answer: "Being judged for what she couldn't afford." },
    ],
    trueFalse: [
      { text: "The auditorium fills with more students than expected.", answer: true },
      { text: "Nadia explains ground rules including respectful language.", answer: true },
      { text: "Kwame says the uniform made him feel invisible.", answer: true },
      { text: "Yuna says she never worried about being judged.", answer: false },
      { text: "Nadia realizes this debate matters more personally than she understood.", answer: true },
    ],
    buildSentence: [
      {
        target: "The auditorium fills quickly, with far more students attending than I had honestly expected for a policy discussion.",
        jumbled: ["attending", "with", "fills", "auditorium", "I", "policy", "far", "expected", "for", "had", "a", "students", "The", "than", "more", "honestly", "discussion.", "quickly,"],
      },
      {
        target: "I open the forum by explaining the ground rules: respectful language, no interrupting, and genuine listening rather than simply waiting to respond.",
        jumbled: ["genuine", "interrupting,", "than", "rather", "simply", "respond.", "explaining", "listening", "open", "I", "forum", "ground", "the", "rules:", "the", "no", "by", "waiting", "to", "respectful", "and", "language,"],
      },
      {
        target: "Yuna follows, explaining that before uniforms were introduced, she had constantly worried about being judged for what she couldn't afford.",
        jumbled: ["Yuna", "constantly", "what", "she", "for", "she", "worried", "explaining", "before", "had", "follows,", "afford.", "about", "were", "being", "couldn't", "that", "uniforms", "introduced,", "judged"],
      },
      {
        target: "She glances at me.",
        jumbled: ["She", "me.", "glances", "at"],
      },
      {
        target: "Listening to both accounts, I realize this debate matters more personally to people than I had initially understood.",
        jumbled: ["personally", "Listening", "I", "debate", "had", "to", "people", "I", "understood.", "accounts,", "both", "realize", "to", "initially", "matters", "than", "this", "more"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about listening to someone's personal experience that changed how you saw an issue.",
    mySentenceExample: "Listening to her experience changed how I saw the issue.",
  },
  {
    number: 4,
    title: "Unexpected Common Ground",
    image: null,
    imageNote: "Kwame and Yuna standing side by side at the podium, both gesturing as they explain a shared idea to the audience.",
    story:
      "Midway through the discussion, something unexpected happens: Kwame and Yuna actually begin to agree on certain underlying concerns. Both acknowledge that the real issue may not be uniforms themselves, but rather how visible economic difference feels to students generally. Yuna suggests that a more flexible dress code, with some shared elements, might address both concerns simultaneously. Kwame, somewhat surprised himself, admits this idea hadn't occurred to him before hearing Yuna's perspective directly. He looks over at me. “You really got us talking to each other, Nadia,” he admits. Watching this shift happen live, I realize mediation isn't really about choosing a winner, but about finding what both sides actually need.",
    questions: [
      { text: "What unexpected thing happens midway through the discussion?", answer: "Kwame and Yuna begin to agree on underlying concerns." },
      { text: "What do Kwame and Yuna both acknowledge?", answer: "That the real issue is how visible economic difference feels." },
      { text: "What does Yuna suggest as a possible solution?", answer: "A more flexible dress code with shared elements." },
    ],
    trueFalse: [
      { text: "Kwame and Yuna begin to agree on certain concerns.", answer: true },
      { text: "Both acknowledge the real issue may be economic difference.", answer: true },
      { text: "Yuna suggests a more flexible dress code with shared elements.", answer: true },
      { text: "Kwame says this idea had occurred to him long ago.", answer: false },
      { text: "Nadia realizes mediation is about finding what both sides need.", answer: true },
    ],
    buildSentence: [
      {
        target: "Midway through the discussion, something unexpected happens: Kwame and Yuna actually begin to agree on certain underlying concerns.",
        jumbled: ["something", "agree", "Yuna", "happens:", "certain", "through", "underlying", "actually", "to", "begin", "and", "Midway", "concerns.", "Kwame", "the", "unexpected", "on", "discussion,"],
      },
      {
        target: "Both acknowledge that the real issue may not be uniforms themselves, but rather how visible economic difference feels to students generally.",
        jumbled: ["rather", "Both", "that", "acknowledge", "students", "not", "the", "but", "may", "uniforms", "themselves,", "how", "feels", "real", "generally.", "economic", "be", "difference", "to", "issue", "visible"],
      },
      {
        target: "Yuna suggests that a more flexible dress code, with some shared elements, might address both concerns simultaneously.",
        jumbled: ["concerns", "code,", "flexible", "elements,", "Yuna", "a", "might", "dress", "more", "with", "address", "simultaneously.", "both", "that", "suggests", "some", "shared"],
      },
      {
        target: "He looks over at me.",
        jumbled: ["over", "me.", "He", "looks", "at"],
      },
      {
        target: "Watching this shift happen live, I realize mediation isn't really about choosing a winner, but about finding what both sides actually need.",
        jumbled: ["a", "this", "winner,", "isn't", "need.", "choosing", "about", "really", "finding", "shift", "mediation", "about", "live,", "but", "Watching", "happen", "actually", "both", "what", "sides", "I", "realize"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about two people with different opinions finding unexpected common ground.",
    mySentenceExample: "Two people with different opinions found unexpected common ground.",
  },
  {
    number: 5,
    title: "Opening the Floor",
    image: null,
    imageNote: "Several students in the audience raising their hands, one standing to speak into a handheld microphone.",
    story:
      "I open the floor to questions, and hands shoot up immediately from students eager to share their own perspectives. One student mentions that, given the school's diverse population, any new policy ought to be tested before being fully implemented. Another points out that whatever decision is made, some students will inevitably feel unheard, no matter how carefully it's handled. A quieter student, who rarely speaks in large groups, mentions that uniforms had actually helped her feel like she belonged somewhere. Okay, Nadia, don't let this turn into chaos, I tell myself, calling on the next raised hand. This range of viewpoints, moreover, reminds me that no single solution will satisfy absolutely everyone completely.",
    questions: [
      { text: "What happens when Nadia opens the floor to questions?", answer: "Hands shoot up immediately." },
      { text: "What does one student suggest about any new policy?", answer: "That it ought to be tested before being fully implemented." },
      { text: "What does the quieter student mention about uniforms?", answer: "That they helped her feel like she belonged." },
    ],
    trueFalse: [
      { text: "Hands shoot up immediately when Nadia opens the floor.", answer: true },
      { text: "A student suggests any new policy ought to be tested first.", answer: true },
      { text: "Another student says everyone will definitely feel heard.", answer: false },
      { text: "The quieter student says uniforms helped her feel like she belonged.", answer: true },
      { text: "Nadia realizes no single solution will satisfy everyone.", answer: true },
    ],
    buildSentence: [
      {
        target: "I open the floor to questions, and hands shoot up immediately from students eager to share their own perspectives.",
        jumbled: ["and", "students", "own", "floor", "share", "perspectives.", "hands", "from", "the", "up", "to", "I", "shoot", "their", "questions,", "eager", "to", "immediately", "open"],
      },
      {
        target: "One student mentions that, given the school's diverse population, any new policy ought to be tested before being fully implemented.",
        jumbled: ["One", "before", "population,", "that,", "student", "ought", "to", "policy", "implemented.", "any", "given", "mentions", "school's", "fully", "be", "tested", "diverse", "new", "being", "the"],
      },
      {
        target: "Another points out that whatever decision is made, some students will inevitably feel unheard, no matter how carefully it's handled.",
        jumbled: ["it's", "students", "Another", "is", "that", "points", "some", "feel", "no", "decision", "how", "unheard,", "inevitably", "matter", "handled.", "will", "carefully", "made,", "out", "whatever"],
      },
      {
        target: "A quieter student, who rarely speaks in large groups, mentions that uniforms had actually helped her feel like she belonged somewhere.",
        jumbled: ["uniforms", "student,", "in", "A", "quieter", "groups,", "mentions", "belonged", "her", "large", "helped", "like", "feel", "rarely", "that", "somewhere.", "had", "who", "actually", "speaks", "she"],
      },
      {
        target: "Okay, Nadia, don't let this turn into chaos, I tell myself, calling on the next raised hand.",
        jumbled: ["into", "Nadia,", "this", "tell", "next", "myself,", "don't", "calling", "turn", "on", "I", "hand.", "Okay,", "chaos,", "let", "the", "raised"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about hearing a range of different opinions on the same issue.",
    mySentenceExample: "I heard a range of different opinions on the same issue.",
  },
  {
    number: 6,
    title: "Drafting a Recommendation",
    image: null,
    imageNote: "Nadia, Kwame, and Yuna sitting together at a table after the forum, drafting notes collaboratively on a shared laptop.",
    story:
      "After the forum ends, Mr. Ferris asks the three of us to draft a formal recommendation summarizing what we'd actually heard. Kwame suggests we propose a flexible policy: core shared colors, but more personal freedom within those guidelines. Yuna agrees, provided we include a trial period, so the council can gather feedback before making anything permanent. “You're good at staying neutral, Nadia — you should write it,” Kwame suggests. I write the draft, careful to represent both original positions fairly, rather than favoring whichever argument I personally found stronger. Reading it back afterward, I feel genuinely proud that this reflects a synthesis, not simply one side's victory.",
    questions: [
      { text: "What does Mr. Ferris ask the three of them to draft?", answer: "A formal recommendation." },
      { text: "What does Kwame suggest proposing?", answer: "Core shared colors with more personal freedom." },
      { text: "What does Yuna agree to, provided something is included?", answer: "A trial period." },
    ],
    trueFalse: [
      { text: "Mr. Ferris asks them to draft a formal recommendation.", answer: true },
      { text: "Kwame suggests core shared colors with more personal freedom.", answer: true },
      { text: "Yuna refuses to agree to any compromise at all.", answer: false },
      { text: "Yuna agrees provided a trial period is included.", answer: true },
      { text: "Nadia feels proud this reflects a synthesis, not one side's victory.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Ferris asks the three of us to draft a formal recommendation summarizing what we'd actually heard.",
        jumbled: ["Mr.", "of", "asks", "actually", "what", "a", "the", "we'd", "to", "us", "three", "heard.", "formal", "draft", "Ferris", "recommendation", "summarizing"],
      },
      {
        target: "Kwame suggests we propose a flexible policy: core shared colors, but more personal freedom within those guidelines.",
        jumbled: ["Kwame", "personal", "propose", "flexible", "a", "guidelines.", "shared", "we", "suggests", "those", "within", "policy:", "more", "but", "core", "colors,", "freedom"],
      },
      {
        target: "Yuna agrees, provided we include a trial period, so the council can gather feedback before making anything permanent.",
        jumbled: ["Yuna", "a", "can", "permanent.", "we", "feedback", "the", "provided", "anything", "gather", "council", "so", "period,", "before", "include", "making", "trial", "agrees,"],
      },
      {
        target: "“You're good at staying neutral, Nadia — you should write it,” Kwame suggests.",
        jumbled: ["Kwame", "suggests.", "Nadia", "—", "neutral,", "it,”", "write", "you", "at", "should", "good", "staying", "“You're"],
      },
      {
        target: "I write the draft, careful to represent both original positions fairly, rather than favoring whichever argument I personally found stronger.",
        jumbled: ["draft,", "original", "I", "positions", "to", "careful", "argument", "represent", "write", "both", "fairly,", "personally", "I", "found", "favoring", "the", "than", "stronger.", "whichever", "rather"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about writing something that fairly represents two different points of view.",
    mySentenceExample: "I wrote something that fairly represented two different points of view.",
  },
  {
    number: 7,
    title: "Presenting to the Council",
    image: null,
    imageNote: "Nadia standing at the front of a full council meeting, presenting the recommendation on a projected slide.",
    story:
      "The following week, I present our recommendation to the full student council, feeling more nervous than I'd anticipated beforehand. Just breathe, Nadia, I tell myself, before beginning. As I explain the trial period and flexible-color approach, I notice several members nodding, seemingly persuaded by the reasoning behind it. One member asks whether this compromise might simply delay an inevitable, harder decision down the road. I respond honestly that it might, but that testing an idea carefully seemed wiser than deciding based on assumption alone. After some further discussion, the council votes to approve the trial period, with a review scheduled for next semester.",
    questions: [
      { text: "What does Nadia present to the full student council?", answer: "The recommendation." },
      { text: "What does one member ask about the compromise?", answer: "Whether it might just delay a harder decision." },
      { text: "What does the council vote to approve?", answer: "The trial period." },
    ],
    trueFalse: [
      { text: "Nadia presents the recommendation the following week.", answer: true },
      { text: "Several members seem persuaded by the reasoning.", answer: true },
      { text: "A member asks if this might delay a harder decision.", answer: true },
      { text: "The council refuses to vote on the proposal at all.", answer: false },
      { text: "The council approves the trial period with a scheduled review.", answer: true },
    ],
    buildSentence: [
      {
        target: "The following week, I present our recommendation to the full student council, feeling more nervous than I'd anticipated beforehand.",
        jumbled: ["anticipated", "The", "more", "to", "than", "I", "beforehand.", "I'd", "week,", "following", "feeling", "council,", "the", "present", "recommendation", "full", "student", "our", "nervous"],
      },
      {
        target: "Just breathe, Nadia, I tell myself, before beginning.",
        jumbled: ["breathe,", "tell", "Just", "before", "myself,", "Nadia,", "I", "beginning."],
      },
      {
        target: "I notice several members nodding, seemingly persuaded by the reasoning behind it.",
        jumbled: ["by", "the", "notice", "behind", "several", "it.", "members", "I", "persuaded", "reasoning", "nodding,", "seemingly"],
      },
      {
        target: "One member asks whether this compromise might simply delay an inevitable, harder decision down the road.",
        jumbled: ["this", "delay", "compromise", "the", "simply", "an", "asks", "member", "road.", "decision", "harder", "down", "One", "inevitable,", "whether", "might"],
      },
      {
        target: "I respond honestly that it might, but that testing an idea carefully seemed wiser than deciding based on assumption alone.",
        jumbled: ["alone.", "that", "respond", "I", "carefully", "wiser", "on", "idea", "testing", "might,", "deciding", "honestly", "assumption", "based", "that", "than", "seemed", "it", "an", "but"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about presenting an idea to a group and defending it under questioning.",
    mySentenceExample: "I presented my idea and defended it under questioning.",
  },
  {
    number: 8,
    title: "The Trial Begins",
    image: null,
    imageNote: "Students in the hallway wearing a mix of uniform and personal clothing elements, some chatting casually.",
    story:
      "The trial period begins the following Monday, and the hallways look noticeably different than they had just days earlier. Some students embrace the new flexibility enthusiastically, while others stick closely to the familiar, original uniform out of habit. Kwame stops me in the hallway, admitting he feels genuinely happy, even though a few details still don't work perfectly. “You pulled this off, Nadia,” he adds, grinning. Yuna mentions she's been surprised by how little actual disruption the change has caused, contrary to what she'd initially feared. Watching everyone adjust, I feel cautiously optimistic that this compromise might actually work for most people involved.",
    questions: [
      { text: "When does the trial period begin?", answer: "The following Monday." },
      { text: "How do students respond differently to the new flexibility?", answer: "Some embrace it, others stick to the original uniform." },
      { text: "What does Yuna mention she's been surprised by?", answer: "How little actual disruption the change has caused." },
    ],
    trueFalse: [
      { text: "The trial period begins the following Monday.", answer: true },
      { text: "Some students embrace the flexibility while others stick to habit.", answer: true },
      { text: "Kwame says he feels genuinely happy about the change.", answer: true },
      { text: "Yuna says the change caused far more disruption than expected.", answer: false },
      { text: "Nadia feels cautiously optimistic about the compromise.", answer: true },
    ],
    buildSentence: [
      {
        target: "The trial period begins the following Monday, and the hallways look noticeably different than they had just days earlier.",
        jumbled: ["they", "the", "noticeably", "begins", "than", "the", "look", "period", "following", "hallways", "had", "days", "The", "different", "and", "earlier.", "trial", "just", "Monday,"],
      },
      {
        target: "Some students embrace the new flexibility enthusiastically, while others stick closely to the familiar, original uniform out of habit.",
        jumbled: ["while", "others", "flexibility", "to", "the", "Some", "familiar,", "uniform", "original", "students", "new", "closely", "enthusiastically,", "out", "of", "the", "habit.", "stick", "embrace"],
      },
      {
        target: "Kwame stops me in the hallway, admitting he feels genuinely happy, even though a few details still don't work perfectly.",
        jumbled: ["he", "me", "don't", "details", "feels", "Kwame", "perfectly.", "work", "still", "happy,", "hallway,", "few", "in", "admitting", "stops", "the", "even", "genuinely", "a", "though"],
      },
      {
        target: "“You pulled this off, Nadia,” he adds, grinning.",
        jumbled: ["“You", "off,", "this", "pulled", "Nadia,”", "adds,", "he", "grinning."],
      },
      {
        target: "Yuna mentions she's been surprised by how little actual disruption the change has caused, contrary to what she'd initially feared.",
        jumbled: ["little", "surprised", "actual", "she'd", "disruption", "the", "initially", "to", "mentions", "has", "been", "feared.", "how", "change", "contrary", "Yuna", "caused,", "by", "she's", "what"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about watching a compromise actually work out in real life.",
    mySentenceExample: "I watched a compromise actually work out in real life.",
  },
  {
    number: 9,
    title: "A Semester Review",
    image: null,
    imageNote: "The student council gathered around a table reviewing survey results on a laptop screen, Nadia presenting data.",
    story:
      "By the semester review, the council has collected survey data from students across every grade level about the trial. The results, moreover, are more positive than even I had cautiously hoped for when we first proposed this compromise. Most students report feeling more comfortable overall, though a small percentage still prefer the original, stricter uniform policy. Mr. Ferris notes that had we simply voted immediately after the forum, without a trial period, we may have missed this nuanced outcome entirely. “This worked out better than any of us expected, Nadia,” he adds, smiling. This experience teaches me that thorough mediation, given enough patience, can genuinely produce better solutions than quick decisions.",
    questions: [
      { text: "What has the council collected by the semester review?", answer: "Survey data from students across every grade." },
      { text: "How do the results compare to what Nadia had hoped for?", answer: "More positive than she'd cautiously hoped." },
      { text: "What does Mr. Ferris note about voting immediately?", answer: "That they may have missed this nuanced outcome." },
    ],
    trueFalse: [
      { text: "The council has collected survey data from every grade level.", answer: true },
      { text: "The results are more positive than Nadia had cautiously hoped.", answer: true },
      { text: "Every single student prefers the original uniform policy.", answer: false },
      { text: "Mr. Ferris notes voting immediately might have missed a nuanced outcome.", answer: true },
      { text: "Nadia learns that thorough mediation can produce better solutions.", answer: true },
    ],
    buildSentence: [
      {
        target: "By the semester review, the council has collected survey data from students across every grade level about the trial.",
        jumbled: ["students", "grade", "from", "every", "collected", "level", "has", "By", "survey", "council", "data", "semester", "the", "review,", "trial.", "about", "the", "across", "the"],
      },
      {
        target: "The results, moreover, are more positive than even I had cautiously hoped for when we first proposed this compromise.",
        jumbled: ["hoped", "moreover,", "positive", "more", "The", "had", "proposed", "when", "for", "compromise.", "cautiously", "are", "results,", "even", "we", "first", "I", "this", "than"],
      },
      {
        target: "Most students report feeling more comfortable overall, though a small percentage still prefer the original, stricter uniform policy.",
        jumbled: ["Most", "stricter", "the", "policy.", "students", "prefer", "report", "percentage", "still", "feeling", "overall,", "comfortable", "more", "original,", "small", "though", "a", "uniform"],
      },
      {
        target: "Mr. Ferris notes that had we simply voted immediately after the forum, without a trial period, we may have missed this nuanced outcome entirely.",
        jumbled: ["forum,", "nuanced", "outcome", "the", "voted", "period,", "have", "after", "without", "may", "trial", "a", "notes", "Ferris", "we", "missed", "simply", "that", "immediately", "we", "entirely.", "had", "Mr.", "this"],
      },
      {
        target: "This experience teaches me that thorough mediation, given enough patience, can genuinely produce better solutions than quick decisions.",
        jumbled: ["can", "than", "thorough", "mediation,", "quick", "decisions.", "me", "teaches", "patience,", "better", "This", "produce", "that", "enough", "genuinely", "given", "solutions", "experience"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from taking time to gather real feedback before deciding.",
    mySentenceExample: "I learned that gathering real feedback leads to better decisions.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Nadia sitting alone in the now-empty auditorium after a council meeting, reflecting quietly with her notebook closed.",
    story:
      "Looking back on the entire process, I realize how differently things might have unfolded had the council simply voted without genuine discussion. Nadia, you actually pulled this off, I think, allowing myself a small smile. If we had ignored the personal stories shared during the forum, we would likely have chosen a solution that satisfied only half the school. Instead, taking the time to listen, mediate, and test a compromise allowed us to find something genuinely more inclusive. I've learned that disagreement, however uncomfortable in the moment, often contains the seeds of a better shared solution. In the end, this experience taught me that mediation isn't about avoiding conflict, but about using it productively.",
    questions: [
      { text: "What does Nadia realize looking back on the process?", answer: "How differently things might have gone without genuine discussion." },
      { text: "What might have happened if they had simply voted without discussion?", answer: "They'd have chosen a solution satisfying only half the school." },
      { text: "What has Nadia learned about disagreement?", answer: "That it often contains the seeds of a better shared solution." },
    ],
    trueFalse: [
      { text: "Nadia realizes things might have unfolded differently without discussion.", answer: true },
      { text: "Ignoring the personal stories might have satisfied only half the school.", answer: true },
      { text: "Nadia believes mediation is about avoiding conflict entirely.", answer: false },
      { text: "Nadia has learned disagreement can contain seeds of a better solution.", answer: true },
      { text: "Taking time to listen allowed them to find something more inclusive.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire process, I realize how differently things might have unfolded had the council simply voted without genuine discussion.",
        jumbled: ["discussion.", "process,", "I", "might", "back", "realize", "how", "genuine", "on", "entire", "voted", "unfolded", "things", "Looking", "differently", "simply", "the", "have", "without", "council", "the", "had"],
      },
      {
        target: "Nadia, you actually pulled this off, I think, allowing myself a small smile.",
        jumbled: ["actually", "allowing", "smile.", "you", "think,", "pulled", "Nadia,", "off,", "I", "myself", "a", "small", "this"],
      },
      {
        target: "We would likely have chosen a solution that satisfied only half the school.",
        jumbled: ["likely", "school.", "would", "the", "satisfied", "have", "solution", "half", "chosen", "We", "only", "that", "a"],
      },
      {
        target: "Instead, taking the time to listen, mediate, and test a compromise allowed us to find something genuinely more inclusive.",
        jumbled: ["inclusive.", "genuinely", "Instead,", "mediate,", "a", "us", "test", "compromise", "and", "more", "listen,", "to", "the", "taking", "to", "find", "something", "time", "allowed"],
      },
      {
        target: "I've learned that disagreement, however uncomfortable in the moment, often contains the seeds of a better shared solution.",
        jumbled: ["a", "in", "often", "solution.", "seeds", "the", "the", "shared", "learned", "better", "however", "moment,", "disagreement,", "uncomfortable", "of", "I've", "contains", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from mediating a disagreement between others.",
    mySentenceExample: "I learned that patient mediation leads to more inclusive solutions.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
