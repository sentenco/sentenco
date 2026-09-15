// A2 Adults digital storybook, Book 39: "Moving into My First Apartment"
// Static content -- no Supabase. Seventh book in the Adults track, and
// first of a new 2-book batch (Books 39-40) filling Adults out to 8
// books, matching Kids (23-30) and Teens (31-38). Uses the same pattern
// as storybookData7.js through storybookData12.js: 3 questions, 5 True/
// False and 5 Build-a-Sentence per chapter, ordered shortest-to-longest.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook39/cover.jpg";

export const STORYBOOK_TITLE = "Moving into My First Apartment";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Renee standing in the middle of a mostly empty apartment surrounded by moving boxes, holding a set of new keys and smiling proudly, sunlight streaming through a bare window.";

export const CHARACTERS = [
  { name: "Renee", role: "The narrator, a young adult", look: "Hair tied back, comfortable T-shirt, practical but easily overwhelmed by adult responsibilities at first." },
  { name: "Diane", role: "Renee's close friend", look: "Short hair, denim overalls, cheerful and hands-on." },
  { name: "Mr. Osei", role: "Renee's new next-door neighbor", look: "Reading glasses, cardigan, friendly and a little old-fashioned." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Finally Moving Out",
    image: null,
    imageNote: "Renee sitting on her childhood bedroom floor, surrounded by half-packed boxes, looking at an apartment listing on her phone with excitement.",
    story:
      "After three years of saving money carefully and living with my parents again after college, I finally decide it's time to move into my own apartment. My parents support the decision completely, though my mother admits she'll miss having me around the house every evening. Sitting on my childhood bedroom floor, surrounded by half-packed boxes, I scroll through apartment listings, saving my favorites into a folder I label “Renee's New Place,” with a mixture of nervous excitement and genuine uncertainty. Living independently means budgeting carefully, cooking my own meals, and handling problems without anyone else nearby to help immediately. Still, the idea of finally having my own space thrills me completely.",
    questions: [
      { text: "How long has Renee been living with her parents again?", answer: "Three years." },
      { text: "How does Renee's mother feel about the decision?", answer: "Supportive, though she'll miss having Renee around." },
      { text: "What does living independently mean for Renee?", answer: "Budgeting, cooking, and handling problems alone." },
    ],
    trueFalse: [
      { text: "Renee has been saving money for three years.", answer: true },
      { text: "Renee's parents disapprove of her decision completely.", answer: false },
      { text: "Renee's mother admits she'll miss having her around.", answer: true },
      { text: "Renee feels no uncertainty about this decision at all.", answer: false },
      { text: "Renee feels thrilled about having her own space.", answer: true },
    ],
    buildSentence: [
      {
        target: "I finally decide it's time to move into my own apartment.",
        jumbled: ["my", "decide", "finally", "to", "I", "own", "it's", "into", "time", "move", "apartment."],
      },
      {
        target: "My parents support the decision completely, though my mother admits she'll miss having me around the house every evening.",
        jumbled: ["miss", "mother", "she'll", "support", "though", "house", "My", "evening.", "around", "me", "parents", "the", "completely,", "my", "the", "admits", "decision", "every", "having"],
      },
      {
        target: "Sitting on my childhood bedroom floor, surrounded by half-packed boxes, I scroll through apartment listings, saving my favorites into a folder I label “Renee's New Place,” with a mixture of nervous excitement and genuine uncertainty.",
        jumbled: ["folder", "a", "Sitting", "of", "label", "“Renee's", "through", "into", "New", "scroll", "surrounded", "my", "and", "genuine", "mixture", "I", "uncertainty.", "bedroom", "apartment", "saving", "favorites", "nervous", "by", "childhood", "half-packed", "on", "a", "with", "my", "I", "listings,", "floor,", "Place,”", "excitement", "boxes,"],
      },
      {
        target: "Living independently means budgeting carefully, cooking my own meals, and handling problems without anyone else nearby to help immediately.",
        jumbled: ["carefully,", "problems", "my", "meals,", "immediately.", "independently", "means", "budgeting", "anyone", "help", "Living", "own", "and", "else", "handling", "without", "to", "nearby", "cooking"],
      },
      {
        target: "Still, the idea of finally having my own space thrills me completely.",
        jumbled: ["Still,", "having", "thrills", "finally", "me", "completely.", "the", "own", "of", "space", "my", "idea"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a big step toward independence you took or want to take.",
    mySentenceExample: "Getting my first job was a big step toward independence for me.",
  },
  {
    number: 2,
    title: "Apartment Hunting",
    image: null,
    imageNote: "Renee and Diane standing in a small, empty apartment with a realtor, Renee checking a list on her phone while looking around thoughtfully.",
    story:
      "Diane, my closest friend, offers to join me for apartment viewings, insisting a second opinion always helps with such an important decision. Together, we visit five different apartments across two weekends, each one revealing new compromises between location, price, and available space. One apartment has beautiful natural light but sits far from public transportation, while another feels perfectly located but noticeably cramped and outdated inside. “Trust your gut when you find the right one, Renee,” Diane advises, watching me hesitate over yet another listing with mixed feelings. Finally, in a quiet building near a small park, something about the sixth apartment simply feels right.",
    questions: [
      { text: "Who joins Renee for apartment viewings?", answer: "Diane." },
      { text: "How many apartments do they visit?", answer: "Five." },
      { text: "What advice does Diane give Renee?", answer: "Trust your gut when you find the right one." },
    ],
    trueFalse: [
      { text: "Diane joins Renee for apartment viewings.", answer: true },
      { text: "They visit five different apartments across two weekends.", answer: true },
      { text: "Every apartment they see is absolutely perfect.", answer: false },
      { text: "Diane advises Renee to trust her gut.", answer: true },
      { text: "The sixth apartment finally feels right to Renee.", answer: true },
    ],
    buildSentence: [
      {
        target: "Diane, my closest friend, offers to join me for apartment viewings, insisting a second opinion always helps with such an important decision.",
        jumbled: ["such", "decision.", "important", "opinion", "second", "me", "friend,", "my", "Diane,", "viewings,", "join", "a", "to", "an", "insisting", "helps", "for", "always", "closest", "with", "apartment", "offers"],
      },
      {
        target: "Together, we visit five different apartments across two weekends, each one revealing new compromises between location, price, and available space.",
        jumbled: ["new", "apartments", "available", "one", "each", "revealing", "space.", "we", "two", "different", "Together,", "compromises", "weekends,", "and", "across", "between", "five", "price,", "visit", "location,"],
      },
      {
        target: "One apartment has beautiful natural light but sits far from public transportation, while another feels perfectly located but noticeably cramped and outdated inside.",
        jumbled: ["located", "and", "has", "beautiful", "from", "sits", "another", "natural", "apartment", "noticeably", "but", "light", "inside.", "cramped", "transportation,", "feels", "far", "perfectly", "public", "but", "while", "One", "outdated"],
      },
      {
        target: "“Trust your gut when you find the right one, Renee,” Diane advises, watching me hesitate over yet another listing with mixed feelings.",
        jumbled: ["the", "“Trust", "another", "listing", "advises,", "me", "with", "one,", "Renee,”", "over", "you", "watching", "your", "feelings.", "hesitate", "find", "right", "mixed", "yet", "when", "gut", "Diane"],
      },
      {
        target: "Finally, in a quiet building near a small park, something about the sixth apartment simply feels right.",
        jumbled: ["apartment", "quiet", "about", "park,", "simply", "something", "a", "feels", "sixth", "building", "a", "right.", "near", "small", "in", "the", "Finally,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about searching for the right option among several choices.",
    mySentenceExample: "I searched for the right laptop among several different choices online.",
  },
  {
    number: 3,
    title: "Signing the Lease",
    image: null,
    imageNote: "Renee sitting at a desk in a rental office, signing paperwork nervously while a landlord watches, a pen trembling slightly in her hand.",
    story:
      "The following Monday, I meet the landlord to review the lease agreement, my hands trembling slightly as I hold the pen above the signature line. He explains the monthly rent, security deposit, and building rules calmly, though the amount of paperwork feels genuinely overwhelming for my very first lease. “Take your time reading through everything, Renee,” he says patiently, noticing my nervous hesitation over the lengthy document. After carefully reviewing each section, I finally sign my name, officially becoming responsible for an entire apartment for the first time in my life. Walking outside afterward, the reality of this commitment settles in slowly.",
    questions: [
      { text: "What does Renee's hand do while holding the pen?", answer: "Tremble slightly." },
      { text: "What does the landlord explain calmly?", answer: "The monthly rent, security deposit, and building rules." },
      { text: "How does Renee feel walking outside afterward?", answer: "The reality of the commitment settles in slowly." },
    ],
    trueFalse: [
      { text: "Renee's hands tremble slightly while signing.", answer: true },
      { text: "The landlord explains the rent and building rules.", answer: true },
      { text: "The landlord rushes Renee through the paperwork.", answer: false },
      { text: "Renee finally signs her name on the lease.", answer: true },
      { text: "Renee feels nothing significant about this commitment.", answer: false },
    ],
    buildSentence: [
      {
        target: "The following Monday, I meet the landlord to review the lease agreement, my hands trembling slightly as I hold the pen above the signature line.",
        jumbled: ["I", "signature", "the", "the", "review", "my", "above", "the", "the", "landlord", "lease", "hands", "following", "The", "line.", "as", "Monday,", "to", "agreement,", "I", "meet", "pen", "hold", "trembling", "slightly"],
      },
      {
        target: "He explains the monthly rent, security deposit, and building rules calmly, though the amount of paperwork feels genuinely overwhelming for my very first lease.",
        jumbled: ["feels", "of", "genuinely", "He", "rules", "rent,", "amount", "my", "building", "very", "monthly", "overwhelming", "for", "the", "calmly,", "lease.", "the", "deposit,", "first", "explains", "security", "though", "paperwork", "and"],
      },
      {
        target: "“Take your time reading through everything, Renee,” he says patiently, noticing my nervous hesitation over the lengthy document.",
        jumbled: ["he", "noticing", "document.", "everything,", "says", "the", "over", "through", "“Take", "hesitation", "Renee,”", "your", "nervous", "patiently,", "time", "lengthy", "my", "reading"],
      },
      {
        target: "I finally sign my name, officially becoming responsible for an entire apartment for the first time in my life.",
        jumbled: ["officially", "I", "the", "time", "in", "for", "an", "becoming", "responsible", "my", "entire", "life.", "apartment", "first", "finally", "for", "my", "name,", "sign"],
      },
      {
        target: "Walking outside afterward, the reality of this commitment settles in slowly.",
        jumbled: ["this", "Walking", "settles", "slowly.", "of", "in", "reality", "afterward,", "outside", "commitment", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about signing something important for the first time.",
    mySentenceExample: "I felt nervous signing my first work contract last year.",
  },
  {
    number: 4,
    title: "Moving Day",
    image: null,
    imageNote: "Renee, Diane, and two other friends carrying boxes and furniture up a narrow staircase into the new apartment, sweating but laughing together.",
    story:
      "Moving day arrives with chaotic energy, as Diane and two other friends show up early to help carry boxes up three narrow flights of stairs. By midday, our collective energy fades noticeably, replaced by exhausted laughter every time someone nearly drops a heavy box on the stairs. “Renee, whoever designed this staircase clearly hated movers,” Diane jokes, wiping sweat from her forehead between trips up and down. Despite the exhausting physical labor, something feels genuinely special about filling an empty apartment with familiar furniture and belongings. By evening, boxes fill every corner of the space, but it already feels undeniably like mine.",
    questions: [
      { text: "Who helps Renee move?", answer: "Diane and two other friends." },
      { text: "How many flights of stairs do they carry boxes up?", answer: "Three." },
      { text: "How does the apartment feel by evening?", answer: "Undeniably like hers." },
    ],
    trueFalse: [
      { text: "Diane and two other friends help Renee move.", answer: true },
      { text: "They carry boxes up three narrow flights of stairs.", answer: true },
      { text: "Everyone stays full of energy the entire day.", answer: false },
      { text: "Diane jokes about the staircase design.", answer: true },
      { text: "The apartment already feels like Renee's by evening.", answer: true },
    ],
    buildSentence: [
      {
        target: "Moving day arrives with chaotic energy, as Diane and two other friends show up early to help carry boxes up three narrow flights of stairs.",
        jumbled: ["early", "stairs.", "narrow", "help", "and", "energy,", "other", "arrives", "friends", "up", "Diane", "flights", "chaotic", "show", "boxes", "Moving", "three", "as", "carry", "two", "of", "up", "to", "with", "day"],
      },
      {
        target: "By midday, our collective energy fades noticeably, replaced by exhausted laughter every time someone nearly drops a heavy box on the stairs.",
        jumbled: ["collective", "drops", "heavy", "noticeably,", "someone", "By", "exhausted", "the", "a", "by", "fades", "midday,", "box", "nearly", "our", "replaced", "every", "stairs.", "time", "on", "laughter", "energy"],
      },
      {
        target: "“Renee, whoever designed this staircase clearly hated movers,” Diane jokes, wiping sweat from her forehead between trips up and down.",
        jumbled: ["up", "“Renee,", "staircase", "forehead", "clearly", "between", "trips", "this", "from", "wiping", "movers,”", "jokes,", "and", "her", "down.", "sweat", "designed", "hated", "whoever", "Diane"],
      },
      {
        target: "Despite the exhausting physical labor, something feels genuinely special about filling an empty apartment with familiar furniture and belongings.",
        jumbled: ["about", "familiar", "physical", "the", "and", "something", "exhausting", "an", "with", "genuinely", "Despite", "belongings.", "labor,", "feels", "filling", "special", "empty", "apartment", "furniture"],
      },
      {
        target: "By evening, boxes fill every corner of the space, but it already feels undeniably like mine.",
        jumbled: ["of", "By", "feels", "the", "space,", "every", "corner", "but", "fill", "already", "mine.", "boxes", "evening,", "undeniably", "like", "it"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a tiring day that friends helped you get through.",
    mySentenceExample: "My friends helped me get through a tiring moving day last summer.",
  },
  {
    number: 5,
    title: "Assembling Furniture",
    image: null,
    imageNote: "Renee sitting on the floor surrounded by furniture parts and an instruction manual, holding a screwdriver with a confused expression, one bookshelf leaning awkwardly.",
    story:
      "Alone that evening, I face my biggest challenge yet: assembling a flat-pack bookshelf using only a small instruction booklet and a single tiny screwdriver. The diagrams seem straightforward at first, but somehow I end up with several mysterious extra screws and one noticeably crooked shelf. After nearly an hour of quiet frustration, I mutter, “Come on, Renee, think,” and finally realize I attached one panel completely backward from the very beginning. Rather than starting over entirely, I carefully disassemble just that section, correcting my mistake with newfound patience. When the bookshelf finally stands upright and stable, I feel a surprisingly deep sense of accomplishment over something so seemingly small.",
    questions: [
      { text: "What furniture does Renee try to assemble alone?", answer: "A flat-pack bookshelf." },
      { text: "What mistake does Renee eventually realize she made?", answer: "She attached one panel completely backward." },
      { text: "How does Renee feel once the bookshelf stands stable?", answer: "A deep sense of accomplishment." },
    ],
    trueFalse: [
      { text: "Renee tries to assemble a flat-pack bookshelf.", answer: true },
      { text: "The assembly goes perfectly with no problems at all.", answer: false },
      { text: "Renee realizes she attached a panel backward.", answer: true },
      { text: "Renee decides to throw the bookshelf away completely.", answer: false },
      { text: "Renee feels a deep sense of accomplishment afterward.", answer: true },
    ],
    buildSentence: [
      {
        target: "Alone that evening, I face my biggest challenge yet: assembling a flat-pack bookshelf using only a small instruction booklet and a single tiny screwdriver.",
        jumbled: ["small", "only", "screwdriver.", "a", "a", "using", "assembling", "a", "yet:", "tiny", "Alone", "bookshelf", "that", "I", "single", "my", "biggest", "challenge", "face", "instruction", "flat-pack", "and", "evening,", "booklet"],
      },
      {
        target: "The diagrams seem straightforward at first, but somehow I end up with several mysterious extra screws and one noticeably crooked shelf.",
        jumbled: ["crooked", "several", "The", "up", "extra", "and", "seem", "I", "screws", "straightforward", "end", "shelf.", "somehow", "but", "mysterious", "with", "one", "at", "diagrams", "first,", "noticeably"],
      },
      {
        target: "I mutter, “Come on, Renee, think,” and finally realize I attached one panel completely backward from the very beginning.",
        jumbled: ["one", "I", "backward", "beginning.", "Renee,", "the", "finally", "realize", "“Come", "on,", "I", "think,”", "from", "mutter,", "panel", "and", "very", "completely", "attached"],
      },
      {
        target: "Rather than starting over entirely, I carefully disassemble just that section, correcting my mistake with newfound patience.",
        jumbled: ["that", "correcting", "section,", "over", "I", "just", "my", "entirely,", "Rather", "starting", "disassemble", "carefully", "than", "with", "newfound", "patience.", "mistake"],
      },
      {
        target: "I feel a surprisingly deep sense of accomplishment over something so seemingly small.",
        jumbled: ["accomplishment", "feel", "over", "something", "so", "seemingly", "surprisingly", "I", "deep", "small.", "sense", "of", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about fixing a mistake you made while building or making something.",
    mySentenceExample: "I fixed a mistake I made while building a model airplane.",
  },
  {
    number: 6,
    title: "The Leaky Faucet",
    image: null,
    imageNote: "Renee kneeling under the kitchen sink with a flashlight and wrench, examining a dripping pipe, an online repair tutorial open on her phone nearby.",
    story:
      "A week after moving in, I notice a slow, steady drip coming from beneath the kitchen sink, forming an annoying puddle each morning. Uncertain whether to call the landlord immediately or attempt fixing it myself, I decide to research the problem online first. A helpful video tutorial explains the issue looks like a simple loose connection rather than anything seriously broken. Kneeling awkwardly under the sink with a wrench and flashlight, I carefully tighten the connection, feeling oddly proud of solving a real household problem independently. The dripping finally stops completely, and I text Diane immediately, “Renee: 1, faucet: 0,” practically bragging about my small victory.",
    questions: [
      { text: "What does Renee notice a week after moving in?", answer: "A slow drip from beneath the kitchen sink." },
      { text: "What does Renee do before calling the landlord?", answer: "Researches the problem online." },
      { text: "How does Renee feel after fixing the problem?", answer: "Oddly proud." },
    ],
    trueFalse: [
      { text: "Renee notices a slow drip under the kitchen sink.", answer: true },
      { text: "Renee calls the landlord immediately without researching first.", answer: false },
      { text: "The tutorial explains it looks like a loose connection.", answer: true },
      { text: "Renee successfully fixes the leak herself.", answer: true },
      { text: "Renee feels embarrassed rather than proud afterward.", answer: false },
    ],
    buildSentence: [
      {
        target: "A week after moving in, I notice a slow, steady drip coming from beneath the kitchen sink, forming an annoying puddle each morning.",
        jumbled: ["beneath", "an", "a", "after", "each", "notice", "sink,", "forming", "kitchen", "morning.", "in,", "from", "moving", "slow,", "A", "drip", "I", "annoying", "the", "puddle", "steady", "coming", "week"],
      },
      {
        target: "Uncertain whether to call the landlord immediately or attempt fixing it myself, I decide to research the problem online first.",
        jumbled: ["the", "to", "myself,", "it", "call", "or", "to", "Uncertain", "landlord", "decide", "the", "attempt", "I", "immediately", "problem", "fixing", "research", "first.", "online", "whether"],
      },
      {
        target: "A helpful video tutorial explains the issue looks like a simple loose connection rather than anything seriously broken.",
        jumbled: ["video", "issue", "broken.", "than", "helpful", "looks", "explains", "A", "a", "connection", "simple", "rather", "loose", "seriously", "the", "anything", "like", "tutorial"],
      },
      {
        target: "Kneeling awkwardly under the sink with a wrench and flashlight, I carefully tighten the connection, feeling oddly proud of solving a real household problem independently.",
        jumbled: ["flashlight,", "I", "with", "carefully", "real", "the", "connection,", "problem", "of", "proud", "independently.", "Kneeling", "a", "feeling", "under", "a", "sink", "solving", "household", "oddly", "the", "wrench", "awkwardly", "tighten", "and"],
      },
      {
        target: "The dripping finally stops completely, and I text Diane immediately, “Renee: 1, faucet: 0,” practically bragging about my small victory.",
        jumbled: ["0,”", "finally", "immediately,", "faucet:", "Diane", "my", "1,", "small", "text", "bragging", "I", "The", "and", "“Renee:", "completely,", "about", "practically", "victory.", "stops", "dripping"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about solving a small household problem on your own.",
    mySentenceExample: "I solved a small problem with my computer completely on my own.",
  },
  {
    number: 7,
    title: "Meeting the Neighbor",
    image: null,
    imageNote: "Renee standing in the hallway holding a small toolbox, chatting with Mr. Osei at his open apartment door, both smiling warmly.",
    story:
      "While searching for a wrench to tackle another small repair, I realize I don't actually own many tools yet in my new apartment. Nervously, I knock on my next-door neighbor's door, hoping he might have something I could borrow for a few minutes. Mr. Osei answers warmly. “You must be Renee, from 4B,” he says, introducing himself properly for the first time since I moved in two weeks earlier. He not only lends me a wrench but also offers helpful advice about the building's occasionally quirky plumbing system. “Feel free to knock anytime you need something,” he says kindly, and I walk back to my apartment feeling genuinely less alone in this new place.",
    questions: [
      { text: "What does Renee realize she doesn't own yet?", answer: "Many tools." },
      { text: "Who does Renee knock on the door of?", answer: "Her next-door neighbor, Mr. Osei." },
      { text: "What does Mr. Osei offer besides the wrench?", answer: "Advice about the building's plumbing." },
    ],
    trueFalse: [
      { text: "Renee realizes she doesn't own many tools yet.", answer: true },
      { text: "Renee knocks on Mr. Osei's door.", answer: true },
      { text: "Mr. Osei refuses to lend her anything.", answer: false },
      { text: "Mr. Osei offers advice about the building's plumbing.", answer: true },
      { text: "Renee feels more alone after meeting Mr. Osei.", answer: false },
    ],
    buildSentence: [
      {
        target: "I realize I don't actually own many tools yet in my new apartment.",
        jumbled: ["my", "tools", "own", "actually", "in", "realize", "many", "I", "yet", "don't", "apartment.", "I", "new"],
      },
      {
        target: "Nervously, I knock on my next-door neighbor's door, hoping he might have something I could borrow for a few minutes.",
        jumbled: ["for", "borrow", "my", "minutes.", "a", "have", "knock", "on", "neighbor's", "could", "I", "might", "next-door", "he", "Nervously,", "few", "something", "hoping", "I", "door,"],
      },
      {
        target: "Mr. Osei answers warmly.",
        jumbled: ["Mr.", "warmly.", "Osei", "answers"],
      },
      {
        target: "“You must be Renee, from 4B,” he says, introducing himself properly for the first time since I moved in two weeks earlier.",
        jumbled: ["for", "says,", "himself", "in", "properly", "I", "introducing", "moved", "since", "must", "the", "4B,”", "earlier.", "Renee,", "from", "“You", "weeks", "first", "two", "time", "he", "be"],
      },
      {
        target: "“Feel free to knock anytime you need something,” he says kindly, and I walk back to my apartment feeling genuinely less alone in this new place.",
        jumbled: ["genuinely", "this", "knock", "feeling", "you", "I", "less", "to", "something,”", "he", "to", "place.", "anytime", "in", "kindly,", "apartment", "and", "alone", "need", "walk", "my", "says", "free", "back", "new", "“Feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about meeting a neighbor for the first time.",
    mySentenceExample: "I met my neighbor for the first time when I needed to borrow sugar.",
  },
  {
    number: 8,
    title: "The First Grocery Shop",
    image: null,
    imageNote: "Renee pushing a grocery cart alone through a supermarket aisle, reading labels carefully and adding a few simple ingredients, a small shopping list in hand.",
    story:
      "For the first time, I do a proper grocery shop entirely for myself, writing my own list under the heading “Renee's Groceries” instead of relying on my mother's usual list to guide every single purchase decision. Standing in the produce aisle, I realize I genuinely don't know how much of anything a single person actually needs for one week. I buy modest portions of vegetables, a few basic proteins, and ingredients for two or three simple meals I already know how to cook confidently. At checkout, my total feels surprisingly small compared to family shopping trips, a strange but satisfying reminder of my new independent life. Carrying bags home alone, I feel oddly accomplished by something so ordinary.",
    questions: [
      { text: "What does Renee do for the first time?", answer: "A proper grocery shop entirely for herself." },
      { text: "What does Renee realize in the produce aisle?", answer: "She doesn't know how much a single person needs for a week." },
      { text: "How does Renee's total at checkout feel to her?", answer: "Surprisingly small." },
    ],
    trueFalse: [
      { text: "Renee does a grocery shop entirely for herself.", answer: true },
      { text: "Renee already knows exactly how much food she needs.", answer: false },
      { text: "Renee buys ingredients for meals she knows how to cook.", answer: true },
      { text: "Her total at checkout feels surprisingly large.", answer: false },
      { text: "Renee feels oddly accomplished by this ordinary task.", answer: true },
    ],
    buildSentence: [
      {
        target: "For the first time, I do a proper grocery shop entirely for myself, writing my own list under the heading “Renee's Groceries” instead of relying on my mother's usual list to guide every single purchase decision.",
        jumbled: ["instead", "guide", "the", "writing", "decision.", "entirely", "grocery", "do", "every", "purchase", "mother's", "single", "on", "time,", "myself,", "heading", "first", "own", "“Renee's", "proper", "the", "relying", "Groceries”", "usual", "for", "list", "my", "list", "to", "under", "For", "I", "my", "a", "of", "shop"],
      },
      {
        target: "Standing in the produce aisle, I realize I genuinely don't know how much of anything a single person actually needs for one week.",
        jumbled: ["Standing", "week.", "actually", "one", "much", "for", "a", "needs", "anything", "know", "I", "in", "how", "aisle,", "realize", "I", "person", "produce", "the", "single", "genuinely", "don't", "of"],
      },
      {
        target: "I buy modest portions of vegetables, a few basic proteins, and ingredients for two or three simple meals I already know how to cook confidently.",
        jumbled: ["buy", "confidently.", "I", "proteins,", "know", "three", "meals", "simple", "how", "vegetables,", "basic", "a", "I", "cook", "two", "modest", "portions", "already", "and", "ingredients", "few", "for", "to", "of", "or"],
      },
      {
        target: "At checkout, my total feels surprisingly small compared to family shopping trips, a strange but satisfying reminder of my new independent life.",
        jumbled: ["my", "checkout,", "reminder", "a", "feels", "family", "total", "to", "trips,", "of", "small", "shopping", "new", "surprisingly", "life.", "strange", "At", "my", "satisfying", "compared", "independent", "but"],
      },
      {
        target: "Carrying bags home alone, I feel oddly accomplished by something so ordinary.",
        jumbled: ["something", "feel", "home", "oddly", "I", "alone,", "so", "bags", "accomplished", "ordinary.", "by", "Carrying"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about doing an everyday task independently for the first time.",
    mySentenceExample: "I cooked a full dinner independently for the first time last week.",
  },
  {
    number: 9,
    title: "A Quiet First Night",
    image: null,
    imageNote: "Renee sitting alone on the floor of her mostly furnished apartment at night, wrapped in a blanket, city lights visible through the window.",
    story:
      "That night, after Diane leaves and the apartment finally falls completely silent, I sit alone on the floor wrapped in a blanket, taking in my new surroundings. The quiet feels strange after years of family noise constantly filling every room of my parents' house. For a brief, honest moment, loneliness creeps in unexpectedly, mixing uncomfortably with the pride I felt just hours earlier during moving day. “You've got this, Renee,” I whisper, reminding myself this adjustment period is completely normal, and that independence naturally includes both wonderful freedom and occasional quiet moments like this one. Watching city lights through my window, I slowly feel calmer.",
    questions: [
      { text: "What does Renee do after Diane leaves?", answer: "Sits alone on the floor wrapped in a blanket." },
      { text: "Why does the quiet feel strange to Renee?", answer: "After years of family noise filling the house." },
      { text: "What does Renee remind herself about this adjustment period?", answer: "That it's completely normal." },
    ],
    trueFalse: [
      { text: "Renee sits alone on the floor wrapped in a blanket.", answer: true },
      { text: "The quiet feels completely normal and familiar immediately.", answer: false },
      { text: "Loneliness creeps in unexpectedly for a moment.", answer: true },
      { text: "Renee reminds herself this adjustment is completely normal.", answer: true },
      { text: "Renee feels no different watching the city lights.", answer: false },
    ],
    buildSentence: [
      {
        target: "That night, after Diane leaves and the apartment finally falls completely silent, I sit alone on the floor wrapped in a blanket, taking in my new surroundings.",
        jumbled: ["I", "my", "surroundings.", "Diane", "blanket,", "new", "floor", "the", "on", "apartment", "and", "sit", "night,", "alone", "falls", "in", "finally", "the", "leaves", "That", "after", "a", "wrapped", "taking", "in", "completely", "silent,"],
      },
      {
        target: "The quiet feels strange after years of family noise constantly filling every room of my parents' house.",
        jumbled: ["parents'", "of", "feels", "my", "strange", "noise", "after", "every", "house.", "years", "room", "of", "quiet", "The", "constantly", "filling", "family"],
      },
      {
        target: "For a brief, honest moment, loneliness creeps in unexpectedly, mixing uncomfortably with the pride I felt just hours earlier during moving day.",
        jumbled: ["earlier", "I", "moment,", "the", "creeps", "pride", "during", "brief,", "mixing", "unexpectedly,", "with", "loneliness", "uncomfortably", "felt", "day.", "in", "just", "For", "moving", "hours", "a", "honest"],
      },
      {
        target: "“You've got this, Renee,” I whisper, reminding myself this adjustment period is completely normal, and that independence naturally includes both wonderful freedom and occasional quiet moments like this one.",
        jumbled: ["wonderful", "myself", "normal,", "“You've", "adjustment", "this", "naturally", "independence", "moments", "period", "and", "includes", "reminding", "Renee,”", "this", "I", "one.", "completely", "that", "like", "both", "is", "occasional", "this,", "freedom", "quiet", "whisper,", "and", "got"],
      },
      {
        target: "Watching city lights through my window, I slowly feel calmer.",
        jumbled: ["calmer.", "city", "through", "lights", "I", "window,", "my", "Watching", "slowly", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a quiet moment when you felt both proud and a little lonely.",
    mySentenceExample: "I felt both proud and a little lonely on my first night living alone.",
  },
  {
    number: 10,
    title: "Making It Home",
    image: null,
    imageNote: "Renee standing in her fully decorated, cozy apartment weeks later, hanging a framed photo on the wall, plants and personal touches visible throughout the room.",
    story:
      "Several weeks later, my apartment finally feels completely different from the empty, echoing space I first walked into with a set of new keys. Framed photos hang on the walls, plants sit thriving near the window, and familiar smells from home-cooked meals now fill the kitchen regularly. Diane visits often. “This is so you, Renee,” she says with a smile, always commenting on how much more like “me” the space feels with each passing week. Looking back, the overwhelming lease-signing, the wobbly bookshelf, and even that lonely first night all feel like meaningful steps rather than mistakes along this journey. This apartment isn't just a place I live now; it genuinely feels like home.",
    questions: [
      { text: "How does the apartment feel several weeks later?", answer: "Completely different from the empty space she first walked into." },
      { text: "What does Diane comment on during her visits?", answer: "How much more like 'her' the space feels." },
      { text: "How does Renee view the earlier struggles now?", answer: "As meaningful steps rather than mistakes." },
    ],
    trueFalse: [
      { text: "The apartment still feels empty and echoing weeks later.", answer: false },
      { text: "Diane comments on how much more like Renee the space feels.", answer: true },
      { text: "Renee views the earlier struggles as meaningful steps.", answer: true },
      { text: "Renee still feels this is just a place she lives, nothing more.", answer: false },
      { text: "Plants sit thriving near the window.", answer: true },
    ],
    buildSentence: [
      {
        target: "Several weeks later, my apartment finally feels completely different from the empty, echoing space I first walked into with a set of new keys.",
        jumbled: ["a", "later,", "Several", "I", "apartment", "weeks", "set", "different", "empty,", "feels", "into", "keys.", "first", "from", "completely", "with", "space", "walked", "of", "new", "finally", "the", "echoing", "my"],
      },
      {
        target: "Framed photos hang on the walls, plants sit thriving near the window, and familiar smells from home-cooked meals now fill the kitchen regularly.",
        jumbled: ["on", "kitchen", "now", "the", "familiar", "and", "sit", "thriving", "the", "home-cooked", "the", "near", "regularly.", "Framed", "plants", "walls,", "meals", "hang", "photos", "smells", "from", "window,", "fill"],
      },
      {
        target: "Diane visits often.",
        jumbled: ["visits", "Diane", "often."],
      },
      {
        target: "“This is so you, Renee,” she says with a smile, always commenting on how much more like “me” the space feels with each passing week.",
        jumbled: ["how", "much", "Renee,”", "you,", "is", "“me”", "space", "says", "on", "commenting", "feels", "so", "like", "always", "more", "week.", "she", "smile,", "a", "the", "passing", "each", "with", "with", "“This"],
      },
      {
        target: "Looking back, the overwhelming lease-signing, the wobbly bookshelf, and even that lonely first night all feel like meaningful steps rather than mistakes along this journey.",
        jumbled: ["along", "bookshelf,", "back,", "the", "first", "the", "lonely", "even", "overwhelming", "all", "Looking", "mistakes", "journey.", "wobbly", "this", "that", "feel", "meaningful", "steps", "like", "night", "lease-signing,", "than", "rather", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a place that grew to feel like home over time.",
    mySentenceExample: "My dorm room grew to feel like home after a few months at university.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
