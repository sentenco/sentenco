// A2 Teens digital storybook, Book 35: "My First Concert"
// Static content -- no Supabase. Fifth book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook35/cover.jpg";

export const STORYBOOK_TITLE = "My First Concert";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Harper and Naomi standing in a crowded concert venue, arms raised and cheering under colorful stage lights, the silhouette of a band performing in the distance.";

export const CHARACTERS = [
  { name: "Harper", role: "The narrator, a teenager", look: "Wavy hair, band T-shirt, excited but a little anxious about independence." },
  { name: "Naomi", role: "Harper's best friend", look: "Short pixie cut, denim jacket covered in pins, adventurous and outgoing." },
  { name: "Mom", role: "Harper's mother", look: "Cardigan, watchful but ultimately trusting.", },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Tickets",
    image: null,
    imageNote: "Harper and Naomi jumping excitedly in Harper's bedroom, holding up two printed concert tickets, a poster of their favorite band on the wall behind them.",
    story:
      "Naomi bursts into my room waving her phone frantically. “Harper, I just bought us tickets to see them live!” she practically screams. I stare at the confirmation screen in disbelief, unable to process that we're actually going to see them perform in person next month. We have listened to this band's music together since middle school, memorizing every lyric during countless sleepovers and long bus rides. “This is actually happening,” I say, still slightly stunned, while Naomi practically vibrates with uncontainable excitement beside me. For the rest of the evening, we can't stop replaying their songs, imagining what the actual concert will feel like.",
    questions: [
      { text: "What does Naomi buy?", answer: "Concert tickets to see their favorite band." },
      { text: "How long have they listened to this band together?", answer: "Since middle school." },
      { text: "How does Harper feel about the news?", answer: "Stunned but excited." },
    ],
    trueFalse: [
      { text: "Naomi buys tickets to their favorite band's concert.", answer: true },
      { text: "They have listened to this band since middle school.", answer: true },
      { text: "Harper feels completely unbothered by the news.", answer: false },
      { text: "The concert is happening the very next day.", answer: false },
      { text: "They spend the evening replaying the band's songs.", answer: true },
    ],
    buildSentence: [
      {
        target: "Naomi bursts into my room waving her phone frantically.",
        jumbled: ["her", "frantically.", "phone", "Naomi", "room", "into", "my", "bursts", "waving"],
      },
      {
        target: "“Harper, I just bought us tickets to see them live!” she practically screams.",
        jumbled: ["she", "“Harper,", "live!”", "us", "I", "tickets", "just", "practically", "screams.", "to", "see", "them", "bought"],
      },
      {
        target: "I stare at the confirmation screen in disbelief, unable to process that we're actually going to see them perform in person next month.",
        jumbled: ["unable", "next", "in", "in", "screen", "month.", "actually", "process", "that", "to", "the", "at", "I", "perform", "see", "going", "we're", "person", "confirmation", "to", "stare", "them", "disbelief,"],
      },
      {
        target: "We have listened to this band's music together since middle school, memorizing every lyric during countless sleepovers and long bus rides.",
        jumbled: ["middle", "this", "lyric", "during", "sleepovers", "memorizing", "every", "We", "have", "since", "band's", "rides.", "together", "listened", "long", "school,", "bus", "and", "to", "countless", "music"],
      },
      {
        target: "For the rest of the evening, we can't stop replaying their songs, imagining what the actual concert will feel like.",
        jumbled: ["concert", "actual", "replaying", "For", "evening,", "the", "stop", "rest", "will", "we", "feel", "of", "the", "what", "can't", "imagining", "the", "their", "songs,", "like."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about exciting news someone shared with you.",
    mySentenceExample: "My friend shared exciting news about winning a school award.",
  },
  {
    number: 2,
    title: "Asking Permission",
    image: null,
    imageNote: "Harper standing nervously in the kitchen explaining the concert plan to Mom, who listens with a thoughtful, slightly concerned expression.",
    story:
      "Convincing Mom to let us attend without an adult chaperone turns out to be far more difficult than actually buying the tickets themselves. “You've never gone anywhere that crowded without me, Harper,” she says, her forehead creasing with obvious worry as I explain our plan. I promise repeatedly to text updates throughout the night and establish a clear, reliable meeting point for afterward. After nearly twenty minutes of careful negotiation, Mom finally agrees, though her conditions include a strict curfew and constant phone communication. Walking away, relief floods through me, mixed with a new sense of responsibility I hadn't quite expected to feel.",
    questions: [
      { text: "What does Harper need to convince Mom about?", answer: "Letting them attend without an adult chaperone." },
      { text: "What does Mom say she's worried about?", answer: "That they've never gone anywhere that crowded alone." },
      { text: "What does Harper promise to do?", answer: "Text updates and set a meeting point." },
    ],
    trueFalse: [
      { text: "Convincing Mom is harder than buying the tickets.", answer: true },
      { text: "Mom agrees immediately without any conditions.", answer: false },
      { text: "Harper promises to text updates throughout the night.", answer: true },
      { text: "Mom sets a strict curfew as a condition.", answer: true },
      { text: "Harper feels no responsibility about this at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "Convincing Mom to let us attend without an adult chaperone turns out to be far more difficult than actually buying the tickets themselves.",
        jumbled: ["Mom", "out", "to", "tickets", "the", "turns", "buying", "without", "actually", "themselves.", "be", "attend", "more", "adult", "Convincing", "far", "than", "chaperone", "let", "difficult", "an", "us", "to"],
      },
      {
        target: "“You've never gone anywhere that crowded without me, Harper,” she says, her forehead creasing with obvious worry as I explain our plan.",
        jumbled: ["Harper,”", "her", "says,", "as", "creasing", "“You've", "plan.", "she", "worry", "me,", "I", "our", "that", "forehead", "obvious", "without", "with", "gone", "explain", "never", "crowded", "anywhere"],
      },
      {
        target: "I promise repeatedly to text updates throughout the night and establish a clear, reliable meeting point for afterward.",
        jumbled: ["for", "throughout", "to", "repeatedly", "afterward.", "I", "updates", "reliable", "meeting", "a", "promise", "establish", "point", "clear,", "night", "text", "and", "the"],
      },
      {
        target: "Mom finally agrees, though her conditions include a strict curfew and constant phone communication.",
        jumbled: ["finally", "though", "communication.", "and", "curfew", "Mom", "constant", "her", "strict", "agrees,", "conditions", "include", "phone", "a"],
      },
      {
        target: "Walking away, relief floods through me, mixed with a new sense of responsibility I hadn't quite expected to feel.",
        jumbled: ["Walking", "to", "mixed", "with", "a", "I", "away,", "hadn't", "expected", "me,", "quite", "of", "new", "responsibility", "floods", "through", "sense", "relief", "feel."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about convincing a parent to let you do something new.",
    mySentenceExample: "I convinced my dad to let me stay out later for a school event.",
  },
  {
    number: 3,
    title: "Planning the Night",
    image: null,
    imageNote: "Harper and Naomi sitting on the bedroom floor with a paper map spread out, marking a meeting point and planning their outfits laid out nearby.",
    story:
      "With Mom's cautious approval secured, Naomi and I spend the following days meticulously planning every logistical detail of concert night. We choose outfits together, obsessing over what feels stylish yet practical enough for hours of standing in a crowd. Naomi's older cousin agrees to drop us off and pick us up afterward, which reassures Mom considerably during our final negotiation. We mark a specific meeting spot near the venue's east entrance in case phones die or we somehow get separated inside. “This is going to be perfect, Harper,” Naomi says, grinning as she finishes marking the map. By the night before, our carefully organized plan feels almost as exciting as the actual concert itself.",
    questions: [
      { text: "What do Harper and Naomi choose together?", answer: "Their outfits." },
      { text: "Who agrees to drive them?", answer: "Naomi's older cousin." },
      { text: "What do they mark near the venue?", answer: "A meeting spot near the east entrance." },
    ],
    trueFalse: [
      { text: "Harper and Naomi choose outfits together.", answer: true },
      { text: "Naomi's cousin agrees to drive them.", answer: true },
      { text: "They mark a meeting spot near the east entrance.", answer: true },
      { text: "They make no plan at all for getting separated.", answer: false },
      { text: "Harper feels bored planning the details.", answer: false },
    ],
    buildSentence: [
      {
        target: "With Mom's cautious approval secured, Naomi and I spend the following days meticulously planning every logistical detail of concert night.",
        jumbled: ["spend", "following", "of", "meticulously", "detail", "Mom's", "night.", "With", "cautious", "I", "days", "concert", "logistical", "every", "planning", "Naomi", "approval", "the", "and", "secured,"],
      },
      {
        target: "We choose outfits together, obsessing over what feels stylish yet practical enough for hours of standing in a crowd.",
        jumbled: ["outfits", "hours", "of", "stylish", "crowd.", "for", "enough", "choose", "together,", "a", "feels", "yet", "practical", "over", "We", "obsessing", "what", "in", "standing"],
      },
      {
        target: "Naomi's older cousin agrees to drop us off and pick us up afterward, which reassures Mom considerably during our final negotiation.",
        jumbled: ["reassures", "drop", "us", "our", "considerably", "negotiation.", "Mom", "Naomi's", "which", "off", "up", "cousin", "older", "to", "and", "final", "us", "during", "afterward,", "pick", "agrees"],
      },
      {
        target: "We mark a specific meeting spot near the venue's east entrance in case phones die or we somehow get separated inside.",
        jumbled: ["entrance", "somehow", "separated", "case", "inside.", "or", "near", "we", "in", "the", "specific", "get", "east", "die", "a", "phones", "meeting", "spot", "venue's", "We", "mark"],
      },
      {
        target: "By the night before, our carefully organized plan feels almost as exciting as the actual concert itself.",
        jumbled: ["exciting", "organized", "By", "feels", "as", "our", "itself.", "carefully", "almost", "before,", "night", "plan", "as", "the", "actual", "concert", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about planning the details of something exciting.",
    mySentenceExample: "I planned every detail of my birthday outing with my friends.",
  },
  {
    number: 4,
    title: "The Long Line",
    image: null,
    imageNote: "Harper and Naomi standing in a long, winding line outside a concert venue at dusk, surrounded by other excited fans, string lights glowing overhead.",
    story:
      "We arrive at the venue nearly two hours before doors open, only to find a line already snaking around an entire city block. Naomi immediately starts chatting with strangers nearby, discovering shared favorite songs and swapping predictions about the setlist enthusiastically. The anticipation building throughout the line feels almost tangible, an electric current running through every excited fan waiting alongside us. As the sun sets slowly behind the venue, string lights flicker on above the entrance, adding to the growing magic of the evening. “Can you believe this, Harper?” Naomi shouts over the noise as the doors finally open and the crowd surges forward with a collective, overwhelming cheer.",
    questions: [
      { text: "How early do they arrive?", answer: "Nearly two hours before doors open." },
      { text: "What does Naomi do while waiting in line?", answer: "Chats with strangers about the band." },
      { text: "What happens when the doors finally open?", answer: "The crowd surges forward with a cheer." },
    ],
    trueFalse: [
      { text: "They arrive nearly two hours before doors open.", answer: true },
      { text: "Naomi refuses to talk to anyone in line.", answer: false },
      { text: "String lights flicker on above the entrance.", answer: true },
      { text: "The crowd stays completely silent when doors open.", answer: false },
      { text: "The line wraps around an entire city block.", answer: true },
    ],
    buildSentence: [
      {
        target: "We arrive at the venue nearly two hours before doors open, only to find a line already snaking around an entire city block.",
        jumbled: ["already", "nearly", "venue", "before", "at", "city", "snaking", "open,", "the", "to", "an", "block.", "entire", "hours", "only", "arrive", "a", "line", "find", "We", "doors", "two", "around"],
      },
      {
        target: "Naomi immediately starts chatting with strangers nearby, discovering shared favorite songs and swapping predictions about the setlist enthusiastically.",
        jumbled: ["Naomi", "and", "the", "predictions", "starts", "chatting", "immediately", "enthusiastically.", "songs", "setlist", "shared", "favorite", "with", "nearby,", "discovering", "swapping", "strangers", "about"],
      },
      {
        target: "The anticipation building throughout the line feels almost tangible, an electric current running through every excited fan waiting alongside us.",
        jumbled: ["waiting", "line", "excited", "current", "us.", "anticipation", "the", "running", "electric", "feels", "tangible,", "an", "through", "building", "every", "almost", "The", "throughout", "alongside", "fan"],
      },
      {
        target: "Adding to the growing magic of the evening.",
        jumbled: ["evening.", "to", "the", "growing", "Adding", "the", "of", "magic"],
      },
      {
        target: "“Can you believe this, Harper?” Naomi shouts over the noise as the doors finally open and the crowd surges forward with a collective, overwhelming cheer.",
        jumbled: ["collective,", "doors", "a", "the", "this,", "you", "surges", "shouts", "cheer.", "open", "finally", "the", "forward", "as", "“Can", "crowd", "over", "the", "Harper?”", "believe", "noise", "and", "with", "overwhelming", "Naomi"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting excitedly for something to begin.",
    mySentenceExample: "I waited excitedly in line for the amusement park to open.",
  },
  {
    number: 5,
    title: "Losing Naomi",
    image: null,
    imageNote: "Harper standing alone in a densely packed crowd, looking around frantically with a worried expression, phone held up searching for signal.",
    story:
      "Inside the venue, the crowd pushes and shifts constantly, and somewhere in that chaotic movement, Naomi's hand slips from mine completely. Panic rises quickly in my chest as I spin around, scanning unfamiliar faces desperately for any sign of her familiar denim jacket. My phone shows barely any signal in the packed space, and my texts refuse to send no matter how many times I try. For several agonizing minutes, I feel genuinely small and frightened, surrounded by hundreds of strangers in an unfamiliar place without my best friend nearby. “Think, Harper,” I tell myself, and remembering our backup plan becomes my only source of comfort.",
    questions: [
      { text: "What happens to Naomi's hand?", answer: "It slips from Harper's." },
      { text: "What does Harper scan for?", answer: "Naomi's denim jacket." },
      { text: "Why don't Harper's texts send?", answer: "Because there's barely any phone signal." },
    ],
    trueFalse: [
      { text: "Naomi's hand slips from Harper's grip.", answer: true },
      { text: "Harper feels completely calm about being separated.", answer: false },
      { text: "Harper's texts won't send due to bad signal.", answer: true },
      { text: "Harper immediately finds Naomi within seconds.", answer: false },
      { text: "Harper remembers their backup plan.", answer: true },
    ],
    buildSentence: [
      {
        target: "Inside the venue, the crowd pushes and shifts constantly, and somewhere in that chaotic movement, Naomi's hand slips from mine completely.",
        jumbled: ["slips", "chaotic", "Naomi's", "crowd", "the", "and", "Inside", "movement,", "hand", "that", "in", "shifts", "pushes", "from", "mine", "completely.", "constantly,", "the", "and", "venue,", "somewhere"],
      },
      {
        target: "Panic rises quickly in my chest as I spin around, scanning unfamiliar faces desperately for any sign of her familiar denim jacket.",
        jumbled: ["scanning", "around,", "rises", "spin", "any", "unfamiliar", "as", "quickly", "familiar", "my", "jacket.", "sign", "Panic", "denim", "her", "in", "chest", "of", "for", "desperately", "faces", "I"],
      },
      {
        target: "My phone shows barely any signal in the packed space, and my texts refuse to send no matter how many times I try.",
        jumbled: ["space,", "phone", "shows", "packed", "in", "signal", "many", "I", "to", "any", "send", "and", "my", "times", "barely", "no", "try.", "refuse", "the", "My", "how", "matter", "texts"],
      },
      {
        target: "For several agonizing minutes, I feel genuinely small and frightened, surrounded by hundreds of strangers in an unfamiliar place without my best friend nearby.",
        jumbled: ["friend", "agonizing", "nearby.", "genuinely", "For", "of", "by", "minutes,", "my", "best", "I", "feel", "without", "place", "several", "in", "surrounded", "unfamiliar", "hundreds", "small", "an", "strangers", "frightened,", "and"],
      },
      {
        target: "“Think, Harper,” I tell myself, and remembering our backup plan becomes my only source of comfort.",
        jumbled: ["source", "of", "myself,", "tell", "our", "“Think,", "Harper,”", "and", "I", "becomes", "remembering", "only", "plan", "comfort.", "my", "backup"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you got separated from someone in a crowd.",
    mySentenceExample: "I got separated from my mom once in a busy shopping mall.",
  },
  {
    number: 6,
    title: "Staying Calm",
    image: null,
    imageNote: "Harper pushing calmly through the crowd toward the venue's east entrance sign, spotting Naomi waving from a distance with relief on both faces.",
    story:
      "Taking a deep breath, I force myself to remember our carefully planned meeting spot near the east entrance, exactly as we had discussed the night before. Instead of panicking further, I calmly navigate toward that direction, weaving carefully through the dense, ever-shifting crowd around me. My heart still pounds anxiously, but having an actual plan makes the overwhelming situation feel manageable rather than completely hopeless. After several tense minutes of searching, I finally spot Naomi's distinctive denim jacket near the entrance. “Harper! Over here!” she shouts, waving both arms frantically above her head. Relief crashes over me instantly as we reunite, hugging tightly amid the chaos.",
    questions: [
      { text: "What does Harper force herself to remember?", answer: "Their planned meeting spot near the east entrance." },
      { text: "How does having a plan help Harper?", answer: "It makes the situation feel manageable instead of hopeless." },
      { text: "What does Harper finally spot?", answer: "Naomi's denim jacket, waving." },
    ],
    trueFalse: [
      { text: "Harper remembers their planned meeting spot.", answer: true },
      { text: "Having a plan makes Harper feel more hopeless.", answer: false },
      { text: "Harper spots Naomi's denim jacket near the entrance.", answer: true },
      { text: "They never actually find each other.", answer: false },
      { text: "Harper feels relief when they reunite.", answer: true },
    ],
    buildSentence: [
      {
        target: "Taking a deep breath, I force myself to remember our carefully planned meeting spot near the east entrance, exactly as we had discussed the night before.",
        jumbled: ["breath,", "a", "discussed", "had", "I", "exactly", "before.", "Taking", "we", "force", "as", "planned", "carefully", "near", "meeting", "entrance,", "the", "night", "the", "east", "deep", "spot", "remember", "myself", "to", "our"],
      },
      {
        target: "Instead of panicking further, I calmly navigate toward that direction, weaving carefully through the dense, ever-shifting crowd around me.",
        jumbled: ["through", "calmly", "direction,", "of", "further,", "weaving", "navigate", "I", "panicking", "toward", "around", "me.", "that", "ever-shifting", "dense,", "the", "carefully", "crowd", "Instead"],
      },
      {
        target: "My heart still pounds anxiously, but having an actual plan makes the overwhelming situation feel manageable rather than completely hopeless.",
        jumbled: ["makes", "manageable", "completely", "anxiously,", "actual", "than", "pounds", "having", "hopeless.", "plan", "situation", "feel", "overwhelming", "the", "still", "heart", "but", "rather", "My", "an"],
      },
      {
        target: "I finally spot Naomi's distinctive denim jacket near the entrance.",
        jumbled: ["denim", "entrance.", "near", "spot", "Naomi's", "distinctive", "I", "the", "finally", "jacket"],
      },
      {
        target: "Relief crashes over me instantly as we reunite, hugging tightly amid the chaos.",
        jumbled: ["over", "the", "Relief", "hugging", "reunite,", "we", "as", "amid", "me", "tightly", "crashes", "chaos.", "instantly"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about staying calm during a stressful moment.",
    mySentenceExample: "I stayed calm during the fire drill by remembering the exit plan.",
  },
  {
    number: 7,
    title: "The Show Begins",
    image: null,
    imageNote: "Harper and Naomi standing together with arms raised, colorful stage lights illuminating their thrilled faces as the band performs in the background.",
    story:
      "Reunited safely, Naomi and I push together toward a better spot just as the lights suddenly dim and the crowd erupts into deafening cheers. The band walks onstage, and the opening chords of their most popular song send electric energy rippling through the entire crowd instantly. I scream along with every lyric, my earlier panic completely forgotten, replaced entirely by pure, uncontainable joy. “This is it, Harper!” Naomi shouts over the music, grabbing my hand again, this time intentionally, and we jump together in perfect rhythm with thousands of other fans around us. Nothing about this moment feels ordinary; everything sparkles with an energy I have never experienced before.",
    questions: [
      { text: "What happens as the lights dim?", answer: "The crowd erupts into cheers as the band walks onstage." },
      { text: "How does Harper feel singing along?", answer: "Pure, uncontainable joy." },
      { text: "What does Naomi do with Harper's hand this time?", answer: "Grabs it intentionally." },
    ],
    trueFalse: [
      { text: "The band walks onstage as the lights dim.", answer: true },
      { text: "Harper feels only panic during the performance.", answer: false },
      { text: "Naomi grabs Harper's hand intentionally this time.", answer: true },
      { text: "The crowd stays completely quiet during the show.", answer: false },
      { text: "Harper feels pure, uncontainable joy.", answer: true },
    ],
    buildSentence: [
      {
        target: "Reunited safely, Naomi and I push together toward a better spot just as the lights suddenly dim and the crowd erupts into deafening cheers.",
        jumbled: ["lights", "crowd", "a", "safely,", "suddenly", "dim", "deafening", "together", "just", "into", "the", "toward", "Naomi", "and", "better", "push", "cheers.", "as", "erupts", "I", "spot", "and", "the", "Reunited"],
      },
      {
        target: "The band walks onstage, and the opening chords of their most popular song send electric energy rippling through the entire crowd instantly.",
        jumbled: ["chords", "most", "rippling", "song", "the", "energy", "their", "send", "and", "onstage,", "opening", "entire", "crowd", "The", "of", "band", "popular", "electric", "through", "walks", "the", "instantly."],
      },
      {
        target: "I scream along with every lyric, my earlier panic completely forgotten, replaced entirely by pure, uncontainable joy.",
        jumbled: ["joy.", "every", "by", "scream", "my", "panic", "uncontainable", "lyric,", "entirely", "I", "along", "replaced", "forgotten,", "with", "earlier", "completely", "pure,"],
      },
      {
        target: "“This is it, Harper!” Naomi shouts over the music, grabbing my hand again, this time intentionally, and we jump together in perfect rhythm with thousands of other fans around us.",
        jumbled: ["around", "hand", "fans", "of", "in", "perfect", "shouts", "again,", "it,", "thousands", "intentionally,", "other", "jump", "we", "my", "and", "rhythm", "grabbing", "this", "music,", "over", "together", "“This", "the", "with", "Naomi", "time", "is", "us.", "Harper!”"],
      },
      {
        target: "Nothing about this moment feels ordinary; everything sparkles with an energy I have never experienced before.",
        jumbled: ["energy", "sparkles", "have", "with", "I", "experienced", "everything", "feels", "about", "Nothing", "never", "ordinary;", "moment", "before.", "this", "an"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a moment when you felt pure joy.",
    mySentenceExample: "I felt pure joy watching fireworks with my whole family together.",
  },
  {
    number: 8,
    title: "An Encore Surprise",
    image: null,
    imageNote: "The lead singer sitting alone on the edge of the stage with an acoustic guitar, spotlight focused, the crowd holding up phone lights during a quiet encore moment.",
    story:
      "Just when we assume the concert has ended, the lead singer walks back out alone, carrying only an acoustic guitar and a single spotlight. The entire crowd falls into a hushed, reverent silence as she begins an unplugged, stripped-down version of an older, lesser-known song. “Harper, that's the song!” Naomi whispers, and we exchange amazed glances, recognizing it immediately from our earliest days as fans years ago. Phones rise around us, their small lights transforming the venue into something resembling a sea of tiny, twinkling stars. This unexpected, intimate moment feels even more special than the loud, energetic songs performed earlier.",
    questions: [
      { text: "What does the lead singer come back with?", answer: "An acoustic guitar, alone." },
      { text: "How does the crowd react to this moment?", answer: "Falls into hushed silence." },
      { text: "How does this moment compare to the earlier songs?", answer: "It feels even more special and intimate." },
    ],
    trueFalse: [
      { text: "The singer comes back with an acoustic guitar.", answer: true },
      { text: "The crowd stays loud and chaotic during this moment.", answer: false },
      { text: "Harper and Naomi recognize the song immediately.", answer: true },
      { text: "Phones rise around them like tiny lights.", answer: true },
      { text: "This moment feels less special than the loud songs.", answer: false },
    ],
    buildSentence: [
      {
        target: "Just when we assume the concert has ended, the lead singer walks back out alone, carrying only an acoustic guitar and a single spotlight.",
        jumbled: ["out", "single", "concert", "we", "carrying", "acoustic", "guitar", "a", "spotlight.", "singer", "the", "has", "an", "alone,", "ended,", "Just", "and", "only", "back", "when", "assume", "the", "lead", "walks"],
      },
      {
        target: "The entire crowd falls into a hushed, reverent silence as she begins an unplugged, stripped-down version of an older, lesser-known song.",
        jumbled: ["stripped-down", "reverent", "an", "begins", "hushed,", "unplugged,", "entire", "crowd", "lesser-known", "an", "version", "as", "falls", "into", "song.", "a", "of", "she", "older,", "The", "silence"],
      },
      {
        target: "“Harper, that's the song!” Naomi whispers, and we exchange amazed glances, recognizing it immediately from our earliest days as fans years ago.",
        jumbled: ["earliest", "from", "years", "song!”", "Naomi", "amazed", "ago.", "glances,", "it", "and", "recognizing", "immediately", "fans", "our", "exchange", "“Harper,", "whispers,", "the", "as", "we", "that's", "days"],
      },
      {
        target: "Phones rise around us, their small lights transforming the venue into something resembling a sea of tiny, twinkling stars.",
        jumbled: ["venue", "around", "a", "tiny,", "sea", "stars.", "twinkling", "something", "resembling", "their", "small", "Phones", "transforming", "lights", "rise", "the", "of", "us,", "into"],
      },
      {
        target: "This unexpected, intimate moment feels even more special than the loud, energetic songs performed earlier.",
        jumbled: ["songs", "even", "loud,", "more", "than", "intimate", "unexpected,", "energetic", "earlier.", "feels", "This", "moment", "the", "performed", "special"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about an unexpected moment that surprised you.",
    mySentenceExample: "An unexpected surprise party surprised me completely on my last birthday.",
  },
  {
    number: 9,
    title: "The Walk Home",
    image: null,
    imageNote: "Harper and Naomi walking side by side toward the pickup spot after the concert, both slightly tired but glowing with happiness, streetlights illuminating the sidewalk.",
    story:
      "As the venue empties, Naomi and I walk together toward our designated pickup spot, ears still ringing pleasantly from hours of loud music. My legs ache from standing and jumping for so long, but honestly, I barely notice the discomfort through my lingering excitement. We replay our favorite moments from the entire night, especially the surprising acoustic encore that neither of us expected at all. “Best night ever, Harper,” Naomi declares confidently, and for once, I completely agree without any hesitation whatsoever. Under the streetlights, walking slowly toward her cousin's waiting car, everything about tonight feels perfectly, unforgettably complete.",
    questions: [
      { text: "How do Harper's ears feel afterward?", answer: "Ringing pleasantly." },
      { text: "What do they replay while walking?", answer: "Their favorite moments from the night." },
      { text: "What does Naomi declare about the night?", answer: "Best night ever." },
    ],
    trueFalse: [
      { text: "Harper's ears still ring pleasantly.", answer: true },
      { text: "Harper feels no excitement left by this point.", answer: false },
      { text: "They replay their favorite moments while walking.", answer: true },
      { text: "Naomi declares it was the best night ever.", answer: true },
      { text: "Harper disagrees strongly with Naomi's statement.", answer: false },
    ],
    buildSentence: [
      {
        target: "Naomi and I walk together toward our designated pickup spot, ears still ringing pleasantly from hours of loud music.",
        jumbled: ["still", "of", "our", "together", "pickup", "designated", "pleasantly", "I", "ears", "loud", "from", "ringing", "walk", "spot,", "hours", "and", "toward", "Naomi", "music."],
      },
      {
        target: "My legs ache from standing and jumping for so long, but honestly, I barely notice the discomfort through my lingering excitement.",
        jumbled: ["long,", "legs", "barely", "so", "excitement.", "jumping", "through", "honestly,", "ache", "discomfort", "and", "standing", "but", "for", "notice", "the", "my", "My", "from", "I", "lingering"],
      },
      {
        target: "We replay our favorite moments from the entire night, especially the surprising acoustic encore that neither of us expected at all.",
        jumbled: ["night,", "moments", "especially", "entire", "the", "at", "expected", "the", "replay", "that", "encore", "neither", "We", "us", "favorite", "all.", "of", "acoustic", "our", "from", "surprising"],
      },
      {
        target: "“Best night ever, Harper,” Naomi declares confidently, and for once, I completely agree without any hesitation whatsoever.",
        jumbled: ["without", "“Best", "night", "whatsoever.", "completely", "agree", "declares", "once,", "and", "confidently,", "Harper,”", "any", "ever,", "for", "hesitation", "Naomi", "I"],
      },
      {
        target: "Under the streetlights, walking slowly toward her cousin's waiting car, everything about tonight feels perfectly, unforgettably complete.",
        jumbled: ["Under", "waiting", "slowly", "feels", "about", "perfectly,", "complete.", "everything", "unforgettably", "cousin's", "walking", "toward", "car,", "the", "tonight", "her", "streetlights,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about walking home after a memorable event.",
    mySentenceExample: "I walked home smiling after a memorable day at the fair.",
  },
  {
    number: 10,
    title: "A Night to Remember",
    image: null,
    imageNote: "Harper sitting on her bed at home telling Mom excitedly about the concert, phone photos spread across the blanket between them.",
    story:
      "Back home safely before curfew, I find Mom waiting up in the living room, clearly relieved to see me walk through the door unharmed. I tell her everything, from the exciting anticipation of the long line to the terrifying few minutes when Naomi and I got separated inside. Instead of worrying more, Mom seems genuinely proud hearing how calmly I handled that scary moment using our backup plan. “Sounds like you handled it perfectly, Harper,” she says warmly, and something about her trust makes tonight feel even more meaningful. Lying in bed afterward, I already find myself dreaming about the next concert.",
    questions: [
      { text: "Who is waiting up for Harper?", answer: "Mom." },
      { text: "What does Harper tell Mom about?", answer: "Everything, including the scary moment of getting separated." },
      { text: "What does Mom say about how Harper handled it?", answer: "Sounds like you handled it perfectly." },
    ],
    trueFalse: [
      { text: "Mom is waiting up in the living room.", answer: true },
      { text: "Harper hides the separation incident from Mom.", answer: false },
      { text: "Mom seems proud of how Harper handled the situation.", answer: true },
      { text: "Harper feels no desire to attend another concert.", answer: false },
      { text: "Mom's trust makes the night feel more meaningful.", answer: true },
    ],
    buildSentence: [
      {
        target: "Back home safely before curfew, I find Mom waiting up in the living room, clearly relieved to see me walk through the door unharmed.",
        jumbled: ["room,", "the", "to", "waiting", "me", "living", "door", "Mom", "Back", "through", "clearly", "walk", "the", "I", "up", "home", "find", "safely", "unharmed.", "curfew,", "see", "before", "relieved", "in"],
      },
      {
        target: "I tell her everything, from the exciting anticipation of the long line to the terrifying few minutes when Naomi and I got separated inside.",
        jumbled: ["her", "exciting", "long", "minutes", "inside.", "I", "when", "the", "anticipation", "from", "the", "to", "got", "everything,", "tell", "terrifying", "and", "of", "I", "line", "few", "the", "Naomi", "separated"],
      },
      {
        target: "Instead of worrying more, Mom seems genuinely proud hearing how calmly I handled that scary moment using our backup plan.",
        jumbled: ["proud", "scary", "seems", "how", "handled", "of", "more,", "genuinely", "using", "that", "calmly", "hearing", "Mom", "plan.", "worrying", "moment", "backup", "our", "Instead", "I"],
      },
      {
        target: "“Sounds like you handled it perfectly, Harper,” she says warmly, and something about her trust makes tonight feel even more meaningful.",
        jumbled: ["you", "more", "says", "handled", "feel", "about", "it", "“Sounds", "she", "like", "trust", "and", "makes", "her", "even", "tonight", "warmly,", "meaningful.", "perfectly,", "something", "Harper,”"],
      },
      {
        target: "Lying in bed afterward, I already find myself dreaming about the next concert.",
        jumbled: ["dreaming", "next", "afterward,", "in", "find", "bed", "myself", "already", "concert.", "about", "Lying", "I", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about earning someone's trust after handling something well.",
    mySentenceExample: "I earned my parents' trust after handling a difficult situation calmly.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
