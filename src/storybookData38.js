// A2 Teens digital storybook, Book 38: "Learning to Skateboard"
// Static content -- no Supabase. Eighth and final book in the A2 Teens
// batch (Books 31-38). Same structure/level as storybookData31.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook38/cover.jpg";

export const STORYBOOK_TITLE = "Learning to Skateboard";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Marcus balancing confidently on a skateboard at a sunny skate park, Dev and Jasmine cheering nearby, colorful ramps and graffiti art in the background.";

export const CHARACTERS = [
  { name: "Marcus", role: "The narrator, a teenager", look: "Short hair, graphic T-shirt, eager but visibly wobbly on wheels at first." },
  { name: "Dev", role: "A friendly, experienced skater Marcus meets", look: "Beanie, scraped knees, encouraging and patient." },
  { name: "Jasmine", role: "An older skater at the park", look: "Nose ring, worn-in sneakers, confident and generous with advice." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The New Skateboard",
    image: null,
    imageNote: "Marcus unwrapping a brand-new skateboard on his birthday, eyes wide with excitement, his family watching and smiling in the living room.",
    story:
      "For my sixteenth birthday, my older cousin surprises me with something I've secretly wanted for months: a genuine, brand-new skateboard with bright orange wheels. I have watched skating videos online countless times, admiring how effortlessly experienced skaters glide, flip, and balance with apparent ease. Holding the smooth wooden deck in my hands, I feel a rush of excitement mixed with sudden, unexpected nervousness about actually trying it myself. “You'll fall a lot before you get good, Marcus,” my cousin warns honestly, though his warning barely dampens my enthusiasm. That evening, I can't wait to finally step onto it for the very first time.",
    questions: [
      { text: "What does Marcus's cousin give him?", answer: "A new skateboard with orange wheels." },
      { text: "What has Marcus watched countless times?", answer: "Skating videos online." },
      { text: "What warning does his cousin give?", answer: "You'll fall a lot before you get good." },
    ],
    trueFalse: [
      { text: "Marcus's cousin gives him a skateboard.", answer: true },
      { text: "Marcus has never watched any skating videos before.", answer: false },
      { text: "His cousin warns he'll fall a lot before getting good.", answer: true },
      { text: "Marcus feels nothing about trying it himself.", answer: false },
      { text: "Marcus can't wait to step onto it.", answer: true },
    ],
    buildSentence: [
      {
        target: "For my sixteenth birthday, my older cousin surprises me with something I've secretly wanted for months: a genuine, brand-new skateboard with bright orange wheels.",
        jumbled: ["wheels.", "cousin", "orange", "a", "my", "bright", "brand-new", "with", "older", "skateboard", "wanted", "me", "For", "for", "I've", "secretly", "months:", "my", "with", "genuine,", "surprises", "sixteenth", "birthday,", "something"],
      },
      {
        target: "I have watched skating videos online countless times, admiring how effortlessly experienced skaters glide, flip, and balance with apparent ease.",
        jumbled: ["with", "glide,", "how", "experienced", "videos", "admiring", "effortlessly", "apparent", "online", "ease.", "have", "balance", "I", "flip,", "skating", "countless", "watched", "skaters", "and", "times,"],
      },
      {
        target: "Holding the smooth wooden deck in my hands, I feel a rush of excitement mixed with sudden, unexpected nervousness about actually trying it myself.",
        jumbled: ["mixed", "I", "trying", "myself.", "my", "feel", "smooth", "it", "of", "wooden", "rush", "deck", "sudden,", "Holding", "the", "about", "nervousness", "in", "unexpected", "hands,", "excitement", "actually", "with", "a"],
      },
      {
        target: "“You'll fall a lot before you get good, Marcus,” my cousin warns honestly, though his warning barely dampens my enthusiasm.",
        jumbled: ["warning", "though", "“You'll", "fall", "enthusiasm.", "my", "lot", "dampens", "good,", "get", "barely", "my", "warns", "his", "cousin", "before", "you", "Marcus,”", "a", "honestly,"],
      },
      {
        target: "That evening, I can't wait to finally step onto it for the very first time.",
        jumbled: ["can't", "time.", "very", "I", "step", "it", "evening,", "for", "first", "wait", "finally", "the", "to", "That", "onto"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about receiving a gift you had wanted for a long time.",
    mySentenceExample: "I received a bicycle I had wanted for a long time on my birthday.",
  },
  {
    number: 2,
    title: "Wobbly First Try",
    image: null,
    imageNote: "Marcus wobbling unsteadily on his skateboard in his driveway, arms flailing for balance, his younger sister watching and giggling from the porch.",
    story:
      "In our driveway, I step onto the skateboard for the first time, immediately discovering that standing still on wheels feels shockingly harder than any video suggested. My arms flail wildly for balance, and within seconds, I topple sideways onto the grass, feeling slightly foolish despite no one else being around. My little sister watches from the porch, giggling openly at my clumsy, uncoordinated attempts to simply stay upright. Determined despite the embarrassment, I climb back on repeatedly, falling nearly a dozen times before managing even a few wobbly, uncertain seconds of actual balance. “Come on, Marcus,” I mutter, climbing back on again. This is definitely harder than it looks online.",
    questions: [
      { text: "What does Marcus discover about standing on the skateboard?", answer: "That it's shockingly harder than it looks." },
      { text: "Who watches and giggles at Marcus?", answer: "His little sister." },
      { text: "How many times does Marcus fall?", answer: "Nearly a dozen." },
    ],
    trueFalse: [
      { text: "Standing still on wheels feels harder than expected.", answer: true },
      { text: "Marcus stays perfectly balanced on his first try.", answer: false },
      { text: "Marcus's little sister watches and giggles.", answer: true },
      { text: "Marcus gives up after falling once.", answer: false },
      { text: "Marcus falls nearly a dozen times.", answer: true },
    ],
    buildSentence: [
      {
        target: "In our driveway, I step onto the skateboard for the first time, immediately discovering that standing still on wheels feels shockingly harder than any video suggested.",
        jumbled: ["discovering", "on", "In", "our", "for", "driveway,", "immediately", "skateboard", "the", "harder", "wheels", "suggested.", "still", "the", "shockingly", "time,", "any", "standing", "video", "that", "first", "onto", "than", "step", "feels", "I"],
      },
      {
        target: "My arms flail wildly for balance, and within seconds, I topple sideways onto the grass, feeling slightly foolish despite no one else being around.",
        jumbled: ["feeling", "seconds,", "foolish", "the", "despite", "within", "topple", "around.", "balance,", "being", "one", "slightly", "I", "wildly", "and", "for", "arms", "onto", "My", "flail", "else", "grass,", "sideways", "no"],
      },
      {
        target: "My little sister watches from the porch, giggling openly at my clumsy, uncoordinated attempts to simply stay upright.",
        jumbled: ["openly", "upright.", "stay", "simply", "sister", "at", "watches", "from", "my", "giggling", "to", "porch,", "the", "clumsy,", "My", "little", "uncoordinated", "attempts"],
      },
      {
        target: "Determined despite the embarrassment, I climb back on repeatedly, falling nearly a dozen times before managing even a few wobbly, uncertain seconds of actual balance.",
        jumbled: ["a", "of", "managing", "balance.", "on", "falling", "repeatedly,", "back", "seconds", "the", "before", "times", "wobbly,", "uncertain", "Determined", "embarrassment,", "few", "I", "actual", "even", "dozen", "a", "despite", "nearly", "climb"],
      },
      {
        target: "“Come on, Marcus,” I mutter, climbing back on again.",
        jumbled: ["mutter,", "again.", "back", "I", "on", "“Come", "climbing", "on,", "Marcus,”"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about something that was harder than it looked at first.",
    mySentenceExample: "Cooking rice was harder than it looked when I first tried it.",
  },
  {
    number: 3,
    title: "The Skate Park",
    image: null,
    imageNote: "Marcus standing hesitantly at the entrance of a busy skate park, watching skilled skaters perform tricks on ramps, his skateboard held nervously under his arm.",
    story:
      "After a week of driveway practice, I finally muster enough courage to visit the local skate park everyone at school talks about constantly. Standing at the entrance, I watch several skilled skaters gliding smoothly across ramps, performing tricks that look impossibly graceful and effortless from where I stand. Suddenly, my modest driveway progress feels embarrassingly insignificant compared to their obvious expertise and confident, practiced movements. Part of me considers turning around immediately, convinced everyone will notice how obviously inexperienced I actually am. “You can do this, Marcus,” I tell myself, taking a deep breath and stepping through the gate, reminding myself everyone here started exactly where I'm standing now.",
    questions: [
      { text: "Where does Marcus finally visit?", answer: "The local skate park." },
      { text: "What does Marcus watch skilled skaters doing?", answer: "Gliding smoothly and performing tricks." },
      { text: "What does Marcus consider doing?", answer: "Turning around immediately and leaving." },
    ],
    trueFalse: [
      { text: "Marcus visits the local skate park.", answer: true },
      { text: "Marcus feels his progress is impressive compared to others.", answer: false },
      { text: "Marcus considers turning around immediately.", answer: true },
      { text: "Marcus refuses to enter the park at all.", answer: false },
      { text: "Marcus reminds himself everyone started somewhere.", answer: true },
    ],
    buildSentence: [
      {
        target: "I finally muster enough courage to visit the local skate park everyone at school talks about constantly.",
        jumbled: ["enough", "to", "muster", "constantly.", "visit", "at", "talks", "about", "everyone", "local", "I", "skate", "the", "courage", "school", "park", "finally"],
      },
      {
        target: "Standing at the entrance, I watch several skilled skaters gliding smoothly across ramps, performing tricks that look impossibly graceful and effortless from where I stand.",
        jumbled: ["look", "ramps,", "smoothly", "impossibly", "across", "where", "stand.", "that", "I", "Standing", "entrance,", "effortless", "from", "watch", "performing", "and", "several", "at", "graceful", "skilled", "I", "skaters", "tricks", "the", "gliding"],
      },
      {
        target: "Suddenly, my modest driveway progress feels embarrassingly insignificant compared to their obvious expertise and confident, practiced movements.",
        jumbled: ["modest", "obvious", "practiced", "Suddenly,", "movements.", "compared", "progress", "embarrassingly", "their", "to", "insignificant", "and", "driveway", "feels", "confident,", "my", "expertise"],
      },
      {
        target: "Part of me considers turning around immediately, convinced everyone will notice how obviously inexperienced I actually am.",
        jumbled: ["how", "notice", "obviously", "me", "I", "considers", "inexperienced", "immediately,", "everyone", "around", "of", "turning", "Part", "am.", "convinced", "actually", "will"],
      },
      {
        target: "“You can do this, Marcus,” I tell myself, taking a deep breath and stepping through the gate, reminding myself everyone here started exactly where I'm standing now.",
        jumbled: ["tell", "Marcus,”", "the", "“You", "myself", "and", "this,", "where", "breath", "through", "here", "I", "started", "everyone", "exactly", "a", "myself,", "stepping", "deep", "standing", "gate,", "taking", "now.", "I'm", "reminding", "can", "do"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling nervous entering a new place or group.",
    mySentenceExample: "I felt nervous entering the gym for the first time alone.",
  },
  {
    number: 4,
    title: "Dev Offers Tips",
    image: null,
    imageNote: "Dev crouching beside Marcus at the edge of the skate park, demonstrating proper foot placement on a skateboard, both smiling casually.",
    story:
      "Sitting awkwardly on a bench, watching rather than participating, I notice a friendly-looking guy named Dev approaching with an easy, welcoming smile. “First time here? I remember mine,” he says casually, sitting down beside me without any judgment in his tone whatsoever. “I'm Marcus,” I say, introducing myself, and he nods with an easy grin. He offers a few beginner tips about foot placement and weight distribution, things I hadn't considered while practicing alone in my driveway. Dev demonstrates a simple pushing motion, encouraging me to try it slowly on flat ground before attempting anything more ambitious. His patient, friendly guidance makes the intimidating park suddenly feel considerably more welcoming and approachable than before.",
    questions: [
      { text: "Who approaches Marcus at the skate park?", answer: "Dev." },
      { text: "What does Dev offer Marcus?", answer: "Beginner tips about foot placement and weight distribution." },
      { text: "How does Dev's guidance make Marcus feel?", answer: "The park feels more welcoming." },
    ],
    trueFalse: [
      { text: "Dev approaches Marcus with a friendly smile.", answer: true },
      { text: "Dev judges Marcus harshly for being new.", answer: false },
      { text: "Dev offers beginner tips about foot placement.", answer: true },
      { text: "Dev refuses to demonstrate anything himself.", answer: false },
      { text: "The park feels more welcoming after Dev's help.", answer: true },
    ],
    buildSentence: [
      {
        target: "Sitting awkwardly on a bench, watching rather than participating, I notice a friendly-looking guy named Dev approaching with an easy, welcoming smile.",
        jumbled: ["guy", "easy,", "notice", "a", "awkwardly", "watching", "participating,", "approaching", "Dev", "an", "I", "on", "welcoming", "named", "rather", "than", "smile.", "with", "a", "bench,", "friendly-looking", "Sitting"],
      },
      {
        target: "“First time here? I remember mine,” he says casually, sitting down beside me without any judgment in his tone whatsoever.",
        jumbled: ["says", "his", "tone", "me", "mine,”", "down", "in", "without", "“First", "any", "beside", "remember", "whatsoever.", "here?", "casually,", "I", "sitting", "time", "judgment", "he"],
      },
      {
        target: "“I'm Marcus,” I say, introducing myself, and he nods with an easy grin.",
        jumbled: ["an", "easy", "say,", "I", "nods", "with", "he", "grin.", "introducing", "myself,", "Marcus,”", "“I'm", "and"],
      },
      {
        target: "He offers a few beginner tips about foot placement and weight distribution, things I hadn't considered while practicing alone in my driveway.",
        jumbled: ["a", "weight", "I", "and", "things", "considered", "hadn't", "placement", "about", "my", "tips", "alone", "while", "driveway.", "few", "practicing", "in", "foot", "distribution,", "offers", "He", "beginner"],
      },
      {
        target: "Dev demonstrates a simple pushing motion, encouraging me to try it slowly on flat ground before attempting anything more ambitious.",
        jumbled: ["encouraging", "me", "simple", "flat", "attempting", "demonstrates", "pushing", "a", "to", "on", "slowly", "motion,", "more", "before", "Dev", "anything", "ambitious.", "ground", "it", "try"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a stranger who helped you feel welcome somewhere.",
    mySentenceExample: "A stranger helped me feel welcome on my first day at a new gym.",
  },
  {
    number: 5,
    title: "A Painful Fall",
    image: null,
    imageNote: "Marcus sitting on the ground clutching his scraped elbow, wincing in pain, his skateboard lying nearby, other skaters glancing over with concern.",
    story:
      "Feeling slightly more confident after Dev's tips, I attempt a gentle slope, gaining more speed than I anticipated and quickly losing complete control. My board shoots forward unexpectedly, and I crash hard onto the pavement, scraping my elbow painfully against the rough concrete surface. Pain shoots through my arm, and for a moment, embarrassed tears threaten to well up despite my genuine effort to stay composed in front of strangers. Several skaters glance over with concern, though thankfully no one laughs or makes the situation feel worse than it already does. “Get up, Marcus,” I tell myself, sitting there clutching my throbbing elbow, seriously questioning whether skating is really worth this.",
    questions: [
      { text: "What does Marcus attempt after Dev's tips?", answer: "A gentle slope." },
      { text: "What happens to Marcus's board?", answer: "It shoots forward and he crashes." },
      { text: "How does Marcus feel sitting on the ground?", answer: "He questions whether skating is worth it." },
    ],
    trueFalse: [
      { text: "Marcus attempts a gentle slope.", answer: true },
      { text: "Marcus stays completely in control the whole time.", answer: false },
      { text: "Marcus scrapes his elbow on the pavement.", answer: true },
      { text: "Other skaters laugh loudly at Marcus.", answer: false },
      { text: "Marcus questions whether skating is worth it.", answer: true },
    ],
    buildSentence: [
      {
        target: "Feeling slightly more confident after Dev's tips, I attempt a gentle slope, gaining more speed than I anticipated and quickly losing complete control.",
        jumbled: ["gaining", "and", "slightly", "after", "I", "slope,", "attempt", "Dev's", "a", "speed", "than", "gentle", "losing", "Feeling", "tips,", "confident", "more", "quickly", "more", "control.", "I", "complete", "anticipated"],
      },
      {
        target: "My board shoots forward unexpectedly, and I crash hard onto the pavement, scraping my elbow painfully against the rough concrete surface.",
        jumbled: ["shoots", "crash", "board", "My", "pavement,", "the", "rough", "onto", "I", "painfully", "elbow", "concrete", "unexpectedly,", "surface.", "against", "scraping", "and", "the", "forward", "hard", "my"],
      },
      {
        target: "Pain shoots through my arm, and for a moment, embarrassed tears threaten to well up despite my genuine effort to stay composed in front of strangers.",
        jumbled: ["to", "my", "stay", "arm,", "tears", "embarrassed", "despite", "well", "through", "shoots", "composed", "for", "in", "a", "to", "of", "strangers.", "up", "threaten", "Pain", "and", "front", "my", "moment,", "genuine", "effort"],
      },
      {
        target: "Several skaters glance over with concern, though thankfully no one laughs or makes the situation feel worse than it already does.",
        jumbled: ["situation", "concern,", "does.", "skaters", "the", "already", "thankfully", "no", "though", "over", "one", "glance", "Several", "it", "or", "with", "than", "feel", "makes", "laughs", "worse"],
      },
      {
        target: "“Get up, Marcus,” I tell myself, sitting there clutching my throbbing elbow, seriously questioning whether skating is really worth this.",
        jumbled: ["there", "throbbing", "“Get", "really", "my", "Marcus,”", "tell", "I", "sitting", "this.", "up,", "questioning", "myself,", "clutching", "seriously", "elbow,", "skating", "whether", "worth", "is"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a painful fall or accident you had.",
    mySentenceExample: "I had a painful fall while learning to rollerblade last year.",
  },
  {
    number: 6,
    title: "Jasmine's Encouragement",
    image: null,
    imageNote: "Jasmine crouching beside Marcus, showing him a scar on her own knee while smiling encouragingly, both sitting on the edge of the ramp.",
    story:
      "An older skater named Jasmine walks over, offering a hand to help me up while examining my scraped elbow with practiced, unbothered casualness. “Want to see something?” she asks, rolling up her pant leg to reveal an impressive collection of old scars and faded bruises across her knee. “Everyone here has stories like yours, Marcus,” she explains, sitting down beside me on the edge of a ramp. She shares how she broke her wrist during her second month of skating, yet kept practicing anyway because quitting felt worse than temporary pain ever could. Her honesty about struggling too somehow makes my own embarrassment feel considerably lighter.",
    questions: [
      { text: "Who walks over to help Marcus?", answer: "Jasmine." },
      { text: "What does Jasmine show Marcus?", answer: "Her old scars and bruises." },
      { text: "What happened to Jasmine during her second month?", answer: "She broke her wrist." },
    ],
    trueFalse: [
      { text: "Jasmine walks over to help Marcus up.", answer: true },
      { text: "Jasmine shows Marcus scars on her knee.", answer: true },
      { text: "Jasmine says everyone here has stories like his.", answer: true },
      { text: "Jasmine broke her wrist during her second month skating.", answer: true },
      { text: "Marcus feels worse after talking to Jasmine.", answer: false },
    ],
    buildSentence: [
      {
        target: "An older skater named Jasmine walks over, offering a hand to help me up while examining my scraped elbow with practiced, unbothered casualness.",
        jumbled: ["hand", "practiced,", "older", "a", "unbothered", "named", "me", "scraped", "to", "examining", "walks", "offering", "An", "while", "help", "with", "up", "casualness.", "Jasmine", "my", "elbow", "skater", "over,"],
      },
      {
        target: "“Want to see something?” she asks, rolling up her pant leg to reveal an impressive collection of old scars and faded bruises across her knee.",
        jumbled: ["leg", "reveal", "knee.", "and", "collection", "pant", "rolling", "asks,", "to", "bruises", "her", "old", "of", "see", "she", "up", "her", "an", "across", "something?”", "impressive", "“Want", "scars", "faded", "to"],
      },
      {
        target: "“Everyone here has stories like yours, Marcus,” she explains, sitting down beside me on the edge of a ramp.",
        jumbled: ["edge", "has", "like", "sitting", "she", "the", "here", "on", "beside", "explains,", "down", "me", "Marcus,”", "of", "stories", "yours,", "“Everyone", "ramp.", "a"],
      },
      {
        target: "She shares how she broke her wrist during her second month of skating, yet kept practicing anyway because quitting felt worse than temporary pain ever could.",
        jumbled: ["how", "she", "ever", "worse", "shares", "because", "felt", "anyway", "skating,", "yet", "quitting", "She", "practicing", "pain", "of", "kept", "wrist", "during", "than", "her", "could.", "temporary", "second", "broke", "month", "her"],
      },
      {
        target: "Her honesty about struggling too somehow makes my own embarrassment feel considerably lighter.",
        jumbled: ["own", "lighter.", "embarrassment", "my", "too", "considerably", "Her", "makes", "somehow", "about", "struggling", "feel", "honesty"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone sharing their own struggle to make you feel better.",
    mySentenceExample: "My coach shared his own struggle to make me feel better about losing.",
  },
  {
    number: 7,
    title: "Small Progress",
    image: null,
    imageNote: "Marcus rolling smoothly across flat pavement at the skate park, arms outstretched for balance, a small proud smile on his face.",
    story:
      "Over the following two weeks, I return to the skate park almost daily, gradually noticing small but genuinely encouraging improvements in my balance and confidence. Pushing off and gliding across flat ground no longer requires intense concentration, becoming instead something closer to natural, automatic movement. Dev and Jasmine both offer occasional encouragement whenever they spot me practicing. “Looking good, Marcus!” Jasmine calls out one afternoon, shouting friendly tips as she skates past effortlessly. I still fall occasionally, though considerably less often than during my first painful week, and the falls themselves feel less discouraging now somehow. Each small success, however minor it seems, motivates me to keep returning consistently.",
    questions: [
      { text: "How often does Marcus return to the skate park?", answer: "Almost daily." },
      { text: "What no longer requires intense concentration?", answer: "Pushing off and gliding across flat ground." },
      { text: "How do Dev and Jasmine help Marcus?", answer: "They offer encouragement and friendly tips." },
    ],
    trueFalse: [
      { text: "Marcus returns to the skate park almost daily.", answer: true },
      { text: "Pushing off still requires intense concentration.", answer: false },
      { text: "Dev and Jasmine offer occasional encouragement.", answer: true },
      { text: "Marcus never falls anymore at all.", answer: false },
      { text: "Small successes motivate Marcus to keep returning.", answer: true },
    ],
    buildSentence: [
      {
        target: "Over the following two weeks, I return to the skate park almost daily, gradually noticing small but genuinely encouraging improvements in my balance and confidence.",
        jumbled: ["following", "to", "Over", "genuinely", "almost", "small", "weeks,", "the", "noticing", "improvements", "gradually", "return", "encouraging", "in", "park", "I", "and", "my", "but", "two", "skate", "daily,", "confidence.", "the", "balance"],
      },
      {
        target: "Pushing off and gliding across flat ground no longer requires intense concentration, becoming instead something closer to natural, automatic movement.",
        jumbled: ["no", "natural,", "off", "closer", "and", "something", "automatic", "Pushing", "flat", "concentration,", "ground", "longer", "instead", "to", "across", "intense", "becoming", "movement.", "gliding", "requires"],
      },
      {
        target: "Dev and Jasmine both offer occasional encouragement whenever they spot me practicing.",
        jumbled: ["they", "whenever", "Dev", "offer", "encouragement", "and", "Jasmine", "spot", "both", "occasional", "practicing.", "me"],
      },
      {
        target: "“Looking good, Marcus!” Jasmine calls out one afternoon, shouting friendly tips as she skates past effortlessly.",
        jumbled: ["Marcus!”", "friendly", "past", "Jasmine", "one", "out", "skates", "tips", "as", "good,", "calls", "she", "effortlessly.", "afternoon,", "“Looking", "shouting"],
      },
      {
        target: "I still fall occasionally, though considerably less often than during my first painful week, and the falls themselves feel less discouraging now somehow.",
        jumbled: ["the", "considerably", "than", "discouraging", "week,", "occasionally,", "painful", "I", "less", "first", "often", "somehow.", "themselves", "feel", "though", "less", "during", "fall", "falls", "my", "and", "now", "still"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about noticing small improvements while practicing something.",
    mySentenceExample: "I noticed small improvements in my drawing after practicing every day.",
  },
  {
    number: 8,
    title: "Trying a Trick",
    image: null,
    imageNote: "Marcus attempting to pop his skateboard into the air, one foot pressing the tail down, the board flying sideways instead of flipping properly.",
    story:
      "Feeling more confident after weeks of steady progress, I decide it's finally time to attempt my first actual trick, a basic jump called an ollie. Dev explains the technique patiently, demonstrating how pressing the tail down while sliding your front foot forward should launch the board upward smoothly. My first attempt sends the board flying sideways awkwardly, missing my feet entirely and rolling several feet away across the pavement. I try again and again, each attempt slightly different but equally unsuccessful, my frustration building steadily with every failed try. “This one took me nearly a month too, Marcus,” Dev reminds me patiently.",
    questions: [
      { text: "What trick does Marcus decide to attempt?", answer: "An ollie." },
      { text: "What does Dev explain about the technique?", answer: "Pressing the tail down while sliding the front foot forward." },
      { text: "How long did this trick take Dev to master?", answer: "Nearly a month." },
    ],
    trueFalse: [
      { text: "Marcus attempts an ollie for the first time.", answer: true },
      { text: "Marcus lands the trick perfectly on his first try.", answer: false },
      { text: "Dev explains the technique patiently.", answer: true },
      { text: "This trick took Dev nearly a month to master.", answer: true },
      { text: "Marcus gives up after one attempt.", answer: false },
    ],
    buildSentence: [
      {
        target: "Feeling more confident after weeks of steady progress, I decide it's finally time to attempt my first actual trick, a basic jump called an ollie.",
        jumbled: ["decide", "time", "an", "weeks", "progress,", "Feeling", "jump", "steady", "ollie.", "finally", "of", "trick,", "my", "confident", "basic", "after", "attempt", "called", "a", "more", "to", "it's", "first", "actual", "I"],
      },
      {
        target: "Dev explains the technique patiently, demonstrating how pressing the tail down while sliding your front foot forward should launch the board upward smoothly.",
        jumbled: ["upward", "your", "forward", "pressing", "how", "demonstrating", "the", "technique", "should", "the", "sliding", "foot", "the", "front", "patiently,", "launch", "board", "tail", "down", "Dev", "smoothly.", "while", "explains"],
      },
      {
        target: "My first attempt sends the board flying sideways awkwardly, missing my feet entirely and rolling several feet away across the pavement.",
        jumbled: ["feet", "pavement.", "my", "awkwardly,", "and", "the", "sends", "the", "several", "entirely", "away", "flying", "attempt", "first", "across", "rolling", "sideways", "missing", "My", "feet", "board"],
      },
      {
        target: "I try again and again, each attempt slightly different but equally unsuccessful, my frustration building steadily with every failed try.",
        jumbled: ["building", "but", "try.", "failed", "again,", "unsuccessful,", "attempt", "equally", "my", "slightly", "frustration", "every", "different", "steadily", "each", "again", "with", "try", "and", "I"],
      },
      {
        target: "“This one took me nearly a month too, Marcus,” Dev reminds me patiently.",
        jumbled: ["nearly", "me", "patiently.", "Dev", "too,", "one", "a", "reminds", "Marcus,”", "me", "“This", "month", "took"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about attempting something difficult for the first time.",
    mySentenceExample: "I attempted a backflip on the trampoline for the first time yesterday.",
  },
  {
    number: 9,
    title: "Landing It",
    image: null,
    imageNote: "Marcus's skateboard popping cleanly into the air beneath his feet, landing smoothly back on the pavement, Dev and Jasmine cheering with raised fists nearby.",
    story:
      "After nearly two weeks of failed, frustrating attempts, something finally clicks during my regular Saturday practice session at the park. My foot presses the tail at exactly the right angle, and suddenly the board pops cleanly into the air beneath me, hovering briefly before landing smoothly back under my feet. Stunned, I nearly forget to keep rolling forward, catching myself just in time to avoid another embarrassing fall immediately afterward. Dev and Jasmine, who happened to be watching, erupt into genuine, enthusiastic cheers from across the park. “You got it, Marcus! You actually got it!” Dev shouts, running over with an excited high-five waiting.",
    questions: [
      { text: "What finally happens during Marcus's practice session?", answer: "He lands the ollie." },
      { text: "What does Marcus almost forget to do?", answer: "Keep rolling forward." },
      { text: "How do Dev and Jasmine react?", answer: "They erupt into cheers." },
    ],
    trueFalse: [
      { text: "Something finally clicks during Marcus's practice.", answer: true },
      { text: "The board pops cleanly into the air.", answer: true },
      { text: "Marcus lands but forgets to keep rolling and falls anyway.", answer: false },
      { text: "Dev and Jasmine erupt into cheers.", answer: true },
      { text: "Dev runs over with an excited high-five.", answer: true },
    ],
    buildSentence: [
      {
        target: "Something finally clicks during my regular Saturday practice session at the park.",
        jumbled: ["clicks", "session", "the", "Something", "Saturday", "at", "my", "regular", "finally", "during", "practice", "park."],
      },
      {
        target: "My foot presses the tail at exactly the right angle, and suddenly the board pops cleanly into the air beneath me, hovering briefly before landing smoothly back under my feet.",
        jumbled: ["at", "beneath", "smoothly", "the", "hovering", "presses", "feet.", "before", "tail", "under", "right", "exactly", "me,", "pops", "my", "cleanly", "landing", "My", "into", "and", "foot", "board", "air", "the", "the", "back", "angle,", "briefly", "suddenly", "the"],
      },
      {
        target: "Stunned, I nearly forget to keep rolling forward, catching myself just in time to avoid another embarrassing fall immediately afterward.",
        jumbled: ["to", "time", "in", "I", "avoid", "another", "just", "nearly", "forget", "afterward.", "rolling", "Stunned,", "myself", "fall", "forward,", "embarrassing", "immediately", "to", "keep", "catching"],
      },
      {
        target: "Dev and Jasmine, who happened to be watching, erupt into genuine, enthusiastic cheers from across the park.",
        jumbled: ["genuine,", "from", "happened", "the", "enthusiastic", "Dev", "and", "be", "erupt", "across", "watching,", "to", "into", "cheers", "Jasmine,", "park.", "who"],
      },
      {
        target: "“You got it, Marcus! You actually got it!” Dev shouts, running over with an excited high-five waiting.",
        jumbled: ["Marcus!", "over", "got", "with", "got", "waiting.", "it,", "excited", "“You", "actually", "it!”", "an", "running", "high-five", "shouts,", "You", "Dev"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finally succeeding after many failed attempts.",
    mySentenceExample: "I finally succeeded at whistling after many failed attempts all summer.",
  },
  {
    number: 10,
    title: "Part of the Crew",
    image: null,
    imageNote: "Marcus sitting on the ramp edge laughing with Dev and Jasmine and a few other skaters, all sharing snacks together as the sun sets over the park.",
    story:
      "By evening, word of my landed ollie has apparently spread among the regular skaters, and several others come over to congratulate me warmly on my progress. “Nice work out there, Marcus,” one of the regulars says with a grin. Sitting on the edge of a ramp afterward, sharing snacks with Dev, Jasmine, and a few others whose names I'm finally starting to learn, I feel genuinely different than I did weeks earlier. This place that once felt intimidating and unwelcoming now feels almost like a second home, filled with people who understand exactly what today's small victory meant. Watching the sunset paint the ramps orange, I realize that every scraped elbow along the way was completely worth this feeling.",
    questions: [
      { text: "What has spread among the regular skaters?", answer: "Word of his landed ollie." },
      { text: "Where does Marcus sit sharing snacks?", answer: "On the edge of a ramp." },
      { text: "How does the park feel to Marcus now compared to before?", answer: "Like a second home, instead of intimidating." },
    ],
    trueFalse: [
      { text: "Word of Marcus's landed ollie has spread.", answer: true },
      { text: "Several skaters come over to congratulate Marcus.", answer: true },
      { text: "Marcus still feels like a complete stranger there.", answer: false },
      { text: "The park now feels almost like a second home.", answer: true },
      { text: "Marcus regrets all the scraped elbows along the way.", answer: false },
    ],
    buildSentence: [
      {
        target: "By evening, word of my landed ollie has apparently spread among the regular skaters, and several others come over to congratulate me warmly on my progress.",
        jumbled: ["congratulate", "the", "me", "to", "spread", "on", "apparently", "progress.", "warmly", "among", "word", "regular", "By", "of", "skaters,", "my", "has", "ollie", "landed", "evening,", "several", "over", "my", "and", "come", "others"],
      },
      {
        target: "“Nice work out there, Marcus,” one of the regulars says with a grin.",
        jumbled: ["one", "“Nice", "there,", "regulars", "with", "grin.", "says", "the", "of", "out", "Marcus,”", "a", "work"],
      },
      {
        target: "Sitting on the edge of a ramp afterward, sharing snacks with Dev, Jasmine, and a few others whose names I'm finally starting to learn, I feel genuinely different than I did weeks earlier.",
        jumbled: ["of", "ramp", "learn,", "weeks", "I", "and", "whose", "with", "finally", "feel", "edge", "afterward,", "snacks", "others", "sharing", "I", "Sitting", "Dev,", "on", "earlier.", "I'm", "genuinely", "to", "a", "Jasmine,", "names", "few", "starting", "than", "did", "the", "different", "a"],
      },
      {
        target: "This place that once felt intimidating and unwelcoming now feels almost like a second home, filled with people who understand exactly what today's small victory meant.",
        jumbled: ["with", "filled", "who", "second", "people", "place", "This", "now", "feels", "small", "today's", "home,", "like", "understand", "victory", "and", "meant.", "felt", "exactly", "what", "a", "almost", "that", "unwelcoming", "once", "intimidating"],
      },
      {
        target: "Watching the sunset paint the ramps orange, I realize that every scraped elbow along the way was completely worth this feeling.",
        jumbled: ["sunset", "completely", "Watching", "realize", "orange,", "I", "the", "this", "the", "feeling.", "way", "scraped", "every", "along", "the", "ramps", "paint", "was", "that", "elbow", "worth"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finally feeling like you belonged somewhere new.",
    mySentenceExample: "I finally felt like I belonged at my new school after joining the soccer team.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
