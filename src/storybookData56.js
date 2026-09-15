// B1 Teens digital storybook, Book 56: "Starting a Small Business"
// Static content -- no Supabase. Eighth and final book in the B1 Teens
// batch (Books 49-56). Same structure/level as storybookData49.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook56/cover.jpg";

export const STORYBOOK_TITLE = "Starting a Small Business";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Theo standing behind a small table at a weekend market, arranging handmade candles, a hopeful but nervous expression as customers pass by.";

export const CHARACTERS = [
  { name: "Theo", role: "The narrator, a teenager", look: "Flannel shirt, apron with wax stains, resourceful but easily discouraged by setbacks." },
  { name: "Grandma Rosa", role: "Theo's grandmother", look: "Reading glasses, warm cardigan, practical and full of quiet wisdom." },
  { name: "Sam", role: "Theo's classmate who becomes a customer and friend", look: "Backpack covered in patches, easygoing, genuinely supportive." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "An Idea Takes Shape",
    image: null,
    imageNote: "Theo standing in his garage, surrounded by candle-making supplies and melted wax, looking at a finished candle with satisfaction.",
    story:
      "Last month, I started making candles as a hobby, mostly to relax after stressful days at school. What began as simple experimentation gradually became something I genuinely looked forward to every single evening. My friends who saw the finished candles kept asking where I bought them, surprised when I admitted I made them myself. If people are willing to pay for these, maybe this hobby could become something more substantial than just a pastime. Grandma Rosa, noticing my growing collection, says, “You should sell these at the farmers market, Theo.” The idea excites me immediately, though the practical details feel genuinely overwhelming to consider.",
    questions: [
      { text: "What did Theo start doing last month?", answer: "Making candles as a hobby." },
      { text: "What did Theo's friends keep asking?", answer: "Where he bought the candles." },
      { text: "What does Grandma Rosa suggest?", answer: "Selling them at the weekend farmers market." },
    ],
    trueFalse: [
      { text: "Theo started making candles last month.", answer: true },
      { text: "Theo's friends assumed he bought the candles somewhere.", answer: true },
      { text: "Grandma Rosa suggests selling them at the farmers market.", answer: true },
      { text: "Theo feels this idea is completely uninteresting to him.", answer: false },
      { text: "The practical details feel simple and effortless to Theo.", answer: false },
    ],
    buildSentence: [
      {
        target: "Last month, I started making candles as a hobby, mostly to relax after stressful days at school.",
        jumbled: ["I", "making", "to", "as", "candles", "days", "hobby,", "a", "Last", "after", "started", "month,", "stressful", "relax", "mostly", "school.", "at"],
      },
      {
        target: "What began as simple experimentation gradually became something I genuinely looked forward to every single evening.",
        jumbled: ["as", "single", "evening.", "every", "became", "forward", "What", "experimentation", "began", "looked", "gradually", "genuinely", "simple", "to", "something", "I"],
      },
      {
        target: "My friends who saw the finished candles kept asking where I bought them, surprised when I admitted I made them myself.",
        jumbled: ["myself.", "My", "the", "asking", "candles", "I", "when", "bought", "who", "kept", "surprised", "made", "them", "admitted", "I", "saw", "where", "finished", "them,", "friends", "I"],
      },
      {
        target: "Maybe this hobby could become something more substantial than just a pastime.",
        jumbled: ["Maybe", "this", "than", "hobby", "become", "more", "pastime.", "a", "could", "substantial", "something", "just"],
      },
      {
        target: "Grandma Rosa, noticing my growing collection, says, “You should sell these at the farmers market, Theo.”",
        jumbled: ["at", "growing", "says,", "noticing", "the", "Grandma", "sell", "collection,", "“You", "these", "my", "Theo.”", "market,", "farmers", "should", "Rosa,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a hobby that became more serious over time.",
    mySentenceExample: "My hobby of drawing became more serious over time.",
  },
  {
    number: 2,
    title: "Learning the Basics",
    image: null,
    imageNote: "Theo sitting at a kitchen table with Grandma Rosa, calculating costs on a notepad, both looking focused on the numbers.",
    story:
      "Grandma Rosa, who ran a small bakery years ago, offers to teach me the basics of running a genuine small business. We sit together calculating exact costs: wax, wicks, containers, and fragrance oils for each individual candle. “You need to know your costs before you can decide a fair price, Theo,” she explains patiently, walking me through each calculation. I'm surprised how much thought goes into pricing something correctly, beyond simply guessing a reasonable-sounding number. She also mentions the importance of setting aside money specifically for buying more supplies later. Although this feels more complicated than I initially expected, I appreciate having someone experienced guiding me through it.",
    questions: [
      { text: "What did Grandma Rosa run years ago?", answer: "A small bakery." },
      { text: "What do Theo and Grandma Rosa calculate together?", answer: "The exact costs of wax, wicks, containers, and fragrance oils." },
      { text: "What does Grandma Rosa say you need to know before pricing?", answer: "Your costs." },
    ],
    trueFalse: [
      { text: "Grandma Rosa ran a small bakery years ago.", answer: true },
      { text: "They calculate exact costs for each candle.", answer: true },
      { text: "Grandma Rosa says you need to know your costs first.", answer: true },
      { text: "Theo finds pricing simpler than he expected.", answer: false },
      { text: "Theo appreciates having experienced guidance.", answer: true },
    ],
    buildSentence: [
      {
        target: "Grandma Rosa, who ran a small bakery years ago, offers to teach me the basics of running a genuine small business.",
        jumbled: ["business.", "Rosa,", "bakery", "basics", "years", "small", "a", "offers", "a", "small", "of", "the", "ran", "teach", "me", "ago,", "genuine", "who", "Grandma", "running", "to"],
      },
      {
        target: "We sit together calculating exact costs: wax, wicks, containers, and fragrance oils for each individual candle.",
        jumbled: ["costs:", "calculating", "sit", "wicks,", "containers,", "oils", "candle.", "for", "together", "fragrance", "We", "exact", "and", "wax,", "each", "individual"],
      },
      {
        target: "“You need to know your costs before you can decide a fair price, Theo,” she explains patiently, walking me through each calculation.",
        jumbled: ["she", "costs", "each", "can", "need", "a", "before", "Theo,”", "through", "explains", "to", "your", "me", "patiently,", "decide", "“You", "walking", "you", "know", "fair", "calculation.", "price,"],
      },
      {
        target: "I'm surprised how much thought goes into pricing something correctly, beyond simply guessing a reasonable-sounding number.",
        jumbled: ["reasonable-sounding", "a", "I'm", "into", "much", "beyond", "thought", "number.", "correctly,", "how", "something", "simply", "goes", "surprised", "pricing", "guessing"],
      },
      {
        target: "I appreciate having someone experienced guiding me through it.",
        jumbled: ["experienced", "guiding", "having", "appreciate", "someone", "I", "through", "it.", "me"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning something practical from an older relative.",
    mySentenceExample: "I learned something practical about budgeting from my grandmother.",
  },
  {
    number: 3,
    title: "Preparing for the Market",
    image: null,
    imageNote: "Theo in his garage packing finished candles into a wooden crate, a handmade sign leaning against the wall nearby.",
    story:
      "Over the following two weeks, I spend nearly every evening producing enough candles for my first market appearance. I experiment with different scents, eventually settling on lavender, vanilla, and a fresh pine option for variety. Grandma Rosa helps me design a simple handmade sign, and together we create small price tags for each candle. Packing everything carefully into a wooden crate, I feel a strange mixture of excitement and genuine nervousness building steadily. This whole process requires far more preparation than I originally anticipated when this idea first started. \"One step at a time, Theo,\" I tell myself, packing the crate carefully. If nobody buys anything this weekend, I'm honestly unsure how I'll feel about continuing further.",
    questions: [
      { text: "How long does Theo spend preparing for the market?", answer: "Two weeks, nearly every evening." },
      { text: "What scents does Theo settle on?", answer: "Lavender, vanilla, and pine." },
      { text: "What does Theo feel packing everything into the crate?", answer: "Excitement and genuine nervousness." },
    ],
    trueFalse: [
      { text: "Theo spends nearly every evening for two weeks preparing.", answer: true },
      { text: "Theo settles on lavender, vanilla, and pine.", answer: true },
      { text: "Grandma Rosa refuses to help with the sign.", answer: false },
      { text: "Theo feels a mixture of excitement and nervousness.", answer: true },
      { text: "This process required less preparation than expected.", answer: false },
    ],
    buildSentence: [
      {
        target: "Over the following two weeks, I spend nearly every evening producing enough candles for my first market appearance.",
        jumbled: ["every", "I", "evening", "weeks,", "nearly", "the", "following", "for", "Over", "first", "appearance.", "producing", "enough", "my", "candles", "two", "market", "spend"],
      },
      {
        target: "I experiment with different scents, eventually settling on lavender, vanilla, and a fresh pine option for variety.",
        jumbled: ["fresh", "with", "settling", "pine", "I", "on", "option", "different", "experiment", "lavender,", "a", "for", "variety.", "eventually", "and", "vanilla,", "scents,"],
      },
      {
        target: "Grandma Rosa helps me design a simple handmade sign, and together we create small price tags for each candle.",
        jumbled: ["sign,", "candle.", "price", "for", "helps", "handmade", "small", "Grandma", "tags", "together", "each", "Rosa", "create", "and", "design", "simple", "a", "we", "me"],
      },
      {
        target: "This whole process requires far more preparation than I originally anticipated when this idea first started.",
        jumbled: ["far", "I", "anticipated", "more", "started.", "originally", "whole", "process", "this", "than", "when", "This", "idea", "first", "preparation", "requires"],
      },
      {
        target: "I'm honestly unsure how I'll feel about continuing further.",
        jumbled: ["I'm", "feel", "honestly", "further.", "how", "unsure", "about", "continuing", "I'll"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about preparing carefully for something important.",
    mySentenceExample: "I prepared carefully for my first job interview.",
  },
  {
    number: 4,
    title: "Market Day",
    image: null,
    imageNote: "Theo standing behind his small market table early in the morning, arranging candles neatly, few customers around yet, a nervous expression on his face.",
    story:
      "Saturday morning arrives, and I set up my small table at the farmers market before most vendors have even arrived. My hands shake slightly arranging the candles, adjusting them repeatedly even though they already look perfectly fine. The first hour passes slowly, with people glancing at my table but continuing past without stopping to look closer. \"Stay patient, Theo,\" I tell myself, though I start doubting whether this whole idea was genuinely realistic or simply an overly optimistic daydream. Just as discouragement begins settling in, an older woman stops, picks up a lavender candle, and smells it appreciatively. She purchases two candles, becoming my very first customer, and something inside me shifts hopefully.",
    questions: [
      { text: "What time does Theo set up his table?", answer: "Before most vendors arrive, Saturday morning." },
      { text: "How does the first hour go?", answer: "Slowly -- people glance but don't stop." },
      { text: "Who becomes Theo's very first customer?", answer: "An older woman who buys two lavender candles." },
    ],
    trueFalse: [
      { text: "Theo sets up his table before most vendors arrive.", answer: true },
      { text: "The first hour brings many eager customers immediately.", answer: false },
      { text: "Theo starts doubting whether this idea was realistic.", answer: true },
      { text: "An older woman becomes Theo's first customer.", answer: true },
      { text: "Theo feels nothing when he makes his first sale.", answer: false },
    ],
    buildSentence: [
      {
        target: "Saturday morning arrives, and I set up my small table at the farmers market before most vendors have even arrived.",
        jumbled: ["have", "the", "table", "Saturday", "at", "vendors", "I", "my", "even", "arrived.", "before", "arrives,", "small", "set", "and", "farmers", "morning", "market", "most", "up"],
      },
      {
        target: "My hands shake slightly arranging the candles, adjusting them repeatedly even though they already look perfectly fine.",
        jumbled: ["My", "they", "already", "hands", "look", "shake", "though", "the", "fine.", "even", "adjusting", "candles,", "them", "repeatedly", "slightly", "arranging", "perfectly"],
      },
      {
        target: "The first hour passes slowly, with people glancing at my table but continuing past without stopping to look closer.",
        jumbled: ["without", "table", "but", "The", "people", "at", "look", "to", "glancing", "first", "closer.", "continuing", "slowly,", "passes", "my", "hour", "with", "stopping", "past"],
      },
      {
        target: "\"Stay patient, Theo,\" I tell myself, though I start doubting whether this whole idea was genuinely realistic or simply an overly optimistic daydream.",
        jumbled: ["Theo,\"", "patient,", "realistic", "myself,", "an", "whether", "this", "overly", "I", "optimistic", "daydream.", "tell", "doubting", "was", "genuinely", "though", "\"Stay", "start", "or", "simply", "idea", "I", "whole"],
      },
      {
        target: "Just as discouragement begins settling in, an older woman stops, picks up a lavender candle, and smells it appreciatively.",
        jumbled: ["a", "Just", "stops,", "begins", "and", "up", "in,", "an", "woman", "discouragement", "lavender", "settling", "appreciatively.", "candle,", "picks", "it", "smells", "older", "as"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about the first success in something new you tried.",
    mySentenceExample: "My first success in painting came after weeks of trying.",
  },
  {
    number: 5,
    title: "A Slow Start",
    image: null,
    imageNote: "Theo sitting behind his mostly untouched table late in the afternoon, checking his phone with a tired, slightly discouraged expression.",
    story:
      "By early afternoon, I've sold only four candles total, far fewer than I had optimistically hoped for today. Watching nearby vendors selling produce and baked goods steadily makes me wonder if candles simply aren't in high demand here. I calculate my earnings against my costs and realize today's profit barely covers the gas money spent driving here. Discouragement creeps in slowly, whispering doubts about whether this entire venture makes any practical sense whatsoever. However, I remind myself that Grandma Rosa mentioned her bakery struggled significantly during its first few months too. \"Don't give up yet, Theo,\" I think. Perhaps today isn't failure exactly, just an uncomfortable, necessary first step in a longer process.",
    questions: [
      { text: "How many candles has Theo sold by early afternoon?", answer: "Four." },
      { text: "What does Theo calculate about his earnings?", answer: "That profit barely covers the gas money." },
      { text: "What does Theo remind himself about Grandma Rosa's bakery?", answer: "That it also struggled in its first few months." },
    ],
    trueFalse: [
      { text: "Theo has sold only four candles by early afternoon.", answer: true },
      { text: "Theo's profit today easily covers all his expenses.", answer: false },
      { text: "Discouragement creeps in slowly for Theo.", answer: true },
      { text: "Theo remembers Grandma Rosa's bakery also struggled at first.", answer: true },
      { text: "Theo feels today was a complete, total failure.", answer: false },
    ],
    buildSentence: [
      {
        target: "By early afternoon, I've sold only four candles total, far fewer than I had optimistically hoped for today.",
        jumbled: ["for", "afternoon,", "total,", "had", "I've", "sold", "By", "early", "today.", "far", "four", "only", "candles", "I", "optimistically", "than", "hoped", "fewer"],
      },
      {
        target: "Watching nearby vendors selling produce and baked goods steadily makes me wonder if candles simply aren't in high demand here.",
        jumbled: ["goods", "wonder", "if", "steadily", "aren't", "baked", "simply", "in", "vendors", "makes", "me", "Watching", "selling", "here.", "produce", "demand", "and", "nearby", "high", "candles"],
      },
      {
        target: "I calculate my earnings against my costs and realize today's profit barely covers the gas money spent driving here.",
        jumbled: ["here.", "the", "calculate", "earnings", "gas", "money", "my", "today's", "spent", "barely", "my", "I", "realize", "covers", "driving", "and", "costs", "profit", "against"],
      },
      {
        target: "However, I remind myself that Grandma Rosa mentioned her bakery struggled significantly during its first few months too.",
        jumbled: ["few", "significantly", "However,", "struggled", "Rosa", "that", "bakery", "Grandma", "remind", "its", "first", "myself", "months", "I", "during", "too.", "her", "mentioned"],
      },
      {
        target: "Perhaps today isn't failure exactly, just an uncomfortable, necessary first step in a longer process.",
        jumbled: ["first", "isn't", "exactly,", "failure", "just", "longer", "step", "an", "process.", "necessary", "Perhaps", "a", "uncomfortable,", "in", "today"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a slow or discouraging start to something new.",
    mySentenceExample: "My first week at a new job had a slow, discouraging start.",
  },
  {
    number: 6,
    title: "Sam Stops By",
    image: null,
    imageNote: "Sam standing at Theo's table, picking up a candle and smiling, both talking casually as other market visitors pass by.",
    story:
      "Just as I'm considering packing up early, my classmate Sam wanders past and stops, surprised to see me there. “Wait, you made these, Theo? They smell incredible,” he says, picking up the vanilla candle and examining it closely. We chat for a while, and he mentions he'd genuinely love to buy one for his mom's upcoming birthday. Talking with someone familiar, rather than strangers, helps ease some of the awkwardness I'd been feeling all day. Sam also suggests posting photos online, mentioning that several classmates might be interested if they actually knew this existed. His encouragement, though small, genuinely shifts my mood after an otherwise discouraging afternoon.",
    questions: [
      { text: "Who wanders past Theo's table?", answer: "His classmate Sam." },
      { text: "What does Sam mention wanting to buy?", answer: "A candle for his mom's birthday." },
      { text: "What does Sam suggest Theo do?", answer: "Post photos online." },
    ],
    trueFalse: [
      { text: "Theo's classmate Sam wanders past his table.", answer: true },
      { text: "Sam wants to buy a candle for his mom's birthday.", answer: true },
      { text: "Sam suggests posting photos online.", answer: true },
      { text: "Talking with Sam makes Theo feel more awkward.", answer: false },
      { text: "Sam's encouragement shifts Theo's mood positively.", answer: true },
    ],
    buildSentence: [
      {
        target: "Just as I'm considering packing up early, my classmate Sam wanders past and stops, surprised to see me there.",
        jumbled: ["surprised", "stops,", "to", "wanders", "packing", "early,", "considering", "Sam", "classmate", "past", "me", "and", "I'm", "up", "there.", "my", "as", "Just", "see"],
      },
      {
        target: "“Wait, you made these, Theo? They smell incredible,” he says, picking up the vanilla candle and examining it closely.",
        jumbled: ["vanilla", "made", "these,", "picking", "Theo?", "They", "candle", "examining", "incredible,”", "smell", "closely.", "up", "and", "it", "the", "“Wait,", "says,", "you", "he"],
      },
      {
        target: "We chat for a while, and he mentions he'd genuinely love to buy one for his mom's upcoming birthday.",
        jumbled: ["to", "love", "and", "for", "he", "a", "his", "birthday.", "chat", "while,", "mom's", "one", "mentions", "buy", "he'd", "We", "genuinely", "upcoming", "for"],
      },
      {
        target: "Talking with someone familiar, rather than strangers, helps ease some of the awkwardness I'd been feeling all day.",
        jumbled: ["day.", "with", "feeling", "rather", "I'd", "been", "of", "some", "ease", "awkwardness", "the", "someone", "familiar,", "all", "than", "strangers,", "helps", "Talking"],
      },
      {
        target: "Sam also suggests posting photos online, mentioning that several classmates might be interested if they actually knew this existed.",
        jumbled: ["if", "might", "that", "posting", "knew", "photos", "they", "interested", "several", "be", "suggests", "this", "Sam", "classmates", "actually", "also", "existed.", "mentioning", "online,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a friend's encouragement that improved a difficult day.",
    mySentenceExample: "My friend's encouragement improved a difficult day at school.",
  },
  {
    number: 7,
    title: "Trying Something New",
    image: null,
    imageNote: "Theo sitting at his laptop that evening, uploading photos of his candles to a simple social media account, focused and hopeful.",
    story:
      "That evening, following Sam's suggestion, I create a simple social media account specifically for my small candle business. I photograph each candle carefully, using natural light near my bedroom window for the clearest, most appealing images. Writing captions feels awkward initially, though I gradually find a comfortable, genuine voice describing each scent and its inspiration. \"Just try it, Theo,\" I think, and I share the account with a few close friends first, nervous about a wider audience seeing something so personal. Within an hour, several classmates comment, expressing genuine interest and asking questions about pricing and availability. This small digital step feels surprisingly significant, opening possibilities I hadn't fully considered before today.",
    questions: [
      { text: "What does Theo create that evening?", answer: "A social media account for his candle business." },
      { text: "How does Theo photograph the candles?", answer: "Using natural light near his bedroom window." },
      { text: "How do classmates respond to the account?", answer: "Several comment with genuine interest." },
    ],
    trueFalse: [
      { text: "Theo creates a social media account for his business.", answer: true },
      { text: "Theo photographs the candles using natural light.", answer: true },
      { text: "Writing captions feels effortless immediately for Theo.", answer: false },
      { text: "Several classmates comment with genuine interest.", answer: true },
      { text: "Theo feels this step is insignificant.", answer: false },
    ],
    buildSentence: [
      {
        target: "That evening, following Sam's suggestion, I create a simple social media account specifically for my small candle business.",
        jumbled: ["specifically", "my", "That", "account", "I", "social", "candle", "suggestion,", "simple", "a", "Sam's", "media", "create", "evening,", "for", "business.", "following", "small"],
      },
      {
        target: "I photograph each candle carefully, using natural light near my bedroom window for the clearest, most appealing images.",
        jumbled: ["carefully,", "each", "images.", "light", "window", "appealing", "the", "I", "most", "photograph", "for", "candle", "bedroom", "natural", "my", "clearest,", "near", "using"],
      },
      {
        target: "Writing captions feels awkward initially, though I gradually find a comfortable, genuine voice describing each scent and its inspiration.",
        jumbled: ["gradually", "though", "and", "inspiration.", "feels", "describing", "genuine", "captions", "voice", "I", "awkward", "find", "Writing", "a", "initially,", "comfortable,", "its", "each", "scent"],
      },
      {
        target: "\"Just try it, Theo,\" I think, and I share the account with a few close friends first, nervous about a wider audience seeing something so personal.",
        jumbled: ["think,", "share", "try", "wider", "close", "a", "and", "personal.", "I", "it,", "account", "nervous", "friends", "something", "Theo,\"", "a", "\"Just", "audience", "few", "so", "seeing", "the", "I", "first,", "with", "about"],
      },
      {
        target: "Within an hour, several classmates comment, expressing genuine interest and asking questions about pricing and availability.",
        jumbled: ["comment,", "hour,", "classmates", "asking", "several", "expressing", "Within", "interest", "an", "questions", "and", "pricing", "and", "genuine", "about", "availability."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about trying a new way to share something you made.",
    mySentenceExample: "I tried a new way to share my art by posting it online.",
  },
  {
    number: 8,
    title: "A Second Market Day",
    image: null,
    imageNote: "Theo standing confidently behind a busier market table two weeks later, several customers browsing his expanded candle selection.",
    story:
      "Two weeks later, I return to the farmers market with a slightly larger selection and, thanks to social media, a bit more confidence. Several classmates who saw my posts actually show up specifically to purchase candles, which genuinely surprises and delights me. Grandma Rosa joins me this time, helping with sales while offering encouragement whenever conversations with customers feel intimidating. By midday, I've already sold more than double what I sold during my entire first market appearance. A regular market vendor nearby compliments my scents, offering small tips about attracting more foot traffic effectively. \"Look how far you've come, Theo,\" I think. Today feels dramatically different from that discouraging first Saturday just two weeks earlier.",
    questions: [
      { text: "How does Theo's confidence compare to the first market day?", answer: "A bit more confident, thanks to social media." },
      { text: "Who shows up specifically to purchase candles?", answer: "Several classmates who saw his posts." },
      { text: "How does today compare to Theo's first market appearance?", answer: "He sells more than double what he sold the first time." },
    ],
    trueFalse: [
      { text: "Theo has a bit more confidence this time.", answer: true },
      { text: "Classmates who saw his posts show up to buy candles.", answer: true },
      { text: "Grandma Rosa joins Theo at the market this time.", answer: true },
      { text: "Theo sells less than his first market appearance.", answer: false },
      { text: "Today feels dramatically different from the first Saturday.", answer: true },
    ],
    buildSentence: [
      {
        target: "Two weeks later, I return to the farmers market with a slightly larger selection and, thanks to social media, a bit more confidence.",
        jumbled: ["weeks", "social", "farmers", "confidence.", "a", "thanks", "later,", "with", "a", "media,", "to", "to", "more", "I", "Two", "selection", "the", "bit", "market", "larger", "slightly", "return", "and,"],
      },
      {
        target: "Several classmates who saw my posts actually show up specifically to purchase candles, which genuinely surprises and delights me.",
        jumbled: ["my", "delights", "genuinely", "up", "posts", "Several", "purchase", "actually", "candles,", "and", "who", "to", "classmates", "surprises", "specifically", "show", "saw", "me.", "which"],
      },
      {
        target: "Grandma Rosa joins me this time, helping with sales while offering encouragement whenever conversations with customers feel intimidating.",
        jumbled: ["encouragement", "this", "sales", "joins", "offering", "feel", "Rosa", "time,", "with", "intimidating.", "conversations", "with", "helping", "Grandma", "me", "customers", "whenever", "while"],
      },
      {
        target: "A regular market vendor nearby compliments my scents, offering small tips about attracting more foot traffic effectively.",
        jumbled: ["small", "A", "effectively.", "foot", "my", "about", "regular", "market", "more", "scents,", "nearby", "attracting", "vendor", "compliments", "offering", "traffic", "tips"],
      },
      {
        target: "Today feels dramatically different from that discouraging first Saturday just two weeks earlier.",
        jumbled: ["first", "two", "discouraging", "different", "Saturday", "that", "dramatically", "just", "weeks", "feels", "from", "earlier.", "Today"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing real improvement after trying again.",
    mySentenceExample: "I noticed real improvement in my writing after trying again with feedback.",
  },
  {
    number: 9,
    title: "Reinvesting in the Business",
    image: null,
    imageNote: "Theo and Grandma Rosa sitting at the kitchen table, counting money and writing a supply list, both engaged and planning ahead.",
    story:
      "That evening, Grandma Rosa and I sit down together to count earnings and plan our next practical steps carefully. Following her advice, I set aside a portion specifically for buying more supplies rather than spending everything immediately. We create a list of new scents to try, based on customer feedback and requests from the past two markets. I also decide to invest slightly in better packaging, something a customer mentioned might increase perceived value noticeably. “Sustainable businesses grow gradually, Theo, reinvesting steadily rather than expanding too quickly,” Grandma Rosa reminds me. Watching my small hobby transform into something genuinely sustainable feels remarkably satisfying tonight.",
    questions: [
      { text: "What do Theo and Grandma Rosa do that evening?", answer: "Count earnings and plan next steps." },
      { text: "What does Theo set aside a portion for?", answer: "Buying more supplies." },
      { text: "What does Grandma Rosa remind Theo about sustainable businesses?", answer: "That they grow gradually, reinvesting steadily." },
    ],
    trueFalse: [
      { text: "Theo and Grandma Rosa count earnings together.", answer: true },
      { text: "Theo sets aside a portion for buying more supplies.", answer: true },
      { text: "Theo decides to invest in better packaging.", answer: true },
      { text: "Grandma Rosa suggests expanding as quickly as possible.", answer: false },
      { text: "Theo feels nothing watching his hobby transform.", answer: false },
    ],
    buildSentence: [
      {
        target: "That evening, Grandma Rosa and I sit down together to count earnings and plan our next practical steps carefully.",
        jumbled: ["earnings", "Rosa", "next", "and", "carefully.", "our", "I", "evening,", "Grandma", "together", "down", "plan", "practical", "steps", "That", "sit", "count", "and", "to"],
      },
      {
        target: "Following her advice, I set aside a portion specifically for buying more supplies rather than spending everything immediately.",
        jumbled: ["Following", "supplies", "rather", "aside", "specifically", "a", "her", "immediately.", "than", "buying", "advice,", "set", "I", "everything", "more", "portion", "for", "spending"],
      },
      {
        target: "We create a list of new scents to try, based on customer feedback and requests from the past two markets.",
        jumbled: ["markets.", "list", "scents", "based", "try,", "create", "two", "customer", "a", "feedback", "from", "on", "and", "We", "to", "the", "past", "of", "new", "requests"],
      },
      {
        target: "I also decide to invest slightly in better packaging, something a customer mentioned might increase perceived value noticeably.",
        jumbled: ["perceived", "noticeably.", "might", "in", "customer", "invest", "a", "also", "I", "mentioned", "better", "increase", "decide", "slightly", "value", "packaging,", "to", "something"],
      },
      {
        target: "“Sustainable businesses grow gradually, Theo, reinvesting steadily rather than expanding too quickly,” Grandma Rosa reminds me.",
        jumbled: ["expanding", "too", "grow", "reinvesting", "Grandma", "gradually,", "steadily", "businesses", "reminds", "Rosa", "rather", "quickly,”", "me.", "Theo,", "“Sustainable", "than"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about planning carefully for the future of something you're building.",
    mySentenceExample: "I planned carefully for the future of my small savings.",
  },
  {
    number: 10,
    title: "A Real Small Business",
    image: null,
    imageNote: "Theo standing proudly at a now well-established market stand, a small handmade sign reading 'Theo's Candles,' regular customers greeting him warmly.",
    story:
      "Three months later, my small candle stand has become a regular, recognizable fixture at the weekend farmers market. I now have several repeat customers who greet me by name, along with a small but steadily growing online following too. Looking back at that discouraging first Saturday, I barely recognize the nervous, uncertain version of myself from back then. Grandma Rosa still helps occasionally, though I handle most decisions confidently on my own now, something that genuinely surprises me sometimes. This experience taught me that meaningful growth rarely happens instantly; it builds slowly through persistence, feedback, and reinvestment. \"You built this, Theo,\" I think. What started as simple stress relief has genuinely become something I'm authentically proud of building.",
    questions: [
      { text: "What has Theo's candle stand become three months later?", answer: "A regular, recognizable fixture at the market." },
      { text: "What does Theo now have that he didn't before?", answer: "Several repeat customers and a growing online following." },
      { text: "What did this experience teach Theo about growth?", answer: "That it builds slowly through persistence, feedback, and reinvestment." },
    ],
    trueFalse: [
      { text: "Theo's stand has become a regular market fixture.", answer: true },
      { text: "Theo now has several repeat customers.", answer: true },
      { text: "Theo handles most decisions confidently on his own now.", answer: true },
      { text: "Theo learned that growth happens instantly.", answer: false },
      { text: "Theo feels proud of what he has built.", answer: true },
    ],
    buildSentence: [
      {
        target: "Three months later, my small candle stand has become a regular, recognizable fixture at the weekend farmers market.",
        jumbled: ["a", "fixture", "small", "the", "regular,", "farmers", "weekend", "market.", "months", "has", "later,", "at", "my", "become", "recognizable", "Three", "candle", "stand"],
      },
      {
        target: "I now have several repeat customers who greet me by name, along with a small but steadily growing online following too.",
        jumbled: ["a", "me", "too.", "who", "by", "several", "have", "online", "repeat", "steadily", "following", "I", "name,", "small", "along", "greet", "customers", "but", "now", "growing", "with"],
      },
      {
        target: "Grandma Rosa still helps occasionally, though I handle most decisions confidently on my own now, something that genuinely surprises me sometimes.",
        jumbled: ["occasionally,", "that", "own", "decisions", "sometimes.", "Grandma", "handle", "still", "surprises", "my", "Rosa", "on", "something", "helps", "I", "most", "me", "though", "now,", "confidently", "genuinely"],
      },
      {
        target: "This experience taught me that meaningful growth rarely happens instantly; it builds slowly through persistence, feedback, and reinvestment.",
        jumbled: ["instantly;", "that", "reinvestment.", "builds", "This", "it", "taught", "me", "happens", "persistence,", "and", "feedback,", "through", "slowly", "growth", "experience", "rarely", "meaningful"],
      },
      {
        target: "What started as simple stress relief has genuinely become something I'm authentically proud of building.",
        jumbled: ["What", "started", "stress", "authentically", "simple", "genuinely", "as", "become", "relief", "building.", "I'm", "of", "has", "something", "proud"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something you built slowly through persistence.",
    mySentenceExample: "I built my confidence slowly through persistence and practice.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
