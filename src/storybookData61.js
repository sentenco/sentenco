// B1 Adults digital storybook, Book 61: "Negotiating a Deadline at Work"
// Static content -- no Supabase. Fifth book in the B1 Adults batch
// (57-64). Workplace-negotiation scenario, matching the B1 Adults
// spec's modals for politeness/nuance (would it be possible to,
// could we, should) and workplace/deadline vocabulary. Distinct from
// Book 58 (a payroll error) -- this is a proactive negotiation, not
// a mistake to correct. Adults-track shape: 3 questions, 5 True/
// False, 5 Build-a-Sentence per chapter. Chapter images not generated
// yet -- image left null per chapter.
import coverImg from "./assets/storybook61/cover.jpg";

export const STORYBOOK_TITLE = "Negotiating a Deadline at Work";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Sofia sitting at her office desk surrounded by sticky notes and an open laptop, looking at a calendar with a stressed expression.";

export const CHARACTERS = [
  { name: "Sofia", role: "The narrator, an adult marketing coordinator", look: "Cardigan over a blouse, glasses, desk covered in sticky notes." },
  { name: "Mr. Whitfield", role: "Sofia's manager", look: "Button-down shirt, direct but fair, always carries a notebook." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Too Much on My Plate",
    image: null,
    imageNote: "Sofia at her desk, surrounded by three separate project folders, looking overwhelmed while checking her calendar.",
    story:
      "Three separate projects have landed on my desk this week, each with a deadline that somehow falls on the exact same day. A sticky note on my monitor, in my own handwriting, still reads “Sofia's Week” above the growing list. At first, I assume I can simply manage everything through careful planning and a few extra hours of work. However, as I map out the actual timeline more carefully, it becomes obvious that finishing all three properly just isn't realistic. Quality would definitely suffer if I tried rushing through everything without adjusting something in the schedule. I realize I'll need to talk to my manager honestly, rather than quietly struggling and hoping things somehow work out.",
    questions: [
      { text: "How many projects have landed on Sofia's desk?", answer: "Three." },
      { text: "What does Sofia assume at first?", answer: "That she can manage everything through careful planning." },
      { text: "What does Sofia realize she needs to do?", answer: "Talk to her manager honestly." },
    ],
    trueFalse: [
      { text: "Three separate projects have landed on Sofia's desk.", answer: true },
      { text: "All three projects share the exact same deadline.", answer: true },
      { text: "Sofia assumes she can manage everything easily at first.", answer: true },
      { text: "Mapping the timeline shows finishing all three is realistic.", answer: false },
      { text: "Sofia realizes she needs to talk to her manager honestly.", answer: true },
    ],
    buildSentence: [
      {
        target: "Three separate projects have landed on my desk this week, each with a deadline that somehow falls on the exact same day.",
        jumbled: ["Three", "deadline", "week,", "landed", "have", "separate", "on", "falls", "on", "that", "the", "somehow", "projects", "exact", "day.", "my", "with", "desk", "same", "this", "a", "each"],
      },
      {
        target: "A sticky note on my monitor, in my own handwriting, still reads “Sofia's Week” above the growing list.",
        jumbled: ["growing", "note", "sticky", "handwriting,", "in", "above", "my", "monitor,", "“Sofia's", "still", "A", "on", "own", "Week”", "my", "reads", "the", "list."],
      },
      {
        target: "At first, I assume I can simply manage everything through careful planning and a few extra hours of work.",
        jumbled: ["of", "everything", "hours", "manage", "a", "extra", "At", "can", "I", "few", "I", "through", "and", "careful", "planning", "work.", "simply", "first,", "assume"],
      },
      {
        target: "However, as I map out the actual timeline more carefully, it becomes obvious that finishing all three properly just isn't realistic.",
        jumbled: ["actual", "obvious", "that", "more", "isn't", "all", "carefully,", "properly", "three", "out", "I", "just", "map", "timeline", "realistic.", "becomes", "as", "the", "it", "finishing", "However,"],
      },
      {
        target: "I realize I'll need to talk to my manager honestly, rather than quietly struggling and hoping things somehow work out.",
        jumbled: ["quietly", "than", "honestly,", "struggling", "rather", "manager", "need", "my", "things", "work", "realize", "hoping", "and", "to", "somehow", "out.", "to", "I", "I'll", "talk"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling overwhelmed with too much work at once.",
    mySentenceExample: "I felt overwhelmed with too much work at once.",
  },
  {
    number: 2,
    title: "Preparing to Ask",
    image: null,
    imageNote: "Sofia at her desk writing notes on a notepad, planning out exactly what she wants to say before a meeting.",
    story:
      "Before approaching Mr. Whitfield, I spend some time preparing exactly what I want to say, rather than just walking in unprepared. I write down each project's current status, along with a realistic timeline for what could actually be finished by when. Rather than simply complaining about being overloaded, I want to propose an actual solution he could consider. I also think carefully about which project genuinely matters most, in case a full extension isn't something he can offer. Feeling reasonably prepared, I send him a quick message asking whether he has a few minutes to talk sometime today. “Sure, Sofia, come by after lunch,” he replies within a few minutes.",
    questions: [
      { text: "What does Sofia do before approaching Mr. Whitfield?", answer: "Prepares exactly what she wants to say." },
      { text: "What does Sofia write down for each project?", answer: "Its current status and a realistic timeline." },
      { text: "What does Sofia think about carefully?", answer: "Which project genuinely matters most." },
    ],
    trueFalse: [
      { text: "Sofia spends time preparing what she wants to say.", answer: true },
      { text: "Sofia writes down each project's status and a timeline.", answer: true },
      { text: "Sofia plans to simply complain without proposing a solution.", answer: false },
      { text: "Sofia thinks about which project matters most.", answer: true },
      { text: "Sofia sends Mr. Whitfield a message asking to talk.", answer: true },
    ],
    buildSentence: [
      {
        target: "I spend some time preparing exactly what I want to say, rather than just walking in unprepared.",
        jumbled: ["to", "I", "want", "say,", "walking", "exactly", "unprepared.", "rather", "I", "time", "than", "what", "just", "preparing", "spend", "in", "some"],
      },
      {
        target: "I write down each project's current status, along with a realistic timeline for what could actually be finished by when.",
        jumbled: ["could", "I", "what", "status,", "with", "timeline", "along", "write", "project's", "be", "a", "each", "current", "for", "by", "when.", "realistic", "actually", "finished", "down"],
      },
      {
        target: "Rather than simply complaining about being overloaded, I want to propose an actual solution he could consider.",
        jumbled: ["propose", "than", "want", "consider.", "about", "being", "overloaded,", "simply", "complaining", "he", "could", "actual", "an", "I", "Rather", "to", "solution"],
      },
      {
        target: "I also think carefully about which project genuinely matters most, in case a full extension isn't something he can offer.",
        jumbled: ["I", "something", "full", "a", "also", "offer.", "genuinely", "he", "extension", "which", "case", "matters", "can", "about", "in", "most,", "project", "carefully", "think", "isn't"],
      },
      {
        target: "Feeling reasonably prepared, I send him a quick message asking whether he has a few minutes to talk sometime today.",
        jumbled: ["I", "send", "whether", "asking", "message", "a", "reasonably", "talk", "few", "has", "quick", "a", "him", "he", "to", "minutes", "today.", "prepared,", "sometime", "Feeling"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about preparing carefully before a difficult conversation.",
    mySentenceExample: "I prepared carefully before a difficult conversation at work.",
  },
  {
    number: 3,
    title: "The Conversation Begins",
    image: null,
    imageNote: "Sofia sitting across from Mr. Whitfield at his desk, notebook open, explaining her situation calmly.",
    story:
      "Mr. Whitfield agrees to meet after lunch, and I walk into his office feeling nervous but reasonably confident about my plan. I explain honestly that three deadlines landing on the same day has made everything considerably harder to manage well. “Would it be possible to discuss adjusting one of these timelines slightly?” I ask, trying to sound solution-focused rather than defeated. “I appreciate you bringing this to me directly, Sofia,” he says, listening carefully and nodding as I walk through each project's current status and realistic completion estimate. To my relief, he doesn't seem annoyed, instead appearing genuinely interested in understanding the actual situation.",
    questions: [
      { text: "When does Mr. Whitfield agree to meet?", answer: "After lunch." },
      { text: "What does Sofia explain honestly?", answer: "That three deadlines on the same day makes everything harder to manage." },
      { text: "How does Mr. Whitfield react to Sofia's explanation?", answer: "He isn't annoyed -- genuinely interested." },
    ],
    trueFalse: [
      { text: "Mr. Whitfield agrees to meet after lunch.", answer: true },
      { text: "Sofia explains that three deadlines fell on the same day.", answer: true },
      { text: "Sofia asks about adjusting one of the timelines.", answer: true },
      { text: "Mr. Whitfield seems annoyed by Sofia's request.", answer: false },
      { text: "Mr. Whitfield listens carefully and seems interested.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Whitfield agrees to meet after lunch, and I walk into his office feeling nervous but reasonably confident about my plan.",
        jumbled: ["confident", "after", "Mr.", "meet", "I", "but", "agrees", "office", "into", "walk", "about", "lunch,", "feeling", "my", "Whitfield", "plan.", "and", "his", "nervous", "reasonably", "to"],
      },
      {
        target: "I explain honestly that three deadlines landing on the same day has made everything considerably harder to manage well.",
        jumbled: ["the", "has", "day", "that", "explain", "I", "three", "same", "deadlines", "to", "honestly", "landing", "well.", "manage", "everything", "harder", "considerably", "on", "made"],
      },
      {
        target: "“Would it be possible to discuss adjusting one of these timelines slightly?” I ask, trying to sound solution-focused rather than defeated.",
        jumbled: ["to", "these", "than", "adjusting", "of", "slightly?”", "one", "it", "sound", "trying", "“Would", "discuss", "to", "possible", "solution-focused", "ask,", "be", "rather", "timelines", "defeated.", "I"],
      },
      {
        target: "“I appreciate you bringing this to me directly, Sofia,” he says, listening carefully and nodding as I walk through each project's current status and realistic completion estimate.",
        jumbled: ["to", "walk", "realistic", "says,", "status", "project's", "and", "you", "he", "I", "this", "“I", "each", "Sofia,”", "me", "nodding", "completion", "listening", "current", "carefully", "through", "estimate.", "appreciate", "directly,", "and", "bringing", "as"],
      },
      {
        target: "To my relief, he doesn't seem annoyed, instead appearing genuinely interested in understanding the actual situation.",
        jumbled: ["he", "in", "instead", "To", "genuinely", "appearing", "relief,", "the", "seem", "understanding", "situation.", "annoyed,", "interested", "doesn't", "my", "actual"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about explaining a difficult situation clearly and calmly.",
    mySentenceExample: "I explained the difficult situation clearly and calmly.",
  },
  {
    number: 4,
    title: "Weighing the Options",
    image: null,
    imageNote: "Mr. Whitfield looking at a printed schedule, thinking carefully, Sofia watching with a hopeful expression.",
    story:
      "Mr. Whitfield reviews the three projects, thinking out loud about which one might realistically allow for some flexibility. He mentions that the client presentation absolutely cannot move, since it's tied to an external meeting already scheduled. However, the internal report, on the other hand, could potentially shift by a couple of days without causing major problems. “If we moved that deadline, Sofia, would the remaining two feel manageable for you?” he asks thoughtfully. I consider this carefully, mentally reorganizing my week, before confirming that this arrangement would genuinely help significantly.",
    questions: [
      { text: "What does Mr. Whitfield think out loud about?", answer: "Which project might allow for flexibility." },
      { text: "Which project absolutely cannot move, according to Mr. Whitfield?", answer: "The client presentation." },
      { text: "What does Mr. Whitfield ask Sofia?", answer: "If moving the internal report deadline would make the remaining two manageable." },
    ],
    trueFalse: [
      { text: "Mr. Whitfield reviews the three projects out loud.", answer: true },
      { text: "The client presentation absolutely cannot move.", answer: true },
      { text: "The internal report could potentially shift by a couple of days.", answer: true },
      { text: "Mr. Whitfield refuses to consider any flexibility at all.", answer: false },
      { text: "Sofia confirms this arrangement would genuinely help.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Whitfield reviews the three projects, thinking out loud about which one might realistically allow for some flexibility.",
        jumbled: ["allow", "realistically", "flexibility.", "out", "three", "for", "the", "about", "loud", "might", "which", "Mr.", "Whitfield", "some", "reviews", "one", "projects,", "thinking"],
      },
      {
        target: "He mentions that the client presentation absolutely cannot move, since it's tied to an external meeting already scheduled.",
        jumbled: ["already", "the", "move,", "mentions", "it's", "He", "client", "since", "absolutely", "an", "meeting", "that", "tied", "scheduled.", "cannot", "presentation", "external", "to"],
      },
      {
        target: "However, the internal report, on the other hand, could potentially shift by a couple of days without causing major problems.",
        jumbled: ["potentially", "couple", "on", "the", "by", "hand,", "shift", "of", "problems.", "other", "the", "causing", "report,", "a", "days", "without", "major", "However,", "internal", "could"],
      },
      {
        target: "“If we moved that deadline, Sofia, would the remaining two feel manageable for you?” he asks thoughtfully.",
        jumbled: ["you?”", "Sofia,", "we", "two", "manageable", "that", "for", "remaining", "feel", "asks", "the", "deadline,", "would", "moved", "he", "“If", "thoughtfully."],
      },
      {
        target: "I consider this carefully, mentally reorganizing my week, before confirming that this arrangement would genuinely help significantly.",
        jumbled: ["that", "my", "help", "this", "would", "before", "mentally", "carefully,", "genuinely", "week,", "confirming", "consider", "significantly.", "reorganizing", "this", "I", "arrangement"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about weighing different options before making a decision.",
    mySentenceExample: "I weighed different options before making my decision.",
  },
  {
    number: 5,
    title: "Reaching an Agreement",
    image: null,
    imageNote: "Sofia and Mr. Whitfield shaking hands across the desk, both looking satisfied, a revised calendar visible on the screen.",
    story:
      "We agree that the internal report deadline will move two days later, giving me some much-needed breathing room this week. “Take the two days, Sofia,” he says, also suggesting I loop in a colleague who could assist with a smaller part of the third project. “I should have checked in with the team sooner about workload balance generally,” he admits honestly, which genuinely surprises me. I thank him for being so understanding and flexible, especially since he easily could have simply said no. Leaving his office, I feel considerably lighter than when I walked in less than twenty minutes ago.",
    questions: [
      { text: "What do Sofia and Mr. Whitfield agree on?", answer: "Moving the internal report deadline two days later." },
      { text: "What does Mr. Whitfield suggest about a colleague?", answer: "Looping one in to help with part of the third project." },
      { text: "What does Mr. Whitfield admit honestly?", answer: "That he should have checked in about workload balance sooner." },
    ],
    trueFalse: [
      { text: "The internal report deadline will move two days later.", answer: true },
      { text: "Mr. Whitfield suggests looping in a colleague to help.", answer: true },
      { text: "Mr. Whitfield admits he should have checked in sooner.", answer: true },
      { text: "Sofia leaves his office feeling more stressed than before.", answer: false },
      { text: "Mr. Whitfield simply refuses to help at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "We agree that the internal report deadline will move two days later, giving me some much-needed breathing room this week.",
        jumbled: ["will", "two", "room", "internal", "We", "me", "the", "this", "much-needed", "later,", "some", "week.", "breathing", "report", "giving", "that", "days", "agree", "deadline", "move"],
      },
      {
        target: "“Take the two days, Sofia,” he says, also suggesting I loop in a colleague who could assist with a smaller part of the third project.",
        jumbled: ["two", "in", "assist", "“Take", "a", "days,", "Sofia,”", "says,", "also", "suggesting", "I", "the", "part", "could", "with", "third", "project.", "who", "loop", "of", "smaller", "colleague", "a", "the", "he"],
      },
      {
        target: "“I should have checked in with the team sooner about workload balance generally,” he admits honestly, which genuinely surprises me.",
        jumbled: ["sooner", "should", "in", "checked", "balance", "surprises", "generally,”", "admits", "team", "the", "genuinely", "“I", "with", "me.", "workload", "honestly,", "he", "which", "have", "about"],
      },
      {
        target: "I thank him for being so understanding and flexible, especially since he easily could have simply said no.",
        jumbled: ["understanding", "he", "so", "flexible,", "said", "simply", "him", "for", "I", "have", "being", "and", "no.", "since", "could", "easily", "especially", "thank"],
      },
      {
        target: "Leaving his office, I feel considerably lighter than when I walked in less than twenty minutes ago.",
        jumbled: ["when", "feel", "Leaving", "in", "I", "office,", "twenty", "considerably", "walked", "ago.", "I", "lighter", "than", "his", "less", "than", "minutes"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reaching a fair agreement after discussing a problem.",
    mySentenceExample: "We reached a fair agreement after discussing the problem.",
  },
  {
    number: 6,
    title: "A New Plan",
    image: null,
    imageNote: "Sofia back at her desk, rewriting her to-do list with the new deadline reflected, looking noticeably more relaxed.",
    story:
      "Back at my desk, I update my calendar immediately, reflecting the new deadline and my slightly adjusted workload for the week. I also message the colleague Mr. Whitfield mentioned, explaining briefly what kind of help would actually be most useful. “Of course, Sofia, happy to help,” she responds enthusiastically, saying she'd be glad to take on that particular task starting tomorrow morning. With everything reorganized, my three-project pile up suddenly feels genuinely manageable rather than completely overwhelming. I take a short break, feeling grateful that a single honest conversation changed my entire week so significantly.",
    questions: [
      { text: "What does Sofia do back at her desk?", answer: "Updates her calendar with the new deadline." },
      { text: "Who does Sofia message about helping?", answer: "The colleague Mr. Whitfield mentioned." },
      { text: "How does the colleague respond?", answer: "Enthusiastically." },
    ],
    trueFalse: [
      { text: "Sofia updates her calendar immediately.", answer: true },
      { text: "Sofia messages the colleague Mr. Whitfield mentioned.", answer: true },
      { text: "The colleague refuses to help with the task.", answer: false },
      { text: "Sofia's workload suddenly feels genuinely manageable.", answer: true },
      { text: "Sofia feels this conversation changed nothing about her week.", answer: false },
    ],
    buildSentence: [
      {
        target: "Back at my desk, I update my calendar immediately, reflecting the new deadline and my slightly adjusted workload for the week.",
        jumbled: ["update", "reflecting", "new", "desk,", "adjusted", "my", "I", "workload", "the", "at", "Back", "and", "week.", "the", "immediately,", "slightly", "calendar", "deadline", "my", "my", "for"],
      },
      {
        target: "I also message the colleague Mr. Whitfield mentioned, explaining briefly what kind of help would actually be most useful.",
        jumbled: ["I", "mentioned,", "useful.", "help", "Mr.", "what", "most", "of", "Whitfield", "message", "colleague", "be", "actually", "explaining", "also", "the", "briefly", "would", "kind"],
      },
      {
        target: "“Of course, Sofia, happy to help,” she responds enthusiastically, saying she'd be glad to take on that particular task starting tomorrow morning.",
        jumbled: ["starting", "Sofia,", "to", "morning.", "responds", "that", "on", "task", "to", "take", "she", "particular", "saying", "“Of", "help,”", "glad", "course,", "happy", "enthusiastically,", "tomorrow", "be", "she'd"],
      },
      {
        target: "With everything reorganized, my three-project pile up suddenly feels genuinely manageable rather than completely overwhelming.",
        jumbled: ["rather", "suddenly", "genuinely", "overwhelming.", "three-project", "reorganized,", "up", "manageable", "everything", "than", "With", "completely", "feels", "my", "pile"],
      },
      {
        target: "I take a short break, feeling grateful that a single honest conversation changed my entire week so significantly.",
        jumbled: ["feeling", "changed", "entire", "I", "a", "take", "that", "so", "single", "significantly.", "honest", "conversation", "short", "week", "break,", "my", "a", "grateful"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reorganizing your plans after a helpful conversation.",
    mySentenceExample: "I reorganized my plans after a helpful conversation with my manager.",
  },
  {
    number: 7,
    title: "Finishing the Presentation",
    image: null,
    imageNote: "Sofia standing confidently in a meeting room, presenting slides to a small group of clients, looking composed.",
    story:
      "With more breathing room in my schedule, I'm able to focus fully on preparing the client presentation without constant distraction. I rehearse it twice the evening before, the title slide still reading “Prepared by Sofia” in the corner, catching a few small mistakes I probably would have missed otherwise. On presentation day, everything goes smoothly, and the client seems genuinely impressed by how organized and thorough the material feels. Afterward, a colleague mentions how calm and confident I appeared throughout the entire meeting. Little do they know how close I came to feeling completely overwhelmed just one week earlier.",
    questions: [
      { text: "What is Sofia able to focus on with more breathing room?", answer: "Preparing the client presentation." },
      { text: "What does Sofia do the evening before the presentation?", answer: "Rehearses it twice." },
      { text: "How does the client seem to feel about the presentation?", answer: "Genuinely impressed." },
    ],
    trueFalse: [
      { text: "Sofia is able to focus fully on the client presentation.", answer: true },
      { text: "Sofia rehearses the presentation twice the evening before.", answer: true },
      { text: "The client seems genuinely impressed by the presentation.", answer: true },
      { text: "The presentation day goes poorly and full of mistakes.", answer: false },
      { text: "A colleague mentions how calm Sofia appeared.", answer: true },
    ],
    buildSentence: [
      {
        target: "With more breathing room in my schedule, I'm able to focus fully on preparing the client presentation without constant distraction.",
        jumbled: ["room", "client", "focus", "the", "without", "I'm", "my", "constant", "schedule,", "to", "breathing", "able", "With", "presentation", "distraction.", "in", "preparing", "fully", "on", "more"],
      },
      {
        target: "I rehearse it twice the evening before, the title slide still reading “Prepared by Sofia” in the corner, catching a few small mistakes I probably would have missed otherwise.",
        jumbled: ["by", "probably", "it", "would", "catching", "I", "still", "missed", "mistakes", "twice", "have", "in", "title", "evening", "the", "few", "small", "the", "otherwise.", "reading", "rehearse", "slide", "before,", "corner,", "“Prepared", "a", "Sofia”", "I", "the"],
      },
      {
        target: "On presentation day, everything goes smoothly, and the client seems genuinely impressed by how organized and thorough the material feels.",
        jumbled: ["everything", "thorough", "smoothly,", "client", "by", "organized", "day,", "On", "the", "seems", "the", "impressed", "genuinely", "feels.", "and", "material", "presentation", "and", "how", "goes"],
      },
      {
        target: "Afterward, a colleague mentions how calm and confident I appeared throughout the entire meeting.",
        jumbled: ["the", "a", "mentions", "appeared", "meeting.", "confident", "throughout", "how", "and", "Afterward,", "entire", "I", "colleague", "calm"],
      },
      {
        target: "Little do they know how close I came to feeling completely overwhelmed just one week earlier.",
        jumbled: ["Little", "know", "how", "close", "they", "feeling", "do", "came", "one", "completely", "week", "just", "overwhelmed", "I", "earlier.", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about performing well because you had enough time to prepare.",
    mySentenceExample: "I performed well because I had enough time to prepare.",
  },
  {
    number: 8,
    title: "Reflecting with a Colleague",
    image: null,
    imageNote: "Sofia and her helpful colleague chatting over coffee in the break room, both relaxed and smiling.",
    story:
      "During a coffee break, I thank my colleague again for taking on part of the third project so willingly last week. “I'm glad you asked directly, Sofia,” she mentions, rather than my quietly struggling through everything completely on my own. I admit that asking for help initially felt uncomfortable, since I usually prefer handling things independently myself. On the other hand, she points out that a team functions better when people communicate honestly about their actual workload. Her comment sticks with me, making me reconsider how I'll approach similar situations going forward.",
    questions: [
      { text: "What does Sofia thank her colleague for again?", answer: "Taking on part of the third project." },
      { text: "What does the colleague say she's glad about?", answer: "That Sofia asked directly." },
      { text: "What does Sofia admit about asking for help?", answer: "That it initially felt uncomfortable." },
    ],
    trueFalse: [
      { text: "Sofia thanks her colleague again during a coffee break.", answer: true },
      { text: "The colleague says she's glad Sofia asked directly.", answer: true },
      { text: "Sofia admits asking for help initially felt uncomfortable.", answer: true },
      { text: "Sofia says she prefers asking for help immediately always.", answer: false },
      { text: "The colleague's comment makes Sofia reconsider her approach.", answer: true },
    ],
    buildSentence: [
      {
        target: "During a coffee break, I thank my colleague again for taking on part of the third project so willingly last week.",
        jumbled: ["break,", "third", "my", "a", "the", "project", "colleague", "During", "willingly", "for", "week.", "on", "coffee", "I", "part", "taking", "thank", "of", "so", "last", "again"],
      },
      {
        target: "“I'm glad you asked directly, Sofia,” she mentions, rather than my quietly struggling through everything completely on my own.",
        jumbled: ["Sofia,”", "quietly", "mentions,", "through", "rather", "my", "she", "directly,", "glad", "than", "asked", "own.", "my", "on", "struggling", "completely", "you", "“I'm", "everything"],
      },
      {
        target: "I admit that asking for help initially felt uncomfortable, since I usually prefer handling things independently myself.",
        jumbled: ["independently", "asking", "usually", "since", "admit", "felt", "I", "help", "for", "myself.", "things", "uncomfortable,", "I", "that", "handling", "prefer", "initially"],
      },
      {
        target: "On the other hand, she points out that a team functions better when people communicate honestly about their actual workload.",
        jumbled: ["team", "a", "when", "their", "points", "she", "people", "other", "communicate", "the", "honestly", "hand,", "about", "functions", "better", "workload.", "that", "out", "actual", "On"],
      },
      {
        target: "Her comment sticks with me, making me reconsider how I'll approach similar situations going forward.",
        jumbled: ["reconsider", "approach", "how", "me,", "sticks", "making", "me", "forward.", "I'll", "similar", "going", "with", "comment", "situations", "Her"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning that asking for help was actually a good idea.",
    mySentenceExample: "I learned that asking for help was actually a good idea.",
  },
  {
    number: 9,
    title: "A Team Discussion",
    image: null,
    imageNote: "Mr. Whitfield leading a small team meeting, a whiteboard behind him showing a new workload-planning process.",
    story:
      "The following week, Mr. Whitfield calls a short team meeting to discuss workload planning going forward more generally. He mentions, without naming anyone specifically, that overlapping deadlines had recently caused unnecessary stress for someone on the team. From now on, he explains, the team will check upcoming deadlines together weekly, rather than everyone managing things separately and silently. Several colleagues nod, agreeing this would genuinely help prevent similar situations from happening again in the future. You started this, Sofia, I think quietly to myself, feeling a sense of satisfaction knowing my honest conversation helped create something useful for everyone.",
    questions: [
      { text: "What does Mr. Whitfield call a meeting to discuss?", answer: "Workload planning going forward." },
      { text: "What does Mr. Whitfield say caused unnecessary stress?", answer: "Overlapping deadlines." },
      { text: "What will the team do differently from now on?", answer: "Check upcoming deadlines together weekly." },
    ],
    trueFalse: [
      { text: "Mr. Whitfield calls a meeting about workload planning.", answer: true },
      { text: "Overlapping deadlines had caused unnecessary stress for someone.", answer: true },
      { text: "The team will check deadlines together weekly from now on.", answer: true },
      { text: "Colleagues disagree that this change would help.", answer: false },
      { text: "Sofia feels no satisfaction about this outcome.", answer: false },
    ],
    buildSentence: [
      {
        target: "The following week, Mr. Whitfield calls a short team meeting to discuss workload planning going forward more generally.",
        jumbled: ["discuss", "planning", "going", "calls", "team", "a", "workload", "The", "to", "meeting", "more", "following", "forward", "Whitfield", "short", "Mr.", "week,", "generally."],
      },
      {
        target: "He mentions, without naming anyone specifically, that overlapping deadlines had recently caused unnecessary stress for someone on the team.",
        jumbled: ["overlapping", "that", "team.", "on", "for", "recently", "He", "had", "caused", "without", "anyone", "someone", "specifically,", "the", "stress", "mentions,", "naming", "unnecessary", "deadlines"],
      },
      {
        target: "From now on, he explains, the team will check upcoming deadlines together weekly, rather than everyone managing things separately and silently.",
        jumbled: ["things", "and", "now", "From", "he", "on,", "upcoming", "silently.", "team", "than", "deadlines", "managing", "weekly,", "will", "the", "check", "separately", "everyone", "rather", "together", "explains,"],
      },
      {
        target: "Several colleagues nod, agreeing this would genuinely help prevent similar situations from happening again in the future.",
        jumbled: ["genuinely", "situations", "again", "help", "nod,", "prevent", "happening", "future.", "Several", "similar", "from", "agreeing", "colleagues", "in", "would", "this", "the"],
      },
      {
        target: "You started this, Sofia, I think quietly to myself, feeling a sense of satisfaction knowing my honest conversation helped create something useful for everyone.",
        jumbled: ["create", "myself,", "honest", "Sofia,", "You", "everyone.", "knowing", "think", "sense", "started", "useful", "to", "feeling", "of", "for", "quietly", "this,", "my", "conversation", "satisfaction", "I", "a", "helped", "something"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small change that helps prevent a bigger problem later.",
    mySentenceExample: "This small change helps prevent bigger problems later on.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Sofia at her desk at the end of the day, calendar neatly organized, looking calm and satisfied as she packs up.",
    story:
      "Looking back on the entire week, I write one line in my planner, “Note to self, Sofia: ask before you drown,” and realize how differently things could have gone if I had simply stayed quiet and struggled alone. Had I tried pushing through all three deadlines without saying anything, quality would have suffered, and I likely would have burned out completely. Instead, preparing carefully and asking clearly allowed Mr. Whitfield to actually understand and help with the situation properly. I've learned that negotiating a deadline isn't a sign of weakness, but rather a genuinely useful professional skill. In the end, this experience taught me that honest, well-prepared conversations usually lead to better outcomes for everyone involved.",
    questions: [
      { text: "What does Sofia realize looking back on the week?", answer: "How differently things could have gone if she'd stayed quiet." },
      { text: "What might have happened if she had stayed quiet?", answer: "Quality would have suffered and she'd have burned out." },
      { text: "What has Sofia learned about negotiating a deadline?", answer: "That it isn't a sign of weakness, but a useful professional skill." },
    ],
    trueFalse: [
      { text: "Sofia realizes staying quiet could have caused burnout.", answer: true },
      { text: "Sofia believes negotiating a deadline is a sign of weakness.", answer: false },
      { text: "Preparing carefully allowed her manager to actually help.", answer: true },
      { text: "Sofia feels honest conversations usually lead to better outcomes.", answer: true },
      { text: "Sofia wishes she had simply pushed through silently instead.", answer: false },
    ],
    buildSentence: [
      {
        target: "Looking back on the entire week, I write one line in my planner, “Note to self, Sofia: ask before you drown,” and realize how differently things could have gone if I had simply stayed quiet and struggled alone.",
        jumbled: ["“Note", "had", "realize", "back", "stayed", "gone", "to", "if", "I", "drown,”", "entire", "I", "ask", "line", "the", "could", "self,", "quiet", "on", "differently", "simply", "alone.", "how", "have", "week,", "struggled", "Looking", "write", "and", "and", "one", "before", "planner,", "things", "Sofia:", "you", "my", "in"],
      },
      {
        target: "Had I tried pushing through all three deadlines without saying anything, quality would have suffered, and I likely would have burned out completely.",
        jumbled: ["Had", "would", "I", "have", "quality", "saying", "tried", "likely", "pushing", "suffered,", "deadlines", "I", "burned", "without", "have", "three", "would", "out", "all", "anything,", "completely.", "through", "and"],
      },
      {
        target: "Instead, preparing carefully and asking clearly allowed Mr. Whitfield to actually understand and help with the situation properly.",
        jumbled: ["help", "actually", "situation", "asking", "Instead,", "to", "preparing", "understand", "the", "properly.", "allowed", "Mr.", "and", "Whitfield", "with", "carefully", "and", "clearly"],
      },
      {
        target: "I've learned that negotiating a deadline isn't a sign of weakness, but rather a genuinely useful professional skill.",
        jumbled: ["a", "that", "learned", "useful", "of", "isn't", "genuinely", "sign", "professional", "negotiating", "but", "rather", "skill.", "deadline", "a", "weakness,", "a", "I've"],
      },
      {
        target: "In the end, this experience taught me that honest, well-prepared conversations usually lead to better outcomes for everyone involved.",
        jumbled: ["usually", "lead", "everyone", "for", "end,", "experience", "In", "to", "well-prepared", "that", "outcomes", "this", "the", "honest,", "conversations", "involved.", "taught", "me", "better"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from negotiating something difficult at work.",
    mySentenceExample: "I learned that negotiating deadlines calmly leads to better results.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
