// B2 Teens digital storybook, Book 66: "Choosing to Study Abroad"
// Static content -- no Supabase. Second book in the B2 Teens batch
// (65-72). Personal-identity decision story, distinct from Book 54
// "Choosing My Own Path" (a career-vs-family-pressure conflict) --
// this one weighs opportunity/growth against roots/relationships,
// with heavier use of past perfect, second/third conditional, and
// discourse markers per the B2 Teens spec. Teens-track shape: 3
// questions, 5 True/False, 5 Build-a-Sentence per chapter. Images
// not generated yet -- image left null per chapter.
import coverImg from "./assets/storybook66/cover.jpg";

export const STORYBOOK_TITLE = "Choosing to Study Abroad";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Isabel sitting on her bedroom floor surrounded by two open folders — one labeled 'Exchange Program,' one labeled 'Stay Home' — looking torn.";

export const CHARACTERS = [
  { name: "Isabel", role: "The narrator, a student weighing a semester abroad", look: "Casual clothes, hair in a loose bun, thoughtful and a little anxious." },
  { name: "Renata", role: "Isabel's mother", look: "Warm but direct, works long hours, wants what's best for Isabel." },
  { name: "Jules", role: "Isabel's closest friend", look: "Energetic, supportive, has never been apart from Isabel for long." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "An Email Arrives",
    image: null,
    imageNote: "Isabel reading an email on her laptop at her desk, eyes wide with a mix of excitement and disbelief.",
    story:
      "An email arrives from my school's exchange program, confirming I've been accepted to spend next semester studying in another country. I'd applied months ago, half-convinced I wouldn't actually be chosen among so many strong applicants. Reading the acceptance now, excitement floods through me, quickly followed by a wave of genuine uncertainty about what this decision would actually mean. Leaving for five months would mean missing my final year's biggest events, alongside time with people I deeply care about. Okay, Isabel, don't panic, I tell myself, rereading the email a second time. Still staring at the screen, I realize this is a decision I can't make impulsively, however thrilling it initially feels.",
    questions: [
      { text: "What does the email confirm?", answer: "That Isabel's been accepted to study abroad next semester." },
      { text: "How did Isabel feel while waiting to hear back?", answer: "Half-convinced she wouldn't be chosen." },
      { text: "What would leaving for five months mean for Isabel?", answer: "Missing her final year's biggest events." },
    ],
    trueFalse: [
      { text: "Isabel has been accepted into the exchange program.", answer: true },
      { text: "Isabel was fully confident she would be chosen.", answer: false },
      { text: "Excitement is followed by a wave of genuine uncertainty.", answer: true },
      { text: "Leaving would mean missing her final year's biggest events.", answer: true },
      { text: "Isabel decides to accept immediately without thinking.", answer: false },
    ],
    buildSentence: [
      {
        target: "An email arrives from my school's exchange program, confirming I've been accepted to spend next semester studying in another country.",
        jumbled: ["been", "confirming", "to", "program,", "accepted", "semester", "my", "email", "another", "school's", "from", "country.", "spend", "An", "next", "arrives", "I've", "exchange", "in", "studying"],
      },
      {
        target: "I'd applied months ago, half-convinced I wouldn't actually be chosen among so many strong applicants.",
        jumbled: ["so", "I'd", "applicants.", "actually", "many", "among", "months", "half-convinced", "I", "wouldn't", "applied", "be", "chosen", "ago,", "strong"],
      },
      {
        target: "Reading the acceptance now, excitement floods through me, quickly followed by a wave of genuine uncertainty about what this decision would actually mean.",
        jumbled: ["Reading", "uncertainty", "floods", "this", "wave", "what", "decision", "by", "excitement", "of", "would", "genuine", "followed", "me,", "acceptance", "through", "mean.", "the", "quickly", "actually", "about", "now,", "a"],
      },
      {
        target: "Leaving for five months would mean missing my final year's biggest events, alongside time with people I deeply care about.",
        jumbled: ["I", "biggest", "year's", "months", "for", "my", "final", "missing", "deeply", "events,", "people", "with", "time", "would", "care", "alongside", "mean", "about.", "Leaving", "five"],
      },
      {
        target: "Still staring at the screen, I realize this is a decision I can't make impulsively, however thrilling it initially feels.",
        jumbled: ["a", "Still", "initially", "the", "realize", "can't", "feels.", "I", "I", "it", "is", "decision", "however", "staring", "make", "impulsively,", "screen,", "thrilling", "at", "this"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about receiving news that was both exciting and uncertain.",
    mySentenceExample: "I received news that was both exciting and uncertain.",
  },
  {
    number: 2,
    title: "Telling My Mother",
    image: null,
    imageNote: "Isabel sitting across from her mother at the kitchen table, both holding mugs, mid-conversation.",
    story:
      "That evening, I tell my mother about the acceptance, watching her expression shift between pride and visible concern. “Isabel, this is incredible news,” she says first, before the concern creeps in. She admits that, had she been given a similar opportunity at my age, she may have hesitated for entirely different reasons. Money had always been tight growing up, so an opportunity like this simply hadn't existed within her own possibilities back then. Nevertheless, she reminds me gently that this decision ultimately has to be mine, not something she or anyone else should decide for me. I appreciate her honesty, even though it leaves me with more to consider than before.",
    questions: [
      { text: "What does Isabel's mother's expression shift between?", answer: "Pride and visible concern." },
      { text: "What does Isabel's mother admit about her own past?", answer: "That money had been tight, so this opportunity never existed for her." },
      { text: "What does Isabel's mother remind her about the decision?", answer: "That it has to be Isabel's own." },
    ],
    trueFalse: [
      { text: "Isabel's mother's expression shifts between pride and concern.", answer: true },
      { text: "Isabel's mother says money had always been tight growing up.", answer: true },
      { text: "Isabel's mother insists Isabel must accept the offer.", answer: false },
      { text: "Isabel's mother says this decision ultimately has to be Isabel's.", answer: true },
      { text: "Isabel appreciates her mother's honesty about the situation.", answer: true },
    ],
    buildSentence: [
      {
        target: "That evening, I tell my mother about the acceptance, watching her expression shift between pride and visible concern.",
        jumbled: ["about", "concern.", "between", "visible", "tell", "evening,", "my", "acceptance,", "watching", "I", "her", "the", "and", "expression", "pride", "That", "shift", "mother"],
      },
      {
        target: "“Isabel, this is incredible news,” she says first, before the concern creeps in.",
        jumbled: ["news,”", "says", "the", "incredible", "concern", "is", "in.", "first,", "“Isabel,", "she", "this", "creeps", "before"],
      },
      {
        target: "She admits that, had she been given a similar opportunity at my age, she may have hesitated for entirely different reasons.",
        jumbled: ["have", "given", "may", "had", "admits", "opportunity", "hesitated", "a", "been", "reasons.", "She", "for", "similar", "she", "my", "she", "different", "at", "entirely", "that,", "age,"],
      },
      {
        target: "Money had always been tight growing up, so an opportunity like this simply hadn't existed within her own possibilities back then.",
        jumbled: ["this", "back", "own", "opportunity", "Money", "tight", "up,", "then.", "her", "an", "simply", "growing", "always", "existed", "like", "possibilities", "hadn't", "been", "within", "had", "so"],
      },
      {
        target: "Nevertheless, she reminds me gently that this decision ultimately has to be mine, not something she or anyone else should decide for me.",
        jumbled: ["or", "decide", "that", "Nevertheless,", "gently", "should", "to", "something", "mine,", "me", "she", "for", "this", "reminds", "decision", "be", "else", "she", "me.", "not", "anyone", "ultimately", "has"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a parent giving you honest advice about a big decision.",
    mySentenceExample: "My mother gave me honest advice about a big decision.",
  },
  {
    number: 3,
    title: "Jules Reacts",
    image: null,
    imageNote: "Isabel and Jules sitting on a park bench, Jules looking visibly upset while Isabel tries to explain.",
    story:
      "I tell Jules the news the next day, expecting excitement, though her reaction turns out considerably more complicated than I'd anticipated. She congratulates me genuinely, but I can tell something underneath her words feels noticeably strained and uncertain. Eventually, she admits she's scared of what our friendship might become after five months of near-constant separation. “I just don't want to lose you, Isabel,” she finally says. I reassure her that distance wouldn't necessarily weaken what we've built, though I honestly can't promise nothing would change at all. Given how close we've always been, I understand why this news feels more threatening to her than exciting.",
    questions: [
      { text: "How does Jules's reaction turn out compared to what Isabel expected?", answer: "More complicated." },
      { text: "What does Jules eventually admit she's scared of?", answer: "What their friendship might become after five months apart." },
      { text: "What does Isabel reassure Jules about?", answer: "That distance wouldn't necessarily weaken what they've built." },
    ],
    trueFalse: [
      { text: "Jules's reaction turns out more complicated than Isabel expected.", answer: true },
      { text: "Jules congratulates Isabel genuinely at first.", answer: true },
      { text: "Jules admits she's scared about their friendship changing.", answer: true },
      { text: "Isabel promises nothing at all will ever change.", answer: false },
      { text: "Isabel understands why this news feels threatening to Jules.", answer: true },
    ],
    buildSentence: [
      {
        target: "I tell Jules the news the next day, expecting excitement, though her reaction turns out considerably more complicated than I'd anticipated.",
        jumbled: ["turns", "more", "though", "reaction", "I", "I'd", "her", "next", "considerably", "complicated", "Jules", "day,", "expecting", "the", "tell", "than", "excitement,", "news", "out", "anticipated.", "the"],
      },
      {
        target: "She congratulates me genuinely, but I can tell something underneath her words feels noticeably strained and uncertain.",
        jumbled: ["congratulates", "She", "her", "I", "and", "feels", "genuinely,", "words", "but", "me", "tell", "noticeably", "strained", "underneath", "can", "something", "uncertain."],
      },
      {
        target: "Eventually, she admits she's scared of what our friendship might become after five months of near-constant separation.",
        jumbled: ["of", "she", "our", "she's", "become", "scared", "of", "admits", "near-constant", "five", "might", "separation.", "Eventually,", "months", "friendship", "after", "what"],
      },
      {
        target: "“I just don't want to lose you, Isabel,” she finally says.",
        jumbled: ["“I", "Isabel,”", "says.", "just", "lose", "to", "she", "finally", "don't", "you,", "want"],
      },
      {
        target: "I reassure her that distance wouldn't necessarily weaken what we've built, though I honestly can't promise nothing would change at all.",
        jumbled: ["at", "necessarily", "I", "we've", "I", "honestly", "reassure", "though", "can't", "promise", "what", "built,", "would", "weaken", "change", "all.", "that", "distance", "her", "nothing", "wouldn't"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a friend reacting unexpectedly to your good news.",
    mySentenceExample: "My friend reacted unexpectedly to my good news.",
  },
  {
    number: 4,
    title: "Weighing the Options",
    image: null,
    imageNote: "Isabel sitting at her desk, writing a two-column list titled 'If I Go' and 'If I Stay' on a large notepad.",
    story:
      "Trying to think more clearly, I write out two lists: everything I'd gain by going, and everything I'd risk by leaving. If I went, I'd experience an entirely different culture, gain independence, and strengthen my university applications considerably. On the other hand, if I stayed, I'd graduate alongside Jules, avoid disrupting our long friendship, and skip the anxiety of navigating somewhere unfamiliar. Come on, Isabel, one of these has to win out, I think, staring at the two columns. Neither list feels obviously more compelling than the other, which frustrates me more than I'd expected it to. I realize that whichever choice I make, some genuine loss seems unavoidable either way.",
    questions: [
      { text: "What does Isabel write out to think more clearly?", answer: "Two lists -- what she'd gain and what she'd risk." },
      { text: "What would Isabel gain if she went?", answer: "A different culture, independence, and stronger university applications." },
      { text: "What would Isabel avoid if she stayed?", answer: "Disrupting her friendship with Jules." },
    ],
    trueFalse: [
      { text: "Isabel writes out two lists comparing going and staying.", answer: true },
      { text: "Going would mean strengthening her university applications.", answer: true },
      { text: "Staying would mean disrupting her long friendship with Jules.", answer: false },
      { text: "Neither list feels obviously more compelling than the other.", answer: true },
      { text: "Isabel realizes some genuine loss seems unavoidable either way.", answer: true },
    ],
    buildSentence: [
      {
        target: "Trying to think more clearly, I write out two lists: everything I'd gain by going, and everything I'd risk by leaving.",
        jumbled: ["think", "write", "Trying", "everything", "to", "and", "I'd", "I'd", "going,", "lists:", "everything", "by", "risk", "by", "clearly,", "more", "two", "leaving.", "out", "I", "gain"],
      },
      {
        target: "I'd experience an entirely different culture, gain independence, and strengthen my university applications considerably.",
        jumbled: ["strengthen", "my", "and", "applications", "considerably.", "independence,", "entirely", "I'd", "culture,", "different", "an", "experience", "gain", "university"],
      },
      {
        target: "On the other hand, if I stayed, I'd graduate alongside Jules, avoid disrupting our long friendship, and skip the anxiety of navigating somewhere unfamiliar.",
        jumbled: ["our", "and", "the", "alongside", "skip", "of", "long", "friendship,", "the", "On", "avoid", "stayed,", "if", "graduate", "I'd", "somewhere", "I", "disrupting", "unfamiliar.", "hand,", "Jules,", "other", "navigating", "anxiety"],
      },
      {
        target: "Come on, Isabel, one of these has to win out, I think, staring at the two columns.",
        jumbled: ["out,", "these", "I", "win", "to", "think,", "Isabel,", "staring", "on,", "columns.", "Come", "two", "the", "of", "has", "one", "at"],
      },
      {
        target: "Neither list feels obviously more compelling than the other, which frustrates me more than I'd expected it to.",
        jumbled: ["than", "to.", "compelling", "list", "which", "Neither", "it", "other,", "than", "more", "I'd", "obviously", "feels", "expected", "the", "frustrates", "me", "more"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about weighing two choices where both options involve some kind of loss.",
    mySentenceExample: "I weighed two choices where both involved some kind of loss.",
  },
  {
    number: 5,
    title: "Talking to a Former Exchange Student",
    image: null,
    imageNote: "Isabel sitting in a school hallway, talking with an older student who has photos from her own exchange year on her phone.",
    story:
      "My school counselor connects me with Priya, a senior who'd completed a similar exchange program the previous year herself. Priya admits that had she known how hard the first month would be, she may have hesitated to apply at all. “Trust me, Isabel, the hard part doesn't last,” she adds. However, she explains that the friendships and independence she gained ultimately outweighed those difficult early weeks considerably. She mentions that her own best friend back home had actually grown closer to her, not more distant, throughout that time apart. Hearing this firsthand account gives me a more honest, less idealized picture than I'd had before.",
    questions: [
      { text: "Who does Isabel's school counselor connect her with?", answer: "Priya, a former exchange student." },
      { text: "What does Priya admit about the first month?", answer: "That it was hard, and she might have hesitated if she'd known." },
      { text: "What does Priya say happened with her own best friend?", answer: "That they grew closer, not more distant." },
    ],
    trueFalse: [
      { text: "The school counselor connects Isabel with Priya.", answer: true },
      { text: "Priya completed a similar exchange program the previous year.", answer: true },
      { text: "Priya says the first month was easy and simple.", answer: false },
      { text: "Priya's best friend actually grew closer to her, not more distant.", answer: true },
      { text: "This gives Isabel a more honest, less idealized picture.", answer: true },
    ],
    buildSentence: [
      {
        target: "My school counselor connects me with Priya, a senior who'd completed a similar exchange program the previous year herself.",
        jumbled: ["similar", "Priya,", "a", "a", "exchange", "completed", "school", "who'd", "counselor", "My", "me", "connects", "senior", "herself.", "year", "program", "previous", "with", "the"],
      },
      {
        target: "Priya admits that had she known how hard the first month would be, she may have hesitated to apply at all.",
        jumbled: ["Priya", "may", "apply", "known", "be,", "all.", "she", "the", "month", "that", "hesitated", "at", "to", "admits", "how", "had", "first", "would", "have", "she", "hard"],
      },
      {
        target: "“Trust me, Isabel, the hard part doesn't last,” she adds.",
        jumbled: ["part", "doesn't", "adds.", "me,", "last,”", "the", "hard", "Isabel,", "“Trust", "she"],
      },
      {
        target: "However, she explains that the friendships and independence she gained ultimately outweighed those difficult early weeks considerably.",
        jumbled: ["she", "However,", "she", "ultimately", "and", "independence", "early", "considerably.", "weeks", "explains", "gained", "that", "difficult", "friendships", "outweighed", "the", "those"],
      },
      {
        target: "She mentions that her own best friend back home had actually grown closer to her, not more distant, throughout that time apart.",
        jumbled: ["own", "had", "distant,", "back", "more", "grown", "her,", "closer", "apart.", "throughout", "that", "best", "friend", "home", "mentions", "to", "actually", "that", "She", "time", "her", "not"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning something valuable from someone who had already faced the same decision.",
    mySentenceExample: "I learned something valuable from someone who faced the same decision.",
  },
  {
    number: 6,
    title: "A Conversation with Jules",
    image: null,
    imageNote: "Isabel and Jules sitting together on Isabel's bed, both more relaxed this time, talking honestly.",
    story:
      "I share Priya's story with Jules, hoping it might ease some of the worry from our earlier conversation. Jules listens carefully, then admits that her fear wasn't really about distance itself, but about feeling replaced somehow. “I know it sounds silly, Isabel,” she adds. I tell her honestly that no experience abroad could ever replace what we've built over all these years together. Given how long we've been friends, I explain, a semester apart seems unlikely to undo something that solid. Jules finally smiles, saying that hearing this directly helps more than she'd expected it to.",
    questions: [
      { text: "What does Isabel share with Jules?", answer: "Priya's story." },
      { text: "What does Jules admit her fear was really about?", answer: "Feeling replaced." },
      { text: "What does Isabel tell Jules honestly?", answer: "That no experience abroad could replace what they've built." },
    ],
    trueFalse: [
      { text: "Isabel shares Priya's story with Jules.", answer: true },
      { text: "Jules admits her fear was about feeling replaced.", answer: true },
      { text: "Isabel tells Jules nothing could ever match their friendship.", answer: true },
      { text: "Jules says hearing this makes no difference at all.", answer: false },
      { text: "Jules finally smiles, saying this helps more than expected.", answer: true },
    ],
    buildSentence: [
      {
        target: "I share Priya's story with Jules, hoping it might ease some of the worry from our earlier conversation.",
        jumbled: ["might", "conversation.", "from", "with", "worry", "earlier", "of", "the", "hoping", "our", "Priya's", "ease", "Jules,", "story", "it", "I", "share", "some"],
      },
      {
        target: "Jules listens carefully, then admits that her fear wasn't really about distance itself, but about feeling replaced somehow.",
        jumbled: ["replaced", "somehow.", "that", "admits", "fear", "about", "Jules", "then", "but", "her", "really", "wasn't", "listens", "itself,", "about", "carefully,", "distance", "feeling"],
      },
      {
        target: "“I know it sounds silly, Isabel,” she adds.",
        jumbled: ["she", "silly,", "it", "know", "“I", "Isabel,”", "adds.", "sounds"],
      },
      {
        target: "I tell her honestly that no experience abroad could ever replace what we've built over all these years together.",
        jumbled: ["I", "ever", "replace", "could", "that", "all", "together.", "built", "over", "years", "these", "what", "experience", "no", "honestly", "abroad", "tell", "we've", "her"],
      },
      {
        target: "Given how long we've been friends, I explain, a semester apart seems unlikely to undo something that solid.",
        jumbled: ["long", "seems", "friends,", "been", "that", "a", "something", "Given", "solid.", "unlikely", "undo", "we've", "to", "I", "how", "apart", "semester", "explain,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a conversation that helped ease a friend's worry.",
    mySentenceExample: "A conversation with my friend helped ease her worry.",
  },
  {
    number: 7,
    title: "Making the Decision",
    image: null,
    imageNote: "Isabel sitting alone at her desk late at night, the two lists from earlier now set aside, a single acceptance form in front of her.",
    story:
      "After weeks of going back and forth, I finally sit down to make my actual decision, rather than continuing to circle the question endlessly. I realize that if I let fear of missing out guide this choice entirely, I'd likely regret not trying at all. Nevertheless, I also recognize that choosing to go doesn't mean abandoning what matters here, just experiencing something additional alongside it. With this reframing, the decision suddenly feels less like choosing between two opposing lives and more like simply expanding one. You can do this, Isabel, I tell myself, picking up the pen. I sign the acceptance form, feeling a mixture of nervousness and genuine excitement I hadn't expected to feel simultaneously.",
    questions: [
      { text: "What does Isabel finally sit down to do?", answer: "Make her actual decision." },
      { text: "What does Isabel realize about letting fear guide her choice?", answer: "That she'd likely regret not trying." },
      { text: "What does Isabel do at the end of the chapter?", answer: "Signs the acceptance form." },
    ],
    trueFalse: [
      { text: "Isabel finally sits down to make her actual decision.", answer: true },
      { text: "Isabel realizes letting fear guide her might lead to regret.", answer: true },
      { text: "Isabel decides going means abandoning what matters at home.", answer: false },
      { text: "The decision starts to feel like expanding one life.", answer: true },
      { text: "Isabel signs the acceptance form by the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "I finally sit down to make my actual decision, rather than continuing to circle the question endlessly.",
        jumbled: ["make", "I", "the", "to", "down", "actual", "than", "decision,", "circle", "question", "rather", "endlessly.", "finally", "continuing", "to", "sit", "my"],
      },
      {
        target: "I realize that if I let fear of missing out guide this choice entirely, I'd likely regret not trying at all.",
        jumbled: ["entirely,", "of", "trying", "fear", "missing", "out", "not", "regret", "this", "at", "that", "let", "if", "likely", "I'd", "guide", "all.", "choice", "realize", "I", "I"],
      },
      {
        target: "Nevertheless, I also recognize that choosing to go doesn't mean abandoning what matters here, just experiencing something additional alongside it.",
        jumbled: ["also", "something", "I", "doesn't", "it.", "alongside", "go", "additional", "that", "to", "recognize", "abandoning", "choosing", "matters", "Nevertheless,", "what", "experiencing", "just", "mean", "here,"],
      },
      {
        target: "With this reframing, the decision suddenly feels less like choosing between two opposing lives and more like simply expanding one.",
        jumbled: ["simply", "choosing", "one.", "between", "this", "lives", "more", "less", "reframing,", "the", "like", "opposing", "two", "expanding", "feels", "suddenly", "like", "and", "With", "decision"],
      },
      {
        target: "I sign the acceptance form, feeling a mixture of nervousness and genuine excitement I hadn't expected to feel simultaneously.",
        jumbled: ["nervousness", "a", "feeling", "of", "excitement", "I", "to", "form,", "genuine", "feel", "and", "expected", "hadn't", "the", "simultaneously.", "acceptance", "I", "sign", "mixture"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finally making a difficult decision after a lot of back-and-forth thinking.",
    mySentenceExample: "I finally made a difficult decision after a lot of thinking.",
  },
  {
    number: 8,
    title: "Preparing to Leave",
    image: null,
    imageNote: "Isabel's room half-packed, suitcase open on the bed, Jules helping fold clothes and laughing about something.",
    story:
      "The weeks before departure pass in a blur of paperwork, packing, and increasingly emotional goodbyes with people I care about deeply. Jules helps me pack, insisting on folding everything her own particular way, even though I honestly don't mind either method. My mother writes a small note I find tucked inside my suitcase: “I'm so proud of you, Isabel, whatever happens next.” As departure day approaches, I notice my nervousness gradually shifting into something closer to genuine anticipation instead. Whatever challenges await me abroad, I feel increasingly confident this decision was ultimately the right one for me.",
    questions: [
      { text: "How do the weeks before departure pass?", answer: "In a blur of paperwork, packing, and goodbyes." },
      { text: "What does Jules insist on doing while helping pack?", answer: "Folding everything her own particular way." },
      { text: "What does Isabel find tucked inside her suitcase?", answer: "A note from her mother saying she's proud." },
    ],
    trueFalse: [
      { text: "The weeks before departure pass in a blur of goodbyes.", answer: true },
      { text: "Jules insists on folding everything her own particular way.", answer: true },
      { text: "Isabel finds a small note from her mother in her suitcase.", answer: true },
      { text: "Isabel's nervousness stays exactly the same throughout.", answer: false },
      { text: "Isabel feels increasingly confident about her decision.", answer: true },
    ],
    buildSentence: [
      {
        target: "The weeks before departure pass in a blur of paperwork, packing, and increasingly emotional goodbyes with people I care about deeply.",
        jumbled: ["pass", "paperwork,", "blur", "The", "people", "in", "deeply.", "and", "about", "with", "departure", "care", "a", "emotional", "of", "before", "increasingly", "goodbyes", "packing,", "I", "weeks"],
      },
      {
        target: "Jules helps me pack, insisting on folding everything her own particular way, even though I honestly don't mind either method.",
        jumbled: ["everything", "helps", "even", "method.", "Jules", "I", "don't", "though", "folding", "me", "mind", "way,", "honestly", "on", "pack,", "either", "insisting", "particular", "her", "own"],
      },
      {
        target: "My mother writes a small note I find tucked inside my suitcase: “I'm so proud of you, Isabel, whatever happens next.”",
        jumbled: ["find", "suitcase:", "note", "proud", "My", "of", "happens", "a", "you,", "small", "next.”", "I", "my", "so", "writes", "“I'm", "Isabel,", "tucked", "inside", "mother", "whatever"],
      },
      {
        target: "I notice my nervousness gradually shifting into something closer to genuine anticipation instead.",
        jumbled: ["into", "genuine", "I", "gradually", "nervousness", "shifting", "my", "closer", "notice", "to", "something", "instead.", "anticipation"],
      },
      {
        target: "Whatever challenges await me abroad, I feel increasingly confident this decision was ultimately the right one for me.",
        jumbled: ["this", "I", "me.", "challenges", "was", "decision", "for", "me", "right", "abroad,", "one", "feel", "Whatever", "await", "increasingly", "ultimately", "the", "confident"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about the mixed feelings of preparing to leave for something new.",
    mySentenceExample: "I felt mixed emotions while preparing to leave for something new.",
  },
  {
    number: 9,
    title: "A Video Call Home",
    image: null,
    imageNote: "Isabel sitting in an unfamiliar dorm room, laptop open on a video call with Jules and her mother visible on screen.",
    story:
      "Three weeks into the exchange, I finally settle into a rhythm and call home to update everyone properly. Jules appears on screen first, eagerly asking about everything, from classes to the food to the friends I've apparently already made. “Isabel! Tell us everything,” she says, practically bouncing in her seat. My mother joins moments later, visibly relieved seeing my face looking genuinely happy rather than merely coping. I admit that the first two weeks had honestly been harder than I'd expected, filled with homesickness I hadn't fully anticipated. Nevertheless, I explain that things have improved considerably, and I'm genuinely glad I hadn't let that early difficulty change my decision.",
    questions: [
      { text: "What does Isabel finally do three weeks into the exchange?", answer: "Calls home." },
      { text: "How does Isabel's mother react seeing her face?", answer: "Visibly relieved." },
      { text: "What does Isabel admit about the first two weeks?", answer: "That they were harder than expected, filled with homesickness." },
    ],
    trueFalse: [
      { text: "Isabel calls home three weeks into the exchange.", answer: true },
      { text: "Jules asks about classes, food, and new friends.", answer: true },
      { text: "Isabel's mother looks visibly relieved seeing her happy.", answer: true },
      { text: "Isabel says the first two weeks were easy and simple.", answer: false },
      { text: "Isabel is glad she didn't let early difficulty change her decision.", answer: true },
    ],
    buildSentence: [
      {
        target: "Three weeks into the exchange, I finally settle into a rhythm and call home to update everyone properly.",
        jumbled: ["into", "everyone", "into", "to", "home", "weeks", "rhythm", "Three", "update", "a", "call", "the", "properly.", "exchange,", "finally", "and", "settle", "I"],
      },
      {
        target: "Jules appears on screen first, eagerly asking about everything, from classes to the food to the friends I've apparently already made.",
        jumbled: ["Jules", "screen", "about", "already", "the", "appears", "everything,", "classes", "from", "on", "apparently", "friends", "to", "to", "the", "asking", "first,", "eagerly", "I've", "made.", "food"],
      },
      {
        target: "“Isabel! Tell us everything,” she says, practically bouncing in her seat.",
        jumbled: ["seat.", "says,", "her", "she", "everything,”", "practically", "“Isabel!", "Tell", "in", "us", "bouncing"],
      },
      {
        target: "My mother joins moments later, visibly relieved seeing my face looking genuinely happy rather than merely coping.",
        jumbled: ["mother", "face", "later,", "than", "happy", "merely", "looking", "genuinely", "My", "rather", "my", "seeing", "visibly", "coping.", "moments", "joins", "relieved"],
      },
      {
        target: "I admit that the first two weeks had honestly been harder than I'd expected, filled with homesickness I hadn't fully anticipated.",
        jumbled: ["the", "than", "honestly", "weeks", "I", "homesickness", "with", "harder", "I'd", "been", "fully", "admit", "that", "I", "had", "anticipated.", "filled", "first", "hadn't", "expected,", "two"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about pushing through a difficult adjustment period and things eventually improving.",
    mySentenceExample: "I pushed through a difficult adjustment and things eventually improved.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Isabel sitting on a balcony overseas at sunset, journal open on her lap, writing reflectively.",
    story:
      "Looking back on the decision now, I realize how differently things might have gone had I let fear of change decide for me. You made the right call, Isabel, I think, watching the sunset settle over the unfamiliar rooftops. If I had stayed simply to avoid discomfort, I likely would have wondered, for years afterward, what I'd missed. Instead, choosing to face uncertainty directly taught me something about myself I couldn't have learned any other way. My friendship with Jules, moreover, has genuinely deepened rather than weakened, exactly as Priya had once suggested it might. In the end, this experience taught me that growth and belonging aren't actually opposites, but can exist together simultaneously.",
    questions: [
      { text: "What does Isabel realize looking back on the decision?", answer: "How differently things might have gone had fear decided for her." },
      { text: "What might have happened if she had stayed simply to avoid discomfort?", answer: "She'd have wondered for years what she missed." },
      { text: "What has Isabel learned about growth and belonging?", answer: "That they aren't opposites -- they can exist together." },
    ],
    trueFalse: [
      { text: "Isabel realizes things might have gone differently without this choice.", answer: true },
      { text: "Staying to avoid discomfort might have led to years of wondering.", answer: true },
      { text: "Isabel's friendship with Jules has actually weakened over time.", answer: false },
      { text: "Isabel learns growth and belonging can exist together simultaneously.", answer: true },
      { text: "Choosing to face uncertainty taught Isabel something about herself.", answer: true },
    ],
    buildSentence: [
      {
        target: "Looking back on the decision now, I realize how differently things might have gone had I let fear of change decide for me.",
        jumbled: ["change", "back", "realize", "the", "had", "how", "I", "for", "me.", "I", "of", "let", "things", "decide", "Looking", "decision", "on", "now,", "fear", "gone", "have", "might", "differently"],
      },
      {
        target: "You made the right call, Isabel, I think, watching the sunset settle over the unfamiliar rooftops.",
        jumbled: ["made", "You", "sunset", "the", "Isabel,", "watching", "over", "right", "settle", "call,", "the", "the", "rooftops.", "unfamiliar", "think,", "I"],
      },
      {
        target: "I likely would have wondered, for years afterward, what I'd missed.",
        jumbled: ["what", "would", "I'd", "likely", "afterward,", "wondered,", "have", "for", "years", "missed.", "I"],
      },
      {
        target: "Instead, choosing to face uncertainty directly taught me something about myself I couldn't have learned any other way.",
        jumbled: ["learned", "me", "uncertainty", "any", "directly", "face", "I", "way.", "about", "something", "choosing", "Instead,", "couldn't", "myself", "have", "taught", "other", "to"],
      },
      {
        target: "My friendship with Jules, moreover, has genuinely deepened rather than weakened, exactly as Priya had once suggested it might.",
        jumbled: ["Priya", "once", "weakened,", "friendship", "it", "had", "exactly", "might.", "than", "as", "Jules,", "moreover,", "with", "suggested", "rather", "deepened", "has", "genuinely", "My"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from choosing growth over comfort.",
    mySentenceExample: "I learned that choosing growth over comfort can be worthwhile.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
