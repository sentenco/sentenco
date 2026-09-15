// B1 Teens digital storybook, Book 51: "Failing the Try-Outs"
// Static content -- no Supabase. Third book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Chapter images are not generated yet -- image is left null per chapter so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.
import coverImg from "./assets/storybook51/cover.jpg";

export const STORYBOOK_TITLE = "Failing the Try-Outs";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Jordan standing alone outside the gym doors, staring at a posted list without his name on it, shoulders slumped in disappointment.";

export const CHARACTERS = [
  { name: "Jordan", role: "The narrator, a teenager", look: "Athletic build, team jersey, determined but struggling with disappointment." },
  { name: "Coach Reeves", role: "The basketball team's coach", look: "Whistle around his neck, clipboard, honest but encouraging." },
  { name: "Mei", role: "Jordan's classmate and friend", look: "Ponytail, glasses, thoughtful and steady presence." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Preparing for Try-Outs",
    image: null,
    imageNote: "Jordan practicing basketball shots alone on an outdoor court at sunset, sweat visible, a determined expression on his face.",
    story:
      "For the past two months, I've practiced basketball almost every single day after school without exception. Making the varsity team has been my main goal since I started high school, and try-outs are finally tomorrow. I've been shooting free throws, running drills, and watching game footage whenever I possibly have free time. If I make the team this year, it would prove all those early morning practices were genuinely worth the effort. My legs ache tonight from today's final practice session, but I feel more prepared than I've ever felt before. \"You're ready for this, Jordan,\" I tell myself. Tomorrow will either confirm everything I've worked toward or force me to reconsider my whole plan.",
    questions: [
      { text: "How long has Jordan been practicing basketball?", answer: "Two months, almost every day." },
      { text: "What has been Jordan's main goal since high school started?", answer: "Making the varsity team." },
      { text: "How does Jordan feel the night before try-outs?", answer: "More prepared than ever, though his legs ache." },
    ],
    trueFalse: [
      { text: "Jordan has practiced almost every day for two months.", answer: true },
      { text: "Making the varsity team has been Jordan's main goal.", answer: true },
      { text: "Try-outs are scheduled for next month.", answer: false },
      { text: "Jordan's legs ache from today's practice.", answer: true },
      { text: "Jordan feels less prepared than ever before.", answer: false },
    ],
    buildSentence: [
      {
        target: "For the past two months, I've practiced basketball almost every single day after school without exception.",
        jumbled: ["two", "the", "exception.", "I've", "practiced", "For", "day", "months,", "single", "past", "almost", "school", "basketball", "without", "every", "after"],
      },
      {
        target: "Making the varsity team has been my main goal since I started high school, and try-outs are finally tomorrow.",
        jumbled: ["Making", "since", "high", "I", "try-outs", "tomorrow.", "been", "varsity", "school,", "my", "started", "team", "and", "the", "finally", "main", "are", "goal", "has"],
      },
      {
        target: "It would prove all those early morning practices were genuinely worth the effort.",
        jumbled: ["early", "were", "would", "morning", "practices", "It", "worth", "prove", "those", "the", "genuinely", "effort.", "all"],
      },
      {
        target: "My legs ache tonight from today's final practice session, but I feel more prepared than I've ever felt before.",
        jumbled: ["felt", "feel", "ache", "more", "today's", "I've", "practice", "legs", "from", "than", "session,", "but", "before.", "tonight", "prepared", "final", "I", "My", "ever"],
      },
      {
        target: "Tomorrow will either confirm everything I've worked toward or force me to reconsider my whole plan.",
        jumbled: ["whole", "either", "I've", "will", "confirm", "reconsider", "me", "my", "toward", "or", "Tomorrow", "to", "force", "plan.", "everything", "worked"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about preparing hard for something important.",
    mySentenceExample: "I prepared hard for my exam by studying every night.",
  },
  {
    number: 2,
    title: "Try-Out Day",
    image: null,
    imageNote: "Jordan standing in a crowded gym with other hopeful players, stretching nervously while Coach Reeves observes from the sidelines.",
    story:
      "The gym feels crowded and tense as nearly thirty players stretch and warm up before try-outs officially begin. Coach Reeves walks around with his clipboard, occasionally jotting down notes while watching everyone carefully. My hands feel slightly sweaty. \"Just focus, Jordan,\" I tell myself, trying to concentrate on my own performance rather than comparing myself to others. During the scrimmage portion, I make a few solid plays, though I also miss an easy shot I normally never miss. While running drills, I notice Coach Reeves watching me specifically at one point, which makes me both hopeful and nervous simultaneously. By the end of the session, I genuinely have no idea how well I actually performed.",
    questions: [
      { text: "How many players are trying out?", answer: "Nearly thirty." },
      { text: "What does Jordan try to focus on?", answer: "His own performance, not comparing to others." },
      { text: "How does Jordan feel by the end of the session?", answer: "He has no idea how well he performed." },
    ],
    trueFalse: [
      { text: "Nearly thirty players are trying out.", answer: true },
      { text: "Jordan tries to focus only on comparing himself to others.", answer: false },
      { text: "Jordan misses an easy shot he normally makes.", answer: true },
      { text: "Coach Reeves watches Jordan at one point.", answer: true },
      { text: "Jordan feels completely confident about his performance.", answer: false },
    ],
    buildSentence: [
      {
        target: "The gym feels crowded and tense as nearly thirty players stretch and warm up before try-outs officially begin.",
        jumbled: ["The", "up", "feels", "begin.", "try-outs", "crowded", "stretch", "tense", "before", "warm", "thirty", "players", "and", "nearly", "and", "gym", "as", "officially"],
      },
      {
        target: "Coach Reeves walks around with his clipboard, occasionally jotting down notes while watching everyone carefully.",
        jumbled: ["Coach", "walks", "around", "jotting", "watching", "Reeves", "occasionally", "down", "carefully.", "everyone", "with", "while", "his", "notes", "clipboard,"],
      },
      {
        target: "\"Just focus, Jordan,\" I tell myself, trying to concentrate on my own performance rather than comparing myself to others.",
        jumbled: ["focus,", "I", "tell", "on", "Jordan,\"", "rather", "myself", "own", "\"Just", "comparing", "trying", "myself,", "than", "to", "others.", "concentrate", "to", "performance", "my"],
      },
      {
        target: "During the scrimmage portion, I make a few solid plays, though I also miss an easy shot I normally never miss.",
        jumbled: ["also", "solid", "though", "easy", "the", "an", "During", "I", "few", "shot", "never", "I", "portion,", "scrimmage", "a", "normally", "I", "miss.", "miss", "plays,", "make"],
      },
      {
        target: "I notice Coach Reeves watching me specifically at one point, which makes me both hopeful and nervous simultaneously.",
        jumbled: ["Reeves", "me", "both", "nervous", "point,", "and", "makes", "hopeful", "one", "at", "notice", "which", "I", "specifically", "simultaneously.", "me", "Coach", "watching"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being nervous during an important test or tryout.",
    mySentenceExample: "I felt nervous during my driving test but tried to focus.",
  },
  {
    number: 3,
    title: "The Waiting Period",
    image: null,
    imageNote: "Jordan sitting at his desk at home, staring at his phone, refreshing the school website repeatedly, a tense expression on his face.",
    story:
      "Coach Reeves announced the results would be posted three days later, which somehow feels like an eternity right now. Every hour that passes, I find myself checking my phone, half expecting some kind of early notification. Mei, noticing my constant anxiety at lunch, tells me, “Overthinking this won't change the outcome, Jordan.” She's right, logically, but knowing something intellectually doesn't always calm the nervous feeling in my stomach. That night, I replay every single play from try-outs, wondering if I could have done something differently. If only results came out immediately, this waiting period wouldn't feel nearly as unbearable as it currently does.",
    questions: [
      { text: "When did Coach Reeves say results would be posted?", answer: "Three days later." },
      { text: "What does Mei remind Jordan at lunch?", answer: "That overthinking won't change the outcome." },
      { text: "What does Jordan do that night?", answer: "Replays every play from try-outs." },
    ],
    trueFalse: [
      { text: "Results will be posted three days later.", answer: true },
      { text: "Jordan feels completely calm during the waiting period.", answer: false },
      { text: "Mei reminds Jordan that overthinking won't change anything.", answer: true },
      { text: "Jordan replays every play from try-outs that night.", answer: true },
      { text: "Jordan feels this waiting period is easy to bear.", answer: false },
    ],
    buildSentence: [
      {
        target: "Coach Reeves announced the results would be posted three days later, which somehow feels like an eternity right now.",
        jumbled: ["right", "results", "would", "three", "later,", "which", "the", "feels", "now.", "be", "an", "somehow", "Reeves", "like", "announced", "posted", "Coach", "days", "eternity"],
      },
      {
        target: "Every hour that passes, I find myself checking my phone, half expecting some kind of early notification.",
        jumbled: ["half", "Every", "checking", "early", "some", "phone,", "kind", "that", "find", "notification.", "I", "my", "of", "expecting", "myself", "hour", "passes,"],
      },
      {
        target: "Mei, noticing my constant anxiety at lunch, tells me, “Overthinking this won't change the outcome, Jordan.”",
        jumbled: ["lunch,", "Mei,", "anxiety", "“Overthinking", "at", "the", "this", "outcome,", "my", "tells", "change", "won't", "noticing", "me,", "Jordan.”", "constant"],
      },
      {
        target: "She's right, logically, but knowing something intellectually doesn't always calm the nervous feeling in my stomach.",
        jumbled: ["intellectually", "logically,", "in", "always", "my", "nervous", "but", "She's", "stomach.", "feeling", "the", "calm", "right,", "doesn't", "knowing", "something"],
      },
      {
        target: "This waiting period wouldn't feel nearly as unbearable as it currently does.",
        jumbled: ["does.", "feel", "wouldn't", "it", "currently", "as", "period", "This", "as", "unbearable", "waiting", "nearly"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting anxiously for important news.",
    mySentenceExample: "I waited anxiously for news about my college application.",
  },
  {
    number: 4,
    title: "The List",
    image: null,
    imageNote: "Jordan standing in a crowd of students outside the gym, scanning a posted list on the door, his expression shifting from hope to disappointment.",
    story:
      "On the third morning, a crowd already surrounds the gym doors before I even arrive at school. I push through gently, my heart pounding as I scan the list for my name among the others. \"Check again, Jordan,\" I think, reading the list once, then twice, my stomach sinking lower with each careful pass through the names. My name isn't there, and for a moment, I genuinely cannot process what that actually means. Students around me celebrate loudly, hugging each other, while I stand frozen, feeling completely invisible in the noisy crowd. I quietly step back and walk away before anyone notices the tears threatening to form in my eyes.",
    questions: [
      { text: "What does Jordan find when he reaches the gym doors?", answer: "A crowd around the posted list." },
      { text: "How many times does Jordan read the list?", answer: "Twice." },
      { text: "How does Jordan feel when he doesn't find his name?", answer: "He can't process it -- feels invisible." },
    ],
    trueFalse: [
      { text: "A crowd already surrounds the gym doors.", answer: true },
      { text: "Jordan finds his name on the list immediately.", answer: false },
      { text: "Jordan's stomach sinks reading the list.", answer: true },
      { text: "Jordan feels completely invisible in the crowd.", answer: true },
      { text: "Jordan celebrates loudly with everyone else.", answer: false },
    ],
    buildSentence: [
      {
        target: "On the third morning, a crowd already surrounds the gym doors before I even arrive at school.",
        jumbled: ["morning,", "third", "already", "the", "I", "even", "arrive", "doors", "gym", "school.", "crowd", "On", "the", "at", "a", "surrounds", "before"],
      },
      {
        target: "I push through gently, my heart pounding as I scan the list for my name among the others.",
        jumbled: ["the", "push", "my", "others.", "the", "among", "I", "list", "scan", "I", "pounding", "name", "through", "for", "heart", "as", "my", "gently,"],
      },
      {
        target: "\"Check again, Jordan,\" I think, reading the list once, then twice, my stomach sinking lower with each careful pass through the names.",
        jumbled: ["I", "Jordan,\"", "\"Check", "then", "careful", "each", "list", "names.", "think,", "reading", "with", "the", "stomach", "sinking", "twice,", "pass", "once,", "lower", "the", "my", "again,", "through"],
      },
      {
        target: "My name isn't there, and for a moment, I genuinely cannot process what that actually means.",
        jumbled: ["there,", "and", "process", "name", "a", "actually", "genuinely", "what", "for", "moment,", "cannot", "I", "means.", "isn't", "My", "that"],
      },
      {
        target: "Students around me celebrate loudly, hugging each other, while I stand frozen, feeling completely invisible in the noisy crowd.",
        jumbled: ["Students", "loudly,", "each", "me", "the", "hugging", "I", "while", "crowd.", "in", "feeling", "noisy", "other,", "around", "stand", "invisible", "completely", "celebrate", "frozen,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a moment of disappointment you experienced.",
    mySentenceExample: "I felt disappointed when I didn't get the part in the school play.",
  },
  {
    number: 5,
    title: "Alone with the News",
    image: null,
    imageNote: "Jordan sitting alone on a bench outside the school, staring at the ground, his basketball bag beside him, a heavy expression on his face.",
    story:
      "I sit alone on a bench outside, unable to face going back into a school full of celebrating classmates. Two months of early mornings, sore muscles, and missed hangouts suddenly feel completely pointless in this exact moment. I text my mom that I'll walk home instead of getting picked up, needing time alone before facing anyone. \"It's just one try-out, Jordan,\" I remind myself. Although I know logically that one failed try-out doesn't define my entire future, it certainly doesn't feel that way right now. I keep replaying that missed shot from try-out day, wondering if it single-handedly cost me my spot. The disappointment sits heavy in my chest, making even simple breathing feel oddly difficult today.",
    questions: [
      { text: "Where does Jordan sit after seeing the list?", answer: "On a bench outside." },
      { text: "What does Jordan text his mom?", answer: "That he'll walk home instead of being picked up." },
      { text: "What does Jordan keep replaying?", answer: "The missed shot from try-out day." },
    ],
    trueFalse: [
      { text: "Jordan sits alone on a bench outside.", answer: true },
      { text: "Jordan feels his two months of work were pointless right now.", answer: true },
      { text: "Jordan texts his mom to pick him up immediately.", answer: false },
      { text: "Jordan keeps replaying the missed shot from try-outs.", answer: true },
      { text: "Jordan feels completely fine and unaffected.", answer: false },
    ],
    buildSentence: [
      {
        target: "I sit alone on a bench outside, unable to face going back into a school full of celebrating classmates.",
        jumbled: ["on", "a", "school", "sit", "a", "of", "outside,", "face", "celebrating", "I", "to", "into", "back", "full", "alone", "classmates.", "going", "bench", "unable"],
      },
      {
        target: "Two months of early mornings, sore muscles, and missed hangouts suddenly feel completely pointless in this exact moment.",
        jumbled: ["in", "mornings,", "pointless", "exact", "suddenly", "months", "sore", "missed", "and", "moment.", "early", "feel", "completely", "of", "hangouts", "Two", "this", "muscles,"],
      },
      {
        target: "I text my mom that I'll walk home instead of getting picked up, needing time alone before facing anyone.",
        jumbled: ["picked", "I", "that", "before", "alone", "facing", "text", "up,", "mom", "instead", "I'll", "of", "needing", "time", "getting", "walk", "my", "anyone.", "home"],
      },
      {
        target: "It certainly doesn't feel that way right now.",
        jumbled: ["now.", "right", "that", "doesn't", "way", "certainly", "feel", "It"],
      },
      {
        target: "I keep replaying that missed shot from try-out day, wondering if it single-handedly cost me my spot.",
        jumbled: ["I", "cost", "spot.", "it", "me", "missed", "if", "my", "single-handedly", "keep", "day,", "replaying", "shot", "wondering", "try-out", "from", "that"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about needing time alone after disappointing news.",
    mySentenceExample: "I needed time alone after hearing disappointing news about my grade.",
  },
  {
    number: 6,
    title: "Mei's Visit",
    image: null,
    imageNote: "Mei sitting beside Jordan on his front porch that evening, talking gently while he listens with a tired, thoughtful expression.",
    story:
      "That evening, Mei shows up unannounced at my house, having heard the news from someone at school. She doesn't offer empty comfort or pretend the situation isn't genuinely disappointing, which I appreciate more than expected. Instead, she asks thoughtful questions about what basketball actually means to me beyond just making this particular team. I admit I love the sport itself deeply, not only the status of wearing a varsity jersey. “Maybe there are other ways to keep playing, Jordan, even if this specific door closed,” she suggests carefully. Her perspective doesn't erase my disappointment completely, but it does offer something I desperately needed: a slightly wider view.",
    questions: [
      { text: "How does Mei find out about the news?", answer: "She hears it from someone at school." },
      { text: "What does Mei avoid doing?", answer: "Offering empty comfort or pretending it isn't disappointing." },
      { text: "What does Mei suggest to Jordan?", answer: "That there might be other ways to keep playing." },
    ],
    trueFalse: [
      { text: "Mei shows up unannounced at Jordan's house.", answer: true },
      { text: "Mei pretends the situation isn't disappointing at all.", answer: false },
      { text: "Mei asks what basketball actually means to Jordan.", answer: true },
      { text: "Mei suggests there might be other ways to keep playing.", answer: true },
      { text: "Jordan feels her perspective offers him nothing at all.", answer: false },
    ],
    buildSentence: [
      {
        target: "That evening, Mei shows up unannounced at my house, having heard the news from someone at school.",
        jumbled: ["the", "at", "from", "evening,", "my", "unannounced", "That", "having", "at", "school.", "up", "Mei", "house,", "shows", "someone", "news", "heard"],
      },
      {
        target: "She doesn't offer empty comfort or pretend the situation isn't genuinely disappointing, which I appreciate more than expected.",
        jumbled: ["comfort", "more", "expected.", "which", "than", "offer", "I", "situation", "doesn't", "appreciate", "isn't", "genuinely", "She", "empty", "disappointing,", "pretend", "or", "the"],
      },
      {
        target: "Instead, she asks thoughtful questions about what basketball actually means to me beyond just making this particular team.",
        jumbled: ["to", "making", "thoughtful", "she", "team.", "asks", "basketball", "what", "actually", "just", "about", "Instead,", "beyond", "particular", "means", "this", "questions", "me"],
      },
      {
        target: "I admit I love the sport itself deeply, not only the status of wearing a varsity jersey.",
        jumbled: ["a", "love", "of", "jersey.", "varsity", "the", "deeply,", "sport", "I", "wearing", "itself", "not", "only", "I", "status", "the", "admit"],
      },
      {
        target: "Her perspective doesn't erase my disappointment completely, but it does offer something I desperately needed: a slightly wider view.",
        jumbled: ["my", "doesn't", "a", "something", "it", "perspective", "desperately", "completely,", "Her", "view.", "I", "but", "wider", "does", "needed:", "slightly", "disappointment", "offer", "erase"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a friend who helped you see a situation differently.",
    mySentenceExample: "My friend helped me see my failed test differently by asking good questions.",
  },
  {
    number: 7,
    title: "Talking to Coach Reeves",
    image: null,
    imageNote: "Jordan standing in Coach Reeves's office, listening carefully as the coach gives feedback, both looking serious but respectful.",
    story:
      "A few days later, I gather enough courage to ask Coach Reeves for honest feedback about my try-out performance. He seems genuinely pleased I asked, explaining that my skills were actually solid, but my consistency needs more work overall. “You have real potential, Jordan, but there were three other players slightly more consistent this particular year,” he explains honestly. Hearing this stings, but it also feels considerably more useful than simply wondering endlessly what went wrong. He mentions a summer development league that could help me improve specific weaknesses before next year's try-outs. Walking out of his office, I feel something unexpected: cautious hope instead of pure defeat.",
    questions: [
      { text: "What does Jordan ask Coach Reeves for?", answer: "Honest feedback about his try-out performance." },
      { text: "What does Coach Reeves say about Jordan's skills?", answer: "That they're solid, but his consistency needs more work." },
      { text: "What does Coach Reeves mention that could help Jordan?", answer: "A summer development league." },
    ],
    trueFalse: [
      { text: "Jordan asks Coach Reeves for honest feedback.", answer: true },
      { text: "Coach Reeves says Jordan's skills were actually solid.", answer: true },
      { text: "Coach Reeves refuses to explain anything to Jordan.", answer: false },
      { text: "Coach Reeves mentions a summer development league.", answer: true },
      { text: "Jordan feels pure defeat walking out of the office.", answer: false },
    ],
    buildSentence: [
      {
        target: "A few days later, I gather enough courage to ask Coach Reeves for honest feedback about my try-out performance.",
        jumbled: ["my", "to", "performance.", "for", "feedback", "honest", "later,", "few", "gather", "about", "ask", "courage", "Reeves", "try-out", "A", "enough", "days", "Coach", "I"],
      },
      {
        target: "He seems genuinely pleased I asked, explaining that my skills were actually solid, but my consistency needs more work overall.",
        jumbled: ["overall.", "consistency", "needs", "my", "He", "skills", "pleased", "more", "but", "seems", "work", "that", "my", "explaining", "were", "I", "genuinely", "solid,", "actually", "asked,"],
      },
      {
        target: "“You have real potential, Jordan, but there were three other players slightly more consistent this particular year,” he explains honestly.",
        jumbled: ["three", "honestly.", "there", "consistent", "were", "this", "“You", "real", "but", "Jordan,", "particular", "year,”", "explains", "potential,", "other", "more", "players", "have", "slightly", "he"],
      },
      {
        target: "Hearing this stings, but it also feels considerably more useful than simply wondering endlessly what went wrong.",
        jumbled: ["more", "endlessly", "considerably", "feels", "but", "Hearing", "simply", "wrong.", "wondering", "it", "went", "stings,", "this", "useful", "what", "than", "also"],
      },
      {
        target: "He mentions a summer development league that could help me improve specific weaknesses before next year's try-outs.",
        jumbled: ["improve", "year's", "He", "a", "help", "that", "before", "specific", "me", "weaknesses", "could", "summer", "next", "mentions", "try-outs.", "league", "development"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about asking for honest feedback after a disappointment.",
    mySentenceExample: "I asked for honest feedback after failing my driving test the first time.",
  },
  {
    number: 8,
    title: "Joining the Summer League",
    image: null,
    imageNote: "Jordan practicing drills with a small group of players at an outdoor court during summer, sweating but focused and determined.",
    story:
      "I decide to sign up for the summer development league Coach Reeves mentioned, despite still feeling residual disappointment about missing varsity. The league feels different from regular try-outs, focused more on genuine skill-building than immediate competition or comparison. I work specifically on my consistency, practicing the same shots repeatedly until they feel completely automatic rather than uncertain. \"Keep going, Jordan,\" I tell myself on the days that feel discouraging, especially when progress seems painfully slow compared to what I'm hoping for. However, other days bring small breakthroughs, moments where something finally clicks into place after weeks of repetitive effort. Slowly, I begin rebuilding not just my basketball skills, but also my confidence in myself.",
    questions: [
      { text: "What does Jordan decide to sign up for?", answer: "The summer development league." },
      { text: "What does Jordan work on specifically?", answer: "His consistency." },
      { text: "What does Jordan begin rebuilding besides basketball skills?", answer: "His confidence in himself." },
    ],
    trueFalse: [
      { text: "Jordan signs up for the summer development league.", answer: true },
      { text: "The league focuses only on competition, not skill-building.", answer: false },
      { text: "Jordan works specifically on his consistency.", answer: true },
      { text: "Some days feel discouraging for Jordan.", answer: true },
      { text: "Jordan begins rebuilding his confidence too.", answer: true },
    ],
    buildSentence: [
      {
        target: "I decide to sign up for the summer development league Coach Reeves mentioned, despite still feeling residual disappointment about missing varsity.",
        jumbled: ["development", "to", "about", "residual", "despite", "league", "up", "still", "Coach", "missing", "summer", "sign", "I", "varsity.", "mentioned,", "disappointment", "decide", "for", "feeling", "the", "Reeves"],
      },
      {
        target: "The league feels different from regular try-outs, focused more on genuine skill-building than immediate competition or comparison.",
        jumbled: ["more", "competition", "skill-building", "or", "focused", "league", "on", "regular", "genuine", "immediate", "try-outs,", "than", "from", "different", "The", "feels", "comparison."],
      },
      {
        target: "I work specifically on my consistency, practicing the same shots repeatedly until they feel completely automatic rather than uncertain.",
        jumbled: ["rather", "until", "the", "work", "than", "same", "automatic", "completely", "on", "repeatedly", "feel", "uncertain.", "I", "shots", "they", "practicing", "specifically", "my", "consistency,"],
      },
      {
        target: "\"Keep going, Jordan,\" I tell myself on the days that feel discouraging, especially when progress seems painfully slow compared to what I'm hoping for.",
        jumbled: ["seems", "Jordan,\"", "hoping", "the", "compared", "that", "I'm", "going,", "to", "myself", "tell", "\"Keep", "I", "when", "progress", "discouraging,", "slow", "on", "feel", "especially", "painfully", "days", "for.", "what"],
      },
      {
        target: "However, other days bring small breakthroughs, moments where something finally clicks into place after weeks of repetitive effort.",
        jumbled: ["place", "other", "moments", "However,", "effort.", "something", "where", "into", "small", "finally", "repetitive", "days", "breakthroughs,", "after", "of", "bring", "weeks", "clicks"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about rebuilding your confidence after a setback.",
    mySentenceExample: "I rebuilt my confidence after a setback by practicing consistently.",
  },
  {
    number: 9,
    title: "A Different Kind of Team",
    image: null,
    imageNote: "Jordan laughing with his summer league teammates after a game, all high-fiving each other, a relaxed and happy atmosphere.",
    story:
      "By midsummer, I've become genuinely close with several teammates from the development league, something I hadn't expected at all. Unlike the pressure-filled atmosphere of varsity try-outs, this group feels supportive, encouraging each other through mistakes rather than judging them harshly. One teammate, Marcus, also didn't make varsity this year, and we bond over our shared disappointment and determination. We practice extra hours together sometimes, pushing each other to improve rather than competing against one another directly. I realize this experience is teaching me something varsity might not have: genuine teamwork built on mutual support instead of only competition. \"Maybe this is exactly where you needed to be, Jordan,\" I think. Missing that first list might have led me somewhere unexpectedly valuable.",
    questions: [
      { text: "What has Jordan become by midsummer?", answer: "Close with several teammates from the league." },
      { text: "Who is Marcus, and what do he and Jordan share?", answer: "A teammate who also didn't make varsity; they share disappointment and determination." },
      { text: "What is Jordan realizing about this experience?", answer: "That it's teaching him genuine teamwork built on mutual support." },
    ],
    trueFalse: [
      { text: "Jordan has become close with several teammates.", answer: true },
      { text: "This group judges each other harshly for mistakes.", answer: false },
      { text: "Marcus also didn't make varsity this year.", answer: true },
      { text: "Jordan and Marcus practice extra hours together.", answer: true },
      { text: "Jordan feels this experience taught him nothing valuable.", answer: false },
    ],
    buildSentence: [
      {
        target: "By midsummer, I've become genuinely close with several teammates from the development league, something I hadn't expected at all.",
        jumbled: ["I've", "midsummer,", "with", "several", "from", "something", "close", "I", "become", "all.", "By", "teammates", "genuinely", "at", "hadn't", "development", "the", "league,", "expected"],
      },
      {
        target: "Unlike the pressure-filled atmosphere of varsity try-outs, this group feels supportive, encouraging each other through mistakes rather than judging them harshly.",
        jumbled: ["other", "this", "pressure-filled", "each", "group", "them", "rather", "try-outs,", "atmosphere", "varsity", "feels", "encouraging", "judging", "mistakes", "of", "the", "through", "supportive,", "than", "harshly.", "Unlike"],
      },
      {
        target: "One teammate, Marcus, also didn't make varsity this year, and we bond over our shared disappointment and determination.",
        jumbled: ["determination.", "One", "our", "varsity", "teammate,", "bond", "this", "Marcus,", "make", "also", "disappointment", "and", "and", "didn't", "we", "shared", "over", "year,"],
      },
      {
        target: "I realize this experience is teaching me something varsity might not have: genuine teamwork built on mutual support instead of only competition.",
        jumbled: ["mutual", "instead", "support", "realize", "experience", "teamwork", "on", "genuine", "competition.", "have:", "might", "something", "varsity", "this", "me", "of", "not", "is", "only", "teaching", "built", "I"],
      },
      {
        target: "\"Maybe this is exactly where you needed to be, Jordan,\" I think.",
        jumbled: ["\"Maybe", "to", "exactly", "Jordan,\"", "be,", "I", "think.", "you", "this", "where", "is", "needed"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a supportive group or team you've been part of.",
    mySentenceExample: "My study group was a supportive team that helped me through exams.",
  },
  {
    number: 10,
    title: "Looking Toward Next Year",
    image: null,
    imageNote: "Jordan standing on the outdoor court at sunset, basketball in hand, looking confidently toward the school building in the distance.",
    story:
      "As summer ends, I reflect on how differently this season turned out compared to what I had originally planned. If someone had told me in spring that failing try-outs would lead to genuine growth, I probably wouldn't have believed them. My consistency has improved noticeably, something Coach Reeves himself noticed when he stopped by one of our league games recently. \"Next year, Jordan,\" I tell myself. I'm planning to try out again, though this time with a healthier perspective on what success actually means. Whether or not I make the team, I now know that setbacks don't have to be endings, only unexpected redirections. This summer taught me resilience matters more than any single try-out result ever could.",
    questions: [
      { text: "What does Jordan reflect on as summer ends?", answer: "How differently this season turned out than planned." },
      { text: "What did Coach Reeves notice when he stopped by?", answer: "That Jordan's consistency has improved noticeably." },
      { text: "What has Jordan learned about setbacks?", answer: "That they don't have to be endings, only unexpected redirections." },
    ],
    trueFalse: [
      { text: "Jordan reflects on how the season turned out.", answer: true },
      { text: "Coach Reeves noticed Jordan's improved consistency.", answer: true },
      { text: "Jordan decides never to try out for the team again.", answer: false },
      { text: "Jordan learned setbacks don't have to be endings.", answer: true },
      { text: "Jordan believes resilience matters less than results.", answer: false },
    ],
    buildSentence: [
      {
        target: "I reflect on how differently this season turned out compared to what I had originally planned.",
        jumbled: ["I", "out", "season", "to", "originally", "differently", "turned", "what", "planned.", "on", "compared", "how", "reflect", "this", "I", "had"],
      },
      {
        target: "I probably wouldn't have believed them.",
        jumbled: ["have", "I", "probably", "wouldn't", "believed", "them."],
      },
      {
        target: "My consistency has improved noticeably, something Coach Reeves himself noticed when he stopped by one of our league games recently.",
        jumbled: ["our", "stopped", "consistency", "My", "Reeves", "himself", "league", "Coach", "noticed", "noticeably,", "one", "he", "recently.", "by", "improved", "something", "of", "has", "when", "games"],
      },
      {
        target: "I'm planning to try out again, though this time with a healthier perspective on what success actually means.",
        jumbled: ["this", "means.", "success", "on", "with", "out", "planning", "perspective", "again,", "actually", "time", "a", "I'm", "what", "try", "healthier", "though", "to"],
      },
      {
        target: "Whether or not I make the team, I now know that setbacks don't have to be endings, only unexpected redirections.",
        jumbled: ["that", "to", "make", "setbacks", "don't", "now", "be", "not", "the", "have", "Whether", "I", "only", "team,", "unexpected", "I", "endings,", "or", "know", "redirections."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about what you learned from a difficult setback.",
    mySentenceExample: "I learned that setbacks can lead to unexpected growth if I keep trying.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};
