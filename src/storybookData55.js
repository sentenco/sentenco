// B1 Teens digital storybook, Book 55: "Learning to Say No"
// Static content -- no Supabase. Seventh book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook55/cover.jpg";

export const STORYBOOK_TITLE = "Learning to Say No";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Yuki sitting at her desk late at night, surrounded by planners and sticky notes for five different clubs, exhausted and overwhelmed.";

export const CHARACTERS = [
  { name: "Yuki", role: "The narrator, a teenager", look: "Neat ponytail, planner always in hand, eager to please but increasingly exhausted." },
  { name: "Ben", role: "Yuki's older brother", look: "Casual sweatshirt, laid-back demeanor, observant and honest." },
  { name: "Ms. Farah", role: "Yuki's guidance counselor", look: "Cardigan, calm voice, perceptive and gently direct." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Too Many Commitments",
    image: null,
    imageNote: "Yuki sitting at her desk surrounded by five different club schedules and sticky notes, looking overwhelmed under a desk lamp.",
    story:
      "Looking at my planner tonight, I count five different clubs I've committed to this semester alone. Student council, yearbook committee, volunteer club, the debate team, and now tutoring younger students twice weekly. \"How did this happen, Yuki?\" I wonder, since I find myself agreeing almost automatically, without genuinely considering my own limits. Tonight, I'm supposed to attend two meetings that overlap directly, and I haven't figured out which one to prioritize. My eyes feel heavy from exhaustion, and I realize I can't actually remember the last time I simply relaxed. If I keep going at this pace, something will eventually have to give completely.",
    questions: [
      { text: "How many clubs has Yuki committed to this semester?", answer: "Five." },
      { text: "What does Yuki do whenever someone asks her to join something?", answer: "Agrees almost automatically." },
      { text: "What problem does Yuki have tonight?", answer: "Two meetings that overlap directly." },
    ],
    trueFalse: [
      { text: "Yuki has committed to five different clubs.", answer: true },
      { text: "Yuki carefully considers her limits before agreeing to things.", answer: false },
      { text: "Two of Yuki's meetings overlap tonight.", answer: true },
      { text: "Yuki remembers relaxing recently.", answer: false },
      { text: "Yuki realizes something will eventually have to give.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking at my planner tonight, I count five different clubs I've committed to this semester alone.",
        jumbled: ["planner", "alone.", "Looking", "my", "to", "I", "semester", "I've", "count", "at", "clubs", "committed", "this", "different", "tonight,", "five"],
      },
      {
        target: "Student council, yearbook committee, volunteer club, the debate team, and now tutoring younger students twice weekly.",
        jumbled: ["yearbook", "committee,", "tutoring", "twice", "and", "council,", "volunteer", "now", "students", "the", "Student", "debate", "club,", "team,", "younger", "weekly."],
      },
      {
        target: "I wonder, since I find myself agreeing almost automatically, without genuinely considering my own limits.",
        jumbled: ["genuinely", "I", "myself", "wonder,", "my", "limits.", "agreeing", "since", "almost", "considering", "find", "without", "automatically,", "I", "own"],
      },
      {
        target: "Tonight, I'm supposed to attend two meetings that overlap directly, and I haven't figured out which one to prioritize.",
        jumbled: ["Tonight,", "and", "figured", "attend", "meetings", "supposed", "haven't", "prioritize.", "one", "two", "I'm", "overlap", "that", "I", "directly,", "which", "out", "to", "to"],
      },
      {
        target: "My eyes feel heavy from exhaustion, and I realize I can't actually remember the last time I simply relaxed.",
        jumbled: ["I", "can't", "and", "remember", "realize", "I", "I", "heavy", "feel", "the", "relaxed.", "exhaustion,", "simply", "eyes", "time", "last", "from", "actually", "My"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about taking on too many responsibilities at once.",
    mySentenceExample: "I took on too many responsibilities at once and felt exhausted.",
  },
  {
    number: 2,
    title: "Another Yes",
    image: null,
    imageNote: "Yuki standing in the hallway, nodding to a classmate asking her to join yet another committee, her expression tired but agreeable.",
    story:
      "Between classes, a classmate approaches, asking if I'd help organize the upcoming school fair committee too. Despite the exhaustion already weighing on me, I hear myself saying yes before I've even properly considered the request. Walking away, I immediately regret it, wondering why saying no feels so genuinely difficult for me. I've always worried that refusing might disappoint people or make me seem uncommitted and unreliable somehow. \"Enough, Yuki,\" I think. However, saying yes to everything is clearly starting to affect my grades, sleep, and overall well-being lately. That evening, I add the fair committee to my already overwhelming planner, feeling a familiar knot forming in my stomach.",
    questions: [
      { text: "What does a classmate ask Yuki to help with?", answer: "Organizing the school fair committee." },
      { text: "What does Yuki do before considering the request?", answer: "Says yes." },
      { text: "What has Yuki always worried about?", answer: "That refusing might disappoint people." },
    ],
    trueFalse: [
      { text: "A classmate asks Yuki to help with the fair committee.", answer: true },
      { text: "Yuki carefully considers the request before answering.", answer: false },
      { text: "Yuki immediately regrets saying yes.", answer: true },
      { text: "Yuki has always worried about disappointing people.", answer: true },
      { text: "Saying yes to everything hasn't affected Yuki at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "Between classes, a classmate approaches, asking if I'd help organize the upcoming school fair committee too.",
        jumbled: ["asking", "organize", "classmate", "the", "fair", "approaches,", "too.", "Between", "classes,", "upcoming", "a", "school", "help", "I'd", "committee", "if"],
      },
      {
        target: "Despite the exhaustion already weighing on me, I hear myself saying yes before I've even properly considered the request.",
        jumbled: ["me,", "before", "hear", "yes", "myself", "even", "saying", "on", "exhaustion", "already", "weighing", "considered", "properly", "Despite", "the", "I've", "the", "I", "request."],
      },
      {
        target: "Walking away, I immediately regret it, wondering why saying no feels so genuinely difficult for me.",
        jumbled: ["for", "immediately", "saying", "no", "so", "regret", "away,", "wondering", "genuinely", "Walking", "it,", "why", "I", "me.", "difficult", "feels"],
      },
      {
        target: "\"Enough, Yuki,\" I think.",
        jumbled: ["Yuki,\"", "think.", "\"Enough,", "I"],
      },
      {
        target: "That evening, I add the fair committee to my already overwhelming planner, feeling a familiar knot forming in my stomach.",
        jumbled: ["stomach.", "overwhelming", "a", "familiar", "knot", "my", "already", "I", "That", "forming", "to", "in", "my", "feeling", "evening,", "fair", "committee", "the", "planner,", "add"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you said yes when you wanted to say no.",
    mySentenceExample: "I said yes to a project when I really wanted to say no.",
  },
  {
    number: 3,
    title: "Ben Notices",
    image: null,
    imageNote: "Ben leaning against Yuki's bedroom doorway, looking concerned as he watches her frantically working through her overloaded planner.",
    story:
      "My older brother Ben stops by my room that evening, noticing my exhausted expression and cluttered, overloaded planner immediately. “You've been like this for weeks now, Yuki. When was the last time you actually rested?” he asks directly. I try brushing off his concern, insisting I'm managing everything fine, though my voice sounds unconvincing even to myself. Ben, who dealt with similar overcommitment during his own junior year, shares how burnout eventually forced him to reevaluate everything completely. “Saying yes to everything isn't actually generous if it means saying no to your own health,” he points out gently. His words linger uncomfortably, since some part of me already suspected this truth myself.",
    questions: [
      { text: "Who stops by Yuki's room that evening?", answer: "Her older brother Ben." },
      { text: "What does Ben ask Yuki directly?", answer: "When was the last time she actually rested?" },
      { text: "What does Ben share about his own experience?", answer: "That burnout forced him to reevaluate everything during his junior year." },
    ],
    trueFalse: [
      { text: "Ben stops by Yuki's room that evening.", answer: true },
      { text: "Ben asks when Yuki last actually rested.", answer: true },
      { text: "Yuki insists everything is going wonderfully with full confidence.", answer: false },
      { text: "Ben shares that he also dealt with overcommitment.", answer: true },
      { text: "Yuki feels Ben's words mean nothing to her.", answer: false },
    ],
    buildSentence: [
      {
        target: "My older brother Ben stops by my room that evening, noticing my exhausted expression and cluttered, overloaded planner immediately.",
        jumbled: ["my", "evening,", "brother", "room", "overloaded", "older", "and", "expression", "immediately.", "my", "that", "by", "Ben", "stops", "My", "planner", "exhausted", "cluttered,", "noticing"],
      },
      {
        target: "“You've been like this for weeks now, Yuki. When was the last time you actually rested?” he asks directly.",
        jumbled: ["you", "Yuki.", "rested?”", "asks", "he", "been", "last", "time", "directly.", "like", "the", "weeks", "was", "actually", "“You've", "When", "this", "now,", "for"],
      },
      {
        target: "I try brushing off his concern, insisting I'm managing everything fine, though my voice sounds unconvincing even to myself.",
        jumbled: ["I'm", "managing", "sounds", "though", "brushing", "unconvincing", "everything", "fine,", "his", "voice", "off", "even", "I", "to", "concern,", "my", "insisting", "try", "myself."],
      },
      {
        target: "Ben, who dealt with similar overcommitment during his own junior year, shares how burnout eventually forced him to reevaluate everything completely.",
        jumbled: ["forced", "who", "dealt", "burnout", "similar", "reevaluate", "eventually", "to", "how", "year,", "overcommitment", "completely.", "with", "his", "junior", "Ben,", "him", "everything", "own", "shares", "during"],
      },
      {
        target: "“Saying yes to everything isn't actually generous if it means saying no to your own health,” he points out gently.",
        jumbled: ["actually", "no", "gently.", "your", "out", "points", "“Saying", "to", "isn't", "means", "yes", "own", "generous", "it", "if", "he", "health,”", "to", "everything", "saying"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone who noticed you were overwhelmed and said something.",
    mySentenceExample: "My friend noticed I was overwhelmed and gently pointed it out to me.",
  },
  {
    number: 4,
    title: "A Difficult Week",
    image: null,
    imageNote: "Yuki rushing between two classrooms in the hallway, papers falling from her arms, a stressed and frazzled expression on her face.",
    story:
      "This week proves Ben's point painfully clearly, as I rush frantically between commitments, forgetting important details along the way. I miss a deadline for the yearbook committee, something I never would have done before this semester started. During debate practice, I can barely focus, my mind constantly drifting toward everything else I still need to accomplish. A teacher pulls me aside, gently mentioning that my grades have dropped noticeably over the past month. Hearing this feels like a wake-up call I desperately needed but had been avoiding acknowledging until now. That night, exhausted beyond words, I finally admit something genuinely needs to change immediately. \"Starting now, Yuki,\" I tell myself.",
    questions: [
      { text: "What does Yuki miss this week?", answer: "A deadline for the yearbook committee." },
      { text: "What happens during debate practice?", answer: "She can barely focus." },
      { text: "What does a teacher mention to Yuki?", answer: "That her grades have dropped noticeably." },
    ],
    trueFalse: [
      { text: "Yuki misses a deadline for the yearbook committee.", answer: true },
      { text: "Yuki focuses perfectly during debate practice.", answer: false },
      { text: "A teacher mentions Yuki's grades have dropped.", answer: true },
      { text: "Yuki feels this is a wake-up call she needed.", answer: true },
      { text: "Yuki decides nothing needs to change.", answer: false },
    ],
    buildSentence: [
      {
        target: "This week proves Ben's point painfully clearly, as I rush frantically between commitments, forgetting important details along the way.",
        jumbled: ["proves", "This", "clearly,", "frantically", "week", "important", "point", "as", "along", "between", "the", "Ben's", "forgetting", "rush", "way.", "painfully", "I", "commitments,", "details"],
      },
      {
        target: "I miss a deadline for the yearbook committee, something I never would have done before this semester started.",
        jumbled: ["this", "a", "miss", "the", "started.", "would", "done", "I", "yearbook", "before", "something", "committee,", "have", "deadline", "for", "semester", "I", "never"],
      },
      {
        target: "During debate practice, I can barely focus, my mind constantly drifting toward everything else I still need to accomplish.",
        jumbled: ["else", "toward", "During", "everything", "barely", "can", "focus,", "debate", "still", "constantly", "I", "accomplish.", "mind", "drifting", "practice,", "I", "my", "need", "to"],
      },
      {
        target: "Hearing this feels like a wake-up call I desperately needed but had been avoiding acknowledging until now.",
        jumbled: ["I", "until", "acknowledging", "feels", "but", "call", "had", "avoiding", "Hearing", "like", "this", "needed", "a", "now.", "been", "desperately", "wake-up"],
      },
      {
        target: "That night, exhausted beyond words, I finally admit something genuinely needs to change immediately.",
        jumbled: ["That", "needs", "exhausted", "genuinely", "admit", "to", "beyond", "immediately.", "finally", "something", "words,", "change", "night,", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a moment that felt like a wake-up call for you.",
    mySentenceExample: "Missing an important deadline felt like a wake-up call for me.",
  },
  {
    number: 5,
    title: "Talking to Ms. Farah",
    image: null,
    imageNote: "Yuki sitting across from Ms. Farah in a small office, explaining her situation while the counselor listens with a calm, understanding expression.",
    story:
      "The next day, I schedule an appointment with our guidance counselor, Ms. Farah, hoping she can offer some genuine perspective. I explain everything: the five commitments, the missed deadline, my dropping grades, and my constant exhaustion lately. She listens without judgment, then asks a simple question: “What would happen, Yuki, if you actually said no to something?” I admit I've never seriously considered that possibility, assuming refusing anything would somehow disappoint everyone involved. She gently explains that overcommitting often stems from wanting approval, rather than genuinely wanting to do everything equally. Her words feel uncomfortably accurate, like she's identified something about myself I hadn't fully recognized before.",
    questions: [
      { text: "Who does Yuki schedule an appointment with?", answer: "Ms. Farah, the guidance counselor." },
      { text: "What question does Ms. Farah ask Yuki?", answer: "What would happen if you actually said no to something?" },
      { text: "What does Ms. Farah say overcommitting often stems from?", answer: "Wanting approval." },
    ],
    trueFalse: [
      { text: "Yuki schedules an appointment with Ms. Farah.", answer: true },
      { text: "Ms. Farah judges Yuki harshly for her situation.", answer: false },
      { text: "Ms. Farah asks what would happen if Yuki said no.", answer: true },
      { text: "Ms. Farah says overcommitting often stems from wanting approval.", answer: true },
      { text: "Yuki feels these words are completely inaccurate.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next day, I schedule an appointment with our guidance counselor, Ms. Farah, hoping she can offer some genuine perspective.",
        jumbled: ["our", "offer", "counselor,", "guidance", "hoping", "some", "The", "can", "Farah,", "next", "schedule", "she", "I", "genuine", "appointment", "an", "with", "Ms.", "perspective.", "day,"],
      },
      {
        target: "I explain everything: the five commitments, the missed deadline, my dropping grades, and my constant exhaustion lately.",
        jumbled: ["everything:", "and", "missed", "five", "I", "deadline,", "the", "the", "my", "exhaustion", "explain", "my", "constant", "commitments,", "dropping", "grades,", "lately."],
      },
      {
        target: "She listens without judgment, then asks a simple question: “What would happen, Yuki, if you actually said no to something?”",
        jumbled: ["would", "asks", "something?”", "She", "a", "no", "you", "actually", "then", "without", "Yuki,", "happen,", "to", "question:", "simple", "if", "said", "listens", "judgment,", "“What"],
      },
      {
        target: "I admit I've never seriously considered that possibility, assuming refusing anything would somehow disappoint everyone involved.",
        jumbled: ["assuming", "I've", "everyone", "that", "refusing", "possibility,", "somehow", "admit", "involved.", "considered", "seriously", "never", "I", "anything", "would", "disappoint"],
      },
      {
        target: "She gently explains that overcommitting often stems from wanting approval, rather than genuinely wanting to do everything equally.",
        jumbled: ["stems", "wanting", "that", "gently", "overcommitting", "to", "than", "rather", "explains", "everything", "wanting", "do", "equally.", "often", "genuinely", "She", "from", "approval,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a question someone asked that made you think differently.",
    mySentenceExample: "A question my counselor asked made me think differently about my habits.",
  },
  {
    number: 6,
    title: "Making a List",
    image: null,
    imageNote: "Yuki sitting at her desk, crossing off items on a list of her commitments, a determined but slightly nervous expression on her face.",
    story:
      "Following Ms. Farah's suggestion, I make a list of every commitment and honestly rank how much each one genuinely matters to me. Debate team and volunteer club feel meaningful and worth keeping, something I actually chose because I cared about them. The fair committee, however, I only joined because refusing felt awkward, not because I wanted to participate. Looking at this list clearly laid out helps me realize not every commitment deserves equal priority in my life. If I release the ones draining me without adding real value, maybe I could actually enjoy the ones remaining. \"This is the answer, Yuki,\" I think. This exercise feels surprisingly clarifying, like finally seeing a problem I'd been avoiding directly.",
    questions: [
      { text: "What does Yuki do following Ms. Farah's suggestion?", answer: "Makes a list ranking how much each commitment matters." },
      { text: "Which commitments does Yuki feel are meaningful?", answer: "Debate team and volunteer club." },
      { text: "Why did Yuki join the fair committee?", answer: "Because refusing felt awkward." },
    ],
    trueFalse: [
      { text: "Yuki makes a list ranking her commitments.", answer: true },
      { text: "Yuki feels debate team and volunteer club are meaningful.", answer: true },
      { text: "Yuki joined the fair committee because she truly wanted to.", answer: false },
      { text: "Yuki realizes not every commitment deserves equal priority.", answer: true },
      { text: "This exercise feels confusing rather than clarifying.", answer: false },
    ],
    buildSentence: [
      {
        target: "Following Ms. Farah's suggestion, I make a list of every commitment and honestly rank how much each one genuinely matters to me.",
        jumbled: ["commitment", "suggestion,", "I", "list", "to", "a", "and", "rank", "me.", "one", "Following", "Farah's", "of", "how", "Ms.", "much", "matters", "each", "make", "honestly", "every", "genuinely"],
      },
      {
        target: "Debate team and volunteer club feel meaningful and worth keeping, something I actually chose because I cared about them.",
        jumbled: ["keeping,", "meaningful", "club", "something", "cared", "I", "I", "them.", "and", "and", "because", "volunteer", "actually", "about", "Debate", "team", "chose", "feel", "worth"],
      },
      {
        target: "Looking at this list clearly laid out helps me realize not every commitment deserves equal priority in my life.",
        jumbled: ["realize", "me", "my", "list", "helps", "Looking", "out", "laid", "at", "priority", "life.", "commitment", "this", "every", "clearly", "in", "not", "equal", "deserves"],
      },
      {
        target: "Maybe I could actually enjoy the ones remaining.",
        jumbled: ["Maybe", "actually", "could", "I", "ones", "remaining.", "enjoy", "the"],
      },
      {
        target: "This exercise feels surprisingly clarifying, like finally seeing a problem I'd been avoiding directly.",
        jumbled: ["seeing", "feels", "like", "directly.", "avoiding", "problem", "finally", "a", "I'd", "exercise", "been", "clarifying,", "This", "surprisingly"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about ranking your priorities to figure out what truly matters.",
    mySentenceExample: "I ranked my priorities to figure out what truly mattered to me.",
  },
  {
    number: 7,
    title: "The First No",
    image: null,
    imageNote: "Yuki standing nervously in front of the fair committee leader, explaining her decision, her hands slightly clasped together for confidence.",
    story:
      "Gathering my courage, I approach the fair committee leader to explain I need to step back from this commitment. My heart pounds as I speak, half expecting disappointment or frustration in response to my decision. Instead, she simply nods. “I completely understand, Yuki, and thank you for being honest instead of just disappearing,” she says warmly. Relief floods through me instantly, since I had built up this moment into something far scarier than it actually turned out being. Walking away, I realize my fear of disappointing people had been considerably larger than reality itself. This first successful no gives me unexpected confidence to consider what else might need reconsidering.",
    questions: [
      { text: "What does Yuki approach the fair committee leader to explain?", answer: "That she needs to step back." },
      { text: "How does the leader respond to Yuki's decision?", answer: "She understands and thanks Yuki for being honest." },
      { text: "How does Yuki feel after this conversation?", answer: "Relieved -- her fear was bigger than reality." },
    ],
    trueFalse: [
      { text: "Yuki explains she needs to step back from the commitment.", answer: true },
      { text: "The leader reacts with anger and disappointment.", answer: false },
      { text: "The leader thanks Yuki for being honest.", answer: true },
      { text: "Yuki feels relief after this conversation.", answer: true },
      { text: "Yuki's fear turns out to be smaller than reality.", answer: false },
    ],
    buildSentence: [
      {
        target: "Gathering my courage, I approach the fair committee leader to explain I need to step back from this commitment.",
        jumbled: ["to", "approach", "need", "explain", "from", "step", "commitment.", "the", "courage,", "fair", "I", "I", "to", "leader", "Gathering", "this", "my", "back", "committee"],
      },
      {
        target: "My heart pounds as I speak, half expecting disappointment or frustration in response to my decision.",
        jumbled: ["or", "half", "as", "to", "My", "my", "in", "speak,", "decision.", "disappointment", "pounds", "heart", "response", "expecting", "frustration", "I"],
      },
      {
        target: "“I completely understand, Yuki, and thank you for being honest instead of just disappearing,” she says warmly.",
        jumbled: ["just", "she", "and", "thank", "warmly.", "for", "disappearing,”", "you", "of", "Yuki,", "being", "honest", "instead", "understand,", "“I", "completely", "says"],
      },
      {
        target: "Relief floods through me instantly, since I had built up this moment into something far scarier than it actually turned out being.",
        jumbled: ["moment", "floods", "this", "turned", "instantly,", "into", "since", "out", "being.", "scarier", "actually", "built", "it", "than", "far", "I", "me", "up", "Relief", "had", "something", "through"],
      },
      {
        target: "Walking away, I realize my fear of disappointing people had been considerably larger than reality itself.",
        jumbled: ["considerably", "away,", "realize", "Walking", "itself.", "of", "larger", "my", "had", "than", "disappointing", "people", "been", "fear", "I", "reality"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a fear that turned out to be bigger than reality.",
    mySentenceExample: "My fear of asking for help turned out bigger than reality.",
  },
  {
    number: 8,
    title: "More Boundaries",
    image: null,
    imageNote: "Yuki sitting at her desk with a shorter, simpler planner, calmly declining a request on her phone, a relaxed expression on her face.",
    story:
      "Encouraged by my first success, I reevaluate my other commitments, deciding to also step back from student council. This decision feels harder somehow, since student council carries more visibility and social expectation than the fair committee did. \"You don't owe everyone a yes, Yuki,\" I remind myself, thinking of Ms. Farah's words about approval-seeking versus genuine desire to participate. I also start declining smaller requests more consistently, like extra tutoring sessions that overlap with time I need for myself. Each time I say no now, it feels slightly less terrifying than the time before it. My planner looks noticeably lighter these days, and somehow, that emptiness feels like genuine relief instead of failure.",
    questions: [
      { text: "What does Yuki decide to also step back from?", answer: "Student council." },
      { text: "Why does this decision feel harder?", answer: "Because it carries more visibility and social expectation." },
      { text: "How does Yuki's planner look these days?", answer: "Noticeably lighter." },
    ],
    trueFalse: [
      { text: "Yuki decides to step back from student council too.", answer: true },
      { text: "This decision feels easier than the fair committee.", answer: false },
      { text: "Yuki starts declining smaller requests too.", answer: true },
      { text: "Each no feels slightly less terrifying than before.", answer: true },
      { text: "Yuki's planner feels like failure now.", answer: false },
    ],
    buildSentence: [
      {
        target: "Encouraged by my first success, I reevaluate my other commitments, deciding to also step back from student council.",
        jumbled: ["I", "student", "council.", "my", "first", "Encouraged", "to", "also", "by", "success,", "commitments,", "step", "other", "deciding", "reevaluate", "back", "from", "my"],
      },
      {
        target: "This decision feels harder somehow, since student council carries more visibility and social expectation than the fair committee did.",
        jumbled: ["somehow,", "and", "than", "committee", "council", "since", "This", "expectation", "did.", "decision", "fair", "harder", "student", "feels", "carries", "the", "social", "visibility", "more"],
      },
      {
        target: "\"You don't owe everyone a yes, Yuki,\" I remind myself, thinking of Ms. Farah's words about approval-seeking versus genuine desire to participate.",
        jumbled: ["everyone", "of", "remind", "Ms.", "\"You", "Yuki,\"", "thinking", "desire", "versus", "don't", "Farah's", "owe", "words", "participate.", "to", "myself,", "about", "I", "genuine", "yes,", "a", "approval-seeking"],
      },
      {
        target: "I also start declining smaller requests more consistently, like extra tutoring sessions that overlap with time I need for myself.",
        jumbled: ["for", "need", "declining", "smaller", "consistently,", "extra", "sessions", "that", "time", "tutoring", "start", "I", "overlap", "like", "requests", "also", "with", "more", "myself.", "I"],
      },
      {
        target: "My planner looks noticeably lighter these days, and somehow, that emptiness feels like genuine relief instead of failure.",
        jumbled: ["emptiness", "lighter", "genuine", "relief", "planner", "My", "of", "somehow,", "that", "these", "noticeably", "days,", "instead", "looks", "like", "and", "feels", "failure."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about setting a boundary that felt uncomfortable at first.",
    mySentenceExample: "Setting a boundary with my schedule felt uncomfortable at first but helped.",
  },
  {
    number: 9,
    title: "Rediscovering Free Time",
    image: null,
    imageNote: "Yuki sitting on her bedroom floor reading a novel just for fun, relaxed and smiling, her simplified planner visible on the desk nearby.",
    story:
      "With only two meaningful commitments remaining, I suddenly have actual free time appearing in my schedule for the first time in months. On Tuesday evening, I read an entire novel purely for enjoyment, something I genuinely can't remember doing recently. Ben notices the change immediately. “You seem so much calmer lately, Yuki, more like yourself again,” he comments. My grades have already started improving slightly, likely because I can actually focus without constant mental exhaustion draining me. Debate team and volunteer club feel more enjoyable now too, since I'm not simultaneously worrying about four other obligations. This newfound balance feels unfamiliar still, but genuinely, refreshingly welcome.",
    questions: [
      { text: "How many meaningful commitments does Yuki have remaining?", answer: "Two." },
      { text: "What does Yuki do on Tuesday evening?", answer: "Reads an entire novel for enjoyment." },
      { text: "What does Ben notice about Yuki?", answer: "That she seems calmer and more like herself." },
    ],
    trueFalse: [
      { text: "Yuki has only two meaningful commitments remaining.", answer: true },
      { text: "Yuki reads an entire novel purely for enjoyment.", answer: true },
      { text: "Ben notices Yuki seems more stressed than before.", answer: false },
      { text: "Yuki's grades have started improving slightly.", answer: true },
      { text: "Yuki finds debate team less enjoyable now.", answer: false },
    ],
    buildSentence: [
      {
        target: "With only two meaningful commitments remaining, I suddenly have actual free time appearing in my schedule for the first time in months.",
        jumbled: ["first", "in", "free", "suddenly", "With", "schedule", "only", "appearing", "months.", "for", "the", "time", "remaining,", "actual", "commitments", "time", "meaningful", "in", "have", "two", "my", "I"],
      },
      {
        target: "On Tuesday evening, I read an entire novel purely for enjoyment, something I genuinely can't remember doing recently.",
        jumbled: ["for", "something", "read", "remember", "enjoyment,", "On", "evening,", "entire", "can't", "doing", "an", "recently.", "purely", "novel", "genuinely", "Tuesday", "I", "I"],
      },
      {
        target: "“You seem so much calmer lately, Yuki, more like yourself again,” he comments.",
        jumbled: ["yourself", "calmer", "so", "lately,", "he", "again,”", "like", "Yuki,", "seem", "much", "“You", "more", "comments."],
      },
      {
        target: "My grades have already started improving slightly, likely because I can actually focus without constant mental exhaustion draining me.",
        jumbled: ["likely", "can", "I", "exhaustion", "have", "without", "because", "me.", "started", "draining", "grades", "constant", "actually", "slightly,", "My", "focus", "mental", "improving", "already"],
      },
      {
        target: "Debate team and volunteer club feel more enjoyable now too, since I'm not simultaneously worrying about four other obligations.",
        jumbled: ["team", "about", "too,", "simultaneously", "worrying", "since", "club", "enjoyable", "four", "now", "more", "other", "and", "Debate", "I'm", "volunteer", "obligations.", "feel", "not"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about rediscovering free time after being very busy.",
    mySentenceExample: "I rediscovered free time to read after simplifying my schedule.",
  },
  {
    number: 10,
    title: "A Healthier Balance",
    image: null,
    imageNote: "Yuki sitting at her desk with a simple, organized planner, writing calmly, a peaceful and confident expression on her face.",
    story:
      "A month later, I look at my planner and barely recognize the overwhelmed, exhausted version of myself from before. I've learned that saying no isn't selfish or unreliable, despite what I had always assumed throughout my life. Ms. Farah's question still echoes sometimes: what would actually happen if I said no? Usually, the honest answer turns out to be far less catastrophic than my anxious mind originally predicted. I still care deeply about helping others and staying involved, but now within limits that actually protect my well-being too. \"You did this, Yuki,\" I think, looking at how far I've come. This experience taught me that genuine generosity requires boundaries, not the complete absence of them entirely.",
    questions: [
      { text: "How does Yuki feel looking at her planner a month later?", answer: "She barely recognizes her overwhelmed former self." },
      { text: "What has Yuki learned about saying no?", answer: "That it isn't selfish or unreliable." },
      { text: "What did this experience teach Yuki about generosity?", answer: "That it requires boundaries, not the absence of them." },
    ],
    trueFalse: [
      { text: "Yuki barely recognizes her exhausted former self.", answer: true },
      { text: "Yuki learned saying no is selfish and unreliable.", answer: false },
      { text: "Ms. Farah's question still echoes sometimes for Yuki.", answer: true },
      { text: "Yuki still cares about helping others within limits.", answer: true },
      { text: "Yuki learned generosity requires no boundaries at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "A month later, I look at my planner and barely recognize the overwhelmed, exhausted version of myself from before.",
        jumbled: ["later,", "overwhelmed,", "from", "myself", "version", "month", "exhausted", "A", "at", "the", "before.", "my", "recognize", "and", "of", "I", "planner", "barely", "look"],
      },
      {
        target: "I've learned that saying no isn't selfish or unreliable, despite what I had always assumed throughout my life.",
        jumbled: ["my", "isn't", "life.", "assumed", "always", "throughout", "what", "that", "or", "despite", "selfish", "no", "had", "I've", "I", "unreliable,", "saying", "learned"],
      },
      {
        target: "Usually, the honest answer turns out to be far less catastrophic than my anxious mind originally predicted.",
        jumbled: ["my", "out", "anxious", "Usually,", "honest", "catastrophic", "to", "than", "answer", "far", "originally", "turns", "mind", "predicted.", "the", "less", "be"],
      },
      {
        target: "I still care deeply about helping others and staying involved, but now within limits that actually protect my well-being too.",
        jumbled: ["but", "my", "protect", "well-being", "helping", "now", "involved,", "deeply", "actually", "and", "still", "limits", "that", "within", "too.", "about", "others", "I", "staying", "care"],
      },
      {
        target: "This experience taught me that genuine generosity requires boundaries, not the complete absence of them entirely.",
        jumbled: ["This", "boundaries,", "not", "complete", "absence", "the", "me", "them", "of", "entirely.", "generosity", "genuine", "requires", "taught", "experience", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you learned about setting healthy boundaries.",
    mySentenceExample: "I learned that setting healthy boundaries helps me help others better.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
