// B2 Teens digital storybook, Book 70: "The Great Screen-Time Debate"
// Static content -- no Supabase. Sixth book in the B2 Teens batch
// (65-72). In-class debate/synthesis exercise, distinct from Book 32
// "The School Debate Team" (A2, tournament performance-anxiety story)
// -- this one centers on weighing and synthesizing arguments for a
// class assignment, not competitive nerves, matching the B2 spec's
// "Debate & Mediate -> Produce" lesson shape and full discourse-
// marker range. Teens-track shape: 3 questions, 5 True/False, 5
// Build-a-Sentence per chapter. Chapter images not generated yet --
// image left null per chapter.
import coverImg from "./assets/storybook70/cover.jpg";

export const STORYBOOK_TITLE = "The Great Screen-Time Debate";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Rafael standing at the front of a classroom holding notecards, a projected slide behind him reading 'Should Teens Have Limited Screen Time?'";

export const CHARACTERS = [
  { name: "Rafael", role: "The narrator, assigned to argue against screen-time limits", look: "Confident but thoughtful, takes debate assignments seriously." },
  { name: "Ms. Okonkwo", role: "The class's social studies teacher", look: "Sharp, encourages genuine critical thinking over scripted arguments." },
  { name: "Petra", role: "Rafael's assigned debate partner, arguing for screen-time limits", look: "Organized, calm under pressure, genuinely curious rather than combative." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Assignment",
    image: null,
    imageNote: "Ms. Okonkwo writing 'Should Teens Have Limited Screen Time?' on the whiteboard, students looking at their assigned pairs.",
    story:
      "Ms. Okonkwo announces a new debate assignment: whether teens should have legally limited screen time, a topic that sparks immediate reactions. I'm assigned to argue against limits, paired with Petra, who's been assigned the opposing position instead. “Rafael, you'll argue against limits,” she says, writing our pairing on the board. Privately, I actually lean toward supporting some limits myself, which makes this assignment feel more challenging than a topic I'd genuinely believed in. Ms. Okonkwo explains that afterward, we won't simply declare a winner, but write a reflective synthesis considering both sides fairly. This structure, she notes, mirrors how real-world disagreements actually get resolved, rather than simple win-or-lose competitions.",
    questions: [
      { text: "What debate topic does Ms. Okonkwo announce?", answer: "Whether teens should have legally limited screen time." },
      { text: "What position is Rafael assigned to argue?", answer: "Against limits." },
      { text: "What does the class do after the debate, according to Ms. Okonkwo?", answer: "Write a reflective synthesis considering both sides." },
    ],
    trueFalse: [
      { text: "The debate topic is whether teens should have limited screen time.", answer: true },
      { text: "Rafael is assigned to argue against limits.", answer: true },
      { text: "Rafael privately believes strongly in his assigned position.", answer: false },
      { text: "After the debate, they write a reflective synthesis, not a winner.", answer: true },
      { text: "Ms. Okonkwo says this mirrors real-world disagreement resolution.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Okonkwo announces a new debate assignment: whether teens should have legally limited screen time, a topic that sparks immediate reactions.",
        jumbled: ["debate", "topic", "limited", "a", "have", "Okonkwo", "teens", "sparks", "announces", "a", "that", "new", "reactions.", "assignment:", "should", "time,", "immediate", "legally", "whether", "screen", "Ms."],
      },
      {
        target: "I'm assigned to argue against limits, paired with Petra, who's been assigned the opposing position instead.",
        jumbled: ["against", "been", "Petra,", "position", "opposing", "argue", "instead.", "assigned", "limits,", "to", "the", "who's", "assigned", "I'm", "paired", "with"],
      },
      {
        target: "“Rafael, you'll argue against limits,” she says, writing our pairing on the board.",
        jumbled: ["writing", "limits,”", "you'll", "against", "argue", "board.", "the", "pairing", "our", "she", "on", "“Rafael,", "says,"],
      },
      {
        target: "Privately, I actually lean toward supporting some limits myself, which makes this assignment feel more challenging than a topic I'd genuinely believed in.",
        jumbled: ["than", "myself,", "this", "some", "believed", "toward", "actually", "genuinely", "Privately,", "in.", "challenging", "which", "topic", "assignment", "lean", "more", "feel", "makes", "a", "supporting", "limits", "I'd", "I"],
      },
      {
        target: "Ms. Okonkwo explains that afterward, we won't simply declare a winner, but write a reflective synthesis considering both sides fairly.",
        jumbled: ["synthesis", "write", "winner,", "considering", "Okonkwo", "that", "afterward,", "explains", "but", "simply", "both", "sides", "a", "reflective", "we", "declare", "Ms.", "a", "fairly.", "won't"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being assigned to argue a position you don't fully agree with.",
    mySentenceExample: "I was assigned to argue a position I didn't fully agree with.",
  },
  {
    number: 2,
    title: "Researching Against My Instinct",
    image: null,
    imageNote: "Rafael at his desk surrounded by printed articles, highlighting sections, laptop open beside him.",
    story:
      "Researching arguments against screen-time limits proves harder than I expected, given that I personally find some limits reasonable. I find studies suggesting that blanket restrictions often fail to address the actual underlying reasons teens overuse screens. Moreover, some researchers argue that teaching self-regulation ultimately matters more than external limits imposed by adults or governments. I also discover that screen time varies enormously in purpose, from mindless scrolling to genuine creative work or meaningful social connection. Okay, Rafael, maybe this side has more to it than you thought, I admit to myself. By the end of my research, I've developed a genuinely stronger case than I'd initially assumed existed.",
    questions: [
      { text: "Why does researching this position prove harder than expected?", answer: "Because he personally finds some limits reasonable." },
      { text: "What do the studies Rafael finds suggest about blanket restrictions?", answer: "That they often fail to address the actual underlying reasons teens overuse screens." },
      { text: "What does Rafael discover about screen time's purpose?", answer: "That it varies enormously, from mindless scrolling to creative work or social connection." },
    ],
    trueFalse: [
      { text: "Rafael personally finds some limits reasonable.", answer: true },
      { text: "Studies suggest blanket restrictions often fail to address root causes.", answer: true },
      { text: "Some researchers argue self-regulation matters more than external limits.", answer: true },
      { text: "Rafael discovers screen time is always used the same way.", answer: false },
      { text: "Rafael develops a stronger case than he'd initially assumed.", answer: true },
    ],
    buildSentence: [
      {
        target: "Researching arguments against screen-time limits proves harder than I expected, given that I personally find some limits reasonable.",
        jumbled: ["given", "reasonable.", "find", "personally", "than", "harder", "that", "I", "I", "some", "screen-time", "Researching", "limits", "expected,", "against", "limits", "proves", "arguments"],
      },
      {
        target: "I find studies suggesting that blanket restrictions often fail to address the actual underlying reasons teens overuse screens.",
        jumbled: ["to", "actual", "underlying", "the", "teens", "fail", "restrictions", "studies", "blanket", "find", "reasons", "I", "address", "that", "often", "overuse", "screens.", "suggesting"],
      },
      {
        target: "Moreover, some researchers argue that teaching self-regulation ultimately matters more than external limits imposed by adults or governments.",
        jumbled: ["argue", "more", "governments.", "limits", "Moreover,", "than", "matters", "imposed", "adults", "self-regulation", "some", "external", "ultimately", "by", "or", "researchers", "that", "teaching"],
      },
      {
        target: "I also discover that screen time varies enormously in purpose, from mindless scrolling to genuine creative work or meaningful social connection.",
        jumbled: ["screen", "varies", "mindless", "scrolling", "genuine", "I", "that", "in", "creative", "or", "to", "enormously", "work", "discover", "from", "meaningful", "also", "connection.", "social", "purpose,", "time"],
      },
      {
        target: "By the end of my research, I've developed a genuinely stronger case than I'd initially assumed existed.",
        jumbled: ["research,", "the", "I've", "a", "I'd", "developed", "my", "existed.", "case", "of", "genuinely", "By", "end", "stronger", "initially", "assumed", "than"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about researching an argument and discovering it was stronger than you expected.",
    mySentenceExample: "I researched an argument and found it stronger than expected.",
  },
  {
    number: 3,
    title: "Meeting with Petra",
    image: null,
    imageNote: "Rafael and Petra sitting across from each other in the library, laptops open, comparing notes before the debate.",
    story:
      "Petra and I meet in the library beforehand, agreeing that even though we're opponents, preparing thoughtfully would benefit the whole class discussion. She shares that she's found compelling research too, particularly around sleep disruption and its measurable effects on teen mental health. “You should look into this too, Rafael,” she says, sliding her notes across the table. I mention my own findings about self-regulation, and she admits she hadn't considered that angle as thoroughly herself. Rather than treating each other as rivals, we end up exchanging genuinely useful sources neither of us had discovered independently. This collaboration, in spite of our opposing assignments, leaves me feeling more prepared than I would have alone.",
    questions: [
      { text: "Where do Rafael and Petra meet beforehand?", answer: "The library." },
      { text: "What has Petra found compelling research about?", answer: "Sleep disruption and its effects on teen mental health." },
      { text: "What happens instead of them treating each other as rivals?", answer: "They exchange genuinely useful sources." },
    ],
    trueFalse: [
      { text: "Rafael and Petra meet in the library beforehand.", answer: true },
      { text: "Petra has found research about sleep disruption and mental health.", answer: true },
      { text: "Petra says she had already considered the self-regulation angle fully.", answer: false },
      { text: "They end up exchanging genuinely useful sources.", answer: true },
      { text: "Rafael feels more prepared than he would have alone.", answer: true },
    ],
    buildSentence: [
      {
        target: "Petra and I meet in the library beforehand, agreeing that even though we're opponents, preparing thoughtfully would benefit the whole class discussion.",
        jumbled: ["whole", "we're", "would", "benefit", "preparing", "the", "meet", "that", "the", "opponents,", "even", "Petra", "I", "and", "class", "beforehand,", "discussion.", "thoughtfully", "in", "though", "agreeing", "library"],
      },
      {
        target: "She shares that she's found compelling research too, particularly around sleep disruption and its measurable effects on teen mental health.",
        jumbled: ["measurable", "particularly", "research", "she's", "effects", "She", "its", "shares", "and", "sleep", "teen", "that", "compelling", "found", "too,", "health.", "on", "disruption", "mental", "around"],
      },
      {
        target: "“You should look into this too, Rafael,” she says, sliding her notes across the table.",
        jumbled: ["“You", "across", "her", "sliding", "look", "this", "too,", "Rafael,”", "table.", "says,", "into", "should", "she", "notes", "the"],
      },
      {
        target: "I mention my own findings about self-regulation, and she admits she hadn't considered that angle as thoroughly herself.",
        jumbled: ["angle", "she", "that", "considered", "I", "as", "my", "thoroughly", "own", "herself.", "mention", "about", "admits", "self-regulation,", "she", "and", "findings", "hadn't"],
      },
      {
        target: "Rather than treating each other as rivals, we end up exchanging genuinely useful sources neither of us had discovered independently.",
        jumbled: ["we", "independently.", "Rather", "had", "us", "discovered", "of", "each", "treating", "as", "sources", "neither", "useful", "rivals,", "end", "up", "than", "other", "exchanging", "genuinely"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about collaborating with someone who has an opposing viewpoint from yours.",
    mySentenceExample: "I collaborated with someone who had an opposing viewpoint from mine.",
  },
  {
    number: 4,
    title: "The Debate Begins",
    image: null,
    imageNote: "Rafael standing at the front of the classroom presenting, Petra seated nearby waiting for her turn, classmates listening attentively.",
    story:
      "“Rafael, you're up first,” Ms. Okonkwo says. The debate begins, and I present my argument first, explaining that blanket limits ignore how differently teens actually use screens. I cite the self-regulation research, arguing that teaching skills ultimately serves teens better than simply restricting their access. Petra responds calmly, presenting her sleep-disruption research and arguing that some structure genuinely protects developing brains from measurable harm. Neither of us raises our voice or interrupts, following Ms. Okonkwo's ground rules about respectful, evidence-based exchange throughout. Watching classmates take notes on both arguments, I realize this debate feels more like a genuine exploration than a competition.",
    questions: [
      { text: "What does Rafael argue about blanket limits?", answer: "That they ignore how differently teens actually use screens." },
      { text: "What does Petra argue about structure and developing brains?", answer: "That some structure genuinely protects them from measurable harm." },
      { text: "How does the debate feel, compared to a competition?", answer: "More like a genuine exploration." },
    ],
    trueFalse: [
      { text: "Rafael argues that blanket limits ignore how differently teens use screens.", answer: true },
      { text: "Petra argues that some structure protects developing brains.", answer: true },
      { text: "Rafael and Petra raise their voices and interrupt each other.", answer: false },
      { text: "They follow ground rules about respectful, evidence-based exchange.", answer: true },
      { text: "The debate feels more like exploration than competition.", answer: true },
    ],
    buildSentence: [
      {
        target: "“Rafael, you're up first,” Ms. Okonkwo says.",
        jumbled: ["Okonkwo", "“Rafael,", "first,”", "Ms.", "you're", "says.", "up"],
      },
      {
        target: "The debate begins, and I present my argument first, explaining that blanket limits ignore how differently teens actually use screens.",
        jumbled: ["that", "use", "how", "debate", "actually", "teens", "my", "blanket", "and", "explaining", "The", "screens.", "differently", "ignore", "I", "present", "argument", "first,", "limits", "begins,"],
      },
      {
        target: "I cite the self-regulation research, arguing that teaching skills ultimately serves teens better than simply restricting their access.",
        jumbled: ["I", "arguing", "cite", "research,", "serves", "access.", "teens", "skills", "teaching", "than", "self-regulation", "that", "better", "their", "restricting", "the", "ultimately", "simply"],
      },
      {
        target: "Petra responds calmly, presenting her sleep-disruption research and arguing that some structure genuinely protects developing brains from measurable harm.",
        jumbled: ["Petra", "research", "arguing", "presenting", "and", "measurable", "calmly,", "that", "brains", "harm.", "protects", "sleep-disruption", "some", "genuinely", "her", "structure", "developing", "responds", "from"],
      },
      {
        target: "Watching classmates take notes on both arguments, I realize this debate feels more like a genuine exploration than a competition.",
        jumbled: ["exploration", "debate", "classmates", "feels", "both", "arguments,", "Watching", "take", "realize", "more", "genuine", "this", "like", "on", "a", "a", "notes", "competition.", "I", "than"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about presenting an argument calmly and respectfully in a debate.",
    mySentenceExample: "I presented my argument calmly and respectfully in the debate.",
  },
  {
    number: 5,
    title: "Questions from the Class",
    image: null,
    imageNote: "Several classmates raising hands, one standing to ask a question directed at both Rafael and Petra.",
    story:
      "Ms. Okonkwo opens the floor for questions, and classmates raise genuinely thoughtful points neither Petra nor I had fully anticipated beforehand. One student asks whether the real issue might actually be content quality rather than screen time itself. Another wonders whether limits should differ based on age, given how differently a twelve-year-old and an eighteen-year-old might use screens. Petra and I both find ourselves nodding along to points that complicate our original, more simplified positions somewhat. Okay, Rafael, this is more complicated than you thought, I admit silently. This questioning phase, moreover, reveals just how much nuance exists beneath what initially seemed like a simple yes-or-no debate.",
    questions: [
      { text: "What does Ms. Okonkwo open the floor for?", answer: "Questions." },
      { text: "What does one student ask about content quality?", answer: "Whether the real issue is content quality rather than screen time itself." },
      { text: "What does another student wonder about age differences?", answer: "Whether limits should differ based on age." },
    ],
    trueFalse: [
      { text: "Ms. Okonkwo opens the floor for questions.", answer: true },
      { text: "A student asks if the real issue is content quality.", answer: true },
      { text: "Another student wonders if limits should differ based on age.", answer: true },
      { text: "Rafael and Petra refuse to consider these new points.", answer: false },
      { text: "This questioning phase reveals nuance beneath a simple debate.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Okonkwo opens the floor for questions, and classmates raise genuinely thoughtful points neither Petra nor I had fully anticipated beforehand.",
        jumbled: ["nor", "anticipated", "classmates", "fully", "opens", "had", "floor", "for", "raise", "beforehand.", "the", "and", "thoughtful", "I", "points", "Okonkwo", "questions,", "genuinely", "Ms.", "neither", "Petra"],
      },
      {
        target: "One student asks whether the real issue might actually be content quality rather than screen time itself.",
        jumbled: ["screen", "issue", "the", "rather", "actually", "real", "quality", "be", "itself.", "student", "asks", "than", "whether", "content", "One", "might", "time"],
      },
      {
        target: "Another wonders whether limits should differ based on age, given how differently a twelve-year-old and an eighteen-year-old might use screens.",
        jumbled: ["whether", "based", "twelve-year-old", "limits", "a", "should", "might", "an", "differ", "how", "on", "age,", "differently", "Another", "wonders", "use", "given", "eighteen-year-old", "screens.", "and"],
      },
      {
        target: "Petra and I both find ourselves nodding along to points that complicate our original, more simplified positions somewhat.",
        jumbled: ["more", "Petra", "find", "complicate", "along", "to", "both", "original,", "points", "ourselves", "that", "nodding", "positions", "I", "somewhat.", "our", "simplified", "and"],
      },
      {
        target: "This questioning phase, moreover, reveals just how much nuance exists beneath what initially seemed like a simple yes-or-no debate.",
        jumbled: ["questioning", "yes-or-no", "phase,", "exists", "nuance", "debate.", "This", "a", "simple", "moreover,", "initially", "much", "like", "reveals", "just", "seemed", "beneath", "what", "how"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a question from someone else that made you rethink your position.",
    mySentenceExample: "A question from someone else made me rethink my position.",
  },
  {
    number: 6,
    title: "Comparing Notes Afterward",
    image: null,
    imageNote: "Rafael and Petra sitting together after class, both reviewing their notes side by side, talking casually now.",
    story:
      "After class, Petra and I sit together, comparing notes and discussing which arguments actually seemed most persuasive to us personally. I admit that her sleep-disruption research genuinely shifted my thinking, even though I still believe self-regulation matters considerably too. “That's fair, Rafael,” she says, smiling slightly. She admits, in turn, that the content-quality question raised during questions had complicated her own certainty about blanket structure. Neither of us has fully changed our original position, but both of us clearly see the issue differently now. This conversation, given how it unfolded, feels more valuable than simply winning or losing the actual debate.",
    questions: [
      { text: "What do Rafael and Petra do after class?", answer: "Sit together comparing notes." },
      { text: "What does Rafael admit shifted his thinking?", answer: "Petra's sleep-disruption research." },
      { text: "What does Petra admit complicated her certainty?", answer: "The content-quality question." },
    ],
    trueFalse: [
      { text: "Rafael and Petra sit together comparing notes after class.", answer: true },
      { text: "Rafael admits Petra's sleep-disruption research shifted his thinking.", answer: true },
      { text: "Petra admits the content-quality question complicated her certainty.", answer: true },
      { text: "Both have completely changed their original positions.", answer: false },
      { text: "This conversation feels more valuable than winning or losing.", answer: true },
    ],
    buildSentence: [
      {
        target: "Petra and I sit together, comparing notes and discussing which arguments actually seemed most persuasive to us personally.",
        jumbled: ["arguments", "which", "and", "Petra", "I", "and", "us", "most", "seemed", "personally.", "comparing", "together,", "notes", "actually", "to", "persuasive", "sit", "discussing"],
      },
      {
        target: "I admit that her sleep-disruption research genuinely shifted my thinking, even though I still believe self-regulation matters considerably too.",
        jumbled: ["still", "research", "even", "matters", "admit", "thinking,", "believe", "self-regulation", "considerably", "shifted", "that", "genuinely", "though", "sleep-disruption", "my", "I", "I", "her", "too."],
      },
      {
        target: "“That's fair, Rafael,” she says, smiling slightly.",
        jumbled: ["she", "fair,", "smiling", "says,", "“That's", "slightly.", "Rafael,”"],
      },
      {
        target: "She admits, in turn, that the content-quality question raised during questions had complicated her own certainty about blanket structure.",
        jumbled: ["had", "blanket", "her", "that", "about", "question", "complicated", "own", "during", "certainty", "the", "content-quality", "in", "structure.", "turn,", "She", "raised", "admits,", "questions"],
      },
      {
        target: "Neither of us has fully changed our original position, but both of us clearly see the issue differently now.",
        jumbled: ["us", "position,", "clearly", "Neither", "see", "us", "issue", "original", "fully", "of", "our", "both", "has", "changed", "now.", "but", "differently", "the", "of"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a conversation with someone who disagreed with you that left you thinking differently.",
    mySentenceExample: "A conversation with someone who disagreed left me thinking differently.",
  },
  {
    number: 7,
    title: "Writing the Synthesis",
    image: null,
    imageNote: "Rafael at his desk at home, writing on a laptop, occasionally glancing at printed notes from the debate.",
    story:
      "Ms. Okonkwo assigns the reflective synthesis, and I sit down to write something considerably more complex than a typical persuasive essay. Rather than declaring a winner, I try genuinely representing both the self-regulation argument and the sleep-disruption research fairly. I write that perhaps the answer isn't strict limits or complete freedom, but flexible guidelines adjusted by age and content type. Given everything I'd heard, I argue that teaching digital literacy might matter more than either extreme position alone. Not bad, Rafael, I think, rereading the final paragraph. Finishing the draft, I feel genuinely proud that this reflects actual thinking, not simply defending my originally assigned position.",
    questions: [
      { text: "What does Rafael sit down to write?", answer: "The reflective synthesis." },
      { text: "What does Rafael try to represent fairly in his synthesis?", answer: "Both the self-regulation argument and the sleep-disruption research." },
      { text: "What does Rafael argue might matter more than either extreme?", answer: "Teaching digital literacy." },
    ],
    trueFalse: [
      { text: "Rafael sits down to write the reflective synthesis.", answer: true },
      { text: "Rafael tries to represent both arguments fairly.", answer: true },
      { text: "Rafael argues strict limits are clearly the only correct answer.", answer: false },
      { text: "Rafael argues teaching digital literacy might matter more than extremes.", answer: true },
      { text: "Rafael feels proud this reflects actual thinking, not just defense.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Okonkwo assigns the reflective synthesis, and I sit down to write something considerably more complex than a typical persuasive essay.",
        jumbled: ["persuasive", "a", "typical", "to", "more", "sit", "Ms.", "essay.", "assigns", "than", "synthesis,", "I", "complex", "something", "the", "Okonkwo", "reflective", "considerably", "down", "write", "and"],
      },
      {
        target: "Rather than declaring a winner, I try genuinely representing both the self-regulation argument and the sleep-disruption research fairly.",
        jumbled: ["self-regulation", "than", "research", "argument", "sleep-disruption", "try", "declaring", "I", "genuinely", "representing", "and", "a", "Rather", "winner,", "both", "fairly.", "the", "the"],
      },
      {
        target: "I write that perhaps the answer isn't strict limits or complete freedom, but flexible guidelines adjusted by age and content type.",
        jumbled: ["freedom,", "perhaps", "age", "the", "flexible", "write", "adjusted", "guidelines", "and", "complete", "that", "by", "isn't", "type.", "limits", "or", "I", "content", "strict", "but", "answer"],
      },
      {
        target: "Given everything I'd heard, I argue that teaching digital literacy might matter more than either extreme position alone.",
        jumbled: ["everything", "extreme", "position", "Given", "heard,", "literacy", "might", "alone.", "either", "I", "than", "argue", "more", "teaching", "that", "matter", "I'd", "digital"],
      },
      {
        target: "Finishing the draft, I feel genuinely proud that this reflects actual thinking, not simply defending my originally assigned position.",
        jumbled: ["defending", "I", "Finishing", "that", "my", "the", "proud", "originally", "this", "thinking,", "actual", "draft,", "position.", "assigned", "genuinely", "simply", "not", "feel", "reflects"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about writing something that fairly represents two sides of an argument.",
    mySentenceExample: "I wrote something that fairly represented two sides of the argument.",
  },
  {
    number: 8,
    title: "Sharing the Synthesis",
    image: null,
    imageNote: "Rafael reading his synthesis aloud to the class, Ms. Okonkwo and classmates listening, Petra nodding along.",
    story:
      "Ms. Okonkwo invites volunteers to share their synthesis aloud, and I decide, somewhat nervously, to read mine to the class. “Go ahead, Rafael, whenever you're ready,” she says encouragingly. As I read my flexible-guidelines argument, I notice Petra nodding along, seemingly recognizing echoes of her own thinking within it. Afterward, she shares her own synthesis, which arrives at a surprisingly similar conclusion from an entirely different starting position. Ms. Okonkwo points out that despite being assigned opposing sides, we'd independently converged on a nuanced, shared understanding. This moment, she explains, demonstrates exactly what genuine intellectual engagement, rather than simple debate-winning, can actually produce.",
    questions: [
      { text: "What does Rafael decide to do, somewhat nervously?", answer: "Read his synthesis aloud to the class." },
      { text: "What does Rafael notice Petra doing while he reads?", answer: "Nodding along." },
      { text: "What does Ms. Okonkwo point out about their conclusions?", answer: "That they'd independently converged on a nuanced, shared understanding." },
    ],
    trueFalse: [
      { text: "Rafael decides to read his synthesis aloud to the class.", answer: true },
      { text: "Rafael notices Petra nodding along as he reads.", answer: true },
      { text: "Petra's synthesis arrives at a completely opposite conclusion.", answer: false },
      { text: "Ms. Okonkwo points out they'd independently converged on similar ideas.", answer: true },
      { text: "This demonstrates what genuine intellectual engagement can produce.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Okonkwo invites volunteers to share their synthesis aloud, and I decide, somewhat nervously, to read mine to the class.",
        jumbled: ["invites", "and", "to", "synthesis", "their", "Okonkwo", "decide,", "class.", "mine", "volunteers", "aloud,", "to", "the", "Ms.", "somewhat", "nervously,", "to", "I", "share", "read"],
      },
      {
        target: "“Go ahead, Rafael, whenever you're ready,” she says encouragingly.",
        jumbled: ["whenever", "“Go", "Rafael,", "says", "she", "encouragingly.", "ahead,", "ready,”", "you're"],
      },
      {
        target: "I notice Petra nodding along, seemingly recognizing echoes of her own thinking within it.",
        jumbled: ["along,", "it.", "own", "thinking", "seemingly", "within", "her", "notice", "nodding", "I", "echoes", "of", "recognizing", "Petra"],
      },
      {
        target: "Afterward, she shares her own synthesis, which arrives at a surprisingly similar conclusion from an entirely different starting position.",
        jumbled: ["position.", "similar", "an", "different", "at", "surprisingly", "synthesis,", "a", "conclusion", "she", "shares", "her", "arrives", "starting", "own", "from", "Afterward,", "which", "entirely"],
      },
      {
        target: "Ms. Okonkwo points out that despite being assigned opposing sides, we'd independently converged on a nuanced, shared understanding.",
        jumbled: ["out", "on", "nuanced,", "opposing", "converged", "sides,", "assigned", "a", "we'd", "that", "understanding.", "points", "being", "shared", "Ms.", "despite", "independently", "Okonkwo"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about discovering someone else reached a similar conclusion from a different starting point.",
    mySentenceExample: "I discovered someone reached a similar conclusion from a different starting point.",
  },
  {
    number: 9,
    title: "A New Perspective on Debate",
    image: null,
    imageNote: "Rafael and Petra chatting casually in the hallway after class, both relaxed, no longer positioned as opponents.",
    story:
      "In the hallway afterward, Petra mentions she used to dread debate assignments, always assuming they meant simply defending a position stubbornly. “Honestly, Rafael, this one actually felt different,” she adds. I admit I'd felt similarly before this particular assignment, expecting competition rather than genuine, collaborative exploration of an issue. We agree that being assigned an unfamiliar or even opposing position actually forced us both to think more carefully. Given this experience, I suspect I'll approach future debates differently, treating them as opportunities rather than battles to win. Walking to my next class, I feel genuinely grateful for an assignment that changed how I think about disagreement itself.",
    questions: [
      { text: "What does Petra mention she used to dread?", answer: "Debate assignments." },
      { text: "What does Rafael admit he felt similarly about before this?", answer: "Expecting competition rather than collaborative exploration." },
      { text: "What do they agree about being assigned an unfamiliar position?", answer: "That it forced them both to think more carefully." },
    ],
    trueFalse: [
      { text: "Petra used to dread debate assignments.", answer: true },
      { text: "Rafael admits he felt similarly before this assignment.", answer: true },
      { text: "They agree an unfamiliar position forced them to think more carefully.", answer: true },
      { text: "Rafael decides he'll approach future debates the exact same way.", answer: false },
      { text: "Rafael feels genuinely grateful for this assignment.", answer: true },
    ],
    buildSentence: [
      {
        target: "In the hallway afterward, Petra mentions she used to dread debate assignments, always assuming they meant simply defending a position stubbornly.",
        jumbled: ["hallway", "mentions", "meant", "dread", "a", "position", "they", "always", "assignments,", "defending", "debate", "stubbornly.", "Petra", "to", "simply", "afterward,", "assuming", "used", "she", "the", "In"],
      },
      {
        target: "“Honestly, Rafael, this one actually felt different,” she adds.",
        jumbled: ["different,”", "adds.", "felt", "“Honestly,", "this", "she", "Rafael,", "actually", "one"],
      },
      {
        target: "I admit I'd felt similarly before this particular assignment, expecting competition rather than genuine, collaborative exploration of an issue.",
        jumbled: ["admit", "similarly", "than", "assignment,", "particular", "I", "an", "exploration", "collaborative", "rather", "expecting", "felt", "genuine,", "before", "issue.", "this", "of", "competition", "I'd"],
      },
      {
        target: "We agree that being assigned an unfamiliar or even opposing position actually forced us both to think more carefully.",
        jumbled: ["position", "unfamiliar", "carefully.", "to", "agree", "that", "even", "more", "actually", "being", "both", "think", "an", "opposing", "forced", "or", "assigned", "We", "us"],
      },
      {
        target: "Walking to my next class, I feel genuinely grateful for an assignment that changed how I think about disagreement itself.",
        jumbled: ["to", "that", "I", "grateful", "class,", "my", "I", "an", "genuinely", "think", "about", "itself.", "for", "disagreement", "feel", "next", "how", "changed", "Walking", "assignment"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an assignment that changed how you think about something.",
    mySentenceExample: "This assignment changed how I think about disagreement itself.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Rafael sitting at his desk that evening, synthesis essay printed and set aside, reflecting quietly with a notebook.",
    story:
      "Looking back on the whole assignment, I realize how differently I might have approached it had I simply defended my assigned position stubbornly. You got lucky with this one, Rafael, I think, tapping my pen against the closed notebook. If I had ignored Petra's research entirely, I would have written a far weaker, less honest synthesis in the end. Instead, genuinely engaging with an opposing viewpoint allowed me to develop a more complete, nuanced understanding of the issue. I've learned that debate, at its best, isn't really about defeating someone else's argument, but refining your own thinking. In the end, this experience taught me that disagreement, approached openly, can actually be a genuine form of learning.",
    questions: [
      { text: "What does Rafael realize looking back on the assignment?", answer: "How differently he might have approached it had he defended his position stubbornly." },
      { text: "What might have happened if he had ignored Petra's research?", answer: "He'd have written a weaker, less honest synthesis." },
      { text: "What has Rafael learned about debate at its best?", answer: "That it's about refining your own thinking, not defeating someone else's argument." },
    ],
    trueFalse: [
      { text: "Rafael realizes he could have approached this differently.", answer: true },
      { text: "Ignoring Petra's research would have made his synthesis weaker.", answer: true },
      { text: "Rafael believes debate is really about defeating someone's argument.", answer: false },
      { text: "Rafael learns disagreement can be a genuine form of learning.", answer: true },
      { text: "Engaging with an opposing viewpoint gave him a more nuanced understanding.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the whole assignment, I realize how differently I might have approached it had I simply defended my assigned position stubbornly.",
        jumbled: ["it", "defended", "had", "might", "I", "realize", "approached", "have", "whole", "assignment,", "how", "my", "back", "position", "stubbornly.", "Looking", "I", "on", "differently", "I", "simply", "the", "assigned"],
      },
      {
        target: "You got lucky with this one, Rafael, I think, tapping my pen against the closed notebook.",
        jumbled: ["against", "with", "one,", "the", "You", "closed", "this", "I", "got", "pen", "lucky", "Rafael,", "think,", "tapping", "my", "notebook."],
      },
      {
        target: "I would have written a far weaker, less honest synthesis in the end.",
        jumbled: ["the", "honest", "a", "synthesis", "end.", "have", "I", "far", "weaker,", "written", "less", "would", "in"],
      },
      {
        target: "Instead, genuinely engaging with an opposing viewpoint allowed me to develop a more complete, nuanced understanding of the issue.",
        jumbled: ["more", "understanding", "genuinely", "opposing", "nuanced", "Instead,", "to", "with", "complete,", "me", "a", "viewpoint", "allowed", "an", "develop", "engaging", "of", "the", "issue."],
      },
      {
        target: "I've learned that debate, at its best, isn't really about defeating someone else's argument, but refining your own thinking.",
        jumbled: ["defeating", "its", "best,", "but", "really", "refining", "isn't", "else's", "at", "argument,", "debate,", "thinking.", "your", "learned", "about", "someone", "own", "I've", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from genuinely engaging with an opposing viewpoint.",
    mySentenceExample: "I learned that engaging with opposing viewpoints refines my own thinking.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
