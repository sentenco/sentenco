// A2 Teens digital storybook, Book 34: "The Group Project Disaster"
// Static content -- no Supabase. Fourth book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook34/cover.jpg";

export const STORYBOOK_TITLE = "The Group Project Disaster";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Grace and Amara standing together at a classroom table covered in poster boards and sticky notes, looking toward an empty chair where a third teammate should be sitting.";

export const CHARACTERS = [
  { name: "Grace", role: "The narrator, a teenager", look: "Short bob haircut, glasses, organized but easily frustrated by unfairness." },
  { name: "Amara", role: "Grace's groupmate", look: "Curly hair, cardigan, calm and diplomatic." },
  { name: "Tyler", role: "Grace's other groupmate", look: "Backwards cap, hoodie, seems distracted and disengaged at first." },
  { name: "Mr. Bennett", role: "The history teacher", look: "Tweed jacket, round glasses, fair but strict about deadlines." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Assigned to a Group",
    image: null,
    imageNote: "Mr. Bennett reading out group assignments from a clipboard while students shift in their seats, Grace exchanging a glance with Amara across the room.",
    story:
      "Mr. Bennett announces our history project on ancient civilizations, and instead of letting us pick partners, he assigns groups randomly using his clipboard. My stomach sinks slightly when I hear I'm grouped with Amara, whom I barely know, and Tyler, who seems to spend most classes staring out the window instead of taking notes. Amara catches my eye from across the room and gives a small, reassuring shrug, as if to say we'll figure this out together somehow. “Stay optimistic, Grace,” I tell myself, since first impressions about classmates aren't always completely accurate representations of how they actually work.",
    questions: [
      { text: "What project does Mr. Bennett announce?", answer: "A history project on ancient civilizations." },
      { text: "How does Mr. Bennett assign the groups?", answer: "Randomly, using his clipboard." },
      { text: "Who is Grace grouped with?", answer: "Amara and Tyler." },
    ],
    trueFalse: [
      { text: "Mr. Bennett assigns groups randomly.", answer: true },
      { text: "Grace chooses her own group members.", answer: false },
      { text: "Grace is grouped with Amara and Tyler.", answer: true },
      { text: "Tyler seems very focused in class.", answer: false },
      { text: "Amara gives Grace a reassuring shrug.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Bennett announces our history project on ancient civilizations, and instead of letting us pick partners, he assigns groups randomly using his clipboard.",
        jumbled: ["Bennett", "our", "clipboard.", "ancient", "civilizations,", "letting", "Mr.", "history", "pick", "groups", "partners,", "randomly", "announces", "his", "instead", "using", "of", "assigns", "he", "and", "on", "us", "project"],
      },
      {
        target: "My stomach sinks slightly when I hear I'm grouped with Amara, whom I barely know, and Tyler, who seems to spend most classes staring out the window instead of taking notes.",
        jumbled: ["My", "of", "I", "Amara,", "who", "when", "staring", "slightly", "know,", "hear", "most", "whom", "out", "classes", "spend", "the", "I", "stomach", "sinks", "seems", "Tyler,", "I'm", "grouped", "barely", "window", "with", "notes.", "instead", "to", "and", "taking"],
      },
      {
        target: "Amara catches my eye from across the room and gives a small, reassuring shrug, as if to say we'll figure this out together somehow.",
        jumbled: ["across", "as", "Amara", "somehow.", "from", "the", "to", "say", "figure", "out", "and", "my", "together", "gives", "catches", "shrug,", "small,", "room", "this", "a", "we'll", "eye", "if", "reassuring"],
      },
      {
        target: "“Stay optimistic, Grace,” I tell myself, since first impressions about classmates aren't always completely accurate representations of how they actually work.",
        jumbled: ["they", "since", "optimistic,", "classmates", "how", "completely", "“Stay", "first", "impressions", "always", "Grace,”", "myself,", "tell", "representations", "actually", "of", "accurate", "I", "work.", "about", "aren't"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about working with people you did not choose yourself.",
    mySentenceExample: "I worked with classmates I did not choose during our science project.",
  },
  {
    number: 2,
    title: "The First Meeting",
    image: null,
    imageNote: "Grace, Amara, and Tyler sitting at a library table, Grace writing a task list while Tyler leans back in his chair looking uninterested.",
    story:
      "We meet at the library after school to divide up the research and presentation tasks for our project on ancient Egypt. Amara suggests we each research a different section, then combine everything into one cohesive presentation before the deadline. Tyler agrees to research daily life along the Nile River, though he barely looks up from his phone the entire meeting. “Sound good, Grace?” Amara checks, and I nod. “Does two weeks sound like enough time for everyone?” I ask, glancing pointedly at Tyler, who just shrugs without offering any real response. Despite my slight unease about his engagement level, we leave with a reasonably clear plan.",
    questions: [
      { text: "What topic does their project cover?", answer: "Ancient Egypt." },
      { text: "What does Amara suggest they do?", answer: "Each research a different section, then combine it." },
      { text: "What section does Tyler agree to research?", answer: "Daily life along the Nile River." },
    ],
    trueFalse: [
      { text: "Their project is about ancient Egypt.", answer: true },
      { text: "Amara suggests researching different sections separately.", answer: true },
      { text: "Tyler agrees to research daily life along the Nile.", answer: true },
      { text: "Tyler pays close attention during the whole meeting.", answer: false },
      { text: "They leave the meeting with no plan at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "We meet at the library after school to divide up the research and presentation tasks for our project on ancient Egypt.",
        jumbled: ["Egypt.", "the", "library", "and", "project", "up", "at", "We", "our", "the", "ancient", "after", "to", "presentation", "for", "school", "on", "meet", "tasks", "divide", "research"],
      },
      {
        target: "Amara suggests we each research a different section, then combine everything into one cohesive presentation before the deadline.",
        jumbled: ["suggests", "before", "a", "different", "into", "research", "section,", "then", "each", "everything", "Amara", "the", "one", "deadline.", "cohesive", "presentation", "combine", "we"],
      },
      {
        target: "Tyler agrees to research daily life along the Nile River, though he barely looks up from his phone the entire meeting.",
        jumbled: ["the", "from", "his", "Nile", "meeting.", "along", "the", "though", "River,", "barely", "phone", "life", "daily", "up", "he", "agrees", "to", "research", "entire", "Tyler", "looks"],
      },
      {
        target: "Amara checks, and I nod.",
        jumbled: ["Amara", "nod.", "checks,", "and", "I"],
      },
      {
        target: "“Does two weeks sound like enough time for everyone?” I ask, glancing pointedly at Tyler, who just shrugs without offering any real response.",
        jumbled: ["response.", "real", "pointedly", "time", "offering", "everyone?”", "I", "just", "without", "glancing", "who", "at", "enough", "weeks", "for", "any", "two", "ask,", "“Does", "shrugs", "like", "Tyler,", "sound"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about dividing tasks with a group of people.",
    mySentenceExample: "We divided the tasks so everyone had an equal part to research.",
  },
  {
    number: 3,
    title: "Tyler's Excuses",
    image: null,
    imageNote: "Grace and Amara sitting alone at the library table, looking at an empty chair and checking their phones for a reply from Tyler that never comes.",
    story:
      "At our second meeting, Tyler doesn't show up at all, sending a brief text about ten minutes late claiming something unexpected came up at home. Amara and I wait around for another fifteen minutes before finally accepting he isn't coming and starting without him. The following week, the same pattern repeats itself, this time with a vague excuse about forgetting the meeting entirely. “Should we just tell Mr. Bennett?” I ask Amara, frustration creeping into my voice despite my efforts to stay patient. “Let's give Tyler one more chance, Grace,” Amara suggests, though I can tell she's growing frustrated too.",
    questions: [
      { text: "What happens at their second meeting?", answer: "Tyler doesn't show up." },
      { text: "What excuse does Tyler give the following week?", answer: "That he forgot the meeting entirely." },
      { text: "What does Amara suggest doing?", answer: "Giving Tyler one more chance before escalating." },
    ],
    trueFalse: [
      { text: "Tyler doesn't show up at the second meeting.", answer: true },
      { text: "Tyler texts an excuse about something at home.", answer: true },
      { text: "The same pattern happens again the following week.", answer: true },
      { text: "Amara suggests reporting Tyler immediately.", answer: false },
      { text: "Grace feels no frustration at all about this.", answer: false },
    ],
    buildSentence: [
      {
        target: "At our second meeting, Tyler doesn't show up at all, sending a brief text about ten minutes late claiming something unexpected came up at home.",
        jumbled: ["our", "at", "came", "doesn't", "sending", "up", "unexpected", "something", "brief", "up", "all,", "ten", "late", "meeting,", "show", "second", "Tyler", "about", "at", "claiming", "minutes", "text", "home.", "a", "At"],
      },
      {
        target: "Amara and I wait around for another fifteen minutes before finally accepting he isn't coming and starting without him.",
        jumbled: ["isn't", "accepting", "for", "and", "without", "I", "him.", "starting", "another", "wait", "coming", "Amara", "before", "minutes", "around", "fifteen", "he", "finally", "and"],
      },
      {
        target: "The following week, the same pattern repeats itself, this time with a vague excuse about forgetting the meeting entirely.",
        jumbled: ["pattern", "about", "week,", "following", "repeats", "with", "entirely.", "same", "The", "this", "time", "the", "a", "meeting", "vague", "excuse", "the", "forgetting", "itself,"],
      },
      {
        target: "“Should we just tell Mr. Bennett?” I ask Amara, frustration creeping into my voice despite my efforts to stay patient.",
        jumbled: ["into", "frustration", "Mr.", "to", "just", "my", "ask", "Bennett?”", "creeping", "I", "my", "tell", "“Should", "stay", "Amara,", "despite", "patient.", "voice", "efforts", "we"],
      },
      {
        target: "“Let's give Tyler one more chance, Grace,” Amara suggests, though I can tell she's growing frustrated too.",
        jumbled: ["she's", "chance,", "growing", "“Let's", "can", "frustrated", "suggests,", "more", "give", "tell", "Amara", "though", "Tyler", "I", "Grace,”", "too.", "one"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time someone did not show up when expected.",
    mySentenceExample: "My friend did not show up for our study group last week.",
  },
  {
    number: 4,
    title: "Picking Up the Slack",
    image: null,
    imageNote: "Grace and Amara staying late in the library, surrounded by extra books and notes, dividing Tyler's unfinished research between themselves with tired expressions.",
    story:
      "With the deadline only five days away and Tyler's section still completely untouched, Amara and I reluctantly decide to divide his research between ourselves. Staying late at the library becomes routine, and I notice both of us growing increasingly exhausted from carrying essentially three people's workload. “This isn't fair to us,” I mutter one evening, rubbing my tired eyes after another two-hour session. Amara agrees quietly. “Failing this would hurt all three of us equally, Grace,” she reminds me, regardless of who actually did the work. Despite our resentment, quitting doesn't feel like a real option.",
    questions: [
      { text: "How many days remain before the deadline?", answer: "Five." },
      { text: "What do Grace and Amara decide to do?", answer: "Divide Tyler's research between themselves." },
      { text: "What does Amara remind Grace about failing?", answer: "That it would hurt all three of their grades equally." },
    ],
    trueFalse: [
      { text: "The deadline is only five days away.", answer: true },
      { text: "Tyler's section is already finished by this point.", answer: false },
      { text: "Grace and Amara divide his research between them.", answer: true },
      { text: "Amara says failing would only hurt Tyler's grade.", answer: false },
      { text: "Grace feels this situation isn't fair to them.", answer: true },
    ],
    buildSentence: [
      {
        target: "With the deadline only five days away and Tyler's section still completely untouched, Amara and I reluctantly decide to divide his research between ourselves.",
        jumbled: ["reluctantly", "divide", "section", "With", "Amara", "ourselves.", "his", "away", "decide", "untouched,", "completely", "between", "I", "days", "and", "the", "Tyler's", "still", "and", "deadline", "only", "research", "to", "five"],
      },
      {
        target: "Staying late at the library becomes routine, and I notice both of us growing increasingly exhausted from carrying essentially three people's workload.",
        jumbled: ["the", "exhausted", "growing", "notice", "carrying", "library", "and", "increasingly", "us", "both", "routine,", "late", "people's", "of", "at", "I", "essentially", "workload.", "becomes", "from", "three", "Staying"],
      },
      {
        target: "“This isn't fair to us,” I mutter one evening, rubbing my tired eyes after another two-hour session.",
        jumbled: ["isn't", "after", "another", "eyes", "evening,", "I", "one", "us,”", "rubbing", "mutter", "“This", "session.", "fair", "tired", "two-hour", "to", "my"],
      },
      {
        target: "Amara agrees quietly.",
        jumbled: ["agrees", "quietly.", "Amara"],
      },
      {
        target: "“Failing this would hurt all three of us equally, Grace,” she reminds me, regardless of who actually did the work.",
        jumbled: ["hurt", "three", "she", "“Failing", "work.", "us", "equally,", "me,", "regardless", "of", "reminds", "of", "actually", "all", "who", "would", "the", "this", "Grace,”", "did"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about doing extra work because someone else didn't finish theirs.",
    mySentenceExample: "I did extra chores because my brother forgot to finish his part.",
  },
  {
    number: 5,
    title: "Growing Frustration",
    image: null,
    imageNote: "Grace sitting at her desk at home late at night, staring frustrated at her laptop screen filled with unfinished slides, a clock showing it's nearly midnight.",
    story:
      "Working alone late one night on the final slides, my frustration with Tyler boils over into something closer to genuine anger than mild annoyance. I imagine confronting him dramatically in front of the whole class, listing every missed meeting and broken promise in painful detail. Part of me wants to simply present without his section at all, letting him face whatever consequences come from his own choices. But doing that would also lower my own grade unfairly, since group projects get evaluated as a complete, unified whole. “Get it together, Grace,” I mutter, staring at the clock reading nearly midnight, exhaustion mixing uncomfortably with my simmering resentment toward Tyler.",
    questions: [
      { text: "What does Grace's frustration turn into?", answer: "Something closer to genuine anger." },
      { text: "What does Grace imagine doing?", answer: "Confronting Tyler dramatically in front of the class." },
      { text: "Why can't Grace just present without Tyler's section?", answer: "Because group projects get evaluated as a complete, unified whole." },
    ],
    trueFalse: [
      { text: "Grace's frustration turns into genuine anger.", answer: true },
      { text: "Grace imagines confronting Tyler dramatically.", answer: true },
      { text: "Group projects get graded individually, not as a whole.", answer: false },
      { text: "The clock reads nearly midnight.", answer: true },
      { text: "Grace feels completely calm and unbothered.", answer: false },
    ],
    buildSentence: [
      {
        target: "Working alone late one night on the final slides, my frustration with Tyler boils over into something closer to genuine anger than mild annoyance.",
        jumbled: ["boils", "final", "slides,", "one", "into", "frustration", "annoyance.", "night", "late", "anger", "with", "something", "to", "over", "alone", "Working", "genuine", "my", "than", "on", "the", "mild", "closer", "Tyler"],
      },
      {
        target: "I imagine confronting him dramatically in front of the whole class, listing every missed meeting and broken promise in painful detail.",
        jumbled: ["the", "in", "whole", "imagine", "missed", "broken", "promise", "in", "painful", "class,", "meeting", "dramatically", "listing", "him", "of", "and", "confronting", "front", "detail.", "every", "I"],
      },
      {
        target: "Part of me wants to simply present without his section at all, letting him face whatever consequences come from his own choices.",
        jumbled: ["present", "without", "face", "letting", "wants", "him", "to", "simply", "whatever", "at", "own", "all,", "me", "consequences", "come", "his", "his", "choices.", "from", "Part", "section", "of"],
      },
      {
        target: "But doing that would also lower my own grade unfairly, since group projects get evaluated as a complete, unified whole.",
        jumbled: ["my", "grade", "projects", "complete,", "doing", "that", "a", "group", "since", "lower", "own", "But", "also", "evaluated", "get", "unified", "as", "unfairly,", "would", "whole."],
      },
      {
        target: "“Get it together, Grace,” I mutter, staring at the clock reading nearly midnight, exhaustion mixing uncomfortably with my simmering resentment toward Tyler.",
        jumbled: ["Tyler.", "at", "nearly", "mutter,", "reading", "exhaustion", "Grace,”", "uncomfortably", "the", "mixing", "resentment", "toward", "clock", "I", "together,", "it", "staring", "midnight,", "“Get", "with", "my", "simmering"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt frustrated with a group situation.",
    mySentenceExample: "I felt frustrated when my teammates didn't finish their part of the presentation.",
  },
  {
    number: 6,
    title: "A Difficult Conversation",
    image: null,
    imageNote: "Grace standing beside Tyler's locker in the hallway, arms crossed but voice calm, Tyler looking down at the floor guiltily as students pass by.",
    story:
      "The next morning, I decide direct conversation is more productive than continued silent resentment, so I approach Tyler at his locker before class. “We need to talk about the project,” I say firmly but calmly, having practiced this exact sentence in my head all morning. Tyler's shoulders tense immediately, and he starts mumbling, “Look, Grace, I know I've been slacking,” before I gently but firmly cut him off. “I'm not trying to attack you. I just need to understand what's actually going on,” I explain, surprising myself with how much calmer I sound than I actually feel. Something shifts slightly in his guarded expression.",
    questions: [
      { text: "What does Grace decide to do?", answer: "Talk to Tyler directly." },
      { text: "Where does Grace approach Tyler?", answer: "At his locker." },
      { text: "What does Grace say she's not trying to do?", answer: "Attack him." },
    ],
    trueFalse: [
      { text: "Grace decides to talk to Tyler directly.", answer: true },
      { text: "Grace approaches Tyler at his locker.", answer: true },
      { text: "Grace yells angrily at Tyler immediately.", answer: false },
      { text: "Grace says she just wants to understand what's going on.", answer: true },
      { text: "Tyler's expression stays completely unchanged.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next morning, I decide direct conversation is more productive than continued silent resentment, so I approach Tyler at his locker before class.",
        jumbled: ["locker", "Tyler", "so", "before", "direct", "than", "is", "next", "The", "silent", "more", "approach", "conversation", "at", "continued", "decide", "productive", "I", "morning,", "resentment,", "I", "his", "class."],
      },
      {
        target: "“We need to talk about the project,” I say firmly but calmly, having practiced this exact sentence in my head all morning.",
        jumbled: ["the", "my", "calmly,", "morning.", "project,”", "practiced", "in", "having", "to", "sentence", "but", "exact", "say", "about", "firmly", "this", "need", "“We", "head", "all", "I", "talk"],
      },
      {
        target: "Tyler's shoulders tense immediately, and he starts mumbling, “Look, Grace, I know I've been slacking,” before I gently but firmly cut him off.",
        jumbled: ["know", "gently", "he", "Tyler's", "Grace,", "I", "starts", "immediately,", "“Look,", "I", "tense", "but", "I've", "before", "shoulders", "him", "been", "firmly", "and", "mumbling,", "cut", "slacking,”", "off."],
      },
      {
        target: "“I'm not trying to attack you. I just need to understand what's actually going on,” I explain, surprising myself with how much calmer I sound than I actually feel.",
        jumbled: ["you.", "on,”", "actually", "I", "feel.", "what's", "just", "not", "actually", "“I'm", "explain,", "myself", "calmer", "trying", "I", "I", "going", "attack", "to", "surprising", "to", "how", "with", "I", "need", "understand", "sound", "than", "much"],
      },
      {
        target: "Something shifts slightly in his guarded expression.",
        jumbled: ["slightly", "his", "expression.", "in", "guarded", "shifts", "Something"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a difficult conversation you had with someone.",
    mySentenceExample: "I had a difficult conversation with my friend about missed plans, but it helped.",
  },
  {
    number: 7,
    title: "Tyler's Reason",
    image: null,
    imageNote: "Tyler sitting on a bench outside the school, explaining quietly to Grace with a tired, vulnerable expression, his backpack open with a part-time job schedule visible.",
    story:
      "Tyler finally admits the truth: his parents' recent divorce means he now works evening shifts at a grocery store to help with household expenses. “I didn't want anyone feeling sorry for me, Grace,” he mumbles, staring at his shoes rather than meeting my eyes directly. Suddenly, his missed meetings and vague excuses make painful, complicated sense in a way I hadn't considered at all. I feel a wave of guilt wash over my earlier anger, realizing I judged his situation without ever actually asking why. “Why didn't you just tell us?” I ask gently, and he shrugs, admitting he felt too embarrassed to explain everything.",
    questions: [
      { text: "What does Tyler finally admit?", answer: "That his parents' divorce means he works evening shifts at a grocery store." },
      { text: "Why didn't Tyler want to tell anyone?", answer: "He didn't want anyone feeling sorry for him." },
      { text: "How does Grace feel after hearing the truth?", answer: "A wave of guilt." },
    ],
    trueFalse: [
      { text: "Tyler works evening shifts at a grocery store.", answer: true },
      { text: "Tyler didn't want anyone feeling sorry for him.", answer: true },
      { text: "Grace feels no guilt about judging him earlier.", answer: false },
      { text: "Tyler felt too embarrassed to explain everything.", answer: true },
      { text: "Grace already knew about Tyler's situation before this.", answer: false },
    ],
    buildSentence: [
      {
        target: "Tyler finally admits the truth: his parents' recent divorce means he now works evening shifts at a grocery store to help with household expenses.",
        jumbled: ["admits", "grocery", "divorce", "a", "the", "his", "now", "store", "household", "at", "parents'", "truth:", "help", "works", "expenses.", "recent", "with", "shifts", "evening", "means", "he", "to", "Tyler", "finally"],
      },
      {
        target: "“I didn't want anyone feeling sorry for me, Grace,” he mumbles, staring at his shoes rather than meeting my eyes directly.",
        jumbled: ["didn't", "meeting", "mumbles,", "for", "anyone", "“I", "staring", "at", "me,", "than", "want", "Grace,”", "directly.", "he", "feeling", "rather", "his", "my", "shoes", "sorry", "eyes"],
      },
      {
        target: "Suddenly, his missed meetings and vague excuses make painful, complicated sense in a way I hadn't considered at all.",
        jumbled: ["Suddenly,", "make", "at", "I", "meetings", "way", "and", "sense", "in", "vague", "considered", "painful,", "a", "complicated", "missed", "all.", "excuses", "his", "hadn't"],
      },
      {
        target: "I feel a wave of guilt wash over my earlier anger, realizing I judged his situation without ever actually asking why.",
        jumbled: ["judged", "guilt", "anger,", "actually", "asking", "feel", "of", "realizing", "his", "wave", "a", "situation", "over", "ever", "wash", "without", "my", "why.", "earlier", "I", "I"],
      },
      {
        target: "“Why didn't you just tell us?” I ask gently, and he shrugs, admitting he felt too embarrassed to explain everything.",
        jumbled: ["shrugs,", "didn't", "he", "and", "explain", "embarrassed", "ask", "everything.", "gently,", "you", "to", "felt", "us?”", "too", "admitting", "he", "tell", "I", "just", "“Why"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning the real reason behind someone's behavior.",
    mySentenceExample: "I learned the real reason my friend was quiet was that she felt sick.",
  },
  {
    number: 8,
    title: "Working It Out",
    image: null,
    imageNote: "Grace, Amara, and Tyler sitting together at the library table, all three actively working now, Tyler typing on a laptop with a determined expression.",
    story:
      "After learning about Tyler's situation, the three of us sit down together to create a fairer, more realistic plan for finishing the project. “What if you handle the parts you can do quickly at home, and we handle anything requiring extra library time?” Amara suggests thoughtfully, and Tyler nods gratefully at the flexible compromise, adding quietly, “Thanks for hearing me out, Grace.” He commits to writing his section over the weekend when his work schedule allows more free time. Watching him actually engage now, typing quickly with genuine focus, I realize how differently this whole situation might have gone if we had simply talked sooner instead of assuming the worst.",
    questions: [
      { text: "What plan do they create together?", answer: "A fairer plan dividing tasks based on Tyler's schedule." },
      { text: "What does Amara suggest?", answer: "That Tyler handle parts he can do quickly at home." },
      { text: "What does Tyler commit to doing?", answer: "Writing his section over the weekend." },
    ],
    trueFalse: [
      { text: "They create a fairer plan together.", answer: true },
      { text: "Amara suggests Tyler handle quick parts at home.", answer: true },
      { text: "Tyler refuses to commit to anything.", answer: false },
      { text: "Tyler starts actually engaging and typing with focus.", answer: true },
      { text: "Grace realizes talking sooner might have helped.", answer: true },
    ],
    buildSentence: [
      {
        target: "The three of us sit down together to create a fairer, more realistic plan for finishing the project.",
        jumbled: ["more", "plan", "sit", "finishing", "The", "to", "project.", "fairer,", "three", "together", "a", "realistic", "the", "create", "for", "down", "of", "us"],
      },
      {
        target: "“What if you handle the parts you can do quickly at home, and we handle anything requiring extra library time?”",
        jumbled: ["home,", "handle", "can", "parts", "at", "if", "extra", "anything", "the", "and", "handle", "requiring", "you", "time?”", "library", "quickly", "“What", "do", "we", "you"],
      },
      {
        target: "Amara suggests thoughtfully, and Tyler nods gratefully at the flexible compromise, adding quietly, “Thanks for hearing me out, Grace.”",
        jumbled: ["suggests", "the", "at", "and", "Grace.”", "“Thanks", "adding", "gratefully", "for", "quietly,", "flexible", "thoughtfully,", "Amara", "nods", "out,", "me", "compromise,", "Tyler", "hearing"],
      },
      {
        target: "He commits to writing his section over the weekend when his work schedule allows more free time.",
        jumbled: ["commits", "when", "section", "his", "over", "to", "his", "allows", "weekend", "work", "free", "writing", "schedule", "He", "more", "time.", "the"],
      },
      {
        target: "Watching him actually engage now, typing quickly with genuine focus, I realize how differently this whole situation might have gone if we had simply talked sooner instead of assuming the worst.",
        jumbled: ["actually", "now,", "engage", "focus,", "him", "I", "had", "Watching", "we", "how", "of", "differently", "might", "situation", "simply", "gone", "whole", "instead", "quickly", "this", "worst.", "typing", "if", "the", "have", "sooner", "genuine", "with", "talked", "realize", "assuming"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finding a fair compromise with someone.",
    mySentenceExample: "We found a fair compromise about who would clean each part of the room.",
  },
  {
    number: 9,
    title: "Presentation Day",
    image: null,
    imageNote: "Grace, Amara, and Tyler standing together at the front of the classroom, presenting their ancient Egypt poster confidently, Mr. Bennett watching with an approving nod.",
    story:
      "On presentation day, all three of us stand together at the front of the classroom, our poster displaying weeks of combined, genuine effort. Tyler speaks clearly about daily life along the Nile River, and I notice a flicker of pride cross his face when classmates ask him engaged follow-up questions. Amara and I present our sections smoothly too, having practiced together the night before to ensure everything flows naturally as one cohesive presentation. “We did it, Grace,” Amara whispers as we finish, and I grin back. Mr. Bennett nods approvingly throughout, occasionally jotting notes on his clipboard while we speak. Finishing together feels genuinely satisfying, unlike the resentful ending I had once imagined weeks earlier.",
    questions: [
      { text: "What does their poster display?", answer: "Weeks of combined, genuine effort." },
      { text: "How does Tyler feel when classmates ask questions?", answer: "A flicker of pride." },
      { text: "How does finishing together feel to Grace?", answer: "Genuinely satisfying." },
    ],
    trueFalse: [
      { text: "All three of them present together.", answer: true },
      { text: "Tyler refuses to speak during the presentation.", answer: false },
      { text: "A flicker of pride crosses Tyler's face.", answer: true },
      { text: "Mr. Bennett nods approvingly during their presentation.", answer: true },
      { text: "Grace feels resentful at the end.", answer: false },
    ],
    buildSentence: [
      {
        target: "On presentation day, all three of us stand together at the front of the classroom, our poster displaying weeks of combined, genuine effort.",
        jumbled: ["genuine", "stand", "presentation", "displaying", "front", "day,", "the", "three", "our", "combined,", "poster", "classroom,", "effort.", "of", "at", "weeks", "us", "On", "the", "of", "of", "all", "together"],
      },
      {
        target: "Tyler speaks clearly about daily life along the Nile River, and I notice a flicker of pride cross his face when classmates ask him engaged follow-up questions.",
        jumbled: ["flicker", "ask", "notice", "engaged", "speaks", "when", "and", "Nile", "questions.", "his", "clearly", "daily", "a", "him", "along", "pride", "face", "classmates", "about", "of", "the", "I", "River,", "Tyler", "follow-up", "life", "cross"],
      },
      {
        target: "Amara and I present our sections smoothly too, having practiced together the night before to ensure everything flows naturally as one cohesive presentation.",
        jumbled: ["having", "the", "to", "smoothly", "before", "Amara", "our", "flows", "too,", "practiced", "night", "one", "and", "naturally", "everything", "I", "ensure", "present", "as", "presentation.", "together", "sections", "cohesive"],
      },
      {
        target: "“We did it, Grace,” Amara whispers as we finish, and I grin back.",
        jumbled: ["back.", "whispers", "as", "“We", "Amara", "I", "it,", "and", "did", "grin", "Grace,”", "we", "finish,"],
      },
      {
        target: "Finishing together feels genuinely satisfying, unlike the resentful ending I had once imagined weeks earlier.",
        jumbled: ["together", "feels", "ending", "weeks", "unlike", "resentful", "imagined", "I", "Finishing", "once", "had", "the", "genuinely", "earlier.", "satisfying,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about presenting something you worked hard on with a team.",
    mySentenceExample: "I felt proud presenting our team's science project after weeks of hard work.",
  },
  {
    number: 10,
    title: "A Fair Grade, A Real Lesson",
    image: null,
    imageNote: "Grace, Amara, and Tyler laughing together outside the classroom after receiving their grade, Tyler showing them something on his phone.",
    story:
      "A few days later, Mr. Bennett returns our graded projects, and I feel genuine relief seeing a strong grade for all three of us equally. More importantly than the grade itself, though, I realize how close I came to judging Tyler unfairly without ever understanding his actual circumstances. Walking out of class together, Tyler mentions he might invite us both to his family's small apartment sometime, something that feels like real friendship forming from what started as pure frustration. “Thanks for actually asking instead of just being angry, Grace,” he tells me quietly, and I nod, genuinely grateful I chose conversation over assumption.",
    questions: [
      { text: "What grade do they receive?", answer: "A strong grade, equally for all three." },
      { text: "What does Grace realize was more important than the grade?", answer: "That she almost judged Tyler unfairly without understanding his circumstances." },
      { text: "What does Tyler thank Grace for?", answer: "Actually asking instead of just being angry." },
    ],
    trueFalse: [
      { text: "They receive a strong grade equally.", answer: true },
      { text: "Grace realizes she almost judged Tyler unfairly.", answer: true },
      { text: "Tyler never wants to speak to Grace again.", answer: false },
      { text: "Tyler thanks Grace for actually asking instead of being angry.", answer: true },
      { text: "Grace regrets choosing conversation over assumption.", answer: false },
    ],
    buildSentence: [
      {
        target: "A few days later, Mr. Bennett returns our graded projects, and I feel genuine relief seeing a strong grade for all three of us equally.",
        jumbled: ["later,", "strong", "projects,", "all", "feel", "graded", "relief", "I", "us", "returns", "Bennett", "Mr.", "and", "equally.", "A", "of", "seeing", "days", "grade", "few", "a", "for", "our", "three", "genuine"],
      },
      {
        target: "More importantly than the grade itself, though, I realize how close I came to judging Tyler unfairly without ever understanding his actual circumstances.",
        jumbled: ["understanding", "actual", "Tyler", "without", "to", "I", "came", "his", "the", "though,", "ever", "More", "how", "grade", "judging", "circumstances.", "realize", "importantly", "than", "itself,", "unfairly", "close", "I"],
      },
      {
        target: "Walking out of class together, Tyler mentions he might invite us both to his family's small apartment sometime, something that feels like real friendship forming from what started as pure frustration.",
        jumbled: ["from", "like", "might", "of", "apartment", "small", "frustration.", "as", "his", "family's", "sometime,", "to", "together,", "what", "real", "that", "forming", "invite", "started", "us", "Tyler", "pure", "he", "out", "friendship", "something", "Walking", "class", "feels", "both", "mentions"],
      },
      {
        target: "“Thanks for actually asking instead of just being angry, Grace,” he tells me quietly, and I nod, genuinely grateful I chose conversation over assumption.",
        jumbled: ["assumption.", "tells", "instead", "for", "he", "chose", "just", "I", "grateful", "quietly,", "nod,", "Grace,”", "I", "genuinely", "of", "actually", "conversation", "being", "asking", "me", "over", "and", "“Thanks", "angry,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time understanding someone changed how you felt about them.",
    mySentenceExample: "Understanding my classmate's busy schedule changed how I felt about her missed meetings.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
